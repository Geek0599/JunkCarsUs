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
        function hoverTooltipOnStatesMap() {
            const activeAttr = "data-show";
            const offset = 20;
            const tooltip = document.createElement("div");
            tooltip.setAttribute("data-tooltip", "");
            tooltip.setAttribute("role", "tooltip");
            document.body.appendChild(tooltip);
            function positionTooltip(e, target) {
                const name = target.dataset.stateName;
                if (tooltip.innerText !== name) tooltip.innerText = name;
                const x = e.clientX;
                const y = e.clientY;
                tooltip.style.top = window.scrollY + (y - 29) + "px";
                const tooltipWidth = tooltip.offsetWidth + offset;
                if (document.documentElement.clientWidth - x - tooltipWidth <= 0) tooltip.style.left = x - tooltipWidth + offset / 2 + "px"; else tooltip.style.left = x + offset + "px";
            }
            document.addEventListener("mousemove", (e => {
                const target = e.target.closest("[data-state-name]");
                if (target) positionTooltip(e, target);
            }));
            document.addEventListener("mouseover", (e => {
                const target = e.target.closest("[data-state-name]");
                if (target && !tooltip.hasAttribute(activeAttr)) tooltip.setAttribute(activeAttr, "");
            }));
            document.addEventListener("mouseout", (e => {
                const leaveFrom = e.target.closest("[data-state-name]");
                const enterTo = e.relatedTarget && e.relatedTarget.closest("[data-state-name]");
                if (leaveFrom && leaveFrom !== enterTo) tooltip.removeAttribute(activeAttr);
            }));
            document.addEventListener("focusin", (e => {
                const target = e.target.closest("[data-state-name]");
                if (target) {
                    const rect = target.getBoundingClientRect();
                    tooltip.innerText = target.dataset.stateName;
                    tooltip.setAttribute(activeAttr, "");
                    tooltip.style.top = window.scrollY + rect.top + "px";
                    if (rect.left > document.documentElement.clientWidth - tooltip.offsetWidth) tooltip.style.left = rect.left - tooltip.offsetWidth + "px"; else tooltip.style.left = rect.left + "px";
                }
            }));
            document.addEventListener("focusout", (e => {
                if (e.target.closest("[data-state-name]")) tooltip.removeAttribute(activeAttr);
            }));
        }
        function formValidate() {
            const validateForms = document.querySelectorAll("form[data-validate]");
            if (validateForms.length) validateForms.forEach((form => {
                const inputs = form.querySelectorAll("input,select,textarea");
                const btnSubmit = form.querySelector('button[type="submit"]');
                if (inputs.length > 0) {
                    form.addEventListener("submit", (e => {
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
                        input.addEventListener("input", (() => formatInput(input)));
                        input.addEventListener("change", (() => setTimeout((() => {
                            checkInput(input, form);
                        }), 0)));
                        input.addEventListener("blur", (() => {
                            setTimeout((() => {
                                if (input.value !== "") checkInput(input, form);
                            }), 0);
                        }));
                    }));
                    form.addEventListener("reset", (e => {
                        inputs.forEach((input => removeStatus(input)));
                    }));
                    const recaptchaField = form.querySelector("#g-recaptcha-response-field-contacts");
                    if (recaptchaField) setupRecaptchaHandler(form, recaptchaField);
                }
            }));
            async function checkInputs({inputs, form, event, onSuccessFormValidateCallback, onErrorFormValidateCallback}) {
                if (event) event.preventDefault();
                const isShowNotice = form?.hasAttribute("data-validate-notice");
                !isShowNotice ? form.reportValidity() : null;
                form.setAttribute("novalidate", true);
                let errors = 0;
                let firstErrorFound = false;
                for (const input of inputs) if (await checkInput(input, form)) {
                    errors++;
                    if (!firstErrorFound) {
                        input.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                        firstErrorFound = true;
                    }
                }
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
            async function checkInput(input, form) {
                const value = input.value.trim();
                let isError = false;
                if (input.required) {
                    if (value === "" && !input.inputmask) {
                        isError = true;
                        showTextNotice(input, "This field is required");
                        return isError;
                    }
                    if (input.hasAttribute("data-number-format")) if (!/^\d+$/.test(value)) {
                        isError = true;
                        showTextNotice(input, "Only numbers are allowed");
                        return isError;
                    }
                    if (input.hasAttribute("data-text-format")) if (!/^[a-zA-Z\s]+$/.test(value)) {
                        isError = true;
                        showTextNotice(input, `Only ${/[а-яА-Я]/.test(value) ? "Latin" : ""} letters are allowed`);
                        return isError;
                    }
                    if (input.type === "email") if (value !== "" && !isEmailValid(input)) {
                        isError = true;
                        showTextNotice(input, "Your email address must be in the format of name@domain.com");
                        return isError;
                    }
                    const minLength = input.hasAttribute("data-minlength") ? Number(input.dataset.minlength) : null;
                    const maxLength = input.hasAttribute("data-maxlength") ? Number(input.dataset.maxlength) : null;
                    if (minLength !== null && value.length < minLength) {
                        isError = true;
                        if (input.id == "year") showTextNotice(input, "Please enter the correct year"); else showTextNotice(input, `Please enter at least ${minLength} characters`);
                        return isError;
                    }
                    if (maxLength !== null && value.length > maxLength) {
                        isError = true;
                        showTextNotice(input, `Please enter less than ${minLength} characters`);
                        return isError;
                    }
                    const minValue = input.hasAttribute("data-min-value") ? Number(input.dataset.minValue) : null;
                    const maxValue = input.hasAttribute("data-max-value") ? Number(input.dataset.maxValue) : null;
                    if (minValue !== null && Number(value) < minValue) {
                        isError = true;
                        showTextNotice(input, `Please enter a value greater than or equal to ${minValue}`);
                        return isError;
                    }
                    if (maxValue !== null && Number(value) > maxValue) {
                        isError = true;
                        showTextNotice(input, `Please enter a value less than or equal to ${maxValue}`);
                        return isError;
                    }
                    if (input.inputmask) {
                        input.dispatchEvent(new Event("input"));
                        if (!input.inputmask.isComplete()) {
                            isError = true;
                            showTextNotice(input, "Please enter full phone number");
                            if (value === "") showTextNotice(input, "This field is required");
                            return isError;
                        }
                    }
                    if (input.required) if (isError) addError(input); else removeError(input);
                } else if (input.type === "email") if (value !== "" && !isEmailValid(input)) {
                    isError = true;
                    addError(input);
                    showTextNotice(input, "Your email address must be in the format of name@domain.com");
                } else if (value === "") removeStatus(input); else removeError(input);
                return isError;
            }
            function formatInput(input) {
                if (input.hasAttribute("data-maxlength")) {
                    const maxLength = input.getAttribute("data-maxlength");
                    if (input.value.length > maxLength) input.value = input.value.slice(0, maxLength);
                }
                if (input.hasAttribute("data-number-format")) input.value = input.value.replace(/\D/g, "");
            }
            function addError(input) {
                input.classList.remove("_validated");
                input.classList.add("_no-validated");
                input.setAttribute("aria-invalid", "true");
                !input.wasError && input.addEventListener("input", (() => setTimeout((() => {
                    checkInput(input);
                }), 0)));
                input.wasError = true;
                return true;
            }
            function removeError(input) {
                input.classList.remove("_no-validated");
                input.classList.add("_validated");
                input.setAttribute("aria-invalid", "false");
                removeTextNotice(input);
            }
            function removeStatus(input) {
                input.classList.remove("_no-validated", "_validated");
                input.removeAttribute("aria-invalid");
                removeTextNotice(input);
            }
            function isEmailValid(input) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(input.value);
            }
            function showTextNotice(input, text) {
                const isShowNotice = input.form?.hasAttribute("data-validate-notice");
                let notice = input.parentElement.querySelector(".form__item-notice");
                if (isShowNotice) if (notice && notice.textContent !== text) notice.textContent = text; else if (!notice) {
                    notice = document.createElement("label");
                    notice.classList.add("form__item-notice");
                    notice.setAttribute("for", input.id);
                    notice.textContent = text;
                    input.parentElement.insertAdjacentElement("beforeend", notice);
                }
                addError(input);
            }
            function removeTextNotice(input) {
                const notice = input.parentElement.querySelector(".form__item-notice");
                notice && notice.remove();
            }
            window.formValidate = {
                showTextNotice,
                removeTextNotice,
                removeError,
                removeStatus,
                addError,
                checkInputs,
                checkInput
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
                    let event = new Event("inputChange");
                    input ? input.dispatchEvent(event) : null;
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
                        let event = new Event("inputChange");
                        input ? input.dispatchEvent(event) : null;
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
        function getWindow(node) {
            if (node == null) return window;
            if (node.toString() !== "[object Window]") {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
        function isElement(node) {
            var OwnElement = getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
            if (typeof ShadowRoot === "undefined") return false;
            var OwnElement = getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
                return item.brand + "/" + item.version;
            })).join(" ");
            return navigator.userAgent;
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) includeScale = false;
            if (isFixedStrategy === void 0) isFixedStrategy = false;
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width,
                height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x,
                y
            };
        }
        function getWindowScroll(node) {
            var win = getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft,
                scrollTop
            };
        }
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        function getNodeScroll(node) {
            if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
        }
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getComputedStyle_getComputedStyle(element) {
            return getWindow(element).getComputedStyle(element);
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle_getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) isFixed = false;
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
            if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width,
                height
            };
        }
        function getParentNode(element) {
            if (getNodeName(element) === "html") return element;
            return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getScrollParent(node) {
            if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
            if (isHTMLElement(node) && isScrollParent(node)) return node;
            return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) list = [];
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow(scrollParent);
            var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function isTableElement(element) {
            return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || getComputedStyle_getComputedStyle(element).position === "fixed") return null;
            return element.offsetParent;
        }
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                var elementCss = getComputedStyle_getComputedStyle(element);
                if (elementCss.position === "fixed") return null;
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) currentNode = currentNode.host;
            while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle_getComputedStyle(currentNode);
                if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
            }
            return null;
        }
        function getOffsetParent(element) {
            var window = getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
            if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle_getComputedStyle(offsetParent).position === "static")) return window;
            return offsetParent || getContainingBlock(element) || window;
        }
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        null && basePlacements.reduce((function(acc, placement) {
            return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        null && [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
            return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function order(modifiers) {
            var map = new Map;
            var visited = new Set;
            var result = [];
            modifiers.forEach((function(modifier) {
                map.set(modifier.name, modifier);
            }));
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach((function(dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) sort(depModifier);
                    }
                }));
                result.push(modifier);
            }
            modifiers.forEach((function(modifier) {
                if (!visited.has(modifier.name)) sort(modifier);
            }));
            return result;
        }
        function orderModifiers(modifiers) {
            var orderedModifiers = order(modifiers);
            return modifierPhases.reduce((function(acc, phase) {
                return acc.concat(orderedModifiers.filter((function(modifier) {
                    return modifier.phase === phase;
                })));
            }), []);
        }
        function debounce_debounce(fn) {
            var pending;
            return function() {
                if (!pending) pending = new Promise((function(resolve) {
                    Promise.resolve().then((function() {
                        pending = void 0;
                        resolve(fn());
                    }));
                }));
                return pending;
            };
        }
        function mergeByName(modifiers) {
            var merged = modifiers.reduce((function(merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }), {});
            return Object.keys(merged).map((function(key) {
                return merged[key];
            }));
        }
        var DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return !args.some((function(element) {
                return !(element && typeof element.getBoundingClientRect === "function");
            }));
        }
        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) generatorOptions = {};
            var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) options = defaultOptions;
                var state = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference,
                        popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        };
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                        state.orderedModifiers = orderedModifiers.filter((function(m) {
                            return m.enabled;
                        }));
                        runModifierEffects();
                        return instance.update();
                    },
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) return;
                        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (!areValidElements(reference, popper)) return;
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                            popper: getLayoutRect(popper)
                        };
                        state.reset = false;
                        state.placement = state.options.placement;
                        state.orderedModifiers.forEach((function(modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        }));
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                            if (typeof fn === "function") state = fn({
                                state,
                                options: _options,
                                name,
                                instance
                            }) || state;
                        }
                    },
                    update: debounce_debounce((function() {
                        return new Promise((function(resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        }));
                    })),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) return instance;
                instance.setOptions(options).then((function(state) {
                    if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
                }));
                function runModifierEffects() {
                    state.orderedModifiers.forEach((function(_ref) {
                        var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                        if (typeof effect === "function") {
                            var cleanupFn = effect({
                                state,
                                name,
                                instance,
                                options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    }));
                }
                function cleanupModifierEffects() {
                    effectCleanupFns.forEach((function(fn) {
                        return fn();
                    }));
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        null && popperGenerator();
        var passive = {
            passive: true
        };
        function effect(_ref) {
            var state = _ref.state, instance = _ref.instance, options = _ref.options;
            var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) scrollParents.forEach((function(scrollParent) {
                scrollParent.addEventListener("scroll", instance.update, passive);
            }));
            if (resize) window.addEventListener("resize", instance.update, passive);
            return function() {
                if (scroll) scrollParents.forEach((function(scrollParent) {
                    scrollParent.removeEventListener("scroll", instance.update, passive);
                }));
                if (resize) window.removeEventListener("resize", instance.update, passive);
            };
        }
        const eventListeners = {
            name: "eventListeners",
            enabled: true,
            phase: "write",
            fn: function fn() {},
            effect,
            data: {}
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function getVariation(placement) {
            return placement.split("-")[1];
        }
        function getMainAxisFromPlacement(placement) {
            return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function computeOffsets(_ref) {
            var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
              case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;

              case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;

              case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;

              case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;

              default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === "y" ? "height" : "width";
                switch (variation) {
                  case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;

                  case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;

                  default:
                }
            }
            return offsets;
        }
        function popperOffsets(_ref) {
            var state = _ref.state, name = _ref.name;
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: "absolute",
                placement: state.placement
            });
        }
        const modifiers_popperOffsets = {
            name: "popperOffsets",
            enabled: true,
            phase: "read",
            fn: popperOffsets,
            data: {}
        };
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x, y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }
        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
                x,
                y
            }) : {
                x,
                y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty("x");
            var hasY = offsets.hasOwnProperty("y");
            var sideX = left;
            var sideY = enums_top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = "clientHeight";
                var widthProp = "clientWidth";
                if (offsetParent === getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle_getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                        heightProp = "scrollHeight";
                        widthProp = "scrollWidth";
                    }
                }
                offsetParent;
                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x,
                y
            }, getWindow(popper)) : {
                x,
                y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
                _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
                _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
            _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
            var state = _ref5.state, options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === "fixed"
            };
            if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.popperOffsets,
                position: state.options.strategy,
                adaptive,
                roundOffsets
            })));
            if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.arrow,
                position: "absolute",
                adaptive: false,
                roundOffsets
            })));
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-placement": state.placement
            });
        }
        const modifiers_computeStyles = {
            name: "computeStyles",
            enabled: true,
            phase: "beforeWrite",
            fn: computeStyles,
            data: {}
        };
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach((function(name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name];
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style);
                Object.keys(attributes).forEach((function(name) {
                    var value = attributes[name];
                    if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
                }));
            }));
        }
        function applyStyles_effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            return function() {
                Object.keys(state.elements).forEach((function(name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                    var style = styleProperties.reduce((function(style, property) {
                        style[property] = "";
                        return style;
                    }), {});
                    if (!isHTMLElement(element) || !getNodeName(element)) return;
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach((function(attribute) {
                        element.removeAttribute(attribute);
                    }));
                }));
            };
        }
        const modifiers_applyStyles = {
            name: "applyStyles",
            enabled: true,
            phase: "write",
            fn: applyStyles,
            effect: applyStyles_effect,
            requires: [ "computeStyles" ]
        };
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles ];
        popperGenerator({
            defaultModifiers
        });
        function getAltAxis(axis) {
            return axis === "x" ? "y" : "x";
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        function getViewportRect(element, strategy) {
            var win = getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === "fixed") {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width,
                height,
                x: x + getWindowScrollBarX(element),
                y
            };
        }
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle_getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            return {
                width,
                height,
                x,
                y
            };
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) return true;
                    next = next.parentNode || next.host;
                } while (next);
            }
            return false;
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === "fixed");
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) return [];
            return clippingParents.filter((function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
            }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }), getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
            return keys.reduce((function(hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }), {});
        }
        function detectOverflow(state, options) {
            if (options === void 0) options = {};
            var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach((function(key) {
                    var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply;
                }));
            }
            return overflowOffsets;
        }
        function preventOverflow(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) return;
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === "y" ? enums_top : left;
                var altSide = mainAxis === "y" ? bottom : right;
                var len = mainAxis === "y" ? "height" : "width";
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide];
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === "x" ? enums_top : left;
                var _altSide = mainAxis === "x" ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === "y" ? "height" : "width";
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_preventOverflow = {
            name: "preventOverflow",
            enabled: true,
            phase: "main",
            fn: preventOverflow,
            requiresIfExists: [ "offset" ]
        };
        const init_popper_createPopper = popperGenerator({
            defaultModifiers: [ ...defaultModifiers, modifiers_preventOverflow ]
        });
        function positionSubMenu() {
            const referenceLinkForSubMenu = document.querySelectorAll("[data-submenu-spoller]");
            if (referenceLinkForSubMenu.length) referenceLinkForSubMenu.forEach((link => {
                const subMenu = link.querySelector("[data-submenu]");
                subMenu.removeAttribute("style");
                if (link && subMenu) {
                    subMenu.removeAttribute("hidden");
                    init_popper_createPopper(link, subMenu, {
                        placement: "bottom",
                        modifiers: [ {
                            name: "preventOverflow",
                            options: {
                                boundary: "viewport",
                                padding: 16
                            }
                        } ]
                    });
                }
            }));
        }
        positionSubMenu();
        window.addEventListener("initPopperPosition", positionSubMenu);
        isWebp();
        addLoadedClass();
        menuInit();
        showSubMenu();
        checkboxRadioChecked();
        function mainSectionPaddingCompensateByHeaderHeight() {
            const header = document.querySelector(".top-header");
            const main = document.querySelector(".menu__body");
            const iconMenu = document.querySelector(".icon-menu");
            let currentHeaderHeight = header.offsetHeight;
            const updatePadding = () => {
                const newHeight = header.offsetHeight;
                if (currentHeaderHeight !== newHeight) {
                    main.style.setProperty("--menu-top-p", newHeight / 16 + "rem");
                    currentHeaderHeight = newHeight;
                }
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
        function extend() {
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
                    target[name] = extend(deep, clone, copy);
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
                            if (events.type) extend(evnt, events);
                            elem.dispatchEvent(evnt);
                        } else {
                            evnt = document.createEventObject();
                            evnt.eventType = ev;
                            evnt.detail = arguments[1];
                            if (events.type) extend(evnt, events);
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
        DependencyLib.extend = extend;
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
        const defaults = {
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
            defaults,
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
                    mask: "+1 999 - 999 99 99",
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
        function initUploadPhotoInput() {
            const filesUpload = document.querySelectorAll(".file");
            if (filesUpload && filesUpload.length > 0) filesUpload.forEach((function(fileUploadContainer) {
                const el = fileUploadContainer.querySelector(".file__input");
                const fileList = fileUploadContainer.querySelector(".file__list");
                const fileListArr = [];
                const form = el.closest("form");
                if (form) form.addEventListener("reset", (() => {
                    fileListArr.length = 0;
                    el.value = "";
                    fileList.innerHTML = "";
                    window.fileListArr = fileListArr;
                }));
                el.addEventListener("change", (e => {
                    const maxFilesAllowed = 5;
                    const maxSizeMB = parseFloat(el.dataset.maxsize || 4);
                    const maxSize = maxSizeMB * 1024 * 1024;
                    const acceptTypes = el.getAttribute("accept");
                    const allowedExtensions = acceptTypes ? acceptTypes.split(",").map((type => type.trim().replace(".", "").toLowerCase())) : [];
                    let newFiles = Array.from(el.files);
                    let existingFilesCount = fileListArr.length;
                    let availableSlots = maxFilesAllowed - existingFilesCount;
                    if (availableSlots <= 0 && newFiles.length > 0) {
                        window.popupSimple.showAlert({
                            title: "Maximum photos reached!",
                            text: `Only ${maxFilesAllowed} ${maxFilesAllowed === 1 ? "photo" : "photos"} can be uploaded.`,
                            typeIcon: "warn"
                        });
                        syncInputFiles();
                        return;
                    }
                    let validFiles = newFiles.filter((file => {
                        const fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1).toLowerCase();
                        if (allowedExtensions.length > 0 && !allowedExtensions.includes(fileExtension)) {
                            window.popupSimple.showAlert({
                                title: "Photos only!",
                                text: `Invalid file type. Allowed types are: ${acceptTypes}`,
                                typeIcon: "warn"
                            });
                            return false;
                        }
                        if (file.size > maxSize) {
                            window.popupSimple.showAlert({
                                title: "Photo is too big!",
                                text: `The size of the photo should not exceed ${maxSizeMB} MB`,
                                typeIcon: "warn"
                            });
                            return false;
                        }
                        const isDuplicate = fileListArr.some((existing => existing.name === file.name && existing.size === file.size && ("lastModified" in existing ? existing.lastModified === file.lastModified : true)));
                        if (isDuplicate) return false;
                        return true;
                    }));
                    if (validFiles.length > availableSlots) {
                        window.popupSimple.showAlert({
                            title: "Maximum photos reached!",
                            text: availableSlots === maxFilesAllowed ? `Only ${maxFilesAllowed} ${maxFilesAllowed === 1 ? "photo" : "photos"} can be uploaded.` : `Only ${availableSlots} additional ${availableSlots === 1 ? "photo" : "photos"} can be uploaded. The maximum limit is ${maxFilesAllowed} ${maxFilesAllowed === 1 ? "photo" : "photos"}. Any extra photos will be ignored.`,
                            typeIcon: "warn"
                        });
                        validFiles = validFiles.slice(0, availableSlots);
                    }
                    if (validFiles.length > 0) {
                        fileListArr.push(...validFiles);
                        appendNewFilesToUI(validFiles);
                        console.log("validFiles", validFiles);
                    }
                    syncInputFiles();
                    window.fileListArr = fileListArr;
                }));
                function syncInputFiles() {
                    const dataTransfer = new DataTransfer;
                    fileListArr.forEach((file => dataTransfer.items.add(file)));
                    el.files = dataTransfer.files;
                }
                function appendNewFilesToUI(newFiles) {
                    const startIndex = fileListArr.length - newFiles.length;
                    newFiles.forEach(((file, offset) => {
                        const index = startIndex + offset;
                        const fileListItem = createFileListItem(file, index);
                        fileList.appendChild(fileListItem);
                    }));
                }
                function createFileListItem(file, index) {
                    const fileListItem = document.createElement("li");
                    fileListItem.classList.add("file__list-item", "file-item");
                    fileListItem.setAttribute("data-file-id", index);
                    const fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1).toLowerCase();
                    if ([ "jpg", "png", "jpeg" ].includes(fileExtension)) {
                        const img = document.createElement("img");
                        img.src = URL.createObjectURL(file);
                        img.onload = () => URL.revokeObjectURL(img.src);
                        img.onerror = () => URL.revokeObjectURL(img.src);
                        img.alt = `Uploaded photo ${index + 1}`;
                        img.classList.add("file-item__img");
                        fileListItem.appendChild(img);
                    } else {
                        const div = document.createElement("div");
                        div.innerHTML = fileExtension;
                        div.classList.add("offer-modal__tabs-item_files-input-list-item_file");
                        fileListItem.appendChild(div);
                    }
                    fileListItem.innerHTML += `\n\t\t\t\t\t\t <div class="file-item__name">${file.name}</div>\n\t\t\t\t\t\t <button type="button" class="file-item__btn" aria-label="Delete ${file.name}">Delete</button>\n\t\t\t\t\t`;
                    const deleteBtn = fileListItem.querySelector(".file-item__btn");
                    deleteBtn.addEventListener("click", (e => {
                        e.preventDefault();
                        const currentIndex = parseInt(fileListItem.getAttribute("data-file-id"));
                        fileListArr.splice(currentIndex, 1);
                        fileList.removeChild(fileListItem);
                        syncInputFiles();
                        updateFileIndices(currentIndex);
                        console.log("After DELETE.", el.files, " window.fileListArr ==>", window.fileListArr);
                        window.fileListArr = fileListArr;
                    }));
                    return fileListItem;
                }
                function updateFileIndices(startIndex) {
                    const remainingItems = Array.from(fileList.querySelectorAll(".file-item"));
                    remainingItems.forEach(((item, i) => {
                        if (i >= startIndex) {
                            const newIndex = i;
                            item.setAttribute("data-file-id", newIndex);
                            const deleteBtn = item.querySelector(".file-item__btn");
                            const fileName = item.querySelector(".file-item__name").textContent;
                            deleteBtn.setAttribute("aria-label", `Delete ${fileName}`);
                            const img = item.querySelector(".file-item__img");
                            if (img) img.alt = `Uploaded photo ${newIndex + 1}`;
                        }
                    }));
                }
            }));
            window.initUploadPhotoInput = initUploadPhotoInput;
        }
        initInputMask();
        initPopupSimple();
        initUploadPhotoInput();
        spollers();
        formValidate();
        clickOnLabelKeyEnter();
        hoverTooltipOnStatesMap();
        setInputmode();
        function carMakeValidation() {
            const junkForm = document.querySelector("[data-instant-offer-form]");
            if (junkForm) {
                const selectCarMake = document.querySelector('select[name="make"]');
                const selectCarModel = document.querySelector('select[name="model"]');
                if (selectCarMake && selectCarModel) {
                    let placeholderOption = selectCarModel.options[selectCarModel.selectedIndex];
                    placeholderOption = placeholderOption && placeholderOption.value === "" ? placeholderOption.textContent.trim() : "Select model";
                    selectCarMake.addEventListener("change", (e => {
                        const value = e.target.value;
                        const query = value.trim();
                        if (query === placeholderOption || query === "") {
                            reset();
                            return false;
                        }
                        junkForm.addEventListener("reset", (() => {
                            reset();
                        }));
                        function reset() {
                            selectCarModel.classList.remove("_validated");
                            selectCarModel.innerHTML = `<option value=''>${placeholderOption}</option>`;
                        }
                    }));
                }
            }
        }
        carMakeValidation();
        function onSuccesFormValidate() {
            const instantOfferForm = document.querySelector("[data-instant-offer-form]");
            if (!instantOfferForm) return;
            instantOfferForm.addEventListener("form-validation-success", (e => {
                const formData = new FormData(instantOfferForm);
                const submitButton = instantOfferForm.querySelector('[type="submit"]');
                submitButton.classList.add("_disabled");
                window.popupSimple.open("#popup-form-submiting");
                makeRequest(instantOfferForm, formData);
            }));
        }
        onSuccesFormValidate();
        function makeRequest(form, data) {
            const xhr = new XMLHttpRequest;
            const submitButton = form.querySelector('[type="submit"]');
            const progressBar = document.querySelector("[data-progress-bar]");
            const thanksModal = document.getElementById("popup-form-success-submission");
            const loadingModal = document.getElementById("popup-form-submiting");
            xhr.upload.addEventListener("progress", (event => {
                if (event.lengthComputable) progressBar.style.width = Math.round(event.loaded / event.total * 100) + "%";
            }), false);
            xhr.onerror = function(response) {
                console.error("Request failed:", response);
                window.popupSimple.showAlert({
                    title: "Error!",
                    text: `An error occurred while submitting the form. Try again later`,
                    typeIcon: "error"
                });
                submitButton.classList.remove("_disabled");
            };
            xhr.onreadystatechange = function() {
                if (this.readyState !== 4) return;
                window.popupSimple.close(null, loadingModal, 0);
                window.popupSimple.close(null, thanksModal, 0);
                if (this.status >= 200 && this.status < 300) try {
                    const jsonResponse = JSON.parse(this.responseText);
                    if (Array.isArray(jsonResponse) && jsonResponse[0] === "OK") {
                        form.reset();
                        window.popupSimple.open(null, thanksModal);
                        window.uetq = window.uetq || [];
                        window.uetq.push("event", "submit_lead_form", {});
                    } else window.popupSimple.showAlert({
                        title: "Warning!",
                        text: "The size of the photo should not exceed 4 MB",
                        typeIcon: "warn"
                    });
                } catch (err) {
                    window.popupSimple.showAlert({
                        title: "Error!",
                        text: "Unexpected response format",
                        typeIcon: "error"
                    });
                } else {
                    let errorText = "Something went wrong. Please try again.";
                    if (this.status === 400) errorText = "Bad Request. Please check the form."; else if (this.status === 413) errorText = "The uploaded file is too large."; else if (this.status === 500) errorText = "Server error. Try again later.";
                    window.popupSimple.showAlert({
                        title: "Error!",
                        text: errorText,
                        typeIcon: "error"
                    });
                }
                submitButton.classList.remove("_disabled");
            };
            xhr.open("POST", "/ajax/instant");
            xhr.send(data);
        }
    })();
})();