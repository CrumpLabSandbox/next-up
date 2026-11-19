var Mu=0,eh=1,Su=2;var sr=1,bu=2,qr=3,Gs=0,Zn=1,bn=2,Fn=0,Yr=1,Cn=2,th=3,nh=4,gl=5;var Pi=100,wu=101,Tu=102,Au=103,Eu=104,rr=200,Cu=201,Ru=202,Pu=203,ih=204,sh=205,Oa=206,Iu=207,Ba=208,Du=209,Lu=210,Nu=211,Uu=212,Fu=213,Ou=214,Go=0,Ho=1,Wo=2,Ir=3,Xo=4,qo=5,Yo=6,Zo=7,rh=0,Bu=1,zu=2,es=0,za=1,ka=2,Va=3,ar=4,Ga=5,Ha=6,Wa=7;var ah=300,or=301,Zr=302,vl=303,xl=304,Ci=1e3,qi=1001,Jo=1002,Sn=1003,ku=1004;var Xa=1005;var ri=1006,_l=1007;var Ss=1008;var qn=1009,oh=1010,lh=1011,Jr=1012,yl=1013,Bi=1014,Ii=1015,vn=1016,Ml=1017,Sl=1018,bs=1020,ch=35902,hh=35899,uh=1021,fh=1022,Mi=1023,gs=1026,zi=1027,bl=1028,wl=1029,Hs=1030,Tl=1031;var Al=1033,qa=33776,Ya=33777,Za=33778,Ja=33779,El=35840,Cl=35841,Rl=35842,Pl=35843,Il=36196,Dl=37492,Ll=37496,Nl=37488,Ul=37489,Ka=37490,Fl=37491,Ol=37808,Bl=37809,zl=37810,kl=37811,Vl=37812,Gl=37813,Hl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Zl=37819,Jl=37820,Kl=37821,$l=36492,jl=36494,Ql=36495,ec=36283,tc=36284,$a=36285,nc=36286;var ma=2300,Ko=2301,ko=2302,Wc=2303,Xc=2400,qc=2401,Yc=2402;var Vu=3200,dh=3201;var ja=0,Gu=1,ws="",jn="srgb",ga="srgb-linear",va="linear",$t="srgb";var Vo=7680;var Hu=519,Wu=512,Xu=513,qu=514,ph=515,Yu=516,Zu=517,mh=518,gh=519,vh=35044;var xh="300 es",Ai=2e3,Dr=2001;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=xa("canvas");return i.style.display="block",i}var Hh={},Lr=null;function _a(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function Ku(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function mt(...i){i=Ku(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=Ku(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tr(...i){let e=i.join(" ");e in Hh||(Hh[e]=!0,mt(...i))}function $u(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ju={[Go]:Go,[Wo]:Yo,[Xo]:Xo,[Ir]:qo,[Ho]:Ho,[Yo]:Wo,[Zo]:Zo,[qo]:Ir},Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,$o=180/Math.PI;function lr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[t&63|128]+Kn[t>>8&255]+"-"+Kn[t>>16&255]+Kn[t>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function ed(i,e){return(i%e+e)%e}function Sc(i,e,t){return(1-t)*i+t*e}function Qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ic(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ef(i,e){if(e.constructor===Float32Array)return i;let t=ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function tf(i,e){if(e.constructor===Float32Array)return i;let t=ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],f=r[a+0],h=r[a+1],g=r[a+2],x=r[a+3];if(p!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+p*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let d=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,c=c*d+f*o,l=l*d+h*o,u=u*d+g*o,p=p*d+x*o}else{c=c*d+f*o,l=l*d+h*o,u=u*d+g*o,p=p*d+x*o;let S=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=S,l*=S,u*=S,p*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*p+c*h-l*f,e[t+1]=c*g+u*f+l*p-o*h,e[t+2]=l*g+u*h+o*f-c*p,e[t+3]=u*g-o*p-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*p+l*h*g,this._y=l*h*p-f*u*g,this._z=l*u*g+f*h*p,this._w=l*u*p-f*h*g;break;case"YXZ":this._x=f*u*p+l*h*g,this._y=l*h*p-f*u*g,this._z=l*u*g-f*h*p,this._w=l*u*p+f*h*g;break;case"ZXY":this._x=f*u*p-l*h*g,this._y=l*h*p+f*u*g,this._z=l*u*g+f*h*p,this._w=l*u*p-f*h*g;break;case"ZYX":this._x=f*u*p-l*h*g,this._y=l*h*p+f*u*g,this._z=l*u*g-f*h*p,this._w=l*u*p+f*h*g;break;case"YZX":this._x=f*u*p+l*h*g,this._y=l*h*p+f*u*g,this._z=l*u*g-f*h*p,this._w=l*u*p-f*h*g;break;case"XZY":this._x=f*u*p-l*h*g,this._y=l*h*p-f*u*g,this._z=l*u*g+f*h*p,this._w=l*u*p+f*h*g;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],f=n+o+p;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(u-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new N,Wh=new Zi,St=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],f=n[2],h=n[5],g=n[8],x=s[0],m=s[3],d=s[6],S=s[1],A=s[4],b=s[7],E=s[2],w=s[5],v=s[8];return r[0]=a*x+o*S+c*E,r[3]=a*m+o*A+c*w,r[6]=a*d+o*b+c*v,r[1]=l*x+u*S+p*E,r[4]=l*m+u*A+p*w,r[7]=l*d+u*b+p*v,r[2]=f*x+h*S+g*E,r[5]=f*m+h*A+g*w,r[8]=f*d+h*b+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,f=o*c-u*r,h=l*r-a*c,g=t*p+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wc=new St,Xh=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function td(){let i={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$t&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ga]:{primaries:e,whitePoint:n,transfer:va,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:n,transfer:$t,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),i}var zt=td();function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=xa("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ms(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ms(t[n]/255)*255):t[n]=ms(t[n]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nd=0,Nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tc(s[a].image)):r.push(Tc(s[a]))}else r=Tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}var id=0,Ac=new N,ai=class i extends Yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=qi,s=qi,r=ri,a=Ss,o=Mi,c=qn,l=i.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=lr(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=ah;ai.DEFAULT_ANISOTROPY=1;var cn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],p=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,b=(h+1)/2,E=(d+1)/2,w=(u+f)/4,v=(p+x)/4,M=(g+m)/4;return A>b&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=v/n):b>E?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=M/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(p-x)/S,this.z=(f-u)/S,this.w=Math.acos((l+h+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ai({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ya=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var At=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,u,p,f,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,p,f,h,g,x,m)}set(e,t,n,s,r,a,o,c,l,u,p,f,h,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=p,d[14]=f,d[3]=h,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*p,g=o*u,x=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,h=c*p,g=l*u,x=l*p;t[0]=f+x*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,h=c*p,g=l*u,x=l*p;t[0]=f-x*o,t[4]=-a*p,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,h=a*p,g=o*u,x=o*p;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*p,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-f*p,t[8]=g*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*p+g,t[10]=f-x*p}else if(e.order==="XZY"){let f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=f*p+x,t[5]=a*u,t[9]=h*p-g,t[2]=g*p-h,t[6]=o*u,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sd,e,rd)}lookAt(e,t,n){let s=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Cs.crossVectors(n,vi),Cs.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Cs.crossVectors(n,vi)),Cs.normalize(),po.crossVectors(vi,Cs),s[0]=Cs.x,s[4]=po.x,s[8]=vi.x,s[1]=Cs.y,s[5]=po.y,s[9]=vi.y,s[2]=Cs.z,s[6]=po.z,s[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],d=n[14],S=n[3],A=n[7],b=n[11],E=n[15],w=s[0],v=s[4],M=s[8],D=s[12],R=s[1],U=s[5],O=s[9],$=s[13],I=s[2],J=s[6],te=s[10],j=s[14],de=s[3],z=s[7],W=s[11],K=s[15];return r[0]=a*w+o*R+c*I+l*de,r[4]=a*v+o*U+c*J+l*z,r[8]=a*M+o*O+c*te+l*W,r[12]=a*D+o*$+c*j+l*K,r[1]=u*w+p*R+f*I+h*de,r[5]=u*v+p*U+f*J+h*z,r[9]=u*M+p*O+f*te+h*W,r[13]=u*D+p*$+f*j+h*K,r[2]=g*w+x*R+m*I+d*de,r[6]=g*v+x*U+m*J+d*z,r[10]=g*M+x*O+m*te+d*W,r[14]=g*D+x*$+m*j+d*K,r[3]=S*w+A*R+b*I+E*de,r[7]=S*v+A*U+b*J+E*z,r[11]=S*M+A*O+b*te+E*W,r[15]=S*D+A*$+b*j+E*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],d=e[15],S=c*h-l*f,A=o*h-l*p,b=o*f-c*p,E=a*h-l*u,w=a*f-c*u,v=a*p-o*u;return t*(x*S-m*A+d*b)-n*(g*S-m*E+d*w)+s*(g*A-x*E+d*v)-r*(g*b-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],d=e[15],S=t*o-n*a,A=t*c-s*a,b=t*l-r*a,E=n*c-s*o,w=n*l-r*o,v=s*l-r*c,M=u*x-p*g,D=u*m-f*g,R=u*d-h*g,U=p*m-f*x,O=p*d-h*x,$=f*d-h*m,I=S*$-A*O+b*U+E*R-w*D+v*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/I;return e[0]=(o*$-c*O+l*U)*J,e[1]=(s*O-n*$-r*U)*J,e[2]=(x*v-m*w+d*E)*J,e[3]=(f*w-p*v-h*E)*J,e[4]=(c*R-a*$-l*D)*J,e[5]=(t*$-s*R+r*D)*J,e[6]=(m*b-g*v-d*A)*J,e[7]=(u*v-f*b+h*A)*J,e[8]=(a*O-o*R+l*M)*J,e[9]=(n*R-t*O-r*M)*J,e[10]=(g*w-x*b+d*S)*J,e[11]=(p*b-u*w-h*S)*J,e[12]=(o*D-a*U-c*M)*J,e[13]=(t*U-n*D+s*M)*J,e[14]=(x*A-g*E-m*S)*J,e[15]=(u*E-p*A+f*S)*J,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,p=o+o,f=r*l,h=r*u,g=r*p,x=a*u,m=a*p,d=o*p,S=c*l,A=c*u,b=c*p,E=n.x,w=n.y,v=n.z;return s[0]=(1-(x+d))*E,s[1]=(h+b)*E,s[2]=(g-A)*E,s[3]=0,s[4]=(h-b)*w,s[5]=(1-(f+d))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+A)*v,s[9]=(m-S)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Li.copy(this);let l=1/a,u=1/o,p=1/c;return Li.elements[0]*=l,Li.elements[1]*=l,Li.elements[2]*=l,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=p,Li.elements[9]*=p,Li.elements[10]*=p,t.setFromRotationMatrix(Li),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Ai,c=!1){let l=this.elements,u=2*r/(t-e),p=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Ai)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ai,c=!1){let l=this.elements,u=2/(t-e),p=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Ai)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new N,Li=new At,sd=new N(0,0,0),rd=new N(1,1,1),Cs=new N,po=new N,vi=new N,Yh=new At,Zh=new Zi,vs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ad=0,Jh=new N,pr=new Zi,cs=new At,mo=new N,aa=new N,od=new N,ld=new Zi,Kh=new N(1,0,0),$h=new N(0,1,0),jh=new N(0,0,1),Qh={type:"added"},cd={type:"removed"},mr={type:"childadded",child:null},Ec={type:"childremoved",child:null},Xn=class i extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new vs,n=new Zi,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new St}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(aa,mo,this.up):cs.lookAt(mo,aa,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(cs),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),mr.child=e,this.dispatchEvent(mr),mr.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cd),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cs.multiply(e.parent.matrixWorld)),e.applyMatrix4(cs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xn.DEFAULT_UP=new N(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},hd={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=u.position.distanceTo(p.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},go={h:0,s:0,l:0};function Cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=zt.workingColorSpace){if(e=ed(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cc(a,r,e+1/3),this.g=Cc(a,r,e),this.b=Cc(a,r,e-1/3)}return zt.colorSpaceToWorking(this,s),this}setStyle(e,t=jn){function n(r){r!==void 0&&parseFloat(r)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){let n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return zt.workingToColorSpace($n.copy(this),e),Math.round(kt($n.r*255,0,255))*65536+Math.round(kt($n.g*255,0,255))*256+Math.round(kt($n.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace($n.copy(this),t);let n=$n.r,s=$n.g,r=$n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=jn){zt.workingToColorSpace($n.copy(this),e);let t=$n.r,n=$n.g,s=$n.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(go);let n=Sc(Rs.h,go.h,t),s=Sc(Rs.s,go.s,t),r=Sc(Rs.l,go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new Te;Te.NAMES=nf;var Ma=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Or=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new N,hs=new N,Rc=new N,us=new N,gr=new N,vr=new N,eu=new N,Pc=new N,Ic=new N,Dc=new N,Lc=new cn,Nc=new cn,Uc=new cn,ps=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),hs.subVectors(n,t),Rc.subVectors(e,t);let a=Ni.dot(Ni),o=Ni.dot(hs),c=Ni.dot(Rc),l=hs.dot(hs),u=hs.dot(Rc),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,h=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,us)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,us.x),c.addScaledVector(a,us.y),c.addScaledVector(o,us.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Lc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Lc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Lc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),hs.subVectors(e,t),Ni.cross(hs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Ni.cross(hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),vr.subVectors(r,n),Pc.subVectors(e,n);let c=gr.dot(Pc),l=vr.dot(Pc);if(c<=0&&l<=0)return t.copy(n);Ic.subVectors(e,s);let u=gr.dot(Ic),p=vr.dot(Ic);if(u>=0&&p<=u)return t.copy(s);let f=c*p-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(gr,a);Dc.subVectors(e,r);let h=gr.dot(Dc),g=vr.dot(Dc);if(g>=0&&h<=g)return t.copy(r);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(vr,o);let m=u*g-h*p;if(m<=0&&p-u>=0&&h-g>=0)return eu.subVectors(r,s),o=(p-u)/(p-u+(h-g)),t.copy(s).addScaledVector(eu,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(gr,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ji=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),xo.subVectors(this.max,oa),xr.subVectors(e.a,oa),_r.subVectors(e.b,oa),yr.subVectors(e.c,oa),Ps.subVectors(_r,xr),Is.subVectors(yr,_r),$s.subVectors(xr,yr);let t=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-$s.z,$s.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,$s.z,0,-$s.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-$s.y,$s.x,0];return!Fc(t,xr,_r,yr,xo)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,xr,_r,yr,xo))?!1:(_o.crossVectors(Ps,Is),t=[_o.x,_o.y,_o.z],Fc(t,xr,_r,yr,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fs=[new N,new N,new N,new N,new N,new N,new N,new N],Ui=new N,vo=new Ji,xr=new N,_r=new N,yr=new N,Ps=new N,Is=new N,$s=new N,oa=new N,xo=new N,_o=new N,js=new N;function Fc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){js.fromArray(i,r);let o=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),c=e.dot(js),l=t.dot(js),u=n.dot(js);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Un=new N,yo=new Be,ud=0,Ei=class extends Yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=Ii,this.version=0,this._normalizationScale=e!==void 0?ic(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix3(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ef(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tf(e,this.array)}};var Sa=class extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ba=class extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}},fd=new Ji,la=new N,Oc=new N,xs=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Oc)),this.expandByPoint(la.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dd=0,Ti=new At,Bc=new Xn,Mr=new N,xi=new Ji,ca=new Ji,Wn=new N,Xt=class i extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?ba:Sa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Wn.addVectors(xi.min,ca.min),xi.expandByPoint(Wn),Wn.addVectors(xi.max,ca.max),xi.expandByPoint(Wn)):(xi.expandByPoint(ca.min),xi.expandByPoint(ca.max))}xi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Wn.fromBufferAttribute(o,l),c&&(Mr.fromBufferAttribute(e,l),Wn.add(Mr)),s=Math.max(s,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new N,c[D]=new N;let u=new N,p=new N,f=new N,h=new Be,g=new Be,x=new Be,m=new N,d=new N;function S(D,R,U){l[D]=l[R]=l[U]=1,u.fromBufferAttribute(n,D),p.fromBufferAttribute(n,R),f.fromBufferAttribute(n,U),h.fromBufferAttribute(r,D),g.fromBufferAttribute(r,R),x.fromBufferAttribute(r,U),p.sub(u),f.sub(u),g.sub(h),x.sub(h);let O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(m.copy(p).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(O),d.copy(f).multiplyScalar(g.x).addScaledVector(p,-x.x).multiplyScalar(O),o[D].add(m),o[R].add(m),o[U].add(m),c[D].add(d),c[R].add(d),c[U].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,R=A.length;D<R;++D){let U=A[D],O=U.start,$=U.count;for(let I=O,J=O+$;I<J;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new N,E=new N,w=new N,v=new N;function M(D){w.fromBufferAttribute(s,D),v.copy(w);let R=o[D];b.copy(R),b.sub(w.multiplyScalar(w.dot(R))).normalize(),E.crossVectors(v,R);let O=E.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,O)}for(let D=0,R=n.count;D<R;++D)l[D]&&M(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,u=new N,p=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,p=o.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[h++]}return new Ei(f,u,p)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,f=l.length;p<f;p++){let h=l[p];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],p=r[l];for(let f=0,h=p.length;f<h;f++)u.push(p[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=lr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var si=new N,wa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?ic(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ef(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tf(e,this.data.array)}},zc=new N,pd=new N,md=new St,_i=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zc.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||md.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gd=0,Fi=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Yr,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _i().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_s=class extends Fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,ha=new N,br=new N,wr=new N,Tr=new Be,ua=new Be,sf=new At,Mo=new N,fa=new N,So=new N,nu=new Be,kc=new Be,iu=new Be,Ls=class extends Xn{constructor(e=new _s){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tl(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new wa(n,3,0,!1)),Sr.setAttribute("uv",new wa(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-wr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;bo(Mo.set(-.5,-.5,0),wr,a,br,s,r),bo(fa.set(.5,-.5,0),wr,a,br,s,r),bo(So.set(.5,.5,0),wr,a,br,s,r),nu.set(0,0),kc.set(1,0),iu.set(1,1);let o=e.ray.intersectTriangle(Mo,fa,So,!1,ha);if(o===null&&(bo(fa.set(-.5,.5,0),wr,a,br,s,r),kc.set(0,1),o=e.ray.intersectTriangle(Mo,So,fa,!1,ha),o===null))return;let c=e.ray.origin.distanceTo(ha);c<e.near||c>e.far||t.push({distance:c,point:ha.clone(),uv:ps.getInterpolation(ha,Mo,fa,So,nu,kc,iu,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function bo(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ua.x=r*Tr.x-s*Tr.y,ua.y=s*Tr.x+r*Tr.y):ua.copy(Tr),i.copy(e),i.x+=ua.x,i.y+=ua.y,i.applyMatrix4(sf)}var ds=new N,Vc=new N,wo=new N,To=new N,Br=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vc.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),To.copy(this.origin).sub(Vc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=To.dot(this.direction),c=-To.dot(wo),l=To.lengthSq(),u=Math.abs(1-a*a),p,f,h,g;if(u>0)if(p=a*c-o,f=a*o-c,g=r*u,p>=0)if(f>=-g)if(f<=g){let x=1/u;p*=x,f*=x,h=p*(p+a*f+2*o)+f*(a*p+f+2*c)+l}else f=r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-c),r),h=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-c),r),h=-p*p+f*(f+2*c)+l);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Vc).addScaledVector(wo,f),h}intersectSphere(e,t){if(e.radius<0)return null;ds.subVectors(e.center,this.origin);let n=ds.dot(this.direction),s=ds.dot(ds)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,d=n.x-a.x,S=n.y-a.y,A=n.z-a.z,b=Math.abs(c),E=Math.abs(l),w=Math.abs(u),v,M,D,R,U,O,$,I,J,te,j,de;if(b>=E&&b>=w?(D=c,O=p,J=g,de=d,c>=0?(v=l,M=u,R=f,U=h,$=x,I=m,te=S,j=A):(v=u,M=l,R=h,U=f,$=m,I=x,te=A,j=S)):E>=w?(D=l,O=f,J=x,de=S,l>=0?(v=u,M=c,R=h,U=p,$=m,I=g,te=A,j=d):(v=c,M=u,R=p,U=h,$=g,I=m,te=d,j=A)):(D=u,O=h,J=m,de=A,u>=0?(v=c,M=l,R=p,U=f,$=g,I=x,te=d,j=S):(v=l,M=c,R=f,U=p,$=x,I=g,te=S,j=d)),D===0)return null;let z=v/D,W=M/D,K=1/D,Ee=R-z*O,We=U-W*O,ee=$-z*J,me=I-W*J,Re=te-z*de,Pe=j-W*de,be=Re*me-Pe*ee,Ne=Ee*Pe-We*Re,ut=ee*We-me*Ee;if(s){if(be<0||Ne<0||ut<0)return null}else if((be<0||Ne<0||ut<0)&&(be>0||Ne>0||ut>0))return null;let Ze=be+Ne+ut;if(Ze===0)return null;let Et=K*(be*O+Ne*J+ut*de);return(Ze>0?Et<0:Et>0)?null:this.at(Et/Ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},su=new At,Qs=new Br,Ao=new xs,ru=new N,Eo=new N,Co=new N,Ro=new N,Gc=new N,Po=new N,au=new N,Io=new N,ct=class extends Xn{constructor(e=new Xt,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(Gc.fromBufferAttribute(p,e),a?Po.addScaledVector(Gc,u):Po.addScaledVector(Gc.sub(t),u))}t.add(Po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Qs.copy(e.ray).recast(e.near),!(Ao.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Ao,ru)===null||Qs.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&Qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=S,E=A;b<E;b+=3){let w=o.getX(b),v=o.getX(b+1),M=o.getX(b+2);s=Do(this,d,e,n,l,u,p,w,v,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,d=x;m<d;m+=3){let S=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=Do(this,a,e,n,l,u,p,S,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,h.start),A=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=S,E=A;b<E;b+=3){let w=b,v=b+1,M=b+2;s=Do(this,d,e,n,l,u,p,w,v,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,d=x;m<d;m+=3){let S=m,A=m+1,b=m+2;s=Do(this,a,e,n,l,u,p,S,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vd(i,e,t,n,s,r,a,o){let c;if(e.side===Zn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Gs,o),c===null)return null;Io.copy(o),Io.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Io);return l<t.near||l>t.far?null:{distance:l,point:Io.clone(),object:i}}function Do(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Eo),i.getVertexPosition(c,Co),i.getVertexPosition(l,Ro);let u=vd(i,e,t,n,Eo,Co,Ro,au);if(u){let p=new N;ps.getBarycoord(au,Eo,Co,Ro,p),s&&(u.uv=ps.getInterpolatedAttribute(s,o,c,l,p,new Be)),r&&(u.uv1=ps.getInterpolatedAttribute(r,o,c,l,p,new Be)),a&&(u.normal=ps.getInterpolatedAttribute(a,o,c,l,p,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new N,materialIndex:0};ps.getNormal(Eo,Co,Ro,f.normal),u.face=f,u.barycoord=p}return u}var ys=class extends ai{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Sn,u=Sn,p,f){super(null,a,o,c,l,u,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class extends Ei{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new At,ou=new At,Lo=[],lu=new Ji,xd=new At,da=new ct,pa=new xs,Ns=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),lu.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),pa.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(n),e.ray.intersectsSphere(pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),ou.multiplyMatrices(n,Ar),da.matrixWorld=ou,da.raycast(e,Lo);for(let a=0,o=Lo.length;a<o;a++){let c=Lo[a];c.instanceId=r,c.object=this,t.push(c)}Lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,bl,Ii));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},er=new xs,_d=new Be(.5,.5),No=new N,Us=class{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],f=r[6],h=r[7],g=r[8],x=r[9],m=r[10],d=r[11],S=r[12],A=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-a,h-u,d-g,E-S).normalize(),s[1].setComponents(l+a,h+u,d+g,E+S).normalize(),s[2].setComponents(l+o,h+p,d+x,E+A).normalize(),s[3].setComponents(l-o,h-p,d-x,E-A).normalize(),n)s[4].setComponents(c,f,m,b).normalize(),s[5].setComponents(l-c,h-f,d-m,E-b).normalize();else if(s[4].setComponents(l-c,h-f,d-m,E-b).normalize(),t===Ai)s[5].setComponents(l+c,h+f,d+m,E+b).normalize();else if(t===Dr)s[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);let t=_d.distanceTo(e.center);return er.radius=.7071067811865476+t,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cu=new At,nl=class i{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Us),n[s].setFromProjectionMatrix(cu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Us),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var il=class extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hu=new At,Zc=new Br,Uo=new xs,Fo=new N,Ms=class extends Xn{constructor(e=new Xt,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;hu.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=f,x=h;g<x;g++){let m=l.getX(g);Fo.fromBufferAttribute(p,m),uu(Fo,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let g=f,x=h;g<x;g++)Fo.fromBufferAttribute(p,g),uu(Fo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uu(i,e,t,n,s,r,a){let o=Zc.distanceSqToPoint(i);if(o<t){let c=new N;Zc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ta=class extends ai{constructor(e=[],t=or,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fs=class extends ai{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends ai{constructor(e,t,n=Bi,s,r,a,o=Sn,c=Sn,l,u=gs,p=1){if(u!==gs&&u!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Aa=class extends Oi{constructor(e,t=Bi,n=or,s,r,a=Sn,o=Sn,c,l=gs){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ea=class extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Os=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(p,2));function g(x,m,d,S,A,b,E,w,v,M,D){let R=b/v,U=E/M,O=b/2,$=E/2,I=w/2,J=v+1,te=M+1,j=0,de=0,z=new N;for(let W=0;W<te;W++){let K=W*U-$;for(let Ee=0;Ee<J;Ee++){let We=Ee*R-O;z[x]=We*S,z[m]=K*A,z[d]=I,l.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[d]=w>0?1:-1,u.push(z.x,z.y,z.z),p.push(Ee/v),p.push(1-W/M),j+=1}}for(let W=0;W<M;W++)for(let K=0;K<v;K++){let Ee=f+K+J*W,We=f+K+J*(W+1),ee=f+(K+1)+J*(W+1),me=f+(K+1)+J*W;c.push(Ee,We,me),c.push(We,ee,me),de+=6}o.addGroup(h,de,D),h+=de,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $i=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new N,u=new Be;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){let h=n+p/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ji=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],f=[],h=[],g=0,x=[],m=n/2,d=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(h,2));function S(){let b=new N,E=new N,w=0,v=(t-e)/n;for(let M=0;M<=r;M++){let D=[],R=M/r,U=R*(t-e)+e;for(let O=0;O<=s;O++){let $=O/s,I=$*c+o,J=Math.sin(I),te=Math.cos(I);E.x=U*J,E.y=-R*n+m,E.z=U*te,p.push(E.x,E.y,E.z),b.set(J,v,te).normalize(),f.push(b.x,b.y,b.z),h.push($,1-R),D.push(g++)}x.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let R=x[D][M],U=x[D+1][M],O=x[D+1][M+1],$=x[D][M+1];(e>0||D!==0)&&(u.push(R,U,$),w+=3),(t>0||D!==r-1)&&(u.push(U,O,$),w+=3)}l.addGroup(d,w,0),d+=w}function A(b){let E=g,w=new Be,v=new N,M=0,D=b===!0?e:t,R=b===!0?1:-1;for(let O=1;O<=s;O++)p.push(0,m*R,0),f.push(0,R,0),h.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let I=O/s*c+o,J=Math.cos(I),te=Math.sin(I);v.x=D*te,v.y=m*R,v.z=D*J,p.push(v.x,v.y,v.z),f.push(0,R,0),w.x=J*.5+.5,w.y=te*.5*R+.5,h.push(w.x,w.y),g++}for(let O=0;O<s;O++){let $=E+O,I=U+O;b===!0?u.push(I,I+1,$):u.push(I+1,I,$),M+=3}l.addGroup(d,M,b===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bs=class i extends ji{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zr=class i extends Xt{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=kt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,p=new N,f=new Be,h=new N,g=new N,x=new N,m=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,h.x=d*1,h.y=-m,h.z=d*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,h.x=d*1,h.y=-m,h.z=d*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let S=0;S<=t;S++){let A=n+S*u*s,b=Math.sin(A),E=Math.cos(A);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*b,p.y=e[w].y,p.z=e[w].x*E,a.push(p.x,p.y,p.z),f.x=S/t,f.y=w/(e.length-1),o.push(f.x,f.y);let v=c[3*w+0]*b,M=c[3*w+1],D=c[3*w+0]*E;l.push(v,M,D)}}for(let S=0;S<t;S++)for(let A=0;A<e.length-1;A++){let b=A+S*e.length,E=b,w=b+e.length,v=b+e.length+1,M=b+1;r.push(E,w,M),r.push(v,M,w)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Qi=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=e/o,f=t/c,h=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let S=d*f-a;for(let A=0;A<l;A++){let b=A*p-r;g.push(b,-S,0),x.push(0,0,1),m.push(A/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){let A=S+l*d,b=S+l*(d+1),E=S+1+l*(d+1),w=S+1+l*d;h.push(A,b,w),h.push(b,E,w)}this.setIndex(h),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},kr=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],p=e,f=(t-e)/s,h=new N,g=new Be;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*a;h.x=p*Math.cos(d),h.y=p*Math.sin(d),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let S=d+m,A=S,b=S+n+1,E=S+n+2,w=S+1;o.push(A,b,w),o.push(b,E,w)}}this.setIndex(o),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ri=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],p=new N,f=new N,h=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let S=[],A=d/n,b=a+A*o,E=e*Math.cos(b),w=Math.sqrt(e*e-E*E),v=0;d===0&&a===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let D=M/t,R=s+D*r;p.x=-w*Math.cos(R),p.y=E,p.z=w*Math.sin(R),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(D+v,1-A),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let A=u[d][S+1],b=u[d][S],E=u[d+1][S],w=u[d+1][S+1];(d!==0||a>0)&&h.push(A,b,w),(d!==n-1||c<Math.PI)&&h.push(b,E,w)}this.setIndex(h),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fu(s))s.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ei(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let s in n)e[s]=n[s]}return e}function fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _h(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}var zn={clone:cr,merge:ei},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new cn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new St().fromArray(s.value);break;case"m4":this.uniforms[n].value=new At().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vr=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_n=class extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nr=class extends _n{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return tr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){tr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ca=class extends Fi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Gr=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Oo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qc:r=e,o=2*t-n;break;case Yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qc:a=e,c=2*n-t;break;case Yc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,A=(-1-h)*m+(1.5+h)*x+.5*g,b=h*m-h*x;for(let E=0;E!==o;++E)r[E]=d*a[u+E]+S*a[l+E]+A*a[c+E]+b*a[p+E];return r}},al=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),p=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*p+a[c+f]*u;return r}},ol=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ll=class extends zs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let f=o*2,h=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],d=h*f+g*2,S=p[d],A=p[d+1],b=e*f+g*2,E=u[b],w=u[b+1],v=wd(n,t,S,E,s);r[g]=rf(v,x,A,w,m)}return r}};function rf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=rf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=bd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var yi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Oo(e.settings)&&(n.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break;case Wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return mt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Oo(this.settings)&&(du(this.settings.inTangents,e),du(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Oo(this.settings)&&(pu(this.settings.inTangents,e),pu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){pt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){pt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Qf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){pt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,f=p-n,h=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[p+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Oo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function du(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function pu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Ko;var ks=class extends yi{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=ma;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}};cl.prototype.ValueTypeName="color";var hl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}};hl.prototype.ValueTypeName="number";var ul=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Zi.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ra=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends yi{constructor(e,t,n){super(e,t,n)}};Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=ma;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}};fl.prototype.ValueTypeName="vector";var dl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,f=l.length;p<f;p+=2){let h=l[p],g=l[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},af=new dl,pl=class{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Xn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pa=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hc=new At,mu=new N,gu=new N,Ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bo=new N,zo=new Zi,Xi=new N,Da=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,zo,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bo,zo,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new N,vu=new Be,xu=new Be,Qn=class extends Da{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,vu,xu),t.subVectors(xu,vu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jc=class extends Ia{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}},La=class extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ir=class extends Da{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends Ia{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Wr=class extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Cr=-90,Rr=1,Xr=class extends Xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qn(Cr,Rr,e,t);s.layers=this.layers,this.add(s);let r=new Qn(Cr,Rr,e,t);r.layers=this.layers,this.add(r);let a=new Qn(Cr,Rr,e,t);a.layers=this.layers,this.add(a);let o=new Qn(Cr,Rr,e,t);o.layers=this.layers,this.add(o);let c=new Qn(Cr,Rr,e,t);c.layers=this.layers,this.add(c);let l=new Qn(Cr,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ml=class extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ua=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Td.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Td(){this._document.hidden===!1&&this.reset()}var yh="\\[\\]\\.:\\/",Ad=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",Ed="[^"+yh.replace("\\.","")+"]",Cd=/((?:WC+[\/:])*)/.source.replace("WC",Mh),Rd=/(WCOD+)?/.source.replace("WCOD",Ed),Pd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),Id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),Dd=new RegExp("^"+Cd+Rd+Pd+Id+"$"),Ld=["material","materials","bones","map"],$c=class{constructor(e,t,n){let s=n||xn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ad,"")}static parseTrackName(e){let t=Dd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ld.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){mt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xn.Composite=$c;xn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xn.prototype.GetterByBindingType=[xn.prototype._getValue_direct,xn.prototype._getValue_array,xn.prototype._getValue_arrayElement,xn.prototype._getValue_toArray];xn.prototype.SetterByBindingTypeAndVersioning=[[xn.prototype._setValue_direct,xn.prototype._setValue_direct_setNeedsUpdate,xn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_array,xn.prototype._setValue_array_setNeedsUpdate,xn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_arrayElement,xn.prototype._setValue_arrayElement_setNeedsUpdate,xn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_fromArray,xn.prototype._setValue_fromArray_setNeedsUpdate,xn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var _u=new At,Fa=class{constructor(e,t,n=0,s=1/0){this.ray=new Br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(e,t=!0,n=[]){return jc(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,n,t);return n.sort(yu),n}};function yu(i,e){return i.distance-e.distance}function jc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)jc(r[a],e,t,!0)}}var Qc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Sh(i,e,t,n){let s=Nd(n);switch(t){case uh:return i*e;case bl:return i*e/s.components*s.byteLength;case wl:return i*e/s.components*s.byteLength;case Hs:return i*e*2/s.components*s.byteLength;case Tl:return i*e*2/s.components*s.byteLength;case fh:return i*e*3/s.components*s.byteLength;case Mi:return i*e*4/s.components*s.byteLength;case Al:return i*e*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Pl:return Math.max(i,16)*Math.max(e,8)/4;case El:case Rl:return Math.max(i,8)*Math.max(e,8)/2;case Il:case Dl:case Nl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Ka:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $l:case jl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $a:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nd(i){switch(i){case qn:case oh:return{byteLength:1,components:1};case Jr:case lh:case vn:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case Bi:case yl:case Ii:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Cf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fd(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<p.length;h++){let g=p[f],x=p[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let h=0,g=p.length;h<g;h++){let x=p[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Np=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Hd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:Kd,bumpmap_pars_fragment:$d,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:dp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:_p,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Ep,lights_toon_fragment:Rp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Dp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Np,lights_fragment_begin:Up,lights_fragment_maps:Fp,lights_fragment_end:Op,lightprobes_pars_fragment:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Hp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Jp,morphcolor_vertex:Kp,morphnormal_vertex:$p,morphtarget_pars_vertex:jp,morphtarget_vertex:Qp,normal_fragment_begin:em,normal_fragment_maps:tm,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:_m,shadowmap_vertex:ym,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:bm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Am,specularmap_pars_fragment:Em,tonemapping_fragment:Cm,tonemapping_pars_fragment:Rm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Dm,uv_pars_vertex:Lm,uv_vertex:Nm,worldpos_vertex:Um,background_vert:Fm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:zm,cube_vert:km,cube_frag:Vm,depth_vert:Gm,depth_frag:Hm,distance_vert:Wm,distance_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:Zm,linedashed_frag:Jm,meshbasic_vert:Km,meshbasic_frag:$m,meshlambert_vert:jm,meshlambert_frag:Qm,meshmatcap_vert:e0,meshmatcap_frag:t0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:a0,meshphysical_frag:o0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:f0,shadow_frag:d0,sprite_vert:p0,sprite_frag:m0},Ge={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ns={basic:{uniforms:ei([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ei([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ei([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ei([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ei([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ei([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ei([Ge.points,Ge.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ei([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ei([Ge.common,Ge.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ei([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ei([Ge.sprite,Ge.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:ei([Ge.common,Ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:ei([Ge.lights,Ge.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ns.physical={uniforms:ei([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var sc={r:0,b:0,g:0},g0=new At,Rf=new St;Rf.set(-1,0,0,0,1,0,0,0,1);function v0(i,e,t,n,s,r){let a=new Te(0),o=s===!0?0:1,c,l,u=null,p=0,f=null;function h(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let b=S.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(S){let A=!1,b=h(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,A){let b=h(A);b&&b.isCubeTexture?(l===void 0&&(l=new ct(new Os(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:cr(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rf),l.material.toneMapped=zt.getTransfer(b.colorSpace)!==$t,(u!==b||p!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,p=b.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ct(new Qi(2,2),new xt({name:"BackgroundMaterial",uniforms:cr(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=zt.getTransfer(b.colorSpace)!==$t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,A){S.getRGB(sc,_h(i)),t.buffers.color.setClear(sc.r,sc.g,sc.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:d}}function x0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(U,O,$,I,J){let te=!1,j=p(U,I,$,O);r!==j&&(r=j,l(r.object)),te=h(U,I,$,J),te&&g(U,I,$,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,b(U,O,$,I),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function p(U,O,$,I){let J=I.wireframe===!0,te=n[O.id];te===void 0&&(te={},n[O.id]=te);let j=U.isInstancedMesh===!0?U.id:0,de=te[j];de===void 0&&(de={},te[j]=de);let z=de[$.id];z===void 0&&(z={},de[$.id]=z);let W=z[J];return W===void 0&&(W=f(c()),z[J]=W),W}function f(U){let O=[],$=[],I=[];for(let J=0;J<t;J++)O[J]=0,$[J]=0,I[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:I,object:U,attributes:{},index:null}}function h(U,O,$,I){let J=r.attributes,te=O.attributes,j=0,de=$.getAttributes();for(let z in de)if(de[z].location>=0){let K=J[z],Ee=te[z];if(Ee===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),K===void 0||K.attribute!==Ee||Ee&&K.data!==Ee.data)return!0;j++}return r.attributesNum!==j||r.index!==I}function g(U,O,$,I){let J={},te=O.attributes,j=0,de=$.getAttributes();for(let z in de)if(de[z].location>=0){let K=te[z];K===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));let Ee={};Ee.attribute=K,K&&K.data&&(Ee.data=K.data),J[z]=Ee,j++}r.attributes=J,r.attributesNum=j,r.index=I}function x(){let U=r.newAttributes;for(let O=0,$=U.length;O<$;O++)U[O]=0}function m(U){d(U,0)}function d(U,O){let $=r.newAttributes,I=r.enabledAttributes,J=r.attributeDivisors;$[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),J[U]!==O&&(i.vertexAttribDivisor(U,O),J[U]=O)}function S(){let U=r.newAttributes,O=r.enabledAttributes;for(let $=0,I=O.length;$<I;$++)O[$]!==U[$]&&(i.disableVertexAttribArray($),O[$]=0)}function A(U,O,$,I,J,te,j){j===!0?i.vertexAttribIPointer(U,O,$,J,te):i.vertexAttribPointer(U,O,$,I,J,te)}function b(U,O,$,I){x();let J=I.attributes,te=$.getAttributes(),j=O.defaultAttributeValues;for(let de in te){let z=te[de];if(z.location>=0){let W=J[de];if(W===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){let K=W.normalized,Ee=W.itemSize,We=e.get(W);if(We===void 0)continue;let ee=We.buffer,me=We.type,Re=We.bytesPerElement,Pe=me===i.INT||me===i.UNSIGNED_INT||W.gpuType===yl;if(W.isInterleavedBufferAttribute){let be=W.data,Ne=be.isInterleavedBuffer===!0?be.stride:be.itemSize,ut=W.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let Ze=0;Ze<z.locationSize;Ze++)d(z.location+Ze,be.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)m(z.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ze=0;Ze<z.locationSize;Ze++)A(z.location+Ze,Ee/z.locationSize,me,K,Ne*Re,(ut+Ee/z.locationSize*Ze)*Re,Pe)}else{if(W.isInstancedBufferAttribute){for(let be=0;be<z.locationSize;be++)d(z.location+be,W.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let be=0;be<z.locationSize;be++)m(z.location+be);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let be=0;be<z.locationSize;be++)A(z.location+be,Ee/z.locationSize,me,K,Ee*Re,Ee/z.locationSize*be*Re,Pe)}}else if(j!==void 0){let K=j[de];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(z.location,K);break;case 3:i.vertexAttrib3fv(z.location,K);break;case 4:i.vertexAttrib4fv(z.location,K);break;default:i.vertexAttrib1fv(z.location,K)}}}}S()}function E(){D();for(let U in n){let O=n[U];for(let $ in O){let I=O[$];for(let J in I){let te=I[J];for(let j in te)u(te[j].object),delete te[j];delete I[J]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let $ in O){let I=O[$];for(let J in I){let te=I[J];for(let j in te)u(te[j].object),delete te[j];delete I[J]}}delete n[U.id]}function v(U){for(let O in n){let $=n[O];for(let I in $){let J=$[I];if(J[U.id]===void 0)continue;let te=J[U.id];for(let j in te)u(te[j].object),delete te[j];delete J[U.id]}}}function M(U){for(let O in n){let $=n[O],I=U.isInstancedMesh===!0?U.id:0,J=$[I];if(J!==void 0){for(let te in J){let j=J[te];for(let de in j)u(j[de].object),delete j[de];delete J[te]}delete $[I],Object.keys($).length===0&&delete n[O]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function _0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function y0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Mi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==qn&&v!==Ii&&!M&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(mt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&mt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:E,samples:w}}function M0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new _i,o=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let h=p.length!==0||f||n!==0||s;return s=f,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=u(p,f,0)},this.setState=function(p,f,h){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,A=S*4,b=d.clippingState||null;c.value=b,b=u(g,f,A,h);for(let E=0;E!==A;++E)b[E]=t[E];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,f,h,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=h+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,b=h;A!==x;++A,b+=4)a.copy(p[A]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var to=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ta(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Os(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Fn});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===Ss&&(t.minFilter=ri),new Xr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},of=256,S0=3,b0=20,Pf=256,If=16,w0=3,T0=new N,A0=new Te,$r=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xr(1,10,null),this._boxMesh=new ct(new Os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=T0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(A0));let m=new Xr(n,s,u);return m.position.copy(o),m.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=h,c.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(of,Qu(e))}_fromTexture(e,t){e.mapping===or||e.mapping===Zr?this._setSize(e.image.length===0?of:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=lf(e,!1,!1),n=Math.log2(e)-S0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=lf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===or||e.mapping===Zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=cf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=E0(),this._integrationMaterial=C0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/If);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-w0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Pf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=R0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function lf(i,e,t){return new to(i,{minFilter:Ss,generateMipmaps:e,type:vn,colorSpace:ga,depthBuffer:t})}function no(i,e,t){return new xt({name:i,uniforms:e,vertexShader:Dt.cube_vert,fragmentShader:t,side:Zn,blending:Fn,depthTest:!1,depthWrite:!1})}function E0(){return no("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function C0(){return no("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:If}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function R0(){return no("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${b0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function cf(){return no("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hf(){return no("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===vl||h===xl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new to(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,g=h===vl||h===xl,x=h===or||h===Zr;if(g||x){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new $r(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return g&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new $r(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===vl?f.mapping=or:h===xl&&(f.mapping=Zr),f}function c(f){let h=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function I0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function p(g){let x=g.index,m=g.attributes.position,d=0;if(m===void 0)return;let S=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?ba:Sa,b=new A(Math.ceil(S/3)*6,1),E=b.array;if(x!==null){let v=x.array;d=x.version;for(let M=0,D=0;M<S;M+=3){let R=v[M+0],U=v[M+1],O=v[M+2];E[D++]=R,E[D++]=U,E[D++]=U,E[D++]=O,E[D++]=O,E[D++]=R}}else{d=m.version;for(let v=0,M=0;v<S;v+=3){let D=v+0,R=v+1,U=v+2;E[M++]=D,E[M++]=R,E[M++]=R,E[M++]=U,E[M++]=U,E[M++]=D}}b.version=d;let w=r.get(g);w&&e.remove(w),r.set(g,b)}function f(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&p(g)}else p(g);return r.get(g)}function h(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:f,dispose:h}}function L0(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function l(p,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,p*a,h),t.update(f,n,h))}function u(p,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function N0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function U0(i,e,t){let n=new WeakMap,s=new cn;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==p){let D=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;h===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let b=o.attributes.position.count*A,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*E*4*p),v=new ya(w,b,E,p);v.type=Ii,v.needsUpdate=!0;let M=A*4;for(let R=0;R<p;R++){let U=m[R],O=d[R],$=S[R],I=b*E*4*R;for(let J=0;J<U.count;J++){let te=J*M;h===!0&&(s.fromBufferAttribute(U,J),w[I+te+0]=s.x,w[I+te+1]=s.y,w[I+te+2]=s.z,w[I+te+3]=0),g===!0&&(s.fromBufferAttribute(O,J),w[I+te+4]=s.x,w[I+te+5]=s.y,w[I+te+6]=s.z,w[I+te+7]=0),x===!0&&(s.fromBufferAttribute($,J),w[I+te+8]=s.x,w[I+te+9]=s.y,w[I+te+10]=s.z,w[I+te+11]=$.itemSize===4?s.w:1)}}f={count:p,texture:v,size:new Be(b,E)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function F0(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,f=e.get(l,p);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var O0={[za]:"LINEAR_TONE_MAPPING",[ka]:"REINHARD_TONE_MAPPING",[Va]:"CINEON_TONE_MAPPING",[ar]:"ACES_FILMIC_TONE_MAPPING",[Ha]:"AGX_TONE_MAPPING",[Wa]:"NEUTRAL_TONE_MAPPING",[Ga]:"CUSTOM_TONE_MAPPING"};function B0(i,e,t,n,s,r){let a=new hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new Xt;u.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let p=new Vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ct(u,p),h=new ir(-1,1,1,-1,0,1),g=null,x=null,m=!1,d,S=null,A=[],b=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let v=0;v<A.length;v++){let M=A[v];M.setSize&&M.setSize(E,w)}},this.setEffects=function(E){A=E,b=A.length>0&&A[0].isRenderPass===!0;let w=a.width,v=a.height;A.length>0&&o===null&&(o=new hn(w,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(w,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&A.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Oi(w,v),r===!0&&(l.format=zi,l.type=bs)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<A.length;D++){let R=A[D];R.setSize&&R.setSize(w,v),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(E,w){if(m||E.toneMapping===es&&A.length===0)return!1;if(S=w,w!==null){let v=w.width,M=w.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return b===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=es,!0},this.hasRenderPass=function(){return b},this.end=function(E,w){E.toneMapping=d,m=!0;let v=a,M=o;for(let D=0;D<A.length;D++){let R=A[D];R.enabled!==!1&&(R.render(E,M,v,w),R.needsSwap!==!1&&(v=M,M=M===o?c:o))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,p.defines={},zt.getTransfer(g)===$t&&(p.defines.SRGB_TRANSFER="");let D=O0[x];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(S),E.render(f,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}var Df=new ai,Lf=new Oi(1,1),Nf=new Aa(1),Uf=new ya,Ff=new el,Of=new Ta,uf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oc(i,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;i.uniform2fv(this.addr,e),Vn(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;i.uniform3fv(this.addr,e),Vn(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;i.uniform4fv(this.addr,e),Vn(t,e)}}function H0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),Vn(t,n)}}function W0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),Vn(t,n)}}function X0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),Vn(t,n)}}function q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;i.uniform2iv(this.addr,e),Vn(t,e)}}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;i.uniform3iv(this.addr,e),Vn(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;i.uniform4iv(this.addr,e),Vn(t,e)}}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;i.uniform2uiv(this.addr,e),Vn(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;i.uniform3uiv(this.addr,e),Vn(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;i.uniform4uiv(this.addr,e),Vn(t,e)}}function lc(i){return i.version===0&&(i.compareFunction=gh,i.needsUpdate=!0),i}function eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=lc(Lf):r=Df,t.setTexture2D(e||r,s)}function tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ff,s)}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=lc(Nf):r=Of,t.setTextureCube(e||r,s)}function ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uf,s)}function sg(i){switch(i){case 5126:return z0;case 35664:return k0;case 35665:return V0;case 35666:return G0;case 35674:return H0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return K0;case 36294:return $0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,e){i.uniform1fv(this.addr,e)}function ag(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function og(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function lg(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function cg(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hg(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ug(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fg(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function pg(i,e){i.uniform3iv(this.addr,e)}function mg(i,e){i.uniform4iv(this.addr,e)}function gg(i,e){i.uniform1uiv(this.addr,e)}function vg(i,e){i.uniform2uiv(this.addr,e)}function xg(i,e){i.uniform3uiv(this.addr,e)}function _g(i,e){i.uniform4uiv(this.addr,e)}function yg(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lc(Lf):a=Df;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Mg(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ff,r[a])}function Sg(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=lc(Nf):a=Of;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function bg(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uf,r[a])}function wg(i){switch(i){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return vg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}var Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function gf(i,e){i.seq.push(e),i.map[e.id]=e}function Tg(i,e,t){let n=i.name,s=n.length;for(bh.lastIndex=0;;){let r=bh.exec(n),a=bh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){gf(t,l===void 0?new Th(o,i,e):new Ah(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Eh(o),gf(t,p)),t=p}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Tg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ag=37297,Eg=0;function Cg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var xf=new St;function Rg(i){zt._getMatrix(xf,zt.workingColorSpace,i);let e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(i)){case va:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _f(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Cg(i.getShaderSource(e),o)}else return r}function Pg(i,e){let t=Rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ig={[za]:"Linear",[ka]:"Reinhard",[Va]:"Cineon",[ar]:"ACESFilmic",[Ha]:"AgX",[Wa]:"Neutral",[Ga]:"Custom"};function Dg(i,e){let t=Ig[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rc=new N;function Lg(){zt.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function Ug(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function eo(i){return i!==""}function yf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(Og,Bg)}function Bg(i,e){let t=Dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ch(t)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(zg,kg)}function kg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Vg={[sr]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function Gg(i){return Vg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hg={[Zr]:"ENVMAP_MODE_REFRACTION"};function Wg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xg={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xg[i.combine]||"ENVMAP_BLENDING_NONE"}function Yg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Gg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Wg(t),p=qg(t),f=Ng(t),h=Ug(r),g=s.createProgram(),x,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(eo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(eo).join(`
`),m.length>0&&(m+=`
`)):(x=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?Dt.tonemapping_pars_fragment:"",t.toneMapping!==es?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Pg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),a=Ch(a),a=yf(a,t),a=Mf(a,t),o=Ch(o),o=yf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=d+x+a,A=d+m+o,b=vf(s,s.VERTEX_SHADER,S),E=vf(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(b)||"",$=s.getShaderInfoLog(E)||"",I=U.trim(),J=O.trim(),te=$.trim(),j=!0,de=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,E);else{let z=_f(s,b,"vertex"),W=_f(s,E,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+z+`
`+W)}else I!==""?mt("WebGLProgram: Program Info Log:",I):(J===""||te==="")&&(de=!1);de&&(R.diagnostics={runnable:j,programLog:I,vertexShader:{log:J,prefix:x},fragmentShader:{log:te,prefix:m}})}s.deleteShader(b),s.deleteShader(E),v=new Kr(s,g),M=Fg(s,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,Ag)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var Zg=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}};function Jg(i){return i===Hs||i===Ka||i===$a}function Kg(i,e,t,n,s,r){let a=new Ur,o=new Rh,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,M,D,R,U,O){let $=R.fog,I=U.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||J,te),de=f[v.type],z=n.precision;v.precision!==null&&(z=n.getMaxPrecision(v.precision),z!==v.precision&&mt("WebGLProgram.getParameters:",v.precision,"not supported, using",z,"instead."));let W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=W!==void 0?W.length:0,Ee=0;I.morphAttributes.position!==void 0&&(Ee=1),I.morphAttributes.normal!==void 0&&(Ee=2),I.morphAttributes.color!==void 0&&(Ee=3);let We,ee,me,Re;if(de){let Oe=ns[de];We=Oe.vertexShader,ee=Oe.fragmentShader}else{We=v.vertexShader,ee=v.fragmentShader;let Oe=o.getVertexShaderStage(v),en=o.getFragmentShaderStage(v);o.update(v,Oe,en),me=Oe.id,Re=en.id}let Pe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,ut=U.isBatchedMesh===!0,Ze=!!v.map,Et=!!v.matcap,Ut=!!j,ot=Ut&&j.isPMREMTexture===!0,qt=!!v.aoMap,bt=!!v.lightMap,Rt=!!v.bumpMap&&v.wireframe===!1,it=!!v.normalMap,un=!!v.displacementMap,Qt=!!v.emissiveMap,fn=!!v.metalnessMap,Yt=!!v.roughnessMap,gn=v.anisotropy>0,B=v.clearcoat>0,sn=v.diffuseRoughness>0,vt=v.dispersion>0,wt=v.retroreflectivity>0,Ie=v.iridescence>0,Zt=v.sheen>0,je=v.transmission>0,rt=gn&&!!v.anisotropyMap,T=B&&!!v.clearcoatMap,_=B&&!!v.clearcoatNormalMap,q=B&&!!v.clearcoatRoughnessMap,xe=sn&&!!v.diffuseRoughnessMap,oe=Ie&&!!v.iridescenceMap,_e=Ie&&!!v.iridescenceThicknessMap,k=Zt&&!!v.sheenColorMap,F=Zt&&!!v.sheenRoughnessMap,V=!!v.specularMap,Se=!!v.specularColorMap,P=!!v.specularIntensityMap,ae=je&&!!v.transmissionMap,se=je&&!!v.thicknessMap,ge=!!v.gradientMap,we=!!v.alphaMap,Ce=v.alphaTest>0,$e=!!v.alphaHash,ht=!!v.extensions,ye=es;v.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ye=i.toneMapping);let tt=ot?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,nt={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:ee,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:z,batching:ut,batchingColor:ut&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:Et,envMap:Ut,envMapMode:Ut&&j.mapping,envMapPMREM:ot,envMapMaxLod:ot?tt.length-1:null,envMapSize:ot?tt[0].width:null,aoMap:qt,lightMap:bt,bumpMap:Rt,normalMap:it,displacementMap:un,emissiveMap:Qt,normalMapObjectSpace:it&&v.normalMapType===Gu,normalMapTangentSpace:it&&v.normalMapType===ja,packedNormalMap:it&&v.normalMapType===ja&&Jg(v.normalMap.format),metalnessMap:fn,roughnessMap:Yt,anisotropy:gn,anisotropyMap:rt,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:q,diffuseRoughness:sn,diffuseRoughnessMap:xe,dispersion:vt,retroreflection:wt,iridescence:Ie,iridescenceMap:oe,iridescenceThicknessMap:_e,sheen:Zt,sheenColorMap:k,sheenRoughnessMap:F,specularMap:V,specularColorMap:Se,specularIntensityMap:P,transmission:je,transmissionMap:ae,thicknessMap:se,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Yr&&v.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:$e,combine:v.combine,mapUv:Ze&&h(v.map.channel),aoMapUv:qt&&h(v.aoMap.channel),lightMapUv:bt&&h(v.lightMap.channel),bumpMapUv:Rt&&h(v.bumpMap.channel),normalMapUv:it&&h(v.normalMap.channel),displacementMapUv:un&&h(v.displacementMap.channel),emissiveMapUv:Qt&&h(v.emissiveMap.channel),metalnessMapUv:fn&&h(v.metalnessMap.channel),roughnessMapUv:Yt&&h(v.roughnessMap.channel),anisotropyMapUv:rt&&h(v.anisotropyMap.channel),clearcoatMapUv:T&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&h(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&h(v.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:k&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:F&&h(v.sheenRoughnessMap.channel),specularMapUv:V&&h(v.specularMap.channel),specularColorMapUv:Se&&h(v.specularColorMap.channel),specularIntensityMapUv:P&&h(v.specularIntensityMap.channel),transmissionMapUv:ae&&h(v.transmissionMap.channel),thicknessMapUv:se&&h(v.thicknessMap.channel),alphaMapUv:we&&h(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(it||gn),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ze||we),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&it===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&zt.getTransfer(v.map.colorSpace)===$t,decodeVideoTextureEmissive:Qt&&v.emissiveMap.isVideoTexture===!0&&zt.getTransfer(v.emissiveMap.colorSpace)===$t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===Zn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ht&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&v.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function x(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)M.push(D),M.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(M,v),d(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function d(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){let M=f[v.type],D;if(M){let R=ns[M];D=zn.clone(R.uniforms)}else D=v.uniforms;return D}function A(v,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new Yg(i,M,v,s),l.push(D),u.set(M,D)),D}function b(v){if(--v.usedTimes===0){let M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:A,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:w}}function $g(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,x,m,d){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=g,S.materialVariant=a(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=m,S.group=d),e++,S}function c(f,h,g,x,m,d,S){S.reversedDepth===!0&&(m=-m);let A=o(f,h,g,x,m,d);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function l(f,h,g,x,m,d){let S=o(f,h,g,x,m,d);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(f,h){t.length>1&&t.sort(f||jg),n.length>1&&n.sort(h||wf),s.length>1&&s.sort(h||wf)}function p(){for(let f=e,h=i.length;f<h;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function Qg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Tf,i.set(n,[a])):s>=r.length?(a=new Tf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nv=0;function iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sv(i){let e=new ev,t=tv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new At,a=new At;function o(l){let u=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let h=0,g=0,x=0,m=0,d=0,S=0,A=0,b=0,E=0,w=0,v=0,M=0,D=0,R=0;l.sort(iv);for(let O=0,$=l.length;O<$;O++){let I=l[O],J=I.color,te=I.intensity,j=I.distance,de=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hs?de=I.shadow.map.texture:de=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=J.r*te,p+=J.g*te,f+=J.b*te;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],te);R++}else if(I.isSunLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,K=t.get(I);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=de;let Ee=W.getViewportCount();for(let We=0;We<Ee;We++)n.sunShadowMatrix[x+We]=W.getMatrix(We),n.sunShadowCascade[x+We]=W._cascadeData[We];x+=Ee,g++}n.sun[h]=z,h++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,K=t.get(I);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=de,n.directionalShadowMatrix[m]=I.shadow.matrix,E++}n.directional[m]=z,m++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(J).multiplyScalar(te),z.distance=j,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[S]=z;let W=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,W.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[S]=W.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.spotShadow[S]=K,n.spotShadowMap[S]=de,v++}S++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(J).multiplyScalar(te),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=z,A++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let W=I.shadow,K=t.get(I);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,n.pointShadow[d]=K,n.pointShadowMap[d]=de,n.pointShadowMatrix[d]=I.shadow.matrix,w++}n.point[d]=z,d++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(te),z.groundColor.copy(I.groundColor).multiplyScalar(te),n.hemi[b]=z,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;let U=n.hash;(U.sunLength!==h||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==S||U.rectAreaLength!==A||U.hemiLength!==b||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==v||U.numSpotMaps!==M||U.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=d,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,U.sunLength=h,U.directionalLength=m,U.pointLength=d,U.spotLength=S,U.rectAreaLength=A,U.hemiLength=b,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=v,U.numSpotMaps=M,U.numLightProbes=R,n.version=nv++)}function c(l,u){let p=0,f=0,h=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let S=0,A=l.length;S<A;S++){let b=l[S];if(b.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),p++}else if(b.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(b.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(b.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),h++}else if(b.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function Af(i){let e=new sv(i),t=[],n=[],s=[];function r(p){u.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function c(){e.setup(t),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function l(p){e.setupView(t,p)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function rv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Af(i),e.set(s,[o])):r>=a.length?(o=new Af(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],cv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ef=new At,Qa=new N,wh=new N;function hv(i,e,t){let n=new Us,s=new Be,r=new Be,a=new cn,o=new Gr,c=new sl,l={},u=t.maxTextureSize,p={[Gs]:Zn,[Zn]:Gs,[bn]:bn},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:av,fragmentShader:ov}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let d=this.type;this.render=function(w,v,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===bu&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let $=d!==this.type;$&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(J=>J.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,J=w.length;I<J;I++){let te=w[I],j=te.shadow;if(j===void 0){mt("WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let de=j.getFrameExtents();s.multiply(de),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,j.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=z,j.map===null||$===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===qr){if(te.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new hn(s.x,s.y,{format:Hs,type:vn,minFilter:ri,magFilter:ri,generateMipmaps:!1}),j.map.texture.name=te.name+".shadowMap",j.map.depthTexture=new Oi(s.x,s.y,Ii),j.map.depthTexture.name=te.name+".shadowMapDepth",j.map.depthTexture.format=gs,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn}else te.isPointLight?(j.map=new to(s.x),j.map.depthTexture=new Aa(s.x,Bi)):(j.map=new hn(s.x,s.y),j.map.depthTexture=new Oi(s.x,s.y,Bi)),j.map.depthTexture.name=te.name+".shadowMap",j.map.depthTexture.format=gs,this.type===sr?(j.map.depthTexture.compareFunction=z?mh:ph,j.map.depthTexture.minFilter=ri,j.map.depthTexture.magFilter=ri):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let W=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();te.isPointLight!==!0&&j.updateMatrices(te,M);let K=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:M.layers;for(let Ee=0;Ee<W;Ee++){let We=j.getCamera(Ee);if(te.isPointLight){let ee=j.camera,me=j.matrix,Re=te.distance||ee.far;Re!==ee.far&&(ee.far=Re,ee.updateProjectionMatrix()),Qa.setFromMatrixPosition(te.matrixWorld),ee.position.copy(Qa),wh.copy(ee.position),wh.add(lv[Ee]),ee.up.copy(cv[Ee]),ee.lookAt(wh),ee.updateMatrixWorld(),me.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Ef.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Ef,ee.coordinateSystem,ee.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(j.map),i.clear());let ee=j.getViewport(Ee);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),O.viewport(a)}n=j.getFrustum(Ee),b(v,M,We,te,K,this.type)}j.isPointLightShadow!==!0&&this.type===qr&&S(j,M),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(D,R,U)};function S(w,v){let M=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(s.x,s.y,{format:Hs,type:vn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(v,null,M,f,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(v,null,M,h,x,null)}function A(w,v,M,D){let R=null,U=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let O=R.uuid,$=v.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let J=I[$];J===void 0&&(J=R.clone(),I[$]=J,v.addEventListener("dispose",E)),R=J}if(R.visible=v.visible,R.wireframe=v.wireframe,D===qr?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:p[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=M}return R}function b(w,v,M,D,R,U){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===qr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),J=w.material;if(Array.isArray(J)){let te=I.groups;for(let j=0,de=te.length;j<de;j++){let z=te[j],W=J[z.materialIndex];if(W&&W.visible){let K=A(w,W,D,U);w.onBeforeShadow(i,w,v,M,I,K,z),i.renderBufferDirect(M,null,I,K,w,z),w.onAfterShadow(i,w,v,M,I,K,z)}}}else if(J.visible){let te=A(w,J,D,U);w.onBeforeShadow(i,w,v,M,I,te,null),i.renderBufferDirect(M,null,I,te,w,null),w.onAfterShadow(i,w,v,M,I,te,null)}}let $=w.children;for(let I=0,J=$.length;I<J;I++)b($[I],v,M,D,R,U)}function E(w){w.target.removeEventListener("dispose",E);for(let M in l){let D=l[M],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function uv(i,e){function t(){let P=!1,ae=new cn,se=null,ge=new cn(0,0,0,0);return{setMask:function(we){se!==we&&!P&&(i.colorMask(we,we,we,we),se=we)},setLocked:function(we){P=we},setClear:function(we,Ce,$e,ht,ye){ye===!0&&(we*=ht,Ce*=ht,$e*=ht),ae.set(we,Ce,$e,ht),ge.equals(ae)===!1&&(i.clearColor(we,Ce,$e,ht),ge.copy(ae))},reset:function(){P=!1,se=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,se=null,ge=null,we=null;return{setReversed:function(Ce){if(ae!==Ce){let $e=e.get("EXT_clip_control");Ce?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ae=Ce;let ht=we;we=null,this.setClear(ht)}},getReversed:function(){return ae},setTest:function(Ce){Ce?be(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Ce){se!==Ce&&!P&&(i.depthMask(Ce),se=Ce)},setFunc:function(Ce){if(ae&&(Ce=ju[Ce]),ge!==Ce){switch(Ce){case Go:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Ce}},setLocked:function(Ce){P=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,ae&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){P=!1,se=null,ge=null,we=null,ae=!1}}}function s(){let P=!1,ae=null,se=null,ge=null,we=null,Ce=null,$e=null,ht=null,ye=null;return{setTest:function(tt){P||(tt?be(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!P&&(i.stencilMask(tt),ae=tt)},setFunc:function(tt,nt,Oe){(se!==tt||ge!==nt||we!==Oe)&&(i.stencilFunc(tt,nt,Oe),se=tt,ge=nt,we=Oe)},setOp:function(tt,nt,Oe){(Ce!==tt||$e!==nt||ht!==Oe)&&(i.stencilOp(tt,nt,Oe),Ce=tt,$e=nt,ht=Oe)},setLocked:function(tt){P=tt},setClear:function(tt){ye!==tt&&(i.clearStencil(tt),ye=tt)},reset:function(){P=!1,ae=null,se=null,ge=null,we=null,Ce=null,$e=null,ht=null,ye=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,u={},p={},f={},h=new WeakMap,g=[],x=null,m=!1,d=null,S=null,A=null,b=null,E=null,w=null,v=null,M=new Te(0,0,0),D=0,R=!1,U=null,O=null,$=null,I=null,J=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,de=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=de>=1):z.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=de>=2);let W=null,K={},Ee=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),ee=new cn().fromArray(Ee),me=new cn().fromArray(We);function Re(P,ae,se,ge){let we=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(P,Ce),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<se;$e++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ae+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ce}let Pe={};Pe[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),be(i.DEPTH_TEST),a.setFunc(Ir),Rt(!1),it(eh),be(i.CULL_FACE),qt(Fn);function be(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ne(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ut(P,ae){return f[P]!==ae?(i.bindFramebuffer(P,ae),f[P]=ae,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ze(P,ae){let se=g,ge=!1;if(P){se=h.get(ae),se===void 0&&(se=[],h.set(ae,se));let we=P.textures;if(se.length!==we.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,$e=we.length;Ce<$e;Ce++)se[Ce]=i.COLOR_ATTACHMENT0+Ce;se.length=we.length,ge=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ge=!0);ge&&i.drawBuffers(se)}function Et(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let Ut={[Pi]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Ut[Au]=i.MIN,Ut[Eu]=i.MAX;let ot={[rr]:i.ZERO,[Cu]:i.ONE,[Ru]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Ba]:i.DST_COLOR,[Oa]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(P,ae,se,ge,we,Ce,$e,ht,ye,tt){if(P===Fn){m===!0&&(Ne(i.BLEND),m=!1);return}if(m===!1&&(be(i.BLEND),m=!0),P!==gl){if(P!==d||tt!==R){if((S!==Pi||E!==Pi)&&(i.blendEquation(i.FUNC_ADD),S=Pi,E=Pi),tt)switch(P){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",P);break}else switch(P){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",P);break}A=null,b=null,w=null,v=null,M.set(0,0,0),D=0,d=P,R=tt}return}we=we||ae,Ce=Ce||se,$e=$e||ge,(ae!==S||we!==E)&&(i.blendEquationSeparate(Ut[ae],Ut[we]),S=ae,E=we),(se!==A||ge!==b||Ce!==w||$e!==v)&&(i.blendFuncSeparate(ot[se],ot[ge],ot[Ce],ot[$e]),A=se,b=ge,w=Ce,v=$e),(ht.equals(M)===!1||ye!==D)&&(i.blendColor(ht.r,ht.g,ht.b,ye),M.copy(ht),D=ye),d=P,R=!1}function bt(P,ae){P.side===bn?Ne(i.CULL_FACE):be(i.CULL_FACE);let se=P.side===Zn;ae&&(se=!se),Rt(se),P.blending===Yr&&P.transparent===!1?qt(Fn):qt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ge=P.stencilWrite;o.setTest(ge),ge&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Qt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(P){U!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),U=P)}function it(P){P!==Mu?(be(i.CULL_FACE),P!==O&&(P===eh?i.cullFace(i.BACK):P===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),O=P}function un(P){P!==$&&(j&&i.lineWidth(P),$=P)}function Qt(P,ae,se){P?(be(i.POLYGON_OFFSET_FILL),(I!==ae||J!==se)&&(I=ae,J=se,a.getReversed()&&(ae=-ae,se=-se),i.polygonOffset(ae,se))):Ne(i.POLYGON_OFFSET_FILL)}function fn(P){P?be(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Yt(P){P===void 0&&(P=i.TEXTURE0+te-1),W!==P&&(i.activeTexture(P),W=P)}function gn(P,ae,se){se===void 0&&(W===null?se=i.TEXTURE0+te-1:se=W);let ge=K[se];ge===void 0&&(ge={type:void 0,texture:void 0},K[se]=ge),(ge.type!==P||ge.texture!==ae)&&(W!==se&&(i.activeTexture(se),W=se),i.bindTexture(P,ae||Pe[P]),ge.type=P,ge.texture=ae)}function B(){let P=K[W];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function sn(){try{i.compressedTexImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function vt(){try{i.compressedTexImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function wt(){try{i.texSubImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function Ie(){try{i.texSubImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function Zt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function je(){try{i.compressedTexSubImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function rt(){try{i.texStorage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function T(){try{i.texStorage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function _(){try{i.texImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function q(){try{i.texImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function xe(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function oe(P,ae){p[P]!==ae&&(i.pixelStorei(P,ae),p[P]=ae)}function _e(P){ee.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function k(P){me.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),me.copy(P))}function F(P,ae){let se=l.get(ae);se===void 0&&(se=new WeakMap,l.set(ae,se));let ge=se.get(P);ge===void 0&&(ge=i.getUniformBlockIndex(ae,P.name),i.uniformBlockBinding(ae,ge,ge),se.set(P,ge))}function V(P,ae,se){let we=l.get(ae).get(P);c[we]!==se&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,se),c[we]=se)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},W=null,K={},f={},c={},h=new WeakMap,g=[],x=null,m=!1,d=null,S=null,A=null,b=null,E=null,w=null,v=null,M=new Te(0,0,0),D=0,R=!1,U=null,O=null,$=null,I=null,J=null,ee.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:be,disable:Ne,bindFramebuffer:ut,drawBuffers:Ze,useProgram:Et,setBlending:qt,setMaterial:bt,setFlipSided:Rt,setCullFace:it,setLineWidth:un,setPolygonOffset:Qt,setScissorTest:fn,activeTexture:Yt,bindTexture:gn,unbindTexture:B,compressedTexImage2D:sn,compressedTexImage3D:vt,texImage2D:_,texImage3D:q,pixelStorei:oe,getParameter:xe,updateUBOMapping:F,uniformBlockBinding:V,texStorage2D:rt,texStorage3D:T,texSubImage2D:wt,texSubImage3D:Ie,compressedTexSubImage2D:Zt,compressedTexSubImage3D:je,scissor:_e,viewport:k,reset:Se}}function fv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,p=new Set,f,h=new WeakMap,g=new Set,x=new FinalizationRegistry(T=>g.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,_){return m?new OffscreenCanvas(T,_):xa("canvas")}function S(T,_,q){let xe=1,oe=rt(T);if((oe.width>q||oe.height>q)&&(xe=q/Math.max(oe.width,oe.height)),xe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let _e=Math.floor(xe*oe.width),k=Math.floor(xe*oe.height);f===void 0&&(f=d(_e,k));let F=_?d(_e,k):f;return F.width=_e,F.height=k,F.getContext("2d").drawImage(T,0,0,_e,k),mt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+_e+"x"+k+")."),F}else return"data"in T&&mt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),T;return T}function A(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,_,q,xe,oe,_e=!1){if(T!==null){if(i[T]!==void 0)return i[T];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k;xe&&(k=e.get("EXT_texture_norm16"),k||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=_;if(_===i.RED&&(q===i.FLOAT&&(F=i.R32F),q===i.HALF_FLOAT&&(F=i.R16F),q===i.UNSIGNED_BYTE&&(F=i.R8),q===i.UNSIGNED_SHORT&&k&&(F=k.R16_EXT),q===i.SHORT&&k&&(F=k.R16_SNORM_EXT)),_===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(F=i.R8UI),q===i.UNSIGNED_SHORT&&(F=i.R16UI),q===i.UNSIGNED_INT&&(F=i.R32UI),q===i.BYTE&&(F=i.R8I),q===i.SHORT&&(F=i.R16I),q===i.INT&&(F=i.R32I)),_===i.RG&&(q===i.FLOAT&&(F=i.RG32F),q===i.HALF_FLOAT&&(F=i.RG16F),q===i.UNSIGNED_BYTE&&(F=i.RG8),q===i.UNSIGNED_SHORT&&k&&(F=k.RG16_EXT),q===i.SHORT&&k&&(F=k.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(F=i.RG8UI),q===i.UNSIGNED_SHORT&&(F=i.RG16UI),q===i.UNSIGNED_INT&&(F=i.RG32UI),q===i.BYTE&&(F=i.RG8I),q===i.SHORT&&(F=i.RG16I),q===i.INT&&(F=i.RG32I)),_===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(F=i.RGB8UI),q===i.UNSIGNED_SHORT&&(F=i.RGB16UI),q===i.UNSIGNED_INT&&(F=i.RGB32UI),q===i.BYTE&&(F=i.RGB8I),q===i.SHORT&&(F=i.RGB16I),q===i.INT&&(F=i.RGB32I)),_===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),q===i.UNSIGNED_INT&&(F=i.RGBA32UI),q===i.BYTE&&(F=i.RGBA8I),q===i.SHORT&&(F=i.RGBA16I),q===i.INT&&(F=i.RGBA32I)),_===i.RGB&&(q===i.UNSIGNED_SHORT&&k&&(F=k.RGB16_EXT),q===i.SHORT&&k&&(F=k.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),_===i.RGBA){let V=_e?va:zt.getTransfer(oe);q===i.FLOAT&&(F=i.RGBA32F),q===i.HALF_FLOAT&&(F=i.RGBA16F),q===i.UNSIGNED_BYTE&&(F=V===$t?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&k&&(F=k.RGBA16_EXT),q===i.SHORT&&k&&(F=k.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function v(T,_){let q;return T?_===null||_===Bi||_===bs?q=i.DEPTH24_STENCIL8:_===Ii?q=i.DEPTH32F_STENCIL8:_===Jr&&(q=i.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bi||_===bs?q=i.DEPTH_COMPONENT24:_===Ii?q=i.DEPTH_COMPONENT32F:_===Jr&&(q=i.DEPTH_COMPONENT16),q}function M(T,_){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Sn&&T.minFilter!==ri?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function D(T){let _=new WeakRef(T);n.get(T).__ref=_,g.add(_),x.register(T,_,_)}function R(T){let _=n.get(T).__ref;_!==void 0&&(g.delete(_),x.unregister(_))}function U(T){$(T.target)}function O(T){I(T.target)}function $(T){T.removeEventListener("dispose",U),R(T),te(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&p.delete(T)}function I(T){T.removeEventListener("dispose",O),R(T),de(T)}function J(){for(let T of g){let _=T.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):$(_))}g.clear(),p.clear()}function te(T){let _=n.get(T);if(_.__webglInit===void 0)return;let q=T.source,xe=h.get(q);if(xe){let oe=xe[_.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&j(T),Object.keys(xe).length===0&&h.delete(q)}n.remove(T)}function j(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let q=T.source,xe=h.get(q);delete xe[_.__cacheKey],a.memory.textures--}function de(T){let _=n.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();let q=T.depthTexture;if(q&&q.renderTarget===T&&$(q),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(_.__webglFramebuffer[oe]))for(let _e=0;_e<_.__webglFramebuffer[oe].length;_e++)i.deleteFramebuffer(_.__webglFramebuffer[oe][_e]);else i.deleteFramebuffer(_.__webglFramebuffer[oe]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[oe])}else{if(Array.isArray(_.__webglFramebuffer))for(let oe=0;oe<_.__webglFramebuffer.length;oe++)i.deleteFramebuffer(_.__webglFramebuffer[oe]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let oe=0;oe<_.__webglColorRenderbuffer.length;oe++)_.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[oe]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let xe=T.textures;for(let oe=0,_e=xe.length;oe<_e;oe++){let k=n.get(xe[oe]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(xe[oe])}n.remove(T)}let z=0;function W(){z=0}function K(){return z}function Ee(T){z=T}function We(){let T=z;return T>=s.maxTextures&&mt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function ee(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function me(T,_){let q=n.get(T);if(T.isVideoTexture&&Zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&q.__version!==T.version){let xe=T.image;if(xe===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(q,T,_);return}}else T.isExternalTexture&&(q.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+_)}function Re(T,_){let q=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){bt(q,T,_);return}else T.isExternalTexture&&(q.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+_)}function Pe(T,_){let q=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){bt(q,T,_);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+_)}function be(T,_){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Rt(q,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+_)}let Ne={[Ci]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},ut={[Sn]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[ri]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},Ze={[Wu]:i.NEVER,[gh]:i.ALWAYS,[Xu]:i.LESS,[ph]:i.LEQUAL,[qu]:i.EQUAL,[mh]:i.GEQUAL,[Yu]:i.GREATER,[Zu]:i.NOTEQUAL};function Et(T,_){if(_.type===Ii&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ri||_.magFilter===_l||_.magFilter===Xa||_.magFilter===Ss||_.minFilter===ri||_.minFilter===_l||_.minFilter===Xa||_.minFilter===Ss)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ne[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ne[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ne[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ze[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Sn||_.minFilter!==Xa&&_.minFilter!==Ss||_.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ut(T,_){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",U),D(_));let xe=_.source,oe=h.get(xe);oe===void 0&&(oe={},h.set(xe,oe));let _e=ee(_);if(_e!==T.__cacheKey){oe[_e]===void 0&&(oe[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),oe[_e].usedTimes++;let k=oe[T.__cacheKey];k!==void 0&&(oe[T.__cacheKey].usedTimes--,k.usedTimes===0&&j(_)),T.__cacheKey=_e,T.__webglTexture=oe[_e].texture}return q}function ot(T,_,q){return Math.floor(Math.floor(T/q)/_)}function qt(T,_,q,xe){let _e=T.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,q,xe,_.data);else{_e.sort((P,ae)=>P.start-ae.start);let k=0;for(let P=1;P<_e.length;P++){let ae=_e[k],se=_e[P],ge=ae.start+ae.count,we=ot(se.start,_.width,4),Ce=ot(ae.start,_.width,4);se.start<=ge+1&&we===Ce&&ot(se.start+se.count-1,_.width,4)===we?ae.count=Math.max(ae.count,se.start+se.count-ae.start):(++k,_e[k]=se)}_e.length=k+1;let F=t.getParameter(i.UNPACK_ROW_LENGTH),V=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let P=0,ae=_e.length;P<ae;P++){let se=_e[P],ge=Math.floor(se.start/4),we=Math.ceil(se.count/4),Ce=ge%_.width,$e=Math.floor(ge/_.width),ht=we,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(i.TEXTURE_2D,0,Ce,$e,ht,ye,q,xe,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,F),t.pixelStorei(i.UNPACK_SKIP_PIXELS,V),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function bt(T,_,q){let xe=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(xe=i.TEXTURE_3D);let oe=Ut(T,_),_e=_.source;t.bindTexture(xe,T.__webglTexture,i.TEXTURE0+q);let k=n.get(_e);if(_e.version!==k.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ye=zt.getPrimaries(zt.workingColorSpace),tt=_.colorSpace===ws?null:zt.getPrimaries(_.colorSpace),nt=_.colorSpace===ws||ye===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let V=S(_.image,!1,s.maxTextureSize);V=je(_,V);let Se=r.convert(_.format,_.colorSpace),P=r.convert(_.type),ae=w(_.internalFormat,Se,P,_.normalized,_.colorSpace,_.isVideoTexture);Et(xe,_);let se,ge=_.mipmaps,we=_.isVideoTexture!==!0,Ce=k.__version===void 0||oe===!0,$e=_e.dataReady,ht=M(_,V);if(_.isDepthTexture)ae=v(_.format===zi,_.type),Ce&&(we?t.texStorage2D(i.TEXTURE_2D,1,ae,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,ae,V.width,V.height,0,Se,P,null));else if(_.isDataTexture)if(ge.length>0){we&&Ce&&t.texStorage2D(i.TEXTURE_2D,ht,ae,ge[0].width,ge[0].height);for(let ye=0,tt=ge.length;ye<tt;ye++)se=ge[ye],we?$e&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,se.width,se.height,Se,P,se.data):t.texImage2D(i.TEXTURE_2D,ye,ae,se.width,se.height,0,Se,P,se.data);_.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(i.TEXTURE_2D,ht,ae,V.width,V.height),$e&&qt(_,V,Se,P)):t.texImage2D(i.TEXTURE_2D,0,ae,V.width,V.height,0,Se,P,V.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ae,ge[0].width,ge[0].height,V.depth);for(let ye=0,tt=ge.length;ye<tt;ye++)if(se=ge[ye],_.format!==Mi)if(Se!==null)if(we){if($e)if(_.layerUpdates.size>0){let nt=Sh(se.width,se.height,_.format,_.type);for(let Oe of _.layerUpdates){let en=se.data.subarray(Oe*nt/se.data.BYTES_PER_ELEMENT,(Oe+1)*nt/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Oe,se.width,se.height,1,Se,en)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,se.width,se.height,V.depth,Se,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,ae,se.width,se.height,V.depth,0,se.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,se.width,se.height,V.depth,Se,P,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,ae,se.width,se.height,V.depth,0,Se,P,se.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(i.TEXTURE_2D,ht,ae,ge[0].width,ge[0].height);for(let ye=0,tt=ge.length;ye<tt;ye++)se=ge[ye],_.format!==Mi?Se!==null?we?$e&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,se.width,se.height,Se,se.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,ae,se.width,se.height,0,se.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?$e&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,se.width,se.height,Se,P,se.data):t.texImage2D(i.TEXTURE_2D,ye,ae,se.width,se.height,0,Se,P,se.data)}else if(_.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ae,V.width,V.height,V.depth),$e)if(_.layerUpdates.size>0){let ye=Sh(V.width,V.height,_.format,_.type);for(let tt of _.layerUpdates){let nt=V.data.subarray(tt*ye/V.data.BYTES_PER_ELEMENT,(tt+1)*ye/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,V.width,V.height,1,Se,P,nt)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Se,P,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,V.width,V.height,V.depth,0,Se,P,V.data);else if(_.isData3DTexture)we?(Ce&&t.texStorage3D(i.TEXTURE_3D,ht,ae,V.width,V.height,V.depth),$e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Se,P,V.data)):t.texImage3D(i.TEXTURE_3D,0,ae,V.width,V.height,V.depth,0,Se,P,V.data);else if(_.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(i.TEXTURE_2D,ht,ae,V.width,V.height);else{let ye=V.width,tt=V.height;for(let nt=0;nt<ht;nt++)t.texImage2D(i.TEXTURE_2D,nt,ae,ye,tt,0,Se,P,null),ye>>=1,tt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),V.parentNode!==ye){ye.appendChild(V),p.add(_),ye.onpaint=tt=>{let nt=tt.changedElements;for(let Oe of p)nt.includes(Oe.image)&&(Oe.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,V);else{let nt=i.RGBA,Oe=i.RGBA,en=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Oe,en,V)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(we&&Ce){let ye=rt(ge[0]);t.texStorage2D(i.TEXTURE_2D,ht,ae,ye.width,ye.height)}for(let ye=0,tt=ge.length;ye<tt;ye++)se=ge[ye],we?$e&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Se,P,se):t.texImage2D(i.TEXTURE_2D,ye,ae,Se,P,se);_.generateMipmaps=!1}else if(we){if(Ce){let ye=rt(V);t.texStorage2D(i.TEXTURE_2D,ht,ae,ye.width,ye.height)}$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,P,V)}else t.texImage2D(i.TEXTURE_2D,0,ae,Se,P,V);A(_)&&_.mipmapsAutoUpdate===!0&&b(xe),k.__version=_e.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Rt(T,_,q){if(_.image.length!==6)return;let xe=Ut(T,_),oe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+q);let _e=n.get(oe);if(oe.version!==_e.__version||xe===!0){t.activeTexture(i.TEXTURE0+q);let k=zt.getPrimaries(zt.workingColorSpace),F=_.colorSpace===ws?null:zt.getPrimaries(_.colorSpace),V=_.colorSpace===ws||k===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,P=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let Oe=0;Oe<6;Oe++)!Se&&!P?ae[Oe]=S(_.image[Oe],!0,s.maxCubemapSize):ae[Oe]=P?_.image[Oe].image:_.image[Oe],ae[Oe]=je(_,ae[Oe]);let se=ae[0],ge=r.convert(_.format,_.colorSpace),we=r.convert(_.type),Ce=w(_.internalFormat,ge,we,_.normalized,_.colorSpace),$e=_.isVideoTexture!==!0,ht=_e.__version===void 0||xe===!0,ye=oe.dataReady,tt=M(_,se);Et(i.TEXTURE_CUBE_MAP,_);let nt;if(_.isDepthTexture){if(Ce=v(_.format===zi,_.type),ht)if($e)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,se.width,se.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,se.width,se.height,0,ge,we,null)}else if(Se){$e&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ce,se.width,se.height);for(let Oe=0;Oe<6;Oe++){nt=ae[Oe].mipmaps;for(let en=0;en<nt.length;en++){let Jt=nt[en];_.format!==Mi?ge!==null?$e?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en,0,0,Jt.width,Jt.height,ge,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en,Ce,Jt.width,Jt.height,0,Jt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en,0,0,Jt.width,Jt.height,ge,we,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en,Ce,Jt.width,Jt.height,0,ge,we,Jt.data)}}}else{if(nt=_.mipmaps,$e&&ht){nt.length>0&&tt++;let Oe=rt(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ce,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(P){$e?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ae[Oe].width,ae[Oe].height,ge,we,ae[Oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,ae[Oe].width,ae[Oe].height,0,ge,we,ae[Oe].data);for(let en=0;en<nt.length;en++){let ti=nt[en].image[Oe].image;$e?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en+1,0,0,ti.width,ti.height,ge,we,ti.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en+1,Ce,ti.width,ti.height,0,ge,we,ti.data)}}else{$e?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ge,we,ae[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,ge,we,ae[Oe]);for(let en=0;en<nt.length;en++){let Jt=nt[en];$e?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en+1,0,0,ge,we,Jt.image[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,en+1,Ce,ge,we,Jt.image[Oe])}}}A(_)&&_.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),_e.__version=oe.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function it(T,_,q,xe,oe,_e){let k=r.convert(q.format,q.colorSpace),F=r.convert(q.type),V=w(q.internalFormat,k,F,q.normalized,q.colorSpace),Se=n.get(_),P=n.get(q);if(P.__renderTarget=_,!Se.__hasExternalTextures){let ae=Math.max(1,_.width>>_e),se=Math.max(1,_.height>>_e);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,_e,V,ae,se,_.depth,0,k,F,null):t.texImage2D(oe,_e,V,ae,se,0,k,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,oe,P.__webglTexture,0,wt(_)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,oe,P.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function un(T,_,q){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let xe=_.depthTexture,oe=xe&&xe.isDepthTexture?xe.type:null,_e=v(_.stencilBuffer,oe),k=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(_),_e,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(_),_e,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_e,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,T)}else{let xe=_.textures;for(let oe=0;oe<xe.length;oe++){let _e=xe[oe],k=r.convert(_e.format,_e.colorSpace),F=r.convert(_e.type),V=w(_e.internalFormat,k,F,_e.normalized,_e.colorSpace);Ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(_),V,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(_),V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(T,_,q){let xe=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(_.depthTexture);oe.__renderTarget=_;let _e=xe?_.depthTexture.image[0]:_.depthTexture.image;(!oe.__webglTexture||_e.width!==_.width||_e.height!==_.height)&&(_e.width=_.width,_e.height=_.height,_.depthTexture.needsUpdate=!0),xe?be(_.depthTexture,0):me(_.depthTexture,0);let k=oe.__webglTexture,F=wt(_),V=xe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Se=_.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===gs)Ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,V,k,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,Se,V,k,0);else if(_.depthTexture.format===zi)Ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,V,k,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,Se,V,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(T){let _=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let xe=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),xe){let oe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,xe.removeEventListener("dispose",oe)};xe.addEventListener("dispose",oe),_.__depthDisposeCallback=oe}_.__boundDepthTexture=xe}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let xe=0;xe<6;xe++)Qt(_.__webglFramebuffer[xe],T,xe);else T.texture.mipmaps.length>0?Qt(_.__webglFramebuffer[0],T,0):Qt(_.__webglFramebuffer,T,0);else if(q){_.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[xe]),_.__webglDepthbuffer[xe]===void 0)_.__webglDepthbuffer[xe]=i.createRenderbuffer(),un(_.__webglDepthbuffer[xe],T,!1);else{let oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=_.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,_e)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),un(_.__webglDepthbuffer,T,!1);else{let oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(T,_,q){let xe=n.get(T);_!==void 0&&it(xe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&fn(T)}function gn(T){let _=T.texture,q=n.get(T),xe=n.get(_);T.addEventListener("dispose",O),D(T);let oe=T.textures,_e=T.isWebGLCubeRenderTarget===!0,k=oe.length>1;if(k||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=_.version,a.memory.textures++),_e){q.__webglFramebuffer=[];for(let F=0;F<6;F++)if(_.mipmaps.length>0){q.__webglFramebuffer[F]=[];for(let V=0;V<_.mipmaps.length;V++)q.__webglFramebuffer[F][V]=i.createFramebuffer()}else q.__webglFramebuffer[F]=i.createFramebuffer()}else{if(_.mipmaps.length>0){q.__webglFramebuffer=[];for(let F=0;F<_.mipmaps.length;F++)q.__webglFramebuffer[F]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(k)for(let F=0,V=oe.length;F<V;F++){let Se=n.get(oe[F]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ie(T)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let F=0;F<oe.length;F++){let V=oe[F];q.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[F]);let Se=r.convert(V.format,V.colorSpace),P=r.convert(V.type),ae=w(V.internalFormat,Se,P,V.normalized,V.colorSpace,T.isXRRenderTarget===!0),se=wt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,q.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),un(q.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Et(i.TEXTURE_CUBE_MAP,_);for(let F=0;F<6;F++)if(_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)it(q.__webglFramebuffer[F][V],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,V);else it(q.__webglFramebuffer[F],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);A(_)?b(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(k){for(let F=0,V=oe.length;F<V;F++){let Se=oe[F],P=n.get(Se),ae=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,P.__webglTexture),Et(ae,Se),it(q.__webglFramebuffer,T,Se,i.COLOR_ATTACHMENT0+F,ae,0),A(Se)&&b(ae)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(F=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,xe.__webglTexture),Et(F,_),_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)it(q.__webglFramebuffer[V],T,_,i.COLOR_ATTACHMENT0,F,V);else it(q.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,F,0);A(_)?b(F):_.mipmaps.length>0&&i.texParameteri(F,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&fn(T)}function B(T){let _=T.textures;for(let q=0,xe=_.length;q<xe;q++){let oe=_[q];if(A(oe)&&oe.mipmapsAutoUpdate===!0){let _e=E(T),k=n.get(oe).__webglTexture;t.bindTexture(_e,k),b(_e),t.unbindTexture()}}}let sn=[];function vt(T){if(T.samples>0){if(Ie(T)===!1){let _=T.textures,q=T.width,xe=T.height,oe=i.COLOR_BUFFER_BIT,_e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(T),F=_.length>1;if(F)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[Se]);let P=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,q,xe,0,0,q,xe,oe,i.NEAREST),c===!0&&(sn.length=0,sn.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&sn.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,k.__webglColorRenderbuffer[Se]);let P=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function wt(T){return Math.min(s.maxSamples,T.samples)}function Ie(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Zt(T){let _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function je(T,_){let q=T.colorSpace,xe=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==ga&&q!==ws&&(zt.getTransfer(q)===$t?(xe!==Mi||oe!==qn)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",q)),_}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=We,this.resetTextureUnits=W,this.getTextureUnits=K,this.setTextureUnits=Ee,this.setTexture2D=me,this.setTexture2DArray=Re,this.setTexture3D=Pe,this.setTextureCube=be,this.rebindTextures=Yt,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ie,this.dispose=J}function dv(i,e){function t(n,s=ws){let r,a=zt.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Ii)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Mi)return i.RGBA;if(n===gs)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===Hs)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===qa||n===Ya||n===Za||n===Ja)if(a===$t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Cl||n===Rl||n===Pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===Ka||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Dl)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return r.COMPRESSED_R11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return r.COMPRESSED_RG11_EAC;if(n===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ol)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===jl||n===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$l)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===tc||n===$a||n===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new Ih,d={},S=t.getContextAttributes(),A=null,b=null,E=[],w=[],v=new Be,M=null,D=null,R=new Qn;R.viewport=new cn;let U=new Qn;U.viewport=new cn;let O=[R,U],$=new ml,I=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=E[ee];return me===void 0&&(me=new Fr,E[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=E[ee];return me===void 0&&(me=new Fr,E[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=E[ee];return me===void 0&&(me=new Fr,E[ee]=me),me.getHandSpace()};function te(ee){let me=w.indexOf(ee.inputSource);if(me===-1)return;let Re=E[me];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,l||a),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",de);for(let ee=0;ee<E.length;ee++){let me=w[ee];me!==null&&(w[ee]=null,E[ee].disconnect(me))}I=null,J=null,m.reset();for(let ee in d)delete d[ee];if(e.setRenderTarget(A),h=null,f=null,p=null,s=null,b=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),D!==null){let ee=D.camera;ee.fov=D.fov,ee.zoom=D.zoom,ee.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",j),s.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Pe=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=S.stencil?zi:gs,Pe=S.stencil?bs:Bi);let Ne={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new hn(f.textureWidth,f.textureHeight,{format:Mi,type:qn,depthTexture:new Oi(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new hn(h.framebufferWidth,h.framebufferHeight,{format:Mi,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function de(ee){for(let me=0;me<ee.removed.length;me++){let Re=ee.removed[me],Pe=w.indexOf(Re);Pe>=0&&(w[Pe]=null,E[Pe].disconnect(Re))}for(let me=0;me<ee.added.length;me++){let Re=ee.added[me],Pe=w.indexOf(Re);if(Pe===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=w.length){w.push(Re),Pe=Ne;break}else if(w[Ne]===null){w[Ne]=Re,Pe=Ne;break}if(Pe===-1)break}let be=E[Pe];be&&be.connect(Re)}}function z(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let me=ee.near,Re=ee.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),$.near=U.near=R.near=me,$.far=U.far=R.far=Re,(I!==$.near||J!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),I=$.near,J=$.far),$.layers.mask=ee.layers.mask|6,R.layers.mask=$.layers.mask&-5,U.layers.mask=$.layers.mask&-3;let Pe=ee.parent,be=$.cameras;z($,Pe);for(let Ne=0;Ne<be.length;Ne++)z(be[Ne],Pe);$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&ee.isPerspectiveCamera&&(D={camera:ee,fov:ee.fov,zoom:ee.zoom}),W(ee,$,Pe)};function W(ee,me,Re){Re===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=$o*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(ee){return d[ee]};let K=null;function Ee(ee,me){if(u=me.getViewerPose(l||a),g=me,u!==null){let Re=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Pe=!1;Re.length!==$.cameras.length&&($.cameras.length=0,Pe=!0);for(let Ze=0;Ze<Re.length;Ze++){let Et=Re[Ze],Ut=null;if(h!==null)Ut=h.getViewport(Et);else{let qt=p.getViewSubImage(f,Et);Ut=qt.viewport,Ze===0&&(e.setRenderTargetTextures(b,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(b))}let ot=O[Ze];ot===void 0&&(ot=new Qn,ot.layers.enable(Ze),ot.viewport=new cn,O[Ze]=ot),ot.matrix.fromArray(Et.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Et.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Ze===0&&($.matrix.copy(ot.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Pe===!0&&$.cameras.push(ot)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let Ze=p.getDepthInformation(Re[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let Ze=0;Ze<Re.length;Ze++){let Et=Re[Ze].camera;if(Et){let Ut=d[Et];Ut||(Ut=new Ea,d[Et]=Ut);let ot=p.getCameraImage(Et);Ut.sourceTexture=ot}}}}for(let Re=0;Re<E.length;Re++){let Pe=w[Re],be=E[Re];Pe!==null&&be!==void 0&&be.update(Pe,me,l||a)}K&&K(ee,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let We=new Cf;We.setAnimationLoop(Ee),this.setAnimationLoop=function(ee){K=ee},this.dispose=function(){}}},gv=new At,Bf=new St;Bf.set(-1,0,0,0,1,0,0,0,1);function vv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,_h(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,A,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),A=S.envMap,b=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,S){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={};function a(S,A){let b=A.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,A){let b=s[S.id];b===void 0&&(g(S),b=c(S),s[S.id]=b,S.addEventListener("dispose",m));let E=A.program;n.updateUBOMapping(S,E);let w=e.render.frame;r[S.id]!==w&&(l(S),r[S.id]=w)}function c(S){let A=i.createBuffer(),b=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(S){let A=s[S.id],b=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,v=b.length;w<v;w++){let M=b[w];if(Array.isArray(M))for(let D=0,R=M.length;D<R;D++)u(M[D],w,D,E);else u(M,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,A,b,E){if(f(S,A,b,E)===!0){let w=S.__offset,v=S.value;if(Array.isArray(v)){let M=0;for(let D=0;D<v.length;D++){let R=v[D],U=x(R,!0);p(R,S.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function p(S,A,b){typeof S=="number"||typeof S=="boolean"?A[b]=S:S.isMatrix3?(A[b]=S.elements[0],A[b+1]=S.elements[1],A[b+2]=S.elements[2],A[b+3]=0,A[b+4]=S.elements[3],A[b+5]=S.elements[4],A[b+6]=S.elements[5],A[b+7]=0,A[b+8]=S.elements[6],A[b+9]=S.elements[7],A[b+10]=S.elements[8],A[b+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-b),b):S.toArray(A,b)}function f(S,A,b,E){let w=S.value,v=A+"_"+b;if(Array.isArray(w)){E[v]===void 0&&(E[v]=[]);let M=E[v],D=!1;for(let R=0;R<w.length;R++)h(w[R],M,R)===!0&&(D=!0);return D}return h(w,E,v)}function h(S,A,b){if(A[b]===void 0)return typeof S=="number"||typeof S=="boolean"?A[b]=S:ArrayBuffer.isView(S)?A[b]=S.slice():A[b]=S.clone(),!0;{let E=A[b];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return A[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function g(S){let A=S.uniforms,b=0,E=16;for(let v=0,M=A.length;v<M;v++){let D=Array.isArray(A[v])?A[v]:[A[v]];for(let R=0,U=D.length;R<U;R++){let O=D[R],$=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(A[v])||Array.isArray(O.value),J=b;for(let j=0,de=$.length;j<de;j++){let z=$[j],W=x(z,I),K=b%E,Ee=K%W.boundary,We=K+Ee;b+=Ee,We!==0&&E-We<W.storage&&(b+=E-We),j===0&&(J=b),b+=W.storage}let te=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new te((b-J)/Float32Array.BYTES_PER_ELEMENT),O.__offset=J}}let w=b%E;return w>0&&(b+=E-w),S.__size=b,S.__cache={},this}function x(S,A){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(S){let A=S.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:d}}var _v=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ts=null;function yv(){return ts===null&&(ts=new ys(_v,16,16,Hs,vn),ts.name="DFG_LUT",ts.minFilter=ri,ts.magFilter=ri,ts.wrapS=qi,ts.wrapT=qi,ts.generateMipmaps=!1,ts.needsUpdate=!0),ts}var ac=class{constructor(e={}){let{canvas:t=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=qn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=h,m=new Set([Al,Tl,wl]),d=new Set([qn,Bi,Jr,bs,Ml,Sl]),S=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,w=null,v=[],M=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,O=null,$=null,I=null,J=null;this._outputColorSpace=jn;let te=0,j=0,de=null,z=-1,W=null,K=new cn,Ee=new cn,We=null,ee=new Te(0),me=0,Re=t.width,Pe=t.height,be=1,Ne=null,ut=null,Ze=new cn(0,0,Re,Pe),Et=new cn(0,0,Re,Pe),Ut=!1,ot=new Us,qt=new nl,bt=!1,Rt=!1,it=new At,un=new N,Qt=new cn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function gn(){return de===null?be:1}let B=n;function sn(y,L){return t.getContext(y,L)}let vt,wt,Ie,Zt,je,rt,T,_,q,xe,oe,_e,k,F,V,Se,P,ae,se,ge,we,Ce,$e;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),B===null){let L="webgl2";if(B=sn(L,y),B===null)throw sn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(y){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),pt("WebGLRenderer: "+y.message),y}function ht(){vt=new I0(B),vt.init(),we=new dv(B,vt),wt=new y0(B,vt,e,we),Ie=new uv(B,vt),wt.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),$=B.createFramebuffer(),I=B.createFramebuffer(),J=B.createFramebuffer(),Zt=new N0(B),je=new $g,rt=new fv(B,vt,Ie,je,wt,we,Zt),T=new P0(R),_=new Fd(B),Ce=new x0(B,_),q=new D0(B,_,Zt,Ce),xe=new F0(B,q,_,Ce,Zt),ae=new U0(B,wt,rt),V=new M0(je),oe=new Kg(R,T,vt,wt,Ce,V),_e=new vv(R,je),k=new Qg,F=new rv(vt),P=new v0(R,T,Ie,xe,g,c),Se=new hv(R,xe,wt),$e=new xv(B,Zt,wt,Ie),se=new _0(B,vt,Zt),ge=new L0(B,vt,Zt),Zt.programs=oe.programs,R.capabilities=wt,R.extensions=vt,R.properties=je,R.renderLists=k,R.shadowMap=Se,R.state=Ie,R.info=Zt}x!==qn&&(D=new B0(x,t.width,t.height,o,s,r));let ye=new Dh(R,B);this.xr=ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(y){y!==void 0&&(be=y,this.setSize(Re,Pe,!1))},this.getSize=function(y){return y.set(Re,Pe)},this.setSize=function(y,L,Q=!0){if(ye.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=y,Pe=L,t.width=Math.floor(y*be),t.height=Math.floor(L*be),Q===!0&&(t.style.width=y+"px",t.style.height=L+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Re*be,Pe*be).floor()},this.setDrawingBufferSize=function(y,L,Q){Re=y,Pe=L,be=Q,t.width=Math.floor(y*Q),t.height=Math.floor(L*Q),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(x===qn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(K)},this.getViewport=function(y){return y.copy(Ze)},this.setViewport=function(y,L,Q,Y){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,L,Q,Y),Ie.viewport(K.copy(Ze).multiplyScalar(gn()).round())},this.getScissor=function(y){return y.copy(Et)},this.setScissor=function(y,L,Q,Y){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,L,Q,Y),Ie.scissor(Ee.copy(Et).multiplyScalar(gn()).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(y){Ie.setScissorTest(Ut=y)},this.setOpaqueSort=function(y){Ne=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,Q=!0){let Y=0;if(y){let Z=!1;if(de!==null){let De=de.texture.format;Z=m.has(De)}if(Z){let De=de.texture.type,Je=d.has(De),Ae=P.getClearColor(),Ve=P.getClearAlpha(),Qe=Ae.r,_t=Ae.g,Ft=Ae.b;Je?(S[0]=Qe,S[1]=_t,S[2]=Ft,S[3]=Ve,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=Qe,A[1]=_t,A[2]=Ft,A[3]=Ve,B.clearBufferiv(B.COLOR,0,A))}else Y|=B.COLOR_BUFFER_BIT}L&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),P.dispose(),k.dispose(),F.dispose(),rt.dispose(),je.dispose(),T.dispose(),xe.dispose(),q.dispose(),Ce.dispose(),$e.dispose(),oe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Vi),ye.removeEventListener("sessionend",na),pi.stop()};function tt(y){y.preventDefault(),_a("WebGLRenderer: Context Lost."),U=!0}function nt(){_a("WebGLRenderer: Context Restored."),U=!1;let y=Zt.autoReset,L=Se.enabled,Q=Se.autoUpdate,Y=Se.needsUpdate,Z=Se.type;ht(),Zt.autoReset=y,Se.enabled=L,Se.autoUpdate=Q,Se.needsUpdate=Y,Se.type=Z}function Oe(y){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function en(y){let L=y.target;L.removeEventListener("dispose",en),Jt(L)}function Jt(y){ti(y),je.remove(y)}function ti(y){let L=je.get(y).programs;L!==void 0&&(L.forEach(function(Q){oe.releaseProgram(Q)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,Q,Y,Z,De){L===null&&(L=fn);let Je=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ae=Zs(y,L,Q,Y,Z);Ie.setMaterial(Y,Je);let Ve=Q.index,Qe=1;if(Y.wireframe===!0){if(Ve=q.getWireframeAttribute(Q),Ve===void 0)return;Qe=2}let _t=Q.drawRange,Ft=Q.attributes.position,Ke=_t.start*Qe,Ct=(_t.start+_t.count)*Qe;De!==null&&(Ke=Math.max(Ke,De.start*Qe),Ct=Math.min(Ct,(De.start+De.count)*Qe)),Ve!==null?(Ke=Math.max(Ke,0),Ct=Math.min(Ct,Ve.count)):Ft!=null&&(Ke=Math.max(Ke,0),Ct=Math.min(Ct,Ft.count));let wn=Ct-Ke;if(wn<0||wn===1/0)return;Ce.setup(Z,Y,Ae,Q,Ve);let an,dn=se;if(Ve!==null&&(an=_.get(Ve),dn=ge,dn.setIndex(an)),Z.isMesh)Y.wireframe===!0?(Ie.setLineWidth(Y.wireframeLinewidth*gn()),dn.setMode(B.LINES)):dn.setMode(B.TRIANGLES);else if(Z.isLine){let Rn=Y.linewidth;Rn===void 0&&(Rn=1),Ie.setLineWidth(Rn*gn()),Z.isLineSegments?dn.setMode(B.LINES):Z.isLineLoop?dn.setMode(B.LINE_LOOP):dn.setMode(B.LINE_STRIP)}else Z.isPoints?dn.setMode(B.POINTS):Z.isSprite&&dn.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))dn.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Rn=Z._multiDrawStarts,C=Z._multiDrawCounts,X=Z._multiDrawCount,H=Ve?_.get(Ve).bytesPerElement:1,he=je.get(Y).currentProgram.getUniforms();for(let fe=0;fe<X;fe++)he.setValue(B,"_gl_DrawID",fe),dn.render(Rn[fe]/H,C[fe])}else if(Z.isInstancedMesh)dn.renderInstances(Ke,wn,Z.count);else if(Q.isInstancedBufferGeometry){let Rn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,C=Math.min(Q.instanceCount,Rn);dn.renderInstances(Ke,wn,C)}else dn.render(Ke,wn)};function ki(y,L,Q,Y){O!==null&&y.isNodeMaterial&&O.setObject(Y,y),bt===!0&&V.setState(y,Q,!1),y.transparent===!0&&y.side===bn&&y.forceSinglePass===!1?(y.side=Zn,y.needsUpdate=!0,Gi(y,L,Y),y.side=Gs,y.needsUpdate=!0,Gi(y,L,Y),y.side=bn):Gi(y,L,Y)}this.compile=function(y,L,Q=null){Q===null&&(Q=y),O!==null&&O.renderStart(y,L,Q),w=F.get(Q),w.init(L),M.push(w),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(L.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),y!==Q&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(L.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Rt=this.localClippingEnabled,bt=V.init(this.clippingPlanes,Rt),bt===!0&&V.setGlobalState(this.clippingPlanes,L),O!==null&&Se.render(w.state.shadowsArray,Q,L);let Y=new Set;return y.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let De=Z.material;if(De)if(Array.isArray(De))for(let Je=0;Je<De.length;Je++){let Ae=De[Je];ki(Ae,Q,L,Z),Y.add(Ae)}else ki(De,Q,L,Z),Y.add(De)}),w=M.pop(),O!==null&&O.renderEnd(),Y},this.compileAsync=function(y,L,Q=null){let Y=this.compile(y,L,Q);return new Promise(Z=>{function De(){if(Y.forEach(function(Je){let Ve=je.get(Je).currentProgram;(Ve===void 0||Ve.isReady())&&Y.delete(Je)}),Y.size===0){Z(y);return}setTimeout(De,10)}vt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Di=null;function ur(y){Di&&Di(y)}function Vi(){pi.stop()}function na(){pi.start()}let pi=new Cf;pi.setAnimationLoop(ur),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(y){Di=y,ye.setAnimationLoop(y),y===null?pi.stop():pi.start()},ye.addEventListener("sessionstart",Vi),ye.addEventListener("sessionend",na),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(y,L);let Q=ye.enabled===!0&&ye.isPresenting===!0,Y=D!==null&&(de===null||Q)&&D.begin(R,de);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(L),L=ye.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,L,de),w=F.get(y,M.length),w.init(L),w.state.textureUnits=rt.getTextureUnits(),M.push(w),it.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?qt.setFromArrayCamera(L):ot.setFromProjectionMatrix(it,Ai,L.reversedDepth),Rt=this.localClippingEnabled,bt=V.init(this.clippingPlanes,Rt),E=k.get(y,v.length),E.init(),v.push(E),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let Je=R.xr.getDepthSensingMesh();Je!==null&&ia(Je,L,-1/0,R.sortObjects)}ia(y,L,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(w.state.lightsArray),R.sortObjects===!0&&E.sort(Ne,ut),Yt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Yt&&P.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),bt===!0&&V.beginShadows();let Z=w.state.shadowsArray;if(Se.render(Z,y,L),bt===!0&&V.endShadows(),(Y&&D.hasRenderPass())===!1){let Je=E.opaque,Ae=E.transmissive;if(w.setupLights(),L.isArrayCamera){let Ve=L.cameras;if(Ae.length>0)for(let Qe=0,_t=Ve.length;Qe<_t;Qe++){let Ft=Ve[Qe];qs(Je,Ae,y,Ft)}Yt&&P.render(y);for(let Qe=0,_t=Ve.length;Qe<_t;Qe++){let Ft=Ve[Qe];Lt(E,y,Ft,Ft.viewport)}}else Ae.length>0&&qs(Je,Ae,y,L),Yt&&P.render(y),Lt(E,y,L)}de!==null&&j===0&&(rt.updateMultisampleRenderTarget(de),rt.updateRenderTargetMipmap(de)),Y&&D.end(R),y.isScene===!0&&y.onAfterRender(R,y,L),Ce.resetDefaultState(),z=-1,W=null,M.pop(),M.length>0?(w=M[M.length-1],rt.setTextureUnits(w.state.textureUnits),bt===!0&&V.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,O!==null&&O.renderEnd()};function ia(y,L,Q,Y){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)Q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let Je=L.isArrayCamera?qt:ot;if(!y.frustumCulled||y.intersectsFrustum(Je)){Y&&Qt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(it);let Ae=xe.update(y),Ve=y.material;Ve.visible&&E.push(y,Ae,Ve,Q,Qt.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){let Je=L.isArrayCamera?qt:ot;if(!y.frustumCulled||y.intersectsFrustum(Je)){let Ae=xe.update(y),Ve=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Qt.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Qt.copy(Ae.boundingSphere.center)),Qt.applyMatrix4(y.matrixWorld).applyMatrix4(it)),Array.isArray(Ve)){let Qe=Ae.groups;for(let _t=0,Ft=Qe.length;_t<Ft;_t++){let Ke=Qe[_t],Ct=Ve[Ke.materialIndex];Ct&&Ct.visible&&E.push(y,Ae,Ct,Q,Qt.z,Ke,L)}}else Ve.visible&&E.push(y,Ae,Ve,Q,Qt.z,null,L)}}}let De=y.children;for(let Je=0,Ae=De.length;Je<Ae;Je++)ia(De[Je],L,Q,Y)}function Lt(y,L,Q,Y){let{opaque:Z,transmissive:De,transparent:Je}=y;w.setupLightsView(Q),bt===!0&&V.setGlobalState(R.clippingPlanes,Q),Y&&Ie.viewport(K.copy(Y)),Z.length>0&&Ys(Z,L,Q),De.length>0&&Ys(De,L,Q),Je.length>0&&Ys(Je,L,Q),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function qs(y,L,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Ke=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new hn(1,1,{generateMipmaps:!0,type:Ke?vn:qn,minFilter:Ss,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let De=w.state.transmissionRenderTarget[Y.id],Je=Y.viewport||K;De.setSize(Je.z*R.transmissionResolutionScale,Je.w*R.transmissionResolutionScale);let Ae=R.getRenderTarget(),Ve=R.getActiveCubeFace(),Qe=R.getActiveMipmapLevel();R.setRenderTarget(De),R.getClearColor(ee),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Yt&&P.render(Q);let _t=R.toneMapping;R.toneMapping=es;let Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),bt===!0&&V.setGlobalState(R.clippingPlanes,Y),Ys(y,Q,Y),rt.updateMultisampleRenderTarget(De),rt.updateRenderTargetMipmap(De),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ct=0,wn=L.length;Ct<wn;Ct++){let an=L[Ct],{object:dn,geometry:Rn,material:C,group:X}=an;if(C.side===bn&&dn.layers.test(Y.layers)){let H=C.side;C.side=Zn,C.needsUpdate=!0,Jn(dn,Q,Y,Rn,C,X),C.side=H,C.needsUpdate=!0,Ke=!0}}Ke===!0&&(rt.updateMultisampleRenderTarget(De),rt.updateRenderTargetMipmap(De))}R.setRenderTarget(Ae,Ve,Qe),R.setClearColor(ee,me),Ft!==void 0&&(Y.viewport=Ft),R.toneMapping=_t}function Ys(y,L,Q){let Y=L.isScene===!0?L.overrideMaterial:null;for(let Z=0,De=y.length;Z<De;Z++){let Je=y[Z],{object:Ae,geometry:Ve,group:Qe}=Je,_t=Je.material;_t.allowOverride===!0&&Y!==null&&(_t=Y),Ae.layers.test(Q.layers)&&Jn(Ae,L,Q,Ve,_t,Qe)}}function Jn(y,L,Q,Y,Z,De){O!==null&&Z.isNodeMaterial&&O.setObject(y,Z),y.onBeforeRender(R,L,Q,Y,Z,De),y.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(R,L,Q,Y,y,De),Z.transparent===!0&&Z.side===bn&&Z.forceSinglePass===!1?(Z.side=Zn,Z.needsUpdate=!0,R.renderBufferDirect(Q,L,Y,Z,y,De),Z.side=Gs,Z.needsUpdate=!0,R.renderBufferDirect(Q,L,Y,Z,y,De),Z.side=bn):R.renderBufferDirect(Q,L,Y,Z,y,De),y.onAfterRender(R,L,Q,Y,Z,De)}function as(y){let L=0;for(let Q of y)Q.texture!==null&&L++;return L}function Gi(y,L,Q){L.isScene!==!0&&(L=fn);let Y=je.get(y),Z=w.state.lights,De=w.state.shadowsArray,Je=Z.state.version,Ae=oe.getParameters(y,Z.state,De,L,Q,w.state.lightProbeGridArray),Ve=oe.getProgramCacheKey(Ae),Qe=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,Y.fog=L.fog;let _t=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=T.get(y.envMap||Y.environment,_t),Y.envMapRotation=Y.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Qe===void 0&&(y.addEventListener("dispose",en),Qe=new Map,Y.programs=Qe,Y.programVariants=new Map);let Ft=Qe.get(Ve);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===Je)return En(y,Ae),Ft}else Ae.uniforms=oe.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,Q,Ae),y.onBeforeCompile(Ae,R),Ft=oe.acquireProgram(Ae,Ve),Qe.set(Ve,Ft),Y.uniforms=Ae.uniforms;let Ke=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ke.clippingPlanes=V.uniform),En(y,Ae),Y.needsLights=zh(y),Y.lightsStateVersion=Je,Y.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.sunLights.value=Z.state.sun,Ke.sunLightShadows.value=Z.state.sunShadow,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ke.sunShadowCascade.value=Z.state.sunShadowCascade,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=as(w.state.lightProbeGridArray),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function yn(y,L,Q,Y,Z){let De=je.get(y),Je=De.currentProgram.id+","+Y+","+Z,Ae=De.programVariants.get(Je);return Ae===void 0?(Ae=Gi(y,L,Q),De.programVariants.set(Je,Ae)):(De.currentProgram=Ae,De.uniformsList=null,De.outputColorSpace=Y,De.toneMapping=Z),Ae}function As(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Kr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function En(y,L){let Q=je.get(y);Q.outputColorSpace=L.outputColorSpace,Q.batching=L.batching,Q.batchingColor=L.batchingColor,Q.instancing=L.instancing,Q.instancingColor=L.instancingColor,Q.instancingMorph=L.instancingMorph,Q.skinning=L.skinning,Q.morphTargets=L.morphTargets,Q.morphNormals=L.morphNormals,Q.morphColors=L.morphColors,Q.morphTargetsCount=L.morphTargetsCount,Q.numClippingPlanes=L.numClippingPlanes,Q.numIntersection=L.numClipIntersection,Q.vertexAlphas=L.vertexAlphas,Q.vertexTangents=L.vertexTangents,Q.toneMapping=L.toneMapping}function Zs(y,L,Q,Y,Z){L.isScene!==!0&&(L=fn),rt.resetTextureUnits();let De=L.fog,Je=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?L.environment:null,Ae=de===null?R.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:zt.workingColorSpace,Ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Qe=T.get(Y.envMap||Je,Ve),_t=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ft=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ke=!!Q.morphAttributes.position,Ct=!!Q.morphAttributes.normal,wn=!!Q.morphAttributes.color,an=es;Y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(an=R.toneMapping);let dn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rn=dn!==void 0?dn.length:0,C=je.get(Y),X=w.state.lights;if(bt===!0&&(Rt===!0||y!==W)){let ze=y===W&&Y.id===z;V.setState(Y,y,ze)}let H=!1,he=!1;Y.version===C.__version?C.needsLights&&C.lightsStateVersion!==X.state.version||Z.isBatchedMesh&&C.batching===!1||!Z.isBatchedMesh&&C.batching===!0||Z.isBatchedMesh&&C.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&C.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&C.instancing===!1||!Z.isInstancedMesh&&C.instancing===!0||Z.isSkinnedMesh&&C.skinning===!1||!Z.isSkinnedMesh&&C.skinning===!0||Z.isInstancedMesh&&C.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&C.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&C.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&C.instancingMorph===!1&&Z.morphTexture!==null||C.envMap!==Qe||Y.fog===!0&&C.fog!==De||C.numClippingPlanes!==void 0&&(C.numClippingPlanes!==V.numPlanes||C.numIntersection!==V.numIntersection)||C.vertexAlphas!==_t||C.vertexTangents!==Ft||C.morphTargets!==Ke||C.morphNormals!==Ct||C.morphColors!==wn||C.morphTargetsCount!==Rn||C.numLightProbeGrids!==as(w.state.lightProbeGridArray)?H=!0:(C.outputColorSpace!==Ae||C.toneMapping!==an)&&(he=!0):(H=!0,C.__version=Y.version);let fe=C.currentProgram;(H===!0||he===!0)&&(fe=he===!0?yn(Y,L,Z,Ae,an):Gi(Y,L,Z),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,fe,C));let Ye=!1,qe=!1,Le=!1,ce=fe.getUniforms(),ne=C.uniforms;if(Ie.useProgram(fe.program)&&(Ye=!0,qe=!0,Le=!0),Y.id!==z&&(z=Y.id,qe=!0),Ye||W!==y){Ie.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ce.setValue(B,"projectionMatrix",y.projectionMatrix),ce.setValue(B,"viewMatrix",y.matrixWorldInverse);let st=ce.map.cameraPosition;st!==void 0&&st.setValue(B,un.setFromMatrixPosition(y.matrixWorld)),wt.logarithmicDepthBuffer&&ce.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ce.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,qe=!0,Le=!0)}if(C.needsLights&&(X.state.sunShadowMap.length>0&&ce.setValue(B,"sunShadowMap",X.state.sunShadowMap,rt),X.state.directionalShadowMap.length>0&&ce.setValue(B,"directionalShadowMap",X.state.directionalShadowMap,rt),X.state.spotShadowMap.length>0&&ce.setValue(B,"spotShadowMap",X.state.spotShadowMap,rt),X.state.pointShadowMap.length>0&&ce.setValue(B,"pointShadowMap",X.state.pointShadowMap,rt)),Z.isSkinnedMesh){ce.setOptional(B,Z,"bindMatrix"),ce.setOptional(B,Z,"bindMatrixInverse");let ze=Z.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ce.setValue(B,"boneTexture",ze.boneTexture,rt))}Z.isBatchedMesh&&(ce.setOptional(B,Z,"batchingTexture"),ce.setValue(B,"batchingTexture",Z._matricesTexture,rt),ce.setOptional(B,Z,"batchingIdTexture"),ce.setValue(B,"batchingIdTexture",Z._indirectTexture,rt),ce.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ce.setValue(B,"batchingColorTexture",Z._colorsTexture,rt));let He=Q.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&ae.update(Z,Q,fe),(qe||C.receiveShadow!==Z.receiveShadow)&&(C.receiveShadow=Z.receiveShadow,ce.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&L.environment!==null&&(ne.envMapIntensity.value=L.environmentIntensity),ne.dfgLUT!==void 0&&(ne.dfgLUT.value=yv()),qe){if(ce.setValue(B,"toneMappingExposure",R.toneMappingExposure),C.needsLights&&sa(ne,Le),De&&Y.fog===!0&&_e.refreshFogUniforms(ne,De),_e.refreshMaterialUniforms(ne,Y,be,Pe,w.state.transmissionRenderTarget[y.id]),C.needsLights&&C.numLightProbeGrids>0){let ze=b,st=0;for(let Gt of w.state.lightProbeGridArray)Gt.texture!==null&&(ze.textures[st]=Gt.texture,ze.min[st]=Gt.boundingBox.min,ze.max[st]=Gt.boundingBox.max,ze.resolution[st]=Gt.resolution,st++);for(let Gt in ze)ze[Gt].length=st;ne.probesSH.value=ze.textures,ne.probesMin.value=ze.min,ne.probesMax.value=ze.max,ne.probesResolution.value=ze.resolution}Kr.upload(B,As(C),ne,rt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Kr.upload(B,As(C),ne,rt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ce.setValue(B,"center",Z.center),ce.setValue(B,"modelViewMatrix",Z.modelViewMatrix),ce.setValue(B,"normalMatrix",Z.normalMatrix),ce.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let ze=Y.uniformsGroups;for(let st=0,Gt=ze.length;st<Gt;st++){let Nt=ze[st];$e.update(Nt,fe),$e.bind(Nt,fe)}}return fe}function sa(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function zh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(y,L,Q){let Y=je.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),je.get(y.texture).__webglTexture=L,je.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let Q=je.get(y);Q.__webglFramebuffer=L,Q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,Q=0){de=y,te=L,j=Q;let Y=null,Z=!1,De=!1;if(y){let Ae=je.get(y);if(Ae.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(B.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(y.viewport),Ee.copy(y.scissor),We=y.scissorTest,Ie.viewport(K),Ie.scissor(Ee),Ie.setScissorTest(We),z=-1;return}else if(Ae.__webglFramebuffer===void 0)rt.setupRenderTarget(y);else if(Ae.__hasExternalTextures)rt.rebindTextures(y,je.get(y.texture).__webglTexture,je.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let _t=y.depthTexture;if(Ae.__boundDepthTexture!==_t){if(_t!==null&&je.has(_t)&&(y.width!==_t.image.width||y.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(y)}}let Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);let Qe=je.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Qe[L])?Y=Qe[L][Q]:Y=Qe[L],Z=!0):y.samples>0&&rt.useMultisampledRTT(y)===!1?Y=je.get(y).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[Q]:Y=Qe,K.copy(y.viewport),Ee.copy(y.scissor),We=y.scissorTest}else K.copy(Ze).multiplyScalar(be).floor(),Ee.copy(Et).multiplyScalar(be).floor(),We=Ut;if(Q!==0&&(Y=$),Ie.bindFramebuffer(B.FRAMEBUFFER,Y)&&Ie.drawBuffers(y,Y),Ie.viewport(K),Ie.scissor(Ee),Ie.setScissorTest(We),Z){let Ae=je.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ae.__webglTexture,Q)}else if(De){let Ae=L;for(let Ve=0;Ve<y.textures.length;Ve++){let Qe=je.get(y.textures[Ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ve,Qe.__webglTexture,Q,Ae)}}else if(y!==null&&Q!==0){let Ae=je.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,Q)}z=-1};function Js(y){let L=je.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=wt.textureFormatReadable(y.format),L.__typeReadable=wt.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,Q,Y,Z,De,Je,Ae=0){if(!(y&&y.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=je.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Je!==void 0&&(Ve=Ve[Je],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){Ie.bindFramebuffer(B.FRAMEBUFFER,Ve);try{let Qe=y.textures[Ae],_t=Qe.format,Ft=Qe.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ae);let Ke=Js(Qe);if(Ke.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-Y&&Q>=0&&Q<=y.height-Z&&B.readPixels(L,Q,Y,Z,we.convert(_t),we.convert(Ft),De)}finally{let Qe=de!==null?je.get(de).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(y,L,Q,Y,Z,De,Je,Ae=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=je.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Je!==void 0&&(Ve=Ve[Je],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if(L>=0&&L<=y.width-Y&&Q>=0&&Q<=y.height-Z){Ie.bindFramebuffer(B.FRAMEBUFFER,Ve);let Qe=y.textures[Ae],_t=Qe.format,Ft=Qe.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ae);let Ke=Js(Qe);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.bufferData(B.PIXEL_PACK_BUFFER,De.byteLength,B.STREAM_READ),B.readPixels(L,Q,Y,Z,we.convert(_t),we.convert(Ft),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let wn=de!==null?je.get(de).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,wn);let an=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $u(B,an,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,De),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ct),B.deleteSync(an),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(y.image.width*Y),De=Math.floor(y.image.height*Y),Je=L!==null?L.x:0,Ae=L!==null?L.y:0;rt.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Je,Ae,Z,De),Ie.unbindTexture()},this.copyTextureToTexture=function(y,L,Q=null,Y=null,Z=0,De=0){let Je,Ae,Ve,Qe,_t,Ft,Ke,Ct,wn,an=y.isCompressedTexture?y.mipmaps[De]:y.image;if(Q!==null)Je=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Ve=Q.isBox3?Q.max.z-Q.min.z:1,Qe=Q.min.x,_t=Q.min.y,Ft=Q.isBox3?Q.min.z:0;else{let ce=Math.pow(2,-Z);Je=Math.floor(an.width*ce),Ae=Math.floor(an.height*ce),y.isDataArrayTexture?Ve=an.depth:y.isData3DTexture?Ve=Math.floor(an.depth*ce):Ve=1,Qe=0,_t=0,Ft=0}Y!==null?(Ke=Y.x,Ct=Y.y,wn=Y.z):(Ke=0,Ct=0,wn=0);let dn=we.convert(L.format),Rn=we.convert(L.type),C;L.isData3DTexture?(rt.setTexture3D(L,0),C=B.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(rt.setTexture2DArray(L,0),C=B.TEXTURE_2D_ARRAY):(rt.setTexture2D(L,0),C=B.TEXTURE_2D),Ie.activeTexture(B.TEXTURE0),Ie.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,L.flipY),Ie.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Ie.pixelStorei(B.UNPACK_ALIGNMENT,L.unpackAlignment);let X=Ie.getParameter(B.UNPACK_ROW_LENGTH),H=Ie.getParameter(B.UNPACK_IMAGE_HEIGHT),he=Ie.getParameter(B.UNPACK_SKIP_PIXELS),fe=Ie.getParameter(B.UNPACK_SKIP_ROWS),Ye=Ie.getParameter(B.UNPACK_SKIP_IMAGES);Ie.pixelStorei(B.UNPACK_ROW_LENGTH,an.width),Ie.pixelStorei(B.UNPACK_IMAGE_HEIGHT,an.height),Ie.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),Ie.pixelStorei(B.UNPACK_SKIP_ROWS,_t),Ie.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);let qe=y.isDataArrayTexture||y.isData3DTexture,Le=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let ce=je.get(y),ne=je.get(L),He=je.get(ce.__renderTarget),ze=je.get(ne.__renderTarget);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,He.__webglFramebuffer),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let st=0;st<Ve;st++)qe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(y).__webglTexture,Z,Ft+st),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(L).__webglTexture,De,wn+st)),B.blitFramebuffer(Qe,_t,Qe+Je,_t+Ae,Ke,Ct,Ke+Je,Ct+Ae,B.DEPTH_BUFFER_BIT,B.NEAREST);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||y.isRenderTargetTexture||je.has(y)){let ce=je.get(y),ne=je.get(L);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,I),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,J);for(let He=0;He<Ve;He++)qe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.__webglTexture,Z,Ft+He):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ce.__webglTexture,Z),Le?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.__webglTexture,De,wn+He):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ne.__webglTexture,De),Z!==0?B.blitFramebuffer(Qe,_t,Qe+Je,_t+Ae,Ke,Ct,Ke+Je,Ct+Ae,B.COLOR_BUFFER_BIT,B.NEAREST):Le?B.copyTexSubImage3D(C,De,Ke,Ct,wn+He,Qe,_t,Je,Ae):B.copyTexSubImage2D(C,De,Ke,Ct,Qe,_t,Je,Ae);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Le?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(C,De,Ke,Ct,wn,Je,Ae,Ve,dn,Rn,an.data):L.isCompressedArrayTexture?B.compressedTexSubImage3D(C,De,Ke,Ct,wn,Je,Ae,Ve,dn,an.data):B.texSubImage3D(C,De,Ke,Ct,wn,Je,Ae,Ve,dn,Rn,an):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,De,Ke,Ct,Je,Ae,dn,Rn,an.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,De,Ke,Ct,an.width,an.height,dn,an.data):B.texSubImage2D(B.TEXTURE_2D,De,Ke,Ct,Je,Ae,dn,Rn,an);Ie.pixelStorei(B.UNPACK_ROW_LENGTH,X),Ie.pixelStorei(B.UNPACK_IMAGE_HEIGHT,H),Ie.pixelStorei(B.UNPACK_SKIP_PIXELS,he),Ie.pixelStorei(B.UNPACK_SKIP_ROWS,fe),Ie.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye),De===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&B.generateMipmap(C),Ie.unbindTexture()},this.initRenderTarget=function(y){je.get(y).__webglFramebuffer===void 0&&rt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?rt.setTextureCube(y,0):y.isData3DTexture?rt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?rt.setTexture2DArray(y,0):rt.setTexture2D(y,0),Ie.unbindTexture()},this.resetState=function(){te=0,j=0,de=null,Ie.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}};var io=class i extends ct{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Te(t.color):new Te(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new _i,p=new N,f=new N,h=new N,g=new At,x=new N(0,0,-1),m=new cn,d=new N,S=new N,A=new cn,b=new At,E=new hn(r,a,{samples:l,type:vn}),w=new xt({name:c.name!==void 0?c.name:"unspecified",uniforms:zn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=E.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=b,this.material=w,this.onBeforeRender=function(v,M,D){let R=this.getReflectionCamera(D);if(f.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(D.matrixWorld),g.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(g),d.subVectors(f,h),d.dot(p)>0===!0&&this.forceUpdate===!1)return;d.reflect(p).negate(),d.add(f),g.extractRotation(D.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(h),S.subVectors(f,x),S.reflect(p).negate(),S.add(f),R.position.copy(d),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(p),R.lookAt(S),R.far=D.far,R.updateMatrixWorld(),R.projectionMatrix.copy(D.projectionMatrix),R.projectionMatrix.elements[8]*=-1,R.projectionMatrix.elements[12]*=-1,b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(R.projectionMatrix),b.multiply(R.matrixWorldInverse),b.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(p,f),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let O=R.projectionMatrix;R.isOrthographicCamera?(A.x=(Math.sign(m.x)+O.elements[8])/O.elements[0],A.y=(Math.sign(m.y)+O.elements[9])/O.elements[5],A.z=-D.far,A.w=1):(A.x=(Math.sign(m.x)+O.elements[8])/O.elements[0],A.y=(Math.sign(m.y)+O.elements[9])/O.elements[5],A.z=-1,A.w=(1+O.elements[10])/O.elements[14]),m.multiplyScalar(2/m.dot(A)),O.elements[2]=m.x,O.elements[6]=m.y,R.isOrthographicCamera?(O.elements[10]=m.z-o,O.elements[14]=m.w-1):(O.elements[10]=m.z+1-o,O.elements[14]=m.w),n.visible=!1;let $=v.getRenderTarget(),I=v.xr.enabled,J=v.shadowMap.autoUpdate;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.setRenderTarget(E),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(M,R),v.xr.enabled=I,v.shadowMap.autoUpdate=J,v.setRenderTarget($);let te=D.viewport;te!==void 0&&v.state.viewport(te),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()},this.getReflectionCamera=function(v){let M=this._reflectionCameras.get(v);return M===void 0&&(M=v.clone(),this._reflectionCameras.set(v,M)),M}}};io.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Mv=new ir(-1,1,1,-1,0,1),Lh=class extends Xt{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}},Sv=new Lh,di=class{constructor(e){this._mesh=new ct(Sv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ws=class extends Gn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new di(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var so=class extends Gn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},cc=class extends Gn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var hc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Be);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ws(is),this.copyPass.material.blending=Fn,this.timer=new Ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}so!==void 0&&(a instanceof so?n=!0:a instanceof cc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uc=class extends Gn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var ro={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Be},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new At},cameraProjectionMatrixInverse:{value:new At},cameraWorldMatrix:{value:new At},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ao={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},fc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function zf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=bv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new N(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ys(s,e,e);return r.wrapS=Ci,r.wrapT=Ci,r.needsUpdate=!0,r}function bv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var oo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Nh(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Be},cameraProjectionMatrixInverse:{value:new At},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Nh(i,e,t){let n=wv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function wv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var dc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,p=(c+l)*u,f=c-p,h=l-p,g=e-f,x=t-h,m,d;g>x?(m=1,d=0):(m=0,d=1);let S=g-m+u,A=x-d+u,b=g-1+2*u,E=x-1+2*u,w=c&255,v=l&255,M=this.perm[w+this.perm[v]]%12,D=this.perm[w+m+this.perm[v+d]]%12,R=this.perm[w+1+this.perm[v+1]]%12,U=.5-g*g-x*x;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[M],g,x));let O=.5-S*S-A*A;O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[D],S,A));let $=.5-b*b-E*E;return $<0?r=0:($*=$,r=$*$*this._dot(this.grad3[R],b,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),p=Math.floor(t+l),f=Math.floor(n+l),h=1/6,g=(u+p+f)*h,x=u-g,m=p-g,d=f-g,S=e-x,A=t-m,b=n-d,E,w,v,M,D,R;S>=A?A>=b?(E=1,w=0,v=0,M=1,D=1,R=0):S>=b?(E=1,w=0,v=0,M=1,D=0,R=1):(E=0,w=0,v=1,M=1,D=0,R=1):A<b?(E=0,w=0,v=1,M=0,D=1,R=1):S<b?(E=0,w=1,v=0,M=0,D=1,R=1):(E=0,w=1,v=0,M=1,D=1,R=0);let U=S-E+h,O=A-w+h,$=b-v+h,I=S-M+2*h,J=A-D+2*h,te=b-R+2*h,j=S-1+3*h,de=A-1+3*h,z=b-1+3*h,W=u&255,K=p&255,Ee=f&255,We=this.perm[W+this.perm[K+this.perm[Ee]]]%12,ee=this.perm[W+E+this.perm[K+w+this.perm[Ee+v]]]%12,me=this.perm[W+M+this.perm[K+D+this.perm[Ee+R]]]%12,Re=this.perm[W+1+this.perm[K+1+this.perm[Ee+1]]]%12,Pe=.6-S*S-A*A-b*b;Pe<0?s=0:(Pe*=Pe,s=Pe*Pe*this._dot3(this.grad3[We],S,A,b));let be=.6-U*U-O*O-$*$;be<0?r=0:(be*=be,r=be*be*this._dot3(this.grad3[ee],U,O,$));let Ne=.6-I*I-J*J-te*te;Ne<0?a=0:(Ne*=Ne,a=Ne*Ne*this._dot3(this.grad3[me],I,J,te));let ut=.6-j*j-de*de-z*z;return ut<0?o=0:(ut*=ut,o=ut*ut*this._dot3(this.grad3[Re],j,de,z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,p,f,h,g,x=(e+t+n+s)*c,m=Math.floor(e+x),d=Math.floor(t+x),S=Math.floor(n+x),A=Math.floor(s+x),b=(m+d+S+A)*l,E=m-b,w=d-b,v=S-b,M=A-b,D=e-E,R=t-w,U=n-v,O=s-M,$=D>R?32:0,I=D>U?16:0,J=R>U?8:0,te=D>O?4:0,j=R>O?2:0,de=U>O?1:0,z=$+I+J+te+j+de,W=a[z][0]>=3?1:0,K=a[z][1]>=3?1:0,Ee=a[z][2]>=3?1:0,We=a[z][3]>=3?1:0,ee=a[z][0]>=2?1:0,me=a[z][1]>=2?1:0,Re=a[z][2]>=2?1:0,Pe=a[z][3]>=2?1:0,be=a[z][0]>=1?1:0,Ne=a[z][1]>=1?1:0,ut=a[z][2]>=1?1:0,Ze=a[z][3]>=1?1:0,Et=D-W+l,Ut=R-K+l,ot=U-Ee+l,qt=O-We+l,bt=D-ee+2*l,Rt=R-me+2*l,it=U-Re+2*l,un=O-Pe+2*l,Qt=D-be+3*l,fn=R-Ne+3*l,Yt=U-ut+3*l,gn=O-Ze+3*l,B=D-1+4*l,sn=R-1+4*l,vt=U-1+4*l,wt=O-1+4*l,Ie=m&255,Zt=d&255,je=S&255,rt=A&255,T=o[Ie+o[Zt+o[je+o[rt]]]]%32,_=o[Ie+W+o[Zt+K+o[je+Ee+o[rt+We]]]]%32,q=o[Ie+ee+o[Zt+me+o[je+Re+o[rt+Pe]]]]%32,xe=o[Ie+be+o[Zt+Ne+o[je+ut+o[rt+Ze]]]]%32,oe=o[Ie+1+o[Zt+1+o[je+1+o[rt+1]]]]%32,_e=.6-D*D-R*R-U*U-O*O;_e<0?u=0:(_e*=_e,u=_e*_e*this._dot4(r[T],D,R,U,O));let k=.6-Et*Et-Ut*Ut-ot*ot-qt*qt;k<0?p=0:(k*=k,p=k*k*this._dot4(r[_],Et,Ut,ot,qt));let F=.6-bt*bt-Rt*Rt-it*it-un*un;F<0?f=0:(F*=F,f=F*F*this._dot4(r[q],bt,Rt,it,un));let V=.6-Qt*Qt-fn*fn-Yt*Yt-gn*gn;V<0?h=0:(V*=V,h=V*V*this._dot4(r[xe],Qt,fn,Yt,gn));let Se=.6-B*B-sn*sn-vt*vt-wt*wt;return Se<0?g=0:(Se*=Se,g=Se*Se*this._dot4(r[oe],B,sn,vt,wt)),27*(u+p+f+h+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var lo=class i extends Gn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=zf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new hn(this.width,this.height,{type:vn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},ro.defines),uniforms:zn.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,blending:Fn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ca,this.normalMaterial.blending=Fn,this.pdMaterial=new xt({defines:Object.assign({},oo.defines),uniforms:zn.clone(oo.uniforms),vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},ao.defines),uniforms:zn.clone(ao.uniforms),vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader,blending:Fn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:zn.clone(is.uniforms),vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ba,blendDst:rr,blendEquation:Pi,blendSrcAlpha:Oa,blendDstAlpha:rr,blendEquationAlpha:Pi}),this.blendMaterial=new xt({uniforms:zn.clone(fc.uniforms),vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:gl,blendSrc:Ba,blendDst:rr,blendEquation:Pi,blendSrcAlpha:Oa,blendDstAlpha:rr,blendEquationAlpha:Pi}),this._fsQuad=new di(null),this._originalClearColor=new Te,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new Oi;s.format=zi,s.type=bs,this.normalRenderTarget=new hn(this.width,this.height,{minFilter:Sn,magFilter:Sn,type:vn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new dc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ys(s,e,e,Mi,qn);return r.wrapS=Ci,r.wrapT=Ci,r.needsUpdate=!0,r}};lo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var co={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var pc=class extends Gn{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new hn(1,1,{minFilter:Sn,magFilter:Sn,type:vn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Gr,this._materialDepth.depthPacking=dh,this._materialDepth.blending=Fn;let o=zn.clone(co.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new xt({defines:Object.assign({},co.defines),uniforms:o,vertexShader:co.vertexShader,fragmentShader:co.fragmentShader}),this.uniforms=o,this._fsQuad=new di(this.materialBokeh),this._oldClearColor=new Te}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var kf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qr=class i extends Gn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Be(e.x,e.y):new Be(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,a,{type:vn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new hn(r,a,{type:vn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new hn(r,a,{type:vn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=kf;this.highPassUniforms=zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Be(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zn.clone(is.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,premultipliedAlpha:!0,blending:Cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new fi,this._fsQuad=new di(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Be(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Qr.BlurDirectionX=new Be(1,0);Qr.BlurDirectionY=new Be(0,1);var ho={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var mc=class extends Gn{constructor(){super(),this.isOutputPass=!0,this.uniforms=zn.clone(ho.uniforms),this.material=new Vr({name:ho.name,uniforms:this.uniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader}),this._fsQuad=new di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===za?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ar?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ga&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Tv=`attribute vec3 p,n,o;attribute vec4 c;uniform vec3 P,X,Y,Z,Lr,Lu,Lf,Lo;uniform vec4 Sw[4],S;uniform vec2 Lq;uniform float k,V;varying vec3 w,N;varying vec4 C;
void main(){float t=S.z,f=S.x,a=n.y*40.,h=fract(t*.5+n.y),s=n.x;vec3 q=p+o;N=n;C=c;
if(k>4.5&&k<5.5){vec3 d=q-Lo;float z=dot(d,Lf),y=mix(1.,z,Lq.y),zn=mix(z/Lq.x*2.-1.,(Lq.x+.1)/(Lq.x-.1)-.2*Lq.x/((Lq.x-.1)*max(z,.01)),Lq.y);w=q;C=vec4(z/Lq.x,0,0,0);gl_Position=vec4(dot(d,Lr),dot(d,Lu),zn*y,y);return;}
if(k>2.5&&k<4.5||k>6.5){w=Z+(X*p.x*S.y+Y*p.y)/f;gl_Position=vec4(p.xy,0,1);return;}
if(k>1.5&&k<2.5){
if(n.z>1.5){q+=vec3(sin(t*.2+a),sin(t*.17+a*1.3)*.6,cos(t*.23+a*.7))*1.5;C.a*=.5+.5*sin(t*1.5+a);}
else if(n.z>.5){q+=vec3(sin(a)*h*.6+sin(t*3.+a)*.1,.3-h*.8,cos(a*1.3)*h*.6);C.a*=(1.-h)*(.6+.4*sin(t*20.+a));}
else s*=1.+.1*sin(t*9.)+V*1.6;}
else if((k<.5||k>5.5)&&c.a>10.5){vec4 v=Sw[int(c.a-10.5)];vec3 r=q-v.xyz;q.xz-=r.y*vec2(sin(t*.6+v.w)*.06,cos(t*.5+v.w*1.7)*.05);}
w=q;vec3 d=q-P;float z=dot(d,Z);
gl_Position=vec4(dot(d,X)*f/S.y,dot(d,Y)*f,z*1.0001-.2,z);gl_PointSize=s*400.*S.w/z;}`,Av=`precision highp float;precision highp sampler2D;uniform vec3 P,H,G,Md,Z,Lp[4],Lk[4],Mr,Mu,Mf,Mo,Q[4],Qc[4];uniform vec2 Mq,Lq,Dr;uniform vec4 S,Ra[2],Rb[2];uniform float k,V,Bm;uniform sampler2D D0,D1,T,Ba,Bb,Dp;varying vec3 w,N;varying vec4 C;
const vec3 MS=vec3(.3,.2,-.933)/1.00024;
float sp[4],ms,rj;
float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
float dz(vec2 u){vec4 c=texture2D(Dp,u);return(c.r+c.g/255.)*400.;}
vec3 ac(vec3 x){x*=.52;return clamp(x*(2.51*x+.03)/(x*(2.43*x+.59)+.14),0.,1.);}
float fi(float i){float t=S.z;return(1.+.1*sin(t*9.+i*1.7+sin(t*3.+i)*2.)+.05*sin(t*23.+i*5.))*(1.+.1*sin(t*5.3+dot(w,vec3(.9,1.3,.7))*1.5+i*2.));}
float vn(vec3 p){return .5+.5*sin(dot(p,vec3(1.7,2.3,1.1))+sin(dot(p,vec3(2.9,.7,3.1)))*2.+sin(dot(p,vec3(.6,3.3,2.7)))*1.3);}
void shd(){vec3 d=w-Mo;float z=dot(d,Mf);vec2 u=vec2(dot(d,Mr),dot(d,Mu))*.5+.5;ms=1.;rj=h(gl_FragCoord.xy)*6.28;
if(u.x>.02&&u.x<.98&&u.y>.02&&u.y<.98){float v=0.;for(int j=0;j<8;j++){float a=float(j)*2.4+rj,r=sqrt(float(j)+.5)*.9/1024.;vec4 c=texture2D(D0,u+vec2(cos(a),sin(a))*r);v+=step(z/Mq.x-.0012,c.r+c.g/255.);}ms=smoothstep(.1,.9,v/8.);}
vec3 pw=w+normalize(N)*.05;
for(int i=0;i<4;i++){sp[i]=0.;if(Lk[i].x+Lk[i].y+Lk[i].z<=0.)continue;vec3 d=pw-Lp[i],a=abs(d);sp[i]=1.;if(dot(d,d)>2500.)continue;
float ax=a.x>=a.y&&a.x>=a.z?0.:a.y>=a.z?1.:2.;vec3 e=ax<.5?d:ax<1.5?d.yzx:d.zxy;float z=abs(e.x),fc=float(i)*6.+ax*2.+step(e.x,0.);vec2 u=clamp(e.yz/z,-.99,.99)*.5+.5,c0=vec2(mod(fc,4.),floor(fc/4.));float v=0.;
for(int j=0;j<8;j++){float a=float(j)*2.4+rj,r=sqrt(float(j)+.5)*.8/512.;vec2 q=clamp(u+vec2(cos(a),sin(a))*r,.002,.998);vec4 c=texture2D(D1,(c0+q)/vec2(4.,6.));v+=step((z-.12)/50.,c.r+c.g/255.);}
sp[i]=smoothstep(.1,.9,v/8.);}}
vec3 lt(vec3 n){vec3 c=vec3(.3,.36,.6)*(.55+.45*n.y)*(.6+.4*ms)*(1.+V*.3)+V*vec3(.04,.04,.05)+vec3(.5,.72,1.2)*.62*max(dot(n,Md),0.)*ms;
for(int i=0;i<4;i++){vec3 l=Lp[i]-w;float dd=dot(l,l),at=1./(1.+dd*.03)*(1.-smoothstep(26.,48.,sqrt(dd))),fl=fi(float(i));vec3 ld=l*inversesqrt(dd+.001);
c+=Lk[i]*(max(dot(n,ld),0.)*sp[i]+.12)*at*fl*(1.+V*.5);
if(Lk[i].x>Lk[i].z)c+=Lk[i]*vec3(1,.8,.6)*.22*(.5+.5*dot(n,ld))*fl/(1.+dd*.05);}
return c;}
vec3 sg(vec3 n,float e){vec3 v=normalize(P-w),a=vec3(0);
for(int i=0;i<4;i++){vec3 l=Lp[i]-w;float dd=dot(l,l);a+=Lk[i]*pow(max(dot(n,normalize(l*inversesqrt(dd+.001)+v)),0.),e)*sp[i]*fi(float(i))/(1.+dd*.03);}
return a+vec3(.5,.72,1.2)*pow(max(dot(n,normalize(Md+v)),0.),e)*ms*.7;}
vec3 gr(vec3 o){float l=dot(o,vec3(.33)),s=1.-smoothstep(0.,.5,l),wl=0.;
for(int i=0;i<4;i++){vec3 d=Lp[i]-w;if(Lk[i].x>Lk[i].z)wl+=Lk[i].x*.5/(1.+dot(d,d)*.05);}
wl=min(wl,1.);return o*mix(vec3(1),mix(vec3(.8,1.,1.14),vec3(1.28,.94,.66),wl),s)+s*mix(vec3(0,.01,.02),vec3(.03,.012,0),wl);}
float bh(vec2 b){vec2 u=b/vec2(1.7,.75);u.x+=.5*mod(floor(u.y),2.);vec2 c=floor(u),f=fract(u);float e=min(min(f.x,1.-f.x)*1.7,min(f.y,1.-f.y)*.75);return smoothstep(.01,.09,e)+.2*vn(vec3(b*16.,c.x+c.y*3.));}
float fh(vec2 u){u.x+=.5*mod(floor(u.y),2.);vec2 e=(.5-abs(fract(u)-.5))*vec2(1.,1.5);return smoothstep(.004,.05,min(e.x,e.y));}
float tx(float k,float c){vec3 d=w-P;float a=exp(-k*w.y),b=exp(-k*P.y),y=P.y-w.y;return c*length(d)*(abs(y)>.02?(a-b)/(k*y):a);}
float ff(){float t=S.z,m=.3+1.4*(vn(vec3(w.x*.12+t*.03,w.y*.5,w.z*.12))*.6+vn(vec3(w.x*.3,w.y,w.z*.3-t*.05))*.4);return exp(-length(w-P)*.012*(1.-.8*V)/(1.+max(P.y-4.,0.)*.1)-tx(1.1,.1*m)*(1.-.6*V)-tx(.2,.01));}
vec3 mc(){vec3 g=G-w,c=H*.8+vec3(.15,.3,.7)*.3/(1.+dot(g,g)*.004)+vec3(.1,.2,.4)*.12*pow(max(dot(normalize(w-P),Md),0.),4.);
for(int i=0;i<4;i++){vec3 l=Lp[i]-w;c+=Lk[i]*.085/(1.+dot(l,l)*.02);}return mix(c,c*vec3(.5,.78,1.3)+vec3(.01,.03,.08),V*.85);}
vec3 RF(vec3 n){vec3 v=normalize(w-P),r=reflect(v,n),a=vec3(0);float fr=.15+.85*pow(1.-max(dot(n,-v),0.),3.);
for(int i=0;i<4;i++){vec3 l=Lp[i]-w;float dd=dot(l,l);a+=Lk[i]*pow(max(dot(r,l*inversesqrt(dd+.001)),0.),22.)*sp[i]/(1.+dd*.012);}
if(r.y>.03)for(int j=0;j<2;j++)if(Ra[j].z>0.){float t=(Rb[j].x-w.y)/r.y;vec2 d=max(abs(w.xz+r.xz*t-Ra[j].xy)-Ra[j].zw,0.);a+=Rb[j].yzw*1.4*exp(-dot(d,d)*.3)/(1.+t*.05);}
return a*fr*(.55+.45*vn(w*7.))*.6;}
vec3 LQ(vec3 b){float t=S.z;vec2 q=w.xz*14.;vec2 g=vec2(cos(q.x+t*1.8)+cos(q.x*.5+q.y*.8-t*1.3),cos(q.y+t*1.5)+cos(q.y*.6-q.x*.7+t*1.1))*.07;
vec3 n=normalize(vec3(g.x,1,g.y)),v=normalize(P-w),r=reflect(-v,n);float fr=pow(1.-max(dot(n,v),0.),3.);
vec3 s=mix(H,H*.27,sqrt(max(r.y,0.)))*1.5+pow(max(dot(r,MS),0.),150.)*vec3(.8,.9,1.5)*3.;
return b*(.5+.3*(g.x+g.y))+s*(.15+.9*fr)+b*fr*.35;}
void main(){float t=S.z,m=C.a,a=1.;vec3 o=C.rgb,n=normalize(N),d=w-P;
if(k>5.5&&k<6.5){float e=clamp(dot(d,Z)/400.,0.,.9999)*255.;gl_FragColor=vec4(floor(e)/255.,fract(e),0,1);return;}
if(k>6.5){vec2 u=N.xy;vec3 b=vec3(0);float ws=0.;for(int i=-4;i<5;i++){float g=exp(-float(i*i)*.15);vec3 c=texture2D(T,u+Dr*float(i)).rgb;if(Bm>.5){float l=max(c.r,max(c.g,c.b));c*=max(l-.9,0.)/max(l,.001);}b+=c*g;ws+=g;}
gl_FragColor=vec4(b/ws,1);return;}
if(k>4.5&&k<5.5){if(Lq.y>.5&&C.x*Lq.x<.3)discard;float e=C.x*255.;gl_FragColor=vec4(floor(e)/255.,fract(e),0,1);return;}
if(k>3.5&&k<4.5){vec2 u=N.xy;o=texture2D(T,u).rgb;float z0=dz(u);rj=h(gl_FragCoord.xy)*6.28;
if(z0<300.){float R=.5+z0*.012,oc=0.;vec2 sr=vec2(1./S.y,1.)*R*.9/z0;
for(int i=0;i<12;i++){float a=float(i)*2.4+rj,r=sqrt((float(i)+.5)/12.),df=z0-dz(u+vec2(cos(a),sin(a))*r*sr);oc+=df>.04+z0*.004?max(1.-df/(R*2.),0.):0.;}
o*=mix(1.-clamp(oc/12.*1.8,0.,.8)*(1.-.7*smoothstep(60.,250.,z0)),1.,smoothstep(1.,3.,max(o.r,max(o.g,o.b))));
if(V>.5){vec2 px=Dr*1.6;float e=max(abs(dz(u+vec2(px.x,0.))+dz(u-vec2(px.x,0.))-2.*z0),abs(dz(u+vec2(0.,px.y))+dz(u-vec2(0.,px.y))-2.*z0))/z0;o+=smoothstep(.04,.12,e)*vec3(.5,.8,1.5)*.9;}}
o+=(texture2D(Ba,u).rgb*.5+texture2D(Bb,u).rgb*1.1)*vec3(1.,.97,.93);vec3 sh=vec3(0);
for(int j=0;j<4;j++){vec3 q=Q[j];if(q.z>0.){vec2 dl=q.xy-u,uu=u,st=dl/14.;float ln=length(dl*vec2(S.y,1.)),s=0.;for(int i=0;i<14;i++){uu+=st;s+=max(dot(texture2D(T,uu).rgb,vec3(.33))-1.3,0.)*(1.-float(i)/14.);}
sh+=Qc[j]*q.z*(s*.05*(.75+.25*sin(atan(dl.y,dl.x*S.y)*22.+t*.4))+.02*exp(-ln*ln*40.));}}
o=ac(o+sh);float l=dot(o,vec3(.33));o=mix(o*vec3(.8,.98,1.1),o*vec3(1.1,1.,.86),smoothstep(.15,.7,l));
o=mix(o,mix(vec3(dot(o,vec3(.33))),o,1.35)*1.05,V*.6);o*=1.-1.1*dot(u-.5,u-.5);gl_FragColor=vec4(pow(o,vec3(.82)),1);return;}
if(k>2.5){vec3 r=normalize(w),s=r*70.,g=floor(s);float q=h(g.xy+g.z*7.3);
o=mix(H,H*.27,sqrt(max(r.y,0.)));float md=dot(r,MS);o+=vec3(.5,.62,.95)*(pow(max(md,0.),40.)*.35+pow(max(md,0.),600.)*.5)+vec3(.9,.95,1.1)*smoothstep(.9991,.9993,md)*2.2;
if(q>.96)o+=smoothstep(.2,0.,length(fract(s)-.5-(vec3(h(g.yz),h(g.zx),h(g.xy))-.5)*.5))*(.5+.5*sin(t*2.+q*99.))*smoothstep(0.,.3,r.y)*vec3(.8,.85,1.);
gl_FragColor=vec4(o,1);return;}
float f=ff();
if(k>1.5){float rr=length(gl_PointCoord-.5)*2.,a=pow(max(1.-rr,0.),2.);
if(N.z>1.5){shd();vec3 lc=vec3(.3,.34,.5)*.5*ms+vec3(.5,.72,1.2)*.8*ms*(.4+.6*vn(w*2.+t*.2));for(int i=0;i<4;i++){vec3 l=Lp[i]-w;lc+=Lk[i]*sp[i]*1.6*fi(float(i))/(1.+dot(l,l)*.05);}o=o*lc*3.;a=exp(-rr*rr*5.);}
else if(N.z<.5){a=.6*exp(-rr*rr*14.)+.25*pow(max(1.-rr,0.),4.);o*=2.;}
gl_FragColor=vec4(o,C.a*f*a);return;}
if(m>10.5)m=1.;
if(k>.5&&m>7.5){float a=(1.-abs(N.x))*(1.-N.y);a*=a*(1.-N.y);float z=vn(vec3(w.x*.3+t*.05,w.y*.15-t*.1,w.z*.3)),z2=vn(vec3(w.zx*.6-t*.11,w.y*.3+t*.07)),sh=.6+.4*sin(w.y*1.7-t*.4+z*5.);
gl_FragColor=vec4(o*a*N.z*(.3+1.3*z*(.4+.9*z2))*sh*smoothstep(.3,3.,length(d))*f*(1.+V*.8),1);return;}
shd();
if(k>.5){float e=smoothstep(1.,.5,length(N.xz));if(m>6.5){gl_FragColor=vec4(0,0,.01,.6*e*f);return;}
if(m>5.5){gl_FragColor=vec4(mix(mc(),LQ(o),f),e*.92);return;}
vec2 fl=floor(w.xz*45.);vec3 gn=normalize(vec3(h(fl)-.5,1.3,h(fl+7.)-.5));
gl_FragColor=vec4(mix(mc(),gr(o*lt(vec3(0,1,0))+RF(vec3(0,1,0))+sg(gn,50.)*.5*exp(-length(d)*.07)*(.5+.5*vn(w*3.))),f),e);return;}
vec3 g=n;float q=0.,r=m>5.5?0.:m>4.5?6.:m>1.5?14.:m<.5?10.:0.;
if(r>0.){n=normalize(n+(vec3(vn(w*r),vn(w*r+7.3),vn(w*r+13.1))-.5)*.8*(m>4.5&&m<5.5?exp(-length(d)*.04):1.));o*=.8+.4*vn(w*r*1.3);
if(m<.5){float cr=smoothstep(.035,0.,abs(vn(w*3.1+vn(w*9.)*.3)-.5)),ch=smoothstep(.9,.97,vn(w*24.));n=normalize(n+(vec3(vn(w*31.),vn(w*31.+5.),vn(w*31.+9.))-.5)*(cr+ch)*2.);o*=1.-.55*cr;o+=ch*.07;o*=.45+.55*smoothstep(0.,.7,w.y+.1);}}
float wt=m<.5?.1:0.;vec3 sn=vec3(0);
if(m>4.5&&m<5.5){float ph=dot(w.xz,vec2(.92,.39))*7.+vn(vec3(w.xz*.8,0.))*5.;n=normalize(n+vec3(.92,0,.39)*cos(ph)*.1*(.6+.4*vn(w*.4))*exp(-length(d)*.03));
vec2 fl=floor(w.xz*45.);sn=normalize(vec3(h(fl)-.5,1.3,h(fl+7.)-.5));wt=.6*exp(-length(d)*.07);}
if(m>7.5){vec2 bu=abs(g.y)>.5?w.xz:abs(g.x)>.5?w.zy:w.xy,u=bu/vec2(1.7,.75);u.x+=.5*mod(floor(u.y),2.);vec2 ce=floor(u),fr=fract(u);
float e=min(min(fr.x,1.-fr.x)*1.7,min(fr.y,1.-fr.y)*.75),sm=smoothstep(.07,.015,e),bv=smoothstep(0.,.2,e),h0=bh(bu);
vec2 gd=vec2(bh(bu+vec2(.03,0.))-h0,bh(bu+vec2(0.,.03))-h0)/.03*.07*exp(-length(d)*.05);
vec3 a1=abs(g.y)>.5?vec3(1,0,0):abs(g.x)>.5?vec3(0,0,1):vec3(1,0,0),a2=abs(g.y)>.5?vec3(0,0,1):vec3(0,1,0);
n=normalize(g-gd.x*a1-gd.y*a2);wt=(.2+.8*smoothstep(.45,.7,vn(w*.8+vec3(0,t*.02,0))))*(.3+.7*smoothstep(.4,0.,w.y-.4))*(.5+.5*bv)+.15;
o=o*1.6+vec3(.07,.075,.11);o*=(.7+.55*h(ce+floor(w.y*.01)))*(.4+.6*bv)*(.8+.3*vn(w*20.))*(.55+.45*smoothstep(0.,2.,w.y));o=mix(o,vec3(.01,.012,.025),sm*.9);}
if(m>1.5&&m<2.5&&g.y>.5){vec2 u=w.xz/vec2(1.,1.5);float z0=fh(u),p=exp(-length(d)*.1)*.05;vec2 gd=vec2(fh(u+vec2(.02,0.))-z0,(fh(u+vec2(0.,.0133))-z0)*1.5)/.02*p;n=normalize(n-vec3(gd.x,0,gd.y));wt=.9*(.4+.6*vn(w*4.));
u.x+=.5*mod(floor(u.y),2.);vec2 e=(.5-abs(fract(u)-.5))*vec2(1.,1.5);float z=min(e.x,e.y);
o*=(.85+.3*h(floor(u)))*(.6+.4*z0);q=exp(-length(d)*.03)*(smoothstep(.025,0.,z)*.9+smoothstep(.12,0.,z)*.2)*(.35+.65*pow(.5+.5*sin(w.z*.6+t*2.2),2.))*(1.+V*2.);}
if(m>5.5&&m<7.5)o=LQ(o);else if(m>.5&&m<1.5)o*=(2.4+.4*sin(t*9.+w.x+w.z))*(1.+V*.6);
else{o=o*lt(n)*(m>7.5?1.35:m>4.5?1.2:m>1.5?1.5:1.)+q*vec3(.4,.6,.9)*1.5+sg(dot(sn,sn)>0.?sn:n,40.)*wt;
if(V>.5){vec3 vv=normalize(-d),cd=vec3(0);float rf=pow(1.-max(dot(g,vv),0.),2.2);
for(int i=0;i<4;i++){vec3 l=Lp[i]-w;if(Lk[i].x>Lk[i].z)cd+=vec3(1.7,1.,.5)*max(dot(g,normalize(l)),0.)*8./(8.+dot(l,l)*.004);}
o+=(vec3(.3,.6,1.3)*(.3+.7*max(dot(g,Md),0.))+cd)*rf*.5*V+(m<7.5&&m>2.5?vec3(0):vec3(.05,.1,.2)*V*smoothstep(.6,1.,g.y));}
if(m<.5)o+=pow(1.-max(dot(g,normalize(-d)),0.),3.)*vec3(.4,.6,1.)*.6;
if(g.y>.5&&(m>4.5&&m<5.5||m>1.5&&m<2.5))o+=RF(g)*.8;o=gr(o);}
gl_FragColor=vec4(mix(mc(),o,f),1);}`,Ts=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255),vc=i=>i.map(e=>e/Math.hypot(...i)),Fh=(i,e)=>i.map((t,n)=>t-e[n]),ss=Math.PI,Vf=vc([.55,.55,-.4]),gc=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),Gf=i=>{let e=vc([-i[2],0,i[0]]);return[e,[-e[2]*i[1],e[2]*i[0]-e[0]*i[2],e[0]*i[1]]]};function Ev(i,e,t,n,s,r,a,o){if(!o){let c=Fh(t,e),l=Fh(n,e),u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]];if(Math.hypot(...u)<1e-6)return;let p=u.reduce((f,h,g)=>f+h*(e[g]-a[g]),0)<0?-1:1;o=[0,0,0].map(()=>u.map(f=>f*p))}[e,t,n].map((c,l)=>i.push(...c,...o[l],...s,r))}function Hf(i,e,t,n,s,r,a,o){for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])i.push(e+c*s,t,n+l*r,c,0,l,...a,o)}function Uh(i,[e,t,n],[s,r,a],o,c){let l=[],u=[e,t+r*.3,n],p=(f,h,g,x)=>Ev(l,f,h,g,o,c,u,x);if(s/=2,a/=2,i=="cone"){let f=x=>[e+Math.cos(x*ss/8)*s,t,n+Math.sin(x*ss/8)*a],h=x=>[Math.cos(x*ss/8),.5,Math.sin(x*ss/8)],g=[0,-1,0];for(let x=0;x<16;x++)p(f(x),f(x+1),[e,t+r,n],[h(x),h(x+1),h(x+.5)]),p(f(x),f(x+1),[e,t,n],[g,g,g])}else if(i=="ball"){let f=(h,g)=>[Math.sin(h*ss/10)*Math.cos(g*ss/8),Math.cos(h*ss/10),Math.sin(h*ss/10)*Math.sin(g*ss/8)];for(let h=0;h<10;h++)for(let g=0;g<16;g++){let x=[f(h,g),f(h+1,g),f(h+1,g+1),f(h,g+1)],m=x.map(d=>[e+d[0]*s,t+r/2+d[1]*r/2,n+d[2]*a]);p(m[0],m[1],m[2],[x[0],x[1],x[2]]),p(m[0],m[2],m[3],[x[0],x[2],x[3]])}}else{let f=[...Array(8)].map((h,g)=>[e+(g&1?s:-s),t+(g&2?r:0),n+(g&4?a:-a)]);i=="ramp"&&(f=f.map((h,g)=>g&4?h:[h[0],t,h[2]]));for(let h of[[0,1,3,2],[4,5,7,6],[0,1,5,4],[2,3,7,6],[0,2,6,4],[1,3,7,5]])p(f[h[0]],f[h[1]],f[h[2]]),p(f[h[0]],f[h[2]],f[h[3]])}return l}function Cv(i,[e,t,n],[s,,r],a){let o=r>s,c=o?r:s,l=(o?s:r)/2+.15,u=t*.32,p=.03,f=x=>i.push(x[0],x[1],x[2],x[3],x[4],.3,...a,8),h=(x,m,d,S)=>[x,m,d,x,d,S].map(f);for(let x=-c/2+1;x<c/2;x+=2.2){let m=(d,S,A,b)=>o?[e+d,S,n+x,A,b]:[e+x,S,n+d,A,b];h(m(-l,t,-1,0),m(l,t,1,0),m(l+u,p,1,1),m(-l-u,p,-1,1))}let g=(x,m,d)=>o?[e,m,n+x*c/2,0,d]:[e+x*c/2,m,n,0,d];h(g(-1,t,0),g(1,t,0),g(1,p,1),g(-1,p,1))}function Rv(i,e,t,n){let s=[],a=i[0]-60,o=e[0]-60,c=Math.ceil((i[1]+60-a)/2),l=Math.ceil((e[1]+60-o)/2),u=[];for(let h=0;h<=l;h++)for(let g=0;g<=c;g++){let x=a+g*2,m=o+h*2,d=Math.min(...t.map(([S,A,b,E])=>Math.hypot(Math.max(Math.abs(x-S)-b,0),Math.max(Math.abs(m-A)-E,0))));u.push((Math.sin(x*.27+Math.sin(m*.17)*2)*.5+Math.sin(m*.23-x*.12+1)*.4+Math.sin(x*.7+m*.6)*.08+Math.sin(x*1.3-m*1.1)*.04)*(1+1.6*gc(10,50,d))*gc(2.5,9,d)*gc(0,30,Math.min(g,c-g,h,l-h)*2))}let p=(h,g)=>u[Math.min(l,Math.max(0,g))*(c+1)+Math.min(c,Math.max(0,h))],f=(h,g)=>[a+h*2,p(h,g),o+g*2,...vc([p(h-1,g)-p(h+1,g),4,p(h,g-1)-p(h,g+1)])];for(let h=0;h<l;h++)for(let g=0;g<c;g++)for(let[x,m]of[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]]){let d=f(g+x,h+m);s.push(d[0],d[1],d[2],d[3],d[4],d[5],...n,5)}return s}async function Wf(i){let e=i.getContext("webgl"),t=e.createProgram(),n=[],s=e.getExtension("ANGLE_instanced_arrays");[Tv,Av].map((z,W)=>{let K=e.createShader(35633-W);e.shaderSource(K,z),e.compileShader(K),e.attachShader(t,K),e.getShaderParameter(K,35713)||n.push(e.getShaderInfoLog(K))}),[..."pnco"].map((z,W)=>e.bindAttribLocation(t,W,z)),e.linkProgram(t),e.getProgramParameter(t,35714)||n.push(e.getProgramInfoLog(t)),e.useProgram(t),e.bindBuffer(34962,e.createBuffer()),[..."pnc"].map((z,W)=>{e.enableVertexAttribArray(W),e.vertexAttribPointer(W,W<2?3:4,5126,0,40,W*12)}),e.depthFunc(515);let r=z=>e.getUniformLocation(t,z),a=(z,...W)=>e["uniform"+W.length+"f"](r(z),...W),o=()=>cancelAnimationFrame(R),c=(z,W,K=3)=>e["uniform"+K+"fv"](r(z),new Float32Array(W)),l=(z,W)=>(e.activeTexture(33984+z),e.bindTexture(3553,W)),u=(z,W,K,Ee,We,ee,me=5121,Re=1)=>{l(3,Ee),e.texImage2D(3553,0,6408,z,W,0,6408,me,null),[[10240,K],[10241,K],[10242,33071],[10243,33071]].map(([Pe,be])=>e.texParameteri(3553,Pe,be)),e.bindFramebuffer(36160,ee),e.framebufferTexture2D(36160,36064,3553,Ee,0),Re&&(e.bindRenderbuffer(36161,We),e.renderbufferStorage(36161,33189,z,W),e.framebufferRenderbuffer(36160,36096,36161,We))},p=()=>[e.createTexture(),e.createRenderbuffer(),e.createFramebuffer()],f=[p(),p()],h=p(),g=p(),x=[p(),p()],m=[p(),p()],d=512,S=(...z)=>[2,3,4,5].map((W,K)=>l(W,z[K]||null));u(1024,1024,9728,...f[0]),u(d*4,d*6,9728,...f[1]),["D0","D1","T","Ba","Bb","Dp"].map((z,W)=>e.uniform1i(r(z),W));let A=5121;for(let[z,W]of[[["OES_texture_half_float","EXT_color_buffer_half_float","OES_texture_half_float_linear"],36193],[["OES_texture_float","WEBGL_color_buffer_float","OES_texture_float_linear"],5126]])if(z.map(K=>e.getExtension(K)),u(4,4,9729,...h,W),e.checkFramebufferStatus(36160)==36053){A=W;break}let b,E="follow",w,v,M=[],D,R,U=0,O=0,$=[],I,J,te=()=>s&&$.map(z=>{e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,5126,0,12,z.io*4),s.vertexAttribDivisorANGLE(3,1),s.drawArraysInstancedANGLE(4,z.f,z.n,z.c),s.vertexAttribDivisorANGLE(3,0),e.disableVertexAttribArray(3)});function j(){e.disable(3042),e.enable(2929),e.depthMask(1),a("k",5),l(0,null),l(1,null),e.bindFramebuffer(36160,f[1][2]),e.viewport(0,0,d*4,d*6),e.clearColor(1,0,0,1),e.clear(16640);let z=(W,K,Ee,We,ee,me,Re,Pe,be,Ne)=>{e.bindFramebuffer(36160,W),e.viewport(K,Ee,We,We),a("Lr",...Re),a("Lu",...Pe),a("Lf",...me),a("Lo",...ee),a("Lq",be,Ne),e.drawArrays(4,6,v[0]+v[1]),te()};e.bindFramebuffer(36160,f[0][2]),e.clearColor(1,0,0,1),e.clear(16640),z(f[0][2],0,0,1024,...J),M.map(([W],K)=>{for(let Ee=0;Ee<6;Ee++){let We=Ee>>1,ee=Pe=>[0,0,0].map((be,Ne)=>+(Ne==Pe)),me=ee(We).map(Pe=>Pe*(Ee&1?-1:1)),Re=K*6+Ee;z(f[1][2],Re%4*d,(Re/4|0)*d,d,W,me,ee((We+1)%3),ee((We+2)%3),50,1)}})}function de(z=2){if(!b)return;let W=i.clientWidth||i.width,K=i.clientHeight||i.height,{at:Ee,facing:We}=b.avatar,ee=We*ss/180,me=+(E=="overview");(i.width!=W||i.height!=K)&&(i.width=W,i.height=K),(U!=W||O!=K)&&(u(U=W,O=K,9729,...h,A),u(W,K,9728,...g),[x,m].map((Rt,it)=>Rt.map(un=>u(Math.ceil(W/4**(it+1)),Math.ceil(K/4**(it+1)),9729,...un,A,0))));let Re=[Math.sin(ee),0,-Math.cos(ee)],Pe=[-Re[2],0,Re[0]];w=me?{position:[D.c[0]-Re[0]*D.r,D.r*.9,D.c[2]-Re[2]*D.r],target:[D.c[0],0,D.c[2]]}:{position:Ee.map((Rt,it)=>Rt-Re[it]*6.5+Pe[it]*1.3+(it==1)*3.4),target:Ee.map((Rt,it)=>Rt+Re[it]*9+(it==1)*.8)};let be=w.position.map((Rt,it)=>Rt+[Math.sin(z*.4)*.1,Math.sin(z*.31)*.07,Math.cos(z*.37)*.1][it]),Ne=vc(w.target.map((Rt,it)=>Rt+[Math.cos(z*.3)*.12,Math.sin(z*.23)*.08,0][it]-be[it])),[ut,Ze]=Gf(Ne);a("P",...be),a("X",...ut),a("Y",...Ze),a("Z",...Ne),a("H",...Ts(b.sky||"#2a2a4a")),a("S",1.8,W/K,z,K/720),a("V",me);let Et=[],Ut=[];for(let Rt=0;Rt<4;Rt++){let it=M[Rt],un=it&&it[0],Qt=it&&it[1].map(sn=>sn/4.5),fn=un?Fh(un,be):[0,0,0],Yt=un?fn.reduce((sn,vt,wt)=>sn+vt*Ne[wt],0):0,gn=fn.reduce((sn,vt,wt)=>sn+vt*ut[wt],0)*1.8/(W/K)/Yt,B=fn.reduce((sn,vt,wt)=>sn+vt*Ze[wt],0)*1.8/Yt;Et.push(gn/2+.5,B/2+.5,un&&Yt>.5?gc(1.8,.8,Math.hypot(gn,B))*Math.min(1,50/Yt+.35):0),Ut.push(...Qt||[0,0,0])}c("Q",Et),c("Qc",Ut);let ot=()=>{me?(e.drawArrays(4,6,v[0]),e.drawArrays(4,6+v[0]+v[1],v[2]+v[3])):e.drawArrays(4,6,v[0]+v[1]+v[2]+v[3]),te()};l(0,f[0][0]),l(1,f[1][0]),S(),e.bindFramebuffer(36160,g[2]),e.viewport(0,0,W,K),e.clearColor(1,0,0,1),e.clear(16640),e.disable(3042),e.enable(2929),e.depthMask(1),a("k",6),ot(),e.bindFramebuffer(36160,h[2]),e.viewport(0,0,W,K),e.clearColor(0,0,0,1),e.clear(16640),e.disable(2929),e.depthMask(0),e.enable(3042),e.blendFunc(770,771),a("k",3),e.drawArrays(4,0,6),e.enable(2929),e.depthMask(1),a("k",0),ot(),e.depthMask(0);let qt=6+v[0]+v[1]+v[2]+v[3];a("k",1),e.drawArrays(4,qt,v[4]),e.blendFunc(770,1),a("k",2),e.drawArrays(0,qt+v[4],v[5]),a("k",1),e.drawArrays(4,qt+v[4]+v[5],v[6]),e.disable(2929),e.disable(3042),a("k",7);let bt=(Rt,it,un,Qt,fn,Yt)=>{let gn=Math.ceil(W/Yt),B=Math.ceil(K/Yt);e.bindFramebuffer(36160,it[2]),e.viewport(0,0,gn,B),S(Rt),a("Bm",fn),a("Dr",un,Qt),e.drawArrays(4,0,6)};bt(h[0],x[1],2/W,0,1,4),bt(x[1][0],x[0],0,1/Math.ceil(K/4),0,4),bt(x[0][0],m[1],3/Math.ceil(W/4),0,0,16),bt(m[1][0],m[0],0,1.5/Math.ceil(K/16),0,16),e.bindFramebuffer(36160,null),e.viewport(0,0,W,K),S(h[0],x[0][0],m[0][0],g[0]),a("Dr",1/W,1/K),a("k",4),e.drawArrays(4,0,6),e.depthMask(1)}return{modes:["follow","overview"],setWorld(z){b=z;let W=Ts(b.ground||"#12121c"),K=[],Ee=[],We=[],ee=[],me=[],Re=[],{at:Pe}=b.avatar,be=[["ball",[Pe[0],0,Pe[2]],[.64,1.5,.52],"#7a5a35"],["ball",[Pe[0],1.4,Pe[2]],[.3,.32,.3],"#8a6a40"]],Ne=Object.values(b.things),ut=[Pe[0],Pe[0]],Ze=[Pe[2],Pe[2]],Et=[[Pe[0],Pe[2],.5,.5]],Ut=[0],ot=Ne.filter(k=>k[5]==2),qt=[],bt={},Rt={},it=k=>k[0]+k[2]+k[3],un=k=>k&&[k[1][0],k[1][1]+k[2][1]/2,k[1][2]],Qt=k=>ot.filter(k).sort((F,V)=>V[2][0]*V[2][1]*V[2][2]-F[2][0]*F[2][1]*F[2][2])[0],fn=k=>Math.hypot(k[1][0]-Pe[0],k[1][2]-Pe[2]);Ne.map(k=>!k[5]&&(Rt[it(k)]=(Rt[it(k)]||0)+1)),M=Ne.filter(k=>k[5]==1).sort((k,F)=>fn(k)-fn(F)).slice(0,4).map(k=>[un(k),Ts(k[3]).map(F=>F*3.6)]);for(let[k,F]of[[Qt(V=>V[0]=="ball"&&Ts(V[3])[2]>Ts(V[3])[0]),[1.1,1.8,2.6]],[Qt(V=>V[0]=="ball"&&Ts(V[3])[0]-Ts(V[3])[2]>.3),[3,2.1,1]]])k&&M.length<4&&M.push([un(k),F]);let Yt=ot.length?ot.reduce((k,F)=>k.map((V,Se)=>V+F[1][Se]/ot.length),[0,0,0]):[0,1e4,0];for(let[k,F,V,Se,,P]of[...Ne,...be]){let ae=Ts(Se),se=Math.max(V[0],V[2])/2;if(ut[0]=Math.min(ut[0],F[0]-se),ut[1]=Math.max(ut[1],F[0]+se),Ze[0]=Math.min(Ze[0],F[2]-se),Ze[1]=Math.max(Ze[1],F[2]+se),F[1]<1&&Et.push([F[0],F[2],V[0]/2,V[2]/2]),k=="disc"){Hf(ee,F[0],F[1]+.02,F[2],V[0]/2,V[2]/2,ae,P==2?6:3);continue}let ge=P==2&&k=="box"&&V[1]<.15&&V[0]>.4&&V[2]>.4;!P&&F[1]>=0&&F[1]<.3&&k!="ramp"&&V[1]>=.12&&V[0]+V[2]<12&&Ut[0]++<80&&Hf(ee,F[0],.025,F[2],V[0]*.5+.5,V[2]*.5+.5,[0,0,0],7),P&&!ge&&k=="box"&&V[1]<.15&&(V=[V[0]<V[2]?V[0]*.4:V[0],V[1]*.5,V[2]<=V[0]?V[2]*.4:V[2]]);let we=!P&&k=="box"&&Math.max(...V)>=2.9&&V[1]>=.12,Ce=we&&F[1]>=3&&V[1]<=1.5&&V[0]>5&&V[2]>5,$e=ge?6:P?P==1&&F[1]>=1&&qt.length<4?11+qt.push([F[0],F[1]+V[1]+.35,F[2],qt.length*1.3])-1:1:we?8:V[1]<.12&&k=="box"?2:0;if(P==2&&k=="box"&&Math.min(V[0],V[2])<=.4&&Math.max(V[0],V[2])>=3&&F[1]>=3&&Cv(Re,F,V,ae.map(ht=>ht*1.1)),s&&!P&&!we&&(k=="box"||k=="cone")&&Rt[it([k,F,V,Se])]>=3){let ht=it([k,0,V,Se])+$e;(bt[ht]||(bt[ht]={m:Uh(k,[0,0,0],V,ae,$e),o:[]})).o.push(...F);continue}if((P?We:Ce?Ee:K).push(...Uh(k,F,V,ae,$e)),P){let ht=[F[0],F[1]+V[1]/2,F[2]];me.push(...ht,P==1?2.5:1,0,0,...ae,.8);for(let ye=0;ye<22;ye++)me.push(...ht,.12,(ye+.5)/22,1,...ae,1)}}for(let k=0;k<90;k++)me.push(Pe[0]+Math.sin(k*13)*12,3+Math.sin(k*29)*2.5,Pe[2]+Math.sin(k*47)*12,.08,k*.37+.1,2,.54,.54,.58,.8);M.map(([k],F)=>{for(let V=0;V<28;V++)me.push(k[0]+Math.sin(V*13+F*7)*4,k[1]-.8+Math.sin(V*29+F)*1.8,k[2]+Math.sin(V*47+F*3)*4,.08,V*.53+F,2,.54,.54,.58,.9)}),D={c:[(ut[0]+ut[1])/2,0,(Ze[0]+Ze[1])/2],r:Math.max(10,Math.hypot(ut[1]-ut[0],Ze[1]-Ze[0])*.5+3)};let gn=[...Uh("box",[0,-1.02,0],[800,1,800],W,5),...Rv(ut,Ze,Et,W)],B=Math.max(16,D.r*.9),sn=Vf.map(k=>-k),[vt,wt]=Gf(sn);J=[D.c.map((k,F)=>k-sn[F]*B*1.2),sn,vt.map(k=>k/B),wt.map(k=>k/B),B*2.4,0];let Ie=ot.filter(k=>k[0]=="box"&&Math.min(k[2][0],k[2][2])<=.4&&Math.max(k[2][0],k[2][2])>=3&&k[1][1]>=3).sort((k,F)=>F[2][0]+F[2][2]-k[2][0]-k[2][2]).slice(0,2),Zt=[],je=[];for(let k=0;k<2;k++){let F=Ie[k];Zt.push(...F?[F[1][0],F[1][2],F[2][0]/2+.1,F[2][2]/2+.1]:[0,0,0,0]),je.push(...F?[F[1][1],...Ts(F[3])]:[0,0,0,0])}c("Ra",Zt,4),c("Rb",je,4),c("Lp",[0,1,2,3].flatMap(k=>M[k]?M[k][0]:[0,1e4,0])),c("Lk",[0,1,2,3].flatMap(k=>M[k]?M[k][1]:[0,0,0])),c("Sw",[0,1,2,3].flatMap(k=>qt[k]||[0,1e4,0,0]),4),a("Mo",...J[0]),c("Mf",J[1]),c("Mr",J[2]),c("Mu",J[3]),a("Mq",J[4],0),a("Md",...Vf),a("G",...Yt);let rt=[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].flatMap(([k,F])=>[k,F,0,(k+1)/2,(F+1)/2,0,0,0,0,0]),T=[rt,K,Ee,We,gn,ee,me,Re],_=T.reduce((k,F)=>k+F.length,0),q=Object.values(bt),xe=_+q.reduce((k,F)=>k+F.m.length+F.o.length,0),oe=new Float32Array(xe),_e=0;T.map(k=>{oe.set(k,_e),_e+=k.length}),$=q.map(k=>{let F={f:_e/10,n:k.m.length/10,c:k.o.length/3};return oe.set(k.m,_e),_e+=k.m.length,F}),q.map((k,F)=>{$[F].io=_e,oe.set(k.o,_e),_e+=k.o.length}),e.bufferData(34962,oe,35044),v=[K,Ee,We,gn,ee,me,Re].map(k=>k.length/10),j(),de()},setCamera(z){E=z,de()},getCamera:()=>w,renderStill(z){E=z,de()},start(){R=requestAnimationFrame(function z(W){de(W/1e3),R=requestAnimationFrame(z)})},stop:o,dispose:o,resize(){de()},errors:()=>n.splice(0)}}var jt=Math.PI,Xf=[.55,.55,-.4],Oh=[.26,.12,-.96],uo=i=>{let e=Math.hypot(...i);return i.map(t=>t/e)},Si=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),hr=(i,e,t)=>i+(e-i)*t,Xs=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},ea=(i,e,t=0)=>{let n=Math.imul(i+374761393,668265263)^Math.imul(e+1274126177,2246822519)^Math.imul(t+97,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},rs=(i,e)=>{let t=Xs(i),n=Float32Array.from({length:e*e},t);return(s,r)=>{s*=e,r*=e;let a=Math.floor(s),o=Math.floor(r),c=s-a,l=r-o,u=c*c*(3-2*c),p=l*l*(3-2*l),f=(h,g)=>n[(g%e+e)%e*e+(h%e+e)%e];return hr(hr(f(a,o),f(a+1,o),u),hr(f(a,o+1),f(a+1,o+1),u),p)}},ta=(i,e=4,t=4)=>{let n=[...Array(t)].map((s,r)=>rs(i+r*17,e<<r));return(s,r)=>{let a=0,o=.5,c=0;for(let l of n)a+=l(s,r)*o,c+=o,o*=.5;return a/c}};function Pv(i,e,t,n){let s=new Float32Array(i*i),r=new Uint8ClampedArray(i*i*4),a=new Uint8ClampedArray(i*i*4);for(let l=0;l<i;l++)for(let u=0;u<i;u++){let[p,f,h]=e((u+.5)/i,(l+.5)/i),g=l*i+u;s[g]=p,r[g*4]=r[g*4+1]=r[g*4+2]=f*255,r[g*4+3]=255,a[g*4]=a[g*4+1]=a[g*4+2]=h*255,a[g*4+3]=255}let o=new Uint8ClampedArray(i*i*4),c=(l,u)=>s[(u+i)%i*i+(l+i)%i];for(let l=0;l<i;l++)for(let u=0;u<i;u++){let p=(c(u-1,l)-c(u+1,l))*t,f=(c(u,l+1)-c(u,l-1))*t,h=Math.hypot(p,f,1),g=(l*i+u)*4;o[g]=(p/h*.5+.5)*255,o[g+1]=(f/h*.5+.5)*255,o[g+2]=(1/h*.5+.5)*255,o[g+3]=255}return{map:n(r,i,!0),normalMap:n(o,i),roughnessMap:n(a,i)}}function Iv(){let i=ta(3,4,4),e=rs(9,64);return(t,n)=>{let s=Math.floor(n*8),r=t*4+(s&1)*.5,a=Math.floor(r),o=r-a,c=n*8-s,l=Math.min(o*128,(1-o)*128,c*64,(1-c)*64),u=ea(s,(a%4+4)%4,3),p=i(t,n),f=e(t,n),h=l<3.5?0:Si(3.5,9,l),g=h*(.55+.25*p+.1*f+.12*u),x=p>.7?(p-.7)*1.2:0;return[g-x*h,h<.05?.42+.1*f:(.62+.32*u)*(.82+.3*p)*(.9+.2*f),h<.05?.96:.74+.22*f]}}function Dv(){let i=ta(21,4,4),e=rs(5,96),t=[0,1,2].map(s=>.25+.5*ea(s,1,7)),n=[0,1,2].map(s=>ea(s,2,7));return(s,r)=>{let a=Math.floor(r*3),o=r*3-a,c=(s*2+n[a])%2,l=Math.floor(c),u=c-l,p=l?1-t[a]:t[a],f=Math.min(u*p*256,(1-u)*p*256,o*170,(1-o)*170),h=a*2+l,g=i(s,r),x=e(s,r);return[Si(3,11,f)*(.7+.2*g+.06*x+.04*(u-.5)*ea(h,0,3)),f<3?.4:(.72+.28*ea(h,5,1))*(.85+.25*g),f<3?.97:.55+.3*x+.15*g]}}function Lv(){let i=ta(33,4,5),e=rs(8,128),t=rs(14,8);return(n,s)=>{let r=2*jt*(6*n+3*s)+t(n,s)*9,a=Math.sin(r),o=a>0?1-(1-a)*(1-a):a*.8,c=i(n,s),l=e(n,s);return[.5+.28*o*(.5+c)+.3*l,.82+.3*c-.06*o,.9+.1*l]}}function Nv(){let i=rs(61,192),e=rs(62,192),t=ta(63,4,4);return(n,s)=>{let r=Math.max(i(n,s*3),e(n*3,s)),a=t(n,s);return[.5+.4*r,(.6+.4*r)*(.8+.4*a),.84]}}function Uv(){let i=ta(41,4,5),e=ta(43,16,3),t=rs(7,128);return(n,s)=>{let r=i(n,s),a=Math.abs(e(n,s)-.5)<.018?.6:1;return[(.4+.5*r+.2*t(n,s))*a,(.78+.3*r)*(.6+.4*a)*(.92+.16*t(n,s)),.8+.18*t(n,s)]}}function Fv(){let i=rs(12,16);return(e,t)=>[.5+.12*(Math.sin(2*jt*(5*e+2*t))+Math.sin(2*jt*(3*t-4*e)+1.7)+.7*Math.sin(2*jt*(9*e+7*t)+3))+.2*i(e,t),1,.1]}var Ov="varying vec3 vD;void main(){vD=position;vec4 p=projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.);gl_Position=p.xyww;}",Jf=`float hh(vec3 p){p=fract(p*vec3(.1031,.103,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
vec3 h3(vec3 p){return vec3(hh(p),hh(p+19.19),hh(p+47.7));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(hh(i),hh(i+vec3(1,0,0)),f.x),mix(hh(i+vec3(0,1,0)),hh(i+vec3(1,1,0)),f.x),f.y),mix(mix(hh(i+vec3(0,0,1)),hh(i+vec3(1,0,1)),f.x),mix(hh(i+vec3(0,1,1)),hh(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fb(vec3 p){return vn(p)*.5+vn(p*2.03+7.)*.27+vn(p*4.1+3.)*.15+vn(p*8.3)*.08;}
vec3 stl(vec3 r,float S,float pr,float sz,float t,float bd){vec3 s=r*S,g=floor(s),f=fract(s);
if(hh(g)>pr*(1.+bd*3.))return vec3(0);vec3 q=h3(g+3.7),d=f-(.22+.56*h3(g+8.1));float m=q.y,rad=sz*(.55+.6*m);
float k=exp(-dot(d,d)/(rad*rad))*(.12+1.4*m*m*m);float tt=q.z;
vec3 c=tt<.5?mix(vec3(.62,.8,1.15),vec3(1.),tt*2.):mix(vec3(1.),vec3(1.1,.88,.62),(tt-.5)*2.);if(q.x>.96)c=vec3(1.2,.62,.34);
return c*k*(.68+.32*sin(t*(1.3+q.x*3.)+q.y*90.));}
vec3 nightSky(vec3 r,vec3 hor,float t){float hy=max(r.y,0.);vec3 nc=mix(hor,hor*.27,sqrt(hy));if(r.y<0.)nc=hor*mix(1.,.5,smoothstep(0.,-.5,r.y));
vec3 gn=normalize(vec3(.3,.84,.45));float gb=dot(r,gn),bd=exp(-gb*gb/.02),nz=fb(r*3.+1.7),ln=smoothstep(.45,.7,fb(r*7.+9.));
nc+=vec3(.42,.5,.9)*bd*(.25+.9*nz)*(1.-.6*ln)*.085+vec3(1.,.78,.5)*bd*pow(max(dot(r,normalize(vec3(-.55,.15,-.8))),0.),3.)*nz*.07;
vec3 w1=normalize(vec3(.75,.25,-.6)),w2=normalize(vec3(-.8,.4,-.45)),w3=normalize(vec3(.1,-.55,-.8)),w4=normalize(vec3(-.2,-.3,.9));
nc+=(vec3(.5,.22,.95)*pow(max(dot(r,w1),0.),5.)*smoothstep(.42,.85,fb(r*3.4+vec3(4.,1.,2.)+fb(r*1.7)*1.6))+vec3(.15,.55,.9)*pow(max(dot(r,w2),0.),5.)*smoothstep(.42,.85,fb(r*3.1+vec3(9.,3.,5.)+fb(r*1.9)*1.6))
+vec3(.9,.28,.6)*pow(max(dot(r,w3),0.),5.)*smoothstep(.42,.85,fb(r*3.+vec3(2.,8.,1.)))+vec3(.3,.4,1.)*pow(max(dot(r,w4),0.),5.)*smoothstep(.45,.85,fb(r*3.+vec3(6.,2.,7.))))*.2;
return nc+(stl(r,40.,.10,.2,t,bd)*1.1+stl(r,90.,.14,.19,t,bd)*.9+stl(r,200.,.06,.17,t,bd)*.8);}`,Bv=`precision highp float;uniform vec3 uHor,uZen,uSun,uMoon;uniform float uD,uT,uAlt;varying vec3 vD;
${Jf}
void main(){vec3 r=normalize(vD);float y=r.y,hy=max(y,0.);
float sd=dot(r,uSun),an=acos(clamp(sd,-1.,1.));
vec3 dc=mix(uHor*vec3(1.1,1.,.86),uZen,smoothstep(0.,.95,pow(hy,.45)));
dc=mix(dc,dc*vec3(1.08,.9,.86),exp(-hy*9.)*.5);
float cp=mix(1.,.3,uAlt);dc+=cp*(vec3(1.,.58,.26)*pow(max(sd,0.),4.)*.28*(1.-hy*.6)+vec3(1.,.74,.42)*exp(-an*7.)*.5+vec3(1.,.82,.55)*exp(-an*30.)*1.6+vec3(1.,.88,.62)*smoothstep(.046,.034,an)*34.);
if(uAlt>0.){dc=mix(dc,mix(uHor*vec3(1.03,.98,.86),uZen,smoothstep(0.,.9,pow(hy,.55))),uAlt*.7);
dc+=uAlt*(vec3(1.,.82,.52)*exp(-an*2.4)*.16+vec3(1.,.9,.66)*exp(-an*9.)*.14);
dc=mix(dc,mix(dc,vec3(.86,.78,1.)*.95,.4),uAlt*smoothstep(.25,-.5,y));
if(y>0.){vec2 q=r.xz/(y+.2)*1.2+vec2(uT*.012,uT*.005);float wv=smoothstep(.5,.8,fb(vec3(q*vec2(1.,2.3),uT*.008)));dc=mix(dc,vec3(1.04,.94,.78),wv*.38*uAlt*smoothstep(0.,.1,y)*(1.-smoothstep(.75,1.,y)));}}
vec3 nc=vec3(0);if(uD<.999){nc=nightSky(r,uHor,uT);float md=dot(r,uMoon);
nc+=vec3(.5,.62,.95)*(pow(max(md,0.),40.)*.35+pow(max(md,0.),600.)*.5)+vec3(.9,.95,1.1)*smoothstep(.9991,.9993,md)*2.2;}
gl_FragColor=vec4(mix(nc,dc,uD),1.);}`,zv=`precision highp float;uniform float uT,uS,uA,uBase;uniform vec3 uHor,uSun;varying vec3 vW;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=n2(p)*a;p=p*2.03+vec2(17.,9.);a*=.5;}return s/.9375;}
void main(){vec3 V=vW-cameraPosition;float dist=length(V);vec2 p=vW.xz*uS+vec2(uT*.02,uT*.008)*uS*8.;
float fd=1.-smoothstep(900.,1700.,dist);float d=mix(.5,fb(p),fd),cov=smoothstep(uBase,uBase+.22,d);
float ds=mix(.5,fb(p+uSun.xz*.5),fd),lit=clamp(.5+(d-ds)*7.,0.,1.)*(.35+.65*cov);
vec3 c=mix(vec3(.66,.55,.8),vec3(1.12,.99,.76),lit)*(.72+.42*cov);
c=mix(c,mix(uHor*1.02,vec3(.86,.78,1.),.5),1.-exp(-dist/900.));
float a=mix(cov*uA,1.,step(.99,uA))*(1.-smoothstep(900.,1450.,dist));gl_FragColor=vec4(c,a);}`,qf="varying vec2 vU;varying vec3 vW;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",kv=`uniform float uT,uL;uniform vec3 uC,uN;varying vec2 vU;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
void main(){float a=abs(vU.x),L=vU.y*uL;float edge=1.-smoothstep(.5,1.,a),core=exp(-a*a*2.5);
float fl=.78+.22*sin(L*1.7-uT*3.)+.1*sin(L*5.-uT*7.+vU.x*3.);float q=floor(L*1.4-uT*.9);
float g=pow(max(sin(L*5.-uT*6.+sin(vU.x*4.+q)*1.5),0.),14.)*smoothstep(.35,.9,h(vec2(q,floor(vU.x*2.5))));
vec3 c=vec3(1.,.78,.36)*uC*fl*(.7+.9*core)+vec3(1.,.95,.75)*(g*1.3+core*.25);gl_FragColor=vec4(c,edge*smoothstep(2.,8.,distance(vW,cameraPosition))*mix(.22,1.,smoothstep(.08,.4,abs(dot(normalize(vW-cameraPosition),uN)))));}`,Vv=`attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(uT*(.07+.1*fract(aS*3.1))+aS*7.3);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*.9+sin(uT*2.+aS*40.)*.1;q.y+=.12+fract(aS*5.)*.8+sin(uT*3.+aS*20.)*.08;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(f*3.1416)*(.45+.55*sin(uT*9.+aS*60.));gl_PointSize=max(.09*uK/-mv.z,1.8);}`,Yf="varying float vA;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vec3(1.,.9,.55)*2.,vA*a);}",Gv=`attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(aS),ph=fract(uT*(.1+.1*fract(aS*3.7))+aS*5.1);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*1.8+sin(uT*.8+aS*40.)*.25;q.y+=.2-ph*(2.4+fract(aS*9.)*2.6);q.z+=sin(uT*.9+aS*30.)*.25+ph*.7;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(ph*3.1416)*(1.-ph*.35)*(.55+.45*sin(uT*7.+aS*60.));gl_PointSize=max(.14*uK/-mv.z,2.2);}`,Hv=`attribute vec4 aC,aD;uniform float uT;varying vec2 vQ;varying vec4 vD;varying float vFd,vDist;varying vec3 vRay;
void main(){vec3 c=aC.xyz;float r=aC.w,sd=aD.x;c+=vec3(sin(uT*.05+sd*40.),sin(uT*.04+sd*17.)*.12,cos(uT*.045+sd*23.))*r*.4+vec3(sin(uT*.011)*9.,0.,cos(uT*.008)*5.);r*=1.+.05*sin(uT*.3+sd*30.);
vRay=normalize(c-cameraPosition);vec4 mv=viewMatrix*vec4(c,1.);vDist=length(mv.xyz);vFd=smoothstep(r*.6,r*1.8+6.,vDist);vQ=position.xy;vD=aD;mv.xy+=position.xy*r*1.18;gl_Position=projectionMatrix*mv;}`,Wv=`precision highp float;uniform float uT;uniform vec3 uSun,uHor;varying vec2 vQ;varying vec4 vD;varying float vFd,vDist;varying vec3 vRay;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){return n2(p)*.55+n2(p*2.1+5.)*.3+n2(p*4.3+9.)*.15;}
void main(){vec2 q=vQ*1.18;float sd=vD.x,h=vD.y,r2=dot(q,q);vec2 np=q*1.5+sd*53.;float n1=fb(np),n3=fb(np*1.9+13.);
float rr=sqrt(r2)+(n1-.5)*.6;float a=smoothstep(1.,.42,rr);if(a<.004)discard;
float z=sqrt(max(1.-min(r2,1.),0.));vec3 nv=normalize(vec3(q+(vec2(n1,n3)-.5)*.8,z*1.05+.12));vec3 nw=normalize(nv*mat3(viewMatrix));
float d=dot(nw,uSun),up=nw.y,sun=max(d,0.);
vec3 lav=vec3(.74,.65,.92),cream=vec3(1.,.94,.82),gold=vec3(1.,.8,.44);
cream=mix(cream,vec3(1.,.86,.6),h*.55);vec3 c=mix(lav*mix(.82,1.,h),cream,smoothstep(-.5,.5,up)*.7+.3*h);c*=mix(.86,1.,h)*(.84+.3*n1);
c+=gold*sun*(.3+.5*h)+gold*pow(smoothstep(.1,1.,up),1.5)*1.1*h+vec3(1.,.86,.6)*pow(1.-z,3.)*sun*.45;
c+=gold*pow(max(dot(vRay,uSun),0.),2.5)*(.3+1.1*pow(1.-z,2.))*(.4+.6*h);
c*=1.12;float hz=1.-exp(-vDist/1000.);c=mix(c,mix(uHor,vec3(.82,.74,.98),.55)*1.0,hz*.8);
gl_FragColor=vec4(c,a*vFd*.94);}`,Xv=`attribute vec4 aB;attribute vec3 aV;uniform float uT;uniform vec3 uCen;uniform vec2 uDir;varying float vA,vS;
void main(){float L=150.;vec3 d=vec3(aB.x,aB.y,aB.z)+vec3(uDir.x,0.,uDir.y)*aV.y*uT;d.xz=mod(d.xz+L*.5,L)-L*.5;d.y+=sin(uT*.2+aV.x*9.)*1.5;vec3 wp=uCen+d;float fp=uT*(5.+aV.y)+aV.x*30.,flap=sin(fp);
vec3 lp=position;float wing=abs(lp.x);lp.y+=flap*wing*.55*step(.01,wing);lp.y+=sin(fp*.5)*.04;lp*=aB.w;
float yaw=atan(uDir.x,uDir.y)+(aV.z-.5)*.5;float cy=cos(yaw),sy=sin(yaw);vec3 rp=vec3(lp.x*cy+lp.z*sy,lp.y,-lp.x*sy+lp.z*cy);
vec4 mv=viewMatrix*vec4(wp+rp,1.);gl_Position=projectionMatrix*mv;vA=1.-smoothstep(.62,.98,length(d.xz)/(L*.5));vS=.5+.5*flap*step(.01,wing);}`,qv="uniform vec3 uHor;varying float vA,vS;void main(){vec3 c=mix(vec3(.22,.17,.36),vec3(.46,.38,.6),vS*.6);c=mix(c,uHor*.8,.28);gl_FragColor=vec4(c,vA*.9);}",Yv=`attribute vec4 aP;attribute vec3 aC;uniform float uT,uK;varying vec4 vC;
void main(){vec3 B=vec3(46.,20.,46.),wind=vec3(1.5,-.14,.95);float s=aP.w;vec3 q=aP.xyz*B+wind*uT*(.55+.9*fract(s*7.1))+vec3(sin(uT*.9+s*40.)*.7,sin(uT*1.4+s*30.)*.4,cos(uT*.8+s*20.)*.7);
vec3 rel=mod(q-cameraPosition+B*.5,B)-B*.5;vec4 mv=viewMatrix*vec4(cameraPosition+rel,1.);gl_Position=projectionMatrix*mv;
float e=max(abs(rel.x)/(B.x*.5),max(abs(rel.y)/(B.y*.5),abs(rel.z)/(B.z*.5)));float fl=.65+.35*sin(uT*3.+s*50.);vC=vec4(aC*(.8+.5*fl),(1.-smoothstep(.7,1.,e))*smoothstep(.6,2.5,-mv.z)*.85);
gl_PointSize=clamp(.075*(.7+fract(s*3.3))*uK/-mv.z,1.8,16.);}`,Zv="varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=smoothstep(1.,.3,r);gl_FragColor=vec4(vC.rgb,vC.a*a);}",Jv={name:"GlassFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uT:{value:2},uHor:{value:new Te},uOv:{value:0},uRip:{value:0},uFt:{value:Array.from({length:7},()=>new Be)},uBc:{value:new cn}},vertexShader:`uniform mat4 textureMatrix;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
void main(){vUv=textureMatrix*vec4(position,1.);vL=position.xy*2.;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`uniform vec3 color,uHor;uniform sampler2D tDiffuse;uniform float uT,uOv,uRip;uniform vec2 uFt[7];uniform vec4 uBc;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
${Jf}
void main(){vec3 V=normalize(vW-cameraPosition);vec2 p=vW.xz;
float a=p.x*1.7+uT*.8+sin(p.y*.9),b=p.y*2.3-uT*.6+p.x*.4,c=(p.x+p.y)*3.7+uT*1.3;
vec2 g=vec2(cos(a)*1.7+cos(c)*1.85,cos(b)*2.3+cos(c)*1.85)*.0007;
float rp=0.;for(int i=0;i<7;i++){vec2 d=p-uFt[i];float L=length(d),ph=fract(uT*.3+float(i)*.29),r=.15+ph*1.7,e=exp(-pow((L-r)/.11,2.))*(1.-ph)*(1.-ph)*(1.-float(i)*.1)*uRip;rp+=e;g+=d/max(L,.01)*e*.004*sin((L-r)*36.);}
vec3 n=normalize(vec3(-g.x,1.,-g.y));
vec2 uv=vUv.xy/vUv.w+g*2.5;vec3 rf=texture2D(tDiffuse,uv).rgb*.7+texture2D(tDiffuse,uv+vec2(0.,.003)).rgb*.15+texture2D(tDiffuse,uv-vec2(0.,.003)).rgb*.15;
float cs=clamp(dot(-V,n),0.,1.),F=.16+.84*pow(1.-cs,3.5);
vec3 tr=nightSky(normalize(V),uHor*.7,uT)*.4;
vec3 col=color*.5+vec3(.01,.014,.035)+tr*(1.-F)+rf*F*1.1;
col+=vec3(.55,.7,1.)*rp*.07*(.4+F);
if(uBc.w>0.){vec2 cd=normalize(uBc.xy-cameraPosition.xz+1e-4),q=p-uBc.xy;float al=-dot(q,cd),ac=q.x*cd.y-q.y*cd.x,wd=.22+.05*max(al,0.);
float st=exp(-ac*ac/(wd*wd))*(al>0.?exp(-al/30.):exp(-al*al/9.));col+=vec3(.8,.9,1.)*st*uBc.w*(.3+.7*F)*.6;}
if(uOv>0.){vec2 cp=p*.1,ci=floor(cp),cf=fract(cp);float hs=hh(vec3(ci,5.));vec3 st=vec3(.014,.02,.05);if(hs>.7){vec2 sp=.2+.6*vec2(hh(vec3(ci,9.)),hh(vec3(ci,13.)));vec2 dd=cf-sp;st+=mix(vec3(.6,.8,1.),vec3(1.,.85,.6),hh(vec3(ci,2.)))*exp(-dot(dd,dd)/.012)*(.3+.7*hh(vec3(ci,7.)))*.7;}col+=st*uOv;}
gl_FragColor=vec4(col,1.-smoothstep(.8,1.,length(vL)));}`},xc={uniforms:{tDiffuse:{value:null},uSun:{value:new Be},uAmt:{value:0},uCol:{value:new Te("#ffc477")},uA:{value:1.7},uT:{value:2},uThr:{value:1.5}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 uSun;uniform float uAmt,uA,uT,uThr;uniform vec3 uCol;varying vec2 vUv;
void main(){vec4 o=texture2D(tDiffuse,vUv);vec2 d=(uSun-vUv),st=d/36.*.97,p=vUv;float s=0.,w=1.;
for(int i=0;i<36;i++){p+=st;vec3 c=texture2D(tDiffuse,p).rgb;s+=max(dot(c,vec3(.33))-uThr,0.)*w;w*=.968;}
vec2 dd=d*vec2(uA,1.);float ang=atan(dd.y,dd.x);
o.rgb+=smoothstep(.015,.3,dot(o.rgb,vec3(.33)))*uCol*s*uAmt*.07*(.65+.35*sin(ang*38.+uT*.25)*sin(ang*11.+1.-uT*.15))*exp(-length(dd)*1.2);gl_FragColor=o;}`},Zf={uniforms:{tDiffuse:{value:null},uT:{value:2},uA:{value:1.7},uD:{value:0},uV:{value:.5},uN:{value:0},uLP:{value:[new N,new N,new N,new N]}},vertexShader:xc.vertexShader,fragmentShader:`uniform sampler2D tDiffuse;uniform float uT,uA,uD,uV,uN;uniform vec3 uLP[4];varying vec2 vUv;
float h(vec2 g){return fract(sin(dot(g,vec2(12.9898,78.233)))*43758.5453);}
void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;
if(uN>0.){vec2 q0=vUv-.5,o=q0*.005*(.5+length(q0)*2.);c=vec3(texture2D(tDiffuse,vUv+o).r,c.g,texture2D(tDiffuse,vUv-o).b);vec3 bl=vec3(0);
for(int i=0;i<8;i++){float a=float(i)*.785+.3;vec2 d=vec2(cos(a),sin(a)*uA);vec3 s1=texture2D(tDiffuse,vUv+d*.007).rgb,s2=texture2D(tDiffuse,vUv+d*.02).rgb;
bl+=s1*max(dot(s1,vec3(.33))-.5,0.)*vec3(1.,.72,.45)+s2*max(dot(s2,vec3(.33))-.5,0.)*vec3(.45,.7,1.1);}
c+=bl*.07*uN;vec3 fl=vec3(0);
for(int i=0;i<4;i++){vec3 L=uLP[i];if(L.z>0.){vec2 d=(vUv-L.xy)*vec2(uA,1.);fl+=vec3(.45,.68,1.)*exp(-abs(d.y)*70.)*exp(-abs(d.x)*2.2)*L.z*.1;
for(int k=0;k<3;k++){float kk=.5+float(k)*.55;vec2 gp=.5+(.5-L.xy)*kk,e=(vUv-gp)*vec2(uA,1.);fl+=mix(vec3(1.,.6,.3),vec3(.4,.6,1.),float(k)*.5)*exp(-dot(e,e)/(.0012+float(k)*.001))*L.z*.05;}}}
c+=fl*uN;float ll=0.;for(int i=0;i<8;i++){float a=float(i)*.785;ll+=dot(texture2D(tDiffuse,vUv+vec2(cos(a),sin(a)*uA)*.05).rgb,vec3(.3,.59,.11));}ll/=8.;c*=max(1./(1.+max(ll-.42,0.)*1.1),.62);}
float l=dot(c,vec3(.3,.59,.11));
c=mix(c*mix(vec3(.84,.95,1.12),vec3(.9,.94,1.1),uD),c*mix(vec3(1.1,1.,.86),vec3(1.06,1.,.9),uD),smoothstep(.12,.7,l));
vec2 q=(vUv-.5)*vec2(uA,1.);c*=1.-uV*pow(length(q)*.92,2.4);c*=1./(1.+max(dot(c,vec3(.33))-.82,0.)*1.1);
c+=(h(vUv*vec2(1920.,1080.)+floor(uT*24.))-.5)*.045*(1.-l*.6);gl_FragColor=vec4(c,1.);}`},Kv=`attribute float aS,aK,aZ;attribute vec3 aC;uniform float uT,uK,uD;uniform vec3 uSun;varying vec4 vC;
void main(){vec3 q=position;float a=aS*40.,al=1.;
if(aK>6.5){float h=fract(uT*.02+aS*9.);q.y+=h*16.;q.xz+=vec2(sin(uT*.13+a),cos(uT*.11+a*1.3))*1.2;al=sin(h*3.1416)*(.55+.45*sin(uT*2.+a*5.))*.9;}
else if(aK>5.5){q+=vec3(sin(uT*.21+a)*2.2+sin(uT*.5+a*2.)*.6,sin(uT*.17+a*1.3)*.8,cos(uT*.19+a*.7)*2.2);al=pow(.5+.5*sin(uT*1.1+a*7.),3.)*1.8;}
else if(aK>4.5){al=pow(max(sin(uT*2.3+a*3.),0.),12.)*2.5;}
else if(aK>3.5){float h=fract(uT*.11+aS*7.);q+=vec3(h*20.,sin(h*9.+a)*.25+h*.7,sin(a+h*3.)*1.2);al=sin(h*3.1416)*.7;}
else if(aK>2.5){q+=vec3(sin(uT*.2+a),sin(uT*.17+a*1.3)*.6,cos(uT*.23+a*.7))*1.6;al=.5+.5*sin(uT*1.3+a);}
else if(aK>1.5){q+=vec3(sin(uT*.2+a),sin(uT*.17+a*1.3)*.6,cos(uT*.23+a*.7))*.5;al=.5+.5*sin(uT*1.5+a);}
else{float h=fract(uT*.5+aS);q+=vec3(sin(a)*h*.6+sin(uT*3.+a)*.1,.1+h*.9,cos(a*1.3)*h*.6);al=(1.-h)*(.6+.4*sin(uT*20.+a));}
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;
float g=pow(max(dot(normalize(q-cameraPosition),uSun),0.),5.);if(aK>2.5&&aK<3.5)al*=mix(1.,.3+3.2*g,uD);
vC=vec4(aC,al);gl_PointSize=max(aZ*uK/-mv.z,1.6);}`,$v="varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vC.rgb,vC.a*a);}",jv=`uniform float uT,uS,uK;uniform vec3 uC;varying vec2 vUv;
void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float y=p.y,t=uT*2.+uS*7.;
float sw=sin(t*1.7+y*4.)*.07*y*y+sin(t*3.3+y*7.)*.035*y,x=p.x-sw;
float w=1.7*pow(max(y,0.),.42)*pow(max(1.-y,0.),1.15)*(1.+.1*sin(t*5.+y*9.))*(.92+.08*sin(t*2.3));
float d=abs(x)/max(w,.001),body=smoothstep(1.,.35,d)*step(0.,y)*smoothstep(1.,.9,y);
float hot=smoothstep(.75,0.,d)*(1.-y*.8),cd=length(vec2(x*1.25,(y-.2)*.9)),core=smoothstep(.2,.02,cd);
vec3 c=mix(uC*1.5,vec3(1.,.93,.72)*1.6,hot*.7);c=mix(c,vec3(.55,.8,1.)*2.2,core);
gl_FragColor=vec4(c*body*uK,1.);}`,Bh=class extends Gn{constructor(){super(),this.needsSwap=!1,this.rt=new hn(8,8,{type:qn}),this.buf=new Uint8Array(256),this.lum=.1,this.q=new di(new xt({uniforms:{tD:{value:null}},depthTest:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D tD;varying vec2 vUv;void main(){float s=0.;for(int i=0;i<4;i++)for(int j=0;j<4;j++){vec3 c=texture2D(tD,vUv+(vec2(float(i),float(j))-1.5)*.03).rgb;s+=min(dot(c,vec3(.3,.59,.11)),1.4);}gl_FragColor=vec4(clamp(log2(s/16.+1e-4)/12.+.75,0.,1.),0.,0.,1.);}"}))}render(e,t,n){this.q.material.uniforms.tD.value=n.texture,e.setRenderTarget(this.rt),this.q.render(e),e.readRenderTargetPixels(this.rt,0,0,8,8,this.buf);let s=0,r=0;for(let a=0;a<64;a++){let o=a%8-3.5,c=(a/8|0)-3.5,l=Math.exp(-(o*o+c*c)/14);s+=l*(this.buf[a*4]/255-.75)*12,r+=l}this.lum=Math.pow(2,s/r)}};async function Qv(i){let e=[],t=new ac({canvas:i,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});if(t.shadowMap.enabled=!0,t.shadowMap.type=sr,t.toneMapping=ar,t.setPixelRatio(1),!t.capabilities.isWebGL2)throw Error("no webgl2");let n=new Or,s=new Qn(58,16/9,.25,1500),r=new ui,a=new Or,o=Math.min(8,t.capabilities.getMaxAnisotropy());n.add(r);let c=(C,X,H)=>{let he=document.createElement("canvas");he.width=he.height=X,he.getContext("2d").putImageData(new ImageData(C,X),0,0);let fe=new Fs(he);return fe.wrapS=fe.wrapT=Ci,fe.anisotropy=o,H&&(fe.colorSpace=jn),fe},l={},u=(C,X,H,he,fe)=>{if(!l[C]){l[C]=Pv(512,X(),H,c);for(let Ye of Object.values(l[C]))Ye.repeat.set(1/he,1/fe)}return l[C]},p=()=>u("brick",Iv,5,2.4,2),f=()=>u("flag",Dv,4,3,3),h=()=>u("dust",Lv,3,4,4),g=()=>u("stone",Uv,3,1.2,1.2),x=()=>u("water",Fv,1.2,2,2),m={uRim:{value:0},uRimC:{value:new Te("#ffd49a")}},d={value:2},S={value:0},A={value:0},b={value:0},E={value:0},w=`float gust(vec2 p){return pow(.5+.5*sin(dot(p,vec2(.13,.07))-uCT*1.15+sin(dot(p,vec2(-.05,.1))+uCT*.3)*1.4),2.);}
`,v=`float cn2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5),b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5),c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5),d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5);return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
`,M=(C,X={})=>(C.onBeforeCompile=H=>{H.uniforms.uRim=m.uRim,H.uniforms.uRimC=m.uRimC,H.uniforms.uCT=d,H.uniforms.uGR=X.gold?S:{value:0},H.uniforms.uCS=A,H.uniforms.uWG=b,H.uniforms.uHZ=E,H.uniforms.uWV={value:X.wave?1:0},H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
uniform float uCT,uWG;varying vec3 vWP;varying float vGu;
`+w).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vGu=0.;`).replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_INSTANCING
vWP=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
#else
vWP=(modelMatrix*vec4(transformed,1.)).xyz;
#endif`),X.cloth&&(H.vertexShader=H.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float cw=clamp((1.5-position.y)/1.5,0.,1.)*`+X.cloth+";transformed.x+=sin(uCT*1.7+position.y*4.+position.z*3.)*.05*cw+sin(uCT*.7)*.02*cw;transformed.z+=cos(uCT*1.3+position.y*3.+position.x*3.)*.04*cw+.03*cw*(.6+.4*sin(uCT*2.1));")),X.sway&&(H.vertexShader=H.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
float ph=instanceMatrix[3].x*.7+instanceMatrix[3].z*.5;vec3 wc=(modelMatrix*vec4(instanceMatrix[3].xyz,1.)).xyz;
#else
float ph=modelMatrix[3].x*.7+modelMatrix[3].z*.5;vec3 wc=modelMatrix[3].xyz;
#endif
float gs=gust(wc.xz)*uWG;float sw=max(position.y-(`+X.sway[1].toFixed(3)+"),0.)*"+X.sway[0].toFixed(4)+"*(1.+2.6*gs);transformed.x+=sin(uCT*1.3+ph)*sw+sin(uCT*.5+ph*2.)*sw*.5+gs*sw*1.6;transformed.z+=cos(uCT*1.1+ph*1.3)*sw*.6+gs*sw*.7;vGu=gs;")),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim,uGR,uCT,uCS,uWG,uHZ,uWV;uniform vec3 uRimC;varying vec3 vWP;varying float vGu;
`+w+v).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+(X.sheen?"totalEmissiveRadiance+=vec3(1.,.78,.42)*pow(max(sin(normal.y*7.+normal.x*3.-uCT*1.1),0.),7.)*.4*(.4+.6*pow(1.-saturate(dot(normal,normalize(vViewPosition))),1.5));":"")).replace("#include <fog_fragment>",`{vec2 cq=vWP.xz*.03+vec2(uCT*.045,uCT*.02);float cs=smoothstep(.42,.68,cn2(cq)*.65+cn2(cq*2.3+7.)*.35);gl_FragColor.rgb*=mix(vec3(1.),vec3(.62,.6,.82),cs*uCS);float gw=uWV*uWG*gust(vWP.xz);gl_FragColor.rgb*=1.+gw*.16+vGu*.2;gl_FragColor.rgb+=vec3(.5,.42,.16)*gw*.03;}
#ifdef USE_FOG
float ff=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);vec3 fc=mix(vec3(1.,.8,.48)*fogColor*1.15,vec3(.62,.5,.8)*(.55+.45*fogColor),smoothstep(25.,160.,vFogDepth));fc=mix(fc,vec3(.78,.68,.95)*(.62+.38*fogColor),uHZ*smoothstep(10.,110.,vFogDepth));gl_FragColor.rgb=mix(gl_FragColor.rgb,fc,ff*(1.+uHZ*.6));
#endif`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=vec3(1.,.72,.34)*uGR*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),3.)*.7;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=uRimC*uRim*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),2.2)*1.4;`)},C.customProgramCacheKey=()=>"rim"+(X.cloth||"")+(X.gold?"g":"")+(X.sway?"w"+X.sway:"")+(X.sheen?"s":"")+(X.wave?"v":"")+"12",C),D={},R=[],U=[],O=[],$=[],I=!1,J=[],te=[],j=[],de=[],z=[],W=[],K=null,Ee=null,We=[],ee=[],me=!1,Re=!1,Pe=[],be=null,Ne=(C,X=1)=>new Te(C).multiplyScalar(X),ut=C=>D["b"+C]||(D["b"+C]=M(new _n({color:Ne(C,1.7),...p(),roughness:1,metalness:0,normalScale:new Be(1.3,1.3)}))),Ze=C=>D["f"+C]||(D["f"+C]=(()=>{let X=M(new _n({color:Ne(C,1.35),...f(),roughness:1,metalness:0,emissive:Ne(C,.5),emissiveIntensity:0}));return R.push(X),X})()),Et=C=>D["s"+C]||(D["s"+C]=M(new _n({color:Ne(C,1.4),...g(),roughness:1,metalness:0}))),Ut=(C,X)=>D["g"+C+X]||(D["g"+C+X]=(()=>{let H=I&&X==1,he=M(new _n({color:Ne(C,.4),emissive:Ne(C),emissiveIntensity:X==1?H?.9:3.2:2.4,roughness:.5,...H?{transparent:!0,opacity:.4,depthWrite:!1}:{}}));return he.userData.b=H?.9:3.2,X==1&&U.push(he),he})()),ot=C=>D["gl"+C]||(D["gl"+C]=new nr({color:Ne(C,.7),emissive:Ne(C),emissiveIntensity:.75,roughness:.04,metalness:0,transparent:!0,opacity:.55,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,side:bn,depthWrite:!1})),qt=C=>D["lq"+C]||(D["lq"+C]=(()=>{let X=x(),H=new nr({color:Ne(C,.35),emissive:Ne(C),emissiveIntensity:.55,roughness:.05,metalness:0,transparent:!0,opacity:.93,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,normalMap:X.normalMap,normalScale:new Be(.35,.35)});return O.push(X.normalMap),H})()),bt={value:2},Rt=(C,X)=>new xt({uniforms:{uT:bt,uC:{value:new Te(C)},uX:{value:X}},fog:!1,transparent:!1,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform float uT,uX;uniform vec3 uC;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}void main(){float pu=.72+.28*sin(vW.z*.13-uT*1.5)+.1*sin(vW.z*.9-uT*2.7);float e=1.-.35*smoothstep(.2,1.2,abs(vW.x-uX));float q=floor(vW.z*.8-uT*.9),f=pow(max(sin(vW.z*.8-uT*3.6+sin(vW.x*4.+q)),0.),12.)*smoothstep(.3,.9,.5+.5*sin(vW.x*3.1+q*5.+h(vec2(q,1.))*6.));vec3 c=vec3(1.,.78,.42)*uC*pu*e*2.2+vec3(1.,.92,.6)*f*1.6;gl_FragColor=vec4(c,1.);}"}),it=(C,X)=>new xt({uniforms:{uC:{value:new Te(C)},uK:{value:X}},transparent:!0,blending:Cn,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3,vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform vec3 uC;uniform float uK;varying vec2 vUv;varying vec3 vW;void main(){float r=length(vUv-.5)*2.,g=exp(-r*r*4.2)*(1.-smoothstep(.6,1.,r));vec3 c=uC*mix(.7,1.25,g);float nr=smoothstep(1.5,9.,distance(vW,cameraPosition));gl_FragColor=vec4(c*g*uK*(.35+.65*nr),1.);}"}),un=(C,X,H,he)=>new xt({uniforms:{uC:{value:C},uP:{value:new N(...X)},uS:{value:new N(he?H[0]:H[2],H[1],he?H[2]:H[0])},uX:{value:he?1:0}},fog:!1,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform vec3 uC,uP,uS;uniform float uX;varying vec3 vW;void main(){bool zt=uX>.5;vec3 l=vW-uP;float nn=zt?l.z:l.x,a=zt?l.x:l.z;if(abs(nn)<uS.z*.5+.02)discard;vec3 V=normalize(vW-cameraPosition);float va=zt?V.x:V.z,vn=zt?V.z:V.x;float u=a/uS.x+.5,v=l.y/uS.y;float off=va/max(abs(vn),.25)*.45,u2=(a+off)/uS.x+.5;float ew=min(min(u,1.-u)*uS.x,(1.-v)*uS.y);float j=smoothstep(0.,.24,ew);float gl=exp(-pow((u2-.5)*2.2,2.))*(.3+.9*pow(1.-clamp(v,0.,1.),1.3));vec3 c=vec3(.012,.01,.02)+uC*gl*1.15;float ph=fract(v*8.+(u2-.5)*1.8),st=smoothstep(0.,.18,ph)*smoothstep(.6,.4,ph);c*=mix(1.,.4+1.1*st,.65*smoothstep(0.,.25,v)*(1.-v*.35));c*=.22+.78*j;c+=uC*.35*exp(-ew*9.)*(1.-j);gl_FragColor=vec4(c,1.);}"}),Qt=(C,X)=>new xt({uniforms:{uC:{value:C},uK:{value:X},uT:bt},transparent:!0,blending:Cn,depthWrite:!1,side:bn,fog:!1,vertexShader:"varying vec3 vN,vP;varying vec2 vU;void main(){vU=uv;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uC;uniform float uK,uT;varying vec3 vN,vP;varying vec2 vU;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.5);float s=.85+.15*sin(vU.x*50.+uT*.3)*sin(vU.x*13.-uT*.2);gl_FragColor=vec4(uC*e*s*pow(vU.y,1.3)*uK,1.);}"}),fn=(()=>{let C=document.createElement("canvas");C.width=C.height=64;let X=C.getContext("2d"),H=X.createRadialGradient(32,32,0,32,32,32);return H.addColorStop(0,"#fff"),H.addColorStop(.55,"#fff"),H.addColorStop(1,"#000"),X.fillStyle=H,X.fillRect(0,0,64,64),new Fs(C)})(),Yt=(()=>{let C=document.createElement("canvas");C.width=C.height=64;let X=C.getContext("2d"),H=X.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.3,"rgba(255,255,255,.45)"),H.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=H,X.fillRect(0,0,64,64);let he=new Fs(C);return he.colorSpace=jn,he})(),gn=(()=>{let C=document.createElement("canvas");C.width=32,C.height=64;let X=C.getContext("2d");for(let H=0;H<64;H++){let he=Math.pow(1-H/63,1.6),fe=X.createLinearGradient(0,0,32,0);fe.addColorStop(0,"#000"),fe.addColorStop(.5,`rgb(${he*255},${he*255},${he*255})`),fe.addColorStop(1,"#000"),X.fillStyle=fe,X.fillRect(0,H,32,1)}return new Fs(C)})(),B=C=>{let X=C.attributes.position,H=C.attributes.normal,he=C.attributes.uv;for(let fe=0;fe<X.count;fe++){let Ye=X.getX(fe),qe=X.getY(fe),Le=X.getZ(fe),ce=Math.abs(H.getX(fe)),ne=Math.abs(H.getY(fe)),He=Math.abs(H.getZ(fe));ne>=ce&&ne>=He?he.setXY(fe,Ye,Le):ce>=He?he.setXY(fe,Le,qe):he.setXY(fe,Ye,qe)}return C},sn=([C,X,H],[he,fe,Ye])=>{he/=2,Ye/=2;let qe=[C-he,X,H-Ye],Le=[C+he,X,H-Ye],ce=[C+he,X,H+Ye],ne=[C-he,X,H+Ye],He=[C-he,X+fe,H+Ye],ze=[C+he,X+fe,H+Ye],st=[qe,ce,Le,qe,ne,ce,ne,He,ze,ne,ze,ce,qe,He,ne,Le,ze,He,qe,Le,He,Le,ce,ze,qe,ne,He],Gt=[qe,ce,Le,qe,ne,ce,ne,ce,ze,ne,ze,He,qe,Le,ze,qe,ze,He,qe,He,ne,Le,ce,ze],Nt=new Xt;return Nt.setAttribute("position",new Xe(Gt.flat(),3)),Nt.setAttribute("uv",new Xe(new Float32Array(Gt.length*2),2)),Nt.computeVertexNormals(),B(Nt)},vt=(C,X,H,he)=>{let fe=he?[0,0,0]:X,Ye;if(C=="box")Ye=new Os(H[0],H[1],H[2]).translate(fe[0],fe[1]+H[1]/2,fe[2]);else if(C=="cone")Ye=new Bs(.5,1,20,1).scale(H[0],H[1],H[2]).translate(fe[0],fe[1]+H[1]/2,fe[2]);else if(C=="ball")Ye=new Ri(.5,24,16).scale(H[0],H[1],H[2]).translate(fe[0],fe[1]+H[1]/2,fe[2]);else{if(C=="ramp")return sn(fe,H);Ye=new $i(.5,40).rotateX(-jt/2).scale(H[0],1,H[2]).translate(fe[0],fe[1]+.02,fe[2])}return C=="disc"?Ye:B(Ye)},wt=(()=>{let C=rs(77,64);return(X,H)=>C((X%64+64)%64/64,(H%64+64)%64/64)})(),Ie=(C,X)=>{let H=C+(wt(C*.03,X*.03)-.5)*30,he=X+(wt(C*.03+9,X*.03)-.5)*30,fe=wt((H*.55+he*.84)*.05,(he*.55-H*.84)*.14),Ye=wt(C*.11+3,X*.11),qe=wt(C*.4,X*.4),Le=Math.pow(1-Math.abs(2*fe-1),1.7)-.35;return hr(fe-.5,Le*.9,.6)*1.5+(Ye-.5)*.45+(qe-.5)*.12},Zt=(C,X,H)=>{let he=1e9;for(let[fe,Ye,qe,Le]of H){let ce=Math.hypot(Math.max(Math.abs(C-fe)-qe,0),Math.max(Math.abs(X-Ye)-Le,0));ce<he&&(he=ce)}return Ie(C,X)*(1+.8*Si(10,50,he))*Si(2.5,9,he)},je=(C,X,H,he)=>{let qe=C[0]-60,Le=X[0]-60,ce=Math.ceil((C[1]+60-qe)/1.5),ne=Math.ceil((X[1]+60-Le)/1.5),He=[],ze=[],st=[];for(let Pn=0;Pn<=ne;Pn++)for(let pn=0;pn<=ce;pn++){let on=qe+pn*1.5,Dn=Le+Pn*1.5,Tn=Zt(on,Dn,H)*Si(0,30,Math.min(pn,ce-pn,Pn,ne-Pn)*1.5);st.push(Tn),He.push(on,Tn,Dn);let ni=wt(on*.07,Dn*.07),Ln=.86+.28*ni+.35*Math.max(Tn,0)/3;ze.push(he.r*Ln,he.g*Ln,he.b*Ln*(1.05-.1*ni))}let Gt=[];for(let Pn=0;Pn<ne;Pn++)for(let pn=0;pn<ce;pn++){let on=Pn*(ce+1)+pn,Dn=on+1,Tn=on+ce+1,ni=Tn+1;Gt.push(on,Tn,Dn,Dn,Tn,ni)}let Nt=new Xt;return Nt.setAttribute("position",new Xe(He,3)),Nt.setAttribute("color",new Xe(ze,3)),Nt.setAttribute("uv",new Xe(He.filter((Pn,pn)=>pn%3!=1),2)),Nt.setIndex(Gt),Nt.computeVertexNormals(),Nt},rt=C=>{let X=C.attributes.position,H=C.attributes.uv;for(let he=0;he<X.count;he++)H.setXY(he,X.getX(he),X.getZ(he));return C},T=()=>u("grass",Nv,7,5,5),_={value:400},q=C=>{let X=[],H=[],he=[],fe=[],Ye=0;for(let Le of C)X.push(...Le.attributes.position.array),H.push(...Le.attributes.normal.array),he.push(...Le.attributes.uv.array),fe.push(...Le.index.array.map(ce=>ce+Ye)),Ye+=Le.attributes.position.count;let qe=new Xt;return qe.setAttribute("position",new Xe(X,3)),qe.setAttribute("normal",new Xe(H,3)),qe.setAttribute("uv",new Xe(he,2)),qe.setIndex(fe),qe},xe=()=>q([0,1,2].map(C=>new Bs(.045,.5,3,1).translate(0,.25,0).rotateZ((C-1)*.32).rotateY(C*2.1))),oe=(C,X,H)=>(C.userData={id:X,fact:H},r.add(C),Ae.push(C),C),_e=(C,X,H,he,fe)=>{let Ye=he.length/3;C.forEach((qe,Le)=>{let ce=hr(X,H,Le/(C.length-1));for(let ne=0;ne<4;ne++){let He=ne/4*jt*2;he.push(qe[0]+Math.cos(He)*ce,qe[1],qe[2]+Math.sin(He)*ce)}});for(let qe=0;qe<C.length-1;qe++)for(let Le=0;Le<4;Le++){let ce=Ye+qe*4+Le,ne=Ye+qe*4+(Le+1)%4;fe.push(ce,ce+4,ne,ne,ce+4,ne+4)}},k=(C,X,H,he,fe,Ye)=>{let qe=he[0]/2,Le=he[2]/2,ce=H[1]+he[1],ne=Math.min(Math.max(qe*.7,5),16),He=14,ze=72,st=Xs(Math.round(H[0]*7+H[2]*13+5)),Gt=new Te(fe),Nt=new ui,Pn=[],pn=[],on=[],Dn=[],Tn=[new Te("#9a8696"),new Te("#76626a"),new Te("#4e4450")],ni=(yt,Mt)=>{let rn=yt/He,Ht=Mt/ze*jt*2,mn=Math.cos(Ht),On=Math.sin(Ht),mi=wt(mn*2.5+rn*4+7,On*2.5+rn*3),li=wt(mn*6+30,On*6+rn*9),ci=(yt==0?1:yt==1?.985:Math.pow(1-rn,.72)*.97)*(1+(mi-.5)*.45*rn+(li-.5)*.1*rn),Bn=yt==0?0:-(.35+ne*Math.pow(rn,1.15))+(li-.5)*ne*.06*rn;return[mn*qe*ci,Bn,On*Le*ci,rn,mi]};for(let yt=0;yt<=He;yt++)for(let Mt=0;Mt<ze;Mt++){let[rn,Ht,mn,On,mi]=ni(yt,Mt),li=.88+.16*Math.sin(Ht*2.3+mi*5),ci=Tn[0].clone().lerp(Tn[1],Math.min(1,On*1.6)).lerp(Tn[2],Math.max(0,On-.55)*1.8).multiplyScalar(li).lerp(Gt.clone().multiplyScalar(.8),1-Si(.02,.11,On));Pn.push(rn,Ht,mn),pn.push(ci.r,ci.g,ci.b),on.push(rn/5+Ht/6,mn/5+Ht/4)}for(let yt=0;yt<He;yt++)for(let Mt=0;Mt<ze;Mt++){let rn=yt*ze+Mt,Ht=yt*ze+(Mt+1)%ze,mn=rn+ze,On=Ht+ze;Dn.push(rn,Ht,mn,Ht,On,mn)}let Ln=new Xt;Ln.setAttribute("position",new Xe(Pn,3)),Ln.setAttribute("color",new Xe(pn,3)),Ln.setAttribute("uv",new Xe(on,2)),Ln.setIndex(Dn),Ln.computeVertexNormals();let Hi=new ct(Ln,M(new _n({vertexColors:!0,...g(),roughness:1,normalScale:new Be(1.4,1.4),side:bn})));Hi.castShadow=!0,Hi.receiveShadow=!0,Nt.add(Hi);let ue=new $i(1,72).rotateX(-jt/2).scale(qe,1,Le),ft=ue.attributes.position,ln=ue.attributes.uv;for(let yt=0;yt<ft.count;yt++)ln.setXY(yt,ft.getX(yt)/6,ft.getZ(yt)/6);let Vt=new ct(ue,M(new _n({color:Ne(fe,1.25),...T(),roughness:.9,normalScale:new Be(1.2,1.2)}),{wave:!0}));Vt.receiveShadow=!0,Nt.add(Vt);let Mn=[],Yn=[];for(let yt=0;yt<70;yt++){let Mt=2+Math.floor(st()*8),rn=Math.floor(st()*ze),Ht=ni(Mt,rn),mn=(1.2+st()*3.6)*(ne/14),On=Ht[0]/qe*(.3+st()),mi=Ht[2]/Le*(.3+st()),li=st()*6,ci=[[Ht[0],Ht[1],Ht[2]]];for(let Bn=1;Bn<=4;Bn++)ci.push([Ht[0]+On*Bn*.18+Math.sin(li+Bn)*.12,Ht[1]-mn*Bn/4,Ht[2]+mi*Bn*.18+Math.cos(li+Bn*1.3)*.12]);_e(ci,.1,.02,Mn,Yn)}let An=new Xt;An.setAttribute("position",new Xe(Mn,3)),An.setIndex(Yn),An.computeVertexNormals(),Nt.add(new ct(An,M(new _n({color:"#8a6a4a",roughness:1,side:bn}))));let tn=Math.min(900,Math.round(qe*qe*.9)),In=new Ns(xe(),M(new _n({color:Ne(fe,1.15),roughness:.9,side:bn}),{sway:[.14,0]}),tn),os=new At,Nn=new Te,oi=0;for(let yt=0;yt<tn*3&&oi<tn;yt++){let Mt=st()*jt*2,rn=Math.sqrt(st())*.97,Ht=Math.cos(Mt)*qe*rn,mn=Math.sin(Mt)*Le*rn,On=H[0]+Ht,mi=H[2]+mn,li=.6+st()*.9;st()<.02||Ye.some(([ci,Bn])=>Math.abs(On-ci[0])<Bn[0]/2+.2&&Math.abs(mi-ci[2])<Bn[2]/2+.2)||(os.makeRotationY(st()*6).setPosition(Ht,0,mn),os.scale(new N(li,li*(.7+st()*.8),li)),In.setMatrixAt(oi,os),In.setColorAt(oi,Nn.setRGB(.75+st()*.4,.8+st()*.35,.6+st()*.3)),oi++)}return In.count=oi,In.receiveShadow=!0,Nt.add(In),Nt.position.set(H[0],ce,H[2]),Nt.userData.isl=1,oe(Nt,C,X),Nt.userData.isl=1,Nt.traverse(yt=>{yt!==Nt&&(yt.userData={id:C,fact:X}),Ae.push(yt)}),Nt},F=(()=>{let C=new Ri(.5,18,12),X=C.attributes.position;for(let H=0;H<X.count;H++){let he=1+(ea(Math.round(X.getX(H)*40),Math.round(X.getY(H)*40)+7*Math.round(X.getZ(H)*40),4)-.5)*.2;X.setXYZ(H,X.getX(H)*he,X.getY(H)*he,X.getZ(H)*he)}return C.computeVertexNormals(),C})(),V=(C,X,H,he,fe)=>{let Ye=new ui,qe=he[1],Le=M(new _n({color:Ne(fe,1.55),roughness:.85}),{sway:[.05,-.5]}),ce=Math.min(he[0],he[2])*.06,ne=new ct(F,Le);ne.scale.set(he[0],qe*.72,he[2]),ne.position.set(H[0],H[1]+qe*.64,H[2]),ne.castShadow=!0,ne.receiveShadow=!0;let He=new ct(new ji(.7,1,1,7).translate(0,.5,0),M(new _n({color:"#6a4a34",roughness:1})));He.scale.set(ce*2,qe*.5,ce*2),He.position.set(H[0],H[1],H[2]),He.castShadow=!0,Ye.add(ne,He),r.add(Ye);for(let ze of[ne,He])ze.userData={id:C,fact:X},Ae.push(ze)},Se=[],P=(C,X,H,he,fe)=>{let Ye=new ui,qe=[[.5,0],[.48,.06],[.42,.16],[.34,.32],[.27,.5],[.22,.66],[.17,.82],[.11,.93],[.05,.98],[.001,1]].map(([He,ze])=>new Be(He,ze)),Le=M(new nr({color:Ne(fe,1.15),metalness:.85,roughness:.3,clearcoat:.6,clearcoatRoughness:.2,sheen:1,sheenColor:new Te("#ffd890"),sheenRoughness:.4,envMapIntensity:1.8,emissive:Ne(fe,.5),emissiveIntensity:.12,side:bn}),{sheen:!0}),ce=new ct(new zr(qe,28),Le);ce.scale.set(he[0],he[1],he[2]),ce.position.y=-he[1],ce.castShadow=!0;let ne=new ct(new ji(.06*he[0],.08*he[0],.14*he[1],8).translate(0,.07*he[1],0),Le);Ye.add(ce,ne),Ye.position.set(H[0],H[1]+he[1],H[2]),oe(Ye,C,X),Ye.traverse(He=>{He!==Ye&&(He.userData={id:C,fact:X},Ae.push(He))}),Se.push([Ye,Le,H[0]])},ae=(C,X,H,he)=>{let fe=he[1],Ye=Math.max(he[0],he[2])*.6,qe=M(new _n({color:"#c8a870",roughness:.95}),{sway:[.16/Math.max(fe,.3),0]}),Le=new ct(new ji(Ye,Ye*.7,fe,6,8).translate(0,fe/2,0),qe);Le.rotation.x=jt,Le.position.set(H[0],H[1]+fe,H[2]),oe(Le,C,X)},se=(C,X,H,he,fe,Ye,qe)=>{let Le=[H[0],H[1],H[2]-he[2]/2],ce=[H[0],H[1]+he[1],H[2]+he[2]/2],ne=Math.hypot(ce[1]-Le[1],ce[2]-Le[2]),He=Math.max(he[0],qe?1.6:1)*.95,ze=(ce[2]-Le[2])/ne,st=-(ce[1]-Le[1])/ne,Gt=.04,Nt=new Xt;Nt.setAttribute("position",new Xe([Le[0]-He,Le[1]+ze*Gt,Le[2]+st*Gt,Le[0]+He,Le[1]+ze*Gt,Le[2]+st*Gt,ce[0]+He,ce[1]+ze*Gt,ce[2]+st*Gt,ce[0]-He,ce[1]+ze*Gt,ce[2]+st*Gt],3)),Nt.setAttribute("uv",new Xe([-1,0,1,0,1,1,-1,1],2)),Nt.setIndex([0,1,2,0,2,3]);let Pn=new xt({uniforms:{uT:bt,uL:{value:ne},uC:{value:new Te(fe)},uN:{value:new N(0,ze,st)}},transparent:!0,depthWrite:!1,fog:!1,side:bn,vertexShader:qf,fragmentShader:kv}),pn=oe(new ct(Nt,Pn),C,X);pn.renderOrder=2,Lt.push(pn);for(let on=0;on<26;on++)Ye.push([Le,ce,(on+.5)/26+C.length*.013]);if(qe){let on=new Xt;on.setAttribute("position",new Xe([Le[0]-He*3.4,Le[1]+ze*.1,Le[2]+st*.1,Le[0]+He*3.4,Le[1]+ze*.1,Le[2]+st*.1,ce[0]+He*3.4,ce[1]+ze*.1,ce[2]+st*.1,ce[0]-He*3.4,ce[1]+ze*.1,ce[2]+st*.1],3)),on.setAttribute("uv",new Xe([-1,0,1,0,1,1,-1,1],2)),on.setIndex([0,1,2,0,2,3]);let Dn=new ct(on,new xt({uniforms:{uT:bt,uL:{value:ne},uC:{value:new Te(fe)},uN:{value:new N(0,ze,st)}},transparent:!0,depthWrite:!1,blending:Cn,fog:!1,side:bn,vertexShader:qf,fragmentShader:"uniform float uT,uL;uniform vec3 uC,uN;varying vec2 vU;varying vec3 vW;void main(){float a=abs(vU.x),h=exp(-a*a*5.5),f=.78+.22*sin(vU.y*uL*.55-uT*1.3)+.08*sin(vU.y*uL*1.9-uT*2.4);float e=1.-smoothstep(.75,1.,a);gl_FragColor=vec4(vec3(1.,.8,.46)*uC*h*f*e*.4*smoothstep(3.,12.,distance(vW,cameraPosition))*smoothstep(.1,.5,abs(dot(normalize(vW-cameraPosition),uN))),1.);}"}));Dn.renderOrder=1,Dn.frustumCulled=!1,r.add(Dn),Lt.push(Dn);for(let Tn=0;Tn<70;Tn++)qe.push([Le,ce,(Tn+.5)/70+C.length*.007])}},ge={uAlt:{value:0},uHor:{value:new Te},uZen:{value:new Te("#ad98e2")},uSun:{value:new N(...uo(Oh))},uMoon:{value:new N(...uo(Xf))},uD:{value:0},uT:{value:2}},we=new xt({uniforms:ge,vertexShader:Ov,fragmentShader:Bv,side:Zn,depthWrite:!1,depthTest:!1,fog:!1}),Ce=new ct(new Ri(1,48,24),we);Ce.renderOrder=-10,Ce.frustumCulled=!1,n.add(Ce);let $e=new ct(Ce.geometry,we);a.add($e);let ht=new $r(t),ye=null,tt=new Pa("#b9a5ee","#7a6070",1),nt=new Na("#ffc88a",4);nt.castShadow=!0,nt.shadow.mapSize.set(2048,2048),nt.shadow.bias=-4e-4,nt.shadow.normalBias=.06,nt.shadow.radius=3,nt.shadow.autoUpdate=!1,n.add(tt,nt,nt.target),n.fog=new Ma("#ffe6b0",.008);let Oe={w:0,h:0},en=new hn(4,4,{type:vn,samples:4}),Jt=new hc(t,en);Jt.addPass(new uc(n,s));let ti=new lo(n,s,4,4);ti.blendIntensity=1,ti.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.3,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),ti.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let ki=new pc(n,s,{focus:10,aperture:5e-4,maxblur:.008}),Di=new Ws(xc),ur=new Qr(new Be(4,4),.55,.7,1.05),Vi=new Ws(Zf),na=new Bh,pi={k:1},ia=new Ws({uniforms:{tDiffuse:{value:null}},vertexShader:xc.vertexShader,fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 o=texture2D(tDiffuse,vUv);float l=dot(o.rgb,vec3(.3,.59,.11)),lo=2.5,hi=5.;float m=l<=lo?l:lo+(hi-lo)*(1.-exp(-(l-lo)/(hi-lo)));o.rgb*=m/max(l,1e-4);gl_FragColor=o;}"});Jt.addPass(ti),Jt.addPass(ki),Jt.addPass(Di),Jt.addPass(na),Jt.addPass(ia),Jt.addPass(ur),Jt.addPass(new mc),Jt.addPass(Vi);let Lt=[];for(let C of[ti,ki]){let X=C.render.bind(C);C.render=(...H)=>{let he=Lt.map(fe=>fe.visible);Lt.forEach(fe=>fe.visible=!1);try{X(...H)}finally{Lt.forEach((fe,Ye)=>fe.visible=he[Ye])}}}let qs=null,Ys={uSz:{value:7}},Jn,as="follow",Gi={position:[0,3.4,6.5],target:[0,.8,-9]},yn={c:[0,0,0],r:20},As=0,En=0,Zs=[],sa=[],zh=[],Js,y,L,Q=!0,Y,Z={at:[0,0,0]},De=2,Je=new Fa,Ae=[],Ve=()=>{let C=new ui,X=M(new _n({color:"#8a6a40",roughness:.9,metalness:0}),{cloth:1.6}),H=M(new _n({color:"#c8a078",roughness:.7})),he=M(new _n({color:"#3a2a1c",roughness:.95}),{cloth:.5}),fe=[[.01,0],[.32,.02],[.34,.15],[.3,.55],[.24,.95],[.2,1.25],[.12,1.4],[.01,1.42]].map(([He,ze])=>new Be(He,ze)),Ye=new ct(new zr(fe,24),X),qe=new ct(new Ri(.15,20,14),H),Le=new ct(new Ri(.19,20,14,0,jt*2,0,jt*.62),he),ce=new ct(new Ri(.22,16,12).scale(1,1.2,.7),he);qe.position.set(0,1.55,.02),Le.position.set(0,1.58,-.03),Le.rotation.x=-.25,ce.position.set(0,.95,.27);let ne=new ct(new kr(.12,.24,20).rotateX(-jt/2),X);ne.position.y=1.36,ne.scale.set(1.2,1.2,1.2);for(let He of[Ye,qe,Le,ce,ne])He.castShadow=!0,He.receiveShadow=!0,C.add(He);return C},Qe=C=>{for(;C.children.length;)C.children.pop().geometry?.dispose?.()};function _t(C){Jn=C,Qe(r),Lt=[Lt[0]].filter(Boolean),Ae.length=0,sa=[],D={},R=[],U=[],O=[],$=[],Lt=[Ce],be=null,Se.length=0,We=[],ee=[],J.forEach(G=>G.dispose()),J=[],te=[],j=[],de=[],z=[],W=[],K=null,Ee=null;let X=new Te(Jn.sky||"#2a2a4a"),H=.2126*X.r+.7152*X.g+.0722*X.b,[he,fe,Ye]=(Jn.sky||"#2a2a4a").slice(1).match(/../g).map(G=>parseInt(G,16)/255),qe=.2126*he+.7152*fe+.0722*Ye;En=Si(.35,.6,qe),I=En<.5,ge.uHor.value.copy(X),ge.uD.value=En,n.fog.color.copy(X).multiplyScalar(hr(.3,1,En)),n.fog.color.lerp(new Te("#e8d4c0"),En*.12);let Le=new Te(Jn.ground||"#12121c").multiplyScalar(hr(1.5,1.8,En));Le.lerp(new Te("#a08a80"),En*.35);let ce=Object.entries(Jn.things),ne=Jn.avatar.at,He=[ne[0],ne[0]],ze=[ne[2],ne[2]],st=[[ne[0],ne[2],.5,.5]],Gt={},Nt=G=>G[0]+G[2]+G[3];ce.forEach(([,G])=>!G[5]&&(Gt[Nt(G)]=(Gt[Nt(G)]||0)+1));let Pn=G=>{let re=new Te(G);return re.g>re.r*1.05&&re.g>re.b*1.05},pn=[],on=[],Dn=[],Tn=[],ni=Pe=[],Ln=ce.map(G=>G[1]).filter(G=>G[0]=="ball"&&!G[5]&&G[2][0]>=12&&G[2][1]<=G[2][0]*.3&&Pn(G[3])).map(G=>({t:G,top:G[1][1]+G[2][1]})),Hi=G=>Ln.some(re=>((G[1][0]-re.t[1][0])/(re.t[2][0]/2))**2+((G[1][2]-re.t[1][2])/(re.t[2][2]/2))**2<1.05&&Math.abs(G[1][1]-re.top)<3),ue=En>.5&&(ne[1]>8||Ln.length>0);me=ue,ge.uAlt.value=ue?1:0,ge.uZen.value.set(ue?"#cdbfe6":"#ad98e2"),ge.uSun.value.set(...uo(ue?[.24,.2,-.95]:Oh)),A.value=ue?1:0,b.value=ue?1:0,E.value=ue?1:0;let ft=ne[1]+2,ln=ce.map(G=>G[1]).filter(G=>G[5]==2),Vt=G=>G&&[G[1][0],G[1][1]+G[2][1]/2,G[1][2]],Mn=G=>Math.hypot(G[1][0]-ne[0],G[1][2]-ne[2]),Yn=G=>ln.filter(G).sort((re,Me)=>Me[2][0]*Me[2][1]*Me[2][2]-re[2][0]*re[2][1]*re[2][2])[0],An=G=>new Te(G),tn=G=>{let re=An(G);return .2126*re.r+.7152*re.g+.0722*re.b},In=[],os=[],Nn=ce.map(G=>G[1]).filter(G=>G[5]==1).sort((G,re)=>Mn(G)-Mn(re)).slice(0,4).map(G=>({p:Vt(G),c:An(G[3]),i:26}));for(let[G,re,Me]of[[Yn(le=>le[0]=="ball"&&An(le[3]).b>An(le[3]).r),new Te(.5,.85,1.4),14],[Yn(le=>le[0]=="ball"&&An(le[3]).r-An(le[3]).b>.3),new Te(1.4,1,.5),18]])G&&Nn.length<4&&Nn.push({p:Vt(G),c:re,i:Me});Zs.forEach(G=>{n.remove(G.l),G.l.shadow.map?.dispose()}),Zs=[];for(let G of Nn){let re=new La(G.c,G.i,46,2);re.position.set(...G.p),re.castShadow=!0,re.shadow.mapSize.set(512,512),re.shadow.bias=-.003,re.shadow.normalBias=.04,re.shadow.radius=2,re.shadow.camera.near=.15,re.shadow.camera.far=46,re.shadow.autoUpdate=!1,n.add(re),Zs.push({l:re,b:G.i})}if(I&&(Ee=ce.filter(([,G])=>G[2][0]>8&&G[2][2]>8&&(G[0]=="disc"||G[0]=="box"&&G[2][1]<.15)&&(G[5]==2?tn(G[3])<.35:!G[5]&&tn(G[3])<.02)).sort((G,re)=>re[1][2][0]*re[1][2][2]-G[1][2][0]*G[1][2][2])[0]||null,Ee)){let[,G]=Ee;K={p:G[1],z:G[2],y:G[1][1]+.03},st.push([G[1][0],G[1][2],G[2][0]/2,G[2][2]/2])}let oi={},yt={pos:[],s:[],k:[],z:[],c:[]},Mt=Xs(99),rn=(G,re,Me,le,ie,at)=>{yt.pos.push(G,re,Me),yt.s.push(Mt()),yt.k.push(le),yt.z.push(ie),yt.c.push(at.r,at.g,at.b)},Ht=(G,re,Me,le,ie,at={})=>{let Fe=new ct(re,G);return Fe.castShadow=at.cast??!1,Fe.receiveShadow=at.rec??!0,Fe.userData={id:le,fact:ie},r.add(Fe),Ae.push(Fe),Fe};for(let[G,re]of ce){let[Me,le,ie,at,Fe,gt]=re;if(ue&&!gt&&Me=="ball"&&!Ln.some(Pt=>Pt.t===re)&&(le[1]<0||Math.max(...ie)>12)){Dn.push([G,le,ie,at]);continue}let et=Math.hypot(le[0]-ne[0],le[2]-ne[2]),Tt=ue&&et>45;if(ue&&et>75&&le[1]<8)continue;if(ue&&!gt&&Me=="ball"&&Math.max(...ie)<=1.2&&Hi(re)&&An(at).r>.8&&An(at).b>.4){Tn.push([G,Fe,le,ie,An(at)]);continue}let pe=Math.max(ie[0],ie[2])/2,ve=Math.max(...ie);!Tt&&(ve>=3||le[1]>=8||!ue)&&(ft=Math.max(ft,le[1]+ie[1]),He[0]=Math.min(He[0],le[0]-pe),He[1]=Math.max(He[1],le[0]+pe),ze[0]=Math.min(ze[0],le[2]-pe),ze[1]=Math.max(ze[1],le[2]+pe)),le[1]<1&&le[1]>=0&&Me!="disc"&&st.push([le[0],le[2],ie[0]/2,ie[2]/2]);let Ue=An(at),ke=Math.max(...ie);if(ue&&le[1]<1&&ie[0]>8&&ie[2]>8&&(Me=="disc"||Me=="box"&&ie[1]<.3))continue;if(!gt&&Me=="ball"){let Pt=Ln.find(It=>It.t===re);if(Pt){k(G,Fe,le,ie,at,ce.map(It=>It[1]).filter(It=>It[0]=="box"&&!It[5]&&Math.abs(It[1][1]-Pt.top)<1.2));continue}if(ke<=6&&Pn(at)&&Hi(re)){V(G,Fe,le,ie,at);continue}}if(/bell/.test(Fe||"")&&!gt){if(Me=="ball"&&ie[1]<=4){P(G,Fe,le,ie,at);continue}if(Me=="box"&&Math.max(ie[0],ie[2])<=.08&&ie[1]<=2){ae(G,Fe,le,ie);continue}}if(gt==2&&Me=="ramp"){se(G,Fe,le,ie,at,pn,ue&&on);continue}if(Ee&&re===Ee[1]){let Pt=new io(new $i(.5,72),{color:Ue,textureWidth:512,textureHeight:288,clipBias:.003,shader:Jv,multisample:0});Pt.rotation.x=-jt/2,Pt.scale.set(ie[0],ie[2],1),Pt.position.set(le[0],K.y,le[2]),Pt.renderOrder=-5,Pt.material.transparent=!0,Pt.material.uniforms.uHor.value=ge.uHor.value,Pt.userData={id:G,fact:Fe},r.add(Pt),Ae.push(Pt),Lt.push(Pt),J.push(Pt);continue}if(gt){let Pt,It;if(I&&gt==2&&Me=="ball"&&ie[1]>=ie[0]*1.3&&ke<.6&&Ue.r>.6&&Ue.b<Ue.r*.4){te.push([G,Fe,le,ie,Ue]);continue}let ii=Me=="box"&&ie[1]<.15&&ie[0]>.4&&ie[2]>.4,bi=gt==2&&Me=="box"&&Math.min(...ie)<=.15&&!ii&&[...ie].sort((dt,Bt)=>dt-Bt)[1]>=.4,gi=bi&&ie[1]>=1.2&&Math.max(ie[0],ie[2])>=.6&&(tn(at)<.12||Ue.r>=Ue.b*1.05&&Ue.r>.5);if(gt==2&&Me=="ball"&&ke>=2&&le[1]+ie[1]/2>20&&Math.min(Ue.r,Ue.g,Ue.b)>.75&&In.push([le,ie,Ue]),ue&&gt==2&&Me=="ball"&&ke>=1&&ke<=4){let dt=new Ls(new _s({map:Yt,color:Ue.clone().multiplyScalar(1.25),blending:Cn,depthWrite:!1,fog:!1,transparent:!0,opacity:.8}));dt.position.set(le[0],le[1]+ie[1]/2,le[2]),dt.scale.set(ke*2.8,ke*2.8,1),dt.renderOrder=3,r.add(dt),Lt.push(dt),ni.push([Bt=>dt.material.opacity=Bt,.8,dt.position.clone(),ke]);continue}if(gt==2&&ke>4&&Me=="ball"){if(Math.abs(ie[0]-ie[1])<ie[0]*.2&&ie[2]<4){let Bt=new ct(new $i(ie[0]/2,64).translate(le[0],le[1]+ie[1]/2,le[2]),new fi({color:Ue.clone().multiplyScalar(ue?1.05:1.7),fog:!1,transparent:ue,opacity:.55}));r.add(Bt),Lt.push(Bt),ue&&ni.push([hi=>Bt.material.opacity=hi,.55,new N(le[0],le[1]+ie[1]/2,le[2]),ie[0]]);continue}let dt=new Ls(new _s({map:Yt,color:Ue,blending:Cn,depthWrite:!1,fog:!1,transparent:!0,opacity:ue?.3:.5}));dt.position.set(le[0],le[1]+ie[1]/2,le[2]),dt.scale.set(ie[0]*2.4,ie[1]*2.8,1),r.add(dt),Lt.push(dt),$.push([dt,dt.material.opacity,ie[0]*2.4]);continue}if(Fe=="sun_road")It=Ht(Rt(at,le[0]),vt(Me,le,ie),re,G,Fe,{rec:!1}),Lt.push(It);else if(Me=="disc"&&(ke>3||ue)){let dt=ke>15?.2:ke>6?.3:.45,Bt=it(at,dt);It=Ht(Bt,vt(Me,le,ie),re,G,Fe,{rec:!1}),Lt.push(It),ue&&ni.push([hi=>Bt.uniforms.uK.value=hi,dt*.85,new N(le[0],le[1],le[2]),ke])}else if(gi){let dt=ie[2]<=ie[0],Bt=tn(at)<.12?new Te(1,.6,.26):Ue.clone();It=Ht(un(Bt,le,ie,dt),vt("box",le,[ie[0]+(dt?0:.06),ie[1],ie[2]+(dt?.06:0)]),re,G,Fe,{rec:!1}),Lt.push(It),os.push([le,ie,dt,Bt])}else if(Me=="disc"||ii)Pt=qt(at),It=Ht(Pt,vt(Me,le,ie),re,G,Fe,{rec:!0}),Me=="disc"&&It.geometry.attributes.uv,Lt.push(It);else if(bi)It=Ht(ot(at),vt(Me,le,ie),re,G,Fe,{rec:!1}),Lt.push(It);else{let dt=ie;Me=="box"&&ie[1]<.15&&(dt=[ie[0]<ie[2]?ie[0]*.5:ie[0],ie[1]*.6,ie[2]<=ie[0]?ie[2]*.5:ie[2]]),It=Ht(Ut(at,gt),vt(Me,le,dt),re,G,Fe,{rec:!1}),gt==1&&le[1]>=1&&(It.userData.sway=ce.length+yt.s.length)}let Hn=[le[0],le[1]+ie[1]/2,le[2]];if(gt==1&&j.push([G,Fe,le,ie,Ue,Hn]),gt==1)for(let dt=0;dt<14;dt++)rn(Hn[0],Hn[1],Hn[2],1,.07,Ue.clone().multiplyScalar(3));else if(ke<2.5)for(let dt=0;dt<5;dt++)rn(Hn[0]+(Mt()-.5)*Math.min(ie[0],2),Hn[1]+(Mt()-.5)*Math.min(ie[1],2),Hn[2]+(Mt()-.5)*Math.min(ie[2],2),2,.06,Ue.clone().multiplyScalar(2.5));if(gt==2&&Me=="box"&&Math.min(ie[0],ie[2])<=.4&&Math.max(ie[0],ie[2])>=3&&le[1]>=3){let dt=ie[2]>ie[0],Bt=dt?ie[2]:ie[0],hi=(dt?ie[0]:ie[2])/2+.15,Wi=le[1]*.3,Ks=le[1],kh=[],Vh=[],Gh=(wi,fo,ra,$f)=>{kh.push(...wi,...fo,...ra,...wi,...ra,...$f),Vh.push(0,0,1,0,1,1,0,0,1,1,0,1)},Es=(wi,fo,ra)=>dt?[le[0]+wi,fo,le[2]+ra]:[le[0]+ra,fo,le[2]+wi];for(let wi=-Bt/2+1;wi<Bt/2;wi+=3.3)Gh(Es(-hi,Ks,wi),Es(hi,Ks,wi),Es(hi+Wi,.03,wi),Es(-hi-Wi,.03,wi));Gh(Es(0,Ks,-Bt/2),Es(0,Ks,Bt/2),Es(0,.03,Bt/2),Es(0,.03,-Bt/2));let _c=new Xt;_c.setAttribute("position",new Xe(kh,3)),_c.setAttribute("uv",new Xe(Vh,2));let yc=new ct(_c,new fi({map:gn,color:Ue.clone().multiplyScalar(.5),transparent:!0,blending:Cn,depthWrite:!1,side:bn,fog:!1}));yc.frustumCulled=!1,r.add(yc),Lt.push(yc)}continue}if(Me=="disc"){let Pt=new _n({color:Ne(at,1.3),alphaMap:fn,transparent:!0,opacity:.85,roughness:1,normalMap:h().normalMap,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,...h()});Pt.map=h().map;let It=Ht(M(Pt),vt(Me,le,ie),re,G,Fe);Lt.push(It);continue}if(Me=="box"&&ke>=5&&ie[1]>=5&&Math.min(ie[0],ie[2])<=3&&Ue.r+Ue.g+Ue.b<.12){Ht(new fi({color:Ue,fog:!1}),vt(Me,le,ie),re,G,Fe,{rec:!1});continue}let lt=Me=="box"&&ke>=2.9&&ie[1]>=.12,Kt=lt&&le[1]>=3&&ie[1]<=1.5&&ie[0]>5&&ie[2]>5,Ot=Me=="box"&&ie[1]<.12;if(!lt&&(Me=="box"||Me=="cone")&&Gt[Nt(re)]>=3){let Pt=Nt([Me,0,ie,at]),It=oi[Pt]||(oi[Pt]={g:vt(Me,[0,0,0],ie,!0),m:Et(at),o:[],ids:[]});It.o.push(le),It.ids.push(G);continue}let nn=lt?[ut(at),ut(at),le[1]+ie[1]<3.5?Ze(at):ut(at),ut(at),ut(at),ut(at)]:Ot?Ze(at):Et(at),Wt=Ht(nn,vt(Me,le,ie),re,G,Fe,{cast:!0});Kt&&sa.push(Wt),Me=="box"&&(lt||ie[1]>=3)&&We.push({me:Wt,m:nn,b:[le[0]-ie[0]/2,le[0]+ie[0]/2,le[1],le[1]+ie[1],le[2]-ie[2]/2,le[2]+ie[2]/2],c:at,g:0})}for(let G of Object.values(oi)){let re=new Ns(G.g,G.m,G.o.length),Me=new At;G.o.forEach((le,ie)=>re.setMatrixAt(ie,Me.makeTranslation(le[0],le[1],le[2]))),re.castShadow=!0,re.receiveShadow=!0,re.userData={ids:G.ids,fact:null},re.computeBoundingSphere(),r.add(re),Ae.push(re)}let mn=0;for(let[,[G,re,Me,,,le]]of ce)!le&&G=="box"&&(Me[1]>=.12||ue)&&Math.abs(ne[0]-re[0])<=Me[0]/2&&Math.abs(ne[2]-re[2])<=Me[2]/2&&re[1]+Me[1]<=ne[1]+.6&&(mn=Math.max(mn,re[1]+Me[1]));for(let G of Ln)ue&&((ne[0]-G.t[1][0])/(G.t[2][0]/2))**2+((ne[2]-G.t[1][2])/(G.t[2][2]/2))**2<1&&G.top<=ne[1]+.6&&(mn=Math.max(mn,G.top));let On=(G,re)=>K&&((G-K.p[0])/(K.z[0]/2))**2+((re-K.p[2])/(K.z[2]/2))**2<.9,mi=(G,re)=>On(G,re)?K.y:Zt(G,re,st);On(ne[0],ne[2])&&(mn=Math.max(mn,K.y)),qs=null;{for(let[G,re,Me]of In){let le=G[1]+re[1]/2,ie=mi(G[0],G[2]),at=le-ie,Fe=Me.clone().multiplyScalar(.8),gt=Qt(Fe,ue?.12:.28),et=new ct(new ji(Math.max(.5,re[0]*.3),4.4,at,40,1,!0).translate(0,-at/2,0),gt);et.position.set(G[0],le,G[2]),et.frustumCulled=!1,et.renderOrder=2,r.add(et),Lt.push(et);let Tt=new Ls(new _s({map:Yt,color:Fe,blending:Cn,depthWrite:!1,fog:!1,transparent:!0,opacity:ue?.22:.4}));if(Tt.position.set(G[0],le,G[2]),Tt.scale.set(re[0]*5,re[0]*5,1),Tt.renderOrder=3,r.add(Tt),Lt.push(Tt),ue){let pe=new N(G[0],le,G[2]);ni.push([ve=>gt.uniforms.uK.value=ve,.12,pe,10],[ve=>Tt.material.opacity=ve,.22,pe,10])}J[0]&&J[0].material.uniforms.uBc.value.set(G[0],G[2],0,1)}for(let[G,re,,Me]of os){let le=Math.max(re[0],re[2]),ie=new ct(new $i(.5,40).rotateX(-jt/2).scale(le*2.2,1,le*2.2),it(Me,.3));ie.position.set(G[0],mi(G[0],G[2])+.03,G[2]),ie.renderOrder=2,r.add(ie),Lt.push(ie)}if(J[0]){let G=J[0].material.uniforms,re=Jn.avatar.facing*jt/180,Me=Math.sin(re),le=-Math.cos(re);G.uRip.value=On(ne[0],ne[2])?1:0,G.uFt.value=Array.from({length:7},(ie,at)=>{let Fe=at%2?1:-1;return new Be(ne[0]-Me*at*.85-le*Fe*.2,ne[2]-le*at*.85+Me*Fe*.2)})}}if(y||(y=Ve(),n.add(y),L=new ct(new kr(1.1,1.6,40).rotateX(-jt/2),new fi({color:"#ffd890",transparent:!0,opacity:.8,blending:Cn,depthWrite:!1,fog:!1})),n.add(L),Lt.push(L)),y.position.set(ne[0],mn,ne[2]),y.rotation.y=-(Jn.avatar.facing*jt)/180,L.position.set(ne[0],mn+.06,ne[2]),Z={at:ne,fy:mn},I){let G=(Fe,gt=1)=>(Fe.renderOrder=gt,Fe.frustumCulled=!1,r.add(Fe),Lt.push(Fe),Fe),re=new Te(1,.62,.25),Me=new Te(.6,.78,1),le=(Fe,gt,et,Tt,pe,ve,Ue)=>{let ke=new ct(new Qi(1,1).rotateX(-jt/2),new fi({map:Yt,color:Ue?"#000":Tt,transparent:!0,opacity:pe,blending:Ue?void 0:Cn,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));return ke.scale.set(et*2,1,et*2),ke.position.set(Fe,mi(Fe,gt)+(Ue?.008:.016),gt),Ue||z.push([ke.material,pe,ve,0,ke.position]),G(ke,Ue?1:2)},ie=(Fe,gt,et,Tt,pe)=>{let ve=new Ls(new _s({map:Yt,color:et,blending:Cn,depthWrite:!1,fog:!1,transparent:!0,opacity:Tt}));return ve.position.set(...Fe),ve.scale.set(gt,gt,1),z.push([ve.material,Tt,pe,0,ve.position]),G(ve,3)},at=(Fe,gt,et,Tt,pe,ve,Ue)=>{let ke=new ct(new Qi(1,1).translate(0,.5,0),new xt({uniforms:{uT:bt,uS:{value:Ue*.37},uK:{value:ve},uC:{value:pe}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:jv,transparent:!0,blending:Cn,depthWrite:!1,side:bn,fog:!1}));return ke.scale.set(Tt*.9,Tt,1),ke.position.set(et[0],et[1],et[2]),ke.userData={id:Fe,fact:gt},ke.renderOrder=4,r.add(ke),Ae.push(ke),Lt.push(ke),de.push({m:ke,k:Ue,a:null}),ke};On(ne[0],ne[2])&&le(ne[0],ne[2],.9,0,.6,0,!0),ce.forEach(([,Fe])=>{K&&!Fe[5]&&Math.max(...Fe[2])<3&&Fe[1][1]<.4&&On(Fe[1][0],Fe[1][2])&&le(Fe[1][0],Fe[1][2],Math.max(Fe[2][0],Fe[2][2])*.8+.2,0,.5,0,!0)}),j.forEach(([Fe,gt,et,Tt,pe,ve],Ue)=>{let ke=mi(ve[0],ve[2]),lt=ve[1]-ke,Kt=Math.max(Tt[1]*1.3,.3);if(at(Fe,gt,[ve[0],ve[1]-Tt[1]*.4,ve[2]],Kt,pe,1.3,Ue),ie(ve,Math.max(2.2,Tt[1]*5),pe.clone().multiplyScalar(.8),.4,Ue),le(ve[0],ve[2],Math.min(4.2,1.3+lt*.9),pe.clone().multiplyScalar(.8),.38,Ue),lt>.45){let Ot=new xt({uniforms:{uC:{value:pe.clone()},uK:{value:.3}},vertexShader:"varying vec3 vN,vP;varying float vv;void main(){vv=uv.y;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uC;uniform float uK;varying vec3 vN,vP;varying float vv;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.3);gl_FragColor=vec4(uC*e*pow(vv,1.4)*uK,1.);}",transparent:!0,blending:Cn,depthWrite:!1,side:bn,fog:!1}),nn=new ct(new ji(.08,Math.min(3.4,lt*.5+.5),lt,32,1,!0).translate(0,-lt/2,0),Ot);nn.position.set(ve[0],ve[1],ve[2]),z.push([Ot.uniforms.uK,.3,Ue,1,nn.position]),G(nn,2)}W.push([new N(...ve),1])}),te.forEach(([Fe,gt,et,Tt,pe],ve)=>{let Ue=et[1]+Tt[1]/2,ke=Tt[1]*2.6;at(Fe,gt,[et[0],Ue-ke*.3,et[2]],ke,pe,1.5,ve+5),ie([et[0],Ue,et[2]],ke*2.4,pe.clone().multiplyScalar(.7),.3,ve+5),le(et[0],et[2],1.2,pe.clone().multiplyScalar(.8),.4,ve+5);for(let lt=0;lt<5;lt++)rn(et[0]+(Mt()-.5)*.3,Ue+Mt()*.5,et[2]+(Mt()-.5)*.3,7,.05,re.clone().multiplyScalar(2));W.push([new N(et[0],Ue,et[2]),.7])}),W.sort((Fe,gt)=>Fe[0].distanceTo(new N(...ne))-gt[0].distanceTo(new N(...ne))),W.length=Math.min(W.length,4);{let Fe=[],gt=[],et=[],Tt=(pe,ve)=>{Fe.push(...pe),gt.push(ve.r,ve.g,ve.b),et.push(1)};if(j.forEach(([,,,,pe,ve])=>Tt(ve,pe.clone().multiplyScalar(1.2))),te.forEach(([,,pe,ve,Ue])=>Tt([pe[0],pe[1]+ve[1]/2,pe[2]],Ue.clone().multiplyScalar(1.2))),In.forEach(([pe,ve])=>Tt([pe[0],pe[1]+ve[1]/2,pe[2]],new Te(1.4,1.5,1.6))),et.length){let pe=new Xt;pe.setAttribute("position",new Xe(Fe,3)),pe.setAttribute("aC",new Xe(gt,3)),pe.setAttribute("aZ",new Xe(et,1));let ve=new Ms(pe,new xt({uniforms:Ys,vertexShader:"attribute vec3 aC;attribute float aZ;uniform float uSz;varying vec3 vC;void main(){vC=aC;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=uSz*aZ;}",fragmentShader:"varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;float a=exp(-r*r*3.)*(1.-smoothstep(.8,1.,r));gl_FragColor=vec4(mix(vC,vec3(1.),a*a*.6)*a*1.4,1.);}",transparent:!0,blending:Cn,depthWrite:!1,depthTest:!1}));ve.frustumCulled=!1,ve.renderOrder=6,r.add(ve),Lt.push(ve),qs=ve}}for(let Fe=0;Fe<90;Fe++)rn(ne[0]+(Mt()-.5)*50,mn+.4+Mt()*5,ne[2]+(Mt()-.5)*60,6,.1+.05*Mt(),(Mt()<.8?re:Me).clone().multiplyScalar(2.6));for(let Fe=0;Fe<520;Fe++)rn(ne[0]+(Mt()-.5)*70,mn+Mt()*.5,ne[2]+(Mt()-.5)*80,7,.05+.05*Mt(),(Mt()<.7?Me:re).clone().multiplyScalar(1.8))}let li=En>.5?new Te(1.2,.85,.5):new Te(.5,.55,.7);for(let G=0;G<220;G++)rn(ne[0]+(Mt()-.5)*28,mn+.4+Mt()*6,ne[2]+(Mt()-.5)*28,3,.05+Mt()*.05,li.clone().multiplyScalar(1.4));Nn.forEach(G=>{for(let re=0;re<24;re++)rn(G.p[0]+(Mt()-.5)*8,G.p[1]-.8+(Mt()-.5)*3.6,G.p[2]+(Mt()-.5)*8,3,.06,li.clone().multiplyScalar(1.2))}),yn={c:[(He[0]+He[1])/2,0,(ze[0]+ze[1])/2],r:Math.max(10,Math.hypot(He[1]-He[0],ze[1]-ze[0])*.5+3),y:0},ue&&(yn.y=(ft-8)/2,yn.r=Math.max(yn.r*.85,(ft+8)*.55));let ci=M(new _n({vertexColors:!0,...h(),roughness:.95,normalScale:new Be(2.2,2.2),envMapIntensity:.7}),{gold:!0});if(!ue){let G=je(He,ze,st,Le),re=new ct(G,ci);re.receiveShadow=!0,re.userData={id:"ground"},r.add(re);let Me=M(new _n({color:Le.clone().multiplyScalar(.88),...h(),roughness:1})),le=new ct(rt(new Qi(2400,2400,1,1).rotateX(-jt/2).translate(0,-.06,0)),Me);le.receiveShadow=!0,r.add(le)}if(ue){[[-34,.008,1,.4],[-28,.014,.85,.5],[-24,.022,.75,.56]].forEach(([pe,ve,Ue,ke],lt)=>{let Kt=new ct(new Qi(6e3,6e3).rotateX(-jt/2),new xt({uniforms:{uT:bt,uS:{value:ve},uA:{value:Ue},uBase:{value:ke},uHor:{value:ge.uHor.value},uSun:ge.uSun},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:zv,transparent:!0,depthWrite:!1,fog:!1}));Kt.position.y=pe,Kt.renderOrder=-4+lt,Kt.frustumCulled=!1,r.add(Kt),Lt.push(Kt),ee.push(Kt)});let G=Xs(11);for(let pe=0;pe<8;pe++){let ve=pe/8*jt*2+G()*.5,Ue=700+G()*250,ke=50+G()*70,lt=-22+G()*40,Kt=new Te("#a89cc0").lerp(new Te("#7a9a80"),.25).lerp(ge.uHor.value,.55),Ot=new ui,nn=new fi({color:Kt,fog:!1,transparent:!0,opacity:.6,depthWrite:!1});Ot.add(new ct(new Ri(.5,16,8).scale(ke,ke*.1,ke*.8),nn),new ct(new Bs(.5,1,12).rotateX(jt).translate(0,-.5,0).scale(ke*.9,ke*.5,ke*.7),nn)),Ot.position.set(ne[0]+Math.sin(ve)*Ue,lt,ne[2]-Math.cos(ve)*Ue),Ot.renderOrder=-6,Ot.traverse(Wt=>{Wt.renderOrder=-6,Wt.frustumCulled=!1}),r.add(Ot),Lt.push(...Ot.children)}let re=Xs(2024),Me=[],le=Jn.avatar.facing*jt/180,ie=Math.sin(le),at=-Math.cos(le),Fe=[ne[0]-ie*6.5-at*1.3,ne[1]+3.4,ne[2]-at*6.5+ie*1.3],gt=(pe,ve,Ue,ke,lt,Kt,Ot,nn)=>{for(let Wt=0;Wt<Ot;Wt++){let Pt,It,ii,bi;do Pt=re()*2-1,It=re()*2-1,ii=re()*2-1,bi=Pt*Pt+It*It+ii*ii;while(bi>1);let gi=ve+(It<0?It*.5:It)*lt,Hn=(ke+Kt)/2*(nn*.8+.5*re()*re())*(1-.3*Math.sqrt(bi)),dt=pe+Pt*ke,Bt=Ue+ii*Kt;if(Math.hypot(dt-Fe[0],gi-Fe[1],Bt-Fe[2])<Hn*1.5+14||Math.hypot(dt-ne[0],gi-ne[1],Bt-ne[2])<Hn*1.2+9){re(),re();continue}Me.push(dt,gi,Bt,Hn,re(),Math.min(1,Math.max(0,(gi-(ve-lt*.5))/(lt*1.5))),0,0)}},et=(pe,ve,Ue,ke,lt,Kt)=>gt(pe,ve+lt/2,Ue,ke,lt/2,ke*.8,Kt,.28);for(let pe of Ln){let ve=pe.t[2][0]/2;for(let Ue=0;Ue<12;Ue++){let ke=Ue/12*jt*2+re()*.4,lt=ve*(1.15+re()*.6);et(pe.t[1][0]+Math.cos(ke)*lt,pe.top-19-re()*6,pe.t[1][2]+Math.sin(ke)*lt,7+re()*6,22+re()*24,18)}}let Tt={};We.forEach(({b:pe})=>{if(pe[3]-pe[2]>=9){let ve=Math.round((pe[0]+pe[1])/8)+","+Math.round((pe[4]+pe[5])/8),Ue=Tt[ve];Tt[ve]=[(pe[0]+pe[1])/2,Math.min(pe[2],Ue?Ue[1]:1e9),(pe[4]+pe[5])/2]}});for(let[pe,ve,Ue]of Object.values(Tt))for(let ke=0;ke<9;ke++){let lt=ke/9*jt*2+re()*.5,Kt=9+re()*8,Ot=ve-20-re()*3;et(pe+Math.cos(lt)*Kt,Ot,Ue+Math.sin(lt)*Kt,6+re()*5,ve+2+re()*2-Ot,14)}for(let pe=0;pe<30;pe++){let ve=pe/30*jt*2+re()*.3,Ue=150+re()*280,ke=-40+re()*10;et(ne[0]+Math.sin(ve)*Ue,ke,ne[2]-Math.cos(ve)*Ue,22+re()*30,28+re()*52,14)}for(let[,pe,ve]of Dn){let Ue=Math.max(3,...ve.map(ke=>ke*.5));gt(pe[0],pe[1]+ve[1]/2,pe[2],Math.max(ve[0],3)/2,Math.max(ve[1],3)/2,Math.max(ve[2],3)/2,Math.min(36,Math.max(6,Math.round(Math.cbrt(ve[0]*ve[1]*ve[2])*1.2))),.35+0*Ue)}{let pe=Me.length/8,ve=new Wr,Ue=new Ki(new Float32Array(pe*4),4),ke=new Ki(new Float32Array(pe*4),4);ve.setAttribute("position",new Xe([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),ve.setIndex([0,1,2,0,2,3]),ve.setAttribute("aC",Ue),ve.setAttribute("aD",ke),ve.instanceCount=pe;let lt=new ct(ve,new xt({uniforms:{uT:bt,uSun:ge.uSun,uHor:ge.uHor},vertexShader:Hv,fragmentShader:Wv,transparent:!0,depthWrite:!1,fog:!1}));lt.frustumCulled=!1,lt.renderOrder=-1,r.add(lt),Lt.push(lt),be={aC:Ue,aD:ke,src:new Float32Array(Me),n:pe,mesh:lt}}if(Tn.length){let pe=Xs(31),ve=new Bs(.035,1,4).translate(0,.5,0),Ue=new Ri(.15,8,6).scale(1,.6,1).translate(0,1.02,0),ke=q([ve,Ue]),lt=ke.attributes.position.count,Kt=[];for(let Pt=0;Pt<lt;Pt++)Kt.push(...Pt<ve.attributes.position.count?[.3,.62,.3]:[1,1,1]);ke.setAttribute("color",new Xe(Kt,3));let Ot=new Ns(ke,M(new _n({vertexColors:!0,roughness:.8,emissive:new Te("#301020"),emissiveIntensity:.15}),{sway:[.14,0]}),Tn.length*12),nn=new At,Wt=[];Tn.forEach(([Pt,,It,ii,bi])=>{let gi=Math.max(ii[0],ii[2])>=.3,Hn=gi?Math.max(ii[0],ii[2])*.9+.3:.28;for(let dt=0;dt<(gi?12:4);dt++){let Bt=pe()*jt*2,hi=Math.sqrt(pe())*Hn,Wi=(gi?.35:.28)+pe()*.4,Ks=Wt.length;nn.makeRotationY(pe()*6).setPosition(It[0]+Math.cos(Bt)*hi,It[1],It[2]+Math.sin(Bt)*hi),nn.scale(new N(Wi,Wi,Wi)),Ot.setMatrixAt(Ks,nn),Ot.setColorAt(Ks,new Te().setRGB(bi.r*(.85+pe()*.25),bi.g*(.85+pe()*.25),bi.b*(.85+pe()*.25))),Wt.push(Pt)}}),Ot.count=Wt.length,Ot.castShadow=!0,Ot.receiveShadow=!0,Ot.userData={ids:Wt,fact:null},Ot.computeBoundingSphere(),r.add(Ot),Ae.push(Ot)}{let pe=Xs(77),ve=30,Ue=[[-50,-20],[30,25],[58,-45],[-8,50]],ke=new Float32Array(ve*4),lt=new Float32Array(ve*3),Kt=[];for(let Bt=0;Bt<ve;Bt++){let hi=Ue[Bt%4],Wi=()=>(pe()+pe()+pe()-1.5)*18;ke.set([hi[0]+Wi(),4+Bt%4*5+Wi()*.35,hi[1]+Wi(),1.2+pe()*1.1],Bt*4),lt.set([pe(),2+pe()*1.6,pe()],Bt*3)}Kt.push(0,0,-.15,-1.1,0,.1,0,0,.3,0,0,-.15,1.1,0,.1,0,0,.3);let Ot=new Wr;Ot.setAttribute("position",new Xe(Kt,3)),Ot.setAttribute("aB",new Ki(ke,4)),Ot.setAttribute("aV",new Ki(lt,3)),Ot.instanceCount=ve;let nn=new ct(Ot,new xt({uniforms:{uT:bt,uCen:{value:new N(ne[0]+ie*95,ne[1]+10,ne[2]+at*95)},uDir:{value:new Be(-at,ie)},uHor:ge.uHor},vertexShader:Xv,fragmentShader:qv,transparent:!0,depthWrite:!1,side:bn,fog:!1}));nn.frustumCulled=!1,nn.renderOrder=0,r.add(nn),Lt.push(nn);let Wt=Xs(13),Pt=320,It=[],ii=[],bi=[[1.25,.6,.75],[1.3,1.15,.85],[1.9,1.75,1.3]],gi=[];for(let Bt=0;Bt<Pt;Bt++)It.push(Wt(),Wt(),Wt(),Wt()),ii.push(...bi[Bt%3==2?2:Wt()<.55?0:1]),gi.push(0,0,0);let Hn=new Xt;Hn.setAttribute("position",new Xe(gi,3)),Hn.setAttribute("aP",new Xe(It,4)),Hn.setAttribute("aC",new Xe(ii,3));let dt=new Ms(Hn,new xt({uniforms:{uT:bt,uK:_},vertexShader:Yv,fragmentShader:Zv,transparent:!0,depthWrite:!1}));dt.frustumCulled=!1,dt.renderOrder=7,r.add(dt),Lt.push(dt)}}if(on.length){let G=new Xt;G.setAttribute("position",new Xe(on.flatMap(()=>[0,0,0]),3)),G.setAttribute("aA",new Xe(on.flatMap(([Me])=>Me),3)),G.setAttribute("aB",new Xe(on.flatMap(([,Me])=>Me),3)),G.setAttribute("aS",new Xe(on.map(([,,Me])=>Me),1));let re=new Ms(G,new xt({uniforms:{uT:bt,uK:_},vertexShader:Gv,fragmentShader:Yf,transparent:!0,depthWrite:!1,blending:Cn,fog:!1}));re.frustumCulled=!1,re.renderOrder=5,r.add(re),Lt.push(re)}if(pn.length){let G=new Xt;G.setAttribute("position",new Xe(pn.flatMap(()=>[0,0,0]),3)),G.setAttribute("aA",new Xe(pn.flatMap(([Me])=>Me),3)),G.setAttribute("aB",new Xe(pn.flatMap(([,Me])=>Me),3)),G.setAttribute("aS",new Xe(pn.map(([,,Me])=>Me),1));let re=new Ms(G,new xt({uniforms:{uT:bt,uK:_},vertexShader:Vv,fragmentShader:Yf,transparent:!0,depthWrite:!1,blending:Cn,fog:!1}));re.frustumCulled=!1,re.renderOrder=5,r.add(re),Lt.push(re)}{let G=ne[1]+.9,re=(Me,le)=>We.some(({b:ie})=>ie[2]<=G&&ie[3]>=G&&[...Array(10)].some((at,Fe)=>{let gt=ne[0]+Me*(Fe+1)*.5,et=ne[2]+le*(Fe+1)*.5;return gt>ie[0]&&gt<ie[1]&&et>ie[4]&&et<ie[5]}));Re=We.some(({b:Me})=>Me[3]-Me[2]>=4&&Me[2]<=G&&Me[3]>=G&&ne[0]>Me[0]-.6&&ne[0]<Me[1]+.6&&ne[2]>Me[4]-.6&&ne[2]<Me[5]+.6)||[[1,0],[-1,0],[0,1],[0,-1]].filter(([Me,le])=>re(Me,le)).length>=3||ue&&(re(1,0)&&re(-1,0)||re(0,1)&&re(0,-1))}if(!ue){let G=(et,Tt)=>Zt(et,Tt,st),re=new Te(1.5,1,.58);for(let et=0,Tt=0;et<5e3&&Tt<460;et++){let pe=ne[0]+(Mt()-.5)*90,ve=ne[2]+(Mt()-.5)*90,Ue=G(pe,ve);(Ue>.2||Mt()<.02)&&(rn(pe,Ue+.05,ve,4,.09+Mt()*.06,re),Tt++)}for(let et=0;et<220;et++){let Tt=ne[0]+(Mt()-.5)*50,pe=ne[2]-4-Mt()*36;rn(Tt,G(Tt,pe)+.06,pe,5,.1,new Te(2.2,1.8,1))}let Me=new Ns(new $i(.5,14).rotateX(-jt/2),M(new _n({color:"#4a3050",alphaMap:fn,transparent:!0,opacity:.9,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),36),le=new At,ie=Jn.avatar.facing*jt/180,at=new N(0,1,0),Fe=Math.sin(ie),gt=-Math.cos(ie);for(let et=0;et<18;et++){let Tt=et%2?1:-1,pe=ne[0]-Fe*(1.1+et*.85)-gt*Tt*.2,ve=ne[2]-gt*(1.1+et*.85)+Fe*Tt*.2,Ue=ne[1]+.04,ke=-ie+Tt*.08;for(let lt=0;lt<2;lt++){let Kt=lt?.14:.27,Ot=lt?.1:.13,nn=lt?-.17:.07;le.makeRotationY(ke).setPosition(pe+Fe*nn,Ue,ve+gt*nn),le.scale(new N(Ot,1,Kt)),Me.setMatrixAt(et*2+lt,le)}}Me.renderOrder=2,r.add(Me),Lt.push(Me),[[380,9,"#d0a8a0",1],[620,16,"#b890a8",2],[920,26,"#9c80b4",3]].forEach(([et,Tt,pe,ve])=>{let Ue=[];for(let nn=0;nn<=96;nn++){let Wt=nn/96*jt*2,Pt=Tt*(.55+.3*Math.sin(Wt*5+ve*2)+.15*Math.sin(Wt*13+ve));Ue.push(ne[0]+Math.sin(Wt)*et,-4,ne[2]-Math.cos(Wt)*et,ne[0]+Math.sin(Wt)*et,Pt,ne[2]-Math.cos(Wt)*et)}let lt=[];for(let nn=0;nn<96;nn++){let Wt=nn*2;lt.push(Wt,Wt+1,Wt+2,Wt+1,Wt+3,Wt+2)}let Kt=new Xt;Kt.setAttribute("position",new Xe(Ue,3)),Kt.setIndex(lt);let Ot=new ct(Kt,new fi({color:new Te(pe).multiplyScalar(En>.5?1:.15),fog:!1,side:bn}));Ot.frustumCulled=!1,r.add(Ot),Lt.push(Ot)})}let Bn=new Xt;Bn.setAttribute("position",new Xe(yt.pos,3)),Bn.setAttribute("aS",new Xe(yt.s,1)),Bn.setAttribute("aK",new Xe(yt.k,1)),Bn.setAttribute("aZ",new Xe(yt.z,1)),Bn.setAttribute("aC",new Xe(yt.c,3)),Y={uT:{value:2},uK:{value:400},uD:{value:En},uSun:ge.uSun},Js=new Ms(Bn,new xt({uniforms:Y,vertexShader:Kv,fragmentShader:$v,transparent:!0,depthWrite:!1,blending:Cn})),Js.frustumCulled=!1,r.add(Js),Lt.push(Js);let ls=En>=.5,Kf=new N(...uo(ls?ge.uSun.value.toArray():Xf));nt.color.set(ls?"#ffc07a":"#9ab4ff"),nt.intensity=ls?ue?4.8:6.5:1.3,nt.userData.dir=Kf,tt.color.set(ls?"#b8a2ee":"#4a5aa8"),tt.groundColor.set(ls?"#9a7a78":"#14142a"),tt.intensity=ls?1.35:.85,ur.strength=ls?ue?.2:.3:.8,ur.threshold=ls?ue?2.2:1.8:.9,ur.radius=.75,n.environmentIntensity=ls?.8:.5,ye?.dispose(),$e.visible=!0,ye=ht.fromScene(a,0,.1,10),n.environment=ye.texture,Q=!0}function Ft(){let C=as=="overview",X=C?yn.c:[Z.at[0],0,Z.at[2]-6],H=C?Math.min(yn.r*1.1,160):46,he=nt.userData.dir||new N(...uo(Oh));nt.position.set(X[0]+he.x*400,X[1]+he.y*400,X[2]+he.z*400),nt.target.position.set(...X),nt.target.updateMatrixWorld();let fe=nt.shadow.camera;fe.left=-H,fe.right=H,fe.top=H,fe.bottom=-H,fe.near=20,fe.far=800,fe.updateProjectionMatrix(),nt.shadow.needsUpdate=!0,Zs.forEach(Ye=>Ye.l.shadow.needsUpdate=!0),Q=!1}function Ke(C,X){Oe.w==C&&Oe.h==X||(Oe.w=C,Oe.h=X,t.setSize(C,X,!1),ki.uniforms.aspect.value=C/X,Jt.setSize(C,X),s.aspect=C/X,s.updateProjectionMatrix(),xc.uniforms.uA.value=Zf.uniforms.uA.value=C/X,Di.uniforms.uA.value=Vi.uniforms.uA.value=C/X)}let Ct=(C,X)=>(1+.1*Math.sin(X*9+C*1.7+Math.sin(X*3+C)*2)+.05*Math.sin(X*23+C*5))*(1+.1*Math.sin(X*5.3+C*2)),wn=2;function an(C=2,X=!1){if(!Jn)return;let H=X?0:Math.min(.2,Math.max(0,C-wn));wn=C,De=C;let he=i.clientWidth||i.width,fe=i.clientHeight||i.height,{at:Ye,facing:qe}=Jn.avatar,Le=qe*jt/180,ce=as=="overview";Ke(he,fe);let ne=[Math.sin(Le),0,-Math.cos(Le)],He=[-ne[2],0,ne[0]];Gi=ce?me?{position:[yn.c[0]-Math.sin(Le+.7)*yn.r*1.25,yn.y+yn.r*.62,yn.c[2]+Math.cos(Le+.7)*yn.r*1.25],target:[yn.c[0],yn.y-3,yn.c[2]]}:{position:[yn.c[0]-ne[0]*yn.r,yn.r*.9,yn.c[2]-ne[2]*yn.r],target:[yn.c[0],0,yn.c[2]]}:{position:Ye.map((ue,ft)=>ue-ne[ft]*6.5+He[ft]*1.3+(ft==1)*3.4),target:Ye.map((ue,ft)=>ue+ne[ft]*9+(ft==1)*.8)};let ze=Gi.position.map((ue,ft)=>ue+[Math.sin(C*.4)*.14,Math.sin(C*.31)*.09,Math.cos(C*.37)*.14][ft]),st=Gi.target.map((ue,ft)=>ue+[Math.cos(C*.3)*.12,Math.sin(C*.23)*.08,0][ft]);s.position.set(...ze),s.lookAt(...st),s.rotateZ(Math.sin(C*.27)*.006),s.updateMatrixWorld(),s.updateProjectionMatrix(),Q&&Ft(),sa.forEach(ue=>ue.visible=!ce),R.forEach(ue=>ue.emissiveIntensity=ce?.9:0),m.uRim.value=ce?1:0,m.uRimC.value.set(En>.5?"#ffc98a":"#7aa8ff"),L.visible=ce,L.scale.setScalar(ce&&me?3.2:1),qs&&(qs.visible=ce,Ys.uSz.value=fe*.013),Zs.forEach((ue,ft)=>ue.l.intensity=ue.b*Ct(ft,C)),U.forEach(ue=>ue.emissiveIntensity=ue.userData.b*Ct(0,C)),I&&(z.forEach(([ue,ft,ln,Vt,Mn])=>{let Yn=ft*(.85+.15*Ct(ln,C))*(Mn?.25+.75*Si(1.5,9,Mn.distanceTo(s.position)):1);Vt?ue.value=Yn:ue.opacity=Yn}),de.forEach(ue=>{let ft=Math.atan2(Ye[0]-ue.m.position.x,Ye[2]-ue.m.position.z);if(ue.a==null||X)ue.a=ft;else{let ln=ft-ue.a;ln=Math.atan2(Math.sin(ln),Math.cos(ln)),ue.a+=ln*Math.min(1,H*(2.2/(1+ue.k*.15)))}ue.m.rotation.y=ue.a}),J.forEach(ue=>{ue.material.uniforms.uT.value=C,ue.material.uniforms.uOv.value=ce?1:0,ue.getRenderTarget().setSize(Math.round(he*.6),Math.round(fe*.6))})),r.children.forEach(ue=>{ue.userData.sway&&(ue.rotation.z=Math.sin(C*.6+ue.userData.sway)*.05)}),ee.forEach(ue=>ue.position.set(ze[0],ue.position.y,ze[2])),r.children.forEach(ue=>{ue.userData.isl&&(ue.rotation.y=C*.02)}),Se.forEach(([ue,ft,ln])=>{ue.rotation.x=Math.sin(C*.7+ln)*.05,ue.rotation.z=Math.sin(C*.53+1)*.03,ft.emissiveIntensity=.12+.1*(.5+.5*Math.sin(C*1.3))});{let ue=ze,ft=[Ye[0],Ye[1]+1,Ye[2]],ln=[ft[0]-ue[0],ft[1]-ue[1],ft[2]-ue[2]];We.forEach(Vt=>{let Mn=!1;if(Re&&!ce){let Yn=0,An=1,tn=Vt.b,In=[tn[0]-.05,tn[2]-.05,tn[4]-.05],os=[tn[1]+.05,tn[3]+.05,tn[5]+.05];Mn=!0;for(let Nn=0;Nn<3&&Mn;Nn++)if(Math.abs(ln[Nn])<1e-6)(ue[Nn]<In[Nn]||ue[Nn]>os[Nn])&&(Mn=!1);else{let oi=(In[Nn]-ue[Nn])/ln[Nn],yt=(os[Nn]-ue[Nn])/ln[Nn];oi>yt&&([oi,yt]=[yt,oi]),Yn=Math.max(Yn,oi),An=Math.min(An,yt),Yn>An&&(Mn=!1)}}Vt.g=X?+Mn:Vt.g+(+Mn-Vt.g)*(1-Math.exp(-Math.max(H,.016)*7)),Vt.g>.01?(Vt.gm||(Vt.gm=M(new _n({color:Ne(Vt.c,1.5),roughness:1,transparent:!0,depthWrite:!1}))),Vt.gm.opacity=1-.88*Vt.g,Vt.me.material=Vt.gm,Vt.me.castShadow=!1):(Vt.me.material=Vt.m,Vt.me.castShadow=!0)})}let Gt=new N;s.getWorldDirection(Gt);let Nt=(ue,ft)=>{let ln=ue.clone().sub(s.position),Vt=ln.length();return(1-.8*Si(.8,.97,ln.dot(Gt)/Math.max(Vt,.001)))*(.25+.75*Si(ft*.1,ft*.7+3,Vt))};if($.forEach(([ue,ft,ln])=>ue.material.opacity=ft*Si(.1,.5,ue.position.distanceTo(s.position)/ln)*(me?Nt(ue.position,ln*.5):1)),me&&Pe.forEach(([ue,ft,ln,Vt])=>ue(ft*Nt(ln,Vt))),be){let{src:ue,n:ft,aC:ln,aD:Vt}=be,Mn=s.position,Yn=Array.from({length:ft},(tn,In)=>In),An=new Float32Array(ft);for(let tn=0;tn<ft;tn++)An[tn]=(ue[tn*8]-Mn.x)**2+(ue[tn*8+1]-Mn.y)**2+(ue[tn*8+2]-Mn.z)**2;Yn.sort((tn,In)=>An[In]-An[tn]);for(let tn=0;tn<ft;tn++){let In=Yn[tn]*8;ln.array.set(ue.subarray(In,In+4),tn*4),Vt.array.set(ue.subarray(In+4,In+8),tn*4)}ln.needsUpdate=!0,Vt.needsUpdate=!0}O.forEach(ue=>ue.offset.set(C*.012,C*.017)),ge.uT.value=C,d.value=bt.value=Di.uniforms.uT.value=C,S.value=En>.5?1:0,_.value=fe*.5*s.projectionMatrix.elements[5],Y&&(Y.uT.value=C,Y.uK.value=_.value),n.fog.density=ce?.0016:me?.0028:En>.5?.0055:.012,tt.intensity=(En>=.5?.95:.85)*(ce?1.3:1);let Pn=(En>=.5?.5:1.1)*(ce?1.1:1);X&&(pi.k=1),t.toneMappingExposure=Pn*pi.k;let pn=new N;s.getWorldDirection(pn);let on=ue=>new N(...ue).sub(s.position).dot(pn);ki.uniforms.maxblur.value=me?.0025:.008,ki.enabled=!ce&&!I,ki.uniforms.focus.value=(on(Ye)+on(st))/2,ki.uniforms.aspect.value=s.aspect,ti.enabled=!0;let Dn=ge.uSun.value,Tn=s.position.clone().add(Dn.clone().multiplyScalar(100)).project(s),ni=pn.dot(Dn);Di.uniforms.uSun.value.set(Tn.x*.5+.5,Tn.y*.5+.5),Di.enabled=En>.5&&ni>.05,Di.uniforms.uAmt.value=Math.min(1,ni*3)*(ce?.4:.45)*(me?1.5:1),Di.uniforms.uThr.value=me?1:1.5,Vi.uniforms.uT.value=C,Vi.uniforms.uD.value=En,Vi.uniforms.uV.value=ce?.35:.5,Vi.uniforms.uN.value=I?1:0;let Ln=Vi.uniforms.uLP.value;for(let ue=0;ue<4;ue++){let ft=W[ue];if(Ln[ue].set(0,0,0),!I||!ft)continue;let ln=ft[0].clone().applyMatrix4(s.matrixWorldInverse),Vt=-ln.z;if(Vt<1.5)continue;let Mn=ft[0].clone().project(s),Yn=Math.max(Math.abs(Mn.x),Math.abs(Mn.y));Ln[ue].set(Mn.x*.5+.5,Mn.y*.5+.5,ft[1]*(1-Si(.9,1.15,Yn))*Si(1.5,6,Vt)*(.9+.1*Ct(ue,C)))}Jt.render();let Hi=I?Math.min(1.9,Math.max(.85,Math.pow(.03/Math.max(na.lum,1e-4),.5))):1;X?(pi.k=Hi,t.toneMappingExposure=Pn*Hi,Jt.render()):pi.k+=(Hi-pi.k)*(1-Math.exp(-H*1.2))}let Rn=(C=>(...X)=>{try{return C(...X)}catch(H){e.push(String(H&&H.stack||H))}})(an);return i.addEventListener("webglcontextlost",C=>{C.preventDefault(),e.push("webgl context lost")}),{modes:["follow","overview"],async setWorld(C){_t(C),Rn()},setCamera(C){C!=as&&(as=C,Q=!0),Rn(De)},getCamera:()=>Gi,async renderStill(C){C!=as&&(as=C,Q=!0),an(2,!0)},start(){cancelAnimationFrame(As),As=requestAnimationFrame(function C(X){Rn(X/1e3),As=requestAnimationFrame(C)})},stop(){cancelAnimationFrame(As)},resize(){Rn(De)},pick(C,X){let H=i.getBoundingClientRect();Je.setFromCamera({x:(C-H.left)/H.width*2-1,y:-((X-H.top)/H.height*2-1)},s);let he=Je.intersectObjects(Ae,!1)[0];if(!he)return null;let fe=he.object.userData;return fe.ids?{id:fe.ids[he.instanceId],fact:Jn.things[fe.ids[he.instanceId]]?.[4]??null}:{id:fe.id,fact:fe.fact??null}},errors:()=>e.splice(0),dispose(){cancelAnimationFrame(As),Jt.dispose?.(),t.dispose()}}}async function EM(i,e){try{if(!document.createElement("canvas").getContext("webgl2"))throw Error("WebGL2 unavailable");return await Qv(i,e)}catch(t){console.warn("engine v10 falling back to v6:",t);let n=i;return i.getContext("webgl")||(n=i.cloneNode(!1),i.parentNode.insertBefore(n,i),i.style.display="none"),Wf(n,e)}}export{EM as createEngine};
