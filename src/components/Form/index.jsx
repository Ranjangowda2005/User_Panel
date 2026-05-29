/* eslint-disable react/prop-types */

const Form = ({ addUser }) => {
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // create an object from form inputs
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    // add the new user to the list
    addUser(newUser);

    console.log(newUser);

    // reset the form
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="e.g. John"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="e.g. john@example.com"
        />
      </div>

      <div className="my-4">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          className="form-control"
          placeholder="e.g. 20"
        />
      </div>

      <button>Add User</button>
    </form>
  );
};

export default Form;
