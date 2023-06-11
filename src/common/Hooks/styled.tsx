import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  font-family: Arial, sans-serif;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CalendarButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const CalendarMonth = styled.div`
  font-size: 18px;
`;

export const CalendarWeek = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CalendarWeekDay = styled.div`
  flex: 1;
  text-align: center;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;

export const CalendarDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;

  &.calendar__day--selected {
    background-color: #a0d3ff;
    color: white;
  }

  &.calendar__day--disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;