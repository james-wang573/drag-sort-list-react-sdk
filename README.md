# drag-sort-list-react-sdk
React 拖拽排序列表组件

## 在线演示
https://james-wang573.github.io/drag-sort-list-react-sdk/

## 安装
npm install drag-sort-list-react-sdk

## 使用

入参说明
```tsx
export interface PropsTypes {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子组件 */
  children?: ReactNode;
  /** 触发拖拽类名 */
  triggerClass?: string;
  /** 克隆元素渲染到目标容器 */
  getContainer?: string;
  /** 拖拽移动时的样式 */
  dragMoveClass?: string;
  /** 拖拽目标元素类名 */
  dragItemTargetClass?: string;
  /** 拖拽开始时的回调函数 */
  dragStart?: (event?: MouseEvent, element?: HTMLElement) => void;
  /** 拖拽移动时的回调函数 */
  dragMove?: (event?: MouseEvent) => void;
  /** 拖拽结束时的回调函数 */
  dragEnd: (list: any[], event?: MouseEvent) => void;
  /** 拖拽列表项数据 */
  items: Array<{
    key: string; // 列表项的唯一标识
    [x: string]: any; // 其他属性
  }>;
  /** 随机排序 ID */
  randomSortingId?: string;
}
```tsx

example

```tsx
import { DragSortList } from 'drag-sort-list-react-sdk';

<div className="demos-container">
      <div>
        <h2>{'拖拽列表排序'}</h2>
        <DragSortList items={defaultList} className="demos-list" dragEnd={newList => setDefaultList(newList)}>
          {defaultList.map(item => (
            <div key={item.id} className="demos-sort-list-item">
              <div className="text">{item.name}</div>
            </div>
          ))}
        </DragSortList>
      </div>
      <div>
        <h2>{'拖拽图标排序'}</h2>
        <DragSortList items={listA} className="demos-list" dragEnd={newList => setListA(newList)} triggerClass="icon">
          {listA.map(item => (
            <div key={item.key} className="demos-sort-list-item">
              <div className="icon" style={{ margin: '0 10px 0 0' }}>
                <img src={BarsOutlined} alt="" />
              </div>
              <div className="text">{item.name}</div>
            </div>
          ))}
        </DragSortList>
      </div>

      <div>
        <h2>{'修改拖动元素样式'}</h2>
        <DragSortList
          items={listB}
          className="demos-list"
          dragEnd={newList => setListB(newList)}
          dragMoveClass={'drag-sort-list-item-move'}
        >
          {listB.map(item => (
            <div key={item.id} className="demos-sort-list-item">
              <div className="text">{item.name}</div>
            </div>
          ))}
        </DragSortList>
      </div>
      <div>
        <h2>{'修改拖动元素时鼠标样式'}</h2>
        <DragSortList
          items={listC}
          className="demos-list"
          dragStart={() => {
            document.body.style.cursor = 'move'; // 修改鼠标样式
          }}
          dragEnd={newList => {
            setListC(newList);
            document.body.style.cursor = 'default'; // 恢复鼠标样式
          }}
        >
          {listC.map(item => (
            <div key={item.id} className="demos-sort-list-item">
              <div className="text">{item.name}</div>
            </div>
          ))}
        </DragSortList>
      </div>
      <div>
        <h2>{'修改垫底元素样式'}</h2>
        <DragSortList
          items={listD}
          dragEnd={newList => setListD(newList)}
          dragItemTargetClass={'drag-sort-list-item-target'}
          className="demos-list"
        >
          {listD.map(item => (
            <div key={item.id} className="demos-sort-list-item demos-sort-list-item-target">
              <div className="text">{item.name}</div>
            </div>
          ))}
        </DragSortList>
      </div>
      <div>
        <h2>
          {'点击按钮随机排序'}
          <button onClick={debounce(() => setRandomId(shortId()), 300)}>{'随机排序'}</button>
        </h2>
        <DragSortList
          items={listE}
          dragEnd={newList => setListE(newList)}
          className="demos-list"
          randomSortingId={randomId}
        >
          {listE.map(item => (
            <div key={item.id} className="demos-sort-list-item demos-sort-list-item-target">
              <div className="text">{item.name}</div>
            </div>
          ))}
        </DragSortList>
      </div>
    </div>
