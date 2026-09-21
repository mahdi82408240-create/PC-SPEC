
const CPU_DATA = [

/* =========================================================
   INTEL CORE ULTRA
========================================================= */

{id:"core-ultra-9-285k",name:"Core Ultra 9 285K",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-9-285k.png",cores:"24",threads:"24",frequency:"3.7 GHz",boost:"5.7 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"125W",cache:"36MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-9-285",name:"Core Ultra 9 285",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-9-285.png",cores:"24",threads:"24",frequency:"2.5 GHz",boost:"5.6 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"65W",cache:"36MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-7-265k",name:"Core Ultra 7 265K",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-7-265k.png",cores:"20",threads:"20",frequency:"3.9 GHz",boost:"5.5 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"125W",cache:"30MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-7-265kf",name:"Core Ultra 7 265KF",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-7-265kf.png",cores:"20",threads:"20",frequency:"3.9 GHz",boost:"5.5 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"125W",cache:"30MB",memorySupport:"DDR5",integratedGraphics:"None",generation:"Core Ultra 200"},
{id:"core-ultra-7-265",name:"Core Ultra 7 265",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-7-265.png",cores:"20",threads:"20",frequency:"2.4 GHz",boost:"5.3 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"65W",cache:"30MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-5-245k",name:"Core Ultra 5 245K",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-5-245k.png",cores:"14",threads:"14",frequency:"4.2 GHz",boost:"5.2 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"125W",cache:"24MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-5-245kf",name:"Core Ultra 5 245KF",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-5-245kf.png",cores:"14",threads:"14",frequency:"4.2 GHz",boost:"5.2 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"125W",cache:"24MB",memorySupport:"DDR5",integratedGraphics:"None",generation:"Core Ultra 200"},
{id:"core-ultra-5-235",name:"Core Ultra 5 235",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-5-235.png",cores:"14",threads:"14",frequency:"3.4 GHz",boost:"5.0 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"65W",cache:"24MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-5-225",name:"Core Ultra 5 225",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-5-225.png",cores:"10",threads:"10",frequency:"3.3 GHz",boost:"4.9 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"65W",cache:"20MB",memorySupport:"DDR5",integratedGraphics:"Intel Graphics",generation:"Core Ultra 200"},
{id:"core-ultra-5-225f",name:"Core Ultra 5 225F",type:"CPU",brand:"Intel",image:"images/cpu/core-ultra-5-225f.png",cores:"10",threads:"10",frequency:"3.3 GHz",boost:"4.9 GHz",architecture:"Arrow Lake",socket:"LGA1851",process:"Intel 3",tdp:"65W",cache:"20MB",memorySupport:"DDR5",integratedGraphics:"None",generation:"Core Ultra 200"},

/* =========================================================
   INTEL 14TH GEN
========================================================= */

{id:"i9-14900ks",name:"Core i9-14900KS",type:"CPU",brand:"Intel",image:"images/cpu/i9-14900ks.png",cores:"24",threads:"32",frequency:"3.2 GHz",boost:"6.2 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"150W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i9-14900k",name:"Core i9-14900K",type:"CPU",brand:"Intel",image:"images/cpu/i9-14900k.png",cores:"24",threads:"32",frequency:"3.2 GHz",boost:"6.0 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i9-14900kf",name:"Core i9-14900KF",type:"CPU",brand:"Intel",image:"images/cpu/i9-14900kf.png",cores:"24",threads:"32",frequency:"3.2 GHz",boost:"6.0 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"14th Gen"},
{id:"i9-14900",name:"Core i9-14900",type:"CPU",brand:"Intel",image:"images/cpu/i9-14900.png",cores:"24",threads:"32",frequency:"2.0 GHz",boost:"5.8 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i7-14700k",name:"Core i7-14700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-14700k.png",cores:"20",threads:"28",frequency:"3.4 GHz",boost:"5.6 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"33MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i7-14700kf",name:"Core i7-14700KF",type:"CPU",brand:"Intel",image:"images/cpu/i7-14700kf.png",cores:"20",threads:"28",frequency:"3.4 GHz",boost:"5.6 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"33MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"14th Gen"},
{id:"i7-14700",name:"Core i7-14700",type:"CPU",brand:"Intel",image:"images/cpu/i7-14700.png",cores:"20",threads:"28",frequency:"2.1 GHz",boost:"5.4 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"33MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i7-14700f",name:"Core i7-14700F",type:"CPU",brand:"Intel",image:"images/cpu/i7-14700f.png",cores:"20",threads:"28",frequency:"2.1 GHz",boost:"5.4 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"33MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"14th Gen"},
{id:"i5-14600k",name:"Core i5-14600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-14600k.png",cores:"14",threads:"20",frequency:"3.5 GHz",boost:"5.3 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"24MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i5-14600kf",name:"Core i5-14600KF",type:"CPU",brand:"Intel",image:"images/cpu/i5-14600kf.png",cores:"14",threads:"20",frequency:"3.5 GHz",boost:"5.3 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"24MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"14th Gen"},
{id:"i5-14500",name:"Core i5-14500",type:"CPU",brand:"Intel",image:"images/cpu/i5-14500.png",cores:"14",threads:"20",frequency:"2.6 GHz",boost:"5.0 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"24MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"14th Gen"},
{id:"i5-14400",name:"Core i5-14400",type:"CPU",brand:"Intel",image:"images/cpu/i5-14400.png",cores:"10",threads:"16",frequency:"2.5 GHz",boost:"4.7 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"20MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 730",generation:"14th Gen"},
{id:"i5-14400f",name:"Core i5-14400F",type:"CPU",brand:"Intel",image:"images/cpu/i5-14400f.png",cores:"10",threads:"16",frequency:"2.5 GHz",boost:"4.7 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"20MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"14th Gen"},
{id:"i3-14100",name:"Core i3-14100",type:"CPU",brand:"Intel",image:"images/cpu/i3-14100.png",cores:"4",threads:"8",frequency:"3.5 GHz",boost:"4.7 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"60W",cache:"12MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 730",generation:"14th Gen"},
{id:"i3-14100f",name:"Core i3-14100F",type:"CPU",brand:"Intel",image:"images/cpu/i3-14100f.png",cores:"4",threads:"8",frequency:"3.5 GHz",boost:"4.7 GHz",architecture:"Raptor Lake Refresh",socket:"LGA1700",process:"Intel 7",tdp:"58W",cache:"12MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"14th Gen"},

/* =========================================================
   INTEL 13TH GEN
========================================================= */

{id:"i9-13900ks",name:"Core i9-13900KS",type:"CPU",brand:"Intel",image:"images/cpu/i9-13900ks.png",cores:"24",threads:"32",frequency:"3.2 GHz",boost:"6.0 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"150W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"13th Gen"},
{id:"i9-13900k",name:"Core i9-13900K",type:"CPU",brand:"Intel",image:"images/cpu/i9-13900k.png",cores:"24",threads:"32",frequency:"3.0 GHz",boost:"5.8 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"13th Gen"},
{id:"i9-13900kf",name:"Core i9-13900KF",type:"CPU",brand:"Intel",image:"images/cpu/i9-13900kf.png",cores:"24",threads:"32",frequency:"3.0 GHz",boost:"5.8 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"36MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"13th Gen"},
{id:"i7-13700k",name:"Core i7-13700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-13700k.png",cores:"16",threads:"24",frequency:"3.4 GHz",boost:"5.4 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"30MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"13th Gen"},
{id:"i7-13700kf",name:"Core i7-13700KF",type:"CPU",brand:"Intel",image:"images/cpu/i7-13700kf.png",cores:"16",threads:"24",frequency:"3.4 GHz",boost:"5.4 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"30MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"13th Gen"},
{id:"i7-13700",name:"Core i7-13700",type:"CPU",brand:"Intel",image:"images/cpu/i7-13700.png",cores:"16",threads:"24",frequency:"2.1 GHz",boost:"5.2 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"30MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"13th Gen"},
{id:"i5-13600k",name:"Core i5-13600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-13600k.png",cores:"14",threads:"20",frequency:"3.5 GHz",boost:"5.1 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"24MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"13th Gen"},
{id:"i5-13600kf",name:"Core i5-13600KF",type:"CPU",brand:"Intel",image:"images/cpu/i5-13600kf.png",cores:"14",threads:"20",frequency:"3.5 GHz",boost:"5.1 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"24MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"13th Gen"},
{id:"i5-13500",name:"Core i5-13500",type:"CPU",brand:"Intel",image:"images/cpu/i5-13500.png",cores:"14",threads:"20",frequency:"2.5 GHz",boost:"4.8 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"24MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"13th Gen"},
{id:"i5-13400",name:"Core i5-13400",type:"CPU",brand:"Intel",image:"images/cpu/i5-13400.png",cores:"10",threads:"16",frequency:"2.5 GHz",boost:"4.6 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"20MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 730",generation:"13th Gen"},
{id:"i5-13400f",name:"Core i5-13400F",type:"CPU",brand:"Intel",image:"images/cpu/i5-13400f.png",cores:"10",threads:"16",frequency:"2.5 GHz",boost:"4.6 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"20MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"13th Gen"},
{id:"i3-13100",name:"Core i3-13100",type:"CPU",brand:"Intel",image:"images/cpu/i3-13100.png",cores:"4",threads:"8",frequency:"3.4 GHz",boost:"4.5 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"60W",cache:"12MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 730",generation:"13th Gen"},
{id:"i3-13100f",name:"Core i3-13100F",type:"CPU",brand:"Intel",image:"images/cpu/i3-13100f.png",cores:"4",threads:"8",frequency:"3.4 GHz",boost:"4.5 GHz",architecture:"Raptor Lake",socket:"LGA1700",process:"Intel 7",tdp:"58W",cache:"12MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"13th Gen"},

/* =========================================================
   INTEL 12TH GEN
========================================================= */

{id:"i9-12900ks",name:"Core i9-12900KS",type:"CPU",brand:"Intel",image:"images/cpu/i9-12900ks.png",cores:"16",threads:"24",frequency:"3.4 GHz",boost:"5.5 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"150W",cache:"30MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"12th Gen"},
{id:"i9-12900k",name:"Core i9-12900K",type:"CPU",brand:"Intel",image:"images/cpu/i9-12900k.png",cores:"16",threads:"24",frequency:"3.2 GHz",boost:"5.2 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"30MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"12th Gen"},
{id:"i9-12900kf",name:"Core i9-12900KF",type:"CPU",brand:"Intel",image:"images/cpu/i9-12900kf.png",cores:"16",threads:"24",frequency:"3.2 GHz",boost:"5.2 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"30MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"12th Gen"},
{id:"i7-12700k",name:"Core i7-12700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-12700k.png",cores:"12",threads:"20",frequency:"3.6 GHz",boost:"5.0 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"25MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"12th Gen"},
{id:"i7-12700kf",name:"Core i7-12700KF",type:"CPU",brand:"Intel",image:"images/cpu/i7-12700kf.png",cores:"12",threads:"20",frequency:"3.6 GHz",boost:"5.0 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"25MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"12th Gen"},
{id:"i7-12700",name:"Core i7-12700",type:"CPU",brand:"Intel",image:"images/cpu/i7-12700.png",cores:"12",threads:"20",frequency:"2.1 GHz",boost:"4.9 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"25MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"12th Gen"},
{id:"i5-12600k",name:"Core i5-12600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-12600k.png",cores:"10",threads:"16",frequency:"3.7 GHz",boost:"4.9 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"20MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"12th Gen"},
{id:"i5-12600kf",name:"Core i5-12600KF",type:"CPU",brand:"Intel",image:"images/cpu/i5-12600kf.png",cores:"10",threads:"16",frequency:"3.7 GHz",boost:"4.9 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"125W",cache:"20MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"12th Gen"},
{id:"i5-12500",name:"Core i5-12500",type:"CPU",brand:"Intel",image:"images/cpu/i5-12500.png",cores:"6",threads:"12",frequency:"3.0 GHz",boost:"4.6 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"18MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 770",generation:"12th Gen"},
{id:"i5-12400",name:"Core i5-12400",type:"CPU",brand:"Intel",image:"images/cpu/i5-12400.png",cores:"6",threads:"12",frequency:"2.5 GHz",boost:"4.4 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"18MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 730",generation:"12th Gen"},
{id:"i5-12400f",name:"Core i5-12400F",type:"CPU",brand:"Intel",image:"images/cpu/i5-12400f.png",cores:"6",threads:"12",frequency:"2.5 GHz",boost:"4.4 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"65W",cache:"18MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"12th Gen"},
{id:"i3-12100",name:"Core i3-12100",type:"CPU",brand:"Intel",image:"images/cpu/i3-12100.png",cores:"4",threads:"8",frequency:"3.3 GHz",boost:"4.3 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"60W",cache:"12MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 730",generation:"12th Gen"},
{id:"i3-12100f",name:"Core i3-12100F",type:"CPU",brand:"Intel",image:"images/cpu/i3-12100f.png",cores:"4",threads:"8",frequency:"3.3 GHz",boost:"4.3 GHz",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"58W",cache:"12MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"None",generation:"12th Gen"},

/* =========================================================
   INTEL 11TH / 10TH GEN
========================================================= */

{id:"i9-11900k",name:"Core i9-11900K",type:"CPU",brand:"Intel",image:"images/cpu/i9-11900k.png",cores:"8",threads:"16",frequency:"3.5 GHz",boost:"5.3 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"UHD 750",generation:"11th Gen"},
{id:"i9-11900kf",name:"Core i9-11900KF",type:"CPU",brand:"Intel",image:"images/cpu/i9-11900kf.png",cores:"8",threads:"16",frequency:"3.5 GHz",boost:"5.3 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"11th Gen"},
{id:"i7-11700k",name:"Core i7-11700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-11700k.png",cores:"8",threads:"16",frequency:"3.6 GHz",boost:"5.0 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"16MB",memorySupport:"DDR4",integratedGraphics:"UHD 750",generation:"11th Gen"},
{id:"i7-11700f",name:"Core i7-11700F",type:"CPU",brand:"Intel",image:"images/cpu/i7-11700f.png",cores:"8",threads:"16",frequency:"2.5 GHz",boost:"4.9 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"65W",cache:"16MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"11th Gen"},
{id:"i5-11600k",name:"Core i5-11600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-11600k.png",cores:"6",threads:"12",frequency:"3.9 GHz",boost:"4.9 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"12MB",memorySupport:"DDR4",integratedGraphics:"UHD 750",generation:"11th Gen"},
{id:"i5-11400f",name:"Core i5-11400F",type:"CPU",brand:"Intel",image:"images/cpu/i5-11400f.png",cores:"6",threads:"12",frequency:"2.6 GHz",boost:"4.4 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"65W",cache:"12MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"11th Gen"},
{id:"i9-10900k",name:"Core i9-10900K",type:"CPU",brand:"Intel",image:"images/cpu/i9-10900k.png",cores:"10",threads:"20",frequency:"3.7 GHz",boost:"5.3 GHz",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"10th Gen"},
{id:"i9-10900kf",name:"Core i9-10900KF",type:"CPU",brand:"Intel",image:"images/cpu/i9-10900kf.png",cores:"10",threads:"20",frequency:"3.7 GHz",boost:"5.3 GHz",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"10th Gen"},
{id:"i7-10700k",name:"Core i7-10700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-10700k.png",cores:"8",threads:"16",frequency:"3.8 GHz",boost:"5.1 GHz",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"16MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"10th Gen"},
{id:"i7-10700f",name:"Core i7-10700F",type:"CPU",brand:"Intel",image:"images/cpu/i7-10700f.png",cores:"8",threads:"16",frequency:"2.9 GHz",boost:"4.8 GHz",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"65W",cache:"16MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"10th Gen"},
{id:"i5-10600k",name:"Core i5-10600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-10600k.png",cores:"6",threads:"12",frequency:"4.1 GHz",boost:"4.8 GHz",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"125W",cache:"12MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"10th Gen"},
{id:"i5-10400f",name:"Core i5-10400F",type:"CPU",brand:"Intel",image:"images/cpu/i5-10400f.png",cores:"6",threads:"12",frequency:"2.9 GHz",boost:"4.3 GHz",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"65W",cache:"12MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"10th Gen"},

/* =========================================================
   INTEL 9TH / 8TH GEN
========================================================= */

{id:"i9-9900ks",name:"Core i9-9900KS",type:"CPU",brand:"Intel",image:"images/cpu/i9-9900ks.png",cores:"8",threads:"16",frequency:"4.0 GHz",boost:"5.0 GHz",architecture:"Coffee Lake Refresh",socket:"LGA1151",process:"14nm",tdp:"127W",cache:"16MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"9th Gen"},
{id:"i9-9900k",name:"Core i9-9900K",type:"CPU",brand:"Intel",image:"images/cpu/i9-9900k.png",cores:"8",threads:"16",frequency:"3.6 GHz",boost:"5.0 GHz",architecture:"Coffee Lake Refresh",socket:"LGA1151",process:"14nm",tdp:"95W",cache:"16MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"9th Gen"},
{id:"i7-9700k",name:"Core i7-9700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-9700k.png",cores:"8",threads:"8",frequency:"3.6 GHz",boost:"4.9 GHz",architecture:"Coffee Lake Refresh",socket:"LGA1151",process:"14nm",tdp:"95W",cache:"12MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"9th Gen"},
{id:"i5-9600k",name:"Core i5-9600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-9600k.png",cores:"6",threads:"6",frequency:"3.7 GHz",boost:"4.6 GHz",architecture:"Coffee Lake Refresh",socket:"LGA1151",process:"14nm",tdp:"95W",cache:"9MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"9th Gen"},
{id:"i5-9400f",name:"Core i5-9400F",type:"CPU",brand:"Intel",image:"images/cpu/i5-9400f.png",cores:"6",threads:"6",frequency:"2.9 GHz",boost:"4.1 GHz",architecture:"Coffee Lake Refresh",socket:"LGA1151",process:"14nm",tdp:"65W",cache:"9MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"9th Gen"},
{id:"i7-8700k",name:"Core i7-8700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-8700k.png",cores:"6",threads:"12",frequency:"3.7 GHz",boost:"4.7 GHz",architecture:"Coffee Lake",socket:"LGA1151",process:"14nm",tdp:"95W",cache:"12MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"8th Gen"},
{id:"i5-8600k",name:"Core i5-8600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-8600k.png",cores:"6",threads:"6",frequency:"3.6 GHz",boost:"4.3 GHz",architecture:"Coffee Lake",socket:"LGA1151",process:"14nm",tdp:"95W",cache:"9MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"8th Gen"},
{id:"i5-8400",name:"Core i5-8400",type:"CPU",brand:"Intel",image:"images/cpu/i5-8400.png",cores:"6",threads:"6",frequency:"2.8 GHz",boost:"4.0 GHz",architecture:"Coffee Lake",socket:"LGA1151",process:"14nm",tdp:"65W",cache:"9MB",memorySupport:"DDR4",integratedGraphics:"UHD 630",generation:"8th Gen"},

/* =========================================================
   INTEL 7TH / 6TH / 4TH GEN
========================================================= */

{id:"i7-7700k",name:"Core i7-7700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-7700k.png",cores:"4",threads:"8",frequency:"4.2 GHz",boost:"4.5 GHz",architecture:"Kaby Lake",socket:"LGA1151",process:"14nm",tdp:"91W",cache:"8MB",memorySupport:"DDR4",integratedGraphics:"HD 630",generation:"7th Gen"},
{id:"i7-7700",name:"Core i7-7700",type:"CPU",brand:"Intel",image:"images/cpu/i7-7700.png",cores:"4",threads:"8",frequency:"3.6 GHz",boost:"4.2 GHz",architecture:"Kaby Lake",socket:"LGA1151",process:"14nm",tdp:"65W",cache:"8MB",memorySupport:"DDR4",integratedGraphics:"HD 630",generation:"7th Gen"},
{id:"i5-7600k",name:"Core i5-7600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-7600k.png",cores:"4",threads:"4",frequency:"3.8 GHz",boost:"4.2 GHz",architecture:"Kaby Lake",socket:"LGA1151",process:"14nm",tdp:"91W",cache:"6MB",memorySupport:"DDR4",integratedGraphics:"HD 630",generation:"7th Gen"},
{id:"i5-7400",name:"Core i5-7400",type:"CPU",brand:"Intel",image:"images/cpu/i5-7400.png",cores:"4",threads:"4",frequency:"3.0 GHz",boost:"3.5 GHz",architecture:"Kaby Lake",socket:"LGA1151",process:"14nm",tdp:"65W",cache:"6MB",memorySupport:"DDR4",integratedGraphics:"HD 630",generation:"7th Gen"},
{id:"i7-6700k",name:"Core i7-6700K",type:"CPU",brand:"Intel",image:"images/cpu/i7-6700k.png",cores:"4",threads:"8",frequency:"4.0 GHz",boost:"4.2 GHz",architecture:"Skylake",socket:"LGA1151",process:"14nm",tdp:"91W",cache:"8MB",memorySupport:"DDR4",integratedGraphics:"HD 530",generation:"6th Gen"},
{id:"i5-6600k",name:"Core i5-6600K",type:"CPU",brand:"Intel",image:"images/cpu/i5-6600k.png",cores:"4",threads:"4",frequency:"3.5 GHz",boost:"3.9 GHz",architecture:"Skylake",socket:"LGA1151",process:"14nm",tdp:"91W",cache:"6MB",memorySupport:"DDR4",integratedGraphics:"HD 530",generation:"6th Gen"},
{id:"i7-4790k",name:"Core i7-4790K",type:"CPU",brand:"Intel",image:"images/cpu/i7-4790k.png",cores:"4",threads:"8",frequency:"4.0 GHz",boost:"4.4 GHz",architecture:"Haswell Refresh",socket:"LGA1150",process:"22nm",tdp:"88W",cache:"8MB",memorySupport:"DDR3",integratedGraphics:"HD 4600",generation:"4th Gen"},
{id:"i7-4790",name:"Core i7-4790",type:"CPU",brand:"Intel",image:"images/cpu/i7-4790.png",cores:"4",threads:"8",frequency:"3.6 GHz",boost:"4.0 GHz",architecture:"Haswell Refresh",socket:"LGA1150",process:"22nm",tdp:"84W",cache:"8MB",memorySupport:"DDR3",integratedGraphics:"HD 4600",generation:"4th Gen"},
{id:"i5-4690k",name:"Core i5-4690K",type:"CPU",brand:"Intel",image:"images/cpu/i5-4690k.png",cores:"4",threads:"4",frequency:"3.5 GHz",boost:"3.9 GHz",architecture:"Haswell Refresh",socket:"LGA1150",process:"22nm",tdp:"88W",cache:"6MB",memorySupport:"DDR3",integratedGraphics:"HD 4600",generation:"4th Gen"},
{id:"i5-4570",name:"Core i5-4570",type:"CPU",brand:"Intel",image:"images/cpu/i5-4570.png",cores:"4",threads:"4",frequency:"3.2 GHz",boost:"3.6 GHz",architecture:"Haswell",socket:"LGA1150",process:"22nm",tdp:"84W",cache:"6MB",memorySupport:"DDR3",integratedGraphics:"HD 4600",generation:"4th Gen"},

/* =========================================================
   AMD RYZEN 9000 / X3D
========================================================= */

{id:"ryzen-9-9950x3d",name:"Ryzen 9 9950X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-9950x3d.png",cores:"16",threads:"32",frequency:"4.3 GHz",boost:"5.7 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"170W",cache:"144MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000 X3D"},
{id:"ryzen-9-9950x",name:"Ryzen 9 9950X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-9950x.png",cores:"16",threads:"32",frequency:"4.3 GHz",boost:"5.7 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"170W",cache:"80MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000"},
{id:"ryzen-9-9900x3d",name:"Ryzen 9 9900X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-9900x3d.png",cores:"12",threads:"24",frequency:"4.4 GHz",boost:"5.5 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"120W",cache:"140MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000 X3D"},
{id:"ryzen-9-9900x",name:"Ryzen 9 9900X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-9900x.png",cores:"12",threads:"24",frequency:"4.4 GHz",boost:"5.6 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"120W",cache:"76MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000"},
{id:"ryzen-7-9800x3d",name:"Ryzen 7 9800X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-9800x3d.png",cores:"8",threads:"16",frequency:"4.7 GHz",boost:"5.2 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"120W",cache:"104MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000 X3D"},
{id:"ryzen-7-9700x",name:"Ryzen 7 9700X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-9700x.png",cores:"8",threads:"16",frequency:"3.8 GHz",boost:"5.5 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"65W",cache:"40MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000"},
{id:"ryzen-5-9600x",name:"Ryzen 5 9600X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-9600x.png",cores:"6",threads:"12",frequency:"3.9 GHz",boost:"5.4 GHz",architecture:"Zen 5",socket:"AM5",process:"TSMC 4nm",tdp:"65W",cache:"38MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 9000"},

/* =========================================================
   AMD RYZEN 7000
========================================================= */

{id:"ryzen-9-7950x3d",name:"Ryzen 9 7950X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-7950x3d.png",cores:"16",threads:"32",frequency:"4.2 GHz",boost:"5.7 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"120W",cache:"144MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000 X3D"},
{id:"ryzen-9-7950x",name:"Ryzen 9 7950X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-7950x.png",cores:"16",threads:"32",frequency:"4.5 GHz",boost:"5.7 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"170W",cache:"80MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000"},
{id:"ryzen-9-7900x3d",name:"Ryzen 9 7900X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-7900x3d.png",cores:"12",threads:"24",frequency:"4.4 GHz",boost:"5.6 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"120W",cache:"140MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000 X3D"},
{id:"ryzen-9-7900x",name:"Ryzen 9 7900X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-7900x.png",cores:"12",threads:"24",frequency:"4.7 GHz",boost:"5.6 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"170W",cache:"76MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000"},
{id:"ryzen-7-7800x3d",name:"Ryzen 7 7800X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-7800x3d.png",cores:"8",threads:"16",frequency:"4.2 GHz",boost:"5.0 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"120W",cache:"104MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000 X3D"},
{id:"ryzen-7-7700x",name:"Ryzen 7 7700X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-7700x.png",cores:"8",threads:"16",frequency:"4.5 GHz",boost:"5.4 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"105W",cache:"40MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000"},
{id:"ryzen-7-7700",name:"Ryzen 7 7700",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-7700.png",cores:"8",threads:"16",frequency:"3.8 GHz",boost:"5.3 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"65W",cache:"40MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000"},
{id:"ryzen-5-7600x",name:"Ryzen 5 7600X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-7600x.png",cores:"6",threads:"12",frequency:"4.7 GHz",boost:"5.3 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"105W",cache:"38MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000"},
{id:"ryzen-5-7600",name:"Ryzen 5 7600",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-7600.png",cores:"6",threads:"12",frequency:"3.8 GHz",boost:"5.1 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"65W",cache:"38MB",memorySupport:"DDR5",integratedGraphics:"Radeon Graphics",generation:"Ryzen 7000"},
{id:"ryzen-5-7500f",name:"Ryzen 5 7500F",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-7500f.png",cores:"6",threads:"12",frequency:"3.7 GHz",boost:"5.0 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 5nm",tdp:"65W",cache:"38MB",memorySupport:"DDR5",integratedGraphics:"None",generation:"Ryzen 7000"},

/* =========================================================
   AMD RYZEN 5000
========================================================= */

{id:"ryzen-9-5950x",name:"Ryzen 9 5950X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-5950x.png",cores:"16",threads:"32",frequency:"3.4 GHz",boost:"4.9 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"72MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-9-5900x",name:"Ryzen 9 5900X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-5900x.png",cores:"12",threads:"24",frequency:"3.7 GHz",boost:"4.8 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"70MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-7-5800x3d",name:"Ryzen 7 5800X3D",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-5800x3d.png",cores:"8",threads:"16",frequency:"3.4 GHz",boost:"4.5 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"100MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000 X3D"},
{id:"ryzen-7-5800x",name:"Ryzen 7 5800X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-5800x.png",cores:"8",threads:"16",frequency:"3.8 GHz",boost:"4.7 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"36MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-7-5700x",name:"Ryzen 7 5700X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-5700x.png",cores:"8",threads:"16",frequency:"3.4 GHz",boost:"4.6 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"36MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-5-5600x",name:"Ryzen 5 5600X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-5600x.png",cores:"6",threads:"12",frequency:"3.7 GHz",boost:"4.6 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"35MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-5-5600",name:"Ryzen 5 5600",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-5600.png",cores:"6",threads:"12",frequency:"3.5 GHz",boost:"4.4 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"35MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-5-5500",name:"Ryzen 5 5500",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-5500.png",cores:"6",threads:"12",frequency:"3.6 GHz",boost:"4.2 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"19MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 5000"},
{id:"ryzen-5-5700g",name:"Ryzen 7 5700G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-5700g.png",cores:"8",threads:"16",frequency:"3.8 GHz",boost:"4.6 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"Radeon Vega 8",generation:"Ryzen 5000"},
{id:"ryzen-5-5600g",name:"Ryzen 5 5600G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-5600g.png",cores:"6",threads:"12",frequency:"3.9 GHz",boost:"4.4 GHz",architecture:"Zen 3",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"19MB",memorySupport:"DDR4",integratedGraphics:"Radeon Vega 7",generation:"Ryzen 5000"},

/* =========================================================
   AMD RYZEN 3000
========================================================= */

{id:"ryzen-9-3950x",name:"Ryzen 9 3950X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-3950x.png",cores:"16",threads:"32",frequency:"3.5 GHz",boost:"4.7 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"72MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-9-3900x",name:"Ryzen 9 3900X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-9-3900x.png",cores:"12",threads:"24",frequency:"3.8 GHz",boost:"4.6 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"70MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-7-3800x",name:"Ryzen 7 3800X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-3800x.png",cores:"8",threads:"16",frequency:"3.9 GHz",boost:"4.5 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"105W",cache:"36MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-7-3700x",name:"Ryzen 7 3700X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-3700x.png",cores:"8",threads:"16",frequency:"3.6 GHz",boost:"4.4 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"36MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-5-3600x",name:"Ryzen 5 3600X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-3600x.png",cores:"6",threads:"12",frequency:"3.8 GHz",boost:"4.4 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"95W",cache:"35MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-5-3600",name:"Ryzen 5 3600",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-3600.png",cores:"6",threads:"12",frequency:"3.6 GHz",boost:"4.2 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"35MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-5-3500x",name:"Ryzen 5 3500X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-3500x.png",cores:"6",threads:"6",frequency:"3.6 GHz",boost:"4.1 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"35MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},

/* =========================================================
   AMD RYZEN 2000
========================================================= */

{id:"ryzen-7-2700x",name:"Ryzen 7 2700X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-2700x.png",cores:"8",threads:"16",frequency:"3.7 GHz",boost:"4.3 GHz",architecture:"Zen+",socket:"AM4",process:"12nm",tdp:"105W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 2000"},
{id:"ryzen-7-2700",name:"Ryzen 7 2700",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-2700.png",cores:"8",threads:"16",frequency:"3.2 GHz",boost:"4.1 GHz",architecture:"Zen+",socket:"AM4",process:"12nm",tdp:"65W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 2000"},
{id:"ryzen-5-2600x",name:"Ryzen 5 2600X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-2600x.png",cores:"6",threads:"12",frequency:"3.6 GHz",boost:"4.2 GHz",architecture:"Zen+",socket:"AM4",process:"12nm",tdp:"95W",cache:"19MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 2000"},
{id:"ryzen-5-2600",name:"Ryzen 5 2600",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-2600.png",cores:"6",threads:"12",frequency:"3.4 GHz",boost:"3.9 GHz",architecture:"Zen+",socket:"AM4",process:"12nm",tdp:"65W",cache:"19MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 2000"},
{id:"ryzen-3-2200g",name:"Ryzen 3 2200G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-3-2200g.png",cores:"4",threads:"4",frequency:"3.5 GHz",boost:"3.7 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"65W",cache:"6MB",memorySupport:"DDR4",integratedGraphics:"Radeon Vega 8",generation:"Ryzen 2000"},

/* =========================================================
   AMD RYZEN 1000
========================================================= */

{id:"ryzen-7-1800x",name:"Ryzen 7 1800X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-1800x.png",cores:"8",threads:"16",frequency:"3.6 GHz",boost:"4.0 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"95W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 1000"},
{id:"ryzen-7-1700x",name:"Ryzen 7 1700X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-1700x.png",cores:"8",threads:"16",frequency:"3.4 GHz",boost:"3.8 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"95W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 1000"},
{id:"ryzen-7-1700",name:"Ryzen 7 1700",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-1700.png",cores:"8",threads:"16",frequency:"3.0 GHz",boost:"3.7 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"65W",cache:"20MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 1000"},
{id:"ryzen-5-1600x",name:"Ryzen 5 1600X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-1600x.png",cores:"6",threads:"12",frequency:"3.6 GHz",boost:"4.0 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"95W",cache:"19MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 1000"},
{id:"ryzen-5-1600",name:"Ryzen 5 1600",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-1600.png",cores:"6",threads:"12",frequency:"3.2 GHz",boost:"3.6 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"65W",cache:"19MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 1000"},
{id:"ryzen-5-1500x",name:"Ryzen 5 1500X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-1500x.png",cores:"4",threads:"8",frequency:"3.5 GHz",boost:"3.7 GHz",architecture:"Zen",socket:"AM4",process:"14nm",tdp:"65W",cache:"18MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 1000"},

/* =========================================================
   AMD THREADRIPPER
========================================================= */

{id:"threadripper-3990x",name:"Ryzen Threadripper 3990X",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-3990x.png",cores:"64",threads:"128",frequency:"2.9 GHz",boost:"4.3 GHz",architecture:"Zen 2",socket:"sTRX4",process:"TSMC 7nm",tdp:"280W",cache:"288MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 3000"},
{id:"threadripper-3970x",name:"Ryzen Threadripper 3970X",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-3970x.png",cores:"32",threads:"64",frequency:"3.7 GHz",boost:"4.5 GHz",architecture:"Zen 2",socket:"sTRX4",process:"TSMC 7nm",tdp:"280W",cache:"144MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 3000"},
{id:"threadripper-3960x",name:"Ryzen Threadripper 3960X",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-3960x.png",cores:"24",threads:"48",frequency:"3.8 GHz",boost:"4.5 GHz",architecture:"Zen 2",socket:"sTRX4",process:"TSMC 7nm",tdp:"280W",cache:"140MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 3000"},
{id:"threadripper-2990wx",name:"Ryzen Threadripper 2990WX",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-2990wx.png",cores:"32",threads:"64",frequency:"3.0 GHz",boost:"4.2 GHz",architecture:"Zen+",socket:"TR4",process:"12nm",tdp:"250W",cache:"80MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 2000"},
{id:"threadripper-2970wx",name:"Ryzen Threadripper 2970WX",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-2970wx.png",cores:"24",threads:"48",frequency:"3.0 GHz",boost:"4.2 GHz",architecture:"Zen+",socket:"TR4",process:"12nm",tdp:"250W",cache:"76MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 2000"},
{id:"threadripper-1950x",name:"Ryzen Threadripper 1950X",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-1950x.png",cores:"16",threads:"32",frequency:"3.4 GHz",boost:"4.0 GHz",architecture:"Zen",socket:"TR4",process:"14nm",tdp:"180W",cache:"40MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 1000"},
{id:"threadripper-1920x",name:"Ryzen Threadripper 1920X",type:"CPU",brand:"AMD",image:"images/cpu/threadripper-1920x.png",cores:"12",threads:"24",frequency:"3.5 GHz",boost:"4.0 GHz",architecture:"Zen",socket:"TR4",process:"14nm",tdp:"180W",cache:"38MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Threadripper 1000"},

/* =========================================================
   AMD FX / PHENOM
========================================================= */

{id:"fx-9590",name:"FX-9590",type:"CPU",brand:"AMD",image:"images/cpu/fx-9590.png",cores:"8",threads:"8",frequency:"4.7 GHz",boost:"5.0 GHz",architecture:"Piledriver",socket:"AM3+",process:"32nm",tdp:"220W",cache:"16MB",memorySupport:"DDR3",integratedGraphics:"None",generation:"FX"},
{id:"fx-9370",name:"FX-9370",type:"CPU",brand:"AMD",image:"images/cpu/fx-9370.png",cores:"8",threads:"8",frequency:"4.4 GHz",boost:"4.7 GHz",architecture:"Piledriver",socket:"AM3+",process:"32nm",tdp:"220W",cache:"16MB",memorySupport:"DDR3",integratedGraphics:"None",generation:"FX"},
{id:"fx-8350",name:"FX-8350",type:"CPU",brand:"AMD",image:"images/cpu/fx-8350.png",cores:"8",threads:"8",frequency:"4.0 GHz",boost:"4.2 GHz",architecture:"Piledriver",socket:"AM3+",process:"32nm",tdp:"125W",cache:"16MB",memorySupport:"DDR3",integratedGraphics:"None",generation:"FX"},
{id:"fx-8320",name:"FX-8320",type:"CPU",brand:"AMD",image:"images/cpu/fx-8320.png",cores:"8",threads:"8",frequency:"3.5 GHz",boost:"4.0 GHz",architecture:"Piledriver",socket:"AM3+",process:"32nm",tdp:"125W",cache:"16MB",memorySupport:"DDR3",integratedGraphics:"None",generation:"FX"},
{id:"fx-6300",name:"FX-6300",type:"CPU",brand:"AMD",image:"images/cpu/fx-6300.png",cores:"6",threads:"6",frequency:"3.5 GHz",boost:"4.1 GHz",architecture:"Piledriver",socket:"AM3+",process:"32nm",tdp:"95W",cache:"14MB",memorySupport:"DDR3",integratedGraphics:"None",generation:"FX"},
{id:"phenom-ii-x6-1100t",name:"Phenom II X6 1100T",type:"CPU",brand:"AMD",image:"images/cpu/phenom-ii-x6-1100t.png",cores:"6",threads:"6",frequency:"3.3 GHz",boost:"3.7 GHz",architecture:"Thuban",socket:"AM3",process:"45nm",tdp:"125W",cache:"9MB",memorySupport:"DDR3",integratedGraphics:"None",generation:"Phenom II"},

/* =========================================================
   INTEL XEON
========================================================= */

{id:"xeon-w9-3495x",name:"Xeon w9-3495X",type:"CPU",brand:"Intel",image:"images/cpu/xeon-w9-3495x.png",cores:"56",threads:"112",frequency:"1.9 GHz",boost:"4.8 GHz",architecture:"Sapphire Rapids",socket:"LGA4677",process:"Intel 7",tdp:"350W",cache:"105MB",memorySupport:"DDR5 ECC",integratedGraphics:"None",generation:"Xeon W"},
{id:"xeon-w7-2495x",name:"Xeon w7-2495X",type:"CPU",brand:"Intel",image:"images/cpu/xeon-w7-2495x.png",cores:"24",threads:"48",frequency:"2.5 GHz",boost:"4.8 GHz",architecture:"Sapphire Rapids",socket:"LGA4677",process:"Intel 7",tdp:"225W",cache:"45MB",memorySupport:"DDR5 ECC",integratedGraphics:"None",generation:"Xeon W"},
{id:"xeon-w5-2465x",name:"Xeon w5-2465X",type:"CPU",brand:"Intel",image:"images/cpu/xeon-w5-2465x.png",cores:"16",threads:"32",frequency:"3.1 GHz",boost:"4.7 GHz",architecture:"Sapphire Rapids",socket:"LGA4677",process:"Intel 7",tdp:"200W",cache:"33.75MB",memorySupport:"DDR5 ECC",integratedGraphics:"None",generation:"Xeon W"},
{id:"xeon-w5-2455x",name:"Xeon w5-2455X",type:"CPU",brand:"Intel",image:"images/cpu/xeon-w5-2455x.png",cores:"12",threads:"24",frequency:"3.2 GHz",boost:"4.6 GHz",architecture:"Sapphire Rapids",socket:"LGA4677",process:"Intel 7",tdp:"200W",cache:"30MB",memorySupport:"DDR5 ECC",integratedGraphics:"None",generation:"Xeon W"},
{id:"xeon-w3-2423",name:"Xeon w3-2423",type:"CPU",brand:"Intel",image:"images/cpu/xeon-w3-2423.png",cores:"6",threads:"12",frequency:"2.1 GHz",boost:"4.2 GHz",architecture:"Sapphire Rapids",socket:"LGA4677",process:"Intel 7",tdp:"120W",cache:"15MB",memorySupport:"DDR5 ECC",integratedGraphics:"None",generation:"Xeon W"},
{id:"xeon-e-2388g",name:"Xeon E-2388G",type:"CPU",brand:"Intel",image:"images/cpu/xeon-e-2388g.png",cores:"8",threads:"16",frequency:"3.2 GHz",boost:"5.1 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"95W",cache:"16MB",memorySupport:"DDR4 ECC",integratedGraphics:"UHD P750",generation:"Xeon E"},
{id:"xeon-e-2378",name:"Xeon E-2378",type:"CPU",brand:"Intel",image:"images/cpu/xeon-e-2378.png",cores:"8",threads:"16",frequency:"2.6 GHz",boost:"4.8 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"65W",cache:"16MB",memorySupport:"DDR4 ECC",integratedGraphics:"UHD P750",generation:"Xeon E"},
{id:"xeon-e-2336",name:"Xeon E-2336",type:"CPU",brand:"Intel",image:"images/cpu/xeon-e-2336.png",cores:"6",threads:"12",frequency:"2.9 GHz",boost:"4.8 GHz",architecture:"Rocket Lake",socket:"LGA1200",process:"14nm",tdp:"65W",cache:"12MB",memorySupport:"DDR4 ECC",integratedGraphics:"UHD P750",generation:"Xeon E"},

/* =========================================================
   EXTRA INTEL PENTIUM / CELERON
========================================================= */

{id:"pentium-g7400",name:"Pentium Gold G7400",type:"CPU",brand:"Intel",image:"images/cpu/pentium-g7400.png",cores:"2",threads:"4",frequency:"3.7 GHz",boost:"N/A",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"46W",cache:"6MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 710",generation:"Pentium Gold"},
{id:"pentium-g6900",name:"Pentium Gold G6900",type:"CPU",brand:"Intel",image:"images/cpu/pentium-g6900.png",cores:"2",threads:"2",frequency:"3.4 GHz",boost:"N/A",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"46W",cache:"4MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 710",generation:"Pentium Gold"},
{id:"celeron-g6900",name:"Celeron G6900",type:"CPU",brand:"Intel",image:"images/cpu/celeron-g6900.png",cores:"2",threads:"2",frequency:"3.4 GHz",boost:"N/A",architecture:"Alder Lake",socket:"LGA1700",process:"Intel 7",tdp:"46W",cache:"4MB",memorySupport:"DDR4 / DDR5",integratedGraphics:"UHD 710",generation:"Celeron"},
{id:"pentium-g6400",name:"Pentium Gold G6400",type:"CPU",brand:"Intel",image:"images/cpu/pentium-g6400.png",cores:"2",threads:"4",frequency:"4.0 GHz",boost:"N/A",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"58W",cache:"4MB",memorySupport:"DDR4",integratedGraphics:"UHD 610",generation:"Pentium Gold"},
{id:"celeron-g5905",name:"Celeron G5905",type:"CPU",brand:"Intel",image:"images/cpu/celeron-g5905.png",cores:"2",threads:"2",frequency:"3.5 GHz",boost:"N/A",architecture:"Comet Lake",socket:"LGA1200",process:"14nm",tdp:"58W",cache:"4MB",memorySupport:"DDR4",integratedGraphics:"UHD 610",generation:"Celeron"},

/* =========================================================
   ADDITIONAL AMD APU
========================================================= */

{id:"ryzen-5-8600g",name:"Ryzen 5 8600G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-8600g.png",cores:"6",threads:"12",frequency:"4.3 GHz",boost:"5.0 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 4nm",tdp:"65W",cache:"22MB",memorySupport:"DDR5",integratedGraphics:"Radeon 760M",generation:"Ryzen 8000G"},
{id:"ryzen-7-8700g",name:"Ryzen 7 8700G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-7-8700g.png",cores:"8",threads:"16",frequency:"4.2 GHz",boost:"5.1 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 4nm",tdp:"65W",cache:"24MB",memorySupport:"DDR5",integratedGraphics:"Radeon 780M",generation:"Ryzen 8000G"},
{id:"ryzen-5-8500g",name:"Ryzen 5 8500G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-8500g.png",cores:"6",threads:"12",frequency:"3.5 GHz",boost:"5.0 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 4nm",tdp:"65W",cache:"22MB",memorySupport:"DDR5",integratedGraphics:"Radeon 740M",generation:"Ryzen 8000G"},
{id:"ryzen-3-8300g",name:"Ryzen 3 8300G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-3-8300g.png",cores:"4",threads:"8",frequency:"3.4 GHz",boost:"4.9 GHz",architecture:"Zen 4",socket:"AM5",process:"TSMC 4nm",tdp:"65W",cache:"12MB",memorySupport:"DDR5",integratedGraphics:"Radeon 740M",generation:"Ryzen 8000G"},

/* =========================================================
   FINAL AMD MODELS
========================================================= */

{id:"ryzen-5-4500",name:"Ryzen 5 4500",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-4500.png",cores:"6",threads:"12",frequency:"3.6 GHz",boost:"4.1 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"11MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 4000"},
{id:"ryzen-5-4600g",name:"Ryzen 5 4600G",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-5-4600g.png",cores:"6",threads:"12",frequency:"3.7 GHz",boost:"4.2 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"11MB",memorySupport:"DDR4",integratedGraphics:"Radeon Vega 7",generation:"Ryzen 4000"},
{id:"ryzen-3-4100",name:"Ryzen 3 4100",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-3-4100.png",cores:"4",threads:"8",frequency:"3.8 GHz",boost:"4.0 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"6MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 4000"},
{id:"ryzen-3-3300x",name:"Ryzen 3 3300X",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-3-3300x.png",cores:"4",threads:"8",frequency:"3.8 GHz",boost:"4.3 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"18MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},
{id:"ryzen-3-3100",name:"Ryzen 3 3100",type:"CPU",brand:"AMD",image:"images/cpu/ryzen-3-3100.png",cores:"4",threads:"8",frequency:"3.6 GHz",boost:"3.9 GHz",architecture:"Zen 2",socket:"AM4",process:"TSMC 7nm",tdp:"65W",cache:"18MB",memorySupport:"DDR4",integratedGraphics:"None",generation:"Ryzen 3000"},

/* =========================================================
   END
========================================================= */

];
/* =========================================================
   CPU ADVANCED SPECIFICATIONS
   تعداد CPUها تغییر نمی‌کند
   مقادیر عددی از رشته‌ها جدا می‌شوند
========================================================= */

// تبدیل مقدارهای رشته‌ای مثل:
// "24" -> 24
// "125W" -> 125
// "5.7 GHz" -> 5.7
// "36MB" -> 36
function parseNumber(value) {
    if (value === null || value === undefined) return null;

    const match = String(value).replace(",", ".").match(/-?\d+(?:\.\d+)?/);

    return match ? Number(match[0]) : null;
}

// استخراج چند عدد از رشته
function parseNumbers(value) {
    if (value === null || value === undefined) return [];

    return String(value)
        .replace(",", ".")
        .match(/-?\d+(?:\.\d+)?/g)
        ?.map(Number) || [];
}

// استخراج عدد فرآیند ساخت
function parseProcessNm(process) {
    if (!process) return null;

    const value = String(process);

    const nm = value.match(/(\d+(?:\.\d+)?)\s*nm/i);

    if (nm) {
        return Number(nm[1]);
    }

    // Intel 7 / Intel 3 و مشابه
    const intel = value.match(/Intel\s+(\d+(?:\.\d+)?)/i);

    if (intel) {
        return intel[1] === "7"
            ? 10
            : intel[1] === "3"
                ? 7
                : Number(intel[1]);
    }

    return null;
}

// استخراج نام نود ساخت
function getProcessNode(process) {
    if (!process) return null;

    const value = String(process);

    if (/TSMC\s*4nm/i.test(value)) return "TSMC 4nm";
    if (/TSMC\s*5nm/i.test(value)) return "TSMC 5nm";
    if (/TSMC\s*7nm/i.test(value)) return "TSMC 7nm";
    if (/Intel\s*3/i.test(value)) return "Intel 3";
    if (/Intel\s*7/i.test(value)) return "Intel 7";
    if (/14nm/i.test(value)) return "14nm";
    if (/22nm/i.test(value)) return "22nm";
    if (/32nm/i.test(value)) return "32nm";
    if (/45nm/i.test(value)) return "45nm";

    return process;
}

// تشخیص سازنده معماری
function getArchitectureFamily(cpu) {
    const architecture = String(cpu.architecture || "").toLowerCase();

    if (architecture.includes("zen 5")) return "AMD Zen 5";
    if (architecture.includes("zen 4")) return "AMD Zen 4";
    if (architecture.includes("zen 3")) return "AMD Zen 3";
    if (architecture.includes("zen 2")) return "AMD Zen 2";
    if (architecture.includes("zen+")) return "AMD Zen+";
    if (architecture === "zen") return "AMD Zen";

    if (architecture.includes("arrow lake")) return "Intel Arrow Lake";
    if (architecture.includes("raptor lake")) return "Intel Raptor Lake";
    if (architecture.includes("alder lake")) return "Intel Alder Lake";
    if (architecture.includes("rocket lake")) return "Intel Rocket Lake";
    if (architecture.includes("comet lake")) return "Intel Comet Lake";
    if (architecture.includes("coffee lake")) return "Intel Coffee Lake";
    if (architecture.includes("kaby lake")) return "Intel Kaby Lake";
    if (architecture.includes("skylake")) return "Intel Skylake";
    if (architecture.includes("haswell")) return "Intel Haswell";
    if (architecture.includes("sapphire rapids")) return "Intel Sapphire Rapids";

    return cpu.architecture || null;
}

// تشخیص سری CPU
function getCPUFamily(cpu) {
    const name = String(cpu.name || "").toLowerCase();

    if (name.includes("threadripper")) return "Threadripper";
    if (name.includes("xeon")) return "Xeon";

    if (name.includes("core ultra 9")) return "Core Ultra 9";
    if (name.includes("core ultra 7")) return "Core Ultra 7";
    if (name.includes("core ultra 5")) return "Core Ultra 5";

    if (name.includes("core i9")) return "Core i9";
    if (name.includes("core i7")) return "Core i7";
    if (name.includes("core i5")) return "Core i5";
    if (name.includes("core i3")) return "Core i3";

    if (name.includes("ryzen 9")) return "Ryzen 9";
    if (name.includes("ryzen 7")) return "Ryzen 7";
    if (name.includes("ryzen 5")) return "Ryzen 5";
    if (name.includes("ryzen 3")) return "Ryzen 3";

    if (name.includes("pentium")) return "Pentium";
    if (name.includes("celeron")) return "Celeron";
    if (name.includes("fx-")) return "FX";
    if (name.includes("phenom")) return "Phenom";

    return cpu.brand || "Unknown";
}

// تشخیص سری X3D
function isX3D(cpu) {
    return /x3d/i.test(cpu.name || "");
}

// تشخیص مدل قابل اورکلاک بر اساس پسوند
function isUnlocked(cpu) {
    const name = String(cpu.name || "");

    if (/KS\b/i.test(name)) return true;
    if (/K\b/i.test(name)) return true;
    if (/X3D\b/i.test(name)) return true;

    // AMD Ryzenهای معمولی نیز در بسیاری از مدل‌ها ضریب باز دارند
    if (/Ryzen/i.test(name) && !/GE\b|E\b/i.test(name)) {
        return true;
    }

    return false;
}

// تشخیص وجود iGPU
function hasIntegratedGPU(cpu) {
    const gpu = String(cpu.integratedGraphics || "").toLowerCase();

    if (!gpu || gpu === "none" || gpu === "n/a") {
        return false;
    }

    return true;
}

// تشخیص نوع حافظه
function getMemoryTypes(memory) {
    if (!memory) return [];

    const value = String(memory).toUpperCase();

    const result = [];

    if (value.includes("DDR3")) result.push("DDR3");
    if (value.includes("DDR4")) result.push("DDR4");
    if (value.includes("DDR5")) result.push("DDR5");

    if (value.includes("ECC")) result.push("ECC");

    return result;
}

// تشخیص پلتفرم
function getPlatform(cpu) {
    const socket = String(cpu.socket || "").toUpperCase();

    if (socket === "AM5") return "AMD AM5";
    if (socket === "AM4") return "AMD AM4";
    if (socket === "TR4") return "AMD Threadripper TR4";
    if (socket === "STRX4") return "AMD Threadripper sTRX4";
    if (socket === "AM3+") return "AMD AM3+";
    if (socket === "AM3") return "AMD AM3";

    if (socket === "LGA1851") return "Intel LGA1851";
    if (socket === "LGA1700") return "Intel LGA1700";
    if (socket === "LGA1200") return "Intel LGA1200";
    if (socket === "LGA1151") return "Intel LGA1151";
    if (socket === "LGA1150") return "Intel LGA1150";
    if (socket === "LGA4677") return "Intel LGA4677";

    return cpu.socket || null;
}

// =========================================================
// اضافه کردن مشخصات پیشرفته به تمام CPUها
// =========================================================

CPU_DATA.forEach(cpu => {

    // -------------------------
    // Numeric specifications
    // -------------------------

    cpu.coresNumber = parseNumber(cpu.cores);
    cpu.threadsNumber = parseNumber(cpu.threads);

    cpu.baseClockGHz = parseNumber(cpu.frequency);
    cpu.boostClockGHz = parseNumber(cpu.boost);

    cpu.tdpWatts = parseNumber(cpu.tdp);
    cpu.cacheMB = parseNumber(cpu.cache);

    cpu.processNm = parseProcessNm(cpu.process);

    // -------------------------
    // نام‌گذاری و معماری
    // -------------------------

    cpu.cpuFamily = getCPUFamily(cpu);

    cpu.architectureFamily = getArchitectureFamily(cpu);

    cpu.processNode = getProcessNode(cpu);

    cpu.platform = getPlatform(cpu);

    // -------------------------
    // Memory
    // -------------------------

    cpu.memoryTypes = getMemoryTypes(cpu.memorySupport);

    cpu.memoryGeneration =
        cpu.memoryTypes.find(type =>
            ["DDR3", "DDR4", "DDR5"].includes(type)
        ) || null;

    cpu.supportsDDR3 = cpu.memoryTypes.includes("DDR3");
    cpu.supportsDDR4 = cpu.memoryTypes.includes("DDR4");
    cpu.supportsDDR5 = cpu.memoryTypes.includes("DDR5");

    // -------------------------
    // Graphics
    // -------------------------

    cpu.hasIntegratedGraphics = hasIntegratedGPU(cpu);

    cpu.iGPU = cpu.integratedGraphics || null;

    // -------------------------
    // CPU features
    // -------------------------

    cpu.isX3D = isX3D(cpu);

    cpu.isUnlocked = isUnlocked(cpu);

    cpu.isFModel = /F\b/i.test(cpu.name || "");

    cpu.isKModel = /K\b/i.test(cpu.name || "");

    cpu.isKFModel = /KF\b/i.test(cpu.name || "");

    cpu.isXModel = /X\b/i.test(cpu.name || "");

    cpu.isServerCPU =
        /Xeon|Threadripper/i.test(cpu.name || "");

    // -------------------------
    // Generation
    // -------------------------

    cpu.releaseGeneration = cpu.generation || null;

    // -------------------------
    // Numeric ID helpers
    // -------------------------

    cpu.coreThreadRatio =
        cpu.coresNumber && cpu.threadsNumber
            ? Number(
                (cpu.threadsNumber / cpu.coresNumber).toFixed(2)
              )
            : null;

    cpu.baseToBoostGHz =
        cpu.baseClockGHz !== null &&
        cpu.boostClockGHz !== null
            ? Number(
                (cpu.boostClockGHz - cpu.baseClockGHz).toFixed(2)
              )
            : null;

    cpu.boostPercentage =
        cpu.baseClockGHz > 0 &&
        cpu.boostClockGHz !== null
            ? Number(
                (
                    ((cpu.boostClockGHz - cpu.baseClockGHz) /
                        cpu.baseClockGHz) *
                    100
                ).toFixed(1)
              )
            : null;

    // -------------------------
    // Performance-oriented data
    // این‌ها محاسباتی هستند و benchmark واقعی نیستند
    // -------------------------

    cpu.totalThreadsScore =
        cpu.coresNumber !== null &&
        cpu.threadsNumber !== null
            ? cpu.coresNumber * cpu.threadsNumber
            : null;

    cpu.clockCoreScore =
        cpu.coresNumber !== null &&
        cpu.baseClockGHz !== null
            ? Number(
                (cpu.coresNumber * cpu.baseClockGHz).toFixed(2)
              )
            : null;

    cpu.boostCoreScore =
        cpu.coresNumber !== null &&
        cpu.boostClockGHz !== null
            ? Number(
                (cpu.coresNumber * cpu.boostClockGHz).toFixed(2)
              )
            : null;

    // -------------------------
    // Efficiency helpers
    // -------------------------

    cpu.coresPerWatt =
        cpu.coresNumber !== null &&
        cpu.tdpWatts > 0
            ? Number(
                (cpu.coresNumber / cpu.tdpWatts).toFixed(4)
              )
            : null;

    cpu.threadsPerWatt =
        cpu.threadsNumber !== null &&
        cpu.tdpWatts > 0
            ? Number(
                (cpu.threadsNumber / cpu.tdpWatts).toFixed(4)
              )
            : null;

    cpu.boostPerWatt =
        cpu.boostClockGHz !== null &&
        cpu.tdpWatts > 0
            ? Number(
                (cpu.boostClockGHz / cpu.tdpWatts).toFixed(5)
              )
            : null;

    // -------------------------
    // Search helpers
    // -------------------------

    cpu.searchText = [
        cpu.id,
        cpu.name,
        cpu.brand,
        cpu.cpuFamily,
        cpu.architecture,
        cpu.architectureFamily,
        cpu.socket,
        cpu.process,
        cpu.generation,
        cpu.memorySupport,
        cpu.integratedGraphics
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
});

// =========================================================
// جستجوی CPU
// =========================================================

function searchCPUs(query) {

    if (!query) {
        return CPU_DATA;
    }

    const search = String(query)
        .trim()
        .toLowerCase();

    return CPU_DATA.filter(cpu =>
        cpu.searchText.includes(search)
    );
}

// =========================================================
// پیدا کردن CPU با ID
// =========================================================

function getCPUById(id) {

    return CPU_DATA.find(cpu =>
        cpu.id === id
    ) || null;
}

// =========================================================
// فیلتر CPU
// =========================================================

function filterCPUs(filters = {}) {

    return CPU_DATA.filter(cpu => {

        if (
            filters.brand &&
            cpu.brand !== filters.brand
        ) {
            return false;
        }

        if (
            filters.socket &&
            cpu.socket !== filters.socket
        ) {
            return false;
        }

        if (
            filters.architecture &&
            cpu.architecture !== filters.architecture
        ) {
            return false;
        }

        if (
            filters.generation &&
            cpu.generation !== filters.generation
        ) {
            return false;
        }

        if (
            filters.memory &&
            !cpu.memoryTypes.includes(filters.memory)
        ) {
            return false;
        }

        if (
            filters.minCores !== undefined &&
            cpu.coresNumber < Number(filters.minCores)
        ) {
            return false;
        }

        if (
            filters.maxCores !== undefined &&
            cpu.coresNumber > Number(filters.maxCores)
        ) {
            return false;
        }

        if (
            filters.minThreads !== undefined &&
            cpu.threadsNumber < Number(filters.minThreads)
        ) {
            return false;
        }

        if (
            filters.maxThreads !== undefined &&
            cpu.threadsNumber > Number(filters.maxThreads)
        ) {
            return false;
        }

        if (
            filters.minTDP !== undefined &&
            cpu.tdpWatts < Number(filters.minTDP)
        ) {
            return false;
        }

        if (
            filters.maxTDP !== undefined &&
            cpu.tdpWatts > Number(filters.maxTDP)
        ) {
            return false;
        }

        if (
            filters.integratedGraphics !== undefined &&
            cpu.hasIntegratedGraphics !==
                Boolean(filters.integratedGraphics)
        ) {
            return false;
        }

        if (
            filters.x3d !== undefined &&
            cpu.isX3D !== Boolean(filters.x3d)
        ) {
            return false;
        }

        return true;
    });
}

// =========================================================
// مرتب‌سازی CPUها
// =========================================================

function sortCPUs(
    list = CPU_DATA,
    sortBy = "name",
    descending = false
) {

    const result = [...list];

    result.sort((a, b) => {

        let valueA = a[sortBy];
        let valueB = b[sortBy];

        if (typeof valueA === "string") {
            valueA = valueA.toLowerCase();
        }

        if (typeof valueB === "string") {
            valueB = valueB.toLowerCase();
        }

        if (valueA === null || valueA === undefined) {
            return 1;
        }

        if (valueB === null || valueB === undefined) {
            return -1;
        }

        if (valueA < valueB) {
            return descending ? 1 : -1;
        }

        if (valueA > valueB) {
            return descending ? -1 : 1;
        }

        return 0;
    });

    return result;
}

// =========================================================
// دریافت آمار دیتابیس
// =========================================================

function getCPUStats() {

    const brands = {};

    const architectures = {};

    const sockets = {};

    const generations = {};

    CPU_DATA.forEach(cpu => {

        brands[cpu.brand] =
            (brands[cpu.brand] || 0) + 1;

        architectures[cpu.architecture] =
            (architectures[cpu.architecture] || 0) + 1;

        sockets[cpu.socket] =
            (sockets[cpu.socket] || 0) + 1;

        generations[cpu.generation] =
            (generations[cpu.generation] || 0) + 1;
    });

    return {
        total: CPU_DATA.length,
        brands,
        architectures,
        sockets,
        generations
    };
}

// =========================================================
// Export
// =========================================================

if (typeof module !== "undefined" && module.exports) {

    module.exports = {
        CPU_DATA,
        CPUs: CPU_DATA,

        searchCPUs,
        getCPUById,
        filterCPUs,
        sortCPUs,
        getCPUStats
    };
}