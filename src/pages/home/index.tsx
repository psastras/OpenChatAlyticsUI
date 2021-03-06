import * as React from 'react';
import Banner from './banner';
import Stats from './stats';
import PageLinks from './pagelinks';
import './index.scss';

export default class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Banner />
        <Stats />
        <PageLinks />
      </div>
    );
  }
}