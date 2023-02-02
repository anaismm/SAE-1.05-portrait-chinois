//BOUCLE CREATIONS DE MES SECTIONS


var numCase=0;
var compteur=1

data.forEach(function(element){
    
    document.querySelector('.liste-analogies').innerHTML=document.querySelector('.liste-analogies').innerHTML+'<section class=\"sec\" id=\"sec'+numCase+'\"><h2>Si j’étais ' + "<span>" + element["analogie"] + "</span>" + ', je serais ' + "<span>" + element["valeurAnalogie"] + "</span>" + '.</h2>\n<img class=\"images images'+numCase+'\" src="' + element["image"] + '"> \n<p class=\"texte\">' + element["explication"] + '</p>\n<a href=\"#sec'+compteur+'\" class=\"bas\"><img src=\"img/bas.png\"></a></section>'

    numCase++
    compteur++
})



// Création d'une section quand on rentre les infos 
var claviervaleurAnalogie=document.querySelector('#valeurAnalogie')
var clavierexplication=document.querySelector('#explication')
var clavierimage=document.querySelector('#image')

var clavieranalogie=document.querySelector('#analogie')

var touschamps=document.querySelectorAll('input,textarea')
touschamps.forEach(function(element){
    element.addEventListener('keyup',function(e){
    console.log(clavieranalogie.value)
        document.querySelector('.ajout').innerHTML='<section class=\"sec\"><h2>Si j’étais ' +"<span>"+ clavieranalogie.value +  "</span>"+', je serais ' +"<span>" + claviervaleurAnalogie.value + "</span>" + '.</h2>\n<img class=\"images images'+numCase+'\" src="' + clavierimage.value + '"> \n<p class=\"texte\">' + clavierexplication.value + '</p></section>'
    })
}) 






//DETECTION DU CLIC SUR BOUTON ENVOI DU FORMULAIRE 
var mail=document.querySelector('#mail')
var sectionajout=document.querySelector('.ajout')


var btnenvoi=document.querySelector('.envoi')
btnenvoi.addEventListener('click',function(){
    console.log('https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=anais&courriel=' + mail.value + '&message= Si j étais '+ clavieranalogie.value+ ', je serais'+ claviervaleurAnalogie.value+ 'parce que ' + clavierexplication.value+ 'image:'+ clavierimage.value)

    var url='https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=anais&courriel=' + mail.value + '&message= Si j étais '+ clavieranalogie.value + ',  je serais  '+ claviervaleurAnalogie.value+ '  parce que ' + clavierexplication.value+ ' ; image : '+ clavierimage.value

    fetch(url).then(function(response) {
        response.json().then(function(data){
            console.log("Réponse reçue : ")
            console.log(data);
        })
    })
    
    sectionajout.scrollIntoView()

    

})



// BOUTON INFOS
var fenetre=document.querySelector('.btn-info')

var btninfo=document.querySelector('.infos')
console.log(btninfo)
btninfo.addEventListener('click',function(afficher){
    fenetre.style.display='block'

})


//BOUTON FERMER LES INFOS
var croix=document.querySelector('.annuler')
console.log(croix)
croix.addEventListener('click', function(cacher){
    fenetre.style.display='none'
})






//MENTIONS LEGALES
var footerelement=document.querySelector('.volet-invisible')
console.log(footerelement)

var mentions=document.querySelector('h4')
console.log(mentions)
mentions.addEventListener('click', function(montrer){
    if(footerelement.style.display=='block'){
        footerelement.style.display='none';
    }else{
        footerelement.style.display='block';
}
})


// ANIMATION DU TITRE
const txtAnim=document.querySelector('h1');

new Typewriter(txtAnim,{
    deleteSpeed:10
})
.typeString('Mon portrait Chinois')
.pauseFor(600)
.deleteChars(20)
.typeString('我的中國畫像')
.pauseFor(600)
.deleteChars(7)
.typeString('Mon portrait Chinois')
.start()


//SCROLL DES TITRES 
ScrollReveal({     
    reset: true,     
    distance: '60px',     
    duration: 1000,   });  


ScrollReveal().reveal('h2', { delay: 200, origin: 'bottom' });  
ScrollReveal().reveal('.prenom', { delay: 200, origin: 'left' });  



