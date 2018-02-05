import React, {Component} from 'react';
import './Stephane.css';
import lesdentslanches from '../lesdentslanches.jpg';
import sagesse from '../sagesse.jpg';


class Stephane extends Component{
  render(){
    return(
    <div className="mainnew">
        <section className="maininfo">
            <div className="imgmain">
                <img src={lesdentslanches} alt="dentsblanches" />
            </div>
        
            <h3>Jour - Mois - Année</h3>
            <h2 className="maintitle">Les dents blanches</h2>
          <p className="newmain">
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
         </p>
    
        <a className="more" href="#">lire plus</a>
        </section>
      </div>
    );
  }
}



export default Stephane;

