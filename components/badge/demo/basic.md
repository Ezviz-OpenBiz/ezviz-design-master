---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

## en-US

Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.

```jsx
import { Badge, Avatar } from '@ezviz/ezd';
import { ClockCircleOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>,
  mountNode,
);
```

<style>
.ezd-badge:not(.ezd-badge-not-a-wrapper) {
  margin-right: 20px;
}
.ezd-badge.ezd-badge-rtl:not(.ezd-badge-not-a-wrapper) {
  margin-right: 0;
  margin-left: 20px;
}
</style>
