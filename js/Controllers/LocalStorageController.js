class LocalStorageController {

    verifySupport() {
        try {
            if(window.localStorage){
                EnableHandler.setElementEnabled("#btnRelatorio");
                VisibilityHandler.setElementHidden("#msgErro");
            }
        } catch(e) {
            EnableHandler.setElementDisabled("#btnRelatorio");
            VisibilityHandler.setElementVisible("#msgErro");
            let text = "Seu navegador não possui suporte ao \"LocalStorage\" ou esta funçao está desativada." +
                " Ative o \"LocalStorage\" para prosseguir!";
            ContentTextHandler.setText(".msgErroContent", text);
        }
    }


}