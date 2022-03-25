function onClickCupcakesSideMenu(e, eventName, additionalInfoObj) {
  e.preventDefault();
  const startHomepage = window.sessionStorage.getItem('startHomepage');
  const homepageTime = Math.ceil(
    new Date().getTime() - JSON.parse(startHomepage),
  );

  sessionStorage.removeItem('startHomepage');
  sessionStorage.setItem('homepageTime', homepageTime);

  w3_close();
  logEventUtil(eventName, { DV2: homepageTime, ...additionalInfoObj });

  const href = e.currentTarget.getAttribute('href');
  window.location = href;
}
