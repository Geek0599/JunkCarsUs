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
    function formValidate() {
        const validateForms = document.querySelectorAll("[data-validate]");
        if (validateForms.length) validateForms.forEach((form => {
            const inputs = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
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
                    input.addEventListener("input", (e => formatInput(input)));
                    input.addEventListener("change", (() => setTimeout((() => {
                        checkInput({
                            input,
                            form
                        });
                    }), 0)));
                    input.addEventListener("blur", (() => {
                        setTimeout((() => {
                            if (input.value !== "") checkInput({
                                input,
                                form
                            });
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
            for (const input of inputs) if (await checkInput({
                input,
                form
            })) {
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
        async function checkInput({input, form, isTextNotice = false}) {
            const value = input.value.trim();
            let isError = false;
            if (input.required || value !== "") {
                if (value === "") {
                    isError = true;
                    showTextNotice({
                        input,
                        text: "This field is required",
                        isTextNotice
                    });
                    return isError;
                }
                if (input.hasAttribute("data-number-format")) {
                    const isValidDecimal = /^(\d+([.,]\d+)?)?$/.test(value);
                    if (!isValidDecimal) {
                        isError = true;
                        showTextNotice({
                            input,
                            text: "Only numbers are allowed",
                            isTextNotice
                        });
                        return isError;
                    }
                }
                if (input.hasAttribute("data-number-float-format")) {
                    const value = input.value;
                    const isValidDecimal = /^\d*([.,]\d*)?$/.test(value);
                    if (!isValidDecimal) {
                        isError = true;
                        showTextNotice({
                            input,
                            text: "Only numbers, a single dot or comma are allowed",
                            isTextNotice
                        });
                        return isError;
                    }
                }
                if (input.hasAttribute("data-text-format")) if (!/^[a-zA-Z\s]+$/.test(value)) {
                    isError = true;
                    showTextNotice({
                        input,
                        text: `Only ${/[а-яА-Я]/.test(value) ? "Latin" : ""} letters are allowed`,
                        isTextNotice
                    });
                    return isError;
                }
                if (input.type === "email") if (value !== "" && !isEmailValid(input)) {
                    isError = true;
                    showTextNotice({
                        input,
                        text: "Your email address must be in the format of name@domain.com",
                        isTextNotice
                    });
                    return isError;
                }
                const minLength = input.hasAttribute("data-minlength") ? Number(input.dataset.minlength) : null;
                const maxLength = input.hasAttribute("data-maxlength") ? Number(input.dataset.maxlength) : null;
                if (minLength !== null && value.length < minLength) {
                    isError = true;
                    if (input.id == "year") showTextNotice({
                        input,
                        text: "Please enter the correct year",
                        isTextNotice
                    }); else showTextNotice({
                        input,
                        text: `Please enter at least ${minLength} characters`,
                        isTextNotice
                    });
                    return isError;
                }
                if (maxLength !== null && value.length > maxLength) {
                    isError = true;
                    showTextNotice({
                        input,
                        text: `Please enter less than ${minLength} characters`,
                        isTextNotice
                    });
                    return isError;
                }
                const minValue = input.hasAttribute("data-min-value") ? Number(input.dataset.minValue) : null;
                const maxValue = input.hasAttribute("data-max-value") ? Number(input.dataset.maxValue) : null;
                if (minValue !== null && Number(value) < minValue) {
                    isError = true;
                    showTextNotice({
                        input,
                        text: `Please enter a value greater than or equal to ${minValue}`,
                        isTextNotice
                    });
                    return isError;
                }
                if (maxValue !== null && Number(value) > maxValue) {
                    isError = true;
                    showTextNotice({
                        input,
                        text: `Please enter a value less than or equal to ${maxValue}`,
                        isTextNotice
                    });
                    return isError;
                }
                if (input.inputmask) {
                    const status = !input.inputmask.isComplete();
                    if (status && value !== "") {
                        isError = true;
                        showTextNotice({
                            input,
                            text: "Please enter full phone number",
                            isTextNotice
                        });
                        return isError;
                    }
                }
                if (input.required || value !== "") if (isError) addError(input); else removeError(input);
            } else if (value === "") removeStatus(input); else removeError(input);
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
        function addError(input) {
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
        function showTextNotice({input, text, isTextNotice = false}) {
            const isShowNotice = isTextNotice || input.closest("[data-validate]")?.hasAttribute("data-validate-notice");
            let notice = input.parentElement.querySelector(".form__item-notice");
            if (isShowNotice) if (notice && notice.textContent !== text) notice.textContent = text; else if (!notice) {
                notice = document.createElement("label");
                notice.classList.add("form__item-notice");
                notice.setAttribute("for", input.id);
                notice.textContent = text;
                input.insertAdjacentElement("afterend", notice);
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
    formValidate();
})();