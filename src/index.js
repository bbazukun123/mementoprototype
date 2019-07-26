import "./scss/style.scss";

const photobooksContent = {

    banner: {
        title: "Photobooks",
        message: (language) => {
            
            switch(language){

                case "en":
                    return "Bring impressive stories together into a photobook";
                    break;
                case "th":
                    return "ร้อยเรียงเรื่องราวประทับใจใส่ลงในสมุดภาพ";
                    break;
                default:
                    break
            }
            
        },
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/banner.png",
        button: {
            type: "default",
            onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/photobooks/product_list`
        }
    },
    sections: [
        {
            theme: "default",
            title: "Select Your Theme",
            message: language => {
            
                switch(language){
    
                    case "en":
                        return "Choose your preferred theme and personalize it further to make it truly yours.";
                        break;
                    case "th":
                        return "เลือกธีมเพื่อปรับแต่งสมุดภาพของคุณไม่ให้เหมือนใคร ร้อยเรียงเรื่องราวประทับใจในแบบของคุณเอง";
                        break;
                    default:
                        break
                }
                
            },
            content: {
                type: "carousel",
                speed: 3500,
                images: [
                    "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/theme1.png",
                    "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/theme2.png",
                    "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/theme3.png"
                ]
            },
            button: {
                type: "theme",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/photobooks/product_list`
            }
        },
        {
            theme: "dark",
            title: "Design Your Cover",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Be it soft or hard cover, you can be assured that your photobook will be finely processed with care. Your memories will be well taken care of to perfection.";
                        break;
                    case "th":
                        return "จะปกอ่อนหรือปกแข็ง ก็มั่นใจได้ว่าสมุดภาพของคุณจะผ่านกระบวนการเข้าเล่มอย่างประณีต ความทรงจำของคุณจะได้รับการดูแลอย่างดีและสมบูรณ์แบบที่สุด";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/cover_soft.png",
                        title: language => {

                            switch(language){
    
                                case "en":
                                    return "Soft Cover";
                                    break;
                                case "th":
                                    return "ปกอ่อน";
                                    break;
                                default:
                                    break
                            }

                        }
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/cover_hard.png",
                        title: language => {

                            switch(language){
    
                                case "en":
                                    return "Hard Cover";
                                    break;
                                case "th":
                                    return "ปกแข็ง";
                                    break;
                                default:
                                    break
                            }

                        }
                    }
                ]
            }
        },
        {
            theme: "default",
            title: "Popular Sizes",
            message: language => {

                switch(language){
    
                    case "en":
                        return "The right size will help you store your valuable moments perfectly.";
                        break;
                    case "th":
                        return "ขนาดที่ถูกใจช่วยให้การจัดเก็บเหตุการณ์ที่มีคุณค่าของคุณสมบูรณ์แบบ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/8x8.jpg",
                        title: "8\"x 8\"",
                        supplement: "(20.3cm x 20.3cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Standard-sized square photobook";
                                    break;
                                case "th":
                                    return "สมุดภาพสี่เหลี่ยมขนาดมาตรฐาน";
                                    break;
                                default:
                                    break
                            }

                        }
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/8x10-5.jpg",
                        title: "8\"x 10.5\"",
                        supplement: "(20.3cm x 26.7cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Standard-sized portrait photobook";
                                    break;
                                case "th":
                                    return "สมุดภาพแนวตั้งขนาดมาตรฐาน";
                                    break;
                                default:
                                    break
                            }

                        }
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/10-5x8.jpg",
                        title: "10.5\"x 8\"",
                        supplement: "(26.7cm x 20.3cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Standard-sized landscape photobook";
                                    break;
                                case "th":
                                    return "สมุดภาพแนวนอนขนาดมาตรฐาน";
                                    break;
                                default:
                                    break
                            }

                        }
                    }
                    
                ]
            }
        },
        {
            theme: "default",
            title: "Customize Your Memory",
            message: language => {

                switch(language){
    
                    case "en":
                        return "5 simple steps to get your perfect photobook.";
                        break;
                    case "th":
                        return "5 ขั้นตอนง่ายๆ ในการออกแบบ Photobook ของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "steps",
                steps: [
                    "theme",
                    "size",
                    "design",
                    "payment",
                    "delivery"
                ]
            },
            button: {
                type: "default",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/photobooks/product_list`
            }
        }
    ]
}

const photoframesContent = {

    banner: {
        title: "Photo Frames",
        message: (language) => {
            
            switch(language){

                case "en":
                    return "Showcase your favourite moment on a photo frame";
                    break;
                case "th":
                    return "พิมพ์ภาพประทับใจลงผืนผ้าใบ";
                    break;
                default:
                    break
            }
            
        },
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/banner.png",
        button: {
            type: "default",
            onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/canvas/size`
        }
    },
    sections: [
        {
            theme: "default",
            title: "Popular Sizes",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Select the perfect size that works for your space.";
                        break;
                    case "th":
                        return "เลือกขนาดที่ต้องการ เพื่อให้เหมาะกับพื้นที่ในการจัดวางภาพพิเศษของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/16x16.jpg",
                        title: "16\"x 16\"",
                        supplement: "(40.6cm x 40.6cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Standard-sized Canvas<br><span>฿ 220 / Piece</span>";
                                    break;
                                case "th":
                                    return "Canvas ขนาดมาตรฐาน<br><span>ราคาชิ้นละ 220 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/canvas/style?size=Square%2016%22x%2016%`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/12x18.jpg",
                        title: "12\"x 18\"",
                        supplement: "(30.4cm x 45.7cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Standard-sized Canvas<br><span>฿ 220 / Piece</span>";
                                    break;
                                case "th":
                                    return "Canvas ขนาดมาตรฐาน<br><span>ราคาชิ้นละ 220 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/canvas/style?size=Portrait%2012%22x%2018%22`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/16x20.jpg",
                        title: "16\"x 20\"",
                        supplement: "(40.6cm x 50.8cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Standard-sized Canvas<br><span>฿ 220 / Piece</span>";
                                    break;
                                case "th":
                                    return "Canvas ขนาดมาตรฐาน<br><span>ราคาชิ้นละ 220 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/canvas/style?size=Portrait%2016%22x%2020%22`
                    },
                    
                ]
            }
        },
        {
            theme: "dark",
            title: "Design Your Style",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Choose the right style and transform your photo into an art piece.";
                        break;
                    case "th":
                        return "เลือกรูปแบบที่ถูกใจ แล้วเปลี่ยนภาพถ่ายของคุณให้กลายเป็นศิลปะบนผืนผ้าใบ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/overflow.png",
                        title: language => {

                            switch(language){
    
                                case "en":
                                    return "Overflow";
                                    break;
                                case "th":
                                    return "มีขอบ";
                                    break;
                                default:
                                    break
                            }

                        }
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/borderless.png",
                        title: language => {

                            switch(language){
    
                                case "en":
                                    return "Borderless";
                                    break;
                                case "th":
                                    return "ไร้ขอบ";
                                    break;
                                default:
                                    break
                            }

                        }
                    }
                ]
            }
        },
        {
            theme: "default",
            title: "Inspiration for Everyroom",
            message: language => {
            
                switch(language){
    
                    case "en":
                        return "Let meaningful photo frames fill your space with inspirations.";
                        break;
                    case "th":
                        return "ให้ภาพที่มีความหมาย เติมเต็มแรงบันดาลใจให้พื้นที่พิเศษของคุณ";
                        break;
                    default:
                        break
                }
                
            },
            content: {
                type: "banner",
                image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/heroBanner.jpg"
            }
        },
        {
            theme: "default",
            title: "Customize Your Memory",
            message: language => {

                switch(language){
    
                    case "en":
                        return "4 simple steps to get your perfect photo frame.";
                        break;
                    case "th":
                        return "4 ขั้นตอนง่ายๆ ในการออกแบบ Photo Frame ของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "steps",
                steps: [
                    "size",
                    "design",
                    "payment",
                    "delivery"
                ]
            },
            button: {
                type: "default",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/canvas/size`
            }
        }
    ]
}

const stickersContent = {

    banner: {
        title: "Stickers",
        message: (language) => {
            
            switch(language){

                case "en":
                    return "Transform your photos into fun sticker pieces";
                    break;
                case "th":
                    return "เปลี่ยนภาพของคุณให้เป็นสติกเกอร์แสนสนุกแปะได้ทุกที่";
                    break;
                default:
                    break
            }
            
        },
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/banner.png",
        button: {
            type: "default",
            onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/stickers/product_list`
        }
    },
    sections: [
        {
            theme: "default",
            title: "Various Styles",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Choose your preferred sticker style and size.";
                        break;
                    case "th":
                        return "เลือกรูปแบบและขนาดของสติกเกอร์ในสไตล์ของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/circular.jpg",
                        title: "Circular",
                        supplement: "(4cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
                                    break;
                                case "th":
                                    return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/stickers/product_card/circular-set`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/square.jpg",
                        title: "Square",
                        supplement: "(2.4cm x 2.4cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
                                    break;
                                case "th":
                                    return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/stickers/product_card/square-set`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/long.jpg",
                        title: "Long",
                        supplement: "(5.5cm x 16cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
                                    break;
                                case "th":
                                    return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/stickers/product_card/long-set`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/rectangle.jpg",
                        title: "Rectangle",
                        supplement: "(4cm x 2.6cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
                                    break;
                                case "th":
                                    return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/stickers/product_card/rectangle-set`
                    }
                    
                ]
            }
        },
        {
            theme: "dark",
            title: "Make Any Surface Playful",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Decorate ordinary surfaces and make them come alive.";
                        break;
                    case "th":
                        return "ตกแต่งพื้นผิวธรรมดาๆของคุณให้ดูมีชีวิตชีวาเพิ่มขึ้น";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "banner",
                image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/heroBanner.png"
            }
        },
        {
            theme: "default",
            title: "Customize Your Memory",
            message: language => {

                switch(language){
    
                    case "en":
                        return "4 simple steps to get your perfect stickers.";
                        break;
                    case "th":
                        return "4 ขั้นตอนง่ายๆ ในการออกแบบสติกเกอร์ของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "steps",
                steps: [
                    "size",
                    "design",
                    "payment",
                    "delivery"
                ]
            },
            button: {
                type: "default",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/stickers/product_list`
            }
        }
    ]
}

const cardsContent = {

    banner: {
        title: "Cards",
        message: (language) => {
            
            switch(language){

                case "en":
                    return "Keep your dear memories close by with a variety of cards";
                    break;
                case "th":
                    return "เก็บความรู้สึกดีๆไว้ใกล้ตัวด้วยการ์ดขนาดกะทัดรัด";
                    break;
                default:
                    break
            }
            
        },
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/banner.png",
        button: {
            type: "default",
            onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/cards/product_list`
        }
    },
    sections: [
        {
            theme: "default",
            title: "Various Styles",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Choose the style and size of your cards that you can take along with or give to special ones.";
                        break;
                    case "th":
                        return "เลือกรูปแบบและขนาดของการ์ดที่สามารถพกพาไปได้ทุกที่ให้ตัวคุณหรือคนพิเศษ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/polaroid.jpg",
                        title: "Polaroid",
                        supplement: "(8.9cm x 10.6cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Polaroid-style Photos<br><span>฿ 120 / Pack</span>";
                                    break;
                                case "th":
                                    return "รูปโพลาลอยด์<br><span>ราคาใบละ 120 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/cards/product_card/polaroid-set`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/postcard.jpg",
                        title: "Postcard",
                        supplement: "(4\" x 6\")",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Photo-based Postcards<br><span>฿ 120 / Pack</span>";
                                    break;
                                case "th":
                                    return "โปสการ์ดรูปภาพ<br><span>ราคาใบละ 120 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/cards/product_card/postcard-pack`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/square.jpg",
                        title: "Square Print",
                        supplement: "(4\" x 4\")",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Square Photo Prints<br><span>฿ 120 / Pack</span>";
                                    break;
                                case "th":
                                    return "การ์ดรูปภาพจตุรัส<br><span>ราคาใบละ 120 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/cards/product_card/square-print-4x4`
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/photocard.jpg",
                        title: "Photocard",
                        supplement: "(5.5cm x 8.5cm)",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "Rectangle Photocards<br><span>฿ 120 / Pack</span>";
                                    break;
                                case "th":
                                    return "โฟโต้การ์ด<br><span>ราคาใบละ 120 บาท</span>";
                                    break;
                                default:
                                    break
                            }

                        },
                        onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/cards/product_card/photo-card`
                    }
                    
                ]
            }
        },
        {
            theme: "dark",
            title: "Pocket-sized Memories",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Take your precious memories everywhere with you.";
                        break;
                    case "th":
                        return "พกพาความทรงจำดีๆติดตัวไปกับคุณทุกที่";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "banner",
                image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/heroBanner.png"
            }
        },
        {
            theme: "default",
            title: "Customize Your Memory",
            message: language => {

                switch(language){
    
                    case "en":
                        return "4 simple steps to get your perfect cards.";
                        break;
                    case "th":
                        return "4 ขั้นตอนง่ายๆ ในการออกแบบการ์ดของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "steps",
                steps: [
                    "size",
                    "design",
                    "payment",
                    "delivery"
                ]
            },
            button: {
                type: "default",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/cards/product_list`
            }
        }
    ]
}

const calendarsContent = {

    banner: {
        title: "Calendars",
        message: (language) => {
            
            switch(language){

                case "en":
                    return "Store your moments in your own day-month-year calendar";
                    break;
                case "th":
                    return "เก็บความทรงจำที่ดีไว้ในวัน-เดือน-ปีของคุณ";
                    break;
                default:
                    break
            }
            
        },
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/banner.png",
        button: {
            type: "default",
            onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/calendars/product_list`
        }
    },
    sections: [
        {
            theme: "default",
            title: "Select Your Theme",
            message: language => {
            
                switch(language){
    
                    case "en":
                        return "Select and customize a unique calendar that is truly yours. Put impressive stories together into your days.";
                        break;
                    case "th":
                        return "เลือกธีมเพื่อปรับแต่งปฏิทินของคุณให้ไม่เหมือนใคร ร้อยเรื่องราวประทับใจใส่ลงในทุกวันของคุณ";
                        break;
                    default:
                        break
                }
                
            },
            content: {
                type: "carousel",
                speed: 3500,
                images: [
                    "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/theme1.png",
                    "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/theme2.png",
                    "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/theme3.png"
                ]
            },
            button: {
                type: "theme",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/calendars/product_list`
            }
        },
        {
            theme: "dark",
            title: "Design Your Special Date",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Bring photos into your calendar and mark important dates such as anniversaries, birthdays, and so on.";
                        break;
                    case "th":
                        return "หยิบเอาภาพถ่ายมาใส่ในปฏิทิน พร้อมกำหนดวันสำคัญ เช่น วันครบรอบ หรือวันเกิดด้วยตัวคุณเอง";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/design1.jpg"
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/design2.jpg"
                    }
                ]
            }
        },
        {
            theme: "default",
            title: "Select Your Layout",
            message: language => {

                switch(language){
    
                    case "en":
                        return "Pick between a vertical or a horizontal calendar to suit the customization of your memories.";
                        break;
                    case "th":
                        return "ปฏิทินแนวตั้งหรือแนวนอน เพื่อให้เหมาะกับพื้นที่ในการจัดวางความทรงจำของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "cards",
                cards: [
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/portrait.jpg",
                        title: "Portrait",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "6\" x 8\" Vertical Calendar consists of 14 sheets and 28 pages";
                                    break;
                                case "th":
                                    return "ปฏิทินแนวตั้งขนาด 6\" x 8\" ประกอบด้วย 14 แผ่น 28 หน้า";
                                    break;
                                default:
                                    break
                            }

                        }
                    },
                    {
                        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/landscape.jpg",
                        title: "Landscape",
                        description: language => {

                            switch(language){
    
                                case "en":
                                    return "8\" x 6\" Horizontal Calendar consists of 14 sheets and 28 pages";
                                    break;
                                case "th":
                                    return "ปฏิทินแนวตั้งขนาด 8\" x 6\" ประกอบด้วย 14 แผ่น 28 หน้า";
                                    break;
                                default:
                                    break
                            }

                        }
                    }            
                ]
            }
        },
        {
            theme: "default",
            title: "Customize Your Memory",
            message: language => {

                switch(language){
    
                    case "en":
                        return "5 simple steps to get your perfect calendar";
                        break;
                    case "th":
                        return "5 ขั้นตอนง่ายๆ ในการออกแบบปฏิทินของคุณ";
                        break;
                    default:
                        break
                }

            },
            content: {
                type: "steps",
                steps: [
                    "theme",
                    "layout",
                    "design",
                    "payment",
                    "delivery"
                ]
            },
            button: {
                type: "default",
                onclick: language => `https://thephotobookmemento.getprintbox.com/${language}/calendars/product_list`
            }
        }
    ]
}

//-----------------UTILITY FUNCTIONS--------------------
function generateButton(button, language){

    let buttonText; 

    switch(button.type){

        case "default":
            switch(language){

                case "en":
                    buttonText = "Create Now";
                    break;
                case "th":
                    buttonText = "สร้างเลย";
                    break;
                default:
                    break

            }
            break;
        case "theme":
            switch(language){

                case "en":
                    buttonText = "Explore Themes";
                    break;
                case "th":
                    buttonText = "ค้นหาธีมของคุณ";
                    break;
                default:
                    break

            }
            break;
        default:
            break;

    }

    return `<button style="cursor: pointer;" onclick="window.location='${button.onclick(language)}'">${buttonText}</button>`

}

function generateStep(number, step, language){

    switch(step){
        
        case "theme":
            return `<div class="step">
                        <object type="image/svg+xml" data="https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/themeStep.svg">Your browser does not support SVG</object>
                        <h3><span>${number}</span><br>${language === "en" ? "Select Theme" : "เลือกธีม"}</h3>
                    </div>`;
            break;
        case "size":
            return `<div class="step">
                        <object type="image/svg+xml" data="https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/sizeStep.svg">Your browser does not support SVG</object>
                        <h3><span>${number}</span><br>${language === "en" ? "Select Size" : "เลือกขนาด"}</h3>
                    </div>`;
            break;
        case "design":
            return `<div class="step">
                        <object type="image/svg+xml" data="https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/designStep.svg">Your browser does not support SVG</object>
                        <h3><span>${number}</span><br>${language === "en" ? "Customize" : "ออกแบบ"}</h3>
                    </div>`;
            break;
        case "payment":
            return `<div class="step">
                        <object type="image/svg+xml" data="https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/paymentStep.svg">Your browser does not support SVG</object>
                        <h3><span>${number}</span><br>${language === "en" ? "Pay" : "ชำระเงิน"}</h3>
                    </div>`;
            break;
        case "delivery":
            return `<div class="step">
                        <object type="image/svg+xml" data="https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/deliveryStep.svg">Your browser does not support SVG</object>
                        <h3><span>${number}</span><br>${language === "en" ? "Track Parcel" : "รอรับสินค้า"}</h3>
                    </div>`;
            break;
        case "layout":
            return `<div class="step">
                        <object type="image/svg+xml" data="https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/layoutStep.svg">Your browser does not support SVG</object>
                        <h3><span>${number}</span><br>${language === "en" ? "Select Layout" : "เลือก Layout"}</h3>
                    </div>`;
            break;
        default:
            break;

    }
}

function renderContent(content, language){

    let sectionContent = "";
    let counter = 1;

    switch(content.type){

        case "carousel":
            content.images.forEach(img => {
                sectionContent += `<img src="${img}" class="pos${counter}">`;
                counter++;
            });
            break;
        case "cards":
            content.cards.forEach(card => {
                sectionContent +=
                    `<div class="card"${(card.onclick ? `style="cursor: pointer;" onclick="window.location='${card.onclick(language)}'"` : "")}>
                        <img class="card-img" src="${card.image}">
                        ${card.title ? `<div class="card-text">
                        <h2>${typeof(card.title) === "function" ? card.title(language) : card.title}</h2>
                        ${(card.supplement ? `<h4>${card.supplement}</h4>` : "")}
                        ${(card.description ? `<h3>${card.description(language)}</h3>` : "")}
                        </div>` : ""}
                    </div>`;
            });
            break;
        case "banner":
            break;
        case "steps":
            content.steps.forEach(step => {
                sectionContent += generateStep(counter,step,language);
                counter++;
            });
            break;
        default:
            break;

    }

    return sectionContent;

}

//-----------------INIT--------------------
const language = document.documentElement.lang === "en-us"?"en":"th";
const bannerElem = document.querySelector(".cta-hero");
const data = ((landingType) => {

    switch(landingType){
        case "photobooks":
            return photobooksContent;
            break;
        case "photoframes":
            return photoframesContent;
            break;
        case "stickers":
            return stickersContent;
            break;
        case "cards":
            return cardsContent;
            break;
        case "calendars":
            return calendarsContent;
            break;
        default:
            break;
    }

})(bannerElem.id);

//Init Banner
bannerElem.style.backgroundImage = `url(${data.banner.image})`;
bannerElem.querySelector("h1").innerText = data.banner.title;
bannerElem.querySelector("h2").innerText = data.banner.message(language);
bannerElem.querySelector("div").innerHTML += generateButton(data.banner.button, language);

//Generate Sections
let pageContent = "";
let carouselSpeed = null;
data.sections.forEach(section => {

    const {theme, title, message, content, button} = section;

    pageContent +=
        `<section${(theme === "dark" ? " class=\"dark\"" : "")}>
            <div>
                <h2>${title}</h2>
                <h3>${message(language)}</h3>
                <div class="${(type => {

                    switch(type){

                        case "carousel":
                            carouselSpeed = content.speed;
                            return content.type;
                            break;
                        case "cards":
                            return "card-container";
                            break;
                        case "banner":
                            return "banner-container";
                            break;
                        case "steps":
                            return "step-container";
                            break;
                        default:
                            break;

                    }

                })(content.type)}"${content.type === "banner" ? `style="background-image: url(${content.image});"` : ""}>
                    ${renderContent(content,language)}
                </div>
                ${button ? generateButton(button,language) : ""}
            </div>
        </section>`;

});

document.getElementById("main-content").innerHTML = pageContent;

//-----------------Listeners & Animators--------------------
function rotateCarousel(speed){

    const image1 = document.querySelector(".pos1");
    const image2 = document.querySelector(".pos2");
    const image3 = document.querySelector(".pos3");

    image3.style.zIndex = "0";
    image1.style.zIndex = "1";
    setTimeout(() => {
        image2.style.zIndex = "0";
    }, 700);
    setTimeout(() => {
        image1.style.zIndex = "2";
    }, 500); 

    image1.classList.replace("pos1","pos2");
    image2.classList.replace("pos2","pos3");
    image3.classList.replace("pos3","pos1");

    setTimeout(() => {
        rotateCarousel(speed);
    }, speed);

}

if(carouselSpeed){

    const image1 = document.querySelector(".pos1");
    const image2 = document.querySelector(".pos2");
    const image3 = document.querySelector(".pos3");

    image1.style.zIndex = "1";
    image2.style.zIndex = "2";
    image3.style.zIndex = "0";

    setTimeout(() => {
        rotateCarousel(carouselSpeed);
    }, carouselSpeed);

}
