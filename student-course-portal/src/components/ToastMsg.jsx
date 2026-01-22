import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ToastMsg() {
  const { toast, setToast } = useContext(AppContext);

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={2500}
      onClose={() => setToast({ ...toast, open: false })}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity={toast.type}
        variant="filled"
        onClose={() => setToast({ ...toast, open: false })}
        sx={{ borderRadius: 3 }}
      >
        {toast.msg}
      </Alert>
    </Snackbar>
  );
}
