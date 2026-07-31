interface StudentProps {
  name: string;
  branch: string;
  cgpa: number;
}

function StudentCard({
  name,
  branch,
  cgpa,
}: StudentProps) {
  return (
    <div className="card student-card">
      <span className="badge">Student Profile</span>

      <h2 style={{ marginTop: 12 }}>{name}</h2>

      <p className="muted">Branch: {branch}</p>

      <p className="muted">CGPA: {cgpa}</p>
    </div>
  );
}

export default StudentCard;