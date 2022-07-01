function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function setupout(elname, outclickfunc){
    css(document.querySelector(".pagefilm"), {
        "z-index":"100",
        "display":"block"
    });
    css(document.querySelector(elname), {
        "z-index":"101"
    });
    document.querySelector('.pagefilm').onclick = function(){
        cancelsetout(elname);
        outclickfunc();
    }
}
function cancelsetout(elname){
    css(document.querySelector(".pagefilm"), {
        "z-index":"0",
        "display":"none"
    });
    css(document.querySelector(elname), {
        "z-index":"1"
    });
}


var fdropDown = document.querySelector("#first-drop .ent-text.dropdown, #first-drop .opensvg");
let dropfunc = function(){
    css(document.querySelector("#first-drop .entry-items"), {
        'display':'block'
    });

    var elements = document.querySelectorAll("#first-drop .entry-items .item");
    elements.forEach(element => {
        element.addEventListener("click", function(e) {
            document.querySelector("#first-drop .ent-text.dropdown").innerText = e.target.innerText;
            fdropDown.onclick = dropfunc;//Reassigns the function
            cancelsetout('#first-drop'); // Terminates the listening from the pagefilm
            outclick();//A function for what happens when outside is clicked, it is passed as a parameter to setupOut
        });
    });

    let outclick = function(){
        css(document.querySelector("#first-drop .entry-items"), {
            'display':'none'
        });
    }
    setupout("#first-drop", outclick);
}
fdropDown.onclick = dropfunc;



var sdropDown = document.querySelector("#second-drop .ent-text.dropdown, #second-drop .opensvg");
let sdropfunc = function(){
    css(document.querySelector("#second-drop .entry-items"), {
        'display':'block'
    });

    var elements = document.querySelectorAll("#second-drop .entry-items .item");
    elements.forEach(element => {
        element.addEventListener("click", function(e) {
            document.querySelector("#second-drop .ent-text.dropdown").innerText = e.target.innerText;
            sdropDown.onclick = sdropfunc;//Reassigns the function
            cancelsetout('#second-drop'); // Terminates the listening from the pagefilm
            outclick();//A function for what happens when outside is clicked, it is passed as a parameter to setupOut
        });
    });

    let outclick = function(){
        css(document.querySelector("#second-drop .entry-items"), {
            'display':'none'
        });
    }
    setupout("#second-drop", outclick);
}
sdropDown.onclick = sdropfunc;


let opener = document.querySelector(".openside");
opener.onclick = function(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style['left'] = '0';
    css(document.querySelector(".pagefilm"), {
        'background-color': 'black',
        'opacity':'0.2'
    });

    let outclick = function(){
        css(document.querySelector(".sidebar"), {
            'left':'-100%'
        });
        css(document.querySelector(".pagefilm"), {
            'background-color': 'unset',
            'opacity':'0'
        });
    }
    setupout(".sidebar", outclick);// means set the sidebar as focused
}