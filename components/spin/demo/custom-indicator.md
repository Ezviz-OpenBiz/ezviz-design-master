---
order: 6
title:
  zh-CN: 自定义指示符
  en-US: Custom spinning indicator
---

## zh-CN

使用自定义指示符。

## en-US

Use custom loading indicator.

```jsx
import { Spin } from '@ezviz/ezd';
import { LoadingOutlined } from '@ant-design/icons';

const ezdIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

ReactDOM.render(<Spin indicator={ezdIcon} />, mountNode);
```
