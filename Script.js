function CategoryFunc(buttonName){
    var x = document.getElementsByClassName("sort");

    for(var i = 0 ; i < x.length ; i++){
        x[i].style.backgroundColor = "white";
    }

    document.getElementById(buttonName).style.backgroundColor = "#af0404";

    var category = buttonName.replace("Sort", "");

    var y = document.getElementsByClassName("projectContent");
    for(var j = 0 ; j < y.length ; j++){
        if(y[j].id == category || category == "All"){
            y[j].style.display = "flex";
        }
        else{
            y[j].style.display = "none";
        }
    }
    // showLess();
}

// function showLess(){
//     var y = document.getElementsByClassName("projectContent");
//     var count = 0;
//     var limit = 1;

//     for(var i = 0 ; i < y.length ; i++){
//         y[i].style.display = "flex";
//         count = count + 1;
//         if(count > limit){
//             y[i].style.display = "none";
//         }
//     }

//     document.getElementById("less").style.display = "none";
//     document.getElementById("more").style.display = "block";
// }

// function showMore(){
//     var y = document.getElementsByClassName("projectContent");
//     for(var i = 0 ; i < y.length ; i++){
//         y[i].style.display = "flex";
//     }

//     document.getElementById("more").style.display = "none";
//     document.getElementById("less").style.display = "block";
// }