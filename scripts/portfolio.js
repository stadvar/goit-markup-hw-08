window.onload = () => {
  let bttns = document.querySelectorAll('.pnav__buton');
  let cards = document.querySelectorAll('.pcards__item');

  for (let i = 0; i < bttns.length; i++) {
    let Bdata = bttns[i].dataset.b;

    bttns[i].onclick = () => {
      for (let i = 0; i < cards.length; i++) {
        let Cdata = cards[i].dataset.c;

        if (Cdata == Bdata || Bdata == 'all') {
          //   //элемент.classList.toggle('класс');
          let aval = cards[i].classList.contains('hidden');

          if (aval) {
            cards[i].classList.remove('hidden');
          }
        } else {
          cards[i].classList.add('hidden');
        }
        // cards[i].classList.toggle('hidden');}
      }
    };
  }
  //----
  const burger = document.querySelector('.burger');
  burger.onclick = () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    // console.log(expanded);
    burger.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', !expanded);
    document.querySelector('.header__menu').classList.toggle('is-open');
    //--
    if (burger.classList.contains('is-open')) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  };
};
