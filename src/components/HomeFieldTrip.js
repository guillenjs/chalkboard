import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomeFieldTrip extends Component {
    state ={
        museumObj: {},
        isPublicDomain: null
    }
    
   objId = Math.floor(Math.random() * 40000)
//this is going to be used in order to get image from database to render fieldtrip artwork
        getImage = () => {
            if (this.state.isPublicDomain === null )
            {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.objId}`)
                .then(res => res.json())
                .then(obj => {
                    console.log(obj.isPublicDomain)
                    this.setState({
                        museumObj: obj,
                        isPublicDomain: obj.isPublicDomain
                    })
                })
            }
        }

      


    render() {
        console.log(this.state.museumObj)
        console.log(this.state.isPublicDomain)
        return (
            <div className = "home-field-trip">
                     {this.getImage()}
            {this.state.museumObj.isPublicDomain?   
            <h4>F I E L D - T R I P
                <br></br>
                <br></br>
                        Title: {this.state.museumObj.objectName}
                        <br></br>
                        Medium: {this.state.museumObj.medium}
                        <br></br>
                         Age: {this.state.museumObj.objectDate}
                         <br></br>
                         Origin: {this.state.museumObj.country}
                         <br></br>
                         <br></br>
                         <br></br>
                         <a href={this.state.museumObj.objectURL}><button className="explore-btn">Explore</button></a>
                </h4>:          
            <h4>F I E L D - T R I P
            <br></br>
            <br></br>
                    Title: Figure
                    <br></br>
                    Medium: "Glazed pottery (Sawankhalok ware)"
                    <br></br>
                     Age: ca. 15th century
                     <br></br>
                     Origin: Thailand
                     <br></br>
                     <br></br>
                     <br></br>
                     <a href="https://www.metmuseum.org/art/collection/search/38312" ><button className="explore-btn">Explore</button></a>
            </h4>
    }  
     
     {this.state.museumObj.isPublicDomain? 
                <div><img className="field-trip" src={this.state.museumObj.primaryImage}/></div>:
              <div><img className="field-trip" src="https://images.metmuseum.org/CRDImages/as/original/264786_1984.491.5.jpg" /></div>
     }
            </div>
        )
    }
}

export default HomeFieldTrip
