import * as React from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';
import Vega from '../components/charts/vega';

export default class extends React.Component<{}, {}> {
  public render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Users</PageHeader>
          <Vega />
        </Row>
      </Grid>
    );
  }
}