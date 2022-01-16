import React, { useEffect,useState } from 'react';
import { Tab,TabBody,TabBar,TabBarItem} from '@wecode/react-weui';
import i18n from '../i18n'; // 国际化
import * as css from './index.module.css';// 页面样式
import datas from './TO_DELETE/jsonData'; // 本地mock数据，实际开发中删除该数据，使用接口数据替换



export default function Home(props) {
  const [setState] = useState({});
  const[tab]=useState(1);
  //初始化服务列表数据
  // const [serverLists, setServerLists]= useState([])
  
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

  // const getUserInfo =  (code) => {
  //   HWH5.fetchInternet('https://XXXX', {
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


  /**
  *获取部门详情数据接口
  *@param {*}userId 通过免登获取的用户信息中的用户账号
  */
  // getDeptDes=(userId)=>{
  // 真实接口服务请求时去除data的引入,恢复该段代码，这个只是示例代码
  //   const url = 'https://xxx';
  //   const _headers = {
  //    'Content-Type': 'application/json'
  //  };
  //  // post 请求,如果是get请求，body字段不需要传，method字段传get。get请求如果需要传参，可在url后拼接
  //  const _params = {
  //    userId:userId
  //  };
  //   HWH5.fetchInternet(url, {
  //    method: 'post',
  //    body: JSON.stringify(_params),
  //    headers: _headers
  //  }).then(res => {
  //    res.json().then(reply => {
  //      // 把deptName的值设置成接口数据
  //      setDeptName(reply.deptName);
  //      console.log('服务端返回: ', reply);
  //    });
  //  }).catch(error => {
  //    console.log('请求异常', error);
  //  });
  //  };
  /**
   *实际开发时,获取首页服务列表相关数据接口
   *@param {*}userId 通过免登获取的用户信息中的用户账号
   */
  // const getServerLists=(userId)=>{
  //  HWH5.showLoading();
  // 真实接口服务请求时去除datas的引入,恢复该段代码，这个只是示例代码
  // const url = 'https://xxx';
  // const _headers = {
  //   'Content-Type': 'application/json'
  // };
  // // post 请求,如果是get请求，body字段不需要传，method字段传get。get请求如果需要传参，可在url后拼接
  // const _params = {
  //   userId: userId,
  // };
  //   HWH5.fetchInternet(url, {
  //   method: 'post',
  //   body: JSON.stringify(_params),
  //   headers: _headers
  // }).then(res => {
  //   res.json().then(reply => {
  //     // 把serverLists的值设置成接口数据
  //     setServerLists(reply);
  //     HWH5.hideLoading()
  //     console.log('服务端返回: ', reply);
  //   });
  // }).catch(error => {
  //   console.log('请求异常', error);
  // });
  // }


  useEffect(() => {
    HWH5.setNavigationBarTitle({ title: i18n.t('common:appName') }).catch(error => {
      console.log('设置标题异常', error);
    });


    //免登
    // getCode()
    //实际开发时，获取部门信息
    // getDeptDes(global.userInfo.userId)
    //实际开发时,获取首页服务列表相关数据
    // getServerLists(global.userInfo.userId)
    }, []);




    function goto(type) {
      const { history } = props;
      history.push( `/${type}` );
    }
  //页面路由导航    
  /**
   * 路由组件的 props 中，默认有 history 对象。其他组件想使用，可通过以下方法进行获取：
   * import createHistory from "history/createHashHistory";
   * const history = createHistory();
   * @param {*} type 为路径的拼接字段，可取值为app.json所配路径
   */
  // function navigaetTo(type) {
  //   if (type === 'salary') {
  //     HWH5.openWebview({
  //       //开发版微码uri
  //       uri: 'h5://20200629151916566393288/html/index.html'
  //       }).catch(error => {
  //       console.log(error);
  //     });
  //   } else {
  //     const { history } = props;
  //     const links = ['company', 'employeeConduct', 'attendance', 'businessTrip', 'serviceHotline', 'computerInstallation', 'campusIntroduce', 'employee', 'recepteVisitor'];
  //     //有的页面的才会有链接
  //     if (links.indexOf(type) !== -1) {
  //       history.push(`/${type}`);
  //     }
  //   }
  // }


  return (
    <div className={css.content}>
      <Tab>
          <TabBody>
          {/* 
        我的预约数
      */}
 
 {/* <Cells className={css.cells}>
        {
          //单个列表组件
        }
        <Cell list round className={css.cell}>
          {
            //列表主内容组件
          }
          <CellBody>
            
            <span className={css.userName}> {global.userInfo.userNameZH}</span>
            {
              //列表主内容二级文本组件
            }
            <CellBodySubText> <span className={css.userCode}> {global.userInfo.uid} </span></CellBodySubText>
            {
              //列表主内容扩展组件
            }
            
            <CellBodyExplan><span className={css.userDept}> {datas.deptInfo.deptNameCn} </span></CellBodyExplan>
            </CellBody>
          {
            //列表底部组件
          }
          <CellFooter>
            <div className={css.avatars} >{global.userInfo.userNameZH.substring(global.userInfo.userNameZH.length - 2, global.userInfo.userNameZH.length)} </div>
          </CellFooter>
        </Cell>
      </Cells> */}
      {/* <div className={css.companyEmploy}>
        <div className={css.companyDesc} onClick={() => navigaetTo('company')}> {i18n.t('home:companyIntroduce')}</div>
        <div className={css.employeeConduct} onClick={() => navigaetTo('employeeConduct')}> {i18n.t('home:employeeConductRules')} </div>
      </div> */}
      <div>
        {
          datas.serveList.map((server, index) => {
            return (
              <div className={css.serverItem} key={index}>
                <div className={css.serverTitle}> {server.title} </div>
                <div className={css.grids}>
                  {
                    server.list.map((item, key) => {
                      return (
                        <div className={css.grid} key={key}  onClick={()=> {
                          HWH5.openWebview({
                            uri: item.url
                          });
                                 }}>
                          <i className={css[item.icon]}></i>
                          <span className={css.gridLabel}> {item.label}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </TabBody>
        
        <TabBar className={css.tabbar}>
        <TabBarItem className={css.tabbarCur}
          active={tab === 0}
          onClick={e => { goto('money') } }
          icon={<i className={`icon-tab ${tab === 0? 'icon_tab_money1' : 'icon_tab_money'}`} />}
          label={i18n.t('收付款')}
        />
        <TabBarItem
          active={tab === 1}
          onClick={e => setState(1)}

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
      {/* {
        //列表组件
      }
      <Cells className={css.cells}>
        {
          //单个列表组件
        }
        <Cell list round className={css.cell}>
          {
            //列表主内容组件
          }
          <CellBody>
            
            <span className={css.userName}> {global.userInfo.userNameZH}</span>
            {
              //列表主内容二级文本组件
            }
            <CellBodySubText> <span className={css.userCode}> {global.userInfo.uid} </span></CellBodySubText>
            {
              //列表主内容扩展组件
            }
            
            <CellBodyExplan><span className={css.userDept}> {datas.deptInfo.deptNameCn} </span></CellBodyExplan>
            </CellBody>
          {
            //列表底部组件
          }
          <CellFooter>
            <div className={css.avatars} >{global.userInfo.userNameZH.substring(global.userInfo.userNameZH.length - 2, global.userInfo.userNameZH.length)} </div>
          </CellFooter>
        </Cell>
      </Cells> */}
      {/* <div className={css.companyEmploy}>
        <div className={css.companyDesc} onClick={() => navigaetTo('company')}> {i18n.t('home:companyIntroduce')}</div>
        <div className={css.employeeConduct} onClick={() => navigaetTo('employeeConduct')}> {i18n.t('home:employeeConductRules')} </div>
      </div>
      <div>
        {
          datas.serveList.map((server, index) => {
            return (
              <div className={css.serverItem} key={index}>
                <div className={css.serverTitle}> {server.title} </div>
                <div className={css.grids}>
                  {
                    server.list.map((item, key) => {
                      return (
                        <div className={css.grid} key={key}  onClick={()=> {
                          HWH5.openWebview({
                            uri: item.url
                          });
                                 }}>
                          <i className={css[item.icon]}></i>
                          <span className={css.gridLabel}> {item.label}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div> */}
    </div>
  );
}