"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kgToLbs(weight) {
    //  Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight)* 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=union-types.js.map