import React from "react";
import { useSelector } from "react-redux";
function ShortUrl() {
  const shortUrl = useSelector((state) => state.url.shortUrl);

  return (
    <div className="text-center">
      <a
        className="fw-bold"
        target="_blank"
        rel="noreferrer"
        href={"http://" + shortUrl}
      >
        {shortUrl}
      </a>
    </div>
  );
}

export default ShortUrl;
