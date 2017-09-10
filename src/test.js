import JSwiper from './static/js/Jswiper'

console.log(JSwiper);

let address = {
    "code_error": 0,
    "code": "340200", "msg": "user adress list",
    "data": [
        {
            "address_id": 583698,
            "uid": 73832, "consignee": "Jacky",
            "mobile": 13261556179, "district_id": "2,52,500",
            "address": "\u5317\u4eac \u5317\u4eac \u4e1c\u57ce\u533a tiananmen ",
            "postcode": 0, "address_x": null, "address_y": null,
            "is_default": 0, "address_type": 1, "rule_type": 1, "status": 1, "address_detail": "tiananmen ", "district_ids": ["2", "52", "500"]
        },
        {
            "address_id": 583724,
            "uid": 73832, "consignee": "test",
            "mobile": 13261556179, "district_id": "3,44,455",
            "address": "\u5b89\u5fbd \u9ec4\u5c71 \u5c6f\u6eaa\u533a \u9ec4\u5c71",
            "postcode": 0, "address_x": null, "address_y": null,
            "is_default": 1, "address_type": 1, "rule_type": 1, "status": 1, "address_detail": "\u9ec4\u5c71", "district_ids": ["3", "44", "455"]
        }]
}


let tm = [
    {
        "name": "Jacky", "phone": "13261556179",
        "province": "北京", "city": "北京", "region": "海淀区", "address": "西二旗"
    }
]