//假数据，可替换，如若需要修改属性名则在渲染页面也需要同时修改
const datas = {
 
  serveList: [   //服务列表
    {
      title: "教学服务",  //标题
      list: [  //常用服务的列表
        {
          type: "attendance",  //类型，用来区分跳转的路由导航
          label: "成绩查询",  //显示的名称
          icon: "icon-server-attendance",
          url:'http://jwc.neuq.edu.cn/'  //图标样式，用来设置显示的图标，与index.js页面的className、css页面的class名称相一致
        }, {
          type: "salary",
          label: "我的课表",
          icon: "icon-server-salary",
          url:'http://jwxt.neuq.edu.cn/jwglxt/xtgl/login_slogin.html?kickout=1'
        }
      ]
    },
    {
      title: "公共服务",
      list: [
        {
          type: "businessTrip",
          label: "东秦缴费平台",
          icon: "icon-server-businessTrip",
          url:'http://pay.neuq.edu.cn/payment/'
        }, {
          type: "serviceHotline",
          label: "校园一卡通综合查询",
          icon: "icon-server-serviceHotline",
          url:'http://ecard.qust.edu.cn/'
        },
          {
          type: "computerInstallation",
          label: "计算机等级考试查询",
          icon: "icon-server-computerInstallation",
          url:'http://cjcx.neea.edu.cn/ncre/query.html'
        }, {
          type: "campusIntroduce",
          label: "快递查询",
          icon: "icon-server-campusIntroduce",
          url:'https://www.sf-express.com/cn/sc/dynamic_function/waybill/'
        }, {
          type: "employee",
          label: "普通话等级查询",
          icon: "icon-server-employee",
          url:'http://zwfw.moe.gov.cn/mandarin/'
        }, {
          type: "busInformation",
          label: "四六级",
          icon: "icon-server-busInformation",
          url:'http://cet.neea.edu.cn/'
        }, {
          type: "nearbyTraffic",
          label: "优课",
          icon: "icon-server-nearbyTraffic",
          url:'http://www.uooc.com.cn/'
        }, {
          type: "propertyService",
          label: "有道词典",
          icon: "icon-server-propertyService",
          url:'http://dict.youdao.com/'
        }
      ]
    },
    {
      title: "学工服务",
      list: [
         {
          type: "recepteVisitor",
          label: "学校新闻",
          icon: "icon-server-receptionVisitors",
          url:'https://www.neuq.edu.cn/'
        },
        {
          type: "socialSecurity",
          label: "请假离校",
          icon: "icon-server-socialSecurity",
          url:""
        }, {
          type: "certificate",
          label: "超级社团",
          icon: "icon-server-certificate",
          url:'http://club.super.cn/login.jsp'
        }, {
          type: "cardApplication",
          label: "志愿汇",
          icon: "icon-server-cardApplication",
          url:'http://zyh365.com/'
        }, {
          type: "settles",
          label: "勤工俭学",
          icon: "icon-server-settles",
          url:'https://mkt.51job.com/tg/sem/LP_2020_1.html?from=360ad'
        },
        {
          type: "xuexiqiangguo",
          label: "学习强国",
          icon: "icon-server-xuexiqiangguo",
          url:'https://www.xuexi.cn/'
         
        },
        {
          type: "socialSecurity",
          label: "学习通",
          icon: "icon-server-xuexitong",
          url:'http://passport2.chaoxing.com/login?fid=&newversion=true&refer=http%3A%2F%2Fi.chaoxing.com'
        },
         
        
      ]
    },
    {
      title: "未分类",
      list: [
         {
          type: "recepteVisitor",
          label: "竞赛资讯",
          icon: "icon-server-jinsai",
          url:'https://cy.ncss.cn/'
        },
        {
          type: "socialSecurity",
          label: "国内新闻",
          icon: "icon-server-news",
          url:'https://news.sina.com.cn/'
        }
      ]
    }
  ]
}

export default datas;
