export const initialStore=()=>{
  return{
    
    contactsData: { contacts: [] }
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'updateContactData':
      return {
        ...store,
        contactsData:action.payload.data
      }

    
    
  }    
}
