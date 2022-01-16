import React, {
  useEffect, useState
} from 'react';
import i18n from 'i18n'; // 国际化
/* data为本地mock数据，实际开发中需请求接口获取数据替换本地mock数据。mock数据包含了个人详情数据userInfo，部门信息deptInfo，其他的列表信息listInfo 
   其中userInfo需要参考开放平台免登流程获取用户的详细信息，前端调用获取免登码api获取免登码传给后台，后台调用相关服务端api获取用户详细信息；
   deptInfo需要后台调用开放平台关于获取部门信息的服务端api获取；
   listInfo是不能通过开放平台api获取的其他信息，需要后台从数据库中读取
   这些信息后台可以封装到一起，通过一个接口返回给前端，前端调接口时传免登码给后端
*/

import * as css from './index.module.css';

import {
  Tab, TabBody, TabBar, TabBarItem
} from '@wecode/react-weui';
import datas1 from '../Page_sf/TO_DELETE/data1';
export default function Home(props) {
  const [ setState] = useState({}); // 初始化页面数据管理state
  const[tab]=useState(2);
  // 模拟显示头像，实际使用模板时需使用真实头像
  let myName = '';
  if (datas1 && datas1.data0.name) {
    if (datas1.data0.name.length > 2) {
      myName = datas1.data0.name.substring(1);
    } else {
      myName = datas1.data0.name.substring(0);
    }
  }
  function goto(type) {
    const { history } = props;
    history.push( `/${type}` );
  }
  //模板中免登相关的信息userName，corpUserId，使用的是mock数据展示，实际开发中删除mock数据userInfo的引入，使用以下方案
  /**
   * 获取免登授权码，用户无需输入WeLink用户名和密码，即可实现登录。 
   * 详细信息可访问 https://open-doc.welink.huaweicloud.com/docs/serverapi/authentication/wecode_cloud_internal.html?v=1578129797&type=internal
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
   * 详细信息可访问 https://open-doc.welink.huaweicloud.com/docs/serverapi/authentication/wecode_cloud_internal.html?v=1578129797&type=internal
   */
  // const getUserInfo =  (code) => {
  //   HWH5.fetchInternet('https://example.com?code=' + code, { // 示例接口地址
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => {
  //     res.json().then(userInfo => {
  //       console.log('-----userInfo', userInfo)
  //       setState(userInfo);
  //       console.log('----------state', state)
  //     })
  //   }).catch(error => {
  //     console.log('err = ', error);
  //   });
  // };

   // 获取当前登陆人的所有信息，调用真是服务时恢复此段代码
  // function getContactInfos(userId){
    // 获取当前登录人的入职信息，调用真实服务时恢复此段代码
    // userId：当前登录人用户Id,作为索引获取当前登录人的入职信息
    // HWH5.fetchInternet('https://example.com?code=' + userId, { // 示例接口地址
    //     method: 'get',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => {
    //     res.json().then(res => {
    //       console.log('-----res', res)
    //获取接口里的当前登陆人所有信息
            // setState(res)
            
    //       console.log('----------state', state)
    //     })
    //   }).catch(error => {
    //     console.log('err = ', error);
    //   });
  // }
  useEffect(() => {
    // 设置导航标题
    HWH5.setNavigationBarTitle({ title: i18n.t('home:my_info') }).catch(error => {
      console.log('设置标题异常', error);
    });
    // getCode()获取免登授权码，

    }, []);

  return (
    <div className={css.home}>
      {/* <div className={css['avatars-box']}>
        <div className={css['avatars']}>{i18n.t('home:avatars')}</div>
        <div className={css['avatars-text']}>{state ? state.userNameCn : ''}</div>
      </div> */}
      {/* 姓名、工号、部门、头像等信息 */}
      <Tab>
            <TabBody>
      <div className={css['top-box']}>


      <div className={css['top-box-div-avatars']}>
          {myName}
      </div>
        <div className={css['top-box-div']}>
          <div>
            <div>
              <span className={css['top-box-div-span-left']}>{ datas1.data0.name }</span>
              <span className={css['top-box-div-span-right']}>{datas1.data0.corpUserId }</span>
            </div>
            <div className={css['top-box-div-div-left']}>
              { datas1.data0.name}
            </div>
          </div>
        </div>
      
      </div>



      {/* 列表信息 */}
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:corpUserId')}</div>
          <div className={css['item-bottom']}>{datas1.data0.corpUserId }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:department')}</div>
          <div className={css['item-bottom']}>{datas1.data0.department }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:position')}</div>
          <div className={css['item-bottom']}>{datas1.data0.position }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:class1')}</div>
          <div className={css['item-bottom']}>{datas1.data0.class1 }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:userEmail')}</div>
          <div className={css['item-bottom']}>{datas1.data0.userEmail }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:mobileNumber')}</div>
          <div className={css['item-bottom']}>{datas1.data0.mobileNumber }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:major')}</div>
          <div className={css['item-bottom']}>{datas1.data0.major }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:name')}</div>
          <div className={css['item-bottom']}>{datas1.data0.name }</div>
        </div>
      </div>
      <div className={css['list-box']}>
        <div className={css['item-box']}>
          <div className={css['item-top']}>{i18n.t('home:years')}</div>
          <div className={css['item-bottom']}>{datas1.data0.years}</div>
        </div>
      </div>
      </TabBody>
          
          <TabBar className={css.tabbar}>
          <TabBarItem className={css.tabbarCur}
            active={tab === 0}
            onClick={e => { goto('money') }}
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
            onClick={e => setState(2)}
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
  );
}
