import React, { useEffect } from 'react';
import * as css from './index.module.css';
import i18n from 'i18n';
import {
  ButtonArea,
  Button
} from '@wecode/react-weui';
export default function Desc(props) {

  useEffect(() => {
    // 设置导航标题
    window.HWH5.setNavigationBarTitle({ title: `${i18n.t('common:changePwd')}`});
  }, []);
   function goto(type) {
      const { history } = props;
      history.push( `/${type}` );
    }
  return (
    <div className={css.App}>
      
      
      <div className={css.tipStyle}>
        {/* 提示修改成功图标 */}
        <img src={require('./img/checkbox_checked_success.svg')} 
        className={css.iconStyle}></img>
        {/* 修改成功文字 */}
        <p className={css.textStyle}>{i18n.t('common:success')}</p>
        {/* <Button type="primary" size="middle"  className={css.position}> 111</Button>  */}
      </div>
    
      <ButtonArea fixedSpacing>
        <Button onClick={e => { goto('serve') }}>返回服务界面</Button>
      </ButtonArea>
    </div>
    
  );
}
