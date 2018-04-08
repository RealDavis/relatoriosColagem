class RelatorioDAO {

    constructor(){}

    salvar(dto) {
        let storage = new LocalStorageController();
        storage.salvar("relatorio", dto);
    }

}