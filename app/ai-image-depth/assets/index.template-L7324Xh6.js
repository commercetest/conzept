function _mergeNamespaces(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(s,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="160",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035,WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,l=o.length;c<l;c++)o[c].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_lut[s&255]+_lut[s>>8&255]+_lut[s>>16&255]+_lut[s>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[r&255]+_lut[r>>8&255]+_lut[r>>16&255]+_lut[r>>24&255]).toLowerCase()}function clamp(s,e,t){return Math.max(e,Math.min(t,s))}function euclideanModulo(s,e){return(s%e+e)%e}function mapLinear(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function inverseLerp(s,e,t){return s!==e?(t-s)/(e-s):0}function lerp(s,e,t){return(1-t)*s+t*e}function damp(s,e,t,r){return lerp(s,e,1-Math.exp(-t*r))}function pingpong(s,e=1){return e-Math.abs(euclideanModulo(s,e*2)-e)}function smoothstep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function smootherstep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function randInt(s,e){return s+Math.floor(Math.random()*(e-s+1))}function randFloat(s,e){return s+Math.random()*(e-s)}function randFloatSpread(s){return s*(.5-Math.random())}function seededRandom(s){s!==void 0&&(_seed=s);let e=_seed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function degToRad(s){return s*DEG2RAD}function radToDeg(s){return s*RAD2DEG}function isPowerOfTwo$1(s){return(s&s-1)===0&&s!==0}function ceilPowerOfTwo(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function floorPowerOfTwo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function setQuaternionFromProperEuler(s,e,t,r,o){const c=Math.cos,l=Math.sin,h=c(t/2),p=l(t/2),f=c((e+r)/2),d=l((e+r)/2),i=c((e-r)/2),n=l((e-r)/2),a=c((r-e)/2),u=l((r-e)/2);switch(o){case"XYX":s.set(h*d,p*i,p*n,h*f);break;case"YZY":s.set(p*n,h*d,p*i,h*f);break;case"ZXZ":s.set(p*i,p*n,h*d,h*f);break;case"XZX":s.set(h*d,p*u,p*a,h*f);break;case"YXY":s.set(p*a,h*d,p*u,h*f);break;case"ZYZ":s.set(p*u,p*a,h*d,h*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function denormalize(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function normalize(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo:isPowerOfTwo$1,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize};class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(clamp(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),c=this.x-e.x,l=this.y-e.y;return this.x=c*r-l*o+e.x,this.y=c*o+l*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,r,o,c,l,h,p,f){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,l,h,p,f)}set(e,t,r,o,c,l,h,p,f){const d=this.elements;return d[0]=e,d[1]=o,d[2]=h,d[3]=t,d[4]=c,d[5]=p,d[6]=r,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,l=r[0],h=r[3],p=r[6],f=r[1],d=r[4],i=r[7],n=r[2],a=r[5],u=r[8],m=o[0],g=o[3],_=o[6],b=o[1],y=o[4],v=o[7],x=o[2],w=o[5],S=o[8];return c[0]=l*m+h*b+p*x,c[3]=l*g+h*y+p*w,c[6]=l*_+h*v+p*S,c[1]=f*m+d*b+i*x,c[4]=f*g+d*y+i*w,c[7]=f*_+d*v+i*S,c[2]=n*m+a*b+u*x,c[5]=n*g+a*y+u*w,c[8]=n*_+a*v+u*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],l=e[4],h=e[5],p=e[6],f=e[7],d=e[8];return t*l*d-t*h*f-r*c*d+r*h*p+o*c*f-o*l*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],l=e[4],h=e[5],p=e[6],f=e[7],d=e[8],i=d*l-h*f,n=h*p-d*c,a=f*c-l*p,u=t*i+r*n+o*a;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/u;return e[0]=i*m,e[1]=(o*f-d*r)*m,e[2]=(h*r-o*l)*m,e[3]=n*m,e[4]=(d*t-o*p)*m,e[5]=(o*c-h*t)*m,e[6]=a*m,e[7]=(r*p-f*t)*m,e[8]=(l*t-r*c)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,c,l,h){const p=Math.cos(c),f=Math.sin(c);return this.set(r*p,r*f,-r*(p*l+f*h)+l+e,-o*f,o*p,-o*(-f*l+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function createElementNS(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function createCanvasElement(){const s=createElementNS("canvas");return s.style.display="block",s}const _cache={};function warnOnce(s){s in _cache||(_cache[s]=!0,console.warn(s))}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,toReference:s=>s,fromReference:s=>s},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,toReference:s=>s.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:s=>s.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,toReference:s=>s.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:s=>s.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!SUPPORTED_WORKING_COLOR_SPACES.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=COLOR_SPACES[e].toReference,o=COLOR_SPACES[t].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return COLOR_SPACES[s].primaries},getTransfer:function(s){return s===NoColorSpace?LinearTransfer:COLOR_SPACES[s].transfer}};function SRGBToLinear(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function LinearToSRGB(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const r=_canvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let l=0;l<c.length;l++)c[l]=SRGBToLinear(c[l]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(SRGBToLinear(t[r]/255)*255):t[r]=SRGBToLinear(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let l=0,h=o.length;l<h;l++)o[l].isDataTexture?c.push(serializeImage(o[l].image)):c.push(serializeImage(o[l]))}else c=serializeImage(o);r.url=c}return t||(e.images[this.uuid]=r),r}}function serializeImage(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ImageUtils.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,r=ClampToEdgeWrapping,o=ClampToEdgeWrapping,c=LinearFilter,l=LinearMipmapLinearFilter,h=RGBAFormat,p=UnsignedByteType,f=Texture.DEFAULT_ANISOTROPY,d=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set encoding(e){warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sRGBEncoding?SRGBColorSpace:NoColorSpace}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,r=0,o=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=this.w,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o+l[12]*c,this.y=l[1]*t+l[5]*r+l[9]*o+l[13]*c,this.z=l[2]*t+l[6]*r+l[10]*o+l[14]*c,this.w=l[3]*t+l[7]*r+l[11]*o+l[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,c;const p=e.elements,f=p[0],d=p[4],i=p[8],n=p[1],a=p[5],u=p[9],m=p[2],g=p[6],_=p[10];if(Math.abs(d-n)<.01&&Math.abs(i-m)<.01&&Math.abs(u-g)<.01){if(Math.abs(d+n)<.1&&Math.abs(i+m)<.1&&Math.abs(u+g)<.1&&Math.abs(f+a+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(f+1)/2,v=(a+1)/2,x=(_+1)/2,w=(d+n)/4,S=(i+m)/4,M=(u+g)/4;return y>v&&y>x?y<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(y),o=w/r,c=S/r):v>x?v<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(v),r=w/o,c=M/o):x<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(x),r=S/c,o=M/c),this.set(r,o,c,t),this}let b=Math.sqrt((g-u)*(g-u)+(i-m)*(i-m)+(n-d)*(n-d));return Math.abs(b)<.001&&(b=1),this.x=(g-u)/b,this.y=(i-m)/b,this.z=(n-d)/b,this.w=Math.acos((f+a+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const o={width:e,height:t,depth:1};r.encoding!==void 0&&(warnOnce("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Texture(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,c,l,h){let p=r[o+0],f=r[o+1],d=r[o+2],i=r[o+3];const n=c[l+0],a=c[l+1],u=c[l+2],m=c[l+3];if(h===0){e[t+0]=p,e[t+1]=f,e[t+2]=d,e[t+3]=i;return}if(h===1){e[t+0]=n,e[t+1]=a,e[t+2]=u,e[t+3]=m;return}if(i!==m||p!==n||f!==a||d!==u){let g=1-h;const _=p*n+f*a+d*u+i*m,b=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const x=Math.sqrt(y),w=Math.atan2(x,_*b);g=Math.sin(g*w)/x,h=Math.sin(h*w)/x}const v=h*b;if(p=p*g+n*v,f=f*g+a*v,d=d*g+u*v,i=i*g+m*v,g===1-h){const x=1/Math.sqrt(p*p+f*f+d*d+i*i);p*=x,f*=x,d*=x,i*=x}}e[t]=p,e[t+1]=f,e[t+2]=d,e[t+3]=i}static multiplyQuaternionsFlat(e,t,r,o,c,l){const h=r[o],p=r[o+1],f=r[o+2],d=r[o+3],i=c[l],n=c[l+1],a=c[l+2],u=c[l+3];return e[t]=h*u+d*i+p*a-f*n,e[t+1]=p*u+d*n+f*i-h*a,e[t+2]=f*u+d*a+h*n-p*i,e[t+3]=d*u-h*i-p*n-f*a,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,c=e._z,l=e._order,h=Math.cos,p=Math.sin,f=h(r/2),d=h(o/2),i=h(c/2),n=p(r/2),a=p(o/2),u=p(c/2);switch(l){case"XYZ":this._x=n*d*i+f*a*u,this._y=f*a*i-n*d*u,this._z=f*d*u+n*a*i,this._w=f*d*i-n*a*u;break;case"YXZ":this._x=n*d*i+f*a*u,this._y=f*a*i-n*d*u,this._z=f*d*u-n*a*i,this._w=f*d*i+n*a*u;break;case"ZXY":this._x=n*d*i-f*a*u,this._y=f*a*i+n*d*u,this._z=f*d*u+n*a*i,this._w=f*d*i-n*a*u;break;case"ZYX":this._x=n*d*i-f*a*u,this._y=f*a*i+n*d*u,this._z=f*d*u-n*a*i,this._w=f*d*i+n*a*u;break;case"YZX":this._x=n*d*i+f*a*u,this._y=f*a*i+n*d*u,this._z=f*d*u-n*a*i,this._w=f*d*i-n*a*u;break;case"XZY":this._x=n*d*i-f*a*u,this._y=f*a*i-n*d*u,this._z=f*d*u+n*a*i,this._w=f*d*i+n*a*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],c=t[8],l=t[1],h=t[5],p=t[9],f=t[2],d=t[6],i=t[10],n=r+h+i;if(n>0){const a=.5/Math.sqrt(n+1);this._w=.25/a,this._x=(d-p)*a,this._y=(c-f)*a,this._z=(l-o)*a}else if(r>h&&r>i){const a=2*Math.sqrt(1+r-h-i);this._w=(d-p)/a,this._x=.25*a,this._y=(o+l)/a,this._z=(c+f)/a}else if(h>i){const a=2*Math.sqrt(1+h-r-i);this._w=(c-f)/a,this._x=(o+l)/a,this._y=.25*a,this._z=(p+d)/a}else{const a=2*Math.sqrt(1+i-r-h);this._w=(l-o)/a,this._x=(c+f)/a,this._y=(p+d)/a,this._z=.25*a}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,c=e._z,l=e._w,h=t._x,p=t._y,f=t._z,d=t._w;return this._x=r*d+l*h+o*f-c*p,this._y=o*d+l*p+c*h-r*f,this._z=c*d+l*f+r*p-o*h,this._w=l*d-r*h-o*p-c*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,l=this._w;let h=l*e._w+r*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=l,this._x=r,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const a=1-t;return this._w=a*l+t*this._w,this._x=a*r+t*this._x,this._y=a*o+t*this._y,this._z=a*c+t*this._z,this.normalize(),this}const f=Math.sqrt(p),d=Math.atan2(f,h),i=Math.sin((1-t)*d)/f,n=Math.sin(t*d)/f;return this._w=l*i+this._w*n,this._x=r*i+this._x*n,this._y=o*i+this._y*n,this._z=c*i+this._z*n,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(c),r*Math.cos(c),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,r=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*o,this.y=c[1]*t+c[4]*r+c[7]*o,this.z=c[2]*t+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=e.elements,l=1/(c[3]*t+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*o+c[12])*l,this.y=(c[1]*t+c[5]*r+c[9]*o+c[13])*l,this.z=(c[2]*t+c[6]*r+c[10]*o+c[14])*l,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,c=e.x,l=e.y,h=e.z,p=e.w,f=2*(l*o-h*r),d=2*(h*t-c*o),i=2*(c*r-l*t);return this.x=t+p*f+l*i-h*d,this.y=r+p*d+h*f-c*i,this.z=o+p*i+c*d-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o,this.y=c[1]*t+c[5]*r+c[9]*o,this.z=c[2]*t+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,c=e.z,l=t.x,h=t.y,p=t.z;return this.x=o*p-c*h,this.y=c*l-r*p,this.z=r*h-o*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(clamp(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let l=0,h=c.count;l<h;l++)e.isMesh===!0?e.getVertexPosition(l,_vector$b):_vector$b.fromBufferAttribute(c,l),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_box$4.copy(r.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const o=e.children;for(let c=0,l=o.length;c<l;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(s,e,t,r,o){for(let c=0,l=s.length-3;c<=l;c+=3){_testAxis.fromArray(s,c);const h=o.x*Math.abs(_testAxis.x)+o.y*Math.abs(_testAxis.y)+o.z*Math.abs(_testAxis.z),p=e.dot(_testAxis),f=t.dot(_testAxis),d=r.dot(_testAxis);if(Math.max(-Math.max(p,f,d),Math.min(p,f,d))>h)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_box$3.setFromPoints(e).getCenter(r);let o=0;for(let c=0,l=e.length;c<l;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(_v1$6,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const c=e.distanceTo(t)*.5,l=-this.direction.dot(_segDir),h=_diff.dot(this.direction),p=-_diff.dot(_segDir),f=_diff.lengthSq(),d=Math.abs(1-l*l);let i,n,a,u;if(d>0)if(i=l*p-h,n=l*h-p,u=c*d,i>=0)if(n>=-u)if(n<=u){const m=1/d;i*=m,n*=m,a=i*(i+l*n+2*h)+n*(l*i+n+2*p)+f}else n=c,i=Math.max(0,-(l*n+h)),a=-i*i+n*(n+2*p)+f;else n=-c,i=Math.max(0,-(l*n+h)),a=-i*i+n*(n+2*p)+f;else n<=-u?(i=Math.max(0,-(-l*c+h)),n=i>0?-c:Math.min(Math.max(-c,-p),c),a=-i*i+n*(n+2*p)+f):n<=u?(i=0,n=Math.min(Math.max(-c,-p),c),a=n*(n+2*p)+f):(i=Math.max(0,-(l*c+h)),n=i>0?c:Math.min(Math.max(-c,-p),c),a=-i*i+n*(n+2*p)+f);else n=l>0?-c:c,i=Math.max(0,-(l*n+h)),a=-i*i+n*(n+2*p)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,i),o&&o.copy(_segCenter).addScaledVector(_segDir,n),a}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const r=_vector$a.dot(this.direction),o=_vector$a.dot(_vector$a)-r*r,c=e.radius*e.radius;if(o>c)return null;const l=Math.sqrt(c-o),h=r-l,p=r+l;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,c,l,h,p;const f=1/this.direction.x,d=1/this.direction.y,i=1/this.direction.z,n=this.origin;return f>=0?(r=(e.min.x-n.x)*f,o=(e.max.x-n.x)*f):(r=(e.max.x-n.x)*f,o=(e.min.x-n.x)*f),d>=0?(c=(e.min.y-n.y)*d,l=(e.max.y-n.y)*d):(c=(e.max.y-n.y)*d,l=(e.min.y-n.y)*d),r>l||c>o||((c>r||isNaN(r))&&(r=c),(l<o||isNaN(o))&&(o=l),i>=0?(h=(e.min.z-n.z)*i,p=(e.max.z-n.z)*i):(h=(e.max.z-n.z)*i,p=(e.min.z-n.z)*i),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,r,o,c){_edge1.subVectors(t,e),_edge2.subVectors(r,e),_normal$1.crossVectors(_edge1,_edge2);let l=this.direction.dot(_normal$1),h;if(l>0){if(o)return null;h=1}else if(l<0)h=-1,l=-l;else return null;_diff.subVectors(this.origin,e);const p=h*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(p<0)return null;const f=h*this.direction.dot(_edge1.cross(_diff));if(f<0||p+f>l)return null;const d=-h*_diff.dot(_normal$1);return d<0?null:this.at(d/l,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,r,o,c,l,h,p,f,d,i,n,a,u,m,g){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,l,h,p,f,d,i,n,a,u,m,g)}set(e,t,r,o,c,l,h,p,f,d,i,n,a,u,m,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=c,_[5]=l,_[9]=h,_[13]=p,_[2]=f,_[6]=d,_[10]=i,_[14]=n,_[3]=a,_[7]=u,_[11]=m,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/_v1$5.setFromMatrixColumn(e,0).length(),c=1/_v1$5.setFromMatrixColumn(e,1).length(),l=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*l,t[9]=r[9]*l,t[10]=r[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,c=e.z,l=Math.cos(r),h=Math.sin(r),p=Math.cos(o),f=Math.sin(o),d=Math.cos(c),i=Math.sin(c);if(e.order==="XYZ"){const n=l*d,a=l*i,u=h*d,m=h*i;t[0]=p*d,t[4]=-p*i,t[8]=f,t[1]=a+u*f,t[5]=n-m*f,t[9]=-h*p,t[2]=m-n*f,t[6]=u+a*f,t[10]=l*p}else if(e.order==="YXZ"){const n=p*d,a=p*i,u=f*d,m=f*i;t[0]=n+m*h,t[4]=u*h-a,t[8]=l*f,t[1]=l*i,t[5]=l*d,t[9]=-h,t[2]=a*h-u,t[6]=m+n*h,t[10]=l*p}else if(e.order==="ZXY"){const n=p*d,a=p*i,u=f*d,m=f*i;t[0]=n-m*h,t[4]=-l*i,t[8]=u+a*h,t[1]=a+u*h,t[5]=l*d,t[9]=m-n*h,t[2]=-l*f,t[6]=h,t[10]=l*p}else if(e.order==="ZYX"){const n=l*d,a=l*i,u=h*d,m=h*i;t[0]=p*d,t[4]=u*f-a,t[8]=n*f+m,t[1]=p*i,t[5]=m*f+n,t[9]=a*f-u,t[2]=-f,t[6]=h*p,t[10]=l*p}else if(e.order==="YZX"){const n=l*p,a=l*f,u=h*p,m=h*f;t[0]=p*d,t[4]=m-n*i,t[8]=u*i+a,t[1]=i,t[5]=l*d,t[9]=-h*d,t[2]=-f*d,t[6]=a*i+u,t[10]=n-m*i}else if(e.order==="XZY"){const n=l*p,a=l*f,u=h*p,m=h*f;t[0]=p*d,t[4]=-i,t[8]=f*d,t[1]=n*i+m,t[5]=l*d,t[9]=a*i-u,t[2]=u*i-a,t[6]=h*d,t[10]=m*i+n}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,r){const o=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(r,_z),_x.lengthSq()===0&&(Math.abs(r.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(r,_z)),_x.normalize(),_y.crossVectors(_z,_x),o[0]=_x.x,o[4]=_y.x,o[8]=_z.x,o[1]=_x.y,o[5]=_y.y,o[9]=_z.y,o[2]=_x.z,o[6]=_y.z,o[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,l=r[0],h=r[4],p=r[8],f=r[12],d=r[1],i=r[5],n=r[9],a=r[13],u=r[2],m=r[6],g=r[10],_=r[14],b=r[3],y=r[7],v=r[11],x=r[15],w=o[0],S=o[4],M=o[8],T=o[12],E=o[1],R=o[5],I=o[9],k=o[13],C=o[2],z=o[6],O=o[10],U=o[14],K=o[3],$=o[7],J=o[11],ee=o[15];return c[0]=l*w+h*E+p*C+f*K,c[4]=l*S+h*R+p*z+f*$,c[8]=l*M+h*I+p*O+f*J,c[12]=l*T+h*k+p*U+f*ee,c[1]=d*w+i*E+n*C+a*K,c[5]=d*S+i*R+n*z+a*$,c[9]=d*M+i*I+n*O+a*J,c[13]=d*T+i*k+n*U+a*ee,c[2]=u*w+m*E+g*C+_*K,c[6]=u*S+m*R+g*z+_*$,c[10]=u*M+m*I+g*O+_*J,c[14]=u*T+m*k+g*U+_*ee,c[3]=b*w+y*E+v*C+x*K,c[7]=b*S+y*R+v*z+x*$,c[11]=b*M+y*I+v*O+x*J,c[15]=b*T+y*k+v*U+x*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[12],l=e[1],h=e[5],p=e[9],f=e[13],d=e[2],i=e[6],n=e[10],a=e[14],u=e[3],m=e[7],g=e[11],_=e[15];return u*(+c*p*i-o*f*i-c*h*n+r*f*n+o*h*a-r*p*a)+m*(+t*p*a-t*f*n+c*l*n-o*l*a+o*f*d-c*p*d)+g*(+t*f*i-t*h*a-c*l*i+r*l*a+c*h*d-r*f*d)+_*(-o*h*d-t*p*i+t*h*n+o*l*i-r*l*n+r*p*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],l=e[4],h=e[5],p=e[6],f=e[7],d=e[8],i=e[9],n=e[10],a=e[11],u=e[12],m=e[13],g=e[14],_=e[15],b=i*g*f-m*n*f+m*p*a-h*g*a-i*p*_+h*n*_,y=u*n*f-d*g*f-u*p*a+l*g*a+d*p*_-l*n*_,v=d*m*f-u*i*f+u*h*a-l*m*a-d*h*_+l*i*_,x=u*i*p-d*m*p-u*h*n+l*m*n+d*h*g-l*i*g,w=t*b+r*y+o*v+c*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=b*S,e[1]=(m*n*c-i*g*c-m*o*a+r*g*a+i*o*_-r*n*_)*S,e[2]=(h*g*c-m*p*c+m*o*f-r*g*f-h*o*_+r*p*_)*S,e[3]=(i*p*c-h*n*c-i*o*f+r*n*f+h*o*a-r*p*a)*S,e[4]=y*S,e[5]=(d*g*c-u*n*c+u*o*a-t*g*a-d*o*_+t*n*_)*S,e[6]=(u*p*c-l*g*c-u*o*f+t*g*f+l*o*_-t*p*_)*S,e[7]=(l*n*c-d*p*c+d*o*f-t*n*f-l*o*a+t*p*a)*S,e[8]=v*S,e[9]=(u*i*c-d*m*c-u*r*a+t*m*a+d*r*_-t*i*_)*S,e[10]=(l*m*c-u*h*c+u*r*f-t*m*f-l*r*_+t*h*_)*S,e[11]=(d*h*c-l*i*c-d*r*f+t*i*f+l*r*a-t*h*a)*S,e[12]=x*S,e[13]=(d*m*o-u*i*o+u*r*n-t*m*n-d*r*g+t*i*g)*S,e[14]=(u*h*o-l*m*o-u*r*p+t*m*p+l*r*g-t*h*g)*S,e[15]=(l*i*o-d*h*o+d*r*p-t*i*p-l*r*n+t*h*n)*S,this}scale(e){const t=this.elements,r=e.x,o=e.y,c=e.z;return t[0]*=r,t[4]*=o,t[8]*=c,t[1]*=r,t[5]*=o,t[9]*=c,t[2]*=r,t[6]*=o,t[10]*=c,t[3]*=r,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),c=1-r,l=e.x,h=e.y,p=e.z,f=c*l,d=c*h;return this.set(f*l+r,f*h-o*p,f*p+o*h,0,f*h+o*p,d*h+r,d*p-o*l,0,f*p-o*h,d*p+o*l,c*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,c,l){return this.set(1,r,c,0,e,1,l,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,c=t._x,l=t._y,h=t._z,p=t._w,f=c+c,d=l+l,i=h+h,n=c*f,a=c*d,u=c*i,m=l*d,g=l*i,_=h*i,b=p*f,y=p*d,v=p*i,x=r.x,w=r.y,S=r.z;return o[0]=(1-(m+_))*x,o[1]=(a+v)*x,o[2]=(u-y)*x,o[3]=0,o[4]=(a-v)*w,o[5]=(1-(n+_))*w,o[6]=(g+b)*w,o[7]=0,o[8]=(u+y)*S,o[9]=(g-b)*S,o[10]=(1-(n+m))*S,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let c=_v1$5.set(o[0],o[1],o[2]).length();const l=_v1$5.set(o[4],o[5],o[6]).length(),h=_v1$5.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],_m1$2.copy(this);const f=1/c,d=1/l,i=1/h;return _m1$2.elements[0]*=f,_m1$2.elements[1]*=f,_m1$2.elements[2]*=f,_m1$2.elements[4]*=d,_m1$2.elements[5]*=d,_m1$2.elements[6]*=d,_m1$2.elements[8]*=i,_m1$2.elements[9]*=i,_m1$2.elements[10]*=i,t.setFromRotationMatrix(_m1$2),r.x=c,r.y=l,r.z=h,this}makePerspective(e,t,r,o,c,l,h=WebGLCoordinateSystem){const p=this.elements,f=2*c/(t-e),d=2*c/(r-o),i=(t+e)/(t-e),n=(r+o)/(r-o);let a,u;if(h===WebGLCoordinateSystem)a=-(l+c)/(l-c),u=-2*l*c/(l-c);else if(h===WebGPUCoordinateSystem)a=-l/(l-c),u=-l*c/(l-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=f,p[4]=0,p[8]=i,p[12]=0,p[1]=0,p[5]=d,p[9]=n,p[13]=0,p[2]=0,p[6]=0,p[10]=a,p[14]=u,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,c,l,h=WebGLCoordinateSystem){const p=this.elements,f=1/(t-e),d=1/(r-o),i=1/(l-c),n=(t+e)*f,a=(r+o)*d;let u,m;if(h===WebGLCoordinateSystem)u=(l+c)*i,m=-2*i;else if(h===WebGPUCoordinateSystem)u=c*i,m=-1*i;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*f,p[4]=0,p[8]=0,p[12]=-n,p[1]=0,p[5]=2*d,p[9]=0,p[13]=-a,p[2]=0,p[6]=0,p[10]=m,p[14]=-u,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,r=0,o=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,c=o[0],l=o[4],h=o[8],p=o[1],f=o[5],d=o[9],i=o[2],n=o[6],a=o[10];switch(t){case"XYZ":this._y=Math.asin(clamp(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,a),this._z=Math.atan2(-l,c)):(this._x=Math.atan2(n,f),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(h,a),this._z=Math.atan2(p,f)):(this._y=Math.atan2(-i,c),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(-i,a),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-clamp(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(n,a),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(clamp(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-i,c)):(this._x=0,this._y=Math.atan2(h,a));break;case"XZY":this._z=Math.asin(-clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(n,f),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-d,a),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,r=new Quaternion,o=new Vector3(1,1,1);function c(){r.setFromEuler(t,!1)}function l(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_target.copy(e):_target.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),o&&(_m1$1.extractRotation(o.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let c=0,l=o.length;c<l;c++)o[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const c=t[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let c=0,l=o.length;c<l;c++){const h=o[c];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let f=0,d=p.length;f<d;f++){const i=p[f];c(e.shapes,i)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,f=this.material.length;p<f;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(t){const h=l(e.geometries),p=l(e.materials),f=l(e.textures),d=l(e.images),i=l(e.shapes),n=l(e.skeletons),a=l(e.animations),u=l(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),f.length>0&&(r.textures=f),d.length>0&&(r.images=d),i.length>0&&(r.shapes=i),n.length>0&&(r.skeletons=n),a.length>0&&(r.animations=a),u.length>0&&(r.nodes=u)}return r.object=o,r;function l(h){const p=[];for(const f in h){const d=h[f];delete d.metadata,p.push(d)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;let warnedGetUV=!1;class Triangle{constructor(e=new Vector3,t=new Vector3,r=new Vector3){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),_v0$1.subVectors(e,t),o.cross(_v0$1);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,r,o,c){_v0$1.subVectors(o,t),_v1$3.subVectors(r,t),_v2$2.subVectors(e,t);const l=_v0$1.dot(_v0$1),h=_v0$1.dot(_v1$3),p=_v0$1.dot(_v2$2),f=_v1$3.dot(_v1$3),d=_v1$3.dot(_v2$2),i=l*f-h*h;if(i===0)return c.set(0,0,0),null;const n=1/i,a=(f*p-h*d)*n,u=(l*d-h*p)*n;return c.set(1-a-u,u,a)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_v3$1)===null?!1:_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,r,o,c,l,h,p){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),this.getInterpolation(e,t,r,o,c,l,h,p)}static getInterpolation(e,t,r,o,c,l,h,p){return this.getBarycoord(e,t,r,o,_v3$1)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,_v3$1.x),p.addScaledVector(l,_v3$1.y),p.addScaledVector(h,_v3$1.z),p)}static isFrontFacing(e,t,r,o){return _v0$1.subVectors(r,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,c){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),Triangle.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}getInterpolation(e,t,r,o,c){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,c=this.c;let l,h;_vab.subVectors(o,r),_vac.subVectors(c,r),_vap.subVectors(e,r);const p=_vab.dot(_vap),f=_vac.dot(_vap);if(p<=0&&f<=0)return t.copy(r);_vbp.subVectors(e,o);const d=_vab.dot(_vbp),i=_vac.dot(_vbp);if(d>=0&&i<=d)return t.copy(o);const n=p*i-d*f;if(n<=0&&p>=0&&d<=0)return l=p/(p-d),t.copy(r).addScaledVector(_vab,l);_vcp.subVectors(e,c);const a=_vab.dot(_vcp),u=_vac.dot(_vcp);if(u>=0&&a<=u)return t.copy(c);const m=a*f-p*u;if(m<=0&&f>=0&&u<=0)return h=f/(f-u),t.copy(r).addScaledVector(_vac,h);const g=d*u-a*i;if(g<=0&&i-d>=0&&a-u>=0)return _vbc.subVectors(c,o),h=(i-d)/(i-d+(a-u)),t.copy(o).addScaledVector(_vbc,h);const _=1/(g+m+n);return l=m*_,h=n*_,t.copy(r).addScaledVector(_vab,l).addScaledVector(_vac,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Color{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=r,ColorManagement.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),r=clamp(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,l=2*r-c;this.r=hue2rgb(l,c,e+1/3),this.g=hue2rgb(l,c,e),this.b=hue2rgb(l,c,e-1/3)}return ColorManagement.toWorkingColorSpace(this,o),this}setStyle(e,t=SRGBColorSpace){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const l=o[1],h=o[2];switch(l){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],l=c.length;if(l===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const r=_colorKeywords[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const r=_color.r,o=_color.g,c=_color.b,l=Math.max(r,o,c),h=Math.min(r,o,c);let p,f;const d=(h+l)/2;if(h===l)p=0,f=0;else{const i=l-h;switch(f=d<=.5?i/(l+h):i/(2-l-h),l){case r:p=(o-c)/i+(o<c?6:0);break;case o:p=(c-r)/i+2;break;case c:p=(r-o)/i+4;break}p/=6}return e.h=p,e.s=f,e.l=d,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,r=_color.g,o=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const r=lerp(_hslA.h,_hslB.h,t),o=lerp(_hslA.s,_hslB.s,t),c=lerp(_hslA.l,_hslB.l,t);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*o,this.g=c[1]*t+c[4]*r+c[7]*o,this.b=c[2]*t+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(r.blending=this.blending),this.side!==FrontSide&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(r.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(r.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(r.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const l=[];for(const h in c){const p=c[h];delete p.metadata,l.push(p)}return l}if(t){const c=o(e.textures),l=o(e.images);c.length>0&&(r.textures=c),l.length>0&&(r.images=l)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=denormalize(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=normalize(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),r=normalize(r,this.array),o=normalize(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),r=normalize(r,this.array),o=normalize(o,this.array),c=normalize(c,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,r){super(new Float32Array(e),t,r)}}let _id$2=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Matrix3().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,r){return _m1.makeTranslation(e,t,r),this.applyMatrix4(_m1),this}scale(e,t,r){return _m1.makeScale(e,t,r),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];t.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];_box$2.setFromBufferAttribute(c),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const r=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let c=0,l=t.length;c<l;c++){const h=t[c];_boxMorphTargets.setFromBufferAttribute(h),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(r);let o=0;for(let c=0,l=e.count;c<l;c++)_vector$8.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(_vector$8));if(t)for(let c=0,l=t.length;c<l;c++){const h=t[c],p=this.morphTargetsRelative;for(let f=0,d=h.count;f<d;f++)_vector$8.fromBufferAttribute(h,f),p&&(_offset.fromBufferAttribute(e,f),_vector$8.add(_offset)),o=Math.max(o,r.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,c=t.normal.array,l=t.uv.array,h=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,f=[],d=[];for(let E=0;E<h;E++)f[E]=new Vector3,d[E]=new Vector3;const i=new Vector3,n=new Vector3,a=new Vector3,u=new Vector2,m=new Vector2,g=new Vector2,_=new Vector3,b=new Vector3;function y(E,R,I){i.fromArray(o,E*3),n.fromArray(o,R*3),a.fromArray(o,I*3),u.fromArray(l,E*2),m.fromArray(l,R*2),g.fromArray(l,I*2),n.sub(i),a.sub(i),m.sub(u),g.sub(u);const k=1/(m.x*g.y-g.x*m.y);isFinite(k)&&(_.copy(n).multiplyScalar(g.y).addScaledVector(a,-m.y).multiplyScalar(k),b.copy(a).multiplyScalar(m.x).addScaledVector(n,-g.x).multiplyScalar(k),f[E].add(_),f[R].add(_),f[I].add(_),d[E].add(b),d[R].add(b),d[I].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:r.length}]);for(let E=0,R=v.length;E<R;++E){const I=v[E],k=I.start,C=I.count;for(let z=k,O=k+C;z<O;z+=3)y(r[z+0],r[z+1],r[z+2])}const x=new Vector3,w=new Vector3,S=new Vector3,M=new Vector3;function T(E){S.fromArray(c,E*3),M.copy(S);const R=f[E];x.copy(R),x.sub(S.multiplyScalar(S.dot(R))).normalize(),w.crossVectors(M,R);const k=w.dot(d[E])<0?-1:1;p[E*4]=x.x,p[E*4+1]=x.y,p[E*4+2]=x.z,p[E*4+3]=k}for(let E=0,R=v.length;E<R;++E){const I=v[E],k=I.start,C=I.count;for(let z=k,O=k+C;z<O;z+=3)T(r[z+0]),T(r[z+1]),T(r[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let n=0,a=r.count;n<a;n++)r.setXYZ(n,0,0,0);const o=new Vector3,c=new Vector3,l=new Vector3,h=new Vector3,p=new Vector3,f=new Vector3,d=new Vector3,i=new Vector3;if(e)for(let n=0,a=e.count;n<a;n+=3){const u=e.getX(n+0),m=e.getX(n+1),g=e.getX(n+2);o.fromBufferAttribute(t,u),c.fromBufferAttribute(t,m),l.fromBufferAttribute(t,g),d.subVectors(l,c),i.subVectors(o,c),d.cross(i),h.fromBufferAttribute(r,u),p.fromBufferAttribute(r,m),f.fromBufferAttribute(r,g),h.add(d),p.add(d),f.add(d),r.setXYZ(u,h.x,h.y,h.z),r.setXYZ(m,p.x,p.y,p.z),r.setXYZ(g,f.x,f.y,f.z)}else for(let n=0,a=t.count;n<a;n+=3)o.fromBufferAttribute(t,n+0),c.fromBufferAttribute(t,n+1),l.fromBufferAttribute(t,n+2),d.subVectors(l,c),i.subVectors(o,c),d.cross(i),r.setXYZ(n+0,d.x,d.y,d.z),r.setXYZ(n+1,d.x,d.y,d.z),r.setXYZ(n+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(h,p){const f=h.array,d=h.itemSize,i=h.normalized,n=new f.constructor(p.length*d);let a=0,u=0;for(let m=0,g=p.length;m<g;m++){h.isInterleavedBufferAttribute?a=p[m]*h.data.stride+h.offset:a=p[m]*d;for(let _=0;_<d;_++)n[u++]=f[a++]}return new BufferAttribute(n,d,i)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],f=e(p,r);t.setAttribute(h,f)}const c=this.morphAttributes;for(const h in c){const p=[],f=c[h];for(let d=0,i=f.length;d<i;d++){const n=f[d],a=e(n,r);p.push(a)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let h=0,p=l.length;h<p;h++){const f=l[h];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(e[f]=p[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const f=r[p];e.data.attributes[p]=f.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const f=this.morphAttributes[p],d=[];for(let i=0,n=f.length;i<n;i++){const a=f[i];d.push(a.toJSON(e.data))}d.length>0&&(o[p]=d,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const f in o){const d=o[f];this.setAttribute(f,d.clone(t))}const c=e.morphAttributes;for(const f in c){const d=[],i=c[f];for(let n=0,a=i.length;n<a;n++)d.push(i[n].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const i=l[f];this.addGroup(i.start,i.count,i.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,l=o.length;c<l;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,l=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){_morphA.set(0,0,0);for(let p=0,f=c.length;p<f;p++){const d=h[p],i=c[p];d!==0&&(_tempA.fromBufferAttribute(i,e),l?_morphA.addScaledVector(_tempA,d):_morphA.addScaledVector(_tempA.sub(t),d))}t.add(_morphA)}return t}raycast(e,t){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_sphere$6.copy(r.boundingSphere),_sphere$6.applyMatrix4(c),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(c).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(r.boundingBox!==null&&_ray$3.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,r){let o;const c=this.geometry,l=this.material,h=c.index,p=c.attributes.position,f=c.attributes.uv,d=c.attributes.uv1,i=c.attributes.normal,n=c.groups,a=c.drawRange;if(h!==null)if(Array.isArray(l))for(let u=0,m=n.length;u<m;u++){const g=n[u],_=l[g.materialIndex],b=Math.max(g.start,a.start),y=Math.min(h.count,Math.min(g.start+g.count,a.start+a.count));for(let v=b,x=y;v<x;v+=3){const w=h.getX(v),S=h.getX(v+1),M=h.getX(v+2);o=checkGeometryIntersection(this,_,e,r,f,d,i,w,S,M),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=u,_=m;g<_;g+=3){const b=h.getX(g),y=h.getX(g+1),v=h.getX(g+2);o=checkGeometryIntersection(this,l,e,r,f,d,i,b,y,v),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(l))for(let u=0,m=n.length;u<m;u++){const g=n[u],_=l[g.materialIndex],b=Math.max(g.start,a.start),y=Math.min(p.count,Math.min(g.start+g.count,a.start+a.count));for(let v=b,x=y;v<x;v+=3){const w=v,S=v+1,M=v+2;o=checkGeometryIntersection(this,_,e,r,f,d,i,w,S,M),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,_=m;g<_;g+=3){const b=g,y=g+1,v=g+2;o=checkGeometryIntersection(this,l,e,r,f,d,i,b,y,v),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function checkIntersection(s,e,t,r,o,c,l,h){let p;if(e.side===BackSide?p=r.intersectTriangle(l,c,o,!0,h):p=r.intersectTriangle(o,c,l,e.side===FrontSide,h),p===null)return null;_intersectionPointWorld.copy(h),_intersectionPointWorld.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(_intersectionPointWorld);return f<t.near||f>t.far?null:{distance:f,point:_intersectionPointWorld.clone(),object:s}}function checkGeometryIntersection(s,e,t,r,o,c,l,h,p,f){s.getVertexPosition(h,_vA$1),s.getVertexPosition(p,_vB$1),s.getVertexPosition(f,_vC$1);const d=checkIntersection(s,e,t,r,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(d){o&&(_uvA$1.fromBufferAttribute(o,h),_uvB$1.fromBufferAttribute(o,p),_uvC$1.fromBufferAttribute(o,f),d.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),c&&(_uvA$1.fromBufferAttribute(c,h),_uvB$1.fromBufferAttribute(c,p),_uvC$1.fromBufferAttribute(c,f),d.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2),d.uv2=d.uv1),l&&(_normalA.fromBufferAttribute(l,h),_normalB.fromBufferAttribute(l,p),_normalC.fromBufferAttribute(l,f),d.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const i={a:h,b:p,c:f,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,i.normal),d.face=i}return d}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,r=1,o=1,c=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:c,depthSegments:l};const h=this;o=Math.floor(o),c=Math.floor(c),l=Math.floor(l);const p=[],f=[],d=[],i=[];let n=0,a=0;u("z","y","x",-1,-1,r,t,e,l,c,0),u("z","y","x",1,-1,r,t,-e,l,c,1),u("x","z","y",1,1,e,r,t,o,l,2),u("x","z","y",1,-1,e,r,-t,o,l,3),u("x","y","z",1,-1,e,t,r,o,c,4),u("x","y","z",-1,-1,e,t,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(f,3)),this.setAttribute("normal",new Float32BufferAttribute(d,3)),this.setAttribute("uv",new Float32BufferAttribute(i,2));function u(m,g,_,b,y,v,x,w,S,M,T){const E=v/S,R=x/M,I=v/2,k=x/2,C=w/2,z=S+1,O=M+1;let U=0,K=0;const $=new Vector3;for(let J=0;J<O;J++){const ee=J*R-k;for(let he=0;he<z;he++){const ie=he*E-I;$[m]=ie*b,$[g]=ee*y,$[_]=C,f.push($.x,$.y,$.z),$[m]=0,$[g]=0,$[_]=w>0?1:-1,d.push($.x,$.y,$.z),i.push(he/S),i.push(1-J/M),U+=1}}for(let J=0;J<M;J++)for(let ee=0;ee<S;ee++){const he=n+ee+z*J,ie=n+ee+z*(J+1),le=n+(ee+1)+z*(J+1),de=n+(ee+1)+z*J;p.push(he,ie,de),p.push(ie,le,de),K+=6}h.addGroup(a,K,T),a+=K,n+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function mergeUniforms(s){const e={};for(let t=0;t<s.length;t++){const r=cloneUniforms(s[t]);for(const o in r)e[o]=r[o]}return e}function cloneUniformsGroups(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function getUnlitUniformColorSpace(s){return s.getRenderTarget()===null?s.outputColorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const l=this.uniforms[o].value;l&&l.isTexture?t.uniforms[o]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[o]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[o]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[o]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[o]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[o]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[o]={type:"m4",value:l.toArray()}:t.uniforms[o]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,c,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,c=-.5*o;const l=this.view;if(this.view!==null&&this.view.enabled){const p=l.fullWidth,f=l.fullHeight;c+=l.offsetX*o/p,t-=l.offsetY*r/f,o*=l.width/p,r*=l.height/f}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l);const h=new PerspectiveCamera(fov,aspect,e,t);h.layers=this.layers,this.add(h);const p=new PerspectiveCamera(fov,aspect,e,t);p.layers=this.layers,this.add(p);const f=new PerspectiveCamera(fov,aspect,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,c,l,h,p]=t;for(const f of t)this.remove(f);if(e===WebGLCoordinateSystem)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,l,h,p,f,d]=this.children,i=e.getRenderTarget(),n=e.getActiveCubeFace(),a=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,c),e.setRenderTarget(r,1,o),e.render(t,l),e.setRenderTarget(r,2,o),e.render(t,h),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,f),r.texture.generateMipmaps=m,e.setRenderTarget(r,5,o),e.render(t,d),e.setRenderTarget(i,n,a),e.xr.enabled=u,r.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,r,o,c,l,h,p,f,d){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,r,o,c,l,h,p,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];t.encoding!==void 0&&(warnOnce("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.texture=new CubeTexture(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new BoxGeometry(5,5,5),c=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:BackSide,blending:NoBlending});c.uniforms.tEquirect.value=t;const l=new Mesh(o,c),h=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,l),t.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,r,o){const c=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,r,o);e.setRenderTarget(c)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_vector1.subVectors(r,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(_vector1),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:t.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_normalMatrix.getNormalMatrix(e),o=this.coplanarPoint(_vector1).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,r=new Plane,o=new Plane,c=new Plane,l=new Plane){this.planes=[e,t,r,o,c,l]}set(e,t,r,o,c,l){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(l),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const r=this.planes,o=e.elements,c=o[0],l=o[1],h=o[2],p=o[3],f=o[4],d=o[5],i=o[6],n=o[7],a=o[8],u=o[9],m=o[10],g=o[11],_=o[12],b=o[13],y=o[14],v=o[15];if(r[0].setComponents(p-c,n-f,g-a,v-_).normalize(),r[1].setComponents(p+c,n+f,g+a,v+_).normalize(),r[2].setComponents(p+l,n+d,g+u,v+b).normalize(),r[3].setComponents(p-l,n-d,g-u,v-b).normalize(),r[4].setComponents(p-h,n-i,g-m,v-y).normalize(),t===WebGLCoordinateSystem)r[5].setComponents(p+h,n+i,g+m,v+y).normalize();else if(t===WebGPUCoordinateSystem)r[5].setComponents(h,i,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$5.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(e){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(_vector$7.x=o.normal.x>0?e.max.x:e.min.x,_vector$7.y=o.normal.y>0?e.max.y:e.min.y,_vector$7.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let s=null,e=!1,t=null,r=null;function o(c,l){t(c,l),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function WebGLAttributes(s,e){const t=e.isWebGL2,r=new WeakMap;function o(f,d){const i=f.array,n=f.usage,a=i.byteLength,u=s.createBuffer();s.bindBuffer(d,u),s.bufferData(d,i,n),f.onUploadCallback();let m;if(i instanceof Float32Array)m=s.FLOAT;else if(i instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(i instanceof Int16Array)m=s.SHORT;else if(i instanceof Uint32Array)m=s.UNSIGNED_INT;else if(i instanceof Int32Array)m=s.INT;else if(i instanceof Int8Array)m=s.BYTE;else if(i instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+i);return{buffer:u,type:m,bytesPerElement:i.BYTES_PER_ELEMENT,version:f.version,size:a}}function c(f,d,i){const n=d.array,a=d._updateRange,u=d.updateRanges;if(s.bindBuffer(i,f),a.count===-1&&u.length===0&&s.bufferSubData(i,0,n),u.length!==0){for(let m=0,g=u.length;m<g;m++){const _=u[m];t?s.bufferSubData(i,_.start*n.BYTES_PER_ELEMENT,n,_.start,_.count):s.bufferSubData(i,_.start*n.BYTES_PER_ELEMENT,n.subarray(_.start,_.start+_.count))}d.clearUpdateRanges()}a.count!==-1&&(t?s.bufferSubData(i,a.offset*n.BYTES_PER_ELEMENT,n,a.offset,a.count):s.bufferSubData(i,a.offset*n.BYTES_PER_ELEMENT,n.subarray(a.offset,a.offset+a.count)),a.count=-1),d.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),r.get(f)}function h(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=r.get(f);d&&(s.deleteBuffer(d.buffer),r.delete(f))}function p(f,d){if(f.isGLBufferAttribute){const n=r.get(f);(!n||n.version<f.version)&&r.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const i=r.get(f);if(i===void 0)r.set(f,o(f,d));else if(i.version<f.version){if(i.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(i.buffer,f,d),i.version=f.version}}return{get:l,remove:h,update:p}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const c=e/2,l=t/2,h=Math.floor(r),p=Math.floor(o),f=h+1,d=p+1,i=e/h,n=t/p,a=[],u=[],m=[],g=[];for(let _=0;_<d;_++){const b=_*n-l;for(let y=0;y<f;y++){const v=y*i-c;u.push(v,-b,0),m.push(0,0,1),g.push(y/h),g.push(1-_/p)}}for(let _=0;_<p;_++)for(let b=0;b<h;b++){const y=b+f*_,v=b+f*(_+1),x=b+1+f*(_+1),w=b+1+f*_;a.push(y,v,w),a.push(v,x,w)}this.setIndex(a),this.setAttribute("position",new Float32BufferAttribute(u,3)),this.setAttribute("normal",new Float32BufferAttribute(m,3)),this.setAttribute("uv",new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fragment$1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(s,e,t,r,o,c,l){const h=new Color(0);let p=c===!0?0:1,f,d,i=null,n=0,a=null;function u(g,_){let b=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y===null?m(h,p):y&&y.isColor&&(m(y,1),b=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?r.buffers.color.setClear(0,0,0,1,l):v==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===CubeUVReflectionMapping)?(d===void 0&&(d=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(x,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=ColorManagement.getTransfer(y.colorSpace)!==SRGBTransfer,(i!==y||n!==y.version||a!==s.toneMapping)&&(d.material.needsUpdate=!0,i=y,n=y.version,a=s.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=ColorManagement.getTransfer(y.colorSpace)!==SRGBTransfer,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(i!==y||n!==y.version||a!==s.toneMapping)&&(f.material.needsUpdate=!0,i=y,n=y.version,a=s.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function m(g,_){g.getRGB(_rgb,getUnlitUniformColorSpace(s)),r.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,_,l)}return{getClearColor:function(){return h},setClearColor:function(g,_=1){h.set(g),p=_,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(g){p=g,m(h,p)},render:u}}function WebGLBindingStates(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:e.get("OES_vertex_array_object"),l=r.isWebGL2||c!==null,h={},p=g(null);let f=p,d=!1;function i(C,z,O,U,K){let $=!1;if(l){const J=m(U,O,z);f!==J&&(f=J,a(f.object)),$=_(C,U,O,K),$&&b(C,U,O,K)}else{const J=z.wireframe===!0;(f.geometry!==U.id||f.program!==O.id||f.wireframe!==J)&&(f.geometry=U.id,f.program=O.id,f.wireframe=J,$=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,M(C,z,O,U),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function n(){return r.isWebGL2?s.createVertexArray():c.createVertexArrayOES()}function a(C){return r.isWebGL2?s.bindVertexArray(C):c.bindVertexArrayOES(C)}function u(C){return r.isWebGL2?s.deleteVertexArray(C):c.deleteVertexArrayOES(C)}function m(C,z,O){const U=O.wireframe===!0;let K=h[C.id];K===void 0&&(K={},h[C.id]=K);let $=K[z.id];$===void 0&&($={},K[z.id]=$);let J=$[U];return J===void 0&&(J=g(n()),$[U]=J),J}function g(C){const z=[],O=[],U=[];for(let K=0;K<o;K++)z[K]=0,O[K]=0,U[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:U,object:C,attributes:{},index:null}}function _(C,z,O,U){const K=f.attributes,$=z.attributes;let J=0;const ee=O.getAttributes();for(const he in ee)if(ee[he].location>=0){const le=K[he];let de=$[he];if(de===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),le===void 0||le.attribute!==de||de&&le.data!==de.data)return!0;J++}return f.attributesNum!==J||f.index!==U}function b(C,z,O,U){const K={},$=z.attributes;let J=0;const ee=O.getAttributes();for(const he in ee)if(ee[he].location>=0){let le=$[he];le===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const de={};de.attribute=le,le&&le.data&&(de.data=le.data),K[he]=de,J++}f.attributes=K,f.attributesNum=J,f.index=U}function y(){const C=f.newAttributes;for(let z=0,O=C.length;z<O;z++)C[z]=0}function v(C){x(C,0)}function x(C,z){const O=f.newAttributes,U=f.enabledAttributes,K=f.attributeDivisors;O[C]=1,U[C]===0&&(s.enableVertexAttribArray(C),U[C]=1),K[C]!==z&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,z),K[C]=z)}function w(){const C=f.newAttributes,z=f.enabledAttributes;for(let O=0,U=z.length;O<U;O++)z[O]!==C[O]&&(s.disableVertexAttribArray(O),z[O]=0)}function S(C,z,O,U,K,$,J){J===!0?s.vertexAttribIPointer(C,z,O,K,$):s.vertexAttribPointer(C,z,O,U,K,$)}function M(C,z,O,U){if(r.isWebGL2===!1&&(C.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const K=U.attributes,$=O.getAttributes(),J=z.defaultAttributeValues;for(const ee in $){const he=$[ee];if(he.location>=0){let ie=K[ee];if(ie===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){const le=ie.normalized,de=ie.itemSize,Me=t.get(ie);if(Me===void 0)continue;const Ee=Me.buffer,Fe=Me.type,Be=Me.bytesPerElement,Ce=r.isWebGL2===!0&&(Fe===s.INT||Fe===s.UNSIGNED_INT||ie.gpuType===IntType);if(ie.isInterleavedBufferAttribute){const je=ie.data,ne=je.stride,Qe=ie.offset;if(je.isInstancedInterleavedBuffer){for(let Pe=0;Pe<he.locationSize;Pe++)x(he.location+Pe,je.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Pe=0;Pe<he.locationSize;Pe++)v(he.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Pe=0;Pe<he.locationSize;Pe++)S(he.location+Pe,de/he.locationSize,Fe,le,ne*Be,(Qe+de/he.locationSize*Pe)*Be,Ce)}else{if(ie.isInstancedBufferAttribute){for(let je=0;je<he.locationSize;je++)x(he.location+je,ie.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let je=0;je<he.locationSize;je++)v(he.location+je);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let je=0;je<he.locationSize;je++)S(he.location+je,de/he.locationSize,Fe,le,de*Be,de/he.locationSize*je*Be,Ce)}}else if(J!==void 0){const le=J[ee];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(he.location,le);break;case 3:s.vertexAttrib3fv(he.location,le);break;case 4:s.vertexAttrib4fv(he.location,le);break;default:s.vertexAttrib1fv(he.location,le)}}}}w()}function T(){I();for(const C in h){const z=h[C];for(const O in z){const U=z[O];for(const K in U)u(U[K].object),delete U[K];delete z[O]}delete h[C]}}function E(C){if(h[C.id]===void 0)return;const z=h[C.id];for(const O in z){const U=z[O];for(const K in U)u(U[K].object),delete U[K];delete z[O]}delete h[C.id]}function R(C){for(const z in h){const O=h[z];if(O[C.id]===void 0)continue;const U=O[C.id];for(const K in U)u(U[K].object),delete U[K];delete O[C.id]}}function I(){k(),d=!0,f!==p&&(f=p,a(f.object))}function k(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:i,reset:I,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:v,disableUnusedAttributes:w}}function WebGLBufferRenderer(s,e,t,r){const o=r.isWebGL2;let c;function l(d){c=d}function h(d,i){s.drawArrays(c,d,i),t.update(i,c,1)}function p(d,i,n){if(n===0)return;let a,u;if(o)a=s,u="drawArraysInstanced";else if(a=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",a===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}a[u](c,d,i,n),t.update(i,c,n)}function f(d,i,n){if(n===0)return;const a=e.get("WEBGL_multi_draw");if(a===null)for(let u=0;u<n;u++)this.render(d[u],i[u]);else{a.multiDrawArraysWEBGL(c,d,0,i,0,n);let u=0;for(let m=0;m<n;m++)u+=i[m];t.update(u,c,1)}}this.setMode=l,this.render=h,this.renderInstances=p,this.renderMultiDraw=f}function WebGLCapabilities(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let h=t.precision!==void 0?t.precision:"highp";const p=c(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const f=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,i=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),n=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),a=s.getParameter(s.MAX_TEXTURE_SIZE),u=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=n>0,v=l||e.has("OES_texture_float"),x=y&&v,w=l?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:c,precision:h,logarithmicDepthBuffer:d,maxTextures:i,maxVertexTextures:n,maxTextureSize:a,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:w}}function WebGLClipping(s){const e=this;let t=null,r=0,o=!1,c=!1;const l=new Plane,h=new Matrix3,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(i,n){const a=i.length!==0||n||r!==0||o;return o=n,r=i.length,a},this.beginShadows=function(){c=!0,d(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(i,n){t=d(i,n,0)},this.setState=function(i,n,a){const u=i.clippingPlanes,m=i.clipIntersection,g=i.clipShadows,_=s.get(i);if(!o||u===null||u.length===0||c&&!g)c?d(null):f();else{const b=c?0:r,y=b*4;let v=_.clippingState||null;p.value=v,v=d(u,n,y,a);for(let x=0;x!==y;++x)v[x]=t[x];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function f(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(i,n,a,u){const m=i!==null?i.length:0;let g=null;if(m!==0){if(g=p.value,u!==!0||g===null){const _=a+m*4,b=n.matrixWorldInverse;h.getNormalMatrix(b),(g===null||g.length<_)&&(g=new Float32Array(_));for(let y=0,v=a;y!==m;++y,v+=4)l.copy(i[y]).applyMatrix4(b,h),l.normal.toArray(g,v),g[v+3]=l.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function WebGLCubeMaps(s){let e=new WeakMap;function t(l,h){return h===EquirectangularReflectionMapping?l.mapping=CubeReflectionMapping:h===EquirectangularRefractionMapping&&(l.mapping=CubeRefractionMapping),l}function r(l){if(l&&l.isTexture){const h=l.mapping;if(h===EquirectangularReflectionMapping||h===EquirectangularRefractionMapping)if(e.has(l)){const p=e.get(l).texture;return t(p,l.mapping)}else{const p=l.image;if(p&&p.height>0){const f=new WebGLCubeRenderTarget(p.height/2);return f.fromEquirectangularTexture(s,l),e.set(l,f),l.addEventListener("dispose",o),t(f.texture,l.mapping)}else return null}}return l}function o(l){const h=l.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,r=1,o=-1,c=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=c,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,c,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,l=r+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=f*this.view.offsetX,l=c+f*this.view.width,h-=d*this.view.offsetY,p=h-d*this.view.height}this.projectionMatrix.makeOrthographic(c,l,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},o=_createRenderTarget(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(c)),this._blurMaterial=_getBlurShader(c,e,t)}return o}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,r,o){const h=new PerspectiveCamera(90,1,t,r),p=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,i=d.autoClear,n=d.toneMapping;d.getClearColor(_clearColor),d.toneMapping=NoToneMapping,d.autoClear=!1;const a=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),u=new Mesh(new BoxGeometry,a);let m=!1;const g=e.background;g?g.isColor&&(a.color.copy(g),e.background=null,m=!0):(a.color.copy(_clearColor),m=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(h.up.set(0,p[_],0),h.lookAt(f[_],0,0)):b===1?(h.up.set(0,0,p[_]),h.lookAt(0,f[_],0)):(h.up.set(0,p[_],0),h.lookAt(0,0,f[_]));const y=this._cubeSize;_setViewport(o,b*y,_>2?y:0,y,y),d.setRenderTarget(o),m&&d.render(u,h),d.render(e,h)}u.geometry.dispose(),u.material.dispose(),d.toneMapping=n,d.autoClear=i,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const c=o?this._cubemapMaterial:this._equirectMaterial,l=new Mesh(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;_setViewport(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(l,_flatCamera)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=_axisDirections[(o-1)%_axisDirections.length];this._blur(e,o-1,o,c,l)}t.autoClear=r}_blur(e,t,r,o,c){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,r,o,"latitudinal",c),this._halfBlur(l,e,r,r,o,"longitudinal",c)}_halfBlur(e,t,r,o,c,l,h){const p=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,i=new Mesh(this._lodPlanes[o],f),n=f.uniforms,a=this._sizeLods[r]-1,u=isFinite(c)?Math.PI/(2*a):2*Math.PI/(2*MAX_SAMPLES-1),m=c/u,g=isFinite(c)?1+Math.floor(d*m):MAX_SAMPLES;g>MAX_SAMPLES&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${MAX_SAMPLES}`);const _=[];let b=0;for(let S=0;S<MAX_SAMPLES;++S){const M=S/m,T=Math.exp(-M*M/2);_.push(T),S===0?b+=T:S<g&&(b+=2*T)}for(let S=0;S<_.length;S++)_[S]=_[S]/b;n.envMap.value=e.texture,n.samples.value=g,n.weights.value=_,n.latitudinal.value=l==="latitudinal",h&&(n.poleAxis.value=h);const{_lodMax:y}=this;n.dTheta.value=u,n.mipInt.value=y-r;const v=this._sizeLods[o],x=3*v*(o>y-LOD_MIN?o-y+LOD_MIN:0),w=4*(this._cubeSize-v);_setViewport(t,x,w,3*v,2*v),p.setRenderTarget(t),p.render(i,_flatCamera)}}function _createPlanes(s){const e=[],t=[],r=[];let o=s;const c=s-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let l=0;l<c;l++){const h=Math.pow(2,o);t.push(h);let p=1/h;l>s-LOD_MIN?p=EXTRA_LOD_SIGMA[l-s+LOD_MIN-1]:l===0&&(p=0),r.push(p);const f=1/(h-2),d=-f,i=1+f,n=[d,d,i,d,i,i,d,d,i,i,d,i],a=6,u=6,m=3,g=2,_=1,b=new Float32Array(m*u*a),y=new Float32Array(g*u*a),v=new Float32Array(_*u*a);for(let w=0;w<a;w++){const S=w%3*2/3-1,M=w>2?0:-1,T=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];b.set(T,m*u*w),y.set(n,g*u*w);const E=[w,w,w,w,w,w];v.set(E,_*u*w)}const x=new BufferGeometry;x.setAttribute("position",new BufferAttribute(b,m)),x.setAttribute("uv",new BufferAttribute(y,g)),x.setAttribute("faceIndex",new BufferAttribute(v,_)),e.push(x),o>LOD_MIN&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function _createRenderTarget(s,e,t){const r=new WebGLRenderTarget(s,e,t);return r.texture.mapping=CubeUVReflectionMapping,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _setViewport(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function _getBlurShader(s,e,t){const r=new Float32Array(MAX_SAMPLES),o=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const p=h.mapping,f=p===EquirectangularReflectionMapping||p===EquirectangularRefractionMapping,d=p===CubeReflectionMapping||p===CubeRefractionMapping;if(f||d)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let i=e.get(h);return t===null&&(t=new PMREMGenerator(s)),i=f?t.fromEquirectangular(h,i):t.fromCubemap(h,i),e.set(h,i),i.texture}else{if(e.has(h))return e.get(h).texture;{const i=h.image;if(f&&i&&i.height>0||d&&i&&o(i)){t===null&&(t=new PMREMGenerator(s));const n=f?t.fromEquirectangular(h):t.fromCubemap(h);return e.set(h,n),h.addEventListener("dispose",c),n.texture}else return null}}}return h}function o(h){let p=0;const f=6;for(let d=0;d<f;d++)h[d]!==void 0&&p++;return p===f}function c(h){const p=h.target;p.removeEventListener("dispose",c);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:l}}function WebGLExtensions(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function WebGLGeometries(s,e,t,r){const o={},c=new WeakMap;function l(i){const n=i.target;n.index!==null&&e.remove(n.index);for(const u in n.attributes)e.remove(n.attributes[u]);for(const u in n.morphAttributes){const m=n.morphAttributes[u];for(let g=0,_=m.length;g<_;g++)e.remove(m[g])}n.removeEventListener("dispose",l),delete o[n.id];const a=c.get(n);a&&(e.remove(a),c.delete(n)),r.releaseStatesOfGeometry(n),n.isInstancedBufferGeometry===!0&&delete n._maxInstanceCount,t.memory.geometries--}function h(i,n){return o[n.id]===!0||(n.addEventListener("dispose",l),o[n.id]=!0,t.memory.geometries++),n}function p(i){const n=i.attributes;for(const u in n)e.update(n[u],s.ARRAY_BUFFER);const a=i.morphAttributes;for(const u in a){const m=a[u];for(let g=0,_=m.length;g<_;g++)e.update(m[g],s.ARRAY_BUFFER)}}function f(i){const n=[],a=i.index,u=i.attributes.position;let m=0;if(a!==null){const b=a.array;m=a.version;for(let y=0,v=b.length;y<v;y+=3){const x=b[y+0],w=b[y+1],S=b[y+2];n.push(x,w,w,S,S,x)}}else if(u!==void 0){const b=u.array;m=u.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const x=y+0,w=y+1,S=y+2;n.push(x,w,w,S,S,x)}}else return;const g=new(arrayNeedsUint32(n)?Uint32BufferAttribute:Uint16BufferAttribute)(n,1);g.version=m;const _=c.get(i);_&&e.remove(_),c.set(i,g)}function d(i){const n=c.get(i);if(n){const a=i.index;a!==null&&n.version<a.version&&f(i)}else f(i);return c.get(i)}return{get:h,update:p,getWireframeAttribute:d}}function WebGLIndexedBufferRenderer(s,e,t,r){const o=r.isWebGL2;let c;function l(a){c=a}let h,p;function f(a){h=a.type,p=a.bytesPerElement}function d(a,u){s.drawElements(c,u,h,a*p),t.update(u,c,1)}function i(a,u,m){if(m===0)return;let g,_;if(o)g=s,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](c,u,h,a*p,m),t.update(u,c,m)}function n(a,u,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<m;_++)this.render(a[_]/p,u[_]);else{g.multiDrawElementsWEBGL(c,u,0,h,a,0,m);let _=0;for(let b=0;b<m;b++)_+=u[b];t.update(_,c,1)}}this.setMode=l,this.setIndex=f,this.render=d,this.renderInstances=i,this.renderMultiDraw=n}function WebGLInfo(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,l,h){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=h*(c/3);break;case s.LINES:t.lines+=h*(c/2);break;case s.LINE_STRIP:t.lines+=h*(c-1);break;case s.LINE_LOOP:t.lines+=h*c;break;case s.POINTS:t.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function numericalSort(s,e){return s[0]-e[0]}function absNumericalSort(s,e){return Math.abs(e[1])-Math.abs(s[1])}function WebGLMorphtargets(s,e,t){const r={},o=new Float32Array(8),c=new WeakMap,l=new Vector4,h=[];for(let f=0;f<8;f++)h[f]=[f,0];function p(f,d,i){const n=f.morphTargetInfluences;if(e.isWebGL2===!0){const a=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,u=a!==void 0?a.length:0;let m=c.get(d);if(m===void 0||m.count!==u){let C=function(){I.dispose(),c.delete(d),d.removeEventListener("dispose",C)};m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],S=d.morphAttributes.color||[];let M=0;b===!0&&(M=1),y===!0&&(M=2),v===!0&&(M=3);let T=d.attributes.position.count*M,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*E*4*u),I=new DataArrayTexture(R,T,E,u);I.type=FloatType,I.needsUpdate=!0;const k=M*4;for(let z=0;z<u;z++){const O=x[z],U=w[z],K=S[z],$=T*E*4*z;for(let J=0;J<O.count;J++){const ee=J*k;b===!0&&(l.fromBufferAttribute(O,J),R[$+ee+0]=l.x,R[$+ee+1]=l.y,R[$+ee+2]=l.z,R[$+ee+3]=0),y===!0&&(l.fromBufferAttribute(U,J),R[$+ee+4]=l.x,R[$+ee+5]=l.y,R[$+ee+6]=l.z,R[$+ee+7]=0),v===!0&&(l.fromBufferAttribute(K,J),R[$+ee+8]=l.x,R[$+ee+9]=l.y,R[$+ee+10]=l.z,R[$+ee+11]=K.itemSize===4?l.w:1)}}m={count:u,texture:I,size:new Vector2(T,E)},c.set(d,m),d.addEventListener("dispose",C)}let g=0;for(let b=0;b<n.length;b++)g+=n[b];const _=d.morphTargetsRelative?1:1-g;i.getUniforms().setValue(s,"morphTargetBaseInfluence",_),i.getUniforms().setValue(s,"morphTargetInfluences",n),i.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),i.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const a=n===void 0?0:n.length;let u=r[d.id];if(u===void 0||u.length!==a){u=[];for(let y=0;y<a;y++)u[y]=[y,0];r[d.id]=u}for(let y=0;y<a;y++){const v=u[y];v[0]=y,v[1]=n[y]}u.sort(absNumericalSort);for(let y=0;y<8;y++)y<a&&u[y][1]?(h[y][0]=u[y][0],h[y][1]=u[y][1]):(h[y][0]=Number.MAX_SAFE_INTEGER,h[y][1]=0);h.sort(numericalSort);const m=d.morphAttributes.position,g=d.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const v=h[y],x=v[0],w=v[1];x!==Number.MAX_SAFE_INTEGER&&w?(m&&d.getAttribute("morphTarget"+y)!==m[x]&&d.setAttribute("morphTarget"+y,m[x]),g&&d.getAttribute("morphNormal"+y)!==g[x]&&d.setAttribute("morphNormal"+y,g[x]),o[y]=w,_+=w):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),g&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),o[y]=0)}const b=d.morphTargetsRelative?1:1-_;i.getUniforms().setValue(s,"morphTargetBaseInfluence",b),i.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:p}}function WebGLObjects(s,e,t,r){let o=new WeakMap;function c(p){const f=r.render.frame,d=p.geometry,i=e.get(p,d);if(o.get(i)!==f&&(e.update(i),o.set(i,f)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==f&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,f))),p.isSkinnedMesh){const n=p.skeleton;o.get(n)!==f&&(n.update(),o.set(n,f))}return i}function l(){o=new WeakMap}function h(p){const f=p.target;f.removeEventListener("dispose",h),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:c,dispose:l}}class DepthTexture extends Texture{constructor(e,t,r,o,c,l,h,p,f,d){if(d=d!==void 0?d:DepthFormat,d!==DepthFormat&&d!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&d===DepthFormat&&(r=UnsignedIntType),r===void 0&&d===DepthStencilFormat&&(r=UnsignedInt248Type),super(null,o,c,l,h,p,d,r,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:NearestFilter,this.minFilter=p!==void 0?p:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1);emptyShadowTexture.compareFunction=LessEqualCompare;const emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let c=arrayCacheF32[o];if(c===void 0&&(c=new Float32Array(o),arrayCacheF32[o]=c),e!==0){r.toArray(c,0);for(let l=1,h=0;l!==e;++l)h+=t,s[l].toArray(c,h)}return c}function arraysEqual(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function copyArray(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function allocTexUnits(s,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function setValueV1f(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;s.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;s.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;s.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(arraysEqual(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,r))return;mat2array.set(r),s.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,r)}}function setValueM3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(arraysEqual(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,r))return;mat3array.set(r),s.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,r)}}function setValueM4(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(arraysEqual(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,r))return;mat4array.set(r),s.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,r)}}function setValueV1i(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;s.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;s.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;s.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;s.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;s.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;s.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);const c=this.type===s.SAMPLER_2D_SHADOW?emptyShadowTexture:emptyTexture;t.setTexture2D(e||c,o)}function setValueT3D1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||empty3dTexture,o)}function setValueT6(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||emptyCubeTexture,o)}function setValueT2DArray1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||emptyArrayTexture,o)}function getSingularSetter(s){switch(s){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(s,e){s.uniform1fv(this.addr,e)}function setValueV2fArray(s,e){const t=flatten(e,this.size,2);s.uniform2fv(this.addr,t)}function setValueV3fArray(s,e){const t=flatten(e,this.size,3);s.uniform3fv(this.addr,t)}function setValueV4fArray(s,e){const t=flatten(e,this.size,4);s.uniform4fv(this.addr,t)}function setValueM2Array(s,e){const t=flatten(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(s,e){const t=flatten(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(s,e){const t=flatten(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(s,e){s.uniform1iv(this.addr,e)}function setValueV2iArray(s,e){s.uniform2iv(this.addr,e)}function setValueV3iArray(s,e){s.uniform3iv(this.addr,e)}function setValueV4iArray(s,e){s.uniform4iv(this.addr,e)}function setValueV1uiArray(s,e){s.uniform1uiv(this.addr,e)}function setValueV2uiArray(s,e){s.uniform2uiv(this.addr,e)}function setValueV3uiArray(s,e){s.uniform3uiv(this.addr,e)}function setValueV4uiArray(s,e){s.uniform4uiv(this.addr,e)}function setValueT1Array(s,e,t){const r=this.cache,o=e.length,c=allocTexUnits(t,o);arraysEqual(r,c)||(s.uniform1iv(this.addr,c),copyArray(r,c));for(let l=0;l!==o;++l)t.setTexture2D(e[l]||emptyTexture,c[l])}function setValueT3DArray(s,e,t){const r=this.cache,o=e.length,c=allocTexUnits(t,o);arraysEqual(r,c)||(s.uniform1iv(this.addr,c),copyArray(r,c));for(let l=0;l!==o;++l)t.setTexture3D(e[l]||empty3dTexture,c[l])}function setValueT6Array(s,e,t){const r=this.cache,o=e.length,c=allocTexUnits(t,o);arraysEqual(r,c)||(s.uniform1iv(this.addr,c),copyArray(r,c));for(let l=0;l!==o;++l)t.setTextureCube(e[l]||emptyCubeTexture,c[l])}function setValueT2DArrayArray(s,e,t){const r=this.cache,o=e.length,c=allocTexUnits(t,o);arraysEqual(r,c)||(s.uniform1iv(this.addr,c),copyArray(r,c));for(let l=0;l!==o;++l)t.setTexture2DArray(e[l]||emptyArrayTexture,c[l])}function getPureArraySetter(s){switch(s){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let c=0,l=o.length;c!==l;++c){const h=o[c];h.setValue(e,t[h.id],r)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(s,e){s.seq.push(e),s.map[e.id]=e}function parseUniform(s,e,t){const r=s.name,o=r.length;for(RePathPart.lastIndex=0;;){const c=RePathPart.exec(r),l=RePathPart.lastIndex;let h=c[1];const p=c[2]==="]",f=c[3];if(p&&(h=h|0),f===void 0||f==="["&&l+2===o){addUniform(t,f===void 0?new SingleUniform(h,s,e):new PureArrayUniform(h,s,e));break}else{let i=t.map[h];i===void 0&&(i=new StructuredUniform(h),addUniform(t,i)),t=i}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(t,o),l=e.getUniformLocation(t,c.name);parseUniform(c,l,this)}}setValue(e,t,r,o){const c=this.map[t];c!==void 0&&c.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let c=0,l=t.length;c!==l;++c){const h=t[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,c=e.length;o!==c;++o){const l=e[o];l.id in t&&r.push(l)}return r}}function WebGLShader(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let l=o;l<c;l++){const h=l+1;r.push(`${h===e?">":" "} ${h}: ${t[l]}`)}return r.join(`
`)}function getEncodingComponents(s){const e=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),t=ColorManagement.getPrimaries(s);let r;switch(e===t?r="":e===P3Primaries&&t===Rec709Primaries?r="LinearDisplayP3ToLinearSRGB":e===Rec709Primaries&&t===P3Primaries&&(r="LinearSRGBToLinearDisplayP3"),s){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[r,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function getShaderErrors(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const l=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+handleSource(s.getShaderSource(e),l)}else return o}function getTexelEncodingFunction(s,e){const t=getEncodingComponents(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function getToneMappingFunction(s,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case AgXToneMapping:t="AgX";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateVertexExtensions(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fetchAttributeLocations(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),l=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),t[l]={type:c.type,location:s.getAttribLocation(e,l),locationSize:h}}return t}function filterEmptyLine(s){return s!==""}function replaceLightNums(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(s){return s.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function includeReplacer(s,e){let t=ShaderChunk[e];if(t===void 0){const r=shaderChunkMap.get(e);if(r!==void 0)t=ShaderChunk[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(s){return s.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(s,e,t,r){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function generatePrecision(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function WebGLProgram(s,e,t,r){const o=s.getContext(),c=t.defines;let l=t.vertexShader,h=t.fragmentShader;const p=generateShadowMapTypeDefine(t),f=generateEnvMapTypeDefine(t),d=generateEnvMapModeDefine(t),i=generateEnvMapBlendingDefine(t),n=generateCubeUVSize(t),a=t.isWebGL2?"":generateExtensions(t),u=generateVertexExtensions(t),m=generateDefines(c),g=o.createProgram();let _,b,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`),b=[a,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(filterEmptyLine).join(`
`),b.length>0&&(b+=`
`)):(_=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),b=[a,generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+i:"",n?"#define CUBEUV_TEXEL_WIDTH "+n.texelWidth:"",n?"#define CUBEUV_TEXEL_HEIGHT "+n.texelHeight:"",n?"#define CUBEUV_MAX_MIP "+n.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),l=resolveIncludes(l),l=replaceLightNums(l,t),l=replaceClippingPlaneNums(l,t),h=resolveIncludes(h),h=replaceLightNums(h,t),h=replaceClippingPlaneNums(h,t),l=unrollLoops(l),h=unrollLoops(h),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[u,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const v=y+_+l,x=y+b+h,w=WebGLShader(o,o.VERTEX_SHADER,v),S=WebGLShader(o,o.FRAGMENT_SHADER,x);o.attachShader(g,w),o.attachShader(g,S),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function M(I){if(s.debug.checkShaderErrors){const k=o.getProgramInfoLog(g).trim(),C=o.getShaderInfoLog(w).trim(),z=o.getShaderInfoLog(S).trim();let O=!0,U=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,g,w,S);else{const K=getShaderErrors(o,w,"vertex"),$=getShaderErrors(o,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+K+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(C===""||z==="")&&(U=!1);U&&(I.diagnostics={runnable:O,programLog:k,vertexShader:{log:C,prefix:_},fragmentShader:{log:z,prefix:b}})}o.deleteShader(w),o.deleteShader(S),T=new WebGLUniforms(o,g),E=fetchAttributeLocations(o,g)}let T;this.getUniforms=function(){return T===void 0&&M(this),T};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(g,COMPLETION_STATUS_KHR)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),c=this._getShaderStage(r),l=this._getShaderCacheForMaterial(e);return l.has(o)===!1&&(l.add(o),o.usedTimes++),l.has(c)===!1&&(l.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new WebGLShaderStage(e),t.set(e,r)),r}}class WebGLShaderStage{constructor(e){this.id=_id$1++,this.code=e,this.usedTimes=0}}function WebGLPrograms(s,e,t,r,o,c,l){const h=new Layers,p=new WebGLShaderCache,f=[],d=o.isWebGL2,i=o.logarithmicDepthBuffer,n=o.vertexTextures;let a=o.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return T===0?"uv":`uv${T}`}function g(T,E,R,I,k){const C=I.fog,z=k.geometry,O=T.isMeshStandardMaterial?I.environment:null,U=(T.isMeshStandardMaterial?t:e).get(T.envMap||O),K=U&&U.mapping===CubeUVReflectionMapping?U.image.height:null,$=u[T.type];T.precision!==null&&(a=o.getMaxPrecision(T.precision),a!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",a,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=J!==void 0?J.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let ie,le,de,Me;if($){const dt=ShaderLib[$];ie=dt.vertexShader,le=dt.fragmentShader}else ie=T.vertexShader,le=T.fragmentShader,p.update(T),de=p.getVertexShaderID(T),Me=p.getFragmentShaderID(T);const Ee=s.getRenderTarget(),Fe=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,Ce=!!T.map,je=!!T.matcap,ne=!!U,Qe=!!T.aoMap,Pe=!!T.lightMap,ze=!!T.bumpMap,De=!!T.normalMap,nt=!!T.displacementMap,qe=!!T.emissiveMap,B=!!T.metalnessMap,D=!!T.roughnessMap,re=T.anisotropy>0,ce=T.clearcoat>0,fe=T.iridescence>0,pe=T.sheen>0,Te=T.transmission>0,Oe=re&&!!T.anisotropyMap,Ne=ce&&!!T.clearcoatMap,He=ce&&!!T.clearcoatNormalMap,Xe=ce&&!!T.clearcoatRoughnessMap,me=fe&&!!T.iridescenceMap,rt=fe&&!!T.iridescenceThicknessMap,Ge=pe&&!!T.sheenColorMap,We=pe&&!!T.sheenRoughnessMap,_e=!!T.specularMap,Le=!!T.specularColorMap,H=!!T.specularIntensityMap,Se=Te&&!!T.transmissionMap,ke=Te&&!!T.thicknessMap,be=!!T.gradientMap,ge=!!T.alphaMap,X=T.alphaTest>0,we=!!T.alphaHash,ue=!!T.extensions,ve=!!z.attributes.uv1,ye=!!z.attributes.uv2,Ze=!!z.attributes.uv3;let Ke=NoToneMapping;return T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ke=s.toneMapping),{isWebGL2:d,shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:ie,fragmentShader:le,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:a,batching:Be,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:LinearSRGBColorSpace,map:Ce,matcap:je,envMap:ne,envMapMode:ne&&U.mapping,envMapCubeUVHeight:K,aoMap:Qe,lightMap:Pe,bumpMap:ze,normalMap:De,displacementMap:n&&nt,emissiveMap:qe,normalMapObjectSpace:De&&T.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:De&&T.normalMapType===TangentSpaceNormalMap,metalnessMap:B,roughnessMap:D,anisotropy:re,anisotropyMap:Oe,clearcoat:ce,clearcoatMap:Ne,clearcoatNormalMap:He,clearcoatRoughnessMap:Xe,iridescence:fe,iridescenceMap:me,iridescenceThicknessMap:rt,sheen:pe,sheenColorMap:Ge,sheenRoughnessMap:We,specularMap:_e,specularColorMap:Le,specularIntensityMap:H,transmission:Te,transmissionMap:Se,thicknessMap:ke,gradientMap:be,opaque:T.transparent===!1&&T.blending===NormalBlending,alphaMap:ge,alphaTest:X,alphaHash:we,combine:T.combine,mapUv:Ce&&m(T.map.channel),aoMapUv:Qe&&m(T.aoMap.channel),lightMapUv:Pe&&m(T.lightMap.channel),bumpMapUv:ze&&m(T.bumpMap.channel),normalMapUv:De&&m(T.normalMap.channel),displacementMapUv:nt&&m(T.displacementMap.channel),emissiveMapUv:qe&&m(T.emissiveMap.channel),metalnessMapUv:B&&m(T.metalnessMap.channel),roughnessMapUv:D&&m(T.roughnessMap.channel),anisotropyMapUv:Oe&&m(T.anisotropyMap.channel),clearcoatMapUv:Ne&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:He&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(T.sheenRoughnessMap.channel),specularMapUv:_e&&m(T.specularMap.channel),specularColorMapUv:Le&&m(T.specularColorMap.channel),specularIntensityMapUv:H&&m(T.specularIntensityMap.channel),transmissionMapUv:Se&&m(T.transmissionMap.channel),thicknessMapUv:ke&&m(T.thicknessMap.channel),alphaMapUv:ge&&m(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(De||re),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:ye,vertexUv3s:Ze,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Ce||ge),fog:!!C,useFog:T.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:i,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:he,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ce&&T.map.isVideoTexture===!0&&ColorManagement.getTransfer(T.map.colorSpace)===SRGBTransfer,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===DoubleSide,flipSided:T.side===BackSide,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ue&&T.extensions.derivatives===!0,extensionFragDepth:ue&&T.extensions.fragDepth===!0,extensionDrawBuffers:ue&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&T.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function _(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)E.push(R),E.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(b(E,T),y(E,T),E.push(s.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function b(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function y(T,E){h.disableAll(),E.isWebGL2&&h.enable(0),E.supportsVertexTextures&&h.enable(1),E.instancing&&h.enable(2),E.instancingColor&&h.enable(3),E.matcap&&h.enable(4),E.envMap&&h.enable(5),E.normalMapObjectSpace&&h.enable(6),E.normalMapTangentSpace&&h.enable(7),E.clearcoat&&h.enable(8),E.iridescence&&h.enable(9),E.alphaTest&&h.enable(10),E.vertexColors&&h.enable(11),E.vertexAlphas&&h.enable(12),E.vertexUv1s&&h.enable(13),E.vertexUv2s&&h.enable(14),E.vertexUv3s&&h.enable(15),E.vertexTangents&&h.enable(16),E.anisotropy&&h.enable(17),E.alphaHash&&h.enable(18),E.batching&&h.enable(19),T.push(h.mask),h.disableAll(),E.fog&&h.enable(0),E.useFog&&h.enable(1),E.flatShading&&h.enable(2),E.logarithmicDepthBuffer&&h.enable(3),E.skinning&&h.enable(4),E.morphTargets&&h.enable(5),E.morphNormals&&h.enable(6),E.morphColors&&h.enable(7),E.premultipliedAlpha&&h.enable(8),E.shadowMapEnabled&&h.enable(9),E.useLegacyLights&&h.enable(10),E.doubleSided&&h.enable(11),E.flipSided&&h.enable(12),E.useDepthPacking&&h.enable(13),E.dithering&&h.enable(14),E.transmission&&h.enable(15),E.sheen&&h.enable(16),E.opaque&&h.enable(17),E.pointsUvs&&h.enable(18),E.decodeVideoTexture&&h.enable(19),T.push(h.mask)}function v(T){const E=u[T.type];let R;if(E){const I=ShaderLib[E];R=UniformsUtils.clone(I.uniforms)}else R=T.uniforms;return R}function x(T,E){let R;for(let I=0,k=f.length;I<k;I++){const C=f[I];if(C.cacheKey===E){R=C,++R.usedTimes;break}}return R===void 0&&(R=new WebGLProgram(s,E,T,c),f.push(R)),R}function w(T){if(--T.usedTimes===0){const E=f.indexOf(T);f[E]=f[f.length-1],f.pop(),T.destroy()}}function S(T){p.remove(T)}function M(){p.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:x,releaseProgram:w,releaseShaderCache:S,programs:f,dispose:M}}function WebGLProperties(){let s=new WeakMap;function e(c){let l=s.get(c);return l===void 0&&(l={},s.set(c,l)),l}function t(c){s.delete(c)}function r(c,l,h){s.get(c)[l]=h}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function painterSortStable(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function reversePainterSortStable(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function WebGLRenderList(){const s=[];let e=0;const t=[],r=[],o=[];function c(){e=0,t.length=0,r.length=0,o.length=0}function l(i,n,a,u,m,g){let _=s[e];return _===void 0?(_={id:i.id,object:i,geometry:n,material:a,groupOrder:u,renderOrder:i.renderOrder,z:m,group:g},s[e]=_):(_.id=i.id,_.object=i,_.geometry=n,_.material=a,_.groupOrder=u,_.renderOrder=i.renderOrder,_.z=m,_.group=g),e++,_}function h(i,n,a,u,m,g){const _=l(i,n,a,u,m,g);a.transmission>0?r.push(_):a.transparent===!0?o.push(_):t.push(_)}function p(i,n,a,u,m,g){const _=l(i,n,a,u,m,g);a.transmission>0?r.unshift(_):a.transparent===!0?o.unshift(_):t.unshift(_)}function f(i,n){t.length>1&&t.sort(i||painterSortStable),r.length>1&&r.sort(n||reversePainterSortStable),o.length>1&&o.sort(n||reversePainterSortStable)}function d(){for(let i=e,n=s.length;i<n;i++){const a=s[i];if(a.id===null)break;a.id=null,a.object=null,a.geometry=null,a.material=null,a.group=null}}return{opaque:t,transmissive:r,transparent:o,init:c,push:h,unshift:p,finish:d,sort:f}}function WebGLRenderLists(){let s=new WeakMap;function e(r,o){const c=s.get(r);let l;return c===void 0?(l=new WebGLRenderList,s.set(r,[l])):o>=c.length?(l=new WebGLRenderList,c.push(l)):l=c[o],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return s[e.id]=t,t}}}function ShadowUniformsCache(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function WebGLLights(s,e){const t=new UniformsCache,r=ShadowUniformsCache(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)o.probe.push(new Vector3);const c=new Vector3,l=new Matrix4,h=new Matrix4;function p(d,i){let n=0,a=0,u=0;for(let I=0;I<9;I++)o.probe[I].set(0,0,0);let m=0,g=0,_=0,b=0,y=0,v=0,x=0,w=0,S=0,M=0,T=0;d.sort(shadowCastingAndTexturingLightsFirst);const E=i===!0?Math.PI:1;for(let I=0,k=d.length;I<k;I++){const C=d[I],z=C.color,O=C.intensity,U=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)n+=z.r*O*E,a+=z.g*O*E,u+=z.b*O*E;else if(C.isLightProbe){for(let $=0;$<9;$++)o.probe[$].addScaledVector(C.sh.coefficients[$],O);T++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const J=C.shadow,ee=r.get(C);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,o.directionalShadow[m]=ee,o.directionalShadowMap[m]=K,o.directionalShadowMatrix[m]=C.shadow.matrix,v++}o.directional[m]=$,m++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(z).multiplyScalar(O*E),$.distance=U,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,o.spot[_]=$;const J=C.shadow;if(C.map&&(o.spotLightMap[S]=C.map,S++,J.updateMatrices(C),C.castShadow&&M++),o.spotLightMatrix[_]=J.matrix,C.castShadow){const ee=r.get(C);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,o.spotShadow[_]=ee,o.spotShadowMap[_]=K,w++}_++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(z).multiplyScalar(O),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),o.rectArea[b]=$,b++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity*E),$.distance=C.distance,$.decay=C.decay,C.castShadow){const J=C.shadow,ee=r.get(C);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,o.pointShadow[g]=ee,o.pointShadowMap[g]=K,o.pointShadowMatrix[g]=C.shadow.matrix,x++}o.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(O*E),$.groundColor.copy(C.groundColor).multiplyScalar(O*E),o.hemi[y]=$,y++}}b>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,o.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(o.rectAreaLTC1=UniformsLib.LTC_HALF_1,o.rectAreaLTC2=UniformsLib.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,o.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_HALF_1,o.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=n,o.ambient[1]=a,o.ambient[2]=u;const R=o.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==b||R.hemiLength!==y||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==w||R.numSpotMaps!==S||R.numLightProbes!==T)&&(o.directional.length=m,o.spot.length=_,o.rectArea.length=b,o.point.length=g,o.hemi.length=y,o.directionalShadow.length=v,o.directionalShadowMap.length=v,o.pointShadow.length=x,o.pointShadowMap.length=x,o.spotShadow.length=w,o.spotShadowMap.length=w,o.directionalShadowMatrix.length=v,o.pointShadowMatrix.length=x,o.spotLightMatrix.length=w+S-M,o.spotLightMap.length=S,o.numSpotLightShadowsWithMaps=M,o.numLightProbes=T,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=b,R.hemiLength=y,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=w,R.numSpotMaps=S,R.numLightProbes=T,o.version=nextVersion++)}function f(d,i){let n=0,a=0,u=0,m=0,g=0;const _=i.matrixWorldInverse;for(let b=0,y=d.length;b<y;b++){const v=d[b];if(v.isDirectionalLight){const x=o.directional[n];x.direction.setFromMatrixPosition(v.matrixWorld),c.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(c),x.direction.transformDirection(_),n++}else if(v.isSpotLight){const x=o.spot[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),c.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(c),x.direction.transformDirection(_),u++}else if(v.isRectAreaLight){const x=o.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),h.identity(),l.copy(v.matrixWorld),l.premultiply(_),h.extractRotation(l),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(h),x.halfHeight.applyMatrix4(h),m++}else if(v.isPointLight){const x=o.point[a];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),a++}else if(v.isHemisphereLight){const x=o.hemi[g];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:p,setupView:f,state:o}}function WebGLRenderState(s,e){const t=new WebGLLights(s,e),r=[],o=[];function c(){r.length=0,o.length=0}function l(i){r.push(i)}function h(i){o.push(i)}function p(i){t.setup(r,i)}function f(i){t.setupView(r,i)}return{init:c,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:p,setupLightsView:f,pushLight:l,pushShadow:h}}function WebGLRenderStates(s,e){let t=new WeakMap;function r(c,l=0){const h=t.get(c);let p;return h===void 0?(p=new WebGLRenderState(s,e),t.set(c,[p])):l>=h.length?(p=new WebGLRenderState(s,e),h.push(p)):p=h[l],p}function o(){t=new WeakMap}return{get:r,dispose:o}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(s,e,t){let r=new Frustum;const o=new Vector2,c=new Vector2,l=new Vector4,h=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),p=new MeshDistanceMaterial,f={},d=t.maxTextureSize,i={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},n=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),a=n.clone();a.defines.HORIZONTAL_PASS=1;const u=new BufferGeometry;u.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Mesh(u,n),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let _=this.type;this.render=function(w,S,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),I=s.state;I.setBlending(NoBlending),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=_!==VSMShadowMap&&this.type===VSMShadowMap,C=_===VSMShadowMap&&this.type!==VSMShadowMap;for(let z=0,O=w.length;z<O;z++){const U=w[z],K=U.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const $=K.getFrameExtents();if(o.multiply($),c.copy(K.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(c.x=Math.floor(d/$.x),o.x=c.x*$.x,K.mapSize.x=c.x),o.y>d&&(c.y=Math.floor(d/$.y),o.y=c.y*$.y,K.mapSize.y=c.y)),K.map===null||k===!0||C===!0){const ee=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};K.map!==null&&K.map.dispose(),K.map=new WebGLRenderTarget(o.x,o.y,ee),K.map.texture.name=U.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const J=K.getViewportCount();for(let ee=0;ee<J;ee++){const he=K.getViewport(ee);l.set(c.x*he.x,c.y*he.y,c.x*he.z,c.y*he.w),I.viewport(l),K.updateMatrices(U,ee),r=K.getFrustum(),v(S,M,K.camera,U,this.type)}K.isPointLightShadow!==!0&&this.type===VSMShadowMap&&b(K,M),K.needsUpdate=!1}_=this.type,g.needsUpdate=!1,s.setRenderTarget(T,E,R)};function b(w,S){const M=e.update(m);n.defines.VSM_SAMPLES!==w.blurSamples&&(n.defines.VSM_SAMPLES=w.blurSamples,a.defines.VSM_SAMPLES=w.blurSamples,n.needsUpdate=!0,a.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new WebGLRenderTarget(o.x,o.y)),n.uniforms.shadow_pass.value=w.map.texture,n.uniforms.resolution.value=w.mapSize,n.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(S,null,M,n,m,null),a.uniforms.shadow_pass.value=w.mapPass.texture,a.uniforms.resolution.value=w.mapSize,a.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(S,null,M,a,m,null)}function y(w,S,M,T){let E=null;const R=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=M.isPointLight===!0?p:h,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=E.uuid,k=S.uuid;let C=f[I];C===void 0&&(C={},f[I]=C);let z=C[k];z===void 0&&(z=E.clone(),C[k]=z,S.addEventListener("dispose",x)),E=z}if(E.visible=S.visible,E.wireframe=S.wireframe,T===VSMShadowMap?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:i[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=s.properties.get(E);I.light=M}return E}function v(w,S,M,T,E){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===VSMShadowMap)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const k=e.update(w),C=w.material;if(Array.isArray(C)){const z=k.groups;for(let O=0,U=z.length;O<U;O++){const K=z[O],$=C[K.materialIndex];if($&&$.visible){const J=y(w,$,T,E);w.onBeforeShadow(s,w,S,M,k,J,K),s.renderBufferDirect(M,null,k,J,w,K),w.onAfterShadow(s,w,S,M,k,J,K)}}}else if(C.visible){const z=y(w,C,T,E);w.onBeforeShadow(s,w,S,M,k,z,null),s.renderBufferDirect(M,null,k,z,w,null),w.onAfterShadow(s,w,S,M,k,z,null)}}const I=w.children;for(let k=0,C=I.length;k<C;k++)v(I[k],S,M,T,E)}function x(w){w.target.removeEventListener("dispose",x);for(const M in f){const T=f[M],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function WebGLState(s,e,t){const r=t.isWebGL2;function o(){let X=!1;const we=new Vector4;let ue=null;const ve=new Vector4(0,0,0,0);return{setMask:function(ye){ue!==ye&&!X&&(s.colorMask(ye,ye,ye,ye),ue=ye)},setLocked:function(ye){X=ye},setClear:function(ye,Ze,Ke,ct,dt){dt===!0&&(ye*=ct,Ze*=ct,Ke*=ct),we.set(ye,Ze,Ke,ct),ve.equals(we)===!1&&(s.clearColor(ye,Ze,Ke,ct),ve.copy(we))},reset:function(){X=!1,ue=null,ve.set(-1,0,0,0)}}}function c(){let X=!1,we=null,ue=null,ve=null;return{setTest:function(ye){ye?Be(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(ye){we!==ye&&!X&&(s.depthMask(ye),we=ye)},setFunc:function(ye){if(ue!==ye){switch(ye){case NeverDepth:s.depthFunc(s.NEVER);break;case AlwaysDepth:s.depthFunc(s.ALWAYS);break;case LessDepth:s.depthFunc(s.LESS);break;case LessEqualDepth:s.depthFunc(s.LEQUAL);break;case EqualDepth:s.depthFunc(s.EQUAL);break;case GreaterEqualDepth:s.depthFunc(s.GEQUAL);break;case GreaterDepth:s.depthFunc(s.GREATER);break;case NotEqualDepth:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=ye}},setLocked:function(ye){X=ye},setClear:function(ye){ve!==ye&&(s.clearDepth(ye),ve=ye)},reset:function(){X=!1,we=null,ue=null,ve=null}}}function l(){let X=!1,we=null,ue=null,ve=null,ye=null,Ze=null,Ke=null,ct=null,dt=null;return{setTest:function(it){X||(it?Be(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(it){we!==it&&!X&&(s.stencilMask(it),we=it)},setFunc:function(it,pt,vt){(ue!==it||ve!==pt||ye!==vt)&&(s.stencilFunc(it,pt,vt),ue=it,ve=pt,ye=vt)},setOp:function(it,pt,vt){(Ze!==it||Ke!==pt||ct!==vt)&&(s.stencilOp(it,pt,vt),Ze=it,Ke=pt,ct=vt)},setLocked:function(it){X=it},setClear:function(it){dt!==it&&(s.clearStencil(it),dt=it)},reset:function(){X=!1,we=null,ue=null,ve=null,ye=null,Ze=null,Ke=null,ct=null,dt=null}}}const h=new o,p=new c,f=new l,d=new WeakMap,i=new WeakMap;let n={},a={},u=new WeakMap,m=[],g=null,_=!1,b=null,y=null,v=null,x=null,w=null,S=null,M=null,T=new Color(0,0,0),E=0,R=!1,I=null,k=null,C=null,z=null,O=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=$>=2);let ee=null,he={};const ie=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),de=new Vector4().fromArray(ie),Me=new Vector4().fromArray(le);function Ee(X,we,ue,ve){const ye=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(X,Ze),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ue;Ke++)r&&(X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(we+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return Ze}const Fe={};Fe[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Fe[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Fe[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Fe[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),f.setClear(0),Be(s.DEPTH_TEST),p.setFunc(LessEqualDepth),qe(!1),B(CullFaceBack),Be(s.CULL_FACE),De(NoBlending);function Be(X){n[X]!==!0&&(s.enable(X),n[X]=!0)}function Ce(X){n[X]!==!1&&(s.disable(X),n[X]=!1)}function je(X,we){return a[X]!==we?(s.bindFramebuffer(X,we),a[X]=we,r&&(X===s.DRAW_FRAMEBUFFER&&(a[s.FRAMEBUFFER]=we),X===s.FRAMEBUFFER&&(a[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function ne(X,we){let ue=m,ve=!1;if(X)if(ue=u.get(we),ue===void 0&&(ue=[],u.set(we,ue)),X.isWebGLMultipleRenderTargets){const ye=X.texture;if(ue.length!==ye.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,Ke=ye.length;Ze<Ke;Ze++)ue[Ze]=s.COLOR_ATTACHMENT0+Ze;ue.length=ye.length,ve=!0}}else ue[0]!==s.COLOR_ATTACHMENT0&&(ue[0]=s.COLOR_ATTACHMENT0,ve=!0);else ue[0]!==s.BACK&&(ue[0]=s.BACK,ve=!0);ve&&(t.isWebGL2?s.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Qe(X){return g!==X?(s.useProgram(X),g=X,!0):!1}const Pe={[AddEquation]:s.FUNC_ADD,[SubtractEquation]:s.FUNC_SUBTRACT,[ReverseSubtractEquation]:s.FUNC_REVERSE_SUBTRACT};if(r)Pe[MinEquation]=s.MIN,Pe[MaxEquation]=s.MAX;else{const X=e.get("EXT_blend_minmax");X!==null&&(Pe[MinEquation]=X.MIN_EXT,Pe[MaxEquation]=X.MAX_EXT)}const ze={[ZeroFactor]:s.ZERO,[OneFactor]:s.ONE,[SrcColorFactor]:s.SRC_COLOR,[SrcAlphaFactor]:s.SRC_ALPHA,[SrcAlphaSaturateFactor]:s.SRC_ALPHA_SATURATE,[DstColorFactor]:s.DST_COLOR,[DstAlphaFactor]:s.DST_ALPHA,[OneMinusSrcColorFactor]:s.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:s.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:s.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:s.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:s.CONSTANT_COLOR,[OneMinusConstantColorFactor]:s.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:s.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:s.ONE_MINUS_CONSTANT_ALPHA};function De(X,we,ue,ve,ye,Ze,Ke,ct,dt,it){if(X===NoBlending){_===!0&&(Ce(s.BLEND),_=!1);return}if(_===!1&&(Be(s.BLEND),_=!0),X!==CustomBlending){if(X!==b||it!==R){if((y!==AddEquation||w!==AddEquation)&&(s.blendEquation(s.FUNC_ADD),y=AddEquation,w=AddEquation),it)switch(X){case NormalBlending:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:s.blendFunc(s.ONE,s.ONE);break;case SubtractiveBlending:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case MultiplyBlending:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case NormalBlending:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case SubtractiveBlending:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case MultiplyBlending:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,x=null,S=null,M=null,T.set(0,0,0),E=0,b=X,R=it}return}ye=ye||we,Ze=Ze||ue,Ke=Ke||ve,(we!==y||ye!==w)&&(s.blendEquationSeparate(Pe[we],Pe[ye]),y=we,w=ye),(ue!==v||ve!==x||Ze!==S||Ke!==M)&&(s.blendFuncSeparate(ze[ue],ze[ve],ze[Ze],ze[Ke]),v=ue,x=ve,S=Ze,M=Ke),(ct.equals(T)===!1||dt!==E)&&(s.blendColor(ct.r,ct.g,ct.b,dt),T.copy(ct),E=dt),b=X,R=!1}function nt(X,we){X.side===DoubleSide?Ce(s.CULL_FACE):Be(s.CULL_FACE);let ue=X.side===BackSide;we&&(ue=!ue),qe(ue),X.blending===NormalBlending&&X.transparent===!1?De(NoBlending):De(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),p.setFunc(X.depthFunc),p.setTest(X.depthTest),p.setMask(X.depthWrite),h.setMask(X.colorWrite);const ve=X.stencilWrite;f.setTest(ve),ve&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),re(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Be(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(X){I!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),I=X)}function B(X){X!==CullFaceNone?(Be(s.CULL_FACE),X!==k&&(X===CullFaceBack?s.cullFace(s.BACK):X===CullFaceFront?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),k=X}function D(X){X!==C&&(K&&s.lineWidth(X),C=X)}function re(X,we,ue){X?(Be(s.POLYGON_OFFSET_FILL),(z!==we||O!==ue)&&(s.polygonOffset(we,ue),z=we,O=ue)):Ce(s.POLYGON_OFFSET_FILL)}function ce(X){X?Be(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function fe(X){X===void 0&&(X=s.TEXTURE0+U-1),ee!==X&&(s.activeTexture(X),ee=X)}function pe(X,we,ue){ue===void 0&&(ee===null?ue=s.TEXTURE0+U-1:ue=ee);let ve=he[ue];ve===void 0&&(ve={type:void 0,texture:void 0},he[ue]=ve),(ve.type!==X||ve.texture!==we)&&(ee!==ue&&(s.activeTexture(ue),ee=ue),s.bindTexture(X,we||Fe[X]),ve.type=X,ve.texture=we)}function Te(){const X=he[ee];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function H(X){de.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),de.copy(X))}function Se(X){Me.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Me.copy(X))}function ke(X,we){let ue=i.get(we);ue===void 0&&(ue=new WeakMap,i.set(we,ue));let ve=ue.get(X);ve===void 0&&(ve=s.getUniformBlockIndex(we,X.name),ue.set(X,ve))}function be(X,we){const ve=i.get(we).get(X);d.get(we)!==ve&&(s.uniformBlockBinding(we,ve,X.__bindingPointIndex),d.set(we,ve))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),n={},ee=null,he={},a={},u=new WeakMap,m=[],g=null,_=!1,b=null,y=null,v=null,x=null,w=null,S=null,M=null,T=new Color(0,0,0),E=0,R=!1,I=null,k=null,C=null,z=null,O=null,de.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),h.reset(),p.reset(),f.reset()}return{buffers:{color:h,depth:p,stencil:f},enable:Be,disable:Ce,bindFramebuffer:je,drawBuffers:ne,useProgram:Qe,setBlending:De,setMaterial:nt,setFlipSided:qe,setCullFace:B,setLineWidth:D,setPolygonOffset:re,setScissorTest:ce,activeTexture:fe,bindTexture:pe,unbindTexture:Te,compressedTexImage2D:Oe,compressedTexImage3D:Ne,texImage2D:_e,texImage3D:Le,updateUBOMapping:ke,uniformBlockBinding:be,texStorage2D:Ge,texStorage3D:We,texSubImage2D:He,texSubImage3D:Xe,compressedTexSubImage2D:me,compressedTexSubImage3D:rt,scissor:H,viewport:Se,reset:ge}}function WebGLTextures(s,e,t,r,o,c,l){const h=o.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let i;const n=new WeakMap;let a=!1;try{a=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(B,D){return a?new OffscreenCanvas(B,D):createElementNS("canvas")}function m(B,D,re,ce){let fe=1;if((B.width>ce||B.height>ce)&&(fe=ce/Math.max(B.width,B.height)),fe<1||D===!0)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap){const pe=D?floorPowerOfTwo:Math.floor,Te=pe(fe*B.width),Oe=pe(fe*B.height);i===void 0&&(i=u(Te,Oe));const Ne=re?u(Te,Oe):i;return Ne.width=Te,Ne.height=Oe,Ne.getContext("2d").drawImage(B,0,0,Te,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+Te+"x"+Oe+")."),Ne}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function g(B){return isPowerOfTwo$1(B.width)&&isPowerOfTwo$1(B.height)}function _(B){return h?!1:B.wrapS!==ClampToEdgeWrapping||B.wrapT!==ClampToEdgeWrapping||B.minFilter!==NearestFilter&&B.minFilter!==LinearFilter}function b(B,D){return B.generateMipmaps&&D&&B.minFilter!==NearestFilter&&B.minFilter!==LinearFilter}function y(B){s.generateMipmap(B)}function v(B,D,re,ce,fe=!1){if(h===!1)return D;if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pe=D;if(D===s.RED&&(re===s.FLOAT&&(pe=s.R32F),re===s.HALF_FLOAT&&(pe=s.R16F),re===s.UNSIGNED_BYTE&&(pe=s.R8)),D===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.R8UI),re===s.UNSIGNED_SHORT&&(pe=s.R16UI),re===s.UNSIGNED_INT&&(pe=s.R32UI),re===s.BYTE&&(pe=s.R8I),re===s.SHORT&&(pe=s.R16I),re===s.INT&&(pe=s.R32I)),D===s.RG&&(re===s.FLOAT&&(pe=s.RG32F),re===s.HALF_FLOAT&&(pe=s.RG16F),re===s.UNSIGNED_BYTE&&(pe=s.RG8)),D===s.RGBA){const Te=fe?LinearTransfer:ColorManagement.getTransfer(ce);re===s.FLOAT&&(pe=s.RGBA32F),re===s.HALF_FLOAT&&(pe=s.RGBA16F),re===s.UNSIGNED_BYTE&&(pe=Te===SRGBTransfer?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function x(B,D,re){return b(B,re)===!0||B.isFramebufferTexture&&B.minFilter!==NearestFilter&&B.minFilter!==LinearFilter?Math.log2(Math.max(D.width,D.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?D.mipmaps.length:1}function w(B){return B===NearestFilter||B===NearestMipmapNearestFilter||B===NearestMipmapLinearFilter?s.NEAREST:s.LINEAR}function S(B){const D=B.target;D.removeEventListener("dispose",S),T(D),D.isVideoTexture&&d.delete(D)}function M(B){const D=B.target;D.removeEventListener("dispose",M),R(D)}function T(B){const D=r.get(B);if(D.__webglInit===void 0)return;const re=B.source,ce=n.get(re);if(ce){const fe=ce[D.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(B),Object.keys(ce).length===0&&n.delete(re)}r.remove(B)}function E(B){const D=r.get(B);s.deleteTexture(D.__webglTexture);const re=B.source,ce=n.get(re);delete ce[D.__cacheKey],l.memory.textures--}function R(B){const D=B.texture,re=r.get(B),ce=r.get(D);if(ce.__webglTexture!==void 0&&(s.deleteTexture(ce.__webglTexture),l.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(re.__webglFramebuffer[fe]))for(let pe=0;pe<re.__webglFramebuffer[fe].length;pe++)s.deleteFramebuffer(re.__webglFramebuffer[fe][pe]);else s.deleteFramebuffer(re.__webglFramebuffer[fe]);re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer[fe])}else{if(Array.isArray(re.__webglFramebuffer))for(let fe=0;fe<re.__webglFramebuffer.length;fe++)s.deleteFramebuffer(re.__webglFramebuffer[fe]);else s.deleteFramebuffer(re.__webglFramebuffer);if(re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&s.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let fe=0;fe<re.__webglColorRenderbuffer.length;fe++)re.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(re.__webglColorRenderbuffer[fe]);re.__webglDepthRenderbuffer&&s.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let fe=0,pe=D.length;fe<pe;fe++){const Te=r.get(D[fe]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),l.memory.textures--),r.remove(D[fe])}r.remove(D),r.remove(B)}let I=0;function k(){I=0}function C(){const B=I;return B>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),I+=1,B}function z(B){const D=[];return D.push(B.wrapS),D.push(B.wrapT),D.push(B.wrapR||0),D.push(B.magFilter),D.push(B.minFilter),D.push(B.anisotropy),D.push(B.internalFormat),D.push(B.format),D.push(B.type),D.push(B.generateMipmaps),D.push(B.premultiplyAlpha),D.push(B.flipY),D.push(B.unpackAlignment),D.push(B.colorSpace),D.join()}function O(B,D){const re=r.get(B);if(B.isVideoTexture&&nt(B),B.isRenderTargetTexture===!1&&B.version>0&&re.__version!==B.version){const ce=B.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(re,B,D);return}}t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+D)}function U(B,D){const re=r.get(B);if(B.version>0&&re.__version!==B.version){de(re,B,D);return}t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+D)}function K(B,D){const re=r.get(B);if(B.version>0&&re.__version!==B.version){de(re,B,D);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+D)}function $(B,D){const re=r.get(B);if(B.version>0&&re.__version!==B.version){Me(re,B,D);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+D)}const J={[RepeatWrapping]:s.REPEAT,[ClampToEdgeWrapping]:s.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:s.MIRRORED_REPEAT},ee={[NearestFilter]:s.NEAREST,[NearestMipmapNearestFilter]:s.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:s.NEAREST_MIPMAP_LINEAR,[LinearFilter]:s.LINEAR,[LinearMipmapNearestFilter]:s.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:s.LINEAR_MIPMAP_LINEAR},he={[NeverCompare]:s.NEVER,[AlwaysCompare]:s.ALWAYS,[LessCompare]:s.LESS,[LessEqualCompare]:s.LEQUAL,[EqualCompare]:s.EQUAL,[GreaterEqualCompare]:s.GEQUAL,[GreaterCompare]:s.GREATER,[NotEqualCompare]:s.NOTEQUAL};function ie(B,D,re){if(re?(s.texParameteri(B,s.TEXTURE_WRAP_S,J[D.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,J[D.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,J[D.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,ee[D.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,ee[D.minFilter])):(s.texParameteri(B,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(B,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(D.wrapS!==ClampToEdgeWrapping||D.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(B,s.TEXTURE_MAG_FILTER,w(D.magFilter)),s.texParameteri(B,s.TEXTURE_MIN_FILTER,w(D.minFilter)),D.minFilter!==NearestFilter&&D.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,he[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===NearestFilter||D.minFilter!==NearestMipmapLinearFilter&&D.minFilter!==LinearMipmapLinearFilter||D.type===FloatType&&e.has("OES_texture_float_linear")===!1||h===!1&&D.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||r.get(D).__currentAnisotropy)&&(s.texParameterf(B,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,o.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy)}}function le(B,D){let re=!1;B.__webglInit===void 0&&(B.__webglInit=!0,D.addEventListener("dispose",S));const ce=D.source;let fe=n.get(ce);fe===void 0&&(fe={},n.set(ce,fe));const pe=z(D);if(pe!==B.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,re=!0),fe[pe].usedTimes++;const Te=fe[B.__cacheKey];Te!==void 0&&(fe[B.__cacheKey].usedTimes--,Te.usedTimes===0&&E(D)),B.__cacheKey=pe,B.__webglTexture=fe[pe].texture}return re}function de(B,D,re){let ce=s.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ce=s.TEXTURE_3D);const fe=le(B,D),pe=D.source;t.bindTexture(ce,B.__webglTexture,s.TEXTURE0+re);const Te=r.get(pe);if(pe.version!==Te.__version||fe===!0){t.activeTexture(s.TEXTURE0+re);const Oe=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Ne=D.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(D.colorSpace),He=D.colorSpace===NoColorSpace||Oe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Xe=_(D)&&g(D.image)===!1;let me=m(D.image,Xe,!1,o.maxTextureSize);me=qe(D,me);const rt=g(me)||h,Ge=c.convert(D.format,D.colorSpace);let We=c.convert(D.type),_e=v(D.internalFormat,Ge,We,D.colorSpace,D.isVideoTexture);ie(ce,D,rt);let Le;const H=D.mipmaps,Se=h&&D.isVideoTexture!==!0&&_e!==RGB_ETC1_Format,ke=Te.__version===void 0||fe===!0,be=x(D,me,rt);if(D.isDepthTexture)_e=s.DEPTH_COMPONENT,h?D.type===FloatType?_e=s.DEPTH_COMPONENT32F:D.type===UnsignedIntType?_e=s.DEPTH_COMPONENT24:D.type===UnsignedInt248Type?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:D.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===DepthFormat&&_e===s.DEPTH_COMPONENT&&D.type!==UnsignedShortType&&D.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=UnsignedIntType,We=c.convert(D.type)),D.format===DepthStencilFormat&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,D.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=UnsignedInt248Type,We=c.convert(D.type))),ke&&(Se?t.texStorage2D(s.TEXTURE_2D,1,_e,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,_e,me.width,me.height,0,Ge,We,null));else if(D.isDataTexture)if(H.length>0&&rt){Se&&ke&&t.texStorage2D(s.TEXTURE_2D,be,_e,H[0].width,H[0].height);for(let ge=0,X=H.length;ge<X;ge++)Le=H[ge],Se?t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ge,We,Le.data):t.texImage2D(s.TEXTURE_2D,ge,_e,Le.width,Le.height,0,Ge,We,Le.data);D.generateMipmaps=!1}else Se?(ke&&t.texStorage2D(s.TEXTURE_2D,be,_e,me.width,me.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ge,We,me.data)):t.texImage2D(s.TEXTURE_2D,0,_e,me.width,me.height,0,Ge,We,me.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Se&&ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,_e,H[0].width,H[0].height,me.depth);for(let ge=0,X=H.length;ge<X;ge++)Le=H[ge],D.format!==RGBAFormat?Ge!==null?Se?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,me.depth,Ge,Le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,_e,Le.width,Le.height,me.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,me.depth,Ge,We,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,_e,Le.width,Le.height,me.depth,0,Ge,We,Le.data)}else{Se&&ke&&t.texStorage2D(s.TEXTURE_2D,be,_e,H[0].width,H[0].height);for(let ge=0,X=H.length;ge<X;ge++)Le=H[ge],D.format!==RGBAFormat?Ge!==null?Se?t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ge,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,_e,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ge,We,Le.data):t.texImage2D(s.TEXTURE_2D,ge,_e,Le.width,Le.height,0,Ge,We,Le.data)}else if(D.isDataArrayTexture)Se?(ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,_e,me.width,me.height,me.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ge,We,me.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,me.width,me.height,me.depth,0,Ge,We,me.data);else if(D.isData3DTexture)Se?(ke&&t.texStorage3D(s.TEXTURE_3D,be,_e,me.width,me.height,me.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ge,We,me.data)):t.texImage3D(s.TEXTURE_3D,0,_e,me.width,me.height,me.depth,0,Ge,We,me.data);else if(D.isFramebufferTexture){if(ke)if(Se)t.texStorage2D(s.TEXTURE_2D,be,_e,me.width,me.height);else{let ge=me.width,X=me.height;for(let we=0;we<be;we++)t.texImage2D(s.TEXTURE_2D,we,_e,ge,X,0,Ge,We,null),ge>>=1,X>>=1}}else if(H.length>0&&rt){Se&&ke&&t.texStorage2D(s.TEXTURE_2D,be,_e,H[0].width,H[0].height);for(let ge=0,X=H.length;ge<X;ge++)Le=H[ge],Se?t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ge,We,Le):t.texImage2D(s.TEXTURE_2D,ge,_e,Ge,We,Le);D.generateMipmaps=!1}else Se?(ke&&t.texStorage2D(s.TEXTURE_2D,be,_e,me.width,me.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,We,me)):t.texImage2D(s.TEXTURE_2D,0,_e,Ge,We,me);b(D,rt)&&y(ce),Te.__version=pe.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function Me(B,D,re){if(D.image.length!==6)return;const ce=le(B,D),fe=D.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+re);const pe=r.get(fe);if(fe.version!==pe.__version||ce===!0){t.activeTexture(s.TEXTURE0+re);const Te=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Oe=D.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(D.colorSpace),Ne=D.colorSpace===NoColorSpace||Te===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const He=D.isCompressedTexture||D.image[0].isCompressedTexture,Xe=D.image[0]&&D.image[0].isDataTexture,me=[];for(let ge=0;ge<6;ge++)!He&&!Xe?me[ge]=m(D.image[ge],!1,!0,o.maxCubemapSize):me[ge]=Xe?D.image[ge].image:D.image[ge],me[ge]=qe(D,me[ge]);const rt=me[0],Ge=g(rt)||h,We=c.convert(D.format,D.colorSpace),_e=c.convert(D.type),Le=v(D.internalFormat,We,_e,D.colorSpace),H=h&&D.isVideoTexture!==!0,Se=pe.__version===void 0||ce===!0;let ke=x(D,rt,Ge);ie(s.TEXTURE_CUBE_MAP,D,Ge);let be;if(He){H&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,Le,rt.width,rt.height);for(let ge=0;ge<6;ge++){be=me[ge].mipmaps;for(let X=0;X<be.length;X++){const we=be[X];D.format!==RGBAFormat?We!==null?H?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X,0,0,we.width,we.height,We,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X,0,0,we.width,we.height,We,_e,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X,Le,we.width,we.height,0,We,_e,we.data)}}}else{be=D.mipmaps,H&&Se&&(be.length>0&&ke++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,Le,me[0].width,me[0].height));for(let ge=0;ge<6;ge++)if(Xe){H?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,me[ge].width,me[ge].height,We,_e,me[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,me[ge].width,me[ge].height,0,We,_e,me[ge].data);for(let X=0;X<be.length;X++){const ue=be[X].image[ge].image;H?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X+1,0,0,ue.width,ue.height,We,_e,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X+1,Le,ue.width,ue.height,0,We,_e,ue.data)}}else{H?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,We,_e,me[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,We,_e,me[ge]);for(let X=0;X<be.length;X++){const we=be[X];H?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X+1,0,0,We,_e,we.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,X+1,Le,We,_e,we.image[ge])}}}b(D,Ge)&&y(s.TEXTURE_CUBE_MAP),pe.__version=fe.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function Ee(B,D,re,ce,fe,pe){const Te=c.convert(re.format,re.colorSpace),Oe=c.convert(re.type),Ne=v(re.internalFormat,Te,Oe,re.colorSpace);if(!r.get(D).__hasExternalTextures){const Xe=Math.max(1,D.width>>pe),me=Math.max(1,D.height>>pe);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,pe,Ne,Xe,me,D.depth,0,Te,Oe,null):t.texImage2D(fe,pe,Ne,Xe,me,0,Te,Oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),De(D)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,fe,r.get(re).__webglTexture,0,ze(D)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,fe,r.get(re).__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(B,D,re){if(s.bindRenderbuffer(s.RENDERBUFFER,B),D.depthBuffer&&!D.stencilBuffer){let ce=h===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(re||De(D)){const fe=D.depthTexture;fe&&fe.isDepthTexture&&(fe.type===FloatType?ce=s.DEPTH_COMPONENT32F:fe.type===UnsignedIntType&&(ce=s.DEPTH_COMPONENT24));const pe=ze(D);De(D)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,ce,D.width,D.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,ce,D.width,D.height)}else s.renderbufferStorage(s.RENDERBUFFER,ce,D.width,D.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,B)}else if(D.depthBuffer&&D.stencilBuffer){const ce=ze(D);re&&De(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,D.width,D.height):De(D)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,B)}else{const ce=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let fe=0;fe<ce.length;fe++){const pe=ce[fe],Te=c.convert(pe.format,pe.colorSpace),Oe=c.convert(pe.type),Ne=v(pe.internalFormat,Te,Oe,pe.colorSpace),He=ze(D);re&&De(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ne,D.width,D.height):De(D)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,Ne,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,D.width,D.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(B,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),O(D.depthTexture,0);const ce=r.get(D.depthTexture).__webglTexture,fe=ze(D);if(D.depthTexture.format===DepthFormat)De(D)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(D.depthTexture.format===DepthStencilFormat)De(D)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ce(B){const D=r.get(B),re=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!D.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Be(D.__webglFramebuffer,B)}else if(re){D.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[ce]),D.__webglDepthbuffer[ce]=s.createRenderbuffer(),Fe(D.__webglDepthbuffer[ce],B,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=s.createRenderbuffer(),Fe(D.__webglDepthbuffer,B,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(B,D,re){const ce=r.get(B);D!==void 0&&Ee(ce.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Ce(B)}function ne(B){const D=B.texture,re=r.get(B),ce=r.get(D);B.addEventListener("dispose",M),B.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=D.version,l.memory.textures++);const fe=B.isWebGLCubeRenderTarget===!0,pe=B.isWebGLMultipleRenderTargets===!0,Te=g(B)||h;if(fe){re.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(h&&D.mipmaps&&D.mipmaps.length>0){re.__webglFramebuffer[Oe]=[];for(let Ne=0;Ne<D.mipmaps.length;Ne++)re.__webglFramebuffer[Oe][Ne]=s.createFramebuffer()}else re.__webglFramebuffer[Oe]=s.createFramebuffer()}else{if(h&&D.mipmaps&&D.mipmaps.length>0){re.__webglFramebuffer=[];for(let Oe=0;Oe<D.mipmaps.length;Oe++)re.__webglFramebuffer[Oe]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(pe)if(o.drawBuffers){const Oe=B.texture;for(let Ne=0,He=Oe.length;Ne<He;Ne++){const Xe=r.get(Oe[Ne]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&B.samples>0&&De(B)===!1){const Oe=pe?D:[D];re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Oe.length;Ne++){const He=Oe[Ne];re.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Ne]);const Xe=c.convert(He.format,He.colorSpace),me=c.convert(He.type),rt=v(He.internalFormat,Xe,me,He.colorSpace,B.isXRRenderTarget===!0),Ge=ze(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,rt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(re.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),ie(s.TEXTURE_CUBE_MAP,D,Te);for(let Oe=0;Oe<6;Oe++)if(h&&D.mipmaps&&D.mipmaps.length>0)for(let Ne=0;Ne<D.mipmaps.length;Ne++)Ee(re.__webglFramebuffer[Oe][Ne],B,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Ne);else Ee(re.__webglFramebuffer[Oe],B,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);b(D,Te)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const Oe=B.texture;for(let Ne=0,He=Oe.length;Ne<He;Ne++){const Xe=Oe[Ne],me=r.get(Xe);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),ie(s.TEXTURE_2D,Xe,Te),Ee(re.__webglFramebuffer,B,Xe,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),b(Xe,Te)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Oe=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(h?Oe=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Oe,ce.__webglTexture),ie(Oe,D,Te),h&&D.mipmaps&&D.mipmaps.length>0)for(let Ne=0;Ne<D.mipmaps.length;Ne++)Ee(re.__webglFramebuffer[Ne],B,D,s.COLOR_ATTACHMENT0,Oe,Ne);else Ee(re.__webglFramebuffer,B,D,s.COLOR_ATTACHMENT0,Oe,0);b(D,Te)&&y(Oe),t.unbindTexture()}B.depthBuffer&&Ce(B)}function Qe(B){const D=g(B)||h,re=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let ce=0,fe=re.length;ce<fe;ce++){const pe=re[ce];if(b(pe,D)){const Te=B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Oe=r.get(pe).__webglTexture;t.bindTexture(Te,Oe),y(Te),t.unbindTexture()}}}function Pe(B){if(h&&B.samples>0&&De(B)===!1){const D=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],re=B.width,ce=B.height;let fe=s.COLOR_BUFFER_BIT;const pe=[],Te=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(B),Ne=B.isWebGLMultipleRenderTargets===!0;if(Ne)for(let He=0;He<D.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let He=0;He<D.length;He++){pe.push(s.COLOR_ATTACHMENT0+He),B.depthBuffer&&pe.push(Te);const Xe=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(Xe===!1&&(B.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),Ne&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[He]),Xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Te]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Te])),Ne){const me=r.get(D[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,re,ce,0,0,re,ce,fe,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let He=0;He<D.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[He]);const Xe=r.get(D[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function ze(B){return Math.min(o.maxSamples,B.samples)}function De(B){const D=r.get(B);return h&&B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function nt(B){const D=l.render.frame;d.get(B)!==D&&(d.set(B,D),B.update())}function qe(B,D){const re=B.colorSpace,ce=B.format,fe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||B.format===_SRGBAFormat||re!==LinearSRGBColorSpace&&re!==NoColorSpace&&(ColorManagement.getTransfer(re)===SRGBTransfer?h===!1?e.has("EXT_sRGB")===!0&&ce===RGBAFormat?(B.format=_SRGBAFormat,B.minFilter=LinearFilter,B.generateMipmaps=!1):D=ImageUtils.sRGBToLinear(D):(ce!==RGBAFormat||fe!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),D}this.allocateTextureUnit=C,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=De}function WebGLUtils(s,e,t){const r=t.isWebGL2;function o(c,l=NoColorSpace){let h;const p=ColorManagement.getTransfer(l);if(c===UnsignedByteType)return s.UNSIGNED_BYTE;if(c===UnsignedShort4444Type)return s.UNSIGNED_SHORT_4_4_4_4;if(c===UnsignedShort5551Type)return s.UNSIGNED_SHORT_5_5_5_1;if(c===ByteType)return s.BYTE;if(c===ShortType)return s.SHORT;if(c===UnsignedShortType)return s.UNSIGNED_SHORT;if(c===IntType)return s.INT;if(c===UnsignedIntType)return s.UNSIGNED_INT;if(c===FloatType)return s.FLOAT;if(c===HalfFloatType)return r?s.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(c===AlphaFormat)return s.ALPHA;if(c===RGBAFormat)return s.RGBA;if(c===LuminanceFormat)return s.LUMINANCE;if(c===LuminanceAlphaFormat)return s.LUMINANCE_ALPHA;if(c===DepthFormat)return s.DEPTH_COMPONENT;if(c===DepthStencilFormat)return s.DEPTH_STENCIL;if(c===_SRGBAFormat)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(c===RedFormat)return s.RED;if(c===RedIntegerFormat)return s.RED_INTEGER;if(c===RGFormat)return s.RG;if(c===RGIntegerFormat)return s.RG_INTEGER;if(c===RGBAIntegerFormat)return s.RGBA_INTEGER;if(c===RGB_S3TC_DXT1_Format||c===RGBA_S3TC_DXT1_Format||c===RGBA_S3TC_DXT3_Format||c===RGBA_S3TC_DXT5_Format)if(p===SRGBTransfer)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(c===RGB_S3TC_DXT1_Format)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===RGBA_S3TC_DXT1_Format)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===RGBA_S3TC_DXT3_Format)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===RGBA_S3TC_DXT5_Format)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(c===RGB_S3TC_DXT1_Format)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===RGBA_S3TC_DXT1_Format)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===RGBA_S3TC_DXT3_Format)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===RGBA_S3TC_DXT5_Format)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===RGB_PVRTC_4BPPV1_Format||c===RGB_PVRTC_2BPPV1_Format||c===RGBA_PVRTC_4BPPV1_Format||c===RGBA_PVRTC_2BPPV1_Format)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(c===RGB_PVRTC_4BPPV1_Format)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===RGB_PVRTC_2BPPV1_Format)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===RGBA_PVRTC_4BPPV1_Format)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===RGBA_PVRTC_2BPPV1_Format)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===RGB_ETC1_Format)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===RGB_ETC2_Format||c===RGBA_ETC2_EAC_Format)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(c===RGB_ETC2_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(c===RGBA_ETC2_EAC_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===RGBA_ASTC_4x4_Format||c===RGBA_ASTC_5x4_Format||c===RGBA_ASTC_5x5_Format||c===RGBA_ASTC_6x5_Format||c===RGBA_ASTC_6x6_Format||c===RGBA_ASTC_8x5_Format||c===RGBA_ASTC_8x6_Format||c===RGBA_ASTC_8x8_Format||c===RGBA_ASTC_10x5_Format||c===RGBA_ASTC_10x6_Format||c===RGBA_ASTC_10x8_Format||c===RGBA_ASTC_10x10_Format||c===RGBA_ASTC_12x10_Format||c===RGBA_ASTC_12x12_Format)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(c===RGBA_ASTC_4x4_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===RGBA_ASTC_5x4_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===RGBA_ASTC_5x5_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===RGBA_ASTC_6x5_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===RGBA_ASTC_6x6_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===RGBA_ASTC_8x5_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===RGBA_ASTC_8x6_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===RGBA_ASTC_8x8_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===RGBA_ASTC_10x5_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===RGBA_ASTC_10x6_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===RGBA_ASTC_10x8_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===RGBA_ASTC_10x10_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===RGBA_ASTC_12x10_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===RGBA_ASTC_12x12_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===RGBA_BPTC_Format||c===RGB_BPTC_SIGNED_Format||c===RGB_BPTC_UNSIGNED_Format)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(c===RGBA_BPTC_Format)return p===SRGBTransfer?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===RGB_BPTC_SIGNED_Format)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===RGB_BPTC_UNSIGNED_Format)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===RED_RGTC1_Format||c===SIGNED_RED_RGTC1_Format||c===RED_GREEN_RGTC2_Format||c===SIGNED_RED_GREEN_RGTC2_Format)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(c===RGBA_BPTC_Format)return h.COMPRESSED_RED_RGTC1_EXT;if(c===SIGNED_RED_RGTC1_Format)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===RED_GREEN_RGTC2_Format)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===SIGNED_RED_GREEN_RGTC2_Format)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===UnsignedInt248Type?r?s.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):s[c]!==void 0?s[c]:null}return{convert:o}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,c=null,l=null;const h=this._targetRay,p=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,r),_=this._getHandJoint(f,m);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const d=f.joints["index-finger-tip"],i=f.joints["thumb-tip"],n=d.position.distanceTo(i.position),a=.02,u=.005;f.inputState.pinching&&n>a+u?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&n<=a-u&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Group;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const r=this;let o=null,c=1,l=null,h="local-floor",p=1,f=null,d=null,i=null,n=null,a=null,u=null;const m=t.getContextAttributes();let g=null,_=null;const b=[],y=[],v=new Vector2;let x=null;const w=new PerspectiveCamera;w.layers.enable(1),w.viewport=new Vector4;const S=new PerspectiveCamera;S.layers.enable(2),S.viewport=new Vector4;const M=[w,S],T=new ArrayCamera;T.layers.enable(1),T.layers.enable(2);let E=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let le=b[ie];return le===void 0&&(le=new WebXRController,b[ie]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ie){let le=b[ie];return le===void 0&&(le=new WebXRController,b[ie]=le),le.getGripSpace()},this.getHand=function(ie){let le=b[ie];return le===void 0&&(le=new WebXRController,b[ie]=le),le.getHandSpace()};function I(ie){const le=y.indexOf(ie.inputSource);if(le===-1)return;const de=b[le];de!==void 0&&(de.update(ie.inputSource,ie.frame,f||l),de.dispatchEvent({type:ie.type,data:ie.inputSource}))}function k(){o.removeEventListener("select",I),o.removeEventListener("selectstart",I),o.removeEventListener("selectend",I),o.removeEventListener("squeeze",I),o.removeEventListener("squeezestart",I),o.removeEventListener("squeezeend",I),o.removeEventListener("end",k),o.removeEventListener("inputsourceschange",C);for(let ie=0;ie<b.length;ie++){const le=y[ie];le!==null&&(y[ie]=null,b[ie].disconnect(le))}E=null,R=null,e.setRenderTarget(g),a=null,n=null,i=null,o=null,_=null,he.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(v.width,v.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return n!==null?n:a},this.getBinding=function(){return i},this.getFrame=function(){return u},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",I),o.addEventListener("selectstart",I),o.addEventListener("selectend",I),o.addEventListener("squeeze",I),o.addEventListener("squeezestart",I),o.addEventListener("squeezeend",I),o.addEventListener("end",k),o.addEventListener("inputsourceschange",C),m.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(v),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:o.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:c};a=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:a}),e.setPixelRatio(1),e.setSize(a.framebufferWidth,a.framebufferHeight,!1),_=new WebGLRenderTarget(a.framebufferWidth,a.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,de=null,Me=null;m.depth&&(Me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?DepthStencilFormat:DepthFormat,de=m.stencil?UnsignedInt248Type:UnsignedIntType);const Ee={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:c};i=new XRWebGLBinding(o,t),n=i.createProjectionLayer(Ee),o.updateRenderState({layers:[n]}),e.setPixelRatio(1),e.setSize(n.textureWidth,n.textureHeight,!1),_=new WebGLRenderTarget(n.textureWidth,n.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(n.textureWidth,n.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Fe=e.properties.get(_);Fe.__ignoreDepthValues=n.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(p),f=null,l=await o.requestReferenceSpace(h),he.setContext(o),he.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function C(ie){for(let le=0;le<ie.removed.length;le++){const de=ie.removed[le],Me=y.indexOf(de);Me>=0&&(y[Me]=null,b[Me].disconnect(de))}for(let le=0;le<ie.added.length;le++){const de=ie.added[le];let Me=y.indexOf(de);if(Me===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=y.length){y.push(de),Me=Fe;break}else if(y[Fe]===null){y[Fe]=de,Me=Fe;break}if(Me===-1)break}const Ee=b[Me];Ee&&Ee.connect(de)}}const z=new Vector3,O=new Vector3;function U(ie,le,de){z.setFromMatrixPosition(le.matrixWorld),O.setFromMatrixPosition(de.matrixWorld);const Me=z.distanceTo(O),Ee=le.projectionMatrix.elements,Fe=de.projectionMatrix.elements,Be=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),je=(Ee[9]+1)/Ee[5],ne=(Ee[9]-1)/Ee[5],Qe=(Ee[8]-1)/Ee[0],Pe=(Fe[8]+1)/Fe[0],ze=Be*Qe,De=Be*Pe,nt=Me/(-Qe+Pe),qe=nt*-Qe;le.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(qe),ie.translateZ(nt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const B=Be+nt,D=Ce+nt,re=ze-qe,ce=De+(Me-qe),fe=je*Ce/D*B,pe=ne*Ce/D*B;ie.projectionMatrix.makePerspective(re,ce,fe,pe,B,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function K(ie,le){le===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(le.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;T.near=S.near=w.near=ie.near,T.far=S.far=w.far=ie.far,(E!==T.near||R!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,R=T.far);const le=ie.parent,de=T.cameras;K(T,le);for(let Me=0;Me<de.length;Me++)K(de[Me],le);de.length===2?U(T,w,S):T.projectionMatrix.copy(w.projectionMatrix),$(ie,T,le)};function $(ie,le,de){de===null?ie.matrix.copy(le.matrixWorld):(ie.matrix.copy(de.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(le.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=RAD2DEG*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(n===null&&a===null))return p},this.setFoveation=function(ie){p=ie,n!==null&&(n.fixedFoveation=ie),a!==null&&a.fixedFoveation!==void 0&&(a.fixedFoveation=ie)};let J=null;function ee(ie,le){if(d=le.getViewerPose(f||l),u=le,d!==null){const de=d.views;a!==null&&(e.setRenderTargetFramebuffer(_,a.framebuffer),e.setRenderTarget(_));let Me=!1;de.length!==T.cameras.length&&(T.cameras.length=0,Me=!0);for(let Ee=0;Ee<de.length;Ee++){const Fe=de[Ee];let Be=null;if(a!==null)Be=a.getViewport(Fe);else{const je=i.getViewSubImage(n,Fe);Be=je.viewport,Ee===0&&(e.setRenderTargetTextures(_,je.colorTexture,n.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(_))}let Ce=M[Ee];Ce===void 0&&(Ce=new PerspectiveCamera,Ce.layers.enable(Ee),Ce.viewport=new Vector4,M[Ee]=Ce),Ce.matrix.fromArray(Fe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Fe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Be.x,Be.y,Be.width,Be.height),Ee===0&&(T.matrix.copy(Ce.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Me===!0&&T.cameras.push(Ce)}}for(let de=0;de<b.length;de++){const Me=y[de],Ee=b[de];Me!==null&&Ee!==void 0&&Ee.update(Me,le,f||l)}J&&J(ie,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),u=null}const he=new WebGLAnimation;he.setAnimationLoop(ee),this.setAnimationLoop=function(ie){J=ie},this.dispose=function(){}}}function WebGLMaterials(s,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function r(g,_){_.color.getRGB(g.fogColor.value,getUnlitUniformColorSpace(s)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function o(g,_,b,y,v){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(g,_):_.isMeshToonMaterial?(c(g,_),i(g,_)):_.isMeshPhongMaterial?(c(g,_),d(g,_)):_.isMeshStandardMaterial?(c(g,_),n(g,_),_.isMeshPhysicalMaterial&&a(g,_,v)):_.isMeshMatcapMaterial?(c(g,_),u(g,_)):_.isMeshDepthMaterial?c(g,_):_.isMeshDistanceMaterial?(c(g,_),m(g,_)):_.isMeshNormalMaterial?c(g,_):_.isLineBasicMaterial?(l(g,_),_.isLineDashedMaterial&&h(g,_)):_.isPointsMaterial?p(g,_,b,y):_.isSpriteMaterial?f(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===BackSide&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===BackSide&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const b=e.get(_).envMap;if(b&&(g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*y,t(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function h(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function p(g,_,b,y){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*b,g.scale.value=y*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function f(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function d(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function i(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function n(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function a(g,_,b){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===BackSide&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function u(g,_){_.matcap&&(g.matcap.value=_.matcap)}function m(g,_){const b=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function WebGLUniformsGroups(s,e,t,r){let o={},c={},l=[];const h=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(b,y){const v=y.program;r.uniformBlockBinding(b,v)}function f(b,y){let v=o[b.id];v===void 0&&(u(b),v=d(b),o[b.id]=v,b.addEventListener("dispose",g));const x=y.program;r.updateUBOMapping(b,x);const w=e.render.frame;c[b.id]!==w&&(n(b),c[b.id]=w)}function d(b){const y=i();b.__bindingPointIndex=y;const v=s.createBuffer(),x=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,x,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function i(){for(let b=0;b<h;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function n(b){const y=o[b.id],v=b.uniforms,x=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,S=v.length;w<S;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,E=M.length;T<E;T++){const R=M[T];if(a(R,w,T,x)===!0){const I=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let C=0;for(let z=0;z<k.length;z++){const O=k[z],U=m(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,I+C,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,C),C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function a(b,y,v,x){const w=b.value,S=y+"_"+v;if(x[S]===void 0)return typeof w=="number"||typeof w=="boolean"?x[S]=w:x[S]=w.clone(),!0;{const M=x[S];if(typeof w=="number"||typeof w=="boolean"){if(M!==w)return x[S]=w,!0}else if(M.equals(w)===!1)return M.copy(w),!0}return!1}function u(b){const y=b.uniforms;let v=0;const x=16;for(let S=0,M=y.length;S<M;S++){const T=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,R=T.length;E<R;E++){const I=T[E],k=Array.isArray(I.value)?I.value:[I.value];for(let C=0,z=k.length;C<z;C++){const O=k[C],U=m(O),K=v%x;K!==0&&x-K<U.boundary&&(v+=x-K),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=U.storage}}}const w=v%x;return w>0&&(v+=x-w),b.__size=v,b.__cache={},this}function m(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const v=l.indexOf(y.__bindingPointIndex);l.splice(v,1),s.deleteBuffer(o[y.id]),delete o[y.id],delete c[y.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);l=[],o={},c={}}return{bind:p,update:f,dispose:_}}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:r=null,depth:o=!0,stencil:c=!0,alpha:l=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:i=!1}=e;this.isWebGLRenderer=!0;let n;r!==null?n=r.getContextAttributes().alpha:n=l;const a=new Uint32Array(4),u=new Int32Array(4);let m=null,g=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this._useLegacyLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const y=this;let v=!1,x=0,w=0,S=null,M=-1,T=null;const E=new Vector4,R=new Vector4;let I=null;const k=new Color(0);let C=0,z=t.width,O=t.height,U=1,K=null,$=null;const J=new Vector4(0,0,z,O),ee=new Vector4(0,0,z,O);let he=!1;const ie=new Frustum;let le=!1,de=!1,Me=null;const Ee=new Matrix4,Fe=new Vector2,Be=new Vector3,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return S===null?U:1}let ne=r;function Qe(P,F){for(let G=0;G<P.length;G++){const W=P[G],Y=t.getContext(W,F);if(Y!==null)return Y}return null}try{const P={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:i};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",we,!1),ne===null){const F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),ne=Qe(F,P),ne===null)throw Qe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Pe,ze,De,nt,qe,B,D,re,ce,fe,pe,Te,Oe,Ne,He,Xe,me,rt,Ge,We,_e,Le,H,Se;function ke(){Pe=new WebGLExtensions(ne),ze=new WebGLCapabilities(ne,Pe,e),Pe.init(ze),Le=new WebGLUtils(ne,Pe,ze),De=new WebGLState(ne,Pe,ze),nt=new WebGLInfo(ne),qe=new WebGLProperties,B=new WebGLTextures(ne,Pe,De,qe,ze,Le,nt),D=new WebGLCubeMaps(y),re=new WebGLCubeUVMaps(y),ce=new WebGLAttributes(ne,ze),H=new WebGLBindingStates(ne,Pe,ce,ze),fe=new WebGLGeometries(ne,ce,nt,H),pe=new WebGLObjects(ne,fe,ce,nt),Ge=new WebGLMorphtargets(ne,ze,B),Xe=new WebGLClipping(qe),Te=new WebGLPrograms(y,D,re,Pe,ze,H,Xe),Oe=new WebGLMaterials(y,qe),Ne=new WebGLRenderLists,He=new WebGLRenderStates(Pe,ze),rt=new WebGLBackground(y,D,re,De,pe,n,p),me=new WebGLShadowMap(y,pe,ze),Se=new WebGLUniformsGroups(ne,nt,ze,De),We=new WebGLBufferRenderer(ne,Pe,nt,ze),_e=new WebGLIndexedBufferRenderer(ne,Pe,nt,ze),nt.programs=Te.programs,y.capabilities=ze,y.extensions=Pe,y.properties=qe,y.renderLists=Ne,y.shadowMap=me,y.state=De,y.info=nt}ke();const be=new WebXRManager(y,ne);this.xr=be,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const P=Pe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Pe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(z,O,!1))},this.getSize=function(P){return P.set(z,O)},this.setSize=function(P,F,G=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,O=F,t.width=Math.floor(P*U),t.height=Math.floor(F*U),G===!0&&(t.style.width=P+"px",t.style.height=F+"px"),this.setViewport(0,0,P,F)},this.getDrawingBufferSize=function(P){return P.set(z*U,O*U).floor()},this.setDrawingBufferSize=function(P,F,G){z=P,O=F,U=G,t.width=Math.floor(P*G),t.height=Math.floor(F*G),this.setViewport(0,0,P,F)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,F,G,W){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,F,G,W),De.viewport(E.copy(J).multiplyScalar(U).floor())},this.getScissor=function(P){return P.copy(ee)},this.setScissor=function(P,F,G,W){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,F,G,W),De.scissor(R.copy(ee).multiplyScalar(U).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(P){De.setScissorTest(he=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(P=!0,F=!0,G=!0){let W=0;if(P){let Y=!1;if(S!==null){const oe=S.texture.format;Y=oe===RGBAIntegerFormat||oe===RGIntegerFormat||oe===RedIntegerFormat}if(Y){const oe=S.texture.type,xe=oe===UnsignedByteType||oe===UnsignedIntType||oe===UnsignedShortType||oe===UnsignedInt248Type||oe===UnsignedShort4444Type||oe===UnsignedShort5551Type,Ie=rt.getClearColor(),Ue=rt.getClearAlpha(),Ve=Ie.r,Q=Ie.g,Re=Ie.b;xe?(a[0]=Ve,a[1]=Q,a[2]=Re,a[3]=Ue,ne.clearBufferuiv(ne.COLOR,0,a)):(u[0]=Ve,u[1]=Q,u[2]=Re,u[3]=Ue,ne.clearBufferiv(ne.COLOR,0,u))}else W|=ne.COLOR_BUFFER_BIT}F&&(W|=ne.DEPTH_BUFFER_BIT),G&&(W|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ne.dispose(),He.dispose(),qe.dispose(),D.dispose(),re.dispose(),pe.dispose(),H.dispose(),Se.dispose(),Te.dispose(),be.dispose(),be.removeEventListener("sessionstart",dt),be.removeEventListener("sessionend",it),Me&&(Me.dispose(),Me=null),pt.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=nt.autoReset,F=me.enabled,G=me.autoUpdate,W=me.needsUpdate,Y=me.type;ke(),nt.autoReset=P,me.enabled=F,me.autoUpdate=G,me.needsUpdate=W,me.type=Y}function we(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ue(P){const F=P.target;F.removeEventListener("dispose",ue),ve(F)}function ve(P){ye(P),qe.remove(P)}function ye(P){const F=qe.get(P).programs;F!==void 0&&(F.forEach(function(G){Te.releaseProgram(G)}),P.isShaderMaterial&&Te.releaseShaderCache(P))}this.renderBufferDirect=function(P,F,G,W,Y,oe){F===null&&(F=Ce);const xe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=N(P,F,G,W,Y);De.setMaterial(W,xe);let Ue=G.index,Ve=1;if(W.wireframe===!0){if(Ue=fe.getWireframeAttribute(G),Ue===void 0)return;Ve=2}const Q=G.drawRange,Re=G.attributes.position;let Ye=Q.start*Ve,mt=(Q.start+Q.count)*Ve;oe!==null&&(Ye=Math.max(Ye,oe.start*Ve),mt=Math.min(mt,(oe.start+oe.count)*Ve)),Ue!==null?(Ye=Math.max(Ye,0),mt=Math.min(mt,Ue.count)):Re!=null&&(Ye=Math.max(Ye,0),mt=Math.min(mt,Re.count));const ut=mt-Ye;if(ut<0||ut===1/0)return;H.setup(Y,W,Ie,G,Ue);let Tt,ht=We;if(Ue!==null&&(Tt=ce.get(Ue),ht=_e,ht.setIndex(Tt)),Y.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*je()),ht.setMode(ne.LINES)):ht.setMode(ne.TRIANGLES);else if(Y.isLine){let Je=W.linewidth;Je===void 0&&(Je=1),De.setLineWidth(Je*je()),Y.isLineSegments?ht.setMode(ne.LINES):Y.isLineLoop?ht.setMode(ne.LINE_LOOP):ht.setMode(ne.LINE_STRIP)}else Y.isPoints?ht.setMode(ne.POINTS):Y.isSprite&&ht.setMode(ne.TRIANGLES);if(Y.isBatchedMesh)ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ht.renderInstances(Ye,ut,Y.count);else if(G.isInstancedBufferGeometry){const Je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,Je);ht.renderInstances(Ye,ut,bt)}else ht.render(Ye,ut)};function Ze(P,F,G){P.transparent===!0&&P.side===DoubleSide&&P.forceSinglePass===!1?(P.side=BackSide,P.needsUpdate=!0,Mt(P,F,G),P.side=FrontSide,P.needsUpdate=!0,Mt(P,F,G),P.side=DoubleSide):Mt(P,F,G)}this.compile=function(P,F,G=null){G===null&&(G=P),g=He.get(G),g.init(),b.push(g),G.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),P!==G&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(y._useLegacyLights);const W=new Set;return P.traverse(function(Y){const oe=Y.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const Ie=oe[xe];Ze(Ie,G,Y),W.add(Ie)}else Ze(oe,G,Y),W.add(oe)}),b.pop(),g=null,W},this.compileAsync=function(P,F,G=null){const W=this.compile(P,F,G);return new Promise(Y=>{function oe(){if(W.forEach(function(xe){qe.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){Y(P);return}setTimeout(oe,10)}Pe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ke=null;function ct(P){Ke&&Ke(P)}function dt(){pt.stop()}function it(){pt.start()}const pt=new WebGLAnimation;pt.setAnimationLoop(ct),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(P){Ke=P,be.setAnimationLoop(P),P===null?pt.stop():pt.start()},be.addEventListener("sessionstart",dt),be.addEventListener("sessionend",it),this.render=function(P,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,F,S),g=He.get(P,b.length),g.init(),b.push(g),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ie.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,le=Xe.init(this.clippingPlanes,de),m=Ne.get(P,_.length),m.init(),_.push(m),vt(P,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,$),this.info.render.frame++,le===!0&&Xe.beginShadows();const G=g.state.shadowsArray;if(me.render(G,P,F),le===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(m,P),g.setupLights(y._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let Y=0,oe=W.length;Y<oe;Y++){const xe=W[Y];Ot(m,P,xe,xe.viewport)}}else Ot(m,P,F);S!==null&&(B.updateMultisampleRenderTarget(S),B.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(y,P,F),H.resetDefaultState(),M=-1,T=null,b.pop(),b.length>0?g=b[b.length-1]:g=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function vt(P,F,G,W){if(P.visible===!1)return;if(P.layers.test(F.layers)){if(P.isGroup)G=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(F);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ie.intersectsSprite(P)){W&&Be.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ee);const xe=pe.update(P),Ie=P.material;Ie.visible&&m.push(P,xe,Ie,G,Be.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ie.intersectsObject(P))){const xe=pe.update(P),Ie=P.material;if(W&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Be.copy(P.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(P.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ie)){const Ue=xe.groups;for(let Ve=0,Q=Ue.length;Ve<Q;Ve++){const Re=Ue[Ve],Ye=Ie[Re.materialIndex];Ye&&Ye.visible&&m.push(P,xe,Ye,G,Be.z,Re)}}else Ie.visible&&m.push(P,xe,Ie,G,Be.z,null)}}const oe=P.children;for(let xe=0,Ie=oe.length;xe<Ie;xe++)vt(oe[xe],F,G,W)}function Ot(P,F,G,W){const Y=P.opaque,oe=P.transmissive,xe=P.transparent;g.setupLightsView(G),le===!0&&Xe.setGlobalState(y.clippingPlanes,G),oe.length>0&&Nt(Y,oe,F,G),W&&De.viewport(E.copy(W)),Y.length>0&&Et(Y,F,G),oe.length>0&&Et(oe,F,G),xe.length>0&&Et(xe,F,G),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Nt(P,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const oe=ze.isWebGL2;Me===null&&(Me=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:oe?4:0})),y.getDrawingBufferSize(Fe),oe?Me.setSize(Fe.x,Fe.y):Me.setSize(floorPowerOfTwo(Fe.x),floorPowerOfTwo(Fe.y));const xe=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(k),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear();const Ie=y.toneMapping;y.toneMapping=NoToneMapping,Et(P,G,W),B.updateMultisampleRenderTarget(Me),B.updateRenderTargetMipmap(Me);let Ue=!1;for(let Ve=0,Q=F.length;Ve<Q;Ve++){const Re=F[Ve],Ye=Re.object,mt=Re.geometry,ut=Re.material,Tt=Re.group;if(ut.side===DoubleSide&&Ye.layers.test(W.layers)){const ht=ut.side;ut.side=BackSide,ut.needsUpdate=!0,It(Ye,G,W,mt,ut,Tt),ut.side=ht,ut.needsUpdate=!0,Ue=!0}}Ue===!0&&(B.updateMultisampleRenderTarget(Me),B.updateRenderTargetMipmap(Me)),y.setRenderTarget(xe),y.setClearColor(k,C),y.toneMapping=Ie}function Et(P,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,oe=P.length;Y<oe;Y++){const xe=P[Y],Ie=xe.object,Ue=xe.geometry,Ve=W===null?xe.material:W,Q=xe.group;Ie.layers.test(G.layers)&&It(Ie,F,G,Ue,Ve,Q)}}function It(P,F,G,W,Y,oe){P.onBeforeRender(y,F,G,W,Y,oe),P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(y,F,G,W,P,oe),Y.transparent===!0&&Y.side===DoubleSide&&Y.forceSinglePass===!1?(Y.side=BackSide,Y.needsUpdate=!0,y.renderBufferDirect(G,F,W,Y,P,oe),Y.side=FrontSide,Y.needsUpdate=!0,y.renderBufferDirect(G,F,W,Y,P,oe),Y.side=DoubleSide):y.renderBufferDirect(G,F,W,Y,P,oe),P.onAfterRender(y,F,G,W,Y,oe)}function Mt(P,F,G){F.isScene!==!0&&(F=Ce);const W=qe.get(P),Y=g.state.lights,oe=g.state.shadowsArray,xe=Y.state.version,Ie=Te.getParameters(P,Y.state,oe,F,G),Ue=Te.getProgramCacheKey(Ie);let Ve=W.programs;W.environment=P.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(P.isMeshStandardMaterial?re:D).get(P.envMap||W.environment),Ve===void 0&&(P.addEventListener("dispose",ue),Ve=new Map,W.programs=Ve);let Q=Ve.get(Ue);if(Q!==void 0){if(W.currentProgram===Q&&W.lightsStateVersion===xe)return Lt(P,Ie),Q}else Ie.uniforms=Te.getUniforms(P),P.onBuild(G,Ie,y),P.onBeforeCompile(Ie,y),Q=Te.acquireProgram(Ie,Ue),Ve.set(Ue,Q),W.uniforms=Ie.uniforms;const Re=W.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Re.clippingPlanes=Xe.uniform),Lt(P,Ie),W.needsLights=Z(P),W.lightsStateVersion=xe,W.needsLights&&(Re.ambientLightColor.value=Y.state.ambient,Re.lightProbe.value=Y.state.probe,Re.directionalLights.value=Y.state.directional,Re.directionalLightShadows.value=Y.state.directionalShadow,Re.spotLights.value=Y.state.spot,Re.spotLightShadows.value=Y.state.spotShadow,Re.rectAreaLights.value=Y.state.rectArea,Re.ltc_1.value=Y.state.rectAreaLTC1,Re.ltc_2.value=Y.state.rectAreaLTC2,Re.pointLights.value=Y.state.point,Re.pointLightShadows.value=Y.state.pointShadow,Re.hemisphereLights.value=Y.state.hemi,Re.directionalShadowMap.value=Y.state.directionalShadowMap,Re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Re.spotShadowMap.value=Y.state.spotShadowMap,Re.spotLightMatrix.value=Y.state.spotLightMatrix,Re.spotLightMap.value=Y.state.spotLightMap,Re.pointShadowMap.value=Y.state.pointShadowMap,Re.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.currentProgram=Q,W.uniformsList=null,Q}function Rt(P){if(P.uniformsList===null){const F=P.currentProgram.getUniforms();P.uniformsList=WebGLUniforms.seqWithValue(F.seq,P.uniforms)}return P.uniformsList}function Lt(P,F){const G=qe.get(P);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function N(P,F,G,W,Y){F.isScene!==!0&&(F=Ce),B.resetTextureUnits();const oe=F.fog,xe=W.isMeshStandardMaterial?F.environment:null,Ie=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:LinearSRGBColorSpace,Ue=(W.isMeshStandardMaterial?re:D).get(W.envMap||xe),Ve=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Q=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color;let ut=NoToneMapping;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ut=y.toneMapping);const Tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=Tt!==void 0?Tt.length:0,Je=qe.get(W),bt=g.state.lights;if(le===!0&&(de===!0||P!==T)){const xt=P===T&&W.id===M;Xe.setState(W,P,xt)}let ft=!1;W.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==bt.state.version||Je.outputColorSpace!==Ie||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Je.envMap!==Ue||W.fog===!0&&Je.fog!==oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==Ve||Je.vertexTangents!==Q||Je.morphTargets!==Re||Je.morphNormals!==Ye||Je.morphColors!==mt||Je.toneMapping!==ut||ze.isWebGL2===!0&&Je.morphTargetsCount!==ht)&&(ft=!0):(ft=!0,Je.__version=W.version);let At=Je.currentProgram;ft===!0&&(At=Mt(W,F,Y));let zt=!1,Dt=!1,Vt=!1;const yt=At.getUniforms(),wt=Je.uniforms;if(De.useProgram(At.program)&&(zt=!0,Dt=!0,Vt=!0),W.id!==M&&(M=W.id,Dt=!0),zt||T!==P){yt.setValue(ne,"projectionMatrix",P.projectionMatrix),yt.setValue(ne,"viewMatrix",P.matrixWorldInverse);const xt=yt.map.cameraPosition;xt!==void 0&&xt.setValue(ne,Be.setFromMatrixPosition(P.matrixWorld)),ze.logarithmicDepthBuffer&&yt.setValue(ne,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(ne,"isOrthographic",P.isOrthographicCamera===!0),T!==P&&(T=P,Dt=!0,Vt=!0)}if(Y.isSkinnedMesh){yt.setOptional(ne,Y,"bindMatrix"),yt.setOptional(ne,Y,"bindMatrixInverse");const xt=Y.skeleton;xt&&(ze.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),yt.setValue(ne,"boneTexture",xt.boneTexture,B)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(yt.setOptional(ne,Y,"batchingTexture"),yt.setValue(ne,"batchingTexture",Y._matricesTexture,B));const Ft=G.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0&&ze.isWebGL2===!0)&&Ge.update(Y,G,At),(Dt||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,yt.setValue(ne,"receiveShadow",Y.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wt.envMap.value=Ue,wt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Dt&&(yt.setValue(ne,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&j(wt,Vt),oe&&W.fog===!0&&Oe.refreshFogUniforms(wt,oe),Oe.refreshMaterialUniforms(wt,W,U,O,Me),WebGLUniforms.upload(ne,Rt(Je),wt,B)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(ne,Rt(Je),wt,B),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(ne,"center",Y.center),yt.setValue(ne,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(ne,"normalMatrix",Y.normalMatrix),yt.setValue(ne,"modelMatrix",Y.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xt=W.uniformsGroups;for(let Ut=0,$t=xt.length;Ut<$t;Ut++)if(ze.isWebGL2){const Gt=xt[Ut];Se.update(Gt,At),Se.bind(Gt,At)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return At}function j(P,F){P.ambientLightColor.needsUpdate=F,P.lightProbe.needsUpdate=F,P.directionalLights.needsUpdate=F,P.directionalLightShadows.needsUpdate=F,P.pointLights.needsUpdate=F,P.pointLightShadows.needsUpdate=F,P.spotLights.needsUpdate=F,P.spotLightShadows.needsUpdate=F,P.rectAreaLights.needsUpdate=F,P.hemisphereLights.needsUpdate=F}function Z(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,F,G){qe.get(P.texture).__webglTexture=F,qe.get(P.depthTexture).__webglTexture=G;const W=qe.get(P);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,F){const G=qe.get(P);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(P,F=0,G=0){S=P,x=F,w=G;let W=!0,Y=null,oe=!1,xe=!1;if(P){const Ue=qe.get(P);Ue.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(ne.FRAMEBUFFER,null),W=!1):Ue.__webglFramebuffer===void 0?B.setupRenderTarget(P):Ue.__hasExternalTextures&&B.rebindTextures(P,qe.get(P.texture).__webglTexture,qe.get(P.depthTexture).__webglTexture);const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const Q=qe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Q[F])?Y=Q[F][G]:Y=Q[F],oe=!0):ze.isWebGL2&&P.samples>0&&B.useMultisampledRTT(P)===!1?Y=qe.get(P).__webglMultisampledFramebuffer:Array.isArray(Q)?Y=Q[G]:Y=Q,E.copy(P.viewport),R.copy(P.scissor),I=P.scissorTest}else E.copy(J).multiplyScalar(U).floor(),R.copy(ee).multiplyScalar(U).floor(),I=he;if(De.bindFramebuffer(ne.FRAMEBUFFER,Y)&&ze.drawBuffers&&W&&De.drawBuffers(P,Y),De.viewport(E),De.scissor(R),De.setScissorTest(I),oe){const Ue=qe.get(P.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,G)}else if(xe){const Ue=qe.get(P.texture),Ve=F||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Ue.__webglTexture,G||0,Ve)}M=-1},this.readRenderTargetPixels=function(P,F,G,W,Y,oe,xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=qe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(Ie=Ie[xe]),Ie){De.bindFramebuffer(ne.FRAMEBUFFER,Ie);try{const Ue=P.texture,Ve=Ue.format,Q=Ue.type;if(Ve!==RGBAFormat&&Le.convert(Ve)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Q===HalfFloatType&&(Pe.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Q!==UnsignedByteType&&Le.convert(Q)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Q===FloatType&&(ze.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=P.width-W&&G>=0&&G<=P.height-Y&&ne.readPixels(F,G,W,Y,Le.convert(Ve),Le.convert(Q),oe)}finally{const Ue=S!==null?qe.get(S).__webglFramebuffer:null;De.bindFramebuffer(ne.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(P,F,G=0){const W=Math.pow(2,-G),Y=Math.floor(F.image.width*W),oe=Math.floor(F.image.height*W);B.setTexture2D(F,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,G,0,0,P.x,P.y,Y,oe),De.unbindTexture()},this.copyTextureToTexture=function(P,F,G,W=0){const Y=F.image.width,oe=F.image.height,xe=Le.convert(G.format),Ie=Le.convert(G.type);B.setTexture2D(G,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,G.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,W,P.x,P.y,Y,oe,xe,Ie,F.image.data):F.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,W,P.x,P.y,F.mipmaps[0].width,F.mipmaps[0].height,xe,F.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,W,P.x,P.y,xe,Ie,F.image),W===0&&G.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(P,F,G,W,Y=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=P.max.x-P.min.x+1,xe=P.max.y-P.min.y+1,Ie=P.max.z-P.min.z+1,Ue=Le.convert(W.format),Ve=Le.convert(W.type);let Q;if(W.isData3DTexture)B.setTexture3D(W,0),Q=ne.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)B.setTexture2DArray(W,0),Q=ne.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,W.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,W.unpackAlignment);const Re=ne.getParameter(ne.UNPACK_ROW_LENGTH),Ye=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),mt=ne.getParameter(ne.UNPACK_SKIP_PIXELS),ut=ne.getParameter(ne.UNPACK_SKIP_ROWS),Tt=ne.getParameter(ne.UNPACK_SKIP_IMAGES),ht=G.isCompressedTexture?G.mipmaps[Y]:G.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,ht.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,ht.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,P.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,P.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,P.min.z),G.isDataTexture||G.isData3DTexture?ne.texSubImage3D(Q,Y,F.x,F.y,F.z,oe,xe,Ie,Ue,Ve,ht.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(Q,Y,F.x,F.y,F.z,oe,xe,Ie,Ue,ht.data)):ne.texSubImage3D(Q,Y,F.x,F.y,F.z,oe,xe,Ie,Ue,Ve,ht),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,Re),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,Ye),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,mt),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,ut),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,Tt),Y===0&&W.generateMipmaps&&ne.generateMipmap(Q),De.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?B.setTextureCube(P,0):P.isData3DTexture?B.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?B.setTexture2DArray(P,0):B.setTexture2D(P,0),De.unbindTexture()},this.resetState=function(){x=0,w=0,S=null,De.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===DisplayP3ColorSpace?"display-p3":"srgb",t.unpackColorSpace=ColorManagement.workingColorSpace===LinearDisplayP3ColorSpace?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class CanvasTexture extends Texture{constructor(e,t,r,o,c,l,h,p,f){super(e,t,r,o,c,l,h,p,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cache={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,r){const o=this;let c=!1,l=0,h=0,p;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(d){h++,c===!1&&o.onStart!==void 0&&o.onStart(d,l,h),c=!0},this.itemEnd=function(d){l++,o.onProgress!==void 0&&o.onProgress(d,l,h),l===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(d){o.onError!==void 0&&o.onError(d)},this.resolveURL=function(d){return p?p(d):d},this.setURLModifier=function(d){return p=d,this},this.addHandler=function(d,i){return f.push(d,i),this},this.removeHandler=function(d){const i=f.indexOf(d);return i!==-1&&f.splice(i,2),this},this.getHandler=function(d){for(let i=0,n=f.length;i<n;i+=2){const a=f[i],u=f[i+1];if(a.global&&(a.lastIndex=0),a.test(d))return u}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,c){r.load(e,o,t,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,l=Cache.get(e);if(l!==void 0)return c.manager.itemStart(e),setTimeout(function(){t&&t(l),c.manager.itemEnd(e)},0),l;const h=createElementNS("img");function p(){d(),Cache.add(e,this),t&&t(this),c.manager.itemEnd(e)}function f(i){d(),o&&o(i),c.manager.itemError(e),c.manager.itemEnd(e)}function d(){h.removeEventListener("load",p,!1),h.removeEventListener("error",f,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(e),h.src=e,h}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,r,o){const c=new Texture,l=new ImageLoader(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(h){c.image=h,c.needsUpdate=!0,t!==void 0&&t(c)},r,o),c}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Spherical{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"},_ray=new Ray,_plane=new Plane,TILT_LIMIT=Math.cos(70*MathUtils.DEG2RAD);class OrbitControls extends EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.cursor=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",He),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(_changeEvent),r.update(),c=o.NONE},this.update=function(){const H=new Vector3,Se=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),ke=Se.clone().invert(),be=new Vector3,ge=new Quaternion,X=new Vector3,we=2*Math.PI;return function(ve=null){const ye=r.object.position;H.copy(ye).sub(r.target),H.applyQuaternion(Se),h.setFromVector3(H),r.autoRotate&&c===o.NONE&&I(E(ve)),r.enableDamping?(h.theta+=p.theta*r.dampingFactor,h.phi+=p.phi*r.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let Ze=r.minAzimuthAngle,Ke=r.maxAzimuthAngle;isFinite(Ze)&&isFinite(Ke)&&(Ze<-Math.PI?Ze+=we:Ze>Math.PI&&(Ze-=we),Ke<-Math.PI?Ke+=we:Ke>Math.PI&&(Ke-=we),Ze<=Ke?h.theta=Math.max(Ze,Math.min(Ke,h.theta)):h.theta=h.theta>(Ze+Ke)/2?Math.max(Ze,h.theta):Math.min(Ke,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(d,r.dampingFactor):r.target.add(d),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&w||r.object.isOrthographicCamera?h.radius=J(h.radius):h.radius=J(h.radius*f),H.setFromSpherical(h),H.applyQuaternion(ke),ye.copy(r.target).add(H),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,d.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),d.set(0,0,0));let ct=!1;if(r.zoomToCursor&&w){let dt=null;if(r.object.isPerspectiveCamera){const it=H.length();dt=J(it*f);const pt=it-dt;r.object.position.addScaledVector(v,pt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const it=new Vector3(x.x,x.y,0);it.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/f)),r.object.updateProjectionMatrix(),ct=!0;const pt=new Vector3(x.x,x.y,0);pt.unproject(r.object),r.object.position.sub(pt).add(it),r.object.updateMatrixWorld(),dt=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(dt).add(r.object.position):(_ray.origin.copy(r.object.position),_ray.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(_ray.direction))<TILT_LIMIT?e.lookAt(r.target):(_plane.setFromNormalAndCoplanarPoint(r.object.up,r.target),_ray.intersectPlane(_plane,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/f)),r.object.updateProjectionMatrix(),ct=!0);return f=1,w=!1,ct||be.distanceToSquared(r.object.position)>l||8*(1-ge.dot(r.object.quaternion))>l||X.distanceToSquared(r.target)>0?(r.dispatchEvent(_changeEvent),be.copy(r.object.position),ge.copy(r.object.quaternion),X.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",rt),r.domElement.removeEventListener("pointerdown",B),r.domElement.removeEventListener("pointercancel",re),r.domElement.removeEventListener("wheel",pe),r.domElement.removeEventListener("pointermove",D),r.domElement.removeEventListener("pointerup",re),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",He),r._domElementKeyEvents=null)};const r=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=o.NONE;const l=1e-6,h=new Spherical,p=new Spherical;let f=1;const d=new Vector3,i=new Vector2,n=new Vector2,a=new Vector2,u=new Vector2,m=new Vector2,g=new Vector2,_=new Vector2,b=new Vector2,y=new Vector2,v=new Vector3,x=new Vector2;let w=!1;const S=[],M={};let T=!1;function E(H){return H!==null?2*Math.PI/60*r.autoRotateSpeed*H:2*Math.PI/60/60*r.autoRotateSpeed}function R(H){const Se=Math.abs(H*.01);return Math.pow(.95,r.zoomSpeed*Se)}function I(H){p.theta-=H}function k(H){p.phi-=H}const C=function(){const H=new Vector3;return function(ke,be){H.setFromMatrixColumn(be,0),H.multiplyScalar(-ke),d.add(H)}}(),z=function(){const H=new Vector3;return function(ke,be){r.screenSpacePanning===!0?H.setFromMatrixColumn(be,1):(H.setFromMatrixColumn(be,0),H.crossVectors(r.object.up,H)),H.multiplyScalar(ke),d.add(H)}}(),O=function(){const H=new Vector3;return function(ke,be){const ge=r.domElement;if(r.object.isPerspectiveCamera){const X=r.object.position;H.copy(X).sub(r.target);let we=H.length();we*=Math.tan(r.object.fov/2*Math.PI/180),C(2*ke*we/ge.clientHeight,r.object.matrix),z(2*be*we/ge.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(C(ke*(r.object.right-r.object.left)/r.object.zoom/ge.clientWidth,r.object.matrix),z(be*(r.object.top-r.object.bottom)/r.object.zoom/ge.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function U(H){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?f/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function K(H){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?f*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function $(H,Se){if(!r.zoomToCursor)return;w=!0;const ke=r.domElement.getBoundingClientRect(),be=H-ke.left,ge=Se-ke.top,X=ke.width,we=ke.height;x.x=be/X*2-1,x.y=-(ge/we)*2+1,v.set(x.x,x.y,1).unproject(r.object).sub(r.object.position).normalize()}function J(H){return Math.max(r.minDistance,Math.min(r.maxDistance,H))}function ee(H){i.set(H.clientX,H.clientY)}function he(H){$(H.clientX,H.clientX),_.set(H.clientX,H.clientY)}function ie(H){u.set(H.clientX,H.clientY)}function le(H){n.set(H.clientX,H.clientY),a.subVectors(n,i).multiplyScalar(r.rotateSpeed);const Se=r.domElement;I(2*Math.PI*a.x/Se.clientHeight),k(2*Math.PI*a.y/Se.clientHeight),i.copy(n),r.update()}function de(H){b.set(H.clientX,H.clientY),y.subVectors(b,_),y.y>0?U(R(y.y)):y.y<0&&K(R(y.y)),_.copy(b),r.update()}function Me(H){m.set(H.clientX,H.clientY),g.subVectors(m,u).multiplyScalar(r.panSpeed),O(g.x,g.y),u.copy(m),r.update()}function Ee(H){$(H.clientX,H.clientY),H.deltaY<0?K(R(H.deltaY)):H.deltaY>0&&U(R(H.deltaY)),r.update()}function Fe(H){let Se=!1;switch(H.code){case r.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?k(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):O(0,r.keyPanSpeed),Se=!0;break;case r.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?k(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):O(0,-r.keyPanSpeed),Se=!0;break;case r.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?I(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):O(r.keyPanSpeed,0),Se=!0;break;case r.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?I(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):O(-r.keyPanSpeed,0),Se=!0;break}Se&&(H.preventDefault(),r.update())}function Be(H){if(S.length===1)i.set(H.pageX,H.pageY);else{const Se=Le(H),ke=.5*(H.pageX+Se.x),be=.5*(H.pageY+Se.y);i.set(ke,be)}}function Ce(H){if(S.length===1)u.set(H.pageX,H.pageY);else{const Se=Le(H),ke=.5*(H.pageX+Se.x),be=.5*(H.pageY+Se.y);u.set(ke,be)}}function je(H){const Se=Le(H),ke=H.pageX-Se.x,be=H.pageY-Se.y,ge=Math.sqrt(ke*ke+be*be);_.set(0,ge)}function ne(H){r.enableZoom&&je(H),r.enablePan&&Ce(H)}function Qe(H){r.enableZoom&&je(H),r.enableRotate&&Be(H)}function Pe(H){if(S.length==1)n.set(H.pageX,H.pageY);else{const ke=Le(H),be=.5*(H.pageX+ke.x),ge=.5*(H.pageY+ke.y);n.set(be,ge)}a.subVectors(n,i).multiplyScalar(r.rotateSpeed);const Se=r.domElement;I(2*Math.PI*a.x/Se.clientHeight),k(2*Math.PI*a.y/Se.clientHeight),i.copy(n)}function ze(H){if(S.length===1)m.set(H.pageX,H.pageY);else{const Se=Le(H),ke=.5*(H.pageX+Se.x),be=.5*(H.pageY+Se.y);m.set(ke,be)}g.subVectors(m,u).multiplyScalar(r.panSpeed),O(g.x,g.y),u.copy(m)}function De(H){const Se=Le(H),ke=H.pageX-Se.x,be=H.pageY-Se.y,ge=Math.sqrt(ke*ke+be*be);b.set(0,ge),y.set(0,Math.pow(b.y/_.y,r.zoomSpeed)),U(y.y),_.copy(b);const X=(H.pageX+Se.x)*.5,we=(H.pageY+Se.y)*.5;$(X,we)}function nt(H){r.enableZoom&&De(H),r.enablePan&&ze(H)}function qe(H){r.enableZoom&&De(H),r.enableRotate&&Pe(H)}function B(H){r.enabled!==!1&&(S.length===0&&(r.domElement.setPointerCapture(H.pointerId),r.domElement.addEventListener("pointermove",D),r.domElement.addEventListener("pointerup",re)),Ge(H),H.pointerType==="touch"?Xe(H):ce(H))}function D(H){r.enabled!==!1&&(H.pointerType==="touch"?me(H):fe(H))}function re(H){We(H),S.length===0&&(r.domElement.releasePointerCapture(H.pointerId),r.domElement.removeEventListener("pointermove",D),r.domElement.removeEventListener("pointerup",re)),r.dispatchEvent(_endEvent),c=o.NONE}function ce(H){let Se;switch(H.button){case 0:Se=r.mouseButtons.LEFT;break;case 1:Se=r.mouseButtons.MIDDLE;break;case 2:Se=r.mouseButtons.RIGHT;break;default:Se=-1}switch(Se){case MOUSE.DOLLY:if(r.enableZoom===!1)return;he(H),c=o.DOLLY;break;case MOUSE.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(r.enablePan===!1)return;ie(H),c=o.PAN}else{if(r.enableRotate===!1)return;ee(H),c=o.ROTATE}break;case MOUSE.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(r.enableRotate===!1)return;ee(H),c=o.ROTATE}else{if(r.enablePan===!1)return;ie(H),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&r.dispatchEvent(_startEvent)}function fe(H){switch(c){case o.ROTATE:if(r.enableRotate===!1)return;le(H);break;case o.DOLLY:if(r.enableZoom===!1)return;de(H);break;case o.PAN:if(r.enablePan===!1)return;Me(H);break}}function pe(H){r.enabled===!1||r.enableZoom===!1||c!==o.NONE||(H.preventDefault(),r.dispatchEvent(_startEvent),Ee(Te(H)),r.dispatchEvent(_endEvent))}function Te(H){const Se=H.deltaMode,ke={clientX:H.clientX,clientY:H.clientY,deltaY:H.deltaY};switch(Se){case 1:ke.deltaY*=16;break;case 2:ke.deltaY*=100;break}return H.ctrlKey&&!T&&(ke.deltaY*=10),ke}function Oe(H){H.key==="Control"&&(T=!0,document.addEventListener("keyup",Ne,{passive:!0,capture:!0}))}function Ne(H){H.key==="Control"&&(T=!1,document.removeEventListener("keyup",Ne,{passive:!0,capture:!0}))}function He(H){r.enabled===!1||r.enablePan===!1||Fe(H)}function Xe(H){switch(_e(H),S.length){case 1:switch(r.touches.ONE){case TOUCH.ROTATE:if(r.enableRotate===!1)return;Be(H),c=o.TOUCH_ROTATE;break;case TOUCH.PAN:if(r.enablePan===!1)return;Ce(H),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(r.touches.TWO){case TOUCH.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ne(H),c=o.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Qe(H),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&r.dispatchEvent(_startEvent)}function me(H){switch(_e(H),c){case o.TOUCH_ROTATE:if(r.enableRotate===!1)return;Pe(H),r.update();break;case o.TOUCH_PAN:if(r.enablePan===!1)return;ze(H),r.update();break;case o.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;nt(H),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;qe(H),r.update();break;default:c=o.NONE}}function rt(H){r.enabled!==!1&&H.preventDefault()}function Ge(H){S.push(H.pointerId)}function We(H){delete M[H.pointerId];for(let Se=0;Se<S.length;Se++)if(S[Se]==H.pointerId){S.splice(Se,1);return}}function _e(H){let Se=M[H.pointerId];Se===void 0&&(Se=new Vector2,M[H.pointerId]=Se),Se.set(H.pageX,H.pageY)}function Le(H){const Se=H.pointerId===S[0]?S[1]:S[0];return M[Se]}r.domElement.addEventListener("contextmenu",rt),r.domElement.addEventListener("pointerdown",B),r.domElement.addEventListener("pointercancel",re),r.domElement.addEventListener("wheel",pe,{passive:!1}),document.addEventListener("keydown",Oe,{passive:!0,capture:!0}),this.update()}}function dispatchCallback(s,e){s&&s(e)}function reverseDictionary(s){return Object.fromEntries(Object.entries(s).map(([e,t])=>[t,e]))}function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Callable=class{constructor(){let s=function(...e){return s._call(...e)};return Object.setPrototypeOf(s,new.target.prototype)}_call(...s){throw Error("Must implement _call method in subclass")}};function isTypedArray(s){return s?.prototype?.__proto__?.constructor?.name==="TypedArray"}function isIntegralNumber(s){return Number.isInteger(s)||typeof s=="bigint"}function exists(s){return s!=null}function calculateDimensions(s){const e=[];let t=s;for(;Array.isArray(t);)e.push(t.length),t=t[0];return e}function pop(s,e,t=void 0){const r=s[e];if(r!==void 0)return delete s[e],r;if(t===void 0)throw Error(`Key ${e} does not exist in object.`);return t}function mergeArrays(...s){return Array.prototype.concat.apply([],s)}function product(...s){return s.reduce((e,t)=>e.flatMap(r=>t.map(o=>[r,o])))}function calculateReflectOffset(s,e){return Math.abs((s+e)%(2*e)-e)}const sharp={},ONNX_NODE=Object.freeze(Object.defineProperty({__proto__:null,default:sharp},Symbol.toStringTag,{value:"Module"}));function getDefaultExportFromCjs(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function getAugmentedNamespace(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(r){var o=Object.getOwnPropertyDescriptor(s,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return s[r]}})}),t}var ortWeb_min$1={exports:{}};const backends={},backendsSortedByPriority=[],registerBackend=(s,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createSessionHandler=="function"){const r=backends[s];if(r===void 0)backends[s]={backend:e,priority:t};else{if(r.priority>t)return;if(r.priority===t&&r.backend!==e)throw new Error(`cannot register backend "${s}" using priority ${t}`)}if(t>=0){const o=backendsSortedByPriority.indexOf(s);o!==-1&&backendsSortedByPriority.splice(o,1);for(let c=0;c<backendsSortedByPriority.length;c++)if(backends[backendsSortedByPriority[c]].priority<=t){backendsSortedByPriority.splice(c,0,s);return}backendsSortedByPriority.push(s)}return}throw new TypeError("not a valid backend")},resolveBackend=async s=>{const e=s.length===0?backendsSortedByPriority:s,t=[];for(const r of e){const o=backends[r];if(o){if(o.initialized)return o.backend;if(o.aborted)continue;const c=!!o.initPromise;try{return c||(o.initPromise=o.backend.init()),await o.initPromise,o.initialized=!0,o.backend}catch(l){c||t.push({name:r,err:l}),o.aborted=!0}finally{delete o.initPromise}}}throw new Error(`no available backend found. ERR: ${t.map(r=>`[${r.name}] ${r.err}`).join(", ")}`)};class EnvImpl{constructor(){this.wasm={},this.webgl={},this.logLevelInternal="warning"}set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);this.logLevelInternal=e}}get logLevel(){return this.logLevelInternal}}const env$2=new EnvImpl,isBigInt64ArrayAvailable=typeof BigInt64Array<"u"&&typeof BigInt64Array.from=="function",isBigUint64ArrayAvailable=typeof BigUint64Array<"u"&&typeof BigUint64Array.from=="function",NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array]]),NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]);isBigInt64ArrayAvailable&&(NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set("int64",BigInt64Array),NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigInt64Array,"int64"));isBigUint64ArrayAvailable&&(NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set("uint64",BigUint64Array),NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigUint64Array,"uint64"));const calculateSize=s=>{let e=1;for(let t=0;t<s.length;t++){const r=s[t];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${t}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${r}`);e*=r}return e};let Tensor$2=class kt{constructor(e,t,r){let o,c,l;if(typeof e=="string")if(o=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");c=t}else{const p=NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t))c=p.from(t);else if(t instanceof p)c=t;else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");const p=typeof e[0];if(p==="string")o="string",c=e;else if(p==="boolean")o="bool",c=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else{const p=NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,c=e}if(l===void 0)l=[c.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");const h=calculateSize(l);if(h!==c.length)throw new Error(`Tensor's size(${h}) does not match data length(${c.length}).`);this.dims=l,this.type=o,this.data=c,this.size=h}static bufferToTensor(e,t){if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");const{height:r,width:o}=t,c=t.norm;let l,h;c===void 0||c.mean===void 0?l=255:l=c.mean,c===void 0||c.bias===void 0?h=0:h=c.bias;const p=t.bitmapFormat!==void 0?t.bitmapFormat:"RGBA",f=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*o,i=f==="RGBA"?new Float32Array(d*4):new Float32Array(d*3);let n=4,a=0,u=1,m=2,g=3,_=0,b=d,y=d*2,v=-1;p==="RGB"&&(n=3,a=0,u=1,m=2,g=-1),f==="RGBA"?v=d*3:f==="RBG"?(_=0,y=d,b=d*2):f==="BGR"&&(y=0,b=d,_=d*2);for(let w=0;w<d;w++,a+=n,m+=n,u+=n,g+=n)i[_++]=(e[a]+h)/l,i[b++]=(e[u]+h)/l,i[y++]=(e[m]+h)/l,v!==-1&&g!==-1&&(i[v++]=(e[g]+h)/l);return f==="RGBA"?new kt("float32",i,[1,4,r,o]):new kt("float32",i,[1,3,r,o])}static async fromImage(e,t){const r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,c=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,l=typeof String<"u"&&(e instanceof String||typeof e=="string");let h,p={};if(r){const f=document.createElement("canvas"),d=f.getContext("2d");if(d!=null){let i=e.naturalHeight,n=e.naturalWidth;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(i=t.resizedHeight,n=t.resizedWidth),t!==void 0){if(p=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");if(p.tensorFormat="RGBA",t.height!==void 0&&t.height!==i)throw new Error("Image input config height doesn't match HTMLImageElement height");if(p.height=i,t.width!==void 0&&t.width!==n)throw new Error("Image input config width doesn't match HTMLImageElement width");p.width=n}else p.tensorFormat="RGBA",p.height=i,p.width=n;f.width=n,f.height=i,d.drawImage(e,0,0,n,i),h=d.getImageData(0,0,n,i).data}else throw new Error("Can not access image data")}else if(o){const f="RGBA";let d,i;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,i=t.resizedWidth):(d=e.height,i=e.width),t!==void 0){if(p=t,t.bitmapFormat!==void 0&&t.bitmapFormat!==f)throw new Error("Image input config format must be RGBA for ImageData");p.bitmapFormat="RGBA"}else p.bitmapFormat="RGBA";if(p.height=d,p.width=i,t!==void 0){const n=document.createElement("canvas");n.width=i,n.height=d;const a=n.getContext("2d");if(a!=null)a.putImageData(e,0,0),h=a.getImageData(0,0,i,d).data;else throw new Error("Can not access image data")}else h=e.data}else if(c){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");if(t.bitmapFormat!==void 0)throw new Error("Image input config format must be defined for ImageBitmap");const f=document.createElement("canvas").getContext("2d");if(f!=null){const d=e.height,i=e.width;if(f.drawImage(e,0,0,i,d),h=f.getImageData(0,0,i,d).data,t!==void 0){if(t.height!==void 0&&t.height!==d)throw new Error("Image input config height doesn't match ImageBitmap height");if(p.height=d,t.width!==void 0&&t.width!==i)throw new Error("Image input config width doesn't match ImageBitmap width");p.width=i}else p.height=d,p.width=i;return kt.bufferToTensor(h,p)}else throw new Error("Can not access image data")}else{if(l)return new Promise((f,d)=>{const i=document.createElement("canvas"),n=i.getContext("2d");if(!e||!n)return d();const a=new Image;a.crossOrigin="Anonymous",a.src=e,a.onload=()=>{i.width=a.width,i.height=a.height,n.drawImage(a,0,0,i.width,i.height);const u=n.getImageData(0,0,i.width,i.height);if(t!==void 0){if(t.height!==void 0&&t.height!==i.height)throw new Error("Image input config height doesn't match ImageBitmap height");if(p.height=i.height,t.width!==void 0&&t.width!==i.width)throw new Error("Image input config width doesn't match ImageBitmap width");p.width=i.width}else p.height=i.height,p.width=i.width;f(kt.bufferToTensor(u.data,p))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(h!==void 0)return kt.bufferToTensor(h,p);throw new Error("Input data provided is not supported - aborted tensor creation")}toImageData(e){var t,r;const o=document.createElement("canvas").getContext("2d");let c;if(o!=null){const l=this.dims[3],h=this.dims[2],p=this.dims[1],f=e!==void 0&&e.format!==void 0?e.format:"RGB",d=e!==void 0&&((t=e.norm)===null||t===void 0?void 0:t.mean)!==void 0?e.norm.mean:255,i=e!==void 0&&((r=e.norm)===null||r===void 0?void 0:r.bias)!==void 0?e.norm.bias:0,n=h*l;if(e!==void 0){if(e.height!==void 0&&e.height!==h)throw new Error("Image output config height doesn't match tensor height");if(e.width!==void 0&&e.width!==l)throw new Error("Image output config width doesn't match tensor width");if(e.format!==void 0&&p===4&&e.format!=="RGBA"||p===3&&e.format!=="RGB"&&e.format!=="BGR")throw new Error("Tensor format doesn't match input tensor dims")}const a=4;let u=0,m=1,g=2,_=3,b=0,y=n,v=n*2,x=-1;f==="RGBA"?(b=0,y=n,v=n*2,x=n*3):f==="RGB"?(b=0,y=n,v=n*2):f==="RBG"&&(b=0,v=n,y=n*2),c=o.createImageData(l,h);for(let w=0;w<h*l;u+=a,m+=a,g+=a,_+=a,w++)c.data[u]=(this.data[b++]-i)*d,c.data[m]=(this.data[y++]-i)*d,c.data[g]=(this.data[v++]-i)*d,c.data[_]=x===-1?255:(this.data[x++]-i)*d}else throw new Error("Can not access image data");return c}reshape(e){return new kt(this.type,this.data,e)}};const Tensor$1=Tensor$2;let InferenceSession$2=class dn{constructor(e){this.handler=e}async run(e,t,r){const o={};let c={};if(typeof e!="object"||e===null||e instanceof Tensor$1||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof Tensor$1)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(const f of t){if(typeof f!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(f)===-1)throw new RangeError(`'fetches' contains invalid output name: ${f}.`);o[f]=null}if(typeof r=="object"&&r!==null)c=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let f=!1;const d=Object.getOwnPropertyNames(t);for(const i of this.outputNames)if(d.indexOf(i)!==-1){const n=t[i];(n===null||n instanceof Tensor$1)&&(f=!0,l=!1,o[i]=n)}if(f){if(typeof r=="object"&&r!==null)c=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else c=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(const f of this.inputNames)if(typeof e[f]>"u")throw new Error(`input '${f}' is missing in 'feeds'.`);if(l)for(const f of this.outputNames)o[f]=null;const h=await this.handler.run(e,o,c),p={};for(const f in h)Object.hasOwnProperty.call(h,f)&&(p[f]=new Tensor$1(h[f].type,h[f].data,h[f].dims));return p}static async create(e,t,r,o){let c,l={};if(typeof e=="string"){if(c=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(c=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){const i=e;let n=0,a=e.byteLength;if(typeof t=="object"&&t!==null)l=t;else if(typeof t=="number"){if(n=t,!Number.isSafeInteger(n))throw new RangeError("'byteOffset' must be an integer.");if(n<0||n>=i.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${i.byteLength}).`);if(a=e.byteLength-n,typeof r=="number"){if(a=r,!Number.isSafeInteger(a))throw new RangeError("'byteLength' must be an integer.");if(a<=0||n+a>i.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${i.byteLength-n}].`);if(typeof o=="object"&&o!==null)l=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");c=new Uint8Array(i,n,a)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");const p=(l.executionProviders||[]).map(i=>typeof i=="string"?i:i.name),d=await(await resolveBackend(p)).createSessionHandler(c,l);return new dn(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}};const InferenceSession$1=InferenceSession$2,lib=Object.freeze(Object.defineProperty({__proto__:null,InferenceSession:InferenceSession$1,Tensor:Tensor$1,env:env$2,registerBackend},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(lib);/*!
* ONNX Runtime Web v1.14.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/(function(module,exports){(function(s,e){module.exports=e(require$$0)})(self,__WEBPACK_EXTERNAL_MODULE__1670__=>(()=>{var __webpack_modules__={3474:(s,e,t)=>{var r,o=(r=(r=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(c){function l(){return $.buffer!=ee&&Qe($.buffer),he}function h(){return $.buffer!=ee&&Qe($.buffer),ie}function p(){return $.buffer!=ee&&Qe($.buffer),le}function f(){return $.buffer!=ee&&Qe($.buffer),de}function d(){return $.buffer!=ee&&Qe($.buffer),Me}var i,n,a;c=c||{},i||(i=c!==void 0?c:{}),i.ready=new Promise(function(A,L){n=A,a=L});var u,m,g,_,b,y,v=Object.assign({},i),x="./this.program",w=(A,L)=>{throw L},S=typeof window=="object",M=typeof importScripts=="function",T=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",E=i.ENVIRONMENT_IS_PTHREAD||!1,R="";function I(A){return i.locateFile?i.locateFile(A,R):R+A}if(T){let A;R=M?t(908).dirname(R)+"/":"//",y=()=>{b||(_=t(1384),b=t(908))},u=function(L,V){return y(),L=b.normalize(L),_.readFileSync(L,V?void 0:"utf8")},g=L=>((L=u(L,!0)).buffer||(L=new Uint8Array(L)),L),m=(L,V,q)=>{y(),L=b.normalize(L),_.readFile(L,function(te,se){te?q(te):V(se.buffer)})},1<process.argv.length&&(x=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(L){if(!(L instanceof Xe))throw L}),process.on("unhandledRejection",function(L){throw L}),w=(L,V)=>{if(D())throw process.exitCode=L,V;V instanceof Xe||U("exiting due to exception: "+V),process.exit(L)},i.inspect=function(){return"[Emscripten Module object]"};try{A=t(9925)}catch(L){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),L}t.g.Worker=A.Worker}else(S||M)&&(M?R=self.location.href:typeof document<"u"&&document.currentScript&&(R=document.currentScript.src),r&&(R=r),R=R.indexOf("blob:")!==0?R.substr(0,R.replace(/[?#].*/,"").lastIndexOf("/")+1):"",T||(u=A=>{var L=new XMLHttpRequest;return L.open("GET",A,!1),L.send(null),L.responseText},M&&(g=A=>{var L=new XMLHttpRequest;return L.open("GET",A,!1),L.responseType="arraybuffer",L.send(null),new Uint8Array(L.response)}),m=(A,L,V)=>{var q=new XMLHttpRequest;q.open("GET",A,!0),q.responseType="arraybuffer",q.onload=()=>{q.status==200||q.status==0&&q.response?L(q.response):V()},q.onerror=V,q.send(null)}));T&&typeof performance>"u"&&(t.g.performance=t(6953).performance);var k=console.log.bind(console),C=console.warn.bind(console);T&&(y(),k=A=>_.writeSync(1,A+`
`),C=A=>_.writeSync(2,A+`
`));var z,O=i.print||k,U=i.printErr||C;Object.assign(i,v),v=null,i.thisProgram&&(x=i.thisProgram),i.quit&&(w=i.quit),i.wasmBinary&&(z=i.wasmBinary);var K=i.noExitRuntime||!1;typeof WebAssembly!="object"&&Te("no native wasm support detected");var $,J,ee,he,ie,le,de,Me,Ee=!1,Fe=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Be(A,L,V){var q=(L>>>=0)+V;for(V=L;A[V]&&!(V>=q);)++V;if(16<V-L&&A.buffer&&Fe)return Fe.decode(A.buffer instanceof SharedArrayBuffer?A.slice(L,V):A.subarray(L,V));for(q="";L<V;){var te=A[L++];if(128&te){var se=63&A[L++];if((224&te)==192)q+=String.fromCharCode((31&te)<<6|se);else{var Ae=63&A[L++];65536>(te=(240&te)==224?(15&te)<<12|se<<6|Ae:(7&te)<<18|se<<12|Ae<<6|63&A[L++])?q+=String.fromCharCode(te):(te-=65536,q+=String.fromCharCode(55296|te>>10,56320|1023&te))}}else q+=String.fromCharCode(te)}return q}function Ce(A,L){return(A>>>=0)?Be(h(),A,L):""}function je(A,L,V,q){if(!(0<q))return 0;var te=V>>>=0;q=V+q-1;for(var se=0;se<A.length;++se){var Ae=A.charCodeAt(se);if(55296<=Ae&&57343>=Ae&&(Ae=65536+((1023&Ae)<<10)|1023&A.charCodeAt(++se)),127>=Ae){if(V>=q)break;L[V++>>>0]=Ae}else{if(2047>=Ae){if(V+1>=q)break;L[V++>>>0]=192|Ae>>6}else{if(65535>=Ae){if(V+2>=q)break;L[V++>>>0]=224|Ae>>12}else{if(V+3>=q)break;L[V++>>>0]=240|Ae>>18,L[V++>>>0]=128|Ae>>12&63}L[V++>>>0]=128|Ae>>6&63}L[V++>>>0]=128|63&Ae}}return L[V>>>0]=0,V-te}function ne(A){for(var L=0,V=0;V<A.length;++V){var q=A.charCodeAt(V);127>=q?L++:2047>=q?L+=2:55296<=q&&57343>=q?(L+=4,++V):L+=3}return L}function Qe(A){ee=A,i.HEAP8=he=new Int8Array(A),i.HEAP16=new Int16Array(A),i.HEAP32=le=new Int32Array(A),i.HEAPU8=ie=new Uint8Array(A),i.HEAPU16=new Uint16Array(A),i.HEAPU32=de=new Uint32Array(A),i.HEAPF32=new Float32Array(A),i.HEAPF64=Me=new Float64Array(A)}E&&(ee=i.buffer);var Pe=i.INITIAL_MEMORY||16777216;if(E)$=i.wasmMemory,ee=i.buffer;else if(i.wasmMemory)$=i.wasmMemory;else if(!(($=new WebAssembly.Memory({initial:Pe/65536,maximum:65536,shared:!0})).buffer instanceof SharedArrayBuffer))throw U("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),T&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory");$&&(ee=$.buffer),Pe=ee.byteLength,Qe(ee);var ze,De=[],nt=[],qe=[],B=[];function D(){return K||!1}function re(){var A=i.preRun.shift();De.unshift(A)}var ce,fe=0,pe=null;function Te(A){throw E?postMessage({cmd:"onAbort",arg:A}):i.onAbort&&i.onAbort(A),U(A="Aborted("+A+")"),Ee=!0,A=new WebAssembly.RuntimeError(A+". Build with -sASSERTIONS for more info."),a(A),A}function Oe(){return ce.startsWith("data:application/octet-stream;base64,")}function Ne(){var A=ce;try{if(A==ce&&z)return new Uint8Array(z);if(g)return g(A);throw"both async and sync fetching of the wasm failed"}catch(L){Te(L)}}ce="ort-wasm-threaded.wasm",Oe()||(ce=I(ce));var He={};function Xe(A){this.name="ExitStatus",this.message="Program terminated with exit("+A+")",this.status=A}function me(A){(A=_e.Vb[A])||Te(),_e.mc(A)}function rt(A){var L=_e.Cc();if(!L)return 6;_e.ac.push(L),_e.Vb[A.Ub]=L,L.Ub=A.Ub;var V={cmd:"run",start_routine:A.Ic,arg:A.zc,pthread_ptr:A.Ub};return L.$b=()=>{V.time=performance.now(),L.postMessage(V,A.Nc)},L.loaded&&(L.$b(),delete L.$b),0}function Ge(A){if(E)return oe(1,1,A);D()||(_e.oc(),i.onExit&&i.onExit(A),Ee=!0),w(A,new Xe(A))}function We(A,L){if(!L&&E)throw Se(A),"unwind";D()||E||($t(),Le(qe),Ut(0),Tt[1].length&&ht(1,10),Tt[2].length&&ht(2,10),_e.oc()),Ge(A)}var _e={Yb:[],ac:[],qc:[],Vb:{},fc:function(){E&&_e.Ec()},Pc:function(){},Ec:function(){_e.receiveObjectTransfer=_e.Gc,_e.threadInitTLS=_e.pc,_e.setExitStatus=_e.nc,K=!1},nc:function(){},oc:function(){for(var A of Object.values(_e.Vb))_e.mc(A);for(A of _e.Yb)A.terminate();_e.Yb=[]},mc:function(A){var L=A.Ub;delete _e.Vb[L],_e.Yb.push(A),_e.ac.splice(_e.ac.indexOf(A),1),A.Ub=0,Wt(L)},Gc:function(){},pc:function(){_e.qc.forEach(A=>A())},Fc:function(A,L){A.onmessage=V=>{var q=(V=V.data).cmd;if(A.Ub&&(_e.Bc=A.Ub),V.targetThread&&V.targetThread!=wt()){var te=_e.Vb[V.Qc];te?te.postMessage(V,V.transferList):U('Internal error! Worker sent a message "'+q+'" to target pthread '+V.targetThread+", but that thread no longer exists!")}else q==="processProxyingQueue"?Z(V.queue):q==="spawnThread"?rt(V):q==="cleanupThread"?me(V.thread):q==="killThread"?(V=V.thread,q=_e.Vb[V],delete _e.Vb[V],q.terminate(),Wt(V),_e.ac.splice(_e.ac.indexOf(q),1),q.Ub=0):q==="cancelThread"?_e.Vb[V.thread].postMessage({cmd:"cancel"}):q==="loaded"?(A.loaded=!0,L&&L(A),A.$b&&(A.$b(),delete A.$b)):q==="print"?O("Thread "+V.threadId+": "+V.text):q==="printErr"?U("Thread "+V.threadId+": "+V.text):q==="alert"?alert("Thread "+V.threadId+": "+V.text):V.target==="setimmediate"?A.postMessage(V):q==="onAbort"?i.onAbort&&i.onAbort(V.arg):q&&U("worker sent an unknown command "+q);_e.Bc=void 0},A.onerror=V=>{throw U("worker sent an error! "+V.filename+":"+V.lineno+": "+V.message),V},T&&(A.on("message",function(V){A.onmessage({data:V})}),A.on("error",function(V){A.onerror(V)}),A.on("detachedExit",function(){})),A.postMessage({cmd:"load",urlOrBlob:i.mainScriptUrlOrBlob||r,wasmMemory:$,wasmModule:J})},yc:function(){var A=I("ort-wasm-threaded.worker.js");_e.Yb.push(new Worker(A))},Cc:function(){return _e.Yb.length==0&&(_e.yc(),_e.Fc(_e.Yb[0])),_e.Yb.pop()}};function Le(A){for(;0<A.length;)A.shift()(i)}function H(A){var L=tt();return A=A(),et(L),A}function Se(A){if(E)return oe(2,0,A);try{We(A)}catch(L){L instanceof Xe||L=="unwind"||w(1,L)}}i.PThread=_e,i.establishStackSpace=function(){var A=wt(),L=p()[A+44>>2>>>0];A=p()[A+48>>2>>>0],Zt(L,L-A),et(L)};var ke=[];function be(A){var L=ke[A];return L||(A>=ke.length&&(ke.length=A+1),ke[A]=L=ze.get(A)),L}i.invokeEntryPoint=function(A,L){A=be(A)(L),D()?_e.nc(A):Kt(A)};var ge,X,we=[],ue=0,ve=0;function ye(A){this.Zb=A,this.Sb=A-24,this.xc=function(L){f()[this.Sb+4>>2>>>0]=L},this.bc=function(){return f()[this.Sb+4>>2>>>0]},this.wc=function(L){f()[this.Sb+8>>2>>>0]=L},this.Dc=function(){return f()[this.Sb+8>>2>>>0]},this.rc=function(){p()[this.Sb>>2>>>0]=0},this.hc=function(L){L=L?1:0,l()[this.Sb+12>>0>>>0]=L},this.uc=function(){return l()[this.Sb+12>>0>>>0]!=0},this.ic=function(L){L=L?1:0,l()[this.Sb+13>>0>>>0]=L},this.kc=function(){return l()[this.Sb+13>>0>>>0]!=0},this.fc=function(L,V){this.cc(0),this.xc(L),this.wc(V),this.rc(),this.hc(!1),this.ic(!1)},this.sc=function(){Atomics.add(p(),this.Sb>>2,1)},this.Hc=function(){return Atomics.sub(p(),this.Sb>>2,1)===1},this.cc=function(L){f()[this.Sb+16>>2>>>0]=L},this.tc=function(){return f()[this.Sb+16>>2>>>0]},this.vc=function(){if(Qt(this.bc()))return f()[this.Zb>>2>>>0];var L=this.tc();return L!==0?L:this.Zb}}function Ze(A){return xt(new ye(A).Sb)}function Ke(A,L,V,q){return E?oe(3,1,A,L,V,q):ct(A,L,V,q)}function ct(A,L,V,q){if(typeof SharedArrayBuffer>"u")return U("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var te=[];return E&&te.length===0?Ke(A,L,V,q):(A={Ic:V,Ub:A,zc:q,Nc:te},E?(A.Oc="spawnThread",postMessage(A,te),0):rt(A))}function dt(A,L,V){return E?oe(4,1,A,L,V):0}function it(A,L){if(E)return oe(5,1,A,L)}function pt(A,L){if(E)return oe(6,1,A,L)}function vt(A,L,V){if(E)return oe(7,1,A,L,V)}function Ot(A,L,V){return E?oe(8,1,A,L,V):0}function Nt(A,L){if(E)return oe(9,1,A,L)}function Et(A,L,V){if(E)return oe(10,1,A,L,V)}function It(A,L,V,q){if(E)return oe(11,1,A,L,V,q)}function Mt(A,L,V,q){if(E)return oe(12,1,A,L,V,q)}function Rt(A,L,V,q){if(E)return oe(13,1,A,L,V,q)}function Lt(A){if(E)return oe(14,1,A)}function N(A,L){if(E)return oe(15,1,A,L)}function j(A,L,V){if(E)return oe(16,1,A,L,V)}function Z(A){Atomics.store(p(),A>>2,1),wt()&&Yt(A),Atomics.compareExchange(p(),A>>2,1,0)}function P(A){return f()[A>>>2]+4294967296*p()[A+4>>>2]}function F(A,L,V,q,te,se){return E?oe(17,1,A,L,V,q,te,se):-52}function G(A,L,V,q,te,se){if(E)return oe(18,1,A,L,V,q,te,se)}function W(A){var L=ne(A)+1,V=Ft(L);return V&&je(A,l(),V,L),V}function Y(A,L,V){function q(at){return(at=at.toTimeString().match(/\(([A-Za-z ]+)\)$/))?at[1]:"GMT"}if(E)return oe(19,1,A,L,V);var te=new Date().getFullYear(),se=new Date(te,0,1),Ae=new Date(te,6,1);te=se.getTimezoneOffset();var $e=Ae.getTimezoneOffset(),st=Math.max(te,$e);p()[A>>2>>>0]=60*st,p()[L>>2>>>0]=+(te!=$e),A=q(se),L=q(Ae),A=W(A),L=W(L),$e<te?(f()[V>>2>>>0]=A,f()[V+4>>2>>>0]=L):(f()[V>>2>>>0]=L,f()[V+4>>2>>>0]=A)}function oe(A,L){var V=arguments.length-2,q=arguments;return H(()=>{for(var te=qt(8*V),se=te>>3,Ae=0;Ae<V;Ae++){var $e=q[2+Ae];d()[se+Ae>>>0]=$e}return Xt(A,V,te,L)})}i.executeNotifiedProxyingQueue=Z,X=T?()=>{var A=process.hrtime();return 1e3*A[0]+A[1]/1e6}:E?()=>performance.now()-i.__performance_now_clock_drift:()=>performance.now();var xe,Ie=[],Ue={};function Ve(){if(!xe){var A,L={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:x||"./this.program"};for(A in Ue)Ue[A]===void 0?delete L[A]:L[A]=Ue[A];var V=[];for(A in L)V.push(A+"="+L[A]);xe=V}return xe}function Q(A,L){if(E)return oe(20,1,A,L);var V=0;return Ve().forEach(function(q,te){var se=L+V;for(te=f()[A+4*te>>2>>>0]=se,se=0;se<q.length;++se)l()[te++>>0>>>0]=q.charCodeAt(se);l()[te>>0>>>0]=0,V+=q.length+1}),0}function Re(A,L){if(E)return oe(21,1,A,L);var V=Ve();f()[A>>2>>>0]=V.length;var q=0;return V.forEach(function(te){q+=te.length+1}),f()[L>>2>>>0]=q,0}function Ye(A){return E?oe(22,1,A):52}function mt(A,L,V,q){return E?oe(23,1,A,L,V,q):52}function ut(A,L,V,q,te){return E?oe(24,1,A,L,V,q,te):70}var Tt=[null,[],[]];function ht(A,L){var V=Tt[A];L===0||L===10?((A===1?O:U)(Be(V,0)),V.length=0):V.push(L)}function Je(A,L,V,q){if(E)return oe(25,1,A,L,V,q);for(var te=0,se=0;se<V;se++){var Ae=f()[L>>2>>>0],$e=f()[L+4>>2>>>0];L+=8;for(var st=0;st<$e;st++)ht(A,h()[Ae+st>>>0]);te+=$e}return f()[q>>2>>>0]=te,0}var bt=0;function ft(A){return A%4==0&&(A%100!=0||A%400==0)}var At=[31,29,31,30,31,30,31,31,30,31,30,31],zt=[31,28,31,30,31,30,31,31,30,31,30,31];function Dt(A,L,V,q){function te(ae,lt,gt){for(ae=typeof ae=="number"?ae.toString():ae||"";ae.length<lt;)ae=gt[0]+ae;return ae}function se(ae,lt){return te(ae,lt,"0")}function Ae(ae,lt){function gt(Bt){return 0>Bt?-1:0<Bt?1:0}var Ct;return(Ct=gt(ae.getFullYear()-lt.getFullYear()))===0&&(Ct=gt(ae.getMonth()-lt.getMonth()))===0&&(Ct=gt(ae.getDate()-lt.getDate())),Ct}function $e(ae){switch(ae.getDay()){case 0:return new Date(ae.getFullYear()-1,11,29);case 1:return ae;case 2:return new Date(ae.getFullYear(),0,3);case 3:return new Date(ae.getFullYear(),0,2);case 4:return new Date(ae.getFullYear(),0,1);case 5:return new Date(ae.getFullYear()-1,11,31);case 6:return new Date(ae.getFullYear()-1,11,30)}}function st(ae){var lt=ae.Wb;for(ae=new Date(new Date(ae.Xb+1900,0,1).getTime());0<lt;){var gt=ae.getMonth(),Ct=(ft(ae.getFullYear())?At:zt)[gt];if(!(lt>Ct-ae.getDate())){ae.setDate(ae.getDate()+lt);break}lt-=Ct-ae.getDate()+1,ae.setDate(1),11>gt?ae.setMonth(gt+1):(ae.setMonth(0),ae.setFullYear(ae.getFullYear()+1))}return gt=new Date(ae.getFullYear()+1,0,4),lt=$e(new Date(ae.getFullYear(),0,4)),gt=$e(gt),0>=Ae(lt,ae)?0>=Ae(gt,ae)?ae.getFullYear()+1:ae.getFullYear():ae.getFullYear()-1}var at=p()[q+40>>2>>>0];for(var _t in q={Lc:p()[q>>2>>>0],Kc:p()[q+4>>2>>>0],dc:p()[q+8>>2>>>0],jc:p()[q+12>>2>>>0],ec:p()[q+16>>2>>>0],Xb:p()[q+20>>2>>>0],Tb:p()[q+24>>2>>>0],Wb:p()[q+28>>2>>>0],Rc:p()[q+32>>2>>>0],Jc:p()[q+36>>2>>>0],Mc:at?Ce(at):""},V=Ce(V),at={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})V=V.replace(new RegExp(_t,"g"),at[_t]);var Pt="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),St="January February March April May June July August September October November December".split(" ");for(_t in at={"%a":function(ae){return Pt[ae.Tb].substring(0,3)},"%A":function(ae){return Pt[ae.Tb]},"%b":function(ae){return St[ae.ec].substring(0,3)},"%B":function(ae){return St[ae.ec]},"%C":function(ae){return se((ae.Xb+1900)/100|0,2)},"%d":function(ae){return se(ae.jc,2)},"%e":function(ae){return te(ae.jc,2," ")},"%g":function(ae){return st(ae).toString().substring(2)},"%G":function(ae){return st(ae)},"%H":function(ae){return se(ae.dc,2)},"%I":function(ae){return(ae=ae.dc)==0?ae=12:12<ae&&(ae-=12),se(ae,2)},"%j":function(ae){for(var lt=0,gt=0;gt<=ae.ec-1;lt+=(ft(ae.Xb+1900)?At:zt)[gt++]);return se(ae.jc+lt,3)},"%m":function(ae){return se(ae.ec+1,2)},"%M":function(ae){return se(ae.Kc,2)},"%n":function(){return`
`},"%p":function(ae){return 0<=ae.dc&&12>ae.dc?"AM":"PM"},"%S":function(ae){return se(ae.Lc,2)},"%t":function(){return"	"},"%u":function(ae){return ae.Tb||7},"%U":function(ae){return se(Math.floor((ae.Wb+7-ae.Tb)/7),2)},"%V":function(ae){var lt=Math.floor((ae.Wb+7-(ae.Tb+6)%7)/7);if(2>=(ae.Tb+371-ae.Wb-2)%7&&lt++,lt)lt==53&&((gt=(ae.Tb+371-ae.Wb)%7)==4||gt==3&&ft(ae.Xb)||(lt=1));else{lt=52;var gt=(ae.Tb+7-ae.Wb-1)%7;(gt==4||gt==5&&ft(ae.Xb%400-1))&&lt++}return se(lt,2)},"%w":function(ae){return ae.Tb},"%W":function(ae){return se(Math.floor((ae.Wb+7-(ae.Tb+6)%7)/7),2)},"%y":function(ae){return(ae.Xb+1900).toString().substring(2)},"%Y":function(ae){return ae.Xb+1900},"%z":function(ae){var lt=0<=(ae=ae.Jc);return ae=Math.abs(ae)/60,(lt?"+":"-")+("0000"+(ae/60*100+ae%60)).slice(-4)},"%Z":function(ae){return ae.Mc},"%%":function(){return"%"}},V=V.replace(/%%/g,"\0\0"),at)V.includes(_t)&&(V=V.replace(new RegExp(_t,"g"),at[_t](q)));return _t=function(ae){var lt=Array(ne(ae)+1);return je(ae,lt,0,lt.length),lt}(V=V.replace(/\0\0/g,"%")),_t.length>L?0:(function(ae,lt){l().set(ae,lt>>>0)}(_t,A),_t.length-1)}_e.fc();var Vt=[null,Ge,Se,Ke,dt,it,pt,vt,Ot,Nt,Et,It,Mt,Rt,Lt,N,j,F,G,Y,Q,Re,Ye,mt,ut,Je],yt={b:function(A){return Ft(A+24)+24},n:function(A){return(A=new ye(A)).uc()||(A.hc(!0),ue--),A.ic(!1),we.push(A),A.sc(),A.vc()},ma:function(A){throw U("Unexpected exception thrown, this is not properly supported - aborting"),Ee=!0,A},x:function(){ot(0);var A=we.pop();if(A.Hc()&&!A.kc()){var L=A.Dc();L&&be(L)(A.Zb),Ze(A.Zb)}ve=0},e:function(){var A=ve;if(!A)return bt=0;var L=new ye(A);L.cc(A);var V=L.bc();if(!V)return bt=0,A;for(var q=Array.prototype.slice.call(arguments),te=0;te<q.length;te++){var se=q[te];if(se===0||se===V)break;if(jt(se,V,L.Sb+16))return bt=se,A}return bt=V,A},l:function(){var A=ve;if(!A)return bt=0;var L=new ye(A);L.cc(A);var V=L.bc();if(!V)return bt=0,A;for(var q=Array.prototype.slice.call(arguments),te=0;te<q.length;te++){var se=q[te];if(se===0||se===V)break;if(jt(se,V,L.Sb+16))return bt=se,A}return bt=V,A},h:function(){var A=ve;if(!A)return bt=0;var L=new ye(A);L.cc(A);var V=L.bc();if(!V)return bt=0,A;for(var q=Array.prototype.slice.call(arguments),te=0;te<q.length;te++){var se=q[te];if(se===0||se===V)break;if(jt(se,V,L.Sb+16))return bt=se,A}return bt=V,A},t:Ze,M:function(){var A=we.pop();A||Te("no exception to throw");var L=A.Zb;throw A.kc()||(we.push(A),A.ic(!0),A.hc(!1),ue++),ve=L,L},c:function(A,L,V){throw new ye(A).fc(L,V),ve=A,ue++,A},pa:function(){return ue},Fa:function(A){Gt(A,!M,1,!S),_e.pc()},T:function(A){E?postMessage({cmd:"cleanupThread",thread:A}):me(A)},xa:ct,j:function(A){throw ve||(ve=A),A},H:dt,Ma:it,ua:pt,wa:vt,oa:Ot,Ka:Nt,Ca:Et,Ja:It,V:Mt,va:Rt,sa:Lt,La:N,ta:j,Ta:function(){},X:function(){Te("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},Ua:function(){Te("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},W:function(){return Date.now()},ya:function(){return 2097152},Oa:function(){return!0},za:function(A,L,V,q){if(A==L)setTimeout(()=>Z(q));else if(E)postMessage({targetThread:A,cmd:"processProxyingQueue",queue:q});else{if(!(A=_e.Vb[A]))return;A.postMessage({cmd:"processProxyingQueue",queue:q})}return 1},Ea:function(){return-1},Pa:function(A,L){A=new Date(1e3*P(A)),p()[L>>2>>>0]=A.getUTCSeconds(),p()[L+4>>2>>>0]=A.getUTCMinutes(),p()[L+8>>2>>>0]=A.getUTCHours(),p()[L+12>>2>>>0]=A.getUTCDate(),p()[L+16>>2>>>0]=A.getUTCMonth(),p()[L+20>>2>>>0]=A.getUTCFullYear()-1900,p()[L+24>>2>>>0]=A.getUTCDay(),A=(A.getTime()-Date.UTC(A.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,p()[L+28>>2>>>0]=A},Qa:function(A,L){A=new Date(1e3*P(A)),p()[L>>2>>>0]=A.getSeconds(),p()[L+4>>2>>>0]=A.getMinutes(),p()[L+8>>2>>>0]=A.getHours(),p()[L+12>>2>>>0]=A.getDate(),p()[L+16>>2>>>0]=A.getMonth(),p()[L+20>>2>>>0]=A.getFullYear()-1900,p()[L+24>>2>>>0]=A.getDay();var V=new Date(A.getFullYear(),0,1),q=(A.getTime()-V.getTime())/864e5|0;p()[L+28>>2>>>0]=q,p()[L+36>>2>>>0]=-60*A.getTimezoneOffset(),q=new Date(A.getFullYear(),6,1).getTimezoneOffset(),A=0|(q!=(V=V.getTimezoneOffset())&&A.getTimezoneOffset()==Math.min(V,q)),p()[L+32>>2>>>0]=A},Ra:function(A){var L=new Date(p()[A+20>>2>>>0]+1900,p()[A+16>>2>>>0],p()[A+12>>2>>>0],p()[A+8>>2>>>0],p()[A+4>>2>>>0],p()[A>>2>>>0],0),V=p()[A+32>>2>>>0],q=L.getTimezoneOffset(),te=new Date(L.getFullYear(),0,1),se=new Date(L.getFullYear(),6,1).getTimezoneOffset(),Ae=te.getTimezoneOffset(),$e=Math.min(Ae,se);return 0>V?p()[A+32>>2>>>0]=+(se!=Ae&&$e==q):0<V!=($e==q)&&(se=Math.max(Ae,se),L.setTime(L.getTime()+6e4*((0<V?$e:se)-q))),p()[A+24>>2>>>0]=L.getDay(),V=(L.getTime()-te.getTime())/864e5|0,p()[A+28>>2>>>0]=V,p()[A>>2>>>0]=L.getSeconds(),p()[A+4>>2>>>0]=L.getMinutes(),p()[A+8>>2>>>0]=L.getHours(),p()[A+12>>2>>>0]=L.getDate(),p()[A+16>>2>>>0]=L.getMonth(),L.getTime()/1e3|0},Aa:F,Ba:G,Sa:function A(L,V,q){A.Ac||(A.Ac=!0,Y(L,V,q))},y:function(){Te("")},U:function(){if(!T&&!M){var A="Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread";ge||(ge={}),ge[A]||(ge[A]=1,T&&(A="warning: "+A),U(A))}},ra:function(){return 4294901760},B:X,Ia:function(A,L,V){h().copyWithin(A>>>0,L>>>0,L+V>>>0)},F:function(){return T?t(3993).cpus().length:navigator.hardwareConcurrency},Da:function(A,L,V){Ie.length=L,V>>=3;for(var q=0;q<L;q++)Ie[q]=d()[V+q>>>0];return(0>A?He[-A-1]:Vt[A]).apply(null,Ie)},qa:function(A){var L=h().length;if((A>>>=0)<=L||4294901760<A)return!1;for(var V=1;4>=V;V*=2){var q=L*(1+.2/V);q=Math.min(q,A+100663296);var te=Math;q=Math.max(A,q),te=te.min.call(te,4294901760,q+(65536-q%65536)%65536);e:{try{$.grow(te-ee.byteLength+65535>>>16),Qe($.buffer);var se=1;break e}catch{}se=void 0}if(se)return!0}return!1},Na:function(){throw"unwind"},Ga:Q,Ha:Re,J:We,I:Ye,S:mt,ga:ut,R:Je,d:function(){return bt},na:function A(L,V){A.lc||(A.lc=function(){if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var te=new Uint8Array(1);return()=>(crypto.getRandomValues(te),te[0])}if(T)try{var se=t(Object(function(){var Ae=new Error("Cannot find module 'crypto'");throw Ae.code="MODULE_NOT_FOUND",Ae}()));return()=>se.randomBytes(1)[0]}catch{}return()=>Te("randomDevice")}());for(var q=0;q<V;q++)l()[L+q>>0>>>0]=A.lc();return 0},ia:function(A,L,V){var q=tt();try{return be(A)(L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},ja:function(A,L,V){var q=tt();try{return be(A)(L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},K:function(A){var L=tt();try{return be(A)()}catch(V){if(et(L),V!==V+0)throw V;ot(1,0)}},f:function(A,L){var V=tt();try{return be(A)(L)}catch(q){if(et(V),q!==q+0)throw q;ot(1,0)}},P:function(A,L,V){var q=tt();try{return be(A)(L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},Q:function(A,L,V){var q=tt();try{return be(A)(L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},k:function(A,L,V){var q=tt();try{return be(A)(L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},p:function(A,L,V,q){var te=tt();try{return be(A)(L,V,q)}catch(se){if(et(te),se!==se+0)throw se;ot(1,0)}},q:function(A,L,V,q,te){var se=tt();try{return be(A)(L,V,q,te)}catch(Ae){if(et(se),Ae!==Ae+0)throw Ae;ot(1,0)}},N:function(A,L,V,q,te,se){var Ae=tt();try{return be(A)(L,V,q,te,se)}catch($e){if(et(Ae),$e!==$e+0)throw $e;ot(1,0)}},s:function(A,L,V,q,te,se){var Ae=tt();try{return be(A)(L,V,q,te,se)}catch($e){if(et(Ae),$e!==$e+0)throw $e;ot(1,0)}},w:function(A,L,V,q,te,se,Ae){var $e=tt();try{return be(A)(L,V,q,te,se,Ae)}catch(st){if(et($e),st!==st+0)throw st;ot(1,0)}},L:function(A,L,V,q,te,se,Ae,$e){var st=tt();try{return be(A)(L,V,q,te,se,Ae,$e)}catch(at){if(et(st),at!==at+0)throw at;ot(1,0)}},E:function(A,L,V,q,te,se,Ae,$e,st,at,_t,Pt){var St=tt();try{return be(A)(L,V,q,te,se,Ae,$e,st,at,_t,Pt)}catch(ae){if(et(St),ae!==ae+0)throw ae;ot(1,0)}},aa:function(A,L,V,q,te,se,Ae,$e){var st=tt();try{return ln(A,L,V,q,te,se,Ae,$e)}catch(at){if(et(st),at!==at+0)throw at;ot(1,0)}},_:function(A,L,V,q,te,se,Ae){var $e=tt();try{return en(A,L,V,q,te,se,Ae)}catch(st){if(et($e),st!==st+0)throw st;ot(1,0)}},Z:function(A,L,V,q,te){var se=tt();try{return cn(A,L,V,q,te)}catch(Ae){if(et(se),Ae!==Ae+0)throw Ae;ot(1,0)}},ca:function(A,L,V,q){var te=tt();try{return sn(A,L,V,q)}catch(se){if(et(te),se!==se+0)throw se;ot(1,0)}},$:function(A){var L=tt();try{return Jt(A)}catch(V){if(et(L),V!==V+0)throw V;ot(1,0)}},ba:function(A,L){var V=tt();try{return an(A,L)}catch(q){if(et(V),q!==q+0)throw q;ot(1,0)}},Y:function(A,L,V){var q=tt();try{return tn(A,L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},g:function(A){var L=tt();try{be(A)()}catch(V){if(et(L),V!==V+0)throw V;ot(1,0)}},r:function(A,L){var V=tt();try{be(A)(L)}catch(q){if(et(V),q!==q+0)throw q;ot(1,0)}},i:function(A,L,V){var q=tt();try{be(A)(L,V)}catch(te){if(et(q),te!==te+0)throw te;ot(1,0)}},ha:function(A,L,V,q){var te=tt();try{be(A)(L,V,q)}catch(se){if(et(te),se!==se+0)throw se;ot(1,0)}},m:function(A,L,V,q){var te=tt();try{be(A)(L,V,q)}catch(se){if(et(te),se!==se+0)throw se;ot(1,0)}},v:function(A,L,V,q,te){var se=tt();try{be(A)(L,V,q,te)}catch(Ae){if(et(se),Ae!==Ae+0)throw Ae;ot(1,0)}},u:function(A,L,V,q,te,se){var Ae=tt();try{be(A)(L,V,q,te,se)}catch($e){if(et(Ae),$e!==$e+0)throw $e;ot(1,0)}},O:function(A,L,V,q,te,se,Ae){var $e=tt();try{be(A)(L,V,q,te,se,Ae)}catch(st){if(et($e),st!==st+0)throw st;ot(1,0)}},A:function(A,L,V,q,te,se,Ae,$e){var st=tt();try{be(A)(L,V,q,te,se,Ae,$e)}catch(at){if(et(st),at!==at+0)throw at;ot(1,0)}},ka:function(A,L,V,q,te,se,Ae,$e,st){var at=tt();try{be(A)(L,V,q,te,se,Ae,$e,st)}catch(_t){if(et(at),_t!==_t+0)throw _t;ot(1,0)}},C:function(A,L,V,q,te,se,Ae,$e,st,at,_t){var Pt=tt();try{be(A)(L,V,q,te,se,Ae,$e,st,at,_t)}catch(St){if(et(Pt),St!==St+0)throw St;ot(1,0)}},D:function(A,L,V,q,te,se,Ae,$e,st,at,_t,Pt,St,ae,lt,gt){var Ct=tt();try{be(A)(L,V,q,te,se,Ae,$e,st,at,_t,Pt,St,ae,lt,gt)}catch(Bt){if(et(Ct),Bt!==Bt+0)throw Bt;ot(1,0)}},fa:function(A,L,V,q,te,se,Ae,$e){var st=tt();try{nn(A,L,V,q,te,se,Ae,$e)}catch(at){if(et(st),at!==at+0)throw at;ot(1,0)}},da:function(A,L,V,q,te,se,Ae,$e,st,at,_t,Pt){var St=tt();try{on(A,L,V,q,te,se,Ae,$e,st,at,_t,Pt)}catch(ae){if(et(St),ae!==ae+0)throw ae;ot(1,0)}},ea:function(A,L,V,q,te,se){var Ae=tt();try{rn(A,L,V,q,te,se)}catch($e){if(et(Ae),$e!==$e+0)throw $e;ot(1,0)}},o:function(A){return A},a:$||i.wasmMemory,G:function(A){bt=A},la:Dt,z:function(A,L,V,q){return Dt(A,L,V,q)}};(function(){function A(te,se){i.asm=te.exports,_e.qc.push(i.asm.sb),ze=i.asm.ub,nt.unshift(i.asm.Va),J=se,E||(fe--,i.monitorRunDependencies&&i.monitorRunDependencies(fe),fe==0&&pe&&(te=pe,pe=null,te()))}function L(te){A(te.instance,te.module)}function V(te){return function(){if(!z&&(S||M)){if(typeof fetch=="function"&&!ce.startsWith("file://"))return fetch(ce,{credentials:"same-origin"}).then(function(se){if(!se.ok)throw"failed to load wasm binary file at '"+ce+"'";return se.arrayBuffer()}).catch(function(){return Ne()});if(m)return new Promise(function(se,Ae){m(ce,function($e){se(new Uint8Array($e))},Ae)})}return Promise.resolve().then(function(){return Ne()})}().then(function(se){return WebAssembly.instantiate(se,q)}).then(function(se){return se}).then(te,function(se){U("failed to asynchronously prepare wasm: "+se),Te(se)})}var q={a:yt};if(E||(fe++,i.monitorRunDependencies&&i.monitorRunDependencies(fe)),i.instantiateWasm)try{return i.instantiateWasm(q,A)}catch(te){return U("Module.instantiateWasm callback failed with error: "+te),!1}(z||typeof WebAssembly.instantiateStreaming!="function"||Oe()||ce.startsWith("file://")||T||typeof fetch!="function"?V(L):fetch(ce,{credentials:"same-origin"}).then(function(te){return WebAssembly.instantiateStreaming(te,q).then(L,function(se){return U("wasm streaming compile failed: "+se),U("falling back to ArrayBuffer instantiation"),V(L)})})).catch(a)})(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.Va).apply(null,arguments)},i._OrtInit=function(){return(i._OrtInit=i.asm.Wa).apply(null,arguments)},i._OrtCreateSessionOptions=function(){return(i._OrtCreateSessionOptions=i.asm.Xa).apply(null,arguments)},i._OrtAppendExecutionProvider=function(){return(i._OrtAppendExecutionProvider=i.asm.Ya).apply(null,arguments)},i._OrtAddSessionConfigEntry=function(){return(i._OrtAddSessionConfigEntry=i.asm.Za).apply(null,arguments)},i._OrtReleaseSessionOptions=function(){return(i._OrtReleaseSessionOptions=i.asm._a).apply(null,arguments)},i._OrtCreateSession=function(){return(i._OrtCreateSession=i.asm.$a).apply(null,arguments)},i._OrtReleaseSession=function(){return(i._OrtReleaseSession=i.asm.ab).apply(null,arguments)},i._OrtGetInputCount=function(){return(i._OrtGetInputCount=i.asm.bb).apply(null,arguments)},i._OrtGetOutputCount=function(){return(i._OrtGetOutputCount=i.asm.cb).apply(null,arguments)},i._OrtGetInputName=function(){return(i._OrtGetInputName=i.asm.db).apply(null,arguments)},i._OrtGetOutputName=function(){return(i._OrtGetOutputName=i.asm.eb).apply(null,arguments)},i._OrtFree=function(){return(i._OrtFree=i.asm.fb).apply(null,arguments)},i._OrtCreateTensor=function(){return(i._OrtCreateTensor=i.asm.gb).apply(null,arguments)},i._OrtGetTensorData=function(){return(i._OrtGetTensorData=i.asm.hb).apply(null,arguments)},i._OrtReleaseTensor=function(){return(i._OrtReleaseTensor=i.asm.ib).apply(null,arguments)},i._OrtCreateRunOptions=function(){return(i._OrtCreateRunOptions=i.asm.jb).apply(null,arguments)},i._OrtAddRunConfigEntry=function(){return(i._OrtAddRunConfigEntry=i.asm.kb).apply(null,arguments)},i._OrtReleaseRunOptions=function(){return(i._OrtReleaseRunOptions=i.asm.lb).apply(null,arguments)},i._OrtRun=function(){return(i._OrtRun=i.asm.mb).apply(null,arguments)},i._OrtEndProfiling=function(){return(i._OrtEndProfiling=i.asm.nb).apply(null,arguments)};var wt=i._pthread_self=function(){return(wt=i._pthread_self=i.asm.ob).apply(null,arguments)},Ft=i._malloc=function(){return(Ft=i._malloc=i.asm.pb).apply(null,arguments)},xt=i._free=function(){return(xt=i._free=i.asm.qb).apply(null,arguments)},Ut=i._fflush=function(){return(Ut=i._fflush=i.asm.rb).apply(null,arguments)};i.__emscripten_tls_init=function(){return(i.__emscripten_tls_init=i.asm.sb).apply(null,arguments)};var $t=i.___funcs_on_exit=function(){return($t=i.___funcs_on_exit=i.asm.tb).apply(null,arguments)},Gt=i.__emscripten_thread_init=function(){return(Gt=i.__emscripten_thread_init=i.asm.vb).apply(null,arguments)};i.__emscripten_thread_crashed=function(){return(i.__emscripten_thread_crashed=i.asm.wb).apply(null,arguments)};var Ht,Xt=i._emscripten_run_in_main_runtime_thread_js=function(){return(Xt=i._emscripten_run_in_main_runtime_thread_js=i.asm.xb).apply(null,arguments)},Yt=i.__emscripten_proxy_execute_task_queue=function(){return(Yt=i.__emscripten_proxy_execute_task_queue=i.asm.yb).apply(null,arguments)},Wt=i.__emscripten_thread_free_data=function(){return(Wt=i.__emscripten_thread_free_data=i.asm.zb).apply(null,arguments)},Kt=i.__emscripten_thread_exit=function(){return(Kt=i.__emscripten_thread_exit=i.asm.Ab).apply(null,arguments)},ot=i._setThrew=function(){return(ot=i._setThrew=i.asm.Bb).apply(null,arguments)},Zt=i._emscripten_stack_set_limits=function(){return(Zt=i._emscripten_stack_set_limits=i.asm.Cb).apply(null,arguments)},tt=i.stackSave=function(){return(tt=i.stackSave=i.asm.Db).apply(null,arguments)},et=i.stackRestore=function(){return(et=i.stackRestore=i.asm.Eb).apply(null,arguments)},qt=i.stackAlloc=function(){return(qt=i.stackAlloc=i.asm.Fb).apply(null,arguments)},jt=i.___cxa_can_catch=function(){return(jt=i.___cxa_can_catch=i.asm.Gb).apply(null,arguments)},Qt=i.___cxa_is_pointer_type=function(){return(Qt=i.___cxa_is_pointer_type=i.asm.Hb).apply(null,arguments)},Jt=i.dynCall_j=function(){return(Jt=i.dynCall_j=i.asm.Ib).apply(null,arguments)},en=i.dynCall_iiiiij=function(){return(en=i.dynCall_iiiiij=i.asm.Jb).apply(null,arguments)},tn=i.dynCall_jii=function(){return(tn=i.dynCall_jii=i.asm.Kb).apply(null,arguments)},nn=i.dynCall_viiiiij=function(){return(nn=i.dynCall_viiiiij=i.asm.Lb).apply(null,arguments)},rn=i.dynCall_vjji=function(){return(rn=i.dynCall_vjji=i.asm.Mb).apply(null,arguments)},on=i.dynCall_viiijjjii=function(){return(on=i.dynCall_viiijjjii=i.asm.Nb).apply(null,arguments)},sn=i.dynCall_iij=function(){return(sn=i.dynCall_iij=i.asm.Ob).apply(null,arguments)},an=i.dynCall_ji=function(){return(an=i.dynCall_ji=i.asm.Pb).apply(null,arguments)},ln=i.dynCall_iiiiiij=function(){return(ln=i.dynCall_iiiiiij=i.asm.Qb).apply(null,arguments)},cn=i.dynCall_iiij=function(){return(cn=i.dynCall_iiij=i.asm.Rb).apply(null,arguments)};function un(){function A(){if(!Ht&&(Ht=!0,i.calledRun=!0,!Ee)&&(E||Le(nt),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),!E)){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;){var L=i.postRun.shift();B.unshift(L)}Le(B)}}if(!(0<fe))if(E)n(i),E||Le(nt),postMessage({cmd:"loaded"});else{if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)re();Le(De),0<fe||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),A()},1)):A())}}if(i.UTF8ToString=Ce,i.stringToUTF8=function(A,L,V){return je(A,h(),L,V)},i.lengthBytesUTF8=ne,i.keepRuntimeAlive=D,i.wasmMemory=$,i.stackSave=tt,i.stackRestore=et,i.stackAlloc=qt,i.ExitStatus=Xe,i.PThread=_e,pe=function A(){Ht||un(),Ht||(pe=A)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);0<i.preInit.length;)i.preInit.pop()();return un(),c.ready});s.exports=o},932:(s,e,t)=>{var r,o=(r=(r=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(c){var l,h,p;c=c||{},l||(l=c!==void 0?c:{}),l.ready=new Promise(function(N,j){h=N,p=j});var f,d,i,n,a,u,m=Object.assign({},l),g="./this.program",_=(N,j)=>{throw j},b=typeof window=="object",y=typeof importScripts=="function",v=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",x="";v?(x=y?t(908).dirname(x)+"/":"//",u=()=>{a||(n=t(1384),a=t(908))},f=function(N,j){return u(),N=a.normalize(N),n.readFileSync(N,j?void 0:"utf8")},i=N=>((N=f(N,!0)).buffer||(N=new Uint8Array(N)),N),d=(N,j,Z)=>{u(),N=a.normalize(N),n.readFile(N,function(P,F){P?Z(P):j(F.buffer)})},1<process.argv.length&&(g=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(N){if(!(N instanceof nt))throw N}),process.on("unhandledRejection",function(N){throw N}),_=(N,j)=>{if(T||0<Fe)throw process.exitCode=N,j;j instanceof nt||M("exiting due to exception: "+j),process.exit(N)},l.inspect=function(){return"[Emscripten Module object]"}):(b||y)&&(y?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),r&&(x=r),x=x.indexOf("blob:")!==0?x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):"",f=N=>{var j=new XMLHttpRequest;return j.open("GET",N,!1),j.send(null),j.responseText},y&&(i=N=>{var j=new XMLHttpRequest;return j.open("GET",N,!1),j.responseType="arraybuffer",j.send(null),new Uint8Array(j.response)}),d=(N,j,Z)=>{var P=new XMLHttpRequest;P.open("GET",N,!0),P.responseType="arraybuffer",P.onload=()=>{P.status==200||P.status==0&&P.response?j(P.response):Z()},P.onerror=Z,P.send(null)});var w,S=l.print||console.log.bind(console),M=l.printErr||console.warn.bind(console);Object.assign(l,m),m=null,l.thisProgram&&(g=l.thisProgram),l.quit&&(_=l.quit),l.wasmBinary&&(w=l.wasmBinary);var T=l.noExitRuntime||!1;typeof WebAssembly!="object"&&Qe("no native wasm support detected");var E,R,I,k,C,z,O=!1,U=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function K(N,j,Z){var P=(j>>>=0)+Z;for(Z=j;N[Z]&&!(Z>=P);)++Z;if(16<Z-j&&N.buffer&&U)return U.decode(N.subarray(j,Z));for(P="";j<Z;){var F=N[j++];if(128&F){var G=63&N[j++];if((224&F)==192)P+=String.fromCharCode((31&F)<<6|G);else{var W=63&N[j++];65536>(F=(240&F)==224?(15&F)<<12|G<<6|W:(7&F)<<18|G<<12|W<<6|63&N[j++])?P+=String.fromCharCode(F):(F-=65536,P+=String.fromCharCode(55296|F>>10,56320|1023&F))}}else P+=String.fromCharCode(F)}return P}function $(N,j){return(N>>>=0)?K(k,N,j):""}function J(N,j,Z,P){if(!(0<P))return 0;var F=Z>>>=0;P=Z+P-1;for(var G=0;G<N.length;++G){var W=N.charCodeAt(G);if(55296<=W&&57343>=W&&(W=65536+((1023&W)<<10)|1023&N.charCodeAt(++G)),127>=W){if(Z>=P)break;j[Z++>>>0]=W}else{if(2047>=W){if(Z+1>=P)break;j[Z++>>>0]=192|W>>6}else{if(65535>=W){if(Z+2>=P)break;j[Z++>>>0]=224|W>>12}else{if(Z+3>=P)break;j[Z++>>>0]=240|W>>18,j[Z++>>>0]=128|W>>12&63}j[Z++>>>0]=128|W>>6&63}j[Z++>>>0]=128|63&W}}return j[Z>>>0]=0,Z-F}function ee(N){for(var j=0,Z=0;Z<N.length;++Z){var P=N.charCodeAt(Z);127>=P?j++:2047>=P?j+=2:55296<=P&&57343>=P?(j+=4,++Z):j+=3}return j}function he(){var N=E.buffer;R=N,l.HEAP8=I=new Int8Array(N),l.HEAP16=new Int16Array(N),l.HEAP32=C=new Int32Array(N),l.HEAPU8=k=new Uint8Array(N),l.HEAPU16=new Uint16Array(N),l.HEAPU32=z=new Uint32Array(N),l.HEAPF32=new Float32Array(N),l.HEAPF64=new Float64Array(N)}var ie,le=[],de=[],Me=[],Ee=[],Fe=0;function Be(){var N=l.preRun.shift();le.unshift(N)}var Ce,je=0,ne=null;function Qe(N){throw l.onAbort&&l.onAbort(N),M(N="Aborted("+N+")"),O=!0,N=new WebAssembly.RuntimeError(N+". Build with -sASSERTIONS for more info."),p(N),N}function Pe(){return Ce.startsWith("data:application/octet-stream;base64,")}if(Ce="ort-wasm.wasm",!Pe()){var ze=Ce;Ce=l.locateFile?l.locateFile(ze,x):x+ze}function De(){var N=Ce;try{if(N==Ce&&w)return new Uint8Array(w);if(i)return i(N);throw"both async and sync fetching of the wasm failed"}catch(j){Qe(j)}}function nt(N){this.name="ExitStatus",this.message="Program terminated with exit("+N+")",this.status=N}function qe(N){for(;0<N.length;)N.shift()(l)}var B=[],D=0,re=0;function ce(N){this.Db=N,this.zb=N-24,this.Ub=function(j){z[this.zb+4>>2>>>0]=j},this.Eb=function(){return z[this.zb+4>>2>>>0]},this.Sb=function(j){z[this.zb+8>>2>>>0]=j},this.Wb=function(){return z[this.zb+8>>2>>>0]},this.Tb=function(){C[this.zb>>2>>>0]=0},this.Ib=function(j){I[this.zb+12>>0>>>0]=j?1:0},this.Pb=function(){return I[this.zb+12>>0>>>0]!=0},this.Jb=function(j){I[this.zb+13>>0>>>0]=j?1:0},this.Lb=function(){return I[this.zb+13>>0>>>0]!=0},this.Rb=function(j,Z){this.Fb(0),this.Ub(j),this.Sb(Z),this.Tb(),this.Ib(!1),this.Jb(!1)},this.Nb=function(){C[this.zb>>2>>>0]+=1},this.Xb=function(){var j=C[this.zb>>2>>>0];return C[this.zb>>2>>>0]=j-1,j===1},this.Fb=function(j){z[this.zb+16>>2>>>0]=j},this.Ob=function(){return z[this.zb+16>>2>>>0]},this.Qb=function(){if(ct(this.Eb()))return z[this.Db>>2>>>0];var j=this.Ob();return j!==0?j:this.Db}}function fe(N){return ge(new ce(N).zb)}var pe=[];function Te(N){var j=pe[N];return j||(N>=pe.length&&(pe.length=N+1),pe[N]=j=ie.get(N)),j}function Oe(N){var j=ee(N)+1,Z=be(j);return Z&&J(N,I,Z,j),Z}var Ne={};function He(){if(!Xe){var N,j={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:g||"./this.program"};for(N in Ne)Ne[N]===void 0?delete j[N]:j[N]=Ne[N];var Z=[];for(N in j)Z.push(N+"="+j[N]);Xe=Z}return Xe}var Xe,me=[null,[],[]];function rt(N,j){var Z=me[N];j===0||j===10?((N===1?S:M)(K(Z,0)),Z.length=0):Z.push(j)}var Ge=0;function We(N){return N%4==0&&(N%100!=0||N%400==0)}var _e=[31,29,31,30,31,30,31,31,30,31,30,31],Le=[31,28,31,30,31,30,31,31,30,31,30,31];function H(N,j,Z,P){function F(Q,Re,Ye){for(Q=typeof Q=="number"?Q.toString():Q||"";Q.length<Re;)Q=Ye[0]+Q;return Q}function G(Q,Re){return F(Q,Re,"0")}function W(Q,Re){function Ye(ut){return 0>ut?-1:0<ut?1:0}var mt;return(mt=Ye(Q.getFullYear()-Re.getFullYear()))===0&&(mt=Ye(Q.getMonth()-Re.getMonth()))===0&&(mt=Ye(Q.getDate()-Re.getDate())),mt}function Y(Q){switch(Q.getDay()){case 0:return new Date(Q.getFullYear()-1,11,29);case 1:return Q;case 2:return new Date(Q.getFullYear(),0,3);case 3:return new Date(Q.getFullYear(),0,2);case 4:return new Date(Q.getFullYear(),0,1);case 5:return new Date(Q.getFullYear()-1,11,31);case 6:return new Date(Q.getFullYear()-1,11,30)}}function oe(Q){var Re=Q.Bb;for(Q=new Date(new Date(Q.Cb+1900,0,1).getTime());0<Re;){var Ye=Q.getMonth(),mt=(We(Q.getFullYear())?_e:Le)[Ye];if(!(Re>mt-Q.getDate())){Q.setDate(Q.getDate()+Re);break}Re-=mt-Q.getDate()+1,Q.setDate(1),11>Ye?Q.setMonth(Ye+1):(Q.setMonth(0),Q.setFullYear(Q.getFullYear()+1))}return Ye=new Date(Q.getFullYear()+1,0,4),Re=Y(new Date(Q.getFullYear(),0,4)),Ye=Y(Ye),0>=W(Re,Q)?0>=W(Ye,Q)?Q.getFullYear()+1:Q.getFullYear():Q.getFullYear()-1}var xe=C[P+40>>2>>>0];for(var Ie in P={$b:C[P>>2>>>0],Zb:C[P+4>>2>>>0],Gb:C[P+8>>2>>>0],Kb:C[P+12>>2>>>0],Hb:C[P+16>>2>>>0],Cb:C[P+20>>2>>>0],Ab:C[P+24>>2>>>0],Bb:C[P+28>>2>>>0],bc:C[P+32>>2>>>0],Yb:C[P+36>>2>>>0],ac:xe?$(xe):""},Z=$(Z),xe={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})Z=Z.replace(new RegExp(Ie,"g"),xe[Ie]);var Ue="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ve="January February March April May June July August September October November December".split(" ");for(Ie in xe={"%a":function(Q){return Ue[Q.Ab].substring(0,3)},"%A":function(Q){return Ue[Q.Ab]},"%b":function(Q){return Ve[Q.Hb].substring(0,3)},"%B":function(Q){return Ve[Q.Hb]},"%C":function(Q){return G((Q.Cb+1900)/100|0,2)},"%d":function(Q){return G(Q.Kb,2)},"%e":function(Q){return F(Q.Kb,2," ")},"%g":function(Q){return oe(Q).toString().substring(2)},"%G":function(Q){return oe(Q)},"%H":function(Q){return G(Q.Gb,2)},"%I":function(Q){return(Q=Q.Gb)==0?Q=12:12<Q&&(Q-=12),G(Q,2)},"%j":function(Q){for(var Re=0,Ye=0;Ye<=Q.Hb-1;Re+=(We(Q.Cb+1900)?_e:Le)[Ye++]);return G(Q.Kb+Re,3)},"%m":function(Q){return G(Q.Hb+1,2)},"%M":function(Q){return G(Q.Zb,2)},"%n":function(){return`
`},"%p":function(Q){return 0<=Q.Gb&&12>Q.Gb?"AM":"PM"},"%S":function(Q){return G(Q.$b,2)},"%t":function(){return"	"},"%u":function(Q){return Q.Ab||7},"%U":function(Q){return G(Math.floor((Q.Bb+7-Q.Ab)/7),2)},"%V":function(Q){var Re=Math.floor((Q.Bb+7-(Q.Ab+6)%7)/7);if(2>=(Q.Ab+371-Q.Bb-2)%7&&Re++,Re)Re==53&&((Ye=(Q.Ab+371-Q.Bb)%7)==4||Ye==3&&We(Q.Cb)||(Re=1));else{Re=52;var Ye=(Q.Ab+7-Q.Bb-1)%7;(Ye==4||Ye==5&&We(Q.Cb%400-1))&&Re++}return G(Re,2)},"%w":function(Q){return Q.Ab},"%W":function(Q){return G(Math.floor((Q.Bb+7-(Q.Ab+6)%7)/7),2)},"%y":function(Q){return(Q.Cb+1900).toString().substring(2)},"%Y":function(Q){return Q.Cb+1900},"%z":function(Q){var Re=0<=(Q=Q.Yb);return Q=Math.abs(Q)/60,(Re?"+":"-")+("0000"+(Q/60*100+Q%60)).slice(-4)},"%Z":function(Q){return Q.ac},"%%":function(){return"%"}},Z=Z.replace(/%%/g,"\0\0"),xe)Z.includes(Ie)&&(Z=Z.replace(new RegExp(Ie,"g"),xe[Ie](P)));return Ie=function(Q){var Re=Array(ee(Q)+1);return J(Q,Re,0,Re.length),Re}(Z=Z.replace(/\0\0/g,"%")),Ie.length>j?0:(I.set(Ie,N>>>0),Ie.length-1)}var Se={a:function(N){return be(N+24)+24},m:function(N){return(N=new ce(N)).Pb()||(N.Ib(!0),D--),N.Jb(!1),B.push(N),N.Nb(),N.Qb()},ia:function(N){throw M("Unexpected exception thrown, this is not properly supported - aborting"),O=!0,N},w:function(){ue(0);var N=B.pop();if(N.Xb()&&!N.Lb()){var j=N.Wb();j&&Te(j)(N.Db),fe(N.Db)}re=0},d:function(){var N=re;if(!N)return Ge=0;var j=new ce(N);j.Fb(N);var Z=j.Eb();if(!Z)return Ge=0,N;for(var P=Array.prototype.slice.call(arguments),F=0;F<P.length;F++){var G=P[F];if(G===0||G===Z)break;if(Ke(G,Z,j.zb+16))return Ge=G,N}return Ge=Z,N},k:function(){var N=re;if(!N)return Ge=0;var j=new ce(N);j.Fb(N);var Z=j.Eb();if(!Z)return Ge=0,N;for(var P=Array.prototype.slice.call(arguments),F=0;F<P.length;F++){var G=P[F];if(G===0||G===Z)break;if(Ke(G,Z,j.zb+16))return Ge=G,N}return Ge=Z,N},g:function(){var N=re;if(!N)return Ge=0;var j=new ce(N);j.Fb(N);var Z=j.Eb();if(!Z)return Ge=0,N;for(var P=Array.prototype.slice.call(arguments),F=0;F<P.length;F++){var G=P[F];if(G===0||G===Z)break;if(Ke(G,Z,j.zb+16))return Ge=G,N}return Ge=Z,N},s:fe,L:function(){var N=B.pop();N||Qe("no exception to throw");var j=N.Db;throw N.Lb()||(B.push(N),N.Jb(!0),N.Ib(!1),D++),re=j,j},b:function(N,j,Z){throw new ce(N).Rb(j,Z),re=N,D++,N},la:function(){return D},i:function(N){throw re||(re=N),N},H:function(){return 0},Ba:function(){},pa:function(){},ra:function(){},ka:function(){return 0},za:function(){},ua:function(){},ya:function(){},R:function(){},qa:function(){},na:function(){},Aa:function(){},oa:function(){},Ha:function(){},Ja:function(){Qe("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},Ia:function(){Qe("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},S:function(){return Date.now()},Ca:function(){return!0},Da:function(N,j){N=new Date(1e3*(z[N>>>2]+4294967296*C[N+4>>>2])),C[j>>2>>>0]=N.getUTCSeconds(),C[j+4>>2>>>0]=N.getUTCMinutes(),C[j+8>>2>>>0]=N.getUTCHours(),C[j+12>>2>>>0]=N.getUTCDate(),C[j+16>>2>>>0]=N.getUTCMonth(),C[j+20>>2>>>0]=N.getUTCFullYear()-1900,C[j+24>>2>>>0]=N.getUTCDay(),C[j+28>>2>>>0]=(N.getTime()-Date.UTC(N.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},Ea:function(N,j){N=new Date(1e3*(z[N>>>2]+4294967296*C[N+4>>>2])),C[j>>2>>>0]=N.getSeconds(),C[j+4>>2>>>0]=N.getMinutes(),C[j+8>>2>>>0]=N.getHours(),C[j+12>>2>>>0]=N.getDate(),C[j+16>>2>>>0]=N.getMonth(),C[j+20>>2>>>0]=N.getFullYear()-1900,C[j+24>>2>>>0]=N.getDay();var Z=new Date(N.getFullYear(),0,1);C[j+28>>2>>>0]=(N.getTime()-Z.getTime())/864e5|0,C[j+36>>2>>>0]=-60*N.getTimezoneOffset();var P=new Date(N.getFullYear(),6,1).getTimezoneOffset();Z=Z.getTimezoneOffset(),C[j+32>>2>>>0]=0|(P!=Z&&N.getTimezoneOffset()==Math.min(Z,P))},Fa:function(N){var j=new Date(C[N+20>>2>>>0]+1900,C[N+16>>2>>>0],C[N+12>>2>>>0],C[N+8>>2>>>0],C[N+4>>2>>>0],C[N>>2>>>0],0),Z=C[N+32>>2>>>0],P=j.getTimezoneOffset(),F=new Date(j.getFullYear(),0,1),G=new Date(j.getFullYear(),6,1).getTimezoneOffset(),W=F.getTimezoneOffset(),Y=Math.min(W,G);return 0>Z?C[N+32>>2>>>0]=+(G!=W&&Y==P):0<Z!=(Y==P)&&(G=Math.max(W,G),j.setTime(j.getTime()+6e4*((0<Z?Y:G)-P))),C[N+24>>2>>>0]=j.getDay(),C[N+28>>2>>>0]=(j.getTime()-F.getTime())/864e5|0,C[N>>2>>>0]=j.getSeconds(),C[N+4>>2>>>0]=j.getMinutes(),C[N+8>>2>>>0]=j.getHours(),C[N+12>>2>>>0]=j.getDate(),C[N+16>>2>>>0]=j.getMonth(),j.getTime()/1e3|0},sa:function(){return-52},ta:function(){},Ga:function N(j,Z,P){N.Vb||(N.Vb=!0,function(F,G,W){function Y(Ve){return(Ve=Ve.toTimeString().match(/\(([A-Za-z ]+)\)$/))?Ve[1]:"GMT"}var oe=new Date().getFullYear(),xe=new Date(oe,0,1),Ie=new Date(oe,6,1);oe=xe.getTimezoneOffset();var Ue=Ie.getTimezoneOffset();C[F>>2>>>0]=60*Math.max(oe,Ue),C[G>>2>>>0]=+(oe!=Ue),F=Y(xe),G=Y(Ie),F=Oe(F),G=Oe(G),Ue<oe?(z[W>>2>>>0]=F,z[W+4>>2>>>0]=G):(z[W>>2>>>0]=G,z[W+4>>2>>>0]=F)}(j,Z,P))},B:function(){Qe("")},ma:function(){return 4294901760},I:v?()=>{var N=process.hrtime();return 1e3*N[0]+N[1]/1e6}:()=>performance.now(),xa:function(N,j,Z){k.copyWithin(N>>>0,j>>>0,j+Z>>>0)},G:function(N){var j=k.length;if(4294901760<(N>>>=0))return!1;for(var Z=1;4>=Z;Z*=2){var P=j*(1+.2/Z);P=Math.min(P,N+100663296);var F=Math;P=Math.max(N,P),F=F.min.call(F,4294901760,P+(65536-P%65536)%65536);e:{try{E.grow(F-R.byteLength+65535>>>16),he();var G=1;break e}catch{}G=void 0}if(G)return!0}return!1},va:function(N,j){var Z=0;return He().forEach(function(P,F){var G=j+Z;for(F=z[N+4*F>>2>>>0]=G,G=0;G<P.length;++G)I[F++>>0>>>0]=P.charCodeAt(G);I[F>>0>>>0]=0,Z+=P.length+1}),0},wa:function(N,j){var Z=He();z[N>>2>>>0]=Z.length;var P=0;return Z.forEach(function(F){P+=F.length+1}),z[j>>2>>>0]=P,0},ba:function(N){T||0<Fe||(we(),qe(Me),X(0),me[1].length&&rt(1,10),me[2].length&&rt(2,10)),T||0<Fe||(l.onExit&&l.onExit(N),O=!0),_(N,new nt(N))},E:function(){return 52},Q:function(){return 52},ca:function(){return 70},P:function(N,j,Z,P){for(var F=0,G=0;G<Z;G++){var W=z[j>>2>>>0],Y=z[j+4>>2>>>0];j+=8;for(var oe=0;oe<Y;oe++)rt(N,k[W+oe>>>0]);F+=Y}return z[P>>2>>>0]=F,0},c:function(){return Ge},ja:function N(j,Z){N.Mb||(N.Mb=function(){if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var F=new Uint8Array(1);return()=>(crypto.getRandomValues(F),F[0])}if(v)try{var G=t(Object(function(){var W=new Error("Cannot find module 'crypto'");throw W.code="MODULE_NOT_FOUND",W}()));return()=>G.randomBytes(1)[0]}catch{}return()=>Qe("randomDevice")}());for(var P=0;P<Z;P++)I[j+P>>0>>>0]=N.Mb();return 0},ea:function(N,j,Z){var P=ve();try{return Te(N)(j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},fa:function(N,j,Z){var P=ve();try{return Te(N)(j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},J:function(N){var j=ve();try{return Te(N)()}catch(Z){if(ye(j),Z!==Z+0)throw Z;ue(1,0)}},e:function(N,j){var Z=ve();try{return Te(N)(j)}catch(P){if(ye(Z),P!==P+0)throw P;ue(1,0)}},N:function(N,j,Z){var P=ve();try{return Te(N)(j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},O:function(N,j,Z){var P=ve();try{return Te(N)(j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},j:function(N,j,Z){var P=ve();try{return Te(N)(j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},o:function(N,j,Z,P){var F=ve();try{return Te(N)(j,Z,P)}catch(G){if(ye(F),G!==G+0)throw G;ue(1,0)}},p:function(N,j,Z,P,F){var G=ve();try{return Te(N)(j,Z,P,F)}catch(W){if(ye(G),W!==W+0)throw W;ue(1,0)}},M:function(N,j,Z,P,F,G){var W=ve();try{return Te(N)(j,Z,P,F,G)}catch(Y){if(ye(W),Y!==Y+0)throw Y;ue(1,0)}},r:function(N,j,Z,P,F,G){var W=ve();try{return Te(N)(j,Z,P,F,G)}catch(Y){if(ye(W),Y!==Y+0)throw Y;ue(1,0)}},v:function(N,j,Z,P,F,G,W){var Y=ve();try{return Te(N)(j,Z,P,F,G,W)}catch(oe){if(ye(Y),oe!==oe+0)throw oe;ue(1,0)}},K:function(N,j,Z,P,F,G,W,Y){var oe=ve();try{return Te(N)(j,Z,P,F,G,W,Y)}catch(xe){if(ye(oe),xe!==xe+0)throw xe;ue(1,0)}},D:function(N,j,Z,P,F,G,W,Y,oe,xe,Ie,Ue){var Ve=ve();try{return Te(N)(j,Z,P,F,G,W,Y,oe,xe,Ie,Ue)}catch(Q){if(ye(Ve),Q!==Q+0)throw Q;ue(1,0)}},X:function(N,j,Z,P,F,G,W,Y){var oe=ve();try{return Mt(N,j,Z,P,F,G,W,Y)}catch(xe){if(ye(oe),xe!==xe+0)throw xe;ue(1,0)}},V:function(N,j,Z,P,F,G,W){var Y=ve();try{return it(N,j,Z,P,F,G,W)}catch(oe){if(ye(Y),oe!==oe+0)throw oe;ue(1,0)}},U:function(N,j,Z,P,F){var G=ve();try{return Rt(N,j,Z,P,F)}catch(W){if(ye(G),W!==W+0)throw W;ue(1,0)}},Z:function(N,j,Z,P){var F=ve();try{return Et(N,j,Z,P)}catch(G){if(ye(F),G!==G+0)throw G;ue(1,0)}},W:function(N){var j=ve();try{return dt(N)}catch(Z){if(ye(j),Z!==Z+0)throw Z;ue(1,0)}},Y:function(N,j){var Z=ve();try{return It(N,j)}catch(P){if(ye(Z),P!==P+0)throw P;ue(1,0)}},T:function(N,j,Z){var P=ve();try{return pt(N,j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},f:function(N){var j=ve();try{Te(N)()}catch(Z){if(ye(j),Z!==Z+0)throw Z;ue(1,0)}},q:function(N,j){var Z=ve();try{Te(N)(j)}catch(P){if(ye(Z),P!==P+0)throw P;ue(1,0)}},h:function(N,j,Z){var P=ve();try{Te(N)(j,Z)}catch(F){if(ye(P),F!==F+0)throw F;ue(1,0)}},da:function(N,j,Z,P){var F=ve();try{Te(N)(j,Z,P)}catch(G){if(ye(F),G!==G+0)throw G;ue(1,0)}},l:function(N,j,Z,P){var F=ve();try{Te(N)(j,Z,P)}catch(G){if(ye(F),G!==G+0)throw G;ue(1,0)}},t:function(N,j,Z,P,F){var G=ve();try{Te(N)(j,Z,P,F)}catch(W){if(ye(G),W!==W+0)throw W;ue(1,0)}},u:function(N,j,Z,P,F,G){var W=ve();try{Te(N)(j,Z,P,F,G)}catch(Y){if(ye(W),Y!==Y+0)throw Y;ue(1,0)}},x:function(N,j,Z,P,F,G,W){var Y=ve();try{Te(N)(j,Z,P,F,G,W)}catch(oe){if(ye(Y),oe!==oe+0)throw oe;ue(1,0)}},z:function(N,j,Z,P,F,G,W,Y){var oe=ve();try{Te(N)(j,Z,P,F,G,W,Y)}catch(xe){if(ye(oe),xe!==xe+0)throw xe;ue(1,0)}},ga:function(N,j,Z,P,F,G,W,Y,oe){var xe=ve();try{Te(N)(j,Z,P,F,G,W,Y,oe)}catch(Ie){if(ye(xe),Ie!==Ie+0)throw Ie;ue(1,0)}},A:function(N,j,Z,P,F,G,W,Y,oe,xe,Ie){var Ue=ve();try{Te(N)(j,Z,P,F,G,W,Y,oe,xe,Ie)}catch(Ve){if(ye(Ue),Ve!==Ve+0)throw Ve;ue(1,0)}},C:function(N,j,Z,P,F,G,W,Y,oe,xe,Ie,Ue,Ve,Q,Re,Ye){var mt=ve();try{Te(N)(j,Z,P,F,G,W,Y,oe,xe,Ie,Ue,Ve,Q,Re,Ye)}catch(ut){if(ye(mt),ut!==ut+0)throw ut;ue(1,0)}},aa:function(N,j,Z,P,F,G,W,Y){var oe=ve();try{vt(N,j,Z,P,F,G,W,Y)}catch(xe){if(ye(oe),xe!==xe+0)throw xe;ue(1,0)}},_:function(N,j,Z,P,F,G,W,Y,oe,xe,Ie,Ue){var Ve=ve();try{Nt(N,j,Z,P,F,G,W,Y,oe,xe,Ie,Ue)}catch(Q){if(ye(Ve),Q!==Q+0)throw Q;ue(1,0)}},$:function(N,j,Z,P,F,G){var W=ve();try{Ot(N,j,Z,P,F,G)}catch(Y){if(ye(W),Y!==Y+0)throw Y;ue(1,0)}},n:function(N){return N},F:function(N){Ge=N},ha:H,y:function(N,j,Z,P){return H(N,j,Z,P)}};(function(){function N(F){l.asm=F.exports,E=l.asm.Ka,he(),ie=l.asm.ib,de.unshift(l.asm.La),je--,l.monitorRunDependencies&&l.monitorRunDependencies(je),je==0&&ne&&(F=ne,ne=null,F())}function j(F){N(F.instance)}function Z(F){return function(){if(!w&&(b||y)){if(typeof fetch=="function"&&!Ce.startsWith("file://"))return fetch(Ce,{credentials:"same-origin"}).then(function(G){if(!G.ok)throw"failed to load wasm binary file at '"+Ce+"'";return G.arrayBuffer()}).catch(function(){return De()});if(d)return new Promise(function(G,W){d(Ce,function(Y){G(new Uint8Array(Y))},W)})}return Promise.resolve().then(function(){return De()})}().then(function(G){return WebAssembly.instantiate(G,P)}).then(function(G){return G}).then(F,function(G){M("failed to asynchronously prepare wasm: "+G),Qe(G)})}var P={a:Se};if(je++,l.monitorRunDependencies&&l.monitorRunDependencies(je),l.instantiateWasm)try{return l.instantiateWasm(P,N)}catch(F){return M("Module.instantiateWasm callback failed with error: "+F),!1}(w||typeof WebAssembly.instantiateStreaming!="function"||Pe()||Ce.startsWith("file://")||v||typeof fetch!="function"?Z(j):fetch(Ce,{credentials:"same-origin"}).then(function(F){return WebAssembly.instantiateStreaming(F,P).then(j,function(G){return M("wasm streaming compile failed: "+G),M("falling back to ArrayBuffer instantiation"),Z(j)})})).catch(p)})(),l.___wasm_call_ctors=function(){return(l.___wasm_call_ctors=l.asm.La).apply(null,arguments)},l._OrtInit=function(){return(l._OrtInit=l.asm.Ma).apply(null,arguments)},l._OrtCreateSessionOptions=function(){return(l._OrtCreateSessionOptions=l.asm.Na).apply(null,arguments)},l._OrtAppendExecutionProvider=function(){return(l._OrtAppendExecutionProvider=l.asm.Oa).apply(null,arguments)},l._OrtAddSessionConfigEntry=function(){return(l._OrtAddSessionConfigEntry=l.asm.Pa).apply(null,arguments)},l._OrtReleaseSessionOptions=function(){return(l._OrtReleaseSessionOptions=l.asm.Qa).apply(null,arguments)},l._OrtCreateSession=function(){return(l._OrtCreateSession=l.asm.Ra).apply(null,arguments)},l._OrtReleaseSession=function(){return(l._OrtReleaseSession=l.asm.Sa).apply(null,arguments)},l._OrtGetInputCount=function(){return(l._OrtGetInputCount=l.asm.Ta).apply(null,arguments)},l._OrtGetOutputCount=function(){return(l._OrtGetOutputCount=l.asm.Ua).apply(null,arguments)},l._OrtGetInputName=function(){return(l._OrtGetInputName=l.asm.Va).apply(null,arguments)},l._OrtGetOutputName=function(){return(l._OrtGetOutputName=l.asm.Wa).apply(null,arguments)},l._OrtFree=function(){return(l._OrtFree=l.asm.Xa).apply(null,arguments)},l._OrtCreateTensor=function(){return(l._OrtCreateTensor=l.asm.Ya).apply(null,arguments)},l._OrtGetTensorData=function(){return(l._OrtGetTensorData=l.asm.Za).apply(null,arguments)},l._OrtReleaseTensor=function(){return(l._OrtReleaseTensor=l.asm._a).apply(null,arguments)},l._OrtCreateRunOptions=function(){return(l._OrtCreateRunOptions=l.asm.$a).apply(null,arguments)},l._OrtAddRunConfigEntry=function(){return(l._OrtAddRunConfigEntry=l.asm.ab).apply(null,arguments)},l._OrtReleaseRunOptions=function(){return(l._OrtReleaseRunOptions=l.asm.bb).apply(null,arguments)},l._OrtRun=function(){return(l._OrtRun=l.asm.cb).apply(null,arguments)},l._OrtEndProfiling=function(){return(l._OrtEndProfiling=l.asm.db).apply(null,arguments)};var ke,be=l._malloc=function(){return(be=l._malloc=l.asm.eb).apply(null,arguments)},ge=l._free=function(){return(ge=l._free=l.asm.fb).apply(null,arguments)},X=l._fflush=function(){return(X=l._fflush=l.asm.gb).apply(null,arguments)},we=l.___funcs_on_exit=function(){return(we=l.___funcs_on_exit=l.asm.hb).apply(null,arguments)},ue=l._setThrew=function(){return(ue=l._setThrew=l.asm.jb).apply(null,arguments)},ve=l.stackSave=function(){return(ve=l.stackSave=l.asm.kb).apply(null,arguments)},ye=l.stackRestore=function(){return(ye=l.stackRestore=l.asm.lb).apply(null,arguments)},Ze=l.stackAlloc=function(){return(Ze=l.stackAlloc=l.asm.mb).apply(null,arguments)},Ke=l.___cxa_can_catch=function(){return(Ke=l.___cxa_can_catch=l.asm.nb).apply(null,arguments)},ct=l.___cxa_is_pointer_type=function(){return(ct=l.___cxa_is_pointer_type=l.asm.ob).apply(null,arguments)},dt=l.dynCall_j=function(){return(dt=l.dynCall_j=l.asm.pb).apply(null,arguments)},it=l.dynCall_iiiiij=function(){return(it=l.dynCall_iiiiij=l.asm.qb).apply(null,arguments)},pt=l.dynCall_jii=function(){return(pt=l.dynCall_jii=l.asm.rb).apply(null,arguments)},vt=l.dynCall_viiiiij=function(){return(vt=l.dynCall_viiiiij=l.asm.sb).apply(null,arguments)},Ot=l.dynCall_vjji=function(){return(Ot=l.dynCall_vjji=l.asm.tb).apply(null,arguments)},Nt=l.dynCall_viiijjjii=function(){return(Nt=l.dynCall_viiijjjii=l.asm.ub).apply(null,arguments)},Et=l.dynCall_iij=function(){return(Et=l.dynCall_iij=l.asm.vb).apply(null,arguments)},It=l.dynCall_ji=function(){return(It=l.dynCall_ji=l.asm.wb).apply(null,arguments)},Mt=l.dynCall_iiiiiij=function(){return(Mt=l.dynCall_iiiiiij=l.asm.xb).apply(null,arguments)},Rt=l.dynCall_iiij=function(){return(Rt=l.dynCall_iiij=l.asm.yb).apply(null,arguments)};function Lt(){function N(){if(!ke&&(ke=!0,l.calledRun=!0,!O)){if(qe(de),h(l),l.onRuntimeInitialized&&l.onRuntimeInitialized(),l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;){var j=l.postRun.shift();Ee.unshift(j)}qe(Ee)}}if(!(0<je)){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)Be();qe(le),0<je||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),N()},1)):N())}}if(l.UTF8ToString=$,l.stringToUTF8=function(N,j,Z){return J(N,k,j,Z)},l.lengthBytesUTF8=ee,l.stackSave=ve,l.stackRestore=ye,l.stackAlloc=Ze,ne=function N(){ke||Lt(),ke||(ne=N)},l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);0<l.preInit.length;)l.preInit.pop()();return Lt(),c.ready});s.exports=o},4537:s=>{s.exports=function(e,t){for(var r=new Array(arguments.length-1),o=0,c=2,l=!0;c<arguments.length;)r[o++]=arguments[c++];return new Promise(function(h,p){r[o]=function(f){if(l)if(l=!1,f)p(f);else{for(var d=new Array(arguments.length-1),i=0;i<d.length;)d[i++]=arguments[i];h.apply(null,d)}};try{e.apply(t||null,r)}catch(f){l&&(l=!1,p(f))}})}},7419:(s,e)=>{var t=e;t.length=function(h){var p=h.length;if(!p)return 0;for(var f=0;--p%4>1&&h.charAt(p)==="=";)++f;return Math.ceil(3*h.length)/4-f};for(var r=new Array(64),o=new Array(123),c=0;c<64;)o[r[c]=c<26?c+65:c<52?c+71:c<62?c-4:c-59|43]=c++;t.encode=function(h,p,f){for(var d,i=null,n=[],a=0,u=0;p<f;){var m=h[p++];switch(u){case 0:n[a++]=r[m>>2],d=(3&m)<<4,u=1;break;case 1:n[a++]=r[d|m>>4],d=(15&m)<<2,u=2;break;case 2:n[a++]=r[d|m>>6],n[a++]=r[63&m],u=0}a>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,n)),a=0)}return u&&(n[a++]=r[d],n[a++]=61,u===1&&(n[a++]=61)),i?(a&&i.push(String.fromCharCode.apply(String,n.slice(0,a))),i.join("")):String.fromCharCode.apply(String,n.slice(0,a))};var l="invalid encoding";t.decode=function(h,p,f){for(var d,i=f,n=0,a=0;a<h.length;){var u=h.charCodeAt(a++);if(u===61&&n>1)break;if((u=o[u])===void 0)throw Error(l);switch(n){case 0:d=u,n=1;break;case 1:p[f++]=d<<2|(48&u)>>4,d=u,n=2;break;case 2:p[f++]=(15&d)<<4|(60&u)>>2,d=u,n=3;break;case 3:p[f++]=(3&d)<<6|u,n=0}}if(n===1)throw Error(l);return f-i},t.test=function(h){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(h)}},9211:s=>{function e(){this._listeners={}}s.exports=e,e.prototype.on=function(t,r,o){return(this._listeners[t]||(this._listeners[t]=[])).push({fn:r,ctx:o||this}),this},e.prototype.off=function(t,r){if(t===void 0)this._listeners={};else if(r===void 0)this._listeners[t]=[];else for(var o=this._listeners[t],c=0;c<o.length;)o[c].fn===r?o.splice(c,1):++c;return this},e.prototype.emit=function(t){var r=this._listeners[t];if(r){for(var o=[],c=1;c<arguments.length;)o.push(arguments[c++]);for(c=0;c<r.length;)r[c].fn.apply(r[c++].ctx,o)}return this}},945:s=>{function e(l){return typeof Float32Array<"u"?function(){var h=new Float32Array([-0]),p=new Uint8Array(h.buffer),f=p[3]===128;function d(u,m,g){h[0]=u,m[g]=p[0],m[g+1]=p[1],m[g+2]=p[2],m[g+3]=p[3]}function i(u,m,g){h[0]=u,m[g]=p[3],m[g+1]=p[2],m[g+2]=p[1],m[g+3]=p[0]}function n(u,m){return p[0]=u[m],p[1]=u[m+1],p[2]=u[m+2],p[3]=u[m+3],h[0]}function a(u,m){return p[3]=u[m],p[2]=u[m+1],p[1]=u[m+2],p[0]=u[m+3],h[0]}l.writeFloatLE=f?d:i,l.writeFloatBE=f?i:d,l.readFloatLE=f?n:a,l.readFloatBE=f?a:n}():function(){function h(f,d,i,n){var a=d<0?1:0;if(a&&(d=-d),d===0)f(1/d>0?0:2147483648,i,n);else if(isNaN(d))f(2143289344,i,n);else if(d>34028234663852886e22)f((a<<31|2139095040)>>>0,i,n);else if(d<11754943508222875e-54)f((a<<31|Math.round(d/1401298464324817e-60))>>>0,i,n);else{var u=Math.floor(Math.log(d)/Math.LN2);f((a<<31|u+127<<23|8388607&Math.round(d*Math.pow(2,-u)*8388608))>>>0,i,n)}}function p(f,d,i){var n=f(d,i),a=2*(n>>31)+1,u=n>>>23&255,m=8388607&n;return u===255?m?NaN:a*(1/0):u===0?1401298464324817e-60*a*m:a*Math.pow(2,u-150)*(m+8388608)}l.writeFloatLE=h.bind(null,t),l.writeFloatBE=h.bind(null,r),l.readFloatLE=p.bind(null,o),l.readFloatBE=p.bind(null,c)}(),typeof Float64Array<"u"?function(){var h=new Float64Array([-0]),p=new Uint8Array(h.buffer),f=p[7]===128;function d(u,m,g){h[0]=u,m[g]=p[0],m[g+1]=p[1],m[g+2]=p[2],m[g+3]=p[3],m[g+4]=p[4],m[g+5]=p[5],m[g+6]=p[6],m[g+7]=p[7]}function i(u,m,g){h[0]=u,m[g]=p[7],m[g+1]=p[6],m[g+2]=p[5],m[g+3]=p[4],m[g+4]=p[3],m[g+5]=p[2],m[g+6]=p[1],m[g+7]=p[0]}function n(u,m){return p[0]=u[m],p[1]=u[m+1],p[2]=u[m+2],p[3]=u[m+3],p[4]=u[m+4],p[5]=u[m+5],p[6]=u[m+6],p[7]=u[m+7],h[0]}function a(u,m){return p[7]=u[m],p[6]=u[m+1],p[5]=u[m+2],p[4]=u[m+3],p[3]=u[m+4],p[2]=u[m+5],p[1]=u[m+6],p[0]=u[m+7],h[0]}l.writeDoubleLE=f?d:i,l.writeDoubleBE=f?i:d,l.readDoubleLE=f?n:a,l.readDoubleBE=f?a:n}():function(){function h(f,d,i,n,a,u){var m=n<0?1:0;if(m&&(n=-n),n===0)f(0,a,u+d),f(1/n>0?0:2147483648,a,u+i);else if(isNaN(n))f(0,a,u+d),f(2146959360,a,u+i);else if(n>17976931348623157e292)f(0,a,u+d),f((m<<31|2146435072)>>>0,a,u+i);else{var g;if(n<22250738585072014e-324)f((g=n/5e-324)>>>0,a,u+d),f((m<<31|g/4294967296)>>>0,a,u+i);else{var _=Math.floor(Math.log(n)/Math.LN2);_===1024&&(_=1023),f(4503599627370496*(g=n*Math.pow(2,-_))>>>0,a,u+d),f((m<<31|_+1023<<20|1048576*g&1048575)>>>0,a,u+i)}}}function p(f,d,i,n,a){var u=f(n,a+d),m=f(n,a+i),g=2*(m>>31)+1,_=m>>>20&2047,b=4294967296*(1048575&m)+u;return _===2047?b?NaN:g*(1/0):_===0?5e-324*g*b:g*Math.pow(2,_-1075)*(b+4503599627370496)}l.writeDoubleLE=h.bind(null,t,0,4),l.writeDoubleBE=h.bind(null,r,4,0),l.readDoubleLE=p.bind(null,o,0,4),l.readDoubleBE=p.bind(null,c,4,0)}(),l}function t(l,h,p){h[p]=255&l,h[p+1]=l>>>8&255,h[p+2]=l>>>16&255,h[p+3]=l>>>24}function r(l,h,p){h[p]=l>>>24,h[p+1]=l>>>16&255,h[p+2]=l>>>8&255,h[p+3]=255&l}function o(l,h){return(l[h]|l[h+1]<<8|l[h+2]<<16|l[h+3]<<24)>>>0}function c(l,h){return(l[h]<<24|l[h+1]<<16|l[h+2]<<8|l[h+3])>>>0}s.exports=e(e)},7199:module=>{function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(s){}return null}module.exports=inquire},6662:s=>{s.exports=function(e,t,r){var o=r||8192,c=o>>>1,l=null,h=o;return function(p){if(p<1||p>c)return e(p);h+p>o&&(l=e(o),h=0);var f=t.call(l,h,h+=p);return 7&h&&(h=1+(7|h)),f}}},4997:(s,e)=>{var t=e;t.length=function(r){for(var o=0,c=0,l=0;l<r.length;++l)(c=r.charCodeAt(l))<128?o+=1:c<2048?o+=2:(64512&c)==55296&&(64512&r.charCodeAt(l+1))==56320?(++l,o+=4):o+=3;return o},t.read=function(r,o,c){if(c-o<1)return"";for(var l,h=null,p=[],f=0;o<c;)(l=r[o++])<128?p[f++]=l:l>191&&l<224?p[f++]=(31&l)<<6|63&r[o++]:l>239&&l<365?(l=((7&l)<<18|(63&r[o++])<<12|(63&r[o++])<<6|63&r[o++])-65536,p[f++]=55296+(l>>10),p[f++]=56320+(1023&l)):p[f++]=(15&l)<<12|(63&r[o++])<<6|63&r[o++],f>8191&&((h||(h=[])).push(String.fromCharCode.apply(String,p)),f=0);return h?(f&&h.push(String.fromCharCode.apply(String,p.slice(0,f))),h.join("")):String.fromCharCode.apply(String,p.slice(0,f))},t.write=function(r,o,c){for(var l,h,p=c,f=0;f<r.length;++f)(l=r.charCodeAt(f))<128?o[c++]=l:l<2048?(o[c++]=l>>6|192,o[c++]=63&l|128):(64512&l)==55296&&(64512&(h=r.charCodeAt(f+1)))==56320?(l=65536+((1023&l)<<10)+(1023&h),++f,o[c++]=l>>18|240,o[c++]=l>>12&63|128,o[c++]=l>>6&63|128,o[c++]=63&l|128):(o[c++]=l>>12|224,o[c++]=l>>6&63|128,o[c++]=63&l|128);return c-p}},3442:(s,e)=>{e.__esModule=!0;var t=function(){function r(o){if(!o)throw new TypeError("Invalid argument; `value` has no value.");this.value=r.EMPTY,o&&r.isGuid(o)&&(this.value=o)}return r.isGuid=function(o){var c=o.toString();return o&&(o instanceof r||r.validator.test(c))},r.create=function(){return new r([r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-"))},r.createEmpty=function(){return new r("emptyguid")},r.parse=function(o){return new r(o)},r.raw=function(){return[r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-")},r.gen=function(o){for(var c="",l=0;l<o;l++)c+=(65536*(1+Math.random())|0).toString(16).substring(1);return c},r.prototype.equals=function(o){return r.isGuid(o)&&this.value===o.toString()},r.prototype.isEmpty=function(){return this.value===r.EMPTY},r.prototype.toString=function(){return this.value},r.prototype.toJSON=function(){return{value:this.value}},r.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),r.EMPTY="00000000-0000-0000-0000-000000000000",r}();e.Guid=t},3720:s=>{s.exports=t;var e=null;try{e=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(T,E,R){this.low=0|T,this.high=0|E,this.unsigned=!!R}function r(T){return(T&&T.__isLong__)===!0}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0}),t.isLong=r;var o={},c={};function l(T,E){var R,I,k;return E?(k=0<=(T>>>=0)&&T<256)&&(I=c[T])?I:(R=p(T,(0|T)<0?-1:0,!0),k&&(c[T]=R),R):(k=-128<=(T|=0)&&T<128)&&(I=o[T])?I:(R=p(T,T<0?-1:0,!1),k&&(o[T]=R),R)}function h(T,E){if(isNaN(T))return E?_:g;if(E){if(T<0)return _;if(T>=a)return w}else{if(T<=-u)return S;if(T+1>=u)return x}return T<0?h(-T,E).neg():p(T%n|0,T/n|0,E)}function p(T,E,R){return new t(T,E,R)}t.fromInt=l,t.fromNumber=h,t.fromBits=p;var f=Math.pow;function d(T,E,R){if(T.length===0)throw Error("empty string");if(T==="NaN"||T==="Infinity"||T==="+Infinity"||T==="-Infinity")return g;if(typeof E=="number"?(R=E,E=!1):E=!!E,(R=R||10)<2||36<R)throw RangeError("radix");var I;if((I=T.indexOf("-"))>0)throw Error("interior hyphen");if(I===0)return d(T.substring(1),E,R).neg();for(var k=h(f(R,8)),C=g,z=0;z<T.length;z+=8){var O=Math.min(8,T.length-z),U=parseInt(T.substring(z,z+O),R);if(O<8){var K=h(f(R,O));C=C.mul(K).add(h(U))}else C=(C=C.mul(k)).add(h(U))}return C.unsigned=E,C}function i(T,E){return typeof T=="number"?h(T,E):typeof T=="string"?d(T,E):p(T.low,T.high,typeof E=="boolean"?E:T.unsigned)}t.fromString=d,t.fromValue=i;var n=4294967296,a=n*n,u=a/2,m=l(1<<24),g=l(0);t.ZERO=g;var _=l(0,!0);t.UZERO=_;var b=l(1);t.ONE=b;var y=l(1,!0);t.UONE=y;var v=l(-1);t.NEG_ONE=v;var x=p(-1,2147483647,!1);t.MAX_VALUE=x;var w=p(-1,-1,!0);t.MAX_UNSIGNED_VALUE=w;var S=p(0,-2147483648,!1);t.MIN_VALUE=S;var M=t.prototype;M.toInt=function(){return this.unsigned?this.low>>>0:this.low},M.toNumber=function(){return this.unsigned?(this.high>>>0)*n+(this.low>>>0):this.high*n+(this.low>>>0)},M.toString=function(T){if((T=T||10)<2||36<T)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(S)){var E=h(T),R=this.div(E),I=R.mul(E).sub(this);return R.toString(T)+I.toInt().toString(T)}return"-"+this.neg().toString(T)}for(var k=h(f(T,6),this.unsigned),C=this,z="";;){var O=C.div(k),U=(C.sub(O.mul(k)).toInt()>>>0).toString(T);if((C=O).isZero())return U+z;for(;U.length<6;)U="0"+U;z=""+U+z}},M.getHighBits=function(){return this.high},M.getHighBitsUnsigned=function(){return this.high>>>0},M.getLowBits=function(){return this.low},M.getLowBitsUnsigned=function(){return this.low>>>0},M.getNumBitsAbs=function(){if(this.isNegative())return this.eq(S)?64:this.neg().getNumBitsAbs();for(var T=this.high!=0?this.high:this.low,E=31;E>0&&!(T&1<<E);E--);return this.high!=0?E+33:E+1},M.isZero=function(){return this.high===0&&this.low===0},M.eqz=M.isZero,M.isNegative=function(){return!this.unsigned&&this.high<0},M.isPositive=function(){return this.unsigned||this.high>=0},M.isOdd=function(){return(1&this.low)==1},M.isEven=function(){return(1&this.low)==0},M.equals=function(T){return r(T)||(T=i(T)),(this.unsigned===T.unsigned||this.high>>>31!=1||T.high>>>31!=1)&&this.high===T.high&&this.low===T.low},M.eq=M.equals,M.notEquals=function(T){return!this.eq(T)},M.neq=M.notEquals,M.ne=M.notEquals,M.lessThan=function(T){return this.comp(T)<0},M.lt=M.lessThan,M.lessThanOrEqual=function(T){return this.comp(T)<=0},M.lte=M.lessThanOrEqual,M.le=M.lessThanOrEqual,M.greaterThan=function(T){return this.comp(T)>0},M.gt=M.greaterThan,M.greaterThanOrEqual=function(T){return this.comp(T)>=0},M.gte=M.greaterThanOrEqual,M.ge=M.greaterThanOrEqual,M.compare=function(T){if(r(T)||(T=i(T)),this.eq(T))return 0;var E=this.isNegative(),R=T.isNegative();return E&&!R?-1:!E&&R?1:this.unsigned?T.high>>>0>this.high>>>0||T.high===this.high&&T.low>>>0>this.low>>>0?-1:1:this.sub(T).isNegative()?-1:1},M.comp=M.compare,M.negate=function(){return!this.unsigned&&this.eq(S)?S:this.not().add(b)},M.neg=M.negate,M.add=function(T){r(T)||(T=i(T));var E=this.high>>>16,R=65535&this.high,I=this.low>>>16,k=65535&this.low,C=T.high>>>16,z=65535&T.high,O=T.low>>>16,U=0,K=0,$=0,J=0;return $+=(J+=k+(65535&T.low))>>>16,K+=($+=I+O)>>>16,U+=(K+=R+z)>>>16,U+=E+C,p(($&=65535)<<16|(J&=65535),(U&=65535)<<16|(K&=65535),this.unsigned)},M.subtract=function(T){return r(T)||(T=i(T)),this.add(T.neg())},M.sub=M.subtract,M.multiply=function(T){if(this.isZero())return g;if(r(T)||(T=i(T)),e)return p(e.mul(this.low,this.high,T.low,T.high),e.get_high(),this.unsigned);if(T.isZero())return g;if(this.eq(S))return T.isOdd()?S:g;if(T.eq(S))return this.isOdd()?S:g;if(this.isNegative())return T.isNegative()?this.neg().mul(T.neg()):this.neg().mul(T).neg();if(T.isNegative())return this.mul(T.neg()).neg();if(this.lt(m)&&T.lt(m))return h(this.toNumber()*T.toNumber(),this.unsigned);var E=this.high>>>16,R=65535&this.high,I=this.low>>>16,k=65535&this.low,C=T.high>>>16,z=65535&T.high,O=T.low>>>16,U=65535&T.low,K=0,$=0,J=0,ee=0;return J+=(ee+=k*U)>>>16,$+=(J+=I*U)>>>16,J&=65535,$+=(J+=k*O)>>>16,K+=($+=R*U)>>>16,$&=65535,K+=($+=I*O)>>>16,$&=65535,K+=($+=k*z)>>>16,K+=E*U+R*O+I*z+k*C,p((J&=65535)<<16|(ee&=65535),(K&=65535)<<16|($&=65535),this.unsigned)},M.mul=M.multiply,M.divide=function(T){if(r(T)||(T=i(T)),T.isZero())throw Error("division by zero");var E,R,I;if(e)return this.unsigned||this.high!==-2147483648||T.low!==-1||T.high!==-1?p((this.unsigned?e.div_u:e.div_s)(this.low,this.high,T.low,T.high),e.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?_:g;if(this.unsigned){if(T.unsigned||(T=T.toUnsigned()),T.gt(this))return _;if(T.gt(this.shru(1)))return y;I=_}else{if(this.eq(S))return T.eq(b)||T.eq(v)?S:T.eq(S)?b:(E=this.shr(1).div(T).shl(1)).eq(g)?T.isNegative()?b:v:(R=this.sub(T.mul(E)),I=E.add(R.div(T)));if(T.eq(S))return this.unsigned?_:g;if(this.isNegative())return T.isNegative()?this.neg().div(T.neg()):this.neg().div(T).neg();if(T.isNegative())return this.div(T.neg()).neg();I=g}for(R=this;R.gte(T);){E=Math.max(1,Math.floor(R.toNumber()/T.toNumber()));for(var k=Math.ceil(Math.log(E)/Math.LN2),C=k<=48?1:f(2,k-48),z=h(E),O=z.mul(T);O.isNegative()||O.gt(R);)O=(z=h(E-=C,this.unsigned)).mul(T);z.isZero()&&(z=b),I=I.add(z),R=R.sub(O)}return I},M.div=M.divide,M.modulo=function(T){return r(T)||(T=i(T)),e?p((this.unsigned?e.rem_u:e.rem_s)(this.low,this.high,T.low,T.high),e.get_high(),this.unsigned):this.sub(this.div(T).mul(T))},M.mod=M.modulo,M.rem=M.modulo,M.not=function(){return p(~this.low,~this.high,this.unsigned)},M.and=function(T){return r(T)||(T=i(T)),p(this.low&T.low,this.high&T.high,this.unsigned)},M.or=function(T){return r(T)||(T=i(T)),p(this.low|T.low,this.high|T.high,this.unsigned)},M.xor=function(T){return r(T)||(T=i(T)),p(this.low^T.low,this.high^T.high,this.unsigned)},M.shiftLeft=function(T){return r(T)&&(T=T.toInt()),(T&=63)==0?this:T<32?p(this.low<<T,this.high<<T|this.low>>>32-T,this.unsigned):p(0,this.low<<T-32,this.unsigned)},M.shl=M.shiftLeft,M.shiftRight=function(T){return r(T)&&(T=T.toInt()),(T&=63)==0?this:T<32?p(this.low>>>T|this.high<<32-T,this.high>>T,this.unsigned):p(this.high>>T-32,this.high>=0?0:-1,this.unsigned)},M.shr=M.shiftRight,M.shiftRightUnsigned=function(T){if(r(T)&&(T=T.toInt()),(T&=63)==0)return this;var E=this.high;return T<32?p(this.low>>>T|E<<32-T,E>>>T,this.unsigned):p(T===32?E:E>>>T-32,0,this.unsigned)},M.shru=M.shiftRightUnsigned,M.shr_u=M.shiftRightUnsigned,M.toSigned=function(){return this.unsigned?p(this.low,this.high,!1):this},M.toUnsigned=function(){return this.unsigned?this:p(this.low,this.high,!0)},M.toBytes=function(T){return T?this.toBytesLE():this.toBytesBE()},M.toBytesLE=function(){var T=this.high,E=this.low;return[255&E,E>>>8&255,E>>>16&255,E>>>24,255&T,T>>>8&255,T>>>16&255,T>>>24]},M.toBytesBE=function(){var T=this.high,E=this.low;return[T>>>24,T>>>16&255,T>>>8&255,255&T,E>>>24,E>>>16&255,E>>>8&255,255&E]},t.fromBytes=function(T,E,R){return R?t.fromBytesLE(T,E):t.fromBytesBE(T,E)},t.fromBytesLE=function(T,E){return new t(T[0]|T[1]<<8|T[2]<<16|T[3]<<24,T[4]|T[5]<<8|T[6]<<16|T[7]<<24,E)},t.fromBytesBE=function(T,E){return new t(T[4]<<24|T[5]<<16|T[6]<<8|T[7],T[0]<<24|T[1]<<16|T[2]<<8|T[3],E)}},1446:(s,e,t)=>{var r,o,c,l=t(2100),h=l.Reader,p=l.Writer,f=l.util,d=l.roots.default||(l.roots.default={});d.onnx=((c={}).Version=(r={},(o=Object.create(r))[r[0]="_START_VERSION"]=0,o[r[1]="IR_VERSION_2017_10_10"]=1,o[r[2]="IR_VERSION_2017_10_30"]=2,o[r[3]="IR_VERSION_2017_11_3"]=3,o[r[4]="IR_VERSION_2019_1_22"]=4,o[r[5]="IR_VERSION"]=5,o),c.AttributeProto=function(){function i(n){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.name="",i.prototype.refAttrName="",i.prototype.docString="",i.prototype.type=0,i.prototype.f=0,i.prototype.i=f.Long?f.Long.fromBits(0,0,!1):0,i.prototype.s=f.newBuffer([]),i.prototype.t=null,i.prototype.g=null,i.prototype.floats=f.emptyArray,i.prototype.ints=f.emptyArray,i.prototype.strings=f.emptyArray,i.prototype.tensors=f.emptyArray,i.prototype.graphs=f.emptyArray,i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.name!=null&&n.hasOwnProperty("name")&&a.uint32(10).string(n.name),n.f!=null&&n.hasOwnProperty("f")&&a.uint32(21).float(n.f),n.i!=null&&n.hasOwnProperty("i")&&a.uint32(24).int64(n.i),n.s!=null&&n.hasOwnProperty("s")&&a.uint32(34).bytes(n.s),n.t!=null&&n.hasOwnProperty("t")&&d.onnx.TensorProto.encode(n.t,a.uint32(42).fork()).ldelim(),n.g!=null&&n.hasOwnProperty("g")&&d.onnx.GraphProto.encode(n.g,a.uint32(50).fork()).ldelim(),n.floats!=null&&n.floats.length){a.uint32(58).fork();for(var u=0;u<n.floats.length;++u)a.float(n.floats[u]);a.ldelim()}if(n.ints!=null&&n.ints.length){for(a.uint32(66).fork(),u=0;u<n.ints.length;++u)a.int64(n.ints[u]);a.ldelim()}if(n.strings!=null&&n.strings.length)for(u=0;u<n.strings.length;++u)a.uint32(74).bytes(n.strings[u]);if(n.tensors!=null&&n.tensors.length)for(u=0;u<n.tensors.length;++u)d.onnx.TensorProto.encode(n.tensors[u],a.uint32(82).fork()).ldelim();if(n.graphs!=null&&n.graphs.length)for(u=0;u<n.graphs.length;++u)d.onnx.GraphProto.encode(n.graphs[u],a.uint32(90).fork()).ldelim();return n.docString!=null&&n.hasOwnProperty("docString")&&a.uint32(106).string(n.docString),n.type!=null&&n.hasOwnProperty("type")&&a.uint32(160).int32(n.type),n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&a.uint32(170).string(n.refAttrName),a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.AttributeProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.name=n.string();break;case 21:m.refAttrName=n.string();break;case 13:m.docString=n.string();break;case 20:m.type=n.int32();break;case 2:m.f=n.float();break;case 3:m.i=n.int64();break;case 4:m.s=n.bytes();break;case 5:m.t=d.onnx.TensorProto.decode(n,n.uint32());break;case 6:m.g=d.onnx.GraphProto.decode(n,n.uint32());break;case 7:if(m.floats&&m.floats.length||(m.floats=[]),(7&g)==2)for(var _=n.uint32()+n.pos;n.pos<_;)m.floats.push(n.float());else m.floats.push(n.float());break;case 8:if(m.ints&&m.ints.length||(m.ints=[]),(7&g)==2)for(_=n.uint32()+n.pos;n.pos<_;)m.ints.push(n.int64());else m.ints.push(n.int64());break;case 9:m.strings&&m.strings.length||(m.strings=[]),m.strings.push(n.bytes());break;case 10:m.tensors&&m.tensors.length||(m.tensors=[]),m.tensors.push(d.onnx.TensorProto.decode(n,n.uint32()));break;case 11:m.graphs&&m.graphs.length||(m.graphs=[]),m.graphs.push(d.onnx.GraphProto.decode(n,n.uint32()));break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!f.isString(n.name))return"name: string expected";if(n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&!f.isString(n.refAttrName))return"refAttrName: string expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!f.isString(n.docString))return"docString: string expected";if(n.type!=null&&n.hasOwnProperty("type"))switch(n.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:}if(n.f!=null&&n.hasOwnProperty("f")&&typeof n.f!="number")return"f: number expected";if(n.i!=null&&n.hasOwnProperty("i")&&!(f.isInteger(n.i)||n.i&&f.isInteger(n.i.low)&&f.isInteger(n.i.high)))return"i: integer|Long expected";if(n.s!=null&&n.hasOwnProperty("s")&&!(n.s&&typeof n.s.length=="number"||f.isString(n.s)))return"s: buffer expected";if(n.t!=null&&n.hasOwnProperty("t")&&(u=d.onnx.TensorProto.verify(n.t)))return"t."+u;if(n.g!=null&&n.hasOwnProperty("g")&&(u=d.onnx.GraphProto.verify(n.g)))return"g."+u;if(n.floats!=null&&n.hasOwnProperty("floats")){if(!Array.isArray(n.floats))return"floats: array expected";for(var a=0;a<n.floats.length;++a)if(typeof n.floats[a]!="number")return"floats: number[] expected"}if(n.ints!=null&&n.hasOwnProperty("ints")){if(!Array.isArray(n.ints))return"ints: array expected";for(a=0;a<n.ints.length;++a)if(!(f.isInteger(n.ints[a])||n.ints[a]&&f.isInteger(n.ints[a].low)&&f.isInteger(n.ints[a].high)))return"ints: integer|Long[] expected"}if(n.strings!=null&&n.hasOwnProperty("strings")){if(!Array.isArray(n.strings))return"strings: array expected";for(a=0;a<n.strings.length;++a)if(!(n.strings[a]&&typeof n.strings[a].length=="number"||f.isString(n.strings[a])))return"strings: buffer[] expected"}if(n.tensors!=null&&n.hasOwnProperty("tensors")){if(!Array.isArray(n.tensors))return"tensors: array expected";for(a=0;a<n.tensors.length;++a)if(u=d.onnx.TensorProto.verify(n.tensors[a]))return"tensors."+u}if(n.graphs!=null&&n.hasOwnProperty("graphs")){if(!Array.isArray(n.graphs))return"graphs: array expected";for(a=0;a<n.graphs.length;++a){var u;if(u=d.onnx.GraphProto.verify(n.graphs[a]))return"graphs."+u}}return null},i.fromObject=function(n){if(n instanceof d.onnx.AttributeProto)return n;var a=new d.onnx.AttributeProto;switch(n.name!=null&&(a.name=String(n.name)),n.refAttrName!=null&&(a.refAttrName=String(n.refAttrName)),n.docString!=null&&(a.docString=String(n.docString)),n.type){case"UNDEFINED":case 0:a.type=0;break;case"FLOAT":case 1:a.type=1;break;case"INT":case 2:a.type=2;break;case"STRING":case 3:a.type=3;break;case"TENSOR":case 4:a.type=4;break;case"GRAPH":case 5:a.type=5;break;case"FLOATS":case 6:a.type=6;break;case"INTS":case 7:a.type=7;break;case"STRINGS":case 8:a.type=8;break;case"TENSORS":case 9:a.type=9;break;case"GRAPHS":case 10:a.type=10}if(n.f!=null&&(a.f=Number(n.f)),n.i!=null&&(f.Long?(a.i=f.Long.fromValue(n.i)).unsigned=!1:typeof n.i=="string"?a.i=parseInt(n.i,10):typeof n.i=="number"?a.i=n.i:typeof n.i=="object"&&(a.i=new f.LongBits(n.i.low>>>0,n.i.high>>>0).toNumber())),n.s!=null&&(typeof n.s=="string"?f.base64.decode(n.s,a.s=f.newBuffer(f.base64.length(n.s)),0):n.s.length&&(a.s=n.s)),n.t!=null){if(typeof n.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");a.t=d.onnx.TensorProto.fromObject(n.t)}if(n.g!=null){if(typeof n.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");a.g=d.onnx.GraphProto.fromObject(n.g)}if(n.floats){if(!Array.isArray(n.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");a.floats=[];for(var u=0;u<n.floats.length;++u)a.floats[u]=Number(n.floats[u])}if(n.ints){if(!Array.isArray(n.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");for(a.ints=[],u=0;u<n.ints.length;++u)f.Long?(a.ints[u]=f.Long.fromValue(n.ints[u])).unsigned=!1:typeof n.ints[u]=="string"?a.ints[u]=parseInt(n.ints[u],10):typeof n.ints[u]=="number"?a.ints[u]=n.ints[u]:typeof n.ints[u]=="object"&&(a.ints[u]=new f.LongBits(n.ints[u].low>>>0,n.ints[u].high>>>0).toNumber())}if(n.strings){if(!Array.isArray(n.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");for(a.strings=[],u=0;u<n.strings.length;++u)typeof n.strings[u]=="string"?f.base64.decode(n.strings[u],a.strings[u]=f.newBuffer(f.base64.length(n.strings[u])),0):n.strings[u].length&&(a.strings[u]=n.strings[u])}if(n.tensors){if(!Array.isArray(n.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");for(a.tensors=[],u=0;u<n.tensors.length;++u){if(typeof n.tensors[u]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");a.tensors[u]=d.onnx.TensorProto.fromObject(n.tensors[u])}}if(n.graphs){if(!Array.isArray(n.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");for(a.graphs=[],u=0;u<n.graphs.length;++u){if(typeof n.graphs[u]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");a.graphs[u]=d.onnx.GraphProto.fromObject(n.graphs[u])}}return a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.floats=[],u.ints=[],u.strings=[],u.tensors=[],u.graphs=[]),a.defaults){if(u.name="",u.f=0,f.Long){var m=new f.Long(0,0,!1);u.i=a.longs===String?m.toString():a.longs===Number?m.toNumber():m}else u.i=a.longs===String?"0":0;a.bytes===String?u.s="":(u.s=[],a.bytes!==Array&&(u.s=f.newBuffer(u.s))),u.t=null,u.g=null,u.docString="",u.type=a.enums===String?"UNDEFINED":0,u.refAttrName=""}if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.f!=null&&n.hasOwnProperty("f")&&(u.f=a.json&&!isFinite(n.f)?String(n.f):n.f),n.i!=null&&n.hasOwnProperty("i")&&(typeof n.i=="number"?u.i=a.longs===String?String(n.i):n.i:u.i=a.longs===String?f.Long.prototype.toString.call(n.i):a.longs===Number?new f.LongBits(n.i.low>>>0,n.i.high>>>0).toNumber():n.i),n.s!=null&&n.hasOwnProperty("s")&&(u.s=a.bytes===String?f.base64.encode(n.s,0,n.s.length):a.bytes===Array?Array.prototype.slice.call(n.s):n.s),n.t!=null&&n.hasOwnProperty("t")&&(u.t=d.onnx.TensorProto.toObject(n.t,a)),n.g!=null&&n.hasOwnProperty("g")&&(u.g=d.onnx.GraphProto.toObject(n.g,a)),n.floats&&n.floats.length){u.floats=[];for(var g=0;g<n.floats.length;++g)u.floats[g]=a.json&&!isFinite(n.floats[g])?String(n.floats[g]):n.floats[g]}if(n.ints&&n.ints.length)for(u.ints=[],g=0;g<n.ints.length;++g)typeof n.ints[g]=="number"?u.ints[g]=a.longs===String?String(n.ints[g]):n.ints[g]:u.ints[g]=a.longs===String?f.Long.prototype.toString.call(n.ints[g]):a.longs===Number?new f.LongBits(n.ints[g].low>>>0,n.ints[g].high>>>0).toNumber():n.ints[g];if(n.strings&&n.strings.length)for(u.strings=[],g=0;g<n.strings.length;++g)u.strings[g]=a.bytes===String?f.base64.encode(n.strings[g],0,n.strings[g].length):a.bytes===Array?Array.prototype.slice.call(n.strings[g]):n.strings[g];if(n.tensors&&n.tensors.length)for(u.tensors=[],g=0;g<n.tensors.length;++g)u.tensors[g]=d.onnx.TensorProto.toObject(n.tensors[g],a);if(n.graphs&&n.graphs.length)for(u.graphs=[],g=0;g<n.graphs.length;++g)u.graphs[g]=d.onnx.GraphProto.toObject(n.graphs[g],a);return n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.type!=null&&n.hasOwnProperty("type")&&(u.type=a.enums===String?d.onnx.AttributeProto.AttributeType[n.type]:n.type),n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&(u.refAttrName=n.refAttrName),u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i.AttributeType=function(){var n={},a=Object.create(n);return a[n[0]="UNDEFINED"]=0,a[n[1]="FLOAT"]=1,a[n[2]="INT"]=2,a[n[3]="STRING"]=3,a[n[4]="TENSOR"]=4,a[n[5]="GRAPH"]=5,a[n[6]="FLOATS"]=6,a[n[7]="INTS"]=7,a[n[8]="STRINGS"]=8,a[n[9]="TENSORS"]=9,a[n[10]="GRAPHS"]=10,a}(),i}(),c.ValueInfoProto=function(){function i(n){if(n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.name="",i.prototype.type=null,i.prototype.docString="",i.create=function(n){return new i(n)},i.encode=function(n,a){return a||(a=p.create()),n.name!=null&&n.hasOwnProperty("name")&&a.uint32(10).string(n.name),n.type!=null&&n.hasOwnProperty("type")&&d.onnx.TypeProto.encode(n.type,a.uint32(18).fork()).ldelim(),n.docString!=null&&n.hasOwnProperty("docString")&&a.uint32(26).string(n.docString),a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.ValueInfoProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.name=n.string();break;case 2:m.type=d.onnx.TypeProto.decode(n,n.uint32());break;case 3:m.docString=n.string();break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!f.isString(n.name))return"name: string expected";if(n.type!=null&&n.hasOwnProperty("type")){var a=d.onnx.TypeProto.verify(n.type);if(a)return"type."+a}return n.docString!=null&&n.hasOwnProperty("docString")&&!f.isString(n.docString)?"docString: string expected":null},i.fromObject=function(n){if(n instanceof d.onnx.ValueInfoProto)return n;var a=new d.onnx.ValueInfoProto;if(n.name!=null&&(a.name=String(n.name)),n.type!=null){if(typeof n.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");a.type=d.onnx.TypeProto.fromObject(n.type)}return n.docString!=null&&(a.docString=String(n.docString)),a},i.toObject=function(n,a){a||(a={});var u={};return a.defaults&&(u.name="",u.type=null,u.docString=""),n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.type!=null&&n.hasOwnProperty("type")&&(u.type=d.onnx.TypeProto.toObject(n.type,a)),n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c.NodeProto=function(){function i(n){if(this.input=[],this.output=[],this.attribute=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.input=f.emptyArray,i.prototype.output=f.emptyArray,i.prototype.name="",i.prototype.opType="",i.prototype.domain="",i.prototype.attribute=f.emptyArray,i.prototype.docString="",i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.input!=null&&n.input.length)for(var u=0;u<n.input.length;++u)a.uint32(10).string(n.input[u]);if(n.output!=null&&n.output.length)for(u=0;u<n.output.length;++u)a.uint32(18).string(n.output[u]);if(n.name!=null&&n.hasOwnProperty("name")&&a.uint32(26).string(n.name),n.opType!=null&&n.hasOwnProperty("opType")&&a.uint32(34).string(n.opType),n.attribute!=null&&n.attribute.length)for(u=0;u<n.attribute.length;++u)d.onnx.AttributeProto.encode(n.attribute[u],a.uint32(42).fork()).ldelim();return n.docString!=null&&n.hasOwnProperty("docString")&&a.uint32(50).string(n.docString),n.domain!=null&&n.hasOwnProperty("domain")&&a.uint32(58).string(n.domain),a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.NodeProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.input&&m.input.length||(m.input=[]),m.input.push(n.string());break;case 2:m.output&&m.output.length||(m.output=[]),m.output.push(n.string());break;case 3:m.name=n.string();break;case 4:m.opType=n.string();break;case 7:m.domain=n.string();break;case 5:m.attribute&&m.attribute.length||(m.attribute=[]),m.attribute.push(d.onnx.AttributeProto.decode(n,n.uint32()));break;case 6:m.docString=n.string();break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var a=0;a<n.input.length;++a)if(!f.isString(n.input[a]))return"input: string[] expected"}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(a=0;a<n.output.length;++a)if(!f.isString(n.output[a]))return"output: string[] expected"}if(n.name!=null&&n.hasOwnProperty("name")&&!f.isString(n.name))return"name: string expected";if(n.opType!=null&&n.hasOwnProperty("opType")&&!f.isString(n.opType))return"opType: string expected";if(n.domain!=null&&n.hasOwnProperty("domain")&&!f.isString(n.domain))return"domain: string expected";if(n.attribute!=null&&n.hasOwnProperty("attribute")){if(!Array.isArray(n.attribute))return"attribute: array expected";for(a=0;a<n.attribute.length;++a){var u=d.onnx.AttributeProto.verify(n.attribute[a]);if(u)return"attribute."+u}}return n.docString!=null&&n.hasOwnProperty("docString")&&!f.isString(n.docString)?"docString: string expected":null},i.fromObject=function(n){if(n instanceof d.onnx.NodeProto)return n;var a=new d.onnx.NodeProto;if(n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.NodeProto.input: array expected");a.input=[];for(var u=0;u<n.input.length;++u)a.input[u]=String(n.input[u])}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.NodeProto.output: array expected");for(a.output=[],u=0;u<n.output.length;++u)a.output[u]=String(n.output[u])}if(n.name!=null&&(a.name=String(n.name)),n.opType!=null&&(a.opType=String(n.opType)),n.domain!=null&&(a.domain=String(n.domain)),n.attribute){if(!Array.isArray(n.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");for(a.attribute=[],u=0;u<n.attribute.length;++u){if(typeof n.attribute[u]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");a.attribute[u]=d.onnx.AttributeProto.fromObject(n.attribute[u])}}return n.docString!=null&&(a.docString=String(n.docString)),a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.input=[],u.output=[],u.attribute=[]),a.defaults&&(u.name="",u.opType="",u.docString="",u.domain=""),n.input&&n.input.length){u.input=[];for(var m=0;m<n.input.length;++m)u.input[m]=n.input[m]}if(n.output&&n.output.length)for(u.output=[],m=0;m<n.output.length;++m)u.output[m]=n.output[m];if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.opType!=null&&n.hasOwnProperty("opType")&&(u.opType=n.opType),n.attribute&&n.attribute.length)for(u.attribute=[],m=0;m<n.attribute.length;++m)u.attribute[m]=d.onnx.AttributeProto.toObject(n.attribute[m],a);return n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c.ModelProto=function(){function i(n){if(this.opsetImport=[],this.metadataProps=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.irVersion=f.Long?f.Long.fromBits(0,0,!1):0,i.prototype.opsetImport=f.emptyArray,i.prototype.producerName="",i.prototype.producerVersion="",i.prototype.domain="",i.prototype.modelVersion=f.Long?f.Long.fromBits(0,0,!1):0,i.prototype.docString="",i.prototype.graph=null,i.prototype.metadataProps=f.emptyArray,i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.irVersion!=null&&n.hasOwnProperty("irVersion")&&a.uint32(8).int64(n.irVersion),n.producerName!=null&&n.hasOwnProperty("producerName")&&a.uint32(18).string(n.producerName),n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&a.uint32(26).string(n.producerVersion),n.domain!=null&&n.hasOwnProperty("domain")&&a.uint32(34).string(n.domain),n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&a.uint32(40).int64(n.modelVersion),n.docString!=null&&n.hasOwnProperty("docString")&&a.uint32(50).string(n.docString),n.graph!=null&&n.hasOwnProperty("graph")&&d.onnx.GraphProto.encode(n.graph,a.uint32(58).fork()).ldelim(),n.opsetImport!=null&&n.opsetImport.length)for(var u=0;u<n.opsetImport.length;++u)d.onnx.OperatorSetIdProto.encode(n.opsetImport[u],a.uint32(66).fork()).ldelim();if(n.metadataProps!=null&&n.metadataProps.length)for(u=0;u<n.metadataProps.length;++u)d.onnx.StringStringEntryProto.encode(n.metadataProps[u],a.uint32(114).fork()).ldelim();return a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.ModelProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.irVersion=n.int64();break;case 8:m.opsetImport&&m.opsetImport.length||(m.opsetImport=[]),m.opsetImport.push(d.onnx.OperatorSetIdProto.decode(n,n.uint32()));break;case 2:m.producerName=n.string();break;case 3:m.producerVersion=n.string();break;case 4:m.domain=n.string();break;case 5:m.modelVersion=n.int64();break;case 6:m.docString=n.string();break;case 7:m.graph=d.onnx.GraphProto.decode(n,n.uint32());break;case 14:m.metadataProps&&m.metadataProps.length||(m.metadataProps=[]),m.metadataProps.push(d.onnx.StringStringEntryProto.decode(n,n.uint32()));break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.irVersion!=null&&n.hasOwnProperty("irVersion")&&!(f.isInteger(n.irVersion)||n.irVersion&&f.isInteger(n.irVersion.low)&&f.isInteger(n.irVersion.high)))return"irVersion: integer|Long expected";if(n.opsetImport!=null&&n.hasOwnProperty("opsetImport")){if(!Array.isArray(n.opsetImport))return"opsetImport: array expected";for(var a=0;a<n.opsetImport.length;++a)if(u=d.onnx.OperatorSetIdProto.verify(n.opsetImport[a]))return"opsetImport."+u}if(n.producerName!=null&&n.hasOwnProperty("producerName")&&!f.isString(n.producerName))return"producerName: string expected";if(n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&!f.isString(n.producerVersion))return"producerVersion: string expected";if(n.domain!=null&&n.hasOwnProperty("domain")&&!f.isString(n.domain))return"domain: string expected";if(n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&!(f.isInteger(n.modelVersion)||n.modelVersion&&f.isInteger(n.modelVersion.low)&&f.isInteger(n.modelVersion.high)))return"modelVersion: integer|Long expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!f.isString(n.docString))return"docString: string expected";if(n.graph!=null&&n.hasOwnProperty("graph")&&(u=d.onnx.GraphProto.verify(n.graph)))return"graph."+u;if(n.metadataProps!=null&&n.hasOwnProperty("metadataProps")){if(!Array.isArray(n.metadataProps))return"metadataProps: array expected";for(a=0;a<n.metadataProps.length;++a){var u;if(u=d.onnx.StringStringEntryProto.verify(n.metadataProps[a]))return"metadataProps."+u}}return null},i.fromObject=function(n){if(n instanceof d.onnx.ModelProto)return n;var a=new d.onnx.ModelProto;if(n.irVersion!=null&&(f.Long?(a.irVersion=f.Long.fromValue(n.irVersion)).unsigned=!1:typeof n.irVersion=="string"?a.irVersion=parseInt(n.irVersion,10):typeof n.irVersion=="number"?a.irVersion=n.irVersion:typeof n.irVersion=="object"&&(a.irVersion=new f.LongBits(n.irVersion.low>>>0,n.irVersion.high>>>0).toNumber())),n.opsetImport){if(!Array.isArray(n.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");a.opsetImport=[];for(var u=0;u<n.opsetImport.length;++u){if(typeof n.opsetImport[u]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");a.opsetImport[u]=d.onnx.OperatorSetIdProto.fromObject(n.opsetImport[u])}}if(n.producerName!=null&&(a.producerName=String(n.producerName)),n.producerVersion!=null&&(a.producerVersion=String(n.producerVersion)),n.domain!=null&&(a.domain=String(n.domain)),n.modelVersion!=null&&(f.Long?(a.modelVersion=f.Long.fromValue(n.modelVersion)).unsigned=!1:typeof n.modelVersion=="string"?a.modelVersion=parseInt(n.modelVersion,10):typeof n.modelVersion=="number"?a.modelVersion=n.modelVersion:typeof n.modelVersion=="object"&&(a.modelVersion=new f.LongBits(n.modelVersion.low>>>0,n.modelVersion.high>>>0).toNumber())),n.docString!=null&&(a.docString=String(n.docString)),n.graph!=null){if(typeof n.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");a.graph=d.onnx.GraphProto.fromObject(n.graph)}if(n.metadataProps){if(!Array.isArray(n.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");for(a.metadataProps=[],u=0;u<n.metadataProps.length;++u){if(typeof n.metadataProps[u]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");a.metadataProps[u]=d.onnx.StringStringEntryProto.fromObject(n.metadataProps[u])}}return a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.opsetImport=[],u.metadataProps=[]),a.defaults){if(f.Long){var m=new f.Long(0,0,!1);u.irVersion=a.longs===String?m.toString():a.longs===Number?m.toNumber():m}else u.irVersion=a.longs===String?"0":0;u.producerName="",u.producerVersion="",u.domain="",f.Long?(m=new f.Long(0,0,!1),u.modelVersion=a.longs===String?m.toString():a.longs===Number?m.toNumber():m):u.modelVersion=a.longs===String?"0":0,u.docString="",u.graph=null}if(n.irVersion!=null&&n.hasOwnProperty("irVersion")&&(typeof n.irVersion=="number"?u.irVersion=a.longs===String?String(n.irVersion):n.irVersion:u.irVersion=a.longs===String?f.Long.prototype.toString.call(n.irVersion):a.longs===Number?new f.LongBits(n.irVersion.low>>>0,n.irVersion.high>>>0).toNumber():n.irVersion),n.producerName!=null&&n.hasOwnProperty("producerName")&&(u.producerName=n.producerName),n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&(u.producerVersion=n.producerVersion),n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&(typeof n.modelVersion=="number"?u.modelVersion=a.longs===String?String(n.modelVersion):n.modelVersion:u.modelVersion=a.longs===String?f.Long.prototype.toString.call(n.modelVersion):a.longs===Number?new f.LongBits(n.modelVersion.low>>>0,n.modelVersion.high>>>0).toNumber():n.modelVersion),n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.graph!=null&&n.hasOwnProperty("graph")&&(u.graph=d.onnx.GraphProto.toObject(n.graph,a)),n.opsetImport&&n.opsetImport.length){u.opsetImport=[];for(var g=0;g<n.opsetImport.length;++g)u.opsetImport[g]=d.onnx.OperatorSetIdProto.toObject(n.opsetImport[g],a)}if(n.metadataProps&&n.metadataProps.length)for(u.metadataProps=[],g=0;g<n.metadataProps.length;++g)u.metadataProps[g]=d.onnx.StringStringEntryProto.toObject(n.metadataProps[g],a);return u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c.StringStringEntryProto=function(){function i(n){if(n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.key="",i.prototype.value="",i.create=function(n){return new i(n)},i.encode=function(n,a){return a||(a=p.create()),n.key!=null&&n.hasOwnProperty("key")&&a.uint32(10).string(n.key),n.value!=null&&n.hasOwnProperty("value")&&a.uint32(18).string(n.value),a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.StringStringEntryProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.key=n.string();break;case 2:m.value=n.string();break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){return typeof n!="object"||n===null?"object expected":n.key!=null&&n.hasOwnProperty("key")&&!f.isString(n.key)?"key: string expected":n.value!=null&&n.hasOwnProperty("value")&&!f.isString(n.value)?"value: string expected":null},i.fromObject=function(n){if(n instanceof d.onnx.StringStringEntryProto)return n;var a=new d.onnx.StringStringEntryProto;return n.key!=null&&(a.key=String(n.key)),n.value!=null&&(a.value=String(n.value)),a},i.toObject=function(n,a){a||(a={});var u={};return a.defaults&&(u.key="",u.value=""),n.key!=null&&n.hasOwnProperty("key")&&(u.key=n.key),n.value!=null&&n.hasOwnProperty("value")&&(u.value=n.value),u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c.TensorAnnotation=function(){function i(n){if(this.quantParameterTensorNames=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.tensorName="",i.prototype.quantParameterTensorNames=f.emptyArray,i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.tensorName!=null&&n.hasOwnProperty("tensorName")&&a.uint32(10).string(n.tensorName),n.quantParameterTensorNames!=null&&n.quantParameterTensorNames.length)for(var u=0;u<n.quantParameterTensorNames.length;++u)d.onnx.StringStringEntryProto.encode(n.quantParameterTensorNames[u],a.uint32(18).fork()).ldelim();return a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.TensorAnnotation;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.tensorName=n.string();break;case 2:m.quantParameterTensorNames&&m.quantParameterTensorNames.length||(m.quantParameterTensorNames=[]),m.quantParameterTensorNames.push(d.onnx.StringStringEntryProto.decode(n,n.uint32()));break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.tensorName!=null&&n.hasOwnProperty("tensorName")&&!f.isString(n.tensorName))return"tensorName: string expected";if(n.quantParameterTensorNames!=null&&n.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(n.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var a=0;a<n.quantParameterTensorNames.length;++a){var u=d.onnx.StringStringEntryProto.verify(n.quantParameterTensorNames[a]);if(u)return"quantParameterTensorNames."+u}}return null},i.fromObject=function(n){if(n instanceof d.onnx.TensorAnnotation)return n;var a=new d.onnx.TensorAnnotation;if(n.tensorName!=null&&(a.tensorName=String(n.tensorName)),n.quantParameterTensorNames){if(!Array.isArray(n.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");a.quantParameterTensorNames=[];for(var u=0;u<n.quantParameterTensorNames.length;++u){if(typeof n.quantParameterTensorNames[u]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");a.quantParameterTensorNames[u]=d.onnx.StringStringEntryProto.fromObject(n.quantParameterTensorNames[u])}}return a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.quantParameterTensorNames=[]),a.defaults&&(u.tensorName=""),n.tensorName!=null&&n.hasOwnProperty("tensorName")&&(u.tensorName=n.tensorName),n.quantParameterTensorNames&&n.quantParameterTensorNames.length){u.quantParameterTensorNames=[];for(var m=0;m<n.quantParameterTensorNames.length;++m)u.quantParameterTensorNames[m]=d.onnx.StringStringEntryProto.toObject(n.quantParameterTensorNames[m],a)}return u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c.GraphProto=function(){function i(n){if(this.node=[],this.initializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.node=f.emptyArray,i.prototype.name="",i.prototype.initializer=f.emptyArray,i.prototype.docString="",i.prototype.input=f.emptyArray,i.prototype.output=f.emptyArray,i.prototype.valueInfo=f.emptyArray,i.prototype.quantizationAnnotation=f.emptyArray,i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.node!=null&&n.node.length)for(var u=0;u<n.node.length;++u)d.onnx.NodeProto.encode(n.node[u],a.uint32(10).fork()).ldelim();if(n.name!=null&&n.hasOwnProperty("name")&&a.uint32(18).string(n.name),n.initializer!=null&&n.initializer.length)for(u=0;u<n.initializer.length;++u)d.onnx.TensorProto.encode(n.initializer[u],a.uint32(42).fork()).ldelim();if(n.docString!=null&&n.hasOwnProperty("docString")&&a.uint32(82).string(n.docString),n.input!=null&&n.input.length)for(u=0;u<n.input.length;++u)d.onnx.ValueInfoProto.encode(n.input[u],a.uint32(90).fork()).ldelim();if(n.output!=null&&n.output.length)for(u=0;u<n.output.length;++u)d.onnx.ValueInfoProto.encode(n.output[u],a.uint32(98).fork()).ldelim();if(n.valueInfo!=null&&n.valueInfo.length)for(u=0;u<n.valueInfo.length;++u)d.onnx.ValueInfoProto.encode(n.valueInfo[u],a.uint32(106).fork()).ldelim();if(n.quantizationAnnotation!=null&&n.quantizationAnnotation.length)for(u=0;u<n.quantizationAnnotation.length;++u)d.onnx.TensorAnnotation.encode(n.quantizationAnnotation[u],a.uint32(114).fork()).ldelim();return a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.GraphProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.node&&m.node.length||(m.node=[]),m.node.push(d.onnx.NodeProto.decode(n,n.uint32()));break;case 2:m.name=n.string();break;case 5:m.initializer&&m.initializer.length||(m.initializer=[]),m.initializer.push(d.onnx.TensorProto.decode(n,n.uint32()));break;case 10:m.docString=n.string();break;case 11:m.input&&m.input.length||(m.input=[]),m.input.push(d.onnx.ValueInfoProto.decode(n,n.uint32()));break;case 12:m.output&&m.output.length||(m.output=[]),m.output.push(d.onnx.ValueInfoProto.decode(n,n.uint32()));break;case 13:m.valueInfo&&m.valueInfo.length||(m.valueInfo=[]),m.valueInfo.push(d.onnx.ValueInfoProto.decode(n,n.uint32()));break;case 14:m.quantizationAnnotation&&m.quantizationAnnotation.length||(m.quantizationAnnotation=[]),m.quantizationAnnotation.push(d.onnx.TensorAnnotation.decode(n,n.uint32()));break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.node!=null&&n.hasOwnProperty("node")){if(!Array.isArray(n.node))return"node: array expected";for(var a=0;a<n.node.length;++a)if(u=d.onnx.NodeProto.verify(n.node[a]))return"node."+u}if(n.name!=null&&n.hasOwnProperty("name")&&!f.isString(n.name))return"name: string expected";if(n.initializer!=null&&n.hasOwnProperty("initializer")){if(!Array.isArray(n.initializer))return"initializer: array expected";for(a=0;a<n.initializer.length;++a)if(u=d.onnx.TensorProto.verify(n.initializer[a]))return"initializer."+u}if(n.docString!=null&&n.hasOwnProperty("docString")&&!f.isString(n.docString))return"docString: string expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(a=0;a<n.input.length;++a)if(u=d.onnx.ValueInfoProto.verify(n.input[a]))return"input."+u}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(a=0;a<n.output.length;++a)if(u=d.onnx.ValueInfoProto.verify(n.output[a]))return"output."+u}if(n.valueInfo!=null&&n.hasOwnProperty("valueInfo")){if(!Array.isArray(n.valueInfo))return"valueInfo: array expected";for(a=0;a<n.valueInfo.length;++a)if(u=d.onnx.ValueInfoProto.verify(n.valueInfo[a]))return"valueInfo."+u}if(n.quantizationAnnotation!=null&&n.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(n.quantizationAnnotation))return"quantizationAnnotation: array expected";for(a=0;a<n.quantizationAnnotation.length;++a){var u;if(u=d.onnx.TensorAnnotation.verify(n.quantizationAnnotation[a]))return"quantizationAnnotation."+u}}return null},i.fromObject=function(n){if(n instanceof d.onnx.GraphProto)return n;var a=new d.onnx.GraphProto;if(n.node){if(!Array.isArray(n.node))throw TypeError(".onnx.GraphProto.node: array expected");a.node=[];for(var u=0;u<n.node.length;++u){if(typeof n.node[u]!="object")throw TypeError(".onnx.GraphProto.node: object expected");a.node[u]=d.onnx.NodeProto.fromObject(n.node[u])}}if(n.name!=null&&(a.name=String(n.name)),n.initializer){if(!Array.isArray(n.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");for(a.initializer=[],u=0;u<n.initializer.length;++u){if(typeof n.initializer[u]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");a.initializer[u]=d.onnx.TensorProto.fromObject(n.initializer[u])}}if(n.docString!=null&&(a.docString=String(n.docString)),n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.GraphProto.input: array expected");for(a.input=[],u=0;u<n.input.length;++u){if(typeof n.input[u]!="object")throw TypeError(".onnx.GraphProto.input: object expected");a.input[u]=d.onnx.ValueInfoProto.fromObject(n.input[u])}}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.GraphProto.output: array expected");for(a.output=[],u=0;u<n.output.length;++u){if(typeof n.output[u]!="object")throw TypeError(".onnx.GraphProto.output: object expected");a.output[u]=d.onnx.ValueInfoProto.fromObject(n.output[u])}}if(n.valueInfo){if(!Array.isArray(n.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");for(a.valueInfo=[],u=0;u<n.valueInfo.length;++u){if(typeof n.valueInfo[u]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");a.valueInfo[u]=d.onnx.ValueInfoProto.fromObject(n.valueInfo[u])}}if(n.quantizationAnnotation){if(!Array.isArray(n.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");for(a.quantizationAnnotation=[],u=0;u<n.quantizationAnnotation.length;++u){if(typeof n.quantizationAnnotation[u]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");a.quantizationAnnotation[u]=d.onnx.TensorAnnotation.fromObject(n.quantizationAnnotation[u])}}return a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.node=[],u.initializer=[],u.input=[],u.output=[],u.valueInfo=[],u.quantizationAnnotation=[]),a.defaults&&(u.name="",u.docString=""),n.node&&n.node.length){u.node=[];for(var m=0;m<n.node.length;++m)u.node[m]=d.onnx.NodeProto.toObject(n.node[m],a)}if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.initializer&&n.initializer.length)for(u.initializer=[],m=0;m<n.initializer.length;++m)u.initializer[m]=d.onnx.TensorProto.toObject(n.initializer[m],a);if(n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.input&&n.input.length)for(u.input=[],m=0;m<n.input.length;++m)u.input[m]=d.onnx.ValueInfoProto.toObject(n.input[m],a);if(n.output&&n.output.length)for(u.output=[],m=0;m<n.output.length;++m)u.output[m]=d.onnx.ValueInfoProto.toObject(n.output[m],a);if(n.valueInfo&&n.valueInfo.length)for(u.valueInfo=[],m=0;m<n.valueInfo.length;++m)u.valueInfo[m]=d.onnx.ValueInfoProto.toObject(n.valueInfo[m],a);if(n.quantizationAnnotation&&n.quantizationAnnotation.length)for(u.quantizationAnnotation=[],m=0;m<n.quantizationAnnotation.length;++m)u.quantizationAnnotation[m]=d.onnx.TensorAnnotation.toObject(n.quantizationAnnotation[m],a);return u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c.TensorProto=function(){function i(n){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.dims=f.emptyArray,i.prototype.dataType=0,i.prototype.segment=null,i.prototype.floatData=f.emptyArray,i.prototype.int32Data=f.emptyArray,i.prototype.stringData=f.emptyArray,i.prototype.int64Data=f.emptyArray,i.prototype.name="",i.prototype.docString="",i.prototype.rawData=f.newBuffer([]),i.prototype.externalData=f.emptyArray,i.prototype.dataLocation=0,i.prototype.doubleData=f.emptyArray,i.prototype.uint64Data=f.emptyArray,i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.dims!=null&&n.dims.length){a.uint32(10).fork();for(var u=0;u<n.dims.length;++u)a.int64(n.dims[u]);a.ldelim()}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&a.uint32(16).int32(n.dataType),n.segment!=null&&n.hasOwnProperty("segment")&&d.onnx.TensorProto.Segment.encode(n.segment,a.uint32(26).fork()).ldelim(),n.floatData!=null&&n.floatData.length){for(a.uint32(34).fork(),u=0;u<n.floatData.length;++u)a.float(n.floatData[u]);a.ldelim()}if(n.int32Data!=null&&n.int32Data.length){for(a.uint32(42).fork(),u=0;u<n.int32Data.length;++u)a.int32(n.int32Data[u]);a.ldelim()}if(n.stringData!=null&&n.stringData.length)for(u=0;u<n.stringData.length;++u)a.uint32(50).bytes(n.stringData[u]);if(n.int64Data!=null&&n.int64Data.length){for(a.uint32(58).fork(),u=0;u<n.int64Data.length;++u)a.int64(n.int64Data[u]);a.ldelim()}if(n.name!=null&&n.hasOwnProperty("name")&&a.uint32(66).string(n.name),n.rawData!=null&&n.hasOwnProperty("rawData")&&a.uint32(74).bytes(n.rawData),n.doubleData!=null&&n.doubleData.length){for(a.uint32(82).fork(),u=0;u<n.doubleData.length;++u)a.double(n.doubleData[u]);a.ldelim()}if(n.uint64Data!=null&&n.uint64Data.length){for(a.uint32(90).fork(),u=0;u<n.uint64Data.length;++u)a.uint64(n.uint64Data[u]);a.ldelim()}if(n.docString!=null&&n.hasOwnProperty("docString")&&a.uint32(98).string(n.docString),n.externalData!=null&&n.externalData.length)for(u=0;u<n.externalData.length;++u)d.onnx.StringStringEntryProto.encode(n.externalData[u],a.uint32(106).fork()).ldelim();return n.dataLocation!=null&&n.hasOwnProperty("dataLocation")&&a.uint32(112).int32(n.dataLocation),a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.TensorProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:if(m.dims&&m.dims.length||(m.dims=[]),(7&g)==2)for(var _=n.uint32()+n.pos;n.pos<_;)m.dims.push(n.int64());else m.dims.push(n.int64());break;case 2:m.dataType=n.int32();break;case 3:m.segment=d.onnx.TensorProto.Segment.decode(n,n.uint32());break;case 4:if(m.floatData&&m.floatData.length||(m.floatData=[]),(7&g)==2)for(_=n.uint32()+n.pos;n.pos<_;)m.floatData.push(n.float());else m.floatData.push(n.float());break;case 5:if(m.int32Data&&m.int32Data.length||(m.int32Data=[]),(7&g)==2)for(_=n.uint32()+n.pos;n.pos<_;)m.int32Data.push(n.int32());else m.int32Data.push(n.int32());break;case 6:m.stringData&&m.stringData.length||(m.stringData=[]),m.stringData.push(n.bytes());break;case 7:if(m.int64Data&&m.int64Data.length||(m.int64Data=[]),(7&g)==2)for(_=n.uint32()+n.pos;n.pos<_;)m.int64Data.push(n.int64());else m.int64Data.push(n.int64());break;case 8:m.name=n.string();break;case 12:m.docString=n.string();break;case 9:m.rawData=n.bytes();break;case 13:m.externalData&&m.externalData.length||(m.externalData=[]),m.externalData.push(d.onnx.StringStringEntryProto.decode(n,n.uint32()));break;case 14:m.dataLocation=n.int32();break;case 10:if(m.doubleData&&m.doubleData.length||(m.doubleData=[]),(7&g)==2)for(_=n.uint32()+n.pos;n.pos<_;)m.doubleData.push(n.double());else m.doubleData.push(n.double());break;case 11:if(m.uint64Data&&m.uint64Data.length||(m.uint64Data=[]),(7&g)==2)for(_=n.uint32()+n.pos;n.pos<_;)m.uint64Data.push(n.uint64());else m.uint64Data.push(n.uint64());break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.dims!=null&&n.hasOwnProperty("dims")){if(!Array.isArray(n.dims))return"dims: array expected";for(var a=0;a<n.dims.length;++a)if(!(f.isInteger(n.dims[a])||n.dims[a]&&f.isInteger(n.dims[a].low)&&f.isInteger(n.dims[a].high)))return"dims: integer|Long[] expected"}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&!f.isInteger(n.dataType))return"dataType: integer expected";if(n.segment!=null&&n.hasOwnProperty("segment")&&(u=d.onnx.TensorProto.Segment.verify(n.segment)))return"segment."+u;if(n.floatData!=null&&n.hasOwnProperty("floatData")){if(!Array.isArray(n.floatData))return"floatData: array expected";for(a=0;a<n.floatData.length;++a)if(typeof n.floatData[a]!="number")return"floatData: number[] expected"}if(n.int32Data!=null&&n.hasOwnProperty("int32Data")){if(!Array.isArray(n.int32Data))return"int32Data: array expected";for(a=0;a<n.int32Data.length;++a)if(!f.isInteger(n.int32Data[a]))return"int32Data: integer[] expected"}if(n.stringData!=null&&n.hasOwnProperty("stringData")){if(!Array.isArray(n.stringData))return"stringData: array expected";for(a=0;a<n.stringData.length;++a)if(!(n.stringData[a]&&typeof n.stringData[a].length=="number"||f.isString(n.stringData[a])))return"stringData: buffer[] expected"}if(n.int64Data!=null&&n.hasOwnProperty("int64Data")){if(!Array.isArray(n.int64Data))return"int64Data: array expected";for(a=0;a<n.int64Data.length;++a)if(!(f.isInteger(n.int64Data[a])||n.int64Data[a]&&f.isInteger(n.int64Data[a].low)&&f.isInteger(n.int64Data[a].high)))return"int64Data: integer|Long[] expected"}if(n.name!=null&&n.hasOwnProperty("name")&&!f.isString(n.name))return"name: string expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!f.isString(n.docString))return"docString: string expected";if(n.rawData!=null&&n.hasOwnProperty("rawData")&&!(n.rawData&&typeof n.rawData.length=="number"||f.isString(n.rawData)))return"rawData: buffer expected";if(n.externalData!=null&&n.hasOwnProperty("externalData")){if(!Array.isArray(n.externalData))return"externalData: array expected";for(a=0;a<n.externalData.length;++a){var u;if(u=d.onnx.StringStringEntryProto.verify(n.externalData[a]))return"externalData."+u}}if(n.dataLocation!=null&&n.hasOwnProperty("dataLocation"))switch(n.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:}if(n.doubleData!=null&&n.hasOwnProperty("doubleData")){if(!Array.isArray(n.doubleData))return"doubleData: array expected";for(a=0;a<n.doubleData.length;++a)if(typeof n.doubleData[a]!="number")return"doubleData: number[] expected"}if(n.uint64Data!=null&&n.hasOwnProperty("uint64Data")){if(!Array.isArray(n.uint64Data))return"uint64Data: array expected";for(a=0;a<n.uint64Data.length;++a)if(!(f.isInteger(n.uint64Data[a])||n.uint64Data[a]&&f.isInteger(n.uint64Data[a].low)&&f.isInteger(n.uint64Data[a].high)))return"uint64Data: integer|Long[] expected"}return null},i.fromObject=function(n){if(n instanceof d.onnx.TensorProto)return n;var a=new d.onnx.TensorProto;if(n.dims){if(!Array.isArray(n.dims))throw TypeError(".onnx.TensorProto.dims: array expected");a.dims=[];for(var u=0;u<n.dims.length;++u)f.Long?(a.dims[u]=f.Long.fromValue(n.dims[u])).unsigned=!1:typeof n.dims[u]=="string"?a.dims[u]=parseInt(n.dims[u],10):typeof n.dims[u]=="number"?a.dims[u]=n.dims[u]:typeof n.dims[u]=="object"&&(a.dims[u]=new f.LongBits(n.dims[u].low>>>0,n.dims[u].high>>>0).toNumber())}if(n.dataType!=null&&(a.dataType=0|n.dataType),n.segment!=null){if(typeof n.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");a.segment=d.onnx.TensorProto.Segment.fromObject(n.segment)}if(n.floatData){if(!Array.isArray(n.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");for(a.floatData=[],u=0;u<n.floatData.length;++u)a.floatData[u]=Number(n.floatData[u])}if(n.int32Data){if(!Array.isArray(n.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");for(a.int32Data=[],u=0;u<n.int32Data.length;++u)a.int32Data[u]=0|n.int32Data[u]}if(n.stringData){if(!Array.isArray(n.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");for(a.stringData=[],u=0;u<n.stringData.length;++u)typeof n.stringData[u]=="string"?f.base64.decode(n.stringData[u],a.stringData[u]=f.newBuffer(f.base64.length(n.stringData[u])),0):n.stringData[u].length&&(a.stringData[u]=n.stringData[u])}if(n.int64Data){if(!Array.isArray(n.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");for(a.int64Data=[],u=0;u<n.int64Data.length;++u)f.Long?(a.int64Data[u]=f.Long.fromValue(n.int64Data[u])).unsigned=!1:typeof n.int64Data[u]=="string"?a.int64Data[u]=parseInt(n.int64Data[u],10):typeof n.int64Data[u]=="number"?a.int64Data[u]=n.int64Data[u]:typeof n.int64Data[u]=="object"&&(a.int64Data[u]=new f.LongBits(n.int64Data[u].low>>>0,n.int64Data[u].high>>>0).toNumber())}if(n.name!=null&&(a.name=String(n.name)),n.docString!=null&&(a.docString=String(n.docString)),n.rawData!=null&&(typeof n.rawData=="string"?f.base64.decode(n.rawData,a.rawData=f.newBuffer(f.base64.length(n.rawData)),0):n.rawData.length&&(a.rawData=n.rawData)),n.externalData){if(!Array.isArray(n.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");for(a.externalData=[],u=0;u<n.externalData.length;++u){if(typeof n.externalData[u]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");a.externalData[u]=d.onnx.StringStringEntryProto.fromObject(n.externalData[u])}}switch(n.dataLocation){case"DEFAULT":case 0:a.dataLocation=0;break;case"EXTERNAL":case 1:a.dataLocation=1}if(n.doubleData){if(!Array.isArray(n.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");for(a.doubleData=[],u=0;u<n.doubleData.length;++u)a.doubleData[u]=Number(n.doubleData[u])}if(n.uint64Data){if(!Array.isArray(n.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");for(a.uint64Data=[],u=0;u<n.uint64Data.length;++u)f.Long?(a.uint64Data[u]=f.Long.fromValue(n.uint64Data[u])).unsigned=!0:typeof n.uint64Data[u]=="string"?a.uint64Data[u]=parseInt(n.uint64Data[u],10):typeof n.uint64Data[u]=="number"?a.uint64Data[u]=n.uint64Data[u]:typeof n.uint64Data[u]=="object"&&(a.uint64Data[u]=new f.LongBits(n.uint64Data[u].low>>>0,n.uint64Data[u].high>>>0).toNumber(!0))}return a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.dims=[],u.floatData=[],u.int32Data=[],u.stringData=[],u.int64Data=[],u.doubleData=[],u.uint64Data=[],u.externalData=[]),a.defaults&&(u.dataType=0,u.segment=null,u.name="",a.bytes===String?u.rawData="":(u.rawData=[],a.bytes!==Array&&(u.rawData=f.newBuffer(u.rawData))),u.docString="",u.dataLocation=a.enums===String?"DEFAULT":0),n.dims&&n.dims.length){u.dims=[];for(var m=0;m<n.dims.length;++m)typeof n.dims[m]=="number"?u.dims[m]=a.longs===String?String(n.dims[m]):n.dims[m]:u.dims[m]=a.longs===String?f.Long.prototype.toString.call(n.dims[m]):a.longs===Number?new f.LongBits(n.dims[m].low>>>0,n.dims[m].high>>>0).toNumber():n.dims[m]}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&(u.dataType=n.dataType),n.segment!=null&&n.hasOwnProperty("segment")&&(u.segment=d.onnx.TensorProto.Segment.toObject(n.segment,a)),n.floatData&&n.floatData.length)for(u.floatData=[],m=0;m<n.floatData.length;++m)u.floatData[m]=a.json&&!isFinite(n.floatData[m])?String(n.floatData[m]):n.floatData[m];if(n.int32Data&&n.int32Data.length)for(u.int32Data=[],m=0;m<n.int32Data.length;++m)u.int32Data[m]=n.int32Data[m];if(n.stringData&&n.stringData.length)for(u.stringData=[],m=0;m<n.stringData.length;++m)u.stringData[m]=a.bytes===String?f.base64.encode(n.stringData[m],0,n.stringData[m].length):a.bytes===Array?Array.prototype.slice.call(n.stringData[m]):n.stringData[m];if(n.int64Data&&n.int64Data.length)for(u.int64Data=[],m=0;m<n.int64Data.length;++m)typeof n.int64Data[m]=="number"?u.int64Data[m]=a.longs===String?String(n.int64Data[m]):n.int64Data[m]:u.int64Data[m]=a.longs===String?f.Long.prototype.toString.call(n.int64Data[m]):a.longs===Number?new f.LongBits(n.int64Data[m].low>>>0,n.int64Data[m].high>>>0).toNumber():n.int64Data[m];if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.rawData!=null&&n.hasOwnProperty("rawData")&&(u.rawData=a.bytes===String?f.base64.encode(n.rawData,0,n.rawData.length):a.bytes===Array?Array.prototype.slice.call(n.rawData):n.rawData),n.doubleData&&n.doubleData.length)for(u.doubleData=[],m=0;m<n.doubleData.length;++m)u.doubleData[m]=a.json&&!isFinite(n.doubleData[m])?String(n.doubleData[m]):n.doubleData[m];if(n.uint64Data&&n.uint64Data.length)for(u.uint64Data=[],m=0;m<n.uint64Data.length;++m)typeof n.uint64Data[m]=="number"?u.uint64Data[m]=a.longs===String?String(n.uint64Data[m]):n.uint64Data[m]:u.uint64Data[m]=a.longs===String?f.Long.prototype.toString.call(n.uint64Data[m]):a.longs===Number?new f.LongBits(n.uint64Data[m].low>>>0,n.uint64Data[m].high>>>0).toNumber(!0):n.uint64Data[m];if(n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.externalData&&n.externalData.length)for(u.externalData=[],m=0;m<n.externalData.length;++m)u.externalData[m]=d.onnx.StringStringEntryProto.toObject(n.externalData[m],a);return n.dataLocation!=null&&n.hasOwnProperty("dataLocation")&&(u.dataLocation=a.enums===String?d.onnx.TensorProto.DataLocation[n.dataLocation]:n.dataLocation),u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i.DataType=function(){var n={},a=Object.create(n);return a[n[0]="UNDEFINED"]=0,a[n[1]="FLOAT"]=1,a[n[2]="UINT8"]=2,a[n[3]="INT8"]=3,a[n[4]="UINT16"]=4,a[n[5]="INT16"]=5,a[n[6]="INT32"]=6,a[n[7]="INT64"]=7,a[n[8]="STRING"]=8,a[n[9]="BOOL"]=9,a[n[10]="FLOAT16"]=10,a[n[11]="DOUBLE"]=11,a[n[12]="UINT32"]=12,a[n[13]="UINT64"]=13,a[n[14]="COMPLEX64"]=14,a[n[15]="COMPLEX128"]=15,a[n[16]="BFLOAT16"]=16,a}(),i.Segment=function(){function n(a){if(a)for(var u=Object.keys(a),m=0;m<u.length;++m)a[u[m]]!=null&&(this[u[m]]=a[u[m]])}return n.prototype.begin=f.Long?f.Long.fromBits(0,0,!1):0,n.prototype.end=f.Long?f.Long.fromBits(0,0,!1):0,n.create=function(a){return new n(a)},n.encode=function(a,u){return u||(u=p.create()),a.begin!=null&&a.hasOwnProperty("begin")&&u.uint32(8).int64(a.begin),a.end!=null&&a.hasOwnProperty("end")&&u.uint32(16).int64(a.end),u},n.encodeDelimited=function(a,u){return this.encode(a,u).ldelim()},n.decode=function(a,u){a instanceof h||(a=h.create(a));for(var m=u===void 0?a.len:a.pos+u,g=new d.onnx.TensorProto.Segment;a.pos<m;){var _=a.uint32();switch(_>>>3){case 1:g.begin=a.int64();break;case 2:g.end=a.int64();break;default:a.skipType(7&_)}}return g},n.decodeDelimited=function(a){return a instanceof h||(a=new h(a)),this.decode(a,a.uint32())},n.verify=function(a){return typeof a!="object"||a===null?"object expected":a.begin!=null&&a.hasOwnProperty("begin")&&!(f.isInteger(a.begin)||a.begin&&f.isInteger(a.begin.low)&&f.isInteger(a.begin.high))?"begin: integer|Long expected":a.end!=null&&a.hasOwnProperty("end")&&!(f.isInteger(a.end)||a.end&&f.isInteger(a.end.low)&&f.isInteger(a.end.high))?"end: integer|Long expected":null},n.fromObject=function(a){if(a instanceof d.onnx.TensorProto.Segment)return a;var u=new d.onnx.TensorProto.Segment;return a.begin!=null&&(f.Long?(u.begin=f.Long.fromValue(a.begin)).unsigned=!1:typeof a.begin=="string"?u.begin=parseInt(a.begin,10):typeof a.begin=="number"?u.begin=a.begin:typeof a.begin=="object"&&(u.begin=new f.LongBits(a.begin.low>>>0,a.begin.high>>>0).toNumber())),a.end!=null&&(f.Long?(u.end=f.Long.fromValue(a.end)).unsigned=!1:typeof a.end=="string"?u.end=parseInt(a.end,10):typeof a.end=="number"?u.end=a.end:typeof a.end=="object"&&(u.end=new f.LongBits(a.end.low>>>0,a.end.high>>>0).toNumber())),u},n.toObject=function(a,u){u||(u={});var m={};if(u.defaults){if(f.Long){var g=new f.Long(0,0,!1);m.begin=u.longs===String?g.toString():u.longs===Number?g.toNumber():g}else m.begin=u.longs===String?"0":0;f.Long?(g=new f.Long(0,0,!1),m.end=u.longs===String?g.toString():u.longs===Number?g.toNumber():g):m.end=u.longs===String?"0":0}return a.begin!=null&&a.hasOwnProperty("begin")&&(typeof a.begin=="number"?m.begin=u.longs===String?String(a.begin):a.begin:m.begin=u.longs===String?f.Long.prototype.toString.call(a.begin):u.longs===Number?new f.LongBits(a.begin.low>>>0,a.begin.high>>>0).toNumber():a.begin),a.end!=null&&a.hasOwnProperty("end")&&(typeof a.end=="number"?m.end=u.longs===String?String(a.end):a.end:m.end=u.longs===String?f.Long.prototype.toString.call(a.end):u.longs===Number?new f.LongBits(a.end.low>>>0,a.end.high>>>0).toNumber():a.end),m},n.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},n}(),i.DataLocation=function(){var n={},a=Object.create(n);return a[n[0]="DEFAULT"]=0,a[n[1]="EXTERNAL"]=1,a}(),i}(),c.TensorShapeProto=function(){function i(n){if(this.dim=[],n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.dim=f.emptyArray,i.create=function(n){return new i(n)},i.encode=function(n,a){if(a||(a=p.create()),n.dim!=null&&n.dim.length)for(var u=0;u<n.dim.length;++u)d.onnx.TensorShapeProto.Dimension.encode(n.dim[u],a.uint32(10).fork()).ldelim();return a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.TensorShapeProto;n.pos<u;){var g=n.uint32();g>>>3==1?(m.dim&&m.dim.length||(m.dim=[]),m.dim.push(d.onnx.TensorShapeProto.Dimension.decode(n,n.uint32()))):n.skipType(7&g)}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.dim!=null&&n.hasOwnProperty("dim")){if(!Array.isArray(n.dim))return"dim: array expected";for(var a=0;a<n.dim.length;++a){var u=d.onnx.TensorShapeProto.Dimension.verify(n.dim[a]);if(u)return"dim."+u}}return null},i.fromObject=function(n){if(n instanceof d.onnx.TensorShapeProto)return n;var a=new d.onnx.TensorShapeProto;if(n.dim){if(!Array.isArray(n.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");a.dim=[];for(var u=0;u<n.dim.length;++u){if(typeof n.dim[u]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");a.dim[u]=d.onnx.TensorShapeProto.Dimension.fromObject(n.dim[u])}}return a},i.toObject=function(n,a){a||(a={});var u={};if((a.arrays||a.defaults)&&(u.dim=[]),n.dim&&n.dim.length){u.dim=[];for(var m=0;m<n.dim.length;++m)u.dim[m]=d.onnx.TensorShapeProto.Dimension.toObject(n.dim[m],a)}return u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i.Dimension=function(){function n(u){if(u)for(var m=Object.keys(u),g=0;g<m.length;++g)u[m[g]]!=null&&(this[m[g]]=u[m[g]])}var a;return n.prototype.dimValue=f.Long?f.Long.fromBits(0,0,!1):0,n.prototype.dimParam="",n.prototype.denotation="",Object.defineProperty(n.prototype,"value",{get:f.oneOfGetter(a=["dimValue","dimParam"]),set:f.oneOfSetter(a)}),n.create=function(u){return new n(u)},n.encode=function(u,m){return m||(m=p.create()),u.dimValue!=null&&u.hasOwnProperty("dimValue")&&m.uint32(8).int64(u.dimValue),u.dimParam!=null&&u.hasOwnProperty("dimParam")&&m.uint32(18).string(u.dimParam),u.denotation!=null&&u.hasOwnProperty("denotation")&&m.uint32(26).string(u.denotation),m},n.encodeDelimited=function(u,m){return this.encode(u,m).ldelim()},n.decode=function(u,m){u instanceof h||(u=h.create(u));for(var g=m===void 0?u.len:u.pos+m,_=new d.onnx.TensorShapeProto.Dimension;u.pos<g;){var b=u.uint32();switch(b>>>3){case 1:_.dimValue=u.int64();break;case 2:_.dimParam=u.string();break;case 3:_.denotation=u.string();break;default:u.skipType(7&b)}}return _},n.decodeDelimited=function(u){return u instanceof h||(u=new h(u)),this.decode(u,u.uint32())},n.verify=function(u){if(typeof u!="object"||u===null)return"object expected";var m={};if(u.dimValue!=null&&u.hasOwnProperty("dimValue")&&(m.value=1,!(f.isInteger(u.dimValue)||u.dimValue&&f.isInteger(u.dimValue.low)&&f.isInteger(u.dimValue.high))))return"dimValue: integer|Long expected";if(u.dimParam!=null&&u.hasOwnProperty("dimParam")){if(m.value===1)return"value: multiple values";if(m.value=1,!f.isString(u.dimParam))return"dimParam: string expected"}return u.denotation!=null&&u.hasOwnProperty("denotation")&&!f.isString(u.denotation)?"denotation: string expected":null},n.fromObject=function(u){if(u instanceof d.onnx.TensorShapeProto.Dimension)return u;var m=new d.onnx.TensorShapeProto.Dimension;return u.dimValue!=null&&(f.Long?(m.dimValue=f.Long.fromValue(u.dimValue)).unsigned=!1:typeof u.dimValue=="string"?m.dimValue=parseInt(u.dimValue,10):typeof u.dimValue=="number"?m.dimValue=u.dimValue:typeof u.dimValue=="object"&&(m.dimValue=new f.LongBits(u.dimValue.low>>>0,u.dimValue.high>>>0).toNumber())),u.dimParam!=null&&(m.dimParam=String(u.dimParam)),u.denotation!=null&&(m.denotation=String(u.denotation)),m},n.toObject=function(u,m){m||(m={});var g={};return m.defaults&&(g.denotation=""),u.dimValue!=null&&u.hasOwnProperty("dimValue")&&(typeof u.dimValue=="number"?g.dimValue=m.longs===String?String(u.dimValue):u.dimValue:g.dimValue=m.longs===String?f.Long.prototype.toString.call(u.dimValue):m.longs===Number?new f.LongBits(u.dimValue.low>>>0,u.dimValue.high>>>0).toNumber():u.dimValue,m.oneofs&&(g.value="dimValue")),u.dimParam!=null&&u.hasOwnProperty("dimParam")&&(g.dimParam=u.dimParam,m.oneofs&&(g.value="dimParam")),u.denotation!=null&&u.hasOwnProperty("denotation")&&(g.denotation=u.denotation),g},n.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},n}(),i}(),c.TypeProto=function(){function i(a){if(a)for(var u=Object.keys(a),m=0;m<u.length;++m)a[u[m]]!=null&&(this[u[m]]=a[u[m]])}var n;return i.prototype.tensorType=null,i.prototype.denotation="",Object.defineProperty(i.prototype,"value",{get:f.oneOfGetter(n=["tensorType"]),set:f.oneOfSetter(n)}),i.create=function(a){return new i(a)},i.encode=function(a,u){return u||(u=p.create()),a.tensorType!=null&&a.hasOwnProperty("tensorType")&&d.onnx.TypeProto.Tensor.encode(a.tensorType,u.uint32(10).fork()).ldelim(),a.denotation!=null&&a.hasOwnProperty("denotation")&&u.uint32(50).string(a.denotation),u},i.encodeDelimited=function(a,u){return this.encode(a,u).ldelim()},i.decode=function(a,u){a instanceof h||(a=h.create(a));for(var m=u===void 0?a.len:a.pos+u,g=new d.onnx.TypeProto;a.pos<m;){var _=a.uint32();switch(_>>>3){case 1:g.tensorType=d.onnx.TypeProto.Tensor.decode(a,a.uint32());break;case 6:g.denotation=a.string();break;default:a.skipType(7&_)}}return g},i.decodeDelimited=function(a){return a instanceof h||(a=new h(a)),this.decode(a,a.uint32())},i.verify=function(a){if(typeof a!="object"||a===null)return"object expected";if(a.tensorType!=null&&a.hasOwnProperty("tensorType")){var u=d.onnx.TypeProto.Tensor.verify(a.tensorType);if(u)return"tensorType."+u}return a.denotation!=null&&a.hasOwnProperty("denotation")&&!f.isString(a.denotation)?"denotation: string expected":null},i.fromObject=function(a){if(a instanceof d.onnx.TypeProto)return a;var u=new d.onnx.TypeProto;if(a.tensorType!=null){if(typeof a.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");u.tensorType=d.onnx.TypeProto.Tensor.fromObject(a.tensorType)}return a.denotation!=null&&(u.denotation=String(a.denotation)),u},i.toObject=function(a,u){u||(u={});var m={};return u.defaults&&(m.denotation=""),a.tensorType!=null&&a.hasOwnProperty("tensorType")&&(m.tensorType=d.onnx.TypeProto.Tensor.toObject(a.tensorType,u),u.oneofs&&(m.value="tensorType")),a.denotation!=null&&a.hasOwnProperty("denotation")&&(m.denotation=a.denotation),m},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i.Tensor=function(){function a(u){if(u)for(var m=Object.keys(u),g=0;g<m.length;++g)u[m[g]]!=null&&(this[m[g]]=u[m[g]])}return a.prototype.elemType=0,a.prototype.shape=null,a.create=function(u){return new a(u)},a.encode=function(u,m){return m||(m=p.create()),u.elemType!=null&&u.hasOwnProperty("elemType")&&m.uint32(8).int32(u.elemType),u.shape!=null&&u.hasOwnProperty("shape")&&d.onnx.TensorShapeProto.encode(u.shape,m.uint32(18).fork()).ldelim(),m},a.encodeDelimited=function(u,m){return this.encode(u,m).ldelim()},a.decode=function(u,m){u instanceof h||(u=h.create(u));for(var g=m===void 0?u.len:u.pos+m,_=new d.onnx.TypeProto.Tensor;u.pos<g;){var b=u.uint32();switch(b>>>3){case 1:_.elemType=u.int32();break;case 2:_.shape=d.onnx.TensorShapeProto.decode(u,u.uint32());break;default:u.skipType(7&b)}}return _},a.decodeDelimited=function(u){return u instanceof h||(u=new h(u)),this.decode(u,u.uint32())},a.verify=function(u){if(typeof u!="object"||u===null)return"object expected";if(u.elemType!=null&&u.hasOwnProperty("elemType")&&!f.isInteger(u.elemType))return"elemType: integer expected";if(u.shape!=null&&u.hasOwnProperty("shape")){var m=d.onnx.TensorShapeProto.verify(u.shape);if(m)return"shape."+m}return null},a.fromObject=function(u){if(u instanceof d.onnx.TypeProto.Tensor)return u;var m=new d.onnx.TypeProto.Tensor;if(u.elemType!=null&&(m.elemType=0|u.elemType),u.shape!=null){if(typeof u.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");m.shape=d.onnx.TensorShapeProto.fromObject(u.shape)}return m},a.toObject=function(u,m){m||(m={});var g={};return m.defaults&&(g.elemType=0,g.shape=null),u.elemType!=null&&u.hasOwnProperty("elemType")&&(g.elemType=u.elemType),u.shape!=null&&u.hasOwnProperty("shape")&&(g.shape=d.onnx.TensorShapeProto.toObject(u.shape,m)),g},a.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},a}(),i}(),c.OperatorSetIdProto=function(){function i(n){if(n)for(var a=Object.keys(n),u=0;u<a.length;++u)n[a[u]]!=null&&(this[a[u]]=n[a[u]])}return i.prototype.domain="",i.prototype.version=f.Long?f.Long.fromBits(0,0,!1):0,i.create=function(n){return new i(n)},i.encode=function(n,a){return a||(a=p.create()),n.domain!=null&&n.hasOwnProperty("domain")&&a.uint32(10).string(n.domain),n.version!=null&&n.hasOwnProperty("version")&&a.uint32(16).int64(n.version),a},i.encodeDelimited=function(n,a){return this.encode(n,a).ldelim()},i.decode=function(n,a){n instanceof h||(n=h.create(n));for(var u=a===void 0?n.len:n.pos+a,m=new d.onnx.OperatorSetIdProto;n.pos<u;){var g=n.uint32();switch(g>>>3){case 1:m.domain=n.string();break;case 2:m.version=n.int64();break;default:n.skipType(7&g)}}return m},i.decodeDelimited=function(n){return n instanceof h||(n=new h(n)),this.decode(n,n.uint32())},i.verify=function(n){return typeof n!="object"||n===null?"object expected":n.domain!=null&&n.hasOwnProperty("domain")&&!f.isString(n.domain)?"domain: string expected":n.version!=null&&n.hasOwnProperty("version")&&!(f.isInteger(n.version)||n.version&&f.isInteger(n.version.low)&&f.isInteger(n.version.high))?"version: integer|Long expected":null},i.fromObject=function(n){if(n instanceof d.onnx.OperatorSetIdProto)return n;var a=new d.onnx.OperatorSetIdProto;return n.domain!=null&&(a.domain=String(n.domain)),n.version!=null&&(f.Long?(a.version=f.Long.fromValue(n.version)).unsigned=!1:typeof n.version=="string"?a.version=parseInt(n.version,10):typeof n.version=="number"?a.version=n.version:typeof n.version=="object"&&(a.version=new f.LongBits(n.version.low>>>0,n.version.high>>>0).toNumber())),a},i.toObject=function(n,a){a||(a={});var u={};if(a.defaults)if(u.domain="",f.Long){var m=new f.Long(0,0,!1);u.version=a.longs===String?m.toString():a.longs===Number?m.toNumber():m}else u.version=a.longs===String?"0":0;return n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),n.version!=null&&n.hasOwnProperty("version")&&(typeof n.version=="number"?u.version=a.longs===String?String(n.version):n.version:u.version=a.longs===String?f.Long.prototype.toString.call(n.version):a.longs===Number?new f.LongBits(n.version.low>>>0,n.version.high>>>0).toNumber():n.version),u},i.prototype.toJSON=function(){return this.constructor.toObject(this,l.util.toJSONOptions)},i}(),c),s.exports=d},2100:(s,e,t)=>{s.exports=t(9482)},9482:(s,e,t)=>{var r=e;function o(){r.util._configure(),r.Writer._configure(r.BufferWriter),r.Reader._configure(r.BufferReader)}r.build="minimal",r.Writer=t(1173),r.BufferWriter=t(3155),r.Reader=t(1408),r.BufferReader=t(593),r.util=t(9693),r.rpc=t(5994),r.roots=t(5054),r.configure=o,o()},1408:(s,e,t)=>{s.exports=p;var r,o=t(9693),c=o.LongBits,l=o.utf8;function h(m,g){return RangeError("index out of range: "+m.pos+" + "+(g||1)+" > "+m.len)}function p(m){this.buf=m,this.pos=0,this.len=m.length}var f,d=typeof Uint8Array<"u"?function(m){if(m instanceof Uint8Array||Array.isArray(m))return new p(m);throw Error("illegal buffer")}:function(m){if(Array.isArray(m))return new p(m);throw Error("illegal buffer")},i=function(){return o.Buffer?function(m){return(p.create=function(g){return o.Buffer.isBuffer(g)?new r(g):d(g)})(m)}:d};function n(){var m=new c(0,0),g=0;if(!(this.len-this.pos>4)){for(;g<3;++g){if(this.pos>=this.len)throw h(this);if(m.lo=(m.lo|(127&this.buf[this.pos])<<7*g)>>>0,this.buf[this.pos++]<128)return m}return m.lo=(m.lo|(127&this.buf[this.pos++])<<7*g)>>>0,m}for(;g<4;++g)if(m.lo=(m.lo|(127&this.buf[this.pos])<<7*g)>>>0,this.buf[this.pos++]<128)return m;if(m.lo=(m.lo|(127&this.buf[this.pos])<<28)>>>0,m.hi=(m.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return m;if(g=0,this.len-this.pos>4){for(;g<5;++g)if(m.hi=(m.hi|(127&this.buf[this.pos])<<7*g+3)>>>0,this.buf[this.pos++]<128)return m}else for(;g<5;++g){if(this.pos>=this.len)throw h(this);if(m.hi=(m.hi|(127&this.buf[this.pos])<<7*g+3)>>>0,this.buf[this.pos++]<128)return m}throw Error("invalid varint encoding")}function a(m,g){return(m[g-4]|m[g-3]<<8|m[g-2]<<16|m[g-1]<<24)>>>0}function u(){if(this.pos+8>this.len)throw h(this,8);return new c(a(this.buf,this.pos+=4),a(this.buf,this.pos+=4))}p.create=i(),p.prototype._slice=o.Array.prototype.subarray||o.Array.prototype.slice,p.prototype.uint32=(f=4294967295,function(){if(f=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(f=(f|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)||(f=(f|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)||(f=(f|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)||(f=(f|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128))return f;if((this.pos+=5)>this.len)throw this.pos=this.len,h(this,10);return f}),p.prototype.int32=function(){return 0|this.uint32()},p.prototype.sint32=function(){var m=this.uint32();return m>>>1^-(1&m)|0},p.prototype.bool=function(){return this.uint32()!==0},p.prototype.fixed32=function(){if(this.pos+4>this.len)throw h(this,4);return a(this.buf,this.pos+=4)},p.prototype.sfixed32=function(){if(this.pos+4>this.len)throw h(this,4);return 0|a(this.buf,this.pos+=4)},p.prototype.float=function(){if(this.pos+4>this.len)throw h(this,4);var m=o.float.readFloatLE(this.buf,this.pos);return this.pos+=4,m},p.prototype.double=function(){if(this.pos+8>this.len)throw h(this,4);var m=o.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,m},p.prototype.bytes=function(){var m=this.uint32(),g=this.pos,_=this.pos+m;if(_>this.len)throw h(this,m);return this.pos+=m,Array.isArray(this.buf)?this.buf.slice(g,_):g===_?new this.buf.constructor(0):this._slice.call(this.buf,g,_)},p.prototype.string=function(){var m=this.bytes();return l.read(m,0,m.length)},p.prototype.skip=function(m){if(typeof m=="number"){if(this.pos+m>this.len)throw h(this,m);this.pos+=m}else do if(this.pos>=this.len)throw h(this);while(128&this.buf[this.pos++]);return this},p.prototype.skipType=function(m){switch(m){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(m=7&this.uint32())!=4;)this.skipType(m);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+m+" at offset "+this.pos)}return this},p._configure=function(m){r=m,p.create=i(),r._configure();var g=o.Long?"toLong":"toNumber";o.merge(p.prototype,{int64:function(){return n.call(this)[g](!1)},uint64:function(){return n.call(this)[g](!0)},sint64:function(){return n.call(this).zzDecode()[g](!1)},fixed64:function(){return u.call(this)[g](!0)},sfixed64:function(){return u.call(this)[g](!1)}})}},593:(s,e,t)=>{s.exports=c;var r=t(1408);(c.prototype=Object.create(r.prototype)).constructor=c;var o=t(9693);function c(l){r.call(this,l)}c._configure=function(){o.Buffer&&(c.prototype._slice=o.Buffer.prototype.slice)},c.prototype.string=function(){var l=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+l,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+l,this.len))},c._configure()},5054:s=>{s.exports={}},5994:(s,e,t)=>{e.Service=t(7948)},7948:(s,e,t)=>{s.exports=o;var r=t(9693);function o(c,l,h){if(typeof c!="function")throw TypeError("rpcImpl must be a function");r.EventEmitter.call(this),this.rpcImpl=c,this.requestDelimited=!!l,this.responseDelimited=!!h}(o.prototype=Object.create(r.EventEmitter.prototype)).constructor=o,o.prototype.rpcCall=function c(l,h,p,f,d){if(!f)throw TypeError("request must be specified");var i=this;if(!d)return r.asPromise(c,i,l,h,p,f);if(i.rpcImpl)try{return i.rpcImpl(l,h[i.requestDelimited?"encodeDelimited":"encode"](f).finish(),function(n,a){if(n)return i.emit("error",n,l),d(n);if(a!==null){if(!(a instanceof p))try{a=p[i.responseDelimited?"decodeDelimited":"decode"](a)}catch(u){return i.emit("error",u,l),d(u)}return i.emit("data",a,l),d(null,a)}i.end(!0)})}catch(n){return i.emit("error",n,l),void setTimeout(function(){d(n)},0)}else setTimeout(function(){d(Error("already ended"))},0)},o.prototype.end=function(c){return this.rpcImpl&&(c||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},1945:(s,e,t)=>{s.exports=o;var r=t(9693);function o(p,f){this.lo=p>>>0,this.hi=f>>>0}var c=o.zero=new o(0,0);c.toNumber=function(){return 0},c.zzEncode=c.zzDecode=function(){return this},c.length=function(){return 1};var l=o.zeroHash="\0\0\0\0\0\0\0\0";o.fromNumber=function(p){if(p===0)return c;var f=p<0;f&&(p=-p);var d=p>>>0,i=(p-d)/4294967296>>>0;return f&&(i=~i>>>0,d=~d>>>0,++d>4294967295&&(d=0,++i>4294967295&&(i=0))),new o(d,i)},o.from=function(p){if(typeof p=="number")return o.fromNumber(p);if(r.isString(p)){if(!r.Long)return o.fromNumber(parseInt(p,10));p=r.Long.fromString(p)}return p.low||p.high?new o(p.low>>>0,p.high>>>0):c},o.prototype.toNumber=function(p){if(!p&&this.hi>>>31){var f=1+~this.lo>>>0,d=~this.hi>>>0;return f||(d=d+1>>>0),-(f+4294967296*d)}return this.lo+4294967296*this.hi},o.prototype.toLong=function(p){return r.Long?new r.Long(0|this.lo,0|this.hi,!!p):{low:0|this.lo,high:0|this.hi,unsigned:!!p}};var h=String.prototype.charCodeAt;o.fromHash=function(p){return p===l?c:new o((h.call(p,0)|h.call(p,1)<<8|h.call(p,2)<<16|h.call(p,3)<<24)>>>0,(h.call(p,4)|h.call(p,5)<<8|h.call(p,6)<<16|h.call(p,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var p=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^p)>>>0,this.lo=(this.lo<<1^p)>>>0,this},o.prototype.zzDecode=function(){var p=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^p)>>>0,this.hi=(this.hi>>>1^p)>>>0,this},o.prototype.length=function(){var p=this.lo,f=(this.lo>>>28|this.hi<<4)>>>0,d=this.hi>>>24;return d===0?f===0?p<16384?p<128?1:2:p<2097152?3:4:f<16384?f<128?5:6:f<2097152?7:8:d<128?9:10}},9693:function(s,e,t){var r=e;function o(l,h,p){for(var f=Object.keys(h),d=0;d<f.length;++d)l[f[d]]!==void 0&&p||(l[f[d]]=h[f[d]]);return l}function c(l){function h(p,f){if(!(this instanceof h))return new h(p,f);Object.defineProperty(this,"message",{get:function(){return p}}),Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:new Error().stack||""}),f&&o(this,f)}return(h.prototype=Object.create(Error.prototype)).constructor=h,Object.defineProperty(h.prototype,"name",{get:function(){return l}}),h.prototype.toString=function(){return this.name+": "+this.message},h}r.asPromise=t(4537),r.base64=t(7419),r.EventEmitter=t(9211),r.float=t(945),r.inquire=t(7199),r.utf8=t(4997),r.pool=t(6662),r.LongBits=t(1945),r.isNode=!!(t.g!==void 0&&t.g&&t.g.process&&t.g.process.versions&&t.g.process.versions.node),r.global=r.isNode&&t.g||typeof window<"u"&&window||typeof self<"u"&&self||this,r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isInteger=Number.isInteger||function(l){return typeof l=="number"&&isFinite(l)&&Math.floor(l)===l},r.isString=function(l){return typeof l=="string"||l instanceof String},r.isObject=function(l){return l&&typeof l=="object"},r.isset=r.isSet=function(l,h){var p=l[h];return!(p==null||!l.hasOwnProperty(h))&&(typeof p!="object"||(Array.isArray(p)?p.length:Object.keys(p).length)>0)},r.Buffer=function(){try{var l=r.inquire("buffer").Buffer;return l.prototype.utf8Write?l:null}catch{return null}}(),r._Buffer_from=null,r._Buffer_allocUnsafe=null,r.newBuffer=function(l){return typeof l=="number"?r.Buffer?r._Buffer_allocUnsafe(l):new r.Array(l):r.Buffer?r._Buffer_from(l):typeof Uint8Array>"u"?l:new Uint8Array(l)},r.Array=typeof Uint8Array<"u"?Uint8Array:Array,r.Long=r.global.dcodeIO&&r.global.dcodeIO.Long||r.global.Long||r.inquire("long"),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(l){return l?r.LongBits.from(l).toHash():r.LongBits.zeroHash},r.longFromHash=function(l,h){var p=r.LongBits.fromHash(l);return r.Long?r.Long.fromBits(p.lo,p.hi,h):p.toNumber(!!h)},r.merge=o,r.lcFirst=function(l){return l.charAt(0).toLowerCase()+l.substring(1)},r.newError=c,r.ProtocolError=c("ProtocolError"),r.oneOfGetter=function(l){for(var h={},p=0;p<l.length;++p)h[l[p]]=1;return function(){for(var f=Object.keys(this),d=f.length-1;d>-1;--d)if(h[f[d]]===1&&this[f[d]]!==void 0&&this[f[d]]!==null)return f[d]}},r.oneOfSetter=function(l){return function(h){for(var p=0;p<l.length;++p)l[p]!==h&&delete this[l[p]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r._configure=function(){var l=r.Buffer;l?(r._Buffer_from=l.from!==Uint8Array.from&&l.from||function(h,p){return new l(h,p)},r._Buffer_allocUnsafe=l.allocUnsafe||function(h){return new l(h)}):r._Buffer_from=r._Buffer_allocUnsafe=null}},1173:(s,e,t)=>{s.exports=i;var r,o=t(9693),c=o.LongBits,l=o.base64,h=o.utf8;function p(b,y,v){this.fn=b,this.len=y,this.next=void 0,this.val=v}function f(){}function d(b){this.head=b.head,this.tail=b.tail,this.len=b.len,this.next=b.states}function i(){this.len=0,this.head=new p(f,0,0),this.tail=this.head,this.states=null}var n=function(){return o.Buffer?function(){return(i.create=function(){return new r})()}:function(){return new i}};function a(b,y,v){y[v]=255&b}function u(b,y){this.len=b,this.next=void 0,this.val=y}function m(b,y,v){for(;b.hi;)y[v++]=127&b.lo|128,b.lo=(b.lo>>>7|b.hi<<25)>>>0,b.hi>>>=7;for(;b.lo>127;)y[v++]=127&b.lo|128,b.lo=b.lo>>>7;y[v++]=b.lo}function g(b,y,v){y[v]=255&b,y[v+1]=b>>>8&255,y[v+2]=b>>>16&255,y[v+3]=b>>>24}i.create=n(),i.alloc=function(b){return new o.Array(b)},o.Array!==Array&&(i.alloc=o.pool(i.alloc,o.Array.prototype.subarray)),i.prototype._push=function(b,y,v){return this.tail=this.tail.next=new p(b,y,v),this.len+=y,this},u.prototype=Object.create(p.prototype),u.prototype.fn=function(b,y,v){for(;b>127;)y[v++]=127&b|128,b>>>=7;y[v]=b},i.prototype.uint32=function(b){return this.len+=(this.tail=this.tail.next=new u((b>>>=0)<128?1:b<16384?2:b<2097152?3:b<268435456?4:5,b)).len,this},i.prototype.int32=function(b){return b<0?this._push(m,10,c.fromNumber(b)):this.uint32(b)},i.prototype.sint32=function(b){return this.uint32((b<<1^b>>31)>>>0)},i.prototype.uint64=function(b){var y=c.from(b);return this._push(m,y.length(),y)},i.prototype.int64=i.prototype.uint64,i.prototype.sint64=function(b){var y=c.from(b).zzEncode();return this._push(m,y.length(),y)},i.prototype.bool=function(b){return this._push(a,1,b?1:0)},i.prototype.fixed32=function(b){return this._push(g,4,b>>>0)},i.prototype.sfixed32=i.prototype.fixed32,i.prototype.fixed64=function(b){var y=c.from(b);return this._push(g,4,y.lo)._push(g,4,y.hi)},i.prototype.sfixed64=i.prototype.fixed64,i.prototype.float=function(b){return this._push(o.float.writeFloatLE,4,b)},i.prototype.double=function(b){return this._push(o.float.writeDoubleLE,8,b)};var _=o.Array.prototype.set?function(b,y,v){y.set(b,v)}:function(b,y,v){for(var x=0;x<b.length;++x)y[v+x]=b[x]};i.prototype.bytes=function(b){var y=b.length>>>0;if(!y)return this._push(a,1,0);if(o.isString(b)){var v=i.alloc(y=l.length(b));l.decode(b,v,0),b=v}return this.uint32(y)._push(_,y,b)},i.prototype.string=function(b){var y=h.length(b);return y?this.uint32(y)._push(h.write,y,b):this._push(a,1,0)},i.prototype.fork=function(){return this.states=new d(this),this.head=this.tail=new p(f,0,0),this.len=0,this},i.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new p(f,0,0),this.len=0),this},i.prototype.ldelim=function(){var b=this.head,y=this.tail,v=this.len;return this.reset().uint32(v),v&&(this.tail.next=b.next,this.tail=y,this.len+=v),this},i.prototype.finish=function(){for(var b=this.head.next,y=this.constructor.alloc(this.len),v=0;b;)b.fn(b.val,y,v),v+=b.len,b=b.next;return y},i._configure=function(b){r=b,i.create=n(),r._configure()}},3155:(s,e,t)=>{s.exports=c;var r=t(1173);(c.prototype=Object.create(r.prototype)).constructor=c;var o=t(9693);function c(){r.call(this)}function l(h,p,f){h.length<40?o.utf8.write(h,p,f):p.utf8Write?p.utf8Write(h,f):p.write(h,f)}c._configure=function(){c.alloc=o._Buffer_allocUnsafe,c.writeBytesBuffer=o.Buffer&&o.Buffer.prototype instanceof Uint8Array&&o.Buffer.prototype.set.name==="set"?function(h,p,f){p.set(h,f)}:function(h,p,f){if(h.copy)h.copy(p,f,0,h.length);else for(var d=0;d<h.length;)p[f++]=h[d++]}},c.prototype.bytes=function(h){o.isString(h)&&(h=o._Buffer_from(h,"base64"));var p=h.length>>>0;return this.uint32(p),p&&this._push(c.writeBytesBuffer,p,h),this},c.prototype.string=function(h){var p=o.Buffer.byteLength(h);return this.uint32(p),p&&this._push(l,p,h),this},c._configure()},7714:(s,e,t)=>{e.R=void 0;const r=t(6919),o=t(7448);e.R=new class{async init(){}async createSessionHandler(c,l){const h=new r.Session(l);return await h.loadModel(c),new o.OnnxjsSessionHandler(h)}}},4200:(s,e,t)=>{e.c8=e.rX=void 0;const r=t(1670),o=t(5381),c=t(2157),l=t(2306);e.rX=()=>{if((typeof r.env.wasm.initTimeout!="number"||r.env.wasm.initTimeout<0)&&(r.env.wasm.initTimeout=0),typeof r.env.wasm.simd!="boolean"&&(r.env.wasm.simd=!0),typeof r.env.wasm.proxy!="boolean"&&(r.env.wasm.proxy=!1),typeof r.env.wasm.numThreads!="number"||!Number.isInteger(r.env.wasm.numThreads)||r.env.wasm.numThreads<=0){const h=typeof navigator>"u"?(0,o.cpus)().length:navigator.hardwareConcurrency;r.env.wasm.numThreads=Math.min(4,Math.ceil((h||1)/2))}},e.c8=new class{async init(){(0,e.rX)(),await(0,c.initWasm)()}async createSessionHandler(h,p){const f=new l.OnnxruntimeWebAssemblySessionHandler;return await f.loadModel(h,p),Promise.resolve(f)}}},6018:function(s,e,t){var r=this&&this.__createBinding||(Object.create?function(l,h,p,f){f===void 0&&(f=p);var d=Object.getOwnPropertyDescriptor(h,p);d&&!("get"in d?!h.__esModule:d.writable||d.configurable)||(d={enumerable:!0,get:function(){return h[p]}}),Object.defineProperty(l,f,d)}:function(l,h,p,f){f===void 0&&(f=p),l[f]=h[p]}),o=this&&this.__exportStar||function(l,h){for(var p in l)p==="default"||Object.prototype.hasOwnProperty.call(h,p)||r(h,l,p)};Object.defineProperty(e,"__esModule",{value:!0}),o(t(1670),e);const c=t(1670);{const l=t(7714).R;(0,c.registerBackend)("webgl",l,-10)}{const l=t(4200).c8;(0,c.registerBackend)("cpu",l,10),(0,c.registerBackend)("wasm",l,10),(0,c.registerBackend)("xnnpack",l,9)}},246:(s,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createAttributeWithCacheKey=void 0;class t{constructor(o){Object.assign(this,o)}get cacheKey(){return this._cacheKey||(this._cacheKey=Object.getOwnPropertyNames(this).sort().map(o=>`${this[o]}`).join(";")),this._cacheKey}}e.createAttributeWithCacheKey=r=>new t(r)},7778:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Attribute=void 0;const r=t(1446),o=t(9395),c=t(9162),l=t(2517);var h=o.onnxruntime.experimental.fbs;class p{constructor(d){if(this._attributes=new Map,d!=null){for(const i of d)i instanceof r.onnx.AttributeProto?this._attributes.set(i.name,[p.getValue(i),p.getType(i)]):i instanceof h.Attribute&&this._attributes.set(i.name(),[p.getValue(i),p.getType(i)]);if(this._attributes.size<d.length)throw new Error("duplicated attribute names")}}set(d,i,n){this._attributes.set(d,[n,i])}delete(d){this._attributes.delete(d)}getFloat(d,i){return this.get(d,"float",i)}getInt(d,i){return this.get(d,"int",i)}getString(d,i){return this.get(d,"string",i)}getTensor(d,i){return this.get(d,"tensor",i)}getFloats(d,i){return this.get(d,"floats",i)}getInts(d,i){return this.get(d,"ints",i)}getStrings(d,i){return this.get(d,"strings",i)}getTensors(d,i){return this.get(d,"tensors",i)}get(d,i,n){const a=this._attributes.get(d);if(a===void 0){if(n!==void 0)return n;throw new Error(`required attribute not found: ${d}`)}if(a[1]!==i)throw new Error(`type mismatch: expected ${i} but got ${a[1]}`);return a[0]}static getType(d){const i=d instanceof r.onnx.AttributeProto?d.type:d.type();switch(i){case r.onnx.AttributeProto.AttributeType.FLOAT:return"float";case r.onnx.AttributeProto.AttributeType.INT:return"int";case r.onnx.AttributeProto.AttributeType.STRING:return"string";case r.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case r.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case r.onnx.AttributeProto.AttributeType.INTS:return"ints";case r.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case r.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${r.onnx.AttributeProto.AttributeType[i]}`)}}static getValue(d){const i=d instanceof r.onnx.AttributeProto?d.type:d.type();if(i===r.onnx.AttributeProto.AttributeType.GRAPH||i===r.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");const n=this.getValueNoCheck(d);if(i===r.onnx.AttributeProto.AttributeType.INT&&l.LongUtil.isLong(n))return l.LongUtil.longToNumber(n);if(i===r.onnx.AttributeProto.AttributeType.INTS){const a=n,u=new Array(a.length);for(let m=0;m<a.length;m++){const g=a[m];u[m]=l.LongUtil.longToNumber(g)}return u}if(i===r.onnx.AttributeProto.AttributeType.TENSOR)return d instanceof r.onnx.AttributeProto?c.Tensor.fromProto(n):c.Tensor.fromOrtTensor(n);if(i===r.onnx.AttributeProto.AttributeType.TENSORS){if(d instanceof r.onnx.AttributeProto)return n.map(a=>c.Tensor.fromProto(a));if(d instanceof h.Attribute)return n.map(a=>c.Tensor.fromOrtTensor(a))}if(i===r.onnx.AttributeProto.AttributeType.STRING&&d instanceof r.onnx.AttributeProto){const a=n;return(0,l.decodeUtf8String)(a)}return i===r.onnx.AttributeProto.AttributeType.STRINGS&&d instanceof r.onnx.AttributeProto?n.map(l.decodeUtf8String):n}static getValueNoCheck(d){return d instanceof r.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(d):this.getValueNoCheckFromOrtFormat(d)}static getValueNoCheckFromOnnxFormat(d){switch(d.type){case r.onnx.AttributeProto.AttributeType.FLOAT:return d.f;case r.onnx.AttributeProto.AttributeType.INT:return d.i;case r.onnx.AttributeProto.AttributeType.STRING:return d.s;case r.onnx.AttributeProto.AttributeType.TENSOR:return d.t;case r.onnx.AttributeProto.AttributeType.GRAPH:return d.g;case r.onnx.AttributeProto.AttributeType.FLOATS:return d.floats;case r.onnx.AttributeProto.AttributeType.INTS:return d.ints;case r.onnx.AttributeProto.AttributeType.STRINGS:return d.strings;case r.onnx.AttributeProto.AttributeType.TENSORS:return d.tensors;case r.onnx.AttributeProto.AttributeType.GRAPHS:return d.graphs;default:throw new Error(`unsupported attribute type: ${r.onnx.AttributeProto.AttributeType[d.type]}`)}}static getValueNoCheckFromOrtFormat(d){switch(d.type()){case h.AttributeType.FLOAT:return d.f();case h.AttributeType.INT:return d.i();case h.AttributeType.STRING:return d.s();case h.AttributeType.TENSOR:return d.t();case h.AttributeType.GRAPH:return d.g();case h.AttributeType.FLOATS:return d.floatsArray();case h.AttributeType.INTS:{const i=[];for(let n=0;n<d.intsLength();n++)i.push(d.ints(n));return i}case h.AttributeType.STRINGS:{const i=[];for(let n=0;n<d.stringsLength();n++)i.push(d.strings(n));return i}case h.AttributeType.TENSORS:{const i=[];for(let n=0;n<d.tensorsLength();n++)i.push(d.tensors(n));return i}default:throw new Error(`unsupported attribute type: ${h.AttributeType[d.type()]}`)}}}e.Attribute=p},7091:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resolveBackend=e.backend=void 0;const r=t(5038),o=new Map;async function c(l){const h=e.backend;if(h[l]!==void 0&&function(p){const f=p;return"initialize"in f&&typeof f.initialize=="function"&&"createSessionHandler"in f&&typeof f.createSessionHandler=="function"&&"dispose"in f&&typeof f.dispose=="function"}(h[l])){const p=h[l];let f=p.initialize();if(typeof f=="object"&&"then"in f&&(f=await f),f)return o.set(l,p),p}}e.backend={webgl:new r.WebGLBackend},e.resolveBackend=async function l(h){if(!h)return l(["webgl"]);{const p=typeof h=="string"?[h]:h;for(const f of p){const d=o.get(f);if(d)return d;const i=await c(f);if(i)return i}}throw new Error("no available backend to use")}},5038:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.WebGLBackend=void 0;const r=t(1670),o=t(6231),c=t(6416),l=t(7305);e.WebGLBackend=class{get contextId(){return r.env.webgl.contextId}set contextId(h){r.env.webgl.contextId=h}get matmulMaxBatchSize(){return r.env.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(h){r.env.webgl.matmulMaxBatchSize=h}get textureCacheMode(){return r.env.webgl.textureCacheMode}set textureCacheMode(h){r.env.webgl.textureCacheMode=h}get pack(){return r.env.webgl.pack}set pack(h){r.env.webgl.pack=h}get async(){return r.env.webgl.async}set async(h){r.env.webgl.async=h}initialize(){try{return this.glContext=(0,l.createWebGLContext)(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),o.Logger.setWithEnv(r.env),o.Logger.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(h){return o.Logger.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${h}`),!1}}createSessionHandler(h){return new c.WebGLSessionHandler(this,h)}dispose(){this.glContext.dispose()}}},5107:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CoordsGlslLib=void 0;const r=t(2517),o=t(8520),c=t(5060),l=t(7859),h=t(9390);class p extends o.GlslLib{constructor(d){super(d)}getFunctions(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.offsetToCoords()),this.coordsToOffset()),this.toVec()),this.valueFrom()),this.getCommonUtilFuncs()),this.getInputsSamplingSnippets()),this.getOutputSamplingSnippet())}getCustomTypes(){return{}}offsetToCoords(){return{offsetToCoords:new o.GlslLibRoutine(`
      vec2 offsetToCoords(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){return{coordsToOffset:new o.GlslLibRoutine(`
      int coordsToOffset(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){const d=this.context.outputTextureLayout;return d.isPacked?this.getPackedOutputSamplingSnippet(d):this.getUnpackedOutputSamplingSnippet(d)}getPackedOutputSamplingSnippet(d){const i=d.unpackedShape,n=[d.width,d.height],a={},u="getOutputCoords";switch(i.length){case 0:a[u]=this.getOutputScalarCoords();break;case 1:a[u]=this.getOutputPacked1DCoords(i,n);break;case 2:a[u]=this.getOutputPacked2DCoords(i,n);break;case 3:a[u]=this.getOutputPacked3DCoords(i,n);break;default:a[u]=this.getOutputPackedNDCoords(i,n)}const m=`
      void setOutput(vec4 val) {
        ${(0,c.getGlsl)(this.context.glContext.version).output} = val;
      }
    `;return a.floatTextureSetRGBA=new o.GlslLibRoutine(m),a}getUnpackedOutputSamplingSnippet(d){const i=d.unpackedShape,n=[d.width,d.height],a={},u="getOutputCoords";switch(i.length){case 0:a[u]=this.getOutputScalarCoords();break;case 1:a[u]=this.getOutputUnpacked1DCoords(i,n);break;case 2:a[u]=this.getOutputUnpacked2DCoords(i,n);break;case 3:a[u]=this.getOutputUnpacked3DCoords(i,n);break;case 4:a[u]=this.getOutputUnpacked4DCoords(i,n);break;case 5:a[u]=this.getOutputUnpacked5DCoords(i,n);break;case 6:a[u]=this.getOutputUnpacked6DCoords(i,n);break;default:throw new Error(`Unsupported output dimensionality: ${i.length}`)}const m=`
        void setOutput(float val) {
          ${(0,c.getGlsl)(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `;return a.floatTextureSetR=new o.GlslLibRoutine(m),a}getOutputScalarCoords(){return new o.GlslLibRoutine(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(d,i){const n=i;let a="";return n[0]===1?(a=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n[1]}.0);
          }
        `,new o.GlslLibRoutine(a)):n[1]===1?(a=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n[0]}.0);
          }
        `,new o.GlslLibRoutine(a)):(a=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n[0]}, ${n[1]}));
          return 2 * (resTexRC.y * ${n[0]} + resTexRC.x);
        }
      `,new o.GlslLibRoutine(a))}getOutputPacked2DCoords(d,i){let n="";if(r.ArrayUtil.arraysEqual(d,i))return n=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${i[0]}, ${i[1]}));
        }
      `,new o.GlslLibRoutine(n);const a=i,u=Math.ceil(d[1]/2);return n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${a[0]}, ${a[1]}));

          int index = resTexRC.y * ${a[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${u}) * 2;
          int c = 2 * (index / ${u});

          return ivec2(r, c);
        }
      `,new o.GlslLibRoutine(n)}getOutputPacked3DCoords(d,i){const n=[i[0],i[1]],a=Math.ceil(d[2]/2),u=a*Math.ceil(d[1]/2),m=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));
          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          int b = index / ${u};
          index -= b * ${u};

          // reverse r and c order for packed texture
          int r = imod(index, ${a}) * 2;
          int c = 2 * (index / ${a});

          return ivec3(b, r, c);
        }
      `;return new o.GlslLibRoutine(m)}getOutputPackedNDCoords(d,i){const n=[i[0],i[1]],a=Math.ceil(d[d.length-1]/2),u=a*Math.ceil(d[d.length-2]/2);let m=u,g="",_="b, r, c";for(let y=2;y<d.length-1;y++)m*=d[d.length-y-1],g=`
      int b${y} = index / ${m};
      index -= b${y} * ${m};
    `+g,_=`b${y}, `+_;const b=`
      ivec${d.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n[0]}, ${n[1]}));
        int index = resTexRC.y * ${n[0]} + resTexRC.x;

        ${g}

        int b = index / ${u};
        index -= b * ${u};

        // reverse r and c order for packed texture
        int r = imod(index, ${a}) * 2;
        int c = 2 * (index / ${a});

        return ivec${d.length}(${_});
      }
    `;return new o.GlslLibRoutine(b)}getOutputUnpacked1DCoords(d,i){const n=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));
          return resTexRC.y * ${i[0]} + resTexRC.x;
        }
      `;return new o.GlslLibRoutine(n)}getOutputUnpacked2DCoords(d,i){const n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));
          int index = resTexRC.y * ${i[0]} + resTexRC.x;
          int r = index / ${d[1]};
          int c = index - r * ${d[1]};
          return ivec2(r, c);
        }
      `;return new o.GlslLibRoutine(n)}getOutputUnpacked3DCoords(d,i){let n="";const a=d.length;let u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=d[a-1];for(let _=a-3;_>=0;--_)u[_]=u[_+1]*d[_+1];const m=["r","c","d"],g=u.map((_,b)=>`int ${m[b]} = index / ${_}; ${b===u.length-1?`int ${m[b+1]} = index - ${m[b]} * ${_}`:`index -= ${m[b]} * ${_}`};`).join("");return n=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));
          int index = resTexRC.y * ${i[0]} + resTexRC.x;
          ${g}
          return ivec3(r, c, d);
        }
      `,new o.GlslLibRoutine(n)}getOutputUnpacked4DCoords(d,i){let n="";const a=d.length;let u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=d[a-1];for(let _=a-3;_>=0;--_)u[_]=u[_+1]*d[_+1];const m=["r","c","d","d2"],g=u.map((_,b)=>`int ${m[b]} = index / ${_}; ${b===u.length-1?`int ${m[b+1]} = index - ${m[b]} * ${_}`:`index -= ${m[b]} * ${_}`};`).join("");return n=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));
          int index = resTexRC.y * ${i[0]} + resTexRC.x;
          ${g}
          return ivec4(r, c, d, d2);
        }
      `,new o.GlslLibRoutine(n)}getOutputUnpacked5DCoords(d,i){let n="";const a=d.length;let u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=d[a-1];for(let _=a-3;_>=0;--_)u[_]=u[_+1]*d[_+1];const m=["r","c","d","d2","d3"],g=u.map((_,b)=>`int ${m[b]} = index / ${_}; ${b===u.length-1?`int ${m[b+1]} = index - ${m[b]} * ${_}`:`index -= ${m[b]} * ${_}`};`).join("");return n=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));
          int index = resTexRC.y * ${i[0]} + resTexRC.x;
          ${g}
          return ivec5(r, c, d, d2, d3);
        }
      `,new o.GlslLibRoutine(n)}getOutputUnpacked6DCoords(d,i){let n="";const a=d.length;let u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=d[a-1];for(let _=a-3;_>=0;--_)u[_]=u[_+1]*d[_+1];const m=["r","c","d","d2","d3","d4"],g=u.map((_,b)=>`int ${m[b]} = index / ${_}; ${b===u.length-1?`int ${m[b+1]} = index - ${m[b]} * ${_}`:`index -= ${m[b]} * ${_}`};`).join("");return n=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${i[0]}, ${i[1]}));
         int index = resTexRC.y * ${i[0]} + resTexRC.x;
         ${g}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new o.GlslLibRoutine(n)}getCommonUtilFuncs(){const d={};let i="uvFromFlat";d[i]=new o.GlslLibRoutine(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),i="packedUVfrom1D",d[i]=new o.GlslLibRoutine(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),i="packedUVfrom2D",d[i]=new o.GlslLibRoutine(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),i="packedUVfrom3D",d[i]=new o.GlslLibRoutine(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),i="sampleTexture";const n=(0,c.getGlsl)(this.context.glContext.version);return d[i]=new o.GlslLibRoutine(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n.texture2D}(textureSampler, uv).r;
        }`),d}getInputsSamplingSnippets(){const d={},i=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((n,a)=>{const u=this.context.inputTextureLayouts[a],m=(0,h.generateShaderFuncNameFromInputSamplerName)(n);u.isPacked?d[m]=this.getPackedSamplerFromInput(m,n,u):d[m]=this.getUnpackedSamplerFromInput(m,n,u);const g=(0,h.generateShaderFuncNameFromInputSamplerNameAtOutCoords)(n);u.unpackedShape.length<=i.unpackedShape.length&&(u.isPacked?d[g]=this.getPackedSamplerAtOutputCoords(g,u,i,n):d[g]=this.getUnpackedSamplerAtOutputCoords(g,u,i,n))}),d}getPackedSamplerAtOutputCoords(d,i,n,a){const u=i.unpackedShape,m=n.unpackedShape,g=a,_=(0,h.generateShaderFuncNameFromInputSamplerName)(g),b=u.length,y=m.length,v=r.BroadcastUtil.getBroadcastDims(u,m),x=(0,h.getCoordsDataType)(y),w=y-b;let S;const M=(0,h.getGlChannels)();S=b===0?"":y<2&&v.length>=1?"coords = 0;":v.map(C=>`coords.${M[C+w]} = 0;`).join(`
`);let T="";T=y<2&&b>0?"coords":u.map((C,z)=>`coords.${M[z+w]}`).join(", ");let E="return outputValue;";const R=r.ShapeUtil.size(u)===1,I=r.ShapeUtil.size(m)===1;if(b!==1||R||I){if(R&&!I)E=y===1?`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:`
          return vec4(outputValue.x);
        `;else if(v.length){const C=b-2,z=b-1;v.indexOf(C)>-1&&v.indexOf(z)>-1?E="return vec4(outputValue.x);":v.indexOf(C)>-1?E="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":v.indexOf(z)>-1&&(E="return vec4(outputValue.xx, outputValue.zz);")}}else E=`
        return vec4(outputValue.xy, outputValue.xy);
      `;const k=`
      vec4 ${d}() {
        ${x} coords = getOutputCoords();
        
        int lastDim = coords.${M[y-1]};
        coords.${M[y-1]} = coords.${M[y-2]};
        coords.${M[y-2]} = lastDim;
      
        ${S}
        vec4 outputValue = ${_}(${T});
        ${E}
      }
    `;return new o.GlslLibRoutine(k,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(d,i,n,a){const u=[n.width,n.height],m=[i.width,i.height],g=i.unpackedShape.length,_=n.unpackedShape.length,b=i.unpackedShape,y=n.unpackedShape,v=(0,h.generateShaderFuncNameFromInputSamplerName)(a);if(g===_&&r.ArrayUtil.arraysEqual(m,u)){const I=`
          float ${d}() {
            return sampleTexture(${a}, TexCoords);
          }
        `;return new o.GlslLibRoutine(I,["coordinates.sampleTexture"])}const x=(0,h.getCoordsDataType)(_),w=r.BroadcastUtil.getBroadcastDims(b,y),S=_-g;let M;const T=(0,h.getGlChannels)();M=g===0?"":_<2&&w.length>=1?"coords = 0;":w.map(I=>`coords.${T[I+S]} = 0;`).join(`
`);let E="";E=_<2&&g>0?"coords":i.unpackedShape.map((I,k)=>`coords.${T[k+S]}`).join(", ");const R=`
        float ${d}() {
          ${x} coords = getOutputCoords();
          ${M}
          return ${v}(${E});
        }
      `;return new o.GlslLibRoutine(R,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(d,i,n){switch(n.unpackedShape.length){case 0:return this.getPackedSamplerScalar(d,i);case 1:return this.getPackedSampler1D(d,i,n);case 2:return this.getPackedSampler2D(d,i,n);case 3:return this.getPackedSampler3D(d,i,n);default:return this.getPackedSamplerND(d,i,n)}}getUnpackedSamplerFromInput(d,i,n){const a=n.unpackedShape;switch(a.length){case 0:return this.getUnpackedSamplerScalar(d,i,n);case 1:return this.getUnpackedSampler1D(d,i,n);case 2:return this.getUnpackedSampler2D(d,i,n);case 3:return this.getUnpackedSampler3D(d,i,n);case 4:return this.getUnpackedSampler4D(d,i,n);case 5:return this.getUnpackedSampler5D(d,i,n);case 6:return this.getUnpackedSampler6D(d,i,n);default:throw new Error(`Unsupported dimension ${a.length}-D`)}}getPackedSamplerScalar(d,i){const n=`
          vec4 ${d}() {
            return ${(0,c.getGlsl)(this.context.glContext.version).texture2D}(${i}, halfCR);
          }
        `;return new o.GlslLibRoutine(n)}getPackedSampler1D(d,i,n){const a=[n.width,n.height],u=[a[1],a[0]],m=(0,c.getGlsl)(this.context.glContext.version),g=`vec4 ${d}(int index) {
      vec2 uv = packedUVfrom1D(
      ${u[0]}, ${u[1]}, index);
      return ${m.texture2D}(${i}, uv);
    }`;return new o.GlslLibRoutine(g,["coordinates.packedUVfrom1D"])}getPackedSampler2D(d,i,n){const a=n.unpackedShape,u=[n.width,n.height],m=(0,c.getGlsl)(this.context.glContext.version),g=u[0],_=u[1];if(u!=null&&r.ArrayUtil.arraysEqual(a,u)){const x=`vec4 ${d}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${_}.0, ${g}.0);
        return ${m.texture2D}(${i}, uv);
      }`;return new o.GlslLibRoutine(x)}const b=u,y=Math.ceil(a[1]/2),v=`vec4 ${d}(int row, int col) {
      vec2 uv = packedUVfrom2D(${b[1]}, ${b[0]}, ${y}, row, col);
      return ${m.texture2D}(${i}, uv);
    }`;return new o.GlslLibRoutine(v,["coordinates.packedUVfrom2D"])}getPackedSampler3D(d,i,n){const a=n.unpackedShape,u=[n.width,n.height],m=[u[0],u[1]],g=(0,c.getGlsl)(this.context.glContext.version);if(a[0]===1){const x=a.slice(1),w=[1,2],S=(0,h.squeezeInputShape)(a,x),M=["b","row","col"],T=JSON.parse(JSON.stringify(n));T.unpackedShape=S;const E=this.getPackedSamplerFromInput(d,i,T),R=`${E.routineBody}
      vec4 ${d}(int b, int row, int col) {
        return ${d}(${(0,h.getSqueezedParams)(M,w)});
      } `;return new o.GlslLibRoutine(R,E.dependencies)}const _=m[0],b=m[1],y=Math.ceil(a[2]/2),v=`vec4 ${d}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${b}, ${_}, ${y*Math.ceil(a[1]/2)}, ${y}, b, row, col);
      return ${g.texture2D}(${i}, uv);}`;return new o.GlslLibRoutine(v,["coordinates.packedUVfrom3D"])}getPackedSamplerND(d,i,n){const a=n.unpackedShape,u=a.length,m=[n.width,n.height],g=(0,c.getGlsl)(this.context.glContext.version),_=[m[0],m[1]],b=_[1],y=_[0],v=Math.ceil(a[u-1]/2);let x=v*Math.ceil(a[u-2]/2),w="int b, int row, int col",S=`b * ${x} + (row / 2) * ${v} + (col / 2)`;for(let T=2;T<u-1;T++)w=`int b${T}, `+w,x*=a[u-T-1],S=`b${T} * ${x} + `+S;const M=`vec4 ${d}(${w}) {
      int index = ${S};
      int texR = index / ${y};
      int texC = index - texR * ${y};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${y}, ${b});
      return ${g.texture2D}(${i}, uv);
    }`;return new o.GlslLibRoutine(M)}getUnpackedSamplerScalar(d,i,n){const[a,u]=[n.width,n.height];if(a===1&&u===1){const g=`
          float ${d}() {
            return sampleTexture(${i}, halfCR);
          }
        `;return new o.GlslLibRoutine(g,["coordinates.sampleTexture"])}const m=`
        float ${d}() {
          int offset_${i} = coordsToOffset(TexCoords, ${a}, ${u});
          vec2 uv = uvFromFlat(${a}, ${u}, offset_${i});
          return sampleTexture(${i}, uv);
        }
      `;return new o.GlslLibRoutine(m,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(d,i,n){const a=n.width,u=n.height;if(u===1&&a===1){const g=`
        float ${d}(int index) {
          return sampleTexture(${i}, halfCR);
        }
      `;return new o.GlslLibRoutine(g,["coordinates.sampleTexture"])}if(u===1){const g=`
          float ${d}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${a}.0, 0.5);
            return sampleTexture(${i}, uv);
          }
        `;return new o.GlslLibRoutine(g,["coordinates.sampleTexture"])}if(a===1){const g=`
          float ${d}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${u}.0);
            return sampleTexture(${i}, uv);
          }
        `;return new o.GlslLibRoutine(g,["coordinates.sampleTexture"])}const m=`
        float ${d}(int index) {
          vec2 uv = uvFromFlat(${a}, ${u}, index);
          return sampleTexture(${i}, uv);
        }
      `;return new o.GlslLibRoutine(m,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(d,i,n){const a=n.unpackedShape,u=[n.height,n.width];if(u!=null&&r.ArrayUtil.arraysEqual(a,u)){const x=`
          float ${d}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${u[1]}.0, ${u[0]}.0);
            return sampleTexture(${i}, uv);
          }
        `;return new o.GlslLibRoutine(x,["coordinates.sampleTexture"])}const{newShape:m,keptDims:g}=(0,l.squeezeShape)(a),_=m;if(_.length<a.length){const x=(0,h.squeezeInputShape)(a,_),w=JSON.parse(JSON.stringify(n));w.unpackedShape=x;const S=["col","row"],M=`
          ${this.getUnpackedSamplerFromInput(d,i,w).routineBody}
          float ${d}(int row, int col) {
            return ${d}(${(0,h.getSqueezedParams)(S,g)});
          }
        `;return new o.GlslLibRoutine(M,["coordinates.sampleTexture"])}const b=u[1],y=u[0];if(y===1){const x=`
          float ${d}(int row, int col) {
            int offset_${i} = coordsToOffset(TexCoords, ${b}, ${y});
            float index = dot(vec3(row, col, offset_${i}), vec3(${a[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${b}.0);
            return sampleTexture(${i}, uv);
          }
        `;return new o.GlslLibRoutine(x,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(b===1){const x=`
          float ${d}(int row, int col) {
            int offset_${i} = coordsToOffset(TexCoords, ${b}, ${y});
            float index = dot(vec3(row, col, offset_${i}), vec3(${a[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${y}.0, 0.5);
            return sampleTexture(${i}, uv);
          }
        `;return new o.GlslLibRoutine(x,["coordinates.sampleTexture","coordinates.coordsToOffset"])}const v=`
        float ${d}(int row, int col) {
          int index = col * ${a[1]} + row;
          vec2 uv = uvFromFlat(${b}, ${y}, index);
          return sampleTexture(${i}, uv);
        }
      `;return new o.GlslLibRoutine(v,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(d,i,n){const a=n.unpackedShape,u=a[1]*a[2],m=a[2],{newShape:g,keptDims:_}=(0,l.squeezeShape)(a),b=g;if(b.length<a.length){const v=(0,h.squeezeInputShape)(a,b),x=["batch","col","row"],w=JSON.parse(JSON.stringify(n));w.unpackedShape=v;const S=this.getUnpackedSamplerFromInput(d,i,w),M=_.reverse(),T=`
          ${S.routineBody}
          float ${d}(int batch, int row, int col) {
            return ${d}(${(0,h.getSqueezedParams)(x,M)});
          }
        `;return new o.GlslLibRoutine(T,S.dependencies)}const y=`
          float ${d}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${u} + col * ${m} + row;
            vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
            return sampleTexture(${i}, uv);
          }
      `;return new o.GlslLibRoutine(y,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(d,i,n){const a=n.unpackedShape,u=a[3],m=a[2]*u,g=`
        float ${d}(int row, int col, int depth, int depth2) {
          int index = row * ${a[1]*m} + col * ${m} +
              depth2 * ${u} + depth;
          vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
          return sampleTexture(${i}, uv);
        }
      `;return new o.GlslLibRoutine(g,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(d,i,n){const a=n.unpackedShape,u=a[4],m=a[3]*u,g=a[2]*m,_=a[1]*g,{newShape:b,keptDims:y}=(0,l.squeezeShape)(a);if(b.length<a.length){const x=(0,h.squeezeInputShape)(a,b),w=["row","col","depth","depth2","depth3"],S=JSON.parse(JSON.stringify(n));S.unpackedShape=x;const M=`
          ${this.getUnpackedSamplerFromInput(d,i,S).routineBody}
          float ${d}(int row, int col, int depth, int depth2, int depth3) {
            return ${d}(${(0,h.getSqueezedParams)(w,y)});
          }
        `;return new o.GlslLibRoutine(M,["coordinates.sampleTexture","coordinates.uvFromFlat"])}const v=`
        float ${d}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${_} + col * ${g} + depth * ${m} +
          depth3 * ${u} + depth2;
          vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
          return sampleTexture(${i}, uv);
        }
      `;return new o.GlslLibRoutine(v,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(d,i,n){const a=n.unpackedShape,u=a[5],m=a[4]*u,g=a[3]*m,_=a[2]*g,b=a[1]*_,{newShape:y,keptDims:v}=(0,l.squeezeShape)(a);if(y.length<a.length){const w=(0,h.squeezeInputShape)(a,y),S=["row","col","depth","depth2","depth3","depth4"],M=JSON.parse(JSON.stringify(n));M.unpackedShape=w;const T=`
            ${this.getUnpackedSamplerFromInput(d,i,M).routineBody}
            float ${d}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${d}(${(0,h.getSqueezedParams)(S,v)});
            }
          `;return new o.GlslLibRoutine(T,["coordinates.sampleTexture","coordinates.uvFromFlat"])}const x=`
          float ${d}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${b} + col * ${_} + depth * ${g} +
            depth2 * ${m} + depth3 * ${u} + depth4;
            vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
            return sampleTexture(${i}, uv);
          }
        `;return new o.GlslLibRoutine(x,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){const d=this.context.outputTextureLayout,i=d.shape.length,n=d.strides,a=d.width,u=d.height,m=[];for(let _=0;_<i-1;++_)m.push(`
        c[${_}] = offset / ${n[_]};`),m.push(`
        offset -= c[${_}] * ${n[_]};`);m.push(`
        c[${i-1}] = offset;`);const g=`
      void toVec(vec2 texCoords, out int c[${i}]) {
        int offset = coordsToOffset(texCoords, ${a}, ${u});
        ${m.join("")}
      }
      void toVec(int offset, out int c[${i}]) {
        ${m.join("")}
      }
    `;return{toVec:new o.GlslLibRoutine(g,["coordinates.coordsToOffset"])}}valueFrom(){const d={};return this.context.programInfo.inputNames.forEach((i,n)=>{const a=this.context.inputTextureLayouts[n],u=(a.unpackedShape.length>0?a.unpackedShape:a.shape).length;let m=`_${i}`;d[m]=new o.GlslLibRoutine(this.getValueFromSingle(i,u,a.width,a.height,!1),[`shapeUtils.indicesToOffset${m}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),m+="_T",d[m]=new o.GlslLibRoutine(this.getValueFromSingle(i,u,a.width,a.height,!0),[`shapeUtils.indicesToOffset${m}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),d}getValueFromSingle(d,i,n,a,u){let m=`_${d}`;return u&&(m+="_T"),`
        float ${m}(int m[${i}]) {
          int offset = indicesToOffset${m}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${a});
          float value = getColorAsFloat(${(0,c.getGlsl)(this.context.glContext.version).texture2D}(${d}, coords));
          return value;
        }
        `}getPackedValueFrom(d,i,n,a,u){let m=`_${d}_Pack`;return u&&(m+="_T"),`
        vec4 ${m}(int m[${i}]) {
          int offset = indicesToOffset_${d}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${a});
          return ${(0,c.getGlsl)(this.context.glContext.version).texture2D}(${d}, coords);
        }
        `}}e.CoordsGlslLib=p},8520:(s,e)=>{var t;Object.defineProperty(e,"__esModule",{value:!0}),e.TopologicalSortGlslRoutines=e.GlslLibRoutineNode=e.GlslLibRoutine=e.GlslLib=e.GlslContext=e.FunctionType=void 0,(t=e.FunctionType||(e.FunctionType={}))[t.ValueBased=0]="ValueBased",t[t.Positional=1]="Positional",e.GlslContext=class{constructor(r,o,c,l){this.glContext=r,this.programInfo=o,this.inputTextureLayouts=c,this.outputTextureLayout=l}},e.GlslLib=class{constructor(r){this.context=r}},e.GlslLibRoutine=class{constructor(r,o){this.routineBody=r,this.dependencies=o}},e.GlslLibRoutineNode=class{constructor(r,o,c){this.name=r,this.dependencies=c||[],o&&(this.routineBody=o)}addDependency(r){r&&this.dependencies.push(r)}},e.TopologicalSortGlslRoutines=class{static returnOrderedNodes(r){if(!r||r.length===0)return[];if(r.length===1)return r;const o=new Set,c=new Set,l=new Array;return this.createOrderedNodes(r,o,c,l),l}static createOrderedNodes(r,o,c,l){for(let h=0;h<r.length;++h)this.dfsTraverse(r[h],o,c,l)}static dfsTraverse(r,o,c,l){if(!r||c.has(r.name))return;if(o.has(r.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");o.add(r.name);const h=r.dependencies;if(h&&h.length>0)for(let p=0;p<h.length;++p)this.dfsTraverse(h[p],o,c,l);l.push(r),c.add(r.name),o.delete(r.name)}}},7341:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.EncodingGlslLib=void 0;const r=t(8520);class o extends r.GlslLib{constructor(l){super(l)}getFunctions(){return Object.assign(Object.assign({},this.encodeFloat32()),this.decodeFloat32())}getCustomTypes(){return{}}encodeFloat32(){return{encode:new r.GlslLibRoutine(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new r.GlslLibRoutine(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){const l=o.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new r.GlslLibRoutine(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${l}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){const l=o.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new r.GlslLibRoutine(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${l}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){const l=new ArrayBuffer(4),h=new Uint32Array(l),p=new Uint8Array(l);if(h[0]=3735928559,p[0]===239)return!0;if(p[0]===222)return!1;throw new Error("unknown endianness")}}e.EncodingGlslLib=o},9894:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FragColorGlslLib=void 0;const r=t(8520),o=t(5060);class c extends r.GlslLib{constructor(h){super(h)}getFunctions(){return Object.assign(Object.assign({},this.setFragColor()),this.getColorAsFloat())}getCustomTypes(){return{}}setFragColor(){const h=(0,o.getGlsl)(this.context.glContext.version);return{setFragColor:new r.GlslLibRoutine(`
        void setFragColor(float value) {
            ${h.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new r.GlslLibRoutine(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}e.FragColorGlslLib=c},2848:(s,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.replaceInlines=void 0;const t=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm;e.replaceInlines=function(r){const o={};let c;for(;(c=t.exec(r))!==null;){const l=c[3].split(",").map(h=>{const p=h.trim().split(" ");return p&&p.length===2?{type:p[0],name:p[1]}:null}).filter(h=>h!==null);o[c[2]]={params:l,body:c[4]}}for(const l in o){const h="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;".replace("__FUNC__",l),p=new RegExp(h,"gm");for(;(c=p.exec(r))!==null;){const f=c[1],d=c[2],i=c[3].split(","),n=f?`${f} ${d};`:"";let a=o[l].body,u="";o[l].params.forEach((g,_)=>{g&&(u+=`${g.type} ${g.name} = ${i[_]};
`)}),a=`${u}
 ${a}`,a=a.replace("return",`${d} = `);const m=`
      ${n}
      {
        ${a}
      }
      `;r=r.replace(c[0],m)}}return r.replace(t,"")}},8879:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GlslPreprocessor=void 0;const r=t(8520),o=t(2848),c=t(5483),l=t(5060);e.GlslPreprocessor=class{constructor(h,p,f,d){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new r.GlslContext(h,p,f,d),Object.keys(c.glslRegistry).forEach(n=>{const a=new c.glslRegistry[n](this.context);this.libs[n]=a});const i=this.glslLibRoutineDependencyGraph;for(const n in this.libs){const a=this.libs[n].getFunctions();for(const u in a){const m=n+"."+u;let g;i[m]?(g=i[m],g.routineBody=a[u].routineBody):(g=new r.GlslLibRoutineNode(m,a[u].routineBody),i[m]=g);const _=a[u].dependencies;if(_)for(let b=0;b<_.length;++b)if(i[_[b]])g.addDependency(i[_[b]]);else{const y=new r.GlslLibRoutineNode(_[b]);i[_[b]]=y,g.addDependency(y)}}}}preprocess(){const h=this.context.programInfo;let p=h.shaderSource;return this.context.programInfo.hasMain||(p=`${p}
      ${(0,l.getDefaultFragShaderMain)(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),p=(0,o.replaceInlines)(p),`${(0,l.getFragShaderPreamble)(this.context.glContext.version)}
    ${this.getUniforms(h.inputNames,h.variables)}
    ${this.getImports(p)}
    ${p}`}getImports(h){const p=this.selectGlslLibRoutinesToBeIncluded(h);if(p.length===0)return"";let f="";for(let d=0;d<p.length;++d){if(!p[d].routineBody)throw new Error(`Missing body for the Glsl Library routine: ${p[d].name}`);f+=p[d].routineBody+`
`}return f}selectGlslLibRoutinesToBeIncluded(h){const p=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(f=>{const d=f.split(".")[1];h.indexOf(d)!==-1&&p.push(this.glslLibRoutineDependencyGraph[f])}),r.TopologicalSortGlslRoutines.returnOrderedNodes(p)}getUniforms(h,p){const f=[];if(h)for(const d of h)f.push(`uniform sampler2D ${d};`);if(p)for(const d of p)f.push(`uniform ${d.type} ${d.name}${d.arrayLength?`[${d.arrayLength}]`:""};`);return f.join(`
`)}}},5483:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.glslRegistry=void 0;const r=t(5107),o=t(7341),c=t(9894),l=t(2655),h=t(3891);e.glslRegistry={encoding:o.EncodingGlslLib,fragcolor:c.FragColorGlslLib,vec:h.VecGlslLib,shapeUtils:l.ShapeUtilsGlslLib,coordinates:r.CoordsGlslLib}},2655:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ShapeUtilsGlslLib=void 0;const r=t(8520);class o extends r.GlslLib{constructor(l){super(l)}getFunctions(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.bcastIndex()),this.bcastMatmulIndex()),this.offsetToIndices()),this.indicesToOffset()),this.incrementIndices())}getCustomTypes(){return{}}bcastIndex(){const l=this.context.outputTextureLayout.shape.length,h={};return this.context.programInfo.inputNames.forEach((p,f)=>{const d=this.context.inputTextureLayouts[f].unpackedShape;if(d.length<=l){const i=d.length,n=l-i,a=`bcastIndices_${p}`;let u="";for(let g=0;g<i;++g)u+=`
          realIndices[${g}] = int( mod(float(bcastedIndices[${n+g}]), ${d[g]}.0) );
          `;const m=`
        void ${a} (int bcastedIndices[${l}], out int realIndices[${i}]) {
          ${u}
        }
        `;h[a]=new r.GlslLibRoutine(m)}}),h}bcastMatmulIndex(){const l=this.context.outputTextureLayout.shape.length,h={};return this.context.programInfo.inputNames.forEach((p,f)=>{const d=this.context.inputTextureLayouts[f].shape;if(!(d.length<2||d.length>l)){const i=d.length,n=l-i,a=`bcastMatmulIndices_${p}`;let u="";for(let g=0;g<i-2;++g)u+=`
          realIndices[${g}] = int( mod(float(bcastedIndices[${n+g}]), ${d[g]}.0) );
          `;const m=`
        void ${a}(int bcastedIndices[${l}], out int realIndices[${i}]) {
          ${u}
          realIndices[${i-1}] = bcastedIndices[${l-1}];
          realIndices[${i-2}] = bcastedIndices[${l-2}];
        }
        `;h[a]=new r.GlslLibRoutine(m)}}),h}indicesToOffset(){const l={};return this.context.programInfo.inputNames.forEach((h,p)=>{const f=this.context.inputTextureLayouts[p].shape,d=this.context.inputTextureLayouts[p].strides,i=f.length;let n=`indicesToOffset_${h}`;l[n]=new r.GlslLibRoutine(o.indexToOffsetSingle(n,i,d)),n=`indicesToOffset_${h}_T`,l[n]=new r.GlslLibRoutine(o.indexToOffsetSingle(n,i,d.slice().reverse()))}),l}static indexToOffsetSingle(l,h,p){let f="";for(let d=h-1;d>=0;--d)f+=`
        offset += indices[${d}] * ${p[d]};
        `;return`
      int ${l}(int indices[${h}]) {
        int offset = 0;
        ${f}
        return offset;
      }
      `}offsetToIndices(){const l={};return this.context.programInfo.inputNames.forEach((h,p)=>{const f=this.context.inputTextureLayouts[p].shape,d=this.context.inputTextureLayouts[p].strides,i=f.length;let n=`offsetToIndices_${h}`;l[n]=new r.GlslLibRoutine(o.offsetToIndicesSingle(n,i,d)),n=`offsetToIndices_${h}_T`,l[n]=new r.GlslLibRoutine(o.offsetToIndicesSingle(n,i,d.slice().reverse()))}),l}static offsetToIndicesSingle(l,h,p){const f=[];for(let d=0;d<h-1;++d)f.push(`
      indices[${d}] = offset / ${p[d]};`),f.push(`
        offset -= indices[${d}] * ${p[d]};`);return f.push(`
      indices[${h-1}] = offset;`),`
      void ${l}(int offset, out int indices[${h}]) {
        ${f.join("")}
      }
      `}incrementIndices(){const l={};return this.context.programInfo.inputNames.forEach((h,p)=>{const f=this.context.inputTextureLayouts[p].shape,d=f.length,i=`incrementIndices_${h}`;let n="";for(let u=0;u<d;++u)n+=`
        shape[${u}] = ${f[u]};`;const a=`
        void ${i}(int axis, out int indices[${d}]) {
          int shape[${d}];
          ${n};
          for(int i = ${d} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;l[i]=new r.GlslLibRoutine(a)}),l}}e.ShapeUtilsGlslLib=o},5060:(s,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getDefaultFragShaderMain=e.getFragShaderPreamble=e.getVertexShaderSource=e.getGlsl=void 0;const t={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},r={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"};function o(c){return c===1?t:r}e.getGlsl=o,e.getVertexShaderSource=function(c){const l=o(c);return`${l.version}
      precision highp float;
      ${l.attribute} vec3 position;
      ${l.attribute} vec2 textureCoord;

      ${l.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`},e.getFragShaderPreamble=function(c){const l=o(c);return`${l.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${l.varyingFrag} vec2 TexCoords;
    ${l.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
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

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `},e.getDefaultFragShaderMain=function(c,l){return`
  void main() {
    int indices[${l}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${o(c).output} = result;
  }
  `}},3891:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.VecGlslLib=void 0;const r=t(8520);class o extends r.GlslLib{constructor(l){super(l)}getCustomTypes(){return{}}getFunctions(){return Object.assign(Object.assign(Object.assign(Object.assign({},this.binaryVecFunctions()),this.copyVec()),this.setVecItem()),this.getVecItem())}binaryVecFunctions(){const l=this.context.outputTextureLayout.shape.length,h={add:"+=",sub:"-=",mul:"*=",div:"/="},p={};for(const f in h){const d=`${f}Vec`;let i="";for(let a=0;a<l;++a)i+=`
          dest[${a}] ${h[f]} src[${a}];
          `;const n=`
        void ${d}(int src[${l}], out int dest[${l}]) {
          ${i}
        }
        `;p[d]=new r.GlslLibRoutine(n)}return p}copyVec(){const l=this.context.outputTextureLayout.shape.length;let h="";for(let f=0;f<l;++f)h+=`
        dest[${f}] = src[${f}];
        `;const p=`
      void copyVec(int src[${l}], out int dest[${l}]) {
        ${h}
      }
      `;return{copyVec:new r.GlslLibRoutine(p)}}setVecItem(){const l=this.context.outputTextureLayout.shape.length;let h=`
        if(index < 0)
            index =${l} + index;
        if (index == 0)
            m[0] = value;
        `;for(let f=1;f<l-1;++f)h+=`
        else if (index == ${f})
            m[${f}] = value;
            `;h+=`
        else
            m[${l-1}] = value;
        `;const p=`
      void setVecItem(out int m[${l}], int index, int value) {
        ${h}
      }
        `;return{setVecItem:new r.GlslLibRoutine(p)}}getVecItem(){const l=this.context.outputTextureLayout.shape.length;let h=`
        if(index < 0)
            index = ${l} + index;
        if (index == 0)
            return m[0];
      `;for(let f=1;f<l-1;++f)h+=`
        else if (index == ${f})
            return m[${f}];
      `;h+=`
        else
            return m[${l-1}];
        `;const p=`
      int getVecItem(int m[${l}], int index) {
        ${h}
      }
    `;return{getVecItem:new r.GlslLibRoutine(p)}}}e.VecGlslLib=o},8316:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.WebGLInferenceHandler=void 0;const r=t(6231),o=t(9162),c=t(2517),l=t(2403),h=t(7019),p=t(8710),f=t(5611),d=t(4057),i=t(2039);e.WebGLInferenceHandler=class{constructor(n){this.session=n,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(n,a){return(0,d.calculateTextureWidthAndHeight)(this.session.layoutStrategy,n,a)}executeProgram(n,a){if(a.length<n.inputNames.length)throw new Error(`Input size mustn't be less than ${n.inputNames.length}.`);if(n.inputNames.length!==n.inputTypes.length)throw new Error("input names size does not match input types");const u=[];for(let v=0;v<n.inputNames.length;++v)u[v]=this.getOrCreateTextureData(a[v],n.inputTypes[v]);const m=((v,x)=>{const w=x.map(M=>`${M.unpackedShape.join(",")};${M.width}x${M.height}`).join("_");let S=v.name;return v.cacheHint&&(S+="["+v.cacheHint+"]"),S+=":"+w,S})(n,u);let g=this.session.programManager.getArtifact(m);const _=g?g.programInfo:typeof n.get=="function"?n.get():n,b=(0,d.createTextureLayoutFromTextureType)(this.session.layoutStrategy,_.output.dims,_.output.textureType),y=this.createTextureData(b,_.output.type);return g||(g=this.session.programManager.build(_,u,y),this.session.programManager.setArtifact(m,g)),this.runProgram(g,u,y),y}run(n,a){return this.executeProgram(n,a).tensor}runProgram(n,a,u){for(let m=0;m<a.length;++m)if(!!a[m].isPacked!=(n.programInfo.inputTypes[m]===i.TextureType.packed))throw new Error(`input[${m}] property packed inconsistent`);if(!!u.isPacked!=(n.programInfo.output.textureType===i.TextureType.packed))throw new Error("output property packed inconsistent");this.session.programManager.run(n,a,u)}getOrCreateTextureData(n,a){let u=this.getTextureData(n.dataId,a===i.TextureType.packed);if(!u&&(u=this.getTextureData(n.dataId,a!==i.TextureType.packed),u))return a===i.TextureType.packed?this.pack(u):this.unpack(u);if(!u){const m=(0,d.createTextureLayoutFromTextureType)(this.session.layoutStrategy,n.dims,a);if(a===i.TextureType.packedLastDimension){const b=n.dims;if(b.length===4){const y=[b[0],Math.ceil(b[1]*b[2]*b[3]/4)],v=(0,d.createTextureLayoutFromTextureType)(this.session.layoutStrategy,y,a);let x=n.numberData;if(b[1]*b[2]*b[3]%4!=0){const w=b[0],S=b[1]*b[2]*b[3],M=Math.ceil(S*1/4)*4;x=new Float32Array(w*M);for(let T=0;T<w;++T){const E=T*S,R=T*M+T%1*S;x.set(n.numberData.subarray(E,E+S),R)}}return this.createTextureData(v,n.type,x,n,1)}}if(a===i.TextureType.packed){const g=(0,d.createTextureLayoutFromShape)(this.session.layoutStrategy,n.dims,1,[],{reverseWH:!0}),_=this.createTextureData(g,n.type,n.numberData,n,1);u=this.pack(_)}else u=this.createTextureData(m,n.type,n.numberData,n,1)}return u}createTextureDataFromLayoutBindTensor(n,a,u,m){return this.createTextureData(n,a,u,m,1)}createTextureData(n,a,u,m,g){r.Logger.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(n)}]`);const _=this.session.textureManager.createTextureFromLayout(a,n,u,g);return this.createTextureDataFromTexture(n,a,_,m)}reshapeUnpacked(n,a){const u=this.getOrCreateTextureData(n,i.TextureType.unpacked),m={channels:u.channels,height:u.height,width:u.width,shape:a.length!==0?a:[1],strides:c.ShapeUtil.computeStrides(a),unpackedShape:a};return this.createTextureDataFromTexture(m,n.type,u.texture).tensor}reshapePacked(n,a){const u=this.getOrCreateTextureData(n,i.TextureType.packed);if((0,h.isReshapeCheap)(n.dims,a)){const y={channels:u.channels,height:u.height,width:u.width,shape:a.length!==0?a:[1],strides:c.ShapeUtil.computeStrides(a),unpackedShape:a,isPacked:!0};return this.createTextureDataFromTexture(y,n.type,u.texture).tensor}const m=(0,h.processDims3D)(n.dims),g=(0,h.processDims3D)(a),_=this.reshapePacked(n,m),b=this.run((0,h.createPackedReshape3DProgramInfoLoader)(this,_,g),[_]);return this.reshapePacked(b,a)}cast(n,a){const u=this.getOrCreateTextureData(n,i.TextureType.unpacked);return this.createTextureDataFromTexture(u,a,u.texture).tensor}createTextureDataFromTexture(n,a,u,m,g){const _=Object.assign(Object.assign({},n),{tensor:m||new o.Tensor(n.unpackedShape,a,b=>this.readTexture(_),async b=>this.readTextureAsync(_),void 0,g),texture:u});return this.setTextureData(_.tensor.dataId,_,n.isPacked),_}getTextureData(n,a=!1){return this.session.isInitializer(n)?this.session.getTextureData(n,a):a?this.packedTextureDataCache.get(n):this.unpackedTextureDataCache.get(n)}setTextureData(n,a,u=!1){this.session.isInitializer(n)?this.session.setTextureData(n,a,u):(u?this.packedTextureDataCache:this.unpackedTextureDataCache).set(n,a)}isTextureLayoutCached(n,a=!1){return!!this.getTextureData(n.dataId,a)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(n=>this.session.textureManager.releaseTexture(n)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(n=>this.session.textureManager.releaseTexture(n)),this.unpackedTextureDataCache=new Map}readTexture(n){return n.isPacked?this.readTexture(this.unpack(n)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(n,n.tensor.type,n.channels):this.session.textureManager.readUint8TextureAsFloat((0,p.encodeAsUint8)(this,n))}async readTextureAsync(n){return n.isPacked?this.readTextureAsync(this.unpack(n)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(n,n.tensor.type,n.channels):this.session.textureManager.readUint8TextureAsFloat((0,p.encodeAsUint8)(this,n))}pack(n){return this.executeProgram((0,l.createPackProgramInfoLoader)(this,n.tensor),[n.tensor])}unpack(n){return this.executeProgram((0,f.createUnpackProgramInfoLoader)(this,n.tensor),[n.tensor])}}},1640:function(s,e,t){var r=this&&this.__createBinding||(Object.create?function($,J,ee,he){he===void 0&&(he=ee);var ie=Object.getOwnPropertyDescriptor(J,ee);ie&&!("get"in ie?!J.__esModule:ie.writable||ie.configurable)||(ie={enumerable:!0,get:function(){return J[ee]}}),Object.defineProperty($,he,ie)}:function($,J,ee,he){he===void 0&&(he=ee),$[he]=J[ee]}),o=this&&this.__setModuleDefault||(Object.create?function($,J){Object.defineProperty($,"default",{enumerable:!0,value:J})}:function($,J){$.default=J}),c=this&&this.__importStar||function($){if($&&$.__esModule)return $;var J={};if($!=null)for(var ee in $)ee!=="default"&&Object.prototype.hasOwnProperty.call($,ee)&&r(J,$,ee);return o(J,$),J};Object.defineProperty(e,"__esModule",{value:!0}),e.WEBGL_OP_RESOLVE_RULES=void 0;const l=t(2898),h=c(t(7839)),p=t(4196),f=t(2069),d=t(8138),i=t(9663),n=t(5193),a=t(7992),u=t(1253),m=t(4776),g=t(6572),_=t(3346),b=t(5623),y=t(2870),v=t(2143),x=t(4939),w=t(718),S=t(2268),M=t(8117),T=t(2278),E=t(5524),R=t(5975),I=t(3933),k=t(6558),C=t(5723),z=t(3738),O=c(t(4909)),U=t(8428),K=t(9793);e.WEBGL_OP_RESOLVE_RULES=[["Abs","","6+",O.abs],["Acos","","7+",O.acos],["Add","","7+",h.add],["And","","7+",h.and],["Asin","","7+",O.asin],["Atan","","7+",O.atan],["AveragePool","","7+",v.averagePool,v.parseAveragePoolAttributes],["BatchNormalization","","7+",l.batchNormalization,l.parseBatchNormalizationAttributes],["Cast","","6+",p.cast,p.parseCastAttributes],["Ceil","","6+",O.ceil],["Clip","","6-10",O.clip,O.parseClipAttributes],["Clip","","11+",O.clipV11],["Concat","","4+",f.concat,f.parseConcatAttributes],["Conv","","1+",d.conv,d.parseConvAttributes],["ConvTranspose","","1+",i.convTranspose,i.parseConvTransposeAttributes],["Cos","","7+",O.cos],["Div","","7+",h.div],["Dropout","","7+",O.identity],["DepthToSpace","","1+",n.depthToSpace,n.parseDepthToSpaceAttributes],["Equal","","7+",h.equal],["Elu","","6+",O.elu,O.parseEluAttributes],["Exp","","6+",O.exp],["Flatten","","1+",a.flatten,a.parseFlattenAttributes],["Floor","","6+",O.floor],["FusedConv","com.microsoft","1+",d.conv,d.parseConvAttributes],["Gather","","1+",u.gather,u.parseGatherAttributes],["Gemm","","7-10",m.gemm,m.parseGemmAttributesV7],["Gemm","","11+",m.gemm,m.parseGemmAttributesV11],["GlobalAveragePool","","1+",v.globalAveragePool,v.parseGlobalAveragePoolAttributes],["GlobalMaxPool","","1+",v.globalMaxPool],["Greater","","7+",h.greater],["Identity","","1+",O.identity],["ImageScaler","","1+",g.imageScaler,g.parseImageScalerAttributes],["InstanceNormalization","","6+",_.instanceNormalization,_.parseInstanceNormalizationAttributes],["LeakyRelu","","6+",O.leakyRelu,O.parseLeakyReluAttributes],["Less","","7+",h.less],["Log","","6+",O.log],["MatMul","","1+",b.matMul,b.parseMatMulAttributes],["MaxPool","","1+",v.maxPool,v.parseMaxPoolAttributes],["Mul","","7+",h.mul],["Neg","","6+",O.neg],["Not","","1+",O.not],["Or","","7+",h.or],["Pad","","2-10",y.padV2,y.parsePadAttributesV2],["Pad","","11+",y.padV11,y.parsePadAttributesV11],["Pow","","7+",h.pow],["PRelu","","7+",h.pRelu],["ReduceLogSum","","1+",x.reduceLogSum,x.parseReduceAttributes],["ReduceMax","","1+",x.reduceMax,x.parseReduceAttributes],["ReduceMean","","1+",x.reduceMean,x.parseReduceAttributes],["ReduceMin","","1+",x.reduceMin,x.parseReduceAttributes],["ReduceProd","","1+",x.reduceProd,x.parseReduceAttributes],["ReduceSum","","1-12",x.reduceSum,x.parseReduceAttributes],["ReduceSumSquare","","1+",x.reduceLogSumSquare,x.parseReduceAttributes],["Relu","","6+",O.relu],["Reshape","","5+",w.reshape],["Resize","","10",S.resize,S.parseResizeAttributesV10],["Resize","","11+",S.resize,S.parseResizeAttributesV11],["Shape","","1+",M.shape],["Sigmoid","","6+",O.sigmoid],["Sin","","7+",O.sin],["Slice","","10+",T.sliceV10],["Slice","","1-9",T.slice,T.parseSliceAttributes],["Softmax","","1-12",E.softmax,E.parseSoftmaxAttributes],["Softmax","","13+",E.softmaxV13,E.parseSoftmaxAttributesV13],["Split","","2-12",R.split,R.parseSplitAttributes],["Sqrt","","6+",O.sqrt],["Squeeze","","1-12",I.squeeze,I.parseSqueezeAttributes],["Squeeze","","13+",I.squeezeV13],["Sub","","7+",h.sub],["Sum","","6+",k.sum],["Tan","","7+",O.tan],["Tanh","","6+",O.tanh],["Tile","","6+",C.tile],["Transpose","","1+",z.transpose,z.parseTransposeAttributes],["Upsample","","7-8",K.upsample,K.parseUpsampleAttributesV7],["Upsample","","9",K.upsample,K.parseUpsampleAttributesV9],["Unsqueeze","","1-12",U.unsqueeze,U.parseUnsqueezeAttributes],["Unsqueeze","","13+",U.unsqueezeV13],["Xor","","7+",h.xor]]},2898:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseBatchNormalizationAttributes=e.batchNormalization=void 0;const r=t(246),o=t(5060),c=t(2039),l={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[c.TextureType.unpacked,c.TextureType.unpacked,c.TextureType.unpacked,c.TextureType.unpacked,c.TextureType.unpacked]};e.batchNormalization=(f,d,i)=>(p(d),[f.run(Object.assign(Object.assign({},l),{cacheHint:i.cacheKey,get:()=>h(f,d,i)}),d)]),e.parseBatchNormalizationAttributes=f=>{const d=f.attributes.getFloat("epsilon",1e-5),i=f.attributes.getFloat("momentum",.9),n=f.attributes.getInt("spatial",1);return(0,r.createAttributeWithCacheKey)({epsilon:d,momentum:i,spatial:n})};const h=(f,d,i)=>{const n=(0,o.getGlsl)(f.session.backend.glContext.version),a=d[0].dims.length,[u,m]=f.calculateTextureWidthAndHeight(d[1].dims,c.TextureType.unpacked),g=`
  float process(int[${a}] indices) {
    vec2 position = offsetToCoords(indices[1], ${u}, ${m});
    float scale = getColorAsFloat(${n.texture2D}(Scale, position));
    float mean = getColorAsFloat(${n.texture2D}(Mean, position));
    float variance = getColorAsFloat(${n.texture2D}(Variance, position));
    float b = getColorAsFloat(${n.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${i.epsilon})) ) + b;
  }`;return Object.assign(Object.assign({},l),{output:{dims:d[0].dims,type:d[0].type,textureType:c.TextureType.unpacked},shaderSource:g})},p=f=>{if(!f||f.length!==5)throw new Error("BatchNormalization requires 5 inputs.");const d=f[0],i=f[1],n=f[2],a=f[3],u=f[4];if(d.dims.length<3||i.dims.length!==1||n.dims.length!==1||a.dims.length!==1||u.dims.length!==1)throw new Error("invalid input shape.");if(i.dims[0]!==d.dims[1]||n.dims[0]!==d.dims[1]||a.dims[0]!==d.dims[1]||u.dims[0]!==d.dims[1])throw new Error("invalid input shape.");if(d.type!=="float32"&&d.type!=="float64"||i.type!=="float32"&&i.type!=="float64"||n.type!=="float32"&&n.type!=="float64"||a.type!=="float32"&&a.type!=="float64"||u.type!=="float32"&&u.type!=="float64")throw new Error("invalid input tensor types.")}},7839:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.xor=e.sub=e.pRelu=e.pow=e.or=e.mul=e.less=e.greater=e.equal=e.div=e.and=e.add=e.glslPRelu=e.glslPow=e.glslXor=e.glslOr=e.glslAnd=e.glslLess=e.glslGreater=e.glslEqual=e.glslSub=e.glslMul=e.glslDiv=e.glslAdd=void 0;const r=t(2517),o=t(8520),c=t(5060),l=t(2039);function h(){const x="add_";return{body:`
  float ${x}(float a, float b) {
    return a + b;
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:x,type:o.FunctionType.ValueBased}}function p(){const x="div_";return{body:`
  float ${x}(float a, float b) {
    return a / b;
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:x,type:o.FunctionType.ValueBased}}function f(){const x="mul_";return{body:`
  float ${x}(float a, float b) {
    return a * b;
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:x,type:o.FunctionType.ValueBased}}function d(){const x="sub_";return{body:`
  float ${x}(float a, float b) {
    return a - b;
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:x,type:o.FunctionType.ValueBased}}function i(){const x="equal_";return{body:`
  float ${x}(float a, float b) {
    return float(a == b);
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:x,type:o.FunctionType.ValueBased}}function n(){const x="greater_";return{body:`
  float ${x}(float a, float b) {
    return float(a > b);
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:x,type:o.FunctionType.ValueBased}}function a(){const x="less_";return{body:`
  float ${x}(float a, float b) {
    return float(a < b);
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:x,type:o.FunctionType.ValueBased}}function u(){const x="and_";return{body:`
  float ${x}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:x,type:o.FunctionType.ValueBased}}function m(){const x="or_";return{body:`
  float ${x}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:x,type:o.FunctionType.ValueBased}}function g(){const x="xor_";return{body:`
  float ${x}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:x,type:o.FunctionType.ValueBased}}function _(){return function(x){const w=`${x}_`;return{body:`
  float ${w}(float a, float b) {
    return ${x}(a, b);
  }
  vec4 ${w}(vec4 v1, vec4 v2) {
    return ${x}(v1, v2);
  }
  `,name:w,type:o.FunctionType.ValueBased}}("pow")}function b(){const x="prelu_";return{body:`
  float ${x}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${x}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:x,type:o.FunctionType.ValueBased}}e.glslAdd=h,e.glslDiv=p,e.glslMul=f,e.glslSub=d,e.glslEqual=i,e.glslGreater=n,e.glslLess=a,e.glslAnd=u,e.glslOr=m,e.glslXor=g,e.glslPow=_,e.glslPRelu=b;const y=(x,w,S,M=w[0].type,T)=>{const E=x.session.pack?l.TextureType.packed:l.TextureType.unpacked;return{name:S.name,inputNames:["A","B"],inputTypes:[E,E],cacheHint:T,get:()=>v(x,w,S,M)}},v=(x,w,S,M=w[0].type)=>{const T=x.session.pack?l.TextureType.packed:l.TextureType.unpacked,E=!r.ShapeUtil.areEqual(w[0].dims,w[1].dims);let R=w[0].dims;const I=x.session.pack;if(E){const z=r.BroadcastUtil.calcShape(w[0].dims,w[1].dims,!1);if(!z)throw new Error("Can't perform binary op on the given tensors");R=z;const O=R.length,U=w[0].dims.length!==0?w[0].dims.length:1,K=w[1].dims.length!==0?w[1].dims.length:1,$=w[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",J=w[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",ee=(0,c.getGlsl)(x.session.backend.glContext.version),he=I?`
      ${S.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${S.name}(a, b);
        ${ee.output} = result;
      }`:`
      ${S.body}
      float process(int indices[${O}]) {
        int aindices[${U}];
        int bindices[${K}];
        ${$}
        ${J}
        return ${S.name}(_A(aindices), _B(bindices));
      }`;return{name:S.name,inputNames:["A","B"],inputTypes:[T,T],output:{dims:R,type:M,textureType:T},shaderSource:he,hasMain:I}}const k=(0,c.getGlsl)(x.session.backend.glContext.version),C=`
    ${S.body}
    void main() {
      vec4 v1 = ${k.texture2D}(A, TexCoords);
      vec4 v2 = ${k.texture2D}(B, TexCoords);
      vec4 result = ${S.name}(v1, v2);
      ${k.output} = result;
    }
    `;return{name:S.name,inputNames:["A","B"],inputTypes:[T,T],output:{dims:w[0].dims,type:M,textureType:T},shaderSource:C,hasMain:!0}};e.add=(x,w)=>[x.run(y(x,w,h()),w)],e.and=(x,w)=>[x.run(y(x,w,u(),"bool"),w)],e.div=(x,w)=>[x.run(y(x,w,p()),w)],e.equal=(x,w)=>[x.run(y(x,w,i(),"bool"),w)],e.greater=(x,w)=>[x.run(y(x,w,n(),"bool"),w)],e.less=(x,w)=>[x.run(y(x,w,a(),"bool"),w)],e.mul=(x,w)=>[x.run(y(x,w,f()),w)],e.or=(x,w)=>[x.run(y(x,w,m(),"bool"),w)],e.pow=(x,w)=>[x.run(y(x,w,_()),w)],e.pRelu=(x,w)=>[x.run(y(x,w,b()),w)],e.sub=(x,w)=>[x.run(y(x,w,d()),w)],e.xor=(x,w)=>[x.run(y(x,w,g(),"bool"),w)]},4196:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseCastAttributes=e.cast=void 0;const r=t(2517);e.cast=(c,l,h)=>(o(l),[c.cast(l[0],h)]),e.parseCastAttributes=c=>r.ProtoUtil.tensorDataTypeFromProto(c.attributes.getInt("to"));const o=c=>{if(!c||c.length!==1)throw new Error("Cast requires 1 input.");if(c[0].type==="string")throw new Error("Invalid input type.")}},1163:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createPackedConcatProgramInfoLoader=void 0;const r=t(5060),o=t(2039),c=t(9390),l=t(2827);e.createPackedConcatProgramInfoLoader=(p,f,d)=>{const i=(n=f.length,a=d.cacheKey,{name:"Concat (packed)",inputNames:Array.from({length:n},(u,m)=>`X${m}`),inputTypes:Array(n).fill(o.TextureType.packed),cacheHint:a});var n,a;return Object.assign(Object.assign({},i),{get:()=>((u,m,g,_)=>{const b=g[0].dims.slice();if(_>=b.length||_<-1*b.length)throw new Error("axis specified for concat doesn't match input dimensionality");_<0&&(_=b.length+_);const y=b.slice(0);for(let $=1;$<g.length;$++){const J=g[$].dims.slice();for(let ee=0;ee<b.length;ee++)if(ee===_)y[_]+=J[ee];else if(b[ee]!==J[ee])throw new Error("non concat dimensions must match")}const v=y.length,x=(0,l.getChannels)("coords",v),w=(0,c.getCoordsDataType)(v),S=(0,l.unpackFromChannel)(),M=g.map($=>$.dims),T=(0,c.getGlChannels)(v),E=new Array(M.length-1);E[0]=M[0][_];for(let $=1;$<E.length;$++)E[$]=E[$-1]+M[$][_];const R=T[_],I=T.slice(-2),k=T.join();let C=`if (${R} < ${E[0]}) {
        return getChannel(
            getX0(${k}), vec2(${I.join()}));
        }`;for(let $=1;$<E.length;$++){const J=E[$-1];C+=`
            if (${R} < ${E[$]}  && ${R} >= ${E[$-1]}) {
              return getChannel(
                getX${$}(${h(T,R,J)}),
                vec2(${h(I,R,J)}));
            }`}const z=E.length,O=E[E.length-1];C+=`
            return getChannel(
              getX${z}(${h(T,R,O)}),
              vec2(${h(I,R,O)}));`;const U=(0,r.getGlsl)(u.session.backend.glContext.version),K=`
          ${S}
          float getValue(${T.map($=>"int "+$)}) {
            ${C}
          }

          void main() {
            ${w} coords = getOutputCoords();
            int lastDim = coords.${T[v-1]};
            coords.${T[v-1]} = coords.${T[v-2]};
            coords.${T[v-2]} = lastDim;

            vec4 result = vec4(getValue(${x}), 0., 0., 0.);

            ${x[v-1]} = ${x[v-1]} + 1;
            if (${x[v-1]} < ${y[v-1]}) {
              result.g = getValue(${x});
            }

            ${x[v-2]} = ${x[v-2]} + 1;
            if (${x[v-2]} < ${y[v-2]}) {
              result.a = getValue(${x});
            }

            ${x[v-1]} = ${x[v-1]} - 1;
            if (${x[v-2]} < ${y[v-2]} &&
                ${x[v-1]} < ${y[v-1]}) {
              result.b = getValue(${x});
            }
            ${U.output} = result;
          }
        `;return Object.assign(Object.assign({},m),{output:{dims:y,type:g[0].type,textureType:o.TextureType.packed},shaderSource:K,hasMain:!0})})(p,i,f,d.axis)})};const h=(p,f,d)=>{const i=p.indexOf(f);return p.map((n,a)=>a===i?`${n} - ${d}`:n).join()}},2069:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseConcatAttributes=e.concat=void 0;const r=t(246),o=t(2039),c=t(1163);e.concat=(n,a,u)=>(i(a),n.session.pack&&a[0].dims.length>1?[n.run((0,c.createPackedConcatProgramInfoLoader)(n,a,u),a)]:[n.run(l(n,a,u),a)]);const l=(n,a,u)=>{const m=(g=a.length,_=u.cacheKey,{name:"Concat",inputNames:Array.from({length:g},(b,y)=>`X${y}`),inputTypes:Array(g).fill(o.TextureType.unpacked),cacheHint:_});var g,_;return Object.assign(Object.assign({},m),{get:()=>((b,y,v,x)=>{const w=v[0].dims.slice();if(x>=w.length||x<-1*w.length)throw new Error("axis specified for concat doesn't match input dimensionality");x<0&&(x=w.length+x);const S=w.slice(0);for(let k=1;k<v.length;k++){const C=v[k].dims.slice();for(let z=0;z<w.length;z++)if(z===x)S[x]+=C[z];else if(w[z]!==C[z])throw new Error("non concat dimensions must match")}const M=S.length,T=new Array(v.length);let E=0;for(let k=0;k<T.length;++k)E+=v[k].dims[x],T[k]=E;let R="";R=v.length<5?h(T):p(T);const I=`
        ${f(v.length,M)}
        ${d(T)}
        ${R}
        float process(int indices[${M}]) {
          int textureIndex = getTextureWhereDataResides (indices[${x}]);

          if(textureIndex != 0) {
            indices[${x}] = indices[${x}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return Object.assign(Object.assign({},y),{output:{dims:S,type:v[0].type,textureType:o.TextureType.unpacked},shaderSource:I})})(0,m,a,u.axis)})},h=n=>`int getTextureWhereDataResides(int index) {
      ${n.map((a,u)=>`if(index<${a}) {return ${u};}
`).join("")}
    }`,p=n=>h(n),f=(n,a)=>{const u=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${a}]) {`];for(let m=0;m<n;++m)m===0?u.push(`	if (textureIndex == ${m}) { return _X${m}(indices); }`):m===n-1?u.push(`	else { return _X${m}(indices); }`):u.push(`	else if (textureIndex == ${m}) { return _X${m}(indices); }`);return u.push("	}"),u.join(`
`)},d=n=>{const a=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let u=0;u<n.length;++u)u===0?a.push(`	if (index == ${u}) { return ${n[u]}; }`):u===n.length-1?a.push(`	else { return ${n[u]}; }`):a.push(`	else if (index == ${u}) { return ${n[u]}; }`);return a.push("	}"),a.join(`
`)};e.parseConcatAttributes=n=>(0,r.createAttributeWithCacheKey)({axis:n.attributes.getInt("axis")});const i=n=>{if(!n||n.length<1)throw new Error("too few inputs");const a=n[0].type,u=n[0].dims.length;if(a==="string")throw new Error("string tensor is not supported yet");for(const m of n){if(m.type!==a)throw new Error("input tensors should be one type");if(m.dims.length!==u)throw new Error("input tensors should have the same shape")}}},4770:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createUnpackedGroupedConvProgramInfoLoader=void 0;const r=t(6231),o=t(5060),c=t(2039),l=t(8138),h=t(2823);e.createUnpackedGroupedConvProgramInfoLoader=(p,f,d)=>{const i=(n=f.length>2,a=d.cacheKey,{name:"GroupedConv",inputNames:n?["X","W","Bias"]:["X","W"],inputTypes:n?[c.TextureType.unpacked,c.TextureType.unpacked,c.TextureType.unpacked]:[c.TextureType.unpacked,c.TextureType.unpacked],cacheHint:a});var n,a;return Object.assign(Object.assign({},i),{get:()=>((u,m,g,_)=>{const b=m.length>2?"value += getBias(output_channel);":"",y=m[0].dims.slice(),v=m[1].dims.slice(),x=v[0]/_.group;r.Logger.verbose("GroupedConv",`autpPad:${_.autoPad}, dilations:${_.dilations}, group:${_.group}, kernelShape:${_.kernelShape}, pads:${_.pads}, strides:${_.strides}`);const w=(0,l.calculateOutputShape)(y,v,_.dilations,_.pads,_.strides),S=(0,o.getGlsl)(u.session.backend.glContext.version),{activationFunction:M,applyActivation:T}=(0,h.getActivationSnippet)(_),E=`
  const ivec2 strides = ivec2(${_.strides[0]}, ${_.strides[1]});
  const ivec2 pads = ivec2(${_.pads[0]}, ${_.pads[1]});
  ${M}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${x};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${v[1]}; wInChannel++) {
      int input_channel = group_id * ${v[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${v[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${_.dilations[0]};

        if (xHeight < 0 || xHeight >= ${y[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${v[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${_.dilations[1]};
          if (xWidth < 0 || xWidth >= ${y[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${b}
    ${T}
    ${S.output} = vec4(value, .0, .0, .0);
  }
`;return Object.assign(Object.assign({},g),{output:{dims:w,type:m[0].type,textureType:c.TextureType.unpacked},shaderSource:E,hasMain:!0})})(p,f,i,d)})}},1386:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DPacked=e.conv2DPackedPointwise=void 0;const r=t(8138),o=t(8555),c=t(708);e.conv2DPackedPointwise=(l,h,p)=>{const f=h[0].dims,d=h[1].dims,i=(0,r.calculateOutputShape)(f,d,p.dilations,p.pads,p.strides),n=l.reshapePacked(h[0],[f[1],f[2]*f[3]]),a=l.reshapePacked(h[1],[d[0],d[1]]),u=h.length>2?[a,n,h[2]]:[a,n],m=l.run((0,c.createPackedMatmulProgramInfoLoader)(l,u,p),u);return l.reshapePacked(m,i)},e.conv2DPacked=(l,h,p)=>{const f=h[0].dims,d=h[1].dims,i=(0,r.calculateOutputShape)(f,d,p.dilations,p.pads,p.strides),n=l.run((0,o.createPackedIm2ColProgramInfoLoader)(l,h[0],h[1],i,p),[h[0]]),a=l.reshapePacked(h[1],[d[0],d[1]*d[2]*d[3]]),u=h.length===3?[a,n,h[2]]:[a,n],m=l.run((0,c.createPackedMatmulProgramInfoLoader)(l,u,p),u);return l.reshapePacked(m,i)}},9663:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseConvTransposeAttributes=e.convTranspose=void 0;const r=t(246),o=t(5060),c=t(2039),l=t(2823),h=(a,u,m,g,_,b)=>(a-1)*u+m+(g-1)*_+1-b,p=(a,u,m,g,_)=>{const b=Math.floor(a/2);u==="SAME_UPPER"?(m[g]=b,m[_]=a-b):u==="SAME_LOWER"&&(m[g]=a-b,m[_]=b)};e.convTranspose=(a,u,m)=>(n(u,m),f(a,u,m));const f=(a,u,m)=>{const g=i(m,u);return[d(a,u,g)]},d=(a,u,m)=>a.run(((g,_,b)=>{const y=(v=_.length>2,x=b.cacheKey,{name:"ConvTranspose",inputNames:v?["X","W","B"]:["X","W"],inputTypes:v?[c.TextureType.unpacked,c.TextureType.unpacked,c.TextureType.unpacked]:[c.TextureType.unpacked,c.TextureType.unpacked],cacheHint:x});var v,x;return Object.assign(Object.assign({},y),{get:()=>((w,S,M,T)=>{const E=S.length>2?"getB(output_channel)":"0.0",R=S[0].dims,I=S[1].dims,k=I[1],C=I[0]/T.group,z=[S[0].dims[0],S[1].dims[1]*T.group,...T.outputShape],O=(0,o.getGlsl)(w.session.backend.glContext.version),{activationFunction:U,applyActivation:K}=(0,l.getActivationSnippet)(T),$=`
  const ivec2 strides = ivec2(${T.strides[0]}, ${T.strides[1]});
  const ivec2 pads = ivec2(${T.pads[0]}, ${T.pads[1]});
  ${U}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${k};
    int wOutChannel = output_channel - group_id * ${k};

    float value = ${E};
    for (int inChannelOffset = 0; inChannelOffset < ${C}; inChannelOffset++) {
      int input_channel = group_id * ${C} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${I[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${I[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${T.dilations[0]}, wHOff * ${T.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${R[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${R[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${K}
    ${O.output} = vec4(value, .0, .0, .0);
  }
`;return Object.assign(Object.assign({},M),{output:{dims:z,type:S[0].type,textureType:c.TextureType.unpacked},shaderSource:$,hasMain:!0})})(g,_,y,b)})})(a,u,m),u),i=(a,u)=>{const m=a.kernelShape.slice();if(a.kernelShape.length===0)for(let y=2;y<u[1].dims.length;++y)m.push(u[1].dims[y]);const g=a.pads.slice(),_=a.outputShape.slice();((y,v,x,w,S,M,T,E)=>{const R=y.length-2,I=E.length===0;for(let k=0;k<R;++k){const C=I?y[k+2]*M[k]:E[k],z=h(y[k+2],M[k],S[k],v[k],x[k],C);p(z,w,S,k,k+R),I&&E.push(M[k]*(y[k+2]-1)+T[k]+(v[k]-1)*x[k]+1-S[k]-S[k+R])}})(u[0].dims,m,a.dilations,a.autoPad,g,a.strides,a.outputPadding,_);const b=Object.assign({},a);return Object.assign(b,{kernelShape:m,pads:g,outputShape:_,cacheKey:a.cacheKey}),b};e.parseConvTransposeAttributes=a=>{const u=a.attributes,m=(0,l.parseInternalActivationAttributes)(u),g=u.getString("auto_pad","NOTSET"),_=u.getInts("dilations",[1,1]),b=u.getInt("group",1),y=u.getInts("kernel_shape",[]),v=u.getInts("output_padding",[0,0]),x=u.getInts("output_shape",[]),w=u.getInts("pads",[0,0,0,0]),S=u.getInts("strides",[1,1]);return(0,r.createAttributeWithCacheKey)(Object.assign({autoPad:g,dilations:_,group:b,kernelShape:y,outputPadding:v,outputShape:x,pads:w,strides:S},m))};const n=(a,u)=>{if(!a||a.length!==2&&a.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(a[0].dims.length!==4||a[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");if(a[0].dims[1]!==a[1].dims[0])throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");const m=a[1].dims[1]*u.group;if(a.length===3&&(a[2].dims.length!==1||a[2].dims[0]!==m))throw new Error("invalid bias");const g=a[0].dims.length-2;if(u.dilations.length!==g)throw new Error(`dilations should be ${g}D`);if(u.strides.length!==g)throw new Error(`strides should be ${g}D`);if(u.pads.length!==2*g)throw new Error(`pads should be ${2*g}D`);if(u.outputPadding.length!==g)throw new Error(`output_padding should be ${g}D`);if(u.kernelShape.length!==0&&u.kernelShape.length!==a[1].dims.length-2)throw new Error("invalid kernel shape");if(u.outputShape.length!==0&&u.outputShape.length!==a[0].dims.length-2)throw new Error("invalid output shape");if(a[0].type!=="float32"||a[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(a.length===3&&a[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}},8138:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseConvAttributes=e.conv=e.calculateOutputShape=void 0;const r=t(246),o=t(2517),c=t(4770),l=t(1386),h=t(9828),p=t(2823),f=t(3248),d=t(5623);e.calculateOutputShape=(g,_,b,y,v)=>{const x=g[0],w=g.slice(2),S=w.length,M=_[0],T=_.slice(2).map((R,I)=>R+(R-1)*(b[I]-1)),E=w.map((R,I)=>R+y[I]+y[I+S]).map((R,I)=>Math.floor((R-T[I]+v[I])/v[I]));return[x,M].concat(...E)},e.conv=(g,_,b)=>(m(_,b),i(g,_,b));const i=(g,_,b)=>{const y=u(b,_),v=g.session.pack,x=y.kernelShape[0]===1&&y.kernelShape[1]===1;return y.group>1?[g.run((0,c.createUnpackedGroupedConvProgramInfoLoader)(g,_,y),_)]:x&&v?[n(g,_,y)]:v&&_[0].dims.length===4&&_[0].dims[0]===1&&!x?[(0,l.conv2DPacked)(g,_,y)]:[a(g,_,y)]},n=(g,_,b)=>{const y=_[0].dims,v=_[1].dims,x=(0,e.calculateOutputShape)(y,v,b.dilations,b.pads,b.strides),w=g.reshapeUnpacked(_[0],[y[1],y[2]*y[3]]),S=g.reshapeUnpacked(_[1],[v[0],v[1]]),M=_.length>2?[S,w,_[2]]:[S,w],T=g.run((0,d.createMatmulProgramInfoLoader)(M,b),M);return g.reshapeUnpacked(T,x)},a=(g,_,b)=>{const y=_[0].dims,v=_[1].dims,x=(0,e.calculateOutputShape)(y,v,b.dilations,b.pads,b.strides),w=g.run((0,f.createIm2ColProgramInfoLoader)(g,_[0],_[1],x,b),[_[0]]),S=_.length===3?[w,_[1],_[2]]:[w,_[1]];return g.run((0,h.createDotProductProgramInfoLoader)(g,_,x,b),S)},u=(g,_)=>{const b=g.kernelShape.slice();if(g.kernelShape.length===0)for(let x=2;x<_[1].dims.length;++x)b.push(_[1].dims[x]);const y=g.pads.slice();o.PoolConvUtil.adjustPadsBasedOnAutoPad(_[0].dims,g.strides,g.dilations,b,y,g.autoPad);const v=Object.assign({},g);return Object.assign(v,{kernelShape:b,pads:y,cacheKey:g.cacheKey}),v};e.parseConvAttributes=g=>{const _=g.attributes,b=(0,p.parseInternalActivationAttributes)(_),y=_.getString("auto_pad","NOTSET"),v=_.getInts("dilations",[1,1]),x=_.getInt("group",1),w=_.getInts("kernel_shape",[]),S=_.getInts("pads",[0,0,0,0]),M=_.getInts("strides",[1,1]);return(0,r.createAttributeWithCacheKey)(Object.assign({autoPad:y,dilations:v,group:x,kernelShape:w,pads:S,strides:M},b))};const m=(g,_)=>{if(!g||g.length!==2&&g.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(g[0].dims.length!==4||g[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");if(g[0].dims[1]!==g[1].dims[1]*_.group)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(g.length===3&&(g[2].dims.length!==1||g[1].dims[0]!==g[2].dims[0]))throw new Error("invalid bias");const b=g[0].dims.length-2;if(_.dilations.length!==b)throw new Error(`dilations should be ${b}D`);if(_.strides.length!==b)throw new Error(`strides should be ${b}D`);if(_.pads.length!==2*b)throw new Error(`pads should be ${2*b}D`);if(_.kernelShape.length!==0&&_.kernelShape.length!==g[1].dims.length-2)throw new Error("invalid kernel shape");if(g[0].type!=="float32"||g[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(g.length===3&&g[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}},5193:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseDepthToSpaceAttributes=e.depthToSpace=void 0;const r=t(3738);e.depthToSpace=(c,l,h)=>{o(l);const p=h.blocksize,f=p*p,d=h.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],i=h.mode==="DCR"?[l[0].dims[0],p,p,l[0].dims[1]/f,l[0].dims[2],l[0].dims[3]]:[l[0].dims[0],l[0].dims[1]/f,p,p,l[0].dims[2],l[0].dims[3]],n=c.reshapeUnpacked(l[0],i),a={perm:d,cacheKey:`${d}`},[u]=(0,r.transpose)(c,[n],a),m=[l[0].dims[0],l[0].dims[1]/f,l[0].dims[2]*p,l[0].dims[3]*p];return[c.reshapeUnpacked(u,m)]},e.parseDepthToSpaceAttributes=c=>{const l=c.attributes.getInt("blocksize");if(l<1)throw new Error(`blocksize must be >= 1, but got : ${l} for DepthToSpace`);const h=c.attributes.getString("mode","DCR");if(h!=="DCR"&&h!=="CRD")throw new Error(`unrecognized mode: ${h} for DepthToSpace`);return{mode:h,blocksize:l}};const o=c=>{if(c.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${c.length}`);if(c[0].type==="string"||c[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}},9828:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createDotProductProgramInfoLoader=void 0;const r=t(2517),o=t(5060),c=t(2039),l=t(2823),h=t(3248);e.createDotProductProgramInfoLoader=(p,f,d,i)=>{const n=((a,u)=>({name:"ConvDotProduct",inputNames:a?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:a?[c.TextureType.unpacked,c.TextureType.packedLastDimension,c.TextureType.unpacked]:[c.TextureType.unpacked,c.TextureType.packedLastDimension],cacheKey:u.activationCacheKey}))(f.length>2,i);return Object.assign(Object.assign({},n),{get:()=>((a,u,m,g,_)=>{const b=m[0].dims,y=m[1].dims,v=[y[0],Math.ceil(b[1]*y[2]*y[3]/4)],x=(0,h.calculateIm2ColDims)(b,y,g),[w,S]=a.calculateTextureWidthAndHeight(v,c.TextureType.packedLastDimension),M=r.ShapeUtil.computeStrides(x),[T,E]=a.calculateTextureWidthAndHeight(x,c.TextureType.packedLastDimension),R=g.length,I=m.length<3?"0.0":"_B(b)",k=Math.ceil(b[1]*y[2]*y[3]/4),{activationFunction:C,applyActivation:z}=(0,l.getActivationSnippet)(_),O=(0,o.getGlsl)(a.session.backend.glContext.version),U=`
${C}
float process(int indices[${R}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${M[0]} + im2col[1] * ${M[1]} + im2col[2] * ${M[2]};
  int kernelOffset = indices[1] * ${v[1]};
  float value = ${I};
  for (int i = 0; i < ${k}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${T}, ${E});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${w}, ${S});
    value += dot(${O.texture2D}(Im2Col, im2colCoords), ${O.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${z}
  return value;
}`;return Object.assign(Object.assign({},u),{output:{dims:g,type:m[0].type,textureType:c.TextureType.unpacked},shaderSource:U})})(p,n,f,d,i)})}},7992:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseFlattenAttributes=e.flatten=void 0;const r=t(2517);e.flatten=(c,l,h)=>{o(l,h);const p=r.ShapeUtil.flattenShape(l[0].dims,h);return[c.reshapeUnpacked(l[0],p)]},e.parseFlattenAttributes=c=>c.attributes.getInt("axis",1);const o=(c,l)=>{if(!c||c.length!==1)throw new Error("Flatten requires 1 input.");const h=c[0].dims.length;if(h===0)throw new Error("scalar tensor is not supported.");if(l<-h||l>h)throw new Error("Invalid axis");if(c[0].type==="string")throw new Error("string tensor is not supported.")}},2823:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseInternalActivationAttributes=e.getActivationSnippet=void 0;const r=t(2517),o=t(4909);e.getActivationSnippet=function(c){let l;switch(c.activation){case"Relu":l=(0,o.glslRelu)();break;case"Sigmoid":l=(0,o.glslSigmoid)();break;case"Clip":l=(0,o.glslClip)(c.clipMin,c.clipMax);break;default:return{activationFunction:"",applyActivation:""}}const h=l.name;return{activationFunction:l.body,applyActivation:`value = ${h}_(value);`}},e.parseInternalActivationAttributes=c=>{const l=c.getString("activation","");if(l==="Clip"){const[h,p]=c.getFloats("activation_params",[r.MIN_CLIP,r.MAX_CLIP]);return{activation:l,clipMax:p,clipMin:h,activationCacheKey:`${l}:${h},${p}`}}return{activation:l,activationCacheKey:l}}},1253:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseGatherAttributes=e.gather=void 0;const r=t(246),o=t(782),c=t(2517),l=t(2039);e.gather=(d,i,n)=>(f(i,n.axis),[d.run(p(d,i,n),i)]),e.parseGatherAttributes=d=>(0,r.createAttributeWithCacheKey)({axis:d.attributes.getInt("axis",0)});const h={name:"Gather",inputNames:["A","B"],inputTypes:[l.TextureType.unpacked,l.TextureType.unpacked]},p=(d,i,n)=>{const a=Object.assign(Object.assign({},h),{cacheHint:n.cacheKey});return Object.assign(Object.assign({},a),{get:()=>((u,m,g,_)=>{const b=g[0].dims.slice(),y=g[1].dims.slice(),v=new Array(b.length+y.length-1);_=c.ShapeUtil.normalizeAxis(_,b.length);const x=[];for(let S=0;S<v.length;S++)S<_?(v[S]=b[S],x.push(`inputIdx[${S}] = outputIdx[${S}];`)):S<_+y.length?(v[S]=y[S-_],x.push(`indexDataIdx[${S-_}] = outputIdx[${S}];`)):(v[S]=b[S-y.length+1],x.push(`inputIdx[${S-y.length+1}] = outputIdx[${S}];`));const w=`
      float process(int outputIdx[${v.length||1}]) {
        int inputIdx[${b.length}];
        int indexDataIdx[${y.length||1}];
        indexDataIdx[0] = 0;
        ${x.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${_}] = idx < 0 ? idx + ${b[_]} : idx;
        return _A(inputIdx);
      }`;return Object.assign(Object.assign({},m),{output:{dims:v,type:g[0].type,textureType:l.TextureType.unpacked},shaderSource:w})})(0,a,i,n.axis)})},f=(d,i)=>{if(!d||d.length!==2)throw new Error("Gather requires 2 inputs.");const n=d[0].dims.length;if(n<1)throw new Error("Invalid input shape.");if(i<-n||i>n-1)throw new Error("Invalid axis.");if(o.NUMBER_TYPES.indexOf(d[0].type)===-1)throw new Error("Invaid input type.");if(d[1].type!=="int32"&&d[1].type!=="int16")throw new Error("Invaid input type.")}},4776:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseGemmAttributesV11=e.parseGemmAttributesV7=e.gemm=void 0;const r=t(246),o=t(2517),c=t(2039);e.gemm=(d,i,n)=>(f(i,n),[d.run(h(i,n),i)]);const l=(d,i)=>{const n=d.attributes.getInt("transA",0)!==0,a=d.attributes.getInt("transB",0)!==0,u=d.attributes.getFloat("alpha",1),m=d.attributes.getFloat("beta",1);return(0,r.createAttributeWithCacheKey)({transA:n,transB:a,alpha:u,beta:m,isOptionalC:i})};e.parseGemmAttributesV7=d=>l(d,!1),e.parseGemmAttributesV11=d=>l(d,!0);const h=(d,i)=>{const n={name:"Gemm",inputNames:d.length===3?["A","B","C"]:["A","B"],inputTypes:d.length===3?[c.TextureType.unpacked,c.TextureType.unpacked,c.TextureType.unpacked]:[c.TextureType.unpacked,c.TextureType.unpacked],key:i.cacheKey};return Object.assign(Object.assign({},n),{get:()=>p(n,d,i)})},p=(d,i,n)=>{const a=i[0].dims.slice(),u=i[1].dims.slice(),[m,g]=o.GemmUtil.getShapeOfGemmResult(a,n.transA,u,n.transB,i.length===3?i[2].dims:void 0),_=[m,g];if(!_)throw new Error("Can't use gemm on the given tensors");let b=a[a.length-1],y="";n.transA&&(b=a[0]),n.transA&&n.transB?y="value += _A_T(a) * _B_T(b);":n.transA&&!n.transB?y="value += _A_T(a) * _B(b);":!n.transA&&n.transB?y="value += _A(a) * _B_T(b);":n.transA||n.transB||(y="value += _A(a) * _B(b);");const v=_.length,x=`
      float process(int indices[${v}]) {
          int a[${v}];
          int b[${v}];
          ${i.length===3?`int c[${i[2].dims.length}];`:""}

          copyVec(indices, a);
          copyVec(indices, b);
          ${i.length===3?"bcastIndices_C(indices, c);":""}

          float value = 0.0;
          for (int k=0; k<${b}; ++k) {
              a[${v-1}] = k;
              b[${v-2}] = k;
              ${y}
          }

          value = value * alpha;
          ${i.length===3?"value += beta * _C(c);":""}
          return value;
      }`;return Object.assign(Object.assign({},d),{output:{dims:_,type:i[0].type,textureType:c.TextureType.unpacked},variables:[{name:"alpha",type:"float",data:n.alpha},{name:"beta",type:"float",data:n.beta}],shaderSource:x})},f=(d,i)=>{if(!d)throw new Error("Input is missing");if(i.isOptionalC&&(d.length<2||d.length>3))throw new Error("Invaid input shape.");if(!i.isOptionalC&&d.length!==3)throw new Error("Gemm requires 3 inputs");if(d.length===3&&d[2].dims.length!==1&&d[2].dims.length!==2)throw new Error("Invalid input shape of C");if(d[0].type!=="float32"&&d[0].type!=="float64"||d[1].type!=="float32"&&d[1].type!=="float64"||d.length===3&&d[2].type!=="float32"&&d[2].type!=="float64")throw new Error("Invalid input type.");if(d[0].type!==d[1].type||d.length===3&&d[0].type!==d[2].type)throw new Error("Input types are mismatched")}},8555:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createPackedIm2ColProgramInfoLoader=void 0;const r=t(5060),o=t(2039),c=t(2827);e.createPackedIm2ColProgramInfoLoader=(l,h,p,f,d)=>{const i=(n=d.cacheKey,{name:"Im2Col (packed)",inputNames:["A"],inputTypes:[o.TextureType.packed],cacheHint:n});var n;return Object.assign(Object.assign({},i),{get:()=>((a,u,m,g,_,b)=>{const y=m.dims,v=g.dims,x=_.length,w=[v[1]*v[2]*v[3],_[2]*_[3]],S=v[2]*v[3],M=(0,c.unpackFromChannel)(),T=(0,r.getGlsl)(a.session.backend.glContext.version);let E="";for(let I=0;I<=1;I++)for(let k=0;k<=1;k++)E+=`
            blockIndex = rc.x + ${k};
            pos = rc.y + ${I};

            if(blockIndex < ${w[1]} && pos < ${w[0]}) {
              offsetY = int(blockIndex / (${_[x-1]})) * ${b.strides[0]} -
                ${b.pads[0]};
              d0 = offsetY + ${b.dilations[0]} * (imod(pos, ${S}) / ${v[2]});

              if(d0 < ${y[2]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${_[x-1]}) * ${b.strides[1]} -
                  ${b.pads[1]};
                d1 = offsetX + ${b.dilations[1]} * imod(imod(pos, ${S}), ${v[2]});

                if(d1 < ${y[3]} && d1 >= 0) {

                  ch = int(float(pos)/ ${S}.);
                    innerDims = vec2(d0, d1);
                    result[${2*I+k}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;const R=`
      ${M}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${E}
          ${T.output} = result;
      }
            `;return Object.assign(Object.assign({},u),{output:{dims:w,type:m.type,textureType:o.TextureType.packed},shaderSource:R,hasMain:!0})})(l,i,h,p,f,d)})}},3248:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.calculateIm2ColDims=e.createIm2ColProgramInfoLoader=void 0;const r=t(2039);e.createIm2ColProgramInfoLoader=(o,c,l,h,p)=>{const f=(d=p.cacheKey,{name:"Im2Col",inputNames:["X"],inputTypes:[r.TextureType.unpacked],cacheHint:d});var d;return Object.assign(Object.assign({},f),{get:()=>((i,n,a,u,m,g)=>{const _=a.dims,b=u.dims,y=m.length,v=(0,e.calculateIm2ColDims)(_,b,m,4),x=`
        const int XC = ${_[1]};
        const int XH = ${_[2]};
        const int XW = ${_[3]};
        const int KH = ${g.kernelShape[0]};
        const int KW = ${g.kernelShape[1]};
        const int dilationH = ${g.dilations[0]};
        const int dilationW = ${g.dilations[1]};
        const int strideH = ${g.strides[0]};
        const int strideW = ${g.strides[1]};
        const int padH = ${g.pads[0]};
        const int padW = ${g.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${y}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${_.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return Object.assign(Object.assign({},n),{output:{dims:v,type:a.type,textureType:r.TextureType.packedLastDimension},shaderSource:x})})(0,f,c,l,h,p)})},e.calculateIm2ColDims=(o,c,l,h=4)=>[l[0],l[2],l[3],Math.ceil(o[1]*c[2]*c[3]/h)]},6572:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseImageScalerAttributes=e.imageScaler=void 0;const r=t(246),o=t(2039);e.imageScaler=(f,d,i)=>(p(d),[f.run(l(f,d,i),d)]),e.parseImageScalerAttributes=f=>{const d=f.attributes.getFloat("scale"),i=f.attributes.getFloats("bias");return(0,r.createAttributeWithCacheKey)({scale:d,bias:i})};const c={name:"ImageScaler",inputNames:["X"],inputTypes:[o.TextureType.unpacked]},l=(f,d,i)=>{const n=Object.assign(Object.assign({},c),{cacheHint:i.cacheKey});return Object.assign(Object.assign({},n),{get:()=>((a,u,m,g)=>{const _=m[0].dims.slice(),b=_.length,y=`
      ${h(g.bias.length)}
      float process(int indices[${b}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return Object.assign(Object.assign({},u),{output:{dims:_,type:m[0].type,textureType:o.TextureType.unpacked},variables:[{name:"bias",type:"float",arrayLength:g.bias.length,data:g.bias},{name:"scale",type:"float",data:g.scale}],shaderSource:y})})(0,n,d,i)})},h=f=>{const d=[`float getBias(float bias[${f}], int channel) {`];for(let i=0;i<f;++i)i===0?d.push(`	if (channel == ${i}) { return bias[${i}]; }`):i===f-1?d.push(`	else { return bias[${i}]; }`):d.push(`	else if (channel == ${i}) { return bias[${i}]; }`);return d.push("	}"),d.join(`
`)},p=f=>{if(!f||f.length!==1)throw new Error("ImageScaler requires 1 input.");if(f[0].dims.length!==4)throw new Error("Invalid input shape.");if(f[0].type!=="float32"&&f[0].type!=="float64")throw new Error("Invalid input type.")}},3346:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseInstanceNormalizationAttributes=e.instanceNormalization=void 0;const r=t(5060),o=t(2039);e.instanceNormalization=(d,i,n)=>{f(i);const a=d.run(l(i[0]),i);return[d.run(p(d,i[0],n,a.dims),[i[0],a,i[1],i[2]])]},e.parseInstanceNormalizationAttributes=d=>d.attributes.getFloat("epsilon",1e-5);const c={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[o.TextureType.unpacked]},l=d=>Object.assign(Object.assign({},c),{get:()=>((i,n)=>{const a=n.dims.slice(),u=a[1],m=a[2]*a[3],g=[a[0],u],_=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${a[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${a[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${m});
        temp = 0.0;
        for(int a2=0; a2<${a[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${a[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${m});

        return v;
      }`;return Object.assign(Object.assign({},i),{output:{dims:g,type:n.type,textureType:o.TextureType.packedLastDimension},shaderSource:_})})(c,d)}),h={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[o.TextureType.unpacked,o.TextureType.packedLastDimension,o.TextureType.unpacked,o.TextureType.unpacked]},p=(d,i,n,a)=>{const u=Object.assign(Object.assign({},h),{cacheHint:`${n}`});return Object.assign(Object.assign({},u),{get:()=>((m,g,_,b,y)=>{const v=(0,r.getGlsl)(m.session.backend.glContext.version),[x,w]=m.calculateTextureWidthAndHeight(y,o.TextureType.packedLastDimension),[S,M]=[x/4,w],T=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${S}, ${M});
        return ${v.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return Object.assign(Object.assign({},g),{output:{dims:_.dims,type:_.type,textureType:o.TextureType.unpacked},variables:[{name:"epsilon",type:"float",data:b}],shaderSource:T})})(d,u,i,n,a)})},f=d=>{if(!d||d.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");const i=d[0],n=d[1],a=d[2];if(i.dims.length<3||n.dims.length!==1||a.dims.length!==1)throw new Error("Invalid input shape.");if(n.dims[0]!==i.dims[1]||a.dims[0]!==i.dims[1])throw new Error("Input shapes are mismatched.");if(i.type!=="float32"&&i.type!=="float64"||n.type!=="float32"&&n.type!=="float64"||a.type!=="float32"&&a.type!=="float64")throw new Error("Invalid input type.");if(d[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}},708:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createPackedMatmulProgramInfoLoader=void 0;const r=t(2517),o=t(5060),c=t(2039),l=t(9390),h=t(2823),p=t(5623);e.createPackedMatmulProgramInfoLoader=(f,d,i)=>{const n=(a=d.length>2,u=i.activationCacheKey,{name:"MatMul (packed)",inputNames:a?["A","B","Bias"]:["A","B"],inputTypes:a?[c.TextureType.packed,c.TextureType.packed,c.TextureType.packed]:[c.TextureType.packed,c.TextureType.packed],cacheHint:u});var a,u;return Object.assign(Object.assign({},n),{get:()=>((m,g,_,b)=>{const y=_.length>2,v=y?"value += getBiasForMatmul();":"",x=_[0].dims,w=_[1].dims,S=r.BroadcastUtil.calcShape(x,w,!0),M=!r.ShapeUtil.areEqual(_[0].dims,_[1].dims);if(!S)throw new Error("Can't use matmul on the given tensors");const T=x[x.length-1],E=Math.ceil(T/2),R=x.length,I=w.length,k=(0,o.getGlsl)(m.session.backend.glContext.version),C=(0,l.getCoordsDataType)(S.length),z=S.length,O=(0,l.getGlChannels)(),{activationFunction:U,applyActivation:K}=(0,h.getActivationSnippet)(b),$=y?`${(0,p.getBiasForMatmul)(C,O,_[2].dims,S,!0)}`:"",J=M?`${function(le,de,Me,Ee){let Fe=[],Be=[];const Ce=Me[0].dims,je=Me[1].dims,ne=Ce.length,Qe=je.length,Pe=Ee.length,ze=Pe-ne,De=Pe-Qe;Fe=Ce.map((ce,fe)=>`coords.${de[fe+ze]}`),Fe[ne-1]="i*2",Fe.join(", "),Be=je.map((ce,fe)=>`coords.${de[fe+De]}`),Be[Qe-2]="i*2",Be.join(", ");const nt=r.BroadcastUtil.getBroadcastDims(Ce,Ee),qe=r.BroadcastUtil.getBroadcastDims(je,Ee),B=nt.map(ce=>`coords.${de[ce+ze]} = 0;`).join(`
`),D=qe.map(ce=>`coords.${de[ce+De]} = 0;`).join(`
`),re=`int lastDim = coords.${de[Pe-1]};
  coords.${de[Pe-1]} = coords.${de[Pe-2]};
  coords.${de[Pe-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${le} coords = getOutputCoords();
  ${re}
  ${B}
  vec4 outputValue = getA(${Fe});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${le} coords = getOutputCoords();
  ${re}
  ${D}
  vec4 outputValue = getB(${Be});
  return outputValue;
}`}(C,O,_,S)}`:"",ee=M?"getAAtOutCoordsMatmul(i)":`getA(${function(le,de){let Me="";for(let Ee=0;Ee<de-2;Ee++)Me+=`rc.${le[Ee]}, `;return Me+=`rc.${le[de-2]}, i*2`,Me}(O,R)})`,he=M?"getBAtOutCoordsMatmul(i)":`getB(${function(le,de){let Me="";for(let Ee=0;Ee<de-2;Ee++)Me+=`rc.${le[Ee]}, `;return Me+=`i*2, rc.${le[de-1]}`,Me}(O,I)})`,ie=`
            ${J}
            ${$}
            ${U}
            void main() {
              ${M?"":`${C} rc =
          getOutputCoords(); int lastDim = rc.${O[z-1]}; rc.${O[z-1]} =
          rc.${O[z-2]}; rc.${O[z-2]} = lastDim;
      `}

              vec4 value = vec4(0);
              for (int i = 0; i < ${E}; i++) {
                vec4 a = ${ee};
                vec4 b = ${he};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${v}
              ${K}
              ${k.output} = value;
            }`;return Object.assign(Object.assign({},g),{output:{dims:S,type:_[0].type,textureType:c.TextureType.packed},shaderSource:ie,hasMain:!0})})(f,n,d,i)})}},5623:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getBiasForMatmul=e.createMatmulProgramInfoLoader=e.parseMatMulAttributes=e.matMul=void 0;const r=t(2517),o=t(2039),c=t(9390),l=t(2823),h=t(708);function p(i,n){const a=(u=i.length>2,m=n.activationCacheKey,{name:"MatMul",inputNames:u?["A","B","Bias"]:["A","B"],inputTypes:u?[o.TextureType.unpacked,o.TextureType.unpacked,o.TextureType.unpacked]:[o.TextureType.unpacked,o.TextureType.unpacked],cacheHint:m});var u,m;return Object.assign(Object.assign({},a),{get:()=>function(g,_,b){const y=_[0].dims,v=_[1].dims,x=r.BroadcastUtil.calcShape(y,v,!0);if(!x)throw new Error("Can't use matmul on the given tensors");const w=(0,c.getCoordsDataType)(x.length),S=(0,c.getGlChannels)(),{activationFunction:M,applyActivation:T}=(0,l.getActivationSnippet)(b),E=_.length>2,R=E?"value += getBiasForMatmul();":"",I=E?`${d(w,S,_[2].dims,x,!1)}`:"",k=x.length,C=y.length,z=v.length,O=`
    ${M}
    ${I}
    float process(int indices[${k}]) {
        int a[${C}];
        int b[${z}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${y[y.length-1]}; ++k) {
            a[${C-1}] = k;
            b[${z-2}] = k;
            value += _A(a) * _B(b);
        }
        ${R}
        ${T}
        return value;
    }`;return Object.assign(Object.assign({},g),{output:{dims:x,type:_[0].type,textureType:o.TextureType.unpacked},shaderSource:O})}(a,i,n)})}e.matMul=(i,n,a)=>(f(n),i.session.pack?[i.run((0,h.createPackedMatmulProgramInfoLoader)(i,n,a),n)]:[i.run(p(n,a),n)]),e.parseMatMulAttributes=i=>(0,l.parseInternalActivationAttributes)(i.attributes),e.createMatmulProgramInfoLoader=p;const f=i=>{if(!i||i.length!==2)throw new Error("MatMul requires 2 inputs.");if(i[0].dims[i[0].dims.length-1]!==i[1].dims[i[1].dims.length-2])throw new Error("shared dimension does not match.");if(i[0].type!=="float32"&&i[0].type!=="float64"||i[1].type!=="float32"&&i[1].type!=="float64")throw new Error("inputs should be float type");if(i[0].type!==i[1].type)throw new Error("inputs types should match")};function d(i,n,a,u,m){let g="";const _=a.length,b=u.length,y=b-_;g=b<2&&_>0?"coords":a.map((w,S)=>`coords.${n[S+y]}`).join(", ");const v=r.BroadcastUtil.getBroadcastDims(a,u).map(w=>`coords.${n[w+y]} = 0;`).join(`
`);let x="vec4(outputValue.xx, outputValue.yy)";return r.ShapeUtil.size(a)===1&&(x="vec4(outputValue.x)"),m?`
vec4 getBiasForMatmul() {
  ${i} coords = getOutputCoords();
  ${v}
  vec4 outputValue = getBias(${g});
  return ${x};
}`:`
float getBiasForMatmul() {
  ${i} coords = getOutputCoords();
  ${v}
  return getBias(coords.x);
}`}e.getBiasForMatmul=d},2403:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createPackProgramInfoLoader=void 0;const r=t(5060),o=t(2039),c=t(9390),l=t(2827),h={name:"pack",inputNames:["A"],inputTypes:[o.TextureType.unpackedReversed]};e.createPackProgramInfoLoader=(p,f)=>Object.assign(Object.assign({},h),{get:()=>((d,i)=>{const n=(0,r.getGlsl)(d.session.backend.glContext.version),a=i.dims,u=a.length,m=i.dims.length,g=(0,c.getCoordsDataType)(m),_=(0,l.getChannels)("rc",m),b=(y=m,v=_,x=a[a.length-2],w=a[a.length-1],y===0||y===1?"":`
    int r = ${v[y-2]};
    int c = ${v[y-1]};
    int rp1 = ${v[y-2]} + 1;
    int cp1 = ${v[y-1]} + 1;
    bool rEdge = rp1 >= ${w};
    bool cEdge = cp1 >= ${x};
    `);var y,v,x,w;let S;S=u===0?[1,1]:u===1?[a[0],1]:[a[m-1],a[m-2]];const M=function(R,I,k){if(R===0)return"false";if(R===1)return`rc > ${I[0]}`;let C="";for(let z=R-2;z<R;z++)C+=`${k[z]} >= ${I[z-R+2]}`,z<R-1&&(C+="||");return C}(m,S,_),T=function(R,I){const k=R.length;if(k===0)return"getA(), 0, 0, 0";if(k===1)return`getA(rc),
            rc + 1 >= ${R[0]} ? 0. : getA(rc + 1),
            0, 0`;let C="";if(k>2)for(let z=0;z<k-2;++z)C+=`${I[z]},`;return`getA(${C}r, c),
          rEdge ? 0. : getA(${C}rp1, c),
          cEdge ? 0. : getA(${C}r, cp1),
          rEdge || cEdge ? 0. : getA(${C}rp1, cp1)`}(a,_),E=`
        void main() {
          ${g} rc = getOutputCoords();

          if(${M}) {
            ${n.output} = vec4(0);
          } else {
            ${b}

            ${n.output} = vec4(${T});
          }
        }
      `;return Object.assign(Object.assign({},h),{hasMain:!0,output:{dims:i.dims,type:i.type,textureType:o.TextureType.packed},shaderSource:E})})(p,f)})},2827:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.unpackFromChannel=e.getChannels=e.getVecChannels=void 0;const r=t(9390);function o(c,l){return(0,r.getGlChannels)(l).map(h=>`${c}.${h}`)}e.getVecChannels=o,e.getChannels=function(c,l){return l===1?[c]:o(c,l)},e.unpackFromChannel=function(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}},2870:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parsePadAttributesV11=e.padV11=e.parsePadAttributesV2=e.padV2=void 0;const r=t(246),o=t(2517),c=t(5060),l=t(2039),h={name:"Pad",inputNames:["A"],inputTypes:[l.TextureType.unpacked]};e.padV2=(g,_,b)=>(d(_),[g.run(Object.assign(Object.assign({},h),{cacheHint:b.cacheKey,get:()=>f(g,_[0],b)}),_)]),e.parsePadAttributesV2=g=>{const _=g.attributes.getString("mode","constant"),b=g.attributes.getFloat("value",0),y=g.attributes.getInts("pads");return(0,r.createAttributeWithCacheKey)({mode:_,value:b,pads:y})},e.padV11=(g,_,b)=>{i(_);const y=p(g,_,b);return(0,e.padV2)(g,[_[0]],y)},e.parsePadAttributesV11=g=>g.attributes.getString("mode","constant");const p=(g,_,b)=>{if(!g.session.isInitializer(_[1].dataId)||_.length>=3&&!g.session.isInitializer(_[2].dataId))throw new Error("dynamic pad attributes are not allowed");const y=Array.from(_[1].integerData),v=_.length>=3?_[2].floatData[0]:0;return(0,r.createAttributeWithCacheKey)({mode:b,pads:y,value:v})},f=(g,_,b)=>{const y=o.ShapeUtil.padShape(_.dims.slice(),b.pads),v=y.length,x=`
      ${n(g,_,b)}
      float process(int[${v}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[l.TextureType.unpacked],output:{dims:y,type:_.type,textureType:l.TextureType.unpacked},shaderSource:x}},d=g=>{if(!g||g.length!==1)throw new Error("Pad requires 1 input");if(g[0].type!=="float32"&&g[0].type!=="float64")throw new Error("Invalid input type.")},i=g=>{if(!g||g.length!==2&&g.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(g[1].type!=="int32")throw new Error("Invalid input type.");if(g.length>=3&&g[2].type==="string")throw new Error("Invalid input type.")},n=(g,_,b)=>{const y=(0,c.getGlsl)(g.session.backend.glContext.version),[v,x]=g.calculateTextureWidthAndHeight(_.dims,l.TextureType.unpacked),w=o.ShapeUtil.computeStrides(_.dims);switch(b.mode){case"constant":return a(y,_.dims,w,v,x,b.pads,b.value);case"reflect":return u(y,_.dims,w,v,x,b.pads);case"edge":return m(y,_.dims,w,v,x,b.pads);default:throw new Error("Invalid mode")}},a=(g,_,b,y,v,x,w)=>{const S=_.length;let M="";for(let T=S-1;T>=0;--T)M+=`
        k = m[${T}] - ${x[T]};
        if (k < 0)  return constant;
        if (k >= ${_[T]}) return constant;
        offset += k * ${b[T]};
        `;return`
      float padA(int m[${S}]) {
        const float constant = float(${w});
        int offset = 0;
        int k = 0;
        ${M}
        vec2 coords = offsetToCoords(offset, ${y}, ${v});
        float value = getColorAsFloat(${g.texture2D}(A, coords));
        return value;
      }
      `},u=(g,_,b,y,v,x)=>{const w=_.length;let S="";for(let M=w-1;M>=0;--M)S+=`
        k = m[${M}] - ${x[M]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(_[M]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${_[M]}) { k = _2n_1 - k; }
        }
        offset += k * ${b[M]};
        `;return`
      float padA(int m[${w}]) {
        int offset = 0;
        int k = 0;
        ${S}
        vec2 coords = offsetToCoords(offset, ${y}, ${v});
        float value = getColorAsFloat(${g.texture2D}(A, coords));
        return value;
      }
      `},m=(g,_,b,y,v,x)=>{const w=_.length;let S="";for(let M=w-1;M>=0;--M)S+=`
        k = m[${M}] - ${x[M]};
        if (k < 0)  k = 0;
        if (k >= ${_[M]}) k = ${_[M]-1};
        offset += k * ${b[M]};
      `;return`
      float padA(int m[${w}]) {
        int offset = 0;
        int k = 0;
        ${S}
        vec2 coords = offsetToCoords(offset, ${y}, ${v});
        float value = getColorAsFloat(${g.texture2D}(A, coords));
        return value;
      }
      `}},2143:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.globalMaxPool=e.parseMaxPoolAttributes=e.maxPool=e.parseGlobalAveragePoolAttributes=e.globalAveragePool=e.parseAveragePoolAttributes=e.averagePool=void 0;const r=t(246),o=t(2517),c=t(2039);e.averagePool=(m,g,_)=>{i(g);const b={name:"AveragePool",inputNames:["X"],inputTypes:[c.TextureType.unpacked],cacheHint:_.cacheKey};return[m.run(Object.assign(Object.assign({},b),{get:()=>l(g,b,!1,_)}),g)]},e.parseAveragePoolAttributes=m=>{const g=m.attributes.getString("auto_pad","NOTSET"),_=m.attributes.getInt("ceil_mode",0),b=m.attributes.getInt("count_include_pad",0)!==0,y=m.attributes.getInts("kernel_shape"),v=m.attributes.getInts("strides",[]),x=m.attributes.getInts("pads",[]);if(_!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return(0,r.createAttributeWithCacheKey)({autoPad:g,ceilMode:_,countIncludePad:b,kernelShape:y,strides:v,pads:x})};const l=(m,g,_,b)=>{const[y,v]=p(m,b,_),x=o.ShapeUtil.size(y.kernelShape);let w="";y.countIncludePad?w+=`value /= float(${x});`:w+=`value /= float(${x} - pad);`;const S=`
        ${n(m[0].dims,y,"value += _X(x);",w,"0.0")}
      `;return Object.assign(Object.assign({},g),{output:{dims:v,type:m[0].type,textureType:c.TextureType.unpacked},shaderSource:S})};e.globalAveragePool=(m,g,_)=>{i(g);const b={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[c.TextureType.unpacked],cacheHint:`${_.countIncludePad}`};return[m.run(Object.assign(Object.assign({},b),{get:()=>l(g,b,!0,_)}),g)]},e.parseGlobalAveragePoolAttributes=m=>{const g=m.attributes.getInt("count_include_pad",0)!==0;return(0,r.createAttributeWithCacheKey)({autoPad:"",ceilMode:0,countIncludePad:g,kernelShape:[],strides:[],pads:[]})},e.maxPool=(m,g,_)=>{i(g);const b={name:"MaxPool",inputNames:["X"],inputTypes:[c.TextureType.unpacked],cacheHint:_.cacheKey};return[m.run(Object.assign(Object.assign({},b),{get:()=>h(g,b,!1,_)}),g)]},e.parseMaxPoolAttributes=m=>{const g=m.attributes.getString("auto_pad","NOTSET"),_=m.attributes.getInt("ceil_mode",0),b=m.attributes.getInts("kernel_shape"),y=m.attributes.getInts("strides",[]),v=m.attributes.getInts("pads",[]),x=m.attributes.getInt("storage_order",0),w=m.attributes.getInts("dilations",[]);if(x!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(_!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return(0,r.createAttributeWithCacheKey)({autoPad:g,ceilMode:_,countIncludePad:!1,kernelShape:b,strides:y,pads:v,storageOrder:x,dilations:w})};const h=(m,g,_,b)=>{const[y,v]=p(m,b,_),x=`
      ${n(m[0].dims,y,`
      value = max(_X(x), value);
    `,"","-1e5")}
    `;return Object.assign(Object.assign({},g),{output:{dims:v,type:m[0].type,textureType:c.TextureType.unpacked},shaderSource:x})},p=(m,g,_)=>{const b=m[0].dims.slice(),y=Object.hasOwnProperty.call(g,"dilations"),v=g.kernelShape.slice(),x=g.strides.slice(),w=y?g.dilations.slice():[],S=g.pads.slice();o.PoolConvUtil.adjustPoolAttributes(_,b,v,x,w,S);const M=o.PoolConvUtil.computePoolOutputShape(_,b,x,w,v,S,g.autoPad),T=Object.assign({},g);return y?Object.assign(T,{kernelShape:v,strides:x,pads:S,dilations:w,cacheKey:g.cacheKey}):Object.assign(T,{kernelShape:v,strides:x,pads:S,cacheKey:g.cacheKey}),[T,M]},f={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},d={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[c.TextureType.unpacked]};e.globalMaxPool=(m,g)=>(i(g),[m.run(Object.assign(Object.assign({},d),{get:()=>h(g,d,!0,f)}),g)]);const i=m=>{if(!m||m.length!==1)throw new Error("Pool ops requires 1 input.");if(m[0].type!=="float32"&&m[0].type!=="float64")throw new Error("Invalid input type.")},n=(m,g,_,b,y)=>{const v=m.length;if(g.kernelShape.length<=2){const x=g.kernelShape[g.kernelShape.length-1],w=g.strides[g.strides.length-1],S=g.pads[g.pads.length/2-1],M=g.pads[g.pads.length-1],T=m[v-1];let E="",R="",I="";if(E=S+M!==0?`
          for (int i = 0; i < ${x}; i++) {
            x[${v} - 1] = indices[${v} - 1] * ${w} - ${S} + i;
            if (x[${v} - 1] < 0 || x[${v} - 1] >= ${T}) {
              pad++;
              continue;
            }
            ${_}
          }`:`
          for (int i = 0; i < ${x}; i++) {
            x[${v} - 1] = indices[${v} - 1] * ${w} - ${S} + i;
            ${_}
          }`,g.kernelShape.length===2){const k=g.kernelShape[g.kernelShape.length-2],C=g.strides[g.strides.length-2],z=g.pads[g.pads.length/2-2],O=g.pads[g.pads.length-2],U=m[v-2];R=z+O!==0?`
            for (int j = 0; j < ${k}; j++) {
              x[${v} - 2] = indices[${v} - 2] * ${C} - ${z} + j;
              if (x[${v} - 2] < 0 || x[${v} - 2] >= ${U}) {
                pad+= ${x};
                continue;
              }
          `:`
            for (int j = 0; j < ${k}; j++) {
              x[${v} - 2] = indices[${v} - 2] * ${C} - ${z} + j;
            `,I=`
          }
        `}return`
        float process(int indices[${v}]) {
          int x[${v}];
          copyVec(indices, x);

          float value = ${y};
          int pad = 0;
          ${R}
          ${E}
          ${I}
          ${b}
          return value;
        }
      `}{const x=o.ShapeUtil.size(g.kernelShape),w=o.ShapeUtil.computeStrides(g.kernelShape),S=w.length,M=g.pads.length,T=u(S),E=a(m,"inputDims"),R=a(g.pads,"pads"),I=a(w,"kernelStrides"),k=a(g.strides,"strides");let C="";return C=g.pads.reduce((z,O)=>z+O)?`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${_}
          }`:`
          }
          ${_}
        `,`
        ${T}
        float process(int indices[${v}]) {
          int x[${v}];
          copyVec(indices, x);
          int offset[${S}];
          int pads[${M}];
          int inputDims[${v}];
          int kernelStrides[${S}];
          int strides[${S}];
          ${R}
          ${E}
          ${k}
          ${I}

          float value = ${y};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${x}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${v} - ${S}; j < ${v}; j++) {
              x[j] = indices[j] * strides[j - ${v} + ${S}]
                + offset[j - ${v} + ${S}] - pads[j - 2];
              ${C}
          }
          ${b}

          return value;
        }
      `}},a=(m,g)=>{let _="";for(let b=0;b<m.length;b++)_+=`
      ${g}[${b}] = ${m[b]};
    `;return _},u=m=>`
  void offsetToIndices(int offset, int[${m}] strides, out int[${m}] indices) {
    if (${m} == 0) {
      return;
    }
    for (int i = 0; i < ${m} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${m} - 1] = offset;
  }`},4939:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.reduceLogSumSquare=e.reduceLogSum=e.reduceProd=e.reduceMin=e.reduceMax=e.reduceMean=e.reduceSum=e.parseReduceAttributes=void 0;const r=t(246),o=t(782),c=t(2517),l=t(2039),h=(d,i,n,a,u)=>{f(i);const m={name:a,inputNames:["A"],inputTypes:[l.TextureType.unpacked]};return[d.run(Object.assign(Object.assign({},m),{cacheHint:n.cacheKey,get:()=>p(d,i,n,a,u,m)}),i)]};e.parseReduceAttributes=d=>{const i=d.attributes.getInts("axes",[]),n=d.attributes.getInt("keepdims",1)===1;return(0,r.createAttributeWithCacheKey)({axes:i,keepDims:n})};const p=(d,i,n,a,u,m)=>{const g=[],_=i[0].dims.length||1,b=[],y=c.ShapeUtil.normalizeAxes(n.axes,i[0].dims.length),v=u(i,y);let x=v[1];for(let S=0;S<i[0].dims.length;S++)y.indexOf(S)>=0||y.length===0?(n.keepDims&&g.push(1),x=`
          for(int j${S} = 0; j${S} < ${i[0].dims[S]}; j${S}++) {
            inputIdx[${S}] = j${S};
            ${x}
          }`):(b.push(`inputIdx[${S}] = outputIdx[${g.length}];`),g.push(i[0].dims[S]));const w=`
      float process(int outputIdx[${g.length||1}]) {
        float value;                 // final result
        int inputIdx[${_}];      // addressing input data
        ${b.join(`
`)}
        ${v[0]}       // init ops for reduce max/min
        ${x}
        ${v[2]}       // final computation for reduce mean
        return value;
      }`;return Object.assign(Object.assign({},m),{output:{dims:g,type:i[0].type,textureType:l.TextureType.unpacked},shaderSource:w})},f=d=>{if(!d||d.length!==1)throw new Error("Reduce op requires 1 input.");if(o.NUMBER_TYPES.indexOf(d[0].type)===-1)throw new Error("Invalid input type.")};e.reduceSum=(d,i,n)=>h(d,i,n,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),e.reduceMean=(d,i,n)=>h(d,i,n,"ReduceMean",(a,u)=>{let m=1;for(let g=0;g<a[0].dims.length;g++)(u.indexOf(g)>=0||u.length===0)&&(m*=a[0].dims[g]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${m}.;`]}),e.reduceMax=(d,i,n)=>h(d,i,n,"ReduceMax",(a,u)=>{const m=[];for(let g=0;g<a[0].dims.length;g++)(u.indexOf(g)>=0||u.length===0)&&m.push(`inputIdx[${g}] = 0;`);return[`${m.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),e.reduceMin=(d,i,n)=>h(d,i,n,"ReduceMin",(a,u)=>{const m=[];for(let g=0;g<a[0].dims.length;g++)(u.indexOf(g)>=0||u.length===0)&&m.push(`inputIdx[${g}] = 0;`);return[`${m.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),e.reduceProd=(d,i,n)=>h(d,i,n,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),e.reduceLogSum=(d,i,n)=>h(d,i,n,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),e.reduceLogSumSquare=(d,i,n)=>h(d,i,n,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])},7019:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isReshapeCheap=e.processDims3D=e.createPackedReshape3DProgramInfoLoader=void 0;const r=t(2517),o=t(5060),c=t(2039),l=t(2827);e.createPackedReshape3DProgramInfoLoader=(h,p,f)=>{const d=(i=>({name:"Reshape (packed)",inputTypes:[c.TextureType.packed],inputNames:["A"],cacheHint:`${i}`}))(f);return Object.assign(Object.assign({},d),{get:()=>((i,n,a,u)=>{const m=n.dims,g=u;let _="";for(let v=0;v<4;v++){let x="";switch(v){case 0:x="outputCoords = rc;";break;case 1:x="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:x="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:x="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}_+=`
        ${x}
        ${v>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${v}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${v>0?"}":""}
      `}const b=(0,o.getGlsl)(i.session.backend.glContext.version),y=`
      ${function(v){const x=r.ShapeUtil.computeStrides(v),w=["b","r","c"],S="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${x.map((M,T)=>`int ${w[T]} = ${S} / ${M}; ${T===x.length-1?`int ${w[T+1]} = ${S} - ${w[T]} * ${M}`:`index -= ${w[T]} * ${M}`};`).join("")}
      return ivec3(b, r, c);
    }
  `}(m)}
      ${function(v){const x=r.ShapeUtil.computeStrides(v);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${x[0]} + coords.z * ${x[1]} + coords.y;
  }
`}(g)}
      ${(0,l.unpackFromChannel)()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${g[2]};
        int cols = ${g[1]};

        ${_}
        ${b.output} = result;
      }
    `;return Object.assign(Object.assign({},a),{output:{dims:g,type:n.type,textureType:c.TextureType.packed},shaderSource:y,hasMain:!0})})(h,p,d,f)})},e.processDims3D=function(h){if(h.length===0)return[1,1,1];let p=1;for(let f=0;f<h.length-2;++f)p*=h[f];return[p,h.length>1?h[h.length-2]:1,h[h.length-1]]},e.isReshapeCheap=function(h,p){let f=!1;return f=h.length===0||p.length===0||(h.length<2||p.length<2?h[h.length-1]===p[p.length-1]:h[h.length-1]===p[p.length-1]&&h[h.length-2]===p[p.length-2]),f}},718:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.reshape=void 0;const r=t(2517);e.reshape=(o,c)=>{const l=r.ShapeUtil.calculateReshapedDims(c[0].dims,c[1].integerData);return o.session.pack?[o.reshapePacked(c[0],l)]:[o.reshapeUnpacked(c[0],l)]}},2268:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseResizeAttributesV11=e.parseResizeAttributesV10=e.resize=void 0;const r=t(5060),o=t(2039),c=t(9390),l=t(2827),h=t(9793),p={name:"Resize",inputNames:["A"],inputTypes:[o.TextureType.packed]};e.resize=(a,u,m)=>((0,h.validateInputs)(u,m),[a.run(Object.assign(Object.assign({},p),{cacheHint:m.cacheKey,get:()=>f(a,u,m)}),u)]),e.parseResizeAttributesV10=a=>(0,h.parseUpsampleAttributes)(a,10),e.parseResizeAttributesV11=a=>(0,h.parseUpsampleAttributes)(a,11);const f=(a,u,m)=>{const g=(0,r.getGlsl)(a.session.backend.glContext.version),[_,b]=d(u,m);if(_.every(C=>C===1)&&m.coordinateTransformMode!=="tf_crop_and_resize")return Object.assign(Object.assign({},p),{output:{dims:b,type:u[0].type,textureType:o.TextureType.packed},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${g.texture2D}(X, TexCoords);
                    ${g.output} = v;
                }`});const y=b.length;if(y<2)throw new Error(`output dimension should be at least 2, but got ${y}`);const v=b[y-2],x=b[y-1],w=u[0].dims;if(y!==w.length)throw new Error(`output dimension should match input ${w.length}, but got ${y}`);const S=w[y-2],M=w[y-1],T=_[y-2],E=_[y-1];let R="";if(m.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${m.mode}'`);switch(m.coordinateTransformMode){case"asymmetric":R=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":R=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":R=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${x}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${v}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${x}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${v}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":R=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${x}.0 - 1.0, ${v}.0 - 1.0, ${x}.0 - 1.0,
                            ${v}.0 - 1.0);
                        vec4 original = vec4(${M}.0 - 1.0, ${S}.0 - 1.0, ${M}.0 - 1.0,
                            ${S}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${m.coordinateTransformMode}'`)}const I=(0,c.getCoordsDataType)(y),k=`
            const vec2 inputWH = vec2(${S}.0, ${M}.0);
            const vec4 scaleWHWH = vec4(float(${T}), float(${E}), float(${T}), float(${E}));
            ${(0,l.unpackFromChannel)()}
            ${R}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${I} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${v-1};
                bool hasNextCol = rc.z < ${x-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${g.output} = vec4(newValue);
            }
        `;return Object.assign(Object.assign({},p),{output:{dims:b,type:u[0].type,textureType:o.TextureType.packed},hasMain:!0,shaderSource:k})},d=(a,u)=>{const m=a[0].dims;let g,_=u.scales;if(_.length===0){const y=a[u.scalesInputIdx];if(y&&y.size!==0){if(a[u.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");_=i(y,u.mode,u.isResize)}else{const v=a[u.sizesInputIdx];if(!v||v.size===0)throw new Error("Either scales or sizes MUST be provided as input.");g=Array.from(v.integerData),_=n(g,m,u.mode,u.isResize)}}else if(a[u.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");const b=g||m.map((y,v)=>Math.floor(y*_[v]));return[_,b]},i=(a,u,m)=>{const g=Array.from(a.floatData);return(0,h.scalesValidation)(g,u,m),g},n=(a,u,m,g)=>{const _=u.length,b=new Array(_);for(let y=0,v=_;y<v;y++)if(u[y]===0){if(a[y]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");b[y]=1}else b[y]=a[y]/u[y];return(0,h.scalesValidation)(b,m,g),b}},8117:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.shape=void 0;const r=t(9162);e.shape=(c,l)=>(o(l),[new r.Tensor([l[0].dims.length],"int32",void 0,void 0,new Int32Array(l[0].dims))]);const o=c=>{if(!c||c.length!==1)throw new Error("Shape requires 1 input.")}},2278:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sliceV10=e.parseSliceAttributes=e.slice=void 0;const r=t(246),o=t(782),c=t(2517),l=t(2039),h={name:"Slice",inputNames:["A"],inputTypes:[l.TextureType.unpacked]};e.slice=(n,a,u)=>(f(a),[n.run(Object.assign(Object.assign({},h),{cacheHint:u.cacheKey,get:()=>p(n,a[0],u)}),a)]),e.parseSliceAttributes=n=>{const a=n.attributes.getInts("starts"),u=n.attributes.getInts("ends"),m=n.attributes.getInts("axes",[]);return(0,r.createAttributeWithCacheKey)({starts:a,ends:u,axes:m})};const p=(n,a,u)=>{const m=u.axes.length===0?a.dims.slice(0).map((w,S)=>S):u.axes,g=c.ShapeUtil.normalizeAxes(m,a.dims.length),_=u.starts.map((w,S)=>w>a.dims[g[S]]-1?a.dims[g[S]]:c.ShapeUtil.normalizeAxis(w,a.dims[g[S]])),b=u.ends.map((w,S)=>w>a.dims[g[S]]-1?a.dims[g[S]]:c.ShapeUtil.normalizeAxis(w,a.dims[g[S]])),y=a.dims.slice(),v=[];for(let w=0;w<g.length;w++)y[g[w]]=b[w]-_[w],_[w]>0&&v.push(`outputIdx[${g[w]}] += ${_[w]};`);const x=`
      float process(int outputIdx[${y.length}]) {
        ${v.join(`
      `)}
        return _A(outputIdx);
      }`;return Object.assign(Object.assign({},h),{output:{dims:y,type:a.type,textureType:l.TextureType.unpacked},shaderSource:x})},f=n=>{if(!n||n.length!==1)throw new Error("Slice requires 1 input.");if(o.NUMBER_TYPES.indexOf(n[0].type)===-1)throw new Error("Invalid input type.")};e.sliceV10=(n,a)=>{i(a);const u=d(n,a);return[n.run(Object.assign(Object.assign({},h),{cacheHint:u.cacheKey,get:()=>p(n,a[0],u)}),[a[0]])]};const d=(n,a)=>{if(!n.session.isInitializer(a[1].dataId)||!n.session.isInitializer(a[2].dataId)||a.length>=4&&!n.session.isInitializer(a[3].dataId)||a.length>=5&&!n.session.isInitializer(a[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(a.length>=5&&a[4].integerData.some(_=>_!==1))throw new Error("currently non-1 steps is not supported for Slice");const u=Array.from(a[1].integerData),m=Array.from(a[2].integerData),g=a.length>=4?Array.from(a[3].integerData):[];return{starts:u,ends:m,axes:g,cacheKey:`${g};${u};${m}`}},i=n=>{if(!n||n.length<3||n.length>5)throw new Error("Invalid input number.");if(n[1].type!=="int32"||n[1].dims.length!==1)throw new Error("Invalid input type.");if(n[2].type!=="int32"||n[2].dims.length!==1)throw new Error("Invalid input type.");if(n.length>=4&&(n[3].type!=="int32"||n[3].dims.length!==1))throw new Error("Invalid input type.");if(n.length>=5&&(n[4].type!=="int32"||n[4].dims.length!==1))throw new Error("Invalid input type.")}},5524:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.softmaxV13=e.parseSoftmaxAttributesV13=e.parseSoftmaxAttributes=e.softmax=void 0;const r=t(246),o=t(2517),c=t(5060),l=t(2039),h=t(3738),p={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[l.TextureType.unpacked]},f={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[l.TextureType.unpacked,l.TextureType.unpacked]},d={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[l.TextureType.unpacked,l.TextureType.unpacked,l.TextureType.unpacked]};e.softmax=(g,_,b)=>{m(_);const y=_[0].dims.slice(),v=o.ShapeUtil.normalizeAxis(b.axis,y.length),x=o.ShapeUtil.sizeToDimension(y,v),w=o.ShapeUtil.sizeFromDimension(y,v);return i(g,_,b,x,w)},e.parseSoftmaxAttributes=g=>(0,r.createAttributeWithCacheKey)({axis:g.attributes.getInt("axis",1)}),e.parseSoftmaxAttributesV13=g=>(0,r.createAttributeWithCacheKey)({axis:g.attributes.getInt("axis",-1)}),e.softmaxV13=(g,_,b)=>{m(_);const y=_[0].dims.slice(),v=o.ShapeUtil.normalizeAxis(b.axis,y.length),x=y.length,w=v!==x-1,S=[];let M,T=[],E=[];w&&(T=Array.from({length:x}).map((C,z)=>z),T[v]=x-1,T[x-1]=v,T.map(C=>S.push(y[C])),M=(0,r.createAttributeWithCacheKey)({perm:T}),E=(0,h.transpose)(g,_,M));const R=w?o.ShapeUtil.sizeToDimension(S,x-1):o.ShapeUtil.sizeToDimension(y,x-1),I=w?o.ShapeUtil.sizeFromDimension(S,x-1):o.ShapeUtil.sizeFromDimension(y,x-1),k=i(g,w?E:_,b,R,I);return w?(0,h.transpose)(g,k,M):k};const i=(g,_,b,y,v)=>{const x=n(g,_[0],y,v,[y]),w=g.run(Object.assign(Object.assign({},p),{cacheHint:b.cacheKey,get:()=>x}),_),S=a(g,_[0],y,v,x.output.dims,[y]),M=g.run(Object.assign(Object.assign({},f),{cacheHint:b.cacheKey,get:()=>S}),[_[0],w]),T=u(g,_[0],y,v,x.output.dims,S.output.dims);return[g.run(Object.assign(Object.assign({},d),{cacheHint:b.cacheKey,get:()=>T}),[_[0],w,M])]},n=(g,_,b,y,v)=>{const[x,w]=g.calculateTextureWidthAndHeight(_.dims,l.TextureType.unpacked),S=v.length;if(b<1||y<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(v.length!==1)throw new Error("Dimensionality of the output should be 1");if(v[0]!==b)throw new Error("Shape of the output should be equal to logical row count");const M=(0,c.getGlsl)(g.session.backend.glContext.version),T=`
      float process(int[${S}] indices) {
        int logical_row_start_offset = indices[0] * ${y};

        float max = getColorAsFloat(${M.texture2D}(A, offsetToCoords(logical_row_start_offset, ${x},
        ${w} )));
        for(int i=1; i<${y}; ++i)
        {
          float current = getColorAsFloat(${M.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${x}, ${w})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return Object.assign(Object.assign({},p),{output:{dims:v,type:_.type,textureType:l.TextureType.unpacked},shaderSource:T})},a=(g,_,b,y,v,x)=>{const[w,S]=g.calculateTextureWidthAndHeight(_.dims,l.TextureType.unpacked),M=x.length;if(b<1||y<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(x.length!==1)throw new Error("Dimensionality of the output should be 1");if(x[0]!==b)throw new Error("Shape of the output should be equal to logical row count");if(v.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(v[0]!==b)throw new Error("Shape of the intermediate results should be equal to logical row count");const T=`
      float process(int[${M}] indices) {
        int logical_row_start_offset = indices[0] * ${y};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${y}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${(0,c.getGlsl)(g.session.backend.glContext.version).texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${w}, ${S}))) - max);
        }

        return norm_factor;
      }`;return Object.assign(Object.assign({},f),{output:{dims:x,type:_.type,textureType:l.TextureType.unpacked},shaderSource:T})},u=(g,_,b,y,v,x)=>{const[w,S]=g.calculateTextureWidthAndHeight(_.dims,l.TextureType.unpacked),M=_.dims.length;if(b<1||y<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(v.length!==1||x.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(v[0]!==b||x[0]!==b)throw new Error("Shape of the intermediate results should be equal to logical row count");const T=`
      float process(int[${M}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${w}, ${S});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${y};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return Object.assign(Object.assign({},d),{output:{dims:_.dims,type:_.type,textureType:l.TextureType.unpacked},shaderSource:T})},m=g=>{if(!g||g.length!==1)throw new Error("Softmax requires 1 input.");if(g[0].type!=="float32"&&g[0].type!=="float64")throw new Error("Invalid input type")}},5975:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseSplitAttributes=e.split=void 0;const r=t(246),o=t(2517),c=t(2039),l={name:"Split",inputNames:["A"],inputTypes:[c.TextureType.unpacked]};e.split=(d,i,n)=>{f(i);const a=o.ShapeUtil.normalizeAxis(n.axis,i[0].dims.length),u=h(d,i,a,n),m=[];for(let g=0;g<u;++g)m.push(d.run(Object.assign(Object.assign({},l),{cacheHint:`${n.cacheKey};${g}`,get:()=>p(d,i[0],n,a,g)}),i));return m},e.parseSplitAttributes=d=>{const i=d.attributes.getInt("axis",0),n=d.attributes.getInts("split",[]),a=d.outputs.length;return(0,r.createAttributeWithCacheKey)({axis:i,split:n,numOutputs:a})};const h=(d,i,n,a)=>{const[,u]=o.SplitUtil.splitShape(i[0].dims,n,a.split,a.numOutputs);return u.length},p=(d,i,n,a,u)=>{const[m,g]=o.SplitUtil.splitShape(i.dims,a,n.split,n.numOutputs),_=g[u],b=m[u],y=`
      float process(int indices[${b.length}]) {
        indices[${a}] += ${_};
        return _A(indices);
      }
    `;return Object.assign(Object.assign({},l),{cacheHint:`${n.cacheKey}:${u}`,output:{dims:b,type:i.type,textureType:c.TextureType.unpacked},shaderSource:y})},f=d=>{if(!d||d.length!==1)throw new Error("Split requires one input.");if(d[0].type!=="int8"&&d[0].type!=="uint8"&&d[0].type!=="int16"&&d[0].type!=="uint16"&&d[0].type!=="int32"&&d[0].type!=="uint32"&&d[0].type!=="float32"&&d[0].type!=="float64"&&d[0].type!=="bool")throw new Error("Invalid input type.")}},3933:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseSqueezeAttributes=e.squeezeV13=e.squeeze=void 0;const r=t(2517);e.squeeze=(l,h,p)=>{o(h);const f=r.ShapeUtil.squeezeShape(h[0].dims,p);return[l.reshapeUnpacked(h[0],f)]},e.squeezeV13=(l,h)=>(c(h),(0,e.squeeze)(l,[h[0]],Array.from(h[1].integerData))),e.parseSqueezeAttributes=l=>l.attributes.getInts("axes");const o=l=>{if(!l||l.length!==1)throw new Error("Squeeze requires 1 input.");if(l[0].type==="string")throw new Error("invalid input tensor types.")},c=l=>{if(!l||l.length!==2)throw new Error("Squeeze requires 2 inputs.");if(l[1].type!=="int32")throw new Error("Invalid input type.")}},6558:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sum=void 0;const r=t(5060),o=t(2039);e.sum=(h,p)=>{l(p);const f={name:"Sum",inputNames:p.map((d,i)=>`X${i}`),inputTypes:new Array(p.length).fill(o.TextureType.unpacked)};return[h.run(Object.assign(Object.assign({},f),{get:()=>c(h,p,f)}),p)]};const c=(h,p,f)=>{const d=(0,r.getGlsl)(h.session.backend.glContext.version),i=p[0].dims.slice(),n=`
      void main() {
        vec4 result = ${p.map((a,u)=>`${d.texture2D}(X${u},TexCoords)`).join(" + ")};
        ${d.output} = result;
      }
    `;return Object.assign(Object.assign({},f),{output:{dims:i,type:p[0].type,textureType:o.TextureType.unpacked},hasMain:!0,shaderSource:n})},l=h=>{if(!h||h.length===0)throw new Error("Sum requires inputs.");const p=h[0].dims.length;for(let f=1;f<h.length;f++){if(p!==h[f].dims.length)throw new Error("Input shapes are mismatched.");for(let d=0;d<p;d++)if(h[0].dims[d]!==h[f].dims[d])throw new Error("Input shapes are not matched.")}if(h[0].type!=="float32"&&h[0].type!=="float64")throw new Error("Invalid input type.");for(let f=1;f<h.length;f++)if(h[0].type!==h[f].type)throw new Error("Input types are not matched.")}},5723:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tile=void 0;const r=t(782),o=t(2039);e.tile=(h,p)=>{l(p);const f={name:"Tile",inputNames:["A"],inputTypes:[o.TextureType.unpacked]};return[h.run(Object.assign(Object.assign({},f),{get:()=>c(h,p,f)}),p)]};const c=(h,p,f)=>{const d=p[0].dims.slice(),i=new Array(d.length),n=[];for(let m=0;m<d.length;m++)i[m]=d[m]*p[1].numberData[m],n.push(`inputIdx[${m}] = int(mod(float(outputIdx[${m}]), ${d[m]}.));`);const a=i.length,u=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${a}];
        ${n.join(`
`)}
        return _A(inputIdx);
      }
    `;return Object.assign(Object.assign({},f),{output:{dims:i,type:p[0].type,textureType:o.TextureType.unpacked},shaderSource:u})},l=h=>{if(!h||h.length!==2)throw new Error("Tile requires 2 input.");if(h[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(h[1].dims[0]!==h[0].dims.length)throw new Error("Invalid input shape.");if(r.NUMBER_TYPES.indexOf(h[0].type)===-1)throw new Error("Invalid input type.");if(h[1].type!=="int32"&&h[1].type!=="int16")throw new Error("Invalid repeat type.")}},3738:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseTransposeAttributes=e.transpose=void 0;const r=t(246),o=t(2517),c=t(2039),l={name:"Transpose",inputNames:["A"],inputTypes:[c.TextureType.unpacked]};e.transpose=(n,a,u)=>(i(a),[n.run(Object.assign(Object.assign({},l),{cacheHint:u.cacheKey,get:()=>h(n,a[0],u.perm)}),a)]),e.parseTransposeAttributes=n=>(0,r.createAttributeWithCacheKey)({perm:n.attributes.getInts("perm",[])});const h=(n,a,u)=>{const m=a.dims;u=p(m,u);const g=f(m,u),_=m.length,b=`
      ${d("perm",u,_)}
      float process(int indices[${_}]) {
        int a[${_}];
        perm(a, indices);
        return _A(a);
      }`;return Object.assign(Object.assign({},l),{output:{dims:g,type:a.type,textureType:c.TextureType.unpacked},shaderSource:b})},p=(n,a)=>(a&&a.length!==n.length&&(a=[...n.keys()].reverse()),a),f=(n,a)=>(a=p(n,a),o.ShapeUtil.sortBasedOnPerm(n,a)),d=(n,a,u)=>{const m=[];m.push(`void ${n}(out int a[${u}], int src[${u}]) {`);for(let g=0;g<u;++g)m.push(`	a[${a[g]}]=src[${g}];`);return m.push("	}"),m.join(`
`)},i=n=>{if(!n||n.length!==1)throw new Error("Transpose requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("input should be float tensor")}},8710:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.encodeAsUint8=void 0;const r=t(5060),o=t(2039);e.encodeAsUint8=(c,l)=>{const h=l.shape,p=(0,r.getGlsl)(c.session.backend.glContext.version),f=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
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

    void main() {
      float value = ${p.texture2D}(X,TexCoords).r;
      ${p.output} = encodeAsUint8(value);
    }`,d={name:"Uint8Encode",inputTypes:[o.TextureType.unpacked],inputNames:["X"],output:{dims:h,type:l.tensor.type,textureType:o.TextureType.downloadUint8AsFloat},shaderSource:f,hasMain:!0};return c.executeProgram(d,[l.tensor])}},4909:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tanh=e.tan=e.sqrt=e.sin=e.sigmoid=e.relu=e.not=e.neg=e.log=e.parseLeakyReluAttributes=e.leakyRelu=e.identity=e.floor=e.exp=e.parseEluAttributes=e.elu=e.cos=e.ceil=e.clipV11=e.parseClipAttributes=e.clip=e.atan=e.asin=e.acos=e.abs=e.glslTanh=e.glslTan=e.glslSqrt=e.glslSigmoid=e.glslRelu=e.glslSin=e.glslNot=e.glslNeg=e.glslLog=e.glslLeakyRelu=e.glslIdentity=e.glslClip=e.glslFloor=e.glslExp=e.glslElu=e.glslCos=e.glslCeil=e.glslAtan=e.glslAsin=e.glslAcos=e.glslAbs=void 0;const r=t(246),o=t(2517),c=t(8520),l=t(5060),h=t(2039);function p(){return k("abs")}function f(){return k("acos")}function d(){return k("asin")}function i(){return k("atan")}function n(){return k("ceil")}function a(){return k("cos")}function u(O){const U="elu";return{body:`
  const float alpha = float(${O});

  float ${U}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${U}_(vec4 v) {
    return vec4(${U}_(v.x), ${U}_(v.y), ${U}_(v.z), ${U}_(v.w));
  }
  `,name:U,type:c.FunctionType.ValueBased}}function m(){return k("exp")}function g(){return k("floor")}function _(O,U){const K="clip";return{body:`
  const float min = float(${O});
  const float max = float(${U});

  float ${K}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${K}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:K,type:c.FunctionType.ValueBased}}function b(){const O="indentity";return{body:`
  float ${O}_(float a) {
    return a;
  }
  vec4 ${O}_(vec4 v) {
    return v;
  }
  `,name:O,type:c.FunctionType.ValueBased}}function y(O){const U="leakyRelu";return{body:`
  const float alpha = float(${O});

  float ${U}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${U}_(vec4 v) {
    return vec4(${U}_(v.x), ${U}_(v.y), ${U}_(v.z), ${U}_(v.w));
  }
  `,name:U,type:c.FunctionType.ValueBased}}function v(){return k("log")}function x(){const O="neg";return{body:`
  float ${O}_(float a) {
    return -a;
  }
  vec4 ${O}_(vec4 v) {
    return -v;
  }
  `,name:O,type:c.FunctionType.ValueBased}}function w(){const O="not";return{body:`
  float ${O}_(float a) {
    return float( ! bool(a) );
  }
  bool ${O}_(bool a) {
    return !a;
  }
  vec4 ${O}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${O}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:O,type:c.FunctionType.ValueBased}}function S(){return k("sin")}function M(){const O="relu";return{body:`
  float ${O}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${O}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:O,type:c.FunctionType.ValueBased}}function T(){const O="sigmoid";return{body:`
  float ${O}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${O}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:O,type:c.FunctionType.ValueBased}}function E(){return k("sqrt")}function R(){return k("tan")}function I(){const O="tanh";return{body:`
  float ${O}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${O}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:O,type:c.FunctionType.ValueBased}}function k(O){return{body:`
  float ${O}_(float a) {
    return ${O}(a);
  }
  vec4 ${O}_(vec4 v) {
    return ${O}(v);
  }
  `,name:O,type:c.FunctionType.ValueBased}}e.glslAbs=p,e.glslAcos=f,e.glslAsin=d,e.glslAtan=i,e.glslCeil=n,e.glslCos=a,e.glslElu=u,e.glslExp=m,e.glslFloor=g,e.glslClip=_,e.glslIdentity=b,e.glslLeakyRelu=y,e.glslLog=v,e.glslNeg=x,e.glslNot=w,e.glslSin=S,e.glslRelu=M,e.glslSigmoid=T,e.glslSqrt=E,e.glslTan=R,e.glslTanh=I;const C=(O,U,K,$)=>{const J=O.session.pack?h.TextureType.packed:h.TextureType.unpacked,ee={name:K.name,inputTypes:[J],inputNames:["A"],cacheHint:$};return Object.assign(Object.assign({},ee),{get:()=>((he,ie,le,de)=>{const Me=he.session.pack?h.TextureType.packed:h.TextureType.unpacked,Ee=(0,l.getGlsl)(he.session.backend.glContext.version);return Object.assign(Object.assign({},ie),{output:{dims:le.dims,type:le.type,textureType:Me},shaderSource:`
     ${de.body}
     void main() {
       vec4 v = ${Ee.texture2D}(A, TexCoords);
       v = ${de.name}_(v);
       ${Ee.output} = v;
     }
     `,hasMain:!0})})(O,ee,U,K)})};e.abs=(O,U)=>[O.run(C(O,U[0],p()),U)],e.acos=(O,U)=>[O.run(C(O,U[0],f()),U)],e.asin=(O,U)=>[O.run(C(O,U[0],d()),U)],e.atan=(O,U)=>[O.run(C(O,U[0],i()),U)],e.clip=(O,U,K)=>[O.run(C(O,U[0],_(K.min,K.max),K.cacheKey),U)],e.parseClipAttributes=O=>(0,r.createAttributeWithCacheKey)({min:O.attributes.getFloat("min",o.MIN_CLIP),max:O.attributes.getFloat("max",o.MAX_CLIP)}),e.clipV11=(O,U)=>{const K=z(O,U);return(0,e.clip)(O,[U[0]],K)};const z=(O,U)=>{if(U.length>=3&&(!O.session.isInitializer(U[1].dataId)||!O.session.isInitializer(U[2].dataId)))throw new Error("dynamic clip attributes are not allowed");const K=U.length>=3?U[1].numberData[0]:o.MIN_CLIP,$=U.length>=3?U[2].numberData[0]:o.MAX_CLIP;return(0,r.createAttributeWithCacheKey)({min:K,max:$})};e.ceil=(O,U)=>[O.run(C(O,U[0],n()),U)],e.cos=(O,U)=>[O.run(C(O,U[0],a()),U)],e.elu=(O,U,K)=>[O.run(C(O,U[0],u(K.alpha),K.cacheKey),U)],e.parseEluAttributes=O=>(0,r.createAttributeWithCacheKey)({alpha:O.attributes.getFloat("alpha",1)}),e.exp=(O,U)=>[O.run(C(O,U[0],m()),U)],e.floor=(O,U)=>[O.run(C(O,U[0],g()),U)],e.identity=(O,U)=>[O.run(C(O,U[0],b()),U)],e.leakyRelu=(O,U,K)=>[O.run(C(O,U[0],y(K.alpha),K.cacheKey),U)],e.parseLeakyReluAttributes=O=>(0,r.createAttributeWithCacheKey)({alpha:O.attributes.getFloat("alpha",.01)}),e.log=(O,U)=>[O.run(C(O,U[0],v()),U)],e.neg=(O,U)=>[O.run(C(O,U[0],x()),U)],e.not=(O,U)=>[O.run(C(O,U[0],w()),U)],e.relu=(O,U)=>[O.run(C(O,U[0],M()),U)],e.sigmoid=(O,U)=>[O.run(C(O,U[0],T()),U)],e.sin=(O,U)=>[O.run(C(O,U[0],S()),U)],e.sqrt=(O,U)=>[O.run(C(O,U[0],E()),U)],e.tan=(O,U)=>[O.run(C(O,U[0],R()),U)],e.tanh=(O,U)=>[O.run(C(O,U[0],I()),U)]},5611:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createUnpackProgramInfoLoader=e.createUnpackProgramInfo=void 0;const r=t(5060),o=t(2039),c=t(9390),l=t(2827),h={name:"unpack",inputNames:["A"],inputTypes:[o.TextureType.packed]};e.createUnpackProgramInfo=(p,f)=>{const d=f.dims.length,i=(0,l.getChannels)("rc",d),n=i.slice(-2),a=(0,c.getCoordsDataType)(d),u=(0,l.unpackFromChannel)(),m=f.dims.length===0?"":function(b,y){if(b===1)return"rc";let v="";for(let x=0;x<b;x++)v+=y[x],x<b-1&&(v+=",");return v}(d,i),g=d<=1?"rc":`vec2(${n.join(",")})`,_=`
    ${u}
    void main() {
      ${a} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${m});

       ${(0,r.getGlsl)(p.session.backend.glContext.version).output} = vec4(getChannel(packedInput, ${g}), 0, 0, 0);
     }
   `;return Object.assign(Object.assign({},h),{hasMain:!0,output:{dims:f.dims,type:f.type,textureType:o.TextureType.unpacked},shaderSource:_})},e.createUnpackProgramInfoLoader=(p,f)=>Object.assign(Object.assign({},h),{get:()=>(0,e.createUnpackProgramInfo)(p,f)})},8428:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseUnsqueezeAttributes=e.unsqueezeV13=e.unsqueeze=void 0;const r=t(2517);e.unsqueeze=(l,h,p)=>{o(h);const f=r.ShapeUtil.unsqueezeShape(h[0].dims,p);return[l.reshapeUnpacked(h[0],f)]},e.unsqueezeV13=(l,h)=>(c(h),(0,e.unsqueeze)(l,[h[0]],Array.from(h[1].integerData))),e.parseUnsqueezeAttributes=l=>l.attributes.getInts("axes");const o=l=>{if(!l||l.length!==1)throw new Error("Unsqueeze requires 1 input.");if(l[0].type==="string")throw new Error("invalid input tensor types.")},c=l=>{if(!l||l.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(l[1].type!=="int32")throw new Error("Invalid input type.")}},9793:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.scalesValidation=e.validateInputs=e.parseUpsampleAttributes=e.parseUpsampleAttributesV9=e.parseUpsampleAttributesV7=e.upsample=void 0;const r=t(246),o=t(5060),c=t(2039),l={name:"Upsample",inputNames:["X"],inputTypes:[c.TextureType.unpacked]};e.upsample=(p,f,d)=>((0,e.validateInputs)(f,d),[p.run(Object.assign(Object.assign({},l),{cacheHint:d.cacheKey,get:()=>h(p,f,d)}),f)]),e.parseUpsampleAttributesV7=p=>(0,e.parseUpsampleAttributes)(p,7),e.parseUpsampleAttributesV9=p=>(0,e.parseUpsampleAttributes)(p,9),e.parseUpsampleAttributes=(p,f)=>{const d=f>=10,i=p.attributes.getString("mode","nearest");if(i!=="nearest"&&i!=="linear"&&(f<11||i!=="cubic"))throw new Error(`unrecognized mode: ${i}`);let n=[];f<9&&(n=p.attributes.getFloats("scales"),(0,e.scalesValidation)(n,i,d));const a=p.attributes.getFloat("extrapolation_value",0),u=f>10?p.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(u)===-1)throw new Error(`coordinate_transform_mode '${u}' is not supported`);const m=u==="tf_crop_and_resize",g=m,_=i==="nearest"&&f>=11?p.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(_)===-1)throw new Error(`nearest_mode '${_}' is not supported`);const b=p.attributes.getFloat("cubic_coeff_a",-.75),y=p.attributes.getInt("exclude_outside",0)!==0;if(y&&i!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");const v=f<11||i==="nearest"&&u==="asymmetric"&&_==="floor";let x=0,w=0,S=0;return f>10?p.inputs.length>2?(x=1,w=2,S=3):(w=1,S=2):f===9&&(w=1),(0,r.createAttributeWithCacheKey)({opset:f,isResize:d,mode:i,scales:n,extrapolationValue:a,coordinateTransformMode:u,useExtrapolation:g,needRoiInput:m,nearestMode:_,cubicCoefficientA:b,excludeOutside:y,useNearest2xOptimization:v,roiInputIdx:x,scalesInputIdx:w,sizesInputIdx:S})};const h=(p,f,d)=>{const i=(0,o.getGlsl)(p.session.backend.glContext.version),[n,a]=p.calculateTextureWidthAndHeight(f[0].dims,c.TextureType.unpacked),u=f[0].dims.map((S,M)=>Math.floor(S*d.scales[M])),[m,g]=p.calculateTextureWidthAndHeight(u,c.TextureType.unpacked),_=u.length,b=new Array(_),y=new Array(_);let v=`
      int output_pitches[${_}];
      int input_pitches[${_}];
      `;for(let S=_-1;S>=0;S--)b[S]=S===_-1?1:b[S+1]*u[S+1],y[S]=S===_-1?1:y[S+1]*f[0].dims[S+1],v+=`
        output_pitches[${S}] = ${b[S]};
        input_pitches[${S}] = ${y[S]};
        `;const x=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${n}, ${a});
        float value = getColorAsFloat(${i.texture2D}(X, coords));
        return value;
      }
      `,w=d.mode==="nearest"?`
    ${x}
    float process(int indices[${_}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${m}, ${g});

      ${v}

      int d, m;
      for (int dim = 0; dim < ${_}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:_===4?`
    ${x}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${m}, ${g});

      ${v}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${f[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${x}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${m}, ${g});

      ${v}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${f[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return Object.assign(Object.assign({},l),{output:{dims:u,type:f[0].type,textureType:c.TextureType.unpacked},shaderSource:w,variables:[{name:"scales",type:"int",arrayLength:d.scales.length,data:d.scales.map(S=>Math.ceil(S))}]})};e.validateInputs=(p,f)=>{if(!p||f.opset<9&&p.length!==1||f.opset>=9&&f.opset<11&&p.length!==2||f.opset>=11&&p.length<2)throw new Error("invalid inputs.");if(f.scales.length>0&&p[0].dims.length!==f.scales.length)throw new Error("Invalid input shape.");if(p[0].type==="string")throw new Error("Invalid input tensor types.")},e.scalesValidation=(p,f,d)=>{if(d){for(const i of p)if(i<=0)throw new Error("Scale value should be greater than 0.")}else for(const i of p)if(i<1)throw new Error("Scale value should be greater than or equal to 1.");if(!(f!=="linear"&&f!=="cubic"||p.length===2||p.length===4&&p[0]===1&&p[1]===1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${d?"Resize":"Upsample"} opeartor.`)}},1958:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ProgramManager=void 0;const r=t(1670),o=t(6231),c=t(8879),l=t(5060);e.ProgramManager=class{constructor(h,p,f){this.profiler=h,this.glContext=p,this.textureLayoutStrategy=f,this.repo=new Map,this.attributesBound=!1}getArtifact(h){return this.repo.get(h)}setArtifact(h,p){this.repo.set(h,p)}run(h,p,f){var d;this.profiler.event("op",`ProgramManager.run ${(d=h.programInfo.name)!==null&&d!==void 0?d:"unknown kernel"}`,()=>{var i;const n=this.glContext.gl,a=h.program;n.useProgram(a);try{this.bindOutput(f),this.attributesBound||this.bindAttributes(h.attribLocations),this.bindUniforms(h.uniformLocations,(i=h.programInfo.variables)!==null&&i!==void 0?i:[],p)}catch(u){throw o.Logger.error("ProgramManager",h.programInfo.shaderSource),u}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(h=>this.glContext.deleteProgram(h.program))}build(h,p,f){return this.profiler.event("backend","ProgramManager.build",()=>{const d=new c.GlslPreprocessor(this.glContext,h,p,f),i=d.preprocess(),n=this.compile(i);return{programInfo:h,program:n,uniformLocations:this.getUniformLocations(n,d.context.programInfo.inputNames,d.context.programInfo.variables),attribLocations:this.getAttribLocations(n)}})}compile(h){if(!this.vertexShader){o.Logger.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");const d=(0,l.getVertexShaderSource)(this.glContext.version);this.vertexShader=this.glContext.compileShader(d,this.glContext.gl.VERTEX_SHADER)}r.env.debug&&o.Logger.verbose("ProrgramManager",`FragShader:
${h}
`);const p=this.glContext.compileShader(h,this.glContext.gl.FRAGMENT_SHADER),f=this.glContext.createProgram(this.vertexShader,p);return this.glContext.deleteShader(p),f}bindOutput(h){const p=h.width,f=h.height;o.Logger.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${p}/${f}, shape=${h.shape}, type=${h.tensor.type}`),this.glContext.attachFramebuffer(h.texture,p,f)}bindAttributes(h){const p=h.position,f=h.textureCoord;this.glContext.setVertexAttributes(p,f),this.attributesBound=!0}bindUniforms(h,p,f){var d;const i=this.glContext.gl;let n=0;for(const{name:a,type:u,location:m,arrayLength:g}of h){const _=(d=p.find(b=>b.name===a))===null||d===void 0?void 0:d.data;if(u!=="sampler2D"&&!_)throw new Error(`variable '${a}' does not have data defined in program info`);switch(u){case"sampler2D":this.bindTexture(f[n],m,n),n++;break;case"float":g?i.uniform1fv(m,_):i.uniform1f(m,_);break;case"int":g?i.uniform1iv(m,_):i.uniform1i(m,_);break;default:throw new Error(`Uniform not implemented: ${u}`)}}}bindTexture(h,p,f){this.glContext.bindTextureToUniform(h.texture,f,p)}getAttribLocations(h){return{position:this.getAttribLocation(h,"position"),textureCoord:this.getAttribLocation(h,"textureCoord")}}getUniformLocations(h,p,f){const d=[];if(p)for(const i of p)d.push({name:i,type:"sampler2D",location:this.getUniformLocation(h,i)});if(f)for(const i of f)d.push(Object.assign(Object.assign({},i),{location:this.getUniformLocation(h,i.name)}));return d}getUniformLocation(h,p){const f=this.glContext.gl.getUniformLocation(h,p);if(f===null)throw new Error(`Uniform ${p} not found.`);return f}getAttribLocation(h,p){return this.glContext.gl.getAttribLocation(h,p)}}},6416:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.WebGLSessionHandler=void 0;const r=t(6231),o=t(1047),c=t(8316),l=t(1640),h=t(1958),p=t(7859),f=t(5702);e.WebGLSessionHandler=class{constructor(d,i){this.backend=d,this.context=i,this.layoutStrategy=new p.PreferLogicalStrategy(d.glContext.maxTextureSize),this.programManager=new h.ProgramManager(this.context.profiler,d.glContext,this.layoutStrategy),this.textureManager=new f.TextureManager(d.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:d.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=d.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new c.WebGLInferenceHandler(this)}onGraphInitialized(d){const i=d.getValues().filter(n=>n.from===-1&&n.tensor).map(n=>n.tensor.dataId);this.initializers=new Set(i)}isInitializer(d){return!!this.initializers&&this.initializers.has(d)}addInitializer(d){this.initializers.add(d)}getTextureData(d,i){return i?this.packedTextureDataCache.get(d):this.unpackedTextureDataCache.get(d)}setTextureData(d,i,n=!1){r.Logger.verbose("WebGLSessionHandler","Storing Texture data in cache"),n?this.packedTextureDataCache.set(d,i):this.unpackedTextureDataCache.set(d,i)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(d=>this.textureManager.releaseTexture(d,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(d=>this.textureManager.releaseTexture(d,!0)),this.unpackedTextureDataCache=new Map}resolve(d,i,n){const a=(0,o.resolveOperator)(d,i,l.WEBGL_OP_RESOLVE_RULES);return{impl:a.opImpl,context:a.opInit?a.opInit(d,n):d}}}},7769:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Uint8DataEncoder=e.RGBAFloatDataEncoder=e.RedFloat32DataEncoder=void 0;const r=t(6231);e.RedFloat32DataEncoder=class{constructor(o,c=1){if(c===1)this.internalFormat=o.R32F,this.format=o.RED,this.textureType=o.FLOAT,this.channelSize=c;else{if(c!==4)throw new Error(`Invalid number of channels: ${c}`);this.internalFormat=o.RGBA32F,this.format=o.RGBA,this.textureType=o.FLOAT,this.channelSize=c}}encode(o,c){let l,h;return o.constructor!==Float32Array&&(r.Logger.warning("Encoder","data was not of type Float32; creating new Float32Array"),h=new Float32Array(o)),c*this.channelSize>o.length?(r.Logger.warning("Encoder","Source data too small. Allocating larger array"),h=o,l=this.allocate(c*this.channelSize),h.forEach((p,f)=>l[f]=p)):(h=o,l=h),l}allocate(o){return new Float32Array(4*o)}decode(o,c){return this.channelSize===1?o.filter((l,h)=>h%4==0).subarray(0,c):o.subarray(0,c)}},e.RGBAFloatDataEncoder=class{constructor(o,c=1,l){if(c!==1&&c!==4)throw new Error(`Invalid number of channels: ${c}`);this.internalFormat=o.RGBA,this.format=o.RGBA,this.channelSize=c,this.textureType=l||o.FLOAT}encode(o,c){let l=o;return this.channelSize===1&&(r.Logger.verbose("Encoder","Exploding into a larger array"),l=this.allocate(c),o.forEach((h,p)=>l[4*p]=h)),l}allocate(o){return new Float32Array(4*o)}decode(o,c){return this.channelSize===1?o.filter((l,h)=>h%4==0).subarray(0,c):o.subarray(0,c)}},e.Uint8DataEncoder=class{constructor(o,c=1){if(this.channelSize=4,c===1)this.internalFormat=o.ALPHA,this.format=o.ALPHA,this.textureType=o.UNSIGNED_BYTE,this.channelSize=c;else{if(c!==4)throw new Error(`Invalid number of channels: ${c}`);this.internalFormat=o.RGBA,this.format=o.RGBA,this.textureType=o.UNSIGNED_BYTE,this.channelSize=c}}encode(o,c){return new Uint8Array(o.buffer,o.byteOffset,o.byteLength)}allocate(o){return new Uint8Array(o*this.channelSize)}decode(o,c){if(o instanceof Uint8Array)return o.subarray(0,c);throw new Error(`Invalid array type: ${o.constructor}`)}}},7859:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getBatchDim=e.sizeToSquarishShape=e.getRowsCols=e.sizeFromShape=e.isInt=e.parseAxisParam=e.squeezeShape=e.PreferLogicalStrategy=e.AlwaysKeepOriginalSizeStrategy=void 0;const r=t(6231),o=t(2517);function c(d,i){const n=[],a=[],u=i!=null&&Array.isArray(i)&&i.length===0,m=i==null||u?null:l(i,d).sort();let g=0;for(let _=0;_<d.length;++_){if(m!=null){if(m[g]===_&&d[_]!==1)throw new Error(`Can't squeeze axis ${_} since its dim '${d[_]}' is not 1`);(m[g]==null||m[g]>_)&&d[_]===1&&(n.push(d[_]),a.push(_)),m[g]<=_&&g++}d[_]!==1&&(n.push(d[_]),a.push(_))}return{newShape:n,keptDims:a}}function l(d,i){const n=i.length;return d=d==null?i.map((a,u)=>u):[].concat(d),(0,o.assert)(d.every(a=>a>=-n&&a<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${d}`),(0,o.assert)(d.every(h),()=>`All values in axis param must be integers but got axis ${d}`),d.map(a=>a<0?n+a:a)}function h(d){return d%1==0}function p(d){if(d.length===0)return 1;let i=d[0];for(let n=1;n<d.length;n++)i*=d[n];return i}function f(d){const i=Math.ceil(Math.sqrt(d));return[i,Math.ceil(d/i)]}e.AlwaysKeepOriginalSizeStrategy=class{constructor(d){this.maxTextureSize=d}computeTextureWH(d,i){if(d.length===0)return[1,1];const n=this.maxTextureSize;if(i&&i.breakAxis!==void 0){const m=i.breakAxis>=d.length?1:d.slice(i.breakAxis).reduce((_,b)=>_*b),g=i.breakAxis<=0?1:d.slice(0,i.breakAxis).reduce((_,b)=>_*b);if(!(m>n||g>n))return[m,g];r.Logger.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${d}, breakAxis:${i.breakAxis}`)}const a=d.reduce((m,g)=>m*g);let u=Math.floor(Math.sqrt(a));for(;u<n&&u<a&&a%u!=0;u++);if(u>=n||a%u!=0)throw new Error(`The given dimensions are outside this GPU's boundaries: ${d}`);return[u,a/u]}},e.PreferLogicalStrategy=class{constructor(d){this.maxTextureSize=d}computeTextureWH(d,i){const n=this.computeTexture(d,i);return i&&i.isPacked&&(n[0]/=2,n[1]/=2),i&&i.reverseWH?[n[1],n[0]]:n}computeTexture(d,i){const n=i&&i.isPacked;if(d.length===0)return n?[2,2]:[1,1];let a=this.maxTextureSize;if(i&&i.breakAxis!==void 0){const g=i.breakAxis>=d.length?1:d.slice(i.breakAxis).reduce((b,y)=>b*y),_=i.breakAxis<=0?1:d.slice(0,i.breakAxis).reduce((b,y)=>b*y);if(!(g>a||_>a))return[g,_];r.Logger.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${d}, breakAxis:${i.breakAxis}`)}let u=d.slice(0);n&&(a*=2,u=u.map((g,_)=>_>=u.length-2?u[_]%2==0?u[_]:u[_]+1:u[_]),u.length===1&&(u=[2,u[0]])),u.length!==2&&(u=c(u).newShape);const m=p(u);return u.length<=1&&m<=a?[1,m]:u.length===2&&u[0]<=a&&u[1]<=a?u:u.length===3&&u[0]*u[1]<=a&&u[2]<=a?[u[0]*u[1],u[2]]:u.length===3&&u[0]<=a&&u[1]*u[2]<=a?[u[0],u[1]*u[2]]:u.length===4&&u[0]*u[1]*u[2]<=a&&u[3]<=a?[u[0]*u[1]*u[2],u[3]]:u.length===4&&u[0]<=a&&u[1]*u[2]*u[3]<=a?[u[0],u[1]*u[2]*u[3]]:n?f(m/4).map(g=>2*g):f(m)}},e.squeezeShape=c,e.parseAxisParam=l,e.isInt=h,e.sizeFromShape=p,e.getRowsCols=function(d){if(d.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[d.length>1?d[d.length-2]:1,d[d.length-1]]},e.sizeToSquarishShape=f,e.getBatchDim=function(d,i=2){return p(d.slice(0,d.length-i))}},4057:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createTextureLayoutFromShape=e.calculateTextureWidthAndHeight=e.createTextureLayoutFromTextureType=void 0;const r=t(2517),o=t(2039);e.createTextureLayoutFromTextureType=(c,l,h)=>{const p=h===o.TextureType.unpacked||h===o.TextureType.unpackedReversed?1:4,f=h===o.TextureType.packed,d=h===o.TextureType.unpackedReversed||h===o.TextureType.packed,i=h===o.TextureType.packedLastDimension?l.length-1:void 0,n=h===o.TextureType.packedLastDimension?l.map((a,u)=>u===l.length-1?4*a:a):void 0;return(0,e.createTextureLayoutFromShape)(c,l,p,n,{isPacked:f,reverseWH:d,breakAxis:i})},e.calculateTextureWidthAndHeight=(c,l,h)=>{const p=(0,e.createTextureLayoutFromTextureType)(c,l,h);return[p.width,p.height]},e.createTextureLayoutFromShape=(c,l,h=1,p,f)=>{const d=!(!f||!f.isPacked),[i,n]=c.computeTextureWH(d&&p||l,f),a=l.length;let u=l.slice(0);if(a===0&&(u=[1]),h===1)p=l;else if(d){if(h!==4)throw new Error("a packed texture must be 4-channel");p=l,a>0&&(u[a-1]=Math.ceil(u[a-1]/2)),a>1&&(u[a-2]=Math.ceil(u[a-2]/2))}else if(!p)throw new Error("Unpacked shape is needed when using channels > 1");return{width:i,height:n,channels:h,isPacked:d,shape:u,strides:r.ShapeUtil.computeStrides(u),unpackedShape:p,reversedWH:f&&f.reverseWH}}},5702:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TextureManager=void 0;const r=t(6231);e.TextureManager=class{constructor(o,c,l,h){this.glContext=o,this.layoutStrategy=c,this.profiler=l,this.config=h,this.pendingRead=new Map,h.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(o,c,l,h){const p=this.toEncoderType(o),f=this.glContext.getEncoder(p,c.channels||1,h);if(c.isPacked&&h===1)throw new Error("not implemented");const d=c.width,i=c.height;let n,a;if(this.config.reuseTextures){n=`${d}x${i}_${f.format}_${f.internalFormat}_${f.textureType}`,a=this.inUseTextures.get(n),a||(a=[],this.inUseTextures.set(n,a));const m=this.idleTextures.get(n);if(m&&m.length>0){const g=m.pop();return a.push(g),h===1&&this.glContext.updateTexture(g,d,i,f,this.toTextureData(o,l)),g}}r.Logger.verbose("TextureManager",`Creating new texture of size ${c.width}x${c.height}`);const u=this.glContext.allocateTexture(d,i,f,this.toTextureData(o,l));return this.config.reuseTextures&&(a.push(u),this.textureLookup.set(u,n)),u}readTexture(o,c,l){return l||(l=1),this.profiler.event("backend","TextureManager.readTexture",()=>{const h=o.shape.reduce((f,d)=>f*d)*l,p=this.glContext.readTexture(o.texture,o.width,o.height,h,this.toEncoderType(c),l);return this.toTensorData(c,p)})}async readTextureAsync(o,c,l){const h=o.tensor.dataId;if(l||(l=1),this.pendingRead.has(h)){const p=this.pendingRead.get(h);return new Promise(f=>p?.push(f))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(h,[]);const p=o.shape.reduce((n,a)=>n*a)*l;await this.glContext.createAndWaitForFence();const f=this.glContext.readTexture(o.texture,o.width,o.height,p,this.toEncoderType(c),l),d=this.toTensorData(c,f),i=this.pendingRead.get(h);return this.pendingRead.delete(h),i?.forEach(n=>n(d)),d})}readUint8TextureAsFloat(o){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{const c=o.shape.reduce((h,p)=>h*p),l=this.glContext.readTexture(o.texture,o.width,o.height,4*c,"byte",4);return new Float32Array(l.buffer,l.byteOffset,c)})}releaseTexture(o,c){let l;if(this.config.reuseTextures&&(l=this.textureLookup.get(o.texture),l)){c&&this.textureLookup.delete(l);const h=this.inUseTextures.get(l);if(h){const p=h.indexOf(o.texture);if(p!==-1){h.splice(p,1);let f=this.idleTextures.get(l);f||(f=[],this.idleTextures.set(l,f)),f.push(o.texture)}}}l&&!c||(r.Logger.verbose("TextureManager",`Deleting texture of size ${o.width}x${o.height}`),this.glContext.deleteTexture(o.texture))}toTensorData(o,c){switch(o){case"int16":return c instanceof Int16Array?c:Int16Array.from(c);case"int32":return c instanceof Int32Array?c:Int32Array.from(c);case"int8":return c instanceof Int8Array?c:Int8Array.from(c);case"uint16":return c instanceof Uint16Array?c:Uint16Array.from(c);case"uint32":return c instanceof Uint32Array?c:Uint32Array.from(c);case"uint8":case"bool":return c instanceof Uint8Array?c:Uint8Array.from(c);case"float32":return c instanceof Float32Array?c:Float32Array.from(c);case"float64":return c instanceof Float64Array?c:Float64Array.from(c);default:throw new Error(`TensorData type ${o} is not supported`)}}toTextureData(o,c){if(c)return c instanceof Float32Array?c:new Float32Array(c)}toEncoderType(o){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}},2039:(s,e)=>{var t;Object.defineProperty(e,"__esModule",{value:!0}),e.TextureType=void 0,(t=e.TextureType||(e.TextureType={}))[t.unpacked=0]="unpacked",t[t.unpackedReversed=1]="unpackedReversed",t[t.packed=2]="packed",t[t.downloadUint8AsFloat=3]="downloadUint8AsFloat",t[t.packedLastDimension=4]="packedLastDimension"},9390:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getGlChannels=e.getCoordsDataType=e.getSqueezedParams=e.squeezeInputShape=e.generateShaderFuncNameFromInputSamplerNameAtOutCoords=e.generateShaderFuncNameFromInputSamplerName=e.repeatedTry=e.getPackedShape=void 0;const r=t(2517);e.getPackedShape=function(o){const c=o.length;return o.slice(0,c-1).concat(o[c-1]/4)},e.repeatedTry=async function(o,c=h=>0,l){return new Promise((h,p)=>{let f=0;const d=()=>{if(o())return void h();f++;const i=c(f);l!=null&&f>=l?p():setTimeout(d,i)};d()})},e.generateShaderFuncNameFromInputSamplerName=function(o){return(0,r.assert)(o!==void 0&&o.length!==0,()=>"empty string found for sampler name"),"get"+o.charAt(0).toUpperCase()+o.slice(1)},e.generateShaderFuncNameFromInputSamplerNameAtOutCoords=function(o){return(0,r.assert)(o!==void 0&&o.length!==0,()=>"empty string found for sampler name"),"get"+o.charAt(0).toUpperCase()+o.slice(1)+"AtOutCoords"},e.squeezeInputShape=function(o,c){let l=JSON.parse(JSON.stringify(o));return l=c,l},e.getSqueezedParams=function(o,c){return c.map(l=>o[l]).join(", ")},e.getCoordsDataType=function(o){if(o<=1)return"int";if(o===2)return"ivec2";if(o===3)return"ivec3";if(o===4)return"ivec4";if(o===5)return"ivec5";if(o===6)return"ivec6";throw Error(`GPU for rank ${o} is not yet supported`)},e.getGlChannels=function(o=6){return["x","y","z","w","u","v"].slice(0,o)}},7305:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createNewWebGLContext=e.createWebGLContext=void 0;const r=t(6231),o=t(1713),c={};function l(h){const p=function(){if(typeof document>"u"){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}const i=document.createElement("canvas");return i.width=1,i.height=1,i}();let f;const d={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1};if((!h||h==="webgl2")&&(f=p.getContext("webgl2",d),f))try{return new o.WebGLContext(f,2)}catch(i){r.Logger.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${i}`)}if((!h||h==="webgl")&&(f=p.getContext("webgl",d)||p.getContext("experimental-webgl",d),f))try{return new o.WebGLContext(f,1)}catch(i){r.Logger.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${i}`)}throw new Error("WebGL is not supported")}e.createWebGLContext=function h(p){let f;p&&p!=="webgl2"||!("webgl2"in c)?p&&p!=="webgl"||!("webgl"in c)||(f=c.webgl):f=c.webgl2,f=f||l(p),p=p||f.version===1?"webgl":"webgl2";const d=f.gl;return c[p]=f,d.isContextLost()?(delete c[p],h(p)):(d.disable(d.DEPTH_TEST),d.disable(d.STENCIL_TEST),d.disable(d.BLEND),d.disable(d.DITHER),d.disable(d.POLYGON_OFFSET_FILL),d.disable(d.SAMPLE_COVERAGE),d.enable(d.SCISSOR_TEST),d.enable(d.CULL_FACE),d.cullFace(d.BACK),f)},e.createNewWebGLContext=l},1713:function(s,e,t){var r=this&&this.__createBinding||(Object.create?function(d,i,n,a){a===void 0&&(a=n);var u=Object.getOwnPropertyDescriptor(i,n);u&&!("get"in u?!i.__esModule:u.writable||u.configurable)||(u={enumerable:!0,get:function(){return i[n]}}),Object.defineProperty(d,a,u)}:function(d,i,n,a){a===void 0&&(a=n),d[a]=i[n]}),o=this&&this.__setModuleDefault||(Object.create?function(d,i){Object.defineProperty(d,"default",{enumerable:!0,value:i})}:function(d,i){d.default=i}),c=this&&this.__importStar||function(d){if(d&&d.__esModule)return d;var i={};if(d!=null)for(var n in d)n!=="default"&&Object.prototype.hasOwnProperty.call(d,n)&&r(i,d,n);return o(i,d),i};Object.defineProperty(e,"__esModule",{value:!0}),e.WebGLContext=e.linearSearchLastTrue=void 0;const l=t(1670),h=c(t(7769)),p=t(9390);function f(d){let i=0;for(;i<d.length&&d[i]();++i);return i-1}e.linearSearchLastTrue=f,e.WebGLContext=class{constructor(d,i){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=d,this.version=i,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(d,i,n,a){const u=this.gl,m=u.createTexture();u.bindTexture(u.TEXTURE_2D,m),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE);const g=a?n.encode(a,d*i):null;return u.texImage2D(u.TEXTURE_2D,0,n.internalFormat,d,i,0,n.format,n.textureType,g),this.checkError(),m}updateTexture(d,i,n,a,u){const m=this.gl;m.bindTexture(m.TEXTURE_2D,d);const g=a.encode(u,i*n);m.texSubImage2D(m.TEXTURE_2D,0,0,0,i,n,a.format,a.textureType,g),this.checkError()}attachFramebuffer(d,i,n){const a=this.gl;a.bindTexture(a.TEXTURE_2D,d),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,d,0),this.checkError(),a.viewport(0,0,i,n),a.scissor(0,0,i,n)}readTexture(d,i,n,a,u,m){const g=this.gl;m||(m=1),this.frameBufferBound||this.attachFramebuffer(d,i,n);const _=this.getEncoder(u,m),b=_.allocate(i*n);return g.bindTexture(g.TEXTURE_2D,d),g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,d,0),g.readPixels(0,0,i,n,g.RGBA,_.textureType,b),this.checkError(),_.decode(b,a)}isFramebufferReady(){return!0}getActiveTexture(){const d=this.gl;return"TEXTURE"+(d.getParameter(this.gl.ACTIVE_TEXTURE)-d.TEXTURE0)}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(d,i){const n=this.gl;n.vertexAttribPointer(d,3,n.FLOAT,!1,20,0),n.enableVertexAttribArray(d),i!==-1&&(n.vertexAttribPointer(i,2,n.FLOAT,!1,20,12),n.enableVertexAttribArray(i)),this.checkError()}createProgram(d,i){const n=this.gl,a=n.createProgram();return n.attachShader(a,d),n.attachShader(a,i),n.linkProgram(a),a}compileShader(d,i){const n=this.gl,a=n.createShader(i);if(!a)throw new Error(`createShader() returned null with type ${i}`);if(n.shaderSource(a,d),n.compileShader(a),n.getShaderParameter(a,n.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${n.getShaderInfoLog(a)}
Shader source:
`},1670:s=>{s.exports=__WEBPACK_EXTERNAL_MODULE__1670__},7067:()=>{},1296:()=>{},1384:()=>{},3993:()=>{},908:()=>{},6953:()=>{},9925:()=>{},2806:()=>{},6449:()=>{},2850:()=>{},5381:()=>{},5686:(s,e,t)=>{t.r(e),t.d(e,{flatbuffers:()=>r});var r={};r.Offset,r.Table,r.SIZEOF_SHORT=2,r.SIZEOF_INT=4,r.FILE_IDENTIFIER_LENGTH=4,r.SIZE_PREFIX_LENGTH=4,r.Encoding={UTF8_BYTES:1,UTF16_STRING:2},r.int32=new Int32Array(2),r.float32=new Float32Array(r.int32.buffer),r.float64=new Float64Array(r.int32.buffer),r.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1,r.Long=function(o,c){this.low=0|o,this.high=0|c},r.Long.create=function(o,c){return o==0&&c==0?r.Long.ZERO:new r.Long(o,c)},r.Long.prototype.toFloat64=function(){return(this.low>>>0)+4294967296*this.high},r.Long.prototype.equals=function(o){return this.low==o.low&&this.high==o.high},r.Long.ZERO=new r.Long(0,0),r.Builder=function(o){if(o)c=o;else var c=1024;this.bb=r.ByteBuffer.allocate(c),this.space=c,this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},r.Builder.prototype.clear=function(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},r.Builder.prototype.forceDefaults=function(o){this.force_defaults=o},r.Builder.prototype.dataBuffer=function(){return this.bb},r.Builder.prototype.asUint8Array=function(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())},r.Builder.prototype.prep=function(o,c){o>this.minalign&&(this.minalign=o);for(var l=1+~(this.bb.capacity()-this.space+c)&o-1;this.space<l+o+c;){var h=this.bb.capacity();this.bb=r.Builder.growByteBuffer(this.bb),this.space+=this.bb.capacity()-h}this.pad(l)},r.Builder.prototype.pad=function(o){for(var c=0;c<o;c++)this.bb.writeInt8(--this.space,0)},r.Builder.prototype.writeInt8=function(o){this.bb.writeInt8(this.space-=1,o)},r.Builder.prototype.writeInt16=function(o){this.bb.writeInt16(this.space-=2,o)},r.Builder.prototype.writeInt32=function(o){this.bb.writeInt32(this.space-=4,o)},r.Builder.prototype.writeInt64=function(o){this.bb.writeInt64(this.space-=8,o)},r.Builder.prototype.writeFloat32=function(o){this.bb.writeFloat32(this.space-=4,o)},r.Builder.prototype.writeFloat64=function(o){this.bb.writeFloat64(this.space-=8,o)},r.Builder.prototype.addInt8=function(o){this.prep(1,0),this.writeInt8(o)},r.Builder.prototype.addInt16=function(o){this.prep(2,0),this.writeInt16(o)},r.Builder.prototype.addInt32=function(o){this.prep(4,0),this.writeInt32(o)},r.Builder.prototype.addInt64=function(o){this.prep(8,0),this.writeInt64(o)},r.Builder.prototype.addFloat32=function(o){this.prep(4,0),this.writeFloat32(o)},r.Builder.prototype.addFloat64=function(o){this.prep(8,0),this.writeFloat64(o)},r.Builder.prototype.addFieldInt8=function(o,c,l){(this.force_defaults||c!=l)&&(this.addInt8(c),this.slot(o))},r.Builder.prototype.addFieldInt16=function(o,c,l){(this.force_defaults||c!=l)&&(this.addInt16(c),this.slot(o))},r.Builder.prototype.addFieldInt32=function(o,c,l){(this.force_defaults||c!=l)&&(this.addInt32(c),this.slot(o))},r.Builder.prototype.addFieldInt64=function(o,c,l){!this.force_defaults&&c.equals(l)||(this.addInt64(c),this.slot(o))},r.Builder.prototype.addFieldFloat32=function(o,c,l){(this.force_defaults||c!=l)&&(this.addFloat32(c),this.slot(o))},r.Builder.prototype.addFieldFloat64=function(o,c,l){(this.force_defaults||c!=l)&&(this.addFloat64(c),this.slot(o))},r.Builder.prototype.addFieldOffset=function(o,c,l){(this.force_defaults||c!=l)&&(this.addOffset(c),this.slot(o))},r.Builder.prototype.addFieldStruct=function(o,c,l){c!=l&&(this.nested(c),this.slot(o))},r.Builder.prototype.nested=function(o){if(o!=this.offset())throw new Error("FlatBuffers: struct must be serialized inline.")},r.Builder.prototype.notNested=function(){if(this.isNested)throw new Error("FlatBuffers: object serialization must not be nested.")},r.Builder.prototype.slot=function(o){this.vtable[o]=this.offset()},r.Builder.prototype.offset=function(){return this.bb.capacity()-this.space},r.Builder.growByteBuffer=function(o){var c=o.capacity();if(3221225472&c)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");var l=c<<1,h=r.ByteBuffer.allocate(l);return h.setPosition(l-c),h.bytes().set(o.bytes(),l-c),h},r.Builder.prototype.addOffset=function(o){this.prep(r.SIZEOF_INT,0),this.writeInt32(this.offset()-o+r.SIZEOF_INT)},r.Builder.prototype.startObject=function(o){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=o;for(var c=0;c<o;c++)this.vtable[c]=0;this.isNested=!0,this.object_start=this.offset()},r.Builder.prototype.endObject=function(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);for(var o=this.offset(),c=this.vtable_in_use-1;c>=0&&this.vtable[c]==0;c--);for(var l=c+1;c>=0;c--)this.addInt16(this.vtable[c]!=0?o-this.vtable[c]:0);this.addInt16(o-this.object_start);var h=(l+2)*r.SIZEOF_SHORT;this.addInt16(h);var p=0,f=this.space;e:for(c=0;c<this.vtables.length;c++){var d=this.bb.capacity()-this.vtables[c];if(h==this.bb.readInt16(d)){for(var i=r.SIZEOF_SHORT;i<h;i+=r.SIZEOF_SHORT)if(this.bb.readInt16(f+i)!=this.bb.readInt16(d+i))continue e;p=this.vtables[c];break}}return p?(this.space=this.bb.capacity()-o,this.bb.writeInt32(this.space,p-o)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-o,this.offset()-o)),this.isNested=!1,o},r.Builder.prototype.finish=function(o,c,l){var h=l?r.SIZE_PREFIX_LENGTH:0;if(c){var p=c;if(this.prep(this.minalign,r.SIZEOF_INT+r.FILE_IDENTIFIER_LENGTH+h),p.length!=r.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+r.FILE_IDENTIFIER_LENGTH);for(var f=r.FILE_IDENTIFIER_LENGTH-1;f>=0;f--)this.writeInt8(p.charCodeAt(f))}this.prep(this.minalign,r.SIZEOF_INT+h),this.addOffset(o),h&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)},r.Builder.prototype.finishSizePrefixed=function(o,c){this.finish(o,c,!0)},r.Builder.prototype.requiredField=function(o,c){var l=this.bb.capacity()-o,h=l-this.bb.readInt32(l);if(this.bb.readInt16(h+c)==0)throw new Error("FlatBuffers: field "+c+" must be set")},r.Builder.prototype.startVector=function(o,c,l){this.notNested(),this.vector_num_elems=c,this.prep(r.SIZEOF_INT,o*c),this.prep(l,o*c)},r.Builder.prototype.endVector=function(){return this.writeInt32(this.vector_num_elems),this.offset()},r.Builder.prototype.createString=function(o){if(o instanceof Uint8Array)var c=o;else{c=[];for(var l=0;l<o.length;){var h,p=o.charCodeAt(l++);(h=p<55296||p>=56320?p:(p<<10)+o.charCodeAt(l++)+-56613888)<128?c.push(h):(h<2048?c.push(h>>6&31|192):(h<65536?c.push(h>>12&15|224):c.push(h>>18&7|240,h>>12&63|128),c.push(h>>6&63|128)),c.push(63&h|128))}}this.addInt8(0),this.startVector(1,c.length,1),this.bb.setPosition(this.space-=c.length),l=0;for(var f=this.space,d=this.bb.bytes();l<c.length;l++)d[f++]=c[l];return this.endVector()},r.Builder.prototype.createLong=function(o,c){return r.Long.create(o,c)},r.ByteBuffer=function(o){this.bytes_=o,this.position_=0},r.ByteBuffer.allocate=function(o){return new r.ByteBuffer(new Uint8Array(o))},r.ByteBuffer.prototype.clear=function(){this.position_=0},r.ByteBuffer.prototype.bytes=function(){return this.bytes_},r.ByteBuffer.prototype.position=function(){return this.position_},r.ByteBuffer.prototype.setPosition=function(o){this.position_=o},r.ByteBuffer.prototype.capacity=function(){return this.bytes_.length},r.ByteBuffer.prototype.readInt8=function(o){return this.readUint8(o)<<24>>24},r.ByteBuffer.prototype.readUint8=function(o){return this.bytes_[o]},r.ByteBuffer.prototype.readInt16=function(o){return this.readUint16(o)<<16>>16},r.ByteBuffer.prototype.readUint16=function(o){return this.bytes_[o]|this.bytes_[o+1]<<8},r.ByteBuffer.prototype.readInt32=function(o){return this.bytes_[o]|this.bytes_[o+1]<<8|this.bytes_[o+2]<<16|this.bytes_[o+3]<<24},r.ByteBuffer.prototype.readUint32=function(o){return this.readInt32(o)>>>0},r.ByteBuffer.prototype.readInt64=function(o){return new r.Long(this.readInt32(o),this.readInt32(o+4))},r.ByteBuffer.prototype.readUint64=function(o){return new r.Long(this.readUint32(o),this.readUint32(o+4))},r.ByteBuffer.prototype.readFloat32=function(o){return r.int32[0]=this.readInt32(o),r.float32[0]},r.ByteBuffer.prototype.readFloat64=function(o){return r.int32[r.isLittleEndian?0:1]=this.readInt32(o),r.int32[r.isLittleEndian?1:0]=this.readInt32(o+4),r.float64[0]},r.ByteBuffer.prototype.writeInt8=function(o,c){this.bytes_[o]=c},r.ByteBuffer.prototype.writeUint8=function(o,c){this.bytes_[o]=c},r.ByteBuffer.prototype.writeInt16=function(o,c){this.bytes_[o]=c,this.bytes_[o+1]=c>>8},r.ByteBuffer.prototype.writeUint16=function(o,c){this.bytes_[o]=c,this.bytes_[o+1]=c>>8},r.ByteBuffer.prototype.writeInt32=function(o,c){this.bytes_[o]=c,this.bytes_[o+1]=c>>8,this.bytes_[o+2]=c>>16,this.bytes_[o+3]=c>>24},r.ByteBuffer.prototype.writeUint32=function(o,c){this.bytes_[o]=c,this.bytes_[o+1]=c>>8,this.bytes_[o+2]=c>>16,this.bytes_[o+3]=c>>24},r.ByteBuffer.prototype.writeInt64=function(o,c){this.writeInt32(o,c.low),this.writeInt32(o+4,c.high)},r.ByteBuffer.prototype.writeUint64=function(o,c){this.writeUint32(o,c.low),this.writeUint32(o+4,c.high)},r.ByteBuffer.prototype.writeFloat32=function(o,c){r.float32[0]=c,this.writeInt32(o,r.int32[0])},r.ByteBuffer.prototype.writeFloat64=function(o,c){r.float64[0]=c,this.writeInt32(o,r.int32[r.isLittleEndian?0:1]),this.writeInt32(o+4,r.int32[r.isLittleEndian?1:0])},r.ByteBuffer.prototype.getBufferIdentifier=function(){if(this.bytes_.length<this.position_+r.SIZEOF_INT+r.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");for(var o="",c=0;c<r.FILE_IDENTIFIER_LENGTH;c++)o+=String.fromCharCode(this.readInt8(this.position_+r.SIZEOF_INT+c));return o},r.ByteBuffer.prototype.__offset=function(o,c){var l=o-this.readInt32(o);return c<this.readInt16(l)?this.readInt16(l+c):0},r.ByteBuffer.prototype.__union=function(o,c){return o.bb_pos=c+this.readInt32(c),o.bb=this,o},r.ByteBuffer.prototype.__string=function(o,c){o+=this.readInt32(o);var l=this.readInt32(o),h="",p=0;if(o+=r.SIZEOF_INT,c===r.Encoding.UTF8_BYTES)return this.bytes_.subarray(o,o+l);for(;p<l;){var f,d=this.readUint8(o+p++);if(d<192)f=d;else{var i=this.readUint8(o+p++);if(d<224)f=(31&d)<<6|63&i;else{var n=this.readUint8(o+p++);f=d<240?(15&d)<<12|(63&i)<<6|63&n:(7&d)<<18|(63&i)<<12|(63&n)<<6|63&this.readUint8(o+p++)}}f<65536?h+=String.fromCharCode(f):(f-=65536,h+=String.fromCharCode(55296+(f>>10),56320+(1023&f)))}return h},r.ByteBuffer.prototype.__indirect=function(o){return o+this.readInt32(o)},r.ByteBuffer.prototype.__vector=function(o){return o+this.readInt32(o)+r.SIZEOF_INT},r.ByteBuffer.prototype.__vector_len=function(o){return this.readInt32(o+this.readInt32(o))},r.ByteBuffer.prototype.__has_identifier=function(o){if(o.length!=r.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+r.FILE_IDENTIFIER_LENGTH);for(var c=0;c<r.FILE_IDENTIFIER_LENGTH;c++)if(o.charCodeAt(c)!=this.readInt8(this.position_+r.SIZEOF_INT+c))return!1;return!0},r.ByteBuffer.prototype.createLong=function(o,c){return r.Long.create(o,c)}}},__webpack_module_cache__={};function __webpack_require__(s){var e=__webpack_module_cache__[s];if(e!==void 0)return e.exports;var t=__webpack_module_cache__[s]={exports:{}};return __webpack_modules__[s].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(s,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),__webpack_require__.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e),__webpack_require__.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__(6018);return __webpack_exports__})())})(ortWeb_min$1);var ortWeb_minExports=ortWeb_min$1.exports;const ortWeb_min=getDefaultExportFromCjs(ortWeb_minExports),ONNX_WEB=_mergeNamespaces({__proto__:null,default:ortWeb_min},[ortWeb_minExports]);let ONNX;const executionProviders=["wasm"];typeof process<"u"&&process?.release?.name==="node"?(ONNX=sharp??ONNX_NODE,executionProviders.unshift("cpu")):(ONNX=ortWeb_min??ONNX_WEB,typeof navigator<"u"&&/iP(hone|od|ad).+16_4.+AppleWebKit/.test(navigator.userAgent)&&(ONNX.env.wasm.simd=!1));const{env:onnx_env}=ONNX,VERSION="2.14.1",WEB_CACHE_AVAILABLE=typeof self<"u"&&"caches"in self,FS_AVAILABLE=!isEmpty(sharp),PATH_AVAILABLE=!isEmpty(sharp),RUNNING_LOCALLY=FS_AVAILABLE&&PATH_AVAILABLE,__dirname=RUNNING_LOCALLY?sharp.dirname(sharp.dirname(sharp.fileURLToPath(import.meta.url))):"./",DEFAULT_CACHE_DIR=RUNNING_LOCALLY?sharp.join(__dirname,"/.cache/"):null,DEFAULT_LOCAL_MODEL_PATH="/models/",localModelPath=RUNNING_LOCALLY?sharp.join(__dirname,DEFAULT_LOCAL_MODEL_PATH):DEFAULT_LOCAL_MODEL_PATH;onnx_env.wasm.wasmPaths=RUNNING_LOCALLY?sharp.join(__dirname,"/dist/"):`https://cdn.jsdelivr.net/npm/@xenova/transformers@${VERSION}/dist/`;const env$1={backends:{onnx:onnx_env,tfjs:{}},__dirname,version:VERSION,allowRemoteModels:!0,remoteHost:"https://huggingface.co/",remotePathTemplate:"{model}/resolve/{revision}/",allowLocalModels:!0,localModelPath,useFS:FS_AVAILABLE,useBrowserCache:WEB_CACHE_AVAILABLE,useFSCache:FS_AVAILABLE,cacheDir:DEFAULT_CACHE_DIR,useCustomCache:!1,customCache:null};function isEmpty(s){return Object.keys(s).length===0}var define_process_env_default={};globalThis.ReadableStream||(globalThis.ReadableStream=sharp.ReadableStream);class FileResponse{_CONTENT_TYPE_MAP={txt:"text/plain",html:"text/html",css:"text/css",js:"text/javascript",json:"application/json",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif"};constructor(e){if(this.filePath=e,this.headers=new Headers,this.exists=sharp.existsSync(e),this.exists){this.status=200,this.statusText="OK";let t=sharp.statSync(e);this.headers.set("content-length",t.size.toString()),this.updateContentType();let r=this;this.body=new ReadableStream({start(o){r.arrayBuffer().then(c=>{o.enqueue(new Uint8Array(c)),o.close()})}})}else this.status=404,this.statusText="Not Found",this.body=null}updateContentType(){const e=this.filePath.toString().split(".").pop().toLowerCase();this.headers.set("content-type",this._CONTENT_TYPE_MAP[e]??"application/octet-stream")}clone(){let e=new FileResponse(this.filePath);return e.exists=this.exists,e.status=this.status,e.statusText=this.statusText,e.headers=new Headers(this.headers),e}async arrayBuffer(){return(await sharp.promises.readFile(this.filePath)).buffer}async blob(){const e=await sharp.promises.readFile(this.filePath);return new Blob([e],{type:this.headers.get("content-type")})}async text(){return await sharp.promises.readFile(this.filePath,"utf8")}async json(){return JSON.parse(await this.text())}}function isValidHttpUrl(s,e=null){let t;try{t=new URL(s)}catch{return!1}return e&&!e.includes(t.hostname)?!1:t.protocol==="http:"||t.protocol==="https:"}async function getFile(s){if(env$1.useFS&&!isValidHttpUrl(s))return new FileResponse(s);if(typeof process<"u"&&process?.release?.name==="node"){const e=!!define_process_env_default?.TESTING_REMOTELY,t=env$1.version,r=new Headers;if(r.set("User-Agent",`transformers.js/${t}; is_ci/${e};`),isValidHttpUrl(s,["huggingface.co","hf.co"])){const c=define_process_env_default?.HF_TOKEN??define_process_env_default?.HF_ACCESS_TOKEN;c&&r.set("Authorization",`Bearer ${c}`)}return fetch(s,{headers:r})}else return fetch(s)}const ERROR_MAPPING={400:"Bad request error occurred while trying to load file",401:"Unauthorized access to file",403:"Forbidden access to file",404:"Could not locate file",408:"Request timeout error occurred while trying to load file",500:"Internal server error error occurred while trying to load file",502:"Bad gateway error occurred while trying to load file",503:"Service unavailable error occurred while trying to load file",504:"Gateway timeout error occurred while trying to load file"};function handleError(s,e,t){if(!t)return null;const r=ERROR_MAPPING[s]??`Error (${s}) occurred while trying to load file`;throw Error(`${r}: "${e}".`)}class FileCache{constructor(e){this.path=e}async match(e){let t=sharp.join(this.path,e),r=new FileResponse(t);if(r.exists)return r}async put(e,t){const r=Buffer.from(await t.arrayBuffer());let o=sharp.join(this.path,e);try{await sharp.promises.mkdir(sharp.dirname(o),{recursive:!0}),await sharp.promises.writeFile(o,r)}catch(c){console.warn("An error occurred while writing the file to cache:",c)}}}async function tryCache(s,...e){for(let t of e)try{let r=await s.match(t);if(r)return r}catch{continue}}async function getModelFile(s,e,t=!0,r={}){if(!env$1.allowLocalModels&&r.local_files_only)throw Error("Invalid configuration detected: local models are disabled (`env.allowLocalModels=false`) but you have requested to only use local models (`local_files_only=true`).");dispatchCallback(r.progress_callback,{status:"initiate",name:s,file:e});let o;if(!o&&env$1.useBrowserCache){if(typeof caches>"u")throw Error("Browser cache is not available in this environment.");try{o=await caches.open("transformers-cache")}catch(_){console.warn("An error occurred while opening the browser cache:",_)}}if(!o&&env$1.useFSCache&&(o=new FileCache(r.cache_dir??env$1.cacheDir)),!o&&env$1.useCustomCache)throw Error("`env.useCustomCache=true`, but `env.customCache` is not defined.");const c=r.revision??"main";let l=pathJoin(s,e),h=pathJoin(env$1.localModelPath,l),p=pathJoin(env$1.remoteHost,env$1.remotePathTemplate.replaceAll("{model}",s).replaceAll("{revision}",encodeURIComponent(c)),e),f=c==="main"?l:pathJoin(s,c,e),d,i=o instanceof FileCache?f:p,n=!1,a;o&&(a=await tryCache(o,h,i));const u=a!==void 0;if(a===void 0){if(env$1.allowLocalModels)if(isValidHttpUrl(l)){if(r.local_files_only)throw new Error(`\`local_files_only=true\`, but attempted to load a remote file from: ${l}.`)}else try{a=await getFile(h),d=h}catch(b){console.warn(`Unable to load from local path "${h}": "${b}"`)}if(a===void 0||a.status===404){if(r.local_files_only||!env$1.allowRemoteModels){if(t)throw Error(`\`local_files_only=true\` or \`env.allowRemoteModels=false\` and file was not found locally at "${h}".`);return null}if(a=await getFile(p),a.status!==200)return handleError(a.status,p,t);d=i}n=o&&typeof Response<"u"&&a instanceof Response&&a.status===200}dispatchCallback(r.progress_callback,{status:"download",name:s,file:e});const m={status:"progress",name:s,file:e};let g;return r.progress_callback?u&&typeof navigator<"u"&&/firefox/i.test(navigator.userAgent)?(g=new Uint8Array(await a.arrayBuffer()),dispatchCallback(r.progress_callback,{...m,progress:100,loaded:g.length,total:g.length})):g=await readResponse(a,_=>{dispatchCallback(r.progress_callback,{...m,..._})}):g=new Uint8Array(await a.arrayBuffer()),n&&d&&await o.match(d)===void 0&&await o.put(d,new Response(g,{headers:a.headers})).catch(_=>{console.warn(`Unable to add response to browser cache: ${_}.`)}),dispatchCallback(r.progress_callback,{status:"done",name:s,file:e}),g}async function getModelJSON(s,e,t=!0,r={}){let o=await getModelFile(s,e,t,r);if(o===null)return{};let l=new TextDecoder("utf-8").decode(o);return JSON.parse(l)}async function readResponse(s,e){const t=s.headers.get("Content-Length");t===null&&console.warn("Unable to determine content-length from response headers. Will expand buffer when needed.");let r=parseInt(t??"0"),o=new Uint8Array(r),c=0;const l=s.body.getReader();async function h(){const{done:p,value:f}=await l.read();if(p)return;let d=c+f.length;if(d>r){r=d;let n=new Uint8Array(r);n.set(o),o=n}o.set(f,c),c=d;const i=c/r*100;return e({progress:i,loaded:c,total:r}),h()}return await h(),o}function pathJoin(...s){return s=s.map((e,t)=>(t&&(e=e.replace(new RegExp("^/"),"")),t!==s.length-1&&(e=e.replace(new RegExp("/$"),"")),e)),s.join("/")}function interpolate_data(s,[e,t,r],[o,c],l="bilinear",h=!1){const p=c/r,f=o/t,d=new s.constructor(o*c*e),i=t*r,n=o*c;for(let a=0;a<o;++a)for(let u=0;u<c;++u){const m=a*c+u,g=(u+.5)/p-.5,_=(a+.5)/f-.5;let b=Math.floor(g),y=Math.floor(_);const v=Math.min(b+1,r-1),x=Math.min(y+1,t-1);b=Math.max(b,0),y=Math.max(y,0);const w=g-b,S=_-y,M=(1-w)*(1-S),T=w*(1-S),E=(1-w)*S,R=w*S,I=y*r,k=x*r,C=I+b,z=I+v,O=k+b,U=k+v;for(let K=0;K<e;++K){const $=K*i;d[K*n+m]=M*s[$+C]+T*s[$+z]+E*s[$+O]+R*s[$+U]}}return d}function transpose_data(s,e,t){const r=new Array(t.length),o=new Array(t.length);for(let h=t.length-1,p=1;h>=0;--h)o[h]=p,r[h]=e[t[h]],p*=r[h];const c=t.map((h,p)=>o[t.indexOf(p)]),l=new s.constructor(s.length);for(let h=0;h<s.length;++h){let p=0;for(let f=e.length-1,d=h;f>=0;--f)p+=d%e[f]*c[f],d=Math.floor(d/e[f]);l[p]=s[h]}return[l,r]}function softmax(s){const e=max(s)[0],t=s.map(c=>Math.exp(c-e)),r=t.reduce((c,l)=>c+l,0);return t.map(c=>c/r)}function log_softmax(s){return softmax(s).map(r=>Math.log(r))}function getTopItems(s,e=0){return s=Array.from(s).map((t,r)=>[r,t]).sort((t,r)=>r[1]-t[1]),e!==null&&e>0&&(s=s.slice(0,e)),s}function min(s){if(s.length===0)throw Error("Array must not be empty");let e=s[0],t=0;for(let r=1;r<s.length;++r)s[r]<e&&(e=s[r],t=r);return[e,t]}function max(s){if(s.length===0)throw Error("Array must not be empty");let e=s[0],t=0;for(let r=1;r<s.length;++r)s[r]>e&&(e=s[r],t=r);return[Number(e),t]}function isPowerOfTwo(s){return s>0&&(s&s-1)===0}class P2FFT{constructor(e){if(this.size=e|0,this.size<=1||!isPowerOfTwo(this.size))throw new Error("FFT size must be a power of two larger than 1");this._csize=e<<1,this.table=new Float64Array(this.size*2);for(let r=0;r<this.table.length;r+=2){const o=Math.PI*r/this.size;this.table[r]=Math.cos(o),this.table[r+1]=-Math.sin(o)}let t=0;for(let r=1;this.size>r;r<<=1)++t;this._width=t%2===0?t-1:t,this._bitrev=new Int32Array(1<<this._width);for(let r=0;r<this._bitrev.length;++r){this._bitrev[r]=0;for(let o=0;o<this._width;o+=2){const c=this._width-o-2;this._bitrev[r]|=(r>>>o&3)<<c}}}createComplexArray(){return new Float64Array(this._csize)}fromComplexArray(e,t){const r=t||new Array(e.length>>>1);for(let o=0;o<e.length;o+=2)r[o>>>1]=e[o];return r}toComplexArray(e,t){const r=t||this.createComplexArray();for(let o=0;o<r.length;o+=2)r[o]=e[o>>>1],r[o+1]=0;return r}completeSpectrum(e){const t=this._csize,r=t>>>1;for(let o=2;o<r;o+=2)e[t-o]=e[o],e[t-o+1]=-e[o+1]}transform(e,t){if(e===t)throw new Error("Input and output buffers must be different");this._transform4(e,t,1)}realTransform(e,t){if(e===t)throw new Error("Input and output buffers must be different");this._realTransform4(e,t,1)}inverseTransform(e,t){if(e===t)throw new Error("Input and output buffers must be different");this._transform4(e,t,-1);for(let r=0;r<e.length;++r)e[r]/=this.size}_transform4(e,t,r){const o=this._csize;let l=1<<this._width,h=o/l<<1,p,f;const d=this._bitrev;if(h===4)for(p=0,f=0;p<o;p+=h,++f){const i=d[f];this._singleTransform2(t,e,p,i,l)}else for(p=0,f=0;p<o;p+=h,++f){const i=d[f];this._singleTransform4(t,e,p,i,l,r)}for(l>>=2;l>=2;l>>=2){h=o/l<<1;const i=h>>>2;for(p=0;p<o;p+=h){const n=p+i-1;for(let a=p,u=0;a<n;a+=2,u+=l){const m=a,g=m+i,_=g+i,b=_+i,y=e[m],v=e[m+1],x=e[g],w=e[g+1],S=e[_],M=e[_+1],T=e[b],E=e[b+1],R=this.table[u],I=r*this.table[u+1],k=x*R-w*I,C=x*I+w*R,z=this.table[2*u],O=r*this.table[2*u+1],U=S*z-M*O,K=S*O+M*z,$=this.table[3*u],J=r*this.table[3*u+1],ee=T*$-E*J,he=T*J+E*$,ie=y+U,le=v+K,de=y-U,Me=v-K,Ee=k+ee,Fe=C+he,Be=r*(k-ee),Ce=r*(C-he);e[m]=ie+Ee,e[m+1]=le+Fe,e[g]=de+Ce,e[g+1]=Me-Be,e[_]=ie-Ee,e[_+1]=le-Fe,e[b]=de-Ce,e[b+1]=Me+Be}}}}_singleTransform2(e,t,r,o,c){const l=e[o],h=e[o+1],p=e[o+c],f=e[o+c+1];t[r]=l+p,t[r+1]=h+f,t[r+2]=l-p,t[r+3]=h-f}_singleTransform4(e,t,r,o,c,l){const h=c*2,p=c*3,f=e[o],d=e[o+1],i=e[o+c],n=e[o+c+1],a=e[o+h],u=e[o+h+1],m=e[o+p],g=e[o+p+1],_=f+a,b=d+u,y=f-a,v=d-u,x=i+m,w=n+g,S=l*(i-m),M=l*(n-g);t[r]=_+x,t[r+1]=b+w,t[r+2]=y+M,t[r+3]=v-S,t[r+4]=_-x,t[r+5]=b-w,t[r+6]=y-M,t[r+7]=v+S}_realTransform4(e,t,r){const o=this._csize;let l=1<<this._width,h=o/l<<1,p,f;const d=this._bitrev;if(h===4)for(p=0,f=0;p<o;p+=h,++f){const i=d[f];this._singleRealTransform2(t,e,p,i>>>1,l>>>1)}else for(p=0,f=0;p<o;p+=h,++f){const i=d[f];this._singleRealTransform4(t,e,p,i>>>1,l>>>1,r)}for(l>>=2;l>=2;l>>=2){h=o/l<<1;const i=h>>>2;for(p=0;p<o;p+=h){const n=p+i-1;for(let a=p,u=0;a<n;a+=2,u+=l){const m=a,g=m+i,_=g+i,b=_+i,y=e[m],v=e[m+1],x=e[g],w=e[g+1],S=e[_],M=e[_+1],T=e[b],E=e[b+1],R=this.table[u],I=r*this.table[u+1],k=x*R-w*I,C=x*I+w*R,z=this.table[2*u],O=r*this.table[2*u+1],U=S*z-M*O,K=S*O+M*z,$=this.table[3*u],J=r*this.table[3*u+1],ee=T*$-E*J,he=T*J+E*$,ie=y+U,le=v+K,de=y-U,Me=v-K,Ee=k+ee,Fe=C+he,Be=r*(k-ee),Ce=r*(C-he);e[m]=ie+Ee,e[m+1]=le+Fe,e[g]=de+Ce,e[g+1]=Me-Be,e[_]=ie-Ee,e[_+1]=le-Fe,e[b]=de-Ce,e[b+1]=Me+Be}}}}_singleRealTransform2(e,t,r,o,c){const l=e[o],h=e[o+c];t[r]=l+h,t[r+1]=0,t[r+2]=l-h,t[r+3]=0}_singleRealTransform4(e,t,r,o,c,l){const h=c*2,p=c*3,f=e[o],d=e[o+c],i=e[o+h],n=e[o+p],a=f+i,u=f-i,m=d+n,g=l*(d-n);t[r]=a+m,t[r+1]=0,t[r+2]=u,t[r+3]=-g,t[r+4]=a-m,t[r+5]=0,t[r+6]=u,t[r+7]=g}}class NP2FFT{constructor(e){const t=2*(e-1),r=2*(2*e-1),o=2**Math.ceil(Math.log2(r));this.bufferSize=o,this._a=t;const c=new Float64Array(r),l=new Float64Array(o);this._chirpBuffer=new Float64Array(o),this._buffer1=new Float64Array(o),this._buffer2=new Float64Array(o),this._outBuffer1=new Float64Array(o),this._outBuffer2=new Float64Array(o);const h=-2*Math.PI/e,p=Math.cos(h),f=Math.sin(h);for(let d=0;d<r>>1;++d){const i=(d+1-e)**2/2,n=Math.sqrt(p**2+f**2)**i,a=i*Math.atan2(f,p),u=2*d;c[u]=n*Math.cos(a),c[u+1]=n*Math.sin(a),l[u]=c[u],l[u+1]=-c[u+1]}this._slicedChirpBuffer=c.subarray(t,r),this._f=new P2FFT(o>>1),this._f.transform(this._chirpBuffer,l)}_transform(e,t,r){const o=this._buffer1,c=this._buffer2,l=this._outBuffer1,h=this._outBuffer2,p=this._chirpBuffer,f=this._slicedChirpBuffer,d=this._a;if(r)for(let i=0;i<f.length;i+=2){const n=i+1,a=i>>1,u=t[a];o[i]=u*f[i],o[n]=u*f[n]}else for(let i=0;i<f.length;i+=2){const n=i+1;o[i]=t[i]*f[i]-t[n]*f[n],o[n]=t[i]*f[n]+t[n]*f[i]}this._f.transform(l,o);for(let i=0;i<p.length;i+=2){const n=i+1;c[i]=l[i]*p[i]-l[n]*p[n],c[n]=l[i]*p[n]+l[n]*p[i]}this._f.inverseTransform(h,c);for(let i=0;i<h.length;i+=2){const n=h[i+d],a=h[i+d+1],u=f[i],m=f[i+1];e[i]=n*u-a*m,e[i+1]=n*m+a*u}}transform(e,t){this._transform(e,t,!1)}realTransform(e,t){this._transform(e,t,!0)}}class FFT{constructor(e){this.fft_length=e,this.isPowerOfTwo=isPowerOfTwo(e),this.isPowerOfTwo?(this.fft=new P2FFT(e),this.outputBufferSize=2*e):(this.fft=new NP2FFT(e),this.outputBufferSize=this.fft.bufferSize)}realTransform(e,t){this.fft.realTransform(e,t)}transform(e,t){this.fft.transform(e,t)}}function medianFilter(s,e){if(e%2===0||e<=0)throw new Error("Window size must be a positive odd number");const t=new s.constructor(s.length),r=new s.constructor(e),o=Math.floor(e/2);for(let c=0;c<s.length;++c){let l=0;for(let h=-o;h<=o;++h){let p=c+h;p<0?p=Math.abs(p):p>=s.length&&(p=2*(s.length-1)-p),r[l++]=s[p]}r.sort(),t[c]=r[o]}return t}function round(s,e){const t=Math.pow(10,e);return Math.round(s*t)/t}const DataTypeMap=Object.freeze({float32:Float32Array,float64:Float64Array,string:Array,int8:Int8Array,uint8:Uint8Array,int16:Int16Array,uint16:Uint16Array,int32:Int32Array,uint32:Uint32Array,int64:BigInt64Array,uint64:BigUint64Array,bool:Uint8Array}),ONNXTensor$1=ONNX.Tensor;class Tensor{dims;type;data;size;constructor(...e){return e[0]instanceof ONNXTensor$1?Object.assign(this,e[0]):Object.assign(this,new ONNXTensor$1(e[0],e[1],e[2])),new Proxy(this,{get:(t,r)=>{if(typeof r=="string"){let o=Number(r);if(Number.isInteger(o))return t._getitem(o)}return t[r]},set:(t,r,o)=>t[r]=o})}*[Symbol.iterator](){const[e,...t]=this.dims;if(t.length>0){const r=t.reduce((o,c)=>o*c);for(let o=0;o<e;++o)yield this._subarray(o,r,t)}else yield*this.data}_getitem(e){const[t,...r]=this.dims;if(e=safeIndex(e,t),r.length>0){const o=r.reduce((c,l)=>c*l);return this._subarray(e,o,r)}else return new Tensor(this.type,[this.data[e]],r)}indexOf(e){for(let t=0;t<this.data.length;++t)if(this.data[t]==e)return t;return-1}_subarray(e,t,r){const o=e*t,c=(e+1)*t,l="subarray"in this.data?this.data.subarray(o,c):this.data.slice(o,c);return new Tensor(this.type,l,r)}item(){if(this.data.length!==1)throw new Error(`a Tensor with ${this.data.length} elements cannot be converted to Scalar`);return this.data[0]}tolist(){return reshape(this.data,this.dims)}sigmoid(){return this.clone().sigmoid_()}sigmoid_(){for(let e=0;e<this.data.length;++e)this.data[e]=1/(1+Math.exp(-this.data[e]));return this}mul(e){return this.clone().mul_(e)}mul_(e){for(let t=0;t<this.data.length;++t)this.data[t]*=e;return this}add(e){return this.clone().add_(e)}add_(e){for(let t=0;t<this.data.length;++t)this.data[t]+=e;return this}clone(){return new Tensor(this.type,this.data.slice(),this.dims.slice())}slice(...e){let t=[],r=[];for(let p=0;p<this.dims.length;++p){let f=e[p];if(f==null)r.push([0,this.dims[p]]),t.push(this.dims[p]);else if(typeof f=="number")f=safeIndex(f,this.dims[p],p),r.push([f,f+1]);else if(Array.isArray(f)&&f.length===2){if(f[0]>f[1])throw new Error(`Invalid slice: ${f}`);let d=[Math.max(f[0],0),Math.min(f[1],this.dims[p])];r.push(d),t.push(d[1]-d[0])}else throw new Error(`Invalid slice: ${f}`)}let o=r.map(([p,f])=>f-p),c=o.reduce((p,f)=>p*f),l=new this.data.constructor(c);const h=this.stride();for(let p=0;p<c;++p){let f=0;for(let d=o.length-1,i=p;d>=0;--d){const n=o[d];f+=(i%n+r[d][0])*h[d],i=Math.floor(i/n)}l[p]=this.data[f]}return new Tensor(this.type,l,t)}transpose(...e){return transpose(this,e)}sum(e=null,t=!1){return this.norm(1,e,t)}norm(e="fro",t=null,r=!1){if(e==="fro")e=2;else if(typeof e=="string")throw Error(`Unsupported norm: ${e}`);if(t===null){let l=this.data.reduce((h,p)=>h+p**e,0)**(1/e);return new Tensor(this.type,[l],[])}t=safeIndex(t,this.dims.length);const o=this.dims.slice();o[t]=1;const c=new this.data.constructor(this.data.length/this.dims[t]);for(let l=0;l<this.data.length;++l){let h=0;for(let p=this.dims.length-1,f=l,d=1;p>=0;--p){const i=this.dims[p];if(p!==t){const n=f%i;h+=n*d,d*=o[p]}f=Math.floor(f/i)}c[h]+=this.data[l]**e}if(e!==1)for(let l=0;l<c.length;++l)c[l]=c[l]**(1/e);return r||o.splice(t,1),new Tensor(this.type,c,o)}normalize_(e=2,t=1){t=safeIndex(t,this.dims.length);const r=this.norm(e,t,!0);for(let o=0;o<this.data.length;++o){let c=0;for(let l=this.dims.length-1,h=o,p=1;l>=0;--l){const f=this.dims[l];if(l!==t){const d=h%f;c+=d*p,p*=this.dims[l]}h=Math.floor(h/f)}this.data[o]/=r.data[c]}return this}normalize(e=2,t=1){return this.clone().normalize_(e,t)}stride(){return dimsToStride(this.dims)}squeeze(e=null){return new Tensor(this.type,this.data,calc_squeeze_dims(this.dims,e))}squeeze_(e=null){return this.dims=calc_squeeze_dims(this.dims,e),this}unsqueeze(e=null){return new Tensor(this.type,this.data,calc_unsqueeze_dims(this.dims,e))}unsqueeze_(e=null){return this.dims=calc_unsqueeze_dims(this.dims,e),this}flatten_(e=0,t=-1){t=(t+this.dims.length)%this.dims.length;let r=this.dims.slice(0,e),o=this.dims.slice(e,t+1),c=this.dims.slice(t+1);return this.dims=[...r,o.reduce((l,h)=>l*h,1),...c],this}flatten(e=0,t=-1){return this.clone().flatten_(e,t)}view(...e){let t=-1;for(let r=0;r<e.length;++r)if(e[r]===-1){if(t!==-1)throw new Error("Only one dimension can be inferred");t=r}if(t!==-1){const r=e.reduce((o,c,l)=>l!==t?o*c:o,1);e[t]=this.data.length/r}return new Tensor(this.type,this.data,e)}neg_(){for(let e=0;e<this.data.length;++e)this.data[e]=-this.data[e];return this}neg(){return this.clone().neg_()}clamp_(e,t){for(let r=0;r<this.data.length;++r)this.data[r]=Math.min(Math.max(this.data[r],e),t);return this}clamp(e,t){return this.clone().clamp_(e,t)}round_(){for(let e=0;e<this.data.length;++e)this.data[e]=Math.round(this.data[e]);return this}round(){return this.clone().round_()}to(e){if(this.type===e)return this;if(!DataTypeMap.hasOwnProperty(e))throw new Error(`Unsupported type: ${e}`);return new Tensor(e,DataTypeMap[e].from(this.data),this.dims)}}function reshape(s,e){const t=s.length,r=e.reduce((c,l)=>c*l);if(t!==r)throw Error(`cannot reshape array of size ${t} into shape (${e})`);let o=s;for(let c=e.length-1;c>=0;c--)o=o.reduce((l,h)=>{let p=l[l.length-1];return p.length<e[c]?p.push(h):l.push([h]),l},[[]]);return o[0]}function transpose(s,e){const[t,r]=transpose_data(s.data,s.dims,e);return new Tensor(s.type,t,r)}function interpolate(s,[e,t],r="bilinear",o=!1){const c=s.dims.at(-3)??1,l=s.dims.at(-2),h=s.dims.at(-1);let p=interpolate_data(s.data,[c,l,h],[e,t],r,o);return new Tensor(s.type,p,[c,e,t])}function mean_pooling(s,e){let t=[s.dims[0],s.dims[2]],r=new s.data.constructor(t[0]*t[1]),[o,c,l]=s.dims,h=0;for(let p=0;p<o;++p){let f=p*l*c;for(let d=0;d<l;++d){let i=0,n=0,a=p*c,u=f+d;for(let g=0;g<c;++g){let _=Number(e.data[a+g]);n+=_,i+=s.data[u+g*l]*_}let m=i/n;r[h++]=m}}return new Tensor(s.type,r,t)}function calc_squeeze_dims(s,e){return s=s.slice(),e===null?s=s.filter(t=>t!==1):typeof e=="number"?s[e]===1&&s.splice(e,1):Array.isArray(e)&&(s=s.filter((t,r)=>t!==1||!e.includes(r))),s}function calc_unsqueeze_dims(s,e){return e=safeIndex(e,s.length+1),s=s.slice(),s.splice(e,0,1),s}function safeIndex(s,e,t=null){if(s<-e||s>=e)throw new Error(`IndexError: index ${s} is out of bounds for dimension${t===null?"":" "+t} with size ${e}`);return s<0&&(s=(s%e+e)%e),s}function cat(s,e=0){e=safeIndex(e,s[0].dims.length);const t=s[0].dims.slice();t[e]=s.reduce((l,h)=>l+h.dims[e],0);const r=t.reduce((l,h)=>l*h,1),o=new s[0].data.constructor(r),c=s[0].type;if(e===0){let l=0;for(let h of s)o.set(h.data,l),l+=h.data.length}else{let l=0;for(let h=0;h<s.length;++h){let p=s[h];for(let f=0;f<p.data.length;++f){let d=0;for(let i=p.dims.length-1,n=f,a=1;i>=0;--i){const u=p.dims[i];let m=n%u;i===e&&(m+=l),d+=m*a,a*=t[i],n=Math.floor(n/u)}o[d]=p.data[f]}l+=p.dims[e]}}return new Tensor(c,o,t)}function stack(s,e=0){return cat(s.map(t=>t.unsqueeze(e)),e)}function std_mean(s,e=null,t=1,r=!1){if(e===null){const f=s.data.reduce((a,u)=>a+u,0)/s.data.length,d=Math.sqrt(s.data.reduce((a,u)=>a+(u-f)**2,0)/(s.data.length-t)),i=new Tensor(s.type,[f],[]);return[new Tensor(s.type,[d],[]),i]}e=safeIndex(e,s.dims.length);const o=mean(s,e,r),c=s.dims.slice();c[e]=1;const l=new s.data.constructor(s.data.length/s.dims[e]);for(let p=0;p<s.data.length;++p){let f=0;for(let d=s.dims.length-1,i=p,n=1;d>=0;--d){const a=s.dims[d];if(d!==e){const u=i%a;f+=u*n,n*=c[d]}i=Math.floor(i/a)}l[f]+=(s.data[p]-o.data[f])**2}for(let p=0;p<l.length;++p)l[p]=Math.sqrt(l[p]/(s.dims[e]-t));return r||c.splice(e,1),[new Tensor(s.type,l,c),o]}function mean(s,e=null,t=!1){if(e===null){let c=s.data.reduce((l,h)=>l+h,0);return new Tensor(s.type,[c/s.data.length],[])}e=safeIndex(e,s.dims.length);const r=s.dims.slice();r[e]=1;const o=new s.data.constructor(s.data.length/s.dims[e]);for(let c=0;c<s.data.length;++c){let l=0;for(let h=s.dims.length-1,p=c,f=1;h>=0;--h){const d=s.dims[h];if(h!==e){const i=p%d;l+=i*f,f*=r[h]}p=Math.floor(p/d)}o[l]+=s.data[c]}if(s.dims[e]!==1)for(let c=0;c<o.length;++c)o[c]=o[c]/s.dims[e];return t||r.splice(e,1),new Tensor(s.type,o,r)}function dynamicTimeWarping(s){const[e,t]=s.dims,r=[e+1,t+1],o=new Tensor("float32",new Float32Array(r[0]*r[1]).fill(1/0),r),c=new Tensor("float32",new Float32Array(r[0]*r[1]).fill(-1),r);o[0].data[0]=0;for(let d=1;d<t+1;++d)for(let i=1;i<e+1;++i){const n=o[i-1][d-1].item(),a=o[i-1][d].item(),u=o[i][d-1].item();let m,g;n<a&&n<u?(m=n,g=0):a<n&&a<u?(m=a,g=1):(m=u,g=2),o[i].data[d]=s[i-1][d-1].item()+m,c[i].data[d]=g}let l=e,h=t;c.data.fill(2,0,r[1]);for(let d=0;d<r[0];++d)c[d].data[0]=1;let p=[],f=[];for(;l>0||h>0;)switch(p.push(l-1),f.push(h-1),c[l][h].item()){case 0:--l,--h;break;case 1:--l;break;case 2:--h;break;default:throw new Error(`Internal error in dynamic time warping. Unexpected trace[${l}, ${h}]. Please file a bug report.`)}return p.reverse(),f.reverse(),[p,f]}function dimsToStride(s){const e=new Array(s.length);for(let t=s.length-1,r=1;t>=0;--t)e[t]=r,r*=s[t];return e}function ones(s){const e=s.reduce((t,r)=>t*r,1);return new Tensor("int64",new BigInt64Array(e).fill(1n),s)}function ones_like(s){return ones(s.dims)}class PriorityQueue{constructor(e=(t,r)=>t>r){this._heap=[],this._comparator=e}get size(){return this._heap.length}isEmpty(){return this.size===0}peek(){return this._heap[0]}push(...e){return this.extend(e)}extend(e){for(const t of e)this._heap.push(t),this._siftUp();return this.size}pop(){const e=this.peek(),t=this.size-1;return t>0&&this._swap(0,t),this._heap.pop(),this._siftDown(),e}replace(e){const t=this.peek();return this._heap[0]=e,this._siftDown(),t}_parent(e){return(e+1>>>1)-1}_left(e){return(e<<1)+1}_right(e){return e+1<<1}_greater(e,t){return this._comparator(this._heap[e],this._heap[t])}_swap(e,t){const r=this._heap[e];this._heap[e]=this._heap[t],this._heap[t]=r}_siftUp(){let e=this.size-1;for(;e>0&&this._greater(e,this._parent(e));)this._swap(e,this._parent(e)),e=this._parent(e)}_siftDown(){let e=0;for(;this._left(e)<this.size&&this._greater(this._left(e),e)||this._right(e)<this.size&&this._greater(this._right(e),e);){const t=this._right(e)<this.size&&this._greater(this._right(e),this._left(e))?this._right(e):this._left(e);this._swap(e,t),e=t}}}class CharTrie{constructor(){this.root=CharTrieNode.default()}extend(e){for(let t of e)this.push(t)}push(e){let t=this.root;for(let r of e){let o=t.children.get(r);o===void 0&&(o=CharTrieNode.default(),t.children.set(r,o)),t=o}t.isLeaf=!0}*commonPrefixSearch(e){let t=this.root,r="";for(let o=0;o<e.length&&t!==void 0;++o){const c=e[o];r+=c,t=t.children.get(c),t!==void 0&&t.isLeaf&&(yield r)}}}class CharTrieNode{constructor(e,t){this.isLeaf=e,this.children=t}static default(){return new CharTrieNode(!1,new Map)}}class TokenLattice{constructor(e,t,r){this.sentence=e,this.len=e.length,this.bosTokenId=t,this.eosTokenId=r,this.nodes=[],this.beginNodes=Array.from({length:this.len+1},()=>[]),this.endNodes=Array.from({length:this.len+1},()=>[]);const o=new TokenLatticeNode(this.bosTokenId,0,0,0,0),c=new TokenLatticeNode(this.eosTokenId,1,this.len,0,0);this.nodes.push(o.clone()),this.nodes.push(c.clone()),this.beginNodes[this.len].push(c),this.endNodes[0].push(o)}insert(e,t,r,o){const c=this.nodes.length,l=new TokenLatticeNode(o,c,e,t,r);this.beginNodes[e].push(l),this.endNodes[e+t].push(l),this.nodes.push(l)}viterbi(){const e=this.len;let t=0;for(;t<=e;){if(this.beginNodes[t].length==0)return[];for(let h of this.beginNodes[t]){h.prev=null;let p=0,f=null;for(let d of this.endNodes[t]){const i=d.backtraceScore+h.score;(f===null||i>p)&&(f=d.clone(),p=i)}if(f!==null)h.prev=f,h.backtraceScore=p;else return[]}++t}const r=[],c=this.beginNodes[e][0].prev;if(c===null)return[];let l=c.clone();for(;l.prev!==null;)r.push(l.clone()),l=l.clone().prev.clone();return r.reverse(),r}piece(e){return this.sentence.slice(e.pos,e.pos+e.length)}tokens(){return this.viterbi().map(t=>this.piece(t))}tokenIds(){return this.viterbi().map(t=>t.tokenId)}}class TokenLatticeNode{constructor(e,t,r,o,c){this.tokenId=e,this.nodeId=t,this.pos=r,this.length=o,this.score=c,this.prev=null,this.backtraceScore=0}clone(){const e=new TokenLatticeNode(this.tokenId,this.nodeId,this.pos,this.length,this.score);return e.prev=this.prev,e.backtraceScore=this.backtraceScore,e}}var TOKEN_TYPES=Object.freeze({Text:"Text",NumericLiteral:"NumericLiteral",BooleanLiteral:"BooleanLiteral",StringLiteral:"StringLiteral",Identifier:"Identifier",Equals:"Equals",OpenParen:"OpenParen",CloseParen:"CloseParen",OpenStatement:"OpenStatement",CloseStatement:"CloseStatement",OpenExpression:"OpenExpression",CloseExpression:"CloseExpression",OpenSquareBracket:"OpenSquareBracket",CloseSquareBracket:"CloseSquareBracket",Comma:"Comma",Dot:"Dot",Colon:"Colon",Pipe:"Pipe",CallOperator:"CallOperator",AdditiveBinaryOperator:"AdditiveBinaryOperator",MultiplicativeBinaryOperator:"MultiplicativeBinaryOperator",ComparisonBinaryOperator:"ComparisonBinaryOperator",UnaryOperator:"UnaryOperator",Set:"Set",If:"If",For:"For",In:"In",NotIn:"NotIn",Else:"Else",EndIf:"EndIf",ElseIf:"ElseIf",EndFor:"EndFor",And:"And",Or:"Or",Not:"UnaryOperator"}),KEYWORDS=Object.freeze({set:TOKEN_TYPES.Set,for:TOKEN_TYPES.For,in:TOKEN_TYPES.In,if:TOKEN_TYPES.If,else:TOKEN_TYPES.Else,endif:TOKEN_TYPES.EndIf,elif:TOKEN_TYPES.ElseIf,endfor:TOKEN_TYPES.EndFor,and:TOKEN_TYPES.And,or:TOKEN_TYPES.Or,not:TOKEN_TYPES.Not,"not in":TOKEN_TYPES.NotIn,true:TOKEN_TYPES.BooleanLiteral,false:TOKEN_TYPES.BooleanLiteral}),Token=class{constructor(s,e){this.value=s,this.type=e}};function isWord(s){return/\w/.test(s)}function isInteger(s){return/[0-9]/.test(s)}var ORDERED_MAPPING_TABLE=[["{%",TOKEN_TYPES.OpenStatement],["%}",TOKEN_TYPES.CloseStatement],["{{",TOKEN_TYPES.OpenExpression],["}}",TOKEN_TYPES.CloseExpression],["(",TOKEN_TYPES.OpenParen],[")",TOKEN_TYPES.CloseParen],["[",TOKEN_TYPES.OpenSquareBracket],["]",TOKEN_TYPES.CloseSquareBracket],[",",TOKEN_TYPES.Comma],[".",TOKEN_TYPES.Dot],[":",TOKEN_TYPES.Colon],["|",TOKEN_TYPES.Pipe],["<=",TOKEN_TYPES.ComparisonBinaryOperator],[">=",TOKEN_TYPES.ComparisonBinaryOperator],["==",TOKEN_TYPES.ComparisonBinaryOperator],["!=",TOKEN_TYPES.ComparisonBinaryOperator],["<",TOKEN_TYPES.ComparisonBinaryOperator],[">",TOKEN_TYPES.ComparisonBinaryOperator],["+",TOKEN_TYPES.AdditiveBinaryOperator],["-",TOKEN_TYPES.AdditiveBinaryOperator],["*",TOKEN_TYPES.MultiplicativeBinaryOperator],["/",TOKEN_TYPES.MultiplicativeBinaryOperator],["%",TOKEN_TYPES.MultiplicativeBinaryOperator],["=",TOKEN_TYPES.Equals]],ESCAPE_CHARACTERS=new Map([["n",`
`],["t","	"],["r","\r"],["b","\b"],["f","\f"],["v","\v"],["'","'"],['"','"'],["\\","\\"]]);function tokenize(s){const e=[],t=s;let r=0;const o=c=>{let l="";for(;c(t[r]);){if(t[r]==="\\"){if(++r,r>=t.length)throw new SyntaxError("Unexpected end of input");const h=t[r++],p=ESCAPE_CHARACTERS.get(h);if(p===void 0)throw new SyntaxError(`Unexpected escaped character: ${h}`);l+=p;continue}if(l+=t[r++],r>=t.length)throw new SyntaxError("Unexpected end of input")}return l};e:for(;r<t.length;){const c=e.at(-1)?.type;if(c===void 0||c===TOKEN_TYPES.CloseStatement||c===TOKEN_TYPES.CloseExpression){let h="";for(;r<t.length&&!(t[r]==="{"&&(t[r+1]==="%"||t[r+1]==="{"));)h+=t[r++];if(h.length>0){e.push(new Token(h,TOKEN_TYPES.Text));continue}}o(h=>/\s/.test(h));const l=t[r];if(l==="-"||l==="+"){const h=e.at(-1)?.type;if(h===TOKEN_TYPES.Text||h===void 0)throw new SyntaxError(`Unexpected character: ${l}`);switch(h){case TOKEN_TYPES.Identifier:case TOKEN_TYPES.NumericLiteral:case TOKEN_TYPES.BooleanLiteral:case TOKEN_TYPES.StringLiteral:case TOKEN_TYPES.CloseParen:case TOKEN_TYPES.CloseSquareBracket:break;default:{++r;const p=o(isInteger);e.push(new Token(`${l}${p}`,p.length>0?TOKEN_TYPES.NumericLiteral:TOKEN_TYPES.UnaryOperator));continue}}}for(const[h,p]of ORDERED_MAPPING_TABLE)if(t.slice(r,r+h.length)===h){e.push(new Token(h,p)),r+=h.length;continue e}if(l==="'"){++r;const h=o(p=>p!=="'");e.push(new Token(h,TOKEN_TYPES.StringLiteral)),++r;continue}if(isInteger(l)){const h=o(isInteger);e.push(new Token(h,TOKEN_TYPES.NumericLiteral));continue}if(isWord(l)){const h=o(isWord),p=Object.hasOwn(KEYWORDS,h)?KEYWORDS[h]:TOKEN_TYPES.Identifier;p===TOKEN_TYPES.In&&e.at(-1)?.type===TOKEN_TYPES.Not?(e.pop(),e.push(new Token("not in",TOKEN_TYPES.NotIn))):e.push(new Token(h,p));continue}throw new SyntaxError(`Unexpected character: ${l}`)}return e}var Statement=class{type="Statement"},Program=class extends Statement{constructor(s){super(),this.body=s}type="Program"},If=class extends Statement{constructor(s,e,t){super(),this.test=s,this.body=e,this.alternate=t}type="If"},For=class extends Statement{constructor(s,e,t){super(),this.loopvar=s,this.iterable=e,this.body=t}type="For"},SetStatement=class extends Statement{constructor(s,e){super(),this.assignee=s,this.value=e}type="Set"},Expression=class extends Statement{type="Expression"},MemberExpression=class extends Expression{constructor(s,e,t){super(),this.object=s,this.property=e,this.computed=t}type="MemberExpression"},CallExpression=class extends Expression{constructor(s,e){super(),this.callee=s,this.args=e}type="CallExpression"},Identifier=class extends Expression{constructor(s){super(),this.value=s}type="Identifier"},Literal=class extends Expression{constructor(s){super(),this.value=s}type="Literal"},NumericLiteral=class extends Literal{type="NumericLiteral"},StringLiteral=class extends Literal{type="StringLiteral";constructor(s){super(s)}},BooleanLiteral=class extends Literal{type="BooleanLiteral"},BinaryExpression=class extends Expression{constructor(s,e,t){super(),this.operator=s,this.left=e,this.right=t}type="BinaryExpression"},FilterExpression=class extends Expression{constructor(s,e){super(),this.operand=s,this.filter=e}type="FilterExpression"},UnaryExpression=class extends Expression{constructor(s,e){super(),this.operator=s,this.argument=e}type="UnaryExpression"},SliceExpression=class extends Expression{constructor(s=void 0,e=void 0,t=void 0){super(),this.start=s,this.stop=e,this.step=t}type="SliceExpression"};function parse(s){const e=new Program([]);let t=0;function r(I,k){const C=s[t++];if(!C||C.type!==I)throw new Error(`Parser Error: ${k}. ${C.type} !== ${I}.`);return C}function o(){switch(s[t].type){case TOKEN_TYPES.Text:return h();case TOKEN_TYPES.OpenStatement:return p();case TOKEN_TYPES.OpenExpression:return f();default:throw new SyntaxError(`Unexpected token type: ${s[t].type}`)}}function c(...I){return t+I.length<=s.length&&I.some((k,C)=>k!==s[t+C].type)}function l(...I){return t+I.length<=s.length&&I.every((k,C)=>k===s[t+C].type)}function h(){return new StringLiteral(r(TOKEN_TYPES.Text,"Expected text token").value)}function p(){r(TOKEN_TYPES.OpenStatement,"Expected opening statement token");let I;switch(s[t].type){case TOKEN_TYPES.Set:++t,I=d(),r(TOKEN_TYPES.CloseStatement,"Expected closing statement token");break;case TOKEN_TYPES.If:++t,I=i(),r(TOKEN_TYPES.OpenStatement,"Expected {% token"),r(TOKEN_TYPES.EndIf,"Expected endif token"),r(TOKEN_TYPES.CloseStatement,"Expected %} token");break;case TOKEN_TYPES.For:++t,I=n(),r(TOKEN_TYPES.OpenStatement,"Expected {% token"),r(TOKEN_TYPES.EndFor,"Expected endfor token"),r(TOKEN_TYPES.CloseStatement,"Expected %} token");break;default:throw new SyntaxError(`Unknown statement type: ${s[t].type}`)}return I}function f(){r(TOKEN_TYPES.OpenExpression,"Expected opening expression token");const I=a();return r(TOKEN_TYPES.CloseExpression,"Expected closing expression token"),I}function d(){const I=a();if(l(TOKEN_TYPES.Equals)){++t;const k=d();return new SetStatement(I,k)}return I}function i(){const I=a();r(TOKEN_TYPES.CloseStatement,"Expected closing statement token");const k=[],C=[];for(;!(s[t]?.type===TOKEN_TYPES.OpenStatement&&(s[t+1]?.type===TOKEN_TYPES.ElseIf||s[t+1]?.type===TOKEN_TYPES.Else||s[t+1]?.type===TOKEN_TYPES.EndIf));)k.push(o());if(s[t]?.type===TOKEN_TYPES.OpenStatement&&s[t+1]?.type!==TOKEN_TYPES.EndIf)if(++t,l(TOKEN_TYPES.ElseIf))r(TOKEN_TYPES.ElseIf,"Expected elseif token"),C.push(i());else for(r(TOKEN_TYPES.Else,"Expected else token"),r(TOKEN_TYPES.CloseStatement,"Expected closing statement token");!(s[t]?.type===TOKEN_TYPES.OpenStatement&&s[t+1]?.type===TOKEN_TYPES.EndIf);)C.push(o());return new If(I,k,C)}function n(){const I=R();if(!(I instanceof Identifier))throw new SyntaxError("Expected identifier for the loop variable");r(TOKEN_TYPES.In,"Expected `in` keyword following loop variable");const k=a();r(TOKEN_TYPES.CloseStatement,"Expected closing statement token");const C=[];for(;c(TOKEN_TYPES.OpenStatement,TOKEN_TYPES.EndFor);)C.push(o());return new For(I,k,C)}function a(){return u()}function u(){let I=m();for(;l(TOKEN_TYPES.Or);){const k=s[t];++t;const C=m();I=new BinaryExpression(k,I,C)}return I}function m(){let I=g();for(;l(TOKEN_TYPES.And);){const k=s[t];++t;const C=g();I=new BinaryExpression(k,I,C)}return I}function g(){let I;for(;l(TOKEN_TYPES.Not);){const k=s[t];++t;const C=g();I=new UnaryExpression(k,C)}return I??_()}function _(){let I=b();for(;l(TOKEN_TYPES.ComparisonBinaryOperator)||l(TOKEN_TYPES.In)||l(TOKEN_TYPES.NotIn);){const k=s[t];++t;const C=b();I=new BinaryExpression(k,I,C)}return I}function b(){let I=T();for(;l(TOKEN_TYPES.AdditiveBinaryOperator);){const k=s[t];++t;const C=T();I=new BinaryExpression(k,I,C)}return I}function y(){const I=M();return l(TOKEN_TYPES.OpenParen)?v(I):I}function v(I){let k=new CallExpression(I,x());return l(TOKEN_TYPES.OpenParen)&&(k=v(k)),k}function x(){r(TOKEN_TYPES.OpenParen,"Expected opening parenthesis for arguments list");const I=l(TOKEN_TYPES.CloseParen)?[]:w();return r(TOKEN_TYPES.CloseParen,"Expected closing parenthesis for arguments list"),I}function w(){const I=[a()];for(;l(TOKEN_TYPES.Comma);)++t,I.push(a());return I}function S(){const I=[];let k=!1;for(;!l(TOKEN_TYPES.CloseSquareBracket);)l(TOKEN_TYPES.Colon)?(I.push(void 0),++t,k=!0):(I.push(a()),l(TOKEN_TYPES.Colon)&&(++t,k=!0));if(I.length===0)throw new SyntaxError("Expected at least one argument for member/slice expression");if(k){if(I.length>3)throw new SyntaxError("Expected 0-3 arguments for slice expression");return new SliceExpression(...I)}return I[0]}function M(){let I=R();for(;l(TOKEN_TYPES.Dot)||l(TOKEN_TYPES.OpenSquareBracket);){const k=s[t];++t;let C;const z=k.type!==TOKEN_TYPES.Dot;if(z)C=S(),r(TOKEN_TYPES.CloseSquareBracket,"Expected closing square bracket");else if(C=R(),C.type!=="Identifier")throw new SyntaxError("Expected identifier following dot operator");I=new MemberExpression(I,C,z)}return I}function T(){let I=E();for(;l(TOKEN_TYPES.MultiplicativeBinaryOperator);){const k=s[t];++t;const C=E();I=new BinaryExpression(k,I,C)}return I}function E(){let I=y();for(;l(TOKEN_TYPES.Pipe);){++t;const k=R();if(!(k instanceof Identifier))throw new SyntaxError("Expected identifier for the filter");I=new FilterExpression(I,k)}return I}function R(){const I=s[t];switch(I.type){case TOKEN_TYPES.NumericLiteral:return++t,new NumericLiteral(Number(I.value));case TOKEN_TYPES.StringLiteral:return++t,new StringLiteral(I.value);case TOKEN_TYPES.BooleanLiteral:return++t,new BooleanLiteral(I.value==="true");case TOKEN_TYPES.Identifier:return++t,new Identifier(I.value);case TOKEN_TYPES.OpenParen:{++t;const k=a();if(s[t].type!==TOKEN_TYPES.CloseParen)throw new SyntaxError("Expected closing parenthesis");return++t,k}default:throw new SyntaxError(`Unexpected token: ${I.type}`)}}for(;t<s.length;)e.body.push(o());return e}function slice(s,e,t,r=1){const o=Math.sign(r);o>=0?(e=(e??=0)<0?Math.max(s.length+e,0):Math.min(e,s.length),t=(t??=s.length)<0?Math.max(s.length+t,0):Math.min(t,s.length)):(e=(e??=s.length-1)<0?Math.max(s.length+e,-1):Math.min(e,s.length-1),t=(t??=-1)<-1?Math.max(s.length+t,-1):Math.min(t,s.length-1));const c=[];for(let l=e;o*l<o*t;l+=r)c.push(s[l]);return c}var RuntimeValue=class{type="RuntimeValue";value;builtins=new Map;constructor(s=void 0){this.value=s}__bool__(){return new BooleanValue(!!this.value)}},NumericValue=class extends RuntimeValue{type="NumericValue"},StringValue=class extends RuntimeValue{type="StringValue";builtins=new Map([["upper",new FunctionValue(()=>new StringValue(this.value.toUpperCase()))],["lower",new FunctionValue(()=>new StringValue(this.value.toLowerCase()))],["strip",new FunctionValue(()=>new StringValue(this.value.trim()))],["length",new NumericValue(this.value.length)]])},BooleanValue=class extends RuntimeValue{type="BooleanValue"},ObjectValue=class extends RuntimeValue{type="ObjectValue";__bool__(){return new BooleanValue(this.value.size>0)}},ArrayValue=class extends RuntimeValue{type="ArrayValue";builtins=new Map([["length",new NumericValue(this.value.length)]]);__bool__(){return new BooleanValue(this.value.length>0)}},FunctionValue=class extends RuntimeValue{type="FunctionValue"},NullValue=class extends RuntimeValue{type="NullValue"},UndefinedValue=class extends RuntimeValue{type="UndefinedValue"},Environment=class{constructor(s){this.parent=s}variables=new Map;set(s,e){return this.declareVariable(s,convertToRuntimeValues(e))}declareVariable(s,e){if(this.variables.has(s))throw new SyntaxError(`Variable already declared: ${s}`);return this.variables.set(s,e),e}setVariable(s,e){let t;try{t=this.resolve(s)}catch{}return(t??this).variables.set(s,e),e}resolve(s){if(this.variables.has(s))return this;if(this.parent)return this.parent.resolve(s);throw new Error(`Unknown variable: ${s}`)}lookupVariable(s){return this.resolve(s).variables.get(s)??new NullValue}},Interpreter=class{global;constructor(s){this.global=s??new Environment}run(s){return this.evaluate(s,this.global)}evaluateBinaryExpression(s,e){const t=this.evaluate(s.left,e),r=this.evaluate(s.right,e);switch(s.operator.value){case"==":return new BooleanValue(t.value==r.value);case"!=":return new BooleanValue(t.value!=r.value);case"and":return t.__bool__().value?r:t;case"or":return t.__bool__().value?t:r}if(t instanceof UndefinedValue||r instanceof UndefinedValue)throw new Error("Cannot perform operation on undefined values");if(t instanceof NullValue||r instanceof NullValue)throw new Error("Cannot perform operation on null values");if(t instanceof NumericValue&&r instanceof NumericValue)switch(s.operator.value){case"+":return new NumericValue(t.value+r.value);case"-":return new NumericValue(t.value-r.value);case"*":return new NumericValue(t.value*r.value);case"/":return new NumericValue(t.value/r.value);case"%":return new NumericValue(t.value%r.value);case"<":return new BooleanValue(t.value<r.value);case">":return new BooleanValue(t.value>r.value);case">=":return new BooleanValue(t.value>=r.value);case"<=":return new BooleanValue(t.value<=r.value)}else if(r instanceof ArrayValue){const o=r.value.find(c=>c.value===t.value)!==void 0;switch(s.operator.value){case"in":return new BooleanValue(o);case"not in":return new BooleanValue(!o)}}if(t instanceof StringValue||r instanceof StringValue)switch(s.operator.value){case"+":return new StringValue(t.value.toString()+r.value.toString())}if(t instanceof StringValue&&r instanceof StringValue)switch(s.operator.value){case"in":return new BooleanValue(r.value.includes(t.value));case"not in":return new BooleanValue(!r.value.includes(t.value))}throw new SyntaxError(`Unknown operator "${s.operator.value}" between ${t.type} and ${r.type}`)}evaluateFilterExpression(s,e){const t=this.evaluate(s.operand,e);if(t instanceof ArrayValue)switch(s.filter.value){case"first":return t.value[0];case"last":return t.value[t.value.length-1];case"length":return new NumericValue(t.value.length);case"reverse":return new ArrayValue(t.value.reverse());case"sort":return new ArrayValue(t.value.sort((r,o)=>{if(r.type!==o.type)throw new Error(`Cannot compare different types: ${r.type} and ${o.type}`);switch(r.type){case"NumericValue":return r.value-o.value;case"StringValue":return r.value.localeCompare(o.value);default:throw new Error(`Cannot compare type: ${r.type}`)}}));default:throw new Error(`Unknown filter: ${s.filter.value}`)}throw new Error(`Cannot apply filter to type: ${t.type}`)}evaluateUnaryExpression(s,e){const t=this.evaluate(s.argument,e);switch(s.operator.value){case"not":return new BooleanValue(!t.value);default:throw new SyntaxError(`Unknown operator: ${s.operator.value}`)}}evalProgram(s,e){return this.evaluateBlock(s.body,e)}evaluateBlock(s,e){let t="";for(const r of s){const o=this.evaluate(r,e);o.type!=="NullValue"&&(t+=o.value)}return t=t.replace(/^\n/,""),new StringValue(t)}evaluateIdentifier(s,e){return e.lookupVariable(s.value)}evaluateCallExpression(s,e){const t=s.args.map(o=>this.evaluate(o,e)),r=this.evaluate(s.callee,e);if(r.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${r.type}`);return r.value(t,e)}evaluateSliceExpression(s,e,t){if(!(s instanceof ArrayValue||s instanceof StringValue))throw new Error("Slice object must be an array or string");const r=this.evaluate(e.start,t),o=this.evaluate(e.stop,t),c=this.evaluate(e.step,t);if(!(r instanceof NumericValue||r instanceof UndefinedValue))throw new Error("Slice start must be numeric or undefined");if(!(o instanceof NumericValue||o instanceof UndefinedValue))throw new Error("Slice stop must be numeric or undefined");if(!(c instanceof NumericValue||c instanceof UndefinedValue))throw new Error("Slice step must be numeric or undefined");return s instanceof ArrayValue?new ArrayValue(slice(s.value,r.value,o.value,c.value)):new StringValue(slice(Array.from(s.value),r.value,o.value,c.value).join(""))}evaluateMemberExpression(s,e){const t=this.evaluate(s.object,e);let r;if(s.computed){if(s.property.type==="SliceExpression")return this.evaluateSliceExpression(t,s.property,e);r=this.evaluate(s.property,e)}else r=new StringValue(s.property.value);let o;if(t instanceof ObjectValue){if(!(r instanceof StringValue))throw new Error(`Cannot access property with non-string: got ${r.type}`);o=t.value.get(r.value)??t.builtins.get(r.value)}else if(t instanceof ArrayValue||t instanceof StringValue)if(r instanceof NumericValue)o=t.value.at(r.value),t instanceof StringValue&&(o=new StringValue(t.value.at(r.value)));else if(r instanceof StringValue)o=t.builtins.get(r.value);else throw new Error(`Cannot access property with non-string/non-number: got ${r.type}`);else{if(!(r instanceof StringValue))throw new Error(`Cannot access property with non-string: got ${r.type}`);o=t.builtins.get(r.value)}if(!(o instanceof RuntimeValue))throw new Error(`${t.type} has no property '${r.value}'`);return o}evaluateSet(s,e){if(s.assignee.type!=="Identifier")throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(s.assignee)}`);const t=s.assignee.value;return e.setVariable(t,this.evaluate(s.value,e)),new NullValue}evaluateIf(s,e){const t=this.evaluate(s.test,e);return this.evaluateBlock(t.__bool__().value?s.body:s.alternate,e)}evaluateFor(s,e){const t=new Environment(e),r=this.evaluate(s.iterable,t);if(!(r instanceof ArrayValue))throw new Error(`Expected iterable type in for loop: got ${r.type}`);let o="";for(let c=0;c<r.value.length;++c){t.setVariable("loop",new ObjectValue(new Map([["index",new NumericValue(c+1)],["index0",new NumericValue(c)],["first",new BooleanValue(c===0)],["last",new BooleanValue(c===r.value.length-1)],["length",new NumericValue(r.value.length)]].map(([h,p])=>[h,p])))),t.setVariable(s.loopvar.value,r.value[c]);const l=this.evaluateBlock(s.body,t);o+=l.value}return new StringValue(o)}evaluate(s,e){if(s===void 0)return new UndefinedValue;switch(s.type){case"Program":return this.evalProgram(s,e);case"Set":return this.evaluateSet(s,e);case"If":return this.evaluateIf(s,e);case"For":return this.evaluateFor(s,e);case"NumericLiteral":return new NumericValue(Number(s.value));case"StringLiteral":return new StringValue(s.value);case"BooleanLiteral":return new BooleanValue(s.value);case"Identifier":return this.evaluateIdentifier(s,e);case"CallExpression":return this.evaluateCallExpression(s,e);case"MemberExpression":return this.evaluateMemberExpression(s,e);case"UnaryExpression":return this.evaluateUnaryExpression(s,e);case"BinaryExpression":return this.evaluateBinaryExpression(s,e);case"FilterExpression":return this.evaluateFilterExpression(s,e);default:throw new SyntaxError(`Unknown node type: ${s.type}`)}}};function convertToRuntimeValues(s){switch(typeof s){case"number":return new NumericValue(s);case"string":return new StringValue(s);case"boolean":return new BooleanValue(s);case"object":return s===null?new NullValue:Array.isArray(s)?new ArrayValue(s.map(convertToRuntimeValues)):new ObjectValue(new Map(Object.entries(s).map(([e,t])=>[e,convertToRuntimeValues(t)])));case"function":return new FunctionValue((e,t)=>{const r=s(...e.map(o=>o.value))??null;return convertToRuntimeValues(r)});default:throw new Error(`Cannot convert to runtime value: ${s}`)}}var Template=class{parsed;constructor(s){s=s.replace(/%}\s+{%/g,"%}{%");const e=tokenize(s);this.parsed=parse(e)}render(s){const e=new Environment;e.set("false",!1),e.set("true",!0),e.set("raise_exception",o=>{throw new Error(o)});for(const[o,c]of Object.entries(s))e.set(o,c);return new Interpreter(e).run(this.parsed).value}};async function loadTokenizer(s,e){const t=await Promise.all([getModelJSON(s,"tokenizer.json",!0,e),getModelJSON(s,"tokenizer_config.json",!0,e)]);return e.legacy!==null&&(t[1].legacy=e.legacy),t}function regexSplit(s,e){const t=[];let r=0;for(const o of s.matchAll(e)){const c=o[0];r<o.index&&t.push(s.slice(r,o.index)),c.length>0&&t.push(c),r=o.index+c.length}return r<s.length&&t.push(s.slice(r)),t}function createPattern(s,e=!0){if(s.Regex!==void 0){const t=s.Regex.replace(/\\([#&~])/g,"$1");return new RegExp(t,"gu")}else if(s.String!==void 0){const t=escapeRegExp(s.String);return new RegExp(e?t:`(${t})`,"gu")}else return console.warn("Unknown pattern type:",s),null}function objectToMap(s){return new Map(Object.entries(s))}function prepareTensorForDecode(s){const e=s.dims;switch(e.length){case 1:return s.tolist();case 2:if(e[0]!==1)throw new Error("Unable to decode tensor with `batch size !== 1`. Use `tokenizer.batch_decode(...)` for batched inputs.");return s.tolist()[0];default:throw new Error(`Expected tensor to have 1-2 dimensions, got ${e.length}.`)}}function clean_up_tokenization(s){return s.replace(/ \./g,".").replace(/ \?/g,"?").replace(/ \!/g,"!").replace(/ ,/g,",").replace(/ \' /g,"'").replace(/ n\'t/g,"n't").replace(/ \'m/g,"'m").replace(/ \'s/g,"'s").replace(/ \'ve/g,"'ve").replace(/ \'re/g,"'re")}function remove_accents(s){return s.replace(/[\u0300-\u036f]/g,"")}function lowercase_and_remove_accent(s){return remove_accents(s.toLowerCase())}function fuse(s,e,t){const r=[];let o=0;for(;o<s.length;){if(r.push(s[o]),(t.get(s[o])??e)!==e){++o;continue}for(;o<s.length&&(t.get(s[o])??e)===e;)++o}return r}function whitespace_split(s){return s.match(/\S+/g)||[]}const PUNCTUATION_REGEX="\\p{P}\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E";class AddedToken{constructor(e){this.content=e.content,this.id=e.id,this.single_word=e.single_word??!1,this.lstrip=e.lstrip??!1,this.rstrip=e.rstrip??!1,this.special=e.special??!1,this.normalized=e.normalized??null}}class TokenizerModel extends Callable{constructor(e){super(),this.config=e,this.vocab=[],this.tokens_to_ids=new Map,this.unk_token_id=void 0,this.unk_token=void 0,this.end_of_word_suffix=void 0,this.fuse_unk=this.config.fuse_unk??!1}static fromConfig(e,...t){switch(e.type){case"WordPiece":return new WordPieceTokenizer(e);case"Unigram":return new Unigram(e,...t);case"BPE":return new BPE(e);default:if(e.vocab)return new LegacyTokenizerModel(e,...t);throw new Error(`Unknown TokenizerModel type: ${e.type}`)}}_call(e){let t=this.encode(e);return this.fuse_unk&&(t=fuse(t,this.unk_token_id,this.tokens_to_ids)),t}encode(e){throw Error("encode should be implemented in subclass.")}convert_tokens_to_ids(e){return e.map(t=>this.tokens_to_ids.get(t)??this.unk_token_id)}convert_ids_to_tokens(e){return e.map(t=>this.vocab[t]??this.unk_token)}}class WordPieceTokenizer extends TokenizerModel{constructor(e){super(e),this.tokens_to_ids=objectToMap(e.vocab),this.unk_token_id=this.tokens_to_ids.get(e.unk_token),this.unk_token=e.unk_token,this.max_input_chars_per_word=e.max_input_chars_per_word??100,this.vocab=new Array(this.tokens_to_ids.size);for(const[t,r]of this.tokens_to_ids)this.vocab[r]=t}encode(e){const t=[];for(const r of e){const o=[...r];if(o.length>this.max_input_chars_per_word){t.push(this.unk_token);continue}let c=!1,l=0;const h=[];for(;l<o.length;){let p=o.length,f=null;for(;l<p;){let d=o.slice(l,p).join("");if(l>0&&(d=this.config.continuing_subword_prefix+d),this.tokens_to_ids.has(d)){f=d;break}--p}if(f===null){c=!0;break}h.push(f),l=p}c?t.push(this.unk_token):t.push(...h)}return t}}class Unigram extends TokenizerModel{constructor(e,t){super(e);const r=e.vocab.length;this.vocab=new Array(r),this.scores=new Array(r);for(let o=0;o<r;++o){const c=e.vocab[o];this.vocab[o]=c[0],this.scores[o]=c[1]}this.unk_token_id=e.unk_id,this.unk_token=this.vocab[e.unk_id],this.tokens_to_ids=new Map(this.vocab.map((o,c)=>[o,c])),this.bosToken=" ",this.bosTokenId=this.tokens_to_ids.get(this.bosToken),this.eosToken=t.eos_token,this.eosTokenId=this.tokens_to_ids.get(this.eosToken),this.unkToken=this.vocab[this.unk_token_id],this.minScore=min(this.scores)[0],this.unkScore=this.minScore-10,this.scores[this.unk_token_id]=this.unkScore,this.trie=new CharTrie,this.trie.extend(this.vocab),this.fuse_unk=!0}populateNodes(e){const t=e.sentence,r=t.length;let o=0;for(;o<r;){let l=!1;for(let h of this.trie.commonPrefixSearch(t.slice(o))){const p=this.tokens_to_ids.get(h),f=this.scores[p],d=h.length;e.insert(o,d,f,p),!l&&d===1&&(l=!0)}l||e.insert(o,1,this.unkScore,this.unk_token_id),o+=1}}tokenize(e){const t=new TokenLattice(e,this.bosTokenId,this.eosTokenId);return this.populateNodes(t),t.tokens()}encode(e){const t=[];for(const r of e){const o=this.tokenize(r);t.push(...o)}return t}}const BYTES_TO_UNICODE=(()=>{const s=[...Array.from({length:94},(o,c)=>c+33),...Array.from({length:12},(o,c)=>c+161),...Array.from({length:82},(o,c)=>c+174)],e=s.slice();let t=0;for(let o=0;o<256;++o)s.includes(o)||(s.push(o),e.push(256+t),t+=1);const r=e.map(o=>String.fromCharCode(o));return Object.fromEntries(s.map((o,c)=>[o,r[c]]))})(),UNICODE_TO_BYTES=reverseDictionary(BYTES_TO_UNICODE);class BPE extends TokenizerModel{constructor(e){super(e),this.BPE_SPLIT_TOKEN=" ",this.tokens_to_ids=objectToMap(e.vocab),this.unk_token_id=this.tokens_to_ids.get(e.unk_token),this.unk_token=e.unk_token,this.vocab=new Array(this.tokens_to_ids.size);for(const[t,r]of this.tokens_to_ids)this.vocab[r]=t;this.bpe_ranks=new Map(e.merges.map((t,r)=>[t,r])),this.merges=e.merges.map(t=>t.split(this.BPE_SPLIT_TOKEN)),this.end_of_word_suffix=e.end_of_word_suffix,this.continuing_subword_suffix=e.continuing_subword_suffix??null,this.byte_fallback=this.config.byte_fallback??!1,this.byte_fallback&&(this.text_encoder=new TextEncoder),this.cache=new Map}bpe(e){if(e.length===0)return[];const t=this.cache.get(e);if(t!==void 0)return t;const r=Array.from(e);this.end_of_word_suffix&&(r[r.length-1]+=this.end_of_word_suffix);let o=[];if(r.length>1){const c=new PriorityQueue((p,f)=>p.score<f.score);let l={token:r[0],bias:0,prev:null,next:null},h=l;for(let p=1;p<r.length;++p){const f={bias:p/r.length,token:r[p],prev:h,next:null};h.next=f,this._add_node(c,h),h=f}for(;!c.isEmpty();){const p=c.pop();if(p.deleted||!p.next||p.next.deleted)continue;if(p.deleted=!0,p.next.deleted=!0,p.prev){const d={...p.prev};p.prev.deleted=!0,p.prev=d,d.prev?d.prev.next=d:l=d}const f={token:p.token+p.next.token,bias:p.bias,prev:p.prev,next:p.next.next};f.prev?(f.prev.next=f,this._add_node(c,f.prev)):l=f,f.next&&(f.next.prev=f,this._add_node(c,f))}for(let p=l;p!==null;p=p.next)o.push(p.token)}else o=r;if(this.continuing_subword_suffix)for(let c=0;c<o.length-1;++c)o[c]+=this.continuing_subword_suffix;return this.cache.set(e,o),o}_add_node(e,t){const r=this.bpe_ranks.get(t.token+this.BPE_SPLIT_TOKEN+t.next.token);r!==void 0&&(t.score=r+t.bias,e.push(t))}encode(e){const t=[];for(const r of e){const o=this.bpe(r);for(const c of o)this.tokens_to_ids.has(c)?t.push(c):this.byte_fallback?t.push(...Array.from(this.text_encoder.encode(c)).map(l=>`<0x${l.toString(16).toUpperCase().padStart(2,"0")}>`)):t.push(this.unk_token)}return t}}class LegacyTokenizerModel extends TokenizerModel{constructor(e,t){super(e),this.tokens_to_ids=objectToMap(t.target_lang?e.vocab[t.target_lang]:e.vocab),this.bos_token=t.bos_token,this.bos_token_id=this.tokens_to_ids.get(this.bos_token),this.eos_token=t.eos_token,this.eos_token_id=this.tokens_to_ids.get(this.eos_token),this.pad_token=t.pad_token,this.pad_token_id=this.tokens_to_ids.get(this.pad_token),this.unk_token=t.unk_token,this.unk_token_id=this.tokens_to_ids.get(this.unk_token),this.vocab=new Array(this.tokens_to_ids.size);for(const[r,o]of this.tokens_to_ids)this.vocab[o]=r}encode(e){return e}}class Normalizer extends Callable{constructor(e){super(),this.config=e}static fromConfig(e){if(e===null)return null;switch(e.type){case"BertNormalizer":return new BertNormalizer(e);case"Precompiled":return new Precompiled(e);case"Sequence":return new NormalizerSequence(e);case"Replace":return new Replace(e);case"NFC":return new NFC(e);case"NFKC":return new NFKC(e);case"NFKD":return new NFKD(e);case"Strip":return new StripNormalizer(e);case"StripAccents":return new StripAccents(e);case"Lowercase":return new Lowercase(e);case"Prepend":return new Prepend(e);default:throw new Error(`Unknown Normalizer type: ${e.type}`)}}normalize(e){throw Error("normalize should be implemented in subclass.")}_call(e){return this.normalize(e)}}class Replace extends Normalizer{normalize(e){const t=createPattern(this.config.pattern);return t===null?e:e.replaceAll(t,this.config.content)}}class NFC extends Normalizer{normalize(e){return e=e.normalize("NFC"),e}}class NFKC extends Normalizer{normalize(e){return e=e.normalize("NFKC"),e}}class NFKD extends Normalizer{normalize(e){return e=e.normalize("NFKD"),e}}class StripNormalizer extends Normalizer{normalize(e){return this.config.strip_left&&this.config.strip_right?e=e.trim():(this.config.strip_left&&(e=e.trimStart()),this.config.strip_right&&(e=e.trimEnd())),e}}class StripAccents extends Normalizer{normalize(e){return e=remove_accents(e),e}}class Lowercase extends Normalizer{normalize(e){return e=e.toLowerCase(),e}}class Prepend extends Normalizer{normalize(e){return e=this.config.prepend+e,e}}class NormalizerSequence extends Normalizer{constructor(e){super(e),this.normalizers=e.normalizers.map(t=>Normalizer.fromConfig(t))}normalize(e){return this.normalizers.reduce((t,r)=>r.normalize(t),e)}}class BertNormalizer extends Normalizer{_tokenize_chinese_chars(e){const t=[];for(let r=0;r<e.length;++r){const o=e[r],c=o.charCodeAt(0);this._is_chinese_char(c)?(t.push(" "),t.push(o),t.push(" ")):t.push(o)}return t.join("")}_is_chinese_char(e){return e>=19968&&e<=40959||e>=13312&&e<=19903||e>=131072&&e<=173791||e>=173824&&e<=177983||e>=177984&&e<=178207||e>=178208&&e<=183983||e>=63744&&e<=64255||e>=194560&&e<=195103}stripAccents(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}_is_control(e){switch(e){case"	":case`
`:case"\r":return!1;default:return/^\p{Cc}|\p{Cf}|\p{Co}|\p{Cs}$/u.test(e)}}_clean_text(e){const t=[];for(const r of e){const o=r.charCodeAt(0);o===0||o===65533||this._is_control(r)||(/^\s$/.test(r)?t.push(" "):t.push(r))}return t.join("")}normalize(e){return this.config.clean_text&&(e=this._clean_text(e)),this.config.handle_chinese_chars&&(e=this._tokenize_chinese_chars(e)),this.config.lowercase?(e=e.toLowerCase(),this.config.strip_accents!==!1&&(e=this.stripAccents(e))):this.config.strip_accents&&(e=this.stripAccents(e)),e}}class PreTokenizer extends Callable{static fromConfig(e){if(e===null)return null;switch(e.type){case"BertPreTokenizer":return new BertPreTokenizer(e);case"Sequence":return new PreTokenizerSequence(e);case"WhitespaceSplit":return new WhitespaceSplit(e);case"Metaspace":return new MetaspacePreTokenizer(e);case"ByteLevel":return new ByteLevelPreTokenizer(e);case"Split":return new SplitPreTokenizer(e);case"Punctuation":return new PunctuationPreTokenizer(e);case"Digits":return new DigitsPreTokenizer(e);case"Replace":return new ReplacePreTokenizer(e);default:throw new Error(`Unknown PreTokenizer type: ${e.type}`)}}pre_tokenize_text(e,t){throw Error("pre_tokenize_text should be implemented in subclass.")}pre_tokenize(e,t){return(Array.isArray(e)?e.map(r=>this.pre_tokenize_text(r,t)):this.pre_tokenize_text(e,t)).flat()}_call(e,t){return this.pre_tokenize(e,t)}}class BertPreTokenizer extends PreTokenizer{constructor(e){super(),this.pattern=new RegExp(`[^\\s${PUNCTUATION_REGEX}]+|[${PUNCTUATION_REGEX}]`,"gu")}pre_tokenize_text(e,t){return e.trim().match(this.pattern)||[]}}class ByteLevelPreTokenizer extends PreTokenizer{constructor(e){super(),this.config=e,this.add_prefix_space=this.config.add_prefix_space,this.trim_offsets=this.config.trim_offsets,this.use_regex=this.config.use_regex??!0,this.pattern=/'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu,this.byte_encoder=BYTES_TO_UNICODE,this.text_encoder=new TextEncoder}pre_tokenize_text(e,t){return this.add_prefix_space&&!e.startsWith(" ")&&(e=" "+e),(this.use_regex?e.match(this.pattern)||[]:[e]).map(o=>Array.from(this.text_encoder.encode(o),c=>this.byte_encoder[c]).join(""))}}class SplitPreTokenizer extends PreTokenizer{constructor(e){super(),this.config=e,this.pattern=createPattern(this.config.pattern,this.config.invert)}pre_tokenize_text(e,t){return this.pattern===null?[]:this.config.invert?e.match(this.pattern)||[]:regexSplit(e,this.pattern)}}class PunctuationPreTokenizer extends PreTokenizer{constructor(e){super(),this.config=e,this.pattern=new RegExp(`[^${PUNCTUATION_REGEX}]+|[${PUNCTUATION_REGEX}]+`,"gu")}pre_tokenize_text(e,t){return e.match(this.pattern)||[]}}class DigitsPreTokenizer extends PreTokenizer{constructor(e){super(),this.config=e;const t=`[^\\d]+|\\d${this.config.individual_digits?"":"+"}`;this.pattern=new RegExp(t,"gu")}pre_tokenize_text(e,t){return e.match(this.pattern)||[]}}class PostProcessor extends Callable{constructor(e){super(),this.config=e}static fromConfig(e){if(e===null)return null;switch(e.type){case"TemplateProcessing":return new TemplateProcessing(e);case"ByteLevel":return new ByteLevelPostProcessor(e);case"RobertaProcessing":return new RobertaProcessing(e);case"BertProcessing":return new BertProcessing(e);default:throw new Error(`Unknown PostProcessor type: ${e.type}`)}}post_process(e,...t){throw Error("post_process should be implemented in subclass.")}_call(e,...t){return this.post_process(e,...t)}}class BertProcessing extends PostProcessor{constructor(e){super(e),this.cls=e.cls[0],this.sep=e.sep[0]}post_process(e,t=null,{add_special_tokens:r=!0}={}){r&&(e=mergeArrays([this.cls],e,[this.sep]));let o=new Array(e.length).fill(0);if(t!==null){const c=r&&this instanceof RobertaProcessing?[this.sep]:[],l=r?[this.sep]:[];e=mergeArrays(e,c,t,l),o=mergeArrays(o,new Array(t.length+c.length+l.length).fill(1))}return{tokens:e,token_type_ids:o}}}class RobertaProcessing extends BertProcessing{}class TemplateProcessing extends PostProcessor{constructor(e){super(e),this.single=e.single,this.pair=e.pair}post_process(e,t=null,{add_special_tokens:r=!0}={}){const o=t===null?this.single:this.pair;let c=[],l=[];for(const h of o)"SpecialToken"in h?r&&(c.push(h.SpecialToken.id),l.push(h.SpecialToken.type_id)):"Sequence"in h&&(h.Sequence.id==="A"?(c=mergeArrays(c,e),l=mergeArrays(l,new Array(e.length).fill(h.Sequence.type_id))):h.Sequence.id==="B"&&(c=mergeArrays(c,t),l=mergeArrays(l,new Array(t.length).fill(h.Sequence.type_id))));return{tokens:c,token_type_ids:l}}}class ByteLevelPostProcessor extends PostProcessor{post_process(e,t=null){return t&&(e=mergeArrays(e,t)),{tokens:e}}}class Decoder extends Callable{constructor(e){super(),this.config=e,this.added_tokens=[],this.end_of_word_suffix=null,this.trim_offsets=e.trim_offsets}static fromConfig(e){if(e===null)return null;switch(e.type){case"WordPiece":return new WordPieceDecoder(e);case"Metaspace":return new MetaspaceDecoder(e);case"ByteLevel":return new ByteLevelDecoder(e);case"Replace":return new ReplaceDecoder(e);case"ByteFallback":return new ByteFallback(e);case"Fuse":return new FuseDecoder(e);case"Strip":return new StripDecoder(e);case"Sequence":return new DecoderSequence(e);case"CTC":return new CTCDecoder(e);case"BPEDecoder":return new BPEDecoder(e);default:throw new Error(`Unknown Decoder type: ${e.type}`)}}_call(e){return this.decode(e)}decode(e){return this.decode_chain(e).join("")}decode_chain(e){throw Error("`decode_chain` should be implemented in subclass.")}}class ReplaceDecoder extends Decoder{decode_chain(e){const t=createPattern(this.config.pattern);return t===null?e:e.map(r=>r.replaceAll(t,this.config.content))}}class ByteFallback extends Decoder{constructor(e){super(e),this.text_decoder=new TextDecoder}decode_chain(e){const t=[];let r=[];for(const o of e){let c=null;if(o.length===6&&o.startsWith("<0x")&&o.endsWith(">")){const l=parseInt(o.slice(3,5),16);isNaN(l)||(c=l)}if(c!==null)r.push(c);else{if(r.length>0){const l=this.text_decoder.decode(Uint8Array.from(r));t.push(l),r=[]}t.push(o)}}if(r.length>0){const o=this.text_decoder.decode(Uint8Array.from(r));t.push(o),r=[]}return t}}class FuseDecoder extends Decoder{decode_chain(e){return[e.join("")]}}class StripDecoder extends Decoder{constructor(e){super(e),this.content=this.config.content,this.start=this.config.start,this.stop=this.config.stop}decode_chain(e){return e.map(t=>{let r=0;for(let c=0;c<this.start&&t[c]===this.content;++c){r=c+1;continue}let o=t.length;for(let c=0;c<this.stop;++c){const l=t.length-c-1;if(t[l]===this.content){o=l;continue}else break}return t.slice(r,o)})}}class WordPieceDecoder extends Decoder{constructor(e){super(e),this.cleanup=e.cleanup}decode_chain(e){return e.map((t,r)=>(r!==0&&(t.startsWith(this.config.prefix)?t=t.replace(this.config.prefix,""):t=" "+t),this.cleanup&&(t=clean_up_tokenization(t)),t))}}class ByteLevelDecoder extends Decoder{constructor(e){super(e),this.byte_decoder=UNICODE_TO_BYTES,this.text_decoder=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0}),this.end_of_word_suffix=null}convert_tokens_to_string(e){const t=e.join(""),r=new Uint8Array([...t].map(c=>this.byte_decoder[c]));return this.text_decoder.decode(r)}decode_chain(e){const t=[];let r=[];for(const o of e)this.added_tokens.find(c=>c.content===o)!==void 0?(r.length>0&&(t.push(this.convert_tokens_to_string(r)),r=[]),t.push(o)):r.push(o);return r.length>0&&t.push(this.convert_tokens_to_string(r)),t}}class CTCDecoder extends Decoder{constructor(e){super(e),this.pad_token=this.config.pad_token,this.word_delimiter_token=this.config.word_delimiter_token,this.cleanup=this.config.cleanup}convert_tokens_to_string(e){if(e.length===0)return"";const t=[e[0]];for(let c=1;c<e.length;++c)e[c]!==t.at(-1)&&t.push(e[c]);let o=t.filter(c=>c!==this.pad_token).join("");return this.cleanup&&(o=clean_up_tokenization(o).replaceAll(this.word_delimiter_token," ").trim()),o}decode_chain(e){return[this.convert_tokens_to_string(e)]}}class DecoderSequence extends Decoder{constructor(e){super(e),this.decoders=e.decoders.map(t=>Decoder.fromConfig(t))}decode_chain(e){return this.decoders.reduce((t,r)=>r.decode_chain(t),e)}}class BPEDecoder extends Decoder{constructor(e){super(e),this.suffix=this.config.suffix}decode_chain(e){return e.map((t,r)=>t.replaceAll(this.suffix,r===e.length-1?"":" "))}}class VitsDecoder extends Decoder{decode_chain(e){let t="";for(let r=1;r<e.length;r+=2)t+=e[r];return[t]}}class MetaspacePreTokenizer extends PreTokenizer{constructor(e){super(),this.addPrefixSpace=e.add_prefix_space,this.replacement=e.replacement,this.strRep=e.str_rep||this.replacement,this.prepend_scheme=e.prepend_scheme??"always"}pre_tokenize_text(e,{section_index:t=void 0}={}){let r=e.replaceAll(" ",this.strRep);return this.addPrefixSpace&&!r.startsWith(this.replacement)&&(this.prepend_scheme==="always"||this.prepend_scheme==="first"&&t===0)&&(r=this.strRep+r),[r]}}class MetaspaceDecoder extends Decoder{constructor(e){super(e),this.addPrefixSpace=e.add_prefix_space,this.replacement=e.replacement}decode_chain(e){const t=[];for(let r=0;r<e.length;++r){let o=e[r].replaceAll(this.replacement," ");this.addPrefixSpace&&r==0&&o.startsWith(" ")&&(o=o.substring(1)),t.push(o)}return t}}class Precompiled extends Normalizer{constructor(e){super(e),this.charsmap=e.precompiled_charsmap}normalize(e){return e=e.replace(/[\u0001-\u0008\u000B\u000E-\u001F\u007F\u008F\u009F]/gm,""),e=e.replace(/[\u0009\u000A\u000C\u000D\u1680\u200B\u200C\u200E\u200F\u2028\u2029\u2581\uFEFF\uFFFD]/gm," "),e.includes("～")?e=e.split("～").map(r=>r.normalize("NFKC")).join("～"):e=e.normalize("NFKC"),e}}class PreTokenizerSequence extends PreTokenizer{constructor(e){super(),this.tokenizers=e.pretokenizers.map(t=>PreTokenizer.fromConfig(t))}pre_tokenize_text(e,t){return this.tokenizers.reduce((r,o)=>o.pre_tokenize(r,t),[e])}}class WhitespaceSplit extends PreTokenizer{constructor(e){super()}pre_tokenize_text(e,t){return whitespace_split(e)}}class ReplacePreTokenizer extends PreTokenizer{constructor(e){super(),this.config=e,this.pattern=createPattern(this.config.pattern),this.content=this.config.content}pre_tokenize_text(e,t){return this.pattern===null?[e]:[e.replaceAll(this.pattern,this.config.content)]}}const SPECIAL_TOKEN_ATTRIBUTES=["bos_token","eos_token","unk_token","sep_token","pad_token","cls_token","mask_token"];function padHelper(s,e,t,r){for(const o of Object.keys(s)){const c=e-s[o].length,l=t(o),h=new Array(c).fill(l);s[o]=r==="right"?mergeArrays(s[o],h):mergeArrays(h,s[o])}}function truncateHelper(s,e){for(const t of Object.keys(s))s[t].length=e}class PreTrainedTokenizer extends Callable{return_token_type_ids=!1;_default_chat_template=`{% for message in messages %}{{'<|im_start|>' + message['role'] + '
' + message['content'] + '<|im_end|>' + '
'}}{% endfor %}{% if add_generation_prompt %}{{ '<|im_start|>assistant
' }}{% endif %}`;constructor(e,t){super(),this._tokenizer_config=t,this.normalizer=Normalizer.fromConfig(e.normalizer),this.pre_tokenizer=PreTokenizer.fromConfig(e.pre_tokenizer),this.model=TokenizerModel.fromConfig(e.model,t),this.post_processor=PostProcessor.fromConfig(e.post_processor),this.decoder=Decoder.fromConfig(e.decoder),this.special_tokens=[],this.all_special_ids=[],this.added_tokens=[];for(const r of e.added_tokens){const o=new AddedToken(r);this.added_tokens.push(o),this.model.tokens_to_ids.set(o.content,o.id),this.model.vocab[o.id]=o.content,o.special&&(this.special_tokens.push(o.content),this.all_special_ids.push(o.id))}this.additional_special_tokens=t.additional_special_tokens??[],this.special_tokens.push(...this.additional_special_tokens),this.special_tokens=[...new Set(this.special_tokens)],this.decoder&&(this.decoder.added_tokens=this.added_tokens,this.decoder.end_of_word_suffix=this.model.end_of_word_suffix),this.added_tokens_regex=this.added_tokens.length>0?new RegExp(this.added_tokens.map(r=>`${r.lstrip?"\\s*":""}(${escapeRegExp(r.content)})${r.rstrip?"\\s*":""}`).join("|")):null,this.mask_token=this.getToken("mask_token"),this.mask_token_id=this.model.tokens_to_ids.get(this.mask_token),this.pad_token=this.getToken("pad_token","eos_token"),this.pad_token_id=this.model.tokens_to_ids.get(this.pad_token),this.sep_token=this.getToken("sep_token"),this.sep_token_id=this.model.tokens_to_ids.get(this.sep_token),this.unk_token=this.getToken("unk_token"),this.unk_token_id=this.model.tokens_to_ids.get(this.unk_token),this.model_max_length=t.model_max_length,this.remove_space=t.remove_space,this.clean_up_tokenization_spaces=t.clean_up_tokenization_spaces??!0,this.do_lowercase_and_remove_accent=t.do_lowercase_and_remove_accent??!1,this.padding_side="right",this.legacy=!1,this.chat_template=t.chat_template??null,this._compiled_template_cache=new Map}getToken(...e){for(const t of e){const r=this._tokenizer_config[t];if(r)if(typeof r=="object"){if(r.__type==="AddedToken")return r.content;throw Error(`Unknown token: ${r}`)}else return r}return null}static async from_pretrained(e,{progress_callback:t=null,config:r=null,cache_dir:o=null,local_files_only:c=!1,revision:l="main",legacy:h=null}={}){const p=await loadTokenizer(e,{progress_callback:t,config:r,cache_dir:o,local_files_only:c,revision:l,legacy:h});return new this(...p)}_call(e,{text_pair:t=null,add_special_tokens:r=!0,padding:o=!1,truncation:c=null,max_length:l=null,return_tensor:h=!0}={}){const p=Array.isArray(e);let f;if(p){if(e.length===0)throw Error("text array must be non-empty");if(t!==null){if(Array.isArray(t)){if(e.length!==t.length)throw Error("text and text_pair must have the same length")}else throw Error("text_pair must also be an array");f=e.map((i,n)=>this._encode_plus(i,t[n],{add_special_tokens:r}))}else f=e.map(i=>this._encode_plus(i,null,{add_special_tokens:r}))}else{if(e===null)throw Error("text may not be null");if(Array.isArray(t))throw Error("When specifying `text_pair`, since `text` is a string, `text_pair` must also be a string (i.e., not an array).");f=[this._encode_plus(e,t,{add_special_tokens:r})]}if(l===null?o==="max_length"?l=this.model_max_length:l=max(f.map(i=>i.input_ids.length))[0]:c||console.warn("Truncation was not explicitly activated but `max_length` is provided a specific value, please use `truncation=true` to explicitly truncate examples to max length."),l=Math.min(l,this.model_max_length),o||c)for(let i=0;i<f.length;++i)f[i].input_ids.length!==l&&(f[i].input_ids.length>l?c&&truncateHelper(f[i],l):o&&padHelper(f[i],l,n=>n==="input_ids"?this.pad_token_id:0,this.padding_side));const d={};if(h){if(!(o&&c)&&f.some(n=>{for(const a of Object.keys(n))if(n[a].length!==f[0][a]?.length)return!0;return!1}))throw Error("Unable to create tensor, you should probably activate truncation and/or padding with 'padding=true' and 'truncation=true' to have batched tensors with the same length.");const i=[f.length,f[0].input_ids.length];for(const n of Object.keys(f[0]))d[n]=new Tensor("int64",BigInt64Array.from(f.flatMap(a=>a[n]).map(BigInt)),i)}else{for(const i of Object.keys(f[0]))d[i]=f.map(n=>n[i]);if(!p)for(const i of Object.keys(d))d[i]=d[i][0]}return d}_encode_text(e){return e===null?null:(this.added_tokens_regex?e.split(this.added_tokens_regex).filter(o=>o):[e]).map((o,c)=>{if(this.added_tokens.find(h=>h.content===o)!==void 0)return o;{if(this.remove_space===!0&&(o=o.trim().split(/\s+/).join(" ")),this.do_lowercase_and_remove_accent&&(o=lowercase_and_remove_accent(o)),this.normalizer!==null&&(o=this.normalizer(o)),o.length===0)return[];const h=this.pre_tokenizer!==null?this.pre_tokenizer(o,{section_index:c}):[o];return this.model(h)}}).flat()}_encode_plus(e,t=null,{add_special_tokens:r=!0}={}){const o=this._encode_text(e),c=this._encode_text(t),l=this.post_processor?this.post_processor(o,c,{add_special_tokens:r}):{tokens:mergeArrays(o??[],c??[])},h=this.model.convert_tokens_to_ids(l.tokens),p={input_ids:h,attention_mask:new Array(h.length).fill(1)};return this.return_token_type_ids&&l.token_type_ids&&(p.token_type_ids=l.token_type_ids),p}encode(e,t=null,{add_special_tokens:r=!0}={}){const{input_ids:o}=this._encode_plus(e,t,{add_special_tokens:r});return o}batch_decode(e,t={}){return e instanceof Tensor&&(e=e.tolist()),e.map(r=>this.decode(r,t))}decode(e,t={}){if(e instanceof Tensor&&(e=prepareTensorForDecode(e)),!Array.isArray(e)||e.length===0||!isIntegralNumber(e[0]))throw Error("token_ids must be a non-empty array of integers.");return this.decode_single(e,t)}decode_single(e,{skip_special_tokens:t=!1,clean_up_tokenization_spaces:r=null}){let o=this.model.convert_ids_to_tokens(e);t&&(o=o.filter(l=>!this.special_tokens.includes(l)));let c=this.decoder?this.decoder(o):o.join(" ");return this.decoder&&this.decoder.end_of_word_suffix&&(c=c.replaceAll(this.decoder.end_of_word_suffix," "),t&&(c=c.trim())),(r??this.clean_up_tokenization_spaces)&&(c=clean_up_tokenization(c)),c}get default_chat_template(){return this._warned_about_chat_template||(console.warn("No chat template is defined for this tokenizer - using a default chat template that implements the ChatML format. If the default is not appropriate for your model, please set `tokenizer.chat_template` to an appropriate template. See https://huggingface.co/docs/transformers/main/chat_templating for more information."),this._warned_about_chat_template=!0),this._default_chat_template}apply_chat_template(e,{chat_template:t=null,add_generation_prompt:r=!1,tokenize:o=!0,padding:c=!1,truncation:l=!1,max_length:h=null,return_tensor:p=!0}={}){t??=this.chat_template??this.default_chat_template;let f=this._compiled_template_cache.get(t);f===void 0&&(f=new Template(t),this._compiled_template_cache.set(t,f));const d=Object.create(null);for(const n of SPECIAL_TOKEN_ATTRIBUTES){const a=this.getToken(n);a&&(d[n]=a)}const i=f.render({messages:e,add_generation_prompt:r,...d});return o?this._call(i,{add_special_tokens:!1,padding:c,truncation:l,max_length:h,return_tensor:p}).input_ids:i}}class BertTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class AlbertTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class MobileBertTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class SqueezeBertTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class DebertaTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class DebertaV2Tokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class HerbertTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class ConvBertTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class RoFormerTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class DistilBertTokenizer extends PreTrainedTokenizer{}class CamembertTokenizer extends PreTrainedTokenizer{}class XLMTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0;constructor(e,t){super(e,t),console.warn('WARNING: `XLMTokenizer` is not yet supported by Hugging Face\'s "fast" tokenizers library. Therefore, you may experience slightly inaccurate results.')}}class ElectraTokenizer extends PreTrainedTokenizer{return_token_type_ids=!0}class T5Tokenizer extends PreTrainedTokenizer{}class GPT2Tokenizer extends PreTrainedTokenizer{_default_chat_template='{% for message in messages %}" "{{ message.content }}{{ eos_token }}" "{% endfor %}'}class BartTokenizer extends PreTrainedTokenizer{}class MBartTokenizer extends PreTrainedTokenizer{constructor(e,t){super(e,t),this.languageRegex=/^[a-z]{2}_[A-Z]{2}$/,this.language_codes=this.special_tokens.filter(r=>this.languageRegex.test(r)),this.lang_to_token=r=>r}_build_translation_inputs(e,t,r){return _build_translation_inputs(this,e,t,r)}}class MBart50Tokenizer extends MBartTokenizer{}class RobertaTokenizer extends PreTrainedTokenizer{}class BloomTokenizer extends GPT2Tokenizer{constructor(e,t){const r=".,!?…。，、।۔،",o=e.pre_tokenizer?.pretokenizers[0]?.pattern;o&&o.Regex===` ?[^(\\s|[${r}])]+`&&(o.Regex=` ?[^\\s${r}]+`),super(e,t)}}const SPIECE_UNDERLINE="▁";class LlamaTokenizer extends PreTrainedTokenizer{_default_chat_template=`{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% elif USE_DEFAULT_PROMPT == true and not '<<SYS>>' in messages[0]['content'] %}{% set loop_messages = messages %}{% set system_message = 'DEFAULT_SYSTEM_MESSAGE' %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if (message['role'] == 'user') != (loop.index0 % 2 == 0) %}{{ raise_exception('Conversation roles must alternate user/assistant/user/assistant/...') }}{% endif %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>
' + system_message + '
<</SYS>>

' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' %}{{ bos_token + '[INST] ' + content.strip() + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>
' + content.strip() + '
<</SYS>>

' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content.strip() + ' ' + eos_token }}{% endif %}{% endfor %}`;DEFAULT_SYSTEM_PROMPT=`You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.

If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.`;constructor(e,t){super(e,t),this.use_default_system_prompt=t.use_default_system_prompt??!1,this.legacy=t.legacy??!0,this.legacy||(this.normalizer=null,this.pre_tokenizer=new MetaspacePreTokenizer({replacement:SPIECE_UNDERLINE,add_prefix_space:!0,prepend_scheme:"first"}))}_encode_text(e){if(e===null)return null;if(this.legacy||e.length===0)return super._encode_text(e);let t=super._encode_text(SPIECE_UNDERLINE+e.replaceAll(SPIECE_UNDERLINE," "));return t.length>1&&t[0]===SPIECE_UNDERLINE&&this.special_tokens.includes(t[1])&&(t=t.slice(1)),t}get default_chat_template(){return super.default_chat_template.replaceAll("USE_DEFAULT_PROMPT",this.use_default_system_prompt?"true":"false").replaceAll("DEFAULT_SYSTEM_MESSAGE",this.DEFAULT_SYSTEM_PROMPT.replaceAll(`