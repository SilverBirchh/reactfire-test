import './styles/tailwind.output.css';
import 'firebase/auth';

import React, { Suspense } from 'react';
import { AuthCheck } from 'reactfire';

import Loader from './components/Loader';
import Login from './screens/login/Login';
import Soar from './screens/soar/Soar';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthCheck fallback={<Login />}>
        <Soar />
      </AuthCheck>
    </Suspense>
  );
}

export default App;
