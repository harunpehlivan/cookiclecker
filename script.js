//Values And Tablet

var tablet = false

var cookies = 0

var milk = 0

var totalmilk = 0

var milkcookie = 0

var totalbaked = 0

var cpc_uprice = 10

var cooki_pc = 1

var cps_uprice = 10

var cps = 0

//End

// Achievments

var a1span = document.getElementById('a1')
var a1label = document.getElementById('a1L')

var a2span = document.getElementById('a2')

var a3span = document.getElementById('a3')

var a4span = document.getElementById('a4')

var a5span = document.getElementById('a5')

var a6span = document.getElementById('a6')

var a7span = document.getElementById('a7')

var a8span = document.getElementById('a8')

var a9span = document.getElementById('a9')

var a10span = document.getElementById('a10')

var achtab = document.getElementById('AchievmentTablet')

var achbutt = document.getElementById('AchievmentButt')

var Xbutt = document.getElementById('XButton')

//End


//ID OF Cookies, Upgrades, Milk, And Other Fun Stuff
var cookier = document.getElementById('cooki_butt')

var cooki_hash = document.getElementById('cooki_nomber')

var milk_hash = document.getElementById('milk_nomber')

var total_hash = document.getElementById('total_nomber')

var cpc_ulabel = document.getElementById('cpc_label')

var cpc_lvllabel = document.getElementById('cpc_lvllabel')

var cpc_ubutton = document.getElementById('cooki_pcupg')

var cps_ubutton = document.getElementById('cps_upg')

var cps_plabel = document.getElementById('cps_label')

var cps_lvllabel = document.getElementById('cps_lvllabel')

//End

//Text Contents

cpc_ulabel.textContent = ("price : " + cpc_uprice)
cpc_lvllabel.textContent = ("cooki per click : " + cooki_pc)
cooki_hash.textContent = ("cookies : " + cookies)
milk_hash.textContent = ("milk : " + milk)
total_hash.textContent = ("total baked : " + totalbaked)
cps_plabel.textContent = ("price : " + cps_uprice)
cps_lvllabel.textContent = ("cooki per sec : " + cps)

//End

//Edit Style
achtab.style.display = "none"
Xbutt.style.display = "none"

//END

cpc_ubutton.onclick = function(){
  if(cookies >= cpc_uprice){
    cooki_pc += 1
    cookies -= cpc_uprice
    cpc_uprice += 5
    cooki_hash.textContent = ("cookies : " + cookies)
    cpc_ulabel.textContent = ("price : " + cpc_uprice)
    cpc_lvllabel.textContent = ("cooki per click : " + cooki_pc)
        if(cooki_pc >= 50)
  {
    a5span.src = "Cooki/Images/Achievment/ThatsATonOfCookies.png"
  }
  }
}

//Cheating Functions

//function C(){
//  cookies = Infinity
//  cooki_hash.textContent = ("Eternity")
//  totalbaked = "Eternity"
//  total_hash.textContent = (totalbaked)
//  milk = Infinity
//  milk_hash.textContent = ("Eternity")
//  setTimeout(C, 1)
//}

function Add(val){
  cookies += val
}

function AddM(val){
  milk += val
  milk_hash.textContent = ("Milk :" + milk )
  totalmilk += val
}

//End

achbutt.onclick = function(){
  if (tablet == 0){
  achtab.style.display = "block"
  Xbutt.style.display = "block"
  tablet = 1  
  }
}

Xbutt.onclick = function(){
    if (tablet == 1){
  achtab.style.display = "none"
  Xbutt.style.display = "none"
  tablet = 0  
  }
}

cps_ubutton.onclick = function(){
  if(cookies >= cps_uprice){
    cps += 1
    cookies -= cpc_uprice
    cps_uprice += 5
    cooki_hash.textContent = ("cookies : " + cookies)
    cps_plabel.textContent = ("price : " + cps_uprice)
    cps_lvllabel.textContent = ("cooki per click : " + cps)
      if(cps >= 1)
  {
    a3span.src = "Cooki/Images/Achievment/AutoBaketic.png"
  }
    if(cps >= 25)
  {
    a4span.src = "Cooki/Images/Achievment/MoreAutomation.png"
  }
  }
}

cookier.onclick = function(){
  cookies += cooki_pc
  totalbaked += cooki_pc
  milkcookie += cooki_pc
  if (milkcookie >= 250)
  {
    milkcookie -= 250
    milk += 1
    totalmilk += 1
    if (totalmilk >= 1)
    {
      a6span.src = "Cooki/Images/Achievment/MilkyHuh.png"
    }
  }
  cooki_hash.textContent = ("cookies : " + cookies)
  milk_hash.textContent = ("milk : " + milk)
  total_hash.textContent = ("Total Baked : " + totalbaked)
  if(totalbaked >= 10)
  {
    a1span.src = "Cooki/Images/Achievment/Bakegenning.png"
  }
    if(totalbaked >= 150)
  {
    a2span.src = "Cooki/Images/Achievment/Baked Goods.png"
}
}


function cps_working(){
  cookies += cps * milk
  totalbaked += cps * milk
  cooki_hash.textContent = ("cookies : " + cookies)
    total_hash.textContent = ("Total Baked : " + totalbaked)
  
  setTimeout(cps_working, 1000)
}

cps_working()
