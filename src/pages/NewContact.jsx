import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import contactApi from "../../services/contactAPI"
const NewContact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    })
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        const result = await contactApi.createContact(formData)
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
                        <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                        <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <input className="form-control" type="text" id="email" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="phone" className="form-label fw-bold">Phone</label>
                        <input className="form-control" type="text" id="phone" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="address" className="form-label fw-bold">Address</label>
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

export default NewContact