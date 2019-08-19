import React, { useEffect, useReducer } from 'react';
import { Icon } from 'antd';
import './form.scss';

import InputRow from '../InputRow';
import Buttonz from '../Buttonz';

import { formReducer as reducer } from '../reducer';

const initialState = {
  firstName: '',
  lastName: '',
  jump: '1',
  count: 0,
  displayFName: '',
  displayLName: ''
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [JSON.stringify(state)]); // hehe yakk

  return (
    <div className="form">
      <div className="one-form">
        <div className="one-row">
          <InputRow
            name="firstName"
            onChange={(e) => dispatch({ type: 'changeFirstName', payload: e.target.value })}
            placeholder="First name"
            content={state.firstName}
          />
          <Buttonz
            content={<Icon type="right" />}
            handler={() => dispatch({ type: 'showFName' })}
          />
        </div>
        <div className="one-row">
          <InputRow
            name="lastName"
            onChange={(e) => dispatch({ type: 'changeLastName', payload: e.target.value })}
            placeholder="Surname"
            content={state.lastName}
          />
          <Buttonz
            content={<Icon type="right" />}
            handler={() => dispatch({ type: 'showLName' })}
          />
        </div>
        <div className="one-row">
          <InputRow
            name="jump"
            onChange={(e) => dispatch({ type: 'setJump', payload: e.target.value })}
            placeholder="Set jumping value"
            content={state.jump || 1}
          />
          <Buttonz
            content={<Icon type="up" />}
            handler={() => dispatch({ type: 'incr' })}
          />
          <Buttonz
            content={<Icon type="down" />}
            handler={() => dispatch({ type: 'decr' })}
          />
        </div>
      </div>
      <div className="one-form">
        <div className="one-row">
          <InputRow
            disabled
            name="lName"
            placeholder="None yet"
            content={state.displayFName}
          />
        </div>
        <div className="one-row">
          <InputRow
            disabled
            name="lName"
            placeholder="None yet"
            content={state.displayLName}
          />
        </div>
        <div className="one-row">
          <InputRow
            content={state.count}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
