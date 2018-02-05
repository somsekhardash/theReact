import React from 'react';
import { render } from 'react-dom';
//import * as actions from './../../../actions/index';

export default class ProtItem extends React.Component {
    constructor(props) {
        super(props);
    }
    itemClicked(){
        this.props.actions.makeFilter(this.props.fullData,"wordpress");
    }
    render() {
        // function itemClicked(){
        //     actions.makeFilter(this.props.fullData,"Wordpress");
        // };
        return  <div className={`col-md-4 col-sm-6 col-xs-12 mix ${this.props.grp}`}>
                    <div className="item">
                        <a href={this.props.link} className="portfolio-popup" title="Project Title">
                            <img src={this.props.img} alt="" onClick={this.itemClicked.bind(this)}/>
                        </a>
                    </div>
                </div>
        
    }
}
