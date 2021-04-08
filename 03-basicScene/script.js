// create a scene
const scene = new THREE.Scene()

// create a red cube mesh
// geometry and a material for the mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// then the mesh (normally would name it what the object is e.g. redCube)
const mesh = new THREE.Mesh(geometry, material)
// then finally add it to the scene
scene.add(mesh)

// create the aspect ratio for the camera
const sizes = {
  width: 800,
  height: 600
}

// add the camera to give a point of view
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// move the camera back or it will be inside the cude
camera.position.z = 3
camera.position.x = 1
// add it to the scene
scene.add(camera)

// renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
  // canvas: canvas
  canvas
})
// resize the renderer
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)