!function(){var l=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=window.innerHeight,p=(l=.636<l/o?.636*o:l)/750;document.getElementsByTagName("html")[0].style.fontSize=100*p+"px";var n,r=204*p,u=[{left:{url:"assets/img/CircleCenter_1_split_left.png"+kh_version_number,w:"238",h:"407",rs:2*Math.PI},right:{url:"assets/img/CircleCenter_1_split_right.png"+kh_version_number,w:"230",h:"407",cutx:"26",rs:2*Math.PI}},{left:{url:"assets/img/CircleCenter_2_split_left.png"+kh_version_number,w:"238",h:"407",rs:2*Math.PI},right:{url:"assets/img/CircleCenter_2_split_right.png"+kh_version_number,w:"230",h:"407",cutx:"26",rs:2*Math.PI}},{left:{url:"assets/img/CircleCenter_3_split_left.png"+kh_version_number,w:"238",h:"407",rs:2*Math.PI},right:{url:"assets/img/CircleCenter_3_split_right.png"+kh_version_number,w:"230",h:"407",cutx:"26",rs:2*Math.PI}}],a=0,c=42*p,d=[-.1,-.05,-.01,.01,.05,.1],m=8,h=!0,v=["assets/img/Lipstick_1.png"+kh_version_number,"assets/img/Lipstick_2.png"+kh_version_number,"assets/img/Lipstick_3.png"+kh_version_number],g=["assets/img/CircleCenter_1.png"+kh_version_number,"assets/img/CircleCenter_2.png"+kh_version_number,"assets/img/CircleCenter_3.png"+kh_version_number],_=[{normal:"assets/img/level_icon_1_active.png"+kh_version_number,active:"assets/img/level_icon_1_active.png"+kh_version_number},{normal:"assets/img/level_icon_2.png"+kh_version_number,active:"assets/img/level_icon_2_active.png"+kh_version_number},{normal:"assets/img/level_icon_3.png"+kh_version_number,active:"assets/img/level_icon_3_active.png"+kh_version_number}],y=Math.max(.25*o,.5*l-40),A={x:.5*l,y:494*p},C={w:43*p,h:168*p},S=o-58*p-C.h+c,e={ROTAION_SPEED_ARRAY:[-.05,-.04,-.02,.02,.04,.05],rotationAccelerationSpeed:.001,levelArray:[0,6,-.02,30]},i={ROTAION_SPEED_ARRAY:[-.06,-.03,-.02,.02,.04,.06],rotationAccelerationSpeed:.001,levelArray:[0,8,.03,40]},s={ROTAION_SPEED_ARRAY:[-.08,-.07,-.05,.06,.08,.08],rotationAccelerationSpeed:.008,levelArray:[0,13,.06,60]},f={ROTAION_SPEED_ARRAY:[-.09,-.07,-.05,.06,.08,.09],rotationAccelerationSpeed:.009,levelArray:[0,13,.07,60]},b={ROTAION_SPEED_ARRAY:[-.1,-.08,-.03,.04,.07,.1],rotationAccelerationSpeed:.009,levelArray:[0,13,.08,60]},x={ROTAION_SPEED_ARRAY:[-.1,-.07,-.03,.03,.07,.1],rotationAccelerationSpeed:.009,levelArray:[0,13,.09,60]},w=3,k={w:89*p,h:21*p,space:41*p,bottom:60*p};function t(t,e,i,s,l){this.x=t,this.y=e,this.radius=i,this.imgObj=s,this.angle=l}function P(t,e,i,s,l){this.x=t,this.y=e,this.w=i,this.h=s,this.imgObj=l}function I(t,e,i,s,l,n,a){this.x=t,this.y=e,this.w=i,this.h=s,this.z=l,this.imgObj=n,this.angle=a,I.prototype.paint=function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.angle+1.5*Math.PI),t.beginPath(),t.moveTo(-this.w/2,-this.z),t.lineTo(this.w/2,-this.z),t.lineTo(this.w/2,this.h-this.z),t.lineTo(-this.w/2,this.h-this.z),t.closePath(),this.imgObj&&t.drawImage(this.imgObj,-1*i/2,-this.z,this.w,this.h),t.restore()},I.prototype.update=function(){}}function R(t,e,i,s,l,n,a){this.restNum=i,this.y=s,this.isQuake=l,this.isSplit=n,this.level=a,this.super.call(this,A.x,this.y,r,t,e)}function O(t,e,i,s,l,n){this.super.call(this,0,0,t,e,c,s,i),this.angle=i,this.resetPosition()}function M(t,e,i,s,l,n,a,r,h){this.super.call(this,t,e,i,s,c,l,n),this.newY=this.y,this.isFail=a,this.failDirection=r,this.failSpeed=h}function T(t,e){if(T.prototype.levelLength=2,!t||!t.getContext)throw new Error("参数canvas不能为空, 且必须为canvas元素");this.canvas=t;var i=JSON.parse($.cookie("game_cookie"));i.game_result||(i={game_result:0})}window.extendClass||(window.extendClass=function(t,e){"function"==typeof e&&"function"==typeof t&&(t.prototype=new(function(){}.prototype=e.prototype).constructor,(t.prototype.constructor=t).prototype.super=e)}),t.prototype={paint:function(t){t.save(),t.fillStyle=this.fillStyle,t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!0),t.restore()}},P.prototype={paint:function(t){t.save(),t.translate(this.x,this.y),t.beginPath(),t.moveTo(0,0),t.lineTo(0,this.w),t.lineTo(this.w,this.h),t.lineTo(0,this.h),t.closePath(),this.imgObj&&t.drawImage(this.imgObj,0,0,this.w,this.h),t.restore()}},extendClass(R,t),R.prototype.paint=function(t){this.super.prototype.paint.call(this,t)},R.prototype.update=function(t,e,i,s){this.isQuake&&(h?(this.y=this.y-2,4<=n-this.y&&(h=!1)):(this.y=this.y+2,n<=this.y&&(this.y=n,this.isQuake=!1,h=!0,n=null))),this.angle+=t,this.angle%=2*Math.PI,this.isSplit?this.resetCircleCenterSplit(e,i,s,t):this.resetCircleCenterRotate(e)},R.prototype.resetCircleCenterRotate=function(t){t.save(),t.translate(A.x,this.y);var e=this.imgObj,i=(this.x,this.y,this.radius);t.rotate(this.angle),t.drawImage(e,-1*i,-1*i,2*i,2*i),t.restore(),t.save(),10<=this.restNum?($("#bulletsNum2").css("display","block"),$("#bulletsNum1").attr("src","assets/img/"+Math.floor(this.restNum/10)+".png"+kh_version_number),$("#bulletsNum2").attr("src","assets/img/"+this.restNum%10+".png"+kh_version_number)):($("#bulletsNum2").attr("src",""),$("#bulletsNum2").css("display","none"),$("#bulletsNum1").attr("src","assets/img/"+this.restNum+".png"+kh_version_number))},R.prototype.resetCircleCenterSplit=function(t,e,i,s){i.left.x-=2.5,i.left.y-=m,m-=.2,i.right.x+=2.5,i.right.y-=m;var l=u[this.level].right.cutx*p,n=u[this.level].left.w*p,a=u[this.level].right.w*p,r={left:{x:A.x+i.left.x-.5*n,y:this.y+i.left.y},right:{x:A.x-l+i.right.x+.5*a,y:this.y+i.right.y}},h=this.radius;t.save(),t.translate(r.left.x,r.left.y);var o=new Image;o.src=u[this.level].left.url,n=u[this.level].left.w*p,t.arc(0,0,5,0,2*Math.PI,!0),u[this.level].left.rs-=s,t.rotate(u[this.level].left.rs),t.drawImage(o,-1*h+.5*n,-1*h,n,2*h),t.restore(),t.save(),t.translate(r.right.x,r.right.y);var c=new Image;c.src=u[this.level].right.url,a=u[this.level].right.w*p,u[this.level].right.rs+=s,t.rotate(u[this.level].right.rs),t.drawImage(c,.5*-a,-1*h,n,2*h),t.restore(),r.left.x<-1*n&&(this.isSplit=!1,e.nextLevel.call(e))},extendClass(O,I),O.prototype.update=function(t,e){this.angle+=t,this.isSplit?($(".bulletsNumBox").css("display","none"),clearInterval(timeboxInterval),this.resetCircleRotationEnd(e)):($(".bulletsNumBox").css("display","none"),this.resetPosition())},O.prototype.resetPosition=function(){this.x=A.x+r*Math.cos(this.angle),this.y=A.y+r*Math.sin(this.angle)},O.prototype.paint=function(t){this.super.prototype.paint.call(this,t)},O.prototype.resetCircleRotationEnd=function(t){this.y-=0<m?.2*m:1.4*m},extendClass(M,I),M.prototype.update=function(t){this.isFail?(this.y+=2*m,m+=.24,this.x-=100*this.failSpeed,this.y>=o+c&&t.gameOver.call(t)):this.y>this.newY&&(this.y+=-30,this.y=this.y<this.newY?this.newY:this.y)},T.prototype={level:1,isPause:(M.prototype.paint=function(t){this.super.prototype.paint.call(this,t)},!1),isOver:!0,isCanTap:!0,centerCircle:null,rotationCircles:[],bulletCircles:[],nowSpeed:null,AimBullet:null,levelLength:null,rotationSpeed:.03,rotaionTimes:0,oRandom:0,isFastChangeRotationAccelerationSpeed:!1,mobileTouch:null,levelSpaceTime:1,centerCircleSplitReposition:{left:{x:0,y:0},right:{x:0,y:0}},saveCenterCircleSplitReposition:{left:{x:0,y:0},right:{x:0,y:0}},levelA:0,getParams:function(t){return 0==t?e:1==t?i:2==t?s:3==t?f:4==t?b:5==t?x:void 0},init:function(){var t=this.getParams(this.levelA);a=0,this.canvas.width=l,this.canvas.height=o,this.context=this.canvas.getContext("2d");var e=new Image;e.src="assets/img/CircleCenter_1.png"+kh_version_number,lens=t.levelArray[1],this.centerCircle||(this.centerCircle=new R(e,.5*Math.PI,lens,A.y,!1,!1,1));var i=this,s="ontouchend"in document?"touchend":"click";$("#game").on(s,function(t){t.preventDefault(),i.tapHandle.call(i,t)}),$("#game").on("click",function(t){i.tapHandle.call(i,t)})},gameStart:function(){this.level=1,this.isPause=!1,this.isOver=!1,this.isCanTap=!0,this.levelChange.call(this),this.update.call(this)},gamePause:function(){this.isCanTap=!1,this.isPause=!0},gameContinue:function(t){this.isPause=!1,this.isCanTap=!0,(this.isOver||t)&&(this.levelChange.call(this),this.isOver=!1),this.update.call(this)},gameOver:function(){this.isOver=!0,this.isCanTap=!1,this.gameOverHandle&&this.gameOverHandle.call(this,this.level)},update:function(){if(this.levelA=parseInt(this.level-1),this.rotaionTimes++,this.context.clearRect(0,0,l,o),!this.isPause&&!this.isOver){var t,e;for(e=this.rotationCircles.length,t=0;t<e;t++)this.rotationCircles[t].update(this.rotationSpeed,this.context);if(e=this.bulletCircles.length,this.AimBullet.update(this),!this.isCanTap){var i=this.AimBullet;if(i.y<=A.y+y+20){var s=this.checkCollision.call(this,i);s.isCollision&&(this.audioPlay($("#collision_audio").get(0)),this.AimBullet.isFail=!0,this.AimBullet.failDirection=s.failDirection,this.AimBullet.failSpeed=this.rotationSpeed),i.y==A.y+r&&this.normalResults.call(this)}}this.paint.call(this)}this.centerCircle.level=this.levelA,this.changeSpeed.call(this)},changeSpeed:function(){var t=this.getParams(this.levelA);this.nowSpeed=t.ROTAION_SPEED_ARRAY[this.oRandom];var e=parseInt(t.levelArray[1]-a);3==this.level&&e<=3?this.last_3_changeSpeed.call(this,e):this.rotationSpeed>=this.nowSpeed?this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed-=2*t.rotationAccelerationSpeed:this.rotationSpeed-=t.rotationAccelerationSpeed:this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed+=2*t.rotationAccelerationSpeed:this.rotationSpeed+=t.rotationAccelerationSpeed,this.centerCircle.update(this.rotationSpeed,this.context,this,this.centerCircleSplitReposition)},last_3_changeSpeed:function(t){if(3==t){var e=this.getParams(3);this.nowSpeed=e.ROTAION_SPEED_ARRAY[this.oRandom],t=parseInt(e.levelArray[1]-a),this.rotationSpeed>=this.nowSpeed?this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed-=2*e.rotationAccelerationSpeed:this.rotationSpeed-=e.rotationAccelerationSpeed:this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed+=2*e.rotationAccelerationSpeed:this.rotationSpeed+=e.rotationAccelerationSpeed}else 2==t?(e=this.getParams(1),this.nowSpeed=e.ROTAION_SPEED_ARRAY[this.oRandom],t=parseInt(e.levelArray[1]-a),this.rotationSpeed>=this.nowSpeed?this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed-=2*e.rotationAccelerationSpeed:this.rotationSpeed-=e.rotationAccelerationSpeed:this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed+=2*e.rotationAccelerationSpeed:this.rotationSpeed+=e.rotationAccelerationSpeed):(e=this.getParams(1),this.nowSpeed=e.ROTAION_SPEED_ARRAY[this.oRandom],t=parseInt(e.levelArray[1]-a),this.rotationSpeed>=this.nowSpeed?(this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed-=2*e.rotationAccelerationSpeed:this.rotationSpeed-=e.rotationAccelerationSpeed,this.rotationSpeed-=e.rotationAccelerationSpeed):this.isFastChangeRotationAccelerationSpeed?this.rotationSpeed+=2*e.rotationAccelerationSpeed:this.rotationSpeed+=e.rotationAccelerationSpeed)},normalResults:function(){this.bulletCircles[a]&&(this.bulletCircles[a].imgObj.src="assets/img/Sword_small_"+this.level+"_gray.png"+kh_version_number,a++,this.centerCircle.restNum=parseInt(this.getParams(this.levelA).levelArray[1]-a)),this.isCanTap=!0;var t=new Image;if(t.src=v[this.level-1],this.rotationCircles.push(new O(C.w,C.h,.5*Math.PI,t,!1)),lens=parseInt(this.getParams(this.levelA).levelArray[1]),a==lens){g[this.levelA+1]&&(this.centerCircle.imgObj.src=g[this.levelA+1],this.centerCircle.restNum=this.getParams(this.levelA+1).levelArray[1]),this.centerCircle.isSplit=!0,this.audioPlay($("#split_audio").get(0)),console.log("成功");for(var e=0;e<this.rotationCircles.length;e++)this.rotationCircles[e].isSplit=!0;for(var i in this.AimBullet)delete this.AimBullet[i]}else{for(var i in n=this.centerCircle.y,$("#insert_audio").get(0).play(),this.centerCircle.isQuake=!0,this.AimBullet)delete this.AimBullet[i];play();var s=new Image;s.src=v[this.levelA],this.AimBullet=new M(A.x,S,C.w,C.h,s,.5*Math.PI,!1,null,null)}},audioPlay:function(t){playAudioInWechat(t)},paint:function(){var t,e;for(t=this.rotationCircles.length,e=0;e<t;e++)this.rotationCircles[e].paint(this.context);for(t=this.bulletCircles.length,e=0;e<t;e++)this.bulletCircles[e].paint(this.context);this.AimBullet.paint(this.context),this.centerCircle.paint(this.context);var i=this;window.requestAnimationFrame(function(){i.update.call(i)})},nextLevel:function(){$(".bulletsNumBox").css("display","none"),clearInterval(timeboxInterval),a=0;var t=this;t.gamePause.call(t),t.level++,console.log(22,t.level,t.levelLength),t.level<=t.levelLength&&(console.log(11,t.level,t.levelLength),$("#levelSwitchBoxMain").attr("src","assets/img/level_"+t.level+"_mains.jpg"+kh_version_number),$("#levelSwitchBox").css("display","block"),$("#levelSwitchBox").addClass("hidden")),t.levelSuccessHandle(t.level)},levelChange:function(){var t,e,i;this.levelA=this.level-1,this.rotationCircles=[],this.bulletCircles=[],this.centerCircleSplitReposition={left:{x:0,y:0},right:{x:0,y:0}},m=8;for(var s=0;s<this.levelLength;s++)document.getElementById("levelbox").children[s].children[0].src=_[s].normal,s<=this.levelA&&(document.getElementById("levelbox").children[s].children[0].src=_[s].active);t=parseInt(this.getParams(this.levelA).levelArray[0]);var l=parseInt(this.getParams(this.levelA).levelArray[3]),n=0;for($("#timebox").html(l),timeboxInterval=setInterval(function(){l<=11&&10<l&&this.audioPlay($("#Countdown_10s_audio").get(0)),++n%2==0&&(this.oRandom=Math.floor(Math.random()*d.length)),0==--l&&this.gameOver.call(this),$("#timebox").html(l)}.bind(this),1e3),this.centerCircle.restNum=parseInt(this.getParams(this.levelA).levelArray[1]),i=2*Math.PI/t,s=0;s<t;s++){var a=new Image;a.src=v[this.level-1],e=new O(C.w,C.h,i*s,a,!1),this.rotationCircles.push(e)}for(t=parseInt(this.getParams(this.levelA).levelArray[1]),s=0;s<t;s++){var r=new Image;r.src="assets/img/Sword_small_"+this.level+".png"+kh_version_number,tempClip=new P(15,o-k.bottom-k.space*t+s*k.space,k.w,k.h,r),this.bulletCircles.push(tempClip)}var h=new Image;h.src=v[this.level-1],this.AimBullet&&delete this.AimBullet,this.AimBullet||(this.AimBullet=new M(A.x,S,C.w,C.h,h,.5*Math.PI,!1)),3<=this.getParams(this.levelA).levelArray.length?this.rotationSpeed=this.getParams(this.levelA).levelArray[2]:this.rotationSpeed=.01},crossMul:function(t,e){return t.x*e.y-t.y*e.x},checkCross:function(t,e,i,s){var l={x:t.x-i.x,y:t.y-i.y},n={x:e.x-i.x,y:e.y-i.y},a={x:s.x-i.x,y:s.y-i.y},r=this.crossMul(l,a)*this.crossMul(n,a);return l={x:i.x-t.x,y:i.y-t.y},n={x:s.x-t.x,y:s.y-t.y},a={x:e.x-t.x,y:e.y-t.y},r<=5e4&&(this.crossMul(l,a),this.crossMul(n,a)),r<=0&&this.crossMul(l,a)*this.crossMul(n,a)<=0},checkData:function(){var t=document.getElementById("app").getAttribute("data-flag");return this.bulletCircles.length-a==1&&2!=t&&3==this.level?3:2==t&&3==this.level?2:0},checkCollision:function(t){for(var e=t.x-.5*t.w,i=t.y-t.z,s=t.w,l=t.h,n={x:e,y:i},a={x:e+s,y:i},r={x:e+s,y:i+l},h={x:e,y:i+l},o=0;o<this.rotationCircles.length;o++){var c=this.rotationCircles[o].angle;c%=2*Math.PI;var p=this.rotationCircles[o].x,u=this.rotationCircles[o].y,d=this.rotationCircles[o].w,m=this.rotationCircles[o].h,v=this.rotationCircles[o].z,g={x:p-d/2*Math.sin(c),y:u+d/2*Math.cos(c)},_={x:p+d/2*Math.sin(c),y:u-d/2*Math.cos(c)},y={x:p+(m-v)*Math.cos(c)+d/2*Math.sin(c),y:u+(m-v)*Math.sin(c)-d/2*Math.cos(c)},C={x:p+(m-v)*Math.cos(c)-d/2*Math.sin(c),y:u+(m-v)*Math.sin(c)+d/2*Math.cos(c)};if(this.checkCross(n,a,C,g)||this.checkCross(n,h,C,g)||this.checkCross(a,r,C,g))return{isCollision:!0,failDirection:"left"};if(this.checkCross(n,a,C,y)||this.checkCross(n,h,C,y)||this.checkCross(a,r,C,y))return{isCollision:!0,failDirection:"bottom"};if(this.checkCross(n,a,y,_)||this.checkCross(n,h,y,_)||this.checkCross(a,r,y,_))return{isCollision:!0,failDirection:"right"};t.y,A.y}return!1},tapHandle:function(t){if(t.stopPropagation(),t.preventDefault(),this.isCanTap){this.isCanTap=!1,this.bulletCircles.length;var e=this.getParams(this.levelA);parseInt(e.levelArray[1]-a)<=w&&(0<this.nowSpeed?this.nowSpeed=.1:this.nowSpeed=-.1,this.isFastChangeRotationAccelerationSpeed=!0),this.AimBullet.newY=A.y+r}},levelSuccessHandle:null,gameOverHandle:null},window.HardestGame=T}();