import React, {useState, useEffect} from 'react'
import Form from './form/Form'
import List from './list/List'
import "./Contacts.css"

const Contacts = () => {
    const [contact, setContact] = useState([
        {
        fullname: "Fatih Ece",
        phone_number: "506 789 45 44"
        },
        {
            fullname: "Ece Naz",
            phone_number:"589 789 66 33"
        },
        {
            fullname: "Gülce Nil",
            phone_number:"403 22 22"
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
