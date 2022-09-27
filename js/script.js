let precio = parseInt(prompt('Ingresa el precio del producto para calcular las cuotas'))

while(isNaN(precio) || precio <=0 ){
        precio =parseInt(prompt('Dato incorrecto! \nIngresa el precio del producto para calcular las cuotas'))
}

let cuotas = parseInt(prompt('Ingresa cantidad de cuotas:\n 1 cuota: sin interés\n 3 cuotas: 5% de interes\n 6 cuotas: 10% de interés\n 12 cuotas: 15% de interés'))
while( !(cuotas == 1 || cuotas == 3 || cuotas == 6 || cuotas == 12) || isNaN(precio) ){
    cuotas = parseInt(prompt('Dato incorrecto!\nIngresa cantidad de cuotas:\n 1 cuota: sin interés\n 3 cuotas: 5% de interes\n 6 cuotas: 10% de interés\n 12 cuotas: 15% de interés'))
}

let precioConInteres = precioInteres( precio, cuotas)

alert('el precio con interes incluido es: $' + precioConInteres.toFixed(2) + '\n La cuota es de: $' + (precioConInteres/cuotas).toFixed(2))

function precioInteres(precio, cuotas){
    let interes = 0
    switch(cuotas){
        case 1: 
            interes = precio
            break
        case 3: 
            interes =  precio + ((precio*5)/100)
            break
        case 6: 
            interes =  precio + ((precio*10)/100)
            break 
        case 12: 
            interes =  precio + ((precio*15)/100) 
            break
    }
    return interes
}