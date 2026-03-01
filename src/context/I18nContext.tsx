"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import generalEs from '../locales/general/es.json';
import generalEn from '../locales/general/en.json';
import dubaiEs from '../locales/landings/dubai/es.json';
import dubaiEn from '../locales/landings/dubai/en.json';
import homeEs from '../locales/landings/home/es.json';
import homeEn from '../locales/landings/home/en.json';
import baliEs from '../locales/landings/bali/es.json';
import baliEn from '../locales/landings/bali/en.json';
import miamiEs from '../locales/landings/miami/es.json';
import miamiEn from '../locales/landings/miami/en.json';
import madridEs from '../locales/landings/madrid/es.json';
import madridEn from '../locales/landings/madrid/en.json';
import cdmxEs from '../locales/landings/cdmx/es.json';
import cdmxEn from '../locales/landings/cdmx/en.json';
import inversionesEs from '../locales/landings/inversiones/es.json';
import inversionesEn from '../locales/landings/inversiones/en.json';
import agentesEs from '../locales/landings/agentes/es.json';
import agentesEn from '../locales/landings/agentes/en.json';
import nosotrosEs from '../locales/landings/nosotros/es.json';
import nosotrosEn from '../locales/landings/nosotros/en.json';

type Locale = 'es' | 'en';
type Translations = Record<string, unknown>;

// Helper to get nested properties
function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj) || path;
}

interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const output = { ...target };

  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    const targetValue = output[key];

    if (isObject(targetValue) && isObject(sourceValue)) {
      output[key] = deepMerge(targetValue, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  });

  return output;
}

const translations: Record<Locale, Translations> = {
  es: deepMerge(
    deepMerge(
      deepMerge(generalEs as Record<string, unknown>, dubaiEs as Record<string, unknown>),
      { home: homeEs, bali: baliEs, miami: miamiEs, madrid: madridEs, cdmx: cdmxEs, inversiones: inversionesEs, agentes: agentesEs, nosotros: nosotrosEs }
    ),
    {}
  ),
  en: deepMerge(
    deepMerge(
      deepMerge(generalEn as Record<string, unknown>, dubaiEn as Record<string, unknown>),
      { home: homeEn, bali: baliEn, miami: miamiEn, madrid: madridEn, cdmx: cdmxEn, inversiones: inversionesEn, agentes: agentesEn, nosotros: nosotrosEn }
    ),
    {}
  ),
};

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLocaleState('en');
      }
    }
    setIsInitialized(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    return getNestedTranslation(translations[locale], key);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
