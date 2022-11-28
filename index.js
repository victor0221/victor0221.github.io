//Char creator
window.onload = function(){
    //body
    var avatarBody = new Image();
    var avatarBodyNum = Math.floor(Math.random()*16)+1;
    var avatarBodyName ="avatar/" + "body" + avatarBodyNum + ".png";
    avatarBody.src = avatarBodyName;
    //background
    var avatarBackground = new Image();
    var avatarBackgroundNum = Math.floor(Math.random()*18)+1;
    var avatarBackgroundName ="avatar/" + "background" + avatarBackgroundNum + ".png";
    avatarBackground.src = avatarBackgroundName;
    //brows
    var avatarBrows = new Image();
    var avatarBrowsNum = Math.floor(Math.random()*10)+1;
    var avatarBrowsName ="avatar/" + "brows" + avatarBrowsNum + ".png";
    avatarBrows.src = avatarBrowsName;
    //eyes
    var avatarEyes = new Image();
    var avatarEyesNum = Math.floor(Math.random()*18)+1;
    var avatarEyesName ="avatar/" + "eyes" + avatarEyesNum + ".png";
    avatarEyes.src = avatarEyesName;
    //headpiece
    var avatarHeadpiece = new Image();
    var avatarHeadpieceNum = Math.floor(Math.random()*15)+1;
    var avatarHeadpieceName ="avatar/" + "headpiece" + avatarHeadpieceNum + ".png";
    avatarHeadpiece.src = avatarHeadpieceName;
    //mouth
    var avatarMouth = new Image();
    var avatarMouthNum = Math.floor(Math.random()*10)+1;
    var avatarMouthName ="avatar/" + "mouth" + avatarMouthNum + ".png";
    avatarMouth.src = avatarMouthName;

    //body
    avatarBody.onload = function(){
        buildAvatar()
    }
    //background
    avatarBackground.onload = function(){
        buildAvatar()
    }
    //brows
    avatarBrows.onload = function(){
        buildAvatar()
    }
    //eyes
    avatarEyes.onload = function(){
        buildAvatar()
    }
    //headpiece
    avatarHeadpiece.onload = function(){
        buildAvatar()
    }
    //mouth
    avatarMouth.onload = function(){
        buildAvatar()
    }

    function buildAvatar(){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 512;

        //background
        ctx.drawImage(avatarBackground,((512-avatarBackground.width)/2),0);
        //body
        ctx.drawImage(avatarBody,((512-avatarBody.width)/2),0);
        //brows
        ctx.drawImage(avatarBrows,((512-avatarBrows.width)/2),0);
        //Headpice
        ctx.drawImage(avatarHeadpiece,((512-avatarHeadpiece.width)/2),0);
        //eyes
        ctx.drawImage(avatarEyes,((512-avatarEyes.width)/2),0);
        //mouth
        ctx.drawImage(avatarMouth,((512-avatarMouth.width)/2),0);
    }
}

