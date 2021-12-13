---
order: 1
title:
  zh-CN: 标题组件
  en-US: Title Component
---

## zh-CN

展示不同级别的标题。

## en-US

Display title in different level.

```jsx
import { Typography } from '@ezviz/ezd';

const { Title } = Typography;

ReactDOM.render(
  <>
    <Title>h1. EZ Design</Title>
    <Title level={2}>h2. EZ Design</Title>
    <Title level={3}>h3. EZ Design</Title>
    <Title level={4}>h4. EZ Design</Title>
    <Title level={5}>h5. EZ Design</Title>
  </>,
  mountNode,
);
```
