html{
    font-size: 100%;
}
body{
    color: #121212;
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
}
a{
    color: #fff;
    text-decoration: none;
}
li{
    list-style: none;
}
img{
    max-width: 100%;
}
p{
    font-size: 120%;
}

.header-logo{
    width: 100px;
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}
#navi{
    width: 100%;
    height: 50vh;
    background-color: #3851cf;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    opacity: 0;
    text-align: center;
    transition: opacity 0.6s ease,visibility 0.6s ease;
    visibility: hidden;
}
#navi.active{
    opacity: 1;
    visibility:visible ;
}
.nav-menu li{
  padding: 15px 0;
  margin: 40px 0;
}
.nav-menu a{
    font-weight: bold;
    font-size: 120%;
}
.hamburger{
    width: 100px;
    height: 100px;
    background-color :#191970;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    cursor: pointer;
    transition: 0.5s;
}
.hamburger span{
    width: 50px;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 25px;
    transition: 0.5s ease-in-out;
}
.hamburger span:nth-child(1){
    top: 36px;
}
.hamburger span:nth-child(2){
    top: 50px;
}
.hamburger span:nth-child(3){
    top: 64px;
}
.hamburger.active span:nth-child(1){
    top: 47px;
    left: 25px;
    background: #fff;
    transform: rotate(-45deg);
}
.hamburger.active span:nth-child(2){
    top: 47px;
    left: 25px;
    background: #fff;
    transform: rotate(45deg);
}
.hamburger.active span:nth-child(3){
    top: 47px;
    background: #fff;
    transform: rotate(45deg);
}
.site-title{
    position: absolute;
    font-weight: bold;
    font-size: 300%;
    color: #121212;
    margin-top: 60px;
    margin: 20px 0 0px 110px;
}
#main-visual img{
    width: 100%;
    height: 600px;
    object-fit: cover;
    margin-bottom: 120px;
}
#main-visual .text{
    position: absolute;
    top: 45%;
    left: 15%;
    right: 0;
    
}
#main-visual a{
    margin: 0 auto;
    font-size: 3rem;
}
#main-visual p{
    font-size: 120%;
    color: #579cf7;
}
.wrapper{
    max-width: 1960px;
    margin: 0 auto;
    padding:0 5%;
}
.section-title{
    font-size: 250%;
    text-align: left;
    margin-bottom: 60px;
    margin: 0 0 20px;
    padding: 0 0 10px;
    background: url(https://www.round1.co.jp/common/img/bg_dot01.gif) repeat-x left bottom;
}
#charm{
    height: 400px;
    margin-bottom: 60px;
}
.charmcontent{
   width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:0 auto;
    margin-top: 30px;
}
.charmcontent .name{
    font-size: 150%;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 10px;
}
.charmcontent p{
    padding: 10px;
    font-size: 150%;
}
.charmcontent li{
    width: 31.9%;
    box-sizing: border-box;
    font-size: 1em;
    line-height: 1.5em;
    text-align: center;
    padding:15px;
    padding-bottom: 60px;
    position: relative;
    background: #fff;
    border: #191970 solid 0.4167em;
}

#facility{
    margin-bottom: 60px;
}
.item{
    width: 48%;
    text-align: center;
}
.item p{
    margin-bottom: 30px;
    padding: 15px;
}
.item-title{
    font-size: 250%;
    margin-bottom: 20px;
}
.item img{
    width: 100%;
    border-radius: 20%;
}
.bath{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    margin-bottom: 60px;
}
.bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:40px 0;
    margin-bottom: 60px;
}
.viking{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 120px;
}
#plan{
    padding: 0 16px;   
}
table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.plan-table{
    width: 100%;
    border-top: solid 1px #808080 ;
    border-left: solid 1px #808080;
}
.adult{
    width: 16%;
}
 th,td{
    font-weight: bold;
    padding: 30px;
    margin: 30px;
    border-right: solid 1px #c3c3c3;
    border-bottom: solid 1px #c3c3c3;
    text-align: center;
}
th{
    background-color: #b0c4de;
}
table td:empty {
    background-image: linear-gradient(to top right,
    transparent, transparent 49%,
       black 49%,
       black 51%,
      transparent 51%, transparent);
      background-color: none;
  }
  table th:empty {
    background-image: linear-gradient(to top right,
    transparent, transparent 49%,
       black 49%,
       black 51%,
      transparent 51%, transparent);
  }
.uni-student, .high-student{
    width: 28%;
}
#footer p{
    height: 100px;
    text-align: center;
    background-color: #191970;
    color: #fff;
}

@media(max-width:960px){
    #main-visual img{
        height: 300px;
    }
    #main-visual .text{
       position: absolute;
       top: 15%;
        left: 8%;
        right: 0;
    }
    #main-visual p{
        font-weight: bold;
        font-size: 80%;
        color: #579cf7;
    }
    #charm{
        margin-bottom: 120px;
    }
    table{
        width: 100%;
    }
}
