// 请勿修改此文件
import React, { useEffect } from "react";
import createHistory from "history/createHashHistory";
import {
  ExceptionTip
} from '@wecode/react-weui';
/*
 全局导入less
 */
import "./app.css";
import routes from "./routes";

const { Route, Router, Switch } = require("react-router-dom");
const history = createHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(route => {
            const { path, exact = true, component: C } = route;
            return (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={C}
              />
            );
          })
        }
        {/* Not Match(404) */}
        <Route path="*" component={(props) => {
          useEffect(() => {
            HWH5.setNavigationBarTitle({ title: '404 找不到页面' });
            return () => {
              HWH5.setNavigationBarTitle({ title: '' });
            }
          });
          const { match } = props;
          console.error(`路由#找不到页面 ${match.url}`);
          return (<ExceptionTip
            flag={7}
            msg={`茫茫大海，找不到页面`}
          />)
        }}></Route>
      </Switch>
    </Router>
  );
}
