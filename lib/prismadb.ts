import {PrismaClient} from '@prisma/client'

const client:any = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV === "production") global.prismadb = client;

export default client