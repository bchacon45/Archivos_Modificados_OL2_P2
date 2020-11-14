
function hanoi(discos: number, origen: number, auxiliar: number, destino: number): void {
    if (discos == 1) {
        console.log("Mover disco de " + origen + " a " + destino);
    } else {
        hanoi(discos - 1, origen, destino, auxiliar);
        console.log("Mover disco de "+origen+ " a " + destino);
        hanoi(discos - 1, auxiliar, origen, destino);
    }
}

hanoi(3, 1, 2, 3);

/*
    Mover disco de 1 a 3
    Mover disco de 1 a 2
    Mover disco de 3 a 2
    Mover disco de 1 a 3
    Mover disco de 2 a 1
    Mover disco de 2 a 3
    Mover disco de 1 a 3
    509
    253
    125
    61
    29
*/