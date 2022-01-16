//假数据，可替换，如若需要修改属性名则在渲染页面也需要同时修改
const datas = {
 
  honorList: [   //荣誉列表
    {
      type: "honorStar",  //荣耀列表类型，路径跳转区分字段
      title: "收款",  //标题
      department: "",  //荣誉颁发部门
      // time: "2020-06-07",  //荣誉颁发时间
      bagIcon: "bag-hover-honorStar",  //荣誉列表项className名
      URL:"sk"
    },
    {
      type: "honorStar",
      title: "付款",
      department: "",
      // time: "2020-05-06",
      bagIcon: "bag-hover-futureStars",
      URL:"fk"
    },
    {
      type: "honorStar",
      title: "充值缴费",
      department: "",
      // time: "2020-03-16",
      bagIcon: "bag-hover-youthStar",
      URL:"czjf"
    },
    // {
    //   type: "honorStar",
    //   title: "最佳攻城狮之星",
    //   department: "研发能力中心组织部",
    //   // time: "2020-02-06",
    //   bagIcon: "bag-hover-engineerStar",
    // }
  ],
  // statisticsCollectionTime: "2020-06-06"
}

export default datas;
