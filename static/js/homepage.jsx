"use strict";

function Homepage() {
  return (
    <div class="centered">
      <p> This is a great site for viewing trading cards.</p>
      <a href="/cards"> Click here to see the trading cards! </a>
      <img src="/static/img/balloonicorn.jpg" id="main-image" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector("#app"));
