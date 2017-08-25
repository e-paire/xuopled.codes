import {addLocaleData} from "react-intl"
import __intlEN from "react-intl/locale-data/en"
import __intlFR from "react-intl/locale-data/fr"
import flatten from "flat"

import localeEN from "../translations/en.yml"
import localeFR from "../translations/fr.yml"

addLocaleData(__intlEN)
addLocaleData(__intlFR)

const messages = {
  en: flatten(localeEN),
  fr: flatten(localeFR),
}

export const defaultLocale = "en"
export const locales = ["fr", "en"]

export function getLocale(url) {
  const firstURIlevel = url.replace(/^\//, "").split("/")[0]
  return firstURIlevel && locales.indexOf(firstURIlevel) > -1
    ? firstURIlevel
    : defaultLocale
}

export function getIntl(locale) {
  return {
    defaultLocale,
    locale,
    messages: messages[locale],
  }
}
