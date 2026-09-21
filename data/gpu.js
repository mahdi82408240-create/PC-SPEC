const GPU_DATA = [

    // =========================================================
    // NVIDIA RTX 50 SERIES
    // =========================================================

    {
        id: "rtx-5090",
        name: "GeForce RTX 5090",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5090.png",

        vram: "32GB",
        memoryType: "GDDR7",
        busWidth: "512-bit",
        memorySpeed: "28 Gbps",
        memoryBandwidth: "1792 GB/s",

        baseClock: "2017 MHz",
        boostClock: "2407 MHz",

        cudaCores: 21760,
        rtCores: 170,
        tensorCores: 680,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "575W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },

    {
        id: "rtx-5080",
        name: "GeForce RTX 5080",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5080.png",

        vram: "16GB",
        memoryType: "GDDR7",
        busWidth: "256-bit",
        memorySpeed: "30 Gbps",
        memoryBandwidth: "960 GB/s",

        baseClock: "2295 MHz",
        boostClock: "2617 MHz",

        cudaCores: 10752,
        rtCores: 84,
        tensorCores: 336,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "360W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },

    {
        id: "rtx-5070-ti",
        name: "GeForce RTX 5070 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5070-ti.png",

        vram: "16GB",
        memoryType: "GDDR7",
        busWidth: "256-bit",
        memorySpeed: "28 Gbps",
        memoryBandwidth: "896 GB/s",

        baseClock: "2300 MHz",
        boostClock: "2452 MHz",

        cudaCores: 8960,
        rtCores: 70,
        tensorCores: 280,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "300W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },

    {
        id: "rtx-5070",
        name: "GeForce RTX 5070",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5070.png",

        vram: "12GB",
        memoryType: "GDDR7",
        busWidth: "192-bit",
        memorySpeed: "28 Gbps",
        memoryBandwidth: "672 GB/s",

        baseClock: "2160 MHz",
        boostClock: "2512 MHz",

        cudaCores: 6144,
        rtCores: 48,
        tensorCores: 192,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "250W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },

    {
        id: "rtx-5060-ti-16gb",
        name: "GeForce RTX 5060 Ti 16GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5060-ti-16gb.png",

        vram: "16GB",
        memoryType: "GDDR7",
        busWidth: "128-bit",
        memorySpeed: "28 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "2407 MHz",
        boostClock: "2572 MHz",

        cudaCores: 4608,
        rtCores: 36,
        tensorCores: 144,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "180W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 5.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },

    {
        id: "rtx-5060-ti-8gb",
        name: "GeForce RTX 5060 Ti 8GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5060-ti-8gb.png",

        vram: "8GB",
        memoryType: "GDDR7",
        busWidth: "128-bit",
        memorySpeed: "28 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "2407 MHz",
        boostClock: "2572 MHz",

        cudaCores: 4608,
        rtCores: 36,
        tensorCores: 144,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "180W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 5.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },

    {
        id: "rtx-5060",
        name: "GeForce RTX 5060",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-5060.png",

        vram: "8GB",
        memoryType: "GDDR7",
        busWidth: "128-bit",
        memorySpeed: "28 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "2280 MHz",
        boostClock: "2497 MHz",

        cudaCores: 3840,
        rtCores: 30,
        tensorCores: 120,

        architecture: "Blackwell",
        process: "TSMC 4N",
        tdp: "145W",

        powerConnector: "1x 8-pin / 1x 16-pin",
        pcie: "PCIe 5.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.4",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 4",
        frameGeneration: true,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 2.1b + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RTX 50"
    },


    // =========================================================
    // NVIDIA RTX 40 SERIES
    // =========================================================

    {
        id: "rtx-4090",
        name: "GeForce RTX 4090",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4090.png",

        vram: "24GB",
        memoryType: "GDDR6X",
        busWidth: "384-bit",
        memorySpeed: "21 Gbps",
        memoryBandwidth: "1008 GB/s",

        baseClock: "2235 MHz",
        boostClock: "2520 MHz",

        cudaCores: 16384,
        rtCores: 128,
        tensorCores: 512,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "450W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4080-super",
        name: "GeForce RTX 4080 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4080-super.png",

        vram: "16GB",
        memoryType: "GDDR6X",
        busWidth: "256-bit",
        memorySpeed: "23 Gbps",
        memoryBandwidth: "736 GB/s",

        baseClock: "2295 MHz",
        boostClock: "2550 MHz",

        cudaCores: 10240,
        rtCores: 80,
        tensorCores: 320,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "320W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4080",
        name: "GeForce RTX 4080",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4080.png",

        vram: "16GB",
        memoryType: "GDDR6X",
        busWidth: "256-bit",
        memorySpeed: "22.4 Gbps",
        memoryBandwidth: "716.8 GB/s",

        baseClock: "2205 MHz",
        boostClock: "2505 MHz",

        cudaCores: 9728,
        rtCores: 76,
        tensorCores: 304,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "320W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4070-ti-super",
        name: "GeForce RTX 4070 Ti SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4070-ti-super.png",

        vram: "16GB",
        memoryType: "GDDR6X",
        busWidth: "256-bit",
        memorySpeed: "21 Gbps",
        memoryBandwidth: "672 GB/s",

        baseClock: "2340 MHz",
        boostClock: "2610 MHz",

        cudaCores: 8448,
        rtCores: 66,
        tensorCores: 264,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "285W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4070-ti",
        name: "GeForce RTX 4070 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4070-ti.png",

        vram: "12GB",
        memoryType: "GDDR6X",
        busWidth: "192-bit",
        memorySpeed: "21 Gbps",
        memoryBandwidth: "504 GB/s",

        baseClock: "2310 MHz",
        boostClock: "2610 MHz",

        cudaCores: 7680,
        rtCores: 60,
        tensorCores: 240,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "285W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4070-super",
        name: "GeForce RTX 4070 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4070-super.png",

        vram: "12GB",
        memoryType: "GDDR6X",
        busWidth: "192-bit",
        memorySpeed: "21 Gbps",
        memoryBandwidth: "504 GB/s",

        baseClock: "1980 MHz",
        boostClock: "2475 MHz",

        cudaCores: 7168,
        rtCores: 56,
        tensorCores: 224,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "220W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4070",
        name: "GeForce RTX 4070",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4070.png",

        vram: "12GB",
        memoryType: "GDDR6X",
        busWidth: "192-bit",
        memorySpeed: "21 Gbps",
        memoryBandwidth: "504 GB/s",

        baseClock: "1920 MHz",
        boostClock: "2475 MHz",

        cudaCores: 5888,
        rtCores: 46,
        tensorCores: 184,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "200W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4060-ti-16gb",
        name: "GeForce RTX 4060 Ti 16GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4060-ti-16gb.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "288 GB/s",

        baseClock: "2310 MHz",
        boostClock: "2535 MHz",

        cudaCores: 4352,
        rtCores: 34,
        tensorCores: 136,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "165W",

        powerConnector: "1x 8-pin / 1x 16-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4060-ti",
        name: "GeForce RTX 4060 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4060-ti.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "288 GB/s",

        baseClock: "2310 MHz",
        boostClock: "2535 MHz",

        cudaCores: 4352,
        rtCores: 34,
        tensorCores: 136,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "160W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },

    {
        id: "rtx-4060",
        name: "GeForce RTX 4060",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-4060.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "17 Gbps",
        memoryBandwidth: "272 GB/s",

        baseClock: "1830 MHz",
        boostClock: "2535 MHz",

        cudaCores: 3072,
        rtCores: 24,
        tensorCores: 96,

        architecture: "Ada Lovelace",
        process: "TSMC 4N",
        tdp: "115W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 3",
        frameGeneration: true,

        encoder: "NVENC AV1",
        decoder: "NVDEC AV1",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 40"
    },


    // =========================================================
    // NVIDIA RTX 30 SERIES
    // =========================================================

    {
        id: "rtx-3090-ti",
        name: "GeForce RTX 3090 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3090-ti.png",

        vram: "24GB",
        memoryType: "GDDR6X",
        busWidth: "384-bit",
        memorySpeed: "21 Gbps",
        memoryBandwidth: "1008 GB/s",

        baseClock: "1560 MHz",
        boostClock: "1860 MHz",

        cudaCores: 10752,
        rtCores: 84,
        tensorCores: 336,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "450W",

        powerConnector: "1x 16-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3090",
        name: "GeForce RTX 3090",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3090.png",

        vram: "24GB",
        memoryType: "GDDR6X",
        busWidth: "384-bit",
        memorySpeed: "19.5 Gbps",
        memoryBandwidth: "936 GB/s",

        baseClock: "1395 MHz",
        boostClock: "1695 MHz",

        cudaCores: 10496,
        rtCores: 82,
        tensorCores: 328,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "350W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3080-ti",
        name: "GeForce RTX 3080 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3080-ti.png",

        vram: "12GB",
        memoryType: "GDDR6X",
        busWidth: "384-bit",
        memorySpeed: "19 Gbps",
        memoryBandwidth: "912 GB/s",

        baseClock: "1365 MHz",
        boostClock: "1665 MHz",

        cudaCores: 10240,
        rtCores: 80,
        tensorCores: 320,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "350W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3080-12gb",
        name: "GeForce RTX 3080 12GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3080-12gb.png",

        vram: "12GB",
        memoryType: "GDDR6X",
        busWidth: "384-bit",
        memorySpeed: "19 Gbps",
        memoryBandwidth: "912 GB/s",

        baseClock: "1260 MHz",
        boostClock: "1710 MHz",

        cudaCores: 8960,
        rtCores: 70,
        tensorCores: 280,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "350W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3080",
        name: "GeForce RTX 3080",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3080.png",

        vram: "10GB",
        memoryType: "GDDR6X",
        busWidth: "320-bit",
        memorySpeed: "19 Gbps",
        memoryBandwidth: "760 GB/s",

        baseClock: "1440 MHz",
        boostClock: "1710 MHz",

        cudaCores: 8704,
        rtCores: 68,
        tensorCores: 272,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "320W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3070-ti",
        name: "GeForce RTX 3070 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3070-ti.png",

        vram: "8GB",
        memoryType: "GDDR6X",
        busWidth: "256-bit",
        memorySpeed: "19 Gbps",
        memoryBandwidth: "608 GB/s",

        baseClock: "1575 MHz",
        boostClock: "1770 MHz",

        cudaCores: 6144,
        rtCores: 48,
        tensorCores: 192,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "290W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3070",
        name: "GeForce RTX 3070",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3070.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1500 MHz",
        boostClock: "1725 MHz",

        cudaCores: 5888,
        rtCores: 46,
        tensorCores: 184,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "220W",

        powerConnector: "1x 12-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3060-ti",
        name: "GeForce RTX 3060 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3060-ti.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1410 MHz",
        boostClock: "1665 MHz",

        cudaCores: 4864,
        rtCores: 38,
        tensorCores: 152,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "200W",

        powerConnector: "1x 12-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3060-12gb",
        name: "GeForce RTX 3060 12GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3060-12gb.png",

        vram: "12GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "15 Gbps",
        memoryBandwidth: "360 GB/s",

        baseClock: "1320 MHz",
        boostClock: "1777 MHz",

        cudaCores: 3584,
        rtCores: 28,
        tensorCores: 112,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "170W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3050-8gb",
        name: "GeForce RTX 3050 8GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3050-8gb.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "224 GB/s",

        baseClock: "1552 MHz",
        boostClock: "1777 MHz",

        cudaCores: 2560,
        rtCores: 20,
        tensorCores: 80,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "130W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },

    {
        id: "rtx-3050-6gb",
        name: "GeForce RTX 3050 6GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-3050-6gb.png",

        vram: "6GB",
        memoryType: "GDDR6",
        busWidth: "96-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "168 GB/s",

        baseClock: "1042 MHz",
        boostClock: "1470 MHz",

        cudaCores: 2304,
        rtCores: 18,
        tensorCores: 72,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "70W",

        powerConnector: "None",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4a + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RTX 30"
    },


    // =========================================================
    // NVIDIA RTX 20 SERIES
    // =========================================================

    {
        id: "rtx-2080-ti",
        name: "GeForce RTX 2080 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2080-ti.png",

        vram: "11GB",
        memoryType: "GDDR6",
        busWidth: "352-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "616 GB/s",

        baseClock: "1350 MHz",
        boostClock: "1545 MHz",

        cudaCores: 4352,
        rtCores: 68,
        tensorCores: 544,

        architecture: "Turing",
        process: "12nm",
        tdp: "250W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + USB-C",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },

    {
        id: "rtx-2080-super",
        name: "GeForce RTX 2080 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2080-super.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "15.5 Gbps",
        memoryBandwidth: "496 GB/s",

        baseClock: "1650 MHz",
        boostClock: "1815 MHz",

        cudaCores: 3072,
        rtCores: 48,
        tensorCores: 384,

        architecture: "Turing",
        process: "12nm",
        tdp: "250W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + USB-C",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },

    {
        id: "rtx-2080",
        name: "GeForce RTX 2080",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2080.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1515 MHz",
        boostClock: "1710 MHz",

        cudaCores: 2944,
        rtCores: 46,
        tensorCores: 368,

        architecture: "Turing",
        process: "12nm",
        tdp: "215W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + USB-C",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },

    {
        id: "rtx-2070-super",
        name: "GeForce RTX 2070 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2070-super.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1605 MHz",
        boostClock: "1770 MHz",

        cudaCores: 2560,
        rtCores: 40,
        tensorCores: 320,

        architecture: "Turing",
        process: "12nm",
        tdp: "215W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + USB-C",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },

    {
        id: "rtx-2070",
        name: "GeForce RTX 2070",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2070.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1410 MHz",
        boostClock: "1620 MHz",

        cudaCores: 2304,
        rtCores: 36,
        tensorCores: 288,

        architecture: "Turing",
        process: "12nm",
        tdp: "175W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + USB-C",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },

    {
        id: "rtx-2060-super",
        name: "GeForce RTX 2060 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2060-super.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1470 MHz",
        boostClock: "1650 MHz",

        cudaCores: 2176,
        rtCores: 34,
        tensorCores: 272,

        architecture: "Turing",
        process: "12nm",
        tdp: "175W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "2x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },

    {
        id: "rtx-2060",
        name: "GeForce RTX 2060",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-2060.png",

        vram: "6GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "336 GB/s",

        baseClock: "1365 MHz",
        boostClock: "1680 MHz",

        cudaCores: 1920,
        rtCores: 30,
        tensorCores: 240,

        architecture: "Turing",
        process: "12nm",
        tdp: "160W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "RTX 20"
    },


    // =========================================================
    // NVIDIA GTX 16 SERIES
    // =========================================================

    {
        id: "gtx-1660-ti",
        name: "GeForce GTX 1660 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1660-ti.png",

        vram: "6GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "12 Gbps",
        memoryBandwidth: "288 GB/s",

        baseClock: "1500 MHz",
        boostClock: "1770 MHz",

        cudaCores: 1536,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Turing",
        process: "12nm",
        tdp: "120W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 16"
    },

    {
        id: "gtx-1660-super",
        name: "GeForce GTX 1660 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1660-super.png",

        vram: "6GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "336 GB/s",

        baseClock: "1530 MHz",
        boostClock: "1785 MHz",

        cudaCores: 1408,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Turing",
        process: "12nm",
        tdp: "125W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 16"
    },

    {
        id: "gtx-1660",
        name: "GeForce GTX 1660",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1660.png",

        vram: "6GB",
        memoryType: "GDDR5",
        busWidth: "192-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "192 GB/s",

        baseClock: "1530 MHz",
        boostClock: "1785 MHz",

        cudaCores: 1408,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Turing",
        process: "12nm",
        tdp: "120W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 16"
    },

    {
        id: "gtx-1650-super",
        name: "GeForce GTX 1650 SUPER",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1650-super.png",

        vram: "4GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "12 Gbps",
        memoryBandwidth: "192 GB/s",

        baseClock: "1530 MHz",
        boostClock: "1725 MHz",

        cudaCores: 1280,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Turing",
        process: "12nm",
        tdp: "100W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 16"
    },

    {
        id: "gtx-1650",
        name: "GeForce GTX 1650",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1650.png",

        vram: "4GB",
        memoryType: "GDDR5",
        busWidth: "128-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "128 GB/s",

        baseClock: "1485 MHz",
        boostClock: "1665 MHz",

        cudaCores: 896,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Turing",
        process: "12nm",
        tdp: "75W",

        powerConnector: "None",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 16"
    },


    // =========================================================
    // NVIDIA GTX 10 SERIES
    // =========================================================

    {
        id: "gtx-1080-ti",
        name: "GeForce GTX 1080 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1080-ti.png",

        vram: "11GB",
        memoryType: "GDDR5X",
        busWidth: "352-bit",
        memorySpeed: "11 Gbps",
        memoryBandwidth: "484 GB/s",

        baseClock: "1480 MHz",
        boostClock: "1582 MHz",

        cudaCores: 3584,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "250W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1080",
        name: "GeForce GTX 1080",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1080.png",

        vram: "8GB",
        memoryType: "GDDR5X",
        busWidth: "256-bit",
        memorySpeed: "10 Gbps",
        memoryBandwidth: "320 GB/s",

        baseClock: "1607 MHz",
        boostClock: "1733 MHz",

        cudaCores: 2560,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "180W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1070-ti",
        name: "GeForce GTX 1070 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1070-ti.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "256-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "256 GB/s",

        baseClock: "1607 MHz",
        boostClock: "1683 MHz",

        cudaCores: 2432,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "180W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1070",
        name: "GeForce GTX 1070",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1070.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "256-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "256 GB/s",

        baseClock: "1506 MHz",
        boostClock: "1683 MHz",

        cudaCores: 1920,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "150W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1060-6gb",
        name: "GeForce GTX 1060 6GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1060-6gb.png",

        vram: "6GB",
        memoryType: "GDDR5",
        busWidth: "192-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "192 GB/s",

        baseClock: "1506 MHz",
        boostClock: "1708 MHz",

        cudaCores: 1280,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "120W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1060-3gb",
        name: "GeForce GTX 1060 3GB",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1060-3gb.png",

        vram: "3GB",
        memoryType: "GDDR5",
        busWidth: "192-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "192 GB/s",

        baseClock: "1506 MHz",
        boostClock: "1708 MHz",

        cudaCores: 1152,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "120W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1050-ti",
        name: "GeForce GTX 1050 Ti",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1050-ti.png",

        vram: "4GB",
        memoryType: "GDDR5",
        busWidth: "128-bit",
        memorySpeed: "7 Gbps",
        memoryBandwidth: "112 GB/s",

        baseClock: "1290 MHz",
        boostClock: "1392 MHz",

        cudaCores: 768,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "14nm",
        tdp: "75W",

        powerConnector: "None",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },

    {
        id: "gtx-1050",
        name: "GeForce GTX 1050",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gtx-1050.png",

        vram: "2GB",
        memoryType: "GDDR5",
        busWidth: "128-bit",
        memorySpeed: "7 Gbps",
        memoryBandwidth: "112 GB/s",

        baseClock: "1354 MHz",
        boostClock: "1455 MHz",

        cudaCores: 640,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "14nm",
        tdp: "75W",

        powerConnector: "None",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "7680x4320",

        generation: "GTX 10"
    },


    // =========================================================
    // AMD RX 9000 SERIES
    // =========================================================

    {
        id: "rx-9070-xt",
        name: "Radeon RX 9070 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-9070-xt.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "20 Gbps",
        memoryBandwidth: "640 GB/s",

        baseClock: "1660 MHz",
        gameClock: "2400 MHz",
        boostClock: "2970 MHz",

        streamProcessors: 4096,
        rayAccelerators: 64,

        architecture: "RDNA 4",
        process: "TSMC N4P",
        tdp: "304W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1a + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RX 9000"
    },

    {
        id: "rx-9070",
        name: "Radeon RX 9070",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-9070.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "20 Gbps",
        memoryBandwidth: "640 GB/s",

        baseClock: "1330 MHz",
        gameClock: "2170 MHz",
        boostClock: "2520 MHz",

        streamProcessors: 3584,
        rayAccelerators: 56,

        architecture: "RDNA 4",
        process: "TSMC N4P",
        tdp: "220W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1a + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RX 9000"
    },

    {
        id: "rx-9060-xt-16gb",
        name: "Radeon RX 9060 XT 16GB",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-9060-xt-16gb.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "20 Gbps",
        memoryBandwidth: "320 GB/s",

        baseClock: "2530 MHz",
        gameClock: "3060 MHz",
        boostClock: "3290 MHz",

        streamProcessors: 2048,
        rayAccelerators: 32,

        architecture: "RDNA 4",
        process: "TSMC N4P",
        tdp: "160W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1a + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RX 9000"
    },

    {
        id: "rx-9060-xt-8gb",
        name: "Radeon RX 9060 XT 8GB",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-9060-xt-8gb.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "20 Gbps",
        memoryBandwidth: "320 GB/s",

        baseClock: "2530 MHz",
        gameClock: "3060 MHz",
        boostClock: "3290 MHz",

        streamProcessors: 2048,
        rayAccelerators: 32,

        architecture: "RDNA 4",
        process: "TSMC N4P",
        tdp: "150W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 5.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1a + HDMI 2.1b",
        maxResolution: "7680x4320",

        generation: "RX 9000"
    },


    // =========================================================
    // AMD RX 7000 SERIES
    // =========================================================

    {
        id: "rx-7900-xtx",
        name: "Radeon RX 7900 XTX",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-7900-xtx.png",

        vram: "24GB",
        memoryType: "GDDR6",
        busWidth: "384-bit",
        memorySpeed: "20 Gbps",
        memoryBandwidth: "960 GB/s",

        baseClock: "1929 MHz",
        gameClock: "2300 MHz",
        boostClock: "2499 MHz",

        streamProcessors: 6144,
        rayAccelerators: 96,

        architecture: "RDNA 3",
        process: "TSMC 5nm",
        tdp: "355W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR 3",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "2x DisplayPort 2.1 + HDMI 2.1 + USB-C",
        maxResolution: "7680x4320",

        generation: "RX 7000"
    },

    {
        id: "rx-7900-xt",
        name: "Radeon RX 7900 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-7900-xt.png",

        vram: "20GB",
        memoryType: "GDDR6",
        busWidth: "320-bit",
        memorySpeed: "20 Gbps",
        memoryBandwidth: "800 GB/s",

        baseClock: "1500 MHz",
        gameClock: "2000 MHz",
        boostClock: "2400 MHz",

        streamProcessors: 5376,
        rayAccelerators: 84,

        architecture: "RDNA 3",
        process: "TSMC 5nm",
        tdp: "315W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR 3",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "2x DisplayPort 2.1 + HDMI 2.1 + USB-C",
        maxResolution: "7680x4320",

        generation: "RX 7000"
    },

    {
        id: "rx-7800-xt",
        name: "Radeon RX 7800 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-7800-xt.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "19.5 Gbps",
        memoryBandwidth: "624 GB/s",

        baseClock: "1295 MHz",
        gameClock: "2124 MHz",
        boostClock: "2430 MHz",

        streamProcessors: 3840,
        rayAccelerators: 60,

        architecture: "RDNA 3",
        process: "TSMC 5nm",
        tdp: "263W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR 3",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 7000"
    },

    {
        id: "rx-7700-xt",
        name: "Radeon RX 7700 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-7700-xt.png",

        vram: "12GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "432 GB/s",

        baseClock: "1700 MHz",
        gameClock: "2171 MHz",
        boostClock: "2544 MHz",

        streamProcessors: 3456,
        rayAccelerators: 54,

        architecture: "RDNA 3",
        process: "TSMC 5nm",
        tdp: "245W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR 3",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 7000"
    },

    {
        id: "rx-7600-xt",
        name: "Radeon RX 7600 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-7600-xt.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "288 GB/s",

        baseClock: "1980 MHz",
        gameClock: "2470 MHz",
        boostClock: "2755 MHz",

        streamProcessors: 2048,
        rayAccelerators: 32,

        architecture: "RDNA 3",
        process: "TSMC 6nm",
        tdp: "190W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR 3",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 7000"
    },

    {
        id: "rx-7600",
        name: "Radeon RX 7600",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-7600.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "288 GB/s",

        baseClock: "1720 MHz",
        gameClock: "2250 MHz",
        boostClock: "2655 MHz",

        streamProcessors: 2048,
        rayAccelerators: 32,

        architecture: "RDNA 3",
        process: "TSMC 6nm",
        tdp: "165W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR 3",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 7000"
    },


    // =========================================================
    // AMD RX 6000 SERIES
    // =========================================================

    {
        id: "rx-6950-xt",
        name: "Radeon RX 6950 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6950-xt.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "576 GB/s",

        baseClock: "1860 MHz",
        gameClock: "2116 MHz",
        boostClock: "2310 MHz",

        streamProcessors: 5120,
        rayAccelerators: 80,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "335W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1 + USB-C",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6900-xt",
        name: "Radeon RX 6900 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6900-xt.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "512 GB/s",

        baseClock: "1825 MHz",
        gameClock: "2015 MHz",
        boostClock: "2250 MHz",

        streamProcessors: 5120,
        rayAccelerators: 80,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "300W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1 + USB-C",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6800-xt",
        name: "Radeon RX 6800 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6800-xt.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "512 GB/s",

        baseClock: "1825 MHz",
        gameClock: "2015 MHz",
        boostClock: "2250 MHz",

        streamProcessors: 4608,
        rayAccelerators: 72,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "300W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1 + USB-C",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6800",
        name: "Radeon RX 6800",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6800.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "512 GB/s",

        baseClock: "1700 MHz",
        gameClock: "1815 MHz",
        boostClock: "2105 MHz",

        streamProcessors: 3840,
        rayAccelerators: 60,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "250W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1 + USB-C",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6750-xt",
        name: "Radeon RX 6750 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6750-xt.png",

        vram: "12GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "432 GB/s",

        baseClock: "2150 MHz",
        gameClock: "2495 MHz",
        boostClock: "2600 MHz",

        streamProcessors: 2560,
        rayAccelerators: 40,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "250W",

        powerConnector: "1x 8-pin + 1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6700-xt",
        name: "Radeon RX 6700 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6700-xt.png",

        vram: "12GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "384 GB/s",

        baseClock: "2321 MHz",
        gameClock: "2424 MHz",
        boostClock: "2581 MHz",

        streamProcessors: 2560,
        rayAccelerators: 40,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "230W",

        powerConnector: "1x 8-pin + 1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6650-xt",
        name: "Radeon RX 6650 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6650-xt.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "17.5 Gbps",
        memoryBandwidth: "280 GB/s",

        baseClock: "2055 MHz",
        gameClock: "2410 MHz",
        boostClock: "2635 MHz",

        streamProcessors: 2048,
        rayAccelerators: 32,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "176W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6600-xt",
        name: "Radeon RX 6600 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6600-xt.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "256 GB/s",

        baseClock: "1968 MHz",
        gameClock: "2359 MHz",
        boostClock: "2589 MHz",

        streamProcessors: 2048,
        rayAccelerators: 32,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "160W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6600",
        name: "Radeon RX 6600",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6600.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "224 GB/s",

        baseClock: "1626 MHz",
        gameClock: "2044 MHz",
        boostClock: "2491 MHz",

        streamProcessors: 1792,
        rayAccelerators: 28,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "132W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6500-xt",
        name: "Radeon RX 6500 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6500-xt.png",

        vram: "4GB",
        memoryType: "GDDR6",
        busWidth: "64-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "144 GB/s",

        baseClock: "2310 MHz",
        gameClock: "2685 MHz",
        boostClock: "2815 MHz",

        streamProcessors: 1024,
        rayAccelerators: 16,

        architecture: "RDNA 2",
        process: "TSMC 6nm",
        tdp: "107W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 4.0 x4",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },

    {
        id: "rx-6400",
        name: "Radeon RX 6400",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-6400.png",

        vram: "4GB",
        memoryType: "GDDR6",
        busWidth: "64-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "128 GB/s",

        baseClock: "2039 MHz",
        gameClock: "2039 MHz",
        boostClock: "2321 MHz",

        streamProcessors: 768,
        rayAccelerators: 12,

        architecture: "RDNA 2",
        process: "TSMC 6nm",
        tdp: "53W",

        powerConnector: "None",
        pcie: "PCIe 4.0 x4",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "None",
        decoder: "AMD UVD",

        displayOutputs: "DisplayPort 1.4 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "RX 6000"
    },


    // =========================================================
    // AMD RX 5000 SERIES
    // =========================================================

    {
        id: "rx-5700-xt",
        name: "Radeon RX 5700 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-5700-xt.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1605 MHz",
        gameClock: "1755 MHz",
        boostClock: "1905 MHz",

        streamProcessors: 2560,
        rayAccelerators: 0,

        architecture: "RDNA",
        process: "TSMC 7nm",
        tdp: "225W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCN",
        decoder: "VCN",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b",
        maxResolution: "7680x4320",

        generation: "RX 5000"
    },

    {
        id: "rx-5700",
        name: "Radeon RX 5700",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-5700.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "1465 MHz",
        gameClock: "1625 MHz",
        boostClock: "1725 MHz",

        streamProcessors: 2304,
        rayAccelerators: 0,

        architecture: "RDNA",
        process: "TSMC 7nm",
        tdp: "180W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCN",
        decoder: "VCN",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b",
        maxResolution: "7680x4320",

        generation: "RX 5000"
    },

    {
        id: "rx-5600-xt",
        name: "Radeon RX 5600 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-5600-xt.png",

        vram: "6GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "336 GB/s",

        baseClock: "1130 MHz",
        gameClock: "1375 MHz",
        boostClock: "1560 MHz",

        streamProcessors: 2304,
        rayAccelerators: 0,

        architecture: "RDNA",
        process: "TSMC 7nm",
        tdp: "150W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCN",
        decoder: "VCN",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b",
        maxResolution: "7680x4320",

        generation: "RX 5000"
    },

    {
        id: "rx-5500-xt",
        name: "Radeon RX 5500 XT",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-5500-xt.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "128-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "224 GB/s",

        baseClock: "1607 MHz",
        gameClock: "1717 MHz",
        boostClock: "1845 MHz",

        streamProcessors: 1408,
        rayAccelerators: 0,

        architecture: "RDNA",
        process: "TSMC 7nm",
        tdp: "130W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCN",
        decoder: "VCN",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b",
        maxResolution: "7680x4320",

        generation: "RX 5000"
    },


    // =========================================================
    // AMD RX 500 SERIES
    // =========================================================

    {
        id: "rx-590",
        name: "Radeon RX 590",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-590.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "256-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "256 GB/s",

        baseClock: "1469 MHz",
        boostClock: "1545 MHz",

        streamProcessors: 2304,
        rayAccelerators: 0,

        architecture: "Polaris",
        process: "12nm",
        tdp: "175W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "4096x2160",

        generation: "RX 500"
    },

    {
        id: "rx-580",
        name: "Radeon RX 580",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-580.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "256-bit",
        memorySpeed: "8 Gbps",
        memoryBandwidth: "256 GB/s",

        baseClock: "1257 MHz",
        boostClock: "1340 MHz",

        streamProcessors: 2304,
        rayAccelerators: 0,

        architecture: "Polaris",
        process: "14nm",
        tdp: "185W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "4096x2160",

        generation: "RX 500"
    },

    {
        id: "rx-570",
        name: "Radeon RX 570",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-570.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "256-bit",
        memorySpeed: "7 Gbps",
        memoryBandwidth: "224 GB/s",

        baseClock: "1168 MHz",
        boostClock: "1244 MHz",

        streamProcessors: 2048,
        rayAccelerators: 0,

        architecture: "Polaris",
        process: "14nm",
        tdp: "150W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "4096x2160",

        generation: "RX 500"
    },

    {
        id: "rx-560",
        name: "Radeon RX 560",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-560.png",

        vram: "4GB",
        memoryType: "GDDR5",
        busWidth: "128-bit",
        memorySpeed: "7 Gbps",
        memoryBandwidth: "112 GB/s",

        baseClock: "1175 MHz",
        boostClock: "1275 MHz",

        streamProcessors: 1024,
        rayAccelerators: 0,

        architecture: "Polaris",
        process: "14nm",
        tdp: "80W",

        powerConnector: "None / 1x 6-pin",
        pcie: "PCIe 3.0 x8",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "4096x2160",

        generation: "RX 500"
    },

    {
        id: "rx-550",
        name: "Radeon RX 550",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/rx-550.png",

        vram: "4GB",
        memoryType: "GDDR5",
        busWidth: "128-bit",
        memorySpeed: "7 Gbps",
        memoryBandwidth: "112 GB/s",

        baseClock: "1100 MHz",
        boostClock: "1183 MHz",

        streamProcessors: 512,
        rayAccelerators: 0,

        architecture: "Polaris",
        process: "14nm",
        tdp: "50W",

        powerConnector: "None",
        pcie: "PCIe 3.0 x8",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "DisplayPort + HDMI + DVI",
        maxResolution: "4096x2160",

        generation: "RX 500"
    },


    // =========================================================
    // AMD VEGA
    // =========================================================

    {
        id: "vega-64",
        name: "Radeon RX Vega 64",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/vega-64.png",

        vram: "8GB",
        memoryType: "HBM2",
        busWidth: "2048-bit",
        memorySpeed: "1.89 Gbps",
        memoryBandwidth: "483.8 GB/s",

        baseClock: "1247 MHz",
        boostClock: "1546 MHz",

        streamProcessors: 4096,
        rayAccelerators: 0,

        architecture: "Vega",
        process: "14nm",
        tdp: "295W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "3x DisplayPort + HDMI",
        maxResolution: "7680x4320",

        generation: "Vega"
    },

    {
        id: "vega-56",
        name: "Radeon RX Vega 56",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/vega-56.png",

        vram: "8GB",
        memoryType: "HBM2",
        busWidth: "2048-bit",
        memorySpeed: "1.6 Gbps",
        memoryBandwidth: "410 GB/s",

        baseClock: "1156 MHz",
        boostClock: "1471 MHz",

        streamProcessors: 3584,
        rayAccelerators: 0,

        architecture: "Vega",
        process: "14nm",
        tdp: "210W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "3x DisplayPort + HDMI",
        maxResolution: "7680x4320",

        generation: "Vega"
    },


    // =========================================================
    // INTEL ARC B SERIES
    // =========================================================

    {
        id: "arc-b580",
        name: "Intel Arc B580",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-b580.png",

        vram: "12GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "19 Gbps",
        memoryBandwidth: "456 GB/s",

        baseClock: "1700 MHz",
        boostClock: "2670 MHz",

        xeCores: 20,
        rayTracingUnits: 20,
        xmxEngines: 160,

        architecture: "Xe2",
        process: "TSMC N5",
        tdp: "190W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS 2",
        frameGeneration: true,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc B"
    },

    {
        id: "arc-b570",
        name: "Intel Arc B570",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-b570.png",

        vram: "10GB",
        memoryType: "GDDR6",
        busWidth: "160-bit",
        memorySpeed: "19 Gbps",
        memoryBandwidth: "380 GB/s",

        baseClock: "1500 MHz",
        boostClock: "2500 MHz",

        xeCores: 18,
        rayTracingUnits: 18,
        xmxEngines: 144,

        architecture: "Xe2",
        process: "TSMC N5",
        tdp: "150W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS 2",
        frameGeneration: true,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc B"
    },


    // =========================================================
    // INTEL ARC A SERIES
    // =========================================================

    {
        id: "arc-a770-16gb",
        name: "Intel Arc A770 16GB",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-a770-16gb.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "17.5 Gbps",
        memoryBandwidth: "560 GB/s",

        baseClock: "2100 MHz",
        boostClock: "2400 MHz",

        xeCores: 32,
        rayTracingUnits: 32,
        xmxEngines: 512,

        architecture: "Alchemist",
        process: "TSMC N6",
        tdp: "225W",

        powerConnector: "1x 8-pin + 1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS",
        frameGeneration: false,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.0 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc A"
    },

    {
        id: "arc-a770-8gb",
        name: "Intel Arc A770 8GB",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-a770-8gb.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "17.5 Gbps",
        memoryBandwidth: "560 GB/s",

        baseClock: "2100 MHz",
        boostClock: "2400 MHz",

        xeCores: 32,
        rayTracingUnits: 32,
        xmxEngines: 512,

        architecture: "Alchemist",
        process: "TSMC N6",
        tdp: "225W",

        powerConnector: "1x 8-pin + 1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS",
        frameGeneration: false,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.0 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc A"
    },

    {
        id: "arc-a750",
        name: "Intel Arc A750",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-a750.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "512 GB/s",

        baseClock: "2050 MHz",
        boostClock: "2400 MHz",

        xeCores: 28,
        rayTracingUnits: 28,
        xmxEngines: 448,

        architecture: "Alchemist",
        process: "TSMC N6",
        tdp: "225W",

        powerConnector: "1x 8-pin + 1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS",
        frameGeneration: false,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.0 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc A"
    },

    {
        id: "arc-a580",
        name: "Intel Arc A580",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-a580.png",

        vram: "8GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "512 GB/s",

        baseClock: "1700 MHz",
        boostClock: "2000 MHz",

        xeCores: 24,
        rayTracingUnits: 24,
        xmxEngines: 384,

        architecture: "Alchemist",
        process: "TSMC N6",
        tdp: "185W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS",
        frameGeneration: false,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.0 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc A"
    },

    {
        id: "arc-a380",
        name: "Intel Arc A380",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-a380.png",

        vram: "6GB",
        memoryType: "GDDR6",
        busWidth: "96-bit",
        memorySpeed: "15.5 Gbps",
        memoryBandwidth: "186 GB/s",

        baseClock: "2000 MHz",
        boostClock: "2450 MHz",

        xeCores: 8,
        rayTracingUnits: 8,
        xmxEngines: 128,

        architecture: "Alchemist",
        process: "TSMC N6",
        tdp: "75W",

        powerConnector: "None",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS",
        frameGeneration: false,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "3x DisplayPort 2.0 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc A"
    },

    {
        id: "arc-a310",
        name: "Intel Arc A310",
        type: "GPU",
        brand: "Intel",
        image: "images/gpu/arc-a310.png",

        vram: "4GB",
        memoryType: "GDDR6",
        busWidth: "64-bit",
        memorySpeed: "15.5 Gbps",
        memoryBandwidth: "124 GB/s",

        baseClock: "2000 MHz",
        boostClock: "2000 MHz",

        xeCores: 6,
        rayTracingUnits: 6,
        xmxEngines: 96,

        architecture: "Alchemist",
        process: "TSMC N6",
        tdp: "75W",

        powerConnector: "None",
        pcie: "PCIe 4.0 x8",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "XeSS",
        frameGeneration: false,

        encoder: "Intel Xe Media Engine",
        decoder: "Intel Xe Media Engine",

        displayOutputs: "DisplayPort 2.0 + HDMI 2.1",
        maxResolution: "7680x4320",

        generation: "Arc A"
    },


    // =========================================================
    // NVIDIA TITAN
    // =========================================================

    {
        id: "titan-rtx",
        name: "Titan RTX",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/titan-rtx.png",

        vram: "24GB",
        memoryType: "GDDR6",
        busWidth: "384-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "672 GB/s",

        baseClock: "1350 MHz",
        boostClock: "1770 MHz",

        cudaCores: 4608,
        rtCores: 72,
        tensorCores: 576,

        architecture: "Turing",
        process: "12nm",
        tdp: "280W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort 1.4 + HDMI 2.0b + USB-C",
        maxResolution: "7680x4320",

        generation: "Titan"
    },

    {
        id: "titan-v",
        name: "Titan V",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/titan-v.png",

        vram: "12GB",
        memoryType: "HBM2",
        busWidth: "3072-bit",
        memorySpeed: "1.7 Gbps",
        memoryBandwidth: "653 GB/s",

        baseClock: "1200 MHz",
        boostClock: "1455 MHz",

        cudaCores: 5120,
        rtCores: 0,
        tensorCores: 640,

        architecture: "Volta",
        process: "12nm",
        tdp: "250W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort + HDMI",
        maxResolution: "7680x4320",

        generation: "Titan"
    },

    {
        id: "titan-xp",
        name: "Titan Xp",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/titan-xp.png",

        vram: "12GB",
        memoryType: "GDDR5X",
        busWidth: "384-bit",
        memorySpeed: "11.4 Gbps",
        memoryBandwidth: "547 GB/s",

        baseClock: "1480 MHz",
        boostClock: "1582 MHz",

        cudaCores: 3840,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "250W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort + HDMI + DVI",
        maxResolution: "7680x4320",

        generation: "Titan"
    },

    {
        id: "titan-x",
        name: "Titan X",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/titan-x.png",

        vram: "12GB",
        memoryType: "GDDR5",
        busWidth: "384-bit",
        memorySpeed: "10 Gbps",
        memoryBandwidth: "480 GB/s",

        baseClock: "1417 MHz",
        boostClock: "1531 MHz",

        cudaCores: 3584,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "16nm",
        tdp: "250W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "3x DisplayPort + HDMI + DVI",
        maxResolution: "7680x4320",

        generation: "Titan"
    },


    // =========================================================
    // NVIDIA GT
    // =========================================================

    {
        id: "gt-1030",
        name: "GeForce GT 1030",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gt-1030.png",

        vram: "2GB",
        memoryType: "GDDR5",
        busWidth: "64-bit",
        memorySpeed: "6 Gbps",
        memoryBandwidth: "48 GB/s",

        baseClock: "1227 MHz",
        boostClock: "1468 MHz",

        cudaCores: 384,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Pascal",
        process: "14nm",
        tdp: "30W",

        powerConnector: "None",
        pcie: "PCIe 3.0 x4",

        directX: "12",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "HDMI + DisplayPort / DVI",
        maxResolution: "7680x4320",

        generation: "GT"
    },

    {
        id: "gt-710",
        name: "GeForce GT 710",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/gt-710.png",

        vram: "2GB",
        memoryType: "DDR3",
        busWidth: "64-bit",
        memorySpeed: "1.8 Gbps",
        memoryBandwidth: "14.4 GB/s",

        baseClock: "954 MHz",
        boostClock: "954 MHz",

        cudaCores: 192,
        rtCores: 0,
        tensorCores: 0,

        architecture: "Kepler",
        process: "28nm",
        tdp: "19W",

        powerConnector: "None",
        pcie: "PCIe 2.0 x8",

        directX: "12",
        vulkan: "1.1",
        openGL: "4.6",

        rayTracing: false,
        dlss: "None",
        frameGeneration: false,

        encoder: "None",
        decoder: "PureVideo",

        displayOutputs: "HDMI + DVI + VGA",
        maxResolution: "2560x1600",

        generation: "GT"
    },


    // =========================================================
    // AMD FIREPRO
    // =========================================================

    {
        id: "firepro-w9100",
        name: "FirePro W9100",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/firepro-w9100.png",

        vram: "32GB",
        memoryType: "GDDR5",
        busWidth: "512-bit",
        memorySpeed: "5 Gbps",
        memoryBandwidth: "320 GB/s",

        baseClock: "930 MHz",
        boostClock: "930 MHz",

        streamProcessors: 2816,
        rayAccelerators: 0,

        architecture: "GCN",
        process: "28nm",
        tdp: "275W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.0",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "None",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "6x Mini DisplayPort",
        maxResolution: "4096x2160",

        generation: "FirePro"
    },

    {
        id: "firepro-w8100",
        name: "FirePro W8100",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/firepro-w8100.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "512-bit",
        memorySpeed: "5 Gbps",
        memoryBandwidth: "320 GB/s",

        baseClock: "824 MHz",
        boostClock: "824 MHz",

        streamProcessors: 2560,
        rayAccelerators: 0,

        architecture: "GCN",
        process: "28nm",
        tdp: "220W",

        powerConnector: "1x 6-pin + 1x 8-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.0",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "None",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "4x DisplayPort",
        maxResolution: "4096x2160",

        generation: "FirePro"
    },

    {
        id: "firepro-w7100",
        name: "FirePro W7100",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/firepro-w7100.png",

        vram: "8GB",
        memoryType: "GDDR5",
        busWidth: "256-bit",
        memorySpeed: "5 Gbps",
        memoryBandwidth: "160 GB/s",

        baseClock: "950 MHz",
        boostClock: "950 MHz",

        streamProcessors: 1792,
        rayAccelerators: 0,

        architecture: "GCN",
        process: "28nm",
        tdp: "150W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 3.0 x16",

        directX: "12",
        vulkan: "1.0",
        openGL: "4.6",

        rayTracing: false,
        upscaling: "None",
        frameGeneration: false,

        encoder: "VCE",
        decoder: "UVD",

        displayOutputs: "4x DisplayPort",
        maxResolution: "4096x2160",

        generation: "FirePro"
    },


    // =========================================================
    // NVIDIA RTX PROFESSIONAL
    // =========================================================

    {
        id: "rtx-a6000",
        name: "RTX A6000",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-a6000.png",

        vram: "48GB",
        memoryType: "GDDR6",
        busWidth: "384-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "768 GB/s",

        baseClock: "1410 MHz",
        boostClock: "1800 MHz",

        cudaCores: 10752,
        rtCores: 84,
        tensorCores: 336,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "300W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "4x DisplayPort 1.4",
        maxResolution: "7680x4320",

        generation: "RTX A"
    },

    {
        id: "rtx-a5000",
        name: "RTX A5000",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-a5000.png",

        vram: "24GB",
        memoryType: "GDDR6",
        busWidth: "384-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "768 GB/s",

        baseClock: "1170 MHz",
        boostClock: "1695 MHz",

        cudaCores: 8192,
        rtCores: 64,
        tensorCores: 256,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "230W",

        powerConnector: "1x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "4x DisplayPort 1.4",
        maxResolution: "7680x4320",

        generation: "RTX A"
    },

    {
        id: "rtx-a4000",
        name: "RTX A4000",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-a4000.png",

        vram: "16GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "14 Gbps",
        memoryBandwidth: "448 GB/s",

        baseClock: "735 MHz",
        boostClock: "1560 MHz",

        cudaCores: 6144,
        rtCores: 48,
        tensorCores: 192,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "140W",

        powerConnector: "1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "4x DisplayPort 1.4",
        maxResolution: "7680x4320",

        generation: "RTX A"
    },

    {
        id: "rtx-a2000",
        name: "RTX A2000",
        type: "GPU",
        brand: "NVIDIA",
        image: "images/gpu/rtx-a2000.png",

        vram: "12GB",
        memoryType: "GDDR6",
        busWidth: "192-bit",
        memorySpeed: "12 Gbps",
        memoryBandwidth: "288 GB/s",

        baseClock: "562 MHz",
        boostClock: "1200 MHz",

        cudaCores: 3328,
        rtCores: 26,
        tensorCores: 104,

        architecture: "Ampere",
        process: "Samsung 8N",
        tdp: "70W",

        powerConnector: "None",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        dlss: "DLSS 2",
        frameGeneration: false,

        encoder: "NVENC",
        decoder: "NVDEC",

        displayOutputs: "4x Mini DisplayPort 1.4",
        maxResolution: "7680x4320",

        generation: "RTX A"
    },


    // =========================================================
    // AMD RADEON PRO
    // =========================================================

    {
        id: "radeon-pro-w7900",
        name: "Radeon Pro W7900",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/radeon-pro-w7900.png",

        vram: "48GB",
        memoryType: "GDDR6",
        busWidth: "384-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "864 GB/s",

        baseClock: "1855 MHz",
        gameClock: "2245 MHz",
        boostClock: "2499 MHz",

        streamProcessors: 6144,
        rayAccelerators: 96,

        architecture: "RDNA 3",
        process: "TSMC 5nm",
        tdp: "295W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "3x DisplayPort 2.1 + Mini DisplayPort",
        maxResolution: "7680x4320",

        generation: "Radeon Pro"
    },

    {
        id: "radeon-pro-w7800",
        name: "Radeon Pro W7800",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/radeon-pro-w7800.png",

        vram: "32GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "18 Gbps",
        memoryBandwidth: "576 GB/s",

        baseClock: "1855 MHz",
        gameClock: "2124 MHz",
        boostClock: "2499 MHz",

        streamProcessors: 4480,
        rayAccelerators: 70,

        architecture: "RDNA 3",
        process: "TSMC 5nm",
        tdp: "260W",

        powerConnector: "2x 8-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.3",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: true,

        encoder: "AMD Media Engine",
        decoder: "AMD Media Engine",

        displayOutputs: "4x DisplayPort 2.1",
        maxResolution: "7680x4320",

        generation: "Radeon Pro"
    },

    {
        id: "radeon-pro-w6800",
        name: "Radeon Pro W6800",
        type: "GPU",
        brand: "AMD",
        image: "images/gpu/radeon-pro-w6800.png",

        vram: "32GB",
        memoryType: "GDDR6",
        busWidth: "256-bit",
        memorySpeed: "16 Gbps",
        memoryBandwidth: "512 GB/s",

        baseClock: "1700 MHz",
        boostClock: "2310 MHz",

        streamProcessors: 3840,
        rayAccelerators: 60,

        architecture: "RDNA 2",
        process: "TSMC 7nm",
        tdp: "250W",

        powerConnector: "1x 8-pin + 1x 6-pin",
        pcie: "PCIe 4.0 x16",

        directX: "12 Ultimate",
        vulkan: "1.2",
        openGL: "4.6",

        rayTracing: true,
        upscaling: "FSR",
        frameGeneration: false,

        encoder: "AMD VCE",
        decoder: "AMD UVD",

        displayOutputs: "6x Mini DisplayPort 1.4",
        maxResolution: "7680x4320",

        generation: "Radeon Pro"
    }

];