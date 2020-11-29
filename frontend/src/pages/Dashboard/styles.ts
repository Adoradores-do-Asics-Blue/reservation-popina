import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 20px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
    width: 110px;
    border-radius: 10%;
    position: relative;
    top: -10px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #fff;
    }

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
    color: #000;
  }

  p {
    margin-top: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
      color: #612f74;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #612f74;
      margin: 0 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #612f74;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #000;
    width: 70px;

    svg {
      color: #000;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #612f74;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #000;
      font-size: 20px;
      font-weight: bold;
      font-family: sans-serif;
    }
  }

  .whatsapp {
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    margin-left: 300px;
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #efefef;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
    color: #000;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #612f74;
    border-radius: 10px;
    color: #000;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#fff')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #000 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff0000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
