import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { Link } from 'react-router-dom'

const Packages = ({ data }) => {
  console.log(data)
  console.log(Object.keys(data).length)
  if (Object.keys(data).length < 2) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Packages for this poetry.lock</h2>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          {data.map((packages) => (
            <ListItem key={packages.name}>
              <ListItemButton sx={{color:'blue', textDecoration: 'underline'}} to={`/${packages.name}`}component={Link}>
               {packages.name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  )
}

export default Packages
