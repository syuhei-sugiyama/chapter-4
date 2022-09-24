import { ColoredMessage } from "./components/ColoredMessage";
// useStateを使用する為にReactからimport
import { useState } from "react";
// useEffectを使用する為にReactからimport
import { useEffect } from "react";
/*
JSX記法を用いる
「JavaScript XML」の略。HTMLと似た記述ができる「JavaScriptの拡張構文」
ReactでHTMLを書くための構文とも言える
JSXを使うことで下記のように、関数のreturn値としてHTMLのタグが記述でき
それをコンポーネントとして扱って画面を構成出来る
*/
// アロー関数で定義した関数を用意
// 他のファイルでも使えるようにexportを記載
export const App = () => {
    /*
    Stateの定義
    Reactで重要になる概念としてStateがある
    コンポーネントの状態を表す値のこと
    ex)エラーがあるか、ボタンを押せるか
    現在主流となっている関数コンポーネントではReact Hooksと総称される機能群の中の
    useState関数を用いてStateを扱っていく
    useState関数の返却値は、配列の形で1つ目にState変数、2つ目にそのStateを
    更新するための関数が設定されている
    下記の場合、numが状態を持った変数、setNumがそれを更新する関数となる
    暗黙のルールとして2つ目の更新関数名は、「set + 1つ目のState変数名」
    のようにする
    State変数に初期値を設定したい場合はuseState関数実行時に引数を指定する
    下記の場合はState変数つまりnumの初期値として0が設定される
    */
    const [num, setNum] = useState(0);

    /*
    React Hooksの機能群の1つであるuseEffect
    「ある値が変わった時に限り、ある処理を実行する」という機能
    下記の場合はuseState関数で取得したnumというStateの値が変わった時のみ
    アラートを表示する際の記載
    第一引数にはアロー関数で実行したい処理を記述し
    第二引数は必ず配列で指定する
    useEffect関数はコンポーネントが再レンダリングを何度も繰り返すという
    副作用を制御したい時に使用される
    */
    useEffect(() => {
        console.log(`numが変更されました:${num}`);
    }, [num]);

    /*
    ボタンを押した時に実行する関数を定義
    Reactの場合イベント名などをキャメルケース(単語のつなぎ部分を大文字にする)
    にする必要がある。
    */
    const onClickButton = () => {
        setNum((num) => num + 1);
    };
    /*
    returnする値は1つのタグで囲われている必要がある
    下記のようにh1タグやpタグなど複数のタグをreturnする時は1番外側に
    それらを囲むタグ(下記の場合はdivタグ)を用意してあげる必要がある
    複数のタグをreturnする時は()で囲む
    もしくはReactに用意されているFragmentというものを使用することもできる
    書き方は2種類
    reactからFragmentをimportして
    (「import {Fragment} from 'react'」をimport文に追加)
    divをFragmentに変更する
    もう一つは空タグ<></>で囲む
    */
    return (
        /*
        JSXで書いているHTMLの中では
        {}で囲むことでJavaScriptを記述出来る
        以下のようにbuttonタグのonClick属性に上記で書いた
        onClickButtonイベントを{}で囲んで指定することで
        イベントを割り当てることが出来る
        */
        /*
        CSSの適用方法
        下記のh1タグのようにstyle属性に対して直接指定する方法が1つ
        直接指定する際に気を付けること
        JavaScriptのオブジェクトとして指定する為、「style={{}}」の形で
        波カッコの中にさらに波カッコが必要なことと、
        color等のプロパティに対して設定する値は下記のように''もしくは""で
        囲む必要ある
        別の方法としてpタグのstyle属性で記述しているように
        事前に定義した変数を割り当てることもできる
        */
        /*
        ColoredMessageコンポーネントに対して
        colorをProps(コンポーネントに渡す引数のようなもの)として渡す
        特別なPropsといて「children」というものが存在してる
        使い方は下記のように、ColoredMessageコンポーネント名のタグで
        囲った「お元気ですか？」「元気です！」の部分がchildrenという名前の
        Propsとして設定される
        */
        /*
        childrenは単純な文字だけでなくタグで囲んだ要素を丸ごと渡すこともできる
        下記のように「<ColoredMessage color='red'>」で囲んだ中で
        divタグで囲んだ要素を記載してるが、これら丸ごとchildrenとして渡される
        */
        <>
            <h1 style={{ color: 'skyblue' }}>こんにちは！</h1>
            <ColoredMessage color='green'>お元気ですか？</ColoredMessage>
            <ColoredMessage color='pink'>元気です！</ColoredMessage>
            <ColoredMessage color='red'>
                <div>
                    <span>spanタグです</span>
                    <p>pタグです</p>
                </div>
            </ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </>
    );
};