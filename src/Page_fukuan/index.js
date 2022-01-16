import React, {
    useEffect, useState
  } from 'react';
  import {
    Tab, TabBody, TabBar, TabBarItem
  } from '@wecode/react-weui';
  
  import * as css from './index.module.css';
  
  // 存储全局变量，当前用户设置默认值,实际开发时需要去掉此段代码的注释
  // import global from '../common/global';
  import i18n from '../i18n';
  export default function statistics(props) {
     
    //初始化底部tab
    const [tab,setState] = useState(0); 
  
    //初始化统计数据
    
  
  //页面路由导航    
    /**
     * 路由组件的 props 中，默认有 history 对象。其他组件想使用，可通过以下方法进行获取：
     * import createHistory from "history/createHashHistory";
     * const history = createHistory();
     * @param {*} type 为路径的拼接字段，可取值为data对象中所配路径
     */
    function goto(type) {
      const { history } = props;
      history.push( `/${type}` );
    }
  
    //获取报告统计数据，实际开发时需要去掉此段代码的注释
    // const getStatisticsList = () => {
    //   const url = 'http://xxxx';
    //   const _headers = {
    //     'Content-Type': 'application/json'
    //   };
    //   const _params = {
    //     userId: global.userInfo.userId
    //   };
    //   HWH5.fetchInternet(url, {
    //     method: 'post',
    //     body: JSON.stringify(_params),
    //     headers: _headers
    //   }).then(res => {
    //     res.json().then(reply => {
    //       console.log('服务端返回: ', reply);
    //       存储接口返回的数据
    //       setData(reply.list);
    //   }).catch(error => {
    //     console.log('请求异常', error);
    //   });
    // }
  
    useEffect(()=>{
      HWH5.navTitle({ title: "付款" });
    }, [])
    function fn()
    {HWH5.scanCode({ needResult: 1 }).then(data => {
      console.log(data.content);     
      HWH5.openWebview({
        uri: data.content
      });
    }).catch(error => {
      console.log('扫码异常', error);
    });
    }
    return (
       // 使用React-UI组件的列表组件
       <div className={css.workReport}>
         <Tab>
            <TabBody>
            
 
         

  
  
            </TabBody>
          
            <TabBar className={css.tabbar}>
            <TabBarItem className={css.tabbarCur}
              active={tab === 0}
              onClick={e => setState(0)}
              icon={<i className={`icon-tab ${tab === 0? 'icon_tab_money1' : 'icon_tab_money'}`} />}
              label={i18n.t('收付款')}
            />
            <TabBarItem
              active={tab === 1}
              onClick={e => { goto('serve')}}
              icon={<i className={`icon-tab ${tab === 1? 'icon_tab_other1' : 'icon_tab_other'}`} />}
              label={i18n.t('服务')}
            />
            <TabBarItem
              active={tab === 2}    
              onClick={e => { goto('sf')}}
              icon={<i className={`icon-tab ${tab === 2? 'icon_tab_mainpage1' : 'icon_tab_mainpage'}`} />}
              label={i18n.t('身份认证')}
            />
            
            <TabBarItem
              active={tab === 3}
              onClick={e => { goto('web') }}
              icon={<i className={`icon-tab ${tab === 3 ? 'icon_tab_dailyweb1' : 'icon_tab_dailyweb'}`} />}
              label={i18n.t('常用网站')}
              
            />
              <TabBarItem
              active={tab === 4}
              onClick={e => { goto('leave') }}
              icon={<i className={`icon-tab ${tab === 4 ? 'icon_tab_qingjia1' : 'icon_tab_qingjia'}`} />}
              label={i18n.t('请假')}
            />
          </TabBar>
          </Tab>
          <a className={css.scanButton} onClick={e => fn()}>
        <span className={css.scanIcon}></span>
            </a>
      </div>
    );
  }
  