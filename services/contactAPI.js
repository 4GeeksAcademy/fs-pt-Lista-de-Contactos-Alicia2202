const contactApi = {}

const url = 'https://playground.4geeks.com/contact'


contactApi.getAgenda = async () => {
    try {

        const resp = await fetch(url + '/agendas/Alicia')
        if (resp.status == 404) return contactApi.createAgenda();
        if (!resp.ok) throw new Error('Error getting agenda')
        const data = await resp.json();
        return data
    } catch (err) {
        console.log(err)
        return { contacts: [] };

    }
}

contactApi.createAgenda = async () => {
    try {
        const resp = await fetch(url + '/agendas/Alicia', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
        if (!resp.ok) throw new Error('Error getting agenda')
        const data = await resp.json();
        return data
    } catch (err) {
        console.log(err)
        return { contacts: [] };

    }
}

contactApi.createContact = async (newContact) => {
    try {
        const resp = await fetch(url + '/agendas/Alicia/contacts', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        if (!resp.ok) throw new Error('Error getting agenda')
        const data = await resp.json();
        return data
    } catch (err) {
        console.log(err)
    }
}

contactApi.editContact = async (infoContact) => {
    try {
        const resp = await fetch(url + '/agendas/Alicia/contacts/'+ infoContact.id, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(infoContact)
        })
        if (!resp.ok) throw new Error('Error getting agenda')
        const data = await resp.json();
        return data
    } catch (err) {
        console.log(err)
    }
}

contactApi.deleteContact = async (id) => {
    try {
        const resp = await fetch(url + '/agendas/Alicia/contacts/'+ id, {
            method: "DELETE",
            
        })
        if (!resp.ok) throw new Error('Error deleting contact')
        
        return true;
    } catch (err) {
        console.log(err)
        return false;
    }
}

export default contactApi