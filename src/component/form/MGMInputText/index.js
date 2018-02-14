import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export default class MGMInputText extends React.Component {
    constructor(props) {
        super(props);
        this.isValid = true;
        this.state = {
            errorMessage: '',
            value: props.value ? props.value : ''
        }
        this.validations = {
            "minLength": "This is default minLength Error",
            "maxLength": "This is default maxLength Error"
        }

        Object.assign(this.validations, this.props.validations);
    }

    setValue(val) {
        this.setState({
            value: val
        });
    }

    getValue() {
        return this.state.value;
    }

    validate() {
        if (!!this.validations && this.isValid) {
            for (var rule in this.validations) {
                if (this.isValid)
                    this.defaultValidator({ [rule]: this.validations[rule] });
            }
        }
        return this.isValid;
    }

    makeValid() {
        this.setState({
            errorMessage: ''
        });
        this.isValid = true;
    }

    makeInvalid(errorMessage) {
        this.setState({
            errorMessage: errorMessage
        });
        this.isValid = false;
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.isValid = true;
    }

    defaultValidator(errorObj) {
        let myKey = Object.keys(errorObj)[0];
        switch (myKey) {
            case "required": {
                if (!this.state.value && this.props.required) {
                    this.makeInvalid(errorObj[myKey]);
                } else {
                    this.makeValid();
                }
            }
                break;
            case "maxLength": {
                if (!!this.state.value && this.state.value.length > this.props.maxLength) {
                    this.makeInvalid(errorObj[myKey]);
                } else {
                    this.makeValid();
                }
            }
                break;
            case "minLength": {
                if (!!this.state.value && this.state.value.length < this.props.minLength) {
                    this.makeInvalid(errorObj[myKey]);
                } else {
                    this.makeValid();
                }
            }
                break;
            case "pattern": {
                if (!!this.state.value && !this.props.pattern.test(this.state.value))
                    this.makeInvalid(errorObj[myKey]);
                else
                    this.makeValid();
            }
                break;
            default:
                return true;
        }
    }

    render() {
        return <div className={`${this.isValid ? '' : 'error'} field-wrapper form-group `} >
            {this.props.label && <label
                htmlFor={this.props.id}
                className={`${this.props.required ? 'required' : ''} ${this.props.classNames}-label`}
                aria-required={this.props.required}>{this.props.label}</label>}

            <input
                type="text"
                id={this.props.id}
                name={this.props.name}
                readOnly={this.props.readonly}
                required={this.props.required}
                placeholder={this.props.placeHolder}
                className={this.props.classNames}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
            />

            {!this.isValid && <p
                className="error label"
                id="sign-up-email-error"
                generated="true">
                {this.state.errorMessage}
            </p>}
        </div>
    }
}

MGMInputText.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
};


MGMInputText.defaultProps = {
    maxLength: 5,
    minLength: 10
}
