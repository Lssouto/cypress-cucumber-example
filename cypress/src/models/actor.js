export class Actor {

    constructor(name) {
        this.name = name;
    }

    wasAbleTo(task, args) {
        task(args);
    }

    attemptsTo(task, args) {
        task(args);
    }

    shouldSeeThat(question, args) {
        question(args);
    }
}