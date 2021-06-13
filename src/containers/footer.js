import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>About Reading Companion.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Background and Motivation</Footer.Link>
          <Footer.Link href="#">Development</Footer.Link>
        </Footer.Column>
        <Footer.Column></Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Me</Footer.Link>
        </Footer.Column>


      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Capstone Project Spring 2021</Footer.Text>
    </Footer>
  );
}