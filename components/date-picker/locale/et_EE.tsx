import CalendarLocale from 'rc-picker/lib/locale/et_EE';
import TimePickerLocale from '../../time-picker/locale/et_EE';
import { PickerLocale } from '../generatePicker';

// 统一合并为完整的 Locale
const locale: PickerLocale = {
  lang: {
    placeholder: 'Vali kuupäev',
    rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
