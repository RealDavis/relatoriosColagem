class Teste {
    
    static alerta() {
        let texto = document.querySelector("#produto").value;
        let form = document.querySelector("#formulario");
        alert(texto);
        let relatorio = new RelatorioDTO();
        relatorio.setProduto(document.querySelector("#produto").value);
        alert(relatorio.getProduto());
        form.reset();
    }

    

}

