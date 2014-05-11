
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'titlepage');
		this.preloadBar = this.add.sprite(195, 630, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
		//this.load.image('titlepage', 'images/title.jpg');
		this.load.image('playButton', 'images/tap.png');
		this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		//this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		//	+ lots of other required assets here
                
                //Background assets
                this.game.load.image('bg1', 'images/layer-1.png');
                this.game.load.image('bg2', 'images/layer-2.png');
                this.game.load.image('bg3', 'images/layer-3.png');
                this.game.load.image('bg4', 'images/layer-4.png');
                this.game.load.image('bg5', 'images/layer-5.png');
                this.game.load.image('bg6', 'images/layer-6.png');
                this.game.load.image('tree', 'images/tree.png');
                this.game.load.image('bee', 'images/bee.png');
                this.game.load.image('f1', 'images/f1.png');
                this.game.load.image('f2', 'images/f2.png');
                this.game.load.image('f3', 'images/f3.png');
                this.game.load.image('bird', 'images/bird.png');
                this.game.load.image('another', 'images/another.png');
                this.game.load.image('collide', 'images/collide.png');
                this.game.load.audio('jump', 'audio/jump.wav');
                this.game.load.audio('slurp', 'audio/slurp.mp3');
                //this.game.load.audio('won', 'audio/won.mp3');

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
                        //alert('preloading complete');
			this.state.start('MainMenu');
		}

	}

};
