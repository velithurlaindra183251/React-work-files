import { createContext } from "react"
import Comp1 from './Comp1'
export const context = createContext()
function App() {
  let uid = "Mouritech"

  return (
    <div>
      <context.Provider value={uid}>
        <Comp1 />
      </context.Provider>
    </div>
  )
}
export default App
