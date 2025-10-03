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
        function playVideoOnClickPlayBtn() {
            const videoBody = document.querySelector("[data-video-body]");
            const video = videoBody ? document.getElementById("video") : null;
            const playBtn = videoBody ? document.querySelector("[data-playicon-btn]") : null;
            if (videoBody && video && playBtn) playBtn.addEventListener("click", playPause);
            function playPause() {
                if (video.paused) {
                    videoBody.classList.remove("_paused");
                    video.play();
                    video.setAttribute("controls", "");
                } else {
                    videoBody.classList.add("_paused");
                    video.pause();
                }
            }
        }
        function removeVideoCoverOnFullscreen() {
            const videoElement = document.getElementById("video");
            document.addEventListener("fullscreenchange", (function() {
                if (document.fullscreenElement) videoElement.classList.add("_no-cover"); else videoElement.classList.remove("_no-cover");
            }));
        }
        function setFontSizeForTestimonials() {
            const basicTextLength = 22;
            const allTextReviews = document.querySelectorAll("[data-fontsize]");
            if (allTextReviews.length) allTextReviews.forEach((text => {
                const textLength = text.innerText.split(" ").length;
                if (textLength < basicTextLength) text.classList.add("_greater-text");
            }));
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
                let notice = null;
                if (input.closest(".form__input-wrapper")) notice = input.parentElement.parentElement.querySelector(".form__item-notice"); else notice = input.parentElement.querySelector(".form__item-notice");
                const textNotice = input.hasAttribute("data-error-notice") ? input.getAttribute("data-error-notice") : text;
                if (isShowNotice) if (notice && notice.textContent !== textNotice) notice.textContent = textNotice; else if (!notice) {
                    notice = document.createElement("label");
                    notice.classList.add("form__item-notice");
                    input.id ? notice.setAttribute("for", input.id) : null;
                    notice.textContent = textNotice;
                    if ([ "radio", "checkbox" ].includes(input.type)) input.parentElement.insertAdjacentElement("beforeend", notice); else if (input.closest(".form__input-wrapper")) input.parentElement.insertAdjacentElement("afterend", notice); else input.insertAdjacentElement("afterend", notice);
                }
                addError({
                    input
                });
            }
            function removeTextNotice({input}) {
                let notice = null;
                if (input.closest(".form__input-wrapper")) notice = input.parentElement.parentElement.querySelector(".form__item-notice"); else notice = input.parentElement.querySelector(".form__item-notice");
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
        class Swiper {
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
                        swipers.push(new Swiper(newParams));
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
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
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
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
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
        function recentVehiclesSlider() {
            if (document.querySelector('[data-slider="recent-vehicles"]')) {
                const sliderBlock = document.querySelector('[data-slider="recent-vehicles"]');
                const slider = sliderBlock.querySelector(`[data-slider]`);
                const sliderPagination = sliderBlock.querySelector("[data-slider-pagination]");
                const btnNext = sliderBlock.querySelector("[data-slider-nextbtn]");
                if (slider) new Swiper(slider, {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 4,
                    spaceBetween: 32,
                    speed: 800,
                    lazy: true,
                    pagination: {
                        el: sliderPagination,
                        clickable: true
                    },
                    navigation: {
                        nextEl: btnNext
                    },
                    breakpoints: {
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                        1100: {
                            slidesPerView: 4,
                            spaceBetween: 32
                        }
                    },
                    on: {}
                });
            }
        }
        function testimonialsSlider() {
            if (document.querySelector('[data-slider="testimonials"]')) {
                const sliderBlock = document.querySelector('[data-slider="testimonials"]');
                const slider = sliderBlock.querySelector(`[data-slider]`);
                const sliderPagination = sliderBlock.querySelector("[data-slider-pagination]");
                sliderBlock.querySelector("[data-slider-nextbtn]");
                if (slider) new Swiper(slider, {
                    modules: [ Pagination ],
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
        function lastArticlesSlider() {
            if (document.querySelector('[data-slider="last-articles"]')) {
                const sliderBlock = document.querySelector('[data-slider="last-articles"]');
                const slider = sliderBlock.querySelector(`[data-slider]`);
                const sliderPagination = sliderBlock.querySelector("[data-slider-pagination]");
                const btnNext = sliderBlock.querySelector("[data-slider-nextbtn]");
                if (slider) new Swiper(slider, {
                    modules: [ Navigation, Pagination ],
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
                    navigation: {
                        nextEl: btnNext
                    },
                    breakpoints: {
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        720: {
                            slidesPerView: 2,
                            spaceBetween: 20
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
        const t = (t, e = 1e4) => (t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e), e = function(t) {
            if (!(t && t instanceof Element && t.offsetParent)) return !1;
            const e = t.scrollHeight > t.clientHeight, i = window.getComputedStyle(t).overflowY, n = -1 !== i.indexOf("hidden"), s = -1 !== i.indexOf("visible");
            return e && !n && !s;
        }, i = function(t, n = void 0) {
            return !(!t || t === document.body || n && t === n) && (e(t) ? t : i(t.parentElement, n));
        }, n = function(t) {
            var e = (new DOMParser).parseFromString(t, "text/html").body;
            if (e.childElementCount > 1) {
                for (var i = document.createElement("div"); e.firstChild; ) i.appendChild(e.firstChild);
                return i;
            }
            return e.firstChild;
        }, s = t => `${t || ""}`.split(" ").filter((t => !!t)), o = (t, e, i) => {
            t && s(e).forEach((e => {
                t.classList.toggle(e, i || !1);
            }));
        };
        class a {
            constructor(t) {
                Object.defineProperty(this, "pageX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "pageY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "time", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "nativePointer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, 
                this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, 
                this.time = Date.now();
            }
        }
        const r = {
            passive: !1
        };
        class l {
            constructor(t, {start: e = (() => !0), move: i = (() => {}), end: n = (() => {})}) {
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "startCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "moveCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "endCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "currentPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "startPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
                for (const t of [ "onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur" ]) this[t] = this[t].bind(this);
                this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), 
                this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), 
                this.element.addEventListener("touchcancel", this.onTouchEnd);
            }
            onPointerStart(t) {
                if (!t.buttons || 0 !== t.button) return;
                const e = new a(t);
                this.currentPointers.some((t => t.id === e.id)) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), 
                window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
            }
            onTouchStart(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new a(e), t);
                window.addEventListener("blur", this.onWindowBlur);
            }
            onMove(t) {
                const e = this.currentPointers.slice(), i = "changedTouches" in t ? Array.from(t.changedTouches || []).map((t => new a(t))) : [ new a(t) ], n = [];
                for (const t of i) {
                    const e = this.currentPointers.findIndex((e => e.id === t.id));
                    e < 0 || (n.push(t), this.currentPointers[e] = t);
                }
                n.length && this.moveCallback(t, this.currentPointers.slice(), e);
            }
            onPointerEnd(t) {
                t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new a(t)), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
            }
            onTouchEnd(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new a(e));
            }
            triggerPointerStart(t, e) {
                return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), 
                this.startPointers.push(t), !0);
            }
            triggerPointerEnd(t, e) {
                const i = this.currentPointers.findIndex((t => t.id === e.id));
                i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
            }
            onWindowBlur() {
                this.clear();
            }
            clear() {
                for (;this.currentPointers.length; ) {
                    const t = this.currentPointers[this.currentPointers.length - 1];
                    this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), 
                    this.endCallback(new Event("touchend", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: t.clientX,
                        clientY: t.clientY
                    }), t, this.currentPointers.slice());
                }
            }
            stop() {
                this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), 
                this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), 
                this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
            }
        }
        function c(t, e) {
            return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
        }
        function h(t, e) {
            return e ? {
                clientX: (t.clientX + e.clientX) / 2,
                clientY: (t.clientY + e.clientY) / 2
            } : t;
        }
        const d = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t), u = (t, ...e) => {
            const i = e.length;
            for (let n = 0; n < i; n++) {
                const i = e[n] || {};
                Object.entries(i).forEach((([e, i]) => {
                    const n = Array.isArray(i) ? [] : {};
                    t[e] || Object.assign(t, {
                        [e]: n
                    }), d(i) ? Object.assign(t[e], u(n, i)) : Array.isArray(i) ? Object.assign(t, {
                        [e]: [ ...i ]
                    }) : Object.assign(t, {
                        [e]: i
                    });
                }));
            }
            return t;
        }, p = function(t, e) {
            return t.split(".").reduce(((t, e) => "object" == typeof t ? t[e] : void 0), e);
        };
        class f {
            constructor(t = {}) {
                Object.defineProperty(this, "options", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }), Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map
                }), this.setOptions(t);
                for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            }
            setOptions(t) {
                this.options = t ? u({}, this.constructor.defaults, t) : {};
                for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e);
            }
            option(t, ...e) {
                let i = p(t, this.options);
                return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
            }
            optionFor(t, e, i, ...n) {
                let s = p(e, t);
                var o;
                "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), 
                "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
                let a = p(e, this.options);
                return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), 
                void 0 === s ? i : s;
            }
            cn(t) {
                const e = this.options.classes;
                return e && e[t] || "";
            }
            localize(t, e = []) {
                t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((t, e, i) => {
                    let n = "";
                    return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), 
                    n || (n = t), n;
                }));
                for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
                return t = t.replace(/\{\{(.*?)\}\}/g, ((t, e) => e));
            }
            on(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map), 
                i.forEach((t => {
                    let i = this.events.get(t);
                    i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
                }));
            }
            off(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach((t => {
                    const i = this.events.get(t);
                    if (Array.isArray(i)) {
                        const t = i.indexOf(e);
                        t > -1 && i.splice(t, 1);
                    }
                }));
            }
            emit(t, ...e) {
                [ ...this.events.get(t) || [] ].forEach((t => t(this, ...e))), "*" !== t && this.emit("*", t, ...e);
            }
        }
        Object.defineProperty(f, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.36"
        }), Object.defineProperty(f, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        class g extends f {
            constructor(t = {}) {
                super(t), Object.defineProperty(this, "plugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                });
            }
            attachPlugins(t = {}) {
                const e = new Map;
                for (const [i, n] of Object.entries(t)) {
                    const t = this.option(i), s = this.plugins[i];
                    s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
                }
                for (const [t, i] of e) this.plugins[t] = i, i.attach();
            }
            detachPlugins(t) {
                t = t || Object.keys(this.plugins);
                for (const e of t) {
                    const t = this.plugins[e];
                    t && t.detach(), delete this.plugins[e];
                }
                return this.emit("detachPlugins"), this;
            }
        }
        var m;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", 
            t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
        }(m || (m = {}));
        const v = [ "a", "b", "c", "d", "e", "f" ], b = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen"
        }, y = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: .12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: .25,
            dragFriction: .35,
            decelFriction: .05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
                content: "f-panzoom__content",
                isLoading: "is-loading",
                canZoomIn: "can-zoom_in",
                canZoomOut: "can-zoom_out",
                isDraggable: "is-draggable",
                isDragging: "is-dragging",
                inFullscreen: "in-fullscreen",
                htmlHasFullscreen: "with-panzoom-in-fullscreen"
            },
            l10n: b
        }, w = '<circle cx="25" cy="25" r="20"></circle>', x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>", E = t => t && null !== t && t instanceof Element && "nodeType" in t, S = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.remove(e);
            }));
        }, P = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.add(e);
            }));
        }, C = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        }, T = 1e5, M = 1e4, O = "mousemove", A = "drag", L = "content", z = "auto";
        let R = null, k = null;
        class I extends g {
            get fits() {
                return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
            }
            get isTouchDevice() {
                return null === k && (k = window.matchMedia("(hover: none)").matches), k;
            }
            get isMobile() {
                return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), 
                R;
            }
            get panMode() {
                return this.options.panMode !== O || this.isTouchDevice ? A : O;
            }
            get panOnlyZoomed() {
                const t = this.options.panOnlyZoomed;
                return t === z ? this.isTouchDevice : t;
            }
            get isInfinite() {
                return this.option("infinite");
            }
            get angle() {
                return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
            }
            get targetAngle() {
                return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
            }
            get scale() {
                const {a: t, b: e} = this.current;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get targetScale() {
                const {a: t, b: e} = this.target;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get minScale() {
                return this.option("minScale") || 1;
            }
            get fullScale() {
                const {contentRect: t} = this;
                return t.fullWidth / t.fitWidth || 1;
            }
            get maxScale() {
                return this.fullScale * (this.option("maxScale") || 1) || 1;
            }
            get coverScale() {
                const {containerRect: t, contentRect: e} = this, i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
                return Math.min(this.fullScale, i);
            }
            get isScaling() {
                return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
            }
            get isContentLoading() {
                const t = this.content;
                return !!(t && t instanceof HTMLImageElement) && !t.complete;
            }
            get isResting() {
                if (this.isBouncingX || this.isBouncingY) return !1;
                for (const t of v) {
                    const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
                    if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
                }
                return !(!this.ignoreBounds && !this.checkBounds().inBounds);
            }
            constructor(t, e = {}, i = {}) {
                var s;
                if (super(e), Object.defineProperty(this, "pointerTracker", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "resizeObserver", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "updateTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "rAF", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isTicking", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "ignoreBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "clicks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "trackingPoints", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "cwd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "pmme", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "friction", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: m.Init
                }), Object.defineProperty(this, "isDragging", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "content", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "spinner", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "containerRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0
                    }
                }), Object.defineProperty(this, "contentRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        fullWidth: 0,
                        fullHeight: 0,
                        fitWidth: 0,
                        fitHeight: 0,
                        width: 0,
                        height: 0
                    }
                }), Object.defineProperty(this, "dragStart", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        top: 0,
                        left: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "dragOffset", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "current", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }), Object.defineProperty(this, "velocity", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        a: 0,
                        b: 0,
                        c: 0,
                        d: 0,
                        e: 0,
                        f: 0
                    }
                }), Object.defineProperty(this, "lockedAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), !t) throw new Error("Container Element Not Found");
                this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, I.Plugins), i)), 
                this.emit("attachPlugins"), this.emit("init");
                const o = this.content;
                if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), 
                this.isContentLoading) {
                    if (this.option("spinner")) {
                        t.classList.add(this.cn("isLoading"));
                        const e = n(x);
                        !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
                    }
                    this.emit("beforeLoad");
                } else queueMicrotask((() => {
                    this.enable();
                }));
            }
            initContent() {
                const {container: t} = this, e = this.cn(L);
                let i = this.option(L) || t.querySelector(`.${e}`);
                if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && P(i, e)), 
                i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
                this.content = i;
            }
            onLoad() {
                const {spinner: t, container: e, state: i} = this;
                t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), 
                this.emit("afterLoad"), i === m.Init ? this.enable() : this.updateMetrics();
            }
            onError() {
                this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), 
                this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
            }
            getNextScale(t) {
                const {fullScale: e, targetScale: i, coverScale: n, maxScale: s, minScale: o} = this;
                let a = o;
                switch (t) {
                  case "toggleMax":
                    a = i - o < .5 * (s - o) ? s : o;
                    break;

                  case "toggleCover":
                    a = i - o < .5 * (n - o) ? n : o;
                    break;

                  case "toggleZoom":
                    a = i - o < .5 * (e - o) ? e : o;
                    break;

                  case "iterateZoom":
                    let t = [ 1, e, s ].sort(((t, e) => t - e)), r = t.findIndex((t => t > i + 1e-5));
                    a = t[r] || 1;
                }
                return a;
            }
            attachObserver() {
                var t;
                const e = () => {
                    const {container: t, containerRect: e} = this;
                    return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
                };
                this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver((() => {
                    this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout((() => {
                        e() && this.onResize(), this.updateTimer = null;
                    }), 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
                }))), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
            }
            detachObserver() {
                var t;
                null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
            }
            attachEvents() {
                const {container: t} = this;
                t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.pointerTracker = new l(t, {
                    start: this.onPointerDown,
                    move: this.onPointerMove,
                    end: this.onPointerUp
                }), document.addEventListener(O, this.onMouseMove);
            }
            detachEvents() {
                var t;
                const {container: e} = this;
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, 
                document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), 
                this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), 
                this.updateTimer = null);
            }
            animate() {
                this.setTargetForce();
                const t = this.friction, e = this.option("maxVelocity");
                for (const i of v) t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), 
                this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
                this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame((() => this.animate())) : this.stop("current");
            }
            setTargetForce() {
                for (const t of v) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
            }
            checkBounds(t = 0, e = 0) {
                const {current: i} = this, n = i.e + t, s = i.f + e, o = this.getBounds(), {x: a, y: r} = o, l = a.min, c = a.max, h = r.min, d = r.max;
                let u = 0, p = 0;
                return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), 
                Math.abs(u) < 1e-4 && (u = 0), Math.abs(p) < 1e-4 && (p = 0), Object.assign(Object.assign({}, o), {
                    xDiff: u,
                    yDiff: p,
                    inBounds: !u && !p
                });
            }
            clampTargetBounds() {
                const {target: t} = this, {x: e, y: i} = this.getBounds();
                e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), 
                i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
            }
            calculateContentDim(t = this.current) {
                const {content: e, contentRect: i} = this, {fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a} = i;
                let r = o, l = a;
                if (this.option("zoom") || 0 !== this.angle) {
                    const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight), c = i ? o : n, h = i ? a : s, d = this.getMatrix(t), u = new DOMPoint(0, 0).matrixTransform(d), p = new DOMPoint(0 + c, 0).matrixTransform(d), f = new DOMPoint(0 + c, 0 + h).matrixTransform(d), g = new DOMPoint(0, 0 + h).matrixTransform(d), m = Math.abs(f.x - u.x), v = Math.abs(f.y - u.y), b = Math.abs(g.x - p.x), y = Math.abs(g.y - p.y);
                    r = Math.max(m, b), l = Math.max(v, y);
                }
                return {
                    contentWidth: r,
                    contentHeight: l
                };
            }
            setEdgeForce() {
                if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = !1, 
                void (this.isBouncingY = !1);
                const {target: t} = this, {x: e, y: i, xDiff: n, yDiff: s} = this.checkBounds();
                const o = this.option("maxVelocity");
                let a = this.velocity.e, r = this.velocity.f;
                0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), 
                e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 
                0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), 
                i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, 
                this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
            }
            enable() {
                const {content: t} = this, e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
                for (const t of v) this.current[t] = this.target[t] = e[t];
                this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, 
                this.emit("ready");
            }
            onClick(t) {
                var e;
                "click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), 
                this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), 
                this.trackingPoints = [], this.startDecelAnim());
                const i = t.target;
                if (!i || t.defaultPrevented) return;
                if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
                if ((() => {
                    const t = window.getSelection();
                    return t && "Range" === t.type;
                })() && !i.closest("button")) return;
                const n = i.closest("[data-panzoom-action]"), s = i.closest("[data-panzoom-change]"), o = n || s, a = o && E(o) ? o.dataset : null;
                if (a) {
                    const e = a.panzoomChange, i = a.panzoomAction;
                    if ((e || i) && t.preventDefault(), e) {
                        let t = {};
                        try {
                            t = JSON.parse(e);
                        } catch (t) {
                            console && console.warn("The given data was not valid JSON");
                        }
                        return void this.applyChange(t);
                    }
                    if (i) return void (this[i] && this[i]());
                }
                if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), 
                void t.stopPropagation();
                if (i.closest("[data-fancybox]")) return;
                const r = this.content.getBoundingClientRect(), l = this.dragStart;
                if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;
                this.dragStart.time = 0;
                const c = e => {
                    this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), 
                    this[e]({
                        event: t
                    }));
                }, h = this.option("click", t), d = this.option("dblClick", t);
                d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout((() => {
                    1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && h && c(h)) : (this.emit("dblClick", t), 
                    t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null;
                }), 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
            }
            addTrackingPoint(t) {
                const e = this.trackingPoints.filter((t => t.time > Date.now() - 100));
                e.push(t), this.trackingPoints = e;
            }
            onPointerDown(t, e, i) {
                var n;
                if (!1 === this.option("touch", t)) return !1;
                this.pwt = 0, this.dragOffset = {
                    x: 0,
                    y: 0,
                    time: 0
                }, this.trackingPoints = [];
                const s = this.content.getBoundingClientRect();
                if (this.dragStart = {
                    x: s.x,
                    y: s.y,
                    top: s.top,
                    left: s.left,
                    time: Date.now()
                }, this.clickTimer) return !1;
                if (this.panMode === O && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), 
                !1;
                const o = t.composedPath()[0];
                if (!i.length) {
                    if ([ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME" ].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
                    null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
                }
                if ("mousedown" === t.type) [ "A", "BUTTON" ].includes(o.nodeName) || t.preventDefault(); else if (Math.abs(this.velocity.a) > .3) return !1;
                return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), 
                this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), 
                !0;
            }
            onPointerMove(e, n, s) {
                if (!1 === this.option("touch", e)) return;
                if (!this.isDragging) return;
                if (n.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
                if (this.emit("touchMove", e), e.defaultPrevented) return;
                this.addTrackingPoint(n[0]);
                const {content: o} = this, a = h(s[0], s[1]), r = h(n[0], n[1]);
                let l = 0, d = 0;
                if (n.length > 1) {
                    const t = o.getBoundingClientRect();
                    l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
                }
                const u = c(s[0], s[1]), p = c(n[0], n[1]);
                let f = u ? p / u : 1, g = r.clientX - a.clientX, m = r.clientY - a.clientY;
                this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
                let v = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
                if (v && !this.lockedAxis) if ("xy" === v || "y" === v || "touchmove" === e.type) {
                    if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
                    const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                    this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, 
                    g = 0, m = 0;
                } else this.lockedAxis = v;
                if (i(e.target, this.content) && (v = "x", this.dragOffset.y = 0), v && "xy" !== v && this.lockedAxis !== v && t(this.targetScale) === t(this.minScale)) return;
                e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
                const b = this.checkBounds(g, m);
                this.option("rubberband") ? ("x" !== this.isInfinite && (b.xDiff > 0 && g < 0 || b.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * b.xDiff))), 
                "y" !== this.isInfinite && (b.yDiff > 0 && m < 0 || b.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * b.yDiff)))) : (b.xDiff && (g = 0), 
                b.yDiff && (m = 0));
                const y = this.targetScale, w = this.minScale, x = this.maxScale;
                y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && t(y) === t(w) && (g = 0), 
                "x" === this.lockedAxis && t(y) === t(w) && (m = 0), this.applyChange({
                    originX: l,
                    originY: d,
                    panX: g,
                    panY: m,
                    scale: f,
                    friction: this.option("dragFriction"),
                    ignoreBounds: !0
                });
            }
            onPointerUp(t, e, n) {
                if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
                this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), 
                this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), 
                i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), 
                this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== m.Destroy && (t.defaultPrevented || this.startDecelAnim()));
            }
            startDecelAnim() {
                var e;
                const i = this.isScaling;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const t of v) this.velocity[t] = 0;
                this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), 
                S(this.container, "is-animating"), this.isTicking = !1;
                const {trackingPoints: n} = this, s = n[0], o = n[n.length - 1];
                let a = 0, r = 0, l = 0;
                o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
                const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
                1 !== c && (a *= c, r *= c);
                let h = 0, d = 0, u = 0, p = 0, f = this.option("decelFriction");
                const g = this.targetScale;
                if (l > 0) {
                    u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
                    const t = this.option("maxVelocity");
                    t && (u = Math.max(Math.min(u, t), -1 * t), p = Math.max(Math.min(p, t), -1 * t));
                }
                u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g) === this.minScale) && (h = u = 0), 
                ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g) === this.minScale) && (d = p = 0);
                const m = this.dragOffset.x, b = this.dragOffset.y, y = this.option("dragMinThreshold") || 0;
                Math.abs(m) < y && Math.abs(b) < y && (h = d = 0, u = p = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (f = .35), 
                this.applyChange({
                    panX: h,
                    panY: d,
                    friction: f
                }), this.emit("decel", u, p, m, b);
            }
            onWheel(t) {
                var e = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const i = Math.max(-1, Math.min(1, e));
                if (this.emit("wheel", t, i), this.panMode === O) return;
                if (t.defaultPrevented) return;
                const n = this.option("wheel");
                "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                    panX: 2 * -t.deltaX,
                    panY: 2 * -t.deltaY,
                    bounce: !1
                })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
            }
            onMouseMove(t) {
                this.panWithMouse(t);
            }
            onKeydown(t) {
                "Escape" === t.key && this.toggleFS();
            }
            onResize() {
                this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
            }
            setTransform() {
                this.emit("beforeTransform");
                const {current: e, target: i, content: n, contentRect: s} = this, o = Object.assign({}, C);
                for (const n of v) {
                    const s = "e" == n || "f" === n ? M : T;
                    o[n] = t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
                }
                let {a, b: r, c: l, d: c, e: h, f: d} = o, u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`, p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
                if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
                p.style.transform = u;
                const {contentWidth: f, contentHeight: g} = this.calculateContentDim();
                s.width = f, s.height = g, this.emit("afterTransform");
            }
            updateMetrics(e = !1) {
                var i;
                if (!this || this.state === m.Destroy) return;
                if (this.isContentLoading) return;
                const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1), {container: s, content: o} = this, a = o instanceof HTMLImageElement, r = s.getBoundingClientRect(), l = getComputedStyle(this.container);
                let c = r.width * n, h = r.height * n;
                const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)), p = h - d;
                this.containerRect = {
                    width: c,
                    height: h,
                    innerWidth: u,
                    innerHeight: p
                };
                const f = parseFloat(o.dataset.width || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), 
                    e || 0;
                })(o), g = parseFloat(o.dataset.height || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), 
                    e || 0;
                })(o);
                let v = this.option("width", f) || z, b = this.option("height", g) || z;
                const y = v === z, w = b === z;
                "number" != typeof v && (v = f), "number" != typeof b && (b = g), y && (v = f * (b / g)), 
                w && (b = g / (f / v));
                let x = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
                this.option("transformParent") && (x = x.parentElement || x);
                const E = x.getAttribute("style") || "";
                x.style.setProperty("transform", "none", "important"), a && (x.style.width = "", 
                x.style.height = ""), x.offsetHeight;
                const S = o.getBoundingClientRect();
                let P = S.width * n, C = S.height * n, T = P, M = C;
                P = Math.min(P, v), C = Math.min(C, b), a ? ({width: P, height: C} = ((t, e, i, n) => {
                    const s = i / t, o = n / e, a = Math.min(s, o);
                    return {
                        width: t *= a,
                        height: e *= a
                    };
                })(v, b, P, C)) : (P = Math.min(P, v), C = Math.min(C, b));
                let O = .5 * (M - C), A = .5 * (T - P);
                this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                    top: S.top - r.top + O,
                    bottom: r.bottom - S.bottom + O,
                    left: S.left - r.left + A,
                    right: r.right - S.right + A,
                    fitWidth: P,
                    fitHeight: C,
                    width: P,
                    height: C,
                    fullWidth: v,
                    fullHeight: b
                }), x.style.cssText = E, a && (x.style.width = `${P}px`, x.style.height = `${C}px`), 
                this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, {
                    friction: 0
                }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
                    friction: 0
                }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), 
                this.updateControls();
            }
            calculateBounds() {
                const {contentWidth: e, contentHeight: i} = this.calculateContentDim(this.target), {targetScale: n, lockedAxis: s} = this, {fitWidth: o, fitHeight: a} = this.contentRect;
                let r = 0, l = 0, c = 0, h = 0;
                const d = this.option("infinite");
                if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0; else {
                    let {containerRect: s, contentRect: d} = this, u = t(o * n, M), p = t(a * n, M), {innerWidth: f, innerHeight: g} = s;
                    if (s.width === u && (f = s.width), s.width === p && (g = s.height), e > f) {
                        c = .5 * (e - f), r = -1 * c;
                        let t = .5 * (d.right - d.left);
                        r += t, c += t;
                    }
                    if (o > f && e < f && (r -= .5 * (o - f), c -= .5 * (o - f)), i > g) {
                        h = .5 * (i - g), l = -1 * h;
                        let t = .5 * (d.bottom - d.top);
                        l += t, h += t;
                    }
                    a > g && i < g && (r -= .5 * (a - g), c -= .5 * (a - g));
                }
                return {
                    x: {
                        min: r,
                        max: c
                    },
                    y: {
                        min: l,
                        max: h
                    }
                };
            }
            getBounds() {
                const t = this.option("bounds");
                return t !== z ? t : this.calculateBounds();
            }
            updateControls() {
                const e = this, i = e.container, {panMode: n, contentRect: s, targetScale: a, minScale: r} = e;
                let l = r, c = e.option("click") || !1;
                c && (l = e.getNextScale(c));
                let h = e.canZoomIn(), d = e.canZoomOut(), u = n === A && !!this.option("touch"), p = d && u;
                if (u && (t(a) < t(r) && !this.panOnlyZoomed && (p = !0), (t(s.width, 1) > t(s.fitWidth, 1) || t(s.height, 1) > t(s.fitHeight, 1)) && (p = !0)), 
                t(s.width * a, 1) < t(s.fitWidth, 1) && (p = !1), n === O && (p = !1), o(i, this.cn("isDraggable"), p), 
                !this.option("zoom")) return;
                let f = h && t(l) > t(a), g = !f && !p && d && t(l) < t(a);
                o(i, this.cn("canZoomIn"), f), o(i, this.cn("canZoomOut"), g);
                for (const t of i.querySelectorAll("[data-panzoom-action]")) {
                    let e = !1, i = !1;
                    switch (t.dataset.panzoomAction) {
                      case "zoomIn":
                        h ? e = !0 : i = !0;
                        break;

                      case "zoomOut":
                        d ? e = !0 : i = !0;
                        break;

                      case "toggleZoom":
                      case "iterateZoom":
                        h || d ? e = !0 : i = !0;
                        const n = t.querySelector("g");
                        n && (n.style.display = h ? "" : "none");
                    }
                    e ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : i && (t.setAttribute("disabled", ""), 
                    t.setAttribute("tabindex", "-1"));
                }
            }
            panTo({x: t = this.target.e, y: e = this.target.f, scale: i = this.targetScale, friction: n = this.option("friction"), angle: s = 0, originX: o = 0, originY: a = 0, flipX: r = !1, flipY: l = !1, ignoreBounds: c = !1}) {
                this.state !== m.Destroy && this.applyChange({
                    panX: t - this.target.e,
                    panY: e - this.target.f,
                    scale: i / this.targetScale,
                    angle: s,
                    originX: o,
                    originY: a,
                    friction: n,
                    flipX: r,
                    flipY: l,
                    ignoreBounds: c
                });
            }
            applyChange({panX: e = 0, panY: i = 0, scale: n = 1, angle: s = 0, originX: o = -this.current.e, originY: a = -this.current.f, friction: r = this.option("friction"), flipX: l = !1, flipY: c = !1, ignoreBounds: h = !1, bounce: d = this.option("bounce")}) {
                const u = this.state;
                if (u === m.Destroy) return;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, 
                this.ignoreBounds = h;
                const {current: p} = this, f = p.e, g = p.f, b = this.getMatrix(this.target);
                let y = (new DOMMatrix).translate(f, g).translate(o, a).translate(e, i);
                if (this.option("zoom")) {
                    if (!h) {
                        const t = this.targetScale, e = this.minScale, i = this.maxScale;
                        t * n < e && (n = e / t), t * n > i && (n = i / t);
                    }
                    y = y.scale(n);
                }
                y = y.translate(-o, -a).translate(-f, -g).multiply(b), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), 
                c && (y = y.scale(1, -1));
                for (const e of v) "e" !== e && "f" !== e && (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5) ? this.target[e] = y[e] : this.target[e] = t(y[e], M);
                (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === O || !1 === d) && !h && this.clampTargetBounds(), 
                u === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
            }
            stop(t = !1) {
                if (this.state === m.Init || this.state === m.Destroy) return;
                const e = this.isTicking;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const e of v) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
                this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), 
                this.isTicking = !1, this.state = m.Ready, e && (this.emit("endAnimation"), this.updateControls());
            }
            requestTick() {
                this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), 
                this.isScaling && P(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame((() => this.animate())));
            }
            panWithMouse(e, i = this.option("mouseMoveFriction")) {
                if (this.pmme = e, this.panMode !== O || !e) return;
                if (t(this.targetScale) <= t(this.minScale)) return;
                this.emit("mouseMove", e);
                const {container: n, containerRect: s, contentRect: o} = this, a = s.width, r = s.height, l = n.getBoundingClientRect(), c = (e.clientX || 0) - l.left, h = (e.clientY || 0) - l.top;
                let {contentWidth: d, contentHeight: u} = this.calculateContentDim(this.target);
                const p = this.option("mouseMoveFactor");
                p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
                let f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
                f += .5 * (o.right - o.left);
                let g = .5 * (u - r) - h / r * 100 / 100 * (u - r);
                g += .5 * (o.bottom - o.top), this.applyChange({
                    panX: f - this.target.e,
                    panY: g - this.target.f,
                    friction: i
                });
            }
            zoomWithWheel(e) {
                if (this.state === m.Destroy || this.state === m.Init) return;
                const i = Date.now();
                if (i - this.pwt < 45) return void e.preventDefault();
                this.pwt = i;
                var n = [ -e.deltaX || 0, -e.deltaY || 0, -e.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const s = Math.max(-1, Math.min(1, n)), {targetScale: o, maxScale: a, minScale: r} = this;
                let l = o * (100 + 45 * s) / 100;
                t(l) < t(r) && t(o) <= t(r) ? (this.cwd += Math.abs(s), l = r) : t(l) > t(a) && t(o) >= t(a) ? (this.cwd += Math.abs(s), 
                l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), 
                t(l) !== t(o) && this.zoomTo(l, {
                    event: e
                }));
            }
            canZoomIn() {
                return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
            }
            canZoomOut() {
                return this.option("zoom") && t(this.targetScale) > t(this.minScale);
            }
            zoomIn(t = 1.25, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomOut(t = .8, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomToFit(t) {
                this.zoomTo("fit", t);
            }
            zoomToCover(t) {
                this.zoomTo("cover", t);
            }
            zoomToFull(t) {
                this.zoomTo("full", t);
            }
            zoomToMax(t) {
                this.zoomTo("max", t);
            }
            toggleZoom(t) {
                this.zoomTo(this.getNextScale("toggleZoom"), t);
            }
            toggleMax(t) {
                this.zoomTo(this.getNextScale("toggleMax"), t);
            }
            toggleCover(t) {
                this.zoomTo(this.getNextScale("toggleCover"), t);
            }
            iterateZoom(t) {
                this.zoomTo("next", t);
            }
            zoomTo(t = 1, {friction: e = z, originX: i = z, originY: n = z, event: s} = {}) {
                if (this.isContentLoading || this.state === m.Destroy) return;
                const {targetScale: o, fullScale: a, maxScale: r, coverScale: l} = this;
                if (this.stop(), this.panMode === O && (s = this.pmme || s), s || i === z || n === z) {
                    const t = this.content.getBoundingClientRect(), e = this.container.getBoundingClientRect(), o = s ? s.clientX : e.left + .5 * e.width, a = s ? s.clientY : e.top + .5 * e.height;
                    i = o - t.left - .5 * t.width, n = a - t.top - .5 * t.height;
                }
                let c = 1;
                "number" == typeof t ? c = t : "full" === t ? c = a : "cover" === t ? c = l : "max" === t ? c = r : "fit" === t ? c = 1 : "next" === t && (c = this.getNextScale("iterateZoom")), 
                c = c / o || 1, e = e === z ? c > 1 ? .15 : .25 : e, this.applyChange({
                    scale: c,
                    originX: i,
                    originY: n,
                    friction: e
                }), s && this.panMode === O && this.panWithMouse(s, e);
            }
            rotateCCW() {
                this.applyChange({
                    angle: -90
                });
            }
            rotateCW() {
                this.applyChange({
                    angle: 90
                });
            }
            flipX() {
                this.applyChange({
                    flipX: !0
                });
            }
            flipY() {
                this.applyChange({
                    flipY: !0
                });
            }
            fitX() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.width / e.fitWidth / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            fitY() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.height / e.fitHeight / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            toggleFS() {
                const {container: t} = this, e = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
                t.classList.toggle(e);
                const n = t.classList.contains(e);
                n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), 
                document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), 
                this.emit(n ? "enterFS" : "exitFS");
            }
            getMatrix(t = this.current) {
                const {a: e, b: i, c: n, d: s, e: o, f: a} = t;
                return new DOMMatrix([ e, i, n, s, o, a ]);
            }
            reset(t) {
                if (this.state !== m.Init && this.state !== m.Destroy) {
                    this.stop("current");
                    for (const t of v) this.target[t] = C[t];
                    this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), 
                    this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = m.Panning, 
                    this.requestTick());
                }
            }
            destroy() {
                this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
                const {container: t, content: e} = this, i = this.option("classes") || {};
                for (const e of Object.values(i)) t.classList.remove(e + "");
                e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), 
                this.detachPlugins();
            }
        }
        Object.defineProperty(I, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: y
        }), Object.defineProperty(I, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        const D = function(t, e) {
            let i = !0;
            return (...n) => {
                i && (i = !1, t(...n), setTimeout((() => {
                    i = !0;
                }), e));
            };
        }, F = (t, e) => {
            let i = [];
            return t.childNodes.forEach((t => {
                t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
            })), i;
        }, j = {
            viewport: null,
            track: null,
            enabled: !0,
            slides: [],
            axis: "x",
            transition: "fade",
            preload: 1,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .12,
            Panzoom: {
                decelFriction: .12
            },
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            adaptiveHeight: !1,
            direction: "ltr",
            classes: {
                container: "f-carousel",
                viewport: "f-carousel__viewport",
                track: "f-carousel__track",
                slide: "f-carousel__slide",
                isLTR: "is-ltr",
                isRTL: "is-rtl",
                isHorizontal: "is-horizontal",
                isVertical: "is-vertical",
                inTransition: "in-transition",
                isSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d"
            }
        };
        var B;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
        }(B || (B = {}));
        const H = t => {
            if ("string" == typeof t || t instanceof HTMLElement) t = {
                html: t
            }; else {
                const e = t.thumb;
                void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, 
                t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
            }
            return Object.assign({
                html: "",
                el: null,
                isDom: !1,
                class: "",
                customClass: "",
                index: -1,
                dim: 0,
                gap: 0,
                pos: 0,
                transition: !1
            }, t);
        }, N = (t = {}) => Object.assign({
            index: -1,
            slides: [],
            dim: 0,
            pos: -1
        }, t);
        class _ extends f {
            constructor(t, e) {
                super(e), Object.defineProperty(this, "instance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                });
            }
            attach() {}
            detach() {}
        }
        const $ = {
            classes: {
                list: "f-carousel__dots",
                isDynamic: "is-dynamic",
                hasDots: "has-dots",
                dot: "f-carousel__dot",
                isBeforePrev: "is-before-prev",
                isPrev: "is-prev",
                isCurrent: "is-current",
                isNext: "is-next",
                isAfterNext: "is-after-next"
            },
            dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2
        };
        class W extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "isDynamic", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "list", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onRefresh() {
                this.refresh();
            }
            build() {
                let t = this.list;
                if (!t) {
                    t = document.createElement("ul"), P(t, this.cn("list")), t.setAttribute("role", "tablist");
                    const e = this.instance.container;
                    e.appendChild(t), P(e, this.cn("hasDots")), this.list = t;
                }
                return t;
            }
            refresh() {
                var t;
                const e = this.instance.pages.length, i = Math.min(2, this.option("minCount")), n = Math.max(2e3, this.option("maxCount")), s = this.option("dynamicFrom");
                if (e < i || e > n) return void this.cleanup();
                const a = "number" == typeof s && e > 5 && e >= s, r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
                r && this.cleanup();
                const l = this.build();
                if (o(l, this.cn("isDynamic"), !!a), r) for (let t = 0; t < e; t++) l.append(this.createItem(t));
                let c, h = 0;
                for (const e of [ ...l.children ]) {
                    const i = h === this.instance.page;
                    i && (c = e), o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
                    for (const t of [ "isBeforePrev", "isPrev", "isNext", "isAfterNext" ]) S(e, this.cn(t));
                    h++;
                }
                if (c = c || l.firstChild, a && c) {
                    const t = c.previousElementSibling, e = t && t.previousElementSibling;
                    P(t, this.cn("isPrev")), P(e, this.cn("isBeforePrev"));
                    const i = c.nextElementSibling, n = i && i.nextElementSibling;
                    P(i, this.cn("isNext")), P(n, this.cn("isAfterNext"));
                }
                this.isDynamic = a;
            }
            createItem(t = 0) {
                var e;
                const i = document.createElement("li");
                i.setAttribute("role", "presentation");
                const s = n(this.instance.localize(this.option("dotTpl"), [ [ "%d", t + 1 ] ]).replace(/\%i/g, t + ""));
                return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), 
                i;
            }
            cleanup() {
                this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, S(this.instance.container, this.cn("hasDots"));
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(W, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $
        });
        const X = "disabled", q = "next", Y = "prev";
        class V extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prev", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "next", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isDom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            onRefresh() {
                const t = this.instance, e = t.pages.length, i = t.page;
                if (e < 2) return void this.cleanup();
                this.build();
                let n = this.prev, s = this.next;
                n && s && (n.removeAttribute(X), s.removeAttribute(X), t.isInfinite || (i <= 0 && n.setAttribute(X, ""), 
                i >= e - 1 && s.setAttribute(X, "")));
            }
            addBtn(t) {
                var e;
                const i = this.instance, n = document.createElement("button");
                n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)), 
                P(n, this.cn("button") + " " + this.cn(t === q ? "isNext" : "isPrev"));
                const s = i.isRTL ? t === q ? Y : q : t;
                var o;
                return n.innerHTML = i.localize(this.option(`${s}Tpl`)), n.dataset[`carousel${o = t, 
                o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : ""}`] = "true", 
                null === (e = this.container) || void 0 === e || e.appendChild(n), n;
            }
            build() {
                const t = this.instance.container, e = this.cn("container");
                let {container: i, prev: n, next: s} = this;
                i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), 
                P(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), 
                s || (s = this.addBtn(q)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), 
                n || (n = this.addBtn(Y)), this.prev = n;
            }
            cleanup() {
                this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), 
                this.container && this.container.remove()), this.prev = null, this.next = null, 
                this.container = null, this.isDom = !1;
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(V, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    container: "f-carousel__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                },
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
            }
        });
        class Z extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "selectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "nav", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            addAsTargetFor(t) {
                this.target = this.instance, this.nav = t, this.attachEvents();
            }
            addAsNavFor(t) {
                this.nav = this.instance, this.target = t, this.attachEvents();
            }
            attachEvents() {
                const {nav: t, target: e} = this;
                t && e && (t.options.initialSlide = e.options.initialPage, t.state === B.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), 
                e.state === B.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
            }
            onNavReady(t) {
                t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), 
                t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
            }
            onTargetReady(t) {
                t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), 
                this.onTargetChange();
            }
            onNavClick(t, e, i) {
                this.onNavTouch(t, t.panzoom, i);
            }
            onNavTouch(t, e, i) {
                var n, s;
                if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
                const o = i.target, {nav: a, target: r} = this;
                if (!a || !r || !o) return;
                const l = o.closest("[data-index]");
                if (i.stopPropagation(), i.preventDefault(), !l) return;
                const c = parseInt(l.dataset.index || "", 10) || 0, h = r.getPageForSlide(c), d = a.getPageForSlide(c);
                a.slideTo(d), r.slideTo(h, {
                    friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
                }), this.markSelectedSlide(c);
            }
            onNavCreateSlide(t, e) {
                e.index === this.selectedIndex && this.markSelectedSlide(e.index);
            }
            onTargetChange() {
                var t, e;
                const {target: i, nav: n} = this;
                if (!i || !n) return;
                if (n.state !== B.Ready || i.state !== B.Ready) return;
                const s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index, o = n.getPageForSlide(s);
                this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? {
                    friction: 0
                } : void 0);
            }
            markSelectedSlide(t) {
                const e = this.nav;
                e && e.state === B.Ready && (this.selectedIndex = t, [ ...e.slides ].map((e => {
                    e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
                })));
            }
            attach() {
                const t = this;
                let e = t.options.target, i = t.options.nav;
                e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
            }
            detach() {
                const t = this, e = t.nav, i = t.target;
                e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), 
                e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), 
                i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
            }
        }
        Object.defineProperty(Z, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                friction: .35
            }
        });
        const U = {
            Navigation: V,
            Dots: W,
            Sync: Z
        }, G = "animationend", K = "isSelected", J = "slide";
        class Q extends g {
            get axis() {
                return this.isHorizontal ? "e" : "f";
            }
            get isEnabled() {
                return this.state === B.Ready;
            }
            get isInfinite() {
                let t = !1;
                const {contentDim: e, viewportDim: i, pages: n, slides: s} = this, o = s[0];
                return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
            }
            get isRTL() {
                return "rtl" === this.option("direction");
            }
            get isHorizontal() {
                return "x" === this.option("axis");
            }
            constructor(t, e = {}, i = {}) {
                if (super(), Object.defineProperty(this, "bp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }), Object.defineProperty(this, "lp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "userOptions", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: B.Init
                }), Object.defineProperty(this, "page", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "prevPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "viewport", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "slides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "inTransition", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Set
                }), Object.defineProperty(this, "contentDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "viewportDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), "string" == typeof t && (t = document.querySelector(t)), !t || !E(t)) throw new Error("No Element found");
                this.container = t, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), 
                this.userOptions = e, this.userPlugins = i, queueMicrotask((() => {
                    this.processOptions();
                }));
            }
            processOptions() {
                var t, e;
                const i = u({}, Q.defaults, this.userOptions);
                let n = "";
                const s = i.breakpoints;
                if (s && d(s)) for (const [t, e] of Object.entries(s)) window.matchMedia(t).matches && d(e) && (n += t, 
                u(i, e));
                n === this.bp && this.state !== B.Init || (this.bp = n, this.state === B.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), 
                this.state !== B.Init && this.destroy(), super.setOptions(i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout((() => {
                    this.init();
                }), 0));
            }
            init() {
                this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Q.Plugins), this.userPlugins)), 
                this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), 
                this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, 
                this.emit("ready");
            }
            initLayout() {
                const {container: t} = this, e = this.option("classes");
                P(t, this.cn("container")), o(t, e.isLTR, !this.isRTL), o(t, e.isRTL, this.isRTL), 
                o(t, e.isVertical, !this.isHorizontal), o(t, e.isHorizontal, this.isHorizontal);
                let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
                i || (i = document.createElement("div"), P(i, e.viewport), i.append(...F(t, `.${e.slide}`)), 
                t.prepend(i)), i.addEventListener("scroll", this.onScroll);
                let n = this.option("track") || t.querySelector(`.${e.track}`);
                n || (n = document.createElement("div"), P(n, e.track), n.append(...Array.from(i.childNodes))), 
                n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, 
                this.track = n, this.emit("initLayout");
            }
            initSlides() {
                const {track: t} = this;
                if (!t) return;
                const e = [ ...this.slides ], i = [];
                [ ...F(t, `.${this.cn(J)}`) ].forEach((t => {
                    if (E(t)) {
                        const e = H({
                            el: t,
                            isDom: !0,
                            index: this.slides.length
                        });
                        i.push(e);
                    }
                }));
                for (let t of [ ...this.option("slides", []) || [], ...e ]) i.push(H(t));
                this.slides = i;
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                for (const t of i) this.emit("beforeInitSlide", t, t.index), this.emit("initSlide", t, t.index);
                this.emit("initSlides");
            }
            setInitialPage() {
                const t = this.option("initialSlide");
                this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
            }
            setInitialPosition() {
                const {track: t, pages: e, isHorizontal: i} = this;
                if (!t || !e.length) return;
                let n = this.page;
                e[n] || (this.page = n = 0);
                const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1), o = i ? `${s}px` : "0", a = i ? "0" : `${s}px`;
                t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
            }
            initPanzoom() {
                this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
                const t = this.option("Panzoom") || {};
                this.panzoom = new I(this.viewport, u({}, {
                    content: this.track,
                    zoom: !1,
                    panOnlyZoomed: !1,
                    lockAxis: this.isHorizontal ? "x" : "y",
                    infinite: this.isInfinite,
                    click: !1,
                    dblClick: !1,
                    touch: t => !(this.pages.length < 2 && !t.options.infinite),
                    bounds: () => this.getBounds(),
                    maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
                }, t)), this.panzoom.on("*", ((t, e, ...i) => {
                    this.emit(`Panzoom.${e}`, t, ...i);
                })), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), 
                this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
            }
            attachEvents() {
                const t = this.container;
                t && (t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
            }
            createPages() {
                let t = [];
                const {contentDim: e, viewportDim: i} = this;
                let n = this.option("slidesPerPage");
                n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");
                let s = 0, o = 0, a = 0;
                for (const e of this.slides) (!t.length || o + e.dim - i > .05 || a >= n) && (t.push(N()), 
                s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
                return t;
            }
            processPages() {
                const e = this.pages, {contentDim: i, viewportDim: n, isInfinite: s} = this, o = this.option("center"), a = this.option("fill"), r = a && o && i > n && !s;
                if (e.forEach(((t, e) => {
                    var s;
                    t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, 
                    t.dim = 0;
                    for (const [e, i] of t.slides.entries()) t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
                    r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -.5 * (n - t.dim));
                })), e.forEach((e => {
                    a && !s && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), 
                    e.pos = t(e.pos, 1e3), e.dim = t(e.dim, 1e3), Math.abs(e.pos) <= .1 && (e.pos = 0);
                })), s) return e;
                const l = [];
                let c;
                return e.forEach((t => {
                    const e = Object.assign({}, t);
                    c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [ ...c.slides, ...e.slides ]) : (e.index = l.length, 
                    c = e, l.push(e));
                })), l;
            }
            getPageFromIndex(t = 0) {
                const e = this.pages.length;
                let i;
                return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), 
                i;
            }
            getSlideMetrics(e) {
                var i, n;
                const s = this.isHorizontal ? "width" : "height";
                let o = 0, a = 0, r = e.el;
                const l = !(!r || r.parentNode);
                if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), 
                r.style.visibility = "hidden", (this.track || document.body).prepend(r)), P(r, this.cn(J) + " " + e.class + " " + e.customClass), 
                o) r.style[s] = `${o}px`, r.style["width" === s ? "height" : "width"] = ""; else {
                    l && (this.track || document.body).prepend(r), o = r.getBoundingClientRect()[s] * Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
                    let t = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
                    t - 1 > o && (o = t);
                }
                const c = getComputedStyle(r);
                return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, 
                o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), 
                a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : e.el || r.remove(), 
                {
                    dim: t(o, 1e3),
                    gap: t(a, 1e3)
                };
            }
            getBounds() {
                const {isInfinite: t, isRTL: e, isHorizontal: i, pages: n} = this;
                let s = {
                    min: 0,
                    max: 0
                };
                if (t) s = {
                    min: -1 / 0,
                    max: 1 / 0
                }; else if (n.length) {
                    const t = n[0].pos, o = n[n.length - 1].pos;
                    s = e && i ? {
                        min: t,
                        max: o
                    } : {
                        min: -1 * o,
                        max: -1 * t
                    };
                }
                return {
                    x: i ? s : {
                        min: 0,
                        max: 0
                    },
                    y: i ? {
                        min: 0,
                        max: 0
                    } : s
                };
            }
            repositionSlides() {
                let e, {isHorizontal: i, isRTL: n, isInfinite: s, viewport: o, viewportDim: a, contentDim: r, page: l, pages: c, slides: h, panzoom: d} = this, u = 0, p = 0, f = 0, g = 0;
                d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", 
                n && i && (g *= -1);
                for (const i of h) {
                    const n = i.el;
                    n ? ("top" === e ? (n.style.right = "", n.style.left = "") : n.style.top = "", i.index !== u ? n.style[e] = 0 === p ? "" : `${t(p, 1e3)}px` : n.style[e] = "", 
                    f += i.dim + i.gap, u++) : p += i.dim + i.gap;
                }
                if (s && f && o) {
                    let n = getComputedStyle(o), s = "padding", l = i ? "Right" : "Bottom", c = parseFloat(n[s + (i ? "Left" : "Top")]);
                    g -= c, a += c, a += parseFloat(n[s + l]);
                    for (const i of h) i.el && (t(i.pos) < t(a) && t(i.pos + i.dim + i.gap) < t(g) && t(g) > t(r - a) && (i.el.style[e] = `${t(p + f, 1e3)}px`), 
                    t(i.pos + i.gap) >= t(r - a) && t(i.pos) > t(g + a) && t(g) < t(a) && (i.el.style[e] = `-${t(f, 1e3)}px`));
                }
                let m, v, b = [ ...this.inTransition ];
                if (b.length > 1 && (m = c[b[0]], v = c[b[1]]), m && v) {
                    let i = 0;
                    for (const n of h) n.el ? this.inTransition.has(n.index) && m.slides.indexOf(n) < 0 && (n.el.style[e] = `${t(i + (m.pos - v.pos), 1e3)}px`) : i += n.dim + n.gap;
                }
            }
            createSlideEl(t) {
                const {track: e, slides: i} = this;
                if (!e || !t) return;
                if (t.el && t.el.parentNode) return;
                const n = t.el || document.createElement("div");
                P(n, this.cn(J)), P(n, t.class), P(n, t.customClass);
                const s = t.html;
                s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
                const o = [];
                i.forEach(((t, e) => {
                    t.el && o.push(e);
                }));
                const a = t.index;
                let r = null;
                if (o.length) r = i[o.reduce(((t, e) => Math.abs(e - a) < Math.abs(t - a) ? e : t))];
                const l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
                e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
            }
            removeSlideEl(t, e = !1) {
                const i = null == t ? void 0 : t.el;
                if (!i || !i.parentNode) return;
                const n = this.cn(K);
                if (i.classList.contains(n) && (S(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), 
                i.removeAttribute("data-index"), void (i.style.left = "");
                this.emit("removeSlide", t);
                const s = new CustomEvent(G);
                i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
            }
            transitionTo(t = 0, e = this.option("transition")) {
                var i, n, s, o;
                if (!e) return !1;
                const a = this.page, {pages: r, panzoom: l} = this;
                t = parseInt((t || 0).toString()) || 0;
                const c = this.getPageFromIndex(t);
                if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;
                let h = t > a ? 1 : -1;
                this.isInfinite && (0 === a && t === r.length - 1 && (h = -1), a === r.length - 1 && 0 === t && (h = 1));
                const d = r[c].pos * (this.isRTL ? 1 : -1);
                if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
                this.clearTransitions();
                const u = l.isResting;
                P(this.container, this.cn("inTransition"));
                const p = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null, f = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
                this.inTransition.add(f.index), this.createSlideEl(f);
                let g = p.el, m = f.el;
                u || e === J || (e = "fadeFast", g = null);
                const v = this.isRTL ? "next" : "prev", b = this.isRTL ? "prev" : "next";
                return g && (this.inTransition.add(p.index), p.transition = e, g.addEventListener(G, this.onAnimationEnd), 
                g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)), m && (f.transition = e, m.addEventListener(G, this.onAnimationEnd), 
                m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)), l.current[this.axis] = d, 
                l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
            }
            manageSlideVisiblity() {
                const t = new Set, e = new Set, i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
                for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
                for (const e of this.inTransition) t.add(this.slides[e]);
                for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
                for (const i of e) t.has(i) || this.removeSlideEl(i);
                this.markSelectedSlides(), this.repositionSlides();
            }
            markSelectedSlides() {
                if (!this.pages[this.page] || !this.pages[this.page].slides) return;
                const t = "aria-hidden";
                let e = this.cn(K);
                if (e) for (const i of this.slides) {
                    const n = i.el;
                    n && (n.dataset.index = `${i.index}`, n.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? n.removeAttribute(t) : n.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (n.classList.contains(e) || (P(n, e), 
                    this.emit("selectSlide", i)), n.removeAttribute(t)) : (n.classList.contains(e) && (S(n, e), 
                    this.emit("unselectSlide", i)), n.setAttribute(t, "true")));
                }
            }
            flipInfiniteTrack() {
                const {axis: t, isHorizontal: e, isInfinite: i, isRTL: n, viewportDim: s, contentDim: o} = this, a = this.panzoom;
                if (!a || !i) return;
                let r = a.current[t], l = a.target[t] - r, c = 0, h = .5 * s;
                n && e ? (r < -h && (c = -1, r += o), r > o - h && (c = 1, r -= o)) : (r > h && (c = 1, 
                r -= o), r < -o + h && (c = -1, r += o)), c && (a.current[t] = r, a.target[t] = r + l);
            }
            lazyLoadImg(t, e) {
                const i = this, s = "f-fadeIn", o = "is-preloading";
                let a = !1, r = null;
                const l = () => {
                    a || (a = !0, r && (r.remove(), r = null), S(e, o), e.complete && (P(e, s), setTimeout((() => {
                        S(e, s);
                    }), 350)), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (i.updateMetrics(), 
                    i.setViewportHeight()), this.emit("load", t));
                };
                P(e, o), e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, 
                delete e.dataset.lazySrcset, e.addEventListener("error", (() => {
                    l();
                })), e.addEventListener("load", (() => {
                    l();
                })), setTimeout((() => {
                    const i = e.parentNode;
                    i && t.el && (e.complete ? l() : a || (r = n(x), i.insertBefore(r, e)));
                }), 300);
            }
            lazyLoadSlide(t) {
                const e = t && t.el;
                if (!e) return;
                const i = new Set;
                let n = Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
                e.dataset.lazySrc && n.push(e), n.map((t => {
                    t instanceof HTMLImageElement ? i.add(t) : t instanceof HTMLElement && t.dataset.lazySrc && (t.style.backgroundImage = `url('${t.dataset.lazySrc}')`, 
                    delete t.dataset.lazySrc);
                }));
                for (const e of i) this.lazyLoadImg(t, e);
            }
            onAnimationEnd(t) {
                var e;
                const i = t.target, n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1, s = this.slides[n], o = t.animationName;
                if (!i || !s || !o) return;
                const a = !!this.inTransition.has(n) && s.transition;
                a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), 
                n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
            }
            onDecel(t, e = 0, i = 0, n = 0, s = 0) {
                if (this.option("dragFree")) return void this.setPageFromPosition();
                const {isRTL: o, isHorizontal: a, axis: r, pages: l} = this, c = l.length, h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
                let d = 0;
                if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
                let u = this.page, p = o && a ? 1 : -1;
                const f = t.current[r] * p;
                let {pageIndex: g} = this.getPageFromPosition(f);
                Math.abs(d) > 5 ? (l[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = g), 
                u = o && a ? d < 0 ? u - 1 : u + 1 : d < 0 ? u + 1 : u - 1) : u = 0 === n && 0 === s ? u : g, 
                this.slideTo(u, {
                    transition: !1,
                    friction: t.option("decelFriction")
                });
            }
            onClick(t) {
                const e = t.target, i = e && E(e) ? e.dataset : null;
                let n, s;
                i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), 
                s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
            }
            onSlideTo(t) {
                const e = t.detail || 0;
                this.slideTo(this.getPageForSlide(e), {
                    friction: 0
                });
            }
            onChange(t, e = 0) {
                const i = this.page;
                this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), 
                t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
            }
            onRefresh() {
                let t = this.contentDim, e = this.viewportDim;
                this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                });
            }
            onScroll() {
                var t;
                null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
            }
            onResize() {
                this.option("breakpoints") && this.processOptions();
            }
            onBeforeTransform(t) {
                this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), 
                this.lp = t.current.e;
            }
            onEndAnimation() {
                this.inTransition.size || this.emit("settle");
            }
            reInit(t = null, e = null) {
                this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t || this.userOptions, 
                this.userPlugins = e || this.userPlugins, this.processOptions();
            }
            slideTo(t = 0, {friction: e = this.option("friction"), transition: i = this.option("transition")} = {}) {
                if (this.state === B.Destroy) return;
                t = parseInt((t || 0).toString()) || 0;
                const n = this.getPageFromIndex(t), {axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l} = this, c = r.length, h = a && o ? 1 : -1;
                if (!l || !c) return;
                if (this.page !== n) {
                    const e = new Event("beforeChange", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    if (this.emit("beforeChange", e, t), e.defaultPrevented) return;
                }
                if (this.transitionTo(t, i)) return;
                let d = r[n].pos;
                if (this.isInfinite) {
                    const e = this.contentDim, i = l.target[s] * h;
                    if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2); else d = [ d, d - e, d + e ].reduce((function(t, e) {
                        return Math.abs(e - i) < Math.abs(t - i) ? e : t;
                    }));
                }
                d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({
                    x: o ? d : 0,
                    y: o ? 0 : d,
                    friction: e
                }), this.onChange(n));
            }
            slideToClosest(t) {
                if (this.panzoom) {
                    const {pageIndex: e} = this.getPageFromPosition();
                    this.slideTo(e, t);
                }
            }
            slideNext() {
                this.slideTo(this.page + 1);
            }
            slidePrev() {
                this.slideTo(this.page - 1);
            }
            clearTransitions() {
                this.inTransition.clear(), S(this.container, this.cn("inTransition"));
                const t = [ "to-prev", "to-next", "from-prev", "from-next" ];
                for (const e of this.slides) {
                    const i = e.el;
                    if (i) {
                        i.removeEventListener(G, this.onAnimationEnd), i.classList.remove(...t);
                        const n = e.transition;
                        n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
                    }
                }
                this.manageSlideVisiblity();
            }
            addSlide(t, e) {
                var i, n, s, o;
                const a = this.panzoom, r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0, l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0, c = this.contentDim < this.viewportDim;
                let h = Array.isArray(e) ? e : [ e ];
                const d = [];
                for (const t of h) d.push(H(t));
                this.slides.splice(t, 0, ...d);
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                for (const t of d) this.emit("beforeInitSlide", t, t.index);
                if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
                    const e = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0, i = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0, n = this.pages.length || 1, h = this.isRTL ? l - i : i - l, d = this.isRTL ? r - e : e - r;
                    c && 1 === n ? (t <= this.page && (a.current[this.axis] -= h, a.target[this.axis] -= h), 
                    a.panTo({
                        [this.isHorizontal ? "x" : "y"]: -1 * e
                    })) : d && t <= this.page && (a.target[this.axis] -= d, a.current[this.axis] -= d, 
                    a.requestTick());
                }
                for (const t of d) this.emit("initSlide", t, t.index);
            }
            prependSlide(t) {
                this.addSlide(0, t);
            }
            appendSlide(t) {
                this.addSlide(this.slides.length, t);
            }
            removeSlide(t) {
                const e = this.slides.length;
                t = (t % e + e) % e;
                const i = this.slides[t];
                if (i) {
                    this.removeSlideEl(i, !0), this.slides.splice(t, 1);
                    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                    this.updateMetrics(), this.slideTo(this.page, {
                        friction: 0,
                        transition: !1
                    }), this.emit("destroySlide", i);
                }
            }
            updateMetrics() {
                const {panzoom: e, viewport: i, track: n, slides: s, isHorizontal: o, isInfinite: a} = this;
                if (!n) return;
                const r = o ? "width" : "height", l = o ? "offsetWidth" : "offsetHeight";
                if (i) {
                    let e = Math.max(i[l], t(i.getBoundingClientRect()[r], 1e3)), n = getComputedStyle(i), s = "padding", a = o ? "Right" : "Bottom";
                    e -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a]), this.viewportDim = e;
                }
                let c, h = 0;
                for (const [e, i] of s.entries()) {
                    let n = 0, o = 0;
                    !i.el && c ? (n = c.dim, o = c.gap) : (({dim: n, gap: o} = this.getSlideMetrics(i)), 
                    c = i), n = t(n, 1e3), o = t(o, 1e3), i.dim = n, i.gap = o, i.pos = h, h += n, (a || e < s.length - 1) && (h += o);
                }
                h = t(h, 1e3), this.contentDim = h, e && (e.contentRect[r] = h, e.contentRect[o ? "fullWidth" : "fullHeight"] = h), 
                this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), 
                this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), 
                this.emit("refresh");
            }
            getProgress(e, i = !1, n = !1) {
                void 0 === e && (e = this.page);
                const s = this, o = s.panzoom, a = s.contentDim, r = s.pages[e] || 0;
                if (!r || !o) return e > this.page ? -1 : 1;
                let l = -1 * o.current.e, c = t((l - r.pos) / (1 * r.dim), 1e3), h = c, d = c;
                this.isInfinite && !0 !== n && (h = t((l - r.pos + a) / (1 * r.dim), 1e3), d = t((l - r.pos - a) / (1 * r.dim), 1e3));
                let u = [ c, h, d ].reduce((function(t, e) {
                    return Math.abs(e) < Math.abs(t) ? e : t;
                }));
                return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
            }
            setViewportHeight() {
                const {page: t, pages: e, viewport: i, isHorizontal: n} = this;
                if (!i || !e[t]) return;
                let s = 0;
                n && this.track && (this.track.style.height = "auto", e[t].slides.forEach((t => {
                    t.el && (s = Math.max(s, t.el.offsetHeight));
                }))), i.style.height = s ? `${s}px` : "";
            }
            getPageForSlide(t) {
                for (const e of this.pages) for (const i of e.slides) if (i.index === t) return e.index;
                return -1;
            }
            getVisibleSlides(t = 0) {
                var e;
                const i = new Set;
                let {panzoom: n, contentDim: s, viewportDim: o, pages: a, page: r} = this;
                if (o) {
                    s = s + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
                    let l = 0;
                    l = n && n.state !== m.Init && n.state !== m.Destroy ? -1 * n.current[this.axis] : a[r] && a[r].pos || 0, 
                    this.isInfinite && (l -= Math.floor(l / s) * s), this.isRTL && this.isHorizontal && (l *= -1);
                    const c = l - o * t, h = l + o * (t + 1), d = this.isInfinite ? [ -1, 0, 1 ] : [ 0 ];
                    for (const t of this.slides) for (const e of d) {
                        const n = t.pos + e * s, o = n + t.dim + t.gap;
                        n < h && o > c && i.add(t);
                    }
                }
                return i;
            }
            getPageFromPosition(t) {
                const {viewportDim: e, contentDim: i, slides: n, pages: s, panzoom: o} = this, a = s.length, r = n.length, l = n[0], c = n[r - 1], h = this.option("center");
                let d = 0, u = 0, p = 0, f = void 0 === t ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0) : t;
                h && (f += .5 * e), this.isInfinite ? (f < l.pos - .5 * c.gap && (f -= i, p = -1), 
                f > c.pos + c.dim + .5 * c.gap && (f -= i, p = 1)) : f = Math.max(l.pos || 0, Math.min(f, c.pos));
                let g = c, m = n.find((t => {
                    const e = t.pos - .5 * g.gap, i = t.pos + t.dim + .5 * t.gap;
                    return g = t, f >= e && f < i;
                }));
                return m || (m = c), u = this.getPageForSlide(m.index), d = u + p * a, {
                    page: d,
                    pageIndex: u
                };
            }
            setPageFromPosition() {
                const {pageIndex: t} = this.getPageFromPosition();
                this.onChange(t);
            }
            destroy() {
                if ([ B.Destroy ].includes(this.state)) return;
                this.state = B.Destroy;
                const {container: t, viewport: e, track: i, slides: n, panzoom: s} = this, o = this.option("classes");
                t.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), 
                s && (s.destroy(), this.panzoom = null), n && n.forEach((t => {
                    this.removeSlideEl(t);
                })), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), 
                e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes));
                for (const [e, i] of Object.entries(o)) "container" !== e && i && t.classList.remove(i);
                this.track = null, this.viewport = null, this.page = 0, this.slides = [];
                const a = this.events.get("ready");
                this.events = new Map, a && this.events.set("ready", a);
            }
        }
        Object.defineProperty(Q, "Panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: I
        }), Object.defineProperty(Q, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: j
        }), Object.defineProperty(Q, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: U
        });
        const tt = function(t) {
            if (!E(t)) return 0;
            const e = window.scrollY, i = window.innerHeight, n = e + i, s = t.getBoundingClientRect(), o = s.y + e, a = s.height, r = o + a;
            if (e > r || n < o) return 0;
            if (e < o && n > r) return 100;
            if (o < e && r > n) return 100;
            let l = a;
            o < e && (l -= e - o), r > n && (l -= r - n);
            const c = l / i * 100;
            return Math.round(c);
        }, et = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let it;
        const nt = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ].join(","), st = t => {
            if (t && et) {
                void 0 === it && document.createElement("div").focus({
                    get preventScroll() {
                        return it = !0, !1;
                    }
                });
                try {
                    if (it) t.focus({
                        preventScroll: !0
                    }); else {
                        const e = window.scrollY || document.body.scrollTop, i = window.scrollX || document.body.scrollLeft;
                        t.focus(), document.body.scrollTo({
                            top: e,
                            left: i,
                            behavior: "auto"
                        });
                    }
                } catch (t) {}
            }
        }, ot = () => {
            const t = document;
            let e, i = "", n = "", s = "";
            return t.fullscreenEnabled ? (i = "requestFullscreen", n = "exitFullscreen", s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen", 
            n = "webkitExitFullscreen", s = "webkitFullscreenElement"), i && (e = {
                request: function(e = t.documentElement) {
                    return "webkitRequestFullscreen" === i ? e[i](Element.ALLOW_KEYBOARD_INPUT) : e[i]();
                },
                exit: function() {
                    return t[s] && t[n]();
                },
                isFullscreen: function() {
                    return t[s];
                }
            }), e;
        }, at = {
            animated: !0,
            autoFocus: !0,
            backdropClick: "close",
            Carousel: {
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide"
                }
            },
            closeButton: "auto",
            closeExisting: !1,
            commonCaption: !1,
            compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            contentClick: "toggleZoom",
            contentDblClick: !1,
            defaultType: "image",
            defaultDisplay: "flex",
            dragToClose: !0,
            Fullscreen: {
                autoStart: !1
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            hideClass: "f-fadeOut",
            hideScrollbar: !0,
            idle: 3500,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            l10n: Object.assign(Object.assign({}, b), {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }),
            parentEl: null,
            placeFocusBack: !0,
            showClass: "f-zoomInUp",
            startIndex: 0,
            tpl: {
                closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
            },
            trapFocus: !0,
            wheel: "zoom"
        };
        var rt, lt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", 
            t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
        }(rt || (rt = {})), function(t) {
            t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", 
            t[t.Closing = 3] = "Closing";
        }(lt || (lt = {}));
        let ct = "", ht = !1, dt = !1, ut = null;
        const pt = () => {
            let t = "", e = "";
            const i = Oe.getInstance();
            if (i) {
                const n = i.carousel, s = i.getSlide();
                if (n && s) {
                    let o = s.slug || void 0, a = s.triggerEl || void 0;
                    e = o || i.option("slug") || "", !e && a && a.dataset && (e = a.dataset.fancybox || ""), 
                    e && "true" !== e && (t = "#" + e + (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
                }
            }
            return {
                hash: t,
                slug: e,
                index: 1
            };
        }, ft = () => {
            const t = new URL(document.URL).hash, e = t.slice(1).split("-"), i = e[e.length - 1], n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
            return {
                hash: t,
                slug: e.join("-"),
                index: n
            };
        }, gt = () => {
            const {slug: t, index: e} = ft();
            if (!t) return;
            let i = document.querySelector(`[data-slug="${t}"]`);
            if (i && i.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
            })), Oe.getInstance()) return;
            const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
            n.length && (i = n[e - 1], i && i.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
            })));
        }, mt = () => {
            if (!1 === Oe.defaults.Hash) return;
            const t = Oe.getInstance();
            if (!1 === (null == t ? void 0 : t.options.Hash)) return;
            const {slug: e, index: i} = ft(), {slug: n} = pt();
            t && (e === n ? t.jumpTo(i - 1) : (ht = !0, t.close())), gt();
        }, vt = () => {
            ut && clearTimeout(ut), queueMicrotask((() => {
                mt();
            }));
        }, bt = () => {
            window.addEventListener("hashchange", vt, !1), setTimeout((() => {
                mt();
            }), 500);
        };
        et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
        const yt = "is-zooming-in";
        class wt extends _ {
            onCreateSlide(t, e, i) {
                const n = this.instance.optionFor(i, "src") || "";
                i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
            }
            onRemoveSlide(t, e, i) {
                i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
            }
            onChange(t, e, i, n) {
                S(this.instance.container, yt);
                for (const t of e.slides) {
                    const e = t.panzoom;
                    e && t.index !== i && e.reset(.35);
                }
            }
            onClose() {
                var t;
                const e = this.instance, i = e.container, n = e.getSlide();
                if (!i || !i.parentElement || !n) return;
                const {el: s, contentEl: o, panzoom: a, thumbElSrc: r} = n;
                if (!s || !r || !o || !a || a.isContentLoading || a.state === m.Init || a.state === m.Destroy) return;
                a.updateMetrics();
                let l = this.getZoomInfo(n);
                if (!l) return;
                this.instance.state = rt.CustomClosing, i.classList.remove(yt), i.classList.add("is-zooming-out"), 
                o.style.backgroundImage = `url('${r}')`;
                const c = i.getBoundingClientRect();
                1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
                    position: "absolute",
                    top: `${i.offsetTop + window.scrollY}px`,
                    left: `${i.offsetLeft + window.scrollX}px`,
                    bottom: "auto",
                    right: "auto",
                    width: `${c.width}px`,
                    height: `${c.height}px`,
                    overflow: "hidden"
                });
                const {x: h, y: d, scale: u, opacity: p} = l;
                if (p) {
                    const t = ((t, e, i, n) => {
                        const s = e - t, o = n - i;
                        return e => i + ((e - t) / s * o || 0);
                    })(a.scale, u, 1, 0);
                    a.on("afterTransform", (() => {
                        o.style.opacity = t(a.scale) + "";
                    }));
                }
                a.on("endAnimation", (() => {
                    e.destroy();
                })), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
                    x: h,
                    y: d,
                    scale: u,
                    friction: p ? .2 : .33,
                    ignoreBounds: !0
                }), a.isResting && e.destroy();
            }
            setImage(t, e) {
                const i = this.instance;
                t.src = e, this.process(t, e).then((e => {
                    const {contentEl: n, imageEl: s, thumbElSrc: o, el: a} = t;
                    if (i.isClosing() || !n || !s) return;
                    n.offsetHeight;
                    const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
                    if (this.option("protected") && a) {
                        a.addEventListener("contextmenu", (t => {
                            t.preventDefault();
                        }));
                        const t = document.createElement("div");
                        P(t, "fancybox-protected"), n.appendChild(t);
                    }
                    if (o && r) {
                        const s = e.contentRect, a = Math.max(s.fullWidth, s.fullHeight);
                        let c = null;
                        !r.opacity && a > 1200 && (c = document.createElement("img"), P(c, "fancybox-ghost"), 
                        c.src = o, n.appendChild(c));
                        const h = () => {
                            c && (P(c, "f-fadeFastOut"), setTimeout((() => {
                                c && (c.remove(), c = null);
                            }), 200));
                        };
                        (l = o, new Promise(((t, e) => {
                            const i = new Image;
                            i.onload = t, i.onerror = e, i.src = l;
                        }))).then((() => {
                            i.hideLoading(t), t.state = lt.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then((() => {
                                h(), this.instance.done(t);
                            }), (() => {})), c && setTimeout((() => {
                                h();
                            }), a > 2500 ? 800 : 200);
                        }), (() => {
                            i.hideLoading(t), i.revealContent(t);
                        }));
                    } else {
                        const n = this.optionFor(t, "initialSize"), s = this.optionFor(t, "zoom"), o = {
                            event: i.prevMouseMoveEvent || i.options.event,
                            friction: s ? .12 : 0
                        };
                        let a = i.optionFor(t, "showClass") || void 0, r = !0;
                        i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, 
                        e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), 
                        i.revealContent(t, a);
                    }
                    var l;
                }), (() => {
                    i.setError(t, "{{IMAGE_ERROR}}");
                }));
            }
            process(t, e) {
                return new Promise(((i, s) => {
                    var o;
                    const a = this.instance, r = t.el;
                    a.clearContent(t), a.showLoading(t);
                    let l = this.optionFor(t, "content");
                    if ("string" == typeof l && (l = n(l)), !l || !E(l)) {
                        if (l = document.createElement("img"), l instanceof HTMLImageElement) {
                            let i = "", n = t.caption;
                            i = "string" == typeof n && n ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1}`, 
                            l.src = e || "", l.alt = i, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), 
                            this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
                        }
                        t.sizes && l.setAttribute("sizes", t.sizes);
                    }
                    P(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
                    t.panzoom = new I(r, u({
                        transformParent: !0
                    }, this.option("Panzoom") || {}, {
                        content: l,
                        width: (e, i) => a.optionFor(t, "width", "auto", i) || "auto",
                        height: (e, i) => a.optionFor(t, "height", "auto", i) || "auto",
                        wheel: () => {
                            const t = a.option("wheel");
                            return ("zoom" === t || "pan" == t) && t;
                        },
                        click: (e, i) => {
                            var n, s;
                            if (a.isCompact || a.isClosing()) return !1;
                            if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
                            if (i) {
                                const t = i.composedPath()[0];
                                if ([ "A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].includes(t.nodeName)) return !1;
                            }
                            let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
                            return a.option(o ? "contentClick" : "backdropClick") || !1;
                        },
                        dblClick: () => a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        on: {
                            ready: t => {
                                i(t);
                            },
                            error: () => {
                                s();
                            },
                            destroy: () => {
                                s();
                            }
                        }
                    }));
                }));
            }
            zoomIn(t) {
                return new Promise(((e, i) => {
                    const n = this.instance, s = n.container, {panzoom: o, contentEl: a, el: r} = t;
                    o && o.updateMetrics();
                    const l = this.getZoomInfo(t);
                    if (!(l && r && a && o && s)) return void i();
                    const {x: c, y: h, scale: d, opacity: u} = l, p = () => {
                        t.state !== lt.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), 
                        o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
                    }, f = t => {
                        (t.scale < .99 || t.scale > 1.01) && !t.isDragging || (S(s, yt), a.style.opacity = "", 
                        t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
                    };
                    o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on([ "error", "destroy" ], (() => {
                        i();
                    })), o.panTo({
                        x: c,
                        y: h,
                        scale: d,
                        friction: 0,
                        ignoreBounds: !0
                    }), o.stop("current");
                    const g = {
                        event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
                    }, m = this.optionFor(t, "initialSize");
                    P(s, yt), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
                }));
            }
            getZoomInfo(t) {
                const {el: e, imageEl: i, thumbEl: n, panzoom: s} = t, o = this.instance, a = o.container;
                if (!e || !i || !n || !s || tt(n) < 3 || !this.optionFor(t, "zoom") || !a || o.state === rt.Destroy) return !1;
                if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom")) return !1;
                const r = window.visualViewport || null;
                if (1 !== (r ? r.scale : 1)) return !1;
                let {top: l, left: c, width: h, height: d} = n.getBoundingClientRect(), {top: u, left: p, fitWidth: f, fitHeight: g} = s.contentRect;
                if (!(h && d && f && g)) return !1;
                const m = s.container.getBoundingClientRect();
                p += m.left, u += m.top;
                const v = -1 * (p + .5 * f - (c + .5 * h)), b = -1 * (u + .5 * g - (l + .5 * d)), y = h / f;
                let w = this.option("zoomOpacity") || !1;
                return "auto" === w && (w = Math.abs(h / d - f / g) > .1), {
                    x: v,
                    y: b,
                    scale: y,
                    opacity: w
                };
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
            }
        }
        Object.defineProperty(wt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 1
                },
                protected: !1,
                zoom: !0,
                zoomOpacity: "auto"
            }
        }), "function" == typeof SuppressedError && SuppressedError;
        const xt = "html", Et = "image", St = "map", Pt = "youtube", Ct = "vimeo", Tt = "html5video", Mt = (t, e = {}) => {
            const i = new URL(t), n = new URLSearchParams(i.search), s = new URLSearchParams;
            for (const [t, i] of [ ...n, ...Object.entries(e) ]) {
                let e = i + "";
                if ("t" === t) {
                    let t = e.match(/((\d*)m)?(\d*)s?/);
                    t && s.set("start", 60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + "");
                } else s.set(t, e);
            }
            let o = s + "", a = t.match(/#t=((.*)?\d+s)/);
            return a && (o += `#t=${a[1]}`), o;
        }, Ot = {
            ajax: null,
            autoSize: !0,
            iframeAttr: {
                allow: "autoplay; fullscreen",
                scrolling: "auto"
            },
            preload: !0,
            videoAutoplay: !0,
            videoRatio: 16 / 9,
            videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            videoFormat: "",
            vimeo: {
                byline: 1,
                color: "00adef",
                controls: 1,
                dnt: 1,
                muted: 0
            },
            youtube: {
                controls: 1,
                enablejsapi: 1,
                nocookie: 1,
                rel: 0,
                fs: 1
            }
        }, At = [ "image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo" ];
        class Lt extends _ {
            onBeforeInitSlide(t, e, i) {
                this.processType(i);
            }
            onCreateSlide(t, e, i) {
                this.setContent(i);
            }
            onClearContent(t, e) {
                e.xhr && (e.xhr.abort(), e.xhr = null);
                const i = e.iframeEl;
                i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);
                const n = e.contentEl, s = e.placeholderEl;
                if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== getComputedStyle(n).getPropertyValue("display") && (n.style.display = "none"), 
                setTimeout((() => {
                    s && (n && s.parentNode && s.parentNode.insertBefore(n, s), s.remove());
                }), 0), e.contentEl = void 0, e.placeholderEl = void 0; else for (;e.el && e.el.firstChild; ) e.el.removeChild(e.el.firstChild);
            }
            onSelectSlide(t, e, i) {
                i.state === lt.Ready && this.playVideo();
            }
            onUnselectSlide(t, e, i) {
                var n, s;
                if (i.type === Tt) {
                    try {
                        null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
                    } catch (t) {}
                    return;
                }
                let o;
                i.type === Ct ? o = {
                    method: "pause",
                    value: "true"
                } : i.type === Pt && (o = {
                    event: "command",
                    func: "pauseVideo"
                }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), 
                i.poller && clearTimeout(i.poller);
            }
            onDone(t, e) {
                t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
            }
            onRefresh(t, e) {
                e.slides.forEach((t => {
                    t.el && (this.resizeIframe(t), this.setAspectRatio(t));
                }));
            }
            onMessage(t) {
                try {
                    let e = JSON.parse(t.data);
                    if ("https://player.vimeo.com" === t.origin) {
                        if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
                    } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
                        const t = document.getElementById(e.id);
                        t && (t.dataset.ready = "true");
                    }
                } catch (t) {}
            }
            loadAjaxContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                this.instance.showLoading(t);
                const i = this.instance, n = new XMLHttpRequest;
                i.showLoading(t), n.onreadystatechange = function() {
                    n.readyState === XMLHttpRequest.DONE && i.state === rt.Ready && (i.hideLoading(t), 
                    200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
                };
                const s = t.ajax || null;
                n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
            }
            setInlineContent(t) {
                let e = null;
                if (E(t.src)) e = t.src; else if ("string" == typeof t.src) {
                    const i = t.src.split("#", 2).pop();
                    e = i ? document.getElementById(i) : null;
                }
                if (e) {
                    if ("clone" === t.type || e.closest(".fancybox__slide")) {
                        e = e.cloneNode(!0);
                        const i = e.dataset.animationName;
                        i && (e.classList.remove(i), delete e.dataset.animationName);
                        let n = e.getAttribute("id");
                        n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
                    } else if (e.parentNode) {
                        const i = document.createElement("div");
                        i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
                    }
                    this.instance.setContent(t, e);
                } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            setIframeContent(t) {
                const {src: e, el: i} = t;
                if (!e || "string" != typeof e || !i) return;
                i.classList.add("is-loading");
                const n = this.instance, s = document.createElement("iframe");
                s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
                for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, i);
                s.onerror = () => {
                    n.setError(t, "{{IFRAME_ERROR}}");
                }, t.iframeEl = s;
                const o = this.optionFor(t, "preload");
                if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), 
                this.resizeIframe(t), void n.revealContent(t);
                n.showLoading(t), s.onload = () => {
                    if (!s.src.length) return;
                    const e = "true" !== s.dataset.ready;
                    s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
                }, s.setAttribute("src", e), n.setContent(t, s, !1);
            }
            resizeIframe(t) {
                const {type: e, iframeEl: i} = t;
                if (e === Pt || e === Ct) return;
                const n = null == i ? void 0 : i.parentElement;
                if (!i || !n) return;
                let s = t.autoSize;
                void 0 === s && (s = this.optionFor(t, "autoSize"));
                let o = t.width || 0, a = t.height || 0;
                o && a && (s = !1);
                const r = n && n.style;
                if (!1 !== t.preload && !1 !== s && r) try {
                    const t = window.getComputedStyle(n), e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), l = i.contentWindow;
                    if (l) {
                        const t = l.document, i = t.getElementsByTagName(xt)[0], n = t.body;
                        r.width = "", n.style.overflow = "hidden", o = o || i.scrollWidth + e, r.width = `${o}px`, 
                        n.style.overflow = "", r.flex = "0 0 auto", r.height = `${n.scrollHeight}px`, a = i.scrollHeight + s;
                    }
                } catch (t) {}
                if (o || a) {
                    const t = {
                        flex: "0 1 auto",
                        width: "",
                        height: ""
                    };
                    o && "auto" !== o && (t.width = `${o}px`), a && "auto" !== a && (t.height = `${a}px`), 
                    Object.assign(r, t);
                }
            }
            playVideo() {
                const t = this.instance.getSlide();
                if (!t) return;
                const {el: e} = t;
                if (!e || !e.offsetParent) return;
                if (!this.optionFor(t, "videoAutoplay")) return;
                if (t.type === Tt) try {
                    const t = e.querySelector("video");
                    if (t) {
                        const e = t.play();
                        void 0 !== e && e.then((() => {})).catch((e => {
                            t.muted = !0, t.play();
                        }));
                    }
                } catch (t) {}
                if (t.type !== Pt && t.type !== Ct) return;
                const i = () => {
                    if (t.iframeEl && t.iframeEl.contentWindow) {
                        let e;
                        if ("true" === t.iframeEl.dataset.ready) return e = t.type === Pt ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                        t.type === Pt && (e = {
                            event: "listening",
                            id: t.iframeEl.getAttribute("id")
                        }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
                    }
                    t.poller = setTimeout(i, 250);
                };
                i();
            }
            processType(t) {
                if (t.html) return t.type = xt, t.src = t.html, void (t.html = "");
                const e = this.instance.optionFor(t, "src", "");
                if (!e || "string" != typeof e) return;
                let i = t.type, n = null;
                if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const s = this.optionFor(t, Pt), {nocookie: o} = s, a = function(t, e) {
                        var i = {};
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var s = 0;
                            for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
                        }
                        return i;
                    }(s, [ "nocookie" ]), r = `www.youtube${o ? "-nocookie" : ""}.com`, l = Mt(e, a), c = encodeURIComponent(n[2]);
                    t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, 
                    i = Pt;
                } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                    const s = Mt(e, this.optionFor(t, Ct)), o = encodeURIComponent(n[1]), a = n[4] || "";
                    t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, 
                    i = Ct;
                }
                if (!i && t.triggerEl) {
                    const e = t.triggerEl.dataset.type;
                    At.includes(e) && (i = e);
                }
                i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = Tt, 
                t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = Et : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), 
                (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, 
                i = St) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, 
                i = St), i = i || this.instance.option("defaultType"), t.type = i, i === Et && (t.thumbSrc = t.thumbSrc || t.src);
            }
            setContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                if (t && t.type && e) {
                    switch (t.type) {
                      case xt:
                        this.instance.setContent(t, e);
                        break;

                      case Tt:
                        const i = this.option("videoTpl");
                        i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
                        break;

                      case "inline":
                      case "clone":
                        this.setInlineContent(t);
                        break;

                      case "ajax":
                        this.loadAjaxContent(t);
                        break;

                      case "pdf":
                      case St:
                      case Pt:
                      case Ct:
                        t.preload = !1;

                      case "iframe":
                        this.setIframeContent(t);
                    }
                    this.setAspectRatio(t);
                }
            }
            setAspectRatio(t) {
                const e = t.contentEl;
                if (!(t.el && e && t.type && [ Pt, Ct, Tt ].includes(t.type))) return;
                let i, n = t.width || "auto", s = t.height || "auto";
                if ("auto" === n || "auto" === s) {
                    i = this.optionFor(t, "videoRatio");
                    const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
                    i = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(i + "");
                } else n && s && (i = n / s);
                if (!i) return;
                e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
                const o = e.getBoundingClientRect(), a = o.width || 1, r = o.height || 1;
                e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), 
                e.style.width = "auto", e.style.height = `${s}px`) : (n = "auto" === n ? a : Math.min(a, n), 
                e.style.width = `${n}px`, e.style.height = "auto");
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), 
                e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), 
                window.addEventListener("message", t.onMessage);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), 
                e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), 
                window.removeEventListener("message", t.onMessage);
            }
        }
        Object.defineProperty(Lt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ot
        });
        const zt = "play", Rt = "pause", kt = "ready";
        class It extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kt
                }), Object.defineProperty(this, "inHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "progressBar", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            get isActive() {
                return this.state !== kt;
            }
            onReady(t) {
                this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
            }
            onChange() {
                this.removeProgressBar(), this.pause();
            }
            onSettle() {
                this.resume();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.resume() : this.pause();
            }
            onMouseEnter() {
                this.inHover = !0, this.pause();
            }
            onMouseLeave() {
                var t;
                this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
            }
            onTimerEnd() {
                const t = this.instance;
                "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
            }
            removeProgressBar() {
                this.progressBar && (this.progressBar.remove(), this.progressBar = null);
            }
            createProgressBar() {
                var t;
                if (!this.option("showProgress")) return null;
                this.removeProgressBar();
                const e = this.instance, i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
                let n = this.option("progressParentEl");
                if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
                const s = document.createElement("div");
                return P(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
            }
            set() {
                const t = this, e = t.instance;
                if (e.pages.length < 2) return;
                if (t.timer) return;
                const i = t.option("timeout");
                t.state = zt, P(e.container, "has-autoplay");
                let n = t.createProgressBar();
                n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout((() => {
                    t.timer = null, t.inHover || t.onTimerEnd();
                }), i), t.emit("set");
            }
            clear() {
                const t = this;
                t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
            }
            start() {
                const t = this;
                if (t.set(), t.state !== kt) {
                    if (t.option("pauseOnHover")) {
                        const e = t.instance.container;
                        e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
                    }
                    document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
                }
            }
            stop() {
                const t = this, e = t.state, i = t.instance.container;
                t.clear(), t.state = kt, i.removeEventListener("mouseenter", t.onMouseEnter, !1), 
                i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), 
                S(i, "has-autoplay"), e !== kt && t.emit("stop");
            }
            pause() {
                const t = this;
                t.state === zt && (t.state = Rt, t.clear(), t.emit(Rt));
            }
            resume() {
                const t = this, e = t.instance;
                if (e.isInfinite || e.page !== e.pages.length - 1) if (t.state !== zt) {
                    if (t.state === Rt && !t.inHover) {
                        const e = new Event("resume", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        t.emit("resume", e), e.defaultPrevented || t.set();
                    }
                } else t.set(); else t.stop();
            }
            toggle() {
                this.state === zt || this.state === Rt ? this.stop() : this.start();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), 
                e.on("Panzoom.touchMove", t.onChange);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), 
                e.off("Panzoom.touchMove", t.onChange), t.stop();
            }
        }
        Object.defineProperty(It, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                autoStart: !0,
                pauseOnHover: !0,
                progressParentEl: null,
                showProgress: !0,
                timeout: 3e3
            }
        });
        class Dt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onPrepare(t) {
                const e = t.carousel;
                if (!e) return;
                const i = t.container;
                i && (e.options.Autoplay = u({
                    autoStart: !1
                }, this.option("Autoplay") || {}, {
                    pauseOnHover: !1,
                    timeout: this.option("timeout"),
                    progressParentEl: () => this.option("progressParentEl") || null,
                    on: {
                        start: () => {
                            t.emit("startSlideshow");
                        },
                        set: e => {
                            var n;
                            i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== lt.Ready && e.pause();
                        },
                        stop: () => {
                            i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
                        },
                        resume: (e, i) => {
                            var n, s, o;
                            !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === lt.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
                        }
                    }
                }), e.attachPlugins({
                    Autoplay: It
                }), this.ref = e.plugins.Autoplay);
            }
            onReady(t) {
                const e = t.carousel, i = this.ref;
                i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
            }
            onDone(t, e) {
                const i = this.ref, n = t.carousel;
                if (!i || !n) return;
                const s = e.panzoom;
                s && s.on("startAnimation", (() => {
                    t.isCurrentSlide(e) && i.stop();
                })), t.isCurrentSlide(e) && i.resume();
            }
            onKeydown(t, e) {
                var i;
                const n = this.ref;
                n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), 
                e.off("keydown", t.onKeydown);
            }
        }
        Object.defineProperty(Dt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                key: " ",
                playOnStart: !1,
                progressParentEl: t => {
                    var e;
                    return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
                },
                timeout: 3e3
            }
        });
        const Ft = {
            classes: {
                container: "f-thumbs f-carousel__thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
                isResting: "is-resting",
                isSelected: "is-selected",
                isLoading: "is-loading",
                hasThumbs: "has-thumbs"
            },
            minCount: 2,
            parentEl: null,
            thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern"
        };
        var jt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
        }(jt || (jt = {}));
        const Bt = "isResting", Ht = "thumbWidth", Nt = "thumbHeight", _t = "thumbClipWidth";
        let $t = class extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "type", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "modern"
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "thumbWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbClipWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbExtraGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: jt.Init
                });
            }
            get isModern() {
                return "modern" === this.type;
            }
            onInitSlide(t, e) {
                const i = e.el ? e.el.dataset : void 0;
                i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[_t] = parseFloat(i[_t] || "") || e[_t] || 0, 
                e[Nt] = parseFloat(i.thumbHeight || "") || e[Nt] || 0), this.addSlide(e);
            }
            onInitSlides() {
                this.build();
            }
            onChange() {
                var t;
                if (!this.isModern) return;
                const e = this.container, i = this.instance, n = i.panzoom, s = this.carousel, a = s ? s.panzoom : null, r = i.page;
                if (n && s && a) {
                    if (n.isDragging) {
                        S(e, this.cn(Bt));
                        let n = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
                        n += i.getProgress(r) * (this[_t] + this.thumbGap);
                        let o = a.getBounds();
                        -1 * n > o.x.min && -1 * n < o.x.max && a.panTo({
                            x: -1 * n,
                            friction: .12
                        });
                    } else o(e, this.cn(Bt), n.isResting);
                    this.shiftModern();
                }
            }
            onRefresh() {
                this.updateProps();
                for (const t of this.instance.slides || []) this.resizeModernSlide(t);
                this.shiftModern();
            }
            isDisabled() {
                const t = this.option("minCount") || 0;
                if (t) {
                    const e = this.instance;
                    let i = 0;
                    for (const t of e.slides || []) t.thumbSrc && i++;
                    if (i < t) return !0;
                }
                const e = this.option("type");
                return [ "modern", "classic" ].indexOf(e) < 0;
            }
            getThumb(t) {
                const e = this.option("thumbTpl") || "";
                return {
                    html: this.instance.localize(e, [ [ "%i", t.index ], [ "%d", t.index + 1 ], [ "%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ] ])
                };
            }
            addSlide(t) {
                const e = this.carousel;
                e && e.addSlide(t.index, this.getThumb(t));
            }
            getSlides() {
                const t = [];
                for (const e of this.instance.slides || []) t.push(this.getThumb(e));
                return t;
            }
            resizeModernSlide(t) {
                this.isModern && (t[Ht] = t[_t] && t[Nt] ? Math.round(this[Nt] * (t[_t] / t[Nt])) : this[Ht]);
            }
            updateProps() {
                const t = this.container;
                if (!t) return;
                const e = e => parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
                this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[Ht] = e("width") || 40, 
                this[_t] = e("clip-width") || 40, this[Nt] = e("height") || 40;
            }
            build() {
                const t = this;
                if (t.state !== jt.Init) return;
                if (t.isDisabled()) return void t.emit("disabled");
                const e = t.instance, i = e.container, n = t.getSlides(), s = t.option("type");
                t.type = s;
                const o = t.option("parentEl"), a = t.cn("container"), r = t.cn("track");
                let l = null == o ? void 0 : o.querySelector("." + a);
                l || (l = document.createElement("div"), P(l, a), o ? o.appendChild(l) : i.after(l)), 
                P(l, `is-${s}`), P(i, t.cn("hasThumbs")), t.container = l, t.updateProps();
                let c = l.querySelector("." + r);
                c || (c = document.createElement("div"), P(c, t.cn("track")), l.appendChild(c)), 
                t.track = c;
                const h = u({}, {
                    track: c,
                    infinite: !1,
                    center: !0,
                    fill: "classic" === s,
                    dragFree: !0,
                    slidesPerPage: 1,
                    transition: !1,
                    preload: .25,
                    friction: .12,
                    Panzoom: {
                        maxVelocity: 0
                    },
                    Dots: !1,
                    Navigation: !1,
                    classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide"
                    }
                }, t.option("Carousel") || {}, {
                    Sync: {
                        target: e
                    },
                    slides: n
                }), d = new e.constructor(l, h);
                d.on("createSlide", ((e, i) => {
                    t.setProps(i.index), t.emit("createSlide", i, i.el);
                })), d.on("ready", (() => {
                    t.shiftModern(), t.emit("ready");
                })), d.on("refresh", (() => {
                    t.shiftModern();
                })), d.on("Panzoom.click", ((e, i, n) => {
                    t.onClick(n);
                })), t.carousel = d, t.state = jt.Ready;
            }
            onClick(t) {
                t.preventDefault(), t.stopPropagation();
                const e = this.instance, {pages: i, page: n} = e, s = t => {
                    if (t) {
                        const e = t.closest("[data-carousel-index]");
                        if (e) return [ parseInt(e.dataset.carouselIndex || "", 10) || 0, e ];
                    }
                    return [ -1, void 0 ];
                }, o = (t, e) => {
                    const i = document.elementFromPoint(t, e);
                    return i ? s(i) : [ -1, void 0 ];
                };
                let [a, r] = s(t.target);
                if (a > -1) return;
                const l = this[_t], c = t.clientX, h = t.clientY;
                let [d, u] = o(c - l, h), [p, f] = o(c + l, h);
                u && f ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - f.getBoundingClientRect().left) ? d : p, 
                a === n && (a = a === d ? p : d)) : u ? a = d : f && (a = p), a > -1 && i[a] && e.slideTo(a);
            }
            getShift(t) {
                var e;
                const i = this, {instance: n} = i, s = i.carousel;
                if (!n || !s) return 0;
                const o = i[Ht], a = i[_t], r = i.thumbGap, l = i.thumbExtraGap;
                if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;
                const c = .5 * (o - a), h = n.pages.length - 1;
                let d = n.getProgress(0), u = n.getProgress(h), p = n.getProgress(t, !1, !0), f = 0, g = c + l + r;
                const m = d < 0 && d > -1, v = u > 0 && u < 1;
                return 0 === t ? (f = g * Math.abs(d), v && 1 === d && (f -= g * Math.abs(u))) : t === h ? (f = g * Math.abs(u) * -1, 
                m && -1 === u && (f += g * Math.abs(d))) : m || v ? (f = -1 * g, f += g * Math.abs(d), 
                f += g * (1 - Math.abs(u))) : f = g * p, f;
            }
            setProps(e) {
                var i;
                const n = this;
                if (!n.isModern) return;
                const {instance: s} = n, o = n.carousel;
                if (s && o) {
                    const a = null === (i = o.slides[e]) || void 0 === i ? void 0 : i.el;
                    if (a && a.childNodes.length) {
                        let i = t(1 - Math.abs(s.getProgress(e))), o = t(n.getShift(e));
                        a.style.setProperty("--progress", i ? i + "" : ""), a.style.setProperty("--shift", o + "");
                    }
                }
            }
            shiftModern() {
                const t = this;
                if (!t.isModern) return;
                const {instance: e, track: i} = t, n = e.panzoom, s = t.carousel;
                if (!(e && i && n && s)) return;
                if (n.state === m.Init || n.state === m.Destroy) return;
                for (const i of e.slides) t.setProps(i.index);
                let o = (t[_t] + t.thumbGap) * (s.slides.length || 0);
                i.style.setProperty("--width", o + "");
            }
            cleanup() {
                const t = this;
                t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), 
                t.container = null, t.track && t.track.remove(), t.track = null, t.state = jt.Init, 
                S(t.instance.container, t.cn("hasThumbs"));
            }
            attach() {
                const t = this, e = t.instance;
                e.on("initSlide", t.onInitSlide), e.state === B.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), 
                e.on([ "change", "Panzoom.afterTransform" ], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off([ "change", "Panzoom.afterTransform" ], t.onChange), 
                e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
            }
        };
        Object.defineProperty($t, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ft
        });
        const Wt = Object.assign(Object.assign({}, Ft), {
            key: "t",
            showOnStart: !0,
            parentEl: null
        }), Xt = "is-masked", qt = "aria-hidden";
        class Yt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "hidden", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            get isEnabled() {
                const t = this.ref;
                return t && !t.isDisabled();
            }
            get isHidden() {
                return this.hidden;
            }
            onClick(t, e) {
                e.stopPropagation();
            }
            onCreateSlide(t, e) {
                var i, n, s;
                const o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "", a = e.el;
                if (a && o) {
                    let t = `for-${o}`;
                    [ "video", "youtube", "vimeo", "html5video" ].includes(o) && (t += " for-video"), 
                    P(a, t);
                }
            }
            onInit() {
                var t;
                const e = this, i = e.instance, n = i.carousel;
                if (e.ref || !n) return;
                const s = e.option("parentEl") || i.footer || i.container;
                if (!s) return;
                const o = u({}, e.options, {
                    parentEl: s,
                    classes: {
                        container: "f-thumbs fancybox__thumbs"
                    },
                    Carousel: {
                        Sync: {
                            friction: i.option("Carousel.friction") || 0
                        }
                    },
                    on: {
                        ready: t => {
                            const i = t.container;
                            i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, 
                            queueMicrotask((() => {
                                i.style.transition = "", e.show();
                            })));
                        }
                    }
                });
                o.Carousel = o.Carousel || {}, o.Carousel.on = u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
                    click: this.onClick,
                    createSlide: this.onCreateSlide
                }), n.options.Thumbs = o, n.attachPlugins({
                    Thumbs: $t
                }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = jt.Hidden, 
                e.hidden = !0);
            }
            onResize() {
                var t;
                const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
                e && (e.style.maxHeight = "");
            }
            onKeydown(t, e) {
                const i = this.option("key");
                i && i === e && this.toggle();
            }
            toggle() {
                const t = this.ref;
                if (t && !t.isDisabled()) return t.state === jt.Hidden ? (t.state = jt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
            }
            show() {
                const t = this.ref;
                if (!t || t.isDisabled()) return;
                const e = t.container;
                e && (this.refresh(), e.offsetHeight, e.removeAttribute(qt), e.classList.remove(Xt), 
                this.hidden = !1);
            }
            hide() {
                const t = this.ref, e = t && t.container;
                e && (this.refresh(), e.offsetHeight, e.classList.add(Xt), e.setAttribute(qt, "true")), 
                this.hidden = !0;
            }
            refresh() {
                const t = this.ref;
                if (!t || !t.state) return;
                const e = t.container, i = (null == e ? void 0 : e.firstChild) || null;
                e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
            }
            attach() {
                const t = this, e = t.instance;
                e.state === rt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                var t;
                const e = this, i = e.instance;
                i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), 
                null === (t = i.carousel) || void 0 === t || t.detachPlugins([ "Thumbs" ]), e.ref = null;
            }
        }
        Object.defineProperty(Yt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wt
        });
        const Vt = {
            panLeft: {
                icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
                change: {
                    panX: -100
                }
            },
            panRight: {
                icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
                change: {
                    panX: 100
                }
            },
            panUp: {
                icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
                change: {
                    panY: -100
                }
            },
            panDown: {
                icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
                change: {
                    panY: 100
                }
            },
            zoomIn: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
                action: "zoomIn"
            },
            zoomOut: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "zoomOut"
            },
            toggle1to1: {
                icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
                action: "toggleZoom"
            },
            toggleZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "toggleZoom"
            },
            iterateZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "iterateZoom"
            },
            rotateCCW: {
                icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
                action: "rotateCCW"
            },
            rotateCW: {
                icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
                action: "rotateCW"
            },
            flipX: {
                icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
                action: "flipX"
            },
            flipY: {
                icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
                action: "flipY"
            },
            fitX: {
                icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
                action: "fitX"
            },
            fitY: {
                icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
                action: "fitY"
            },
            reset: {
                icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
                action: "reset"
            },
            toggleFS: {
                icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
                action: "toggleFS"
            }
        };
        var Zt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
        }(Zt || (Zt = {}));
        const Ut = {
            absolute: "auto",
            display: {
                left: [ "infobar" ],
                middle: [],
                right: [ "iterateZoom", "slideshow", "fullscreen", "thumbs", "close" ]
            },
            enabled: "auto",
            items: {
                infobar: {
                    tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
                },
                download: {
                    tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
                },
                prev: {
                    tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
                },
                next: {
                    tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
                },
                slideshow: {
                    tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
                },
                fullscreen: {
                    tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
                },
                thumbs: {
                    tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
                },
                close: {
                    tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
                }
            },
            parentEl: null
        }, Gt = {
            tabindex: "-1",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        }, Kt = "has-toolbar", Jt = "fancybox__toolbar";
        class Qt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Zt.Init
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onReady(t) {
                var e;
                if (!t.carousel) return;
                let i = this.option("display"), n = this.option("absolute"), s = this.option("enabled");
                if ("auto" === s) {
                    const t = this.instance.carousel;
                    let e = 0;
                    if (t) for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
                    e || (s = !1);
                }
                s || (i = void 0);
                let o = 0;
                const a = {
                    left: [],
                    middle: [],
                    right: []
                };
                if (i) for (const t of [ "left", "middle", "right" ]) for (const n of i[t]) {
                    const i = this.createEl(n);
                    i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
                }
                let r = null;
                if (o && (r = this.createContainer()), r) {
                    for (const [t, e] of Object.entries(a)) {
                        const i = document.createElement("div");
                        P(i, Jt + "__column is-" + t);
                        for (const t of e) i.appendChild(t);
                        "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
                    }
                    !0 === n && P(r, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
                } else this.state = Zt.Disabled;
            }
            onClick(t) {
                var e, i;
                const n = this.instance, s = n.getSlide(), o = null == s ? void 0 : s.panzoom, a = t.target, r = a && E(a) ? a.dataset : null;
                if (!r) return;
                if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), 
                void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
                if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), 
                void this.instance.toggleFullscreen();
                if (void 0 !== r.fancyboxToggleSlideshow) {
                    t.preventDefault(), t.stopPropagation();
                    const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
                    let s = e.isActive;
                    return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
                }
                const l = r.panzoomAction, c = r.panzoomChange;
                if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
                    let t = {};
                    try {
                        t = JSON.parse(c);
                    } catch (t) {}
                    o && o.applyChange(t);
                } else l && o && o[l] && o[l]();
            }
            onChange() {
                this.onRefresh();
            }
            onRefresh() {
                if (this.instance.isClosing()) return;
                const t = this.container;
                if (!t) return;
                const e = this.instance.getSlide();
                if (!e || e.state !== lt.Ready) return;
                const i = e && !e.error && e.panzoom;
                for (const e of t.querySelectorAll("[data-panzoom-action]")) i ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                let n = i && i.canZoomIn(), s = i && i.canZoomOut();
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), 
                    e.setAttribute("tabindex", "-1"));
                    const t = e.querySelector("g");
                    t && (t.style.display = n ? "" : "none");
                }
            }
            onDone(t, e) {
                var i;
                null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", (() => {
                    this.instance.isCurrentSlide(e) && this.onRefresh();
                })), this.instance.isCurrentSlide(e) && this.onRefresh();
            }
            createContainer() {
                const t = this.instance.container;
                if (!t) return null;
                const e = this.option("parentEl") || t;
                let i = e.querySelector("." + Jt);
                return i || (i = document.createElement("div"), P(i, Jt), e.prepend(i)), i.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !0
                }), t && P(t, Kt), this.container = i, i;
            }
            createEl(t) {
                const e = this.instance, i = e.carousel;
                if (!i) return null;
                if ("toggleFS" === t) return null;
                if ("fullscreen" === t && !ot()) return null;
                let s = null;
                const o = i.slides.length || 0;
                let a = 0, r = 0;
                for (const t of i.slides) (t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
                if (o < 2 && [ "infobar", "prev", "next" ].includes(t)) return s;
                if (void 0 !== Vt[t] && !a) return null;
                if ("download" === t && !r) return null;
                if ("thumbs" === t) {
                    const t = e.plugins.Thumbs;
                    if (!t || !t.isEnabled) return null;
                }
                if ("slideshow" === t) if (!i.plugins.Autoplay || o < 2) return null;
                if (void 0 !== Vt[t]) {
                    const e = Vt[t];
                    s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), 
                    P(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), 
                    s.appendChild(n(this.instance.localize(e.icon)));
                } else {
                    const e = (this.option("items") || [])[t];
                    e && (s = n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", (t => {
                        t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
                    })));
                }
                const l = null == s ? void 0 : s.querySelector("svg");
                if (l) for (const [t, e] of Object.entries(Gt)) l.getAttribute(t) || l.setAttribute(t, String(e));
                return s;
            }
            removeContainer() {
                const t = this.container;
                t && t.remove(), this.container = null, this.state = Zt.Disabled;
                const e = this.instance.container;
                e && S(e, Kt);
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on([ "reveal", "Carousel.change" ], t.onChange), 
                t.onReady(t.instance);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off([ "reveal", "Carousel.change" ], t.onChange), 
                t.removeContainer();
            }
        }
        Object.defineProperty(Qt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ut
        });
        const te = {
            Hash: class extends _ {
                onReady() {
                    ht = !1;
                }
                onChange(t) {
                    ut && clearTimeout(ut);
                    const {hash: e} = pt(), {hash: i} = ft(), n = t.isOpeningSlide(t.getSlide());
                    n && (ct = i === e ? "" : i), e && e !== i && (ut = setTimeout((() => {
                        try {
                            if (t.state === rt.Ready) {
                                let t = "replaceState";
                                n && !dt && (t = "pushState", dt = !0), window.history[t]({}, document.title, window.location.pathname + window.location.search + e);
                            }
                        } catch (t) {}
                    }), 300));
                }
                onClose(t) {
                    if (ut && clearTimeout(ut), !ht && dt) return dt = !1, ht = !1, void window.history.back();
                    if (!ht) try {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
                    } catch (t) {}
                }
                attach() {
                    const t = this.instance;
                    t.on("ready", this.onReady), t.on([ "Carousel.ready", "Carousel.change" ], this.onChange), 
                    t.on("close", this.onClose);
                }
                detach() {
                    const t = this.instance;
                    t.off("ready", this.onReady), t.off([ "Carousel.ready", "Carousel.change" ], this.onChange), 
                    t.off("close", this.onClose);
                }
                static parseURL() {
                    return ft();
                }
                static startFromUrl() {
                    gt();
                }
                static destroy() {
                    window.removeEventListener("hashchange", vt, !1);
                }
            },
            Html: Lt,
            Images: wt,
            Slideshow: Dt,
            Thumbs: Yt,
            Toolbar: Qt
        }, ee = "with-fancybox", ie = "hide-scrollbar", ne = "--fancybox-scrollbar-compensate", se = "--fancybox-body-margin", oe = "aria-hidden", ae = "is-using-tab", re = "is-animated", le = "is-compact", ce = "is-loading", he = "is-opening", de = "has-caption", ue = "disabled", pe = "tabindex", fe = "download", ge = "href", me = "src", ve = t => "string" == typeof t, be = function() {
            var t = window.getSelection();
            return !!t && "Range" === t.type;
        };
        let ye, we = null, xe = null, Ee = 0, Se = 0, Pe = 0, Ce = 0;
        const Te = new Map;
        let Me = 0;
        class Oe extends g {
            get isIdle() {
                return this.idle;
            }
            get isCompact() {
                return this.option("compact");
            }
            constructor(t = [], e = {}, i = {}) {
                super(e), Object.defineProperty(this, "userSlides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "idle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "idleTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "ignoreFocusChange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "startedFs", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: rt.Init
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "caption", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "footer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "lastFocus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prevMouseMoveEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), ye || (ye = ot()), this.id = e.id || ++Me, Te.set(this.id, this), this.userSlides = t, 
                this.userPlugins = i, queueMicrotask((() => {
                    this.init();
                }));
            }
            init() {
                if (this.state === rt.Destroy) return;
                this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, Oe.Plugins), this.userPlugins)), 
                this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (() => {
                    if (!et) return;
                    const t = document, e = t.body, i = t.documentElement;
                    if (e.classList.contains(ie)) return;
                    let n = window.innerWidth - i.getBoundingClientRect().width;
                    const s = parseFloat(window.getComputedStyle(e).marginRight);
                    n < 0 && (n = 0), i.style.setProperty(ne, `${n}px`), s && e.style.setProperty(se, `${s}px`), 
                    e.classList.add(ie);
                })(), this.initLayout(), this.scale();
                const t = () => {
                    this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), 
                    this.emit("ready"), setTimeout((() => {
                        this.container && this.container.setAttribute(oe, "false");
                    }), 16);
                };
                this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then((() => {
                    this.startedFs = !0, t();
                })).catch((() => t())) : t();
            }
            initLayout() {
                var t, e;
                const i = this.option("parentEl") || document.body, s = n(this.localize(this.option("tpl.main") || ""));
                if (s) {
                    if (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), 
                    s.classList.toggle(le, this.isCompact), P(s, this.option("mainClass") || ""), P(s, he), 
                    this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), 
                    P(document.documentElement, ee), we && xe || (we = document.createElement("span"), 
                    P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), 
                    we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore(we, s), 
                    null === (e = s.parentElement) || void 0 === e || e.append(xe)), s.addEventListener("mousedown", (t => {
                        Ee = t.pageX, Se = t.pageY, S(s, ae);
                    })), this.option("closeExisting")) for (const t of Te.values()) t.id !== this.id && t.close(); else this.option("animated") && (P(s, re), 
                    setTimeout((() => {
                        this.isClosing() || S(s, re);
                    }), 350));
                    this.emit("initLayout");
                }
            }
            initCarousel(t) {
                const i = this.container;
                if (!i) return;
                const n = i.querySelector(".fancybox__carousel");
                if (!n) return;
                const s = this.carousel = new Q(n, u({}, {
                    slides: t,
                    transition: "fade",
                    Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y"
                    },
                    Dots: !1,
                    Navigation: {
                        classes: {
                            container: "fancybox__nav",
                            button: "f-button",
                            isNext: "is-next",
                            isPrev: "is-prev"
                        }
                    },
                    initialPage: this.option("startIndex"),
                    l10n: this.option("l10n")
                }, this.option("Carousel") || {}));
                s.on("*", ((t, e, ...i) => {
                    this.emit(`Carousel.${e}`, t, ...i);
                })), s.on([ "ready", "change" ], (() => {
                    this.manageCaption();
                })), this.on("Carousel.removeSlide", ((t, e, i) => {
                    this.clearContent(i), i.state = void 0;
                })), s.on("Panzoom.touchStart", (() => {
                    var t, e;
                    this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus());
                })), s.on("settle", (() => {
                    this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
                })), this.option("dragToClose") && (s.on("Panzoom.afterTransform", ((t, i) => {
                    const n = this.getSlide();
                    if (n && e(n.el)) return;
                    const s = this.container;
                    if (s) {
                        const t = Math.abs(i.current.f), e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
                        s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
                    }
                })), s.on("Panzoom.touchEnd", ((t, i, n) => {
                    var s;
                    const o = this.getSlide();
                    if (o && e(o.el)) return;
                    if (i.isMobile && document.activeElement && -1 !== [ "TEXTAREA", "INPUT" ].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
                    const a = Math.abs(i.dragOffset.y);
                    "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), 
                    this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
                }))), s.on("change", (t => {
                    var e;
                    let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
                    if (i) {
                        const e = new CustomEvent("slideTo", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t.page
                        });
                        i.dispatchEvent(e);
                    }
                })), s.on([ "refresh", "change" ], (t => {
                    const e = this.container;
                    if (!e) return;
                    for (const i of e.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = t.page + 1;
                    for (const i of e.querySelectorAll("[data-fancybox-count]")) i.innerHTML = t.pages.length;
                    if (!t.isInfinite) {
                        for (const i of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (i.removeAttribute(ue), 
                        i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
                        for (const i of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (i.removeAttribute(ue), 
                        i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
                    }
                    const i = this.getSlide();
                    if (!i) return;
                    let n = i.downloadSrc || "";
                    n || "image" !== i.type || i.error || !ve(i[me]) || (n = i[me]);
                    for (const t of e.querySelectorAll("[data-fancybox-download]")) {
                        const e = i.downloadFilename;
                        n ? (t.removeAttribute(ue), t.removeAttribute(pe), t.setAttribute(ge, n), t.setAttribute(fe, e || n), 
                        t.setAttribute("target", "_blank")) : (t.setAttribute(ue, ""), t.setAttribute(pe, "-1"), 
                        t.removeAttribute(ge), t.removeAttribute(fe));
                    }
                })), this.emit("initCarousel");
            }
            attachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                e.addEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), e.addEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), document.addEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), 
                t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
            }
            detachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                document.removeEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), e.removeEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), 
                document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
            }
            scale() {
                const t = this.container;
                if (!t) return;
                const e = window.visualViewport, i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
                let n = "", s = "", o = "";
                if (e && i > 1) {
                    let t = `${e.offsetLeft}px`, a = `${e.offsetTop}px`;
                    n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
                }
                t.style.transform = o, t.style.width = n, t.style.height = s;
            }
            onClick(t) {
                var e;
                const {container: i, isCompact: n} = this;
                if (!i || this.isClosing()) return;
                !n && this.option("idle") && this.resetIdle();
                const s = t.composedPath()[0];
                if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]")) return t.preventDefault(), 
                void this.close(t);
                if (s.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
                if (s.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
                if ("click" === t.type && 0 === t.detail) return;
                if (Math.abs(t.pageX - Ee) > 30 || Math.abs(t.pageY - Se) > 30) return;
                const o = document.activeElement;
                if (be() && o && i.contains(o)) return;
                if (n && "image" === (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), 
                this.clickTimer = null) : this.clickTimer = setTimeout((() => {
                    this.toggleIdle(), this.clickTimer = null;
                }), 350));
                if (this.emit("click", t), t.defaultPrevented) return;
                let a = !1;
                if (s.closest(".fancybox__content")) {
                    if (o) {
                        if (o.closest("[contenteditable]")) return;
                        s.matches(nt) || o.blur();
                    }
                    if (be()) return;
                    a = this.option("contentClick");
                } else s.closest(".fancybox__carousel") && !s.matches(nt) && (a = this.option("backdropClick"));
                "close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), 
                this.next()) : "prev" === a && (t.preventDefault(), this.prev());
            }
            onWheel(t) {
                const e = t.target;
                let n = this.option("wheel", t);
                e.closest(".fancybox__thumbs") && (n = "slide");
                const s = "slide" === n, o = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                })), a = Math.max(-1, Math.min(1, o)), r = Date.now();
                this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), 
                t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && (i(e) || (t.preventDefault(), 
                this[a > 0 ? "prev" : "next"]()))));
            }
            onScroll() {
                window.scrollTo(Pe, Ce);
            }
            onKeydown(t) {
                if (!this.isTopmost()) return;
                this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
                const e = t.key, i = this.option("keyboard");
                if (!i) return;
                const n = t.composedPath()[0], s = document.activeElement && document.activeElement.classList, o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
                if ("Escape" !== e && !o && E(n)) if (n.isContentEditable || -1 !== [ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(n.nodeName)) return;
                if ("Tab" === t.key ? P(this.container, ae) : S(this.container, ae), t.ctrlKey || t.altKey || t.shiftKey) return;
                this.emit("keydown", e, t);
                const a = i[e];
                a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
            }
            onResize() {
                const t = this.container;
                if (!t) return;
                const e = this.isCompact;
                t.classList.toggle(le, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), 
                this.scale(), this.emit("resize");
            }
            onFocus(t) {
                this.isTopmost() && this.checkFocus(t);
            }
            onMousemove(t) {
                this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
            }
            manageCloseBtn(t) {
                const e = this.optionFor(t, "closeButton") || !1;
                if ("auto" === e) {
                    const t = this.plugins.Toolbar;
                    if (t && t.state === Zt.Ready) return;
                }
                if (!e) return;
                if (!t.contentEl || t.closeBtnEl) return;
                const i = this.option("tpl.closeButton");
                if (i) {
                    const e = n(this.localize(i));
                    t.closeBtnEl = t.contentEl.appendChild(e), t.el && P(t.el, "has-close-btn");
                }
            }
            manageCaption(t = void 0) {
                var e, i;
                const n = "fancybox__caption", s = this.container;
                if (!s) return;
                S(s, de);
                const o = this.isCompact || this.option("commonCaption"), a = !o;
                if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), 
                this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), 
                t.captionEl = void 0, S(t.el, de), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
                if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
                const r = t.el;
                let l = this.optionFor(t, "caption", "");
                if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", (() => {
                    this.caption && (this.caption.innerHTML = "");
                })));
                let c = null;
                if (a) {
                    if (c = t.captionEl || null, r && !c) {
                        const e = n + `_${this.id}_${t.index}`;
                        c = document.createElement("div"), P(c, n), c.setAttribute("id", e), t.captionEl = r.appendChild(c), 
                        P(r, de), r.setAttribute("aria-labelledby", e);
                    }
                } else {
                    if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
                        c = document.createElement("div"), c.dataset.fancyboxCaption = "", P(c, n);
                        (this.footer || s).prepend(c);
                    }
                    P(s, de), this.caption = c;
                }
                c && (c.innerHTML = "", ve(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
            }
            checkFocus(t) {
                this.focus(t);
            }
            focus(t) {
                var e;
                if (this.ignoreFocusChange) return;
                const i = document.activeElement || null, n = (null == t ? void 0 : t.target) || null, s = this.container, o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
                if (!s || !o) return;
                if (!t && i && s.contains(i)) return;
                const a = this.getSlide(), r = a && a.state === lt.Ready ? a.el : null;
                if (!r || r.contains(i) || s === i) return;
                t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
                const l = Array.from(s.querySelectorAll(nt));
                let c = [], h = null;
                for (let t of l) {
                    const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'), i = r && r.contains(t), n = !o.contains(t);
                    if (t === s || (i || n) && !e) {
                        c.push(t);
                        const e = t.dataset.origTabindex;
                        void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), 
                        !t.hasAttribute("autoFocus") && h || (h = t);
                    } else {
                        const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
                        e && (t.dataset.origTabindex = e), t.tabIndex = -1;
                    }
                }
                let d = null;
                t ? (!n || c.indexOf(n) < 0) && (d = h || s, c.length && (i === xe ? d = c[0] : this.lastFocus !== s && i !== we || (d = c[c.length - 1]))) : d = a && "image" === a.type ? s : h || s, 
                d && st(d), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
            }
            next() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slideNext();
            }
            prev() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slidePrev();
            }
            jumpTo(...t) {
                this.carousel && this.carousel.slideTo(...t);
            }
            isTopmost() {
                var t;
                return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
            }
            animate(t = null, e = "", i) {
                if (!t || !e) return void (i && i());
                this.stop(t);
                const n = s => {
                    s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), 
                    delete t.dataset.animationName, i && i(), S(t, e));
                };
                t.dataset.animationName = e, t.addEventListener("animationend", n), P(t, e);
            }
            stop(t) {
                t && t.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !1,
                    cancelable: !0,
                    currentTarget: t
                }));
            }
            setContent(t, e = "", i = !0) {
                if (this.isClosing()) return;
                const s = t.el;
                if (!s) return;
                let o = null;
                if (E(e) ? o = e : (o = n(e + ""), E(o) || (o = document.createElement("div"), o.innerHTML = e + "")), 
                [ "img", "picture", "iframe", "video", "audio" ].includes(o.nodeName.toLowerCase())) {
                    const t = document.createElement("div");
                    t.appendChild(o), o = t;
                }
                E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && E(o) ? (P(o, "fancybox__content"), 
                t.id && o.setAttribute("id", t.id), s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), 
                s.prepend(o), "none" === o.style.display && (o.style.display = ""), "none" === getComputedStyle(o).getPropertyValue("display") && (o.style.display = t.display || this.option("defaultDisplay") || "flex"), 
                t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            revealContent(t, e) {
                const i = t.el, n = t.contentEl;
                i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = lt.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, (() => {
                    this.done(t);
                })) : this.done(t));
            }
            done(t) {
                this.isClosing() || (t.state = lt.Ready, this.emit("done", t), P(t.el, "is-done"), 
                this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask((() => {
                    var e;
                    null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && this.focus();
                })), this.isOpeningSlide(t) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
            }
            isCurrentSlide(t) {
                const e = this.getSlide();
                return !(!t || !e) && e.index === t.index;
            }
            isOpeningSlide(t) {
                var e, i;
                return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
            }
            showLoading(t) {
                t.state = lt.Loading;
                const e = t.el;
                if (!e) return;
                P(e, ce), this.emit("loading", t), t.spinnerEl || setTimeout((() => {
                    if (!this.isClosing() && !t.spinnerEl && t.state === lt.Loading) {
                        let i = n(x);
                        P(i, "fancybox-spinner"), t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
                    }
                }), 250);
            }
            hideLoading(t) {
                const e = t.el;
                if (!e) return;
                const i = t.spinnerEl;
                this.isClosing() ? null == i || i.remove() : (S(e, ce), i && this.animate(i, "f-fadeOut", (() => {
                    i.remove();
                })), t.state === lt.Loading && (this.emit("loaded", t), t.state = lt.Ready));
            }
            setError(t, e) {
                if (this.isClosing()) return;
                const i = new Event("error", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("error", i, t), i.defaultPrevented) return;
                t.error = e, this.hideLoading(t), this.clearContent(t);
                const n = document.createElement("div");
                n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), 
                this.setContent(t, n);
            }
            clearContent(t) {
                if (void 0 === t.state) return;
                this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
                const e = t.el;
                e && (S(e, "has-error"), S(e, "has-unknown"), S(e, `has-${t.type || "unknown"}`)), 
                t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), 
                t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
            }
            getSlide() {
                var t;
                const e = this.carousel;
                return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
            }
            close(t, e) {
                if (this.isClosing()) return;
                const i = new Event("shouldClose", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
                t && t.cancelable && (t.preventDefault(), t.stopPropagation());
                const n = () => {
                    this.proceedClose(t, e);
                };
                this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then((() => n())) : n();
            }
            clearIdle() {
                this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
            }
            setIdle(t = !1) {
                const e = () => {
                    this.clearIdle(), this.idle = !0, P(this.container, "is-idle"), this.emit("setIdle");
                };
                if (this.clearIdle(), !this.isClosing()) if (t) e(); else {
                    const t = this.option("idle");
                    t && (this.idleTimer = setTimeout(e, t));
                }
            }
            endIdle() {
                this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, S(this.container, "is-idle"), 
                this.emit("endIdle"));
            }
            resetIdle() {
                this.endIdle(), this.setIdle();
            }
            toggleIdle() {
                this.idle ? this.endIdle() : this.setIdle(!0);
            }
            toggleFullscreen() {
                ye && (ye.isFullscreen() ? ye.exit() : ye.request().then((() => {
                    this.startedFs = !0;
                })));
            }
            isClosing() {
                return [ rt.Closing, rt.CustomClosing, rt.Destroy ].includes(this.state);
            }
            proceedClose(t, e) {
                var i, n;
                this.state = rt.Closing, this.clearIdle(), this.detachEvents();
                const s = this.container, o = this.carousel, a = this.getSlide(), r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
                if (r && (tt(r) ? st(r) : r.focus()), s && (S(s, he), P(s, "is-closing"), s.setAttribute(oe, "true"), 
                this.option("animated") && P(s, re), s.style.pointerEvents = "none"), o) {
                    o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
                    for (const t of o.slides) {
                        t.state = lt.Closing, this.hideLoading(t);
                        const e = t.contentEl;
                        e && this.stop(e);
                        const i = null == t ? void 0 : t.panzoom;
                        i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
                    }
                }
                Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), 
                this.emit("close", t), this.state !== rt.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), 
                e && a ? (this.animate(a.contentEl, e, (() => {
                    o && o.emit("removeSlide", a);
                })), setTimeout((() => {
                    this.destroy();
                }), 500)) : this.destroy()) : setTimeout((() => {
                    this.destroy();
                }), 500);
            }
            destroy() {
                var t;
                if (this.state === rt.Destroy) return;
                window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
                const e = this.container;
                e && e.remove(), Te.delete(this.id);
                const i = Oe.getInstance();
                i ? i.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), 
                S(document.documentElement, ee), (() => {
                    if (!et) return;
                    const t = document, e = t.body;
                    e.classList.remove(ie), e.style.setProperty(se, ""), t.documentElement.style.setProperty(ne, "");
                })(), this.emit("destroy"));
            }
            static bind(t, e, i) {
                if (!et) return;
                let n, s = "", o = {};
                if (void 0 === t ? n = document.body : ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : (n = t, 
                ve(e) && (s = e), "object" == typeof i && (o = i || {})), !n || !E(n)) return;
                s = s || "[data-fancybox]";
                const a = Oe.openers.get(n) || new Map;
                a.set(s, o), Oe.openers.set(n, a), 1 === a.size && n.addEventListener("click", Oe.fromEvent);
            }
            static unbind(t, e) {
                let i, n = "";
                if (ve(t) ? (i = document.body, n = t) : (i = t, ve(e) && (n = e)), !i) return;
                const s = Oe.openers.get(i);
                s && n && s.delete(n), n && s || (Oe.openers.delete(i), i.removeEventListener("click", Oe.fromEvent));
            }
            static destroy() {
                let t;
                for (;t = Oe.getInstance(); ) t.destroy();
                for (const t of Oe.openers.keys()) t.removeEventListener("click", Oe.fromEvent);
                Oe.openers = new Map;
            }
            static fromEvent(t) {
                if (t.defaultPrevented) return;
                if (t.button && 0 !== t.button) return;
                if (t.ctrlKey || t.metaKey || t.shiftKey) return;
                let e = t.composedPath()[0];
                const i = e.closest("[data-fancybox-trigger]");
                if (i) {
                    const t = i.dataset.fancyboxTrigger || "", n = document.querySelectorAll(`[data-fancybox="${t}"]`), s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
                    e = n[s] || e;
                }
                if (!(e && e instanceof Element)) return;
                let n, s, o, a;
                if ([ ...Oe.openers ].reverse().find((([t, i]) => !(!t.contains(e) || ![ ...i ].reverse().find((([i, r]) => {
                    let l = e.closest(i);
                    return !!l && (n = t, s = i, o = l, a = r, !0);
                }))))), !n || !s || !o) return;
                a = a || {}, t.preventDefault(), e = o;
                let r = [], l = u({}, at, a);
                l.event = t, l.triggerEl = e, l.delegate = i;
                const c = l.groupAll, h = l.groupAttr, d = h && e ? e.getAttribute(`${h}`) : "";
                if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter((t => t.getAttribute(`${h}`) === d)) : [ e ]), 
                !r.length) return;
                const p = Oe.getInstance();
                return p && p.options.triggerEl && r.indexOf(p.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), 
                Oe.fromNodes(r, l));
            }
            static fromSelector(t, e, i) {
                let n = null, s = "", o = {};
                if (ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : t instanceof HTMLElement && ve(e) && (n = t, 
                s = e, "object" == typeof i && (o = i || {})), !n || !s) return !1;
                const a = Oe.openers.get(n);
                return !!a && (o = u({}, a.get(s) || {}, o), !!o && Oe.fromNodes(Array.from(n.querySelectorAll(s)), o));
            }
            static fromNodes(t, e) {
                e = u({}, at, e || {});
                const i = [];
                for (const n of t) {
                    const t = n.dataset || {}, s = t[me] || n.getAttribute(ge) || n.getAttribute("currentSrc") || n.getAttribute(me) || void 0;
                    let o;
                    const a = e.delegate;
                    let r;
                    a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), 
                    o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), 
                    o && (r = o.currentSrc || o[me] || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset[me] || void 0));
                    const l = {
                        src: s,
                        triggerEl: n,
                        thumbEl: o,
                        thumbElSrc: r,
                        thumbSrc: r
                    };
                    for (const e in t) {
                        let i = t[e] + "";
                        i = "false" !== i && ("true" === i || i), l[e] = i;
                    }
                    i.push(l);
                }
                return new Oe(i, e);
            }
            static getInstance(t) {
                if (t) return Te.get(t);
                return Array.from(Te.values()).reverse().find((t => !t.isClosing() && t)) || null;
            }
            static getSlide() {
                var t;
                return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
            }
            static show(t = [], e = {}) {
                return new Oe(t, e);
            }
            static next() {
                const t = Oe.getInstance();
                t && t.next();
            }
            static prev() {
                const t = Oe.getInstance();
                t && t.prev();
            }
            static close(t = !0, ...e) {
                if (t) for (const t of Te.values()) t.close(...e); else {
                    const t = Oe.getInstance();
                    t && t.close(...e);
                }
            }
        }
        Object.defineProperty(Oe, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.36"
        }), Object.defineProperty(Oe, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: at
        }), Object.defineProperty(Oe, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te
        }), Object.defineProperty(Oe, "openers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        });
        function initFancybox() {
            Oe.bind("[data-fancybox]", {
                contentClick: "iterateZoom",
                Images: {
                    Panzoom: {
                        maxScale: 2
                    }
                }
            });
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
        const ua = global_window.navigator && global_window.navigator.userAgent || "", environment_ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = navigator.userAgentData && navigator.userAgentData.mobile || global_window.navigator && global_window.navigator.maxTouchPoints || "ontouchstart" in global_window, iphone = /iphone/i.test(ua);
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
            if (environment_ie) {
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
        const inputmask_date_extensions_$ = lib_inputmask.dependencyLib;
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
                        inputmask_date_extensions_$(input).trigger("setvalue");
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
                    const maxFilesAllowed = el.dataset.maxFilesAllowed || 5;
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
        initFancybox();
        initInputMask();
        initUploadPhotoInput();
        initPopupSimple();
        recentVehiclesSlider();
        testimonialsSlider();
        lastArticlesSlider();
        formValidate();
        playVideoOnClickPlayBtn();
        removeVideoCoverOnFullscreen();
        setFontSizeForTestimonials();
        hoverTooltipOnStatesMap();
    })();
})();