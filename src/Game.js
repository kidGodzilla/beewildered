var bg1;
var bg2;
var bg2b;
var bg3;
var bg3b;
var bg4;
var bg4b;
var bg5;
var bg5b;
var bg6;
var bg6b;
var bee;
var jump_sound;
var trees;
var hasTrees = 0;
var tree1;
var tree2;
var tree3;
var canTap = 1;
var f1;
var f2;
var f3;
var slurp_sound;
var play_slurp = 0;
var score = 0;
var label_score;
var bird;
var won;
var prevScore;

BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {

            //	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
            canTap = 1;
            score = 0;
            bg1 = this.game.add.sprite(0, 0, 'bg1');
            bg2 = this.game.add.sprite(0, 0, 'bg2');
            bg2b = this.game.add.sprite(1536, 0, 'bg2');
            bg3 = this.game.add.sprite(0, 0, 'bg3');
            bg3b = this.game.add.sprite(1536, 0, 'bg3');
            bg4 = this.game.add.sprite(0, 0, 'bg4');
            bg4b = this.game.add.sprite(1536, 0, 'bg4');
            bg5 = this.game.add.sprite(0, 0, 'bg5');
            bg5b = this.game.add.sprite(1536, 0, 'bg5');
            bg6 = this.game.add.sprite(0, 0, 'bg6');
            bg6b = this.game.add.sprite(1536, 0, 'bg6');
            
            
            //this.timer = this.game.time.events.loop(4300, this.add_tree, this);
            this.timer = this.game.time.events.loop(1400, this.play_slurp, this);
            
            

            this.physics.enable(bg2, Phaser.Physics.ARCADE);
            this.physics.enable(bg3, Phaser.Physics.ARCADE);
            this.physics.enable(bg4, Phaser.Physics.ARCADE);
            this.physics.enable(bg5, Phaser.Physics.ARCADE);
            this.physics.enable(bg6, Phaser.Physics.ARCADE);
            this.physics.enable(bg2b, Phaser.Physics.ARCADE);
            this.physics.enable(bg3b, Phaser.Physics.ARCADE);
            this.physics.enable(bg4b, Phaser.Physics.ARCADE);
            this.physics.enable(bg5b, Phaser.Physics.ARCADE);
            this.physics.enable(bg6b, Phaser.Physics.ARCADE);

            bg2.body.velocity.x=-40;
            bg3.body.velocity.x=-80;
            bg4.body.velocity.x=-120;
            bg5.body.velocity.x=-160;
            bg6.body.velocity.x=-200;
            bg2b.body.velocity.x=-40;
            bg3b.body.velocity.x=-80;
            bg4b.body.velocity.x=-120;
            bg5b.body.velocity.x=-160;
            bg6b.body.velocity.x=-200;
            
            
            bee = this.game.add.sprite(240, 340, 'bee');
            //this.game.input.onDown.add(this.jump, this);
            //this.bird = this.game.add.sprite(100, 245, 'bird');
            this.physics.enable(bee, Phaser.Physics.ARCADE);
            bee.body.gravity.y = 1000; 
             // Change the anchor point of the bird
            bee.anchor.setTo(-0.2, 0.5);
            
            this.game.input.onDown.add(this.jump, this);
            
            jump_sound = this.game.add.audio('jump');
            slurp_sound = this.game.add.audio('slurp');
            
            var extra = Math.floor(Math.random()*250)+1;
            tree1 = this.game.add.sprite(1024, 250 + extra, 'tree');
            col1 = this.game.add.sprite(1060, 420 + extra, 'collide');
            this.physics.enable(tree1, Phaser.Physics.ARCADE);
            this.physics.enable(col1, Phaser.Physics.ARCADE);
            tree1.body.velocity.x = -160;
            col1.body.velocity.x = -160;
            var extra = Math.floor(Math.random()*250)+1;
            tree2 = this.game.add.sprite(2500, 250 + extra, 'tree');
            col2 = this.game.add.sprite(2560, 420 + extra, 'collide');
            this.physics.enable(tree2, Phaser.Physics.ARCADE);
            this.physics.enable(col2, Phaser.Physics.ARCADE);
            tree2.body.velocity.x = -160;
            col2.body.velocity.x = -160;
            var extra = Math.floor(Math.random()*250)+1;
            tree3 = this.game.add.sprite(4100, 250 + extra, 'tree');
            col3 = this.game.add.sprite(4160, 420 + extra, 'collide');
            this.physics.enable(tree3, Phaser.Physics.ARCADE);
            this.physics.enable(col3, Phaser.Physics.ARCADE);
            tree3.body.velocity.x = -160;
            col3.body.velocity.x = -160;
            
            hasTrees = 1;
            
            
            var extra = Math.floor(Math.random()*100)+1;
            f1 = this.game.add.sprite(1400, 550 + extra, 'f1');
            this.physics.enable(f1, Phaser.Physics.ARCADE);
            f1.body.velocity.x = -160;
            
            var extra = Math.floor(Math.random()*100)+1;
            f2 = this.game.add.sprite(1900, 550 + extra, 'f2');
            this.physics.enable(f2, Phaser.Physics.ARCADE);
            f2.body.velocity.x = -160;
            
            var extra = Math.floor(Math.random()*100)+1;
            f3 = this.game.add.sprite(2700, 550 + extra, 'f3');
            this.physics.enable(f3, Phaser.Physics.ARCADE);
            f3.body.velocity.x = -160;
            
            var extra = Math.floor(Math.random()*410)+1;
            bird = this.game.add.sprite(2700, 100 + extra, 'bird');
            this.physics.enable(bird, Phaser.Physics.ARCADE);
            bird.body.velocity.x = -1000;
          
           //won = this.add.audio('won');
          
        var style = { font: "30px Arial", fill: "#ffffff" };
        label_score = this.game.add.text(20, 20, "0", style);
            


	},
        jump: function() {
            // if the bird hit a pipe, no jump
            if (!canTap)
            {
                return; 
            }

            bee.body.velocity.y = -460;

            // Animation to rotate the bird
            this.game.add.tween(bee).to({angle: -20}, 100).start();

            // Play a jump sound
            jump_sound.play();
        },
        add_tree: function() {
            var extra = Math.floor(Math.random()*250)+1;
            
            //tree = this.game.add.sprite(1024, 250 + extra, 'tree');
            //this.physics.enable(tree, Phaser.Physics.ARCADE);
            //tree.body.velocity.x=-160;
            
            var tree = trees.getFirstDead();
            tree.reset(1024, 250 + extra);
            this.physics.enable(tree, Phaser.Physics.ARCADE);
            tree.body.velocity.x = -160; 
            tree.outOfBoundsKill = true;
            hasTrees = 1;
            //this.score += 1;
            //this.label_score.content = this.score;  
        },

	update: function () {

		//Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
                //console.log(bg2.body.y);
                if (bg2.position.x <= -1536) {
                    bg2.position.x = 1535;
                }
                if (bg3.position.x <= -1536) {
                    bg3.position.x = 1535;
                }
                if (bg4.position.x <= -1536) {
                    bg4.position.x = 1535;
                }
                if (bg5.position.x <= -1536) {
                    bg5.position.x = 1530;
                }
                if (bg6.position.x <= -1536) {
                    bg6.position.x = 1535;
                }
                if (bg2b.position.x <= -1536) {
                    bg2b.position.x = 1535;
                }
                if (bg3b.position.x <= -1536) {
                    bg3b.position.x = 1535;
                }
                if (bg4b.position.x <= -1536) {
                    bg4b.position.x = 1535;
                }
                if (bg5b.position.x <= -1536) {
                    bg5b.position.x = 1530;
                }
                if (bg6b.position.x <= -1536) {
                    bg6b.position.x = 1535;
                }
                
                // Make the bird slowly rotate downward
                if (bee.angle < 20)
                {
                    bee.angle += 1;
                }
                
                if (bee.inWorld == false)
                {
                    this.restart_game(); 
                }
                
                //this.game.physics.overlap(bee, trees, null, null, this);
                //this.game.physics.collide(bee, trees, this.restart_game, null, this);
                //trees.body.collideWorldBounds = true;
                
                if(tree1.position.x < -3200)
                {
                    tree1.position.x = 1024;
                    col1.position.x = 1060;
                }
                if(tree2.position.x < -3200)
                {
                    tree2.position.x = 1024;
                    col2.position.x = 1060;
                }
                if(tree3.position.x < -3200)
                {
                    tree3.position.x = 1024;
                    col3.position.x = 1060;
                }
                
                if(checkOverlap(bee,col1))
                {
                    //this.restart_game();
                    canTap = 0;
                }
                if(checkOverlap(bee,col2))
                {
                    //this.restart_game();
                    canTap = 0;
                }
                if(checkOverlap(bee,col3))
                {
                    //this.restart_game();
                    canTap = 0;
                }

                if(f1.position.x < -600)
                {
                    f1.position.x = 1024;
                }
                if(f2.position.x < -600)
                {
                    f2.position.x = 1024;
                }
                if(f3.position.x < -600)
                {
                    f3.position.x = 1024;
                }  
                
                
                if(checkOverlap(bee,f1))
                {
                    play_slurp = 1;
                }
                if(checkOverlap(bee,f2))
                {
                    play_slurp = 1;
                }
                if(checkOverlap(bee,f3))
                {
                    play_slurp = 1;
                }
                
                if(bird.position.x < -9900)
                {
                    var extra = Math.floor(Math.random()*410)+1;
                    bird.position.x = 2100;
                    bird.position.y = 100;
                }
                
                if(checkOverlap(bee,bird))
                {
                    //this.restart_game();
                }
                
                if(score >= 10)
                {
                    prevScore += score;
                    score = 0;
                    //music.stop();
                    //won.play();
                    this.game.state.start('Another');
                    //var beegee = this.game.add.sprite(0, 0 + extra, 'another');
                    
                }
                

	},
        restart_game: function() {
            //this.game.time.events.remove(this.timer);
            this.game.state.start('Game');
            prevScore = 0;
        },
        play_slurp: function() {
            if(play_slurp)
            {
                slurp_sound.play();  
                score +=1;
                label_score.setText(score);  
                play_slurp = 0;
            }
        },

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.
		//	Then let's go back to the main menu.
		this.state.start('MainMenu');
	}

};


function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}
