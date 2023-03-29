import { NavItem } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <>
            <NavItem to='/register'>Register</NavItem>
            <NavItem to='/login'>Log in</NavItem>
        </>
    )
}