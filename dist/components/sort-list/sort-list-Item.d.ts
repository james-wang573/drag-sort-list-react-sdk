import { FC, ReactNode } from 'react';

export interface PropsTypes {
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
    dragStart?: (event: MouseEvent, element: HTMLElement) => void;
    /** 拖拽移动时的回调函数 */
    dragMove?: (event: MouseEvent) => void;
    /** 拖拽结束时的回调函数 */
    dragEnd?: (event: MouseEvent) => void;
}
/**
 * 拖拽排序组件
 *
 * @module sort-list
 * @author 王大明 (ext.wangdaming3@jd.com)
 * @since 2025.07.19
 * @description
 * 拖拽排序组件。
 */
declare const SortListItem: FC<PropsTypes>;
export default SortListItem;
