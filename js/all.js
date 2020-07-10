new Vue({
    el: '#app',
    data: {
        products: [{
                id: "iE5ubB4b4Zjc6wbzwIkKiE3UypjOqhPiZzlLlbio3eE9JoUhPNDTv2HNaP1Iu3mK",
                title: "雙葉相生",
                category: "雙葉植物",
                description: "盆栽小物",
                content: "此款盆栽會長得比較茂盛，濃厚的綠可以恢復眼睛的疲勞，適合放在窗台或是小茶几上做擺飾",
                imageUrl: "https://i.imgur.com/JGqAV4N.jpg",
                enabled: 0,
                origin_price: 599,
                price: 399,
                unit: "組"
            },
            {
                id: "dP4Vk81nBMkO53ZllW7eqDnokRB5oKzUfgX7pdf2sxTErMfhLX2zDwwxSXvg8itx",
                title: "小綠苗 (3入組)",
                category: "常青植物",
                description: "盆栽小物",
                content: "3入組的小綠苗，給您個人獨享，抑或是與朋友分享，送禮自用兩相宜",
                imageUrl: "https://i.imgur.com/43HHWna.jpg",
                enabled: 0,
                origin_price: 799,
                price: 599,
                unit: "組"
            },
            {
                id: "Y3WOfMzPEBgA5penKdTIrW23S5QNAwcKuu0kqm0NlB22OgePQasS27pkoSJjynh0",
                title: "迷你仙人掌",
                category: "多肉植物",
                description: "盆栽小物",
                content: "仙人掌具有相當豐富的形状和大小，此款迷你仙人掌放在電腦旁，再適合不過",
                imageUrl: "https://i.imgur.com/iln3OO7.jpg",
                enabled: 0,
                origin_price: 199,
                price: 99,
                unit: "組"
            },
            {
                id: "nrcEOG9eDsSCWcH6xIvd56TDNyUzyn7QDwLJqsKMk3CBc32mrp04LcLjXQQsWtyz",
                title: "小綠苗",
                category: "常青植物",
                description: "盆栽小物",
                content: "單葉植物，不需太多水份，翠綠嬌小的身軀很適合妝點你的個人空間",
                imageUrl: "https://i.imgur.com/Uj2ZitS.jpg",
                enabled: 0,
                origin_price: 299,
                price: 199,
                unit: "組"
            },
            {
                id: "JLI98eMOYsALVryqEHNceHBfPCztDFIfM0ITy9I05CxR62kY5mHZroogsv0LYfFj",
                title: "多肉植物 (單入組)",
                category: "多肉植物",
                description: "盆栽小物",
                content: "辦公室、書房療癒小物，不需太常澆水，抗寒、耐熱、耐旱",
                imageUrl: "https://i.imgur.com/lukCpXo.jpg",
                enabled: 0,
                origin_price: 299,
                price: 199,
                unit: "組"
            },
            {
                id: "tNtkBNM2ZD5XPbtMbwpGXril4L3DOA7mEMyj8tkRJCa78CXVawLO7Pmt0nVRg7ad",
                title: "多肉植物 (4入組)",
                category: "多肉植物",
                description: "盆栽小物",
                content: "一次收集4種不同的多肉植物朋友，一個人就可以在你自己的小天地裡開同樂會",
                imageUrl: "https://i.imgur.com/ealFHag.jpg",
                enabled: 1,
                origin_price: 1196,
                price: 999,
                unit: "組"
            },
        ],
        tempProduct: {}, //這個物件到時候會放要被編輯或新增但是還沒送出的資料內容
    },
    methods: {
        // 開啟  Modal
        openModal(isNew, item) {
            switch (isNew) {
                case 'new':
                    this.tempProduct = {};
                    $('#productInfo').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item); // 把 item 取得的 物件資料，拷貝到 tempProduct 裡
                    console.log(this.tempProduct);
                    console.log(this.tempProduct.title);
                    $('#productInfo').modal('show');
                    break;
                case 'delete':
                    $('#delProduct').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        // 新增 or 更新 一筆商品資料
        updateProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                console.log(id);
                this.products.forEach((item, i) => {
                    if (item.id === id) { // 假如有對到 id 則將 tempProduct 的資料更新進去
                        this.products[i] = this.tempProduct;
                    }
                });
            } else {
                const id = new Date().getTime(); // 用 Unix Timestamp 作為 id
                this.tempProduct.id = id;
                console.log(this.tempProduct.id);
                this.products.push(this.tempProduct); // 將 tempProduct 的資料新增進去
            }
            this.tempProduct = {}; // 清空 tempProduct
            $('#productInfo').modal('hide');
        },
        // 刪除一筆 商品資料
        delProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProduct').modal('hide');
        },
    },
})