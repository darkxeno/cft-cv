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
import Terminal from 'spectacle-terminal';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#1985A1',
    secondary: 'white',
    tertiary: 'rgb(76, 92, 104)',
    quaternary: '#4C5C68',
  },
  {
    primary: 'Open Sans Condensed',
    secondary: 'Open Sans Condensed',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={4} caps lineHeight={1} textColor="quaternary" bgColor="primary">
            CONSTANTINO F. T.            
          </Heading>
          <Heading size={6} caps lineHeight={1} textColor="quaternary" bgColor="primary">
            CURRICULUM VITAE
          </Heading>
          <br/>          
          <a
            href="https://es.linkedin.com/in/constantinofernandeztraba/en"
            target="blank"
            style={{ color: 'white' }}
          >
            https://es.linkedin.com/in/constantinofernandeztraba/en
          </a>          
          <br/>
          <a href={atob('bWFpbHRvOmRhcmt4ZW5vQGdtYWlsLmNvbQ==')}>{atob('ZGFya3hlbm9AZ21haWwuY29t')}</a>  
          <br/>
          <a
            href="https://github.com/darkxeno"
            target="blank"
            style={{ color: 'white' }}
          >
            https://github.com/darkxeno
          </a>          
          <Text margin="10px 0 0" textColor="tertiary" size={10} bold>
            Hit Your Right Arrow To Begin!
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="quaternary" bgColor="white">
          CURRENT POSITION
          </Heading>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>
          Backend / Infrastructure Dpt. Lead <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}> Mobgen / AI [Jan 2018 - now]</span>
          </Text><br/>
          <Heading size={6} textColor="quaternary" bgColor="white">
          EXPERIENCE / ROLES
          </Heading><br/>       
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Engineering Manager / DevOps<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}> Mobgen / AI [Mar 2018 - now]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Solution Architect / DevOps (multiple projects)<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}> Mobgen / AI [Mar 2019 - Dec 2020]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Product Manager / Information Security Lead - Halo<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Mobgen / AI  [Mar 2017 - Dec 2019]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Solution Architect - Halo<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Mobgen [Dec 2015 - Jan 2018]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Lead Full Stack Web Engineer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Mobgen [Feb 2014 - Dec 2015]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Cofounder and Collaborator <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Codefixia [Sep 2012 - Sep 2014]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Senior Web / Mobile Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Restalo [Jan 2011 - Feb 2014]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Web/Mobile Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Wombat Internet [Mar 2010 - Jan 2011]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Deployment Manager <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Lemonquest [Feb 2009 - Feb 2010]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Mobile Games Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Lemonquest [Sep 2008 - Sep 2009]</span></Text>
          <Text textColor="secondary" style={{fontSize:'1em',textAlign:'left'}}>Web Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Redegal [Jul 2006 - Sep 2006]</span></Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">         
          <Terminal title="1. tino@technologies: ~(bash)" output={[
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>DevOps:</span>
              &nbsp;kubernetes expert, docker <span style={{color: '#33B969'}}>expert</span>, cloudformation, helm<br/>
              CI/CD (Bamboo / Drone), bash scripting, linux, ...
            </div>,
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>AWS Cloud:</span>
              &nbsp;ec2 <span style={{color: '#33B969'}}>expert</span>, ecs, eks, iam, vpc, cloudwatch, rds<br/>
              dynamodb, documentdb, s3, cloudfront, API Gateway, lambda, acm, ...
            </div>,
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>DBs/others:</span>
              &nbsp;mysql <span style={{color: '#33B969'}}>expert</span>, mongodb <span style={{color: '#33B969'}}>expert</span>, kafka (streams), redis<br/>
               memcached, varnish, cassandra, ...
            </div>,
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>Backend:</span>
              &nbsp;nodejs <span style={{color: '#33B969'}}>expert</span>, php, scala, java
            </div>,
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>Frontend:</span>
              &nbsp;javascript <span style={{color: '#33B969'}}>expert</span>, react <span style={{color: '#33B969'}}>expert</span>
            </div>,
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>Machine Learning:</span>
              &nbsp;tensorflow, keras, python, matlab (beginner)
            </div>,
            <div style={{ color: "white"}}><span style={{color: 'grey'}}>Mobile:</span>
             &nbsp;iOS objective C, Android Java (old)
            </div>,
          ]}
          />        
        </Slide>
        <Slide transition={['fade']} bgColor="primary"> 
          <Heading size={6} caps lineHeight={1} textColor="quaternary" bgColor="white">
            COURSES / CERTIFICATIONS
          </Heading>
            <br/>
            <a href="https://www.scrum.org/user/400220" target="blank">
              <Text textColor="secondary" style={{fontSize:'2rem'}}>
              Professional Scrum Product Owner<br/>
              Professional Scrum Master
              </Text> 
            </a>            
            <a href="https://www.coursera.org/account/accomplishments/specialization/7697MXER3CNN" target="blank">
              <Text textColor="secondary" style={{fontSize:'2rem'}}>Cloud Computing Specialization (5 courses)</Text>  
            </a>
            <a href="https://www.coursera.org/account/accomplishments/verify/EXPTYF6YSLUL" target="blank">
              <Text textColor="secondary" style={{fontSize:'2rem'}}>Neural Networks and Deep Learning</Text> 
            </a>              
            <a href="https://www.coursera.org/account/accomplishments/verify/L2B8H6Q3W5X7" target="blank">
              <Text textColor="secondary" style={{fontSize:'2rem'}}>Improving Deep Neural Networks</Text> 
            </a>
            <a href="https://www.coursera.org/learn/machine-learning" target="blank">
              <Text textColor="secondary" style={{fontSize:'2rem'}}>Machine Learning</Text> 
            </a> 
            <Text textColor="secondary" style={{fontSize:'2rem'}}>AWS Solution Architect</Text> 
            <Text textColor="secondary" style={{fontSize:'2rem'}}>Functional Programming Principles in Scala by Martin Odersky</Text> 
            <Text textColor="secondary" style={{fontSize:'2rem'}}>Creative Programming for Digital Media & Mobile Apps University of London</Text> 
            <Text textColor="secondary" style={{fontSize:'2rem'}}>CAD Design University of Vigo</Text> 
            <Text textColor="secondary" style={{fontSize:'2rem'}}>Documentaries Production University of Vigo</Text> 
            <Text textColor="secondary" style={{fontSize:'2rem'}}>Selling Techniques Commerce Camera</Text>             
          </Slide>    
        <Slide transition={['fade']} bgColor="tertiary">                           
          <Heading size={6} caps lineHeight={1} textColor="quaternary" bgColor="white">
            EDUCATION
          </Heading>
          <Text textColor="secondary" style={{fontSize:'2rem'}}>
            CAREER: TECHNICAL ENGINEER CS<br/>
          </Text><br/>
          <Heading size={6} caps lineHeight={1} textColor="quaternary" bgColor="white">
            HONORARY DEGREES
          </Heading><br/>
          <Text textColor="secondary" style={{fontSize:'2rem'}}>
            Multimedia Systems Flash/ActionScript<br/>
            Computer Graphics OpenGL<br/>
          </Text>
        </Slide>        
      </Deck>
    );
  }
}
