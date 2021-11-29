---
order: 7.5
title: 替换 Moment.js
---

你可以用自定义日期库（[day.js](https://day.js.org)、[date-fns](https://date-fns.org)）替换 Moment 以优化打包大小。在这里我们提供了两种方式来实现替换:

## 自定义组件

第一种方法是使用 `generatePicker`（或 `generateCalendar`）辅助创建 Picker 组件。

我们先初始化一个 `create-react-app` 的 @ezviz/evvd demo

### DatePicker.tsx

新建 `src/components/DatePicker.tsx`。

编写如下代码:

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import generatePicker from '@ezviz/evvd/es/date-picker/generatePicker';
import '@ezviz/evvd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;
```

### TimePicker.tsx

新建 `src/components/TimePicker.tsx`。

编写如下代码:

```tsx
import { Dayjs } from 'dayjs';
import * as React from 'react';
import DatePicker from './DatePicker';
import { PickerTimeProps } from '@ezviz/evvd/es/date-picker/generatePicker';

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
```

### Calendar.tsx

新建 `src/components/Calendar.tsx`。

编写如下代码:

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import generateCalendar from '@ezviz/evvd/es/calendar/generateCalendar';
import '@ezviz/evvd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;
```

#### 导出自定义组件

新建 `src/components/index.tsx`。

编写如下代码:

```tsx
export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';
```

### 使用自定义组件

修改 `src/App.tsx`，引入 `dayjs` 和自定义的组件。

```diff
- import { DatePicker, Calendar } from '@ezviz/evvd';
- import format from 'moment';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'dayjs';
```

## evvd-dayjs-webpack-plugin

我们还提供另一种实现方式。使用 `evvd-dayjs-webpack-plugin` 插件，无需对现有代码做任何修改直接替换成 `Day.js`。

```js
// webpack-config.js
import EvvdDayjsWebpackPlugin from 'evvd-dayjs-webpack-plugin';

module.exports = {
  // ...
  plugins: [new EvvdDayjsWebpackPlugin()],
};
```

## 使用 date-fns

[date-fns](https://date-fns.org/) 目前支持和 dayjs 类似的自定义组件方法

做一个简单的例子：

### DatePicker.tsx

新建 `src/components/DatePicker.tsx`。

编写如下代码:

```tsx
import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';
import generatePicker from '@ezviz/evvd/es/date-picker/generatePicker';
import '@ezviz/evvd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;
```
