import { CSSProperties, FC, ReactNode } from 'react';

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
        key: string;
        [x: string]: any;
    }>;
    /** 随机排序 ID */
    randomSortingId?: string;
}
declare const DragSortList: FC<PropsTypes>;
export default DragSortList;
