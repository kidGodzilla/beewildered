
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
		this.music.play();

		this.add.sprite(0, 0, 'titlepage');

		//this.playButton = this.add.button(60, 720, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
                this.input.onDown.add(this.startGame, this);
                

                var sprite = this.add.sprite(220, 600, 'playButton');

                //sprite.anchor.setTo(0.5, 0.5);
                sprite.alpha = 0;

                this.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);



	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();
                //alert('start!');
		//	And start the actual game
		this.state.start('Game');

	}

};
