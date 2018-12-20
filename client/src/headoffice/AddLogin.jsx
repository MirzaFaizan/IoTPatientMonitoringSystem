import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Card, {  CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  button: {
    margin:theme.spacing.unit,
    display:'flex',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: 200,
  },
  card: {
    marginLeft:100,
    marginRight:100,
    marginTop:10,
    //maxWidth: 350,
  },
});


class TextFields extends React.Component {

  state = {
    title: '',
    patients: '',
    date: '',
    inclusionC: '',
    exclusionC:'',
    treatmentProtocol:'',
    info:'',
  }



  //change function
  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  changeDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  changeStudyInfo = e => {
    this.setState({
      info: e.target.value
    });
  };
  

  changeEC = e => {
    this.setState({
      exclusionC: e.target.value
    });
  };

  changeIC = e => {
    this.setState({
      inclusionC: e.target.value
    });
  };

  changePatientCount = e => {
    this.setState({
      patients: e.target.value
    });
  };

  changeTP = e => {
    this.setState({
      treatmentProtocol: e.target.value
    });
  };
  

  handleClick = () => {
    console.log(this.props.token);
    //api call to store data in database here
      console.log(this.state, this.props.email)
      var details = {
        'title':this.state.title,
        'date': this.state.date,
        'patients':this.state.patients,
        'ic':this.state.inclusionC,
        'ec': this.state.exclusionC,
        'tp':this.state.treatmentProtocol,
        'info':this.state.info,
        'token':this.props.token,
        'studyBy': this.props.email,
      }
   
   var formBody = [];
   for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
   }
   formBody = formBody.join("&");
   
   fetch('/doctor/addStudy', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
     },
     body: formBody
   })
   .then(res=>res.json())
   .then(res=>{
  
     console.log("API response function");
     if(res){
      console.log(res);
      this.props.handleopen();
     }
     else {
       this.props.handleError();
     }
     ;
   }
   );
      //form saaf kia hai 
    this.setState({
      title: '',
      patients: '',
      date: '',
      inclusionC: '',
      exclusionC:'',
      treatmentProtocol:'',
      info:'' 
    })
  }

    
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="display2">Add a new Study</Typography>
        <Card className={classes.card}>
      <form className={classes.container} noValidate autoComplete="off"> 

      <CardContent>
      <TextField
          id="Name"
          label="Title"
          value={this.state.title}
          placeholder="Enter Study Title"
          className={classes.textField}
          onChange={e => this.changeTitle(e)}
          margin="normal"
          refs='name'
        />
        </CardContent>

        <CardContent>
        <TextField
          id="Enroll"
          label="No. of Patients"
          value={this.state.patients}
          placeholder="Enter No. of patients"
          onChange={e => this.changePatientCount(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="time"
          label="Deadline "
          value={this.state.date}
          placeholder="Enter Deadline Date"
          onChange={e => this.changeDate(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="ic"
          label="Inclusion Criteria"
          value={this.state.inclusionC}
          placeholder="Enter Enclusion criteria"
          onChange={e => this.changeIC(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="ec"
          label="Exclusion Criteria"
          value={this.state.exclusionC}
          placeholder="Enter Exclusion Criteria"
          onChange={e => this.changeEC(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="protocol"
          label="Treatment Protocol"
          value={this.state.treatmentProtocol}
          placeholder="Describe Treatment Protocol"
          onChange={e => this.changeTP(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="studyinfo"
          label="Study Info"
          value={this.state.info}
          placeholder="Enter Study Info"
          onChange={e => this.changeStudyInfo(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick} >
        <AddIcon/>
        </Button>
        </CardContent>
        </form>
      </Card>
      </div>
      
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
