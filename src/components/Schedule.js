import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export class Schedule extends Component {
    render() {
        return (
            <div>
                <h1>Schedule</h1>
                <div className="flex-container">
                    {/* <div class="flex-item"><h3>mon</h3></div>
                    <div class="flex-item-alt"><h3>tues</h3></div>
                    <div class="flex-item"><h3>wed</h3></div>
                    <div class="flex-item-alt"><h3>thurs</h3></div>
                    <div class="flex-item"><h3>fri</h3></div> */}
                     <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'event 1', date: '2020-09-29' },
                            { title: 'event 2', date: '2020-09-28' }
                          ]}
                    />
                </div>
            </div>
        )
    }
}

export default Schedule
