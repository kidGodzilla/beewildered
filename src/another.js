
var music;

var theCount = 0;

BasicGame.Another = function (game) {

	music = null;
	this.playButton = null;

};

BasicGame.Another.prototype = {

	create: function () {
            theCount = 0;

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		//music = this.add.audio('won');
		//music.play();

		this.add.sprite(0, 0, 'another');

		//this.playButton = this.add.button(60, 720, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
                this.input.onDown.add(this.startGame, this);
                

                //var sprite = this.add.sprite(220, 600, 'playButton');

                //sprite.anchor.setTo(0.5, 0.5);
                //sprite.alpha = 0;

                //this.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);



	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//music.stop();
                //alert('start!');
		//	And start the actual game
                theCount++;
                if(theCount > 3)
                {
                    this.state.start('Game');
                }

	}

};
