import CalendarLocale from 'rc-picker/lib/locale/sv_SE';
import TimePickerLocale from '../../time-picker/locale/sv_SE';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Välj datum',
    yearPlaceholder: 'Välj år',
    quarterPlaceholder: 'Välj kvartal',
    monthPlaceholder: 'Välj månad',
    weekPlaceholder: 'Välj vecka',
    rangePlaceholder: ['Startdatum', 'Slutdatum'],
    rangeYearPlaceholder: ['Startår', 'Slutår'],
    rangeMonthPlaceholder: ['Startmånad', 'Slutmånad'],
    rangeWeekPlaceholder: ['Startvecka', 'Slutvecka'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
