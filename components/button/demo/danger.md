---
order: 9
title:
  zh-CN: 危险按钮
  en-US: Danger Buttons
---


```jsx
import { Button } from '@ezviz/ezd';

ReactDOM.render(
  <>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>,
  mountNode,
);
```
