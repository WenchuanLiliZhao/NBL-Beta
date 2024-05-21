# NBL-Beta

在进行预览之前，cd 到文件夹 `NBL-beta-app`，并在终端运行 `npm run dev` 以进行实时预览，或者，通过 `npm run preview` 进行异步预览。后者似乎有某些功能，然而我并不知道。

对了，在你准备部署任何你已经完成的东西之前，千万记得运行

```
npm run build
```

以检查某些能在 dev 中运行的东西在部署之后无法运行。

## 本地预览

我在 `package.json` 中加入了一行

```json
"start": "HOST=0.0.0.0 react-scripts start",
```

用于本地预览。

```Typescript
{Object.values(Index_Pages).map((item: any, index: any) => (
  <Route
    path={`/${item().key}`}
    element={item().content} key={`${item()}${index}`}></Route>
))}
```