import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'
import superagent from 'superagent'


class Birds extends Component{


	componentDidMount(){
		const currentLocation = this.props.birds.currentLocation
		this.props.fetchBirds(currentLocation)
	}
	componentDidUpdate(){
		if(this.props.birds.list == null){
			const currentLocation = this.props.birds.currentLocation
			this.props.fetchBirds(currentLocation)
		}

	}
	showPhotos(name){
		this.props.selectBird(name)
	}
	render(){
		const list = this.props.birds.list || []

		return(
			<section id="header">
				<header>
					
					<h1 id="logo"><a href="#">Willis Corto</a></h1>
										{list.map((bird,i) => {
						return (<a
							key={i}
							onClick={this.showPhotos.bind(this,bird.comName)}
							style={{display: 'block'}} 
							href="#">{bird.comName}</a>)
					})}
				</header>
				<footer>
					<ul className="icons">
						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
					</ul>
				</footer>
			</section>




			)
	}
}

const stateToProps = (state) => {
	return{
		birds: state.birds
	}
}
const dispatchToProps = (dispatch) => {
	return {
		fetchBirds: (params) => dispatch(actions.fetchBirds(params)),
		selectBird: (name) => dispatch(actions.selectBird(name)),
	}
}

export default connect(stateToProps,dispatchToProps)(Birds)

