import React, {useState, useEffect} from 'react'
import Form from './form/Form'
import List from './list/List'
import "./Contacts.css"

const Contacts = () => {
    const [contact, setContact] = useState([
        {
        fullname: "Fatih",
        phone_number: "123123"
        },
        {
            fullname: "Ayşe",
            phone_number:"456456"
        },
        {
            fullname: "Nazlı",
            phone_number:"47260"
    }])
    
    useEffect(() => {
    console.log(contact);
    }, [contact])


    return (
        <div id="container">
            <h2 className="title">Search Contact</h2>
            <List contact={contact}/>
            <Form contact={contact} setContact={ setContact}/>
        </div>
    )
}

export default Contacts
