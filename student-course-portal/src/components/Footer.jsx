export default function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container py-4 text-center">
        <div className="fw-bold">LearnSphere</div>
        <div className="text-muted small">
          Student Course Management Portal • Frontend Project
        </div>
        <div className="text-muted small mt-1">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}
