import { useState } from "react"
const NewContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    })
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]:e.target.value})
        
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h1>New Contact</h1>
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange } />
                <input className="form-control" type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <input className="form-control" type="text" name="email" value={formData.email} onChange={handleChange } />
                <input className="form-control" type="text" name="address" value={formData.address} onChange={handleChange } />
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewContact