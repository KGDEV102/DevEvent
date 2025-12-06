import React from 'react'
import ExploreBtn from "@/components/exploreBtn";
import  img1 from "../public/images/event1.png";
import img2 from "../public/images/event2.png";
import EventCard from "@/components/eventCard";
import events from "@/lib/constant";
const Page = () => {

    return (
       <section>
           <h1 className={'text-center'}>The hub for Evey Dev <br/> Event You Can't Miss</h1>
           <p className={'mt-5 text-center'}>Hackathons, Meetups, and Conferences, All in one place</p>
           <ExploreBtn />
           <div className={'mt-20 space-y-7'}>
               <h3>Featured Event</h3>
               <ul className={'events'}>
                   {events.map(event =>(

                           <EventCard {...event} key={event.title}/>

                   ))}
               </ul>

           </div>
       </section>
    )
}
export default Page
