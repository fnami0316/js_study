// 厳格な実行モード(古い構文・機能を禁止する)
// 文末は";"で区切ること。区切らなくてもいけるが、意図しない挙動が発生することがあるため、常に書くようにすること
"use strict";

// [変数] キーワード const or letで宣言する。変数を使用する場面では、再代入が不要な場面ではconstを使うようにした方がいいとのこと.varというキーワードもあるが、これは古いため使わない
// [const] 再代入できない変数(※)であることを宣言するキーワード.constの変数は大文字スネークケースで命名するのが慣習 
//         ※定数としていないのは、オブジェクトの宣言でも使えるため
const SAMPLE_CONST = 1;
// [let]再代入できる変数.letの変数はキャメルケースで命名するのが慣習.
let sampleVar = 1;
let undefinedVar; // 初期値を与えない場合、"undefined"というデフォルト値で初期化される
sampleVar = sampleVar + 1; 

// [プリントデバッグ] console.log(<対象>)を使う.
console.log("samplevar: " + sampleVar);
console.log("undefinedVar: " + undefinedVar);


// [プリミティブ型] boolean, number, bigInt, string, undefined, null, symbol
// [boolean]
const SAMPLE_BOOL = true;
console.log("SAMPLE_BOOL: " + SAMPLE_BOOL);
console.log("typeof SAMPLE_BOOL: " + typeof SAMPLE_BOOL);
// [number]
const SAMPLE_NUMBER = 100_000; // rubyのようにアンダースコアを使って3桁区切りを表現できる
console.log("SAMPLE_NUMBER: " + SAMPLE_NUMBER);
console.log("typeof SAMPLE_NUMBER: " + typeof SAMPLE_NUMBER);
// [bigInt]
const SAMPLE_BIGINT = 9007199254740992n;
console.log("SAMPLE_BIGINT: " + SAMPLE_BIGINT);
console.log("typeof SAMPLE_BIGINT: " + typeof SAMPLE_BIGINT);
// [string]
const SAMPLE_STRING = "sample_string";
console.log("SAMPLE_STRING: " + SAMPLE_STRING);
console.log("typeof SAMPLE_STRING: " + typeof SAMPLE_STRING);
// [undefined]
console.log("undefinedVar: " + undefinedVar);
console.log("typeof undefinedVar: " + typeof undefinedVar);
// [null] undefinedは宣言されているけど初期化されていない変数、nullは明確に値がないことを表現する形で使う.
const SAMPLE_NULL = null;
console.log("SAMPLE_NULL: " + SAMPLE_NULL); 
console.log("typeof SAMPLE_NULL: " + typeof SAMPLE_NULL); // 本来はnull型である表示がなされるべきだがobjectとして表示される。これはJSの歴史的経緯があるバグで、修正があきらめられたものとのこと。
// [symbol] 一意で不変な値のデータ型←？？？ 用途不明.
const SAMPLE_SYMBOL = Symbol("シンボル");
console.log(SAMPLE_SYMBOL); // symbol型はStringへ変換不可能で、文字列と結合しようとするとエラーになる
console.log("typeof SAMPLE_SYMBOL: " + typeof SAMPLE_SYMBOL);

// [オブジェクト型] object, 配列, 関数, クラス, 正規表現, Date等 プリミティブ型以外のもの。 
// [object] 
// 要するにクラスっぽい連想配列？
// キーにはstring or symbol型を取ることができる。値は型を揃える必要なし。
// メソッドを生やすことができる
const SAMPLE_OBJ = {
    key1: 1, // キーを文字列型にする場合、""は省略可能
    key2: "string",
    sampleMethod(arg1) {
        return arg1;
    }
};
console.log("SAMPLE_OBJ: " + JSON.stringify(SAMPLE_OBJ)); // object型は、JSON.stringifyでJSON化することで文字列変換して出力可能
console.log(SAMPLE_OBJ); // object型は文字列変換しなければそのままconsole.logでいい感じに出力できる
console.log("typeof SAMPLE_OBJ: " + typeof SAMPLE_OBJ);
console.log("SAMPLE_OBJ[key1]: " + SAMPLE_OBJ["key1"]); // ブラケット記法でアクセス: SAMPLE_OBJ[key1]ではエラーになる。変数をキーにあてはめてのアクセスも可能
console.log("SAMPLE_OBJ.key1: " + SAMPLE_OBJ.key1); // ドット記法でアクセス: 変数をキーにあてはめてのアクセスは不可能。基本はドット記法でアクセス、できない場合はブラケット記法を使うとよいとのこと
// キーバリューの追加(ドット記法でもブラケット記法でも可能)
SAMPLE_OBJ.key3 = 1.234;
console.log("SAMPLE_OBJ(add key3): " + JSON.stringify(SAMPLE_OBJ));
// キー群を配列で取得: Object.keys(メソッドもはいってきちゃうことに注意!)
console.log("SAMPLE_OBJ keys: " + Object.keys(SAMPLE_OBJ));
// 値群を配列で取得: Object.values(メソッドもはいってきちゃうことに注意!)
console.log("SAMPLE_OBJ values: " + Object.values(SAMPLE_OBJ));
// nilガード: Optional chaining演算子(&.)。rubyのぼっち演算子(&.)と同じようなもので、対象がnull or undefinedだった場合にundefinedを返すもの。
console.log("SAMPLE_OBJ?.key3?.key4?.key5: " + SAMPLE_OBJ?.key3?.key4?.key5);
// メソッドの利用
console.log("SAMPLE_OBJ.sampleMethod(2): " + SAMPLE_OBJ.sampleMethod(2)); // => 2
// [配列]
const SAMPLE_ARRAY = [1, "2", 3.4]; // 要素の型はバラバラでOK。
console.log("SAMPLE_ARRAY: " + SAMPLE_ARRAY);
console.log("typeof SAMPLE_ARRAY: " + typeof SAMPLE_ARRAY);
// 配列はインデックス指定でアクセス
console.log("SAMPLE_ARRAY[2]: " + SAMPLE_ARRAY[2]);
// JSでは存在しないインデックスにアクセスしてもOutOfMemory的なエラーにならず、undefinedで返ってくる
console.log("SAMPLE_ARRAY[100]: " + SAMPLE_ARRAY[100]); // => undefined
// 便利プロパティ: length (配列のサイズを取得)
console.log("SAMPLE_ARRAY.length: " + SAMPLE_ARRAY.length); // => 3のはず
// 末尾の要素を取り出したいときは.at(-1)を使うのが最速
console.log("SAMPLE_ARRAY.at(-1): " + SAMPLE_ARRAY.at(-1));
// 便利メソッド: forEach
SAMPLE_ARRAY.forEach(v => {
    // vは要素値がインデックス0から順番に入ってくる。
    console.log("v: " + v); 
});
// 引数を2つ指定すればインデックスも取れる(引数の並びが直感と反することに注意！)
SAMPLE_ARRAY.forEach((v, i) => {
    console.log("i: " + i + ", v: " + v); 
});
// 便利メソッド: some (渡したコールバック関数の結果が1つでもtrueならtrue)
let someRetVal = SAMPLE_ARRAY.some(v => v === 3.4);
console.log("SAMPLE_ARRAY.some: " + someRetVal);
// 便利メソッド: findIndex, findLastIndex 条件に合致する要素のインデックスを返す
// 便利メソッド: find 条件に合致する要素を返す
// 他にもRailsで使えた便利メソッドたくさんありそう。都度調べる。
// [関数] function <関数名>(<引数>) { ... } で宣言。型定義がないので、返り値の定義もない
function sampleFunction (arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        return; // 返り値がない場合、undefinedが返る
    }
    return arg1 + arg2;
}
console.log("sampleFunction(1.1, 2): " + sampleFunction(1.1, 2)); // => 3.1
console.log("sampleFunction('1.1', 2): " + sampleFunction("1.1", 2)); // => undefined
console.log("sampleFunction(1): " + sampleFunction(1)); // => undefined (arg2がundefined扱いになっての結果)
console.log("sampleFunction(1, 2, 5): " + sampleFunction(1)); // => 3 (多い分の引数は無視される)
// デフォルト引数
function sampleFunction2 (arg1 = 4, arg2 = 5) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        return; // 返り値がない場合、undefinedが返る
    }
    return arg1 + arg2;
}
console.log("sampleFunction2(1.1, 2): " + sampleFunction2(1.1, 2)); // => 3.1
console.log("sampleFunction2('1.1', 2): " + sampleFunction2("1.1", 2)); // => undefined
console.log("sampleFunction2(1): " + sampleFunction2(1)); // => 6 (arg2はデフォルト値の5が使われる)
// 関数は変数に代入可能。「関数が値として扱える」ことを第一級関数と呼ぶらしい。
const SAMPLE_FUNCTION = sampleFunction;
console.log("SAMPLE_FUNCTION(1.1, 2): " + SAMPLE_FUNCTION(1.1, 2)); // => 3.1
// [無名関数]
// その場面でしか使わないような関数は無名関数として定義して代入可能
const SAMPLE_NO_NAME_FUNCTION = function (arg1, arg2) {
    return arg1 + arg2;
}
console.log("SAMPLE_NO_NAME_FUNCTION: " + SAMPLE_NO_NAME_FUNCTION(2,3));
// Arrow Functionでの無名関数定義
const SAMPLE_ALLOW_FUNCTION = (arg1, arg2) => {
    return arg1 * arg2;
}
console.log("SAMPLE_ALLOW_FUNCTION: " + SAMPLE_ALLOW_FUNCTION(2,3)); // => 6
// AllowFunctionを使うと省略できる場面が増える
// - 引数1個の場合に限り、引数を囲むカッコ()をなくせる
// - 内部処理が1行の場合、関数自体のカッコ{}と、returnをなくせる
const SAMPLE_ALLOW_FUNCTION2 = arg1 => arg1 ** 2
console.log("SAMPLE_ALLOW_FUNCTION2: " + SAMPLE_ALLOW_FUNCTION2(3)); // => 9
// [クラス]
// 現時点で推奨されていることをまとめると以下のような定義になるかと
class SampleClass { // パスカルケースで定義
    // 内部のみアクセスできる定数(プライベート静的クラスフィールド。#を先頭につけると外部から参照不可になる)
    static #PRIVATE_CONST_VALUE = 100;
    // 外部からもアクセスできる定数(パブリック静的クラスフィールド)
    static PUBLIC_CONST_VALUE = 200;

    // プライベートなプロパティの定義(JSではメンバのことをプロパティと呼ぶ。#を先頭につけたプロパティは外部から直接アクセスできない「プライベートクラスフィールド」となる)
    #property1;
    #property2;
    
    // コンストラクタ
    constructor(property1, property2) {
        this.#property1 = property1;
        this.#property2 = property2;
        
        // エラーハンドリングはJSではtry...catchを使う
        try {
           this.#validate();
        } catch (e) {
            // 本元のスタックトレースを保持できるようにcauseオプションを使う
            throw new Error("failed to validate", { cause: e });
        }
    }
    
    // ゲッター
    get property1() {
        return this.#property1;
    }
    get property2() {
        return this.#property2;
    }
    
    // その他パブリックメソッド (#つけない)
    update(property1, property2) {
        return new SampleClass(property1, property2)
    }
    
    // その他プライベートメソッド (#つける)
    #validate() {
        // JSではthrow new Error("<エラーメッセージ>")で例外を発生させる
        if (this.#property1 == null) {
            throw new Error("property1 is null")
        }
        if (this.#property2 == null) {
            throw new Error("property2 is null")
        }
    }
}
// インスタンス生成
const sampleClass = new SampleClass(1, 2);
// エラー発生させる
// const errorClass = new SampleClass(undefined, 2);
// ゲッターでプロパティを取得 ()は付けちゃダメ
console.log("sampleClass.property1: " + sampleClass.property1);
console.log("sampleClass.property2: " + sampleClass.property2);
// パブリックメソッドを実行
const updatedSampleClass = sampleClass.update(2, 3);
console.log("updatedSampleClass.property1: " + updatedSampleClass.property1);
console.log("updatedSampleClass.property2: " + updatedSampleClass.property2);
// パブリックな静的な定数を取得
console.log("SampleClass.PUBLIC_CONST_VALUE: " + SampleClass.PUBLIC_CONST_VALUE);
// [正規表現] /<正規表現パターン>/ という形で宣言
const SAMPlE_REG_EXP = /1.*/
// パターンの一致チェック
console.log(SAMPlE_REG_EXP.test("22")); // => false
console.log(SAMPlE_REG_EXP.test("21")); // => true
// [Date]

// [Map] 連想配列
const sampleMap = new Map([["key1", 1], ["key2", 2]]);
// 要素を列挙するメソッドとして、forEach, keys, values, entries が使える
// forEach: key, falueの並びが直感と反することに注意！
sampleMap.forEach((v,k) => {
    console.log("k: " + k + ", v: " + v);
});
// keys: objectと異なりメソッドが入ってこないので安心。だが、Iteretorオブジェクトのため、配列にしたいならば変換が必要
console.log(sampleMap.keys());
let sampleMapKeys = [];
for (const key of sampleMap.keys()) {
    sampleMapKeys.push(key);
}
console.log("sampleMapKeys: " + sampleMapKeys);
// [Set] 重複を許さない、並びを保証しない配列。要素の型はバラバラでOK
let sampleSet = new Set([1, "2", 3.4]);
console.log("sampleSet:");
console.log(sampleSet);
let dupSampleSet = new Set([1, "2", "2"]);
console.log("dupSampleSet:");
console.log(dupSampleSet); // 2 が1つしかない
// add: 値の追加
sampleSet.add(5);
console.log(sampleSet);
// has: 値の存在確認
console.log(sampleSet.has("a"));
console.log(sampleSet.has(1));
// forEach
sampleSet.forEach(v => {
    console.log("v: " + v);
})

// [演算子]
// 一般的なプログラミングに存在する以下は普通に可能
// +, -, *, / : 四則演算
// %: 割り算の余り
// ++, --: インクリメント, デクリメント
// >, <, >=, <=: 大小比較(数値以外も可能なのか？)
// !: 否定
// <条件> ? <true時の実行式> : <false時の実行式>: 三項演算子
// 少し特殊なものを以下に列挙。
// [べき乗] **を使う ^じゃない。
console.log("2**2 :" + 2**2);
// [比較演算子] 
// 等価・不等価演算子(==, !=)は、型が異なる場合に暗黙的に型変換が入って比較。厳密等価・不等価演算子(===, !==)は型の一致もチェック。
// 等価・不等価演算子はnull or undefinedであることをチェックif (x == null)する場面で使い、それ以外はすべて厳密等価・不等価演算子で比較するのが無難。
console.log("SAMPLE_OBJ.key1 is null or undefined?: " + (SAMPLE_OBJ.key1 == null)); // =>false
console.log("SAMPLE_OBJ.key5 is null or undefined?: " + (SAMPLE_OBJ.key5 == null)); // =>true

// [条件分岐]
// [if, else if, else]: else if は elseifとくっつかないのがJS。
const SAMPLE_IF_FUNCTION = arg1 => {
    if (arg1 === 1) {
        return "if end"; 
    } else if(arg1 === 2) {
        return "else if end";
    } else {
        return "else end"
    }
}
console.log("SAMPLE_IF_FUNCTION(1): " + SAMPLE_IF_FUNCTION(1)); // => if end
console.log("SAMPLE_IF_FUNCTION(2): " + SAMPLE_IF_FUNCTION(2)); // => else if end
console.log("SAMPLE_IF_FUNCTION(): " + SAMPLE_IF_FUNCTION()); // => else end
// [switch 〜 case] 
// JSのswitch 〜 case はswitchの条件文部分()で囲む必要あり。
// インデントはcaseがswitchの一階層下になる。
// caseで指定するラベルは、厳密等価演算子===で評価される
// goと違ってbreak書く必要あり。そもそもbreak書かなくて済むように関数と組み合わせてreturnで対応するパターンが多いらしい。
const SAMPLE_SWITCH_CASE_FUNCTION = arg1 => {
    switch (arg1) {
        case 1:
            return "case1";
        case 2: 
            return "case2";
        default:
            return "default";
    }
}
console.log("SAMPLE_SWITCH_CASE_FUNCTION(1): " + SAMPLE_SWITCH_CASE_FUNCTION(1)); // => case1
console.log("SAMPLE_SWITCH_CASE_FUNCTION(2): " + SAMPLE_SWITCH_CASE_FUNCTION(2)); // => case2
console.log("SAMPLE_SWITCH_CASE_FUNCTION(3): " + SAMPLE_SWITCH_CASE_FUNCTION(3)); // => default

// [ループ処理] 型に備わっている便利メソッドでループ処理を実装することを考え、難しいならfor...of => for => while の順に採用を検討するのがよさげ(他の言語と同じ感覚)
// [while] 無限ループを引き起こすおそれがあるため、他の書き方でできるならそちらでやるべきとのこと
let sampleWhileVar = 0;
while (sampleWhileVar < 3) {
    console.log("sampleWhileVar: " + sampleWhileVar); // 0〜2まで出力されるはず
    sampleWhileVar++;
}
// [do-while] こちらもwhileと同様、他の書き方でできるならそちらで。
let sampleDoWhileVar = 0;
do {
    console.log("sampleDoWhileVar: " + sampleDoWhileVar); // 0〜2まで出力されるはず
    sampleDoWhileVar++;
} while (sampleDoWhileVar < 3); 
// [for]
for (let i = 0; i < 3; i++) {
    console.log("i: " + i); // 0〜2まで出力されるはず
}
// [forEach] 配列に備わっているメソッド。型 - 配列の項を参照
// [for...in] 意図しない挙動になる罠が潜むため使用を避けるべき。
// [for...of] 配列やstringなど、iterableオブジェクト(反復処理時の動作が定義されたオブジェクトの総称)で使える。
console.log("for...of");
for (const value of SAMPLE_ARRAY) {
    console.log("  value:" + value);
}

// [JSON] JSON.parse()でJSON文字列をobject型に変換、 JSON.stringify()でobjectをJSON文字列に変換 
console.log("[JSON]");
const sampleJson = `
    {
        "key1": "value1",
        "key2": [1, 2]
    }
`;
// JSON.parse(): 本来の使用時には例外が発生しうるので、try...catchつかうこと！
const sampleJsonObj = JSON.parse(sampleJson);
console.log(sampleJsonObj);
// JSON.stringify(<オブジェクト>, <replace>, <space>): 本来の使用時には例外が発生しうるので、try...catchつかうこと！
// replace: オブジェクトに対する整形処理。
// space: 数値で指定すると、その数の半角スペースでインデント + 改行してみやすくしてくれる。"\t"で指定するとインデントをタブで見やすくしてくれる
console.log(JSON.stringify(sampleJsonObj));
console.log(JSON.stringify(sampleJsonObj, null, 2));
console.log(JSON.stringify(sampleJsonObj, null, "\t"));
// [Date]日時を扱う
// 現在の日時
const nowDate = Date.now(); // 現在のLinux時刻を取得できる
console.log("nowDate: " + nowDate);

const sampleDate = new Date(); // 自身でインスタンス化したDataオブジェクトは、コンストラクタに何も与えない場合現在日時になる
console.log("sampleDate.getTime(): " + sampleDate.getTime()); // 自身でインスタンス化したDateオブジェクトはgetTime()でLinux時刻を取得できる
console.log("sampleDate.toISOString(): " + sampleDate.toISOString()); // ISO8601形式(yyyy0mm-ddThh:mm:ss.sss+<補正値>Z)で日時を取得できる

// Linux時刻を与えてインスタンス化する場合
const sampleDateByLinuxTime = new Date(1728041610820); 
console.log("sampleDateByLinuxTime.toISOString(): " + sampleDateByLinuxTime.toISOString()); // ISO8601形式(yyyy0mm-ddThh:mm:ss.sss+<補正値>Z)で日時を取得できる
// ISO8601形式の文字列を与えてインスタンス化する場合
const sampleDateByISO8601 = new Date("2006-01-02T15:05:05.999Z"); 
console.log("sampleDateByISO8601.toISOString(): " + sampleDateByISO8601.toISOString()); // ISO8601形式(yyyy0mm-ddThh:mm:ss.sss+<補正値>Z)で日時を取得できる
// 年月日、時分秒ミリ秒を与えてインスタンス化する場合(タイムゾーンが指定できないため使うべきじゃない！)
// 月は、0が1月になることに注意
const sampleDateByIndivisualValue = new Date(1990, 7, 7, 17, 34, 56, 13);
console.log("sampleDateByIndivisualValue.toISOString(): " + sampleDateByIndivisualValue.toISOString()); // ISO8601形式(yyyy0mm-ddThh:mm:ss.sss+<補正値>Z)で日時を取得できる
// Date.UTCを併用して年月日、時分秒ミリ秒を与えてインスタンス化する場合
const sampleDateByIndivisualValueWithUTC = new Date(Date.UTC(1990, 7, 7, 17, 34, 56, 13));
console.log("sampleDateByIndivisualValueWithUTC.toISOString(): " + sampleDateByIndivisualValueWithUTC.toISOString()); // ISO8601形式(yyyy0mm-ddThh:mm:ss.sss+<補正値>Z)で日時を取得できる
// ..とかいろいろあるけど、結局Dateだけでは実用上機能が不十分で、サードパーティライブラリを使うことが一般的らしい

// [型の確認] 
// typeof演算子: 型を文字列で返す。プリミティブ型ならほぼはっきりわかる。オブジェクト型はobjectとしかわからない。さらに、nullもobjectとなるバグあり。
console.log("typeof sampleVar: " + typeof sampleVar);
// isArrayメソッド: 配列か
console.log("isArray(SAMPLE_ARRAY): " + Array.isArray(SAMPLE_ARRAY));
console.log("isArray(SAMPLE_OBJ): " + Array.isArray(SAMPLE_OBJ));

// [Math]数学的な定数と関数を提供するオブジェクト(以降、必要そうなものだけ・・・)
// Math.random: 乱数生成(0　<= Math.romdom() < 1)
const rand = Math.random();
console.log("rand: " + rand); // 0以上1未満の値
// 現実的には、範囲(最大値 最小値)を与えて等確率に抽選されるような形で使う
function random(min, max) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min;
}
console.log("random(5, 10): " + random(5, 10));
