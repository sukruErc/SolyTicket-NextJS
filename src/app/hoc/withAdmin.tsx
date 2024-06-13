import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/app/hooks";
import { userContextRedux } from "@/redux/slices/user-context";
import { UserRoleEnum } from "@/base/models/common-models";

const withAdmin = (WrappedComponent: any) => ({ ...props }) => {
  const [hasAuthorized, setAuthorized] = useState<boolean | undefined>(undefined);
  const userContext = useAppSelector(userContextRedux);

  useEffect(() => {
    checkUserIsAdmin();
  }, [userContext?.role]);

  useEffect(() => {
    if (hasAuthorized === false) {
      window.location.href = '/';
    }
  }, [hasAuthorized]);

  const checkUserIsAdmin = async () => {
    if (userContext?.role === UserRoleEnum.Admin) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  };

  return <>{hasAuthorized !== undefined && hasAuthorized && <WrappedComponent {...props} />}</>;
};

export { withAdmin };
