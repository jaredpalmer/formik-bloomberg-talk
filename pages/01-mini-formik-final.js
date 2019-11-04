import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import '../css/basic.css';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const useFormik = props => {
  const [values, setValues] = React.useState(props.initialValues || {});
  const [touched, setTouched] = React.useState({});

  const handleChange = e => {
    e.persist();
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = e => {
    e.persist();
    setTouched(prevState => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await props.onSubmit(values);
  };

  return { values, touched, handleChange, handleSubmit, handleBlur };
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async values => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formik.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Jane Doe"
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={formik.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
      />

      <button type="submit">Signup</button>
      <pre style={{ fontSize: 11, marginTop: 20 }}>
        {JSON.stringify(formik, null, 2)}
      </pre>
    </form>
  );
};
export default App;
