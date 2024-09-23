import { sequelize, User, Post } from './models.js';

// Sync all models with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.error('Error syncing database:', err));

// Export models for use in other files
export { User, Post };


