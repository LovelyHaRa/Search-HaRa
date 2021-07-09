/*
  Warnings:

  - Added the required column `glass` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "based" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "glass" TEXT NOT NULL,
    "garnish" TEXT NOT NULL
);
INSERT INTO "new_Recipe" ("based", "garnish", "id", "image", "name", "tech") SELECT "based", "garnish", "id", "image", "name", "tech" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe.name_unique" ON "Recipe"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
