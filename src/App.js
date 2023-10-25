import './App.css';
import PageContainer from './components/PageContainer';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <PageContainer/>
    </Provider>
  );
}

export default App;
