/*
 *
 * FrontDesk
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';

import { getView } from './selectors';
import {switchView} from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

export class FrontDesk extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SubNavigation title='frontdesk' activeView={this.props.view} clickTab={this.props.clickTab.bind(this)} />
        <div className='container'>
          <SubHeader title={this.props.view} />

        </div>
      </div>
    );
  }
}

FrontDesk.propTypes = {
  clickTab: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
});


const mapDispatchToProps = (dispatch) => ({
  clickTab: (view) => {
    // dispatch(setParticipantList(null));
    dispatch(switchView(view));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);