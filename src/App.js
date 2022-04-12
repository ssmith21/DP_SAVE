import ResourceList from './components/ResourceList'
import ResourceContextProvider from './contexts/resourceContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function App() {
  return (<>
    <Router>
      
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">HomePage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            View Resources (Admin)
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        
        <Route
          path="/"
          element={
            <div className="container-xl">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <ResourceContextProvider>
                    <ResourceList />
                  </ResourceContextProvider>
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/reservations"
          element={
            <div className="container-xl">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <ResourceContextProvider>
                    <ResourceList />
                  </ResourceContextProvider>
                </div>
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  </>);
}

export default App;

