import * as THREE from 'three'
import { camera } from './src/camera'

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild( renderer.domElement )

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 333})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 3


function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()