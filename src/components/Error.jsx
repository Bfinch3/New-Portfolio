import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>error</h1>
      <p>An error has occurred.</p>
    </div>
  );
};

export default ErrorPage;
