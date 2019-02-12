import React, {Component} from 'react';
class ItemsHolder extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: []
    };
    this.offSort = this.offSort.bind(this)
	this.onSort = this.onSort.bind(this)
  }
  componentDidMount() {
    fetch('https://csunix.mohawkcollege.ca/~000737859/php/backend.php')
    .then( (resPost) => resPost.json())
    .then((resPostJson) => {
      this.setState({
        list: resPostJson
      });
    });
  }
  onSort(event, sortKey){
    const list = this.state.list;
    list.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({list})
  }
  offSort(event, sortKey){
    const list = this.state.list;
    list.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
    this.setState({list})
  }
  render(){
    return(
      <div>
      <table>
      <thead>
      <tr>
      <th>id</th>
      <th onClick={e => this.onSort(e, 'Name')}> Name</th>
      <th onClick={e => this.offSort(e, 'Type')}>Type</th>
      <th onClick={e => this.onSort(e, 'Country')}>Country</th>
      <th onClick={e => this.onSort(e, 'TimeSpan')}>TimeSpan</th>
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
        </tr>
      )}
      </tbody>
      </table>
      </div>
    );
  }
}
export default ItemsHolder;
