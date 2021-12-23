import CalendarLocale from 'rc-picker/lib/locale/hr_HR';
import TimePickerLocale from '../../time-picker/locale/hr_HR';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Odaberite datum',
    yearPlaceholder: 'Odaberite godinu',
    quarterPlaceholder: 'Odaberite četvrtinu',
    monthPlaceholder: 'Odaberite mjesec',
    weekPlaceholder: 'Odaberite tjedan',
    rangePlaceholder: ['Početni datum', 'Završni datum'],
    rangeYearPlaceholder: ['Početna godina', 'Završna godina'],
    rangeMonthPlaceholder: ['Početni mjesec', 'Završni mjesec'],
    rangeWeekPlaceholder: ['Početni tjedan', 'Završni tjedan'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
