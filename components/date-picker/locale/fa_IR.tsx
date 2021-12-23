import CalendarLocale from 'rc-picker/lib/locale/fa_IR';
import TimePickerLocale from '../../time-picker/locale/fa_IR';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'انتخاب تاریخ',
    yearPlaceholder: 'انتخاب سال',
    quarterPlaceholder: 'انتخاب فصل',
    monthPlaceholder: 'انتخاب ماه',
    weekPlaceholder: 'انتخاب هفته',
    rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'],
    rangeYearPlaceholder: ['سال شروع', 'سال پایان'],
    rangeMonthPlaceholder: ['ماه شروع', 'ماه پایان'],
    rangeWeekPlaceholder: ['هفته شروع', 'هفته پایان'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
