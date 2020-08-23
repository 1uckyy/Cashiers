import * as React from 'react';
import './Cashiers.css';

interface IState{
	count: number
	users: any[]
}

class Cashiers extends React.Component<any, IState> {
	
	constructor(props: any) {
    super(props);
    this.state = {
		count: 0,
        users: [],
    };
	}
	
	public render() {
		
	fetch('/api/cashiers', {method: 'GET'})
  .then((response) => {
    return response.json();
   })
  .then((data) => {
	  this.setState({users:data});
  });
	
    return (<div className="FormOfCachiers">
	<pre className="NumberAndFIO">  №  ФИО</pre>
	{this.state.users.map((user: any, index)=> 
	<div className="FormOfDiv" key={user._id}>
		<div style={{marginLeft:'38px', marginTop:'10px'}}>{user.fullName}</div>
		<div style={{marginLeft:'15px', marginTop:'-18px'}}>{index+1}</div>
	</div>)}
	</div>);
  }
}

export default Cashiers;