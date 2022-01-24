import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useEffect, useState } from 'react';
const useStyles = makeStyles((theme) => ({
 root:{
     display: 'flex',
     justifyContent:'center',
     alignItems: 'center',
     height: '100vh'
 },
 container:{
    textAlign:'center'
 },
    appbar:{
     background: 'none',
     fontFamily: 'Nunito'
 },
 colorText:{
     color:"#5AFF3D"
 },
  appbarTittle:{
    flexGrow:'1'
 },
 appbarWrapper:{
     width:'80%',
     margin: '0 auto',
 },
 icon:{
    color: '#fff',
    fontSize:'2rem',
 },
title:{
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize:'4rem',

},
goDownIcon:{
    color: '#fff',
    fontSize:'4rem',
},
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
      setChecked(true);
  }, [])
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTittle}>My <span className={classes.colorText}>
          Isles    
          </span></h1>
          <IconButton className={classes.icon}>
          <SortIcon/>
          </IconButton>
          </Toolbar>
      </AppBar>
      
      <Collapse in={checked} {...(checked ? {timeout:1000} : {})} 
      collapsedHeight={50} >
      <div className={classes.container}>
        <h1 className={classes.title}> Welcome to <br/>
            My <span className={classes.colorText}>Isle</span>
            </h1>
            <IconButton>
          <ExpandMoreIcon className={classes.goDownIcon} />
          </IconButton>
      </div>
      </Collapse>

    </div>
    
  );
}

export default Header;
