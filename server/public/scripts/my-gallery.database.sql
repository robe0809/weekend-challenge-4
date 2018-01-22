CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	img VARCHAR (200) NOT NULL,
	description VARCHAR (255) NOT NULL,
	views INT DEFAULT 0,
	likes INT DEFAULT 0
);

CREATE TABLE info (
	id SERIAL PRIMARY KEY, 
	name VARCHAR (25),
	comment VARCHAR (255)
);
INSERT INTO gallery (img, description, views, likes)
VALUES 
('assets/firstSnowSantana.jpg', 'Santana and I during the first big snow of the year in Evergreen, CO.', 0, 0),
('assets/blackCanyonNP.jpg', 'Looking out over the Black Canyon river gorge near Montrose, CO.', 0, 0),
('assets/firstDaySantana.jpg', 'Santana''s first day home.', 0, 0),
('assets/appacheTrailAZ.jpg', 'Stopped for the view along the apache trail through the superstition mountains.', 0, 0),
('assets/floppyEars.JPG', 'Santana on top of Lions Head in Staunton State Park near Conifer, CO', 0, 0),
('assets/horsetooth.jpg', 'the family at Horsetooth resevoir near Fort Collins, CO.', 0, 0),
('assets/jumpDay.jpg', 'Myself, along with two of my closest friends right before plane load.', 0, 0),
('assets/mtAlbert.jpg', 'Adventures around Mt. Albert near Twin Lakes, CO.', 0, 0),
('assets/mtEvans.jpg', 'At the bottom of Mt. Evans (We made it all the way to the top!!)', 0, 0),
('assets/northShore.jpg', 'Adventures with friends along the North Shore.', 0, 0),
('assets/paris.jpg', 'Study abroad vacation in Paris, France.', 0, 0),
('assets/trip.jpg', 'Santana and Cait on top of Lions Head mountain at Staunton State Park near Conifer, CO.', 0, 0);

INSERT INTO info (name, comment) 
VALUES('Ian', 'Nice picture');