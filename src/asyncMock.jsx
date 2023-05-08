const products = [
    {
        id: '1',
        name: 'Edea Piano',
        price: '240000',
        category: 'botas',
        img: 'https://www.ilpattinoriccione.com.ar/data/thumb_cache/_data_prod_img_piano_jpg_rw_800.jpg',
        stock: 10,
        descripción: 'Bota de patinaje artístico con estilo elegante.'
    },
    {
        id: '2',
        name: 'Roll-Line Mistral',
        price: '240000',
        category: 'plancha',
        img: 'https://www.ilpattinoriccione.com.ar/data/thumb_cache/_data_prod_img_321_jpg_rw_800.jpg',
        stock: 8,
        descripción: 'Plancha de patinaje con precisión y estabilidad.'
    },
    {
        id: '3',
        name: 'Star Design CS 40 diam. 57 mm Blanca',
        price: '240000',
        category: 'ruedas',
        img: 'https://www.ilpattinoriccione.com.ar/data/thumb_cache/_data_prod_img_ruote_star_design_cs_40_diam_57_mm_bianche_jpg_rw_800.jpg',
        stock: 6,
        descripción: 'Ruedas de patinaje con agarre y durabilidad.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 5000)
    })
}