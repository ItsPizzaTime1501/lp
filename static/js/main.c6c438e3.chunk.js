(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){e.exports=a(315)},315:function(e,t,a){"use strict";a.r(t);var r,n=a(0),o=a.n(n),c=a(25),i=a.n(c),l=a(14),s=a(15),u=a(17),h=a(16),d=a(18),p=a(49),m=a.n(p),f=a(21),b=a(72),g=a.n(b),v=a(135),E=a.n(v),w=a(137),y=a.n(w),k=a(34),P=a.n(k),O=a(43),j=a.n(O),x=a(31),C=a.n(x),S=a(88),T=a.n(S),B=a(136),R=a.n(B),D=a(58),_=a.n(D),L=a(29),N=a.n(L),F=a(50),A=a.n(F),I=a(133),q=a.n(I),M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentTab,a=e.handleTabChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{value:t,onChange:a,variant:"scrollable",textColor:"inherit",color:"inherit",indicatorColor:"secondary"},o.a.createElement(A.a,{label:"Single Player"}),o.a.createElement(A.a,{label:"Cooperative"}),o.a.createElement(A.a,{label:"Overall"}),o.a.createElement(A.a,{label:"Records"}),o.a.createElement(A.a,{label:"About"})))}}]),t}(o.a.Component),W=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={open:!1},e.showDrawer=function(t){return function(){e.setState({open:t})}},e.gotoPage=function(t){return function(){window.open(e.homepage+t,"_self")}},e.homepage="https://nekzor.github.io/",e.pageLinks=[{text:"Glitches",link:"glitches.html"},{text:"Least Portals",link:"lp"},{text:"Demo Parser",link:"parser.html"}],e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.currentTab,n=t.onTabChange,c=o.a.createElement("div",{className:a.list},o.a.createElement(j.a,null,o.a.createElement(C.a,{button:!0,key:0,onClick:this.gotoPage(this.homepage+"index.html")},o.a.createElement(T.a,{primary:"nekzor.github.io"}))),o.a.createElement(E.a,null),o.a.createElement(j.a,null,this.pageLinks.map(function(t,a){return o.a.createElement(C.a,{button:!0,key:a,onClick:e.gotoPage("".concat(t.link))},o.a.createElement(T.a,{primary:t.text}))})));return o.a.createElement("div",{className:a.root},o.a.createElement(g.a,{position:"fixed"},o.a.createElement(_.a,null,o.a.createElement(P.a,{onClick:this.showDrawer(!0),className:a.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(R.a,null)),o.a.createElement(N.a,{variant:"h6",color:"inherit"},"Least Portals")),o.a.createElement(M,{currentTab:r,handleTabChange:n})),o.a.createElement(y.a,{open:this.state.open,onClose:this.showDrawer(!1),onOpen:this.showDrawer(!0)},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.showDrawer(!1),onKeyDown:this.showDrawer(!1)},c)))}}]),t}(o.a.Component),U=Object(f.withStyles)(function(e){return{root:{paddingBottom:14*e.spacing.unit},list:{width:25*e.spacing.unit},menuButton:{marginLeft:-12,marginRight:20}}})(W),H=a(73),z=a.n(H),V=a(139),Y=a.n(V),J=a(140),K=a.n(J),G=a(138),Q=a.n(G),$=a(24),X=a.n($),Z=a(28),ee=a.n(Z),te=a(30),ae=a.n(te),re=a(46),ne=a.n(re),oe=a(47),ce=a.n(oe),ie=a(22),le=a.n(ie),se=a(44),ue=a.n(se),he=a(48),de=a.n(he),pe=a(32),me=a.n(pe),fe=a(45),be=a.n(fe),ge=a(26),ve=a.n(ge),Ee=function(e,t,a){var r=function(e,t){return t[a]<e[a]?-1:t[a]>e[a]?1:0},n="desc"===t?function(e,t){return r(e,t)}:function(e,t){return-r(e,t)};return e.map(function(e,t){return[e,t]}).sort(function(e,t){var a=n(e[0],t[0]);return 0!==a?a:e[1]-t[1]}).map(function(e){return e[0]})},we=[{id:"name",numeric:!1,sortable:!0,label:"Map"},{id:"score",numeric:!0,sortable:!0,label:"Portals"},{id:"wrDelta",numeric:!0,sortable:!0,label:"\u0394WR"}],ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,r=t.orderBy;return o.a.createElement(ue.a,null,o.a.createElement(me.a,null,we.map(function(t){return o.a.createElement(le.a,{key:t.id,align:(t.numeric,"center"),padding:t.disablePadding?"none":"default",sortDirection:r===t.id&&a},!0===t.sortable&&o.a.createElement(ve.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},o.a.createElement(be.a,{active:r===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)),!1===t.sortable&&t.label)},this)))}}]),t}(o.a.Component),ke=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={order:"asc",orderBy:"index",page:0,rowsPerPage:100},a.handleRequestSort=function(e,t){var r=t,n="desc";a.state.orderBy===t&&"desc"===a.state.order&&(n="asc"),a.setState({order:n,orderBy:r})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.state,a=t.order,r=t.orderBy,n=t.rowsPerPage,c=t.page,i=function(){return o.a.createElement(ve.a,{placement:"right",title:"Unknown score.",disableFocusListener:!0,disableTouchListener:!0},o.a.createElement(ae.a,{style:{cursor:"help"}},"n/a"))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.a,{"aria-labelledby":"tableTitle"},o.a.createElement(ye,{order:a,orderBy:r,onRequestSort:this.handleRequestSort,rowCount:e.length}),o.a.createElement(ce.a,null,Ee(e,a,r).slice(c*n,c*n+n).map(function(e){var t=null!=e.score?e.score:o.a.createElement(i,null),a=null!=e.score?0===e.wrDelta?"-":"+".concat(e.wrDelta):o.a.createElement(i,null);return o.a.createElement(me.a,{hover:!0,tabIndex:-1,key:e.id},o.a.createElement(le.a,{align:"center"},o.a.createElement(ae.a,{target:"_blank",rel:"noopener",color:"inherit",href:"https://steamcommunity.com/stats/Portal2/leaderboards/".concat(e.id)},e.name)),o.a.createElement(le.a,{align:"center"},t),o.a.createElement(le.a,{align:"center"},a))}))),o.a.createElement(de.a,{rowsPerPageOptions:[5,10,20,50,100],component:"div",count:e.length,rowsPerPage:n,page:c,labelDisplayedRows:function(){return""},backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(o.a.Component),Pe=a(87),Oe=a.n(Pe),je=function(e){return o.a.createElement(Oe.a,Object.assign({direction:"up"},e))},xe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).gotoSteamProfile=function(e){window.open("https://steamcommunity.com/profiles/".concat(e),"_blank").opener=null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.dialogOpen,n=t.handleClose,c=t.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{fullScreen:!0,open:r,onClose:n,TransitionComponent:je},o.a.createElement(g.a,{position:"sticky"},o.a.createElement(_.a,null,o.a.createElement(ve.a,{placement:"bottom",title:"Open Steam profile",disableFocusListener:!0,disableTouchListener:!0},o.a.createElement(Y.a,{color:"inherit",onClick:function(){return e.gotoSteamProfile(c.id)}},o.a.createElement(z.a,{src:c.avatar}))),o.a.createElement(N.a,{variant:"h6",color:"inherit",className:a.flex},"\xa0\xa0\xa0",c.name),o.a.createElement(P.a,{color:"inherit",onClick:n,"aria-label":"Close"},o.a.createElement(K.a,null)))),o.a.createElement(X.a,{container:!0,className:a.gridView},o.a.createElement(X.a,{item:!0,xs:!1,md:1,lg:3}),o.a.createElement(X.a,{item:!0,xs:12,md:10,lg:6},o.a.createElement(ee.a,null,0===c.entries.length&&o.a.createElement(m.a,null),o.a.createElement(ke,{data:c.entries}))))))}}]),t}(o.a.Component),Ce=Object(f.withStyles)(function(e){return{gridView:{marginTop:3*e.spacing.unit},flex:{flex:1}}})(xe),Se=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).description=["This leaderboard includes all legit players who care about least portal records in Portal 2.","","How it works:","- Page generator fetches 5k entries per leaderboard due to the limit for one API call","- Some leaderboards are excluded because too many players are tied for 1st, 2nd rank etc.","- Users who tied the world record will be prioritized","- Cheaters with invalid scores will be ignored"],e.tooltip="Automatic ban system catches users who cheated at least once.",e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,r=this.description.map(function(e,t){return o.a.createElement(C.a,{key:t},o.a.createElement(N.a,{variant:"body1"},e))}),n=o.a.createElement(ae.a,{rel:"noopener",href:"https://nekzor.github.io/SteamCommunity.Net"},"SteamCommunity.Net"),c=o.a.createElement(ve.a,{placement:"right",title:this.tooltip,disableFocusListener:!0,disableTouchListener:!0},o.a.createElement(ae.a,{className:t.help},a.cheaters.length));return o.a.createElement(o.a.Fragment,null,o.a.createElement(X.a,{container:!0},o.a.createElement(X.a,{item:!0,xs:!1,md:1,lg:3}),o.a.createElement(X.a,{item:!0,xs:12,md:10,lg:6},o.a.createElement(ee.a,{className:t.aboutBox},o.a.createElement(j.a,{className:t.list,dense:!0},o.a.createElement(C.a,null,o.a.createElement(N.a,{component:"h2",variant:"h5"},"Who's the lp king?")),r,o.a.createElement(C.a,null),o.a.createElement(C.a,null,o.a.createElement(N.a,{variant:"subtitle1"},"Made with ",n)),o.a.createElement(C.a,null,o.a.createElement(N.a,{variant:"subtitle1"},"Number of detected cheaters: ",c)),o.a.createElement(C.a,null,o.a.createElement(N.a,{variant:"subtitle1"},"Last Update: ",a.export_date)))))))}}]),t}(o.a.Component),Te=Object(f.withStyles)(function(e){return{help:{cursor:"help"},aboutBox:{padding:3*e.spacing.unit}}})(Se),Be=a(142),Re=a.n(Be),De=a(71),_e=a.n(De),Le=a(141),Ne=a.n(Le),Fe=[{id:"name",numeric:!1,sortable:!0,label:"Map"},{id:"wr",numeric:!0,sortable:!0,label:"Portals"},{id:"ties",numeric:!0,sortable:!0,label:"Ties"},{id:"video",numeric:!0,sortable:!1,label:"Video"}],Ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,r=t.orderBy;return o.a.createElement(ue.a,null,o.a.createElement(me.a,null,Fe.map(function(t){return o.a.createElement(le.a,{key:t.id,align:t.numeric?"center":"left",padding:t.disablePadding?"none":"default",sortDirection:r===t.id&&a},!0===t.sortable&&o.a.createElement(ve.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},o.a.createElement(be.a,{active:r===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)),!1===t.sortable&&t.label)},this)))}}]),t}(o.a.Component),Ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={order:"asc",orderBy:"index",page:0,rowsPerPage:10},a.handleRequestSort=function(e,t){var r=t,n="desc";a.state.orderBy===t&&"desc"===a.state.order&&(n="asc"),a.setState({order:n,orderBy:r})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.gotoYouTube=function(e){return function(){var t="Portal+2+".concat(e.name.replace(/ /g,"+"),"+in+").concat(e.wr,"+Portals");window.open("https://www.youtube.com/results?search_query=".concat(t),"_blank").opener=null}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.data,n=this.state,c=n.order,i=n.orderBy,l=n.rowsPerPage,s=n.page,u=function(){return o.a.createElement(ve.a,{placement:"right",title:"Disabled tracking records for this map.",disableFocusListener:!0,disableTouchListener:!0},o.a.createElement(ae.a,{className:a.helpLink},"n/a"))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.a,{"aria-labelledby":"tableTitle"},o.a.createElement(Ae,{order:c,orderBy:i,onRequestSort:this.handleRequestSort,rowCount:r.length}),o.a.createElement(ce.a,null,Ee(r,c,i).slice(s*l,s*l+l).map(function(t){return o.a.createElement(me.a,{hover:!0,tabIndex:-1,key:t.id},o.a.createElement(le.a,null,o.a.createElement(ae.a,{target:"_blank",rel:"noopener",color:"inherit",href:"https://steamcommunity.com/stats/Portal2/leaderboards/".concat(t.id)},t.name)),o.a.createElement(le.a,{align:"center"},t.wr),o.a.createElement(le.a,{align:"center"},!0===t.excluded?o.a.createElement(u,null):t.ties),o.a.createElement(le.a,{align:"center"},o.a.createElement(ve.a,{placement:"right",title:"Search record on YouTube",disableFocusListener:!0,disableTouchListener:!0},o.a.createElement(P.a,{color:"primary",onClick:e.gotoYouTube(t)},o.a.createElement(Ne.a,null)))))}))),o.a.createElement(de.a,{rowsPerPageOptions:[5,10,20,50,100],component:"div",count:r.length,rowsPerPage:l,page:s,labelDisplayedRows:function(){return""},backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(o.a.Component),qe=Object(f.withStyles)(function(e){return{helpLink:{cursor:"help"}}})(Ie),Me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={searchTerm:""},a.setSearchTerm=function(e){a.setState({searchTerm:e.target.value})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"filterRecords",value:function(e){var t=this;return e.filter(function(e){return 0===t.state.searchTerm.length||e.name.toUpperCase().startsWith(t.state.searchTerm.toUpperCase())||e.wr===parseInt(t.state.searchTerm)})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(X.a,{container:!0},o.a.createElement(X.a,{item:!0,xs:!1,md:1,lg:3}),o.a.createElement(X.a,{item:!0,xs:12,md:10,lg:6},o.a.createElement(ee.a,{className:t.searchBox},o.a.createElement(Re.a,null,o.a.createElement(_e.a,{placeholder:"Search",inputProps:{"aria-label":"Description"},onChange:this.setSearchTerm,disableUnderline:!0}))),o.a.createElement(ee.a,null,o.a.createElement(qe,{data:this.filterRecords(a)})))))}}]),t}(o.a.Component),We=Object(f.withStyles)(function(e){return{searchBox:{padding:10,marginBottom:3*e.spacing.unit}}})(Me),Ue=a(19),He=a.n(Ue),ze=a(27),Ve=[{id:"rank",numeric:!0,sortable:!1,label:"Rank"},{id:"name",numeric:!1,sortable:!1,label:"Player"},{id:"score",numeric:!0,sortable:!0,label:"Portals"}],Ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,r=t.orderBy;return o.a.createElement(ue.a,null,o.a.createElement(me.a,null,Ve.map(function(t){return o.a.createElement(le.a,{key:t.id,align:t.numeric?"center":"left",sortDirection:r===t.id&&a},!0===t.sortable&&o.a.createElement(ve.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},o.a.createElement(be.a,{active:r===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)),!1===t.sortable&&t.label)})))}}]),t}(o.a.Component),Je=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={order:"asc",orderBy:"score",page:0,rowsPerPage:10},a.handleRequestSort=function(e,t){var r=t,n="desc";a.state.orderBy===t&&"desc"===a.state.order&&(n="asc"),a.setState({order:n,orderBy:r})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,r=e.handleClickOpen,n=this.state,c=n.order,i=n.orderBy,l=n.rowsPerPage,s=n.page;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.a,null,o.a.createElement(Ye,{order:c,orderBy:i,onRequestSort:this.handleRequestSort,rowCount:a.length}),o.a.createElement(ce.a,null,Ee(a,c,i).slice(s*l,s*l+l).map(function(e){var a=e.getProfile(),n=e.getStats();return o.a.createElement(me.a,{hover:!0,tabIndex:-1,key:e.id},o.a.createElement(le.a,{align:"center"},e.rank),o.a.createElement(le.a,null,o.a.createElement("div",{className:t.playerCell},o.a.createElement(z.a,{src:a&&a.avatar_link}),"\xa0\xa0\xa0\xa0\xa0\xa0",o.a.createElement(ae.a,{className:t.clickLink,onClick:function(){return r(e.id)},color:"inherit"},a&&a.profile_name||e.id))),o.a.createElement(le.a,{align:"center"},o.a.createElement(ve.a,{placement:"top",title:"".concat(n.percentage,"% (").concat(e.score+n.delta,"+").concat(n.delta,")"),disableFocusListener:!0,disableTouchListener:!0},o.a.createElement("div",null,e.score))))}))),o.a.createElement(de.a,{rowsPerPageOptions:[5,10,20,50,100],component:"div",count:a.length,rowsPerPage:l,page:s,labelDisplayedRows:function(){return""},backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(o.a.Component),Ke=Object(f.withStyles)(function(e){return{playerCell:{display:"flex",alignItems:"center"},clickLink:{cursor:"pointer"}}})(Je),Ge=o.a.createContext(),Qe=function(e){return function(t){return o.a.createElement(Ge.Consumer,null,function(a){return o.a.createElement(e,Object.assign({},a,t))})}},$e=Qe(function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ze.a)(He.a.mark(function e(){return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==this.props.data.length){e.next=3;break}return e.next=3,this.props.downloadBoard(this.props.boardType);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.data,a=e.dialogOpener;return o.a.createElement(o.a.Fragment,null,o.a.createElement(X.a,{container:!0},o.a.createElement(X.a,{item:!0,xs:!1,md:1,lg:3}),o.a.createElement(X.a,{item:!0,xs:12,md:10,lg:6},o.a.createElement(ee.a,null,0===t.length&&o.a.createElement(m.a,null),o.a.createElement(Ke,{data:t,handleClickOpen:a})))))}}]),t}(o.a.Component)),Xe=a(143),Ze=a.n(Xe),et=a(74),tt=a.n(et),at=Object(f.createMuiTheme)({palette:{primary:{light:tt.a[300],main:tt.a[500],dark:tt.a[700]},secondary:{light:"#fff",main:"#fff",dark:"#fff"}},typography:{useNextVariants:!0}}),rt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={currentTab:0},a.handleTabChange=function(e,t){a.setState({currentTab:t})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.boards,r=a.sp,n=a.coop,c=a.overall,i=e.records,l=e.stats,s=e.currentProfile,u=e.cacheProfile,h=e.clearProfile,d=this.state.currentTab;return o.a.createElement(o.a.Fragment,null,o.a.createElement(U,{currentTab:d,onTabChange:this.handleTabChange}),0!==i.length?o.a.createElement("div",{className:t.views},0===d&&o.a.createElement($e,{data:r,boardType:"sp",dialogOpener:u}),1===d&&o.a.createElement($e,{data:n,boardType:"coop",dialogOpener:u}),2===d&&o.a.createElement($e,{data:c,boardType:"overall",dialogOpener:u}),3===d&&o.a.createElement(We,{data:i}),4===d&&o.a.createElement(Te,{data:l})):o.a.createElement(m.a,null),s&&o.a.createElement(Ce,{dialogOpen:null!==s,handleClose:h,data:s}))}}]),t}(o.a.PureComponent),nt=(r=Qe(Object(f.withStyles)(function(e){return{views:{marginTop:3*e.spacing.unit}}})(rt)),function(e){return o.a.createElement(f.MuiThemeProvider,{theme:at},o.a.createElement(Ze.a,null),o.a.createElement(r,e))}),ot=a(59),ct=a(75),it=function(){function e(){Object(l.a)(this,e),this.baseApi="https://raw.githubusercontent.com/NeKzor/lp/api"}return Object(s.a)(e,[{key:"get",value:function(){var e=Object(ze.a)(He.a.mark(function e(t){return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching ".concat(t)),e.next=3,fetch(this.baseApi+t+".json");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getProfiles",value:function(){var e=Object(ze.a)(He.a.mark(function e(){var t;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/profiles");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRecords",value:function(){var e=Object(ze.a)(He.a.mark(function e(){var t;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/wrs");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getStats",value:function(){var e=Object(ze.a)(He.a.mark(function e(){var t;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/stats");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBoard",value:function(){var e=Object(ze.a)(He.a.mark(function e(t){var a;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("sp"===t||"coop"===t||"overall"===t){e.next=2;break}throw new Error("Invalid board!");case 2:return e.next=4,this.get("/boards/".concat(t));case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayer",value:function(){var e=Object(ze.a)(He.a.mark(function e(t){var a;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/players/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),lt=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={profiles:[],records:[],stats:[],currentProfile:null,boards:{sp:[],coop:[],overall:[]},calcWrDelta:function(t){return Math.abs(e.state.findRecord(t.id).wr-t.score)},findRecord:function(t){return e.state.records.find(function(e){return e.id===t})},findProfile:function(t){return e.state.profiles.find(function(e){return e.id===t})},cacheProfile:function(t){return e.cacheProfile(t)},clearProfile:function(){return e.setState({currentProfile:null})},downloadBoard:function(){var t=Object(ze.a)(He.a.mark(function t(a){return He.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.downloadBoard(a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},e.api=new it,e.perfectScores={sp:0,coop:0,overall:0},e.playerCache={},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ze.a)(He.a.mark(function e(){var t,a,r;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.getProfiles();case 2:return t=e.sent,e.next=5,this.api.getRecords();case 5:return a=e.sent,e.next=8,this.api.getStats();case 8:r=e.sent,this.initRecords(r.tied_records,a),this.setState({records:a,stats:r,profiles:t});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"initRecords",value:function(e,t){var a=!0,r=!1,n=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var i=o.value;i.ties=e[i.id],i.excluded?i.ties=0:(1===i.mode?this.perfectScores.sp+=i.wr:2===i.mode&&(this.perfectScores.coop+=i.wr),this.perfectScores.overall+=i.wr)}}catch(l){r=!0,n=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw n}}}},{key:"downloadBoard",value:function(){var e=Object(ze.a)(He.a.mark(function e(t){var a,r,n,o,c,i,l,s,u=this;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,e.next=3,this.api.getBoard(t);case 3:r=e.sent,n=!0,o=!1,c=void 0,e.prev=7,i=r[Symbol.iterator]();case 9:if(n=(l=i.next()).done){e.next=28;break}if((s=l.value).getProfile=function(){var e=this;return void 0===this._profile&&(this._profile=a.state.profiles.find(function(t){return t.id===e.id})),this._profile},"sp"!==t){e.next=16;break}s.getStats=function(){return void 0===this._stats&&(this._stats={delta:a.perfectScores.sp-this.score,percentage:Math.round(a.perfectScores.sp/this.score*100)}),this._stats},e.next=25;break;case 16:if("coop"!==t){e.next=20;break}s.getStats=function(){return void 0===this._stats&&(this._stats={delta:a.perfectScores.coop-this.score,percentage:Math.round(a.perfectScores.coop/this.score*100)}),this._stats},e.next=25;break;case 20:if("overall"!==t){e.next=24;break}s.getStats=function(){return void 0===this._stats&&(this._stats={delta:a.perfectScores.overall-this.score,percentage:Math.round(a.perfectScores.overall/this.score*100)}),this._stats},e.next=25;break;case 24:throw new Error("Invalid board type!");case 25:n=!0,e.next=9;break;case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(7),o=!0,c=e.t0;case 34:e.prev=34,e.prev=35,n||null==i.return||i.return();case 37:if(e.prev=37,!o){e.next=40;break}throw c;case 40:return e.finish(37);case 41:return e.finish(34);case 42:this.setState(function(e){return{boards:Object(ct.a)({},e.boards,Object(ot.a)({},t,r))}},function(){return console.log("Updated state:",u.state)});case 43:case"end":return e.stop()}},e,this,[[7,30,34,42],[35,,37,41]])}));return function(t){return e.apply(this,arguments)}}()},{key:"cacheProfile",value:function(){var e=Object(ze.a)(He.a.mark(function e(t){var a,r,n,o,c,i,l,s,u,h;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(a=this.playerCache[t])){e.next=33;break}return r=this.state.findProfile(t),a={id:t,name:r.profile_name,avatar:r.avatar_link,sp:0,coop:0,overall:0,entries:[]},this.setState({currentProfile:a}),e.next=7,this.api.getPlayer(t);case 7:for(n=e.sent,o=[],c=!0,i=!1,l=void 0,e.prev=12,s=n.entries[Symbol.iterator]();!(c=(u=s.next()).done);c=!0)h=u.value,o.push({id:h.id,name:this.state.findRecord(h.id).name,score:h.score,wrDelta:this.state.calcWrDelta(h)});e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),i=!0,l=e.t0;case 20:e.prev=20,e.prev=21,c||null==s.return||s.return();case 23:if(e.prev=23,!i){e.next=26;break}throw l;case 26:return e.finish(23);case 27:return e.finish(20);case 28:a=Object(ct.a)({},a,{sp:n.sp_score,coop:n.coop_score,overall:n.overall_score,entries:o}),this.setState({currentProfile:a}),this.playerCache=Object(ct.a)({},this.playerCache,Object(ot.a)({},t,a)),e.next=35;break;case 33:console.log("From cache: ".concat(t)),this.setState({currentProfile:a});case 35:case"end":return e.stop()}},e,this,[[12,16,20,28],[21,,23,27]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement(Ge.Provider,{value:this.state},this.props.children)}}]),t}(o.a.Component),st=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ut(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ht=o.a.createElement(lt,null,o.a.createElement(nt,null));i.a.render(ht,document.querySelector("#root")),function(){if("serviceWorker"in navigator){if(new URL("/lp",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/lp","/service-worker.js");st?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ut(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ut(e)})}}()}},[[144,1,2]]]);
//# sourceMappingURL=main.c6c438e3.chunk.js.map