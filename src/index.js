// react-domライブラリからReactDOMという名前でモジュールをimport
import ReactDOM from 'react-dom';
// 関数コンポーネントとしてexportしたApp.jsをimportする
/*
import直後の{}内には、importするApp.jsから読み込みたい
関数コンポーネント名を記載
(App.jsには「App」という名前で用意してるのでAppと記載)
*/
import { App } from './App';
/*
ReactDOMにはrenderという関数が用意されてる
第一引数に「render対象」、第二引数に「render箇所」を設定
第一引数が「<App />」となってることについて
Reactでは関数名をHTMLのようにタグで囲むことによって
コンポーネントとして扱うことが出来る
第二引数で指定しているrootというidが何を指すのかについて
これはプロジェクトフォルダ直下のpublic/index.htmlの中にあるdivタグを指してる
実際に見てみると「<div id="root"></div>」という形で書かれてる
SPAの場合、HTMLファイルは1つのみなので
アプリケーションのルートを指定することで
(bodyタグ内の最初の要素として記載されてる上記の<div id="root"></div>)
「HTMLの指定した箇所に、指定したコンポーネントをレンダリングする」
ということを表現している
*/
ReactDOM.render(<App />, document.getElementById('root'));