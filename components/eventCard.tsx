import React from 'react'
import Link from "next/link";
import Image from "next/image";
import pin from "../public/icons/pin.svg";
import  calendar from "../public/icons/calendar.svg";
import  clock from "../public/icons/clock.svg";
interface Props{
    image:string,
    title:string,
    slug:string,
    location:string,
    date:string,
    time:string,
}
const EventCard = ({image,title,slug,location,date,time}:Props) => {
    return (
        <Link href={`/events/${slug}`} id={'event-card'}>
            <Image src={image} alt={title} width={410} height={300} className='poster'/>
           <div>
               <Image src={pin} alt={'location'} width={14} height={14}/>
               <p>{location}</p>
           </div>
            <p className={'title'}>{<title></title>}</p>
            <div className={'datetime'}>
                <div>
                   <Image src={calendar} alt={'date'} width={14} height={14}/>
                    <p>{date}</p>
                </div>
                <div>
                   <Image src={clock} alt={"time"} width={14} height={14}/>
                   <p>{time}</p>
                </div>
            </div>
        </Link>
    )
}
export default EventCard
