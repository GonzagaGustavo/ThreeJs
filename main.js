import * as THREE from "three";
import { camera } from "./src/camera";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import "./src/move";
import move, { handleMouseMove } from "./src/move";

const scene = new THREE.Scene();
let stats = new Stats();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(animate);

let controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
// cube camera
let cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
let cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
// floor

const floorTexture = new THREE.TextureLoader().load("/textures/coblestone.jpg");
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({
  map: floorTexture,
  side: THREE.DoubleSide,
});
const floorGeometry = new THREE.PlaneGeometry(20, 20, 20, 20);
let floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.x = 2;
floor.position.y = -0.5;
floor.position.z = 3;
floor.rotation.x = (-90 * Math.PI) / 180;
scene.add(floor);
// mouse move
document.onmousemove = handleMouseMove;

camera.position.z = 10;
camera.position.y = 2;
function animate() {
  requestAnimationFrame(animate);
  move();
  cubeCamera.update(renderer, scene);
  renderer.render(scene, camera);
  stats.update();
}
animate();
