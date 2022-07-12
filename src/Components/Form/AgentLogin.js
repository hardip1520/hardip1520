import React from 'react'

const AgentLogin = () => {
  return (
   <>

<div className="register-container">
    <form>
    <div className="form">
      <div className="title">Welcome Agent</div>
      <div className="subtitle">Log In Here</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">Name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input  className="input" type="password" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="password" className="placeholder">Password</label>
      </div>
      <button type="text" className="submit">Login</button>
    </div>
    </form>
   </div>
   </>
  )
}

export default AgentLogin