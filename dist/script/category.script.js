"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = categories;
const client_1 = require("@prisma/client");
const category_data_1 = require("./data/category.data");
async function categories() {
    const prisma = new client_1.PrismaClient();
    const dbTransaction = [];
    for (const category of category_data_1.categoryData) {
        let { name, parentId, subcategories } = category;
        let data = {
            name,
            id: parentId,
            subcategories: {
                connectOrCreate: subcategories.map((subcategory) => ({
                    where: { name: subcategory.name },
                    create: { name: subcategory.name },
                })),
            },
        };
        dbTransaction.push(prisma.category.upsert({
            where: { id: parentId },
            create: data,
            update: data,
        }));
    }
    const result = await prisma.$transaction(dbTransaction);
    console.log(`Categories created successfully: ${result.length}`);
}
categories();
//# sourceMappingURL=category.script.js.map