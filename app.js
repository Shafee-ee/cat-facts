const URL ="https://cat-fact.herokuapp.com/facts";
const factPara= document.querySelector("#fact");
const button= document.querySelector("#button");



const getFacts= async()=>{
    console.log("Getting your cat fact of the day....")
    let response = await fetch(URL); 
   // console.log(response);//JSON format needs to be converted 
    let data = await response.json(); // converted format
    let randomIndex = Math.floor(Math.random() * data.length);
    factPara.innerText = data[randomIndex].text;
    
}//async ends


button.addEventListener("click",getFacts);
