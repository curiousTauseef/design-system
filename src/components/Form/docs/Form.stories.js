/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../../Button';
import Form from '../index';

export default {
	title: 'Components|Form',

	parameters: {
		component: Form,
	},
};

export const basic = () => (
	<>
		<Form>
			<Form.Fieldset legend="Form fields">
				<Form.Text label="Input" />
				<Form.Textarea label="Textarea" />
				<Form.Select label="Select" values={['', 'foo', 'bar']} />
				<Form.Checkbox label="Checkbox" />
				<Form.Radio label="Radio" />
			</Form.Fieldset>
			<Button.Ghost onClick={action('clicked')}>Reset</Button.Ghost>
			<Button.Primary onClick={action('clicked')}>Submit</Button.Primary>
		</Form>
	</>
);

export const Checkbox = () => <Form.Checkbox label="Checkbox" />;
export const Date = () => <Form.Date label="Date" />;
export const DatetimeLocal = () => <Form.DatetimeLocal label="DatetimeLocal" />;
export const Email = () => <Form.Email label="Email" />;
export const File = () => <Form.File label="File" />;
export const Hidden = () => <Form.Hidden label="Hidden" />;
export const Month = () => <Form.Number label="Month" />;
export const Number = () => <Form.Number label="Number" />;
export const Password = () => <Form.Password label="Password" />;
export const PasswordDisabled = () => (
	<Form.Password label="Disabled Password" disabled value="Lorem ipsum" />
);
export const PasswordReadOnly = () => (
	<Form.Password label="Read-Only Password" readOnly value="Lorem ipsum" />
);
export const Radio = () => <Form.Radio label="Radio" />;
export const Range = () => <Form.Range label="Range" />;
export const Search = () => <Form.Search label="Search" />;
export const SearchDisabled = () => (
	<Form.Search label="Disabled Search" disabled value="Lorem ipsum" />
);
export const SearchReadOnly = () => (
	<Form.Search label="Read-Only Search" readOnly value="Lorem ipsum" />
);
export const Tel = () => <Form.Tel label="Tel" />;
export const Text = () => <Form.Text label="Text" placeholder="Placeholder..." />;
export const TextDisabled = () => <Form.Text label="Disabled Text" disabled value="Lorem ipsum" />;
export const TextReadOnly = () => <Form.Text label="Read-Only text" readOnly value="Lorem ipsum" />;
export const Time = () => <Form.Time label="Time" />;
export const Url = () => <Form.Url label="Url" />;
export const Week = () => <Form.Week label="Week" />;

export const Select = () => (
	<Form.Select label="Select">
		<option></option>
		<option>Foo</option>
		<option>Bar</option>
	</Form.Select>
);

export const Datalist = () => (
	<Form.Datalist label="Datalist" id={'datalist'} values={['foo', 'bar']} />
);

export const Textarea = () => <Form.Textarea label="Textarea" />;
