const chispum = require("./chispum");

describe("chispum", () =>{
    test("Debería imprimir uno si se recibe uno",() =>{
        const expected = 1;
        const result = chispum(1);
        expect(expected).toBe(result);
    });
    test("Debería imprimier chis si recibe un 3", () =>{
        const expected = "chis";
        const result = chispum(3);
        expect(expected).toBe(result);
    });
    test("Debería imprimier chis si recibe un multiplo 3", () =>{
        const expected = "chis";
        const result = chispum(6);
        expect(expected).toBe(result);
    });
    test("Debería imprimier chis si recibe un multiplo 5", () =>{
        const expected = "pum";
        const result = chispum(5);
        expect(expected).toBe(result);
    });
    test("Debería imprimier chispum si recibe un multiplo 5 y 3", () =>{
        const expected = "chispum";
        const result = chispum(15);
        expect(expected).toBe(result);
    });
});