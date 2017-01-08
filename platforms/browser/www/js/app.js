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
var collisionobjects = [],levelobj = [];
var laserobjects = [];
var movingstate = 0,ass_x_v=0.01,ass_y_v=-0.01,fl_in_vel=0.002;

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

	group.position.set(-4,2.8,0.01);
	group.scale.set( 0.2, 0.2, 1 );



	scene.add(group);
	camera.position.z = 3.5;

	console.log(laserobjects);
	// console.log(laserobjects[0].verticies)

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
	      new THREE.Vector3(-1, 0, 1)
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
				  	// console.log("HIT!");
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
					  	// console.log("HIT BLOCK!");
					  	// console.log(playervelocity_x);
					  	var t = rect.children[j].userData.vx; 
					  	rect.children[j].userData.vx = -rect.children[j].userData.vy;
					  	rect.children[j].userData.vy = t;
					  	// console.log(rect.children[j].userData.vy);
			      }
		  	}
		  }


		  for (var i=0;i<laserobjects.length;i++) {
		  	
		  		// console.log(group.position.x);
		  		// console.log(laserobjects[i].geometry.vertices[0].x);
		  			// console.log(i,laserobjects[i].permanentx1,laserobjects[i].permanenty1);
		  			var p_x1 = laserobjects[i].permanentx1;
		  			var p_y1 = laserobjects[i].permanenty1;
		  			var p_x2 = laserobjects[i].permanentx2;
		  			var p_y2 = laserobjects[i].permanenty2;
		  		if(group.position.x > laserobjects[i].geometry.vertices[0].x-0.1 && group.position.x < laserobjects[i].geometry.vertices[0].x+0.1) {
		  			console.log(i,laserobjects[i].permanentx1,laserobjects[i].permanenty1);
		  			var direction = laserobjects[i].direction;
		  			var start_y,start_x;	
		  			
		  			// console.log(i);
		  			// console.log(i,laserobjects[i].permanentx1,laserobjects[i].permanenty1);
		  			if(direction==0)
		  			{
		  				start_x = laserobjects[i].permanentx1;
		  				start_y = laserobjects[i].permanenty1;
			  			console.log(start_x,start_y);
		  			// console.log("SFDSDF");
	  			} else
		  			{
		  				start_x = laserobjects[i].permanentx2;
		  				start_y = laserobjects[i].permanenty2;
		  			}
		  			console.log(start_x,start_y);
		  			console.log("hit ray")
		  			scene.remove(laserobjects[i]);
		  			var material = new THREE.LineBasicMaterial({
					color: 0x0000ff,
					linewidth: 3
					});

					var geometry = new THREE.Geometry();
					geometry.vertices.push(
						new THREE.Vector3( start_x, start_y, 0 ),
						new THREE.Vector3( start_x, group.position.y, 0 )
					);

					var line = new THREE.LineSegments( geometry, material );
					line.direction = direction;
					console.log(i,p_x1,p_x2,p_y1,p_y2);
					line.permanentx1 = p_x1;
					line.permanenty1 = p_y1;
					line.permanentx2 = p_x2;
					line.permanenty2 = p_y2;
					laserobjects[i] = line;
					scene.add( laserobjects[i] );


		  		}
		  		else
		  		{
		  			scene.remove(laserobjects[i]);
		  			var material = new THREE.LineBasicMaterial({
					color: 0x0000ff,
					linewidth: 3
					});

					var geometry = new THREE.Geometry();
					geometry.vertices.push(
						new THREE.Vector3( p_x1, p_y1, 0 ),
						new THREE.Vector3( p_x2, p_y2, 0 )
					);

					var line = new THREE.LineSegments( geometry, material );
					line.direction = direction;
					// console.log(i,p_x1,p_x2,p_y1,p_y2);
					line.permanentx1 = p_x1;
					line.permanenty1 = p_y1;
					line.permanentx2 = p_x2;
					line.permanenty2 = p_y2;
					laserobjects[i] = line;
					scene.add( laserobjects[i] );

		  		}

		  }


		  	for (var i=0;i<rect.children.length;i++) {
		  		for (var j=0;j<laserobjects.length;j++) {
		  			laser_y1 = laserobjects[j].geometry.vertices[0].y;
		  			laser_y2 = laserobjects[j].geometry.vertices[1].y;
		  			// console.log(laser_y1);
		  			// console.log(laser_y2);

		  			if (laserobjects[j].geometry.vertices[0].x-0.1 <  rect.children[i].position.x && laserobjects[j].geometry.vertices[0].x+0.1 > rect.children[i].position.x) {
		  				// console.log("may hit")
		  				if ((rect.children[i].position.y > laser_y1 && rect.children[i].position.y > laser_y2) || (rect.children[i].position.y < laser_y1 && rect.children[i].position.y < laser_y2))
		  				{	
		  					
		  				} else
		  				{
		  					rect.remove(rect.children[i]);
		  				}

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

	if(cnt%70==0) {	// for adding a new square every second
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
	scene.add(rect);
	cnt++;
	group.position.x += playervelocity_x*(0.015);
	group.position.y += playervelocity_y*(0.015);
	renderer.render( scene, camera );
	for(var i=0;i<rect.children.length;i++) {
		scene.remove(rect.children[i]);
	}
}
