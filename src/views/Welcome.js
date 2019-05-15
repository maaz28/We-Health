import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardLayout from "../components/common/CardLayout";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  main: {
    width: 'auto', 
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: "100%",
      marginLeft: 'auto', 
      marginRight: 'auto',
      marginTop : "10%"
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor : "rgba(256,256,256,0.7)",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  }
});


class Welcome extends Component {
  
  render(){
    const { classes, category_1, category_2 } = this.props;
     
    return (
      <main className={classes.main}>
       <Grid container spacing={24}>
       <Grid item md={2}></Grid>
        <Grid onClick={()=>{this.props.history.push('/library')}} item xs={12} md = {4}>
          <CardLayout  title = {category_1.title} image = {category_1.image}/>
        </Grid>
        <Grid onClick={()=>{this.props.history.push('/forums')}} item xs={12} md = {4}>
          <CardLayout  title = {category_2.title} image = {category_2.image} />
        </Grid> 
       <Grid item md={2}></Grid>
        </Grid>
      </main>
    );
  }
}


Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  /**
   * data of the first category.
   */
  category_1: PropTypes.object,
  /**
   * data of the second category.
   */
  category_2: PropTypes.object,
};

Welcome.defaultProps = {
  category_1: {
    title : "Digital Library",
    image : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
  },
  category_2: {
    title : "Discussion Forum",
    image : "https://www.acaud.com.au/sb_cache/associationnews/id/93/f/DiscussionForum.jpg"
  }
};

export default withStyles(styles)(Welcome);