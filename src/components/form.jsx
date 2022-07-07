import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLongUrl } from "../feature/urls/urlSlice";

function Form(props) {
  const longUrl = useSelector((state) => state.url.longUrl);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    return dispatch(setLongUrl(event.target.value));
  };
  return (
    <form className="form-group" method="POST" onSubmit={props.onSubmit}>
      <p>Enter Long Url here</p>
      <input
        id="test1"
        className="form-control w-100"
        name="longUrl"
        value={longUrl}
        onChange={handleChange}
        type="url"
        placeholder="e.g. https://reactrouter.com/docs/en/"
      />

      <br></br>
      <input type="submit" value="Submit" className="mt-2" />
    </form>
  );
}

export default Form;
