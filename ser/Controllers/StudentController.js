


const Student=require("./../Models/StudentSchema");
exports.getAllStudent=(request,response)=>{
    Student.find({})//.populate({path:"department"})
              .then(data=>{
                response.status(200).json(data)

              })
              .catch(error=>{
                  next(error);
              })
}

exports.getStudent=(request,response)=>{

    Student.findOne({_id:request.params.id})//.populate({path:"department"})
              .then(data=>{
                  if(data==null) next(new Error("Student id not Found"))

                    response.status(200).json(data)
              })
              .catch(error=>{
                  next(error);
              })
}
exports.createStudent = (request, response, next) => {
    let imageFilename = request.file ? request.file.filename : 'default_image.jpg'; 
    if (request.file && request.file.filename) {
        imageFilename = request.file.filename;
        console.log("there is an image");
    }else{
        console.log("there is no image");
    }
    
    let object = new Student({
        _id: request.body.id,
        name: request.body.name,
        department: request.body.department,
        image: imageFilename
    });
    object.save()
        .then(data => {
            response.status(201).json({ message: "added", data });
        })
        .catch(error => next(error));

};

exports.updateStudent=(request,response,next)=>{
        Department.findByIdAndUpdate(request.params.id,{
            $set:{
                name:request.body.name,
                department:request.body.department,
                image:request.file.filename
            }
        })
                  .then(data=>{
                      if(data==null) throw new Error("Student Is not Found!")
                    response.status(200).json({message:"updated",data})

                  })
                  .catch(error=>next(error))
}

exports.deleteStudent=(request,response,next)=>{
        Department.findByIdAndDelete(request.params.id)
                  .then(data=>{
                      if(data==null) throw new Error("Student Is not Found!")
                      response.status(200).json({message:"deleted"})
                    
                  })
                  .catch(error=>next(error))
}




