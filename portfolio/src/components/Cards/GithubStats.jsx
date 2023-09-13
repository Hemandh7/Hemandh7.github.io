import React from 'react';
import styled from 'styled-components';
import calender from '../../files/calender.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 80px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Subtitle = styled.h3`
  font-size: 25px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 20px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px; /* Adjust the gap as needed */
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  @media (max-width: 768px) {
    max-width: 90%; 
    margin: 0 auto; 
  }
`;

const GitHubStats = () => {
  return (
    <Container id="github-stats">
      <Wrapper>
        <Title>GitHub Statistics</Title>
        <Section>
          {/* GitHub Activity Calendar */}
          <div className="github-calendar">
            <Subtitle>GitHub Activity Calendar</Subtitle>
            <div className="react-activity-calendar">
              <ResponsiveImage src={calender} alt="" />
            </div>
          </div>

          {/* GitHub Stats and Top Languages */}
          <FlexContainer>
            {/* GitHub Stats */}
            <div className="github-stats">
              <Subtitle>GitHub Stats</Subtitle>
              <div className="stats-card">
                <ResponsiveImage
                  src="https://github-readme-stats.vercel.app/api?username=Hemandh7"
                  alt=""
                  id="github-stats-card"
                />
              </div>
            </div>

            {/* Top Languages */}
            <div className="github-languages">
              <Subtitle>Top Languages</Subtitle>
              <div className="top-langs">
                <ResponsiveImage
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hemandh7"
                  alt=""
                  id="github-top-langs"
                />
              </div>
            </div>
          </FlexContainer>

          {/* GitHub Streak Stats */}
          <div className="github-streak">
            <Subtitle>GitHub Streak Stats</Subtitle>
            <ResponsiveImage
              src="http://github-readme-streak-stats.herokuapp.com/demo/preview.php?user=Hemandh7"
              alt="GitHub Streak Stats"
              id="github-streak-stats"
            />
          </div>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default GitHubStats;
