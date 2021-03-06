import CalendarLocale from 'rc-picker/lib/locale/ga_IE';
import TimePickerLocale from '../../time-picker/locale/ga_IE';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Roghnaigh dáta',
    yearPlaceholder: 'Roghnaigh bliain',
    quarterPlaceholder: 'Roghnaigh ráithe',
    monthPlaceholder: 'Roghnaigh mí',
    weekPlaceholder: 'Roghnaigh seachtain',
    rangePlaceholder: ['Dáta tosaigh', 'Dáta deiridh'],
    rangeYearPlaceholder: ['Tús na bliana', 'Deireadh na bliana'],
    rangeMonthPlaceholder: ['Tosaigh mhí', 'Deireadh mhí'],
    rangeWeekPlaceholder: ['Tosaigh an tseachtain', 'Deireadh na seachtaine'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
