module.exports={
    normalizeError : function (errors) {
         let errorList = []

         for (let  property in errors) {
             if (errors.hasOwnProperty(property)) {
                 errorList.push({ title : property,detail : errors[property].message})
             }
         }

         return errorList;
    }
}