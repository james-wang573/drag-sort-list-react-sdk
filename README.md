# drag-sort-list-react-sdk
React 拖拽排序列表组件
支持，拖拽列表排序、拖拽手柄排序、修改拖动中的元素样式、修改拖动元素时鼠标样式、修改被拖动元素的垫底元素样式、点击按钮随机排序
等，且使用了 Flip 动画思路实现了拖动排序时的过渡效果，使用 CSS transform 动画减少 DOM 重排重绘，使拖拽移动变得非常丝滑。

## 在线演示
https://james-wang573.github.io/drag-sort-list-react-sdk/

## 安装
npm install drag-sort-list-react-sdk

## 入参

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

## 使用

```tsx


import { useState } from 'react';
import debounce from 'lodash/debounce';
import DragSortList from '../sort-list';
import BarsOutlined from '../../assets/BarsOutlined.svg'
import './index.less';

function shortId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const List = () => {
  // 数据中必须有key字段，作为唯一键值
  // 虽然传入的items父级标签中有key字段，但是这个key不一定是json数据中的字段，所以可能无法绑定对应的数据进行排序。所以要从数据中获取key字段。
  const [defaultList, setDefaultList] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: (i + 1).toString(), // 必须有此字段
      id: i + 1,
      name: `Item ${i + 1}`,
    }))
  );
  const [listA, setListA] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: (i + 11).toString(), // 必须有此字段
      id: i + 11,
      name: `Item ${i + 1}`,
    }))
  );
  const [listB, setListB] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: (i + 22).toString(), // 必须有此字段
      id: i + 22,
      name: `Item ${i + 1}`,
    }))
  );
  const [listC, setListC] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: (i + 33).toString(), // 必须有此字段
      id: i + 33,
      name: `Item ${i + 1}`,
    }))
  );

  const [listD, setListD] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: (i + 44).toString(), // 必须有此字段
      id: i + 44,
      name: `Item ${i + 1}`,
    }))
  );

  const [listE, setListE] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: (i + 55).toString(), // 必须有此字段
      id: i + 55,
      name: `Item ${i + 1}`,
    }))
  );

  const [randomId, setRandomId] = useState('');

  return (
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
  );
}

export default List