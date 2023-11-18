import { userUserStore } from "../stores/userStore";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = userUserStore();
  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li>
              <a href={`/dashboard`}>Dashboard</a>
            </li>

            <li>
              <button
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/register`}>Register</a>
            </li>
            <li>
              <a href={`/login`}>Login</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
