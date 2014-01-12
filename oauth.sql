CREATE TABLE `oauth_access_tokens` (
  `access_token` text NOT NULL,
  `client_id` text NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `expires` timestamp NOT NULL,
  PRIMARY KEY (`access_token`(255))
);

CREATE TABLE `oauth_clients` (
  `client_id` text NOT NULL,
  `client_secret` text NOT NULL,
  `redirect_uri` text NOT NULL,
  PRIMARY KEY (`client_id`(255),`client_secret`(255))
);

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `type` enum('student','teacher','admin') DEFAULT 'student',
  `firstname` text,
  `lastname` text,
  PRIMARY KEY (`id`),
  KEY `users_username_password` (`username`(255),`password`(255))
); 

