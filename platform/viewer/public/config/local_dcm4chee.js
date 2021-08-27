window.config = {
  // default: '/'
  routerBasename: '/',
  // default: ''
  showStudyList: true,
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'http://localhost:8080/api',
        qidoRoot: 'http://localhost:8080/api',
        wadoRoot: 'http://localhost:8080/api',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        requestOptions: {
          auth: 'admin:admin',
        },
      },
    ],
  },
  studyListFunctionsEnabled: true,
};
