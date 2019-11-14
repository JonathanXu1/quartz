import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from "shards-react";


class Mining extends Component {
    render() {
        return (
          <Container>
            <Row>
              <h1>Mining</h1>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardImg src="https://place-hold.it/300x200" />
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardImg src="https://place-hold.it/300x200" />
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardImg src="https://place-hold.it/300x200" />
                </Card>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Mining;
