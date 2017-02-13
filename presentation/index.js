// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import TOC from './components/TOC';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const initiatives = ['Ipreo Account', 'Cupcake', 'Reporting', 'API', 'New Initiatives'];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading fit textColor='tertiary'>NorthStar Platform</Heading>
          <TOC items={initiatives}/>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='tertiary'>Ipreo Account</Heading>
          <List>
            <Heading size={4}>Status </Heading> 
            <hr />
            <ListItem> First Prod release on 2/3 </ListItem>
            <ListItem> Used by: PCS</ListItem>
            <ListItem> Next up: PSpec (SSO), Dd (SSO), BSP/IL</ListItem>
          </List>
          <List>
            <Heading size={4}>Roadmap</Heading>
            <hr />
            <ListItem>Finish MVP Local Auth</ListItem>
            <ListItem>Federated SSO</ListItem>
            <ListItem>Enhanced Resiliency / Perf. Testing</ListItem>            
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='tertiary'>Cupcake</Heading>
          <List>
            <Heading size={4}>Status</Heading>
            <hr />
            <ListItem> Latest release to NPM on 2/9 </ListItem>
            <ListItem> Includes revamped Docs </ListItem>
            <ListItem> Used by: BDA, Events, PCS, IssueBook </ListItem>
            <ListItem> Next up: anyone...</ListItem>
          </List>
          <List>
            <Heading size={4}>Roadmap</Heading>
            <hr />
            <ListItem> New themes: NorthStar, Buyside</ListItem>
            <ListItem> More components: Loaders, Nav</ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='tertiary'>Reporting</Heading>
          <List>
            <Heading size={4}>Status</Heading>
            <hr />
            <ListItem> Released PB in BDA (Radiant) on 1/27</ListItem>
            <ListItem> Events to also begin using Radiant</ListItem>
          </List>
          <List>
            <Heading size={4}>Roadmap</Heading>
            <hr />
            <ListItem> Finishing Corp Obligations: BNY Scheduled Report, GMI Service replacement</ListItem>
            <ListItem> Phx => IB Report Migration</ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='tertiary'>Ipreo API</Heading>
          <List>
            <Heading size={4}>Status</Heading>
            <hr />
            <ListItem> A few endpoints published..</ListItem>
            <ListItem> No dev team</ListItem>            
          </List>
          <List>
            <Heading size={4}>Roadmap</Heading>
            <hr />
            <ListItem> Integrate with Ipreo Account</ListItem>
            <ListItem> Expose service documentation</ListItem>
            <ListItem> Usage tracking </ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='tertiary'>New Initiatives</Heading>
          <List>
            <Heading size={4}>Muni Homepage</Heading>
            <hr />
            <ListItem> New card based App</ListItem>
            <ListItem> Designed to enable contribution from front-end devs throughout the org.</ListItem>
            <ListItem> Will look to leverage excellent work already done in RST CRM </ListItem>
          </List>
          <List>
            <Heading size={4}>Alerting</Heading>
            <hr />
            <ListItem> Presently being developed by Steve Lu and RST - RAID</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
