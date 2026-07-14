export function LoginForm(){
    return (
          <form
          method="post"
          id="login-page-signup-htmlForm"
          onSubmit={() => {
            console.log("submitted");
          }}
        >
          <div className="login-page-input-box">
            <label htmlFor="login-page-name">Name</label>
            <input
              type="text"
              id="login-page-name"
              name="username"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="login-page-input-box">
            <label htmlFor="login-page-email">Email address</label>
            <input
              type="email"
              id="login-page-email"
              required
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="login-page-input-box">
            <label htmlFor="login-page-password">Password</label>
            <input
              type="password"
              id="login-page-password"
              required
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="login-page-checkbox-wrapper">
            <input type="checkbox" id="login-page-terms" required />
            <label htmlFor="login-page-terms">
              I agree to the{" "}
              <a href="#" className="login-page-terms-link">
                terms & policy
              </a>
            </label>
          </div>

          <button type="submit" className="login-page-btn" name="signup">
            Signup
          </button>
        </form>
    )
}