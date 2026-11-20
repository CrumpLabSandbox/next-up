// warm amber point light
export function build(T,p,ctx){const g=new T.Group();g.add(new T.PointLight('#ff9a3c',2,40,2));return g}