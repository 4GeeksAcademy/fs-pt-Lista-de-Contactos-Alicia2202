export const initialStore = () => {
  return {

    contactsData: { contacts: [] },
    selectedContact: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'updateContactData':
      return {
        ...store,
        contactsData: action.payload.data
      }

    case 'selectedContact':
      
      return {
        ...store,
        selectedContact: action.payload 
      }

      default:
      return store;



  }
}
