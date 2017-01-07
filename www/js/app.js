var cube, scene, camera, renderer, x;
var cl=[], cv=[];
var geometry, material, mesh, mesh2, mesh3;
var group = new THREE.Object3D();
var rect = new THREE.Object3D(),cnt=0;
var fl=[],cnt=0;

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

	renderer.render( scene, camera );
}

