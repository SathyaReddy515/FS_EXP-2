import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [enrolled, setEnrolled] = useState(() =>
    JSON.parse(localStorage.getItem("enrolledCourses") || "[]")
  );

  const [toast, setToast] = useState({
    open: false,
    msg: "",
    type: "success",
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
  }, [enrolled]);

  const enrollCourse = (course) => {
    setEnrolled((prev) => {
      const exists = prev.find((c) => c.id === course.id);

      if (exists) {
        setToast({ open: true, msg: "Already enrolled!", type: "warning" });
        return prev;
      }

      setToast({
        open: true,
        msg: "Enrolled successfully 🎉",
        type: "success",
      });

      return [...prev, course];
    });
  };

  const removeCourse = (id) => {
    setEnrolled((prev) => prev.filter((c) => c.id !== id));
    setToast({ open: true, msg: "Course removed", type: "info" });
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        enrolled,
        enrollCourse,
        removeCourse,
        toast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
