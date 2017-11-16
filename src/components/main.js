import React from 'react';

import { connect } from 'react-redux';

import { sample_action } from '../actions/index';

class Main extends React.Component {
    componentDidMount () {
        this.props.sample_action('Paul');
    }
    render () {
        console.log(this.props.sample_data);
        return (
            <div>Hello {this.props.sample_data.text} </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        sample_data : state.sample_data
    });
}

export default connect(mapStateToProps, { sample_action })(Main);