import { HomeWrap } from './Home.styled';
import phonebook from '../phonebook.jpg';

export default function Home() {
    return (
        <HomeWrap>
            <h2>Welcome to Phonebook App</h2>
            <img src={phonebook} width="240" alt="saddog" />
            <p>Please log in to use the phonebook</p>
        </HomeWrap>
    )
}