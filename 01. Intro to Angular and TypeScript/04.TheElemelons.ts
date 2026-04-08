abstract class Melon {
    constructor(public weight: number, public melonSort: string) { }

    abstract get element(): string;

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    get element(): string {
        return "Water";
    }
}

class Firemelon extends Melon {
    get element(): string {
        return "Fire";
    }
}

class Earthmelon extends Melon {
    get element(): string {
        return "Earth";
    }
}

class Airmelon extends Melon {
    get element(): string {
        return "Air";
    }
}

class Melolemonmelon extends Watermelon {
    private elements = ["Water", "Fire", "Earth", "Air"];
    private index = 0;

    morph(): void {
        this.index = (this.index + 1) % this.elements.length;
    }

    get element(): string {
        return this.elements[this.index]!;
    }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100