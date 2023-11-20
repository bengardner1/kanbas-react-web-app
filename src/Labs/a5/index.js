import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="https://bg-kanbas-node-server-app-d9dfae0193b7.herokuapp.com/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
          <h3>Simple API Examples</h3>
          <WorkingWithArrays/>
          <EncodingParametersInURLs/>
          <WorkingWithObjects/>
        </div>
       
      </div>
    );
  }
  export default Assignment5;