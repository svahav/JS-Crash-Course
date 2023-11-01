const getBmi=function(heightKg, weightKg){
    try{
        return(weightKg/heightKg/heightKg)*10000;
    }catch(error){
        return undefined;
    }
    


}

export {getBmi};