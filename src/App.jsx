import React from "react";

// Components
import Form from "./components/form";
import NavBar from "./components/navbar";
import ShortUrl from "./components/returnedUrl";
import Urls from "./components/allUrls";
import Login from "./components/login";

import { useSelector, useDispatch } from "react-redux";
import { setShortUrl } from "./feature/urls/urlSlice";
import { logout } from "./feature/users/userSlice";

import { urlShorten } from "./services/url.shorten";

export default function App() {
  const longUrl = useSelector((state) => state.url.longUrl);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // Get the result from form,
    event.preventDefault();
    urlShorten(longUrl, user)
      .then((response) => {
        console.log(response.data);
        dispatch(setShortUrl(response.data.shortUrl));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function renderApp() {
    if (user.isLoggedIn) {
      return (
        <>
          <h2 className="text-center m-3">Url Shortener</h2>
          <div className="form text-center border p-3">
            <Form onSubmit={handleSubmit} />
          </div>
          <ShortUrl />
          <Urls />
        </>
      );
    }
  }
  return (
    <>
      <NavBar username={user.username} />

      <div className="container  ml-auto mt-4">
        {!user.isLoggedIn && <Login />}
        {user.isLoggedIn && (
          <button onClick={() => dispatch(logout())}> Logout</button>
        )}
        {renderApp()}
      </div>
    </>
  );
}
