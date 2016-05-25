var main = function () {
  var scene = new THREE.Scene();

  //カメラゾーン
 
  var width  = 880;
  var height = 480;
  var fov    =　5000;
  var aspect = width / height;
  var near   = 1;
  var far    = 6000;
  var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 500, 2000 );
  camera.rotation.set( -0.2,0,0);
 
  //レンダラーゾーン
  // document.getElementById('piano').appendChild(renderer.domElement);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById('piano').appendChild(renderer.domElement);

  //ライトゾーン
 
  var directionalLight = new THREE.DirectionalLight( 0xfaebd7 ,0.5);
  directionalLight.position.set( 0.577, -0.577, 0.577);
  scene.add( directionalLight );

  var directionalLight = new THREE.DirectionalLight( 0xfaebd7 ,0.5);
  directionalLight.position.set( -0.577, -0.577, 0.577);
  scene.add( directionalLight );


  var ambient = new THREE.AmbientLight(0x333333);
  scene.add(ambient);

  //マテリアル
  // var texture = THREE.ImageUtils.loadTexture( 'images/mokume.jpg' );
  // texture.anisotropy = renderer.getMaxAnisotropy();

  var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
  var material1 = new THREE.MeshLambertMaterial( { color: 0x696969 } );
  var mesh =  new THREE.CubeGeometry( 270, 1800, 170, 1000);
  var mesh1 = new THREE.CubeGeometry( 190, 1200, 170, 1000);


  var meshC = new THREE.Mesh( mesh ,material);
  meshC.rotation.x=180;
  
  var meshD = new THREE.Mesh( mesh ,material);
  meshD.rotation.x=180;

  var meshE = new THREE.Mesh( mesh ,material);
  meshE.rotation.x=180;

  var meshF = new THREE.Mesh( mesh, material);
  meshF.rotation.x=180;

  var meshG = new THREE.Mesh( mesh, material);
  meshG.rotation.x=180;

  var meshA = new THREE.Mesh( mesh, material);
  meshA.rotation.x=180;

  var meshB = new THREE.Mesh( mesh, material);
  meshB.rotation.x=180;

  var meshC8 = new THREE.Mesh( mesh, material);
  meshC8.rotation.x=180;

  

  var mesh1 = new THREE.Mesh( mesh1, material1);
  mesh1.rotation.x=180;
  scene.add( mesh1 );

  var mesh2 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000), material1);
  mesh2.position.set(600,-100,-1000);
  mesh2.rotation.x=180;
  scene.add( mesh2);

  var mesh3 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000) ,material1);
  mesh3.position.set(0,-100,-1000);
  mesh3.rotation.x=180;
  scene.add( mesh3 );

  var mesh4 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000) ,material1);
  mesh4.position.set(-300,-100,-1000);
  mesh4.rotation.x=180;
  scene.add( mesh4 );

  var mesh5 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000), material1);
  mesh5.position.set(-600,-100,-1000);
  mesh5.rotation.x=180;
  scene.add( mesh5 );

  function　render() {
    renderer.render( scene, camera );
  }

  render();


  //鍵盤とキーボードを連動

var input_key_buffer = new Array();

document.onkeydown = function (e){
  if(!e) e = window.event; // レガシー
  input_key_buffer[e.keyCode] = true;
};

document.onkeyup = function (e){
  if(!e) e = window.event; // レガシー
  input_key_buffer[e.keyCode] = false;
};

window.onblur = function (){
  input_key_buffer.length = 0;
};

function KeyIsDown(key_code){
  if(input_key_buffer[key_code])  return true;
  // return false;
}

function KeyIsUp(key_code){
  if(input_key_buffer[key_code]) return false;
  // return true;
}

//id取得
  
  var _c = document.getElementById("C");
  var _d = document.getElementById("D");
  var _e = document.getElementById("E");
  var _f = document.getElementById("F");
  var _g = document.getElementById("G");
  var _a = document.getElementById("A");
  var _b = document.getElementById("B");
  var _c8 = document.getElementById("C8");

  var _c2 = document.getElementById("Cs");
  var _d2 = document.getElementById("Ds");
  var _f2 = document.getElementById("Fs");
  var _g2 = document.getElementById("Gs");
  var _a2 = document.getElementById("As");

setInterval(function (){

  if(KeyIsDown(65) || click(_c)){
     _c.classList.add('pushed');
     meshC.position.set(1050,130,-1000);
     scene.add( meshC );
     render();

  }else{
    _c.classList.remove('pushed');
    meshC.position.set(1050,100,-950);
    scene.add( meshC );
    render();
  }

  if(KeyIsDown(83)){
    _d.classList.add('pushed');
    meshD.position.set(750,130,-1000);
    scene.add( meshD );
    render();
  }else{
    _d.classList.remove('pushed');
    meshD.position.set(750,100,-950);
    scene.add( meshD );
    render();
  }

  if(KeyIsDown(68)){
    _e.classList.add('pushed');
    meshE.position.set(450,130,-1000);
    scene.add( meshE );
    render();

  }else{
    _e.classList.remove('pushed');
    meshE.position.set(450,100,-950);
    scene.add( meshE );
    render();
  }

  if(KeyIsDown(70)){
    _f.classList.add('pushed');
    meshF.position.set(150,130,-1000);
    scene.add( meshF );
    render();
  }else{
    _f.classList.remove('pushed');
    meshF.position.set(150,100,-950);
    scene.add( meshF);
    render();
  }

  if(KeyIsDown(74)){
    _g.classList.add('pushed');
    meshG.position.set(-150,130,-1000);
    scene.add( meshG );
    render();
  }else{
    _g.classList.remove('pushed');
    meshG.position.set(-150,100,-950);
    scene.add( meshG);
    render();
  }

  if(KeyIsDown(75)){
    _a.classList.add('pushed');
    meshA.position.set(-450,130,-1000);
    scene.add( meshA );
    render();
  }else{
    _a.classList.remove('pushed');
    meshA.position.set(-450,100,-950);
    scene.add( meshA);
    render();
  }

  if(KeyIsDown(76)){
    _b.classList.add('pushed');
    meshB.position.set(-750,130,-1000);
    scene.add( meshB );
    render();

  }else{
    _b.classList.remove('pushed');
    meshB.position.set(-750,100,-950);
    scene.add( meshB);
    render();
  }

  if(KeyIsDown(186)){
    _c8.classList.add('pushed');
    meshC8.position.set(-1050,130,-1000);
    scene.add( meshC8 );
    render();

  }else{
    _c8.classList.remove('pushed');
    meshC8.position.set(-1050,100,-950);
    scene.add( meshC8);
    render();
  }



  if(KeyIsDown(87)){
    _c2.classList.add('pushed');
    mesh1.position.set(900,-70,-1050);
    scene.add( mesh1);
    render();

  }else{
    _c2.classList.remove('pushed');
    mesh1.position.set(900,-100,-1000);
    scene.add( mesh1);
    render();
  }

  if(KeyIsDown(69)){
    _d2.classList.add('pushed');
    mesh2.position.set(600,-70,-1050);
    scene.add( mesh2);
    render();
  }else{
    _d2.classList.remove('pushed');
    mesh2.position.set(600,-100,-1000);
    scene.add( mesh2);
    render();
  }

  if(KeyIsDown(84)){
    _f2.classList.add('pushed');
    mesh3.position.set(0,-70,-1050);
    scene.add( mesh3);
    render();
  }else{
    _f2.classList.remove('pushed');
    mesh3.position.set(0,-100,-1000);
    scene.add( mesh3);
    render();
  }

  if(KeyIsDown(73)){
    _g2.classList.add('pushed');
    mesh4.position.set(-300,-70,-1050);
    scene.add( mesh4);
    render();
  }else{
    _g2.classList.remove('pushed');
    mesh4.position.set(-300,-100,-1000);
    scene.add( mesh4);
    render();
  }

  if(KeyIsDown(79)){
    _a2.classList.add('pushed');
    mesh5.position.set(-600,-70,-1050);
    scene.add( mesh5);
    render();

  }else{
    _a2.classList.remove('pushed');
    mesh5.position.set(-600,-100,-1000);
    scene.add( mesh5);
    render();
  }
},1000/30);

scene.add( meshC );

// DOM操作
function click(x){
    x.addEventListener('mousedown', function(){
      return true;
  },false);
}






};
 
window.addEventListener( 'DOMContentLoaded', main, false );


