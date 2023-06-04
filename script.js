window.addEventListener("load", (event) => {
    console.log(String.raw`
     /\_/\
    ( o.o )
     > ^ <
     Hello!`);
     asciiSlideshow(asciiHTML, asciiBash, 0, 150); 
});

//Variables storing all HTML elements for language switching
const welcomeEng = document.getElementById("welcome-en");
const welcomeSpa = document.getElementById("welcome-es");
const introductionEng = document.getElementById("introduction-en");
const introductionSpa = document.getElementById("introduction-es");
const buttonEng = document.getElementById("lang-en");
const buttonSpa = document.getElementById("lang-es");
const webdevprojectsEng = document.getElementById("webdevprojects-en");
const webdevprojectsSpa = document.getElementById("webdevprojects-es")
const powershellprojectsEng = document.getElementById("powershellprojects-en");
const powershellprojectsSpa = document.getElementById("powershellprojects-es");
const otherprojectsEng = document.getElementById("otherprojects-en");
const otherprojectsSpa = document.getElementById("otherprojects-es");
const contactoEng = document.getElementById("contacto-en");
const contactoSpa = document.getElementById("contacto-es");

//Other variables
const asciiHTML = document.getElementById("ascii-pre");
const switcher = document.querySelector(".lang-btn");

function asciiSlideshow(asciiHTML, asciiArray, stop, intervalo) { //Función que toma un elementoHTML y un array 
    let indice = 0 //y updatea el elemento con cada objecto del array cada X tiempo (x siendo intervalo medido en ms)
    if (stop === 0) {
    interval = setInterval(() => {
       asciiHTML.innerText = asciiArray[indice];
       indice++;
       if (indice === asciiArray.length) { 
           indice = 0;
       }
    }, intervalo)
    } else if (stop === 1) {
         clearInterval(interval)
    }                    
}

switcher.addEventListener('click', function() {
     if (welcomeSpa.style.display === "none")
     {
          welcomeSpa.style.display = "block";
          introductionSpa.style.display = "block";
          buttonSpa.style.display = "block";
          webdevprojectsSpa.style.display = "block";
          powershellprojectsSpa.style.display = "block";
          otherprojectsSpa.style.display = "block";
          contactoSpa.style.display = "block";

          welcomeEng.style.display = "none";
          introductionEng.style.display = "none";
          buttonEng.style.display = "none";
          webdevprojectsEng.style.display = "none";
          powershellprojectsEng.style.display = "none";
          otherprojectsEng.style.display = "none";
          contactoEng.style.display = "none";
     } else
     {
          welcomeEng.style.display = "block";
          introductionEng.style.display = "block";
          buttonEng.style.display = "block";
          webdevprojectsEng.style.display = "block";
          powershellprojectsEng.style.display = "block";
          otherprojectsEng.style.display = "block";
          contactoEng.style.display = "block";

          welcomeSpa.style.display = "none";
          introductionSpa.style.display = "none";
          buttonSpa.style.display = "none";
          webdevprojectsSpa.style.display = "none";
          powershellprojectsSpa.style.display = "none";
          otherprojectsSpa.style.display = "none";
          contactoSpa.style.display = "none";
     }
})


const asciiBash = [String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  |                 |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
    String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | n               |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | ni              |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nic             |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico            |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@           |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:          |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~         |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$        |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$        |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$ |      |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$ |      |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$        |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$        |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$ |      |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$ |      |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`,
     String.raw`
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  | nico@:~$        |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |     |---=     |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |   -----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |," 
        /_)______________(_/  //'   | +---------+
   ___________________________/___  ,
  /  oooooooooooooooo  .o.  oooo /,   \,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
-----------------------------'
                ASCII by Kevin Lam`]