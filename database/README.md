# SSR Database

Basic PSQL database setup for SSR. Requires [Docker Compose][]

# Setup

Start the database by running `docker-compose up` from this directory (add `-d` to make it run in the background)

(Re)build the database by running `npm run db:rebuild` from the project root directory

See `knexfile.js` in the project root directory or `docker-compose.yml` in this directory for database credentials


[Docker Compose]: https://docs.docker.com/compose/
