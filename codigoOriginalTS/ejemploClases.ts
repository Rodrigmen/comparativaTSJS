/* CLASES */

console.log('Comienzo de ejemploClases');

// JAVASCRIPT
class VehiculoJ {
    nombre;
    anyo;

    constructor(nombre, anyo) {
        this.nombre = nombre;
        this.anyo = anyo;
    }

    gasto(consumo) {
        return 'gasto del vehiculo es ' + consumo + 'L/100KM, ';
    }
}
class CocheJ extends VehiculoJ {
    kilometros;
    constructor(nombre, anyo, kilometros) {
        super(nombre, anyo);
        this.kilometros = kilometros;
    }

    gasto(consumo = 5.7) {
        return (this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros +
            'KM, teniendo en cuenta que el ' + super.gasto(consumo) + ' este ha gastado: ' +
            (this.kilometros / 100 * consumo) + 'L');

    }
}
var cocheJ = new CocheJ('Mercedes', 2015, 700);
console.log("Coche creado por JavaScript: ");
cocheJ.gasto();

// TYPESCRIPT
class VehiculoT {
    nombre: string;
    anyo: number;

    constructor(nombre: string, anyo: number) {
        this.nombre = nombre;
        this.anyo = anyo;
    }

    gasto(consumo: number) {
        return 'gasto del vehiculo es ' + consumo + 'L/100KM, ';
    }
}
class CocheT extends VehiculoT {
    kilometros: number;
    constructor(nombre: string, anyo: number, kilometros: number) {
        super(nombre, anyo);
        this.kilometros = kilometros;
    }

    gasto(consumo = 3.7) {
        return (this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros +
            'KM, teniendo en cuenta que el ' + super.gasto(consumo) + ' este ha gastado: ' +
            (this.kilometros / 100 * consumo) + 'L');

    }
}
var cocheT = new CocheT('Audi', 2011, 500);
console.log("Coche creado por TypeScript: ");
console.log(cocheT.gasto());

console.log('Fin de ejemploClases...');
