import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phoneNumber: "" };

function From({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }
    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="btn">
        <button className="button-23">Add</button>
      </div>
    </form>
  );
}

export default From;
