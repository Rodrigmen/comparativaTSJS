/* CLASES */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Comienzo de ejemploClases');
// JAVASCRIPT
var VehiculoJ = /** @class */ (function () {
    function VehiculoJ(nombre, anyo) {
        this.nombre = nombre;
        this.anyo = anyo;
    }
    VehiculoJ.prototype.gasto = function (consumo) {
        return 'gasto del vehiculo es ' + consumo + 'L/100KM, ';
    };
    return VehiculoJ;
}());
var CocheJ = /** @class */ (function (_super) {
    __extends(CocheJ, _super);
    function CocheJ(nombre, anyo, kilometros) {
        var _this = _super.call(this, nombre, anyo) || this;
        _this.kilometros = kilometros;
        return _this;
    }
    CocheJ.prototype.gasto = function (consumo) {
        if (consumo === void 0) { consumo = 5.7; }
        console.log(this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros +
            'KM, teniendo en cuenta que el ' + _super.prototype.gasto.call(this, consumo) + ' este ha gastado: ' +
            (this.kilometros / 100 * consumo) + 'L');
    };
    return CocheJ;
}(VehiculoJ));
var cocheJ = new CocheJ('Mercedes', 2015, 700);
console.log("Coche creado por JavaScript: ");
cocheJ.gasto();
// TYPESCRIPT
var VehiculoT = /** @class */ (function () {
    function VehiculoT(nombre, anyo) {
        this.nombre = nombre;
        this.anyo = anyo;
    }
    VehiculoT.prototype.gasto = function (consumo) {
        return 'gasto del vehiculo es ' + consumo + 'L/100KM, ';
    };
    return VehiculoT;
}());
var CocheT = /** @class */ (function (_super) {
    __extends(CocheT, _super);
    function CocheT(nombre, anyo, kilometros) {
        var _this = _super.call(this, nombre, anyo) || this;
        _this.kilometros = kilometros;
        return _this;
    }
    CocheT.prototype.gasto = function (consumo) {
        if (consumo === void 0) { consumo = 3.7; }
        console.log(this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros +
            'KM, teniendo en cuenta que el ' + _super.prototype.gasto.call(this, consumo) + ' este ha gastado: ' +
            (this.kilometros / 100 * consumo) + 'L');
    };
    return CocheT;
}(VehiculoT));
var cocheT = new CocheT('Audi', 2011, 500);
console.log("Coche creado por TypeScript: ");
cocheT.gasto();
console.log('Fin de ejemploClases...');
