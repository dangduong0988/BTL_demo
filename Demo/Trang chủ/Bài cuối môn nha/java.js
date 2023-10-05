const btn = document.getElementById("btn-send")
btn.addEventListener('click', function(){
    const email = document.getElementById("Email").value
    const name = document.getElementById("Name").value
    if(email == ""){
        alert('Ban chua nhap ten!!!')
    } else if(name == ""){
        alert('Ban chua nhap email!!!')
    }
})