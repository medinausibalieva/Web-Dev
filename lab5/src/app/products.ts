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
    like: 7,
    name: 'Dr. Jart Dermaclear Micro pH ',
    price: 4899,
    description: 'A perfectly balanced cleanser with a neutral pH of 5.5 is suitable for the most sensitive skin, gently, but at the same time thoroughly cleansing it. The gel, when in contact with water, transforms into a light foam.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h68/31800021680158/dr-jart-dermaclear-micro-ph-foam-21900269-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/dr-jart-dermaclear-micro-ph-foam-gel-120-ml-21900269/?c=750000000#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg'
  },
  {
    id: 5,
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
    id: 6,
    category: 1,
    like: 6,
    name: 'Powder Dior Forever Cushion Powder crumbly 20 Light Beige',
    price: 39899,
    description: 'Ultra-thin refreshing loose powder is a persistent translucent perfection of the First* loose powder that fixes makeup and gives the skin a light, velvety glow without powdery effect. Housed in a travel-friendly couture case, this loose powder with a fresh and silky texture harmonizes with the skin tone, providing an even, matte and naturally radiant complexion in any situation. This loose powder, water-based and extract of wild pansies, gently cares for the skin and improves the complexion. Tested by dermatologists - does not cause comedones.',
    link: 'https://kaspi.kz/shop/p/dior-forever-cushion-powder-rassypchataja-20-light-bezhevyi-103939007/?c=750000000#!/item',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hf3/49086897782814/diorskin-forever-cushion-powder-pudra-kuson-20-svetlyj-103939007-1.jpg'
  },
  {
    id: 7,
    category: 1,
    like: 6,
    name: 'Dior Backstage Face Body Foundation Foundation Cream 1.5 50 ml',
    price: 30000,
    description: 'The Dior Backstage Face and Body foundation is the secret weapon of Dior makeup artists to instantly create a flawless complexion. With its help, you can control the intensity of the coating — from shining nude to saturated.',
    link: 'https://kaspi.kz/shop/p/dior-backstage-face-body-foundation-tonal-nyi-krem-1-5n-50-ml-104108912/?c=750000000#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/hbf/49360691593246/backstage-face-body-foundation-104108912-1.jpg'
  },
  {
    id: 8,
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
    id: 9,
    category: 1,
    like: 6,
    name: 'Estee Lauder Advanced Night Repair Facial Serum 50 ml',
    price: 50363,
    description: 'An innovative means of a new generation — Advanced Night Repair serum with a complex action. Enriched with Chronolux ™ Power Signal technology, this serum is deeply and quickly absorbed into the skin. It fights numerous visual signs of skin aging caused by the negative effects of environmental factors. The skin looks smoother, smoother, younger and radiant, its tone is leveled. 8-hour antioxidant protection. 72-hour hydration. Strengthens the protective barrier of the skin after four hours. Light texture without oil content. Apply the serum to clean skin before moisturizer in the morning and evening. The volume of one pipette is sufficient for application. Gently spread the product on the skin of the face and neck.',
    link: 'https://kaspi.kz/shop/p/estee-lauder-advanced-night-repair-syvorotka-dlja-litsa-50-ml-103071574/?c=750000000#!/item',
    rating: 'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h2b/47573306540062/estee-lauder-advanced-night-repair-syvorotka-dla-lica-50-ml-103071574-1.jpg'
  },
  {
    id: 10,
    category: 1,
    like: 6,
    name: 'PANDORA Moments Ring 192312C01-56 17.5 4.76 g silver, zirconium',
    price: 47900,
    description: 'Pandora rings are exquisite handmade jewelry made of precious metals that will add "zest" to the image.',
    link: 'https://kaspi.kz/shop/p/pandora-moments-192312c01-56-17-5-4-76-g-serebro-tsirkonii-106542091/?c=750000000#!/item',
    rating: 'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h88/62637913309214/pandora-moments-192312c01-56-17-5-4-76-g-serebro-cirkonij-106542091-3.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/