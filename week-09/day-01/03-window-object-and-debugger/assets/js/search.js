export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    let result;
    function getChildId(el) {
        if (el.id === id) {
            result = el;
            return;
        }

        for (let i = 0; i < el.children.length; i++) {
            getChildId(el.children[i]);
        }
    }
    getChildId(window.document.body);
    return result;
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    let result;
    function getChildTag(el) {
        if (el.tagName === tag) {
            result = el;
            return;
        }

        for (let i = 0; i < el.children.length; i++) {
            getChildTag(el.children[i]);
        }
    }
    getChildTag(window.document.body);
    return result;
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    let result;
    function getChildClass(el) {
        if (el.classList.contains(cls)) {
            result = el;
            return;
        }

        for (let i = 0; i < el.children.length; i++) {
            getChildClass(el.children[i]);
        }
    }
    getChildClass(window.document.body);
    return result;
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    let result = [];
    function getChildrenOfTag(el) {
        if (el.tagName === tag) {
            result.push(el);
        }

        for (let i = 0; i < el.children.length; i++) {
            getChildrenOfTag(el.children[i]);
        }
    }
    getChildrenOfTag(window.document.body);
    return result;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    let result = [];
    function getChildrenOfClass(el) {
        if (el.classList.contains(cls)) {
            result.push(el);
        }

        for (let i = 0; i < el.children.length; i++) {
            getChildrenOfClass(el.children[i]);
        }
    }
    getChildrenOfClass(window.document.body);
    return result;
}