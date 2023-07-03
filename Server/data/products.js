const products = [
    {
        name: "Levents® Jogger Tee",
        MainName: "LEVENTS® JOGGER TEE/ WHITE",
        price: '390.000',
        MainImage: "/images/LEVENT-JOGGER-TEE-WHITE-400x500.jpg",
        color: ['BLUE', 'WHITE'],
        size: ['SIZE 1', 'SIZE 2'],
        image: {
            blue: 'https://levents.asia/wp-content/uploads/2023/05/z4366452808032_68dbd6a56705b002b265d200362442a9-150x150.jpg',
            white: 'https://levents.asia/wp-content/uploads/2023/05/z4366453314543_2510b1827ca2aeb5f73d82412b5e639d-150x150.jpg',
        },
        description: {
            material: 'Chất liệu: Lì Ven Compact',
            size: 'Kích cỡ: 1/2'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn.',
            size1: 'Kích cỡ 1: Chiều cao từ 1m50 – 1m65, cân nặng trên 55kg',
            size2: 'Kích cỡ 2: Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            image: 'https://levents.asia/wp-content/uploads/2022/07/Over-Tee-2022.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Áo thun in hình'
    },
    {
        name: "Levents® Jogger Tee",
        MainName: "LEVENTS® JOGGER TEE/ GREEN",
        price: '390.000',
        MainImage: "/images/LEVENT-JOGGER-TEE-GREEN400x500.jpg",
        color: ['BLUE', 'WHITE', 'GREEN'],
        size: ['SIZE 1', 'SIZE 2'],
        image: {
            blue: 'https://levents.asia/wp-content/uploads/2023/05/z4366452808032_68dbd6a56705b002b265d200362442a9-150x150.jpg',
            white: 'https://levents.asia/wp-content/uploads/2023/05/z4366453314543_2510b1827ca2aeb5f73d82412b5e639d-150x150.jpg',
        },
        description: {
            material: 'Chất liệu: Lì Ven Compact',
            size: 'Kích cỡ: 1/2'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn.',
            size1: 'Kích cỡ 1: Chiều cao từ 1m50 – 1m65, cân nặng trên 55kg',
            size2: 'Kích cỡ 2: Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            image: 'https://levents.asia/wp-content/uploads/2022/07/Over-Tee-2022.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Áo thun in hình'
    },
    {
        name: "Levents® Jogger Tee",
        MainName: "LEVENTS® JOGGER TEE/ BLUE",
        price: '390.000',
        MainImage: "/images/LEVENTS-JOGGER-TEE-BLUE-400x500.jpg",
        color: ['BLUE', 'WHITE', 'GREEN'],
        size: ['SIZE 1', 'SIZE 2'],
        image: {
            blue: 'https://levents.asia/wp-content/uploads/2023/05/z4366452808032_68dbd6a56705b002b265d200362442a9-150x150.jpg',
            white: 'https://levents.asia/wp-content/uploads/2023/05/z4366453314543_2510b1827ca2aeb5f73d82412b5e639d-150x150.jpg',
        },
        description: {
            material: 'Chất liệu: Lì Ven Compact',
            size: 'Kích cỡ: 1/2'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn.',
            size1: 'Kích cỡ 1: Chiều cao từ 1m50 – 1m65, cân nặng trên 55kg',
            size2: 'Kích cỡ 2: Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            image: 'https://levents.asia/wp-content/uploads/2022/07/Over-Tee-2022.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Áo thun in hình'
    },
    {
        name: "LEVENTS® MINI POPULAR LOGO",
        MainName: 'LEVENTS® MINI POPULAR LOGO/ BLACK',
        MainImage: '/images/BASIC-ID-TEE-D1-1-400x500.jpg',
        price: '350.000',
        color: ['BLACK', 'WHITE'],
        size: ['SIZE 1', 'SIZE 2'],
        image: {
            black: 'https://levents.asia/wp-content/uploads/2022/06/BASIC-ID-TEE-D1-1-150x150.jpg',
            white: 'https://levents.asia/wp-content/uploads/2022/06/BASIC-ID-TEE-W1-2-150x150.jpg'
        },
        description: {
            material: 'LÌ VEN ORIGINAL 2.0 – Phiên bản bề mặt vải có lông, khắc phục tình trạng bị nhăn của sản phẩm',
            material1: 'Lì ven Original không lông được áp dụng cho toàn bộ sản phẩm áo thun màu đen',
            material2: 'Lì ven Original 2.0 có lông vẫn được áp dụng cho các áo thun màu khác',
            size: 'Kích cỡ: 1/2/'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn.',
            size1: 'Kích cỡ 1: Chiều cao từ 1m50 – 1m65, cân nặng trên 55kg',
            size2: 'Kích cỡ 2: Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            image: 'https://levents.asia/wp-content/uploads/2022/07/Over-Tee-2022.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Áo thun trơn'
    },
    {
        name: "LEVENTS® MINI POPULAR LOGO",
        MainName: 'LEVENTS® MINI POPULAR LOGO/ WHITE',
        MainImage: '/images/BASIC-ID-TEE-W1-2-400x500.jpg',
        price: '350.000',
        color: ['BLACK', 'WHITE'],
        size: ['SIZE 1', 'SIZE 2'],
        image: {
            black: 'https://levents.asia/wp-content/uploads/2022/06/BASIC-ID-TEE-D1-1-150x150.jpg',
            white: 'https://levents.asia/wp-content/uploads/2022/06/BASIC-ID-TEE-W1-2-150x150.jpg'
        },
        description: {
            material: 'LÌ VEN ORIGINAL 2.0 – Phiên bản bề mặt vải có lông, khắc phục tình trạng bị nhăn của sản phẩm',
            material1: 'Lì ven Original không lông được áp dụng cho toàn bộ sản phẩm áo thun màu đen',
            material2: 'Lì ven Original 2.0 có lông vẫn được áp dụng cho các áo thun màu khác',
            size: 'Kích cỡ: 1/2/'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn.',
            size1: 'Kích cỡ 1: Chiều cao từ 1m50 – 1m65, cân nặng trên 55kg',
            size2: 'Kích cỡ 2: Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            image: 'https://levents.asia/wp-content/uploads/2022/07/Over-Tee-2022.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Áo thun trơn'
    },
    {
        name: "Levents® Company and Mates Cap",
        MainName: "LEVENTS® COMPANY AND MATES CAP/ GREEN",
        MainImage: "/images/LEVENTS-COMPANY-AND-MATES-CAP-GREEN-400x500.jpg",
        price: '320.000',
        color: ['GREEN', 'CREAM'],
        size: ['One size'],
        image: {
            green: 'https://levents.asia/wp-content/uploads/2023/04/z4352845789744_1343e141d21cfb1f6cd488bbc486ac7c-150x150.jpg',
            cream: 'https://levents.asia/wp-content/uploads/2023/04/z4352846039397_f2df2704e3a490632433de218afbfb93-150x150.jpg',
        },
        description: {
            material: 'Khaki',
            size: 'Sản phẩm có một kích cỡ'
        },
        sizeChart: {
            description: 'Sản phẩm có một kích cỡ',
            size: 'Sản phẩm có một kích cỡ',
            image: 'https://levents.asia/wp-content/uploads/2022/06/Cap-768x358.jpg'
        },
        countInStock: 100,
        numReviews: 50,
        catagory: 'nón'
    },
    {
        name: "Levents® Company and Mates Cap",
        MainName: "LEVENTS® COMPANY AND MATES CAP/ CREAM",
        MainImage: "/images/LEVENTS-COMPANY-AND-MATES-CAP-CREAM-400x500.jpg",
        price: '320.000',
        color: ['GREEN', 'CREAM'],
        size: ['One size'],
        image: {
            green: 'https://levents.asia/wp-content/uploads/2023/04/z4352845789744_1343e141d21cfb1f6cd488bbc486ac7c-150x150.jpg',
            cream: 'https://levents.asia/wp-content/uploads/2023/04/z4352846039397_f2df2704e3a490632433de218afbfb93-150x150.jpg',
        },
        description: {
            material: 'Khaki',
            size: 'Sản phẩm có một kích cỡ'
        },
        sizeChart: {
            description: 'Sản phẩm có một kích cỡ',
            size: 'Sản phẩm có một kích cỡ',
            image: 'https://levents.asia/wp-content/uploads/2022/06/Cap-768x358.jpg'
        },
        countInStock: 100,
        numReviews: 50,
        catagory: 'nón'
    },
    {
        name: "LEVENTS® BASIC BOXY HOODIE",
        MainName: "LEVENTS® BASIC BOXY HOODIE/ BLACK",
        MainImage: "/images/LEVENTS-BASIC-BOXY-HOODIE-BLACK-400x500.jpg",
        price: '600.000',
        color: ['BLACK', 'WHITE'],
        size: ['SIZE 2', 'SIZE 3'],
        image: {
            black: 'https://levents.asia/wp-content/uploads/2022/12/z4063774825769_36121ac80608add5aad1caabbdf6aed9-150x150.jpg',
            white: 'https://levents.asia/wp-content/uploads/2022/12/z4063774821031_5da0f70913bea9f52adcb9ba980297a4-150x150.jpg'
        },
        description: {
            material: 'LÌ VEN FABRIC – BOXY',
            size: '2/3'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn.',
            size2: ' Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            size3: 'Chiều cao từ 1m70 – 1m77, cân nặng dưới 80kg',
            image: 'https://levents.asia/wp-content/uploads/2023/01/Website-Basic-boxy-hoodie-100.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Hoodie'
    },
    {
        name: "LEVENTS® BASIC TROUSERS",
        MainName: 'LEVENTS® BASIC TROUSERS',
        MainImage: '/images/LEVENTS-BASIC-TROUSERS.jpg',
        price: 490.000,
        color: {
            black: 'BLACK',
        }
        ,
        size: {
            size2: 'SIZE 2',
            size3: 'SIZE 3',
        },
        image: {
            black: 'https://levents.asia/wp-content/uploads/2022/09/z3734003651099_b011a0d84f107eff996a0d73a1252344-150x150.jpg',
        },
        description: {
            material: 'Cotton',
            size: '2/3'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn',
            size2: ' Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            size3: 'Chiều cao từ 1m70 – 1m77, cân nặng dưới 80kg',
            image: 'https://levents.asia/wp-content/uploads/2022/09/Basic-trousers.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Quần tây'
    },
    {
        name: "LEVENTS® CRAYON JEANS",
        price: 590.000,
        MainName: 'LEVENTS® CRAYON JEANS/ BLACK',
        MainImage: '/images/LEVENTS-CRAYON JEANS-BLACK.jpg',
        color: ['BLACK', 'BLUE'],
        size: ['SIZE 1', 'SIZE 2'],
        image: {
            black: 'https://levents.asia/wp-content/uploads/2022/09/z3734003607494_66150ebfd9ddc4da64ef6e2d908a84e8-1-150x150.jpg',
            blue: 'https://levents.asia/wp-content/uploads/2022/09/z3734003639749_9af5788d065fc1d9b85396c1012e948a-150x150.jpg',
        },
        description: {
            material: 'Jeans',
            size: '2/3'
        },
        sizeChart: {
            description: 'Sản phẩm được may theo thông số tiêu chuẩn tương đối của người Việt Nam. Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn kích cỡ lớn hơn',
            size2: ' Chiều cao từ 1m65 – 1m72, cân nặng dưới 65kg',
            size3: 'Chiều cao từ 1m70 – 1m77, cân nặng dưới 80kg',
            image: 'https://levents.asia/wp-content/uploads/2022/09/Basic-trousers.jpg'
        },
        countInStock: 80,
        numReviews: 76,
        catagory: 'Quần Jean'
    }
]


export default products