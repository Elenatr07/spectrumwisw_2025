function buyMe(elem){
    let lang = localStorage.getItem('lang');
    if(lang === 'rus'){
        $(elem).attr('href', '../russian/contacts.php')
    } else {
         $(elem).attr('href', '../contacts.php')
    }

}