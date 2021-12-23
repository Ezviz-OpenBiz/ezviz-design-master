import CalendarLocale from 'rc-picker/lib/locale/mk_MK';
import TimePickerLocale from '../../time-picker/locale/mk_MK';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Избери датум',
    rangePlaceholder: ['Од датум', 'До датум'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
