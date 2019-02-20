import Planet from "../entities/Planet";
import THREE, { Vector3 } from "three";

const sunPosition = new Vector3()

export default function createPlanets(): Planet[] {
	const planets: Planet[] = []
	planets.push(new Planet(
		'Mercury',
		4.879,
		57.9,
		88,
		1407.6,
		sunPosition,
		THREE.Math.randFloat(0, Math.PI * 2)
	))
	planets.push(new Planet(
		'Venus',
		12.104,
		108.2,
		224.7,
		-5832.5,
		sunPosition,
		THREE.Math.randFloat(0, Math.PI * 2)
	))
	planets.push(new Planet(
		'Earth',
		12.756,
		149.6,
		365.2,
		23.9,
		sunPosition,
		THREE.Math.randFloat(0, Math.PI * 2)
	))
	planets.push(new Planet(
		'Mars',
		6.792,
		227.9,
		687.0,
		24.6,
		sunPosition,
		THREE.Math.randFloat(0, Math.PI * 2)
	))
	planets.push(new Planet(
		'Jupiter',
		142.984,
		778.6,
		4331,
		9.9,
		sunPosition,
		THREE.Math.randFloat(0, Math.PI * 2)
	))

	return planets
}