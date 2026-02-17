import fs from "fs/promises"
const readFile=async(file,data)=>{
    try{
       await fs.readFileFile(file,data);
        console.log("File has been written successfully");
    }catch(error){
        console.log("uanble to read")
    }
}
readFile("exaple2.txt");
const appendFile=async(file,data)=>{
    try{
       await fs.appendFileFile(file,data);
        console.log("File has been written successfully");
    }catch(error){
        console.log("uanble to write file")
    }
}
appendFile("example2.txt","This data has been appended by fs.write");


const writeFile=async(file,data)=>{
    try{
       await fs.writeFile(file,data);
        console.log("File has been written successfully");
    }catch(error){
        console.log("uanble to write file")
    }
}
writeFile("example2.txt","This data has been written by fs.write");