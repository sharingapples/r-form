
# R-Form

r-form library manages the state of the form, and all the changes that occur within the form.



## **Components**



The components that provided by r-form library are :




### - **Form**

The main wrapper for the form component itself. We pass the children to be rendered within the form. So we call the a component that wraps its children within and then passes it to the form.  <br> **Example :**  <br>
Firstly we create a simple DomForm Component or in simple terms a container Component that will pass the children components to the form component.

This is the DomForm (or you can name it any element for now) which wraps our entire form into our library.

	import React from 'react';
	import Form from 'r-form';

	const  formRef  =  React.createRef(); // create a reference to call the form events

	const DomForm = props => (
		<form
		 onSubmit={(e) => {
			e.preventDefault();
			formRef.current.submit(); // calls the internal form submit which in return calls the funtion onSubmit passed to Form as props as in below
			}}
		>
			<Form
			ref={formRef}
			onSubmit={(state) => { // returns the state of the form }  }
			{...props} // pass the props which contains children and other props
			/>
		</form>
	)


This is the part where we call the form container that we created above named DomForm. Now the input components can be plain components such as below or a self made components as well which we will discuss later.

	import React from 'react';
	import DomForm from './DomFrom';

	const FormApp = () => (
		<DomForm>
			<input type="text" name="name" />
		</DomForm>
	)

**NOTE :**
	Input Component used inside the form must have
		 - name : the data are managed as an object so to set and get the data a name is required
		 **Optional :**
		 - validators: user can pass a validator function or array of validator function for particular field , such as if the value is required or not or if it has to be numeric and so on.
		 - onChange: user can pass an onChange event.
		 - onError: call to a function that is called if validation is failed.



### - **createInput**
This is a function provided by the form library to create an input component for application. To call this function we can either call by Form.createInput or call createInput itself. There is a pattern similar to mapStateToProps which is function currying  we need to pass a function that calls the update function which in return updates the value of an input in each onChange event and another parameter will be the component itself. Depending on the type of input the updatedValue can differ, for a simple text input we just pass the new value but for complex input such as checkbox or such we need to change a few steps before updating the value.
<br> **Example :**  <br>

A simple text input :

	import { createInput } from 'r-form';

	const createProps = (owner, { value }) => ({
	  onChange: e => owner.update(e.target.value),
	  value: value || '',
	  });

	const TextInput = createInput(createProps)('input');

	export default TextInput;

createInput is a *currying* function,  the first function takes the function parameter that calls on update function when Change is triggered (i.e. on every user change event). the second one takes the input component itself. The value for the update can be altered according to the component as well. Which is in example below



### - **Group**

### - **Array**

### - **Select**

### - **Validation Functions**



## **Usage**



Here is the rough sketch of the example that we will be making. It is a simple form that collects the data of an individual.



![dc_rough](https://user-images.githubusercontent.com/12614476/46061420-4dcf2680-c186-11e8-9c24-7cbb2675dede.png)



The library provides a mechanism for the state management of the form we need to implement and wrap it to the dom. So now we enlist the component that we will be using in making this form. <br>

### Form DOM components :



We create DOM element for the form. R-Form provides the bare skeleton for a form structure with no DOM element, we need to wrap the DOM element with the provided r-form library. We pass the on change event and update the value there on the basis of the component. In case of simple text input we simply pass it where as other complex component requires a bit more calculation such as checkbox is an array of the data under same name so in that case we concat the data and update it. Let's see how we will make the components.



-  **Text Input**  <br>

To create a simple text input we simply call the form library itself and call the createInput and pass the props to be used in the input i.e. similar to the mapStateToProps. For onChange event we simply update the value.<br>

**Code :** <br>

```

import Form from 'r-form';

const createProps = (owner,{ value }) => ({
	onChange: e => owner.update(e.target.value),
	value: value || '',
});

const TextInput = Form.createInput(createProps)('input');
export default TextInput;

```

-  **Radio Button**  <br>

Apart from text input other input are special components such as radio button , checkbox, select, etc. We pass option from props as the list for this component. Again similar to text input we pass props and update the value. <br>

**Code :** <br>

```

import React,{ Component } from 'react';
import Form from 'r-form';

class RadioGroup extends Component {

	render() {
		const {
			onChange, value, options, className, name, ...other
		} = this.props;

		return options.map(op => (
			<div key={op} className={className}>
			<input
				name={name}
				type="radio"
				onChange={() => onChange(op)}
				checked={op === value}
				{...other}
			/>
			<span>{op}</span>
		</div>));
		}
	}

const RadioButton = Form.createInput(owner => ({
	onChange: v => owner.update(v),
}))(RadioGroup);


export default RadioButton;

```

-  **DropDown**  <br>

Similar to radio button we have similar component a dropdown. We pass option from props as the list for this component. We again pass the props to this element. <br>

**Code :** <br>

```

import React,{ Component } from 'react';
import Form from 'r-form';

class DropDown extends Component {
	render() {
		const {
		name, className, value, onChange, defaultValue, options, ...other
		} = this.props;

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
			<option> {defaultValue} </option>
			{ Object.keys(options).map(op => <option key={op} value={op}> {options[op]} </option> )}
		</select>
		);
	}

}


export default Form.createInput(owner => ({
	onChange: v => owner.update(v),
}))(DropDown);

```

-  **CheckBox**

Similar to radio button we have similar component a dropdown. We again pass the props to this element. The update for this will be different as there will be multiple choice which all should be recorded. So for the onChange event here we add the value gained and add it to the form state.<br>

**Code :** <br>



```
import React,{ Component } from 'react';
import Form from 'r-form';

class CheckBox extends Component {
	render() {
		const {
		name, className, value, onChange, options, ...other
		} = this.props;

		return options.map(op => (
			<div className={className} key={op}>
				<input
					name={name}
					className={className}
					type="checkbox"
					onChange={() => {
						const checkbox = value || [];
						const checkBoxValue = value && value.includes(op) ? value.filter(v => v !== op) :checkbox.concat(op);
						onChange(checkBoxValue);
						}}
					/>{op}
			</div>));
		}
}

export default Form.createInput(owner => ({
	onChange: v => owner.update(v),
}))(CheckBox);



```