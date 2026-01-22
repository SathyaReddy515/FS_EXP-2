import { Avatar, Chip } from "@mui/material";
import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout title="Student Profile">
      <div className="d-flex align-items-center gap-3 mb-4">
        <Avatar sx={{ width: 70, height: 70 }}>S</Avatar>
        <div>
          <h5 className="fw-bold mb-0">Student Name</h5>
          <div className="text-muted">FullStack Learner • Semester 5</div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-4 border rounded-4 bg-light">
            <h6 className="fw-bold">Email</h6>
            <p className="mb-0 text-muted">student@gmail.com</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 border rounded-4 bg-light">
            <h6 className="fw-bold">Department</h6>
            <p className="mb-0 text-muted">Computer Science</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h6 className="fw-bold">Skills</h6>
        <div className="d-flex gap-2 flex-wrap mt-2">
          {["React", "Bootstrap", "Material UI", "Node.js", "MongoDB"].map((s) => (
            <Chip key={s} label={s} color="primary" variant="outlined" />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
