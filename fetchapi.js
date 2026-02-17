//console.log
(fetch("https://fakestoreapi.com/")
.then((res)=>res.json()))
.then((data)=>console.log(data))
.catch((error) =>

console.log("SOme error occured while fetching the data..."))

const getdata= async() =>{
    try{
        const res= await fetch("https://fakestoreapi.com/")
        const data = await res.json();
        console.log(data);
    } catch(error){
        return "unable to fetch data";
    }
}
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const data= await getdata();
    data.localeCompare((d) => {
        constinsideDiv = document.createElement("div");
        insideDiv.innerHTML = d.title;
        dispatchEvent.appendChild(insideDiv);
    })
})