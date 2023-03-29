import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { ContactWrap } from './ContactList.styled';
import * as contactOperations from 'redux/contacts/contactsOperations';
import { useEffect } from "react";

export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);


    useEffect(() => {
        dispatch(contactOperations.fetchAllContacts())
    },[dispatch])
    return (
        contacts.map((contact) => {
            return (
                <ContactWrap key={contact.id}>
                    <p>{contact.name}: {contact.number}</p>
                    <button onClick={() => dispatch(contactOperations.deleteContact(contact.id))}>Delete</button>
                </ContactWrap>
                )
            })
    )
}