import React, { Component } from 'react';
import providers from '../dataProvider';
import Playground from '../components/Playground';

export default class PlayGroundList extends Component {
  constructor(props){
    super(props);
    
    this.state = { list: [] };
    providers.getPlaygroundsList().then(data => {
      this.setState({ list: data.playgrounds });
    });
  }
  render() {
    return (
      <div className="container">
          <h1 className="display-4 border-bottom mb-4 mt-5">Ihriská</h1>
          <div className="card" >
                <div className="card-header text-white bg-dark">
                    Zoznam ihrísk
                </div>
                <ul className="list-group list-group-flush">
                  {
                    this.state.list.map( playground => (
                      <Playground key={playground.id} name={playground.name} district={playground.district} />
                    ))
                  }
                </ul>
          </div>
      </div>    
    );
  }
}