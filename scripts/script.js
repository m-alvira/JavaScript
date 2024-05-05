
    
    let sect=document.querySelector('section');
    let para=document.createElement('p');
    para.textContent="JavaScript is fun!";
    sect.appendChild(para);

    para.style.color='red'
    para.style.background='yellow'
    para.style.padding='10px'
    para.style.width='250px'
    para.style.textAlign='center'
    
    let button = document.getElementById('myButton');
    let button2 = document.getElementById('myButton2');
    
    myButton.addEventListener('click', function(){
    
        console.log('clicked!');
        document.body.style.background = 'purple';
        
    });

    myButton2.addEventListener('click', function(){
    
        console.log('clicked!');
        document.body.style.background = 'white';

    });
