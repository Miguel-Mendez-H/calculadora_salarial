(this["webpackJsonpapp-salarial"]=this["webpackJsonpapp-salarial"]||[]).push([[0],{81:function(e,a,t){},82:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),i=t.n(r),s=(t(81),t(82),t(130)),l=t(133),o=t(135),d=t(94),j=t(93),b=t(68),h=t.n(b),O=t(2),u=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function x(){var e=u();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(l.a,{position:"static",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(j.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(h.a,{})}),Object(O.jsx)(d.a,{variant:"h6",className:e.title,children:"Calculadora Salarial"})]})})})}var p=t(42),g=(t(88),t(89),t(136)),m=t(92),f=t(137),v=t(138),S=t(139),N=t(140),I=t(141),R=t(142),A=Object(s.a)({table:{minWidth:300},tittle:{color:"white",fontSize:"20px"}});function L(e){var a=A(),t=function(e){return e?e.toLocaleString("en-US"):0};return Object(O.jsx)(g.a,{component:m.a,children:Object(O.jsxs)(f.a,{className:a.table,size:"small","aria-label":"a dense table",children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(N.a,{className:a.tittle,align:"center",colSpan:2,children:"Carga prestacional"})}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{align:"center",className:a.tittle,children:"Concepto"}),Object(O.jsx)(N.a,{align:"center",selected:!0,className:a.tittle,children:"Valor"})]})]}),Object(O.jsxs)(I.a,{children:[Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Vacaciones"}),Object(O.jsx)(N.a,{className:"cargaPrestacional",align:"right",children:t(e.data.vacaciones)})]}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Prima"}),Object(O.jsx)(N.a,{className:"cargaPrestacional",align:"right",children:t(e.data.prima)})]}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Cesantias"}),Object(O.jsx)(N.a,{className:"cargaPrestacional",align:"right",children:t(e.data.cesantias)})]}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Intereses cesantias"}),Object(O.jsx)(N.a,{className:"cargaPrestacional",align:"right",children:t(e.data.intereses)})]})]}),Object(O.jsx)(v.a,{children:Object(O.jsx)(S.a,{children:Object(O.jsx)(N.a,{className:a.tittle,align:"center",colSpan:2,children:"Seguridad Social"})})}),Object(O.jsxs)(I.a,{children:[Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Pension"}),Object(O.jsx)(N.a,{className:"seguridadSocial",align:"right",children:t(e.data.pension)})]}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Salud"}),Object(O.jsx)(N.a,{className:"seguridadSocial",align:"right",children:t(e.data.salud)})]}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"Fondo de Solidaridad"}),Object(O.jsx)(N.a,{className:"seguridadSocial",align:"right",children:t(e.data.fondoS)})]}),Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{component:"td",scope:"row",children:"ARL"}),Object(O.jsx)(N.a,{className:"seguridadSocial",align:"right",children:t(e.data.arl)})]})]}),Object(O.jsx)(R.a,{children:Object(O.jsxs)(S.a,{children:[Object(O.jsx)(N.a,{className:a.tittle,component:"td",scope:"row",children:"Neto"}),Object(O.jsx)(N.a,{className:a.tittle,align:"right",children:t(e.data.neto)})]})})]})})}var C=t(151),P=t(147),w=t(153),M=t(149),y=t(154),E=t(148),T=t(95),_=function(e){return Math.round(30*e/720)},D=908526,B={SALARIO_ORDINARIO:.04,SALARIO_INTEGRAL:.04,SALARIO_SERVICIOS:.16},k={SALARIO_ORDINARIO:.04,SALARIO_INTEGRAL:.04,SALARIO_SERVICIOS:.125},F={0:.00522,1:.01044,2:.02436,3:.0435,4:.0696},G=function(e,a){return Math.round(e*B[a])},V=function(e,a){return Math.round(e*k[a])},z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,t=0,n=e/D;return n>=4&&n<16?t=Math.round(.01*a):n>=16&&n<17?t=Math.round(.012*a):n>=17&&n<18?t=Math.round(.014*a):n>=18&&n<19?t=Math.round(.016*a):n>=19&&n<20?t=Math.round(.018*a):n>=20&&(t=Math.round(.02*a)),t},W="SALARIO_ORDINARIO",J="SALARIO_SERVICIOS",U="SALARIO_INTEGRAL";function $(e){var a=_(e),t=function(e){return Math.round(30*e/360)}(e),n=function(e){return Math.round(30*e/360)}(e),c=function(e){return Math.round(30*e/360*.12)}(e),r=G(e,W),i=V(e,W),s=z(e);return{vacaciones:a,prima:t,cesantias:n,intereses:c,pension:r,salud:i,fondoS:s,neto:Number(e)+a+t+n+c-r-i-s}}var q=function(e,a){console.log(e,a);var t=$(e+a);return console.log(t),t};function H(e,a){var t=.4*e,n=G(t,J),c=V(t,J),r=z(e,t),i=function(e,a){return Math.round(e*F[a])}(t,a),s={pension:n,salud:c,fondoS:r,arl:i,neto:Number(e)-n-c-r-i};return console.log("datos:",s),s}var K=function(e,a,t){var n=Number(e)+Number(a);return console.log("Salario",n),H(n,t)};var Q=function(e,a){var t=function(e){var a=.7*e,t=_(e),n=G(a,U),c=V(a,U),r=z(e,a);return{salario:e,vacaciones:t,pension:n,salud:c,fondoS:r,neto:Number(e)+t-n-c-r}}(e+a);return console.log(t),t},X=t(150),Y=t(143),Z=t(144),ee=t(53),ae=t.n(ee),te=Object(s.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function ne(){var e=te();return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsxs)(X.a,{children:[Object(O.jsx)(Y.a,{expandIcon:Object(O.jsx)(ae.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(O.jsx)(d.a,{className:e.heading,children:"Calculadora Salarial"})}),Object(O.jsx)(Z.a,{children:Object(O.jsx)(d.a,{children:"Esta calculadora te permite estimar el ingreso neto a partir de los ingresos brutos, de acuerdo con el esquema de pago pactado con tu compa\xf1\xeda."})})]}),Object(O.jsxs)(X.a,{children:[Object(O.jsx)(Y.a,{expandIcon:Object(O.jsx)(ae.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(O.jsx)(d.a,{className:e.heading,children:"1. Ingresos Laborales"})}),Object(O.jsx)(Z.a,{children:Object(O.jsx)(d.a,{children:"Digite su salario u honorarios percibidos en su totalidad."})})]}),Object(O.jsxs)(X.a,{children:[Object(O.jsx)(Y.a,{expandIcon:Object(O.jsx)(ae.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(O.jsx)(d.a,{className:e.heading,children:"2. Otros Ingresos Laborales"})}),Object(O.jsx)(Z.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsxs)("p",{children:["Digite los demas ingresos percibidos por conceptos de:",Object(O.jsx)("li",{children:"Primas Ocasionales"}),Object(O.jsx)("li",{children:"Partcipacion Utilidades"}),Object(O.jsx)("li",{children:"Primas Extralegales"}),Object(O.jsx)("li",{children:"Bonificaciones"})]})})})]})]})}var ce=function(){var e=Object(n.useState)(0),a=Object(p.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),i=Object(p.a)(r,2),s=i[0],l=i[1],o=Object(n.useState)(0),d=Object(p.a)(o,2),j=d[0],b=d[1],h=Object(n.useState)({}),u=Object(p.a)(h,2),x=u[0],g=u[1];return Object(O.jsxs)("div",{className:"containerCalculadora",children:[Object(O.jsx)("div",{className:"contenidoParrafo",children:Object(O.jsx)(ne,{})}),Object(O.jsxs)("div",{className:"contenidoBotones-Tabla",children:[Object(O.jsx)("div",{className:"inputParaSalario",children:Object(O.jsx)(C.a,{id:"filled-basic",label:"Digite el Salario",variant:"filled",type:"number",onChange:function(e){c(parseInt(e.target.value||0)),g(q(t,s)),g(Q(t,s)),g(K(t,s,j))},InputProps:{startAdornment:Object(O.jsx)(P.a,{position:"start",children:"$"})}})}),Object(O.jsx)("div",{className:"inputParaOtrosIngresos",children:Object(O.jsx)(C.a,{id:"filled-basic",label:"Digite otros ingresos",variant:"filled",type:"number",onChange:function(e){l(parseInt(e.target.value||0)),g(q(t,s)),g(Q(t,s)),g(K(t,s,j))},InputProps:{startAdornment:Object(O.jsx)(P.a,{position:"start",children:"$"})}})}),Object(O.jsxs)("div",{className:"SelectorArl",children:[Object(O.jsx)(w.a,{id:"demo-simple-select-label",children:"Tarifa ARL"}),Object(O.jsxs)(M.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:j,onChange:function(e){b(parseInt(e.target.value||0)),g(K(t,s,j))},children:[Object(O.jsx)(y.a,{value:0,children:"Riesgo 1 - 0.522%"}),Object(O.jsx)(y.a,{value:1,children:"Riesgo 2 - 1.044%"}),Object(O.jsx)(y.a,{value:2,children:"Riesgo 3 - 2.436%"}),Object(O.jsx)(y.a,{value:3,children:"Riesgo 4 - 4.350%"}),Object(O.jsx)(y.a,{value:4,children:"Riesgo 5 - 6.960%"})]})]}),Object(O.jsx)("div",{className:"contenidoBotones",children:Object(O.jsxs)(E.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(O.jsx)(T.a,{onClick:function(){return g(q(t,s))},children:"Ordinario"}),Object(O.jsx)(T.a,{onClick:function(){return g(Q(t,s))},children:"Integral"}),Object(O.jsx)(T.a,{onClick:function(){return g(K(t,s,j))},children:"Servicios"})]})}),Object(O.jsx)("div",{className:"contenidoTabla",children:Object(O.jsx)(L,{data:x})})]})]})};var re=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsx)(ce,{})]})};t(90);var ie=function(){return Object(O.jsx)(re,{})},se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,156)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(ie,{})}),document.getElementById("root")),se()}},[[91,1,2]]]);
//# sourceMappingURL=main.f83beef3.chunk.js.map