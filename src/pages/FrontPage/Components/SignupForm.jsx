import "../Styles/signup.css";
import { useState } from "react";
export function SignUpForm() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 ? (
        <>
          <SignupFormStepOne />
          <button
            type="submit"
            className="login-page-btn"
            onClick={() => setStep(1)}
            name="signup"
          >
            Next
          </button>
        </>
      ) : (
        <SignupFormStepTwo />
      )}
    </>
  );
}
function SignupFormStepOne() {
  return (
    <form>
      <div className="login-page-input-box">
        <label htmlFor="signup-name">Full Name</label>
        <input
          type="text"
          id="signup-name"
          name="username"
          required
          placeholder="Enter your full name"
        />
      </div>
      <div className="login-page-input-box">
        <label htmlFor="signup-email">Email address</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="login-page-input-box">
        <label htmlFor="signup-phone">Phone Number</label>
        <input
          type="tel"
          id="signup-phone"
          name="phone"
          required
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
        />
      </div>
      <div className="login-page-input-box">
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          name="password"
          required
          placeholder="Create a password"
          minLength="8"
        />
      </div>

      <div className="login-page-input-box">
        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
          type="password"
          id="signup-confirm-password"
          name="confirmPassword"
          required
          placeholder="Re-enter your password"
          minLength="8"
        />
      </div>
    </form>
  );
}
function SignupFormStepTwo() {
  return (
    <form>
      <div className="login-page-input-box">
        <label htmlFor="signup-address">Delivery Address</label>
        <textarea
          id="signup-address"
          name="address"
          required
          placeholder="Enter your delivery address"
          className="login-page-textarea"
          rows="2"
        />
      </div>

      <div className="login-page-input-box">
        <label htmlFor="signup-diet">Dietary Preference</label>
        <select
          id="signup-diet"
          name="dietPreference"
          className="login-page-select"
        >
          <option value="none">No preference</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="halal">Halal</option>
        </select>
      </div>

      <div className="login-page-checkbox-wrapper">
        <input type="checkbox" id="signup-terms" required />
        <label htmlFor="signup-terms">
          I agree to the{" "}
          <a href="#" className="login-page-terms-link">
            terms & policy
          </a>
        </label>
      </div>

      <button type="submit" className="login-page-btn" name="signup">
        Sign Up
      </button>
    </form>
  );
}
