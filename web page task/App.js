import React from 'react';
import ReactDOM from 'react-dom/client';
export default function App() {
  return (<>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
      <div className="a">
        <h1 style={{ color: 'white', paddingTop: '20px'  }} >LEARN COMPLETE</h1>
        <h1 style={{ color: 'yellow', paddingTop: '20px' }} >WEB DEVELOPMENT</h1>
        <h1 style={{ color: 'white', paddingTop: '20px' }} >COURSE</h1>
        <p style={{ color: 'white' }}>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, for routing and other client-side functionality.A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.
        </p>
        <button style={{ borderRadius: '25px' }}>know more...</button>
      </div>
      </div>

      <div className='col-md-4'>
      <div className="b">
        <form>
          <table>
            <tr>
              <td> <br /><button className='aa' style={{ width: '180px', borderRadius: '25px' }}>SIGN IN</button></td></tr>
            <tr>
              <td> <input type="text" placeholder="Enter Email or UserName" /></td><br /><br /></tr>
            <tr>
              <td> <input type="password" placeholder="Password" /></td><br /><br /></tr>
            <tr><td> <button style={{ width: '160px', borderRadius: '25px' }}>LOGIN</button></td></tr>
            <tr> <td>
              <h4 style={{ color: 'aliceblue' }}>Don't have account?<br /><span style={{ color: 'yellow' }}>Create new account</span> </h4>
            </td></tr>

          </table>

        </form>
      </div>
    </div>
    </div>
    </div>
  </>

  );
}