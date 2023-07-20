/*
  Warnings:

  - You are about to drop the column `url` on the `History` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_History" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT '',
    "protocol" TEXT NOT NULL DEFAULT '',
    "hostname" TEXT NOT NULL DEFAULT '',
    "port" TEXT NOT NULL DEFAULT '',
    "pathname" TEXT NOT NULL DEFAULT '',
    "search" TEXT NOT NULL DEFAULT '',
    "hash" TEXT NOT NULL DEFAULT '',
    "href" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_History" ("hash", "hostname", "id", "pathname", "port", "protocol", "search", "title") SELECT "hash", "hostname", "id", "pathname", "port", "protocol", "search", "title" FROM "History";
DROP TABLE "History";
ALTER TABLE "new_History" RENAME TO "History";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
