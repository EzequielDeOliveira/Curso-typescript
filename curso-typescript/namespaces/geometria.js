"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Areas.retangulo = retangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometria.js.map