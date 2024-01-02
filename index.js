function popup(index){
  let Popup = document.getElementsByClassName('popupImage')
  Popup[index].style.display= 'flex';
}

window.addEventListener('click', function(event){
  let Popup = document.getElementsByClassName('popupImage');
  for (let i = 0; i < Popup.length; i++) {
      if (Popup[i].contains(event.target)) {
        Popup[i].style.display = 'none';
      }
  }
})