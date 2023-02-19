//Utils
export const average = (number,totalLength) => {
    const sumalista = number.reduce(
        function (valorAcumulado , nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }, 0 );
    const averageList = sumalista / totalLength;
    return averageList.toFixed(1);
};

//Color
export const color = (grades) => {
    let color;
    if (grades >= 4) {
        color = "#00ff00";
    }
    if (grades >= 3 && grades < 4) {
        color = "#ffff00";
    }
    if (grades < 3) {
        color = "#ff0000"
    }
    return color
};