// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
} from 'spectacle';

// Require CSS
require('normalize.css');

const theme = {
  colors: {
    primary: '#1985A1',
    secondary: 'rgb(76, 92, 104)',
    tertiary: '#4C5C68',
    quaternary: 'white',
  },
  fonts: {
    primary: 'Helvetiva Neue',
    secondary: 'Helvetiva Neue',
  }
};

const textStyle1 = {
  fontSize:'1.5em',
  lineHeight:'1.5em',
  textAlign:'left',
  padding: 0,
  margin: '0 1em',
  color: 'white',
};

const TextStyle1 = ({children}) => <Text style={textStyle1}>{children}</Text>

const GreySpan = ({children}) => <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>{children}</span>

const Heading25 = ({children}) => <Heading fontSize="25px" backgroundColor="white" style={{borderRadius: '10px'}} >{children}</Heading>

const MonoText =  ({children}) => <Text style={{ ...textStyle1, fontSize: '1.5em', lineHeight: '1em', fontFamily: 'monospace', color: "white", margin: '0px 24px'  }}>{children}</Text>

const LabelDiv = ({children}) => <div style={{color: 'lightgrey', marginTop: '1rem'}}>{children}</div>

const TechDiv = ({children}) => <div style={{marginLeft: '2rem', marginTop: '0.25rem'}}>{children}</div>

const Expert = () => <span style={{color: '#33B969'}}>&#9733;</span>

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
      >
        <Slide backgroundColor="secondary">
          <Heading25>
            CURRICULUM VITAE
          </Heading25>
          <Image src={require('./photo.jpeg')} width="200px" style={{borderRadius: '10px',alignSelf: 'center'}} />
          <Heading25>
            Constantino Fernández Traba            
          </Heading25>          
          <br/>          
          <a
            href="https://es.linkedin.com/in/constantinofernandeztraba/en"
            target="blank"
            style={{...textStyle1, textAlign: 'center'}}
          >
            https://es.linkedin.com/in/constantinofernandeztraba/en
          </a>          
          <br/>
          <a
            href="https://github.com/darkxeno"
            target="blank"
            style={{...textStyle1, textAlign: 'center'}}
          >
            https://github.com/darkxeno
          </a>
          <br/>
          <a style={{...textStyle1, textAlign: 'center'}}
             target="blank"
             href={atob('bWFpbHRvOmRhcmt4ZW5vQGdtYWlsLmNvbQ==')}>{atob('ZGFya3hlbm9AZ21haWwuY29t')}</a>
          <br/>
          <br/>
          <br/>
          <br/>
          <Text style={{...textStyle1, fontSize: '0.75em', textAlign: 'right'}}>Last update: 2nd December 2022</Text>
        </Slide>
        <Slide backgroundColor="primary" textColor="secondary">
          <Heading25>
          CURRENT POSITION
          </Heading25>          
          <TextStyle1>Senior DevOps Engineer<GreySpan> Artbanx [Feb 2022 - now]</GreySpan></TextStyle1>
          <br/>
          <Heading25>
          EXPERIENCE / ROLES
          </Heading25>              
          <TextStyle1>DevOps Lead / Engineering Manager<GreySpan>Mobgen / AI [Jan 2021 - Feb 2022]</GreySpan></TextStyle1>
          <TextStyle1>Solution Architect / DevOps<GreySpan> Mobgen / AI [Mar 2019 - Dec 2020]</GreySpan></TextStyle1>
          <TextStyle1>Product Manager / Information Security Lead - Halo<GreySpan>Mobgen / AI  [Mar 2017 - Dec 2019]</GreySpan></TextStyle1>
          <TextStyle1>Solution Architect - Halo<GreySpan>Mobgen [Dec 2015 - Jan 2018]</GreySpan></TextStyle1>
          <TextStyle1>Lead Full Stack Web Engineer <GreySpan>Mobgen [Feb 2014 - Dec 2015]</GreySpan></TextStyle1>
          <TextStyle1>Cofounder and Collaborator <GreySpan>Codefixia [Sep 2012 - Sep 2014]</GreySpan></TextStyle1>
          <TextStyle1>Senior Web / Mobile Developer <GreySpan>Restalo [Jan 2011 - Feb 2014]</GreySpan></TextStyle1>
          <TextStyle1>Web/Mobile Developer <GreySpan>Wombat Internet [Mar 2010 - Jan 2011]</GreySpan></TextStyle1>
          <TextStyle1>Deployment Manager <GreySpan>Lemonquest [Feb 2009 - Feb 2010]</GreySpan></TextStyle1>
          <TextStyle1>Mobile Games Developer <GreySpan>Lemonquest [Sep 2008 - Sep 2009]</GreySpan></TextStyle1>
          <TextStyle1>Web Developer <GreySpan>Redegal [Jul 2006 - Sep 2006]</GreySpan></TextStyle1>
        </Slide>
        <Slide> 
          <Heading25>
            TECHNOLOGIES / TOOLS
          </Heading25>  
          <MonoText>
            <LabelDiv>Cloud:</LabelDiv>
              <TechDiv>AWS<Expert/>, Azure<Expert/>, Google Cloud<Expert/></TechDiv>
            <LabelDiv>DevOps:</LabelDiv>
              <TechDiv>kubernetes<Expert/>, terraform<Expert/>, docker<Expert/>, helm<Expert/>, cloudformation, 
              bash, ansible</TechDiv>            
            <LabelDiv>CI/CD:</LabelDiv>              
              <TechDiv>Azure DevOps<Expert/>, Github Actions / Workflows<Expert/>, argocd (gitops), Google Cloud Build, AWS CodeBuild, Bamboo, Drone</TechDiv>                      
            <LabelDiv>Monitoring / Observability:</LabelDiv>
              <TechDiv>azure application insights<Expert/>, newrelic<Expert/>, opentelemetry<Expert/>, prometheus, grafana, aws cloudwatch, fluentd, elastic</TechDiv>                                                                      
            <LabelDiv>DBs/others:</LabelDiv>
              <TechDiv>mysql<Expert/>, mongodb<Expert/>, kafka (streams), redis,
               memcached, varnish, cassandra, postgresql</TechDiv>            
            <LabelDiv>Backend:</LabelDiv>
              <TechDiv>nodejs<Expert/>, scala, java</TechDiv>            
            <LabelDiv>Frontend:</LabelDiv>
              <TechDiv>javascript<Expert/>, react<Expert/></TechDiv>
            <LabelDiv>Soft Skills:</LabelDiv>
              <TechDiv>team player, leading by example, problem solver, ideator, learner, optimistic, motivator, out of the box thinking</TechDiv>            
          </MonoText>     
        </Slide>
        <Slide backgroundColor="primary" textColor="quaternary"> 
          <Heading25>
            COURSES / CERTIFICATIONS
          </Heading25>
            <a href="https://www.credly.com/badges/7d442462-a82c-46ec-b2fc-1d4e68e53857/linked_in" target="blank">
              <TextStyle1>Certified SAFe  5 Agilist (2021)</TextStyle1>
            </a>            
            <a href="https://management30.com/badges/constantino-fernandez-traba-1712822620601bdf7d8a081/" target="blank">
              <TextStyle1>Management 3.0 - Fundamentals Online Workshop (2021)</TextStyle1>
            </a>             
            <a href="https://www.linkedin.com/school/salesbusinessschool/" target="blank">
              <TextStyle1>Master in Sales - Sales Business School (2020)</TextStyle1>
            </a>            
            <a href="https://www.scrum.org/user/400220" target="blank">
              <TextStyle1>
              Professional Scrum Product Owner<br/>
              Professional Scrum Master
              </TextStyle1> 
            </a>            
            <a href="https://www.coursera.org/account/accomplishments/specialization/7697MXER3CNN" target="blank">
              <TextStyle1>Cloud Computing Specialization</TextStyle1>
            </a>
            <a href="https://www.coursera.org/account/accomplishments/verify/EXPTYF6YSLUL" target="blank">
              <TextStyle1>Neural Networks and Deep Learning</TextStyle1>
            </a>              
            <a href="https://www.coursera.org/account/accomplishments/verify/L2B8H6Q3W5X7" target="blank">
              <TextStyle1>Improving Deep Neural Networks</TextStyle1>
            </a>
            <a href="https://www.coursera.org/learn/machine-learning" target="blank">
              <TextStyle1>Machine Learning</TextStyle1> 
            </a> 
            <TextStyle1>AWS Solution Architect</TextStyle1> 
            <TextStyle1>Functional Programming Principles in Scala by Martin Odersky</TextStyle1> 
            <TextStyle1>Creative Programming for Digital Media & Mobile Apps University of London</TextStyle1> 
            <TextStyle1>CAD Design University of Vigo</TextStyle1> 
            <TextStyle1>Documentaries Production University of Vigo</TextStyle1> 
            <TextStyle1>Selling Techniques - Commerce Camera</TextStyle1>
          </Slide>    
        <Slide>                           
          <Heading25>
            EDUCATION
          </Heading25>
          <TextStyle1>
            Career: TECHNICAL ENGINEER COMPUTER SCIENCE<br/>
            @ University Of Vigo
          </TextStyle1><br/>
          <Heading25>
            HONORARY DEGREES
          </Heading25>
          <TextStyle1>
            Multimedia Systems Flash/ActionScript<br/>
            Computer Graphics OpenGL
          </TextStyle1>
        </Slide>        
      </Deck>
    );
  }
}
