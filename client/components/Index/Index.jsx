import React, { Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import MainStore from '../../stores/MainStore';
import MainActions from '../../actions/MainActions';

class IndexComponent extends Component {
  
  constructor() {
    super();
    this.state = MainStore.getState();
  }
  
  static getStores(props) {
    return [MainStore]
  }
  
  static getPropsFromStores(props) {
    return MainStore.getState()
  }

  componentDidMount() {
    MainStore.listen(this.onChange.bind(this));
    
    MainActions.fetchLocations();
  }

  componentWillUnmount() {
    MainStore.unlisten(this.onChange);
  }
  
  onChange(state) {
    this.setState(state);
  }
  
  render() {
    return (
      <div id="content">
        <h1>OpenChatAlytics</h1>
        <p>ChatAlytics is a realtime platform for processing HipChat and Slack messages using Storm as the processing framework.</p>
        <p><a href="https://github.com/OpenChatAlytics">https://github.com/OpenChatAlytics</a></p>
      </div>
    );
  }
}

IndexComponent = connectToStores(IndexComponent)

export default IndexComponent;
