import * as THREE from 'three';
import './index.css'
import { GameScene, GameCamera, GameWorld, GameObject, Collision, InputController, Rendering, Outline, Selectable } from 'game-engine'
import { Vector3 } from 'three';

const gameScene = new GameScene()
GameCamera.position.y = 4
GameCamera.position.z = 7
GameCamera.position.x = 2.5
GameCamera.camera.lookAt(new Vector3(2.5, 0, 2.5))

let lastTick: number = Date.now()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function update() {
	const now = Date.now()
	const dt = now - lastTick
	lastTick = now

	// Update colliders
	GameObject.getComponentsOfType(Collision).forEach(c => c.update(dt))

	// Update InputController
	InputController.update()

	// Update camera
	GameCamera.update(dt)

	// Update gameObjects

	// Update meshes
	GameObject.getComponentsOfType(Rendering).forEach(c => c.update(dt))

	// Update outlines
	GameObject.getComponentsOfType(Outline).forEach(c => c.update(dt))

	// Update selects
	GameObject.getComponentsOfType(Selectable).forEach(c => c.update())
	Selectable.checkClear()

	// Reset InputController
	InputController.reset()

	// Render
	renderer.render(gameScene.scene, GameCamera.camera);
	requestAnimationFrame(update)
}

update()