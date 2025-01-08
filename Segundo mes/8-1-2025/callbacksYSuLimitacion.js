setTimeout(()=>{
    console.log("paso 1");
    setTimeout(()=>{
        console.log("paso 2")
        setTimeout(()=>{
            console.log("Paso 3")
        }, 1000)
    },1000)
},1000)