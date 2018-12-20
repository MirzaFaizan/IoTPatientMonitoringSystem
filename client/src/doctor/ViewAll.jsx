import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MakeIcon from '@material-ui/icons/Create';
import { IconButton } from 'material-ui';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import TextField from 'material-ui/TextField/TextField';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3F51B5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class CustomizedTable extends React.Component {

  componentDidMount(){
    var details = {
      'token':this.state.t
  };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/doctor/viewStudies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log("we are in this function");
      console.log(this.state.t);
      if(res){
       console.log(res);
       this.setState({
         data:res
       })
        console.log("After function");
        console.log(this.state.t);
      };
    }
    );

  };




  constructor(props){
    super(props)
    console.log(this.props.email);
    this.state={
      data:{},
      t:this.props.token,
      signupEmail:'',
      signupFname:'',
      signupLname:'',
      open : false,
      studyName:'',
      studyBy:'',
      randomCode:''
    }
  };

  //Code functions
  //hanlde signup
  handleDialogOpen = (name,by) => {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    

    this.setState({ 
      open: true,
      studyBy:by,
      studyName:name,
      randomCode : text
     });
  };
    // signup values goes here

    changeSignupEmail = e => {
      this.setState({
        signupEmail: e.target.value
      });
    };
  
    changeSignupFname = e => {
      this.setState({
        signupFname: e.target.value
      });
    };
  
    changeSignupLname = e => {
      this.setState({
        signupLname: e.target.value
      });
    };

    handleDialogClose = () => {
      this.setState({ open: false });
  
      console.log(this.state);
        var details = {
          'email': this.state.signupEmail,
          'firstName':this.state.signupFname,
          'lastName':this.state.signupLname,
          'passcode':this.state.randomCode,
          'studyBy':this.state.studyBy,
          'studyName':this.state.studyName,
          'token':this.props.token
          };
          
        
          var formBody = [];
          for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
          
          fetch('/doctor/SaveToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
            },
            body: formBody
          }).then(res=>res.json())
          .then(res=>{
            console.log("we are in this function");
              if(res){
                console.log(res);
              };
            }
          );
    };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display2"> All Studies</Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Patients Enrolled</CustomTableCell>
                <CustomTableCell>Title</CustomTableCell>
                <CustomTableCell>Info</CustomTableCell>
                <CustomTableCell>Pass Code</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Object.values(this.state.data).map((type,index) => {
                  if(type.studyBy===this.props.email){
                    return (
                      <TableRow className={classes.row} key={type.studyBy}>
                        <CustomTableCell>{type.patientsEnrolled}</CustomTableCell>
                        <CustomTableCell>{type.name}</CustomTableCell>
                        <CustomTableCell numeric> {type.studyInfo} </CustomTableCell>
                        <CustomTableCell >
                          <Button  aria-label="delete" onClick={()=>{this.handleDialogOpen(type.name,type.studyBy)}} className={classes.button}>
                            Generate Pass Code<MakeIcon/>
                          </Button>
                      </CustomTableCell>
                      </TableRow>
                    );
                  }
                })
              }
            </TableBody>
          </Table>
        </Paper>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Generate Code</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create a Passcode
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              onChange={e => this.changeSignupEmail(e)}
              value={this.state.signupEmail}
              fullWidth
            />
            <TextField
              margin="dense"
              id="firstname"
              label="First Name"
              type="text"
              onChange={e => this.changeSignupFname(e)}
              value={this.state.signupFname}
            />  
            <TextField
              margin="dense"
              id="lastname"
              label="Last Name"
              type="text"
              onChange={e => this.changeSignupLname(e)}
              value={this.state.signupLname}
            />
            <p><b>PASSCODE :</b> {this.state.randomCode}</p>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
