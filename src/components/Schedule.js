import React, { Component } from 'react'

export class Schedule extends Component {
    render() {
        return (
            <div>
                <h1>Schedule</h1>
                <div class="flex-container">
                    <div class="flex-item"><h3>mon</h3></div>
                    <div class="flex-item-alt"><h3>tues</h3></div>
                    <div class="flex-item"><h3>wed</h3></div>
                    <div class="flex-item-alt"><h3>thurs</h3></div>
                    <div class="flex-item"><h3>fri</h3></div>
                </div>
            </div>
        )
    }
}

export default Schedule
