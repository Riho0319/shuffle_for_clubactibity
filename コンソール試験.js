const a=1;
const b=2;
const result=a+b;

console.log(!result===3);
console.log(!result==="4");//え、なんで？どっちかはtrueじゃないの？

const third=["あーちゃんさん", "KKさん", "まいやんさん", "ろんけんさん", "えまさん", "わかにゃんさん"];
const second=["せんちゃん", "ひなもん", "れーちゃん", "みぷりん", "たかっしー", "あむちゃん"];
const first=["ねねち", "こっち", "まさぴよ", "あいぽて", "このちゃん", "めりちゃん"];
const other=[];
const place=['局室', '1スタ', '2スタ'];


//配列シャッフル
function shuffle(source){
    const array=source.concat();

    const arrayLength=array.length;
    for(let i=(arrayLength-1); i>=0; i--){
        const randnum1=Math.floor(Math.random() * (i+1));
        [array[i], array[randnum1]]=[array[randnum1], array[i]];
    }
    
    return array;
}

//上でシャッフルした配列をインデックス順にhtmlに出力(二人フリー)
function display(source1, source2){
    const freediv=document.getElementById('freediv');
    freediv.innerHTML="<div></div>";
    const arrayLength1=source1.length;
    const arrayLength2=source2.length;
        for(let i=0; (i<arrayLength1) && (i<arrayLength2); i++){
            const n=i+1;
            freediv.insertAdjacentHTML("beforeend", "<p>" + n + "、" + source1[i] + "、" + source2[i] + "</p>");
        }
}

//上でシャッフルした配列をインデックス順にhtmlに出力(一人)
function order(source){
    const ordiv=document.getElementById('ordiv');
    ordiv.innerHTML="<div></div>";
    const arrayLength=source.length;
        for(let i=0; i<arrayLength; i++){
            const n=i+1;
            ordiv.insertAdjacentHTML("beforeend", "<p>" + n + "、" + source[i] + "</p>");
        }
}


//配列の要素を任意の数のチーム（今回は三つ）に分ける
function devide(source){
    const pldiv=document.getElementById('pldiv');
    pldiv.innerHTML="<div></div>";
    const arrayLength=source.length;
    const teams=3;
    for(let j=1; j<=teams; j++){
        pldiv.insertAdjacentHTML("beforeend", "<p>" + j + "、" + place[j-1] + "</p>");
        for(let i=Math.floor(arrayLength/teams)*(j-1); i < Math.floor(arrayLength/teams)*j; i++){
            pldiv.insertAdjacentHTML("beforeend", "<p>" + source[i]+ "</p>");
        }
    }
 }

 //読み込み終了後に関数を起動させる
document.addEventListener('DOMContentLoaded', comment);

//イベントリスナー集
function teams(){    
    document.getElementById('freeteam').addEventListener('click', function(){
        display(shuffle(first), shuffle(second));
    });  
}

function proceed(){
    document.getElementById('order').addEventListener('click', function(){
        const addarray=first.concat(second);
        order(shuffle(addarray));
    });
}

function placement(){
    document.getElementById('place').addEventListener('click', function(){
        devide(shuffle(third));
    });
}

function reset(){
    document.getElementsByClassName('btn')//いやでもbtnだとシャッフルボタンとかも含まれるんよな
}

function comment(){
    teams();
    placement();
    proceed();
}

//document.getElementById('freeteam').addEventListener('click', )

//const name=document.getElementById('test1');


/*フォームの内容を取得したい。できない。ぴえん。
const tr=document.getElementById("try");
tr.addEventListener("load", ()=>{
    const name=ty.value;
    console.log("できた");
});
*/