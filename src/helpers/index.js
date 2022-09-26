export function getAumentoMarca(id) {
    let aumentoMarca = 0
    if(id == 1) {
        aumentoMarca = 30
    } else if(id == 2) {
        aumentoMarca = 15
    } else if(id == 3) {
        aumentoMarca = 5
    }
    return aumentoMarca
}

export function getAumentoPlan(id) {
    let aumentoPlan = 0
    if(id == 1) {
        aumentoPlan = 20
    } else if(id == 2) {
        aumentoPlan = 50
    }
    return aumentoPlan
}