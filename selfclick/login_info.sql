/*
Navicat SQLite Data Transfer

Source Server         : addb
Source Server Version : 30714
Source Host           : :0

Target Server Type    : SQLite
Target Server Version : 30714
File Encoding         : 65001

Date: 2019-08-29 22:34:54
*/

PRAGMA foreign_keys = OFF;

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
"remark"  varchar,
UNIQUE ("login_id" ASC)
);
