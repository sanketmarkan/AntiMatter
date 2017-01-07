var cube, scene, camera, renderer, x;
var geometry, material, mesh, mesh2, mesh3;
var group = new THREE.Object3D();
	

var main = function() {
	init();
	render();
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
window.addEventListener( 'resize', onWindowResize, false );

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
	console.log(y,x);
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
	renderer.render( scene, camera );
}

