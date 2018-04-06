class RelatorioValidator {

    constructor(dto) {
        this.dto = dto;
    }

    validar() {
        
    }

    validarProduto() {
        if(dto.getProduto() == "" || dto.getProduto() == null || dto.getProduto() == undefined) {

        } else if(dto.getProduto().length() < 2){
            return false;
        }
    }

}