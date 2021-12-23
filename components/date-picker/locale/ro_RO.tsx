import CalendarLocale from 'rc-picker/lib/locale/ro_RO';
import TimePickerLocale from '../../time-picker/locale/ro_RO';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Selectează data',
    rangePlaceholder: ['Data start', 'Data sfârșit'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
