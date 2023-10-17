export const OffcanvasData = [];
export const OffcanvasData1 = [
    {
        id: 1,
        title: 'Главная',
        cName: 'has-children',
        submenu: [
            {
                id: 'home-01',
                link: '/',
                text: 'Home V1 - Default',
                cName: '',
            },
            {
                id: 'home-02',
                link: '/home-boxed',
                text: 'Home V2 - Boxed',
                cName: '',
            },
            {
                id: 'home-03',
                link: '/home-carousel',
                text: 'Home V3 - Carousel',
                cName: '',
            },
            {
                id: 'home-04',
                link: '/home-categories',
                text: 'Home V4 - Categories',
                cName: '',
            },
            {
                id: 'home-05',
                link: '/home-collection',
                text: 'Home V5 - Collection',
                cName: '',
            },
        ],
    },
    {
        id: 2,
        title: 'Product',
        cName: 'has-children',
        submenu: [
            {
                id: 'product-pages',
                link: '#',
                text: 'Product Pages',
                cName: 'sub-children',
                levelTwo: [
                    {
                        id: '3-columns',
                        link: '/products/3-columns',
                        text: 'Product 3 Columns',
                    },
                    {
                        id: '4-columns',
                        link: '/products/4-columns',
                        text: 'Product 4 Columns',
                    },
                    {
                        id: '5-columns',
                        link: '/products/5-columns',
                        text: 'Product 5 Columns',
                    },
                    {
                        id: '6-columns',
                        link: '/products/6-columns',
                        text: 'Product 6 Columns',
                    },
                    {
                        id: 'categories',
                        link: '/products/categories',
                        text: 'Product Categories',
                    },
                    {
                        id: 'carousel',
                        link: '/products/carousel',
                        text: 'Product Carousel',
                    },
                    {
                        id: 'left-sidebar',
                        link: '/products/left-sidebar',
                        text: 'Product Left Sidebar',
                    },
                    {
                        id: 'right-sidebar',
                        link: '/products/right-sidebar',
                        text: 'Product Right Sidebar',
                    },
                ],
            },
            {
                id: 'product-related',
                link: '#',
                text: 'Product Related',
                cName: 'sub-children',
                levelTwo: [
                    {
                        id: 'cart',
                        link: '/cart',
                        text: 'Cart',
                    },
                    {
                        id: 'checkout',
                        link: '/checkout',
                        text: 'Checkout',
                    },
                    {
                        id: 'auth',
                        link: '/auth',
                        text: 'Auth',
                    },
                    {
                        id: 'wishlist',
                        link: '/wishlist',
                        text: 'Wishlist',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Pages',
        cName: 'has-children',
        submenu: [
            {
                id: 'other-01',
                link: '/about',
                text: 'О нас',
                cName: '',
            },
            {
                id: 'other-02',
                link: '/contact',
                text: 'Contact',
                cName: '',
            },
            {
                id: 'other-03',
                link: '/faq',
                text: 'FAQ Page',
                cName: '',
            },
            {
                id: 'other-04',
                link: '/coming-soon',
                text: 'Coming Soon',
                cName: '',
            },
        ],
    },
    {
        id: 4,
        title: 'Blogs',
        cName: 'has-children',
        submenu: [
            {
                id: 'blog-default',
                link: '/blogs/default',
                text: 'Blog Default',
                cName: '',
            },
            {
                id: 'blog-list',
                link: '/blogs/list',
                text: 'Blog List',
                cName: '',
            },
            {
                id: 'blog-masonry',
                link: '/blogs/masonry',
                text: 'Blog Masonry',
                cName: '',
            },
            {
                id: 'blog-sidebar',
                link: '/blogs/sidebar',
                text: 'Публикации',
                cName: '',
            },
        ],
    },
];
