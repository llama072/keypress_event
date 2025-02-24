window.addEventListener('DOMContentLoaded', ()=>{
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const demoSpan = document.createElement('span');
    demoSpan.id = 'demo';

    const textarea = document.createElement('textarea');
    textarea.name = 'area';
    textarea.id = 'area';
    textarea.placeholder = 'Ird be a jelszavad';

    containerDiv.append(demoSpan, textarea)

    console.log(containerDiv);
    
    document.body.append(containerDiv);


});