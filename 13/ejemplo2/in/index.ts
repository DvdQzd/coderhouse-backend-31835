export class ClaseEjemplo implements SaludoInterface{
    getHelloWorld(nombre: string): string {
        return `Hello World, ${nombre}`;
    }

    getNumber(): number {
        return 1;
    }
}

interface SaludoInterface {
    getHelloWorld(nombre: string): string;
    getNumber(): number;
}