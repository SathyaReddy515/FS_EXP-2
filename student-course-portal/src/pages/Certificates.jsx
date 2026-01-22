import DashboardLayout from "../components/DashboardLayout";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function Certificates() {
  const certificates = [
    { id: 1, title: "React Essentials", date: "2026-01-10" },
    { id: 2, title: "UI/UX Design Masterclass", date: "2026-01-15" },
  ];

  return (
    <DashboardLayout title="Certificates">
      <p className="text-muted">
        Your achievements & course completion certificates 🎓
      </p>

      <div className="row g-3 mt-2">
        {certificates.map((c) => (
          <div className="col-md-6" key={c.id}>
            <div className="p-4 border rounded-4 bg-light">
              <h6 className="fw-bold mb-1">{c.title}</h6>
              <div className="text-muted small mb-3">
                Completed on: {c.date}
              </div>

              <Button variant="contained" startIcon={<DownloadIcon />}>
                Download (UI)
              </Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
