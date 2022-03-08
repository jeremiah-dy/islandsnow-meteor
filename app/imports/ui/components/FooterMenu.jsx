import React from 'react';
import { Grid, List, Input, Button } from 'semantic-ui-react';

export default class FooterMenuMenu extends React.Component {
  render() {
    return (
      <Grid container centered>
        <Grid.Column width={5}>
          <List>
            <List.Item>About Us</List.Item>
            <List.Item>Store Locations</List.Item>
            <List.Item>Employment</List.Item>
            <List.Item>Videos</List.Item>
            <List.Item>Shipping and Returns</List.Item>
            <List.Item>Terms & Conditions</List.Item>
            <List.Item>Privacy Policy</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={5}>
          <List>
            <List.Item>Men</List.Item>
            <List.Item>Women</List.Item>
            <List.Item>Kids</List.Item>
            <List.Item>Brands</List.Item>
            <List.Item>Sale</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={5}>
          <List>
            <List.Item>Join our mailing list for updates</List.Item>
            <List.Item>Sign up to receive our email updates!</List.Item>
            <Input placeholder='Enter email address' />
            <Button className="styled" content='Join'/>
          </List>
        </Grid.Column>
      </Grid>
    );
  }
}