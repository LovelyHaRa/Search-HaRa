-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "based" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "tech" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "name" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "recipeId" INTEGER,
    FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe.name_unique" ON "Recipe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient.name_unique" ON "Ingredient"("name");
