import { relations } from "drizzle-orm/relations";
import { usersInAuth, customers, folders, files, workspace, users, products, prices, subscriptions } from "./schema";

export const customersRelations = relations(customers, ({one}) => ({
	usersInAuth: one(usersInAuth, {
		fields: [customers.id],
		references: [usersInAuth.id]
	}),
}));

export const usersInAuthRelations = relations(usersInAuth, ({many}) => ({
	customers: many(customers),
	users: many(users),
	subscriptions: many(subscriptions),
}));

export const filesRelations = relations(files, ({one}) => ({
	folder: one(folders, {
		fields: [files.folderId],
		references: [folders.id]
	}),
	workspace: one(workspace, {
		fields: [files.workspaceId],
		references: [workspace.id]
	}),
}));

export const foldersRelations = relations(folders, ({one, many}) => ({
	files: many(files),
	workspace: one(workspace, {
		fields: [folders.workspaceId],
		references: [workspace.id]
	}),
}));

export const workspaceRelations = relations(workspace, ({many}) => ({
	files: many(files),
	folders: many(folders),
}));

export const usersRelations = relations(users, ({one}) => ({
	usersInAuth: one(usersInAuth, {
		fields: [users.id],
		references: [usersInAuth.id]
	}),
}));

export const pricesRelations = relations(prices, ({one, many}) => ({
	product: one(products, {
		fields: [prices.productId],
		references: [products.id]
	}),
	subscriptions: many(subscriptions),
}));

export const productsRelations = relations(products, ({many}) => ({
	prices: many(prices),
}));

export const subscriptionsRelations = relations(subscriptions, ({one}) => ({
	price: one(prices, {
		fields: [subscriptions.priceId],
		references: [prices.id]
	}),
	usersInAuth: one(usersInAuth, {
		fields: [subscriptions.userId],
		references: [usersInAuth.id]
	}),
}));