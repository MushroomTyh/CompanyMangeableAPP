import React, {
  useState
} from 'react';
import i18n from 'i18n';
import * as css from './index.module.css';
import {
  CellBody,
  CellFooter,
  Form,
  FormCell,
  Input,
  Button
} from '@wecode/react-weui';
// import datas from './TO_DELETE/password'  //mock的个人信息数据，调用真实服务时需删除此行代码
//  import global from './userInf' //引入用来存储用户信息的全局变量
export default function PageMain(props) {
  
  // 密码是否可见图标
  const imgArr=[require('./img/common-invisible_fill.svg'),require('./img/common-invisible_fill_2.svg'),require('./img/common_clear_fill.png')]
  // 原始密码
  // const [origin, setOrigin] = useState('');
  //旧密码默认值
  const [regclass, setregclass] = useState('');
  //新密码默认值
  const [regname, setregname] = useState('');
  //确认密码默认值
  const [regstudentid, setregstudentid] = useState('');
  //旧密码是否可见默认值
  const [regpassword, setregpassword] = useState('');
  const [img1,setImg1] = useState(imgArr[0]);
  //新密码是否可见默认值
  const [img2,setImg2] = useState(imgArr[0]);
  //确认密码是否可见默认值
  const [img3,setImg3] = useState(imgArr[0]);
  const [img4,setImg4] = useState(imgArr[0]);
  
  //模板中免登相关的信息userName，使用的是mock数据展示，实际开发中可以删除mockData对象中userInfo的引入，使用以下方案
  // 1.获取免登code
  // async function getCode() {
  //   const code = await HWH5.getAuthCode();
  //   console.log('code:', code.code);
  //   // getAccessToken(code.code);
  //   getUserInfo(code.code);
  // }

  // 2.获取userId作为其他接口的入参
  // function getUserInfo(code) {
  //   HWH5.fetchInternet('https://748be62d09b84190abca541459c0dc79.apig.cn-east-3.huaweicloudapis.com/getUserInfo?code='+code, {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => {
  //     res.json().then(res => {
          //  获取userId并存储在全局变量中，作为其他接口的入参
  //       global.userId = res.userId
      //   getPassword(res.userId)
  //     })
  //   }).catch(error => {
  //     console.log('err = ', error);
  //   });
  // }
  // 获取原始密码 调用真实服务后需恢复此段代码
  // function getPassword(userId){
    // HWH5.fetchInternet('https://748be62d09b84190abca541459c0dc79.apig.cn-east-3.huaweicloudapis.com/getUserInfo?code='+userId, {
    //     method: 'get',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   }).then(res => {
      //     res.json().then(res => {
              // 获取原始密码后，保存原始密码
      //       setOrigin(res)
      //     })
      //   }).catch(error => {
      //     console.log('err = ', error);
      //   });
  // }

    // function submitPassword(){
      //  HWH5.showLoading();
      // 真实接口服务请求时去除datas的引入,恢复该段代码，这个只是示例代码
      // const url = 'https://xxx';
      // const _headers = {
      //   'Content-Type': 'application/json'
      // };
      // // post 请求,如果是get请求，body字段不需要传，method字段传get。get请求如果需要传参，可在url后拼接
      // const _params = {
      // param1: newPwd
      // param2：global.userId
      // };
      // HWH5.fetchInternet(url, {
      //   method: 'post',
      //   body: JSON.stringify(_params),
      //   headers: _headers
      // }).then(res => {
      //   res.json().then(reply => {
      //     console.log('服务端返回: ', reply);
      //   });
      // }).catch(error => {
      //   console.log('请求异常', error);
      // });
      // }

  // 跳转修改密码成功页面并传值
  function navigaetTo() {
    props.history.push({
        pathname: '/success'
    })
  }
  // function losefocus(){
  //   let input = document.getElementsByTagName("input")
  //   let inputArr=[...input]
  //   inputArr.map(i=>{
  //     i.blur()
  //   })
  // }
  // 点击确定按钮，提交修改密码，在新、旧、确认密码信息全部填写的情况下，如果旧密码与接口中取回的密码不一致，则提示“旧密码输入不正确，请重新输入”；如果新密码与确认密码不相同，则提示“新密码两次输入不一致，请重新输入”
  function submitPwd(){
    if(regclass&&regname&&regpassword&&regstudentid){
        navigaetTo()
      }  
  }
 
  // useEffect(() => {
  //   setOrigin(datas.password) //mock的原始密码数据，调用真实服务时删除此行代码
  //   // 设置导航标题
  //   HWH5.setNavigationBarTitle({ title: `${i18n.t('common:changePwd')}`});
  //   // getCode()//获取免登授权码，调用真实服务时需恢复此段代码
  //   }, []);
  return (
    <div className={css.App}>
      
      <Form>
        {/* 旧密码框 */}
        <FormCell className={css.cellsForm}>
          <CellBody >
            <Input className={css['cell-input']}
              type={`${img1===imgArr[0]?'password':'text'}`}
              placeholder={i18n.t('common:regclass')}
              value={regclass}
              onChange={e => setregclass(e.target.value)}
            />
          </CellBody>
          {regclass && (
            <CellFooter>
              <img src={imgArr[2]} 
                onClick={()=>setregclass('')}
                className={css.clear}>
              </img>
              <img src={img1} 
                onClick={(e)=>`${img1===imgArr[0]?setImg1(imgArr[1]):setImg1(imgArr[0])}`}
                className={css.icon}>
              </img>
            </CellFooter>
          )}
        </FormCell>






        {/* 新密码框 */}
        <FormCell className={css.cellsForm}>
          <CellBody>
            <Input className={css['cell-input']}
              type={`${img2===imgArr[0]?'password':'text'}`}
              placeholder={i18n.t('common:regstudentid')}
              value={regstudentid}
              onChange={e => setregstudentid(e.target.value)}
            />
          </CellBody>
          {regstudentid && (
            <CellFooter>
              <img src={imgArr[2]} 
                onClick={()=>setregstudentid('')}
                className={css.clear}>
              </img>
              <img src={img2} 
                onClick={(e)=>`${img2===imgArr[0]?setImg2(imgArr[1]):setImg2(imgArr[0])}`}
                className={css.icon}>
              </img>
            </CellFooter>
          )}
        </FormCell>







        {/* 确认密码框 */}
        <FormCell className={css.cellsForm}>
          <CellBody>
            <Input className={css['cell-input']}
              type={`${img3===imgArr[0]?'password':'text'}`}
              placeholder={i18n.t('common:regname')}
              value={regname}
              onChange={e => setregname(e.target.value)}
            />
          </CellBody>
          {regname && (
            <CellFooter>
              <img src={imgArr[2]} 
                onClick={()=>setregname('')}
                className={css.clear}>
              </img>
              <img src={img3} 
                onClick={(e)=>`${img3===imgArr[0]?setImg3(imgArr[1]):setImg3(imgArr[0])}`} 
                className={css.icon}>
              </img>
            </CellFooter>
          )}
        </FormCell>




        <FormCell className={css.cellsForm}>
          <CellBody>
            <Input className={css['cell-input']}
              type={`${img3===imgArr[0]?'password':'text'}`}
              placeholder={i18n.t('common:regpassword')}
              value={regpassword}
              onChange={e => setregpassword(e.target.value)}
            />
          </CellBody>
          {regpassword && (
            <CellFooter>
              <img src={imgArr[2]} 
                onClick={()=>setregpassword('')}
                className={css.clear}>
              </img>
              <img src={img3} 
                onClick={(e)=>`${img4===imgArr[0]?setImg4(imgArr[1]):setImg4(imgArr[0])}`} 
                className={css.icon}>
              </img>
            </CellFooter>
          )}
        </FormCell>

      </Form>




      {/* 确定按钮 */}
      <Button type="primary" size="middle" 
      className={`${(regclass===''||regname===''||regpassword===''||regstudentid==='')?css.sureButton:css.sure_Button_blue} ${css.sureButton}`} 
      onClick={()=>submitPwd()}>
      {i18n.t('common:sure')}
      </Button>
     
    </div>
  );
}
