import { GameWorld } from "game-engine";
import createPlanets from "./utils/createPlanets";


export default class SpaceGameWorld extends GameWorld {
	setup() {
		const planets = createPlanets()
		planets.forEach(planet => this.addObject(planet))
	}
}