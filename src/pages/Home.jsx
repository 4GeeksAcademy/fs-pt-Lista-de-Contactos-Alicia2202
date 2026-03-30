import contactApi from "../../services/contactAPI.js";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		contactApi.getAgenda().then(data => dispatch({
			type: 'updateContactData',
			payload: {
				data
			}
		}))
	}, [])

	console.log("Contenido de store.contactsData", store.contactsData);
	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-end mb-3">
			<Link className="btn btn-primary" to={'/create'}>Create Contact</Link>
			</div>
			<div className="list-group border shadow-sm rounded">
			{
				store.contactsData.contacts?.map(el=> <Card key={el.id} name={el.name} phone={el.phone} mail={el.email} address={el.address}/>)
			}
		</div>
		</div>

	);
}; 