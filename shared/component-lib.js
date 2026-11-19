// three.js addons exposed to components as ctx.lib (same set in Node and the browser).
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';

export const COMPONENT_LIB = { mergeGeometries, mergeVertices, ImprovedNoise, SimplexNoise };
