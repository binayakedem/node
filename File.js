const fs=require("fs");


// this is creation of the file
fs.writeFileSync("./test.txt",'this is create using the file handling');
//  if you write anything it always override

fs.writeFile("./test.txt","Hellow world asynch",(err)=>{})
// this is asynchronous



// how to read the file 
const result=fs.readFileSync('./note.txt',"utf-8");
console.log(result)


// asynchronious does not return the result that is it does not return results value 
fs.readFile('./note.txt',"utf-8",(err, result)=>{
if(err){
    console.log("Error",err)
}else{
    console.log(result)
}
});

// this type of asynchronous doesnot return instead it expect the call back function



// now appending the string into the existing data

fs.appendFileSync("note.txt",new Date().toLocaleString());