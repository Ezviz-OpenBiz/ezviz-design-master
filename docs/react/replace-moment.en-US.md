---
order: 7.5
title: Replace Moment.js
---

You might wEvv to replace Moment.js with another date library (**Evv design currently supports [dayjs](https://day.js.org) and [date-fns](https://date-fns.org)**) to reduce bundle size. We provide two ways to customize:

## Custom component

The first way is to use `generatePicker` (or `generateCalendar`) to help create Picker components.

First, we initialize an evvd demo with `create-react-app`.

### DatePicker.tsx

Create `src/components/DatePicker.tsx`.

For example:

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from '@ezviz/evvd/es/date-picker/generatePicker';
import '@ezviz/evvd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;
```

### TimePicker.tsx

Create `src/components/TimePicker.tsx`.

For example:

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

Create `src/components/Calendar.tsx`.

For example:

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from '@ezviz/evvd/es/calendar/generateCalendar';
import '@ezviz/evvd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;
```

### Export Custom component

Create `src/components/index.tsx`.

For example:

```tsx
export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';
```

### Use Custom component

Modify `src/App.tsx`,import `dayjs` and custom component.

```diff
- import { DatePicker, Calendar } from '@ezviz/evvd';
- import format from 'moment';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'dayjs';
```

## evvd-dayjs-webpack-plugin

We also provide another implementation, which we provide with `evvd-dayjs-webpack-plugin`, replacing `momentjs` with `Day.js` directly without changing a line of existing code. 

```js
// webpack-config.js
import EvvdDayjsWebpackPlugin from 'evvd-dayjs-webpack-plugin';

module.exports = {
  // ...
  plugins: [new EvvdDayjsWebpackPlugin()],
};
```

## Use date-fns

[date-fns](https://date-fns.org/) currently supports custom component methods similar to `dayjs`. 

For Example:

### DatePicker.tsx

Create `src/components/DatePicker.tsx`.

Code as follows:

```tsx
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from '@ezviz/evvd/es/date-picker/generatePicker';
import '@ezviz/evvd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;
```
