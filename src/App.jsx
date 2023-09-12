import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import useLists from './hooks/useLists';

import Home from './pages/Home';

const App = () => {
  const { todos, dispatch } = useLists();
  console.log(todos);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/home'
            element={<Home todos={todos} dispatch={dispatch} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
