function ContactList({contacts, onRemove}) {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>Name: { contact.name }</p>
                    <p>Number: {contact.number}</p>
                    <button onClick={()=> onRemove(contact.id)} type="button">Delete</button>
                </li>   
            ))}
        </ul>
    )
};

export default ContactList;