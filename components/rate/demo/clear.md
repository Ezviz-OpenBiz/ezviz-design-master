---
order: 4
title:
  zh-CN: 清除
  en-US: Clear star
---

## zh-CN

支持允许或者禁用清除。

## en-US

Support set allow to clear star when click again.

```jsx
import { Rate } from '@ezviz/ezd';

ReactDOM.render(
  <>
    <Rate defaultValue={3} />
    <span className="ezd-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ezd-rate-text">allowClear: false</span>
  </>,
  mountNode,
);
```
