var cube, scene, camera, renderer, x;
var cl=[], cv=[];
var geometry, material, mesh, mesh2, mesh3;
var group = new THREE.Object3D();
var rect = new THREE.Object3D(),cnt=0;
var fl=[],cnt=0;
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
	render_level();
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

	group.position.set(0,0,0.01);
	group.scale.set( 0.2, 0.2, 1 );
		


	for(var i=0;i<100;i++) {
		fl[i] = 1;
		cv.push([0,0]);
		geometry = new THREE.CubeGeometry( 0.24, 0.24, 0.019 );
		material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		cube = new THREE.Mesh( geometry, material );
		cube.position.set(0,0,0);
		cube.name = 2*i;
		scene.add(cube);
		geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
		material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
		cube = new THREE.Mesh( geometry, material );
		cube.position.set(0,0,0);
		cube.name = 2*i+1;
		scene.add(cube);
	}

	scene.add(group);
	camera.position.z = 3.5;

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
	camera.position.x = group.position.x;
	camera.position.y = group.position.y;
	x = (x+20)%200;
	var s = Math.min(x,200-x);
	var y = 1.25+s/1000.0, z = 1-s/1000.0;
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

	if(cnt%70==0) {
		cv[cnt/70][0] = 0.01;
		cv[cnt/70][1] = 0.01;
	}
	for(var i=0;i<=cnt/70;i++) {
		if(fl[i]==1) {
			var temp = scene.getObjectByName(2*i);
			var temp1 = scene.getObjectByName(2*i+1);
			scene.remove(temp);
			scene.remove(temp1);
			if(cv[i][0]>0) {
				temp.position.x += cv[i][0];
				temp.position.y += cv[i][1];
				temp1.position.x += cv[i][0];
				temp1.position.y += cv[i][1];
				temp.rotation.z += 0.01;
				temp1.rotation.z += 0.01;
				scene.add(temp);
				scene.add(temp1);
				cv[i][0]-=0.00001;
				cv[i][1]-=0.00001;
			}
		}
	}
	cnt++;
	group.position.x += playervelocity_x*(0.015);
	group.position.y += playervelocity_y*(0.015);

	renderer.render( scene, camera );
}

