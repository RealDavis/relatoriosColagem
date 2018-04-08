class RelatorioController {

    static index() {
        let inputhandler = new InputHandler();
        let filter = new FilterData();

        let produto = filter.filterString(inputhandler.getInputValue("#produto"));
        let slo = inputhandler.getInputValue("#slo");
        let observacoes = filter.filterString(inputhandler.getInputValue("#campoObservacoes"));

        let quantidades = [];
        quantidades.push(inputhandler.getInputValue("#quantidade01"));
        quantidades.push(inputhandler.getInputValue("#quantidade02"));
        quantidades.push(inputhandler.getInputValue("#quantidade03"));
        quantidades.push(inputhandler.getInputValue("#quantidade04"));
        quantidades = filter.filterArray(quantidades);

        let dto = new RelatorioDTO(produto, slo, quantidades, observacoes);

        let validator = new RelatorioValidator();
        let resultado =  validator.validar(dto);

        if(resultado.size > 0) {
            let errorText = "";
            for (let value of resultado.values()) {
                errorText += value + "<br>";
            }

            ContentTextHandler.setText("#msgErroContent", errorText);
            VisibilityHandler.setElementVisible("#msgErro");
            return false;
        }

        let dao = new RelatorioDAO();
        dao.salvar(dto.toJSON());

        let form = document.querySelector("#formulario").reset();
        VisibilityHandler.setElementHidden("#msgErro");

        let printReport = new PrintReportController();
        printReport.index();

        return false;
    }

}