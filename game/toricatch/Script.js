enchant();

window.onload=function(){
    const game = new Game(400,500);

    //画像ファイル等の読み込み

    //クリック音
    const clickSndUrl = "click.wav";
    game.preload([clickSndUrl]);

    //bgm
    const bgmUrl = "bgm.mp3";
    game.preload([bgmUrl]);

    //キャラ１画像
    const charImg1Url = "inko.png";
    game.preload([charImg1Url]);

    //背景雲画像
    const cloudImgUrl = "cloud.png";
    game.preload([cloudImgUrl]);

    //リトライボタン
	const retryImgUrl = "retry.png";
	game.preload([retryImgUrl]);

	//ツイートボタン
	const tweetImgUrl = "tweet.png";
	game.preload([tweetImgUrl]);

    const rankingImgUrl = "ranking.png";
	game.preload([rankingImgUrl]);


    game.onload=function(){

        let point = 0;
        let state = 0;
        initFlag = false;


        const mainScene = new Scene();
        game.pushScene(mainScene);
        mainScene.backgroundColor = '#a0d8ef';

        const scoreText = new Label();
        scoreText.font = "20px Meiryo";
        scoreText.color = 'rgba(255,255,255,1)';
        scoreText.width = 400;
        scoreText.moveTo(0,30);
        mainScene.addChild(scoreText);

        scoreText.text = "現在：" + point;

        //背景
        const cloudImg = new Sprite(100,50);
        cloudImg.moveTo(50,70);
        cloudImg.image = game.assets[cloudImgUrl];
        mainScene.addChild(cloudImg);

        const cloudImg2 = new Sprite(100,50);
        cloudImg2.moveTo(250,130);
        cloudImg2.image = game.assets[cloudImgUrl];
        mainScene.addChild(cloudImg2);

        //inkoボタン
        const inkoImg = new Sprite(100,100);
        inkoImg.moveTo(118,100);
        inkoImg.image = game.assets[charImg1Url];
        mainScene.addChild(inkoImg);

        inkoImg.ontouchend = function(){
            point++;
            game.assets[clickSndUrl].clone().play();

            this.x = -200;

            if(point < 3){
                state = 1;
            }else if(point < 6){
                state = 2;
            }else if(point < 9){
                state = 3;
            }else if(point < 12){
                state = 4;
            }else if(point < 15){
                state = 5;
            }else if(point < 18){
                state = 6;
            }else if(point < 21){
                state = 7;
            }else if(point < 24){
                state = 8;
            }else if(point < 27){
                state = 9;
            }else if(point < 30){
                state = 10;
            }else if(point < 33){
                state = 11;
            }else if(point < 36){
                state = 12;
            }else if(point < 39){
                state = 13;
            }else if(point < 42){
                state = 14;
            }else if(point < 45){
                state = 15;
            }else if(point < 48){
                state = 16;
            }else if(point < 51){
                state = 17;
            }else{
                state = 18;
            }
        };

        game.onenterframe = function(){

            if(state == 0){
                inkoImg.x = -200;
                inkoImg.y = 100;
                point = 0;
                state = 1;
            }
            if(state == 1){
                inkoImg.x += 5;
            }
            if(state == 2){
                inkoImg.x += 15;
            }
            if(state == 3){
                inkoImg.y = Math.random()*400;
                state = 3.1;
            }
            if(state == 3.1){
                inkoImg.x += 10;
            }
            if(state == 4){
                inkoImg.y = Math.random()*400;
                state = 4.1;
            }
            if(state == 4.1){
                inkoImg.x += 15;
            }
            if(state == 5){
                inkoImg.x += 15;
                inkoImg.y =250 + Math.cos(inkoImg.x/200)*150;
            }
            if(state == 6){
                inkoImg.x += 10;
                inkoImg.y = 100 + Math.sin(inkoImg.x/50)*80;
            }
            if(state == 7){
                inkoImg.x += 10;
                inkoImg.y =200 + Math.sin(inkoImg.x/100)*100;
            }
            if(state == 8){
                inkoImg.x += 13;
                inkoImg.y = 100 + Math.sin(inkoImg.x/70)*90;
            }
            if(state == 9){
                inkoImg.x += 25;
                inkoImg.y = 200;
            }
            if(state == 10){
                inkoImg.x += 8;
                inkoImg.y =200 + Math.tan(inkoImg.x/100)*30;
            }
            if(state == 11){
                inkoImg.x += 15;
                inkoImg.y =100 + Math.tanh(inkoImg.x/100)*300;
            }
            if(state == 12){
                inkoImg.x += 20;
                inkoImg.y =100 + Math.cos(inkoImg.x/200)*150;
            }
            if(state == 13){
                inkoImg.x += 15;
                inkoImg.y =200 + Math.atan(inkoImg.x/-20)*100;
            }
            if(state == 14){
                inkoImg.x += 5;
                inkoImg.y =200 + Math.cos(inkoImg.x/50)*400;
            }
            if(state == 15){
                inkoImg.x += 8;
                inkoImg.y =100 + Math.tan(inkoImg.x/50)*30;
            }
            if(state == 16){
                inkoImg.x += 15;
                inkoImg.y =100 + Math.sin(inkoImg.x/100)*300;
            }
            if(state == 17){
                inkoImg.x += 15;
                inkoImg.y =100 + Math.cos(inkoImg.x/10)*100;
            }
            if(state == 18){
                inkoImg.x += 10;
                inkoImg.y = Math.random()*400;
            }


            scoreText.text = "現在:" + point;

            if(inkoImg.x >= 400 && initFlag == false){

                game.popScene();
                game.pushScene(endScene);

                gameOverText.text = "GAMEOVER 記録：" + point + "羽";

                initFlag = true;

            }
        };

        const endScene = new Scene();
        endScene.backgroundColor = "blue";

        const gameOverText = new Label();
        gameOverText.font = "20px Meiryo";
        gameOverText.color = 'rgba(255,255,255,1)';
        gameOverText.width = 400;
        gameOverText.moveTo(0,30);
        endScene.addChild(gameOverText);

        const retryBtn = new Sprite(120,60);
        retryBtn.moveTo(50,200);
        retryBtn.image = game.assets[retryImgUrl];
        endScene.addChild(retryBtn);

        retryBtn.ontouchend = function(){
            state = 0;
            initFlag = false;
            game.popScene();
            game.pushScene(mainScene);
        };

        const tweetBtn = new Sprite(120,60);
        tweetBtn.moveTo(230,200);
        tweetBtn.image = game.assets[tweetImgUrl];
        endScene.addChild(tweetBtn);

        tweetBtn.ontouchend = function(){
            const url = encodeURI("http://www.marooom.com/game/toricatch/index.html");
			window.open("http://twitter.com/intent/tweet?text=" + point + "羽捕まえたよ！&hashtags=toricatch&url=" + url);
        };

        const formText = new Label();
        formText.text = "名前を入力してランキングに登録しよう！";
        formText.font = "20px Meiryo";
        formText.color = 'rgba(255,255,255,1)';
        formText.width = 400;
        formText.moveTo(0,320);
        endScene.addChild(formText);

        const formText2 = new Label();
        formText2.text = "お名前";
        formText2.font = "15px Meiryo";
        formText2.color = 'rgba(255,255,255,1)';
        formText2.width = 400;
        formText2.moveTo(0,355);
        endScene.addChild(formText2);

        const formText3 = new Label();
        formText3.text = "登録する→";
        formText3.font = "15px Meiryo";
        formText3.color = 'rgba(255,255,255,1)';
        formText3.width = 400;
        formText3.moveTo(215,355);
        endScene.addChild(formText3);

        var input = new Entity();
        input._element = document.createElement('input');
        input._element.setAttribute('id','e_name');
        input._element.setAttribute('type','text');
        input._element.setAttribute('maxlength','10');
        input.width = 150;
        input.height = 20;
        input.x = 50;
        input.y = 350;
        endScene.addChild(input);

        const button = new Entity();
        button._element = document.createElement('button');
        button.width = 40;
        button.height = 25;
        button.x = 295;
        button.y = 350;
        endScene.addChild(button);

        button.ontouchend = function(){
            submit(point);
            point=0;
        };

    };

    game.start();//開始！
};