class RelatorioDTO {

    constructor(produto, slo, data, quantidades, observacoes) {
        this.produto = produto;
        this.slo = slo;
        this.data = data;
        this.quantidades = quantidades;
        this.observacoes = observacoes;
    }

    getProduto() {
        return this.produto;
    }

    setProduto() {
        this.produto = produto;
    }

    getSlo() {
        return this.slo;
    }

    setSlo() {
        this.slo = slo;
    }

    getData() {
        return this.data;
    }

    setData() {
        this.data = data;
    }

    getQuantidades() {
        return this.quantidades;
    }

    setQuantidades() {
        this.quantidades = quantidades;
    }

    getObservacoes() {
        return this.observacoes;
    }

    setObservacoes() {
        this.observacoes = observacoes;
    }

}