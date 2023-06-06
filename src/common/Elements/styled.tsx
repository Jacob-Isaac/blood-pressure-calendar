import styled from "styled-components";

export const Status = styled.div`
  &.List-img,
  &.List-img-green,
  &.List-img-yellow,
  &.List-img-papaya,
  &.List-img-orange,
  &.List-img-red,
  &.List-img-violet {
    width: 1.4rem;
    height: 4rem;
    border-radius: 50rem;
  }

  &.List-img {
    background-color: green;
  }

  &.List-img-papaya {
    background-color: rgb(248, 203, 0);
  }

  &.List-img-green {
    background-color: rgb(203, 248, 0);
  }

  &.List-img-yellow {
    background-color: rgb(248, 244, 0);
  }

  &.List-img-orange {
    background-color: rgb(248, 132, 0);
  }

  &.List-img-red {
    background-color: rgb(248, 0, 0);
  }

  &.List-img-violet {
    background-color: rgba(207, 4, 190, 0.932);
  }
`;

export const Tile = styled.li`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  display: inline-block;
  list-style: none;
  display: flex;
  align-items: center;
  width: 25rem;
  height: 3.5rem;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02),
    0px 16px 20px rgba(9, 10, 51, 0.03);
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
  transition: all 0.2s ease 0s;
  &:hover {
    transform: scale(1.03);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 30px;
  margin-left: 10px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const IconBlood = styled.div`
  font-size: 11px;
  margin-right: 5px;
`;

export const PressureResult = styled.div`
  margin-left: 4px;
  line-height: 110%;
`;
export const UpperText = styled.div`
  font-size: 12px;
`;
export const MiddleText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const BottomText = styled.div`
  font-size: 10px;
`;

export const PulseResult = styled.div`
  line-height: 110%;
  margin-left: 1.7rem;
`;
export const UpperPulseText = styled.div`
  font-size: 12px;
  margin-left: 1.3rem;
`;
export const MiddlePulseText = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
`;
export const PulseWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
`;
export const BottomPulseText = styled.div`
  font-size: 10px;
  margin-left: 1.3rem;
`;
