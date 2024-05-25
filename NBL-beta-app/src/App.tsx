import { useState, useEffect } from 'react'

import './AppStyle/0-app.scss'

import { BrowserRouter, Routes, Route, } from "react-router-dom";

// 这里导入根页面
import RootPages from './Pages/Root/RootPages';

// 导入机构
import InstPages from './Pages/Inst/InstPages';

// 导入作者
import Authors from './Pages/Authors/Authors';

function App() {
  useState(() => {
    // console.log()
    const greetings = "Hello, World"
    console.log(greetings)
    
  });

  useEffect(() => {
    // console.log()
  }, []);

  // const [count, setCount] = useState(0) // 说实话我不知道这是什么，先留着再说了

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* 设置全站首页 */}
            <Route index element={RootPages.RootPage_Home.content} />

            {/* 设置全站根页面 */}
            {Object.values(RootPages).map((item: any, i: any) => (
              <Route
                path={`/${item.info.key}`}
                element={item.content}
                key = {`${item}${i}`}
              ></Route>
            ))}

            {/* 导入机构 */}
            {Object.values(InstPages).map((item: any, i: any) => (
              <Route
                path={`/${item.info.key}`}
                element={item.content}
                key = {`${item}${i}`}
              ></Route>
            ))}

            {/* 导入作者 */}
            {Object.values(Authors).map((item: any, i: any) => (
              <Route
                path={`/${item.info.key}`}
                element={item.content}
                key = {`${item}${i}`}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </div>

      {/* 说实话我不知道这是什么，先留着再说了 */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
