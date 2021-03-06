import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemWithLink from './ListItemWithLink'

const Packages = ({ data }) => {
  if (Object.keys(data).length < 2) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  }
  return (
    <div>
      <p></p>
      <div></div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List sx={{ columns: '1 auto' }}>
          {data.map((packages) => (
            <ListItemWithLink key={packages.name} dependency={packages.name} />
          ))}
        </List>
      </Box>
    </div>
  )
}

export default Packages
