 let products = []
     let total = 0

    function addproducts(name, price){

        const product = {
           prod: name,
           price: price,
           quantity: 0
         }

        let check = products.find(item => item.prod === name)

        if(check){
            check.quantity++
        }
        else{
            product.quantity++
            products.push(product)
        }

        let text = ""

        for(let i = 0; i < products.length; i++){
 
            if(products[i].prod === "laptop"){
              if(i === 0){total+= product.price}
                text += `<h3>${products[i].prod} ${products[i].quantity}x </h3>`
            }
            else if(products[i].prod === "mouse"){
                 if(i === 0){total+=product.price}
                text += `<h3>${products[i].prod} ${products[i].quantity}x</h3>`
            }

        }

        document.getElementById("output").innerHTML = text
        document.getElementById("output2").innerHTML = total
    }