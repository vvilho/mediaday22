import React, {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import format from 'date-fns/format'




const Hello = () => {

    const [eventData, setEventData] = useState()
    const [events, setEvents] = useState([])


    // const fetchEvents = async () => {
    //     const response = await fetch('data/events.json',{
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     });
    //     setEventData(await response.json());
    //     console.log("event data",typeof (await eventData.events))
    // }

    const createEvents = (eventData) => {


        eventData?.map(x => {
            const dateStart = format(new Date(x.startDate), 'yyyy-MM-dd');
            const dateEnd = format(new Date(x.endDate), 'yyyy-MM-dd');

            const singleEvent = {
                title: x.name,
                start: `${dateStart}T${x.startTime}:00+02:00`,
                end: `${dateEnd}T${x.endTime}:00+02:00`,
            }

            setEvents(oldEvents => [...oldEvents, singleEvent]);
        })
    }


    useEffect(() => {
        fetch('data/events.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setEventData(myJson.events);
            });
    }, [])

    useEffect(()=>{
        createEvents(eventData)
    },[eventData])


    const eventclick = (info) => {
        window.open(`/#/event/${info.event.data}`,'_self')
    }


    return (


            <div>
                <h3>Hello all</h3>
                <FullCalendar
                    plugins={[ timeGridPlugin ]}
                    initialDate={"2022-02-02"}
                    initialView={'timeGridDay'}
                    editable={false}
                    eventClick={eventclick}
                    nowIndicator={true}
                    events={events}
                    allDaySlot={false}
                    dayHeaders={true}
                    locale={'swe'}
                    slotMinTime={'07:00:00'}

                    slotLabelFormat={[{
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: false
                    }]}

                    eventTimeFormat={{
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                     }}
                />
            </div>



    )
}
export {Hello}
