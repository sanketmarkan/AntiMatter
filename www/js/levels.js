function render_level() {
	var loader = new THREE.TextureLoader();
	loader.load('img/index.jpeg',function(texture)
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
	var v1 = new THREE.Vector3(0,-3.5,0);
	var v2 = new THREE.Vector3(-6,-1,0);
	var v3 = new THREE.Vector3(-6,-3.5,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(-3.5,-3.5,0);
	v2 = new THREE.Vector3(-6,-3.5,0);
	v3 = new THREE.Vector3(-6,2,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(-4,3.5,0);
	v2 = new THREE.Vector3(-6,3.5,0);
	v3 = new THREE.Vector3(-6,-1,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);


	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(0,3.5,0);
	v2 = new THREE.Vector3(-4,3.5,0);
	v3 = new THREE.Vector3(-1.5,0,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	// geom = new THREE.Geometry();
	// v1 = new THREE.Vector3(-1.5,3.5,0);
	// v2 = new THREE.Vector3(-3.5,3.5,0);
	// v3 = new THREE.Vector3(-1.5,1.5,0);
	// geom.vertices.push(v1);
	// geom.vertices.push(v2);
	// geom.vertices.push(v3);
	// geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	// geom.computeFaceNormals();
	// mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x001100, side: THREE.DoubleSide}) );
	// scene.add (mesh);
	// collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(-2,-3.5,0);
	v2 = new THREE.Vector3(0,-3.5,0);
	v3 = new THREE.Vector3(1,-1.5,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(-2,-3.5,0);
	v2 = new THREE.Vector3(6,-3.5,0);
	v3 = new THREE.Vector3(1,-1.5,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(-3.5,3.5,0);
	v2 = new THREE.Vector3(6,3.5,0);
	v3 = new THREE.Vector3(4,1.5,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	var mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);

	geom = new THREE.Geometry();
	v1 = new THREE.Vector3(6,-3.5,0);
	v2 = new THREE.Vector3(6,3.5,0);
	v3 = new THREE.Vector3(4,1.5,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();
	var mesh= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide}) );
	scene.add (mesh);
	collisionobjects.push(mesh);


	var material = new THREE.LineBasicMaterial({
	color: 0xffffff,
	linewidth: 3
	});

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 4, 1.5, 0 ),
		new THREE.Vector3( 4, -2.7, 0 )
	);

	var line = new THREE.LineSegments( geometry, material );
	line.direction = 0;
	line.permanentx1 = 4;
	line.permanenty1 = 1.5;

	line.permanentx2= 4;
	line.permanenty2 = -2.7;
	laserobjects.push(line);
	scene.add( line );

	material = new THREE.LineBasicMaterial({
	color: 0xffffff,
	linewidth: 3
	});

	geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( -1.5, 0, 0 ),
		new THREE.Vector3( -1.5, -2.85, 0 )
	);

	line = new THREE.LineSegments( geometry, material );
	line.direction = 1;
	line.permanentx1 = -1.5;
	line.permanenty1 = 0;

	line.permanentx2= -1.5;
	line.permanenty2 = -2.85;
	laserobjects.push(line);
	scene.add( line );
	// laserobjects.push(line);

	// geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.2 );
	// material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
	// mesh = new THREE.Mesh( geometry, material );
	// mesh.position.x = -6;
	// mesh.position.y = -2.5;
	// scene.add (mesh);

};
