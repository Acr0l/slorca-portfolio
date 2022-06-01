import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';


const data = [
  { number: 2, text: 'Open Source Projects'},
  { number: 2, text: 'Startups', },
  { number: 9, text: 'Github Stars', }
];

const Accomplishments = () => (
  <Section id="accomplishments">
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
