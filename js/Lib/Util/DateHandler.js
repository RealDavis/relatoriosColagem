class DateHandler {

    static dateToStr() {
        let data = new Date();
        let dia = data.getDate();
        let mes = (data.getMonth() + 1);
        let ano = data.getFullYear();
        if(dia < 10) {
            dia = '0' + dia;
        }
        if(mes < 10) {
            mes = '0' + mes;
        }
        let dataStr = dia + '/' + mes + '/' + ano;
        return dataStr;
    }

}