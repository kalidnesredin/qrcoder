let imgbox = document.getElementById("imgbox");
let textbox = document.getElementById("textbox");
let qrimg = document.getElementById("qrimg");
let savebtn = document.getElementById("savebtn");

savebtn.addEventListener('click',downloadimg);

function generateQR(){
    if(textbox.value.length > 0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ textbox.value;
        imgbox.classList.add("show-img");
    }else{
        textbox.classList.add("error");
        setTimeout(() => {
          textbox.classList.remove('error');
        }, 1000);
    }
    
}
async function downloadimg(){
    let url = new URL("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ textbox.value);
    value = textbox.value;
    image = await fetch(url);
    imageBlob = await image.blob();
    imageURL=URL.createObjectURL(imageBlob);

    link = document.createElement("a");
    link.href = imageURL;
    link.download = "mycode";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}