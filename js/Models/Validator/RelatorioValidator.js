class RelatorioValidator {

    validar(dto) {
        let resultado = new Map();

        if(dto.getProduto() === null || dto.getProduto() === undefined || dto.getProduto() === "") {
            resultado.set('produto', 'O campo \"Produto\" deve ser preenchido');
        }

        if(dto.getSlo() === null || dto.getSlo() === undefined || dto.getSlo() === "") {
            resultado.set('slo', 'O campo \"SLO\" deve ser preenchido');
        } else if(Number.isInteger(parseInt(dto.getSlo())) === false) {
            resultado.set('slo', 'O campo \"SLO\" deve ser um numero');
        }

        /*if(dto.getQuantidades() === null || dto.getQuantidades() === undefined
            || dto.getQuantidades() === "" || dto.getQuantidades().length === 0) {
            resultado.set('quantidade', 'Os campos \"Quantidade\" devem ser preenchidos');
        } else{
            let quantidades = dto.getQuantidades();
            for (let i = 0; i < quantidades.length; i++) {
                if(!parseFloat(quantidades[i])) {
                    resultado.set('quantidade', 'Os campos \"Quantidade\" devem ser numeros');
                    break;
                }
            }
        }

        if(dto.getObservacoes() === null || dto.getObservacoes() === undefined || dto.getObservacoes() === "") {
            resultado.set('observacoes', 'O campo \"Observações\" deve ser preenchido');
        }*/

        return resultado;
    }

}