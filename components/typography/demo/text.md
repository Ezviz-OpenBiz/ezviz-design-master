---
order: 2
title:
  zh-CN: 文本与超链接组件
  en-US: Text and Link Component
---

## zh-CN

内置不同样式的文本以及超链接组件。

## en-US

Provides multiple types of text and link.

```jsx
import { Typography, Space } from '@ezviz/evvd';

const { Text, Link } = Typography;

ReactDOM.render(
  <Space direction="vertical">
    <Text>Evv Design (default)</Text>
    <Text type="secondary">Evv Design (secondary)</Text>
    <Text type="success">Evv Design (success)</Text>
    <Text type="warning">Evv Design (warning)</Text>
    <Text type="danger">Evv Design (danger)</Text>
    <Text disabled>Evv Design (disabled)</Text>
    <Text mark>Evv Design (mark)</Text>
    <Text code>Evv Design (code)</Text>
    <Text keyboard>Evv Design (keyboard)</Text>
    <Text underline>Evv Design (underline)</Text>
    <Text delete>Evv Design (delete)</Text>
    <Text strong>Evv Design (strong)</Text>
    <Text italic>Evv Design (italic)</Text>
    <Link href="https://Evv.design" target="_blank">
      Evv Design (Link)
    </Link>
  </Space>,
  mountNode,
);
```
