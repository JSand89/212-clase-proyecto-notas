exports.obtenerEstudiantes =(req,res) =>{
    console.log("función de obtener estudiante")
    res.status(200).json({message:"lista de estudiantes"})
}
exports.crearEstudiante = (req,res)=>{
    console.log("crear estudiante",req.body)
    res.status(201).json({message:"Estudiante creado"})
}
exports.obtenerEstudiantePorID = (req,res)=>{
    const idEstudiante = req.params.idEstudiante
    console.log(`Obtener el estudiante con ID: ${idEstudiante}`)
    res.status(200).json({message:`Obteniendo el estudiante con id ${idEstudiante}`})
}
exports.actualizarEstudiente = (req,res)=>{
    const idEstudiante = req.params.idEstudiante
    console.log(`Actualizar estudiante con ID ${idEstudiante}`)
    res.status(200).json({message:`Estudiante con ${idEstudiante} actualizado`})
}
exports.eliminarEstudiante = (req,res)=>{
    const idEstudiante = req.params.idEstudiante
    console.log(`Eliminar estudiante con ${idEstudiante}`)
    res.status(200).json({message:`estudiante con ${idEstudiante} eliminado`})
}