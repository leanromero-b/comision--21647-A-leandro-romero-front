
import axios from "axios";



const url = 'http://localhost:3000/';

const traerDatosDePostPorID = async (id) => {
    const endpoint = url + 'post/' + id
    
    try {
        const respuesta = await axios.get( endpoint );
        if (respuesta.status === 200) {
          return  respuesta.data
        } else{
          return false;
        }
    } catch (error) {
        return false
      }
}

const traerComentariosPorId =  async (idPost) =>{
  const endpoint = url + 'comentarios/' + idPost
    
    try {
        const respuesta = await axios.get( endpoint );
        if (respuesta.status === 200) {
          return  respuesta.data
        } else{
          return false;
        }
    } catch (error) {
        return false
      }
}

export  { traerDatosDePostPorID, traerComentariosPorId }