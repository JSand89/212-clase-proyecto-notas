const Estudiante = require("../models/estudiante")

exports.obtenerEstudiantes = async (req,res) =>{
    try {
        const estudiantes = await Estudiante.find()
        res.status(200).json(estudiantes)

    } catch (error) {
        res.status(500).json({error:error.message})      
    }
}
exports.crearEstudiante = async (req,res)=>{
    try {
        const nuevoEstudiante = new Estudiante(req.body)
        await nuevoEstudiante.save()
        res.status(201).json(nuevoEstudiante)
    } catch (error) {
        res.status(500).json({error:error.message})      
    }

    //res.status(201).json({message:"test"})
}
exports.obtenerEstudiantePorID = async (req,res)=>{
    try{
        const idEstudiante = req.params.idEstudiante
        const estudiante = await Estudiante.findById(idEstudiante)
        if(!estudiante){
            res.status(404).json({message:"estudiante no encontrado"})
        }
        res.status(200).json(estudiante)
    } catch(error){
        res.status(500).json({error:error.message})      
    }

}
exports.actualizarEstudiente = async (req,res)=>{
    try{
        const idEstudiante = req.params.idEstudiante
        const nuevoEstudiante = req.body
        const estudiante = await Estudiante.findByIdAndUpdate(idEstudiante,nuevoEstudiante,{new:true})
        if(!estudiante){
            res.status(404).json({message:"estudiante no encontrado"})
        }
        res.status(200).json(estudiante)
    }catch(error){
        res.status(500).json({error:error.message})      
    }
}
exports.eliminarEstudiante = async (req,res)=>{
    try{
        const idEstudiante = req.params.idEstudiante
        const estudiante = await Estudiante.findByIdAndDelete(idEstudiante)
        if(!estudiante){
            res.status(404).json({message:"estudiante no encontrado"})
        }
        res.status(200).json({message:`estudiante con ${idEstudiante} eliminado`})
    }catch(error){
        res.status(500).json({error:error.message})      
    }
}