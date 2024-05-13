// 莉莉备忘：
// 一下是 import 图片的方式，到时候会用到
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.css' // 这个东西之后不需要，而且我需要用 scss 而不是 css


import { BrowserRouter, Routes, Route, } from "react-router-dom";

// 莉莉备忘：以下是根页面，之后需要建立一个 page index 来统筹管理这些页面
import Home from './Pages/Home'
import About from './Pages/About'
import NoPage from './Pages/NoPage';


function App() {
  const [count, setCount] = useState(0) // 说实话我不知道这是什么，先留着再说了

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
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
