-- CreateTable
CREATE TABLE "History" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT '',
    "protocol" TEXT NOT NULL DEFAULT '',
    "hostname" TEXT NOT NULL DEFAULT '',
    "port" TEXT NOT NULL DEFAULT '',
    "pathname" TEXT NOT NULL DEFAULT '',
    "search" TEXT NOT NULL DEFAULT '',
    "hash" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT ''
);
