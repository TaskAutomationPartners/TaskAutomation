export type Product = {
  uuid: string;
  name: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  price: number;
  rating: number;
};

export const products: Product[] = [
  {
    uuid: "92c68832-39c4-48ea-bb29-cd28366a31c8",
    name: "Porcelain Tray",
    description: "A beautifully crafted porcelain tray for your dining needs.",
    fullDescription: `This exquisite porcelain tray is a must-have for any home. Its elegant design and impeccable craftsmanship make it a versatile piece for various occasions. Whether you want to serve appetizers at a party or display decorative items on your coffee table, this tray will elevate the aesthetics of your space.
  
  Made with high-quality porcelain, this tray is durable and easy to clean. Its minimalist yet sophisticated design ensures it blends seamlessly with any decor style. The smooth, glossy finish adds a touch of luxury to your living space.
  
  Dimensions: 12" x 8".
  
  Add this porcelain tray to your collection today and enjoy its beauty and functionality.`,
    imageUrl:
      "https://cdn.midjourney.com/add63675-15cc-46f1-be06-47518d904f31/0_2.webp",
    price: 179.99,
    rating: 4.8,
  },
  {
    uuid: "e5a45f78-2977-4aaf-91b6-6acfea1ec256",
    name: "Mutton Fat Porcelain Mug",
    description: "A stunning porcelain mug with a unique mutton fat glaze.",
    fullDescription: `Enjoy your morning coffee or tea in style with this exquisite porcelain mug. Its unique mutton fat glaze gives it a distinctive appearance that sets it apart from ordinary mugs. Each mug is handcrafted with care, ensuring both quality and individuality.
  
  The comfortable handle and perfect size make this mug a joy to hold and use. Its smooth interior makes cleaning a breeze. Whether you're sipping your favorite brew or gifting it to someone special, this mug is sure to make every sip a memorable experience.
  
  Capacity: 12 oz.
  
  Elevate your beverage experience with this mutton fat porcelain mug.`,
    imageUrl:
      "https://cdn.midjourney.com/5f6df3a1-ef68-4813-9680-57a4430e0d27/0_1.webp",
    price: 129.99,
    rating: 4.7,
  },
  {
    uuid: "f4cd25b9-0191-4be0-9aae-2a84c91b92fc",
    name: "Celadon Tea Cup",
    description: "An elegant celadon tea cup with intricate designs.",
    fullDescription: `Experience the art of tea with this stunning celadon tea cup. Its elegant design and intricate patterns make it a beautiful addition to your tea collection. Crafted by skilled artisans, each cup reflects the beauty of traditional celadon pottery.
  
  The smooth glaze and comfortable handle enhance your tea-drinking experience. Whether you're savoring green tea, oolong, or herbal infusions, this tea cup elevates the taste and presentation of your favorite brews.
  
  Capacity: 8 oz.
  
  Add a touch of elegance to your tea rituals with this celadon tea cup.`,
    imageUrl:
      "https://cdn.midjourney.com/c45e83bb-23b1-403d-955b-69ef8b58eca3/0_1.webp",
    price: 149.99,
    rating: 4.9,
  },
  {
    uuid: "e2d3f241-cda5-4a06-9a7c-c2023c3668b7",
    name: "Celadon Vase",
    description:
      "A stunning celadon vase for displaying your favorite flowers.",
    fullDescription: `Elevate your floral arrangements with this exquisite celadon vase. Crafted by master artisans, this vase combines the beauty of traditional celadon pottery with modern design. Its unique shape and elegant celadon glaze make it a perfect addition to any room.
  
  The vase is designed to showcase your favorite flowers, whether it's a single stem or a lush bouquet. Its generous size ensures it can hold various types of floral arrangements. Place it on your dining table, mantel, or as a centerpiece to add a touch of sophistication to your decor.
  
  Dimensions: 10" x 5".
  
  Enhance the beauty of your home with this stunning celadon vase.`,
    imageUrl:
      "https://cdn.midjourney.com/ab7564f6-3fcf-496b-93f5-35ae7012fbba/0_3.webp",
    price: 219.99,
    rating: 4.6,
  },
  {
    uuid: "b6b71a69-9db3-408b-9f7c-9d13267c3d31",
    name: "Celadon Pitcher",
    description: "A handcrafted celadon pitcher for elegant beverage service.",
    fullDescription: `Elevate your beverage service with this exquisite celadon pitcher. Made by skilled artisans, this pitcher combines traditional craftsmanship with modern design. Its celadon glaze and sleek lines make it a statement piece for any table setting.
  
  Whether you're serving water, juice, or cocktails, this pitcher adds a touch of elegance to every pour. The ergonomic handle ensures a comfortable grip, while the generous capacity means fewer refills.
  
  Capacity: 64 oz.
  
  Elevate your beverage service with this celadon pitcher.`,
    imageUrl:
      "https://cdn.midjourney.com/4d658eb8-39aa-4762-8455-017be1d15ee8/0_0.webp",
    price: 99.99,
    rating: 4.7,
  },
  {
    uuid: "8110ec85-1d61-4ed0-81b9-b6972cfd8600",
    name: "Celadon Serving Tray",
    description: "A beautiful celadon serving tray for special occasions.",
    fullDescription: `Enhance your hosting experience with this exquisite celadon serving tray. Crafted by skilled artisans, this tray combines traditional celadon pottery with modern design. Its unique shape and elegant celadon glaze make it a perfect addition to any table setting.
  
  Use it to serve appetizers, desserts, or drinks at your next gathering. The generous size ensures you can present a variety of dishes in style. Whether you're hosting a dinner party or a casual get-together, this celadon serving tray adds a touch of sophistication to your events.
  
  Dimensions: 18" x 12".
  
  Elevate your serving presentation with this beautiful celadon tray.`,
    imageUrl:
      "https://cdn.midjourney.com/4198a25b-f964-4241-8b17-5ea13e94d2c5/0_2_384_N.webp?method=shortest&qst=6&quality=15",
    price: 129.99,
    rating: 4.5,
  },
  {
    uuid: "0fb1ef70-3ecf-4b1d-bc96-1e5a4c2d0d42",
    name: "Celadon Tea Pot",
    description: "A classic celadon tea pot for a timeless tea experience.",
    fullDescription: `Step into the world of tea with this classic celadon tea pot. Crafted by experienced artisans, this tea pot combines the beauty of traditional celadon pottery with functionality. Its elegant design and smooth glaze make it a delightful addition to your tea rituals.
  
  The tea pot is designed for brewing and serving your favorite teas with ease. Whether you enjoy green tea, black tea, or herbal infusions, this celadon tea pot enhances the taste and aroma of every cup. It's also easy to clean, ensuring convenience after each use.
  
  Capacity: 24 oz.
  
  Elevate your tea experience with this timeless celadon tea pot.`,
    imageUrl:
      "https://cdn.midjourney.com/e6bed82f-85c1-4588-8b93-2e878112ef48/0_0.webp",
    price: 79.99,
    rating: 4.8,
  },
];

export default products;
