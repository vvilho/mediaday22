import React, {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import format from 'date-fns/format'
import parse from 'date-fns/parse';
import './Calender.css'
import {useHistory} from "react-router-dom";
import colors from '../../siteWideColors';


const Calendar = () => {

    let history = useHistory();
    const [eventData, setEventData] = useState()
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        try {
            const response = await fetch('/data/events.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
            const json = await response.json();
            setEventData(json.events);
        } catch (err) {
            console.log('Calendar getEvents error', err.message);
        }
    }

    const createEvents = (eventData) => {


        // eslint-disable-next-line array-callback-return
        eventData?.map(x => {
            const dateStart = format(parse(x.startDate, 'dd.MM.yyyy', new Date()), 'yyyy-MM-dd');
            const dateEnd = format(parse(x.endDate, 'dd.MM.yyyy', new Date()), 'yyyy-MM-dd');


            const singleEvent = {
                title: `${x.name} – ${x.desc}`,
                start: `${dateStart}T${x.startTime}:00+02:00`,
                end: `${dateEnd}T${x.endTime}:00+02:00`,
                url: x.videoUrl,
                backgroundColor: x.eventColor,
                textColor: 'black',
                borderColor: colors.base
            }

            setEvents(oldEvents => [...oldEvents, singleEvent]);
        })
    }


    useEffect(() => {
        getEvents();
    }, [])

    useEffect(() => {
        createEvents(eventData)
    }, [eventData])


    const eventClick = (event) => {
        event.jsEvent.preventDefault()
        history.push(`/event/${event.event.url}`)
    }
    return (


        <div>
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialDate={"2022-04-01"}
                initialView={'timeGridDay'}
                editable={false}
                eventClick={eventClick}
                nowIndicator={true}
                events={events}
                allDaySlot={false}
                dayHeaders={false}
                locale={'fi'}
                slotMinTime='10:00:00'
                slotMaxTime={'21:00:00'}
                headerToolbar={{start: '', center: 'title', end: ''}}
                height={'560px'}
                titleFormat={{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', omitCommas: true}}
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
export {Calendar}
