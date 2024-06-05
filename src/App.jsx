import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { saveState } from './utils/localStorage';
import { Container, Typography } from '@mui/material';
import './App.css';

function App() {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <Container className="App" maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom>
          To-Do Application
        </Typography>
        <TaskForm />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
