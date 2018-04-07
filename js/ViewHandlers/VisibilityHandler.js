class VisibilityHandler {

    static setElementVisible(id) {
        document.querySelector(id).className = "elementVisible";
    }

    static setElementHidden(id) {
        document.querySelector(id).style.display = "none";
    }

}