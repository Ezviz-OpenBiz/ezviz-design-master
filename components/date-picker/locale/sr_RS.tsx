import CalendarLocale from 'rc-picker/lib/locale/sr_RS';
import TimePickerLocale from '../../time-picker/locale/sr_RS';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Izaberi datum',
    yearPlaceholder: 'Izaberi godinu',
    quarterPlaceholder: 'Izaberi tromesečje',
    monthPlaceholder: 'Izaberi mesec',
    weekPlaceholder: 'Izaberi sedmicu',
    rangePlaceholder: ['Datum početka', 'Datum završetka'],
    rangeYearPlaceholder: ['Godina početka', 'Godina završetka'],
    rangeMonthPlaceholder: ['Mesec početka', 'Mesec završetka'],
    rangeWeekPlaceholder: ['Sedmica početka', 'Sedmica završetka'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
