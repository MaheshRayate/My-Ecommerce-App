import React from "react";
import { useOutletContext } from "react-router-dom";

const UserWelcomePage = () => {
  const { user } = useOutletContext();

  return (
    <div className="min-h-120">
      <h1 className="text-3xl text-center font-nata-sans">
        Hello {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};

export default UserWelcomePage;
