CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	profileImage TEXT,
	hashedPassword TEXT,
	phoneNumber INTEGER,
	bio TEXT

);


CREATE TABLE IF NOT EXISTS bookPosts (
	id SERIAL PRIMARY KEY,
	title TEXT,
	postimage TEXT,
	content TEXT,
	user_id INTEGER,
  CONSTRAINT fk_useridbp FOREIGN KEY(user_id)
  REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
	id SERIAL PRIMARY KEY,
	bookPosts_id INTEGER,
	user_id INTEGER,
	commentContents TEXT,
	CONSTRAINT fk_useridcomment FOREIGN KEY(user_id)
  REFERENCES users(id) ON DELETE CASCADE
);