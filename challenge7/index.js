let container = document.querySelector('.frame');


for (let squares = 0; squares < 6; squares++){
        let div = document.createElement('div');
        div.className = 'center div-'+(squares+1);
        div.style.width =  (squares* 7) + 15 + 'px';
        div.style.height = (squares* 7) + 15 + 'px';	
        div.style.transform = 'translate(-50%,-50%) scale(0.3) ';
        div.style.transformOrigin = 'center center';
        div.style.opacity = 0.2 + squares*0.1;
        container.appendChild(div);
}
