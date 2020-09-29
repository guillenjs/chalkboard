import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ScheduleEvent from './ScheduleEvent'

export class Schedule extends Component {


    render() {
        return (
            <div>
                {/* {this.renderEvent()} */}
                <h1>Schedule</h1>
                <div className="flex-container">
                     <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={this.props.assignments}
                    />
                </div>
            </div>
        )
    }
}

export default Schedule
