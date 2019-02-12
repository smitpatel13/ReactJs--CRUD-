import React, {Component} from 'react';

class EditHolder extends React.Component{
  constructor(props){
    super(props)
    this.createList = this.createList.bind(this);
    this.tableEdit = this.tableEdit.bind(this);
    this.state = {
      list: [],
      id:'',
      Name:'',
      Type:'',
      Country:'',
      TimeSpan:'',
      BestMonth:'',
      editOn:0
    }
  }
  componentDidMount() {
    fetch('https://csunix.mohawkcollege.ca/~000737859/php/backend.php')
    .then( (respPost) => respPost.json())
    .then((postJSON) => {
      this.setState({
        list: postJSON
      });
    });
  }
  removeList(spots){
    var data = {
        id: spots.id,
      event: 'removeList'
    }
    fetch('https://csunix.mohawkcollege.ca/~000737859/php/backend.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-list': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((respPost) => respPost.json())
    .then((postJSON) => {
      this.setState({
        list: postJSON
      });
      return;
    })
    .catch((error) => {
      throw (error);
    });
  }
  EditTable(spots){
    this.setState({
      id: spots.id,
      editOn:1,
      Name: spots.Name,
      Type: spots.Type,
      Country: spots.Country,
      TimeSpan: spots.TimeSpan,
      BestMonth:spots.BestMonth
    });
  }
  tableEdit(){
    fetch("https://csunix.mohawkcollege.ca/~000737859/php/backend.php", {
      method: 'POST',
      headers: {
        'Content-list': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        event:'tableEdit',
        id:  this.state.id,
        Name: this.state.Name,
        Type: this.state.Type,
        Country: this.state.Country,
        TimeSpan: this.state.TimeSpan,
        BestMonth:this.state.BestMonth
      })
    }).then(respPost => respPost.json())
    .then(postJSON => {
      this.setState({
        list: postJSON
      });
      return;
    });
  }

  createList(){
    fetch("https://csunix.mohawkcollege.ca/~000737859/php/backend.php", {
      method: 'POST',
      headers: {
        'Content-list': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        event:'createRecord',
      id:'',
      Name: this.state.Name,
      Type: this.state.Type,
      Country: this.state.Country,
      TimeSpan: this.state.TimeSpan,
      BestMonth:this.state.BestMonth})
    }).then(respPost => respPost.json())
    .then(postJSON => {
      this.setState({
        list: postJSON
      });
      return;
    })
    .catch((error) => {
      throw (error);
    });
  }
  onStateChange = (element) => {
    this.setState({[element.target.name]: element.target.value});
  }
  render(){
    let button = <button type="button" onClick={() => this.createList()}>Create</button>;
    if(this.state.editOn > 0){
     button = <button type="button" onClick={() => this.tableEdit()} >Update</button>;
    }
    return(
      <div>
      <table>
      <thead>
      <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Country</th>
      <th>TimeSpan</th>
      <th>BestMonth</th>
      <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <input type='text' name='Name' required placeholder='Name' value={this.state.Name} onChange={this.onStateChange}/> </td>
      <td><input type='text' name='Type' placeholder='Type' required value={this.state.Type} onChange={this.onStateChange} /></td>
      <td><input type='text'  name='Country' placeholder='Country' required value={this.state.Country} onChange={this.onStateChange} /></td>
      <td><input type='text' name='TimeSpan' placeholder='Time Span' required value={this.state.TimeSpan} onChange={this.onStateChange} /></td>
      <td><input type='text' name='BestMonth' placeholder='Best Month to Visit'  required value={this.state.BestMonth} onChange={this.onStateChange} /></td>
      <td>{button}</td>
      </tr>
      </tbody>
      </table>
      <table>
      <thead>
      <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Type</th>
      <th>Country</th>
      <th>TimeSpan</th>
      <th>BestMonth</th>
      </tr>
      </thead>
      <tbody>
      {this.state.list.map(spots =>
        <tr key={spots.id}>
        <td>{spots.id} </td>
        <td>{spots.Name} </td>
        <td>{spots.Type}</td>
        <td>{spots.Country}</td>
        <td>{spots.TimeSpan}</td>
        <td>{spots.BestMonth}</td>
        <td> <button list="button"  onClick={() => this.removeList(spots)}>removeList</button>
        </td>
        <td><button list="button"  onClick={() => this.EditTable(spots)}>Edit</button></td>
        </tr>
      )}
      </tbody>
      </table></div>
    );
  }
}
export default EditHolder;
