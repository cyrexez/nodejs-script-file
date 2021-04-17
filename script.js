const http= require('https');
var fs=require('fs')
//get request to get data from the address
http.get('https://jsonplaceholder.typicode.com/posts', res =>{
    let body=' ';
    //asssign the string values to the body object
    res.on('data',data=>{
        body +=data;
    })
    //write the value of body to the post txt
    res.on('end',()=>fs.writeFile('result/post.txt',body,(err)=>{
        //to throw errors
if(err) throw err;
//Confirmation of result
console.log("Your post file has been created");
    }));

})