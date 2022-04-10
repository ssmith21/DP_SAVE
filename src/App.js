import ResourceList from './components/ResourceList'
import ResourceContextProvider from './contexts/resourceContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <ResourceContextProvider>
            <ResourceList />
          </ResourceContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

// id
// name
// location
// maxCapacity
// maxTime
// status