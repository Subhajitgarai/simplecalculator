let input = document.getElementById('inputbox');
let btn = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btn);

arr.forEach(button => {
    button.addEventListener('click',(e)=> {//When button is clicked
        if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'AEC') {
            string = "";
            input.value = string;
        } else if(e.target.innerHTML=='DEL')
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
