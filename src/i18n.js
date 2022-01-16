// locales文件必须是严格的json数据，最后一个不能有逗号！！
import i18n from 'i18next';

// 加载国际化json配置文件
const resources = {};
function importAll(r, lng) {
  r.keys().forEach(key => {
    const name = key.replace(/.\/|.json$/g, '');
    if (resources[lng] === undefined) {
      resources[lng] = {};
    }
    resources[lng][name] = r(key);
  });
}
importAll(require.context('./common/i18n/zh_CN', true, /\.json$/), 'zh_CN');
importAll(require.context('./common/i18n/en_US', true, /\.json$/), 'en_US');

function i18nInit(lang) {
  if (typeof window !== 'undefined') {
    const backendOpts = {
      loadPath: './src/common/i18n/{{lng}}/{{ns}}.json',
      addPath: './src/common/i18n/{{lng}}/{{ns}}.missing.json',
      jsonIndent: 2
    };
    const i18nOpts = {
      lng: lang,
      resources,
      ns: ['common'],
      preload: ['zh_CN', 'en_US'],
      defaultNS: 'common',
      debug: false,
      backend: backendOpts,
      interpolation: {
        escapeValue: false // not needed for react!!
      }
    };
    i18n.init(i18nOpts);
  }
}

i18n.initByLang = i18nInit;

export default i18n;
