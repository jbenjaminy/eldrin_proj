create table if not exists restaurants (
	id serial primary key,
	name text not null unique,
    hours text,
    neighborhood text,
    address text,
    city text,
    region text,
    country text,
    latitude text,
    longitude text,
	pricing text,
	phone text,
	website text,
	description text
);
