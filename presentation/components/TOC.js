import React from 'react';
import { List, ListItem, Heading } from 'spectacle';

const TOC = ({ items }) => {
  return (
    <List>
      {items.map(i => (
        <ListItem key={i} style={{listStyle: 'none', marginBottom: '3rem'}}>
          <Heading size={4} lineHeight={1} textColor="black">
              {i}
          </Heading>
        </ListItem>
      ))} 
    </List>
  );
};

export default TOC;