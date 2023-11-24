import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UsersCards from "./components/UserCards";
import { Button, Box } from "@mui/material";
import usersData from "./components/db.json";

const App = () => {
  const users = usersData.users;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [followedUsers, setFollowedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleFriendsClick = () => {
    if (selectedUser) {
      alert(`Friends with ${selectedUser}`);
    }
  };

  const handleFollowClick = (userId) => {
    if (followedUsers.includes(userId)) {
      setFollowedUsers(followedUsers.filter((id) => id !== userId));
    } else {
      setFollowedUsers([...followedUsers, userId]);
      setSelectedUser(
        users.find((user) => user.id === userId)?.username || null
      );
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" p={2}>
      {!isLoggedIn ? (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Box>
          <Button
            variant="contained"
            onClick={handleLogout}
            style={{ marginLeft: "70px" }}
          >
            Logout
          </Button>
          <Button
            onClick={handleFriendsClick}
            variant="contained"
            style={{ margin: "10px" }}
          >
            Friends
             </Button>
          <UsersCards
            isLoggedIn={isLoggedIn}
            followedUsers={followedUsers}
            handleFollowClick={handleFollowClick}
          />
        </Box>
      )}
    </Box>
  );
};

export default App;
