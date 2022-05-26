import React from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ListItemButton from '@mui/material/ListItemButton'
import { Link } from 'react-router-dom'

const OnePackage = ({ packageInfo }) => {
  const name = useParams().name

  if (Object.keys(packageInfo).length < 2) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  }

  console.log('packageinfo', packageInfo)
  const packageToShow = packageInfo.find((p) => p.name === name)
  console.log(packageToShow)
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Card raised sx={{ minWidth: 275, maxWidth: 275, minHeight: 120 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Package name:
            </Typography>
            <Typography variant="h5" component="div">
              {packageToShow.name}
            </Typography>
          </CardContent>
        </Card>
        <Card raised sx={{ minWidth: 275, maxWidth: 275, minHeight: 120 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Description:
            </Typography>
            <Typography variant="body2">{packageToShow.description}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Card raised sx={{ minWidth: 275, maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Dependencies:
            </Typography>
            <List>
              {packageToShow.dependencies.map((dependency) => {
                if (packageInfo.find((p) => p.name === dependency)) {
                  return (
                    <ListItem key={dependency}>
                      <ListItemButton sx={{color:'blue', textDecoration: 'underline'}} to={`/${dependency}`} component={Link}>
                        {dependency}
                      </ListItemButton>
                    </ListItem>
                  )
                } else {
                  return <ListItem key={dependency}>{dependency}</ListItem>
                }
              })}
            </List>
          </CardContent>
        </Card>

        <Card raised sx={{ minWidth: 275, maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Reverse dependencies:
            </Typography>
            <List>
              {packageToShow.extras.map((extra) => {
                if (packageInfo.find((p) => p.name === extra)) {
                  return (
                    <ListItem key={extra}>
                      <ListItemButton sx={{color:'blue'}} to={`/${extra}`} component={Link}>
                        {extra}
                      </ListItemButton>
                    </ListItem>
                  )
                } else {
                  return <ListItem key={extra}>{extra}</ListItem>
                }
              })}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default OnePackage
