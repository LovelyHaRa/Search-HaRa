import prisma from 'lib/prisma';

export default async (req, res) => {
  const recipe = await prisma.recipe.findMany({
    include: { ingredientList: true },
  });
  res.statusCode = 200;
  res.json(recipe);
};
