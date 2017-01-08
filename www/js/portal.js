function create_portal(level) {
	var portals = new THREE.Object3D();
	var geometry = new THREE.CubeGeometry( 0.6, 0.6, 0.019 );
	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
	var cube = new THREE.Mesh( geometry, material );
	portals.add(cube);

	var geometry = new THREE.CubeGeometry( 0.45, 0.45, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	portals.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0.2,0,0);
	portals.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(-0.2,0,0);
	portals.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,0.2,0);
	portals.add(cube);

	var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,-0.2,0.001);
	portals.add(cube);
	portals.position.set(4.5,-2,0);
	portal.add(portals);

	if(level==2){
		portals = new THREE.Object3D();
		console.log("Ffdsf");
		var geometry = new THREE.CubeGeometry( 0.6, 0.6, 0.019 );
		var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
		var cube = new THREE.Mesh( geometry, material );
		portals.add(cube);

		var geometry = new THREE.CubeGeometry( 0.45, 0.45, 0.02 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		var cube = new THREE.Mesh( geometry, material );
		portals.add(cube);

		var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.set(0.2,0,0);
		portals.add(cube);

		var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.set(-0.2,0,0);
		portals.add(cube);

		var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.set(0,0.2,0);
		portals.add(cube);

		var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.set(0,-0.2,0.001);
		portals.add(cube);
		portals.position.set(-4.5,2,0);
		portal.add(portals);
	}
}
