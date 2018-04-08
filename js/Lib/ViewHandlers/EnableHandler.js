class EnableHandler {

    static setElementDisabled(id) {
        document.querySelector(id).disabled = true;
    }

    static setElementEnabled(id) {
        document.querySelector(id).disabled = false;
    }

}