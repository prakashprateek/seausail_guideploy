"use strict";(self.webpackChunkseausailgui=self.webpackChunkseausailgui||[]).push([[693],{7693:(Z,m,s)=>{s.r(m),s.d(m,{UsermasterModule:()=>a});var n=s(6895),c=s(606),e=s(1571),u=s(8386),l=s(4333);function h(o,t){if(1&o){const r=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"a",6),e.NdJ("click",function(){const d=e.CHM(r).$implicit,C=e.oxw();return e.KtG(C.onEditClick(d))}),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA()()}if(2&o){const r=t.$implicit;e.xp6(3),e.Oqu(r.UserName),e.xp6(2),e.Oqu(r.FirstName),e.xp6(2),e.Oqu(r.LastName),e.xp6(2),e.Oqu(r.EmailId),e.xp6(2),e.Oqu(r.UserType)}}function P(o,t){1&o&&(e.TgZ(0,"span",7),e._uU(1," No Record Found..."),e.qZA())}function T(o,t){if(1&o){const r=e.EpF();e.TgZ(0,"pagination-controls",8),e.NdJ("pageChange",function(p){e.CHM(r);const d=e.oxw();return e.KtG(d.pageChangeEvent(p))}),e.qZA()}}const f=function(o,t,r){return{itemsPerPage:o,currentPage:t,totalItems:r}};class i{constructor(t,r,g){this._route=t,this._router=r,this._userService=g,this.users=[],this.submitted=!1,this.p=1,this.total=0,this.itemsPerPage=10,this.mSearchParamList={SearchCol:"",SearchType:"",SearchVal:""},this.mGridPaginationData={TotalRecord:0,RecordFrom:0,RecordTo:0,TotalPageCount:0},this.mGridViewProps={PageNumber:1,StartRecord:1,EndRecord:10,RecordPerPage:this.itemsPerPage,SortCol:"UserID",SortOrder:"asc",RequireRowCount:"Y",SearchParamList:[]}}ngOnInit(){this.getUsers()}onEditClick(t){}getUsers(){this._userService.GetUserMasterView(this.mGridViewProps).subscribe(t=>{t.hasOwnProperty("Table")&&t.Table.length>0&&(this.users=t.Table),t.hasOwnProperty("Table1")&&t.Table1.length>0&&(this.total=t.Table1[0].TotalRecord,this.mGridPaginationData.TotalRecord=t.Table1[0].TotalRecord,this.mGridPaginationData.RecordFrom=t.Table1[0].RecordFrom,this.mGridPaginationData.RecordTo=t.Table1[0].RecordTo,this.mGridPaginationData.TotalPageCount=t.Table1[0].TotalPageCount)})}pageChangeEvent(t){this.p=t,this.mGridViewProps.PageNumber=this.p,this.mGridViewProps.StartRecord=this.mGridViewProps.RecordPerPage*(this.mGridViewProps.PageNumber-1)+1,this.mGridViewProps.EndRecord=this.mGridViewProps.PageNumber==this.mGridPaginationData.TotalPageCount?this.mGridPaginationData.TotalRecord:this.mGridViewProps.StartRecord+this.mGridViewProps.RecordPerPage-1,this.getUsers()}}i.\u0275fac=function(t){return new(t||i)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(u.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-usermaster"]],decls:20,vars:10,consts:[[2,"max-width","1000px","margin","auto"],[1,"popup-title"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[3,"pageChange",4,"ngIf"],[1,"URLLink",3,"click"],[1,"text-danger"],[3,"pageChange"]],template:function(t,r){1&t&&(e.ynx(0),e.TgZ(1,"div",0)(2,"h5",1),e._uU(3," User Master "),e.qZA(),e.TgZ(4,"table",2)(5,"tr")(6,"th"),e._uU(7,"User Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"First Name"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Last Name"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Email Id"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"User Type"),e.qZA()(),e.YNc(16,h,12,5,"tr",3),e.ALo(17,"paginate"),e.YNc(18,P,2,0,"span",4),e.qZA(),e.YNc(19,T,1,0,"pagination-controls",5),e.qZA(),e.BQk()),2&t&&(e.xp6(16),e.Q6J("ngForOf",e.xi3(17,3,r.users,e.kEZ(6,f,r.itemsPerPage,r.p,r.total))),e.xp6(2),e.Q6J("ngIf",0==r.users.length),e.xp6(1),e.Q6J("ngIf",r.users.length>0))},dependencies:[n.sg,n.O5,l.LS,l._s],styles:[".text-danger{color:#dc3545!important}.URLLink{cursor:pointer;text-decoration:underline;color:#00f}table,th,td{border:1px solid grey;border-collapse:collapse;padding:5px}table tr:nth-child(odd){background-color:#f1f1f1}table tr:nth-child(even){background-color:#fff}.error_msg{display:block}\n"],encapsulation:2});const U=[{path:"",component:i}];class a{}a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[n.ez,c.Bz.forChild(U),l.JX]})}}]);