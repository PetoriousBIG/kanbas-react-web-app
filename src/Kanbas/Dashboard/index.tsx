export default function Dashboard() {
    return (
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/weave.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                AL101
              </a>
              <p className="wd-dashboard-course-title">
                Underwater Basket Weaving
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/stark.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                GOT5100 
              </a>
              <p className="wd-dashboard-course-title">
                Advanced Game of Thrones Board Game Theory
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/colombia.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                COL345 Colombian Cuisine
              </a>
              <p className="wd-dashboard-course-title">
                Colombian Cuisine
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/oscar.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                DOG230
              </a>
              <p className="wd-dashboard-course-title">
                Dog Handling
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/runningshoe.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                RUN10000
              </a>
              <p className="wd-dashboard-course-title">
                10k Training
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/brain.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                BRN999
              </a>
              <p className="wd-dashboard-course-title">
                Brain Surgery
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>

        </div>
      </div>
  );}
  