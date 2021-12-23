// Tamil Locale added to rc-calendar
import CalendarLocale from 'rc-picker/lib/locale/ta_IN';
import TimePickerLocale from '../../time-picker/locale/ta_IN';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
    rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
