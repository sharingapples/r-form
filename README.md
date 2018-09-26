# R-Form

## **Usage**

We create DOM element for the form. R-Form provides the bare skeleton for a form structure with no DOM element, we need to wrap the DOM element with the provided r-form library.

 - **Text Input**  <br>
		 To create a simple text input we simply call the form library itself and call the createInput and 		  pass the props to be used in the input i.e. similar to the mapStateToProps. <br>
		 **Code :**  <br>
	```React
	import  Form  from  'r-form';

	const  createProps  = (owner, { value }) => ({
		onChange:  e  =>  owner.update(e.target.value),
		value:  value  ||  '',
	});
	const  TextInput  =  Form.createInput(createProps)('input');
	export  default  TextInput;
	```
 - **Radio Button** <br>
		 Apart from text input other input are special components such as radio button , checkbox, select, etc. Again similar to text input we pass props. <br>
		 **Code :** <br>
	```React
	import  React, { Component } from  'react';
	import  Form  from  'r-form';

	class  RadioGroup  extends  Component {
		render() {
			const {
			onChange, value, options, className, name, ...other
			} =  this.props;
			return  options.map(op  => (
				<div  key={op}  className={className}>
					<input
						name={name}
						type="radio"
						onChange={() =>  onChange(op)}
						checked={op === value}
						{...other}
					/>
					<span>{op}</span>
				</div>));
			}
	}

	const  RadioButton  =  Form.createInput(owner  => ({
		onChange:  v  =>  owner.update(v),
		}))(RadioGroup);

	export  default  RadioButton;
	```
 - **DropDown** <br>
		Similar to radio button we have similar component a dropdown. We again pass the props to this element. <br>
		 **Code :** <br>
	```React
	import  React, { Component } from  'react';
	import  Form  from  'r-form';

	class  DropDown  extends  Component {
			render() {
				const {
				name, className, value, onChange, defaultValue, options, ...other
				} =  this.props;
				return (
					<select
						name={name}
						className={className}
						value={value || defaultValue}
						onChange={(e) => {
							e.preventDefault();
							onChange(e.target.value);
						}}
						{...other}
					>
					<option>  {defaultValue}  </option>
					{  Object.keys(options).map(op  =>  <option  key={op}  value={op}>  {options[op]}  </option> )}
					</select>
					);
				}
		}

	export  default  Form.createInput(owner  => ({
		onChange:  v  =>  owner.update(v),
	}))(DropDown);
	```