import React, { useEffect } from 'react';
 import {
  Button  ,
  
 } from '@wecode/react-weui';
import * as css from './index.module.css';
import i18n from '../i18n';
import campus1 from './TO_DELETE/超级校园.jpg';
export default function Home(props) {

  //初始化底部tab
  


  //页面路由导航    
  /**
   * 路由组件的 props 中，默认有 history 对象。其他组件想使用，可通过以下方法进行获取：
   * import createHistory from "history/createHashH
   * 
   * istory";
   * const history = createHistory();
   * @param {*} type 为路径的拼接字段，可取值为data对象中所配路径
   */
  
 
  /**
   * 模板中免登相关的信息使用的是mock数据展示，即userInfo数据，实际开发中需要开发者移除此数据
   * 获取免登授权码，用户无需输入WeLink用户名和密码，即可实现登录。
   */
  // const getCode = async () => {
  //   try {
  //     const resUser = await HWH5.getAuthCode();
  //     console.log('getAuthCode success = ', resUser.code);
  //     getUserInfo(resUser.code);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  /**
   * 根据用户ID获取用户详细信息
   */
  // const getUserInfo =  (code) => {
  //   HWH5.fetchInternet('https://XXXX?code=' + code, {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => {
  //     res.json().then(reply => {
  //       console.log('-----userInfo', reply)
  //       global.userInfo = reply;
  //     })
  //   }).catch(error => {
  //     console.log('err = ', error);
  //   });
  // };
  useEffect(() => {
    //设置标题
    HWH5.setNavigationBarTitle({ title: i18n.t('超级校园') }).catch(error => {
      console.log('', error);
    });
    //开发者实际开发时需要调用此方法
    // getCode();
    }, []);
    function goto(type) {
      const { history } = props;
      history.push( `/${type}` );
    }
   
  return (
    <div className={css.content}>
      
       
       
        <img  src={campus1} alt="" />
        
      
      
       
      <Button type="primary" size="middle" onClick={e => { goto('login') }}>登录</Button>
          <Button type="primary" size="middle"  onClick={()=> {
                HWH5.openWebview({
                  uri: 'http://101.200.175.152:8080/yestyh/oklogin.html'
                });
                       }}>注册</Button>
          
    </div>
  );
}











 