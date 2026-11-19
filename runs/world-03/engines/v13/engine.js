var Lu=0,ph=1,Nu=2;var pr=1,Uu=2,ta=3,er=0,oi=1,vn=2,Xn=0,na=1,Mn=2,mh=3,gh=4,Al=5;var Hi=100,Fu=101,Ou=102,Bu=103,zu=104,mr=200,ku=201,Vu=202,Gu=203,vh=204,xh=205,Xa=206,Hu=207,qa=208,Wu=209,Xu=210,qu=211,Yu=212,Zu=213,Ju=214,jo=0,Qo=1,el=2,Vr=3,tl=4,nl=5,il=6,sl=7,_h=0,Ku=1,$u=2,ds=0,Ya=1,Za=2,Ja=3,gr=4,Ka=5,$a=6,ja=7;var yh=300,vr=301,ia=302,El=303,Cl=304,ki=1e3,as=1001,rl=1002,Cn=1003,ju=1004;var Qa=1005;var yi=1006,Rl=1007;var Us=1008;var ii=1009,Mh=1010,Sh=1011,sa=1012,Pl=1013,ji=1014,Wi=1015,Sn=1016,Il=1017,Dl=1018,Fs=1020,bh=35902,wh=35899,Th=1021,Ah=1022,Li=1023,Ps=1026,Qi=1027,Ll=1028,Nl=1029,tr=1030,Ul=1031;var Fl=1033,eo=33776,to=33777,no=33778,io=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37488,Xl=37489,so=37490,ql=37491,Yl=37808,Zl=37809,Jl=37810,Kl=37811,$l=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,oc=36492,lc=36494,cc=36495,hc=36283,uc=36284,ro=36285,fc=36286;var ba=2300,al=2301,Ko=2302,sh=2303,rh=2400,ah=2401,oh=2402;var Qu=3200,Eh=3201;var ao=0,ef=1,Os="",fi="srgb",wa="srgb-linear",Ta="linear",nn="srgb";var $o=7680;var tf=519,nf=512,sf=513,rf=514,Ch=515,af=516,of=517,Rh=518,Ph=519,Ih=35044;var Dh="300 es",Bi=2e3,Gr=2001;function md(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Aa("canvas");return i.style.display="block",i}var tu={},Hr=null;function Ea(...i){let e="THREE."+i.shift();Hr?Hr("log",e,...i):console.log(e,...i)}function cf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function wt(...i){i=cf(i);let e="THREE."+i.shift();if(Hr)Hr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function bt(...i){i=cf(i);let e="THREE."+i.shift();if(Hr)Hr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ur(...i){let e=i.join(" ");e in tu||(tu[e]=!0,wt(...i))}function hf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var uf={[jo]:jo,[el]:il,[tl]:tl,[Vr]:nl,[Qo]:Qo,[il]:el,[sl]:sl,[nl]:Vr},os=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uc=Math.PI/180,ol=180/Math.PI;function xr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[t&63|128]+hi[t>>8&255]+"-"+hi[t>>16&255]+hi[t>>24&255]+hi[n&255]+hi[n>>8&255]+hi[n>>16&255]+hi[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function vd(i,e){return(i%e+e)%e}function Fc(i,e,t){return(1-t)*i+t*e}function ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function df(i,e){if(e.constructor===Float32Array)return i;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function pf(i,e){if(e.constructor===Float32Array)return i;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Yt(this.x,e.x,t.x),this.y=Yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Yt(this.x,e,t),this.y=Yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ls=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],h=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,c=c*p+f*o,l=l*p+h*o,u=u*p+g*o,d=d*p+x*o}else{c=c*p+f*o,l=l*p+h*o,u=u*p+g*o,d=d*p+x*o;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-o*h,e[t+2]=l*g+u*h+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>d){let h=2*Math.sqrt(1+n-o-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>d){let h=2*Math.sqrt(1+o-n-d);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Yt(this.x,e.x,t.x),this.y=Yt(this.y,e.y,t.y),this.z=Yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Yt(this.x,e,t),this.y=Yt(this.y,e,t),this.z=Yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new O,nu=new ls,It=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],A=s[4],b=s[7],E=s[2],w=s[5],v=s[8];return r[0]=a*x+o*M+c*E,r[3]=a*m+o*A+c*w,r[6]=a*p+o*b+c*v,r[1]=l*x+u*M+d*E,r[4]=l*m+u*A+d*w,r[7]=l*p+u*b+d*v,r[2]=f*x+h*M+g*E,r[5]=f*m+h*A+g*w,r[8]=f*p+h*b+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,h=l*r-a*c,g=t*d+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new It,iu=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){let i={enabled:!0,workingColorSpace:wa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nn&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nn&&(s.r=kr(s.r),s.g=kr(s.g),s.b=kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Os?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wa]:{primaries:e,whitePoint:n,transfer:Ta,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:n,transfer:nn,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),i}var Xt=xd();function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sr,ll=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Aa("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rs(t[n]/255)*255):t[n]=Rs(t[n]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_d=0,Wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zc(s[a].image)):r.push(zc(s[a]))}else r=zc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var yd=0,kc=new O,Mi=class i extends os{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=as,s=as,r=yi,a=Us,o=Li,c=ii,l=i.DEFAULT_ANISOTROPY,u=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=xr(),this.name="",this.source=new Wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=yh;Mi.DEFAULT_ANISOTROPY=1;var sn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,b=(h+1)/2,E=(p+1)/2,w=(u+f)/4,v=(d+x)/4,S=(g+m)/4;return A>b&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=v/n):b>E?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=S/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(f-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Yt(this.x,e.x,t.x),this.y=Yt(this.y,e.y,t.y),this.z=Yt(this.z,e.z,t.z),this.w=Yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Yt(this.x,e,t),this.y=Yt(this.y,e,t),this.z=Yt(this.z,e,t),this.w=Yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Mi({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ca=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,u,d,f,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,f,h,g,x,m)}set(e,t,n,s,r,a,o,c,l,u,d,f,h,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*d,g=o*u,x=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f+x*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,h=a*d,g=o*u,x=o*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Sd)}lookAt(e,t,n){let s=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Vs.crossVectors(n,Ci),Vs.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Vs.crossVectors(n,Ci)),Vs.normalize(),wo.crossVectors(Ci,Vs),s[0]=Vs.x,s[4]=wo.x,s[8]=Ci.x,s[1]=Vs.y,s[5]=wo.y,s[9]=Ci.y,s[2]=Vs.z,s[6]=wo.z,s[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],A=n[7],b=n[11],E=n[15],w=s[0],v=s[4],S=s[8],I=s[12],C=s[1],L=s[5],F=s[9],J=s[13],R=s[2],W=s[6],ie=s[10],Q=s[14],pe=s[3],B=s[7],H=s[11],$=s[15];return r[0]=a*w+o*C+c*R+l*pe,r[4]=a*v+o*L+c*W+l*B,r[8]=a*S+o*F+c*ie+l*H,r[12]=a*I+o*J+c*Q+l*$,r[1]=u*w+d*C+f*R+h*pe,r[5]=u*v+d*L+f*W+h*B,r[9]=u*S+d*F+f*ie+h*H,r[13]=u*I+d*J+f*Q+h*$,r[2]=g*w+x*C+m*R+p*pe,r[6]=g*v+x*L+m*W+p*B,r[10]=g*S+x*F+m*ie+p*H,r[14]=g*I+x*J+m*Q+p*$,r[3]=M*w+A*C+b*R+E*pe,r[7]=M*v+A*L+b*W+E*B,r[11]=M*S+A*F+b*ie+E*H,r[15]=M*I+A*J+b*Q+E*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=c*h-l*f,A=o*h-l*d,b=o*f-c*d,E=a*h-l*u,w=a*f-c*u,v=a*d-o*u;return t*(x*M-m*A+p*b)-n*(g*M-m*E+p*w)+s*(g*A-x*E+p*v)-r*(g*b-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*o-n*a,A=t*c-s*a,b=t*l-r*a,E=n*c-s*o,w=n*l-r*o,v=s*l-r*c,S=u*x-d*g,I=u*m-f*g,C=u*p-h*g,L=d*m-f*x,F=d*p-h*x,J=f*p-h*m,R=M*J-A*F+b*L+E*C-w*I+v*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/R;return e[0]=(o*J-c*F+l*L)*W,e[1]=(s*F-n*J-r*L)*W,e[2]=(x*v-m*w+p*E)*W,e[3]=(f*w-d*v-h*E)*W,e[4]=(c*C-a*J-l*I)*W,e[5]=(t*J-s*C+r*I)*W,e[6]=(m*b-g*v-p*A)*W,e[7]=(u*v-f*b+h*A)*W,e[8]=(a*F-o*C+l*S)*W,e[9]=(n*C-t*F-r*S)*W,e[10]=(g*w-x*b+p*M)*W,e[11]=(d*b-u*w-h*M)*W,e[12]=(o*I-a*L-c*S)*W,e[13]=(t*L-n*I+s*S)*W,e[14]=(x*A-g*E-m*M)*W,e[15]=(u*E-d*A+f*M)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,h=r*u,g=r*d,x=a*u,m=a*d,p=o*d,M=c*l,A=c*u,b=c*d,E=n.x,w=n.y,v=n.z;return s[0]=(1-(x+p))*E,s[1]=(h+b)*E,s[2]=(g-A)*E,s[3]=0,s[4]=(h-b)*w,s[5]=(1-(f+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+A)*v,s[9]=(m-M)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=br.set(s[0],s[1],s[2]).length(),o=br.set(s[4],s[5],s[6]).length(),c=br.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qi.copy(this);let l=1/a,u=1/o,d=1/c;return qi.elements[0]*=l,qi.elements[1]*=l,qi.elements[2]*=l,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Bi,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Bi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Gr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bi,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Bi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Gr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},br=new O,qi=new Pt,Md=new O(0,0,0),Sd=new O(1,1,1),Vs=new O,wo=new O,Ci=new O,ru=new Pt,au=new ls,Is=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bd=0,ou=new O,wr=new ls,bs=new Pt,To=new O,pa=new O,wd=new O,Td=new ls,lu=new O(1,0,0),cu=new O(0,1,0),hu=new O(0,0,1),uu={type:"added"},Ad={type:"removed"},Tr={type:"childadded",child:null},Vc={type:"childremoved",child:null},ni=class i extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Is,n=new ls,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new It}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(pa,To,this.up):bs.lookAt(To,pa,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(bs),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ad),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(bs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ni.DEFAULT_UP=new O(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ed={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ed)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xt.workingColorSpace){if(e=vd(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gc(a,r,e+1/3),this.g=Gc(a,r,e),this.b=Gc(a,r,e-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(e,t=fi){function n(r){r!==void 0&&parseFloat(r)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){let n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Xt.workingToColorSpace(ui.copy(this),e),Math.round(Yt(ui.r*255,0,255))*65536+Math.round(Yt(ui.g*255,0,255))*256+Math.round(Yt(ui.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.workingToColorSpace(ui.copy(this),t);let n=ui.r,s=ui.g,r=ui.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.workingToColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=fi){Xt.workingToColorSpace(ui.copy(this),e);let t=ui.r,n=ui.g,s=ui.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+t,Gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gs),e.getHSL(Ao);let n=Fc(Gs.h,Ao.h,t),s=Fc(Gs.s,Ao.s,t),r=Fc(Gs.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new xe;xe.NAMES=mf;var Ra=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yr=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yi=new O,ws=new O,Hc=new O,Ts=new O,Ar=new O,Er=new O,fu=new O,Wc=new O,Xc=new O,qc=new O,Yc=new sn,Zc=new sn,Jc=new sn,Cs=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yi.subVectors(e,t),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yi.subVectors(s,t),ws.subVectors(n,t),Hc.subVectors(e,t);let a=Yi.dot(Yi),o=Yi.dot(ws),c=Yi.dot(Hc),l=ws.dot(ws),u=ws.dot(Hc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ts)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ts.x),c.addScaledVector(a,Ts.y),c.addScaledVector(o,Ts.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Yc.setScalar(0),Zc.setScalar(0),Jc.setScalar(0),Yc.fromBufferAttribute(e,t),Zc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yc,r.x),a.addScaledVector(Zc,r.y),a.addScaledVector(Jc,r.z),a}static isFrontFacing(e,t,n,s){return Yi.subVectors(n,t),ws.subVectors(e,t),Yi.cross(ws).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Yi.cross(ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ar.subVectors(s,n),Er.subVectors(r,n),Wc.subVectors(e,n);let c=Ar.dot(Wc),l=Er.dot(Wc);if(c<=0&&l<=0)return t.copy(n);Xc.subVectors(e,s);let u=Ar.dot(Xc),d=Er.dot(Xc);if(u>=0&&d<=u)return t.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Ar,a);qc.subVectors(e,r);let h=Ar.dot(qc),g=Er.dot(qc);if(g>=0&&h<=g)return t.copy(r);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Er,o);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return fu.subVectors(r,s),o=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(fu,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Ar,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cs=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zi):Zi.fromBufferAttribute(r,a),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Co.subVectors(this.max,ma),Cr.subVectors(e.a,ma),Rr.subVectors(e.b,ma),Pr.subVectors(e.c,ma),Hs.subVectors(Rr,Cr),Ws.subVectors(Pr,Rr),or.subVectors(Cr,Pr);let t=[0,-Hs.z,Hs.y,0,-Ws.z,Ws.y,0,-or.z,or.y,Hs.z,0,-Hs.x,Ws.z,0,-Ws.x,or.z,0,-or.x,-Hs.y,Hs.x,0,-Ws.y,Ws.x,0,-or.y,or.x,0];return!Kc(t,Cr,Rr,Pr,Co)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Cr,Rr,Pr,Co))?!1:(Ro.crossVectors(Hs,Ws),t=[Ro.x,Ro.y,Ro.z],Kc(t,Cr,Rr,Pr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(As),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},As=[new O,new O,new O,new O,new O,new O,new O,new O],Zi=new O,Eo=new cs,Cr=new O,Rr=new O,Pr=new O,Hs=new O,Ws=new O,or=new O,ma=new O,Co=new O,Ro=new O,lr=new O;function Kc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){lr.fromArray(i,r);let o=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),c=e.dot(lr),l=t.dot(lr),u=n.dot(lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Wn=new O,Po=new Be,Cd=0,zi=class extends os{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=Wi,this.version=0,this._normalizationScale=e!==void 0?dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix3(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):df(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):pf(e,this.array)}};var Pa=class extends zi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ia=class extends zi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Oe=class extends zi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rd=new cs,ga=new O,$c=new O,Ds=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add($c)),this.expandByPoint(ga.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pd=0,Oi=new Pt,jc=new ni,Ir=new O,Ri=new cs,va=new cs,ti=new O,Zt=class i extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?Ia:Pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(ti.addVectors(Ri.min,va.min),Ri.expandByPoint(ti),ti.addVectors(Ri.max,va.max),Ri.expandByPoint(ti)):(Ri.expandByPoint(va.min),Ri.expandByPoint(va.max))}Ri.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ti.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ti));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ti.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),ti.add(Ir)),s=Math.max(s,n.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new O,c[I]=new O;let u=new O,d=new O,f=new O,h=new Be,g=new Be,x=new Be,m=new O,p=new O;function M(I,C,L){l[I]=l[C]=l[L]=1,u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,I),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,L),d.sub(u),f.sub(u),g.sub(h),x.sub(h);let F=1/(g.x*x.y-x.x*g.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(F),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(F),o[I].add(m),o[C].add(m),o[L].add(m),c[I].add(p),c[C].add(p),c[L].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,C=A.length;I<C;++I){let L=A[I],F=L.start,J=L.count;for(let R=F,W=F+J;R<W;R+=3)M(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new O,E=new O,w=new O,v=new O;function S(I){w.fromBufferAttribute(s,I),v.copy(w);let C=o[I];b.copy(C),b.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(v,C);let F=E.dot(c[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,F)}for(let I=0,C=n.count;I<C;++I)l[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new zi(f,u,d)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ul=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=xr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=du(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=du(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function du(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=xr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var _i=new O,Da=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?dc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix4(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyNormalMatrix(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.transformDirection(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):df(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):pf(e,this.data.array)}},Qc=new O,Id=new O,Dd=new It,Pi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qc.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dd.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ld=0,Ji=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=na,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=class extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,xa=new O,Lr=new O,Nr=new O,Ur=new Be,_a=new Be,gf=new Pt,Io=new O,ya=new O,Do=new O,pu=new Be,eh=new Be,mu=new Be,hs=class extends ni{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new Zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ul(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new Da(n,3,0,!1)),Dr.setAttribute("uv",new Da(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Nr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Lo(Io.set(-.5,-.5,0),Nr,a,Lr,s,r),Lo(ya.set(.5,-.5,0),Nr,a,Lr,s,r),Lo(Do.set(.5,.5,0),Nr,a,Lr,s,r),pu.set(0,0),eh.set(1,0),mu.set(1,1);let o=e.ray.intersectTriangle(Io,ya,Do,!1,xa);if(o===null&&(Lo(ya.set(-.5,.5,0),Nr,a,Lr,s,r),eh.set(0,1),o=e.ray.intersectTriangle(Io,Do,ya,!1,xa),o===null))return;let c=e.ray.origin.distanceTo(xa);c<e.near||c>e.far||t.push({distance:c,point:xa.clone(),uv:Cs.getInterpolation(xa,Io,ya,Do,pu,eh,mu,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Lo(i,e,t,n,s,r){Ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(_a.x=r*Ur.x-s*Ur.y,_a.y=s*Ur.x+r*Ur.y):_a.copy(Ur),i.copy(e),i.x+=_a.x,i.y+=_a.y,i.applyMatrix4(gf)}var Es=new O,th=new O,No=new O,Uo=new O,Zr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){th.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Uo.copy(this.origin).sub(th);let r=e.distanceTo(t)*.5,a=-this.direction.dot(No),o=Uo.dot(this.direction),c=-Uo.dot(No),l=Uo.lengthSq(),u=Math.abs(1-a*a),d,f,h,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let x=1/u;d*=x,f*=x,h=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(th).addScaledVector(No,f),h}intersectSphere(e,t){if(e.radius<0)return null;Es.subVectors(e.center,this.origin);let n=Es.dot(this.direction),s=Es.dot(Es)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,A=n.z-a.z,b=Math.abs(c),E=Math.abs(l),w=Math.abs(u),v,S,I,C,L,F,J,R,W,ie,Q,pe;if(b>=E&&b>=w?(I=c,F=d,W=g,pe=p,c>=0?(v=l,S=u,C=f,L=h,J=x,R=m,ie=M,Q=A):(v=u,S=l,C=h,L=f,J=m,R=x,ie=A,Q=M)):E>=w?(I=l,F=f,W=x,pe=M,l>=0?(v=u,S=c,C=h,L=d,J=m,R=g,ie=A,Q=p):(v=c,S=u,C=d,L=h,J=g,R=m,ie=p,Q=A)):(I=u,F=h,W=m,pe=A,u>=0?(v=c,S=l,C=d,L=f,J=g,R=x,ie=p,Q=M):(v=l,S=c,C=f,L=d,J=x,R=g,ie=M,Q=p)),I===0)return null;let B=v/I,H=S/I,$=1/I,we=C-B*F,Ge=L-H*F,te=J-B*W,me=R-H*W,re=ie-B*pe,ae=Q-H*pe,ne=re*me-ae*te,Ee=we*ae-Ge*re,qe=te*Ge-me*we;if(s){if(ne<0||Ee<0||qe<0)return null}else if((ne<0||Ee<0||qe<0)&&(ne>0||Ee>0||qe>0))return null;let Pe=ne+Ee+qe;if(Pe===0)return null;let rt=$*(ne*F+Ee*W+qe*pe);return(Pe>0?rt<0:rt>0)?null:this.at(rt/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pi=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gu=new Pt,cr=new Zr,Fo=new Ds,vu=new O,Oo=new O,Bo=new O,zo=new O,nh=new O,ko=new O,xu=new O,Vo=new O,ut=class extends ni{constructor(e=new Zt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(nh.fromBufferAttribute(d,e),a?ko.addScaledVector(nh,u):ko.addScaledVector(nh.sub(t),u))}t.add(ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),cr.copy(e.ray).recast(e.near),!(Fo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Fo,vu)===null||cr.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(gu.copy(r).invert(),cr.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,E=A;b<E;b+=3){let w=o.getX(b),v=o.getX(b+1),S=o.getX(b+2);s=Go(this,p,e,n,l,u,d,w,v,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=Go(this,a,e,n,l,u,d,M,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),A=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,E=A;b<E;b+=3){let w=b,v=b+1,S=b+2;s=Go(this,p,e,n,l,u,d,w,v,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=m,A=m+1,b=m+2;s=Go(this,a,e,n,l,u,d,M,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Nd(i,e,t,n,s,r,a,o){let c;if(e.side===oi?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===er,o),c===null)return null;Vo.copy(o),Vo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Vo);return l<t.near||l>t.far?null:{distance:l,point:Vo.clone(),object:i}}function Go(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Oo),i.getVertexPosition(c,Bo),i.getVertexPosition(l,zo);let u=Nd(i,e,t,n,Oo,Bo,zo,xu);if(u){let d=new O;Cs.getBarycoord(xu,Oo,Bo,zo,d),s&&(u.uv=Cs.getInterpolatedAttribute(s,o,c,l,d,new Be)),r&&(u.uv1=Cs.getInterpolatedAttribute(r,o,c,l,d,new Be)),a&&(u.normal=Cs.getInterpolatedAttribute(a,o,c,l,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new O,materialIndex:0};Cs.getNormal(Oo,Bo,zo,f.normal),u.face=f,u.barycoord=d}return u}var Ls=class extends Mi{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Cn,u=Cn,d,f){super(null,a,o,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class extends zi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new Pt,_u=new Pt,Ho=[],yu=new cs,Ud=new Pt,Ma=new ut,Sa=new Ds,us=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ud)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),yu.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Sa.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(n),e.ray.intersectsSphere(Sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),_u.multiplyMatrices(n,Fr),Ma.matrixWorld=_u,Ma.raycast(e,Ho);for(let a=0,o=Ho.length;a<o;a++){let c=Ho[a];c.instanceId=r,c.object=this,t.push(c)}Ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,Ll,Wi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hr=new Ds,Fd=new Be(.5,.5),Wo=new O,qs=class{constructor(e=new Pi,t=new Pi,n=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],A=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-a,h-u,p-g,E-M).normalize(),s[1].setComponents(l+a,h+u,p+g,E+M).normalize(),s[2].setComponents(l+o,h+d,p+x,E+A).normalize(),s[3].setComponents(l-o,h-d,p-x,E-A).normalize(),n)s[4].setComponents(c,f,m,b).normalize(),s[5].setComponents(l-c,h-f,p-m,E-b).normalize();else if(s[4].setComponents(l-c,h-f,p-m,E-b).normalize(),t===Bi)s[5].setComponents(l+c,h+f,p+m,E+b).normalize();else if(t===Gr)s[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);let t=Fd.distanceTo(e.center);return hr.radius=.7071067811865476+t,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mu=new Pt,fl=class i{constructor(){this.coordinateSystem=Bi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Mu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new qs),n[s].setFromProjectionMatrix(Mu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new qs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var dl=class extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Su=new Pt,lh=new Zr,Xo=new Ds,qo=new O,Ns=class extends ni{constructor(e=new Zt,t=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Su.copy(s).invert(),lh.copy(e.ray).applyMatrix4(Su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=f,x=h;g<x;g++){let m=l.getX(g);qo.fromBufferAttribute(d,m),bu(qo,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=f,x=h;g<x;g++)qo.fromBufferAttribute(d,g),bu(qo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bu(i,e,t,n,s,r,a){let o=lh.distanceSqToPoint(i);if(o<t){let c=new O;lh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var La=class extends Mi{constructor(e=[],t=vr,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Mi{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Mi{constructor(e,t,n=ji,s,r,a,o=Cn,c=Cn,l,u=Ps,d=1){if(u!==Ps&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Na=class extends $i{constructor(e,t=ji,n=vr,s,r,a=Cn,o=Cn,c,l=Ps){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ua=class extends Mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zs=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function g(x,m,p,M,A,b,E,w,v,S,I){let C=b/v,L=E/S,F=b/2,J=E/2,R=w/2,W=v+1,ie=S+1,Q=0,pe=0,B=new O;for(let H=0;H<ie;H++){let $=H*L-J;for(let we=0;we<W;we++){let Ge=we*C-F;B[x]=Ge*M,B[m]=$*A,B[p]=R,l.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=w>0?1:-1,u.push(B.x,B.y,B.z),d.push(we/v),d.push(1-H/S),Q+=1}}for(let H=0;H<S;H++)for(let $=0;$<v;$++){let we=f+$+W*H,Ge=f+$+W*(H+1),te=f+($+1)+W*(H+1),me=f+($+1)+W*H;c.push(we,Ge,me),c.push(Ge,te,me),pe+=6}o.addGroup(h,pe,I),h+=pe,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vi=class i extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new O,u=new Be;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=n+d/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gi=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],g=0,x=[],m=n/2,p=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(h,2));function M(){let b=new O,E=new O,w=0,v=(t-e)/n;for(let S=0;S<=r;S++){let I=[],C=S/r,L=C*(t-e)+e;for(let F=0;F<=s;F++){let J=F/s,R=J*c+o,W=Math.sin(R),ie=Math.cos(R);E.x=L*W,E.y=-C*n+m,E.z=L*ie,d.push(E.x,E.y,E.z),b.set(W,v,ie).normalize(),f.push(b.x,b.y,b.z),h.push(J,1-C),I.push(g++)}x.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let C=x[I][S],L=x[I+1][S],F=x[I+1][S+1],J=x[I][S+1];(e>0||I!==0)&&(u.push(C,L,J),w+=3),(t>0||I!==r-1)&&(u.push(L,F,J),w+=3)}l.addGroup(p,w,0),p+=w}function A(b){let E=g,w=new Be,v=new O,S=0,I=b===!0?e:t,C=b===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*C,0),f.push(0,C,0),h.push(.5,.5),g++;let L=g;for(let F=0;F<=s;F++){let R=F/s*c+o,W=Math.cos(R),ie=Math.sin(R);v.x=I*ie,v.y=m*C,v.z=I*W,d.push(v.x,v.y,v.z),f.push(0,C,0),w.x=W*.5+.5,w.y=ie*.5*C+.5,h.push(w.x,w.y),g++}for(let F=0;F<s;F++){let J=E+F,R=L+F;b===!0?u.push(R,R+1,J):u.push(R+1,R,J),S+=3}l.addGroup(p,S,b===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Js=class i extends Gi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Jr=class i extends Zt{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Yt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,d=new O,f=new Be,h=new O,g=new O,x=new O,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,h.x=p*1,h.y=-m,h.z=p*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let M=0;M<=t;M++){let A=n+M*u*s,b=Math.sin(A),E=Math.cos(A);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*b,d.y=e[w].y,d.z=e[w].x*E,a.push(d.x,d.y,d.z),f.x=M/t,f.y=w/(e.length-1),o.push(f.x,f.y);let v=c[3*w+0]*b,S=c[3*w+1],I=c[3*w+0]*E;l.push(v,S,I)}}for(let M=0;M<t;M++)for(let A=0;A<e.length-1;A++){let b=A+M*e.length,E=b,w=b+e.length,v=b+e.length+1,S=b+1;r.push(E,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var fs=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*f-a;for(let A=0;A<l;A++){let b=A*d-r;g.push(b,-M,0),x.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let A=M+l*p,b=M+l*(p+1),E=M+1+l*(p+1),w=M+1+l*p;h.push(A,b,w),h.push(b,E,w)}this.setIndex(h),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Kr=class i extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],d=e,f=(t-e)/s,h=new O,g=new Be;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;h.x=d*Math.cos(p),h.y=d*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,A=M,b=M+n+1,E=M+n+2,w=M+1;o.push(A,b,w),o.push(b,E,w)}}this.setIndex(o),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var wi=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new O,f=new O,h=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],A=p/n,b=a+A*o,E=e*Math.cos(b),w=Math.sqrt(e*e-E*E),v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let I=S/t,C=s+I*r;d.x=-w*Math.cos(C),d.y=E,d.z=w*Math.sin(C),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(I+v,1-A),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let A=u[p][M+1],b=u[p][M],E=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&h.push(A,b,w),(p!==n-1||c<Math.PI)&&h.push(b,E,w)}this.setIndex(h),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function _r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wu(s))s.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mi(i){let e={};for(let t=0;t<i.length;t++){let n=_r(i[t]);for(let s in n)e[s]=n[s]}return e}function wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Od(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}var Jn={clone:_r,merge:mi},Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new It().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$r=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fr=class extends gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ur('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ur('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fa=class extends Ji{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var jr=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Or(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ks=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=e,o=2*t-n;break;case oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ah:a=e,c=2*n-t;break;case oh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,A=(-1-h)*m+(1.5+h)*x+.5*g,b=h*m-h*x;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+M*a[l+E]+A*a[c+E]+b*a[d+E];return r}},gl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*u;return r}},vl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends Ks{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let f=o*2,h=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=h*f+g*2,M=d[p],A=d[p+1],b=e*f+g*2,E=u[b],w=u[b+1],v=Vd(n,t,M,E,s);r[g]=vf(v,x,A,w,m)}return r}};function vf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function kd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Vd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=vf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=kd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Di=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yo(e.settings)&&(n.settings={inTangents:Or(e.settings.inTangents,Array),outTangents:Or(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case al:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return wt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Yo(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yo(this.settings)&&(Au(this.settings.inTangents,e),Au(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){bt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){bt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&gd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){bt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,f=d-n,h=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Au(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=al;var $s=class extends Di{constructor(e,t,n){super(e,t,n)}};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=ba;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}};_l.prototype.ValueTypeName="color";var yl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}};yl.prototype.ValueTypeName="number";var Ml=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)ls.slerpFlat(r,0,a,l-o,a,l,c);return r}},Oa=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Di{constructor(e,t,n){super(e,t,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=ba;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}};Sl.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new bl,wl=class{constructor(e){this.manager=e!==void 0?e:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr=class extends ni{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ba=class extends Qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ih=new Pt,Eu=new O,Cu=new O,za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Gr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zo=new O,Jo=new ls,rs=new O,ka=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,rs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zo,Jo,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xs=new O,Ru=new Be,Pu=new Be,di=class extends ka{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z),Xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Pu),t.subVectors(Pu,Ru)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Uc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ch=class extends za{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}},Va=class extends Qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},dr=class extends ka{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends za{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ga=class extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.target=new ni,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qs=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Br=-90,zr=1,ea=class extends ni{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new di(Br,zr,e,t);s.layers=this.layers,this.add(s);let r=new di(Br,zr,e,t);r.layers=this.layers,this.add(r);let a=new di(Br,zr,e,t);a.layers=this.layers,this.add(a);let o=new di(Br,zr,e,t);o.layers=this.layers,this.add(o);let c=new di(Br,zr,e,t);c.layers=this.layers,this.add(c);let l=new di(Br,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Tl=class extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Gd(){this._document.hidden===!1&&this.reset()}var Nh="\\[\\]\\.:\\/",Hd=new RegExp("["+Nh+"]","g"),Uh="[^"+Nh+"]",Wd="[^"+Nh.replace("\\.","")+"]",Xd=/((?:WC+[\/:])*)/.source.replace("WC",Uh),qd=/(WCOD+)?/.source.replace("WCOD",Wd),Yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),Zd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),Jd=new RegExp("^"+Xd+qd+Yd+Zd+"$"),Kd=["material","materials","bones","map"],uh=class{constructor(e,t,n){let s=n||bn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hd,"")}static parseTrackName(e){let t=Jd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=uh;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);var Iu=new Pt,Wa=class{constructor(e,t,n=0,s=1/0){this.ray=new Zr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,n,t);return n.sort(Du),n}};function Du(i,e){return i.distance-e.distance}function fh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fh(r[a],e,t,!0)}}var dh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Fh(i,e,t,n){let s=$d(n);switch(t){case Th:return i*e;case Ll:return i*e/s.components*s.byteLength;case Nl:return i*e/s.components*s.byteLength;case tr:return i*e*2/s.components*s.byteLength;case Ul:return i*e*2/s.components*s.byteLength;case Ah:return i*e*3/s.components*s.byteLength;case Li:return i*e*4/s.components*s.byteLength;case Fl:return i*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case kl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Gl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case so:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ro:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(i){switch(i){case ii:case Mh:return{byteLength:1,components:1};case sa:case Sh:case Sn:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case ji:case Pl:case Wi:return{byteLength:4,components:1};case bh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qd(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let x=d[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,$p=`uniform sampler2D dfgLUT;
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
}`,jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
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
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform float backgroundBlurriness;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,S0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,T0=`#define TOON
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
}`,A0=`#define TOON
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
}`,E0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,D0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:ep,alphahash_pars_fragment:tp,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:ap,aomap_pars_fragment:op,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:fp,iridescence_fragment:dp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:xp,color_fragment:_p,color_pars_fragment:yp,color_pars_vertex:Mp,color_vertex:Sp,common:bp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ap,emissivemap_fragment:Ep,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Lp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:$p,lights_fragment_begin:jp,lights_fragment_maps:Qp,lights_fragment_end:em,lightprobes_pars_fragment:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:fm,morphcolor_vertex:dm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:vm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:ym,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Em,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:km,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Km,uv_vertex:$m,worldpos_vertex:jm,background_vert:Qm,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:r0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:f0,meshbasic_vert:d0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:v0,meshmatcap_frag:x0,meshnormal_vert:_0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:S0,meshphysical_vert:b0,meshphysical_frag:w0,meshtoon_vert:T0,meshtoon_frag:A0,points_vert:E0,points_frag:C0,shadow_vert:R0,shadow_frag:P0,sprite_vert:I0,sprite_frag:D0},Ve={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},ms={basic:{uniforms:mi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:mi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:mi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:mi([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:mi([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new xe(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:mi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:mi([Ve.points,Ve.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:mi([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:mi([Ve.common,Ve.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:mi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:mi([Ve.sprite,Ve.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:mi([Ve.common,Ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:mi([Ve.lights,Ve.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};ms.physical={uniforms:mi([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var pc={r:0,b:0,g:0},L0=new Pt,Vf=new It;Vf.set(-1,0,0,0,1,0,0,0,1);function N0(i,e,t,n,s,r){let a=new xe(0),o=s===!0?0:1,c,l,u=null,d=0,f=null;function h(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(M){let A=!1,b=h(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,A){let b=h(A);b&&b.isCubeTexture?(l===void 0&&(l=new ut(new Zs(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:_r(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vf),l.material.toneMapped=Xt.getTransfer(b.colorSpace)!==nn,(u!==b||d!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ut(new fs(2,2),new yt({name:"BackgroundMaterial",uniforms:_r(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(b.colorSpace)!==nn,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(pc,Lh(i)),t.buffers.color.setClear(pc.r,pc.g,pc.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:p}}function U0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(L,F,J,R,W){let ie=!1,Q=d(L,R,J,F);r!==Q&&(r=Q,l(r.object)),ie=h(L,R,J,W),ie&&g(L,R,J,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,b(L,F,J,R),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,F,J,R){let W=R.wireframe===!0,ie=n[F.id];ie===void 0&&(ie={},n[F.id]=ie);let Q=L.isInstancedMesh===!0?L.id:0,pe=ie[Q];pe===void 0&&(pe={},ie[Q]=pe);let B=pe[J.id];B===void 0&&(B={},pe[J.id]=B);let H=B[W];return H===void 0&&(H=f(c()),B[W]=H),H}function f(L){let F=[],J=[],R=[];for(let W=0;W<t;W++)F[W]=0,J[W]=0,R[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:R,object:L,attributes:{},index:null}}function h(L,F,J,R){let W=r.attributes,ie=F.attributes,Q=0,pe=J.getAttributes();for(let B in pe)if(pe[B].location>=0){let $=W[B],we=ie[B];if(we===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(we=L.instanceColor)),$===void 0||$.attribute!==we||we&&$.data!==we.data)return!0;Q++}return r.attributesNum!==Q||r.index!==R}function g(L,F,J,R){let W={},ie=F.attributes,Q=0,pe=J.getAttributes();for(let B in pe)if(pe[B].location>=0){let $=ie[B];$===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let we={};we.attribute=$,$&&$.data&&(we.data=$.data),W[B]=we,Q++}r.attributes=W,r.attributesNum=Q,r.index=R}function x(){let L=r.newAttributes;for(let F=0,J=L.length;F<J;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){let J=r.newAttributes,R=r.enabledAttributes,W=r.attributeDivisors;J[L]=1,R[L]===0&&(i.enableVertexAttribArray(L),R[L]=1),W[L]!==F&&(i.vertexAttribDivisor(L,F),W[L]=F)}function M(){let L=r.newAttributes,F=r.enabledAttributes;for(let J=0,R=F.length;J<R;J++)F[J]!==L[J]&&(i.disableVertexAttribArray(J),F[J]=0)}function A(L,F,J,R,W,ie,Q){Q===!0?i.vertexAttribIPointer(L,F,J,W,ie):i.vertexAttribPointer(L,F,J,R,W,ie)}function b(L,F,J,R){x();let W=R.attributes,ie=J.getAttributes(),Q=F.defaultAttributeValues;for(let pe in ie){let B=ie[pe];if(B.location>=0){let H=W[pe];if(H===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let $=H.normalized,we=H.itemSize,Ge=e.get(H);if(Ge===void 0)continue;let te=Ge.buffer,me=Ge.type,re=Ge.bytesPerElement,ae=me===i.INT||me===i.UNSIGNED_INT||H.gpuType===Pl;if(H.isInterleavedBufferAttribute){let ne=H.data,Ee=ne.isInterleavedBuffer===!0?ne.stride:ne.itemSize,qe=H.offset;if(ne.isInstancedInterleavedBuffer||ne.isInstancedBufferAttribute){for(let Pe=0;Pe<B.locationSize;Pe++)p(B.location+Pe,ne.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)m(B.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Pe=0;Pe<B.locationSize;Pe++)A(B.location+Pe,we/B.locationSize,me,$,Ee*re,(qe+we/B.locationSize*Pe)*re,ae)}else{if(H.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)p(B.location+ne,H.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ne=0;ne<B.locationSize;ne++)A(B.location+ne,we/B.locationSize,me,$,we*re,we/B.locationSize*ne*re,ae)}}else if(Q!==void 0){let $=Q[pe];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(B.location,$);break;case 3:i.vertexAttrib3fv(B.location,$);break;case 4:i.vertexAttrib4fv(B.location,$);break;default:i.vertexAttrib1fv(B.location,$)}}}}M()}function E(){I();for(let L in n){let F=n[L];for(let J in F){let R=F[J];for(let W in R){let ie=R[W];for(let Q in ie)u(ie[Q].object),delete ie[Q];delete R[W]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let J in F){let R=F[J];for(let W in R){let ie=R[W];for(let Q in ie)u(ie[Q].object),delete ie[Q];delete R[W]}}delete n[L.id]}function v(L){for(let F in n){let J=n[F];for(let R in J){let W=J[R];if(W[L.id]===void 0)continue;let ie=W[L.id];for(let Q in ie)u(ie[Q].object),delete ie[Q];delete W[L.id]}}}function S(L){for(let F in n){let J=n[F],R=L.isInstancedMesh===!0?L.id:0,W=J[R];if(W!==void 0){for(let ie in W){let Q=W[ie];for(let pe in Q)u(Q[pe].object),delete Q[pe];delete W[ie]}delete J[R],Object.keys(J).length===0&&delete n[F]}}}function I(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function F0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function O0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Li&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let S=v===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==ii&&v!==Wi&&!S&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(wt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:E,samples:w}}function B0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pi,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let M=r?0:n,A=M*4,b=p.clippingState||null;c.value=b,b=u(g,f,A,h);for(let E=0;E!==A;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=h+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=h;A!==x;++A,b+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var co=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new La(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zs(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Xn});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===Us&&(t.minFilter=yi),new ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_f=256,z0=3,k0=20,Gf=256,Hf=16,V0=3,G0=new O,H0=new xe,aa=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ea(1,10,null),this._boxMesh=new ut(new Zs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=G0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(H0));let m=new ea(n,s,u);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=h,c.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_f,ff(e))}_fromTexture(e,t){e.mapping===vr||e.mapping===ia?this._setSize(e.image.length===0?_f:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yf(e,!1,!1),n=Math.log2(e)-z0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vr||e.mapping===ia?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=W0(),this._integrationMaterial=X0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Hf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-V0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Gf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=q0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function yf(i,e,t){return new co(i,{minFilter:Us,generateMipmaps:e,type:Sn,colorSpace:wa,depthBuffer:t})}function ho(i,e,t){return new yt({name:i,uniforms:e,vertexShader:kt.cube_vert,fragmentShader:t,side:oi,blending:Xn,depthTest:!1,depthWrite:!1})}function W0(){return ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gf}u

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
	`)}function X0(){return ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hf}},`

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
	`)}function q0(){return ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${k0}
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
	`)}function Mf(){return ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Sf(){return ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Y0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===El||h===Cl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new co(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,g=h===El||h===Cl,x=h===vr||h===ia;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new aa(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new aa(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===El?f.mapping=vr:h===Cl&&(f.mapping=ia),f}function c(f){let h=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Z0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ur("WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function d(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let M=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?Ia:Pa,b=new A(Math.ceil(M/3)*6,1),E=b.array;if(x!==null){let v=x.array;p=x.version;for(let S=0,I=0;S<M;S+=3){let C=v[S+0],L=v[S+1],F=v[S+2];E[I++]=C,E[I++]=L,E[I++]=L,E[I++]=F,E[I++]=F,E[I++]=C}}else{p=m.version;for(let v=0,S=0;v<M;v+=3){let I=v+0,C=v+1,L=v+2;E[S++]=I,E[S++]=C,E[S++]=C,E[S++]=L,E[S++]=L,E[S++]=I}}b.version=p;let w=r.get(g);w&&e.remove(w),r.set(g,b)}function f(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&d(g)}else d(g);return r.get(g)}function h(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:f,dispose:h}}function K0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,e,t){let n=new WeakMap,s=new sn;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let I=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;h===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let b=o.attributes.position.count*A,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*E*4*d),v=new Ca(w,b,E,d);v.type=Wi,v.needsUpdate=!0;let S=A*4;for(let C=0;C<d;C++){let L=m[C],F=p[C],J=M[C],R=b*E*4*C;for(let W=0;W<L.count;W++){let ie=W*S;h===!0&&(s.fromBufferAttribute(L,W),w[R+ie+0]=s.x,w[R+ie+1]=s.y,w[R+ie+2]=s.z,w[R+ie+3]=0),g===!0&&(s.fromBufferAttribute(F,W),w[R+ie+4]=s.x,w[R+ie+5]=s.y,w[R+ie+6]=s.z,w[R+ie+7]=0),x===!0&&(s.fromBufferAttribute(J,W),w[R+ie+8]=s.x,w[R+ie+9]=s.y,w[R+ie+10]=s.z,w[R+ie+11]=J.itemSize===4?s.w:1)}}f={count:d,texture:v,size:new Be(b,E)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Q0(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var eg={[Ya]:"LINEAR_TONE_MAPPING",[Za]:"REINHARD_TONE_MAPPING",[Ja]:"CINEON_TONE_MAPPING",[gr]:"ACES_FILMIC_TONE_MAPPING",[$a]:"AGX_TONE_MAPPING",[ja]:"NEUTRAL_TONE_MAPPING",[Ka]:"CUSTOM_TONE_MAPPING"};function tg(i,e,t,n,s,r){let a=new fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new Zt;u.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let d=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ut(u,d),h=new dr(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,M=null,A=[],b=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let v=0;v<A.length;v++){let S=A[v];S.setSize&&S.setSize(E,w)}},this.setEffects=function(E){A=E,b=A.length>0&&A[0].isRenderPass===!0;let w=a.width,v=a.height;A.length>0&&o===null&&(o=new fn(w,v,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),c=new fn(w,v,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new $i(w,v),r===!0&&(l.format=Qi,l.type=Fs)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<A.length;I++){let C=A[I];C.setSize&&C.setSize(w,v),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(E,w){if(m||E.toneMapping===ds&&A.length===0)return!1;if(M=w,w!==null){let v=w.width,S=w.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return b===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=ds,!0},this.hasRenderPass=function(){return b},this.end=function(E,w){E.toneMapping=p,m=!0;let v=a,S=o;for(let I=0;I<A.length;I++){let C=A[I];C.enabled!==!1&&(C.render(E,S,v,w),C.needsSwap!==!1&&(v=S,S=S===o?c:o))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,d.defines={},Xt.getTransfer(g)===nn&&(d.defines.SRGB_TRANSFER="");let I=eg[x];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(M),E.render(f,h),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Wf=new Mi,Xf=new $i(1,1),qf=new Na(1),Yf=new Ca,Zf=new hl,Jf=new La,bf=[],wf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Ef=new Float32Array(4);function oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Kn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=wf[e];t===void 0&&(t=new Int32Array(e),wf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kn(t,e))return;i.uniform2fv(this.addr,e),$n(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kn(t,e))return;i.uniform3fv(this.addr,e),$n(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kn(t,e))return;i.uniform4fv(this.addr,e),$n(t,e)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$n(t,e)}else{if(Kn(t,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),$n(t,n)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$n(t,e)}else{if(Kn(t,n))return;Af.set(n),i.uniformMatrix3fv(this.addr,!1,Af),$n(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$n(t,e)}else{if(Kn(t,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),$n(t,n)}}function cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kn(t,e))return;i.uniform2iv(this.addr,e),$n(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kn(t,e))return;i.uniform3iv(this.addr,e),$n(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kn(t,e))return;i.uniform4iv(this.addr,e),$n(t,e)}}function dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kn(t,e))return;i.uniform2uiv(this.addr,e),$n(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kn(t,e))return;i.uniform3uiv(this.addr,e),$n(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kn(t,e))return;i.uniform4uiv(this.addr,e),$n(t,e)}}function xc(i){return i.version===0&&(i.compareFunction=Ph,i.needsUpdate=!0),i}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=xc(Xf):r=Wf,t.setTexture2D(e||r,s)}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zf,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=xc(qf):r=Jf,t.setTextureCube(e||r,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yf,s)}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return yg}}function Sg(i,e){i.uniform1fv(this.addr,e)}function bg(i,e){let t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}function wg(i,e){let t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}function Tg(i,e){let t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}function Ag(i,e){let t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Eg(i,e){let t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cg(i,e){let t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rg(i,e){i.uniform1iv(this.addr,e)}function Pg(i,e){i.uniform2iv(this.addr,e)}function Ig(i,e){i.uniform3iv(this.addr,e)}function Dg(i,e){i.uniform4iv(this.addr,e)}function Lg(i,e){i.uniform1uiv(this.addr,e)}function Ng(i,e){i.uniform2uiv(this.addr,e)}function Ug(i,e){i.uniform3uiv(this.addr,e)}function Fg(i,e){i.uniform4uiv(this.addr,e)}function Og(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),$n(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xc(Xf):a=Wf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bg(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),$n(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zf,r[a])}function zg(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),$n(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=xc(qf):a=Jf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function kg(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),$n(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yf,r[a])}function Vg(i){switch(i){case 5126:return Sg;case 35664:return bg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Eg;case 35676:return Cg;case 5124:case 35670:return Rg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Lg;case 36294:return Ng;case 36295:return Ug;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}var zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}},kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}},Vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function Cf(i,e){i.seq.push(e),i.map[e.id]=e}function Gg(i,e,t){let n=i.name,s=n.length;for(Oh.lastIndex=0;;){let r=Oh.exec(n),a=Oh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cf(t,l===void 0?new zh(o,i,e):new kh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Vh(o),Cf(t,d)),t=d}}}var ra=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Gg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Rf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hg=37297,Wg=0;function Xg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pf=new It;function qg(i){Xt._getMatrix(Pf,Xt.workingColorSpace,i);let e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Ta:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function If(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xg(i.getShaderSource(e),o)}else return r}function Yg(i,e){let t=qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zg={[Ya]:"Linear",[Za]:"Reinhard",[Ja]:"Cineon",[gr]:"ACESFilmic",[$a]:"AgX",[ja]:"Neutral",[Ka]:"Custom"};function Jg(i,e){let t=Zg[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new O;function Kg(){Xt.getLuminanceCoefficients(mc);let i=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function jg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lo(i){return i!==""}function Df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(i){return i.replace(ev,tv)}function tv(i,e){let t=kt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gh(t)}var nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(i){return i.replace(nv,iv)}function iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var sv={[pr]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function rv(i){return sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var av={[ia]:"ENVMAP_MODE_REFRACTION"};function ov(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":av[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lv={[_h]:"ENVMAP_BLENDING_MULTIPLY",[Ku]:"ENVMAP_BLENDING_MIX",[$u]:"ENVMAP_BLENDING_ADD"};function cv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lv[i.combine]||"ENVMAP_BLENDING_NONE"}function hv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=rv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ov(t),d=cv(t),f=$g(t),h=jg(r),g=s.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(lo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(lo).join(`
`),m.length>0&&(m+=`
`)):(x=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?kt.tonemapping_pars_fragment:"",t.toneMapping!==ds?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),Kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),a=Gh(a),a=Df(a,t),a=Lf(a,t),o=Gh(o),o=Df(o,t),o=Lf(o,t),a=Nf(a),o=Nf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+x+a,A=p+m+o,b=Rf(s,s.VERTEX_SHADER,M),E=Rf(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(b)||"",J=s.getShaderInfoLog(E)||"",R=L.trim(),W=F.trim(),ie=J.trim(),Q=!0,pe=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,E);else{let B=If(s,b,"vertex"),H=If(s,E,"fragment");bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+B+`
`+H)}else R!==""?wt("WebGLProgram: Program Info Log:",R):(W===""||ie==="")&&(pe=!1);pe&&(C.diagnostics={runnable:Q,programLog:R,vertexShader:{log:W,prefix:x},fragmentShader:{log:ie,prefix:m}})}s.deleteShader(b),s.deleteShader(E),v=new ra(s,g),S=Qg(s,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,Hg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var uv=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wh(e),t.set(e,n)),n}},Wh=class{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}};function fv(i){return i===tr||i===so||i===ro}function dv(i,e,t,n,s,r){let a=new Xr,o=new Hh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,S,I,C,L,F){let J=C.fog,R=L.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||W,ie),pe=f[v.type],B=n.precision;v.precision!==null&&(B=n.getMaxPrecision(v.precision),B!==v.precision&&wt("WebGLProgram.getParameters:",v.precision,"not supported, using",B,"instead."));let H=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,$=H!==void 0?H.length:0,we=0;R.morphAttributes.position!==void 0&&(we=1),R.morphAttributes.normal!==void 0&&(we=2),R.morphAttributes.color!==void 0&&(we=3);let Ge,te,me,re;if(pe){let ze=ms[pe];Ge=ze.vertexShader,te=ze.fragmentShader}else{Ge=v.vertexShader,te=v.fragmentShader;let ze=o.getVertexShaderStage(v),Qt=o.getFragmentShaderStage(v);o.update(v,ze,Qt),me=ze.id,re=Qt.id}let ae=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),Ee=L.isInstancedMesh===!0,qe=L.isBatchedMesh===!0,Pe=!!v.map,rt=!!v.matcap,Ze=!!Q,Xe=Ze&&Q.isPMREMTexture===!0,Ut=!!v.aoMap,zt=!!v.lightMap,Dt=!!v.bumpMap&&v.wireframe===!1,ht=!!v.normalMap,rn=!!v.displacementMap,At=!!v.emissiveMap,cn=!!v.metalnessMap,an=!!v.roughnessMap,dn=v.anisotropy>0,N=v.clearcoat>0,$t=v.diffuseRoughness>0,Ct=v.dispersion>0,Gt=v.retroreflectivity>0,Ie=v.iridescence>0,ln=v.sheen>0,Ye=v.transmission>0,st=dn&&!!v.anisotropyMap,T=N&&!!v.clearcoatMap,_=N&&!!v.clearcoatNormalMap,X=N&&!!v.clearcoatRoughnessMap,_e=$t&&!!v.diffuseRoughnessMap,ue=Ie&&!!v.iridescenceMap,ve=Ie&&!!v.iridescenceThicknessMap,V=ln&&!!v.sheenColorMap,z=ln&&!!v.sheenRoughnessMap,k=!!v.specularMap,Te=!!v.specularColorMap,P=!!v.specularIntensityMap,he=Ye&&!!v.transmissionMap,le=Ye&&!!v.thicknessMap,Re=!!v.gradientMap,Ce=!!v.alphaMap,De=v.alphaTest>0,it=!!v.alphaHash,Ke=!!v.extensions,be=ds;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(be=i.toneMapping);let lt=Xe?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,Nt={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:te,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:B,batching:qe,batchingColor:qe&&L._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&L.instanceColor!==null,instancingMorph:Ee&&L.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:rt,envMap:Ze,envMapMode:Ze&&Q.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?lt.length-1:null,envMapSize:Xe?lt[0].width:null,aoMap:Ut,lightMap:zt,bumpMap:Dt,normalMap:ht,displacementMap:rn,emissiveMap:At,normalMapObjectSpace:ht&&v.normalMapType===ef,normalMapTangentSpace:ht&&v.normalMapType===ao,packedNormalMap:ht&&v.normalMapType===ao&&fv(v.normalMap.format),metalnessMap:cn,roughnessMap:an,anisotropy:dn,anisotropyMap:st,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:X,diffuseRoughness:$t,diffuseRoughnessMap:_e,dispersion:Ct,retroreflection:Gt,iridescence:Ie,iridescenceMap:ue,iridescenceThicknessMap:ve,sheen:ln,sheenColorMap:V,sheenRoughnessMap:z,specularMap:k,specularColorMap:Te,specularIntensityMap:P,transmission:Ye,transmissionMap:he,thicknessMap:le,gradientMap:Re,opaque:v.transparent===!1&&v.blending===na&&v.alphaToCoverage===!1,alphaMap:Ce,alphaTest:De,alphaHash:it,combine:v.combine,mapUv:Pe&&h(v.map.channel),aoMapUv:Ut&&h(v.aoMap.channel),lightMapUv:zt&&h(v.lightMap.channel),bumpMapUv:Dt&&h(v.bumpMap.channel),normalMapUv:ht&&h(v.normalMap.channel),displacementMapUv:rn&&h(v.displacementMap.channel),emissiveMapUv:At&&h(v.emissiveMap.channel),metalnessMapUv:cn&&h(v.metalnessMap.channel),roughnessMapUv:an&&h(v.roughnessMap.channel),anisotropyMapUv:st&&h(v.anisotropyMap.channel),clearcoatMapUv:T&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&h(v.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:V&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:z&&h(v.sheenRoughnessMap.channel),specularMapUv:k&&h(v.specularMap.channel),specularColorMapUv:Te&&h(v.specularColorMap.channel),specularIntensityMapUv:P&&h(v.specularIntensityMap.channel),transmissionMapUv:he&&h(v.transmissionMap.channel),thicknessMapUv:le&&h(v.thicknessMap.channel),alphaMapUv:Ce&&h(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ht||dn),vertexNormals:!!R.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Pe||Ce),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||R.attributes.normal===void 0&&ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:we,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(ze=>ze.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===nn,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(v.emissiveMap.colorSpace)===nn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===oi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ke&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&v.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(S,v),p(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function p(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){let S=f[v.type],I;if(S){let C=ms[S];I=Jn.clone(C.uniforms)}else I=v.uniforms;return I}function A(v,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new hv(i,S,v,s),l.push(I),u.set(S,I)),I}function b(v){if(--v.usedTimes===0){let S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:w}}function pv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Of(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,x,m,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=g,M.materialVariant=a(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function c(f,h,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let A=o(f,h,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function l(f,h,g,x,m,p){let M=o(f,h,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(f,h){t.length>1&&t.sort(f||mv),n.length>1&&n.sort(h||Ff),s.length>1&&s.sort(h||Ff)}function d(){for(let f=e,h=i.length;f<h;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function gv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Of,i.set(n,[a])):s>=r.length?(a=new Of,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new xe};break;case"SpotLight":t={position:new O,direction:new O,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var _v=0;function yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mv(i){let e=new vv,t=xv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new Pt,a=new Pt;function o(l){let u=0,d=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,A=0,b=0,E=0,w=0,v=0,S=0,I=0,C=0;l.sort(yv);for(let F=0,J=l.length;F<J;F++){let R=l[F],W=R.color,ie=R.intensity,Q=R.distance,pe=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===tr?pe=R.shadow.map.texture:pe=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=W.r*ie,d+=W.g*ie,f+=W.b*ie;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],ie);C++}else if(R.isSunLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,$=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=pe;let we=H.getViewportCount();for(let Ge=0;Ge<we;Ge++)n.sunShadowMatrix[x+Ge]=H.getMatrix(Ge),n.sunShadowCascade[x+Ge]=H._cascadeData[Ge];x+=we,g++}n.sun[h]=B,h++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,$=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=pe,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=B,m++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(W).multiplyScalar(ie),B.distance=Q,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[M]=B;let H=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,H.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[M]=H.matrix,R.castShadow){let $=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=pe,v++}M++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(W).multiplyScalar(ie),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[A]=B,A++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let H=R.shadow,$=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=pe,n.pointShadowMatrix[p]=R.shadow.matrix,w++}n.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(ie),B.groundColor.copy(R.groundColor).multiplyScalar(ie),n.hemi[b]=B,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.sunLength!==h||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==b||L.numSunShadows!==g||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==v||L.numSpotMaps!==S||L.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,L.sunLength=h,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=b,L.numSunShadows=g,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=v,L.numSpotMaps=S,L.numLightProbes=C,n.version=_v++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let b=l[M];if(b.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(b.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Bf(i){let e=new Mv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Bf(i),e.set(s,[o])):r>=a.length?(o=new Bf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
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
}`,Tv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Av=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],zf=new Pt,oo=new O,Bh=new O;function Ev(i,e,t){let n=new qs,s=new Be,r=new Be,a=new sn,o=new jr,c=new pl,l={},u=t.maxTextureSize,d={[er]:oi,[oi]:er,[vn]:vn},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:bv,fragmentShader:wv}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let p=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Uu&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pr);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Xn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let J=p!==this.type;J&&v.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(W=>W.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,W=w.length;R<W;R++){let ie=w[R],Q=ie.shadow;if(Q===void 0){wt("WebGLShadowMap:",ie,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let pe=Q.getFrameExtents();s.multiply(pe),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,Q.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=B,Q.map===null||J===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ta){if(ie.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new fn(s.x,s.y,{format:tr,type:Sn,minFilter:yi,magFilter:yi,generateMipmaps:!1}),Q.map.texture.name=ie.name+".shadowMap",Q.map.depthTexture=new $i(s.x,s.y,Wi),Q.map.depthTexture.name=ie.name+".shadowMapDepth",Q.map.depthTexture.format=Ps,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn}else ie.isPointLight?(Q.map=new co(s.x),Q.map.depthTexture=new Na(s.x,ji)):(Q.map=new fn(s.x,s.y),Q.map.depthTexture=new $i(s.x,s.y,ji)),Q.map.depthTexture.name=ie.name+".shadowMap",Q.map.depthTexture.format=Ps,this.type===pr?(Q.map.depthTexture.compareFunction=B?Rh:Ch,Q.map.depthTexture.minFilter=yi,Q.map.depthTexture.magFilter=yi):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let H=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();ie.isPointLight!==!0&&Q.updateMatrices(ie,S);let $=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:S.layers;for(let we=0;we<H;we++){let Ge=Q.getCamera(we);if(ie.isPointLight){let te=Q.camera,me=Q.matrix,re=ie.distance||te.far;re!==te.far&&(te.far=re,te.updateProjectionMatrix()),oo.setFromMatrixPosition(ie.matrixWorld),te.position.copy(oo),Bh.copy(te.position),Bh.add(Tv[we]),te.up.copy(Av[we]),te.lookAt(Bh),te.updateMatrixWorld(),me.makeTranslation(-oo.x,-oo.y,-oo.z),zf.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(zf,te.coordinateSystem,te.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,we),i.clear();else{we===0&&(i.setRenderTarget(Q.map),i.clear());let te=Q.getViewport(we);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),F.viewport(a)}n=Q.getFrustum(we),b(v,S,Ge,ie,$,this.type)}Q.isPointLightShadow!==!0&&this.type===ta&&M(Q,S),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,C,L)};function M(w,v){let S=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new fn(s.x,s.y,{format:tr,type:Sn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(v,null,S,f,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(v,null,S,h,x,null)}function A(w,v,S,I){let C=null,L=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let F=C.uuid,J=v.uuid,R=l[F];R===void 0&&(R={},l[F]=R);let W=R[J];W===void 0&&(W=C.clone(),R[J]=W,v.addEventListener("dispose",E)),C=W}if(C.visible=v.visible,C.wireframe=v.wireframe,I===ta?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:d[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=S}return C}function b(w,v,S,I,C,L){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===ta)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let R=e.update(w),W=w.material;if(Array.isArray(W)){let ie=R.groups;for(let Q=0,pe=ie.length;Q<pe;Q++){let B=ie[Q],H=W[B.materialIndex];if(H&&H.visible){let $=A(w,H,I,L);w.onBeforeShadow(i,w,v,S,R,$,B),i.renderBufferDirect(S,null,R,$,w,B),w.onAfterShadow(i,w,v,S,R,$,B)}}}else if(W.visible){let ie=A(w,W,I,L);w.onBeforeShadow(i,w,v,S,R,ie,null),i.renderBufferDirect(S,null,R,ie,w,null),w.onAfterShadow(i,w,v,S,R,ie,null)}}let J=w.children;for(let R=0,W=J.length;R<W;R++)b(J[R],v,S,I,C,L)}function E(w){w.target.removeEventListener("dispose",E);for(let S in l){let I=l[S],C=w.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function Cv(i,e){function t(){let P=!1,he=new sn,le=null,Re=new sn(0,0,0,0);return{setMask:function(Ce){le!==Ce&&!P&&(i.colorMask(Ce,Ce,Ce,Ce),le=Ce)},setLocked:function(Ce){P=Ce},setClear:function(Ce,De,it,Ke,be){be===!0&&(Ce*=Ke,De*=Ke,it*=Ke),he.set(Ce,De,it,Ke),Re.equals(he)===!1&&(i.clearColor(Ce,De,it,Ke),Re.copy(he))},reset:function(){P=!1,le=null,Re.set(-1,0,0,0)}}}function n(){let P=!1,he=!1,le=null,Re=null,Ce=null;return{setReversed:function(De){if(he!==De){let it=e.get("EXT_clip_control");De?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),he=De;let Ke=Ce;Ce=null,this.setClear(Ke)}},getReversed:function(){return he},setTest:function(De){De?ne(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(De){le!==De&&!P&&(i.depthMask(De),le=De)},setFunc:function(De){if(he&&(De=uf[De]),Re!==De){switch(De){case jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case Vr:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=De}},setLocked:function(De){P=De},setClear:function(De){Ce!==De&&(Ce=De,he&&(De=1-De),i.clearDepth(De))},reset:function(){P=!1,le=null,Re=null,Ce=null,he=!1}}}function s(){let P=!1,he=null,le=null,Re=null,Ce=null,De=null,it=null,Ke=null,be=null;return{setTest:function(lt){P||(lt?ne(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(lt){he!==lt&&!P&&(i.stencilMask(lt),he=lt)},setFunc:function(lt,Nt,ze){(le!==lt||Re!==Nt||Ce!==ze)&&(i.stencilFunc(lt,Nt,ze),le=lt,Re=Nt,Ce=ze)},setOp:function(lt,Nt,ze){(De!==lt||it!==Nt||Ke!==ze)&&(i.stencilOp(lt,Nt,ze),De=lt,it=Nt,Ke=ze)},setLocked:function(lt){P=lt},setClear:function(lt){be!==lt&&(i.clearStencil(lt),be=lt)},reset:function(){P=!1,he=null,le=null,Re=null,Ce=null,De=null,it=null,Ke=null,be=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,u={},d={},f={},h=new WeakMap,g=[],x=null,m=!1,p=null,M=null,A=null,b=null,E=null,w=null,v=null,S=new xe(0,0,0),I=0,C=!1,L=null,F=null,J=null,R=null,W=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,pe=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(B)[1]),Q=pe>=1):B.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Q=pe>=2);let H=null,$={},we=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),te=new sn().fromArray(we),me=new sn().fromArray(Ge);function re(P,he,le,Re){let Ce=new Uint8Array(4),De=i.createTexture();i.bindTexture(P,De),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<le;it++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(he+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return De}let ae={};ae[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Vr),Dt(!1),ht(ph),ne(i.CULL_FACE),Ut(Xn);function ne(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ee(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function qe(P,he){return f[P]!==he?(i.bindFramebuffer(P,he),f[P]=he,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(P,he){let le=g,Re=!1;if(P){le=h.get(he),le===void 0&&(le=[],h.set(he,le));let Ce=P.textures;if(le.length!==Ce.length||le[0]!==i.COLOR_ATTACHMENT0){for(let De=0,it=Ce.length;De<it;De++)le[De]=i.COLOR_ATTACHMENT0+De;le.length=Ce.length,Re=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Re=!0);Re&&i.drawBuffers(le)}function rt(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let Ze={[Hi]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};Ze[Bu]=i.MIN,Ze[zu]=i.MAX;let Xe={[mr]:i.ZERO,[ku]:i.ONE,[Vu]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[qa]:i.DST_COLOR,[Xa]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(P,he,le,Re,Ce,De,it,Ke,be,lt){if(P===Xn){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),P!==Al){if(P!==p||lt!==C){if((M!==Hi||E!==Hi)&&(i.blendEquation(i.FUNC_ADD),M=Hi,E=Hi),lt)switch(P){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:bt("WebGLState: Invalid blending: ",P);break}else switch(P){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",P);break}A=null,b=null,w=null,v=null,S.set(0,0,0),I=0,p=P,C=lt}return}Ce=Ce||he,De=De||le,it=it||Re,(he!==M||Ce!==E)&&(i.blendEquationSeparate(Ze[he],Ze[Ce]),M=he,E=Ce),(le!==A||Re!==b||De!==w||it!==v)&&(i.blendFuncSeparate(Xe[le],Xe[Re],Xe[De],Xe[it]),A=le,b=Re,w=De,v=it),(Ke.equals(S)===!1||be!==I)&&(i.blendColor(Ke.r,Ke.g,Ke.b,be),S.copy(Ke),I=be),p=P,C=!1}function zt(P,he){P.side===vn?Ee(i.CULL_FACE):ne(i.CULL_FACE);let le=P.side===oi;he&&(le=!le),Dt(le),P.blending===na&&P.transparent===!1?Ut(Xn):Ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Re=P.stencilWrite;o.setTest(Re),Re&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){L!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),L=P)}function ht(P){P!==Lu?(ne(i.CULL_FACE),P!==F&&(P===ph?i.cullFace(i.BACK):P===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),F=P}function rn(P){P!==J&&(Q&&i.lineWidth(P),J=P)}function At(P,he,le){P?(ne(i.POLYGON_OFFSET_FILL),(R!==he||W!==le)&&(R=he,W=le,a.getReversed()&&(he=-he,le=-le),i.polygonOffset(he,le))):Ee(i.POLYGON_OFFSET_FILL)}function cn(P){P?ne(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function an(P){P===void 0&&(P=i.TEXTURE0+ie-1),H!==P&&(i.activeTexture(P),H=P)}function dn(P,he,le){le===void 0&&(H===null?le=i.TEXTURE0+ie-1:le=H);let Re=$[le];Re===void 0&&(Re={type:void 0,texture:void 0},$[le]=Re),(Re.type!==P||Re.texture!==he)&&(H!==le&&(i.activeTexture(le),H=le),i.bindTexture(P,he||ae[P]),Re.type=P,Re.texture=he)}function N(){let P=$[H];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(P){bt("WebGLState:",P)}}function Ct(){try{i.compressedTexImage3D(...arguments)}catch(P){bt("WebGLState:",P)}}function Gt(){try{i.texSubImage2D(...arguments)}catch(P){bt("WebGLState:",P)}}function Ie(){try{i.texSubImage3D(...arguments)}catch(P){bt("WebGLState:",P)}}function ln(){try{i.compressedTexSubImage2D(...arguments)}catch(P){bt("WebGLState:",P)}}function Ye(){try{i.compressedTexSubImage3D(...arguments)}catch(P){bt("WebGLState:",P)}}function st(){try{i.texStorage2D(...arguments)}catch(P){bt("WebGLState:",P)}}function T(){try{i.texStorage3D(...arguments)}catch(P){bt("WebGLState:",P)}}function _(){try{i.texImage2D(...arguments)}catch(P){bt("WebGLState:",P)}}function X(){try{i.texImage3D(...arguments)}catch(P){bt("WebGLState:",P)}}function _e(P){return d[P]!==void 0?d[P]:i.getParameter(P)}function ue(P,he){d[P]!==he&&(i.pixelStorei(P,he),d[P]=he)}function ve(P){te.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),te.copy(P))}function V(P){me.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),me.copy(P))}function z(P,he){let le=l.get(he);le===void 0&&(le=new WeakMap,l.set(he,le));let Re=le.get(P);Re===void 0&&(Re=i.getUniformBlockIndex(he,P.name),i.uniformBlockBinding(he,Re,Re),le.set(P,Re))}function k(P,he,le){let Ce=l.get(he).get(P);c[Ce]!==le&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ce,le),c[Ce]=le)}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},H=null,$={},f={},c={},h=new WeakMap,g=[],x=null,m=!1,p=null,M=null,A=null,b=null,E=null,w=null,v=null,S=new xe(0,0,0),I=0,C=!1,L=null,F=null,J=null,R=null,W=null,te.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Ee,bindFramebuffer:qe,drawBuffers:Pe,useProgram:rt,setBlending:Ut,setMaterial:zt,setFlipSided:Dt,setCullFace:ht,setLineWidth:rn,setPolygonOffset:At,setScissorTest:cn,activeTexture:an,bindTexture:dn,unbindTexture:N,compressedTexImage2D:$t,compressedTexImage3D:Ct,texImage2D:_,texImage3D:X,pixelStorei:ue,getParameter:_e,updateUBOMapping:z,uniformBlockBinding:k,texStorage2D:st,texStorage3D:T,texSubImage2D:Gt,texSubImage3D:Ie,compressedTexSubImage2D:ln,compressedTexSubImage3D:Ye,scissor:ve,viewport:V,reset:Te}}function Rv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,d=new Set,f,h=new WeakMap,g=new Set,x=new FinalizationRegistry(T=>g.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,_){return m?new OffscreenCanvas(T,_):Aa("canvas")}function M(T,_,X){let _e=1,ue=st(T);if((ue.width>X||ue.height>X)&&(_e=X/Math.max(ue.width,ue.height)),_e<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ve=Math.floor(_e*ue.width),V=Math.floor(_e*ue.height);f===void 0&&(f=p(ve,V));let z=_?p(ve,V):f;return z.width=ve,z.height=V,z.getContext("2d").drawImage(T,0,0,ve,V),wt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ve+"x"+V+")."),z}else return"data"in T&&wt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),T;return T}function A(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,_,X,_e,ue,ve=!1){if(T!==null){if(i[T]!==void 0)return i[T];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V;_e&&(V=e.get("EXT_texture_norm16"),V||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=_;if(_===i.RED&&(X===i.FLOAT&&(z=i.R32F),X===i.HALF_FLOAT&&(z=i.R16F),X===i.UNSIGNED_BYTE&&(z=i.R8),X===i.UNSIGNED_SHORT&&V&&(z=V.R16_EXT),X===i.SHORT&&V&&(z=V.R16_SNORM_EXT)),_===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(z=i.R8UI),X===i.UNSIGNED_SHORT&&(z=i.R16UI),X===i.UNSIGNED_INT&&(z=i.R32UI),X===i.BYTE&&(z=i.R8I),X===i.SHORT&&(z=i.R16I),X===i.INT&&(z=i.R32I)),_===i.RG&&(X===i.FLOAT&&(z=i.RG32F),X===i.HALF_FLOAT&&(z=i.RG16F),X===i.UNSIGNED_BYTE&&(z=i.RG8),X===i.UNSIGNED_SHORT&&V&&(z=V.RG16_EXT),X===i.SHORT&&V&&(z=V.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(z=i.RG8UI),X===i.UNSIGNED_SHORT&&(z=i.RG16UI),X===i.UNSIGNED_INT&&(z=i.RG32UI),X===i.BYTE&&(z=i.RG8I),X===i.SHORT&&(z=i.RG16I),X===i.INT&&(z=i.RG32I)),_===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(z=i.RGB8UI),X===i.UNSIGNED_SHORT&&(z=i.RGB16UI),X===i.UNSIGNED_INT&&(z=i.RGB32UI),X===i.BYTE&&(z=i.RGB8I),X===i.SHORT&&(z=i.RGB16I),X===i.INT&&(z=i.RGB32I)),_===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),X===i.UNSIGNED_INT&&(z=i.RGBA32UI),X===i.BYTE&&(z=i.RGBA8I),X===i.SHORT&&(z=i.RGBA16I),X===i.INT&&(z=i.RGBA32I)),_===i.RGB&&(X===i.UNSIGNED_SHORT&&V&&(z=V.RGB16_EXT),X===i.SHORT&&V&&(z=V.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),_===i.RGBA){let k=ve?Ta:Xt.getTransfer(ue);X===i.FLOAT&&(z=i.RGBA32F),X===i.HALF_FLOAT&&(z=i.RGBA16F),X===i.UNSIGNED_BYTE&&(z=k===nn?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&V&&(z=V.RGBA16_EXT),X===i.SHORT&&V&&(z=V.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function v(T,_){let X;return T?_===null||_===ji||_===Fs?X=i.DEPTH24_STENCIL8:_===Wi?X=i.DEPTH32F_STENCIL8:_===sa&&(X=i.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ji||_===Fs?X=i.DEPTH_COMPONENT24:_===Wi?X=i.DEPTH_COMPONENT32F:_===sa&&(X=i.DEPTH_COMPONENT16),X}function S(T,_){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==yi?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function I(T){let _=new WeakRef(T);n.get(T).__ref=_,g.add(_),x.register(T,_,_)}function C(T){let _=n.get(T).__ref;_!==void 0&&(g.delete(_),x.unregister(_))}function L(T){J(T.target)}function F(T){R(T.target)}function J(T){T.removeEventListener("dispose",L),C(T),ie(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&d.delete(T)}function R(T){T.removeEventListener("dispose",F),C(T),pe(T)}function W(){for(let T of g){let _=T.deref();_!==void 0&&(_.isRenderTarget===!0?R(_):J(_))}g.clear(),d.clear()}function ie(T){let _=n.get(T);if(_.__webglInit===void 0)return;let X=T.source,_e=h.get(X);if(_e){let ue=_e[_.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&Q(T),Object.keys(_e).length===0&&h.delete(X)}n.remove(T)}function Q(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let X=T.source,_e=h.get(X);delete _e[_.__cacheKey],a.memory.textures--}function pe(T){let _=n.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();let X=T.depthTexture;if(X&&X.renderTarget===T&&J(X),T.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(_.__webglFramebuffer[ue]))for(let ve=0;ve<_.__webglFramebuffer[ue].length;ve++)i.deleteFramebuffer(_.__webglFramebuffer[ue][ve]);else i.deleteFramebuffer(_.__webglFramebuffer[ue]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ue])}else{if(Array.isArray(_.__webglFramebuffer))for(let ue=0;ue<_.__webglFramebuffer.length;ue++)i.deleteFramebuffer(_.__webglFramebuffer[ue]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ue=0;ue<_.__webglColorRenderbuffer.length;ue++)_.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ue]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let _e=T.textures;for(let ue=0,ve=_e.length;ue<ve;ue++){let V=n.get(_e[ue]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(_e[ue])}n.remove(T)}let B=0;function H(){B=0}function $(){return B}function we(T){B=T}function Ge(){let T=B;return T>=s.maxTextures&&wt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function te(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function me(T,_){let X=n.get(T);if(T.isVideoTexture&&ln(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&X.__version!==T.version){let _e=T.image;if(_e===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(X,T,_);return}}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+_)}function re(T,_){let X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){zt(X,T,_);return}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+_)}function ae(T,_){let X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){zt(X,T,_);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+_)}function ne(T,_){let X=n.get(T);if(T.version>0&&X.__version!==T.version){Dt(X,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+_)}let Ee={[ki]:i.REPEAT,[as]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},qe={[Cn]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[Qa]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Us]:i.LINEAR_MIPMAP_LINEAR},Pe={[nf]:i.NEVER,[Ph]:i.ALWAYS,[sf]:i.LESS,[Ch]:i.LEQUAL,[rf]:i.EQUAL,[Rh]:i.GEQUAL,[af]:i.GREATER,[of]:i.NOTEQUAL};function rt(T,_){if(_.type===Wi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yi||_.magFilter===Rl||_.magFilter===Qa||_.magFilter===Us||_.minFilter===yi||_.minFilter===Rl||_.minFilter===Qa||_.minFilter===Us)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ee[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ee[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ee[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,qe[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,qe[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Cn||_.minFilter!==Qa&&_.minFilter!==Us||_.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(T,_){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",L),I(_));let _e=_.source,ue=h.get(_e);ue===void 0&&(ue={},h.set(_e,ue));let ve=te(_);if(ve!==T.__cacheKey){ue[ve]===void 0&&(ue[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ue[ve].usedTimes++;let V=ue[T.__cacheKey];V!==void 0&&(ue[T.__cacheKey].usedTimes--,V.usedTimes===0&&Q(_)),T.__cacheKey=ve,T.__webglTexture=ue[ve].texture}return X}function Xe(T,_,X){return Math.floor(Math.floor(T/X)/_)}function Ut(T,_,X,_e){let ve=T.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,X,_e,_.data);else{ve.sort((P,he)=>P.start-he.start);let V=0;for(let P=1;P<ve.length;P++){let he=ve[V],le=ve[P],Re=he.start+he.count,Ce=Xe(le.start,_.width,4),De=Xe(he.start,_.width,4);le.start<=Re+1&&Ce===De&&Xe(le.start+le.count-1,_.width,4)===Ce?he.count=Math.max(he.count,le.start+le.count-he.start):(++V,ve[V]=le)}ve.length=V+1;let z=t.getParameter(i.UNPACK_ROW_LENGTH),k=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let P=0,he=ve.length;P<he;P++){let le=ve[P],Re=Math.floor(le.start/4),Ce=Math.ceil(le.count/4),De=Re%_.width,it=Math.floor(Re/_.width),Ke=Ce,be=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,it),t.texSubImage2D(i.TEXTURE_2D,0,De,it,Ke,be,X,_e,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,k),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function zt(T,_,X){let _e=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(_e=i.TEXTURE_3D);let ue=Ze(T,_),ve=_.source;t.bindTexture(_e,T.__webglTexture,i.TEXTURE0+X);let V=n.get(ve);if(ve.version!==V.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let be=Xt.getPrimaries(Xt.workingColorSpace),lt=_.colorSpace===Os?null:Xt.getPrimaries(_.colorSpace),Nt=_.colorSpace===Os||be===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let k=M(_.image,!1,s.maxTextureSize);k=Ye(_,k);let Te=r.convert(_.format,_.colorSpace),P=r.convert(_.type),he=w(_.internalFormat,Te,P,_.normalized,_.colorSpace,_.isVideoTexture);rt(_e,_);let le,Re=_.mipmaps,Ce=_.isVideoTexture!==!0,De=V.__version===void 0||ue===!0,it=ve.dataReady,Ke=S(_,k);if(_.isDepthTexture)he=v(_.format===Qi,_.type),De&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,he,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,he,k.width,k.height,0,Te,P,null));else if(_.isDataTexture)if(Re.length>0){Ce&&De&&t.texStorage2D(i.TEXTURE_2D,Ke,he,Re[0].width,Re[0].height);for(let be=0,lt=Re.length;be<lt;be++)le=Re[be],Ce?it&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,le.width,le.height,Te,P,le.data):t.texImage2D(i.TEXTURE_2D,be,he,le.width,le.height,0,Te,P,le.data);_.generateMipmaps=!1}else Ce?(De&&t.texStorage2D(i.TEXTURE_2D,Ke,he,k.width,k.height),it&&Ut(_,k,Te,P)):t.texImage2D(i.TEXTURE_2D,0,he,k.width,k.height,0,Te,P,k.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,he,Re[0].width,Re[0].height,k.depth);for(let be=0,lt=Re.length;be<lt;be++)if(le=Re[be],_.format!==Li)if(Te!==null)if(Ce){if(it)if(_.layerUpdates.size>0){let Nt=Fh(le.width,le.height,_.format,_.type);for(let ze of _.layerUpdates){let Qt=le.data.subarray(ze*Nt/le.data.BYTES_PER_ELEMENT,(ze+1)*Nt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,ze,le.width,le.height,1,Te,Qt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,k.depth,Te,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,he,le.width,le.height,k.depth,0,le.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?it&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,k.depth,Te,P,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,he,le.width,le.height,k.depth,0,Te,P,le.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ce&&De&&t.texStorage2D(i.TEXTURE_2D,Ke,he,Re[0].width,Re[0].height);for(let be=0,lt=Re.length;be<lt;be++)le=Re[be],_.format!==Li?Te!==null?Ce?it&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,le.width,le.height,Te,le.data):t.compressedTexImage2D(i.TEXTURE_2D,be,he,le.width,le.height,0,le.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?it&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,le.width,le.height,Te,P,le.data):t.texImage2D(i.TEXTURE_2D,be,he,le.width,le.height,0,Te,P,le.data)}else if(_.isDataArrayTexture)if(Ce){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,he,k.width,k.height,k.depth),it)if(_.layerUpdates.size>0){let be=Fh(k.width,k.height,_.format,_.type);for(let lt of _.layerUpdates){let Nt=k.data.subarray(lt*be/k.data.BYTES_PER_ELEMENT,(lt+1)*be/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,k.width,k.height,1,Te,P,Nt)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Te,P,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,k.width,k.height,k.depth,0,Te,P,k.data);else if(_.isData3DTexture)Ce?(De&&t.texStorage3D(i.TEXTURE_3D,Ke,he,k.width,k.height,k.depth),it&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Te,P,k.data)):t.texImage3D(i.TEXTURE_3D,0,he,k.width,k.height,k.depth,0,Te,P,k.data);else if(_.isFramebufferTexture){if(De)if(Ce)t.texStorage2D(i.TEXTURE_2D,Ke,he,k.width,k.height);else{let be=k.width,lt=k.height;for(let Nt=0;Nt<Ke;Nt++)t.texImage2D(i.TEXTURE_2D,Nt,he,be,lt,0,Te,P,null),be>>=1,lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let be=i.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),k.parentNode!==be){be.appendChild(k),d.add(_),be.onpaint=lt=>{let Nt=lt.changedElements;for(let ze of d)Nt.includes(ze.image)&&(ze.needsUpdate=!0)},be.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,k);else{let Nt=i.RGBA,ze=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,ze,Qt,k)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ce&&De){let be=st(Re[0]);t.texStorage2D(i.TEXTURE_2D,Ke,he,be.width,be.height)}for(let be=0,lt=Re.length;be<lt;be++)le=Re[be],Ce?it&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Te,P,le):t.texImage2D(i.TEXTURE_2D,be,he,Te,P,le);_.generateMipmaps=!1}else if(Ce){if(De){let be=st(k);t.texStorage2D(i.TEXTURE_2D,Ke,he,be.width,be.height)}it&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,P,k)}else t.texImage2D(i.TEXTURE_2D,0,he,Te,P,k);A(_)&&_.mipmapsAutoUpdate===!0&&b(_e),V.__version=ve.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Dt(T,_,X){if(_.image.length!==6)return;let _e=Ze(T,_),ue=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+X);let ve=n.get(ue);if(ue.version!==ve.__version||_e===!0){t.activeTexture(i.TEXTURE0+X);let V=Xt.getPrimaries(Xt.workingColorSpace),z=_.colorSpace===Os?null:Xt.getPrimaries(_.colorSpace),k=_.colorSpace===Os||V===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let Te=_.isCompressedTexture||_.image[0].isCompressedTexture,P=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ze=0;ze<6;ze++)!Te&&!P?he[ze]=M(_.image[ze],!0,s.maxCubemapSize):he[ze]=P?_.image[ze].image:_.image[ze],he[ze]=Ye(_,he[ze]);let le=he[0],Re=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),De=w(_.internalFormat,Re,Ce,_.normalized,_.colorSpace),it=_.isVideoTexture!==!0,Ke=ve.__version===void 0||_e===!0,be=ue.dataReady,lt=S(_,le);rt(i.TEXTURE_CUBE_MAP,_);let Nt;if(_.isDepthTexture){if(De=v(_.format===Qi,_.type),Ke)if(it)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,De,le.width,le.height);else for(let ze=0;ze<6;ze++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,De,le.width,le.height,0,Re,Ce,null)}else if(Te){it&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,De,le.width,le.height);for(let ze=0;ze<6;ze++){Nt=he[ze].mipmaps;for(let Qt=0;Qt<Nt.length;Qt++){let wn=Nt[Qt];_.format!==Li?Re!==null?it?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt,0,0,wn.width,wn.height,Re,wn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt,De,wn.width,wn.height,0,wn.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt,0,0,wn.width,wn.height,Re,Ce,wn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt,De,wn.width,wn.height,0,Re,Ce,wn.data)}}}else{if(Nt=_.mipmaps,it&&Ke){Nt.length>0&&lt++;let ze=st(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,De,ze.width,ze.height)}for(let ze=0;ze<6;ze++)if(P){it?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,he[ze].width,he[ze].height,Re,Ce,he[ze].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,De,he[ze].width,he[ze].height,0,Re,Ce,he[ze].data);for(let Qt=0;Qt<Nt.length;Qt++){let xn=Nt[Qt].image[ze].image;it?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt+1,0,0,xn.width,xn.height,Re,Ce,xn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt+1,De,xn.width,xn.height,0,Re,Ce,xn.data)}}else{it?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,Re,Ce,he[ze]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,De,Re,Ce,he[ze]);for(let Qt=0;Qt<Nt.length;Qt++){let wn=Nt[Qt];it?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt+1,0,0,Re,Ce,wn.image[ze]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Qt+1,De,Re,Ce,wn.image[ze])}}}A(_)&&_.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ve.__version=ue.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ht(T,_,X,_e,ue,ve){let V=r.convert(X.format,X.colorSpace),z=r.convert(X.type),k=w(X.internalFormat,V,z,X.normalized,X.colorSpace),Te=n.get(_),P=n.get(X);if(P.__renderTarget=_,!Te.__hasExternalTextures){let he=Math.max(1,_.width>>ve),le=Math.max(1,_.height>>ve);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ve,k,he,le,_.depth,0,V,z,null):t.texImage2D(ue,ve,k,he,le,0,V,z,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ue,P.__webglTexture,0,Gt(_)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,ue,P.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rn(T,_,X){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let _e=_.depthTexture,ue=_e&&_e.isDepthTexture?_e.type:null,ve=v(_.stencilBuffer,ue),V=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(_),ve,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(_),ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ve,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,T)}else{let _e=_.textures;for(let ue=0;ue<_e.length;ue++){let ve=_e[ue],V=r.convert(ve.format,ve.colorSpace),z=r.convert(ve.type),k=w(ve.internalFormat,V,z,ve.normalized,ve.colorSpace);Ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(_),k,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(_),k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(T,_,X){let _e=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=n.get(_.depthTexture);ue.__renderTarget=_;let ve=_e?_.depthTexture.image[0]:_.depthTexture.image;(!ue.__webglTexture||ve.width!==_.width||ve.height!==_.height)&&(ve.width=_.width,ve.height=_.height,_.depthTexture.needsUpdate=!0),_e?ne(_.depthTexture,0):me(_.depthTexture,0);let V=ue.__webglTexture,z=Gt(_),k=_e?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,Te=_.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ps)Ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,k,V,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,Te,k,V,0);else if(_.depthTexture.format===Qi)Ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,k,V,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,Te,k,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function cn(T){let _=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let _e=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),_e){let ue=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,_e.removeEventListener("dispose",ue)};_e.addEventListener("dispose",ue),_.__depthDisposeCallback=ue}_.__boundDepthTexture=_e}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(X)for(let _e=0;_e<6;_e++)At(_.__webglFramebuffer[_e],T,_e);else T.texture.mipmaps.length>0?At(_.__webglFramebuffer[0],T,0):At(_.__webglFramebuffer,T,0);else if(X){_.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[_e]),_.__webglDepthbuffer[_e]===void 0)_.__webglDepthbuffer[_e]=i.createRenderbuffer(),rn(_.__webglDepthbuffer[_e],T,!1);else{let ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=_.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ve)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rn(_.__webglDepthbuffer,T,!1);else{let ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function an(T,_,X){let _e=n.get(T);_!==void 0&&ht(_e.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&cn(T)}function dn(T){let _=T.texture,X=n.get(T),_e=n.get(_);T.addEventListener("dispose",F),I(T);let ue=T.textures,ve=T.isWebGLCubeRenderTarget===!0,V=ue.length>1;if(V||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=_.version,a.memory.textures++),ve){X.__webglFramebuffer=[];for(let z=0;z<6;z++)if(_.mipmaps.length>0){X.__webglFramebuffer[z]=[];for(let k=0;k<_.mipmaps.length;k++)X.__webglFramebuffer[z][k]=i.createFramebuffer()}else X.__webglFramebuffer[z]=i.createFramebuffer()}else{if(_.mipmaps.length>0){X.__webglFramebuffer=[];for(let z=0;z<_.mipmaps.length;z++)X.__webglFramebuffer[z]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(V)for(let z=0,k=ue.length;z<k;z++){let Te=n.get(ue[z]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ie(T)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let z=0;z<ue.length;z++){let k=ue[z];X.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[z]);let Te=r.convert(k.format,k.colorSpace),P=r.convert(k.type),he=w(k.internalFormat,Te,P,k.normalized,k.colorSpace,T.isXRRenderTarget===!0),le=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,X.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),rn(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),rt(i.TEXTURE_CUBE_MAP,_);for(let z=0;z<6;z++)if(_.mipmaps.length>0)for(let k=0;k<_.mipmaps.length;k++)ht(X.__webglFramebuffer[z][k],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,k);else ht(X.__webglFramebuffer[z],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);A(_)?b(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(V){for(let z=0,k=ue.length;z<k;z++){let Te=ue[z],P=n.get(Te),he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,P.__webglTexture),rt(he,Te),ht(X.__webglFramebuffer,T,Te,i.COLOR_ATTACHMENT0+z,he,0),A(Te)&&b(he)}t.unbindTexture()}else{let z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,_e.__webglTexture),rt(z,_),_.mipmaps.length>0)for(let k=0;k<_.mipmaps.length;k++)ht(X.__webglFramebuffer[k],T,_,i.COLOR_ATTACHMENT0,z,k);else ht(X.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,z,0);A(_)?b(z):_.mipmaps.length>0&&i.texParameteri(z,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&cn(T)}function N(T){let _=T.textures;for(let X=0,_e=_.length;X<_e;X++){let ue=_[X];if(A(ue)&&ue.mipmapsAutoUpdate===!0){let ve=E(T),V=n.get(ue).__webglTexture;t.bindTexture(ve,V),b(ve),t.unbindTexture()}}}let $t=[];function Ct(T){if(T.samples>0){if(Ie(T)===!1){let _=T.textures,X=T.width,_e=T.height,ue=i.COLOR_BUFFER_BIT,ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=n.get(T),z=_.length>1;if(z)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,V.__webglColorRenderbuffer[Te]);let P=n.get(_[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,X,_e,0,0,X,_e,ue,i.NEAREST),c===!0&&($t.length=0,$t.push(i.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&$t.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,V.__webglColorRenderbuffer[Te]);let P=n.get(_[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Ie(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ln(T){let _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Ye(T,_){let X=T.colorSpace,_e=T.format,ue=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||X!==wa&&X!==Os&&(Xt.getTransfer(X)===nn?(_e!==Li||ue!==ii)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",X)),_}function st(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Ge,this.resetTextureUnits=H,this.getTextureUnits=$,this.setTextureUnits=we,this.setTexture2D=me,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=ne,this.rebindTextures=an,this.setupRenderTarget=dn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=cn,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ie,this.dispose=W}function Pv(i,e){function t(n,s=Os){let r,a=Xt.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return i.BYTE;if(n===Sh)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Wi)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Th)return i.ALPHA;if(n===Ah)return i.RGB;if(n===Li)return i.RGBA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===tr)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===nn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===so||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return a===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yl||n===Zl||n===Jl||n===Kl||n===$l||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===ro||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:Iv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends os{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new Xh,p={},M=t.getContextAttributes(),A=null,b=null,E=[],w=[],v=new Be,S=null,I=null,C=new di;C.viewport=new sn;let L=new di;L.viewport=new sn;let F=[C,L],J=new Tl,R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=E[te];return me===void 0&&(me=new qr,E[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=E[te];return me===void 0&&(me=new qr,E[te]=me),me.getGripSpace()},this.getHand=function(te){let me=E[te];return me===void 0&&(me=new qr,E[te]=me),me.getHandSpace()};function ie(te){let me=w.indexOf(te.inputSource);if(me===-1)return;let re=E[me];re!==void 0&&(re.update(te.inputSource,te.frame,l||a),re.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",pe);for(let te=0;te<E.length;te++){let me=w[te];me!==null&&(w[te]=null,E[te].disconnect(me))}R=null,W=null,m.reset();for(let te in p)delete p[te];if(e.setRenderTarget(A),h=null,f=null,d=null,s=null,b=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),I!==null){let te=I.camera;te.fov=I.fov,te.zoom=I.zoom,te.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",pe),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ae=null,ne=null;M.depth&&(ne=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?Qi:Ps,ae=M.stencil?Fs:ji);let Ee={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new fn(f.textureWidth,f.textureHeight,{format:Li,type:ii,depthTexture:new $i(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new fn(h.framebufferWidth,h.framebufferHeight,{format:Li,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(te){for(let me=0;me<te.removed.length;me++){let re=te.removed[me],ae=w.indexOf(re);ae>=0&&(w[ae]=null,E[ae].disconnect(re))}for(let me=0;me<te.added.length;me++){let re=te.added[me],ae=w.indexOf(re);if(ae===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=w.length){w.push(re),ae=Ee;break}else if(w[Ee]===null){w[Ee]=re,ae=Ee;break}if(ae===-1)break}let ne=E[ae];ne&&ne.connect(re)}}function B(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let me=te.near,re=te.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(re=m.depthFar)),J.near=L.near=C.near=me,J.far=L.far=C.far=re,(R!==J.near||W!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),R=J.near,W=J.far),J.layers.mask=te.layers.mask|6,C.layers.mask=J.layers.mask&-5,L.layers.mask=J.layers.mask&-3;let ae=te.parent,ne=J.cameras;B(J,ae);for(let Ee=0;Ee<ne.length;Ee++)B(ne[Ee],ae);J.projectionMatrix.copy(C.projectionMatrix),J.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&te.isPerspectiveCamera&&(I={camera:te,fov:te.fov,zoom:te.zoom}),H(te,J,ae)};function H(te,me,re){re===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(re.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ol*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(te){return p[te]};let $=null;function we(te,me){if(u=me.getViewerPose(l||a),g=me,u!==null){let re=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ae=!1;re.length!==J.cameras.length&&(J.cameras.length=0,ae=!0);for(let Pe=0;Pe<re.length;Pe++){let rt=re[Pe],Ze=null;if(h!==null)Ze=h.getViewport(rt);else{let Ut=d.getViewSubImage(f,rt);Ze=Ut.viewport,Pe===0&&(e.setRenderTargetTextures(b,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(b))}let Xe=F[Pe];Xe===void 0&&(Xe=new di,Xe.layers.enable(Pe),Xe.viewport=new sn,F[Pe]=Xe),Xe.matrix.fromArray(rt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(rt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Pe===0&&(J.matrix.copy(Xe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ae===!0&&J.cameras.push(Xe)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Pe=d.getDepthInformation(re[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(ne&&ne.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<re.length;Pe++){let rt=re[Pe].camera;if(rt){let Ze=p[rt];Ze||(Ze=new Ua,p[rt]=Ze);let Xe=d.getCameraImage(rt);Ze.sourceTexture=Xe}}}}for(let re=0;re<E.length;re++){let ae=w[re],ne=E[re];ae!==null&&ne!==void 0&&ne.update(ae,me,l||a)}$&&$(te,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let Ge=new kf;Ge.setAnimationLoop(we),this.setAnimationLoop=function(te){$=te},this.dispose=function(){}}},Lv=new Pt,Kf=new It;Kf.set(-1,0,0,0,1,0,0,0,1);function Nv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===oi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===oi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),A=M.envMap,b=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uv(i,e,t,n){let s={},r={};function a(M,A){let b=A.program;n.uniformBlockBinding(M,b,s[M.id])}function o(M,A){let b=s[M.id];b===void 0&&(g(M),b=c(M),s[M.id]=b,M.addEventListener("dispose",m));let E=A.program;n.updateUBOMapping(M,E);let w=e.render.frame;r[M.id]!==w&&(l(M),r[M.id]=w)}function c(M){let A=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(M){let A=s[M.id],b=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,v=b.length;w<v;w++){let S=b[w];if(Array.isArray(S))for(let I=0,C=S.length;I<C;I++)u(S[I],w,I,E);else u(S,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,A,b,E){if(f(M,A,b,E)===!0){let w=M.__offset,v=M.value;if(Array.isArray(v)){let S=0;for(let I=0;I<v.length;I++){let C=v[I],L=x(C,!0);d(C,M.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,M.__data)}}function d(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function f(M,A,b,E){let w=M.value,v=A+"_"+b;if(Array.isArray(w)){E[v]===void 0&&(E[v]=[]);let S=E[v],I=!1;for(let C=0;C<w.length;C++)h(w[C],S,C)===!0&&(I=!0);return I}return h(w,E,v)}function h(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let E=A[b];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function g(M){let A=M.uniforms,b=0,E=16;for(let v=0,S=A.length;v<S;v++){let I=Array.isArray(A[v])?A[v]:[A[v]];for(let C=0,L=I.length;C<L;C++){let F=I[C],J=Array.isArray(F.value)?F.value:[F.value],R=Array.isArray(A[v])||Array.isArray(F.value),W=b;for(let Q=0,pe=J.length;Q<pe;Q++){let B=J[Q],H=x(B,R),$=b%E,we=$%H.boundary,Ge=$+we;b+=we,Ge!==0&&E-Ge<H.storage&&(b+=E-Ge),Q===0&&(W=b),b+=H.storage}let ie=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new ie((b-W)/Float32Array.BYTES_PER_ELEMENT),F.__offset=W}}let w=b%E;return w>0&&(b+=E-w),M.__size=b,M.__cache={},this}function x(M,A){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){let A=M.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var Fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ps=null;function Ov(){return ps===null&&(ps=new Ls(Fv,16,16,tr,Sn),ps.name="DFG_LUT",ps.minFilter=yi,ps.magFilter=yi,ps.wrapS=as,ps.wrapT=as,ps.generateMipmaps=!1,ps.needsUpdate=!0),ps}var gc=class{constructor(e={}){let{canvas:t=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ii}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=h,m=new Set([Fl,Ul,Nl]),p=new Set([ii,ji,sa,Fs,Il,Dl]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,w=null,v=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,J=null,R=null,W=null;this._outputColorSpace=fi;let ie=0,Q=0,pe=null,B=-1,H=null,$=new sn,we=new sn,Ge=null,te=new xe(0),me=0,re=t.width,ae=t.height,ne=1,Ee=null,qe=null,Pe=new sn(0,0,re,ae),rt=new sn(0,0,re,ae),Ze=!1,Xe=new qs,Ut=new fl,zt=!1,Dt=!1,ht=new Pt,rn=new O,At=new sn,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},an=!1;function dn(){return pe===null?ne:1}let N=n;function $t(y,U){return t.getContext(y,U)}let Ct,Gt,Ie,ln,Ye,st,T,_,X,_e,ue,ve,V,z,k,Te,P,he,le,Re,Ce,De,it;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",ze,!1),N===null){let U="webgl2";if(N=$t(U,y),N===null)throw $t(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(y){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),bt("WebGLRenderer: "+y.message),y}function Ke(){Ct=new Z0(N),Ct.init(),Ce=new Pv(N,Ct),Gt=new O0(N,Ct,e,Ce),Ie=new Cv(N,Ct),Gt.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),J=N.createFramebuffer(),R=N.createFramebuffer(),W=N.createFramebuffer(),ln=new $0(N),Ye=new pv,st=new Rv(N,Ct,Ie,Ye,Gt,Ce,ln),T=new Y0(C),_=new Qd(N),De=new U0(N,_),X=new J0(N,_,ln,De),_e=new Q0(N,X,_,De,ln),he=new j0(N,Gt,st),k=new B0(Ye),ue=new dv(C,T,Ct,Gt,De,k),ve=new Nv(C,Ye),V=new gv,z=new Sv(Ct),P=new N0(C,T,Ie,_e,g,c),Te=new Ev(C,_e,Gt),it=new Uv(N,ln,Gt,Ie),le=new F0(N,Ct,ln),Re=new K0(N,Ct,ln),ln.programs=ue.programs,C.capabilities=Gt,C.extensions=Ct,C.properties=Ye,C.renderLists=V,C.shadowMap=Te,C.state=Ie,C.info=ln}x!==ii&&(I=new tg(x,t.width,t.height,o,s,r));let be=new qh(C,N);this.xr=be,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=Ct.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ct.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(re,ae,!1))},this.getSize=function(y){return y.set(re,ae)},this.setSize=function(y,U,se=!0){if(be.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=y,ae=U,t.width=Math.floor(y*ne),t.height=Math.floor(U*ne),se===!0&&(t.style.width=y+"px",t.style.height=U+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(re*ne,ae*ne).floor()},this.setDrawingBufferSize=function(y,U,se){re=y,ae=U,ne=se,t.width=Math.floor(y*se),t.height=Math.floor(U*se),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===ii){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy($)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,U,se,q){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,U,se,q),Ie.viewport($.copy(Pe).multiplyScalar(dn()).round())},this.getScissor=function(y){return y.copy(rt)},this.setScissor=function(y,U,se,q){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,U,se,q),Ie.scissor(we.copy(rt).multiplyScalar(dn()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){Ie.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){Ee=y},this.setTransparentSort=function(y){qe=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,se=!0){let q=0;if(y){let Z=!1;if(pe!==null){let Le=pe.texture.format;Z=m.has(Le)}if(Z){let Le=pe.texture.type,Je=p.has(Le),Ne=P.getClearColor(),ke=P.getClearAlpha(),tt=Ne.r,Et=Ne.g,St=Ne.b;Je?(M[0]=tt,M[1]=Et,M[2]=St,M[3]=ke,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=tt,A[1]=Et,A[2]=St,A[3]=ke,N.clearBufferiv(N.COLOR,0,A))}else q|=N.COLOR_BUFFER_BIT}U&&(q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),P.dispose(),V.dispose(),z.dispose(),st.dispose(),Ye.dispose(),T.dispose(),_e.dispose(),X.dispose(),De.dispose(),it.dispose(),ue.dispose(),be.dispose(),be.removeEventListener("sessionstart",_s),be.removeEventListener("sessionend",es),vi.stop()};function lt(y){y.preventDefault(),Ea("WebGLRenderer: Context Lost."),L=!0}function Nt(){Ea("WebGLRenderer: Context Restored."),L=!1;let y=ln.autoReset,U=Te.enabled,se=Te.autoUpdate,q=Te.needsUpdate,Z=Te.type;Ke(),ln.autoReset=y,Te.enabled=U,Te.autoUpdate=se,Te.needsUpdate=q,Te.type=Z}function ze(y){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Qt(y){let U=y.target;U.removeEventListener("dispose",Qt),wn(U)}function wn(y){xn(y),Ye.remove(y)}function xn(y){let U=Ye.get(y).programs;U!==void 0&&(U.forEach(function(se){ue.releaseProgram(se)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,se,q,Z,Le){U===null&&(U=cn);let Je=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ne=Ms(y,U,se,q,Z);Ie.setMaterial(q,Je);let ke=se.index,tt=1;if(q.wireframe===!0){if(ke=X.getWireframeAttribute(se),ke===void 0)return;tt=2}let Et=se.drawRange,St=se.attributes.position,et=Et.start*tt,Ht=(Et.start+Et.count)*tt;Le!==null&&(et=Math.max(et,Le.start*tt),Ht=Math.min(Ht,(Le.start+Le.count)*tt)),ke!==null?(et=Math.max(et,0),Ht=Math.min(Ht,ke.count)):St!=null&&(et=Math.max(et,0),Ht=Math.min(Ht,St.count));let Nn=Ht-et;if(Nn<0||Nn===1/0)return;De.setup(Z,q,Ne,se,ke);let pn,hn=le;if(ke!==null&&(pn=_.get(ke),hn=Re,hn.setIndex(pn)),Z.isMesh)q.wireframe===!0?(Ie.setLineWidth(q.wireframeLinewidth*dn()),hn.setMode(N.LINES)):hn.setMode(N.TRIANGLES);else if(Z.isLine){let Bn=q.linewidth;Bn===void 0&&(Bn=1),Ie.setLineWidth(Bn*dn()),Z.isLineSegments?hn.setMode(N.LINES):Z.isLineLoop?hn.setMode(N.LINE_LOOP):hn.setMode(N.LINE_STRIP)}else Z.isPoints?hn.setMode(N.POINTS):Z.isSprite&&hn.setMode(N.TRIANGLES);if(Z.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))hn.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Bn=Z._multiDrawStarts,Qe=Z._multiDrawCounts,ei=Z._multiDrawCount,en=ke?_.get(ke).bytesPerElement:1,Ni=Ye.get(q).currentProgram.getUniforms();for(let D=0;D<ei;D++)Ni.setValue(N,"_gl_DrawID",D),hn.render(Bn[D]/en,Qe[D])}else if(Z.isInstancedMesh)hn.renderInstances(et,Nn,Z.count);else if(se.isInstancedBufferGeometry){let Bn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Qe=Math.min(se.instanceCount,Bn);hn.renderInstances(et,Nn,Qe)}else hn.render(et,Nn)};function rr(y,U,se,q){F!==null&&y.isNodeMaterial&&F.setObject(q,y),zt===!0&&k.setState(y,se,!1),y.transparent===!0&&y.side===vn&&y.forceSinglePass===!1?(y.side=oi,y.needsUpdate=!0,is(y,U,q),y.side=er,y.needsUpdate=!0,is(y,U,q),y.side=vn):is(y,U,q)}this.compile=function(y,U,se=null){se===null&&(se=y),F!==null&&F.renderStart(y,U,se),w=z.get(se),w.init(U),S.push(w),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(U.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),y!==se&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(U.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Dt=this.localClippingEnabled,zt=k.init(this.clippingPlanes,Dt),zt===!0&&k.setGlobalState(this.clippingPlanes,U),F!==null&&Te.render(w.state.shadowsArray,se,U);let q=new Set;return y.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Le=Z.material;if(Le)if(Array.isArray(Le))for(let Je=0;Je<Le.length;Je++){let Ne=Le[Je];rr(Ne,se,U,Z),q.add(Ne)}else rr(Le,se,U,Z),q.add(Le)}),w=S.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(y,U,se=null){let q=this.compile(y,U,se);return new Promise(Z=>{function Le(){if(q.forEach(function(Je){let ke=Ye.get(Je).currentProgram;(ke===void 0||ke.isReady())&&q.delete(Je)}),q.size===0){Z(y);return}setTimeout(Le,10)}Ct.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ua=null;function gi(y){ua&&ua(y)}function _s(){vi.stop()}function es(){vi.start()}let vi=new kf;vi.setAnimationLoop(gi),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(y){ua=y,be.setAnimationLoop(y),y===null?vi.stop():vi.start()},be.addEventListener("sessionstart",_s),be.addEventListener("sessionend",es),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(y,U);let se=be.enabled===!0&&be.isPresenting===!0,q=I!==null&&(pe===null||se)&&I.begin(C,pe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(U),U=be.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,U,pe),w=z.get(y,S.length),w.init(U),w.state.textureUnits=st.getTextureUnits(),S.push(w),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ut.setFromArrayCamera(U):Xe.setFromProjectionMatrix(ht,Bi,U.reversedDepth),Dt=this.localClippingEnabled,zt=k.init(this.clippingPlanes,Dt),E=V.get(y,v.length),E.init(),v.push(E),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Je=C.xr.getDepthSensingMesh();Je!==null&&zs(Je,U,-1/0,C.sortObjects)}zs(y,U,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(Ee,qe),an=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,an&&P.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),zt===!0&&k.beginShadows();let Z=w.state.shadowsArray;if(Te.render(Z,y,U),zt===!0&&k.endShadows(),(q&&I.hasRenderPass())===!1){let Je=E.opaque,Ne=E.transmissive;if(w.setupLights(),U.isArrayCamera){let ke=U.cameras;if(Ne.length>0)for(let tt=0,Et=ke.length;tt<Et;tt++){let St=ke[tt];fa(Je,Ne,y,St)}an&&P.render(y);for(let tt=0,Et=ke.length;tt<Et;tt++){let St=ke[tt];ts(E,y,St,St.viewport)}}else Ne.length>0&&fa(Je,Ne,y,U),an&&P.render(y),ts(E,y,U)}pe!==null&&Q===0&&(st.updateMultisampleRenderTarget(pe),st.updateRenderTargetMipmap(pe)),q&&I.end(C),y.isScene===!0&&y.onAfterRender(C,y,U),De.resetDefaultState(),B=-1,H=null,S.pop(),S.length>0?(w=S[S.length-1],st.setTextureUnits(w.state.textureUnits),zt===!0&&k.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,F!==null&&F.renderEnd()};function zs(y,U,se,q){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)se=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let Je=U.isArrayCamera?Ut:Xe;if(!y.frustumCulled||y.intersectsFrustum(Je)){q&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ht);let Ne=_e.update(y),ke=y.material;ke.visible&&E.push(y,Ne,ke,se,At.z,null,U)}}else if(y.isMesh||y.isLine||y.isPoints){let Je=U.isArrayCamera?Ut:Xe;if(!y.frustumCulled||y.intersectsFrustum(Je)){let Ne=_e.update(y),ke=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),At.copy(Ne.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(ht)),Array.isArray(ke)){let tt=Ne.groups;for(let Et=0,St=tt.length;Et<St;Et++){let et=tt[Et],Ht=ke[et.materialIndex];Ht&&Ht.visible&&E.push(y,Ne,Ht,se,At.z,et,U)}}else ke.visible&&E.push(y,Ne,ke,se,At.z,null,U)}}}let Le=y.children;for(let Je=0,Ne=Le.length;Je<Ne;Je++)zs(Le[Je],U,se,q)}function ts(y,U,se,q){let{opaque:Z,transmissive:Le,transparent:Je}=y;w.setupLightsView(se),zt===!0&&k.setGlobalState(C.clippingPlanes,se),q&&Ie.viewport($.copy(q)),Z.length>0&&ns(Z,U,se),Le.length>0&&ns(Le,U,se),Je.length>0&&ns(Je,U,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function fa(y,U,se,q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let et=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new fn(1,1,{generateMipmaps:!0,type:et?Sn:ii,minFilter:Us,samples:Math.max(4,Gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let Le=w.state.transmissionRenderTarget[q.id],Je=q.viewport||$;Le.setSize(Je.z*C.transmissionResolutionScale,Je.w*C.transmissionResolutionScale);let Ne=C.getRenderTarget(),ke=C.getActiveCubeFace(),tt=C.getActiveMipmapLevel();C.setRenderTarget(Le),C.getClearColor(te),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),an&&P.render(se);let Et=C.toneMapping;C.toneMapping=ds;let St=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),zt===!0&&k.setGlobalState(C.clippingPlanes,q),ns(y,se,q),st.updateMultisampleRenderTarget(Le),st.updateRenderTargetMipmap(Le),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ht=0,Nn=U.length;Ht<Nn;Ht++){let pn=U[Ht],{object:hn,geometry:Bn,material:Qe,group:ei}=pn;if(Qe.side===vn&&hn.layers.test(q.layers)){let en=Qe.side;Qe.side=oi,Qe.needsUpdate=!0,Mo(hn,se,q,Bn,Qe,ei),Qe.side=en,Qe.needsUpdate=!0,et=!0}}et===!0&&(st.updateMultisampleRenderTarget(Le),st.updateRenderTargetMipmap(Le))}C.setRenderTarget(Ne,ke,tt),C.setClearColor(te,me),St!==void 0&&(q.viewport=St),C.toneMapping=Et}function ns(y,U,se){let q=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,Le=y.length;Z<Le;Z++){let Je=y[Z],{object:Ne,geometry:ke,group:tt}=Je,Et=Je.material;Et.allowOverride===!0&&q!==null&&(Et=q),Ne.layers.test(se.layers)&&Mo(Ne,U,se,ke,Et,tt)}}function Mo(y,U,se,q,Z,Le){F!==null&&Z.isNodeMaterial&&F.setObject(y,Z),y.onBeforeRender(C,U,se,q,Z,Le),y.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(C,U,se,q,y,Le),Z.transparent===!0&&Z.side===vn&&Z.forceSinglePass===!1?(Z.side=oi,Z.needsUpdate=!0,C.renderBufferDirect(se,U,q,Z,y,Le),Z.side=er,Z.needsUpdate=!0,C.renderBufferDirect(se,U,q,Z,y,Le),Z.side=vn):C.renderBufferDirect(se,U,q,Z,y,Le),y.onAfterRender(C,U,se,q,Z,Le)}function Ot(y){let U=0;for(let se of y)se.texture!==null&&U++;return U}function is(y,U,se){U.isScene!==!0&&(U=cn);let q=Ye.get(y),Z=w.state.lights,Le=w.state.shadowsArray,Je=Z.state.version,Ne=ue.getParameters(y,Z.state,Le,U,se,w.state.lightProbeGridArray),ke=ue.getProgramCacheKey(Ne),tt=q.programs;q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let Et=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;q.envMap=T.get(y.envMap||q.environment,Et),q.envMapRotation=q.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,tt===void 0&&(y.addEventListener("dispose",Qt),tt=new Map,q.programs=tt,q.programVariants=new Map);let St=tt.get(ke);if(St!==void 0){if(q.currentProgram===St&&q.lightsStateVersion===Je)return ys(y,Ne),St}else Ne.uniforms=ue.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,se,Ne),y.onBeforeCompile(Ne,C),St=ue.acquireProgram(Ne,ke),tt.set(ke,St),q.uniforms=Ne.uniforms;let et=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(et.clippingPlanes=k.uniform),ys(y,Ne),q.needsLights=ar(y),q.lightsStateVersion=Je,q.needsLights&&(et.ambientLightColor.value=Z.state.ambient,et.lightProbe.value=Z.state.probe,et.sunLights.value=Z.state.sun,et.sunLightShadows.value=Z.state.sunShadow,et.directionalLights.value=Z.state.directional,et.directionalLightShadows.value=Z.state.directionalShadow,et.spotLights.value=Z.state.spot,et.spotLightShadows.value=Z.state.spotShadow,et.rectAreaLights.value=Z.state.rectArea,et.ltc_1.value=Z.state.rectAreaLTC1,et.ltc_2.value=Z.state.rectAreaLTC2,et.pointLights.value=Z.state.point,et.pointLightShadows.value=Z.state.pointShadow,et.hemisphereLights.value=Z.state.hemi,et.sunShadowMatrix.value=Z.state.sunShadowMatrix,et.sunShadowCascade.value=Z.state.sunShadowCascade,et.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,et.spotLightMatrix.value=Z.state.spotLightMatrix,et.spotLightMap.value=Z.state.spotLightMap,et.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.numLightProbeGrids=Ot(w.state.lightProbeGridArray),q.currentProgram=St,q.uniformsList=null,St}function So(y,U,se,q,Z){let Le=Ye.get(y),Je=Le.currentProgram.id+","+q+","+Z,Ne=Le.programVariants.get(Je);return Ne===void 0?(Ne=is(y,U,se),Le.programVariants.set(Je,Ne)):(Le.currentProgram=Ne,Le.uniformsList=null,Le.outputColorSpace=q,Le.toneMapping=Z),Ne}function Qn(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=ra.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ys(y,U){let se=Ye.get(y);se.outputColorSpace=U.outputColorSpace,se.batching=U.batching,se.batchingColor=U.batchingColor,se.instancing=U.instancing,se.instancingColor=U.instancingColor,se.instancingMorph=U.instancingMorph,se.skinning=U.skinning,se.morphTargets=U.morphTargets,se.morphNormals=U.morphNormals,se.morphColors=U.morphColors,se.morphTargetsCount=U.morphTargetsCount,se.numClippingPlanes=U.numClippingPlanes,se.numIntersection=U.numClipIntersection,se.vertexAlphas=U.vertexAlphas,se.vertexTangents=U.vertexTangents,se.toneMapping=U.toneMapping}function Ms(y,U,se,q,Z){U.isScene!==!0&&(U=cn),st.resetTextureUnits();let Le=U.fog,Je=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,Ne=pe===null?C.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Xt.workingColorSpace,ke=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,tt=T.get(q.envMap||Je,ke),Et=q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,St=!!se.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),et=!!se.morphAttributes.position,Ht=!!se.morphAttributes.normal,Nn=!!se.morphAttributes.color,pn=ds;q.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(pn=C.toneMapping);let hn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Bn=hn!==void 0?hn.length:0,Qe=Ye.get(q),ei=w.state.lights;if(zt===!0&&(Dt===!0||y!==H)){let ye=y===H&&q.id===B;k.setState(q,y,ye)}let en=!1,Ni=!1;q.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==ei.state.version||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==tt||q.fog===!0&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==k.numPlanes||Qe.numIntersection!==k.numIntersection)||Qe.vertexAlphas!==Et||Qe.vertexTangents!==St||Qe.morphTargets!==et||Qe.morphNormals!==Ht||Qe.morphColors!==Nn||Qe.morphTargetsCount!==Bn||Qe.numLightProbeGrids!==Ot(w.state.lightProbeGridArray)?en=!0:(Qe.outputColorSpace!==Ne||Qe.toneMapping!==pn)&&(Ni=!0):(en=!0,Qe.__version=q.version);let D=Qe.currentProgram;(en===!0||Ni===!0)&&(D=Ni===!0?So(q,U,Z,Ne,pn):is(q,U,Z),F&&q.isNodeMaterial&&F.onUpdateProgram(q,D,Qe));let j=!1,Y=!1,de=!1,ce=D.getUniforms(),Fe=Qe.uniforms;if(Ie.useProgram(D.program)&&(j=!0,Y=!0,de=!0),q.id!==B&&(B=q.id,Y=!0),j||H!==y){Ie.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ce.setValue(N,"projectionMatrix",y.projectionMatrix),ce.setValue(N,"viewMatrix",y.matrixWorldInverse);let ge=ce.map.cameraPosition;ge!==void 0&&ge.setValue(N,rn.setFromMatrixPosition(y.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ce.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),H!==y&&(H=y,Y=!0,de=!0)}if(Qe.needsLights&&(ei.state.sunShadowMap.length>0&&ce.setValue(N,"sunShadowMap",ei.state.sunShadowMap,st),ei.state.directionalShadowMap.length>0&&ce.setValue(N,"directionalShadowMap",ei.state.directionalShadowMap,st),ei.state.spotShadowMap.length>0&&ce.setValue(N,"spotShadowMap",ei.state.spotShadowMap,st),ei.state.pointShadowMap.length>0&&ce.setValue(N,"pointShadowMap",ei.state.pointShadowMap,st)),Z.isSkinnedMesh){ce.setOptional(N,Z,"bindMatrix"),ce.setOptional(N,Z,"bindMatrixInverse");let ye=Z.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ce.setValue(N,"boneTexture",ye.boneTexture,st))}Z.isBatchedMesh&&(ce.setOptional(N,Z,"batchingTexture"),ce.setValue(N,"batchingTexture",Z._matricesTexture,st),ce.setOptional(N,Z,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",Z._indirectTexture,st),ce.setOptional(N,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",Z._colorsTexture,st));let He=se.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&he.update(Z,se,D),(Y||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,ce.setValue(N,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Ov()),Y){if(ce.setValue(N,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Tn(Fe,de),Le&&q.fog===!0&&ve.refreshFogUniforms(Fe,Le),ve.refreshMaterialUniforms(Fe,q,ne,ae,w.state.transmissionRenderTarget[y.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let ye=b,ge=0;for(let K of w.state.lightProbeGridArray)K.texture!==null&&(ye.textures[ge]=K.texture,ye.min[ge]=K.boundingBox.min,ye.max[ge]=K.boundingBox.max,ye.resolution[ge]=K.resolution,ge++);for(let K in ye)ye[K].length=ge;Fe.probesSH.value=ye.textures,Fe.probesMin.value=ye.min,Fe.probesMax.value=ye.max,Fe.probesResolution.value=ye.resolution}ra.upload(N,Qn(Qe),Fe,st)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ra.upload(N,Qn(Qe),Fe,st),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ce.setValue(N,"center",Z.center),ce.setValue(N,"modelViewMatrix",Z.modelViewMatrix),ce.setValue(N,"normalMatrix",Z.normalMatrix),ce.setValue(N,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let ye=q.uniformsGroups;for(let ge=0,K=ye.length;ge<K;ge++){let nt=ye[ge];it.update(nt,D),it.bind(nt,D)}}return D}function Tn(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ar(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(y,U,se){let q=Ye.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ye.get(y.texture).__webglTexture=U,Ye.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:se,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let se=Ye.get(y);se.__webglFramebuffer=U,se.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,se=0){pe=y,ie=U,Q=se;let q=null,Z=!1,Le=!1;if(y){let Ne=Ye.get(y);if(Ne.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(N.FRAMEBUFFER,Ne.__webglFramebuffer),$.copy(y.viewport),we.copy(y.scissor),Ge=y.scissorTest,Ie.viewport($),Ie.scissor(we),Ie.setScissorTest(Ge),B=-1;return}else if(Ne.__webglFramebuffer===void 0)st.setupRenderTarget(y);else if(Ne.__hasExternalTextures)st.rebindTextures(y,Ye.get(y.texture).__webglTexture,Ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Et=y.depthTexture;if(Ne.__boundDepthTexture!==Et){if(Et!==null&&Ye.has(Et)&&(y.width!==Et.image.width||y.height!==Et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(y)}}let ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Le=!0);let tt=Ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(tt[U])?q=tt[U][se]:q=tt[U],Z=!0):y.samples>0&&st.useMultisampledRTT(y)===!1?q=Ye.get(y).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[se]:q=tt,$.copy(y.viewport),we.copy(y.scissor),Ge=y.scissorTest}else $.copy(Pe).multiplyScalar(ne).floor(),we.copy(rt).multiplyScalar(ne).floor(),Ge=Ze;if(se!==0&&(q=J),Ie.bindFramebuffer(N.FRAMEBUFFER,q)&&Ie.drawBuffers(y,q),Ie.viewport($),Ie.scissor(we),Ie.setScissorTest(Ge),Z){let Ne=Ye.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ne.__webglTexture,se)}else if(Le){let Ne=U;for(let ke=0;ke<y.textures.length;ke++){let tt=Ye.get(y.textures[ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ke,tt.__webglTexture,se,Ne)}}else if(y!==null&&se!==0){let Ne=Ye.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,se)}B=-1};function Ln(y){let U=Ye.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=Gt.textureFormatReadable(y.format),U.__typeReadable=Gt.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,se,q,Z,Le,Je,Ne=0){if(!(y&&y.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Je!==void 0&&(ke=ke[Je],Array.isArray(ke)&&(ke=ke[0])),ke){Ie.bindFramebuffer(N.FRAMEBUFFER,ke);try{let tt=y.textures[Ne],Et=tt.format,St=tt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne);let et=Ln(tt);if(et.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-q&&se>=0&&se<=y.height-Z&&N.readPixels(U,se,q,Z,Ce.convert(Et),Ce.convert(St),Le)}finally{let tt=pe!==null?Ye.get(pe).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(y,U,se,q,Z,Le,Je,Ne=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Je!==void 0&&(ke=ke[Je],Array.isArray(ke)&&(ke=ke[0])),ke)if(U>=0&&U<=y.width-q&&se>=0&&se<=y.height-Z){Ie.bindFramebuffer(N.FRAMEBUFFER,ke);let tt=y.textures[Ne],Et=tt.format,St=tt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne);let et=Ln(tt);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ht=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ht),N.bufferData(N.PIXEL_PACK_BUFFER,Le.byteLength,N.STREAM_READ),N.readPixels(U,se,q,Z,Ce.convert(Et),Ce.convert(St),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Nn=pe!==null?Ye.get(pe).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Nn);let pn=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hf(N,pn,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ht),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Le),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ht),N.deleteSync(pn),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,se=0){let q=Math.pow(2,-se),Z=Math.floor(y.image.width*q),Le=Math.floor(y.image.height*q),Je=U!==null?U.x:0,Ne=U!==null?U.y:0;st.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,se,0,0,Je,Ne,Z,Le),Ie.unbindTexture()},this.copyTextureToTexture=function(y,U,se=null,q=null,Z=0,Le=0){let Je,Ne,ke,tt,Et,St,et,Ht,Nn,pn=y.isCompressedTexture?y.mipmaps[Le]:y.image;if(se!==null)Je=se.max.x-se.min.x,Ne=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,Et=se.min.y,St=se.isBox3?se.min.z:0;else{let ce=Math.pow(2,-Z);Je=Math.floor(pn.width*ce),Ne=Math.floor(pn.height*ce),y.isDataArrayTexture?ke=pn.depth:y.isData3DTexture?ke=Math.floor(pn.depth*ce):ke=1,tt=0,Et=0,St=0}q!==null?(et=q.x,Ht=q.y,Nn=q.z):(et=0,Ht=0,Nn=0);let hn=Ce.convert(U.format),Bn=Ce.convert(U.type),Qe;U.isData3DTexture?(st.setTexture3D(U,0),Qe=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(st.setTexture2DArray(U,0),Qe=N.TEXTURE_2D_ARRAY):(st.setTexture2D(U,0),Qe=N.TEXTURE_2D),Ie.activeTexture(N.TEXTURE0),Ie.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),Ie.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Ie.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let ei=Ie.getParameter(N.UNPACK_ROW_LENGTH),en=Ie.getParameter(N.UNPACK_IMAGE_HEIGHT),Ni=Ie.getParameter(N.UNPACK_SKIP_PIXELS),D=Ie.getParameter(N.UNPACK_SKIP_ROWS),j=Ie.getParameter(N.UNPACK_SKIP_IMAGES);Ie.pixelStorei(N.UNPACK_ROW_LENGTH,pn.width),Ie.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pn.height),Ie.pixelStorei(N.UNPACK_SKIP_PIXELS,tt),Ie.pixelStorei(N.UNPACK_SKIP_ROWS,Et),Ie.pixelStorei(N.UNPACK_SKIP_IMAGES,St);let Y=y.isDataArrayTexture||y.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let ce=Ye.get(y),Fe=Ye.get(U),He=Ye.get(ce.__renderTarget),ye=Ye.get(Fe.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,He.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ge=0;ge<ke;ge++)Y&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ye.get(y).__webglTexture,Z,St+ge),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ye.get(U).__webglTexture,Le,Nn+ge)),N.blitFramebuffer(tt,Et,tt+Je,Et+Ne,et,Ht,et+Je,Ht+Ne,N.DEPTH_BUFFER_BIT,N.NEAREST);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Z!==0||y.isRenderTargetTexture||Ye.has(y)){let ce=Ye.get(y),Fe=Ye.get(U);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,R),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let He=0;He<ke;He++)Y?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ce.__webglTexture,Z,St+He):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ce.__webglTexture,Z),de?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fe.__webglTexture,Le,Nn+He):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fe.__webglTexture,Le),Z!==0?N.blitFramebuffer(tt,Et,tt+Je,Et+Ne,et,Ht,et+Je,Ht+Ne,N.COLOR_BUFFER_BIT,N.NEAREST):de?N.copyTexSubImage3D(Qe,Le,et,Ht,Nn+He,tt,Et,Je,Ne):N.copyTexSubImage2D(Qe,Le,et,Ht,tt,Et,Je,Ne);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else de?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Qe,Le,et,Ht,Nn,Je,Ne,ke,hn,Bn,pn.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Qe,Le,et,Ht,Nn,Je,Ne,ke,hn,pn.data):N.texSubImage3D(Qe,Le,et,Ht,Nn,Je,Ne,ke,hn,Bn,pn):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Le,et,Ht,Je,Ne,hn,Bn,pn.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Le,et,Ht,pn.width,pn.height,hn,pn.data):N.texSubImage2D(N.TEXTURE_2D,Le,et,Ht,Je,Ne,hn,Bn,pn);Ie.pixelStorei(N.UNPACK_ROW_LENGTH,ei),Ie.pixelStorei(N.UNPACK_IMAGE_HEIGHT,en),Ie.pixelStorei(N.UNPACK_SKIP_PIXELS,Ni),Ie.pixelStorei(N.UNPACK_SKIP_ROWS,D),Ie.pixelStorei(N.UNPACK_SKIP_IMAGES,j),Le===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&N.generateMipmap(Qe),Ie.unbindTexture()},this.initRenderTarget=function(y){Ye.get(y).__webglFramebuffer===void 0&&st.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?st.setTextureCube(y,0):y.isData3DTexture?st.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?st.setTexture2DArray(y,0):st.setTexture2D(y,0),Ie.unbindTexture()},this.resetState=function(){ie=0,Q=0,pe=null,Ie.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xt._getUnpackColorSpace()}};var uo=class i extends ut{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new xe(t.color):new xe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Pi,d=new O,f=new O,h=new O,g=new Pt,x=new O(0,0,-1),m=new sn,p=new O,M=new O,A=new sn,b=new Pt,E=new fn(r,a,{samples:l,type:Sn}),w=new yt({name:c.name!==void 0?c.name:"unspecified",uniforms:Jn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=E.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=b,this.material=w,this.onBeforeRender=function(v,S,I){let C=this.getReflectionCamera(I);if(f.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(I.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(f,h),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(f),g.extractRotation(I.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(h),M.subVectors(f,x),M.reflect(d).negate(),M.add(f),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(d),C.lookAt(M),C.far=I.far,C.updateMatrixWorld(),C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrix.elements[8]*=-1,C.projectionMatrix.elements[12]*=-1,b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(C.projectionMatrix),b.multiply(C.matrixWorldInverse),b.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=C.projectionMatrix;C.isOrthographicCamera?(A.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],A.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],A.z=-I.far,A.w=1):(A.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],A.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],A.z=-1,A.w=(1+F.elements[10])/F.elements[14]),m.multiplyScalar(2/m.dot(A)),F.elements[2]=m.x,F.elements[6]=m.y,C.isOrthographicCamera?(F.elements[10]=m.z-o,F.elements[14]=m.w-1):(F.elements[10]=m.z+1-o,F.elements[14]=m.w),n.visible=!1;let J=v.getRenderTarget(),R=v.xr.enabled,W=v.shadowMap.autoUpdate;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.setRenderTarget(E),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(S,C),v.xr.enabled=R,v.shadowMap.autoUpdate=W,v.setRenderTarget(J);let ie=I.viewport;ie!==void 0&&v.state.viewport(ie),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()},this.getReflectionCamera=function(v){let S=this._reflectionCameras.get(v);return S===void 0&&(S=v.clone(),this._reflectionCameras.set(v,S)),S}}};uo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Bv=new dr(-1,1,1,-1,0,1),Yh=class extends Zt{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}},zv=new Yh,Ti=class{constructor(e){this._mesh=new ut(zv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var nr=class extends jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ti(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fo=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_c=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Be);this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nr(gs),this.copyPass.material.blending=Xn,this.timer=new Ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fo!==void 0&&(a instanceof fo?n=!0:a instanceof _c&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mc=class extends jn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var po={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Be},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Pt},cameraProjectionMatrixInverse:{value:new Pt},cameraWorldMatrix:{value:new Pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},mo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Sc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function $f(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=kv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new O(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ls(s,e,e);return r.wrapS=ki,r.wrapT=ki,r.needsUpdate=!0,r}function kv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var go={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Zh(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Be},cameraProjectionMatrixInverse:{value:new Pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Zh(i,e,t){let n=Vv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Vv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}var bc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(c+l)*u,f=c-d,h=l-d,g=e-f,x=t-h,m,p;g>x?(m=1,p=0):(m=0,p=1);let M=g-m+u,A=x-p+u,b=g-1+2*u,E=x-1+2*u,w=c&255,v=l&255,S=this.perm[w+this.perm[v]]%12,I=this.perm[w+m+this.perm[v+p]]%12,C=this.perm[w+1+this.perm[v+1]]%12,L=.5-g*g-x*x;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[S],g,x));let F=.5-M*M-A*A;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[I],M,A));let J=.5-b*b-E*E;return J<0?r=0:(J*=J,r=J*J*this._dot(this.grad3[C],b,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),d=Math.floor(t+l),f=Math.floor(n+l),h=1/6,g=(u+d+f)*h,x=u-g,m=d-g,p=f-g,M=e-x,A=t-m,b=n-p,E,w,v,S,I,C;M>=A?A>=b?(E=1,w=0,v=0,S=1,I=1,C=0):M>=b?(E=1,w=0,v=0,S=1,I=0,C=1):(E=0,w=0,v=1,S=1,I=0,C=1):A<b?(E=0,w=0,v=1,S=0,I=1,C=1):M<b?(E=0,w=1,v=0,S=0,I=1,C=1):(E=0,w=1,v=0,S=1,I=1,C=0);let L=M-E+h,F=A-w+h,J=b-v+h,R=M-S+2*h,W=A-I+2*h,ie=b-C+2*h,Q=M-1+3*h,pe=A-1+3*h,B=b-1+3*h,H=u&255,$=d&255,we=f&255,Ge=this.perm[H+this.perm[$+this.perm[we]]]%12,te=this.perm[H+E+this.perm[$+w+this.perm[we+v]]]%12,me=this.perm[H+S+this.perm[$+I+this.perm[we+C]]]%12,re=this.perm[H+1+this.perm[$+1+this.perm[we+1]]]%12,ae=.6-M*M-A*A-b*b;ae<0?s=0:(ae*=ae,s=ae*ae*this._dot3(this.grad3[Ge],M,A,b));let ne=.6-L*L-F*F-J*J;ne<0?r=0:(ne*=ne,r=ne*ne*this._dot3(this.grad3[te],L,F,J));let Ee=.6-R*R-W*W-ie*ie;Ee<0?a=0:(Ee*=Ee,a=Ee*Ee*this._dot3(this.grad3[me],R,W,ie));let qe=.6-Q*Q-pe*pe-B*B;return qe<0?o=0:(qe*=qe,o=qe*qe*this._dot3(this.grad3[re],Q,pe,B)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,d,f,h,g,x=(e+t+n+s)*c,m=Math.floor(e+x),p=Math.floor(t+x),M=Math.floor(n+x),A=Math.floor(s+x),b=(m+p+M+A)*l,E=m-b,w=p-b,v=M-b,S=A-b,I=e-E,C=t-w,L=n-v,F=s-S,J=I>C?32:0,R=I>L?16:0,W=C>L?8:0,ie=I>F?4:0,Q=C>F?2:0,pe=L>F?1:0,B=J+R+W+ie+Q+pe,H=a[B][0]>=3?1:0,$=a[B][1]>=3?1:0,we=a[B][2]>=3?1:0,Ge=a[B][3]>=3?1:0,te=a[B][0]>=2?1:0,me=a[B][1]>=2?1:0,re=a[B][2]>=2?1:0,ae=a[B][3]>=2?1:0,ne=a[B][0]>=1?1:0,Ee=a[B][1]>=1?1:0,qe=a[B][2]>=1?1:0,Pe=a[B][3]>=1?1:0,rt=I-H+l,Ze=C-$+l,Xe=L-we+l,Ut=F-Ge+l,zt=I-te+2*l,Dt=C-me+2*l,ht=L-re+2*l,rn=F-ae+2*l,At=I-ne+3*l,cn=C-Ee+3*l,an=L-qe+3*l,dn=F-Pe+3*l,N=I-1+4*l,$t=C-1+4*l,Ct=L-1+4*l,Gt=F-1+4*l,Ie=m&255,ln=p&255,Ye=M&255,st=A&255,T=o[Ie+o[ln+o[Ye+o[st]]]]%32,_=o[Ie+H+o[ln+$+o[Ye+we+o[st+Ge]]]]%32,X=o[Ie+te+o[ln+me+o[Ye+re+o[st+ae]]]]%32,_e=o[Ie+ne+o[ln+Ee+o[Ye+qe+o[st+Pe]]]]%32,ue=o[Ie+1+o[ln+1+o[Ye+1+o[st+1]]]]%32,ve=.6-I*I-C*C-L*L-F*F;ve<0?u=0:(ve*=ve,u=ve*ve*this._dot4(r[T],I,C,L,F));let V=.6-rt*rt-Ze*Ze-Xe*Xe-Ut*Ut;V<0?d=0:(V*=V,d=V*V*this._dot4(r[_],rt,Ze,Xe,Ut));let z=.6-zt*zt-Dt*Dt-ht*ht-rn*rn;z<0?f=0:(z*=z,f=z*z*this._dot4(r[X],zt,Dt,ht,rn));let k=.6-At*At-cn*cn-an*an-dn*dn;k<0?h=0:(k*=k,h=k*k*this._dot4(r[_e],At,cn,an,dn));let Te=.6-N*N-$t*$t-Ct*Ct-Gt*Gt;return Te<0?g=0:(Te*=Te,g=Te*Te*this._dot4(r[ue],N,$t,Ct,Gt)),27*(u+d+f+h+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var vo=class i extends jn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$f(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new fn(this.width,this.height,{type:Sn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},po.defines),uniforms:Jn.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Fa,this.normalMaterial.blending=Xn,this.pdMaterial=new yt({defines:Object.assign({},go.defines),uniforms:Jn.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},mo.defines),uniforms:Jn.clone(mo.uniforms),vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:Xn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:Jn.clone(gs.uniforms),vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:qa,blendDst:mr,blendEquation:Hi,blendSrcAlpha:Xa,blendDstAlpha:mr,blendEquationAlpha:Hi}),this.blendMaterial=new yt({uniforms:Jn.clone(Sc.uniforms),vertexShader:Sc.vertexShader,fragmentShader:Sc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Al,blendSrc:qa,blendDst:mr,blendEquation:Hi,blendSrcAlpha:Xa,blendDstAlpha:mr,blendEquationAlpha:Hi}),this._fsQuad=new Ti(null),this._originalClearColor=new xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new $i;s.format=Qi,s.type=Fs,this.normalRenderTarget=new fn(this.width,this.height,{minFilter:Cn,magFilter:Cn,type:Sn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new bc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Ls(s,e,e,Li,ii);return r.wrapS=ki,r.wrapT=ki,r.needsUpdate=!0,r}};vo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var xo={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var wc=class extends jn{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new fn(1,1,{minFilter:Cn,magFilter:Cn,type:Sn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new jr,this._materialDepth.depthPacking=Eh,this._materialDepth.blending=Xn;let o=Jn.clone(xo.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new yt({defines:Object.assign({},xo.defines),uniforms:o,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader}),this.uniforms=o,this._fsQuad=new Ti(this.materialBokeh),this._oldClearColor=new xe}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var jf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class i extends jn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Be(e.x,e.y):new Be(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,a,{type:Sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new fn(r,a,{type:Sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new fn(r,a,{type:Sn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=jf;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Be(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jn.clone(gs.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,premultipliedAlpha:!0,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new pi,this._fsQuad=new Ti(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Be(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new yt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};la.BlurDirectionX=new Be(1,0);la.BlurDirectionY=new Be(0,1);var _o={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Tc=class extends jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Jn.clone(_o.uniforms),this.material=new $r({name:_o.name,uniforms:this.uniforms,vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader}),this._fsQuad=new Ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===nn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ka&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gv=`attribute vec3 p,n,o;attribute vec4 c;uniform vec3 P,X,Y,Z,Lr,Lu,Lf,Lo;uniform vec4 Sw[4],S;uniform vec2 Lq;uniform float k,V;varying vec3 w,N;varying vec4 C;
void main(){float t=S.z,f=S.x,a=n.y*40.,h=fract(t*.5+n.y),s=n.x;vec3 q=p+o;N=n;C=c;
if(k>4.5&&k<5.5){vec3 d=q-Lo;float z=dot(d,Lf),y=mix(1.,z,Lq.y),zn=mix(z/Lq.x*2.-1.,(Lq.x+.1)/(Lq.x-.1)-.2*Lq.x/((Lq.x-.1)*max(z,.01)),Lq.y);w=q;C=vec4(z/Lq.x,0,0,0);gl_Position=vec4(dot(d,Lr),dot(d,Lu),zn*y,y);return;}
if(k>2.5&&k<4.5||k>6.5){w=Z+(X*p.x*S.y+Y*p.y)/f;gl_Position=vec4(p.xy,0,1);return;}
if(k>1.5&&k<2.5){
if(n.z>1.5){q+=vec3(sin(t*.2+a),sin(t*.17+a*1.3)*.6,cos(t*.23+a*.7))*1.5;C.a*=.5+.5*sin(t*1.5+a);}
else if(n.z>.5){q+=vec3(sin(a)*h*.6+sin(t*3.+a)*.1,.3-h*.8,cos(a*1.3)*h*.6);C.a*=(1.-h)*(.6+.4*sin(t*20.+a));}
else s*=1.+.1*sin(t*9.)+V*1.6;}
else if((k<.5||k>5.5)&&c.a>10.5){vec4 v=Sw[int(c.a-10.5)];vec3 r=q-v.xyz;q.xz-=r.y*vec2(sin(t*.6+v.w)*.06,cos(t*.5+v.w*1.7)*.05);}
w=q;vec3 d=q-P;float z=dot(d,Z);
gl_Position=vec4(dot(d,X)*f/S.y,dot(d,Y)*f,z*1.0001-.2,z);gl_PointSize=s*400.*S.w/z;}`,Hv=`precision highp float;precision highp sampler2D;uniform vec3 P,H,G,Md,Z,Lp[4],Lk[4],Mr,Mu,Mf,Mo,Q[4],Qc[4];uniform vec2 Mq,Lq,Dr;uniform vec4 S,Ra[2],Rb[2];uniform float k,V,Bm;uniform sampler2D D0,D1,T,Ba,Bb,Dp;varying vec3 w,N;varying vec4 C;
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
gl_FragColor=vec4(mix(mc(),o,f),1);}`,Bs=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255),Ec=i=>i.map(e=>e/Math.hypot(...i)),Kh=(i,e)=>i.map((t,n)=>t-e[n]),vs=Math.PI,Qf=Ec([.55,.55,-.4]),Ac=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),ed=i=>{let e=Ec([-i[2],0,i[0]]);return[e,[-e[2]*i[1],e[2]*i[0]-e[0]*i[2],e[0]*i[1]]]};function Wv(i,e,t,n,s,r,a,o){if(!o){let c=Kh(t,e),l=Kh(n,e),u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]];if(Math.hypot(...u)<1e-6)return;let d=u.reduce((f,h,g)=>f+h*(e[g]-a[g]),0)<0?-1:1;o=[0,0,0].map(()=>u.map(f=>f*d))}[e,t,n].map((c,l)=>i.push(...c,...o[l],...s,r))}function td(i,e,t,n,s,r,a,o){for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])i.push(e+c*s,t,n+l*r,c,0,l,...a,o)}function Jh(i,[e,t,n],[s,r,a],o,c){let l=[],u=[e,t+r*.3,n],d=(f,h,g,x)=>Wv(l,f,h,g,o,c,u,x);if(s/=2,a/=2,i=="cone"){let f=x=>[e+Math.cos(x*vs/8)*s,t,n+Math.sin(x*vs/8)*a],h=x=>[Math.cos(x*vs/8),.5,Math.sin(x*vs/8)],g=[0,-1,0];for(let x=0;x<16;x++)d(f(x),f(x+1),[e,t+r,n],[h(x),h(x+1),h(x+.5)]),d(f(x),f(x+1),[e,t,n],[g,g,g])}else if(i=="ball"){let f=(h,g)=>[Math.sin(h*vs/10)*Math.cos(g*vs/8),Math.cos(h*vs/10),Math.sin(h*vs/10)*Math.sin(g*vs/8)];for(let h=0;h<10;h++)for(let g=0;g<16;g++){let x=[f(h,g),f(h+1,g),f(h+1,g+1),f(h,g+1)],m=x.map(p=>[e+p[0]*s,t+r/2+p[1]*r/2,n+p[2]*a]);d(m[0],m[1],m[2],[x[0],x[1],x[2]]),d(m[0],m[2],m[3],[x[0],x[2],x[3]])}}else{let f=[...Array(8)].map((h,g)=>[e+(g&1?s:-s),t+(g&2?r:0),n+(g&4?a:-a)]);i=="ramp"&&(f=f.map((h,g)=>g&4?h:[h[0],t,h[2]]));for(let h of[[0,1,3,2],[4,5,7,6],[0,1,5,4],[2,3,7,6],[0,2,6,4],[1,3,7,5]])d(f[h[0]],f[h[1]],f[h[2]]),d(f[h[0]],f[h[2]],f[h[3]])}return l}function Xv(i,[e,t,n],[s,,r],a){let o=r>s,c=o?r:s,l=(o?s:r)/2+.15,u=t*.32,d=.03,f=x=>i.push(x[0],x[1],x[2],x[3],x[4],.3,...a,8),h=(x,m,p,M)=>[x,m,p,x,p,M].map(f);for(let x=-c/2+1;x<c/2;x+=2.2){let m=(p,M,A,b)=>o?[e+p,M,n+x,A,b]:[e+x,M,n+p,A,b];h(m(-l,t,-1,0),m(l,t,1,0),m(l+u,d,1,1),m(-l-u,d,-1,1))}let g=(x,m,p)=>o?[e,m,n+x*c/2,0,p]:[e+x*c/2,m,n,0,p];h(g(-1,t,0),g(1,t,0),g(1,d,1),g(-1,d,1))}function qv(i,e,t,n){let s=[],a=i[0]-60,o=e[0]-60,c=Math.ceil((i[1]+60-a)/2),l=Math.ceil((e[1]+60-o)/2),u=[];for(let h=0;h<=l;h++)for(let g=0;g<=c;g++){let x=a+g*2,m=o+h*2,p=Math.min(...t.map(([M,A,b,E])=>Math.hypot(Math.max(Math.abs(x-M)-b,0),Math.max(Math.abs(m-A)-E,0))));u.push((Math.sin(x*.27+Math.sin(m*.17)*2)*.5+Math.sin(m*.23-x*.12+1)*.4+Math.sin(x*.7+m*.6)*.08+Math.sin(x*1.3-m*1.1)*.04)*(1+1.6*Ac(10,50,p))*Ac(2.5,9,p)*Ac(0,30,Math.min(g,c-g,h,l-h)*2))}let d=(h,g)=>u[Math.min(l,Math.max(0,g))*(c+1)+Math.min(c,Math.max(0,h))],f=(h,g)=>[a+h*2,d(h,g),o+g*2,...Ec([d(h-1,g)-d(h+1,g),4,d(h,g-1)-d(h,g+1)])];for(let h=0;h<l;h++)for(let g=0;g<c;g++)for(let[x,m]of[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]]){let p=f(g+x,h+m);s.push(p[0],p[1],p[2],p[3],p[4],p[5],...n,5)}return s}async function nd(i){let e=i.getContext("webgl"),t=e.createProgram(),n=[],s=e.getExtension("ANGLE_instanced_arrays");[Gv,Hv].map((B,H)=>{let $=e.createShader(35633-H);e.shaderSource($,B),e.compileShader($),e.attachShader(t,$),e.getShaderParameter($,35713)||n.push(e.getShaderInfoLog($))}),[..."pnco"].map((B,H)=>e.bindAttribLocation(t,H,B)),e.linkProgram(t),e.getProgramParameter(t,35714)||n.push(e.getProgramInfoLog(t)),e.useProgram(t),e.bindBuffer(34962,e.createBuffer()),[..."pnc"].map((B,H)=>{e.enableVertexAttribArray(H),e.vertexAttribPointer(H,H<2?3:4,5126,0,40,H*12)}),e.depthFunc(515);let r=B=>e.getUniformLocation(t,B),a=(B,...H)=>e["uniform"+H.length+"f"](r(B),...H),o=()=>cancelAnimationFrame(C),c=(B,H,$=3)=>e["uniform"+$+"fv"](r(B),new Float32Array(H)),l=(B,H)=>(e.activeTexture(33984+B),e.bindTexture(3553,H)),u=(B,H,$,we,Ge,te,me=5121,re=1)=>{l(3,we),e.texImage2D(3553,0,6408,B,H,0,6408,me,null),[[10240,$],[10241,$],[10242,33071],[10243,33071]].map(([ae,ne])=>e.texParameteri(3553,ae,ne)),e.bindFramebuffer(36160,te),e.framebufferTexture2D(36160,36064,3553,we,0),re&&(e.bindRenderbuffer(36161,Ge),e.renderbufferStorage(36161,33189,B,H),e.framebufferRenderbuffer(36160,36096,36161,Ge))},d=()=>[e.createTexture(),e.createRenderbuffer(),e.createFramebuffer()],f=[d(),d()],h=d(),g=d(),x=[d(),d()],m=[d(),d()],p=512,M=(...B)=>[2,3,4,5].map((H,$)=>l(H,B[$]||null));u(1024,1024,9728,...f[0]),u(p*4,p*6,9728,...f[1]),["D0","D1","T","Ba","Bb","Dp"].map((B,H)=>e.uniform1i(r(B),H));let A=5121;for(let[B,H]of[[["OES_texture_half_float","EXT_color_buffer_half_float","OES_texture_half_float_linear"],36193],[["OES_texture_float","WEBGL_color_buffer_float","OES_texture_float_linear"],5126]])if(B.map($=>e.getExtension($)),u(4,4,9729,...h,H),e.checkFramebufferStatus(36160)==36053){A=H;break}let b,E="follow",w,v,S=[],I,C,L=0,F=0,J=[],R,W,ie=()=>s&&J.map(B=>{e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,5126,0,12,B.io*4),s.vertexAttribDivisorANGLE(3,1),s.drawArraysInstancedANGLE(4,B.f,B.n,B.c),s.vertexAttribDivisorANGLE(3,0),e.disableVertexAttribArray(3)});function Q(){e.disable(3042),e.enable(2929),e.depthMask(1),a("k",5),l(0,null),l(1,null),e.bindFramebuffer(36160,f[1][2]),e.viewport(0,0,p*4,p*6),e.clearColor(1,0,0,1),e.clear(16640);let B=(H,$,we,Ge,te,me,re,ae,ne,Ee)=>{e.bindFramebuffer(36160,H),e.viewport($,we,Ge,Ge),a("Lr",...re),a("Lu",...ae),a("Lf",...me),a("Lo",...te),a("Lq",ne,Ee),e.drawArrays(4,6,v[0]+v[1]),ie()};e.bindFramebuffer(36160,f[0][2]),e.clearColor(1,0,0,1),e.clear(16640),B(f[0][2],0,0,1024,...W),S.map(([H],$)=>{for(let we=0;we<6;we++){let Ge=we>>1,te=ae=>[0,0,0].map((ne,Ee)=>+(Ee==ae)),me=te(Ge).map(ae=>ae*(we&1?-1:1)),re=$*6+we;B(f[1][2],re%4*p,(re/4|0)*p,p,H,me,te((Ge+1)%3),te((Ge+2)%3),50,1)}})}function pe(B=2){if(!b)return;let H=i.clientWidth||i.width,$=i.clientHeight||i.height,{at:we,facing:Ge}=b.avatar,te=Ge*vs/180,me=+(E=="overview");(i.width!=H||i.height!=$)&&(i.width=H,i.height=$),(L!=H||F!=$)&&(u(L=H,F=$,9729,...h,A),u(H,$,9728,...g),[x,m].map((Dt,ht)=>Dt.map(rn=>u(Math.ceil(H/4**(ht+1)),Math.ceil($/4**(ht+1)),9729,...rn,A,0))));let re=[Math.sin(te),0,-Math.cos(te)],ae=[-re[2],0,re[0]];w=me?{position:[I.c[0]-re[0]*I.r,I.r*.9,I.c[2]-re[2]*I.r],target:[I.c[0],0,I.c[2]]}:{position:we.map((Dt,ht)=>Dt-re[ht]*6.5+ae[ht]*1.3+(ht==1)*3.4),target:we.map((Dt,ht)=>Dt+re[ht]*9+(ht==1)*.8)};let ne=w.position.map((Dt,ht)=>Dt+[Math.sin(B*.4)*.1,Math.sin(B*.31)*.07,Math.cos(B*.37)*.1][ht]),Ee=Ec(w.target.map((Dt,ht)=>Dt+[Math.cos(B*.3)*.12,Math.sin(B*.23)*.08,0][ht]-ne[ht])),[qe,Pe]=ed(Ee);a("P",...ne),a("X",...qe),a("Y",...Pe),a("Z",...Ee),a("H",...Bs(b.sky||"#2a2a4a")),a("S",1.8,H/$,B,$/720),a("V",me);let rt=[],Ze=[];for(let Dt=0;Dt<4;Dt++){let ht=S[Dt],rn=ht&&ht[0],At=ht&&ht[1].map($t=>$t/4.5),cn=rn?Kh(rn,ne):[0,0,0],an=rn?cn.reduce(($t,Ct,Gt)=>$t+Ct*Ee[Gt],0):0,dn=cn.reduce(($t,Ct,Gt)=>$t+Ct*qe[Gt],0)*1.8/(H/$)/an,N=cn.reduce(($t,Ct,Gt)=>$t+Ct*Pe[Gt],0)*1.8/an;rt.push(dn/2+.5,N/2+.5,rn&&an>.5?Ac(1.8,.8,Math.hypot(dn,N))*Math.min(1,50/an+.35):0),Ze.push(...At||[0,0,0])}c("Q",rt),c("Qc",Ze);let Xe=()=>{me?(e.drawArrays(4,6,v[0]),e.drawArrays(4,6+v[0]+v[1],v[2]+v[3])):e.drawArrays(4,6,v[0]+v[1]+v[2]+v[3]),ie()};l(0,f[0][0]),l(1,f[1][0]),M(),e.bindFramebuffer(36160,g[2]),e.viewport(0,0,H,$),e.clearColor(1,0,0,1),e.clear(16640),e.disable(3042),e.enable(2929),e.depthMask(1),a("k",6),Xe(),e.bindFramebuffer(36160,h[2]),e.viewport(0,0,H,$),e.clearColor(0,0,0,1),e.clear(16640),e.disable(2929),e.depthMask(0),e.enable(3042),e.blendFunc(770,771),a("k",3),e.drawArrays(4,0,6),e.enable(2929),e.depthMask(1),a("k",0),Xe(),e.depthMask(0);let Ut=6+v[0]+v[1]+v[2]+v[3];a("k",1),e.drawArrays(4,Ut,v[4]),e.blendFunc(770,1),a("k",2),e.drawArrays(0,Ut+v[4],v[5]),a("k",1),e.drawArrays(4,Ut+v[4]+v[5],v[6]),e.disable(2929),e.disable(3042),a("k",7);let zt=(Dt,ht,rn,At,cn,an)=>{let dn=Math.ceil(H/an),N=Math.ceil($/an);e.bindFramebuffer(36160,ht[2]),e.viewport(0,0,dn,N),M(Dt),a("Bm",cn),a("Dr",rn,At),e.drawArrays(4,0,6)};zt(h[0],x[1],2/H,0,1,4),zt(x[1][0],x[0],0,1/Math.ceil($/4),0,4),zt(x[0][0],m[1],3/Math.ceil(H/4),0,0,16),zt(m[1][0],m[0],0,1.5/Math.ceil($/16),0,16),e.bindFramebuffer(36160,null),e.viewport(0,0,H,$),M(h[0],x[0][0],m[0][0],g[0]),a("Dr",1/H,1/$),a("k",4),e.drawArrays(4,0,6),e.depthMask(1)}return{modes:["follow","overview"],setWorld(B){b=B;let H=Bs(b.ground||"#12121c"),$=[],we=[],Ge=[],te=[],me=[],re=[],{at:ae}=b.avatar,ne=[["ball",[ae[0],0,ae[2]],[.64,1.5,.52],"#7a5a35"],["ball",[ae[0],1.4,ae[2]],[.3,.32,.3],"#8a6a40"]],Ee=Object.values(b.things),qe=[ae[0],ae[0]],Pe=[ae[2],ae[2]],rt=[[ae[0],ae[2],.5,.5]],Ze=[0],Xe=Ee.filter(V=>V[5]==2),Ut=[],zt={},Dt={},ht=V=>V[0]+V[2]+V[3],rn=V=>V&&[V[1][0],V[1][1]+V[2][1]/2,V[1][2]],At=V=>Xe.filter(V).sort((z,k)=>k[2][0]*k[2][1]*k[2][2]-z[2][0]*z[2][1]*z[2][2])[0],cn=V=>Math.hypot(V[1][0]-ae[0],V[1][2]-ae[2]);Ee.map(V=>!V[5]&&(Dt[ht(V)]=(Dt[ht(V)]||0)+1)),S=Ee.filter(V=>V[5]==1).sort((V,z)=>cn(V)-cn(z)).slice(0,4).map(V=>[rn(V),Bs(V[3]).map(z=>z*3.6)]);for(let[V,z]of[[At(k=>k[0]=="ball"&&Bs(k[3])[2]>Bs(k[3])[0]),[1.1,1.8,2.6]],[At(k=>k[0]=="ball"&&Bs(k[3])[0]-Bs(k[3])[2]>.3),[3,2.1,1]]])V&&S.length<4&&S.push([rn(V),z]);let an=Xe.length?Xe.reduce((V,z)=>V.map((k,Te)=>k+z[1][Te]/Xe.length),[0,0,0]):[0,1e4,0];for(let[V,z,k,Te,,P]of[...Ee,...ne]){let he=Bs(Te),le=Math.max(k[0],k[2])/2;if(qe[0]=Math.min(qe[0],z[0]-le),qe[1]=Math.max(qe[1],z[0]+le),Pe[0]=Math.min(Pe[0],z[2]-le),Pe[1]=Math.max(Pe[1],z[2]+le),z[1]<1&&rt.push([z[0],z[2],k[0]/2,k[2]/2]),V=="disc"){td(te,z[0],z[1]+.02,z[2],k[0]/2,k[2]/2,he,P==2?6:3);continue}let Re=P==2&&V=="box"&&k[1]<.15&&k[0]>.4&&k[2]>.4;!P&&z[1]>=0&&z[1]<.3&&V!="ramp"&&k[1]>=.12&&k[0]+k[2]<12&&Ze[0]++<80&&td(te,z[0],.025,z[2],k[0]*.5+.5,k[2]*.5+.5,[0,0,0],7),P&&!Re&&V=="box"&&k[1]<.15&&(k=[k[0]<k[2]?k[0]*.4:k[0],k[1]*.5,k[2]<=k[0]?k[2]*.4:k[2]]);let Ce=!P&&V=="box"&&Math.max(...k)>=2.9&&k[1]>=.12,De=Ce&&z[1]>=3&&k[1]<=1.5&&k[0]>5&&k[2]>5,it=Re?6:P?P==1&&z[1]>=1&&Ut.length<4?11+Ut.push([z[0],z[1]+k[1]+.35,z[2],Ut.length*1.3])-1:1:Ce?8:k[1]<.12&&V=="box"?2:0;if(P==2&&V=="box"&&Math.min(k[0],k[2])<=.4&&Math.max(k[0],k[2])>=3&&z[1]>=3&&Xv(re,z,k,he.map(Ke=>Ke*1.1)),s&&!P&&!Ce&&(V=="box"||V=="cone")&&Dt[ht([V,z,k,Te])]>=3){let Ke=ht([V,0,k,Te])+it;(zt[Ke]||(zt[Ke]={m:Jh(V,[0,0,0],k,he,it),o:[]})).o.push(...z);continue}if((P?Ge:De?we:$).push(...Jh(V,z,k,he,it)),P){let Ke=[z[0],z[1]+k[1]/2,z[2]];me.push(...Ke,P==1?2.5:1,0,0,...he,.8);for(let be=0;be<22;be++)me.push(...Ke,.12,(be+.5)/22,1,...he,1)}}for(let V=0;V<90;V++)me.push(ae[0]+Math.sin(V*13)*12,3+Math.sin(V*29)*2.5,ae[2]+Math.sin(V*47)*12,.08,V*.37+.1,2,.54,.54,.58,.8);S.map(([V],z)=>{for(let k=0;k<28;k++)me.push(V[0]+Math.sin(k*13+z*7)*4,V[1]-.8+Math.sin(k*29+z)*1.8,V[2]+Math.sin(k*47+z*3)*4,.08,k*.53+z,2,.54,.54,.58,.9)}),I={c:[(qe[0]+qe[1])/2,0,(Pe[0]+Pe[1])/2],r:Math.max(10,Math.hypot(qe[1]-qe[0],Pe[1]-Pe[0])*.5+3)};let dn=[...Jh("box",[0,-1.02,0],[800,1,800],H,5),...qv(qe,Pe,rt,H)],N=Math.max(16,I.r*.9),$t=Qf.map(V=>-V),[Ct,Gt]=ed($t);W=[I.c.map((V,z)=>V-$t[z]*N*1.2),$t,Ct.map(V=>V/N),Gt.map(V=>V/N),N*2.4,0];let Ie=Xe.filter(V=>V[0]=="box"&&Math.min(V[2][0],V[2][2])<=.4&&Math.max(V[2][0],V[2][2])>=3&&V[1][1]>=3).sort((V,z)=>z[2][0]+z[2][2]-V[2][0]-V[2][2]).slice(0,2),ln=[],Ye=[];for(let V=0;V<2;V++){let z=Ie[V];ln.push(...z?[z[1][0],z[1][2],z[2][0]/2+.1,z[2][2]/2+.1]:[0,0,0,0]),Ye.push(...z?[z[1][1],...Bs(z[3])]:[0,0,0,0])}c("Ra",ln,4),c("Rb",Ye,4),c("Lp",[0,1,2,3].flatMap(V=>S[V]?S[V][0]:[0,1e4,0])),c("Lk",[0,1,2,3].flatMap(V=>S[V]?S[V][1]:[0,0,0])),c("Sw",[0,1,2,3].flatMap(V=>Ut[V]||[0,1e4,0,0]),4),a("Mo",...W[0]),c("Mf",W[1]),c("Mr",W[2]),c("Mu",W[3]),a("Mq",W[4],0),a("Md",...Qf),a("G",...an);let st=[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].flatMap(([V,z])=>[V,z,0,(V+1)/2,(z+1)/2,0,0,0,0,0]),T=[st,$,we,Ge,dn,te,me,re],_=T.reduce((V,z)=>V+z.length,0),X=Object.values(zt),_e=_+X.reduce((V,z)=>V+z.m.length+z.o.length,0),ue=new Float32Array(_e),ve=0;T.map(V=>{ue.set(V,ve),ve+=V.length}),J=X.map(V=>{let z={f:ve/10,n:V.m.length/10,c:V.o.length/3};return ue.set(V.m,ve),ve+=V.m.length,z}),X.map((V,z)=>{J[z].io=ve,ue.set(V.o,ve),ve+=V.o.length}),e.bufferData(34962,ue,35044),v=[$,we,Ge,dn,te,me,re].map(V=>V.length/10),Q(),pe()},setCamera(B){E=B,pe()},getCamera:()=>w,renderStill(B){E=B,pe()},start(){C=requestAnimationFrame(function B(H){pe(H/1e3),C=requestAnimationFrame(B)})},stop:o,dispose:o,resize(){pe()},errors:()=>n.splice(0)}}var Pc=Math.PI,ir=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),Rc=(i,e,t)=>i+(e-i)*t,Cc=(i,e,t)=>{let n=Math.imul(i+374761393,668265263)^Math.imul(e+1274126177,2246822519)^Math.imul(t+97,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},$h=(i,e,t)=>{let n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a);return Rc(Rc(Cc(n,s,t),Cc(n+1,s,t),o),Rc(Cc(n,s+1,t),Cc(n+1,s+1,t),o),c)},jh=(i,e)=>$h(i*.011,e*.011,5)*.55+$h(i*.025+7,e*.025,6)*.3+$h(i*.07,e*.07+3,7)*.15,id=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},Ic=`float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){return n2(p)*.55+n2(p*2.1+5.)*.3+n2(p*4.3+9.)*.15;}`,sd=`vec3 hazeC(){return mix(uHor*vec3(1.03,.98,.86),vec3(.86,.78,1.)*.95,.3);}
float hazeF(float d){float f=1.-exp(-pow(d*.0028,2.)),h=max(f,(1.-exp(-d/640.))*.8);return mix(h,1.,smoothstep(650.,1000.,d));}`,Yv="attribute vec3 color;varying vec3 vW,vN,vC;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vN=normal;vC=color;gl_Position=projectionMatrix*viewMatrix*w;}",Zv=`precision highp float;uniform vec3 uHor,uSun;uniform float uT;varying vec3 vW,vN,vC;
${Ic}
${sd}
void main(){vec3 V=vW-cameraPosition;float dist=length(V);vec3 N=normalize(vN);vec2 p=vW.xz;
float g1=fb(p*.9),g2=n2(p*4.1),g3=n2(p*13.);float blade=g2*.5+g3*.5;
float wv=.5+.5*sin(dot(p,vec2(.05,.03))*6.28+uT*.5+g1*4.);
vec3 base=vC*(.74+.5*g1)*(.84+.3*blade)*(.94+.12*wv);
float sun=dot(N,uSun);
vec3 L=vec3(.5,.46,.78)*(.35+.65*N.y)*.85+vec3(1.,.8,.5)*(max(sun,0.)*1.25+max(sun*.5+.5,0.)*.3);
vec3 col=base*L*1.05;
col+=vec3(1.,.8,.5)*pow(max(dot(normalize(V),uSun),0.),3.)*.1*base;
col=mix(col,hazeC(),hazeF(dist));gl_FragColor=vec4(col,1.);}`,Jv="varying vec2 vU;varying vec3 vW;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",Kv=`precision highp float;uniform vec3 uHor,uSun,uZen;uniform vec4 uLamp;uniform float uT;varying vec2 vU;varying vec3 vW;
${Ic}
${sd}
vec3 skyAt(vec3 r){float hy=max(r.y,0.);vec3 c=mix(uHor*vec3(1.03,.98,.86),uZen,smoothstep(0.,.9,pow(hy,.55)));float an=acos(clamp(dot(r,uSun),-1.,1.));
c+=vec3(1.,.82,.52)*exp(-an*2.4)*.3+vec3(1.,.9,.66)*exp(-an*9.)*.4+vec3(1.,.82,.55)*exp(-an*30.)*1.2;
vec2 q=r.xz/(r.y+.2)*1.2+vec2(uT*.012,uT*.005);c=mix(c,vec3(1.04,.94,.78),smoothstep(.5,.8,fb(q*vec2(1.,2.3)))*.4);return c;}
void main(){vec3 V=normalize(vW-cameraPosition);float dist=distance(vW,cameraPosition);vec2 p=vW.xz;
vec2 g=vec2(n2(p*1.7+vec2(0.,uT*.5))-.5,n2(p*1.3-vec2(uT*.4,0.)+7.)-.5)*.3+(n2(p*6.+uT*vec2(.3,1.4))-.5)*.18;
vec3 N=normalize(vec3(g.x,1.,g.y));vec3 R=reflect(V,N);R.y=abs(R.y);
float cs=clamp(dot(-V,N),0.,1.),F=.55+.45*pow(1.-cs,2.);
vec3 sk=skyAt(R);vec3 col=mix(vec3(.16,.3,.36),sk*vec3(.98,.99,1.05)*.8,F);col=mix(col,vec3(.7,.8,.92)*(.5+.3*sk),.4);
float a=abs(vU.x);col*=.88+.3*(1.-a);
float s1=n2(p*vec2(5.,2.)+vec2(0.,-uT*1.5)),s2=n2(p*7.-uT*.7+9.),sh=pow(smoothstep(.6,.9,s1*.5+s2*.6),2.);
col+=vec3(1.,.98,.92)*sh*(.5+1.4*pow(max(dot(V,uSun),0.),1.5))*1.1;
if(uLamp.z>0.){vec2 cd=normalize(cameraPosition.xz-uLamp.xz+1e-4),q=p-uLamp.xz-vec2(uLamp.w,0.);float al=dot(q,cd),ac=q.x*cd.y-q.y*cd.x,wd=.5+.07*max(al,0.);
float st=exp(-ac*ac/(wd*wd))*(al>0.?exp(-al/30.):exp(-al*al/2.));st*=.55+.9*n2(p*vec2(6.,2.5)+vec2(0.,-uT*1.1));
col+=mix(vec3(1.,.6,.2),vec3(1.,.8,.45),st*.4)*st*uLamp.z;}
col=mix(col,hazeC(),hazeF(dist)*.9);
gl_FragColor=vec4(col,(1.-smoothstep(.7,1.,a))*(1.-smoothstep(500.,900.,dist)*.6));}`;function rd({land:i,riv:e,lamps:t,U:n,glowT:s}){let r=[],a=i.reduce((re,ae)=>re+ae[2][0]*ae[2][2],0),o=i.reduce((re,ae)=>re+ae[1][0]*ae[2][0]*ae[2][2],0)/a,c=i.reduce((re,ae)=>re+ae[1][2]*ae[2][0]*ae[2][2],0)/a,l=e[0],u=!!l&&l[2][0]>l[2][2],d=l?l[1][1]+l[2][1]/2:i[0][1][1]+i[0][2][1]-1,f=l?u?l[1][0]:l[1][2]:c,h=l?u?l[1][2]:l[1][0]:1e6,g=t[0];if(g&&l){let re=u?g[2]:g[0],ae=re>=h?1:-1;h=re-ae*(2.15+.2),!u&&Math.abs(g[2]-f)>40&&(h=l[1][0])}let x=re=>{let ae=re-f;return(16*Math.sin(ae*.011)+5*Math.sin(ae*.031))*Math.min(1,Math.abs(ae)/70)},m=re=>2+Math.abs(re-f)*.009,p=(re,ae)=>Math.abs((u?ae:re)-(h+x(u?re:ae))),M=(re,ae)=>{let ne=Math.hypot(re-o,ae-c),Ee=Math.max(.2,3+(jh(re,ae)-.42)*(24+40*ir(20,380,ne))+9*ir(300,800,ne));return d+Rc(-.5,Ee,ir(m(u?re:ae)+1.5,m(u?re:ae)+24,p(re,ae)))},A=100,b=1100,E=[],w=[],v=[],S=[],I=new xe("#3f8a44"),C=new xe("#4f9a48"),L=new xe("#8cb458"),F=new xe("#5aa05a"),J=new xe("#8aa84c"),R=new xe,W=re=>{let ae=(re-A)/A;return Math.sign(ae)*Math.pow(Math.abs(ae),2.2)*b};for(let re=0;re<=2*A;re++)for(let ae=0;ae<=2*A;ae++){let ne=o+W(ae),Ee=c+W(re),qe=M(ne,Ee),Pe=1.5,rt=M(ne+Pe,Ee)-M(ne-Pe,Ee),Ze=M(ne,Ee+Pe)-M(ne,Ee-Pe),Xe=Math.hypot(rt,2*Pe,Ze);E.push(ne,qe,Ee),v.push(-rt/Xe,2*Pe/Xe,-Ze/Xe);let Ut=jh(ne*1.7+40,Ee*1.7),zt=qe-d,Dt=p(ne,Ee);R.copy(I).lerp(C,ir(.3,.7,Ut)).lerp(J,ir(.55,.8,jh(ne*.6+90,Ee*.6))*.6).lerp(L,ir(4,20,zt)*.6).lerp(F,1-ir(1,14,Dt)),w.push(R.r,R.g,R.b)}for(let re=0;re<2*A;re++)for(let ae=0;ae<2*A;ae++){let ne=re*(2*A+1)+ae,Ee=ne+1,qe=ne+2*A+1,Pe=qe+1;S.push(ne,qe,Ee,Ee,qe,Pe)}let ie=new Zt;ie.setAttribute("position",new Oe(E,3)),ie.setAttribute("normal",new Oe(v,3)),ie.setAttribute("color",new Oe(w,3)),ie.setIndex(S);let Q={uHor:n.uHor,uSun:n.uSun,uT:n.uT},pe=new ut(ie,new yt({uniforms:Q,vertexShader:Yv,fragmentShader:Zv,fog:!1}));if(pe.frustumCulled=!1,pe.renderOrder=-6,r.push(pe),l){let re=[],ae=[],ne=[];for(let Xe=0;Xe<=220;Xe++){let Ut=f+(Xe/220-.5)*2*1e3,zt=h+x(Ut),Dt=m(Ut),ht=Ut+1,rn=h+x(ht)-zt,At=Math.hypot(rn,1),cn=1/At,an=-rn/At,dn=d+.08+.45*ir(60,300,Math.abs(Ut-f));for(let N of[-1,1]){let $t=zt+cn*Dt*N,Ct=Ut+an*Dt*N;re.push(u?Ct:$t,dn,u?$t:Ct),ae.push(N,Ut/10)}if(Xe<220){let N=Xe*2;ne.push(N,N+1,N+2,N+1,N+3,N+2)}}let qe=new Zt;qe.setAttribute("position",new Oe(re,3)),qe.setAttribute("uv",new Oe(ae,2)),qe.setIndex(ne);let Pe=g?[g[0],g[2]]:[0,0],rt=new yt({uniforms:{...Q,uZen:n.uZen,uLamp:{value:g?new sn(Pe[0],Pe[1],4,u?0:h>g[0]?.9:-.9):new sn}},vertexShader:Jv,fragmentShader:Kv,transparent:!0,depthWrite:!1,fog:!1,side:vn}),Ze=new ut(qe,rt);Ze.frustumCulled=!1,Ze.renderOrder=-5,r.push(Ze)}let B=id(404),H=[],$=[[-34,-22],[38,-40],[-52,14],[30,26],[-18,-70],[60,-8]];for(let re=0;re<14;re++){let ae=B()*Pc*2,ne=22+B()*150,Ee=re<6?o+$[re][0]:o+Math.cos(ae)*ne,qe=re<6?c+$[re][1]:c+Math.sin(ae)*ne*.8,Pe=8+(B()*8|0);for(let rt=0;rt<Pe;rt++){let Ze=Ee+(B()-.5)*20,Xe=qe+(B()-.5)*20;p(Ze,Xe)<m(u?Ze:Xe)+7||Math.hypot(Ze-g?.[0],Xe-g?.[2])<5||H.push([Ze,M(Ze,Xe),Xe,3.2+B()*3.6*(ne>90?1.5:1),B()])}}let we=(re,ae,ne,Ee)=>{let qe=new us(re,new gn({roughness:1,color:ae}),ne),Pe=new Pt;return H.forEach((rt,Ze)=>{Ee(Pe,rt),qe.setMatrixAt(Ze,Pe),qe.setColorAt(Ze,new xe().setHSL(.31+(rt[4]-.5)*.06,.6,.13+rt[4]*.08))}),qe.frustumCulled=!1,qe.instanceMatrix.needsUpdate=!0,qe},Ge=new Gi(.08,.14,1,5).translate(0,.5,0),te=new wi(1,9,7),me=H.length;if(me){let re=we(Ge,"#5a4030",me,(ae,ne)=>ae.makeScale(ne[3]*.2,ne[3]*.5,ne[3]*.2).setPosition(ne[0],ne[1]-.1,ne[2]));re.instanceColor.array.fill(.3),re.instanceColor.needsUpdate=!0,r.push(re,we(te,"#ffffff",me,(ae,ne)=>ae.makeScale(ne[3]*.34,ne[3]*.3,ne[3]*.34).setPosition(ne[0],ne[1]+ne[3]*.42,ne[2])),we(te,"#ffffff",me,(ae,ne)=>ae.makeScale(ne[3]*.24,ne[3]*.22,ne[3]*.24).setPosition(ne[0]+.15,ne[1]+ne[3]*.7,ne[2]-.1)))}for(let re of t){let ae=(Ee,qe,Pe)=>{let rt=new hs(new Ki({map:s,color:new xe(Pe),blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:qe}));return rt.position.set(re[0],re[1],re[2]),rt.scale.set(Ee,Ee,1),rt.renderOrder=4,rt};r.push(ae(16,.6,"#ff9a30"),ae(4,1,"#ffd890"));let ne=new ut(new Vi(4.5,32).rotateX(-Pc/2),new pi({map:s,color:"#ff9a30",blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:.5}));ne.position.set(re[0],M(re[0],re[2])+.12,re[2]),ne.renderOrder=-4,r.push(ne)}return{out:r,pick:pe,hgt:M}}var $v="attribute float aH;varying vec2 vU;varying vec3 vW,vR;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vR=normal;gl_Position=projectionMatrix*viewMatrix*w;}",jv=`precision highp float;uniform float uT,uS;varying vec2 vU;varying vec3 vW,vR;
${Ic}
void main(){vec3 V=normalize(vW-cameraPosition);float v=vU.y;float st=.5+.5*sin(vU.x*6.2832*3.+uS*9.+uT*.1)*sin(vU.x*6.2832*5.-uT*.07+uS*3.);
float nz=n2(vec2(vU.x*14.+uS*7.,uT*.05+v*3.));float s=(.35+.65*st)*(.5+nz);
float a=s*smoothstep(0.,.1,v)*(1.-.75*smoothstep(.25,1.,v))*(.25+.75*pow(abs(dot(V,normalize(vR))),.8));
gl_FragColor=vec4(vec3(1.,.8,.48)*1.4,a*.11*smoothstep(10.,45.,distance(vW,cameraPosition)));}`,Qv=`attribute vec4 aC;attribute vec3 aD;uniform float uT;varying vec2 vQ;varying vec3 vD;varying float vF;
void main(){float f=fract(uT*aD.z*.004+aD.x*7.3);vec3 c=aC.xyz;c.x+=(f-.5)*aC.w*3.;vec3 Vv=c-cameraPosition;float dst=length(Vv);vec3 vn=Vv/dst;
vec3 X=vec3(1.,0.,0.);vec3 r=normalize(X-vn*dot(X,vn));vec3 u=cross(vn,r);vQ=position.xy;vD=aD;vF=sin(f*3.1416)*smoothstep(5.,24.,dst);
vec3 w=c+r*position.x*aC.w+u*position.y*aD.y;gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}`,ex=`precision highp float;varying vec2 vQ;varying vec3 vD;varying float vF;
${Ic}
void main(){float e=exp(-(vQ.x*vQ.x*1.6+vQ.y*vQ.y*7.));float n=.45+.9*n2(vec2(vQ.x*5.+vD.x*40.,vQ.y*2.));float a=e*n*vF*.3;if(a<.004)discard;
vec3 c=mix(vec3(1.,.9,.72),vec3(.82,.74,.96),vD.x);gl_FragColor=vec4(c*1.05,a);}`;function ad({at:i,rift:e,top:t,bottom:n,U:s}){let r=[],a=id(1313),o=28;for(let h=0;h<6;h++){let g=e[0]+(a()-.5)*70,x=e[1]+(a()-.5)*20,m=1.2+a()*2,p=m*(1.8+a()*.8),M=-.08,A=.3,b=t-n-a()*10,E=[],w=[],v=[],S=[];for(let L=0;L<=o;L++){let F=L/o*Pc*2,J=Math.cos(F),R=Math.sin(F);if(E.push(g+J*m,t,x+R*m,g+M*b+J*p,t-b,x+A*b+R*p),w.push(L/o,0,L/o,1),v.push(J,0,R,J,0,R),L<o){let W=L*2;S.push(W,W+1,W+2,W+1,W+3,W+2)}}let I=new Zt;I.setAttribute("position",new Oe(E,3)),I.setAttribute("uv",new Oe(w,2)),I.setAttribute("normal",new Oe(v,3)),I.setIndex(S);let C=new ut(I,new yt({uniforms:{uT:s.uT,uS:{value:a()*10}},vertexShader:$v,fragmentShader:jv,transparent:!0,depthWrite:!1,blending:Mn,side:vn,fog:!1}));C.frustumCulled=!1,C.renderOrder=2,r.push(C)}let c=46,l=new Float32Array(c*4),u=new Float32Array(c*3);for(let h=0;h<c;h++){let g=a()*Pc*2,x=24+a()*150;l.set([i[0]+Math.sin(g)*x,i[1]-38+a()*62,i[2]-Math.cos(g)*x*.9-20,26+a()*50],h*4),u.set([a(),1.2+a()*2.6,.5+a()*1.4],h*3)}let d=new Qs;d.setAttribute("position",new Oe([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),d.setIndex([0,1,2,0,2,3]),d.setAttribute("aC",new Ii(l,4)),d.setAttribute("aD",new Ii(u,3)),d.instanceCount=c;let f=new ut(d,new yt({uniforms:{uT:s.uT},vertexShader:Qv,fragmentShader:ex,transparent:!0,depthWrite:!1,fog:!1}));return f.frustumCulled=!1,f.renderOrder=1,r.push(f),r}var jt=Math.PI,od=[.55,.55,-.4],Qh=[.26,.12,-.96],yo=i=>{let e=Math.hypot(...i);return i.map(t=>t/e)},Ai=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),yr=(i,e,t)=>i+(e-i)*t,sr=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},ca=(i,e,t=0)=>{let n=Math.imul(i+374761393,668265263)^Math.imul(e+1274126177,2246822519)^Math.imul(t+97,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},xs=(i,e)=>{let t=sr(i),n=Float32Array.from({length:e*e},t);return(s,r)=>{s*=e,r*=e;let a=Math.floor(s),o=Math.floor(r),c=s-a,l=r-o,u=c*c*(3-2*c),d=l*l*(3-2*l),f=(h,g)=>n[(g%e+e)%e*e+(h%e+e)%e];return yr(yr(f(a,o),f(a+1,o),u),yr(f(a,o+1),f(a+1,o+1),u),d)}},ha=(i,e=4,t=4)=>{let n=[...Array(t)].map((s,r)=>xs(i+r*17,e<<r));return(s,r)=>{let a=0,o=.5,c=0;for(let l of n)a+=l(s,r)*o,c+=o,o*=.5;return a/c}};function tx(i,e,t,n){let s=new Float32Array(i*i),r=new Uint8ClampedArray(i*i*4),a=new Uint8ClampedArray(i*i*4);for(let l=0;l<i;l++)for(let u=0;u<i;u++){let[d,f,h]=e((u+.5)/i,(l+.5)/i),g=l*i+u;s[g]=d,r[g*4]=r[g*4+1]=r[g*4+2]=f*255,r[g*4+3]=255,a[g*4]=a[g*4+1]=a[g*4+2]=h*255,a[g*4+3]=255}let o=new Uint8ClampedArray(i*i*4),c=(l,u)=>s[(u+i)%i*i+(l+i)%i];for(let l=0;l<i;l++)for(let u=0;u<i;u++){let d=(c(u-1,l)-c(u+1,l))*t,f=(c(u,l+1)-c(u,l-1))*t,h=Math.hypot(d,f,1),g=(l*i+u)*4;o[g]=(d/h*.5+.5)*255,o[g+1]=(f/h*.5+.5)*255,o[g+2]=(1/h*.5+.5)*255,o[g+3]=255}return{map:n(r,i,!0),normalMap:n(o,i),roughnessMap:n(a,i)}}function nx(){let i=ha(3,4,4),e=xs(9,64);return(t,n)=>{let s=Math.floor(n*8),r=t*4+(s&1)*.5,a=Math.floor(r),o=r-a,c=n*8-s,l=Math.min(o*128,(1-o)*128,c*64,(1-c)*64),u=ca(s,(a%4+4)%4,3),d=i(t,n),f=e(t,n),h=l<3.5?0:Ai(3.5,9,l),g=h*(.55+.25*d+.1*f+.12*u),x=d>.7?(d-.7)*1.2:0;return[g-x*h,h<.05?.42+.1*f:(.62+.32*u)*(.82+.3*d)*(.9+.2*f),h<.05?.96:.74+.22*f]}}function ix(){let i=ha(21,4,4),e=xs(5,96),t=[0,1,2].map(s=>.25+.5*ca(s,1,7)),n=[0,1,2].map(s=>ca(s,2,7));return(s,r)=>{let a=Math.floor(r*3),o=r*3-a,c=(s*2+n[a])%2,l=Math.floor(c),u=c-l,d=l?1-t[a]:t[a],f=Math.min(u*d*256,(1-u)*d*256,o*170,(1-o)*170),h=a*2+l,g=i(s,r),x=e(s,r);return[Ai(3,11,f)*(.7+.2*g+.06*x+.04*(u-.5)*ca(h,0,3)),f<3?.4:(.72+.28*ca(h,5,1))*(.85+.25*g),f<3?.97:.55+.3*x+.15*g]}}function sx(){let i=ha(33,4,5),e=xs(8,128),t=xs(14,8);return(n,s)=>{let r=2*jt*(6*n+3*s)+t(n,s)*9,a=Math.sin(r),o=a>0?1-(1-a)*(1-a):a*.8,c=i(n,s),l=e(n,s);return[.5+.28*o*(.5+c)+.3*l,.82+.3*c-.06*o,.9+.1*l]}}function rx(){let i=xs(61,192),e=xs(62,192),t=ha(63,4,4);return(n,s)=>{let r=Math.max(i(n,s*3),e(n*3,s)),a=t(n,s);return[.5+.4*r,(.6+.4*r)*(.8+.4*a),.84]}}function ax(){let i=ha(41,4,5),e=ha(43,16,3),t=xs(7,128);return(n,s)=>{let r=i(n,s),a=Math.abs(e(n,s)-.5)<.018?.6:1;return[(.4+.5*r+.2*t(n,s))*a,(.78+.3*r)*(.6+.4*a)*(.92+.16*t(n,s)),.8+.18*t(n,s)]}}function ox(){let i=xs(12,16);return(e,t)=>[.5+.12*(Math.sin(2*jt*(5*e+2*t))+Math.sin(2*jt*(3*t-4*e)+1.7)+.7*Math.sin(2*jt*(9*e+7*t)+3))+.2*i(e,t),1,.1]}var lx="varying vec3 vD;void main(){vD=position;vec4 p=projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.);gl_Position=p.xyww;}",ud=`float hh(vec3 p){p=fract(p*vec3(.1031,.103,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
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
return nc+(stl(r,40.,.10,.2,t,bd)*1.1+stl(r,90.,.14,.19,t,bd)*.9+stl(r,200.,.06,.17,t,bd)*.8);}`,cx=`precision highp float;uniform vec3 uHor,uZen,uSun,uMoon;uniform float uD,uT,uAlt;varying vec3 vD;
${ud}
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
gl_FragColor=vec4(mix(nc,dc,uD),1.);}`,hx=`precision highp float;uniform float uT,uS,uA,uBase;uniform vec3 uHor,uSun;varying vec3 vW;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=n2(p)*a;p=p*2.03+vec2(17.,9.);a*=.5;}return s/.9375;}
void main(){vec3 V=vW-cameraPosition;float dist=length(V);vec2 p=vW.xz*uS+vec2(uT*.02,uT*.008)*uS*8.;
float fd=1.-smoothstep(900.,1700.,dist);float d=mix(.5,fb(p),fd),cov=smoothstep(uBase,uBase+.22,d);
float ds=mix(.5,fb(p+uSun.xz*.5),fd),lit=clamp(.5+(d-ds)*7.,0.,1.)*(.35+.65*cov);
vec3 c=mix(vec3(.66,.55,.8),vec3(1.12,.99,.76),lit)*(.72+.42*cov);
c=mix(c,mix(uHor*1.02,vec3(.86,.78,1.),.5),1.-exp(-dist/900.));
float a=mix(cov*uA,1.,step(.99,uA))*(1.-smoothstep(900.,1450.,dist));gl_FragColor=vec4(c,a);}`,ld="varying vec2 vU;varying vec3 vW;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",ux=`uniform float uT,uL;uniform vec3 uC,uN;varying vec2 vU;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
void main(){float a=abs(vU.x),L=vU.y*uL;float edge=1.-smoothstep(.5,1.,a),core=exp(-a*a*2.5);
float fl=.78+.22*sin(L*1.7-uT*3.)+.1*sin(L*5.-uT*7.+vU.x*3.);float q=floor(L*1.4-uT*.9);
float g=pow(max(sin(L*5.-uT*6.+sin(vU.x*4.+q)*1.5),0.),14.)*smoothstep(.35,.9,h(vec2(q,floor(vU.x*2.5))));
vec3 c=vec3(1.,.78,.36)*uC*fl*(.7+.9*core)+vec3(1.,.95,.75)*(g*1.3+core*.25);gl_FragColor=vec4(c,edge*smoothstep(2.,8.,distance(vW,cameraPosition))*mix(.22,1.,smoothstep(.08,.4,abs(dot(normalize(vW-cameraPosition),uN)))));}`,fx=`attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(uT*(.07+.1*fract(aS*3.1))+aS*7.3);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*.9+sin(uT*2.+aS*40.)*.1;q.y+=.12+fract(aS*5.)*.8+sin(uT*3.+aS*20.)*.08;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(f*3.1416)*(.45+.55*sin(uT*9.+aS*60.));gl_PointSize=max(.09*uK/-mv.z,1.8);}`,cd="varying float vA;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vec3(1.,.9,.55)*2.,vA*a);}",dx=`attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(aS),ph=fract(uT*(.1+.1*fract(aS*3.7))+aS*5.1);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*1.8+sin(uT*.8+aS*40.)*.25;q.y+=.2-ph*(2.4+fract(aS*9.)*2.6);q.z+=sin(uT*.9+aS*30.)*.25+ph*.7;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(ph*3.1416)*(1.-ph*.35)*(.55+.45*sin(uT*7.+aS*60.));gl_PointSize=max(.14*uK/-mv.z,2.2);}`,px=`attribute vec4 aC,aD;uniform float uT;varying vec2 vQ;varying vec4 vD;varying float vFd,vDist;varying vec3 vRay;
void main(){vec3 c=aC.xyz;float r=aC.w,sd=aD.x;c+=vec3(sin(uT*.05+sd*40.),sin(uT*.04+sd*17.)*.12,cos(uT*.045+sd*23.))*r*.4+vec3(sin(uT*.011)*9.,0.,cos(uT*.008)*5.);r*=1.+.05*sin(uT*.3+sd*30.);
vRay=normalize(c-cameraPosition);vec4 mv=viewMatrix*vec4(c,1.);vDist=length(mv.xyz);vFd=smoothstep(r*.6,r*1.8+6.,vDist);vQ=position.xy;vD=aD;mv.xy+=position.xy*r*1.18;gl_Position=projectionMatrix*mv;}`,mx=`precision highp float;uniform float uT;uniform vec3 uSun,uHor;varying vec2 vQ;varying vec4 vD;varying float vFd,vDist;varying vec3 vRay;
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
gl_FragColor=vec4(c,a*vFd*.94);}`,gx=`attribute vec4 aB;attribute vec3 aV;uniform float uT;uniform vec3 uCen;uniform vec2 uDir;varying float vA,vS;
void main(){float L=150.;vec3 d=vec3(aB.x,aB.y,aB.z)+vec3(uDir.x,0.,uDir.y)*aV.y*uT;d.xz=mod(d.xz+L*.5,L)-L*.5;d.y+=sin(uT*.2+aV.x*9.)*1.5;vec3 wp=uCen+d;float fp=uT*(5.+aV.y)+aV.x*30.,flap=sin(fp);
vec3 lp=position;float wing=abs(lp.x);lp.y+=flap*wing*.55*step(.01,wing);lp.y+=sin(fp*.5)*.04;lp*=aB.w;
float yaw=atan(uDir.x,uDir.y)+(aV.z-.5)*.5;float cy=cos(yaw),sy=sin(yaw);vec3 rp=vec3(lp.x*cy+lp.z*sy,lp.y,-lp.x*sy+lp.z*cy);
vec4 mv=viewMatrix*vec4(wp+rp,1.);gl_Position=projectionMatrix*mv;vA=1.-smoothstep(.62,.98,length(d.xz)/(L*.5));vS=.5+.5*flap*step(.01,wing);}`,vx="uniform vec3 uHor;varying float vA,vS;void main(){vec3 c=mix(vec3(.22,.17,.36),vec3(.46,.38,.6),vS*.6);c=mix(c,uHor*.8,.28);gl_FragColor=vec4(c,vA*.9);}",xx=`attribute vec4 aP;attribute vec3 aC;uniform float uT,uK;varying vec4 vC;
void main(){vec3 B=vec3(46.,20.,46.),wind=vec3(1.5,-.14,.95);float s=aP.w;vec3 q=aP.xyz*B+wind*uT*(.55+.9*fract(s*7.1))+vec3(sin(uT*.9+s*40.)*.7,sin(uT*1.4+s*30.)*.4,cos(uT*.8+s*20.)*.7);
vec3 rel=mod(q-cameraPosition+B*.5,B)-B*.5;vec4 mv=viewMatrix*vec4(cameraPosition+rel,1.);gl_Position=projectionMatrix*mv;
float e=max(abs(rel.x)/(B.x*.5),max(abs(rel.y)/(B.y*.5),abs(rel.z)/(B.z*.5)));float fl=.65+.35*sin(uT*3.+s*50.);vC=vec4(aC*(.8+.5*fl),(1.-smoothstep(.7,1.,e))*smoothstep(.6,2.5,-mv.z)*.85);
gl_PointSize=clamp(.075*(.7+fract(s*3.3))*uK/-mv.z,1.8,16.);}`,_x="varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=smoothstep(1.,.3,r);gl_FragColor=vec4(vC.rgb,vC.a*a);}",yx={name:"GlassFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uT:{value:2},uHor:{value:new xe},uOv:{value:0},uRip:{value:0},uFt:{value:Array.from({length:7},()=>new Be)},uBc:{value:new sn}},vertexShader:`uniform mat4 textureMatrix;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
void main(){vUv=textureMatrix*vec4(position,1.);vL=position.xy*2.;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`uniform vec3 color,uHor;uniform sampler2D tDiffuse;uniform float uT,uOv,uRip;uniform vec2 uFt[7];uniform vec4 uBc;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
${ud}
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
gl_FragColor=vec4(col,1.-smoothstep(.8,1.,length(vL)));}`},Dc={uniforms:{tDiffuse:{value:null},uSun:{value:new Be},uAmt:{value:0},uCol:{value:new xe("#ffc477")},uA:{value:1.7},uT:{value:2},uThr:{value:1.5}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 uSun;uniform float uAmt,uA,uT,uThr;uniform vec3 uCol;varying vec2 vUv;
void main(){vec4 o=texture2D(tDiffuse,vUv);vec2 d=(uSun-vUv),st=d/36.*.97,p=vUv;float s=0.,w=1.;
for(int i=0;i<36;i++){p+=st;vec3 c=texture2D(tDiffuse,p).rgb;s+=max(dot(c,vec3(.33))-uThr,0.)*w;w*=.968;}
vec2 dd=d*vec2(uA,1.);float ang=atan(dd.y,dd.x);
o.rgb+=smoothstep(.015,.3,dot(o.rgb,vec3(.33)))*uCol*s*uAmt*.07*(.65+.35*sin(ang*38.+uT*.25)*sin(ang*11.+1.-uT*.15))*exp(-length(dd)*1.2);gl_FragColor=o;}`},hd={uniforms:{tDiffuse:{value:null},uT:{value:2},uA:{value:1.7},uD:{value:0},uV:{value:.5},uN:{value:0},uLP:{value:[new O,new O,new O,new O]}},vertexShader:Dc.vertexShader,fragmentShader:`uniform sampler2D tDiffuse;uniform float uT,uA,uD,uV,uN;uniform vec3 uLP[4];varying vec2 vUv;
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
c+=(h(vUv*vec2(1920.,1080.)+floor(uT*24.))-.5)*.045*(1.-l*.6);gl_FragColor=vec4(c,1.);}`},Mx=`attribute float aS,aK,aZ;attribute vec3 aC;uniform float uT,uK,uD;uniform vec3 uSun;varying vec4 vC;
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
vC=vec4(aC,al);gl_PointSize=max(aZ*uK/-mv.z,1.6);}`,Sx="varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vC.rgb,vC.a*a);}",bx=`uniform float uT,uS,uK;uniform vec3 uC;varying vec2 vUv;
void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float y=p.y,t=uT*2.+uS*7.;
float sw=sin(t*1.7+y*4.)*.07*y*y+sin(t*3.3+y*7.)*.035*y,x=p.x-sw;
float w=1.7*pow(max(y,0.),.42)*pow(max(1.-y,0.),1.15)*(1.+.1*sin(t*5.+y*9.))*(.92+.08*sin(t*2.3));
float d=abs(x)/max(w,.001),body=smoothstep(1.,.35,d)*step(0.,y)*smoothstep(1.,.9,y);
float hot=smoothstep(.75,0.,d)*(1.-y*.8),cd=length(vec2(x*1.25,(y-.2)*.9)),core=smoothstep(.2,.02,cd);
vec3 c=mix(uC*1.5,vec3(1.,.93,.72)*1.6,hot*.7);c=mix(c,vec3(.55,.8,1.)*2.2,core);
gl_FragColor=vec4(c*body*uK,1.);}`,eu=class extends jn{constructor(){super(),this.needsSwap=!1,this.rt=new fn(8,8,{type:ii}),this.buf=new Uint8Array(256),this.lum=.1,this.q=new Ti(new yt({uniforms:{tD:{value:null}},depthTest:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D tD;varying vec2 vUv;void main(){float s=0.;for(int i=0;i<4;i++)for(int j=0;j<4;j++){vec3 c=texture2D(tD,vUv+(vec2(float(i),float(j))-1.5)*.03).rgb;s+=min(dot(c,vec3(.3,.59,.11)),1.4);}gl_FragColor=vec4(clamp(log2(s/16.+1e-4)/12.+.75,0.,1.),0.,0.,1.);}"}))}render(e,t,n){this.q.material.uniforms.tD.value=n.texture,e.setRenderTarget(this.rt),this.q.render(e),e.readRenderTargetPixels(this.rt,0,0,8,8,this.buf);let s=0,r=0;for(let a=0;a<64;a++){let o=a%8-3.5,c=(a/8|0)-3.5,l=Math.exp(-(o*o+c*c)/14);s+=l*(this.buf[a*4]/255-.75)*12,r+=l}this.lum=Math.pow(2,s/r)}};async function wx(i){let e=[],t=new gc({canvas:i,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});if(t.shadowMap.enabled=!0,t.shadowMap.type=pr,t.toneMapping=gr,t.setPixelRatio(1),!t.capabilities.isWebGL2)throw Error("no webgl2");let n=new Yr,s=new di(58,16/9,.25,1500),r=new bi,a=new Yr,o=Math.min(8,t.capabilities.getMaxAnisotropy());n.add(r);let c=(D,j,Y)=>{let de=document.createElement("canvas");de.width=de.height=j,de.getContext("2d").putImageData(new ImageData(D,j),0,0);let ce=new Ys(de);return ce.wrapS=ce.wrapT=ki,ce.anisotropy=o,Y&&(ce.colorSpace=fi),ce},l={},u=(D,j,Y,de,ce)=>{if(!l[D]){l[D]=tx(512,j(),Y,c);for(let Fe of Object.values(l[D]))Fe.repeat.set(1/de,1/ce)}return l[D]},d=()=>u("brick",nx,5,2.4,2),f=()=>u("flag",ix,4,3,3),h=()=>u("dust",sx,3,4,4),g=()=>u("stone",ax,3,1.2,1.2),x=()=>u("water",ox,1.2,2,2),m={uRim:{value:0},uRimC:{value:new xe("#ffd49a")}},p={value:2},M={value:0},A={value:0},b={value:0},E={value:0},w=`float gust(vec2 p){return pow(.5+.5*sin(dot(p,vec2(.13,.07))-uCT*1.15+sin(dot(p,vec2(-.05,.1))+uCT*.3)*1.4),2.);}
`,v=`float cn2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5),b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5),c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5),d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5);return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
`,S=(D,j={})=>(D.onBeforeCompile=Y=>{Y.uniforms.uRim=m.uRim,Y.uniforms.uRimC=m.uRimC,Y.uniforms.uCT=p,Y.uniforms.uGR=j.gold?M:{value:0},Y.uniforms.uCS=A,Y.uniforms.uWG=b,Y.uniforms.uHZ=E,Y.uniforms.uWV={value:j.wave?1:0},Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
uniform float uCT,uWG;varying vec3 vWP;varying float vGu;
`+w).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vGu=0.;`).replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_INSTANCING
vWP=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
#else
vWP=(modelMatrix*vec4(transformed,1.)).xyz;
#endif`),j.cloth&&(Y.vertexShader=Y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float cw=clamp((1.5-position.y)/1.5,0.,1.)*`+j.cloth+";transformed.x+=sin(uCT*1.7+position.y*4.+position.z*3.)*.05*cw+sin(uCT*.7)*.02*cw;transformed.z+=cos(uCT*1.3+position.y*3.+position.x*3.)*.04*cw+.03*cw*(.6+.4*sin(uCT*2.1));")),j.sway&&(Y.vertexShader=Y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
float ph=instanceMatrix[3].x*.7+instanceMatrix[3].z*.5;vec3 wc=(modelMatrix*vec4(instanceMatrix[3].xyz,1.)).xyz;
#else
float ph=modelMatrix[3].x*.7+modelMatrix[3].z*.5;vec3 wc=modelMatrix[3].xyz;
#endif
float gs=gust(wc.xz)*uWG;float sw=max(position.y-(`+j.sway[1].toFixed(3)+"),0.)*"+j.sway[0].toFixed(4)+"*(1.+2.6*gs);transformed.x+=sin(uCT*1.3+ph)*sw+sin(uCT*.5+ph*2.)*sw*.5+gs*sw*1.6;transformed.z+=cos(uCT*1.1+ph*1.3)*sw*.6+gs*sw*.7;vGu=gs;")),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim,uGR,uCT,uCS,uWG,uHZ,uWV;uniform vec3 uRimC;varying vec3 vWP;varying float vGu;
`+w+v).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+(j.sheen?"totalEmissiveRadiance+=vec3(1.,.78,.42)*pow(max(sin(normal.y*7.+normal.x*3.-uCT*1.1),0.),7.)*.4*(.4+.6*pow(1.-saturate(dot(normal,normalize(vViewPosition))),1.5));":"")).replace("#include <fog_fragment>",`{vec2 cq=vWP.xz*.03+vec2(uCT*.045,uCT*.02);float cs=smoothstep(.42,.68,cn2(cq)*.65+cn2(cq*2.3+7.)*.35);gl_FragColor.rgb*=mix(vec3(1.),vec3(.62,.6,.82),cs*uCS);float gw=uWV*uWG*gust(vWP.xz);gl_FragColor.rgb*=1.+gw*.16+vGu*.2;gl_FragColor.rgb+=vec3(.5,.42,.16)*gw*.03;}
#ifdef USE_FOG
float ff=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);vec3 fc=mix(vec3(1.,.8,.48)*fogColor*1.15,vec3(.62,.5,.8)*(.55+.45*fogColor),smoothstep(25.,160.,vFogDepth));fc=mix(fc,vec3(.78,.68,.95)*(.62+.38*fogColor),uHZ*smoothstep(10.,110.,vFogDepth));gl_FragColor.rgb=mix(gl_FragColor.rgb,fc,ff*(1.+uHZ*.6));
#endif`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=vec3(1.,.72,.34)*uGR*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),3.)*.7;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=uRimC*uRim*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),2.2)*1.4;`)},D.customProgramCacheKey=()=>"rim"+(j.cloth||"")+(j.gold?"g":"")+(j.sway?"w"+j.sway:"")+(j.sheen?"s":"")+(j.wave?"v":"")+"12",D),I={},C=[],L=[],F=[],J=[],R=!1,W=[],ie=[],Q=[],pe=[],B=[],H=[],$=null,we=null,Ge=[],te=[],me=!1,re=!1,ae=[],ne=null,Ee=null,qe=[],Pe=!1,rt=0,Ze=(D,j=1)=>new xe(D).multiplyScalar(j),Xe=D=>I["b"+D]||(I["b"+D]=S(new gn({color:Ze(D,1.7),...d(),roughness:1,metalness:0,normalScale:new Be(1.3,1.3)}))),Ut=D=>I["f"+D]||(I["f"+D]=(()=>{let j=S(new gn({color:Ze(D,1.35),...f(),roughness:1,metalness:0,emissive:Ze(D,.5),emissiveIntensity:0}));return C.push(j),j})()),zt=D=>I["s"+D]||(I["s"+D]=S(new gn({color:Ze(D,1.4),...g(),roughness:1,metalness:0}))),Dt=(D,j)=>I["g"+D+j]||(I["g"+D+j]=(()=>{let Y=R&&j==1,de=S(new gn({color:Ze(D,.4),emissive:Ze(D),emissiveIntensity:j==1?Y?.9:3.2:2.4,roughness:.5,...Y?{transparent:!0,opacity:.4,depthWrite:!1}:{}}));return de.userData.b=Y?.9:3.2,j==1&&L.push(de),de})()),ht=D=>I["gl"+D]||(I["gl"+D]=new fr({color:Ze(D,.7),emissive:Ze(D),emissiveIntensity:.75,roughness:.04,metalness:0,transparent:!0,opacity:.55,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,side:vn,depthWrite:!1})),rn=D=>I["lq"+D]||(I["lq"+D]=(()=>{let j=x(),Y=new fr({color:Ze(D,.35),emissive:Ze(D),emissiveIntensity:.55,roughness:.05,metalness:0,transparent:!0,opacity:.93,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,normalMap:j.normalMap,normalScale:new Be(.35,.35)});return F.push(j.normalMap),Y})()),At={value:2},cn=(D,j)=>new yt({uniforms:{uT:At,uC:{value:new xe(D)},uX:{value:j}},fog:!1,transparent:!1,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform float uT,uX;uniform vec3 uC;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}void main(){float pu=.72+.28*sin(vW.z*.13-uT*1.5)+.1*sin(vW.z*.9-uT*2.7);float e=1.-.35*smoothstep(.2,1.2,abs(vW.x-uX));float q=floor(vW.z*.8-uT*.9),f=pow(max(sin(vW.z*.8-uT*3.6+sin(vW.x*4.+q)),0.),12.)*smoothstep(.3,.9,.5+.5*sin(vW.x*3.1+q*5.+h(vec2(q,1.))*6.));vec3 c=vec3(1.,.78,.42)*uC*pu*e*2.2+vec3(1.,.92,.6)*f*1.6;gl_FragColor=vec4(c,1.);}"}),an=(D,j)=>new yt({uniforms:{uC:{value:new xe(D)},uK:{value:j}},transparent:!0,blending:Mn,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3,vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform vec3 uC;uniform float uK;varying vec2 vUv;varying vec3 vW;void main(){float r=length(vUv-.5)*2.,g=exp(-r*r*4.2)*(1.-smoothstep(.6,1.,r));vec3 c=uC*mix(.7,1.25,g);float nr=smoothstep(1.5,9.,distance(vW,cameraPosition));gl_FragColor=vec4(c*g*uK*(.35+.65*nr),1.);}"}),dn=(D,j,Y,de)=>new yt({uniforms:{uC:{value:D},uP:{value:new O(...j)},uS:{value:new O(de?Y[0]:Y[2],Y[1],de?Y[2]:Y[0])},uX:{value:de?1:0}},fog:!1,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform vec3 uC,uP,uS;uniform float uX;varying vec3 vW;void main(){bool zt=uX>.5;vec3 l=vW-uP;float nn=zt?l.z:l.x,a=zt?l.x:l.z;if(abs(nn)<uS.z*.5+.02)discard;vec3 V=normalize(vW-cameraPosition);float va=zt?V.x:V.z,vn=zt?V.z:V.x;float u=a/uS.x+.5,v=l.y/uS.y;float off=va/max(abs(vn),.25)*.45,u2=(a+off)/uS.x+.5;float ew=min(min(u,1.-u)*uS.x,(1.-v)*uS.y);float j=smoothstep(0.,.24,ew);float gl=exp(-pow((u2-.5)*2.2,2.))*(.3+.9*pow(1.-clamp(v,0.,1.),1.3));vec3 c=vec3(.012,.01,.02)+uC*gl*1.15;float ph=fract(v*8.+(u2-.5)*1.8),st=smoothstep(0.,.18,ph)*smoothstep(.6,.4,ph);c*=mix(1.,.4+1.1*st,.65*smoothstep(0.,.25,v)*(1.-v*.35));c*=.22+.78*j;c+=uC*.35*exp(-ew*9.)*(1.-j);gl_FragColor=vec4(c,1.);}"}),N=(D,j)=>new yt({uniforms:{uC:{value:D},uK:{value:j},uT:At},transparent:!0,blending:Mn,depthWrite:!1,side:vn,fog:!1,vertexShader:"varying vec3 vN,vP;varying vec2 vU;void main(){vU=uv;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uC;uniform float uK,uT;varying vec3 vN,vP;varying vec2 vU;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.5);float s=.85+.15*sin(vU.x*50.+uT*.3)*sin(vU.x*13.-uT*.2);gl_FragColor=vec4(uC*e*s*pow(vU.y,1.3)*uK,1.);}"}),$t=(()=>{let D=document.createElement("canvas");D.width=D.height=64;let j=D.getContext("2d"),Y=j.createRadialGradient(32,32,0,32,32,32);return Y.addColorStop(0,"#fff"),Y.addColorStop(.55,"#fff"),Y.addColorStop(1,"#000"),j.fillStyle=Y,j.fillRect(0,0,64,64),new Ys(D)})(),Ct=(()=>{let D=document.createElement("canvas");D.width=D.height=64;let j=D.getContext("2d"),Y=j.createRadialGradient(32,32,0,32,32,32);Y.addColorStop(0,"rgba(255,255,255,1)"),Y.addColorStop(.3,"rgba(255,255,255,.45)"),Y.addColorStop(1,"rgba(255,255,255,0)"),j.fillStyle=Y,j.fillRect(0,0,64,64);let de=new Ys(D);return de.colorSpace=fi,de})(),Gt=(()=>{let D=document.createElement("canvas");D.width=32,D.height=64;let j=D.getContext("2d");for(let Y=0;Y<64;Y++){let de=Math.pow(1-Y/63,1.6),ce=j.createLinearGradient(0,0,32,0);ce.addColorStop(0,"#000"),ce.addColorStop(.5,`rgb(${de*255},${de*255},${de*255})`),ce.addColorStop(1,"#000"),j.fillStyle=ce,j.fillRect(0,Y,32,1)}return new Ys(D)})(),Ie=D=>{let j=D.attributes.position,Y=D.attributes.normal,de=D.attributes.uv;for(let ce=0;ce<j.count;ce++){let Fe=j.getX(ce),He=j.getY(ce),ye=j.getZ(ce),ge=Math.abs(Y.getX(ce)),K=Math.abs(Y.getY(ce)),nt=Math.abs(Y.getZ(ce));K>=ge&&K>=nt?de.setXY(ce,Fe,ye):ge>=nt?de.setXY(ce,ye,He):de.setXY(ce,Fe,He)}return D},ln=([D,j,Y],[de,ce,Fe])=>{de/=2,Fe/=2;let He=[D-de,j,Y-Fe],ye=[D+de,j,Y-Fe],ge=[D+de,j,Y+Fe],K=[D-de,j,Y+Fe],nt=[D-de,j+ce,Y+Fe],pt=[D+de,j+ce,Y+Fe],Wt=[He,ge,ye,He,K,ge,K,nt,pt,K,pt,ge,He,nt,K,ye,pt,nt,He,ye,nt,ye,ge,pt,He,K,nt],Rn=[He,ge,ye,He,K,ge,K,ge,pt,K,pt,nt,He,ye,pt,He,pt,nt,He,nt,K,ye,ge,pt],Jt=new Zt;return Jt.setAttribute("position",new Oe(Rn.flat(),3)),Jt.setAttribute("uv",new Oe(new Float32Array(Rn.length*2),2)),Jt.computeVertexNormals(),Ie(Jt)},Ye=(D,j,Y,de)=>{let ce=de?[0,0,0]:j,Fe;if(D=="box")Fe=new Zs(Y[0],Y[1],Y[2]).translate(ce[0],ce[1]+Y[1]/2,ce[2]);else if(D=="cone")Fe=new Js(.5,1,20,1).scale(Y[0],Y[1],Y[2]).translate(ce[0],ce[1]+Y[1]/2,ce[2]);else if(D=="ball")Fe=new wi(.5,24,16).scale(Y[0],Y[1],Y[2]).translate(ce[0],ce[1]+Y[1]/2,ce[2]);else{if(D=="ramp")return ln(ce,Y);Fe=new Vi(.5,40).rotateX(-jt/2).scale(Y[0],1,Y[2]).translate(ce[0],ce[1]+.02,ce[2])}return D=="disc"?Fe:Ie(Fe)},st=(()=>{let D=xs(77,64);return(j,Y)=>D((j%64+64)%64/64,(Y%64+64)%64/64)})(),T=(D,j)=>{let Y=D+(st(D*.03,j*.03)-.5)*30,de=j+(st(D*.03+9,j*.03)-.5)*30,ce=st((Y*.55+de*.84)*.05,(de*.55-Y*.84)*.14),Fe=st(D*.11+3,j*.11),He=st(D*.4,j*.4),ye=Math.pow(1-Math.abs(2*ce-1),1.7)-.35;return yr(ce-.5,ye*.9,.6)*1.5+(Fe-.5)*.45+(He-.5)*.12},_=(D,j,Y)=>{let de=1e9;for(let[ce,Fe,He,ye]of Y){let ge=Math.hypot(Math.max(Math.abs(D-ce)-He,0),Math.max(Math.abs(j-Fe)-ye,0));ge<de&&(de=ge)}return T(D,j)*(1+.8*Ai(10,50,de))*Ai(2.5,9,de)},X=(D,j,Y,de)=>{let He=D[0]-60,ye=j[0]-60,ge=Math.ceil((D[1]+60-He)/1.5),K=Math.ceil((j[1]+60-ye)/1.5),nt=[],pt=[],Wt=[];for(let zn=0;zn<=K;zn++)for(let mn=0;mn<=ge;mn++){let un=He+mn*1.5,Vn=ye+zn*1.5,Pn=_(un,Vn,Y)*Ai(0,30,Math.min(mn,ge-mn,zn,K-zn)*1.5);Wt.push(Pn),nt.push(un,Pn,Vn);let Un=st(un*.07,Vn*.07),li=.86+.28*Un+.35*Math.max(Pn,0)/3;pt.push(de.r*li,de.g*li,de.b*li*(1.05-.1*Un))}let Rn=[];for(let zn=0;zn<K;zn++)for(let mn=0;mn<ge;mn++){let un=zn*(ge+1)+mn,Vn=un+1,Pn=un+ge+1,Un=Pn+1;Rn.push(un,Pn,Vn,Vn,Pn,Un)}let Jt=new Zt;return Jt.setAttribute("position",new Oe(nt,3)),Jt.setAttribute("color",new Oe(pt,3)),Jt.setAttribute("uv",new Oe(nt.filter((zn,mn)=>mn%3!=1),2)),Jt.setIndex(Rn),Jt.computeVertexNormals(),Jt},_e=D=>{let j=D.attributes.position,Y=D.attributes.uv;for(let de=0;de<j.count;de++)Y.setXY(de,j.getX(de),j.getZ(de));return D},ue=()=>u("grass",rx,7,5,5),ve={value:400},V=D=>{let j=[],Y=[],de=[],ce=[],Fe=0;for(let ye of D)j.push(...ye.attributes.position.array),Y.push(...ye.attributes.normal.array),de.push(...ye.attributes.uv.array),ce.push(...ye.index.array.map(ge=>ge+Fe)),Fe+=ye.attributes.position.count;let He=new Zt;return He.setAttribute("position",new Oe(j,3)),He.setAttribute("normal",new Oe(Y,3)),He.setAttribute("uv",new Oe(de,2)),He.setIndex(ce),He},z=()=>V([0,1,2].map(D=>new Js(.045,.5,3,1).translate(0,.25,0).rotateZ((D-1)*.32).rotateY(D*2.1))),k=(D,j,Y)=>(D.userData={id:j,fact:Y},r.add(D),St.push(D),D),Te=(D,j,Y,de,ce)=>{let Fe=de.length/3;D.forEach((He,ye)=>{let ge=yr(j,Y,ye/(D.length-1));for(let K=0;K<4;K++){let nt=K/4*jt*2;de.push(He[0]+Math.cos(nt)*ge,He[1],He[2]+Math.sin(nt)*ge)}});for(let He=0;He<D.length-1;He++)for(let ye=0;ye<4;ye++){let ge=Fe+He*4+ye,K=Fe+He*4+(ye+1)%4;ce.push(ge,ge+4,K,K,ge+4,K+4)}},P=(D,j,Y,de,ce,Fe)=>{let He=de[0]/2,ye=de[2]/2,ge=Y[1]+de[1],K=Math.min(Math.max(He*.7,5),16),nt=14,pt=72,Wt=sr(Math.round(Y[0]*7+Y[2]*13+5)),Rn=new xe(ce),Jt=new bi,zn=[],mn=[],un=[],Vn=[],Pn=[new xe("#9a8696"),new xe("#76626a"),new xe("#4e4450")],Un=(Vt,Yn)=>{let tn=Vt/nt,xt=Yn/pt*jt*2,En=Math.cos(xt),In=Math.sin(xt),kn=st(En*2.5+tn*4+7,In*2.5+tn*3),ri=st(En*6+30,In*6+tn*9),ai=(Vt==0?1:Vt==1?.985:Math.pow(1-tn,.72)*.97)*(1+(kn-.5)*.45*tn+(ri-.5)*.1*tn),xi=Vt==0?0:-(.35+K*Math.pow(tn,1.15))+(ri-.5)*K*.06*tn;return[En*He*ai,xi,In*ye*ai,tn,kn]};for(let Vt=0;Vt<=nt;Vt++)for(let Yn=0;Yn<pt;Yn++){let[tn,xt,En,In,kn]=Un(Vt,Yn),ri=.88+.16*Math.sin(xt*2.3+kn*5),ai=Pn[0].clone().lerp(Pn[1],Math.min(1,In*1.6)).lerp(Pn[2],Math.max(0,In-.55)*1.8).multiplyScalar(ri).lerp(Rn.clone().multiplyScalar(.8),1-Ai(.02,.11,In));zn.push(tn,xt,En),mn.push(ai.r,ai.g,ai.b),un.push(tn/5+xt/6,En/5+xt/4)}for(let Vt=0;Vt<nt;Vt++)for(let Yn=0;Yn<pt;Yn++){let tn=Vt*pt+Yn,xt=Vt*pt+(Yn+1)%pt,En=tn+pt,In=xt+pt;Vn.push(tn,xt,En,xt,In,En)}let li=new Zt;li.setAttribute("position",new Oe(zn,3)),li.setAttribute("color",new Oe(mn,3)),li.setAttribute("uv",new Oe(un,2)),li.setIndex(Vn),li.computeVertexNormals();let Ui=new ut(li,S(new gn({vertexColors:!0,...g(),roughness:1,normalScale:new Be(1.4,1.4),side:vn})));Ui.castShadow=!0,Ui.receiveShadow=!0,Jt.add(Ui);let Me=new Vi(1,72).rotateX(-jt/2).scale(He,1,ye),vt=Me.attributes.position,$e=Me.attributes.uv;for(let Vt=0;Vt<vt.count;Vt++)$e.setXY(Vt,vt.getX(Vt)/6,vt.getZ(Vt)/6);let Bt=new ut(Me,S(new gn({color:Ze(ce,1.25),...ue(),roughness:.9,normalScale:new Be(1.2,1.2)}),{wave:!0}));Bt.receiveShadow=!0,Jt.add(Bt);let An=[],Fn=[];for(let Vt=0;Vt<70;Vt++){let Yn=2+Math.floor(Wt()*8),tn=Math.floor(Wt()*pt),xt=Un(Yn,tn),En=(1.2+Wt()*3.6)*(K/14),In=xt[0]/He*(.3+Wt()),kn=xt[2]/ye*(.3+Wt()),ri=Wt()*6,ai=[[xt[0],xt[1],xt[2]]];for(let xi=1;xi<=4;xi++)ai.push([xt[0]+In*xi*.18+Math.sin(ri+xi)*.12,xt[1]-En*xi/4,xt[2]+kn*xi*.18+Math.cos(ri+xi*1.3)*.12]);Te(ai,.1,.02,An,Fn)}let Si=new Zt;Si.setAttribute("position",new Oe(An,3)),Si.setIndex(Fn),Si.computeVertexNormals(),Jt.add(new ut(Si,S(new gn({color:"#8a6a4a",roughness:1,side:vn}))));let si=Math.min(900,Math.round(He*He*.9)),Kt=new us(z(),S(new gn({color:Ze(ce,1.15),roughness:.9,side:vn}),{sway:[.14,0]}),si),Gn=new Pt,qn=new xe,Ei=0;for(let Vt=0;Vt<si*3&&Ei<si;Vt++){let Yn=Wt()*jt*2,tn=Math.sqrt(Wt())*.97,xt=Math.cos(Yn)*He*tn,En=Math.sin(Yn)*ye*tn,In=Y[0]+xt,kn=Y[2]+En,ri=.6+Wt()*.9;Wt()<.02||Fe.some(([ai,xi])=>Math.abs(In-ai[0])<xi[0]/2+.2&&Math.abs(kn-ai[2])<xi[2]/2+.2)||(Gn.makeRotationY(Wt()*6).setPosition(xt,0,En),Gn.scale(new O(ri,ri*(.7+Wt()*.8),ri)),Kt.setMatrixAt(Ei,Gn),Kt.setColorAt(Ei,qn.setRGB(.75+Wt()*.4,.8+Wt()*.35,.6+Wt()*.3)),Ei++)}return Kt.count=Ei,Kt.receiveShadow=!0,Jt.add(Kt),Jt.position.set(Y[0],ge,Y[2]),Jt.userData.isl=1,k(Jt,D,j),Jt.userData.isl=1,Jt.traverse(Vt=>{Vt!==Jt&&(Vt.userData={id:D,fact:j}),St.push(Vt)}),Jt},he=(()=>{let D=new wi(.5,18,12),j=D.attributes.position;for(let Y=0;Y<j.count;Y++){let de=1+(ca(Math.round(j.getX(Y)*40),Math.round(j.getY(Y)*40)+7*Math.round(j.getZ(Y)*40),4)-.5)*.2;j.setXYZ(Y,j.getX(Y)*de,j.getY(Y)*de,j.getZ(Y)*de)}return D.computeVertexNormals(),D})(),le=(D,j,Y,de,ce)=>{let Fe=new bi,He=de[1],ye=S(new gn({color:Ze(ce,1.55),roughness:.85}),{sway:[.05,-.5]}),ge=Math.min(de[0],de[2])*.06,K=new ut(he,ye);K.scale.set(de[0],He*.72,de[2]),K.position.set(Y[0],Y[1]+He*.64,Y[2]),K.castShadow=!0,K.receiveShadow=!0;let nt=new ut(new Gi(.7,1,1,7).translate(0,.5,0),S(new gn({color:"#6a4a34",roughness:1})));nt.scale.set(ge*2,He*.5,ge*2),nt.position.set(Y[0],Y[1],Y[2]),nt.castShadow=!0,Fe.add(K,nt),r.add(Fe);for(let pt of[K,nt])pt.userData={id:D,fact:j},St.push(pt)},Re=[],Ce=(D,j,Y,de,ce)=>{let Fe=new bi,He=[[.5,0],[.48,.06],[.42,.16],[.34,.32],[.27,.5],[.22,.66],[.17,.82],[.11,.93],[.05,.98],[.001,1]].map(([nt,pt])=>new Be(nt,pt)),ye=S(new fr({color:Ze(ce,1.15),metalness:.85,roughness:.3,clearcoat:.6,clearcoatRoughness:.2,sheen:1,sheenColor:new xe("#ffd890"),sheenRoughness:.4,envMapIntensity:1.8,emissive:Ze(ce,.5),emissiveIntensity:.12,side:vn}),{sheen:!0}),ge=new ut(new Jr(He,28),ye);ge.scale.set(de[0],de[1],de[2]),ge.position.y=-de[1],ge.castShadow=!0;let K=new ut(new Gi(.06*de[0],.08*de[0],.14*de[1],8).translate(0,.07*de[1],0),ye);Fe.add(ge,K),Fe.position.set(Y[0],Y[1]+de[1],Y[2]),k(Fe,D,j),Fe.traverse(nt=>{nt!==Fe&&(nt.userData={id:D,fact:j},St.push(nt))}),Re.push([Fe,ye,Y[0]])},De=(D,j,Y,de)=>{let ce=de[1],Fe=Math.max(de[0],de[2])*.6,He=S(new gn({color:"#c8a870",roughness:.95}),{sway:[.16/Math.max(ce,.3),0]}),ye=new ut(new Gi(Fe,Fe*.7,ce,6,8).translate(0,ce/2,0),He);ye.rotation.x=jt,ye.position.set(Y[0],Y[1]+ce,Y[2]),k(ye,D,j)},it=(D,j,Y,de,ce,Fe,He)=>{let ye=[Y[0],Y[1],Y[2]-de[2]/2],ge=[Y[0],Y[1]+de[1],Y[2]+de[2]/2],K=Math.hypot(ge[1]-ye[1],ge[2]-ye[2]),nt=Math.max(de[0],He?1.6:1)*.95,pt=(ge[2]-ye[2])/K,Wt=-(ge[1]-ye[1])/K,Rn=.04,Jt=new Zt;Jt.setAttribute("position",new Oe([ye[0]-nt,ye[1]+pt*Rn,ye[2]+Wt*Rn,ye[0]+nt,ye[1]+pt*Rn,ye[2]+Wt*Rn,ge[0]+nt,ge[1]+pt*Rn,ge[2]+Wt*Rn,ge[0]-nt,ge[1]+pt*Rn,ge[2]+Wt*Rn],3)),Jt.setAttribute("uv",new Oe([-1,0,1,0,1,1,-1,1],2)),Jt.setIndex([0,1,2,0,2,3]);let zn=new yt({uniforms:{uT:At,uL:{value:K},uC:{value:new xe(ce)},uN:{value:new O(0,pt,Wt)}},transparent:!0,depthWrite:!1,fog:!1,side:vn,vertexShader:ld,fragmentShader:ux}),mn=k(new ut(Jt,zn),D,j);mn.renderOrder=2,Ot.push(mn);for(let un=0;un<26;un++)Fe.push([ye,ge,(un+.5)/26+D.length*.013]);if(He){let un=new Zt;un.setAttribute("position",new Oe([ye[0]-nt*3.4,ye[1]+pt*.1,ye[2]+Wt*.1,ye[0]+nt*3.4,ye[1]+pt*.1,ye[2]+Wt*.1,ge[0]+nt*3.4,ge[1]+pt*.1,ge[2]+Wt*.1,ge[0]-nt*3.4,ge[1]+pt*.1,ge[2]+Wt*.1],3)),un.setAttribute("uv",new Oe([-1,0,1,0,1,1,-1,1],2)),un.setIndex([0,1,2,0,2,3]);let Vn=new ut(un,new yt({uniforms:{uT:At,uL:{value:K},uC:{value:new xe(ce)},uN:{value:new O(0,pt,Wt)}},transparent:!0,depthWrite:!1,blending:Mn,fog:!1,side:vn,vertexShader:ld,fragmentShader:"uniform float uT,uL;uniform vec3 uC,uN;varying vec2 vU;varying vec3 vW;void main(){float a=abs(vU.x),h=exp(-a*a*5.5),f=.78+.22*sin(vU.y*uL*.55-uT*1.3)+.08*sin(vU.y*uL*1.9-uT*2.4);float e=1.-smoothstep(.75,1.,a);gl_FragColor=vec4(vec3(1.,.8,.46)*uC*h*f*e*.4*smoothstep(3.,12.,distance(vW,cameraPosition))*smoothstep(.1,.5,abs(dot(normalize(vW-cameraPosition),uN))),1.);}"}));Vn.renderOrder=1,Vn.frustumCulled=!1,r.add(Vn),Ot.push(Vn);for(let Pn=0;Pn<70;Pn++)He.push([ye,ge,(Pn+.5)/70+D.length*.007])}},Ke={uAlt:{value:0},uHor:{value:new xe},uZen:{value:new xe("#ad98e2")},uSun:{value:new O(...yo(Qh))},uMoon:{value:new O(...yo(od))},uD:{value:0},uT:{value:2}},be=new yt({uniforms:Ke,vertexShader:lx,fragmentShader:cx,side:oi,depthWrite:!1,depthTest:!1,fog:!1}),lt=new ut(new wi(1,48,24),be);lt.renderOrder=-10,lt.frustumCulled=!1,n.add(lt);let Nt=new ut(lt.geometry,be);a.add(Nt);let ze=new aa(t),Qt=null,wn=new Ba("#b9a5ee","#7a6070",1),xn=new Ga("#ffc88a",4);xn.castShadow=!0,xn.shadow.mapSize.set(2048,2048),xn.shadow.bias=-4e-4,xn.shadow.normalBias=.06,xn.shadow.radius=3,xn.shadow.autoUpdate=!1,n.add(wn,xn,xn.target),n.fog=new Ra("#ffe6b0",.008);let rr={w:0,h:0},ua=new fn(4,4,{type:Sn,samples:4}),gi=new yc(t,ua);gi.addPass(new Mc(n,s));let _s=new vo(n,s,4,4);_s.blendIntensity=1,_s.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.3,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),_s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let es=new wc(n,s,{focus:10,aperture:5e-4,maxblur:.008}),vi=new nr(Dc),zs=new la(new Be(4,4),.55,.7,1.05),ts=new nr(hd),fa=new eu,ns={k:1},Mo=new nr({uniforms:{tDiffuse:{value:null}},vertexShader:Dc.vertexShader,fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 o=texture2D(tDiffuse,vUv);float l=dot(o.rgb,vec3(.3,.59,.11)),lo=2.5,hi=5.;float m=l<=lo?l:lo+(hi-lo)*(1.-exp(-(l-lo)/(hi-lo)));o.rgb*=m/max(l,1e-4);gl_FragColor=o;}"});gi.addPass(_s),gi.addPass(es),gi.addPass(vi),gi.addPass(fa),gi.addPass(Mo),gi.addPass(zs),gi.addPass(new Tc),gi.addPass(ts);let Ot=[];for(let D of[_s,es]){let j=D.render.bind(D);D.render=(...Y)=>{let de=Ot.map(ce=>ce.visible);Ot.forEach(ce=>ce.visible=!1);try{j(...Y)}finally{Ot.forEach((ce,Fe)=>ce.visible=de[Fe])}}}let is=null,So={uSz:{value:7}},Qn,ys="follow",Ms={position:[0,3.4,6.5],target:[0,.8,-9]},Tn={c:[0,0,0],r:20},ar=0,Ln=0,y=[],U=[],se=[],q,Z,Le,Je=!0,Ne,ke={at:[0,0,0]},tt=2,Et=new Wa,St=[],et=()=>{let D=new bi,j=S(new gn({color:"#8a6a40",roughness:.9,metalness:0}),{cloth:1.6}),Y=S(new gn({color:"#c8a078",roughness:.7})),de=S(new gn({color:"#3a2a1c",roughness:.95}),{cloth:.5}),ce=[[.01,0],[.32,.02],[.34,.15],[.3,.55],[.24,.95],[.2,1.25],[.12,1.4],[.01,1.42]].map(([nt,pt])=>new Be(nt,pt)),Fe=new ut(new Jr(ce,24),j),He=new ut(new wi(.15,20,14),Y),ye=new ut(new wi(.19,20,14,0,jt*2,0,jt*.62),de),ge=new ut(new wi(.22,16,12).scale(1,1.2,.7),de);He.position.set(0,1.55,.02),ye.position.set(0,1.58,-.03),ye.rotation.x=-.25,ge.position.set(0,.95,.27);let K=new ut(new Kr(.12,.24,20).rotateX(-jt/2),j);K.position.y=1.36,K.scale.set(1.2,1.2,1.2);for(let nt of[Fe,He,ye,ge,K])nt.castShadow=!0,nt.receiveShadow=!0,D.add(nt);return D},Ht=D=>{for(;D.children.length;)D.children.pop().geometry?.dispose?.()};function Nn(D){Qn=D,Ht(r),Ot=[Ot[0]].filter(Boolean),St.length=0,U=[],I={},C=[],L=[],F=[],J=[],Ot=[lt],ne=null,Ee=null,qe=[],Pe=!1,rt=0,Re.length=0,Ge=[],te=[],W.forEach(G=>G.dispose()),W=[],ie=[],Q=[],pe=[],B=[],H=[],$=null,we=null;let j=new xe(Qn.sky||"#2a2a4a"),Y=.2126*j.r+.7152*j.g+.0722*j.b,[de,ce,Fe]=(Qn.sky||"#2a2a4a").slice(1).match(/../g).map(G=>parseInt(G,16)/255),He=.2126*de+.7152*ce+.0722*Fe;Ln=Ai(.35,.6,He),R=Ln<.5,Ke.uHor.value.copy(j),Ke.uD.value=Ln,n.fog.color.copy(j).multiplyScalar(yr(.3,1,Ln)),n.fog.color.lerp(new xe("#e8d4c0"),Ln*.12);let ye=new xe(Qn.ground||"#12121c").multiplyScalar(yr(1.5,1.8,Ln));ye.lerp(new xe("#a08a80"),Ln*.35);let ge=Object.entries(Qn.things),K=Qn.avatar.at,nt=[K[0],K[0]],pt=[K[2],K[2]],Wt=[[K[0],K[2],.5,.5]],Rn={},Jt=G=>G[0]+G[2]+G[3];ge.forEach(([,G])=>!G[5]&&(Rn[Jt(G)]=(Rn[Jt(G)]||0)+1));let zn=G=>{let ee=new xe(G);return ee.g>ee.r*1.05&&ee.g>ee.b*1.05},mn=[],un=[],Vn=[],Pn=[],Un=[],li=[],Ui=ae=[],Me=ge.map(G=>G[1]).filter(G=>G[0]=="ball"&&!G[5]&&G[2][0]>=12&&G[2][1]<=G[2][0]*.3&&zn(G[3])).map(G=>({t:G,top:G[1][1]+G[2][1]})),vt=G=>Me.some(ee=>((G[1][0]-ee.t[1][0])/(ee.t[2][0]/2))**2+((G[1][2]-ee.t[1][2])/(ee.t[2][2]/2))**2<1.05&&Math.abs(G[1][1]-ee.top)<3),$e=Ln>.5&&(K[1]>8||Me.length>0);me=$e,Ke.uAlt.value=$e?1:0,Ke.uZen.value.set($e?"#cdbfe6":"#ad98e2"),Ke.uSun.value.set(...yo($e?[.24,.2,-.95]:Qh)),A.value=$e?1:0,b.value=$e?1:0,E.value=$e?1:0;let Bt=K[1]+2,An=ge.map(G=>G[1]).filter(G=>G[5]==2),Fn=G=>G&&[G[1][0],G[1][1]+G[2][1]/2,G[1][2]],Si=G=>Math.hypot(G[1][0]-K[0],G[1][2]-K[2]),si=G=>An.filter(G).sort((ee,Se)=>Se[2][0]*Se[2][1]*Se[2][2]-ee[2][0]*ee[2][1]*ee[2][2])[0],Kt=G=>new xe(G),Gn=G=>{let ee=Kt(G);return .2126*ee.r+.7152*ee.g+.0722*ee.b},qn=[],Ei=[],Vt=ge.map(G=>G[1]).filter(G=>G[5]==1).sort((G,ee)=>Si(G)-Si(ee)).slice(0,4).map(G=>({p:Fn(G),c:Kt(G[3]),i:26}));for(let[G,ee,Se]of[[si(fe=>fe[0]=="ball"&&Kt(fe[3]).b>Kt(fe[3]).r),new xe(.5,.85,1.4),14],[si(fe=>fe[0]=="ball"&&Kt(fe[3]).r-Kt(fe[3]).b>.3),new xe(1.4,1,.5),18]])G&&Vt.length<4&&Vt.push({p:Fn(G),c:ee,i:Se});y.forEach(G=>{n.remove(G.l),G.l.shadow.map?.dispose()}),y=[];for(let G of Vt){let ee=new Va(G.c,G.i,46,2);ee.position.set(...G.p),ee.castShadow=!0,ee.shadow.mapSize.set(512,512),ee.shadow.bias=-.003,ee.shadow.normalBias=.04,ee.shadow.radius=2,ee.shadow.camera.near=.15,ee.shadow.camera.far=46,ee.shadow.autoUpdate=!1,n.add(ee),y.push({l:ee,b:G.i})}if(R&&(we=ge.filter(([,G])=>G[2][0]>8&&G[2][2]>8&&(G[0]=="disc"||G[0]=="box"&&G[2][1]<.15)&&(G[5]==2?Gn(G[3])<.35:!G[5]&&Gn(G[3])<.02)).sort((G,ee)=>ee[1][2][0]*ee[1][2][2]-G[1][2][0]*G[1][2][2])[0]||null,we)){let[,G]=we;$={p:G[1],z:G[2],y:G[1][1]+.03},Wt.push([G[1][0],G[1][2],G[2][0]/2,G[2][2]/2])}let Yn={},tn={pos:[],s:[],k:[],z:[],c:[]},xt=sr(99),En=(G,ee,Se,fe,oe,ft)=>{tn.pos.push(G,ee,Se),tn.s.push(xt()),tn.k.push(fe),tn.z.push(oe),tn.c.push(ft.r,ft.g,ft.b)},In=(G,ee,Se,fe,oe,ft={})=>{let Ue=new ut(ee,G);return Ue.castShadow=ft.cast??!1,Ue.receiveShadow=ft.rec??!0,Ue.userData={id:fe,fact:oe},r.add(Ue),St.push(Ue),Ue};for(let[G,ee]of ge){let[Se,fe,oe,ft,Ue,Mt]=ee;if($e&&!Mt&&Se=="ball"&&!Me.some(We=>We.t===ee)&&(fe[1]<0||Math.max(...oe)>12)){Vn.push([G,fe,oe,ft]);continue}let at=Math.hypot(fe[0]-K[0],fe[2]-K[2]),Rt=$e&&at>45;if($e&&at>75&&fe[1]<8)continue;if($e&&!Mt&&Se=="ball"&&Math.max(...oe)<=1.2&&vt(ee)&&Kt(ft).r>.8&&Kt(ft).b>.4){Pn.push([G,Ue,fe,oe,Kt(ft)]);continue}let _t=Math.max(oe[0],oe[2])/2,ct=Math.max(...oe);!Rt&&(ct>=3||fe[1]>=8||!$e)&&(Bt=Math.max(Bt,fe[1]+oe[1]),nt[0]=Math.min(nt[0],fe[0]-_t),nt[1]=Math.max(nt[1],fe[0]+_t),pt[0]=Math.min(pt[0],fe[2]-_t),pt[1]=Math.max(pt[1],fe[2]+_t)),fe[1]<1&&fe[1]>=0&&Se!="disc"&&Wt.push([fe[0],fe[2],oe[0]/2,oe[2]/2]);let mt=Kt(ft),Lt=Math.max(...oe);if($e&&Ue=="far_green_land"&&Se=="box"&&fe[1]<-50&&Mt!=1){(Mt?li:Un).push(ee);continue}if($e&&fe[1]<1&&oe[0]>8&&oe[2]>8&&(Se=="disc"||Se=="box"&&oe[1]<.3))continue;if(!Mt&&Se=="ball"){let We=Me.find(ot=>ot.t===ee);if(We){P(G,Ue,fe,oe,ft,ge.map(ot=>ot[1]).filter(ot=>ot[0]=="box"&&!ot[5]&&Math.abs(ot[1][1]-We.top)<1.2));continue}if(Lt<=6&&zn(ft)&&vt(ee)){le(G,Ue,fe,oe,ft);continue}}if(/bell/.test(Ue||"")&&!Mt){if(Se=="ball"&&oe[1]<=4){Ce(G,Ue,fe,oe,ft);continue}if(Se=="box"&&Math.max(oe[0],oe[2])<=.08&&oe[1]<=2){De(G,Ue,fe,oe);continue}}if(Mt==2&&Se=="ramp"){it(G,Ue,fe,oe,ft,mn,$e&&un);continue}if(we&&ee===we[1]){let We=new uo(new Vi(.5,72),{color:mt,textureWidth:512,textureHeight:288,clipBias:.003,shader:yx,multisample:0});We.rotation.x=-jt/2,We.scale.set(oe[0],oe[2],1),We.position.set(fe[0],$.y,fe[2]),We.renderOrder=-5,We.material.transparent=!0,We.material.uniforms.uHor.value=Ke.uHor.value,We.userData={id:G,fact:Ue},r.add(We),St.push(We),Ot.push(We),W.push(We);continue}if(Mt){let We,ot;if(R&&Mt==2&&Se=="ball"&&oe[1]>=oe[0]*1.3&&Lt<.6&&mt.r>.6&&mt.b<mt.r*.4){ie.push([G,Ue,fe,oe,mt]);continue}let Dn=Se=="box"&&oe[1]<.15&&oe[0]>.4&&oe[2]>.4,_n=Mt==2&&Se=="box"&&Math.min(...oe)<=.15&&!Dn&&[...oe].sort((dt,qt)=>dt-qt)[1]>=.4,On=_n&&oe[1]>=1.2&&Math.max(oe[0],oe[2])>=.6&&(Gn(ft)<.12||mt.r>=mt.b*1.05&&mt.r>.5);if(Mt==2&&Se=="ball"&&Lt>=2&&fe[1]+oe[1]/2>20&&Math.min(mt.r,mt.g,mt.b)>.75&&qn.push([fe,oe,mt]),$e&&Mt==2&&Se=="ball"&&Lt>=1&&Lt<=4){let dt=new hs(new Ki({map:Ct,color:mt.clone().multiplyScalar(1.25),blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:.8}));dt.position.set(fe[0],fe[1]+oe[1]/2,fe[2]),dt.scale.set(Lt*2.8,Lt*2.8,1),dt.renderOrder=3,r.add(dt),Ot.push(dt),Ui.push([qt=>dt.material.opacity=qt,.8,dt.position.clone(),Lt]);continue}if(Mt==2&&Lt>4&&Se=="ball"){if(Math.abs(oe[0]-oe[1])<oe[0]*.2&&oe[2]<4){let qt=new ut(new Vi(oe[0]/2,64).translate(fe[0],fe[1]+oe[1]/2,fe[2]),new pi({color:mt.clone().multiplyScalar($e?1.05:1.7),fog:!1,transparent:$e,opacity:.55}));r.add(qt),Ot.push(qt),$e&&Ui.push([yn=>qt.material.opacity=yn,.55,new O(fe[0],fe[1]+oe[1]/2,fe[2]),oe[0]]);continue}let dt=new hs(new Ki({map:Ct,color:mt,blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:$e?.3:.5}));dt.position.set(fe[0],fe[1]+oe[1]/2,fe[2]),dt.scale.set(oe[0]*2.4,oe[1]*2.8,1),r.add(dt),Ot.push(dt),J.push([dt,dt.material.opacity,oe[0]*2.4]);continue}if(Ue=="sun_road")ot=In(cn(ft,fe[0]),Ye(Se,fe,oe),ee,G,Ue,{rec:!1}),Ot.push(ot);else if(Se=="disc"&&(Lt>3||$e)){let dt=Lt>15?.2:Lt>6?.3:.45,qt=an(ft,dt);ot=In(qt,Ye(Se,fe,oe),ee,G,Ue,{rec:!1}),Ot.push(ot),$e&&Ui.push([yn=>qt.uniforms.uK.value=yn,dt*.85,new O(fe[0],fe[1],fe[2]),Lt])}else if(On){let dt=oe[2]<=oe[0],qt=Gn(ft)<.12?new xe(1,.6,.26):mt.clone();ot=In(dn(qt,fe,oe,dt),Ye("box",fe,[oe[0]+(dt?0:.06),oe[1],oe[2]+(dt?.06:0)]),ee,G,Ue,{rec:!1}),Ot.push(ot),Ei.push([fe,oe,dt,qt])}else if(Se=="disc"||Dn)We=rn(ft),ot=In(We,Ye(Se,fe,oe),ee,G,Ue,{rec:!0}),Se=="disc"&&ot.geometry.attributes.uv,Ot.push(ot);else if(_n)ot=In(ht(ft),Ye(Se,fe,oe),ee,G,Ue,{rec:!1}),Ot.push(ot);else{let dt=oe;Se=="box"&&oe[1]<.15&&(dt=[oe[0]<oe[2]?oe[0]*.5:oe[0],oe[1]*.6,oe[2]<=oe[0]?oe[2]*.5:oe[2]]),ot=In(Dt(ft,Mt),Ye(Se,fe,dt),ee,G,Ue,{rec:!1}),Mt==1&&fe[1]>=1&&(ot.userData.sway=ge.length+tn.s.length)}let on=[fe[0],fe[1]+oe[1]/2,fe[2]];if(Mt==1&&Q.push([G,Ue,fe,oe,mt,on]),Mt==1)for(let dt=0;dt<14;dt++)En(on[0],on[1],on[2],1,.07,mt.clone().multiplyScalar(3));else if(Lt<2.5)for(let dt=0;dt<5;dt++)En(on[0]+(xt()-.5)*Math.min(oe[0],2),on[1]+(xt()-.5)*Math.min(oe[1],2),on[2]+(xt()-.5)*Math.min(oe[2],2),2,.06,mt.clone().multiplyScalar(2.5));if(Mt==2&&Se=="box"&&Math.min(oe[0],oe[2])<=.4&&Math.max(oe[0],oe[2])>=3&&fe[1]>=3){let dt=oe[2]>oe[0],qt=dt?oe[2]:oe[0],yn=(dt?oe[0]:oe[2])/2+.15,ci=fe[1]*.3,Zn=fe[1],Hn=[],ks=[],ss=(Fi,bo,da,pd)=>{Hn.push(...Fi,...bo,...da,...Fi,...da,...pd),ks.push(0,0,1,0,1,1,0,0,1,1,0,1)},Xi=(Fi,bo,da)=>dt?[fe[0]+Fi,bo,fe[2]+da]:[fe[0]+da,bo,fe[2]+Fi];for(let Fi=-qt/2+1;Fi<qt/2;Fi+=3.3)ss(Xi(-yn,Zn,Fi),Xi(yn,Zn,Fi),Xi(yn+ci,.03,Fi),Xi(-yn-ci,.03,Fi));ss(Xi(0,Zn,-qt/2),Xi(0,Zn,qt/2),Xi(0,.03,qt/2),Xi(0,.03,-qt/2));let Lc=new Zt;Lc.setAttribute("position",new Oe(Hn,3)),Lc.setAttribute("uv",new Oe(ks,2));let Nc=new ut(Lc,new pi({map:Gt,color:mt.clone().multiplyScalar(.5),transparent:!0,blending:Mn,depthWrite:!1,side:vn,fog:!1}));Nc.frustumCulled=!1,r.add(Nc),Ot.push(Nc)}continue}if(Se=="disc"){let We=new gn({color:Ze(ft,1.3),alphaMap:$t,transparent:!0,opacity:.85,roughness:1,normalMap:h().normalMap,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,...h()});We.map=h().map;let ot=In(S(We),Ye(Se,fe,oe),ee,G,Ue);Ot.push(ot);continue}if(Se=="box"&&Lt>=5&&oe[1]>=5&&Math.min(oe[0],oe[2])<=3&&mt.r+mt.g+mt.b<.12){In(new pi({color:mt,fog:!1}),Ye(Se,fe,oe),ee,G,Ue,{rec:!1});continue}let Ae=Se=="box"&&Lt>=2.9&&oe[1]>=.12,je=Ae&&fe[1]>=3&&oe[1]<=1.5&&oe[0]>5&&oe[2]>5,Tt=Se=="box"&&oe[1]<.12;if(!Ae&&(Se=="box"||Se=="cone")&&Rn[Jt(ee)]>=3){let We=Jt([Se,0,oe,ft]),ot=Yn[We]||(Yn[We]={g:Ye(Se,[0,0,0],oe,!0),m:zt(ft),o:[],ids:[]});ot.o.push(fe),ot.ids.push(G);continue}let gt=Ae?[Xe(ft),Xe(ft),fe[1]+oe[1]<3.5?Ut(ft):Xe(ft),Xe(ft),Xe(ft),Xe(ft)]:Tt?Ut(ft):zt(ft),Ft=In(gt,Ye(Se,fe,oe),ee,G,Ue,{cast:!0});je&&U.push(Ft),Se=="box"&&(Ae||oe[1]>=3)&&Ge.push({me:Ft,m:gt,b:[fe[0]-oe[0]/2,fe[0]+oe[0]/2,fe[1],fe[1]+oe[1],fe[2]-oe[2]/2,fe[2]+oe[2]/2],c:ft,g:0})}for(let G of Object.values(Yn)){let ee=new us(G.g,G.m,G.o.length),Se=new Pt;G.o.forEach((fe,oe)=>ee.setMatrixAt(oe,Se.makeTranslation(fe[0],fe[1],fe[2]))),ee.castShadow=!0,ee.receiveShadow=!0,ee.userData={ids:G.ids,fact:null},ee.computeBoundingSphere(),r.add(ee),St.push(ee)}let kn=$e&&K[1]<-5?K[1]:0;for(let[,[G,ee,Se,,,fe]]of ge)!fe&&G=="box"&&(Se[1]>=.12||$e)&&Math.abs(K[0]-ee[0])<=Se[0]/2&&Math.abs(K[2]-ee[2])<=Se[2]/2&&ee[1]+Se[1]<=K[1]+.6&&(kn=Math.max(kn,ee[1]+Se[1]));for(let G of Me)$e&&((K[0]-G.t[1][0])/(G.t[2][0]/2))**2+((K[2]-G.t[1][2])/(G.t[2][2]/2))**2<1&&G.top<=K[1]+.6&&(kn=Math.max(kn,G.top));let ri=(G,ee)=>$&&((G-$.p[0])/($.z[0]/2))**2+((ee-$.p[2])/($.z[2]/2))**2<.9,ai=(G,ee)=>ri(G,ee)?$.y:_(G,ee,Wt);ri(K[0],K[2])&&(kn=Math.max(kn,$.y)),is=null;{for(let[G,ee,Se]of qn){let fe=G[1]+ee[1]/2,oe=ai(G[0],G[2]),ft=fe-oe,Ue=Se.clone().multiplyScalar(.8),Mt=N(Ue,$e?.12:.28),at=new ut(new Gi(Math.max(.5,ee[0]*.3),4.4,ft,40,1,!0).translate(0,-ft/2,0),Mt);at.position.set(G[0],fe,G[2]),at.frustumCulled=!1,at.renderOrder=2,r.add(at),Ot.push(at);let Rt=new hs(new Ki({map:Ct,color:Ue,blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:$e?.22:.4}));if(Rt.position.set(G[0],fe,G[2]),Rt.scale.set(ee[0]*5,ee[0]*5,1),Rt.renderOrder=3,r.add(Rt),Ot.push(Rt),$e){let _t=new O(G[0],fe,G[2]);Ui.push([ct=>Mt.uniforms.uK.value=ct,.12,_t,10],[ct=>Rt.material.opacity=ct,.22,_t,10])}W[0]&&W[0].material.uniforms.uBc.value.set(G[0],G[2],0,1)}for(let[G,ee,,Se]of Ei){let fe=Math.max(ee[0],ee[2]),oe=new ut(new Vi(.5,40).rotateX(-jt/2).scale(fe*2.2,1,fe*2.2),an(Se,.3));oe.position.set(G[0],ai(G[0],G[2])+.03,G[2]),oe.renderOrder=2,r.add(oe),Ot.push(oe)}if(W[0]){let G=W[0].material.uniforms,ee=Qn.avatar.facing*jt/180,Se=Math.sin(ee),fe=-Math.cos(ee);G.uRip.value=ri(K[0],K[2])?1:0,G.uFt.value=Array.from({length:7},(oe,ft)=>{let Ue=ft%2?1:-1;return new Be(K[0]-Se*ft*.85-fe*Ue*.2,K[2]-fe*ft*.85+Se*Ue*.2)})}}if(Z||(Z=et(),n.add(Z),Le=new ut(new Kr(1.1,1.6,40).rotateX(-jt/2),new pi({color:"#ffd890",transparent:!0,opacity:.8,blending:Mn,depthWrite:!1,fog:!1})),n.add(Le),Ot.push(Le)),Z.position.set(K[0],kn,K[2]),Z.rotation.y=-(Qn.avatar.facing*jt)/180,Le.position.set(K[0],kn+.06,K[2]),ke={at:K,fy:kn},R){let G=(Ue,Mt=1)=>(Ue.renderOrder=Mt,Ue.frustumCulled=!1,r.add(Ue),Ot.push(Ue),Ue),ee=new xe(1,.62,.25),Se=new xe(.6,.78,1),fe=(Ue,Mt,at,Rt,_t,ct,mt)=>{let Lt=new ut(new fs(1,1).rotateX(-jt/2),new pi({map:Ct,color:mt?"#000":Rt,transparent:!0,opacity:_t,blending:mt?void 0:Mn,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));return Lt.scale.set(at*2,1,at*2),Lt.position.set(Ue,ai(Ue,Mt)+(mt?.008:.016),Mt),mt||B.push([Lt.material,_t,ct,0,Lt.position]),G(Lt,mt?1:2)},oe=(Ue,Mt,at,Rt,_t)=>{let ct=new hs(new Ki({map:Ct,color:at,blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:Rt}));return ct.position.set(...Ue),ct.scale.set(Mt,Mt,1),B.push([ct.material,Rt,_t,0,ct.position]),G(ct,3)},ft=(Ue,Mt,at,Rt,_t,ct,mt)=>{let Lt=new ut(new fs(1,1).translate(0,.5,0),new yt({uniforms:{uT:At,uS:{value:mt*.37},uK:{value:ct},uC:{value:_t}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:bx,transparent:!0,blending:Mn,depthWrite:!1,side:vn,fog:!1}));return Lt.scale.set(Rt*.9,Rt,1),Lt.position.set(at[0],at[1],at[2]),Lt.userData={id:Ue,fact:Mt},Lt.renderOrder=4,r.add(Lt),St.push(Lt),Ot.push(Lt),pe.push({m:Lt,k:mt,a:null}),Lt};ri(K[0],K[2])&&fe(K[0],K[2],.9,0,.6,0,!0),ge.forEach(([,Ue])=>{$&&!Ue[5]&&Math.max(...Ue[2])<3&&Ue[1][1]<.4&&ri(Ue[1][0],Ue[1][2])&&fe(Ue[1][0],Ue[1][2],Math.max(Ue[2][0],Ue[2][2])*.8+.2,0,.5,0,!0)}),Q.forEach(([Ue,Mt,at,Rt,_t,ct],mt)=>{let Lt=ai(ct[0],ct[2]),Ae=ct[1]-Lt,je=Math.max(Rt[1]*1.3,.3);if(ft(Ue,Mt,[ct[0],ct[1]-Rt[1]*.4,ct[2]],je,_t,1.3,mt),oe(ct,Math.max(2.2,Rt[1]*5),_t.clone().multiplyScalar(.8),.4,mt),fe(ct[0],ct[2],Math.min(4.2,1.3+Ae*.9),_t.clone().multiplyScalar(.8),.38,mt),Ae>.45){let Tt=new yt({uniforms:{uC:{value:_t.clone()},uK:{value:.3}},vertexShader:"varying vec3 vN,vP;varying float vv;void main(){vv=uv.y;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uC;uniform float uK;varying vec3 vN,vP;varying float vv;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.3);gl_FragColor=vec4(uC*e*pow(vv,1.4)*uK,1.);}",transparent:!0,blending:Mn,depthWrite:!1,side:vn,fog:!1}),gt=new ut(new Gi(.08,Math.min(3.4,Ae*.5+.5),Ae,32,1,!0).translate(0,-Ae/2,0),Tt);gt.position.set(ct[0],ct[1],ct[2]),B.push([Tt.uniforms.uK,.3,mt,1,gt.position]),G(gt,2)}H.push([new O(...ct),1])}),ie.forEach(([Ue,Mt,at,Rt,_t],ct)=>{let mt=at[1]+Rt[1]/2,Lt=Rt[1]*2.6;ft(Ue,Mt,[at[0],mt-Lt*.3,at[2]],Lt,_t,1.5,ct+5),oe([at[0],mt,at[2]],Lt*2.4,_t.clone().multiplyScalar(.7),.3,ct+5),fe(at[0],at[2],1.2,_t.clone().multiplyScalar(.8),.4,ct+5);for(let Ae=0;Ae<5;Ae++)En(at[0]+(xt()-.5)*.3,mt+xt()*.5,at[2]+(xt()-.5)*.3,7,.05,ee.clone().multiplyScalar(2));H.push([new O(at[0],mt,at[2]),.7])}),H.sort((Ue,Mt)=>Ue[0].distanceTo(new O(...K))-Mt[0].distanceTo(new O(...K))),H.length=Math.min(H.length,4);{let Ue=[],Mt=[],at=[],Rt=(_t,ct)=>{Ue.push(..._t),Mt.push(ct.r,ct.g,ct.b),at.push(1)};if(Q.forEach(([,,,,_t,ct])=>Rt(ct,_t.clone().multiplyScalar(1.2))),ie.forEach(([,,_t,ct,mt])=>Rt([_t[0],_t[1]+ct[1]/2,_t[2]],mt.clone().multiplyScalar(1.2))),qn.forEach(([_t,ct])=>Rt([_t[0],_t[1]+ct[1]/2,_t[2]],new xe(1.4,1.5,1.6))),at.length){let _t=new Zt;_t.setAttribute("position",new Oe(Ue,3)),_t.setAttribute("aC",new Oe(Mt,3)),_t.setAttribute("aZ",new Oe(at,1));let ct=new Ns(_t,new yt({uniforms:So,vertexShader:"attribute vec3 aC;attribute float aZ;uniform float uSz;varying vec3 vC;void main(){vC=aC;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=uSz*aZ;}",fragmentShader:"varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;float a=exp(-r*r*3.)*(1.-smoothstep(.8,1.,r));gl_FragColor=vec4(mix(vC,vec3(1.),a*a*.6)*a*1.4,1.);}",transparent:!0,blending:Mn,depthWrite:!1,depthTest:!1}));ct.frustumCulled=!1,ct.renderOrder=6,r.add(ct),Ot.push(ct),is=ct}}for(let Ue=0;Ue<90;Ue++)En(K[0]+(xt()-.5)*50,kn+.4+xt()*5,K[2]+(xt()-.5)*60,6,.1+.05*xt(),(xt()<.8?ee:Se).clone().multiplyScalar(2.6));for(let Ue=0;Ue<520;Ue++)En(K[0]+(xt()-.5)*70,kn+xt()*.5,K[2]+(xt()-.5)*80,7,.05+.05*xt(),(xt()<.7?Se:ee).clone().multiplyScalar(1.8))}let xi=Ln>.5?new xe(1.2,.85,.5):new xe(.5,.55,.7);for(let G=0;G<220;G++)En(K[0]+(xt()-.5)*28,kn+.4+xt()*6,K[2]+(xt()-.5)*28,3,.05+xt()*.05,xi.clone().multiplyScalar(1.4));Vt.forEach(G=>{for(let ee=0;ee<24;ee++)En(G.p[0]+(xt()-.5)*8,G.p[1]-.8+(xt()-.5)*3.6,G.p[2]+(xt()-.5)*8,3,.06,xi.clone().multiplyScalar(1.2))}),Tn={c:[(nt[0]+nt[1])/2,0,(pt[0]+pt[1])/2],r:Math.max(10,Math.hypot(nt[1]-nt[0],pt[1]-pt[0])*.5+3),y:0},$e&&(Tn.y=(Bt-8)/2,Tn.r=Math.max(Tn.r*.85,(Bt+8)*.55));let fd=S(new gn({vertexColors:!0,...h(),roughness:.95,normalScale:new Be(2.2,2.2),envMapIntensity:.7}),{gold:!0});if(!$e){let G=X(nt,pt,Wt,ye),ee=new ut(G,fd);ee.receiveShadow=!0,ee.userData={id:"ground"},r.add(ee);let Se=S(new gn({color:ye.clone().multiplyScalar(.88),...h(),roughness:1})),fe=new ut(_e(new fs(2400,2400,1,1).rotateX(-jt/2).translate(0,-.06,0)),Se);fe.receiveShadow=!0,r.add(fe)}if($e){[[-34,.008,1,.4],[-28,.014,.85,.5],[-24,.022,.75,.56]].forEach(([Ae,je,Tt,gt],Ft)=>{let We=new ut(new fs(6e3,6e3).rotateX(-jt/2),new yt({uniforms:{uT:At,uS:{value:je},uA:{value:Tt},uBase:{value:gt},uHor:{value:Ke.uHor.value},uSun:Ke.uSun},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:hx,transparent:!0,depthWrite:!1,fog:!1}));We.position.y=Ae,We.renderOrder=-4+Ft,We.frustumCulled=!1,r.add(We),Ot.push(We),te.push(We)});let G=sr(11);for(let Ae=0;Ae<8;Ae++){let je=Ae/8*jt*2+G()*.5,Tt=700+G()*250,gt=50+G()*70,Ft=-22+G()*40,We=new xe("#a89cc0").lerp(new xe("#7a9a80"),.25).lerp(Ke.uHor.value,.55),ot=new bi,Dn=new pi({color:We,fog:!1,transparent:!0,opacity:.6,depthWrite:!1});ot.add(new ut(new wi(.5,16,8).scale(gt,gt*.1,gt*.8),Dn),new ut(new Js(.5,1,12).rotateX(jt).translate(0,-.5,0).scale(gt*.9,gt*.5,gt*.7),Dn)),ot.position.set(K[0]+Math.sin(je)*Tt,Ft,K[2]-Math.cos(je)*Tt),ot.renderOrder=-6,ot.traverse(_n=>{_n.renderOrder=-6,_n.frustumCulled=!1}),r.add(ot),Ot.push(...ot.children)}let ee=sr(2024),Se=[],fe=Qn.avatar.facing*jt/180,oe=Math.sin(fe),ft=-Math.cos(fe),Ue=[K[0]-oe*6.5-ft*1.3,K[1]+3.4,K[2]-ft*6.5+oe*1.3],Mt=Se,at=(Ae,je,Tt,gt,Ft,We,ot,Dn)=>{for(let _n=0;_n<ot;_n++){let On,on,dt,qt;do On=ee()*2-1,on=ee()*2-1,dt=ee()*2-1,qt=On*On+on*on+dt*dt;while(qt>1);let yn=je+(on<0?on*.5:on)*Ft,ci=(gt+We)/2*(Dn*.8+.5*ee()*ee())*(1-.3*Math.sqrt(qt)),Zn=Ae+On*gt,Hn=Tt+dt*We;if(Math.hypot(Zn-Ue[0],yn-Ue[1],Hn-Ue[2])<ci*1.5+14||Math.hypot(Zn-K[0],yn-K[1],Hn-K[2])<ci*1.2+9){ee(),ee();continue}Mt.push(Zn,yn,Hn,ci,ee(),Math.min(1,Math.max(0,(yn-(je-Ft*.5))/(Ft*1.5))),0,0)}},Rt=(Ae,je,Tt,gt,Ft,We)=>at(Ae,je+Ft/2,Tt,gt,Ft/2,gt*.8,We,.28);for(let Ae of Me){let je=Ae.t[2][0]/2;for(let Tt=0;Tt<12;Tt++){let gt=Tt/12*jt*2+ee()*.4,Ft=je*(1.15+ee()*.6);Rt(Ae.t[1][0]+Math.cos(gt)*Ft,Ae.top-19-ee()*6,Ae.t[1][2]+Math.sin(gt)*Ft,7+ee()*6,22+ee()*24,18)}}let _t={};Ge.forEach(({b:Ae})=>{if(Ae[3]-Ae[2]>=9){let je=Math.round((Ae[0]+Ae[1])/8)+","+Math.round((Ae[4]+Ae[5])/8),Tt=_t[je];_t[je]=[(Ae[0]+Ae[1])/2,Math.min(Ae[2],Tt?Tt[1]:1e9),(Ae[4]+Ae[5])/2]}});for(let[Ae,je,Tt]of Object.values(_t))for(let gt=0;gt<9;gt++){let Ft=gt/9*jt*2+ee()*.5,We=9+ee()*8,ot=je-20-ee()*3;Rt(Ae+Math.cos(Ft)*We,ot,Tt+Math.sin(Ft)*We,6+ee()*5,je+2+ee()*2-ot,14)}for(let Ae=0;Ae<30;Ae++){let je=Ae/30*jt*2+ee()*.3,Tt=150+ee()*280,gt=-40+ee()*10;Rt(K[0]+Math.sin(je)*Tt,gt,K[2]-Math.cos(je)*Tt,22+ee()*30,28+ee()*52,14)}for(let[,Ae,je]of Vn){let Tt=Math.max(3,...je.map(gt=>gt*.5));at(Ae[0],Ae[1]+je[1]/2,Ae[2],Math.max(je[0],3)/2,Math.max(je[1],3)/2,Math.max(je[2],3)/2,Math.min(36,Math.max(6,Math.round(Math.cbrt(je[0]*je[1]*je[2])*1.2))),.35+0*Tt)}let ct=Ae=>{let je=Ae.length/8,Tt=new Qs,gt=new Ii(new Float32Array(je*4),4),Ft=new Ii(new Float32Array(je*4),4);Tt.setAttribute("position",new Oe([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),Tt.setIndex([0,1,2,0,2,3]),Tt.setAttribute("aC",gt),Tt.setAttribute("aD",Ft),Tt.instanceCount=je;let We=new ut(Tt,new yt({uniforms:{uT:At,uSun:Ke.uSun,uHor:Ke.uHor},vertexShader:px,fragmentShader:mx,transparent:!0,depthWrite:!1,fog:!1}));return We.frustumCulled=!1,We.renderOrder=-1,r.add(We),Ot.push(We),{aC:gt,aD:Ft,src:new Float32Array(Ae),n:je,mesh:We}};ne=ct(Se);let mt=ge.map(Ae=>Ae[1]).filter(Ae=>Ae[5]==1&&Ae[1][1]<-50),Lt=Un.length?[Un.reduce((Ae,je)=>Ae+je[1][0],0)/Un.length,Un.reduce((Ae,je)=>Ae+je[1][2],0)/Un.length]:[K[0],K[2]];if(K[1]<-10){let Ae=[];Mt=Ae;let je=(We,ot,Dn)=>{let _n=We-K[0],On=Dn-K[2],on=Math.hypot(_n,On)||1;return(_n*oe+On*ft)/on>.4&&ot<K[1]+16&&on<120};for(let[We,ot,Dn,_n,On]of[[36,12,10,60,20],[80,16,16,90,22],[150,22,26,110,20]])for(let on=0;on<ot;on++){let dt=on/ot*jt*2+ee()*.5,qt=We*(.85+ee()*.35),yn=K[1]-45-ee()*15,ci=K[0]+Math.cos(dt)*qt,Zn=K[2]+Math.sin(dt)*qt;if(je(ci,K[1],Zn)){ee(),ee(),ee();continue}Rt(ci,yn,Zn,Dn*(.8+ee()*.5),_n*(.7+ee()*.5),On)}for(let[We,ot,Dn,_n]of[[K[1]+26,90,30,260],[K[1]+11,70,26,220],[K[1]-14,60,150,320],[Math.max(K[1]-28,-70),60,190,360]])for(let On=0;On<ot;On++){let on=ee()*jt*2,dt=Dn+(_n-Dn)*Math.sqrt(ee()),qt=K[0]+Math.cos(on)*dt,yn=K[2]+Math.sin(on)*dt;We<K[1]&&Math.hypot(qt-Lt[0],yn-Lt[1])<85||We<K[1]+20&&je(qt,K[1],yn)||at(qt,We,yn,11,2,11,5,.5+ee()*.4)}Mt=Se,Ee=ct(Ae),qe.push(Ee.mesh);let Tt=ge.map(We=>We[1]).find(We=>We[4]=="cloud_light_rift"),gt=Tt?[Tt[1][0],Tt[1][2]]:Lt,Ft=Un.length?Math.max(...Un.map(We=>We[1][1]+We[2][1])):K[1]-40;qe.push(...ad({at:K,rift:gt,top:K[1]+28,bottom:Ft,U:{uT:At}})),qe.slice(1).forEach(We=>{r.add(We),Ot.push(We)}),rt=Ai(-10,-24,K[1])}if(Un.length){let Ae=rd({land:Un,riv:li,lamps:mt.map(je=>[je[1][0],je[1][1]+je[2][1]/2,je[1][2]]),U:{uT:At,uHor:Ke.uHor,uSun:Ke.uSun,uZen:Ke.uZen},glowT:Ct});Ae.out.forEach(je=>{r.add(je),Ot.push(je)}),Ae.pick.userData={id:Object.keys(Qn.things).find(je=>Qn.things[je]===Un[0]),fact:"far_green_land"},St.push(Ae.pick)}if(Pn.length){let Ae=sr(31),je=new Js(.035,1,4).translate(0,.5,0),Tt=new wi(.15,8,6).scale(1,.6,1).translate(0,1.02,0),gt=V([je,Tt]),Ft=gt.attributes.position.count,We=[];for(let On=0;On<Ft;On++)We.push(...On<je.attributes.position.count?[.3,.62,.3]:[1,1,1]);gt.setAttribute("color",new Oe(We,3));let ot=new us(gt,S(new gn({vertexColors:!0,roughness:.8,emissive:new xe("#301020"),emissiveIntensity:.15}),{sway:[.14,0]}),Pn.length*12),Dn=new Pt,_n=[];Pn.forEach(([On,,on,dt,qt])=>{let yn=Math.max(dt[0],dt[2])>=.3,ci=yn?Math.max(dt[0],dt[2])*.9+.3:.28;for(let Zn=0;Zn<(yn?12:4);Zn++){let Hn=Ae()*jt*2,ks=Math.sqrt(Ae())*ci,ss=(yn?.35:.28)+Ae()*.4,Xi=_n.length;Dn.makeRotationY(Ae()*6).setPosition(on[0]+Math.cos(Hn)*ks,on[1],on[2]+Math.sin(Hn)*ks),Dn.scale(new O(ss,ss,ss)),ot.setMatrixAt(Xi,Dn),ot.setColorAt(Xi,new xe().setRGB(qt.r*(.85+Ae()*.25),qt.g*(.85+Ae()*.25),qt.b*(.85+Ae()*.25))),_n.push(On)}}),ot.count=_n.length,ot.castShadow=!0,ot.receiveShadow=!0,ot.userData={ids:_n,fact:null},ot.computeBoundingSphere(),r.add(ot),St.push(ot)}{let Ae=sr(77),je=30,Tt=[[-50,-20],[30,25],[58,-45],[-8,50]],gt=new Float32Array(je*4),Ft=new Float32Array(je*3),We=[];for(let Hn=0;Hn<je;Hn++){let ks=Tt[Hn%4],ss=()=>(Ae()+Ae()+Ae()-1.5)*18;gt.set([ks[0]+ss(),4+Hn%4*5+ss()*.35,ks[1]+ss(),1.2+Ae()*1.1],Hn*4),Ft.set([Ae(),2+Ae()*1.6,Ae()],Hn*3)}We.push(0,0,-.15,-1.1,0,.1,0,0,.3,0,0,-.15,1.1,0,.1,0,0,.3);let ot=new Qs;ot.setAttribute("position",new Oe(We,3)),ot.setAttribute("aB",new Ii(gt,4)),ot.setAttribute("aV",new Ii(Ft,3)),ot.instanceCount=je;let Dn=new ut(ot,new yt({uniforms:{uT:At,uCen:{value:new O(K[0]+oe*95,K[1]+10,K[2]+ft*95)},uDir:{value:new Be(-ft,oe)},uHor:Ke.uHor},vertexShader:gx,fragmentShader:vx,transparent:!0,depthWrite:!1,side:vn,fog:!1}));Dn.frustumCulled=!1,Dn.renderOrder=0,r.add(Dn),Ot.push(Dn);let _n=sr(13),On=320,on=[],dt=[],qt=[[1.25,.6,.75],[1.3,1.15,.85],[1.9,1.75,1.3]],yn=[];for(let Hn=0;Hn<On;Hn++)on.push(_n(),_n(),_n(),_n()),dt.push(...qt[Hn%3==2?2:_n()<.55?0:1]),yn.push(0,0,0);let ci=new Zt;ci.setAttribute("position",new Oe(yn,3)),ci.setAttribute("aP",new Oe(on,4)),ci.setAttribute("aC",new Oe(dt,3));let Zn=new Ns(ci,new yt({uniforms:{uT:At,uK:ve},vertexShader:xx,fragmentShader:_x,transparent:!0,depthWrite:!1}));Zn.frustumCulled=!1,Zn.renderOrder=7,r.add(Zn),Ot.push(Zn)}}if(un.length){let G=new Zt;G.setAttribute("position",new Oe(un.flatMap(()=>[0,0,0]),3)),G.setAttribute("aA",new Oe(un.flatMap(([Se])=>Se),3)),G.setAttribute("aB",new Oe(un.flatMap(([,Se])=>Se),3)),G.setAttribute("aS",new Oe(un.map(([,,Se])=>Se),1));let ee=new Ns(G,new yt({uniforms:{uT:At,uK:ve},vertexShader:dx,fragmentShader:cd,transparent:!0,depthWrite:!1,blending:Mn,fog:!1}));ee.frustumCulled=!1,ee.renderOrder=5,r.add(ee),Ot.push(ee)}if(mn.length){let G=new Zt;G.setAttribute("position",new Oe(mn.flatMap(()=>[0,0,0]),3)),G.setAttribute("aA",new Oe(mn.flatMap(([Se])=>Se),3)),G.setAttribute("aB",new Oe(mn.flatMap(([,Se])=>Se),3)),G.setAttribute("aS",new Oe(mn.map(([,,Se])=>Se),1));let ee=new Ns(G,new yt({uniforms:{uT:At,uK:ve},vertexShader:fx,fragmentShader:cd,transparent:!0,depthWrite:!1,blending:Mn,fog:!1}));ee.frustumCulled=!1,ee.renderOrder=5,r.add(ee),Ot.push(ee)}{let G=K[1]+.9,ee=(Se,fe)=>Ge.some(({b:oe})=>oe[2]<=G&&oe[3]>=G&&[...Array(10)].some((ft,Ue)=>{let Mt=K[0]+Se*(Ue+1)*.5,at=K[2]+fe*(Ue+1)*.5;return Mt>oe[0]&&Mt<oe[1]&&at>oe[4]&&at<oe[5]}));re=Ge.some(({b:Se})=>Se[3]-Se[2]>=4&&Se[2]<=G&&Se[3]>=G&&K[0]>Se[0]-.6&&K[0]<Se[1]+.6&&K[2]>Se[4]-.6&&K[2]<Se[5]+.6)||[[1,0],[-1,0],[0,1],[0,-1]].filter(([Se,fe])=>ee(Se,fe)).length>=3||$e&&(ee(1,0)&&ee(-1,0)||ee(0,1)&&ee(0,-1))}if(!$e){let G=(at,Rt)=>_(at,Rt,Wt),ee=new xe(1.5,1,.58);for(let at=0,Rt=0;at<5e3&&Rt<460;at++){let _t=K[0]+(xt()-.5)*90,ct=K[2]+(xt()-.5)*90,mt=G(_t,ct);(mt>.2||xt()<.02)&&(En(_t,mt+.05,ct,4,.09+xt()*.06,ee),Rt++)}for(let at=0;at<220;at++){let Rt=K[0]+(xt()-.5)*50,_t=K[2]-4-xt()*36;En(Rt,G(Rt,_t)+.06,_t,5,.1,new xe(2.2,1.8,1))}let Se=new us(new Vi(.5,14).rotateX(-jt/2),S(new gn({color:"#4a3050",alphaMap:$t,transparent:!0,opacity:.9,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),36),fe=new Pt,oe=Qn.avatar.facing*jt/180,ft=new O(0,1,0),Ue=Math.sin(oe),Mt=-Math.cos(oe);for(let at=0;at<18;at++){let Rt=at%2?1:-1,_t=K[0]-Ue*(1.1+at*.85)-Mt*Rt*.2,ct=K[2]-Mt*(1.1+at*.85)+Ue*Rt*.2,mt=K[1]+.04,Lt=-oe+Rt*.08;for(let Ae=0;Ae<2;Ae++){let je=Ae?.14:.27,Tt=Ae?.1:.13,gt=Ae?-.17:.07;fe.makeRotationY(Lt).setPosition(_t+Ue*gt,mt,ct+Mt*gt),fe.scale(new O(Tt,1,je)),Se.setMatrixAt(at*2+Ae,fe)}}Se.renderOrder=2,r.add(Se),Ot.push(Se),[[380,9,"#d0a8a0",1],[620,16,"#b890a8",2],[920,26,"#9c80b4",3]].forEach(([at,Rt,_t,ct])=>{let mt=[];for(let gt=0;gt<=96;gt++){let Ft=gt/96*jt*2,We=Rt*(.55+.3*Math.sin(Ft*5+ct*2)+.15*Math.sin(Ft*13+ct));mt.push(K[0]+Math.sin(Ft)*at,-4,K[2]-Math.cos(Ft)*at,K[0]+Math.sin(Ft)*at,We,K[2]-Math.cos(Ft)*at)}let Ae=[];for(let gt=0;gt<96;gt++){let Ft=gt*2;Ae.push(Ft,Ft+1,Ft+2,Ft+1,Ft+3,Ft+2)}let je=new Zt;je.setAttribute("position",new Oe(mt,3)),je.setIndex(Ae);let Tt=new ut(je,new pi({color:new xe(_t).multiplyScalar(Ln>.5?1:.15),fog:!1,side:vn}));Tt.frustumCulled=!1,r.add(Tt),Ot.push(Tt)})}let Mr=new Zt;Mr.setAttribute("position",new Oe(tn.pos,3)),Mr.setAttribute("aS",new Oe(tn.s,1)),Mr.setAttribute("aK",new Oe(tn.k,1)),Mr.setAttribute("aZ",new Oe(tn.z,1)),Mr.setAttribute("aC",new Oe(tn.c,3)),Ne={uT:{value:2},uK:{value:400},uD:{value:Ln},uSun:Ke.uSun},q=new Ns(Mr,new yt({uniforms:Ne,vertexShader:Mx,fragmentShader:Sx,transparent:!0,depthWrite:!1,blending:Mn})),q.frustumCulled=!1,r.add(q),Ot.push(q);let Ss=Ln>=.5,dd=new O(...yo(Ss?Ke.uSun.value.toArray():od));xn.color.set(Ss?"#ffc07a":"#9ab4ff"),xn.intensity=Ss?$e?4.8:6.5:1.3,xn.userData.dir=dd,wn.color.set(Ss?"#b8a2ee":"#4a5aa8"),wn.groundColor.set(Ss?"#9a7a78":"#14142a"),wn.intensity=Ss?1.35:.85,zs.strength=Ss?$e?.2:.3:.8,zs.threshold=Ss?$e?2.2:1.8:.9,zs.radius=.75,n.environmentIntensity=Ss?.8:.5,Qt?.dispose(),Nt.visible=!0,Qt=ze.fromScene(a,0,.1,10),n.environment=Qt.texture,Je=!0}function pn(){let D=ys=="overview",j=D?Tn.c:[ke.at[0],0,ke.at[2]-6],Y=D?Math.min(Tn.r*1.1,160):46,de=xn.userData.dir||new O(...yo(Qh));xn.position.set(j[0]+de.x*400,j[1]+de.y*400,j[2]+de.z*400),xn.target.position.set(...j),xn.target.updateMatrixWorld();let ce=xn.shadow.camera;ce.left=-Y,ce.right=Y,ce.top=Y,ce.bottom=-Y,ce.near=20,ce.far=800,ce.updateProjectionMatrix(),xn.shadow.needsUpdate=!0,y.forEach(Fe=>Fe.l.shadow.needsUpdate=!0),Je=!1}function hn(D,j){rr.w==D&&rr.h==j||(rr.w=D,rr.h=j,t.setSize(D,j,!1),es.uniforms.aspect.value=D/j,gi.setSize(D,j),s.aspect=D/j,s.updateProjectionMatrix(),Dc.uniforms.uA.value=hd.uniforms.uA.value=D/j,vi.uniforms.uA.value=ts.uniforms.uA.value=D/j)}let Bn=(D,j)=>(1+.1*Math.sin(j*9+D*1.7+Math.sin(j*3+D)*2)+.05*Math.sin(j*23+D*5))*(1+.1*Math.sin(j*5.3+D*2)),Qe=2;function ei(D=2,j=!1){if(!Qn)return;let Y=j?0:Math.min(.2,Math.max(0,D-Qe));Qe=D,tt=D;let de=i.clientWidth||i.width,ce=i.clientHeight||i.height,{at:Fe,facing:He}=Qn.avatar,ye=He*jt/180,ge=ys=="overview";hn(de,ce);let K=[Math.sin(ye),0,-Math.cos(ye)],nt=[-K[2],0,K[0]];if(Ms=ge?me?{position:[Tn.c[0]-Math.sin(ye+.7)*Tn.r*1.25,Tn.y+Tn.r*.62,Tn.c[2]+Math.cos(ye+.7)*Tn.r*1.25],target:[Tn.c[0],Tn.y-3,Tn.c[2]]}:{position:[Tn.c[0]-K[0]*Tn.r,Tn.r*.9,Tn.c[2]-K[2]*Tn.r],target:[Tn.c[0],0,Tn.c[2]]}:{position:Fe.map((Me,vt)=>Me-K[vt]*6.5+nt[vt]*1.3+(vt==1)*3.4),target:Fe.map((Me,vt)=>Me+K[vt]*9+(vt==1)*.8)},!ge&&rt>0){let Me=Ms.position,vt=Ms.target,$e=vt[1]-Me[1],Bt=Math.hypot(vt[0]-Me[0],$e,vt[2]-Me[2]),An=Math.hypot(vt[0]-Me[0],vt[2]-Me[2]),Fn=Math.atan2($e,An)-.262*rt;Ms.target=[Me[0]+K[0]*Bt*Math.cos(Fn),Me[1]+Bt*Math.sin(Fn),Me[2]+K[2]*Bt*Math.cos(Fn)]}Pe=!!qe.length&&!ge,qe.forEach(Me=>Me.visible=Pe),te.forEach(Me=>Me.visible=!Pe);let pt=Ms.position.map((Me,vt)=>Me+[Math.sin(D*.4)*.14,Math.sin(D*.31)*.09,Math.cos(D*.37)*.14][vt]),Wt=Ms.target.map((Me,vt)=>Me+[Math.cos(D*.3)*.12,Math.sin(D*.23)*.08,0][vt]);s.position.set(...pt),s.lookAt(...Wt),s.rotateZ(Math.sin(D*.27)*.006),s.updateMatrixWorld(),s.updateProjectionMatrix(),Je&&pn(),U.forEach(Me=>Me.visible=!ge),C.forEach(Me=>Me.emissiveIntensity=ge?.9:0),m.uRim.value=ge?1:0,m.uRimC.value.set(Ln>.5?"#ffc98a":"#7aa8ff"),Le.visible=ge,Le.scale.setScalar(ge&&me?3.2:1),is&&(is.visible=ge,So.uSz.value=ce*.013),y.forEach((Me,vt)=>Me.l.intensity=Me.b*Bn(vt,D)),L.forEach(Me=>Me.emissiveIntensity=Me.userData.b*Bn(0,D)),R&&(B.forEach(([Me,vt,$e,Bt,An])=>{let Fn=vt*(.85+.15*Bn($e,D))*(An?.25+.75*Ai(1.5,9,An.distanceTo(s.position)):1);Bt?Me.value=Fn:Me.opacity=Fn}),pe.forEach(Me=>{let vt=Math.atan2(Fe[0]-Me.m.position.x,Fe[2]-Me.m.position.z);if(Me.a==null||j)Me.a=vt;else{let $e=vt-Me.a;$e=Math.atan2(Math.sin($e),Math.cos($e)),Me.a+=$e*Math.min(1,Y*(2.2/(1+Me.k*.15)))}Me.m.rotation.y=Me.a}),W.forEach(Me=>{Me.material.uniforms.uT.value=D,Me.material.uniforms.uOv.value=ge?1:0,Me.getRenderTarget().setSize(Math.round(de*.6),Math.round(ce*.6))})),r.children.forEach(Me=>{Me.userData.sway&&(Me.rotation.z=Math.sin(D*.6+Me.userData.sway)*.05)}),te.forEach(Me=>Me.position.set(pt[0],Me.position.y,pt[2])),r.children.forEach(Me=>{Me.userData.isl&&(Me.rotation.y=D*.02)}),Re.forEach(([Me,vt,$e])=>{Me.rotation.x=Math.sin(D*.7+$e)*.05,Me.rotation.z=Math.sin(D*.53+1)*.03,vt.emissiveIntensity=.12+.1*(.5+.5*Math.sin(D*1.3))});{let Me=pt,vt=[Fe[0],Fe[1]+1,Fe[2]],$e=[vt[0]-Me[0],vt[1]-Me[1],vt[2]-Me[2]];Ge.forEach(Bt=>{let An=!1;if(re&&!ge){let Fn=0,Si=1,si=Bt.b,Kt=[si[0]-.05,si[2]-.05,si[4]-.05],Gn=[si[1]+.05,si[3]+.05,si[5]+.05];An=!0;for(let qn=0;qn<3&&An;qn++)if(Math.abs($e[qn])<1e-6)(Me[qn]<Kt[qn]||Me[qn]>Gn[qn])&&(An=!1);else{let Ei=(Kt[qn]-Me[qn])/$e[qn],Vt=(Gn[qn]-Me[qn])/$e[qn];Ei>Vt&&([Ei,Vt]=[Vt,Ei]),Fn=Math.max(Fn,Ei),Si=Math.min(Si,Vt),Fn>Si&&(An=!1)}}Bt.g=j?+An:Bt.g+(+An-Bt.g)*(1-Math.exp(-Math.max(Y,.016)*7)),Bt.g>.01?(Bt.gm||(Bt.gm=S(new gn({color:Ze(Bt.c,1.5),roughness:1,transparent:!0,depthWrite:!1}))),Bt.gm.opacity=1-.88*Bt.g,Bt.me.material=Bt.gm,Bt.me.castShadow=!1):(Bt.me.material=Bt.m,Bt.me.castShadow=!0)})}let Rn=new O;s.getWorldDirection(Rn);let Jt=(Me,vt)=>{let $e=Me.clone().sub(s.position),Bt=$e.length();return(1-.8*Ai(.8,.97,$e.dot(Rn)/Math.max(Bt,.001)))*(.25+.75*Ai(vt*.1,vt*.7+3,Bt))};J.forEach(([Me,vt,$e])=>Me.material.opacity=vt*Ai(.1,.5,Me.position.distanceTo(s.position)/$e)*(me?Jt(Me.position,$e*.5):1)),me&&ae.forEach(([Me,vt,$e,Bt])=>Me(vt*Jt($e,Bt)));for(let Me of[ne,Ee])if(Me){let{src:vt,n:$e,aC:Bt,aD:An}=Me,Fn=s.position,Si=Array.from({length:$e},(Kt,Gn)=>Gn),si=new Float32Array($e);for(let Kt=0;Kt<$e;Kt++)si[Kt]=(vt[Kt*8]-Fn.x)**2+(vt[Kt*8+1]-Fn.y)**2+(vt[Kt*8+2]-Fn.z)**2;Si.sort((Kt,Gn)=>si[Gn]-si[Kt]);for(let Kt=0;Kt<$e;Kt++){let Gn=Si[Kt]*8;Bt.array.set(vt.subarray(Gn,Gn+4),Kt*4),An.array.set(vt.subarray(Gn+4,Gn+8),Kt*4)}Bt.needsUpdate=!0,An.needsUpdate=!0}F.forEach(Me=>Me.offset.set(D*.012,D*.017)),Ke.uT.value=D,p.value=At.value=vi.uniforms.uT.value=D,M.value=Ln>.5?1:0,ve.value=ce*.5*s.projectionMatrix.elements[5],Ne&&(Ne.uT.value=D,Ne.uK.value=ve.value),n.fog.density=ge?.0016:me?.0028:Ln>.5?.0055:.012,wn.intensity=(Ln>=.5?.95:.85)*(ge?1.3:1);let zn=(Ln>=.5?.5:1.1)*(ge?1.1:1);j&&(ns.k=1),t.toneMappingExposure=zn*ns.k;let mn=new O;s.getWorldDirection(mn);let un=Me=>new O(...Me).sub(s.position).dot(mn);es.uniforms.maxblur.value=me?.0025:.008,es.enabled=!ge&&!R,es.uniforms.focus.value=(un(Fe)+un(Wt))/2,es.uniforms.aspect.value=s.aspect,_s.enabled=!0;let Vn=Ke.uSun.value,Pn=s.position.clone().add(Vn.clone().multiplyScalar(100)).project(s),Un=mn.dot(Vn);vi.uniforms.uSun.value.set(Pn.x*.5+.5,Pn.y*.5+.5),vi.enabled=Ln>.5&&Un>.05,vi.uniforms.uAmt.value=Math.min(1,Un*3)*(ge?.4:.45)*(me?1.5:1),vi.uniforms.uThr.value=me?1:1.5,ts.uniforms.uT.value=D,ts.uniforms.uD.value=Ln,ts.uniforms.uV.value=ge?.35:.5,ts.uniforms.uN.value=R?1:0;let li=ts.uniforms.uLP.value;for(let Me=0;Me<4;Me++){let vt=H[Me];if(li[Me].set(0,0,0),!R||!vt)continue;let $e=vt[0].clone().applyMatrix4(s.matrixWorldInverse),Bt=-$e.z;if(Bt<1.5)continue;let An=vt[0].clone().project(s),Fn=Math.max(Math.abs(An.x),Math.abs(An.y));li[Me].set(An.x*.5+.5,An.y*.5+.5,vt[1]*(1-Ai(.9,1.15,Fn))*Ai(1.5,6,Bt)*(.9+.1*Bn(Me,D)))}gi.render();let Ui=R?Math.min(1.9,Math.max(.85,Math.pow(.03/Math.max(fa.lum,1e-4),.5))):1;j?(ns.k=Ui,t.toneMappingExposure=zn*Ui,gi.render()):ns.k+=(Ui-ns.k)*(1-Math.exp(-Y*1.2))}let Ni=(D=>(...j)=>{try{return D(...j)}catch(Y){e.push(String(Y&&Y.stack||Y))}})(ei);return i.addEventListener("webglcontextlost",D=>{D.preventDefault(),e.push("webgl context lost")}),{modes:["follow","overview"],async setWorld(D){Nn(D),Ni()},setCamera(D){D!=ys&&(ys=D,Je=!0),Ni(tt)},getCamera:()=>Ms,async renderStill(D){D!=ys&&(ys=D,Je=!0),ei(2,!0)},start(){cancelAnimationFrame(ar),ar=requestAnimationFrame(function D(j){Ni(j/1e3),ar=requestAnimationFrame(D)})},stop(){cancelAnimationFrame(ar)},resize(){Ni(tt)},pick(D,j){let Y=i.getBoundingClientRect();Et.setFromCamera({x:(D-Y.left)/Y.width*2-1,y:-((j-Y.top)/Y.height*2-1)},s);let de=Et.intersectObjects(St,!1)[0];if(!de)return null;let ce=de.object.userData;return ce.ids?{id:ce.ids[de.instanceId],fact:Qn.things[ce.ids[de.instanceId]]?.[4]??null}:{id:ce.id,fact:ce.fact??null}},errors:()=>e.splice(0),dispose(){cancelAnimationFrame(ar),gi.dispose?.(),t.dispose()}}}async function iS(i,e){try{if(!document.createElement("canvas").getContext("webgl2"))throw Error("WebGL2 unavailable");return await wx(i,e)}catch(t){console.warn("engine v10 falling back to v6:",t);let n=i;return i.getContext("webgl")||(n=i.cloneNode(!1),i.parentNode.insertBefore(n,i),i.style.display="none"),nd(n,e)}}export{iS as createEngine};
