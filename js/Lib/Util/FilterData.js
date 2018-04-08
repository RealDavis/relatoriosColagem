class FilterData {

    filterString() {

    }

    filterArray(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if(array[i] !== null && array[i] !== undefined && array[i] !== '') {
                newArray.push(array[i]);
            }
        }

        return newArray;
    }

    filterString(string) {
        if(string !== null && string !== undefined && string !== '') {
            return string.replace(/<.*?>/g, '');
        }
    }

}