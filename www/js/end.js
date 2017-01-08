function create_end() {
	var geometry = new THREE.RingGeometry( 1, 1.25, 32 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(0,0,0.009);
	end.add(mesh);

	geometry = new THREE.RingGeometry( 0.8, 1, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x888888, side: THREE.DoubleSide } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(0,0,0.009);
	end.add(mesh);
	
	geometry = new THREE.RingGeometry( 0.001, 0.8, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
	mesh = new THREE.Mesh( geometry, material );
	end.add(mesh);

	material = new THREE.LineBasicMaterial({
		color: 0x888888,
		linewidth: 5
	});
	geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0.8, 0.005 ),
		new THREE.Vector3( 0, -0.8, 0.005 )
	);
	line = new THREE.LineSegments( geometry, material );
	line_end.add(line);

	end.add( line_end );
	end.scale.set( 0.4, 0.4, 1 );
	// end.position.set(0,0,0.005);
}