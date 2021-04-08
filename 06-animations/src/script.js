import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { WebGLShadowMap } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// clock 
// const clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 1, x: 2, delay: 1})
gsap.to(mesh.position, { duration: 1, x: 0, delay: 3})


//  Animation
const tick = () => {
//    const elapsedTime = clock.getElapsedTime()

//     // Update object
//     mesh.rotation.y = elapsedTime
//     mesh.position.y = Math.sin(elapsedTime)
//     mesh.position.x = Math.cos(elapsedTime)
    
    // Render
    renderer.render(scene, camera)
    
    // on the next frame call this same function again
    window.requestAnimationFrame(tick)
}

tick()
