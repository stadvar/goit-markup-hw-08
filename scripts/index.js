window.onload = () => {
  document.querySelector('.hero__button').onclick = () => {
    document.querySelector('.form__backdrop').classList.remove('is-hidden');
    document.querySelector('body').style.overflow = 'hidden';
  };
  document.querySelector('.modal__button').onclick = () => {
    document.querySelector('.form__backdrop').classList.add('is-hidden');
    document.querySelector('body').style.overflow = 'auto';
  };
  //--------------------
  const policy = document.getElementById('checkbox');
  policy.onchange = () => {
    if (policy.checked) {
      document.getElementById('send').removeAttribute('disabled');
    } else {
      document.getElementById('send').setAttribute('disabled', 'true');
    }
  };
  //------------
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
  //----------------------------------------------------
  let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
  let set = new Set();
  arr.forEach(El => {
    let zet = Array.from(El)
      .sort()
      .map(It => It.toLowerCase())
      .reduce((prVl, Vl) => prVl + Vl);
    console.log(zet);

    set.add(zet);
    // console.log(zet);
  });

  console.log(set);
}; // windows.onload;
