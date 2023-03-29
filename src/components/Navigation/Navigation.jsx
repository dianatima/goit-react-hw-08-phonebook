import { useAuth } from "hooks/useAuth";
import { NavItem } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <NavItem to='/'>Home</NavItem>
            {isLoggedIn && <NavItem to='/phonebook'>Phonebook</NavItem>}
        </>
    )
} 