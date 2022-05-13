
function valor(val){

    document.getElementById('resultado').value += val

    return val

}

function resuelve(){

    let x = document.getElementById('resultado').value

    let y = eval(x);

    document.getElementById('resultado').value = y

    return y

}

/*This function is called when the user clicks on the C or the clear button. */

function limpia(){

    document.getElementById('resultado').value = ''

}