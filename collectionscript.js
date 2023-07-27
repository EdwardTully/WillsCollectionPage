let colTot = document.getElementById("colTot");
let colarr =  document.getElementsByClassName('card');

const CountEm= function(){
     return colTot.innerHTML =  colarr.length

}
CountEm();



    
/*let cardLst =  document.getElementById("cardList")
let IDnum = document.getElementById("idnum")
let IDnumA = document.getElementsByTagName('h6')
let identifier = document.getElementById('carname')
let card = document.getElementById('card')
let listItem = document.getElementsByTagName('li')
let textbox = document.getElementsByTagName('aside')
const cardarr = [...cardLst.children]

let arrlen = cardarr.length

const indexmaker = function(){

const numcheck=function(temp){
     return temp === 0001  
  }
    
  cardarr.forEach(card){

    const serialN = ('WILLY00'+(cardarr.indexOf(card)+2)+'T')
    IDnum.innerText = serialN
    IDnum.append(serialN)

    
    }

  }
  /*const makeID = function(){
    IDnum.innerHTML=('WILLY00'+(cardarr.indexOf(card)+2)+'T')
  }*/

  /*indexmaker()
    



    




    


    





console.log(IDnum.innerHTML)*/



 


/*const indexmaker = function(){

     if(IDnum.innerHTML === '0002'|| IDnum.innerHTML === '' ){
      IDnum.innerHTML='WILLY00'+(cardarr.indexOf(listItem)+2)+'00' } 
    }


let i=0
while(i < 75){
console.log('hello')
indexmaker(i)
i++

}*/

/*let title = document.getElementById("title");
let photo = document.getElementById('photo').files[0].name

let txtDscr=document.getElementById('detail');
let Sbmt=document.getElementById("create");
let Card = document.getElementsByClassName("card")
let ID = document.getElementById("idnum");
let testCell = document.getElementById("testcell")
let newSpot = document.getElementById('new')
let cardList = document.getElementById('cardList')
let newListItem = document.createElement('li')

const createCard = function(){

    ID = ID + 1

let newHTM = ` <a href="./DE2002.html"><div class="card">
<h4>${title.value}</h4>
<h6 id="idnum"></h6>
<img src="./images/${photo.value}" style="width:250px; height:180px;">
<aside>${txtDscr.value}
   </aside>
</div></a>`

newListItem.ht = newHTM


cardList.insertAdjacentHTML('beforeend', newHTM)

    
}

Sbmt.addEventListener('click',createCard);*/



/*let idNum = document.getElementById("idnum")
let cardlist= document.getElementById('cardList')

const popidnum=function(){
 
idNum.innerHTML= Array.prototype.indexOf.call(cardList.childNodes)+3}*/