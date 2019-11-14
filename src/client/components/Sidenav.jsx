import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Card, CardFooter, Container, CardTitle, CardBody } from "shards-react";

import PageStyle from '../styles/components/Sidenav.less';

class Sidenav extends Component {
    render() {
        return (
          <Container fluid className={PageStyle.container}>
            <Card theme="secondary" className = {PageStyle.card}>
              <CardBody>
                <CardTitle>Shoush</CardTitle>
                <p>Shoush# 6779</p>
                <h6>6,548,701</h6>
                <h6>2.590843</h6>
              </CardBody>
            </Card>
            <Card theme="secondary" className = {PageStyle.card} id={PageStyle.navCard}>
              <Nav vertical card>
                <NavItem className = {PageStyle.navItem} >
                  <NavLink active href="#" className = {PageStyle.navlink} >
                    Mining
                  </NavLink>
                </NavItem>
                <NavItem  className = {PageStyle.navItem}>
                  <NavLink href="#" className = {PageStyle.navlink}>
                    Game Room
                  </NavLink>
                </NavItem>
                <NavItem  className = {PageStyle.navItem}>
                  <NavLink href="#" className = {PageStyle.navlink}>
                    Counter
                  </NavLink>
                </NavItem>
                <NavItem  className = {PageStyle.navItem}>
                  <NavLink href="#" className = {PageStyle.navlink}>
                    Partners
                  </NavLink>
                </NavItem>
                <NavItem  className = {PageStyle.navItem}>
                  <NavLink href="#" className = {PageStyle.navlink}>
                    Analytics
                  </NavLink>
                </NavItem>
                <NavItem  className = {PageStyle.navItem}>
                  <NavLink href="#" className = {PageStyle.navlink}>
                    History
                  </NavLink>
                </NavItem>
                <NavItem  className = {PageStyle.navItem}>
                  <NavLink href="#" className = {PageStyle.navlink}>
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
              <CardFooter className = {PageStyle.footer}>Card footer</CardFooter>
            </Card>
          </Container>
        )
    }
}

export default Sidenav;
