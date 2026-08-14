(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();var V=1e-6,P=typeof Float32Array<"u"?Float32Array:Array;function A(){var t=new P(16);return P!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function E(t,e,r,s,n,o,f,v,u,g,d,m,p,w,y,i){var a=new P(16);return a[0]=t,a[1]=e,a[2]=r,a[3]=s,a[4]=n,a[5]=o,a[6]=f,a[7]=v,a[8]=u,a[9]=g,a[10]=d,a[11]=m,a[12]=p,a[13]=w,a[14]=y,a[15]=i,a}function U(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F(t,e,r){var s=e[0],n=e[1],o=e[2],f=e[3],v=e[4],u=e[5],g=e[6],d=e[7],m=e[8],p=e[9],w=e[10],y=e[11],i=e[12],a=e[13],h=e[14],l=e[15],c=r[0],C=r[1],b=r[2],k=r[3];return t[0]=c*s+C*v+b*m+k*i,t[1]=c*n+C*u+b*p+k*a,t[2]=c*o+C*g+b*w+k*h,t[3]=c*f+C*d+b*y+k*l,c=r[4],C=r[5],b=r[6],k=r[7],t[4]=c*s+C*v+b*m+k*i,t[5]=c*n+C*u+b*p+k*a,t[6]=c*o+C*g+b*w+k*h,t[7]=c*f+C*d+b*y+k*l,c=r[8],C=r[9],b=r[10],k=r[11],t[8]=c*s+C*v+b*m+k*i,t[9]=c*n+C*u+b*p+k*a,t[10]=c*o+C*g+b*w+k*h,t[11]=c*f+C*d+b*y+k*l,c=r[12],C=r[13],b=r[14],k=r[15],t[12]=c*s+C*v+b*m+k*i,t[13]=c*n+C*u+b*p+k*a,t[14]=c*o+C*g+b*w+k*h,t[15]=c*f+C*d+b*y+k*l,t}function M(t,e,r){var s=Math.sin(r),n=Math.cos(r),o=e[4],f=e[5],v=e[6],u=e[7],g=e[8],d=e[9],m=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+g*s,t[5]=f*n+d*s,t[6]=v*n+m*s,t[7]=u*n+p*s,t[8]=g*n-o*s,t[9]=d*n-f*s,t[10]=m*n-v*s,t[11]=p*n-u*s,t}function O(t,e,r){var s=Math.sin(r),n=Math.cos(r),o=e[0],f=e[1],v=e[2],u=e[3],g=e[8],d=e[9],m=e[10],p=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n-g*s,t[1]=f*n-d*s,t[2]=v*n-m*s,t[3]=u*n-p*s,t[8]=o*s+g*n,t[9]=f*s+d*n,t[10]=v*s+m*n,t[11]=u*s+p*n,t}function G(t,e,r){var s=Math.sin(r),n=Math.cos(r),o=e[0],f=e[1],v=e[2],u=e[3],g=e[4],d=e[5],m=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+g*s,t[1]=f*n+d*s,t[2]=v*n+m*s,t[3]=u*n+p*s,t[4]=g*n-o*s,t[5]=d*n-f*s,t[6]=m*n-v*s,t[7]=p*n-u*s,t}function j(t,e,r,s,n){var o=1/Math.tan(e/2);if(t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,n!=null&&n!==1/0){var f=1/(s-n);t[10]=(n+s)*f,t[14]=2*n*s*f}else t[10]=-1,t[14]=-2*s;return t}var X=j;function H(t,e,r,s){var n,o,f,v,u,g,d,m,p,w,y=e[0],i=e[1],a=e[2],h=s[0],l=s[1],c=s[2],C=r[0],b=r[1],k=r[2];return Math.abs(y-C)<V&&Math.abs(i-b)<V&&Math.abs(a-k)<V?U(t):(d=y-C,m=i-b,p=a-k,w=1/Math.sqrt(d*d+m*m+p*p),d*=w,m*=w,p*=w,n=l*p-c*m,o=c*d-h*p,f=h*m-l*d,w=Math.sqrt(n*n+o*o+f*f),w?(w=1/w,n*=w,o*=w,f*=w):(n=0,o=0,f=0),v=m*f-p*o,u=p*n-d*f,g=d*o-m*n,w=Math.sqrt(v*v+u*u+g*g),w?(w=1/w,v*=w,u*=w,g*=w):(v=0,u=0,g=0),t[0]=n,t[1]=v,t[2]=d,t[3]=0,t[4]=o,t[5]=u,t[6]=m,t[7]=0,t[8]=f,t[9]=g,t[10]=p,t[11]=0,t[12]=-(n*y+o*i+f*a),t[13]=-(v*y+u*i+g*a),t[14]=-(d*y+m*i+p*a),t[15]=1,t)}function z(){var t=new P(3);return P!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function S(t,e,r){var s=new P(3);return s[0]=t,s[1]=e,s[2]=r,s}(function(){var t=z();return function(e,r,s,n,o,f){var v,u;for(r||(r=3),s||(s=0),n?u=Math.min(n*r+s,e.length):u=e.length,v=s;v<u;v+=r)t[0]=e[v],t[1]=e[v+1],t[2]=e[v+2],o(t,t,f),e[v]=t[0],e[v+1]=t[1],e[v+2]=t[2];return e}})();function B(t,e){return t.length==e.length&&t[0].length==e[0].length}var _;(t=>{class e{X;Y;Z;constructor(a){this.X=a[0],this.Y=a[1],this.Z=a[2]}}t.Vector3=e;function r(i,a){return Math.floor(Math.random()*(a-i+1)+i)}t.randomIntFromInterval=r;function s(i,a,h){let l=A();return F(l,i,a),F(l,l,h),l}t.multiply3Mat=s;function n(i,a,h){const l=(a-i)/(h-1);let c=[],C=0;for(let b=0;b<h-1;b++)C=i+l*b,c.push(C);return c.push(a),c}t.linspace=n;function o(i){let a=new Array(i[0]);for(let h=0;h<a.length;++h)a[h]=new Array(i[1]),a[h].fill(0);return a}t.zeros=o;function f(i){return Array.from({length:i[0]},()=>o([i[1],i[2]]))}t.zeros3D=f;function v(i){let a=o([i.length,i[0].length]);for(let h=0;h<i.length;h++)for(let l=0;l<i[h].length;l++)a[h][l]=i[h][l];return a}t.matCopy=v;function u(i,a){if(B(i,a)){console.error(`Operand sizes don't match: (${i.length},${i[0].length}), (${a.length},${a[0].length})`);return}let h=t.zeros([i.length,i[0].length]);for(let l=0;l<i.length;++l)for(let c=0;c<i[0].length;++c)h[l][c]=i[l][c]+a[l][c];return h}t.matAdd=u;function g(i,a){if(!B(i,a))return console.error(`Operand sizes don't match: (${i.length},${i[0].length}), (${a.length},${a[0].length})`),-1;let h=t.zeros([i.length,i[0].length]);for(let l=0;l<h.length;++l)for(let c=0;c<h[l].length;++c)h[l][c]=i[l][c]*a[l][c];return h}t.matHadamardProduct=g;function d(i,a){let h=t.zeros([i.length,i[0].length]);for(let l=0;l<i.length;++l)for(let c=0;c<i[l].length;++c)h[l][c]*=a;return h}t.matConstantProduct=d;function m(i,a){if(!B(i,a)){console.error(`Operand sizes don't match: (${i.length},${i[0].length}), (${a.length},${a[0].length})`);return}let h=t.zeros([i.length,i[0].length]);for(let l=0;l<h.length;++l)for(let c=0;c<h[l].length;++c)h[l][c]=i[l][c]+a[l][c];return h}t.matSum=m;function p(i,a){if(!B(i,a)){console.error(`Operand sizes don't match: (${i.length},${i[0].length}), (${a.length},${a[0].length})`);return}let h=t.zeros([i.length,i[0].length]);for(let l=0;l<h.length;++l)for(let c=0;c<h[l].length;++c)h[l][c]=i[l][c]-a[l][c];return h}t.matDiff=p;function w(i,a){let h=t.zeros([i.length,i[0].length]);for(let l=0;l<h.length;++l)for(let c=0;c<h[l].length;++c)h[l][c]=i[l][c]-a;return h}t.matConstDiff=w;function y(i,a){let h=t.zeros([i.length,i[0].length]);for(let l=0;l<h.length;++l)for(let c=0;c<h[l].length;++c)h[l][c]=i[l][c]+a;return h}t.matConstSum=y})(_||(_={}));class Z{position=new Float32Array([0,0,0]);rotation=new Float32Array([0,0,0]);origin=new Float32Array([0,0,0]);scale=new Float32Array([1,1,1]);name="Object";model;S;R;T;constructor(e){this.S=A(),this.R=A(),this.T=A(),this.model=A(),e?this.setTransformation(e.parameters):this.setTransformation()}get RotationX(){return this.rotation[0]}get RotationY(){return this.rotation[1]}get RotationZ(){return this.rotation[2]}get ScaleX(){return this.scale[0]}get ScaleY(){return this.scale[1]}get ScaleZ(){return this.scale[2]}get X(){return this.position[0]}get Y(){return this.position[1]}get Z(){return this.position[2]}get Position(){return this.position}get Rotation(){return this.rotation}get Scale(){return this.scale}set RotationX(e){this.rotation[0]=e,this.makeRotation(this.rotation)}set RotationY(e){this.rotation[1]=e,this.makeRotation(this.rotation)}set RotationZ(e){this.rotation[2]=e,this.makeRotation(this.rotation)}get ModelMatrix(){return this.model}set X(e){this.position[0]=e,this.makeTranslation(this.position),this.makeModel()}set Y(e){this.position[1]=e,this.makeTranslation(this.position),this.makeModel()}set Z(e){this.position[2]=e,this.makeTranslation(this.position),this.makeModel()}set ScaleX(e){this.scale[0]=e,this.makeScale(this.scale),this.makeModel()}set ScaleY(e){this.scale[1]=e,this.makeScale(this.scale),this.makeModel()}set ScaleZ(e){this.scale[2]=e,this.makeScale(this.scale),this.makeModel()}setTransformation(e){e&&(this.position[0]=e.X?e.X:0,this.position[1]=e.Y?e.Y:0,this.position[2]=e.Z?e.Z:0,this.rotation[0]=e.RotX?e.RotX:0,this.rotation[1]=e.RotY?e.RotY:0,this.rotation[2]=e.RotZ?e.RotZ:0,this.scale[0]=e.ScaleX?e.ScaleX:1,this.scale[1]=e.ScaleY?e.ScaleY:1,this.scale[2]=e.ScaleZ?e.ScaleZ:1,this.initTRS(),this.makeModel())}makeRotX(e){const r=Math.cos(e),s=Math.sin(e);return E(1,0,0,0,0,r,-s,0,0,s,r,0,0,0,0,1)}makeRotY(e){const r=Math.cos(e),s=Math.sin(e);return E(r,0,s,0,0,1,0,0,-s,0,r,0,0,0,0,1)}makeRotZ(e){const r=Math.cos(e),s=Math.sin(e);return E(r,-s,0,0,s,r,0,0,0,0,1,0,0,0,0,1)}makeScale(e){this.S=E(e[0],0,0,0,0,e[1],0,0,0,0,e[2],0,0,0,0,1)}makeTranslation(e){this.T=E(1,0,0,0,0,1,0,0,0,0,1,0,e[0],e[1],e[2],1)}makeRotation(e){return _.multiply3Mat(this.makeRotX(e[0]),this.makeRotY(e[1]),this.makeRotZ(e[2]))}initTRS(){this.makeTranslation(this.Position),this.makeRotation(this.Rotation),this.makeScale(this.Scale)}makeModel(){this.model=_.multiply3Mat(this.T,this.R,this.S)}}class $ extends Z{Active=!1;fovy=2*Math.PI/5;aspect=16/9;near=.1;far=1e3;LookAt=S(0,0,0);constructor(e,r){super(),this.aspect=e,r?this.Active=r:this.Active=!1}getViewMatrix(){let e=A();return H(e,S(this.X,this.Y,this.Z),this.LookAt,S(0,1,0)),M(e,e,this.RotationX),O(e,e,this.RotationY),G(e,e,this.RotationZ),e}getProjectionMatrix(){let e=A();return X(e,this.fovy,this.aspect,this.near,this.far),e}getProjectionArray(){var e=new Float32Array(16);return e.set(this.getCameraViewProjMatrix(),0),e}getProjectionNumberArray(){return this.getCameraViewProjMatrix()}getCameraViewProjMatrix(){const e=A(),r=this.getViewMatrix(),s=this.getProjectionMatrix();return F(e,s,r),e}}class W{input;bindings=[];mousePos=[0,0];lastMousePos=[0,0];mouseWheel_deltaY=0;get MousePos(){return this.mousePos}get LastMousePos(){return this.lastMousePos}get MouseWheel_deltaY(){return this.mouseWheel_deltaY}constructor(e){window.onkeydown=r=>this.kbKeyDownCallback(r),window.onkeyup=r=>this.kbKeyUpCallback(r),e.onmousedown=r=>this.msDownCallback(r),e.onmouseup=r=>this.msUpCallback(r),e.onmousemove=r=>this.msMoveCallback(r),e.onwheel=r=>this.msScrollCallback(r),e.oncontextmenu=r=>!1,this.input=new Map}checkBindings(){this.bindings.forEach(e=>{e.CheckIfPressed(this.input)})}kbKeyUpCallback(e){this.input.delete(e.key.toLowerCase()),this.checkBindings()}kbKeyDownCallback(e){this.input.set(e.key.toLowerCase(),0),this.checkBindings()}clickAndCheckBindings(e){this.input.set(e,0),this.checkBindings()}clickUpAndCheckBindings(e){this.input.delete(e),this.checkBindings()}msDownCallback(e){switch(e.button){case 0:this.clickAndCheckBindings("left_click");break;case 1:this.clickAndCheckBindings("wheel_click");break;case 2:this.clickAndCheckBindings("right_click");break}}msUpCallback(e){switch(e.button){case 0:this.clickUpAndCheckBindings("left_click");break;case 1:this.clickUpAndCheckBindings("wheel_click");break;case 2:this.clickUpAndCheckBindings("right_click");break}}msMoveCallback(e){this.lastMousePos=this.mousePos,this.mousePos=[e.x,e.y],this.input.set("mouse_move",0),this.checkBindings(),this.input.delete("mouse_move")}msScrollCallback(e){e.ctrlKey&&e.preventDefault(),this.mouseWheel_deltaY=e.deltaY,this.input.set("mouse_scroll",0),this.checkBindings(),this.input.delete("mouse_scroll")}addBinding(e){this.bindings.push(e)}}var T=(t=>(t[t.RENDER_CANVAS=0]="RENDER_CANVAS",t[t.FRAMERATE_CANVAS=1]="FRAMERATE_CANVAS",t))(T||{}),L=(t=>(t.POINT_LIST="point-list",t.TRIANGLE_LIST="triangle-list",t.LINE_STRIP="line-strip",t.LINE_LIST="line-list",t.TRIANGLE_STRIP="triangle-strip",t))(L||{});function q(t,e,r){return t.createTexture({size:[e.clientWidth,e.clientHeight],format:"depth24plus-stencil8",usage:r})}function K(t){return t.createView()}function J(t){return{colorAttachments:[{view:void 0,clearValue:{r:.1,g:.1,b:.1,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:t,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store",stencilLoadOp:"clear",stencilClearValue:0,stencilStoreOp:"store"}}}function Y(t,e){if(t.length>0){switch(e){case 1:console.error("Faulty fragment shader: ");break;case 0:console.error("Faulty vertex shader: ");break;default:return}t.forEach(r=>{console.error(r.message)})}}function Q(t){if(t.device){const s=t.device.createShaderModule({code:t.vertexShaderCode}),n=t.device.createShaderModule({code:t.fragmentShaderCode});var e=s.getCompilationInfo(),r=n.getCompilationInfo();e.then(f=>{Y(f.messages,0)}),r.then(f=>{Y(f.messages,1)});const o=Float32Array.BYTES_PER_ELEMENT*4;return t.device.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"mainVertex",buffers:[{arrayStride:o,attributes:[{shaderLocation:0,offset:0,format:"float32x4"}]}]},fragment:{module:n,entryPoint:"mainFragment",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:t.topology,cullMode:"none",stripIndexFormat:t.stripIndexFormat},depthStencil:{depthWriteEnabled:!0,depthCompare:"always",format:"depth24plus-stencil8"}})}return null}function e0(t){return!!t}class t0{scene;_drawables=[];cameraProjectionArray;renderPassDescriptor;commandEncoder;renderContext;passEncoder;gpuCurrentTexture;RPAColorAttachment;depthTexture;depthTextureView;constructor(e){this.initRenderer(e)}initRenderer(e){this.initContexts(e.canvases),this.initRenderPassDescriptor(e.canvases[T.RENDER_CANVAS]),this.RPAColorAttachment=this.renderPassDescriptor.colorAttachments[0],this.initRenderingContext()}set Scene(e){this.scene=e,this.scene.ActiveCamera&&(this.cameraProjectionArray=this.scene.ActiveCamera.getProjectionArray()),this.scene.Drawables&&(this._drawables=this.scene.Drawables)}pushErrorScopes(){R.pushErrorScope("validation"),R.pushErrorScope("out-of-memory"),R.pushErrorScope("internal")}popErrorScopes(){R.popErrorScope().then(e=>{e&&console.error(`INTERNAL: ${e.message}`)}),R.popErrorScope().then(e=>{e&&console.error(`OUT_OF_MEM: ${e.message}`)}),R.popErrorScope().then(e=>{e&&console.error(`INTERNAL: ${e.message}`)})}initRenderingContext(){this.renderContext.configure({device:R,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"})}updateCamera(){var e=this.scene.ActiveCamera;e&&this.cameraProjectionArray.set(e.getProjectionArray(),0)}initRenderPassDescriptor(e){this.depthTexture=q(R,e,GPUTextureUsage.RENDER_ATTACHMENT),this.depthTextureView=K(this.depthTexture),this.renderPassDescriptor=J(this.depthTextureView)}initContexts(e){this.renderContext=e[T.RENDER_CANVAS].getContext("webgpu")}update(){R&&this.updateCamera()}draw(){R?(this.pushErrorScopes(),this.commandEncoder=R.createCommandEncoder(),this.gpuCurrentTexture=this.renderContext.getCurrentTexture(),this.RPAColorAttachment.view=this.gpuCurrentTexture.createView(),this.passEncoder=this.commandEncoder.beginRenderPass(this.renderPassDescriptor),this._drawables?.forEach(e=>{e.Draw(this.passEncoder)}),this.passEncoder.end(),R.queue.submit([this.commandEncoder.finish()]),this.popErrorScopes()):console.warn("Renderer: Draw() Skipped frame, device is loading.")}}class r0{_focusedDrawable;_cameras=new Array;_drawables=[];constructor(e){this._drawables=e.drawables??[],this._cameras=e.cameras,this._drawables&&this._drawables.length&&(this._focusedDrawable=this._drawables[0])}add(e){e&&(Array.isArray(e)?e.forEach(r=>{this._drawables.push(r)}):this._drawables.push(e))}get ActiveCamera(){if(this._cameras){for(var e=0;e<this._cameras.length;e++)if(this._cameras[e].Active)return this._cameras[e]}return console.error("Scene: No active camera."),null}get Drawables(){return this._drawables?this._drawables:(console.warn("Scene: Scene is empty."),null)}get FocusedDrawable(){return this._focusedDrawable}}class I{callback;keys;get Keys(){return this.keys}CheckIfPressed(e){let r=Array.from(e.keys());return r.length!=this.keys.length?!1:r.every(s=>this.keys.includes(s))?(this.pressed(),!0):!1}pressed(){this.callback!=null&&this.callback()}constructor(e,r){this.keys=e,this.callback=r}}class s0{Vertecies=[];Normals=[];Textures=[];Faces=[];SmoothShading=0;get VerteciesToFlatArray(){const e=[];return this.Vertecies.forEach(r=>{e.push(r[0]),e.push(r[1]),e.push(r[2]),e.push(1)}),e}get NormalsToFlatArray(){const e=[];return this.Normals.forEach(r=>{e.push(r[0]),e.push(r[1]),e.push(r[2])}),e}get TexturesToFlatArray(){const e=[];return this.Textures.forEach(r=>{e.push(r[0]),e.push(r[1])}),e}get VerteciesIndexesFlat(){const e=[];return this.Faces.forEach(r=>{r.forEach(s=>{e.push(s.vertexIndex)})}),e}get NormalIndexesFlat(){const e=[];return this.Faces.forEach(r=>{r.forEach(s=>{e.push(s.normalIndex)})}),e}get TextureIndexesFlat(){const e=[];return this.Faces.forEach(r=>{r.forEach(s=>{e.push(s.textureCoordIndex)})}),e}parseObjRow(e){const r=e.split(" ");switch(r[0]){case"v":const s=[Number.parseFloat(r[1]),Number.parseFloat(r[2]),Number.parseFloat(r[3])];this.Vertecies.push(s);break;case"vn":const n=[Number.parseFloat(r[1]),Number.parseFloat(r[2]),Number.parseFloat(r[3])];this.Normals.push(n);break;case"vt":const o=[Number.parseFloat(r[1]),Number.parseFloat(r[2])];this.Textures.push(o);break;case"s":this.SmoothShading=parseFloat(r[0]);break;case"f":const f=[];r.slice(1).map(v=>{const u=v.split("/"),g={vertexIndex:Number.parseFloat(u[0])-1,textureCoordIndex:Number.parseFloat(u[1])-1,normalIndex:Number.parseFloat(u[2])-1};f.push(g)}),this.Faces.push(f);break}}constructor(e){e.split(`
`).map(s=>this.parseObjRow(s))}}class D extends Float32Array{_buff;_device;_values;constructor(e,r,s,n){super(r),this._device=e,this._values=r,this._buff=this._device.createBuffer({size:this.length*this.BYTES_PER_ELEMENT,usage:s,label:n}),this.writeBuffer()}set Values(e){this.set(e,0),this.writeBuffer()}get Values(){return this._values}get Buffer(){return this._buff}writeBuffer(){this._device.queue.writeBuffer(this._buff,0,this.buffer,this.byteOffset,this.byteLength)}}class n0 extends Uint32Array{_buff;_device;_values;constructor(e,r,s,n){super(r),this._device=e,this._values=r,this._buff=this._device.createBuffer({size:this.length*this.BYTES_PER_ELEMENT,usage:s,label:n}),this.writeBuffer()}set Values(e){this.set(e,0),this.writeBuffer()}get Values(){return this._values}get Buffer(){return this._buff}writeBuffer(){this._device.queue.writeBuffer(this._buff,0,this.buffer,this.byteOffset,this.byteLength)}}class i0{verteciesBuffer;buffers=[];bufferResources=[];name="";verteciesIndexBuf;renderPipeline;bindGroup;bindGroupInit=!1;get ShouldRedraw(){for(let e=0;e<this.bufferResources.length;e++)if(this.bufferResources[e].dirty===!0)return!0;return!1}constructor(e){if(!e0(R)){console.error("Drawable: Drawable() No GPU available");return}this.buffers=e.shaderBuffers,this.renderPipeline=e.renderPipeline,this.name=e.drawableName??"",this.verteciesBuffer=e.verteciesBuf,this.verteciesIndexBuf=e.verteciesIndexBuf,this.initBindGroup()}initBindGroup(){var e=0;if(this.renderPipeline){var r=[];this.buffers.forEach(s=>{r.push({binding:e++,resource:{buffer:s.Buffer,label:`${s.Buffer.label}-bind-group-entry`}})}),this.bindGroup=R.createBindGroup({layout:this.renderPipeline.getBindGroupLayout(0),entries:r,label:`${this.name}-bind-group`}),this.bindGroup&&(this.bindGroupInit=!0)}}resetDirtyFlags(){for(let e=0;e<this.bufferResources.length;e++)this.bufferResources[e].dirty=!1}Draw(e){this.bindGroupInit&&this.verteciesBuffer&&this.renderPipeline&&(e.setVertexBuffer(0,this.verteciesBuffer.Buffer),this.verteciesIndexBuf&&e.setIndexBuffer(this.verteciesIndexBuf.Buffer,"uint32",0),e.setPipeline(this.renderPipeline),e.setBindGroup(0,this.bindGroup),this.verteciesIndexBuf?e.drawIndexed(this.verteciesIndexBuf.length,1,0,0,0):e.draw(this.verteciesBuffer.length/4,1,0,0),this.resetDirtyFlags())}}var a0=`@fragment
fn mainFragment(
  @location(1) fragColor: vec4f
) -> @location(0) vec4f {
  return fragColor;
}`,o0=`@group(0) @binding(0) var<storage, read> modelMatrix: mat4x4f;
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
}`;const c0=`# Blender 5.1.2
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
`;class l0 extends i0{constructor(e){const r=new s0(e.vertecies),s=Q({device:R,vertexShaderCode:e.vertexCode,fragmentShaderCode:e.fragmentCode,topology:L.TRIANGLE_LIST});let n=new D(R,r.VerteciesToFlatArray,GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,"outline_shader_vertecies_buffer"),o=new n0(R,r.VerteciesIndexesFlat,GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST,"vector_shader_vertecies_index_buffer"),f=new D(R,e.baseObject.ModelMatrix,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,"vector_shader_model_matrix_buffer");s&&super({shaderBuffers:[f,e.cpmBuffer],verteciesBuf:n,renderPipeline:s,verteciesIndexBuf:o,drawableName:e.name})}}class N extends l0{_object;constructor(e,r,s,n){let o=new Z;o.X=e.X,o.Y=e.Y,o.Z=e.Z,o.RotationX=r.X,o.RotationY=r.Y,o.RotationZ=r.Z,o.ScaleX=s.X,o.ScaleY=s.Y,o.ScaleZ=s.Z,o.name=n??"Vector",super({baseObject:o,vertexCode:o0,fragmentCode:a0,vertecies:c0,name:n,cpmBuffer:x}),this._object=o}}const h0=45;var R,x;class f0{canvases=new Array(2);mainCam;mainRenderer;inputHandler;cameraZoomRate=1;constructor(){var e=document.getElementById("webGpu-context");e&&this.initGpuDevice().then(()=>{console.log("Engine() device initialised"),this.setupCanvas(e),this.initCamera(e),this.initRenderer(),this.initEngine(e)})}async initGpuDevice(){if(navigator.gpu){const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)return;R=await e.requestDevice()}else console.error("WebGPU is not available for your browser. Please check compatibility.")}setupCanvas(e){e.width=window.innerWidth,e.height=window.innerHeight,this.canvases[T.RENDER_CANVAS]=e}initCamera(e){this.mainCam=new $(e.width/e.height,!0),this.mainCam.Z=5,x=new D(R,this.mainCam.getProjectionNumberArray(),GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE,"outline_cpm_buffer")}initRenderer(){if(!this.mainCam||!x)return;this.mainRenderer=new t0({canvases:this.canvases});const e=this.initScene();e&&(this.mainRenderer.Scene=e)}initScene(){const e=[];let r=new N(new _.Vector3([0,0,0]),new _.Vector3([0,0,0]),new _.Vector3([1,1,1]),"Test"),s=new N(new _.Vector3([10,0,0]),new _.Vector3([0,0,0]),new _.Vector3([1,1,1]),"Test"),n=new N(new _.Vector3([20,0,0]),new _.Vector3([0,0,0]),new _.Vector3([1,1,1]),"Test");return e.push(r),e.push(s),e.push(n),new r0({cameras:[this.mainCam],drawables:e})}initEngine(e){this.initInputCallbacks(e),this.beginMainRenderingLoop()}initInputCallbacks(e){this.inputHandler=new W(e),this.inputHandler.addBinding(new I(["shift","mouse_move","left_click"],this.cameraMoveCallback)),this.inputHandler.addBinding(new I(["left_click","mouse_move"],this.cameraRotateCallback)),this.inputHandler.addBinding(new I(["control","mouse_scroll"],this.cameraZoomCallback))}cameraMoveCallback=()=>{if(!this.inputHandler||!x)return;const e=this.inputHandler.MousePos[0],r=this.inputHandler.MousePos[1],s=this.inputHandler.LastMousePos[0],n=this.inputHandler.LastMousePos[1];if(s>0&&n>0&&this.mainCam){const o=e-s,f=r-n;this.mainCam.X-=o/10,this.mainCam.Y+=f/10,this.mainCam.LookAt=S(this.mainCam.LookAt[0]-o/10,this.mainCam.LookAt[1]+f/10,this.mainCam.LookAt[2]),x.Values=this.mainCam.getProjectionNumberArray()}};cameraRotateCallback=()=>{if(!this.inputHandler||!x)return;const e=this.inputHandler.MousePos[0],r=this.inputHandler.MousePos[1],s=this.inputHandler.LastMousePos[0],n=this.inputHandler.LastMousePos[1];if(s>0&&n>0&&this.mainCam){const o=e-s,f=r-n;this.mainCam.RotationX+=f/100,this.mainCam.RotationY+=o/100,x.Values=this.mainCam.getProjectionNumberArray()}};cameraZoomCallback=()=>{!this.mainCam||!this.inputHandler||!x||(this.inputHandler.MouseWheel_deltaY>0?this.mainCam.Z+=this.cameraZoomRate:this.mainCam.Z-this.cameraZoomRate>0&&(this.mainCam.Z-=this.cameraZoomRate),this.mainCam.Z-this.cameraZoomRate<=0&&(this.cameraZoomRate/=100),this.cameraZoomRate<1&&this.inputHandler.MouseWheel_deltaY>0&&(this.cameraZoomRate*=10),x.Values=this.mainCam.getProjectionNumberArray())};resizeContextsToWindow(){this.canvases&&this.mainCam&&(console.log("[DEBUG] Window resized, updating..."),this.canvases[0].width=window.innerWidth,this.canvases[0].height=window.innerHeight,this.canvases[1].width=window.innerWidth,this.mainCam.aspect=this.canvases[0].width/this.canvases[0].height)}beginMainRenderingLoop(){const e=()=>{this.mainRenderer?.update(),this.mainRenderer?.draw(),setTimeout(()=>{requestAnimationFrame(e)},1e3/h0)};requestAnimationFrame(e)}}function v0(){new f0}v0();
