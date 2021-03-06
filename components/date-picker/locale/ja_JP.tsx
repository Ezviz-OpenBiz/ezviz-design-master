import CalendarLocale from 'rc-picker/lib/locale/ja_JP';
import TimePickerLocale from '../../time-picker/locale/ja_JP';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: '日付を選択',
    rangePlaceholder: ['開始日付', '終了日付'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
