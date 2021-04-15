import React from 'react';
import ReactDOM from 'react-dom';
import PageManager from '../page-manager';
import Breadcrumbs from '../react/Breadcrumbs';

const Home = (props) => {
  console.log("home props", props); // eslint-disable-line
    return (
        <div className='react-home' >
            <Breadcrumbs breadcrumbs={props.context.breadcrumbs} />
    HOME
        </div>
    );
};

export default class ReactHome extends PageManager {
    onReady() {
        const container = $('#root')[0];
        ReactDOM.render(<Home context={this.context}/>, container);
    }
}
