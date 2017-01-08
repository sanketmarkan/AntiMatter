function create_portal() {
	var geometry = new THREE.CubeGeometry( 0.6, 0.6, 0.019 );
	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
	var cube = new THREE.Mesh( geometry, material );
	portal.add(cube);

	var geometry = new THREE.CubeGeometry( 0.45, 0.45, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	portal.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0.2,0,0);
	portal.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(-0.2,0,0);
	portal.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,0.2,0);
	portal.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,-0.2,0.001);
	portal.add(cube);
	portal.position.set(4,-2,0);
}
