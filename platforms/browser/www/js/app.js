var cube, scene, camera, renderer, x;
var geometry, material, mesh, mesh2, mesh3;
var group = new THREE.Object3D();
var projector = new THREE.Projector();
var mouseVector = new THREE.Vector3();
var container = document.getElementsByClassName('app')[0];
var containerWidth = container.clientWidth;
var containerHeight = container.clientHeight;
console.log(containerHeight);
var playervelocity_y = 0;
var playervelocity_x = 0;
var movingstate = 0;

var main = function() {
	init();
	render();
}

function moveup() {

	movingstate = 1;
	playervelocity_y += 1;
}
function movedown() {
	movingstate = 2;
	playervelocity_y -= 1;
}
function moveleft() {
	movingstate = 3;
	playervelocity_x -= 1;

}
function moveright() {
	movingstate = 4;
	playervelocity_x += 1;	
}

function statezero() {
	movingstate = 0;
}
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	x=0;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );


	geometry = new THREE.RingGeometry( 1, 1.25, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
	mesh = new THREE.Mesh( geometry, material );
	group.add(mesh);

	geometry = new THREE.RingGeometry( 0.001, 0.9, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x00009f, side: THREE.DoubleSide } );
	mesh = new THREE.Mesh( geometry, material );
	group.add( mesh );
	
	// geometry = new THREE.RingGeometry( 0.74, 0.8, 32 );
	// material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
	// mesh = new THREE.Mesh( geometry, material );
	// group.add (mesh);
	
	
	
	scene.add(group);
	camera.position.z = 5;

}
window.addEventListener( 'resize', onWindowResize, false);
window.addEventListener( 'mousemove', onMouseMove, false );

function onMouseMove(e){

	mouseVector.x = 2 * (e.clientX / containerWidth) - 1;
    mouseVector.y = 1 - 2 * ( e.clientY / containerHeight );


 //    projector.unprojectVector( mouseVector, camera );
	// var raycaster = new THREE.Raycaster( camera.position, mouseVector.subSelf( camera.position ).normalize() );

	// // create an array containing all objects in the scene with which the ray intersects
	// var intersects = raycaster.intersectObjects( group.children );


 //    var vector = mouseVector.clone().unproject( camera );
	// var direction = new THREE.Vector3( 0, 0, -1 ).transformDirection( camera.matrixWorld );
	// var raycaster = new THREE.Raycaster();
	// raycaster.setFromCamera( mouseVector, camera ); 
	// raycaster.set( vector, direction );
	// console.log(group.children);
	// raycaster.setFromCamera( mouseVector, camera ); 
	// var intersects = raycaster.intersectObjects(group.children);

    // console.log(intersects);

    // intersection = intersects[0];
    // obj = intersection.object;
    // obj.material.color.setRGB( 1.0 - 1/ intersects.length, 0, 0 );



}



function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
function render() {
	requestAnimationFrame( render );
	x = (x+20)%200;
	var s = Math.min(x,200-x);
	var y = 1.25+s/1000.0, z = 1-s/1000.0;
	// console.log(y,x);
	group.remove(mesh2);
	group.remove(mesh3);
	geometry = new THREE.RingGeometry( z, 1.0, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
	mesh2 = new THREE.Mesh( geometry, material );
	group.add( mesh );
	geometry = new THREE.RingGeometry( y, 1.2499, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
	mesh3 = new THREE.Mesh( geometry, material );
	group.add( mesh2 );
	group.add ( mesh3 );

	group.position.x += playervelocity_x*(0.015);
	group.position.y += playervelocity_y*(0.015);

	renderer.render( scene, camera );
}

