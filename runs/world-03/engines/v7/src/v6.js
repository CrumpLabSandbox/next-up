// k: 0 lit solids, 1 soft discs + light shafts, 2 additive points, 3 sky, 4 post (bloom), 5 shadow depth.
// c.a on meshes = material (0 stone, 1 emissive, 2 flagstone top, 3 soft disc, 5 terrain, 6 liquid, 7 contact shadow, 8 masonry/shaft, 11..14 emissive that sways, id = m-11)
// shadows: D0 = moon (ortho, 1024), D1 = atlas of up to 4 point lights x 6 cube faces (4 cols x 6 rows of 512 px). Shadow-pass basis: Lr,Lu (right/up), Lf forward, Lo origin, Lq = (far, perspective)
const VS = `attribute vec3 p,n,o;attribute vec4 c;uniform vec3 P,X,Y,Z,Lr,Lu,Lf,Lo;uniform vec4 Sw[4],S;uniform vec2 Lq;uniform float k,V;varying vec3 w,N;varying vec4 C;
void main(){float t=S.z,f=S.x,a=n.y*40.,h=fract(t*.5+n.y),s=n.x;vec3 q=p+o;N=n;C=c;
if(k>4.5&&k<5.5){vec3 d=q-Lo;float z=dot(d,Lf),y=mix(1.,z,Lq.y),zn=mix(z/Lq.x*2.-1.,(Lq.x+.1)/(Lq.x-.1)-.2*Lq.x/((Lq.x-.1)*max(z,.01)),Lq.y);w=q;C=vec4(z/Lq.x,0,0,0);gl_Position=vec4(dot(d,Lr),dot(d,Lu),zn*y,y);return;}
if(k>2.5&&k<4.5||k>6.5){w=Z+(X*p.x*S.y+Y*p.y)/f;gl_Position=vec4(p.xy,0,1);return;}
if(k>1.5&&k<2.5){
if(n.z>1.5){q+=vec3(sin(t*.2+a),sin(t*.17+a*1.3)*.6,cos(t*.23+a*.7))*1.5;C.a*=.5+.5*sin(t*1.5+a);}
else if(n.z>.5){q+=vec3(sin(a)*h*.6+sin(t*3.+a)*.1,.3-h*.8,cos(a*1.3)*h*.6);C.a*=(1.-h)*(.6+.4*sin(t*20.+a));}
else s*=1.+.1*sin(t*9.)+V*1.6;}
else if((k<.5||k>5.5)&&c.a>10.5){vec4 v=Sw[int(c.a-10.5)];vec3 r=q-v.xyz;q.xz-=r.y*vec2(sin(t*.6+v.w)*.06,cos(t*.5+v.w*1.7)*.05);}
w=q;vec3 d=q-P;float z=dot(d,Z);
gl_Position=vec4(dot(d,X)*f/S.y,dot(d,Y)*f,z*1.0001-.2,z);gl_PointSize=s*400.*S.w/z;}`;
const FS = `precision highp float;precision highp sampler2D;uniform vec3 P,H,G,Md,Z,Lp[4],Lk[4],Mr,Mu,Mf,Mo,Q[4],Qc[4];uniform vec2 Mq,Lq,Dr;uniform vec4 S,Ra[2],Rb[2];uniform float k,V,Bm;uniform sampler2D D0,D1,T,Ba,Bb,Dp;varying vec3 w,N;varying vec4 C;
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
gl_FragColor=vec4(mix(mc(),o,f),1);}`;

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const nm = (a) => a.map((x) => x / Math.hypot(...a));
const sub = (a, b) => a.map((x, i) => x - b[i]);
const PI = Math.PI, MD = nm([0.55, 0.55, -0.4]);
const sm = (a, b, x) => ((x = Math.min(1, Math.max(0, (x - a) / (b - a)))), x * x * (3 - 2 * x));
const bs = (z) => { const x = nm([-z[2], 0, z[0]]); return [x, [-x[2] * z[1], x[2] * z[0] - x[0] * z[2], x[0] * z[1]]]; };

function tri(o, a, b, e, c, m, C, ns) {
  if (!ns) {
    const u = sub(b, a), v = sub(e, a), n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    if (Math.hypot(...n) < 1e-6) return;
    const s = n.reduce((t, q, i) => t + q * (a[i] - C[i]), 0) < 0 ? -1 : 1;
    ns = [0, 0, 0].map(() => n.map((q) => q * s));
  }
  [a, b, e].map((p, i) => o.push(...p, ...ns[i], ...c, m));
}

function flat(o, x, y, z, rx, rz, c, m) {
  for (const [u, v] of [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]]) o.push(x + u * rx, y, z + v * rz, u, 0, v, ...c, m);
}

function mesh(s, [x, y, z], [w, h, d], c, m) {
  const o = [], C = [x, y + h * 0.3, z], T = (a, b, e, n) => tri(o, a, b, e, c, m, C, n);
  w /= 2; d /= 2;
  if (s == 'cone') {
    const R = (i) => [x + Math.cos((i * PI) / 8) * w, y, z + Math.sin((i * PI) / 8) * d], N = (i) => [Math.cos((i * PI) / 8), 0.5, Math.sin((i * PI) / 8)], D = [0, -1, 0];
    for (let i = 0; i < 16; i++) T(R(i), R(i + 1), [x, y + h, z], [N(i), N(i + 1), N(i + 0.5)]), T(R(i), R(i + 1), [x, y, z], [D, D, D]);
  } else if (s == 'ball') {
    const S = (i, j) => [Math.sin((i * PI) / 10) * Math.cos((j * PI) / 8), Math.cos((i * PI) / 10), Math.sin((i * PI) / 10) * Math.sin((j * PI) / 8)];
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 16; j++) {
        const u = [S(i, j), S(i + 1, j), S(i + 1, j + 1), S(i, j + 1)], p = u.map((v) => [x + v[0] * w, y + h / 2 + (v[1] * h) / 2, z + v[2] * d]);
        T(p[0], p[1], p[2], [u[0], u[1], u[2]]); T(p[0], p[2], p[3], [u[0], u[2], u[3]]);
      }
  } else {
    let P = [...Array(8)].map((_, i) => [x + (i & 1 ? w : -w), y + (i & 2 ? h : 0), z + (i & 4 ? d : -d)]);
    if (s == 'ramp') P = P.map((p, i) => (i & 4 ? p : [p[0], y, p[2]]));
    for (const f of [[0, 1, 3, 2], [4, 5, 7, 6], [0, 1, 5, 4], [2, 3, 7, 6], [0, 2, 6, 4], [1, 3, 7, 5]]) T(P[f[0]], P[f[1]], P[f[2]]), T(P[f[0]], P[f[2]], P[f[3]]);
  }
  return o;
}

// light shafts below a ceiling strip: cross-section sheets every 2.2 m plus one long curtain. vertex n = (across -1..1, down 0..1, intensity), m = 8
function shaft(o, [x, y, z], [w, , d], c) {
  const ax = d > w, len = ax ? d : w, hw = (ax ? w : d) / 2 + 0.15, sp = y * 0.32, Y = 0.03,
    V = (a) => o.push(a[0], a[1], a[2], a[3], a[4], 0.3, ...c, 8),
    q = (a, b, e, f) => [a, b, e, a, e, f].map(V);
  for (let a = -len / 2 + 1; a < len / 2; a += 2.2) {
    const P = (s, py, u, v) => (ax ? [x + s, py, z + a, u, v] : [x + a, py, z + s, u, v]);
    q(P(-hw, y, -1, 0), P(hw, y, 1, 0), P(hw + sp, Y, 1, 1), P(-hw - sp, Y, -1, 1));
  }
  const E = (s, py, v) => (ax ? [x, py, z + (s * len) / 2, 0, v] : [x + (s * len) / 2, py, z, 0, v]);
  q(E(-1, y, 0), E(1, y, 0), E(1, Y, 1), E(-1, Y, 1));
}

// heightfield: dunes + grit, flat (0) near anything placed, tapering to 0 at the grid edge. fp = footprints [x, z, rx, rz]
function terrain(X, Z, fp, c) {
  const o = [], M = 60, x0 = X[0] - M, z0 = Z[0] - M, nx = Math.ceil((X[1] + M - x0) / 2), nz = Math.ceil((Z[1] + M - z0) / 2), H = [];
  for (let j = 0; j <= nz; j++)
    for (let i = 0; i <= nx; i++) {
      const x = x0 + i * 2, z = z0 + j * 2, d = Math.min(...fp.map(([a, b, r, s]) => Math.hypot(Math.max(Math.abs(x - a) - r, 0), Math.max(Math.abs(z - b) - s, 0))));
      H.push((Math.sin(x * 0.27 + Math.sin(z * 0.17) * 2) * 0.5 + Math.sin(z * 0.23 - x * 0.12 + 1) * 0.4 + Math.sin(x * 0.7 + z * 0.6) * 0.08 + Math.sin(x * 1.3 - z * 1.1) * 0.04) * (1 + 1.6 * sm(10, 50, d)) * sm(2.5, 9, d) * sm(0, 30, Math.min(i, nx - i, j, nz - j) * 2));
    }
  const g = (i, j) => H[Math.min(nz, Math.max(0, j)) * (nx + 1) + Math.min(nx, Math.max(0, i))], v = (i, j) => [x0 + i * 2, g(i, j), z0 + j * 2, ...nm([g(i - 1, j) - g(i + 1, j), 4, g(i, j - 1) - g(i, j + 1)])];
  for (let j = 0; j < nz; j++)
    for (let i = 0; i < nx; i++)
      for (const [a, b] of [[0, 0], [1, 0], [1, 1], [0, 0], [1, 1], [0, 1]]) { const q = v(i + a, j + b); o.push(q[0], q[1], q[2], q[3], q[4], q[5], ...c, 5); }
  return o;
}

export async function createEngine(cv) {
  const gl = cv.getContext('webgl'), pr = gl.createProgram(), E = [], ext = gl.getExtension('ANGLE_instanced_arrays');
  [VS, FS].map((s, i) => { const h = gl.createShader(35633 - i); gl.shaderSource(h, s); gl.compileShader(h); gl.attachShader(pr, h); gl.getShaderParameter(h, 35713) || E.push(gl.getShaderInfoLog(h)); });
  [...'pnco'].map((a, i) => gl.bindAttribLocation(pr, i, a));
  gl.linkProgram(pr); gl.getProgramParameter(pr, 35714) || E.push(gl.getProgramInfoLog(pr)); gl.useProgram(pr); gl.bindBuffer(34962, gl.createBuffer());
  [...'pnc'].map((a, i) => { gl.enableVertexAttribArray(i); gl.vertexAttribPointer(i, i < 2 ? 3 : 4, 5126, 0, 40, i * 12); });
  gl.depthFunc(515);
  const loc = (n) => gl.getUniformLocation(pr, n), u = (n, ...v) => gl['uniform' + v.length + 'f'](loc(n), ...v), s = () => cancelAnimationFrame(raf),
    uv = (n, a, k = 3) => gl['uniform' + k + 'fv'](loc(n), new Float32Array(a)),
    bt = (i, t) => (gl.activeTexture(33984 + i), gl.bindTexture(3553, t)),
    mk = (W, H, f, tex, rb, fbo, ty = 5121, dp = 1) => {
      bt(3, tex); gl.texImage2D(3553, 0, 6408, W, H, 0, 6408, ty, null);
      [[10240, f], [10241, f], [10242, 33071], [10243, 33071]].map(([a, b]) => gl.texParameteri(3553, a, b));
      gl.bindFramebuffer(36160, fbo); gl.framebufferTexture2D(36160, 36064, 3553, tex, 0);
      if (dp) { gl.bindRenderbuffer(36161, rb); gl.renderbufferStorage(36161, 33189, W, H); gl.framebufferRenderbuffer(36160, 36096, 36161, rb); }
    },
    mkn = () => [gl.createTexture(), gl.createRenderbuffer(), gl.createFramebuffer()],
    SM = [mkn(), mkn()], SC = mkn(), DP = mkn(), BA = [mkn(), mkn()], BB = [mkn(), mkn()], FQ = 512, bd = (...t) => [2, 3, 4, 5].map((i, j) => bt(i, t[j] || null));
  mk(1024, 1024, 9728, ...SM[0]); mk(FQ * 4, FQ * 6, 9728, ...SM[1]);
  ['D0', 'D1', 'T', 'Ba', 'Bb', 'Dp'].map((n, i) => gl.uniform1i(loc(n), i));
  // HDR scene target: half float, then float, then plain 8-bit as a fallback
  let HT = 5121;
  for (const [ex, ty] of [[['OES_texture_half_float', 'EXT_color_buffer_half_float', 'OES_texture_half_float_linear'], 36193], [['OES_texture_float', 'WEBGL_color_buffer_float', 'OES_texture_float_linear'], 5126]]) {
    ex.map((e) => gl.getExtension(e));
    mk(4, 4, 9729, ...SC, ty);
    if (gl.checkFramebufferStatus(36160) == 36053) { HT = ty; break; }
  }
  let w, view = 'follow', cam, n, LT = [], B, raf, sw = 0, sh = 0, GR = [], pass0, moon;

  // instanced groups: bind per-instance offsets (attribute 3) from the shared buffer
  const gd = () => ext && GR.map((g) => {
    gl.enableVertexAttribArray(3); gl.vertexAttribPointer(3, 3, 5126, 0, 12, g.io * 4); ext.vertexAttribDivisorANGLE(3, 1);
    ext.drawArraysInstancedANGLE(4, g.f, g.n, g.c); ext.vertexAttribDivisorANGLE(3, 0); gl.disableVertexAttribArray(3);
  });

  // static shadow maps, rendered once per setWorld: moon + 6 cube faces for each point light
  function shadows() {
    gl.disable(3042); gl.enable(2929); gl.depthMask(1); u('k', 5); bt(0, null); bt(1, null);
    gl.bindFramebuffer(36160, SM[1][2]); gl.viewport(0, 0, FQ * 4, FQ * 6); gl.clearColor(1, 0, 0, 1); gl.clear(16640);
    const run = (fbo, vx, vy, vs, o, f, r, up, far, ps) => {
      gl.bindFramebuffer(36160, fbo); gl.viewport(vx, vy, vs, vs);
      u('Lr', ...r); u('Lu', ...up); u('Lf', ...f); u('Lo', ...o); u('Lq', far, ps);
      gl.drawArrays(4, 6, n[0] + n[1]); gd();
    };
    gl.bindFramebuffer(36160, SM[0][2]); gl.clearColor(1, 0, 0, 1); gl.clear(16640);
    run(SM[0][2], 0, 0, 1024, ...moon);
    LT.map(([p], li) => {
      for (let f = 0; f < 6; f++) {
        const a = f >> 1, e = (i) => [0, 0, 0].map((_, j) => +(j == i)), fw = e(a).map((v) => v * (f & 1 ? -1 : 1)), idx = li * 6 + f;
        run(SM[1][2], (idx % 4) * FQ, ((idx / 4) | 0) * FQ, FQ, p, fw, e((a + 1) % 3), e((a + 2) % 3), 50, 1);
      }
    });
  }

  function draw(t = 2) {
    if (!w) return;
    const W = cv.clientWidth || cv.width, H = cv.clientHeight || cv.height, { at, facing } = w.avatar, f = (facing * PI) / 180, ov = +(view == 'overview');
    if (cv.width != W || cv.height != H) (cv.width = W), (cv.height = H);
    if (sw != W || sh != H) {
      mk((sw = W), (sh = H), 9729, ...SC, HT); mk(W, H, 9728, ...DP);
      [BA, BB].map((b, i) => b.map((a) => mk(Math.ceil(W / 4 ** (i + 1)), Math.ceil(H / 4 ** (i + 1)), 9729, ...a, HT, 0)));
    }
    const fw = [Math.sin(f), 0, -Math.cos(f)], rt = [-fw[2], 0, fw[0]];
    cam = ov
      ? { position: [B.c[0] - fw[0] * B.r, B.r * 0.9, B.c[2] - fw[2] * B.r], target: [B.c[0], 0, B.c[2]] }
      : { position: at.map((a, i) => a - fw[i] * 6.5 + rt[i] * 1.3 + (i == 1) * 3.4), target: at.map((a, i) => a + fw[i] * 9 + (i == 1) * 0.8) };
    const P = cam.position.map((a, i) => a + [Math.sin(t * 0.4) * 0.1, Math.sin(t * 0.31) * 0.07, Math.cos(t * 0.37) * 0.1][i]),
      z = nm(cam.target.map((a, i) => a + [Math.cos(t * 0.3) * 0.12, Math.sin(t * 0.23) * 0.08, 0][i] - P[i])),
      [x, y] = bs(z);
    u('P', ...P); u('X', ...x); u('Y', ...y); u('Z', ...z); u('H', ...rgb(w.sky || '#2a2a4a')); u('S', 1.8, W / H, t, H / 720); u('V', ov);
    const qa = [], qc = [];
    for (let i = 0; i < 4; i++) {
      const l = LT[i], p = l && l[0], c = l && l[1].map((v) => v / 4.5), d = p ? sub(p, P) : [0, 0, 0], z0 = p ? d.reduce((s, v, i) => s + v * z[i], 0) : 0, nx = d.reduce((s, v, i) => s + v * x[i], 0) * 1.8 / (W / H) / z0, ny = d.reduce((s, v, i) => s + v * y[i], 0) * 1.8 / z0;
      qa.push(nx / 2 + 0.5, ny / 2 + 0.5, p && z0 > 0.5 ? sm(1.8, 0.8, Math.hypot(nx, ny)) * Math.min(1, 50 / z0 + 0.35) : 0); qc.push(...(c || [0, 0, 0]));
    }
    uv('Q', qa); uv('Qc', qc);
    const solids = () => {
      if (ov) gl.drawArrays(4, 6, n[0]), gl.drawArrays(4, 6 + n[0] + n[1], n[2] + n[3]);
      else gl.drawArrays(4, 6, n[0] + n[1] + n[2] + n[3]);
      gd();
    };
    bt(0, SM[0][0]); bt(1, SM[1][0]); bd();
    // view-depth pass for SSAO and outlines
    gl.bindFramebuffer(36160, DP[2]); gl.viewport(0, 0, W, H); gl.clearColor(1, 0, 0, 1); gl.clear(16640);
    gl.disable(3042); gl.enable(2929); gl.depthMask(1); u('k', 6); solids();
    gl.bindFramebuffer(36160, SC[2]); gl.viewport(0, 0, W, H); gl.clearColor(0, 0, 0, 1);
    gl.clear(16640);
    gl.disable(2929); gl.depthMask(0); gl.enable(3042); gl.blendFunc(770, 771);
    u('k', 3); gl.drawArrays(4, 0, 6);
    gl.enable(2929); gl.depthMask(1);
    u('k', 0); solids();
    gl.depthMask(0);
    const o5 = 6 + n[0] + n[1] + n[2] + n[3];
    u('k', 1); gl.drawArrays(4, o5, n[4]);
    gl.blendFunc(770, 1); u('k', 2); gl.drawArrays(0, o5 + n[4], n[5]);
    u('k', 1); gl.drawArrays(4, o5 + n[4] + n[5], n[6]);
    // bloom chain: bright-pass + blur at 1/4 res, then a wider blur at 1/16 res
    gl.disable(2929); gl.disable(3042); u('k', 7);
    const bl = (src, tg, dx, dy, bm, d) => {
      const wd = Math.ceil(W / d), hd = Math.ceil(H / d);
      gl.bindFramebuffer(36160, tg[2]); gl.viewport(0, 0, wd, hd); bd(src); u('Bm', bm); u('Dr', dx, dy); gl.drawArrays(4, 0, 6);
    };
    bl(SC[0], BA[1], 2 / W, 0, 1, 4); bl(BA[1][0], BA[0], 0, 1 / Math.ceil(H / 4), 0, 4);
    bl(BA[0][0], BB[1], 3 / Math.ceil(W / 4), 0, 0, 16); bl(BB[1][0], BB[0], 0, 1.5 / Math.ceil(H / 16), 0, 16);
    gl.bindFramebuffer(36160, null); gl.viewport(0, 0, W, H); bd(SC[0], BA[0][0], BB[0][0], DP[0]); u('Dr', 1 / W, 1 / H);
    u('k', 4); gl.drawArrays(4, 0, 6);
    gl.depthMask(1);
  }

  return {
    modes: ['follow', 'overview'],
    setWorld(W) {
      w = W;
      const gc = rgb(w.ground || '#12121c'), A = [], CE = [], M = [], F = [], P = [], SH = [], { at } = w.avatar, extra = [['ball', [at[0], 0, at[2]], [0.64, 1.5, 0.52], '#7a5a35'], ['ball', [at[0], 1.4, at[2]], [0.3, 0.32, 0.3], '#8a6a40']],
        th = Object.values(w.things), X = [at[0], at[0]], Z = [at[2], at[2]], fp = [[at[0], at[2], 0.5, 0.5]], N0 = [0], gl2 = th.filter((t) => t[5] == 2), SW = [], GM = {}, cnt = {},
        ky = (t) => t[0] + t[2] + t[3], ctr = (t) => t && [t[1][0], t[1][1] + t[2][1] / 2, t[1][2]], big = (c) => gl2.filter(c).sort((a, b) => b[2][0] * b[2][1] * b[2][2] - a[2][0] * a[2][1] * a[2][2])[0],
        d2 = (t) => Math.hypot(t[1][0] - at[0], t[1][2] - at[2]);
      th.map((t) => !t[5] && (cnt[ky(t)] = (cnt[ky(t)] || 0) + 1));
      // up to 4 shadow-casting point lights: every glow-1 thing (nearest the Wanderer first), then the orb and the warm doorway glow
      LT = th.filter((t) => t[5] == 1).sort((a, b) => d2(a) - d2(b)).slice(0, 4).map((t) => [ctr(t), rgb(t[3]).map((v) => v * 3.6)]);
      for (const [t, c] of [[big((t) => t[0] == 'ball' && rgb(t[3])[2] > rgb(t[3])[0]), [1.1, 1.8, 2.6]], [big((t) => t[0] == 'ball' && rgb(t[3])[0] - rgb(t[3])[2] > 0.3), [3, 2.1, 1]]]) t && LT.length < 4 && LT.push([ctr(t), c]);
      const gct = gl2.length ? gl2.reduce((a, t) => a.map((v, i) => v + t[1][i] / gl2.length), [0, 0, 0]) : [0, 1e4, 0];
      for (let [s, p, z, c, , g] of [...th, ...extra]) {
        const col = rgb(c), r = Math.max(z[0], z[2]) / 2;
        X[0] = Math.min(X[0], p[0] - r); X[1] = Math.max(X[1], p[0] + r); Z[0] = Math.min(Z[0], p[2] - r); Z[1] = Math.max(Z[1], p[2] + r);
        p[1] < 1 && fp.push([p[0], p[2], z[0] / 2, z[2] / 2]);
        if (s == 'disc') { flat(F, p[0], p[1] + 0.02, p[2], z[0] / 2, z[2] / 2, col, g == 2 ? 6 : 3); continue; }
        const lq = g == 2 && s == 'box' && z[1] < 0.15 && z[0] > 0.4 && z[2] > 0.4;
        if (!g && p[1] >= 0 && p[1] < 0.3 && s != 'ramp' && z[1] >= 0.12 && z[0] + z[2] < 12 && N0[0]++ < 80) flat(F, p[0], 0.025, p[2], z[0] * 0.5 + 0.5, z[2] * 0.5 + 0.5, [0, 0, 0], 7);
        if (g && !lq && s == 'box' && z[1] < 0.15) z = [z[0] < z[2] ? z[0] * 0.4 : z[0], z[1] * 0.5, z[2] <= z[0] ? z[2] * 0.4 : z[2]];
        const wall = !g && s == 'box' && Math.max(...z) >= 2.9 && z[1] >= 0.12, ceil = wall && p[1] >= 3 && z[1] <= 1.5 && z[0] > 5 && z[2] > 5,
          m = lq ? 6 : g ? (g == 1 && p[1] >= 1 && SW.length < 4 ? 11 + SW.push([p[0], p[1] + z[1] + 0.35, p[2], SW.length * 1.3]) - 1 : 1) : wall ? 8 : z[1] < 0.12 && s == 'box' ? 2 : 0;
        if (g == 2 && s == 'box' && Math.min(z[0], z[2]) <= 0.4 && Math.max(z[0], z[2]) >= 3 && p[1] >= 3) shaft(SH, p, z, col.map((v) => v * 1.1));
        if (ext && !g && !wall && (s == 'box' || s == 'cone') && cnt[ky([s, p, z, c])] >= 3) {
          const k = ky([s, 0, z, c]) + m, G = GM[k] || (GM[k] = { m: mesh(s, [0, 0, 0], z, col, m), o: [] });
          G.o.push(...p); continue;
        }
        (g ? M : ceil ? CE : A).push(...mesh(s, p, z, col, m));
        if (g) {
          const q = [p[0], p[1] + z[1] / 2, p[2]];
          P.push(...q, g == 1 ? 2.5 : 1, 0, 0, ...col, 0.8);
          for (let i = 0; i < 22; i++) P.push(...q, 0.12, (i + 0.5) / 22, 1, ...col, 1);
        }
      }
      for (let i = 0; i < 90; i++) P.push(at[0] + Math.sin(i * 13) * 12, 3 + Math.sin(i * 29) * 2.5, at[2] + Math.sin(i * 47) * 12, 0.08, i * 0.37 + 0.1, 2, 0.54, 0.54, 0.58, 0.8);
      LT.map(([p], l) => { for (let i = 0; i < 28; i++) P.push(p[0] + Math.sin(i * 13 + l * 7) * 4, p[1] - 0.8 + Math.sin(i * 29 + l) * 1.8, p[2] + Math.sin(i * 47 + l * 3) * 4, 0.08, i * 0.53 + l, 2, 0.54, 0.54, 0.58, 0.9); });
      B = { c: [(X[0] + X[1]) / 2, 0, (Z[0] + Z[1]) / 2], r: Math.max(10, Math.hypot(X[1] - X[0], Z[1] - Z[0]) * 0.5 + 3) };
      const T = [...mesh('box', [0, -1.02, 0], [800, 1, 800], gc, 5), ...terrain(X, Z, fp, gc)],
        hf = Math.max(16, B.r * 0.9), mf = MD.map((v) => -v), [mr, mu] = bs(mf);
      moon = [B.c.map((v, i) => v - mf[i] * hf * 1.2), mf, mr.map((v) => v / hf), mu.map((v) => v / hf), hf * 2.4, 0];
      // reflections: the two longest glow-2 ceiling strips
      const st = gl2.filter((t) => t[0] == 'box' && Math.min(t[2][0], t[2][2]) <= 0.4 && Math.max(t[2][0], t[2][2]) >= 3 && t[1][1] >= 3).sort((a, b) => b[2][0] + b[2][2] - a[2][0] - a[2][2]).slice(0, 2),
        Ra = [], Rb = [];
      for (let i = 0; i < 2; i++) { const t = st[i]; Ra.push(...(t ? [t[1][0], t[1][2], t[2][0] / 2 + 0.1, t[2][2] / 2 + 0.1] : [0, 0, 0, 0])); Rb.push(...(t ? [t[1][1], ...rgb(t[3])] : [0, 0, 0, 0])); }
      uv('Ra', Ra, 4); uv('Rb', Rb, 4);
      uv('Lp', [0, 1, 2, 3].flatMap((i) => (LT[i] ? LT[i][0] : [0, 1e4, 0]))); uv('Lk', [0, 1, 2, 3].flatMap((i) => (LT[i] ? LT[i][1] : [0, 0, 0])));
      uv('Sw', [0, 1, 2, 3].flatMap((i) => SW[i] || [0, 1e4, 0, 0]), 4);
      u('Mo', ...moon[0]); uv('Mf', moon[1]); uv('Mr', moon[2]); uv('Mu', moon[3]); u('Mq', moon[4], 0); u('Md', ...MD); u('G', ...gct);
      const parts = [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]].flatMap(([a, b]) => [a, b, 0, (a + 1) / 2, (b + 1) / 2, 0, 0, 0, 0, 0]), secs = [parts, A, CE, M, T, F, P, SH];
      let nv = secs.reduce((s, a) => s + a.length, 0);
      const gs = Object.values(GM), tot = nv + gs.reduce((s, g) => s + g.m.length + g.o.length, 0), buf = new Float32Array(tot);
      let o = 0; secs.map((a) => { buf.set(a, o); o += a.length; });
      GR = gs.map((g) => { const r = { f: o / 10, n: g.m.length / 10, c: g.o.length / 3 }; buf.set(g.m, o); o += g.m.length; return r; });
      gs.map((g, i) => { GR[i].io = o; buf.set(g.o, o); o += g.o.length; });
      gl.bufferData(34962, buf, 35044);
      n = [A, CE, M, T, F, P, SH].map((a) => a.length / 10);
      shadows();
      draw();
    },
    setCamera(m) { view = m; draw(); },
    getCamera: () => cam,
    renderStill(v) { view = v; draw(); },
    start() { raf = requestAnimationFrame(function l(ms) { draw(ms / 1e3); raf = requestAnimationFrame(l); }); },
    stop: s,
    dispose: s,
    resize() { draw(); },
    errors: () => E.splice(0),
  };
}
