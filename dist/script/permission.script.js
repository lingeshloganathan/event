"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = permissions;
const permissionConst = require("./const/permission.const");
const client_1 = require("@prisma/client");
async function permissions() {
    console.log(`Permissions found : `, Object.keys(permissionConst).length);
    const prisma = new client_1.PrismaClient();
    const keys = Object.keys(permissionConst);
    const dbTransaction = [];
    keys.forEach((it) => {
        let name = permissionConst[it];
        dbTransaction.push(prisma.permission.upsert({
            where: { name },
            create: { name },
            update: { name },
            select: { name: true },
        }));
    });
    const result = await prisma.$transaction(dbTransaction);
    console.log(`Permissions loaded successfully : `, result.length);
}
permissions();
//# sourceMappingURL=permission.script.js.map