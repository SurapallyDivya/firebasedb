import {app} from './firebaseConfig.js'
import {getDatabase,set,ref,get,child,update,remove, } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js'

const db=getDatabase()
var addbtn=document.getElementById("addbtn");
var upbtn=document.getElementById("upbtn");
var dlbtn=document.getElementById("dlbtn");
var select=document.getElementById("select")
var name,em,ph,rno;

function addStudent(){
    getDetails();
    set(ref(db,"Students/"+rno),{rno,name,em,ph})
    .then(()=>{
        alert("Added successfully")
        location.reload()
    })
    .catch(()=>{
        alert("Error")
    })

}
function updatStudent(){
    getDetails()
    update(ref(db,"Students/"+rno),{rno,name,em,ph})
    .then(()=>{
        alert("Updated successfully")
        location.reload();
    })
    .catch(()=>{
        alert("Error")
    })
}
function delStu(){
    getDetails()
   
    remove(ref(db,"Students/"+rno))
    .then(()=>{
        alert("deleted")
        location.reload()
        console.log("jkg")
    })
    .catch(()=>{
        alert("Errorr in deletion")
    })

}
function del(rno){

   
    remove(ref(db,"Students/"+rno))
    .then(()=>{
        alert("deleted")
        location.reload()
        console.log("jkg")
    })
    .catch(()=>{
        alert("Errorr in deletion")
    })

}
function sel(){
    get(child(ref(db), "Students"))
    .then((res) =>{
        let arr = Object.values(res.val());
            // arr.forEach(element => {
            //     console.log(element)
            // });
           console.log(arr);
           var tab=document.getElementById("table")

           tab.innerHTML=`
           <tr>
               <td>Id</td>
               <td>Name</td>
               <td>Email</td>
               <td>Phone Number</td>
               <td>Operation</td>
           </tr>`
           for(let i=0;i<arr.length;i++){
            tab.innerHTML+=`<tr>
            <td>${arr[i].rno}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].em}</td>
            <td>${arr[i].ph}</td>
            <td>
            <button onclick='del(${arr[i].rno})'>DELETE</button>
            </td>
            </tr>
            `
           }
    })
   
}
function getDetails(){
    name=document.getElementById("name").value 
    em=document.getElementById("em").value
    ph=document.getElementById("ph").value
    rno=document.getElementById("rno").value
}
addbtn.addEventListener("click",addStudent)
upbtn.addEventListener("click",updatStudent)

select.addEventListener("click",sel)