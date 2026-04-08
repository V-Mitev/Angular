class Box<T> {
    private boxes: T[] = [];

    add(element: T): void {
        this.boxes.push(element);
    }

    remove(): void {
        this.boxes.pop();
    }

    public get count(): number {
        return this.boxes.length;
    }
}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);