const logEventUtil = (eventName, additionalInfoObj) => {
  const searchParams = getSearchParams();

  loggingjs.logEvent(null, eventName, {
    eventName: eventName,
    info: {
      input: searchParams.get('input'),
      unique_id: searchParams.get('unique_id'),
      interface: 'new',
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
