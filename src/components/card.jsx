import React from "react"
import star from '/assets/star.png'
import '../styles.css'

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0 )
    {
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online")
    {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--spots">{badgeText}</div>}
            <img src = {`/assets/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" height = "14px"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}