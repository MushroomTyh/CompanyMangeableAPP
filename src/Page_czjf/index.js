import React, {
    useEffect, useState
  } from 'react';
  import {
    Tab, TabBody, TabBar, TabBarItem, Form, FormCell, Label, FormHeader, FormBody, CellsTitle, CellHeader, CellBody, CellFooter, Input, Button, Cells, Cell
  } from '@wecode/react-weui';
  
  import * as css from './index.module.css';
  import CityPicker from './component/city_picker';
  import liveCost from './TO_DELETE/jsonData';
  import datas from '../Page_czjf/TO_DELETE/amount_pay_method';
// 模拟接口请求的本地json数据，启用真实服务接口时注释该行代码
import rechargeRecord from '../Page_RechargeRecord/TO_DELETE/rechargeRecord';
  // 存储全局变量，当前用户设置默认值,实际开发时需要去掉此段代码的注释
  // import global from '../common/global';
  import i18n from '../i18n';
  import global from '../common/global.js';
  export default function statistics(props) {
     
    //初始化底部tab
    const [tab,setState] = useState(0); 
    const { addressList } = liveCost;

    //初始化宿舍地址
    const [address, setAddress] = useState({
      addressCode: '',
      addressValue: '',
      addressShow: false,
      selectedAddress: []
    });
    //初始化统计数据
    //初始化可选余额
   const [remainaAmount, setRemainaAmount] = useState('');

   //是否选中某个金额
   const [selected, setSelected] = useState(0);

   //是否显示底部弹出层
   const [showPop, setShowPop] = useState(false);

   //初始化充值金额
   const [payAmount, setPayAmount] = useState();

   //付款方式默认选中第一个
   const [selectedPay, setSelectedPay] = useState({ type: 'weixin', index: 0 });
   //初始化宿舍地址列表
   const [addressData, setAddressData] = useState([{
    sub: [{
      sub: [{}]
    }]
   }]);

   //初始化充值金额列表和支付方式
   const [data, setData] = useState({
    amountList: [],
    payMethod: []
   });
    //初始化picker的key值，每次会根据key的值动态渲染组件
     const [pickerKey, setPickerKey] = useState(0);

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
  
    useEffect(() => {
      //设置导航标题
      HWH5.setNavigationBarTitle({ title: i18n.t('common:appName1') }).catch(error => {
        console.log('设置标题异常', error);
      });
      //开发者实际开发时需要调用此方法
      // getCode();
      //获取充值金额和支付方式，实际开发时需要去掉此段代码的逻辑
      setData(datas);
      //获取充值金额和支付方式，实际开发时需要去掉此段代码的注释
      // getData();
    }, []);
   //当宿舍地址更新时
   useEffect(() => {
    if (addressData && addressData.length > 0) {
      setPickerKey(pickerKey + 1);
       }
        }, [addressData]);
        const selectAddress = (event) => {
          setAddress({ ...address, addressShow: true });
          //存储地址列表，实际开发中需要删除此代码
          setAddressData(addressList);
          // 获取地址列表，实际开发时需要去掉此段代码的注释
          // getAddressList();
      
          event.preventDefault();
        }
        //当改变宿舍地址时填充当前地址和剩余金额
  const changeAddress = (text, selected) => {
    addressData.forEach((region, regionIndex) => {
      region.sub.forEach((floot, flootIndex) => {
        const currDorm = floot.sub.find((dorm, dormIndex) => {
          return (selected || []).join('') === [regionIndex, flootIndex, dormIndex].join('');
        })
        if (currDorm) {
          setAddress({ addressCode: currDorm.code, addressValue: text, addressShow: false, selectedAddress: selected });
          setRemainaAmount(currDorm.remainAmount);
        }
      })
    })
  }
   //选择金额时改变样式、设置充值金额
   const handleSelected = (currIndex, amount) => {
    setSelected(currIndex);
    setPayAmount(amount);
    console.log(datas.amountList[currIndex])
  }
  //点击充值缴费时



  const payMount = (currIndex) => {
    if (address.addressValue) {
      setShowPop(true);
     
        console.log(address.addressValue);
    } 
    else {
      HWH5.showToast({ msg: '请选择个人账户后再充值' });
    }
  }



  
  //路由导航
  const navigateTo = (type) => {
    const { history } = props;
    history.push({
      pathname: `/${type}`,
      params: payAmount
    });
  }

  function dateFormat(fmt, date) {
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
    }
    return fmt;
  }
     //更新宿舍地址和缴费记录数据，实际开发时需要去掉此段代码的逻辑
     const updateData = () => {
      //更新缴费后的余额
       const list = addressData.map((region, regionIndex) => {
     const floots = region.sub.map((floot, flootIndex) => {
       const dorms = floot.sub.map((dorm, dormIndex) => {
         return (address.selectedAddress || []).join('') === [regionIndex, flootIndex, dormIndex].join('') ? { ...dorm, remainAmount: Number(dorm.remainAmount) + payAmount + '' } : dorm;
       })
       return { ...floot, sub: dorms }
     })
     return { ...region, sub: floots }
   });
   console.log('-------address', list);
   //存储宿舍地址
   liveCost.addressList = list;
   //存储缴费记录
   const currData = { date: dateFormat('YYYY/mm/dd HH:MM', new Date()), userName: global.userInfo.userNameZH || '', amount: `￥${payAmount}.00`, address: address.addressValue.split(' ').join('') };
   rechargeRecord.list.push(currData);
   console.log('------records', rechargeRecord);
 }
 const recharge = () => {
  //更新宿舍地址和缴费记录数据，实际开发时需要去掉此段代码的逻辑
  updateData();
     navigateTo('rechargeDesc');
  //更新宿舍地址和缴费记录数据，实际开发时需要去掉此段代码的注释
    //updateData();
    }
    return (
       // 使用React-UI组件的列表组件
             <div className={css.workReport}>
           <Tab>
              <TabBody>
            
 
              <div>
      {/* 
        宿舍费用充值表单
      */}
      <Form className={css.form}>
        <FormCell form access line>
          <FormHeader>
            <Label>{i18n.t('common:个人账户')}</Label>
          </FormHeader>
          <FormBody access beRight placeholder={i18n.t('common:选择个人账户')} onClick={e => selectAddress(e)}>
            {address.addressValue}
          </FormBody>
        </FormCell>
        <FormCell>
          <CellHeader>
            <Label>{i18n.t('common:amount')}</Label>
          </CellHeader>
          <CellBody>
            <Input type="text"
              value={remainaAmount ? remainaAmount + '元' : remainaAmount}
              placeholder={i18n.t('common:选择个人账户后显示')}
              readOnly={true}
            />
          </CellBody>
          <CellFooter>
            <div className={`${css.rechargeRecord}`} onClick={e => navigateTo('rechargeRecord')}>{i18n.t('common:rechargeRecord')}</div>
          </CellFooter>
        </FormCell>
      </Form>
      {/* 
        选择宿舍地址组件
      */}
      <CityPicker
        key={pickerKey}
        data={addressData}
        onCancel={e => setAddress({ ...address, addressShow: false })}
        onChange={(text, selected) => changeAddress(text, selected)}
        show={address.addressShow}
      />
      {/* 
        选择金额的列表
      */}
      <Form>
        <div className={css.amountList}>
          {
                      data.amountList && data.amountList.map((item, index) => {
              return (
                <div className={`${css.amount} ${selected === index ? css.selected : ''}`} key={index} onClick={e => handleSelected(index, item)}>{item}</div>
              )
            })
          }
        </div>
      </Form>
      {/* 
        充值按钮
      */}
      <Button className={css.submit} onClick={e => payMount()}>{i18n.t('common:recharge')}</Button>
      {/* 
        弹出层:确认充值缴费信息
      */}
      <div>
        <div className='weui-mask' style={{ display: showPop ? 'block' : 'none' }}></div>
        <div className={`${css['weui-popup']} ${showPop ? css['weui-popup_toggle'] : ''}`}>
          {/* 
            显示标题
          */}
          <div className={css.popTitle}>
            {i18n.t('common:payDesc')}
            <a className={css.popClose} onClick={e => setShowPop(false)}></a>
          </div>
          {/*
            显示内容
          */}
          <div className={css.popContent}>
            <div className={css.popAmount}>￥{payAmount ? payAmount + '.00' : payAmount}</div>
            <div className={css.popAddress}>{address.addressValue.split(' ').join('')}{i18n.t('common:充值费')}</div>
          </div>
          {/* 
            支付方式
          */}
             <CellsTitle className={css.payMethod}>
            {i18n.t('common:payMethod')}
          </CellsTitle>
          <Cells className={css.cellsPay}>
            {
                    //支付方式有两种:微信、支付宝
                     data.payMethod && data.payMethod.map((item, index) => {
                return (
                  <Cell className={css.cellPay} key={index} onClick={e => setSelectedPay({ type: item.type, index })}>
                    <CellHeader>
                      <div className={`${css.payIcon} ${css[item.payIcon]}`}></div>
                    </CellHeader>
                    <CellBody>{item.name}</CellBody>
                    <CellFooter>
                      <div className={`${css.selectedPay} ${selectedPay.index === index ? css.checked : ''}`}></div>
                    </CellFooter>
                  </Cell>
                )
              })
            }
          </Cells>
          <Button className={css.pay} onClick={e => recharge()}>{i18n.t(`common:${selectedPay.type === 'weixin' ? 'weinxipay' : 'zhifubaopay'}`)}
          ￥{payAmount ? payAmount + '.00' : payAmount}
          </Button>
        </div>
      </div>
    </div>
  
  
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
  
      </div>
    );
  }
  