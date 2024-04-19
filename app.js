import { posts } from "./posts.js";

console.log(posts)

let myContent = document.getElementById("myContainer");



function myfunc (myData){
    
    for(let i = 0; i < myData.length; i++){
        let intoHeader = myData[i].first_name + myData[i].last_name
        let myheader = `<div class="card-header">` + intoHeader + `</div>`
        
        myContent.innerHTML = myContent.innerHTML + `
    <div class="card" style="width: 25rem;">
        ${myheader}
        <div class="card-body">
                <strong>ID: </strong> ${myData[i].id}<br>
                <strong>Gender: </strong> ${myData[i].gender}<br><br><br>
                <div class="alert alert-danger" role="alert">
                Your IP has been detected!! => ${myData[i].ip_address}
                </div>
        </div>
    </div>` 

    }
}
/*
function myfunc (myData){
    for(let i = 0; i < myData.length; i++){
    myContent.innerHTML = myContent.innerHTML + `
    <div class="card" style="width: 25rem;">
        <div class="card-header">
               ${myData[i].first_name} ${myData[i].last_name}
        </div>
        <div class="card-body">
                <strong>ID: </strong> ${myData[i].id}<br>
                <strong>Gender: </strong> ${myData[i].gender}<br><br><br>
                <div class="alert alert-danger" role="alert">
                Your IP has been detected!! => ${myData[i].ip_address}
                </div>
        </div>
    </div>` 

    }
}
*/
myfunc(posts)