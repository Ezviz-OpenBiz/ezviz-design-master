import * as React from 'react';
import defaultLocaleData from './default';
import LocaleContext from './context';
import { Locale } from '.';

export type LocaleComponentName = Exclude<keyof Locale, 'locale'>;

export interface LocaleReceiverProps<C extends LocaleComponentName = LocaleComponentName> {
  componentName: C;
  defaultLocale?: Locale[C] | (() => Locale[C]);
  children: (
    locale: Exclude<Locale[C], undefined>,
    localeCode?: string,
    fullLocale?: object,
  ) => React.ReactNode;
}

export default class LocaleReceiver<
  C extends LocaleComponentName = LocaleComponentName,
> extends React.Component<LocaleReceiverProps<C>> {
  static defaultProps = {
    componentName: 'global',
  };

  static contextType = LocaleContext;

  getLocale(): Exclude<Locale[C], undefined> {
    const { componentName, defaultLocale } = this.props;
    const locale = defaultLocale || defaultLocaleData[componentName ?? 'global'];
    const ezdLocale = this.context;
    const localeFromContext = componentName && ezdLocale ? ezdLocale[componentName] : {};
    return {
      ...(locale instanceof Function ? locale() : locale),
      ...(localeFromContext || {}),
    };
  }

  getLocaleCode() {
    const ezdLocale = this.context;
    const localeCode = ezdLocale && ezdLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (ezdLocale && ezdLocale.exist && !localeCode) {
      return defaultLocaleData.locale;
    }
    return localeCode;
  }

  render() {
    return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
  }
}

export function useLocaleReceiver<T extends LocaleComponentName>(
  componentName: T,
  defaultLocale?: Locale[T] | Function,
): [Locale[T]] {
  const ezdLocale = React.useContext(LocaleContext);

  const componentLocale = React.useMemo(() => {
    const locale = defaultLocale || defaultLocaleData[componentName || 'global'];
    const localeFromContext = componentName && ezdLocale ? ezdLocale[componentName] : {};

    return {
      ...(typeof locale === 'function' ? (locale as Function)() : locale),
      ...(localeFromContext || {}),
    };
  }, [componentName, defaultLocale, ezdLocale]);

  return [componentLocale];
}
