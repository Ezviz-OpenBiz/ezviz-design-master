import * as React from 'react';
import HolderOutlined from '@ant-design/icons/HolderOutlined';
import RcTree, { TreeNode, TreeProps as RcTreeProps } from 'rc-tree';
import classNames from 'classnames';
import { DataNode, Key } from 'rc-tree/lib/interface';
import DirectoryTree from './DirectoryTree';
import { ConfigContext } from '../config-provider';
import collapseMotion from '../_util/motion';
import renderSwitcherIcon from './utils/iconUtil';
import dropIndicatorRender from './utils/dropIndicator';

export interface EzdTreeNodeAttribute {
  eventKey: string;
  prefixCls: string;
  className: string;
  expanded: boolean;
  selected: boolean;
  checked: boolean;
  halfChecked: boolean;
  children: React.ReactNode;
  title: React.ReactNode;
  pos: string;
  dragOver: boolean;
  dragOverGapTop: boolean;
  dragOverGapBottom: boolean;
  isLeaf: boolean;
  selectable: boolean;
  disabled: boolean;
  disableCheckbox: boolean;
}

export interface EzdTreeNodeProps {
  className?: string;
  checkable?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  title?: string | React.ReactNode;
  key?: Key;
  eventKey?: string;
  isLeaf?: boolean;
  checked?: boolean;
  expanded?: boolean;
  loading?: boolean;
  selected?: boolean;
  selectable?: boolean;
  icon?: ((treeNode: EzdTreeNodeAttribute) => React.ReactNode) | React.ReactNode;
  children?: React.ReactNode;
  [customProp: string]: any;
}

export interface EzdTreeNode extends React.Component<EzdTreeNodeProps, {}> {}

export interface EzdTreeNodeBaseEvent {
  node: EzdTreeNode;
  nativeEvent: MouseEvent;
}

export interface EzdTreeNodeCheckedEvent extends EzdTreeNodeBaseEvent {
  event: 'check';
  checked?: boolean;
  checkedNodes?: EzdTreeNode[];
}

export interface EzdTreeNodeSelectedEvent extends EzdTreeNodeBaseEvent {
  event: 'select';
  selected?: boolean;
  selectedNodes?: DataNode[];
}

export interface EzdTreeNodeExpandedEvent extends EzdTreeNodeBaseEvent {
  expanded?: boolean;
}

export interface EzdTreeNodeMouseEvent {
  node: EzdTreeNode;
  event: React.DragEvent<HTMLElement>;
}

export interface EzdTreeNodeDragEnterEvent extends EzdTreeNodeMouseEvent {
  expandedKeys: Key[];
}

export interface EzdTreeNodeDropEvent {
  node: EzdTreeNode;
  dragNode: EzdTreeNode;
  dragNodesKeys: Key[];
  dropPosition: number;
  dropToGap?: boolean;
  event: React.MouseEvent<HTMLElement>;
}

// [Legacy] Compatible for v3
export type TreeNodeNormal = DataNode;

type DraggableFn = (node: EzdTreeNode) => boolean;
interface DraggableConfig {
  icon?: React.ReactNode | false;
  nodeDraggable?: DraggableFn;
}

export interface TreeProps
  extends Omit<RcTreeProps, 'prefixCls' | 'showLine' | 'direction' | 'draggable'> {
  showLine?: boolean | { showLeafIcon: boolean };
  className?: string;
  /** ?????????????????? */
  multiple?: boolean;
  /** ??????????????????????????? */
  autoExpandParent?: boolean;
  /** Checkable??????????????????????????????????????????????????????????????????????????? */
  checkStrictly?: boolean;
  /** ?????????????????? */
  checkable?: boolean;
  /** ??????????????? */
  disabled?: boolean;
  /** ??????????????????????????? */
  defaultExpandAll?: boolean;
  /** ??????????????????????????? */
  defaultExpandParent?: boolean;
  /** ?????????????????????????????? */
  defaultExpandedKeys?: Key[];
  /** ???????????????????????????????????? */
  expandedKeys?: Key[];
  /** ??????????????????????????????????????? */
  checkedKeys?: Key[] | { checked: Key[]; halfChecked: Key[] };
  /** ????????????????????????????????? */
  defaultCheckedKeys?: Key[];
  /** ???????????????????????????????????? */
  selectedKeys?: Key[];
  /** ???????????????????????? */
  defaultSelectedKeys?: Key[];
  selectable?: boolean;
  /** ????????????????????? */
  filterEzdTreeNode?: (node: EzdTreeNode) => boolean;
  loadedKeys?: Key[];
  /** ????????????????????????IE>8??? */
  draggable?: DraggableFn | boolean | DraggableConfig;
  style?: React.CSSProperties;
  showIcon?: boolean;
  icon?: ((nodeProps: EzdTreeNodeAttribute) => React.ReactNode) | React.ReactNode;
  switcherIcon?: React.ReactElement<any>;
  prefixCls?: string;
  children?: React.ReactNode;
  blockNode?: boolean;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<TreeProps & React.RefAttributes<RcTree>> {
  TreeNode: typeof TreeNode;
  DirectoryTree: typeof DirectoryTree;
}

const Tree = React.forwardRef<RcTree, TreeProps>((props, ref) => {
  const { getPrefixCls, direction, virtual } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon,
    showLine,
    switcherIcon,
    blockNode,
    children,
    checkable,
    selectable,
    draggable,
  } = props;
  const prefixCls = getPrefixCls('tree', customizePrefixCls);
  const newProps = {
    ...props,
    showLine: Boolean(showLine),
    dropIndicatorRender,
  };

  const draggableConfig = React.useMemo(() => {
    if (!draggable) {
      return false;
    }

    let mergedDraggable: DraggableConfig = {};
    switch (typeof draggable) {
      case 'function':
        mergedDraggable.nodeDraggable = draggable;
        break;

      case 'object':
        mergedDraggable = { ...draggable };
        break;

      default:
      // Do nothing
    }

    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || <HolderOutlined />;
    }

    return mergedDraggable;
  }, [draggable]);

  return (
    <RcTree
      itemHeight={20}
      ref={ref}
      virtual={virtual}
      {...newProps}
      prefixCls={prefixCls}
      className={classNames(
        {
          [`${prefixCls}-icon-hide`]: !showIcon,
          [`${prefixCls}-block-node`]: blockNode,
          [`${prefixCls}-unselectable`]: !selectable,
          [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        className,
      )}
      direction={direction}
      checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
      selectable={selectable}
      switcherIcon={(nodeProps: EzdTreeNodeProps) =>
        renderSwitcherIcon(prefixCls, switcherIcon, showLine, nodeProps)
      }
      draggable={draggableConfig as any}
    >
      {children}
    </RcTree>
  );
}) as CompoundedComponent;

Tree.TreeNode = TreeNode;

Tree.DirectoryTree = DirectoryTree;

Tree.defaultProps = {
  checkable: false,
  selectable: true,
  showIcon: false,
  motion: {
    ...collapseMotion,
    motionAppear: false,
  },
  blockNode: false,
};

export default Tree;
