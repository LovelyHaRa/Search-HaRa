import prisma from 'lib/prisma';

export default async (req, res) => {
  const { id } = req.query;

  const recipe = await prisma.recipe.findUnique({
    where: { id: parseInt(id, 10) },
    include: { ingredientList: true },
  });
  res.statusCode = 200;
  res.json(recipe);
};
