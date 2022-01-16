const datas = {
    amountList: [30, 50, 100, 200, 300, 500],   //缴费金额
   
    payMethod: [     //支付方式
        {
            type: 'weixin', //支付类型
            name: '微信',    //支付名称
            payIcon: 'weixinIcon' //支付图标
        }, {
            type: 'zhufbao',
            name: '支付宝',
            payIcon: 'zfbIcon'
        }
    ]
}

export default datas;