const logEventUtil = (eventName, additionalInfoObj) => {
  const searchParams = getSearchParams();
  const combination = searchParams.get('combination');
  const ivDetailObj = getIVDetails(combination);

  loggingjs.logEvent(null, eventName, {
    eventName: eventName,
    // Response that needs to be logged: {unique_id, trial_id, iv1_level, iv2_level, iv3_level, DV2, DV3}
    info: {
      trial_id: searchParams.get('trial_id'),
      unique_id: searchParams.get('unique_id'),
      combination,
      ...ivDetailObj,
      ...additionalInfoObj,
    },
  });
};

const getCombinationPathname = () => {
  const searchParams = getSearchParams();
  const combination = searchParams.get('combination');
  const basePath = 'cupcakes';

  switch (combination) {
    case '1':
      return `${basePath}/combination1.html`;
    case '2':
      return `${basePath}/combination2.html`;
    case '3':
      return `${basePath}/combination3.html`;
    case '4':
      return `${basePath}/combination4.html`;
    case '5':
      return `${basePath}/combination5.html`;
    case '6':
      return `${basePath}/combination6.html`;
    default:
      return `${basePath}.html`;
  }
};

const getSearchParams = () => {
  let searchParams = {};
  if ('URLSearchParams' in window) {
    searchParams = new URLSearchParams(window.location.search.substring(1));
  }

  return searchParams;
};

const getIVDetails = (arr) => {
  switch (arr) {
    case '1':
      return {
        iv1_level: 'fixed-sidebar',
        iv2_level: 'no-cat-sidebar',
        iv3_level: '6-cupcakes',
      };
    case '2':
      return {
        iv1_level: 'fixed-sidebar',
        iv2_level: 'no-cat-sidebar',
        iv3_level: '3-cupcakes',
      };
    case '3':
      return {
        iv1_level: 'fixed-sidebar',
        iv2_level: 'cat-sidebar',
        iv3_level: '6-cupcakes',
      };
    case '4':
      return {
        iv1_level: 'fixed-sidebar',
        iv2_level: 'cat-sidebar',
        iv3_level: '3-cupcakes',
      };
    case '5':
      return {
        iv1_level: 'fixed-sidebar',
        iv2_level: 'sub-cat-sidebar',
        iv3_level: '6-cupcakes',
      };
    case '6':
      return {
        iv1_level: 'fixed-sidebar',
        iv2_level: 'sub-cat-sidebar',
        iv3_level: '3-cupcakes',
      };
    default:
      return {};
  }
};

function onClickAddToCart(e, eventName) {
  e.preventDefault();
  const startBrowsing = window.sessionStorage.getItem('startBrowsing');
  const homepageTime = window.sessionStorage.getItem('homepageTime');
  const browsingTime = Math.ceil(
    new Date().getTime() - JSON.parse(startBrowsing),
  );
  sessionStorage.removeItem('startBrowsing');
  sessionStorage.removeItem('homepageTime');

  w3_close();
  logEventUtil(eventName, { DV2: homepageTime, DV3: browsingTime });
  alert(
    'Cupcake added to cart! This is the end of the flow, you may now close this tab.',
  );
}
