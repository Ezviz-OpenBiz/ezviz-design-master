import CalendarLocale from 'rc-picker/lib/locale/es_ES';
import TimePickerLocale from '../../time-picker/locale/es_ES';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Seleccionar fecha',
    rangePlaceholder: ['Fecha inicial', 'Fecha final'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
