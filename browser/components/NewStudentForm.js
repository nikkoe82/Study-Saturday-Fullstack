import React from 'react';


const NewStudentForm = props => {
  console.log('ppp', props);
  return (
    <div>
      <form onSubmit={props.selectedStudent}>
          <label htmlFor="first-name" >First Name:</label>
          <input name="first-name" />
          <label htmlFor="last-name" >Last Name:</label>
          <input name="last-name" />
          <label htmlFor="e-mail" >E-Mail:</label>
          <input name="e-mail" />
          <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default NewStudentForm;
