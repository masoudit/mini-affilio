// import { useLazyGetCurrentUserQuery } from "app/services/mock";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector((state) => state.user);
  // const [getUser] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    // if (user.token && !user.fetched) {
    // getUser();
    // }
  }, [user]);

  return useMemo(() => ({ user }), [user]);
};
