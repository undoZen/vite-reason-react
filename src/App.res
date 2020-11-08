// %%raw("import './App.css'")
@bs.module("./logo.svg") external logo: string = "default"
@bs.module("react") external version: string = "version"
@bs.module external css: unit = "./App.css"
@bs.module("./app.module.css") external textCenter: string = "textcenter"

open Belt

@react.component
let make = () => {
  let (count, setCount) = React.useState(() => 0)
  <div className={textCenter}>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> {"Hello Vite + React "->React.string} {version->React.string} </p>
      <p>
        <button onClick={ev => setCount(count => count + 1)}>
          {"the count is: "->React.string} {count->Int.toString->React.string}
        </button>
      </p>
      <p>
        {"Edit "->React.string}
        <code> {"App.jsx"->React.string} </code>
        {" and save to test HMR updates."->React.string}
      </p>
      <p>
        {"Learn "->React.string}
        <a
          className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {"React"->React.string}
        </a>
        {" and "->React.string}
        <a
          className="App-link"
          href="https://rescript-lang.org/"
          target="_blank"
          rel="noopener noreferrer">
          {"ReScript"->React.string}
        </a>
        {" and "->React.string}
        <a
          className="App-link"
          href="https://reasonml.github.io/reason-react/"
          target="_blank"
          rel="noopener noreferrer">
          {"ReasonReact"->React.string}
        </a>
      </p>
    </header>
  </div>
}
