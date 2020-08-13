import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import EditPage from '@/components/EditPage'



class Routers extends Component {

	// 这么做的目的是，不使Header和Rightnav多次加载执行didmount
	/*getContainer (jsx) {
		return (
			<Fragment>
				<div className="container main-content-wrapper">
					{jsx}
				</div>
			</Fragment>
		)
	}*/

	render () {
	  return (
	  	<Router>
		    	<Switch>
		    		
		        <Route exact path="/">
							<EditPage />
		        </Route>
		        
		        <Route path="*">
		          404
		        </Route>
		      </Switch>
	    </Router>
	  );
	}
}



export default Routers;
