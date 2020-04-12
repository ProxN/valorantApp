import React from 'react';
import { SectionContainer, GridContainer, GridRow, Heading } from './styles';

const Section = ({ children, headline }) => {
  return (
    <SectionContainer>
      <GridContainer>
        <GridRow>
          {headline && (
            <Heading>
              <span>V</span>
              alorant&nbsp;
              {headline}
            </Heading>
          )}
          {children}
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export default Section;
