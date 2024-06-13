import React from "react";
import { useAppDispatch } from "@/redux/app/hooks";
import { setUserContext } from "@/redux/slices/user-context";
import { ClientStorage } from "@/base/storage";
import { ConfigHelper } from "@/base/constants";
import { clearLoginStorage } from "@/base/utils/proxyUtils";
import JwtDecode from 'jwt-decode';

const withBase = (WrappedComponent: any) => ({ ...props }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const token = ClientStorage.getItem(ConfigHelper.COSMORATE_USER_TOKEN);

    if (!token) {
      return;
    }

    const decoded: any = JwtDecode(token);

    // Check token expiration
    if (decoded && decoded.exp && (decoded.exp * 1000) > (new Date().getTime())) {
      dispatch(setUserContext({ id: decoded.id, role: decoded.rol, username: decoded.username }));
    } else {
      dispatch(setUserContext(Object.assign({})));
      clearLoginStorage();
    }
  }, []);

  return <WrappedComponent {...props} />;
};

export { withBase };
