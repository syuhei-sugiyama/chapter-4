export const ColoredMessage = (props) => {
    /*
    Propsを分割代入することで、いちいち「props.」と書かなくて済む
    */
    const { color, children } = props;
    // CSSオブジェクト
    /*
    JavaScriptのプロパティ名は-(ハイフン)が認められていない為
    イベント名等と同様にCSSのプロパティ名も全てキャメルケースとなる
    */
    const contentStyle = {
        color: color,
        fontSize: '40px'
    };

    /*
    JSX内でJavaScriptを記述するので下記のprops.messageのように{}で囲むこと。
    読み出し元では「<ColoredMessage color='green' />」
    のように記載してコンポーネントを呼び出してる
    引数として受け取った変数propsの中にはcolorというプロパティ名で
    それぞれ値が設定された状態になってる。
    propsを渡された側はオブジェクトのプロパティにアクセスするのと同じ方法で
    下記のように値を取得できる
    */
    /*
    childrenとして渡された値は他のPropsと同様に
    プロパティにアクセスするのと同じ書き方で値を設定できる
    */
    return <p style={contentStyle}>{children}</p>;
};