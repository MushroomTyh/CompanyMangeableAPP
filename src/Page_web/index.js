import React, { useEffect, useState } from 'react';
import { Cells, Cell, CellBody, CellFooter, Grids,Tab, TabBody, TabBar, TabBarItem } from '@wecode/react-weui';
import i18n from '../i18n';
import * as css from './index.module.css';
// 存储全局变量，当前用户设置默认值,实际开发时需要去掉此段代码的注释
// import global from '../common/global';
// 模拟接口请求的本地json数据，启用真实服务接口时注释该行代码
import reservateType from './TO_DELETE/reservate_type';

export default function Home(props) {
 
  // const { history } = props;
  //初始化服务列表
  const [service, setService] = useState({
    title: '',  //显示的标题
    reservateNum: 0,   //预约数
    typeList: [] //预约类型列表
  });
  const [setState] = useState({});
  const[tab]=useState(3);
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
  //       getServiceList();
  //     })
  //   }).catch(error => {
  //     console.log('err = ', error);
  //   });
  // };
  //获取服务列表
   // const getServiceList = () => {
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
   //       setServiceType([...reply.typeList]);
   //     });
   //   }).catch(error => {
   //     console.log('请求异常', error);
   //   });
   // }
 
   useEffect(() => {
    //设置标题
      HWH5.setNavigationBarTitle({ title: i18n.t('home:appName') }).catch(error => {
        console.log(error);
        });

      //实际开发中需要去掉此段代码的逻辑
      reservateType.typeList.forEach(item => {
         item.onClick =() => {
          HWH5.openWebview({
            uri: item.url
          });
                 }}
      );
      setService({...reservateType});
      //开发者实际开发时需要调用此方法，去掉此代码的注释
      // getCode();
      }, []);
      function goto(type) {
        const { history } = props;
        history.push( `/${type}` );
      }
     /**
   * 页面路由导航    
   * @param {*} pathname：值必传，跳转到目标页面的路由地址，与app.json中"pages": {}下映射的字段保持一致
   * @param {*} customData: 值非必传，跳转到目标页面时需要传入的参数，目标页面可以通过props.location.customData获取
   */
   // const navigateTo = (pathname) => {
   //   history.push({
   //     pathname: `/${pathname || ''}`,
   //     type: pathname || ''
   //   })
   // }

   return (
    <div className={css.body}>
    {/* <div className={css['avatars-box']}>
      <div className={css['avatars']}>{i18n.t('home:avatars')}</div>
      <div className={css['avatars-text']}>{state ? state.userNameCn : ''}</div>
    </div> */}
    {/* 姓名、工号、部门、头像等信息 */}
    <Tab>
          <TabBody>
          {/* 
        我的预约数
      */}
 
      <Cells className={css.cells}>
        <Cell access list >
          <CellBody>{service.title}</CellBody>
          <CellFooter><span className={css.reservateNum}>{service.reservateNum}</span></CellFooter>
        </Cell>
      </Cells>
      {/* 
        预约类型列表
      */}
      <Grids data={service.typeList} className={css.grids}/>
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
          onClick={e => { goto('sf') }}
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
  </div>


    // <div className={css.body}>
    //   {/* 
    //     我的预约数
    //   */}
 
    //   <Cells className={css.cells}>
    //     <Cell access list >
    //       <CellBody>{service.title}</CellBody>
    //       <CellFooter><span className={css.reservateNum}>{service.reservateNum}</span></CellFooter>
    //     </Cell>
    //   </Cells>
    //   {/* 
    //     预约类型列表
    //   */}
    //   <Grids data={service.typeList} className={css.grids}/>
      
    //  </div>
   );
 }




 

