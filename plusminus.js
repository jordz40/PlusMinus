    const number = 6
    const array = [-4, 3, -9, 0, 4, 1]
    let positif = () => {
        let tempNumber = 0
        for(let i  = 0; i<array.length; i++){
            if(array[i]>0){
                tempNumber ++
            }
        }
        return tempNumber/array.length
    }
    let negatif = () => {
        let tempNumberNeg = 0
        for(let i  = 0; i<array.length; i++){
            if(array[i]<0){
                tempNumberNeg ++
            }
        }
        return tempNumberNeg/array.length
    }
    let zero = () => {
        let zero = 0
        for(let i  = 0; i<array.length; i++){
            if(array[i]==0){
                zero ++
            }
        }
        return zero/array.length
    }
    
    console.log(positif())
    console.log(negatif())
    console.log(zero())
 
