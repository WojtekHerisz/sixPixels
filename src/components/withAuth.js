/* eslint-disable react/display-name */
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (ProtectedComponent) => (props) => {
  const Router = useRouter();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    // if (typeof window === "undefined") return;

    if (!isAuthenticated) {
      Router.push({
        pathname: "/login",
        query: {
          from: Router.pathname,
        },
      });
    }
  });

  return <ProtectedComponent {...props} />;
};

export default withAuth;
