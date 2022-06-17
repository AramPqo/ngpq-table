"use strict";(self.webpackChunkdata_table_last=self.webpackChunkdata_table_last||[]).push([[252],{1252:(w,l,s)=>{s.r(l),s.d(l,{DocumentationModule:()=>x}),s(4278),s(4387);const u={requiredData:[{input:"data",type:"Array<any>",description:{template:'\n          Basic data that is displayed in the table (Works both sync. and async).\n          What we see in table is dependent on data structure, \n          If there is no template <a class="link"s link="github/datatemplate"> template </a> \n          then table view will show corresponding value;\n          It is also possible to show in the table view <a class="link"s link="github/customComponent"> custom component </a> created by you.\n          <a href="/" target="_blanck" class="link">Example.</a>\n          '}},{input:"settings",type:"{ [key: string]: Settings; }",description:{template:'\n        <span class="info"> Settings provide Table Cells: </span> Width, class name, <a link="form" class="link" link="form">form</a> , disable sorting, disable filtering, Render custom Component\n        It provides each column.\n        More info. about <a link="settings" class="link"> Settings. </a>\n        '}}],optionalData:[{input:"filterOptions",type:"FilterOption",description:{template:'\n        Filter does not work without this input. This is used to customize option of filter. You can see an \n        <a href="https://github.com/AramPqo/ngpq-table/blob/master/src/app/example/example.component.ts#L66" target="_blanck" class="link"> example here </a>\n        '}},{input:"pageSizeOptions",type:"Array<number | string>",description:"Provides the count of rows in the table."},{input:"actions",type:"Array<Action>",description:{template:'\n        There are 2 embedded actions: create and update.\n        For create and update it is required to use corresponding <span class="code">isCreate</span> and <span class="code">isUpdate</span> bolleans;\n        More info. about <a link="actions" class="link"> Actions. </a>\n        '}},{input:"selectActions",type:"Array<SelectAction>",description:{template:'\n        It is for multiple rows. You can get the <a link="selectActionEvent" class="link">SelectActionEvent</a> by clicking on the dropdown on the left.\n        More info. about <a link="selectActions" class="link"> Select Actions. </a>\n        '}},{input:"paginatorSize",type:"number",description:{template:'\n          Maximum amount of paginator items. <span class="type-content"> Default 6.<span>\n        '}},{input:"disableResize",type:"boolean",description:"Disable Resizing."},{input:"disablePaginate",type:"boolean",description:"Disable Paginate."},{input:"scrollToTop",type:"boolean",description:"It scrolls up, when there is an action going on below."},{input:"detailsTemplate",type:"TemplateRef<any>",description:{template:'\n          The <span class="type-content"> TemplateRef&lt;any&gt </span>\n          type input should be provide it, after click on the row it will open like accordeon\n          and your template will be in it.\n          <a href="github/" target="_blanck" class="link">Example</a>.\n        '}},{input:"title",type:"Title",description:"\n        Column title\n        "},{input:"width",type:"Width",description:"\n        Column width (px or %)\n        "},{input:"className",type:"className",description:"\n       Column class\n      "},{input:"disableSort",type:"boolean",description:"Disable Sort"},{input:"disableFilter",type:"boolean",description:"Disable Filter"}],outputData:[]},m={requiredData:[{input:"title",type:"string",description:"\n        Column title\n        "}],optionalData:[{input:"width",type:"string",description:"\n        Column width ('em, rem, pt, cm, px' or %)\n        "},{input:"className",type:"string",description:"\n       Column class\n      "},{input:"disableSort",type:"boolean",description:"Disable Sorting"},{input:"disableFilter",type:"boolean",description:"Disable Filtering"},{input:"renderComponent",type:"any",description:{template:'\n        Component with which you can get current value and show as you want.\n        You can see an <a href="example"> example here </a>\n        '}},{input:"form",type:"SettingsForm",description:{template:'\n        Form propetry is used to have the opportunity embedded <span class="code">create</span> or <span class="code">update</span>.\n        Form propetry can have Error Message, Placeholder, e.t.c. given by you.\n        For more info. you can see an example <a link="form" class="link" link="form">Example</a> \n      '}}]},g={optionalData:[{input:"control",type:"Array<any | Array<Validators>>",description:{template:'\n        <div> Control can be either Array &lt;any&gt; type or Array \n        &lt;<a href="https://angular.io/api/forms/Validators" target="_blanck" class="link">Validators</a>&gt; type. </div>\n        <div> It works like \'ReactiveFormsModule\', but there are some differences. </div>\n        If there is no need for default value the first item should be \'null\',\n        otherwise it will be \'string\' or \'number\' (for boolean and other types we have <span class="info"> type </span> propery).\n        which during the <span class="code"> create </span> set item value in the form as default value.\n        The Second item getting Validators array as in \n        <a href="https://angular.io/guide/form-validation#validating-input-in-reactive-forms" target="_blanck" class="link"> Angular Reactive Forms Validators</a>\n        <br/>\n        <br/>\n        <a href="github/" target="_blanck" class="link">Example</a>\n\n       <span><a href="github/" target="_blanck" class="link"> ReactiveFormsModule</a> </span>.\n        /* { [key: string]: Settings; }\t*/ Please note, key must be the same as a key in data array objects.\n        karas routerlink dnes orinak { [key: string]: <link> Settings </link>; } dnes \n        click anen ed linkin @ngnen Settingsi mej heto noric SettingsForm-in click ani\n        haytnvi SettingsForm-i route-um \n        '}},{input:"type",type:"string",description:"\n        Type is used for haveing checkbox (default false), textarea or select.\n      "},{input:"disabled",type:"boolean",description:"\n        Disables the input.\n      "},{input:"actions",type:"Array<Action>",description:'\n        There are two inline actions: create and update.\n        For inline actions it is required to use (to create) <span class="code">isCreate</span> (to update) <span class="code">isUpdate</span> in the boolean action inputs.\n        '},{input:"placeholder",type:"string",description:"\n       Gives the placeholder.\n      "},{input:"errorMessage",type:"string",description:"\n       Gives the Error Message\n      "}]},h={optionalData:[{input:"byCategory",type:"boolean",description:{template:"\n          Default false. If it is true then the filter works by categories (in selected table cell).\n          If it is false then it gets filtered for all table cells.\n        "}},{input:"pure",type:"boolean",description:{template:"\n            Default false, If it is true then it return coresponding items.\n            If it is false then it return simillar items.\n          "}},{input:"typeaheadTime",type:"number",description:{template:'\n            Default 2000ms, (it works only during <span class="code">{byCategory: false}</span> mode)\n            \n            mode-\u056b, \u0586\u056b\u056c\u057f\u0580\u0561\u0581\u0576\u0565\u056c\u0578\u0582-search-\u056b \u056a\u0561\u0574\u0561\u0576\u0561\u056f\u0576 \u0561, \u0574\u056b\u056c\u056b\u057d\u0565\u056f\u0578\u0582\u0576\u0564\u0561\u0576\u0565\u0580\u0578\u057e miliseconds\n          '}},{input:"backlight",type:"boolean",description:{template:'\n          Default false, \u0565\u0580\u0562 \u0578\u0580 true  \u0561 \u056c\u056b\u0576\u0578\u0582\u0574 (\u0578\u0582 \u0565\u0580\u0562 \u0578\u0580 byCategory-\u0576 false \u0561 - \u056f\u0561\u0574 \n          <span class="code">{byCategory: false} mode-\u056b \u056a\u0561\u0574\u0561\u0576\u0561\u056f</span>), \u0567\u0564 \u056a\u0561\u0574\u0561\u0576\u0561\u056f \u057a\u0578\u0564\u0581\u057e\u0565\u057f\u056f\u0561\u0575\u0561 \u057f\u0561\u056c\u056b:D \u0570\u0561\u0574\u0576\u056f\u0561\u056e \u0562\u0561\u0580\u0565\u0568\n          '}}]},b={},y={requiredData:[{input:"key",type:"string",description:"Select action key."},{input:"title",type:"string",description:"Select action title."}]};var f=s(4152),p=s(8583),t=s(639),k=s(4463);function C(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"a",8),t.NdJ("click",function(){const a=t.CHM(e),o=a.$implicit,c=a.index;return t.oxw().initState(o,c)}),t._uU(2),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit,n=r.index,a=t.oxw();t.xp6(1),t.ekj("active",n===a.activeMenuIndex),t.xp6(1),t.Oqu(e.title)}}function v(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"h2",9),t._uU(2),t.qZA(),t.TgZ(3,"h1",10,11),t._uU(5,"Outputs documentation is in progress"),t.qZA(),t.TgZ(6,"ngpq-table",12),t.NdJ("cellClick",function(a){return t.CHM(e),t.oxw().getCellData(a)}),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit,n=t.MAs(4),a=t.oxw();t.xp6(2),t.Oqu(e.title),t.xp6(4),t.Q6J("data",a.state[e.key])("disableSort",!0)("disableResize",!0)("disablePaginate",!0)("noDataWarning",n)("settings","outputData"!==e.key?a.inputSettings:a.outputSettings)}}let M=(()=>{class i{constructor(e){this.injector=e,this.title="Common",this.outputSettings={},this.menu=[{key:"common",title:"Common"},{key:"settings",title:"Settings"},{key:"form",title:"Form"},{key:"selectActions",title:"Select Action"}],this.activeMenuIndex=0,this.headers=[]}ngOnInit(){this.inputSettings=this.createSettings("input"),this.outputSettings=this.createSettings("output"),this.initState(this.menu[0],0)}initState(e,n){this.headers=[],this.state=this.injector.get(e.key),Object.keys(this.state).forEach(a=>{this.headers.push({key:a,title:a.replace(/[A-Z]/g,o=>` ${o.toLowerCase()}`)})}),this.title=e.title,this.activeMenuIndex=n}createSettings(e){const n={};return n[e]={title:e,width:"450px"},Object.assign(n,{type:{title:"Type",className:"type-content",width:"30%"},description:{width:"60%",title:"Description"}}),n}getCellData(e){const n=e.event.target;if(n instanceof HTMLAnchorElement&&n.getAttribute("link")){const a=n.getAttribute("link"),o=this.menu.map((c,d)=>a===c.key?{item:c,index:d}:null).find(c=>c);o&&this.initState(null==o?void 0:o.item,null==o?void 0:o.index)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.zs3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-documentation"]],decls:9,vars:3,consts:[[1,"container","documentation-container"],[1,"text-center","warning"],[1,"menu-container","text-capitalize","d-flex"],["class","cp menu",4,"ngFor","ngForOf"],[1,"table-container"],[1,"text-center","text-capitalize"],[4,"ngFor","ngForOf"],[1,"cp","menu"],[3,"click"],[1,"text-capitalize"],[1,"warning"],["outputInProgress",""],[3,"data","disableSort","disableResize","disablePaginate","noDataWarning","settings","cellClick"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Documentation is is progress!"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,C,3,3,"div",3),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"h2",5),t._uU(7),t.qZA(),t.YNc(8,v,7,7,"div",6),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngForOf",n.menu),t.xp6(3),t.Oqu(n.title),t.xp6(1),t.Q6J("ngForOf",n.headers))},directives:[p.sg,k.Q],styles:[".documentation-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]{background:#cbd1d8;color:#2f7bac}.documentation-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{margin:5px;padding:5px;border-radius:3px;background:transparent}.documentation-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#565656;padding:3px;text-decoration:none}.documentation-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#f6fafd}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table{table-layout:auto!important}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table thead{background-color:transparent!important}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table .tbody-tr td{white-space:inherit!important}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table .tbody-tr td div.td-content{white-space:inherit!important}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table .tbody-tr td div.td-content *{white-space:inherit!important}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table .tbody-tr:hover{background-color:transparent!important}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table tr{cursor:auto}.documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table tr td, .documentation-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]     table tr th{border:1px solid #9a9a9a!important;line-height:1.5;padding:8px!important;font-size:20px}.documentation-container[_ngcontent-%COMP%]     .warning{color:#ffc107}"]}),i})();var O=s(9794);const _=[{path:"",component:M}];let x=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[{provide:"common",useValue:u},{provide:"settings",useValue:m},{provide:"form",useValue:g},{provide:"filterOptions",useValue:h},{provide:"actions",useValue:b},{provide:"selectActions",useValue:y}],imports:[[p.ez,O.Dq,f.Bz.forChild(_)]]}),i})()}}]);