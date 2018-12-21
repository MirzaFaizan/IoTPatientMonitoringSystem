import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


class ViewDetailed extends React.Component {

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
    
    fetch('/doctor/viewReadings', {
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
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display2"> Patient Detailed Monitoring</Typography>
        <Paper >
          hi
        </Paper>
      </div>
    );
  }
}


export default ViewDetailed;
