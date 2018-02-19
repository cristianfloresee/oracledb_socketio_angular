var oracledb = require('oracledb');

oracledb.getConnection(
    {
        user: 'hr',
        password: 'oracle',
        connectString: 'localhost/xe',
        /*
        poolMax: 44,
        poolMin: 2,
        poolIncrement: 5,
        poolTimeout: 4
        */
    },
    function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('database connection was successful!');

        connection.close(
            function (err) {
                if (err) {
                    console.error(err.message);
                    return;
                }
            });
    });
