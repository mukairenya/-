scene.add(new THREE.AmbientLight(0xffffff, 1));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);

camera.position.set(0, 1.5, 3);
camera.lookAt(0, 0, 0);
import * as THREE from "three";
loader.load("xxx.glb", (gltf) => {
  const enemy = gltf.scene;

  console.log(enemy); // ←これ必ず見る

  scene.add(enemy);

  scene.add(new THREE.AxesHelper(5)); // 座標表示
});