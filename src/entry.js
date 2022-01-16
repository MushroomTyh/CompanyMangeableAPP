// 请勿修改此文件
import 'core-js/es6/map';
import 'core-js/es6/set';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import FastClick from 'react-fastclick-alt';
import App from './App';
import i18n from './i18n.js';

const render = Component => {
  return ReactDOM.render(
    <FastClick>
      <Suspense fallback={<div />}>
        <AppContainer>
            <Component />
        </AppContainer>
      </Suspense>
    </FastClick>,
    document.getElementById('root')
  );
}

HWH5.getAppInfo().then((data) => {
  const { language } = data;
  i18n.initByLang(language === 'zh' ? 'zh_CN' : 'en_US');
  render(App);
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextRootContainer = require('./App').default;
      render(NextRootContainer);
    });
  }
}).catch((error) => {
  console.log('entry#HWH5.getAppInfo', error);
});
