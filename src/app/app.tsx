import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/app-router';

export const App = (): JSX.Element =>
  <div className='App'>
    <BrowserRouter>
      <header className='App-header'>
        За работу, пора спасать спринт!!
        <img src='https://reddirect.ru/wp-content/uploads/2020/01/351760-scaled.jpg' alt='error'/>
        <AppRouter />
      </header>
    </BrowserRouter>
  </div>;
