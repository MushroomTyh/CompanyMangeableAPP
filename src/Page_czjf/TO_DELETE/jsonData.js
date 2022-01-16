const liveCost = {  //生活费
    addressList: [  //宿舍地址列表
        {
            name: "大一",   //宿舍区域
            code: "10000",  //宿舍区域编号，每个区域的唯一标识
            sub: [  //区域下的楼层
                {
                    name: "计算机与通信工程学院",    //宿舍所在栋楼
                    code: "10100",  //宿舍栋楼编号，每栋楼的唯一标识
                    sub: [  //每栋楼下的宿舍
                        {
                            name: "鹏远卡",    //宿舍
                            code: "10101",   //宿舍编号，每个宿舍的唯一标识,
                            remainAmount: '20.15'   //宿舍剩余金额
                        }, {
                            name: "校园卡",
                            code: "10102",
                            remainAmount: '20.15'
                        }, {
                            name: "银行卡",
                            code: "10103",
                            remainAmount: '20.15'
                        }
                    ]
                }, {
                    name: "控制工程学院",
                    code: "10200",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10201",
                            remainAmount: '30.15'
                        }, {
                            name: "校园卡",
                            code: "10202",
                            remainAmount: '30.15'
                        }, {
                            name: "银行卡",
                            code: "10203",
                            remainAmount: '30.15'
                        }
                    ]
                }, {
                    name: "经济学院",
                    code: "10500",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10501",
                            remainAmount: '20'
                        }, {
                            name: "校园卡",
                            code: "10502",
                            remainAmount: "20"
                        }, {
                            name: "银行卡",
                            code: "10503",
                            remainAmount: "20"
                        }
                    ]
                }, {
                    name: "管理学院",
                    code: "11100",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "11101",
                            remainAmount: "10"
                        }, {
                            name: "校园卡",
                            code: "11102",
                            remainAmount: "10"
                        }, {
                            name: "银行卡",
                            code: "11103",
                            remainAmount: "10"
                        }
                    ]
                }
            ]
        }, {
            name: "大二",   //宿舍区域
            code: "10000",  //宿舍区域编号，每个区域的唯一标识
            sub: [  //区域下的楼层
                {
                    name: "计算机与通信工程学院",    //宿舍所在栋楼
                    code: "10100",  //宿舍栋楼编号，每栋楼的唯一标识
                    sub: [  //每栋楼下的宿舍
                        {
                            name: "鹏远卡",    //宿舍
                            code: "10101",   //宿舍编号，每个宿舍的唯一标识,
                            remainAmount: '20.15'   //宿舍剩余金额
                        }, {
                            name: "校园卡",
                            code: "10102",
                            remainAmount: '20.15'
                        }, {
                            name: "银行卡",
                            code: "10103",
                            remainAmount: '20.15'
                        }
                    ]
                }, {
                    name: "控制工程学院",
                    code: "10200",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10201",
                            remainAmount: '30.15'
                        }, {
                            name: "校园卡",
                            code: "10202",
                            remainAmount: '30.15'
                        }, {
                            name: "银行卡",
                            code: "10203",
                            remainAmount: '30.15'
                        }
                    ]
                }, {
                    name: "经济学院",
                    code: "10500",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10501",
                            remainAmount: '20'
                        }, {
                            name: "校园卡",
                            code: "10502",
                            remainAmount: "20"
                        }, {
                            name: "银行卡",
                            code: "10503",
                            remainAmount: "20"
                        }
                    ]
                }, {
                    name: "管理学院",
                    code: "11100",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "11101",
                            remainAmount: "10"
                        }, {
                            name: "校园卡",
                            code: "11102",
                            remainAmount: "10"
                        }, {
                            name: "银行卡",
                            code: "11103",
                            remainAmount: "10"
                        }
                    ]
                }
            ]
        }, {
            name: "大三",   //宿舍区域
            code: "10000",  //宿舍区域编号，每个区域的唯一标识
            sub: [  //区域下的楼层
                {
                    name: "计算机与通信工程学院",    //宿舍所在栋楼
                    code: "10100",  //宿舍栋楼编号，每栋楼的唯一标识
                    sub: [  //每栋楼下的宿舍
                        {
                            name: "鹏远卡",    //宿舍
                            code: "10101",   //宿舍编号，每个宿舍的唯一标识,
                            remainAmount: '20.15'   //宿舍剩余金额
                        }, {
                            name: "校园卡",
                            code: "10102",
                            remainAmount: '20.15'
                        }, {
                            name: "银行卡",
                            code: "10103",
                            remainAmount: '20.15'
                        }
                    ]
                }, {
                    name: "控制工程学院",
                    code: "10200",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10201",
                            remainAmount: '30.15'
                        }, {
                            name: "校园卡",
                            code: "10202",
                            remainAmount: '30.15'
                        }, {
                            name: "银行卡",
                            code: "10203",
                            remainAmount: '30.15'
                        }
                    ]
                }, {
                    name: "经济学院",
                    code: "10500",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10501",
                            remainAmount: '20'
                        }, {
                            name: "校园卡",
                            code: "10502",
                            remainAmount: "20"
                        }, {
                            name: "银行卡",
                            code: "10503",
                            remainAmount: "20"
                        }
                    ]
                }, {
                    name: "管理学院",
                    code: "11100",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "11101",
                            remainAmount: "10"
                        }, {
                            name: "校园卡",
                            code: "11102",
                            remainAmount: "10"
                        }, {
                            name: "银行卡",
                            code: "11103",
                            remainAmount: "10"
                        }
                    ]
                }
            ]
        }, {
            name: "大四",
            code: "10000",
            sub: [  //区域下的楼层
                {
                    name: "计算机与通信工程学院",    //宿舍所在栋楼
                    code: "10100",  //宿舍栋楼编号，每栋楼的唯一标识
                    sub: [  //每栋楼下的宿舍
                        {
                            name: "鹏远卡",    //宿舍
                            code: "10101",   //宿舍编号，每个宿舍的唯一标识,
                            remainAmount: '20.15'   //宿舍剩余金额
                        }, {
                            name: "校园卡",
                            code: "10102",
                            remainAmount: '20.15'
                        }, {
                            name: "银行卡",
                            code: "10103",
                            remainAmount: '20.15'
                        }
                    ]
                }, {
                    name: "控制工程学院",
                    code: "10200",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10201",
                            remainAmount: '30.15'
                        }, {
                            name: "校园卡",
                            code: "10202",
                            remainAmount: '30.15'
                        }, {
                            name: "银行卡",
                            code: "10203",
                            remainAmount: '30.15'
                        }
                    ]
                }, {
                    name: "经济学院",
                    code: "10500",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "10501",
                            remainAmount: '20'
                        }, {
                            name: "校园卡",
                            code: "10502",
                            remainAmount: "20"
                        }, {
                            name: "银行卡",
                            code: "10503",
                            remainAmount: "20"
                        }
                    ]
                }, {
                    name: "管理学院",
                    code: "11100",
                    sub: [
                        {
                            name: "鹏远卡",
                            code: "11101",
                            remainAmount: "10"
                        }, {
                            name: "校园卡",
                            code: "11102",
                            remainAmount: "10"
                        }, {
                            name: "银行卡",
                            code: "11103",
                            remainAmount: "10"
                        }
                    ]
                }
            ]
        }
    ]
}
export default liveCost;