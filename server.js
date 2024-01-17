const http=require('http')

 

 const server=http.createServer((req,res)=>{
//    res.statusCode=404
//    res.write('we don t have this page \n')
 
   // res.setHeader('Content-type','text/html')
   // res.write("welcome meriam")
   // res.end()
   if (req.url=='/home'){
      res.statusCode=200
      res.write('welcome to home')
   }
   else if(req.url=='/contact'){
      res.statusCode=200
      res.write('welcome to contact')
   }
   else if(req.url=='/about'){
      res.statusCode=200
      res.write('welcome to about')
   }
   else{
      res.statusCode=404
      res.write('not found')
   
   }
  
   res.end()
 })
 server.listen(3000,()=>{
    console.log('server is running on port 3000')
 })