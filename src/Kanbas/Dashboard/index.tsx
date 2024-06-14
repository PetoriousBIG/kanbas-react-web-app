export default function Dashboard() {
    return (
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/reactjs.jpg" alt="react" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    CS1234 React JS
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/weave.jpg" alt="weave" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    AL101
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    Underwater Basket Weaving
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/stark.jpg" alt="stark" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    GOT5100
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced GoT Game Theory
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/colombia.jpg" alt="colombia" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    COL345
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                  Colombian Cuisine
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/oscar.jpg" alt="oscar" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    DOG230
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    Dog Handling
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/runningshoe.jpg" alt="shoe" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    RUN10000
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    10k Training
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card">
                <img src="/images/brain.jpg" alt="brain" style={{width: "270px", height: "250px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    BRN999
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    Brain Surgery
                  </p>
                  <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );}
  