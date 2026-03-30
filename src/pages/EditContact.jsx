import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import contactApi from "../../services/contactAPI"
import useGlobalReducer from "../hooks/useGlobalReducer"

const EditContact = () => {
    const { store } = useGlobalReducer();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        address: ''
    })
    useEffect(() => {
      
        if (store.selectedContact) {
            setFormData({
                id: store.selectedContact.id || '',
                name: store.selectedContact.name || '',
                phone: store.selectedContact.phone || '',
                email: store.selectedContact.email || '',
                address: store.selectedContact.address || ''
            });
        }
    }, [store.selectedContact]);
    const handleChange = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        

        if (!formData.id) {
            alert("Error: El ID del contacto se ha perdido. No se puede editar.");
            return;
        }
        const result = await contactApi.editContact(formData)
        if (result) {

            navigate("/")
        }
    }
    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-center">Add a new contact</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold" placeholder="Full Name">Full Name</label>
                        <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="email" className="form-label fw-bold" placeholder="Enter Email">Email</label>
                        <input className="form-control" type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="phone" className="form-label fw-bold" placeholder="Enter Phone">Phone</label>
                        <input className="form-control" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="address" className="form-label fw-bold" placeholder="Enter Address">Address</label>
                        <input className="form-control" type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">save</button>
                </form>
                <div className="mt-3">
                    <Link to="/">or get back to contacts</Link>
                </div>
            </div>
        </div>
    )
}

export default EditContact