const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();


// class Car {
//     constructor(ymodel, color) {
//         this.ymodel = ymodel;

//     }
//     get model() {
//         return this.ymodel;
//     }

//     set model(newModel) {
//         this.ymodel = newModel;
//     }
// }

// const corvette = new Car(2018);

// console.log(corvette);
// console.log(corvette.ymodel)

// console.log('getting model with getters', corvette.model)


// console.log(corvette.model = 2020)
// console.log('getting model with getters', corvette.model)