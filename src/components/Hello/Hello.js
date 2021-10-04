import React, {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import format from 'date-fns/format'
import parse from 'date-fns/parse';
import './calender.css'



const Hello = () => {

    const [eventData, setEventData] = useState()
    const [events, setEvents] = useState([])


    const createEvents = (eventData) => {


        eventData?.map(x => {
            console.log('x',x)
            const dateStart = format(parse(x.startDate, 'dd.MM.yyyy', new Date()), 'yyyy-MM-dd');
            const dateEnd = format(parse(x.endDate, 'dd.MM.yyyy', new Date()), 'yyyy-MM-dd');
            console.log('datestart',dateStart)


            const singleEvent = {
                title: `${x.name} – ${x.desc}`,
                start: `${dateStart}T${x.startTime}:00+02:00`,
                end: `${dateEnd}T${x.endTime}:00+02:00`,
                url: x.videoUrl,
                backgroundColor: x.eventColor,
                textColor: 'black',
                borderColor: 'white'
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


    const eventclick = (event) => {
        event.jsEvent.preventDefault()
        console.log('click event',event)
        window.open(`/#/event/${event.event.url}`,'_self')
    }

    const eventMouseEnter = (event) => {
        event.jsEvent.preventDefault()
        console.log('click event',event)
        window.open(`/#/event/${event.event.url}`,'_self')
    }


    return (


            <div>
                <FullCalendar
                    plugins={[ timeGridPlugin ]}
                    initialDate={"2022-04-01"}
                    initialView={'timeGridDay'}
                    editable={false}
                    eventClick={eventclick}
                    nowIndicator={true}
                    events={events}
                    allDaySlot={false}
                    dayHeaders={false}
                    locale={'fi'}
                    slotMinTime='10:00:00'
                    slotMaxTime={'21:00:00'}
                    headerToolbar={{start: '', center: 'title', end: ''}}
                    height={'525px'}
                    titleFormat={{weekday: 'long', year:'numeric', month: 'long', day: 'numeric', omitCommas: true}}
                    buttonIcons={false}
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
