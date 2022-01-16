import React, { useState, useEffect } from 'react';
import * as css from './index.module.css';// 页面样式

import mockData  from './TO_DELETE/data';  // 本地mock数据，实际开发中删除该数据，使用接口数据替换
import  globalData from './TO_DELETE/globalDatas' //用来存储提交的表单数据来供详情展示页使用的全局变量，实际开发中可以删除
// 日期组件
import DateTimePicker from '../common/library/DateTimePicker';
import datas1 from '../Page_sf/TO_DELETE/data1';
// 存储全局变量，当前用户设置默认值,实际开发时需要去掉此段代码的注释
// import global from '../common/global';
import {
  Form, FormCell, FormHeader, ButtonArea,
  Button, TextArea, FormItem, Tags, CellBody, Uploader2,
  Cells, CellFooter, Cell, ActionSheet
} from '@wecode/react-weui';

export default function Home(props) {

  // 日期选择数据
  const [pickerData, setPickerData] = useState({ show: false, field: '' });

  // 上滑列表数据
  const [actionSheetData, setActionSheetData] = useState({
    isShow: false,
    menus: [
      {
        label: '短期',
        onClick: () => { formData.cycle = '短期'; setFormData({ ...formData }); setActionSheetData({ ...actionSheetData, isShow: false }) }
      },
      {
        label: '长期',
        onClick: () => { formData.cycle = '长期'; setFormData({ ...formData }); setActionSheetData({ ...actionSheetData, isShow: false }) }
      },
    ],
    actions: [
      {
        label: '取消',
        onClick: () => { actionSheetData.isShow = false; setActionSheetData({ ...actionSheetData }); }
      }
    ]
  });

  // 附件数据
  const [annexList, setAnnexList] = useState([
    { type: 'jpg', name: '图片1', size: '1.1M', status: '100%' },
    { type: 'jpg', name: '图片2', size: '1.1M', status: '50%' }
  ]);

  // 表单数据
  const [formData, setFormData] = useState({
    name: '',// 姓名
    studentId: '',// 学号
    college: '',// 学院
    class: '',// 班级
    contact: '',// 联系方式
    cycle: '',// 申请周期
    startTime: '',// 开始时间
    endTime: '',// 结束时间
    cause: '',// 事由
    annex: '',// 附件
    approver: ''// 审批人
  });

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
  //       getStudentInfo();
  //     })
  //   }).catch(error => {
  //     console.log('err = ', error);
  //   });
  // };
  // 3. 获取学生信息
  function getStudentInfo() {
    // HWH5.fetchInternet('此处填写获取学生详情信息真实服务', {
    //   method: 'post', 
    //   headers: { 'Content-Type': 'application/json'},
    //   body: JSON.stringify({ userId: global.userInfo.uid }),
    //   timeout: 6000
    // }).then(res => {
    //   res.json().then(reply => { // 如果业务服务返回的是非json格式类型，请使用res.text()，否则会解析报错
    //     console.log('服务端返回: ', reply);
    //     formData.college = reply.college; // 根据业务服务填充数据
    //     setFormData({ ...formData });
    //   });
    // }).catch(error => {
    //   console.log('请求异常', error);
    // });
    // 模板本地mock数据，实际开发时需要去掉此段代码的逻辑
    formData.name = datas1.data0.name;
    formData.studentId = datas1.data0.corpUserId;
    formData.college = datas1.data0.department;
    formData.class = datas1.data0.class1;
    formData.contact = datas1.data0.mobileNumber;
    formData.approver = mockData.approver;
    setFormData({ ...formData });
  }

  // 页面输入统一封装方法赋值
  const handleChangeValue = (key, value) => {
    if (key === 'cause') {
      formData.cause = value;
      setFormData({ ...formData });
    }
    if (key === 'startTime') {
      formData.startTime = value;
      console.log('value = ', value);
      setFormData({ ...formData });
    }
    if (key === 'endTime') {
      formData.endTime = value;
      setFormData({ ...formData });
    }
    setFormData({ ...formData });
  }

  // 提交
  function submitFun() {
    const { history } = props;

    // 开发者可将数据提交至自己的业务服务，具体请求方式可参考getStudentInfo方法内部请求
    console.log('提交表单---');
    console.log('formData = ', formData);// 表单数据
    console.log('annexList = ', annexList);// 附件数据
    history.push('/success');
    globalData.formData=formData;
    globalData. annexList=annexList;
   
  
    
    
  }

  

  useEffect(() => {
    //执行免登流程，获取用户信息，开发者实际开发时需要调用此方法
    // getCode();
    //获取学生信息，实际开发时需要去掉此段代码的逻辑
    getStudentInfo();
    // 设置导航标题
    HWH5.setNavigationBarTitle({ title: "请假" });
    return () => {
      // 销毁事件
      HWH5.setNavigationBarTitle({ title: '' });
    }
  }, []);

  return (
    <div className={css.App}>
      <Cells className={`${css['itemBox']}`} style={{ marginTop: '0' }}>
        <Cell list>
          <CellBody>姓名</CellBody>
          <CellFooter>{datas1.data0.name}</CellFooter>
        </Cell>
        <Cell list>
          <CellBody>学号</CellBody>
          <CellFooter>{datas1.data0.corpUserId}</CellFooter>
        </Cell>
        <Cell list>
          <CellBody>学院</CellBody>
          <CellFooter>{datas1.data0.department}</CellFooter>
        </Cell>
        <Cell list>
          <CellBody>班级</CellBody>
          <CellFooter>{datas1.data0.class1}</CellFooter>
        </Cell>
      </Cells>

      <Cells className={`${css['itemBox']}`}>
        <Cell list>
          <CellBody>联系方式</CellBody>
          <CellFooter>{datas1.data0.mobileNumber}</CellFooter>
        </Cell>
        <Cell access list onClick={() => { setActionSheetData({ ...actionSheetData, isShow: true }) }}>
          <CellBody>申请周期</CellBody>
          <CellFooter>{formData.cycle}</CellFooter>
        </Cell>
        <Cell access list onClick={() => { document.activeElement.blur(); setPickerData({ field: 'startTime', fieldIndex: 1, show: true, defaultSelect: Date.now() }); }}>
          <CellBody>开始时间</CellBody>
          <CellFooter>{formData.startTime}</CellFooter>
        </Cell>
        <Cell access list onClick={() => { document.activeElement.blur(); setPickerData({ field: 'endTime', fieldIndex: 1, show: true, defaultSelect: Date.now() }); }}>
          <CellBody>结束时间</CellBody>
          <CellFooter>{formData.endTime}</CellFooter>
        </Cell>
      </Cells>

      <div className={`${css['itemBox']}`} >
        <Form form>
          <FormItem>
            <FormHeader>事由</FormHeader>
            <Tags
              tags={['回家一趟', '去医院', '接送朋友', '参加外部活动', '外出购物']}
              onChange={(e, text) => {
                const value = formData.cause + text;
                if (value.length <= 300) {
                  handleChangeValue('cause', value);
                }
              }}
            />
            <FormCell line>
              <CellBody>
                <TextArea
                  placeholder="请输入进出校事由"
                  rows="3"
                  showCounter
                  maxLength={300}
                  value={formData.cause}
                  onChange={(e) => {
                    const text = e.target.value;
                    if (text.length <= 300) {
                      handleChangeValue('cause', text);
                    }
                  }}
                />
              </CellBody>
            </FormCell>
          </FormItem>

          {/* 上传文件组件 */}
          <Uploader2
            title={"附件"}
            files={annexList}
            onFileClick={(e, file, i) => {
              console.log('预览图片---');
              if (file.path) {
                HWH5.previewImage({
                  index: '0',
                  imageArray: [file.path]
                }).catch(error => {
                  console.log('打开失败', error);
                });
              }

            }}
            onDeleteClick={(e, file, i) => {
              console.log('删除图片---');
              annexList.splice(i, 1);
              setAnnexList(annexList.slice());
            }}
            onUpload={() => {
              console.log('选择图片---');
              HWH5.chooseImage({
                flag: 1,
                imagePickerMode: 'All',
                maxSelectedCount: 12,
                showOrigin: false,
                btntxtEN: 'Done',
                btntxtCN: '完成',
                cameraFacing: 0,
                compress: '0.25'
              }).then(data => {
                console.log(data);
                const obj = {
                  type: 'jpg',
                  name: '图片3',
                  size: '1.1M',
                  status: '100%',
                  path: data[0]
                }
                annexList.push(obj);
                setAnnexList(annexList.slice());
              }).catch(error => {
                console.log('访问相册异常', error);
              });
            }}
          />
        </Form>
      </div>

      {/* <Cells className={`${css['itemBox']}`} style={{ marginBottom: '80px' }}>
        <Cell list>
          <CellBody>{i18n.t('common:approver')}</CellBody>
          <CellFooter>{formData.approver}</CellFooter>
        </Cell>
      </Cells> */}

      <ButtonArea fixedSpacing >
        <Button type="primary" onClick={() => { submitFun() }}>提交</Button>
      </ButtonArea>

      {/* 上滑列表组件 */}
      <ActionSheet
        menus={actionSheetData.menus}
        actions={actionSheetData.actions}
        show={actionSheetData.isShow}
        onRequestClose={e => setActionSheetData({ ...actionSheetData, isShow: false })}
      />

      {/* 日期组件 */}
      <DateTimePicker
        key={`date_picker_${pickerData.field}_${pickerData.fieldIndex}`}
        defaultSelect={pickerData.defaultSelect}
        show={pickerData.show}
        onChange={(selected, val) => {
          const { field } = pickerData;
          handleChangeValue(field, val);
          setPickerData({ ...pickerData, show: false });
        }}
        onCancel={e => setPickerData({ ...pickerData, show: false })}
      />
    </div>
  );
}
