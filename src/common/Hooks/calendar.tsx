import React, { useState } from 'react';
import {
    CalendarWrapper,
    CalendarHeader,
    CalendarButton,
    CalendarMonth,
    CalendarWeek,
    CalendarWeekDay,
    CalendarDays,
    CalendarDay,
  } from './styled';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = (): void => {
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = (): void => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handleDateClick = (date: number): void => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
    onDateSelect(selectedDate);
  };

  const renderDaysOfWeek = (): JSX.Element[] => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className="calendar__week-day">
        {day}
      </div>
    ));
  };

  const renderCalendarDays = (): JSX.Element[] => {
    const totalDays = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add blank cells for previous month's days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`prev-${i}`} className="calendar__day calendar__day--disabled"></div>);
    }

    // Add cells for current month's days
    for (let i = 1; i <= totalDays; i++) {
      const isSelected = selectedDate.getDate() === i && selectedDate.getMonth() === currentMonth.getMonth();
      const className = isSelected ? 'calendar__day calendar__day--selected' : 'calendar__day';
      days.push(
        <div key={i} className={className} onClick={() => handleDateClick(i)}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
<CalendarWrapper>
      <CalendarHeader>
        <CalendarButton onClick={handlePrevMonth}>&lt;</CalendarButton>
        <CalendarMonth>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</CalendarMonth>
        <CalendarButton onClick={handleNextMonth}>&gt;</CalendarButton>
      </CalendarHeader>
      <CalendarWeek>
        {daysOfWeek.map((day, index) => (
          <CalendarWeekDay key={index}>{day}</CalendarWeekDay>
        ))}
      </CalendarWeek>
      <CalendarDays>
        {renderCalendarDays()}
      </CalendarDays>
    </CalendarWrapper>
  );
};

export default Calendar;