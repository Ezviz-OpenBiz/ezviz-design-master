import CalendarLocale from 'rc-picker/lib/locale/mn_MN';
import TimePickerLocale from '../../time-picker/locale/mn_MN';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Огноо сонгох',
    rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
