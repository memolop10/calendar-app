import React, { useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar'
import moment, { months } from 'moment'

import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { messages } from '../../helpers/calendar-messages-es';

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { useSelector } from 'react-redux';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment) // or globalizeLocalizer


const CalendarScreen = () => {

  const dispatch = useDispatch()

  const { events, activeEvent } = useSelector( state => state.calendar )

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = () => {
    console.log('abriendo modal');
    dispatch( uiOpenModal() )
  }

  const onSelectEvent = (e) => {
    dispatch( eventSetActive(e) )
  }

  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem( 'lastView', e );
  }

  const onSelectSlot = (e) => {
    dispatch( eventClearActiveEvent() )
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    
    const style = {
      background:'#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <div>
      <Navbar />

      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        messages={ messages }
        onSelectEvent={ onSelectEvent }
        onDoubleClickEvent={ onDoubleClick }
        eventPropGetter={ eventStyleGetter }
        onView={ onViewChange }
        onSelectSlot={ onSelectSlot }
        selectable={ true }
        view={ lastView }
        components={{
          event: CalendarEvent
        }}
      />

        <AddNewFab />
        {
          activeEvent !== null &&
          <DeleteEventFab />
        }

    <CalendarModal />
    </div>
)}

export default CalendarScreen;