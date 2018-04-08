let atributes = new WeakMap();

class RelatorioDTO {

    constructor(produto, slo, quantidades, observacoes) {
        atributes.set(this, {
            produto, slo, quantidades, observacoes
        });
    }

    getProduto() {
        return atributes.get(this)['produto'];
    }

    setProduto(produto) {
        atributes.set(this,{produto});
    }

    getSlo() {
        return atributes.get(this)['slo'];
    }

    setSlo(slo) {
        atributes.set(this,{slo});
    }

    getQuantidades() {
        return atributes.get(this)['quantidades'];
    }

    setQuantidades(quantidades) {
        atributes.set(this,{quantidades});
    }

    getObservacoes() {
        return atributes.get(this)['observacoes'];
    }

    setObservacoes(observacoes) {
        atributes.set(this,{observacoes});
    }

    toJSON() {
        return JSON.stringify({
            produto     : this.getProduto(),
            slo         : this.getSlo(),
            quantidade  : this.getQuantidades(),
            observacoes : this.getObservacoes()
        });
    }

}