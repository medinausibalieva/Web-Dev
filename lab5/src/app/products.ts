export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category : number,
  like: number,
  image: string,
  link: string,
  rating: string;
}

export const products = [
  {
    id: 1,
    category: 1,
    like: 5,
    name: 'Estee Lauder Double Wear foundation cream',
    price: 23558,
    description: 'Double Wear foundation perfectly copes with several tasks at once – it evens out the tone, makes the skin velvety and protects from the harmful effects of the environment. To achieve this effect, the brand\'s experts have created a special oil-free formula that regulates the production of sebum and does not clog pores. SPF 10 filters are responsible for sun protection.',
    link: 'https://kaspi.kz/shop/p/estee-lauder-double-wear-tonal-nyi-krem-2n1-desert-beige-30-ml-103023160/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h00/47483426897950/estee-lauder-tonalnyj-krem-2n1-desert-beige-30-ml-103023160-1.jpg',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg'
  },
  {
    id: 2,
    category: 1,
    like: 4,
    name: 'Dior Addict Lip Maximizer lip gloss',
    price: 29469,
    description: 'Dior presents a revolutionary formula for lip care - lip gloss with active collagen, thanks to which instant volume is achieved. You can use it yourself or apply it on lipstick to fix the shine and give volume.',
    link: 'https://kaspi.kz/shop/p/dior-addict-lip-maximizer-blesk-dlja-gub-rozovyi-038-rose-nude-108765604/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/he0/68676048191518/dior-addict-lip-maximizer-108765604-1.jpg',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg'
  },
  {
    id: 3,
    category: 1,
    like: 6,
    name: 'GIVENCHY L\'Interdit',
    price: 27255,
    description: 'L\'Interdit 2018 is an elite perfume water with a floral woody musk fragrance for women, created in 2018 by perfumers Anne Flipo, Dominique Ropion and Fanny Bal for the famous French fashion house Givenchy. Sophisticated, luxurious women\'s perfume L\'Interdit 2018 is a new modern version of the legendary fragrance L\'Interdit 1957 release dedicated to the famous actress Audrey Hepburn. The fragrance opens with exquisite honey-spicy accents of jasmine sambac and a fragrant light smell of orange color, which harmoniously intertwine in the middle notes of the perfume composition with an intense sweet rich aroma of tuberose, giving the whole perfume a refined floral lily-hyacinth shade.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/hf1/33549051854878/givenchy-l-interdit-2018-edp-35-ml-101018713-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/givenchy-l-interdit-2018-parfjumernaja-voda-edp-35-ml-101018713/?c=750000000#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg'
  },
  {
    id: 4,
    category: 1,
    like: 10,
    name: 'GUCCI Bloom Nettare Di Fiori perfume water',
    price: 86403,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hdd/31738707345438/gucci-bloom-nettare-di-fiori-edp-100-ml-17301935-1.jpg',
    description: 'Infinitely sensual and feminine, the new fragrance of Gucci Bloom Nettare di Fiori has absorbed the unique fragrance of blooming flowers — rich and charming. Feminine notes of rose and osmanthus are intertwined with heart notes, jasmine, Rangoon liana and tuberose. A floral bouquet here sounds even more feminine. Woody chords are combined with sensual top notes of ginger and rose, and the softness and mystery of the fragrance is given by the base notes of patchouli, musk and osmanthus.',
    link: 'https://kaspi.kz/shop/p/gucci-bloom-nettare-di-fiori-parfjumernaja-voda-edp-100-ml-17301935/?c=750000000#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg'
  },
  {
    id: 5,
    category: 1,
    like: 6,
    name: 'Dior Sauvage perfume water EDP 100 ml',
    price: 60625,
    description: 'Sauvage Eau de Parfum Christian Dior is a fragrance for men, it belongs to the oriental fougere group. This new edition- Sauvage Eau de Parfum was released in 2018. Perfumer- Francois Demachy. Top note is Bergamot, middle notes are Lavender, Chinese pepper, Star Anise and Nutmeg, base notes are Ambroxan and Vanilla.',
    link: 'https://kaspi.kz/shop/p/dior-sauvage-parfjumernaja-voda-edp-100-ml-100178749/?c=750000000#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/hfb/32602046038046/christian-dior-sauvage-edp-100-ml-100178749-1-Container.jpg'
  },
  {
    id: 6,
    category: 2,
    like: 15,
    name: 'Apple iPhone 14 128Gb Blue Smartphone',
    price: 420619,
    description: 'iPhone 14 has the same superspeedy chip that\'s in iPhone 13 Pro. A15 Bionic, with a 5‑core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultrafluid. An updated internal design delivers better thermal efficiency, so you can stay in the action longer.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/hd8/63073057407006/apple-iphone-14-128gb-goluboj-106363150-2.jpg'
  },
  {
    id: 7,
    category: 2,
    like: 22,
    name: 'Apple iPhone 13 128Gb Pink Smartphone',
    price: 373599,
    description: 'Apple has developed a completely new camera layout and deployed the lenses at 45 degrees. Thanks to this, the best system of two cameras with an enlarged matrix of a wide-angle camera fit inside the case. In addition, space was freed up for an optical image stabilization system with a matrix shift, and the speed of the matrix on an ultra-wide-angle camera increased. The new ultra-wide-angle camera sees more detail in the dark areas of the image. The ultra-wide angle camera also provides a large field of view, even when you are very close to the subject. So you don\'t have to step back to get everything you need into the frame.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg'
  },
  {
    id: 8,
    category: 2,
    like: 4,
    name: 'Apple iPhone 14 Pro Max 256Gb Purple Smartphone',
    price: 689888,
    description: 'Phone 14 Pro Max models look like the iPhone 13 Pro models with flat edges, stainless steel enclosure, a textured matte glass back, IP68 water resistance, and a Ceramic Shield-protected display, but the camera bumps are larger to accommodate new lenses, and the display has also changed',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item0',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg'
  },
  {
    id: 9,
    category: 2,
    like: 14,
    name: 'Apple iPhone 13 128Gb Smartphone Blue',
    price: 369500,
    description: 'Apple iPhone 13 received a 6.1—inch Super Retina XDR display, which is characterized by an incredibly high pixel density - photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display. Apple has developed a completely new camera layout and deployed the lenses at 45 degrees. Thanks to this, the best system of two cameras with an enlarged matrix of a wide-angle camera fit inside the case. In addition, space was freed up for an optical image stabilization system with a matrix shift, and the speed of the matrix on an ultra-wide-angle camera increased. The new ultra-wide-angle camera sees more detail in the dark areas of the image. The ultra-wide angle camera also provides a large field of view, even when you are very close to the subject. So you don\'t have to step back to get everything you need into the frame.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hfd/46392662130718/apple-iphone-13-128gb-sinij-102298364-3-Container.jpg'
  },
  {
    id: 10,
    category: 2,
    like: 23,
    name: 'Apple iPhone 11 128Gb Slim Box Smartphone White',
    price: 299600,
    description: 'The functional and stylish Apple iPhone 11 smartphone in a metal case is capable of providing not only everyday communication and entertainment, but also productive work. The image on the screen of a smartphone with a diagonal of 6.1 inches has amazing detail and color reproduction. Oleophobic coating eliminates heavy contamination of the screen. The iPhone 11 has a powerful 6-core A13 Bionic processor that performs any tasks quickly and smoothly. In addition, it works as energy efficient as possible, allowing you to save battery power. Hardware and software work together smoothly, so the battery charge is used with maximum efficiency. A non-removable battery with a capacity of 3110 mAh supports wireless charging, which will make this process easier and faster. The new dual camera system allows you to take photos with a wide and ultra-wide viewing angle. An updated interface and a new ultra-wide-angle camera will allow you to see and shoot what is happening outside the frame.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hb4/33208264228894/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg'
  },
  {
    id: 11,
    category: 3,
    like: 1,
    name: 'Acron Case for Apple iPhone 14 Plus Purple',
    price: 1170,
    description: 'A phone case is a cover that protects the outside of your phone and acts as a guard to your gadget against scratches, grime, and other risks. That means it protects your electronics and extends the longevity of the device as opposed to ending its lifespan early.',
    link: 'https://kaspi.kz/shop/p/acron-dlja-apple-iphone-14-plus-fioletovyi-108054487/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/heb/66918311133214/chekhol-acron-dlya-iphone-14-plus-soft-touch-fioletovyi-108054487-1.jpg'
  },
  {
    id: 12,
    category: 3,
    like: 2,
    name: 'Case Market Case for Apple iPhone 12 Multicolor',
    price: 4550,
    description: 'Type Case - with stand, Compatible - Apple Brand, Material - silicon , Features - Shockproof, Compatible models - of iPhone 12, The color of the cover - is a multicolored smile',
    link: 'https://kaspi.kz/shop/p/chehol-market-dlja-apple-iphone-12-mnogotsvetnyi-108289253/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h88/67479273734174/chekhol-market-dlya-apple-iphone-12-mnogotsvetnyi-108289253-1.jpg'
  },
  {
    id: 13,
    category: 3,
    like: 20,
    name: 'Acron Case for Apple iPhone 14 Red',
    price: 2590,
    description: 'Type - overlay,  Compatible -  Apple Brand, Material - silicon, Compatible models -  iPhone 14, The color of the case - is red',
    link: 'https://kaspi.kz/shop/p/acron-dlja-apple-iphone-14-krasnyi-108054531/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/hb7/66919070564382/chekhol-acron-dlya-iphone-14-soft-touch-krasnyi-108054531-1.jpg'
  },
  {
    id: 14,
    category: 3,
    like: 7,
    name: 'SeeDoo Defense Clear Case for iPhone 14 Pro. Transparent',
    price: 989,
    description: 'A phone case is a cover that protects the outside of your phone and acts as a guard to your gadget against scratches, grime, and other risks. That means it protects your electronics and extends the longevity of the device as opposed to ending its lifespan early.',
    link: 'https://kaspi.kz/shop/p/chehol-seedoo-defense-clear-case-dlja-iphone-14-pro-prozrachnyi-107118653/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h61/63805367812126/chekhol-seedoo-defense-clear-case-dlya-iphone-14-pro-prozrachnyi-107118653-1.jpg'
  },
  {
    id: 15,
    category: 3,
    like: 21,
    name: 'Royal Touch Case Paris Case under Varnish for Iphone 14',
    price: 13000,
    description: 'A phone case is a cover that protects the outside of your phone and acts as a guard to your gadget against scratches, grime, and other risks. That means it protects your electronics and extends the longevity of the device as opposed to ending its lifespan early.',
    link: 'https://kaspi.kz/shop/p/royal-touch-chehol-parizh-pod-lakom-na-iphone-14-108110211/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h93/67039926747166/royal-touch-dlya-apple-iphone-13-pro-mul-tikolor-108110211-1.jpg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
