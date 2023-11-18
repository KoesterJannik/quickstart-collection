import React, { useEffect } from "react";
import Providers from "../Provider/Providers";
import { userUserStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};

function IsAuthenticated({ children }: Props) {
  const { user, getUserDetails } = userUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      console.log("No access token");
      navigate("/login");
    }

    getUserDetails();
  }, []);

  return (
    <Providers>
      {children}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Providers>
  );
}

export default IsAuthenticated;
