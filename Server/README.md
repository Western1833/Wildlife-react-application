1. Run in terminal 'npm i'
2. Important! Create env file 'config.env' in main folder with these variable names:
   - NODE_ENV
   - PORT
   - DATABASE
   - DATABASE_PASSWORD
   - JWT_SECRET
   - JWT_EXPIRES_IN
   - JWT_COOKIE_EXPIRES_IN

   - EMAIL_HOST
   - EMAIL_USERNAME
   - EMAIL_PASSWORD
   - EMAIL_PORT
    Example:
        NODE_ENV=development
        PORT=8000
        DATABASE=mongodb+srv://example:<PASSWORD>@cluster0.example.mongodb.net
        DATABASE_PASSWORD=VfXwXHOkXdB
        JWT_SECRET=364a25263e6f949c0fa6d5df93a84a7c97527253e5869d6
        JWT_EXPIRES_IN=3d
        JWT_COOKIE_EXPIRES_IN=3

        EMAIL_HOST=sandbox.smtp.mailtrap.io
        EMAIL_USERNAME=asdwqeqwe
        EMAIL_PASSWORD=qweqweqweqw
        EMAIL_PORT=25