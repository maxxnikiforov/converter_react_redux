import React, { useEffect } from 'react';
import './App.css';
import { getRate } from './Api';
import { useAppSelector, useAppDispatch } from './app/hooks';
import type { RootState } from './app/store';

function App() {
   
  useEffect(() => {
    const newCourse = async () => {
      const currentCourse = await getRate();
      console.log(currentCourse);
    }
    newCourse();
  }, []);

  const test = useAppSelector((state: RootState) => state.converter.leftCurrency);
  const test2 = useAppSelector((state: RootState) => state.converter.rightCurrency);
  console.log(test);

  return (
    <div className="app">
      Test template {test} {test2}
    </div>
  );
}

export default App;
