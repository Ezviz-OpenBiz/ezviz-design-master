---
order: 1
title:
  zh-CN: 基础列表
  en-US: Basic list
---

## zh-CN

基础列表。

## en-US

Basic list.

```jsx
import { List, Avatar } from '@ezviz/ezd';

const data = [
  {
    title: 'EZ Design Title 1',
  },
  {
    title: 'EZ Design Title 2',
  },
  {
    title: 'EZ Design Title 3',
  },
  {
    title: 'EZ Design Title 4',
  },
];

ReactDOM.render(
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://saastest3.ys7.com/ezd/">{item.title}</a>}
          description="EZ Design, a design language for background applications, is refined by EZVIZ Team"
        />
      </List.Item>
    )}
  />,
  mountNode,
);
```
