

let text = document.getElementById('text');

function fontFamily(){

    let fontFamily = document.getElementsByName('fontFamily');

    for (let i = 0; i <fontFamily.length ; i++) {
        if(fontFamily[i].checked){
            text.style.fontFamily = fontFamily[i].value;
        }
    }
}

function textAlign(){

    let textAlign = document.getElementsByName('textAlign');

    for (let i = 0; i <textAlign.length ; i++) {
        if(textAlign[i].checked){
            text.style.textAlign = textAlign[i].value;
        }

    }

}

function lineHeigh(){

    let lineHeigh = document.getElementsByName('lineHeigh');

    for (let i = 0; i <lineHeigh.length ; i++) {
        if(lineHeigh[i].checked){
            text.style.lineHeight = lineHeigh[i].value;
        }

    }

}

function letterSpacing(){

    let letterSpacing = document.getElementsByName('letterSpacing');

    for (let i = 0; i <letterSpacing.length ; i++) {
        if(letterSpacing[i].checked){
            text.style.letterSpacing = letterSpacing[i].value;
        }

    }

}

function textTransform(){

    let textTransform = document.getElementsByName('textTransform');

    for (let i = 0; i < textTransform.length; i++) {

        if(textTransform[i].checked){

            text.style.textTransform = textTransform[i].value;
        }

    }
}

function borderStyle(){

    let borderStyle = document.getElementsByName('borderStyle');

    for (let i = 0; i < borderStyle.length ; i++) {

        if (borderStyle[i].checked){

            text.style.borderStyle = borderStyle[i].value;
        }
    }
}

function backgroundColor(){

    let backgroundColor = document.getElementsByName('backgroundColor');

    for (let i = 0; i < backgroundColor.length; i++) {

        if (backgroundColor[i].checked){
            text.style.backgroundColor = backgroundColor[i].value;
        }
    }
}