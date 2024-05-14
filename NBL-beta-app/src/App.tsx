// 莉莉备忘：
// 一下是 import 图片的方式，到时候会用到
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.scss'


import { BrowserRouter, Routes, Route, } from "react-router-dom";

import IndexOfRootPages from './Pages/Root/_IndexOfRootPages'; // 导入所有一级页面
import Nav from './Components/Nav';

function App() {
  const [count, setCount] = useState(0) // 说实话我不知道这是什么，先留着再说了

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={IndexOfRootPages.Home.content} />
            
            {/* 由于不同层级的页面的基本结构有所不同，因此分开枚举映射；也因此，类似 Nav、Header 和 Footer 一类的组建也分开添加至 element 中 */}
            {Object.values(IndexOfRootPages).map((item: any, index: any) => (
              <Route
                path={`/${item.key}`}
                element={<>
                  <Nav />
                  {item.content}
                </>} key={`${item}${index}`}></Route>
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
