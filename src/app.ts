console.log(`Hello, Typescript!`);

export default class Greeter {
    public byName(name: string): string {
        return `Hi, ${name}.`;
    }
    public byNameLength(name: string): string {
        return `Hi, person with ${name.length} letters in their name.`;
    }
}
