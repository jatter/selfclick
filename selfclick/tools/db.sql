-- ----------------------------
-- Table structure for login_info
-- ----------------------------
DROP TABLE IF EXISTS "main"."login_info";
CREATE TABLE "login_info" (
"login_id"  integer PRIMARY KEY AUTOINCREMENT,
"user_id"  varchar NOT NULL,
"user_name"  varchar NOT NULL,
"user_pwd"  varchar NOT NULL,
"platform"  varchar,
"cookie_data"  TEXT,
"login_status"  INTEGER,
"login_time"  datetime NOT NULL,
"agent_id" varchar NOT NULL,
"remark"  varchar,
UNIQUE ("login_id" ASC)
);

-- ----------------------------
-- Table structure for user_agent
-- ----------------------------
DROP TABLE IF EXISTS "main"."user_agent";
CREATE TABLE "user_agent" (
"agent_id"  integer PRIMARY KEY AUTOINCREMENT NOT NULL,
"browser_name"  varchar NOT NULL,
"browser_version"  varchar NOT NULL,
"system_name"  varchar NOT NULL,
"agent_content"  varchar NOT NULL,
"update_time"  datetime NOT NULL,
"remark"  varchar,
UNIQUE ("agent_id" ASC)
);

INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Chrome', '14.0.835.163', 'Win7', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Chrome', '73.0.3683.103', 'Win10', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Chrome', '17.0.963.56', 'MAC', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Firefox', '6.0', 'Win7', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Safari', '5.1', 'Win7', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Safari', '5.1', 'MAC', 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Opera', '11.50', 'Win7', 'Opera/9.80 (Windows NT 6.1; U; zh-cn) Presto/2.9.168 Version/11.50', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('Opera', '11.11', 'MAC', 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('IE9', '9', 'Win7', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; Tablet PC 2.0; .NET4.0E)', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('IE8', '8', 'Win7', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('傲游高速模式', '3.1.7', 'Win7', 'Mozilla/5.0 (Windows; U; Windows NT 6.1; ) AppleWebKit/534.12 (KHTML, like Gecko) Maxthon/3.0 Safari/534.12', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('傲游兼容模式', '3.1.7', 'Win7', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('搜狗兼容模式', '3.0', 'Win7', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('搜狗高速模式', '3.0', 'Win7', 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.33 Safari/534.3 SE 2.X MetaSr 1.0', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('360浏览器', '3.0', 'Win7', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('QQ浏览器极速模式', '6.9', 'Win7', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1 QQBrowser/6.9.11079.201', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('QQ浏览器兼容模式', '6.9', 'Win7', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E) QQBrowser/6.9.11079.201', datetime('now','localtime'));
INSERT INTO "main"."user_agent" ("browser_name", "browser_version", "system_name", "agent_content", "update_time") VALUES ('阿云浏览器', '1.3.0.1724', 'Win7', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)', datetime('now','localtime'));



