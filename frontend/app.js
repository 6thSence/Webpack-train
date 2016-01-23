    alert('click');
    require.ensure([], function(require) {
        let login = require('./login');
    
        login();
    });

alert(myClick);