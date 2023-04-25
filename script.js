// Write a API call by calling the given API and Populate the data as per the requirement 
// https://dog.ceo/api/breeds/list/all
// Filter it based on alphabets & Convert it to Uppercase [Keys : data1[] ]


const url= "https://dog.ceo/api/breeds/list/all";
let data;

async function api(){
  try{
    const res= await fetch(url);
    data=await res.json();
    data=data.message;
  breeds("")
  }
  catch(err){
    console.log(err);
  }
}

api()

const inpEle = document.createElement("input");
inpEle.type="text";
const body = document.getElementsByTagName("body")[0];
console.log(body);
body.appendChild(inpEle);
const table=document.createElement("table");
body.appendChild(table);

function breeds(search){
  console.log(data);
  table.innerHTML= "";
  let data1=Object.keys(data)
  if(search){
    data1=data1.filter(val=>val.startsWith(search.toLowerCase()))
    for(let i of data1){
      const tr=document.createElement("tr");
      const td=document.createElement("td");
      const td1=document.createElement("td");
      console.log(i);
      td.innerHTML=i.toUpperCase();
      td1.innerHTML=data[i].join().toUpperCase();
      tr.append(td,td1);
      table.appendChild(tr);
    }
  }
}


inpEle.addEventListener("keyup",(event)=>{
  console.log(event.target.value)
  breeds(event.target.value)
})





















