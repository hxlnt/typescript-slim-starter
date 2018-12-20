console.log(`Hello, Typescript!`);

export default class Greeter {
	byName(name : string) : string {
		return `Hi, ${name}.`;
    }
    byNameLength(name : string) : string {
        return `Hi, person with ${name.length} letters in their name.`;
    }
}