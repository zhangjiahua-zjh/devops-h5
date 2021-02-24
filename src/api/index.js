import http from './http';
import { BASE_URL as BaseUrl } from './ipconfig';
import { exportConfig } from './apiConfig';
// xxx页面
export const getModalData = params => http.post(`${BaseUrl}/api/rate`, params);
// export const getLogin = params => http.post( `${BaseUrl}/api/login`, params);
const server = {
  // ysk start
  // 系统管理--角色管理 start
  getRoleList (params) {
    return http.get('/api/roles', params);
  },
  submitRole (params) {
    return http.put('/api/roles', params);
  },
  // 系统管理--角色管理 end
  // 我的工作台--供应商 start
  getBatchList (params) {
    return http.get('/api/purchase/packlist/queryallpacklist', params);
  },
  // 获取委托供应商列表
  getEntrustedSupplierList () {
    return http.get('/api/supplier/findAllSupplier');
  },
  // 批次页面发货
  ship (id) {
    return http.put('/api/TransportInventory/createShip?id=' + id);
  },
  // 批次页面撤回
  withdrawCurBatch (id) {
    return http.put('/api/TransportInventory/retract?id=' + id);
  },
  // BOM列表删除单个bom
  delCurBom (id) {
    return http.put('/api/purchase/prepack/delete?id=' + id);
  },
  // BOM列表编辑单个bom
  submitEditBom (params) {
    return http.put('/api/purchase/prepack/updateBom',params);
  },
  addBatchList (params) {
    return http.post('/api/purchase/packlist/add', params);
  },
  delBatchList (params) {
    return http.put('/api/purchase/packlist/delete', params);
  },
  addBomForBatch (params) {
    return http.put('/api/purchase/packdetails/fastPack', params);
  },
  modBatchList (params) {
    return http.put('/api/purchase/packlist/update', params);
  },
  submitAddBox (params) {
    return http.put('/api/purchase/packdetails/updaterelationbatchid', params);
  },
  // 查询未挂载箱子列表
  getBoxList (params) {
    return http.get('/api/purchase/packdetails/queryallRemainPackDetails', params);
  },
  // 查询当前批次下的箱子列表
  getCurBatchBoxList (params) {
    return http.get('/api/purchase/packdetails/queryallPackDetailsbypackid', params);
  },
  // 查询当前批次详情
  getCurBatchInfo (params) {
    return http.get('/api/purchase/packlist/queryById', params);
  },
  // 当前批次上传
  uploadBatch (params) {
    return http.post('/api/minio', params);
  },
  // 我的工作台--供应商 end
  // 采购组对应关系管理--start
  // 查询采购组对应关系管理list
  getPurchasingMngList (params) {
    return http.get('/api/purchaseGroupDeptRel/allPage',params);
  },
  // 查询采购处
  getAllDept () {
    return http.get('/api/purchaseGroupDeptRel/allDept');
  },
  // 新增查询采购组对应关系
  addPurchasing (params) {
    return http.post('/api/purchaseGroupDeptRel/addPurchaseGroupDeptRel',params);
  },
  // 修改查询采购组对应关系
  modPurchasing (params) {
    return http.put('/api/purchaseGroupDeptRel/updatePurchaseGroupDeptRel',params);
  },
  // 删除查询采购组对应关系
  delPurchasing (params) {
    return http.post('/api/purchaseGroupDeptRel/deletePurchaseGroupDeptRel',params);
  },
  // 采购组对应关系管理--end
  // 物料组管理--start
  // 查询物料组管理
  getMaterialMngList(params){
    return http.get('/api/materialsGroup/getMaterialsGroupPage',params);
  },
  // 查询图号接口
  getDrawingNumberList(params){
    return http.get('/api/drawingNo/queryAllDrawingNo',params);
  },
  // 添加图号信息
  addDrawingNumber(params) {
    return http.post('/api/drawingNo/addDrawingNo', params);
  },
  // 修改图号信息
  updateDrawingNumber(params) {
    return http.put('/api/drawingNo/updateDrawingNo', params);
  },
  // 删除图号信息
  deleteDrawingNumber(params) {
    return http.put('/api/drawingNo/delete', params);
  },
  // 添加物料组管理
  addMaterialMngList(params){
    return http.post('/api/materialsGroup/addMaterialsGroup',params);
  },
  // 删除物料组管理
  delMaterialMngList(params){
    return http.deletes('/api/materialsGroup/deleteMaterialsGroup',params);
  },
  // 编辑物料组管理
  modMaterialMngList(params){
    return http.put('/api/materialsGroup/updateMaterialsGroup',params);
  },
  // 物料组管理--end
  // 原料质检详细--start
  // 获取原料质检详请列表
  getRawMateriaDetails(params){
    return http.get('/api/materialQualityCheckDetails/getMaterialQualityCheckDetailsPage',params);
  },
  // 原料质检详请提报
  submitCurRawMaterial(params){
    return http.put('/api/materialQualityCheckDetails/updateMaterialQualityCheckDetails',params);
  },
  // 原料质检详请--添加
  addCurRawMaterial(params){
    return http.post('/api/materialQualityCheckDetails/addMaterialQualityCheckDetails',params);
  },
  // 导出原料质检
  exportRawMaterial(params){
    return http.down('/api/materialQualityCheckDetails/exportMaterialQualityCheckDetailsPage',params);
  },
  // 施工工作台（质检）--start
  // 质检列表查询
  getQualityInspectionList(params){
    return http.get('/api/construction/queryQualityList',params);
  },
  // 质检列表确认
  submitZJitem(params){
    return http.put('/api/construction/auditQuality',params);
  },
  // 质检列表批量确认
  submitZJitems(params){
    return http.put('/api/construction/batchAuditQuality',params);
  },
  //质检基础数据导入
  uploadQualityExcelFile(params){
    return http.post('/api/construction/upload/qualityTemplate',params)
  },
  // 进度提醒
  getConstructionRemind(){
    return http.get('/api/construction/find/constructionRemind')
  },
  // 提报列表查询
  getReportList(params){
    return http.get('/api/construction/queryConstructionPlan',params);
  },
  // 点击提报列表当前行查询下属待提报列表
  getCurRowTBDataPlanName(params){
    return http.get('/api/construction/qualityInspectionReport',params);
  },
  // 提报
  submitTBitem(params){
    return http.post('/api/construction/saveQualityAssurance',params);
  },
  // 施工工作台（质检）--end
  // 原料质检详细--end
  // ysk end

  // zd start
  getLogin (params) {
    return http.post('/api/login', params);
  },
  logout() {
    return http.delete('auth/logout');
  },
  getInfo() {
    return http.get('auth/info');
  },
  getMenusTree (params) {
    return http.get('/api/menus/lazy', params);
  },
  getCodeImg () {
    return http.get('/auth/code');
  },
  getChild (params) {
    return http.get('/api/menus/child', params);
  },
  editMenu (params) {
    return http.post('/api/roles/menu', params);
  },
  getMenus (params) {
    return http.get('/api/menus', params);
  },
  get (params) {
    return http.post('/api/roles', params);
  },
  // 获取订单接口
  getOrder (params) {
    return http.get('/api/orders/findAllOrders', params);
  },
  // 装箱列表查询
  queryBox (params) {
    return http.get('/api/purchase/packdetails/queryallPackDetails', params);
  },
  // 装箱列表添加
  addBox (params) {
    return http.post('/api/purchase/packdetails/add', params);
  },
  // 装箱列表编辑
  editBox (params) {
    return http.put('/api/purchase/packdetails/update', params);
  },
  // 装箱列表箱子组件编辑
  editBoxBom (params) {
    return http.put('/api/purchase/prepack/update', params);
  },
  // 箱子的bom
  queryBomDetailByPackId (params) {
    // return http.get('/api/purchase/prepack/queryBomDetailByPackId',params);
    return http.get('/api/purchase/prepack/queryallbom', params);
  },
  // 获取未挂载bom
  queryallRemainBom (params) {
    return http.get('/api/purchase/prepack/queryallRemainBom', params);
  },
  /**
   * 获取bom列表对应的炉号
   * @param  {[type]} options.projectId     项目id
   * @param  {[type]} options.supplierId    供应商id
   * @param  {[type]} options.orderCode     订单号
   * @param  {[type]} options.orderLineCode 订单行号
   */
  queryAllRemainBomFurnaceNumber ({projectId,supplierId,orderCode,orderLineCode}) {
    return http.get('/api/purchase/prepack/queryAllRemainBomFurnaceNumber', {
      projectId,
      supplierId,
      orderCode,
      orderLineCode
    });
  },
  // 给箱子挂载dom
  addBomForBox (params) {
    return http.put('/api/purchase/prepack/add', params);
  },
  // 删除箱子挂载的dom
  delBomForBox (params) {
    return http.put('/api/purchase/prepack/remove', params);
  },
  /**
   * 删除箱子
   * @param  {string} options.id 箱子id
   */
  deleteBox ({id}) {
    return http.delete('/api/purchase/packdetails/deleteBox', {
      id
    });
  },
  // 拉取用户信息
  buildMenus (params) {
    return http.get('/api/menus/buildMenus');
  },
  // 删除批次挂载的箱子
  delboxForBench (params) {
    return http.delete('/api/purchase/packdetails/delete', params);
  },

//项目成员管理start.....................................
  //获取所有项目
  getProList(params) {
    return http.get('/api/project/findProjects', params);
  },
  //给项目添加成员
  addProjectMember(params) {
    return http.post('/api/projectMemeber/addProjectMember', params);
  },
  /**
   * 给新项目添加成员
   * @param {string} options.projectId   项目id
   * @param {string} options.memeberType 人员类型
   * @param {string} options.userId      用户id
   */
  addProjectAndMember({projectId,memeberType,userId}) {
    return http.post('/api/projectMemeber/addProjectAndMember', {
      projectId,
      memeberType,
      userId
    });
  },
  //查询所有用户
  findUsers(params) {
    return http.get('/api/users/findUsers', params);
  },
  //获取项目成员类型
  findProjectMemberType(params) {
    return http.get('/api/dict/findProjectMemberType', params);
  },
   //删除项目人员
   delProPerson(params) {
    return http.deletes('/api/projectMemeber', params);
  },
   //查询项目当前成员
  findProjectMembers(params) {
    return http.get('/api/projectMemeber/findProjectMembers', params);
  },

//生产进度模板管理start...................................
 //添加生产进度模板管理数据
 addProcedureProcessTemplateData(params) {
  return http.post('/api/production/addProcedureProcessTemplateData', params);
 },
 //删除生产进度模板管理数据
 deleteProcedureProcessTemplate(params) {
  return http.deletes('/api/production/deleteProcedureProcessTemplate', params);
 },
 //查询生产进度模板管理数据
 queryProcedureProcessTemplateData(params) {
  return http.get('/api/production/queryProcedureProcessTemplateDataPage', params);
 },
 //修改生产进度模板管理
 updateProcedureProcessTemplate(params) {
  return http.put('/api/production/updateProcedureProcessTemplate', params);
 },
 //查询生产进度模板工序信息数据
 queryProcedureProcessTemplateProcedureData(params) {
  return http.get('/api/production/queryProcedureProcessTemplateProcedureData', params);
 },
  //获取物料组
  getMaterialsGroup(params) {
    return http.get('/api/materialsGroup/getMaterialsGroup', params);
  },

//项目列表start........................................
  //获取项目类型
  findProjectType(params) {
    return http.get('/api/project/findProjectType', params);
  },
  //获取项目列表
  findProjectPage(params) {
    return http.get('/api/project/findProjectPage', params);
  },
  //通过项目ID,获取项目基本信息
  findProjectById(params) {
    return http.get('/api/project/findProjectById', params);
  },
  //通过项目ID,获取项目相关订单信息
  findByProjectId(params) {
    return http.get('/api/orders/findByProjectId', params);
  },

//物料组质检科对应关系start........................................
 //添加物料组质检科对应关系信息
 addMaterialsQuality(params) {
    return http.post('/api/materialsQuality/addMaterialsQuality', params);
  },
 //物料组质检科对应关系删除
 deleteMaterialsQuality(params) {
  return http.deletes('/api/materialsQuality/deleteMaterialsQuality', params);
 },
 //获取物料组质检科对应关系信息分页
 getMaterialsQualityPage(params) {
  return http.get('/api/materialsQuality/getMaterialsQualityPage', params);
 },
 //物料组质检科对应关系修改
 updateMaterialsQuality(params) {
  return http.put('/api/materialsQuality/updateMaterialsQuality', params);
 },
  //获取质检部门数据
  dept() {
    return http.get('/api/dept/queryquality');
   },
//数据同步start........................................
  //sap
  syncSap(params) {
  return http.get('/api/sap/orders', params);
  },
  //项目
  syncPro(params) {
   return http.get('/api/sap/projects', params);
  },
  //供应商
  syncSup(params) {
    return http.get('/api/sap/suppliers', params);
  },
  //项目里程碑数据同步
  sapPullWorkProcess(params) {
    return http.get('/api/sap/sapPullWorkProcess', params);
  },
//施工工序管理.................................
  //导入施工计划书
  constructionCode(params) {
    return http.post('/api/construction/upload/constructionCode', params);
  },
  /**
   * 查询预览数据
   * @param  {string} options.parentId 父节点id（一级传 '0'）
   */
  codeList({parentId}) {
    return http.get('/api/construction/codeList',{
      parentId
    });
  },
  //清空
  deleteCode() {
    return http.post('/api/construction/deleteCode');
  },
//质检工作台.....................................
 //查询质检订单行
 orderRowProduceQualityInspection(params) {
  return http.get('/api/roduceQualityInspection/orderRowProduceQualityInspection', params);
 },
//修改生产质检管理
updateProduceQualityInspection(params) {
  return http.post('/api/roduceQualityInspection/updateProduceQualityInspection', params);
},
//添加生产质检管理
addFirstWorkProcedureInfos(params) {
  return http.post('/api/roduceQualityInspection/addFirstWorkProcedureInfo', params);
},
//删除生产质检管
deleteProduceQualityInspection(params) {
  return http.deletes('/api/roduceQualityInspection/deleteProduceQualityInspection', params);
},
//编辑控制节点
updateProduceQualityInspectionBatch(params) {
  return http.post('/api/roduceQualityInspection/updateProduceQualityInspectionBatch', params);
},
//查询订单下拉框
findOrderCodes(params) {
  return http.get('/api/orders/findCheckOrderCodes', params);
},
//施工工作台....................................................
//导入修改
uploadUpdate(params) {
  return http.post('/api/construction/upload/construction', params);
},
//导出修改
downloadUpdate(params) {
  return http.down('/api/construction/download/constructionPlan', params);
},
//里程碑填写
milestone(params) {
  return http.post('/api/construction/update/milestone', params);
},
//查询里程碑列表
milestoneList(params) {
  return http.get('/api/construction/milestoneList', params);
},
//删除已上传图片
delHistoryImg(params) {
  return http.delete('api/minio/deleteAll', params);
},
//报表........................................
//施工工期对比表
queryprogressreport(params) {
  return http.get('/api/construction/report/queryprogressreport', params);
},
//施工机具信息
queryConstructionMachines(params) {
  return http.get('/api/construction/report/queryConstructionMachines', params);
},
//施工人员信息表
queryConstructionWorkers(params) {
  return http.get('/api/construction/report/queryConstructionWorkers', params);
},
//里程碑工期对比表
querymilestonereport(params) {
  return http.get('/api/construction/report/querymilestonereport', params);
},
//提醒........................................
//提醒质检员
remindQualityInspector(params) {
  return http.get('/api/materialQualityCheckDetails/remindQualityInspector', params);
},
//提醒质检科长
remindQualitySectionChief(params) {
  return http.get('/api/materialQualityCheckDetails/remindQualitySectionChief', params);
},
//提醒供应商
remindSuppliers(params) {
  return http.get('/api/materialQualityCheckDetails/remindSuppliers', params);
},



  // zjh start
  // 查询
  toSearch (params) {
    return http.get('/api/roles', params);
  },
  toSearch1 (params) {
    return http.get('/api/users', params);
  },
  toSearch2 (params) {
    return http.get('/api/dept', params);
  },
  // 导出BOM清单
  download (params) {
    return http.down('/api/orders/download', params);
  },
  // 导入发货级BOM清单
  orderUpload (params) {
    return http.post('/api/orders/upload', params);
  },
  // 导入装箱清单
  uploadBox (params) {
    return http.post('/api/purchase/prepack/upload', params);
  },
  // 根据条件显示对应的Bom列表(订单号或订单行号)
  searchBoxlist (params) {
    return http.post('/api/orders/findAllBomsByCriteria', params);
  },
  // 获取项目名称列表
  findAllProject () {
    return http.get('/api/project/findAll');
  },
  // 获取供应商名称列表
  findAllSuppiler () {
    return http.get('/api/supplier/findAll');
  },
  // 质检工作台获取供应商名称列表
  findCheckAll () {
    return http.get('/api/supplier/findCheckAll');
  },
  //质检工作台获取项目名称列表
  getCheckProjectBySupplierId (params) {
    return http.get('/api/supplier/getCheckProjectBySupplierId',params);
  },
  // 打印二维码
  printErweMa (params) {
    return http.get('api/qrCode/printQRCode', params);
  },
  // 拉取BOM信息
  getBomfromSap (params) {
    return http.get('api/sap/boms', params);
  },
  findAllProjectSupplier () {
    return http.get('api/orders/getRelation');
  },
  //基础数据
  //---初始化或条件查询订单列表
   queryOrderList(params){
       return http.get('api/orders/findOrderRowsContainPurchase',params)
  },
   //---初始化或条件查询供应商列表
  querySuppilerListData(params){
       return  http.get('/api/supplier/allPage',params)
  },
  /**
   *  @param {string} orderRowId 订单行id
   * @return {object} 暂时不要了
   */
  // queryRawMaterialListData({orderRowId,pageNum,pageSize}){
  //   return http.get('/api/roduceQualityInspection/allPage',{orderRowId,pageNum,
  //     pageSize})
  // },
   /**
   *  @param {string} orderRowId 订单行id
   * @return {object} 订单详情页之生产质检
   */
  queryProducQualityInspListData({orderRowId}){
    return http.get('/api/roduceQualityInspection/allPage',{orderRowId})
  },
//原料质检列表
  queryRawMateriaData({supplierId,projectId}){
    return http.get('/api/rawMaterialQualityCheck/findByProjectId',{supplierId,projectId})
  },
  //订单行角色分配的下拉框数据
  distributionUser(){
         return http.get('/api/orders/findAssignOrderPerson')
    },

  //保存分配
  addDistributionUserIdToOrderList({orderRowIdList,userId}){
    return http.post('/api/orders/assignOrder',{orderRowIdList,userId})
  },
  /**
     * 基础数据修改计划到货日期
     */
    updatePlannedArrivalDate({orderRowIds}){
        return http.post('/api/orders/updateDataChangeIndicator',{orderRowIds})
  },
  /**
   * 质检工作台
   * @param {*} params
   */

    //---原材料质检导入
    uploadExcelFile(params){
      return http.post('/api/materialQualityCheckDetails/analysisMaterialQualityTemplateData',params)
    },
    //根据供应商返回对应的项目列表
    relationSupplierAndProject({supplierId}){
      return http.get('/api/supplier/getProjectBySupplierId',{supplierId})
    },
    /**
     * 原料质检订单行详情提醒供应商
     */
    remindSupplier({orderRowId,remainOrderStatus}){
      return http.post('/api/orders/purchasesRemainOrder?orderRowId=',{orderRowId,remainOrderStatus})
    },
    /**
     *
     * @param {*} params
     */
    updateRawMateriaData({projectId}){
      return http.post('/api/rawMaterialQualityCheck/addRawMaterialQualityCheckVo',{projectId})
    },
    /**
     * 施工日志
     * 列表数据查询
     * @param {projectId,process,author}
     */
    queryLogListData(params){
      return http.get('/api/construction/queryConstructionLog',params)
    },
    //日志详情页
    queryLogDetailData(params){
        return http.get('/api/construction/queryConstructionLogDetail',params)
    },
    /**
     *
     * @param {*} param0
     * 日志进来查进度
     */
    getConstructionPlan(params){
      return http.get('/api/construction/selectConstructionPlanByProjectId',params)
    },
    //追加生成id
    addAgainMechanical({machineName,machineType}){
      return http.post('/api/construction/addConstMachineParam',{machineName,machineType})
    },
    /**
     * 施工日志
     * 项目基本信息
     * @param {projectId} params
     */
    getProjectInfo(params){
      return http.get('/api/project/findProjectById',params)
    },
    /**
     * 施工日志
     * 施工机械下拉框
     * @param {*} params
     */
    mechanicalSelect(){
        return http.get('/api/construction/constMachineSelect')
    },
    /**
     * 根据机械名称查施工机械类型
     */
    getMechanicalType({name}){
      return http.get('/api/construction/constMachineSelectSecond',{name})
    },
    /**
     * 施工日志
     * 施工人员下拉框
     */
    personSelect(){
      return http.get('/api/construction/constManSelect')
    },
    /**
     * 提交日志
     */

    sumbitProgressAndLog(params){
      return http.post('/api/construction/addConstructionLog',params)
    },

     /**
     * 原材料不合格列表
     * @param {*} params 
     */
    findRawMaterialList(params){
      return http.post('/api/qualityReportController/findRawMaterialsUnQualityReport',params)
},
 /**
 * 获取人员工作量报表
 * @param {*} params 
 */
findPerMonthlyWorkloadReportList(params){
  return http.post('/api/qualityReportController/findPeopleWorkloadReport',params)
},
 /**
 * 获取特殊质量控制节点报表
 * @param {*} params 
 */
findSpecialQualityControlReportList(params){
  return http.post('/api/qualityReportController/findSpecialQualityControlNodeReport',params)
},


  // zjh end

  /**
     * 打印箱件二维码
     * @param  {Array}  options.ids           箱子id列表
     * @return {Object}
     */
  printDetailQRCode (params) {
    return http.post('/api/qrCode/printDetailQRCode', params);
  },
  /**
   * 查询当前用户所有的项目
   * @param  {string} options.name     项目名称
   * @param  {[number]} options.pageNum  页码，默认 0
   * @param  {[number]} options.pageSize 每页条数，默认 10
   * @return {object}
   */
  findProjectsByLogin({name,pageNum,pageSize}){
    return http.get('/api/project/findProjectsByLogin', {
      name,
      pageNum,
      pageSize
    });
  },
  /**
   * 查看工序历史记录
   * @param  {string} options.orderRowId 订单行id
   */
  getProcedureProcessHistory({orderRowId}){
    return http.get('/api/production/getProcedureProcessHistory', {
      orderRowId
    });
  },
  /**
   * 配置工序修改/新增/删除
   * @param {string} orderRowId 订单行id
   * @param {array} procedureProcessVo 新工序信息
   * @param {string} procedureProcessVo[0].id 新工序id
   * @param {string} procedureProcessVo[0].orderRowId 所属订单行的id
   * @param {string} procedureProcessVo[0].planTime 计划完成时间
   * @param {string} procedureProcessVo[0].procedureName 工序名称
   */
  addFirstWorkProcedureInfo({orderRowId,procedureProcessVoList}){
    // console.log('procedureProcessVo',procedureProcessVo);
    return http.post('/api/production/addFirstWorkProcedureInfo', {
      orderRowId,
      procedureProcessVoList
    });
  },
  /**
   * 获取订单行对应的一级生产工序信息
   * @param {string} orderRowId 订单行id
   */
  getFirstWorkProcedureInfo({orderRowId}){
    return http.get('/api/production/getFirstWorkProcedureInfo', {
      orderRowId
    });
  },
  /**
   * 根据项目id，订单号，供应商id，进度是否延迟查询订单行
   * @param  {string} options.orderCode         订单号
   * @param  {[boolean]} options.progressIsDelayed 是否延迟
   * @param  {[string]} options.projectId         项目id
   * @param  {[string]} options.supplierId        供应商id
   * @return {object}
   */
  findOrderRowsByCriteria({orderCode,progressIsDelayed,projectId,supplierId}){
    return http.get('/api/orders/findOrderRowsByCriteria', {
      orderCode,
      progressIsDelayed,
      projectId,
      supplierId
    });
  },
  /**
   * 获取移动端app下载二维码（安卓）
   * @return {string} base64图片编码
   */
  findApkImage(){
    return http.get('/api/moblie/findApkImage?type=&width=300&heigt=300');
  },
  /**
   * 获取订单行对应的所有生产工序信息
   * @param  {string} options.orderRowId 订单行id
   * @return {object}
   */
  getWorkProcedureInfo({orderRowId}){
    return http.get('/api/production/getWorkProcedureInfo', {
      orderRowId
    });
  },
  /**
   * 提报信息&手动添加工序
   * @param {string} options.parentId      一级工序id
   * @param {string} options.procedureName 新工序名称
   * @param {string} options.progress      新工序当前进度
   * @param {string} options.finishTime    提报时间
   * @param {string} options.imagePath     图片地址+文件地址（分号隔开）
   * @param {string} options.orderRowId    订单行id
   */
  addProcedureProcessInfo({parentId,procedureName,progress,finishTime,imagePath,orderRowId}){
    return http.post('/api/production/addProcedureProcessInfo', {
      parentId,
      procedureName,
      progress,
      finishTime,
      imagePath,
      orderRowId,
      status:'0' //提报工序固定传参
    });
  },
  /**
   * 更新订单工序的油漆包装、发货、收货、的生产工序进度
   * @param  {string} options.orderRowId 订单行id
   * @return {object}
   */
  updateWorkProcedureProcess({orderRowId}){
    return http.put('/api/production/updateWorkProcedureProcess', {
      orderRowId
    });
  },
  /**
   * 是否质检修改接口
   * @param  {string} options.orderRowNum       id
   * @param  {string} options.qualityInspection 是否需要质检(0：是,1：否)
   */
  updateProductionInfo({orderRowNum,qualityInspection}){
    return http.put('/api/production/updateProductionInfo', {
      orderRowNum,
      qualityInspection
    });
  },
  /**
   * 提醒供应商
   * @param  {string} options.id       订单行id
   */
  addWarningOrder({id}){
    return http.post('/api/orders/addWarningOrder', {
      id
    });
  },
  /**
   * 查询需要提醒的订单
   */
  getWarningOrder(){
    return http.post('/api/orders/getWarningOrder');
  },
  /**
   * 查询所有的材料证明
   * @param  {[number]} options.pageNum  每页显示条数
   * @param  {[number]} options.pageSize 页数
   * @param  {string} options.materialsEvidence  物料凭证
   * @param  {string} options.status  审批状态
   * @return {object}
   */
  queryAllMaterialsEvidence({pageNum,pageSize,materialsEvidence,status}){
    return http.get('/api/materialsEvidence/queryAllMaterialsEvidence',{
      pageNum,
      pageSize,
      materialsEvidence,
      status
    });
  },
  /**
   * 查询所有的材料证明
   * @param  {[number]} options.pageNum  每页显示条数
   * @param  {[number]} options.pageSize 页数
   * @param  {string} options.materialsEvidence  物料凭证
   * @param  {string} options.status  审批状态
   * @return {object}
   */
  queryMaterialsEvidenceById({id}){
    return http.get('/api/materialsEvidence/queryMaterialsEvidenceById',{
      id
    });
  },
  /**
   * 修改点收信息
   * @param  {string} options.id               材料证明id
   * @param  {string} options.modifyTotalNum   修改后实际点收数量
   * @param  {string} options.modifyTotalWight 修改后的重量
   */
  updateMaterialsEvidence({id,modifyTotalNum,modifyTotalWight}){
    return http.put('/api/materialsEvidence/updateMaterialsEvidence',{
      id,
      modifyTotalNum,
      modifyTotalWight
    });
  },
  /**
   * 发送数据到sap
   * @param  {id} options.id  材料证明id
   */
  sendToSap({id}){
    return http.get('/api/receive/sendToSap',{
      id
    });
  },
  /**
   * 批量修改订单计划交货日期
   * @param  {array} options.ids      要修改的订单id列表
   * @param  {string} options.planDate 计划交货日期时间戳
   */
  batchUpdateOrderPlanDate({ids,planDate}){
    return http.post('/api/orders/batchUpdateOrderPlanDate',{
      ids,
      planDate
    });
  },
  /**
   * 获取项目对应供应商
   * @param  {array} options.projectIds 项目id数组
   */
  getSupplierByProjects({projectIds}){
    return http.post('/api/supplier/getSupplierByProjects',{
      projectIds
    });
  },
  /**
   * 根据项目id查询施工计划详细信息
   * @param  {string} options.constructionName 施工名称
   * @param  {string} options.parentId 项目id
   * @param  {string} options.projectId 项目id
   * @param  {number} options.pageNum   页数
   * @param  {number} options.pageSize  每页显示条数
   * @param  {number} options.constructionPlanId  计划id(一级节点传'',其他级节点传上级节点的 constructionPlanId)
   */
  queryConstructionPlan({constructionName,parentId,projectId,pageNum,pageSize,constructionPlanId}){
    return http.get('/api/construction/queryConstructionPlan',{
      constructionName,
      parentId,
      projectId,
      pageNum,
      pageSize,
      constructionPlanId
    });
  },
  /**
   * 施工-节点名称搜索
   * @param  {string} options.constructionName 节点名称
   * @param  {string} options.parentId 父节点id(一级节点传0，其他的取 constructionPlanId)
   * @param  {string} options.projectId 项目id
   */
  queryConstructionPlanByName({constructionName,parentId,projectId}){
    return http.get('/api/construction/queryConstructionPlanByName',{
      constructionName,
      parentId,
      projectId
    });
  },
  /**
   * 施工-新增施工计划
   * @param  {string} options.projectId 项目id
   * @param  {string} options.parentId 父节点id(一级节点传0，其他的取 constructionPlanId)
   * @param  {string} options.constructionName 施工名称
   * @param  {string} options.startDate 开始时间
   * @param  {string} options.endDate 结束时间
   */
  saveConstructionPlan({projectId,parentId,constructionName,startDate,endDate}){
    return http.post('/api/construction/saveConstructionPlan',{
      projectId,
      parentId,
      constructionName,
      startDate,
      endDate
    });
  },
  /**
   * 施工-根据id删除工序
   * @param  {string} options.ids 节点id数组
   * @param  {string} options.projectId 项目id
   */
  deleteConstructionPlanById({ids,projectId}){
    return http.post('/api/construction/deleteConstructionPlanById',{
      ids,
      projectId
    });
  },
  /**
   * 施工节点提报
   * @param  {string} options.constructionPlanId 父节点id(一级节点传0，其他的取 constructionPlanId)
   * @param  {string} options.projectId          项目id
   * @param  {string} options.reportName         提报名称
   * @param  {string} options.completion         提报进度
   */
  saveConstructionPlanReport({constructionPlanId,projectId,reportName,completion}){
    return http.post('/api/construction/saveConstructionPlanReport',{
      constructionPlanId,
      projectId,
      reportName,
      completion
    });
  },
  /**
   * 施工-编辑
   * @param  {string} options.parentId 父节点id
   * @param  {string} options.projectId 项目id
   * @param  {string} options.id 当前行信息序号id
   * @param  {string} options.constructionName 施工名称
   * @param  {string} options.startDate 计划开始时间
   * @param  {string} options.endDate   计划完成时间
   */
  updateConstructionPlan({parentId,projectId,id,constructionName,startDate,endDate}){
    return http.post('/api/construction/updateConstructionPlan',{
      parentId,
      projectId,
      id,
      constructionName,
      startDate,
      endDate
    });
  },
  /**
   * 选择施工节点后调用
   * @param {array} options.ids       选择的施工节点id数组
   * @param {string} options.projectId 项目id
   */
  addConstructionPlan({ids,projectId}){
    return http.post('/api/construction/addConstructionPlan',{
      ids,
      projectId
    });
  },
  /**
   * 报表-生产-交货进度表
   * @param  {number} options.size          每页显示多少条数据
   * @param  {number} options.current       当前页数
   * @param  {string} options.projectId     项目id
   * @param  {string} options.supplierCode    供应商id
   * @param  {string} options.orderLineCode 订单行号
   * @param  {string} options.orderCode     订单号
   */
  queryOrderStatisticsList({size,current,projectId,supplierCode,orderLineCode,orderCode}) {
    return http.post('/api/produce/statistics/orderStatisticsList', {
      size,
      current,
      projectId,
      supplierCode,
      orderLineCode,
      orderCode
    });
  },
  /**
   * 报表-生产-发货bom清单表
   * @param  {number} options.size          每页显示多少条数据
   * @param  {number} options.current       当前页数
   * @param  {string} options.projectId     项目id
   * @param  {string} options.supplierCode    供应商id
   * @param  {string} options.orderLineCode 订单行号
   * @param  {string} options.orderCode     订单号
   */
  queryBomStatisticsList({size,current,projectId,supplierCode,orderLineCode,orderCode}) {
    return http.post('/api/produce/statistics/bomStatisticsList', {
      size,
      current,
      projectId,
      supplierCode,
      orderLineCode,
      orderCode
    });
  },
  /**
   * 报表-生产-箱子组件表
   * @param  {number} options.size          每页显示多少条数据
   * @param  {number} options.current       当前页数
   * @param  {string} options.projectId     项目id
   * @param  {string} options.supplierCode    供应商id
   * @param  {string} options.orderLineCode 订单行号
   * @param  {string} options.orderCode     订单号
   */
  queryPbomStatisticsList({size,current,projectId,supplierCode,orderLineCode,orderCode}) {
    return http.post('/api/produce/statistics/pBomStatisticsList', {
      size,
      current,
      projectId,
      supplierCode,
      orderLineCode,
      orderCode
    });
  },
  /**
   * 报表-生产-箱子列表
   * @param  {number} options.size          每页显示多少条数据
   * @param  {number} options.current       当前页数
   * @param  {string} options.projectId     项目id
   * @param  {string} options.supplierCode    供应商id
   * @param  {string} options.orderLineCode 订单行号
   * @param  {string} options.orderCode     订单号
   */
  queryPackStatisticsList({size,current,projectId,supplierCode,orderLineCode,orderCode}) {
    return http.post('/api/produce/statistics/packStatisticsList', {
      size,
      current,
      projectId,
      supplierCode,
      orderLineCode,
      orderCode
    });
  },
  /**
   * 报表-生产-交货批次表
   * @param  {number} options.size          每页显示多少条数据
   * @param  {number} options.current       当前页数
   * @param  {string} options.projectId     项目id
   * @param  {string} options.supplierCode    供应商id
   * @param  {string} options.orderLineCode 订单行号
   * @param  {string} options.orderCode     订单号
   */
  queryBatchStatisticsList({size,current,projectId,supplierCode,orderLineCode,orderCode}) {
    return http.post('/api/produce/statistics/batchStatisticsList', {
      size,
      current,
      projectId,
      supplierCode,
      orderLineCode,
      orderCode
    });
  },
  /**
   * 施工-导出表格数据
   * @param  {string} routerName 路由名称(导出的后台接口按照 routerName 进行区分)
   * @param  {object} queryParam 请求参数
   */
  exportReport(routerName,queryParam={}){
    let exportUrl = exportConfig[routerName];
    //导出接口调用
    return http.post(exportUrl,queryParam,'blob');
  },
  /*施工导出功能配置*/

  /*质检工作台-生产检查列表*/
  /**
   * 提醒质检员
   * @param  {string} projectName 项目名称
   * @param  {string} orderRowId  订单行id
   */
  remindQualityProduceInspector({projectName,orderRowId}){
    return http.get('/api/roduceQualityInspection/remindQualityProduceInspector', {
      projectName,
      orderRowId
    })
  },
  /**
   * 提醒科长
   * @param  {string} projectName 项目名称
   * @param  {string} orderRowId  订单行id
   */
  remindQualityProduceSectionChief({projectName,orderRowId}){
    return http.get('/api/roduceQualityInspection/remindQualityProduceSectionChief', {
      projectName,
      orderRowId
    })
  },
  /**
   * 提醒供应商
   * @param  {string} projectName 项目名称
   * @param  {string} orderRowId  订单行id
   */
  remindQualityProduceSuppliers({projectName,supplierId}){
    return http.get('/api/roduceQualityInspection/remindQualityProduceSuppliers', {
      supplierId,
      projectName
    })
  }
  /*质检工作台-生产检查列表*/
};

export default server;
