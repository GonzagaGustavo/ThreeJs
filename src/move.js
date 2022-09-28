import * as THREE from "three";
import { camera } from "./camera";
import { delay } from "./utils";
const x = camera.position.x;
const y = camera.position.x;
const z = camera.position.z;

function jump() {
  camera.position.y += 1;
  delay(100)
  camera.position.y -= 1;
}

document.addEventListener(
  "keydown",
  (e) => {
    const key = e.key.toLowerCase();
    if (key == "a") {
      camera.position.x -= 0.1;
    } else if (key == "d") {
      camera.position.x += 0.1;
    } else if (key == "w") {
      camera.position.z -= 0.1;
    } else if (key == "s") {
      camera.position.z += 0.1;
    } else if (key == " ") {
      jump()
    }
  },
  false
);
