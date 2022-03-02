const string = `
.bingdundun-container {
  position: relative;
  height: 800px;
  background: #faf5d7;
  display: flex;
  justify-content: center;
}

.bingdundun-container div:after,.bingdundun-container div:before {
  position: absolute;
  content: '';
}
.body {
  position: relative;
  width: 244px;
  height: 278.5px;
  top: 35px;
  border: 5px solid #000;
  background: #fff;
  border-radius: 120px 120px 97px 97px/120px 120px 126px 126px;
  z-index: 5;
}
.face {
  position: absolute;
  width: 200px;
  height: 160px;
  top: 16px;
  left: 16px;
  box-shadow: 0 0 0 2px #006bb0, 0 0 0 4px #dc2f1f, 0 0 0 6px #1d1815, 0 0 0 8px #efa90d, 0 0 0 10px #059341;
  border-radius: 50% 50% 41% 41%/60% 60% 42% 42%;
}
.nose {
  position: absolute;
  width: 22px;
  height: 15px;
  top: 75px;
  left: 88px;
  background: #000;
  border-radius: 10px 10px 21px 21px;
}

.mouth {
  position: absolute;
  width: 37px;
  height: 24px;
  top: 80px;
  left: 81px;
  border: 3px solid;
  border-color: transparent transparent #000;
  border-radius: 50%;
}
.ear{
  position: absolute;
}
.ear::after,.ear::before {
  width: 49px;
  height: 63px;
  top: 20px;
  left: -100px;
  background: #000;
  border-radius: 50%;
}
.ear::after {
  left: 50px;
}

.hand-left {
  position: absolute;
  width: 50px;
  height: 50px;
  left: -46px;
  top: 179px;
  border-radius: 50%;
  background: #000;
}

.hand-left::before {
  width: 0;
  height: 0;
  left: 5px;
  top: -35px;
  border: 24px solid;
  border-color: transparent #000 #000 transparent;
}

.hand-right {
  position: absolute;
  width: 45px;
  height: 88px;
  top: 85px;
  right: -45px;
  background: #000;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
  border-bottom-right-radius: 90px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.hand-right::after,.hand-right::before {
  width: 8px;
  height: 15px;
  background: red;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.hand-right::before {
  left: 19px;
  top: 13px;
  -webkit-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(19deg);
  border-bottom-left-radius: 16px;
}

.hand-right::after {
  left: 15px;
  top: 15px;
  -webkit-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(-71deg);
  border-bottom-right-radius: 16px;
}

.foot-top {
  position: absolute;
  top: 250px;
}
.foot-top::after,.foot-top::before {
  width: 50px;
  height: 20px;
  background: #000;
}
.foot-top::before {
  left: 40px;
  border-top-right-radius: 100%;
}

.foot-top::after {
  left: 148px;
  border-top-left-radius: 100%;
}

.foot-bottom {
  position: absolute;
  top: 290px;
}

.foot-bottom::before {
  left: 30px;
  width: 55px;
  height: 55px;
  background: #000;
  border-radius: 9px 9px 35px 14px/83px 90px 35px 14px;
}

.foot-bottom::after {
  right: 25px;
  width: 55px;
  height: 55px;
  background: #000;
  border-radius:9px 9px 14px 35px/90px 83px 14px 35px;
}

.eye {
  position: absolute;
  top: 30px;
  left: 100px;
}

.eye::before {
  right: 25px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.eye::after {
  left: 25px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.eye::after,.eye::before {
  width: 56px;
  height: 75px;
  background: #000;
}
.eye-hole {
  position: absolute;
  top: 50px;
  left: 100px;
  width: 10px;
  height: 10px;
  box-shadow: -47px 10px #fff, 46px 10px #fff;
}

.eye-hole::after,.eye-hole::before {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 4px solid #fff;
}

.eye-hole::before {
  right: 38px;
}

.eye-hole::after {
  left: 30px;
}

.eye-hole,.eye::after,.eye::before {
  border-radius: 50%;
}
@keyframes wave {
  0%{
    transform: rotate(30deg);
  }
  15%{
    transform: rotate(20deg);
  }
  30%{
    transform: rotate(10deg);
  }
  60%{
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(10deg);
  }
  90%{
    transform: rotate(20deg);
  }
  100%{
    transform: rotate(30deg);
  }
}
.body:hover > .hand-right{
  animation: wave 1500ms infinite linear;
}
`
export default string