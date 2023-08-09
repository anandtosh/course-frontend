import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FloatingButton from "./routes/FloatingButton";
import { useThemeStore } from "./stores";
function App() {
  const {theme} = useThemeStore()
  return (
    <>
      <Suspense fallback={<>Fallback Component</>} >
        <Outlet/>
        <FloatingButton />
        <ToastContainer
          position='bottom-right'
          theme={`${theme === 'dark' ? 'light' : 'dark'}`}
        />
      </Suspense>
    </>
  );
}

export default App;
