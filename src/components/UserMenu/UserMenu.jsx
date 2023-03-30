import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import avatar_photo from "./avatar.jpeg";

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <Avatar sx={{ bgcolor: blue[50], mr: 2 }} src={avatar_photo} />
      <h2>Welcome, {user.name}</h2>
      <Button
        variant="outlined"
        color="inherit"
        type="button"
        sx={{ m: 2 }}
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </>
  );
};
