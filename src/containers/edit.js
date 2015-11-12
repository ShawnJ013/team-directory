import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import DocumentTitle from 'react-document-title';
import Form from '../components/form';

class EditUser extends Component {
  componentWillMount() {
    const { loadForm, directory, loadUser, routeParams } = this.props;
    if (!directory.form.length) loadForm();
    loadUser(routeParams.user);
  }

  updateUser(obj) {
    const { addUser } = this.props;
    addUser(obj, (err) => {
      console.log('Added user', err);
    });
  }

  render() {
    const { directory, setError } = this.props;
    const { validators, normalizers, people, user, form } = directory;

    return (
      <DocumentTitle title={'Edit | Team listing'}>
        {directory.form.length ? <div>
          <Form
            people={people}
            user={user}
            setError={setError}
            normalizers={normalizers}
            validators={validators}
            onSubmit={this.updateUser.bind(this)}
            data={form} />
        </div> : <div>
          <div className='center'>
            <h2>No form directory found.</h2>
            <p>Check your configuration settings.</p>
          </div>
        </div>}
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
