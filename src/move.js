import { camera } from "./camera";
import { delay } from "./utils";
let keydown = {};

export default function move() {
  window.onkeydown = (e) => {
    keydown[e.key.toLowerCase()] = true;
  };
  window.onkeyup = (e) => {
    keydown[e.key.toLowerCase()] = false;
  };
  if (keydown["w"]) camera.position.z -= 0.1;
  if (keydown["s"]) camera.position.z += 0.1;
  if (keydown["d"]) camera.position.x += 0.1;
  if (keydown["a"]) camera.position.x -= 0.1;
}
export const handleMouseMove = (e) => {
  let eventDoc, doc, body;

  if (e.pageX == null && e.clientX != null) {
    eventDoc = (e.target && e.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    e.pageX =
      e.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0);

    e.pageYevent.pageY =
      e.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);
  }
  eventPageX -= e.movementX * 0.2;
  eventPageY -= e.movementY * 0.2;
};
