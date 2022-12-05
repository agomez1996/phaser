GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this.flagFirstMouseDown = false;               
    },
    preload: function() {
        game.load.image('fondo', 'assets/images/fondo.png');
        game.load.spritesheet('horse', 'assets/images/horse.png', 168, 156,);
        //las demas imagenes
        game.load.image('cometa', 'assets/images/cometa.png');     // 1 ********** 
        game.load.image('fishes', 'assets/images/fishes.png');   // 1 ********** 
        game.load.image('ovni1', 'assets/images/ovni1.png');
        game.load.image('nave','assets/images/nave.png');
        game.load.image('asteroide','assets/images/asteroide.png')
    },
    create: function() {
        game.add.sprite(0, 0, 'fondo');
        this.cometa = game.add.sprite(500,20,'cometa');          // 2 ********** 
        this.fishes = game.add.sprite(150, 150,'fishes');     // 2 ********** 
        this.ovni1 = game.add.sprite(400,350,'ovni1');
        this.nave = game.add.sprite(250,360,'nave');
        this.asteroide = game.add.sprite(250,180,'asteroide');

        this.horse = game.add.sprite(0,0,'horse');
        this.horse.frame = 0;
        this.horse.x = game.width;
        this.horse.y = game.height;
        this.horse.anchor.setTo(0.5);
        game.input.onDown.add(this.onTap, this);
        
    },
    onTap:function(){                      
          this.flagFirstMouseDown = true;  
    },                                     
    update: function() {
        if(this.flagFirstMouseDown){ 
            //para que las imagenes se muevan
            this.cometa.x--;           // 3 **********
            if(this.cometa.x<-300){    // 3 **********
                this.cometa.x = 1300;  // 3 **********
            }
            
            this.fishes.x+=0.3;        // 3 **********
            if(this.fishes.x>1300){    // 3 **********
                this.fishes.x = -300;  // 3 **********
            }
            
            this.asteroide.x+=0.6;
            if(this.asteroide.x>1300){
                this.asteroide.x = -300;
            }


            var pointerX = game.input.x;          
            var pointerY = game.input.y;           
          
            var distX = pointerX - this.horse.x;    
            var distY = pointerY - this.horse.y;   

            if(distX>0){ 
                this.horse.scale.setTo(1,1);           
            }else{       
                this.horse.scale.setTo(-1,1);          
            }
            this.horse.x += distX * 0.02;              
            this.horse.y += distY * 0.02;            
        }  
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
