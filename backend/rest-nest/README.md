Rename .env.example to .env and fill in the values.
npx prisma db push
npm run start:dev
POST-> /auth/register -> {email, password}
POST-> /auth/login -> {email, password}
GET-> /users/profile -> {token}
