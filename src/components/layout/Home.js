import React, {Component} from 'react'
import Birds from '../containers/Birds'
import MapNavigation from '../containers/MapNavigation'
import BirdInfo from '../containers/BirdInfo'



class Home extends Component{

	render(){

		return (
<div>

					
					<Birds/>


			<div id="wrapper">


					<div id="main">

							<section id="map"><MapNavigation/></section>
							<section id="className">
								<div style={{position: 'relative'}} class="container">

										<BirdInfo/>

								</div>
							</section>


					</div>

			</div></div>


			)
	}
}
export default Home
