create table if not exists restaurants (
	id serial primary key,
	name text not null unique,
	description text,
	pricing text,
    hours text,
    phone text,
    website text,
    neighborhood text,
    address text,
    city text,
    region text,
    country text,
    latitude text,
    longitude text
);
