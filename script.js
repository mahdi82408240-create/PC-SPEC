
/* =========================================================
   PC-SPEC v0.1
   Main Application
   ========================================================= */


/* =========================
   PRODUCT DATABASE
   ========================= */

const PRODUCTS = [
    ...(typeof GPU_DATA !== "undefined" ? GPU_DATA : []),
    ...(typeof CPU_DATA !== "undefined" ? CPU_DATA : [])
];


/* =========================
   STORAGE
   ========================= */

const STORAGE_KEY = "pcspec_saved_products";

let savedProducts = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
);


/* =========================
   DOM
   ========================= */

const pages = document.querySelectorAll(".page");

const navItems = document.querySelectorAll(".nav-item");

const exploreBtn =
    document.getElementById("exploreBtn");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");

const clearSearch =
    document.getElementById("clearSearch");

const savedResults =
    document.getElementById("savedResults");

const categoryResults =
    document.getElementById("categoryResults");

const categoryCards =
    document.querySelectorAll(".category-card");

const productDetails =
    document.getElementById("productDetails");

const backButton =
    document.getElementById("backButton");


/* =========================
   PAGE NAVIGATION
   ========================= */

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target =
        document.getElementById(pageId);

    if (!target) return;

    target.classList.add("active");


    navItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageId
        );

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   BOTTOM NAV
   ========================= */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageId =
            item.dataset.page;

        showPage(pageId);

        if (pageId === "savedPage") {
            renderSaved();
        }

        if (pageId === "categoriesPage") {
            categoryResults.innerHTML = "";
        }

    });

});


/* =========================
   EXPLORE BUTTON
   ========================= */

if (exploreBtn) {

    exploreBtn.addEventListener(
        "click",
        () => {

            showPage("categoriesPage");

        }
    );

}


/* =========================
   SEARCH
   ========================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();

            updateClearButton(query);

            searchProducts(query);

        }
    );

}


/* =========================
   CLEAR SEARCH
   ========================= */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            clearSearch.classList.remove(
                "visible"
            );

            renderSearchEmpty();

            searchInput.focus();

        }
    );

}


function updateClearButton(query) {

    if (!clearSearch) return;

    clearSearch.classList.toggle(
        "visible",
        query.length > 0
    );

}


/* =========================
   SEARCH PRODUCTS
   ========================= */

function searchProducts(query) {

    if (!query) {

        renderSearchEmpty();

        return;

    }


    const results =
        PRODUCTS.filter(product => {

            const name =
                product.name
                    ?.toLowerCase() || "";

            const brand =
                product.brand
                    ?.toLowerCase() || "";

            const type =
                product.type
                    ?.toLowerCase() || "";

            return (
                name.includes(query) ||
                brand.includes(query) ||
                type.includes(query)
            );

        });


    renderProducts(
        searchResults,
        results,
        `نتیجه‌ای برای «${query}» پیدا نشد`
    );

}


/* =========================
   SEARCH EMPTY
   ========================= */

function renderSearchEmpty() {

    if (!searchResults) return;

    searchResults.innerHTML = `
        <div class="empty-search">

            <div class="empty-icon">⌕</div>

            <p>
                نام یک قطعه را جستجو کنید
            </p>

        </div>
    `;
}


/* =========================
   RENDER PRODUCTS
   ========================= */

function renderProducts(
    container,
    products,
    emptyMessage
) {

    if (!container) return;


    if (!products.length) {

        container.innerHTML = `
            <div class="empty-search">

                <div class="empty-icon">⌕</div>

                <p>
                    ${emptyMessage}
                </p>

            </div>
        `;

        return;

    }


    container.innerHTML =
        products
            .map(product => createProductCard(product))
            .join("");


    attachProductEvents(container);

}


/* =========================
   PRODUCT CARD
   ========================= */

function createProductCard(product) {

    const isSaved =
        savedProducts.includes(product.id);


    const meta = [];


    if (product.brand) {
        meta.push(product.brand);
    }

    if (product.type) {
        meta.push(product.type);
    }

    if (product.vram) {
        meta.push(product.vram);
    }

    if (product.cores) {
        meta.push(`${product.cores} هسته`);
    }


    return `
        <article
            class="product-card"
            data-id="${product.id}"
        >

            <div class="product-image">

                <img
                    src="${product.image || ""}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

            </div>


            <div class="product-info">

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-meta">

                    ${meta.map((item, index) => `
                        <span class="${
                            index === 0
                                ? "product-type"
                                : ""
                        }">
                            ${item}
                        </span>
                    `).join("")}

                </div>

            </div>


            <button
                class="save-btn ${
                    isSaved ? "saved" : ""
                }"
                data-save-id="${product.id}"
                aria-label="ذخیره"
            >
                ${isSaved ? "♥" : "♡"}
            </button>

        </article>
    `;
}


/* =========================
   PRODUCT EVENTS
   ========================= */

function attachProductEvents(container) {

    const cards =
        container.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(".save-btn")
                ) {
                    return;
                }


                const id =
                    card.dataset.id;

                openProduct(id);

            }
        );

    });


    const saveButtons =
        container.querySelectorAll(
            ".save-btn"
        );


    saveButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const id =
                    button.dataset.saveId;

                toggleSaved(id);

            }
        );

    });

}


/* =========================
   SAVE / UNSAVE
   ========================= */

function toggleSaved(id) {

    const index =
        savedProducts.indexOf(id);


    if (index === -1) {

        savedProducts.push(id);

    } else {

        savedProducts.splice(index, 1);

    }


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedProducts)
    );


    refreshCurrentResults();

}


/* =========================
   REFRESH RESULTS
   ========================= */

function refreshCurrentResults() {

    const query =
        searchInput?.value
            .trim()
            .toLowerCase() || "";


    if (query) {

        searchProducts(query);

    }


    renderSaved();

}


/* =========================
   SAVED PRODUCTS
   ========================= */

function renderSaved() {

    if (!savedResults) return;


    const products =
        PRODUCTS.filter(product =>
            savedProducts.includes(product.id)
        );


    if (!products.length) {

        savedResults.innerHTML = `
            <div class="empty-saved">

                <div class="empty-icon">♡</div>

                <p>
                    هنوز قطعه‌ای ذخیره نکرده‌اید
                </p>

            </div>
        `;

        return;

    }


    renderProducts(
        savedResults,
        products,
        "هنوز قطعه‌ای ذخیره نکرده‌اید"
    );

}


/* =========================
   CATEGORIES
   ========================= */

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const category =
                card.dataset.category;

            showCategory(category);

        }
    );

});


function showCategory(category) {

    const products =
        PRODUCTS.filter(product =>
            product.type === category
        );


    renderProducts(
        categoryResults,
        products,
        "قطعه‌ای در این دسته وجود ندارد"
    );


    categoryResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================
   PRODUCT DETAILS
   ========================= */

function openProduct(id) {

    const product =
        PRODUCTS.find(
            item => item.id === id
        );


    if (!product) return;


    const isSaved =
        savedProducts.includes(product.id);


    productDetails.innerHTML = `
        <div class="product-detail">

            <div class="product-hero">

                <div class="product-detail-image">

                    <img
                        src="${product.image || ""}"
                        alt="${product.name}"
                        onerror="this.style.display='none'"
                    >

                </div>


                <div class="product-detail-name">
                    ${product.name}
                </div>


                <div class="product-detail-brand">
                    ${product.brand || ""}
                </div>


                <button
                    class="save-btn ${
                        isSaved ? "saved" : ""
                    }"
                    id="detailSaveButton"
                    style="
                        margin: 18px auto 0;
                    "
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>


            <div class="specs">

                ${createSpecs(product)}

            </div>

        </div>
    `;


    const detailSaveButton =
        document.getElementById(
            "detailSaveButton"
        );


    if (detailSaveButton) {

        detailSaveButton.addEventListener(
            "click",
            () => {

                toggleSaved(product.id);

                openProduct(product.id);

            }
        );

    }


    showPage("productPage");

}


/* =========================
   PRODUCT SPECS
   ========================= */

function createSpecs(product) {

    const ignored = [
        "id",
        "name",
        "type",
        "brand",
        "image"
    ];


    return Object.entries(product)

        .filter(([key]) =>
            !ignored.includes(key)
        )

        .map(([key, value]) => {

            const label =
                formatSpecName(key);


            return `
                <div class="spec">

                    <div class="spec-label">
                        ${label}
                    </div>

                    <div class="spec-value">
                        ${value}
                    </div>

                </div>
            `;

        })

        .join("");

}


/* =========================
   SPEC LABELS
   ========================= */

function formatSpecName(key) {

    const names = {

        vram: "حافظه گرافیکی",

        cores: "هسته‌ها",

        threads: "رشته‌ها",

        frequency: "فرکانس",

        boost: "فرکانس بوست",

        architecture: "معماری",

        socket: "سوکت",

        tdp: "توان مصرفی",

        process: "فرآیند ساخت",

        memory: "نوع حافظه"

    };


    return names[key] || key;

}


/* =========================
   BACK BUTTON
   ========================= */

if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            showPage("homePage");

        }
    );

}



/* =========================
   INITIALIZE
   ========================= */

renderSaved();

showPage("homePage");

/* =========================================================
   PC-SPEC
   COMPLETE COMPARE SYSTEM
   Add to the END of script.js
========================================================= */

(() => {

    "use strict";


    /* =====================================================
       STATE
    ===================================================== */

    let compareSlot = null;

    let compareItems = {
        1: null,
        2: null
    };


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const slot1 =
        document.getElementById("compareSlot1");

    const slot2 =
        document.getElementById("compareSlot2");

    const compareSelection =
        document.getElementById("compareSelection");

    const compareSearchInput =
        document.getElementById("compareSearchInput");

    const compareProductList =
        document.getElementById("compareProductList");

    const closeCompareSelection =
        document.getElementById("closeCompareSelection");

    const compareResult =
        document.getElementById("compareResult");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !slot1 ||
        !slot2 ||
        !compareSelection ||
        !compareSearchInput ||
        !compareProductList ||
        !closeCompareSelection ||
        !compareResult
    ) {

        console.warn(
            "PC-SPEC Compare: required HTML elements were not found."
        );

        return;
    }


    /* =====================================================
       DATABASE
    ===================================================== */

    function getCPUData() {

        if (
            typeof CPU_DATA !== "undefined" &&
            Array.isArray(CPU_DATA)
        ) {

            return CPU_DATA;

        }

        return [];
    }


    function getGPUData() {

        if (
            typeof GPU_DATA !== "undefined" &&
            Array.isArray(GPU_DATA)
        ) {

            return GPU_DATA;

        }

        return [];
    }


    function getAllProducts() {

        return [
            ...getCPUData(),
            ...getGPUData()
        ];
    }


    /* =====================================================
       FIND PRODUCT
    ===================================================== */

    function findProductById(id) {

        return getAllProducts().find(
            product =>
                String(product.id) === String(id)
        );
    }


    /* =====================================================
       OPEN SELECTOR
    ===================================================== */

    function openCompareSelector(slotNumber) {

        compareSlot = slotNumber;

        compareSelection.classList.add("active");

        compareSearchInput.value = "";

        renderCompareProducts();

        setTimeout(() => {

            compareSearchInput.focus();

        }, 100);
    }


    /* =====================================================
       CLOSE SELECTOR
    ===================================================== */

    function closeSelector() {

        compareSelection.classList.remove("active");

        compareSearchInput.value = "";

        compareSlot = null;
    }


    /* =====================================================
       GET OTHER SLOT
    ===================================================== */

    function getOtherSlotProduct(slotNumber) {

        if (slotNumber === 1) {

            return compareItems[2];

        }

        return compareItems[1];
    }


    /* =====================================================
       REQUIRED TYPE
    ===================================================== */

    function getRequiredType(slotNumber) {

        const otherProduct =
            getOtherSlotProduct(slotNumber);

        if (!otherProduct) {

            return null;

        }

        return otherProduct.type;
    }


    /* =====================================================
       NORMALIZE SEARCH
    ===================================================== */

    function normalizeSearch(value) {

        return String(value || "")
            .trim()
            .toLocaleLowerCase("fa-IR")
            .replace(/ي/g, "ی")
            .replace(/ك/g, "ک");
    }


    /* =====================================================
       SEARCH MATCH
    ===================================================== */

    function productMatchesSearch(product, search) {

        if (!search) {

            return true;

        }

        const name =
            normalizeSearch(product.name);

        const brand =
            normalizeSearch(product.brand);

        const id =
            normalizeSearch(product.id);

        return (
            name.includes(search) ||
            brand.includes(search) ||
            id.includes(search)
        );
    }


    /* =====================================================
       RENDER PRODUCT PICKER
    ===================================================== */

    function renderCompareProducts() {

        const search =
            normalizeSearch(
                compareSearchInput.value
            );


        let products =
            getAllProducts();


        /* -----------------------------------------------
           SAME TYPE ONLY
        ------------------------------------------------ */

        const requiredType =
            getRequiredType(compareSlot);


        if (requiredType) {

            products =
                products.filter(
                    product =>
                        product.type === requiredType
                );

        }


        /* -----------------------------------------------
           SEARCH
        ------------------------------------------------ */

        products =
            products.filter(
                product =>
                    productMatchesSearch(
                        product,
                        search
                    )
            );


        /* -----------------------------------------------
           EMPTY
        ------------------------------------------------ */

        if (!products.length) {

            compareProductList.innerHTML = `

                <div class="compare-empty">

                    <div style="
                        font-size:28px;
                        margin-bottom:10px;
                    ">
                        ⌕
                    </div>

                    <div>
                        قطعه‌ای پیدا نشد
                    </div>

                </div>

            `;

            return;
        }


        /* -----------------------------------------------
           PRODUCTS
        ------------------------------------------------ */

        compareProductList.innerHTML =
            products.map(
                product =>
                    createCompareProductOption(product)
            ).join("");


        /* -----------------------------------------------
           EVENTS
        ------------------------------------------------ */

        compareProductList
            .querySelectorAll(
                ".compare-product-option"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            button.dataset.id;

                        selectCompareProduct(id);

                    }
                );

            });

    }


    /* =====================================================
       PRODUCT OPTION HTML
    ===================================================== */

    function createCompareProductOption(product) {

        const image =
            product.image || "";


        const name =
            product.name || "Unknown";


        const brand =
            product.brand || "";


        const type =
            product.type || "";


        return `

            <button
                class="compare-product-option"
                data-id="${escapeCompareHTML(product.id)}"
                type="button"
            >

                <div class="compare-option-image">

                    ${
                        image

                        ? `

                            <img
                                src="${escapeCompareHTML(image)}"
                                alt="${escapeCompareHTML(name)}"
                                loading="lazy"
                            >

                          `

                        : `

                            <span>?</span>

                          `
                    }

                </div>


                <div class="compare-option-info">

                    <strong>
                        ${escapeCompareHTML(name)}
                    </strong>

                    <span>
                        ${escapeCompareHTML(brand)}
                        ${type ? ` • ${escapeCompareHTML(type)}` : ""}
                    </span>

                </div>


                <div class="compare-option-arrow">
                    ←
                </div>

            </button>

        `;
    }


    /* =====================================================
       SELECT PRODUCT
    ===================================================== */

    function selectCompareProduct(productId) {

        const product =
            findProductById(productId);


        if (!product) {

            return;

        }


        if (!compareSlot) {

            return;

        }


        /* -----------------------------------------------
           DON'T ALLOW SAME PRODUCT TWICE
        ------------------------------------------------ */

        const otherProduct =
            getOtherSlotProduct(compareSlot);


        if (
            otherProduct &&
            String(otherProduct.id) ===
            String(product.id)
        ) {

            alert(
                "نمی‌توان یک قطعه را دوبار مقایسه کرد."
            );

            return;
        }


        /* -----------------------------------------------
           SAME TYPE CHECK
        ------------------------------------------------ */

        if (
            otherProduct &&
            otherProduct.type !== product.type
        ) {

            alert(
                "فقط قطعات هم‌نوع را می‌توان مقایسه کرد."
            );

            return;
        }


        /* -----------------------------------------------
           SAVE
        ------------------------------------------------ */

        compareItems[compareSlot] =
            product;


        closeSelector();


        renderCompareSlots();

        renderCompareResult();

    }


    /* =====================================================
       RENDER SLOTS
    ===================================================== */

    function renderCompareSlots() {

        renderCompareSlot(
            slot1,
            compareItems[1]
        );


        renderCompareSlot(
            slot2,
            compareItems[2]
        );

    }


    /* =====================================================
       RENDER SINGLE SLOT
    ===================================================== */

    function renderCompareSlot(
        element,
        product
    ) {

        if (!product) {

            element.classList.remove(
                "selected"
            );


            element.innerHTML = `

                <span class="compare-plus">
                    +
                </span>

                <span>
                    انتخاب قطعه
                </span>

            `;

            return;
        }


        element.classList.add(
            "selected"
        );


        element.innerHTML = `

            <span
                class="compare-remove"
                title="حذف"
            >
                ×
            </span>


            <div class="compare-slot-image">

                ${
                    product.image

                    ? `

                        <img
                            src="${escapeCompareHTML(product.image)}"
                            alt="${escapeCompareHTML(product.name)}"
                            loading="lazy"
                        >

                      `

                    : `

                        <span>?</span>

                      `
                }

            </div>


            <strong>
                ${escapeCompareHTML(product.name)}
            </strong>


            <small>
                ${escapeCompareHTML(product.brand || "")}
            </small>

        `;


        /* -----------------------------------------------
           REMOVE
        ------------------------------------------------ */

        const removeButton =
            element.querySelector(
                ".compare-remove"
            );


        if (removeButton) {

            removeButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    if (element === slot1) {

                        compareItems[1] = null;

                    } else {

                        compareItems[2] = null;

                    }


                    renderCompareSlots();

                    renderCompareResult();

                }
            );

        }

    }


    /* =====================================================
       GET ALL COMPARISON FIELDS
    ===================================================== */

    function getComparisonFields(
        first,
        second
    ) {

        if (!first || !second) {

            return [];

        }


        const firstKeys =
            Object.keys(first);


        const secondKeys =
            Object.keys(second);


        /*
         * Combine all keys from both products.
         * Set removes duplicates.
         */

        const allKeys =
            [
                ...firstKeys,
                ...secondKeys
            ];


        const uniqueKeys =
            [...new Set(allKeys)];


        /*
         * Internal fields that shouldn't appear
         * inside the specification table.
         */

        const hiddenFields = [

            "id",
            "name",
            "type",
            "brand",
            "image"

        ];


        return uniqueKeys.filter(
            key =>
                !hiddenFields.includes(key)
        );

    }


    /* =====================================================
       LABELS
    ===================================================== */

    function getCompareLabel(key) {

        const labels = {

            /* -------------------------------------------
               CPU
            ------------------------------------------- */

            cores:
                "هسته",

            threads:
                "رشته",

            frequency:
                "فرکانس پایه",

            boost:
                "فرکانس Boost",

            architecture:
                "معماری",

            socket:
                "سوکت",

            process:
                "فرآیند ساخت",

            tdp:
                "TDP",

            cache:
                "کش",

            memorySupport:
                "پشتیبانی حافظه",

            integratedGraphics:
                "گرافیک مجتمع",

            generation:
                "نسل",


            /* -------------------------------------------
               GPU
            ------------------------------------------- */

            vram:
                "حافظه VRAM",

            memory:
                "نوع حافظه",

            memoryBus:
                "باس حافظه",

            memoryClock:
                "کلاک حافظه",

            coreClock:
                "کلاک هسته",

            boostClock:
                "کلاک Boost",

            cudaCores:
                "هسته‌های CUDA",

            streamProcessors:
                "Stream Processors",

            rayTracing:
                "Ray Tracing",

            tensorCores:
                "هسته‌های Tensor",

            interface:
                "رابط",

            power:
                "توان مصرفی",

            connector:
                "کانکتور برق",

            length:
                "طول کارت",

            width:
                "عرض کارت",

            slots:
                "تعداد اسلات",


            /* -------------------------------------------
               GENERAL
            ------------------------------------------- */

            model:
                "مدل",

            manufacturer:
                "سازنده",

            releaseDate:
                "تاریخ عرضه"

        };


        if (
            Object.prototype.hasOwnProperty.call(
                labels,
                key
            )
        ) {

            return labels[key];

        }


        /*
         * Unknown field:
         *
         * memory_type
         * memoryType
         * boost_clock
         *
         * become readable automatically.
         */

        return makeReadableLabel(key);

    }


    /* =====================================================
       MAKE UNKNOWN KEY READABLE
    ===================================================== */

    function makeReadableLabel(key) {

        let result =
            String(key || "");


        /*
         * camelCase
         */

        result =
            result.replace(
                /([a-z])([A-Z])/g,
                "$1 $2"
            );


        /*
         * snake_case
         */

        result =
            result.replace(
                /[_-]+/g,
                " "
            );


        /*
         * Multiple spaces
         */

        result =
            result.replace(
                /\s+/g,
                " "
            );


        /*
         * Trim
         */

        result =
            result.trim();


        if (!result) {

            return "مشخصات";

        }


        /*
         * First letter uppercase
         */

        return result.charAt(0).toUpperCase()
            + result.slice(1);

    }


    /* =====================================================
       GET PRODUCT VALUE
    ===================================================== */

    function getProductValue(
        product,
        key
    ) {

        if (
            !product ||
            !Object.prototype.hasOwnProperty.call(
                product,
                key
            )
        ) {

            return "—";

        }


        const value =
            product[key];


        if (
            value === undefined ||
            value === null ||
            value === ""
        ) {

            return "—";

        }


        /*
         * Support arrays
         */

        if (Array.isArray(value)) {

            return value.join(", ");

        }


        /*
         * Support objects
         */

        if (
            typeof value === "object"
        ) {

            try {

                return JSON.stringify(
                    value
                );

            } catch {

                return "—";

            }

        }


        return String(value);

    }


    /* =====================================================
       RENDER COMPARISON
    ===================================================== */

    function renderCompareResult() {

        const first =
            compareItems[1];


        const second =
            compareItems[2];


        /* -----------------------------------------------
           NOTHING SELECTED
        ------------------------------------------------ */

        if (!first && !second) {

            compareResult.innerHTML = `

                <div class="compare-placeholder">

                    <div class="compare-placeholder-icon">
                        ⇄
                    </div>

                    <h3>
                        دو قطعه را انتخاب کنید
                    </h3>

                    <p>
                        دو CPU یا دو GPU انتخاب کنید
                        تا مشخصات آن‌ها کنار هم نمایش داده شود.
                    </p>

                </div>

            `;

            return;
        }


        /* -----------------------------------------------
           ONLY ONE
        ------------------------------------------------ */

        if (
            (first && !second) ||
            (!first && second)
        ) {

            compareResult.innerHTML = `

                <div class="compare-placeholder">

                    <div class="compare-placeholder-icon">
                        +
                    </div>

                    <h3>
                        قطعه دوم را انتخاب کنید
                    </h3>

                    <p>
                        برای شروع مقایسه،
                        یک قطعه ${first?.type === "GPU" || second?.type === "GPU"
                            ? "GPU"
                            : "CPU"}
                        دیگر انتخاب کنید.
                    </p>

                </div>

            `;

            return;
        }


        /* -----------------------------------------------
           TYPE CHECK
        ------------------------------------------------ */

        if (
            first.type !== second.type
        ) {

            compareResult.innerHTML = `

                <div class="compare-warning">

                    برای مقایسه، هر دو قطعه باید
                    از یک نوع باشند.

                </div>

            `;

            return;
        }


        /* -----------------------------------------------
           FIELDS
        ------------------------------------------------ */

        const fields =
            getComparisonFields(
                first,
                second
            );


        /* -----------------------------------------------
           RESULT HEADER
        ------------------------------------------------ */

        let html = `

            <div class="compare-header">

                <div>

                    <span>
                        مقایسه کامل مشخصات
                    </span>

                    <small>
                        ${first.type === "CPU"
                            ? "پردازنده"
                            : "کارت گرافیک"}
                    </small>

                </div>

            </div>


            <div class="compare-table">

        `;


        /* -----------------------------------------------
           ROWS
        ------------------------------------------------ */

        fields.forEach(
            key => {

                const value1 =
                    getProductValue(
                        first,
                        key
                    );


                const value2 =
                    getProductValue(
                        second,
                        key
                    );


                const label =
                    getCompareLabel(
                        key
                    );


                html += `

                    <div class="compare-row">

                        <div class="compare-value">

                            ${escapeCompareHTML(
                                value1
                            )}

                        </div>


                        <div class="compare-label">

                            ${escapeCompareHTML(
                                label
                            )}

                        </div>


                        <div class="compare-value">

                            ${escapeCompareHTML(
                                value2
                            )}

                        </div>

                    </div>

                `;

            }
        );


        html += `

            </div>

        `;


        compareResult.innerHTML =
            html;

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeCompareHTML(
        value
    ) {

        return String(
            value ?? ""
        )
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       EVENTS
    ===================================================== */

    slot1.addEventListener(
        "click",
        () => {

            openCompareSelector(1);

        }
    );


    slot2.addEventListener(
        "click",
        () => {

            openCompareSelector(2);

        }
    );


    closeCompareSelection.addEventListener(
        "click",
        () => {

            closeSelector();

        }
    );


    compareSearchInput.addEventListener(
        "input",
        () => {

            renderCompareProducts();

        }
    );


    /* =====================================================
       CLOSE WHEN CLICKING BACKDROP
    ===================================================== */

    compareSelection.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                compareSelection
            ) {

                closeSelector();

            }

        }
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                compareSelection.classList.contains(
                    "active"
                )
            ) {

                closeSelector();

            }

        }
    );


    /* =====================================================
       INITIAL
    ===================================================== */

    renderCompareSlots();

    renderCompareResult();


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.PCSPEC_COMPARE = {

        reset() {

            compareItems = {
                1: null,
                2: null
            };

            renderCompareSlots();

            renderCompareResult();

        },


        getItems() {

            return {

                first:
                    compareItems[1],

                second:
                    compareItems[2]

            };

        },


        getAllProducts() {

            return getAllProducts();

        },


        refresh() {

            renderCompareProducts();

            renderCompareSlots();

            renderCompareResult();

        }

    };


})();