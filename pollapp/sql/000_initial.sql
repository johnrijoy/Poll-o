DROP TABLE IF EXISTS polldata;
DROP TABLE IF EXISTS polloption;
DROP TABLE IF EXISTS userpoll;
DROP TABLE IF EXISTS userattempt;
DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        pass TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
);
INSERT INTO userdata(name, pass, email) VALUES ('admin', 'admin', 'admin@admin.com');

CREATE TABLE polldata (
	id INTEGER PRIMARY KEY,
	question TEXT NOT NULL,
	closedate DATE
);

CREATE TABLE polloption (
	id INTEGER PRIMARY KEY,
	polldata_id INTEGER NOT NULL,
	option TEXT NOT NULL,
	votes INTEGER DEFAULT 0 NOT NULL,
	FOREIGN KEY (polldata_id) references polldata(id) ON DELETE CASCADE
);

CREATE TABLE userpoll (
	poll_id INTEGER,
	user_id INTEGER,
	FOREIGN KEY (poll_id) references polldata(id) ON DELETE CASCADE,
	FOREIGN KEY (user_id) references userdata(id) ON DELETE CASCADE
);

CREATE TABLE userattempt (
	poll_id INTEGER,
	user_id INTEGER,
	FOREIGN KEY (poll_id) references polldata(id) ON DELETE CASCADE,
	FOREIGN KEY (user_id) references userdata(id) ON DELETE CASCADE
);
