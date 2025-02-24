"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const common_1 = require("@nestjs/common");
const Permissions = (...args) => (0, common_1.SetMetadata)('permissions', args);
exports.Permissions = Permissions;
//# sourceMappingURL=permission.js.map