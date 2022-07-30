"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
class Color {
    getRandomColor() {
        const randomValue = () => Math.floor(Math.random() * 256);
        return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    }
}
exports.Color = Color;
