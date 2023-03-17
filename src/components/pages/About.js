import React from 'react';
import '../../App.css';
import Content from '../Content';
import CMS from '../../CMS/cms';
import MainContent from '../MainContent';

const {ABOUT_DETAILS} = CMS;
export default function About() {
  return (
    <div>
      <h1 className='about'>{ABOUT_DETAILS}</h1>;
      <Content />
      <MainContent />
    </div>
  )
}