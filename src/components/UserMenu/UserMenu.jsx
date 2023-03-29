import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = dispatch(logOut());

    return (
        <>
            <h2>Welcome, Robi{user.name}</h2>
            <Button variant="outlined" color="inherit" type='button' onClick={handleLogOut} sx={{ m: 2 }}>Logout</Button>
        </>
    )
}
