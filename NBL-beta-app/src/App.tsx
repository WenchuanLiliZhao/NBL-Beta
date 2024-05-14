// 莉莉备忘：
// 一下是 import 图片的方式，到时候会用到
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.scss'


import { BrowserRouter, Routes, Route, } from "react-router-dom";

import IndexOfPages from './Pages/0_IndexOfPages'; // 导入所有页面

function App() {
  const [count, setCount] = useState(0) // 说实话我不知道这是什么，先留着再说了

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={IndexOfPages.Home.content} />
            
            {Object.values(IndexOfPages).map((item: any, index: any) => (
              <Route
                path={`/${item.key}`}
                element={item.content} key={`${item}${index}`}></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </div>

      {/* 说实话我不知道这是什么，先留着再说了 */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
