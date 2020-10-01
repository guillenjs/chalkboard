import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomeFieldTrip extends Component {

//this is going to be used in order to get image from database to render fieldtrip artwork
        getImage = () => {
            const objId = Math.floor(Math.random() * 40000)
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objId}`)
                .then(res => res.json())
                .then(obj => console.log(obj))
        }

      


    render() {
        return (
            <div className = "home-field-trip">
                        
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
               

        
                    {this.getImage()}
              <div><img className="field-trip" src="https://images.metmuseum.org/CRDImages/as/original/264786_1984.491.5.jpg" /></div>
             
            </div>
        )
    }
}

export default HomeFieldTrip
