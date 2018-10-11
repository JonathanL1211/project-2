CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	profileImage, TEXT,
	hashedPassword TEXT,
	phoneNumber INTEGER,
	bio TEXT

);


CREATE TABLE IF NOT EXISTS bookPosts (
	id SERIAL PRIMARY KEY,
	title TEXT,
	postimage TEXT,
	content TEXT,
	user_id INTEGER
);

CREATE TABLE IF NOT EXISTS comments (
	id SERIAL PRIMARY KEY,
	bookPosts_id INTEGER,
	commentContents TEXT
);