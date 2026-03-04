import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {events,EventItem} from "@/lib/constants"
const Page = () => {
    return (
        <section>
            <h1 className="text-center">
                The Hub For Every Dev <br />
                Event You Can&#39;t Miss
            </h1>
            <p className="text-center mt-5">Hackathons, Meetups,and Conferences, All in One Place</p>
            <ExploreBtn />
            <div className="mt-20 space-y-7" id="events">
                <h3>Features</h3>

                <ul className="events list-none">
                    {
                        events.map((event:EventItem,index) => (
                            <li key={index}>
                                <EventCard {...event}></EventCard>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Page
