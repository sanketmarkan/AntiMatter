var cube, scene, camera, renderer, x;
var cl=[], cv=[];
var geometry, material, mesh, mesh2, mesh3;
var group = new THREE.Object3D();
var line_end = new THREE.Object3D();
var end = new THREE.Object3D();
var portal = new THREE.Object3D();
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
var collisionobjects = [],levelobj = [];
var movingstate = 0,ass_x_v=0.01,ass_y_v=-0.01,fl_in_vel=0.002;
var blue_portal = new THREE.Vector3(1,0.2,0);
var level_complete = 0, end_size = 0;
var col, tt = 0, change_color = 0;
var main = function() {
	init();
	render_level();
	create_portal();
	create_end();
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
	level_complete = 1;
	playervelocity_x -= 1;

}
function moveright() {
	movingstate = 4;
	playervelocity_x += 1;
}

function statezero() {
	movingstate = 0;
}

function change() {
	change_color = 1;
}
function init() {
	scene = new THREE.Scene();
	col = [0xff0000,0x0000ff];
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	x=0;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	geometry = new THREE.RingGeometry( 1, 1.25, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
	mesh = new THREE.Mesh( geometry, material );
	group.add(mesh);

	geometry = new THREE.RingGeometry( 0.001, 0.9, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide } );
	mesh = new THREE.Mesh( geometry, material );
	group.add( mesh );

	// geometry = new THREE.RingGeometry( 0.74, 0.8, 32 );
	// material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
	// mesh = new THREE.Mesh( geometry, material );
	// group.add (mesh);

	group.position.set(-4,0.8,0.01);
	group.scale.set( 0.2, 0.2, 1 );



	scene.add(group);
	scene.add(portal);
	scene.add(end);
	camera.position.z = 3.5;

	geometry = new THREE.RingGeometry( 0.2, 0.35, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x47B8D8E, side: THREE.DoubleSide } );
	var spawn = new THREE.Mesh( geometry, material );
	spawn.position.set(-3.95,2.6,0);
	scene.add(spawn);

	var geometry = new THREE.CircleGeometry( 0.17, 32 );
	var material = new THREE.MeshBasicMaterial( { color: 0x44B3C2 } );
	var circle = new THREE.Mesh( geometry, material );
	circle.position.set(-3.95,2.6,0);
	scene.add( circle );

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

	function check_collision()
	{
		var rays = [
	      new THREE.Vector3(0, 0, 1),
	      new THREE.Vector3(1, 0, 1),
	      new THREE.Vector3(1, 0, 0),
	      new THREE.Vector3(1, 0, -1),
	      new THREE.Vector3(0, 0, -1),
	      new THREE.Vector3(-1, 0, -1),
	      new THREE.Vector3(-1, 0, 0),
	      new THREE.Vector3(-1, 0, 1),
	      new THREE.Vector3(0, 1, 1),
	      new THREE.Vector3(1, 1, 1),
	      new THREE.Vector3(1, 1, 0),
	      new THREE.Vector3(1, 1, -1),
	      new THREE.Vector3(0, 1, -1),
	      new THREE.Vector3(-1, 1, -1),
	      new THREE.Vector3(-1, 1, 0),
	      new THREE.Vector3(-1, 1, 1),
	    ];
	    // And the "RayCaster", able to test for intersections
	     var caster = new THREE.Raycaster();
	     var caster2 = new THREE.Raycaster();
	     var collisions,coll2
	      // Maximum distance from the origin before we consider collision
	      distance = 0.5;
	      // Get the obstacles array from our world
	    // For each ray
	    for (var i = 0; i < rays.length; i++) {
	      // We reset the raycaster to this direction
	      caster.set(group.position, rays[i]);
	      // Test if we intersect with any obstacle mesh
	      collisions = caster.intersectObjects(collisionobjects);

	      if (collisions.length > 0 && collisions[0].distance <= distance)
	      		{
					group.position.x -= 0.1*playervelocity_x;
					group.position.y -= 0.1*playervelocity_y;
				  	console.log("HIT!");
				  	// console.log(playervelocity_x);
				  	playervelocity_x = -playervelocity_x;
				  	playervelocity_y = -playervelocity_y;
				  	// console.log(playervelocity_x);
				}
		}
	    for (var i = 0; i < rays.length; i++)
	      {
	      	for(var j = 0;j<rect.children.length;j++)
	      	{// We reset the raycaster to this direction
	      		caster2.set(rect.children[j].position,rays[i]);
	      		// Test if we intersect with any obstacle mesh
				  coll2 = caster2.intersectObjects(collisionobjects);
				  // And disable that direction if we do
				  if (coll2.length > 0 && coll2[0].distance <= distance) {

						rect.children[j].position.x -= 20*rect.children[j].userData.vx;
						rect.children[j].position.y -= 20*rect.children[j].userData.vy;
					  	console.log("HIT BLOCK!");
					  	// console.log(playervelocity_x);
					  	var t = rect.children[j].userData.vx;
					  	rect.children[j].userData.vx = -rect.children[j].userData.vy;
					  	rect.children[j].userData.vy = t;
					  	// console.log(rect.children[j].userData.vy);
			      }
		  	}
		  }

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
	
	if (change_color){
		tt = 1-tt;
		for( var i = group.children.length - 1; i >= 0; i--) { group.remove(group.children[i]);}
		geometry = new THREE.RingGeometry( 1, 1.25, 32 );
		material = new THREE.MeshBasicMaterial( { color: col[tt], side: THREE.DoubleSide } );
		mesh = new THREE.Mesh( geometry, material );
		group.add(mesh);

		geometry = new THREE.RingGeometry( 0.001, 0.9, 32 );
		material = new THREE.MeshBasicMaterial( { color: col[1-tt], side: THREE.DoubleSide } );
		mesh = new THREE.Mesh( geometry, material );
		group.add( mesh );
		change_color  = 0;
	}

	group.remove(mesh2);
	group.remove(mesh3);
	geometry = new THREE.RingGeometry( z, 1.0, 32 );
	material = new THREE.MeshBasicMaterial( { color: col[tt], side: THREE.DoubleSide } );
	mesh2 = new THREE.Mesh( geometry, material );
	group.add( mesh );
	geometry = new THREE.RingGeometry( y, 1.2499, 32 );
	material = new THREE.MeshBasicMaterial( { color: col[tt], side: THREE.DoubleSide } );
	mesh3 = new THREE.Mesh( geometry, material );
	group.add( mesh2 );
	group.add ( mesh3 );


	if(cnt%10) {	//for controlling the player's velocity
		if(playervelocity_y>=0.02||playervelocity_y<=-0.02)
			if(playervelocity_y>0)
				playervelocity_y -= 0.02;
			else
				playervelocity_y += 0.02;

		if(playervelocity_x>=0.02||playervelocity_x<=-0.02)
			if(playervelocity_x>0)
				playervelocity_x -= 0.02;
			else
				playervelocity_x += 0.02;
	}
	if(level_complete) {
		end.remove(line_end);
		end_size += 0.03;
		end_size = Math.min(end_size, 0.8);

		material = new THREE.LineBasicMaterial({
			color: 0x000000,
			linewidth: 5
		});
		geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( end_size, 0.8, 0.005 ),
			new THREE.Vector3( end_size, -0.8, 0.005 )
		);
		line = new THREE.LineSegments( geometry, material );
		line_end.add(line);

		material = new THREE.LineBasicMaterial({
			color: 0x000000,
			linewidth: 5
		});
		geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( -end_size, 0.8, 0.005 ),
			new THREE.Vector3( -end_size, -0.8, 0.005 )
		);
		line = new THREE.LineSegments( geometry, material );
		line_end.add(line);
		end.add(line_end);
	}

	if(cnt%70==0) {	// for adding a new square every second
					var geometry = new THREE.CubeGeometry( 0.24, 0.24, 0.019 );
				var geometry = new THREE.CubeGeometry( 0.24, 0.24, 0.019 );
				var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
				var cube = new THREE.Mesh( geometry, material );
				cube.userData = {vx:ass_x_v,vy:ass_y_v};
				cube.position.set(-4,2.8,0);
				rect.add(cube);

		if(ass_x_v==0||ass_y_v==0)
			fl_in_vel*=-1;
				var geometry = new THREE.CubeGeometry( 0.2, 0.2, 0.02 );
				var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
				var cube = new THREE.Mesh( geometry, material );
				cube.userData = {vx:ass_x_v,vy:ass_y_v};
				cube.position.set(-4,2.8,0);
				rect.add(cube);
		ass_x_v += fl_in_vel;
		ass_y_v += fl_in_vel;
	}
	for(var i=0;i<rect.children.length;i++) {
		rect.children[i].position.x += rect.children[i].userData.vx;
		rect.children[i].position.y += rect.children[i].userData.vy;
		if (rect.children[i].userData.vx >= 0.000003)
			rect.children[i].userData.vx -= 0.000003;
		if (rect.children[i].userData.vx <= -0.000003)
			rect.children[i].userData.vx += 0.000003;
		if (rect.children[i].userData.vy >= 0.000003)
			rect.children[i].userData.vy -= 0.000003;
		if (rect.children[i].userData.vy <= 0.000003)
			rect.children[i].userData.vy += 0.000003;
		rect.children[i].rotation.z += 0.01;
	}
	check_collision();
	for(var i=0;i<rect.children.length;i++) {
		if(rect.children[i].userData.vx>0.2||rect.children[i].userData.vy>0.2||rect.children[i].userData.vx<-0.2||rect.children[i].userData.vy<-0.2) {
			rect.children[i].userData.vx = 0.1;
			rect.children[i].userData.vy = 0.1;
		}
		var tx = (rect.children[i].position.x-group.position.x),ty = (rect.children[i].position.y-group.position.y);
		if(playervelocity_y<0.01&&playervelocity_y>-0.01)
			playervelocity_y = 0.01;
			if(playervelocity_x<0.01&&playervelocity_x>-0.01)
				playervelocity_x = 0.01;
		if(tx*tx+ty*ty < 0.2) {
			tot = 0.015;
			rect.children[i].userData.vx = tot*(playervelocity_x)/(playervelocity_x+playervelocity_y);
			rect.children[i].userData.vy = tot*(playervelocity_y)/(playervelocity_x+playervelocity_y);
			if(playervelocity_y<0)
				rect.children[i].userData.vy*=-1;
			if(playervelocity_x<0)
				rect.children[i].userData.vx*=-1;
		}
	}
	scene.add(rect);
	cnt++;
	group.position.x += playervelocity_x*(0.015);
	group.position.y += playervelocity_y*(0.015);
	renderer.render( scene, camera );
	for(var i=0;i<rect.children.length;i++) {
		scene.remove(rect.children[i]);
	}
}
