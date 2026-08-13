function Xy(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();var Ec=1e-6,No=typeof Float32Array<"u"?Float32Array:Array;function us(){var n=new No(16);return No!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function sr(n,t,e,s,o,r,i,a,l,c,u,h,d,p,f,m){var g=new No(16);return g[0]=n,g[1]=t,g[2]=e,g[3]=s,g[4]=o,g[5]=r,g[6]=i,g[7]=a,g[8]=l,g[9]=c,g[10]=u,g[11]=h,g[12]=d,g[13]=p,g[14]=f,g[15]=m,g}function Ky(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Zc(n,t,e){var s=t[0],o=t[1],r=t[2],i=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],m=t[12],g=t[13],x=t[14],b=t[15],y=e[0],w=e[1],v=e[2],$=e[3];return n[0]=y*s+w*a+v*h+$*m,n[1]=y*o+w*l+v*d+$*g,n[2]=y*r+w*c+v*p+$*x,n[3]=y*i+w*u+v*f+$*b,y=e[4],w=e[5],v=e[6],$=e[7],n[4]=y*s+w*a+v*h+$*m,n[5]=y*o+w*l+v*d+$*g,n[6]=y*r+w*c+v*p+$*x,n[7]=y*i+w*u+v*f+$*b,y=e[8],w=e[9],v=e[10],$=e[11],n[8]=y*s+w*a+v*h+$*m,n[9]=y*o+w*l+v*d+$*g,n[10]=y*r+w*c+v*p+$*x,n[11]=y*i+w*u+v*f+$*b,y=e[12],w=e[13],v=e[14],$=e[15],n[12]=y*s+w*a+v*h+$*m,n[13]=y*o+w*l+v*d+$*g,n[14]=y*r+w*c+v*p+$*x,n[15]=y*i+w*u+v*f+$*b,n}function qy(n,t,e){var s=Math.sin(e),o=Math.cos(e),r=t[4],i=t[5],a=t[6],l=t[7],c=t[8],u=t[9],h=t[10],d=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=r*o+c*s,n[5]=i*o+u*s,n[6]=a*o+h*s,n[7]=l*o+d*s,n[8]=c*o-r*s,n[9]=u*o-i*s,n[10]=h*o-a*s,n[11]=d*o-l*s,n}function Yy(n,t,e){var s=Math.sin(e),o=Math.cos(e),r=t[0],i=t[1],a=t[2],l=t[3],c=t[8],u=t[9],h=t[10],d=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=r*o-c*s,n[1]=i*o-u*s,n[2]=a*o-h*s,n[3]=l*o-d*s,n[8]=r*s+c*o,n[9]=i*s+u*o,n[10]=a*s+h*o,n[11]=l*s+d*o,n}function Zy(n,t,e){var s=Math.sin(e),o=Math.cos(e),r=t[0],i=t[1],a=t[2],l=t[3],c=t[4],u=t[5],h=t[6],d=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=r*o+c*s,n[1]=i*o+u*s,n[2]=a*o+h*s,n[3]=l*o+d*s,n[4]=c*o-r*s,n[5]=u*o-i*s,n[6]=h*o-a*s,n[7]=d*o-l*s,n}function Jy(n,t,e,s,o){var r=1/Math.tan(t/2);if(n[0]=r/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,o!=null&&o!==1/0){var i=1/(s-o);n[10]=(o+s)*i,n[14]=2*o*s*i}else n[10]=-1,n[14]=-2*s;return n}var Qy=Jy;function tw(n,t,e,s){var o,r,i,a,l,c,u,h,d,p,f=t[0],m=t[1],g=t[2],x=s[0],b=s[1],y=s[2],w=e[0],v=e[1],$=e[2];return Math.abs(f-w)<Ec&&Math.abs(m-v)<Ec&&Math.abs(g-$)<Ec?Ky(n):(u=f-w,h=m-v,d=g-$,p=1/Math.sqrt(u*u+h*h+d*d),u*=p,h*=p,d*=p,o=b*d-y*h,r=y*u-x*d,i=x*h-b*u,p=Math.sqrt(o*o+r*r+i*i),p?(p=1/p,o*=p,r*=p,i*=p):(o=0,r=0,i=0),a=h*i-d*r,l=d*o-u*i,c=u*r-h*o,p=Math.sqrt(a*a+l*l+c*c),p?(p=1/p,a*=p,l*=p,c*=p):(a=0,l=0,c=0),n[0]=o,n[1]=a,n[2]=u,n[3]=0,n[4]=r,n[5]=l,n[6]=h,n[7]=0,n[8]=i,n[9]=c,n[10]=d,n[11]=0,n[12]=-(o*f+r*m+i*g),n[13]=-(a*f+l*m+c*g),n[14]=-(u*f+h*m+d*g),n[15]=1,n)}function ew(){var n=new No(3);return No!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function ha(n,t,e){var s=new No(3);return s[0]=n,s[1]=t,s[2]=e,s}(function(){var n=ew();return function(t,e,s,o,r,i){var a,l;for(e||(e=3),s||(s=0),o?l=Math.min(o*e+s,t.length):l=t.length,a=s;a<l;a+=e)n[0]=t[a],n[1]=t[a+1],n[2]=t[a+2],r(n,n,i),t[a]=n[0],t[a+1]=n[1],t[a+2]=n[2];return t}})();function Yi(n,t){return n.length==t.length&&n[0].length==t[0].length}var Ke;(n=>{class t{X;Y;Z;constructor(g){this.X=g[0],this.Y=g[1],this.Z=g[2]}}n.Vector3=t;function e(m,g){return Math.floor(Math.random()*(g-m+1)+m)}n.randomIntFromInterval=e;function s(m,g,x){let b=us();return Zc(b,m,g),Zc(b,b,x),b}n.multiply3Mat=s;function o(m,g,x){const b=(g-m)/(x-1);let y=[],w=0;for(let v=0;v<x-1;v++)w=m+b*v,y.push(w);return y.push(g),y}n.linspace=o;function r(m){let g=new Array(m[0]);for(let x=0;x<g.length;++x)g[x]=new Array(m[1]),g[x].fill(0);return g}n.zeros=r;function i(m){return Array.from({length:m[0]},()=>r([m[1],m[2]]))}n.zeros3D=i;function a(m){let g=r([m.length,m[0].length]);for(let x=0;x<m.length;x++)for(let b=0;b<m[x].length;b++)g[x][b]=m[x][b];return g}n.matCopy=a;function l(m,g){if(Yi(m,g)){console.error(`Operand sizes don't match: (${m.length},${m[0].length}), (${g.length},${g[0].length})`);return}let x=n.zeros([m.length,m[0].length]);for(let b=0;b<m.length;++b)for(let y=0;y<m[0].length;++y)x[b][y]=m[b][y]+g[b][y];return x}n.matAdd=l;function c(m,g){if(!Yi(m,g))return console.error(`Operand sizes don't match: (${m.length},${m[0].length}), (${g.length},${g[0].length})`),-1;let x=n.zeros([m.length,m[0].length]);for(let b=0;b<x.length;++b)for(let y=0;y<x[b].length;++y)x[b][y]=m[b][y]*g[b][y];return x}n.matHadamardProduct=c;function u(m,g){let x=n.zeros([m.length,m[0].length]);for(let b=0;b<m.length;++b)for(let y=0;y<m[b].length;++y)x[b][y]*=g;return x}n.matConstantProduct=u;function h(m,g){if(!Yi(m,g)){console.error(`Operand sizes don't match: (${m.length},${m[0].length}), (${g.length},${g[0].length})`);return}let x=n.zeros([m.length,m[0].length]);for(let b=0;b<x.length;++b)for(let y=0;y<x[b].length;++y)x[b][y]=m[b][y]+g[b][y];return x}n.matSum=h;function d(m,g){if(!Yi(m,g)){console.error(`Operand sizes don't match: (${m.length},${m[0].length}), (${g.length},${g[0].length})`);return}let x=n.zeros([m.length,m[0].length]);for(let b=0;b<x.length;++b)for(let y=0;y<x[b].length;++y)x[b][y]=m[b][y]-g[b][y];return x}n.matDiff=d;function p(m,g){let x=n.zeros([m.length,m[0].length]);for(let b=0;b<x.length;++b)for(let y=0;y<x[b].length;++y)x[b][y]=m[b][y]-g;return x}n.matConstDiff=p;function f(m,g){let x=n.zeros([m.length,m[0].length]);for(let b=0;b<x.length;++b)for(let y=0;y<x[b].length;++y)x[b][y]=m[b][y]+g;return x}n.matConstSum=f})(Ke||(Ke={}));class Ya{position=new Float32Array([0,0,0]);rotation=new Float32Array([0,0,0]);origin=new Float32Array([0,0,0]);scale=new Float32Array([1,1,1]);name="Object";model;S;R;T;constructor(t){this.S=us(),this.R=us(),this.T=us(),this.model=us(),t?this.setTransformation(t.parameters):this.setTransformation()}get RotationX(){return this.rotation[0]}get RotationY(){return this.rotation[1]}get RotationZ(){return this.rotation[2]}get ScaleX(){return this.scale[0]}get ScaleY(){return this.scale[1]}get ScaleZ(){return this.scale[2]}get X(){return this.position[0]}get Y(){return this.position[1]}get Z(){return this.position[2]}get Position(){return this.position}get Rotation(){return this.rotation}get Scale(){return this.scale}set RotationX(t){this.rotation[0]=t,this.makeRotation(this.rotation)}set RotationY(t){this.rotation[1]=t,this.makeRotation(this.rotation)}set RotationZ(t){this.rotation[2]=t,this.makeRotation(this.rotation)}get ModelMatrix(){return this.model}set X(t){this.position[0]=t,this.makeTranslation(this.position),this.makeModel()}set Y(t){this.position[1]=t,this.makeTranslation(this.position),this.makeModel()}set Z(t){this.position[2]=t,this.makeTranslation(this.position),this.makeModel()}set ScaleX(t){this.scale[0]=t,this.makeScale(this.scale),this.makeModel()}set ScaleY(t){this.scale[1]=t,this.makeScale(this.scale),this.makeModel()}set ScaleZ(t){this.scale[2]=t,this.makeScale(this.scale),this.makeModel()}setTransformation(t){t&&(this.position[0]=t.X?t.X:0,this.position[1]=t.Y?t.Y:0,this.position[2]=t.Z?t.Z:0,this.rotation[0]=t.RotX?t.RotX:0,this.rotation[1]=t.RotY?t.RotY:0,this.rotation[2]=t.RotZ?t.RotZ:0,this.scale[0]=t.ScaleX?t.ScaleX:1,this.scale[1]=t.ScaleY?t.ScaleY:1,this.scale[2]=t.ScaleZ?t.ScaleZ:1,this.initTRS(),this.makeModel())}makeRotX(t){const e=Math.cos(t),s=Math.sin(t);return sr(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1)}makeRotY(t){const e=Math.cos(t),s=Math.sin(t);return sr(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1)}makeRotZ(t){const e=Math.cos(t),s=Math.sin(t);return sr(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}makeScale(t){this.S=sr(t[0],0,0,0,0,t[1],0,0,0,0,t[2],0,0,0,0,1)}makeTranslation(t){this.T=sr(1,0,0,0,0,1,0,0,0,0,1,0,t[0],t[1],t[2],1)}makeRotation(t){return Ke.multiply3Mat(this.makeRotX(t[0]),this.makeRotY(t[1]),this.makeRotZ(t[2]))}initTRS(){this.makeTranslation(this.Position),this.makeRotation(this.Rotation),this.makeScale(this.Scale)}makeModel(){this.model=Ke.multiply3Mat(this.T,this.R,this.S)}}class nw extends Ya{Active=!1;fovy=2*Math.PI/5;aspect=16/9;near=.1;far=1e3;LookAt=ha(0,0,0);constructor(t,e){super(),this.aspect=t,e?this.Active=e:this.Active=!1}getViewMatrix(){let t=us();return tw(t,ha(this.X,this.Y,this.Z),this.LookAt,ha(0,1,0)),qy(t,t,this.RotationX),Yy(t,t,this.RotationY),Zy(t,t,this.RotationZ),t}getProjectionMatrix(){let t=us();return Qy(t,this.fovy,this.aspect,this.near,this.far),t}getProjectionArray(){var t=new Float32Array(16);return t.set(this.getCameraViewProjMatrix(),0),t}getProjectionNumberArray(){return this.getCameraViewProjMatrix()}getCameraViewProjMatrix(){const t=us(),e=this.getViewMatrix(),s=this.getProjectionMatrix();return Zc(t,s,e),t}}class sw{input;bindings=[];mousePos=[0,0];lastMousePos=[0,0];mouseWheel_deltaY=0;get MousePos(){return this.mousePos}get LastMousePos(){return this.lastMousePos}get MouseWheel_deltaY(){return this.mouseWheel_deltaY}constructor(t){window.onkeydown=e=>this.kbKeyDownCallback(e),window.onkeyup=e=>this.kbKeyUpCallback(e),t.onmousedown=e=>this.msDownCallback(e),t.onmouseup=e=>this.msUpCallback(e),t.onmousemove=e=>this.msMoveCallback(e),t.onwheel=e=>this.msScrollCallback(e),t.oncontextmenu=e=>!1,this.input=new Map}checkBindings(){this.bindings.forEach(t=>{t.CheckIfPressed(this.input)})}kbKeyUpCallback(t){this.input.delete(t.key.toLowerCase()),this.checkBindings()}kbKeyDownCallback(t){this.input.set(t.key.toLowerCase(),0),this.checkBindings()}clickAndCheckBindings(t){this.input.set(t,0),this.checkBindings()}clickUpAndCheckBindings(t){this.input.delete(t),this.checkBindings()}msDownCallback(t){switch(t.button){case 0:this.clickAndCheckBindings("left_click");break;case 1:this.clickAndCheckBindings("wheel_click");break;case 2:this.clickAndCheckBindings("right_click");break}}msUpCallback(t){switch(t.button){case 0:this.clickUpAndCheckBindings("left_click");break;case 1:this.clickUpAndCheckBindings("wheel_click");break;case 2:this.clickUpAndCheckBindings("right_click");break}}msMoveCallback(t){this.lastMousePos=this.mousePos,this.mousePos=[t.x,t.y],this.input.set("mouse_move",0),this.checkBindings(),this.input.delete("mouse_move")}msScrollCallback(t){t.ctrlKey&&t.preventDefault(),this.mouseWheel_deltaY=t.deltaY,this.input.set("mouse_scroll",0),this.checkBindings(),this.input.delete("mouse_scroll")}addBinding(t){this.bindings.push(t)}}var va=(n=>(n[n.RENDER_CANVAS=0]="RENDER_CANVAS",n[n.FRAMERATE_CANVAS=1]="FRAMERATE_CANVAS",n))(va||{}),am=(n=>(n.POINT_LIST="point-list",n.TRIANGLE_LIST="triangle-list",n.LINE_STRIP="line-strip",n.LINE_LIST="line-list",n.TRIANGLE_STRIP="triangle-strip",n))(am||{});function ow(n,t,e){return n.createTexture({size:[t.clientWidth,t.clientHeight],format:"depth24plus-stencil8",usage:e})}function rw(n){return n.createView()}function iw(n){return{colorAttachments:[{view:void 0,clearValue:{r:.1,g:.1,b:.1,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:n,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store",stencilLoadOp:"clear",stencilClearValue:0,stencilStoreOp:"store"}}}function bp(n,t){if(n.length>0){switch(t){case 1:console.error("Faulty fragment shader: ");break;case 0:console.error("Faulty vertex shader: ");break;default:return}n.forEach(e=>{console.error(e.message)})}}function aw(n){if(n.device){const s=n.device.createShaderModule({code:n.vertexShaderCode}),o=n.device.createShaderModule({code:n.fragmentShaderCode});var t=s.getCompilationInfo(),e=o.getCompilationInfo();t.then(i=>{bp(i.messages,0)}),e.then(i=>{bp(i.messages,1)});const r=Float32Array.BYTES_PER_ELEMENT*4;return n.device.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"mainVertex",buffers:[{arrayStride:r,attributes:[{shaderLocation:0,offset:0,format:"float32x4"}]}]},fragment:{module:o,entryPoint:"mainFragment",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:n.topology,cullMode:"none",stripIndexFormat:n.stripIndexFormat},depthStencil:{depthWriteEnabled:!0,depthCompare:"always",format:"depth24plus-stencil8"}})}return null}function lw(n){return!!n}class cw{scene;_drawables=[];cameraProjectionArray;renderPassDescriptor;commandEncoder;renderContext;passEncoder;gpuCurrentTexture;RPAColorAttachment;depthTexture;depthTextureView;constructor(t){this.initRenderer(t)}initRenderer(t){this.initContexts(t.canvases),this.initRenderPassDescriptor(t.canvases[va.RENDER_CANVAS]),this.RPAColorAttachment=this.renderPassDescriptor.colorAttachments[0],this.initRenderingContext()}set Scene(t){this.scene=t,this.cameraProjectionArray=this.scene.ActiveCamera.getProjectionArray(),this._drawables=this.scene.Drawables}pushErrorScopes(){oe.pushErrorScope("validation"),oe.pushErrorScope("out-of-memory"),oe.pushErrorScope("internal")}popErrorScopes(){oe.popErrorScope().then(t=>{t&&console.error(`INTERNAL: ${t.message}`)}),oe.popErrorScope().then(t=>{t&&console.error(`OUT_OF_MEM: ${t.message}`)}),oe.popErrorScope().then(t=>{t&&console.error(`INTERNAL: ${t.message}`)})}initRenderingContext(){this.renderContext.configure({device:oe,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"})}updateCamera(){var t=this.scene.ActiveCamera;this.cameraProjectionArray.set(t.getProjectionArray(),0)}initRenderPassDescriptor(t){this.depthTexture=ow(oe,t,GPUTextureUsage.RENDER_ATTACHMENT),this.depthTextureView=rw(this.depthTexture),this.renderPassDescriptor=iw(this.depthTextureView)}initContexts(t){this.renderContext=t[va.RENDER_CANVAS].getContext("webgpu")}update(){oe&&this.updateCamera()}draw(){oe?(this.pushErrorScopes(),this.commandEncoder=oe.createCommandEncoder(),this.gpuCurrentTexture=this.renderContext.getCurrentTexture(),this.RPAColorAttachment.view=this.gpuCurrentTexture.createView(),this.passEncoder=this.commandEncoder.beginRenderPass(this.renderPassDescriptor),this._drawables?.forEach(t=>{t.Draw(this.passEncoder)}),this.passEncoder.end(),oe.queue.submit([this.commandEncoder.finish()]),this.popErrorScopes()):console.warn("Renderer: Draw() Skipped frame, device is loading.")}}class uw extends Ya{constructor(t){super(t)}}const Zi=0,or=1,rr=2;class hw{u;v;w;matrix_size;constructor(t){this.u=new Float32Array(t[0]*t[1]*t[2]),this.v=new Float32Array(t[0]*t[1]*t[2]),this.w=new Float32Array(t[0]*t[1]*t[2]),this.matrix_size=t}UGet(t,e,s){return this.u[t+e*this.matrix_size[1]+s*this.matrix_size[2]]}VGet(t,e,s){return this.v[t+e*this.matrix_size[1]+s*this.matrix_size[2]]}WGet(t,e,s){return this.w[t+e*this.matrix_size[1]+s*this.matrix_size[2]]}USet(t,e,s,o){this.u[t+e*this.matrix_size[1]+s*this.matrix_size[2]]=o}VSet(t,e,s,o){this.v[t+e*this.matrix_size[1]+s*this.matrix_size[2]]=o}WSet(t,e,s,o){this.w[t+e*this.matrix_size[1]+s*this.matrix_size[2]]=o}}class dw extends Ya{_cells=[];CELL_SIZE=[1,1,1];velocity;get NumberOfCells(){return this._cells.length}get CellPositionsF32(){const t=new Float32Array(this._cells.length*Float32Array.BYTES_PER_ELEMENT);let e=0;return this._cells.forEach(s=>{t.set(s.Position,e),e+=s.Position.length}),t}get CellRotationsF32(){const t=new Float32Array(this._cells.length*Float32Array.BYTES_PER_ELEMENT);let e=0;return this._cells.forEach(s=>{t.set(s.Rotation,e),e+=s.Rotation.length}),t}get CellScalesF32(){const t=new Float32Array(this._cells.length*Float32Array.BYTES_PER_ELEMENT);let e=0;return this._cells.forEach(s=>{t.set(s.Scale,e),e+=s.Scale.length}),t}get CellDataF32(){const t=new Float32Array(this._cells.length*3*4);var e=0;return this._cells.forEach(s=>{t.set([...s.Position,1],e),e+=s.Position.length+1,t.set([...s.Scale,1],e),e+=s.Scale.length+1,t.set([...s.Rotation,1],e),e+=s.Rotation.length+1}),t}get CellModelsF32(){const t=new Float32Array(this._cells.length*16);let e=0;return this._cells.forEach(s=>{t.set(s.ModelMatrix,e),e+=s.ModelMatrix.length}),t}buildGrid(t){var e=[this.X,this.Y,this.Z];for(let s=0;s<t[0];s++){for(let o=0;o<t[1];o++){for(let r=0;r<t[2];r++)this._cells.push(new uw({parameters:{X:e[Zi],Y:e[or],Z:e[rr],ScaleX:this.CELL_SIZE[Zi],ScaleY:this.CELL_SIZE[or],ScaleZ:this.CELL_SIZE[rr]}})),e[rr]+=this.CELL_SIZE[rr]*2;e[or]+=this.CELL_SIZE[or]*2,e[rr]=this.Z}e[Zi]+=this.CELL_SIZE[Zi]*2,e[or]=this.Y}}constructor(t,e){e?super(e):super(),this.buildGrid(t),this.velocity=new hw(t)}}class pw{_focusedDrawable;_cameras=new Array;_drawables=[];_grid;constructor(t){this._drawables=t.drawables??[],this._cameras=t.cameras,this._grid=new dw([8,2,8]),this._drawables&&this._drawables.length&&(this._focusedDrawable=this._drawables[0])}add(t){t&&(Array.isArray(t)?t.forEach(e=>{this._drawables.push(e)}):this._drawables.push(t))}get ActiveCamera(){if(this._cameras){for(var t=0;t<this._cameras.length;t++)if(this._cameras[t].Active)return this._cameras[t]}return console.error("Scene: No active camera."),null}get Grid(){return this._grid}get Drawables(){return this._drawables?this._drawables:(console.warn("Scene: Scene is empty."),null)}get FocusedDrawable(){return this._focusedDrawable}}class Rc{callback;keys;get Keys(){return this.keys}CheckIfPressed(t){let e=Array.from(t.keys());return e.length!=this.keys.length?!1:e.every(s=>this.keys.includes(s))?(this.pressed(),!0):!1}pressed(){this.callback!=null&&this.callback()}constructor(t,e){this.keys=t,this.callback=e}}class fw{Vertecies=[];Normals=[];Textures=[];Faces=[];SmoothShading=0;get VerteciesToFlatArray(){const t=[];return this.Vertecies.forEach(e=>{t.push(e[0]),t.push(e[1]),t.push(e[2]),t.push(1)}),t}get NormalsToFlatArray(){const t=[];return this.Normals.forEach(e=>{t.push(e[0]),t.push(e[1]),t.push(e[2])}),t}get TexturesToFlatArray(){const t=[];return this.Textures.forEach(e=>{t.push(e[0]),t.push(e[1])}),t}get VerteciesIndexesFlat(){const t=[];return this.Faces.forEach(e=>{e.forEach(s=>{t.push(s.vertexIndex)})}),t}get NormalIndexesFlat(){const t=[];return this.Faces.forEach(e=>{e.forEach(s=>{t.push(s.normalIndex)})}),t}get TextureIndexesFlat(){const t=[];return this.Faces.forEach(e=>{e.forEach(s=>{t.push(s.textureCoordIndex)})}),t}parseObjRow(t){const e=t.split(" ");switch(e[0]){case"v":const s=[Number.parseFloat(e[1]),Number.parseFloat(e[2]),Number.parseFloat(e[3])];this.Vertecies.push(s);break;case"vn":const o=[Number.parseFloat(e[1]),Number.parseFloat(e[2]),Number.parseFloat(e[3])];this.Normals.push(o);break;case"vt":const r=[Number.parseFloat(e[1]),Number.parseFloat(e[2])];this.Textures.push(r);break;case"s":this.SmoothShading=parseFloat(e[0]);break;case"f":const i=[];e.slice(1).map(a=>{const l=a.split("/"),c={vertexIndex:Number.parseFloat(l[0])-1,textureCoordIndex:Number.parseFloat(l[1])-1,normalIndex:Number.parseFloat(l[2])-1};i.push(c)}),this.Faces.push(i);break}}constructor(t){t.split(`
`).map(s=>this.parseObjRow(s))}}class Jc extends Float32Array{_buff;_device;_values;constructor(t,e,s,o){super(e),this._device=t,this._values=e,this._buff=this._device.createBuffer({size:this.length*this.BYTES_PER_ELEMENT,usage:s,label:o}),this.writeBuffer()}set Values(t){this.set(t,0),this.writeBuffer()}get Values(){return this._values}get Buffer(){return this._buff}writeBuffer(){this._device.queue.writeBuffer(this._buff,0,this.buffer,this.byteOffset,this.byteLength)}}class mw extends Uint32Array{_buff;_device;_values;constructor(t,e,s,o){super(e),this._device=t,this._values=e,this._buff=this._device.createBuffer({size:this.length*this.BYTES_PER_ELEMENT,usage:s,label:o}),this.writeBuffer()}set Values(t){this.set(t,0),this.writeBuffer()}get Values(){return this._values}get Buffer(){return this._buff}writeBuffer(){this._device.queue.writeBuffer(this._buff,0,this.buffer,this.byteOffset,this.byteLength)}}class gw{verteciesBuffer;buffers=[];bufferResources=[];name="";verteciesIndexBuf;renderPipeline;bindGroup;bindGroupInit=!1;get ShouldRedraw(){for(let t=0;t<this.bufferResources.length;t++)if(this.bufferResources[t].dirty===!0)return!0;return!1}constructor(t){if(!lw(oe)){console.error("Drawable: Drawable() No GPU available");return}this.buffers=t.shaderBuffers,this.renderPipeline=t.renderPipeline,this.name=t.drawableName??"",this.verteciesBuffer=t.verteciesBuf,this.verteciesIndexBuf=t.verteciesIndexBuf,this.initBindGroup()}initBindGroup(){var t=0;if(this.renderPipeline){var e=[];this.buffers.forEach(s=>{e.push({binding:t++,resource:{buffer:s.Buffer,label:`${s.Buffer.label}-bind-group-entry`}})}),this.bindGroup=oe.createBindGroup({layout:this.renderPipeline.getBindGroupLayout(0),entries:e,label:`${this.name}-bind-group`}),this.bindGroup&&(this.bindGroupInit=!0)}}resetDirtyFlags(){for(let t=0;t<this.bufferResources.length;t++)this.bufferResources[t].dirty=!1}Draw(t){this.bindGroupInit&&this.verteciesBuffer&&this.renderPipeline&&(t.setVertexBuffer(0,this.verteciesBuffer.Buffer),this.verteciesIndexBuf&&t.setIndexBuffer(this.verteciesIndexBuf.Buffer,"uint32",0),t.setPipeline(this.renderPipeline),t.setBindGroup(0,this.bindGroup),this.verteciesIndexBuf?t.drawIndexed(this.verteciesIndexBuf.length,1,0,0,0):t.draw(this.verteciesBuffer.length/4,1,0,0),this.resetDirtyFlags())}}var xw=`@fragment
fn mainFragment(
  @location(1) fragColor: vec4f
) -> @location(0) vec4f {
  return fragColor;
}`,bw=`@group(0) @binding(0) var<storage, read> modelMatrix: mat4x4f;
@group(0) @binding(1) var<uniform> cameraVP: mat4x4f;

struct VertexOutput {
  @builtin(position) Position: vec4f,
  @location(0) fragUV: vec2f,
  @location(1) fragColor: vec4f,
}

struct VertexInput {
  @location(0) position: vec4f,
}

@vertex
fn mainVertex(input: VertexInput) -> VertexOutput {
  var output: VertexOutput;
  var world = modelMatrix * input.position;
  var clipped = cameraVP * world;

  output.Position = clipped;
  output.fragColor = vec4(0, 0, 1, 0);

  return output;
}`;const yw=`# Blender 5.1.2
# www.blender.org
mtllib vector.mtl
g Cone_Mesh
v 0.000000 0.030981 -1.000000
v 0.195090 0.030981 -0.980785
v 0.382683 0.030981 -0.923880
v 0.555570 0.030981 -0.831470
v 0.707107 0.030981 -0.707107
v 0.831470 0.030981 -0.555570
v 0.923880 0.030981 -0.382683
v 0.980785 0.030981 -0.195090
v 1.000000 0.030981 0.000000
v 0.980785 0.030981 0.195090
v 0.923880 0.030981 0.382683
v 0.831470 0.030981 0.555570
v 0.707107 0.030981 0.707107
v 0.555570 0.030981 0.831470
v 0.382683 0.030981 0.923880
v 0.195090 0.030981 0.980785
v 0.000000 0.030981 1.000000
v -0.195090 0.030981 0.980785
v -0.382683 0.030981 0.923880
v -0.555570 0.030981 0.831470
v -0.707107 0.030981 0.707107
v -0.831470 0.030981 0.555570
v -0.923880 0.030981 0.382683
v -0.980785 0.030981 0.195090
v -1.000000 0.030981 0.000000
v -0.980785 0.030981 -0.195090
v -0.923880 0.030981 -0.382683
v -0.831470 0.030981 -0.555570
v -0.707107 0.030981 -0.707107
v -0.555570 0.030981 -0.831470
v -0.382683 0.030981 -0.923880
v -0.195090 0.030981 -0.980785
v 0.000000 2.030981 0.000000
vn 0.0878 0.4455 -0.8910
vn 0.2599 0.4455 -0.8567
vn 0.4220 0.4455 -0.7896
vn 0.5680 0.4455 -0.6921
vn 0.6921 0.4455 -0.5680
vn 0.7896 0.4455 -0.4220
vn 0.8567 0.4455 -0.2599
vn 0.8910 0.4455 -0.0878
vn 0.8910 0.4455 0.0878
vn 0.8567 0.4455 0.2599
vn 0.7896 0.4455 0.4220
vn 0.6921 0.4455 0.5680
vn 0.5680 0.4455 0.6921
vn 0.4220 0.4455 0.7896
vn 0.2599 0.4455 0.8567
vn 0.0878 0.4455 0.8910
vn -0.0878 0.4455 0.8910
vn -0.2599 0.4455 0.8567
vn -0.4220 0.4455 0.7896
vn -0.5680 0.4455 0.6921
vn -0.6921 0.4455 0.5680
vn -0.7896 0.4455 0.4220
vn -0.8567 0.4455 0.2599
vn -0.8910 0.4455 0.0878
vn -0.8910 0.4455 -0.0878
vn -0.8567 0.4455 -0.2599
vn -0.7896 0.4455 -0.4220
vn -0.6921 0.4455 -0.5680
vn -0.5680 0.4455 -0.6921
vn -0.4220 0.4455 -0.7896
vn -0.0000 -1.0000 -0.0000
vn -0.2599 0.4455 -0.8567
vn -0.0878 0.4455 -0.8910
vt 0.250000 0.490000
vt 0.250000 0.250000
vt 0.296822 0.485388
vt 0.341844 0.471731
vt 0.383337 0.449553
vt 0.419706 0.419706
vt 0.449553 0.383337
vt 0.471731 0.341844
vt 0.485388 0.296822
vt 0.490000 0.250000
vt 0.485388 0.203178
vt 0.471731 0.158156
vt 0.449553 0.116663
vt 0.419706 0.080294
vt 0.383337 0.050447
vt 0.341844 0.028269
vt 0.296822 0.014612
vt 0.250000 0.010000
vt 0.203178 0.014612
vt 0.158156 0.028269
vt 0.116663 0.050447
vt 0.080294 0.080294
vt 0.050447 0.116663
vt 0.028269 0.158156
vt 0.014612 0.203178
vt 0.010000 0.250000
vt 0.014612 0.296822
vt 0.028269 0.341844
vt 0.050447 0.383337
vt 0.080294 0.419706
vt 0.116663 0.449553
vt 0.158156 0.471731
vt 0.796822 0.014612
vt 0.514612 0.203178
vt 0.703178 0.485388
vt 0.203178 0.485388
vt 0.750000 0.490000
vt 0.796822 0.485388
vt 0.841844 0.471731
vt 0.883337 0.449553
vt 0.919706 0.419706
vt 0.949553 0.383337
vt 0.971731 0.341844
vt 0.985388 0.296822
vt 0.990000 0.250000
vt 0.985388 0.203178
vt 0.971731 0.158156
vt 0.949553 0.116663
vt 0.919706 0.080294
vt 0.883337 0.050447
vt 0.841844 0.028269
vt 0.750000 0.010000
vt 0.703178 0.014612
vt 0.658156 0.028269
vt 0.616663 0.050447
vt 0.580294 0.080294
vt 0.550447 0.116663
vt 0.528269 0.158156
vt 0.510000 0.250000
vt 0.514612 0.296822
vt 0.528269 0.341844
vt 0.550447 0.383337
vt 0.580294 0.419706
vt 0.616663 0.449553
vt 0.658156 0.471731
s 0
f 1/1/1 33/2/1 2/3/1
f 2/3/2 33/2/2 3/4/2
f 3/4/3 33/2/3 4/5/3
f 4/5/4 33/2/4 5/6/4
f 5/6/5 33/2/5 6/7/5
f 6/7/6 33/2/6 7/8/6
f 7/8/7 33/2/7 8/9/7
f 8/9/8 33/2/8 9/10/8
f 9/10/9 33/2/9 10/11/9
f 10/11/10 33/2/10 11/12/10
f 11/12/11 33/2/11 12/13/11
f 12/13/12 33/2/12 13/14/12
f 13/14/13 33/2/13 14/15/13
f 14/15/14 33/2/14 15/16/14
f 15/16/15 33/2/15 16/17/15
f 16/17/16 33/2/16 17/18/16
f 17/18/17 33/2/17 18/19/17
f 18/19/18 33/2/18 19/20/18
f 19/20/19 33/2/19 20/21/19
f 20/21/20 33/2/20 21/22/20
f 21/22/21 33/2/21 22/23/21
f 22/23/22 33/2/22 23/24/22
f 23/24/23 33/2/23 24/25/23
f 24/25/24 33/2/24 25/26/24
f 25/26/25 33/2/25 26/27/25
f 26/27/26 33/2/26 27/28/26
f 27/28/27 33/2/27 28/29/27
f 28/29/28 33/2/28 29/30/28
f 29/30/29 33/2/29 30/31/29
f 30/31/30 33/2/30 31/32/30
f 16/33/31 24/34/31 32/35/31
f 31/32/32 33/2/32 32/36/32
f 32/36/33 33/2/33 1/1/33
f 32/35/31 1/37/31 2/38/31
f 2/38/31 3/39/31 4/40/31
f 4/40/31 5/41/31 6/42/31
f 6/42/31 7/43/31 8/44/31
f 8/44/31 9/45/31 10/46/31
f 10/46/31 11/47/31 12/48/31
f 12/48/31 13/49/31 14/50/31
f 14/50/31 15/51/31 16/33/31
f 16/33/31 17/52/31 18/53/31
f 18/53/31 19/54/31 20/55/31
f 20/55/31 21/56/31 22/57/31
f 22/57/31 23/58/31 24/34/31
f 24/34/31 25/59/31 26/60/31
f 26/60/31 27/61/31 28/62/31
f 28/62/31 29/63/31 30/64/31
f 30/64/31 31/65/31 32/35/31
f 32/35/31 2/38/31 4/40/31
f 4/40/31 6/42/31 8/44/31
f 8/44/31 10/46/31 12/48/31
f 12/48/31 14/50/31 16/33/31
f 16/33/31 18/53/31 20/55/31
f 20/55/31 22/57/31 24/34/31
f 24/34/31 26/60/31 28/62/31
f 28/62/31 30/64/31 32/35/31
f 32/35/31 4/40/31 8/44/31
f 8/44/31 12/48/31 16/33/31
f 16/33/31 20/55/31 24/34/31
f 24/34/31 28/62/31 32/35/31
f 32/35/31 8/44/31 16/33/31
g Cylinder_Mesh
v 0.000000 -1.863025 -0.500000
v 0.000000 0.136975 -0.500000
v 0.097545 -1.863025 -0.490393
v 0.097545 0.136975 -0.490393
v 0.191342 -1.863025 -0.461940
v 0.191342 0.136975 -0.461940
v 0.277785 -1.863025 -0.415735
v 0.277785 0.136975 -0.415735
v 0.353553 -1.863025 -0.353553
v 0.353553 0.136975 -0.353553
v 0.415735 -1.863025 -0.277785
v 0.415735 0.136975 -0.277785
v 0.461940 -1.863025 -0.191342
v 0.461940 0.136975 -0.191342
v 0.490393 -1.863025 -0.097545
v 0.490393 0.136975 -0.097545
v 0.500000 -1.863025 0.000000
v 0.500000 0.136975 0.000000
v 0.490393 -1.863025 0.097545
v 0.490393 0.136975 0.097545
v 0.461940 -1.863025 0.191342
v 0.461940 0.136975 0.191342
v 0.415735 -1.863025 0.277785
v 0.415735 0.136975 0.277785
v 0.353553 -1.863025 0.353553
v 0.353553 0.136975 0.353553
v 0.277785 -1.863025 0.415735
v 0.277785 0.136975 0.415735
v 0.191342 -1.863025 0.461940
v 0.191342 0.136975 0.461940
v 0.097545 -1.863025 0.490393
v 0.097545 0.136975 0.490393
v 0.000000 -1.863025 0.500000
v 0.000000 0.136975 0.500000
v -0.097545 -1.863025 0.490393
v -0.097545 0.136975 0.490393
v -0.191342 -1.863025 0.461940
v -0.191342 0.136975 0.461940
v -0.277785 -1.863025 0.415735
v -0.277785 0.136975 0.415735
v -0.353553 -1.863025 0.353553
v -0.353553 0.136975 0.353553
v -0.415735 -1.863025 0.277785
v -0.415735 0.136975 0.277785
v -0.461940 -1.863025 0.191342
v -0.461940 0.136975 0.191342
v -0.490393 -1.863025 0.097545
v -0.490393 0.136975 0.097545
v -0.500000 -1.863025 0.000000
v -0.500000 0.136975 0.000000
v -0.490393 -1.863025 -0.097545
v -0.490393 0.136975 -0.097545
v -0.461940 -1.863025 -0.191342
v -0.461940 0.136975 -0.191342
v -0.415735 -1.863025 -0.277785
v -0.415735 0.136975 -0.277785
v -0.353553 -1.863025 -0.353553
v -0.353553 0.136975 -0.353553
v -0.277785 -1.863025 -0.415735
v -0.277785 0.136975 -0.415735
v -0.191342 -1.863025 -0.461940
v -0.191342 0.136975 -0.461940
v -0.097545 -1.863025 -0.490393
v -0.097545 0.136975 -0.490393
vn 0.0980 -0.0000 -0.9952
vn 0.2903 -0.0000 -0.9569
vn 0.4714 -0.0000 -0.8819
vn 0.6344 -0.0000 -0.7730
vn 0.7730 -0.0000 -0.6344
vn 0.8819 -0.0000 -0.4714
vn 0.9569 -0.0000 -0.2903
vn 0.9952 -0.0000 -0.0980
vn 0.9952 -0.0000 0.0980
vn 0.9569 -0.0000 0.2903
vn 0.8819 -0.0000 0.4714
vn 0.7730 -0.0000 0.6344
vn 0.6344 -0.0000 0.7730
vn 0.4714 -0.0000 0.8819
vn 0.2903 -0.0000 0.9569
vn 0.0980 -0.0000 0.9952
vn -0.0980 -0.0000 0.9952
vn -0.2903 -0.0000 0.9569
vn -0.4714 -0.0000 0.8819
vn -0.6344 -0.0000 0.7730
vn -0.7730 -0.0000 0.6344
vn -0.8819 -0.0000 0.4714
vn -0.9569 -0.0000 0.2903
vn -0.9952 -0.0000 0.0980
vn -0.9952 -0.0000 -0.0980
vn -0.9569 -0.0000 -0.2903
vn -0.8819 -0.0000 -0.4714
vn -0.7730 -0.0000 -0.6344
vn -0.6344 -0.0000 -0.7730
vn -0.4714 -0.0000 -0.8819
vn -0.0000 1.0000 -0.0000
vn -0.2903 -0.0000 -0.9569
vn -0.0980 -0.0000 -0.9952
vn -0.0000 -1.0000 -0.0000
vt 1.000000 1.000000
vt 0.968750 0.500000
vt 1.000000 0.500000
vt 0.968750 1.000000
vt 0.937500 0.500000
vt 0.937500 1.000000
vt 0.906250 0.500000
vt 0.906250 1.000000
vt 0.875000 0.500000
vt 0.875000 1.000000
vt 0.843750 0.500000
vt 0.843750 1.000000
vt 0.812500 0.500000
vt 0.812500 1.000000
vt 0.781250 0.500000
vt 0.781250 1.000000
vt 0.750000 0.500000
vt 0.750000 1.000000
vt 0.718750 0.500000
vt 0.718750 1.000000
vt 0.687500 0.500000
vt 0.687500 1.000000
vt 0.656250 0.500000
vt 0.656250 1.000000
vt 0.625000 0.500000
vt 0.625000 1.000000
vt 0.593750 0.500000
vt 0.593750 1.000000
vt 0.562500 0.500000
vt 0.562500 1.000000
vt 0.531250 0.500000
vt 0.531250 1.000000
vt 0.500000 0.500000
vt 0.500000 1.000000
vt 0.468750 0.500000
vt 0.468750 1.000000
vt 0.437500 0.500000
vt 0.437500 1.000000
vt 0.406250 0.500000
vt 0.406250 1.000000
vt 0.375000 0.500000
vt 0.375000 1.000000
vt 0.343750 0.500000
vt 0.343750 1.000000
vt 0.312500 0.500000
vt 0.312500 1.000000
vt 0.281250 0.500000
vt 0.281250 1.000000
vt 0.250000 0.500000
vt 0.250000 1.000000
vt 0.218750 0.500000
vt 0.218750 1.000000
vt 0.187500 0.500000
vt 0.187500 1.000000
vt 0.156250 0.500000
vt 0.156250 1.000000
vt 0.125000 0.500000
vt 0.125000 1.000000
vt 0.093750 0.500000
vt 0.093750 1.000000
vt 0.062500 0.500000
vt 0.158156 0.028269
vt 0.471731 0.158156
vt 0.341844 0.471731
vt 0.062500 1.000000
vt 0.031250 0.500000
vt 0.031250 1.000000
vt 0.000000 0.500000
vt 0.796822 0.014612
vt 0.514612 0.203178
vt 0.703178 0.485388
vt 0.296822 0.485388
vt 0.250000 0.490000
vt 0.203178 0.485388
vt 0.158156 0.471731
vt 0.116663 0.449553
vt 0.080294 0.419706
vt 0.050447 0.383337
vt 0.028269 0.341844
vt 0.014612 0.296822
vt 0.010000 0.250000
vt 0.014612 0.203178
vt 0.028269 0.158156
vt 0.050447 0.116663
vt 0.080294 0.080294
vt 0.116663 0.050447
vt 0.203178 0.014612
vt 0.250000 0.010000
vt 0.296822 0.014612
vt 0.341844 0.028269
vt 0.383337 0.050447
vt 0.419706 0.080294
vt 0.449553 0.116663
vt 0.485388 0.203178
vt 0.490000 0.250000
vt 0.485388 0.296822
vt 0.471731 0.341844
vt 0.449553 0.383337
vt 0.419706 0.419706
vt 0.383337 0.449553
vt 0.000000 1.000000
vt 0.750000 0.490000
vt 0.796822 0.485388
vt 0.841844 0.471731
vt 0.883337 0.449553
vt 0.919706 0.419706
vt 0.949553 0.383337
vt 0.971731 0.341844
vt 0.985388 0.296822
vt 0.990000 0.250000
vt 0.985388 0.203178
vt 0.971731 0.158156
vt 0.949553 0.116663
vt 0.919706 0.080294
vt 0.883337 0.050447
vt 0.841844 0.028269
vt 0.750000 0.010000
vt 0.703178 0.014612
vt 0.658156 0.028269
vt 0.616663 0.050447
vt 0.580294 0.080294
vt 0.550447 0.116663
vt 0.528269 0.158156
vt 0.510000 0.250000
vt 0.514612 0.296822
vt 0.528269 0.341844
vt 0.550447 0.383337
vt 0.580294 0.419706
vt 0.616663 0.449553
vt 0.658156 0.471731
s 0
f 35/66/34 36/67/34 34/68/34
f 37/69/35 38/70/35 36/67/35
f 39/71/36 40/72/36 38/70/36
f 41/73/37 42/74/37 40/72/37
f 43/75/38 44/76/38 42/74/38
f 45/77/39 46/78/39 44/76/39
f 47/79/40 48/80/40 46/78/40
f 49/81/41 50/82/41 48/80/41
f 51/83/42 52/84/42 50/82/42
f 53/85/43 54/86/43 52/84/43
f 55/87/44 56/88/44 54/86/44
f 57/89/45 58/90/45 56/88/45
f 59/91/46 60/92/46 58/90/46
f 61/93/47 62/94/47 60/92/47
f 63/95/48 64/96/48 62/94/48
f 65/97/49 66/98/49 64/96/49
f 67/99/50 68/100/50 66/98/50
f 69/101/51 70/102/51 68/100/51
f 71/103/52 72/104/52 70/102/52
f 73/105/53 74/106/53 72/104/53
f 75/107/54 76/108/54 74/106/54
f 77/109/55 78/110/55 76/108/55
f 79/111/56 80/112/56 78/110/56
f 81/113/57 82/114/57 80/112/57
f 83/115/58 84/116/58 82/114/58
f 85/117/59 86/118/59 84/116/59
f 87/119/60 88/120/60 86/118/60
f 89/121/61 90/122/61 88/120/61
f 91/123/62 92/124/62 90/122/62
f 93/125/63 94/126/63 92/124/63
f 71/127/64 55/128/64 39/129/64
f 95/130/65 96/131/65 94/126/65
f 97/132/66 34/133/66 96/131/66
f 64/134/67 80/135/67 96/136/67
f 35/66/34 37/69/34 36/67/34
f 37/69/35 39/71/35 38/70/35
f 39/71/36 41/73/36 40/72/36
f 41/73/37 43/75/37 42/74/37
f 43/75/38 45/77/38 44/76/38
f 45/77/39 47/79/39 46/78/39
f 47/79/40 49/81/40 48/80/40
f 49/81/41 51/83/41 50/82/41
f 51/83/42 53/85/42 52/84/42
f 53/85/43 55/87/43 54/86/43
f 55/87/44 57/89/44 56/88/44
f 57/89/45 59/91/45 58/90/45
f 59/91/46 61/93/46 60/92/46
f 61/93/47 63/95/47 62/94/47
f 63/95/48 65/97/48 64/96/48
f 65/97/49 67/99/49 66/98/49
f 67/99/50 69/101/50 68/100/50
f 69/101/51 71/103/51 70/102/51
f 71/103/52 73/105/52 72/104/52
f 73/105/53 75/107/53 74/106/53
f 75/107/54 77/109/54 76/108/54
f 77/109/55 79/111/55 78/110/55
f 79/111/56 81/113/56 80/112/56
f 81/113/57 83/115/57 82/114/57
f 83/115/58 85/117/58 84/116/58
f 85/117/59 87/119/59 86/118/59
f 87/119/60 89/121/60 88/120/60
f 89/121/61 91/123/61 90/122/61
f 91/123/62 93/125/62 92/124/62
f 93/125/63 95/130/63 94/126/63
f 39/129/64 37/137/64 35/138/64
f 35/138/64 97/139/64 95/140/64
f 95/140/64 93/141/64 91/142/64
f 91/142/64 89/143/64 87/144/64
f 87/144/64 85/145/64 83/146/64
f 83/146/64 81/147/64 79/148/64
f 79/148/64 77/149/64 75/150/64
f 75/150/64 73/151/64 71/127/64
f 71/127/64 69/152/64 67/153/64
f 67/153/64 65/154/64 63/155/64
f 63/155/64 61/156/64 59/157/64
f 59/157/64 57/158/64 55/128/64
f 55/128/64 53/159/64 51/160/64
f 51/160/64 49/161/64 47/162/64
f 47/162/64 45/163/64 43/164/64
f 43/164/64 41/165/64 39/129/64
f 39/129/64 35/138/64 95/140/64
f 95/140/64 91/142/64 87/144/64
f 87/144/64 83/146/64 79/148/64
f 79/148/64 75/150/64 71/127/64
f 71/127/64 67/153/64 63/155/64
f 63/155/64 59/157/64 55/128/64
f 55/128/64 51/160/64 47/162/64
f 47/162/64 43/164/64 39/129/64
f 39/129/64 95/140/64 87/144/64
f 87/144/64 79/148/64 71/127/64
f 71/127/64 63/155/64 55/128/64
f 55/128/64 47/162/64 39/129/64
f 39/129/64 87/144/64 71/127/64
f 95/130/65 97/132/65 96/131/65
f 97/132/66 35/166/66 34/133/66
f 96/136/67 34/167/67 36/168/67
f 36/168/67 38/169/67 40/170/67
f 40/170/67 42/171/67 44/172/67
f 44/172/67 46/173/67 48/174/67
f 48/174/67 50/175/67 52/176/67
f 52/176/67 54/177/67 56/178/67
f 56/178/67 58/179/67 60/180/67
f 60/180/67 62/181/67 64/134/67
f 64/134/67 66/182/67 68/183/67
f 68/183/67 70/184/67 72/185/67
f 72/185/67 74/186/67 76/187/67
f 76/187/67 78/188/67 80/135/67
f 80/135/67 82/189/67 84/190/67
f 84/190/67 86/191/67 88/192/67
f 88/192/67 90/193/67 92/194/67
f 92/194/67 94/195/67 96/136/67
f 96/136/67 36/168/67 40/170/67
f 40/170/67 44/172/67 48/174/67
f 48/174/67 52/176/67 56/178/67
f 56/178/67 60/180/67 64/134/67
f 64/134/67 68/183/67 72/185/67
f 72/185/67 76/187/67 80/135/67
f 80/135/67 84/190/67 88/192/67
f 88/192/67 92/194/67 96/136/67
f 96/136/67 40/170/67 48/174/67
f 48/174/67 56/178/67 64/134/67
f 64/134/67 72/185/67 80/135/67
f 80/135/67 88/192/67 96/136/67
f 96/136/67 48/174/67 64/134/67
`;class ww extends gw{constructor(t){const e=new fw(t.vertecies),s=aw({device:oe,vertexShaderCode:t.vertexCode,fragmentShaderCode:t.fragmentCode,topology:am.TRIANGLE_LIST});let o=new Jc(oe,e.VerteciesToFlatArray,GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,"outline_shader_vertecies_buffer"),r=new mw(oe,e.VerteciesIndexesFlat,GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST,"vector_shader_vertecies_index_buffer"),i=new Jc(oe,t.baseObject.ModelMatrix,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,"vector_shader_model_matrix_buffer");s&&super({shaderBuffers:[i,t.cpmBuffer],verteciesBuf:o,renderPipeline:s,verteciesIndexBuf:r,drawableName:t.name})}}class vw extends ww{_object;constructor(t,e,s,o){let r=new Ya;r.X=t.X,r.Y=t.Y,r.Z=t.Z,r.RotationX=e.X,r.RotationY=e.Y,r.RotationZ=e.Z,r.ScaleX=s.X,r.ScaleY=s.Y,r.ScaleZ=s.Z,r.name=o??"Vector",super({baseObject:r,vertexCode:bw,fragmentCode:xw,vertecies:yw,name:o,cpmBuffer:jn}),this._object=r}}const Cw=45;var oe,jn;let $w=class{canvases=new Array(2);mainCam;mainRenderer;inputHandler;cameraZoomRate=1;constructor(){var t=document.getElementById("webGpu-context");t&&this.initGpuDevice().then(()=>{console.log("Engine() device initialised"),this.setupCanvas(t),this.initCamera(t),this.initRenderer(),this.initEngine(t)})}async initGpuDevice(){if(navigator.gpu){const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)return;oe=await t.requestDevice()}else console.error("WebGPU is not available for your browser. Please check compatibility.")}setupCanvas(t){t.width=window.innerWidth,t.height=window.innerHeight,this.canvases[va.RENDER_CANVAS]=t}initCamera(t){this.mainCam=new nw(t.width/t.height,!0),this.mainCam.Z=5,jn=new Jc(oe,this.mainCam.getProjectionNumberArray(),GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE,"outline_cpm_buffer")}initRenderer(){if(!this.mainCam||!jn)return;this.mainRenderer=new cw({canvases:this.canvases});const t=this.initScene();t&&(this.mainRenderer.Scene=t)}initScene(){const t=[];let e=new vw(new Ke.Vector3([0,0,0]),new Ke.Vector3([0,0,0]),new Ke.Vector3([0,0,0]),"Test");return t.push(e),console.log("added test drawable"),console.log(e),new pw({cameras:[this.mainCam],drawables:t})}initEngine(t){this.initInputCallbacks(t),this.beginMainRenderingLoop()}initInputCallbacks(t){this.inputHandler=new sw(t),this.inputHandler.addBinding(new Rc(["shift","mouse_move","left_click"],this.cameraMoveCallback)),this.inputHandler.addBinding(new Rc(["left_click","mouse_move"],this.cameraRotateCallback)),this.inputHandler.addBinding(new Rc(["control","mouse_scroll"],this.cameraZoomCallback))}cameraMoveCallback=()=>{if(!this.inputHandler||!jn)return;const t=this.inputHandler.MousePos[0],e=this.inputHandler.MousePos[1],s=this.inputHandler.LastMousePos[0],o=this.inputHandler.LastMousePos[1];if(s>0&&o>0&&this.mainCam){const r=t-s,i=e-o;this.mainCam.X-=r/10,this.mainCam.Y+=i/10,this.mainCam.LookAt=ha(this.mainCam.LookAt[0]-r/10,this.mainCam.LookAt[1]+i/10,this.mainCam.LookAt[2]),jn.Values=this.mainCam.getProjectionNumberArray()}};cameraRotateCallback=()=>{if(!this.inputHandler||!jn)return;const t=this.inputHandler.MousePos[0],e=this.inputHandler.MousePos[1],s=this.inputHandler.LastMousePos[0],o=this.inputHandler.LastMousePos[1];if(s>0&&o>0&&this.mainCam){const r=t-s,i=e-o;this.mainCam.RotationX+=i/100,this.mainCam.RotationY+=r/100,jn.Values=this.mainCam.getProjectionNumberArray()}};cameraZoomCallback=()=>{!this.mainCam||!this.inputHandler||!jn||(this.inputHandler.MouseWheel_deltaY>0?this.mainCam.Z+=this.cameraZoomRate:this.mainCam.Z-this.cameraZoomRate>0&&(this.mainCam.Z-=this.cameraZoomRate),this.mainCam.Z-this.cameraZoomRate<=0&&(this.cameraZoomRate/=100),this.cameraZoomRate<1&&this.inputHandler.MouseWheel_deltaY>0&&(this.cameraZoomRate*=10),jn.Values=this.mainCam.getProjectionNumberArray())};resizeContextsToWindow(){this.canvases&&this.mainCam&&(console.log("[DEBUG] Window resized, updating..."),this.canvases[0].width=window.innerWidth,this.canvases[0].height=window.innerHeight,this.canvases[1].width=window.innerWidth,this.mainCam.aspect=this.canvases[0].width/this.canvases[0].height)}beginMainRenderingLoop(){const t=()=>{this.mainRenderer?.update(),this.mainRenderer?.draw(),setTimeout(()=>{requestAnimationFrame(t)},1e3/Cw)};requestAnimationFrame(t)}};const Iw=1e-7,kw=1e-4;class lm{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Lu{refCount(t){return Ve("refCount")}incRef(t){return Ve("incRef")}timerAvailable(){return!0}time(t){return Ve("time")}read(t){return Ve("read")}readSync(t){return Ve("readSync")}readToGPU(t,e){return Ve("readToGPU")}numDataIds(){return Ve("numDataIds")}disposeData(t,e){return Ve("disposeData")}write(t,e,s){return Ve("write")}move(t,e,s,o,r){return Ve("move")}createTensorFromGPUData(t,e,s){return Ve("createTensorFromGPUData")}memory(){return Ve("memory")}floatPrecision(){return Ve("floatPrecision")}epsilon(){return this.floatPrecision()===32?Iw:kw}dispose(){return Ve("dispose")}}function Ve(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function Sw(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,yo(n,t,e)}function Hs(n,t,e){return Math.max(n,Math.min(t,e))}function Pu(n){return n%2===0?n:n+1}function yo(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function Nw(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function I(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Mu(n,t,e=""){I(Et(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function cm(n){I(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function H(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Et(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function To(n){return n%1===0}function Qc(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function Co(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function yp(n,t=o=>0,e,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const l=t(i);if(e!=null&&i>=e){r();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function um(n,t){let e=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[s]=t/e,o}function wt(n,t){const e=t.length;return n=n==null?t.map((s,o)=>o):[].concat(n),I(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),I(n.every(s=>To(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Is(n,t){const e=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,r=t==null||o?null:wt(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function ve(n,t){return Yt(n,t)}function Yt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Tw(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function Ew(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function hm(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function Ca(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Rw(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Ar(n){return typeof n=="string"||n instanceof String}function Aw(n){return typeof n=="boolean"}function tu(n){return typeof n=="number"}function Bo(n){return Array.isArray(n)?Bo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":tu(n)?"float32":Ar(n)?"string":Aw(n)?"bool":"float32"}function eu(n){return!!(n&&n.constructor&&n.call&&n.apply)}function nu(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function lt(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function dm(n,t,e,s=!1){const o=new Array;if(t.length===1){const r=t[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=e[n+i]}else{const r=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<r;l++)o[l]=dm(n+l*a,i,e,s)}return o}function wn(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((o,r)=>o*r)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return dm(0,n,t,e)}function Dw(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function Bu(n,t){const e=Ce(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Ce(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function pm(n,t){const e=n.reduce((s,o)=>s*o,1);if(t==null||t==="float32")return wn(n,new Float32Array(e));if(t==="int32")return wn(n,new Int32Array(e));if(t==="bool")return wn(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function es(n){n.forEach(t=>{I(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function Fn(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=e[o]*n[o];return s}function zo(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/e[o]),n-=s[o]*e[o];return s[s.length-1]=n,s}function zu(n){return n&&n.then&&typeof n.then=="function"}const wp="tfjsflags";class Fw{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=_w,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(zu(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);wp in t&&t[wp].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=Lw(o,r)})}}function _w(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(Ow(t,s[0],s[1]),s.join("="))),t}function Ow(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Lw(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function V(){return fm}let fm=null;function Pw(n){fm=n}let Ac;function mm(){if(Ac==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Ac=n}return Ac}function Mw(){const n=mm();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Vu(n,t){const e=Mw();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const Za="Abs",Dr="Acos",Fr="Acosh",Vo="Add",Wu="AddN",Uu="All",Gu="Any",Ja="ArgMax",Qa="ArgMin",_r="Asin",Or="Asinh",Lr="Atan",Pr="Atanh",Mr="Atan2",tl="AvgPool",Hu="AvgPoolGrad",el="AvgPool3D",ju="AvgPool3DGrad",nl="BatchMatMul",sl="BatchToSpaceND",Xu="Bincount",Ku="BitwiseAnd",Bw="BroadcastTo",gm="BroadcastArgs",Br="Cast",zr="Ceil",Vr="ClipByValue",qu="Complex",ol="ComplexAbs",rl="Concat",il="Conv2D",Yu="Conv2DBackpropFilter",al="Conv2DBackpropInput",ll="Conv3D",Zu="Conv3DBackpropFilterV2",Ju="Conv3DBackpropInputV2",Wr="Cos",Ur="Cosh",Qu="Cumprod",cl="Cumsum",th="CropAndResize",eh="DenseBincount",nh="DepthToSpace",ul="DepthwiseConv2dNative",sh="DepthwiseConv2dNativeBackpropFilter",oh="DepthwiseConv2dNativeBackpropInput",xm="Diag",hl="Dilation2D",su="Dilation2DBackpropInput",ou="Dilation2DBackpropFilter",zw="Draw",Gr="RealDiv",rh="Einsum",Hr="Elu",ih="EluGrad",jr="Erf",dl="Equal",Xr="Exp",pl="ExpandDims",Kr="Expm1",ah="FFT",lh="Fill",ch="FlipLeftRight",qr="Floor",Yr="FloorDiv",fl="FusedBatchNorm",ml="GatherV2",bm="GatherNd",gl="Greater",Zr="GreaterEqual",Jr="Identity",uh="IFFT",hh="Imag",Qr="IsFinite",ti="IsInf",ei="IsNan",xl="LeakyRelu",bl="Less",yl="LessEqual",ym="LinSpace",ni="Log",si="Log1p",wl="LogicalAnd",vl="LogicalNot",Cl="LogicalOr",Vw="LogSoftmax",$l="LRN",dh="LRNGrad",Il="Max",oi="Maximum",kl="MaxPool",ph="MaxPoolGrad",Sl="MaxPool3D",fh="MaxPool3DGrad",wm="MaxPoolWithArgmax",Nl="Mean",Tl="Min",ri="Minimum",El="MirrorPad",ii="Mod",vm="Multinomial",ai="Multiply",Rl="Neg",Al="NotEqual",mh="NonMaxSuppressionV3",gh="NonMaxSuppressionV4",xh="NonMaxSuppressionV5",Dl="OnesLike",Fl="OneHot",_l="Pack",Ol="PadV2",li="Pow",Ll="Prelu",Pl="Prod",Cm="RaggedGather",$m="RaggedRange",Im="RaggedTensorToTensor",bh="Range",yh="Real",ci="Reciprocal",ui="Relu",Ml="Reshape",Bl="ResizeNearestNeighbor",wh="ResizeNearestNeighborGrad",zl="ResizeBilinear",vh="ResizeBilinearGrad",hi="Relu6",Vl="Reverse",di="Round",pi="Rsqrt",km="ScatterNd",Sm="TensorScatterUpdate",Nm="SearchSorted",Wl="Select",fi="Selu",Ul="Slice",mi="Sin",gi="Sinh",xi="Sign",bi="Sigmoid",yi="Softplus",wi="Sqrt",Gl="Sum",Hl="SpaceToBatchND",jl="SplitV",Xl="Softmax",Tm="SparseFillEmptyRows",Em="SparseReshape",Rm="SparseSegmentMean",Am="SparseSegmentSum",Dm="SparseToDense",vi="SquaredDifference",Ch="Square",$h="StaticRegexReplace",Ih="StridedSlice",Fm="StringNGrams",_m="StringSplit",Om="StringToHashBucketFast",Ci="Sub",$i="Tan",Ii="Tanh",ki="Tile",kh="TopK",Sh="Transform",$o="Transpose",Nh="Unique",Kl="Unpack",ql="UnsortedSegmentSum",Yl="ZerosLike",Si="Step",Ww="FromPixels",Th="RotateWithOffset",$a="_FusedMatMul",Ia="FusedConv2D",Lm="FusedDepthwiseConv2D";function qe(...n){V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(...n)}function Uw(...n){V().getBool("IS_TEST")||V().getBool("PROD")||console.log(...n)}const ka=Vu("kernelRegistry",()=>new Map),ru=Vu("gradRegistry",()=>new Map);function vp(n,t){const e=Mm(n,t);return ka.get(e)}function Cp(n){return ru.get(n)}function $p(n){const t=ka.entries(),e=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&e.push(i)}return e}function Pm(n){const{kernelName:t,backendName:e}=n,s=Mm(t,e);ka.has(s)&&qe(`The kernel '${t}' for backend '${e}' is already registered`),ka.set(s,n)}function Gw(n){const{kernelName:t}=n;ru.has(t)&&V().getBool("DEBUG")&&qe(`Overriding the gradient for '${t}'`),ru.set(t,n)}function Mm(n,t){return`${t}_${n}`}function Bm(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function Hw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function jw(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var o=!1;try{o=this instanceof s}catch{}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),e}var Dc,Ip;function Xw(){if(Ip)return Dc;Ip=1,Dc=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(S,C,R){this.low=S|0,this.high=C|0,this.unsigned=!!R}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(S){return(S&&S.__isLong__)===!0}t.isLong=e;var s={},o={};function r(S,C){var R,_,M;return C?(S>>>=0,(M=0<=S&&S<256)&&(_=o[S],_)?_:(R=a(S,(S|0)<0?-1:0,!0),M&&(o[S]=R),R)):(S|=0,(M=-128<=S&&S<128)&&(_=s[S],_)?_:(R=a(S,S<0?-1:0,!1),M&&(s[S]=R),R))}t.fromInt=r;function i(S,C){if(isNaN(S))return C?b:x;if(C){if(S<0)return b;if(S>=f)return N}else{if(S<=-m)return T;if(S+1>=m)return $}return S<0?i(-S,C).neg():a(S%p|0,S/p|0,C)}t.fromNumber=i;function a(S,C,R){return new t(S,C,R)}t.fromBits=a;var l=Math.pow;function c(S,C,R){if(S.length===0)throw Error("empty string");if(S==="NaN"||S==="Infinity"||S==="+Infinity"||S==="-Infinity")return x;if(typeof C=="number"?(R=C,C=!1):C=!!C,R=R||10,R<2||36<R)throw RangeError("radix");var _;if((_=S.indexOf("-"))>0)throw Error("interior hyphen");if(_===0)return c(S.substring(1),C,R).neg();for(var M=i(l(R,8)),P=x,B=0;B<S.length;B+=8){var G=Math.min(8,S.length-B),W=parseInt(S.substring(B,B+G),R);if(G<8){var j=i(l(R,G));P=P.mul(j).add(i(W))}else P=P.mul(M),P=P.add(i(W))}return P.unsigned=C,P}t.fromString=c;function u(S,C){return typeof S=="number"?i(S,C):typeof S=="string"?c(S,C):a(S.low,S.high,typeof C=="boolean"?C:S.unsigned)}t.fromValue=u;var h=65536,d=1<<24,p=h*h,f=p*p,m=f/2,g=r(d),x=r(0);t.ZERO=x;var b=r(0,!0);t.UZERO=b;var y=r(1);t.ONE=y;var w=r(1,!0);t.UONE=w;var v=r(-1);t.NEG_ONE=v;var $=a(-1,2147483647,!1);t.MAX_VALUE=$;var N=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=N;var T=a(0,-2147483648,!1);t.MIN_VALUE=T;var k=t.prototype;return k.toInt=function(){return this.unsigned?this.low>>>0:this.low},k.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},k.toString=function(C){if(C=C||10,C<2||36<C)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(T)){var R=i(C),_=this.div(R),M=_.mul(R).sub(this);return _.toString(C)+M.toInt().toString(C)}else return"-"+this.neg().toString(C);for(var P=i(l(C,6),this.unsigned),B=this,G="";;){var W=B.div(P),j=B.sub(W.mul(P)).toInt()>>>0,X=j.toString(C);if(B=W,B.isZero())return X+G;for(;X.length<6;)X="0"+X;G=""+X+G}},k.getHighBits=function(){return this.high},k.getHighBitsUnsigned=function(){return this.high>>>0},k.getLowBits=function(){return this.low},k.getLowBitsUnsigned=function(){return this.low>>>0},k.getNumBitsAbs=function(){if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(var C=this.high!=0?this.high:this.low,R=31;R>0&&(C&1<<R)==0;R--);return this.high!=0?R+33:R+1},k.isZero=function(){return this.high===0&&this.low===0},k.eqz=k.isZero,k.isNegative=function(){return!this.unsigned&&this.high<0},k.isPositive=function(){return this.unsigned||this.high>=0},k.isOdd=function(){return(this.low&1)===1},k.isEven=function(){return(this.low&1)===0},k.equals=function(C){return e(C)||(C=u(C)),this.unsigned!==C.unsigned&&this.high>>>31===1&&C.high>>>31===1?!1:this.high===C.high&&this.low===C.low},k.eq=k.equals,k.notEquals=function(C){return!this.eq(C)},k.neq=k.notEquals,k.ne=k.notEquals,k.lessThan=function(C){return this.comp(C)<0},k.lt=k.lessThan,k.lessThanOrEqual=function(C){return this.comp(C)<=0},k.lte=k.lessThanOrEqual,k.le=k.lessThanOrEqual,k.greaterThan=function(C){return this.comp(C)>0},k.gt=k.greaterThan,k.greaterThanOrEqual=function(C){return this.comp(C)>=0},k.gte=k.greaterThanOrEqual,k.ge=k.greaterThanOrEqual,k.compare=function(C){if(e(C)||(C=u(C)),this.eq(C))return 0;var R=this.isNegative(),_=C.isNegative();return R&&!_?-1:!R&&_?1:this.unsigned?C.high>>>0>this.high>>>0||C.high===this.high&&C.low>>>0>this.low>>>0?-1:1:this.sub(C).isNegative()?-1:1},k.comp=k.compare,k.negate=function(){return!this.unsigned&&this.eq(T)?T:this.not().add(y)},k.neg=k.negate,k.add=function(C){e(C)||(C=u(C));var R=this.high>>>16,_=this.high&65535,M=this.low>>>16,P=this.low&65535,B=C.high>>>16,G=C.high&65535,W=C.low>>>16,j=C.low&65535,X=0,K=0,Y=0,Z=0;return Z+=P+j,Y+=Z>>>16,Z&=65535,Y+=M+W,K+=Y>>>16,Y&=65535,K+=_+G,X+=K>>>16,K&=65535,X+=R+B,X&=65535,a(Y<<16|Z,X<<16|K,this.unsigned)},k.subtract=function(C){return e(C)||(C=u(C)),this.add(C.neg())},k.sub=k.subtract,k.multiply=function(C){if(this.isZero())return x;if(e(C)||(C=u(C)),n){var R=n.mul(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}if(C.isZero())return x;if(this.eq(T))return C.isOdd()?T:x;if(C.eq(T))return this.isOdd()?T:x;if(this.isNegative())return C.isNegative()?this.neg().mul(C.neg()):this.neg().mul(C).neg();if(C.isNegative())return this.mul(C.neg()).neg();if(this.lt(g)&&C.lt(g))return i(this.toNumber()*C.toNumber(),this.unsigned);var _=this.high>>>16,M=this.high&65535,P=this.low>>>16,B=this.low&65535,G=C.high>>>16,W=C.high&65535,j=C.low>>>16,X=C.low&65535,K=0,Y=0,Z=0,tt=0;return tt+=B*X,Z+=tt>>>16,tt&=65535,Z+=P*X,Y+=Z>>>16,Z&=65535,Z+=B*j,Y+=Z>>>16,Z&=65535,Y+=M*X,K+=Y>>>16,Y&=65535,Y+=P*j,K+=Y>>>16,Y&=65535,Y+=B*W,K+=Y>>>16,Y&=65535,K+=_*X+M*j+P*W+B*G,K&=65535,a(Z<<16|tt,K<<16|Y,this.unsigned)},k.mul=k.multiply,k.divide=function(C){if(e(C)||(C=u(C)),C.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&C.low===-1&&C.high===-1)return this;var R=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var _,M,P;if(this.unsigned){if(C.unsigned||(C=C.toUnsigned()),C.gt(this))return b;if(C.gt(this.shru(1)))return w;P=b}else{if(this.eq(T)){if(C.eq(y)||C.eq(v))return T;if(C.eq(T))return y;var B=this.shr(1);return _=B.div(C).shl(1),_.eq(x)?C.isNegative()?y:v:(M=this.sub(C.mul(_)),P=_.add(M.div(C)),P)}else if(C.eq(T))return this.unsigned?b:x;if(this.isNegative())return C.isNegative()?this.neg().div(C.neg()):this.neg().div(C).neg();if(C.isNegative())return this.div(C.neg()).neg();P=x}for(M=this;M.gte(C);){_=Math.max(1,Math.floor(M.toNumber()/C.toNumber()));for(var G=Math.ceil(Math.log(_)/Math.LN2),W=G<=48?1:l(2,G-48),j=i(_),X=j.mul(C);X.isNegative()||X.gt(M);)_-=W,j=i(_,this.unsigned),X=j.mul(C);j.isZero()&&(j=y),P=P.add(j),M=M.sub(X)}return P},k.div=k.divide,k.modulo=function(C){if(e(C)||(C=u(C)),n){var R=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}return this.sub(this.div(C).mul(C))},k.mod=k.modulo,k.rem=k.modulo,k.not=function(){return a(~this.low,~this.high,this.unsigned)},k.and=function(C){return e(C)||(C=u(C)),a(this.low&C.low,this.high&C.high,this.unsigned)},k.or=function(C){return e(C)||(C=u(C)),a(this.low|C.low,this.high|C.high,this.unsigned)},k.xor=function(C){return e(C)||(C=u(C)),a(this.low^C.low,this.high^C.high,this.unsigned)},k.shiftLeft=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low<<C,this.high<<C|this.low>>>32-C,this.unsigned):a(0,this.low<<C-32,this.unsigned)},k.shl=k.shiftLeft,k.shiftRight=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low>>>C|this.high<<32-C,this.high>>C,this.unsigned):a(this.high>>C-32,this.high>=0?0:-1,this.unsigned)},k.shr=k.shiftRight,k.shiftRightUnsigned=function(C){if(e(C)&&(C=C.toInt()),C&=63,C===0)return this;var R=this.high;if(C<32){var _=this.low;return a(_>>>C|R<<32-C,R>>>C,this.unsigned)}else return C===32?a(R,0,this.unsigned):a(R>>>C-32,0,this.unsigned)},k.shru=k.shiftRightUnsigned,k.shr_u=k.shiftRightUnsigned,k.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},k.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},k.toBytes=function(C){return C?this.toBytesLE():this.toBytesBE()},k.toBytesLE=function(){var C=this.high,R=this.low;return[R&255,R>>>8&255,R>>>16&255,R>>>24,C&255,C>>>8&255,C>>>16&255,C>>>24]},k.toBytesBE=function(){var C=this.high,R=this.low;return[C>>>24,C>>>16&255,C>>>8&255,C&255,R>>>24,R>>>16&255,R>>>8&255,R&255]},t.fromBytes=function(C,R,_){return _?t.fromBytesLE(C,R):t.fromBytesBE(C,R)},t.fromBytesLE=function(C,R){return new t(C[0]|C[1]<<8|C[2]<<16|C[3]<<24,C[4]|C[5]<<8|C[6]<<16|C[7]<<24,R)},t.fromBytesBE=function(C,R){return new t(C[4]<<24|C[5]<<16|C[6]<<8|C[7],C[0]<<24|C[1]<<16|C[2]<<8|C[3],R)},Dc}var zm=Xw();const Vm=Hw(zm),Kw=Xy({__proto__:null,default:Vm},[zm]);const Ps=Vm||Kw;function Zl(n){return Ps.fromString(n,!0,16)}const Wm=Zl("c3a5c85c97cb3127"),Ls=Zl("b492b66fbe98f273"),Ee=Zl("9ae16a3b2f90404f");function iu(n){return n.xor(n.shru(47))}function Um(n,t,e){const s=n.slice(t,t+e);return Ps.fromBytes(Array.from(s),!0,!0)}function Mt(n,t){return Um(n,t,8)}function kp(n,t){return Um(n,t,4)}function he(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function fs(n,t,e=Zl("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let o=t.xor(s).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function qw(n,t,e,s,o,r){o=o.add(n),r=he(r.add(o).add(s),21);const i=o;return o=o.add(t),o=o.add(e),r=r.add(he(o,44)),[o.add(s),r.add(i)]}function Ji(n,t,e,s){return qw(Mt(n,t),Mt(n,t+8),Mt(n,t+16),Mt(n,t+24),e,s)}function Yw(n,t=n.length){if(t>=8){const e=Ee.add(t*2),s=Mt(n,0).add(Ee),o=Mt(n,t-8),r=he(o,37).mul(e).add(s),i=he(s,25).add(o).mul(e);return fs(r,i,e)}if(t>=4){const e=Ee.add(t*2),s=kp(n,0);return fs(s.shl(3).add(t),kp(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],o=n[t-1],r=e+(s<<8),i=t+(o<<2);return iu(Ee.mul(r).xor(Wm.mul(i))).mul(Ee)}return Ee}function Zw(n,t=n.length){const e=Ee.add(t*2),s=Mt(n,0).mul(Ls),o=Mt(n,8),r=Mt(n,t-8).mul(e),i=Mt(n,t-16).mul(Ee);return fs(he(s.add(o),43).add(he(r,30)).add(i),s.add(he(o.add(Ee),18)).add(r),e)}function Jw(n,t=n.length){const e=Ee.add(t*2),s=Mt(n,0).mul(Ee),o=Mt(n,8),r=Mt(n,t-8).mul(e),i=Mt(n,t-16).mul(Ee),a=he(s.add(o),43).add(he(r,30)).add(i),l=fs(a,s.add(he(o.add(Ee),18)).add(r),e),c=Mt(n,16).mul(e),u=Mt(n,24),h=a.add(Mt(n,t-32)).mul(e),d=l.add(Mt(n,t-24)).mul(e);return fs(he(c.add(u),43).add(he(h,30)).add(d),c.add(he(u.add(s),18)).add(h),e)}function Qw(n,t=n.length){const e=Ps.fromNumber(81,!0);if(t<=32)return t<=16?Yw(n,t):Zw(n,t);if(t<=64)return Jw(n,t);let s=e,o=e.mul(Ls).add(113),r=iu(o.mul(Ee).add(113)).mul(Ee),i=[Ps.UZERO,Ps.UZERO],a=[Ps.UZERO,Ps.UZERO];s=s.mul(Ee).add(Mt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=he(s.add(o).add(i[0]).add(Mt(n,l+8)),37).mul(Ls),o=he(o.add(i[1]).add(Mt(n,l+48)),42).mul(Ls),s=s.xor(a[1]),o=o.add(i[0]).add(Mt(n,l+40)),r=he(r.add(a[0]),33).mul(Ls),i=Ji(n,l,i[1].mul(Ls),s.add(a[0])),a=Ji(n,l+32,r.add(a[1]),o.add(Mt(n,l+16))),[r,s]=[s,r],l+=64;while(l!==c);const h=Ls.add(r.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=he(s.add(o).add(i[0]).add(Mt(n,l+8)),37).mul(h),o=he(o.add(i[1]).add(Mt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(Mt(n,l+40))),r=he(r.add(a[0]),33).mul(h),i=Ji(n,l,i[1].mul(h),s.add(a[0])),a=Ji(n,l+32,r.add(a[1]),o.add(Mt(n,l+16))),[r,s]=[s,r],fs(fs(i[0],a[0],h).add(iu(o).mul(Wm)).add(r),fs(i[1],a[1],h).add(s),h)}function ks(n,t){return t==="string"?ms(n):ro([n],t)}function tv(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function ro(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=js(n)),V().getBool("DEBUG")&&Tw(n,t),tv(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function _e(){return V().platform.now()}function ms(n,t="utf-8"){return t=t||"utf-8",V().platform.encode(n,t)}function bs(n,t="utf-8"){return t=t||"utf-8",V().platform.decode(n,t)}function cn(n){return V().platform.isTypedArray!=null?V().platform.isTypedArray(n):Bm(n)}function js(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||zu(n)||n==null||cn(n)&&e)t.push(n);else if(Array.isArray(n)||cn(n))for(let s=0;s<n.length;++s)js(n[s],t,e);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)js(n[o],t,e)}return t}class ev{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new sv)}profileKernel(t,e,s){let o;const r=()=>{o=s()};let i;const a=_e();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const c of o)c.dataSync();i=Promise.resolve({kernelMs:_e()-a})}if(V().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){const u=o[c];u.data().then(h=>{nv(h,u.dtype,t)})}return{kernelName:t,outputs:o,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:o,inputs:r,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],r,l[2])})})}}function nv(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${e}'`),!0}return!1}class sv{logKernelProfile(t,e,s,o,r,i){const a=typeof o=="number"?Co(`${o}ms`,9):o.error,l=Co(t,25),c=e.rank,u=e.size,h=Co(e.shape.toString(),14);let d="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||e.shape,g=m.length;d+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function ov(n,t,e){const s={},o={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let p=!1;for(let f=0;f<t.length;f++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),p=!0,o[c.id]=!0;break}if(p)break}}const r={};r[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(r[c.outputs[h].id]){for(const d in u)r[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(o[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const p=c.inputs[d];s[p.id]&&(u[d]=p)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function rv(n,t,e,s){for(let o=t.length-1;o>=0;o--){const r=t[o],i=[];if(r.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const l in r.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=r.inputs[l];if(!Et(c.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const Sp=20,ir=3,Fc=7;function iv(n,t,e,s){const o=lt(t),r=av(n,t,e,o),i=t.length,a=da(n,t,e,o,r),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function av(n,t,e,s){const o=H(t),r=s[s.length-1],i=new Array(r).fill(0),a=t.length,l=e==="complex64"?hr(n):n;if(a>1)for(let c=0;c<o/r;c++){const u=c*r;for(let h=0;h<r;h++)i[h]=Math.max(i[h],ur(l[u+h],0,e).length)}return i}function ur(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Fc))} + ${parseFloat(n[1].toFixed(Fc))}j`:Ar(n)?s=`'${n}'`:e==="bool"?s=Gm(n):s=parseFloat(n.toFixed(Fc)).toString(),Co(s,t)}function Gm(n){return n===0?"false":"true"}function da(n,t,e,s,o,r=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=hr(n);return[ur(m[0],0,e)]}return e==="bool"?[Gm(n[0])]:[n[0].toString()]}if(l===1){if(a>Sp){const g=ir*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-ir)*i,a*i));return e==="complex64"&&(x=hr(x),b=hr(b)),["["+x.map((y,w)=>ur(y,o[w],e)).join(", ")+", ..., "+b.map((y,w)=>ur(y,o[a-ir+w],e)).join(", ")+"]"]}return["["+(e==="complex64"?hr(n):Array.from(n)).map((g,x)=>ur(g,o[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>Sp){for(let m=0;m<ir;m++){const g=m*h,x=g+h;d.push(...da(n.slice(g,x),c,e,u,o,!1))}d.push("...");for(let m=a-ir;m<a;m++){const g=m*h,x=g+h;d.push(...da(n.slice(g,x),c,e,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...da(n.slice(g,x),c,e,u,o,m===a-1))}const p=l===2?",":"";d[0]="["+(a>0?d[0]+p:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+p;let f=`,
`;for(let m=2;m<l;m++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":f),d}function hr(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class xe{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=H(t),s!=null){const o=s.length;I(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Yt(e,this.size),this.strides=lt(t)}set(t,...e){e.length===0&&(e=[0]),I(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const o of t){if(o<0||o>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return xn().makeTensor(this.values,this.shape,this.dtype)}}let xn=null,wo=null;function lv(n){xn=n}function cv(n){wo=n}class qt{constructor(t,e,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=H(t),this.strides=lt(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return wo.buffer(this.shape,this.dtype,t)}bufferSync(){return wo.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return wn(this.shape,t,this.dtype==="complex64")}arraySync(){return wn(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=xn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>bs(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),xn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=xn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>bs(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await xn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),xn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return wo.print(this,t)}clone(){return this.throwIfDisposed(),wo.clone(this)}toString(t=!1){const e=this.dataSync();return iv(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),wo.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),xn().makeVariable(this,t,e,s)}}Object.defineProperty(qt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function U(){return Vu("Tensor",()=>qt)}U();class Sa extends qt{constructor(t,e,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Et(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);xn().disposeTensor(this),this.dataId=t.dataId,xn().incRef(this,null)}dispose(){xn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Sa,Symbol.hasInstance,{value:n=>n instanceof qt&&n.assign!=null&&n.assign instanceof Function});var Np;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Np||(Np={}));var au;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(au||(au={}));var lu;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(lu||(lu={}));var cu;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(cu||(cu={}));var uu;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(uu||(uu={}));const uv={float32:cu,int32:au,bool:lu,complex64:uu};function Ge(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return uv[n][t]}function Eh(n){return Ge(n,"int32")}function Hm(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function jm(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function Jt(n,t){if(n.dtype===t.dtype)return[n,t];const e=Ge(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Xm(n){const t=[];return Km(n,t,new Set),t}function Km(n,t,e){if(n==null)return;if(n instanceof qt){t.push(n);return}if(!hv(n))return;const s=n;for(const o in s){const r=s[o];e.has(r)||(e.add(r),Km(r,t,e))}}function hv(n){return Array.isArray(n)||typeof n=="object"}function _c(n){return n.kernelName!=null}class Tp{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Eo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Tp}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(qe(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ev(this.backendInstance),!0}setupRegisteredKernels(){$p(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){$p(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Lu)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,qe(`Initialization of backend ${t} failed`),qe(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return qe(`Initialization of backend ${t} failed`),qe(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),o=s.backend,r=this.readSync(e),i=o.refCount(e);o.disposeData(e,!0),s.backend=t,t.move(e,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=e(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,e,s){t();try{const o=s();return e(),o}catch(o){throw e(),o}}nextTensorId(){return Eo.nextTensorId++}nextVariableId(){return Eo.nextVariableId++}clone(t){const e=F.runKernel(Jr,{x:t}),s={x:t},o=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return F.runKernel(Br,l,c)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[e],o,r,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(vp(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const o=this.backend.numDataIds();let r=0;s.forEach(l=>{r+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-e-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=_c(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(_c(t)){const{kernelName:f,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=vp(f,this.backendName);I(x!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const y=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,b,y);const w=y.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(o){const v=this.getTensorsForGradient(f,m,w);s=this.saveTensorsForBackwardMode(v)}return w}}else{const{forwardFunc:f}=t,m=g=>{o&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>f(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=_c(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),o&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:e.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const o=Cp(t);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(I(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=r.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=t;s==="string"&&Ar(t[0])&&(r=t.map(l=>ms(l)));const i=o.write(r,e,s),a=new qt(e,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const l=this.state.tensorInfo.get(i),c=Rw(r);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,o){s=s||"float32";const r={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:o,dtype:r}=t,i=new qt(o,r,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const r=new Sa(t,e,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Ca(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Sa||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Ca(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:r},l=Cp(t);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],p=Ce(d.size,d.dtype);return this.makeTensor(p,d.shape,d.dtype)}return u}),o(c.length>1?c:c[0],r,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Xm(t),s=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(t,e,s,o=!1){if(I(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));I(r instanceof qt,()=>"The result y returned by f() must be a tensor.");const i=ov(this.state.activeTape,e,r);if(!o&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s??dv(r.shape),rv(a,i,c=>this.tidy(c),pv);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:l}})}customGrad(t){return I(eu(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{I(e.every(a=>a instanceof qt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};e.forEach((a,l)=>{o[l]=a});const r=(a,l)=>(s=t(...e,l),I(s.value instanceof qt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),I(eu(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];I(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),I(u.every(d=>d instanceof qt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,p)=>{h[p]=()=>d}),h};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=_e(),s=await this.backend.time(t);return s.wallMs=_e()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Tp;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Eo.nextTensorId=0;Eo.nextVariableId=0;function dv(n){const t=Bu(H(n),"float32");return F.makeTensor(t,n,"float32")}function qm(){const n=mm();if(n._tfengine==null){const t=new Fw(n);n._tfengine=new Eo(t)}return Pw(n._tfengine.ENV),lv(()=>n._tfengine),n._tfengine}const F=qm();function pv(n,t){const e={a:n,b:t};return F.runKernel(Vo,e)}function fv(){return typeof navigator<"u"&&navigator!=null}function Ym(n){if(n||fv()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Zm(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const Me=V();Me.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Me.registerFlag("IS_BROWSER",()=>Zm());Me.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Me.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Me.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Me.registerFlag("PROD",()=>!1);Me.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Me.getBool("DEBUG"));Me.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Me.registerFlag("IS_TEST",()=>!1);Me.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Me.getBool("DEBUG"));Me.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Me.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Me.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Jl(n,t){let e=n;if(cn(n))return t==="string"?[]:[n.length];if(Hm(n)){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}else if(jm(n))return[n.buffer.size/(t==null?4:Ca(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||cn(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&V().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Jm(n,s,[]),s}function Jm(n,t,e){if(e=e||[],!Array.isArray(n)&&!cn(n)){I(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}I(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),I(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let o=0;o<n.length;++o)Jm(n[o],s,e.concat(o))}function Ep(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function E(n,t,e,s="numeric"){if(n instanceof U())return Ep(s,n.dtype,t,e),n;let o=Bo(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),Ep(s,o,t,e),n==null||!cn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const r=Jl(n,o);!cn(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?ro(n,o):js(n,[],!0);return F.makeTensor(a,r,o)}function Qm(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>E(r,`${t}[${i}]`,e,s))}const mv="__op";function L(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+mv;const o=(...r)=>{F.startScope(e);try{const i=s(...r);return zu(i)&&console.error("Cannot return a Promise inside of tidy."),F.endScope(i),i}catch(i){throw F.endScope(null),i}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}function gv(n,t){const e=E(n,"real","complex"),s=E(t,"imag","complex");Mu(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:e,imag:s};return F.runKernel(qu,o)}const Ro=L({complex_:gv});function Ql(n,t,e,s){if(s==null)s=Bo(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(jm(n)||Hm(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return F.backend.createTensorFromGPUData(n,t||e,s)}if(!cn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){es(t);const o=H(t),r=H(e);I(o===r,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==H(t.slice(i)):!0;I(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!cn(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?ro(n,s):js(n,[],!0),F.makeTensor(n,t,s)}function tg(n,t,e){const s=Jl(n,e);return Ql(n,t,s,e)}class Wo{static join(t){return new Wo(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>cn(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const o=t[s];s!==t.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const r=e+o.byteLength;this.shards.push({buffer:o,start:e,end:r}),e=r}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const o=e-t,r=new ArrayBuffer(o),i=new Uint8Array(r);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,f=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,f-h);if(i.set(m,d),a+=m.length,e<c.end)break}return r}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(o){return t<o.start?-1:t>=o.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=xv(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function xv(n,t){let e=0,s=n.length;for(;e<=s;){const o=Math.floor((s-e)/2)+e,r=t(n[o]);if(r===0)return o;r<0?s=o:e=o+1}return-1}function Nn(){return F}function Rp(){return F.memory()}function z(n,t){return F.tidy(n,t)}function Ct(n){Xm(n).forEach(e=>e.dispose())}function _n(n){return F.keep(n)}function eg(n,t,e=1){return F.registerBackend(n,t,e)}function bv(){return F.backend}const Ap=4;async function Dp(n,t){const e=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),p=d.reduce((g,x)=>g+x.length,0)+Ap*d.length,f=new Uint8Array(p);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);f.set(b,m),m+=Ap,f.set(x,m),m+=x.length}h(f)});s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const r=await Promise.all(s);return{data:yv(r),specs:e}}function yv(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(r=>{if(t+=r.byteLength,e.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(t);let o=0;return e.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const Rh=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Fp(n){return Rh?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function wv(n){if(Rh)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,o=t.length;s<o;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function vv(n){if(Rh){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function Cv(n){return Wo.join(n)}function ng(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Fp(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Fp(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Wo(n.weightData).byteLength}}class Ne{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ne.instance==null&&(Ne.instance=new Ne),Ne.instance}static registerSaveRouter(t){Ne.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Ne.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Ne.getHandlers(t,"save")}static getLoadHandlers(t,e){return Ne.getHandlers(t,"load",e)}static getHandlers(t,e,s){const o=[];return(e==="load"?Ne.getInstance().loadRouters:Ne.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&o.push(a)}),o}}const $v=n=>Ne.getSaveHandlers(n);const hu="tensorflowjs",du=1,zs="models_store",hs="model_info_store";function sg(){if(!V().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function pu(n){const t=n.result;t.createObjectStore(zs,{keyPath:"modelPath"}),t.createObjectStore(hs,{keyPath:"modelPath"})}class Xs{constructor(t){if(this.indexedDB=sg(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,o)=>{const r=this.indexedDB.open(hu,du);r.onupgradeneeded=()=>pu(r),r.onsuccess=()=>{const i=r.result;if(e==null){const a=i.transaction(zs,"readonly"),c=a.objectStore(zs).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),o(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=Wo.join(e.weightData);const a=ng(e),l=i.transaction(hs,"readwrite");let c=l.objectStore(hs),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return o(d)}let h;u.onsuccess=()=>{h=i.transaction(zs,"readwrite");const d=h.objectStore(zs);let p;try{p=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(f){return o(f)}p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{c=l.objectStore(hs);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=d=>(i.close(),o(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}Xs.URL_SCHEME="indexeddb://";const og=n=>V().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Xs.URL_SCHEME)?Iv(n.slice(Xs.URL_SCHEME.length)):null;Ne.registerSaveRouter(og);Ne.registerLoadRouter(og);function Iv(n){return new Xs(n)}function kv(n){return n.startsWith(Xs.URL_SCHEME)?n.slice(Xs.URL_SCHEME.length):n}class Sv{constructor(){this.indexedDB=sg()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(hu,du);s.onupgradeneeded=()=>pu(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(hs,"readonly"),a=r.objectStore(hs).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(o.close(),e(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>e(s.error)})}async removeModel(t){return t=kv(t),new Promise((e,s)=>{const o=this.indexedDB.open(hu,du);o.onupgradeneeded=()=>pu(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(hs,"readwrite"),a=i.objectStore(hs),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return r.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=r.transaction(zs,"readwrite");const p=c.objectStore(zs).delete(t);p.onsuccess=()=>e(l.result.modelArtifactsInfo),p.onerror=f=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),r.close(),s(l.error))}},l.onerror=u=>(r.close(),s(l.error)),i.oncomplete=()=>{c==null?r.close():c.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})}}const Kn="/",vo="tensorflowjs_models",rg="info",Nv="model_topology",Tv="weight_specs",Ev="weight_data",Rv="model_metadata";function ig(n){return{info:[vo,n,rg].join(Kn),topology:[vo,n,Nv].join(Kn),weightSpecs:[vo,n,Tv].join(Kn),weightData:[vo,n,Ev].join(Kn),modelMetadata:[vo,n,Rv].join(Kn)}}function ag(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function Av(n){const t=n.split(Kn);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Kn)}function Dv(n){return n.startsWith(Ks.URL_SCHEME)?n.slice(Ks.URL_SCHEME.length):n}class Ks{constructor(t){if(!V().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ig(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=ng(t),r=Wo.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,wv(r));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:o}}catch{throw ag(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=vv(i),e}}Ks.URL_SCHEME="localstorage://";const lg=n=>V().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ks.URL_SCHEME)?Fv(n.slice(Ks.URL_SCHEME.length)):null;Ne.registerSaveRouter(lg);Ne.registerLoadRouter(lg);function Fv(n){return new Ks(n)}class _v{constructor(){I(V().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),I(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=vo+Kn,s=Kn+rg;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(e)&&r.endsWith(s)){const i=Av(r);t[i]=JSON.parse(this.LS.getItem(r))}}return t}async removeModel(t){t=Dv(t);const e=ig(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return ag(e),s}}const _p="://";class Tn{constructor(){this.managers={}}static getInstance(){return Tn.instance==null&&(Tn.instance=new Tn),Tn.instance}static registerManager(t,e){I(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(_p)&&(t=t.slice(0,t.indexOf(_p))),I(t.length>0,()=>"scheme must not be an empty string.");const s=Tn.getInstance();I(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Tn.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Tn.getInstance().managers)}}class Ov{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!V().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Bm(t)}}if(V().get("IS_BROWSER")){V().setPlatform("browser",new Ov);try{Tn.registerManager(Ks.URL_SCHEME,new _v)}catch{}try{Tn.registerManager(Xs.URL_SCHEME,new Sv)}catch{}}const Lv={importFetch:()=>require("node-fetch")};let Oc;class Pv{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return V().global.fetch!=null?V().global.fetch(t,e):(Oc==null&&(Oc=Lv.importFetch()),Oc(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}V().get("IS_NODE")&&!V().get("IS_BROWSER")&&V().setPlatform("node",new Pv);function yt(n,t="float32",e){return t=t||"float32",es(n),new xe(n,t,e)}function Mv(n,t){const e=E(n,"x","cast");if(!Ew(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},o={dtype:t};return F.runKernel(Br,s,o)}const st=L({cast_:Mv});function Bv(n){const e={x:E(n,"x","clone","string_or_numeric")};return F.runKernel(Jr,e)}const Ws=L({clone_:Bv});function zv(n,t=!1){console.log(n.toString(t))}qm();const Vv={buffer:yt,cast:st,clone:Ws,print:zv};cv(Vv);function Wv(n,t){let e=E(n,"a","add"),s=E(t,"b","add");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(Vo,o)}const J=L({add_:Wv});function Uv(n,t){let e=E(n,"a","floorDiv"),s=E(t,"b","floorDiv");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(Yr,o)}const cg=L({floorDiv_:Uv});function Gv(n,t){let e=E(n,"a","div"),s=E(t,"b","div");if([e,s]=Jt(e,s),e.dtype==="int32"&&s.dtype==="int32")return cg(e,s);const o={a:e,b:s},r={};return F.runKernel(Gr,o,r)}const ut=L({div_:Gv});function Hv(n,t){let e=E(n,"a","mul"),s=E(t,"b","mul");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(ai,o)}const D=L({mul_:Hv});function jv(n){const t=E(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return F.runKernel(ol,e)}else{const e={x:t};return F.runKernel(Za,e)}}const Te=L({abs_:jv});function Xv(n){const e={x:E(n,"x","acos")};return F.runKernel(Dr,e)}const Kv=L({acos_:Xv});function qv(n){const e={x:E(n,"x","acosh")};return F.runKernel(Fr,e)}const Yv=L({acosh_:qv});function Zv(n,t=null,e=!1){const o={x:E(n,"x","all","bool")},r={axis:t,keepDims:e};return F.runKernel(Uu,o,r)}const ug=L({all_:Zv});function Jv(n,t=null,e=!1){const o={x:E(n,"x","any","bool")},r={axis:t,keepDims:e};return F.runKernel(Gu,o,r)}const fu=L({any_:Jv});function Qv(n,t=0){const s={x:E(n,"x","argMax")},o={axis:t};return F.runKernel(Ja,s,o)}const br=L({argMax_:Qv});function tC(n,t=0){const s={x:E(n,"x","argMin")},o={axis:t};return F.runKernel(Qa,s,o)}const eC=L({argMin_:tC});function nC(n){const e={x:E(n,"x","asin")};return F.runKernel(_r,e)}const sC=L({asin_:nC});function oC(n){const e={x:E(n,"x","asinh")};return F.runKernel(Or,e)}const rC=L({asinh_:oC});function iC(n){const e={x:E(n,"x","atan")};return F.runKernel(Lr,e)}const aC=L({atan_:iC});function lC(n,t){let e=E(n,"a","atan2"),s=E(t,"b","atan2");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(Mr,o)}const cC=L({atan2_:lC});function uC(n){const e={x:E(n,"x","atanh")};return F.runKernel(Pr,e)}const hC=L({atanh_:uC});function Ni(n,t,e,s,o="NHWC",r){const i=n[3],a=[...t,i],l=ss(o);return be(n,a,e,r,s,null,null,l)}function hn(n,t,e,s,o,r,i="channelsLast"){const[a,l]=yr(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return be(n,c,e,s,o,r,!1,i)}function ns(n,t,e,s,o,r,i="NDHWC"){const[a,l,c]=mu(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ss(n,u,e,s,o,!1,h,r)}function be(n,t,e,s,o,r,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,p,,f]=t,[m,g]=yr(e),[x,b]=yr(s),y=Io(d,x),w=Io(p,b),{padInfo:v,outHeight:$,outWidth:N}=fC(o,c,u,m,g,y,w,r,a),T=i?f*h:f;let k;return a==="channelsFirst"?k=[l,T,$,N]:a==="channelsLast"&&(k=[l,$,N,T]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:$,outWidth:N,outChannels:T,padInfo:v,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:w,dilationHeight:x,dilationWidth:b,inShape:n,outShape:k,filterShape:t}}function Ss(n,t,e,s,o,r=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=t,[x,b,y]=mu(e),[w,v,$]=mu(s),N=Io(p,w),T=Io(f,v),k=Io(m,$),{padInfo:S,outDepth:C,outHeight:R,outWidth:_}=mC(o,c,u,h,x,b,y,N,T,k,a),M=r?g*d:g;let P;return i==="channelsFirst"?P=[l,M,C,R,_]:i==="channelsLast"&&(P=[l,C,R,_,M]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:C,outHeight:R,outWidth:_,outChannels:M,padInfo:S,strideDepth:x,strideHeight:b,strideWidth:y,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:N,effectiveFilterHeight:T,effectiveFilterWidth:k,dilationDepth:w,dilationHeight:v,dilationWidth:$,inShape:n,outShape:P,filterShape:t}}function dC(n,t,e,s,o){s==null&&(s=Ah(n,t,e));const r=n[0],i=n[1],a=wr((r-t+2*s)/e+1,o),l=wr((i-t+2*s)/e+1,o);return[a,l]}function pC(n,t,e,s,o,r){o==null&&(o=Ah(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*o>=t[a]&&(i[a]=wr((n[a]-t[a]+2*o)/s[a]+1,r));return i}function Ah(n,t,e,s=1){const o=Io(t,s);return Math.floor((n[0]*(e-1)-e+o)/2)}function yr(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function mu(n){return typeof n=="number"?[n,n,n]:n}function Io(n,t){return t<=1?n:n+(n-1)*(t-1)}function fC(n,t,e,s,o,r,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=dC([t,e],r,s,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/o);const d=Math.max(0,(u-1)*s+r-t),p=Math.max(0,(h-1)*o+i-e),f=Math.floor(d/2),m=d-f,g=Math.floor(p/2),x=p-g;c={top:f,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/s),h=Math.ceil((e-i+1)/o);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],p=l==="channelsLast"?n[1][1]:n[2][1],f=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:p,left:f,right:m,type:d===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=wr((t-r+d+p)/s+1,a),h=wr((e-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function mC(n,t,e,s,o,r,i,a,l,c,u){let h,d,p,f;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=pC([t,e,s,1],[a,l,c],1,[o,r,i],n,u);d=g[0],p=g[1],f=g[2]}else if(n==="same"){d=Math.ceil(t/o),p=Math.ceil(e/r),f=Math.ceil(s/i);const m=(d-1)*o+a-t,g=(p-1)*r+l-e,x=(f-1)*i+c-s,b=Math.floor(m/2),y=m-b,w=Math.floor(g/2),v=g-w,$=Math.floor(x/2),N=x-$;h={top:w,bottom:v,left:$,right:N,front:b,back:y,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:f}}function wr(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function qs(n){const[t,e,s]=yr(n);return t===1&&e===1&&s===1}function Ie(n,t){return qs(n)||qs(t)}function Ys(n){return yr(n).every(t=>t>0)}function ss(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function ze(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")I(To(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{I(To(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function gC(n,t){const s={x:E(n,"x","reshape","string_or_numeric")},o={shape:t};return F.runKernel(Ml,s,o)}const O=L({reshape_:gC});function xC(n,t,e,s,o){const r=E(n,"x","avgPool","float32"),i=1;I(Ie(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=r,l=!1;r.rank===3&&(l=!0,a=O(r,[1,r.shape[0],r.shape[1],r.shape[2]])),I(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),ze("avgPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o};let h=F.runKernel(tl,c,u);return h=st(h,r.dtype),l?O(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Dh=L({avgPool_:xC});function bC(n,t,e,s,o,r="NDHWC"){const i=E(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=O(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),I(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),I(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),I(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),ze("avgPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r};let h=F.runKernel(el,c,u);return h=st(h,a.dtype),l?O(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const yC=L({avgPool3d_:bC});function wC(n,t=0){I(n.length>=1,()=>"Pass at least one tensor to concat");const e=Qm(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),e.length===1)return Ws(e[0]);const s=e,o={axis:t};return F.runKernel(rl,s,o)}const Pe=L({concat_:wC});function vC(n,t,e=!1,s=!1){let o=E(n,"a","matMul"),r=E(t,"b","matMul");[o,r]=Jt(o,r);const i={a:o,b:r},a={transposeA:e,transposeB:s};return F.runKernel(nl,i,a)}const $t=L({matMul_:vC});function CC(n){const e={x:E(n,"x","sigmoid","float32")};return F.runKernel(bi,e)}const Uo=L({sigmoid_:CC});function $C(n,t,e){const s=E(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:t,size:e};return F.runKernel(Ul,o,r)}const Bt=L({slice_:$C});function IC(n){const e={x:E(n,"x","tanh","float32")};return F.runKernel(Ii,e)}const tc=L({tanh_:IC});function kC(n,t,e){const s=E(n,"x","batchToSpaceND"),o=t.reduce((a,l)=>a*l);I(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),I(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),I(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const r={x:s},i={blockShape:t,crops:e};return F.runKernel(sl,r,i)}const Fh=L({batchToSpaceND_:kC});function SC(n){let t;return n.rank===0||n.rank===1?t=O(n,[1,1,1,n.size]):n.rank===2?t=O(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=O(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function NC(n,t,e,s,o,r){r==null&&(r=.001);const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;s!=null&&(u=E(s,"offset","batchNorm")),I(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),I(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),I(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:SC(i),scale:c,offset:u,mean:a,variance:l},p={varianceEpsilon:r},f=F.runKernel(fl,d,p);return O(f,i.shape)}const ec=L({batchNorm_:NC});function TC(n,t,e,s,o,r){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),I(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),I(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),I(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&I(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&I(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),ec(i,a,l,u,c,r)}const EC=L({batchNorm2d_:TC});function RC(n,t,e,s,o,r){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),I(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),I(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),I(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&I(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&I(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),ec(i,a,l,u,c,r)}const AC=L({batchNorm3d_:RC});function DC(n,t,e,s,o,r){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),I(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),I(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),I(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&I(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&I(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),ec(i,a,l,u,c,r)}const FC=L({batchNorm4d_:DC});function _C(n,t,e){const s=E(n,"x","bincount"),o=E(t,"weights","bincount");I(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),I(e>=0,()=>`size must be non-negative, but got ${e}.`),I(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:e};return F.runKernel(Xu,r,i)}const OC=L({bincount_:_C});function LC(n,t){let e=E(n,"broadcastTo","x");const s=e.shape;if(es(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=O(e,c)}const o=e.shape,r=Array.from(t);for(let c=t.length-1;c>=0;c--)if(o[c]===t[c])r[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(r.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return Ws(e);const a={x:e},l={reps:r};return F.runKernel(ki,a,l)}const gr=L({broadcastTo_:LC});function PC(n){const e={x:E(n,"x","ceil","float32")};return F.runKernel(zr,e)}const MC=L({ceil_:PC});function nc(n,t,e){es(n),e=e||Bo(t);const s={shape:n,value:t,dtype:e};return F.runKernel(lh,{},s)}function BC(n,t,e){const s=E(n,"x","clipByValue");if(I(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return nc(s.shape,t,s.dtype);const o={x:s},r={clipValueMin:t,clipValueMax:e};return F.runKernel(Vr,o,r)}const Je=L({clipByValue_:BC});function zC(n){return Pe(n,0)}const VC=L({concat1d_:zC});function WC(n,t){return Pe(n,t)}const UC=L({concat2d_:WC});function GC(n,t){return Pe(n,t)}const HC=L({concat3d_:GC});function jC(n,t){return Pe(n,t)}const XC=L({concat4d_:jC});function KC(n,t,e,s,o="NHWC",r=[1,1],i){const a=E(n,"x","conv2d","float32"),l=E(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=O(a,[1,a.shape[0],a.shape[1],a.shape[2]])),I(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),I(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),ze("conv2d",s,i);const h=o==="NHWC"?c.shape[3]:c.shape[1];I(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),I(Ie(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),I(Ys(r),()=>"Error in conv2D: Dilated rates should be larger than 0."),I(Ys(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=F.runKernel(il,d,p);return u?O(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Zs=L({conv2d_:KC});function qC(n,t,e,s,o="NWC",r=1,i){const a=E(n,"x","conv1d"),l=E(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=O(a,[1,a.shape[0],a.shape[1]])),I(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),I(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),ze("conv1d",s,i),I(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),I(Ie(e,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${r}'`),I(Ys(r),()=>"Error in conv1D: Dilated rates should be larger than 0."),I(Ys(e),()=>"Error in conv1D: Stride should be larger than 0."),I(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const h=O(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=O(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=Zs(d,h,[1,e],s,"NHWC",[1,r],i);return u?O(g,[g.shape[2],g.shape[3]]):O(g,[g.shape[0],g.shape[2],g.shape[3]])}const hg=L({conv1d_:qC});function YC(n,t,e,s,o,r="NHWC",i){I(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=O(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),I(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),I(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),I(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=r==="NHWC"?a[3]:a[1],h=r==="NHWC"?l.shape[3]:l.shape[1];I(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),I(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),ze("conv2dDerInput",o,i);const d={dy:l,filter:e},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=F.runKernel(al,d,p);return c?O(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const _h=L({conv2DBackpropInput_:YC});function ZC(n,t,e,s,o,r){const i=E(n,"x","conv2dTranspose"),a=E(t,"filter","conv2dTranspose");return _h(e,i,a,s,o,"NHWC",r)}const dg=L({conv2dTranspose_:ZC});function JC(n,t,e,s,o="NDHWC",r=[1,1,1]){const i=E(n,"x","conv3d"),a=E(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=O(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),I(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),I(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),I(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),I(Ie(e,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),I(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),I(Ys(r),()=>"Error in conv3D: Dilated rates should be larger than 0."),I(Ys(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:o,dilations:r},d=F.runKernel(ll,u,h);return c?O(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const QC=L({conv3d_:JC});function t2(n,t,e,s,o){I(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let r=n,i=t,a=!1;t.rank===4&&(a=!0,i=O(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const l=r[4],c=i.shape[4];I(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),I(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),I(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),I(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),I(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:o,strides:s,inputShape:r},d=F.runKernel(Ju,u,h);return a?O(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const pg=L({conv3DBackpropInput_:t2});function e2(n,t,e,s,o){const r=E(n,"x","conv3dTranspose"),i=E(t,"filter","conv3dTranspose");return pg(e,r,i,s,o)}const n2=L({conv3dTranspose_:e2});function s2(n){const e={x:E(n,"x","cos","float32")};return F.runKernel(Wr,e)}const Oh=L({cos_:s2});function o2(n){const e={x:E(n,"x","cosh","float32")};return F.runKernel(Ur,e)}const fg=L({cosh_:o2});function r2(n,t=0,e=!1,s=!1){const r={x:E(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return F.runKernel(Qu,r,i)}const gu=L({cumprod_:r2});function i2(n,t=0,e=!1,s=!1){const r={x:E(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return F.runKernel(cl,r,i)}const mg=L({cumsum_:i2});function a2(n,t,e,s=!1){const o=E(n,"x","denseBincount"),r=E(t,"weights","denseBincount");I(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),I(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),I(e>=0,()=>`size must be non-negative, but got ${e}.`),I(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:e,binaryOutput:s};return F.runKernel(eh,i,a)}const Op=L({denseBincount_:a2});function l2(n,t,e="NHWC"){const s=E(n,"x","depthToSpace","float32"),o=e==="NHWC"?s.shape[1]:s.shape[2],r=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];I(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),I(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),I(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t} for depthToSpace with input shape
        ${s.shape}`),I(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return F.runKernel(nh,a,l)}const c2=L({depthToSpace_:l2});function u2(n,t,e,s,o="NHWC",r=[1,1],i){const a=E(n,"x","depthwiseConv2d","float32"),l=E(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=O(a,[1,a.shape[0],a.shape[1],a.shape[2]])),I(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),I(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=o==="NHWC"?c.shape[3]:c.shape[1];I(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),ze("depthwiseConv2d",s,i);const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=F.runKernel(ul,d,p);return u?O(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Lh=L({depthwiseConv2d_:u2});function h2(n,t,e,s,o=[1,1],r="NHWC"){const i=E(n,"x","dilation2d"),a=E(t,"filter","dilation2d");I(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),I(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),I(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let l=i,c=!1;i.rank===3&&(l=O(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),I(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:o},d=F.runKernel(hl,u,h);return c?O(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const d2=L({dilation2d_:h2});function Ao(n,t){const e=n.length,s=[];for(let o=0;o<e;o++){const r=e-1-o,i=n[r]||1;(t[t.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function ce(n,t){const e=[];for(let s=0;s<t.length;s++){const o=n[n.length-s-1],r=t.length-s-1,i=t[r];(o==null||o===1&&i>1)&&e.unshift(r)}return e}function mt(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let o=0;o<e;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=t[t.length-o-1];if(i==null&&(i=1),r===1)s[e-o-1]=i;else if(i===1)s[e-o-1]=r;else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-o-1]=r}return s}function p2(n,t){let e=E(n,"a","equal","string_or_numeric"),s=E(t,"b","equal","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(dl,o)}const Mn=L({equal_:p2});function f2(n,t,e){const s=E(t,"a","where"),o=E(e,"b","where"),r=E(n,"condition","where","bool"),i=mt(mt(r.shape,s.shape),o.shape),a=gr(r,i),l=gr(s,i),c=gr(o,i),u={condition:a,t:l,e:c};return F.runKernel(Wl,u)}const Ae=L({where_:f2});function m2(n){const e={x:E(n,"x","zerosLike")};return F.runKernel(Yl,e)}const kt=L({zerosLike_:m2});function g2(n,t){let e=E(n,"a","div"),s=E(t,"b","div");[e,s]=Jt(e,s);const o=ut(e,s),r=kt(o),i=Mn(s,r);return Ae(i,r,o)}const x2=L({divNoNan_:g2});function b2(n,t){const e=E(n,"t1","dot"),s=E(t,"t2","dot");I((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const o=e.rank===1?e.size:e.shape[1],r=s.rank===1?s.size:s.shape[0];if(I(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),e.rank===1&&s.rank===1){const i=O(e,[1,-1]),a=O(s,[-1,1]),l=$t(i,a);return O(l,[])}else if(e.rank===1&&s.rank===2){const i=O(e,[1,-1]),a=O(s,[s.shape[0],s.shape[1]]),l=$t(i,a);return O(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=O(s,[-1,1]),a=$t(e,i);return O(a,[a.size])}else{const i=O(s,[s.shape[0],s.shape[1]]);return $t(e,i)}}const y2=L({dot_:b2});function w2(n,...t){const e=t.map((o,r)=>E(o,`tensors${r}`,"einsum")),s={equation:n};return F.runKernel(rh,e,s)}const ar=L({einsum_:w2});function v2(n){const e={x:E(n,"x","elu","float32")};return F.runKernel(Hr,e)}const sc=L({elu_:v2});function C2(n){let t=E(n,"x","erf");I(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=st(t,"float32"));const e={x:t};return F.runKernel(jr,e)}const gg=L({erf_:C2});function Ph(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function xg(n,t,e){const s=n.length+t.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?o.push(n[r++]):o.push(t[i++]);return o}function fe(n,t){const e=[],s=n.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&e.push(n[r]);const o=t.map(r=>n[r]);return[e,o]}function se(n,t){const e=t.map(s=>1);return xg(n,e,t)}function ye(n,t,e){I(Ph(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Xt(n,t){if(Ph(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function Ns(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function Qt(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function $2(n,t=null,e=!1){const o={x:E(n,"x","max")},r={reductionIndices:t,keepDims:e};return F.runKernel(Il,o,r)}const vn=L({max_:$2});function I2(n,t=null,e=!1){const o={x:E(n,"x","min")},r={axis:t,keepDims:e};return F.runKernel(Tl,o,r)}const Na=L({min_:I2});function k2(n,t){let e=E(n,"base","pow"),s=E(t,"exp","pow");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(li,o)}const Js=L({pow_:k2});function Tt(n,t){if((cn(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&cn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ql(n,[],[],t)}function S2(n){const e={x:E(n,"x","sqrt","float32")};return F.runKernel(wi,e)}const $e=L({sqrt_:S2});function N2(n){const t=E(n,"x","square"),e={};return F.runKernel("Square",{x:t},e)}const Vt=L({square_:N2});function T2(n,t=null,e=!1){let s=E(n,"x","sum");s.dtype==="bool"&&(s=st(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return F.runKernel(Gl,o,r)}const ct=L({sum_:T2});function E2(n,t="euclidean",e=null,s=!1){n=E(n,"x","norm");const o=bg(n,t,e);let r=o.shape;if(s){const i=wt(e,n.shape);r=se(o.shape,i)}return O(o,r)}function bg(n,t,e=null){if(n.rank===0)return Te(n);if(n.rank!==1&&e===null)return bg(O(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return ct(Te(n),e);if(t===1/0)return vn(Te(n),e);if(t===-1/0)return Na(Te(n),e);if(t==="euclidean"||t===2)return $e(ct(Js(Te(n),Tt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return vn(ct(Te(n),e[0]),e[1]-1);if(t===1/0)return vn(ct(Te(n),e[1]),e[0]);if(t===-1/0)return Na(ct(Te(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return $e(ct(Vt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const oc=L({norm_:E2});function R2(n,t=null,e=!1){return oc(n,"euclidean",t,e)}const A2=L({euclideanNorm_:R2});function D2(n){const e={x:E(n,"x","exp")};return F.runKernel(Xr,e)}const Bn=L({exp_:D2});function F2(n,t=0){const e=E(n,"x","expandDims","string_or_numeric");I(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},o={dim:t};return F.runKernel(pl,s,o)}const Oe=L({expandDims_:F2});function _2(n){const e={x:E(n,"x","expm1")};return F.runKernel(Kr,e)}const O2=L({expm1_:_2});function L2(n,t){const e=E(n,"x","tile","string_or_numeric");I(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},o={reps:t};return F.runKernel(ki,s,o)}const yn=L({tile_:L2});function P2(n,t,e,s="float32"){t==null&&(t=n);const o=yt([n,t],s),r=n<=t?n:t;for(let a=0;a<r;++a)o.set(1,a,a);const i=O(o.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return yn(Oe(i,0),[e[0],1,1]);if(e.length===2)return yn(Oe(Oe(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return yn(Oe(Oe(Oe(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const yg=L({eye_:P2});function M2(n){const e={x:E(n,"x","floor","float32")};return F.runKernel(qr,e)}const rc=L({floor_:M2});function B2(n,t,e=0,s=0){const o=E(n,"x","gather"),r=E(t,"indices","gather","int32"),i={x:o,indices:r},a={axis:e,batchDims:s};return F.runKernel(ml,i,a)}const Mh=L({gather_:B2});function z2(n,t){let e=E(n,"a","greater","string_or_numeric"),s=E(t,"b","greater","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(gl,o)}const Qe=L({greater_:z2});function V2(n,t){let e=E(n,"a","greaterEqual","string_or_numeric"),s=E(t,"b","greaterEqual","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(Zr,o)}const io=L({greaterEqual_:V2});function W2(n){const e={input:E(n,"input","imag")};return F.runKernel(hh,e)}const Bh=L({imag_:W2});function U2(n){const e={x:E(n,"x","isFinite")};return F.runKernel(Qr,e)}const G2=L({isFinite_:U2});function H2(n){const e={x:E(n,"x","isInf")};return F.runKernel(ti,e)}const j2=L({isInf_:H2});function X2(n){const e={x:E(n,"x","isNaN")};return F.runKernel(ei,e)}const K2=L({isNaN_:X2});function q2(n,t=.2){const s={x:E(n,"x","leakyRelu")},o={alpha:t};return F.runKernel(xl,s,o)}const zh=L({leakyRelu_:q2});function Y2(n,t){let e=E(n,"a","less","string_or_numeric"),s=E(t,"b","less","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(bl,o)}const Ta=L({less_:Y2});function Z2(n,t){let e=E(n,"a","lessEqual","string_or_numeric"),s=E(t,"b","lessEqual","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(yl,o)}const Go=L({lessEqual_:Z2});function J2(n,t=5,e=1,s=1,o=.5){const r=E(n,"x","localResponseNormalization");I(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),I(To(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=O(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:o},u=F.runKernel($l,l,c);return a?O(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const Q2=L({localResponseNormalization_:J2});function t$(n){const e={x:E(n,"x","log","float32")};return F.runKernel(ni,e)}const zn=L({log_:t$});function e$(n){const e={x:E(n,"x","log1p")};return F.runKernel(si,e)}const wg=L({log1p_:e$});function n$(n,t){I(eu(n),()=>"The f passed in variableGrads(f) must be a function"),I(t==null||Array.isArray(t)&&t.every(c=>c instanceof Sa),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in F.registeredVariables)t.push(F.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,o=t.length;t=t.filter(c=>c.trainable),I(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=F.gradients(n,t,null,r);I(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),I(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Do(n){return F.customGrad(n)}function s$(n){const e={x:E(n,"x","neg")};return F.runKernel(Rl,e)}const Zt=L({neg_:s$});function o$(n){const e={x:E(n,"x","softplus")};return F.runKernel(yi,e)}const Ti=L({softplus_:o$});function r$(n){const t=E(n,"x","logSigmoid");return Do(s=>({value:Zt(Ti(Zt(s))),gradFunc:i=>D(i,Uo(Zt(s)))}))(t)}const i$=L({logSigmoid_:r$});function a$(n,t){let e=E(n,"a","sub"),s=E(t,"b","sub");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(Ci,o)}const pt=L({sub_:a$});function l$(n,t=-1){const e=E(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Do((o,r)=>{const a=vn(o,t,!0),l=pt(o,a),c=pt(st(l,"float32"),zn(ct(Bn(l),t,!0)));return r([c]),{value:c,gradFunc:(h,d)=>{const[p]=d,f=!0,m=Bn(p);return pt(h,D(ct(h,t,f),m))}}})(e)}const vg=L({logSoftmax_:l$});function c$(n,t=null,e=!1){const s=E(n,"x","logSumExp"),o=wt(t,s.shape),r=vn(s,o,!0),i=pt(s,r),a=Bn(i),l=ct(a,o),c=zn(l),u=J(O(r,c.shape),c);if(e){const h=se(u.shape,o);return O(u,h)}return u}const Cg=L({logSumExp_:c$});function u$(n,t){const e=E(n,"a","logicalAnd","bool"),s=E(t,"b","logicalAnd","bool");mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(wl,o)}const Zn=L({logicalAnd_:u$});function h$(n){const e={x:E(n,"x","logicalNot","bool")};return F.runKernel(vl,e)}const Vh=L({logicalNot_:h$});function d$(n,t){const e=E(n,"a","logicalOr","bool"),s=E(t,"b","logicalOr","bool");mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(Cl,o)}const $g=L({logicalOr_:d$});function p$(n,t){const e=E(n,"a","logicalXor","bool"),s=E(t,"b","logicalXor","bool");return mt(e.shape,s.shape),Zn($g(n,t),Vh(Zn(n,t)))}const f$=L({logicalXor_:p$});function m$(n,t,e,s,o){const r=E(n,"x","maxPool"),i=1;let a=r,l=!1;r.rank===3&&(l=!0,a=O(r,[1,r.shape[0],r.shape[1],r.shape[2]])),I(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),I(Ie(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),ze("maxPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o},h=F.runKernel(kl,c,u);return l?O(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Wh=L({maxPool_:m$});function g$(n,t=[1,1,1],e,s,o,r="NDHWC"){const i=E(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=O(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),I(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),I(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),ze("maxPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r},h=F.runKernel(Sl,c,u);return l?O(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const x$=L({maxPool3d_:g$});function b$(n,t){let e=E(n,"a","maximum"),s=E(t,"b","maximum");[e,s]=Jt(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(oi,o)}const Ts=L({maximum_:b$});function y$(n,t=null,e=!1){const o={x:E(n,"x","mean")},r={axis:t,keepDims:e};return F.runKernel(Nl,o,r)}const ne=L({mean_:y$});function de(n,t="float32"){if(es(n),t==="complex64"){const s=de(n,"float32"),o=de(n,"float32");return Ro(s,o)}const e=Ce(H(n),t);return F.makeTensor(e,n,t)}function rn(n,t="float32"){if(es(n),t==="complex64"){const s=rn(n,"float32"),o=de(n,"float32");return Ro(s,o)}const e=Bu(H(n),t);return F.makeTensor(e,n,t)}function w$(n,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(n===void 0)return[];let s=E(n,"x","meshgrid",n instanceof qt?n.dtype:"float32");if(t===void 0)return[s];let o=E(t,"y","meshgrid",t instanceof qt?t.dtype:"float32");const r=H(s.shape),i=H(o.shape);return e==="xy"?(s=O(s,[1,-1]),o=O(o,[-1,1]),[$t(rn([i,1],s.dtype),s),$t(o,rn([1,r],o.dtype))]):(s=O(s,[-1,1]),o=O(o,[1,-1]),[$t(s,rn([1,i],s.dtype)),$t(rn([r,1],o.dtype),o)])}function v$(n,t){let e=E(n,"a","minimum"),s=E(t,"b","minimum");[e,s]=Jt(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(ri,o)}const vr=L({minimum_:v$});function C$(n,t,e){I(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=E(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");I(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)I(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),I(t[a][0]>=0&&t[a][0]<=s.shape[a]-o&&t[a][1]>=0&&t[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:t,mode:e},i={x:s};return F.runKernel(El,i,r)}const $$=L({mirrorPad_:C$});function I$(n,t){let e=E(n,"a","mod"),s=E(t,"b","mod");[e,s]=Jt(e,s);const o={a:e,b:s};return F.runKernel(ii,o)}const k$=L({mod_:I$});function S$(n,t=null,e=!1){n=E(n,"x","moments");const s=wt(t,n.shape),o=ne(n,s,e);let r=o.shape;e||(r=se(o.shape,s));const i=Vt(pt(st(n,"float32"),O(o,r))),a=ne(i,s,e);return{mean:o,variance:a}}const Uh=L({moments_:S$});function N$(n,t){let e=E(n,"a","notEqual","string_or_numeric"),s=E(t,"b","notEqual","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return F.runKernel(Al,o)}const Ea=L({notEqual_:N$});function T$(n,t,e=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:E(n,"indices","oneHot","int32")},a={dtype:o,depth:t,onValue:e,offValue:s};return F.runKernel(Fl,i,a)}const Ig=L({oneHot_:T$});function E$(n){const e={x:E(n,"x","onesLike")};return F.runKernel(Dl,e)}const un=L({onesLike_:E$});function R$(n,t,e=0){const s=E(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},r={x:s};return F.runKernel(Ol,r,o)}const Gh=L({pad_:R$});function A$(n,t,e){const s=E(n,"x","spaceToBatchND");I(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),I(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),I(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},r={blockShape:t,paddings:e};return F.runKernel(Hl,o,r)}const Hh=L({spaceToBatchND_:A$});function D$(n,t,e,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=E(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=O(a,[1,a.shape[0],a.shape[1],a.shape[2]])),I(Ie(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=hn(l.shape,t,r,o,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=_$([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const p=h[0]===1&&h[1]===1,[f,m]=F$([u.inHeight,u.inWidth],h,d),g=p?s:"valid",x=p?l:Hh(l,h,f),y=(e==="avg"?()=>Dh(x,t,r,g,i):()=>Wh(x,t,r,g,i))(),w=p?y:Fh(y,h,m);return c?O(w,[w.shape[1],w.shape[2],w.shape[3]]):w}function F$(n,t,e){const s=e.map(u=>u[0]),o=e.map(u=>u[1]),r=n.concat(s,o),i=t.map((u,h)=>(u-r[h]%u)%u),a=o.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function _$(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const O$=L({pool_:D$});function L$(n,t){const e=E(n,"x","prelu"),s=E(t,"alpha","prelu"),o={x:e,alpha:s};return F.runKernel(Ll,o)}const jh=L({prelu_:L$});function P$(n,t=null,e=!1){let s=E(n,"x","prod");s.dtype==="bool"&&(s=st(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return F.runKernel(Pl,o,r)}const M$=L({prod_:P$});var pa={exports:{}},B$=pa.exports,Lp;function z$(){return Lp||(Lp=1,(function(n){(function(t,e,s){function o(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new o(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(B$,n)})(pa)),pa.exports}var fa={exports:{}},V$=fa.exports,Pp;function W$(){return Pp||(Pp=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(V$,n)})(fa)),fa.exports}var ma={exports:{}},U$=ma.exports,Mp;function G$(){return Mp||(Mp=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(U$,n)})(ma)),ma.exports}var ga={exports:{}},H$=ga.exports,Bp;function j$(){return Bp||(Bp=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,p;return d=u[h],d^=d>>>7,p=d^d<<24,d=u[h+1&7],p^=d^d>>>10,d=u[h+3&7],p^=d^d>>>3,d=u[h+4&7],p^=d^d<<7,d=u[h+7&7],d=d^d<<13,p^=d^d<<9,u[h]=p,l.i=h+1&7,p};function c(u,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],u.x=p,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(H$,n)})(ga)),ga.exports}var xa={exports:{}},X$=xa.exports,zp;function K$(){return zp||(zp=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,p,f;return l.w=u=u+1640531527|0,f=h[d+34&127],p=h[d=d+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=h[d]=f^p,l.i=d,f+(u^u>>>16)|0};function c(u,h){var d,p,f,m,g,x=[],b=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,b=Math.max(b,h.length)),f=0,m=-32;m<b;++m)h&&(p^=h.charCodeAt((m+32)%h.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=p+g,f=d==0?f+1:0);for(f>=128&&(x[(h&&h.length||0)&127]=-1),f=127,m=512;m>0;--m)p=x[f+34&127],d=x[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,x[f]=p^d;u.w=g,u.X=x,u.i=f}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(X$,n)})(xa)),xa.exports}var ba={exports:{}},q$=ba.exports,Vp;function Y$(){return Vp||(Vp=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,p=l.d,f=l.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-p|0,l.d=p<<16^d>>>16^f,l.a=f-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(q$,n)})(ba)),ba.exports}var ya={exports:{}};const Z$={},J$=Object.freeze(Object.defineProperty({__proto__:null,default:Z$},Symbol.toStringTag,{value:"Module"})),Q$=jw(J$);var tI=ya.exports,Wp;function eI(){return Wp||(Wp=1,(function(n){(function(t,e,s){var o=256,r=6,i=52,a="random",l=s.pow(o,r),c=s.pow(2,i),u=c*2,h=o-1,d;function p(w,v,$){var N=[];v=v==!0?{entropy:!0}:v||{};var T=x(g(v.entropy?[w,y(e)]:w??b(),3),N),k=new f(N),S=function(){for(var C=k.g(r),R=l,_=0;C<c;)C=(C+_)*o,R*=o,_=k.g(1);for(;C>=u;)C/=2,R/=2,_>>>=1;return(C+_)/R};return S.int32=function(){return k.g(4)|0},S.quick=function(){return k.g(4)/4294967296},S.double=S,x(y(k.S),e),(v.pass||$||function(C,R,_,M){return M&&(M.S&&m(M,k),C.state=function(){return m(k,{})}),_?(s[a]=C,R):C})(S,T,"global"in v?v.global:this==s,v.state)}function f(w){var v,$=w.length,N=this,T=0,k=N.i=N.j=0,S=N.S=[];for($||(w=[$++]);T<o;)S[T]=T++;for(T=0;T<o;T++)S[T]=S[k=h&k+w[T%$]+(v=S[T])],S[k]=v;(N.g=function(C){for(var R,_=0,M=N.i,P=N.j,B=N.S;C--;)R=B[M=h&M+1],_=_*o+B[h&(B[M]=B[P=h&P+R])+(B[P]=R)];return N.i=M,N.j=P,_})(o)}function m(w,v){return v.i=w.i,v.j=w.j,v.S=w.S.slice(),v}function g(w,v){var $=[],N=typeof w,T;if(v&&N=="object")for(T in w)try{$.push(g(w[T],v-1))}catch{}return $.length?$:N=="string"?w:w+"\0"}function x(w,v){for(var $=w+"",N,T=0;T<$.length;)v[h&T]=h&(N^=v[h&T]*19)+$.charCodeAt(T++);return y(v)}function b(){try{var w;return d&&(w=d.randomBytes)?w=w(o):(w=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(w)),y(w)}catch{var v=t.navigator,$=v&&v.plugins;return[+new Date,t,$,t.screen,y(e)]}}function y(w){return String.fromCharCode.apply(0,w)}if(x(s.random(),e),n.exports){n.exports=p;try{d=Q$}catch{}}else s["seed"+a]=p})(typeof self<"u"?self:tI,[],Math)})(ya)),ya.exports}var Lc,Up;function nI(){if(Up)return Lc;Up=1;var n=z$(),t=W$(),e=G$(),s=j$(),o=K$(),r=Y$(),i=eI();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=o,i.tychei=r,Lc=i,Lc}var Xh=nI();class kg{constructor(t,e,s,o,r){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=Xh.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,e,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*a,e=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class sI{constructor(t=0,e=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Xh.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function oI(n,t=0,e=1,s,o){if(es(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new kg(t,e,s,!1,o),i=yt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const rI=L({randomNormal_:oI});function iI(n,t=0,e=1,s="float32",o){es(n);const r=yt(n,s),i=new sI(t,e,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const Ei=L({randomUniform_:iI});function Cr(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:s};return F.runKernel(bh,{},o)}function aI(n){const e={input:E(n,"input","real")};return F.runKernel(yh,e)}const Ra=L({real_:aI});function lI(n){const e={x:E(n,"x","reciprocal")};return F.runKernel(ci,e)}const cI=L({reciprocal_:lI});function uI(n){const e={x:E(n,"x","relu")};return F.runKernel(ui,e)}const ao=L({relu_:uI});function hI(n){const e={x:E(n,"x","relu6")};return F.runKernel(hi,e)}const Sg=L({relu6_:hI});function dI(n,t){const s={x:E(n,"x","reverse")},o={dims:t};return F.runKernel(Vl,s,o)}const Qs=L({reverse_:dI});function pI(n){const e={x:E(n,"x","round")};return F.runKernel(di,e)}const Ng=L({round_:pI});function fI(n){const e={x:E(n,"x","rsqrt","float32")};return F.runKernel(pi,e)}const Tg=L({rsqrt_:fI});function mI(n){const e={x:E(n,"x","selu")};return F.runKernel(fi,e)}const Eg=L({selu_:mI});function gI(n,t,e,s,o,r=[1,1],i="NHWC"){const a=E(n,"x","separableConv2d"),l=E(t,"depthwiseFilter","separableConv2d"),c=E(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=O(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");I(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),I(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),I(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),I(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),I(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],p=l.shape[3];I(c.shape[2]===d*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*p}, but got ${c.shape[2]}.`);const f=Lh(u,l,s,o,i,r),g=Zs(f,c,1,"valid",i);return h?O(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Rg=L({separableConv2d_:gI});function xI(n){const e={x:E(n,"x","sign")};return F.runKernel(xi,e)}const bI=L({sign_:xI});function yI(n){const e={x:E(n,"x","sin","float32")};return F.runKernel(mi,e)}const Ag=L({sin_:yI});function wI(n){const e={x:E(n,"x","sinh")};return F.runKernel(gi,e)}const Dg=L({sinh_:wI});function vI(n,t,e){const s=E(n,"x","slice1d");return I(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Bt(s,[t],[e])}const Kh=L({slice1d_:vI});function CI(n,t,e){const s=E(n,"x","slice2d");return I(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Bt(s,t,e)}const Fg=L({slice2d_:CI});function $I(n,t,e){const s=E(n,"x","slice3d");return I(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Bt(s,t,e)}const qh=L({slice3d_:$I});function II(n,t,e){const s=E(n,"x","slice4d");return I(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Bt(s,t,e)}const Aa=L({slice4d_:II});function kI(n,t=-1){const e=E(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},o={dim:t};return F.runKernel(Xl,s,o)}const Yh=L({softmax_:kI});function SI(n){I(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return F.runKernel(ah,t)}const _g=L({fft_:SI});function NI(n){I(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return F.runKernel(uh,t)}const xu=L({ifft_:NI});function TI(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const o=O(n,[e,t]);s=xu(o)}else{const o=[e,2*(t-1)],r=O(Ra(n),[e,t]),i=O(Bh(n),[e,t]),a=Qs(Bt(r,[0,1],[e,t-2]),1),l=D(Qs(Bt(i,[0,1],[e,t-2]),1),Tt(-1)),c=Pe([r,a],1),u=Pe([i,l],1),h=O(Ro(c,u),[o[0],o[1]]);s=xu(h)}if(s=Ra(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=O(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const EI=L({irfft_:TI});function RI(n,t,e=0){const o={x:E(n,"x","split")},r={numOrSizeSplits:t,axis:e};return F.runKernel(jl,o,r)}const Ze=L({split_:RI});function AI(n,t){I(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let o;if(t!=null&&t<e){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,o=Bt(n,f,m),e=t}else if(t!=null&&t>e){const f=n.shape.map(m=>m);f[n.shape.length-1]=t-e,o=Pe([n,de(f)],n.shape.length-1),e=t}else o=n;const r=kt(o),i=O(Ro(o,r),[s,e]),a=_g(i),l=Math.floor(e/2)+1,c=Ra(a),u=Bh(a),h=Ze(c,[l,e-l],c.shape.length-1),d=Ze(u,[l,e-l],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=l,O(Ro(h[0],d[0]),p)}const DI=L({rfft_:AI});function FI(n,t){let e=E(n,"a","squaredDifference"),s=E(t,"b","squaredDifference");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s},r={};return F.runKernel(vi,o,r)}const _I=L({squaredDifference_:FI});function OI(n,t){const e=E(n,"x","squeeze","string_or_numeric");return O(e,Is(e.shape,t).newShape)}const Ri=L({squeeze_:OI});function LI(n,t=0){const e=Qm(n,"tensors","stack","string_or_numeric");I(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&I(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,o={axis:t};return F.runKernel(_l,s,o)}const Jn=L({stack_:LI});function PI(n,t=0){const s={x:E(n,"x","step")},o={alpha:t};return F.runKernel(Si,s,o)}const Ai=L({step_:PI});function MI(n,t,e,s,o=0,r=0,i=0,a=0,l=0){const u={x:E(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return F.runKernel(Ih,u,h)}const BI=L({stridedSlice_:MI});function zI(n){const e={x:E(n,"x","tan","float32")};return F.runKernel($i,e)}const VI=L({tan_:zI});function Ue(n,t){cm(n);const e=Jl(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ql(n,null,e,t)}function Pc(n,t,e){if(cm(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Jl(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ql(n,t,s,e)}function Og(n,t,e){const s=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${o}.`;if(e.rank<o)throw new Error(r+` update.rank < ${o}. `);if(n.length<s+(e.rank-o))throw new Error(r+` Output shape length < ${s+(e.rank-o)}`);if(e.rank!==o+n.length-s)throw new Error(r+` update.rank != ${o+n.length-s}`);for(let i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(r+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-o;++i)if(e.shape[i+o]!==n[i+s])throw new Error(r+` updates.shape[${i+o}] (${e.shape[i+o]}) != shape[${i+o}] (${n[i+o]})`)}function WI(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Og(e,t,n)}function lo(n,t,e){const s=t.shape.length,o=s>1?t.shape[s-1]:1,r=e.length;let i=1;for(let h=o;h<r;++h)i*=e[h];const a=o<1?1:o,l=H(t.shape)/a,c=[...lt(e.slice(0,o)),1],u=H(e);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function UI(n,t=1,e=!0){const s=E(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const r={x:s},i={k:t,sorted:e},[a,l]=F.runKernel(kh,r,i);return{values:a,indices:l}}const GI=L({topk_:UI});function HI(n,t=0,e=1,s,o){if(es(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new kg(t,e,s,!0,o),i=yt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const Lg=L({truncatedNormal_:HI});function jI(n,t=0){const e=E(n,"x","unique","string_or_numeric");I(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},o={axis:t},[r,i]=F.runKernel(Nh,s,o);return{values:r,indices:i}}const XI=L({unique_:jI});function KI(n,t,e){const s=E(n,"x","unsortedSegmentSum"),o=E(t,"segmentIds","unsortedSegmentSum","int32");I(To(e),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:e};return F.runKernel(ql,r,i)}const Pg=L({unsortedSegmentSum_:KI});function qI(n,t=0){const e=E(n,"x","unstack","string_or_numeric");I(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},o={axis:t};return F.runKernel(Kl,s,o)}const to=L({unstack_:qI});function YI(n,t=!0,e,s){return F.makeVariable(n,t,e,s)}function Mg(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const s=yt(n,"int32"),o=yt([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const i=s.indexToLoc(e[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}function ZI(n,t,e){const s=E(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),I(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{I(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:t};return s.dtype==="complex64"?z(()=>{let i=Ra(s),a=Bh(s);return i=F.runKernel($o,{x:i},r),a=F.runKernel($o,{x:a},r),e&&(a=Zt(a)),Ro(i,a)}):F.runKernel($o,o,r)}const It=L({transpose_:ZI});function JI(n,t){if(t==null)return n.shape.slice();if(Et(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function QI(n,t,e,s){const o=E(n,"x","dropout");if(I(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),I(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof qt?o.clone():o;const r=JI(o,e),i=1-t,a=ut(rc(J(Ei(r,0,1,"float32",s),i)),i);return D(o,a)}const tk=L({dropout_:QI});function ek(n,t,e,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=O(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=O(t,[1,t.shape[0],t.shape[1],t.shape[2]])),I(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),I(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),I(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?l.shape[3]:l.shape[1];I(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),I(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),ze("conv2dDerFilter",o,i);const h={x:a,dy:l},d={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:e};return F.runKernel(Yu,h,d)}const Zh=L({conv2DBackpropFilter_:ek});function Jh(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return D(n,Ai(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Qh(n,t){let e=t;const s=ce(n.shape,t.shape);return s.length>0&&(e=ct(e,s)),O(e,n.shape)}function td(n,t,e,s){if(t==="linear")return n;if(t==="relu")return ao(n);if(t==="elu")return sc(n);if(t==="relu6")return Sg(n);if(t==="prelu")return jh(n,e);if(t==="leakyrelu")return zh(n,s);if(t==="sigmoid")return Uo(n);throw new Error(`Unknown fused activation ${t}.`)}const ed=(n,t)=>!(n>0)||t==="linear";function nk({x:n,filter:t,strides:e,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",ed(F.state.gradientDepth,l)===!1){I(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=Zs(n,t,e,s,o,r,i);return a!=null&&($=J($,a)),td($,l,c,u)}const h=E(n,"x","conv2d","float32"),d=E(t,"filter","conv2d","float32");let p=h,f=!1;h.rank===3&&(f=!0,p=O(h,[1,h.shape[0],h.shape[1],h.shape[2]])),I(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),I(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),ze("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];I(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),I(Ie(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const g=be(p.shape,d.shape,e,r,s,i);let x;a!=null&&(x=E(a,"bias","fused conv2d"),[x]=Jt(x,h),o==="NHWC"?mt(g.outShape,x.shape):(I(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),I(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const $=c.shape;if(I($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)I($[0]===1||$[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${g.outChannels}).`);else if($.length===3)try{mt($,g.outShape)}catch{const T=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(T)}b=E(c,"prelu weights","fused conv2d")}const y=($,N)=>{I(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[T,k,S,C]=N,R=Jh($,S,l);I(qs(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const _=_h(k.shape,R,T,e,s),M=Zh(k,R,T.shape,e,s),P=[_,M];if(C!=null){const B=Qh(C,R);P.push(B)}return P},w={x:p,filter:d,bias:x,preluActivationWeights:b},v={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Do((N,T,k)=>{let S=F.runKernel(Ia,w,v);return k([T,N,S]),f&&(S=O(S,[S.shape[1],S.shape[2],S.shape[3]])),{value:S,gradFunc:y}})(p,d):Do((N,T,k,S)=>{let C=F.runKernel(Ia,w,v);return S([T,N,C,k]),f&&(C=O(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:y}})(p,d,x)}const sk=L({fusedConv2d_:nk});function ok(n,t,e,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=O(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=O(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:e};return F.runKernel(sh,c,u)}const rk=L({depthwiseConv2dNativeBackpropFilter_:ok});function ik(n,t,e,s,o,r=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=O(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},h=F.runKernel(oh,c,u);return l?O(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ak=L({depthwiseConv2dNativeBackpropInput_:ik});function lk({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(ed(F.state.gradientDepth,r)===!1){let C=$t(n,t,e,s);return o!=null&&(C=J(C,o)),td(C,r,i,a)}let l=E(n,"a","fused matMul"),c=E(t,"b","fused matMul");[l,c]=Jt(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],p=s?c.shape[c.rank-2]:c.shape[c.rank-1],f=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=H(f),x=H(m);I(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const y=mt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,p]),w=e?O(l,[g,u,d]):O(l,[g,d,u]),v=s?O(c,[x,p,h]):O(c,[x,h,p]);let $;o!=null&&($=E(o,"bias","fused matMul"),[$]=Jt($,l),mt(y,$.shape));let N;i!=null&&(N=E(i,"prelu weights","fused matMul"));const T=(C,R)=>{const[_,M,P,B]=R,G=Jh(O(C,P.shape),P,r);let W,j;if(!e&&!s?(W=$t(G,M,!1,!0),j=$t(_,G,!0,!1)):!e&&s?(W=$t(G,M,!1,!1),j=$t(G,_,!0,!1)):e&&!s?(W=$t(M,G,!1,!0),j=$t(_,G,!1,!1)):(W=$t(M,G,!0,!0),j=$t(G,_,!0,!0)),o!=null){const X=Qh(B,G);return[W,j,X]}else return[W,j]},k={a:w,b:v,bias:$,preluActivationWeights:N},S={transposeA:e,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?Do((R,_,M)=>{const P=F.runKernel($a,k,S);return M([R,_,P]),{value:O(P,y),gradFunc:T}})(w,v):Do((R,_,M,P)=>{const B=F.runKernel($a,k,S);return P([R,_,B,M]),{value:O(B,y),gradFunc:T}})(w,v,$)}const Gp=L({fusedMatMul_:lk});function ck(n,t,e,s,o="bilinear",r=0){const i=E(n,"image","cropAndResize"),a=E(t,"boxes","cropAndResize","float32"),l=E(e,"boxInd","cropAndResize","int32"),c=a.shape[0];I(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),I(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),I(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),I(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),I(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),I(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:l},h={method:o,extrapolationValue:r,cropSize:s};return F.runKernel(th,u,h)}const uk=L({cropAndResize_:ck});function hk(n){const t=E(n,"image","flipLeftRight","float32");I(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return F.runKernel(ch,e,{})}const dk=L({flipLeftRight_:hk});function pk(n){const t=E(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];I(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),I(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,yn(t,o)}const fk=L({grayscaleToRGB_:pk});function mk(n){const t=E(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];I(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),I(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=t.dtype,r=st(t,"float32"),i=Ue([.2989,.587,.114]);let a;switch(t.rank){case 2:a=ar("ij,j->i",r,i);break;case 3:a=ar("ijk,k->ij",r,i);break;case 4:a=ar("ijkl,l->ijk",r,i);break;case 5:a=ar("ijklm,m->ijkl",r,i);break;case 6:a=ar("ijklmn,n->ijklm",r,i);break;default:throw new Error("Not a valid tensor rank.")}return a=Oe(a,-1),st(a,o)}const gk=L({rgbToGrayscale_:mk});function xk(n,t,e=0,s=.5){const o=E(n,"image","rotateWithOffset","float32");I(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:t,fillValue:e,center:s};return F.runKernel(Th,r,i)}const bk=L({rotateWithOffset_:xk});function Ho(n,t,e,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=n.shape[0];return e=Math.min(e,i),I(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),I(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),I(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),I(t.rank===1,()=>"scores must be a 1D tensor"),I(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),I(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}function yk(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=E(n,"boxes","nonMaxSuppression","float32"),i=E(t,"scores","nonMaxSuppression","float32"),a=Ho(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:o};return F.runKernel(mh,{boxes:r,scores:i},l)}const wk=L({nonMaxSuppression_:yk});function vk(n,t,e){const s=Ck(n,t,e),o=s<0?-(s+1):s;n.splice(o,0,t)}function Ck(n,t,e){return Ik(n,t,e||$k)}function $k(n,t){return n>t?1:n<t?-1:0}function Ik(n,t,e){let s=0,o=n.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=e(t,n[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}function nd(n,t,e,s,o){return rd(n,t,e,s,o,0)}function sd(n,t,e,s,o,r){return rd(n,t,e,s,o,0,!1,r,!0)}function od(n,t,e,s,o,r){return rd(n,t,e,s,o,r,!0)}function rd(n,t,e,s,o,r,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>o&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(Hp);const u=r>0?-.5/r:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:y}=g;if(x<o)break;let w=!1;for(let v=h.length-1;v>=y;--v){const $=kk(n,b,h[v]);if($>=s){w=!0;break}if(g.score=g.score*Sk(s,u,$),g.score<=o)break}g.suppressBeginIndex=h.length,w||(g.score===x?(h.push(b),d.push(g.score)):g.score>o&&vk(c,g,Hp))}const p=h.length,f=e-p;a&&f>0&&(h.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=p),m}function kk(n,t,e){const s=n.subarray(t*4,t*4+4),o=n.subarray(e*4,e*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(a-r)*(l-i),f=(h-c)*(d-u);if(p<=0||f<=0)return 0;const m=Math.max(r,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),y=Math.max(x-m,0)*Math.max(b-g,0);return y/(p+f-y)}function Sk(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function Hp(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}async function Nk(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=E(n,"boxes","nonMaxSuppressionAsync"),i=E(t,"scores","nonMaxSuppressionAsync"),a=Ho(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l=await Promise.all([r.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=nd(c,u,e,s,o);return r!==n&&r.dispose(),i!==t&&i.dispose(),Ue(h,"int32")}const Tk=Nk;function Ek(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=Ho(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},h=F.runKernel(xh,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const Rk=L({nonMaxSuppressionWithScore_:Ek});async function Ak(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=Ho(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:p}=od(u,h,e,s,o,r);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ue(d,"int32"),selectedScores:Ue(p)}}const Dk=Ak;function Fk(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=Ho(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},p={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:r},f=F.runKernel(gh,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}const _k=L({nonMaxSuppressionPadded_:Fk});async function Ok(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=Ho(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,p]=await Promise.all([i.data(),a.data()]),{selectedIndices:f,validOutputs:m}=sd(d,p,c,u,h,r);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ue(f,"int32"),validOutputs:Tt(m,"int32")}}const Lk=Ok;function Pk(n,t,e=!1,s=!1){const o=E(n,"images","resizeBilinear");I(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),I(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),I(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=O(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=F.runKernel(zl,a,l);return i?O(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Bg=L({resizeBilinear_:Pk});function Mk(n,t,e=!1,s=!1){const o=E(n,"images","resizeNearestNeighbor");I(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),I(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),I(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),I(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=O(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=F.runKernel(Bl,a,l);return i?O(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const zg=L({resizeNearestNeighbor_:Mk});function Bk(n,t="binary",e=!1,s=.5){const o=E(n,"image","threshold"),r=.2989,i=.587,a=.114,l=o.shape[0]*o.shape[1];let c=D(Ue([s]),255),u,h,d,p;if(I(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),I(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),I(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),I(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[u,h,d]=Ze(o,[1,1,1],-1);const g=D(u,r),x=D(h,i),b=D(d,a);p=J(J(g,x),b)}else p=n;if(t==="otsu"){const g=OC(st(Ng(p),"int32"),tg([]),256);c=zk(g,l)}const f=e?Go(p,c):Qe(p,c);return st(D(f,255),"int32")}function zk(n,t){let e=Ue([-1]),s=Ue([0]),o=Ue([0]),r,i,a,l,c,u;for(let h=0;h<n.size-1;h++){r=Bt(n,0,h+1),i=Bt(n,h+1),c=ut(ct(r),t),u=ut(ct(i),t);const d=ct(D(r,Cr(0,r.size)));a=ut(d,ct(r));const p=nc(i.shape,r.size),f=J(Cr(0,i.size),p),m=D(i,f);l=ut(ct(m),ct(i));const g=pt(a,l),x=pt(a,l),b=D(c,u);o=D(D(b,g),x);const y=Qe(o,s);s=Ae(y,o,s),e=Ae(y,Ue([h]),e)}return e}const Vk=L({threshold_:Bk});function Wk(n,t,e="nearest",s="constant",o=0,r){const i=E(n,"image","transform","float32"),a=E(t,"transforms","transform","float32");I(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),I(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),I(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:o,outputShape:r};return F.runKernel(Sh,l,c)}const Uk=L({transform_:Wk});function Gk(n,t,e){const s=E(n,"a","bandPart");I(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(I(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),I(t<=r,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${r}).`),a=E(t<0?r:t,"numLower","bandPart")):(I(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Ae(Ta(t,0),r,vr(t,r))),typeof e=="number"?(I(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),I(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=E(e<0?i:e,"numUpper","bandPart")):(I(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Ae(Ta(e,0),i,vr(e,i)));const c=O(Cr(0,r,1,"int32"),[-1,1]),u=Cr(0,i,1,"int32"),h=pt(c,u),d=Zn(Go(h,a),io(h,Zt(l))),p=de([r,i],s.dtype);return O(Jn(to(O(s,[-1,r,i])).map(f=>Ae(d,f,p))),o)}const Hk=L({bandPart_:Gk});function jk(n){let t;if(Array.isArray(n)){t=!1,I(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=n[0].shape[0];for(let r=1;r<n.length;++r)I(n[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[r].shape[0]} vs. ${o})`)}else t=!0,n=Ze(n,n.shape[0],0).map(o=>Ri(o,[0]));I(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let o=0;o<n.length;++o)e.push(F.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const a=D(ct(D(e[i],r)),e[i]);r=pt(r,a)}return ut(r,oc(r,"euclidean"))}));return t?Jn(e,0):e}const Xk=L({gramSchmidt_:jk});function Kk(n,t=!1){if(I(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return jp(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=to(O(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],r=[];s.forEach(l=>{const[c,u]=jp(l,t);o.push(c),r.push(u)});const i=O(Jn(o,0),n.shape),a=O(Jn(r,0),n.shape);return[i,a]}}function jp(n,t=!1){return F.tidy(()=>{I(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let o=yg(e),r=Ws(n);const i=Pc([[1]],[1,1]);let a=Ws(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=r,h=a,d=o;[a,r,o]=F.tidy(()=>{const p=Bt(r,[c,c],[e-c,1]),f=oc(p),m=Bt(r,[c,c],[1,1]),g=Ae(Qe(m,0),Pc([[-1]]),Pc([[1]])),x=pt(m,D(g,f)),b=ut(p,x);b.shape[0]===1?a=Ws(i):a=Pe([i,Bt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const y=Zt(ut($t(g,x),f)),w=Bt(r,[c,0],[e-c,s]),v=D(y,a),$=It(a);if(c===0)r=pt(w,$t(v,$t($,w)));else{const k=pt(w,$t(v,$t($,w)));r=Pe([Bt(r,[0,0],[c,s]),k],0)}const N=It(v),T=Bt(o,[0,c],[e,o.shape[1]-c]);if(c===0)o=pt(T,$t($t(T,a),N));else{const k=pt(T,$t($t(T,a),N));o=Pe([Bt(o,[0,0],[e,c]),k],1)}return[a,r,o]}),Ct([u,h,d])}return!t&&e>s&&(o=Bt(o,[0,0],[e,s]),r=Bt(r,[0,0],[s,s])),[o,r]})}const qk=L({qr_:Kk});const qn={flipLeftRight:dk,grayscaleToRGB:fk,resizeNearestNeighbor:zg,resizeBilinear:Bg,rgbToGrayscale:gk,rotateWithOffset:bk,cropAndResize:uk,nonMaxSuppression:wk,nonMaxSuppressionAsync:Tk,nonMaxSuppressionWithScore:Rk,nonMaxSuppressionWithScoreAsync:Dk,nonMaxSuppressionPadded:_k,nonMaxSuppressionPaddedAsync:Lk,threshold:Vk,transform:Uk},Yk={bandPart:Hk,gramSchmidt:Xk,qr:qk};const Zk=new Map,Jk=new Map;class jo{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class on{constructor(){this.classNameMap={}}static getMap(){return on.instance==null&&(on.instance=new on),on.instance}static register(t){on.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function q(n,t,e){I(n.className!=null,()=>"Class being registered does not have the static className property defined."),I(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),I(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);const s=e,o=t+">"+s;return on.register(n),Zk.set(o,n),Jk.set(n,o),n}class Es extends jo{minimize(t,e=!1,s){const{value:o,grads:r}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:r[a.name]}));this.applyGradients(i)}else this.applyGradients(r);return Ct(r),e?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return n$(t,e)}dispose(){this.iterations_!=null&&Ct(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Tt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Es,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class Vg extends Es{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=F.registeredVariables[s],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:z(()=>kt(r).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:z(()=>kt(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;z(()=>{const u=J(D(l,this.rho),D(Vt(a),1-this.rho)),h=D(ut($e(J(c,this.epsilon)),$e(J(l,this.epsilon))),a),d=J(D(c,this.rho),D(Vt(h),1-this.rho));l.assign(u),c.assign(d);const p=J(D(h,-this.learningRate),r);r.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ct(this.accumulatedGrads.map(t=>t.variable)),Ct(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class Wg extends Es{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=F.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:z(()=>nc(r.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[o].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[o].variable;z(()=>{const l=J(a,Vt(i));a.assign(l);const c=J(D(ut(i,$e(J(l,F.backend.epsilon()))),-this.learningRate),r);r.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ct(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class Ug extends Es{static get className(){return"Adam"}constructor(t,e,s,o=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],z(()=>{this.accBeta1=Tt(e).variable(),this.accBeta2=Tt(s).variable()}),o==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);z(()=>{const s=pt(1,this.accBeta1),o=pt(1,this.accBeta2);e.forEach((r,i)=>{const a=F.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:z(()=>kt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${r}/v`,variable:z(()=>kt(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=J(D(u,this.beta1),D(c,1-this.beta1)),p=J(D(h,this.beta2),D(Vt(c),1-this.beta2)),f=ut(d,s),m=ut(p,o);u.assign(d),h.assign(p);const g=J(D(ut(f,J($e(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(D(this.accBeta1,this.beta1)),this.accBeta2.assign(D(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Ct(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),z(()=>{this.accBeta1.assign(Js(this.beta1,this.iterations_+1)),this.accBeta2.assign(Js(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class Gg extends Es{static get className(){return"Adamax"}constructor(t,e,s,o=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],z(()=>{this.iteration=Tt(0).variable(),this.accBeta1=Tt(e).variable()}),o==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);z(()=>{const s=pt(1,this.accBeta1),o=ut(-this.learningRate,J(D(this.iteration,this.decay),1));e.forEach((r,i)=>{const a=F.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:kt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${r}/v`,variable:kt(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=J(D(u,this.beta1),D(c,1-this.beta1)),p=D(h,this.beta2),f=Te(c),m=Ts(p,f);u.assign(d),h.assign(m);const g=J(D(ut(o,s),ut(d,J(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(J(this.iteration,1)),this.accBeta1.assign(D(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Ct(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class id extends Es{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=Array.isArray(t)?t[o].tensor:t[s];if(r==null)return;const i=F.registeredVariables[s];z(()=>{const a=J(D(this.c,r),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=_n(Tt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class Hg extends id{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=Tt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=F.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:z(()=>kt(r).variable(!1))});const i=this.accumulations[o].variable,a=Array.isArray(t)?t[o].tensor:t[s];a!=null&&z(()=>{let l;const c=J(D(this.m,i),a);this.useNesterov?l=J(D(this.c,J(a,D(c,this.m))),r):l=J(D(this.c,c),r),i.assign(c),r.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ct(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class jg extends Es{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,o=null,r=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=F.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=F.registeredVariables[s],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:z(()=>kt(r).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:z(()=>kt(r).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:z(()=>kt(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;z(()=>{const u=J(D(l,this.decay),D(Vt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[o].variable,d=J(D(h,this.decay),D(a,1-this.decay)),p=ut(D(a,this.learningRate),$e(pt(u,J(Vt(d),this.epsilon)))),f=J(D(c,this.momentum),p);l.assign(u),h.assign(d),c.assign(f);const m=pt(r,f);r.assign(m)}else{const h=J(D(l,this.decay),D(Vt(a),1-this.decay)),d=J(D(c,this.momentum),ut(D(a,this.learningRate),$e(J(h,this.epsilon))));l.assign(h),c.assign(d);const p=pt(r,d);r.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ct(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ct(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Ct(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const Qk=[Vg,Wg,Ug,Gg,Hg,jg,id];function tS(){for(const n of Qk)q(n)}function ad(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(H(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=t.shape,r=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=n.shape,l=o.slice();l.pop();let c=1;for(let h=r;h<e;++h)c*=a[h],l.push(a[h]);const u=[...lt(n.shape).map(h=>h/c),1].slice(0,r);return[l,i,c,u]}const bu=-2,eS=-1;function ld(n,t,e){const s=n.shape.length;I(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),I(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)I(t[o]+e[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${t[o]+e[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function nS(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function cd(n,t,e){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((t[o]-n[o])/e[o]);return s}function Xg(n,t,e,s){const o=[...n];for(let r=o.length;r<s.length;r++)o.push(1);for(let r=0;r<e;r++)r===0?o[t]=1:(o.splice(t,0,1),o.pop());return o}function Kg(n,t,e){return e<=n?e:e-(t-1)}function qg(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function sS(n,t,e,s,o,r,i,a,l){const c=n.length;let u=new Array(c),h=new Array(c),d=new Array(c);if(t.length&&e>0){const p=t[0],f=e+1;u=Yg(i,p,f,s,n),h=Zg(a,p,f,o,n),d=Xg(r,p,f,n)}else for(let p=0;p<c;p++)u[p]=Qg(i,s,r,n,p,l),h[p]=t0(a,o,r,n,p,l),d[p]=Jg(r,p,l);return{begin:u,end:h,strides:d}}function Yg(n,t,e,s,o){const r=[...o],i=qg(e,t);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=0;else{const l=Kg(t,e,a);let c=s[l];n&1<<l&&(c=0),r[a]=c}return r}function Zg(n,t,e,s,o){const r=[...o],i=qg(e,t);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=Number.MAX_SAFE_INTEGER;else{const l=Kg(t,e,a);let c=s[l];n&1<<l&&(c=Number.MAX_SAFE_INTEGER),r[a]=c}for(let a=0;a<r.length;a++){const l=o[a];r[a]<0&&(r[a]+=l),r[a]=Hs(0,r[a],o[a])}return r}function Jg(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function Qg(n,t,e,s,o,r){let i=t[o];const a=e[o]||1;(n&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const l=s[o];return i<0&&(i+=l),i=Hs(0,i,l-1),i}function t0(n,t,e,s,o,r){let i=t[o];const a=e[o]||1;(n&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const l=s[o];return i<0&&(i+=l),a>0?i=Hs(0,i,l):i=Hs(-1,i,l-1),i}function ud(n,t,e){let s=e.length;for(let o=0;o<e.length;o++)if(e[o]>1){s=o;break}for(let o=s+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function hd(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function ic(n,t,e){let s;const o=n.shape.length;typeof t=="number"?s=[t,...new Array(o-1).fill(0)]:t.length<o?s=t.concat(new Array(o-t.length).fill(0)):s=t.slice(),s.forEach(i=>{I(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return e==null?r=new Array(o).fill(-1):typeof e=="number"?r=[e,...new Array(o-1).fill(-1)]:e.length<o?r=e.concat(new Array(o-e.length).fill(-1)):r=e,r=r.map((i,a)=>i>=0?i:(I(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,r]}function dd(n,t,e,s,o,r,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let y=0;y<h.dims;y++)u&&(1<<y&a)!==0&&h.numAddAxisAfterEllipsis++,1<<y&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};oS(h,d);let p=!0,f=!0,m=!0;const g=[],x=[];for(let y=0;y<n.length;++y){if(d.strides[y]===0)throw Error(`strides[${y}] must be non-zero`);const w=!!(d.shrinkAxisMask&1<<y),v=n[y];if(v===-1){g.push(w?1:-1);continue}const $=[d.beginMask&1<<y,d.endMask&1<<y],N=[d.strides[y]>0?0:-1,d.strides[y]>0?v:v-1];if(w&&d.strides[y]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[y]===1;const T=!!(d.beginMask&1<<y&&d.endMask&1<<y);if(d.beginValid&&d.endValid){if(w){const R=d.begin[y]<0?v+d.begin[y]:d.begin[y];if(d.begin[y]=R,d.end[y]=d.begin[y]+1,R<0||R>=v)throw Error(`slice index ${d.begin[y]} of dimension ${y} out of bounds.`)}else d.begin[y]=Xp(d.begin[y],0,d.strides[y],v,$,N),d.end[y]=Xp(d.end[y],1,d.strides[y],v,$,N);const C=d.strides[y]===1&&d.begin[y]===0&&d.end[y]===v;p=p&&C,f=f&&(y===0&&d.strides[y]===1||C)}else p=p&&d.strides[y]===1&&T,f=f&&(y===0&&d.strides[y]===1||T);let k,S=!1;if(d.beginValid&&d.endValid?(k=d.end[y]-d.begin[y],S=!0):w?(k=1,S=!0):T&&v>=0&&(d.strides[y]<0?k=-v:k=v,S=!0),S){let C;k===0||k<0!=d.strides[y]<0?C=0:C=Math.trunc(k/d.strides[y])+(k%d.strides[y]!==0?1:0),g.push(C)}else g.push(-1)}for(let y=0;y<d.finalShapeGatherIndices.length;++y){const w=d.finalShapeGatherIndices[y];w>=0?x.push(g[w]):w===bu&&x.push(1)}return{finalShapeSparse:x.filter((y,w)=>d.finalShapeGatherIndices[w]!==bu),finalShape:x,isIdentity:p,sliceDim0:f,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function oS(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<o;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(bu),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(eS),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function Xp(n,t,e,s,o,r){if(o[t])return e>0?r[t]:r[t+1&1];{const i=n<0?s+n:n;return i<r[0]?r[0]:i>r[1]?r[1]:i}}const rS=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:ld,computeFlatOffset:hd,computeOutShape:cd,getNormalizedAxes:sS,isSliceContinous:ud,maskToAxes:nS,parseSliceParams:ic,sliceInfo:dd,startForAxis:Qg,startIndicesWithElidedDims:Yg,stopForAxis:t0,stopIndicesWithElidedDims:Zg,stridesForAxis:Jg,stridesWithElidedDims:Xg},Symbol.toStringTag,{value:"Module"}));class iS{static sgd(t){return new id(t)}static momentum(t,e,s=!1){return new Hg(t,e,s)}static rmsprop(t,e=.9,s=0,o=null,r=!1){return new jg(t,e,s,o,r)}static adam(t=.001,e=.9,s=.999,o=null){return new Ug(t,e,s,o)}static adadelta(t=.001,e=.95,s=null){return new Vg(t,e,s)}static adamax(t=.002,e=.9,s=.999,o=null,r=0){return new Gg(t,e,s,o,r)}static adagrad(t,e=.1){return new Wg(t,e)}}const go=iS;const aS=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function e0(){return new Promise(n=>aS(()=>n()))}function pd(n,t){const e=n[0].length;n.forEach((o,r)=>{I(o.length===e,()=>`Error in concat${e}D: rank of tensors[${r}] must be the same as the rank of the rest (${e})`)}),I(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((o,r)=>{for(let i=0;i<e;i++)I(i===t||o[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function On(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var bn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(bn||(bn={}));function n0(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let o=1;o<e.length;++o){const r=e[o],i=s[s.length-e.length+o],a=s[i];if(r>=0)if(a>=0){if(a!==r)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${a}`)}else s[i]=r}return s}function s0(n){const t={FIRST_DIM_SIZE:bn.FIRST_DIM_SIZE,VALUE_ROWIDS:bn.VALUE_ROWIDS,ROW_LENGTHS:bn.ROW_LENGTHS,ROW_SPLITS:bn.ROW_SPLITS,ROW_LIMITS:bn.ROW_LIMITS,ROW_STARTS:bn.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function o0(n){return n.length===0?0:n[0]===bn.FIRST_DIM_SIZE?n.length-1:n.length}function r0(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(e,s-1);++o){const r=n[o],i=t[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${i}`)}}const fd=30;function ac(n){return n<=fd?n:nu(n,Math.floor(Math.sqrt(n)))}function md(n,t,e){const s=e*(typeof n=="number"?n:n[0]),o=t*(typeof n=="number"?n:n[1]);return[s,o]}function Di(n,t,e,s=!0){let o=[];if(s)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=t.length;for(let i=0;i<r;++i)o=o.concat([n[i+1]/t[i],t[i]]);o=o.concat(n.slice(r+1))}return o}function Fi(n,t,e=!0){const s=[];if(e){s.push(t);for(let o=t+1;o<n;++o)o<=2*t?(s.push(o),s.push(o-(t+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function _i(n,t,e,s=!0){const o=[];s?o.push(n[0]/e):o.push(n[0]*e);for(let r=1;r<n.length;++r)r<=t.length?s?o.push(t[r-1]*n[r]):o.push(n[r]/t[r-1]):o.push(n[r]);return o}function gd(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function xd(n,t,e){const s=n.slice(0,1);for(let o=0;o<e;++o)s.push(n[o+1]-t[o][0]-t[o][1]);return s}const lc=1.7580993408473768,cc=1.0507009873554805;const bd=.3275911,yd=.254829592,wd=-.284496736,vd=1.421413741,Cd=-1.453152027,$d=1.061405429;function Qn(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function i0(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function a0(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function l0(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=2;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function Id(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function c0(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function u0(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(t?2:-2)*Math.PI*(o/n);e[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:e,imag:s}}function h0(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}const Mc="->",lS=/->/g,Kp=",",qp="...";function kd(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(lS,"").length)/Mc.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${Mc}").`);const[s,o]=n.split(Mc);I(s.indexOf(qp)===-1,()=>`The ellipsis notation ("${qp}") is not supported yet.`);const r=s.split(Kp),i=r.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<o.length;++d){const p=o[d];if(!r.some(f=>f.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let d=0;d<s.length;++d){const p=s[d];a.indexOf(p)===-1&&p!==Kp&&a.push(p)}const l=new Array(r.length);for(let d=0;d<i;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let p=0;p<r[d].length;++p)l[d].push(a.indexOf(r[d][p]))}const c=a.length,u=o.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function Sd(n,t){let e=new Array(n);e.fill(-1);for(let o=0;o<t.length;++o)e[t[o]]=o;const s=[];for(let o=0;o<n;++o)e[o]===-1&&s.push(o);return e=e.filter(o=>o!==-1),{permutationIndices:e,expandDims:s}}function Nd(n,t,e){const s=new Array(n);for(let o=0;o<e.length;++o){const r=e[o].shape;for(let i=0;i<t[o].length;++i)s[t[o][i]]===void 0?s[t[o][i]]=r[i]:I(s[t[o][i]]===r[i],()=>`Expected dimension ${s[t[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function Td(n,t){const e=n,s=[];let o=0;n.length===0&&e.push(-1),o=n.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<e.length;++i){const a=e[i],l=cS(t,a);for(const c of l)r.indexOf(c)===-1&&(s[i].push(c),r.push(c))}return{path:e,steps:s}}function Ed(n){return n.every((t,e)=>t===e)}function cS(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function Rd(n,t,e=0){let s=[];if(typeof t=="number")I(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const o=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);I(o<=1,()=>"There should be only one negative value in split array.");const r=t.indexOf(-1);if(r!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[r]=n.shape[e]-i}I(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function d0(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function p0(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function f0(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function m0(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function g0(n,t){return`size ${n} must be non-negative, not ${t}`}function x0(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function b0(n,t){const e=H(n),s=H(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function y0(n,t){const e=H(n),s=H(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function yu(){return"segment ids must be >= 0"}function w0(){return"segment ids are not increasing"}function v0(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function C0(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function $0(n,t){let e=!1,s;for(n<=fd?(s=n,e=!0):s=nu(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=nu(n,s+1);return s}function I0(n,t,e){const s=[],o=n.length;for(let r=0;r<o;r++)r!==t?s.push(n[r]):s.push(e);return s}function Ad(n,t,e,s){const o=t.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<o;h++)a.push(t.shape[h]);for(let h=e+1;h<r;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}const uS=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:Ad,computeOutShape:I0,segOpComputeOptimalWindowSize:$0},Symbol.toStringTag,{value:"Module"}));function ts(n){try{return n.map(t=>bs(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function k0(n){return n.map(t=>ms(t))}const hS=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:yd,ERF_A2:wd,ERF_A3:vd,ERF_A4:Cd,ERF_A5:$d,ERF_P:bd,PARALLELIZE_THRESHOLD:fd,get RowPartitionType(){return bn},SELU_SCALE:cc,SELU_SCALEALPHA:lc,applyActivation:td,assertAndGetBroadcastShape:mt,assertAxesAreInnerMostDims:ye,assertParamsConsistent:pd,assignToTypedArray:c0,axesAreInnerMostDims:Ph,calculateShapes:lo,checkEinsumDimSizes:Nd,checkPadOnDimRoundingMode:ze,combineLocations:xg,combineRaggedTensorToTensorShapes:n0,complexWithEvenIndex:a0,complexWithOddIndex:l0,computeConv2DInfo:be,computeConv3DInfo:Ss,computeDefaultPad:Ah,computeDilation2DInfo:Ni,computeOptimalWindowSize:ac,computeOutAndReduceShapes:fe,computeOutShape:On,computePool2DInfo:hn,computePool3DInfo:ns,convertConv2DDataFormat:ss,decodeEinsumEquation:kd,eitherStridesOrDilationsAreOne:Ie,expandShapeToKeepDim:se,exponent:h0,exponents:u0,fromStringArrayToUint8:k0,fromUint8ToStringArray:ts,getAxesPermutation:Xt,getBroadcastDims:Ao,getComplexWithIndex:Id,getEinsumComputePath:Td,getEinsumPermutation:Sd,getFusedBiasGradient:Qh,getFusedDyActivation:Jh,getImageCenter:md,getInnerMostAxes:Qt,getPermuted:Fi,getRaggedRank:o0,getReductionAxes:ce,getReshaped:Di,getReshapedPermuted:_i,getRowPartitionTypesHelper:s0,getSliceBeginCoords:gd,getSliceSize:xd,getSparseFillEmptyRowsIndicesDenseShapeMismatch:d0,getSparseFillEmptyRowsNegativeIndexErrorMessage:p0,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:f0,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:x0,getSparseReshapeInputOutputMismatchErrorMessage:y0,getSparseReshapeInputOutputMultipleErrorMessage:b0,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:m0,getSparseReshapeNegativeOutputDimErrorMessage:g0,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:C0,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:yu,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:w0,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:v0,getUndoAxesPermutation:Ns,isIdentityPermutation:Ed,log:Uw,mergeRealAndImagArrays:Qn,prepareAndValidate:ad,prepareSplitSize:Rd,segment_util:uS,shouldFuse:ed,slice_util:rS,splitRealAndImagArrays:i0,stridesOrDilationsArePositive:Ys,tupleValuesAreOne:qs,upcastType:Ge,validateDefaultValueShape:r0,validateInput:WI,validateUpdateShape:Og,warn:qe},Symbol.toStringTag,{value:"Module"}));tS();const S0={kernelName:Za,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,Ai(st(e,"float32"),-1))}}};const dS={kernelName:Dr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Vt(st(e,"float32")),o=$e(pt(Tt(1),s));return Zt(ut(n,o))}}}};const pS={kernelName:Fr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=$e(pt(Vt(st(e,"float32")),1));return ut(n,s)}}}};const fS={kernelName:Vo,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{let a=n;const l=ce(e.shape,o);return l.length>0&&(a=ct(a,l)),O(a,e.shape)},b:()=>{let a=n;const l=ce(s.shape,o);return l.length>0&&(a=ct(a,l)),O(a,s.shape)}}}};const mS={kernelName:Wu,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,o)=>{e[o]=()=>n.clone()}),e}};const gS={kernelName:Ja,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>kt(e)}}};const xS={kernelName:Qa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>kt(e)}}};const bS={kernelName:_r,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,$e(pt(Tt(1),Vt(st(e,"float32")))))}}};const yS={kernelName:Or,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=$e(J(Tt(1),Vt(st(e,"float32"))));return ut(n,s)}}}};const wS={kernelName:Mr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=J(Vt(e),Vt(s));let l=D(n,ut(s,a));const c=ce(e.shape,o);return c.length>0&&(l=ct(l,c)),O(l,e.shape)},b:()=>{const a=J(Vt(e),Vt(s));let l=Zt(D(n,ut(e,a)));const c=ce(s.shape,o);return c.length>0&&(l=ct(l,c)),O(l,s.shape)}}}};const vS={kernelName:Lr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,J(Vt(st(e,"float32")),1))}}};const CS={kernelName:Pr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,pt(Tt(1),Vt(st(e,"float32"))))}}};function $S(n,t,e,s,o,r){const i=E(n,"dy","avgPool3dGrad"),a=E(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=O(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=O(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),I(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),I(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),ze("avgPool3dGrad",o,r);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:o,dimRoundingMode:r},p=F.runKernel(ju,h,d);return u?O(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const IS=L({avgPool3dGrad_:$S});const kS={kernelName:el,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i,dimRoundingMode:a}=e;return{x:()=>IS(n,s,o,r,i,a)}}};function SS(n,t,e,s,o){const r=E(n,"dy","avgPoolGrad"),i=E(t,"input","avgPoolGrad");I(i.rank===r.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${r.rank})`);let a=i,l=r,c=!1;i.rank===3&&(c=!0,a=O(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=O(r,[1,r.shape[0],r.shape[1],r.shape[2]])),I(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),I(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:o},d=F.runKernel(Hu,u,h);return c?O(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const NS=L({avgPoolGrad_:SS});const TS={kernelName:tl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i}=e;return{x:()=>NS(n,s,o,r,i)}}};const ES={kernelName:nl,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,o]=t,{transposeA:r,transposeB:i}=e;return!r&&!i?{a:()=>$t(n,o,!1,!0),b:()=>$t(s,n,!0,!1)}:!r&&i?{a:()=>$t(n,o,!1,!1),b:()=>$t(n,s,!0,!1)}:r&&!i?{a:()=>$t(o,n,!1,!0),b:()=>$t(s,n,!1,!1)}:{a:()=>$t(o,n,!0,!0),b:()=>$t(n,s,!0,!0)}}};const RS={kernelName:sl,gradFunc:(n,t,e)=>{const{blockShape:s,crops:o}=e;return{x:()=>Hh(n,s,o)}}};const AS={kernelName:Bw,gradFunc:(n,t,e)=>{const s=e,o=s.inputShape,r=s.shape,i=Array.from(r);for(let l=o.length-1;l>=0;l--)if(o[l]===r[l])i[l]=1;else if(o[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${r}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>ct(n,a,!0)}}};const DS={kernelName:Br,gradFunc:n=>({x:()=>n.clone()})};const FS={kernelName:zr,gradFunc:n=>({x:()=>kt(n)})};const _S={kernelName:Vr,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:o,clipValueMax:r}=e;return{x:()=>Ae(Zn(io(s,o),Go(s,r)),n,kt(n))}}};const OS={kernelName:ol,inputsToSave:["x"],gradFunc:S0.gradFunc};const LS={kernelName:rl,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:o}=e,r=wt(o,t[0].shape)[0],i=s.map(l=>l[r]);return Ze(n,i,r).map(l=>()=>l)}};const PS={kernelName:il,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{dilations:r,strides:i,pad:a,dataFormat:l}=e;return I(qs(r),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`),{x:()=>_h(s.shape,n,o,i,a,l),filter:()=>Zh(s,n,o.shape,i,a,l)}}};const MS={kernelName:al,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{strides:r,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>Zs(n,o,r,i,a,1,l),filter:()=>Zh(n,s,o.shape,r,i,a,l)}}};function BS(n,t,e,s,o){let r=n;n.rank===4&&(r=O(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=O(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),I(r.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${r.shape}.`),I(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),I(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),I(r.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${r.shape[4]}) must match input depth in filter (${e[3]}.`),I(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:r,dy:i},l={strides:s,pad:o,filterShape:e};return F.runKernel(Zu,a,l)}const zS=L({conv3DBackpropFilter_:BS});const VS={kernelName:ll,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r}=e;I(qs(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>pg(i.shape,n,a,o,r),filter:()=>zS(i,n,a.shape,o,r)}}};const WS={kernelName:Wr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(Zt(Ag(st(e,"float32"))),n)}}};const US={kernelName:Ur,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(Dg(st(e,"float32")),n)}}};const GS={kernelName:cl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o,exclusive:r,reverse:i}=e;return{x:()=>{const a=Xt([o],s.rank);let l=mg(n,o,r,!i);return a!=null&&(l=It(l,a)),l}}}};const HS={kernelName:ul,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r,dimRoundingMode:i}=e,a=s??[1,1];I(qs(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return I(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),I(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),I(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),I(Ie(o,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`),ze("depthwiseConv2d",r,i),{x:()=>ak(l.shape,n,c,o,r,a,i),filter:()=>rk(l,n,c.shape,o,r,a,i)}}};const jS={kernelName:hl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,r={x:s,filter:o,dy:n},i={x:s,filter:o,dy:n};return{x:()=>F.runKernel(su,r,e),filter:()=>F.runKernel(ou,i,e)}}};const XS={kernelName:Hr,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>F.runKernel(ih,s)}}};const KS={kernelName:jr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=D(Bn(Zt(Vt(e))),2/Math.sqrt(Math.PI));return{x:()=>D(n,s)}}};const qS={kernelName:Xr,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,e)}}};const YS={kernelName:pl,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>O(n,e.shape)}}};const ZS={kernelName:Kr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,Bn(e))}}};const JS={kernelName:qr,gradFunc:n=>({x:()=>kt(n)})};const QS={kernelName:Yr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=ut(n,st(s,"float32")),l=ce(e.shape,o);return l.length>0?O(ct(a,l),e.shape):a},b:()=>{let a=D(n,st(e,"float32"));const l=ce(s.shape,o);l.length>0&&(a=O(ct(a,l),s.shape));const c=Vt(s);return Zt(ut(a,st(c,"float32")))}}}};const tN={kernelName:fl,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[o,r,i,a]=t,l=a??Tt(1),c=ce(r.shape,o.shape),u=[];if(r.rank===1){for(let w=0;w<o.shape.length-1;++w)u.push(o.shape[w]);u.push(1)}const h=pt(o,r),d=D(n,l),p=Tg(J(i,Tt(s))),f=D(D(D(p,p),p),Tt(-.5));return{x:()=>r.rank===1?O(D(D(n,yn(O(p,[1,1,1,r.shape[0]]),u)),l),o.shape):O(D(D(n,p),l),o.shape),mean:()=>{let w=D(D(p,Tt(-1)),d);return r.rank===1&&(w=ct(w,c)),O(w,r.shape)},variance:()=>{let w=D(D(f,h),d);return r.rank===1&&(w=ct(w,c)),O(w,r.shape)},scale:()=>{const w=D(h,p);let v=D(n,w);return r.rank===1&&(v=ct(v,c)),O(v,r.shape)},offset:()=>{let w=n;return r.rank===1&&(w=ct(w,c)),O(w,r.shape)}}}};const eN={kernelName:ml,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,o]=t,{axis:r,batchDims:i}=e,a=wt(r,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,p=u.size,f=d.slice(0,a),m=f.length,g=d.slice(r,d.length).slice(1),x=g.length,b=Yp(0,m),y=Yp(m+1,m+1+x),w=Zp([f,[p],g]),v=O(h,w),$=O(u,[p]),N=Zp([[m],b,y]),T=It(v,N);let k=Pg(T,$,c.shape[a]);const S=Ns(N);return k=It(k,S),k};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>Jn(u.map((p,f)=>l(p,o.slice(f,1),n.slice(f,1))())).reshape(s.shape),indices:()=>o}}else return{x:l(s,o,n),indices:()=>o}}};function Yp(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function Zp(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const nN={kernelName:Zr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>kt(e),b:()=>kt(s)}}};const sN={kernelName:Jr,gradFunc:n=>({x:()=>st(n,"float32")})};const oN={kernelName:Qr,gradFunc:n=>({x:()=>kt(n)})};const rN={kernelName:ti,gradFunc:n=>({x:()=>kt(n)})};const iN={kernelName:ei,gradFunc:n=>({x:()=>kt(n)})};const aN={kernelName:xl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:o}=e,r=Qe(s,0);return{x:()=>Ae(r,n,D(n,o))}}};const lN={kernelName:si,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,J(e,1))}}};const cN={kernelName:ni,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,st(e,"float32"))}}};const uN={kernelName:Vw,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;return{logits:()=>{const i=Bn(s);return pt(n,D(ct(n,o,!0),i))}}}};function hN(n,t,e,s=5,o=1,r=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:o,alpha:r,beta:i};return F.runKernel(dh,a,l)}const dN=L({localResponseNormalizationBackprop_:hN});const pN={kernelName:$l,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{depthRadius:r,bias:i,alpha:a,beta:l}=e;return{x:()=>dN(s,o,n,r,i,a,l)}}};function N0(n,t,e,s){return t.rank<e.rank&&(t=O(t,se(t.shape,s))),n.rank<e.rank&&(n=O(n,se(n.shape,s))),{x:()=>D(n,st(Mn(e,t),n.dtype))}}const Jp={kernelName:Il,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:o}=s,r=t[0],i=t[1],a=wt(o,r.shape),l=N0(n,i,r,a);return{x:()=>l.x()}}};const fN={kernelName:oi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>D(n,st(io(e,s),"float32")),b:()=>D(n,st(Ta(e,s),"float32"))}}};function mN(n,t,e,s,o,r,i){const a=E(n,"dy","maxPool3dGrad"),l=E(t,"input","maxPool3dGrad"),c=E(e,"output","maxPool3dGrad");let u=a,h=l,d=c,p=!1;l.rank===4&&(p=!0,u=O(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=O(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=O(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),I(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),I(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),I(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),ze("maxPool3dGrad",r,i);const f={dy:u,input:h,output:d},m={filterSize:s,strides:o,pad:r,dimRoundingMode:i},g=F.runKernel(fh,f,m);return p?O(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const gN=L({maxPool3dGrad_:mN});const xN={kernelName:Sl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>gN(n,s,o,r,i,a,l)}}};function bN(n,t,e,s,o,r,i){const a=E(n,"dy","maxPoolGrad"),l=E(t,"input","maxPoolGrad"),c=E(e,"output","maxPoolGrad");I(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),I(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),I(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),ze("maxPoolGrad",r,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:o,pad:r,dimRoundingMode:i};return F.runKernel(ph,u,h)}const yN=L({maxPoolGrad_:bN});const wN={kernelName:kl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a}=e;return{x:()=>yN(n,s,o,r,i,a)}}};const vN={kernelName:Nl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e,r=wt(o,s.shape),a=fe(s.shape,r)[1],l=H(a);return{x:()=>{const u=s.shape.slice();r.forEach(p=>{u[p]=1});const h=O(n,u);return ut(D(h,rn(s.shape,"float32")),l)}}}};const CN={kernelName:Tl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:o}=s,[r,i]=t,a=wt(o,r.shape),l=N0(n,i,r,a);return{x:()=>l.x()}}};const $N={kernelName:ri,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>D(n,st(Go(e,s),"float32")),b:()=>D(n,st(Qe(e,s),"float32"))}}};const IN={kernelName:El,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>Bt(n,r,s.shape)}}};const kN={kernelName:ii,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=ce(e.shape,o);return a.length>0?O(ct(n,a),e.shape):n},b:()=>{const a=D(n,Zt(rc(ut(e,s)))),l=ce(s.shape,o);return l.length>0?O(ct(a,l),s.shape):a}}}};const SN={kernelName:ai,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=D(n,st(s,"float32")),l=ce(e.shape,o);return l.length>0?O(ct(a,l),e.shape):a},b:()=>{const a=D(n,st(e,"float32")),l=ce(s.shape,o);return l.length>0?O(ct(a,l),s.shape):a}}}};const NN={kernelName:Rl,gradFunc:n=>({x:()=>Zt(n)})};const TN={kernelName:Fl,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>de(e.shape,"float32")}}};const EN={kernelName:Dl,gradFunc:n=>({x:()=>kt(n)})};const RN={kernelName:_l,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return to(n,s).map(r=>()=>r)}};const Qp={kernelName:Ol,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>Bt(n,r,s.shape)}}};const AN={kernelName:li,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,o]=t,r=e,i=s,a=mt(r.shape,i.shape);return{a:()=>{const u=st(i,"float32");let h=D(n,D(u,Js(r,pt(u,Tt(1)))));const d=ce(r.shape,a);return d.length>0&&(h=ct(h,d)),O(h,r.shape)},b:()=>{const u=Qe(r,0),h=Ae(u,zn(r),kt(r));let d=D(n,D(o,h));const p=ce(i.shape,a);return p.length>0&&(d=ct(d,p)),O(d,i.shape)}}}};const DN={kernelName:Ll,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,o=Qe(e,0);return{x:()=>Ae(o,n,D(n,s)),alpha:()=>{let r=Ae(o,kt(n),D(n,e));const i=ce(s.shape,n.shape);return i.length>0&&(r=ct(r,i)),O(r,s.shape)}}}};function FN(n,t,e){const s=n.shape.slice();s[e]=1;const o=O(t,s),r=gu(n,e,!0,!1),i=gu(n,e,!0,!0),a=D(r,i);return D(o,a)}function _N(n,t,e){const s=n.shape.length,o=s-e.length,r=Xt(e,s);let i=n;r!=null&&(i=It(n,r));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,p)=>d*p,1);a.push(c);const u=i.reshape(a);let h=FN(u,t,o);if(h=h.reshape(i.shape),r!=null){const d=Ns(r);h=It(h,d)}return h}const ON={kernelName:Pl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;let r=[];return o==null?r=s.shape.map((i,a)=>a):typeof o=="number"?r=[o]:r=o,{x:()=>_N(s,n,r)}}};const LN={kernelName:Gr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=ut(n,st(s,"float32")),l=ce(e.shape,o);return l.length>0?O(ct(a,l),e.shape):a},b:()=>{let a=D(n,st(e,"float32"));const l=ce(s.shape,o);l.length>0&&(a=O(ct(a,l),s.shape));const c=Vt(s);return Zt(ut(a,st(c,"float32")))}}}};const PN={kernelName:ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Zt(Vt(e)))}}};const MN={kernelName:hi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=D(Go(e,6),Ai(e));return{x:()=>D(n,st(s,"float32"))}}};const BN={kernelName:ui,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,st(Ai(e),"float32"))}}};const zN={kernelName:Ml,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,e.shape)}}};const VN={kernelName:zl,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>F.runKernel(vh,o,e)}}};const WN={kernelName:Bl,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>F.runKernel(wh,o,e)}}};const UN={kernelName:Vl,gradFunc:(n,t,e)=>{const{dims:s}=e,o=wt(s,n.shape);return{x:()=>Qs(n,o)}}};const GN={kernelName:di,gradFunc:n=>({x:()=>kt(n)})};const HN={kernelName:pi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Zt(ut(n,D(Js(e,1.5),2)))}}};const jN={kernelName:Wl,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>st(kt(e),"float32"),t:()=>D(n,st(e,n.dtype)),e:()=>D(n,st(Vh(e),n.dtype))}}};const XN={kernelName:fi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Qe(e,Tt(0)),o=Tt(lc),r=Tt(cc),i=D(n,r),a=D(D(n,o),Bn(st(e,"float32")));return Ae(s,i,a)}}}};const KN={kernelName:bi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,D(e,pt(Tt(1),e)))}}};const qN={kernelName:xi,gradFunc:n=>({x:()=>kt(n)})};const YN={kernelName:mi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(Oh(st(e,"float32")),n)}}};const ZN={kernelName:gi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(fg(st(e,"float32")),n)}}};const JN={kernelName:Ul,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:o,size:r}=e,i=s.shape,[a,l]=ic(s,o,r),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>Gh(n,c)}}};const QN={kernelName:Xl,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:o}=e,r=!0,i=D(n,s);return{logits:()=>pt(i,D(ct(i,[o],r),s))}}};const tT={kernelName:yi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,Uo(e))}}};const tf={kernelName:Hl,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:o}=e;return{x:()=>Fh(n,s,o)}}};const ef={kernelName:jl,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Pe(n,s)}}};const eT={kernelName:wi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,D($e(st(e,"float32")),2))}}};const nT={kernelName:Ch,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,D(st(e,"float32"),2))}}};const sT={kernelName:vi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=Tt(2);return{a:()=>D(n,D(o,pt(e,s))),b:()=>D(n,D(o,pt(s,e)))}}};const oT={kernelName:Si,gradFunc:n=>({x:()=>kt(n)})};const rT={kernelName:Ci,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{let a=n;const l=ce(e.shape,o);return l.length>0&&(a=ct(a,l)),O(a,e.shape)},b:()=>{let a=n;const l=ce(s.shape,o);return l.length>0&&(a=ct(a,l)),O(Zt(a),s.shape)}}}};const iT={kernelName:Gl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,o=s.shape.slice(),{axis:r}=e;wt(r,s.shape).forEach(c=>{o[c]=1});const a=O(n,o),l=D(a,rn(s.shape,"float32"));return{x:()=>l}}};const aT={kernelName:$i,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Vt(Oh(e)))}}};const lT={kernelName:Ii,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(pt(Tt(1),Vt(e)),n)}}};const cT={kernelName:ki,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:o}=e;return{x:()=>{let i=kt(s);if(s.rank===1)for(let a=0;a<o[0];++a)i=J(i,Bt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)i=J(i,Bt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)i=J(i,Bt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)for(let u=0;u<o[3];++u)i=J(i,Bt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const uT={kernelName:$o,gradFunc:(n,t,e)=>{const s=e,{perm:o}=s,r=Ns(o);return{x:()=>It(n,r)}}};const hT={kernelName:Kl,gradFunc:(n,t,e)=>{const s=e,{axis:o}=s;return{value:()=>Jn(n,o)}}};const dT={kernelName:ql,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>pT(n,e)}}};function pT(n,t){const e=Ts(t,kt(t)),s=Mh(n,e);let o=io(t,Tt(0,"int32"));const r=s.rank-o.rank;for(let a=0;a<r;++a)o=Oe(o,a+1);o=Zn(o,rn(s.shape,"bool"));const i=kt(s);return Ae(o,s,i)}const fT={kernelName:Yl,gradFunc:n=>({x:()=>kt(n)})};const mT=[S0,dS,pS,fS,mS,gS,xS,bS,yS,wS,vS,CS,kS,TS,ES,RS,AS,DS,FS,_S,OS,LS,MS,PS,VS,WS,US,GS,HS,jS,LN,XS,KS,qS,YS,ZS,QS,JS,tN,eN,nN,sN,oN,rN,iN,aN,lN,cN,uN,pN,Jp,Jp,fN,xN,wN,vN,CN,$N,IN,kN,SN,NN,TN,EN,RN,Qp,Qp,AN,DN,ON,PN,MN,BN,zN,VN,WN,UN,GN,HN,jN,XN,KN,qN,YN,ZN,JN,QN,tT,tf,tf,ef,ef,eT,sT,nT,oT,rT,iT,aT,lT,cT,uT,hT,dT,fT];for(const n of mT)Gw(n);U().prototype.abs=function(){return this.throwIfDisposed(),Te(this)};U().prototype.acos=function(){return this.throwIfDisposed(),Kv(this)};U().prototype.acosh=function(){return this.throwIfDisposed(),Yv(this)};U().prototype.add=function(n){return this.throwIfDisposed(),J(this,n)};U().prototype.all=function(n,t){return this.throwIfDisposed(),ug(this,n,t)};U().prototype.any=function(n,t){return this.throwIfDisposed(),fu(this,n,t)};U().prototype.argMax=function(n){return this.throwIfDisposed(),br(this,n)};U().prototype.argMin=function(n){return this.throwIfDisposed(),eC(this,n)};U().prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,()=>"The array must have only 1 element."),O(this,[])};U().prototype.asType=function(n){return this.throwIfDisposed(),st(this,n)};U().prototype.as1D=function(){return this.throwIfDisposed(),O(this,[this.size])};U().prototype.as2D=function(n,t){return this.throwIfDisposed(),O(this,[n,t])};U().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),O(this,[n,t,e])};U().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),O(this,[n,t,e,s])};U().prototype.as5D=function(n,t,e,s,o){return this.throwIfDisposed(),O(this,[n,t,e,s,o])};U().prototype.asin=function(){return this.throwIfDisposed(),sC(this)};U().prototype.asinh=function(){return this.throwIfDisposed(),rC(this)};U().prototype.atan=function(){return this.throwIfDisposed(),aC(this)};U().prototype.atan2=function(n){return this.throwIfDisposed(),cC(this,n)};U().prototype.atanh=function(){return this.throwIfDisposed(),hC(this)};U().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),Dh(this,n,t,e,s)};U().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),Fh(this,n,t)};U().prototype.batchNorm=function(n,t,e,s,o){return this.throwIfDisposed(),ec(this,n,t,e,s,o)};U().prototype.broadcastTo=function(n){return this.throwIfDisposed(),gr(this,n)};U().prototype.cast=function(n){return this.throwIfDisposed(),st(this,n)};U().prototype.ceil=function(){return this.throwIfDisposed(),MC(this)};U().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),Je(this,n,t)};U().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof qt&&(n=[n]),Pe([this,...n],t)};U().prototype.conv1d=function(n,t,e,s,o,r){return this.throwIfDisposed(),hg(this,n,t,e,s,o,r)};U().prototype.conv2dTranspose=function(n,t,e,s,o){return this.throwIfDisposed(),dg(this,n,t,e,s,o)};U().prototype.conv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Zs(this,n,t,e,s,o,r)};U().prototype.cos=function(){return this.throwIfDisposed(),Oh(this)};U().prototype.cosh=function(){return this.throwIfDisposed(),fg(this)};U().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),gu(this,n,t,e)};U().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),mg(this,n,t,e)};U().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),c2(this,n,t)};U().prototype.depthwiseConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Lh(this,n,t,e,s,o,r)};U().prototype.dilation2d=function(n,t,e,s,o){return this.throwIfDisposed(),d2(this,n,t,e,s,o)};U().prototype.divNoNan=function(n){return this.throwIfDisposed(),x2(this,n)};U().prototype.div=function(n){return this.throwIfDisposed(),ut(this,n)};U().prototype.dot=function(n){return this.throwIfDisposed(),y2(this,n)};U().prototype.elu=function(){return this.throwIfDisposed(),sc(this)};U().prototype.equal=function(n){return this.throwIfDisposed(),Mn(this,n)};U().prototype.erf=function(){return this.throwIfDisposed(),gg(this)};U().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),A2(this,n,t)};U().prototype.exp=function(){return this.throwIfDisposed(),Bn(this)};U().prototype.expandDims=function(n){return this.throwIfDisposed(),Oe(this,n)};U().prototype.expm1=function(){return this.throwIfDisposed(),O2(this)};U().prototype.fft=function(){return this.throwIfDisposed(),_g(this)};U().prototype.flatten=function(){return this.throwIfDisposed(),O(this,[this.size])};U().prototype.floor=function(){return this.throwIfDisposed(),rc(this)};U().prototype.floorDiv=function(n){return this.throwIfDisposed(),cg(this,n)};U().prototype.gather=function(n,t,e){return this.throwIfDisposed(),Mh(this,n,t,e)};U().prototype.greaterEqual=function(n){return this.throwIfDisposed(),io(this,n)};U().prototype.greater=function(n){return this.throwIfDisposed(),Qe(this,n)};U().prototype.ifft=function(){return this.throwIfDisposed(),xu(this)};U().prototype.irfft=function(){return this.throwIfDisposed(),EI(this)};U().prototype.isFinite=function(){return this.throwIfDisposed(),G2(this)};U().prototype.isInf=function(){return this.throwIfDisposed(),j2(this)};U().prototype.isNaN=function(){return this.throwIfDisposed(),K2(this)};U().prototype.leakyRelu=function(n){return this.throwIfDisposed(),zh(this,n)};U().prototype.lessEqual=function(n){return this.throwIfDisposed(),Go(this,n)};U().prototype.less=function(n){return this.throwIfDisposed(),Ta(this,n)};U().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),Q2(this,n,t,e,s)};U().prototype.logSigmoid=function(){return this.throwIfDisposed(),i$(this)};U().prototype.logSoftmax=function(n){return this.throwIfDisposed(),vg(this,n)};U().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),Cg(this,n,t)};U().prototype.log=function(){return this.throwIfDisposed(),zn(this)};U().prototype.log1p=function(){return this.throwIfDisposed(),wg(this)};U().prototype.logicalAnd=function(n){return this.throwIfDisposed(),Zn(this,n)};U().prototype.logicalNot=function(){return this.throwIfDisposed(),Vh(this)};U().prototype.logicalOr=function(n){return this.throwIfDisposed(),$g(this,n)};U().prototype.logicalXor=function(n){return this.throwIfDisposed(),f$(this,n)};U().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),$t(this,n,t,e)};U().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),Wh(this,n,t,e,s)};U().prototype.max=function(n,t){return this.throwIfDisposed(),vn(this,n,t)};U().prototype.maximum=function(n){return this.throwIfDisposed(),Ts(this,n)};U().prototype.mean=function(n,t){return this.throwIfDisposed(),ne(this,n,t)};U().prototype.min=function(n,t){return this.throwIfDisposed(),Na(this,n,t)};U().prototype.minimum=function(n){return this.throwIfDisposed(),vr(this,n)};U().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),$$(this,n,t)};U().prototype.mod=function(n){return this.throwIfDisposed(),k$(this,n)};U().prototype.mul=function(n){return this.throwIfDisposed(),D(this,n)};U().prototype.neg=function(){return this.throwIfDisposed(),Zt(this)};U().prototype.norm=function(n,t,e){return this.throwIfDisposed(),oc(this,n,t,e)};U().prototype.notEqual=function(n){return this.throwIfDisposed(),Ea(this,n)};U().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),Ig(this,n,t,e)};U().prototype.onesLike=function(){return this.throwIfDisposed(),un(this)};U().prototype.pad=function(n,t){return this.throwIfDisposed(),Gh(this,n,t)};U().prototype.pool=function(n,t,e,s,o,r){return this.throwIfDisposed(),O$(this,n,t,e,s,o,r)};U().prototype.pow=function(n){return this.throwIfDisposed(),Js(this,n)};U().prototype.prelu=function(n){return this.throwIfDisposed(),jh(this,n)};U().prototype.prod=function(n,t){return this.throwIfDisposed(),M$(this,n,t)};U().prototype.reciprocal=function(){return this.throwIfDisposed(),cI(this)};U().prototype.relu=function(){return this.throwIfDisposed(),ao(this)};U().prototype.relu6=function(){return this.throwIfDisposed(),Sg(this)};U().prototype.reshapeAs=function(n){return this.throwIfDisposed(),O(this,n.shape)};U().prototype.reshape=function(n){return this.throwIfDisposed(),O(this,n)};U().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),Bg(this,n,t,e)};U().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),zg(this,n,t,e)};U().prototype.reverse=function(n){return this.throwIfDisposed(),Qs(this,n)};U().prototype.rfft=function(){return this.throwIfDisposed(),DI(this)};U().prototype.round=function(){return this.throwIfDisposed(),Ng(this)};U().prototype.rsqrt=function(){return this.throwIfDisposed(),Tg(this)};U().prototype.selu=function(){return this.throwIfDisposed(),Eg(this)};U().prototype.separableConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Rg(this,n,t,e,s,o,r)};U().prototype.sigmoid=function(){return this.throwIfDisposed(),Uo(this)};U().prototype.sign=function(){return this.throwIfDisposed(),bI(this)};U().prototype.sin=function(){return this.throwIfDisposed(),Ag(this)};U().prototype.sinh=function(){return this.throwIfDisposed(),Dg(this)};U().prototype.slice=function(n,t){return this.throwIfDisposed(),Bt(this,n,t)};U().prototype.softmax=function(n){return this.throwIfDisposed(),Yh(this,n)};U().prototype.softplus=function(){return this.throwIfDisposed(),Ti(this)};U().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),Hh(this,n,t)};U().prototype.split=function(n,t){return this.throwIfDisposed(),Ze(this,n,t)};U().prototype.sqrt=function(){return this.throwIfDisposed(),$e(this)};U().prototype.square=function(){return this.throwIfDisposed(),Vt(this)};U().prototype.squaredDifference=function(n){return this.throwIfDisposed(),_I(this,n)};U().prototype.squeeze=function(n){return this.throwIfDisposed(),Ri(this,n)};U().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof qt?[this,n]:[this,...n];return Jn(e,t)};U().prototype.step=function(n){return this.throwIfDisposed(),Ai(this,n)};U().prototype.stridedSlice=function(n,t,e,s,o,r,i,a){return this.throwIfDisposed(),BI(this,n,t,e,s,o,r,i,a)};U().prototype.sub=function(n){return this.throwIfDisposed(),pt(this,n)};U().prototype.sum=function(n,t){return this.throwIfDisposed(),ct(this,n,t)};U().prototype.tan=function(){return this.throwIfDisposed(),VI(this)};U().prototype.tanh=function(){return this.throwIfDisposed(),tc(this)};U().prototype.tile=function(n){return this.throwIfDisposed(),yn(this,n)};U().prototype.toBool=function(){return this.throwIfDisposed(),st(this,"bool")};U().prototype.toFloat=function(){return this.throwIfDisposed(),st(this,"float32")};U().prototype.toInt=function(){return this.throwIfDisposed(),st(this,"int32")};U().prototype.topk=function(n,t){return this.throwIfDisposed(),GI(this,n,t)};U().prototype.transpose=function(n){return this.throwIfDisposed(),It(this,n)};U().prototype.unique=function(n){return this.throwIfDisposed(),XI(this,n)};U().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),Pg(this,n,t)};U().prototype.unstack=function(n){return this.throwIfDisposed(),to(this,n)};U().prototype.where=function(n,t){return this.throwIfDisposed(),Ae(n,this,t)};U().prototype.zerosLike=function(){return this.throwIfDisposed(),kt(this)};class En extends Error{constructor(t){super(t),Object.setPrototypeOf(this,En.prototype)}}class an extends Error{constructor(t){super(t),Object.setPrototypeOf(this,an.prototype)}}class A extends Error{constructor(t){super(t),Object.setPrototypeOf(this,A.prototype)}}class xt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,xt.prototype)}}class Dd extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Dd.prototype)}}class T0{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function eo(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function Rn(n,t){if(!n)throw new Dd(t)}function nf(n,t){let e=0;for(const s of n)s===t&&e++;return e}function Le(n){return n.length===1?n[0]:n}function At(n){return Array.isArray(n)?n:[n]}function Xn(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function Ms(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let en={};function Fd(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function wu(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>wu(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:wu(s))}}}function Oi(n,t={},e={},s="object",o=!1){if(typeof n=="string"){const r=n;let i;if(r in e)i=e[r];else if(r in en)i=en[r];else if(i=t[r],i==null)throw new A(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const r=n;if(r.className==null||r.config==null)throw new A(`${s}: Improper config format: ${JSON.stringify(r)}.
'className' and 'config' must set.`);const i=r.className;let a,l;if(i in e?[a,l]=e[i]:i in en?[a,l]=en.className:i in t&&([a,l]=t[i]),a==null)throw new A(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const p of Object.keys(en))c[p]=en[p];for(const p of Object.keys(e))c[p]=e[p];const u=r.config;u.customObjects=c;const h=Object.assign({},en);for(const p of Object.keys(e))en[p]=e[p];wu(r.config);const d=l(a,r.config,e,o);return en=Object.assign({},h),d}else{const c=Object.assign({},en);for(const h of Object.keys(e))en[h]=e[h];const u=new a(r.config);return en=Object.assign({},c),u}}}function gT(n,t){return n<t?-1:n>t?1:0}function Qi(n,t){return-1*gT(n,t)}function gs(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function xT(n){if(n==null)throw new A(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function co(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new A(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function _d(n,t,e=0,s=1/0){return Rn(e>=0),Rn(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(o=>typeof o===t)}function pe(n,t){Array.isArray(n)?(I(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>pe(e,`element ${s+1} of ${t}`))):I(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${E0(n)}.`)}function E0(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>E0(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function bT(n,t,e){let s=e!=null?e():_e(),o;return(...i)=>{const a=e!=null?e():_e();return a-s<t||(s=a,o=n(...i)),o}}function R0(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let yT=0;function A0(){return yT++}const ta={};function uc(n=""){return n in ta||(ta[n]=0),ta[n]+=1,n+ta[n].toString()}const wT=["channelsFirst","channelsLast"],vT=["nearest","bilinear"],CT=["valid","same","causal"],$T=["max","avg"],IT=["sum","mul","concat","ave"];const xo=new Map;function te(n){co(wT,"DataFormat",n)}function kT(n){co(vT,"InterpolationFormat",n)}function tn(n){co(CT,"PaddingMode",n)}function D0(n){co($T,"PoolMode",n)}const xr=[],sf="/";function Us(n,t){xr.push(n);try{const e=t();return xr.pop(),e}catch(e){throw xr.pop(),e}}function ST(){return xr.length===0?"":xr.join(sf)+sf}function F0(n){if(!O0(n))throw new Error("Not a valid tensor name: '"+n+"'");return ST()+n}function _0(n){if(!O0(n))throw new Error("Not a valid tensor name: '"+n+"'");xo.has(n)||xo.set(n,0);const t=xo.get(n);if(xo.set(n,xo.get(n)+1),t>0){const e=`${n}_${t}`;return xo.set(e,1),e}else return n}const NT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function O0(n){return!!n.match(NT)}function TT(n){return n===parseInt(n.toString(),10)}function xs(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let o=t;o<e;++o)s*=n[o];return s}function Fo(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function ys(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function $n(n,t){if(t<n)throw new A(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let Bc;function re(){return Bc==null&&(Bc=bv().epsilon()),Bc}function In(){return"channelsLast"}function Ln(n,t){return st(n,t)}function Li(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),O(n,e)}function ET(n,t){return z(()=>{if(n.shape.length!==2)throw new A(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Li(n,1);return vu(e,[1,t,1])})}function RT(n){const t=[xs(n.shape)];return O(n,t)}function AT(n){if(n.rank<=1)throw new A(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],xs(n.shape,1)];return O(n,t)}function Gs(n,t,e){return z(()=>{switch(n.rank){case 1:return Kh(n,t,e);case 2:return Fg(n,[t,0],[e,n.shape[1]]);case 3:return qh(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Aa(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return Bt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return Bt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new A(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function zc(n,t,e){return z(()=>{switch(n.rank){case 1:return Kh(n,t,e);case 2:return Fg(n,[0,t],[n.shape[0],e]);case 3:return qh(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Aa(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new A(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function ea(n,t,e,s){return z(()=>{switch(n.rank){case 1:return Kh(n,t,e);case 2:switch(s){case 1:return Gs(n,t,e);case 2:return zc(n,t,e);default:throw new A(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return Gs(n,t,e);case 2:return qh(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return zc(n,t,e);default:throw new A(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return Gs(n,t,e);case 2:return Aa(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Aa(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return zc(n,t,e);default:throw new A(`The axis is not within the rank of the tensor ${s}`)}default:throw new A(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Od(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Pe(n,t)}function of(n,t){switch(n.rank){case 1:return VC([n,t]);case 2:return UC([n,t],0);case 3:return HC([n,t],0);case 4:return XC([n,t],0);default:throw new A(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function vu(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new A(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return yn(n,t)}function hc(n,t=0,e=1,s,o){return rI(n,t,e,s,o)}function Pn(n,t,e,s){if(n.rank<2||t.rank<2)throw new xt(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const o=n.shape.slice(-1)[0],r=t.shape.slice(-2)[0];if(o!==r)throw new xt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Gp({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Cu(n.rank,s,In()):null,activation:e});{const o=n.shape.slice(),r=o.pop();n=O(n,[-1,r]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(f,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=O(It(t,u),[l,-1]);const h=[...o,...c];return O(Gp({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Cu(n.rank,s,In()):null,activation:e}),h)}}function L0(n,t,e){return z(()=>(Array.isArray(t)?t=Ue(t,"int32"):t=st(t,"int32"),Mh(n,t,e)))}function Pi(n){return D(n,n)}function Cu(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new A(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?O(t,[1,s[0],1,1,1]):O(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?O(t,[1,1,1,1,s[0]]):O(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?O(t,[1,s[0],1,1]):O(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?O(t,[1,1,1,s[0]]):O(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?O(t,[1,s[0],1]):O(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?O(t,[1,1,s[0]]):O(t,[1].concat(s))}else if(n<3)return t;throw new A(`Unsupported input rank by biasAdd: ${t.rank}`)}function Sn(n,t,e){return z(()=>(e==null&&(e=In()),te(e),J(n,Cu(n.rank,t,e))))}function DT(n,t=1){if(t!==1)throw new xt(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return sc(n)}function FT(n){return z(()=>ut(n,J(Te(n),1)))}function P0(n,t,e,s){return z(()=>tk(n,t,e,s))}function _T(n){return z(()=>{const t=J(.5,D(.2,n));return Je(t,0,1)})}function Mi(n,t,e=!1){return e?n():t()}const OT=["fanIn","fanOut","fanAvg"],LT=["normal","uniform","truncatedNormal"];function PT(n){co(OT,"FanMode",n)}function MT(n){co(LT,"Distribution",n)}class dn extends jo{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class M0 extends dn{apply(t,e){return de(t,e)}}M0.className="Zeros";q(M0);class Ld extends dn{apply(t,e){return rn(t,e)}}Ld.className="Ones";q(Ld);class B0 extends dn{constructor(t){if(super(),typeof t!="object")throw new A(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new A(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return z(()=>D(Tt(this.value),rn(t,e)))}getConfig(){return{value:this.value}}}B0.className="Constant";q(B0);class z0 extends dn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Ei(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}z0.className="RandomUniform";q(z0);class V0 extends dn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`randomNormal does not support dType ${e}.`);return hc(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}V0.className="RandomNormal";q(V0);class W0 extends dn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`truncatedNormal does not support dType ${e}.`);return Lg(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}W0.className="TruncatedNormal";q(W0);class U0 extends dn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return z(()=>{if(t.length!==2||t[0]!==t[1])throw new A("Identity matrix initializer can only be used for 2D square matrices.");return D(this.gain,yg(t[0]))})}getConfig(){return{gain:this.gain}}}U0.className="Identity";q(U0);function BT(n,t="channelsLast"){let e,s;if(te(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const o=xs(n,2);e=n[1]*o,s=n[0]*o}else if(t==="channelsLast"){const o=xs(n,0,n.length-2);e=n[n.length-2]*o,s=n[n.length-1]*o}}else{const o=xs(n);e=Math.sqrt(o),s=Math.sqrt(o)}return[e,s]}class He extends dn{constructor(t){if(super(),t.scale<0)throw new A(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,PT(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,MT(this.distribution),this.seed=t.seed}apply(t,e){const s=BT(t),o=s[0],r=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,o):this.mode==="fanOut"?i/=Math.max(1,r):i/=Math.max(1,(o+r)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`${this.getClassName()} does not support dType ${e}.`);return Lg(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return Ei(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}He.className="VarianceScaling";q(He);class Pd extends He{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return He.className}}Pd.className="GlorotUniform";q(Pd);class Md extends He{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return He.className}}Md.className="GlorotNormal";q(Md);class Bd extends He{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return He.className}}Bd.className="HeNormal";q(Bd);class zd extends He{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return He.className}}zd.className="HeUniform";q(zd);class Vd extends He{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return He.className}}Vd.className="LeCunNormal";q(Vd);class Wd extends He{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return He.className}}Wd.className="LeCunUniform";q(Wd);class G0 extends dn{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return z(()=>{if(t.length<2)throw new xt("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=H(t.slice(0,-1)),o=t[t.length-1],r=s*o;r>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${r}) elements: Slowness may result.`);const i=[Math.max(o,s),Math.min(o,s)],a=hc(i,0,1,e,this.seed),l=Yk.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(o,s)*Math.min(o,s)],[Math.min(o,s)+1]);return c=D(c,h.sign()),s<o&&(c=c.transpose()),D(Tt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}G0.className="Orthogonal";q(G0);const rf={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function af(n,t={}){return Oi(n,on.getMap().classNameMap,t,"initializer")}function jt(n){return Fd(n)}function Ut(n){if(typeof n=="string"){const t=n in rf?rf[n]:n;if(t==="GlorotNormal")return new Md;if(t==="GlorotUniform")return new Pd;if(t==="HeNormal")return new Bd;if(t==="HeUniform")return new zd;if(t==="LeCunNormal")return new Vd;if(t==="LeCunUniform")return new Wd;{const e={};return e.className=t,e.config={},af(e)}}else return n instanceof dn?n:af(n)}function $u(n){return Array.isArray(n)&&Array.isArray(n[0])}function Da(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function ft(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new A(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function Nt(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new A(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function Fa(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,o)=>s*o);return t}const lf="Variable";class zT{constructor(t,e="float32",s=lf,o=!0,r=null){this.dtype=e??"float32",this.shape=t.shape,this.id=A0(),s=s??lf,this.originalName=F0(s),this.name=_0(this.originalName),this.trainable_=o,this.constraint=r,this.val=YI(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),VT(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function VT(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Iu(n){return n.map(t=>t.read())}function Ud(n){n.forEach(t=>{t[0].write(t[1])})}class ie{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class Vn{constructor(t,e,s,o,r,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=o,this.callArgs=r,this.outputTensorIndex=a,this.id=A0(),i!=null&&(this.originalName=F0(i),this.name=_0(this.originalName)),this.rank=e.length}}let WT=0;class dc{constructor(t,e){this.callArgs=e,this.id=WT++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let UT=0;class vt extends jo{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=UT++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=Xn(s)+"_"+uc(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let r=null;t.batchSize!=null&&(r=t.batchSize),s=[r].concat(t.inputShape)}this.batchInputShape=s;let o=t.dtype;o==null&&(o=t.inputDType),o==null&&(o="float32"),this.dtype=o}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new an(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new A(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return Le(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return Le(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new En(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new En(`Layer ${this.name} is not connected, no input to return.`);return Le(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new En(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new En(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Le(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=At(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=At(this.inputSpec);if(e.length!==s.length)throw new A(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let o=0;o<e.length;o++){const r=e[o],i=s[o];if(i==null)continue;const a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new A(`Input ${o} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new A(`Input ${o} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new A(`Input ${o} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new A(`Input ${o} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const l=r.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new A(`Input ${o} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=r.shape[l];if(c!=null&&u!=null&&c!==u)throw new A(`Input ${o} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=At(t),o=jT(t),r=XT(t);if(o===r)throw new A("Arguments to apply() must be all SymbolicTensors or all Tensors");return Us(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of At(t))i.push(a.shape);this.build(Le(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&r&&(this._refCount=1)}if(this.assertInputCompatibility(t),r){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=At(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=Le(l),this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=GT(t),a=this.computeOutputShape(i);let l;const c=HT(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new Vn(c,u,this,At(t),e,this.name,h)):l=new Vn(c,a,this,At(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,o)=>{s!=null&&t[o]!=null&&t[o]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new En(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new En(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new an(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Fa(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Iu(t?this.trainableWeights:this.weights)}setWeights(t){z(()=>{const e=this.weights;if(e.length!==t.length)throw new A(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],o=Iu(e);for(let r=0;r<o.length;++r){const i=o[r],a=e[r],l=t[r];if(!Et(i.shape,l.shape))throw new A(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}Ud(s)})}addWeight(t,e,s,o,r,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new A(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(o=l!=null?l():Ut("zeros"));const c=o.apply(e,s),u=new zT(c,s,t,i,a);return c.dispose(),r!=null&&this.addLoss(()=>r.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=At(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const o=this.computeMask(t,s),r=At(e),i=At(o);if(r.length!==i.length)throw new Error(`${this.name} outputs ${r.length} tensors but ${r.length} masks for those tensors`);for(let a=0;a<r.length;a++)r[a].kerasMask=i[a]}addInboundNode(t,e,s,o,r,i,a=null){const l=At(t);e=At(e),s=At(s),o=At(o),r=Da(r),i=Da(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new dc({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:o,inputShapes:r,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function GT(n){n=At(n);const t=[];for(const e of n)t.push(e.shape);return Le(t)}function HT(n){return"float32"}function H0(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const o=[];for(let r=0;r<s.inboundLayers.length;r++){const i=s.inputTensors[r],a=s.inboundLayers[r],l=s.nodeIndices[r],c=H0(i,a,l);for(const u of c)o.indexOf(u)===-1&&o.push(u)}return o}}}function jT(n){let t=!0;for(const e of At(n))if(!(e instanceof Vn)){t=!1;break}return t}function XT(n){let t=!0;for(const e of At(n))if(e instanceof Vn){t=!1;break}return t}class Bi extends vt{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:uc("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new A("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new A("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new A("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const o=new Vn(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new dc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new A(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Bi.className="InputLayer";q(Bi);function KT(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new A("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Bi({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function qT(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return st(t,n.dtype)}catch{throw new A(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class ds{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof ds)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=qT(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new A(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof Vn){if(this.id2Value[t.id]==null)throw new A(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new A(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof Vn){if(this.id2Value[t.id]==null)throw new A(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new A(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&Ct(this.id2Mask)}}const _a=new T0,Oa=new T0;function YT(n){_a?.setMaxEntries(n),Oa?.setMaxEntries(n)}function dr(n,t,e,s){const o=e==null?!1:e.training,r=Array.isArray(n),i=r?n:[n],a=i.map(f=>f.name),l=[],c=t.names();for(const f of a)c.indexOf(f)!==-1?l.push(t.getValue(f)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=_a.get(u),d;if(h==null){const f=ZT(i,t);h=f.sorted,d=f.recipientCounts,_a.put(u,h),Oa.put(u,d)}d={},o||Object.assign(d,Oa.get(u));const p=new ds(t);for(let f=0;f<h.length;++f){const m=h[f],g=m.sourceLayer;if(g instanceof Bi)continue;const x=[],b=[],y=[];let w=!1;for(const k of m.inputs){const S=p.getValue(k),C=p.getMask(k);x.push(S),b.push(C),C!=null&&(w=!0),o||(d[k.name]--,d[k.name]===0&&!t.hasKey(k)&&a.indexOf(k.name)===-1&&!S.isDisposed&&k.sourceLayer.stateful!==!0&&y.push(S))}w&&(e=e||{},e.mask=b[0]);const v=At(g.apply(x,e));let $=null;g.supportsMasking&&($=g.computeMask(x,b));const N=QT(m),T=Array.isArray(N)?N:[N];for(let k=0;k<T.length;++k){p.hasKey(T[k])||p.add(T[k],v[k],Array.isArray($)?$[0]:$);const S=a.indexOf(T[k].name);S!==-1&&(l[S]=v[k])}o||Ct(y)}return p.disposeMasks(),r?l:l[0]}function ZT(n,t){I(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const o=cf(n[0],t);e=o.sorted,s=o.recipientMap}else{const o=new Set;for(const r of n){const{sorted:i,recipientMap:a}=cf(r,t);for(const l of i)o.has(l.name)||(e.push(l),o.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:JT(s)}}function JT(n){const t={};for(const e in n)t[e]=n[e].size;return t}function cf(n,t){const e=new Set,s=[],o={};for(const a of t.names())e.add(a);const r=[],i=[];for(r.push(n);r.length>0;){const a=r[r.length-1];if(e.has(a.name)){r.pop();continue}const l=i[i.length-1]===r.length-1;if(a.inputs.length===0||l)r.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(r.length-1);for(const c of a.inputs)o[c.name]==null&&(o[c.name]=new Set),o[c.name].add(a.name),!e.has(c.name)&&r.push(c)}}return{sorted:s,recipientMap:o}}function QT(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const o of n.sourceLayer.inboundNodes[s].outputTensors)if(o.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}const tE=V();tE.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,YT);function Gd(n,t){return z(()=>$e(ct(D(n,n),t,!0)))}class zi extends jo{getConfig(){return{}}}class j0 extends zi{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return z(()=>{const e=Gd(t,this.axis),s=Je(e,0,this.maxValue);return D(t,ut(s,J(re(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}j0.className="MaxNorm";q(j0);class X0 extends zi{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return z(()=>ut(t,J(re(),Gd(t,this.axis))))}getConfig(){return{axis:this.axis}}}X0.className="UnitNorm";q(X0);class K0 extends zi{apply(t){return ao(t)}}K0.className="NonNeg";q(K0);class q0 extends zi{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return z(()=>{const e=Gd(t,this.axis),s=J(D(this.rate,Je(e,this.minValue,this.maxValue)),D(1-this.rate,e));return D(t,ut(s,J(re(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}q0.className="MinMaxNorm";q(q0);const uf={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ae(n){return Fd(n)}function hf(n,t={}){return Oi(n,on.getMap().classNameMap,t,"constraint")}function le(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in uf?uf[n]:n,config:{}};return hf(e)}else return n instanceof zi?n:hf(n)}async function _s(n){if(n==null)return;const t=[],e=[],s=[];for(const o in n){const r=n[o];if(typeof r!="number"){const i=r;t.push(i.data()),e.push(o),s.push(i)}}if(t.length>0){const o=await Promise.all(t);for(let r=0;r<o.length;++r)n[e[r]]=o[r][0];Ct(s)}}function Y0(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var df;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(df||(df={}));const eE=125;class $r{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class nE{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class sE extends $r{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const o in e){const r=e[o];if(typeof r=="number")this.totals.hasOwnProperty(o)||(this.totals[o]=0),this.totals[o]=this.totals[o]+r*s;else{let i;o in this.totals?i=this.totals[o]:this.totals[o]=0;const a=z(()=>J(this.totals[o],D(r,s)));this.totals[o]=a,i?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:z(()=>{const o=D(ut(1,this.seen),this.totals[s]);e[s]=o,this.totals[s].dispose(),_n(e[s])}))}}class oE extends $r{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const r in this.history){const i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(r),s.push(a)}}const o=await Promise.all(t);for(let r=0;r<o.length;++r)this.history[e[r]][s[r]].dispose(),this.history[e[r]][s[r]]=o[r][0]}}class rE extends $r{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||e0,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=eE),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");tu(this.yieldEvery)&&(this.maybeWait=bT(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const o=[];this.yield!=null&&(await _s(s),o.push(this.yield(t,e,s))),o.push(this.nextFrameFunc()),await Promise.all(o)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await _s(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await _s(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await _s(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await _s(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):tu(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await _s(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await _s(t),await this.trainEnd(t))}}function Z0(n,t){return n==null&&(n={}),n instanceof $r?[n]:Array.isArray(n)&&n[0]instanceof $r?n:At(n).map(s=>new rE(s,t))}class sn{constructor(){}static registerCallbackConstructor(t,e){I(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),sn.checkForDuplicate(e),sn.constructors[t]==null&&(sn.constructors[t]=[]),sn.constructors[t].push(e)}static checkForDuplicate(t){for(const e in sn.constructors)sn.constructors[+e].forEach(o=>{if(o===t)throw new A("Duplicate callback constructor.")})}static clear(){sn.constructors={}}static createCallbacks(t){const e=[];for(const s in sn.constructors){const o=+s;t>=o&&e.push(...sn.constructors[o])}return e.map(s=>new s)}}sn.constructors={};function J0(n,t,e,s,o,r,i,a,l){const c=new oE,u=[new sE,...sn.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new nE(u);return h.setParams({epochs:e,initialEpoch:s,samples:o,steps:r,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function Yn(n,t={},e=!1){return Oi(n,on.getMap().classNameMap,t,"layer",e)}function La(n,t){return z(()=>{n.dtype!=="float32"&&(n=st(n,"float32"));const e=ct(Pi(n),t,!0),s=nc(e.shape,re()),o=$e(Ts(e,s));return ut(n,o)})}function pc(n,t){return z(()=>ne(Pi(pt(t,n)),-1))}function Hd(n,t){return z(()=>ne(Te(pt(t,n)),-1))}function jd(n,t){return z(()=>{const e=pt(n,t),s=Je(Te(n),re(),Number.MAX_VALUE),o=Te(ut(e,s));return D(100,ne(o,-1))})}function iE(n,t){return z(()=>{const e=Je(t,re(),Number.MAX_VALUE),s=zn(J(1,e)),o=Je(n,re(),Number.MAX_VALUE),r=zn(J(1,o));return ne(Pi(pt(s,r)),-1)})}function aE(n,t){return z(()=>{const e=Ts(0,pt(1,D(n,t)));return ne(Pi(e),-1)})}function lE(n,t){return z(()=>{const e=Ts(0,pt(1,D(n,t)));return ne(e,-1)})}function cE(n,t){return z(()=>{const e=ct(D(n,t),-1),s=vn(D(pt(1,n),t),-1);return Ts(0,J(1,pt(s,e)))})}function uE(n,t){return z(()=>{const e=Math.log(2),s=pt(t,n),o=pt(J(s,Ti(D(-2,s))),e);return ne(o,-1)})}function Ir(n,t,e=!1){return z(()=>{if(e)t=Yh(t);else{const s=ct(t,t.shape.length-1,!0);t=ut(t,s)}return t=Je(t,re(),1-re()),Zt(ct(D(st(n,"float32"),zn(t)),t.shape.length-1))})}function Pa(n,t,e=!1){return z(()=>{const s=st(rc(RT(n)),"int32");t=Je(t,re(),1-re());const o=t.shape,r=O(Ig(s,o[o.length-1]),o);return Ir(r,t,e)})}function hE(n,t){if(!Et(n.shape,t.shape))throw new A(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return z(()=>{const e=ao(t),s=Zt(Te(t));return J(pt(e,D(t,n)),wg(Bn(s)))})}function fc(n,t){return z(()=>{let e;return e=Je(t,re(),1-re()),e=zn(ut(e,pt(1,e))),ne(hE(n,e),-1)})}function dE(n,t){return z(()=>{const e=Je(n,re(),1),s=Je(t,re(),1);return ct(D(n,zn(ut(e,s))),-1)})}function pE(n,t){return z(()=>{const e=zn(J(re(),t));return ne(pt(t,D(n,e)),-1)})}function Q0(n,t){return z(()=>{const e=La(n,-1),s=La(t,-1),o=D(e,s);return Zt(ct(o,-1))})}const Ma={meanSquaredError:pc,meanAbsoluteError:Hd,meanAbsolutePercentageError:jd,meanSquaredLogarithmicError:iE,squaredHinge:aE,hinge:lE,categoricalHinge:cE,logcosh:uE,categoricalCrossentropy:Ir,sparseCategoricalCrossentropy:Pa,binaryCrossentropy:fc,kullbackLeiblerDivergence:dE,poisson:pE,cosineProximity:Q0};function Vc(n){if(typeof n=="string"){if(n in Ma)return Ma[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new A(t)}else return n}function tx(n,t){return z(()=>{const e=D(.5,un(t)),s=Ln(Qe(t,e),n.dtype);return ne(Mn(n,s),-1)})}function ex(n,t){return z(()=>Ln(Mn(br(n,-1),br(t,-1)),"float32"))}function fE(n,t){return z(()=>st(ct(Zn(Mn(n,1),Mn(t,1))),"float32"))}function mE(n,t){return z(()=>st(ct(Zn(Mn(n,0),Mn(t,1))),"float32"))}function gE(n,t){return z(()=>{const e=fE(n,t),s=mE(n,t),o=J(e,s);return st(Ae(Qe(o,0),ut(e,o),0),"float32")})}function xE(n,t){return fc(n,t)}function bE(n,t){return n.rank===t.rank&&(n=Ri(n,[n.rank-1])),t=br(t,-1),t.dtype!==n.dtype&&(t=st(t,n.dtype)),st(Mn(n,t),"float32")}const yE=pc,wE=pc,vE=Hd,CE=Hd,$E=jd,IE=jd,nx=Ir,kE=Q0,sx=Pa,Ba={binaryAccuracy:tx,categoricalAccuracy:ex,precision:gE,categoricalCrossentropy:nx,sparseCategoricalCrossentropy:sx,mse:yE,MSE:wE,mae:vE,MAE:CE,mape:$E,MAPE:IE,cosine:kE};function SE(n){if(typeof n=="string"&&n in Ba)return Ba[n];if(typeof n!="string"&&n!=null)return n;throw new A(`Unknown metric ${n}`)}function na(n){if(Rn(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(Ma))if(Ma[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(Ba))if(Ba[e]===n){t=e;break}return t!==void 0?t:n.name}}function NE(n){const t={Adagrad:()=>go.adagrad(.01),Adadelta:()=>go.adadelta(1,.95,re()),Adam:()=>go.adam(.001,.9,.999,re()),Adamax:()=>go.adamax(.002,.9,.999,re(),0),RMSProp:()=>go.rmsprop(.001,.9,0,re()),SGD:()=>go.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new A(`Unknown Optimizer ${n}`)}const pf=1*1024*1024;function ff(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!ku(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>pf&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${pf}.`)}}function ku(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!ku(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!ku(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function TE(n,t,e,s=console.log){const o=RE(n),r=["Layer (type)","Input Shape","Output shape","Param #"];o?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!o){r.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),za(r,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)o?AE(a[u],e,s):DE(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=EE(n),c=Fa(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function EE(n){let t;return n.collectedTrainableWeights!=null?t=Fa(n.collectedTrainableWeights):t=Fa(n.trainableWeights),t}function RE(n){let t=!0;const e=[],s=[];for(const o in n.nodesByDepth)e.push(n.nodesByDepth[o]);for(const o of e){if(o.length>1||o.length===1&&o[0].inboundLayers.length>1){t=!1;break}s.push(...o)}if(t)for(const o of n.layers){let r=!1;for(const i of o.inboundNodes)if(s.indexOf(i)!==-1)if(r){t=!1;break}else r=!0;if(!t)break}return t}function za(n,t,e=console.log){let s="";for(let o=0;o<n.length;++o)o>0&&(s=s.slice(0,s.length-1)+" "),s+=n[o],s=s.slice(0,t[o]),s+=" ".repeat(t[o]-s.length);e(s)}function AE(n,t,e){let s,o;try{o=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{o="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const r=n.name,i=n.getClassName(),a=[`${r} (${i})`,o,s,n.countParams().toString()];za(a,t,e)}function DE(n,t,e,s){let o,r;try{r=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{r="multiple"}try{o=JSON.stringify(n.outputShape)}catch{o="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const p=h.inboundLayers[d].name,f=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${p}[${f}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,r,o,n.countParams().toString(),c];za(u,t,s);for(let h=1;h<i.length;++h)za(["","","","",i[h]],t,s)}function ox(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function Su(n,t){if(n===null)return null;if(typeof n=="string")return Ms(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];ox(t,o,r)?e.push(r):e.push(Su(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s];if(s==="name"&&typeof o=="string")e[s]=o;else{const r=Ms(s);e[r]=Su(o,r)}}return e}}function Nu(n,t){if(n==null)return null;if(typeof n=="string")return Xn(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];ox(t,o,r)?e.push(r):e.push(Nu(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s],r=Xn(s);(s==="name"||s==="className")&&typeof o=="string"?e[r]=o:e[r]=Nu(o,s)}return e}}const rx="4.22.0";const FE=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class gn extends vt{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=uc(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],gs(this.inputs).length!==this.inputs.length)throw new A(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);gs(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const y=b.sourceLayer,w=b.nodeIndex,v=b.tensorIndex;this.outputLayers.push(y),this.outputLayersNodeIndices.push(w),this.outputLayersTensorIndices.push(v)}for(const b of this.inputs){const y=b.sourceLayer,w=b.nodeIndex,v=b.tensorIndex;Rn(w===0,"input layer has >1 nodes"),Rn(v===0,"input layer has >1 tensors"),this.inputLayers.push(y),this.inputLayersNodeIndices.push(w),this.inputLayersTensorIndices.push(v)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const y=this.inputLayers[b];if(!(y instanceof Bi))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${y.getClassName()}.`);this.inputNames.push(y.name),this.feedInputShapes.push(y.batchInputShape),this.feedInputNames.push(y.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},o={},r={},i={},a=[],l=(b,y,w,v,$,N)=>{(v==null||$==null||N==null)&&(v=b.sourceLayer,$=b.nodeIndex,N=b.tensorIndex);const T=v.inboundNodes[$];if(w.indexOf(T)!==-1)throw new an(`The tensor ${b.name} at layer "${v.name}" is part of a cycle.`);if(y.indexOf(T)!==-1)return;this.containerNodes.add(gn.nodeKey(v,$)),v.id in i||(i[v.id]=Object.keys(i).length),w.indexOf(T)===-1&&w.push(T);const k=T.inboundLayers.length;for(let S=0;S<k;S++){const C=T.inputTensors[S],R=T.inboundLayers[S],_=T.nodeIndices[S],M=T.tensorIndices[S];l(C,y,w,R,_,M)}for(y.push(T);w.indexOf(T)>=0;)w.splice(w.indexOf(T),1);a.push(T)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let y=e[b.id];const w=o[b.outboundLayer.id]==null?0:o[b.outboundLayer.id];y=Math.max(y,w),o[b.outboundLayer.id]=y,r[b.outboundLayer.id]=b.outboundLayer,e[b.id]=y;for(let v=0;v<b.inboundLayers.length;v++){const $=b.inboundLayers[v],N=b.nodeIndices[v],T=$.inboundNodes[N],k=e[T.id]==null?0:e[T.id];e[T.id]=Math.max(y+1,k),s[T.id]=T}}const d={};for(const b in e){const y=e[b];y in d||(d[y]=[]),d[y].push(s[b])}const p={};for(const b in o){const y=o[b];y in p||(p[y]=[]),p[y].push(r[b])}let f=Object.keys(p).map(b=>parseInt(b,10)).sort(Qi);this.layers=[];for(const b of f){const y=p[b];y.sort((w,v)=>{const $=i[w.id],N=i[v.id];return $<N?-1:$>N?1:0});for(const w of y)w instanceof gn&&this.internalContainerRefs.push(w),this.layers.push(w)}this.layersByDepth=p,f=Object.keys(d).map(b=>parseInt(b,10)).sort(Qi);const m=this.inputs.slice(),g=[];for(const b of f)for(const y of d[b]){const w=y.outboundLayer;if(w!=null){for(const v of y.inputTensors)if(m.indexOf(v)===-1)throw new an(`Graph disconnected: cannot obtain value for tensor ${v} at layer "${w.name}". The following previous layers were accessed without issue: ${g}`);for(const v of y.outputTensors)m.push(v);g.push(w.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const y=x.filter(w=>w===b).length;if(y!==1)throw new an(`The name "${b}" is used ${y} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new dc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new A("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let o=0;const r=FE(t);r&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=r?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new A(`Duplicate weight name: ${u}`);s[u]=c,o++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new A(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new A(`${a.length} of ${o} weights are not set: ${a}`)}Ud(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),o=["vars","layer_checkpoint_dependencies"],r=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!o.includes(i)).join("/");r!==e&&(t[r]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${rx}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Nu(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return z(()=>{t=At(t);const s=new ds;for(let o=0;o<this.inputs.length;++o)s.add(this.inputs[o],t[o]);return dr(this.outputs,s,e)})}computeMask(t,e){return z(()=>{t=At(t);let s;return e==null?s=eo(null,t.length):s=At(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=Da(t);if(e.length!==this.inputLayers.length)throw new A(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const o=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(Qi);if(o.length>1)for(const a of o){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],y=`${g.name}_${x}_${b}`,w=s[y];h.push(w)}const d=u.computeOutputShape(Le(h)),p=Da(d),f=u.inboundNodes.indexOf(c);for(let m=0;m<p.length;m++){const g=`${u.name}_${f}_${m}`;s[g]=p[m]}}}const r=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];Rn(l in s),r.push(s[l])}return Le(r)}runInternalGraph(t,e){e==null&&(e=eo(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const o=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(Qi);for(const l of o){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,p=u.outputTensors,f=new Array;for(const m of d)m.id in s&&f.push(s[m.id]);if(f.length===d.length){let m={},g,x,b,y;if(u.callArgs!=null&&(m=u.callArgs),f.length===1){const[w,v]=f[0];m.mask==null&&(m.mask=v),b=At(h.call(w,m)),y=At(h.computeMask(w,v)),g=[w],x=[v]}else g=f.map(w=>w[0]),x=f.map(w=>w[1]),m.mask==null&&(m.mask=x),b=At(h.call(g,m)),y=At(h.computeMask(g,x));if(h.activityRegularizer)throw new xt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let w=0;w<p.length;++w){const v=p[w],$=b[w],N=y[w];s[v.id]=[$,N]}}}}const r=[],i=[],a=[];for(const l of this.outputs){Rn(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),r.push(c),i.push(u)}return[r,i,a]}buildNodeConversionMap(t){const e={};let s;for(const o of this.layers){s=o instanceof gn?1:0;for(let r=0;r<o.inboundNodes.length;r++){const i=gn.nodeKey(o,r);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new A("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new A(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new A(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return z(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const o=gn.nodeKey(e,s);this.containerNodes.has(o)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],p=gn.nodeKey(i,h);let f={};if(this.containerNodes.has(p)){if(d.callArgs)try{JSON.stringify(d.callArgs),f=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),f={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],y=d.tensorIndices[g],w=gn.nodeKey(x,b);let v=e[w];v==null&&(v=0),m.push([x.name,v,y,f])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const o=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=gn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];o.push([a.name,u,h])}t.inputLayers=o;const r=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=gn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];r.push([a.name,u,h])}return t.outputLayers=r,t}static fromConfig(t,e,s={},o=!1){const r={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let y;for(const w of x){const v=w[0],$=w[1],N=w[2];if(y=w[3]==null?{}:w[3],!(v in r)){a(g,x);return}const T=r[v];if(T.inboundNodes.length<=$){a(g,x);return}const k=T.inboundNodes[$];b.push(k.outputTensors[N])}b.length>0&&g.apply(Le(b),y)}function c(g){const x=g.name,b=Yn(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(o),r[x]=b,g.inboundNodes.forEach(w=>{if(!(w instanceof Array))throw new A(`Corrupted configuration, expected array for nodeData: ${w}`);a(b,w)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!xT(i);)for(const g of h){const x=r[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const y of b)l(x,y)}}const d=[],p=[],f=e.inputLayers;for(const g of f){const x=g[0],b=g[1],y=g[2];Rn(x in r);const v=r[x].inboundNodes[b].outputTensors;d.push(v[y])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],y=g[2];Rn(x in r);const v=r[x].inboundNodes[b].outputTensors;p.push(v[y])}return new t({inputs:d,outputs:p,name:u})}get stateful(){if(this._stateful)throw new A("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){z(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function _E(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(o=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const o=[];return t.forEach(r=>{r in n?o.push(n[r]):o.push(null)}),o}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function ix(n,t){return _E(n,t,"classWeight")}async function ax(n,t,e,s){if(e!=null){const o=z(()=>{if(n.shape.length===1)return Ws(n);if(n.shape.length===2){if(n.shape[1]>1)return br(n,1);if(n.shape[1]===1)return O(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await o.data());Ct(o);const i=[];return r.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),Ue(i,"float32")}else return null}function OE(n,t){return D(n,t)}const LE=32;function lx(n,t){let e,s;const o=t;e=o.xs,s=o.ys,I(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const r=mf("input",n.inputNames,e),i=mf("output",n.outputNames,s),a=r[0].shape[0];I(r.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),I(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<r.length;l++)I(r[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${r[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)I(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:r,ys:i}}function mf(n,t,e){if(e instanceof qt)return[e];if(Array.isArray(e))return I(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const o of t){if(e[o]==null)throw new A(`The feature data generated by the dataset lacks the required ${n} key '${o}'.`);s.push(e[o])}return s}}function PE(n){if(n.length===3)throw new xt("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function ME(n,t,e){const s=e.batchesPerEpoch!=null;if(I(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),I(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),I(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),I(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),I(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const o=e.validationData!=null;let r,i;if(o)if(gf(e.validationData))I(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=PE(e.validationData);r=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;o?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=Z0(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:p}=J0(u,h,e.epochs,null,null,BE(t,e),null,o,c);d.setModel(n),n.history=p,await d.onTrainBegin(),n.stopTraining_=!1;let f=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;f<e.epochs;){const g={};await d.onEpochBegin(f);let x=0,b=0;for(s||(m=await t.iterator());!s||x<e.batchesPerEpoch;){const y=await m.next();if(s&&y.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(y.value!=null){const{xs:w,ys:v}=lx(n,y.value),$={};$.batch=b,$.size=w[0].shape[0],await d.onBatchBegin(b,$);const N=[];if(e.classWeight!=null){const S=ix(e.classWeight,n.outputNames);for(let C=0;C<S.length;++C)N.push(await ax(v[C],null,S[C]))}const T=w.concat(v).concat(N),k=a(T);Ct(T);for(let S=0;S<l.length;++S){const C=l[S],R=k[S];$[C]=R,_n(R)}await d.onBatchEnd(b,$),Y0($),b++,x++}if(s?x>=e.batchesPerEpoch:y.done){if(o){let w;gf(e.validationData)?w=At(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):w=At(n.evaluate(r,i,{batchSize:e.validationBatchSize==null?LE:e.validationBatchSize,verbose:0}));for(let v=0;v<n.metricsNames.length;++v)g[`val_${n.metricsNames[v]}`]=w[v]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(f,g),f++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function BE(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function gf(n){return typeof n.iterator=="function"}function zE(n){return typeof n.next=="function"}async function VE(n,t,e){e=e||{};const s=e.batches!=null,o=n.testFunction;let r=[];if(e.verbose>0)throw new xt("Verbose mode is not implemented yet.");I(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=zE(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=await i.next();if(r=z(()=>{if(c.value){const{xs:u,ys:h}=lx(n,c.value),d=u.concat(h),p=z(()=>o(d));if(Ct(d),l===0)for(let m=0;m<p.length;++m)r.push(Tt(0));const f=d[0].shape[0];for(let m=0;m<p.length;++m){const g=p[m],x=r[m];r[m]=z(()=>J(r[m],D(f,g))),l>0&&Ct(x)}Ct(p),a+=f,++l}return r}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<r.length;++c){const u=r[c];r[c]=ut(r[c],a),Ct(u)}return Le(r)}function Wc(n){I(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function lr(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>Gs(s,t,e-t)):Gs(n,t,e-t)}function Tu(n,t){return z(()=>n==null?null:Array.isArray(n)?n.map(e=>Tu(e,t)):L0(n,t.dtype==="int32"?t:st(t,"int32")))}function Uc(n,t){const e=[];let s=0,o=null;for(;s<n;)o=s+t,o>=n&&(o=n),e.push([s,o]),s=o;return e}function cx(n){const t=[];n instanceof qt&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Li(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function mn(n,t){if(n==null)return;const e=[];if(t instanceof qt)e.push(t.id);else if(Array.isArray(t))t.forEach(o=>e.push(o.id));else if(t!=null)for(const o in t){const r=t[o];e.push(r.id)}const s=[];if(n instanceof qt)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(o=>{e.indexOf(o.id)===-1&&s.push(o)});else if(n!=null)for(const o in n){const r=n[o];e.indexOf(r.id)===-1&&s.push(r)}s.forEach(o=>{o.isDisposed||o.dispose()})}function WE(n){return n instanceof qt}function Eu(n){return Array.isArray(n)}function xf(n){return!WE(n)&&!Eu(n)}function bf(n,t,e,s=!0,o=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Eu(n)&&n.length>0)i=!0;else if(xf(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new A(`Error when checking model ${o} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let r;if(xf(n)){n=n,r=[];for(const i of t){if(n[i]==null)throw new A(`No data provided for "${i}". Need data for each key in: ${t}`);r.push(n[i])}}else if(Eu(n)){if(n=n,n.length!==t.length)throw new A(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);r=n}else{if(n=n,t.length>1)throw new A(`The model ${o} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);r=[n]}if(r=cx(r),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new A(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new A(`${o} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${o} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return r}function UE(n,t,e){const s=gs(n.map(r=>r.shape[0]));s.sort();const o=gs(t.map(r=>r.shape[0]));if(o.sort(),s.length>1)throw new A(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(r=>r.shape))}`);if(o.length>1)throw new A(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(r=>r.shape))}`);if(s.length>0&&o.length>0&&!Et(s,o))throw new A(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${o[0]} target sample(s).`)}function GE(n,t,e){const s=[pc,fc,Ir];for(let o=0;o<n.length;++o){const r=n[o],i=t[o],a=e[o];if(i!=null){if(i===Ir&&r.shape[r.shape.length-1]===1)throw new A(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=r.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new A(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function yf(n,t,e,s=!0,o=""){let r;if(Array.isArray(n)){if(n.length!==t.length)throw new A(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);r=n}else{if(t.length>1)throw new A(`The model expects ${t.length} ${o} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);r=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new A(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new A(`Error when checking ${o}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function HE(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const o of t){let r=e.hasOwnProperty(o)?e[o]:[];Array.isArray(r)||(r=[r]),s.push(r)}return s}}const jE="layers-model";class ko extends gn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new A("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");TE(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=NE(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Es))throw new A("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new A(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(Vc(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new A(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>Vc(a))}else{const i=Vc(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],Us("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const o=HE(t.metrics,this.outputNames),r=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};Us("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=o[i];(c=>{let h,d,p;for(const f of c){if(typeof f=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(f)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===fc?["accuracy","acc"].indexOf(f)!==-1?d=tx:["crossentropy","ce"].indexOf(f)!==-1&&(d=xE):this.lossFunctions[i]===Pa?["accuracy","acc"].indexOf(f)!==-1?d=bE:["crossentropy","ce"].indexOf(f)!==-1&&(d=sx):["accuracy","acc"].indexOf(f)!==-1?d=ex:["crossentropy","ce"].indexOf(f)!==-1&&(d=nx);let x;["accuracy","acc"].indexOf(f)!==-1?x="acc":["crossentropy","ce"].indexOf(f)!==-1&&(x="ce"),p=d,h=""+x}else p=SE(f),h=""+na(f);let m;Us(h,()=>{m=p}),r(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const o=s.batchSize==null?32:s.batchSize;Wc(o);const i=this.standardizeUserDataXY(t,e,!0,o);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,o,s.verbose,s.steps);return Le(c)}finally{mn(i[0],t),mn(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),VE(this,t,e)}checkNumSamples(t,e,s,o="steps"){let r;if(s!=null){if(r=null,e!=null)throw new A(`If ${o} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?r=t[0].shape[0]:r=t.shape[0];else throw new A(`Either the input data should have a defined shape, or ${o} shoud be specified.`);return r}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new A("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),o=s?e:[e],r=this.retrieveSymbolicTensors(o),i=new ds;if(t instanceof qt&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new A(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new A(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=dr(r,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=eo(null,t.length);let s=t.length;for(const o of this.layers){const r=Array.isArray(o.output)?o.output:[o.output],i=r.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=r[l],s--),s===0)break}if(s===0)break}if(s>0){const o=[];throw e.forEach((r,i)=>{r==null&&o.push(t[i])}),new A(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(o)}`)}return e}predictLoop(t,e=32,s=!1){return z(()=>{const o=this.checkNumSamples(t);if(s)throw new xt("Verbose predictLoop() is not implemented yet.");const r=Uc(o,e),i=this.outputs.map(a=>[]);for(let a=0;a<r.length;++a)z(()=>{const c=r[a][0],u=r[a][1],h=lr(t,c,u),d=[];if(Array.isArray(h))for(let f=0;f<h.length;++f)d.push({key:this.inputs[f],value:h[f]});else d.push({key:this.inputs[0],value:h});const p=new ds(d);return dr(this.outputs,p)}).forEach((c,u)=>i[u].push(c));return Le(i.map(a=>Pe(a,0)))})}predict(t,e={}){const s=cx(t);yf(s,this.inputNames,this.feedInputShapes,!1);try{const o=e.batchSize==null?32:e.batchSize;return Wc(o),this.predictLoop(s,o)}finally{mn(s,t)}}predictOnBatch(t){yf(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,o){if(this.optimizer_==null)throw new an("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const r=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===Pa?r.push(a.slice(0,a.length-1).concat([1])):r.push(a)}if(t=bf(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=bf(e,this.feedOutputNames,r,!1,"target"),UE(t,e),GE(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&o!=null&&o>0&&t[0].shape[0]%o!==0)throw new A(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${o}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,o,r=!0,i){const[a,l]=this.standardizeUserDataXY(t,e,r,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(o!=null){const u=ix(o,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await ax(l[h],null,u[h]))}return[a,l,c]}testLoop(t,e,s,o=0,r){return z(()=>{const i=this.checkNumSamples(e,s,r,"steps"),a=[];if(o>0)throw new xt("Verbose mode is not implemented yet.");if(r!=null)throw new xt("steps mode in testLoop() is not implemented yet");{const l=Uc(i,s),c=Ue($n(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],p=Gs(c,h,d-h),f=Tu(e,p),m=t(f);if(u===0)for(let g=0;g<m.length;++g)a.push(Tt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=J(a[g],D(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=ut(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const o=t[s];let r=o;if(nf(t,o)>1){const i=nf(t.slice(0,s),o);r+=`_${i}`}e.push(r)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new ds(h),p=dr(this.outputs,d,{training:!0});let f;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(o[m],p[m]);r[m]!=null&&(x=OE(x,r[m]));const b=ne(x);e.push(b),m===0?f=x:f=J(f,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=ne(x(o[b],p[b]))}_n(g),i.push(g)}return f=ne(f),this.calculateLosses().forEach(m=>{f=J(f,m)}),f},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>z(()=>{const e=[];let s;const o=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:o[c]});const a=new ds(i),l=dr(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=ne(u(r[c],l[c]));c===0?s=h:s=J(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=ne(u(r[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let o,r,i,a,l,c,u,h,d;try{const p=s.batchSize==null?32:s.batchSize;Wc(p);const m=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,p);o=m[0],r=m[1],d=m[2];let g=!1,x;if(s.validationData!=null&&s.validationData.length>0){if(g=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new xt("validationData including sample weights is not supported yet."):new A(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const S=await this.standardizeUserData(l,c,null,null,!0,p);u=S[0],h=S[1],x=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){g=!0;const k=Math.floor(o[0].shape[0]*(1-s.validationSplit)),S=o[0].shape[0];u=lr(o,k,S),i=o,o=lr(o,0,k),h=lr(r,k,S),a=r,r=lr(r,0,k),x=u.concat(h)}else s.validationSteps!=null&&(g=!0);const b=o.concat(r).concat(d);this.checkTrainableWeightsConsistency();const y=this.makeTrainFunction(),w=this.getDedupedMetricsNames();let v,$;g?(this.makeTestFunction(),v=this.testFunction,$=w.slice().concat(w.map(k=>"val_"+k))):(v=null,x=[],$=w.slice());const N=Z0(s.callbacks,s.yieldEvery);return await this.fitLoop(y,b,w,p,s.epochs,s.verbose,N,v,x,s.shuffle,$,s.initialEpoch,null,null)}finally{this.isTraining=!1,mn(o,t),mn(r,e),mn(i,t),mn(a,e),mn(u,l),mn(h,c),d!=null&&Ct(d)}}async fitLoop(t,e,s,o,r,i,a,l,c,u,h,d,p,f){o==null&&(o=32),r==null&&(r=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),f!=null&&(m=!0,p==null))throw new A("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,o,p,"steps_per_epoch");let x;g!=null&&(x=$n(0,g)),i==null&&(i=1);const{callbackList:b,history:y}=J0(a,i,r,d,g,p,o,m,h);b.setModel(this),this.history=y,await b.onTrainBegin(),this.stopTraining_=!1;for(let w=d;w<r;++w){await b.onEpochBegin(w);const v={};if(p!=null)throw new xt("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new xt("batch shuffling is not implemneted yet");u&&Sw(x);const $=Ue(x),N=Uc(g,o);for(let T=0;T<N.length;++T){const k={};if(await b.onBatchBegin(T,k),z(()=>{const S=N[T][0],C=N[T][1],R=Gs($,S,C-S);k.batch=T,k.size=C-S;const _=Tu(e,R),M=t(_);for(let P=0;P<s.length;++P){const B=s[P],G=M[P];k[B]=G,_n(G)}if(T===N.length-1&&m){const P=this.testLoop(l,c,o);for(let B=0;B<s.length;++B){const G=s[B],W=P[B];_n(W),v["val_"+G]=W}}}),await b.onBatchEnd(T,k),Y0(k),this.stopTraining_)break}$.dispose()}if(await b.onEpochEnd(w,v),this.stopTraining_)break}return await b.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return ME(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),o=s[0],r=s[1],a=this.makeTrainFunction()(o.concat(r)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return Ct(a),mn(s[0],t),mn(s[1],e),Le(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,o=s?this.trainableWeights:this.weights,r=this.getWeights(s);for(let i=0;i<o.length;++i)s&&!o[i].trainable||e.push({name:o[i].originalName,tensor:r[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=Rp().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-Rp().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=Xn(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>Xn(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const o of e)if(typeof s[o]=="string")t[o]=Xn(s[o]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Xn(na(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>Xn(na(t)));{const t={};for(const e in this.metrics)t[e]=Xn(na(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=Su(t.optimizer_config),s=Yn(e);let o;if(typeof t.loss=="string")o=Ms(t.loss);else if(Array.isArray(t.loss))o=t.loss.map(i=>Ms(i));else if(t.loss!=null){o={};for(const i in t.loss)o[i]=Ms(t.loss[i])}let r;if(Array.isArray(t.metrics))r=t.metrics.map(i=>Ms(i));else if(t.metrics!=null){r={};for(const i in t.metrics)r[i]=Ms(t.metrics[i])}this.compile({loss:o,metrics:r,optimizer:s})}async save(t,e){if(typeof t=="string"){const c=$v(t);if(c.length===0)throw new A(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new A(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new A("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await Dp(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:jE,generatedBy:`TensorFlow.js tfjs-layers v${rx}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await Dp(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=Cv([s.data,u])}return this.userDefinedMetadata!=null&&(ff(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){ff(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}ko.className="Model";q(ko);class ux extends ko{}ux.className="Functional";q(ux);class kr extends ko{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:uc("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new A(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof kr||t instanceof ko;let s;if(e){if(s=t,s.outputs.length!==1)throw new A("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new A("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new A("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const o=KT({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(o)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new A(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new A("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=H0(this.outputs[0])}this.inboundNodes=[],new dc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:eo(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(o=>o.shape),outputShapes:this.outputs[0].shape})}else{const o=t.apply(this.outputs[0]);if(Array.isArray(o))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[o],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(Nt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new ko({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new an("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new an("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new an("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new an("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},o=!1){let r,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new A("Legacy serialization format not supported yet.");r=e}else I(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),r=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof kr))throw new xt(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of r){const u=Yn(l,void 0,o);o&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new A("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new A("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}kr.className="Sequential";q(kr);let ke=class extends jo{getConfig(){return{}}};class hx extends ke{apply(t,e=1){return DT(t,e)}}hx.className="elu";q(hx);class dx extends ke{apply(t){return Eg(t)}}dx.className="selu";q(dx);class px extends ke{apply(t){return ao(t)}}px.className="relu";q(px);class fx extends ke{apply(t){return z(()=>vr(6,ao(t)))}}fx.className="relu6";q(fx);class mx extends ke{apply(t){return t}}mx.className="linear";q(mx);class gx extends ke{apply(t){return Uo(t)}}gx.className="sigmoid";q(gx);class xx extends ke{apply(t){return _T(t)}}xx.className="hardSigmoid";q(xx);class bx extends ke{apply(t){return Ti(t)}}bx.className="softplus";q(bx);class yx extends ke{apply(t){return FT(t)}}yx.className="softsign";q(yx);class wx extends ke{apply(t){return tc(t)}}wx.className="tanh";q(wx);let Xd=class extends ke{apply(t,e=-1){return Yh(t,e)}};Xd.className="softmax";q(Xd);class vx extends ke{apply(t,e=-1){return vg(t,e)}}vx.className="logSoftmax";q(vx);class Cx extends ke{apply(t){return z(()=>z(()=>{const e=Math.sqrt(2),s=D(.5,J(1,gg(ut(t,e))));return D(t,s)}))}}Cx.className="gelu";q(Cx);class $x extends ke{apply(t){return z(()=>D(.5,D(t,J(1,tc(D($e(ut(2,Math.PI)),J(t,D(.044715,Js(t,3)))))))))}}$x.className="gelu_new";q($x);class Ix extends ke{apply(t){return z(()=>D(t,tc(Ti(t))))}}Ix.className="mish";q(Ix);class kx extends ke{apply(t,e=1){return z(()=>D(Uo(D(t,e)),t))}}kx.className="swish";q(kx);function ws(n){return n.getClassName()}function Gc(n,t={}){return Oi(n,on.getMap().classNameMap,t,"activation")}function vs(n){if(n==null){const t={};return t.className="linear",t.config={},Gc(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Gc(t)}else return n instanceof ke?n:Gc(n)}function XE(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Sx extends jo{}class Nx extends Sx{constructor(t){super(),XE(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return z(()=>{let e=de([1]);return this.hasL1&&(e=J(e,ct(D(this.l1,Te(t))))),this.hasL2&&(e=J(e,ct(D(this.l2,Pi(t))))),O(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}Nx.className="L1L2";q(Nx);const wf={l1l2:"L1L2"};function Ot(n){return Fd(n)}function vf(n,t={}){return Oi(n,on.getMap().classNameMap,t,"regularizer")}function Gt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in wf?wf[n]:n,config:{}};return vf(e)}else return n instanceof Sx?n:vf(n)}class Tx extends vt{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=ft(t);let s=ao(t);return this.maxValue!=null&&(s=Je(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}Tx.className="ReLU";q(Tx);class Ex extends vt{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=ft(t);return zh(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}Ex.className="LeakyReLU";q(Ex);class Rx extends vt{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Ut(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Gt(t.alphaRegularizer),this.alphaConstraint=le(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new A(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=Nt(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const o of this.sharedAxes)e[o-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let o=1;o<t.length;++o)s[o]=t[o];this.inputSpec=[new ie({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=ft(t),jh(t,this.alpha.read())}getConfig(){const t={alphaInitializer:jt(this.alphaInitializer),alphaRegularizer:Ot(this.alphaRegularizer),alphaConstraint:ae(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}Rx.className="PReLU";q(Rx);let Ax=class extends vt{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new xt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=ft(t);return sc(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};Ax.className="ELU";q(Ax);class Dx extends vt{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=ft(t);return D(s,st(Qe(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}Dx.className="ThresholdedReLU";q(Dx);class Fx extends vt{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Xd().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return z(()=>{let s=ft(t);const o=e.mask;if(o!=null){const r=D(pt(rn(s.shape),st(o,s.dtype)),Tt(-1e9));s=J(s,r)}return this.axis instanceof Array?this.axis.length>1?Bn(pt(s,Cg(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Fx.className="Softmax";q(Fx);function So(n,t,e){if(typeof n=="number")return eo(n,t);if(n.length!==t)throw new A(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const o=n[s];if(!TT(o))throw new A(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${o}`)}return n}function Cn(n,t,e,s,o=1){if(n==null)return n;const r=t+(t-1)*(o-1);let i;return e==="same"?i=n:i=n-r+1,Math.floor((i+s-1)/s)}function An(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+ys([e-t,0]);else if(s==="same")n=n*t;else throw new A(`Unsupport padding mode: ${s}.`);return n}function Kd(n,t){return z(()=>(te(t),t==="channelsFirst"?It(n,[0,2,3,1]):n))}function _x(n,t){return z(()=>(te(t),t==="channelsFirst"?It(n,[0,2,3,4,1]):n))}function KE(n,t,e,s=1,o="valid",r,i=1){return z(()=>{if(r==null&&(r=In()),te(r),n.shape.length!==3)throw new A(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new A(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new A(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(r==="channelsFirst"&&(n=It(n,[0,2,1])),o==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=hg(n,t,s,o==="same"?"same":"valid","NWC",i);return e!=null&&(a=Sn(a,e)),a})}function Cf(n,t,e,s=[1,1],o="valid",r,i,a=null){return z(()=>{if(r==null&&(r=In()),te(r),n.rank!==3&&n.rank!==4)throw new A(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new A(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Kd(n,r);if(o==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=sk({x:l,filter:t,strides:s,pad:o==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),r==="channelsFirst"&&(l=It(l,[0,3,1,2])),l})}function qE(n,t,e,s=[1,1,1],o="valid",r,i){return z(()=>{if(r==null&&(r=In()),te(r),n.rank!==4&&n.rank!==5)throw new A(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new A(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=_x(n,r);if(o==="causal")throw new xt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=QC(a,t,s,o==="same"?"same":"valid","NDHWC",i),e!=null&&(a=Sn(a,e)),r==="channelsFirst"&&(a=It(a,[0,4,1,2,3])),a})}class mc extends vt{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",mc.verifyArgs(e),this.rank=t,pe(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new xt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=So(e.kernelSize,t,"kernelSize"),this.strides=So(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,tn(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,te(this.dataFormat),this.activation=vs(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Ut(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=le(e.biasConstraint),this.biasRegularizer=Gt(e.biasRegularizer),this.activityRegularizer=Gt(e.activityRegularizer),this.dilationRate=So(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new A(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new A(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new A(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(Rn("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!_d(t.kernelSize,"number",1,3))throw new A(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:ws(this.activation),useBias:this.useBias,biasInitializer:jt(this.biasInitializer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),biasConstraint:ae(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class Xo extends mc{constructor(t,e){super(t,e),this.kernel=null,Xo.verifyArgs(e),this.filters=e.filters,pe(this.filters,"filters"),this.kernelInitializer=Ut(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=le(e.kernelConstraint),this.kernelRegularizer=Gt(e.kernelRegularizer)}build(t){t=Nt(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new A(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],o=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return z(()=>{t=ft(t);let s;const o=this.bias==null?null:this.bias.read(),r=R0(this.activation.getClassName());if(r!=null&&this.rank===2)s=Cf(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)s=KE(t,this.kernel.read(),o,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Cf(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=qE(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new xt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=Nt(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let r=0;r<s.length;++r){const i=Cn(s[r],this.kernelSize[r],this.padding,this.strides[r],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[r]);e.push(i)}let o=[t[0]];return this.dataFormat==="channelsLast"?(o=o.concat(e),o.push(this.filters)):(o.push(this.filters),o=o.concat(e)),o}getConfig(){const t={filters:this.filters,kernelInitializer:jt(this.kernelInitializer),kernelRegularizer:Ot(this.kernelRegularizer),kernelConstraint:ae(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new A(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class Vi extends Xo{constructor(t){super(2,t),Vi.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!_d(t.kernelSize,"number",1,2))throw new A(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}Vi.className="Conv2D";q(Vi);class Wi extends Xo{constructor(t){super(3,t),Wi.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new A(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}Wi.className="Conv3D";q(Wi);class Ox extends Vi{constructor(t){if(super(t),this.inputSpec=[new ie({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new A(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Nt(t),t.length!==4)throw new A("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new A("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ie({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return z(()=>{let s=ft(t);if(s.shape.length!==4)throw new A(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=o[i],c=o[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],p=this.strides[1],f=An(l,d,u,this.padding),m=An(c,p,h,this.padding),g=[r,f,m,this.filters];this.dataFormat!=="channelsLast"&&(s=It(s,[0,2,3,1]));let x=dg(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=It(x,[0,3,1,2])),this.bias!=null&&(x=Sn(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=Nt(t);const e=t.slice();let s,o,r;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3):(s=3,o=1,r=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[o]=An(e[o],l,i,this.padding),e[r]=An(e[r],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Ox.className="Conv2DTranspose";q(Ox);class Lx extends Wi{constructor(t){if(super(t),this.inputSpec=[new ie({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new A(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Nt(t),t.length!==5)throw new A("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new A("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ie({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return z(()=>{let s=ft(t);if(s.shape.length!==5)throw new A(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=o[l],u=o[i],h=o[a],d=this.kernelSize[0],p=this.kernelSize[1],f=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=An(c,m,d,this.padding),y=An(u,g,p,this.padding),w=An(h,x,f,this.padding),v=[r,b,y,w,this.filters];this.dataFormat!=="channelsLast"&&(s=It(s,[0,2,3,4,1]));let $=n2(s,this.kernel.read(),v,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=It($,[0,4,1,2,3])),this.bias!==null&&($=Sn($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(t){t=Nt(t);const e=t.slice();let s,o,r,i;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3,i=4):(s=4,o=1,r=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[o]=An(e[o],u,a,this.padding),e[r]=An(e[r],h,l,this.padding),e[i]=An(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Lx.className="Conv3DTranspose";q(Lx);class Px extends Xo{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new A("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new A("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new A(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Ut(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Gt(e.depthwiseRegularizer),this.depthwiseConstraint=le(e.depthwiseConstraint),this.pointwiseInitializer=Ut(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Gt(e.pointwiseRegularizer),this.pointwiseConstraint=le(e.pointwiseConstraint)}build(t){if(t=Nt(t),t.length<this.rank+2)throw new A(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new A(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],o=this.kernelSize.concat([s,this.depthMultiplier]),r=[];for(let a=0;a<this.rank;++a)r.push(1);r.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",o,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",r,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new ie({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return z(()=>{t=ft(t);let s;if(this.rank===1)throw new xt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=It(t,[0,2,3,1])),s=Rg(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Sn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=It(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=jt(this.depthwiseInitializer),t.pointwiseInitializer=jt(this.pointwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.pointwiseRegularizer=Ot(this.pointwiseRegularizer),t.depthwiseConstraint=ae(this.depthwiseConstraint),t.pointwiseConstraint=ae(this.pointwiseConstraint),t}}Px.className="SeparableConv";class Mx extends Px{constructor(t){super(2,t)}}Mx.className="SeparableConv2D";q(Mx);class gc extends Xo{constructor(t){super(1,t),gc.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!_d(t.kernelSize,"number",1,1))throw new A(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}gc.className="Conv1D";q(gc);class Bx extends vt{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return z(()=>{if(t=ft(t),this.dataFormat==="channelsLast"){const s=ea(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return ea(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=ea(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return ea(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Bx.className="Cropping2D";q(Bx);class zx extends vt{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,kT(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return z(()=>{let s=ft(t);const o=s.shape;if(this.dataFormat==="channelsFirst"){s=It(s,[0,2,3,1]);const r=this.size[0]*o[2],i=this.size[1]*o[3],a=this.interpolation==="nearest"?qn.resizeNearestNeighbor(s,[r,i]):qn.resizeBilinear(s,[r,i]);return It(a,[0,3,1,2])}else{const r=this.size[0]*o[1],i=this.size[1]*o[2];return this.interpolation==="nearest"?qn.resizeNearestNeighbor(s,[r,i]):qn.resizeBilinear(s,[r,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}zx.className="UpSampling2D";q(zx);function YE(n,t,e=[1,1],s="valid",o,r){return z(()=>{o==null&&(o=In()),te(o);let i=Kd(n,o);if(n.rank!==4)throw new A(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new A(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=Lh(i,t,e,s==="same"?"same":"valid","NHWC",r),o==="channelsFirst"&&(i=It(i,[0,3,1,2])),i})}class Vx extends mc{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Ut(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=le(t.depthwiseConstraint),this.depthwiseRegularizer=Gt(t.depthwiseRegularizer)}build(t){if(t=Nt(t),t.length<4)throw new A(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new A(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],o=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",o,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return z(()=>{t=ft(t);let s=YE(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Sn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=Nt(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,r=Cn(e,this.kernelSize[0],this.padding,this.strides[0]),i=Cn(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],o,r,i]:[t[0],r,i,o]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=jt(this.depthwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.depthwiseConstraint=ae(this.depthwiseRegularizer),t}}Vx.className="DepthwiseConv2D";q(Vx);function Wx(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new A("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function o(r){return r==null||Array.isArray(r)?r:[r]}return t=o(t),e=o(e),{inputs:n,initialState:t,constants:e}}function Ux(n,t,e,s=!1,o,r,i=!1,a=!1){return z(()=>{const l=t.shape.length;if(l<3)throw new A(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat($n(2,l));t=It(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),o!=null&&(o=st(st(o,"bool"),"float32"),o.rank===l-1&&(o=Oe(o,-1)),o=It(o,c)),s&&(t=Qs(t,0),o!=null&&(o=Qs(o,0)));const u=[];let h,d=e;const p=t.shape[0],f=to(t);let m;o!=null&&(m=to(o));for(let x=0;x<p;++x){const b=f[x],y=z(()=>n(b,d));if(o==null)h=y[0],d=y[1];else{const w=z(()=>{const v=m[x],$=pt(un(v),v),N=J(D(y[0],v),D(d[0],$)),T=d.map((k,S)=>J(D(y[1][S],v),D(k,$)));return{output:N,newStates:T}});h=w.output,d=w.newStates}a&&u.push(h)}let g;return a&&(g=Jn(u,1)),[h,g,d]})}class Rs extends vt{constructor(t){super(t);let e;if(t.cell==null)throw new A("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new Zd({cells:t.cell}):e=t.cell,e.stateSize==null)throw new A("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new ie({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return $n(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){$u(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let o;if(this.returnSequences?o=[t[0],t[1],s]:o=[t[0],s],this.returnState){const r=[];for(const i of e)r.push([t[0],i]);return[o].concat(r)}else return o}computeMask(t,e){return z(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const o=this.states.map(r=>null);return[s].concat(o)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new xt("Constants support is not implemented in RNN yet.");$u(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new ie({shape:[e,null,...s]});const o=[t[0]].concat(t.slice(2));this.cell.build(o);let r;if(Array.isArray(this.cell.stateSize)?r=this.cell.stateSize:r=[this.cell.stateSize],this.stateSpec!=null){if(!Et(this.stateSpec.map(i=>i.shape[i.shape.length-1]),r))throw new A(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=r.map(i=>new ie({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){z(()=>{if(!this.stateful)throw new En("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new A("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>de([s,o])):this.states_=[de([s,this.cell.stateSize])];else if(t==null)Ct(this.states_),this.keptStates!=null&&(Ct(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>de([s,o])):this.states_[0]=de([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new A(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):Ct(this.states_);for(let o=0;o<this.states_.length;++o){const r=t[o],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[o]:this.cell.stateSize,a=[s,i];if(!Et(r.shape,a))throw new A(`State ${o} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${r.shape}`);this.states_[o]=r}}this.states_=this.states_.map(o=>_n(o.clone()))})}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=Wx(t,s,o,this.numConstants);t=r.inputs,s=r.initialState,o=r.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new ie({shape:c.shape}));a=a.concat(this.stateSpec)}if(o!=null&&(e.constants=o,i=i.concat(o),this.numConstants=o.length),i[0]instanceof Vn){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return z(()=>{const s=e==null?null:e.mask,o=e==null?null:e.training;let r=e==null?null:e.initialState;t=ft(t),r==null&&(this.stateful?r=this.states_:r=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==i)throw new A(`RNN Layer has ${i} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:o},c=Ux((f,m)=>{const g=this.cell.call([f].concat(m),a);return[g[0],g.slice(1)]},t,r,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,o);const p=this.returnSequences?h:u;return this.returnState?[p].concat(d):p})}getInitialState(t){return z(()=>{let e=de(t.shape);return e=ct(e,[1,2]),e=Li(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?vu(e,[1,s]):e):this.cell.stateSize>1?[vu(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Rs.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const o=e.cell,r=Yn(o,s);return new t(Object.assign(e,{cell:r}))}}Rs.className="RNN";q(Rs);class xc extends vt{}class qd extends xc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pe(this.units,"units"),this.activation=vs(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=le(t.kernelConstraint),this.recurrentConstraint=le(t.recurrentConstraint),this.biasConstraint=le(t.biasConstraint),this.dropout=Fo([1,ys([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Fo([1,ys([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Nt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return z(()=>{if(t=t,t.length!==2)throw new A(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const o=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Cs({ones:()=>un(t),rate:this.dropout,training:o,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Cs({ones:()=>un(s),rate:this.recurrentDropout,training:o,dropoutFunc:this.dropoutFunc}));let r;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?r=Pn(D(t,i),this.kernel.read()):r=Pn(t,this.kernel.read()),this.bias!=null&&(r=Sn(r,this.bias.read())),a!=null&&(s=D(s,a));let l=J(r,Pn(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:ws(this.activation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),recurrentInitializer:jt(this.recurrentInitializer),biasInitializer:jt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),recurrentConstraint:ae(this.recurrentConstraint),biasConstraint:ae(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}qd.className="SimpleRNNCell";q(qd);class Gx extends Rs{constructor(t){t.cell=new qd(t),super(t)}call(t,e){return z(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return new t(e)}}Gx.className="SimpleRNN";q(Gx);class Yd extends xc{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new A("GRUCell does not support reset_after parameter set to true.");this.units=t.units,pe(this.units,"units"),this.activation=vs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=vs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=le(t.kernelConstraint),this.recurrentConstraint=le(t.recurrentConstraint),this.biasConstraint=le(t.biasConstraint),this.dropout=Fo([1,ys([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Fo([1,ys([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Nt(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return z(()=>{if(t=t,t.length!==2)throw new A(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let o=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Cs({ones:()=>un(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Cs({ones:()=>un(o),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const r=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=D(t,r[0]));let u=Pn(t,this.kernel.read());this.useBias&&(u=Sn(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(o=D(o,i[0]));const h=this.recurrentKernel.read(),[d,p]=Ze(h,[2*this.units,this.units],h.rank-1),f=Pn(o,d),[m,g,x]=Ze(u,3,u.rank-1),[b,y]=Ze(f,2,f.rank-1);a=this.recurrentActivation.apply(J(m,b)),l=this.recurrentActivation.apply(J(g,y));const w=Pn(D(l,o),p);c=this.activation.apply(J(x,w));const v=J(D(a,o),D(J(1,Zt(a)),c));return[v,v]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:ws(this.activation),recurrentActivation:ws(this.recurrentActivation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),recurrentInitializer:jt(this.recurrentInitializer),biasInitializer:jt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),recurrentConstraint:ae(this.recurrentConstraint),biasConstraint:ae(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}Yd.className="GRUCell";q(Yd);class Hx extends Rs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Yd(t),super(t)}call(t,e){return z(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Hx.className="GRU";q(Hx);class bc extends xc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pe(this.units,"units"),this.activation=vs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=vs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=le(t.kernelConstraint),this.recurrentConstraint=le(t.recurrentConstraint),this.biasConstraint=le(t.biasConstraint),this.dropout=Fo([1,ys([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Fo([1,ys([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=Nt(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let o;if(this.useBias){if(this.unitForgetBias){const r=this.biasInitializer,i=this.units;o=new(e=class extends dn{apply(l,c){const u=r.apply([i]),h=new Ld().apply([i]),d=r.apply([i*2]);return of(of(u,h),d)}},e.className="CustomInit",e)}else o=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,o,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return z(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new A(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let o=t[1];const r=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Cs({ones:()=>un(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Cs({ones:()=>un(o),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=D(t,i[0]));let d=Pn(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(o=D(o,a[0])),d=J(d,Pn(o,this.recurrentKernel.read())),this.useBias&&(d=Sn(d,this.bias.read()));const[p,f,m,g]=Ze(d,4,d.rank-1);l=this.recurrentActivation.apply(p),c=this.recurrentActivation.apply(f),u=J(D(c,r),D(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=D(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:ws(this.activation),recurrentActivation:ws(this.recurrentActivation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),recurrentInitializer:jt(this.recurrentInitializer),biasInitializer:jt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),recurrentConstraint:ae(this.recurrentConstraint),biasConstraint:ae(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}bc.className="LSTMCell";q(bc);class jx extends Rs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new bc(t),super(t)}call(t,e){return z(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}jx.className="LSTM";q(jx);class Zd extends xc{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return z(()=>{t=t;let s=t.slice(1);const o=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?o.push(s.splice(0,a.stateSize.length)):o.push(s.splice(0,1));o.reverse();const r=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=o[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),r.push(i.slice(1))}s=[];for(const a of r.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){$u(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,o)=>{Us(`RNNCell_${o}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=r=>({className:r.getClassName(),config:r.getConfig()}),o={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),o)}static fromConfig(t,e,s={}){const o=[];for(const r of e.cells)o.push(Yn(r,s));return new t({cells:o})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Iu(t)}setWeights(t){const e=[];for(const s of this.cells){const o=s.weights.length,r=t.splice(o);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],r[i]])}Ud(e)}}Zd.className="StackedRNNCells";q(Zd);function Cs(n){const{ones:t,rate:e,training:s=!1,count:o=1,dropoutFunc:r}=n,i=()=>r!=null?r(t(),e):P0(t(),e),a=()=>Mi(i,t,s);return!o||o<=1?_n(a().clone()):Array(o).fill(void 0).map(a).map(c=>_n(c.clone()))}var ZE=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(e[s[o]]=n[s[o]]);return e};class Xx extends Rs{constructor(t){if(t.unroll)throw new xt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new xt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new ie({ndim:5})]}call(t,e){return z(()=>{if(this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new A("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return z(()=>{const{stateSize:e}=this.cell,s=t.shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)],i=de(r);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){z(()=>{if(!this.stateful)throw new En("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)];if(s[0]==null)throw new A("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>de(r)):this.states_=[de(r)];else if(t==null)Ct(this.states_),this.keptStates!=null&&(Ct(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>de(r)):this.states_[0]=de(r);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new A(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):Ct(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=r;if(!Et(l.shape,c))throw new A(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>_n(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:o,padding:r,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=Cn(c,o[0],r,i[0],a[0]),d=Cn(u,o[1],r,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}Xx.className="ConvRNN2D";class Jd extends bc{constructor(t){const{filters:e,kernelSize:s,strides:o,padding:r,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,pe(this.filters,"filters"),this.kernelSize=So(s,2,"kernelSize"),this.kernelSize.forEach(l=>pe(l,"kernelSize")),this.strides=So(o||1,2,"strides"),this.strides.forEach(l=>pe(l,"strides")),this.padding=r||"valid",tn(this.padding),this.dataFormat=i||"channelsLast",te(this.dataFormat),this.dilationRate=So(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>pe(l,"dilationRate"))}build(t){var e;t=Nt(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new A(`The channel dimension of the input should be defined. Found ${t[s]}`);const o=t[s],r=4,i=this.kernelSize.concat([o,this.filters*r]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*r]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends dn{apply(d,p){const f=c.apply([u]),m=rn([u]),g=c.apply([u*2]);return Od([f,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*r],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return z(()=>{if(t.length!==3)throw new A(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,o=t[0],r=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Cs({ones:()=>un(o),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(X,K,Y)=>!K||!K[Y]?X:D(K[Y],X);let u=c(o,l,0),h=c(o,l,1),d=c(o,l,2),p=c(o,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Cs({ones:()=>un(r),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const f=this.recurrentDropoutMask;let m=c(r,f,0),g=c(r,f,1),x=c(r,f,2),b=c(r,f,3);const y=3,[w,v,$,N]=Ze(this.kernel.read(),a,y),[T,k,S,C]=this.useBias?Ze(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,w,T,this.padding),h=this.inputConv(h,v,k,this.padding),d=this.inputConv(d,$,S,this.padding),p=this.inputConv(p,N,C,this.padding);const[R,_,M,P]=Ze(this.recurrentKernel.read(),a,y);m=this.recurrentConv(m,R),g=this.recurrentConv(g,_),x=this.recurrentConv(x,M),b=this.recurrentConv(b,P);const B=this.recurrentActivation.apply(J(u,m)),G=this.recurrentActivation.apply(J(h,g)),W=J(D(G,i),D(B,this.activation.apply(J(d,x)))),j=D(this.recurrentActivation.apply(J(p,b)),this.activation.apply(W));return[j,j,W]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=ZE(t,["units"]),o={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),o)}inputConv(t,e,s,o){const r=Zs(t,e,this.strides,o||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Sn(r,s,this.dataFormat):r}recurrentConv(t,e){return Zs(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Jd.className="ConvLSTM2DCell";q(Jd);class Kx extends Xx{constructor(t){const e=new Jd(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}Kx.className="ConvLSTM2D";q(Kx);class Qd extends vt{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let o=0;o<this.noiseShape.length;++o)s.push(this.noiseShape[o]==null?e[o]:this.noiseShape[o]);return s}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t);if(0<this.rate&&this.rate<1){const o=e.training==null?!1:e.training,r=this.getNoiseShape(s);return Mi(()=>P0(s,this.rate,r,this.seed),()=>s,o)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}Qd.className="Dropout";q(Qd);class qx extends Qd{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}qx.className="SpatialDropout1D";q(qx);class Yx extends vt{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,pe(this.units,"units"),this.activation=vs(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=le(t.kernelConstraint),this.biasConstraint=le(t.biasConstraint),this.kernelRegularizer=Gt(t.kernelRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.activityRegularizer=Gt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=Nt(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=Nt(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t),o=R0(this.activation.getClassName());let r;return o!=null?r=Pn(s,this.kernel.read(),o,this.bias?this.bias.read():null):(r=Pn(s,this.kernel.read()),this.bias!=null&&(r=Sn(r,this.bias.read())),this.activation!=null&&(r=this.activation.apply(r))),r})}getConfig(){const t={units:this.units,activation:ws(this.activation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),biasInitializer:jt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),biasConstraint:ae(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}Yx.className="Dense";q(Yx);class Zx extends vt{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=Nt(t);for(const e of t.slice(1))if(e==null)throw new A(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],xs(t,1)]}call(t,e){return z(()=>{this.invokeCallHook(t,e);let s=ft(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const o=[0];for(let r=2;r<s.rank;++r)o.push(r);o.push(1),s=It(s,o)}return AT(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}Zx.className="Flatten";q(Zx);class Jx extends vt{constructor(t){super(t),this.supportsMasking=!0,this.activation=vs(t.activation)}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t);return this.activation.apply(s)})}getConfig(){const t={activation:ws(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}Jx.className="Activation";q(Jx);class Qx extends vt{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return z(()=>(t=ft(t),ET(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}Qx.className="RepeatVector";q(Qx);class t1 extends vt{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",o=e.slice();let r=1,i=null;for(let l=0;l<o.length;++l){const c=o[l];if(this.isUnknown(c))if(i===null)i=l;else throw new A("Can only specifiy one unknown dimension.");else r*=c}const a=xs(t);if(i!==null){if(r===0||a%r!==0)throw new A(s);o[i]=a/r}else if(a!==r)throw new A(s);return o}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t),o=s.shape,r=o.slice(0,1).concat(this.fixUnknownDimension(o.slice(1),this.targetShape));return O(s,r)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}t1.className="Reshape";q(t1);class e1 extends vt{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=$n(1,t.dims.length+1);if(!Et(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new ie({ndim:this.dims.length+1})]}computeOutputShape(t){t=Nt(t);const e=t.slice();return this.dims.forEach((s,o)=>{e[o+1]=t[s]}),e}call(t,e){return It(ft(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}e1.className="Permute";q(e1);class n1 extends vt{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=ft(t);return fu(Ea(s,this.maskValue),-1)}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t),i=fu(Ea(s,this.maskValue),-1,!0);return D(s,st(i,s.dtype))})}}n1.className="Masking";q(n1);class s1 extends vt{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(At(t.inputLength))}this.inputDim=t.inputDim,pe(this.inputDim,"inputDim"),this.outputDim=t.outputDim,pe(this.outputDim,"outputDim"),this.embeddingsInitializer=Ut(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Gt(t.embeddingsRegularizer),this.activityRegularizer=Gt(t.activityRegularizer),this.embeddingsConstraint=le(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return z(()=>this.maskZero?(t=ft(t),Ea(t,kt(t))):null)}computeOutputShape(t){if(t=Nt(t),this.inputLength==null)return[...t,this.outputDim];const e=At(this.inputLength);if(e.length!==t.length-1)throw new A(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let o=0;o<e.length;++o){const r=e[o],i=t[o+1];if(r!=null&&i!=null&&r!==i)throw new A(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);r==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return z(()=>{this.invokeCallHook(t,e);let s=ft(t);s.dtype!=="int32"&&(s=Ln(s,"int32"));const o=L0(this.embeddings.read(),O(s,[s.size]));return O(o,Nt(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:jt(this.embeddingsInitializer),embeddingsRegularizer:Ot(this.embeddingsRegularizer),activityRegularizer:Ot(this.activityRegularizer),embeddingsConstraint:ae(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}s1.className="Embedding";q(s1);class uo extends vt{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new xt}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let o=0;o<e.length;++o){const r=t[t.length-e.length+o],i=e[o];if(r==null||i==null||r<0||i<0)s.push(null);else if(r===1)s.push(i);else if(i===1)s.push(r);else{if(r!==i)throw new A("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(r)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[Nt(t)]),t=t,t.length<2)throw new A(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const r of t)r!=null&&r[0]!==null&&e.push(r[0]);if(e=gs(e),e.length>1)throw new A(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const o=t.map(r=>r.length);t.indexOf(null)===-1&&gs(o).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return z(()=>{if(t=t,this.reshapeRequired){const s=[],o=t.map(r=>r.rank);if(o.indexOf(null)===-1){const r=ys(o);for(let i of t){const a=i.rank;for(let l=0;l<r-a;++l)i=Li(i,1);s.push(i)}return this.mergeFunction(s)}else{let r=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let p=O(l,[h].concat(xs(u.slice(1))));p=It(p,[1,0]),p=O(p,d),s.push(p),r=!0}else if(c>1){const u=$n(1,c).concat([0]);s.push(It(l,u)),r=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(r){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=O(It(O(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat($n(0,a-1));i=It(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let o=1;o<t.length;++o){const r=t[o]==null?null:t[o].slice(1);e=this.computeElementwiseOpOutputShape(e,r)}let s=[];for(const o of t)o!=null&&o[0]!==null&&s.push(o[0]);return s=gs(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return z(()=>{if(e==null)return null;if(!Array.isArray(e))throw new A("`mask` should be an Array");if(!Array.isArray(t))throw new A("`inputs` should be an Array");if(e.length!==t.length)throw new A(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(o=>o==null))return null;e=e.map(o=>o==null?o:Oe(o,0));let s=e[0];for(let o=1;o<e.length-1;++o)s=Zn(s,e[o]);return s})}}class o1 extends uo{constructor(t){super(t)}mergeFunction(t){return z(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return e})}}o1.className="Add";q(o1);class r1 extends uo{constructor(t){super(t)}mergeFunction(t){return z(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=D(e,t[s]);return e})}}r1.className="Multiply";q(r1);class i1 extends uo{constructor(t){super(t)}mergeFunction(t){return z(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return D(1/t.length,e)})}}i1.className="Average";q(i1);class a1 extends uo{constructor(t){super(t)}mergeFunction(t){return z(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Ts(e,t[s]);return e})}}a1.className="Maximum";q(a1);class l1 extends uo{constructor(t){super(t)}mergeFunction(t){return z(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=vr(e,t[s]);return e})}}l1.className="Minimum";q(l1);class c1 extends uo{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new A("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const o of t)if(o!=null){e=!1;break}if(e)return;const s=[];for(let o=0;o<t.length;++o){const r=t[o].slice();r.splice(this.axis,1);let i=!1;for(const a of s)if(Et(a,r)){i=!0;break}i||s.push(r)}if(s.length>1)throw new A("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return z(()=>Od(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new A("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),o=this.axis<0?s.length+this.axis:this.axis;for(const r of e.slice(1)){if(s[o]==null||r[o]==null){s[o]=null;break}s[o]+=r[o]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new A("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new A("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new A(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return z(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const o=[];for(let i=0;i<t.length;++i)e[i]==null?o.push(st(un(t[i]),"bool")):e[i].rank<t[i].rank?o.push(Oe(e[i],-1)):o.push(e[i]);const r=Pe(o,this.axis);return ug(r,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}c1.className="Concatenate";q(c1);function cr(n,t){for(;n<0;)n+=t;return n}function JE(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new xt("batchDot is not implemented for tensors of 4D or higher rank yet");if(I(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),I(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new xt("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,o=t.shape.length;e==null&&(e=[s-1,o-2]);const r=e;return z(()=>{let i;if(s>o){i=s-o;const l=[];for(let c=0;c<i;++c)l.push(1);t=O(t,t.shape.concat(l))}else if(o>s){i=o-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=O(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)r[0]===r[1]?a=ct(D(n,t),r[0]):a=ct(D(It(n,[1,0]),t),r[1]);else{const l=r[0]!==n.shape.length-1,c=r[1]===t.shape.length-1;a=$t(n,t,l,c)}if(i>0){let l;s>o?l=s+o-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Ri(a,c)}return a.shape.length===1&&(a=Oe(a,1)),a})}class u1 extends uo{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){I(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);if(e[o[0]]!==s[o[1]])throw new A(`Dimension incompatibility: ${e[o[0]]} !== ${s[o[1]]}`)}mergeFunction(t){if(t.length!==2)throw new A(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],o;return Array.isArray(this.axes)?o=this.axes.map((r,i)=>cr(r,t[i].shape.length)):o=[cr(this.axes,e.shape.length),cr(this.axes,s.shape.length)],this.normalize&&(e=La(e,o[0]),s=La(s,o[1])),JE(e,s,o)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[cr(this.axes,t.length),cr(this.axes,e.length)],s}computeOutputShape(t){I(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);e.splice(o[0],1),s.splice(o[1],1),s.splice(0,1);const r=e.concat(s);return r.length===1&&r.push(1),r}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}u1.className="Dot";q(u1);class h1 extends vt{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t);return Mi(()=>J(hc(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}h1.className="GaussianNoise";q(h1);class d1 extends vt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return z(()=>{this.invokeCallHook(t,e);const s=ft(t);return this.rate>0&&this.rate<1?Mi(()=>{const r=Math.sqrt(this.rate/(1-this.rate));return D(s,hc(s.shape,1,r))},()=>s,e.training||!1):s})}}d1.className="GaussianDropout";q(d1);class p1 extends vt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||ft(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return z(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return Mi(()=>{const r=ft(t),a=-1.6732632423543772*1.0507009873554805;let l=io(Ei(s),this.rate);l=Ln(l,"float32");const c=((1-this.rate)*(1+this.rate*a**2))**-.5,u=-c*a*this.rate,h=J(D(r,l),D(J(l,-1),a));return J(D(h,c),u)},()=>ft(t),e.training||!1)}return t})}}p1.className="AlphaDropout";q(p1);function Sr(n,t,e,s,o,r=.001){let i;if(n.rank===2)i=EC(n,t,e,s,o,r);else if(n.rank===3)i=AC(n,t,e,s,o,r);else if(n.rank===4)i=FC(n,t,e,s,o,r);else throw new xt(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function QE(n,t,e,s,o=.001){return z(()=>{const r=Uh(n,s),i=r.mean,a=r.variance;return[Sr(n,i,a,e,t,o),i,a]})}function tR(n,t,e,s,o=.001){return z(()=>{const r=Uh(n,s),i=r.mean,a=r.variance,l=[];for(const f of $n(0,n.rank))s.indexOf(f)!==-1?l.push(1):l.push(n.shape[f]);const c=O(i,l),u=O(a,l),h=t==null?null:O(t,l),d=e==null?null:O(e,l);return[Sr(n,c,u,d,h,o),i,a]})}function eR(n,t,e,s,o=.001){return Et(s.slice().sort(),$n(0,n.rank-1))?QE(n,t,e,s,o):tR(n,t,e,s,o)}class f1 extends vt{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Ut(t.betaInitializer||"zeros"),this.gammaInitializer=Ut(t.gammaInitializer||"ones"),this.movingMeanInitializer=Ut(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Ut(t.movingVarianceInitializer||"ones"),this.betaConstraint=le(t.betaConstraint),this.gammaConstraint=le(t.gammaConstraint),this.betaRegularizer=Gt(t.betaRegularizer),this.gammaRegularizer=Gt(t.gammaRegularizer)}build(t){t=Nt(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new A(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new ie({ndim:t.length,axes:{[e]:s}})];const o=[s];this.scale&&(this.gamma=this.addWeight("gamma",o,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",o,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",o,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",o,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return z(()=>{const s=e.training==null?!1:e.training,o=ft(t),r=o.shape,i=r.length,a=$n(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=eo(1,i);c[l]=r[l];const u=a.slice();u.sort();const h=!Et(u,$n(0,i).slice(0,i-1)),d=()=>{if(h){const b=O(this.movingMean.read(),c),y=O(this.movingVariance.read(),c),w=this.center?O(this.beta.read(),c):null,v=this.scale?O(this.gamma.read(),c):null;return Sr(o,b,y,w,v,this.epsilon)}else return Sr(o,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[p,f,m]=eR(o,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,y,w)=>{z(()=>{const v=1-w,$=b.read(),N=D(pt($,y),v);b.write(pt($,N))})};return g(this.movingMean,f,this.momentum),g(this.movingVariance,m,this.momentum),p})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:jt(this.betaInitializer),gammaInitializer:jt(this.gammaInitializer),movingMeanInitializer:jt(this.movingMeanInitializer),movingVarianceInitializer:jt(this.movingVarianceInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer),betaConstraint:ae(this.betaConstraint),gammaConstraint:ae(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}f1.className="BatchNormalization";q(f1);class m1 extends vt{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Ut(t.betaInitializer||"zeros"),this.gammaInitializer=Ut(t.gammaInitializer||"ones"),this.betaRegularizer=Gt(t.betaRegularizer),this.gammaRegularizer=Gt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=Nt(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let r=0;r<this.axis.length;++r)this.axis[r]<0&&(this.axis[r]+=e);for(const r of this.axis)if(r<0||r>=e)throw new Error(`Invalid axis: ${r}`);if(this.axis.length!==gs(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(r=>t[r]),o=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,o):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,o):this.beta=null,this.built=!0}call(t,e){const s=ft(t),o=s.shape,r=o.length;return z(()=>{let{mean:a,variance:l}=Uh(s,this.axis,!0);const c=eo(1,r);for(const m of this.axis)c[m]=o[m];const u=m=>m!=null&&m.shape.length!==r?O(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const p=[],f=[];for(let m=0;m<r;++m)this.axis.indexOf(m)!==-1?(p.push(o[m]),f.push(1)):(p.push(1),f.push(o[m]));return a=yn(a,p),l=yn(l,p),h!=null&&(h=yn(h,f)),d!=null&&(d=yn(d,f)),Sr(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:jt(this.betaInitializer),gammaInitializer:jt(this.gammaInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}m1.className="LayerNormalization";q(m1);function nR(n,t,e){return z(()=>{if(n.rank!==4)throw new A(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new A("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=In()),e!=="channelsLast"&&e!=="channelsFirst")throw new A(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],Gh(n,s)})}class g1 extends vt{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?In():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new A(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new A(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new A(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new ie({ndim:4})]}computeOutputShape(t){t=Nt(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return z(()=>nR(ft(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}g1.className="ZeroPadding2D";q(g1);function yc(n,t,e,s,o,r){return z(()=>{te(o),D0(r),tn(s),e==null&&(e=[1,1]),s==null&&(s="valid"),o==null&&(o=In()),r==null&&(r="max"),n=Kd(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=Wh(n,t,e,a):i=Dh(n,t,e,a),o==="channelsFirst"&&(i=It(i,[0,3,1,2])),i})}function x1(n,t,e,s,o,r){return z(()=>{te(o),D0(r),tn(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),o==null&&(o=In()),r==null&&(r="max"),n=_x(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=x$(n,t,e,a):i=yC(n,t,e,a),o==="channelsFirst"&&(i=It(i,[0,4,1,2,3])),i})}class b1 extends vt{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new A(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(pe(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new A(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,tn(this.padding),this.inputSpec=[new ie({ndim:3})]}computeOutputShape(t){t=Nt(t);const e=Cn(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return z(()=>{this.invokeCallHook(t,e),t=Li(ft(t),2);const s=this.poolingFunction(ft(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Ri(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class y1 extends b1{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),tn(o),yc(t,e,s,o,r,"max")}}y1.className="MaxPooling1D";q(y1);class w1 extends b1{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),tn(o),yc(t,e,s,o,r,"avg")}}w1.className="AveragePooling1D";q(w1);class v1 extends vt{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new A(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];pe(this.poolSize,"poolSize"),pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),tn(this.padding),this.inputSpec=[new ie({ndim:4})]}computeOutputShape(t){t=Nt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=Cn(e,this.poolSize[0],this.padding,this.strides[0]),s=Cn(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return z(()=>(this.invokeCallHook(t,e),this.poolingFunction(ft(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class C1 extends v1{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),tn(o),yc(t,e,s,o,r,"max")}}C1.className="MaxPooling2D";q(C1);class $1 extends v1{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),tn(o),yc(t,e,s,o,r,"avg")}}$1.className="AveragePooling2D";q($1);class I1 extends vt{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new A(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];pe(this.poolSize,"poolSize"),pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),tn(this.padding),this.inputSpec=[new ie({ndim:5})]}computeOutputShape(t){t=Nt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=Cn(e,this.poolSize[0],this.padding,this.strides[0]),s=Cn(s,this.poolSize[1],this.padding,this.strides[1]),o=Cn(o,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,o]:[t[0],e,s,o,t[4]]}call(t,e){return z(()=>(this.invokeCallHook(t,e),this.poolingFunction(ft(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class k1 extends I1{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),tn(o),x1(t,e,s,o,r,"max")}}k1.className="MaxPooling3D";q(k1);class S1 extends I1{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),tn(o),x1(t,e,s,o,r,"avg")}}S1.className="AveragePooling3D";q(S1);class N1 extends vt{constructor(t){super(t),this.inputSpec=[new ie({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new xt}}class T1 extends N1{constructor(t){super(t||{})}call(t,e){return z(()=>{const s=ft(t);return ne(s,1)})}}T1.className="GlobalAveragePooling1D";q(T1);class E1 extends N1{constructor(t){super(t||{})}call(t,e){return z(()=>{const s=ft(t);return vn(s,1)})}}E1.className="GlobalMaxPooling1D";q(E1);class R1 extends vt{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),this.inputSpec=[new ie({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new xt}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class A1 extends R1{call(t,e){return z(()=>{const s=ft(t);return this.dataFormat==="channelsLast"?ne(s,[1,2]):ne(s,[2,3])})}}A1.className="GlobalAveragePooling2D";q(A1);class D1 extends R1{call(t,e){return z(()=>{const s=ft(t);return this.dataFormat==="channelsLast"?vn(s,[1,2]):vn(s,[2,3])})}}D1.className="GlobalMaxPooling2D";q(D1);class F1 extends vt{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const o=e.layer,r=Yn(o,s);delete e.layer;const i={layer:r};return Object.assign(i,e),new t(i)}}class _1 extends F1{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=Nt(t),t.length<3)throw new A(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=Nt(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),o=t[1];return[s[0],o].concat(s.slice(1))}call(t,e){return z(()=>(t=ft(t),Ux((i,a)=>[ft(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}_1.className="TimeDistributed";q(_1);function sR(n){co(IT,"BidirectionalMergeMode",n)}const oR="concat";class O1 extends F1{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=Yn(s),e.goBackwards=e.goBackwards!==!0;const o={};if(o.className=t.layer.getClassName(),o.config=e,this.backwardLayer=Yn(o),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?oR:t.mergeMode,sR(this.mergeMode),t.weights)throw new xt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,o,r;return this.returnState&&(r=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,o=[s]):this.mergeMode==null?o=[s,s.slice()]:o=[s],this.returnState?this.mergeMode==null?o.concat(r).concat(r.slice()):[s].concat(r).concat(r.slice()):Le(o)}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=Wx(t,s,o,this.numConstants);if(t=r.inputs,s=r.initialState,o=r.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&o==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new A("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new ie({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(o!=null)throw new xt("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof Vn;for(const c of i)if(c instanceof Vn!==l)throw new A("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return z(()=>{const s=e.initialState;let o,r;if(s==null)o=this.forwardLayer.call(t,e),r=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);o=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),r=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(o)&&(i=o.slice(1).concat(r.slice(1))),o=o[0],r=r[0]),this.returnSequences&&(r=Qs(r,1));let a;return this.mergeMode==="concat"?a=Od([o,r]):this.mergeMode==="sum"?a=J(o,r):this.mergeMode==="ave"?a=D(.5,J(o,r)):this.mergeMode==="mul"?a=D(o,r):this.mergeMode==null&&(a=[o,r]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){Us(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),Us(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const r=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(r).concat(r):[s].concat(r).concat(r)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=Yn(e.layer);if(delete e.layer,e.numConstants!=null)throw new xt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const o=e;return o.layer=s,new t(o)}}O1.className="Bidirectional";q(O1);class L1 extends vt{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return z(()=>(t=ft(t),t.dtype!=="float32"&&(t=Ln(t,"float32")),J(D(t,this.scale),this.offset)))}}L1.className="Rescaling";q(L1);const{resizeBilinear:rR,cropAndResize:iR}=qn;class P1 extends vt{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,o,r,i,a,l){return z(()=>{let c,u=!1;const h=e/i,d=s/a,p=(o+e)/i,f=(r+s)/a,m=[h,d,p,f],g=[];t.rank===3?(u=!0,c=Jn([t])):c=t;for(let v=0;v<c.shape[0];v++)g.push(m);const x=tg(g,[g.length,4]),b=Cr(0,g.length,1,"int32"),w=iR(c,x,b,[o,r],"nearest");return Ln(u?ft(to(w)):w,l)})}upsize(t,e,s,o){return z(()=>{const r=rR(t,[e,s]);return Ln(r,o)})}call(t,e){return z(()=>{const s=ft(t),o=s.dtype,r=s.shape,i=r[r.length-3],a=r[r.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,o):this.upsize(t,this.height,this.width,o)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Nt(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}P1.className="CenterCrop";q(P1);function aR(n,t,e,s){let o=ft(n);if(o.dtype!=="int32"&&(o=Ln(o,"int32")),t==="int")return o;const r=o.shape;if(o.rank===0&&(o=Oe(o,-1)),t==="oneHot"&&o.shape[o.shape.length-1]!==1&&(o=Oe(o,-1)),o.rank>2)throw new A(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${r} which would result in output rank ${o.rank}.`);const i=["multiHot","oneHot"].includes(t),a=o;let l;if(typeof s<"u"&&t==="count"?l=Op(a,s,e,i):l=Op(a,[],e,i),t!=="tfIdf")return l;if(s)return D(l,s);throw new A("When outputMode is 'tfIdf', weights must be provided.")}class M1 extends vt{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=Nt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return z(()=>{t=ft(t),t.dtype!=="int32"&&(t=Ln(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new A(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=ft(e.countWeights)}const o=vn(t),r=Na(t),i=Qe(this.numTokens,o).bufferSync().get(0),a=io(r,0).bufferSync().get(0);if(!(i&&a))throw new A(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return aR(t,this.outputMode,this.numTokens,s)})}}M1.className="CategoryEncoding";q(M1);const lR=["bilinear","nearest"],$f=new Set(lR);class B1 extends vt{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if($f.has(t.interpolation))this.interpolation=t.interpolation;else throw new A(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=Nt(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return z(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return qn.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return qn.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...$f]} are supported`)})}}B1.className="Resizing";q(B1);class z1{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}z1.className="RandomSeed";class V1 extends vt{constructor(t){super(t),this.randomGenerator=new z1(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}V1.className="BaseRandomLayer";const cR=["bilinear","nearest"],If=new Set(cR);class W1 extends V1{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new A(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new A(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new A(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(If.has(s))this.interpolation=s;else throw new A(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Nt(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return z(()=>{const s=ft(t);this.imgHeight=s.shape[s.shape.length-3];const o=s.shape[s.shape.length-2];this.widthFactor=Ei([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*o;r=Math.round(r);const i=[this.imgHeight,r];switch(this.interpolation){case"bilinear":return qn.resizeBilinear(t,i);case"nearest":return qn.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...If]} are supported`)}})}}W1.className="RandomWidth";q(W1);const uR=V();uR.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var kf;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(kf||(kf={}));var Sf;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Sf||(Sf={}));var Nf;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(Nf||(Nf={}));function rt(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&I(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const hR=Mg;class wc extends Lu{nextDataId(){return wc.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new lm(this,Nn())}write(t,e,s){this.firstUse&&(this.firstUse=!1,V().get("IS_NODE")&&qe(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const o={id:this.nextDataId()};return this.data.set(o,{values:t,dtype:s,refCount:1}),o}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Ar(s[0])){const r=s.map(i=>ms(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return{dataId:o,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,o,r){this.data.set(t,{values:e,dtype:o,refCount:r})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const o=this.readSync(s.real.dataId),r=this.readSync(s.imag.dataId);return Qn(o,r)}return Dw(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>bs(o));return yt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return yt(t.shape,t.dtype,e)}makeOutput(t,e,s){return Nn().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=_e();return t(),{kernelMs:_e()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){rt([t],"where");const e=this.readSync(t.dataId);return hR(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}wc.nextDataId=0;function U1(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const dR=n=>{const{x:t}=n.inputs,e=n.backend;rt(t,"abs");let s=new Float32Array(H(t.shape));const o=e.data.get(t.dataId).values;return s=U1(o),e.makeOutput(s,t.shape,t.dtype)},pR={kernelName:Za,backendName:"cpu",kernelFunc:dR};function ee(n){return(t,e,s,o,r)=>{const i=mt(t,e),a=i.length,l=lt(i),c=H(i),u=ve(r,c),h=t.length,d=e.length,p=lt(t),f=lt(e),m=Ao(t,i),g=Ao(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=zo(x,a,l),y=b.slice(-h);m.forEach(N=>y[N]=0);const w=Fn(y,h,p),v=b.slice(-d);g.forEach(N=>v[N]=0);const $=Fn(v,d,f);u[x]=n(s[w],o[$])}return[u,i]}}function We(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",r),imag:e.makeTensorInfo(o.shape,"float32",i)},a}const fR={kernelName:qu,backendName:"cpu",kernelFunc:We};function Va(n,t,e="float32"){if(e==="complex64"){const o=Va(n,t,"float32"),r=Va(n,t,"float32");return We({inputs:{real:o,imag:r},backend:n})}const s=Ce(H(t),e);return n.makeTensorInfo(t,e,s)}function Wn(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const mR={kernelName:Jr,backendName:"cpu",kernelFunc:Wn};function no(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.real,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const gR={kernelName:yh,backendName:"cpu",kernelFunc:no};function G1(n,t,e,s){if(s==="int32"){const o=Int32Array.from(n);return[t,"int32",o]}if(s==="bool"){const o=ro([0],e),[r,i]=ee((a,l)=>a!==l?1:0)(t,[],n,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function $s(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return Wn({inputs:{x:o},backend:e});const u=Va(e,o.shape,o.dtype),h=$s({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),d=We({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(o.dtype==="complex64"){const u=no({inputs:{input:o},backend:e}),h=$s({inputs:{x:u},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(u),h}if(!hm(o.dtype,r)){const u=Wn({inputs:{x:o},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=e.data.get(o.dataId).values,[a,l,c]=G1(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}const xR={kernelName:Br,backendName:"cpu",kernelFunc:$s};function ue(n,t,e,s){return e==null?({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;rt([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?ts(c):c,d=i.dtype==="string"?ts(u):u,p=s||i.dtype,[f,m]=t(i.shape,a.shape,h,d,p);return l.makeTensorInfo(m,p,f)}:({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=$s({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,p=l.data.get(h.dataId).values,f=l.data.get(d.dataId).values,m=$s({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,y=l.data.get(x.dataId).values,w=l.data.get(b.dataId).values,[v,$,N]=e(i.shape,a.shape,p,f,y,w),T=l.makeTensorInfo(N,"float32",v),k=l.makeTensorInfo(N,"float32",$),S=We({inputs:{real:T,imag:k},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(T),l.disposeIntermediateTensorInfo(k),S}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,p]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(p,h,d)}}}function tp(n){return(t,e,s,o,r,i)=>{const a=mt(t,e),l=H(a),c=a.length,u=lt(a),h=ve("float32",l),d=ve("float32",l),p=Ao(t,a),f=Ao(e,a),m=Qn(s,o),g=Qn(r,i),x=t.length,b=lt(t),y=e.length,w=lt(e);if(p.length+f.length===0)for(let v=0;v<h.length;v++){const $=v%m.length,N=v%g.length,T=n(m[$*2],m[$*2+1],g[N*2],g[N*2+1]);h[v]=T.real,d[v]=T.imag}else for(let v=0;v<h.length;v++){const $=zo(v,c,u),N=$.slice(-x);p.forEach(R=>N[R]=0);const T=Fn(N,x,b),k=$.slice(-y);f.forEach(R=>k[R]=0);const S=Fn(k,y,w),C=n(m[T*2],m[T*2+1],g[S*2],g[S*2+1]);h[v]=C.real,d[v]=C.imag}return[h,d,a]}}const H1=ee(((n,t)=>n+t)),bR=tp(((n,t,e,s)=>({real:n+e,imag:t+s}))),_o=ue(Vo,H1,bR),yR={kernelName:Vo,backendName:"cpu",kernelFunc:_o};function ep(n,t,e,s,o){const r=H(s),i=Ce(o,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(r>0?i[l]+=t[a]:i[l]+=1)}return i}function j1(n,t,e,s=!1){const o=n.shape[0],r=n.shape[1],i=yt([o,e],t.dtype);for(let a=0;a<o;a++)for(let l=0;l<r;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const X1=ee(((n,t)=>n&t)),wR=ue(Ku,X1),vR={kernelName:Ku,backendName:"cpu",kernelFunc:wR};function Un(n){return(t,e,s)=>{const o=Yt(e,t.length);for(let r=0;r<t.length;++r)o[r]=n(t[r],s);return o}}function Dt(n,t,e){const s=Un(t);return As(n,s,e)}function As(n,t,e){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;rt(i,n);const a=r,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=ts(l)}else c=l;const u=e||i.dtype,h=t(c,u,o);return a.makeTensorInfo(i.shape,u,h)}}const K1=Un(n=>Math.ceil(n)),CR=As(zr,K1),$R={kernelName:zr,backendName:"cpu",kernelFunc:CR};function q1(n,t,e,s){const o=Yt(e,H(t));if(s&&e!=="string"){let r=0;n.forEach(i=>{const a=H(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;n.forEach(i=>{const a=e==="string"?ts(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+r;for(let h=0;h<i.shape[1];++h)o[u+h]=a[l++]}r+=i.shape[1]})}return o}const Y1=ee((n,t)=>n===t?1:0),Z1=ue(dl,Y1,null,"bool"),IR={kernelName:dl,backendName:"cpu",kernelFunc:Z1};const J1=Un(n=>Math.exp(n)),Q1=As(Xr,J1,"float32"),kR={kernelName:Xr,backendName:"cpu",kernelFunc:Q1};const tb=Un(n=>Math.expm1(n)),SR=As(Kr,tb),NR={kernelName:Kr,backendName:"cpu",kernelFunc:SR};const eb=Un(n=>Math.floor(n)),TR=As(qr,eb),ER={kernelName:qr,backendName:"cpu",kernelFunc:TR};const nb=ee((n,t)=>Math.floor(n/t)),RR=ue(Yr,nb,null,"int32"),AR={kernelName:Yr,backendName:"cpu",kernelFunc:RR};function sb(n,t,e,s,o,r,i,a,l){const c=yt([s,r],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let p=0;p<o;p++){const f=n[u*o+p];d+=f*i[p],h.push(f)}if(d<0||d>=l/r)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<r;p++)c.values[u*r+p]=t.get(...t.indexToLoc(d*r+p))}return c}function ob(n,t,e){const s=yt(e,n.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}const rb=ee((n,t)=>n>t?1:0),DR=ue(gl,rb,null,"bool"),FR={kernelName:gl,backendName:"cpu",kernelFunc:DR};const ib=ee((n,t)=>n>=t?1:0),_R=ue(Zr,ib,null,"bool"),OR={kernelName:Zr,backendName:"cpu",kernelFunc:_R};const ab=ee((n,t)=>n<t?1:0),LR=ue(bl,ab,null,"bool"),PR={kernelName:bl,backendName:"cpu",kernelFunc:LR};const lb=ee((n,t)=>n<=t?1:0),MR=ue(yl,lb,null,"bool"),BR={kernelName:yl,backendName:"cpu",kernelFunc:MR};function cb(n,t,e){const s=(t-n)/(e-1),o=Ce(e,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}const ub=Un(n=>Math.log(n)),zR=As(ni,ub),VR={kernelName:ni,backendName:"cpu",kernelFunc:zR};function hb(n,t,e,s){const o=ve(s,H(e));for(let r=0;r<o.length;++r){const i=r*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}o[r]=a}return o}const db=ee(((n,t)=>Math.max(n,t))),WR=ue(oi,db),UR={kernelName:oi,backendName:"cpu",kernelFunc:WR};const pb=ee(((n,t)=>Math.min(n,t))),GR=ue(ri,pb),HR={kernelName:ri,backendName:"cpu",kernelFunc:GR};const np=ee(((n,t)=>n*t)),jR=tp(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),vc=ue(ai,np,jR),XR={kernelName:ai,backendName:"cpu",kernelFunc:vc};function fb(n,t,e){const s=ks(-1,e);return np([],t,s,n,e)}function KR(n){const{inputs:t,backend:e}=n,{x:s}=t;rt(s,"neg");const o=e.data.get(s.dataId).values,[r,i]=fb(o,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,r)}const qR={kernelName:Rl,backendName:"cpu",kernelFunc:KR};const mb=ee(((n,t)=>n!==t?1:0)),YR=ue(Al,mb,null,"bool"),ZR={kernelName:Al,backendName:"cpu",kernelFunc:YR};function sp(n,t,e,s,o){const r=t.length,i=H(t),a=lt(t),l=lt(o),c=ve(e,H(o));for(let u=0;u<i;++u){const h=zo(u,r,a),d=new Array(h.length);for(let f=0;f<d.length;f++)d[f]=h[s[f]];const p=Fn(d,r,l);c[p]=n[u]}return c}function Be(n){const{inputs:t,attrs:e,backend:s}=n,{x:o}=t,{perm:r}=e;rt(o,"transpose");const i=o.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=o.shape[r[h]];const l=s.data.get(o.dataId).values,c=sp(l,o.shape,o.dtype,r,a);return{dataId:s.write(c,a,o.dtype),shape:a,dtype:o.dtype}}const JR={kernelName:$o,backendName:"cpu",kernelFunc:Be};function gb(n,t,e,s){const[o,r]=fe(n,s),i=Ge(t,"int32"),a=Ce(H(o),i),l=H(r);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:o,outDtype:i}}function QR(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"prod");const a=o.shape.length,l=wt(r,o.shape),c=Xt(l,a);let u=l,h=o;const d=[];c!=null&&(h=Be({inputs:{x:o},backend:e,attrs:{perm:c}}),d.push(h),u=Qt(u.length,a));const p=e.data.get(h.dataId).values,{outVals:f,outShape:m,outDtype:g}=gb(h.shape,h.dtype,p,u);let x=m;return i&&(x=se(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,f)}const tA={kernelName:Pl,backendName:"cpu",kernelFunc:QR};function eA(n,t,e){n.forEach((s,o)=>{if(s<0||s>=e){const r=zo(o,t.length,lt(t)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${e})`)}})}function nA(n,t){for(let e=0;e<n.length;++e){const s=n[e],o=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function sA(n,t,e,s){const o=[];let r=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);nA(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const p=e[d],f=d+t.length-1;if(f>=0){const m=a[f],g=m[m.length-1]-p[u];for(let x=u;x<h;++x)a[f].push(p[x+1]+g)}u=p[u],h=p[h]}h!==u&&(o.push([u,h]),r+=h-u)}return{outSplits:a,valueSlices:o,numValues:r}}function oA(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,o=Yt("int32",s);t.push(o),n[e].forEach((r,i)=>o[i]=r)}return t}function Tf(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function rA(n,t,e,s,o,r){const i=Tf(t,2)[1],a=Tf(r,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)o[l*a+h]=n[u*i+h];++l}}function iA(n,t,e,s,o){const r=t.slice();r[0]=o;const i=Yt(e,H(r)),a=n.length,l=a===0?0:a/t[0];return rA(n,t,s,l,i,r),[i,r]}function xb(n,t,e,s,o,r,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(eA(r,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=sA(r,i,n,c),p=oA(u),f=iA(e,s,o,h,d);return[p,f[0],f[1]]}const Ef=2147483647;function bb(n,t,e,s,o,r,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=o.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(o[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=Yt("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],y=c?r[0]:r[g];if(y===0)throw new Error("Requires delta != 0");let w;if(y>0&&b<x||y<0&&b>x)w=0;else if(w=Math.ceil(Math.abs((b-x)/y)),w>Ef)throw new Error(`Requires ((limit - start) / delta) <= ${Ef}`);d[g+1]=d[g]+w}const p=d[h],f=Yt(e,p);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const y=c?r[0]:r[g];for(let w=0;w<x;++w)f[m++]=b,b+=y}return[d,f]}var nn=bn;class Wa{constructor(t,e,s,o,r,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=s0(u),this.raggedRank=o0(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===nn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===nn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case nn.VALUE_ROWIDS:return Wa.getMaxWidthValueRowID(e);case nn.ROW_SPLITS:return Wa.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${nn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let o=0;o<e-1;++o){const r=t[o+1]-t[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,o=t[0],r=0;for(let i=1;i<e;++i){const a=t[i];a!==o&&(o=a,r=Math.max(i-s,r),s=i)}return Math.max(e-s,r)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Af(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;r0(s,e);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=n0(this.raggedRank,o,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const o=Math.min(t,s),r=[];let i=0;for(let a=0;a<o;++a,i+=e)r.push(i);for(let a=o;a<t;++a)r.push(-1);return I(r.length===t,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(t,e,s,o){const r=t.length,i=[];for(let a=0;a<r-1;++a){const l=t[a+1]-t[a];let c=Math.min(o,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(r>0&&i.length!==t[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,o){const r=t.length,i=[];if(r===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<r;++u){const h=t[u];if(h===l)c>=0&&(++a,a<o?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,o){const r=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case nn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,s,o);case nn.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,s,o);default:throw new Error(`Unsupported partition type: ${nn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case nn.FIRST_DIM_SIZE:return t[0];case nn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case nn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${nn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*s[l+1];const r=Af(s,!1),i=Yt(this.valuesDType,H(r));if(o[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,o[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,o[c],s[c]);this.setOutput(this.raggedRank,l,i,r)}return[r,i]}setOutput(t,e,s,o){if(s.length===0)return;const r=this.values,i=s;let a=o.slice();a=a.slice(t+1);const l=H(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const f=this.defaultValueShape;z(()=>{const m=O(u,f);u=gr(m,a).dataSync()})}let h=0,d=0,p=0;for(let f=0;f<=c;++f){let m=f<c?e[f]:-1;if(m===p){++p;continue}if(d<p){const g=r.subarray(h*l),x=i.subarray(d*l),b=(p-d)*l;Rf(x,g,b)}if(f>=c){const g=s.length;m=Math.floor(g/l)}if(m>p)if(this.defaultValue.length===1)i.subarray(p*l,m*l).fill(this.defaultValue[0]),p=m;else for(;m>p;){const g=i.slice(p*l);Rf(g,u,l),++p}m<0?(h=f+1,d=p):(h=f,d=p,p=d+1)}}}function Rf(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function Af(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function yb(n,t,e,s,o,r,i,a,l,c){return new Wa(n,t,e,s,o,r,i,a,l,c).compute()}function wb(n,t,e,s){const o=n===t,r=n<t&&e<0,i=t<n&&e>1;if(o||r||i)return Ce(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=Ce(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const vb=Un(n=>1/Math.sqrt(n)),aA=As(pi,vb),lA={kernelName:pi,backendName:"cpu",kernelFunc:aA};function Vs(n,t,e,s,o,r,i,a,l,c){const u=[s/o,o],h=n.values,d=t.values;if(s===0)return yt(e,t.dtype);const p=l instanceof xe?l:yt(u,t.dtype);typeof l=="string"||typeof l=="number"?p.values.fill(l):typeof l=="boolean"&&p.values.fill(+l);for(let f=0;f<r;f++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[f*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<o;x++)c?p.values[g*o+x]+=d[f*o+x]:p.values[g*o+x]=t.rank===0?d[0]:d[f*o+x]}return p}const cA=Un(n=>1/(1+Math.exp(-n))),Cb=Dt(bi,n=>1/(1+Math.exp(-n))),uA={kernelName:bi,backendName:"cpu",kernelFunc:Cb};function $b(n,t,e,s,o){const r=ud(s,t,e),i=H(e),a=lt(s);if(r){const h=hd(t,a);return o==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=o==="string"?ts(n):n,c=yt(s,o,l),u=yt(e,o);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),p=d.map((f,m)=>f+t[m]);u.set(c.get(...p),...d)}return o==="string"?k0(u.values):u.values}function so(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s;rt(o,"slice");const[a,l]=ic(o,r,i);ld(o,a,l);const c=e.data.get(o.dataId).values,u=$b(c,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,u)}const hA={kernelName:Ul,backendName:"cpu",kernelFunc:so};function Ib(n,t,e,s,o,r,i){const a=t[0],l=r[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(d0(a));const g=Yt(e,0),x=Yt(o,0);return[g,[0,h],x,c,u]}let d=!0,p=0;const f=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(p0(g,x));if(x>=l)throw new Error(f0(g,x,l));++f[x],d=d&&x>=p,p=x}let m=!0;for(let g=0;g<l;++g){const x=f[g]===0;c[g]=x,m=m&&!x,f[g]=Math.max(f[g],1),g>0&&(f[g]+=f[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=f[l-1],x=Yt(e,g*h),b=Yt(o,g),y=new Array(l).fill(0);for(let w=0;w<a;++w){const v=n[w*h],$=y[v],N=(v===0?0:f[v-1])+$;y[v]++;for(let T=0;T<h;++T)x[N*h+T]=n[w*h+T];b[N]=s[w],u[w]=N}for(let w=0;w<l;++w)if(y[w]===0){const $=w===0?0:f[w-1];x[$*h+0]=w;for(let N=1;N<h;++N)x[$*h+N]=0;b[$]=i}return[x,[g,h],b,c,u]}}function kb(n,t,e,s,o){const r=H(s),i=t[0],a=o.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(m0(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(g0(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(x0());const g=Math.trunc(r/c);if(c*g!==r)throw new Error(b0(s,l));l[u]=g}if(H(l)!==r)throw new Error(y0(s,l));const d=s.length,p=[];if(d>0){p[d-1]=1;for(let g=d-2;g>=0;--g)p[g]=p[g+1]*s[g+1]}const f=[];if(a>0){f[a-1]=1;for(let g=a-2;g>=0;--g)f[g]=f[g+1]*l[g+1]}const m=Yt(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*p[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/f[b]),x%=f[b]}return[m,[i,a],l]}function op(n,t,e,s,o,r=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?o[a-1]+1:0;if(h<0)throw new Error(yu());const d=t.slice();d[0]=h;const p=d.reduce((y,w)=>y*w,1),f=Yt(e,p);if(a===0)return h>0&&f.fill(i),[f,d];if(h<=0)throw new Error(yu());let m=0,g=1,x=0,b=o[m];for(;;){let y=0;if(g<a){if(y=o[g],b===y){++g;continue}if(b>=y)throw new Error(w0())}if(b<0||b>=h)throw new Error(v0(b,h));b>x&&f.fill(i,x*c,b*c);for(let w=m;w<g;++w){const v=s[w];if(v<0||v>=l[0])throw new Error(C0(w,s[w],l[0]));for(let $=0;$<c;$++)f[b*c+$]+=n[v*c+$]}if(r)for(let w=0;w<c;w++)f[b*c+w]/=g-m;if(m=g,++g,x=b+1,b=y,g>a)break}return x<h&&f.fill(i,x*c,h*c),[f,d]}const dA=Un(n=>Math.sqrt(n)),pA=Dt(wi,n=>Math.sqrt(n)),fA={kernelName:wi,backendName:"cpu",kernelFunc:pA};const Sb=ee(((n,t)=>{const e=n-t;return e*e})),mA=ue(vi,Sb),gA={kernelName:vi,backendName:"cpu",kernelFunc:mA};const Nb=Un((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:o}=t;return n.replace(new RegExp(e,s?"g":""),o)}),xA=As($h,Nb),bA={kernelName:$h,backendName:"cpu",kernelFunc:xA};function Tb(n,t,e,s){const o=yt(n,t.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];o.set(t.get(...a),...i)}return o}class yA{constructor(t,e,s,o,r,i){this.separator=ms(t),this.nGramWidths=e,this.leftPad=ms(s),this.rightPad=ms(o),this.padWidth=r,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,o,r,i){for(let a=0;a<r;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(r-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let p=0;p+=c*this.leftPad.length;for(let b=0;b<h;++b)p+=t[d+b].length;p+=u*this.rightPad.length;const f=c+u+h-1;p+=f*this.separator.length,s[o+a]=new Uint8Array(p);const m=s[o+a];let g=0;const x=b=>b.forEach(y=>m[g++]=y);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,o=e.length;if(o>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<o;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const r=o-1,i=Yt("int32",o);if(s===0||o===0){const l=new Array(s);for(let c=0;c<=r;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=r;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[r]);for(let l=0;l<r;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],p=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,p,h),u+=p}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function Eb(n,t,e,s,o,r,i,a){return new yA(e,s,o,r,i,a).compute(n,t)}function wA(n,t,e,s){if(!n.length)return;if(t.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(t.length===1){const r=t[0];let i=n.indexOf(r);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(r)}(!e||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||t.indexOf(n[r])!==-1){const i=n.subarray(o,r);(!e||i.length!==0)&&s.push(i),o=r+1}}function Rb(n,t,e){const s=n.length,o=[];let r=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const p=o.length;wA(n[d],t,e,o);const f=o.length-p;a[d]=f,r+=f,i=Math.max(i,f)}const l=Yt("int32",r*2),c=new Array(r),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let p=0;p<a[d];++p)l[h*2]=d,l[h*2+1]=p,c[h]=o[h],++h;return[l,c,u]}function Ab(n,t){const e=Yt("int32",n.length);for(let s=0;s<n.length;++s)e[s]=Qw(n[s]).modulo(t).getLowBitsUnsigned();return e}const Db=ee(((n,t)=>n-t)),vA=tp(((n,t,e,s)=>({real:n-e,imag:t-s}))),rp=ue(Ci,Db,vA),CA={kernelName:Ci,backendName:"cpu",kernelFunc:rp};function Fb(n,t){const e=new Array(n.rank);for(let o=0;o<e.length;o++)e[o]=n.shape[o]*t[o];const s=yt(e,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=r[l]%n.shape[l];const a=n.locToIndex(i);s.values[o]=n.values[a]}return s}const pr=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function _b(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),p=Math.min(s,Math.floor(t+(a-l)*u/a+h));_b(n,t,d,p)}const o=n[t];let r=e,i=s;for(yo(n,e,t),pr(n[s],o)>0&&yo(n,e,s);r<i;){for(yo(n,r,i),r++,i--;pr(n[r],o)<0;)r=r+1;for(;pr(n[i],o)>0;)i=i-1}pr(n[e],o)===0?yo(n,e,i):(i=i+1,yo(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function Ob(n,t,e,s,o){const r=t[t.length-1],[i,a]=[n.length/r,r],l=ve(e,i*s),c=ve("int32",i*s);for(let h=0;h<i;h++){const d=h*a,p=n.subarray(d,d+a);let f=new Array(p.length);p.forEach((b,y)=>f[y]={value:b,index:y}),s<f.length&&(_b(f,s),f=f.slice(0,s)),o&&f.sort(pr);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=f[b].value,x[b]=f[b].index}const u=t.slice();return u[u.length-1]=s,[yt(u,e,l),yt(u,"int32",c)]}function Lb(n,t,e,s){const o=wt(t,e)[0],r=[1,e[0],1];for(let f=0;f<o;f++)r[0]*=e[f];r[1]=e[o];for(let f=o+1;f<e.length;f++)r[2]*=e[f];const i=new Map,a=new Int32Array(e[o]),l=new xe(r,s,n),c=[],u=r[0]===1&&r[2]===1;for(let f=0;f<e[o];f++){let m;if(u)m=n[f].toString();else{const x=[];for(let b=0;b<r[0];b++)for(let y=0;y<r[2];y++)x.push(l.get(b,f,y));m=x.join(",")}const g=i.get(m);if(g!=null)a[f]=g;else{const x=i.size;i.set(m,x),a[f]=x,c.push(f)}}const h=r.slice();h[1]=i.size;const d=new xe(h,s);c.forEach((f,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)d.set(l.get(g,f,x),g,m,x)});const p=e.slice();return p[o]=h[1],{outputValues:d.values,outputShape:p,indices:a}}const $A=Object.freeze(Object.defineProperty({__proto__:null,addImpl:H1,bincountImpl:ep,bincountReduceImpl:j1,bitwiseAndImpl:X1,castImpl:G1,ceilImpl:K1,concatImpl:q1,equalImpl:Y1,expImpl:J1,expm1Impl:tb,floorDivImpl:nb,floorImpl:eb,gatherNdImpl:sb,gatherV2Impl:ob,greaterEqualImpl:ib,greaterImpl:rb,lessEqualImpl:lb,lessImpl:ab,linSpaceImpl:cb,logImpl:ub,maxImpl:hb,maximumImpl:db,minimumImpl:pb,multiplyImpl:np,negImpl:fb,notEqualImpl:mb,prodImpl:gb,raggedGatherImpl:xb,raggedRangeImpl:bb,raggedTensorToTensorImpl:yb,rangeImpl:wb,rsqrtImpl:vb,scatterImpl:Vs,sigmoidImpl:cA,simpleAbsImpl:U1,sliceImpl:$b,sparseFillEmptyRowsImpl:Ib,sparseReshapeImpl:kb,sparseSegmentReductionImpl:op,sqrtImpl:dA,squaredDifferenceImpl:Sb,staticRegexReplaceImpl:Nb,stridedSliceImpl:Tb,stringNGramsImpl:Eb,stringSplitImpl:Rb,stringToHashBucketFastImpl:Ab,subImpl:Db,tileImpl:Fb,topKImpl:Ob,transposeImpl:sp,uniqueImpl:Lb},Symbol.toStringTag,{value:"Module"}));eg("cpu",()=>new wc,1);const Pb=Dt(Hr,n=>n>=0?n:Math.exp(n)-1),IA={kernelName:Hr,backendName:"cpu",kernelFunc:Pb};function Mb(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s;rt([o],"leakyRelu");const i=H(o.shape),a=e.data.get(o.dataId).values,l=ve("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?r*a[c]:a[c];return e.makeTensorInfo(o.shape,"float32",l)}const kA={kernelName:xl,backendName:"cpu",kernelFunc:Mb};const SA=ee((n,t)=>n<0?t*n:n);function Bb(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t;rt([s,o],"prelu");const r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,[a,l]=SA(s.shape,o.shape,r,i,"float32");return e.makeTensorInfo(l,"float32",a)}const NA={kernelName:Ll,backendName:"cpu",kernelFunc:Bb};const zb=Dt(ui,n=>Math.max(0,n)),TA={kernelName:ui,backendName:"cpu",kernelFunc:zb};const Vb=Dt(hi,n=>Math.min(Math.max(0,n),6)),EA={kernelName:hi,backendName:"cpu",kernelFunc:Vb};function Ua(n,t,e,s,o){if(e==="linear")return Wn({inputs:{x:t},backend:n});if(e==="relu")return zb({inputs:{x:t},backend:n});if(e==="elu")return Pb({inputs:{x:t},backend:n});if(e==="relu6")return Vb({inputs:{x:t},backend:n});if(e==="prelu")return Bb({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return Mb({inputs:{x:t},backend:n,attrs:{alpha:o}});if(e==="sigmoid")return Cb({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function zt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=H(o.shape),a=um(r,i),l=H(a);I(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(o.dataId);const c=e.data.get(o.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:o.dataId,shape:a,dtype:o.dtype}}const RA={kernelName:Ml,backendName:"cpu",kernelFunc:zt};function Wb(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;rt([o,r],"matMul");const l=o.shape.length,c=r.shape.length,u=i?o.shape[l-2]:o.shape[l-1],h=a?r.shape[c-1]:r.shape[c-2],d=i?o.shape[l-1]:o.shape[l-2],p=a?r.shape[c-2]:r.shape[c-1],f=o.shape.slice(0,-2),m=r.shape.slice(0,-2),g=H(f),x=H(m),y=mt(o.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,p]);I(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${o.shape} and ${r.shape} and transposeA=${i} and transposeB=${a} must match.`);const w=i?[g,u,d]:[g,d,u],v=a?[x,p,h]:[x,h,p],$=zt({inputs:{x:o},backend:e,attrs:{shape:w}}),N=zt({inputs:{x:r},backend:e,attrs:{shape:v}}),T=i?$.shape[1]:$.shape[2],k=i?$.shape[2]:$.shape[1],S=a?N.shape[1]:N.shape[2],C=Math.max(g,x),R=e.data.get($.dataId).values,_=e.data.get(N.dataId).values,M=lt($.shape),P=lt(N.shape),[B,G,W]=i?[M[0],1,M[1]]:[M[0],M[1],1],[j,X,K]=a?[1,P[1],P[0]]:[P[1],1,P[0]],Y=k*S,Z=yt([C,k,S],$.dtype),tt=Z.values,Q=e.blockSize;for(let ot=0;ot<C;ot++){const at=ot%g,dt=ot%x;for(let ht=0;ht<k;ht+=Q){const gt=Math.min(ht+Q,k);for(let bt=0;bt<S;bt+=Q){const Rt=Math.min(bt+Q,S);for(let Lt=0;Lt<T;Lt+=Q){const Kt=Math.min(Lt+Q,T);for(let Pt=ht;Pt<gt;Pt++)for(let Ft=bt;Ft<Rt;Ft++){let Ht=0;for(let Wt=Lt;Wt<Kt;Wt++){const Gn=R[at*B+Pt*G+Wt*W],me=_[Wt*j+Ft*X+dt*K];Ht+=Gn*me}tt[ot*Y+(Pt*S+Ft)]+=Ht}}}}}return e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(N),e.makeTensorInfo(y,Z.dtype,Z.values)}const AA={kernelName:nl,backendName:"cpu",kernelFunc:Wb};function DA(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,p,f;const m=[];d=Wb({inputs:{a:o,b:r},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(p=_o({inputs:{a:d,b:i},backend:e}),m.push(d),d=p),u&&(f=Ua(e,d,u,a,h),m.push(d),d=f);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const FA={kernelName:$a,backendName:"cpu",kernelFunc:DA};const _A=Dt(Dr,n=>Math.acos(n)),OA={kernelName:Dr,backendName:"cpu",kernelFunc:_A};const LA=Dt(Fr,n=>Math.acosh(n)),PA={kernelName:Fr,backendName:"cpu",kernelFunc:LA};function MA(n){const{inputs:t,backend:e}=n,s=t;rt(t,"addN");const o=s.map(a=>e.data.get(a.dataId).values),r=yt(s[0].shape,s[0].dtype),i=r.values;for(let a=0;a<s.length;a++){const l=o[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(r.shape,r.dtype,r.values)}const BA={kernelName:Wu,backendName:"cpu",kernelFunc:MA};function zA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"all");const a=wt(r,o.shape);let l=a;const c=Xt(l,o.shape.length);let u=o;c!=null&&(u=Be({inputs:{x:o},backend:e,attrs:{perm:c}}),l=Qt(l.length,o.shape.length)),ye("all",l,u.shape.length);const[h,d]=fe(u.shape,l),p=H(d),f=Ce(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let y=m[b];for(let w=0;w<p;++w){const v=m[b+w];y=y&&v}f[x]=y}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=se(h,a),b=zt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const VA={kernelName:Uu,backendName:"cpu",kernelFunc:zA};function WA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"any");const a=wt(r,o.shape);let l=a;const c=Xt(l,o.shape.length);let u=o;c!=null&&(u=Be({inputs:{x:o},backend:e,attrs:{perm:c}}),l=Qt(l.length,o.shape.length)),ye("any",l,u.shape.length);const[h,d]=fe(u.shape,l),p=H(d),f=Ce(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let y=m[b];for(let w=0;w<p;++w){const v=m[b+w];y=y||v}f[x]=y}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=se(h,a),b=zt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const UA={kernelName:Gu,backendName:"cpu",kernelFunc:WA};function GA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;rt(o,"argMax");let i=wt(r,o.shape);const a=Xt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Be({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),i=[i[0]],ye("argMax",i,l.shape.length);const[u,h]=fe(l.shape,i),d=H(u),p=Ce(d,"int32"),f=H(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],y=0;for(let w=0;w<f;++w){const v=m[x+w];v>b&&(b=v,y=w)}p[g]=y}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const HA={kernelName:Ja,backendName:"cpu",kernelFunc:GA};function jA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;rt(o,"argMin");let i=wt(r,o.shape);const a=Xt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Be({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),i=[i[0]],ye("argMin",i,l.shape.length);const[u,h]=fe(l.shape,i),d=H(u),p=Ce(d,"int32"),f=H(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],y=0;for(let w=0;w<f;++w){const v=m[x+w];v<b&&(b=v,y=w)}p[g]=y}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const XA={kernelName:Qa,backendName:"cpu",kernelFunc:jA};const KA=Dt(_r,n=>Math.asin(n)),qA={kernelName:_r,backendName:"cpu",kernelFunc:KA};const YA=Dt(Or,n=>Math.asinh(n)),ZA={kernelName:Or,backendName:"cpu",kernelFunc:YA};const JA=Dt(Lr,n=>Math.atan(n)),QA={kernelName:Lr,backendName:"cpu",kernelFunc:JA};const tD=ee((n,t)=>Math.atan2(n,t)),eD=ue(Mr,tD),nD={kernelName:Mr,backendName:"cpu",kernelFunc:eD};const sD=Dt(Pr,n=>Math.atanh(n)),oD={kernelName:Pr,backendName:"cpu",kernelFunc:sD};function ip(n,t,e,s,o,r){const i=o.strideHeight,a=o.strideWidth,l=o.dilationHeight,c=o.dilationWidth,u=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=o.padInfo.top,p=o.padInfo.left,f=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=yt(o.outShape,e),g=m.values,x=o.outShape[1]*o.outShape[2]*o.outShape[3],b=o.outShape[2]*o.outShape[3],y=o.outShape[3];for(let w=0;w<o.batchSize;++w){const v=w*x,$=w*s[0];for(let N=0;N<o.inChannels;++N)for(let T=0;T<o.outHeight;++T){const k=T*i-d,S=Math.max(0,k),C=Math.min(o.inHeight,u+k),R=v+T*b;for(let _=0;_<o.outWidth;++_){const M=_*a-p,P=Math.max(0,M),B=Math.min(o.inWidth,h+M);let G=f,W=0,j=0;for(let K=S;K<C;K+=l){const Y=$+K*s[1];for(let Z=P;Z<B;Z+=c){const tt=Y+Z*s[2],Q=n[tt+N];r==="max"&&Q>G?G=Q:r==="avg"&&(W+=Q,j++)}if(isNaN(G))break}const X=R+_*y+N;g[X]=r==="avg"?W/j:G}}}return m}function Ub(n,t,e,s,o=!1,r=!1){const i=yt(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,p=s.padInfo.top,f=s.padInfo.left,m=yt(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const y=b*a-p;let w=y;for(;w<0;)w+=c;const v=Math.min(s.inHeight,h+y);for(let $=0;$<s.outWidth;++$){const N=$*l-f;let T=N;for(;T<0;)T+=u;const k=Math.min(s.inWidth,d+N);let S=Number.NEGATIVE_INFINITY,C=-1;for(let R=w;R<v;R+=c){const _=R-y;for(let M=T;M<k;M+=u){const P=M-N,B=m.get(g,R,M,x);B>S&&(S=B,o?C=r?((g*s.inHeight+R)*s.inWidth+M)*s.inChannels+x:(R*s.inWidth+M)*s.inChannels+x:C=_*d+P)}}i.set(C,g,b,$,x)}}return i}function Gb(n,t,e,s,o,r){const i=o.strideDepth,a=o.strideHeight,l=o.strideWidth,c=o.dilationDepth,u=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,f=o.effectiveFilterWidth,m=o.padInfo.front,g=o.padInfo.top,x=o.padInfo.left,b=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=yt(o.outShape,e),w=y.values,v=o.outShape[1]*o.outShape[2]*o.outShape[3]*o.outShape[4],$=o.outShape[2]*o.outShape[3]*o.outShape[4],N=o.outShape[3]*o.outShape[4],T=o.outShape[4];for(let k=0;k<o.batchSize;++k){const S=k*v,C=k*s[0];for(let R=0;R<o.inChannels;++R)for(let _=0;_<o.outDepth;++_){const M=_*i-m;let P=M;for(;P<0;)P+=c;const B=Math.min(o.inDepth,d+M),G=S+_*$;for(let W=0;W<o.outHeight;++W){const j=W*a-g;let X=j;for(;X<0;)X+=u;const K=Math.min(o.inHeight,p+j),Y=G+W*N;for(let Z=0;Z<o.outWidth;++Z){const tt=Z*l-x;let Q=tt;for(;Q<0;)Q+=h;const ot=Math.min(o.inWidth,f+tt),at=Y+Z*T;let dt=b,ht=0,gt=0;for(let Rt=P;Rt<B;Rt+=c){const Lt=C+Rt*s[1];for(let Kt=X;Kt<K;Kt+=u){const Pt=Lt+Kt*s[2];for(let Ft=Q;Ft<ot;Ft+=h){const Ht=Pt+Ft*s[3],Wt=n[Ht+R];if(r==="max"&&Wt>dt?dt=Wt:r==="avg"&&(ht+=Wt,gt++),isNaN(dt))break}if(isNaN(dt))break}if(isNaN(dt))break}const bt=at+R;w[bt]=r==="avg"?ht/Math.max(gt,1):dt}}}}return y}function rD(n,t){const e=yt(t.outShape,"int32"),s=t.strideDepth,o=t.strideHeight,r=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,f=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let y=b;for(;y<0;)y+=i;const w=Math.min(t.inDepth,c+b);for(let v=0;v<t.outHeight;++v){const $=v*o-p;let N=$;for(;N<0;)N+=a;const T=Math.min(t.inHeight,u+$);for(let k=0;k<t.outWidth;++k){const S=k*r-f;let C=S;for(;C<0;)C+=l;const R=Math.min(t.inWidth,h+S);let _=Number.NEGATIVE_INFINITY,M=-1;for(let P=y;P<w;P+=i){const B=P-b;for(let G=N;G<T;G+=a){const W=G-$;for(let j=C;j<R;j+=l){const X=j-S,K=n.get(m,P,G,j,g);K>=_&&(_=K,M=B*u*h+W*u+X)}}}e.set(M,m,x,v,k,g)}}}return e}function iD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;rt(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(Ie(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=hn(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))h=Wn({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=lt(o.shape),f=ip(d,o.shape,o.dtype,p,u,"avg");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const aD={kernelName:tl,backendName:"cpu",kernelFunc:iD};function lD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;rt(o,"avgPool3d");const u=ns(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=Gb(h,o.shape,o.dtype,lt(o.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const cD={kernelName:el,backendName:"cpu",kernelFunc:lD};function uD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;rt([o,r],"avgPool3DGrad");const u=ns(r.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,p=u.strideWidth,f=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,y=u.dilationWidth,w=u.effectiveFilterDepth,v=u.effectiveFilterHeight,$=u.effectiveFilterWidth,N=w-1-u.padInfo.front,T=$-1-u.padInfo.left,k=v-1-u.padInfo.top,S=yt(r.shape,"float32"),C=1/(f*m*g),R=e.bufferSync(o);for(let _=0;_<u.batchSize;++_)for(let M=0;M<u.inChannels;++M)for(let P=0;P<u.inDepth;++P)for(let B=0;B<u.inHeight;++B)for(let G=0;G<u.inWidth;++G){const W=P-N,j=B-k,X=G-T;let K=0;for(let Y=0;Y<w;Y+=x){const Z=(W+Y)/h;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let tt=0;tt<v;tt+=b){const Q=(j+tt)/d;if(!(Q<0||Q>=u.outHeight||Math.floor(Q)!==Q))for(let ot=0;ot<$;ot+=y){const at=(X+ot)/p;if(at<0||at>=u.outWidth||Math.floor(at)!==at)continue;const dt=R.get(_,Z,Q,at,M);K+=dt}}}S.set(K*C,_,P,B,G,M)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}const hD={kernelName:ju,backendName:"cpu",kernelFunc:uD};function dD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;rt([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=hn(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,p=u.filterHeight,f=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,y=b-1-u.padInfo.left,w=x-1-u.padInfo.top,v=yt(i.shape,"float32"),$=1/(p*f),N=e.data.get(o.dataId).values,T=yt(o.shape,"float32",N);for(let k=0;k<u.batchSize;++k)for(let S=0;S<u.inChannels;++S)for(let C=0;C<u.inHeight;++C)for(let R=0;R<u.inWidth;++R){const _=C-w,M=R-y;let P=0;for(let B=0;B<x;B+=m){const G=(_+B)/h;if(!(G<0||G>=u.outHeight||Math.floor(G)!==G))for(let W=0;W<b;W+=g){const j=(M+W)/d;if(j<0||j>=u.outWidth||Math.floor(j)!==j)continue;const X=T.get(k,G,j,S);P+=X}}v.set(P*$,k,C,R,S)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const pD={kernelName:Hu,backendName:"cpu",kernelFunc:dD};function fD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,scale:r,offset:i,mean:a,variance:l}=t;I(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),I(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),I(r==null||a.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),rt([o,a,l,r,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(o.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,p=r?e.data.get(r.dataId).values:new Float32Array([1]),f=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=f.length,x=p.length,b=d.length,y=h.length;let w=0,v=0,$=0,N=0;for(let T=0;T<u.length;++T)m[T]=f[w++]+(u[T]-h[v++])*p[$++]/Math.sqrt(d[N++]+c),w>=g&&(w=0),v>=y&&(v=0),$>=x&&($=0),N>=b&&(N=0);return e.makeTensorInfo(o.shape,o.dtype,m)}const mD={kernelName:fl,backendName:"cpu",kernelFunc:fD};function gD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;rt([o],"batchToSpaceND");const a=r.reduce((x,b)=>x*b),l=Di(o.shape,r,a),c=Fi(l.length,r.length),u=_i(o.shape,r,a),h=gd(i,r.length),d=xd(u,i,r.length),p=zt({inputs:{x:o},backend:e,attrs:{shape:l}}),f=Be({inputs:{x:p},backend:e,attrs:{perm:c}}),m=zt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=so({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const xD={kernelName:sl,backendName:"cpu",kernelFunc:gD};function bD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=ep(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const yD={kernelName:Xu,backendName:"cpu",kernelFunc:bD};function wD(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=mt(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const vD={kernelName:gm,backendName:"cpu",kernelFunc:wD};const CD=Dt(Vr,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),$D={kernelName:Vr,backendName:"cpu",kernelFunc:CD};const ID=n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(H(t.shape)),o=e.data.get(t.dataId),r=o.complexTensorInfos.real,i=o.complexTensorInfos.imag,a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")},kD={kernelName:ol,backendName:"cpu",kernelFunc:ID};function Oo(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.imag,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const SD={kernelName:hh,backendName:"cpu",kernelFunc:Oo};function Lo(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=wt(o,t[0].shape)[0],i=t.map(m=>m.shape);pd(i,r);let a=On(t.map(m=>m.shape),r);if(H(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>H(m.shape)>0);if(l.length===1)return Wn({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(w=>no({inputs:{input:w},backend:e})),g=l.map(w=>Oo({inputs:{input:w},backend:e})),x=Lo({inputs:m,backend:e,attrs:{axis:r}}),b=Lo({inputs:g,backend:e,attrs:{axis:r}}),y=We({inputs:{real:x,imag:b},backend:e});return m.forEach(w=>e.disposeIntermediateTensorInfo(w)),g.forEach(w=>e.disposeIntermediateTensorInfo(w)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),y}const c=l.map(m=>{const x=[-1,H(m.shape.slice(r))];return zt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=On(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=q1(u,a,t[0].dtype,h),p=On(l.map(m=>m.shape),r),f=e.makeTensorInfo(p,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const ND={kernelName:rl,backendName:"cpu",kernelFunc:Lo};function Hb(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;rt([o,r],"conv2d");const h=ss(l),d=be(o.shape,r.shape,i,c,a,u,!1,h),p=d.filterHeight,f=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,y=d.dataFormat==="channelsLast",w=new xe(d.outShape,o.dtype),v=lt(o.shape),$=lt(r.shape),N=v[0],T=y?v[1]:v[2],k=y?v[2]:1,S=y?1:v[1],C=w.strides[0],R=y?w.strides[1]:w.strides[2],_=y?w.strides[2]:1,M=y?1:w.strides[1],P=e.data.get(o.dataId).values,B=e.data.get(r.dataId).values,G=w.values;for(let W=0;W<d.batchSize;++W){const j=W*N,X=W*C;for(let K=0;K<d.outHeight;++K){const Y=X+K*R,Z=K*d.strideHeight-b;for(let tt=0;tt<p;++tt){const Q=Z+tt*m;if(Q<0||Q>=d.inHeight)continue;const ot=tt*$[0],at=j+Q*T;for(let dt=0;dt<d.outWidth;++dt){const ht=Y+dt*_,gt=dt*d.strideWidth-x;for(let bt=0;bt<f;++bt){const Rt=gt+bt*g;if(Rt<0||Rt>=d.inWidth)continue;const Lt=ot+bt*$[1],Kt=at+Rt*k;let Pt=Lt;for(let Ft=0;Ft<d.inChannels;++Ft){const Ht=P[Kt+Ft*S];for(let Wt=0;Wt<d.outChannels;++Wt)G[ht+Wt*M]+=Ht*B[Pt+Wt];Pt+=d.outChannels}}}}}}return e.makeTensorInfo(w.shape,w.dtype,G)}const TD={kernelName:il,backendName:"cpu",kernelFunc:Hb};function ED(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;rt([o,r],"conv2dBackpropFilter");const h=ss(l),d=be(o.shape,u,i,1,a,c,!1,h),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new xe(d.filterShape,"float32"),y=d.padInfo.left,w=d.padInfo.top,v=e.data.get(o.dataId).values,$=e.data.get(r.dataId).values,N=new xe(o.shape,o.dtype,v),T=new xe(r.shape,r.dtype,$);for(let k=0;k<m;++k){const S=Math.max(0,Math.ceil((w-k)/p)),C=Math.min(d.outHeight,(d.inHeight+w-k)/p);for(let R=0;R<g;++R){const _=Math.max(0,Math.ceil((y-R)/f)),M=Math.min(d.outWidth,(d.inWidth+y-R)/f);for(let P=0;P<d.inChannels;++P)for(let B=0;B<d.outChannels;++B){let G=0;for(let W=0;W<d.batchSize;++W)for(let j=S;j<C;++j){const X=k+j*p-w;for(let K=_;K<M;++K){const Y=R+K*f-y;x?G+=N.get(W,X,Y,P)*T.get(W,j,K,B):G+=N.get(W,P,X,Y)*T.get(W,B,j,K)}}b.set(G,k,R,P,B)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const RD={kernelName:Yu,backendName:"cpu",kernelFunc:ED};function AD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;rt([o,r],"conv2dBackpropInput");const h=lt(r.shape),d=lt(o.shape);let p=ss(c);const f=be(i,r.shape,a,1,l,u,!1,p),m=new xe(f.inShape,"float32"),g=m.values,x=e.data.get(o.dataId).values,b=e.data.get(r.dataId).values,[y,w,v]=h,{batchSize:$,filterHeight:N,filterWidth:T,inChannels:k,inHeight:S,inWidth:C,outChannels:R,outHeight:_,outWidth:M,strideHeight:P,strideWidth:B}=f;p=f.dataFormat;const G=N-1-f.padInfo.top,W=T-1-f.padInfo.left,j=p==="channelsLast",X=m.strides[0],K=j?m.strides[1]:m.strides[2],Y=j?m.strides[2]:1,Z=j?1:m.strides[1],tt=d[0],Q=j?d[1]:d[2],ot=j?d[2]:1,at=j?1:d[1];for(let dt=0;dt<$;++dt)for(let ht=0;ht<k;++ht)for(let gt=0;gt<S;++gt){const bt=gt-G,Rt=Math.max(0,Math.ceil(bt/P)),Lt=Math.min(_,(N+bt)/P);for(let Kt=0;Kt<C;++Kt){const Pt=Kt-W,Ft=Math.max(0,Math.ceil(Pt/B)),Ht=Math.min(M,(T+Pt)/B);let Wt=0;for(let me=Rt;me<Lt;++me){const rs=me*P-bt;for(let Xe=Ft;Xe<Ht;++Xe){const Fs=Xe*B-Pt,fn=tt*dt+Q*me+ot*Xe,Hn=y*(N-1-rs)+w*(T-1-Fs)+v*ht;for(let is=0;is<R;++is){const as=x[fn+at*is],ls=b[Hn+is];Wt+=as*ls}}}const Gn=X*dt+K*gt+Y*Kt+Z*ht;g[Gn]=Wt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const DD={kernelName:al,backendName:"cpu",kernelFunc:AD};function FD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s;rt([o,r],"conv3d");const c=Ss(o.shape,r.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:f,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,y=g.top,w=new xe(c.outShape,o.dtype),v=e.data.get(o.dataId).values,$=e.data.get(r.dataId).values,N=w.values,T=lt(o.shape),k=lt(r.shape);for(let S=0;S<c.batchSize;++S){const C=S*T[0],R=S*w.strides[0];for(let _=0;_<c.outDepth;++_){const M=R+_*w.strides[1],P=_*c.strideDepth-x;for(let B=0;B<u;++B){const G=P+B*p;if(G<0||G>=c.inDepth)continue;const W=B*k[0],j=C+G*T[1];for(let X=0;X<c.outHeight;++X){const K=M+X*w.strides[2],Y=X*c.strideHeight-y;for(let Z=0;Z<h;++Z){const tt=Y+Z*f;if(tt<0||tt>=c.inHeight)continue;const Q=W+Z*k[1],ot=j+tt*T[2];for(let at=0;at<c.outWidth;++at){const dt=K+at*c.outChannels,ht=at*c.strideWidth-b;for(let gt=0;gt<d;++gt){const bt=ht+gt*m;if(bt<0||bt>=c.inWidth)continue;const Rt=Q+gt*k[2],Lt=ot+bt*c.inChannels;let Kt=Rt;for(let Pt=0;Pt<c.inChannels;++Pt){const Ft=v[Lt+Pt];for(let Ht=0;Ht<c.outChannels;++Ht)N[dt+Ht]+=Ft*$[Kt+Ht];Kt+=c.outChannels}}}}}}}}return e.makeTensorInfo(w.shape,w.dtype,w.values)}const _D={kernelName:ll,backendName:"cpu",kernelFunc:FD};function OD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s;rt([o,r],"conv3dBackpropFilterV2");const c=lt(o.shape),u=lt(r.shape),h=Ss(o.shape,l,i,1,a),d=h.strideDepth,p=h.strideHeight,f=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new xe(h.filterShape,"float32"),y=b.values,[w,v,$,N]=b.strides,T=e.data.get(r.dataId).values,[k,S,C,R]=u,_=e.data.get(o.dataId).values,[M,P,B,G]=c,W=h.padInfo.front,j=h.padInfo.left,X=h.padInfo.top;for(let K=0;K<m;++K){const Y=Math.max(0,Math.ceil((W-K)/d)),Z=Math.min(h.outDepth,(h.inDepth+W-K)/d),tt=K*w;for(let Q=0;Q<g;++Q){const ot=Math.max(0,Math.ceil((X-Q)/p)),at=Math.min(h.outHeight,(h.inHeight+X-Q)/p),dt=Q*v+tt;for(let ht=0;ht<x;++ht){const gt=Math.max(0,Math.ceil((j-ht)/f)),bt=Math.min(h.outWidth,(h.inWidth+j-ht)/f),Rt=ht*$+dt;for(let Lt=0;Lt<h.inChannels;++Lt){const Kt=Lt*N+Rt;for(let Pt=0;Pt<h.outChannels;++Pt){let Ft=0;for(let Ht=0;Ht<h.batchSize;++Ht){const Wt=Ht*M,Gn=Ht*k;for(let me=Y;me<Z;++me){const Xe=(K+me*d-W)*P+Wt,Fs=me*S+Gn;for(let fn=ot;fn<at;++fn){const is=(Q+fn*p-X)*B+Xe,as=fn*C+Fs;for(let ls=gt;ls<bt;++ls){const Nc=(ht+ls*f-j)*G+is,Tc=ls*R+as;Ft+=_[Nc+Lt]*T[Tc+Pt]}}}}y[Kt+Pt]=Ft}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const LD={kernelName:Zu,backendName:"cpu",kernelFunc:OD};function PD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s;rt([o],"conv3dBackpropInputV2");const c=lt(o.shape),u=lt(r.shape),h=Ss(l,r.shape,a,1,i),d=new xe(h.inShape,"float32"),p=d.values,[f,m,g,x]=d.strides,b=e.data.get(o.dataId).values,[y,w,v,$]=c,N=e.data.get(r.dataId).values,[T,k,S,C]=u,{batchSize:R,filterDepth:_,filterHeight:M,filterWidth:P,inChannels:B,inDepth:G,inHeight:W,inWidth:j,outChannels:X,outDepth:K,outHeight:Y,outWidth:Z,strideDepth:tt,strideHeight:Q,strideWidth:ot}=h,at=_-1-h.padInfo.front,dt=M-1-h.padInfo.top,ht=P-1-h.padInfo.left;for(let gt=0;gt<R;++gt)for(let bt=0;bt<B;++bt)for(let Rt=0;Rt<G;++Rt){const Lt=Rt-at,Kt=Math.max(0,Math.ceil(Lt/tt)),Pt=Math.min(K,(_+Lt)/tt);for(let Ft=0;Ft<W;++Ft){const Ht=Ft-dt,Wt=Math.max(0,Math.ceil(Ht/Q)),Gn=Math.min(Y,(M+Ht)/Q);for(let me=0;me<j;++me){const rs=me-ht,Xe=Math.max(0,Math.ceil(rs/ot)),Fs=Math.min(Z,(P+rs)/ot);let fn=0;for(let Hn=Kt;Hn<Pt;++Hn){const is=Hn*tt-Lt;for(let as=Wt;as<Gn;++as){const ls=as*Q-Ht;for(let nr=Xe;nr<Fs;++nr){const Nc=nr*ot-rs,Tc=y*gt+w*Hn+v*as+$*nr,Gy=T*(_-1-is)+k*(M-1-ls)+S*(P-1-Nc)+C*bt;for(let qi=0;qi<X;++qi){const Hy=b[Tc+qi],jy=N[Gy+qi];fn+=Hy*jy}}}}p[f*gt+m*Rt+g*Ft+x*me+bt]=fn}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const MD={kernelName:Ju,backendName:"cpu",kernelFunc:PD};const BD=Dt(Wr,n=>Math.cos(n)),zD={kernelName:Wr,backendName:"cpu",kernelFunc:BD};const VD=Dt(Ur,n=>Math.cosh(n)),WD={kernelName:Ur,backendName:"cpu",kernelFunc:VD};function UD(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,p]=o.shape,f=r.shape[0],[m,g]=a,x=yt([f,m,g,p],"float32"),b=e.data.get(r.dataId).values,y=e.data.get(i.dataId).values,w=e.data.get(o.dataId).values,v=lt(o.shape),$=lt(x.shape);for(let N=0;N<f;N++){const T=N*4,k=b[T],S=b[T+1],C=b[T+2],R=b[T+3],_=y[N];if(_>=u)continue;const M=m>1?(C-k)*(h-1)/(m-1):0,P=g>1?(R-S)*(d-1)/(g-1):0;for(let B=0;B<m;B++){const G=m>1?k*(h-1)+B*M:.5*(k+C)*(h-1);if(G<0||G>h-1){for(let W=0;W<g;W++)for(let j=0;j<p;j++){const X=j+W*$[2]+B*$[1]+N*$[0];x.values[X]=c}continue}if(l==="bilinear"){const W=Math.floor(G),j=Math.ceil(G),X=G-W;for(let K=0;K<g;K++){const Y=g>1?S*(d-1)+K*P:.5*(S+R)*(d-1);if(Y<0||Y>d-1){for(let ot=0;ot<p;ot++){const at=ot+K*$[2]+B*$[1]+N*$[0];x.values[at]=c}continue}const Z=Math.floor(Y),tt=Math.ceil(Y),Q=Y-Z;for(let ot=0;ot<p;ot++){let at=ot+Z*v[2]+W*v[1]+_*v[0];const dt=w[at];at=ot+tt*v[2]+W*v[1]+_*v[0];const ht=w[at];at=ot+Z*v[2]+j*v[1]+_*v[0];const gt=w[at];at=ot+tt*v[2]+j*v[1]+_*v[0];const bt=w[at],Rt=dt+(ht-dt)*Q,Lt=gt+(bt-gt)*Q;at=ot+K*$[2]+B*$[1]+N*$[0],x.values[at]=Rt+(Lt-Rt)*X}}}else for(let W=0;W<g;++W){const j=g>1?S*(d-1)+W*P:.5*(S+R)*(d-1);if(j<0||j>d-1){for(let Y=0;Y<p;Y++){const Z=Y+W*$[2]+B*$[1]+N*$[0];x.values[Z]=c}continue}const X=Math.round(j),K=Math.round(G);for(let Y=0;Y<p;Y++){const Z=Y+X*v[2]+K*v[1]+_*v[0],tt=Y+W*$[2]+B*$[1]+N*$[0];x.values[tt]=w[Z]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const GD={kernelName:th,backendName:"cpu",kernelFunc:UD};function HD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;rt(o,"cumprod");const l=Xt([r],o.shape.length);let c=o;l!=null&&(c=Be({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=Qt(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Ge(c.dtype,"int32"),d=Bu(H(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const y=m(x,b);if(b===0)d[y]=i?1:p[y];else{const w=m(x,b-1);d[y]=i?p[w]*d[w]:p[y]*d[w]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ns(l),b=Be({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const jD={kernelName:Qu,backendName:"cpu",kernelFunc:HD};function XD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;rt(o,"cumsum");const l=Xt([r],o.shape.length);let c=o;l!=null&&(c=Be({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=Qt(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Ge(c.dtype,"int32"),d=Ce(H(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const y=m(x,b);if(b===0)d[y]=i?0:p[y];else{const w=m(x,b-1);d[y]=i?p[w]+d[w]:p[y]+d[w]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ns(l),b=Be({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const KD={kernelName:cl,backendName:"cpu",kernelFunc:XD};function qD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=ep(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=j1(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const YD={kernelName:eh,backendName:"cpu",kernelFunc:qD};function ZD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s;I(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=o.shape[0],l=o.shape[1],c=o.shape[2],u=o.shape[3],h=l*r,d=c*r,p=u/(r*r),f=e.data.get(o.dataId).values,m=new Float32Array(a*h*d*p);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const y=Math.floor(b/r),w=b%r;for(let v=0;v<d;++v){const $=Math.floor(v/r),N=v%r,T=(w*r+N)*p;for(let k=0;k<p;++k){const C=k+T+u*($+c*(y+l*x));m[g++]=f[C]}}}return e.makeTensorInfo([a,h,d,p],o.dtype,m)}const JD={kernelName:nh,backendName:"cpu",kernelFunc:ZD};function jb(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;rt([o,r],"depthwiseConv2DNative");const u=lt(o.shape),h=lt(r.shape);let d=l;d==null&&(d=[1,1]),I(Ie(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const p=be(o.shape,r.shape,i,d,a,c,!0),{filterHeight:f,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=p,y=b.left,w=b.top,v=p.outChannels/p.inChannels,$=new xe(p.outShape,o.dtype),N=e.data.get(o.dataId).values,T=e.data.get(r.dataId).values,k=$.values;for(let S=0;S<p.batchSize;++S){const C=S*u[0],R=S*$.strides[0];for(let _=0;_<p.outHeight;++_){const M=R+_*$.strides[1],P=_*p.strideHeight-w;for(let B=0;B<f;++B){const G=P+B*g;if(G<0||G>=p.inHeight)continue;const W=B*h[0],j=C+G*u[1];for(let X=0;X<p.outWidth;++X){const K=M+X*$.strides[2],Y=X*p.strideWidth-y;for(let Z=0;Z<m;++Z){const tt=Y+Z*x;if(tt<0||tt>=p.inWidth)continue;const Q=W+Z*h[1],ot=j+tt*p.inChannels;let at=K,dt=Q;for(let ht=0;ht<p.inChannels;++ht){const gt=N[ot+ht];for(let bt=0;bt<v;++bt)k[at+bt]+=gt*T[dt+bt];at+=v,dt+=v}}}}}}return e.makeTensorInfo($.shape,$.dtype,$.values)}const QD={kernelName:ul,backendName:"cpu",kernelFunc:jb};function t3(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;rt([o,r],"depthwiseConv2dNativeBackpropFilter");const h=be(o.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:p,filterHeight:f,filterWidth:m}=h,g=new xe(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,y=h.outChannels/h.inChannels,w=e.data.get(o.dataId).values,v=new xe(o.shape,o.dtype,w),$=e.data.get(r.dataId).values,N=new xe(r.shape,r.dtype,$);for(let T=0;T<f;++T){const k=Math.max(0,Math.ceil((b-T)/d)),S=Math.min(h.outHeight,(h.inHeight+b-T)/d);for(let C=0;C<m;++C){const R=Math.max(0,Math.ceil((x-C)/p)),_=Math.min(h.outWidth,(h.inWidth+x-C)/p);for(let M=0;M<h.outChannels;++M){const P=Math.trunc(M/y),B=M%y;let G=0;for(let W=0;W<h.batchSize;++W)for(let j=k;j<S;++j){const X=T+j*d-b;for(let K=R;K<_;++K){const Y=C+K*p-x;G+=v.get(W,X,Y,P)*N.get(W,j,K,M)}}g.set(G,T,C,P,B)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const e3={kernelName:sh,backendName:"cpu",kernelFunc:t3};function n3(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;rt([o,r],"depthwiseConv2DNativeBackpropInput");const h=lt(o.shape),d=lt(r.shape),p=be(u,r.shape,i,a,l,c,!0),f=new xe(p.inShape,"float32"),m=f.values,[g,x,b]=f.strides,y=e.data.get(o.dataId).values,[w,v,$]=h,N=e.data.get(r.dataId).values,[T,k,S]=d,{batchSize:C,filterHeight:R,filterWidth:_,inChannels:M,inHeight:P,inWidth:B,outChannels:G,outHeight:W,outWidth:j,strideHeight:X,strideWidth:K}=p,Y=R-1-p.padInfo.top,Z=_-1-p.padInfo.left,tt=G/M;for(let Q=0;Q<C;++Q)for(let ot=0;ot<M;++ot)for(let at=0;at<P;++at){const dt=at-Y,ht=Math.max(0,Math.ceil(dt/X)),gt=Math.min(W,(R+dt)/X);for(let bt=0;bt<B;++bt){const Rt=bt-Z,Lt=Math.max(0,Math.ceil(Rt/K)),Kt=Math.min(j,(_+Rt)/K);let Pt=0;for(let Ft=ht;Ft<gt;++Ft){const Ht=Ft*X-dt;for(let Wt=Lt;Wt<Kt;++Wt){const Gn=Wt*K-Rt,me=w*Q+v*Ft+$*Wt,rs=T*(R-1-Ht)+k*(_-1-Gn)+S*ot;for(let Xe=0;Xe<tt;++Xe){const Fs=ot*tt+Xe,fn=y[me+Fs],Hn=N[rs+Xe];Pt+=fn*Hn}}}m[g*Q+x*at+b*bt+ot]=Pt}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}const s3={kernelName:oh,backendName:"cpu",kernelFunc:n3};function o3(n){const{inputs:t,backend:e}=n,{x:s}=t,o=H(s.shape),r=e.data.get(s.dataId).values,i=yt([o,o],s.dtype),a=i.values;for(let c=0;c<r.length;c++)a[c*o+c]=r[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const r3={kernelName:xm,backendName:"cpu",kernelFunc:o3};const i3={kernelName:hl,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o}=n,{strides:r,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(o.dataId).values,d=o.shape.length,{batchSize:p,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:y,strideHeight:w,strideWidth:v,filterHeight:$,filterWidth:N,dilationHeight:T,dilationWidth:k,outShape:S}=Ni(s.shape,o.shape,r,i,"NHWC",a),C=H(S),R=S.length,_=Yt(s.dtype,C);for(let P=0;P<p;++P)for(let B=0;B<x;++B){const G=B*w-y.top;for(let W=0;W<b;++W){const j=W*v-y.left;for(let X=0;X<g;++X){let K=Number.MIN_SAFE_INTEGER;for(let Z=0;Z<$;++Z){const tt=G+Z*T;if(tt>=0&&tt<f)for(let Q=0;Q<N;++Q){const ot=j+Q*k;if(ot>=0&&ot<m){const at=Fn([P,tt,ot,X],u,lt(s.shape)),dt=Fn([Z,Q,X],d,lt(o.shape)),ht=c[at]+h[dt];ht>K&&(K=ht)}}}const Y=Fn([P,B,W,X],R,lt(S));_[Y]=K}}}return{dataId:l.write(ro(_,s.dtype),S,s.dtype),shape:S,dtype:s.dtype}}};const a3={kernelName:ou,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=wn(s.shape,c.data.get(s.dataId).values),h=wn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:y,strideWidth:w,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:T,outShape:k}=Ni(s.shape,o.shape,i,a,"NHWC",l);I(r.rank===k.length,()=>`Error in ${ou}, dy must have the same rank as output ${k.length}, but got ${r.rank}`);const S=wn(k,c.data.get(r.dataId).values),C=pm(o.shape,o.dtype);for(let _=0;_<d;++_)for(let M=0;M<g;++M){const P=M*y-b.top;for(let B=0;B<x;++B){const G=B*w-b.left;for(let W=0;W<m;++W){let j=Number.MIN_SAFE_INTEGER,X=0,K=0;for(let Y=0;Y<v;++Y){const Z=P+Y*N;if(Z>=0&&Z<p)for(let tt=0;tt<$;++tt){const Q=G+tt*T;if(Q>=0&&Q<f){const ot=u[_][Z][Q][W]+h[Y][tt][W];ot>j&&(j=ot,X=Y,K=tt)}}}C[X][K][W]+=S[_][M][B][W]}}}return{dataId:c.write(ro(C,s.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};const l3={kernelName:su,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=wn(s.shape,c.data.get(s.dataId).values),h=wn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:y,strideWidth:w,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:T,outShape:k}=Ni(s.shape,o.shape,i,a,"NHWC",l);I(r.rank===k.length,()=>`Error in ${su}, dy must have the same rank as output ${k.length}, but got ${r.rank}`);const S=wn(k,c.data.get(r.dataId).values),C=pm(s.shape,s.dtype);for(let _=0;_<d;++_)for(let M=0;M<g;++M){const P=M*y-b.top;for(let B=0;B<x;++B){const G=B*w-b.left;for(let W=0;W<m;++W){let j=Number.MIN_SAFE_INTEGER,X=P<0?0:P,K=G<0?0:G;for(let Y=0;Y<v;++Y){const Z=P+Y*N;if(Z>=0&&Z<p)for(let tt=0;tt<$;++tt){const Q=G+tt*T;if(Q>=0&&Q<f){const ot=u[_][Z][Q][W]+h[Y][tt][W];ot>j&&(j=ot,X=Z,K=Q)}}}C[_][X][K][W]+=S[_][M][B][W]}}}return{dataId:c.write(ro(C,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function c3(n){const{inputs:t,backend:e,attrs:s}=n,{image:o}=t,{canvas:r,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=r.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,p]=o.shape.slice(0,2),f=o.shape.length===2?1:o.shape[2],m=e.data.get(o.dataId).values,g=o.dtype==="float32"?255:1,x=new Uint8ClampedArray(p*d*4);for(let y=0;y<d*p;++y){const w=[0,0,0,255*c];for(let $=0;$<f;$++){const N=m[y*f+$];if(o.dtype==="float32"){if(N<0||N>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${N}.`)}else if(o.dtype==="int32"&&(N<0||N>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${N}.`);f===1?(w[0]=N*g,w[1]=N*g,w[2]=N*g):w[$]=N*g}const v=y*4;x[v+0]=Math.round(w[0]),x[v+1]=Math.round(w[1]),x[v+2]=Math.round(w[2]),x[v+3]=Math.round(w[3])}r.width=p,r.height=d;const b=new ImageData(x,p,d);return h.putImageData(b,0,0),o}const u3={kernelName:zw,backendName:"cpu",kernelFunc:c3};function Ui(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"sum");let a;o.dtype==="bool"?a=$s({inputs:{x:o},backend:e,attrs:{dtype:"int32"}}):a=Wn({inputs:{x:o},backend:e});const l=a.shape.length,c=wt(r,a.shape),u=Xt(c,l);let h=c,d=a;u!=null&&(d=Be({inputs:{x:a},backend:e,attrs:{perm:u}}),h=Qt(h.length,l)),ye("sum",h,d.shape.length);const[p,f]=fe(d.shape,h),m=Ge(d.dtype,"int32");let g=Va(e,p,m);const x=H(f),b=e.data.get(g.dataId).values,y=e.data.get(d.dataId).values;for(let w=0;w<b.length;++w){const v=w*x;let $=0;for(let N=0;N<x;++N)$+=y[v+N];b[w]=$}if(i){const w=se(g.shape,c),v=g;g=zt({inputs:{x:g},backend:e,attrs:{shape:w}}),e.disposeIntermediateTensorInfo(v)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const h3={kernelName:Gl,backendName:"cpu",kernelFunc:Ui};function d3(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=kd(o,r.length);Nd(i.length,l,r);const{path:c,steps:u}=Td(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Sd(p,l[g]);let y;Ed(x)?y=r[g]:(y=Be({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(y));const w=y.shape.slice();for(let v=0;v<b.length;++v)w.splice(b[v],0,1);Et(y.shape,w)||(y=zt({inputs:{x:y},backend:e,attrs:{shape:w}}),f.push(y)),d===null?d=y:(d=vc({inputs:{a:y,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Ui({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const p3={kernelName:rh,backendName:"cpu",kernelFunc:d3};function f3(n){const{inputs:t,backend:e}=n,{dy:s,y:o}=t;rt([s,o],"eluGrad");const r=new Float32Array(H(o.shape)),i=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?r[l]=a[l]:r[l]=a[l]*(c+1)}return e.makeTensorInfo(o.shape,"float32",r)}const m3={kernelName:ih,backendName:"cpu",kernelFunc:f3};const g3=bd,x3=yd,b3=wd,y3=vd,w3=Cd,v3=$d,C3=Dt(jr,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+g3*e);return t*(1-((((v3*s+w3)*s+y3)*s+b3)*s+x3)*s*Math.exp(-e*e))}),$3={kernelName:jr,backendName:"cpu",kernelFunc:C3};function Ga(n){const{inputs:t,backend:e,attrs:s}=n,{input:o}=t,{dim:r}=s,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(I(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),zt({inputs:{x:o},backend:e,attrs:{shape:a}})}const I3={kernelName:pl,backendName:"cpu",kernelFunc:Ga};const k3=ee((n,t)=>n/t),ap=ue(Gr,k3),Ru={kernelName:Gr,backendName:"cpu",kernelFunc:ap};function Xb(n,t,e){const s=n.shape,o=s[0],r=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[o,r],u=H(c),h=ve("float32",u),d=ve("float32",u);for(let g=0;g<o;g++){const x=so({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,r]}}),b=so({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,r]}}),y=We({inputs:{real:x,imag:b},backend:e}),{real:w,imag:v}=S3(y,t,e),$=Qn(w,v);for(let N=0;N<r;N++){const T=Id($,N);h[g*r+N]=T.real,d[g*r+N]=T.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(y)}const p=e.makeTensorInfo(c,"float32",h),f=e.makeTensorInfo(c,"float32",d),m=We({inputs:{real:p,imag:f},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),m}function S3(n,t,e){const s=H(n.shape),o=e.data.get(n.dataId),r=e.data.get(o.complexTensorInfos.real.dataId).values,i=e.data.get(o.complexTensorInfos.imag.dataId).values;if(N3(s)){const a=Au(r,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",ks(s,"float32")),d=Wn({inputs:{x:h},backend:e}),p=Ru.kernelFunc({inputs:{a:c,b:h},backend:e}),f=Ru.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(p.dataId).values,g=e.data.get(f.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),{real:m,imag:g}}return a}else{const a=Qn(r,i),l=T3(a,s,t);return i0(l)}}function N3(n){return(n&n-1)===0}function Au(n,t,e,s,o){if(e===1)return{real:n,imag:t};const r=Qn(n,t),i=e/2,a=a0(r),l=a.real,c=a.imag,u=[l.length],h=o.makeTensorInfo(u,"float32",l),d=o.makeTensorInfo(u,"float32",c),p=We({inputs:{real:h,imag:d},backend:o}),f=l0(r),m=f.real,g=f.imag,x=[m.length],b=o.makeTensorInfo(x,"float32",m),y=o.makeTensorInfo(x,"float32",g),w=We({inputs:{real:b,imag:y},backend:o}),v=Au(l,c,i,s,o),$=v.real,N=v.imag,T=[$.length],k=o.makeTensorInfo(T,"float32",$),S=o.makeTensorInfo(T,"float32",N),C=We({inputs:{real:k,imag:S},backend:o}),R=Au(m,g,i,s,o),_=R.real,M=R.imag,P=[_.length],B=o.makeTensorInfo(P,"float32",_),G=o.makeTensorInfo(P,"float32",M),W=We({inputs:{real:B,imag:G},backend:o}),j=u0(e,s),X=[j.real.length],K=o.makeTensorInfo(X,"float32",j.real),Y=o.makeTensorInfo(X,"float32",j.imag),Z=We({inputs:{real:K,imag:Y},backend:o}),tt=vc({inputs:{a:Z,b:W},backend:o}),Q=_o({inputs:{a:C,b:tt},backend:o}),ot=rp({inputs:{a:C,b:tt},backend:o}),at=no({inputs:{input:Q},backend:o}),dt=no({inputs:{input:ot},backend:o}),ht=Oo({inputs:{input:Q},backend:o}),gt=Oo({inputs:{input:ot},backend:o}),bt=Lo({inputs:[at,dt],backend:o,attrs:{axis:0}}),Rt=Lo({inputs:[ht,gt],backend:o,attrs:{axis:0}}),Lt=o.data.get(bt.dataId).values,Kt=o.data.get(Rt.dataId).values;return o.disposeIntermediateTensorInfo(h),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(b),o.disposeIntermediateTensorInfo(y),o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(k),o.disposeIntermediateTensorInfo(S),o.disposeIntermediateTensorInfo(C),o.disposeIntermediateTensorInfo(B),o.disposeIntermediateTensorInfo(G),o.disposeIntermediateTensorInfo(W),o.disposeIntermediateTensorInfo(K),o.disposeIntermediateTensorInfo(Y),o.disposeIntermediateTensorInfo(Z),o.disposeIntermediateTensorInfo(tt),o.disposeIntermediateTensorInfo(Q),o.disposeIntermediateTensorInfo(ot),o.disposeIntermediateTensorInfo(at),o.disposeIntermediateTensorInfo(ht),o.disposeIntermediateTensorInfo(dt),o.disposeIntermediateTensorInfo(gt),o.disposeIntermediateTensorInfo(bt),o.disposeIntermediateTensorInfo(Rt),{real:Lt,imag:Kt}}function T3(n,t,e){const s=new Float32Array(t*2);for(let o=0;o<t;o++){let r=0,i=0;for(let a=0;a<t;a++){const l=h0(o*a,t,e),c=Id(n,a);r+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(r/=t,i/=t),c0(s,r,i,o)}return s}function E3(n){const{inputs:t,backend:e}=n,{input:s}=t,o=H(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=zt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=Xb(a,!1,e),c=zt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const R3={kernelName:ah,backendName:"cpu",kernelFunc:E3};function lp(n){const{backend:t,attrs:e}=n,{shape:s,value:o,dtype:r}=e,i=r||Bo(o),a=Yt(i,H(s));return D3(a,o,i),t.makeTensorInfo(s,i,a)}const A3={kernelName:lh,backendName:"cpu",kernelFunc:lp};function D3(n,t,e){n.fill(t)}const F3={kernelName:ch,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,o=e,r=ve(s.dtype,H(s.shape)),[i,a,l,c]=s.shape,u=o.data.get(s.dataId).values;for(let d=0;d<i;d++){const p=d*l*a*c;for(let f=0;f<a;f++){const m=f*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const y=Math.round(l-g-1),w=p+m+x+b;let v=u[w];if(y>=0&&y<l){const $=y*c,N=p+m+$+b;v=u[N]}r[w]=v}}}}return{dataId:o.write(r,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function _3(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=Hb({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=zt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=_o({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=_o({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(p){const g=m;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=zt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=Ua(e,m,p,x,f),e.disposeIntermediateTensorInfo(x)}else m=Ua(e,m,p,a,f);e.disposeIntermediateTensorInfo(g)}return m}const O3={kernelName:Ia,backendName:"cpu",kernelFunc:_3};function L3(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=jb({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=_o({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(p){const g=m;m=Ua(e,m,p,a,f),e.disposeIntermediateTensorInfo(g)}return m}const P3={kernelName:Lm,backendName:"cpu",kernelFunc:L3};function M3(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=H(s.shape),i=o.shape,a=i[i.length-1],[l,c,u,h]=ad(s,o);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(o.dataId).values,p=e.bufferSync(s),f=sb(d,p,s.dtype,c,a,u,h,s.shape,r);return e.makeTensorInfo(l,s.dtype,f.values)}const B3={kernelName:bm,backendName:"cpu",kernelFunc:M3};function z3(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s;rt([o,r],"gatherV2");const l=wt(i,o.shape)[0],c=e.data.get(r.dataId).values,u=o.shape[l];for(let w=0;w<c.length;++w){const v=c[w];I(v<=u-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=H(r.shape),p=Ad(o,r,l,h),f=zt({inputs:{x:o},backend:e,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),m=zt({inputs:{x:r},backend:e,attrs:{shape:[p.batchSize,d/p.batchSize]}}),g=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],x=e.bufferSync(m),b=e.bufferSync(f),y=ob(b,x,g);return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(p.outputShape,y.dtype,y.values)}const V3={kernelName:ml,backendName:"cpu",kernelFunc:z3};function W3(n){const{inputs:t,backend:e}=n,{input:s}=t,o=H(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=zt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=Xb(a,!0,e),c=zt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const U3={kernelName:uh,backendName:"cpu",kernelFunc:W3};const G3=Dt(Qr,n=>Number.isFinite(n)?1:0,"bool"),H3={kernelName:Qr,backendName:"cpu",kernelFunc:G3};const j3=Dt(ti,n=>Math.abs(n)===1/0?1:0,"bool"),X3={kernelName:ti,backendName:"cpu",kernelFunc:j3};const K3=Dt(ei,n=>Number.isNaN(n)?1:0,"bool"),q3={kernelName:ei,backendName:"cpu",kernelFunc:K3};function Y3(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=cb(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const Z3={kernelName:ym,backendName:"cpu",kernelFunc:Y3};const J3=Dt(si,n=>Math.log1p(n)),Q3={kernelName:si,backendName:"cpu",kernelFunc:J3};const tF=ee((n,t)=>n&&t),eF=ue(wl,tF,null,"bool"),nF={kernelName:wl,backendName:"cpu",kernelFunc:eF};const sF=Dt(vl,n=>n?0:1,"bool"),oF={kernelName:vl,backendName:"cpu",kernelFunc:sF};const rF=ee((n,t)=>n||t),iF=ue(Cl,rF,null,"bool"),aF={kernelName:Cl,backendName:"cpu",kernelFunc:iF};function lF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s;rt(o,"LRN");const c=o.shape[3],u=c-1,h=e.data.get(o.dataId).values,d=H(o.shape),p=new Float32Array(d);function f(m){const g=m%c;let x=m-g+Math.max(0,g-r);const b=m-g+Math.min(g+r,u);let y=0;for(;x<=b;x++){const w=h[x];y+=w*w}return y}for(let m=0;m<d;m++){const g=f(m),x=h[m]*Math.pow(i+a*g,-l);p[m]=x}return e.makeTensorInfo(o.shape,o.dtype,p)}const cF={kernelName:$l,backendName:"cpu",kernelFunc:lF};function uF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;rt(i,"LRNGrad");const h=H(i.shape),d=i.shape[3],p=e.data.get(i.dataId).values,f=e.data.get(o.dataId).values,m=e.data.get(r.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const y=b%d,w=b-y+Math.max(0,y-a),v=b-y+Math.min(d,y+a+1);let $=0;for(let N=w;N<v;N++)$+=Math.pow(f[N],2);$=c*$+l;for(let N=w;N<v;N++){let T=-2*c*u*f[N]*m[b]/$;b===N&&(T+=Math.pow($,-u)),T*=p[b],g[N]+=T}}return e.makeTensorInfo(i.shape,o.dtype,g)}const hF={kernelName:dh,backendName:"cpu",kernelFunc:uF};function Kb(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=e;let l=o.shape;const c=l.length,u=wt(r,l);let h=u;const d=Xt(h,c);let p=a.data.get(o.dataId).values;if(d!=null){const w=new Array(c);for(let v=0;v<w.length;v++)w[v]=l[d[v]];p=sp(p,l,o.dtype,d,w),h=Qt(h.length,c),l=w}rt(o,"max"),ye("max",h,c);const[f,m]=fe(l,h),g=H(m),x=hb(p,g,f,o.dtype),b=a.write(x,f,o.dtype);let y=f;return i&&(y=se(f,u)),{dataId:b,shape:y,dtype:o.dtype}}const dF={kernelName:Il,backendName:"cpu",kernelFunc:Kb};function pF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;rt(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(Ie(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=hn(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))h=Wn({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=lt(o.shape),f=ip(d,o.shape,o.dtype,p,u,"max");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const fF={kernelName:kl,backendName:"cpu",kernelFunc:pF};function mF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;rt(o,"maxPool3d");const u=ns(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=Gb(h,o.shape,o.dtype,lt(o.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const gF={kernelName:Sl,backendName:"cpu",kernelFunc:mF};function xF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;rt([o,r],"maxPool3DGrad");const u=ns(r.shape,i,a,1,l,c),h=e.bufferSync(r),d=rD(h,u),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,y=u.effectiveFilterDepth,w=u.effectiveFilterHeight,v=u.effectiveFilterWidth,$=y-1-u.padInfo.front,N=v-1-u.padInfo.left,T=w-1-u.padInfo.top,k=yt(r.shape,"float32"),S=e.bufferSync(o);for(let C=0;C<u.batchSize;++C)for(let R=0;R<u.inChannels;++R)for(let _=0;_<u.inDepth;++_)for(let M=0;M<u.inHeight;++M)for(let P=0;P<u.inWidth;++P){const B=_-$,G=M-T,W=P-N;let j=0;for(let X=0;X<y;X+=g){const K=(B+X)/p;if(!(K<0||K>=u.outDepth||Math.floor(K)!==K))for(let Y=0;Y<w;Y+=x){const Z=(G+Y)/f;if(!(Z<0||Z>=u.outHeight||Math.floor(Z)!==Z))for(let tt=0;tt<v;tt+=b){const Q=(W+tt)/m;if(Q<0||Q>=u.outWidth||Math.floor(Q)!==Q)continue;const ot=y*w*v-1-d.get(C,K,Z,Q,R),at=X*w*v+Y*v+tt,dt=ot===at?1:0;if(dt===0)continue;const ht=S.get(C,K,Z,Q,R);j+=ht*dt}}}k.set(j,C,_,M,P,R)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const bF={kernelName:fh,backendName:"cpu",kernelFunc:xF};function yF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;rt([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=hn(a.shape,l,c,1,u,h),p=e.data.get(a.dataId).values,f=yt(d.outShape,a.dtype,Ub(p,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,y=d.effectiveFilterHeight,w=d.effectiveFilterWidth,v=w-1-d.padInfo.left,$=y-1-d.padInfo.top,N=yt(a.shape,"float32"),T=e.data.get(o.dataId).values,k=yt(o.shape,"float32",T);for(let S=0;S<d.batchSize;++S)for(let C=0;C<d.inChannels;++C)for(let R=0;R<d.inHeight;++R)for(let _=0;_<d.inWidth;++_){const M=R-$,P=_-v;let B=0;for(let G=0;G<y;G+=x){const W=(M+G)/m;if(!(W<0||W>=d.outHeight||Math.floor(W)!==W))for(let j=0;j<w;j+=b){const X=(P+j)/g;if(X<0||X>=d.outWidth||Math.floor(X)!==X)continue;const K=y*w-1-f.get(S,W,X,C),Y=G*w+j,Z=K===Y?1:0;if(Z===0)continue;const tt=k.get(S,W,X,C);B+=tt*Z}}N.set(B,S,R,_,C)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const wF={kernelName:ph,backendName:"cpu",kernelFunc:yF};function vF(n,t,e,s,o){const r=lt(t),i=ip(n,t,e,r,o,"max"),a=Ub(n,t,e,o,!0,s);return[i.values,a.values]}const CF={kernelName:wm,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;rt(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=hn(s.shape,o,r,[1,1],i),[h,d]=vF(c,s.shape,s.dtype,a,u),p=l.write(h,u.outShape,s.dtype),f=l.write(d,u.outShape,s.dtype);return[{dataId:p,shape:u.outShape,dtype:s.dtype},{dataId:f,shape:u.outShape,dtype:"int32"}]}};function $F(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=wt(r,o.shape),c=fe(o.shape,a)[1],u=H(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const p=$s({inputs:{x:o},backend:e,attrs:{dtype:"float32"}});h.push(p);const f=ap({inputs:{a:p,b:d},backend:e});h.push(f);const m=Ui({inputs:{x:f},backend:e,attrs:{axis:r,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const IF={kernelName:Nl,backendName:"cpu",kernelFunc:$F};function kF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"min");const a=wt(r,o.shape);let l=a;const c=Xt(l,o.shape.length);let u=o;c!=null&&(u=Be({inputs:{x:o},backend:e,attrs:{perm:c}}),l=Qt(l.length,o.shape.length)),ye("min",l,u.shape.length);const[h,d]=fe(u.shape,l),p=H(d),f=Ce(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let y=m[b];for(let w=0;w<p;++w){const v=m[b+w];(Number.isNaN(v)||v<y)&&(y=v)}f[x]=y}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=se(h,a),b=zt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const SF={kernelName:Tl,backendName:"cpu",kernelFunc:kF};function NF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,mode:i}=s;rt(o,"mirrorPad");const a=r.map((y,w)=>y[0]+o.shape[w]+y[1]),l=r.map(y=>y[0]),c=r.map((y,w)=>y[0]+o.shape[w]),u=i==="reflect"?0:1,h=e.data.get(o.dataId).values,d=o.shape.length,p=lt(o.shape),f=H(a),m=a.length,g=lt(a),x=ve(o.dtype,f);for(let y=0;y<f;y++){let w=zo(y,m,g);for(let $=0;$<m;$++)w[$]<l[$]?w[$]=l[$]*2-w[$]-u:w[$]>=c[$]&&(w[$]=(c[$]-1)*2-w[$]+u);w=w.map(($,N)=>$-l[N]);const v=Fn(w,d,p);x[y]=h[v]}return{dataId:e.write(x,a,o.dtype),shape:a,dtype:o.dtype}}const TF={kernelName:El,backendName:"cpu",kernelFunc:NF};const EF=ee(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),RF=ue(ii,EF),AF={kernelName:ii,backendName:"cpu",kernelFunc:RF};function qb(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=o.shape.length;let a=r;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=wt([a],o.shape),c=Kb({inputs:{x:o},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=se(c.shape,l),h=zt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=rp({inputs:{a:o,b:h},backend:e}),p=Q1({inputs:{x:d},backend:e}),f=Ui({inputs:{x:p},backend:e,attrs:{axis:l,keepDims:!1}}),m=zt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=ap({inputs:{a:p,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const DF={kernelName:Xl,backendName:"cpu",kernelFunc:qb};function FF(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s;rt(o,"multinomial");const l=a?o:qb({inputs:{logits:o},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,r],p=Ce(H(d),"int32");for(let f=0;f<c;++f){const m=f*u,g=new Float32Array(u-1);g[0]=h[m];for(let y=1;y<g.length;++y)g[y]=g[y-1]+h[m+y];const x=Xh.alea(i.toString()),b=f*r;for(let y=0;y<r;++y){const w=x();p[b+y]=g.length;for(let v=0;v<g.length;v++)if(w<g[v]){p[b+y]=v;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",p)}const _F={kernelName:vm,backendName:"cpu",kernelFunc:FF};const OF=nd;function LF(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;rt(o,"NonMaxSuppression");const c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,{selectedIndices:h}=OF(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const PF={kernelName:mh,backendName:"cpu",kernelFunc:LF};const MF=sd;function BF(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;rt(o,"NonMaxSuppressionPadded");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,{selectedIndices:d,validOutputs:p}=MF(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const zF={kernelName:gh,backendName:"cpu",kernelFunc:BF};const VF=od;function WF(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;rt(o,"NonMaxSuppressionWithScore");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=VF(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const UF={kernelName:xh,backendName:"cpu",kernelFunc:WF};function GF(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s;rt(o,"oneHot");const c=H(o.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(o.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...o.shape,i],r,u)}const HF={kernelName:Fl,backendName:"cpu",kernelFunc:GF};function Ha(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const o=no({inputs:{input:s},backend:e}),r=Ha({inputs:{x:o},backend:e}),i=Oo({inputs:{input:s},backend:e}),a=Ha({inputs:{x:i},backend:e}),l=We({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return lp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const jF={kernelName:Yl,backendName:"cpu",kernelFunc:Ha};function Yb(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const o=no({inputs:{input:s},backend:e}),r=Yb({inputs:{x:o},backend:e}),i=Oo({inputs:{input:s},backend:e}),a=Ha({inputs:{x:i},backend:e}),l=We({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return lp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const XF={kernelName:Dl,backendName:"cpu",kernelFunc:Yb};function Zb(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Ga({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{Mu(r,u.shape,"All tensors passed to stack must have matching shapes"),I(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Ga({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=Lo({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const KF={kernelName:_l,backendName:"cpu",kernelFunc:Zb};function qF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;rt(o,"pad");const a=r.map((b,y)=>b[0]+o.shape[y]+b[1]),l=r.map(b=>b[0]),c=e.data.get(o.dataId).values,u=H(o.shape),h=o.shape.length,d=lt(o.shape),p=H(a),f=a.length,m=lt(a),g=ve(o.dtype,p);i!==0&&g.fill(i);for(let b=0;b<u;b++){const w=zo(b,h,d).map(($,N)=>$+l[N]),v=Fn(w,f,m);g[v]=c[b]}return{dataId:e.write(g,a,o.dtype),shape:a,dtype:o.dtype}}const Jb={kernelName:Ol,backendName:"cpu",kernelFunc:qF};const YF=ee((n,t)=>Math.pow(n,t)),ZF=ue(li,YF),JF={kernelName:li,backendName:"cpu",kernelFunc:ZF};function QF(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.data.get(x.dataId).values),c=o.map(x=>x.shape),u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,[d,p,f]=xb(l,c,u,r.shape,r.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const t_={kernelName:Cm,backendName:"cpu",kernelFunc:QF};function e_(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=bb(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const n_={kernelName:$m,backendName:"cpu",kernelFunc:e_};function s_(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),p=a.map(g=>g.shape),[f,m]=yb(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const o_={kernelName:Im,backendName:"cpu",kernelFunc:s_};function r_(n){const{backend:t,attrs:e}=n,{start:s,stop:o,dtype:r,step:i}=e,a=wb(s,o,i,r);return t.makeTensorInfo([a.length],r,a)}const i_={kernelName:bh,backendName:"cpu",kernelFunc:r_};const a_=Dt(ci,n=>1/n),l_={kernelName:ci,backendName:"cpu",kernelFunc:a_};function c_(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;rt(o,"resizeBilinear");const l=lt(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(H([h,c,u,f])),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u];let y=0;const w=x[0]/b[0],v=x[1]/b[1];for(let $=0;$<h;$++)for(let N=0;N<c;N++){let T;i?T=w*(N+.5)-.5:T=w*N;const k=Math.max(0,Math.floor(T)),S=T-k,C=Math.min(d-1,Math.ceil(T)),R=$*l[0]+k*l[1],_=$*l[0]+C*l[1];for(let M=0;M<u;M++){let P;i?P=v*(M+.5)-.5:P=v*M;const B=Math.max(0,Math.floor(P)),G=P-B,W=Math.min(p-1,Math.ceil(P)),j=R+B*l[2],X=_+B*l[2],K=R+W*l[2],Y=_+W*l[2];for(let Z=0;Z<f;Z++){const tt=m[j+Z],Q=m[X+Z],ot=m[K+Z],at=m[Y+Z],dt=tt+(ot-tt)*G,ht=Q+(at-Q)*G,gt=dt+(ht-dt)*S;g[y++]=gt}}}return e.makeTensorInfo([h,c,u,f],"float32",g)}const u_={kernelName:zl,backendName:"cpu",kernelFunc:c_};function h_(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;rt([r,o],"resizeBilinearGrad");const a=lt(o.shape),[l,c,u,h]=o.shape,[,d,p]=r.shape,f=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&p>1?u-1:u],g=[i&&d>1?d-1:d,i&&p>1?p-1:p],x=m[0]/g[0],b=m[1]/g[1],y=e.data.get(r.dataId).values;let w=0;for(let v=0;v<l;v++){const $=v*a[0];for(let N=0;N<d;N++){const T=N*x,k=Math.floor(T),S=Math.min(Math.ceil(T),c-1),C=$+k*a[1],R=$+S*a[1],_=T-k,M=1-_;for(let P=0;P<p;P++){const B=P*b,G=Math.floor(B),W=Math.min(Math.ceil(B),u-1),j=B-G,X=1-j,K=C+G*a[2],Y=C+W*a[2],Z=R+G*a[2],tt=R+W*a[2],Q=M*X,ot=M*j,at=_*X,dt=_*j;for(let ht=0;ht<h;ht++){const gt=y[w++];f[K+ht]+=gt*Q,f[Y+ht]+=gt*ot,f[Z+ht]+=gt*at,f[tt+ht]+=gt*dt}}}}return e.makeTensorInfo([l,u,c,h],"float32",f)}const d_={kernelName:vh,backendName:"cpu",kernelFunc:h_};function p_(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;rt(o,"resizeNearestNeighbor");const l=lt(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(h*c*u*f),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u],y=x[0]/b[0],w=x[1]/b[1];let v=0;for(let $=0;$<h;$++){const N=$*l[0];for(let T=0;T<c;T++){const k=i?y*(T+.5):y*T;let S=Math.min(d-1,r?Math.round(k):Math.floor(k));i&&(S=Math.max(0,S));const C=N+S*l[1];for(let R=0;R<u;R++){const _=i?w*(R+.5):w*R;let M=Math.min(p-1,r?Math.round(_):Math.floor(_));i&&(M=Math.max(0,M));const P=C+M*l[2];for(let B=0;B<f;B++){const G=m[P+B];g[v++]=G}}}}return e.makeTensorInfo([h,c,u,f],o.dtype,g)}const f_={kernelName:Bl,backendName:"cpu",kernelFunc:p_};function m_(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;rt([r,o],"resizeNearestNeighborGrad");const a=lt(o.shape),l=lt(r.shape),[c,u,h,d]=o.shape,[,p,f]=r.shape,m=new Float32Array(c*u*h*d),g=e.data.get(r.dataId).values,x=[i&&p>1?u-1:u,i&&f>1?h-1:h],b=[i&&p>1?p-1:p,i&&f>1?f-1:f],y=x[0]/b[0],w=x[1]/b[1],v=1/y,$=1/w,N=Math.ceil(v)*2+2,T=Math.ceil($)*2+2;for(let k=0;k<c;k++){const S=k*a[0];for(let C=0;C<u;C++){const R=S+C*a[1],_=Math.floor(C*v),M=Math.floor(_-N/2);for(let P=0;P<h;P++){const B=R+P*a[2],G=Math.floor(P*$),W=Math.floor(G-T/2);for(let j=0;j<d;j++){let X=0;for(let K=0;K<N;K++){const Y=K+M;if(Y<0||Y>=p)continue;const Z=S+Y*l[1],tt=Y*y,Q=Math.min(u-1,i?Math.round(tt):Math.floor(tt));if(C===Q)for(let ot=0;ot<T;ot++){const at=ot+W;if(at<0||at>=f)continue;const dt=Z+at*l[2],ht=at*w,gt=Math.min(h-1,i?Math.round(ht):Math.floor(ht));P===gt&&(X+=g[dt+j])}}m[B+j]=X}}}}return e.makeTensorInfo(o.shape,o.dtype,m)}const g_={kernelName:wh,backendName:"cpu",kernelFunc:m_};function x_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s;rt(o,"reverse");const i=o.shape.length,a=wt(r,o.shape);if(i===0)return Wn({inputs:{x:o},backend:e});const l=new xe(o.shape,o.dtype),c=e.bufferSync(o);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(p=>d[p]=o.shape[p]-1-d[p]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const b_={kernelName:Vl,backendName:"cpu",kernelFunc:x_};const y_={kernelName:Th,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=ve(s.dtype,H(s.shape)),[c,u,h,d]=s.shape,[p,f]=md(i,u,h),m=255,g=Math.sin(o),x=Math.cos(o),b=a.data.get(s.dataId).values;for(let w=0;w<c;w++){const v=w*h*u*d;for(let $=0;$<u;$++){const N=$*(h*d);for(let T=0;T<h;T++){const k=T*d;for(let S=0;S<d;S++){const C=[c,$,T,S],R=C[2],_=C[1];let M=(R-p)*x-(_-f)*g,P=(R-p)*g+(_-f)*x;M=Math.round(M+p),P=Math.round(P+f);let B=r;if(typeof r!="number"&&(S===3?B=m:B=r[S]),M>=0&&M<h&&P>=0&&P<u){const W=P*(h*d),j=M*d,X=v+W+j+S;B=b[X]}const G=v+N+k+S;l[G]=B}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const w_=Dt(di,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),v_={kernelName:di,backendName:"cpu",kernelFunc:w_};function C_(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=lo(r,o,i),d=!0,p=e.bufferSync(o),f=e.bufferSync(r),m=Vs(p,f,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const $_={kernelName:km,backendName:"cpu",kernelFunc:C_};function I_(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<t?e=o+1:s=o;return s}function k_(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<=t?e=o+1:s=o;return s}function S_(n,t,e,s,o,r){const i=Yt("int32",e*o);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*o;for(let u=0;u<o;++u)i[c+u]=r==="left"?I_(l,t[u+c]):k_(l,t[u+c])}return i}function N_(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=S_(a,l,o.shape[0],o.shape[1],r.shape[1],i);return e.makeTensorInfo(r.shape,"int32",c)}const T_={kernelName:Nm,backendName:"cpu",kernelFunc:N_};function E_(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t;rt([s,o,r],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=Ge(o.dtype,r.dtype),h=Ce(H(o.shape),u);let d=0;const p=i===0||i>1||o.shape.length===1?1:H(o.shape.slice(1));for(let f=0;f<a.length;f++)for(let m=0;m<p;m++)a[f]===1?h[d++]=l[f]:h[d++]=c[f];return e.makeTensorInfo(o.shape,u,h)}const R_={kernelName:Wl,backendName:"cpu",kernelFunc:E_};const A_=lc,D_=cc,F_=Dt(fi,n=>n>=0?D_*n:A_*(Math.exp(n)-1)),__={kernelName:fi,backendName:"cpu",kernelFunc:F_};const O_=Dt(xi,n=>n<0?-1:n>0?1:0),L_={kernelName:xi,backendName:"cpu",kernelFunc:O_};const P_=Dt(mi,n=>Math.sin(n)),M_={kernelName:mi,backendName:"cpu",kernelFunc:P_};const B_=Dt(gi,n=>Math.sinh(n)),z_={kernelName:gi,backendName:"cpu",kernelFunc:B_};const V_=11920928955078125e-23,Df=Math.log(V_)+2,W_=Dt(yi,n=>{const t=n>-Df,e=n<Df,s=Math.exp(n);let o;return e?o=s:t?o=n:o=Math.log(1+s),o}),U_={kernelName:yi,backendName:"cpu",kernelFunc:W_};function G_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;rt([o],"spaceToBatchND");const a=H(r),l=[[0,0]];l.push(...i);for(let $=1+r.length;$<o.shape.length;++$)l.push([0,0]);const c=Jb.kernelFunc({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),u=Di(c.shape,r,a,!1),h=Fi(u.length,r.length,!1),d=_i(c.shape,r,a,!1),m=zt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=Be({inputs:{x:m},backend:e,attrs:{perm:h}}),v=zt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),v}const H_={kernelName:Hl,backendName:"cpu",kernelFunc:G_};function j_(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,p,f,m]=Ib(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const X_={kernelName:Tm,backendName:"cpu",kernelFunc:j_};function K_(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.data.get(o.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(r.dataId).values),[c,u,h]=kb(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const q_={kernelName:Em,backendName:"cpu",kernelFunc:K_};function Y_(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=op(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const Z_={kernelName:Rm,backendName:"cpu",kernelFunc:Y_};function J_(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=op(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const Q_={kernelName:Am,backendName:"cpu",kernelFunc:J_};function tO(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=lo(r,o,a),p=!1,f=e.bufferSync(o);let m;switch(r.dtype){case"bool":{const g=e.bufferSync(r),x=!!e.data.get(i.dataId).values[0];m=Vs(f,g,a,d,u,c,l,h,x,p);break}case"float32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Vs(f,g,a,d,u,c,l,h,x,p);break}case"int32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Vs(f,g,a,d,u,c,l,h,x,p);break}case"string":{const g=e.bufferSync(r),x=bs(e.data.get(i.dataId).values[0]);m=Vs(f,g,a,d,u,c,l,h,x,p);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const eO={kernelName:Dm,backendName:"cpu",kernelFunc:tO};function nO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=wt(i,o.shape)[0],l=Rd(o,r,a),c=new Array(o.shape.length).fill(0),u=o.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const p=so({inputs:{x:o},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,p})}const sO={kernelName:jl,backendName:"cpu",kernelFunc:nO};const oO={kernelName:Ch,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;rt(e,"square");const o=s.data.get(e.dataId).values,r=new Float32Array(o.length);for(let a=0;a<o.length;++a){const l=o[a];r[a]=l*l}return{dataId:s.write(r,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const rO=Dt(Si,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),iO={kernelName:Si,backendName:"cpu",kernelFunc:rO};function aO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;rt(o,"stridedSlice");const{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:y,strides:w}=dd(o.shape,r,i,a,l,c,u,h,d);let v;if(m)v=zt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){I(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const $=cd(b,y,w),N=so({inputs:{x:o},backend:e,attrs:{begin:b,size:$}});v=zt({inputs:{x:N},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(N)}else{const $=e.bufferSync(o),N=Tb(p,$,w,b);v=e.makeTensorInfo(f,N.dtype,N.values)}return v}const lO={kernelName:Ih,backendName:"cpu",kernelFunc:aO};function cO(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,p=e.data.get(h.dataId).values,[f,m]=Eb(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const uO={kernelName:Fm,backendName:"cpu",kernelFunc:cO};function hO(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=Rb(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const dO={kernelName:_m,backendName:"cpu",kernelFunc:hO};function pO(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(r.dataId).values,a=Ab(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const fO={kernelName:Om,backendName:"cpu",kernelFunc:pO};const mO=Dt($i,n=>Math.tan(n)),gO={kernelName:$i,backendName:"cpu",kernelFunc:mO};const xO=Dt(Ii,n=>Math.tanh(n)),bO={kernelName:Ii,backendName:"cpu",kernelFunc:xO};function yO(n){const{inputs:t,backend:e}=n,{tensor:s,indices:o,updates:r}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=lo(r,o,s.shape),h=!1,d=e.bufferSync(o),p=e.bufferSync(r),f=e.bufferSync(s),m=Vs(d,p,s.shape,u,l,a,i,c,f,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const wO={kernelName:Sm,backendName:"cpu",kernelFunc:yO};function vO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;rt(o,"tile");const i=Fb(e.bufferSync(o),r);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const CO={kernelName:ki,backendName:"cpu",kernelFunc:vO};function $O(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s;rt(o,"topk");const a=e.data.get(o.dataId).values,[l,c]=Ob(a,o.shape,o.dtype,r,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const IO={kernelName:kh,backendName:"cpu",kernelFunc:$O};function kO(n){const{inputs:t,attrs:e,backend:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,p]=o.shape,[f,m]=c??[h,d],g=[u,f,m,p],x=lt(o.shape),b=x[0],y=x[1],w=x[2],v=lt(g),$=v[0],N=v[1],T=v[2],k=ve(o.dtype,H(g));k.fill(l);const S=s.data.get(o.dataId).values,C=s.data.get(r.dataId).values;for(let _=0;_<u;++_){const M=r.shape[0]===1?C:C.subarray(_*8,_*8+8);for(let P=0;P<f;++P)for(let B=0;B<m;++B)for(let G=0;G<p;++G){let W;const j=M[6]*B+M[7]*P+1;if(j===0)continue;const X=(M[0]*B+M[1]*P+M[2])/j,K=(M[3]*B+M[4]*P+M[5])/j,Y=Ff(X,d,a),Z=Ff(K,h,a);switch(i){case"nearest":W=AO(S,h,d,b,y,w,_,Z,Y,G,l);break;case"bilinear":W=DO(S,h,d,b,y,w,_,Z,Y,G,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const tt=_*$+P*N+B*T+G;k[tt]=W}return s.makeTensorInfo(g,o.dtype,k)}return{dataId:s.write(k,g,o.dtype),shape:o.shape,dtype:o.dtype}}const SO={kernelName:Sh,backendName:"cpu",kernelFunc:kO};function Ff(n,t,e){switch(e){case"reflect":return NO(n,t);case"wrap":return TO(n,t);case"nearest":return RO(n,t);default:return EO(n)}}function NO(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return Hs(0,e,t-1)}function TO(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return Hs(0,e,t-1)}function EO(n,t){return n}function RO(n,t){return Hs(0,n,t-1)}function fr(n,t,e,s,o,r,i,a,l,c,u){const h=i*s+a*o+l*r+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function AO(n,t,e,s,o,r,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return fr(n,t,e,s,o,r,i,h,d,c,u)}function DO(n,t,e,s,o,r,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*fr(n,t,e,s,o,r,i,h,d,c,u)+(l-d)*fr(n,t,e,s,o,r,i,h,f,c,u),g=(f-l)*fr(n,t,e,s,o,r,i,p,d,c,u)+(l-d)*fr(n,t,e,s,o,r,i,p,f,c,u);return(p-a)*m+(a-h)*g}function FO(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;rt(r,"unique");const i=s.data.get(r.dataId).values,{outputValues:a,outputShape:l,indices:c}=Lb(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const _O={kernelName:Nh,backendName:"cpu",kernelFunc:FO};function OO(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o.shape.length,a=o.shape[r],l=new Array(i-1);let c=0;for(let p=0;p<i;p++)p!==r&&(l[c++]=o.shape[p]);const u=new Array(i).fill(0),h=o.shape.slice();h[r]=1;const d=new Array(a);for(let p=0;p<d.length;p++){u[r]=p;const f=so({inputs:{x:o},backend:e,attrs:{begin:u,size:h}});d[p]=zt({inputs:{x:f},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(f)}return d}const LO={kernelName:Kl,backendName:"cpu",kernelFunc:OO};function PO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s;rt(o,"unsortedSegmentSum");const a=o.shape.length,l=r.shape.length,c=[],u=[],h=a-l;let d=r;for(let f=0;f<h;++f){const m=Ga({inputs:{input:d},backend:e,attrs:{dim:f+1}});d=m,u.push(m)}for(let f=0;f<i;++f){const m=ks(f,"int32"),g=e.makeTensorInfo([],"int32",m),x=Z1({inputs:{a:g,b:d},backend:e}),b=$s({inputs:{x},backend:e,attrs:{dtype:"float32"}}),y=vc({inputs:{a:b,b:o},backend:e}),w=Ui({inputs:{x:y},backend:e,attrs:{axis:0,keepDims:!1}});c.push(w),u.push(g),u.push(x),u.push(b),u.push(y),u.push(w)}const p=Zb({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const MO={kernelName:ql,backendName:"cpu",kernelFunc:PO};const BO=[FA,pR,OA,PA,yR,BA,VA,UA,HA,XA,qA,ZA,QA,nD,oD,aD,cD,hD,pD,AA,mD,xD,yD,vR,vD,xR,$R,$D,fR,kD,ND,TD,RD,DD,_D,LD,MD,zD,WD,GD,jD,KD,YD,JD,QD,e3,s3,r3,i3,a3,l3,u3,p3,IA,m3,IR,$3,kR,I3,NR,R3,A3,F3,ER,AR,O3,P3,B3,V3,FR,OR,mR,U3,SD,H3,X3,q3,kA,PR,BR,Z3,VR,Q3,nF,oF,aF,cF,hF,dF,UR,fF,gF,bF,wF,CF,IF,SF,HR,TF,AF,_F,XR,qR,PF,zF,UF,ZR,HF,XF,KF,Jb,JF,NA,tA,t_,n_,o_,i_,gR,Ru,l_,TA,EA,RA,u_,d_,f_,g_,b_,y_,v_,lA,$_,T_,R_,__,uA,L_,M_,z_,hA,DF,U_,H_,X_,q_,Z_,Q_,eO,sO,fA,oO,gA,bA,iO,lO,uO,dO,fO,CA,h3,gO,bO,wO,CO,IO,SO,JR,_O,LO,MO,jF];for(const n of BO)Pm(n);const Bs={},sa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function zO(n,t){Bs[n]=t}function kn(n,t){if(!(n in Bs)||t!=null){const s=WO(n,t);if(s!==null)Bs[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=Bs[n];return e==null||e.isContextLost()?(delete Bs[n],kn(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Bs[n])}function VO(n){if(!V().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function WO(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t??VO(n);return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Bs[n]},!1),V().getBool("SOFTWARE_WEBGL_ENABLED")&&(sa.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",sa)||e.getContext("experimental-webgl",sa):e.getContext("webgl2",sa)}var Nr;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Nr||(Nr={}));var Ye;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Ye||(Ye={}));var ge;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(ge||(ge={}));function Gi(n,t){return[t,n]}function UO(n,t){return n*t}function oa(n){const t=H(n),e=Math.ceil(t/4);return Qc(e)}function Ko(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function GO(n,t){const[e,s]=Ko(n,t);return e*s*4}function cp(n,t){const e=n;let s,o,r,i,a,l,c,u,h,d;return V().getNumber("WEBGL_VERSION")===2?(s=e.R32F,o=e.R16F,r=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function nt(n,t){const e=t();return V().getBool("DEBUG")&&HO(n),e}function HO(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+qO(n,t))}const jO=596e-10,XO=65504;function KO(n){return!!(V().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||jO<Math.abs(n)&&Math.abs(n)<XO)}function qO(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function ra(n,t){return os(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function YO(n,t){const e=os(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(nt(n,()=>n.shaderSource(e,t)),nt(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function ZO(n,t){const e=os(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(nt(n,()=>n.shaderSource(e,t)),nt(n,()=>n.compileShader(e)),V().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw Qb(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const JO=/ERROR: [0-9]+:([0-9]+):/g;function Qb(n,t){const e=JO.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],o=n.split(`
`),r=o.length.toString().length+2,i=o.map((h,d)=>Co((d+1).toString(),r)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${Co(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function QO(n){return os(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function t4(n,t){if(nt(n,()=>n.linkProgram(t)),!V().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function Hc(n,t){if(nt(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function e4(n,t){const e=os(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),nt(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function n4(n,t){const e=os(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return nt(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),nt(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function s4(n){return os(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function o4(n,t){const e=V().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,o=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function r4(n){return os(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function _f(n,t,e,s,o,r,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),nt(n,()=>n.vertexAttribPointer(a,o,n.FLOAT,!1,r,i)),nt(n,()=>n.enableVertexAttribArray(a)),!0)}function i4(n,t,e){h4(n,e),nt(n,()=>n.activeTexture(n.TEXTURE0+e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function a4(n,t,e){return os(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function l4(n,t,e){return n.getUniformLocation(t,e)}function c4(n,t,e,s){nt(n,()=>i4(n,t,s)),nt(n,()=>n.uniform1i(e,s))}function jc(n,t,e){nt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),nt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function Of(n,t){nt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),nt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function ia(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+u4(n,t))}function u4(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function os(n,t,e){const s=nt(n,()=>t());if(s==null)throw new Error(e);return s}function h4(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const o=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${o}.`)}}function Po(n,t=2){return H(n.slice(0,n.length-t))}function Mo(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function aa(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[Po(n),...Mo(n)]),t}function d4(n,t=!1){let e=V().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=V().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&V().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?Pu(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Is(n).newShape);let o=H(n),r=null;n.length<=1&&o<=e?r=[1,o]:n.length===2&&n[0]<=e&&n[1]<=e?r=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(r=[n[0],n[1]*n[2]*n[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(t?2:1)&&Math.min(...r)>0;if(r==null||i)if(t){const a=Po(n);let l=2,c=2;n.length&&([l,c]=Mo(n)),o=a*(l/2)*(c/2),r=Qc(o).map(u=>u*2)}else r=Qc(o);return r}function la(n){return n%2===0}function ja(n,t){if(n=n.slice(-2),t=t.slice(-2),Et(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||la(e)&&la(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&la(n[0])&&la(t[0])}let Xc,Kc;function p4(n){if(Xc==null){const t=kn(n);Xc=t.getParameter(t.MAX_TEXTURE_SIZE)}return Xc}function f4(n){if(Kc==null){const t=kn(n);Kc=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Kc)}function m4(n){if(n===0)return 0;let t;const e=kn(n);return ln(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:ln(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function ln(n,t){return n.getExtension(t)!=null}function Lf(n){try{if(kn(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function g4(n){if(n===0)return!1;const t=kn(n);if(n===1){if(!ln(t,"OES_texture_float"))return!1}else if(!ln(t,"EXT_color_buffer_float"))return!1;return Du(t)}function x4(n){if(n===0)return!1;const t=kn(n);if(n===1){if(!ln(t,"OES_texture_float")||!ln(t,"WEBGL_color_buffer_float"))return!1}else{if(ln(t,"EXT_color_buffer_float"))return Du(t);const s="EXT_color_buffer_half_float";if(ln(t,s)){const o=t.getExtension(s);return b4(t,o)}return!1}return Du(t)}function Du(n){const t=cp(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),i}function b4(n,t){const e=cp(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function y4(n){return n!==2?!1:kn(n).fenceSync!=null}function Hi(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&I(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const it=V();it.registerFlag("HAS_WEBGL",()=>it.getNumber("WEBGL_VERSION")>0);it.registerFlag("WEBGL_VERSION",()=>Lf(2)?2:Lf(1)?1:0);it.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);it.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>it.get("WEBGL_VERSION")===2);it.registerFlag("WEBGL_CPU_FORWARD",()=>!0);it.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);it.registerFlag("WEBGL_PACK",()=>it.getBool("HAS_WEBGL"));it.registerFlag("WEBGL_PACK_NORMALIZATION",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CLIP",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_REDUCE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_LAZILY_UNPACK",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_CONV_IM2COL",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>p4(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>f4(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=it.getNumber("WEBGL_VERSION");return n===0?0:m4(n)});it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>it.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ym());it.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>g4(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>it.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:it.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));it.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>x4(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_FENCE_API_ENABLED",()=>y4(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>it.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);it.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});it.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Ym()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});it.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);it.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);it.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);it.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);it.registerFlag("WEBGL_EXP_CONV",()=>!1);it.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>it.getBool("IS_TEST"));it.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);it.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);it.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);it.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Fe(){let n,t,e,s,o,r,i,a,l,c;return V().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=V().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",s="varying",o="texture2D",r="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function ho(n,t,e="index"){const s=lt(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / ${o}`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${i}; ${a};`}).join("")}function Cc(n,t,e="index"){const s=lt(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function w4(n,t){const e=n.length,s=n.map(r=>`${t}[${r}]`),o=new Array(e-1);o[e-2]=s[e-1];for(let r=e-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function v4(n,t,e="index"){const s=n.map((r,i)=>i),o=w4(s,t);return o.map((r,i)=>{const a=`int ${n[i]} = ${e} / ${o[i]}`,l=i===o.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${o[i]}`:`index -= ${n[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function up(n){const t=lt(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function hp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const ty=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:ey}=hS;function C4(n,t,e){const s=[];if(n.forEach(p=>{const f=H(p.shapeInfo.logicalShape);if(p.shapeInfo.isUniform?s.push(`uniform float ${p.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${p.name};`),s.push(`uniform int offset${p.name};`)),e.enableShapeUniforms){const{uniformShape:m}=dp(e.packedInputs,p.shapeInfo.logicalShape,p.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${p.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${p.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${p.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${p.name}Shape;`);break}s.push(`uniform ivec2 ${p.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(p=>{s.push(`uniform ${p.type} ${p.name}${p.arrayIndex?`[${p.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(p=>$4(p,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=Fe(),l=S4(a);let c,u,h=E4(a);return t.isPacked?(c=I4(t.logicalShape,i,e.enableShapeUniforms),u=T4(a)):(c=k4(t.logicalShape,i,e.enableShapeUniforms),u=N4(a)),e.packedInputs&&(h+=F4),[h,l,u,o,c,r,e.userCode].join(`
`)}function qo(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return H4(n,t);case 1:return X4(n,t);case 2:return q4(n,t);case 3:return Z4(n,t);case 4:return Q4(n,t);case 5:return tL(n);case 6:return eL(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function ny(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return G4(n);case 1:return j4(n,t);case 2:return K4(n,t);case 3:return Y4(n,t);default:return J4(n,t)}}function $4(n,t,e=!1,s){let o="";e?o+=ny(n,s):o+=qo(n,s);const r=n.shapeInfo.logicalShape,i=t.logicalShape;return r.length<=i.length&&(e?o+=nL(n,t):o+=sL(n,t)),o}function I4(n,t,e){switch(n.length){case 0:return sy();case 1:return _4(n,t,e);case 2:return W4(n,t,e);case 3:return L4(n,t,e);default:return M4(n,t,e)}}function k4(n,t,e){switch(n.length){case 0:return sy();case 1:return O4(n,t,e);case 2:return U4(n,t,e);case 3:return P4(n,t,e);case 4:return B4(n,t,e);case 5:return z4(n,t);case 6:return V4(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function S4(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function N4(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function T4(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function E4(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${R4}
    ${A4}
    ${D4}
  `}const R4=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,A4=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,D4=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,F4=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function sy(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function _4(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function O4(n,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function L4(n,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[2]/2),r=o*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function P4(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Cc(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=ho(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function M4(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[n.length-1]/2),r=o*Math.ceil(n[n.length-2]/2);let i=r,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${n.length}(${l});
    }
  `}function B4(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Cc(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=ho(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function z4(n,t){const e=ho(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function V4(n,t){const e=ho(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function W4(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Et(n,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function U4(n,t,e){return Et(n,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:n[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function po(n){return`offset${n}`}function G4(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=Fe();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function H4(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=po(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function j4(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=n.shapeInfo.texShape,r=Fe();if(t)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${e}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${e}, uv);
    }
  `}function X4(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Yo(n)}
      }
    `;const o=n.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=po(e);return i===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${r}.0);
        return sampleTexture(${e}, uv);
      }
    `:r===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${a});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function K4(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=r[0],a=r[1],l=Fe();if(r!=null&&Et(e,r))return t?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(t)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(e[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function q4(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&Et(e,r)){if(t)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=r[0],p=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${p}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Is(e),l=i;if(l.length<e.length){const d=Zo(n,l),p=["row","col"];return`
      ${qo(d,t)}
      float ${o}(int row, int col) {
        return ${o}(${Jo(p,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${Yo(n)}
      }
    `;const c=r[0],u=r[1],h=po(s);return u===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:t?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function Y4(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(e[0]===1){const d=e.slice(1),p=[1,2],f=Zo(n,d),m=["b","row","col"];return`
        ${ny(f,t)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${Jo(m,p)});
        }
      `}const a=Fe();if(t)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(e[2]/2),h=u*Math.ceil(e[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function Z4(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Is(e),c=a;if(c.length<e.length){const m=Zo(n,c),g=["row","col","depth"];return`
        ${qo(m,t)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${Jo(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${Yo(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],p=n.shapeInfo.flatOffset;if(d===r&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const f=po(s);return t?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${i} + depth + ${f};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function J4(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=Fe();if(t)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${e}, uv);
    }
  `;const r=n.shapeInfo.logicalShape,i=r.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(r[i-1]/2);let d=h*Math.ceil(r[i-2]/2),p="int b, int row, int col",f=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)p=`int b${m}, `+p,d*=r[i-m-1],f=`b${m} * ${d} + `+f;return`
    vec4 ${s}(${p}) {
      int index = ${f};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${o.texture2D}(${e}, uv);
    }
  `}function Q4(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[3],i=e[2]*r,a=e[1]*i,{newShape:l,keptDims:c}=Is(e);if(l.length<e.length){const b=Zo(n,l),y=["row","col","depth","depth2"];return`
      ${qo(b,t)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${Jo(y,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${r}, 1)));
        ${Yo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1],f=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(p===a&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${f}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(p===r&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=po(s);return t?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${f}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${d}, ${p}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function tL(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=t[4],r=t[3]*o,i=t[2]*r,a=t[1]*i,{newShape:l,keptDims:c}=Is(t);if(l.length<t.length){const m=Zo(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${qo(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Jo(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${r}, ${o})) +
          depth3;
        ${Yo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1];if(p===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(p===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;const f=po(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${f};
      vec2 uv = uvFromFlat(${d}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function eL(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:o,keptDims:r}=Is(t);if(o.length<t.length){const g=Zo(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${qo(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Jo(x,r)});
      }
    `}const i=t[5],a=t[4]*i,l=t[3]*a,c=t[2]*l,u=t[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Yo(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,p=d[0],f=d[1];if(f===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;const m=po(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${p}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function Yo(n){const t=n.name,e=H(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function nL(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=ey(n.shapeInfo.logicalShape,t.logicalShape),l=_t(i),c=i-r;let u;const h=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&r>0?d="coords":d=n.shapeInfo.logicalShape.map((b,y)=>`coords.${h[y+c]}`).join(", ");let p="return outputValue;";const m=H(n.shapeInfo.logicalShape)===1,x=H(t.logicalShape)===1;if(r===1&&!m&&!x)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?p=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:p=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=r-2,y=r-1;a.indexOf(b)>-1&&a.indexOf(y)>-1?p="return vec4(outputValue.x);":a.indexOf(b)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(y)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${p}
    }
  `}function sL(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Et(i,r))return`
      float ${o}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=_t(l),u=ey(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const p=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${p[m+h]} = 0;`).join(`
`);let f="";return l<2&&a>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${p[g+h]}`).join(", "),`
    float ${o}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${f});
    }
  `}function _t(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function dp(n,t,e){const{newShape:s,keptDims:o}=Is(t),r=t.length,i=n&&r===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&r>1&&!Et(t,e)&&s.length<r||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:o}}function Zo(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Jo(n,t){return t.map(e=>n[e]).join(", ")}function oL(n,t,e,s){const o=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=C4(o,i,t),l=ZO(n.gl,a),c=n.createProgram(l);return V().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i},oy(n,t,c)))}function oy(n,t,e){const s=[],o=[];let r,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),V().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(r=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)o.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:o,infLoc:l,nanLoc:c,outShapeLocation:r,outShapeStridesLocation:a,outTexShapeLocation:i}}function Pf(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const o=e.logicalShape,r=t[s],i=r.shape;if(!Et(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(e.isUniform&&r.isUniform)return;const a=e.texShape,l=r.isUniform?null:r.texData.texShape;if(!Et(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function rL(n,t,e,s,o){t.program.enableShapeUniforms||(Pf(t.inShapeInfos,e),Pf([t.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):n.setOutputMatrixTexture(r.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),V().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:p}=t.variablesLocations[l];if(d){const{uniformShape:f}=dp(t.program.packedInputs,c.shape,c.texData.texShape);switch(f.length){case 1:n.gl.uniform1iv(d,new Int32Array(f));break;case 2:n.gl.uniform2iv(d,new Int32Array(f));break;case 3:n.gl.uniform3iv(d,new Int32Array(f));break;case 4:n.gl.uniform4iv(d,new Int32Array(f));break}}if(p&&n.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(H(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let f=c.uniformValues;f instanceof Float32Array||(f=new Float32Array(f)),n.gl.uniform1fv(u,f)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=lt(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&o)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=o[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function iL(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=dp(n.packedInputs,i.shape,l);let d="",p="",f="";if(u.length===1&&n.packedInputs){const v=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${v[0]>1}_${v[1]>1}`}else if(u.length===2&&!n.packedInputs)p=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const v=lt(u);f=`${v[0]===l[1]}_${v[v.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Et(i.shape,l),x=H(i.shape)===1,b=Ao(i.shape,e.shape),y=!n.packedInputs&&m===e.shape.length&&Et(l,e.texData.texShape),w=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${y}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${p}_${f}_${w}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${V().getNumber("WEBGL_VERSION")}`,r}function Se(n){return V().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class aL{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Nr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Fe();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Cc(["r","c","d"],t):ho(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}}class lL{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Nr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Fe();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Cc(["r","c","d"],t):ho(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}}class cL{constructor(t){this.variableNames=["A"],this.outTexUsage=Ye.DOWNLOAD;const e=Fe();this.outputShape=t,this.userCode=`
      ${ty}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class uL{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ye.DOWNLOAD;const e=Fe();this.outputShape=t,this.userCode=`
      ${ty}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const hL={R:0,G:1,B:2,A:3};class Mf{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=Fe();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);let r="result";e&&(r="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${hL[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?hp():up(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${i}
        }
        ${o.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}class dL{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Fe();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);let o="",r="result";e&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?hp():up(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}function pL(n){const t=Fe(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return YO(n,e)}function fL(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return e4(n,t)}function mL(n){const t=new Uint16Array([0,1,2,2,1,3]);return n4(n,t)}function ji(n,t,e,s,o,r){o4(t,e);const i=s4(n),a=n.TEXTURE_2D;return nt(n,()=>n.bindTexture(a,i)),nt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),nt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),nt(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),nt(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),V().getNumber("WEBGL_VERSION")===1?nt(n,()=>n.texImage2D(a,0,s,t,e,0,o,r,null)):nt(n,()=>n.texStorage2D(a,1,s,t,e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function ry(n){return n.internalFormatFloat}function gL(n,t,e,s){const[o,r]=Gi(t,e);return ji(n,o,r,ry(s),s.textureFormatFloat,n.FLOAT)}function iy(n){return n.internalFormatHalfFloat}function xL(n,t,e,s){const[o,r]=Gi(t,e);return ji(n,o,r,iy(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function ay(n){return n.downloadTextureFormat}function bL(n,t,e,s){const[o,r]=Gi(t,e);return ji(n,o,r,ay(s),n.RGBA,n.UNSIGNED_BYTE)}function ly(n){return n.internalFormatPackedFloat}function yL(n,t,e,s){const[o,r]=Ko(t,e);return ji(n,o,r,ly(s),n.RGBA,n.FLOAT)}function cy(n){return n.internalFormatPackedHalfFloat}function wL(n,t,e,s){const[o,r]=Ko(t,e);return ji(n,o,r,cy(s),n.RGBA,s.textureTypeHalfFloat)}function vL(n,t,e){return nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),_f(n,t,"clipSpacePos",e,3,20,0)&&_f(n,t,"uv",e,2,20,12)}function CL(n,t,e,s,o,r){nt(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=r.internalFormatPackedFloat),i.set(o),V().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function $L(n,t,e){nt(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?V().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):V().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function IL(n,t,e,s){const o=n.createBuffer();nt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const a=4*4*t*e;return nt(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),nt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),nt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function kL(n,t,e){const s=n,o=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function SL(n,t,e,s){const[o,r]=Gi(t,e),i=4,a=new Uint8Array(UO(t*e,i));return nt(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function NL(n,t,e,s,o,r,i,a){const l=n,c=new Float32Array(GO(r,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function TL(n,t,e){const s=new Float32Array(t*e*4);return nt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class qc{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=V().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,zO(e,t)):this.gl=kn(e),t=this.gl,V().getNumber("WEBGL_VERSION")===2){const r=t;this.createVertexArray=()=>nt(r,()=>r.createVertexArray()),this.bindVertexArray=i=>nt(r,()=>r.bindVertexArray(i)),this.deleteVertexArray=i=>nt(r,()=>r.deleteVertexArray(i)),this.getVertexArray=()=>nt(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(t!=null){const r=t.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>nt(t,()=>r.createVertexArrayOES()),this.bindVertexArray=i=>nt(t,()=>r.bindVertexArrayOES(i)),this.deleteVertexArray=i=>nt(t,()=>r.deleteVertexArrayOES(i)),this.getVertexArray=()=>nt(t,()=>t.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),V().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=ra(this.gl,r),ln(this.gl,i))this.textureHalfFloatExtension=ra(this.gl,i);else if(V().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),ln(this.gl,o))this.colorBufferHalfFloatExtension=ra(this.gl,o);else if(V().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",ln(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(ln(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=fL(this.gl),this.indexBuffer=mL(this.gl),this.framebuffer=r4(this.gl),this.textureConfig=cp(this.gl,this.textureHalfFloatExtension)}get debug(){return V().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;nt(t,()=>t.finish()),nt(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),nt(t,()=>t.deleteFramebuffer(this.framebuffer)),nt(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),nt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),nt(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),gL(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),xL(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),bL(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),$L(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,o){this.throwIfDisposed(),CL(this.gl,t,e,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),wL(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),yL(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Of(this.gl,this.framebuffer),this.outputTexture=null),nt(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>SL(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,o,r,i){return NL(this.gl,t,e,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return kL(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const o=IL(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(V().getBool("WEBGL_FENCE_API_ENABLED")){const o=t,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},e=r}else V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>TL(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=pL(e));const s=QO(e);nt(e,()=>e.attachShader(s,this.vertexShader)),nt(e,()=>e.attachShader(s,t)),t4(e,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&Hc(e,o),o}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;nt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),vL(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(nt(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Hc(this.gl,this.program),nt(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?a4(this.gl,t,e):l4(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),nt(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),c4(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[o,r]=Ko(e,s);this.setOutputMatrixTextureDriver(t,o,r)}setOutputMatrixWriteRegion(t,e,s,o){this.setOutputMatrixWriteRegionDriver(s,t,o,e)}setOutputPackedMatrixWriteRegion(t,e,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Hc(this.gl,this.program),ia(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}nt(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),nt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ra(this.gl,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await yp(()=>this.disposed||this.isQueryAvailable(t,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=EL(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in V().platform&&(s=V().platform.setTimeoutCustom.bind(V().platform)),yp(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),jc(this.gl,t,this.framebuffer),this.debug&&ia(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(jc(this.gl,this.outputTexture,this.framebuffer),this.debug&&ia(this.gl)):Of(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const o=this.gl;jc(o,t,this.framebuffer),this.debug&&ia(o),this.outputTexture=t,nt(o,()=>o.viewport(0,0,e,s)),nt(o,()=>o.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,o){this.throwIfDisposed(),nt(this.gl,()=>this.gl.scissor(t,e,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function EL(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:RL,bincountImpl:uy,bincountReduceImpl:AL,bitwiseAndImpl:DL,castImpl:FL,ceilImpl:_L,concatImpl:OL,equalImpl:LL,expImpl:PL,expm1Impl:ML,floorImpl:BL,gatherNdImpl:zL,gatherV2Impl:VL,greaterImpl:WL,greaterEqualImpl:UL,lessImpl:GL,lessEqualImpl:HL,linSpaceImpl:jL,logImpl:XL,maxImpl:KL,maximumImpl:qL,minimumImpl:YL,multiplyImpl:ZL,negImpl:JL,notEqualImpl:QL,prodImpl:tP,raggedGatherImpl:eP,raggedRangeImpl:nP,raggedTensorToTensorImpl:sP,rangeImpl:oP,rsqrtImpl:rP,scatterImpl:iP,sigmoidImpl:aP,simpleAbsImpl:hy,sliceImpl:lP,sparseFillEmptyRowsImpl:cP,sparseReshapeImpl:uP,sparseSegmentReductionImpl:dy,sqrtImpl:hP,staticRegexReplaceImpl:dP,stridedSliceImpl:pP,stringNGramsImpl:fP,stringSplitImpl:mP,stringToHashBucketFastImpl:gP,subImpl:xP,tileImpl:bP,topKImpl:yP,transposeImpl:pp,uniqueImpl:wP}=$A;function py(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function Re(n,t){return t===1?[n]:py(n,t)}function vP(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class CP{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Se(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=Re("rc",this.rank),s=_t(this.rank),o=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const e=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${t[t.length-1-i]},`+r;e.push(r)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let s=this.rank-2;s<this.rank;s++)e+=`${t[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";const e=t.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(t){const e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class fy{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${$P(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?hp():up(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function $P(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?v4(["r","c","d"],"inputShape"):ho(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class IP{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const o=zf(e,s),r=Vf(t,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=Bf(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[r].pop();return this.usedTextures[r].push(l),l}let a;return o===ge.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===ge.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===ge.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===ge.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===ge.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,o){if(this.freeTextures==null)return;const r=zf(s,o),i=Vf(e,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=Bf(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=V().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function kP(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function Bf(n,t,e,s,o){const r=SP(t,s);let i;if(o){const[l,c]=Ko(n[0],n[1]);i=l*c}else{const[l,c]=Gi(n[0],n[1]);i=l*c}const a=kP(e,r);return i*a}function SP(n,t){switch(n){case ge.PACKED_2X2_FLOAT32:return ly(t);case ge.PACKED_2X2_FLOAT16:return cy(t);case ge.UNPACKED_FLOAT32:return ry(t);case ge.UNPACKED_FLOAT16:return iy(t);case ge.PACKED_4X1_UNSIGNED_BYTE:return ay(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function NP(n){return V().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?ge.PACKED_2X2_FLOAT32:ge.UNPACKED_FLOAT32:n?ge.PACKED_2X2_FLOAT16:ge.UNPACKED_FLOAT16}function zf(n,t){if(n===Ye.UPLOAD)return ge.PACKED_2X2_FLOAT32;if(n===Ye.RENDER||n==null)return NP(t);if(n===Ye.DOWNLOAD||n===Ye.PIXELS)return ge.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function Vf(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class Dn{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const pn="if (isnan(x)) return x;",TP="return x;",Wf="return abs(x);",EP="return (x >= 0.0) ? x : (exp(x) - 1.0);",RP=pn+`
  return (x < 0.0) ? 0.0 : x;
`,AP=pn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,cs="return x;",DP="return 1.0 / (1.0 + exp(-1.0 * x));";const FP="return x;",_P=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,OP=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,LP=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,PP="return 1.0 / (1.0 + exp(-1.0 * x));";class ps{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class MP{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);const e=t.length,s=Re("rc",e),o=_t(e),r=vP(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const BP=Mg,zP=1e-7,VP=1e-4,ca={};function WP(n){return n in ca||(ca[n]={}),ca[n]}const UP=V().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),GP=600;function HP(){return V().global.screen==null?1024:V().global.screen.height*V().global.screen.width*window.devicePixelRatio*GP/1024/1024}class $c extends Lu{nextDataId(){return $c.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!V().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof qc)e=t;else{const s=kn(V().getNumber("WEBGL_VERSION"),t);e=new qc(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=kn(V().getNumber("WEBGL_VERSION"));e=new qc(s),this.binaryCache=WP(V().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new IP(this.gpgpu),this.numMBBeforeWarning=HP(),this.texData=new lm(this,Nn())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,o,r,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[o,r]},l.texShape=[o,r];const c=aa(e),u=new Mf(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[o,r]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((V().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||V().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:e,dtype:s,values:t,usage:Ye.UPLOAD,refCount:1}),o}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,o,r){if(V().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:o,values:e,usage:Ye.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new ps(a,cs):d=new Dn(a,cs);const p=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:o}],o),f=this.readSync(p.dataId);return this.disposeIntermediateTensorInfo(p),f}if(s!=null)return this.convertAndCacheOnCPU(t);if(o==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=_e());let h;if(o==="complex64"){const d=this.readSync(r.real.dataId),p=this.readSync(r.imag.dataId);h=Qn(d,p)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=_e()-u),this.convertAndCacheOnCPU(t,h)}async read(t){if(this.pendingRead.has(t)){const f=this.pendingRead.get(t);return new Promise(m=>f.push(m))}const e=this.texData.get(t),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(r!=null){let f;l?f=new ps(o,cs):f=new Dn(o,cs);const m=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(V().getBool("DEBUG")&&!V().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&V().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&V().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const f=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(f.texture.texture,...oa(o))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const f=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=f[0],g=f[1];h=Qn(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const f=H(o);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,f)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const f=this.gpgpu.gl;nt(f,()=>f.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),p=this.pendingRead.get(t);return this.pendingRead.delete(t),p.forEach(f=>f(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&Nn().removeDataId(t,this),this.pendingDeletes--),d}readToGPU(t,e={}){const s=this.texData.get(t),{values:o,shape:r,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let p;l?p=new ps(r,cs):p=new Dn(r,cs);const f=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:a}],a),m=this.readToGPU(f,e);return this.disposeIntermediateTensorInfo(f),m}if(c==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=Nn().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>bs(o));return yt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return yt(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!KO(s))throw V().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:o}=this.texData.get(t),r=H(e);if(V().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),p=this.texData.get(d.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(p.texture.texture,...oa(e)).subarray(0,r);return this.disposeIntermediateTensorInfo(d),f}const i=V().getBool("WEBGL_PACK")&&o===!0,a=i?aa(e):e,l=i?new uL(a):new cL(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,t();const r=js(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=js(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(r);a.kernelMs=Nw(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:_e(),endMs:null}}endTimer(t){return V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=_e(),t)}async getQueryTime(t){if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(e,o,r,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=UP){return V().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&H(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){qe("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return BP(t.shape,e)}packedUnaryOp(t,e,s){const o=new ps(t.shape,e),r=this.compileAndRun(o,[t],s);return Nn().makeTensorFromTensorInfo(r)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const o=hy(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,o)}if(V().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Wf,t.dtype);const e=new Dn(t.shape,Wf),s=this.compileAndRun(e,[t]);return Nn().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Ar(s[0])){const r=s.map(i=>ms(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:e}}makeOutput(t,e,s){return Nn().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new MP(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new CP(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[Po(t.shape),...Mo(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[Po(e),...Mo(e)],i=new fy(r,s),a=!0,l=[s],c=this.runWebGLProgram(i,[o],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:o,shape:r,dtype:i}=s;if(e!=null){const d=H(r),p=e[0]*e[1]*4;I(d<=p,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=aa(r);let l;o?l=new lL(a):l=new aL(a);const c=!0,u=[e??oa(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:r,dataId:h.dataId}}runWebGLProgram(t,e,s,o,r=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===Nr.DENSE){const x=i??oa(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),H(a.shape)===0)return l.values=ve(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&H(x.shape)<=V().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!ja(b.shape,x.shape)){const y=x,w=x.shape;x.shape=b.shape,x=this.packedReshape(x,w),c.push(x),b=this.texData.get(x.dataId),y.shape=w}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=iL(t,u,h),p=this.getAndSaveBinary(d,()=>oL(this.gpgpu,t,u,h)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),V().get("ENGINE_COMPILE_ONLY")||rL(this.gpgpu,p,u,h,o),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=V().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=_e();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!V().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,o,r=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,o,r)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(V().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=z(()=>{if(!V().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=V().getBool("DEBUG");V().set("DEBUG",!1);const e=this.abs(Tt(1e-8)).dataSync()[0];if(V().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?zP:VP}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=_e());let h=e.texShape;if(h==null&&(h=d4(s,l),e.texShape=h),r!=null){const d=aa(s);let p,f=h[1],m=h[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(l||!g)&&([f,m]=Ko(h[0],h[1])),l?p=new dL(d,g):p=new Mf(d,g);const x=g?[m,f]:h,b=this.makeTensorInfo(x,o),y=this.texData.get(b.dataId);g?y.usage=Ye.PIXELS:y.usage=Ye.UPLOAD,y.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),f,m,r);const w=[[m,f]],$=this.runWebGLProgram(p,[b],o,w,!0),N=this.texData.get($.dataId);e.texShape=N.texShape,e.isPacked=N.isPacked,e.usage=N.usage,V().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(e.texture=N.texture,e.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=_e()-u)}else{const d=this.acquireTexture(h,a,o,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:o}=s;return e!=null&&(s.values=jP(e,o)),s.values}acquireTexture(t,e,s,o){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,o)}computeBytes(t,e){return t[0]*t[1]*Ca(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(e),o(!0)}catch(r){throw r}});t.push(s)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await e0(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Qb(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:o,nanLoc:r,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=oy(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=o,t.nanLoc=r,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:o,height:r,width:i,channels:a}=t,l=Nn().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(o,e,s,r,i,a);return Nn().makeTensorFromDataId(c,e,s,l)}}$c.nextDataId=0;function jP(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}Zm()&&eg("webgl",()=>new $c,2);const fp=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class oo{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=mt(e,s),this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const fo=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class Qo{constructor(t,e,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=mt(e,s);const r=this.outputShape.length;this.enableShapeUniforms=Se(r);let i="";if(o)if(r===0||H(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${_t(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Re("coords",r);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function je(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const XP={kernelName:Jr,backendName:"webgl",kernelFunc:je};function Ds(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(r.dataId),a=je({inputs:{x:s},backend:e}),l=je({inputs:{x:o},backend:e});return i.complexTensorInfos={real:a,imag:l},r}const KP={kernelName:qu,backendName:"webgl",kernelFunc:Ds};const my="return (a < 0.) ? b * a : a;",gy=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function qP(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s,i=e.makeTensorInfo([],"float32",ks(r,"float32")),a=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qo(gy,o.shape,i.shape):new oo(my,o.shape,i.shape),l=e.runWebGLProgram(a,[o,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const YP={kernelName:xl,backendName:"webgl",kernelFunc:qP};const xy="return (a < 0.) ? b * a : a;",by=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function ZP(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t,r=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qo(by,s.shape,o.shape):new oo(xy,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],"float32")}const JP={kernelName:Ll,backendName:"webgl",kernelFunc:ZP};const tr="if (isnan(x)) return x;";function St({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=V().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new ps(i.shape,t):u=new Dn(i.shape,n),a.runWebGLProgram(u,[i],l)}}function we({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const f=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(y=>{const[w,v]=y,$={dataId:w.dataId,dtype:w.dtype,shape:l.shape},N={dataId:v.dataId,dtype:v.dtype,shape:c.shape},T=new oo(n,l.shape,c.shape);return u.runWebGLProgram(T,[$,N],Ge(w.dtype,v.dtype))}),b=Ds({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=r||Ge(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&o!=null){const f=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?ts(f):f,x=l.dtype==="string"?ts(m):m,[b,y]=o(l.shape,c.shape,g,x,h),w=u.makeTensorInfo(y,h),v=u.texData.get(w.dataId);return v.values=b,w}const d=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let p;return d?p=new Qo(t,l.shape,c.shape,e):p=new oo(n,l.shape,c.shape),u.runWebGLProgram(p,[l,c],h)}}function Tr(n,t=!1){if(n==="linear")return t?FP:TP;if(n==="relu")return t?OP:RP;if(n==="elu")return t?_P:EP;if(n==="relu6")return t?LP:AP;if(n==="prelu")return t?by:xy;if(n==="leakyrelu")return t?gy:my;if(n==="sigmoid")return t?PP:DP;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class yy{constructor(t,e,s,o=!1,r=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Se(this.outputShape.length);const u=o?t[1]:t[2],h=Math.ceil(u/2),d=o?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let y="rc.x",w="rc.x";t[0]<e[0]?y=`imod(rc.x, ${t[0]})`:e[0]<t[0]&&(w=`imod(rc.x, ${e[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${y};
        int batchB = ${w};
        for (int i = 0; i < ${h}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${p});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${f[0]} * ${m[0]});
          result += (${f[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}const Uf={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class Gf{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=mt(e,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const Hf="return a * b;";function mp(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=Ge(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),c=new Gf(Uf.REAL,s.shape,o.shape),u=new Gf(Uf.IMAG,s.shape,o.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Ds({inputs:{real:d,imag:p},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}if(e.shouldExecuteOnCPU([s,o])){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),[c,u]=ZL(s.shape,o.shape,a.values,l.values,r),h=e.makeTensorInfo(u,r),d=e.texData.get(h.dataId);return d.values=c,h}let i;return V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new Qo(Hf,s.shape,o.shape):i=new oo(Hf,s.shape,o.shape),e.runWebGLProgram(i,[s,o],r)}const QP={kernelName:ai,backendName:"webgl",kernelFunc:mp};function tM(n,t,e){const s=[Po(n.shape),...Mo(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[Po(t),...Mo(t)],i=new fy(r,s),a=!0,l=[s],c=e.runWebGLProgram(i,[o],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function et(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=e,a=H(o.shape),l=um(r,a),c=H(l);I(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!ja(o.shape,l)&&!(u.texture!==null&&ja(u.shape,l))?tM(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const eM={kernelName:Ml,backendName:"webgl",kernelFunc:et};class jf{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${To(h)?h.toPrecision(2):h}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}class nM{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";e==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):e==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function sM(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=ac(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function mo(n,t,e,s){const o=sM(n.shape);let r=n;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:c}=o[i];let u,h;e==="mean"?u=i===0?new jf({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new jf({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new nM({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=r,r=s.runWebGLProgram(u,[r],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return r}class oM{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const o=_t(this.rank),r=rM(e);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function rM(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let o=0;o<n.length;o++)s[n[o]]=e[o];return s.join()}class iM{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=_t(this.rank),r=py("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${r[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function Ic(n,t,e){const s=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new iM(n.shape,t):new oM(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function aM(n,t,e,s){const o=t,r=n.shape.length,i=wt(o,n.shape);let a=i;const l=Xt(a,r),c=l!=null;let u=n;c&&(u=Ic(n,l,s),a=Qt(a.length,r)),ye("sum",a,r);const[h,d]=fe(u.shape,a);let p=h;e&&(p=se(h,i));const f=H(d),g=H(n.shape)/f,x=et({inputs:{x:u},attrs:{shape:[g,f]},backend:s}),b=Eh(n.dtype),y=mo(x,b,"sum",s),w=et({inputs:{x:y},attrs:{shape:p},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(y),c&&s.disposeIntermediateTensorInfo(u),w}function kc(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;return aM(o,r,i,e)}const lM={kernelName:Gl,backendName:"webgl",kernelFunc:kc};function De(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{perm:r}=s,i=e,a=o.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=o.shape[r[u]];let c;if(i.shouldExecuteOnCPU([o])){const h=i.texData.get(o.dataId).values,d=pp(h,o.shape,o.dtype,r,l);c=i.makeTensorInfo(l,o.dtype);const p=i.texData.get(c.dataId);p.values=d}else c=Ic(o,r,i);return c}const cM={kernelName:$o,backendName:"webgl",kernelFunc:De};const wy=1e3;function Xa({a:n,b:t,transposeA:e,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],p=e?n.shape[c-1]:n.shape[c-2],f=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=H(m),b=H(g),w=mt(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,f]);I(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const v=e?[x,h,p]:[x,p,h],$=s?[b,f,d]:[b,d,f],N=et({inputs:{x:n},backend:o,attrs:{shape:v}}),T=et({inputs:{x:t},backend:o,attrs:{shape:$}}),k=[N,T],S=Math.max(x,b),C=e?N.shape[1]:N.shape[2],R=r!=null,_=i!=null,M=l==="leakyrelu",P=l!=null?Tr(l,!0):null,B=R||_||M||P!=null;let G;if((p===1||f===1)&&C>wy&&B===!1){let j=N,X=T;e&&(j=De({inputs:{x:N},backend:o,attrs:{perm:[0,2,1]}}),k.push(j)),s&&(X=De({inputs:{x:T},backend:o,attrs:{perm:[0,2,1]}}),k.push(X));const K=f!==1,Y=f===1;let Z=j;K&&(Z=et({inputs:{x:j},backend:o,attrs:{shape:[S,C,1]}}),k.push(Z));const tt=f===1?2:1;let Q=X;Y&&(Q=et({inputs:{x:X},backend:o,attrs:{shape:[S,1,C]}}),k.push(Q));const ot=mp({inputs:{a:Z,b:Q},backend:o});G=kc({inputs:{x:ot},backend:o,attrs:{axis:tt,keepDims:!0}}),k.push(ot)}else{const j=Ge(n.dtype,t.dtype),X=new yy(v,$,[S,p,f],e,s,R,P,_,M),K=[N,T];if(r!=null&&K.push(r),_&&K.push(i),M){const Y=o.makeTensorInfo([],"float32",ks(a,"float32"));K.push(Y),k.push(Y)}G=o.runWebGLProgram(X,K,j)}const W=et({inputs:{x:G},backend:o,attrs:{shape:w}});k.push(G);for(const j of k)o.disposeIntermediateTensorInfo(j);return W}function uM(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return Xa({a:o,b:r,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const hM={kernelName:$a,backendName:"webgl",kernelFunc:uM};const Xf="return abs(x);";function dM(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=e.texData.get(s.dataId),i=hy(r.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let o;return V().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new ps(s.shape,Xf):o=new Dn(s.shape,Xf),e.runWebGLProgram(o,[s],s.dtype)}const pM={kernelName:Za,backendName:"webgl",kernelFunc:dM};const fM=pn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,mM=St({opSnippet:fM}),gM={kernelName:Dr,backendName:"webgl",kernelFunc:mM};const xM=pn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,bM=St({opSnippet:xM}),yM={kernelName:Fr,backendName:"webgl",kernelFunc:bM};const Kf="return a + b;",wM=we({opSnippet:Kf,packedOpSnippet:Kf,supportsComplex:!0,cpuKernelImpl:RL}),vM={kernelName:Vo,backendName:"webgl",kernelFunc:wM};class CM{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}class $M{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}function wa(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return je({inputs:{x:s[0]},backend:e});if(s.length>V().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=wa({inputs:s.slice(0,l),backend:e}),u=wa({inputs:s.slice(l),backend:e});return wa({inputs:[c,u],backend:e})}const o=s.map(l=>l.dtype).reduce((l,c)=>Ge(l,c)),r=s.map(l=>l.shape),a=V().getBool("WEBGL_PACK")?new $M(s[0].shape,r):new CM(s[0].shape,r);return e.runWebGLProgram(a,s,o)}const IM={kernelName:Wu,backendName:"webgl",kernelFunc:wa};function kM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=wt(r,o.shape);let c=l;const u=Xt(c,a);let h=o;u!=null&&(h=De({inputs:{x:o},backend:e,attrs:{perm:u}}),c=Qt(c.length,a)),ye("all",c,a);const[d,p]=fe(h.shape,c),f=H(p),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=mo(m,m.dtype,"all",e);let x;if(i){const b=se(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const SM={kernelName:Uu,backendName:"webgl",kernelFunc:kM};function NM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=wt(r,o.shape);let c=l;const u=Xt(c,a);let h=o;u!=null&&(h=De({inputs:{x:o},backend:e,attrs:{perm:u}}),c=Qt(c.length,a)),ye("any",c,a);const[d,p]=fe(h.shape,c),f=H(p),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=mo(m,m.dtype,"any",e);let x;if(i){const b=se(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const TM={kernelName:Gu,backendName:"webgl",kernelFunc:NM};class EM{constructor(t,e,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class RM{constructor(t,e,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,I(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=t[t.length-1],i=Math.ceil(r/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=_t(l),u=Re("coords",l);let h,d;if(i===1){d=l+1;const T=_t(d);h=`
        ${T} sourceLocR = ${T}(${u.join()}, 0);
        ++${u[l-1]};
        ${T} sourceLocG = ${T}(${u.join()}, 0);
        ++${u[l-2]};
        ${T} sourceLocA = ${T}(${u.join()}, 0);
        --${u[l-1]};
        ${T} sourceLocB = ${T}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const p=["x","y","z","w","u","v"].slice(0,d),f="."+p[d-1],m=p.map(T=>"int "+T),g=Re("sourceLocR",d-1).concat("inIdx.r"),x=Re("sourceLocG",d-1).concat("inIdx.g"),b=Re("sourceLocB",d-1).concat("inIdx.b"),y=Re("sourceLocA",d-1).concat("inIdx.a"),w=s==="max"?"greaterThan":"lessThan",v=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${y.join()})));`,$=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${y.join()}) : 0.)`,N=o?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${p.join()}),
                                          vec2(${p.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${p.join()}),
                               vec2(${p.slice(-2).join()}));
      }
      ${N}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},
          sourceLocB${f}, sourceLocA${f}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${$};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${v}
          vec4 candidate = ${$};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${w}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function vy(n,t,e,s=null){let o=t.shape[0],r=t.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=ac(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},l=new EM(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=vy(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function Cy(n,t,e,s=null){const o=s!=null?s.shape:t.shape,r=o[o.length-1],i=ac(r),a=new RM(o,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=Cy(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function $y(n,t,e,s){const o=[e];if(ye("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,t.shape.length),!V().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const r=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),r.push(l));const[c,u]=fe(l.shape,o),h=H(u),d=et({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});r.push(d);const p=vy(n,d,s);r.push(p);const f=et({inputs:{x:p},backend:n,attrs:{shape:c}});return r.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return Cy(n,t,s)}function AM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=wt(r,o.shape);const a=Xt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=De({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),ye("argMax",[i[0]],l.shape.length);const u=$y(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const DM={kernelName:Ja,backendName:"webgl",kernelFunc:AM};function FM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=wt(r,o.shape);const a=Xt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=De({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),ye("argMin",[i[0]],l.shape.length);const u=$y(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const _M={kernelName:Qa,backendName:"webgl",kernelFunc:FM};const OM=pn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,LM=St({opSnippet:OM}),PM={kernelName:_r,backendName:"webgl",kernelFunc:LM};const MM=pn+"return log(x + sqrt(x * x + 1.0));",BM=St({opSnippet:MM}),zM={kernelName:Or,backendName:"webgl",kernelFunc:BM};const VM=pn+`
  return atan(x);
`,WM=St({opSnippet:VM}),UM={kernelName:Lr,backendName:"webgl",kernelFunc:WM};const GM=fp+`
  return atan(a, b);
`,HM=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+fo+`
  return result;
`,jM=we({opSnippet:GM,packedOpSnippet:HM}),XM={kernelName:Mr,backendName:"webgl",kernelFunc:jM};const KM=pn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,qM=St({opSnippet:KM}),YM={kernelName:Pr,backendName:"webgl",kernelFunc:qM};class Er{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.top,f=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${p}, ${f});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?g:x:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const y="max";let w=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(w="avgValue / max(count, 1.0)");const v=Math.floor(i/4)*4,$=i%4,N=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${y}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${p}, ${f});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${v}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${N}
          }

          int xC = xCCorner + ${v};
          if (${$===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${$===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${$===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${N}
          }
        }
        setOutput(${w});
      }
    `}}class gp{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const y=e==="avg";let w="0.0";if(y||(w="-1.0 / 1e-20"),s){this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${g}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${p};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${f};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${f} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const v="max";let $=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&($="avgValue / max(count, 1.0)");const N=Math.floor(i/4)*4,T=i%4,k=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float initializationValue = ${w};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${w});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${N}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${k}
            }

            int xC = xCCorner + ${N};
            if (${T===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${T===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${T===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${k}
            }
          }
        }
        setOutput(${$});
      }
    `}}function ZM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;Hi(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(Ie(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=hn(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))return je({inputs:{x:o},backend:e});const h=new Er(u,"avg",!1);return e.runWebGLProgram(h,[o],"float32")}const JM={kernelName:tl,backendName:"webgl",kernelFunc:ZM};function QM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=ns(o.shape,r,i,u,a,l,c),d=new gp(h,"avg",!1);return e.runWebGLProgram(d,[o],"float32")}const tB={kernelName:el,backendName:"webgl",kernelFunc:QM};class eB{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${h});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class nB{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=p-1-t.padInfo.left,x=1/(e*s*o);this.userCode=`
      const ivec3 pads = ivec3(${f}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function sB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=ns(i.shape,a,l,h,c,u),p=new nB(d);return e.runWebGLProgram(p,[o],i.dtype)}const oB={kernelName:ju,backendName:"webgl",kernelFunc:sB};function rB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;Hi([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=hn(i.shape,a,l,1,c),h=new eB(u);return e.runWebGLProgram(h,[o],i.dtype)}const iB={kernelName:Hu,backendName:"webgl",kernelFunc:rB};function aB(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;return Xa({a:o,b:r,transposeA:i,transposeB:a,backend:e})}const lB={kernelName:nl,backendName:"webgl",kernelFunc:aB};class cB{constructor(t,e,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],mt(t,e),mt(t,s);let a="0.0";o!=null&&(mt(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";r!=null&&(mt(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class uB{constructor(t,e,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],mt(t,e),mt(t,s);let a="vec4(0.0)";o!=null&&(mt(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";r!=null&&(mt(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const hB=({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=n;I(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),I(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),I(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,o,r];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=V().getBool("WEBGL_PACK_NORMALIZATION")?new uB(s.shape,o.shape,r.shape,u,h,l):new cB(s.shape,o.shape,r.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)},dB={kernelName:fl,backendName:"webgl",kernelFunc:hB};class pB{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=_t(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=fB(this.rank);let o;const r=t.map((i,a)=>`sourceLoc.${Fu[a]} = start[${a}] + coords.${Fu[a]};`);o=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const Fu=["x","y","z","w","u","v"];function fB(n){if(n===1)return"sourceLoc";if(n<=6)return Fu.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class mB{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=_t(this.rank),s=Re("coords",this.rank),o=Re("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${t[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((u,h)=>`start[${h}]`).join()});`:t.map((u,h)=>`${o[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function gB(n,t,e,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(e,n.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=hd(t,lt(n.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),r}function er(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s,[a,l]=ic(o,r,i);if(ld(o,a,l),H(l)===0)return e.makeTensorInfo(l,o.dtype,[]);if(e.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=e.texData.get(o.dataId),d=lP(h.values,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,d)}const{isPacked:c}=e.texData.get(o.dataId),u=ud(o.shape,a,l);if(c||!u){const h=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new mB(l):new pB(l),d=[a];return e.runWebGLProgram(h,[o],o.dtype,d)}return e.uploadToGPU(o.dataId),gB(o,a,l,e)}const xB={kernelName:Ul,backendName:"webgl",kernelFunc:er};const bB=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;I(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((b,y)=>b*y),l=Di(o.shape,r,a),c=Fi(l.length,r.length),u=_i(o.shape,r,a),h=gd(i,r.length),d=xd(u,i,r.length),p=[],f=et({inputs:{x:o},backend:e,attrs:{shape:l}}),m=De({inputs:{x:f},backend:e,attrs:{perm:c}}),g=et({inputs:{x:m},backend:e,attrs:{shape:u}}),x=er({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return p.push(f),p.push(m),p.push(g),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},yB={kernelName:sl,backendName:"webgl",kernelFunc:bB};function wB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.readSync(o.dataId),l=e.readSync(r.dataId),c=uy(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const vB={kernelName:Xu,backendName:"webgl",kernelFunc:wB};const CB=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,$B=`
  return float(int(a.r) & int(b.r));
`;function IB(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=V().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=V().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,o])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(o.dataId).values,[u,h]=DL(s.shape,o.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),p=e.texData.get(d.dataId);return p.values=u,d}let a;return r?a=new Qo(CB,s.shape,o.shape,!1):a=new oo($B,s.shape,o.shape),e.runWebGLProgram(a,[s,o],s.dtype)}const kB={kernelName:Ku,backendName:"webgl",kernelFunc:IB};function SB(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.readSync(s.dataId),i=e.readSync(o.dataId),a=mt(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const NB={kernelName:gm,backendName:"webgl",kernelFunc:SB};const TB="return float(a != b);",Iy=we({opSnippet:TB,cpuKernelImpl:QL,dtype:"bool"}),EB={kernelName:Al,backendName:"webgl",kernelFunc:Iy};function Xi(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return je({inputs:{x:o.complexTensorInfos.real},backend:e})}const RB={kernelName:yh,backendName:"webgl",kernelFunc:Xi};const AB="return float(int(x));";function DB(n,t){const e=new Dn(n.shape,AB),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function _u(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return je({inputs:{x:o},backend:e});const i=de(o.shape),a=_u({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),l=Ds({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=Xi({inputs:{input:o},backend:e}),a=_u({inputs:{x:i},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(i),a}if(!hm(o.dtype,r)){const i=je({inputs:{x:o},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(e.shouldExecuteOnCPU([o])){const i=e.texData.get(o.dataId).values,[a,l,c]=FL(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}if(r==="int32")return DB(o,e);if(r==="bool"){const i=e.makeTensorInfo([],"bool",ve("bool",1)),l=Iy({inputs:{a:o,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const FB={kernelName:Br,backendName:"webgl",kernelFunc:_u};const qf="return ceil(x);",_B=St({opSnippet:qf,packedOpSnippet:qf,cpuKernelImpl:_L}),OB={kernelName:zr,backendName:"webgl",kernelFunc:_B};class LB{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class PB{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function MB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{clipValueMin:r,clipValueMax:i}=s;let a;V().getBool("WEBGL_PACK_CLIP")?a=new PB(o.shape):a=new LB(o.shape);const l=[[r],[i]];return e.runWebGLProgram(a,[o],o.dtype,l)}const BB={kernelName:Vr,backendName:"webgl",kernelFunc:MB};class zB{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function Yf(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function VB(n){const{inputs:t,backend:e}=n,{x:s}=t,o=e.texData.get(s.dataId),r=new zB(s.shape),i=[Yf(s,o.complexTensorInfos.real),Yf(s,o.complexTensorInfos.imag)];return e.runWebGLProgram(r,i,i[0].dtype)}const WB={kernelName:ol,backendName:"webgl",kernelFunc:VB};class UB{constructor(t){this.outputShape=[],this.outputShape=On(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=e.length,r=e[e.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class GB{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=On(t,e);const s=this.outputShape,o=s.length,r=_t(o),i=Re("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${ua(a,c,g)}),
            vec2(${ua(u,c,g)}));
        }`}const p=l.length,f=l[l.length-1];d+=`
        return getChannel(
          getT${p}(${ua(a,c,f)}),
          vec2(${ua(u,c,f)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${d}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${s[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${s[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${s[o-2]} &&
            ${i[o-1]} < ${s[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function ua(n,t,e){const s=n.indexOf(t);return n.map((r,i)=>i===s?`${r} - ${e}`:r).join()}function Sc(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return je({inputs:{x:o.complexTensorInfos.imag},backend:e})}const HB={kernelName:hh,backendName:"webgl",kernelFunc:Sc};function mr(n,t,e){const s=n[0].dtype;if(s==="complex64"){const p=n.map(b=>Xi({inputs:{input:b},backend:e})),f=n.map(b=>Sc({inputs:{input:b},backend:e})),m=mr(p,t,e),g=mr(f,t,e),x=Ds({inputs:{real:m,imag:g},backend:e});return p.forEach(b=>e.disposeIntermediateTensorInfo(b)),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let o=e.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const p=n.map(w=>{const $=[-1,H(w.shape.slice(t))];return et({inputs:{x:w},backend:e,attrs:{shape:$}})}),f=p.map(w=>({vals:e.readSync(w.dataId),shape:w.shape})),m=On(p.map(w=>w.shape),1),g=p[0].shape[0]===1,x=OL(f,m,s,g),b=On(n.map(w=>w.shape),t),y=e.makeTensorInfo(b,s,x);return p.forEach(w=>e.disposeIntermediateTensorInfo(w)),y}const r=n.filter(p=>H(p.shape)>0),i=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const p=i?new Dn(n[0].shape,cs):new ps(n[0].shape,cs);return e.runWebGLProgram(p,n,s)}const a=V().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>a){const p=[];for(let m=0;m<r.length;m+=a){const g=r.slice(m,m+a);p.push(mr(g,t,e))}const f=mr(p,t,e);for(const m of p)e.disposeIntermediateTensorInfo(m);return f}if(i){const p=new GB(r.map(f=>f.shape),t);return e.runWebGLProgram(p,r,s)}const{tensors2D:l,outShape:c}=jB(r,t,e),u=new UB(l.map(p=>p.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(p=>e.disposeIntermediateTensorInfo(p));const d=et({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function jB(n,t,e){const s=On(n.map(r=>r.shape),t);return{tensors2D:n.map(r=>et({inputs:{x:r},attrs:{shape:[-1,H(r.shape.slice(t))]},backend:e})),outShape:s}}function ky(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=wt(o,t[0].shape)[0],i=t.map(c=>c.shape);pd(i,r);const a=On(t.map(c=>c.shape),r);if(H(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>H(c.shape)>0);return l.length===1?je({inputs:{x:l[0]},backend:e}):mr(l,r,e)}const XB={kernelName:rl,backendName:"webgl",kernelFunc:ky};class Sy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,y=g?3:1;let w="",v="";s&&(o?w=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?w=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:w=`
          float activation(float x) {
            ${s}
          }
        `,v="result = activation(result);");const $=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${w}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${y}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${f}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${f}) *
                    getW(wR, wC, ${f}, d2);
              } else {
                dotProd +=
                    getX(batch, ${f}, xR, xC) *
                    getW(wR, wC, ${f}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2),
                getW(wR, wC, ${f} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1),
                  getX(batch, xR, xC, ${f} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC),
                  getX(batch, ${f} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${$}
        ${v}
        setOutput(result);
      }
    `}}class KB{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,o=t.padInfo.left,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${f}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${f}) *
                  getW(wF, wR, wC, ${f}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1),
                  getX(batch, xF, xR, xC, ${f} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2),
                  getW(wF, wR, wC, ${f} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Ny{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Se(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)d+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)d+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(h+1)/2;g++){const x=g*2;if(d+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?d+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?Pu(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:d+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?d+=`
                     xC${x+1} = xTexelC${x};
                     `:d+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(d+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(d+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(d+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let p="",f="";s&&(o?p=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:r?p=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:p=`vec4 activation(vec4 x) {
           ${s}
         }`,f="result = activation(result);");const m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${p}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${f}
         setOutput(result);
       }
     `}}class qB{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);const{dataFormat:s}=e,o=Fe(),r=s==="channelsLast",i=r?1:2,a=r?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${u};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${o.output} = result;
      }
    `}}function Ka(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function Ty({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,p=e.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(r!=null){const w=Ka(r.shape,p);w!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:w}}),x.push(r))}if(o!=null){const w=Ka(o.shape,p);w!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:w}}),x.push(o))}if(!((h===1||d===1)&&u>wy)&&c.isPacked&&p&&c.texture!=null&&l[2]%2!==0&&Et(c.shape.slice(-3),l.slice(-3))){const w=l[0]*l[1]*(l[2]+1),v={dataId:n.dataId,shape:[1,w,e.inChannels],dtype:n.dtype},$=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,I(ja(c.shape,v.shape),()=>`packed reshape ${c.shape} to ${v.shape} isn't free`);const N=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(N);const T=Xa({a:v,b:N,backend:s,transposeA:f,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),k=s.texData.get(T.dataId);I(k.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=$,k.shape=e.outShape,g=je({inputs:{x:T},backend:s}),g.shape=e.outShape,x.push(T)}else{const w=e.outHeight*e.outWidth,v=et({inputs:{x:n},backend:s,attrs:{shape:p?[e.batchSize,w,e.inChannels]:[e.batchSize,e.inChannels,w]}}),$=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),N=Xa({a:p?v:$,b:p?$:v,transposeA:!p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i});g=et({inputs:{x:N},backend:s,attrs:{shape:e.outShape}}),x.push(v),x.push($),x.push(N)}for(const w of x)s.disposeIntermediateTensorInfo(w);return g}function Ey({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:p}=e,f=p==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,y=!1,w=[];if(r!=null){const W=Ka(r.shape,f);W!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:W}}),w.push(r))}if(o!=null){const W=Ka(o.shape,f);W!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:W}}),w.push(o))}const v=et({inputs:{x:t},backend:s,attrs:{shape:[1,m,H(t.shape)/m]}});w.push(v);const $=new qB(x,e),N=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],T=s.runWebGLProgram($,[n],"float32",N),k=et({inputs:{x:T},backend:s,attrs:{shape:x}});w.push(T),w.push(k);const S=o!=null,C=r!=null,R=a==="leakyrelu",_=a?Tr(a,!0):null,M=new yy(f?k.shape:v.shape,f?v.shape:k.shape,f?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,y,S,_,C,R),P=f?[k,v]:[v,k];if(o&&P.push(o),C&&P.push(r),R){const W=s.makeTensorInfo([],"float32",ks(i,"float32"));P.push(W),w.push(W)}const B=s.runWebGLProgram(M,P,"float32"),G=et({inputs:{x:B},backend:s,attrs:{shape:e.outShape}});w.push(B);for(const W of w)s.disposeIntermediateTensorInfo(W);return G}function YB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=ss(l),d=be(o.shape,r.shape,i,c,a,u,!1,h);let p;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))p=Ty({x:o,filter:r,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&V().getBool("WEBGL_EXP_CONV")){const m=new Ny(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];p=e.runWebGLProgram(m,[o,r],"float32",g)}else if(V().getBool("WEBGL_CONV_IM2COL"))p=Ey({x:o,filter:r,convInfo:d,backend:e});else{const m=new Sy(d);p=e.runWebGLProgram(m,[o,r],"float32")}const f=et({inputs:{x:p},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(p),f}const ZB={kernelName:il,backendName:"webgl",kernelFunc:YB};class JB{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class QB{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${h}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class tz{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${r};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ez{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=o-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function nz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=ss(l),d=be(o.shape,u,i,1,a,c,!1,h),p=new JB(d);return e.runWebGLProgram(p,[o,r],"float32")}const sz={kernelName:Yu,backendName:"webgl",kernelFunc:nz};class oz{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Se(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,o=e-1-t.padInfo.top,r=s-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${r});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${t.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${t.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}function rz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=ss(c),d=be(i,r.shape,a,1,l,u,!1,h);if(V().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const p=[[d.strideHeight,d.strideWidth]],f=new oz(d);return e.runWebGLProgram(f,[o,r],"float32",p)}else{const p=new QB(d);return e.runWebGLProgram(p,[o,r],"float32")}}const iz={kernelName:al,backendName:"webgl",kernelFunc:rz};function az(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Ss(o.shape,r.shape,i,l,a),u=new KB(c);return e.runWebGLProgram(u,[o,r],"float32")}const lz={kernelName:ll,backendName:"webgl",kernelFunc:az};function cz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s,c=Ss(o.shape,l,i,1,a),u=new tz(c);return e.runWebGLProgram(u,[o,r],"float32")}const uz={kernelName:Zu,backendName:"webgl",kernelFunc:cz};function hz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s,c=Ss(l,r.shape,a,1,i),u=new ez(c);return e.runWebGLProgram(u,[o,r],"float32")}const dz={kernelName:Ju,backendName:"webgl",kernelFunc:hz};const pz=tr+`
  return cos(x);
`,fz=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${fo}
  return result;
`,mz=St({opSnippet:pz,packedOpSnippet:fz}),gz={kernelName:Wr,backendName:"webgl",kernelFunc:mz};const xz=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,bz=St({opSnippet:xz}),yz={kernelName:Ur,backendName:"webgl",kernelFunc:bz};class wz{constructor(t,e,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const p=o==="bilinear"?1:0,[f,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[y,w,v]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${y});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${w};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${f} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${v};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${p} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const vz=n=>{const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new wz(o.shape,r.shape,a,l,c);return e.runWebGLProgram(u,[o,r,i],"float32")},Cz={kernelName:th,backendName:"webgl",kernelFunc:vz};var Rr;(function(n){n.Prod="*",n.Sum="+"})(Rr||(Rr={}));class Zf{constructor(t,e,s,o){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===Rr.Prod?"1.0":"0.0",a=s?i:`getX(${Jf(r,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=o?`end != ${l-1}`:"end != 0",u=o?"end + 1":"end - 1"):(c=o?`end + pow2 < ${l}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${_t(r)} coords = getOutputCoords();
        int end = ${Qf(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${Qf(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${Jf(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Jf(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Qf(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Ry(n,t,e,s,o,r){const i=t.shape.length,a=Xt([s],i);let l=t;a!=null&&(l=De({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=Qt(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=je({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const p=new Zf(n,l.shape,!1,r),f=[[d]],m=h;h=e.runWebGLProgram(p,[h],h.dtype,f),e.disposeIntermediateTensorInfo(m)}if(o){const d=new Zf(n,l.shape,o,r),p=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(p)}if(a!=null){const d=Ns(a),p=De({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),p}return h}function $z(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Ry(Rr.Prod,o,e,r,i,a)}const Iz={kernelName:Qu,backendName:"webgl",kernelFunc:$z};function kz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Ry(Rr.Sum,o,e,r,i,a)}const Sz={kernelName:cl,backendName:"webgl",kernelFunc:kz};function Nz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=uy(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=AL(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const Tz={kernelName:eh,backendName:"webgl",kernelFunc:Nz};class Ez{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function Rz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],c=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],h=l*r,d=c*r,p=u/(r*r),f=i==="NHWC"?[a,h,d,p]:[a,p,h,d],m=new Ez(f,r,i);return e.runWebGLProgram(m,[o],o.dtype)}const Az={kernelName:nh,backendName:"webgl",kernelFunc:Rz};class Ay{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Se(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(o?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${h}
        ${u}
        setOutput(result);
      }
    `}}class Dy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Se(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let p=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<h;x++)p+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;p+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<h;x++)p+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;p+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(d+1)/2;x++){const b=x*2;if(p+=`
          xC = xCCorner + ${b*c};
          `,l===1){if(b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,c===1&&b>0?p+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:p+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):p+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<h)){const y=a%2===0?Pu(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(p+=`
                  xCOffset = xC + imod(pads[1], 2) + ${y};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,c>1?p+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:p+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):y===1?p+=`
                    xC${b+1} = xTexelC${b};
                    `:p+=`
                    xCOffset = xC + ${y};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<h&&(p+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(p+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<h&&(p+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<h&&(p+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<h&&(p+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}p+=`
    }
  `,p+=`
      }
    `;let f="",m="";s&&(o?f=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?f=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:f=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${f}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${p}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}function Dz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),I(Ie(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=be(o.shape,r.shape,i,u,a,c,!0);let d;V().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new Dy(h):d=new Ay(h);const p=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[o,r],"float32",p)}const Fz={kernelName:ul,backendName:"webgl",kernelFunc:Dz};class _z{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Oz{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function Lz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=be(o.shape,u,i,a,l,c,!0),d=new _z(h);return e.runWebGLProgram(d,[o,r],"float32")}const Pz={kernelName:sh,backendName:"webgl",kernelFunc:Lz};function Mz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=be(u,r.shape,i,a,l,c,!0),d=new Oz(h);return e.runWebGLProgram(d,[o,r],"float32")}const Bz={kernelName:oh,backendName:"webgl",kernelFunc:Mz};class zz{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function Vz(n){const{inputs:t,backend:e}=n,{x:s}=t,o=[...s.shape,...s.shape],r=H(s.shape),i=et({inputs:{x:s},backend:e,attrs:{shape:[r]}}),a=new zz(r),l=e.runWebGLProgram(a,[i],i.dtype),c=et({inputs:{x:l},backend:e,attrs:{shape:o}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const Wz={kernelName:xm,backendName:"webgl",kernelFunc:Vz};class Uz{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${i});
      const ivec2 pads = ivec2(${h}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function Gz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Ni(o.shape,r.shape,i,a,"NHWC",l);let u;const h=new Uz(c);u=e.runWebGLProgram(h,[o,r],"float32");const d=et({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const Hz={kernelName:hl,backendName:"webgl",kernelFunc:Gz};function jz(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=kd(o,r.length);Nd(i.length,l,r);const{path:c,steps:u}=Td(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Sd(p,l[g]);let y;Ed(x)?y=r[g]:(y=De({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(y));const w=y.shape.slice();for(let v=0;v<b.length;++v)w.splice(b[v],0,1);Et(y.shape,w)||(y=et({inputs:{x:y},backend:e,attrs:{shape:w}}),f.push(y)),d===null?d=y:(d=mp({inputs:{a:y,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=kc({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const Xz={kernelName:rh,backendName:"webgl",kernelFunc:jz};const Kz="return (x >= 0.0) ? x : (exp(x) - 1.0);",qz=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Yz=St({opSnippet:Kz,packedOpSnippet:qz}),Zz={kernelName:Hr,backendName:"webgl",kernelFunc:Yz};const Jz="return (b >= 0.0) ? a : a * (b + 1.0);",Qz=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,tV=n=>{const{inputs:t,backend:e}=n,{dy:s,y:o}=t,r=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qo(Qz,s.shape,o.shape):new oo(Jz,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],s.dtype)},eV={kernelName:ih,backendName:"webgl",kernelFunc:tV};const nV=`
  return vec4(equal(a, b));
`,sV="return float(a == b);",oV=we({opSnippet:sV,packedOpSnippet:nV,dtype:"bool",cpuKernelImpl:LL}),rV={kernelName:dl,backendName:"webgl",kernelFunc:oV};const iV=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${bd};
  float a1 = ${yd};
  float a2 = ${wd};
  float a3 = ${vd};
  float a4 = ${Cd};
  float a5 = ${$d};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,aV=St({opSnippet:iV}),lV={kernelName:jr,backendName:"webgl",kernelFunc:aV};const cV=tr+`
  return exp(x);
`,uV=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Fy=St({opSnippet:cV,packedOpSnippet:uV,cpuKernelImpl:PL,dtype:"float32"}),hV={kernelName:Xr,backendName:"webgl",kernelFunc:Fy};function Ou(n){const{inputs:t,attrs:e,backend:s}=n,{dim:o}=e,{input:r}=t,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(I(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),et({inputs:{x:r},backend:s,attrs:{shape:a}})}const dV={kernelName:pl,backendName:"webgl",kernelFunc:Ou};const tm="return exp(x) - 1.0;",pV=St({opSnippet:tm,packedOpSnippet:tm,cpuKernelImpl:ML}),fV={kernelName:Kr,backendName:"webgl",kernelFunc:pV};class em{constructor(t,e,s){this.variableNames=["real","imag"];const o=e[1];this.outputShape=e;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function _y(n,t,e){const s=e.texData.get(n.dataId),o=H(n.shape),r=n.shape[n.shape.length-1],i=o/r,a=et({inputs:{x:n},backend:e,attrs:{shape:[i,r]}}),l=a.shape,c=new em("real",l,t),u=new em("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Ds({inputs:{real:d,imag:p},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p);const m=et({inputs:{x:f},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(f),m}function mV(n){const{inputs:t,backend:e}=n,{input:s}=t;return _y(s,!1,e)}const gV={kernelName:ah,backendName:"webgl",kernelFunc:mV};class xV{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Ki(n){const{backend:t,attrs:e}=n,{shape:s,value:o}=e;let{dtype:r}=e;if(r=r||Bo(o),r==="string"){const i=Yt(r,H(s));return i.fill(o),t.makeTensorInfo(s,r,i)}else{const i=new xV(s,o),a=[[o]];return t.runWebGLProgram(i,[],r,a)}}const bV={kernelName:lh,backendName:"webgl",kernelFunc:Ki};class yV{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const wV={kernelName:ch,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,o=new yV(e.shape);return s.runWebGLProgram(o,[e],e.dtype)}};const nm="return floor(x);",vV=St({opSnippet:nm,packedOpSnippet:nm,cpuKernelImpl:BL}),CV={kernelName:qr,backendName:"webgl",kernelFunc:vV};const $V=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,IV=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,kV=we({opSnippet:$V,packedOpSnippet:IV,dtype:"int32"}),SV={kernelName:Yr,backendName:"webgl",kernelFunc:kV};class NV{constructor(t){this.variableNames=["A"];const e=Fe(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class TV{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=Fe(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}}const EV={kernelName:Ww,backendName:"webgl",kernelFunc:RV};let bo,Yc=V().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function RV(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:o}=t;const{numChannels:r}=s,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[l,c]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[c,l],h=[c,l,r];if(a||i){const m=V().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(bo==null||m!==Yc)&&(Yc=m,bo=document.createElement("canvas").getContext("2d",{willReadFrequently:Yc})),bo.canvas.width=l,bo.canvas.height=c,bo.drawImage(o,0,0,l,c),o=bo.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=Ye.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);const p=V().getBool("WEBGL_PACK")?new TV(h):new NV(h),f=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),f}function AV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s,m=ss(u),g=be(o.shape,r.shape,l,h,c,d,!1,m);let x;const b=[],y=i!=null,w=a!=null,v=p==="leakyrelu",$=()=>{const T=[o,r],k=(S,C)=>{if(C==="NCHW"&&S.shape.length===1&&S.shape[0]!==1){const R=et({inputs:{x:S},backend:e,attrs:{shape:[S.shape[0],1,1]}});return b.push(R),R}return S};if(y&&T.push(k(i,u)),w&&T.push(k(a,u)),v){const S=e.makeTensorInfo([],"float32",ks(f,"float32"));T.push(S),b.push(S)}return T};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=Ty({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&V().getBool("WEBGL_EXP_CONV")){const T=p?Tr(p,!0):null,k=new Ny(g,y,T,w,v),S=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],C=$();x=e.runWebGLProgram(k,C,"float32",S)}else if(V().getBool("WEBGL_CONV_IM2COL"))x=Ey({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else{const T=p?Tr(p,!1):null,k=new Sy(g,y,T,w,v),S=$();x=e.runWebGLProgram(k,S,"float32")}const N=et({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(T=>e.disposeIntermediateTensorInfo(T)),N}const DV={kernelName:Ia,backendName:"webgl",kernelFunc:AV};function FV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:p}=s,f=[];let m=u;m==null&&(m=[1,1]),I(Ie(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=be(o.shape,r.shape,l,m,c,h,!0),x=V().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?Tr(d,x):null,y=[o,r],w=i!=null,v=a!=null,$=d==="leakyrelu";if(w&&y.push(i),v&&y.push(a),$){const S=e.makeTensorInfo([],"float32",ks(p,"float32"));y.push(S),f.push(S)}let N;x?N=new Dy(g,w,b,v,$):N=new Ay(g,w,b,v,$);const T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],k=e.runWebGLProgram(N,y,"float32",T);return f.forEach(S=>e.disposeIntermediateTensorInfo(S)),k}const _V={kernelName:Lm,backendName:"webgl",kernelFunc:FV};class OV{constructor(t,e,s,o){this.sliceDim=t,this.strides=e,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=_t(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function LV(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=o.shape,i=r[r.length-1],a=H(s.shape),[l,c,u,h]=ad(s,o),d=et({inputs:{x:o},backend:e,attrs:{shape:[c,i]}}),p=et({inputs:{x:s},backend:e,attrs:{shape:[H(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=e.readSync(o.dataId),b=e.bufferSync(s),y=zL(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,y.values)}const f=new OV(i,h,[c,u],s.shape),m=e.runWebGLProgram(f,[p,d],p.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const PV={kernelName:bm,backendName:"webgl",kernelFunc:LV};class MV{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=_t(this.rank),o=BV(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function BV(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${e[o]}`);return s.join()}function Oy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s,l=wt(i,o.shape)[0];if(V().get("DEBUG")){const b=e.readSync(r.dataId),y=o.shape[l];for(let w=0;w<b.length;++w){const v=b[w];I(v<=y-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${y-1}]`)}}const c=Ad(o,r,l,a),u=H(r.shape),h=[],d=et({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=et({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(p);const f=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=e.bufferSync(p),y=e.bufferSync(d),w=VL(y,b,f);return h.forEach(v=>e.disposeIntermediateTensorInfo(v)),e.makeTensorInfo(c.outputShape,w.dtype,w.values)}const m=new MV(d.shape,f),g=e.runWebGLProgram(m,[d,p],d.dtype);h.push(g);const x=et({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const zV={kernelName:ml,backendName:"webgl",kernelFunc:Oy};const VV="return float(a > b);",WV=`
  return vec4(greaterThan(a, b));
`,UV=we({opSnippet:VV,packedOpSnippet:WV,cpuKernelImpl:WL,dtype:"bool"}),GV={kernelName:gl,backendName:"webgl",kernelFunc:UV};const HV="return float(a >= b);",jV=`
  return vec4(greaterThanEqual(a, b));
`,XV=we({opSnippet:HV,packedOpSnippet:jV,dtype:"bool",cpuKernelImpl:UL}),KV={kernelName:Zr,backendName:"webgl",kernelFunc:XV};function qV(n){const{inputs:t,backend:e}=n,{input:s}=t;return _y(s,!0,e)}const YV={kernelName:uh,backendName:"webgl",kernelFunc:qV};const ZV="return float(!isnan(x) && !isinf(x));",JV=St({opSnippet:ZV,dtype:"bool"}),QV={kernelName:Qr,backendName:"webgl",kernelFunc:JV};const t5="return float(isinf(x));",e5=St({opSnippet:t5,dtype:"bool"}),n5={kernelName:ti,backendName:"webgl",kernelFunc:e5};const s5="return float(isnan(x));",o5=St({opSnippet:s5,dtype:"bool"}),r5={kernelName:ei,backendName:"webgl",kernelFunc:o5};const i5="return float(a < b);",a5=`
  return vec4(lessThan(a, b));
`,l5=we({opSnippet:i5,packedOpSnippet:a5,cpuKernelImpl:GL,dtype:"bool"}),c5={kernelName:bl,backendName:"webgl",kernelFunc:l5};const u5="return float(a <= b);",h5=`
  return vec4(lessThanEqual(a, b));
`,d5=we({opSnippet:u5,packedOpSnippet:h5,cpuKernelImpl:HL,dtype:"bool"}),p5={kernelName:yl,backendName:"webgl",kernelFunc:d5};function f5(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=jL(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const m5={kernelName:ym,backendName:"webgl",kernelFunc:f5};const g5=tr+`
  return x < 0.0 ? 0./0. : log(x);
`,x5=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,b5=St({opSnippet:g5,packedOpSnippet:x5,cpuKernelImpl:XL}),y5={kernelName:ni,backendName:"webgl",kernelFunc:b5};const w5=tr+`
  return log(1.0 + x);
`,v5=St({opSnippet:w5}),C5={kernelName:si,backendName:"webgl",kernelFunc:v5};const $5="return float(a >= 1.0 && b >= 1.0);",I5=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,k5=we({opSnippet:$5,packedOpSnippet:I5,dtype:"bool"}),S5={kernelName:wl,backendName:"webgl",kernelFunc:k5};const N5="return float(!(x >= 1.0));",T5=St({opSnippet:N5}),E5={kernelName:vl,backendName:"webgl",kernelFunc:T5};const R5="return float(a >= 1.0 || b >= 1.0);",A5=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,D5=we({opSnippet:R5,packedOpSnippet:A5,dtype:"bool"}),F5={kernelName:Cl,backendName:"webgl",kernelFunc:D5};class _5{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}class O5{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}const L5=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s,c=V().getBool("WEBGL_PACK_NORMALIZATION")?new O5(o.shape,r,i,a,l):new _5(o.shape,r,i,a,l);return e.runWebGLProgram(c,[o],o.dtype)},P5={kernelName:$l,backendName:"webgl",kernelFunc:L5};class M5{constructor(t,e,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const B5=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new M5(o.shape,a,l,c,u);return e.runWebGLProgram(h,[o,r,i],o.dtype)},z5={kernelName:dh,backendName:"webgl",kernelFunc:B5};function V5(n,t,e,s){const o=H(t),i=H(n.shape)/o,a=et({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=mo(a,n.dtype,"max",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function Ly(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,l=wt(r,o.shape);let c=l;const u=Xt(c,a),h=u!=null,d=e.shouldExecuteOnCPU([o]);let p=o;if(h){if(d){const y=e.texData.get(p.dataId).values,w=new Array(a);for(let N=0;N<w.length;N++)w[N]=o.shape[u[N]];const v=pp(y,o.shape,o.dtype,u,w);p=e.makeTensorInfo(w,o.dtype);const $=e.texData.get(p.dataId);$.values=v}else p=Ic(o,u,e);c=Qt(c.length,a)}ye("max",c,a);const[f,m]=fe(p.shape,c);let g=f;i&&(g=se(f,l));let x;if(d){const y=e.texData.get(p.dataId).values,w=KL(y,H(m),g,o.dtype);x=e.makeTensorInfo(g,o.dtype);const v=e.texData.get(x.dataId);v.values=w}else x=V5(p,m,g,e);return h&&e.disposeIntermediateTensorInfo(p),x}const W5={kernelName:Il,backendName:"webgl",kernelFunc:Ly};const U5=fp+`
  return max(a, b);
`,G5=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+fo+`
  return result;
`,H5=we({opSnippet:U5,packedOpSnippet:G5,cpuKernelImpl:qL}),j5={kernelName:oi,backendName:"webgl",kernelFunc:H5};function X5(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;Hi(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(Ie(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=hn(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))return je({inputs:{x:o},backend:e});const h=new Er(u,"max",!1);return e.runWebGLProgram(h,[o],o.dtype)}const K5={kernelName:kl,backendName:"webgl",kernelFunc:X5};function q5(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=ns(o.shape,r,i,u,a,c,l),d=new gp(h,"max",!1);return e.runWebGLProgram(d,[o],o.dtype)}const Y5={kernelName:Sl,backendName:"webgl",kernelFunc:q5};class Z5{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,o=t.dilationHeight,r=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=r-1-t.padInfo.top,l=i-1-t.padInfo.left,c=r*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class J5{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,p=u-1-t.padInfo.left,f=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${f} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function Q5(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=ns(i.shape,a,l,h,c,u),p=new gp(d,"max",!0),f=e.runWebGLProgram(p,[i],i.dtype),m=new J5(d),g=e.runWebGLProgram(m,[o,f],i.dtype);return e.disposeIntermediateTensorInfo(f),g}const tW={kernelName:fh,backendName:"webgl",kernelFunc:Q5};function eW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;Hi([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=hn(a.shape,l,c,1,u,h),p=!0,f=new Er(d,"max",p),m=e.runWebGLProgram(f,[a],a.dtype),g=new Z5(d),x=e.runWebGLProgram(g,[o,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const nW={kernelName:ph,backendName:"webgl",kernelFunc:eW};function sW(n,t,e,s){let o=new Er(e,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new Er(e,"max",!0,!0,t);const i=s.runWebGLProgram(o,[n],"float32");return[r,i]}const oW={kernelName:wm,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;I(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];I(Ie(r,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${c}'`);const u=hn(s.shape,o,r,c,i),[h,d]=sW(s,a,u,l);return[h,d]}};function rW(n,t,e,s){const o=H(t),i=H(n.shape)/o,a=et({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=mo(a,"float32","mean",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const iW={kernelName:Nl,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:o,axis:r}=t,i=e,a=s.shape.length,l=wt(r,s.shape);let c=l;const u=Xt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),p=[];let f=s;if(h){if(d){const w=i.texData.get(f.dataId).values,v=new Array(a);for(let T=0;T<v.length;T++)v[T]=s.shape[u[T]];const $=pp(w,s.shape,s.dtype,u,v);f=i.makeTensorInfo(v,s.dtype);const N=i.texData.get(f.dataId);N.values=$}else f=Ic(s,u,i);p.push(f),c=Qt(c.length,a)}ye("sum",c,a);const[m,g]=fe(f.shape,c);let x=m;o&&(x=se(m,l));const b=rW(f,g,x,i);for(const y of p)i.disposeIntermediateTensorInfo(y);return b}};function aW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=wt(r,o.shape);let c=l;const u=Xt(c,a);let h=o;u!=null&&(h=De({inputs:{x:o},backend:e,attrs:{perm:u}}),c=Qt(c.length,o.shape.length)),ye("min",c,a);const[d,p]=fe(h.shape,c),f=H(p),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=mo(m,m.dtype,"min",e);let x;if(i){const b=se(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const lW={kernelName:Tl,backendName:"webgl",kernelFunc:aW};const cW=fp+`
  return min(a, b);
`,uW=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+fo+`
  return result;
`,hW=we({opSnippet:cW,packedOpSnippet:uW,cpuKernelImpl:YL}),dW={kernelName:ri,backendName:"webgl",kernelFunc:hW};class pW{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const o=t.length,r=_t(o),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),c=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class fW{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((f,m)=>f[0]+t[m]+f[1]);const o=t.length,r=_t(o),i=e.map(f=>f[0]).join(","),a=e.map((f,m)=>f[0]+t[m]).join(","),l=Re("rc",o),c=Re("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let p="";if(o===1){const f=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const f=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[o-2]} += 1;
        if(${l[o-2]} < ${this.outputShape[o-2]}) {
          ${f}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[o-1]} += 1;
          if(${u}) {
            ${f}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}const mW=({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:o,mode:r}=e,i=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fW(s.shape,o,r):new pW(s.shape,o,r);return t.runWebGLProgram(i,[s],s.dtype)},gW={kernelName:El,backendName:"webgl",kernelFunc:mW};const xW=`if (b == 0.0) return NAN;
  return mod(a, b);`,bW=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+fo+`
  return result;
`,yW=we({opSnippet:xW,packedOpSnippet:bW}),wW={kernelName:ii,backendName:"webgl",kernelFunc:yW};class vW{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}}const CW=`
if (a == b) {
  return 1.0;
};
return a / b;`,$W=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Py=we({opSnippet:CW,packedOpSnippet:$W,checkOutOfBounds:!0}),IW={kernelName:Gr,backendName:"webgl",kernelFunc:Py};const sm="return a - b;",My=we({opSnippet:sm,packedOpSnippet:sm,supportsComplex:!0,cpuKernelImpl:xP}),kW={kernelName:Ci,backendName:"webgl",kernelFunc:My};function By(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=wt([r],o.shape),a=Ly({inputs:{x:o},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=se(a.shape,i),c=et({inputs:{x:a},backend:e,attrs:{shape:l}}),u=My({inputs:{a:o,b:c},backend:e}),h=Fy({inputs:{x:u},backend:e}),d=kc({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),p=et({inputs:{x:d},backend:e,attrs:{shape:l}}),f=Py({inputs:{a:h,b:p},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}const SW={kernelName:Xl,backendName:"webgl",kernelFunc:By};function NW(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s,l=a?o:By({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new vW(c,u,r),d=[[i]],p=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),p}const TW={kernelName:vm,backendName:"webgl",kernelFunc:NW};const EW=pn+`
  return -x;
`,RW=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function AW(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const r=e.texData.get(s.dataId),[i,a]=JL(r.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let o;return V().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new ps(s.shape,RW):o=new Dn(s.shape,EW),e.runWebGLProgram(o,[s],s.dtype)}const DW={kernelName:Rl,backendName:"webgl",kernelFunc:AW};const FW=nd;function _W(n){qe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),{selectedIndices:h}=FW(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const OW={kernelName:mh,backendName:"webgl",kernelFunc:_W};const LW=sd;function PW(n){qe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),{selectedIndices:d,validOutputs:p}=LW(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const MW={kernelName:gh,backendName:"webgl",kernelFunc:PW};const BW=od;function zW(n){qe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=BW(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const VW={kernelName:xh,backendName:"webgl",kernelFunc:zW};class WW{constructor(t,e,s,o){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const UW=n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s,c=H(o.shape),u=new WW(c,i,a,l),h=et({inputs:{x:o},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],r);e.disposeIntermediateTensorInfo(h);const p=[...o.shape,i],f=et({inputs:{x:d},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(d),f},GW={kernelName:Fl,backendName:"webgl",kernelFunc:UW};function qa(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const o=Xi({inputs:{input:s},backend:e}),r=qa({inputs:{x:o},backend:e}),i=Sc({inputs:{input:s},backend:e}),a=qa({inputs:{x:i},backend:e}),l=Ds({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ki({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const HW={kernelName:Yl,backendName:"webgl",kernelFunc:qa};function zy(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=Xi({inputs:{input:s},backend:e}),r=zy({inputs:{x:o},backend:e}),i=Sc({inputs:{input:s},backend:e}),a=qa({inputs:{x:i},backend:e}),l=Ds({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ki({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const jW={kernelName:Dl,backendName:"webgl",kernelFunc:zy};function XW(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Ou({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{Mu(r,u.shape,"All tensors passed to stack must have matching shapes"),I(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Ou({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=ky({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const KW={kernelName:_l,backendName:"webgl",kernelFunc:XW};class qW{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const o=t.length,r=_t(o),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class YW{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const o=t.length,r=_t(o),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=Re("rc",o),c=Re("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${l[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${l[o-2]} += 1;
       if(${l[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${l[o-1]} += 1;
         if(${u}) {`],p=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let f="";for(let m=0,g=o===1?2:4;m<g;m++)f+=`
        ${d[m]}
        if (${p}) {
          result[${m}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${m}] = getChannel(getX(${c.join()}), ${h});
        }
      `;f+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const Vy=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;if(H(o.shape)===0){const c=r.map((u,h)=>u[0]+o.shape[h]+u[1]);return Ki({backend:e,attrs:{shape:c,value:i,dtype:o.dtype}})}const a=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new YW(o.shape,r,i):new qW(o.shape,r,i),l=[[i]];return e.runWebGLProgram(a,[o],o.dtype,l)},ZW={kernelName:Ol,backendName:"webgl",kernelFunc:Vy};const JW=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,QW=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+fo+`
  return result;
`,t6=we({opSnippet:JW,packedOpSnippet:QW}),e6={kernelName:li,backendName:"webgl",kernelFunc:t6};function n6(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=[],c=wt(r,o.shape);let u=c;const h=Xt(u,a);let d=o;h!=null&&(d=De({inputs:{x:o},backend:e,attrs:{perm:h}}),u=Qt(u.length,a),l.push(d)),ye("prod",u,a);let p;if(e.shouldExecuteOnCPU([d])){const f=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=tP(d.shape,d.dtype,f,u);p=e.makeTensorInfo(g,x,m)}else{const[f,m]=fe(d.shape,u),g=H(m),x=et({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=Eh(o.dtype),y=mo(x,b,"prod",e);p=et({inputs:{x:y},backend:e,attrs:{shape:f}}),l.push(x),l.push(y)}if(i){l.push(p);const f=se(p.shape,c);p=et({inputs:{x:p},backend:e,attrs:{shape:f}})}return l.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const s6={kernelName:Pl,backendName:"webgl",kernelFunc:n6};function o6(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.readSync(x.dataId)),c=o.map(x=>x.shape),u=e.readSync(r.dataId),h=e.readSync(i.dataId),[d,p,f]=eP(l,c,u,r.shape,r.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const r6={kernelName:Cm,backendName:"webgl",kernelFunc:o6};function i6(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=nP(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const a6={kernelName:$m,backendName:"webgl",kernelFunc:i6};function l6(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),p=a.map(g=>g.shape),[f,m]=sP(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const c6={kernelName:Im,backendName:"webgl",kernelFunc:l6};const Wy=n=>{const{backend:t,attrs:e}=n,{start:s,stop:o,step:r,dtype:i}=e,a=oP(s,o,r,i);return t.makeTensorInfo([a.length],i,a)},u6={kernelName:bh,backendName:"webgl",kernelFunc:Wy};const h6="return 1.0 / x;",d6=St({opSnippet:h6}),p6={kernelName:ci,backendName:"webgl",kernelFunc:d6};const f6=pn+`
  return (x < 0.0) ? 0.0 : x;
`,m6=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,g6=St({opSnippet:f6,packedOpSnippet:m6}),x6={kernelName:ui,backendName:"webgl",kernelFunc:g6};const b6=pn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,y6=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,w6=St({opSnippet:b6,packedOpSnippet:y6}),v6={kernelName:hi,backendName:"webgl",kernelFunc:w6};class C6{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class $6{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function I6(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=V().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new $6(o.shape,l,c,r,i):new C6(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],"float32")}const k6={kernelName:zl,backendName:"webgl",kernelFunc:I6};class S6{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function N6(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new S6(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const T6={kernelName:vh,backendName:"webgl",kernelFunc:N6};class E6{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class R6{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function A6(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=V().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new R6(o.shape,l,c,r,i):new E6(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],o.dtype)}const D6={kernelName:Bl,backendName:"webgl",kernelFunc:A6};class F6{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function _6(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new F6(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const O6={kernelName:wh,backendName:"webgl",kernelFunc:_6};class L6{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const o=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,r=t.map((a,l)=>o(l)).join(","),i=_t(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}class P6{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const o=Re("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=_t(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(o.slice())};
          if(${r}){
            result.g = ${c(o.slice())};
          }
          if(${i}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${h(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(f){return d(f)}function c(f){return f[s-1]="("+f[s-1]+" + 1)",d(f)}function u(f){return f[s-2]="("+f[s-2]+" + 1)",d(f)}function h(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",d(f)}function d(f){const m=t.map((b,y)=>p(y,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function p(f,m){return e.indexOf(f)!==-1&&t[f]!==1?`${t[f]} - ${m[f]} - 1`:`${m[f]}`}}}function M6(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s,i=o.shape.length,a=wt(r,o.shape);if(i===0)return je({inputs:{x:o},backend:e});const l=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new P6(o.shape,a):new L6(o.shape,a);return e.runWebGLProgram(l,[o],o.dtype)}const B6={kernelName:Vl,backendName:"webgl",kernelFunc:M6};class z6{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],o=t[2];this.outputShape=t;let r="";typeof e=="number"?r=`float outputValue = ${e.toFixed(2)};`:r=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const V6={kernelName:Th,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=new z6(s.shape,r),[c,u]=md(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const W6=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,U6=St({opSnippet:W6}),G6={kernelName:di,backendName:"webgl",kernelFunc:U6};const H6="return inversesqrt(x);",j6=St({opSnippet:H6,cpuKernelImpl:rP}),X6={kernelName:pi,backendName:"webgl",kernelFunc:j6};class xp{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=_t(r.length),u=_t(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}class K6{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=_t(r.length),u=_t(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${e}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${e}) {
                flattenedIndex += index.yw * ${b};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${f};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}}function q6(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=lo(r,o,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,o.dtype);const p=et({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),f=et({inputs:{x:r},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;V().getBool("WEBGL_PACK")?g=new K6(l,a,p.shape.length,f.shape.length,u,d):g=new xp(l,a,p.shape.length,f.shape.length,u,d);const x=e.runWebGLProgram(g,[f,p,m],f.dtype),b=et({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const Y6={kernelName:km,backendName:"webgl",kernelFunc:q6};class Z6{constructor(t,e,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=V().getNumber("WEBGL_VERSION")===2?r:i,l=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function J6(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=new Z6(o.shape[0],o.shape[1],r.shape[1],i),l=[[o.shape[1]]];return e.runWebGLProgram(a,[o,r],"int32",l)}const Q6={kernelName:Nm,backendName:"webgl",kernelFunc:J6};class tU{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);o=l.join(),r=c.join()}const i=_t(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}function eU(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t,i=new tU(s.shape.length,o.shape,o.shape.length);return e.runWebGLProgram(i,[s,o,r],Ge(o.dtype,r.dtype))}const nU={kernelName:Wl,backendName:"webgl",kernelFunc:eU};const sU=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${lc};
  float scale = ${cc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,oU=St({opSnippet:sU}),rU={kernelName:fi,backendName:"webgl",kernelFunc:oU};const iU=tr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,aU=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,lU=St({opSnippet:iU,packedOpSnippet:aU,cpuKernelImpl:aP}),cU={kernelName:bi,backendName:"webgl",kernelFunc:lU};const uU=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,hU=St({opSnippet:uU}),dU={kernelName:xi,backendName:"webgl",kernelFunc:hU};const pU=tr+`
  return sin(x);
`,fU=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${fo}
  return result;
`,mU=St({opSnippet:pU,packedOpSnippet:fU}),gU={kernelName:mi,backendName:"webgl",kernelFunc:mU};const xU=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,bU=St({opSnippet:xU}),yU={kernelName:gi,backendName:"webgl",kernelFunc:bU};const wU=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,vU=St({opSnippet:wU}),CU={kernelName:yi,backendName:"webgl",kernelFunc:vU};const $U=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;I(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+r.length;x<o.shape.length;++x)l.push([0,0]);const c=[],u=Vy({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),h=Di(u.shape,r,a,!1),d=Fi(h.length,r.length,!1),p=_i(u.shape,r,a,!1),f=et({inputs:{x:u},backend:e,attrs:{shape:h}}),m=De({inputs:{x:f},backend:e,attrs:{perm:d}}),g=et({inputs:{x:m},backend:e,attrs:{shape:p}});return c.push(u),c.push(f),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g},IU={kernelName:Hl,backendName:"webgl",kernelFunc:$U};function kU(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=e.readSync(i.dataId)[0],[h,d,p,f,m]=cP(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const SU={kernelName:Tm,backendName:"webgl",kernelFunc:kU};function NU(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.readSync(o.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(r.dataId)),[c,u,h]=uP(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const TU={kernelName:Em,backendName:"webgl",kernelFunc:NU};function EU(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=dy(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const RU={kernelName:Rm,backendName:"webgl",kernelFunc:EU};function AU(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=dy(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const DU={kernelName:Am,backendName:"webgl",kernelFunc:AU};function FU(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=lo(r,o,a),p=!1;if(r.dtype==="string"){const x=e.bufferSync(o),b=e.bufferSync(r),y=bs(e.readSync(i.dataId)[0]),w=iP(x,b,a,d,u,c,l,h,y,p);return e.makeTensorInfo(a,w.dtype,w.values)}const f=new xp(c,l,o.shape.length,r.shape.length,h,[d,1],p),m=e.runWebGLProgram(f,[r,o,i],r.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const _U={kernelName:Dm,backendName:"webgl",kernelFunc:FU};function OU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=wt(i,o.shape)[0],l=Rd(o,r,a),c=o.shape.length,u=new Array(c).fill(0),h=o.shape.slice();return l.map(d=>{const p=[...h];p[a]=d;const f=er({inputs:{x:o},backend:e,attrs:{begin:u,size:p}});return u[a]+=d,f})}const LU={kernelName:jl,backendName:"webgl",kernelFunc:OU};const om="return sqrt(x);",PU=St({opSnippet:om,packedOpSnippet:om,cpuKernelImpl:hP}),MU={kernelName:wi,backendName:"webgl",kernelFunc:PU};const BU="return x * x;",zU=St({opSnippet:BU}),VU={kernelName:Ch,backendName:"webgl",kernelFunc:zU};const rm="return (a - b) * (a - b);",WU=we({opSnippet:rm,packedOpSnippet:rm}),UU={kernelName:vi,backendName:"webgl",kernelFunc:WU};function GU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const r=e.readSync(o.dataId),i=ts(r),a=dP(i,"string",s);return e.makeTensorInfo(o.shape,"string",a)}const HU={kernelName:$h,backendName:"webgl",kernelFunc:GU};function jU({inputs:n,attrs:t,backend:e}){const{x:s}=n,o=pn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,r=new Dn(s.shape,o);return e.runWebGLProgram(r,[s],s.dtype)}const XU={kernelName:Si,backendName:"webgl",kernelFunc:jU};class KU{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=_t(s.length),i=_t(s.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${t});
      ${r} strides = ${r}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function qU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:y,strides:w}=dd(o.shape,r,i,a,l,c,u,h,d);let v;if(m)v=et({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){I(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const N=cd(b,y,w),T=er({inputs:{x:o},backend:e,attrs:{begin:b,size:N}});v=et({inputs:{x:T},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(T)}else if(e.shouldExecuteOnCPU([o])){const T=e.readSync(o.dataId),k=yt(o.shape,o.dtype,T),S=pP(p,k,w,b);v=e.makeTensorInfo(f,o.dtype,S.values)}else{const T=new KU(b,w,p);v=e.runWebGLProgram(T,[o],o.dtype)}const $=et({inputs:{x:v},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(v),$}const YU={kernelName:Ih,backendName:"webgl",kernelFunc:qU};function ZU(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),p=e.readSync(h.dataId),[f,m]=fP(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const JU={kernelName:Fm,backendName:"webgl",kernelFunc:ZU};function QU(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(r.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=mP(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const tG={kernelName:_m,backendName:"webgl",kernelFunc:QU};function eG(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(r.dataId),a=gP(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const nG={kernelName:Om,backendName:"webgl",kernelFunc:eG};const sG="return tan(x);",oG=St({opSnippet:sG}),rG={kernelName:$i,backendName:"webgl",kernelFunc:oG};const iG=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,aG=St({opSnippet:iG}),lG={kernelName:Ii,backendName:"webgl",kernelFunc:aG};function cG(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:o,indices:r,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=lo(i,r,o.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(o.shape,r.dtype);const p=et({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),f=et({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=et({inputs:{x:o},backend:e,attrs:{shape:d}}),g=new xp(l,a,p.shape.length,f.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[f,p,m],m.dtype),b=et({inputs:{x},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const uG={kernelName:Sm,backendName:"webgl",kernelFunc:cG};class hG{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const o=_t(this.rank),r=dG(t);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function dG(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${e[o]}, ${n[o]})`);return s.join()}function Uy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const l=e.readSync(o.dataId),c=o.dtype==="string"?l.map(d=>bs(d)):l,u=yt(o.shape,o.dtype,c),h=bP(u,r);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new hG(o.shape,r);return e.runWebGLProgram(i,[o],o.dtype)}const pG={kernelName:ki,backendName:"webgl",kernelFunc:Uy};class fG{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class mG{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function Os(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function im(n){let t=1;for(;t<n;)t*=2;return t}function gG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s,a=V().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=V().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([o])||u<a||r>l){const S=e.readSync(o.dataId),[C,R]=yP(S,c,o.dtype,r,i);return[e.makeTensorInfo(C.shape,C.dtype,C.values),e.makeTensorInfo(R.shape,R.dtype,R.values)]}if(r===0)return c[c.length-1]=0,[e.makeTensorInfo(c,o.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[o,Ki({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(o.dataId),d=h!==null&&h.isPacked,p=d?e.unpackTensor(o):o,m=H(c)/u,g=et({inputs:{x:p},attrs:{shape:[m,u]},backend:e});d&&Os(e,p);const x=im(r),b=im(u);let y=null;const w=()=>y===null?[g,g]:[g,y],v=(S,C,R)=>{const _=w(),M=new fG(R),B=[[u],[y===null?1:0],[Number.NEGATIVE_INFINITY],[S],[C]],G=y;y=e.runWebGLProgram(M,_,"int32",B),Os(e,G)};for(let S=1;S<x;S*=2){const C=S*2;for(let R=S;R>=1;R/=2)v(C,R,[m,b])}for(let S=b;S>x;S/=2){const C=w(),R=new mG([m,S/2]),M=[[u],[y===null?1:0],[x]],P=y;y=e.runWebGLProgram(R,C,"int32",M),Os(e,P);const B=x/2,G=B*2;for(let W=B;W>=1;W/=2)v(G,W,y.shape)}let $=y;y=er({inputs:{x:y},backend:e,attrs:{begin:0,size:[m,r]}}),Os(e,$);let N=Oy({inputs:{x:g,indices:y},backend:e,attrs:{axis:1,batchDims:1}});Os(e,g);const T=c.slice(0,-1);T.push(r),$=y,y=et({inputs:{x:y},attrs:{shape:T},backend:e}),Os(e,$);const k=N;return N=et({inputs:{x:N},attrs:{shape:T},backend:e}),Os(e,k),[N,y]}const xG={kernelName:kh,backendName:"webgl",kernelFunc:gG};class bG{constructor(t,e,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function yG(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,p]=o.shape,[f,m]=c??[h,d],g=[u,f,m,p],x=new bG(h,d,i,a,l,g);return e.runWebGLProgram(x,[o,r],"float32")}const wG={kernelName:Sh,backendName:"webgl",kernelFunc:yG};function vG(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;Hi(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:l,indices:c}=wP(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const CG={kernelName:Nh,backendName:"webgl",kernelFunc:vG};function $G(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[r],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),p=i.shape.slice();p[r]=1;const f=new Array(l);for(let m=0;m<f.length;m++){d[r]=m;const g=er({inputs:{x:i},backend:e,attrs:{begin:d,size:p}}),x=et({inputs:{x:g},backend:e,attrs:{shape:c}});f[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const IG={kernelName:Kl,backendName:"webgl",kernelFunc:$G};class kG{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,o=t.batchSize,r=t.inSize,i=t.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${f}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${d}
        } else if (${h===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${d}
        } else if (${h===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function SG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s,a=o.shape.length,l=[];let c=0;const u=Xt([c],a);let h=o;u!=null&&(h=De({inputs:{x:o},backend:e,attrs:{perm:u}}),l.push(h),c=Qt(1,a)[0]);const d=I0(h.shape,c,i),p=H([h.shape[c]]),f=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}});l.push(f);const m=Eh(o.dtype),g=(w,v,$,N,T)=>{const k=w.shape[0],S=w.shape[1],C=$0(S,T),R={windowSize:C,inSize:S,batchSize:k,numSegments:T},_=new kG(R,v),M=e.compileAndRun(_,[w,$],N);if(l.push(M),M.shape[1]===T)return M;const P=Wy({backend:e,attrs:{start:0,stop:T,step:1,dtype:"float32"}}),B=Uy({inputs:{x:P},backend:e,attrs:{reps:[S/C]}});return l.push(P),l.push(B),g(M,v,B,N,T)},x=g(f,"unsortedSegmentSum",r,m,i),b=et({inputs:{x},backend:e,attrs:{shape:d}});let y=b;if(u!=null){l.push(b);const w=Ns(u);y=De({inputs:{x:y},backend:e,attrs:{perm:w}})}return l.forEach(w=>e.disposeIntermediateTensorInfo(w)),y}const NG={kernelName:ql,backendName:"webgl",kernelFunc:SG};const TG=[hM,pM,gM,yM,vM,IM,SM,TM,DM,_M,PM,zM,UM,XM,YM,JM,tB,oB,iB,lB,dB,yB,vB,kB,NB,FB,OB,BB,KP,WB,XB,ZB,sz,iz,lz,uz,dz,gz,yz,Cz,Iz,Sz,Tz,Az,Fz,Pz,Bz,Wz,Hz,Xz,Zz,eV,rV,lV,hV,dV,fV,gV,bV,wV,CV,SV,EV,DV,_V,PV,zV,GV,KV,XP,YV,HB,QV,n5,r5,YP,c5,p5,m5,y5,C5,S5,E5,F5,P5,z5,W5,j5,K5,Y5,tW,nW,oW,iW,lW,dW,gW,wW,TW,QP,DW,OW,MW,VW,EB,GW,jW,KW,ZW,e6,JP,s6,r6,a6,c6,u6,RB,IW,p6,x6,v6,eM,k6,T6,D6,O6,B6,V6,G6,X6,Y6,Q6,nU,rU,cU,dU,gU,yU,xB,SW,CU,IU,SU,TU,RU,DU,_U,LU,MU,VU,UU,HU,XU,YU,JU,tG,nG,kW,lM,rG,lG,uG,pG,xG,wG,cM,CG,IG,NG,HW];for(const n of TG)Pm(n);function EG(){let n=20,t=[0,2],e=20,s=[0,2],o=20,r=[0,2],i=Ke.linspace(t[0],t[1],n),a=Ke.linspace(s[0],s[1],e);Ke.linspace(r[0],r[1],o);let[l,c]=w$(i,a);Ke.zeros([e,n]),Ke.zeros([e,n]),Ke.zeros([e,n])}function RG(){new $w,EG()}RG();
