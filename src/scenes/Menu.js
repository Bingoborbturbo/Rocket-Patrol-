class Menu extends Phaser.Scene {
    constructor(){
        //yay
        super("menuScene");

    }

    preload() {
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // text is displayed
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        let textSpacer = 64;

        this.add.text(centerX , centerY - textSpacer , 'ROCKET PATROL' , menuConfig).setOrigin(.5);
        this.add.text(centerX , centerY , 'Use Left & Right to move & Q to Fire', menuConfig).setOrigin(.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX , centerY + textSpacer , 'Press Z for Easy or X for Hard' , menuConfig).setOrigin(.5);

        console.log(this);
        this.add.text(20,20, "Rocket Patrol Menu");
    
        // launches the scene
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyZ)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene"); 
        }

        if(Phaser.Input.Keyboard.JustDown(keyX)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 5,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene"); 
        }
    }
}