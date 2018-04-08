class VisibilityHandler {

    static setElementVisible(id) {
        document.querySelector(id).style.display = "block";
    }

    static setElementHidden(id) {
        document.querySelector(id).style.display = "none";
    }

}