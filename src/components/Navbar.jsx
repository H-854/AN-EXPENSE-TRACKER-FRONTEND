import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  return (
    <div className="navbar p-0">
      <div className="container-fluid bg-primary Nav">
        <Typography
          variant="h6"
          gutterBottom
          style={{ color: "white", fontWeight: "500" }}
        >
          Expense Tracker
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="ms-auto mx-3"
          style={{ backgroundColor: "brown" }}
        />
        <Typography
          variant="h6"
          gutterBottom
          style={{ color: "white", fontWeight: "500" }}
          className="me-3"
        >
          Logout
        </Typography>
      </div>
    </div>
  );
}
