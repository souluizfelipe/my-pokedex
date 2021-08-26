import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Header