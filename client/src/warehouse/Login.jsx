import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import _ from 'lodash';

import Radio from 'material-ui/Radio/Radio';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormLabel from 'material-ui/Form/FormLabel';
import Divider from 'material-ui/Divider';


const styles = theme => ({
  button: {
    display:'flex',
  },
  container: {
    display:'block',
    flexWrap:'wrap',
    position:"relative",
  },
  textField: {
    width: '100%',
  },
  appBar: {
    display:'block',
    position:'relative'
  },
  typeobar: {
    marginTop:100
  },

  card: {
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:60,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  menu: {
    width: 200,
  },
});

const dropdowntypes = [
  {
    value: 'doctor',
    label: 'Doctor',
  },
  {
    value: 'patient',
    label: 'Patient',
  },
];
function validate(userName,Password) {
  return {
    userName: userName.length === 0,
    Password: Password.length === 0,
  };
}

class TextFields extends React.Component {
  constructor(props){
    super(props)

   this.state = {
      userName: '',
      Password: '',
      passcode: '',
      type:'doctor',
      open: false,
      openSurvey:false,
      signupEmail:'',
      signupFname:'',
      signupLname:'',
      signupPassword:'',
      signupType:'doctor',

      value1:0,      
      value2:0,      
      value3:0,      
      value4:0,      
      value5:0,      
      value6:0,      
      value7:0,      
      value8:0,      
      value9:0,      
      value10:0,      
      value11:0,      
      value12:0,      
      value13:0,      
      value14:0,      
      value15:0,      
      value16:0,      
      value17:0,      
      value18:0,      
      value19:0,      
      value20:0,      
      value21:0,      
      value22:0,
      top5:'',
      studyBy:''

    };

  } //constructor 

  handleOpenSurvey = () => {
    this.setState({ openSurvey: true });

  }


  handleCloseSurvey = () => {


    //API CALL HERE
    var details = {
      'token':this.props.token,
      'study':this.state.studySelected,
      'filledBy':this.state.email,
      'value1':this.state.value1,      
      'value2':this.state.value2,      
      'value3':this.state.value3,
      'value4':this.state.value4,      
      'value5':this.state.value5,      
      'value6':this.state.value6,      
      'value7':this.state.value7,      
      'value8':this.state.value8,      
      'value9':this.state.value9,      
      'value10':this.state.value10,      
      'value11':this.state.value11,      
      'value12':this.state.value12,      
      'value13':this.state.value13,      
      'value14':this.state.value14,      
      'value15':this.state.value15,      
      'value16':this.state.value16,      
      'value17':this.state.value17,      
      'value18':this.state.value18,      
      'value19':this.state.value19,      
      'value20':this.state.value20,      
      'value21':this.state.value21,      
      'value22':this.state.value22,
      'top5':this.state.top5,
      'studyBy':this.state.studyBy
  };
  
 
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  
  fetch('/patient/submitResponse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
    },
    body: formBody
  })
  .then(res=>res.json())
  .then(res=>{
 
    if(res){
      console.log('My email', this.props.email)
      console.log('Response', res)
     
    };
  }
  );

    this.setState({ openSurvey: false });



        //Expire Token
        var details = {
          'token':this.state.passcode,
          };
          
        
          var formBody = [];
          for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
          
          fetch('/register/ExpireToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
            },
            body: formBody
          }).then(res=>res.json())
          .then(res=>{
            console.log("we are in this function");});


  }

  handleRadioChange1 = event => {
    this.setState({ value1: event.target.value });
  };
  handleRadioChange2 = event => {
    this.setState({ value2: event.target.value });
  };
  handleRadioChange3 = event => {
    this.setState({ value3: event.target.value });
  };
  handleRadioChange4 = event => {
    this.setState({ value4: event.target.value });
  };
  handleRadioChange5 = event => {
    this.setState({ value5: event.target.value });
  };
  handleRadioChange6 = event => {
    this.setState({ value6: event.target.value });
  };
  handleRadioChange7 = event => {
    this.setState({ value7: event.target.value });
  };
  handleRadioChange8 = event => {
    this.setState({ value8: event.target.value });
  };
  handleRadioChange9 = event => {
    this.setState({ value9: event.target.value });
  };
  handleRadioChange10 = event => {
    this.setState({ value10: event.target.value });
  };
  handleRadioChange11 = event => {
    this.setState({ value11: event.target.value });
  };
  handleRadioChange12 = event => {
    this.setState({ value12: event.target.value });
  };
  handleRadioChange13 = event => {
    this.setState({ value13: event.target.value });
  };
  handleRadioChange14 = event => {
    this.setState({ value14: event.target.value });
  };
  handleRadioChange15 = event => {
    this.setState({ value15: event.target.value });
  };
  handleRadioChange16 = event => {
    this.setState({ value16: event.target.value });
  };
  handleRadioChange17 = event => {
    this.setState({ value17: event.target.value });
  };
  handleRadioChange18 = event => {
    this.setState({ value18: event.target.value });
  };
  handleRadioChange19 = event => {
    this.setState({ value19: event.target.value });
  };
  handleRadioChange20 = event => {
    this.setState({ value20: event.target.value });
  };
  handleRadioChange21 = event => {
    this.setState({ value21: event.target.value });
  };
  handleRadioChange22 = event => {
    this.setState({ value22: event.target.value });
  };

  changeTopFive = (e) => {
    this.setState({ top5: e.target.value });
  
    };


  //hanlde signup
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });

    console.log(this.state);
    //have to make API req here
      var details = {
        'email': this.state.signupEmail,
        'password': this.state.signupPassword,
        'type':this.state.type,
        'firstname':this.state.signupFname,
        'lastname':this.state.signupLname
        };
        
      
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        fetch('/register', {
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
  //handle change
  handleChangeRadio = event => {
    this.setState({ signupType: event.target.value });
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

  changeSignupPassword = e => {
    this.setState({
      signupPassword: e.target.value
    });
  };

  handleSubmit = (evt) => {
      if (!this.canBeSubmitted()) {
        evt.preventDefault();
        return;
      }
    }
  canBeSubmitted() {
    const errors = validate(this.state.qrId);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleChange = name => event => {
    
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state)
  };

//SurveySYstem

  guestSurvey=()=>{

    //Validae Token
    var details = {
      'token':this.state.passcode,
      };
      
    
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      
      fetch('/register/Verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
        },
        body: formBody
      }).then(res=>res.json())
      .then(res=>{
        console.log("we are in this function");
        //Take Survey
          if(res.studyBy){
            console.log(res);
            this.setState({
              studyBy:res.studyBy,
              studyName :res.studyName,
              email:res.fname,
            })
            this.handleOpenSurvey();
          };
        }
      );




  }



  handleClick = () => {
    console.log(this.state)
    var details = {
     'email': this.state.userName,
     'password': this.state.Password,
     'type':this.state.type
 };
 

 var formBody = [];
 for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");
 
 var reqtype = this.state.type.toString();
 fetch('/'+reqtype, {
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
    console.log(res.token);
     if(res.type==="doctor"){
      this.props.updateHeadOffice(res.token , res.email);
     }
     else if(res.type==='patient'){
      this.props.updateWarehouse(res.token , res.email);
     }
     else{
       this.props.handleOpen();
     }
   };
 }
 );
  
 
 this.setState({
      userName:'',
      Password:'',
      type:'doctor'
    })

  }
  changeUsername = e => {
    this.setState({
      userName: e.target.value
    });
  };

  changePassword = e => {
    this.setState({
      Password: e.target.value
    });
}
  changepasscode = e => {
    this.setState({
      passcode: e.target.value
    });
}
  changeType = e => {
    this.setState({
      type: e.target.value
    });
  }

  logoutScreen = () => {
    this.props.logoutScreen()
  }


  render() {
    const { classes } = this.props;
    const errors = validate(this.state.userName,this.state.Password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);


    return (
      <div>
           <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          NOZ
        </Typography>
      </Toolbar>
    </AppBar>
    <Typography variant="display1" color="inherit" align="center">
         <h3> NOZ : Clinical Search Made Simple </h3>
         The online Research Portal designed for ENTs by ENTs
        </Typography>
    <Card className={classes.card}>
     
    <form className={classes.container} noValidate autoComplete="off"> 
    <CardContent>
    <TextField
    id="Email"
    label="Email"
    value={this.state.userName}
    placeholder="Enter Your Email"
    className={classes.textField}
    onChange={e => this.changeUsername(e)}
    margin="normal"
  />
    </CardContent>
    <CardContent>
  <TextField
    id="Password"
    label="Password"
    value={this.state.Password}
    placeholder="Enter Your Password"
    onChange={e => this.changePassword(e)}
    className={classes.textField}
    type='password'
    margin="normal"
  />
</CardContent>
<CardContent>
<TextField
          id="type"
          select
          className={classes.textField}
          value={this.state.type}
          onChange={e=>this.changeType(e)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your type"
          margin="normal"
        >
          {dropdowntypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
</CardContent>

<CardContent>


      <Grid container spacing={8} justify="center">
         <Grid item xs={6} justify="center">
            <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick.bind(this)} disabled={isDisabled}>
              Login
            </Button>
         </Grid>

        <Grid item xs={6} justify="center">
          <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClickOpen.bind(this)} disabled={isDisabled}>
            Sign-up
          </Button>
        </Grid>

      </Grid>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To signup to this service, please enter your details.
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
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={e => this.changeSignupPassword(e)}
              value={this.state.signupPassword}
              fullWidth
            />
            <TextField
                id="type"
                select
                className={classes.textField}
                value={this.state.type}
                onChange={e=>this.changeType(e)}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select your type"
                margin="normal"
              >
                {dropdowntypes.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Signup
            </Button>
          </DialogActions>
        </Dialog>
      <TextField
        id="code"
        label="Pass Code"
        value={this.state.passcode}
        placeholder="Have a Passcode?"
        onChange={e => this.changepasscode(e)}
        className={classes.textField}
        margin="normal"
      />  
      <Button onClick={this.guestSurvey} color="primary">GO</Button>

</CardContent>
</form>
</Card>

      {/* SURVEY FORM  */}
      <Dialog
          open={this.state.openSurvey}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Survey</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <small>
              Below you will find a list of symptoms and social/emotional consequences of your rhinosinusitis. We would like to know more about
              these problems and would appreciate your answering the following questions to the best of your ability. There are no right or wrong
              answers, and only you can provide us with this information. Please rate your problems as they have been over the past two weeks.
              Thank you for your participation
              </small>
            </DialogContentText>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>1. Need to blow nose</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q1"
                    value={this.state.value1}
                    onChange={this.handleRadioChange1}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>2. Nasal Blockage</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value2}
                    onChange={this.handleRadioChange2}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>3. Sneezing </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q3"
                    value={this.state.value3}
                    onChange={this.handleRadioChange3}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>4. Runny nose </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q4"
                    value={this.state.value4}
                    onChange={this.handleRadioChange4}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>5. Cough </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q5"
                    value={this.state.value5}
                    onChange={this.handleRadioChange5}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>6. Post-nasal discharge </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q6"
                    value={this.state.value6}
                    onChange={this.handleRadioChange6}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>7. Thick nasal discharge </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q7"
                    value={this.state.value7}
                    onChange={this.handleRadioChange7}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>8. Ear fullness </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q8"
                    value={this.state.value8}
                    onChange={this.handleRadioChange8}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>9. Dizziness</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q9"
                    value={this.state.value9}
                    onChange={this.handleRadioChange9}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>10. Ear pain </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q10"
                    value={this.state.value10}
                    onChange={this.handleRadioChange10}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>11. Facial pain/pressure  </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q11"
                    value={this.state.value11}
                    onChange={this.handleRadioChange11}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>12. Decreased Sense of Smell/Taste </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q12"
                    value={this.state.value12}
                    onChange={this.handleRadioChange12}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                          
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>13. Difficulty falling asleep </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q13"
                    value={this.state.value13}
                    onChange={this.handleRadioChange13}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>14. Wake up at night </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q14"
                    value={this.state.value14}
                    onChange={this.handleRadioChange14}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>15. Lack of a good night’s sleep</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q15"
                    value={this.state.value15}
                    onChange={this.handleRadioChange15}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>16. Wake up tired </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value16}
                    onChange={this.handleRadioChange16}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>17. Fatigue</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value17}
                    onChange={this.handleRadioChange17}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>18. Reduced productivity  </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q18"
                    value={this.state.value18}
                    onChange={this.handleRadioChange18}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>19. Reduced concentration  </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q19"
                    value={this.state.value19}
                    onChange={this.handleRadioChange19}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>20. Frustrated/restless/irritable</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q20"
                    value={this.state.value20}
                    onChange={this.handleRadioChange20}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>21. Sad </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value21}
                    onChange={this.handleRadioChange21}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>22. Embarrassed</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q22"
                    value={this.state.value22}
                    onChange={this.handleRadioChange22}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <TextField
              margin="dense"
              id="top5"
              label="5 Major Items, seprate by commas"
              type="text"
              onChange={e => this.changeTopFive(e)}
              value={this.state.top5}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSurvey} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TextFields);

