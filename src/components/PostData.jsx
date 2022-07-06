import React from "react";
import { useState } from "react";

const PostData = () => {
  const initalValue = {
    breed: "",
    coat: "",
    country: "",
    origin: "",
    pattern: "",
  };

  const [formValue, setFormValue] = useState(initalValue);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(isSubmit);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>breed</label>
          <div className="col-sm-12">
            <input
              type="text"
              name="breed"
              placeholder="breed"
              onChange={handleChange}
              value={formValue.breed}
            />
          </div>
        </div>
        {/*  */}
        <div className="form-group">
          <label>coat</label>
          <div className="col-sm-12">
            <input
              type="text"
              name="coat"
              placeholder="coat"
              onChange={handleChange}
              value={formValue.coat}
            />
          </div>
        </div>
        {/*  */}
        <div className="form-group">
          <label>country</label>
          <div className="col-sm-12">
            <input
              type="text"
              name="country"
              placeholder="coat"
              onChange={handleChange}
              value={formValue.country}
            />
          </div>
        </div>
        {/*  */}
        <div className="form-group">
          <label>origin</label>
          <div className="col-sm-12">
            <input
              type="text"
              name="origin"
              placeholder="origin"
              onChange={handleChange}
              value={formValue.origin}
            />
          </div>
        </div>
        {/*  */}
        <div className="form-group">
          <label>pattern</label>
          <div className="col-sm-12">
            <input
              type="text"
              name="pattern"
              placeholder="pattern"
              onChange={handleChange}
              value={formValue.pattern}
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};
export default PostData;
