 function check(){
            let input = document.getElementById("input").value

            const hasUpperCase = /[A-Za-b]/.test(input) 
            const hasNum = /[0-9]/.test(input) 
            const lowerCase= /[a-z]/.test(input)
            const capital = /[A-Z]/.test(input)

            let len = input.length 


            if(hasUpperCase && hasNum && len > 8){
                document.getElementById("output").innerHTML = "strong"
            }
            else if(hasUpperCase && len > 8 || hasNum && len > 8 ){
                document.getElementById("output").innerHTML = "medium"
            }
       
            else{
                document.getElementById("output").innerHTML = "weak"
            }

        }
      