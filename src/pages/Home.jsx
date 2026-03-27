import contactApi from "../../services/contactAPI.js";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	contactApi.getAgenda().then(data => dispatch({
		type:'updateContactData',
		payload:{
			data
		}
	}))
  },[])

	return (
		<div className="text-center mt-5">
			<Link className="btn btn-primary" to={'/create'}>Create Contact</Link>
			{
				store.contactsData.contacts?.map(el=> <Card key={el.id} name={el.name} phone={el.phone} mail={el.mail}/>)
			}
		</div>
		
	);
}; 