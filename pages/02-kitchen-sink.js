import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import '../css/basic.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const App = () => (
  <div>
    <h1>Application to Secede</h1>
    <p>
      This form is intended to assis small landmasses in the process of breaking
      away from their pre-existing political unions and establiishing themselves
      as independent entities. It is not intended to be used to foment political
      unrest or guerilla warfare. Other forms are available for those express
      purposes.
    </p>
    <Formik
      initialValues={{
        name: '',
        residence: '',
        reasons: [],
        suggestion: '',
        newName: '',
        area: '',
        system: '',
        character: '',
        terms: false,
        newsletter: false,
        jobType: ['designer'],
      }}
      onSubmit={async values => {
        await sleep(1000);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        isSubmitting,
        getFieldProps,
        handleChange,
        handleBlur,
        values,
        dirty,
        handleReset,
      }) => (
        <Form>
          <label>Name</label>
          <Field name="name" type="text" placeholder="Jane Doe" />

          <label>Present country of Residence</label>
          <Field name="residence" type="text" placeholder="USA" />

          <label>
            What are your reasons for wanting to secede from your country of
            residence? (tick all that apply)
          </label>
          <label>
            <Field name="reason" value="taxation" type="checkbox" />
            Taxation
          </label>
          <label>
            <Field name="reason" value="politics" type="checkbox" />
            Politics
          </label>
          <label>
            <Field name="reason" value="Culture" type="checkbox" />
            Culture
          </label>
          <label>
            <Field name="reason" value="economics" type="checkbox" />
            Economics
          </label>
          <label>
            <Field name="reason" value="sport" type="checkbox" />
            Sport
          </label>
          <label>
            <Field name="reason" value="ethnicity" type="checkbox" />
            Ethnicity
          </label>

          <label>
            If the government of your present nation could change one thing to
            make you stay, what would it be?
          </label>
          <Field as="textarea" name="suggestion" rows={4} />
          <hr />
          <label>Name of your new nation-state</label>
          <Field name="newName" type="text" />
          <label>
            Please give details of the area/landmass included within your new
            nation-state.
          </label>
          <Field as="textarea" name="area" rows={2} />
          {/* 
            This first checkbox will result in a boolean value being stored.
          */}
          <div className="label bold">
            Broadly define your proposed system of government
          </div>
          <label>
            <Field type="radio" name="system" value="Republic" />
            Republic
          </label>
          <label>
            <Field type="radio" name="system" value="Monarchy" />
            Monarchy
          </label>
          <label>
            <Field type="radio" name="system" value="Dictatorship" />
            Dictatorship
          </label>
          <label>
            <Field type="radio" name="system" value="Parliamentary Democracy" />
            Parliamentary Democracy
          </label>
          <label>
            <Field type="radio" name="system" value="Religious Theocracy" />
            Religious Theocracy
          </label>

          <div className="label bold">
            Broadly the political character of your new nation
          </div>
          <label>
            <Field type="radio" name="system" value="Fascist" />
            Fascist
          </label>
          <label>
            <Field type="radio" name="system" value="Liberal" />
            Liberal
          </label>
          <label>
            <Field type="radio" name="system" value="Communist" />
            Communist
          </label>
          <label>
            <Field type="radio" name="system" value="Anarchist" />
            Anarchist
          </label>
          <label>
            <Field type="radio" name="system" value="Social Democrat" />
            Social Democrat
          </label>

          {/* 
           The <select> element will also behave the same way if 
           you pass `multiple` prop to it. 
          */}
          <label htmlFor="location bold">Where do you work?</label>
          <Field component="select" id="location" name="location">
            <option value="NY">New York</option>
            <option value="SF">San Francisco</option>
            <option value="CH">Chicago</option>
            <option value="OTHER">Other</option>
          </Field>
          <label>
            <Field type="checkbox" name="terms" />I accept the terms and
            conditions.
          </label>
          {/* Here's how you can use a checkbox to show / hide another field */}
          {!!values.terms ? (
            <div>
              <label>
                <Field type="checkbox" name="newsletter" />
                Send me the newsletter{' '}
              </label>
            </div>
          ) : null}
          <button
            className="button"
            type="button"
            disabled={!dirty}
            onClick={handleReset}
          >
            Reset
          </button>
          <button className="button" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default App;
