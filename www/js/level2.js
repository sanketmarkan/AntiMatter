function render_level_2() {
	var loader = new THREE.TextureLoader();
	loader.load('img/level2.jpg',function(texture)
		{
			var geometry = new THREE.BoxGeometry( 12, 7, -0.01 );
			 var material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});
			var mesh = new THREE.Mesh( geometry, material );
			scene.add (mesh);
			levelobj.push(mesh);
	
		});
	// geometry = new THREE.BoxGeometry( 12, 7, 0 );
	// material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
	// mesh = new THREE.Mesh( geometry, material );
	// scene.add (mesh);
	// levelobj.push(mesh);
	var geom = new THREE.Geometry();
	var v1 = new THREE.Vector3(-6,-3.5,0);
	var v2 = new THREE.Vector3(-6.5,-4,0);
	var v3 = new THREE.Vector3(-6,3.5,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(-6,3.5,0);
	v2 = new THREE.Vector3(0,6.8,0);
	v3 = new THREE.Vector3(6,3.6,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(6.8,0,0);
	v2 = new THREE.Vector3(6,3.6,0);
	v3 = new THREE.Vector3(6,-3.6,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);


	
	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(7,-3.6,0);
	v2 = new THREE.Vector3(0,-6.8,0);
	v3 = new THREE.Vector3(-7,-3.6,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	var mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);


	geometry = new THREE.Geometry();

	material = new THREE.LineBasicMaterial({
	color: 0xff0000,
	linewidth: 3
	});
	geometry.vertices.push(
		new THREE.Vector3( -2.5, 3.5, 0 ),
		new THREE.Vector3( -2.5, -3.5, 0 )
	);

	line = new THREE.LineSegments( geometry, material );
	line.direction = 1;
	line.permanentx1 = -2.5;
	line.permanenty1 = 3.5;

	line.permanentx2= -2.5;
	line.permanenty2 = -3.5;
	laserobjects.push(line);
	scene.add( line );

	material = new THREE.LineBasicMaterial({
		color: 0xff0000,
		linewidth: 3
		});

	geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 2.5, 3.5, 0 ),
		new THREE.Vector3( 2.5, -3.5, 0 )
	);

	line = new THREE.LineSegments( geometry, material );
	line.direction = 1;
	line.permanentx1 = 2.5;
	line.permanenty1 = 3.5;

	line.permanentx2= 2.5;
	line.permanenty2 = -3.5;
	laserobjects.push(line);
	scene.add( line );

}
