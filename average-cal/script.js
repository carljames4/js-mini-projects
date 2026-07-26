     function addav(){
            try{
         let en = Number(document.getElementById("en").value)
         let math = Number(document.getElementById("math").value)
         let sc = Number( document.getElementById("sc").value)
         let esp = Number(document.getElementById("esp").value)
         let tle = Number(document.getElementById("tle").value)
         let total = en + math + sc + esp + tle 
         let result = total / 5 

         document.getElementById("output").value = result
            }catch(err){
                document.getElementById("try").innerHTML = err.name +err.message
            }
        }
     