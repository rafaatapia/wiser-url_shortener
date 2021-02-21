import { createConnections } from 'typeorm';

createConnections().then(con => con[0].runMigrations());
