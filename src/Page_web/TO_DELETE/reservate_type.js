/* eslint-disable no-script-url */
import React from 'react';
//开发者实际开发时需要去掉此段代码的逻辑
import images from './images';

const datas = {
    title: '常用网站',  //显示的标题
    // reservateNum: 3,   //预约数
    typeList: [ //预约类型列表
        {
            value: 'socialSecurity',   //键值，预约类型的唯一标识, 与app.json中的映射值保持一致
            label: '学校图书馆',  //显示的名称
            icon: <img src={images['socialSecurity']} />  ,//类型图标，此处获取的本地图片，实际开发中为服务端返回的图片地址
            url:'http://lib.neuq.edu.cn/'
        },
        {
            value: 'trafficPolice',
            label: '本科生信息服务平台',
            icon: <img src={images['trafficPolice']} />,
            url:'http://jwxt.neuq.edu.cn/jwglxt/xtgl/login_slogin.html?language=zh_CN&_t=1600707658946'
        },
        {
            value: 'taxed',
            label: '学信网',
            icon: <img src={images['taxed']} />,
            url:'https://www.chsi.com.cn/'
        },
        {
            value: 'educateCollege',
            label: '学校教务处',
            icon: <img src={images['educateCollege']} />,
            url:'http://jwc.neuq.edu.cn/'
        },
        {
            value: 'zhiwang',
            label: '知网',

            icon: <img src={images['zhiwang']} />,

            url:'https://www.cnki.net/'
        },
        {
            value: 'mooc',
            label: '中国大学生mooc',

            icon: <img src={images['mooc']} />,

            url:'https://www.icourse163.org/'
        },
        {
            value: 'xuexitong',
            label: '学习通',

            icon: <img src={images['xuexitong']} />,

            url:'hhttp://i.mooc.chaoxing.com/space/index?t=1630290053623'
        },
        {
            value: 'baidu',
            label: '百度',

            icon: <img src={images['baidu']} />,

            url:'https://www.baidu.com/'
        }
    ]
}

export default datas;