import "../../Styles/login.css";
import { useEffect, useRef,useState } from "react";
import { LoginForm } from "./LoginForm.jsx";
import { SignUpForm } from "./SignupForm.jsx";
export function LoginContainer({ showLoginPanel, setShowLoginPanel }) {
  const [signUp,setSignUp] = useState(true);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowLoginPanel(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div
      className={`login-page-container ${showLoginPanel ? "login-page-active" : ""}`}
      ref={menuRef}
    >
      <div className="login-page-form-wrapper">
        <h2>{signUp ? "Get Back To Ordering" : "Get Started Now!"}</h2>
        <p id="errors"></p>
        {signUp ? <LoginForm/> : <SignUpForm/>}
        <div className="login-page-divider">
          <span>Or</span>
        </div>

        <div className="login-page-social-login">
          <button
            className="login-page-social-btn login-page-google-btn"
            onClick={() => alert(`Under development. Will never develop`)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10V12.05H15.4818C15.2273 13.3 14.5182 14.3591 13.4636 15.0682V17.5773H16.7636C18.7182 15.8364 19.8 13.2727 19.8 10.2273Z"
                fill="#4285F4"
              />
              <path
                d="M10 20C12.7 20 14.9636 19.1045 16.7636 17.5773L13.4636 15.0682C12.5636 15.6682 11.4182 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.40455 11.9H0.990909V14.4909C2.77273 18.0318 6.10909 20 10 20Z"
                fill="#34A853"
              />
              <path
                d="M4.40455 11.9C4.18182 11.3 4.05455 10.6591 4.05455 10C4.05455 9.34091 4.18182 8.7 4.40455 8.1V5.50909H0.990909C0.359091 6.76364 0 8.14091 0 10C0 11.8591 0.359091 13.2364 0.990909 14.4909L4.40455 11.9Z"
                fill="#FBBC04"
              />
              <path
                d="M10 3.97727C11.5591 3.97727 12.9318 4.48182 14.0227 5.52727L17.0091 2.54091C15.2273 0.859091 12.7 0 10 0C6.10909 0 2.77273 1.96818 0.990909 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>

          <button
            className="login-page-social-btn login-page-apple-btn"
            onClick={() => alert(`Under development. Will never develop`)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 15.7C17 16.8 16.4 17.7 15.7 18.5C14.7 19.6 13.9 20.3 13.2 20.3C12.7 20.3 12.1 20.1 11.4 19.8C10.7 19.5 10.1 19.3 9.5 19.3C8.9 19.3 8.2 19.5 7.5 19.8C6.8 20.1 6.2 20.3 5.8 20.3C5.1 20.3 4.3 19.6 3.3 18.4C2.3 17.2 1.5 15.8 0.9 14.1C0.3 12.4 0 10.8 0 9.3C0 7.6 0.4 6.1 1.1 4.9C1.8 3.7 2.8 2.8 4 2.1C5.2 1.4 6.5 1 8 1C8.6 1 9.4 1.2 10.3 1.5C11.2 1.8 11.8 2 12.1 2C12.3 2 13 1.8 14.1 1.4C15.1 1 16 0.9 16.8 1C18.5 1.1 19.8 1.7 20.7 2.9C19.2 3.9 18.5 5.2 18.5 6.9C18.5 8.3 19 9.5 20 10.4C20.4 10.8 20.9 11.1 21.4 11.3C21.3 11.8 21.1 12.2 21 12.7C20.5 14 19.9 15.2 19.1 16.3C18.6 17 18.1 17.5 17.5 17.5V15.7ZM16.9 0.5C16.9 1.5 16.5 2.5 15.8 3.4C15 4.4 14 5 13 5C13 4.9 13 4.8 13 4.7C13 3.8 13.4 2.7 14.2 1.8C14.6 1.4 15.1 1 15.6 0.7C16.1 0.4 16.6 0.2 17 0.1C17 0.2 17 0.4 16.9 0.5Z"
                fill="currentColor"
              />
            </svg>
            Sign in with Apple
          </button>
        </div>

        <div className="login-page-signup-text">
          <span>
            {signUp? "Have an account?" : "Don't have an account?"}
            <a href="#" onClick={()=>{setSignUp(!signUp); 
              signUp ? console.log("Displaying Signup Page") : console.log("Displaying Login Page")
            }} className="login-page-signin-link">
              {signUp ? "Sign in" : "Sign up"}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
