import { GameObject, Transform, Rendering, rotateAroundPoint } from "game-engine";
import { Vector3, SphereGeometry, TextureLoader, MeshBasicMaterial, Mesh, Euler } from "three";
import Orbit from "../components/Orbit";
import Rotation from "../components/Rotation";

export const DISTANCE_CONSTANT = 4
const rotationAxis = new Vector3(0, 1, 0)

export default class Planet extends GameObject {
	constructor(
		public readonly name: string,
		public readonly diameter: number,
		public readonly distanceFromSun: number,
		/**
		 * Number of days it takes for the planet to complete a full orbit
		 */
		public readonly orbitalPeriod: number,
		/**
		 * Number of hours it takes the planet to rotate around its axis
		 */
		public readonly rotationPeriod: number,
		public readonly orbitsAround: Vector3 = new Vector3(),
		startingRotation: number
	) {
		super();
		const transform = this.getComponent(Transform)
		transform.position.set(distanceFromSun * DISTANCE_CONSTANT, 0, 0);
		// Here I'm reusing the starting rotation as both the position around the sun and the planet's local rotation
		rotateAroundPoint(transform.position, this.orbitsAround, rotationAxis, startingRotation)
		transform.rotation = new Euler(0, startingRotation, 0)

		const planetGeometry = new SphereGeometry(diameter, 32, 32);
		const planetTexture = new TextureLoader().load(`textures/${name.toLowerCase()}.jpg`);
		const planetMaterial = new MeshBasicMaterial({ color: 0xffffff, map: planetTexture });
		const mesh = new Mesh(planetGeometry, planetMaterial);

		this.addComponent(new Rendering(mesh))
		this.addComponent(new Orbit(orbitalPeriod, orbitsAround));
		this.addComponent(new Rotation(rotationPeriod))
	}
}