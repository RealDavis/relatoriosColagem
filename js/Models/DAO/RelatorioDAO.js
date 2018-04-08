class RelatorioDAO {

    constructor(){}

    salvar(dto) {
        let storage = new LocalStorageController();
        storage.salvar("relatorio", dto);
    }

    carregar() {
        let storeage = new LocalStorageController();
        let relatorio = storeage.recuperar('relatorio');
        relatorio = JSON.parse(relatorio);
        let dto = new RelatorioDTO(relatorio.produto, relatorio.slo, relatorio.quantidades, relatorio.observacoes);
        return dto;
    }

}