import React from 'react';

const original = (
  <g>
    <path d="M0 0H24V24H0V0Z" fill="#E3E4E6" />
    <path d="M8.08987 15.9587L8.0541 15.9933C7.47747 16.5808 6.81006 16.8921 6.12236 16.8921C4.68687 16.8921 3.64485 15.8153 3.64485 14.3294C3.64485 12.8462 4.68687 11.7678 6.12236 11.7678C6.81006 11.7678 7.47747 12.0804 8.0541 12.6695L8.08987 12.7051L9.01306 11.5888L8.98838 11.5585C8.22063 10.6513 7.29942 10.2096 6.16692 10.2096C5.03049 10.2096 3.99165 10.5921 3.24296 11.2818C2.42949 12.0287 2 13.0821 2 14.3294C2 15.5761 2.42949 16.632 3.24296 17.3791C3.99165 18.0721 5.03049 18.4524 6.16692 18.4524C7.29942 18.4524 8.22063 18.011 8.98838 17.1034L9.01306 17.0752L8.08987 15.9587Z" fill="#003B70" />
    <path d="M9.94592 18.3005H11.5768V10.339H9.94592V18.3005Z" fill="#003B70" />
    <path d="M17.9651 16.5693C17.53 16.8343 17.1251 16.9674 16.7615 16.9674C16.2346 16.9674 15.9964 16.6893 15.9964 16.0699V11.8455H17.6574V10.3462H15.9964V7.86899L14.3979 8.72446V10.3462H13.0189V11.8455H14.3979V16.3394C14.3979 17.5637 15.1232 18.4001 16.2058 18.4219C16.9409 18.4363 17.3841 18.2173 17.6532 18.0572L17.669 18.0455L18.0616 16.5104L17.9651 16.5693L17.9651 16.5693Z" fill="#003B70" />
    <path d="M19.3159 18.3005H20.9479V10.339H19.3159V18.3005Z" fill="#003B70" />
    <path fillRule="evenodd" clipRule="evenodd" d="M21.9248 8.92631C20.4319 6.81166 17.9526 5.55 15.43 5.55C12.9085 5.55 10.4287 6.81166 8.93827 8.92631L8.86182 9.03512H10.7416L10.7624 9.01255C12.0419 7.69201 13.7121 6.99366 15.43 6.99366C17.1482 6.99366 18.8181 7.69201 20.1 9.01255L20.1208 9.03512H22L21.9248 8.92631Z" fill="#D9261C" />
  </g>
);

const mono = (
  <g>
    <path d="M24 0H0V24H24V0ZM8.0541 15.9933L8.08987 15.9587L9.01306 17.0752L8.98838 17.1034C8.22063 18.011 7.29942 18.4524 6.16692 18.4524C5.03049 18.4524 3.99165 18.0721 3.24296 17.3791C2.42949 16.632 2 15.5761 2 14.3294C2 13.0821 2.42949 12.0287 3.24296 11.2818C3.99165 10.5921 5.03049 10.2096 6.16692 10.2096C7.29942 10.2096 8.22063 10.6513 8.98838 11.5585L9.01306 11.5888L8.08987 12.7051L8.0541 12.6695C7.47747 12.0804 6.81006 11.7678 6.12236 11.7678C4.68687 11.7678 3.64485 12.8462 3.64485 14.3294C3.64485 15.8153 4.68687 16.8921 6.12236 16.8921C6.81006 16.8921 7.47747 16.5808 8.0541 15.9933ZM9.94594 18.3005H11.5768V10.339H9.94594V18.3005ZM16.7615 16.9674C17.1252 16.9674 17.5301 16.8342 17.9652 16.5693L18.0617 16.5104L17.669 18.0455L17.6533 18.0572C17.3841 18.2173 16.941 18.4363 16.2058 18.4219C15.1232 18.4001 14.398 17.5637 14.398 16.3394V11.8455H13.019V10.3462H14.398V8.72446L15.9965 7.86898V10.3462H17.6575V11.8455H15.9965V16.0699C15.9965 16.6893 16.2346 16.9674 16.7615 16.9674ZM19.316 18.3005H20.948V10.339H19.316V18.3005ZM15.4301 5.55C17.9526 5.55 20.4319 6.81166 21.9248 8.92631L22 9.03512H20.1208L20.1 9.01255C18.8181 7.69201 17.1482 6.99366 15.4301 6.99366C13.7121 6.99366 12.0419 7.69201 10.7625 9.01255L10.7416 9.03512H8.86184L8.93829 8.92631C10.4287 6.81166 12.9086 5.55 15.4301 5.55Z" fillRule="evenodd" clipRule="evenodd" />
  </g>
);

const Citibank = {
  bankName: 'citibank',
  bankId: 745,
  ariaTitle: 'Citibank',
  svg: {
    original,
    mono,
  },
};

export default Citibank;