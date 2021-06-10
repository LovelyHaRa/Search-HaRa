export default (req, res) => {
  res.statusCode = 200;
  res.json({
    name: 'Martini',
    based: 'Gin',
    image: 'https://picsum.photos/seed/picsum/200/200',
    tech: 'Stur',
    ingredientList: [
      { name: 'Dry Gin', volume: '2', unit: 'oz' },
      { name: 'Dry Vermouth', volume: '1/3', unit: 'oz' },
    ],
  });
};
