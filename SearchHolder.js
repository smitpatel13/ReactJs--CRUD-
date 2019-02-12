	import React, {Component} from 'react';

	class SearchHolder extends React.Component{
	  constructor(props){
		super(props)
		this.state = {
		  searchValue: (typeof props.match.params.filter != "undefined") ? props.match.params.filter : "",
		  list: []
		};
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
	  render(){
		return(
		  <div>
		  <input id='search' type='text' name='Search' required placeholder='Search Data' value={this.state.Name}/> 
		  <table>
		  <thead>
		  <tr>
		  <th>id</th>
		  <th> Name</th>
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
			</tr>
		  )}
		  </tbody>
		  </table>
		  </div>
		);
	  }
	}
	export default SearchHolder;