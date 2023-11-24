// UsersCards.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import usersData from './db.json'

const UsersCards = ({ isLoggedIn, followedUsers, handleFollowClick }) => {
  const users = usersData.users;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {isLoggedIn &&
        users.map((user) => (
          <Card key={user.id} style={{ width: '500px', margin: '10px' }}>
            <CardContent>
              <Typography variant="h5">{user.username}</Typography>
              <Typography color="textSecondary">{user.email}</Typography>
              <Button onClick={() => handleFollowClick(user.id)}>
                {followedUsers.includes(user.id) ? 'Followed' : 'Follow Me'}
              </Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default UsersCards;
