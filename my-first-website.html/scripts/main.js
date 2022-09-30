var information = {
  q1: "最喜欢的运动是",
  a1: "badmintom",
  q2: "浙大最潮的学生组织是",
  a2: "求是潮",
  q3: "求是潮的办公室在",
  a3: "小剧场B-217",
  q4: "报名参加求是潮的原因",
  a4: "因为热爱与好奇",
  q5: "我的个人信息",
  a5: "工信2214王裕涵",
};

const btn1 = document.querySelector("button.first");
const btn2 = document.querySelector("button.second");
const btn3 = document.querySelector("button.third");
const btn4 = document.querySelector("button.forth");
const btn5 = document.querySelector("button.fifth");

btn1.innerHTML = information.q1;
btn2.innerHTML = information.q2;
btn3.innerHTML = information.q3;
btn4.innerHTML = information.q4;
btn5.innerHTML = information.q5;

btn1.onclick = function react() {
  if (btn1.innerHTML === information.q1) {
    btn1.innerHTML = information.q1 + "<br>" + "<br>" + information.a1;
    btn1.style.backgroundColor = "white";
    btn1.style.height = "100px";
  } else {
    btn1.innerHTML = information.q1;
    btn1.style.backgroundColor = "rgb(128,128,128)";
    btn1.style.height = "50px";
  }
};

btn2.onclick = function react() {
  if (btn2.innerHTML === information.q2) {
    btn2.innerHTML = information.q2 + "<br>" + "<br>" + information.a2;
    btn2.style.backgroundColor = "white";
    btn2.style.height = "100px";
  } else {
    btn2.innerHTML = information.q2;
    btn2.style.backgroundColor = "rgb(128,128,128)";
    btn2.style.height = "50px";
  }
};

btn3.onclick = function react() {
  if (btn3.innerHTML === information.q3) {
    btn3.innerHTML = information.q3 + "<br>" + "<br>" + information.a3;
    btn3.style.backgroundColor = "white";
    btn3.style.height = "100px";
  } else {
    btn3.innerHTML = information.q3;
    btn3.style.backgroundColor = "rgb(128,128,128)";
    btn3.style.height = "50px";
  }
};

btn4.onclick = function react() {
  if (btn4.innerHTML === information.q4) {
    btn4.innerHTML = information.q4 + "<br>" + "<br>" + information.a4;
    btn4.style.backgroundColor = "white";
    btn4.style.height = "100px";
  } else {
    btn4.innerHTML = information.q4;
    btn4.style.backgroundColor = "rgb(128,128,128)";
    btn4.style.height = "50px";
  }
};

btn5.onclick = function react() {
  if (btn5.innerHTML === information.q5) {
    btn5.innerHTML = information.q5 + "<br>" + "<br>" + information.a5;
    btn5.style.backgroundColor = "white";
    btn5.style.height = "100px";
  } else {
    btn5.innerHTML = information.q5;
    btn5.style.backgroundColor = "rgb(128,128,128)";
    btn5.style.height = "50px";
  }
};
