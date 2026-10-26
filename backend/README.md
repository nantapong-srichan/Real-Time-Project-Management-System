# PatrolPrep API

NestJS + Prisma API foundation for the roadmap in `Project_Architecture___Roadmap.md`.

## Start

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run start:dev
```

The first implementation slice covers the database contract for users, subscriptions, courses, questions, exams, and attempts. Auth, guards, controllers, and Socket.io should be added on top of this schema.
