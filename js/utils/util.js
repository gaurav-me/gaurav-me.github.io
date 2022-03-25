const logEventUtil = (eventName, additionalInfoObj) => {
  const searchParams = getSearchParams();
  const arrangement = searchParams.get('arrangement');
  const ivDetailObj = getIVDetails(arrangement);

  loggingjs.logEvent(null, eventName, {
    eventName: eventName,
    // {unique_id, trial_id, iv1_level, iv2_level, iv3_level, DV2, DV3}
    info: {
      trial_id: searchParams.get('trial_id'),
      unique_id: searchParams.get('unique_id'),
      arrangement,
      ...ivDetailObj,
      ...additionalInfoObj,
    },
  });
};

const getArrangementPathname = () => {
  const searchParams = getSearchParams();
  const arrangement = searchParams.get('arrangement');
  const basePath = 'cupcakes';

  switch (arrangement) {
    case '1':
      return `${basePath}/arrangement1.html`;
    case '2':
      return `${basePath}/arrangement2.html`;
    case '3':
      return `${basePath}/arrangement3.html`;
    case '4':
      return `${basePath}/arrangement4.html`;
    case '5':
      return `${basePath}/arrangement5.html`;
    case '6':
      return `${basePath}/arrangement6.html`;
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
