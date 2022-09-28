import * as THREE from 'three'
import { camera } from './src/camera'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js';
import './src/move'

const scene = new THREE.Scene()
let stats = new Stats()
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild( renderer.domElement )
renderer.setAnimationLoop( animate );

let controls = new OrbitControls( camera, renderer.domElement );
controls.autoRotate = true;
// cube camera
let cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 );
let cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );
// cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "brown"})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
const geometry2 = new THREE.DodecahedronGeometry(1, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: "yellow"})
const circle = new THREE.Mesh(geometry2, material2)
circle.position.y = 5
scene.add(circle)

const geometry3 = new THREE.ConeGeometry(1, 4.5, 5)
const material3 = new THREE.MeshBasicMaterial({ color: "rgb(0, 128, 0)"})
const cone = new THREE.Mesh(geometry3, material3)
cone.position.y = 2.5
scene.add(cone)

camera.position.z = 10
camera.position.y = 2

function animate() {
  requestAnimationFrame(animate)
  cubeCamera.update( renderer, scene );
  renderer.render(scene, camera)
  stats.update()
}
animate()