import React, {useState} from 'react'

const List = ({ contact }) => {
    const [filterText, setFilterText] = useState("");

    const filtered = contact.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })

    console.log(filtered);
    return (
        <div>
            <input placeholder="Filter contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)} />
            
            <ul className="list">
                {
                    filtered.map((item, i) => {
                        return <li key={i}>
                            <span>{item.fullname}</span>
                            <span>{item.phone_number}</span>
                        </li>
                    })
                }
            </ul>
            
            <p>Total Contacts: {filtered.length }</p>
        </div>
    )
}

export default List
