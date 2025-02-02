import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Headers() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
       welcome to home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Our profile 
      </Tab>
      <Tab eventKey="contact" title="Contact">
      Welcome to our contact page
      </Tab>
      <Tab eventKey="service" title="Services" >
        Welcome to our services
      </Tab>
    </Tabs>
  );
}

export default Headers;