import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';
import Modal from '../user_management/modal';
 
class Header extends React.Component{
  render(){
    return (
      <header className="Top-Navigation">
      <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand DisNoneMob" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="198.121" height="21.792" viewBox="0 0 198.121 21.792">
                  <g id="Group_10981" data-name="Group 10981" transform="translate(4488.752 -5108.324)">
                  <path id="Path_40176" data-name="Path 40176" d="M28.848-10.152a.473.473,0,0,1-.444.264A.835.835,0,0,1,28-10.02q-.228-.132-.558-.294a5.241,5.241,0,0,0-.786-.3,3.75,3.75,0,0,0-1.08-.138,3.187,3.187,0,0,0-.972.138,2.334,2.334,0,0,0-.738.378,1.672,1.672,0,0,0-.468.558,1.5,1.5,0,0,0-.162.69,1.15,1.15,0,0,0,.27.78,2.346,2.346,0,0,0,.714.54,6.225,6.225,0,0,0,1.008.4q.564.174,1.158.372t1.158.438a4.2,4.2,0,0,1,1.008.6,2.744,2.744,0,0,1,.714.882,2.7,2.7,0,0,1,.27,1.254,3.971,3.971,0,0,1-.3,1.554A3.391,3.391,0,0,1,28.344-.93a4.282,4.282,0,0,1-1.44.822,5.916,5.916,0,0,1-1.968.3,6.139,6.139,0,0,1-2.3-.414A5.838,5.838,0,0,1,20.88-1.284l.5-.816a.732.732,0,0,1,.228-.24.615.615,0,0,1,.336-.084.8.8,0,0,1,.456.168q.24.168.582.372a4.429,4.429,0,0,0,.834.372,3.83,3.83,0,0,0,1.224.168,3.339,3.339,0,0,0,1.092-.162,2.294,2.294,0,0,0,.78-.438,1.734,1.734,0,0,0,.462-.636,1.977,1.977,0,0,0,.15-.768,1.274,1.274,0,0,0-.27-.834,2.279,2.279,0,0,0-.714-.564,5.818,5.818,0,0,0-1.014-.408q-.57-.174-1.164-.366T23.2-5.958a4.092,4.092,0,0,1-1.014-.618,2.8,2.8,0,0,1-.714-.918A2.968,2.968,0,0,1,21.2-8.82a3.234,3.234,0,0,1,.288-1.338,3.281,3.281,0,0,1,.84-1.128,4.137,4.137,0,0,1,1.356-.774,5.427,5.427,0,0,1,1.836-.288,5.807,5.807,0,0,1,2.154.378,5.1,5.1,0,0,1,1.65,1.038Zm5.568-2V0H32.28V-12.156Zm.456-3.816a1.359,1.359,0,0,1-.126.582,1.676,1.676,0,0,1-.336.48,1.542,1.542,0,0,1-.492.33,1.5,1.5,0,0,1-.594.12,1.417,1.417,0,0,1-.582-.12,1.509,1.509,0,0,1-.474-.33,1.638,1.638,0,0,1-.324-.48,1.417,1.417,0,0,1-.12-.582,1.5,1.5,0,0,1,.12-.594,1.594,1.594,0,0,1,.324-.492,1.509,1.509,0,0,1,.474-.33,1.417,1.417,0,0,1,.582-.12,1.5,1.5,0,0,1,.594.12,1.542,1.542,0,0,1,.492.33,1.628,1.628,0,0,1,.336.492A1.44,1.44,0,0,1,34.872-15.972ZM37.92,0V-12.156H39.2a.527.527,0,0,1,.564.444l.156,1.248a6.187,6.187,0,0,1,1.512-1.356,3.575,3.575,0,0,1,1.944-.528,2.86,2.86,0,0,1,1.986.684,3.848,3.848,0,0,1,1.1,1.848,4.006,4.006,0,0,1,.678-1.14,3.869,3.869,0,0,1,.93-.792,3.939,3.939,0,0,1,1.1-.456,4.9,4.9,0,0,1,1.182-.144,4.5,4.5,0,0,1,1.71.306,3.385,3.385,0,0,1,1.272.894,3.982,3.982,0,0,1,.8,1.446,6.4,6.4,0,0,1,.276,1.962V0H52.26V-7.74a3.276,3.276,0,0,0-.624-2.166,2.226,2.226,0,0,0-1.8-.738,2.718,2.718,0,0,0-1,.186A2.414,2.414,0,0,0,48-9.912a2.56,2.56,0,0,0-.57.906,3.514,3.514,0,0,0-.21,1.266V0H45.072V-7.74a3.406,3.406,0,0,0-.588-2.184,2.087,2.087,0,0,0-1.716-.72,2.682,2.682,0,0,0-1.464.426A4.857,4.857,0,0,0,40.068-9.06V0ZM59.808-2.928a3.451,3.451,0,0,0,1.284,1.116,3.653,3.653,0,0,0,1.56.324A3.077,3.077,0,0,0,65.268-2.7a5.661,5.661,0,0,0,.912-3.456,8.624,8.624,0,0,0-.21-2.04,3.989,3.989,0,0,0-.606-1.4,2.358,2.358,0,0,0-.972-.8,3.233,3.233,0,0,0-1.308-.252,3.441,3.441,0,0,0-1.83.48,5.275,5.275,0,0,0-1.446,1.356ZM59.7-10.272A6.3,6.3,0,0,1,61.476-11.8a4.561,4.561,0,0,1,2.3-.576,4.417,4.417,0,0,1,1.908.4,3.909,3.909,0,0,1,1.452,1.188,5.7,5.7,0,0,1,.924,1.95,10.008,10.008,0,0,1,.324,2.676,8.388,8.388,0,0,1-.36,2.5,6.028,6.028,0,0,1-1.038,2A4.878,4.878,0,0,1,65.334-.318a4.881,4.881,0,0,1-2.2.486A4.439,4.439,0,0,1,61.218-.21a4.5,4.5,0,0,1-1.41-1.05V4.116H57.66V-12.156h1.284a.527.527,0,0,1,.564.444Zm13.62-7.4V0H71.184V-17.676Zm5.712,5.52V0H76.9V-12.156Zm.456-3.816a1.359,1.359,0,0,1-.126.582,1.676,1.676,0,0,1-.336.48,1.542,1.542,0,0,1-.492.33,1.5,1.5,0,0,1-.594.12,1.417,1.417,0,0,1-.582-.12,1.509,1.509,0,0,1-.474-.33,1.638,1.638,0,0,1-.324-.48,1.417,1.417,0,0,1-.12-.582,1.5,1.5,0,0,1,.12-.594,1.6,1.6,0,0,1,.324-.492,1.509,1.509,0,0,1,.474-.33,1.417,1.417,0,0,1,.582-.12,1.5,1.5,0,0,1,.594.12,1.542,1.542,0,0,1,.492.33,1.627,1.627,0,0,1,.336.492A1.44,1.44,0,0,1,79.488-15.972ZM83.328,0V-10.332l-1.344-.156a1.069,1.069,0,0,1-.414-.186.436.436,0,0,1-.162-.366v-.876h1.92v-1.176a5.416,5.416,0,0,1,.294-1.854,3.758,3.758,0,0,1,.84-1.368,3.56,3.56,0,0,1,1.314-.846,4.893,4.893,0,0,1,1.728-.288,4.5,4.5,0,0,1,1.5.24l-.048,1.068a.31.31,0,0,1-.318.312q-.294.024-.786.024a3.277,3.277,0,0,0-1,.144,1.893,1.893,0,0,0-.774.468,2.119,2.119,0,0,0-.5.852,4.227,4.227,0,0,0-.174,1.308v1.116h3.5v1.548H85.476V0Zm18.108-12.156L94.656,3.588a1.118,1.118,0,0,1-.27.384.733.733,0,0,1-.5.144H92.3l2.22-4.824L89.508-12.156h1.848a.653.653,0,0,1,.438.138.724.724,0,0,1,.222.306l3.252,7.656A8.547,8.547,0,0,1,95.592-3q.168-.564.36-1.068l3.156-7.644a.683.683,0,0,1,.246-.318.649.649,0,0,1,.39-.126Zm14.4,2.842V0h-1.105V-6.844q0-.137.01-.293t.023-.318l-3.2,5.824a.484.484,0,0,1-.455.292h-.182a.484.484,0,0,1-.455-.292l-3.263-5.85a5.69,5.69,0,0,1,.039.637V0h-1.105V-9.314h.93a.808.808,0,0,1,.26.033.374.374,0,0,1,.175.182l3.218,5.733q.078.156.153.325t.14.345q.065-.175.136-.348a3.53,3.53,0,0,1,.156-.328L114.472-9.1a.345.345,0,0,1,.172-.182.84.84,0,0,1,.263-.033Zm7.325,5.856L121.7-7.247q-.065-.169-.136-.393t-.137-.478a7.083,7.083,0,0,1-.279.878l-1.463,3.783ZM125.788,0h-.975a.419.419,0,0,1-.273-.084.52.52,0,0,1-.156-.214l-.871-2.249h-4.179L118.463-.3a.456.456,0,0,1-.149.208A.415.415,0,0,1,118.04,0h-.975l3.724-9.314h1.274ZM129.6-4.8a3.188,3.188,0,0,0,.965-.133,1.977,1.977,0,0,0,.7-.377,1.564,1.564,0,0,0,.426-.582,1.9,1.9,0,0,0,.143-.747,1.488,1.488,0,0,0-.546-1.255,2.652,2.652,0,0,0-1.638-.422h-1.378V-4.8ZM133.9,0h-1.118a.551.551,0,0,1-.507-.266l-2.418-3.328a.717.717,0,0,0-.237-.224.864.864,0,0,0-.393-.068h-.956V0h-1.255V-9.314h2.633a5.752,5.752,0,0,1,1.527.179,2.915,2.915,0,0,1,1.063.517,2.069,2.069,0,0,1,.621.816,2.726,2.726,0,0,1,.2,1.069,2.681,2.681,0,0,1-.156.923,2.438,2.438,0,0,1-.452.77,2.7,2.7,0,0,1-.722.582,3.572,3.572,0,0,1-.965.364,1.246,1.246,0,0,1,.416.4Zm2.516-5.233h.475a1.056,1.056,0,0,0,.4-.062.708.708,0,0,0,.273-.211l3.1-3.51a.746.746,0,0,1,.273-.234.846.846,0,0,1,.351-.065h1.066L138.8-5.3a2.032,2.032,0,0,1-.25.257,1.207,1.207,0,0,1-.257.166,1.031,1.031,0,0,1,.319.172,1.607,1.607,0,0,1,.279.3L142.6,0h-1.092a1.179,1.179,0,0,1-.211-.016.507.507,0,0,1-.153-.052.5.5,0,0,1-.114-.084.848.848,0,0,1-.094-.114l-3.211-3.7a.78.78,0,0,0-.28-.231,1.151,1.151,0,0,0-.455-.068h-.572V0h-1.255V-9.314h1.255Zm13.1,4.206L149.514,0h-5.74V-9.314h5.74v1.027h-4.479v3.094h3.627v.988h-3.627v3.179Zm8.06-7.228h-3.016V0h-1.255V-8.255h-3.022V-9.314h7.293Zm7.065,3.77a2.905,2.905,0,0,0,.952-.143,1.987,1.987,0,0,0,.7-.4,1.643,1.643,0,0,0,.426-.614,2.1,2.1,0,0,0,.143-.787,1.787,1.787,0,0,0-.549-1.391,2.408,2.408,0,0,0-1.667-.5H163.15v3.835Zm0-4.829a5.159,5.159,0,0,1,1.537.2,2.953,2.953,0,0,1,1.082.582,2.344,2.344,0,0,1,.64.91,3.2,3.2,0,0,1,.211,1.19,3.031,3.031,0,0,1-.228,1.19,2.559,2.559,0,0,1-.666.93,3.1,3.1,0,0,1-1.085.608,4.672,4.672,0,0,1-1.492.218H163.15V0H161.9V-9.314Zm10.342,8.255V0H169.7V-9.314h1.255v8.255Zm6.338-2.4-1.463-3.789q-.065-.169-.136-.393t-.137-.478a7.08,7.08,0,0,1-.279.878l-1.463,3.783ZM183.951,0h-.975a.419.419,0,0,1-.273-.084.52.52,0,0,1-.156-.214l-.871-2.249H177.5L176.625-.3a.456.456,0,0,1-.149.208A.415.415,0,0,1,176.2,0h-.975l3.725-9.314h1.274Zm7.527-1.924a.241.241,0,0,1,.182.085l.5.539a3.985,3.985,0,0,1-1.388,1.034A4.749,4.749,0,0,1,188.8.1a4.612,4.612,0,0,1-1.82-.348,4,4,0,0,1-1.4-.975,4.407,4.407,0,0,1-.9-1.5,5.621,5.621,0,0,1-.319-1.931,5.422,5.422,0,0,1,.332-1.931,4.418,4.418,0,0,1,.933-1.508,4.171,4.171,0,0,1,1.44-.978,4.79,4.79,0,0,1,1.852-.348,4.513,4.513,0,0,1,1.755.319,4.418,4.418,0,0,1,1.339.865l-.416.578a.341.341,0,0,1-.1.107.289.289,0,0,1-.166.042.516.516,0,0,1-.286-.127,4.346,4.346,0,0,0-.442-.283,3.432,3.432,0,0,0-.682-.283,3.448,3.448,0,0,0-1.008-.127,3.385,3.385,0,0,0-1.319.25,2.881,2.881,0,0,0-1.03.725,3.344,3.344,0,0,0-.673,1.157,4.616,4.616,0,0,0-.241,1.54A4.494,4.494,0,0,0,185.9-3.1a3.43,3.43,0,0,0,.682,1.154,2.885,2.885,0,0,0,1.021.718,3.249,3.249,0,0,0,1.271.247,5.242,5.242,0,0,0,.751-.049,3.065,3.065,0,0,0,.617-.153,2.6,2.6,0,0,0,.527-.263,3.752,3.752,0,0,0,.484-.38A.336.336,0,0,1,191.477-1.924Zm7.891.9L199.362,0h-5.74V-9.314h5.74v1.027h-4.479v3.094h3.627v.988h-3.627v3.179Z" transform="translate(-4490 5126)"/>
                  <path id="Path_40177" data-name="Path 40177" d="M12.66-9.864a4.593,4.593,0,0,0-1.032-.108,3.613,3.613,0,0,0-1.65.378,4.256,4.256,0,0,0-1.29.99,4.616,4.616,0,0,0-.846,1.4,4.46,4.46,0,0,0-.306,1.62,2.236,2.236,0,0,0,.4,1.386,1.384,1.384,0,0,0,1.176.522,2.468,2.468,0,0,0,.75-.12,2.136,2.136,0,0,0,.732-.42,3.1,3.1,0,0,0,.654-.816,5.215,5.215,0,0,0,.5-1.3ZM13.4-6.516a5.64,5.64,0,0,0-.228,1.482,2,2,0,0,0,.186.894.892.892,0,0,0,.486.438,1.979,1.979,0,0,0,.684.114,2.045,2.045,0,0,0,1.116-.336,3.144,3.144,0,0,0,.93-.948,5.112,5.112,0,0,0,.636-1.47,7.222,7.222,0,0,0,.234-1.9,7.407,7.407,0,0,0-.528-2.9,5.768,5.768,0,0,0-1.458-2.082,6.07,6.07,0,0,0-2.2-1.248,8.733,8.733,0,0,0-2.73-.414,7.455,7.455,0,0,0-3.012.612,7.582,7.582,0,0,0-2.448,1.692,8.012,8.012,0,0,0-1.65,2.556A8.386,8.386,0,0,0,2.82-6.816a9.265,9.265,0,0,0,.642,3.582A7.4,7.4,0,0,0,5.214-.648,7.3,7.3,0,0,0,7.824.924a9.617,9.617,0,0,0,3.216.528,11.857,11.857,0,0,0,3.222-.4A9.969,9.969,0,0,0,16.68.048a.526.526,0,0,1,.42-.09.413.413,0,0,1,.264.27l.312.792a10.91,10.91,0,0,1-2.934,1.356,12.862,12.862,0,0,1-3.7.492,11.108,11.108,0,0,1-3.876-.66,8.99,8.99,0,0,1-3.1-1.9A8.757,8.757,0,0,1,2-2.736a10.523,10.523,0,0,1-.75-4.08,9.55,9.55,0,0,1,.33-2.52,9.645,9.645,0,0,1,.93-2.262,9.637,9.637,0,0,1,1.44-1.92A9.067,9.067,0,0,1,5.82-15.006a9.291,9.291,0,0,1,2.226-.96,9,9,0,0,1,2.49-.342,9.716,9.716,0,0,1,2.16.24,8.912,8.912,0,0,1,2,.708A8.009,8.009,0,0,1,16.422-14.2a7.5,7.5,0,0,1,1.362,1.584,7.512,7.512,0,0,1,.894,1.992A8.532,8.532,0,0,1,19-8.244,7.529,7.529,0,0,1,18.63-5.85a6.115,6.115,0,0,1-1.008,1.9A4.716,4.716,0,0,1,16.1-2.688a4.021,4.021,0,0,1-1.884.456,2.424,2.424,0,0,1-1.506-.45,2.116,2.116,0,0,1-.762-1.374,4.31,4.31,0,0,1-1.5,1.38,3.8,3.8,0,0,1-1.764.42A2.941,2.941,0,0,1,7.446-2.5a2.377,2.377,0,0,1-.882-.684,2.983,2.983,0,0,1-.522-1.038,4.635,4.635,0,0,1-.174-1.3,5.82,5.82,0,0,1,.39-2.058A5.7,5.7,0,0,1,7.416-9.45a5.961,5.961,0,0,1,1.908-1.362,6.221,6.221,0,0,1,2.64-.528,7.079,7.079,0,0,1,1.416.126,5.615,5.615,0,0,1,1.152.366Z" transform="translate(-4490 5125.94)" fill="#ea1e1e"/>
                  </g>
              </svg>
          </a>

          <a className="navbar-brand disNoneDesk disBlockMob navbarLogoMob" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="93" height="40" viewBox="0 0 105 47">
            <g id="Group_10713" data-name="Group 10713" transform="translate(14 -5)">
                <text id="_simplify" data-name="@simplify" transform="translate(-14 31)" fill="#ea1e1e" font-size="24" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">@</tspan><tspan y="0" fill="#000">simplify</tspan></text>
                <text id="Market_Place" data-name="Market Place" transform="translate(-10 49)" font-size="13" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">MARKET PLACE</tspan></text>
            </g>
          </svg>

          </a>

          {/* <form className=" my-2 my-lg-0 disNoneDesk disBlockMob">
          <button type="button" className="navbar-Btn log-in-btn" data-toggle="modal" data-target="#login">Log In</button>
          <button type="button" className="navbar-Btn sign-up-btn" data-toggle="modal" data-target="#signUp">Sign Up</button>
          <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered multistepModal" role="document">
              <Modal login="true" signUp="false"/>
          </div>
          </div>
          <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered multistepModal" role="document">
              <Modal login="false" signUp="true"/>
          </div>
          </div>
          </form> */}




          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <!-- <a className="navbar-brand" href="#">@Simplify <span>MARKET PLACE</span></a> --> */}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
              <a className="nav-link" href="#">Find Talent</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Browse jobs</a>
              </li>
              <li className="nav-item">
              <a className="nav-link " href="#">How It Works</a>
              </li>
          </ul>
          {/* <!-- <form className="form-inline my-2 my-lg-0">
              <button className="navbar-Btn log-in-btn">Log In</button>
              <button className="navbar-Btn sign-up-btn">Sign Up</button>
          </form> --> */}
          </div>
          <form className=" my-2 my-lg-0 ">
          {(localStorage.getItem("token") !== null) ? <Link to="/"><p onClick={() => {localStorage.clear()}}>SignOut</p></Link>: <div>
          <button type="button" className="navbar-Btn log-in-btn" data-toggle="modal" data-target="#login">Log In</button>
          <button type="button" className="navbar-Btn sign-up-btn" data-toggle="modal" data-target="#signUp">Sign Up</button>
          <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered multistepModal" role="document">
              <Modal login="true" signUp="false"/>
          </div>
          </div>
          <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered multistepModal" role="document">
              <Modal login="false" signUp="true"/>
          </div>
          </div></div>}
          
          </form>
      </nav>
      </header>
  )
  }
    
}

export default Header;