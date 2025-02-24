"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantSelect = exports.TicketSelect = exports.EventSelect = exports.StallSelect = exports.GuestSelect = exports.CategorySelect = exports.UserUpdateSelect = exports.UserSelect = exports.VenueSelect = void 0;
exports.VenueSelect = {
    id: true,
    name: true,
    address: true,
    capacity: true,
};
exports.UserSelect = {
    id: true,
    phoneNumber: true,
    name: true,
    role: {
        select: {
            id: true,
            name: true,
            permissions: {
                select: {
                    name: true,
                },
            },
        },
    },
};
exports.UserUpdateSelect = {
    id: true,
    name: true,
    email: true,
    gender: true,
};
exports.CategorySelect = {
    id: true,
    name: true,
    parentId: true,
    subcategories: {
        select: {
            id: true,
            name: true,
        },
    },
};
exports.GuestSelect = {
    id: true,
    name: true,
};
exports.StallSelect = {
    id: true,
    name: true,
};
exports.EventSelect = {
    id: true,
    name: true,
    description: true,
    eventType: true,
    registrationType: true,
    date: true,
    venue: {
        select: {
            id: true,
            name: true,
            address: true,
            capacity: true,
        },
    },
    category: {
        select: {
            name: true,
            subcategories: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    },
    recurringDates: true,
};
exports.TicketSelect = {
    id: true,
    qrCode: true,
    status: true,
    event: {
        select: {
            eventType: true,
        },
    },
    selectedDates: true,
};
exports.ParticipantSelect = {
    id: true,
    name: true,
    status: true,
    ticket: {
        select: {
            id: true,
            qrCode: true,
            status: true,
            selectedDates: true,
        },
    },
};
//# sourceMappingURL=queryselect.js.map