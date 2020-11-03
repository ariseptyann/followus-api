var multer = require('multer');
var MulterGoogleCloudStorage = require('multer-google-storage');
var path = require('path');

var upload = multer({
    storage: MulterGoogleCloudStorage.storageEngine({
        bucket: 'gs://followus-api-2113b.appspot.com',
        keyFilename: path.join(__dirname, 'myprivatekey.json'),
        projectId: 'followus-api-2113b',
        acl: 'publicread',
        contentType: MulterGoogleCloudStorage.AUTO_CONTENT_TYPE
    })
});

module.exports = upload;