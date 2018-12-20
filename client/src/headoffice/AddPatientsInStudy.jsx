import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import Select from 'material-ui/Select/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControl from 'material-ui/Form/FormControl';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
    root: {
        width:'80%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        marginTop:'10px',
        overflow: 'auto',
        maxHeight: 500,
      },
      listSection: {
        backgroundColor: 'inherit',
      },
      ul: {
        backgroundColor: 'inherit',
        padding: 0,
      },
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
    width: '30%',
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
  componentDidMount(){
        var details = {
        'token':this.state.t,
        };
    

    var formBody = [];
    for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    
    fetch('/doctor/viewAllPatients', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
    },
    body: formBody
    })
    .then(res=>res.json())
    .then(res=>{

    console.log("we are in this function");
    if(res){
        console.log(res);
        this.setState({
        data:res
        })
        console.log("After function");
    };
    }
    );
     
    var details = {
        'token':this.state.t,
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
    if(res){
        console.log(res);
        this.setState({
        studyData:res
        });
        console.log("study data" , this.state.studyData);
    };
    }
    );

  }

  state = {
    id: '',
    t:this.props.token,
    data:{},
    studyData:{},
    checked: [],
    study:'None'
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];//[...checked]<--this means keeping all previous states as well

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
      list:this.state.checked
    });
  };


  selectAll = () =>{
    var temp = this.state.data.map((item)=>{
        return item.email;
    });
    this.setState({
        checked:temp
    });
}

unSelectAll = () =>{
    
    this.setState({
        checked:[]
    });
}


handleStudyChange = event => {
    this.setState({ study: event.target.value });
  };

  

///MAIN HANDLE CLICK
handleClick = () => {
    console.log(this.state);
    console.log(this.state.checked);
    //api call to post data in database
    var details = {
     'name': this.state.study,
     'patients': this.state.checked,
     'token':this.state.t,
 };
 

 var formBody = [];
 for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");
 

 fetch('/doctor/updateStudy', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
   },
   body: formBody
 })
 .then(res=>res.json())
 .then(res=>{

   console.log("we are in this function");
   if(res){
    console.log(res);
    this.props.handleopen();
     console.log("After function");
   }
   else{
     this.props.handleError();
   }
   ;
 }
 );
      this.setState({
      name:'',
      shop:'',
      id:'',
      checked: [],
      package_number:''
    })

  }
 

  //api call to get all items from api
  render() {
    const { classes } = this.props;

    return (
    <div>
        <form className={classes.container} noValidate autoComplete="off"> 
                  
        
        <div className={classes.root}>
        
          <List>
            
            {Object.values(this.state.data).map(type => {
              
              if(!type.batch){
                return (<ListItem
                  key={type.email}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(type.email)}
                  className={classes.listItem}
                  >
                    <Checkbox
                      checked={this.state.checked.indexOf(type.email) !== -1}
                      tabIndex={-1}
                      disableRipple
                      color="primary"
                    />
                    <ListItemText primary={type.firstName} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Comments">
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>)
              }
                }
              )
            }
            </List>
          </div>

        <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick} >
        <AddIcon/>
        </Button>
      </form>
      <Button variant="raised" color="primary" className={classes.button} onClick={this.selectAll} >
            Select All
        </Button>
        <Button variant="raised" color="primary" className={classes.button} onClick={this.unSelectAll} >
            Un-Select All
        </Button>
        <div className="row">
        <FormControl extended>
          <InputLabel htmlFor="age-helper">Select Study</InputLabel>
          <Select
            value={this.state.study}
            onChange={this.handleStudyChange}
            input={<Input name="study" id="study" extended/>}
            extended
          >
            <MenuItem value="select">
              <em>None</em>
            </MenuItem>
            {(this.state.studyData)?Object.values(this.state.studyData).map((study)=>{
                if(study.studyBy===this.props.email) 
                {
                  return (<MenuItem value={study.name}> {study.name} </MenuItem>)
                }
            }):"Loading"}

          </Select>
          <FormHelperText>Please select the study</FormHelperText>
        </FormControl>
        
        </div>
    </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
