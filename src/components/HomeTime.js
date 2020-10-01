import React, { Component } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



export class HomeTime extends Component {


  
  render() {
  

    return (
      <div className="home-cal">
        <FullCalendar
            
                            plugins={[ dayGridPlugin ]}
                            initialView="dayGridWeek"
                        events={this.props.assignments}
                    />
      </div>
    )
  }
}

export default HomeTime
