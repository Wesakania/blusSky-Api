const { request, response } = require("express")
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000

const pupils = {
  "admission":{
      "age": 30,
      "cohortName":"Wesakania",
      "birthLocation":"Kyanzavi,Machakos",
      "status":"entered" 
     },
     "admitted":{
      "age": 33,
      "cohortName":"Nyerere",
      "birthLocation":"Ugunja, Siaya",
      "status":"existing" 
     },
     "exiting":{
      "age": 40,
      "cohortName":"Kinyatta",
      "birthLocation":"Mombasa",
      "status":"clearing" 
     },
     "unknown":{
      "age": 0,
      "birthName":"unknown",
      "birthLocation":"uknown",
      "status":"unknown" 
     }                                 
}

app.use(cors());

app.get("/",(request,response) => {
  response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name",(request, response)=>{
  const pupilRecord = request.params.name.toLowerCase()
  if(pupils[pupilRecord]){
  response.json(pupils[pupilRecord])
  }
  else{
    response.json(pupils["unknown"])
  }
  
})



app.listen(PORT, ()=> { 
  console.log(`The server is now running on port ${PORT}! Better Go Catch It!`)
})