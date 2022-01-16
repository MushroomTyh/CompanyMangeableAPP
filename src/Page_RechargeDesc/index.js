import React, {
  useEffect
} from 'react';
import i18n from 'i18n';
import * as css from './index.module.css';

export default function RechargeDesc(props) {
  useEffect(() => {
    //设置导航标题
    HWH5.setNavigationBarTitle({ title: i18n.t('common:payDesc') }).catch(error => {
      console.log('设置标题异常', error);
    });
  })


  //路由导航
  const navigateTo = (type) => {
    const { history } = props;
    //replace:跳转的目标页面替换当前页面，当前页面被删除
    history.replace({
      pathname: `/${type || ''}`,
      params: false
    });
  }

  return (
    <div className={css.body}>
      <div className={css.paySuccessIcon}></div>
      <div className={css.paySuccess}>{i18n.t('common:paySuccess')}</div>
      <div className={css.dormPay}>{i18n.t('common:dormPay')}</div>
      <div className={css.amount}>￥{props.location.params ? props.location.params + '.00' : ''}</div>
      <div className={`weui-btn-area_fixed__spacing`}>
        <a className={`weui-btn weui-btn_primary ${css.viewRecords}`} onClick={e => navigateTo('rechargeRecord')}>{i18n.t('common:viewRecords')}</a>
        <a className={`weui-btn weui-btn_primary`} onClick={e => navigateTo('czjf')}>{i18n.t('common:continueRecharge')}</a>
      </div>
    </div>
  );
}
