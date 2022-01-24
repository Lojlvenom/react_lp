import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Nanito',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#fff'
        
    },
    desc: {
        fontFamily: 'Nanito',
        fontSize: '1.1rem',
        color: '#ddd'
        
    },
  }));
  
function ImageCard({ place, checked }) {
    const classes = useStyles();
  return (
      <Collapse in={checked}
      {...(checked ? {timeout:1000} : {})}>
    <Card className={classes.root}>
      <CardMedia
      className={classes.media}
        image={place.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            { place.title }
        </Typography>
        <Typography variant="body2" color="text.secondary" className={classes.desc}>
          { place.description }
        </Typography>
      </CardContent>
     
    </Card>
    </Collapse>
  );
}

export default ImageCard;
