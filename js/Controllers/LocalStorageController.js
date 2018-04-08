class LocalStorageController {

    verifySupport() {
        try {
            if(window.sessionStorage){
                EnableHandler.setElementEnabled("#btnRelatorio");
                VisibilityHandler.setElementHidden("#msgErro");
            }
        } catch(e) {
            EnableHandler.setElementDisabled("#btnRelatorio");
            VisibilityHandler.setElementVisible("#msgErro");
            let text = "Seu navegador não possui suporte ao \"LocalStorage\" ou o suporte está desativado." +
                " Ative o \"LocalStorage\" para prosseguir!";
            ContentTextHandler.setText(".msgErroContent", text);
        }
    }

    salvar(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (e) {
            alert("Erro ao salvar");
        }
    }

    recuperar(key) {
        return window.localStorage.getItem(key);
    }

}