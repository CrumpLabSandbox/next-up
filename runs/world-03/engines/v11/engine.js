var ru=0,Bc=1,au=2;var Fs=1,ou=2,br=3,_s=0,In=1,pn=2,yn=0,wr=1,Mn=2,zc=3,kc=4,jo=5;var li=100,lu=101,cu=102,hu=103,uu=104,Os=200,fu=201,du=202,pu=203,Vc=204,Gc=205,ma=206,mu=207,ga=208,gu=209,vu=210,xu=211,_u=212,yu=213,Mu=214,wo=0,To=1,Ao=2,cr=3,Eo=4,Co=5,Ro=6,Po=7,Hc=0,Su=1,bu=2,Li=0,va=1,xa=2,_a=3,Bs=4,ya=5,Ma=6,Sa=7;var Wc=300,zs=301,Tr=302,Qo=303,el=304,oi=1e3,Ai=1001,Io=1002,on=1003,wu=1004;var ba=1005;var Hn=1006,tl=1007;var ji=1008;var Pn=1009,Xc=1010,qc=1011,Ar=1012,nl=1013,vi=1014,ci=1015,nn=1016,il=1017,sl=1018,Qi=1020,Yc=35902,Zc=35899,Jc=1021,Kc=1022,ti=1023,Zi=1026,xi=1027,rl=1028,al=1029,ys=1030,ol=1031;var ll=1033,wa=33776,Ta=33777,Aa=33778,Ea=33779,cl=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37488,vl=37489,Ca=37490,xl=37491,_l=37808,yl=37809,Ml=37810,Sl=37811,bl=37812,wl=37813,Tl=37814,Al=37815,El=37816,Cl=37817,Rl=37818,Pl=37819,Il=37820,Dl=37821,Ll=36492,Nl=36494,Ul=36495,Fl=36283,Ol=36284,Ra=36285,Bl=36286;var qr=2300,Do=2301,So=2302,Cc=2303,Rc=2400,Pc=2401,Ic=2402;var Tu=3200,$c=3201;var Pa=0,Au=1,es="",On="srgb",Yr="srgb-linear",Zr="linear",Ht="srgb";var bo=7680;var Eu=519,Cu=512,Ru=513,Pu=514,jc=515,Iu=516,Du=517,Qc=518,eh=519,th=35044;var nh="300 es",ri=2e3,hr=2001;function Nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=Jr("canvas");return i.style.display="block",i}var Eh={},ur=null;function Kr(...i){let e="THREE."+i.shift();ur?ur("log",e,...i):console.log(e,...i)}function Nu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ht(...i){i=Nu(i);let e="THREE."+i.shift();if(ur)ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Nu(i);let e="THREE."+i.shift();if(ur)ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rs(...i){let e=i.join(" ");e in Eh||(Eh[e]=!0,ht(...i))}function Uu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Fu={[wo]:wo,[Ao]:Ro,[Eo]:Eo,[cr]:Co,[To]:To,[Ro]:Ao,[Po]:Po,[Co]:cr},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rc=Math.PI/180,Lo=180/Math.PI;function ks(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function Ff(i,e){return(i%e+e)%e}function ac(i,e,t){return(1-t)*i+t*e}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bu(i,e){if(e.constructor===Float32Array)return i;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function zu(i,e){if(e.constructor===Float32Array)return i;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Fe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ci=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],f=r[a+0],h=r[a+1],g=r[a+2],x=r[a+3];if(p!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+p*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let d=1-o;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);d=Math.sin(d*M)/T,o=Math.sin(o*M)/T,c=c*d+f*o,l=l*d+h*o,u=u*d+g*o,p=p*d+x*o}else{c=c*d+f*o,l=l*d+h*o,u=u*d+g*o,p=p*d+x*o;let M=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=M,l*=M,u*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*p+c*h-l*f,e[t+1]=c*g+u*f+l*p-o*h,e[t+2]=l*g+u*h+o*f-c*p,e[t+3]=u*g-o*p-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*p+l*h*g,this._y=l*h*p-f*u*g,this._z=l*u*g+f*h*p,this._w=l*u*p-f*h*g;break;case"YXZ":this._x=f*u*p+l*h*g,this._y=l*h*p-f*u*g,this._z=l*u*g-f*h*p,this._w=l*u*p+f*h*g;break;case"ZXY":this._x=f*u*p-l*h*g,this._y=l*h*p+f*u*g,this._z=l*u*g+f*h*p,this._w=l*u*p-f*h*g;break;case"ZYX":this._x=f*u*p-l*h*g,this._y=l*h*p+f*u*g,this._z=l*u*g-f*h*p,this._w=l*u*p+f*h*g;break;case"YZX":this._x=f*u*p+l*h*g,this._y=l*h*p+f*u*g,this._z=l*u*g-f*h*p,this._w=l*u*p-f*h*g;break;case"XZY":this._x=f*u*p-l*h*g,this._y=l*h*p-f*u*g,this._z=l*u*g+f*h*p,this._w=l*u*p+f*h*g;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],f=n+o+p;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(u-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oc=new k,Ch=new Ci,dt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],f=n[2],h=n[5],g=n[8],x=s[0],m=s[3],d=s[6],M=s[1],T=s[4],S=s[7],E=s[2],w=s[5],v=s[8];return r[0]=a*x+o*M+c*E,r[3]=a*m+o*T+c*w,r[6]=a*d+o*S+c*v,r[1]=l*x+u*M+p*E,r[4]=l*m+u*T+p*w,r[7]=l*d+u*S+p*v,r[2]=f*x+h*M+g*E,r[5]=f*m+h*T+g*w,r[8]=f*d+h*S+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,f=o*c-u*r,h=l*r-a*c,g=t*p+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new dt,Rh=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Of(){let i={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ht&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ht&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yr]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),i}var Rt=Of();function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,No=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=Jr("canvas")),Ws.width=e.width,Ws.height=e.height;let s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bf=0,fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cc(s[a].image)):r.push(cc(s[a]))}else r=cc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var zf=0,hc=new k,Wn=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=Hn,a=ji,o=ti,c=Pn,l=i.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ks(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Wc;Wn.DEFAULT_ANISOTROPY=1;var Yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],p=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(h+1)/2,E=(d+1)/2,w=(u+f)/4,v=(p+x)/4,b=(g+m)/4;return T>S&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=v/n):S>E?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-x)/M,this.z=(f-u)/M,this.w=Math.acos((l+h+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uo=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Wn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Uo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends Wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends Wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,u,p,f,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,p,f,h,g,x,m)}set(e,t,n,s,r,a,o,c,l,u,p,f,h,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=p,d[14]=f,d[3]=h,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*p,g=o*u,x=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,h=c*p,g=l*u,x=l*p;t[0]=f+x*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,h=c*p,g=l*u,x=l*p;t[0]=f-x*o,t[4]=-a*p,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,h=a*p,g=o*u,x=o*p;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*p,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-f*p,t[8]=g*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*p+g,t[10]=f-x*p}else if(e.order==="XZY"){let f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=f*p+x,t[5]=a*u,t[9]=h*p-g,t[2]=g*p-h,t[6]=o*u,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Vf)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),os.crossVectors(n,$n),os.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),os.crossVectors(n,$n)),os.normalize(),Ja.crossVectors($n,os),s[0]=os.x,s[4]=Ja.x,s[8]=$n.x,s[1]=os.y,s[5]=Ja.y,s[9]=$n.y,s[2]=os.z,s[6]=Ja.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],d=n[14],M=n[3],T=n[7],S=n[11],E=n[15],w=s[0],v=s[4],b=s[8],D=s[12],C=s[1],F=s[5],B=s[9],K=s[13],I=s[2],Z=s[6],j=s[10],$=s[14],ue=s[3],G=s[7],X=s[11],Q=s[15];return r[0]=a*w+o*C+c*I+l*ue,r[4]=a*v+o*F+c*Z+l*G,r[8]=a*b+o*B+c*j+l*X,r[12]=a*D+o*K+c*$+l*Q,r[1]=u*w+p*C+f*I+h*ue,r[5]=u*v+p*F+f*Z+h*G,r[9]=u*b+p*B+f*j+h*X,r[13]=u*D+p*K+f*$+h*Q,r[2]=g*w+x*C+m*I+d*ue,r[6]=g*v+x*F+m*Z+d*G,r[10]=g*b+x*B+m*j+d*X,r[14]=g*D+x*K+m*$+d*Q,r[3]=M*w+T*C+S*I+E*ue,r[7]=M*v+T*F+S*Z+E*G,r[11]=M*b+T*B+S*j+E*X,r[15]=M*D+T*K+S*$+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],d=e[15],M=c*h-l*f,T=o*h-l*p,S=o*f-c*p,E=a*h-l*u,w=a*f-c*u,v=a*p-o*u;return t*(x*M-m*T+d*S)-n*(g*M-m*E+d*w)+s*(g*T-x*E+d*v)-r*(g*S-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],d=e[15],M=t*o-n*a,T=t*c-s*a,S=t*l-r*a,E=n*c-s*o,w=n*l-r*o,v=s*l-r*c,b=u*x-p*g,D=u*m-f*g,C=u*d-h*g,F=p*m-f*x,B=p*d-h*x,K=f*d-h*m,I=M*K-T*B+S*F+E*C-w*D+v*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/I;return e[0]=(o*K-c*B+l*F)*Z,e[1]=(s*B-n*K-r*F)*Z,e[2]=(x*v-m*w+d*E)*Z,e[3]=(f*w-p*v-h*E)*Z,e[4]=(c*C-a*K-l*D)*Z,e[5]=(t*K-s*C+r*D)*Z,e[6]=(m*S-g*v-d*T)*Z,e[7]=(u*v-f*S+h*T)*Z,e[8]=(a*B-o*C+l*b)*Z,e[9]=(n*C-t*B-r*b)*Z,e[10]=(g*w-x*S+d*M)*Z,e[11]=(p*S-u*w-h*M)*Z,e[12]=(o*D-a*F-c*b)*Z,e[13]=(t*F-n*D+s*b)*Z,e[14]=(x*T-g*E-m*M)*Z,e[15]=(u*E-p*T+f*M)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,p=o+o,f=r*l,h=r*u,g=r*p,x=a*u,m=a*p,d=o*p,M=c*l,T=c*u,S=c*p,E=n.x,w=n.y,v=n.z;return s[0]=(1-(x+d))*E,s[1]=(h+S)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(h-S)*w,s[5]=(1-(f+d))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+T)*v,s[9]=(m-M)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),c=Xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let l=1/a,u=1/o,p=1/c;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=p,ui.elements[9]*=p,ui.elements[10]*=p,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ri,c=!1){let l=this.elements,u=2*r/(t-e),p=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===ri)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===hr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ri,c=!1){let l=this.elements,u=2/(t-e),p=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===ri)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===hr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xs=new k,ui=new mt,kf=new k(0,0,0),Vf=new k(1,1,1),os=new k,Ja=new k,$n=new k,Ih=new mt,Dh=new Ci,Ji=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gf=0,Lh=new k,qs=new Ci,Vi=new mt,Ka=new k,Or=new k,Hf=new k,Wf=new Ci,Nh=new k(1,0,0),Uh=new k(0,1,0),Fh=new k(0,0,1),Oh={type:"added"},Xf={type:"removed"},Ys={type:"childadded",child:null},uc={type:"childremoved",child:null},Rn=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Ji,n=new Ci,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new dt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Or,Ka,this.up):Vi.lookAt(Ka,Or,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Vi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xf),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new k(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qf={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=u.position.distanceTo(p.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},$a={h:0,s:0,l:0};function fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=Ff(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fc(a,r,e+1/3),this.g=fc(a,r,e),this.b=fc(a,r,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=On){function n(r){r!==void 0&&parseFloat(r)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){let n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Rt.workingToColorSpace(Fn.copy(this),e),Math.round(Dt(Fn.r*255,0,255))*65536+Math.round(Dt(Fn.g*255,0,255))*256+Math.round(Dt(Fn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,s=Fn.g,r=Fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=On){Rt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,s=Fn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL($a);let n=ac(ls.h,$a.h,t),s=ac(ls.s,$a.s,t),r=ac(ls.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new we;we.NAMES=ku;var jr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var mr=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new k,Gi=new k,dc=new k,Hi=new k,Zs=new k,Js=new k,Bh=new k,pc=new k,mc=new k,gc=new k,vc=new Yt,xc=new Yt,_c=new Yt,qi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Gi.subVectors(n,t),dc.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(Gi),c=fi.dot(dc),l=Gi.dot(Gi),u=Gi.dot(dc),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,h=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hi.x),c.addScaledVector(a,Hi.y),c.addScaledVector(o,Hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return vc.setScalar(0),xc.setScalar(0),_c.setScalar(0),vc.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vc,r.x),a.addScaledVector(xc,r.y),a.addScaledVector(_c,r.z),a}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Gi.subVectors(e,t),fi.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),fi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Zs.subVectors(s,n),Js.subVectors(r,n),pc.subVectors(e,n);let c=Zs.dot(pc),l=Js.dot(pc);if(c<=0&&l<=0)return t.copy(n);mc.subVectors(e,s);let u=Zs.dot(mc),p=Js.dot(mc);if(u>=0&&p<=u)return t.copy(s);let f=c*p-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Zs,a);gc.subVectors(e,r);let h=Zs.dot(gc),g=Js.dot(gc);if(g>=0&&h<=g)return t.copy(r);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Js,o);let m=u*g-h*p;if(m<=0&&p-u>=0&&h-g>=0)return Bh.subVectors(r,s),o=(p-u)/(p-u+(h-g)),t.copy(s).addScaledVector(Bh,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Zs,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ri=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Qa.subVectors(this.max,Br),Ks.subVectors(e.a,Br),$s.subVectors(e.b,Br),js.subVectors(e.c,Br),cs.subVectors($s,Ks),hs.subVectors(js,$s),Ts.subVectors(Ks,js);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Ts.z,Ts.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Ts.z,0,-Ts.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Ts.y,Ts.x,0];return!yc(t,Ks,$s,js,Qa)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Ks,$s,js,Qa))?!1:(eo.crossVectors(cs,hs),t=[eo.x,eo.y,eo.z],yc(t,Ks,$s,js,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new k,new k,new k,new k,new k,new k,new k,new k],di=new k,ja=new Ri,Ks=new k,$s=new k,js=new k,cs=new k,hs=new k,Ts=new k,Br=new k,Qa=new k,eo=new k,As=new k;function yc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){As.fromArray(i,r);let o=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),c=e.dot(As),l=t.dot(As),u=n.dot(As);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var _n=new k,to=new Fe,Yf=0,ai=class extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?zl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zu(e,this.array)}};var Qr=class extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ea=class extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zf=new Ri,zr=new k,Mc=new k,Ki=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Mc)),this.expandByPoint(zr.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jf=0,si=new mt,Sc=new Rn,Qs=new k,jn=new Ri,kr=new Ri,Cn=new k,Jt=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?ea:Qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(jn.min,kr.min),jn.expandByPoint(Cn),Cn.addVectors(jn.max,kr.max),jn.expandByPoint(Cn)):(jn.expandByPoint(kr.min),jn.expandByPoint(kr.max))}jn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Cn.fromBufferAttribute(o,l),c&&(Qs.fromBufferAttribute(e,l),Cn.add(Qs)),s=Math.max(s,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ai(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new k,c[D]=new k;let u=new k,p=new k,f=new k,h=new Fe,g=new Fe,x=new Fe,m=new k,d=new k;function M(D,C,F){l[D]=l[C]=l[F]=1,u.fromBufferAttribute(n,D),p.fromBufferAttribute(n,C),f.fromBufferAttribute(n,F),h.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,F),p.sub(u),f.sub(u),g.sub(h),x.sub(h);let B=1/(g.x*x.y-x.x*g.y);isFinite(B)&&(m.copy(p).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(B),d.copy(f).multiplyScalar(g.x).addScaledVector(p,-x.x).multiplyScalar(B),o[D].add(m),o[C].add(m),o[F].add(m),c[D].add(d),c[C].add(d),c[F].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,C=T.length;D<C;++D){let F=T[D],B=F.start,K=F.count;for(let I=B,Z=B+K;I<Z;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let S=new k,E=new k,w=new k,v=new k;function b(D){w.fromBufferAttribute(s,D),v.copy(w);let C=o[D];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(v,C);let B=E.dot(c[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,B)}for(let D=0,C=n.count;D<C;++D)l[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,u=new k,p=new k;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,p=o.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[h++]}return new ai(f,u,p)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,f=l.length;p<f;p++){let h=l[p];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],p=r[l];for(let f=0,h=p.length;f<h;f++)u.push(p[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this.updateRanges=[],this.version=0,this.uuid=ks()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function zh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ks()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Gn=new k,ta=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?zl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zu(e,this.data.array)}},bc=new k,Kf=new k,$f=new dt,Qn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bc.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$f.getNormalMatrix(e),s=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jf=0,pi=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=wr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fs=class extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,Vr=new k,tr=new k,nr=new k,ir=new Fe,Gr=new Fe,Vu=new mt,no=new k,Hr=new k,io=new k,kh=new Fe,wc=new Fe,Vh=new Fe,Ps=class extends Rn{constructor(e=new fs){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Jt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oo(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new ta(n,3,0,!1)),er.setAttribute("uv",new ta(n,2,3,!1))}this.geometry=er,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;so(no.set(-.5,-.5,0),nr,a,tr,s,r),so(Hr.set(.5,-.5,0),nr,a,tr,s,r),so(io.set(.5,.5,0),nr,a,tr,s,r),kh.set(0,0),wc.set(1,0),Vh.set(1,1);let o=e.ray.intersectTriangle(no,Hr,io,!1,Vr);if(o===null&&(so(Hr.set(-.5,.5,0),nr,a,tr,s,r),wc.set(0,1),o=e.ray.intersectTriangle(no,io,Hr,!1,Vr),o===null))return;let c=e.ray.origin.distanceTo(Vr);c<e.near||c>e.far||t.push({distance:c,point:Vr.clone(),uv:qi.getInterpolation(Vr,no,Hr,io,kh,wc,Vh,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function so(i,e,t,n,s,r){ir.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*ir.x-s*ir.y,Gr.y=s*ir.x+r*ir.y):Gr.copy(ir),i.copy(e),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(Vu)}var Xi=new k,Tc=new k,ro=new k,ao=new k,gr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tc.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(Tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),c=-ao.dot(ro),l=ao.lengthSq(),u=Math.abs(1-a*a),p,f,h,g;if(u>0)if(p=a*c-o,f=a*o-c,g=r*u,p>=0)if(f>=-g)if(f<=g){let x=1/u;p*=x,f*=x,h=p*(p+a*f+2*o)+f*(a*p+f+2*c)+l}else f=r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-c),r),h=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-c),r),h=-p*p+f*(f+2*c)+l);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Tc).addScaledVector(ro,f),h}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,d=n.x-a.x,M=n.y-a.y,T=n.z-a.z,S=Math.abs(c),E=Math.abs(l),w=Math.abs(u),v,b,D,C,F,B,K,I,Z,j,$,ue;if(S>=E&&S>=w?(D=c,B=p,Z=g,ue=d,c>=0?(v=l,b=u,C=f,F=h,K=x,I=m,j=M,$=T):(v=u,b=l,C=h,F=f,K=m,I=x,j=T,$=M)):E>=w?(D=l,B=f,Z=x,ue=M,l>=0?(v=u,b=c,C=h,F=p,K=m,I=g,j=T,$=d):(v=c,b=u,C=p,F=h,K=g,I=m,j=d,$=T)):(D=u,B=h,Z=m,ue=T,u>=0?(v=c,b=l,C=p,F=f,K=g,I=x,j=d,$=M):(v=l,b=c,C=f,F=p,K=x,I=g,j=M,$=d)),D===0)return null;let G=v/D,X=b/D,Q=1/D,me=C-G*B,Ve=F-X*B,te=K-G*Z,_e=I-X*Z,Te=j-G*ue,Re=$-X*ue,Se=Te*_e-Re*te,ke=me*Re-Ve*Te,pt=te*Ve-_e*me;if(s){if(Se<0||ke<0||pt<0)return null}else if((Se<0||ke<0||pt<0)&&(Se>0||ke>0||pt>0))return null;let He=Se+ke+pt;if(He===0)return null;let _t=Q*(Se*B+ke*Z+pt*ue);return(He>0?_t<0:_t>0)?null:this.at(_t/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gh=new mt,Es=new gr,oo=new Ki,Hh=new k,lo=new k,co=new k,ho=new k,Ac=new k,uo=new k,Wh=new k,fo=new k,ut=class extends Rn{constructor(e=new Jt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(Ac.fromBufferAttribute(p,e),a?uo.addScaledVector(Ac,u):uo.addScaledVector(Ac.sub(t),u))}t.add(uo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(oo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(oo,Hh)===null||Es.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],M=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,E=T;S<E;S+=3){let w=o.getX(S),v=o.getX(S+1),b=o.getX(S+2);s=po(this,d,e,n,l,u,p,w,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,d=x;m<d;m+=3){let M=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);s=po(this,a,e,n,l,u,p,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],M=Math.max(m.start,h.start),T=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,E=T;S<E;S+=3){let w=S,v=S+1,b=S+2;s=po(this,d,e,n,l,u,p,w,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,d=x;m<d;m+=3){let M=m,T=m+1,S=m+2;s=po(this,a,e,n,l,u,p,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qf(i,e,t,n,s,r,a,o){let c;if(e.side===In?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_s,o),c===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,co),i.getVertexPosition(l,ho);let u=Qf(i,e,t,n,lo,co,ho,Wh);if(u){let p=new k;qi.getBarycoord(Wh,lo,co,ho,p),s&&(u.uv=qi.getInterpolatedAttribute(s,o,c,l,p,new Fe)),r&&(u.uv1=qi.getInterpolatedAttribute(r,o,c,l,p,new Fe)),a&&(u.normal=qi.getInterpolatedAttribute(a,o,c,l,p,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new k,materialIndex:0};qi.getNormal(lo,co,ho,f.normal),u.face=f,u.barycoord=p}return u}var $i=class extends Wn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=on,u=on,p,f){super(null,a,o,c,l,u,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var na=class extends ai{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new mt,Xh=new mt,mo=[],qh=new Ri,ed=new mt,Wr=new ut,Xr=new Ki,Is=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ed)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),qh.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Xr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),Xh.multiplyMatrices(n,sr),Wr.matrixWorld=Xh,Wr.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){let c=mo[a];c.instanceId=r,c.object=this,t.push(c)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,rl,ci));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Ki,td=new Fe(.5,.5),go=new k,ds=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],f=r[6],h=r[7],g=r[8],x=r[9],m=r[10],d=r[11],M=r[12],T=r[13],S=r[14],E=r[15];if(s[0].setComponents(l-a,h-u,d-g,E-M).normalize(),s[1].setComponents(l+a,h+u,d+g,E+M).normalize(),s[2].setComponents(l+o,h+p,d+x,E+T).normalize(),s[3].setComponents(l-o,h-p,d-x,E-T).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,h-f,d-m,E-S).normalize();else if(s[4].setComponents(l-c,h-f,d-m,E-S).normalize(),t===ri)s[5].setComponents(l+c,h+f,d+m,E+S).normalize();else if(t===hr)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=td.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yh=new mt,Bo=class i{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Yh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ds),n[s].setFromProjectionMatrix(Yh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ds),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var zo=class extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zh=new mt,Dc=new gr,vo=new Ki,xo=new k,Ds=class extends Rn{constructor(e=new Jt,t=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Zh.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(Zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=f,x=h;g<x;g++){let m=l.getX(g);xo.fromBufferAttribute(p,m),Jh(xo,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let g=f,x=h;g<x;g++)xo.fromBufferAttribute(p,g),Jh(xo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jh(i,e,t,n,s,r,a){let o=Dc.distanceSqToPoint(i);if(o<t){let c=new k;Dc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ia=class extends Wn{constructor(e=[],t=zs,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ps=class extends Wn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends Wn{constructor(e,t,n=vi,s,r,a,o=on,c=on,l,u=Zi,p=1){if(u!==Zi&&u!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sa=class extends mi{constructor(e,t=vi,n=zs,s,r,a=on,o=on,c,l=Zi){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ra=class extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class i extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function g(x,m,d,M,T,S,E,w,v,b,D){let C=S/v,F=E/b,B=S/2,K=E/2,I=w/2,Z=v+1,j=b+1,$=0,ue=0,G=new k;for(let X=0;X<j;X++){let Q=X*F-K;for(let me=0;me<Z;me++){let Ve=me*C-B;G[x]=Ve*M,G[m]=Q*T,G[d]=I,l.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[d]=w>0?1:-1,u.push(G.x,G.y,G.z),p.push(me/v),p.push(1-X/b),$+=1}}for(let X=0;X<b;X++)for(let Q=0;Q<v;Q++){let me=f+Q+Z*X,Ve=f+Q+Z*(X+1),te=f+(Q+1)+Z*(X+1),_e=f+(Q+1)+Z*X;c.push(me,Ve,_e),c.push(Ve,te,_e),ue+=6}o.addGroup(h,ue,D),h+=ue,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pi=class i extends Jt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new k,u=new Fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){let h=n+p/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ii=class i extends Jt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],f=[],h=[],g=0,x=[],m=n/2,d=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(h,2));function M(){let S=new k,E=new k,w=0,v=(t-e)/n;for(let b=0;b<=r;b++){let D=[],C=b/r,F=C*(t-e)+e;for(let B=0;B<=s;B++){let K=B/s,I=K*c+o,Z=Math.sin(I),j=Math.cos(I);E.x=F*Z,E.y=-C*n+m,E.z=F*j,p.push(E.x,E.y,E.z),S.set(Z,v,j).normalize(),f.push(S.x,S.y,S.z),h.push(K,1-C),D.push(g++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let C=x[D][b],F=x[D+1][b],B=x[D+1][b+1],K=x[D][b+1];(e>0||D!==0)&&(u.push(C,F,K),w+=3),(t>0||D!==r-1)&&(u.push(F,B,K),w+=3)}l.addGroup(d,w,0),d+=w}function T(S){let E=g,w=new Fe,v=new k,b=0,D=S===!0?e:t,C=S===!0?1:-1;for(let B=1;B<=s;B++)p.push(0,m*C,0),f.push(0,C,0),h.push(.5,.5),g++;let F=g;for(let B=0;B<=s;B++){let I=B/s*c+o,Z=Math.cos(I),j=Math.sin(I);v.x=D*j,v.y=m*C,v.z=D*Z,p.push(v.x,v.y,v.z),f.push(0,C,0),w.x=Z*.5+.5,w.y=j*.5*C+.5,h.push(w.x,w.y),g++}for(let B=0;B<s;B++){let K=E+B,I=F+B;S===!0?u.push(I,I+1,K):u.push(I+1,I,K),b+=3}l.addGroup(d,b,S===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ls=class i extends Ii{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vr=class i extends Jt{constructor(e=[new Fe(0,-.5),new Fe(.5,0),new Fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Dt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,p=new k,f=new Fe,h=new k,g=new k,x=new k,m=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,h.x=d*1,h.y=-m,h.z=d*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,h.x=d*1,h.y=-m,h.z=d*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let M=0;M<=t;M++){let T=n+M*u*s,S=Math.sin(T),E=Math.cos(T);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*S,p.y=e[w].y,p.z=e[w].x*E,a.push(p.x,p.y,p.z),f.x=M/t,f.y=w/(e.length-1),o.push(f.x,f.y);let v=c[3*w+0]*S,b=c[3*w+1],D=c[3*w+0]*E;l.push(v,b,D)}}for(let M=0;M<t;M++)for(let T=0;T<e.length-1;T++){let S=T+M*e.length,E=S,w=S+e.length,v=S+e.length+1,b=S+1;r.push(E,w,b),r.push(v,b,w)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Di=class i extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=e/o,f=t/c,h=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let M=d*f-a;for(let T=0;T<l;T++){let S=T*p-r;g.push(S,-M,0),x.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){let T=M+l*d,S=M+l*(d+1),E=M+1+l*(d+1),w=M+1+l*d;h.push(T,S,w),h.push(S,E,w)}this.setIndex(h),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},xr=class i extends Jt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],p=e,f=(t-e)/s,h=new k,g=new Fe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*a;h.x=p*Math.cos(d),h.y=p*Math.sin(d),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let M=d+m,T=M,S=M+n+1,E=M+n+2,w=M+1;o.push(T,S,w),o.push(S,E,w)}}this.setIndex(o),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gi=class i extends Jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],p=new k,f=new k,h=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let M=[],T=d/n,S=a+T*o,E=e*Math.cos(S),w=Math.sqrt(e*e-E*E),v=0;d===0&&a===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){let D=b/t,C=s+D*r;p.x=-w*Math.cos(C),p.y=E,p.z=w*Math.sin(C),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(D+v,1-T),M.push(l++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let T=u[d][M+1],S=u[d][M],E=u[d+1][M],w=u[d+1][M+1];(d!==0||a>0)&&h.push(T,S,w),(d!==n-1||c<Math.PI)&&h.push(S,E,w)}this.setIndex(h),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kh(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function Kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var Sn={clone:Vs,merge:zn},id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_r=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ns=class extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var aa=class extends pi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var yr=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pc:r=e,o=2*t-n;break;case Ic:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pc:a=e,c=2*n-t;break;case Ic:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-h)*m+(1.5+h)*x+.5*g,S=h*m-h*x;for(let E=0;E!==o;++E)r[E]=d*a[u+E]+M*a[l+E]+T*a[c+E]+S*a[p+E];return r}},Go=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),p=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*p+a[c+f]*u;return r}},Ho=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wo=class extends gs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let f=o*2,h=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],d=h*f+g*2,M=p[d],T=p[d+1],S=e*f+g*2,E=u[S],w=u[S+1],v=ad(n,t,M,E,s);r[g]=Gu(v,x,T,w,m)}return r}};function Gu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function rd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ad(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Gu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=rd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ei=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rr(t,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rr(e.times,Array),values:rr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_o(e.settings)&&(n.settings={inTangents:rr(e.settings.inTangents,Array),outTangents:rr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case Cc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ht("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;_o(this.settings)&&($h(this.settings.inTangents,e),$h(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_o(this.settings)&&(jh(this.settings.inTangents,e),jh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ct("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Uf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,f=p-n,h=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[p+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $h(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function jh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Do;var vs=class extends ei{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=qr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="color";var qo=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="number";var Yo=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Ci.slerpFlat(r,0,a,l-o,a,l,c);return r}},oa=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ei{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=qr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};Zo.prototype.ValueTypeName="vector";var Jo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,f=l.length;p<f;p+=2){let h=l[p],g=l[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new Jo,Ko=class{constructor(e){this.manager=e!==void 0?e:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends Rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},la=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ec=new mt,Qh=new k,eu=new k,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ec,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yo=new k,Mo=new Ci,Ti=new k,ha=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,Mo,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,Mo,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new k,tu=new Fe,nu=new Fe,Bn=class extends ha{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,tu,nu),t.subVectors(nu,tu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Lc=class extends ca{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}},ua=class extends Mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Us=class extends ha{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nc=class extends ca{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fa=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ar=-90,or=1,Sr=class extends Rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(ar,or,e,t);s.layers=this.layers,this.add(s);let r=new Bn(ar,or,e,t);r.layers=this.layers,this.add(r);let a=new Bn(ar,or,e,t);a.layers=this.layers,this.add(a);let o=new Bn(ar,or,e,t);o.layers=this.layers,this.add(o);let c=new Bn(ar,or,e,t);c.layers=this.layers,this.add(c);let l=new Bn(ar,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=od.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function od(){this._document.hidden===!1&&this.reset()}var sh="\\[\\]\\.:\\/",ld=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",cd="[^"+sh.replace("\\.","")+"]",hd=/((?:WC+[\/:])*)/.source.replace("WC",rh),ud=/(WCOD+)?/.source.replace("WCOD",cd),fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),pd=new RegExp("^"+hd+ud+fd+dd+"$"),md=["material","materials","bones","map"],Uc=class{constructor(e,t,n){let s=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ld,"")}static parseTrackName(e){let t=pd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);md.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Uc;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=new Float32Array(1);var iu=new mt,pa=class{constructor(e,t,n=0,s=1/0){this.ray=new gr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(e,t=!0,n=[]){return Fc(e,this,n,t),n.sort(su),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fc(e[s],this,n,t);return n.sort(su),n}};function su(i,e){return i.distance-e.distance}function Fc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fc(r[a],e,t,!0)}}var Oc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ah(i,e,t,n){let s=gd(n);switch(t){case Jc:return i*e;case rl:return i*e/s.components*s.byteLength;case al:return i*e/s.components*s.byteLength;case ys:return i*e*2/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case Kc:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case ll:return i*e*4/s.components*s.byteLength;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case fl:return Math.max(i,16)*Math.max(e,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(e,8)/2;case dl:case pl:case gl:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ml:case Ca:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gd(i){switch(i){case Pn:case Xc:return{byteLength:1,components:1};case Ar:case qc:case nn:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case vi:case nl:case ci:return{byteLength:4,components:1};case Yc:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ff(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xd(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<p.length;h++){let g=p[f],x=p[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let h=0,g=p.length;h<g;h++){let x=p[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`uniform sampler2D dfgLUT;
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
}`,vp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform float backgroundBlurriness;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:_d,alphahash_pars_fragment:yd,alphamap_fragment:Md,alphamap_pars_fragment:Sd,alphatest_fragment:bd,alphatest_pars_fragment:wd,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:Ed,batching_vertex:Cd,begin_vertex:Rd,beginnormal_vertex:Pd,bsdfs:Id,iridescence_fragment:Dd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:kd,color_vertex:Vd,common:Gd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:Kd,envmap_common_pars_fragment:$d,envmap_pars_fragment:jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hp,envmap_vertex:ep,fog_vertex:tp,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:fp,lights_phong_fragment:dp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:vp,lights_fragment_maps:xp,lights_fragment_end:_p,lightprobes_pars_fragment:yp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:wp,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Ep,map_particle_pars_fragment:Cp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Ip,morphcolor_vertex:Dp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Np,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:kp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:Yp,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:Kp,dithering_pars_fragment:$p,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:fm,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:vm,background_vert:xm,background_frag:_m,backgroundCube_vert:ym,backgroundCube_frag:Mm,cube_vert:Sm,cube_frag:bm,depth_vert:wm,depth_frag:Tm,distance_vert:Am,distance_frag:Em,equirect_vert:Cm,equirect_frag:Rm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Lm,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Vm,meshphysical_vert:Gm,meshphysical_frag:Hm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Km,sprite_frag:$m},ze={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new we(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:zn([ze.points,ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:zn([ze.common,ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:zn([ze.sprite,ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:zn([ze.common,ze.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:zn([ze.lights,ze.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ui.physical={uniforms:zn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var kl={r:0,b:0,g:0},jm=new mt,df=new dt;df.set(-1,0,0,0,1,0,0,0,1);function Qm(i,e,t,n,s,r){let a=new we(0),o=s===!0?0:1,c,l,u=null,p=0,f=null;function h(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let S=M.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(M){let T=!1,S=h(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,T){let S=h(T);S&&S.isCubeTexture?(l===void 0&&(l=new ut(new ms(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Vs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(df),l.material.toneMapped=Rt.getTransfer(S.colorSpace)!==Ht,(u!==S||p!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ut(new Di(2,2),new xt({name:"BackgroundMaterial",uniforms:Vs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(S.colorSpace)!==Ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(kl,ih(i)),t.buffers.color.setClear(kl.r,kl.g,kl.b,T,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:d}}function e0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(F,B,K,I,Z){let j=!1,$=p(F,I,K,B);r!==$&&(r=$,l(r.object)),j=h(F,I,K,Z),j&&g(F,I,K,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(F,B,K,I),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function p(F,B,K,I){let Z=I.wireframe===!0,j=n[B.id];j===void 0&&(j={},n[B.id]=j);let $=F.isInstancedMesh===!0?F.id:0,ue=j[$];ue===void 0&&(ue={},j[$]=ue);let G=ue[K.id];G===void 0&&(G={},ue[K.id]=G);let X=G[Z];return X===void 0&&(X=f(c()),G[Z]=X),X}function f(F){let B=[],K=[],I=[];for(let Z=0;Z<t;Z++)B[Z]=0,K[Z]=0,I[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:I,object:F,attributes:{},index:null}}function h(F,B,K,I){let Z=r.attributes,j=B.attributes,$=0,ue=K.getAttributes();for(let G in ue)if(ue[G].location>=0){let Q=Z[G],me=j[G];if(me===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),Q===void 0||Q.attribute!==me||me&&Q.data!==me.data)return!0;$++}return r.attributesNum!==$||r.index!==I}function g(F,B,K,I){let Z={},j=B.attributes,$=0,ue=K.getAttributes();for(let G in ue)if(ue[G].location>=0){let Q=j[G];Q===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));let me={};me.attribute=Q,Q&&Q.data&&(me.data=Q.data),Z[G]=me,$++}r.attributes=Z,r.attributesNum=$,r.index=I}function x(){let F=r.newAttributes;for(let B=0,K=F.length;B<K;B++)F[B]=0}function m(F){d(F,0)}function d(F,B){let K=r.newAttributes,I=r.enabledAttributes,Z=r.attributeDivisors;K[F]=1,I[F]===0&&(i.enableVertexAttribArray(F),I[F]=1),Z[F]!==B&&(i.vertexAttribDivisor(F,B),Z[F]=B)}function M(){let F=r.newAttributes,B=r.enabledAttributes;for(let K=0,I=B.length;K<I;K++)B[K]!==F[K]&&(i.disableVertexAttribArray(K),B[K]=0)}function T(F,B,K,I,Z,j,$){$===!0?i.vertexAttribIPointer(F,B,K,Z,j):i.vertexAttribPointer(F,B,K,I,Z,j)}function S(F,B,K,I){x();let Z=I.attributes,j=K.getAttributes(),$=B.defaultAttributeValues;for(let ue in j){let G=j[ue];if(G.location>=0){let X=Z[ue];if(X===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(X=F.instanceColor)),X!==void 0){let Q=X.normalized,me=X.itemSize,Ve=e.get(X);if(Ve===void 0)continue;let te=Ve.buffer,_e=Ve.type,Te=Ve.bytesPerElement,Re=_e===i.INT||_e===i.UNSIGNED_INT||X.gpuType===nl;if(X.isInterleavedBufferAttribute){let Se=X.data,ke=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,pt=X.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let He=0;He<G.locationSize;He++)d(G.location+He,Se.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let He=0;He<G.locationSize;He++)m(G.location+He);i.bindBuffer(i.ARRAY_BUFFER,te);for(let He=0;He<G.locationSize;He++)T(G.location+He,me/G.locationSize,_e,Q,ke*Te,(pt+me/G.locationSize*He)*Te,Re)}else{if(X.isInstancedBufferAttribute){for(let Se=0;Se<G.locationSize;Se++)d(G.location+Se,X.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Se=0;Se<G.locationSize;Se++)T(G.location+Se,me/G.locationSize,_e,Q,me*Te,me/G.locationSize*Se*Te,Re)}}else if($!==void 0){let Q=$[ue];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(G.location,Q);break;case 3:i.vertexAttrib3fv(G.location,Q);break;case 4:i.vertexAttrib4fv(G.location,Q);break;default:i.vertexAttrib1fv(G.location,Q)}}}}M()}function E(){D();for(let F in n){let B=n[F];for(let K in B){let I=B[K];for(let Z in I){let j=I[Z];for(let $ in j)u(j[$].object),delete j[$];delete I[Z]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let B=n[F.id];for(let K in B){let I=B[K];for(let Z in I){let j=I[Z];for(let $ in j)u(j[$].object),delete j[$];delete I[Z]}}delete n[F.id]}function v(F){for(let B in n){let K=n[B];for(let I in K){let Z=K[I];if(Z[F.id]===void 0)continue;let j=Z[F.id];for(let $ in j)u(j[$].object),delete j[$];delete Z[F.id]}}}function b(F){for(let B in n){let K=n[B],I=F.isInstancedMesh===!0?F.id:0,Z=K[I];if(Z!==void 0){for(let j in Z){let $=Z[j];for(let ue in $)u($[ue].object),delete $[ue];delete Z[j]}delete K[I],Object.keys(K).length===0&&delete n[B]}}}function D(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function t0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function n0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==ti&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let b=v===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Pn&&v!==ci&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(ht("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:E,samples:w}}function i0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let h=p.length!==0||f||n!==0||s;return s=f,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=u(p,f,0)},this.setState=function(p,f,h){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let M=r?0:n,T=M*4,S=d.clippingState||null;c.value=S,S=u(g,f,T,h);for(let E=0;E!==T;++E)S[E]=t[E];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,f,h,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=h+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=h;T!==x;++T,S+=4)a.copy(p[T]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var La=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:yn});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=Hn),new Sr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Wu=256,s0=3,r0=20,pf=256,mf=16,a0=3,o0=new k,l0=new we,Cr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sr(1,10,null),this._boxMesh=new ut(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=o0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(l0));let m=new Sr(n,s,u);return m.position.copy(o),m.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=h,c.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wu,Ou(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===Tr?this._setSize(e.image.length===0?Wu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Xu(e,!1,!1),n=Math.log2(e)-s0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===Tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=c0(),this._integrationMaterial=h0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/mf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-a0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(pf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=u0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Xu(i,e,t){return new La(i,{minFilter:ji,generateMipmaps:e,type:nn,colorSpace:Yr,depthBuffer:t})}function Na(i,e,t){return new xt({name:i,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:In,blending:yn,depthTest:!1,depthWrite:!1})}function c0(){return Na("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pf}u

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
	`)}function h0(){return Na("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mf}},`

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
	`)}function u0(){return Na("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${r0}
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
	`)}function qu(){return Na("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yu(){return Na("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function f0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===Qo||h===el)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new La(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,g=h===Qo||h===el,x=h===zs||h===Tr;if(g||x){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Cr(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Cr(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===Qo?f.mapping=zs:h===el&&(f.mapping=Tr),f}function c(f){let h=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function d0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function p0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function p(g){let x=g.index,m=g.attributes.position,d=0;if(m===void 0)return;let M=x!==null?x.array.length:m.array.length/3-1,T=m.count>=65535?ea:Qr,S=new T(Math.ceil(M/3)*6,1),E=S.array;if(x!==null){let v=x.array;d=x.version;for(let b=0,D=0;b<M;b+=3){let C=v[b+0],F=v[b+1],B=v[b+2];E[D++]=C,E[D++]=F,E[D++]=F,E[D++]=B,E[D++]=B,E[D++]=C}}else{d=m.version;for(let v=0,b=0;v<M;v+=3){let D=v+0,C=v+1,F=v+2;E[b++]=D,E[b++]=C,E[b++]=C,E[b++]=F,E[b++]=F,E[b++]=D}}S.version=d;let w=r.get(g);w&&e.remove(w),r.set(g,S)}function f(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&p(g)}else p(g);return r.get(g)}function h(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:f,dispose:h}}function m0(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function l(p,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,p*a,h),t.update(f,n,h))}function u(p,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function g0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v0(i,e,t){let n=new WeakMap,s=new Yt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==p){let D=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;h===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*E*4*p),v=new $r(w,S,E,p);v.type=ci,v.needsUpdate=!0;let b=T*4;for(let C=0;C<p;C++){let F=m[C],B=d[C],K=M[C],I=S*E*4*C;for(let Z=0;Z<F.count;Z++){let j=Z*b;h===!0&&(s.fromBufferAttribute(F,Z),w[I+j+0]=s.x,w[I+j+1]=s.y,w[I+j+2]=s.z,w[I+j+3]=0),g===!0&&(s.fromBufferAttribute(B,Z),w[I+j+4]=s.x,w[I+j+5]=s.y,w[I+j+6]=s.z,w[I+j+7]=0),x===!0&&(s.fromBufferAttribute(K,Z),w[I+j+8]=s.x,w[I+j+9]=s.y,w[I+j+10]=s.z,w[I+j+11]=K.itemSize===4?s.w:1)}}f={count:p,texture:v,size:new Fe(S,E)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function x0(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,f=e.get(l,p);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var _0={[va]:"LINEAR_TONE_MAPPING",[xa]:"REINHARD_TONE_MAPPING",[_a]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[Ma]:"AGX_TONE_MAPPING",[Sa]:"NEUTRAL_TONE_MAPPING",[ya]:"CUSTOM_TONE_MAPPING"};function y0(i,e,t,n,s,r){let a=new Zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new Jt;u.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $e([0,2,0,0,2,0],2));let p=new _r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ut(u,p),h=new Us(-1,1,1,-1,0,1),g=null,x=null,m=!1,d,M=null,T=[],S=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let v=0;v<T.length;v++){let b=T[v];b.setSize&&b.setSize(E,w)}},this.setEffects=function(E){T=E,S=T.length>0&&T[0].isRenderPass===!0;let w=a.width,v=a.height;T.length>0&&o===null&&(o=new Zt(w,v,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(w,v,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new mi(w,v),r===!0&&(l.format=xi,l.type=Qi)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<T.length;D++){let C=T[D];C.setSize&&C.setSize(w,v),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(E,w){if(m||E.toneMapping===Li&&T.length===0)return!1;if(M=w,w!==null){let v=w.width,b=w.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return S===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=Li,!0},this.hasRenderPass=function(){return S},this.end=function(E,w){E.toneMapping=d,m=!0;let v=a,b=o;for(let D=0;D<T.length;D++){let C=T[D];C.enabled!==!1&&(C.render(E,b,v,w),C.needsSwap!==!1&&(v=b,b=b===o?c:o))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,p.defines={},Rt.getTransfer(g)===Ht&&(p.defines.SRGB_TRANSFER="");let D=_0[x];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(M),E.render(f,h),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}var gf=new Wn,vf=new mi(1,1),xf=new sa(1),_f=new $r,yf=new Fo,Mf=new ia,Zu=[],Ju=[],Ku=new Float32Array(16),$u=new Float32Array(9),ju=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hl(i,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2fv(this.addr,e),wn(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;i.uniform3fv(this.addr,e),wn(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4fv(this.addr,e),wn(t,e)}}function T0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),wn(t,n)}}function A0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),wn(t,n)}}function E0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;Ku.set(n),i.uniformMatrix4fv(this.addr,!1,Ku),wn(t,n)}}function C0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2iv(this.addr,e),wn(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3iv(this.addr,e),wn(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4iv(this.addr,e),wn(t,e)}}function D0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2uiv(this.addr,e),wn(t,e)}}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3uiv(this.addr,e),wn(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4uiv(this.addr,e),wn(t,e)}}function Wl(i){return i.version===0&&(i.compareFunction=eh,i.needsUpdate=!0),i}function F0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Wl(vf):r=gf,t.setTexture2D(e||r,s)}function O0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yf,s)}function B0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Wl(xf):r=Mf,t.setTextureCube(e||r,s)}function z0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_f,s)}function k0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return b0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return E0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return L0;case 36295:return N0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function V0(i,e){i.uniform1fv(this.addr,e)}function G0(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function H0(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function W0(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function X0(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q0(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y0(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z0(i,e){i.uniform1iv(this.addr,e)}function J0(i,e){i.uniform2iv(this.addr,e)}function K0(i,e){i.uniform3iv(this.addr,e)}function $0(i,e){i.uniform4iv(this.addr,e)}function j0(i,e){i.uniform1uiv(this.addr,e)}function Q0(i,e){i.uniform2uiv(this.addr,e)}function eg(i,e){i.uniform3uiv(this.addr,e)}function tg(i,e){i.uniform4uiv(this.addr,e)}function ng(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wl(vf):a=gf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ig(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yf,r[a])}function sg(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Wl(xf):a=Mf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function rg(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_f,r[a])}function ag(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return H0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Q0;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k0(t.type)}},hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ag(t.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Qu(i,e){i.seq.push(e),i.map[e.id]=e}function og(i,e,t){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Qu(t,l===void 0?new ch(o,i,e):new hh(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new uh(o),Qu(t,p)),t=p}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);og(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var tf=new dt;function ug(i){Rt._getMatrix(tf,Rt.workingColorSpace,i);let e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hg(i.getShaderSource(e),o)}else return r}function fg(i,e){let t=ug(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dg={[va]:"Linear",[xa]:"Reinhard",[_a]:"Cineon",[Bs]:"ACESFilmic",[Ma]:"AgX",[Sa]:"Neutral",[ya]:"Custom"};function pg(i,e){let t=dg[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vl=new k;function mg(){Rt.getLuminanceCoefficients(Vl);let i=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function vg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Da(i){return i!==""}function sf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(_g,yg)}function yg(i,e){let t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fh(t)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(Mg,Sg)}function Sg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var bg={[Fs]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function wg(i){return bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tg={[Tr]:"ENVMAP_MODE_REFRACTION"};function Ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Eg={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[Su]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Cg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Eg[i.combine]||"ENVMAP_BLENDING_NONE"}function Rg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=wg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ag(t),p=Cg(t),f=gg(t),h=vg(r),g=s.createProgram(),x,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Da).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Da).join(`
`),m.length>0&&(m+=`
`)):(x=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),m=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?wt.tonemapping_pars_fragment:"",t.toneMapping!==Li?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,fg("linearToOutputTexel",t.outputColorSpace),mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=fh(a),a=sf(a,t),a=rf(a,t),o=fh(o),o=sf(o,t),o=rf(o,t),a=af(a),o=af(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=d+x+a,T=d+m+o,S=ef(s,s.VERTEX_SHADER,M),E=ef(s,s.FRAGMENT_SHADER,T);s.attachShader(g,S),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(C){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(S)||"",K=s.getShaderInfoLog(E)||"",I=F.trim(),Z=B.trim(),j=K.trim(),$=!0,ue=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,E);else{let G=nf(s,S,"vertex"),X=nf(s,E,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+G+`
`+X)}else I!==""?ht("WebGLProgram: Program Info Log:",I):(Z===""||j==="")&&(ue=!1);ue&&(C.diagnostics={runnable:$,programLog:I,vertexShader:{log:Z,prefix:x},fragmentShader:{log:j,prefix:m}})}s.deleteShader(S),s.deleteShader(E),v=new Er(s,g),b=xg(s,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,lg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}var Pg=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ph(e),t.set(e,n)),n}},ph=class{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}};function Ig(i){return i===ys||i===Ca||i===Ra}function Dg(i,e,t,n,s,r){let a=new dr,o=new dh,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,b,D,C,F,B){let K=C.fog,I=F.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=e.get(v.envMap||Z,j),ue=f[v.type],G=n.precision;v.precision!==null&&(G=n.getMaxPrecision(v.precision),G!==v.precision&&ht("WebGLProgram.getParameters:",v.precision,"not supported, using",G,"instead."));let X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=X!==void 0?X.length:0,me=0;I.morphAttributes.position!==void 0&&(me=1),I.morphAttributes.normal!==void 0&&(me=2),I.morphAttributes.color!==void 0&&(me=3);let Ve,te,_e,Te;if(ue){let Ne=Ui[ue];Ve=Ne.vertexShader,te=Ne.fragmentShader}else{Ve=v.vertexShader,te=v.fragmentShader;let Ne=o.getVertexShaderStage(v),kt=o.getFragmentShaderStage(v);o.update(v,Ne,kt),_e=Ne.id,Te=kt.id}let Re=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,pt=F.isBatchedMesh===!0,He=!!v.map,_t=!!v.matcap,At=!!$,st=At&&$.isPMREMTexture===!0,Lt=!!v.aoMap,Ft=!!v.lightMap,yt=!!v.bumpMap&&v.wireframe===!1,Qe=!!v.normalMap,Pt=!!v.displacementMap,Et=!!v.emissiveMap,$t=!!v.metalnessMap,Wt=!!v.roughnessMap,Qt=v.anisotropy>0,z=v.clearcoat>0,Xt=v.diffuseRoughness>0,bt=v.dispersion>0,Ct=v.retroreflectivity>0,Ae=v.iridescence>0,Ot=v.sheen>0,qe=v.transmission>0,tt=Qt&&!!v.anisotropyMap,A=z&&!!v.clearcoatMap,_=z&&!!v.clearcoatNormalMap,q=z&&!!v.clearcoatRoughnessMap,ve=Xt&&!!v.diffuseRoughnessMap,le=Ae&&!!v.iridescenceMap,xe=Ae&&!!v.iridescenceThicknessMap,N=Ot&&!!v.sheenColorMap,O=Ot&&!!v.sheenRoughnessMap,V=!!v.specularMap,ye=!!v.specularColorMap,R=!!v.specularIntensityMap,re=qe&&!!v.transmissionMap,ne=qe&&!!v.thicknessMap,ge=!!v.gradientMap,Me=!!v.alphaMap,Ee=v.alphaTest>0,Be=!!v.alphaHash,nt=!!v.extensions,de=Li;v.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(de=i.toneMapping);let Je=st?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,ft={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:te,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:G,batching:pt,batchingColor:pt&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:_t,envMap:At,envMapMode:At&&$.mapping,envMapPMREM:st,envMapMaxLod:st?Je.length-1:null,envMapSize:st?Je[0].width:null,aoMap:Lt,lightMap:Ft,bumpMap:yt,normalMap:Qe,displacementMap:Pt,emissiveMap:Et,normalMapObjectSpace:Qe&&v.normalMapType===Au,normalMapTangentSpace:Qe&&v.normalMapType===Pa,packedNormalMap:Qe&&v.normalMapType===Pa&&Ig(v.normalMap.format),metalnessMap:$t,roughnessMap:Wt,anisotropy:Qt,anisotropyMap:tt,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:q,diffuseRoughness:Xt,diffuseRoughnessMap:ve,dispersion:bt,retroreflection:Ct,iridescence:Ae,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:Ot,sheenColorMap:N,sheenRoughnessMap:O,specularMap:V,specularColorMap:ye,specularIntensityMap:R,transmission:qe,transmissionMap:re,thicknessMap:ne,gradientMap:ge,opaque:v.transparent===!1&&v.blending===wr&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ee,alphaHash:Be,combine:v.combine,mapUv:He&&h(v.map.channel),aoMapUv:Lt&&h(v.aoMap.channel),lightMapUv:Ft&&h(v.lightMap.channel),bumpMapUv:yt&&h(v.bumpMap.channel),normalMapUv:Qe&&h(v.normalMap.channel),displacementMapUv:Pt&&h(v.displacementMap.channel),emissiveMapUv:Et&&h(v.emissiveMap.channel),metalnessMapUv:$t&&h(v.metalnessMap.channel),roughnessMapUv:Wt&&h(v.roughnessMap.channel),anisotropyMapUv:tt&&h(v.anisotropyMap.channel),clearcoatMapUv:A&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&h(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&h(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:N&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:O&&h(v.sheenRoughnessMap.channel),specularMapUv:V&&h(v.specularMap.channel),specularColorMapUv:ye&&h(v.specularColorMap.channel),specularIntensityMapUv:R&&h(v.specularIntensityMap.channel),transmissionMapUv:re&&h(v.transmissionMap.channel),thicknessMapUv:ne&&h(v.thicknessMap.channel),alphaMapUv:Me&&h(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qe||Qt),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(He||Me),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&Qe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:me,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&Rt.getTransfer(v.map.colorSpace)===Ht,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(v.emissiveMap.colorSpace)===Ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pn,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:nt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&v.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function x(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(b,v),d(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function d(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){let b=f[v.type],D;if(b){let C=Ui[b];D=Sn.clone(C.uniforms)}else D=v.uniforms;return D}function T(v,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Rg(i,b,v,s),l.push(D),u.set(b,D)),D}function S(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:w}}function Lg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,x,m,d){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=g,M.materialVariant=a(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=d),e++,M}function c(f,h,g,x,m,d,M){M.reversedDepth===!0&&(m=-m);let T=o(f,h,g,x,m,d);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(f,h,g,x,m,d){let M=o(f,h,g,x,m,d);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(f,h){t.length>1&&t.sort(f||Ng),n.length>1&&n.sort(h||lf),s.length>1&&s.sort(h||lf)}function p(){for(let f=e,h=i.length;f<h;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function Ug(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new cf,i.set(n,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new we};break;case"SpotLight":t={position:new k,direction:new k,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Og(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bg=0;function zg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kg(i){let e=new Fg,t=Og(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new mt,a=new mt;function o(l){let u=0,p=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let h=0,g=0,x=0,m=0,d=0,M=0,T=0,S=0,E=0,w=0,v=0,b=0,D=0,C=0;l.sort(zg);for(let B=0,K=l.length;B<K;B++){let I=l[B],Z=I.color,j=I.intensity,$=I.distance,ue=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ys?ue=I.shadow.map.texture:ue=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=Z.r*j,p+=Z.g*j,f+=Z.b*j;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],j);C++}else if(I.isSunLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,Q=t.get(I);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=ue;let me=X.getViewportCount();for(let Ve=0;Ve<me;Ve++)n.sunShadowMatrix[x+Ve]=X.getMatrix(Ve),n.sunShadowCascade[x+Ve]=X._cascadeData[Ve];x+=me,g++}n.sun[h]=G,h++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,Q=t.get(I);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=ue,n.directionalShadowMatrix[m]=I.shadow.matrix,E++}n.directional[m]=G,m++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(Z).multiplyScalar(j),G.distance=$,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[M]=G;let X=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,X.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[M]=X.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=ue,v++}M++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(Z).multiplyScalar(j),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=G,T++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let X=I.shadow,Q=t.get(I);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=ue,n.pointShadowMatrix[d]=I.shadow.matrix,w++}n.point[d]=G,d++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(j),G.groundColor.copy(I.groundColor).multiplyScalar(j),n.hemi[S]=G,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;let F=n.hash;(F.sunLength!==h||F.directionalLength!==m||F.pointLength!==d||F.spotLength!==M||F.rectAreaLength!==T||F.hemiLength!==S||F.numSunShadows!==g||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==v||F.numSpotMaps!==b||F.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=d,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,F.sunLength=h,F.directionalLength=m,F.pointLength=d,F.spotLength=M,F.rectAreaLength=T,F.hemiLength=S,F.numSunShadows=g,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=v,F.numSpotMaps=b,F.numLightProbes=C,n.version=Bg++)}function c(l,u){let p=0,f=0,h=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let S=l[M];if(S.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),p++}else if(S.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(S.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),h++}else if(S.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function hf(i){let e=new kg(i),t=[],n=[],s=[];function r(p){u.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function c(){e.setup(t),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function l(p){e.setupView(t,p)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new hf(i),e.set(s,[o])):r>=a.length?(o=new hf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`,Wg=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Xg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],uf=new mt,Ia=new k,lh=new k;function qg(i,e,t){let n=new ds,s=new Fe,r=new Fe,a=new Yt,o=new yr,c=new ko,l={},u=t.maxTextureSize,p={[_s]:In,[In]:_s,[pn]:pn},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Gg,fragmentShader:Hg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let d=this.type;this.render=function(w,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ou&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let D=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),B=i.state;B.setBlending(yn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let K=d!==this.type;K&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Z=>Z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Z=w.length;I<Z;I++){let j=w[I],$=j.shadow;if($===void 0){ht("WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ue=$.getFrameExtents();s.multiply(ue),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,$.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=G,$.map===null||K===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===br){if(j.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Zt(s.x,s.y,{format:ys,type:nn,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),$.map.texture.name=j.name+".shadowMap",$.map.depthTexture=new mi(s.x,s.y,ci),$.map.depthTexture.name=j.name+".shadowMapDepth",$.map.depthTexture.format=Zi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on}else j.isPointLight?($.map=new La(s.x),$.map.depthTexture=new sa(s.x,vi)):($.map=new Zt(s.x,s.y),$.map.depthTexture=new mi(s.x,s.y,vi)),$.map.depthTexture.name=j.name+".shadowMap",$.map.depthTexture.format=Zi,this.type===Fs?($.map.depthTexture.compareFunction=G?Qc:jc,$.map.depthTexture.minFilter=Hn,$.map.depthTexture.magFilter=Hn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let X=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();j.isPointLight!==!0&&$.updateMatrices(j,b);let Q=($.camera.layers.mask&4294967294)!==0?$.camera.layers:b.layers;for(let me=0;me<X;me++){let Ve=$.getCamera(me);if(j.isPointLight){let te=$.camera,_e=$.matrix,Te=j.distance||te.far;Te!==te.far&&(te.far=Te,te.updateProjectionMatrix()),Ia.setFromMatrixPosition(j.matrixWorld),te.position.copy(Ia),lh.copy(te.position),lh.add(Wg[me]),te.up.copy(Xg[me]),te.lookAt(lh),te.updateMatrixWorld(),_e.makeTranslation(-Ia.x,-Ia.y,-Ia.z),uf.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),$._frustum.setFromProjectionMatrix(uf,te.coordinateSystem,te.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,me),i.clear();else{me===0&&(i.setRenderTarget($.map),i.clear());let te=$.getViewport(me);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),B.viewport(a)}n=$.getFrustum(me),S(v,b,Ve,j,Q,this.type)}$.isPointLightShadow!==!0&&this.type===br&&M($,b),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(D,C,F)};function M(w,v){let b=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new Zt(s.x,s.y,{format:ys,type:nn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(v,null,b,f,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(v,null,b,h,x,null)}function T(w,v,b,D){let C=null,F=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)C=F;else if(C=b.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let B=C.uuid,K=v.uuid,I=l[B];I===void 0&&(I={},l[B]=I);let Z=I[K];Z===void 0&&(Z=C.clone(),I[K]=Z,v.addEventListener("dispose",E)),C=Z}if(C.visible=v.visible,C.wireframe=v.wireframe,D===br?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:p[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=b}return C}function S(w,v,b,D,C,F){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===br)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=e.update(w),Z=w.material;if(Array.isArray(Z)){let j=I.groups;for(let $=0,ue=j.length;$<ue;$++){let G=j[$],X=Z[G.materialIndex];if(X&&X.visible){let Q=T(w,X,D,F);w.onBeforeShadow(i,w,v,b,I,Q,G),i.renderBufferDirect(b,null,I,Q,w,G),w.onAfterShadow(i,w,v,b,I,Q,G)}}}else if(Z.visible){let j=T(w,Z,D,F);w.onBeforeShadow(i,w,v,b,I,j,null),i.renderBufferDirect(b,null,I,j,w,null),w.onAfterShadow(i,w,v,b,I,j,null)}}let K=w.children;for(let I=0,Z=K.length;I<Z;I++)S(K[I],v,b,D,C,F)}function E(w){w.target.removeEventListener("dispose",E);for(let b in l){let D=l[b],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function Yg(i,e){function t(){let R=!1,re=new Yt,ne=null,ge=new Yt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!R&&(i.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){R=Me},setClear:function(Me,Ee,Be,nt,de){de===!0&&(Me*=nt,Ee*=nt,Be*=nt),re.set(Me,Ee,Be,nt),ge.equals(re)===!1&&(i.clearColor(Me,Ee,Be,nt),ge.copy(re))},reset:function(){R=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let R=!1,re=!1,ne=null,ge=null,Me=null;return{setReversed:function(Ee){if(re!==Ee){let Be=e.get("EXT_clip_control");Ee?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),re=Ee;let nt=Me;Me=null,this.setClear(nt)}},getReversed:function(){return re},setTest:function(Ee){Ee?Se(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Ee){ne!==Ee&&!R&&(i.depthMask(Ee),ne=Ee)},setFunc:function(Ee){if(re&&(Ee=Fu[Ee]),ge!==Ee){switch(Ee){case wo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Ee}},setLocked:function(Ee){R=Ee},setClear:function(Ee){Me!==Ee&&(Me=Ee,re&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){R=!1,ne=null,ge=null,Me=null,re=!1}}}function s(){let R=!1,re=null,ne=null,ge=null,Me=null,Ee=null,Be=null,nt=null,de=null;return{setTest:function(Je){R||(Je?Se(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Je){re!==Je&&!R&&(i.stencilMask(Je),re=Je)},setFunc:function(Je,ft,Ne){(ne!==Je||ge!==ft||Me!==Ne)&&(i.stencilFunc(Je,ft,Ne),ne=Je,ge=ft,Me=Ne)},setOp:function(Je,ft,Ne){(Ee!==Je||Be!==ft||nt!==Ne)&&(i.stencilOp(Je,ft,Ne),Ee=Je,Be=ft,nt=Ne)},setLocked:function(Je){R=Je},setClear:function(Je){de!==Je&&(i.clearStencil(Je),de=Je)},reset:function(){R=!1,re=null,ne=null,ge=null,Me=null,Ee=null,Be=null,nt=null,de=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,u={},p={},f={},h=new WeakMap,g=[],x=null,m=!1,d=null,M=null,T=null,S=null,E=null,w=null,v=null,b=new we(0,0,0),D=0,C=!1,F=null,B=null,K=null,I=null,Z=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ue=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=ue>=1):G.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=ue>=2);let X=null,Q={},me=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),te=new Yt().fromArray(me),_e=new Yt().fromArray(Ve);function Te(R,re,ne,ge){let Me=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(R,Ee),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ne;Be++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(re+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ee}let Re={};Re[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),a.setFunc(cr),yt(!1),Qe(Bc),Se(i.CULL_FACE),Lt(yn);function Se(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function ke(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function pt(R,re){return f[R]!==re?(i.bindFramebuffer(R,re),f[R]=re,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=re),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=re),!0):!1}function He(R,re){let ne=g,ge=!1;if(R){ne=h.get(re),ne===void 0&&(ne=[],h.set(re,ne));let Me=R.textures;if(ne.length!==Me.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Be=Me.length;Ee<Be;Ee++)ne[Ee]=i.COLOR_ATTACHMENT0+Ee;ne.length=Me.length,ge=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ne)}function _t(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let At={[li]:i.FUNC_ADD,[lu]:i.FUNC_SUBTRACT,[cu]:i.FUNC_REVERSE_SUBTRACT};At[hu]=i.MIN,At[uu]=i.MAX;let st={[Os]:i.ZERO,[fu]:i.ONE,[du]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[ga]:i.DST_COLOR,[ma]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function Lt(R,re,ne,ge,Me,Ee,Be,nt,de,Je){if(R===yn){m===!0&&(ke(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),R!==jo){if(R!==d||Je!==C){if((M!==li||E!==li)&&(i.blendEquation(i.FUNC_ADD),M=li,E=li),Je)switch(R){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",R);break}else switch(R){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",R);break}T=null,S=null,w=null,v=null,b.set(0,0,0),D=0,d=R,C=Je}return}Me=Me||re,Ee=Ee||ne,Be=Be||ge,(re!==M||Me!==E)&&(i.blendEquationSeparate(At[re],At[Me]),M=re,E=Me),(ne!==T||ge!==S||Ee!==w||Be!==v)&&(i.blendFuncSeparate(st[ne],st[ge],st[Ee],st[Be]),T=ne,S=ge,w=Ee,v=Be),(nt.equals(b)===!1||de!==D)&&(i.blendColor(nt.r,nt.g,nt.b,de),b.copy(nt),D=de),d=R,C=!1}function Ft(R,re){R.side===pn?ke(i.CULL_FACE):Se(i.CULL_FACE);let ne=R.side===In;re&&(ne=!ne),yt(ne),R.blending===wr&&R.transparent===!1?Lt(yn):Lt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ge=R.stencilWrite;o.setTest(ge),ge&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(R){F!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),F=R)}function Qe(R){R!==ru?(Se(i.CULL_FACE),R!==B&&(R===Bc?i.cullFace(i.BACK):R===au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),B=R}function Pt(R){R!==K&&($&&i.lineWidth(R),K=R)}function Et(R,re,ne){R?(Se(i.POLYGON_OFFSET_FILL),(I!==re||Z!==ne)&&(I=re,Z=ne,a.getReversed()&&(re=-re,ne=-ne),i.polygonOffset(re,ne))):ke(i.POLYGON_OFFSET_FILL)}function $t(R){R?Se(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function Wt(R){R===void 0&&(R=i.TEXTURE0+j-1),X!==R&&(i.activeTexture(R),X=R)}function Qt(R,re,ne){ne===void 0&&(X===null?ne=i.TEXTURE0+j-1:ne=X);let ge=Q[ne];ge===void 0&&(ge={type:void 0,texture:void 0},Q[ne]=ge),(ge.type!==R||ge.texture!==re)&&(X!==ne&&(i.activeTexture(ne),X=ne),i.bindTexture(R,re||Re[R]),ge.type=R,ge.texture=re)}function z(){let R=Q[X];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function bt(){try{i.compressedTexImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function Ct(){try{i.texSubImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function Ae(){try{i.texSubImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function Ot(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function tt(){try{i.texStorage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function A(){try{i.texStorage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function q(){try{i.texImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function ve(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function le(R,re){p[R]!==re&&(i.pixelStorei(R,re),p[R]=re)}function xe(R){te.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),te.copy(R))}function N(R){_e.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function O(R,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let ge=ne.get(R);ge===void 0&&(ge=i.getUniformBlockIndex(re,R.name),i.uniformBlockBinding(re,ge,ge),ne.set(R,ge))}function V(R,re,ne){let Me=l.get(re).get(R);c[Me]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,ne),c[Me]=ne)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},X=null,Q={},f={},c={},h=new WeakMap,g=[],x=null,m=!1,d=null,M=null,T=null,S=null,E=null,w=null,v=null,b=new we(0,0,0),D=0,C=!1,F=null,B=null,K=null,I=null,Z=null,te.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:ke,bindFramebuffer:pt,drawBuffers:He,useProgram:_t,setBlending:Lt,setMaterial:Ft,setFlipSided:yt,setCullFace:Qe,setLineWidth:Pt,setPolygonOffset:Et,setScissorTest:$t,activeTexture:Wt,bindTexture:Qt,unbindTexture:z,compressedTexImage2D:Xt,compressedTexImage3D:bt,texImage2D:_,texImage3D:q,pixelStorei:le,getParameter:ve,updateUBOMapping:O,uniformBlockBinding:V,texStorage2D:tt,texStorage3D:A,texSubImage2D:Ct,texSubImage3D:Ae,compressedTexSubImage2D:Ot,compressedTexSubImage3D:qe,scissor:xe,viewport:N,reset:ye}}function Zg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,u=new WeakMap,p=new Set,f,h=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,_){return m?new OffscreenCanvas(A,_):Jr("canvas")}function M(A,_,q){let ve=1,le=tt(A);if((le.width>q||le.height>q)&&(ve=q/Math.max(le.width,le.height)),ve<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let xe=Math.floor(ve*le.width),N=Math.floor(ve*le.height);f===void 0&&(f=d(xe,N));let O=_?d(xe,N):f;return O.width=xe,O.height=N,O.getContext("2d").drawImage(A,0,0,xe,N),ht("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+N+")."),O}else return"data"in A&&ht("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function T(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,_,q,ve,le,xe=!1){if(A!==null){if(i[A]!==void 0)return i[A];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let N;ve&&(N=e.get("EXT_texture_norm16"),N||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=_;if(_===i.RED&&(q===i.FLOAT&&(O=i.R32F),q===i.HALF_FLOAT&&(O=i.R16F),q===i.UNSIGNED_BYTE&&(O=i.R8),q===i.UNSIGNED_SHORT&&N&&(O=N.R16_EXT),q===i.SHORT&&N&&(O=N.R16_SNORM_EXT)),_===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(O=i.R8UI),q===i.UNSIGNED_SHORT&&(O=i.R16UI),q===i.UNSIGNED_INT&&(O=i.R32UI),q===i.BYTE&&(O=i.R8I),q===i.SHORT&&(O=i.R16I),q===i.INT&&(O=i.R32I)),_===i.RG&&(q===i.FLOAT&&(O=i.RG32F),q===i.HALF_FLOAT&&(O=i.RG16F),q===i.UNSIGNED_BYTE&&(O=i.RG8),q===i.UNSIGNED_SHORT&&N&&(O=N.RG16_EXT),q===i.SHORT&&N&&(O=N.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(O=i.RG8UI),q===i.UNSIGNED_SHORT&&(O=i.RG16UI),q===i.UNSIGNED_INT&&(O=i.RG32UI),q===i.BYTE&&(O=i.RG8I),q===i.SHORT&&(O=i.RG16I),q===i.INT&&(O=i.RG32I)),_===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(O=i.RGB8UI),q===i.UNSIGNED_SHORT&&(O=i.RGB16UI),q===i.UNSIGNED_INT&&(O=i.RGB32UI),q===i.BYTE&&(O=i.RGB8I),q===i.SHORT&&(O=i.RGB16I),q===i.INT&&(O=i.RGB32I)),_===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),q===i.UNSIGNED_INT&&(O=i.RGBA32UI),q===i.BYTE&&(O=i.RGBA8I),q===i.SHORT&&(O=i.RGBA16I),q===i.INT&&(O=i.RGBA32I)),_===i.RGB&&(q===i.UNSIGNED_SHORT&&N&&(O=N.RGB16_EXT),q===i.SHORT&&N&&(O=N.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),_===i.RGBA){let V=xe?Zr:Rt.getTransfer(le);q===i.FLOAT&&(O=i.RGBA32F),q===i.HALF_FLOAT&&(O=i.RGBA16F),q===i.UNSIGNED_BYTE&&(O=V===Ht?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&N&&(O=N.RGBA16_EXT),q===i.SHORT&&N&&(O=N.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function v(A,_){let q;return A?_===null||_===vi||_===Qi?q=i.DEPTH24_STENCIL8:_===ci?q=i.DEPTH32F_STENCIL8:_===Ar&&(q=i.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===Qi?q=i.DEPTH_COMPONENT24:_===ci?q=i.DEPTH_COMPONENT32F:_===Ar&&(q=i.DEPTH_COMPONENT16),q}function b(A,_){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==Hn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function D(A){let _=new WeakRef(A);n.get(A).__ref=_,g.add(_),x.register(A,_,_)}function C(A){let _=n.get(A).__ref;_!==void 0&&(g.delete(_),x.unregister(_))}function F(A){K(A.target)}function B(A){I(A.target)}function K(A){A.removeEventListener("dispose",F),C(A),j(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&p.delete(A)}function I(A){A.removeEventListener("dispose",B),C(A),ue(A)}function Z(){for(let A of g){let _=A.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):K(_))}g.clear(),p.clear()}function j(A){let _=n.get(A);if(_.__webglInit===void 0)return;let q=A.source,ve=h.get(q);if(ve){let le=ve[_.__cacheKey];le.usedTimes--,le.usedTimes===0&&$(A),Object.keys(ve).length===0&&h.delete(q)}n.remove(A)}function $(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let q=A.source,ve=h.get(q);delete ve[_.__cacheKey],a.memory.textures--}function ue(A){let _=n.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();let q=A.depthTexture;if(q&&q.renderTarget===A&&K(q),A.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(_.__webglFramebuffer[le]))for(let xe=0;xe<_.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(_.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(_.__webglFramebuffer[le]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[le])}else{if(Array.isArray(_.__webglFramebuffer))for(let le=0;le<_.__webglFramebuffer.length;le++)i.deleteFramebuffer(_.__webglFramebuffer[le]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let le=0;le<_.__webglColorRenderbuffer.length;le++)_.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[le]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ve=A.textures;for(let le=0,xe=ve.length;le<xe;le++){let N=n.get(ve[le]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(ve[le])}n.remove(A)}let G=0;function X(){G=0}function Q(){return G}function me(A){G=A}function Ve(){let A=G;return A>=s.maxTextures&&ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function te(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function _e(A,_){let q=n.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let ve=A.image;if(ve===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(q,A,_);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+_)}function Te(A,_){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Ft(q,A,_);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+_)}function Re(A,_){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Ft(q,A,_);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+_)}function Se(A,_){let q=n.get(A);if(A.version>0&&q.__version!==A.version){yt(q,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+_)}let ke={[oi]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},pt={[on]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[ba]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[tl]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},He={[Cu]:i.NEVER,[eh]:i.ALWAYS,[Ru]:i.LESS,[jc]:i.LEQUAL,[Pu]:i.EQUAL,[Qc]:i.GEQUAL,[Iu]:i.GREATER,[Du]:i.NOTEQUAL};function _t(A,_){if(_.type===ci&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Hn||_.magFilter===tl||_.magFilter===ba||_.magFilter===ji||_.minFilter===Hn||_.minFilter===tl||_.minFilter===ba||_.minFilter===ji)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ke[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ke[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ke[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,He[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===on||_.minFilter!==ba&&_.minFilter!==ji||_.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function At(A,_){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",F),D(_));let ve=_.source,le=h.get(ve);le===void 0&&(le={},h.set(ve,le));let xe=te(_);if(xe!==A.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),le[xe].usedTimes++;let N=le[A.__cacheKey];N!==void 0&&(le[A.__cacheKey].usedTimes--,N.usedTimes===0&&$(_)),A.__cacheKey=xe,A.__webglTexture=le[xe].texture}return q}function st(A,_,q){return Math.floor(Math.floor(A/q)/_)}function Lt(A,_,q,ve){let xe=A.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,q,ve,_.data);else{xe.sort((R,re)=>R.start-re.start);let N=0;for(let R=1;R<xe.length;R++){let re=xe[N],ne=xe[R],ge=re.start+re.count,Me=st(ne.start,_.width,4),Ee=st(re.start,_.width,4);ne.start<=ge+1&&Me===Ee&&st(ne.start+ne.count-1,_.width,4)===Me?re.count=Math.max(re.count,ne.start+ne.count-re.start):(++N,xe[N]=ne)}xe.length=N+1;let O=t.getParameter(i.UNPACK_ROW_LENGTH),V=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,re=xe.length;R<re;R++){let ne=xe[R],ge=Math.floor(ne.start/4),Me=Math.ceil(ne.count/4),Ee=ge%_.width,Be=Math.floor(ge/_.width),nt=Me,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,Ee,Be,nt,de,q,ve,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,O),t.pixelStorei(i.UNPACK_SKIP_PIXELS,V),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function Ft(A,_,q){let ve=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ve=i.TEXTURE_3D);let le=At(A,_),xe=_.source;t.bindTexture(ve,A.__webglTexture,i.TEXTURE0+q);let N=n.get(xe);if(xe.version!==N.__version||le===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let de=Rt.getPrimaries(Rt.workingColorSpace),Je=_.colorSpace===es?null:Rt.getPrimaries(_.colorSpace),ft=_.colorSpace===es||de===Je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let V=M(_.image,!1,s.maxTextureSize);V=qe(_,V);let ye=r.convert(_.format,_.colorSpace),R=r.convert(_.type),re=w(_.internalFormat,ye,R,_.normalized,_.colorSpace,_.isVideoTexture);_t(ve,_);let ne,ge=_.mipmaps,Me=_.isVideoTexture!==!0,Ee=N.__version===void 0||le===!0,Be=xe.dataReady,nt=b(_,V);if(_.isDepthTexture)re=v(_.format===xi,_.type),Ee&&(Me?t.texStorage2D(i.TEXTURE_2D,1,re,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,re,V.width,V.height,0,ye,R,null));else if(_.isDataTexture)if(ge.length>0){Me&&Ee&&t.texStorage2D(i.TEXTURE_2D,nt,re,ge[0].width,ge[0].height);for(let de=0,Je=ge.length;de<Je;de++)ne=ge[de],Me?Be&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ne.width,ne.height,ye,R,ne.data):t.texImage2D(i.TEXTURE_2D,de,re,ne.width,ne.height,0,ye,R,ne.data);_.generateMipmaps=!1}else Me?(Ee&&t.texStorage2D(i.TEXTURE_2D,nt,re,V.width,V.height),Be&&Lt(_,V,ye,R)):t.texImage2D(i.TEXTURE_2D,0,re,V.width,V.height,0,ye,R,V.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Me&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,re,ge[0].width,ge[0].height,V.depth);for(let de=0,Je=ge.length;de<Je;de++)if(ne=ge[de],_.format!==ti)if(ye!==null)if(Me){if(Be)if(_.layerUpdates.size>0){let ft=ah(ne.width,ne.height,_.format,_.type);for(let Ne of _.layerUpdates){let kt=ne.data.subarray(Ne*ft/ne.data.BYTES_PER_ELEMENT,(Ne+1)*ft/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Ne,ne.width,ne.height,1,ye,kt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ne.width,ne.height,V.depth,ye,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,re,ne.width,ne.height,V.depth,0,ne.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ne.width,ne.height,V.depth,ye,R,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,re,ne.width,ne.height,V.depth,0,ye,R,ne.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Me&&Ee&&t.texStorage2D(i.TEXTURE_2D,nt,re,ge[0].width,ge[0].height);for(let de=0,Je=ge.length;de<Je;de++)ne=ge[de],_.format!==ti?ye!==null?Me?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ne.width,ne.height,ye,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,de,re,ne.width,ne.height,0,ne.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Be&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ne.width,ne.height,ye,R,ne.data):t.texImage2D(i.TEXTURE_2D,de,re,ne.width,ne.height,0,ye,R,ne.data)}else if(_.isDataArrayTexture)if(Me){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,re,V.width,V.height,V.depth),Be)if(_.layerUpdates.size>0){let de=ah(V.width,V.height,_.format,_.type);for(let Je of _.layerUpdates){let ft=V.data.subarray(Je*de/V.data.BYTES_PER_ELEMENT,(Je+1)*de/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Je,V.width,V.height,1,ye,R,ft)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ye,R,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,V.width,V.height,V.depth,0,ye,R,V.data);else if(_.isData3DTexture)Me?(Ee&&t.texStorage3D(i.TEXTURE_3D,nt,re,V.width,V.height,V.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ye,R,V.data)):t.texImage3D(i.TEXTURE_3D,0,re,V.width,V.height,V.depth,0,ye,R,V.data);else if(_.isFramebufferTexture){if(Ee)if(Me)t.texStorage2D(i.TEXTURE_2D,nt,re,V.width,V.height);else{let de=V.width,Je=V.height;for(let ft=0;ft<nt;ft++)t.texImage2D(i.TEXTURE_2D,ft,re,de,Je,0,ye,R,null),de>>=1,Je>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),V.parentNode!==de){de.appendChild(V),p.add(_),de.onpaint=Je=>{let ft=Je.changedElements;for(let Ne of p)ft.includes(Ne.image)&&(Ne.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,V);else{let ft=i.RGBA,Ne=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,Ne,kt,V)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(Me&&Ee){let de=tt(ge[0]);t.texStorage2D(i.TEXTURE_2D,nt,re,de.width,de.height)}for(let de=0,Je=ge.length;de<Je;de++)ne=ge[de],Me?Be&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye,R,ne):t.texImage2D(i.TEXTURE_2D,de,re,ye,R,ne);_.generateMipmaps=!1}else if(Me){if(Ee){let de=tt(V);t.texStorage2D(i.TEXTURE_2D,nt,re,de.width,de.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,R,V)}else t.texImage2D(i.TEXTURE_2D,0,re,ye,R,V);T(_)&&_.mipmapsAutoUpdate===!0&&S(ve),N.__version=xe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function yt(A,_,q){if(_.image.length!==6)return;let ve=At(A,_),le=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let xe=n.get(le);if(le.version!==xe.__version||ve===!0){t.activeTexture(i.TEXTURE0+q);let N=Rt.getPrimaries(Rt.workingColorSpace),O=_.colorSpace===es?null:Rt.getPrimaries(_.colorSpace),V=_.colorSpace===es||N===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let ye=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,re=[];for(let Ne=0;Ne<6;Ne++)!ye&&!R?re[Ne]=M(_.image[Ne],!0,s.maxCubemapSize):re[Ne]=R?_.image[Ne].image:_.image[Ne],re[Ne]=qe(_,re[Ne]);let ne=re[0],ge=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),Ee=w(_.internalFormat,ge,Me,_.normalized,_.colorSpace),Be=_.isVideoTexture!==!0,nt=xe.__version===void 0||ve===!0,de=le.dataReady,Je=b(_,ne);_t(i.TEXTURE_CUBE_MAP,_);let ft;if(_.isDepthTexture){if(Ee=v(_.format===xi,_.type),nt)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ee,ne.width,ne.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,ne.width,ne.height,0,ge,Me,null)}else if(ye){Be&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,Ee,ne.width,ne.height);for(let Ne=0;Ne<6;Ne++){ft=re[Ne].mipmaps;for(let kt=0;kt<ft.length;kt++){let an=ft[kt];_.format!==ti?ge!==null?Be?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt,0,0,an.width,an.height,ge,an.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt,Ee,an.width,an.height,0,an.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt,0,0,an.width,an.height,ge,Me,an.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt,Ee,an.width,an.height,0,ge,Me,an.data)}}}else{if(ft=_.mipmaps,Be&&nt){ft.length>0&&Je++;let Ne=tt(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,Ee,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(R){Be?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,re[Ne].width,re[Ne].height,ge,Me,re[Ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,re[Ne].width,re[Ne].height,0,ge,Me,re[Ne].data);for(let kt=0;kt<ft.length;kt++){let yi=ft[kt].image[Ne].image;Be?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt+1,0,0,yi.width,yi.height,ge,Me,yi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt+1,Ee,yi.width,yi.height,0,ge,Me,yi.data)}}else{Be?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ge,Me,re[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,ge,Me,re[Ne]);for(let kt=0;kt<ft.length;kt++){let an=ft[kt];Be?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt+1,0,0,ge,Me,an.image[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,kt+1,Ee,ge,Me,an.image[Ne])}}}T(_)&&_.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),xe.__version=le.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Qe(A,_,q,ve,le,xe){let N=r.convert(q.format,q.colorSpace),O=r.convert(q.type),V=w(q.internalFormat,N,O,q.normalized,q.colorSpace),ye=n.get(_),R=n.get(q);if(R.__renderTarget=_,!ye.__hasExternalTextures){let re=Math.max(1,_.width>>xe),ne=Math.max(1,_.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,V,re,ne,_.depth,0,N,O,null):t.texImage2D(le,xe,V,re,ne,0,N,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,le,R.__webglTexture,0,Ct(_)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,le,R.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(A,_,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let ve=_.depthTexture,le=ve&&ve.isDepthTexture?ve.type:null,xe=v(_.stencilBuffer,le),N=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(_),xe,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(_),xe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,A)}else{let ve=_.textures;for(let le=0;le<ve.length;le++){let xe=ve[le],N=r.convert(xe.format,xe.colorSpace),O=r.convert(xe.type),V=w(xe.internalFormat,N,O,xe.normalized,xe.colorSpace);Ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(_),V,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(_),V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(A,_,q){let ve=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(_.depthTexture);le.__renderTarget=_;let xe=ve?_.depthTexture.image[0]:_.depthTexture.image;(!le.__webglTexture||xe.width!==_.width||xe.height!==_.height)&&(xe.width=_.width,xe.height=_.height,_.depthTexture.needsUpdate=!0),ve?Se(_.depthTexture,0):_e(_.depthTexture,0);let N=le.__webglTexture,O=Ct(_),V=ve?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ye=_.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Zi)Ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,V,N,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,ye,V,N,0);else if(_.depthTexture.format===xi)Ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,V,N,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,ye,V,N,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(A){let _=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let ve=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ve){let le=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ve.removeEventListener("dispose",le)};ve.addEventListener("dispose",le),_.__depthDisposeCallback=le}_.__boundDepthTexture=ve}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let ve=0;ve<6;ve++)Et(_.__webglFramebuffer[ve],A,ve);else A.texture.mipmaps.length>0?Et(_.__webglFramebuffer[0],A,0):Et(_.__webglFramebuffer,A,0);else if(q){_.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ve]),_.__webglDepthbuffer[ve]===void 0)_.__webglDepthbuffer[ve]=i.createRenderbuffer(),Pt(_.__webglDepthbuffer[ve],A,!1);else{let le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer[ve];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pt(_.__webglDepthbuffer,A,!1);else{let le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,_,q){let ve=n.get(A);_!==void 0&&Qe(ve.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&$t(A)}function Qt(A){let _=A.texture,q=n.get(A),ve=n.get(_);A.addEventListener("dispose",B),D(A);let le=A.textures,xe=A.isWebGLCubeRenderTarget===!0,N=le.length>1;if(N||(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=_.version,a.memory.textures++),xe){q.__webglFramebuffer=[];for(let O=0;O<6;O++)if(_.mipmaps.length>0){q.__webglFramebuffer[O]=[];for(let V=0;V<_.mipmaps.length;V++)q.__webglFramebuffer[O][V]=i.createFramebuffer()}else q.__webglFramebuffer[O]=i.createFramebuffer()}else{if(_.mipmaps.length>0){q.__webglFramebuffer=[];for(let O=0;O<_.mipmaps.length;O++)q.__webglFramebuffer[O]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(N)for(let O=0,V=le.length;O<V;O++){let ye=n.get(le[O]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ae(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let O=0;O<le.length;O++){let V=le[O];q.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[O]);let ye=r.convert(V.format,V.colorSpace),R=r.convert(V.type),re=w(V.internalFormat,ye,R,V.normalized,V.colorSpace,A.isXRRenderTarget===!0),ne=Ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,re,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,q.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),_t(i.TEXTURE_CUBE_MAP,_);for(let O=0;O<6;O++)if(_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)Qe(q.__webglFramebuffer[O][V],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,V);else Qe(q.__webglFramebuffer[O],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);T(_)?S(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(N){for(let O=0,V=le.length;O<V;O++){let ye=le[O],R=n.get(ye),re=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,R.__webglTexture),_t(re,ye),Qe(q.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+O,re,0),T(ye)&&S(re)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(O=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,ve.__webglTexture),_t(O,_),_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)Qe(q.__webglFramebuffer[V],A,_,i.COLOR_ATTACHMENT0,O,V);else Qe(q.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,O,0);T(_)?S(O):_.mipmaps.length>0&&i.texParameteri(O,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&$t(A)}function z(A){let _=A.textures;for(let q=0,ve=_.length;q<ve;q++){let le=_[q];if(T(le)&&le.mipmapsAutoUpdate===!0){let xe=E(A),N=n.get(le).__webglTexture;t.bindTexture(xe,N),S(xe),t.unbindTexture()}}}let Xt=[];function bt(A){if(A.samples>0){if(Ae(A)===!1){let _=A.textures,q=A.width,ve=A.height,le=i.COLOR_BUFFER_BIT,xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=n.get(A),O=_.length>1;if(O)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,N.__webglColorRenderbuffer[ye]);let R=n.get(_[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,q,ve,0,0,q,ve,le,i.NEAREST),c===!0&&(Xt.length=0,Xt.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Xt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,N.__webglColorRenderbuffer[ye]);let R=n.get(_[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ct(A){return Math.min(s.maxSamples,A.samples)}function Ae(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ot(A){let _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function qe(A,_){let q=A.colorSpace,ve=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Yr&&q!==es&&(Rt.getTransfer(q)===Ht?(ve!==ti||le!==Pn)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",q)),_}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ve,this.resetTextureUnits=X,this.getTextureUnits=Q,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=Te,this.setTexture3D=Re,this.setTextureCube=Se,this.rebindTextures=Wt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Ae,this.dispose=Z}function Jg(i,e){function t(n,s=es){let r,a=Rt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===ti)return i.RGBA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===al)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===wa||n===Ta||n===Aa||n===Ea)if(a===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===pl||n===ml||n===gl||n===vl||n===Ca||n===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===pl)return a===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return r.COMPRESSED_R11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===Tl||n===Al||n===El||n===Cl||n===Rl||n===Pl||n===Il||n===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Nl||n===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===Ol||n===Ra||n===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:Kg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new mh,d={},M=t.getContextAttributes(),T=null,S=null,E=[],w=[],v=new Fe,b=null,D=null,C=new Bn;C.viewport=new Yt;let F=new Bn;F.viewport=new Yt;let B=[C,F],K=new $o,I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=E[te];return _e===void 0&&(_e=new pr,E[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=E[te];return _e===void 0&&(_e=new pr,E[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=E[te];return _e===void 0&&(_e=new pr,E[te]=_e),_e.getHandSpace()};function j(te){let _e=w.indexOf(te.inputSource);if(_e===-1)return;let Te=E[_e];Te!==void 0&&(Te.update(te.inputSource,te.frame,l||a),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ue);for(let te=0;te<E.length;te++){let _e=w[te];_e!==null&&(w[te]=null,E[te].disconnect(_e))}I=null,Z=null,m.reset();for(let te in d)delete d[te];if(e.setRenderTarget(T),h=null,f=null,p=null,s=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),D!==null){let te=D.camera;te.fov=D.fov,te.zoom=D.zoom,te.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ue),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Re=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=M.stencil?xi:Zi,Re=M.stencil?Qi:vi);let ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:ti,type:Pn,depthTexture:new mi(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Zt(h.framebufferWidth,h.framebufferHeight,{format:ti,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(te){for(let _e=0;_e<te.removed.length;_e++){let Te=te.removed[_e],Re=w.indexOf(Te);Re>=0&&(w[Re]=null,E[Re].disconnect(Te))}for(let _e=0;_e<te.added.length;_e++){let Te=te.added[_e],Re=w.indexOf(Te);if(Re===-1){for(let ke=0;ke<E.length;ke++)if(ke>=w.length){w.push(Te),Re=ke;break}else if(w[ke]===null){w[ke]=Te,Re=ke;break}if(Re===-1)break}let Se=E[Re];Se&&Se.connect(Te)}}function G(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let _e=te.near,Te=te.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),K.near=F.near=C.near=_e,K.far=F.far=C.far=Te,(I!==K.near||Z!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),I=K.near,Z=K.far),K.layers.mask=te.layers.mask|6,C.layers.mask=K.layers.mask&-5,F.layers.mask=K.layers.mask&-3;let Re=te.parent,Se=K.cameras;G(K,Re);for(let ke=0;ke<Se.length;ke++)G(Se[ke],Re);K.projectionMatrix.copy(C.projectionMatrix),K.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&te.isPerspectiveCamera&&(D={camera:te,fov:te.fov,zoom:te.zoom}),X(te,K,Re)};function X(te,_e,Te){Te===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Lo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(te){return d[te]};let Q=null;function me(te,_e){if(u=_e.getViewerPose(l||a),g=_e,u!==null){let Te=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Re=!1;Te.length!==K.cameras.length&&(K.cameras.length=0,Re=!0);for(let He=0;He<Te.length;He++){let _t=Te[He],At=null;if(h!==null)At=h.getViewport(_t);else{let Lt=p.getViewSubImage(f,_t);At=Lt.viewport,He===0&&(e.setRenderTargetTextures(S,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(S))}let st=B[He];st===void 0&&(st=new Bn,st.layers.enable(He),st.viewport=new Yt,B[He]=st),st.matrix.fromArray(_t.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(_t.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(At.x,At.y,At.width,At.height),He===0&&(K.matrix.copy(st.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Re===!0&&K.cameras.push(st)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let He=p.getDepthInformation(Te[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let He=0;He<Te.length;He++){let _t=Te[He].camera;if(_t){let At=d[_t];At||(At=new ra,d[_t]=At);let st=p.getCameraImage(_t);At.sourceTexture=st}}}}for(let Te=0;Te<E.length;Te++){let Re=w[Te],Se=E[Te];Re!==null&&Se!==void 0&&Se.update(Re,_e,l||a)}Q&&Q(te,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Ve=new ff;Ve.setAnimationLoop(me),this.setAnimationLoop=function(te){Q=te},this.dispose=function(){}}},jg=new mt,Sf=new dt;Sf.set(-1,0,0,0,1,0,0,0,1);function Qg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ih(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,T,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===In&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===In&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,M){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ev(i,e,t,n){let s={},r={};function a(M,T){let S=T.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,T){let S=s[M.id];S===void 0&&(g(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",m));let E=T.program;n.updateUBOMapping(M,E);let w=e.render.frame;r[M.id]!==w&&(l(M),r[M.id]=w)}function c(M){let T=i.createBuffer(),S=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(M){let T=s[M.id],S=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,v=S.length;w<v;w++){let b=S[w];if(Array.isArray(b))for(let D=0,C=b.length;D<C;D++)u(b[D],w,D,E);else u(b,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,T,S,E){if(f(M,T,S,E)===!0){let w=M.__offset,v=M.value;if(Array.isArray(v)){let b=0;for(let D=0;D<v.length;D++){let C=v[D],F=x(C,!0);p(C,M.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,M.__data)}}function p(M,T,S){typeof M=="number"||typeof M=="boolean"?T[S]=M:M.isMatrix3?(T[S]=M.elements[0],T[S+1]=M.elements[1],T[S+2]=M.elements[2],T[S+3]=0,T[S+4]=M.elements[3],T[S+5]=M.elements[4],T[S+6]=M.elements[5],T[S+7]=0,T[S+8]=M.elements[6],T[S+9]=M.elements[7],T[S+10]=M.elements[8],T[S+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-S),S):M.toArray(T,S)}function f(M,T,S,E){let w=M.value,v=T+"_"+S;if(Array.isArray(w)){E[v]===void 0&&(E[v]=[]);let b=E[v],D=!1;for(let C=0;C<w.length;C++)h(w[C],b,C)===!0&&(D=!0);return D}return h(w,E,v)}function h(M,T,S){if(T[S]===void 0)return typeof M=="number"||typeof M=="boolean"?T[S]=M:ArrayBuffer.isView(M)?T[S]=M.slice():T[S]=M.clone(),!0;{let E=T[S];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return T[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function g(M){let T=M.uniforms,S=0,E=16;for(let v=0,b=T.length;v<b;v++){let D=Array.isArray(T[v])?T[v]:[T[v]];for(let C=0,F=D.length;C<F;C++){let B=D[C],K=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(T[v])||Array.isArray(B.value),Z=S;for(let $=0,ue=K.length;$<ue;$++){let G=K[$],X=x(G,I),Q=S%E,me=Q%X.boundary,Ve=Q+me;S+=me,Ve!==0&&E-Ve<X.storage&&(S+=E-Ve),$===0&&(Z=S),S+=X.storage}let j=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new j((S-Z)/Float32Array.BYTES_PER_ELEMENT),B.__offset=Z}}let w=S%E;return w>0&&(S+=E-w),M.__size=S,M.__cache={},this}function x(M,T){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){let T=M.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:d}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function nv(){return Ni===null&&(Ni=new $i(tv,16,16,ys,nn),Ni.name="DFG_LUT",Ni.minFilter=Hn,Ni.magFilter=Hn,Ni.wrapS=Ai,Ni.wrapT=Ai,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Gl=class{constructor(e={}){let{canvas:t=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=h,m=new Set([ll,ol,al]),d=new Set([Pn,vi,Ar,Qi,il,sl]),M=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},E=null,w=null,v=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,B=null,K=null,I=null,Z=null;this._outputColorSpace=On;let j=0,$=0,ue=null,G=-1,X=null,Q=new Yt,me=new Yt,Ve=null,te=new we(0),_e=0,Te=t.width,Re=t.height,Se=1,ke=null,pt=null,He=new Yt(0,0,Te,Re),_t=new Yt(0,0,Te,Re),At=!1,st=new ds,Lt=new Bo,Ft=!1,yt=!1,Qe=new mt,Pt=new k,Et=new Yt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Qt(){return ue===null?Se:1}let z=n;function Xt(y,U){return t.getContext(y,U)}let bt,Ct,Ae,Ot,qe,tt,A,_,q,ve,le,xe,N,O,V,ye,R,re,ne,ge,Me,Ee,Be;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),z===null){let U="webgl2";if(z=Xt(U,y),z===null)throw Xt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(y){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ct("WebGLRenderer: "+y.message),y}function nt(){bt=new d0(z),bt.init(),Me=new Jg(z,bt),Ct=new n0(z,bt,e,Me),Ae=new Yg(z,bt),Ct.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),K=z.createFramebuffer(),I=z.createFramebuffer(),Z=z.createFramebuffer(),Ot=new g0(z),qe=new Lg,tt=new Zg(z,bt,Ae,qe,Ct,Me,Ot),A=new f0(C),_=new xd(z),Ee=new e0(z,_),q=new p0(z,_,Ot,Ee),ve=new x0(z,q,_,Ee,Ot),re=new v0(z,Ct,tt),V=new i0(qe),le=new Dg(C,A,bt,Ct,Ee,V),xe=new Qg(C,qe),N=new Ug,O=new Vg(bt),R=new Qm(C,A,Ae,ve,g,c),ye=new qg(C,ve,Ct),Be=new ev(z,Ot,Ct,Ae),ne=new t0(z,bt,Ot),ge=new m0(z,bt,Ot),Ot.programs=le.programs,C.capabilities=Ct,C.extensions=bt,C.properties=qe,C.renderLists=N,C.shadowMap=ye,C.state=Ae,C.info=Ot}x!==Pn&&(D=new y0(x,t.width,t.height,o,s,r));let de=new gh(C,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let y=bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(y){y!==void 0&&(Se=y,this.setSize(Te,Re,!1))},this.getSize=function(y){return y.set(Te,Re)},this.setSize=function(y,U,ee=!0){if(de.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=y,Re=U,t.width=Math.floor(y*Se),t.height=Math.floor(U*Se),ee===!0&&(t.style.width=y+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Te*Se,Re*Se).floor()},this.setDrawingBufferSize=function(y,U,ee){Te=y,Re=U,Se=ee,t.width=Math.floor(y*ee),t.height=Math.floor(U*ee),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===Pn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(He)},this.setViewport=function(y,U,ee,Y){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,U,ee,Y),Ae.viewport(Q.copy(He).multiplyScalar(Qt()).round())},this.getScissor=function(y){return y.copy(_t)},this.setScissor=function(y,U,ee,Y){y.isVector4?_t.set(y.x,y.y,y.z,y.w):_t.set(y,U,ee,Y),Ae.scissor(me.copy(_t).multiplyScalar(Qt()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(y){Ae.setScissorTest(At=y)},this.setOpaqueSort=function(y){ke=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,ee=!0){let Y=0;if(y){let J=!1;if(ue!==null){let Ue=ue.texture.format;J=m.has(Ue)}if(J){let Ue=ue.texture.type,Ge=d.has(Ue),Le=R.getClearColor(),Oe=R.getClearAlpha(),Ke=Le.r,lt=Le.g,P=Le.b;Ge?(M[0]=Ke,M[1]=lt,M[2]=P,M[3]=Oe,z.clearBufferuiv(z.COLOR,0,M)):(T[0]=Ke,T[1]=lt,T[2]=P,T[3]=Oe,z.clearBufferiv(z.COLOR,0,T))}else Y|=z.COLOR_BUFFER_BIT}U&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),R.dispose(),N.dispose(),O.dispose(),tt.dispose(),qe.dispose(),A.dispose(),ve.dispose(),q.dispose(),Ee.dispose(),Be.dispose(),le.dispose(),de.dispose(),de.removeEventListener("sessionstart",kn),de.removeEventListener("sessionend",zi),ni.stop()};function Je(y){y.preventDefault(),Kr("WebGLRenderer: Context Lost."),F=!0}function ft(){Kr("WebGLRenderer: Context Restored."),F=!1;let y=Ot.autoReset,U=ye.enabled,ee=ye.autoUpdate,Y=ye.needsUpdate,J=ye.type;nt(),Ot.autoReset=y,ye.enabled=U,ye.autoUpdate=ee,ye.needsUpdate=Y,ye.type=J}function Ne(y){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function kt(y){let U=y.target;U.removeEventListener("dispose",kt),an(U)}function an(y){yi(y),qe.remove(y)}function yi(y){let U=qe.get(y).programs;U!==void 0&&(U.forEach(function(ee){le.releaseProgram(ee)}),y.isShaderMaterial&&le.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,ee,Y,J,Ue){U===null&&(U=$t);let Ge=J.isMesh&&J.matrixWorld.determinantAffine()<0,Le=bs(y,U,ee,Y,J);Ae.setMaterial(Y,Ge);let Oe=ee.index,Ke=1;if(Y.wireframe===!0){if(Oe=q.getWireframeAttribute(ee),Oe===void 0)return;Ke=2}let lt=ee.drawRange,P=ee.attributes.position,L=lt.start*Ke,H=(lt.start+lt.count)*Ke;Ue!==null&&(L=Math.max(L,Ue.start*Ke),H=Math.min(H,(Ue.start+Ue.count)*Ke)),Oe!==null?(L=Math.max(L,0),H=Math.min(H,Oe.count)):P!=null&&(L=Math.max(L,0),H=Math.min(H,P.count));let ae=H-L;if(ae<0||ae===1/0)return;Ee.setup(J,Y,Le,ee,Oe);let ce,be=ne;if(Oe!==null&&(ce=_.get(Oe),be=ge,be.setIndex(ce)),J.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*Qt()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(J.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),Ae.setLineWidth(Pe*Qt()),J.isLineSegments?be.setMode(z.LINES):J.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else J.isPoints?be.setMode(z.POINTS):J.isSprite&&be.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))be.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Pe=J._multiDrawStarts,oe=J._multiDrawCounts,Ce=J._multiDrawCount,ie=Oe?_.get(Oe).bytesPerElement:1,Xe=qe.get(Y).currentProgram.getUniforms();for(let We=0;We<Ce;We++)Xe.setValue(z,"_gl_DrawID",We),be.render(Pe[We]/ie,oe[We])}else if(J.isInstancedMesh)be.renderInstances(L,ae,J.count);else if(ee.isInstancedBufferGeometry){let Pe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,oe=Math.min(ee.instanceCount,Pe);be.renderInstances(L,ae,oe)}else be.render(L,ae)};function Bt(y,U,ee,Y){B!==null&&y.isNodeMaterial&&B.setObject(Y,y),Ft===!0&&V.setState(y,ee,!1),y.transparent===!0&&y.side===pn&&y.forceSinglePass===!1?(y.side=In,y.needsUpdate=!0,Si(y,U,Y),y.side=_s,y.needsUpdate=!0,Si(y,U,Y),y.side=pn):Si(y,U,Y)}this.compile=function(y,U,ee=null){ee===null&&(ee=y),B!==null&&B.renderStart(y,U,ee),w=O.get(ee),w.init(U),b.push(w),ee.traverseVisible(function(J){J.isLight&&J.layers.test(U.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),y!==ee&&y.traverseVisible(function(J){J.isLight&&J.layers.test(U.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),yt=this.localClippingEnabled,Ft=V.init(this.clippingPlanes,yt),Ft===!0&&V.setGlobalState(this.clippingPlanes,U),B!==null&&ye.render(w.state.shadowsArray,ee,U);let Y=new Set;return y.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let Ge=0;Ge<Ue.length;Ge++){let Le=Ue[Ge];Bt(Le,ee,U,J),Y.add(Le)}else Bt(Ue,ee,U,J),Y.add(Ue)}),w=b.pop(),B!==null&&B.renderEnd(),Y},this.compileAsync=function(y,U,ee=null){let Y=this.compile(y,U,ee);return new Promise(J=>{function Ue(){if(Y.forEach(function(Ge){let Oe=qe.get(Ge).currentProgram;(Oe===void 0||Oe.isReady())&&Y.delete(Ge)}),Y.size===0){J(y);return}setTimeout(Ue,10)}bt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ns=null;function Wa(y){ns&&ns(y)}function kn(){ni.stop()}function zi(){ni.start()}let ni=new ff;ni.setAnimationLoop(Wa),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(y){ns=y,de.setAnimationLoop(y),y===null?ni.stop():ni.start()},de.addEventListener("sessionstart",kn),de.addEventListener("sessionend",zi),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(y,U);let ee=de.enabled===!0&&de.isPresenting===!0,Y=D!==null&&(ue===null||ee)&&D.begin(C,ue);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,U,ue),w=O.get(y,b.length),w.init(U),w.state.textureUnits=tt.getTextureUnits(),b.push(w),Qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Lt.setFromArrayCamera(U):st.setFromProjectionMatrix(Qe,ri,U.reversedDepth),yt=this.localClippingEnabled,Ft=V.init(this.clippingPlanes,yt),E=N.get(y,v.length),E.init(),v.push(E),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let Ge=C.xr.getDepthSensingMesh();Ge!==null&&Xn(Ge,U,-1/0,C.sortObjects)}Xn(y,U,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(ke,pt),Wt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Wt&&R.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&V.beginShadows();let J=w.state.shadowsArray;if(ye.render(J,y,U),Ft===!0&&V.endShadows(),(Y&&D.hasRenderPass())===!1){let Ge=E.opaque,Le=E.transmissive;if(w.setupLights(),U.isArrayCamera){let Oe=U.cameras;if(Le.length>0)for(let Ke=0,lt=Oe.length;Ke<lt;Ke++){let P=Oe[Ke];dn(Ge,Le,y,P)}Wt&&R.render(y);for(let Ke=0,lt=Oe.length;Ke<lt;Ke++){let P=Oe[Ke];is(E,y,P,P.viewport)}}else Le.length>0&&dn(Ge,Le,y,U),Wt&&R.render(y),is(E,y,U)}ue!==null&&$===0&&(tt.updateMultisampleRenderTarget(ue),tt.updateRenderTargetMipmap(ue)),Y&&D.end(C),y.isScene===!0&&y.onAfterRender(C,y,U),Ee.resetDefaultState(),G=-1,X=null,b.pop(),b.length>0?(w=b[b.length-1],tt.setTextureUnits(w.state.textureUnits),Ft===!0&&V.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,B!==null&&B.renderEnd()};function Xn(y,U,ee,Y){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)ee=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let Ge=U.isArrayCamera?Lt:st;if(!y.frustumCulled||y.intersectsFrustum(Ge)){Y&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Qe);let Le=ve.update(y),Oe=y.material;Oe.visible&&E.push(y,Le,Oe,ee,Et.z,null,U)}}else if(y.isMesh||y.isLine||y.isPoints){let Ge=U.isArrayCamera?Lt:st;if(!y.frustumCulled||y.intersectsFrustum(Ge)){let Le=ve.update(y),Oe=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Et.copy(Le.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(Qe)),Array.isArray(Oe)){let Ke=Le.groups;for(let lt=0,P=Ke.length;lt<P;lt++){let L=Ke[lt],H=Oe[L.materialIndex];H&&H.visible&&E.push(y,Le,H,ee,Et.z,L,U)}}else Oe.visible&&E.push(y,Le,Oe,ee,Et.z,null,U)}}}let Ue=y.children;for(let Ge=0,Le=Ue.length;Ge<Le;Ge++)Xn(Ue[Ge],U,ee,Y)}function is(y,U,ee,Y){let{opaque:J,transmissive:Ue,transparent:Ge}=y;w.setupLightsView(ee),Ft===!0&&V.setGlobalState(C.clippingPlanes,ee),Y&&Ae.viewport(Q.copy(Y)),J.length>0&&Mi(J,U,ee),Ue.length>0&&Mi(Ue,U,ee),Ge.length>0&&Mi(Ge,U,ee),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function dn(y,U,ee,Y){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let L=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Zt(1,1,{generateMipmaps:!0,type:L?nn:Pn,minFilter:ji,samples:Math.max(4,Ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let Ue=w.state.transmissionRenderTarget[Y.id],Ge=Y.viewport||Q;Ue.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);let Le=C.getRenderTarget(),Oe=C.getActiveCubeFace(),Ke=C.getActiveMipmapLevel();C.setRenderTarget(Ue),C.getClearColor(te),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),Wt&&R.render(ee);let lt=C.toneMapping;C.toneMapping=Li;let P=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Ft===!0&&V.setGlobalState(C.clippingPlanes,Y),Mi(y,ee,Y),tt.updateMultisampleRenderTarget(Ue),tt.updateRenderTargetMipmap(Ue),bt.has("WEBGL_multisampled_render_to_texture")===!1){let L=!1;for(let H=0,ae=U.length;H<ae;H++){let ce=U[H],{object:be,geometry:Pe,material:oe,group:Ce}=ce;if(oe.side===pn&&be.layers.test(Y.layers)){let ie=oe.side;oe.side=In,oe.needsUpdate=!0,Hs(be,ee,Y,Pe,oe,Ce),oe.side=ie,oe.needsUpdate=!0,L=!0}}L===!0&&(tt.updateMultisampleRenderTarget(Ue),tt.updateRenderTargetMipmap(Ue))}C.setRenderTarget(Le,Oe,Ke),C.setClearColor(te,_e),P!==void 0&&(Y.viewport=P),C.toneMapping=lt}function Mi(y,U,ee){let Y=U.isScene===!0?U.overrideMaterial:null;for(let J=0,Ue=y.length;J<Ue;J++){let Ge=y[J],{object:Le,geometry:Oe,group:Ke}=Ge,lt=Ge.material;lt.allowOverride===!0&&Y!==null&&(lt=Y),Le.layers.test(ee.layers)&&Hs(Le,U,ee,Oe,lt,Ke)}}function Hs(y,U,ee,Y,J,Ue){B!==null&&J.isNodeMaterial&&B.setObject(y,J),y.onBeforeRender(C,U,ee,Y,J,Ue),y.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),J.onBeforeRender(C,U,ee,Y,y,Ue),J.transparent===!0&&J.side===pn&&J.forceSinglePass===!1?(J.side=In,J.needsUpdate=!0,C.renderBufferDirect(ee,U,Y,J,y,Ue),J.side=_s,J.needsUpdate=!0,C.renderBufferDirect(ee,U,Y,J,y,Ue),J.side=pn):C.renderBufferDirect(ee,U,Y,J,y,Ue),y.onAfterRender(C,U,ee,Y,J,Ue)}function nc(y){let U=0;for(let ee of y)ee.texture!==null&&U++;return U}function Si(y,U,ee){U.isScene!==!0&&(U=$t);let Y=qe.get(y),J=w.state.lights,Ue=w.state.shadowsArray,Ge=J.state.version,Le=le.getParameters(y,J.state,Ue,U,ee,w.state.lightProbeGridArray),Oe=le.getProgramCacheKey(Le),Ke=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,Y.fog=U.fog;let lt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=A.get(y.envMap||Y.environment,lt),Y.envMapRotation=Y.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ke===void 0&&(y.addEventListener("dispose",kt),Ke=new Map,Y.programs=Ke,Y.programVariants=new Map);let P=Ke.get(Oe);if(P!==void 0){if(Y.currentProgram===P&&Y.lightsStateVersion===Ge)return rs(y,Le),P}else Le.uniforms=le.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,ee,Le),y.onBeforeCompile(Le,C),P=le.acquireProgram(Le,Oe),Ke.set(Oe,P),Y.uniforms=Le.uniforms;let L=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(L.clippingPlanes=V.uniform),rs(y,Le),Y.needsLights=Nr(y),Y.lightsStateVersion=Ge,Y.needsLights&&(L.ambientLightColor.value=J.state.ambient,L.lightProbe.value=J.state.probe,L.sunLights.value=J.state.sun,L.sunLightShadows.value=J.state.sunShadow,L.directionalLights.value=J.state.directional,L.directionalLightShadows.value=J.state.directionalShadow,L.spotLights.value=J.state.spot,L.spotLightShadows.value=J.state.spotShadow,L.rectAreaLights.value=J.state.rectArea,L.ltc_1.value=J.state.rectAreaLTC1,L.ltc_2.value=J.state.rectAreaLTC2,L.pointLights.value=J.state.point,L.pointLightShadows.value=J.state.pointShadow,L.hemisphereLights.value=J.state.hemi,L.sunShadowMatrix.value=J.state.sunShadowMatrix,L.sunShadowCascade.value=J.state.sunShadowCascade,L.directionalShadowMatrix.value=J.state.directionalShadowMatrix,L.spotLightMatrix.value=J.state.spotLightMatrix,L.spotLightMap.value=J.state.spotLightMap,L.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.numLightProbeGrids=nc(w.state.lightProbeGridArray),Y.currentProgram=P,Y.uniformsList=null,P}function Ss(y,U,ee,Y,J){let Ue=qe.get(y),Ge=Ue.currentProgram.id+","+Y+","+J,Le=Ue.programVariants.get(Ge);return Le===void 0?(Le=Si(y,U,ee),Ue.programVariants.set(Ge,Le)):(Ue.currentProgram=Le,Ue.uniformsList=null,Ue.outputColorSpace=Y,Ue.toneMapping=J),Le}function ss(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Er.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function rs(y,U){let ee=qe.get(y);ee.outputColorSpace=U.outputColorSpace,ee.batching=U.batching,ee.batchingColor=U.batchingColor,ee.instancing=U.instancing,ee.instancingColor=U.instancingColor,ee.instancingMorph=U.instancingMorph,ee.skinning=U.skinning,ee.morphTargets=U.morphTargets,ee.morphNormals=U.morphNormals,ee.morphColors=U.morphColors,ee.morphTargetsCount=U.morphTargetsCount,ee.numClippingPlanes=U.numClippingPlanes,ee.numIntersection=U.numClipIntersection,ee.vertexAlphas=U.vertexAlphas,ee.vertexTangents=U.vertexTangents,ee.toneMapping=U.toneMapping}function bs(y,U,ee,Y,J){U.isScene!==!0&&(U=$t),tt.resetTextureUnits();let Ue=U.fog,Ge=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?U.environment:null,Le=ue===null?C.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Rt.workingColorSpace,Oe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ke=A.get(Y.envMap||Ge,Oe),lt=Y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,P=!!ee.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),L=!!ee.morphAttributes.position,H=!!ee.morphAttributes.normal,ae=!!ee.morphAttributes.color,ce=Li;Y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ce=C.toneMapping);let be=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Pe=be!==void 0?be.length:0,oe=qe.get(Y),Ce=w.state.lights;if(Ft===!0&&(yt===!0||y!==X)){let Tt=y===X&&Y.id===G;V.setState(Y,y,Tt)}let ie=!1,Xe=!1;Y.version===oe.__version?oe.needsLights&&oe.lightsStateVersion!==Ce.state.version||J.isBatchedMesh&&oe.batching===!1||!J.isBatchedMesh&&oe.batching===!0||J.isBatchedMesh&&oe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&oe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&oe.instancing===!1||!J.isInstancedMesh&&oe.instancing===!0||J.isSkinnedMesh&&oe.skinning===!1||!J.isSkinnedMesh&&oe.skinning===!0||J.isInstancedMesh&&oe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&oe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&oe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&oe.instancingMorph===!1&&J.morphTexture!==null||oe.envMap!==Ke||Y.fog===!0&&oe.fog!==Ue||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==V.numPlanes||oe.numIntersection!==V.numIntersection)||oe.vertexAlphas!==lt||oe.vertexTangents!==P||oe.morphTargets!==L||oe.morphNormals!==H||oe.morphColors!==ae||oe.morphTargetsCount!==Pe||oe.numLightProbeGrids!==nc(w.state.lightProbeGridArray)?ie=!0:(oe.outputColorSpace!==Le||oe.toneMapping!==ce)&&(Xe=!0):(ie=!0,oe.__version=Y.version);let We=oe.currentProgram;(ie===!0||Xe===!0)&&(We=Xe===!0?Ss(Y,U,J,Le,ce):Si(Y,U,J),B&&Y.isNodeMaterial&&B.onUpdateProgram(Y,We,oe));let Mt=!1,Kt=!1,gt=!1,Ye=We.getUniforms(),vt=oe.uniforms;if(Ae.useProgram(We.program)&&(Mt=!0,Kt=!0,gt=!0),Y.id!==G&&(G=Y.id,Kt=!0),Mt||X!==y){Ae.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ye.setValue(z,"projectionMatrix",y.projectionMatrix),Ye.setValue(z,"viewMatrix",y.matrixWorldInverse);let Nt=Ye.map.cameraPosition;Nt!==void 0&&Nt.setValue(z,Pt.setFromMatrixPosition(y.matrixWorld)),Ct.logarithmicDepthBuffer&&Ye.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ye.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),X!==y&&(X=y,Kt=!0,gt=!0)}if(oe.needsLights&&(Ce.state.sunShadowMap.length>0&&Ye.setValue(z,"sunShadowMap",Ce.state.sunShadowMap,tt),Ce.state.directionalShadowMap.length>0&&Ye.setValue(z,"directionalShadowMap",Ce.state.directionalShadowMap,tt),Ce.state.spotShadowMap.length>0&&Ye.setValue(z,"spotShadowMap",Ce.state.spotShadowMap,tt),Ce.state.pointShadowMap.length>0&&Ye.setValue(z,"pointShadowMap",Ce.state.pointShadowMap,tt)),J.isSkinnedMesh){Ye.setOptional(z,J,"bindMatrix"),Ye.setOptional(z,J,"bindMatrixInverse");let Tt=J.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Ye.setValue(z,"boneTexture",Tt.boneTexture,tt))}J.isBatchedMesh&&(Ye.setOptional(z,J,"batchingTexture"),Ye.setValue(z,"batchingTexture",J._matricesTexture,tt),Ye.setOptional(z,J,"batchingIdTexture"),Ye.setValue(z,"batchingIdTexture",J._indirectTexture,tt),Ye.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Ye.setValue(z,"batchingColorTexture",J._colorsTexture,tt));let Vt=ee.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&re.update(J,ee,We),(Kt||oe.receiveShadow!==J.receiveShadow)&&(oe.receiveShadow=J.receiveShadow,Ye.setValue(z,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&U.environment!==null&&(vt.envMapIntensity.value=U.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=nv()),Kt){if(Ye.setValue(z,"toneMappingExposure",C.toneMappingExposure),oe.needsLights&&Lr(vt,gt),Ue&&Y.fog===!0&&xe.refreshFogUniforms(vt,Ue),xe.refreshMaterialUniforms(vt,Y,Se,Re,w.state.transmissionRenderTarget[y.id]),oe.needsLights&&oe.numLightProbeGrids>0){let Tt=S,Nt=0;for(let cn of w.state.lightProbeGridArray)cn.texture!==null&&(Tt.textures[Nt]=cn.texture,Tt.min[Nt]=cn.boundingBox.min,Tt.max[Nt]=cn.boundingBox.max,Tt.resolution[Nt]=cn.resolution,Nt++);for(let cn in Tt)Tt[cn].length=Nt;vt.probesSH.value=Tt.textures,vt.probesMin.value=Tt.min,vt.probesMax.value=Tt.max,vt.probesResolution.value=Tt.resolution}Er.upload(z,ss(oe),vt,tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Er.upload(z,ss(oe),vt,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ye.setValue(z,"center",J.center),Ye.setValue(z,"modelViewMatrix",J.modelViewMatrix),Ye.setValue(z,"normalMatrix",J.normalMatrix),Ye.setValue(z,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let Tt=Y.uniformsGroups;for(let Nt=0,cn=Tt.length;Nt<cn;Nt++){let Ie=Tt[Nt];Be.update(Ie,We),Be.bind(Ie,We)}}return We}function Lr(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Nr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(y,U,ee){let Y=qe.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),qe.get(y.texture).__webglTexture=U,qe.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ee,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let ee=qe.get(y);ee.__webglFramebuffer=U,ee.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,ee=0){ue=y,j=U,$=ee;let Y=null,J=!1,Ue=!1;if(y){let Le=qe.get(y);if(Le.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(z.FRAMEBUFFER,Le.__webglFramebuffer),Q.copy(y.viewport),me.copy(y.scissor),Ve=y.scissorTest,Ae.viewport(Q),Ae.scissor(me),Ae.setScissorTest(Ve),G=-1;return}else if(Le.__webglFramebuffer===void 0)tt.setupRenderTarget(y);else if(Le.__hasExternalTextures)tt.rebindTextures(y,qe.get(y.texture).__webglTexture,qe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let lt=y.depthTexture;if(Le.__boundDepthTexture!==lt){if(lt!==null&&qe.has(lt)&&(y.width!==lt.image.width||y.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(y)}}let Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ue=!0);let Ke=qe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ke[U])?Y=Ke[U][ee]:Y=Ke[U],J=!0):y.samples>0&&tt.useMultisampledRTT(y)===!1?Y=qe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ke)?Y=Ke[ee]:Y=Ke,Q.copy(y.viewport),me.copy(y.scissor),Ve=y.scissorTest}else Q.copy(He).multiplyScalar(Se).floor(),me.copy(_t).multiplyScalar(Se).floor(),Ve=At;if(ee!==0&&(Y=K),Ae.bindFramebuffer(z.FRAMEBUFFER,Y)&&Ae.drawBuffers(y,Y),Ae.viewport(Q),Ae.scissor(me),Ae.setScissorTest(Ve),J){let Le=qe.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,ee)}else if(Ue){let Le=U;for(let Oe=0;Oe<y.textures.length;Oe++){let Ke=qe.get(y.textures[Oe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Oe,Ke.__webglTexture,ee,Le)}}else if(y!==null&&ee!==0){let Le=qe.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Le.__webglTexture,ee)}G=-1};function Ur(y){let U=qe.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=Ct.textureFormatReadable(y.format),U.__typeReadable=Ct.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,ee,Y,J,Ue,Ge,Le=0){if(!(y&&y.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=qe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ge!==void 0&&(Oe=Oe[Ge],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Ae.bindFramebuffer(z.FRAMEBUFFER,Oe);try{let Ke=y.textures[Le],lt=Ke.format,P=Ke.type;y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let L=Ur(Ke);if(L.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(L.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-Y&&ee>=0&&ee<=y.height-J&&z.readPixels(U,ee,Y,J,Me.convert(lt),Me.convert(P),Ue)}finally{let Ke=ue!==null?qe.get(ue).__webglFramebuffer:null;Ae.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(y,U,ee,Y,J,Ue,Ge,Le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=qe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ge!==void 0&&(Oe=Oe[Ge],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(U>=0&&U<=y.width-Y&&ee>=0&&ee<=y.height-J){Ae.bindFramebuffer(z.FRAMEBUFFER,Oe);let Ke=y.textures[Le],lt=Ke.format,P=Ke.type;y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let L=Ur(Ke);if(L.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(L.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let H=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,H),z.bufferData(z.PIXEL_PACK_BUFFER,Ue.byteLength,z.STREAM_READ),z.readPixels(U,ee,Y,J,Me.convert(lt),Me.convert(P),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let ae=ue!==null?qe.get(ue).__webglFramebuffer:null;Ae.bindFramebuffer(z.FRAMEBUFFER,ae);let ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Uu(z,ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,H),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ue),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(H),z.deleteSync(ce),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,ee=0){let Y=Math.pow(2,-ee),J=Math.floor(y.image.width*Y),Ue=Math.floor(y.image.height*Y),Ge=U!==null?U.x:0,Le=U!==null?U.y:0;tt.setTexture2D(y,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Ge,Le,J,Ue),Ae.unbindTexture()},this.copyTextureToTexture=function(y,U,ee=null,Y=null,J=0,Ue=0){let Ge,Le,Oe,Ke,lt,P,L,H,ae,ce=y.isCompressedTexture?y.mipmaps[Ue]:y.image;if(ee!==null)Ge=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,Ke=ee.min.x,lt=ee.min.y,P=ee.isBox3?ee.min.z:0;else{let Ye=Math.pow(2,-J);Ge=Math.floor(ce.width*Ye),Le=Math.floor(ce.height*Ye),y.isDataArrayTexture?Oe=ce.depth:y.isData3DTexture?Oe=Math.floor(ce.depth*Ye):Oe=1,Ke=0,lt=0,P=0}Y!==null?(L=Y.x,H=Y.y,ae=Y.z):(L=0,H=0,ae=0);let be=Me.convert(U.format),Pe=Me.convert(U.type),oe;U.isData3DTexture?(tt.setTexture3D(U,0),oe=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(tt.setTexture2DArray(U,0),oe=z.TEXTURE_2D_ARRAY):(tt.setTexture2D(U,0),oe=z.TEXTURE_2D),Ae.activeTexture(z.TEXTURE0),Ae.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),Ae.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Ae.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let Ce=Ae.getParameter(z.UNPACK_ROW_LENGTH),ie=Ae.getParameter(z.UNPACK_IMAGE_HEIGHT),Xe=Ae.getParameter(z.UNPACK_SKIP_PIXELS),We=Ae.getParameter(z.UNPACK_SKIP_ROWS),Mt=Ae.getParameter(z.UNPACK_SKIP_IMAGES);Ae.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),Ae.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),Ae.pixelStorei(z.UNPACK_SKIP_PIXELS,Ke),Ae.pixelStorei(z.UNPACK_SKIP_ROWS,lt),Ae.pixelStorei(z.UNPACK_SKIP_IMAGES,P);let Kt=y.isDataArrayTexture||y.isData3DTexture,gt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let Ye=qe.get(y),vt=qe.get(U),Vt=qe.get(Ye.__renderTarget),Tt=qe.get(vt.__renderTarget);Ae.bindFramebuffer(z.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Nt=0;Nt<Oe;Nt++)Kt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.get(y).__webglTexture,J,P+Nt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.get(U).__webglTexture,Ue,ae+Nt)),z.blitFramebuffer(Ke,lt,Ke+Ge,lt+Le,L,H,L+Ge,H+Le,z.DEPTH_BUFFER_BIT,z.NEAREST);Ae.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||y.isRenderTargetTexture||qe.has(y)){let Ye=qe.get(y),vt=qe.get(U);Ae.bindFramebuffer(z.READ_FRAMEBUFFER,I),Ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,Z);for(let Vt=0;Vt<Oe;Vt++)Kt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ye.__webglTexture,J,P+Vt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ye.__webglTexture,J),gt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vt.__webglTexture,Ue,ae+Vt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vt.__webglTexture,Ue),J!==0?z.blitFramebuffer(Ke,lt,Ke+Ge,lt+Le,L,H,L+Ge,H+Le,z.COLOR_BUFFER_BIT,z.NEAREST):gt?z.copyTexSubImage3D(oe,Ue,L,H,ae+Vt,Ke,lt,Ge,Le):z.copyTexSubImage2D(oe,Ue,L,H,Ke,lt,Ge,Le);Ae.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else gt?y.isDataTexture||y.isData3DTexture?z.texSubImage3D(oe,Ue,L,H,ae,Ge,Le,Oe,be,Pe,ce.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(oe,Ue,L,H,ae,Ge,Le,Oe,be,ce.data):z.texSubImage3D(oe,Ue,L,H,ae,Ge,Le,Oe,be,Pe,ce):y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ue,L,H,Ge,Le,be,Pe,ce.data):y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ue,L,H,ce.width,ce.height,be,ce.data):z.texSubImage2D(z.TEXTURE_2D,Ue,L,H,Ge,Le,be,Pe,ce);Ae.pixelStorei(z.UNPACK_ROW_LENGTH,Ce),Ae.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ie),Ae.pixelStorei(z.UNPACK_SKIP_PIXELS,Xe),Ae.pixelStorei(z.UNPACK_SKIP_ROWS,We),Ae.pixelStorei(z.UNPACK_SKIP_IMAGES,Mt),Ue===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(oe),Ae.unbindTexture()},this.initRenderTarget=function(y){qe.get(y).__webglFramebuffer===void 0&&tt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?tt.setTextureCube(y,0):y.isData3DTexture?tt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?tt.setTexture2DArray(y,0):tt.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){j=0,$=0,ue=null,Ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var Ua=class i extends ut{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new we(t.color):new we(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Qn,p=new k,f=new k,h=new k,g=new mt,x=new k(0,0,-1),m=new Yt,d=new k,M=new k,T=new Yt,S=new mt,E=new Zt(r,a,{samples:l,type:nn}),w=new xt({name:c.name!==void 0?c.name:"unspecified",uniforms:Sn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=E.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=S,this.material=w,this.onBeforeRender=function(v,b,D){let C=this.getReflectionCamera(D);if(f.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(D.matrixWorld),g.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(g),d.subVectors(f,h),d.dot(p)>0===!0&&this.forceUpdate===!1)return;d.reflect(p).negate(),d.add(f),g.extractRotation(D.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(h),M.subVectors(f,x),M.reflect(p).negate(),M.add(f),C.position.copy(d),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(p),C.lookAt(M),C.far=D.far,C.updateMatrixWorld(),C.projectionMatrix.copy(D.projectionMatrix),C.projectionMatrix.elements[8]*=-1,C.projectionMatrix.elements[12]*=-1,S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(C.projectionMatrix),S.multiply(C.matrixWorldInverse),S.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(p,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let B=C.projectionMatrix;C.isOrthographicCamera?(T.x=(Math.sign(m.x)+B.elements[8])/B.elements[0],T.y=(Math.sign(m.y)+B.elements[9])/B.elements[5],T.z=-D.far,T.w=1):(T.x=(Math.sign(m.x)+B.elements[8])/B.elements[0],T.y=(Math.sign(m.y)+B.elements[9])/B.elements[5],T.z=-1,T.w=(1+B.elements[10])/B.elements[14]),m.multiplyScalar(2/m.dot(T)),B.elements[2]=m.x,B.elements[6]=m.y,C.isOrthographicCamera?(B.elements[10]=m.z-o,B.elements[14]=m.w-1):(B.elements[10]=m.z+1-o,B.elements[14]=m.w),n.visible=!1;let K=v.getRenderTarget(),I=v.xr.enabled,Z=v.shadowMap.autoUpdate;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.setRenderTarget(E),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(b,C),v.xr.enabled=I,v.shadowMap.autoUpdate=Z,v.setRenderTarget(K);let j=D.viewport;j!==void 0&&v.state.viewport(j),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()},this.getReflectionCamera=function(v){let b=this._reflectionCameras.get(v);return b===void 0&&(b=v.clone(),this._reflectionCameras.set(v,b)),b}}};Ua.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iv=new Us(-1,1,1,-1,0,1),vh=class extends Jt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},sv=new vh,Kn=class{constructor(e){this._mesh=new ut(sv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ms=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Sn.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Kn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xl=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(Fi),this.copyPass.material.blending=yn,this.timer=new da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fa!==void 0&&(a instanceof Fa?n=!0:a instanceof Xl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yl=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Oa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new mt},cameraProjectionMatrixInverse:{value:new mt},cameraWorldMatrix:{value:new mt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},Ba={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Zl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function bf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=rv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new k(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new $i(s,e,e);return r.wrapS=oi,r.wrapT=oi,r.needsUpdate=!0,r}function rv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var za={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:xh(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Fe},cameraProjectionMatrixInverse:{value:new mt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function xh(i,e,t){let n=av(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function av(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new k(Math.cos(r),Math.sin(r),a))}return n}var Jl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,p=(c+l)*u,f=c-p,h=l-p,g=e-f,x=t-h,m,d;g>x?(m=1,d=0):(m=0,d=1);let M=g-m+u,T=x-d+u,S=g-1+2*u,E=x-1+2*u,w=c&255,v=l&255,b=this.perm[w+this.perm[v]]%12,D=this.perm[w+m+this.perm[v+d]]%12,C=this.perm[w+1+this.perm[v+1]]%12,F=.5-g*g-x*x;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[b],g,x));let B=.5-M*M-T*T;B<0?s=0:(B*=B,s=B*B*this._dot(this.grad3[D],M,T));let K=.5-S*S-E*E;return K<0?r=0:(K*=K,r=K*K*this._dot(this.grad3[C],S,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),p=Math.floor(t+l),f=Math.floor(n+l),h=1/6,g=(u+p+f)*h,x=u-g,m=p-g,d=f-g,M=e-x,T=t-m,S=n-d,E,w,v,b,D,C;M>=T?T>=S?(E=1,w=0,v=0,b=1,D=1,C=0):M>=S?(E=1,w=0,v=0,b=1,D=0,C=1):(E=0,w=0,v=1,b=1,D=0,C=1):T<S?(E=0,w=0,v=1,b=0,D=1,C=1):M<S?(E=0,w=1,v=0,b=0,D=1,C=1):(E=0,w=1,v=0,b=1,D=1,C=0);let F=M-E+h,B=T-w+h,K=S-v+h,I=M-b+2*h,Z=T-D+2*h,j=S-C+2*h,$=M-1+3*h,ue=T-1+3*h,G=S-1+3*h,X=u&255,Q=p&255,me=f&255,Ve=this.perm[X+this.perm[Q+this.perm[me]]]%12,te=this.perm[X+E+this.perm[Q+w+this.perm[me+v]]]%12,_e=this.perm[X+b+this.perm[Q+D+this.perm[me+C]]]%12,Te=this.perm[X+1+this.perm[Q+1+this.perm[me+1]]]%12,Re=.6-M*M-T*T-S*S;Re<0?s=0:(Re*=Re,s=Re*Re*this._dot3(this.grad3[Ve],M,T,S));let Se=.6-F*F-B*B-K*K;Se<0?r=0:(Se*=Se,r=Se*Se*this._dot3(this.grad3[te],F,B,K));let ke=.6-I*I-Z*Z-j*j;ke<0?a=0:(ke*=ke,a=ke*ke*this._dot3(this.grad3[_e],I,Z,j));let pt=.6-$*$-ue*ue-G*G;return pt<0?o=0:(pt*=pt,o=pt*pt*this._dot3(this.grad3[Te],$,ue,G)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,p,f,h,g,x=(e+t+n+s)*c,m=Math.floor(e+x),d=Math.floor(t+x),M=Math.floor(n+x),T=Math.floor(s+x),S=(m+d+M+T)*l,E=m-S,w=d-S,v=M-S,b=T-S,D=e-E,C=t-w,F=n-v,B=s-b,K=D>C?32:0,I=D>F?16:0,Z=C>F?8:0,j=D>B?4:0,$=C>B?2:0,ue=F>B?1:0,G=K+I+Z+j+$+ue,X=a[G][0]>=3?1:0,Q=a[G][1]>=3?1:0,me=a[G][2]>=3?1:0,Ve=a[G][3]>=3?1:0,te=a[G][0]>=2?1:0,_e=a[G][1]>=2?1:0,Te=a[G][2]>=2?1:0,Re=a[G][3]>=2?1:0,Se=a[G][0]>=1?1:0,ke=a[G][1]>=1?1:0,pt=a[G][2]>=1?1:0,He=a[G][3]>=1?1:0,_t=D-X+l,At=C-Q+l,st=F-me+l,Lt=B-Ve+l,Ft=D-te+2*l,yt=C-_e+2*l,Qe=F-Te+2*l,Pt=B-Re+2*l,Et=D-Se+3*l,$t=C-ke+3*l,Wt=F-pt+3*l,Qt=B-He+3*l,z=D-1+4*l,Xt=C-1+4*l,bt=F-1+4*l,Ct=B-1+4*l,Ae=m&255,Ot=d&255,qe=M&255,tt=T&255,A=o[Ae+o[Ot+o[qe+o[tt]]]]%32,_=o[Ae+X+o[Ot+Q+o[qe+me+o[tt+Ve]]]]%32,q=o[Ae+te+o[Ot+_e+o[qe+Te+o[tt+Re]]]]%32,ve=o[Ae+Se+o[Ot+ke+o[qe+pt+o[tt+He]]]]%32,le=o[Ae+1+o[Ot+1+o[qe+1+o[tt+1]]]]%32,xe=.6-D*D-C*C-F*F-B*B;xe<0?u=0:(xe*=xe,u=xe*xe*this._dot4(r[A],D,C,F,B));let N=.6-_t*_t-At*At-st*st-Lt*Lt;N<0?p=0:(N*=N,p=N*N*this._dot4(r[_],_t,At,st,Lt));let O=.6-Ft*Ft-yt*yt-Qe*Qe-Pt*Pt;O<0?f=0:(O*=O,f=O*O*this._dot4(r[q],Ft,yt,Qe,Pt));let V=.6-Et*Et-$t*$t-Wt*Wt-Qt*Qt;V<0?h=0:(V*=V,h=V*V*this._dot4(r[ve],Et,$t,Wt,Qt));let ye=.6-z*z-Xt*Xt-bt*bt-Ct*Ct;return ye<0?g=0:(ye*=ye,g=ye*ye*this._dot4(r[le],z,Xt,bt,Ct)),27*(u+p+f+h+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ka=class i extends Tn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=bf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Zt(this.width,this.height,{type:nn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},Oa.defines),uniforms:Sn.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new aa,this.normalMaterial.blending=yn,this.pdMaterial=new xt({defines:Object.assign({},za.defines),uniforms:Sn.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},Ba.defines),uniforms:Sn.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,blending:yn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:Sn.clone(Fi.uniforms),vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ga,blendDst:Os,blendEquation:li,blendSrcAlpha:ma,blendDstAlpha:Os,blendEquationAlpha:li}),this.blendMaterial=new xt({uniforms:Sn.clone(Zl.uniforms),vertexShader:Zl.vertexShader,fragmentShader:Zl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jo,blendSrc:ga,blendDst:Os,blendEquation:li,blendSrcAlpha:ma,blendDstAlpha:Os,blendEquationAlpha:li}),this._fsQuad=new Kn(null),this._originalClearColor=new we,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new mi;s.format=xi,s.type=Qi,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:on,magFilter:on,type:nn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Jl,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new $i(s,e,e,ti,Pn);return r.wrapS=oi,r.wrapT=oi,r.needsUpdate=!0,r}};ka.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Va={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var Kl=class extends Tn{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Zt(1,1,{minFilter:on,magFilter:on,type:nn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new yr,this._materialDepth.depthPacking=$c,this._materialDepth.blending=yn;let o=Sn.clone(Va.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new xt({defines:Object.assign({},Va.defines),uniforms:o,vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader}),this.uniforms=o,this._fsQuad=new Kn(this.materialBokeh),this._oldClearColor=new we}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var wf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Pr=class i extends Tn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,a,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Zt(r,a,{type:nn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Zt(r,a,{type:nn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=wf;this.highPassUniforms=Sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Sn.clone(Fi.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader,premultipliedAlpha:!0,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new Jn,this._fsQuad=new Kn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Pr.BlurDirectionX=new Fe(1,0);Pr.BlurDirectionY=new Fe(0,1);var Ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var $l=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Sn.clone(Ga.uniforms),this.material=new _r({name:Ga.name,uniforms:this.uniforms,vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader}),this._fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Rt.getTransfer(this._outputColorSpace)===Ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===va?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ya&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ov=`attribute vec3 p,n,o;attribute vec4 c;uniform vec3 P,X,Y,Z,Lr,Lu,Lf,Lo;uniform vec4 Sw[4],S;uniform vec2 Lq;uniform float k,V;varying vec3 w,N;varying vec4 C;
void main(){float t=S.z,f=S.x,a=n.y*40.,h=fract(t*.5+n.y),s=n.x;vec3 q=p+o;N=n;C=c;
if(k>4.5&&k<5.5){vec3 d=q-Lo;float z=dot(d,Lf),y=mix(1.,z,Lq.y),zn=mix(z/Lq.x*2.-1.,(Lq.x+.1)/(Lq.x-.1)-.2*Lq.x/((Lq.x-.1)*max(z,.01)),Lq.y);w=q;C=vec4(z/Lq.x,0,0,0);gl_Position=vec4(dot(d,Lr),dot(d,Lu),zn*y,y);return;}
if(k>2.5&&k<4.5||k>6.5){w=Z+(X*p.x*S.y+Y*p.y)/f;gl_Position=vec4(p.xy,0,1);return;}
if(k>1.5&&k<2.5){
if(n.z>1.5){q+=vec3(sin(t*.2+a),sin(t*.17+a*1.3)*.6,cos(t*.23+a*.7))*1.5;C.a*=.5+.5*sin(t*1.5+a);}
else if(n.z>.5){q+=vec3(sin(a)*h*.6+sin(t*3.+a)*.1,.3-h*.8,cos(a*1.3)*h*.6);C.a*=(1.-h)*(.6+.4*sin(t*20.+a));}
else s*=1.+.1*sin(t*9.)+V*1.6;}
else if((k<.5||k>5.5)&&c.a>10.5){vec4 v=Sw[int(c.a-10.5)];vec3 r=q-v.xyz;q.xz-=r.y*vec2(sin(t*.6+v.w)*.06,cos(t*.5+v.w*1.7)*.05);}
w=q;vec3 d=q-P;float z=dot(d,Z);
gl_Position=vec4(dot(d,X)*f/S.y,dot(d,Y)*f,z*1.0001-.2,z);gl_PointSize=s*400.*S.w/z;}`,lv=`precision highp float;precision highp sampler2D;uniform vec3 P,H,G,Md,Z,Lp[4],Lk[4],Mr,Mu,Mf,Mo,Q[4],Qc[4];uniform vec2 Mq,Lq,Dr;uniform vec4 S,Ra[2],Rb[2];uniform float k,V,Bm;uniform sampler2D D0,D1,T,Ba,Bb,Dp;varying vec3 w,N;varying vec4 C;
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
gl_FragColor=vec4(mix(mc(),o,f),1);}`,ts=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255),Ql=i=>i.map(e=>e/Math.hypot(...i)),yh=(i,e)=>i.map((t,n)=>t-e[n]),Oi=Math.PI,Tf=Ql([.55,.55,-.4]),jl=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),Af=i=>{let e=Ql([-i[2],0,i[0]]);return[e,[-e[2]*i[1],e[2]*i[0]-e[0]*i[2],e[0]*i[1]]]};function cv(i,e,t,n,s,r,a,o){if(!o){let c=yh(t,e),l=yh(n,e),u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]];if(Math.hypot(...u)<1e-6)return;let p=u.reduce((f,h,g)=>f+h*(e[g]-a[g]),0)<0?-1:1;o=[0,0,0].map(()=>u.map(f=>f*p))}[e,t,n].map((c,l)=>i.push(...c,...o[l],...s,r))}function Ef(i,e,t,n,s,r,a,o){for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])i.push(e+c*s,t,n+l*r,c,0,l,...a,o)}function _h(i,[e,t,n],[s,r,a],o,c){let l=[],u=[e,t+r*.3,n],p=(f,h,g,x)=>cv(l,f,h,g,o,c,u,x);if(s/=2,a/=2,i=="cone"){let f=x=>[e+Math.cos(x*Oi/8)*s,t,n+Math.sin(x*Oi/8)*a],h=x=>[Math.cos(x*Oi/8),.5,Math.sin(x*Oi/8)],g=[0,-1,0];for(let x=0;x<16;x++)p(f(x),f(x+1),[e,t+r,n],[h(x),h(x+1),h(x+.5)]),p(f(x),f(x+1),[e,t,n],[g,g,g])}else if(i=="ball"){let f=(h,g)=>[Math.sin(h*Oi/10)*Math.cos(g*Oi/8),Math.cos(h*Oi/10),Math.sin(h*Oi/10)*Math.sin(g*Oi/8)];for(let h=0;h<10;h++)for(let g=0;g<16;g++){let x=[f(h,g),f(h+1,g),f(h+1,g+1),f(h,g+1)],m=x.map(d=>[e+d[0]*s,t+r/2+d[1]*r/2,n+d[2]*a]);p(m[0],m[1],m[2],[x[0],x[1],x[2]]),p(m[0],m[2],m[3],[x[0],x[2],x[3]])}}else{let f=[...Array(8)].map((h,g)=>[e+(g&1?s:-s),t+(g&2?r:0),n+(g&4?a:-a)]);i=="ramp"&&(f=f.map((h,g)=>g&4?h:[h[0],t,h[2]]));for(let h of[[0,1,3,2],[4,5,7,6],[0,1,5,4],[2,3,7,6],[0,2,6,4],[1,3,7,5]])p(f[h[0]],f[h[1]],f[h[2]]),p(f[h[0]],f[h[2]],f[h[3]])}return l}function hv(i,[e,t,n],[s,,r],a){let o=r>s,c=o?r:s,l=(o?s:r)/2+.15,u=t*.32,p=.03,f=x=>i.push(x[0],x[1],x[2],x[3],x[4],.3,...a,8),h=(x,m,d,M)=>[x,m,d,x,d,M].map(f);for(let x=-c/2+1;x<c/2;x+=2.2){let m=(d,M,T,S)=>o?[e+d,M,n+x,T,S]:[e+x,M,n+d,T,S];h(m(-l,t,-1,0),m(l,t,1,0),m(l+u,p,1,1),m(-l-u,p,-1,1))}let g=(x,m,d)=>o?[e,m,n+x*c/2,0,d]:[e+x*c/2,m,n,0,d];h(g(-1,t,0),g(1,t,0),g(1,p,1),g(-1,p,1))}function uv(i,e,t,n){let s=[],a=i[0]-60,o=e[0]-60,c=Math.ceil((i[1]+60-a)/2),l=Math.ceil((e[1]+60-o)/2),u=[];for(let h=0;h<=l;h++)for(let g=0;g<=c;g++){let x=a+g*2,m=o+h*2,d=Math.min(...t.map(([M,T,S,E])=>Math.hypot(Math.max(Math.abs(x-M)-S,0),Math.max(Math.abs(m-T)-E,0))));u.push((Math.sin(x*.27+Math.sin(m*.17)*2)*.5+Math.sin(m*.23-x*.12+1)*.4+Math.sin(x*.7+m*.6)*.08+Math.sin(x*1.3-m*1.1)*.04)*(1+1.6*jl(10,50,d))*jl(2.5,9,d)*jl(0,30,Math.min(g,c-g,h,l-h)*2))}let p=(h,g)=>u[Math.min(l,Math.max(0,g))*(c+1)+Math.min(c,Math.max(0,h))],f=(h,g)=>[a+h*2,p(h,g),o+g*2,...Ql([p(h-1,g)-p(h+1,g),4,p(h,g-1)-p(h,g+1)])];for(let h=0;h<l;h++)for(let g=0;g<c;g++)for(let[x,m]of[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]]){let d=f(g+x,h+m);s.push(d[0],d[1],d[2],d[3],d[4],d[5],...n,5)}return s}async function Cf(i){let e=i.getContext("webgl"),t=e.createProgram(),n=[],s=e.getExtension("ANGLE_instanced_arrays");[ov,lv].map((G,X)=>{let Q=e.createShader(35633-X);e.shaderSource(Q,G),e.compileShader(Q),e.attachShader(t,Q),e.getShaderParameter(Q,35713)||n.push(e.getShaderInfoLog(Q))}),[..."pnco"].map((G,X)=>e.bindAttribLocation(t,X,G)),e.linkProgram(t),e.getProgramParameter(t,35714)||n.push(e.getProgramInfoLog(t)),e.useProgram(t),e.bindBuffer(34962,e.createBuffer()),[..."pnc"].map((G,X)=>{e.enableVertexAttribArray(X),e.vertexAttribPointer(X,X<2?3:4,5126,0,40,X*12)}),e.depthFunc(515);let r=G=>e.getUniformLocation(t,G),a=(G,...X)=>e["uniform"+X.length+"f"](r(G),...X),o=()=>cancelAnimationFrame(C),c=(G,X,Q=3)=>e["uniform"+Q+"fv"](r(G),new Float32Array(X)),l=(G,X)=>(e.activeTexture(33984+G),e.bindTexture(3553,X)),u=(G,X,Q,me,Ve,te,_e=5121,Te=1)=>{l(3,me),e.texImage2D(3553,0,6408,G,X,0,6408,_e,null),[[10240,Q],[10241,Q],[10242,33071],[10243,33071]].map(([Re,Se])=>e.texParameteri(3553,Re,Se)),e.bindFramebuffer(36160,te),e.framebufferTexture2D(36160,36064,3553,me,0),Te&&(e.bindRenderbuffer(36161,Ve),e.renderbufferStorage(36161,33189,G,X),e.framebufferRenderbuffer(36160,36096,36161,Ve))},p=()=>[e.createTexture(),e.createRenderbuffer(),e.createFramebuffer()],f=[p(),p()],h=p(),g=p(),x=[p(),p()],m=[p(),p()],d=512,M=(...G)=>[2,3,4,5].map((X,Q)=>l(X,G[Q]||null));u(1024,1024,9728,...f[0]),u(d*4,d*6,9728,...f[1]),["D0","D1","T","Ba","Bb","Dp"].map((G,X)=>e.uniform1i(r(G),X));let T=5121;for(let[G,X]of[[["OES_texture_half_float","EXT_color_buffer_half_float","OES_texture_half_float_linear"],36193],[["OES_texture_float","WEBGL_color_buffer_float","OES_texture_float_linear"],5126]])if(G.map(Q=>e.getExtension(Q)),u(4,4,9729,...h,X),e.checkFramebufferStatus(36160)==36053){T=X;break}let S,E="follow",w,v,b=[],D,C,F=0,B=0,K=[],I,Z,j=()=>s&&K.map(G=>{e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,5126,0,12,G.io*4),s.vertexAttribDivisorANGLE(3,1),s.drawArraysInstancedANGLE(4,G.f,G.n,G.c),s.vertexAttribDivisorANGLE(3,0),e.disableVertexAttribArray(3)});function $(){e.disable(3042),e.enable(2929),e.depthMask(1),a("k",5),l(0,null),l(1,null),e.bindFramebuffer(36160,f[1][2]),e.viewport(0,0,d*4,d*6),e.clearColor(1,0,0,1),e.clear(16640);let G=(X,Q,me,Ve,te,_e,Te,Re,Se,ke)=>{e.bindFramebuffer(36160,X),e.viewport(Q,me,Ve,Ve),a("Lr",...Te),a("Lu",...Re),a("Lf",..._e),a("Lo",...te),a("Lq",Se,ke),e.drawArrays(4,6,v[0]+v[1]),j()};e.bindFramebuffer(36160,f[0][2]),e.clearColor(1,0,0,1),e.clear(16640),G(f[0][2],0,0,1024,...Z),b.map(([X],Q)=>{for(let me=0;me<6;me++){let Ve=me>>1,te=Re=>[0,0,0].map((Se,ke)=>+(ke==Re)),_e=te(Ve).map(Re=>Re*(me&1?-1:1)),Te=Q*6+me;G(f[1][2],Te%4*d,(Te/4|0)*d,d,X,_e,te((Ve+1)%3),te((Ve+2)%3),50,1)}})}function ue(G=2){if(!S)return;let X=i.clientWidth||i.width,Q=i.clientHeight||i.height,{at:me,facing:Ve}=S.avatar,te=Ve*Oi/180,_e=+(E=="overview");(i.width!=X||i.height!=Q)&&(i.width=X,i.height=Q),(F!=X||B!=Q)&&(u(F=X,B=Q,9729,...h,T),u(X,Q,9728,...g),[x,m].map((yt,Qe)=>yt.map(Pt=>u(Math.ceil(X/4**(Qe+1)),Math.ceil(Q/4**(Qe+1)),9729,...Pt,T,0))));let Te=[Math.sin(te),0,-Math.cos(te)],Re=[-Te[2],0,Te[0]];w=_e?{position:[D.c[0]-Te[0]*D.r,D.r*.9,D.c[2]-Te[2]*D.r],target:[D.c[0],0,D.c[2]]}:{position:me.map((yt,Qe)=>yt-Te[Qe]*6.5+Re[Qe]*1.3+(Qe==1)*3.4),target:me.map((yt,Qe)=>yt+Te[Qe]*9+(Qe==1)*.8)};let Se=w.position.map((yt,Qe)=>yt+[Math.sin(G*.4)*.1,Math.sin(G*.31)*.07,Math.cos(G*.37)*.1][Qe]),ke=Ql(w.target.map((yt,Qe)=>yt+[Math.cos(G*.3)*.12,Math.sin(G*.23)*.08,0][Qe]-Se[Qe])),[pt,He]=Af(ke);a("P",...Se),a("X",...pt),a("Y",...He),a("Z",...ke),a("H",...ts(S.sky||"#2a2a4a")),a("S",1.8,X/Q,G,Q/720),a("V",_e);let _t=[],At=[];for(let yt=0;yt<4;yt++){let Qe=b[yt],Pt=Qe&&Qe[0],Et=Qe&&Qe[1].map(Xt=>Xt/4.5),$t=Pt?yh(Pt,Se):[0,0,0],Wt=Pt?$t.reduce((Xt,bt,Ct)=>Xt+bt*ke[Ct],0):0,Qt=$t.reduce((Xt,bt,Ct)=>Xt+bt*pt[Ct],0)*1.8/(X/Q)/Wt,z=$t.reduce((Xt,bt,Ct)=>Xt+bt*He[Ct],0)*1.8/Wt;_t.push(Qt/2+.5,z/2+.5,Pt&&Wt>.5?jl(1.8,.8,Math.hypot(Qt,z))*Math.min(1,50/Wt+.35):0),At.push(...Et||[0,0,0])}c("Q",_t),c("Qc",At);let st=()=>{_e?(e.drawArrays(4,6,v[0]),e.drawArrays(4,6+v[0]+v[1],v[2]+v[3])):e.drawArrays(4,6,v[0]+v[1]+v[2]+v[3]),j()};l(0,f[0][0]),l(1,f[1][0]),M(),e.bindFramebuffer(36160,g[2]),e.viewport(0,0,X,Q),e.clearColor(1,0,0,1),e.clear(16640),e.disable(3042),e.enable(2929),e.depthMask(1),a("k",6),st(),e.bindFramebuffer(36160,h[2]),e.viewport(0,0,X,Q),e.clearColor(0,0,0,1),e.clear(16640),e.disable(2929),e.depthMask(0),e.enable(3042),e.blendFunc(770,771),a("k",3),e.drawArrays(4,0,6),e.enable(2929),e.depthMask(1),a("k",0),st(),e.depthMask(0);let Lt=6+v[0]+v[1]+v[2]+v[3];a("k",1),e.drawArrays(4,Lt,v[4]),e.blendFunc(770,1),a("k",2),e.drawArrays(0,Lt+v[4],v[5]),a("k",1),e.drawArrays(4,Lt+v[4]+v[5],v[6]),e.disable(2929),e.disable(3042),a("k",7);let Ft=(yt,Qe,Pt,Et,$t,Wt)=>{let Qt=Math.ceil(X/Wt),z=Math.ceil(Q/Wt);e.bindFramebuffer(36160,Qe[2]),e.viewport(0,0,Qt,z),M(yt),a("Bm",$t),a("Dr",Pt,Et),e.drawArrays(4,0,6)};Ft(h[0],x[1],2/X,0,1,4),Ft(x[1][0],x[0],0,1/Math.ceil(Q/4),0,4),Ft(x[0][0],m[1],3/Math.ceil(X/4),0,0,16),Ft(m[1][0],m[0],0,1.5/Math.ceil(Q/16),0,16),e.bindFramebuffer(36160,null),e.viewport(0,0,X,Q),M(h[0],x[0][0],m[0][0],g[0]),a("Dr",1/X,1/Q),a("k",4),e.drawArrays(4,0,6),e.depthMask(1)}return{modes:["follow","overview"],setWorld(G){S=G;let X=ts(S.ground||"#12121c"),Q=[],me=[],Ve=[],te=[],_e=[],Te=[],{at:Re}=S.avatar,Se=[["ball",[Re[0],0,Re[2]],[.64,1.5,.52],"#7a5a35"],["ball",[Re[0],1.4,Re[2]],[.3,.32,.3],"#8a6a40"]],ke=Object.values(S.things),pt=[Re[0],Re[0]],He=[Re[2],Re[2]],_t=[[Re[0],Re[2],.5,.5]],At=[0],st=ke.filter(N=>N[5]==2),Lt=[],Ft={},yt={},Qe=N=>N[0]+N[2]+N[3],Pt=N=>N&&[N[1][0],N[1][1]+N[2][1]/2,N[1][2]],Et=N=>st.filter(N).sort((O,V)=>V[2][0]*V[2][1]*V[2][2]-O[2][0]*O[2][1]*O[2][2])[0],$t=N=>Math.hypot(N[1][0]-Re[0],N[1][2]-Re[2]);ke.map(N=>!N[5]&&(yt[Qe(N)]=(yt[Qe(N)]||0)+1)),b=ke.filter(N=>N[5]==1).sort((N,O)=>$t(N)-$t(O)).slice(0,4).map(N=>[Pt(N),ts(N[3]).map(O=>O*3.6)]);for(let[N,O]of[[Et(V=>V[0]=="ball"&&ts(V[3])[2]>ts(V[3])[0]),[1.1,1.8,2.6]],[Et(V=>V[0]=="ball"&&ts(V[3])[0]-ts(V[3])[2]>.3),[3,2.1,1]]])N&&b.length<4&&b.push([Pt(N),O]);let Wt=st.length?st.reduce((N,O)=>N.map((V,ye)=>V+O[1][ye]/st.length),[0,0,0]):[0,1e4,0];for(let[N,O,V,ye,,R]of[...ke,...Se]){let re=ts(ye),ne=Math.max(V[0],V[2])/2;if(pt[0]=Math.min(pt[0],O[0]-ne),pt[1]=Math.max(pt[1],O[0]+ne),He[0]=Math.min(He[0],O[2]-ne),He[1]=Math.max(He[1],O[2]+ne),O[1]<1&&_t.push([O[0],O[2],V[0]/2,V[2]/2]),N=="disc"){Ef(te,O[0],O[1]+.02,O[2],V[0]/2,V[2]/2,re,R==2?6:3);continue}let ge=R==2&&N=="box"&&V[1]<.15&&V[0]>.4&&V[2]>.4;!R&&O[1]>=0&&O[1]<.3&&N!="ramp"&&V[1]>=.12&&V[0]+V[2]<12&&At[0]++<80&&Ef(te,O[0],.025,O[2],V[0]*.5+.5,V[2]*.5+.5,[0,0,0],7),R&&!ge&&N=="box"&&V[1]<.15&&(V=[V[0]<V[2]?V[0]*.4:V[0],V[1]*.5,V[2]<=V[0]?V[2]*.4:V[2]]);let Me=!R&&N=="box"&&Math.max(...V)>=2.9&&V[1]>=.12,Ee=Me&&O[1]>=3&&V[1]<=1.5&&V[0]>5&&V[2]>5,Be=ge?6:R?R==1&&O[1]>=1&&Lt.length<4?11+Lt.push([O[0],O[1]+V[1]+.35,O[2],Lt.length*1.3])-1:1:Me?8:V[1]<.12&&N=="box"?2:0;if(R==2&&N=="box"&&Math.min(V[0],V[2])<=.4&&Math.max(V[0],V[2])>=3&&O[1]>=3&&hv(Te,O,V,re.map(nt=>nt*1.1)),s&&!R&&!Me&&(N=="box"||N=="cone")&&yt[Qe([N,O,V,ye])]>=3){let nt=Qe([N,0,V,ye])+Be;(Ft[nt]||(Ft[nt]={m:_h(N,[0,0,0],V,re,Be),o:[]})).o.push(...O);continue}if((R?Ve:Ee?me:Q).push(..._h(N,O,V,re,Be)),R){let nt=[O[0],O[1]+V[1]/2,O[2]];_e.push(...nt,R==1?2.5:1,0,0,...re,.8);for(let de=0;de<22;de++)_e.push(...nt,.12,(de+.5)/22,1,...re,1)}}for(let N=0;N<90;N++)_e.push(Re[0]+Math.sin(N*13)*12,3+Math.sin(N*29)*2.5,Re[2]+Math.sin(N*47)*12,.08,N*.37+.1,2,.54,.54,.58,.8);b.map(([N],O)=>{for(let V=0;V<28;V++)_e.push(N[0]+Math.sin(V*13+O*7)*4,N[1]-.8+Math.sin(V*29+O)*1.8,N[2]+Math.sin(V*47+O*3)*4,.08,V*.53+O,2,.54,.54,.58,.9)}),D={c:[(pt[0]+pt[1])/2,0,(He[0]+He[1])/2],r:Math.max(10,Math.hypot(pt[1]-pt[0],He[1]-He[0])*.5+3)};let Qt=[..._h("box",[0,-1.02,0],[800,1,800],X,5),...uv(pt,He,_t,X)],z=Math.max(16,D.r*.9),Xt=Tf.map(N=>-N),[bt,Ct]=Af(Xt);Z=[D.c.map((N,O)=>N-Xt[O]*z*1.2),Xt,bt.map(N=>N/z),Ct.map(N=>N/z),z*2.4,0];let Ae=st.filter(N=>N[0]=="box"&&Math.min(N[2][0],N[2][2])<=.4&&Math.max(N[2][0],N[2][2])>=3&&N[1][1]>=3).sort((N,O)=>O[2][0]+O[2][2]-N[2][0]-N[2][2]).slice(0,2),Ot=[],qe=[];for(let N=0;N<2;N++){let O=Ae[N];Ot.push(...O?[O[1][0],O[1][2],O[2][0]/2+.1,O[2][2]/2+.1]:[0,0,0,0]),qe.push(...O?[O[1][1],...ts(O[3])]:[0,0,0,0])}c("Ra",Ot,4),c("Rb",qe,4),c("Lp",[0,1,2,3].flatMap(N=>b[N]?b[N][0]:[0,1e4,0])),c("Lk",[0,1,2,3].flatMap(N=>b[N]?b[N][1]:[0,0,0])),c("Sw",[0,1,2,3].flatMap(N=>Lt[N]||[0,1e4,0,0]),4),a("Mo",...Z[0]),c("Mf",Z[1]),c("Mr",Z[2]),c("Mu",Z[3]),a("Mq",Z[4],0),a("Md",...Tf),a("G",...Wt);let tt=[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].flatMap(([N,O])=>[N,O,0,(N+1)/2,(O+1)/2,0,0,0,0,0]),A=[tt,Q,me,Ve,Qt,te,_e,Te],_=A.reduce((N,O)=>N+O.length,0),q=Object.values(Ft),ve=_+q.reduce((N,O)=>N+O.m.length+O.o.length,0),le=new Float32Array(ve),xe=0;A.map(N=>{le.set(N,xe),xe+=N.length}),K=q.map(N=>{let O={f:xe/10,n:N.m.length/10,c:N.o.length/3};return le.set(N.m,xe),xe+=N.m.length,O}),q.map((N,O)=>{K[O].io=xe,le.set(N.o,xe),xe+=N.o.length}),e.bufferData(34962,le,35044),v=[Q,me,Ve,Qt,te,_e,Te].map(N=>N.length/10),$(),ue()},setCamera(G){E=G,ue()},getCamera:()=>w,renderStill(G){E=G,ue()},start(){C=requestAnimationFrame(function G(X){ue(X/1e3),C=requestAnimationFrame(G)})},stop:o,dispose:o,resize(){ue()},errors:()=>n.splice(0)}}var jt=Math.PI,Rf=[.55,.55,-.4],Mh=[.26,.12,-.96],Ha=i=>{let e=Math.hypot(...i);return i.map(t=>t/e)},_i=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),Gs=(i,e,t)=>i+(e-i)*t,ec=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},Ir=(i,e,t=0)=>{let n=Math.imul(i+374761393,668265263)^Math.imul(e+1274126177,2246822519)^Math.imul(t+97,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Bi=(i,e)=>{let t=ec(i),n=Float32Array.from({length:e*e},t);return(s,r)=>{s*=e,r*=e;let a=Math.floor(s),o=Math.floor(r),c=s-a,l=r-o,u=c*c*(3-2*c),p=l*l*(3-2*l),f=(h,g)=>n[(g%e+e)%e*e+(h%e+e)%e];return Gs(Gs(f(a,o),f(a+1,o),u),Gs(f(a,o+1),f(a+1,o+1),u),p)}},Dr=(i,e=4,t=4)=>{let n=[...Array(t)].map((s,r)=>Bi(i+r*17,e<<r));return(s,r)=>{let a=0,o=.5,c=0;for(let l of n)a+=l(s,r)*o,c+=o,o*=.5;return a/c}};function fv(i,e,t,n){let s=new Float32Array(i*i),r=new Uint8ClampedArray(i*i*4),a=new Uint8ClampedArray(i*i*4);for(let l=0;l<i;l++)for(let u=0;u<i;u++){let[p,f,h]=e((u+.5)/i,(l+.5)/i),g=l*i+u;s[g]=p,r[g*4]=r[g*4+1]=r[g*4+2]=f*255,r[g*4+3]=255,a[g*4]=a[g*4+1]=a[g*4+2]=h*255,a[g*4+3]=255}let o=new Uint8ClampedArray(i*i*4),c=(l,u)=>s[(u+i)%i*i+(l+i)%i];for(let l=0;l<i;l++)for(let u=0;u<i;u++){let p=(c(u-1,l)-c(u+1,l))*t,f=(c(u,l+1)-c(u,l-1))*t,h=Math.hypot(p,f,1),g=(l*i+u)*4;o[g]=(p/h*.5+.5)*255,o[g+1]=(f/h*.5+.5)*255,o[g+2]=(1/h*.5+.5)*255,o[g+3]=255}return{map:n(r,i,!0),normalMap:n(o,i),roughnessMap:n(a,i)}}function dv(){let i=Dr(3,4,4),e=Bi(9,64);return(t,n)=>{let s=Math.floor(n*8),r=t*4+(s&1)*.5,a=Math.floor(r),o=r-a,c=n*8-s,l=Math.min(o*128,(1-o)*128,c*64,(1-c)*64),u=Ir(s,(a%4+4)%4,3),p=i(t,n),f=e(t,n),h=l<3.5?0:_i(3.5,9,l),g=h*(.55+.25*p+.1*f+.12*u),x=p>.7?(p-.7)*1.2:0;return[g-x*h,h<.05?.42+.1*f:(.62+.32*u)*(.82+.3*p)*(.9+.2*f),h<.05?.96:.74+.22*f]}}function pv(){let i=Dr(21,4,4),e=Bi(5,96),t=[0,1,2].map(s=>.25+.5*Ir(s,1,7)),n=[0,1,2].map(s=>Ir(s,2,7));return(s,r)=>{let a=Math.floor(r*3),o=r*3-a,c=(s*2+n[a])%2,l=Math.floor(c),u=c-l,p=l?1-t[a]:t[a],f=Math.min(u*p*256,(1-u)*p*256,o*170,(1-o)*170),h=a*2+l,g=i(s,r),x=e(s,r);return[_i(3,11,f)*(.7+.2*g+.06*x+.04*(u-.5)*Ir(h,0,3)),f<3?.4:(.72+.28*Ir(h,5,1))*(.85+.25*g),f<3?.97:.55+.3*x+.15*g]}}function mv(){let i=Dr(33,4,5),e=Bi(8,128),t=Bi(14,8);return(n,s)=>{let r=2*jt*(6*n+3*s)+t(n,s)*9,a=Math.sin(r),o=a>0?1-(1-a)*(1-a):a*.8,c=i(n,s),l=e(n,s);return[.5+.28*o*(.5+c)+.3*l,.82+.3*c-.06*o,.9+.1*l]}}function gv(){let i=Bi(61,192),e=Bi(62,192),t=Dr(63,4,4);return(n,s)=>{let r=Math.max(i(n,s*3),e(n*3,s)),a=t(n,s);return[.35+.65*r,(.55+.5*r)*(.75+.5*a),.85]}}function vv(){let i=Dr(41,4,5),e=Dr(43,16,3),t=Bi(7,128);return(n,s)=>{let r=i(n,s),a=Math.abs(e(n,s)-.5)<.018?.6:1;return[(.4+.5*r+.2*t(n,s))*a,(.78+.3*r)*(.6+.4*a)*(.92+.16*t(n,s)),.8+.18*t(n,s)]}}function xv(){let i=Bi(12,16);return(e,t)=>[.5+.12*(Math.sin(2*jt*(5*e+2*t))+Math.sin(2*jt*(3*t-4*e)+1.7)+.7*Math.sin(2*jt*(9*e+7*t)+3))+.2*i(e,t),1,.1]}var _v="varying vec3 vD;void main(){vD=position;vec4 p=projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.);gl_Position=p.xyww;}",If=`float hh(vec3 p){p=fract(p*vec3(.1031,.103,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
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
return nc+(stl(r,40.,.10,.2,t,bd)*1.1+stl(r,90.,.14,.19,t,bd)*.9+stl(r,200.,.06,.17,t,bd)*.8);}`,yv=`precision highp float;uniform vec3 uHor,uZen,uSun,uMoon;uniform float uD,uT,uAlt;varying vec3 vD;
${If}
void main(){vec3 r=normalize(vD);float y=r.y,hy=max(y,0.);
float sd=dot(r,uSun),an=acos(clamp(sd,-1.,1.));
vec3 dc=mix(uHor*vec3(1.1,1.,.86),uZen,smoothstep(0.,.95,pow(hy,.45)));
dc=mix(dc,dc*vec3(1.08,.9,.86),exp(-hy*9.)*.5);
dc+=vec3(1.,.58,.26)*pow(max(sd,0.),4.)*.28*(1.-hy*.6)+vec3(1.,.74,.42)*exp(-an*7.)*.5+vec3(1.,.82,.55)*exp(-an*30.)*1.6+vec3(1.,.88,.62)*smoothstep(.046,.034,an)*34.;
if(uAlt>0.){dc=mix(dc,mix(uHor*vec3(1.03,.98,.86),uZen,smoothstep(0.,.9,pow(hy,.55))),uAlt*.7);
dc+=uAlt*(vec3(1.,.82,.52)*exp(-an*2.4)*.3+vec3(1.,.9,.66)*exp(-an*9.)*.35);
if(y>0.){vec2 q=r.xz/(y+.2)*1.2+vec2(uT*.012,uT*.005);float wv=smoothstep(.5,.8,fb(vec3(q*vec2(1.,2.3),uT*.008)));dc=mix(dc,vec3(1.04,.94,.78),wv*.38*uAlt*smoothstep(0.,.1,y)*(1.-smoothstep(.75,1.,y)));}}
vec3 nc=vec3(0);if(uD<.999){nc=nightSky(r,uHor,uT);float md=dot(r,uMoon);
nc+=vec3(.5,.62,.95)*(pow(max(md,0.),40.)*.35+pow(max(md,0.),600.)*.5)+vec3(.9,.95,1.1)*smoothstep(.9991,.9993,md)*2.2;}
gl_FragColor=vec4(mix(nc,dc,uD),1.);}`,Mv=`precision highp float;uniform float uT,uS,uA,uBase;uniform vec3 uHor,uSun;varying vec3 vW;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=n2(p)*a;p=p*2.03+vec2(17.,9.);a*=.5;}return s/.9375;}
void main(){vec3 V=vW-cameraPosition;float dist=length(V);vec2 p=vW.xz*uS+vec2(uT*.02,uT*.008)*uS*8.;
float fd=1.-smoothstep(900.,1700.,dist);float d=mix(.5,fb(p),fd),cov=smoothstep(uBase,uBase+.22,d);
float ds=mix(.5,fb(p+uSun.xz*.5),fd),lit=clamp(.5+(d-ds)*7.,0.,1.)*(.35+.65*cov);
vec3 c=mix(vec3(.62,.5,.72),vec3(1.1,.95,.66),lit)*(.7+.42*cov);
c=mix(c,uHor*1.02,1.-exp(-dist/1500.));
float a=mix(cov*uA,1.,step(.99,uA))*(1.-smoothstep(900.,1450.,dist));gl_FragColor=vec4(c,a);}`,Sv=`uniform float uT,uL;uniform vec3 uC;varying vec2 vU;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
void main(){float a=abs(vU.x),L=vU.y*uL;float edge=1.-smoothstep(.5,1.,a),core=exp(-a*a*2.5);
float fl=.78+.22*sin(L*1.7-uT*3.)+.1*sin(L*5.-uT*7.+vU.x*3.);float q=floor(L*1.4-uT*.9);
float g=pow(max(sin(L*5.-uT*6.+sin(vU.x*4.+q)*1.5),0.),14.)*smoothstep(.35,.9,h(vec2(q,floor(vU.x*2.5))));
vec3 c=vec3(1.,.78,.36)*uC*fl*(.7+.9*core)+vec3(1.,.95,.75)*(g*1.3+core*.25);gl_FragColor=vec4(c,edge);}`,bv=`attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(uT*(.07+.1*fract(aS*3.1))+aS*7.3);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*.9+sin(uT*2.+aS*40.)*.1;q.y+=.12+fract(aS*5.)*.8+sin(uT*3.+aS*20.)*.08;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(f*3.1416)*(.45+.55*sin(uT*9.+aS*60.));gl_PointSize=max(.09*uK/-mv.z,1.8);}`,wv="varying float vA;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vec3(1.,.9,.55)*2.,vA*a);}",Tv={name:"GlassFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uT:{value:2},uHor:{value:new we},uOv:{value:0},uRip:{value:0},uFt:{value:Array.from({length:7},()=>new Fe)},uBc:{value:new Yt}},vertexShader:`uniform mat4 textureMatrix;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
void main(){vUv=textureMatrix*vec4(position,1.);vL=position.xy*2.;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`uniform vec3 color,uHor;uniform sampler2D tDiffuse;uniform float uT,uOv,uRip;uniform vec2 uFt[7];uniform vec4 uBc;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
${If}
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
gl_FragColor=vec4(col,1.-smoothstep(.8,1.,length(vL)));}`},tc={uniforms:{tDiffuse:{value:null},uSun:{value:new Fe},uAmt:{value:0},uCol:{value:new we("#ffc477")},uA:{value:1.7},uT:{value:2}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 uSun;uniform float uAmt,uA,uT;uniform vec3 uCol;varying vec2 vUv;
void main(){vec4 o=texture2D(tDiffuse,vUv);vec2 d=(uSun-vUv),st=d/36.*.97,p=vUv;float s=0.,w=1.;
for(int i=0;i<36;i++){p+=st;vec3 c=texture2D(tDiffuse,p).rgb;s+=max(dot(c,vec3(.33))-1.5,0.)*w;w*=.968;}
vec2 dd=d*vec2(uA,1.);float ang=atan(dd.y,dd.x);
o.rgb+=smoothstep(.015,.3,dot(o.rgb,vec3(.33)))*uCol*s*uAmt*.07*(.65+.35*sin(ang*38.+uT*.25)*sin(ang*11.+1.-uT*.15))*exp(-length(dd)*1.2);gl_FragColor=o;}`},Pf={uniforms:{tDiffuse:{value:null},uT:{value:2},uA:{value:1.7},uD:{value:0},uV:{value:.5},uN:{value:0},uLP:{value:[new k,new k,new k,new k]}},vertexShader:tc.vertexShader,fragmentShader:`uniform sampler2D tDiffuse;uniform float uT,uA,uD,uV,uN;uniform vec3 uLP[4];varying vec2 vUv;
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
c+=(h(vUv*vec2(1920.,1080.)+floor(uT*24.))-.5)*.045*(1.-l*.6);gl_FragColor=vec4(c,1.);}`},Av=`attribute float aS,aK,aZ;attribute vec3 aC;uniform float uT,uK,uD;uniform vec3 uSun;varying vec4 vC;
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
vC=vec4(aC,al);gl_PointSize=max(aZ*uK/-mv.z,1.6);}`,Ev="varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vC.rgb,vC.a*a);}",Cv=`uniform float uT,uS,uK;uniform vec3 uC;varying vec2 vUv;
void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float y=p.y,t=uT*2.+uS*7.;
float sw=sin(t*1.7+y*4.)*.07*y*y+sin(t*3.3+y*7.)*.035*y,x=p.x-sw;
float w=1.7*pow(max(y,0.),.42)*pow(max(1.-y,0.),1.15)*(1.+.1*sin(t*5.+y*9.))*(.92+.08*sin(t*2.3));
float d=abs(x)/max(w,.001),body=smoothstep(1.,.35,d)*step(0.,y)*smoothstep(1.,.9,y);
float hot=smoothstep(.75,0.,d)*(1.-y*.8),cd=length(vec2(x*1.25,(y-.2)*.9)),core=smoothstep(.2,.02,cd);
vec3 c=mix(uC*1.5,vec3(1.,.93,.72)*1.6,hot*.7);c=mix(c,vec3(.55,.8,1.)*2.2,core);
gl_FragColor=vec4(c*body*uK,1.);}`,Sh=class extends Tn{constructor(){super(),this.needsSwap=!1,this.rt=new Zt(8,8,{type:Pn}),this.buf=new Uint8Array(256),this.lum=.1,this.q=new Kn(new xt({uniforms:{tD:{value:null}},depthTest:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D tD;varying vec2 vUv;void main(){float s=0.;for(int i=0;i<4;i++)for(int j=0;j<4;j++){vec3 c=texture2D(tD,vUv+(vec2(float(i),float(j))-1.5)*.03).rgb;s+=min(dot(c,vec3(.3,.59,.11)),1.4);}gl_FragColor=vec4(clamp(log2(s/16.+1e-4)/12.+.75,0.,1.),0.,0.,1.);}"}))}render(e,t,n){this.q.material.uniforms.tD.value=n.texture,e.setRenderTarget(this.rt),this.q.render(e),e.readRenderTargetPixels(this.rt,0,0,8,8,this.buf);let s=0,r=0;for(let a=0;a<64;a++){let o=a%8-3.5,c=(a/8|0)-3.5,l=Math.exp(-(o*o+c*c)/14);s+=l*(this.buf[a*4]/255-.75)*12,r+=l}this.lum=Math.pow(2,s/r)}};async function Rv(i){let e=[],t=new Gl({canvas:i,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});if(t.shadowMap.enabled=!0,t.shadowMap.type=Fs,t.toneMapping=Bs,t.setPixelRatio(1),!t.capabilities.isWebGL2)throw Error("no webgl2");let n=new mr,s=new Bn(58,16/9,.25,1500),r=new Zn,a=new mr,o=Math.min(8,t.capabilities.getMaxAnisotropy());n.add(r);let c=(P,L,H)=>{let ae=document.createElement("canvas");ae.width=ae.height=L,ae.getContext("2d").putImageData(new ImageData(P,L),0,0);let ce=new ps(ae);return ce.wrapS=ce.wrapT=oi,ce.anisotropy=o,H&&(ce.colorSpace=On),ce},l={},u=(P,L,H,ae,ce)=>{if(!l[P]){l[P]=fv(512,L(),H,c);for(let be of Object.values(l[P]))be.repeat.set(1/ae,1/ce)}return l[P]},p=()=>u("brick",dv,5,2.4,2),f=()=>u("flag",pv,4,3,3),h=()=>u("dust",mv,3,4,4),g=()=>u("stone",vv,3,1.2,1.2),x=()=>u("water",xv,1.2,2,2),m={uRim:{value:0},uRimC:{value:new we("#ffd49a")}},d={value:2},M={value:0},T=(P,L={})=>(P.onBeforeCompile=H=>{H.uniforms.uRim=m.uRim,H.uniforms.uRimC=m.uRimC,H.uniforms.uCT=d,H.uniforms.uGR=L.gold?M:{value:0},L.cloth&&(H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
uniform float uCT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float cw=clamp((1.5-position.y)/1.5,0.,1.)*`+L.cloth+";transformed.x+=sin(uCT*1.7+position.y*4.+position.z*3.)*.05*cw+sin(uCT*.7)*.02*cw;transformed.z+=cos(uCT*1.3+position.y*3.+position.x*3.)*.04*cw+.03*cw*(.6+.4*sin(uCT*2.1));")),L.sway&&(H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
uniform float uCT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
float ph=instanceMatrix[3].x*.7+instanceMatrix[3].z*.5;
#else
float ph=modelMatrix[3].x*.7+modelMatrix[3].z*.5;
#endif
float sw=max(position.y-(`+L.sway[1].toFixed(3)+"),0.)*"+L.sway[0].toFixed(4)+";transformed.x+=sin(uCT*1.3+ph)*sw+sin(uCT*.5+ph*2.)*sw*.5;transformed.z+=cos(uCT*1.1+ph*1.3)*sw*.6;")),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim,uGR,uCT;uniform vec3 uRimC;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+(L.sheen?"totalEmissiveRadiance+=vec3(1.,.78,.42)*pow(max(sin(normal.y*7.+normal.x*3.-uCT*1.1),0.),7.)*.4*(.4+.6*pow(1.-saturate(dot(normal,normalize(vViewPosition))),1.5));":"")).replace("#include <fog_fragment>",`#ifdef USE_FOG
float ff=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);vec3 fc=mix(vec3(1.,.8,.48)*fogColor*1.15,vec3(.62,.5,.8)*(.55+.45*fogColor),smoothstep(25.,160.,vFogDepth));gl_FragColor.rgb=mix(gl_FragColor.rgb,fc,ff);
#endif`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=vec3(1.,.72,.34)*uGR*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),3.)*.7;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=uRimC*uRim*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),2.2)*1.4;`)},P.customProgramCacheKey=()=>"rim"+(L.cloth||"")+(L.gold?"g":"")+(L.sway?"w"+L.sway:"")+(L.sheen?"s":""),P),S={},E=[],w=[],v=[],b=[],D=!1,C=[],F=[],B=[],K=[],I=[],Z=[],j=null,$=null,ue=[],G=[],X=!1,Q=!1,me=(P,L=1)=>new we(P).multiplyScalar(L),Ve=P=>S["b"+P]||(S["b"+P]=T(new ln({color:me(P,1.7),...p(),roughness:1,metalness:0,normalScale:new Fe(1.3,1.3)}))),te=P=>S["f"+P]||(S["f"+P]=(()=>{let L=T(new ln({color:me(P,1.35),...f(),roughness:1,metalness:0,emissive:me(P,.5),emissiveIntensity:0}));return E.push(L),L})()),_e=P=>S["s"+P]||(S["s"+P]=T(new ln({color:me(P,1.4),...g(),roughness:1,metalness:0}))),Te=(P,L)=>S["g"+P+L]||(S["g"+P+L]=(()=>{let H=D&&L==1,ae=T(new ln({color:me(P,.4),emissive:me(P),emissiveIntensity:L==1?H?.9:3.2:2.4,roughness:.5,...H?{transparent:!0,opacity:.4,depthWrite:!1}:{}}));return ae.userData.b=H?.9:3.2,L==1&&w.push(ae),ae})()),Re=P=>S["gl"+P]||(S["gl"+P]=new Ns({color:me(P,.7),emissive:me(P),emissiveIntensity:.75,roughness:.04,metalness:0,transparent:!0,opacity:.55,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,side:pn,depthWrite:!1})),Se=P=>S["lq"+P]||(S["lq"+P]=(()=>{let L=x(),H=new Ns({color:me(P,.35),emissive:me(P),emissiveIntensity:.55,roughness:.05,metalness:0,transparent:!0,opacity:.93,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,normalMap:L.normalMap,normalScale:new Fe(.35,.35)});return v.push(L.normalMap),H})()),ke={value:2},pt=(P,L)=>new xt({uniforms:{uT:ke,uC:{value:new we(P)},uX:{value:L}},fog:!1,transparent:!1,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform float uT,uX;uniform vec3 uC;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}void main(){float pu=.72+.28*sin(vW.z*.13-uT*1.5)+.1*sin(vW.z*.9-uT*2.7);float e=1.-.35*smoothstep(.2,1.2,abs(vW.x-uX));float q=floor(vW.z*.8-uT*.9),f=pow(max(sin(vW.z*.8-uT*3.6+sin(vW.x*4.+q)),0.),12.)*smoothstep(.3,.9,.5+.5*sin(vW.x*3.1+q*5.+h(vec2(q,1.))*6.));vec3 c=vec3(1.,.78,.42)*uC*pu*e*2.2+vec3(1.,.92,.6)*f*1.6;gl_FragColor=vec4(c,1.);}"}),He=(P,L)=>new xt({uniforms:{uC:{value:new we(P)},uK:{value:L}},transparent:!0,blending:Mn,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3,vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform vec3 uC;uniform float uK;varying vec2 vUv;varying vec3 vW;void main(){float r=length(vUv-.5)*2.,g=exp(-r*r*4.2)*(1.-smoothstep(.6,1.,r));vec3 c=uC*mix(.7,1.25,g);float nr=smoothstep(1.5,9.,distance(vW,cameraPosition));gl_FragColor=vec4(c*g*uK*(.35+.65*nr),1.);}"}),_t=(P,L,H,ae)=>new xt({uniforms:{uC:{value:P},uP:{value:new k(...L)},uS:{value:new k(ae?H[0]:H[2],H[1],ae?H[2]:H[0])},uX:{value:ae?1:0}},fog:!1,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform vec3 uC,uP,uS;uniform float uX;varying vec3 vW;void main(){bool zt=uX>.5;vec3 l=vW-uP;float nn=zt?l.z:l.x,a=zt?l.x:l.z;if(abs(nn)<uS.z*.5+.02)discard;vec3 V=normalize(vW-cameraPosition);float va=zt?V.x:V.z,vn=zt?V.z:V.x;float u=a/uS.x+.5,v=l.y/uS.y;float off=va/max(abs(vn),.25)*.45,u2=(a+off)/uS.x+.5;float ew=min(min(u,1.-u)*uS.x,(1.-v)*uS.y);float j=smoothstep(0.,.24,ew);float gl=exp(-pow((u2-.5)*2.2,2.))*(.3+.9*pow(1.-clamp(v,0.,1.),1.3));vec3 c=vec3(.012,.01,.02)+uC*gl*1.15;float ph=fract(v*8.+(u2-.5)*1.8),st=smoothstep(0.,.18,ph)*smoothstep(.6,.4,ph);c*=mix(1.,.4+1.1*st,.65*smoothstep(0.,.25,v)*(1.-v*.35));c*=.22+.78*j;c+=uC*.35*exp(-ew*9.)*(1.-j);gl_FragColor=vec4(c,1.);}"}),At=(P,L)=>new xt({uniforms:{uC:{value:P},uK:{value:L},uT:ke},transparent:!0,blending:Mn,depthWrite:!1,side:pn,fog:!1,vertexShader:"varying vec3 vN,vP;varying vec2 vU;void main(){vU=uv;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uC;uniform float uK,uT;varying vec3 vN,vP;varying vec2 vU;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.5);float s=.85+.15*sin(vU.x*50.+uT*.3)*sin(vU.x*13.-uT*.2);gl_FragColor=vec4(uC*e*s*pow(vU.y,1.3)*uK,1.);}"}),st=(()=>{let P=document.createElement("canvas");P.width=P.height=64;let L=P.getContext("2d"),H=L.createRadialGradient(32,32,0,32,32,32);return H.addColorStop(0,"#fff"),H.addColorStop(.55,"#fff"),H.addColorStop(1,"#000"),L.fillStyle=H,L.fillRect(0,0,64,64),new ps(P)})(),Lt=(()=>{let P=document.createElement("canvas");P.width=P.height=64;let L=P.getContext("2d"),H=L.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.3,"rgba(255,255,255,.45)"),H.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=H,L.fillRect(0,0,64,64);let ae=new ps(P);return ae.colorSpace=On,ae})(),Ft=(()=>{let P=document.createElement("canvas");P.width=32,P.height=64;let L=P.getContext("2d");for(let H=0;H<64;H++){let ae=Math.pow(1-H/63,1.6),ce=L.createLinearGradient(0,0,32,0);ce.addColorStop(0,"#000"),ce.addColorStop(.5,`rgb(${ae*255},${ae*255},${ae*255})`),ce.addColorStop(1,"#000"),L.fillStyle=ce,L.fillRect(0,H,32,1)}return new ps(P)})(),yt=P=>{let L=P.attributes.position,H=P.attributes.normal,ae=P.attributes.uv;for(let ce=0;ce<L.count;ce++){let be=L.getX(ce),Pe=L.getY(ce),oe=L.getZ(ce),Ce=Math.abs(H.getX(ce)),ie=Math.abs(H.getY(ce)),Xe=Math.abs(H.getZ(ce));ie>=Ce&&ie>=Xe?ae.setXY(ce,be,oe):Ce>=Xe?ae.setXY(ce,oe,Pe):ae.setXY(ce,be,Pe)}return P},Qe=([P,L,H],[ae,ce,be])=>{ae/=2,be/=2;let Pe=[P-ae,L,H-be],oe=[P+ae,L,H-be],Ce=[P+ae,L,H+be],ie=[P-ae,L,H+be],Xe=[P-ae,L+ce,H+be],We=[P+ae,L+ce,H+be],Mt=[Pe,Ce,oe,Pe,ie,Ce,ie,Xe,We,ie,We,Ce,Pe,Xe,ie,oe,We,Xe,Pe,oe,Xe,oe,Ce,We,Pe,ie,Xe],Kt=[Pe,Ce,oe,Pe,ie,Ce,ie,Ce,We,ie,We,Xe,Pe,oe,We,Pe,We,Xe,Pe,Xe,ie,oe,Ce,We],gt=new Jt;return gt.setAttribute("position",new $e(Kt.flat(),3)),gt.setAttribute("uv",new $e(new Float32Array(Kt.length*2),2)),gt.computeVertexNormals(),yt(gt)},Pt=(P,L,H,ae)=>{let ce=ae?[0,0,0]:L,be;if(P=="box")be=new ms(H[0],H[1],H[2]).translate(ce[0],ce[1]+H[1]/2,ce[2]);else if(P=="cone")be=new Ls(.5,1,20,1).scale(H[0],H[1],H[2]).translate(ce[0],ce[1]+H[1]/2,ce[2]);else if(P=="ball")be=new gi(.5,24,16).scale(H[0],H[1],H[2]).translate(ce[0],ce[1]+H[1]/2,ce[2]);else{if(P=="ramp")return Qe(ce,H);be=new Pi(.5,40).rotateX(-jt/2).scale(H[0],1,H[2]).translate(ce[0],ce[1]+.02,ce[2])}return P=="disc"?be:yt(be)},Et=(()=>{let P=Bi(77,64);return(L,H)=>P((L%64+64)%64/64,(H%64+64)%64/64)})(),$t=(P,L)=>{let H=P+(Et(P*.03,L*.03)-.5)*30,ae=L+(Et(P*.03+9,L*.03)-.5)*30,ce=Et((H*.55+ae*.84)*.05,(ae*.55-H*.84)*.14),be=Et(P*.11+3,L*.11),Pe=Et(P*.4,L*.4),oe=Math.pow(1-Math.abs(2*ce-1),1.7)-.35;return Gs(ce-.5,oe*.9,.6)*1.5+(be-.5)*.45+(Pe-.5)*.12},Wt=(P,L,H)=>{let ae=1e9;for(let[ce,be,Pe,oe]of H){let Ce=Math.hypot(Math.max(Math.abs(P-ce)-Pe,0),Math.max(Math.abs(L-be)-oe,0));Ce<ae&&(ae=Ce)}return $t(P,L)*(1+.8*_i(10,50,ae))*_i(2.5,9,ae)},Qt=(P,L,H,ae)=>{let Pe=P[0]-60,oe=L[0]-60,Ce=Math.ceil((P[1]+60-Pe)/1.5),ie=Math.ceil((L[1]+60-oe)/1.5),Xe=[],We=[],Mt=[];for(let Ye=0;Ye<=ie;Ye++)for(let vt=0;vt<=Ce;vt++){let Vt=Pe+vt*1.5,Tt=oe+Ye*1.5,Nt=Wt(Vt,Tt,H)*_i(0,30,Math.min(vt,Ce-vt,Ye,ie-Ye)*1.5);Mt.push(Nt),Xe.push(Vt,Nt,Tt);let cn=Et(Vt*.07,Tt*.07),Ie=.86+.28*cn+.35*Math.max(Nt,0)/3;We.push(ae.r*Ie,ae.g*Ie,ae.b*Ie*(1.05-.1*cn))}let Kt=[];for(let Ye=0;Ye<ie;Ye++)for(let vt=0;vt<Ce;vt++){let Vt=Ye*(Ce+1)+vt,Tt=Vt+1,Nt=Vt+Ce+1,cn=Nt+1;Kt.push(Vt,Nt,Tt,Tt,Nt,cn)}let gt=new Jt;return gt.setAttribute("position",new $e(Xe,3)),gt.setAttribute("color",new $e(We,3)),gt.setAttribute("uv",new $e(Xe.filter((Ye,vt)=>vt%3!=1),2)),gt.setIndex(Kt),gt.computeVertexNormals(),gt},z=P=>{let L=P.attributes.position,H=P.attributes.uv;for(let ae=0;ae<L.count;ae++)H.setXY(ae,L.getX(ae),L.getZ(ae));return P},Xt=()=>u("grass",gv,7,5,5),bt={value:400},Ct=P=>{let L=[],H=[],ae=[],ce=[],be=0;for(let oe of P)L.push(...oe.attributes.position.array),H.push(...oe.attributes.normal.array),ae.push(...oe.attributes.uv.array),ce.push(...oe.index.array.map(Ce=>Ce+be)),be+=oe.attributes.position.count;let Pe=new Jt;return Pe.setAttribute("position",new $e(L,3)),Pe.setAttribute("normal",new $e(H,3)),Pe.setAttribute("uv",new $e(ae,2)),Pe.setIndex(ce),Pe},Ae=()=>Ct([0,1,2].map(P=>new Ls(.045,.5,3,1).translate(0,.25,0).rotateZ((P-1)*.32).rotateY(P*2.1))),Ot=(P,L,H)=>(P.userData={id:L,fact:H},r.add(P),y.push(P),P),qe=(P,L,H,ae,ce)=>{let be=ae.length/3;P.forEach((Pe,oe)=>{let Ce=Gs(L,H,oe/(P.length-1));for(let ie=0;ie<4;ie++){let Xe=ie/4*jt*2;ae.push(Pe[0]+Math.cos(Xe)*Ce,Pe[1],Pe[2]+Math.sin(Xe)*Ce)}});for(let Pe=0;Pe<P.length-1;Pe++)for(let oe=0;oe<4;oe++){let Ce=be+Pe*4+oe,ie=be+Pe*4+(oe+1)%4;ce.push(Ce,Ce+4,ie,ie,Ce+4,ie+4)}},tt=(P,L,H,ae,ce,be)=>{let Pe=ae[0]/2,oe=ae[2]/2,Ce=H[1]+ae[1],ie=Math.min(Math.max(Pe*.7,5),16),Xe=14,We=72,Mt=ec(Math.round(H[0]*7+H[2]*13+5)),Kt=new we(ce),gt=new Zn,Ye=[],vt=[],Vt=[],Tt=[],Nt=[new we("#9a8696"),new we("#76626a"),new we("#4e4450")],cn=(Ut,xn)=>{let un=Ut/Xe,sn=xn/We*jt*2,gn=Math.cos(sn),fn=Math.sin(sn),bi=Et(gn*2.5+un*4+7,fn*2.5+un*3),W=Et(gn*6+30,fn*6+un*9),he=(Ut==0?1:Ut==1?.985:Math.pow(1-un,.72)*.97)*(1+(bi-.5)*.45*un+(W-.5)*.1*un),pe=Ut==0?0:-(.35+ie*Math.pow(un,1.15))+(W-.5)*ie*.06*un;return[gn*Pe*he,pe,fn*oe*he,un,bi]};for(let Ut=0;Ut<=Xe;Ut++)for(let xn=0;xn<We;xn++){let[un,sn,gn,fn,bi]=cn(Ut,xn),W=.88+.16*Math.sin(sn*2.3+bi*5),he=Nt[0].clone().lerp(Nt[1],Math.min(1,fn*1.6)).lerp(Nt[2],Math.max(0,fn-.55)*1.8).multiplyScalar(W).lerp(Kt.clone().multiplyScalar(.8),1-_i(.02,.11,fn));Ye.push(un,sn,gn),vt.push(he.r,he.g,he.b),Vt.push(un/5+sn/6,gn/5+sn/4)}for(let Ut=0;Ut<Xe;Ut++)for(let xn=0;xn<We;xn++){let un=Ut*We+xn,sn=Ut*We+(xn+1)%We,gn=un+We,fn=sn+We;Tt.push(un,sn,gn,sn,fn,gn)}let Ie=new Jt;Ie.setAttribute("position",new $e(Ye,3)),Ie.setAttribute("color",new $e(vt,3)),Ie.setAttribute("uv",new $e(Vt,2)),Ie.setIndex(Tt),Ie.computeVertexNormals();let It=new ut(Ie,T(new ln({vertexColors:!0,...g(),roughness:1,normalScale:new Fe(1.4,1.4),side:pn})));It.castShadow=!0,It.receiveShadow=!0,gt.add(It);let hn=new Pi(1,72).rotateX(-jt/2).scale(Pe,1,oe),zt=hn.attributes.position,mn=hn.attributes.uv;for(let Ut=0;Ut<zt.count;Ut++)mn.setXY(Ut,zt.getX(Ut)/6,zt.getZ(Ut)/6);let Vn=new ut(hn,T(new ln({color:me(ce,1.25),...Xt(),roughness:.9,normalScale:new Fe(1.8,1.8)}),{gold:!0}));Vn.receiveShadow=!0,gt.add(Vn);let ki=[],qn=[];for(let Ut=0;Ut<70;Ut++){let xn=2+Math.floor(Mt()*8),un=Math.floor(Mt()*We),sn=cn(xn,un),gn=(1.2+Mt()*3.6)*(ie/14),fn=sn[0]/Pe*(.3+Mt()),bi=sn[2]/oe*(.3+Mt()),W=Mt()*6,he=[[sn[0],sn[1],sn[2]]];for(let pe=1;pe<=4;pe++)he.push([sn[0]+fn*pe*.18+Math.sin(W+pe)*.12,sn[1]-gn*pe/4,sn[2]+bi*pe*.18+Math.cos(W+pe*1.3)*.12]);qe(he,.1,.02,ki,qn)}let hi=new Jt;hi.setAttribute("position",new $e(ki,3)),hi.setIndex(qn),hi.computeVertexNormals(),gt.add(new ut(hi,T(new ln({color:"#8a6a4a",roughness:1,side:pn}))));let An=Math.min(900,Math.round(Pe*Pe*.9)),at=new Is(Ae(),T(new ln({color:me(ce,1.15),roughness:.9,side:pn}),{sway:[.14,0]}),An),En=new mt,Dn=new we,Ln=0;for(let Ut=0;Ut<An*3&&Ln<An;Ut++){let xn=Mt()*jt*2,un=Math.sqrt(Mt())*.97,sn=Math.cos(xn)*Pe*un,gn=Math.sin(xn)*oe*un,fn=H[0]+sn,bi=H[2]+gn,W=.6+Mt()*.9;Mt()<.02||be.some(([he,pe])=>Math.abs(fn-he[0])<pe[0]/2+.2&&Math.abs(bi-he[2])<pe[2]/2+.2)||(En.makeRotationY(Mt()*6).setPosition(sn,0,gn),En.scale(new k(W,W*(.7+Mt()*.8),W)),at.setMatrixAt(Ln,En),at.setColorAt(Ln,Dn.setRGB(.75+Mt()*.4,.8+Mt()*.35,.6+Mt()*.3)),Ln++)}return at.count=Ln,at.receiveShadow=!0,gt.add(at),gt.position.set(H[0],Ce,H[2]),gt.userData.isl=1,Ot(gt,P,L),gt.userData.isl=1,gt.traverse(Ut=>{Ut!==gt&&(Ut.userData={id:P,fact:L}),y.push(Ut)}),gt},A=(()=>{let P=new gi(.5,18,12),L=P.attributes.position;for(let H=0;H<L.count;H++){let ae=1+(Ir(Math.round(L.getX(H)*40),Math.round(L.getY(H)*40)+7*Math.round(L.getZ(H)*40),4)-.5)*.2;L.setXYZ(H,L.getX(H)*ae,L.getY(H)*ae,L.getZ(H)*ae)}return P.computeVertexNormals(),P})(),_=(P,L,H,ae,ce)=>{let be=new Zn,Pe=ae[1],oe=T(new ln({color:me(ce,1.55),roughness:.85}),{sway:[.05,-.5]}),Ce=Math.min(ae[0],ae[2])*.06,ie=new ut(A,oe);ie.scale.set(ae[0],Pe*.72,ae[2]),ie.position.set(H[0],H[1]+Pe*.64,H[2]),ie.castShadow=!0,ie.receiveShadow=!0;let Xe=new ut(new Ii(.7,1,1,7).translate(0,.5,0),T(new ln({color:"#6a4a34",roughness:1})));Xe.scale.set(Ce*2,Pe*.5,Ce*2),Xe.position.set(H[0],H[1],H[2]),Xe.castShadow=!0,be.add(ie,Xe),r.add(be);for(let We of[ie,Xe])We.userData={id:P,fact:L},y.push(We)},q=[],ve=(P,L,H,ae,ce)=>{let be=new Zn,Pe=[[.5,0],[.48,.06],[.42,.16],[.34,.32],[.27,.5],[.22,.66],[.17,.82],[.11,.93],[.05,.98],[.001,1]].map(([Xe,We])=>new Fe(Xe,We)),oe=T(new Ns({color:me(ce,1.15),metalness:.85,roughness:.3,clearcoat:.6,clearcoatRoughness:.2,sheen:1,sheenColor:new we("#ffd890"),sheenRoughness:.4,envMapIntensity:1.8,emissive:me(ce,.5),emissiveIntensity:.12,side:pn}),{sheen:!0}),Ce=new ut(new vr(Pe,28),oe);Ce.scale.set(ae[0],ae[1],ae[2]),Ce.position.y=-ae[1],Ce.castShadow=!0;let ie=new ut(new Ii(.06*ae[0],.08*ae[0],.14*ae[1],8).translate(0,.07*ae[1],0),oe);be.add(Ce,ie),be.position.set(H[0],H[1]+ae[1],H[2]),Ot(be,P,L),be.traverse(Xe=>{Xe!==be&&(Xe.userData={id:P,fact:L},y.push(Xe))}),q.push([be,oe,H[0]])},le=(P,L,H,ae)=>{let ce=ae[1],be=Math.max(ae[0],ae[2])*.6,Pe=T(new ln({color:"#c8a870",roughness:.95}),{sway:[.16/Math.max(ce,.3),0]}),oe=new ut(new Ii(be,be*.7,ce,6,8).translate(0,ce/2,0),Pe);oe.rotation.x=jt,oe.position.set(H[0],H[1]+ce,H[2]),Ot(oe,P,L)},xe=(P,L,H,ae,ce,be)=>{let Pe=[H[0],H[1],H[2]-ae[2]/2],oe=[H[0],H[1]+ae[1],H[2]+ae[2]/2],Ce=Math.hypot(oe[1]-Pe[1],oe[2]-Pe[2]),ie=Math.max(ae[0],1)*.95,Xe=(oe[2]-Pe[2])/Ce,We=-(oe[1]-Pe[1])/Ce,Mt=.04,Kt=new Jt;Kt.setAttribute("position",new $e([Pe[0]-ie,Pe[1]+Xe*Mt,Pe[2]+We*Mt,Pe[0]+ie,Pe[1]+Xe*Mt,Pe[2]+We*Mt,oe[0]+ie,oe[1]+Xe*Mt,oe[2]+We*Mt,oe[0]-ie,oe[1]+Xe*Mt,oe[2]+We*Mt],3)),Kt.setAttribute("uv",new $e([-1,0,1,0,1,1,-1,1],2)),Kt.setIndex([0,1,2,0,2,3]);let gt=new xt({uniforms:{uT:ke,uL:{value:Ce},uC:{value:new we(ce)}},transparent:!0,depthWrite:!1,fog:!1,side:pn,vertexShader:"varying vec2 vU;void main(){vU=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:Sv}),Ye=Ot(new ut(Kt,gt),P,L);Ye.renderOrder=2,Bt.push(Ye);for(let vt=0;vt<26;vt++)be.push([Pe,oe,(vt+.5)/26+P.length*.013])},N={uAlt:{value:0},uHor:{value:new we},uZen:{value:new we("#ad98e2")},uSun:{value:new k(...Ha(Mh))},uMoon:{value:new k(...Ha(Rf))},uD:{value:0},uT:{value:2}},O=new xt({uniforms:N,vertexShader:_v,fragmentShader:yv,side:In,depthWrite:!1,depthTest:!1,fog:!1}),V=new ut(new gi(1,48,24),O);V.renderOrder=-10,V.frustumCulled=!1,n.add(V);let ye=new ut(V.geometry,O);a.add(ye);let R=new Cr(t),re=null,ne=new la("#b9a5ee","#7a6070",1),ge=new fa("#ffc88a",4);ge.castShadow=!0,ge.shadow.mapSize.set(2048,2048),ge.shadow.bias=-4e-4,ge.shadow.normalBias=.06,ge.shadow.radius=3,ge.shadow.autoUpdate=!1,n.add(ne,ge,ge.target),n.fog=new jr("#ffe6b0",.008);let Me={w:0,h:0},Ee=new Zt(4,4,{type:nn,samples:4}),Be=new ql(t,Ee);Be.addPass(new Yl(n,s));let nt=new ka(n,s,4,4);nt.blendIntensity=1,nt.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.3,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),nt.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let de=new Kl(n,s,{focus:10,aperture:5e-4,maxblur:.008}),Je=new Ms(tc),ft=new Pr(new Fe(4,4),.55,.7,1.05),Ne=new Ms(Pf),kt=new Sh,an={k:1},yi=new Ms({uniforms:{tDiffuse:{value:null}},vertexShader:tc.vertexShader,fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 o=texture2D(tDiffuse,vUv);float l=dot(o.rgb,vec3(.3,.59,.11)),lo=2.5,hi=5.;float m=l<=lo?l:lo+(hi-lo)*(1.-exp(-(l-lo)/(hi-lo)));o.rgb*=m/max(l,1e-4);gl_FragColor=o;}"});Be.addPass(nt),Be.addPass(de),Be.addPass(Je),Be.addPass(kt),Be.addPass(yi),Be.addPass(ft),Be.addPass(new $l),Be.addPass(Ne);let Bt=[];for(let P of[nt,de]){let L=P.render.bind(P);P.render=(...H)=>{let ae=Bt.map(ce=>ce.visible);Bt.forEach(ce=>ce.visible=!1);try{L(...H)}finally{Bt.forEach((ce,be)=>ce.visible=ae[be])}}}let ns=null,Wa={uSz:{value:7}},kn,zi="follow",ni={position:[0,3.4,6.5],target:[0,.8,-9]},Xn={c:[0,0,0],r:20},is=0,dn=0,Mi=[],Hs=[],nc=[],Si,Ss,ss,rs=!0,bs,Lr={at:[0,0,0]},Nr=2,Ur=new pa,y=[],U=()=>{let P=new Zn,L=T(new ln({color:"#8a6a40",roughness:.9,metalness:0}),{cloth:1.6}),H=T(new ln({color:"#c8a078",roughness:.7})),ae=T(new ln({color:"#3a2a1c",roughness:.95}),{cloth:.5}),ce=[[.01,0],[.32,.02],[.34,.15],[.3,.55],[.24,.95],[.2,1.25],[.12,1.4],[.01,1.42]].map(([Xe,We])=>new Fe(Xe,We)),be=new ut(new vr(ce,24),L),Pe=new ut(new gi(.15,20,14),H),oe=new ut(new gi(.19,20,14,0,jt*2,0,jt*.62),ae),Ce=new ut(new gi(.22,16,12).scale(1,1.2,.7),ae);Pe.position.set(0,1.55,.02),oe.position.set(0,1.58,-.03),oe.rotation.x=-.25,Ce.position.set(0,.95,.27);let ie=new ut(new xr(.12,.24,20).rotateX(-jt/2),L);ie.position.y=1.36,ie.scale.set(1.2,1.2,1.2);for(let Xe of[be,Pe,oe,Ce,ie])Xe.castShadow=!0,Xe.receiveShadow=!0,P.add(Xe);return P},ee=P=>{for(;P.children.length;)P.children.pop().geometry?.dispose?.()};function Y(P){kn=P,ee(r),Bt=[Bt[0]].filter(Boolean),y.length=0,Hs=[],S={},E=[],w=[],v=[],b=[],Bt=[V],q.length=0,ue=[],G=[],C.forEach(W=>W.dispose()),C=[],F=[],B=[],K=[],I=[],Z=[],j=null,$=null;let L=new we(kn.sky||"#2a2a4a"),H=.2126*L.r+.7152*L.g+.0722*L.b,[ae,ce,be]=(kn.sky||"#2a2a4a").slice(1).match(/../g).map(W=>parseInt(W,16)/255),Pe=.2126*ae+.7152*ce+.0722*be;dn=_i(.35,.6,Pe),D=dn<.5,N.uHor.value.copy(L),N.uD.value=dn,n.fog.color.copy(L).multiplyScalar(Gs(.3,1,dn)),n.fog.color.lerp(new we("#e8d4c0"),dn*.12);let oe=new we(kn.ground||"#12121c").multiplyScalar(Gs(1.5,1.8,dn));oe.lerp(new we("#a08a80"),dn*.35);let Ce=Object.entries(kn.things),ie=kn.avatar.at,Xe=[ie[0],ie[0]],We=[ie[2],ie[2]],Mt=[[ie[0],ie[2],.5,.5]],Kt={},gt=W=>W[0]+W[2]+W[3];Ce.forEach(([,W])=>!W[5]&&(Kt[gt(W)]=(Kt[gt(W)]||0)+1));let Ye=dn>.5&&ie[1]>8;X=Ye,N.uAlt.value=Ye?1:0,N.uZen.value.set(Ye?"#cdbfe6":"#ad98e2"),N.uSun.value.set(...Ha(Ye?[.24,.2,-.95]:Mh));let vt=W=>{let he=new we(W);return he.g>he.r*1.05&&he.g>he.b*1.05},Vt=[],Tt=Ce.map(W=>W[1]).filter(W=>W[0]=="ball"&&!W[5]&&W[2][0]>=12&&W[2][1]<=W[2][0]*.3&&vt(W[3])).map(W=>({t:W,top:W[1][1]+W[2][1]})),Nt=W=>Tt.some(he=>((W[1][0]-he.t[1][0])/(he.t[2][0]/2))**2+((W[1][2]-he.t[1][2])/(he.t[2][2]/2))**2<1.05&&Math.abs(W[1][1]-he.top)<3),cn=Ce.map(W=>W[1]).filter(W=>W[5]==2),Ie=W=>W&&[W[1][0],W[1][1]+W[2][1]/2,W[1][2]],It=W=>Math.hypot(W[1][0]-ie[0],W[1][2]-ie[2]),hn=W=>cn.filter(W).sort((he,pe)=>pe[2][0]*pe[2][1]*pe[2][2]-he[2][0]*he[2][1]*he[2][2])[0],zt=W=>new we(W),mn=W=>{let he=zt(W);return .2126*he.r+.7152*he.g+.0722*he.b},Vn=[],ki=[],qn=Ce.map(W=>W[1]).filter(W=>W[5]==1).sort((W,he)=>It(W)-It(he)).slice(0,4).map(W=>({p:Ie(W),c:zt(W[3]),i:26}));for(let[W,he,pe]of[[hn(fe=>fe[0]=="ball"&&zt(fe[3]).b>zt(fe[3]).r),new we(.5,.85,1.4),14],[hn(fe=>fe[0]=="ball"&&zt(fe[3]).r-zt(fe[3]).b>.3),new we(1.4,1,.5),18]])W&&qn.length<4&&qn.push({p:Ie(W),c:he,i:pe});Mi.forEach(W=>{n.remove(W.l),W.l.shadow.map?.dispose()}),Mi=[];for(let W of qn){let he=new ua(W.c,W.i,46,2);he.position.set(...W.p),he.castShadow=!0,he.shadow.mapSize.set(512,512),he.shadow.bias=-.003,he.shadow.normalBias=.04,he.shadow.radius=2,he.shadow.camera.near=.15,he.shadow.camera.far=46,he.shadow.autoUpdate=!1,n.add(he),Mi.push({l:he,b:W.i})}if(D&&($=Ce.filter(([,W])=>W[2][0]>8&&W[2][2]>8&&(W[0]=="disc"||W[0]=="box"&&W[2][1]<.15)&&(W[5]==2?mn(W[3])<.35:!W[5]&&mn(W[3])<.02)).sort((W,he)=>he[1][2][0]*he[1][2][2]-W[1][2][0]*W[1][2][2])[0]||null,$)){let[,W]=$;j={p:W[1],z:W[2],y:W[1][1]+.03},Mt.push([W[1][0],W[1][2],W[2][0]/2,W[2][2]/2])}let hi={},An={pos:[],s:[],k:[],z:[],c:[]},at=ec(99),En=(W,he,pe,fe,se,ot)=>{An.pos.push(W,he,pe),An.s.push(at()),An.k.push(fe),An.z.push(se),An.c.push(ot.r,ot.g,ot.b)},Dn=(W,he,pe,fe,se,ot={})=>{let De=new ut(he,W);return De.castShadow=ot.cast??!1,De.receiveShadow=ot.rec??!0,De.userData={id:fe,fact:se},r.add(De),y.push(De),De};for(let[W,he]of Ce){let[pe,fe,se,ot,De,rt]=he,Ze=Math.max(se[0],se[2])/2;Xe[0]=Math.min(Xe[0],fe[0]-Ze),Xe[1]=Math.max(Xe[1],fe[0]+Ze),We[0]=Math.min(We[0],fe[2]-Ze),We[1]=Math.max(We[1],fe[2]+Ze),fe[1]<1&&fe[1]>=0&&pe!="disc"&&Mt.push([fe[0],fe[2],se[0]/2,se[2]/2]);let je=zt(ot),it=Math.max(...se);if(Ye&&fe[1]<1&&se[0]>8&&se[2]>8&&(pe=="disc"||pe=="box"&&se[1]<.3))continue;if(!rt&&pe=="ball"){let Gt=Tt.find(St=>St.t===he);if(Gt){tt(W,De,fe,se,ot,Ce.map(St=>St[1]).filter(St=>St[0]=="box"&&!St[5]&&Math.abs(St[1][1]-Gt.top)<1.2));continue}if(it<=6&&vt(ot)&&Nt(he)){_(W,De,fe,se,ot);continue}}if(/bell/.test(De||"")&&!rt){if(pe=="ball"&&se[1]<=4){ve(W,De,fe,se,ot);continue}if(pe=="box"&&Math.max(se[0],se[2])<=.08&&se[1]<=2){le(W,De,fe,se);continue}}if(rt==2&&pe=="ramp"){xe(W,De,fe,se,ot,Vt);continue}if($&&he===$[1]){let Gt=new Ua(new Pi(.5,72),{color:je,textureWidth:512,textureHeight:288,clipBias:.003,shader:Tv,multisample:0});Gt.rotation.x=-jt/2,Gt.scale.set(se[0],se[2],1),Gt.position.set(fe[0],j.y,fe[2]),Gt.renderOrder=-5,Gt.material.transparent=!0,Gt.material.uniforms.uHor.value=N.uHor.value,Gt.userData={id:W,fact:De},r.add(Gt),y.push(Gt),Bt.push(Gt),C.push(Gt);continue}if(rt){let Gt,St;if(D&&rt==2&&pe=="ball"&&se[1]>=se[0]*1.3&&it<.6&&je.r>.6&&je.b<je.r*.4){F.push([W,De,fe,se,je]);continue}let Nn=pe=="box"&&se[1]<.15&&se[0]>.4&&se[2]>.4,Xa=rt==2&&pe=="box"&&Math.min(...se)<=.15&&!Nn&&[...se].sort((tn,Yn)=>tn-Yn)[1]>=.4,Df=Xa&&se[1]>=1.2&&Math.max(se[0],se[2])>=.6&&(mn(ot)<.12||je.r>=je.b*1.05&&je.r>.5);if(rt==2&&pe=="ball"&&it>=2&&fe[1]+se[1]/2>20&&Math.min(je.r,je.g,je.b)>.75&&Vn.push([fe,se,je]),rt==2&&it>4&&pe=="ball"){if(Math.abs(se[0]-se[1])<se[0]*.2&&se[2]<4){let Yn=new ut(new Pi(se[0]/2,64).translate(fe[0],fe[1]+se[1]/2,fe[2]),new Jn({color:je.clone().multiplyScalar(1.7),fog:!1}));r.add(Yn),Bt.push(Yn);continue}let tn=new Ps(new fs({map:Lt,color:je,blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:.5}));tn.position.set(fe[0],fe[1]+se[1]/2,fe[2]),tn.scale.set(se[0]*2.4,se[1]*2.8,1),r.add(tn),Bt.push(tn),b.push([tn,tn.material.opacity,se[0]*2.4]);continue}if(De=="sun_road")St=Dn(pt(ot,fe[0]),Pt(pe,fe,se),he,W,De,{rec:!1}),Bt.push(St);else if(pe=="disc"&&it>3)St=Dn(He(ot,it>15?.2:it>6?.3:.45),Pt(pe,fe,se),he,W,De,{rec:!1}),Bt.push(St);else if(Df){let tn=se[2]<=se[0],Yn=mn(ot)<.12?new we(1,.6,.26):je.clone();St=Dn(_t(Yn,fe,se,tn),Pt("box",fe,[se[0]+(tn?0:.06),se[1],se[2]+(tn?.06:0)]),he,W,De,{rec:!1}),Bt.push(St),ki.push([fe,se,tn,Yn])}else if(pe=="disc"||Nn)Gt=Se(ot),St=Dn(Gt,Pt(pe,fe,se),he,W,De,{rec:!0}),pe=="disc"&&St.geometry.attributes.uv,Bt.push(St);else if(Xa)St=Dn(Re(ot),Pt(pe,fe,se),he,W,De,{rec:!1}),Bt.push(St);else{let tn=se;pe=="box"&&se[1]<.15&&(tn=[se[0]<se[2]?se[0]*.5:se[0],se[1]*.6,se[2]<=se[0]?se[2]*.5:se[2]]),St=Dn(Te(ot,rt),Pt(pe,fe,tn),he,W,De,{rec:!1}),rt==1&&fe[1]>=1&&(St.userData.sway=Ce.length+An.s.length)}let ws=[fe[0],fe[1]+se[1]/2,fe[2]];if(rt==1&&B.push([W,De,fe,se,je,ws]),rt==1)for(let tn=0;tn<14;tn++)En(ws[0],ws[1],ws[2],1,.07,je.clone().multiplyScalar(3));else if(it<2.5)for(let tn=0;tn<5;tn++)En(ws[0]+(at()-.5)*Math.min(se[0],2),ws[1]+(at()-.5)*Math.min(se[1],2),ws[2]+(at()-.5)*Math.min(se[2],2),2,.06,je.clone().multiplyScalar(2.5));if(rt==2&&pe=="box"&&Math.min(se[0],se[2])<=.4&&Math.max(se[0],se[2])>=3&&fe[1]>=3){let tn=se[2]>se[0],Yn=tn?se[2]:se[0],qa=(tn?se[0]:se[2])/2+.15,bh=fe[1]*.3,Ya=fe[1],wh=[],Th=[],Ah=(ii,Za,Fr,Lf)=>{wh.push(...ii,...Za,...Fr,...ii,...Fr,...Lf),Th.push(0,0,1,0,1,1,0,0,1,1,0,1)},as=(ii,Za,Fr)=>tn?[fe[0]+ii,Za,fe[2]+Fr]:[fe[0]+Fr,Za,fe[2]+ii];for(let ii=-Yn/2+1;ii<Yn/2;ii+=3.3)Ah(as(-qa,Ya,ii),as(qa,Ya,ii),as(qa+bh,.03,ii),as(-qa-bh,.03,ii));Ah(as(0,Ya,-Yn/2),as(0,Ya,Yn/2),as(0,.03,Yn/2),as(0,.03,-Yn/2));let ic=new Jt;ic.setAttribute("position",new $e(wh,3)),ic.setAttribute("uv",new $e(Th,2));let sc=new ut(ic,new Jn({map:Ft,color:je.clone().multiplyScalar(.5),transparent:!0,blending:Mn,depthWrite:!1,side:pn,fog:!1}));sc.frustumCulled=!1,r.add(sc),Bt.push(sc)}continue}if(pe=="disc"){let Gt=new ln({color:me(ot,1.3),alphaMap:st,transparent:!0,opacity:.85,roughness:1,normalMap:h().normalMap,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,...h()});Gt.map=h().map;let St=Dn(T(Gt),Pt(pe,fe,se),he,W,De);Bt.push(St);continue}if(pe=="box"&&it>=5&&se[1]>=5&&Math.min(se[0],se[2])<=3&&je.r+je.g+je.b<.12){Dn(new Jn({color:je,fog:!1}),Pt(pe,fe,se),he,W,De,{rec:!1});continue}let et=pe=="box"&&it>=2.9&&se[1]>=.12,qt=et&&fe[1]>=3&&se[1]<=1.5&&se[0]>5&&se[2]>5,en=pe=="box"&&se[1]<.12;if(!et&&(pe=="box"||pe=="cone")&&Kt[gt(he)]>=3){let Gt=gt([pe,0,se,ot]),St=hi[Gt]||(hi[Gt]={g:Pt(pe,[0,0,0],se,!0),m:_e(ot),o:[],ids:[]});St.o.push(fe),St.ids.push(W);continue}let vn=et?[Ve(ot),Ve(ot),fe[1]+se[1]<3.5?te(ot):Ve(ot),Ve(ot),Ve(ot),Ve(ot)]:en?te(ot):_e(ot),wi=Dn(vn,Pt(pe,fe,se),he,W,De,{cast:!0});qt&&Hs.push(wi),pe=="box"&&(et||se[1]>=3)&&ue.push({me:wi,m:vn,b:[fe[0]-se[0]/2,fe[0]+se[0]/2,fe[1],fe[1]+se[1],fe[2]-se[2]/2,fe[2]+se[2]/2],c:ot,g:0})}for(let W of Object.values(hi)){let he=new Is(W.g,W.m,W.o.length),pe=new mt;W.o.forEach((fe,se)=>he.setMatrixAt(se,pe.makeTranslation(fe[0],fe[1],fe[2]))),he.castShadow=!0,he.receiveShadow=!0,he.userData={ids:W.ids,fact:null},he.computeBoundingSphere(),r.add(he),y.push(he)}let Ln=0;for(let[,[W,he,pe,,,fe]]of Ce)!fe&&W=="box"&&pe[1]>=.12&&Math.abs(ie[0]-he[0])<=pe[0]/2&&Math.abs(ie[2]-he[2])<=pe[2]/2&&he[1]+pe[1]<=ie[1]+.6&&(Ln=Math.max(Ln,he[1]+pe[1]));let Ut=(W,he)=>j&&((W-j.p[0])/(j.z[0]/2))**2+((he-j.p[2])/(j.z[2]/2))**2<.9,xn=(W,he)=>Ut(W,he)?j.y:Wt(W,he,Mt);Ut(ie[0],ie[2])&&(Ln=Math.max(Ln,j.y)),ns=null;{for(let[W,he,pe]of Vn){let fe=W[1]+he[1]/2,se=xn(W[0],W[2]),ot=fe-se,De=pe.clone().multiplyScalar(.8),rt=new ut(new Ii(Math.max(.5,he[0]*.3),4.4,ot,40,1,!0).translate(0,-ot/2,0),At(De,.28));rt.position.set(W[0],fe,W[2]),rt.frustumCulled=!1,rt.renderOrder=2,r.add(rt),Bt.push(rt);let Ze=new Ps(new fs({map:Lt,color:De,blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:.4}));Ze.position.set(W[0],fe,W[2]),Ze.scale.set(he[0]*5,he[0]*5,1),Ze.renderOrder=3,r.add(Ze),Bt.push(Ze),C[0]&&C[0].material.uniforms.uBc.value.set(W[0],W[2],0,1)}for(let[W,he,,pe]of ki){let fe=Math.max(he[0],he[2]),se=new ut(new Pi(.5,40).rotateX(-jt/2).scale(fe*2.2,1,fe*2.2),He(pe,.3));se.position.set(W[0],xn(W[0],W[2])+.03,W[2]),se.renderOrder=2,r.add(se),Bt.push(se)}if(C[0]){let W=C[0].material.uniforms,he=kn.avatar.facing*jt/180,pe=Math.sin(he),fe=-Math.cos(he);W.uRip.value=Ut(ie[0],ie[2])?1:0,W.uFt.value=Array.from({length:7},(se,ot)=>{let De=ot%2?1:-1;return new Fe(ie[0]-pe*ot*.85-fe*De*.2,ie[2]-fe*ot*.85+pe*De*.2)})}}if(Ss||(Ss=U(),n.add(Ss),ss=new ut(new xr(1.1,1.6,40).rotateX(-jt/2),new Jn({color:"#ffd890",transparent:!0,opacity:.8,blending:Mn,depthWrite:!1,fog:!1})),n.add(ss),Bt.push(ss)),Ss.position.set(ie[0],Ln,ie[2]),Ss.rotation.y=-(kn.avatar.facing*jt)/180,ss.position.set(ie[0],Ln+.06,ie[2]),Lr={at:ie,fy:Ln},D){let W=(De,rt=1)=>(De.renderOrder=rt,De.frustumCulled=!1,r.add(De),Bt.push(De),De),he=new we(1,.62,.25),pe=new we(.6,.78,1),fe=(De,rt,Ze,je,it,et,qt)=>{let en=new ut(new Di(1,1).rotateX(-jt/2),new Jn({map:Lt,color:qt?"#000":je,transparent:!0,opacity:it,blending:qt?void 0:Mn,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));return en.scale.set(Ze*2,1,Ze*2),en.position.set(De,xn(De,rt)+(qt?.008:.016),rt),qt||I.push([en.material,it,et,0,en.position]),W(en,qt?1:2)},se=(De,rt,Ze,je,it)=>{let et=new Ps(new fs({map:Lt,color:Ze,blending:Mn,depthWrite:!1,fog:!1,transparent:!0,opacity:je}));return et.position.set(...De),et.scale.set(rt,rt,1),I.push([et.material,je,it,0,et.position]),W(et,3)},ot=(De,rt,Ze,je,it,et,qt)=>{let en=new ut(new Di(1,1).translate(0,.5,0),new xt({uniforms:{uT:ke,uS:{value:qt*.37},uK:{value:et},uC:{value:it}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:Cv,transparent:!0,blending:Mn,depthWrite:!1,side:pn,fog:!1}));return en.scale.set(je*.9,je,1),en.position.set(Ze[0],Ze[1],Ze[2]),en.userData={id:De,fact:rt},en.renderOrder=4,r.add(en),y.push(en),Bt.push(en),K.push({m:en,k:qt,a:null}),en};Ut(ie[0],ie[2])&&fe(ie[0],ie[2],.9,0,.6,0,!0),Ce.forEach(([,De])=>{j&&!De[5]&&Math.max(...De[2])<3&&De[1][1]<.4&&Ut(De[1][0],De[1][2])&&fe(De[1][0],De[1][2],Math.max(De[2][0],De[2][2])*.8+.2,0,.5,0,!0)}),B.forEach(([De,rt,Ze,je,it,et],qt)=>{let en=xn(et[0],et[2]),vn=et[1]-en,wi=Math.max(je[1]*1.3,.3);if(ot(De,rt,[et[0],et[1]-je[1]*.4,et[2]],wi,it,1.3,qt),se(et,Math.max(2.2,je[1]*5),it.clone().multiplyScalar(.8),.4,qt),fe(et[0],et[2],Math.min(4.2,1.3+vn*.9),it.clone().multiplyScalar(.8),.38,qt),vn>.45){let Gt=new xt({uniforms:{uC:{value:it.clone()},uK:{value:.3}},vertexShader:"varying vec3 vN,vP;varying float vv;void main(){vv=uv.y;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uC;uniform float uK;varying vec3 vN,vP;varying float vv;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.3);gl_FragColor=vec4(uC*e*pow(vv,1.4)*uK,1.);}",transparent:!0,blending:Mn,depthWrite:!1,side:pn,fog:!1}),St=new ut(new Ii(.08,Math.min(3.4,vn*.5+.5),vn,32,1,!0).translate(0,-vn/2,0),Gt);St.position.set(et[0],et[1],et[2]),I.push([Gt.uniforms.uK,.3,qt,1,St.position]),W(St,2)}Z.push([new k(...et),1])}),F.forEach(([De,rt,Ze,je,it],et)=>{let qt=Ze[1]+je[1]/2,en=je[1]*2.6;ot(De,rt,[Ze[0],qt-en*.3,Ze[2]],en,it,1.5,et+5),se([Ze[0],qt,Ze[2]],en*2.4,it.clone().multiplyScalar(.7),.3,et+5),fe(Ze[0],Ze[2],1.2,it.clone().multiplyScalar(.8),.4,et+5);for(let vn=0;vn<5;vn++)En(Ze[0]+(at()-.5)*.3,qt+at()*.5,Ze[2]+(at()-.5)*.3,7,.05,he.clone().multiplyScalar(2));Z.push([new k(Ze[0],qt,Ze[2]),.7])}),Z.sort((De,rt)=>De[0].distanceTo(new k(...ie))-rt[0].distanceTo(new k(...ie))),Z.length=Math.min(Z.length,4);{let De=[],rt=[],Ze=[],je=(it,et)=>{De.push(...it),rt.push(et.r,et.g,et.b),Ze.push(1)};if(B.forEach(([,,,,it,et])=>je(et,it.clone().multiplyScalar(1.2))),F.forEach(([,,it,et,qt])=>je([it[0],it[1]+et[1]/2,it[2]],qt.clone().multiplyScalar(1.2))),Vn.forEach(([it,et])=>je([it[0],it[1]+et[1]/2,it[2]],new we(1.4,1.5,1.6))),Ze.length){let it=new Jt;it.setAttribute("position",new $e(De,3)),it.setAttribute("aC",new $e(rt,3)),it.setAttribute("aZ",new $e(Ze,1));let et=new Ds(it,new xt({uniforms:Wa,vertexShader:"attribute vec3 aC;attribute float aZ;uniform float uSz;varying vec3 vC;void main(){vC=aC;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=uSz*aZ;}",fragmentShader:"varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;float a=exp(-r*r*3.)*(1.-smoothstep(.8,1.,r));gl_FragColor=vec4(mix(vC,vec3(1.),a*a*.6)*a*1.4,1.);}",transparent:!0,blending:Mn,depthWrite:!1,depthTest:!1}));et.frustumCulled=!1,et.renderOrder=6,r.add(et),Bt.push(et),ns=et}}for(let De=0;De<90;De++)En(ie[0]+(at()-.5)*50,Ln+.4+at()*5,ie[2]+(at()-.5)*60,6,.1+.05*at(),(at()<.8?he:pe).clone().multiplyScalar(2.6));for(let De=0;De<520;De++)En(ie[0]+(at()-.5)*70,Ln+at()*.5,ie[2]+(at()-.5)*80,7,.05+.05*at(),(at()<.7?pe:he).clone().multiplyScalar(1.8))}let un=dn>.5?new we(1.2,.85,.5):new we(.5,.55,.7);for(let W=0;W<220;W++)En(ie[0]+(at()-.5)*28,Ln+.4+at()*6,ie[2]+(at()-.5)*28,3,.05+at()*.05,un.clone().multiplyScalar(1.4));qn.forEach(W=>{for(let he=0;he<24;he++)En(W.p[0]+(at()-.5)*8,W.p[1]-.8+(at()-.5)*3.6,W.p[2]+(at()-.5)*8,3,.06,un.clone().multiplyScalar(1.2))}),Xn={c:[(Xe[0]+Xe[1])/2,0,(We[0]+We[1])/2],r:Math.max(10,Math.hypot(Xe[1]-Xe[0],We[1]-We[0])*.5+3)};let sn=T(new ln({vertexColors:!0,...h(),roughness:.95,normalScale:new Fe(2.2,2.2),envMapIntensity:.7}),{gold:!0});if(!Ye){let W=Qt(Xe,We,Mt,oe),he=new ut(W,sn);he.receiveShadow=!0,he.userData={id:"ground"},r.add(he);let pe=T(new ln({color:oe.clone().multiplyScalar(.88),...h(),roughness:1})),fe=new ut(z(new Di(2400,2400,1,1).rotateX(-jt/2).translate(0,-.06,0)),pe);fe.receiveShadow=!0,r.add(fe)}if(Ye){[[-34,.008,1,.4],[-28,.014,.85,.5],[-24,.022,.75,.56]].forEach(([he,pe,fe,se],ot)=>{let De=new ut(new Di(6e3,6e3).rotateX(-jt/2),new xt({uniforms:{uT:ke,uS:{value:pe},uA:{value:fe},uBase:{value:se},uHor:{value:N.uHor.value},uSun:N.uSun},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:Mv,transparent:!0,depthWrite:!1,fog:!1}));De.position.y=he,De.renderOrder=-4+ot,De.frustumCulled=!1,r.add(De),Bt.push(De),G.push(De)});let W=ec(11);for(let he=0;he<8;he++){let pe=he/8*jt*2+W()*.5,fe=700+W()*250,se=50+W()*70,ot=-22+W()*40,De=new we("#a89cc0").lerp(new we("#7a9a80"),.25).lerp(N.uHor.value,.55),rt=new Zn,Ze=new Jn({color:De,fog:!1,transparent:!0,opacity:.6,depthWrite:!1});rt.add(new ut(new gi(.5,16,8).scale(se,se*.1,se*.8),Ze),new ut(new Ls(.5,1,12).rotateX(jt).translate(0,-.5,0).scale(se*.9,se*.5,se*.7),Ze)),rt.position.set(ie[0]+Math.sin(pe)*fe,ot,ie[2]-Math.cos(pe)*fe),rt.renderOrder=-6,rt.traverse(je=>{je.renderOrder=-6,je.frustumCulled=!1}),r.add(rt),Bt.push(...rt.children)}}if(Vt.length){let W=new Jt;W.setAttribute("position",new $e(Vt.flatMap(()=>[0,0,0]),3)),W.setAttribute("aA",new $e(Vt.flatMap(([pe])=>pe),3)),W.setAttribute("aB",new $e(Vt.flatMap(([,pe])=>pe),3)),W.setAttribute("aS",new $e(Vt.map(([,,pe])=>pe),1));let he=new Ds(W,new xt({uniforms:{uT:ke,uK:bt},vertexShader:bv,fragmentShader:wv,transparent:!0,depthWrite:!1,blending:Mn,fog:!1}));he.frustumCulled=!1,he.renderOrder=5,r.add(he),Bt.push(he)}{let W=ie[1]+.9,he=(pe,fe)=>ue.some(({b:se})=>se[2]<=W&&se[3]>=W&&[...Array(10)].some((ot,De)=>{let rt=ie[0]+pe*(De+1)*.5,Ze=ie[2]+fe*(De+1)*.5;return rt>se[0]&&rt<se[1]&&Ze>se[4]&&Ze<se[5]}));Q=ue.some(({b:pe})=>pe[3]-pe[2]>=4&&pe[2]<=W&&pe[3]>=W&&ie[0]>pe[0]-.6&&ie[0]<pe[1]+.6&&ie[2]>pe[4]-.6&&ie[2]<pe[5]+.6)||[[1,0],[-1,0],[0,1],[0,-1]].filter(([pe,fe])=>he(pe,fe)).length>=3}if(!Ye){let W=(Ze,je)=>Wt(Ze,je,Mt),he=new we(1.5,1,.58);for(let Ze=0,je=0;Ze<5e3&&je<460;Ze++){let it=ie[0]+(at()-.5)*90,et=ie[2]+(at()-.5)*90,qt=W(it,et);(qt>.2||at()<.02)&&(En(it,qt+.05,et,4,.09+at()*.06,he),je++)}for(let Ze=0;Ze<220;Ze++){let je=ie[0]+(at()-.5)*50,it=ie[2]-4-at()*36;En(je,W(je,it)+.06,it,5,.1,new we(2.2,1.8,1))}let pe=new Is(new Pi(.5,14).rotateX(-jt/2),T(new ln({color:"#4a3050",alphaMap:st,transparent:!0,opacity:.9,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),36),fe=new mt,se=kn.avatar.facing*jt/180,ot=new k(0,1,0),De=Math.sin(se),rt=-Math.cos(se);for(let Ze=0;Ze<18;Ze++){let je=Ze%2?1:-1,it=ie[0]-De*(1.1+Ze*.85)-rt*je*.2,et=ie[2]-rt*(1.1+Ze*.85)+De*je*.2,qt=ie[1]+.04,en=-se+je*.08;for(let vn=0;vn<2;vn++){let wi=vn?.14:.27,Gt=vn?.1:.13,St=vn?-.17:.07;fe.makeRotationY(en).setPosition(it+De*St,qt,et+rt*St),fe.scale(new k(Gt,1,wi)),pe.setMatrixAt(Ze*2+vn,fe)}}pe.renderOrder=2,r.add(pe),Bt.push(pe),[[380,9,"#d0a8a0",1],[620,16,"#b890a8",2],[920,26,"#9c80b4",3]].forEach(([Ze,je,it,et])=>{let qt=[];for(let St=0;St<=96;St++){let Nn=St/96*jt*2,Xa=je*(.55+.3*Math.sin(Nn*5+et*2)+.15*Math.sin(Nn*13+et));qt.push(ie[0]+Math.sin(Nn)*Ze,-4,ie[2]-Math.cos(Nn)*Ze,ie[0]+Math.sin(Nn)*Ze,Xa,ie[2]-Math.cos(Nn)*Ze)}let vn=[];for(let St=0;St<96;St++){let Nn=St*2;vn.push(Nn,Nn+1,Nn+2,Nn+1,Nn+3,Nn+2)}let wi=new Jt;wi.setAttribute("position",new $e(qt,3)),wi.setIndex(vn);let Gt=new ut(wi,new Jn({color:new we(it).multiplyScalar(dn>.5?1:.15),fog:!1,side:pn}));Gt.frustumCulled=!1,r.add(Gt),Bt.push(Gt)})}let gn=new Jt;gn.setAttribute("position",new $e(An.pos,3)),gn.setAttribute("aS",new $e(An.s,1)),gn.setAttribute("aK",new $e(An.k,1)),gn.setAttribute("aZ",new $e(An.z,1)),gn.setAttribute("aC",new $e(An.c,3)),bs={uT:{value:2},uK:{value:400},uD:{value:dn},uSun:N.uSun},Si=new Ds(gn,new xt({uniforms:bs,vertexShader:Av,fragmentShader:Ev,transparent:!0,depthWrite:!1,blending:Mn})),Si.frustumCulled=!1,r.add(Si),Bt.push(Si);let fn=dn>=.5,bi=new k(...Ha(fn?N.uSun.value.toArray():Rf));ge.color.set(fn?"#ffc07a":"#9ab4ff"),ge.intensity=fn?6.5:1.3,ge.userData.dir=bi,ne.color.set(fn?"#b8a2ee":"#4a5aa8"),ne.groundColor.set(fn?"#9a7a78":"#14142a"),ne.intensity=fn?1.35:.85,ft.strength=fn?.3:.8,ft.threshold=fn?1.8:.9,ft.radius=.75,n.environmentIntensity=fn?.8:.5,re?.dispose(),ye.visible=!0,re=R.fromScene(a,0,.1,10),n.environment=re.texture,rs=!0}function J(){let P=zi=="overview",L=P?Xn.c:[Lr.at[0],0,Lr.at[2]-6],H=P?Math.min(Xn.r*1.1,160):46,ae=ge.userData.dir||new k(...Ha(Mh));ge.position.set(L[0]+ae.x*400,L[1]+ae.y*400,L[2]+ae.z*400),ge.target.position.set(...L),ge.target.updateMatrixWorld();let ce=ge.shadow.camera;ce.left=-H,ce.right=H,ce.top=H,ce.bottom=-H,ce.near=20,ce.far=800,ce.updateProjectionMatrix(),ge.shadow.needsUpdate=!0,Mi.forEach(be=>be.l.shadow.needsUpdate=!0),rs=!1}function Ue(P,L){Me.w==P&&Me.h==L||(Me.w=P,Me.h=L,t.setSize(P,L,!1),de.uniforms.aspect.value=P/L,Be.setSize(P,L),s.aspect=P/L,s.updateProjectionMatrix(),tc.uniforms.uA.value=Pf.uniforms.uA.value=P/L,Je.uniforms.uA.value=Ne.uniforms.uA.value=P/L)}let Ge=(P,L)=>(1+.1*Math.sin(L*9+P*1.7+Math.sin(L*3+P)*2)+.05*Math.sin(L*23+P*5))*(1+.1*Math.sin(L*5.3+P*2)),Le=2;function Oe(P=2,L=!1){if(!kn)return;let H=L?0:Math.min(.2,Math.max(0,P-Le));Le=P,Nr=P;let ae=i.clientWidth||i.width,ce=i.clientHeight||i.height,{at:be,facing:Pe}=kn.avatar,oe=Pe*jt/180,Ce=zi=="overview";Ue(ae,ce);let ie=[Math.sin(oe),0,-Math.cos(oe)],Xe=[-ie[2],0,ie[0]];ni=Ce?{position:[Xn.c[0]-ie[0]*Xn.r,Xn.r*.9,Xn.c[2]-ie[2]*Xn.r],target:[Xn.c[0],0,Xn.c[2]]}:{position:be.map((Ie,It)=>Ie-ie[It]*6.5+Xe[It]*1.3+(It==1)*3.4),target:be.map((Ie,It)=>Ie+ie[It]*9+(It==1)*.8)};let We=ni.position.map((Ie,It)=>Ie+[Math.sin(P*.4)*.14,Math.sin(P*.31)*.09,Math.cos(P*.37)*.14][It]),Mt=ni.target.map((Ie,It)=>Ie+[Math.cos(P*.3)*.12,Math.sin(P*.23)*.08,0][It]);s.position.set(...We),s.lookAt(...Mt),s.rotateZ(Math.sin(P*.27)*.006),s.updateMatrixWorld(),s.updateProjectionMatrix(),rs&&J(),Hs.forEach(Ie=>Ie.visible=!Ce),E.forEach(Ie=>Ie.emissiveIntensity=Ce?.9:0),m.uRim.value=Ce?1:0,m.uRimC.value.set(dn>.5?"#ffc98a":"#7aa8ff"),ss.visible=Ce,ns&&(ns.visible=Ce,Wa.uSz.value=ce*.013),Mi.forEach((Ie,It)=>Ie.l.intensity=Ie.b*Ge(It,P)),w.forEach(Ie=>Ie.emissiveIntensity=Ie.userData.b*Ge(0,P)),D&&(I.forEach(([Ie,It,hn,zt,mn])=>{let Vn=It*(.85+.15*Ge(hn,P))*(mn?.25+.75*_i(1.5,9,mn.distanceTo(s.position)):1);zt?Ie.value=Vn:Ie.opacity=Vn}),K.forEach(Ie=>{let It=Math.atan2(be[0]-Ie.m.position.x,be[2]-Ie.m.position.z);if(Ie.a==null||L)Ie.a=It;else{let hn=It-Ie.a;hn=Math.atan2(Math.sin(hn),Math.cos(hn)),Ie.a+=hn*Math.min(1,H*(2.2/(1+Ie.k*.15)))}Ie.m.rotation.y=Ie.a}),C.forEach(Ie=>{Ie.material.uniforms.uT.value=P,Ie.material.uniforms.uOv.value=Ce?1:0,Ie.getRenderTarget().setSize(Math.round(ae*.6),Math.round(ce*.6))})),r.children.forEach(Ie=>{Ie.userData.sway&&(Ie.rotation.z=Math.sin(P*.6+Ie.userData.sway)*.05)}),G.forEach(Ie=>Ie.position.set(We[0],Ie.position.y,We[2])),r.children.forEach(Ie=>{Ie.userData.isl&&(Ie.rotation.y=P*.02)}),q.forEach(([Ie,It,hn])=>{Ie.rotation.x=Math.sin(P*.7+hn)*.05,Ie.rotation.z=Math.sin(P*.53+1)*.03,It.emissiveIntensity=.12+.1*(.5+.5*Math.sin(P*1.3))});{let Ie=We,It=[be[0],be[1]+1,be[2]],hn=[It[0]-Ie[0],It[1]-Ie[1],It[2]-Ie[2]];ue.forEach(zt=>{let mn=!1;if(Q&&!Ce){let Vn=0,ki=1,qn=zt.b,hi=[qn[0]-.05,qn[2]-.05,qn[4]-.05],An=[qn[1]+.05,qn[3]+.05,qn[5]+.05];mn=!0;for(let at=0;at<3&&mn;at++)if(Math.abs(hn[at])<1e-6)(Ie[at]<hi[at]||Ie[at]>An[at])&&(mn=!1);else{let En=(hi[at]-Ie[at])/hn[at],Dn=(An[at]-Ie[at])/hn[at];En>Dn&&([En,Dn]=[Dn,En]),Vn=Math.max(Vn,En),ki=Math.min(ki,Dn),Vn>ki&&(mn=!1)}}zt.g=L?+mn:zt.g+(+mn-zt.g)*(1-Math.exp(-Math.max(H,.016)*7)),zt.g>.01?(zt.gm||(zt.gm=T(new ln({color:me(zt.c,1.5),roughness:1,transparent:!0,depthWrite:!1}))),zt.gm.opacity=1-.88*zt.g,zt.me.material=zt.gm,zt.me.castShadow=!1):(zt.me.material=zt.m,zt.me.castShadow=!0)})}b.forEach(([Ie,It,hn])=>Ie.material.opacity=It*_i(.1,.5,Ie.position.distanceTo(s.position)/hn)),v.forEach(Ie=>Ie.offset.set(P*.012,P*.017)),N.uT.value=P,d.value=ke.value=Je.uniforms.uT.value=P,M.value=dn>.5?1:0,bt.value=ce*.5*s.projectionMatrix.elements[5],bs&&(bs.uT.value=P,bs.uK.value=bt.value),n.fog.density=Ce?.0016:X?.0028:dn>.5?.0055:.012,ne.intensity=(dn>=.5?.95:.85)*(Ce?1.3:1);let Kt=(dn>=.5?.5:1.1)*(Ce?1.1:1);L&&(an.k=1),t.toneMappingExposure=Kt*an.k;let gt=new k;s.getWorldDirection(gt);let Ye=Ie=>new k(...Ie).sub(s.position).dot(gt);de.uniforms.maxblur.value=X?.0025:.008,de.enabled=!Ce&&!D,de.uniforms.focus.value=(Ye(be)+Ye(Mt))/2,de.uniforms.aspect.value=s.aspect,nt.enabled=!0;let vt=N.uSun.value,Vt=s.position.clone().add(vt.clone().multiplyScalar(100)).project(s),Tt=gt.dot(vt);Je.uniforms.uSun.value.set(Vt.x*.5+.5,Vt.y*.5+.5),Je.enabled=dn>.5&&Tt>.05,Je.uniforms.uAmt.value=Math.min(1,Tt*3)*(Ce?.4:.45),Ne.uniforms.uT.value=P,Ne.uniforms.uD.value=dn,Ne.uniforms.uV.value=Ce?.35:.5,Ne.uniforms.uN.value=D?1:0;let Nt=Ne.uniforms.uLP.value;for(let Ie=0;Ie<4;Ie++){let It=Z[Ie];if(Nt[Ie].set(0,0,0),!D||!It)continue;let hn=It[0].clone().applyMatrix4(s.matrixWorldInverse),zt=-hn.z;if(zt<1.5)continue;let mn=It[0].clone().project(s),Vn=Math.max(Math.abs(mn.x),Math.abs(mn.y));Nt[Ie].set(mn.x*.5+.5,mn.y*.5+.5,It[1]*(1-_i(.9,1.15,Vn))*_i(1.5,6,zt)*(.9+.1*Ge(Ie,P)))}Be.render();let cn=D?Math.min(1.9,Math.max(.85,Math.pow(.03/Math.max(kt.lum,1e-4),.5))):1;L?(an.k=cn,t.toneMappingExposure=Kt*cn,Be.render()):an.k+=(cn-an.k)*(1-Math.exp(-H*1.2))}let lt=(P=>(...L)=>{try{return P(...L)}catch(H){e.push(String(H&&H.stack||H))}})(Oe);return i.addEventListener("webglcontextlost",P=>{P.preventDefault(),e.push("webgl context lost")}),{modes:["follow","overview"],async setWorld(P){Y(P),lt()},setCamera(P){P!=zi&&(zi=P,rs=!0),lt(Nr)},getCamera:()=>ni,async renderStill(P){P!=zi&&(zi=P,rs=!0),Oe(2,!0)},start(){cancelAnimationFrame(is),is=requestAnimationFrame(function P(L){lt(L/1e3),is=requestAnimationFrame(P)})},stop(){cancelAnimationFrame(is)},resize(){lt(Nr)},pick(P,L){let H=i.getBoundingClientRect();Ur.setFromCamera({x:(P-H.left)/H.width*2-1,y:-((L-H.top)/H.height*2-1)},s);let ae=Ur.intersectObjects(y,!1)[0];if(!ae)return null;let ce=ae.object.userData;return ce.ids?{id:ce.ids[ae.instanceId],fact:kn.things[ce.ids[ae.instanceId]]?.[4]??null}:{id:ce.id,fact:ce.fact??null}},errors:()=>e.splice(0),dispose(){cancelAnimationFrame(is),Be.dispose?.(),t.dispose()}}}async function sS(i,e){try{if(!document.createElement("canvas").getContext("webgl2"))throw Error("WebGL2 unavailable");return await Rv(i,e)}catch(t){console.warn("engine v10 falling back to v6:",t);let n=i;return i.getContext("webgl")||(n=i.cloneNode(!1),i.parentNode.insertBefore(n,i),i.style.display="none"),Cf(n,e)}}export{sS as createEngine};
