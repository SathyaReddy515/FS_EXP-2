import { NavLink } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PersonIcon from "@mui/icons-material/Person";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function DashboardLayout({ title, children }) {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <div className="bg-white border rounded-4 shadow-sm p-3 sticky-top" style={{ top: 90 }}>
            <div className="fw-bold mb-3">🎓 Student Panel</div>

            <div className="list-group">
              <NavLink className="list-group-item list-group-item-action" to="/my-courses">
                <SpaceDashboardIcon sx={{ mr: 1 }} />
                Dashboard
              </NavLink>

              <NavLink className="list-group-item list-group-item-action" to="/courses">
                <MenuBookIcon sx={{ mr: 1 }} />
                Courses
              </NavLink>

              <NavLink className="list-group-item list-group-item-action" to="/feedback">
                <FeedbackIcon sx={{ mr: 1 }} />
                Feedback
              </NavLink>

              <NavLink className="list-group-item list-group-item-action" to="/profile">
                <PersonIcon sx={{ mr: 1 }} />
                Profile
              </NavLink>

              <NavLink className="list-group-item list-group-item-action" to="/certificates">
                <WorkspacePremiumIcon sx={{ mr: 1 }} />
                Certificates
              </NavLink>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-9">
          <div className="bg-white border rounded-4 shadow-sm p-4">
            <h3 className="fw-bold mb-4">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
