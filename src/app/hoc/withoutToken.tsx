import React, { useEffect, useState } from "react";
import { ConfigHelper } from "../base/constants";
import { ClientStorage } from "@/base/storage";

const withoutToken = (WrappedComponent: any) => ({ ...props }) => {
  const [hasAuthorized, setAuthorized] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    isLoggedInLocal();
  }, []);

  const isLoggedInLocal = async () => {
    if (!ClientStorage.getItem(ConfigHelper.COSMORATE_USER_TOKEN)) {
      setAuthorized(false);
    } else {
      setAuthorized(true);
      window.location.href = `/`;
    }
  };

  return (
    <>
      {hasAuthorized !== undefined && !hasAuthorized && <WrappedComponent {...props} />}
    </>
  );
};

export { withoutToken };
