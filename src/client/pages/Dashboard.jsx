import React, { Component } from 'react';
import { Container, Row, Col} from 'shards-react';

import PageStyle from '../styles/pages/Dashboard.less';

import Mining from '../pages/Mining.jsx';
import Sidenav from '../components/Sidenav.jsx';

class DashboardPage extends Component {
  render() {
    return (
      <Container fluid style={{padding: '0'}}>
        <Row noGutters>
          <Col sm="3">
            <Sidenav/>
          </Col>
          <Col sm="9" className={PageStyle.main}>
            <Mining/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DashboardPage;
