import React, {
  useEffect,
  useState
} from 'react';
import {
  Cells, Cell, CellBody, CellBodyExplan, CellFooter
} from '@wecode/react-weui';
import i18n from 'i18n';
import * as css from './index.module.css';
// 模拟接口请求的本地json数据，启用真实服务接口时注释该行代码
import rechargeRecord from './TO_DELETE/rechargeRecord';
// 存储全局变量，当前用户设置默认值,实际开发时需要去掉此段代码的注释
// import global from '../common/global';

export default function RechargeRecord(props) {


  const [rechargeRecords, setRechargeRecords] = useState([]);

  useEffect(() => {
    //设置导航标题
    HWH5.setNavigationBarTitle({ title: i18n.t('common:rechargeRecord') }).catch(error => {
      console.log('设置标题异常', error);
    });
    //实际开发中需要删除此代码
    setRechargeRecords(rechargeRecord.list);
    // 获取缴费记录，实际开发时需要去掉此段代码的注释
    // getRecordsList();
  }, []);

  //获取缴费记录列表，实际开发时需要去掉此段代码的注释
  // const getRecordsList = () => {
  //   const url = 'http://xxxx';
  //   const _headers = {
  //     'Content-Type': 'application/json'
  //   };
  //   const _params = {
  //     userId: global.userInfo.uid
  //   };
  //   HWH5.fetchInternet(url, {
  //     method: 'post',
  //     body: JSON.stringify(_params),
  //     headers: _headers
  //   }).then(res => {
  //     res.json().then(reply => {
  //       console.log('服务端返回: ', reply);
  //       存储接口返回的数据
  //       setRechargeRecords(reply.list);
  //   }).catch(error => {
  //     console.log('请求异常', error);
  //   });
  // }

  return (
    <div>
      {/* 
        充值费用列表
      */}
      <Cells className={css.cells}>
        {
          rechargeRecords.map((item, index) => {
            return (
              <Cell key={index}>
                <CellBody>
                  {item.date}
                  <CellBodyExplan>
                    {item.userName}
                    <span className={css.address}>{item.address}</span>
                  </CellBodyExplan>
                </CellBody>
                <CellFooter>{item.amount}</CellFooter>
              </Cell>
            )
          })
        }
      </Cells>
    </div>
  );
}
