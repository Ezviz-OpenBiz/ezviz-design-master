import CalendarLocale from 'rc-picker/lib/locale/ko_KR';
import TimePickerLocale from '../../time-picker/locale/ko_KR';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: '날짜 선택',
    rangePlaceholder: ['시작일', '종료일'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
