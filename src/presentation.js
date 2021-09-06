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
import { mergeTheme } from 'spectacle/lib/theme';

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
    primary: 'Open Sans Condensed',
    secondary: 'Open Sans Condensed',
  }
};

const textStyle1 = {
  fontSize:'1.25em',
  lineHeight:'1.5em',
  textAlign:'left',
  margin: 0,
  padding: 0,
  margin: '0 1em',
  color: 'white',
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
      >
        <Slide backgroundColor="secondary">
          <Heading size={4} caps lineHeight={1} backgroundColor="quaternary">
            Constantino Fernandez Traba            
          </Heading>
          <Heading size={6} caps lineHeight={1} backgroundColor="quaternary">
            CURRICULUM VITAE
          </Heading>
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
          <Text style={{...textStyle1, fontSize: '0.75em', textAlign: 'right'}}>Last update: 5th September 2021</Text>
        </Slide>
        <Slide backgroundColor="primary" textColor="white" textColor="secondary">
          <Heading size={6} backgroundColor="white">
          CURRENT POSITION
          </Heading>
          <Text style={textStyle1} color="quaternary">
          DevOps Lead / Engineering Manager<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}> Mobgen / AI [Jan 2021 - now]</span>
          </Text><br/>
          <Heading size={6} backgroundColor="white">
          EXPERIENCE / ROLES
          </Heading>    
          <Text style={textStyle1} color="quaternary">DevOps Lead / Engineering Manager<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}> Mobgen / AI [Jan 2021 - now]</span></Text>
          <Text style={textStyle1} color="quaternary">Solution Architect / DevOps (multiple projects)<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}> Mobgen / AI [Mar 2019 - Dec 2020]</span></Text>
          <Text style={textStyle1} color="quaternary">Product Manager / Information Security Lead - Halo<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Mobgen / AI  [Mar 2017 - Dec 2019]</span></Text>
          <Text style={textStyle1} color="quaternary">Solution Architect - Halo<span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Mobgen [Dec 2015 - Jan 2018]</span></Text>
          <Text style={textStyle1} color="quaternary">Lead Full Stack Web Engineer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Mobgen [Feb 2014 - Dec 2015]</span></Text>
          <Text style={textStyle1} color="quaternary">Cofounder and Collaborator <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Codefixia [Sep 2012 - Sep 2014]</span></Text>
          <Text style={textStyle1} color="quaternary">Senior Web / Mobile Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Restalo [Jan 2011 - Feb 2014]</span></Text>
          <Text style={textStyle1} color="quaternary">Web/Mobile Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Wombat Internet [Mar 2010 - Jan 2011]</span></Text>
          <Text style={textStyle1} color="quaternary">Deployment Manager <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Lemonquest [Feb 2009 - Feb 2010]</span></Text>
          <Text style={textStyle1} color="quaternary">Mobile Games Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Lemonquest [Sep 2008 - Sep 2009]</span></Text>
          <Text style={textStyle1} color="quaternary">Web Developer <span style={{color: 'lightgrey',fontSize:'1.5rem',float:'right'}}>Redegal [Jul 2006 - Sep 2006]</span></Text>
        </Slide>
        <Slide> 
          <Heading size={6} backgroundColor="white">
            TECHNOLOGIES / TOOLS
          </Heading>  
          <Text style={{ ...textStyle1, fontSize: '1.5em', lineHeight: '1em', fontFamily: 'monospace', color: "white",  }}>                          
            <br/><br/>
            <span style={{color: 'lightgrey'}}>DevOps:</span>
              &nbsp;kubernetes <span style={{color: '#33B969'}}>expert</span>, docker <span style={{color: '#33B969'}}>expert</span>, cloudformation, helm
              CI/CD (Azure DevOps <span style={{color: '#33B969'}}>expert</span>, Bamboo, Drone), bash scripting, linux, ansible, ...
            <br/><br/>
            <span style={{color: 'lightgrey'}}>Monitoring / Observability:</span>
              &nbsp;azure application insights <span style={{color: '#33B969'}}>expert</span>, new relic <span style={{color: '#33B969'}}>expert</span>, aws cloudwatch, prometheus, fluentd, elastic...
            <br/><br/>                                    
            <span style={{color: 'lightgrey'}}>AWS Cloud:</span>
              &nbsp;ec2 <span style={{color: '#33B969'}}>expert</span>, ecs, eks, iam, vpc, cloudwatch, rds
              dynamodb, documentdb, s3, cloudfront, API Gateway, lambda, acm, ...
            <br/><br/> 
            <span style={{color: 'lightgrey'}}>Azure Cloud:</span>
              &nbsp;app service, functionApps, aks, app. insights <span style={{color: '#33B969'}}>expert</span>, keyVault, blob storage, ...
            <br/><br/>                       
            <span style={{color: 'lightgrey'}}>DBs/others:</span>
              &nbsp;mysql <span style={{color: '#33B969'}}>expert</span>, mongodb <span style={{color: '#33B969'}}>expert</span>, kafka (streams), redis
               memcached, varnish, cassandra, ...
            <br/><br/>            
            <span style={{color: 'lightgrey'}}>Backend:</span>
              &nbsp;nodejs <span style={{color: '#33B969'}}>expert</span>, php, scala, java
            <br/><br/>            
            <span style={{color: 'lightgrey'}}>Frontend:</span>
              &nbsp;javascript <span style={{color: '#33B969'}}>expert</span>, react <span style={{color: '#33B969'}}>expert</span>
            <br/><br/>            
            <span style={{color: 'lightgrey'}}>Machine Learning:</span>
              &nbsp;tensorflow, keras, python, matlab (beginner)
            <br/><br/>            
            <span style={{color: 'lightgrey'}}>Mobile:</span>
             &nbsp;iOS objective C, Android Java (old)
            <br/><br/>
          </Text>     
        </Slide>
        <Slide backgroundColor="primary" textColor="quaternary"> 
          <Heading size={6} caps lineHeight={1} backgroundColor="white">
            COURSES / CERTIFICATIONS
          </Heading>
            <br/>
            <a href="https://www.credly.com/badges/7d442462-a82c-46ec-b2fc-1d4e68e53857/linked_in" target="blank">
              <Text style={textStyle1}>Certified SAFe  5 Agilist (2021)</Text>
            </a>            
            <a href="https://management30.com/badges/constantino-fernandez-traba-1712822620601bdf7d8a081/" target="blank">
              <Text style={textStyle1}>Management 3.0 - Fundamentals Online Workshop (2021)</Text>  
            </a>             
            <a href="https://www.linkedin.com/school/salesbusinessschool/" target="blank">
              <Text style={textStyle1}>Master in Sales - Sales Business School (2020)</Text>  
            </a>            
            <a href="https://www.scrum.org/user/400220" target="blank">
              <Text style={textStyle1}>
              Professional Scrum Product Owner<br/>
              Professional Scrum Master
              </Text> 
            </a>            
            <a href="https://www.coursera.org/account/accomplishments/specialization/7697MXER3CNN" target="blank">
              <Text style={textStyle1}>Cloud Computing Specialization</Text>  
            </a>
            <a href="https://www.coursera.org/account/accomplishments/verify/EXPTYF6YSLUL" target="blank">
              <Text style={textStyle1}>Neural Networks and Deep Learning</Text> 
            </a>              
            <a href="https://www.coursera.org/account/accomplishments/verify/L2B8H6Q3W5X7" target="blank">
              <Text style={textStyle1}>Improving Deep Neural Networks</Text> 
            </a>
            <a href="https://www.coursera.org/learn/machine-learning" target="blank">
              <Text style={textStyle1}>Machine Learning</Text> 
            </a> 
            <Text style={textStyle1}>AWS Solution Architect</Text> 
            <Text style={textStyle1}>Functional Programming Principles in Scala by Martin Odersky</Text> 
            <Text style={textStyle1}>Creative Programming for Digital Media & Mobile Apps University of London</Text> 
            <Text style={textStyle1}>CAD Design University of Vigo</Text> 
            <Text style={textStyle1}>Documentaries Production University of Vigo</Text> 
            <Text style={textStyle1}>Selling Techniques - Commerce Camera</Text>             
          </Slide>    
        <Slide>                           
          <Heading size={6} caps lineHeight={1} backgroundColor="white">
            EDUCATION
          </Heading>
          <Text style={textStyle1} color="quaternary">
            CAREER: TECHNICAL ENGINEER CS<br/>
            University Of Vigo
          </Text><br/>
          <Heading size={6} caps lineHeight={1} backgroundColor="white">
            HONORARY DEGREES
          </Heading><br/>
          <Text style={textStyle1} color="quaternary">
            Multimedia Systems Flash/ActionScript<br/>
            Computer Graphics OpenGL<br/>
          </Text>
        </Slide>        
      </Deck>
    );
  }
}
