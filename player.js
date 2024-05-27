class Player {
	constructor() {
		this.x;
		this.y;
		this.width;
		this.height;

		// ai stuff

		this.isAlive = true;

		this.fitness = 0; // how good the dino performed with some calculation. Example, time alive squared.
		this.score = 0; // some kind of ingame measure of score. Example, time alive

		this.decision = []; // what output the player ai will give
		this.vision = [0, 0, 0, 0, 0, 0]; // what the player ai will see

		this.inputs = 6; // amount of inputs gathered for the neural network
		this.outputs = 3; // amount of actions for the player
		this.brain = new Genome(this.inputs, this.outputs);
	}

	// pretty simple to understand
	move() {}

	// logic update the player
	update() {
		this.move();
	}

	// show the player
	show() {}

	// --------- ai stuff ------------

	look() {
		this.vision = [];

		// gather inputs into the vision array
	}

	think() {
		this.decision = this.brain.feedForward(this.vision);

		// find out which decision had the highest value
		let maxDecisionValue = Math.max(...this.decision);
		let actionIndex = this.decision.indexOf(maxDecisionValue);

		// do an action with the actionIndex
		switch (actionIndex) {
			case 0:
				// somthn
				break;
			case 1:
				// somthn
				break;
			case 2:
				// somthn
				break;
		}
	}

	calculateFitness() {
		// do meaningfull fitness calculation

		if (this.fitness > 0) {
			this.fitness = this.fitness * this.fitness;
		} else {
			this.fitness = 0;
		}
	}

	clone() {
		let clone = new Player();
		clone.brain = this.brain.clone();
		// clone.fitness = this.fitness;
		clone.brain.generateNetwork();
		return clone;
	}

	crossover(parent2) {
		let child = new Player();
		child.brain = this.brain.crossover(parent2.brain);
		child.brain.generateNetwork();
		return child;
	}
}
