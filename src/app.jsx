import { exampleJpg } from 'src/assets';
import ExampleCommonComponent from 'src/components/example-common-component';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={exampleJpg} className="App-logo" alt="logo" />
      <ExampleCommonComponent />
    </header>
  </div>
);

export default App;
