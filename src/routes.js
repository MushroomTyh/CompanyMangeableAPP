// 路由配置读取，请勿修改此文件
import React from 'react';
import { pages } from './app.json';

const routes = [];

const routeKeys = Object.keys(pages);

routeKeys.forEach((item) => {
  const path = pages[item];
  const component = React.lazy(() => import(`${item}.js`));
  routes.push({
    path,
    component
  });
});

export default routes;
