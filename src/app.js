/*fonction qui ajoute un fondu noir quand on scroll à la navbar*/
jQuery(function($){
  var $navbar = $('.navbaree');
   

  $(window).scroll(function(event){
    var $current = $(this).scrollTop();
    
    if(   $current > 135 ){ 
      $navbar.addClass('navbaree-scroll');
    }else{
      $navbar.removeClass('navbaree-scroll');
    }
    
   
  });
});


/*apparation du menu pour le téléphone en cliquant sur le menu hamburger et changement de l'icone pour fermer ce menu déroulant*/
jQuery(function($){
const nom = document.getElementById("nom");
const maListe = document.getElementById("ma-liste");
const elementsCliquables = maListe.querySelectorAll("*");//permet de enlever lorsqu'on clique sur n'importe lien de la navbar mobile de la retirer lorsqu'on se dirige vers l'endroit de la page ou une autre page
const menuHamburger = document.querySelector(".menu-hamburger")   
const navLinks = document.querySelector(".div2")
var changement= 0;//variable qui permet le changement

        menuHamburger.addEventListener('click',()=>{  
          if(changement==0){   
          navLinks.classList.toggle('mobile-menu')
          menuHamburger.src= 'src/images/icons8-effacer.svg';
          changement=1;

        }
        else if(changement==1){
          navLinks.classList.toggle('mobile-menu')
          menuHamburger.src= 'src/images/icons8-menu.svg';
          changement=0;
        }
        
        elementsCliquables.forEach(element => {
          element.addEventListener('click', function() {
            
            if(changement==1){
              navLinks.classList.remove('mobile-menu');
              menuHamburger.src= 'src/images/icons8-menu.svg'
              changement=0;
            }
    });
    });
    
  })
  //si on clique sur desperrois il faut enlever la navbar mobile 
  nom.addEventListener("click",function(){
    console.log("test");
    navLinks.classList.remove('mobile-menu');
    menuHamburger.src= 'src/images/icons8-menu.svg'
    changement=0;
  })
});

jQuery(function($){
  const ratio = .1
  const options = {
    root : null,
    rootMargin : '0px',
    threshold: .1
  }
  const handleIntersect = function(entries,observer) {
   entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio ){
      console.log('visible')
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
   })

  }
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r);
  })
  
});




jQuery(function($){
  let buttons = document.querySelectorAll('button');
  let navbar = document.querySelector('.ledivdelanavbar');
  console.log(navbar)
  buttons.forEach(button => {
    let target = button.getAttribute('data-target');
    if (target != null){
        button.addEventListener('click', async event => {
          
            document.querySelector(`#${target}`).classList.toggle('show');
            document.body.style.paddingRight = `${getScrollbarWidth()}px`
            document.body.style.overflow = "hidden"
            navbar.classList.toggle('pasvisible')
            
        });
    }
});
});

jQuery(function($){
    let modal_close_buttons = document.querySelectorAll('.buton-apparition');
    var navbar = document.querySelector('.ledivdelanavbar');
    modal_close_buttons.forEach(button => {
    button.addEventListener('click', async event => {
        
        var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
        document.body.style.paddingRight = `0px`
        document.body.style.overflow="auto";
        document.querySelector('.ninja.show').classList.toggle('show');
        navbar.classList.toggle('pasvisible')

    })
  });
});

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
 
}




function SendMail(params){
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_gba195l","template_usa5kza",params).then(function(res){
    alert("Sucess!" + res.status);
  })
  
}
jQuery (function($){
  var lien = document.querySelectorAll('.lien-compétences-projets');
  let navbar = document.querySelector('.ledivdelanavbar');
  console.log("je te baise");
   lien.forEach(parcour => {
    var pointeur = parcour.getAttribute('data-target');
    console.log("je te baise");
    if(pointeur != null){
      parcour .addEventListener('click',async event => {
        console.log("je te baise");
        document.querySelector(`#${pointeur}`).classList.toggle('show');
        document.body.style.paddingRight = `${getScrollbarWidth()}px`;

        document.body.style.overflow = "hidden";
        navbar.classList.toggle('pasvisible');
      })
    }
  })
});

