import React from 'react';
import { SectionContainer, GridContainer, GridRow, Heading } from './styles';

const Section = ({ children, headline, width }) => {
  return (
    <SectionContainer>
      <GridContainer>
        <GridRow width={width}>
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
