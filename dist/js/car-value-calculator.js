(() => {
    var __webpack_modules__ = {
        678: () => {
            if (!Array.prototype.includes) Object.defineProperty(Array.prototype, "includes", {
                value: function(searchElement, fromIndex) {
                    if (this == null) throw new TypeError('"this" is null or not defined');
                    var o = Object(this);
                    var len = o.length >>> 0;
                    if (len === 0) return false;
                    var n = fromIndex | 0;
                    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                    while (k < len) {
                        if (o[k] === searchElement) return true;
                        k++;
                    }
                    return false;
                }
            });
        },
        195: () => {
            const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
            const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
            const concat = Function.bind.call(Function.call, Array.prototype.concat);
            const keys = Object.keys;
            if (!Object.entries) Object.entries = function entries(O) {
                return reduce(keys(O), ((e, k) => concat(e, typeof k === "string" && isEnumerable(O, k) ? [ [ k, O[k] ] ] : [])), []);
            };
        },
        740: () => {
            if (typeof Object.getPrototypeOf !== "function") Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function(object) {
                return object.__proto__;
            } : function(object) {
                return object.constructor.prototype;
            };
        },
        512: () => {
            if (!String.prototype.includes) String.prototype.includes = function(search, start) {
                if (typeof start !== "number") start = 0;
                if (start + search.length > this.length) return false; else return this.indexOf(search, start) !== -1;
            };
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function DynamicAdapt(type) {
            this.type = type;
            this.resizeTimeout;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                this.оbjects.push(оbject);
            }
            this.оbjects.forEach(((оbject, index) => {
                оbject.element.dataset.daIndex = index;
            }));
            window.addEventListener("resize", (function() {
                clearTimeout(_this.resizeTimeout);
                _this.resizeTimeout = setTimeout((function() {
                    _this.mediaHandler();
                }), 0);
            }));
            this.mediaHandler();
        };
        DynamicAdapt.prototype.mediaHandler = function() {
            for (let i = 0; i < this.оbjects.length; i++) {
                const оbject = this.оbjects[i];
                const matchMedia = window.matchMedia("(max-width: " + оbject.breakpoint + "px)");
                if (matchMedia.matches) this.delayedMoveTo(оbject.place, оbject.element, оbject.destination); else if (оbject.element.classList.contains(this.daClassname)) this.delayedMoveBack(оbject.parent, оbject.element);
            }
        };
        DynamicAdapt.prototype.delayedMoveTo = function(place, element, destination) {
            setTimeout((() => {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) destination.appendChild(element); else if (place === "first") destination.insertBefore(element, destination.firstElementChild); else destination.insertBefore(element, destination.children[place]);
            }), 0);
        };
        DynamicAdapt.prototype.delayedMoveBack = function(parent, element) {
            setTimeout((() => {
                element.classList.remove(this.daClassname);
                const index = element.dataset.daIndex;
                const referenceElement = parent.children[index];
                parent.insertBefore(element, referenceElement);
            }), 0);
        };
        const da = new DynamicAdapt("max");
        da.init();
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                bodyLockStatus = false;
                if (delay) setTimeout((function() {
                    bodyLockStatus = true;
                    document.documentElement.style.removeProperty("--scrollbar-compensate");
                    document.documentElement.classList.remove("lock");
                }), delay); else {
                    bodyLockStatus = true;
                    document.documentElement.style.removeProperty("--scrollbar-compensate");
                    document.documentElement.classList.remove("lock");
                }
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const scrollbarCompensate = window.innerWidth - document.querySelector(".wrapper").offsetWidth;
                if (scrollbarCompensate > 0) document.documentElement.style.setProperty("--scrollbar-compensate", scrollbarCompensate + "px");
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                if (delay) setTimeout((function() {
                    bodyLockStatus = true;
                }), delay); else bodyLockStatus = true;
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) if (!spollerTitle.parentElement.hasAttribute("data-submenu-link")) spollerTitle.nextElementSibling.hidden = true;
                            } else if (!spollerTitle.parentElement.hasAttribute("data-submenu-link")) {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
                                hideSpollersBody(spollersBlock);
                                window.dispatchEvent(new CustomEvent("spoller-action", {
                                    detail: {
                                        spoller: spollerTitle
                                    }
                                }));
                            }
                            spollerTitle.classList.toggle("_spoller-active");
                            window.dispatchEvent(new CustomEvent("spoller-action", {
                                detail: {
                                    spoller: spollerTitle
                                }
                            }));
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    const isUnlock = !document.documentElement.classList.contains("menu-open");
                    if (isUnlock) {
                        bodyLock(300);
                        document.documentElement.classList.add("menu-open");
                    } else {
                        bodyUnlock(300);
                        document.documentElement.classList.remove("menu-open");
                    }
                }
            }));
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function showSubMenu() {
            const maxWidth = 991.98;
            const speedSlide = 400;
            const subMenuItems = document.querySelectorAll("[data-submenu-spoller]");
            const subMenus = document.querySelectorAll("[data-submenu]");
            const mediaQuery = window.matchMedia(`(max-width: ${991.98}px)`);
            const resizeEvent = new Event("resize");
            mediaQuery.addEventListener("change", (() => matchMediaQuery(mediaQuery)));
            matchMediaQuery(mediaQuery);
            if (subMenuItems.length) subMenuItems.forEach((item => {
                const subMenu = item.querySelector("[data-submenu]");
                window.dispatchEvent(resizeEvent);
                item.addEventListener("mouseenter", (() => {
                    if (!isMobile.any() && subMenu && window.innerWidth > maxWidth) item.classList.add("_open");
                    window.dispatchEvent(resizeEvent);
                }));
                item.addEventListener("mouseleave", (() => {
                    if (!isMobile.any() && subMenu && window.innerWidth > maxWidth) item.classList.remove("_open");
                }));
            }));
            document.addEventListener("click", (e => {
                const target = e.target;
                if (target.closest("[data-submenu-link]")) {
                    e.preventDefault();
                    const subMenuArrowBtn = target.closest("[data-submenu-link]");
                    const subMenu = subMenuArrowBtn.nextElementSibling;
                    const subMenuSpollerItem = subMenu.closest("[data-submenu-spoller]");
                    const isOpened = subMenuSpollerItem.classList.contains("_open");
                    window.innerWidth > maxWidth ? hideSubMenus(subMenuItems) : null;
                    if (isOpened && !subMenuSpollerItem.classList.contains("_slide")) if (window.innerWidth < maxWidth) {
                        subMenuSpollerItem.classList.add("_slide");
                        subMenuArrowBtn.classList.remove("_active");
                        _slideUp(subMenu, speedSlide);
                        setTimeout((() => {
                            subMenuSpollerItem.classList.remove("_open");
                            subMenuSpollerItem.classList.remove("_slide");
                        }), speedSlide);
                    } else subMenuSpollerItem.classList.remove("_open"); else if (!subMenuSpollerItem.classList.contains("_slide")) {
                        window.dispatchEvent(resizeEvent);
                        subMenuSpollerItem.classList.add("_slide");
                        subMenuSpollerItem.classList.add("_open");
                        subMenuArrowBtn.classList.add("_active");
                        if (window.innerWidth < maxWidth) {
                            _slideDown(subMenu, speedSlide);
                            setTimeout((() => {
                                subMenuSpollerItem.classList.remove("_slide");
                            }), speedSlide);
                        } else subMenuSpollerItem.classList.remove("_slide");
                    }
                } else if (!target.closest("[data-submenu-spoller]")) window.innerWidth > maxWidth ? hideSubMenus(subMenuItems) : null;
            }));
            function matchMediaQuery(mediaQuery) {
                if (mediaQuery.matches) {
                    document.querySelectorAll("[data-submenu-link]").forEach((elm => {
                        elm.classList.remove("_active");
                    }));
                    subMenus.forEach((menu => menu.setAttribute("hidden", "")));
                } else {
                    subMenus.forEach((menu => menu.removeAttribute("hidden")));
                    const resizeEvent = new Event("initPopperPosition");
                    window.dispatchEvent(resizeEvent);
                }
                hideSubMenus(subMenuItems);
            }
            function hideSubMenus(subMenuItems) {
                subMenuItems.forEach((item => item.classList.remove("_open")));
            }
        }
        function setFontSizeForTestimonials() {
            const basicTextLength = 22;
            const allTextReviews = document.querySelectorAll("[data-fontsize]");
            if (allTextReviews.length) allTextReviews.forEach((text => {
                const textLength = text.innerText.split(" ").length;
                if (textLength < basicTextLength) text.classList.add("_greater-text");
            }));
        }
        function formValidate() {
            const validateForms = document.querySelectorAll("[data-validate]");
            if (validateForms.length) validateForms.forEach((form => {
                const btnSubmit = form.querySelector('button[type="submit"]');
                const inputs = Array.from(form.querySelectorAll('input:not([type="hidden"]):not([data-no-required]), select, textarea'));
                const groupRadios = findRadioCheckboxGroup(form, "radio");
                const groupCheckbox = findRadioCheckboxGroup(form, "checkbox");
                [ groupRadios, groupCheckbox ].forEach((groupType => {
                    (groupType || []).forEach((group => inputs.push(group)));
                }));
                if (inputs.length > 0) {
                    form.addEventListener("submit", (e => {
                        checkInputs({
                            inputs,
                            form,
                            event: e
                        });
                    }));
                    form.addEventListener("update-validation", (e => {
                        checkInputs({
                            inputs,
                            form,
                            event: e
                        });
                    }));
                    btnSubmit && btnSubmit.addEventListener("click", (e => {
                        checkInputs({
                            inputs,
                            form,
                            event: e
                        });
                    }));
                    inputs.forEach((input => {
                        if (!Array.isArray(input)) {
                            input.addEventListener("input", (e => formatInput(input)));
                            input.addEventListener("change", (() => setTimeout((() => {
                                checkInput({
                                    input
                                });
                            }), 0)));
                            input.addEventListener("blur", (() => {
                                setTimeout((() => {
                                    if (input.value !== "") checkInput({
                                        input
                                    });
                                }), 0);
                            }));
                        }
                    }));
                    form.addEventListener("reset", (e => {
                        inputs.forEach((input => removeStatus({
                            input
                        })));
                    }));
                }
            }));
            async function checkInputs({inputs, form, event, onSuccessFormValidateCallback, onErrorFormValidateCallback}) {
                if (event) event.preventDefault();
                const isShowNotice = form?.hasAttribute("data-validate-notice");
                !isShowNotice ? form.reportValidity() : null;
                form.setAttribute("novalidate", true);
                let errors = 0;
                let firstErrorFound = false;
                form.dispatchEvent(new CustomEvent("start-validation"));
                for (const input of inputs) if (checkInput({
                    input
                })) {
                    errors++;
                    if (!firstErrorFound) {
                        scrollToInput({
                            input
                        });
                        firstErrorFound = true;
                    }
                }
                form.dispatchEvent(new CustomEvent("end-validation"));
                if (!errors) {
                    const successEvent = new Event("form-validation-success");
                    form.dispatchEvent(successEvent);
                    if (onSuccessFormValidateCallback) onSuccessFormValidateCallback();
                } else {
                    const errorEvent = new Event("form-validation-error");
                    form.dispatchEvent(errorEvent);
                    if (onErrorFormValidateCallback) onErrorFormValidateCallback();
                }
            }
            function checkInput({input, isTextNotice = false}) {
                let isError = false;
                if (!Array.isArray(input) && input.hasAttribute("data-skip-validation")) return isError = false;
                if (Array.isArray(input)) {
                    const isRequired = input.every((radioOrCheckbox => radioOrCheckbox.required === true));
                    let isGroupFilled = input.some((radioOrCheckbox => radioOrCheckbox.checked === true));
                    if (isRequired && !isGroupFilled) {
                        showTextNotice({
                            input,
                            text: "Choose value",
                            isTextNotice
                        });
                        return isError = true;
                    }
                    return isError = false;
                }
                const value = input.value.trim();
                if (input.required || input.hasAttribute("data-required") || value !== "") {
                    if (value === "") {
                        showTextNotice({
                            input,
                            text: "This field is required",
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (input.hasAttribute("data-math-field")) {
                        const forMathField = input.getAttribute("data-math-field");
                        const forMatchInput = input.form.querySelector("input[data-for-math]");
                        if (forMathField && forMatchInput && forMathField === forMatchInput.getAttribute("data-for-math")) if (input.value !== forMatchInput.value) {
                            showTextNotice({
                                input,
                                text: `This field must match ${forMathField} field`,
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.hasAttribute("data-number-format")) {
                        const isValidDecimal = /^(\d+([.,]\d+)?)?$/.test(value);
                        if (!isValidDecimal) {
                            showTextNotice({
                                input,
                                text: "Only numbers are allowed",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.hasAttribute("data-number-float-format")) {
                        const value = input.value;
                        const isValidDecimal = /^(\d+[.,]?\d*|\d*[.,]?\d+)$/g.test(value);
                        if (!isValidDecimal) {
                            showTextNotice({
                                input,
                                text: "Only valid numbers are allowed",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.hasAttribute("data-text-format")) if (!/^[a-zA-Z\s]+$/.test(value)) {
                        showTextNotice({
                            input,
                            text: `Only ${/[а-яА-Я]/.test(value) ? "Latin" : ""} letters are allowed`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (input.type === "email") if (value !== "" && !isEmailValid(input)) {
                        showTextNotice({
                            input,
                            text: "Your email address must be in the format of name@domain.com",
                            isTextNotice
                        });
                        return isError = true;
                    }
                    const minLength = input.hasAttribute("data-minlength") ? Number(input.dataset.minlength) : null;
                    const maxLength = input.hasAttribute("data-maxlength") ? Number(input.dataset.maxlength) : null;
                    if (minLength !== null && value.length < minLength) {
                        if (input.id == "year") showTextNotice({
                            input,
                            text: "Please enter the correct year",
                            isTextNotice
                        }); else showTextNotice({
                            input,
                            text: `Please enter at least ${minLength} characters`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (maxLength !== null && value.length > maxLength) {
                        showTextNotice({
                            input,
                            text: `Please enter less than ${minLength} characters`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    const minValue = input.hasAttribute("data-min-value") ? Number(input.dataset.minValue) : null;
                    const maxValue = input.hasAttribute("data-max-value") ? Number(input.dataset.maxValue) : null;
                    if (minValue !== null && Number(value) < minValue) {
                        showTextNotice({
                            input,
                            text: `Please enter a value greater than or equal to ${minValue}`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (maxValue !== null && Number(value) > maxValue) {
                        showTextNotice({
                            input,
                            text: `Please enter a value less than or equal to ${maxValue}`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (input.inputmask) {
                        const status = !input.inputmask.isComplete();
                        if (status && value !== "") {
                            showTextNotice({
                                input,
                                text: "Please enter full phone number",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.required || input.hasAttribute("data-required") || value !== "") if (isError) addError({
                        input
                    }); else if (input) removeError({
                        input
                    });
                } else if (value === "") removeStatus({
                    input
                }); else removeError({
                    input
                });
                return isError;
            }
            function formatInput(input) {
                if (input.hasAttribute("data-maxlength")) {
                    const maxLength = input.getAttribute("data-maxlength");
                    if (input.value.length > maxLength) input.value = input.value.slice(0, maxLength);
                }
                if (input.hasAttribute("data-number-format")) input.value = input.value.replace(/\D/g, "");
                if (input.hasAttribute("data-number-float-format")) {
                    input.type = "text";
                    const start = input.selectionStart;
                    const end = input.selectionEnd;
                    let value = input.value;
                    value = value.replace(/[^0-9.,]/g, "");
                    const parts = value.split(/[.,]/);
                    if (parts.length > 2) value = parts[0] + (value.includes(".") ? "." : ",") + parts[1];
                    input.value = value;
                    input.setSelectionRange(start, end);
                }
            }
            function addError({input}) {
                input.classList.remove("_validated");
                input.classList.add("_no-validated");
                input.setAttribute("aria-invalid", "true");
                if (!input.wasError) {
                    input.addEventListener("input", (() => setTimeout((() => {
                        checkInput({
                            input
                        });
                    }), 0)));
                    input.wasError = true;
                }
            }
            function removeError({input}) {
                input.classList.remove("_no-validated");
                input.classList.add("_validated");
                input.setAttribute("aria-invalid", "false");
                removeTextNotice({
                    input
                });
            }
            function removeStatus({input}) {
                if (!Array.isArray(input)) {
                    input.classList.remove("_no-validated", "_validated");
                    input.removeAttribute("aria-invalid");
                    removeTextNotice({
                        input
                    });
                } else input.forEach((elInput => {
                    elInput.classList.remove("_no-validated", "_validated");
                    elInput.removeAttribute("aria-invalid");
                    removeTextNotice({
                        input: elInput
                    });
                }));
            }
            function isEmailValid(input) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(input.value);
            }
            function showTextNotice({input, text, isTextNotice = false}) {
                input = Array.isArray(input) ? input[0] : input;
                const isShowNotice = isTextNotice || input.closest("[data-validate]")?.hasAttribute("data-validate-notice");
                let notice = input.parentElement.querySelector(".form__item-notice");
                const textNotice = input.hasAttribute("data-error-notice") ? input.getAttribute("data-error-notice") : text;
                if (isShowNotice) if (notice && notice.textContent !== textNotice) notice.textContent = textNotice; else if (!notice) {
                    notice = document.createElement("label");
                    notice.classList.add("form__item-notice");
                    input.id ? notice.setAttribute("for", input.id) : null;
                    notice.textContent = textNotice;
                    if ([ "radio", "checkbox" ].includes(input.type)) input.parentElement.insertAdjacentElement("beforeend", notice); else input.insertAdjacentElement("afterend", notice);
                }
                addError({
                    input
                });
            }
            function removeTextNotice({input}) {
                const notice = input.parentElement.querySelector(".form__item-notice");
                notice && notice.remove();
            }
            function scrollToInput({input}) {
                const inputWithError = Array.isArray(input) ? input[0] : input;
                const errorNotice = inputWithError.parentElement.querySelector(".form__item-notice");
                (errorNotice && inputWithError.offsetWidth === 0 ? errorNotice : inputWithError).scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
            function findRadioCheckboxGroup(parentSelector, type) {
                const groups = new Map;
                parentSelector.querySelectorAll(`input[type="${type}"]`).forEach((radioCheckbox => {
                    const name = radioCheckbox.getAttribute("name");
                    if (!groups.has(name)) groups.set(name, []);
                    groups.get(name).push(radioCheckbox);
                }));
                return groups;
            }
            window.formValidate = {
                showTextNotice,
                removeTextNotice,
                removeError,
                removeStatus,
                addError,
                checkInputs,
                checkInput,
                scrollToInput
            };
            return {
                showTextNotice,
                removeTextNotice,
                removeError,
                removeStatus,
                addError,
                checkInputs,
                checkInput,
                scrollToInput
            };
        }
        function clickOnLabelKeyEnter() {
            const inputs = document.querySelectorAll("[data-tabi-input]");
            if (inputs.length) inputs.forEach((input => {
                const label = document.querySelector(`label[data-tabi-label][for="${input.id}"]`);
                if (label) label.addEventListener("keydown", (e => {
                    if (e.key === "Enter") input.click();
                }));
            }));
        }
        function checkboxRadioChecked() {
            window.addEventListener("click", (e => {
                if (e.target.closest(".checkbox") || e.target.closest(".radio")) {
                    let input = null;
                    if (e.target.closest(".checkbox")) {
                        input = e.target.closest(".checkbox").querySelector('input[type="checkbox"]');
                        input ? input.checked = !input.checked : null;
                    }
                    if (e.target.closest(".radio")) {
                        input = e.target.closest(".radio").querySelector('input[type="radio"]');
                        input ? input.checked = true : null;
                    }
                    let event = new Event("change", {
                        bubbles: true
                    });
                    input?.dispatchEvent(event);
                }
            }));
            window.addEventListener("keydown", (e => {
                if (e.key === "Enter") {
                    const focusedElement = document.activeElement;
                    if (focusedElement.closest(".checkbox") || focusedElement.closest(".radio")) {
                        let input = null;
                        if (focusedElement.closest(".checkbox")) {
                            input = focusedElement.closest(".checkbox").querySelector('input[type="checkbox"]');
                            input ? input.checked = !input.checked : null;
                        }
                        if (focusedElement.closest(".radio")) {
                            input = focusedElement.closest(".radio").querySelector('input[type="radio"]');
                            input ? input.checked = true : null;
                        }
                        let event = new Event("change", {
                            bubbles: true
                        });
                        input?.dispatchEvent(event);
                    }
                }
            }));
        }
        function setInputmode() {
            const items = document.querySelectorAll("[data-inputmode]");
            if (items.length > 0) setTimeout((() => {
                items.forEach((item => {
                    const mode = item.dataset.inputmode;
                    mode ? item.setAttribute("inputmode", mode) : null;
                }));
            }), 50);
        }
        isWebp();
        addLoadedClass();
        menuInit();
        showSubMenu();
        checkboxRadioChecked();
        clickOnLabelKeyEnter();
        setInputmode();
        function mainSectionPaddingCompensateByHeaderHeight() {
            const header = document.querySelector(".top-header");
            const main = document.querySelector(".menu__body");
            const iconMenu = document.querySelector(".icon-menu");
            const updatePadding = () => {
                const newHeight = header.offsetHeight;
                main.style.setProperty("--menu-top-p", newHeight / 16 + "rem");
            };
            const resizeObserver = new ResizeObserver((() => {
                updatePadding();
            }));
            resizeObserver.observe(header);
            function onFrameChange() {
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        setTimeout((() => {
                            updatePadding();
                        }), 0);
                    }));
                }));
            }
            onFrameChange();
            window.addEventListener("load", onFrameChange);
            iconMenu.addEventListener("click", onFrameChange);
            window.addEventListener("scroll", onFrameChange);
            window.addEventListener("resize", (() => {
                updatePadding();
                setTimeout((() => {
                    updatePadding();
                }), 100);
            }));
            document.fonts.ready.then((() => {
                onFrameChange();
            }));
        }
        mainSectionPaddingCompensateByHeaderHeight();
        function headerScroll() {
            const header = document.querySelector("header.header");
            const headerWrapper = document.querySelector(".header__wrapper");
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            const eventScroll = new CustomEvent("header-scroll");
            function check() {
                const scrollTop = window.scrollY;
                if (scrollTop >= startPoint) {
                    if (!header.classList.contains("_header-scroll")) {
                        header.classList.add("_header-scroll");
                        headerWrapper.dispatchEvent(eventScroll);
                    }
                } else if (header.classList.contains("_header-scroll")) {
                    header.classList.remove("_header-scroll");
                    headerWrapper.dispatchEvent(eventScroll);
                }
            }
            window.addEventListener("scroll", check);
            check();
        }
        headerScroll();
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                if (gridEnabled) {
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                } else {
                    nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !nextSlide) nextSlide = slides[0];
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                }
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function pagination_Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = utils_makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function testimonialsSlider() {
            if (document.querySelector('[data-slider="testimonials"]')) {
                const sliderBlock = document.querySelector('[data-slider="testimonials"]');
                const slider = sliderBlock.querySelector(`[data-slider]`);
                const sliderPagination = sliderBlock.querySelector("[data-slider-pagination]");
                sliderBlock.querySelector("[data-slider-nextbtn]");
                if (slider) new swiper_core_Swiper(slider, {
                    modules: [ pagination_Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 3,
                    spaceBetween: 33,
                    speed: 800,
                    lazy: true,
                    pagination: {
                        el: sliderPagination,
                        clickable: true
                    },
                    breakpoints: {
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        720: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 33
                        }
                    },
                    on: {}
                });
            }
        }
        __webpack_require__(740);
        __webpack_require__(678);
        __webpack_require__(195);
        __webpack_require__(512);
        const keyCode = {
            AltGraph: 18,
            ArrowDown: 40,
            ArrowLeft: 37,
            ArrowRight: 39,
            ArrowUp: 38,
            Backspace: 8,
            BACKSPACE_SAFARI: 127,
            CapsLock: 20,
            Delete: 46,
            End: 35,
            Enter: 13,
            Escape: 27,
            Home: 36,
            Insert: 45,
            PageDown: 34,
            PageUp: 33,
            Space: 32,
            Tab: 9,
            c: 67,
            x: 88,
            z: 90,
            Shift: 16,
            Control: 17,
            Alt: 18,
            Pause: 19,
            Meta_LEFT: 91,
            Meta_RIGHT: 92,
            ContextMenu: 93,
            Process: 229,
            Unidentified: 229,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123
        };
        Object.entries(keyCode).reduce(((acc, [key, value]) => (acc[value] = acc[value] === void 0 ? key : acc[value], 
        acc)), {});
        const keys = Object.entries(keyCode).reduce(((acc, [key, value]) => (acc[key] = key === "Space" ? " " : key, 
        acc)), {});
        function getLocator(tst, align) {
            var locator = (tst.alternation != void 0 ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
            if (locator !== "") while (locator.length < align) locator += "0";
            return locator;
        }
        function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            if (typeof decisionTaker == "string" && decisionTaker.length > 0) decisionTaker = decisionTaker.split(",")[0];
            return decisionTaker !== void 0 ? decisionTaker.toString() : "";
        }
        function getPlaceholder(pos, test, returnPL) {
            const inputmask = this, opts = this.opts, maskset = this.maskset;
            test = test || getTest.call(inputmask, pos).match;
            if (test.placeholder !== void 0 || returnPL === true) return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder; else if (test.static === true) {
                if (pos > -1 && maskset.validPositions[pos] === void 0) {
                    var prevTest, tests = getTests.call(inputmask, pos), staticAlternations = [];
                    if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.static === true || prevTest === void 0 || tests[i].match.fn.test(prevTest.match.def, maskset, pos, true, opts) !== false)) {
                        staticAlternations.push(tests[i]);
                        if (tests[i].match.static === true) prevTest = tests[i];
                        if (staticAlternations.length > 1) if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) return opts.placeholder.charAt(pos % opts.placeholder.length);
                    }
                }
                return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
            var inputmask = this, opts = this.opts, maskset = this.maskset;
            var greedy = opts.greedy;
            if (clearOptionalTail && opts.greedy) {
                opts.greedy = false;
                inputmask.maskset.tests = {};
            }
            minimalPos = minimalPos || 0;
            var ndxIntlzr, test, testPos, jitRenderStatic, maskTemplate = [], pos = 0;
            do {
                if (baseOnInput === true && maskset.validPositions[pos]) {
                    testPos = clearOptionalTail && maskset.validPositions[pos].match.optionality && maskset.validPositions[pos + 1] === void 0 && (maskset.validPositions[pos].generatedInput === true || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos];
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
                } else {
                    testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                    jitRenderStatic = (jitRenderStatic && test.static && test.def !== opts.groupSeparator && test.fn === null || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && test.fn === null) && maskset.tests[pos];
                    if (jitRenderStatic || jitMasking === false || jitMasking === void 0 || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, maskTemplate.length, test)); else jitRenderStatic = false;
                }
                pos++;
            } while (test.static !== true || test.def !== "" || minimalPos > pos);
            if (maskTemplate[maskTemplate.length - 1] === "") maskTemplate.pop();
            if (includeMode !== false || maskset.maskLength === void 0) maskset.maskLength = pos - 1;
            opts.greedy = greedy;
            return maskTemplate;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            var inputmask = this, maskset = this.maskset;
            return maskset.validPositions[pos] || determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function determineTestTemplate(pos, tests) {
            var inputmask = this, opts = this.opts, lenghtOffset = 0;
            var optionalityLevel = determineOptionalityLevel(pos, tests);
            pos = pos > 0 ? pos - 1 : 0;
            var tstLocator, closest, bestMatch, altTest = getTest.call(inputmask, pos), targetLocator = getLocator(altTest);
            if (opts.greedy && tests.length > 1 && tests[tests.length - 1].match.def === "") lenghtOffset = 1;
            for (var ndx = 0; ndx < tests.length - lenghtOffset; ndx++) {
                var tst = tests[ndx];
                tstLocator = getLocator(tst, targetLocator.length);
                var distance = Math.abs(tstLocator - targetLocator);
                if (closest === void 0 || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.optionality - optionalityLevel > 0 && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || tst.match.optionality - optionalityLevel < 1 || !tst.match.newBlockMarker) || bestMatch && !opts.greedy && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                    closest = distance;
                    bestMatch = tst;
                }
            }
            return bestMatch;
        }
        function determineOptionalityLevel(pos, tests) {
            let optionalityLevel = 0, differentOptionalLevels = false;
            tests.forEach((test => {
                if (test.match.optionality) {
                    if (optionalityLevel !== 0 && optionalityLevel !== test.match.optionality) differentOptionalLevels = true;
                    if (optionalityLevel === 0 || optionalityLevel > test.match.optionality) optionalityLevel = test.match.optionality;
                }
            }));
            if (optionalityLevel) if (pos == 0) optionalityLevel = 0; else if (tests.length == 1) optionalityLevel = 0; else if (!differentOptionalLevels) optionalityLevel = 0;
            return optionalityLevel;
        }
        function getTest(pos, tests) {
            var inputmask = this, maskset = this.maskset;
            if (maskset.validPositions[pos]) return maskset.validPositions[pos];
            return (tests || getTests.call(inputmask, pos))[0];
        }
        function isSubsetOf(source, target, opts) {
            function expand(pattern) {
                var end, expanded = [], start = -1;
                for (var i = 0, l = pattern.length; i < l; i++) if (pattern.charAt(i) === "-") {
                    end = pattern.charCodeAt(i + 1);
                    while (++start < end) expanded.push(String.fromCharCode(start));
                } else {
                    start = pattern.charCodeAt(i);
                    expanded.push(pattern.charAt(i));
                }
                return expanded.join("");
            }
            if (source.match.def === target.match.nativeDef) return true;
            if ((opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) && source.match.static !== true && target.match.static !== true) return expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, ""))) !== -1;
            return false;
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            var latestMatch, inputmask = this, $ = this.dependencyLib, maskset = this.maskset, opts = this.opts, el = this.el, maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = false, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = tokenGroup.matches.indexOf(latestMatch) === 0;
                        if (!firstMatch) tokenGroup.matches.every((function(match, ndx) {
                            if (match.isQuantifier === true) firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]); else if (Object.prototype.hasOwnProperty.call(match, "matches")) firstMatch = isFirstMatch(latestMatch, match);
                            if (firstMatch) return false;
                            return true;
                        }));
                        return firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if (maskset.tests[pos] || maskset.validPositions[pos]) (maskset.tests[pos] || [ maskset.validPositions[pos] ]).every((function(lmnt, ndx) {
                            if (lmnt.mloc[alternateNdx]) {
                                bestMatch = lmnt;
                                return false;
                            }
                            var alternation = targetAlternation !== void 0 ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== void 0 ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                            if ((indexPos === void 0 || ndxPos < indexPos) && ndxPos !== -1) {
                                bestMatch = lmnt;
                                indexPos = ndxPos;
                            }
                            return true;
                        }));
                        if (bestMatch) {
                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                            var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                            return locator.slice((targetAlternation !== void 0 ? targetAlternation : bestMatch.alternation) + 1);
                        } else return targetAlternation !== void 0 ? resolveNdxInitializer(pos, alternateNdx) : void 0;
                    }
                    function staticCanMatchDefinition(source, target) {
                        return source.match.static === true && target.match.static !== true ? target.match.fn.test(source.match.def, maskset, pos, false, opts, false) : false;
                    }
                    function setMergeLocators(targetMatch, altMatch) {
                        var alternationNdx = targetMatch.alternation, shouldMerge = altMatch === void 0 || alternationNdx === altMatch.alternation && targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1;
                        if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) if (targetMatch.locator[i] !== altMatch.locator[i]) {
                            alternationNdx = i;
                            shouldMerge = true;
                            break;
                        }
                        if (shouldMerge) {
                            targetMatch.mloc = targetMatch.mloc || {};
                            var locNdx = targetMatch.locator[alternationNdx];
                            if (locNdx === void 0) targetMatch.alternation = void 0; else {
                                if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                                if (targetMatch.mloc[locNdx] === void 0) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                                if (altMatch !== void 0) {
                                    for (var ndx in altMatch.mloc) {
                                        if (typeof ndx === "string") ndx = ndx.split(",")[0];
                                        if (targetMatch.mloc[ndx] === void 0) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                                    }
                                    targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                                }
                                return true;
                            }
                        }
                        return false;
                    }
                    function isSameLevel(targetMatch, altMatch) {
                        if (targetMatch.locator.length !== altMatch.locator.length) return false;
                        for (let locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return false;
                        return true;
                    }
                    function handleGroup() {
                        match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse);
                        if (match) return true;
                    }
                    function handleOptional() {
                        var optionalToken = match, mtchsNdx = matches.length;
                        match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                        if (matches.length > 0) {
                            matches.forEach((function(mtch, ndx) {
                                if (ndx >= mtchsNdx) mtch.match.optionality = mtch.match.optionality ? mtch.match.optionality + 1 : 1;
                            }));
                            latestMatch = matches[matches.length - 1].match;
                            if (quantifierRecurse === void 0 && isFirstMatch(latestMatch, optionalToken)) {
                                insertStop = true;
                                testPos = pos;
                            } else return match;
                        }
                    }
                    function handleAlternator() {
                        inputmask.hasAlternator = true;
                        var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, unMatchedAlternation = false;
                        var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                        if (altIndex === -1 || typeof altIndex === "string") {
                            var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                            if (typeof altIndex == "string") altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                            if (maskset.excludes[pos] !== void 0) {
                                var altIndexArrClone = altIndexArr.slice();
                                for (var i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                                    var excludeSet = maskset.excludes[pos][i].toString().split(":");
                                    if (loopNdx.length == excludeSet[1]) altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                                }
                                if (altIndexArr.length === 0) {
                                    delete maskset.excludes[pos];
                                    altIndexArr = altIndexArrClone;
                                }
                            }
                            if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                            for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                amndx = parseInt(altIndexArr[ndx]);
                                matches = [];
                                ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                                var tokenMatch = alternateToken.matches[amndx];
                                if (tokenMatch && handleMatch(tokenMatch, [ amndx ].concat(loopNdx), quantifierRecurse)) match = true; else {
                                    if (ndx === 0) unMatchedAlternation = true;
                                    if (tokenMatch && tokenMatch.matches && tokenMatch.matches.length > alternateToken.matches[0].matches.length) break;
                                }
                                maltMatches = matches.slice();
                                testPos = currentPos;
                                matches = [];
                                for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                    var altMatch = maltMatches[ndx1], dropMatch = false;
                                    altMatch.match.jit = altMatch.match.jit || unMatchedAlternation;
                                    altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                    setMergeLocators(altMatch);
                                    for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                        var altMatch2 = malternateMatches[ndx2];
                                        if (typeof altIndex !== "string" || altMatch.alternation !== void 0 && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())) if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                            dropMatch = true;
                                            setMergeLocators(altMatch2, altMatch);
                                            break;
                                        } else if (isSubsetOf(altMatch, altMatch2, opts)) {
                                            if (setMergeLocators(altMatch, altMatch2)) {
                                                dropMatch = true;
                                                malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                            }
                                            break;
                                        } else if (isSubsetOf(altMatch2, altMatch, opts)) {
                                            setMergeLocators(altMatch2, altMatch);
                                            break;
                                        } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                            if (!isSameLevel(altMatch, altMatch2) && el.inputmask.userOptions.keepStatic === void 0) opts.keepStatic = true; else if (setMergeLocators(altMatch, altMatch2)) {
                                                dropMatch = true;
                                                malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                            }
                                            break;
                                        }
                                    }
                                    if (!dropMatch) malternateMatches.push(altMatch);
                                }
                            }
                            matches = currentMatches.concat(malternateMatches);
                            testPos = pos;
                            insertStop = matches.length > 0;
                            match = malternateMatches.length > 0;
                            ndxInitializer = ndxInitializerClone.slice();
                        } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                        if (match) return true;
                    }
                    function handleQuantifier() {
                        var qt = match, breakloop = false;
                        for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                            var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
                            match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup);
                            if (match) {
                                matches.forEach((function(mtch, ndx) {
                                    if (IsMatchOf(tokenGroup, mtch.match)) latestMatch = mtch.match; else latestMatch = matches[matches.length - 1].match;
                                    latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                                    latestMatch.jit = (qndx + 1) * (tokenGroup.matches.indexOf(latestMatch) + 1) > qt.quantifier.jit;
                                    if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                        insertStop = true;
                                        testPos = pos;
                                        if (opts.greedy && maskset.validPositions[pos - 1] == void 0 && qndx > qt.quantifier.min && [ "*", "+" ].indexOf(qt.quantifier.max) != -1) {
                                            matches.pop();
                                            cacheDependency = void 0;
                                        }
                                        breakloop = true;
                                        match = false;
                                    }
                                    if (!breakloop && latestMatch.jit) maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
                                }));
                                if (breakloop) break;
                                return true;
                            }
                        }
                    }
                    if (testPos > pos + opts._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                    if (testPos === pos && match.matches === void 0) {
                        matches.push({
                            match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency,
                            mloc: {}
                        });
                        if (match.optionality && quantifierRecurse === void 0 && (opts.definitions && opts.definitions[match.nativeDef] && opts.definitions[match.nativeDef].optional || lib_inputmask.prototype.definitions[match.nativeDef] && lib_inputmask.prototype.definitions[match.nativeDef].optional)) {
                            insertStop = true;
                            testPos = pos;
                        } else return true;
                    } else if (match.matches !== void 0) if (match.isGroup && quantifierRecurse !== match) return handleGroup(); else if (match.isOptional) return handleOptional(); else if (match.isAlternator) return handleAlternator(); else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) return handleQuantifier(); else {
                        match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                        if (match) return true;
                    } else testPos++;
                }
                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (maskToken.matches[tndx].isQuantifier !== true) {
                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                    if (match && testPos === pos) return match; else if (testPos > pos) break;
                }
            }
            function IsMatchOf(tokenGroup, match) {
                let isMatch = tokenGroup.matches.indexOf(match) != -1;
                if (!isMatch) tokenGroup.matches.forEach(((mtch, ndx) => {
                    if (mtch.matches !== void 0 && !isMatch) isMatch = IsMatchOf(mtch, match);
                }));
                return isMatch;
            }
            function mergeLocators(pos, tests) {
                let alternation, locator = [];
                if (!Array.isArray(tests)) tests = [ tests ];
                if (tests.length > 0) if (tests[0].alternation === void 0 || opts.keepStatic === true) {
                    locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice();
                    if (locator.length === 0) locator = tests[0].locator.slice();
                } else tests.forEach((function(tst) {
                    if (tst.def !== "") if (locator.length === 0) {
                        alternation = tst.alternation;
                        locator = tst.locator.slice();
                    } else if (tst.locator[alternation] && locator[alternation].toString().indexOf(tst.locator[alternation]) === -1) locator[alternation] += "," + tst.locator[alternation];
                }));
                return locator;
            }
            if (pos > -1) {
                if (ndxIntlzr === void 0) {
                    var test, previousPos = pos - 1;
                    while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === void 0 && previousPos > -1) previousPos--;
                    if (test !== void 0 && previousPos > -1) {
                        ndxInitializer = mergeLocators(previousPos, test);
                        cacheDependency = ndxInitializer.join("");
                        testPos = previousPos;
                    }
                }
                if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                    if (match && testPos === pos || testPos > pos) break;
                }
            }
            if (matches.length === 0 || insertStop) matches.push({
                match: {
                    fn: null,
                    static: true,
                    optionality: false,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: cacheDependency
            });
            var result;
            if (ndxIntlzr !== void 0 && maskset.tests[pos]) result = $.extend(true, [], matches); else {
                maskset.tests[pos] = $.extend(true, [], matches);
                result = maskset.tests[pos];
            }
            matches.forEach((t => {
                t.match.optionality = t.match.defOptionality || false;
            }));
            return result;
        }
        const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        const lib_canUseDOM = canUseDOM;
        const global_window = lib_canUseDOM ? window : {};
        const ua = global_window.navigator && global_window.navigator.userAgent || "", ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = navigator.userAgentData && navigator.userAgentData.mobile || global_window.navigator && global_window.navigator.maxTouchPoints || "ontouchstart" in global_window, iphone = /iphone/i.test(ua);
        function applyInputValue(input, value) {
            const inputmask = input ? input.inputmask : this, opts = inputmask.opts;
            input.inputmask.refreshValue = false;
            if (typeof opts.onBeforeMask === "function") value = opts.onBeforeMask.call(inputmask, value, opts) || value;
            value = (value || "").toString().split("");
            checkVal(input, true, false, value);
            inputmask.undoValue = inputmask._valueGet(true);
            if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate.call(inputmask).join("") && getLastValidPosition.call(inputmask) === -1) input.inputmask._valueSet("");
        }
        function clearOptionalTail(buffer) {
            const inputmask = this;
            buffer.length = 0;
            var lmnt, template = getMaskTemplate.call(inputmask, true, 0, true, void 0, true);
            while ((lmnt = template.shift()) !== void 0) buffer.push(lmnt);
            return buffer;
        }
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            const inputmask = input ? input.inputmask : this, maskset = inputmask.maskset, opts = inputmask.opts, $ = inputmask.dependencyLib;
            var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = void 0, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
            opts.skipOptionalPartCharacter = "";
            function isTemplateMatch(ndx, charCodes) {
                var targetTemplate = getMaskTemplate.call(inputmask, true, 0).slice(ndx, seekNext.call(inputmask, ndx, false, false)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes);
                while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ") charCodeNdx--;
                var match = charCodeNdx === 0 && !isMask.call(inputmask, ndx) && (getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0) || getTest.call(inputmask, ndx).match.static === true && getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest.call(inputmask, ndx).match.nativeDef === " " && (getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest.call(inputmask, ndx + 1).match.static === true && getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                if (!match && charCodeNdx > 0 && !isMask.call(inputmask, ndx, false, true)) {
                    var nextPos = seekNext.call(inputmask, ndx);
                    if (inputmask.caretPos.begin < nextPos) inputmask.caretPos = {
                        begin: nextPos
                    };
                }
                return match;
            }
            resetMaskSet.call(inputmask);
            maskset.tests = {};
            initialNdx = opts.radixPoint ? determineNewCaretPosition.call(inputmask, {
                begin: 0,
                end: 0
            }, false, opts.__financeInput === false ? "radixFocus" : void 0).begin : 0;
            maskset.p = initialNdx;
            inputmask.caretPos = {
                begin: initialNdx
            };
            var staticMatches = [], prevCaretPos = inputmask.caretPos;
            inputValue.forEach((function(charCode, ndx) {
                if (charCode !== void 0) {
                    var keypress = new $.Event("_checkval");
                    keypress.key = charCode;
                    charCodes += charCode;
                    var lvp = getLastValidPosition.call(inputmask, void 0, true);
                    if (!isTemplateMatch(initialNdx, charCodes)) {
                        result = EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, inputmask.caretPos.begin);
                        if (result) {
                            initialNdx = inputmask.caretPos.begin + 1;
                            charCodes = "";
                        }
                    } else result = EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, lvp + 1);
                    if (result) {
                        if (result.pos !== void 0 && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true && maskset.validPositions[result.pos].alternation === void 0) {
                            staticMatches.push(result.pos);
                            if (!inputmask.isRTL) result.forwardPosition = result.pos + 1;
                        }
                        writeBuffer.call(inputmask, void 0, getBuffer.call(inputmask), result.forwardPosition, keypress, false);
                        inputmask.caretPos = {
                            begin: result.forwardPosition,
                            end: result.forwardPosition
                        };
                        prevCaretPos = inputmask.caretPos;
                    } else if (maskset.validPositions[ndx] === void 0 && inputValue[ndx] === getPlaceholder.call(inputmask, ndx) && isMask.call(inputmask, ndx, true)) inputmask.caretPos.begin++; else inputmask.caretPos = prevCaretPos;
                }
            }));
            if (staticMatches.length > 0) {
                var sndx, validPos, nextValid = seekNext.call(inputmask, -1, void 0, false);
                if (!isComplete.call(inputmask, getBuffer.call(inputmask)) && staticMatches.length <= nextValid || isComplete.call(inputmask, getBuffer.call(inputmask)) && staticMatches.length > 0 && staticMatches.length !== nextValid && staticMatches[0] === 0) {
                    var nextSndx = nextValid;
                    while ((sndx = staticMatches.shift()) !== void 0) {
                        var keypress = new $.Event("_checkval");
                        validPos = maskset.validPositions[sndx];
                        validPos.generatedInput = true;
                        keypress.key = validPos.input;
                        result = EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, nextSndx);
                        if (result && result.pos !== void 0 && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true) staticMatches.push(result.pos); else if (!result) break;
                        nextSndx++;
                    }
                }
            }
            if (writeOut) writeBuffer.call(inputmask, input, getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && (initiatingEvent.type === "input" && inputmask.undoValue !== getBuffer.call(inputmask).join("") || initiatingEvent.type === "paste"));
            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
        }
        function HandleNativePlaceholder(npt, value) {
            const inputmask = npt ? npt.inputmask : this;
            if (ie) {
                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
                    var buffer = getBuffer.call(inputmask).slice(), nptValue = npt.inputmask._valueGet();
                    if (nptValue !== value) {
                        var lvp = getLastValidPosition.call(inputmask);
                        if (lvp === -1 && nptValue === getBufferTemplate.call(inputmask).join("")) buffer = []; else if (lvp !== -1) clearOptionalTail.call(inputmask, buffer);
                        writeBuffer(npt, buffer);
                    }
                }
            } else if (npt.placeholder !== value) {
                npt.placeholder = value;
                if (npt.placeholder === "") npt.removeAttribute("placeholder");
            }
        }
        function unmaskedvalue(input) {
            const inputmask = input ? input.inputmask : this, opts = inputmask.opts, maskset = inputmask.maskset;
            if (input) {
                if (input.inputmask === void 0) return input.value;
                if (input.inputmask && input.inputmask.refreshValue) applyInputValue(input, input.inputmask._valueGet(true));
            }
            var umValue = [], vps = maskset.validPositions;
            for (let pndx = 0, vpl = vps.length; pndx < vpl; pndx++) if (vps[pndx] && vps[pndx].match && (vps[pndx].match.static != true || Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true)) umValue.push(vps[pndx].input);
            var unmaskedValue = umValue.length === 0 ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
            if (typeof opts.onUnMask === "function") {
                var bufferValue = (inputmask.isRTL ? getBuffer.call(inputmask).slice().reverse() : getBuffer.call(inputmask)).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            const inputmask = input ? input.inputmask : this, opts = inputmask.opts, $ = inputmask.dependencyLib;
            if (event && typeof opts.onBeforeWrite === "function") {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                        buffer = getBuffer.call(inputmask, true);
                    }
                    if (caretPos !== void 0) caretPos = result.caret !== void 0 ? result.caret : caretPos;
                }
            }
            if (input !== void 0) {
                input.inputmask._valueSet(buffer.join(""));
                if (caretPos !== void 0 && (event === void 0 || event.type !== "blur")) caret.call(inputmask, input, caretPos, void 0, void 0, event !== void 0 && event.type === "keydown" && (event.key === keys.Delete || event.key === keys.Backspace));
                if (triggerEvents === true) {
                    var $input = $(input), nptVal = input.inputmask._valueGet();
                    input.inputmask.skipInputEvent = true;
                    $input.trigger("input");
                    setTimeout((function() {
                        if (nptVal === getBufferTemplate.call(inputmask).join("")) $input.trigger("cleared"); else if (isComplete.call(inputmask, buffer) === true) $input.trigger("complete");
                    }), 0);
                }
            }
        }
        var EventHandlers = {
            keyEvent: function(e, checkval, writeOut, strict, ndx) {
                const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib, maskset = inputmask.maskset;
                var input = this, $input = $(input), c = e.key, pos = caret.call(inputmask, input);
                var kdResult = opts.onKeyDown.call(this, e, getBuffer.call(inputmask), pos, opts);
                if (kdResult !== void 0) return kdResult;
                if (c === keys.Backspace || c === keys.Delete || iphone && c === keys.BACKSPACE_SAFARI || e.ctrlKey && c === keys.x && !("oncut" in input)) {
                    e.preventDefault();
                    handleRemove.call(inputmask, input, c, pos);
                    writeBuffer(input, getBuffer.call(inputmask, true), maskset.p, e, input.inputmask._valueGet() !== getBuffer.call(inputmask).join(""));
                } else if (c === keys.End || c === keys.PageDown) {
                    e.preventDefault();
                    var caretPos = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
                    caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                } else if (c === keys.Home && !e.shiftKey || c === keys.PageUp) {
                    e.preventDefault();
                    caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, true);
                } else if ((opts.undoOnEscape && c === keys.Escape || false && 0) && e.altKey !== true) {
                    checkVal(input, true, false, inputmask.undoValue.split(""));
                    $input.trigger("click");
                } else if (c === keys.Insert && !(e.shiftKey || e.ctrlKey) && inputmask.userOptions.insertMode === void 0) if (!isSelection.call(inputmask, pos)) {
                    opts.insertMode = !opts.insertMode;
                    caret.call(inputmask, input, pos.begin, pos.begin);
                } else opts.insertMode = !opts.insertMode; else if (opts.tabThrough === true && c === keys.Tab) if (e.shiftKey === true) {
                    pos.end = seekPrevious.call(inputmask, pos.end, true);
                    if (getTest.call(inputmask, pos.end - 1).match.static === true) pos.end--;
                    pos.begin = seekPrevious.call(inputmask, pos.end, true);
                    if (pos.begin >= 0 && pos.end > 0) {
                        e.preventDefault();
                        caret.call(inputmask, input, pos.begin, pos.end);
                    }
                } else {
                    pos.begin = seekNext.call(inputmask, pos.begin, true);
                    pos.end = seekNext.call(inputmask, pos.begin, true);
                    if (pos.end < maskset.maskLength) pos.end--;
                    if (pos.begin <= maskset.maskLength) {
                        e.preventDefault();
                        caret.call(inputmask, input, pos.begin, pos.end);
                    }
                } else if (!e.shiftKey) if (opts.insertModeVisual && opts.insertMode === false) if (c === keys.ArrowRight) setTimeout((function() {
                    var caretPos = caret.call(inputmask, input);
                    caret.call(inputmask, input, caretPos.begin);
                }), 0); else if (c === keys.ArrowLeft) setTimeout((function() {
                    var caretPos = {
                        begin: translatePosition.call(inputmask, input.inputmask.caretPos.begin),
                        end: translatePosition.call(inputmask, input.inputmask.caretPos.end)
                    };
                    if (inputmask.isRTL) caret.call(inputmask, input, caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1)); else caret.call(inputmask, input, caretPos.begin - (caretPos.begin === 0 ? 0 : 1));
                }), 0);
                inputmask.isComposing = c == keys.Process || c == keys.Unidentified;
                inputmask.ignorable = opts.ignorables.includes(c);
                return EventHandlers.keypressEvent.call(this, e, checkval, writeOut, strict, ndx);
            },
            keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                const inputmask = this.inputmask || this, opts = inputmask.opts, $ = inputmask.dependencyLib, maskset = inputmask.maskset;
                var input = inputmask.el, $input = $(input), c = e.key;
                if (checkval !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) {
                    if (c === keys.Enter) if (inputmask.undoValue !== inputmask._valueGet(true)) {
                        inputmask.undoValue = inputmask._valueGet(true);
                        setTimeout((function() {
                            $input.trigger("change");
                        }), 0);
                    }
                    return;
                } else if (c) {
                    var forwardPosition, pos = checkval ? {
                        begin: ndx,
                        end: ndx
                    } : caret.call(inputmask, input);
                    c = opts.substitutes[c] || c;
                    maskset.writeOutBuffer = true;
                    var valResult = isValid.call(inputmask, pos, c, strict, void 0, void 0, void 0, checkval);
                    if (valResult !== false) {
                        resetMaskSet.call(inputmask, true);
                        forwardPosition = valResult.caret !== void 0 ? valResult.caret : seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                        maskset.p = forwardPosition;
                    }
                    forwardPosition = opts.numericInput && valResult.caret === void 0 ? seekPrevious.call(inputmask, forwardPosition) : forwardPosition;
                    if (writeOut !== false) {
                        setTimeout((function() {
                            opts.onKeyValidation.call(input, c, valResult);
                        }), 0);
                        if (maskset.writeOutBuffer && valResult !== false) {
                            var buffer = getBuffer.call(inputmask);
                            writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
                        }
                    }
                    e.preventDefault();
                    if (checkval) {
                        if (valResult !== false) valResult.forwardPosition = forwardPosition;
                        return valResult;
                    }
                }
            },
            pasteEvent: function(e) {
                const inputmask = this.inputmask, opts = inputmask.opts;
                var tempValue, input = this, inputValue = inputmask._valueGet(true), caretPos = caret.call(inputmask, input);
                if (inputmask.isRTL) {
                    tempValue = caretPos.end;
                    caretPos.end = translatePosition.call(inputmask, caretPos.begin);
                    caretPos.begin = translatePosition.call(inputmask, tempValue);
                }
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret == (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                if (valueAfterCaret == (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")) valueAfterCaret = "";
                if (window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else if (e.clipboardData && e.clipboardData.getData) inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret; else return true;
                var pasteValue = inputValue;
                if (inputmask.isRTL) {
                    pasteValue = pasteValue.split("");
                    for (let c of getBufferTemplate.call(inputmask)) if (pasteValue[0] === c) pasteValue.shift();
                    pasteValue = pasteValue.join("");
                }
                if (typeof opts.onBeforePaste === "function") {
                    pasteValue = opts.onBeforePaste.call(inputmask, pasteValue, opts);
                    if (pasteValue === false) return false;
                    if (!pasteValue) pasteValue = inputValue;
                }
                checkVal(input, true, false, pasteValue.toString().split(""), e);
                e.preventDefault();
            },
            inputFallBackEvent: function(e) {
                const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
                function analyseChanges(inputValue, buffer, caretPos) {
                    var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split("");
                    var bl, i, placeholder, fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, action = "", data = [], marker = "~";
                    while (frontPart.length < fpl) frontPart.push(marker);
                    while (frontBufferPart.length < fpl) frontBufferPart.push(marker);
                    while (backPart.length < bpl) backPart.unshift(marker);
                    while (backBufferPart.length < bpl) backBufferPart.unshift(marker);
                    var newBuffer = frontPart.concat(backPart);
                    var oldBuffer = frontBufferPart.concat(backBufferPart);
                    for (i = 0, bl = newBuffer.length; i < bl; i++) {
                        placeholder = getPlaceholder.call(inputmask, translatePosition.call(inputmask, i));
                        switch (action) {
                          case "insertText":
                            if (oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1) data.push(newBuffer[i]);
                            i = bl;
                            break;

                          case "insertReplacementText":
                            if (newBuffer[i] === marker) caretPos.end++; else i = bl;
                            break;

                          case "deleteContentBackward":
                            if (newBuffer[i] === marker) caretPos.end++; else i = bl;
                            break;

                          default:
                            if (newBuffer[i] !== oldBuffer[i]) if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === void 0) && (oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker || oldBuffer[i] === marker)) {
                                action = "insertText";
                                data.push(newBuffer[i]);
                                caretPos.begin--;
                                caretPos.end--;
                            } else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) {
                                action = "insertText";
                                data.push(newBuffer[i]);
                                caretPos.begin--;
                                caretPos.end--;
                            } else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker && (newBuffer[i + 1] === marker || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1])) {
                                action = "insertReplacementText";
                                data.push(newBuffer[i]);
                                caretPos.begin--;
                            } else if (newBuffer[i] === marker) {
                                action = "deleteContentBackward";
                                if (isMask.call(inputmask, translatePosition.call(inputmask, i), true) || oldBuffer[i] === opts.radixPoint) caretPos.end++;
                            } else i = bl;
                            break;
                        }
                    }
                    return {
                        action,
                        data,
                        caret: caretPos
                    };
                }
                var changes, input = this, inputValue = input.inputmask._valueGet(true), buffer = (inputmask.isRTL ? getBuffer.call(inputmask).slice().reverse() : getBuffer.call(inputmask)).join(""), caretPos = caret.call(inputmask, input, void 0, void 0, true);
                if (buffer !== inputValue) {
                    changes = analyseChanges(inputValue, buffer, caretPos);
                    if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) input.focus();
                    writeBuffer(input, getBuffer.call(inputmask));
                    caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
                    if (!mobile && inputmask.skipNextInsert && e.inputType === "insertText" && changes.action === "insertText" && inputmask.isComposing) return false;
                    if (e.inputType === "insertCompositionText" && changes.action === "insertText" && inputmask.isComposing) inputmask.skipNextInsert = true; else inputmask.skipNextInsert = false;
                    switch (changes.action) {
                      case "insertText":
                      case "insertReplacementText":
                        changes.data.forEach((function(entry, ndx) {
                            var keypress = new $.Event("keypress");
                            keypress.key = entry;
                            inputmask.ignorable = false;
                            EventHandlers.keypressEvent.call(input, keypress);
                        }));
                        setTimeout((function() {
                            inputmask.$el.trigger("keyup");
                        }), 0);
                        break;

                      case "deleteContentBackward":
                        var keydown = new $.Event("keydown");
                        keydown.key = keys.Backspace;
                        EventHandlers.keyEvent.call(input, keydown);
                        break;

                      default:
                        applyInputValue(input, inputValue);
                        caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
                        break;
                    }
                    e.preventDefault();
                }
            },
            setValueEvent: function(e) {
                const inputmask = this.inputmask;
                var input = this, value = e && e.detail ? e.detail[0] : arguments[1];
                if (value === void 0) value = input.inputmask._valueGet(true);
                applyInputValue(input, value);
                if (e.detail && e.detail[1] !== void 0 || arguments[2] !== void 0) caret.call(inputmask, input, e.detail ? e.detail[1] : arguments[2]);
            },
            focusEvent: function(e) {
                const inputmask = this.inputmask, opts = inputmask.opts;
                var input = this, nptValue = inputmask?._valueGet();
                if (opts.showMaskOnFocus) if (nptValue !== getBuffer.call(inputmask).join("")) writeBuffer(input, getBuffer.call(inputmask), seekNext.call(inputmask, getLastValidPosition.call(inputmask)));
                if (opts.positionCaretOnTab === true && inputmask.mouseEnter === false && (!isComplete.call(inputmask, getBuffer.call(inputmask)) || getLastValidPosition.call(inputmask) === -1)) EventHandlers.clickEvent.apply(input, [ e, true ]);
                inputmask.undoValue = inputmask?._valueGet(true);
            },
            invalidEvent: function(e) {
                this.inputmask.validationEvent = true;
            },
            mouseleaveEvent: function() {
                const inputmask = this.inputmask, opts = inputmask.opts;
                var input = this;
                inputmask.mouseEnter = false;
                if (opts.clearMaskOnLostFocus && (input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) HandleNativePlaceholder(input, inputmask.originalPlaceholder);
            },
            clickEvent: function(e, tabbed) {
                const inputmask = this.inputmask;
                inputmask.clicked++;
                var input = this;
                if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement === input) {
                    var newCaretPosition = determineNewCaretPosition.call(inputmask, caret.call(inputmask, input), tabbed);
                    if (newCaretPosition !== void 0) caret.call(inputmask, input, newCaretPosition);
                }
            },
            cutEvent: function(e) {
                const inputmask = this.inputmask, maskset = inputmask.maskset;
                var input = this, pos = caret.call(inputmask, input);
                var clipData = inputmask.isRTL ? getBuffer.call(inputmask).slice(pos.end, pos.begin) : getBuffer.call(inputmask).slice(pos.begin, pos.end), clipDataText = inputmask.isRTL ? clipData.reverse().join("") : clipData.join("");
                if (window.navigator.clipboard) window.navigator.clipboard.writeText(clipDataText); else if (window.clipboardData && window.clipboardData.getData) window.clipboardData.setData("Text", clipDataText);
                handleRemove.call(inputmask, input, keys.Delete, pos);
                writeBuffer(input, getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== inputmask._valueGet(true));
            },
            blurEvent: function(e) {
                const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
                inputmask.clicked = 0;
                var $input = $(this), input = this;
                if (input.inputmask) {
                    HandleNativePlaceholder(input, inputmask.originalPlaceholder);
                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer.call(inputmask).slice();
                    if (nptValue !== "") {
                        if (opts.clearMaskOnLostFocus) if (getLastValidPosition.call(inputmask) === -1 && nptValue === getBufferTemplate.call(inputmask).join("")) buffer = []; else clearOptionalTail.call(inputmask, buffer);
                        if (isComplete.call(inputmask, buffer) === false) {
                            setTimeout((function() {
                                $input.trigger("incomplete");
                            }), 0);
                            if (opts.clearIncomplete) {
                                resetMaskSet.call(inputmask);
                                if (opts.clearMaskOnLostFocus) buffer = []; else buffer = getBufferTemplate.call(inputmask).slice();
                            }
                        }
                        writeBuffer(input, buffer, void 0, e);
                    }
                    if (inputmask.undoValue !== inputmask._valueGet(true)) {
                        inputmask.undoValue = inputmask._valueGet(true);
                        $input.trigger("change");
                    }
                }
            },
            mouseenterEvent: function() {
                const inputmask = this.inputmask, {showMaskOnHover} = inputmask.opts;
                var input = this;
                inputmask.mouseEnter = true;
                if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
                    var bufferTemplate = (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).join("");
                    if (showMaskOnHover) HandleNativePlaceholder(input, bufferTemplate);
                }
            },
            submitEvent: function() {
                const inputmask = this.inputmask, opts = inputmask.opts;
                if (inputmask.undoValue !== inputmask._valueGet(true)) inputmask.$el.trigger("change");
                if (getLastValidPosition.call(inputmask) === -1 && inputmask._valueGet && inputmask._valueGet() === getBufferTemplate.call(inputmask).join("")) inputmask._valueSet("");
                if (opts.clearIncomplete && isComplete.call(inputmask, getBuffer.call(inputmask)) === false) inputmask._valueSet("");
                if (opts.removeMaskOnSubmit) {
                    inputmask._valueSet(inputmask.unmaskedvalue(), true);
                    setTimeout((function() {
                        writeBuffer(inputmask.el, getBuffer.call(inputmask));
                    }), 0);
                }
            },
            resetEvent: function() {
                const inputmask = this.inputmask;
                inputmask.refreshValue = true;
                setTimeout((function() {
                    applyInputValue(inputmask.el, inputmask._valueGet(true));
                }), 0);
            }
        };
        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
            const inputmask = this, $ = this.dependencyLib, opts = this.opts, maskset = inputmask.maskset;
            var lastAlt, alternation, altPos, prevAltPos, i, validPos, decisionPos, nextPos, input, begin, end, validPsClone = $.extend(true, [], maskset.validPositions), tstClone = $.extend(true, {}, maskset.tests), isValidRslt = false, returnRslt = false, lAltPos = rAltPos !== void 0 ? rAltPos : getLastValidPosition.call(inputmask);
            if (selection) {
                begin = selection.begin;
                end = selection.end;
                if (selection.begin > selection.end) {
                    begin = selection.end;
                    end = selection.begin;
                }
            }
            if (lAltPos === -1 && rAltPos === void 0) {
                lastAlt = 0;
                prevAltPos = getTest.call(inputmask, lastAlt);
                alternation = prevAltPos.alternation;
            } else for (;lAltPos >= 0; lAltPos--) {
                altPos = maskset.validPositions[lAltPos];
                if (altPos && altPos.alternation !== void 0) {
                    if (lAltPos <= (maskPos || 0) && prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                    lastAlt = lAltPos;
                    alternation = maskset.validPositions[lastAlt].alternation;
                    prevAltPos = altPos;
                }
            }
            if (alternation !== void 0) {
                decisionPos = parseInt(lastAlt);
                maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];
                if (maskPos !== true) maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
                var validInputs = [], resultPos = -1;
                for (i = decisionPos; i < getLastValidPosition.call(inputmask, void 0, true) + 1; i++) {
                    if (resultPos === -1 && maskPos <= i && c !== void 0) {
                        validInputs.push(c);
                        resultPos = validInputs.length - 1;
                    }
                    validPos = maskset.validPositions[i];
                    if (validPos && validPos.generatedInput !== true && (selection === void 0 || i < begin || i >= end)) validInputs.push(validPos.input);
                    delete maskset.validPositions[i];
                }
                if (resultPos === -1 && c !== void 0) {
                    validInputs.push(c);
                    resultPos = validInputs.length - 1;
                }
                while (maskset.excludes[decisionPos] !== void 0 && maskset.excludes[decisionPos].length < 10) {
                    maskset.tests = {};
                    resetMaskSet.call(inputmask, true);
                    isValidRslt = true;
                    for (i = 0; i < validInputs.length; i++) {
                        nextPos = isValidRslt.caret || getLastValidPosition.call(inputmask, void 0, true) + 1;
                        input = validInputs[i];
                        if (!(isValidRslt = isValid.call(inputmask, nextPos, input, false, fromIsValid, true))) break;
                        if (i === resultPos) returnRslt = isValidRslt;
                        if (maskPos == true && isValidRslt) returnRslt = {
                            caretPos: i
                        };
                    }
                    if (!isValidRslt) {
                        resetMaskSet.call(inputmask);
                        prevAltPos = getTest.call(inputmask, decisionPos);
                        maskset.validPositions = $.extend(true, [], validPsClone);
                        maskset.tests = $.extend(true, {}, tstClone);
                        if (maskset.excludes[decisionPos]) {
                            var decisionTaker = getDecisionTaker(prevAltPos);
                            if (maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation) !== -1) {
                                returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                break;
                            }
                            maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation);
                            for (i = decisionPos; i < getLastValidPosition.call(inputmask, void 0, true) + 1; i++) delete maskset.validPositions[i];
                        } else {
                            returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                            break;
                        }
                    } else break;
                }
            }
            if (!returnRslt || opts.keepStatic !== false) delete maskset.excludes[decisionPos];
            return returnRslt;
        }
        function casing(elem, test, pos) {
            const opts = this.opts, maskset = this.maskset;
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;

              case "lower":
                elem = elem.toLowerCase();
                break;

              case "title":
                var posBefore = maskset.validPositions[pos - 1];
                if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(keyCode.Space)) elem = elem.toUpperCase(); else elem = elem.toLowerCase();
                break;

              default:
                if (typeof opts.casing === "function") {
                    var args = Array.prototype.slice.call(arguments);
                    args.push(maskset.validPositions);
                    elem = opts.casing.apply(this, args);
                }
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            const opts = this.opts;
            var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== void 0 ? na.split(",") : [];
            for (var i = 0; i < naArr.length; i++) if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++) if (altArrC.includes(altArr1[alndx])) {
                isMatch = true;
                break;
            }
            return isMatch;
        }
        function handleRemove(input, c, pos, strict, fromIsValid) {
            const inputmask = this, maskset = this.maskset, opts = this.opts;
            if (opts.numericInput || inputmask.isRTL) {
                if (c === keys.Backspace) c = keys.Delete; else if (c === keys.Delete) c = keys.Backspace;
                if (inputmask.isRTL) {
                    var pend = pos.end;
                    pos.end = pos.begin;
                    pos.begin = pend;
                }
            }
            var lvp = getLastValidPosition.call(inputmask, void 0, true);
            if (pos.end >= getBuffer.call(inputmask).length && lvp >= pos.end) pos.end = lvp + 1;
            if (c === keys.Backspace) {
                if (pos.end - pos.begin < 1) pos.begin = seekPrevious.call(inputmask, pos.begin);
            } else if (c === keys.Delete) if (pos.begin === pos.end) pos.end = isMask.call(inputmask, pos.end, true, true) ? pos.end + 1 : seekNext.call(inputmask, pos.end) + 1;
            var offset;
            if ((offset = revalidateMask.call(inputmask, pos)) !== false) {
                if (strict !== true && opts.keepStatic !== false || opts.regex !== null && getTest.call(inputmask, pos.begin).match.def.indexOf("|") !== -1) {
                    var result = alternate.call(inputmask, true);
                    if (result) {
                        var newPos = result.caret !== void 0 ? result.caret : result.pos ? seekNext.call(inputmask, result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition.call(inputmask, -1, true);
                        if (c !== keys.Delete || pos.begin > newPos) pos.begin == newPos;
                    }
                }
                if (strict !== true) {
                    maskset.p = c === keys.Delete ? pos.begin + offset : pos.begin;
                    maskset.p = determineNewCaretPosition.call(inputmask, {
                        begin: maskset.p,
                        end: maskset.p
                    }, false, opts.insertMode === false && c === keys.Backspace ? "none" : void 0).begin;
                }
            }
        }
        function isComplete(buffer) {
            const inputmask = this, opts = this.opts, maskset = this.maskset;
            if (typeof opts.isComplete === "function") return opts.isComplete(buffer, opts);
            if (opts.repeat === "*") return;
            var complete = false, lrp = determineLastRequiredPosition.call(inputmask, true), aml = seekPrevious.call(inputmask, lrp.l);
            if (lrp.def === void 0 || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                complete = true;
                for (var i = 0; i <= aml; i++) {
                    var test = getTestTemplate.call(inputmask, i).match;
                    if (test.static !== true && maskset.validPositions[i] === void 0 && test.optionality !== true && test.optionalQuantifier !== true || test.static === true && buffer[i] !== getPlaceholder.call(inputmask, i, test)) {
                        complete = false;
                        break;
                    }
                }
            }
            return complete;
        }
        function isSelection(posObj) {
            const inputmask = this, opts = this.opts, insertModeOffset = opts.insertMode ? 0 : 1;
            return inputmask.isRTL ? posObj.begin - posObj.end > insertModeOffset : posObj.end - posObj.begin > insertModeOffset;
        }
        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
            const inputmask = this, $ = this.dependencyLib, opts = this.opts, maskset = inputmask.maskset;
            strict = strict === true;
            var maskPos = pos;
            if (pos.begin !== void 0) maskPos = inputmask.isRTL ? pos.end : pos.begin;
            function processCommandObject(commandObj) {
                if (commandObj !== void 0) {
                    if (commandObj.remove !== void 0) {
                        if (!Array.isArray(commandObj.remove)) commandObj.remove = [ commandObj.remove ];
                        commandObj.remove.sort((function(a, b) {
                            return inputmask.isRTL ? a.pos - b.pos : b.pos - a.pos;
                        })).forEach((function(lmnt) {
                            revalidateMask.call(inputmask, {
                                begin: lmnt,
                                end: lmnt + 1
                            });
                        }));
                        commandObj.remove = void 0;
                    }
                    if (commandObj.insert !== void 0) {
                        if (!Array.isArray(commandObj.insert)) commandObj.insert = [ commandObj.insert ];
                        commandObj.insert.sort((function(a, b) {
                            return inputmask.isRTL ? b.pos - a.pos : a.pos - b.pos;
                        })).forEach((function(lmnt) {
                            if (lmnt.c !== "") isValid.call(inputmask, lmnt.pos, lmnt.c, lmnt.strict !== void 0 ? lmnt.strict : true, lmnt.fromIsValid !== void 0 ? lmnt.fromIsValid : fromIsValid);
                        }));
                        commandObj.insert = void 0;
                    }
                    if (commandObj.refreshFromBuffer && commandObj.buffer) {
                        var refresh = commandObj.refreshFromBuffer;
                        refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, commandObj.buffer);
                        commandObj.refreshFromBuffer = void 0;
                    }
                    if (commandObj.rewritePosition !== void 0) {
                        maskPos = commandObj.rewritePosition;
                        commandObj = true;
                    }
                }
                return commandObj;
            }
            function _isValid(position, c, strict) {
                var rslt = false;
                getTests.call(inputmask, position).every((function(tst, ndx) {
                    var test = tst.match;
                    getBuffer.call(inputmask, true);
                    if (test.jit && maskset.validPositions[seekPrevious.call(inputmask, position)] === void 0) rslt = false; else rslt = test.fn != null ? test.fn.test(c, maskset, position, strict, opts, isSelection.call(inputmask, pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                        c: getPlaceholder.call(inputmask, position, test, true) || test.def,
                        pos: position
                    } : false;
                    if (rslt !== false) {
                        var elem = rslt.c !== void 0 ? rslt.c : c, validatedPos = position;
                        elem = elem === opts.skipOptionalPartCharacter && test.static === true ? getPlaceholder.call(inputmask, position, test, true) || test.def : elem;
                        rslt = processCommandObject(rslt);
                        if (rslt !== true && rslt.pos !== void 0 && rslt.pos !== position) validatedPos = rslt.pos;
                        if (rslt !== true && rslt.pos === void 0 && rslt.c === void 0) return false;
                        if (revalidateMask.call(inputmask, pos, $.extend({}, tst, {
                            input: casing.call(inputmask, elem, test, validatedPos)
                        }), fromIsValid, validatedPos) === false) rslt = false;
                        return false;
                    }
                    return true;
                }));
                return rslt;
            }
            var result = true, positionsClone = $.extend(true, {}, maskset.validPositions);
            if (opts.keepStatic === false && maskset.excludes[maskPos] !== void 0 && fromAlternate !== true && fromIsValid !== true) for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) if (maskset.excludes[i] !== void 0) {
                maskset.excludes[i] = void 0;
                delete maskset.tests[i];
            }
            if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
                result = opts.preValidation.call(inputmask, getBuffer.call(inputmask), maskPos, c, isSelection.call(inputmask, pos), opts, maskset, pos, strict || fromAlternate);
                result = processCommandObject(result);
            }
            if (result === true) {
                result = _isValid(maskPos, c, strict);
                if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
                    var currentPosValid = maskset.validPositions[maskPos];
                    if (currentPosValid && currentPosValid.match.static === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) result = {
                        caret: seekNext.call(inputmask, maskPos)
                    }; else if (opts.insertMode || maskset.validPositions[seekNext.call(inputmask, maskPos)] === void 0 || pos.end > maskPos) {
                        var skip = false;
                        if (maskset.jitOffset[maskPos] && maskset.validPositions[seekNext.call(inputmask, maskPos)] === void 0) {
                            result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, true, true);
                            if (result !== false) {
                                if (fromAlternate !== true) result.caret = maskPos;
                                skip = true;
                            }
                        }
                        if (pos.end > maskPos) maskset.validPositions[maskPos] = void 0;
                        if (!skip && !isMask.call(inputmask, maskPos, opts.keepStatic && maskPos === 0)) for (var nPos = maskPos + 1, snPos = seekNext.call(inputmask, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
                            result = _isValid(nPos, c, strict);
                            if (result !== false) {
                                result = trackbackPositions.call(inputmask, maskPos, result.pos !== void 0 ? result.pos : nPos) || result;
                                maskPos = nPos;
                                break;
                            }
                        }
                    }
                }
                if (inputmask.hasAlternator && fromAlternate !== true && !strict) if (result === false && opts.keepStatic && (isComplete.call(inputmask, getBuffer.call(inputmask)) || maskPos === 0)) result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, void 0, pos); else if (isSelection.call(inputmask, pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic) result = alternate.call(inputmask, true); else if (result == true && opts.numericInput !== true && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && getLastValidPosition.call(inputmask, void 0, true) > maskPos) result = alternate.call(inputmask, true);
                if (result === true) result = {
                    pos: maskPos
                };
            }
            if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
                var postResult = opts.postValidation.call(inputmask, getBuffer.call(inputmask, true), pos.begin !== void 0 ? inputmask.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);
                if (postResult !== void 0) result = postResult === true ? result : postResult;
            }
            if (result && result.pos === void 0) result.pos = maskPos;
            if (result === false || validateOnly === true) {
                resetMaskSet.call(inputmask, true);
                maskset.validPositions = $.extend(true, [], positionsClone);
            } else trackbackPositions.call(inputmask, void 0, maskPos, true);
            var endResult = processCommandObject(result);
            if (inputmask.maxLength !== void 0) {
                var buffer = getBuffer.call(inputmask);
                if (buffer.length > inputmask.maxLength && !fromIsValid) {
                    resetMaskSet.call(inputmask, true);
                    maskset.validPositions = $.extend(true, [], positionsClone);
                    endResult = false;
                }
            }
            return endResult;
        }
        function positionCanMatchDefinition(pos, testDefinition, opts) {
            const inputmask = this, maskset = this.maskset;
            var valid = false, tests = getTests.call(inputmask, pos);
            for (var tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && (tests[tndx].match["nativeDef"] === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match.static) || tests[tndx].match["nativeDef"] === testDefinition.match["nativeDef"] || opts.regex && !tests[tndx].match.static && tests[tndx].match.fn.test(testDefinition.input, maskset, pos, false, opts))) {
                valid = true;
                break;
            } else if (tests[tndx].match && tests[tndx].match["def"] === testDefinition.match["nativeDef"]) {
                valid = void 0;
                break;
            }
            if (valid === false) if (maskset.jitOffset[pos] !== void 0) valid = positionCanMatchDefinition.call(inputmask, pos + maskset.jitOffset[pos], testDefinition, opts);
            return valid;
        }
        function refreshFromBuffer(start, end, buffer) {
            const inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
            var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter, bffr = inputmask.isRTL ? buffer.slice().reverse() : buffer;
            opts.skipOptionalPartCharacter = "";
            if (start === true) {
                resetMaskSet.call(inputmask);
                maskset.tests = {};
                start = 0;
                end = buffer.length;
                p = determineNewCaretPosition.call(inputmask, {
                    begin: 0,
                    end: 0
                }, false).begin;
            } else {
                for (i = start; i < end; i++) delete maskset.validPositions[i];
                p = start;
            }
            var keypress = new $.Event("keypress");
            for (i = start; i < end; i++) {
                keypress.key = bffr[i].toString();
                inputmask.ignorable = false;
                var valResult = EventHandlers.keypressEvent.call(inputmask, keypress, true, false, false, p);
                if (valResult !== false && valResult !== void 0) p = valResult.forwardPosition;
            }
            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
        }
        function trackbackPositions(originalPos, newPos, fillOnly) {
            const inputmask = this, maskset = this.maskset, $ = this.dependencyLib;
            if (originalPos === void 0) for (originalPos = newPos - 1; originalPos > 0; originalPos--) if (maskset.validPositions[originalPos]) break;
            for (var ps = originalPos; ps < newPos; ps++) if (maskset.validPositions[ps] === void 0 && !isMask.call(inputmask, ps, false)) {
                var vp = ps == 0 ? getTest.call(inputmask, ps) : maskset.validPositions[ps - 1];
                if (vp) {
                    var tests = getTests.call(inputmask, ps).slice();
                    if (tests[tests.length - 1].match.def === "") tests.pop();
                    var np, bestMatch = determineTestTemplate.call(inputmask, ps, tests);
                    if (bestMatch && (bestMatch.match.jit !== true || bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true)) {
                        bestMatch = $.extend({}, bestMatch, {
                            input: getPlaceholder.call(inputmask, ps, bestMatch.match, true) || bestMatch.match.def
                        });
                        bestMatch.generatedInput = true;
                        revalidateMask.call(inputmask, ps, bestMatch, true);
                        if (fillOnly !== true) {
                            var cvpInput = maskset.validPositions[newPos].input;
                            maskset.validPositions[newPos] = void 0;
                            return isValid.call(inputmask, newPos, cvpInput, true, true);
                        }
                    }
                }
            }
        }
        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
            const inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
            function IsEnclosedStatic(pos, valids, selection) {
                var posMatch = valids[pos];
                if (posMatch !== void 0 && posMatch.match.static === true && posMatch.match.optionality !== true && (valids[0] === void 0 || valids[0].alternation === void 0)) {
                    var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.static === true && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.static === true && valids[pos + 1] : valids[pos + 1];
                    return prevMatch && nextMatch;
                }
                return false;
            }
            var offset = 0, begin = pos.begin !== void 0 ? pos.begin : pos, end = pos.end !== void 0 ? pos.end : pos, valid = true;
            if (pos.begin > pos.end) {
                begin = pos.end;
                end = pos.begin;
            }
            validatedPos = validatedPos !== void 0 ? validatedPos : begin;
            if (fromIsValid === void 0 && (begin !== end || opts.insertMode && maskset.validPositions[validatedPos] !== void 0 || validTest === void 0 || validTest.match.optionalQuantifier || validTest.match.optionality)) {
                var i, positionsClone = $.extend(true, {}, maskset.validPositions), lvp = getLastValidPosition.call(inputmask, void 0, true);
                maskset.p = begin;
                for (i = lvp; i >= begin; i--) {
                    delete maskset.validPositions[i];
                    if (validTest === void 0) delete maskset.tests[i + 1];
                }
                var t, canMatch, test, j = validatedPos, posMatch = j;
                if (validTest) {
                    maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
                    posMatch++;
                    j++;
                }
                for (i = validTest ? end : end - 1; i <= lvp; i++) {
                    if ((t = positionsClone[i]) !== void 0 && t.generatedInput !== true && (i >= end || i >= begin && IsEnclosedStatic(i, positionsClone, {
                        begin,
                        end
                    }))) {
                        while (test = getTest.call(inputmask, posMatch), test.match.def !== "") {
                            if ((canMatch = positionCanMatchDefinition.call(inputmask, posMatch, t, opts)) !== false || t.match.def === "+") {
                                if (t.match.def === "+") getBuffer.call(inputmask, true);
                                var result = isValid.call(inputmask, posMatch, t.input, t.match.def !== "+", true);
                                valid = result !== false;
                                j = (result.pos || posMatch) + 1;
                                if (!valid && canMatch) break;
                            } else valid = false;
                            if (valid) {
                                if (validTest === void 0 && t.match.static && i === pos.begin) offset++;
                                break;
                            }
                            if (!valid && getBuffer.call(inputmask), posMatch > maskset.maskLength) break;
                            posMatch++;
                        }
                        if (getTest.call(inputmask, posMatch).match.def == "") valid = false;
                        posMatch = j;
                    }
                    if (!valid) break;
                }
                if (!valid) {
                    maskset.validPositions = $.extend(true, [], positionsClone);
                    resetMaskSet.call(inputmask, true);
                    return false;
                }
            } else if (validTest && getTest.call(inputmask, validatedPos).match.cd === validTest.match.cd) maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
            resetMaskSet.call(inputmask, true);
            return offset;
        }
        function caret(input, begin, end, notranslate, isDelete) {
            const inputmask = this, opts = this.opts;
            var range;
            if (begin !== void 0) {
                if (Array.isArray(begin)) {
                    end = inputmask.isRTL ? begin[0] : begin[1];
                    begin = inputmask.isRTL ? begin[1] : begin[0];
                }
                if (begin.begin !== void 0) {
                    end = inputmask.isRTL ? begin.begin : begin.end;
                    begin = inputmask.isRTL ? begin.end : begin.begin;
                }
                if (typeof begin === "number") {
                    begin = notranslate ? begin : translatePosition.call(inputmask, begin);
                    end = notranslate ? end : translatePosition.call(inputmask, end);
                    end = typeof end == "number" ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                    input.inputmask.caretPos = {
                        begin,
                        end
                    };
                    if (opts.insertModeVisual && opts.insertMode === false && begin === end) if (!isDelete) end++;
                    if (input === (input.inputmask.shadowRoot || input.ownerDocument).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end); else if (window.getSelection) {
                        range = document.createRange();
                        if (input.firstChild === void 0 || input.firstChild === null) {
                            var textNode = document.createTextNode("");
                            input.appendChild(textNode);
                        }
                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                        range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                        range.collapse(true);
                        var sel = window.getSelection();
                        sel.removeAllRanges();
                        sel.addRange(range);
                    } else if (input.createTextRange) {
                        range = input.createTextRange();
                        range.collapse(true);
                        range.moveEnd("character", end);
                        range.moveStart("character", begin);
                        range.select();
                    }
                }
            } else {
                if ("selectionStart" in input && "selectionEnd" in input) {
                    begin = input.selectionStart;
                    end = input.selectionEnd;
                } else if (window.getSelection) {
                    range = window.getSelection().getRangeAt(0);
                    if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                        begin = range.startOffset;
                        end = range.endOffset;
                    }
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                    end = begin + range.text.length;
                }
                return {
                    begin: notranslate ? begin : translatePosition.call(inputmask, begin),
                    end: notranslate ? end : translatePosition.call(inputmask, end)
                };
            }
        }
        function determineLastRequiredPosition(returnDefinition) {
            const inputmask = this, {maskset, dependencyLib: $} = inputmask;
            var pos, testPos, buffer = getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true, true), bl = buffer.length, lvp = getLastValidPosition.call(inputmask), positions = {}, lvTest = maskset.validPositions[lvp], ndxIntlzr = lvTest !== void 0 ? lvTest.locator.slice() : void 0;
            for (pos = lvp + 1; pos < buffer.length; pos++) {
                testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
                ndxIntlzr = testPos.locator.slice();
                positions[pos] = $.extend(true, {}, testPos);
            }
            var lvTestAlt = lvTest && lvTest.alternation !== void 0 ? lvTest.locator[lvTest.alternation] : void 0;
            for (pos = bl - 1; pos > lvp; pos--) {
                testPos = positions[pos];
                if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.static != true || testPos.match.static === true && testPos.locator[lvTest.alternation] && checkAlternationMatch.call(inputmask, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests.call(inputmask, pos)[0].def !== "")) && buffer[pos] === getPlaceholder.call(inputmask, pos, testPos.match)) bl--; else break;
            }
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : void 0
            } : bl;
        }
        function determineNewCaretPosition(selectedCaret, tabbed, positionCaretOnClick) {
            const inputmask = this, {maskset, opts} = inputmask;
            function doRadixFocus(clickPos) {
                if (opts.radixPoint !== "" && opts.digits !== 0) {
                    var vps = maskset.validPositions;
                    if (vps[clickPos] === void 0 || vps[clickPos].input === getPlaceholder.call(inputmask, clickPos)) {
                        if (clickPos < seekNext.call(inputmask, -1)) return true;
                        var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
                        if (radixPos !== -1) {
                            for (let vp = 0, vpl = vps.length; vp < vpl; vp++) if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder.call(inputmask, vp)) return false;
                            return true;
                        }
                    }
                }
                return false;
            }
            if (tabbed) if (inputmask.isRTL) selectedCaret.end = selectedCaret.begin; else selectedCaret.begin = selectedCaret.end;
            if (selectedCaret.begin === selectedCaret.end) {
                positionCaretOnClick = positionCaretOnClick || opts.positionCaretOnClick;
                switch (positionCaretOnClick) {
                  case "none":
                    break;

                  case "select":
                    selectedCaret = {
                        begin: 0,
                        end: getBuffer.call(inputmask).length
                    };
                    break;

                  case "ignore":
                    selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
                    break;

                  case "radixFocus":
                    if (inputmask.clicked > 1 && maskset.validPositions.length == 0) break;
                    if (doRadixFocus(selectedCaret.begin)) {
                        var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
                        selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
                        break;
                    }

                  default:
                    var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, true), lastPosition = seekNext.call(inputmask, lvclickPosition === -1 && !isMask.call(inputmask, 0) ? -1 : lvclickPosition);
                    if (clickPosition <= lastPosition) selectedCaret.end = selectedCaret.begin = !isMask.call(inputmask, clickPosition, false, true) ? seekNext.call(inputmask, clickPosition) : clickPosition; else {
                        var lvp = maskset.validPositions[lvclickPosition], tt = getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : void 0, lvp), placeholder = getPlaceholder.call(inputmask, lastPosition, tt.match);
                        if (placeholder !== "" && getBuffer.call(inputmask)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask.call(inputmask, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder) {
                            var newPos = seekNext.call(inputmask, lastPosition);
                            if (clickPosition >= newPos || clickPosition === lastPosition) lastPosition = newPos;
                        }
                        selectedCaret.end = selectedCaret.begin = lastPosition;
                    }
                }
                return selectedCaret;
            }
        }
        function getBuffer(noCache) {
            const inputmask = this, {maskset} = inputmask;
            if (maskset.buffer === void 0 || noCache === true) {
                maskset.buffer = getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true);
                if (maskset._buffer === void 0) maskset._buffer = maskset.buffer.slice();
            }
            return maskset.buffer;
        }
        function getBufferTemplate() {
            const inputmask = this, maskset = this.maskset;
            if (maskset._buffer === void 0) {
                maskset._buffer = getMaskTemplate.call(inputmask, false, 1);
                if (maskset.buffer === void 0) maskset.buffer = maskset._buffer.slice();
            }
            return maskset._buffer;
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            const maskset = this.maskset;
            var before = -1, after = -1, valids = validPositions || maskset.validPositions;
            if (closestTo === void 0) closestTo = -1;
            for (var psNdx = 0, vpl = valids.length; psNdx < vpl; psNdx++) if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                if (psNdx <= closestTo) before = psNdx;
                if (psNdx >= closestTo) after = psNdx;
            }
            return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
        }
        function isMask(pos, strict, fuzzy) {
            const inputmask = this, maskset = this.maskset;
            var test = getTestTemplate.call(inputmask, pos).match;
            if (test.def === "") test = getTest.call(inputmask, pos).match;
            if (test.static !== true) return test.fn;
            if (fuzzy === true && maskset.validPositions[pos] !== void 0 && maskset.validPositions[pos].generatedInput !== true) return true;
            if (strict !== true && pos > -1) {
                if (fuzzy) {
                    var tests = getTests.call(inputmask, pos);
                    return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
                }
                var testTemplate = determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos));
                var testPlaceHolder = getPlaceholder.call(inputmask, pos, testTemplate.match);
                return testTemplate.match.def !== testPlaceHolder;
            }
            return false;
        }
        function resetMaskSet(soft) {
            const maskset = this.maskset;
            maskset.buffer = void 0;
            if (soft !== true) {
                maskset.validPositions = [];
                maskset.p = 0;
            }
        }
        function seekNext(pos, newBlock, fuzzy) {
            const inputmask = this;
            if (fuzzy === void 0) fuzzy = true;
            var position = pos + 1;
            while (getTest.call(inputmask, position).match.def !== "" && (newBlock === true && (getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, void 0, true)) || newBlock !== true && !isMask.call(inputmask, position, void 0, fuzzy))) position++;
            return position;
        }
        function seekPrevious(pos, newBlock) {
            const inputmask = this;
            var position = pos - 1;
            if (pos <= 0) return 0;
            while (position > 0 && (newBlock === true && (getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, void 0, true)) || newBlock !== true && !isMask.call(inputmask, position, void 0, true))) position--;
            return position;
        }
        function translatePosition(pos) {
            const inputmask = this, opts = this.opts, el = this.el;
            if (inputmask.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                pos = inputmask._valueGet().length - pos;
                if (pos < 0) pos = 0;
            }
            return pos;
        }
        var EventRuler = {
            on: function(input, eventName, eventHandler) {
                const $ = input.inputmask.dependencyLib;
                var ev = function(e) {
                    if (e.originalEvent) {
                        e = e.originalEvent || e;
                        arguments[0] = e;
                    }
                    var args, that = this, inputmask = that.inputmask, opts = inputmask ? inputmask.opts : void 0;
                    if (inputmask === void 0 && this.nodeName !== "FORM") {
                        var imOpts = $.data(that, "_inputmask_opts");
                        $(that).off();
                        if (imOpts) new lib_inputmask(imOpts).mask(that);
                    } else if (![ "submit", "reset", "setvalue" ].includes(e.type) && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.key === keys.c || opts.tabThrough === false && e.key === keys.Tab))) e.preventDefault(); else {
                        switch (e.type) {
                          case "input":
                            if (inputmask.skipInputEvent === true) {
                                inputmask.skipInputEvent = false;
                                return e.preventDefault();
                            }
                            break;

                          case "click":
                          case "focus":
                            if (inputmask.validationEvent) {
                                inputmask.validationEvent = false;
                                input.blur();
                                HandleNativePlaceholder(input, (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).join(""));
                                setTimeout((function() {
                                    input.focus();
                                }), opts.validationEventTimeOut);
                                return false;
                            }
                            args = arguments;
                            setTimeout((function() {
                                if (!input.inputmask) return;
                                eventHandler.apply(that, args);
                            }), 0);
                            return;
                        }
                        var returnVal = eventHandler.apply(that, arguments);
                        if (returnVal === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        return returnVal;
                    }
                };
                if ([ "submit", "reset" ].includes(eventName)) {
                    ev = ev.bind(input);
                    if (input.form !== null) $(input.form).on(eventName, ev);
                } else $(input).on(eventName, ev);
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                input.inputmask.events[eventName].push(ev);
            },
            off: function(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    const $ = input.inputmask.dependencyLib;
                    let events = input.inputmask.events;
                    if (event) {
                        events = [];
                        events[event] = input.inputmask.events[event];
                    }
                    for (let eventName in events) {
                        let evArr = events[eventName];
                        while (evArr.length > 0) {
                            let ev = evArr.pop();
                            if ([ "submit", "reset" ].includes(eventName)) {
                                if (input.form !== null) $(input.form).off(eventName, ev);
                            } else $(input).off(eventName, ev);
                        }
                        delete input.inputmask.events[eventName];
                    }
                }
            }
        };
        function mask() {
            const inputmask = this, opts = this.opts, el = this.el, $ = this.dependencyLib;
            function isElementTypeSupported(input, opts) {
                function patchValueProperty(npt) {
                    var valueGet;
                    var valueSet;
                    function patchValhook(type) {
                        if ($.valHooks && ($.valHooks[type] === void 0 || $.valHooks[type].inputmaskpatch !== true)) {
                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                return elem.value;
                            };
                            var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                elem.value = value;
                                return elem;
                            };
                            $.valHooks[type] = {
                                get: function(elem) {
                                    if (elem.inputmask) if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue(); else {
                                        var result = valhookGet(elem);
                                        return getLastValidPosition.call(inputmask, void 0, void 0, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                    } else return valhookGet(elem);
                                },
                                set: function(elem, value) {
                                    var result = valhookSet(elem, value);
                                    if (elem.inputmask) applyInputValue(elem, value);
                                    return result;
                                },
                                inputmaskpatch: true
                            };
                        }
                    }
                    function getter() {
                        if (this.inputmask) return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition.call(inputmask) !== -1 || opts.nullable !== true ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && opts.clearMaskOnLostFocus ? (inputmask.isRTL ? clearOptionalTail.call(inputmask, getBuffer.call(inputmask).slice()).reverse() : clearOptionalTail.call(inputmask, getBuffer.call(inputmask).slice())).join("") : valueGet.call(this) : ""; else return valueGet.call(this);
                    }
                    function setter(value) {
                        valueSet.call(this, value);
                        if (this.inputmask) applyInputValue(this, value);
                    }
                    function installNativeValueSetFallback(npt) {
                        EventRuler.on(npt, "mouseenter", (function() {
                            let input = this, value = input.inputmask._valueGet(true), bufferValue = (input.inputmask.isRTL ? getBuffer.call(input.inputmask).slice().reverse() : getBuffer.call(input.inputmask)).join("");
                            if (value != bufferValue) applyInputValue(input, value);
                        }));
                    }
                    if (!npt.inputmask.__valueGet) {
                        if (opts.noValuePatching !== true) {
                            if (Object.getOwnPropertyDescriptor) {
                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                if (valueProperty && valueProperty.get && valueProperty.set) {
                                    valueGet = valueProperty.get;
                                    valueSet = valueProperty.set;
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: true
                                    });
                                } else if (npt.tagName.toLowerCase() !== "input") {
                                    valueGet = function() {
                                        return this.textContent;
                                    };
                                    valueSet = function(value) {
                                        this.textContent = value;
                                    };
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: true
                                    });
                                }
                            } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                                valueGet = npt.__lookupGetter__("value");
                                valueSet = npt.__lookupSetter__("value");
                                npt.__defineGetter__("value", getter);
                                npt.__defineSetter__("value", setter);
                            }
                            npt.inputmask.__valueGet = valueGet;
                            npt.inputmask.__valueSet = valueSet;
                        }
                        npt.inputmask._valueGet = function(overruleRTL) {
                            return inputmask.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                        };
                        npt.inputmask._valueSet = function(value, overruleRTL) {
                            valueSet.call(this.el, value === null || value === void 0 ? "" : overruleRTL !== true && inputmask.isRTL ? value.split("").reverse().join("") : value);
                        };
                        if (valueGet === void 0) {
                            valueGet = function() {
                                return this.value;
                            };
                            valueSet = function(value) {
                                this.value = value;
                            };
                            patchValhook(npt.type);
                            installNativeValueSetFallback(npt);
                        }
                    }
                }
                if (input.tagName.toLowerCase() !== "textarea") opts.ignorables.push(keys.Enter);
                var elementType = input.getAttribute("type");
                var isSupported = input.tagName.toLowerCase() === "input" && opts.supportsInputType.includes(elementType) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";
                if (!isSupported) if (input.tagName.toLowerCase() === "input") {
                    var el = document.createElement("input");
                    el.setAttribute("type", elementType);
                    isSupported = el.type === "text";
                    el = null;
                } else isSupported = "partial";
                if (isSupported !== false) patchValueProperty(input); else input.inputmask = void 0;
                return isSupported;
            }
            EventRuler.off(el);
            var isSupported = isElementTypeSupported(el, opts);
            if (isSupported !== false) {
                inputmask.originalPlaceholder = el.placeholder;
                inputmask.maxLength = el !== void 0 ? el.maxLength : void 0;
                if (inputmask.maxLength === -1) inputmask.maxLength = void 0;
                if ("inputMode" in el && el.getAttribute("inputmode") === null) {
                    el.inputMode = opts.inputmode;
                    el.setAttribute("inputmode", opts.inputmode);
                }
                if (isSupported === true) {
                    opts.showMaskOnFocus = opts.showMaskOnFocus && [ "cc-number", "cc-exp" ].indexOf(el.autocomplete) === -1;
                    if (iphone) {
                        opts.insertModeVisual = false;
                        el.setAttribute("autocorrect", "off");
                    }
                    EventRuler.on(el, "submit", EventHandlers.submitEvent);
                    EventRuler.on(el, "reset", EventHandlers.resetEvent);
                    EventRuler.on(el, "blur", EventHandlers.blurEvent);
                    EventRuler.on(el, "focus", EventHandlers.focusEvent);
                    EventRuler.on(el, "invalid", EventHandlers.invalidEvent);
                    EventRuler.on(el, "click", EventHandlers.clickEvent);
                    EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                    EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                    EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                    EventRuler.on(el, "cut", EventHandlers.cutEvent);
                    EventRuler.on(el, "complete", opts.oncomplete);
                    EventRuler.on(el, "incomplete", opts.onincomplete);
                    EventRuler.on(el, "cleared", opts.oncleared);
                    if (opts.inputEventOnly !== true) EventRuler.on(el, "keydown", EventHandlers.keyEvent);
                    if (mobile || opts.inputEventOnly) el.removeAttribute("maxLength");
                    EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                }
                EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
                getBufferTemplate.call(inputmask).join("");
                inputmask.undoValue = inputmask._valueGet(true);
                var activeElement = (el.inputmask.shadowRoot || el.ownerDocument).activeElement;
                if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
                    applyInputValue(el, el.inputmask._valueGet(true), opts);
                    var buffer = getBuffer.call(inputmask).slice();
                    if (isComplete.call(inputmask, buffer) === false) if (opts.clearIncomplete) resetMaskSet.call(inputmask);
                    if (opts.clearMaskOnLostFocus && activeElement !== el) if (getLastValidPosition.call(inputmask) === -1) buffer = []; else clearOptionalTail.call(inputmask, buffer);
                    if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && activeElement === el || el.inputmask._valueGet(true) !== "") writeBuffer(el, buffer);
                    if (activeElement === el) caret.call(inputmask, el, seekNext.call(inputmask, getLastValidPosition.call(inputmask)));
                }
            }
        }
        function extend_extend() {
            let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if (typeof target !== "object" && typeof target !== "function") target = {};
            for (;i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) continue;
                if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
                    target[name] = extend_extend(deep, clone, copy);
                } else if (copy !== void 0) target[name] = copy;
            }
            return target;
        }
        function data(owner, key, value) {
            if (value === void 0) return owner.__data ? owner.__data[key] : null; else {
                owner.__data = owner.__data || {};
                owner.__data[key] = value;
            }
        }
        function isValidElement(elem) {
            return elem instanceof Element;
        }
        let events_Event;
        if (typeof global_window.CustomEvent === "function") events_Event = global_window.CustomEvent; else if (lib_canUseDOM) {
            events_Event = function(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    composed: true,
                    detail: void 0
                };
                var evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };
            events_Event.prototype = global_window.Event.prototype;
        }
        function on(events, handler) {
            function addEvent(ev, namespace) {
                if (elem.addEventListener) elem.addEventListener(ev, handler, false); else if (elem.attachEvent) elem.attachEvent(`on${ev}`, handler);
                eventRegistry[ev] = eventRegistry[ev] || {};
                eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
                eventRegistry[ev][namespace].push(handler);
            }
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                events.split(" ").forEach((event => {
                    const [ev, namespace = "global"] = event.split(".");
                    addEvent(ev, namespace);
                }));
            }
            return this;
        }
        function off(events, handler) {
            var eventRegistry, elem;
            function removeEvent(ev, namespace, handler) {
                if (ev in eventRegistry === true) {
                    if (elem.removeEventListener) elem.removeEventListener(ev, handler, false); else if (elem.detachEvent) elem.detachEvent(`on${ev}`, handler);
                    if (namespace === "global") for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                }
            }
            function resolveNamespace(ev, namespace) {
                var hndx, hndL, evts = [];
                if (ev.length > 0) if (handler === void 0) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({
                    ev,
                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                    handler: eventRegistry[ev][namespace][hndx]
                }); else evts.push({
                    ev,
                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                    handler
                }); else if (namespace.length > 0) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (handler === void 0) for (hndx = 0, 
                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: eventRegistry[evNdx][nmsp][hndx]
                }); else evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler
                });
                return evts;
            }
            if (isValidElement(this[0]) && events) {
                eventRegistry = this[0].eventRegistry;
                elem = this[0];
                events.split(" ").forEach((event => {
                    const [ev, namespace] = event.split(".");
                    resolveNamespace(ev, namespace).forEach((({ev: ev1, handler: handler1, namespace: namespace1}) => {
                        removeEvent(ev1, namespace1, handler1);
                    }));
                }));
            }
            return this;
        }
        function trigger(events) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                var _events = typeof events === "string" ? events.split(" ") : [ events.type ];
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                    if (document !== void 0 && namespace === "global") {
                        var evnt, params = {
                            bubbles: true,
                            cancelable: true,
                            composed: true,
                            detail: arguments[1]
                        };
                        if (document.createEvent) {
                            try {
                                switch (ev) {
                                  case "input":
                                    params.inputType = "insertText";
                                    evnt = new InputEvent(ev, params);
                                    break;

                                  default:
                                    evnt = new CustomEvent(ev, params);
                                }
                            } catch (e) {
                                evnt = document.createEvent("CustomEvent");
                                evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                            }
                            if (events.type) extend_extend(evnt, events);
                            elem.dispatchEvent(evnt);
                        } else {
                            evnt = document.createEventObject();
                            evnt.eventType = ev;
                            evnt.detail = arguments[1];
                            if (events.type) extend_extend(evnt, events);
                            elem.fireEvent("on" + evnt.eventType, evnt);
                        }
                    } else if (eventRegistry[ev] !== void 0) {
                        arguments[0] = arguments[0].type ? arguments[0] : inputmask_dependencyLib.Event(arguments[0]);
                        arguments[0].detail = arguments.slice(1);
                        const registry = eventRegistry[ev], handlers = namespace === "global" ? Object.values(registry).flat() : registry[namespace];
                        handlers.forEach((handler => handler.apply(elem, arguments)));
                    }
                }
            }
            return this;
        }
        const inputmask_dependencyLib_document = global_window.document;
        function DependencyLib(elem) {
            if (elem instanceof DependencyLib) return elem;
            if (!(this instanceof DependencyLib)) return new DependencyLib(elem);
            if (elem !== void 0 && elem !== null && elem !== global_window) {
                this[0] = elem.nodeName ? elem : elem[0] !== void 0 && elem[0].nodeName ? elem[0] : inputmask_dependencyLib_document.querySelector(elem);
                if (this[0] !== void 0 && this[0] !== null) this[0].eventRegistry = this[0].eventRegistry || {};
            }
        }
        DependencyLib.prototype = {
            on,
            off,
            trigger
        };
        DependencyLib.extend = extend_extend;
        DependencyLib.data = data;
        DependencyLib.Event = events_Event;
        const inputmask_dependencyLib = DependencyLib;
        function masktoken(isGroup, isOptional, isQuantifier, isAlternator) {
            this.matches = [];
            this.openGroup = isGroup || false;
            this.alternatorGroup = false;
            this.isGroup = isGroup || false;
            this.isOptional = isOptional || false;
            this.isQuantifier = isQuantifier || false;
            this.isAlternator = isAlternator || false;
            this.quantifier = {
                min: 1,
                max: 1
            };
        }
        const escapeRegexRegex = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
        function escapeRegex(str) {
            return str.replace(escapeRegexRegex, "\\$1");
        }
        function generateMaskSet(opts, nocache) {
            var ms;
            function preProcessMask(mask, {repeat, groupmarker, quantifiermarker, keepStatic}) {
                if (repeat > 0 || repeat === "*" || repeat === "+") {
                    var repeatStart = repeat === "*" ? 0 : repeat === "+" ? 1 : repeat;
                    mask = groupmarker[0] + mask + groupmarker[1] + quantifiermarker[0] + repeatStart + "," + repeat + quantifiermarker[1];
                }
                if (keepStatic === true) {
                    let optionalRegex = "(.)\\[([^\\]]*)\\]", maskMatches = mask.match(new RegExp(optionalRegex, "g"));
                    maskMatches && maskMatches.forEach(((m, i) => {
                        let [p1, p2] = m.split("[");
                        p2 = p2.replace("]", "");
                        mask = mask.replace(new RegExp(`${escapeRegex(p1)}\\[${escapeRegex(p2)}\\]`), p1.charAt(0) === p2.charAt(0) ? `(${p1}|${p1}${p2})` : `${p1}[${p2}]`);
                    }));
                }
                return mask;
            }
            function generateMask(mask, metadata, opts) {
                var regexMask = false;
                if (mask === null || mask === "") {
                    regexMask = opts.regex !== null;
                    if (regexMask) {
                        mask = opts.regex;
                        mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                    } else {
                        regexMask = true;
                        mask = ".*";
                    }
                }
                if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) opts.placeholder = "";
                mask = preProcessMask(mask, opts);
                var masksetDefinition, maskdefKey;
                maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
                if (opts.keepStatic !== null) maskdefKey = "ks_" + opts.keepStatic + maskdefKey;
                if (lib_inputmask.prototype.masksCache[maskdefKey] === void 0 || nocache === true) {
                    masksetDefinition = {
                        mask,
                        maskToken: lib_inputmask.prototype.analyseMask(mask, regexMask, opts),
                        validPositions: [],
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        excludes: {},
                        metadata,
                        maskLength: void 0,
                        jitOffset: {}
                    };
                    if (nocache !== true) {
                        lib_inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                        masksetDefinition = inputmask_dependencyLib.extend(true, {}, lib_inputmask.prototype.masksCache[maskdefKey]);
                    }
                } else masksetDefinition = inputmask_dependencyLib.extend(true, {}, lib_inputmask.prototype.masksCache[maskdefKey]);
                return masksetDefinition;
            }
            if (typeof opts.mask === "function") opts.mask = opts.mask(opts);
            if (Array.isArray(opts.mask)) if (opts.mask.length > 1) {
                if (opts.keepStatic === null) opts.keepStatic = true;
                var altMask = opts.groupmarker[0];
                (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach((function(msk) {
                    if (altMask.length > 1) altMask += opts.alternatormarker;
                    if (msk.mask !== void 0 && typeof msk.mask !== "function") altMask += msk.mask; else altMask += msk;
                }));
                altMask += opts.groupmarker[1];
                return generateMask(altMask, opts.mask, opts);
            } else opts.mask = opts.mask.pop();
            if (opts.mask && opts.mask.mask !== void 0 && typeof opts.mask.mask !== "function") ms = generateMask(opts.mask.mask, opts.mask, opts); else ms = generateMask(opts.mask, opts.mask, opts);
            if (opts.keepStatic === null) opts.keepStatic = false;
            return ms;
        }
        function analyseMask(mask, regexMask, opts) {
            const tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g;
            var match, m, openingToken, currentOpeningToken, alternator, lastMatch, escaped = false, currentToken = new masktoken, openenings = [], maskTokens = [], closeRegexGroup = false;
            function insertTestDefinition(mtoken, element, position) {
                position = position !== void 0 ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) {
                    if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w|\\p/i.test(element) || element === ".") {
                        let flag = opts.casing ? "i" : "";
                        if (/^\\p\{.*}$/i.test(element)) flag += "u";
                        mtoken.matches.splice(position++, 0, {
                            fn: new RegExp(element, flag),
                            static: false,
                            optionality: false,
                            newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== element,
                            casing: null,
                            def: element,
                            placeholder: void 0,
                            nativeDef: element
                        });
                    } else {
                        if (escaped) element = element[element.length - 1];
                        element.split("").forEach((function(lmnt, ndx) {
                            prevMatch = mtoken.matches[position - 1];
                            mtoken.matches.splice(position++, 0, {
                                fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                                static: true,
                                optionality: false,
                                newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== lmnt && prevMatch.static !== true,
                                casing: null,
                                def: opts.staticDefinitionSymbol || lmnt,
                                placeholder: opts.staticDefinitionSymbol !== void 0 ? lmnt : void 0,
                                nativeDef: (escaped ? "'" : "") + lmnt
                            });
                        }));
                    }
                    escaped = false;
                } else {
                    var maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && lib_inputmask.prototype.definitions[element];
                    if (maskdef && !escaped) mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                            this.test = maskdef.validator;
                        } : new RegExp("."),
                        static: maskdef.static || false,
                        optionality: maskdef.optional || false,
                        defOptionality: maskdef.optional || false,
                        newBlockMarker: prevMatch === void 0 || maskdef.optional ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element,
                        generated: maskdef.generated
                    }); else {
                        mtoken.matches.splice(position++, 0, {
                            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                            static: true,
                            optionality: false,
                            newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== element && prevMatch.static !== true,
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: opts.staticDefinitionSymbol !== void 0 ? element : void 0,
                            nativeDef: (escaped ? "'" : "") + element
                        });
                        escaped = false;
                    }
                }
            }
            function verifyGroupMarker(maskToken) {
                if (maskToken && maskToken.matches) maskToken.matches.forEach((function(token, ndx) {
                    var nextToken = maskToken.matches[ndx + 1];
                    if ((nextToken === void 0 || nextToken.matches === void 0 || nextToken.isQuantifier === false) && token && token.isGroup) {
                        token.isGroup = false;
                        if (!regexMask) {
                            insertTestDefinition(token, opts.groupmarker[0], 0);
                            if (token.openGroup !== true) insertTestDefinition(token, opts.groupmarker[1]);
                        }
                    }
                    verifyGroupMarker(token);
                }));
            }
            function defaultCase() {
                if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    insertTestDefinition(currentOpeningToken, m);
                    if (currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(alternator);
                        } else currentToken.matches.push(alternator);
                    }
                } else insertTestDefinition(currentToken, m);
            }
            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    if (st === opts.optionalmarker[0]) st = opts.optionalmarker[1]; else if (st === opts.optionalmarker[1]) st = opts.optionalmarker[0]; else if (st === opts.groupmarker[0]) st = opts.groupmarker[1]; else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                    return st;
                }
                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1);
                        maskToken.matches.splice(intMatch + 1, 0, qt);
                    }
                    if (maskToken.matches[match].matches !== void 0) maskToken.matches[match] = reverseTokens(maskToken.matches[match]); else maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                }
                return maskToken;
            }
            function groupify(matches) {
                var groupToken = new masktoken(true);
                groupToken.openGroup = false;
                groupToken.matches = matches;
                return groupToken;
            }
            function closeGroup() {
                openingToken = openenings.pop();
                openingToken.openGroup = false;
                if (openingToken !== void 0) if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    currentOpeningToken.matches.push(openingToken);
                    if (currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        let altMatchesLength = alternator.matches[0].matches ? alternator.matches[0].matches.length : 1;
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                            alternator.matches[mndx].isGroup = false;
                            alternator.matches[mndx].alternatorGroup = false;
                            if (opts.keepStatic === null && altMatchesLength < (alternator.matches[mndx].matches ? alternator.matches[mndx].matches.length : 1)) opts.keepStatic = true;
                            altMatchesLength = alternator.matches[mndx].matches ? alternator.matches[mndx].matches.length : 1;
                        }
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(alternator);
                        } else currentToken.matches.push(alternator);
                    }
                } else currentToken.matches.push(openingToken); else defaultCase();
            }
            function groupQuantifier(matches) {
                var lastMatch = matches.pop();
                if (lastMatch.isQuantifier) lastMatch = groupify([ matches.pop(), lastMatch ]);
                return lastMatch;
            }
            if (regexMask) {
                opts.optionalmarker[0] = void 0;
                opts.optionalmarker[1] = void 0;
            }
            while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                m = match[0];
                if (regexMask) {
                    switch (m.charAt(0)) {
                      case "?":
                        m = "{0,1}";
                        break;

                      case "+":
                      case "*":
                        m = "{" + m + "}";
                        break;

                      case "|":
                        if (openenings.length === 0) {
                            var altRegexGroup = groupify(currentToken.matches);
                            altRegexGroup.openGroup = true;
                            openenings.push(altRegexGroup);
                            currentToken.matches = [];
                            closeRegexGroup = true;
                        }
                        break;
                    }
                    switch (m) {
                      case "\\d":
                        m = "[0-9]";
                        break;

                      case "\\p":
                        m += regexTokenizer.exec(mask)[0];
                        m += regexTokenizer.exec(mask)[0];
                        break;

                      case "(?:":
                      case "(?=":
                      case "(?!":
                      case "(?<=":
                      case "(?<!":
                        break;
                    }
                }
                if (escaped) {
                    defaultCase();
                    continue;
                }
                switch (m.charAt(0)) {
                  case "$":
                  case "^":
                    if (!regexMask) defaultCase();
                    break;

                  case opts.escapeChar:
                    escaped = true;
                    if (regexMask) defaultCase();
                    break;

                  case opts.optionalmarker[1]:
                  case opts.groupmarker[1]:
                    closeGroup();
                    break;

                  case opts.optionalmarker[0]:
                    openenings.push(new masktoken(false, true));
                    break;

                  case opts.groupmarker[0]:
                    openenings.push(new masktoken(true));
                    break;

                  case opts.quantifiermarker[0]:
                    var quantifier = new masktoken(false, false, true);
                    m = m.replace(/[{}?]/g, "");
                    var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]), mqJit = isNaN(mqj[1]) ? mqj[1] : parseInt(mqj[1]);
                    if (mq0 === "*" || mq0 === "+") mq0 = mq1 === "*" ? 0 : 1;
                    quantifier.quantifier = {
                        min: mq0,
                        max: mq1,
                        jit: mqJit
                    };
                    var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                    match = matches.pop();
                    if (!match.isGroup) match = groupify([ match ]);
                    matches.push(match);
                    matches.push(quantifier);
                    break;

                  case opts.alternatormarker:
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                        if (currentOpeningToken.openGroup && (subToken.matches === void 0 || subToken.isGroup === false && subToken.isAlternator === false)) lastMatch = openenings.pop(); else lastMatch = groupQuantifier(currentOpeningToken.matches);
                    } else lastMatch = groupQuantifier(currentToken.matches);
                    if (lastMatch.isAlternator) openenings.push(lastMatch); else {
                        if (lastMatch.alternatorGroup) {
                            alternator = openenings.pop();
                            lastMatch.alternatorGroup = false;
                        } else alternator = new masktoken(false, false, false, true);
                        alternator.matches.push(lastMatch);
                        openenings.push(alternator);
                        if (lastMatch.openGroup) {
                            lastMatch.openGroup = false;
                            var alternatorGroup = new masktoken(true);
                            alternatorGroup.alternatorGroup = true;
                            openenings.push(alternatorGroup);
                        }
                    }
                    break;

                  default:
                    defaultCase();
                }
            }
            if (closeRegexGroup) closeGroup();
            while (openenings.length > 0) {
                openingToken = openenings.pop();
                currentToken.matches.push(openingToken);
            }
            if (currentToken.matches.length > 0) {
                verifyGroupMarker(currentToken);
                maskTokens.push(currentToken);
            }
            if (opts.numericInput || opts.isRTL) reverseTokens(maskTokens[0]);
            return maskTokens;
        }
        const definitions = {
            9: {
                validator: "[0-9０-９]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
            }
        };
        const lib_defaults = {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: [ "[", "]" ],
            quantifiermarker: [ "{", "}" ],
            groupmarker: [ "(", ")" ],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: () => {},
            onincomplete: () => {},
            oncleared: () => {},
            repeat: 0,
            greedy: false,
            autoUnmask: false,
            removeMaskOnSubmit: false,
            clearMaskOnLostFocus: true,
            insertMode: true,
            insertModeVisual: true,
            clearIncomplete: false,
            alias: null,
            onKeyDown: () => {},
            onBeforeMask: null,
            onBeforePaste: function(pastedValue, opts) {
                return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: true,
            showMaskOnHover: true,
            onKeyValidation: () => {},
            skipOptionalPartCharacter: " ",
            numericInput: false,
            rightAlign: false,
            undoOnEscape: true,
            radixPoint: "",
            _radixDance: false,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: true,
            tabThrough: false,
            supportsInputType: [ "text", "tel", "url", "password", "search" ],
            ignorables: [ keys.Backspace, keys.Tab, keys.Pause, keys.Escape, keys.PageUp, keys.PageDown, keys.End, keys.Home, keys.ArrowLeft, keys.ArrowUp, keys.ArrowRight, keys.ArrowDown, keys.Insert, keys.Delete, keys.ContextMenu, keys.F1, keys.F2, keys.F3, keys.F4, keys.F5, keys.F6, keys.F7, keys.F8, keys.F9, keys.F10, keys.F11, keys.F12, keys.Process, keys.Unidentified, keys.Shift, keys.Control, keys.Alt, keys.Tab, keys.AltGraph, keys.CapsLock ],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: false,
            nullable: true,
            inputEventOnly: false,
            noValuePatching: false,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: true,
            shiftPositions: true,
            usePrototypeDefinitions: true,
            validationEventTimeOut: 3e3,
            substitutes: {}
        };
        const inputmask_document = global_window.document, dataKey = "_inputmask_opts";
        function Inputmask(alias, options, internal) {
            if (!lib_canUseDOM) return;
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.dependencyLib = inputmask_dependencyLib;
            this.el = void 0;
            this.events = {};
            this.maskset = void 0;
            if (internal !== true) {
                if (Object.prototype.toString.call(alias) === "[object Object]") options = alias; else {
                    options = options || {};
                    if (alias) options.alias = alias;
                }
                this.opts = inputmask_dependencyLib.extend(true, {}, this.defaults, options);
                this.noMasksCache = options && options.definitions !== void 0;
                this.userOptions = options || {};
                resolveAlias(this.opts.alias, options, this.opts);
            }
            this.refreshValue = false;
            this.undoValue = void 0;
            this.$el = void 0;
            this.skipInputEvent = false;
            this.validationEvent = false;
            this.ignorable = false;
            this.maxLength;
            this.mouseEnter = false;
            this.clicked = 0;
            this.originalPlaceholder = void 0;
            this.isComposing = false, this.hasAlternator = false;
        }
        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: lib_defaults,
            definitions,
            aliases: {},
            masksCache: {},
            get isRTL() {
                return this.opts.isRTL || this.opts.numericInput;
            },
            mask: function(elems) {
                var that = this;
                if (typeof elems === "string") elems = inputmask_document.getElementById(elems) || inputmask_document.querySelectorAll(elems);
                elems = elems.nodeName ? [ elems ] : Array.isArray(elems) ? elems : [].slice.call(elems);
                elems.forEach((function(el, ndx) {
                    var scopedOpts = inputmask_dependencyLib.extend(true, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, inputmask_dependencyLib.extend(true, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                        if (maskset !== void 0) {
                            if (el.inputmask !== void 0) {
                                el.inputmask.opts.autoUnmask = true;
                                el.inputmask.remove();
                            }
                            el.inputmask = new Inputmask(void 0, void 0, true);
                            el.inputmask.opts = scopedOpts;
                            el.inputmask.noMasksCache = that.noMasksCache;
                            el.inputmask.userOptions = inputmask_dependencyLib.extend(true, {}, that.userOptions);
                            el.inputmask.el = el;
                            el.inputmask.$el = inputmask_dependencyLib(el);
                            el.inputmask.maskset = maskset;
                            inputmask_dependencyLib.data(el, dataKey, that.userOptions);
                            mask.call(el.inputmask);
                        }
                    }
                }));
                return elems && elems[0] ? elems[0].inputmask || this : this;
            },
            option: function(options, noremask) {
                if (typeof options === "string") return this.opts[options]; else if (typeof options === "object") {
                    inputmask_dependencyLib.extend(this.userOptions, options);
                    if (this.el && noremask !== true) this.mask(this.el);
                    return this;
                }
            },
            unmaskedvalue: function(value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                if (this.el === void 0 || value !== void 0) {
                    var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
                    checkVal.call(this, void 0, false, false, valueBuffer);
                    if (typeof this.opts.onBeforeWrite === "function") this.opts.onBeforeWrite.call(this, void 0, getBuffer.call(this), 0, this.opts);
                }
                return unmaskedvalue.call(this, this.el);
            },
            remove: function() {
                if (this.el) {
                    inputmask_dependencyLib.data(this.el, dataKey, null);
                    var cv = this.opts.autoUnmask ? unmaskedvalue(this.el) : this._valueGet(this.opts.autoUnmask);
                    if (cv !== getBufferTemplate.call(this).join("")) this._valueSet(cv, this.opts.autoUnmask); else this._valueSet("");
                    EventRuler.off(this.el);
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                        valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value");
                        if (valueProperty) if (this.__valueGet) Object.defineProperty(this.el, "value", {
                            get: this.__valueGet,
                            set: this.__valueSet,
                            configurable: true
                        });
                    } else if (inputmask_document.__lookupGetter__ && this.el.__lookupGetter__("value")) if (this.__valueGet) {
                        this.el.__defineGetter__("value", this.__valueGet);
                        this.el.__defineSetter__("value", this.__valueSet);
                    }
                    this.el.inputmask = void 0;
                }
                return this.el;
            },
            getemptymask: function() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return (this.isRTL ? getBufferTemplate.call(this).reverse() : getBufferTemplate.call(this)).join("");
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask;
            },
            isComplete: function() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return isComplete.call(this, getBuffer.call(this));
            },
            getmetadata: function() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                if (Array.isArray(this.maskset.metadata)) {
                    var maskTarget = getMaskTemplate.call(this, true, 0, false).join("");
                    this.maskset.metadata.forEach((function(mtdt) {
                        if (mtdt.mask === maskTarget) {
                            maskTarget = mtdt;
                            return false;
                        }
                        return true;
                    }));
                    return maskTarget;
                }
                return this.maskset.metadata;
            },
            isValid: function(value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                if (value) {
                    var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
                    checkVal.call(this, void 0, true, false, valueBuffer);
                } else value = this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join("");
                var buffer = getBuffer.call(this);
                var rl = determineLastRequiredPosition.call(this), lmib = buffer.length - 1;
                for (;lmib > rl; lmib--) if (isMask.call(this, lmib)) break;
                buffer.splice(rl, lmib + 1 - rl);
                return isComplete.call(this, buffer) && value === (this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join(""));
            },
            format: function(value, metadata) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                let valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
                checkVal.call(this, void 0, true, false, valueBuffer);
                let formattedValue = this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join("");
                return metadata ? {
                    value: formattedValue,
                    metadata: this.getmetadata()
                } : formattedValue;
            },
            setValue: function(value) {
                if (this.el) inputmask_dependencyLib(this.el).trigger("setvalue", [ value ]);
            },
            analyseMask
        };
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            if (aliasDefinition) {
                if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, void 0, opts);
                inputmask_dependencyLib.extend(true, opts, aliasDefinition);
                inputmask_dependencyLib.extend(true, opts, options);
                return true;
            } else if (opts.mask === null) opts.mask = aliasStr;
            return false;
        }
        function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
            function importOption(option, optionData) {
                const attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
                optionData = optionData !== void 0 ? optionData : npt.getAttribute(attrOption);
                if (optionData !== null) {
                    if (typeof optionData === "string") if (option.indexOf("on") === 0) optionData = global_window[optionData]; else if (optionData === "false") optionData = false; else if (optionData === "true") optionData = true;
                    userOptions[option] = optionData;
                }
            }
            if (opts.importDataAttributes === true) {
                var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                if (attrOptions && attrOptions !== "") {
                    attrOptions = attrOptions.replace(/'/g, '"');
                    dataoptions = JSON.parse("{" + attrOptions + "}");
                }
                if (dataoptions) {
                    optionData = void 0;
                    for (p in dataoptions) if (p.toLowerCase() === "alias") {
                        optionData = dataoptions[p];
                        break;
                    }
                }
                importOption("alias", optionData);
                if (userOptions.alias) resolveAlias(userOptions.alias, userOptions, opts);
                for (option in opts) {
                    if (dataoptions) {
                        optionData = void 0;
                        for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                            optionData = dataoptions[p];
                            break;
                        }
                    }
                    importOption(option, optionData);
                }
            }
            inputmask_dependencyLib.extend(true, opts, userOptions);
            if (npt.dir === "rtl" || opts.rightAlign) npt.style.textAlign = "right";
            if (npt.dir === "rtl" || opts.numericInput) {
                npt.dir = "ltr";
                npt.removeAttribute("dir");
                opts.isRTL = true;
            }
            return Object.keys(userOptions).length;
        }
        Inputmask.extendDefaults = function(options) {
            inputmask_dependencyLib.extend(true, Inputmask.prototype.defaults, options);
        };
        Inputmask.extendDefinitions = function(definition) {
            inputmask_dependencyLib.extend(true, Inputmask.prototype.definitions, definition);
        };
        Inputmask.extendAliases = function(alias) {
            inputmask_dependencyLib.extend(true, Inputmask.prototype.aliases, alias);
        };
        Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        };
        Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value);
        };
        Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value);
        };
        Inputmask.remove = function(elems) {
            if (typeof elems === "string") elems = inputmask_document.getElementById(elems) || inputmask_document.querySelectorAll(elems);
            elems = elems.nodeName ? [ elems ] : elems;
            elems.forEach((function(el) {
                if (el.inputmask) el.inputmask.remove();
            }));
        };
        Inputmask.setValue = function(elems, value) {
            if (typeof elems === "string") elems = inputmask_document.getElementById(elems) || inputmask_document.querySelectorAll(elems);
            elems = elems.nodeName ? [ elems ] : elems;
            elems.forEach((function(el) {
                if (el.inputmask) el.inputmask.setValue(value); else inputmask_dependencyLib(el).trigger("setvalue", [ value ]);
            }));
        };
        Inputmask.dependencyLib = inputmask_dependencyLib;
        global_window.Inputmask = Inputmask;
        const lib_inputmask = Inputmask;
        lib_inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        function ipValidator(chrs, maskset, pos, strict, opts) {
            if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
                chrs = maskset.buffer[pos - 1] + chrs;
                if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") chrs = maskset.buffer[pos - 2] + chrs; else chrs = "0" + chrs;
            } else chrs = "00" + chrs;
            return ipValidatorRegex.test(chrs);
        }
        lib_inputmask.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)://.*",
                autoUnmask: false,
                keepStatic: false,
                tabThrough: true
            },
            ip: {
                mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                definitions: {
                    i: {
                        validator: ipValidator
                    },
                    j: {
                        validator: ipValidator
                    },
                    k: {
                        validator: ipValidator
                    },
                    l: {
                        validator: ipValidator
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "decimal",
                substitutes: {
                    ",": "."
                }
            },
            email: {
                mask: function({separator, quantifier}) {
                    var emailMask = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]";
                    var mask = emailMask;
                    if (separator) for (let i = 0; i < quantifier; i++) mask += `[${separator}${emailMask}]`;
                    return mask;
                },
                greedy: false,
                casing: "lower",
                separator: null,
                quantifier: 5,
                skipOptionalPartCharacter: "",
                onBeforePaste: function(pastedValue, opts) {
                    pastedValue = pastedValue.toLowerCase();
                    return pastedValue.replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: true,
                autoUnmask: true
            },
            ssn: {
                mask: "999-99-9999",
                postValidation: function(buffer, pos, c, currentResult, opts, maskset, strict) {
                    var bffr = getMaskTemplate.call(this, true, getLastValidPosition.call(this), true, true);
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(bffr.join(""));
                }
            }
        });
        const $ = lib_inputmask.dependencyLib;
        class DateObject {
            constructor(mask, format, opts) {
                this.mask = mask;
                this.format = format;
                this.opts = opts;
                this._date = new Date(1, 0, 1);
                this.initDateObject(mask, this.opts);
            }
            get date() {
                if (this._date === void 0) {
                    this._date = new Date(1, 0, 1);
                    this.initDateObject(void 0, this.opts);
                }
                return this._date;
            }
            initDateObject(mask, opts) {
                let match;
                getTokenizer(opts).lastIndex = 0;
                while (match = getTokenizer(opts).exec(this.format)) {
                    let value, dynMatches = new RegExp("\\d+$").exec(match[0]), fcode = dynMatches ? match[0][0] + "x" : match[0];
                    if (mask !== void 0) {
                        if (dynMatches) {
                            let lastIndex = getTokenizer(opts).lastIndex, tokenMatch = getTokenMatch(match.index, opts);
                            getTokenizer(opts).lastIndex = lastIndex;
                            value = mask.slice(0, mask.indexOf(tokenMatch.nextMatch[0]));
                        } else value = mask.slice(0, formatCode[fcode] && formatCode[fcode][4] || fcode.length);
                        mask = mask.slice(value.length);
                    }
                    if (Object.prototype.hasOwnProperty.call(formatCode, fcode)) this.setValue(this, value, fcode, formatCode[fcode][2], formatCode[fcode][1]);
                }
            }
            setValue(dateObj, value, fcode, targetProp, dateOperation) {
                if (value !== void 0) {
                    dateObj[targetProp] = targetProp === "ampm" ? value : value.replace(/[^0-9]/g, "0");
                    dateObj["raw" + targetProp] = value.replace(/\s/g, "_");
                }
                if (dateOperation !== void 0) {
                    let datavalue = dateObj[targetProp];
                    if (targetProp === "day" && parseInt(datavalue) === 29 || targetProp === "month" && parseInt(datavalue) === 2) if (parseInt(dateObj.day) === 29 && parseInt(dateObj.month) === 2 && (dateObj.year === "" || dateObj.year === void 0)) dateObj._date.setFullYear(2012, 1, 29);
                    if (targetProp === "day") {
                        useDateObject = true;
                        if (parseInt(datavalue) === 0) datavalue = 1;
                    }
                    if (targetProp === "month") useDateObject = true;
                    if (targetProp === "year") {
                        useDateObject = true;
                        if (datavalue.length < 4) datavalue = pad(datavalue, 4, true);
                    }
                    if (datavalue !== "" && !isNaN(datavalue)) dateOperation.call(dateObj._date, datavalue);
                    if (targetProp === "ampm") dateOperation.call(dateObj._date, datavalue);
                }
            }
            reset() {
                this._date = new Date(1, 0, 1);
            }
            reInit() {
                this._date = void 0;
                this.date;
            }
        }
        let currentYear = (new Date).getFullYear(), useDateObject = false, formatCode = {
            d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
            dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return pad(Date.prototype.getDate.call(this), 2);
            } ],
            ddd: [ "" ],
            dddd: [ "" ],
            m: [ "[1-9]|1[012]", function(val) {
                let mval = val ? parseInt(val) : 0;
                if (mval > 0) mval--;
                return Date.prototype.setMonth.call(this, mval);
            }, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
            } ],
            mm: [ "0[1-9]|1[012]", function(val) {
                let mval = val ? parseInt(val) : 0;
                if (mval > 0) mval--;
                return Date.prototype.setMonth.call(this, mval);
            }, "month", function() {
                return pad(Date.prototype.getMonth.call(this) + 1, 2);
            } ],
            mmm: [ "" ],
            mmmm: [ "" ],
            yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 2);
            } ],
            yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 4);
            } ],
            h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            hx: [ function(x) {
                return `[0-9]{${x}}`;
            }, Date.prototype.setHours, "hours", function(x) {
                return Date.prototype.getHours;
            } ],
            H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            Hx: [ function(x) {
                return `[0-9]{${x}}`;
            }, Date.prototype.setHours, "hours", function(x) {
                return function() {
                    return pad(Date.prototype.getHours.call(this), x);
                };
            } ],
            M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
            MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return pad(Date.prototype.getMinutes.call(this), 2);
            } ],
            s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
            ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return pad(Date.prototype.getSeconds.call(this), 2);
            } ],
            l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 3);
            }, 3 ],
            L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 2);
            }, 2 ],
            t: [ "[ap]", setAMPM, "ampm", getAMPM, 1 ],
            tt: [ "[ap]m", setAMPM, "ampm", getAMPM, 2 ],
            T: [ "[AP]", setAMPM, "ampm", getAMPM, 1 ],
            TT: [ "[AP]M", setAMPM, "ampm", getAMPM, 2 ],
            Z: [ ".*", void 0, "Z", getTimeZoneAbbreviated ],
            o: [ "" ],
            S: [ "" ]
        }, formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function setAMPM(value) {
            const hours = this.getHours();
            if (value.toLowerCase().includes("p")) this.setHours(hours + 12); else if (value.toLowerCase().includes("a") && hours >= 12) this.setHours(hours - 12);
        }
        function getAMPM() {
            let date = this, hours = date.getHours();
            hours = hours || 12;
            return hours >= 12 ? "PM" : "AM";
        }
        function getTimeZoneAbbreviated() {
            let date = this, {1: tz} = date.toString().match(/\((.+)\)/);
            if (tz.includes(" ")) {
                tz = tz.replace("-", " ").toUpperCase();
                tz = tz.split(" ").map((([first]) => first)).join("");
            }
            return tz;
        }
        function formatcode(match) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]);
            if (dynMatches && dynMatches[0] !== void 0) {
                var fcode = formatCode[match[0][0] + "x"].slice("");
                fcode[0] = fcode[0](dynMatches[0]);
                fcode[3] = fcode[3](dynMatches[0]);
                return fcode;
            } else if (formatCode[match[0]]) return formatCode[match[0]];
        }
        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = [], dyntokens = [];
                for (var ndx in formatCode) if (/\.*x$/.test(ndx)) {
                    var dynToken = ndx[0] + "\\d+";
                    if (dyntokens.indexOf(dynToken) === -1) dyntokens.push(dynToken);
                } else if (tokens.indexOf(ndx[0]) === -1) tokens.push(ndx[0]);
                opts.tokenizer = "(" + (dyntokens.length > 0 ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.";
                opts.tokenizer = new RegExp(opts.tokenizer, "g");
            }
            return opts.tokenizer;
        }
        function prefillYear(dateParts, currentResult, opts) {
            if (dateParts.year !== dateParts.rawyear) {
                var crrntyear = currentYear.toString(), enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""), currentYearPart = crrntyear.slice(0, enteredPart.length), currentYearNextPart = crrntyear.slice(enteredPart.length);
                if (enteredPart.length === 2 && enteredPart === currentYearPart) {
                    const entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
                    if (dateParts.day == entryCurrentYear.getDate() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime())) {
                        dateParts.date.setFullYear(currentYear);
                        dateParts.year = crrntyear;
                        currentResult.insert = [ {
                            pos: currentResult.pos + 1,
                            c: currentYearNextPart[0]
                        }, {
                            pos: currentResult.pos + 2,
                            c: currentYearNextPart[1]
                        } ];
                    }
                }
            }
            return currentResult;
        }
        function isValidDate(dateParts, currentResult, opts) {
            if (!useDateObject) return true;
            if (dateParts.rawday === void 0 || !isFinite(dateParts.rawday) && new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day || dateParts.day == "29" && (!isFinite(dateParts.rawyear) || dateParts.rawyear === void 0 || dateParts.rawyear === "") || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) return currentResult; else {
                if (dateParts.day == "29") {
                    var tokenMatch = getTokenMatch(currentResult.pos, opts);
                    if (tokenMatch.targetMatch[0] === "yyyy" && currentResult.pos - tokenMatch.targetMatchIndex === 2) {
                        currentResult.remove = currentResult.pos + 1;
                        return currentResult;
                    }
                } else if (dateParts.month == "02" && dateParts.day == "30" && currentResult.c !== void 0) {
                    dateParts.day = "03";
                    dateParts.date.setDate(3);
                    dateParts.date.setMonth(1);
                    currentResult.insert = [ {
                        pos: currentResult.pos,
                        c: "0"
                    }, {
                        pos: currentResult.pos + 1,
                        c: currentResult.c
                    } ];
                    currentResult.caret = seekNext.call(this, currentResult.pos + 1);
                    return currentResult;
                }
                return false;
            }
        }
        function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
            if (!result) return result;
            if (result && opts.min) if (!isNaN(opts.min.date.getTime())) {
                let match;
                dateParts.reset();
                getTokenizer(opts).lastIndex = 0;
                while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                    var fcode;
                    if (fcode = formatcode(match)) if (fcode[3]) {
                        var setFn = fcode[1];
                        var current = dateParts[fcode[2]], minVal = opts.min[fcode[2]], maxVal = opts.max ? opts.max[fcode[2]] : minVal, curVal = [];
                        let forceCurrentValue = false;
                        for (let i = 0; i < minVal.length; i++) if (maskset.validPositions[i + match.index] === void 0 && !forceCurrentValue) {
                            curVal[i] = minVal[i];
                            if (fcode[2] === "year" && current.length - 1 == i && minVal != maxVal) curVal = (parseInt(curVal.join("")) + 1).toString().split("");
                            if (fcode[2] === "ampm" && minVal != maxVal && opts.min.date.getTime() > dateParts.date.getTime()) curVal[i] = maxVal[i];
                        } else {
                            curVal[i] = current[i];
                            forceCurrentValue = forceCurrentValue || current[i] > minVal[i];
                        }
                        setFn.call(dateParts._date, curVal.join(""));
                    }
                }
                result = opts.min.date.getTime() <= dateParts.date.getTime();
                dateParts.reInit();
            }
            if (result && opts.max) if (!isNaN(opts.max.date.getTime())) result = opts.max.date.getTime() >= dateParts.date.getTime();
            return result;
        }
        function parse(format, dateObjValue, opts, raw) {
            var match, fcode, mask = "";
            getTokenizer(opts).lastIndex = 0;
            while (match = getTokenizer(opts).exec(format)) if (dateObjValue === void 0) if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")"; else switch (match[0]) {
              case "[":
                mask += "(";
                break;

              case "]":
                mask += ")?";
                break;

              default:
                mask += escapeRegex(match[0]);
            } else if (fcode = formatcode(match)) if (raw !== true && fcode[3]) {
                var getFn = fcode[3];
                mask += getFn.call(dateObjValue.date);
            } else if (fcode[2]) mask += dateObjValue["raw" + fcode[2]]; else mask += match[0]; else mask += match[0];
            return mask;
        }
        function pad(val, len, right) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = right ? val + "0" : "0" + val;
            return val;
        }
        function inputmask_date_extensions_analyseMask(mask, format, opts) {
            if (typeof mask === "string") return new DateObject(mask, format, opts); else if (mask && typeof mask === "object" && Object.prototype.hasOwnProperty.call(mask, "date")) return mask;
            return;
        }
        function importDate(dateObj, opts) {
            return parse(opts.inputFormat, {
                date: dateObj
            }, opts);
        }
        function getTokenMatch(pos, opts) {
            var targetMatch, match, calcPos = 0, matchLength = 0;
            getTokenizer(opts).lastIndex = 0;
            while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                var dynMatches = new RegExp("\\d+$").exec(match[0]);
                matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length;
                calcPos += matchLength;
                if (calcPos >= pos + 1) {
                    targetMatch = match;
                    match = getTokenizer(opts).exec(opts.inputFormat);
                    break;
                }
            }
            return {
                targetMatchIndex: calcPos - matchLength,
                nextMatch: match,
                targetMatch
            };
        }
        lib_inputmask.extendAliases({
            datetime: {
                mask: function(opts) {
                    opts.numericInput = false;
                    formatCode.S = opts.i18n.ordinalSuffix.join("|");
                    opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat;
                    opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat;
                    opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat;
                    opts.placeholder = opts.placeholder !== "" ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, "");
                    opts.regex = parse(opts.inputFormat, void 0, opts);
                    opts.min = inputmask_date_extensions_analyseMask(opts.min, opts.inputFormat, opts);
                    opts.max = inputmask_date_extensions_analyseMask(opts.max, opts.inputFormat, opts);
                    return null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: null,
                outputFormat: null,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                },
                preValidation: function(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (strict) return true;
                    if (isNaN(c) && buffer[pos] !== c) {
                        var tokenMatch = getTokenMatch(pos, opts);
                        if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && tokenMatch.targetMatch[0].length > 1) {
                            var validator = formatCode[tokenMatch.targetMatch[0]][0];
                            if (new RegExp(validator).test("0" + buffer[pos - 1])) {
                                buffer[pos] = buffer[pos - 1];
                                buffer[pos - 1] = "0";
                                return {
                                    fuzzy: true,
                                    buffer,
                                    refreshFromBuffer: {
                                        start: pos - 1,
                                        end: pos + 1
                                    },
                                    pos: pos + 1
                                };
                            }
                        }
                    }
                    return true;
                },
                postValidation: function(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
                    const inputmask = this;
                    if (strict) return true;
                    var tokenMatch, validator;
                    if (currentResult === false) {
                        tokenMatch = getTokenMatch(pos + 1, opts);
                        if (tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && tokenMatch.targetMatch[0].length > 1 && formatCode[tokenMatch.targetMatch[0]] !== void 0) validator = formatCode[tokenMatch.targetMatch[0]][0]; else {
                            tokenMatch = getTokenMatch(pos + 2, opts);
                            if (tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos + 1 && tokenMatch.targetMatch[0].length > 1 && formatCode[tokenMatch.targetMatch[0]] !== void 0) validator = formatCode[tokenMatch.targetMatch[0]][0];
                        }
                        if (validator !== void 0) if (maskset.validPositions[pos + 1] !== void 0 && new RegExp(validator).test(c + "0")) {
                            buffer[pos] = c;
                            buffer[pos + 1] = "0";
                            currentResult = {
                                pos: pos + 2,
                                caret: pos
                            };
                        } else if (new RegExp(validator).test("0" + c)) {
                            buffer[pos] = "0";
                            buffer[pos + 1] = c;
                            currentResult = {
                                pos: pos + 2
                            };
                        }
                        if (currentResult === false) return currentResult;
                    }
                    if (currentResult.fuzzy) {
                        buffer = currentResult.buffer;
                        pos = currentResult.pos;
                    }
                    tokenMatch = getTokenMatch(pos, opts);
                    if (tokenMatch.targetMatch && tokenMatch.targetMatch[0] && formatCode[tokenMatch.targetMatch[0]] !== void 0) {
                        let fcode = formatCode[tokenMatch.targetMatch[0]];
                        validator = fcode[0];
                        var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
                        if (new RegExp(validator).test(part.join("")) === false && tokenMatch.targetMatch[0].length === 2 && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1]) maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0";
                        if (fcode[2] == "year") {
                            var _buffer = getMaskTemplate.call(inputmask, false, 1, void 0, true);
                            for (let i = pos + 1; i < buffer.length; i++) {
                                buffer[i] = _buffer[i];
                                delete maskset.validPositions[i];
                            }
                        }
                    }
                    var result = currentResult, dateParts = inputmask_date_extensions_analyseMask(buffer.join(""), opts.inputFormat, opts);
                    if (result && !isNaN(dateParts.date.getTime())) {
                        if (opts.prefillYear) result = prefillYear(dateParts, result, opts);
                        result = isValidDate.call(inputmask, dateParts, result, opts);
                        result = isDateInRange(dateParts, result, opts, maskset, fromCheckval);
                    }
                    if (pos !== void 0 && result && currentResult.pos !== pos) return {
                        buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                        refreshFromBuffer: {
                            start: pos,
                            end: currentResult.pos
                        },
                        pos: currentResult.caret || currentResult.pos
                    };
                    return result;
                },
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var input = this;
                    if (e.ctrlKey && e.key === keys.ArrowRight) {
                        input.inputmask._valueSet(importDate(new Date, opts));
                        $(input).trigger("setvalue");
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return unmaskedValue ? parse(opts.outputFormat, inputmask_date_extensions_analyseMask(maskedValue, opts.inputFormat, opts), opts, true) : unmaskedValue;
                },
                casing: function(elem, test, pos, validPositions) {
                    if (test.nativeDef.indexOf("[ap]") == 0) return elem.toLowerCase();
                    if (test.nativeDef.indexOf("[AP]") == 0) return elem.toUpperCase();
                    return elem;
                },
                onBeforeMask: function(initialValue, opts) {
                    if (Object.prototype.toString.call(initialValue) === "[object Date]") initialValue = importDate(initialValue, opts);
                    return initialValue;
                },
                insertMode: false,
                insertModeVisual: false,
                shiftPositions: false,
                keepStatic: false,
                inputmode: "numeric",
                prefillYear: true
            }
        });
        const inputmask_numeric_extensions_$ = lib_inputmask.dependencyLib;
        function autoEscape(txt, opts) {
            var escapedTxt = "";
            for (var i = 0; i < txt.length; i++) if (lib_inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) escapedTxt += "\\" + txt.charAt(i); else escapedTxt += txt.charAt(i);
            return escapedTxt;
        }
        function alignDigits(buffer, digits, opts, force) {
            if (buffer.length > 0 && digits > 0 && (!opts.digitsOptional || force)) {
                var radixPosition = buffer.indexOf(opts.radixPoint), negationBack = false;
                if (opts.negationSymbol.back === buffer[buffer.length - 1]) {
                    negationBack = true;
                    buffer.length--;
                }
                if (radixPosition === -1) {
                    buffer.push(opts.radixPoint);
                    radixPosition = buffer.length - 1;
                }
                for (var i = 1; i <= digits; i++) if (!isFinite(buffer[radixPosition + i])) buffer[radixPosition + i] = "0";
            }
            if (negationBack) buffer.push(opts.negationSymbol.back);
            return buffer;
        }
        function findValidator(symbol, maskset) {
            var posNdx = 0;
            if (symbol === "+") posNdx = seekNext.call(this, maskset.validPositions.length - 1);
            for (var tstNdx in maskset.tests) {
                tstNdx = parseInt(tstNdx);
                if (tstNdx >= posNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) if ((maskset.validPositions[tstNdx] === void 0 || symbol === "-") && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (maskset.validPositions[tstNdx] !== void 0 && symbol !== "-" ? 1 : 0);
            }
            return posNdx;
        }
        function findValid(symbol, maskset) {
            var ret = -1;
            for (let ndx = 0, vpl = maskset.validPositions.length; ndx < vpl; ndx++) {
                let tst = maskset.validPositions[ndx];
                if (tst && tst.match.def === symbol) {
                    ret = ndx;
                    break;
                }
            }
            return ret;
        }
        function parseMinMaxOptions(opts) {
            if (opts.parseMinMaxOptions === void 0) {
                if (opts.min !== null) {
                    opts.min = opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                    opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
                    if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
                }
                if (opts.max !== null) {
                    opts.max = opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                    opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
                    if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
                }
                opts.parseMinMaxOptions = "done";
            }
        }
        function genMask(opts) {
            opts.repeat = 0;
            if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") if (opts.radixPoint === ".") opts.groupSeparator = ","; else if (opts.radixPoint === ",") opts.groupSeparator = "."; else opts.groupSeparator = "";
            if (opts.groupSeparator === " ") opts.skipOptionalPartCharacter = void 0;
            if (opts.placeholder.length > 1) opts.placeholder = opts.placeholder.charAt(0);
            if (opts.positionCaretOnClick === "radixFocus" && opts.placeholder === "") opts.positionCaretOnClick = "lvp";
            var decimalDef = "0", radixPointDef = opts.radixPoint;
            if (opts.numericInput === true && opts.__financeInput === void 0) {
                decimalDef = "1";
                opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                opts.digitsOptional = false;
                if (isNaN(opts.digits)) opts.digits = 2;
                opts._radixDance = false;
                radixPointDef = opts.radixPoint === "," ? "?" : "!";
                if (opts.radixPoint !== "" && opts.definitions[radixPointDef] === void 0) {
                    opts.definitions[radixPointDef] = {};
                    opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]";
                    opts.definitions[radixPointDef].placeholder = opts.radixPoint;
                    opts.definitions[radixPointDef].static = true;
                    opts.definitions[radixPointDef].generated = true;
                }
            } else {
                opts.__financeInput = false;
                opts.numericInput = true;
            }
            var altMask, mask = "[+]";
            mask += autoEscape(opts.prefix, opts);
            if (opts.groupSeparator !== "") {
                if (opts.definitions[opts.groupSeparator] === void 0) {
                    opts.definitions[opts.groupSeparator] = {};
                    opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]";
                    opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator;
                    opts.definitions[opts.groupSeparator].static = true;
                    opts.definitions[opts.groupSeparator].generated = true;
                }
                mask += opts._mask(opts);
            } else mask += "9{+}";
            if (opts.digits !== void 0 && opts.digits !== 0) {
                var dq = opts.digits.toString().split(",");
                if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) mask += radixPointDef + decimalDef + "{" + opts.digits + "}"; else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) if (opts.digitsOptional || opts.jitMasking) {
                    altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}";
                    opts.keepStatic = true;
                } else mask += radixPointDef + decimalDef + "{" + opts.digits + "}";
            } else opts.inputmode = "numeric";
            mask += autoEscape(opts.suffix, opts);
            mask += "[-]";
            if (altMask) mask = [ altMask + autoEscape(opts.suffix, opts) + "[-]", mask ];
            opts.greedy = false;
            parseMinMaxOptions(opts);
            if (opts.radixPoint !== "" && opts.substituteRadixPoint) opts.substitutes[opts.radixPoint == "." ? "," : "."] = opts.radixPoint;
            return mask;
        }
        function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
            if (opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back) if (pos <= radixPos && (radixPos > 0 || c == opts.radixPoint) && (maskset.validPositions[pos - 1] === void 0 || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back)) pos -= 1;
            return pos;
        }
        function decimalValidator(chrs, maskset, pos, strict, opts) {
            var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1, result = (radixPos !== -1 || strict && opts.jitMasking) && new RegExp(opts.definitions["9"].validator).test(chrs);
            if (opts._radixDance && radixPos !== -1 && result && maskset.validPositions[radixPos] == void 0) return {
                insert: {
                    pos: radixPos === pos ? radixPos + 1 : radixPos,
                    c: opts.radixPoint
                },
                pos
            };
            return result;
        }
        function checkForLeadingZeroes(buffer, opts) {
            var numberMatches = new RegExp("(^" + (opts.negationSymbol.front !== "" ? escapeRegex(opts.negationSymbol.front) + "?" : "") + escapeRegex(opts.prefix) + ")(.*)(" + escapeRegex(opts.suffix) + (opts.negationSymbol.back != "" ? escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")), number = numberMatches ? numberMatches[2] : "", leadingzeroes = false;
            if (number) {
                number = number.split(opts.radixPoint.charAt(0))[0];
                leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number);
            }
            return leadingzeroes && (leadingzeroes[0].length > 1 || leadingzeroes[0].length > 0 && leadingzeroes[0].length < number.length) ? leadingzeroes : false;
        }
        lib_inputmask.extendAliases({
            numeric: {
                mask: genMask,
                _mask: function(opts) {
                    return "(" + opts.groupSeparator + "999){+|1}";
                },
                digits: "*",
                digitsOptional: true,
                enforceDigitsOnBlur: false,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: true,
                groupSeparator: "",
                allowMinus: true,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: false,
                step: 1,
                inputType: "text",
                unmaskAsNumber: false,
                roundingFN: Math.round,
                inputmode: "decimal",
                shortcuts: {
                    k: "1000",
                    m: "1000000"
                },
                placeholder: "0",
                greedy: false,
                rightAlign: true,
                insertMode: true,
                autoUnmask: false,
                skipOptionalPartCharacter: "",
                usePrototypeDefinitions: false,
                stripLeadingZeroes: true,
                substituteRadixPoint: true,
                definitions: {
                    0: {
                        validator: decimalValidator
                    },
                    1: {
                        validator: decimalValidator,
                        definitionSymbol: "9"
                    },
                    9: {
                        validator: "[0-9０-９٠-٩۰-۹]",
                        definitionSymbol: "*"
                    },
                    "+": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
                        }
                    },
                    "-": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        }
                    }
                },
                preValidation: function(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    const inputmask = this;
                    if (opts.__financeInput !== false && c === opts.radixPoint) return false;
                    var radixPos = buffer.indexOf(opts.radixPoint), initPos = pos;
                    pos = hanndleRadixDance(pos, c, radixPos, maskset, opts);
                    if (c === "-" || c === opts.negationSymbol.front) {
                        if (opts.allowMinus !== true) return false;
                        var isNegative = false, front = findValid("+", maskset), back = findValid("-", maskset);
                        if (front !== -1) isNegative = [ front, back ];
                        return isNegative !== false ? {
                            remove: isNegative,
                            caret: initPos - opts.negationSymbol.back.length
                        } : {
                            insert: [ {
                                pos: findValidator.call(inputmask, "+", maskset),
                                c: opts.negationSymbol.front,
                                fromIsValid: true
                            }, {
                                pos: findValidator.call(inputmask, "-", maskset),
                                c: opts.negationSymbol.back,
                                fromIsValid: void 0
                            } ],
                            caret: initPos + opts.negationSymbol.back.length
                        };
                    }
                    if (c === opts.groupSeparator) return {
                        caret: initPos
                    };
                    if (strict) return true;
                    if (radixPos !== -1 && opts._radixDance === true && isSelection === false && c === opts.radixPoint && opts.digits !== void 0 && (isNaN(opts.digits) || parseInt(opts.digits) > 0) && radixPos !== pos) return {
                        caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                    };
                    if (opts.__financeInput === false) if (isSelection) {
                        if (opts.digitsOptional) return {
                            rewritePosition: caretPos.end
                        }; else if (!opts.digitsOptional) if (caretPos.begin > radixPos && caretPos.end <= radixPos) if (c === opts.radixPoint) return {
                            insert: {
                                pos: radixPos + 1,
                                c: "0",
                                fromIsValid: true
                            },
                            rewritePosition: radixPos
                        }; else return {
                            rewritePosition: radixPos + 1
                        }; else if (caretPos.begin < radixPos) return {
                            rewritePosition: caretPos.begin - 1
                        };
                    } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && opts.digits > 0 && this.__valueGet.call(this.el) === "") return {
                        rewritePosition: radixPos
                    };
                    return {
                        rewritePosition: pos
                    };
                },
                postValidation: function(buffer, pos, c, currentResult, opts, maskset, strict) {
                    if (currentResult === false) return currentResult;
                    if (strict) return true;
                    if (opts.min !== null || opts.max !== null) {
                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, inputmask_numeric_extensions_$.extend({}, opts, {
                            unmaskAsNumber: true
                        }));
                        if (opts.min !== null && unmasked < opts.min && (unmasked.toString().length > opts.min.toString().length || unmasked < 0)) return false;
                        if (opts.max !== null && unmasked > opts.max) return opts.SetMaxOnOverflow ? {
                            refreshFromBuffer: true,
                            buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                        } : false;
                    }
                    return currentResult;
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    if (unmaskedValue === "" && opts.nullable === true) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    processValue = processValue.replace(opts.suffix, "");
                    processValue = processValue.replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.placeholder.charAt(0) !== "") processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
                    if (opts.unmaskAsNumber) {
                        if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(escapeRegex.call(this, opts.radixPoint), ".");
                        processValue = processValue.replace(new RegExp("^" + escapeRegex(opts.negationSymbol.front)), "-");
                        processValue = processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back) + "$"), "");
                        return Number(processValue);
                    }
                    return processValue;
                },
                isComplete: function(buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    maskedValue = maskedValue.replace(new RegExp("^" + escapeRegex(opts.negationSymbol.front)), "-");
                    maskedValue = maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back) + "$"), "");
                    maskedValue = maskedValue.replace(opts.prefix, "");
                    maskedValue = maskedValue.replace(opts.suffix, "");
                    maskedValue = maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
                    if (opts.radixPoint === ",") maskedValue = maskedValue.replace(escapeRegex(opts.radixPoint), ".");
                    return isFinite(maskedValue);
                },
                onBeforeMask: function(initialValue, opts) {
                    var radixPoint = opts.radixPoint || ",";
                    if (isFinite(opts.digits)) opts.digits = parseInt(opts.digits);
                    if ((typeof initialValue == "number" || opts.inputType === "number") && radixPoint !== "") initialValue = initialValue.toString().replace(".", radixPoint);
                    var isNagtive = initialValue.charAt(0) === "-" || initialValue.charAt(0) === opts.negationSymbol.front;
                    var valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = valueParts.length > 1 ? valueParts[1].replace(/[^0-9]/g, "") : "", forceDigits = valueParts.length > 1;
                    initialValue = integerPart + (decimalPart !== "" ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if (radixPoint !== "") {
                        digits = !opts.digitsOptional ? opts.digits : opts.digits < decimalPart.length ? opts.digits : decimalPart.length;
                        if (decimalPart !== "" || !opts.digitsOptional) {
                            var digitsFactor = Math.pow(10, digits || 1);
                            initialValue = initialValue.replace(escapeRegex(radixPoint), ".");
                            if (!isNaN(parseFloat(initialValue))) initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits);
                            initialValue = initialValue.toString().replace(".", radixPoint);
                        }
                    }
                    if (opts.digits === 0 && initialValue.indexOf(radixPoint) !== -1) initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint));
                    if (opts.min !== null || opts.max !== null) {
                        var numberValue = initialValue.toString().replace(radixPoint, ".");
                        if (opts.min !== null && numberValue < opts.min) initialValue = opts.min.toString().replace(".", radixPoint); else if (opts.max !== null && numberValue > opts.max) initialValue = opts.max.toString().replace(".", radixPoint);
                    }
                    if (isNagtive && initialValue.charAt(0) !== "-") initialValue = "-" + initialValue;
                    return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
                },
                onBeforeWrite: function(e, buffer, caretPos, opts) {
                    function stripBuffer(buffer, stripRadix) {
                        if (opts.__financeInput !== false || stripRadix) {
                            var position = buffer.indexOf(opts.radixPoint);
                            if (position !== -1) buffer.splice(position, 1);
                        }
                        if (opts.groupSeparator !== "") while ((position = buffer.indexOf(opts.groupSeparator)) !== -1) buffer.splice(position, 1);
                        return buffer;
                    }
                    let result, leadingzeroes;
                    if (opts.stripLeadingZeroes && (leadingzeroes = checkForLeadingZeroes(buffer, opts))) {
                        const caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0;
                        for (let i = leadingzeroes[0].length - offset; i > 0; i--) {
                            delete this.maskset.validPositions[caretNdx + i];
                            delete buffer[caretNdx + i];
                        }
                    }
                    if (e) switch (e.type) {
                      case "blur":
                      case "checkval":
                        if (opts.min !== null) {
                            var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, inputmask_numeric_extensions_$.extend({}, opts, {
                                unmaskAsNumber: true
                            }));
                            if (opts.min !== null && unmasked < opts.min) return {
                                refreshFromBuffer: true,
                                buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                            };
                        }
                        if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                            var nmbrMtchs = new RegExp("(^" + (opts.negationSymbol.front != "" ? escapeRegex(opts.negationSymbol.front) + "?" : "") + escapeRegex(opts.prefix) + ")(.*)(" + escapeRegex(opts.suffix) + (opts.negationSymbol.back != "" ? escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), true).reverse().join("")), number = nmbrMtchs ? nmbrMtchs[2] : "";
                            if (number == 0) result = {
                                refreshFromBuffer: true,
                                buffer: [ 0 ]
                            };
                        } else if (opts.radixPoint !== "") {
                            var radixNDX = buffer.indexOf(opts.radixPoint);
                            if (radixNDX === opts.suffix.length) if (result && result.buffer) result.buffer.splice(0, 1 + opts.suffix.length); else {
                                buffer.splice(0, 1 + opts.suffix.length);
                                result = {
                                    refreshFromBuffer: true,
                                    buffer: stripBuffer(buffer)
                                };
                            }
                        }
                        if (opts.enforceDigitsOnBlur) {
                            result = result || {};
                            var bffr = result && result.buffer || buffer.slice().reverse();
                            result.refreshFromBuffer = true;
                            result.buffer = alignDigits(bffr, opts.digits, opts, true).reverse();
                        }
                    }
                    return result;
                },
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var bffr, $input = inputmask_numeric_extensions_$(this);
                    if (e.location != 3) {
                        var pattern, c = e.key;
                        if (pattern = opts.shortcuts && opts.shortcuts[c]) if (pattern.length > 1) {
                            this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(pattern));
                            $input.trigger("setvalue");
                            return false;
                        }
                    }
                    if (e.ctrlKey) switch (e.key) {
                      case keys.ArrowUp:
                        this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                        $input.trigger("setvalue");
                        return false;

                      case keys.ArrowDown:
                        this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                        $input.trigger("setvalue");
                        return false;
                    }
                    if (!e.shiftKey && (e.key === keys.Delete || e.key === keys.Backspace || e.key === keys.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) if (buffer[e.key === keys.Delete ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) {
                        bffr = buffer.slice().reverse();
                        if (opts.negationSymbol.front !== "") bffr.shift();
                        if (opts.negationSymbol.back !== "") bffr.pop();
                        $input.trigger("setvalue", [ bffr.join(""), caretPos.begin ]);
                        return false;
                    } else if (opts._radixDance === true) {
                        var radixPos = buffer.indexOf(opts.radixPoint);
                        if (!opts.digitsOptional) {
                            if (radixPos !== -1 && (caretPos.begin < radixPos || caretPos.end < radixPos || e.key === keys.Delete && (caretPos.begin === radixPos || caretPos.begin - 1 === radixPos))) {
                                var restoreCaretPos = void 0;
                                if (caretPos.begin === caretPos.end) if (e.key === keys.Backspace || e.key === keys.BACKSPACE_SAFARI) caretPos.begin++; else if (e.key === keys.Delete && caretPos.begin - 1 === radixPos) {
                                    restoreCaretPos = inputmask_numeric_extensions_$.extend({}, caretPos);
                                    caretPos.begin--;
                                    caretPos.end--;
                                }
                                bffr = buffer.slice().reverse();
                                bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1);
                                bffr = alignDigits(bffr, opts.digits, opts).join("");
                                if (restoreCaretPos) caretPos = restoreCaretPos;
                                $input.trigger("setvalue", [ bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin ]);
                                return false;
                            }
                        } else if (radixPos === 0) {
                            bffr = buffer.slice().reverse();
                            bffr.pop();
                            $input.trigger("setvalue", [ bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin ]);
                            return false;
                        }
                    }
                }
            },
            currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: false
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                inputmode: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: false
            },
            indianns: {
                alias: "numeric",
                _mask: function(opts) {
                    return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: false
            }
        });
        const inputmaskElement_document = global_window.document;
        if (lib_canUseDOM && inputmaskElement_document && inputmaskElement_document.head && inputmaskElement_document.head.attachShadow && global_window.customElements && global_window.customElements.get("input-mask") === void 0) {
            class InputmaskElement extends HTMLElement {
                constructor() {
                    super();
                    var attributeNames = this.getAttributeNames(), shadow = this.attachShadow({
                        mode: "closed"
                    }), input = inputmaskElement_document.createElement("input");
                    input.type = "text";
                    shadow.appendChild(input);
                    for (var attr in attributeNames) if (Object.prototype.hasOwnProperty.call(attributeNames, attr)) input.setAttribute(attributeNames[attr], this.getAttribute(attributeNames[attr]));
                    var im = new lib_inputmask;
                    im.dataAttribute = "";
                    im.mask(input);
                    input.inputmask.shadowRoot = shadow;
                }
            }
            global_window.customElements.define("input-mask", InputmaskElement);
        }
        const bundle = lib_inputmask;
        function initInputMask() {
            const selector = document.querySelector("[data-phone-mask]");
            if (selector) {
                new bundle({
                    mask: "+1 999 - 999 9999",
                    clearMaskOnLostFocus: false
                }).mask(selector);
                const form = selector.closest("form");
                if (form) form.addEventListener("reset", (() => {
                    selector.value = "";
                }));
                selector.addEventListener("focus", (() => {
                    setTimeout((function() {
                        selector.click();
                    }), 300);
                }));
            }
        }
        function initPopupSimple() {
            class PopupSimple {
                constructor(bodyLock, bodyUnlock) {
                    this.bodyLock = bodyLock;
                    this.bodyUnlock = bodyUnlock;
                    this.popUps = document.querySelectorAll(".popup");
                    this.popUpsLinks = document.querySelectorAll("[data-popup]");
                    this.lastFocusedElement = null;
                    this.init();
                }
                init() {
                    window.addEventListener("click", (e => {
                        const target = e.target;
                        if (target.closest(".popup") && !target.closest(".popup").hasAttribute("data-no-close-outside") && !target.closest(".popup__content") && target.closest(".popup").classList.contains("popup_show")) this.close(null, target.closest(".popup"));
                        if (target.closest("[data-close]") && target.closest(".popup").classList.contains("popup_show")) this.close(null, target.closest(".popup"));
                    }));
                    if (this.popUps.length) {
                        this.popUpsLinks.forEach((popUpLink => {
                            popUpLink.addEventListener("click", (e => {
                                e.preventDefault();
                                const popupId = popUpLink.dataset.popup || popUpLink.hash;
                                if (popupId) this.open(popupId);
                            }));
                        }));
                        this.popUps.forEach((popup => {
                            this.initPopupEvents(popup);
                        }));
                        document.addEventListener("keydown", (e => {
                            if (e.key === "Escape") {
                                e.preventDefault();
                                this.popUps = document.querySelectorAll(".popup");
                                this.popUps.forEach((popup => {
                                    if (popup.classList.contains("popup_show") && !popup.hasAttribute("data-no-close-outside")) this.close(null, popup);
                                }));
                            }
                        }));
                    }
                }
                initPopupEvents(popup) {
                    popup.addEventListener("keydown", (event => {
                        if (event.key === "Tab") {
                            const focusableElements = popup.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
                            if (focusableElements.length === 0) return;
                            const firstElement = focusableElements[0];
                            const lastElement = focusableElements[focusableElements.length - 1];
                            if (event.shiftKey && document.activeElement === firstElement) {
                                lastElement.focus();
                                event.preventDefault();
                            } else if (!event.shiftKey && document.activeElement === lastElement) {
                                firstElement.focus();
                                event.preventDefault();
                            }
                        }
                    }));
                }
                open(popUpID, popupElement) {
                    const popUp = popupElement ? popupElement : document.querySelector(popUpID);
                    if (popUp) {
                        this.lastFocusedElement = document.activeElement;
                        popUp.setAttribute("aria-hidden", "false");
                        document.documentElement.classList.add("popup-open");
                        popUp.classList.add("popup_show");
                        this.bodyLock();
                        const popupContent = popUp.querySelector(".popup__content");
                        if (popupContent) {
                            popupContent.setAttribute("tabindex", "-1");
                            setTimeout((() => {
                                popupContent.focus();
                            }), 50);
                        }
                    }
                }
                close(popUpID, popupElement, delay = 300) {
                    const popUp = popupElement ? popupElement : document.querySelector(popUpID);
                    if (popUp) {
                        popUp.setAttribute("aria-hidden", "true");
                        document.documentElement.classList.remove("popup-open");
                        popUp.classList.remove("popup_show");
                        const popupContent = popUp.querySelector(".popup__content");
                        popupContent ? popupContent.removeAttribute("tabindex") : null;
                        if (this.lastFocusedElement) this.lastFocusedElement.focus();
                        if (popUp.id === "custom-alert") {
                            this.bodyUnlock(delay);
                            setTimeout((() => {
                                popUp.remove();
                            }), delay);
                        } else this.bodyUnlock(delay);
                    }
                }
                showAlert({title = "Warning!", text = "", textBtn = "Close", typeIcon = "warn"}) {
                    this.hideOtherAlerts();
                    const icons = {
                        warn: "warn.svg",
                        error: "error.svg"
                    };
                    const isDev = "production" === "development";
                    const origin = window.location.origin;
                    const basePath = isDev ? "/img/icons" : `${origin}/themes/junkcarsus/assets/img/icons`;
                    const alertPopupTemplate = `<div id="custom-alert" role="dialog" aria-modal="true" aria-label="${title}" class="popup">\n\t\t\t\t\t\t  <div class="popup__wrapper">\n\t\t\t\t\t\t\t\t<div class="popup__content text-center">\n\t\t\t\t\t\t\t\t\t <div class="popup__icon">\n\t\t\t\t\t\t\t\t\t\t  <img width="75" height="75" src="${basePath}/${icons[typeIcon]}" alt="${typeIcon} icon">\n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t <div class="popup__title sub-title">${title}</div>\n\t\t\t\t\t\t\t\t\t <div class="popup__text text">${text}</div>\n\t\t\t\t\t\t\t\t\t <div class="popup__actions">\n\t\t\t\t\t\t\t\t\t\t  <button data-close type="button" class="popup__btn main-black-btn main-black-btn--no-icon">${textBtn}</button>\n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t </div>`;
                    document.body.insertAdjacentHTML("beforeend", alertPopupTemplate);
                    const newPopup = document.querySelector("#custom-alert");
                    this.initPopupEvents(newPopup);
                    setTimeout((() => {
                        this.open("#custom-alert", newPopup);
                    }), 50);
                }
                hideAlert() {
                    const alertPopup = document.querySelector("#custom-alert");
                    this.close(null, alertPopup);
                }
                hideOtherAlerts() {
                    const isOtherAlerts = document.querySelectorAll("#custom-alert");
                    if (isOtherAlerts.length > 0) isOtherAlerts.forEach((el => el.remove()));
                }
            }
            window.popupSimple = new PopupSimple(bodyLock, bodyUnlock);
        }
        initInputMask();
        initPopupSimple();
        spollers();
        testimonialsSlider();
        setFontSizeForTestimonials();
        formValidate();
    })();
})();