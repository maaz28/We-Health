import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from './Button'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    boxShadow: 'none'
  },
  table: {
    // minWidth: 700,
    border: '1px solid lightgrey'
  },
});


function SimpleTable(props) {
  const { classes } = props;
  console.log(props)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {props.data.map(item => {
            return item.url ? ( 
            <TableRow>
              <TableCell component="th" scope="row">
                {item.data}
              </TableCell> 
              <TableCell align="right" ><Button isSendUid={item.url} text={props.buttonText} onClick={props.onClick} /></TableCell>
            </TableRow>
            ) : (<TableRow>
            <TableCell component="th" scope="row">
              {item.data}
            </TableCell>
            <TableCell align="right" ><Button isSendUid={item} text={props.buttonText} onClick={props.onClick} /></TableCell>
          </TableRow>)
          })
          }
         
        </TableBody>
      </Table> 
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
