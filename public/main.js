
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload:preload, create:create, update:update});

function preload(){
  game.load.image('contra', '/img/contra2.png');
  game.load.image('shock', '/img/shocktroopers_toy2.png');
  game.load.image('shock2', '/img/shocktroopers_toy.png');
  game.load.image('dwiz', '/img/dragonwiz.png');
}
var s4,
    text;

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);

  var s1 = game.add.sprite(50,10, 'contra'),
      s2 = game.add.sprite(500,50, 'shock'),
      s3 = game.add.sprite(50, 300, 'shock2');
  s4 = game.add.sprite(game.world.centerX, game.world.centerY, 'dwiz');

  game.physics.arcade.enable(s1);
  game.physics.arcade.enable(s2);
  game.physics.arcade.enable(s3);
  game.physics.arcade.enable(s4);
  s4.anchor.set(0.5);

  text = "- phaser -\n with a sprinkle of \n pixi dust.";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" },
      t = game.add.text(game.world.centerX-300, 0, text, style),
      tween = game.add.tween(s1);

  tween.to({ x: 600 }, 6000);
  tween.start();
}

function update(){
  if (game.physics.arcade.distanceToPointer(s4, game.input.activePointer) > 8){
    game.physics.arcade.moveToPointer(s4, 300);
  }else{
    s4.body.velocity.set(0);
  }
}
