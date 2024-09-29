import React from "react";

const DetailUserPage = (props: any) => {
  console.log(">> check props", props);
  return (
    <div>
      <h1>Detail User {props?.id}</h1>
      <p>Blog content goes here</p>
    </div>
  );
};

export default DetailUserPage;
