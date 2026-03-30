import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({name, phone, mail, address,cid}) => {
    const navigate = useNavigate();
    const {store, dispatch} = useGlobalReducer()
    const handleNavigate = () => {
        dispatch({
            type:'selectedContact',
            payload:{
                id: cid,
                name: name,
                phone: phone,
                email: mail, 
                address: address
            }
        })
        navigate('/editcontact')
    } 
    return (

        <div className="list-group-item p-4">
            <div className="row align-items-center">
                <div className="col-md-2 d-flex justify-content-center">
                    <img 
                        src="https://picsum.photos/200" 
                        alt="contact" 
                        className="rounded-circle image-contact"
                        
                    />
                </div>

            <div className="col-md-8">
                    <h5 className="mb-3">{name}</h5>
                    <p className="text-secondary mb-1">
                        <i className="fas fa-map-marker-alt me-3"></i>{address || "No address"}
                    </p>
                    <p className="text-secondary mb-1">
                        <i className="fas fa-phone me-3"></i>{phone}
                    </p>
                    <p className="text-secondary mb-0">
                        <i className="fas fa-envelope me-3"></i>{mail}
                    </p>
                </div>

                <div className="col-md-2 text-end d-flex justify-content-end align-self-start">
                    {/* Editar */}
                    <button className="btn btn-link text-dark p-2" onClick={()=>handleNavigate(cid)}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>

                    {/* Borrar */}
                    <button className="btn btn-link text-dark p-2" >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>


           
            </div>
        </div>
    )
}

export default Card