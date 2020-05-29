
import React from 'react';
import { IntlProvider } from 'react-intl';

const localeInfo = {
  'en-US': {
    messages: {
      ...require('./locales/en-US').default,
    },
  },
  'zh-CN': {
    messages: {
      ...require('./locales/zh-CN').default,
    },
  },
};

export default function LocaleWrapper(props) {
  const { locale = 'zh-CN' } = props;
  return (<IntlProvider locale={locale} messages={localeInfo[locale].messages}>
    {
      props.children
    }
  </IntlProvider>)
}
