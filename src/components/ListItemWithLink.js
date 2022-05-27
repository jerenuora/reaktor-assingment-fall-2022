import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import { Link } from 'react-router-dom'

const ListItemWithLink = ({ dependency }) => {
  return (
    <ListItem key={dependency} disablePadding>
      <ListItemButton
        sx={{ color: 'blue' }}
        to={`/${dependency}`}
        component={Link}
      >
        <ListItemText primary={dependency} />
      </ListItemButton>
    </ListItem>
  )
}

export default ListItemWithLink
