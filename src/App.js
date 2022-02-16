import { ConfigProvider } from "antd";
import "antd/dist/antd.less";
// import "antd/dist/antd.css";
import locale from "antd/lib/locale/fa_IR";
import moment from "moment-jalaali";
import React, { Suspense, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PUBLIC_ROUTES, getPrivateRoutes } from "@/app/routes";

import "./App.less";
import NotFound from "./components/main/404";
import AppLoading from "./components/main/Loading";
import PrivateLayout from "./components/main/PrivateLayout";
import PublicLayout from "./components/main/PublicLayout";
import { useAuth } from "./utils/hooks/useAuth";

// const { RangePicker } = DatePickerJalali;

moment.locale("fa");

function App() {
  const { user } = useAuth();

  const privateRoutes = useMemo(() => {
    return getPrivateRoutes(user?.profile?.type);
  }, [user]);

  return (
    <Suspense fallback={<AppLoading open={true} />}>
      <ConfigProvider locale={locale} direction="rtl">
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              {PUBLIC_ROUTES.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.component} />
              ))}
            </Route>

            <Route element={<PrivateLayout />}>
              {privateRoutes.map((route, idx) => (
                <Route
                  key={idx}
                  // path={`${PRIVATE_BASE_PATH}${route.path}`}
                  path={`${route.path}`}
                  element={route.component}
                />
              ))}
            </Route>

            <Route element={<PublicLayout />}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Suspense>
  );
}

export default App;
