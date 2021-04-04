import React, { Component } from 'react';
import './style/Times.css';

const formatTime = (timeLeftInSecond) => {
  let minute = Math.floor(timeLeftInSecond / 60);
  if (minute < 10) minute = '0' + minute;

  let second = timeLeftInSecond - 60 * minute;
  if (second < 10) second = '0' + second;

  return `${minute}:${second}`;
}

export default class Times extends Component {
  render() {
    const isBreak = this.props.isBreak;

    if(isBreak){
      return (
        <div className="times">
          <div>
            <label id="timer-label">{this.props.timeLabel}</label>
            <span id="time-left-break">{formatTime(this.props.timeLeftInSecond)}</span>
          </div>
        </div>
      )
    }else{
      return (
        <div className="times">
          <div className="times-content">
            <label id="timer-label">{this.props.timeLabel}</label>
            <span id="time-left">{formatTime(this.props.timeLeftInSecond)}</span>
          </div>
        </div>
      )
    }
    
  }
}