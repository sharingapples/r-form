// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { Consumer } from './Form';

type PropsSelectPure = {
  child: (value: any) => Node,
  value: any,
}
type PropsSelect = {
  children: (value: any) => Node,
  select: (string) => any,
}

class SelectPure extends PureComponent<PropsSelectPure> {
  render() {
    const { child, value } = this.props;
    return child(value);
  }
}

const Select = ({ select, children }: PropsSelect) => (
  <Consumer>
    {({ state }) => <SelectPure child={children} value={select(state)} /> }
  </Consumer>
);

export default Select;
