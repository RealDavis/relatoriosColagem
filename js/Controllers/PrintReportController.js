class PrintReportController {

    index() {
        window.open("printReport.html");
    }

    static preencherCampos() {
        let dao = new RelatorioDAO();
        let dto = dao.carregar();

        ContentTextHandler.setText("#produtoField", dto.getProduto());
        ContentTextHandler.setText("#sloField", dto.getSlo());

        if(dto.getQuantidades().length > 0) {
            let quantidades = dto.getQuantidades();
            let tamanho = quantidades.length;
            let quantidadesText = '';
            for (let i = 0; i < tamanho; i++) {
                quantidadesText += quantidades[i] + ' / ';
            }
            quantidadesText = quantidadesText.substr(0,(quantidadesText.length - 2));
            ContentTextHandler.setText("#quantidadesField", quantidadesText);
        }

        let date = DateHandler.dateToStr();
        ContentTextHandler.setText("#dataField", date);

        if(dto.getObservacoes() === undefined || dto.getObservacoes() === null || dto.getObservacoes() === "" ) {
            document.querySelector("#obsCad").setAttribute('class', 'hiddenElement');
        } else {
            ContentTextHandler.setText("#obsCadContent", dto.getObservacoes());
            document.querySelector("#obsCad").setAttribute('class', 'showElement');
        }

    }

}