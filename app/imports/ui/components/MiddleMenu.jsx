import React from 'react';
import { Menu, Grid, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="middlemenu">
        <Grid container centered>
          <Dropdown item text="MEN">
            <Dropdown.Menu>
              <Dropdown.Item>Tank Tops</Dropdown.Item>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
              <Dropdown.Item>Sweatshirts</Dropdown.Item>
              <Dropdown.Item>Board Shorts</Dropdown.Item>
              <Dropdown.Item>Hats</Dropdown.Item>
              <Dropdown.Item>Accessories</Dropdown.Item>
              <Dropdown.Item>Stickers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="WOMEN">
            <Dropdown.Menu>
              <Dropdown.Item>Tank Tops</Dropdown.Item>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
              <Dropdown.Item>Sweatshirts</Dropdown.Item>
              <Dropdown.Item>Hats</Dropdown.Item>
              <Dropdown.Item>Accessories</Dropdown.Item>
              <Dropdown.Item>Stickers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="KIDS">
            <Dropdown.Menu>
              <Dropdown.Item>Tank Tops</Dropdown.Item>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
              <Dropdown.Item>Sweatshirts</Dropdown.Item>
              <Dropdown.Item>Board Shorts</Dropdown.Item>
              <Dropdown.Item>Hats</Dropdown.Item>
              <Dropdown.Item>Accessories</Dropdown.Item>
              <Dropdown.Item>Stickers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="BRANDS">
            <Dropdown.Menu>
              <Dropdown.Item>Da Mokes</Dropdown.Item>
              <Dropdown.Item>Farmers Market Hawaii</Dropdown.Item>
              <Dropdown.Item>Hawaii Domestic Market</Dropdown.Item>
              <Dropdown.Item>HILife</Dropdown.Item>
              <Dropdown.Item>Island Snow Hawaii</Dropdown.Item>
              <Dropdown.Item>Kailua Boys</Dropdown.Item>
              <Dropdown.Item>Kailua Girls</Dropdown.Item>
              <Dropdown.Item>Ka'ohao</Dropdown.Item>
              <Dropdown.Item>Lanikai Canoe Club</Dropdown.Item>
              <Dropdown.Item>Mokulua Hula</Dropdown.Item>
              <Dropdown.Item>RVCA Hawaii</Dropdown.Item>
              <Dropdown.Item>SRF</Dropdown.Item>
              <Dropdown.Item>Stance</Dropdown.Item>
              <Dropdown.Item>Stussy</Dropdown.Item>
              <Dropdown.Item>Volcom Hawaii</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>SALE</Menu.Item>
        </Grid>
      </Menu>
    );
  }
}