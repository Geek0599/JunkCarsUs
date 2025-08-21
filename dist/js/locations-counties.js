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
    function stretchSpollerListMapSubmenu() {
        const container = document.querySelector("[data-map-list]");
        if (container) {
            const titleSpollers = container.querySelectorAll("[data-spoller]");
            titleSpollers.length && titleSpollers.forEach((title => {
                const span = document.createElement("span");
                span.textContent = title.textContent;
                title.innerHTML = "";
                title.appendChild(span);
            }));
            let activeSpollerBody = null;
            window.addEventListener("spoller-action", (e => {
                const title = e.detail.spoller;
                if (title && title.classList.contains("_spoller-active")) {
                    const spollerBody = title.nextElementSibling;
                    spollerBody.style.width = `${container.offsetWidth}px`;
                    const left = getLeftOffset(title, container);
                    spollerBody.style.left = `-${left}px`;
                    activeSpollerBody = title;
                    spollerBody.height = spollerBody.clientHeight + "px";
                } else activeSpollerBody = null;
            }));
            window.addEventListener("resize", (e => {
                if (activeSpollerBody) {
                    activeSpollerBody.nextElementSibling.style.width = `${container.offsetWidth}px`;
                    const left = getLeftOffset(activeSpollerBody, container);
                    activeSpollerBody.nextElementSibling.style.left = `-${left}px`;
                }
            }));
            function getLeftOffset(element, relativeTo) {
                const relativeToOffset = relativeTo.offsetLeft;
                const elementOffset = element.offsetLeft;
                const offset = elementOffset - relativeToOffset;
                return offset;
            }
        }
    }
    function formValidate() {
        const validateForms = document.querySelectorAll("[data-validate]");
        if (validateForms.length) validateForms.forEach((form => {
            const btnSubmit = form.querySelector('button[type="submit"]');
            const inputs = Array.from(form.querySelectorAll("input:not([data-no-required]), select, textarea"));
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
            }
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
            const errorNotice = input.parentElement.querySelector(".form__item-notice");
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
    spollers();
    stretchSpollerListMapSubmenu();
    hoverTooltipOnStatesMap();
    formValidate();
})();