import React from "react"
import ReactDOM from "react-dom"

class DateNav extends React.Component {

  monthName(index) {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    return monthNames[index]
  }

  currentDateString() {
    const date = new Date()
    const dateParts = [
      date.getDate(),
      this.monthName(date.getMonth()),
      date.getFullYear()
    ]
    return dateParts.join(" ")
  }

  previousDayURL() {
    const date = new Date()
    const previousDay = new Date(date.setDate(date.getDate() - 1));
    return this.dateToAbsolutePath(previousDay)
  }

  nextDayURL() {
    const date = new Date()
    const nextDay = new Date(date.setDate(date.getDate() + 1));
    return this.dateToAbsolutePath(nextDay)
  }

  dateToAbsolutePath(date) {
    const path = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    ].join("/")
    return "/" + path
  }

  showNextDate() {
    return true
  }

  render() {
    return (
      <p className="DateNav">
        <span className="DateNav-arrow">
          <a href={this.previousDayURL()}>«</a>
        </span>
        {this.currentDateString()}
        <span className="DateNav-arrow">
          {this.showNextDate() &&
            <a href={this.nextDayURL()}>»</a>
          }
        </span>
      </p>
    )
  }
}

export default DateNav
