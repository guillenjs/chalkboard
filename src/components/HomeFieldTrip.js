import React, { Component } from 'react'

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
                        
            <h4>F I E L D - T R I P</h4>
              <div><img className="field-trip" src="https://images.metmuseum.org/CRDImages/as/original/38_103.JPG" /></div>
             
            </div>
        )
    }
}

export default HomeFieldTrip
