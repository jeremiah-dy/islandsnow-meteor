import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
      <Image fluid src="https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/experience-islandsnow-video-snapshot.png" alt="Surfer Riding a Wave"/>
    );
  }
}