import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Health from '@material-ui/icons/Favorite';
import CP from '@material-ui/icons/FlashOn';
import Attack from '@material-ui/icons/Whatshot';
import Defense from '@material-ui/icons/Security';
import Type from '@material-ui/icons/Opacity';

const styles  = theme => ({

    card: {
        maxWidth: 345,


      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      center:{
          textAlign:'center'
      },
      controls: {

        alignItems: 'center',
        margin:'0 auto',
        width:'50%',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
      },
      widthChange:{
          width:'80%',
          margin:'0 auto'
      }
  });

function Pokemon(props){
    const { classes } = props;

    return(
        <div className={classes.widthChange}>
                <Grid container spacing={24}>
                {props.game.map((data,index)=>(
                    <React.Fragment key={index}>
                <Grid item xs={3}>


                 <Card className={classes.card}>

               <CardMedia
               className={classes.media}
               image="https://i.imgur.com/2aWw56B.jpg"
               title="pokemon img"
             />

             <CardContent>
          <Typography gutterBottom variant="headline" component="h2"  className={classes.center}>
            <span className="name">{data.Name}</span>
          </Typography>

        </CardContent>
        <div className={classes.controls}>

<IconButton aria-label="CP">
      <CP /> {data.CP}
    </IconButton>

    </div>
        <div className={classes.controls}>

        <IconButton aria-label="Health">
        <Health /> <span id="Health">{data.HP}</span>
            </IconButton>
            </div>
                <div className={classes.controls}>
            <IconButton aria-label="Defense">
              <Defense /> {data.Defense}
            </IconButton>
            </div>
            <div className={classes.controls}>
            <IconButton aria-label="Attack">
              <Attack /> {data.Attack}
            </IconButton>
            </div>
            <div className={classes.controls}>
            <IconButton aria-label="Type">
              <Type />{data.type1}
            </IconButton>

            </div>
        </Card>
        </Grid>
        </React.Fragment>
        ))}
        </Grid>



        </div>
    )
}
export default withStyles(styles)(Pokemon);
