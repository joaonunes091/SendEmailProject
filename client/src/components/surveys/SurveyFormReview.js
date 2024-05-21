import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields.js';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import * as actions from '../../actions/index.js'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your enteries</h5>
            {reviewFields}
            <button className='yellow darken-3 white-text btn-flat' onClick={onCancel}>Back</button>
            <button className='green btn-flat white-text right' onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className='material-icons white-text right'>email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));