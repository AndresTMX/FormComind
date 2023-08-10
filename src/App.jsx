import {UI} from '../src/UI'
import { Form } from './Page/Form'
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UI>
              <Form />
            </UI>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App
