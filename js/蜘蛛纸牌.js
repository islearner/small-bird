//生成牌



//发牌、完牌运动

//发牌（初始发牌）

//点击发牌

//拖拽、放置（判断是否可以放置、是否完牌、越界缩进）

//完牌
//
//洗牌
function random(num) {
	return Math.floor(Math.random() * num);
}
var _cards = [];
var _cards_init = [1,2,3,4,5,6,7,8,9,10,'J','Q','K']
function shuffle(){
    var len=_cards_init.length;
    if(len>0){
        var i=random(len);
        _cards.push(_cards_init[i]);
        _cards_init.splice(i,1);
        shuffle();
    }
}
shuffle();
console.log(_cards);












