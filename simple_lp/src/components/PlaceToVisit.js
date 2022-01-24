import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh'
    },
}));

function PlaceToVisit() {
  const classes = useStyles();
  return (
    <div className={classes.root}></div>
  );
}

export default PlaceToVisit;
