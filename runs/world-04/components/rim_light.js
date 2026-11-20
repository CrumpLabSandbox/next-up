// Soft amber point light. params i (intensity), r (range)
export function build(T,p,c){const g=new T.Group();const l=new T.PointLight('#ffb070',p.i||2,p.r||6);g.add(l);g.userData={l,i:p.i||2};return g}
export function update(o,t){o.userData.l.intensity=o.userData.i*(1+.05*Math.sin(t*5)*Math.sin(t*1.7))}