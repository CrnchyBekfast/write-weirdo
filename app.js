const display = document.getElementById("preview");
const textarea= document.getElementById("text-thing");
let final = "";
const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

function previewFun (event){
    const text= textarea.value;
    const converted = firstLetterUppercase(text);
    display.innerHTML = converted;
    final = converted;
    console.log(event.keyCode);
    if (event.keyCode === 13) {
        copyFun();
    };
};

async function copyFun(){
    try {
        await navigator.clipboard.writeText(final);
        toastBootstrap.show();
      } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

function firstLetterUppercase (input) {
    var res = "";
    for (i=0; i < input.length; i++) {
       res += i % 2 == 1 ? input.charAt(i).toUpperCase() : input.charAt(i);
    }
    return res;  
};