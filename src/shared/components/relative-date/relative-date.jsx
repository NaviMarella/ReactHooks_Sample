import React from "react";
import "./relative-date.css";
import { RelativeTime } from 'relative-time-react-component';

const RelativeDate = ({ text='Updated', relTime }) => {
    return (
        <div className="relative_date">
            <span className="relative_date-text">{text}</span>
            <RelativeTime time={new Date(relTime)}>
            </RelativeTime>
        </div>
    )
}

export default RelativeDate