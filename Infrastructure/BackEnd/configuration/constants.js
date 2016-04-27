/*
 * Created by Strawmanbobi
 * 2014-08-30
 */

// global constants describes the ability sets of the POEM framework

global.VERSION = "0.0.4";
global.ICODE = "PoEM~ V0.0.4";

// runtime environment
global.ENV = "dev";
global.SERVER = 0;
global.LISTEN_PORT = "80";

// local environment
global.FILE_TEMP_PATH = "";

// db : MySQL
global.MYSQL_DB_SERVER_ADDRESS = "127.0.0.1";
global.MYSQL_DB_NAME = "default_db";
global.MYSQL_DB_USER = "root";
global.MYSQL_DB_PASSWORD = "root";

// db : MongoDB
global.MONGO_DB_URI = "";
global.MONGO_DB_SERVER_ADDRESS = "127.0.0.1";
global.MONGO_DB_NAME = "default_db";
global.MONGO_DB_USER = null;
global.MONGO_DB_PASSWORD = null;

// data_set : Aliyun-OSS
global.OSS_HOST = "oss-cn-hangzhou.aliyuncs.com";
global.OSS_PORT = "80";
global.OSS_APP_ID = "T82nbipHSESmHzd8";
global.OSS_APP_SECRET = "SOweQ8UVwCwPr2NC8EC89EOeKJc5Um";
global.BUCKET_NAME = "strawmanbobi-beats";

// cache : memcached
global.MEMCACHED_HOST = "";
global.MEMCACHED_PORT = "";
global.MEMCACHED_SASL_USER = "";
global.MEMCACHED_SASL_PASSWORD = "";

// sns : Weixin
global.WEIXIN_APP_ID = "";
global.WEIXIN_APP_SECRET = "";
global.WEIXIN_TOKEN = "";

// sns : facebook

// external : python path
global.PYTHON_PATH = "";

// generic server configuration
global.SERVER_LISTEN_PORT = "8080";
global.SERVER_ADDRESS = "127.0.0.1";

// incoming request security configuration
global.APP_ID = "";
global.APP_TOKEN = "";

global.TOKEN_TTL = 60;
