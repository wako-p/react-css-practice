
# React Router

## Memory Router

https://reactrouter.com/web/api/MemoryRouter

自分の「URL」の履歴をメモリに保持する<Router>（アドレスバーへの読み書きはしない）。テストやReact Nativeのような非ブラウザ環境で有用。

```html
<MemoryRouter
  initialEntries={optionalArray}
  initialIndex={optionalNumber}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</MemoryRouter>
```



### initialEntries: 配列
履歴スタック内の位置情報の配列。これらは{ pathname, search, hash, state }を持つ本格的なロケーションオブジェクトであったり、単純な文字列URLであったりします。

```html
<MemoryRouter
  initialEntries={["/one", "/two", { pathname: "/three" }]}
  initialIndex={1}
>
  <App />
</MemoryRouter>
```



### initialIndex: 数値
initialEntriesの配列内の初期位置のインデックス。



### getUserConfirmation: 関数

ナビゲーションを確認するために使用する関数。<Prompt>で直接<MemoryRouter>を使用する場合は、このオプションを使用しなければなりません。



### keyLength: 数値

location.key の長さ。デフォルトは6です。
```html
<MemoryRouter keyLength={12} />
```
