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
import { Typography, Space } from '@ezviz/ezd';

const { Text, Link } = Typography;

ReactDOM.render(
  <Space direction="vertical">
    <Text>EZ Design (default)</Text>
    <Text type="secondary">EZ Design (secondary)</Text>
    <Text type="success">EZ Design (success)</Text>
    <Text type="warning">EZ Design (warning)</Text>
    <Text type="danger">EZ Design (danger)</Text>
    <Text disabled>EZ Design (disabled)</Text>
    <Text mark>EZ Design (mark)</Text>
    <Text code>EZ Design (code)</Text>
    <Text keyboard>EZ Design (keyboard)</Text>
    <Text underline>EZ Design (underline)</Text>
    <Text delete>EZ Design (delete)</Text>
    <Text strong>EZ Design (strong)</Text>
    <Text italic>EZ Design (italic)</Text>
    <Link href="https://saastest3.ys7.com/ezd/" target="_blank">
      EZ Design (Link)
    </Link>
  </Space>,
  mountNode,
);
```
