/**
 * Created by jicemoon on 2015/9/2.
 */
//levelArray 参数，1：旋转轴上的圆形个数;2:子弹个数；3:速度
window.onload = function() {
    var levelArray = [
        [2, 5, 0.001],
        [2, 6, 0.03],
        [2, 7, 0.05],
    ];
    //初始化游戏, 两个参数分别表示"游戏所处的canvas画布元素"和"关卡设置, 
    //可以省略(省略后将使用默认设置)"
    var hg = new HardestGame(document.getElementById("gameStage"), levelArray);
    //游戏成功过关
    hg.levelSuccessHandle = function() {
            document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;
            var time = 3;
            document.getElementById("gameTip").innerHTML = "完美通过第" + (hg.level - 1) + "关, " + time + "秒后,开始第" + hg.level + "关";
            var interval = setInterval(function() {
                time--;
                document.getElementById("gameTip").innerHTML = "完美通过第" + (hg.level - 1) + "关, " + time + "秒后,开始<span>第" + hg.level + "关</span>";
                if (time <= 0) {
                    clearInterval(interval);
                    document.getElementById("gameTip").innerHTML = "";
                    hg.gameContinue(true);
                }
            }, 1000);
        }
        //游戏失败结束
    hg.gameOverHandle = function() {
            document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;
            var time = 5;
            document.getElementById("gameTip").innerHTML = "游戏结束, " + time + "秒后,继续游戏";
            var interval = setInterval(function() {
                time--;
                document.getElementById("gameTip").innerHTML = "游戏结束, " + time + "秒后,继续游戏";
                if (time <= 0) {
                    clearInterval(interval);
                    document.getElementById("gameTip").innerHTML = "";
                    hg.gameContinue();
                }
            }, 1000);
        }
    //初始化游戏
    hg.init();
    
    hg.canvas.parentNode.style.width = hg.canvas.width + "px";
    hg.canvas.parentNode.style.height = hg.canvas.height + "px";
    //游戏开始
    hg.gameStart();
    document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;
}
