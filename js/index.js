function a(){
    var array = document.getElementsByClassName("nav-link");

    for (let index = 0; index < array.length; index++) {
        console.log(array[index].style.height);
        array[index].style.height = array[index].style.width;
    }
}