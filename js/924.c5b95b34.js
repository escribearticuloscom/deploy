(globalThis["webpackChunkweb"]=globalThis["webpackChunkweb"]||[]).push([[924],{1261:s=>{s.exports=s=>({presets:[["@quasar/babel-preset-app",s.caller((s=>s&&"node"===s.target))?{targets:{node:"current"}}:{}]]})},9924:(s,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>h});e(9665);var o=e(9835),t=e(6970);const i=(0,o._)("div",{class:"col-2"},null,-1),r=(0,o._)("div",{class:"page-title"},"Nuestros blogs",-1),n=(0,o._)("div",{class:"col-2"},null,-1);function l(s,a,e,l,_,c){const u=(0,o.up)("q-img"),d=(0,o.up)("q-item-section"),p=(0,o.up)("q-item-label"),j=(0,o.up)("q-item"),m=(0,o.up)("q-separator"),g=(0,o.up)("q-page"),b=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(g,{class:"row"},{default:(0,o.w5)((()=>[i,(0,o._)("div",{id:"text-area",class:(0,t.C_)(["col-md-8 col-xs-12 q-my-xl",{"q-pl-lg":s.$q.screen.lt.md}])},[r,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.blogs,(a=>((0,o.wg)(),(0,o.iD)("div",{key:a.id},[(0,o.wy)(((0,o.wg)(),(0,o.j4)(j,{clickable:"",class:"q-mt-lg",onClick:()=>s.$router.push(`/blogs/${a.id}`)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{side:""},{default:(0,o.w5)((()=>[s.$q.screen.lt.md?((0,o.wg)(),(0,o.j4)(u,{key:0,src:`imgs/${a.img}`,style:{height:"80px",width:"100px"}},null,8,["src"])):((0,o.wg)(),(0,o.j4)(u,{key:1,src:`imgs/${a.img}`,style:{height:"140px",width:"220px"}},null,8,["src"]))])),_:2},1024),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"q-mb-md text-bold",style:{"font-size":"28px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(a.title),1)])),_:2},1024),(0,o.Wm)(p,{caption:"",style:{"font-size":"20px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(a.description)+"...",1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[b]]),(0,o.Wm)(m,{inset:""})])))),128))],2),n])),_:1})}e(1261);const _=(0,o.aZ)({name:"IndexPage",data(){return{blogs:[]}},async created(){const s=e(2484).keys().map((s=>s.split("./")[1]));for(let a of s)await e(1642)(`./${a}`).then((s=>{this.blogs.push({title:s.title,id:a.split(".json")[0],description:s.description,img:s.img})}))}});var c=e(1639),u=e(9885),d=e(490),p=e(1233),j=e(335),m=e(3115),g=e(926),b=e(1136),w=e(9984),f=e.n(w);const v=(0,c.Z)(_,[["render",l]]),h=v;f()(_,"components",{QPage:u.Z,QItem:d.Z,QItemSection:p.Z,QImg:j.Z,QItemLabel:m.Z,QSeparator:g.Z}),f()(_,"directives",{Ripple:b.Z})},2484:(s,a,e)=>{var o={"./aprovechar_tendencias.json":2781,"./articulos_de_arte.json":5614,"./articulos_de_ciencia.json":5448,"./articulos_de_historia.json":698,"./articulos_de_literatura.json":4415,"./articulos_de_musica.json":3920,"./articulos_de_politica.json":3192,"./articulos_de_religion.json":6547,"./articulos_diferentes.json":4814,"./articulos_para_automotriz.json":9981,"./articulos_para_bienes.json":1993,"./articulos_para_educación.json":2542,"./articulos_para_entrenamiento.json":2280,"./articulos_para_jardineria.json":3652,"./articulos_para_moda.json":2622,"./articulos_para_salud.json":8055,"./articulos_para_seo.json":1249,"./articulos_para_tecnologia.json":4697,"./articulos_para_web_de_juegos.json":7465,"./como_escribir_articulos_de_calidad.json":2942,"./consejos_para_articulos.json":3841,"./crear_contenido_valioso.json":4646,"./enlaces_internos_y_externos.json":5601,"./errores_comunes.json":9818,"./escribir_articulos_para_aumentar_trafico.json":8037,"./estrategias_avanzadas_para_seo.json":69,"./estrategias_para_optimizar.json":3875,"./etiquetas_y_metadatos.json":9606,"./formato_y_longitud_articulos.json":4713,"./mejorar_posicionamiento_a_traves_de_articulos.json":5545,"./palabras_clave.json":8191,"./palabras_clave_para_seo.json":2656,"./secretos_para_escribir_articulos.json":3942,"./titulos_llamativos.json":5077,"./uso_imagenes_y_videos.json":5194,"./utilizar_titulos_y_subtitulos.json":5935};function t(s){var a=i(s);return e(a)}function i(s){if(!e.o(o,s)){var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}return o[s]}t.keys=function(){return Object.keys(o)},t.resolve=i,s.exports=t,t.id=2484}}]);