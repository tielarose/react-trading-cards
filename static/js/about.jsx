function About(props) {
  return (
    <React.Fragment>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil numquam
        repudiandae officiis ipsam sunt, a, perferendis in incidunt velit,
        repellendus alias repellat dolorem eaque? Minima maxime quod commodi
        accusamus iure!
      </p>
      <p>
        <a href="https://github.com/tielarose">Visit my github</a>
      </p>
    </React.Fragment>
  );
}

ReactDOM.render(<About />, document.querySelector("#author-div"));
