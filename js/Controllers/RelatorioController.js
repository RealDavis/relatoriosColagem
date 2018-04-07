class RelatorioController {

    static run() {
        alert("begin");







        let inputhandler = new InputHandler();
        let produto = inputhandler.getInputValue("#produto");
        let slo = inputhandler.getInputValue("#slo");
        let quantidade01 = inputhandler.getInputValue("#quantidade01");
        let quantidade02 = inputhandler.getInputValue("#quantidade02");
        let quantidade03 = inputhandler.getInputValue("#quantidade03");
        let quantidade04 = inputhandler.getInputValue("#quantidade04");
        let observacoes = inputhandler.getInputValue("#campoObservacoes");

        let dto = new RelatorioDTO(produto, slo, quantidade01, observacoes);
        alert("relatorio instanciado");


        let dao = new RelatorioDAO();
        dao.salvar();




        return false;
    }

}