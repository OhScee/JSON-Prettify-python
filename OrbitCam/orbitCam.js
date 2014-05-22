var scene, camera, renderer, cube;
var centerCube;

init();
render();

function init(){
	scene = new THREE.Scene();

	//camera
	camera =  new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	//renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	//cube object
	var geometry = new THREE.CubeGeometry(5,5,6);
	var material = new THREE.MeshLambertMaterial({color: 0xF23A11 });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	//get center of cube
	/*var centerX = 0.5 * (geometry.boundingBox.x[1] - geometry.boundingBox.x[0]);
	var centerY = 0.5 * (geometry.boundingBox.y[1] - geometry.boundingBox.y[0]);
	var centerZ = 0.5 * (geometry.boundingBox.z[1] - geometry.boundingBox.z[0]);
	centerCube = new THREE.vector(centerX, centerY, centerZ);*/

	//another shape
	var cube2 = new THREE.Mesh(new THREE.CubeGeometry(2,2,2), new THREE.MeshLambertMaterial({color: 0x56BDBF}) );
	cube2.position.set(-5, 1, -16);
	cube2.rotation.x = 2;
	cube2.rotation.y = 1;
	scene.add(cube2);

	//positioning camera
	camera.position.set(-2, 0, 12);

	//camera targets first cube
	//camera.target.position.copy(cube.position);
	//camera.target.position.addSelf(centerCube);

	//lighting
	var light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(-5,4,10);
	scene.add(light);
	var ambient = new THREE.AmbientLight(0xB56553);
	scene.add(ambient);

}

function render(){
	requestAnimationFrame(render);
	animate();
	renderer.render(scene, camera);
}

rotSpeed = .02;
function animate(){
	//camera moves in a circle
	var x = camera.position.x,
    	y = camera.position.y,
        z = camera.position.z;

    camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
    camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed); 
}