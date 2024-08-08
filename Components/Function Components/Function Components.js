import ReactDOM from "react-dom/client"
//Components
function Comp() {
  return <h2>Hello Function Components</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <h1>Function Components</h1>
    <Comp />
    <Comp />
    <Comp />
    <Comp />
  </>
)
