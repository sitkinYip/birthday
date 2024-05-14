// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hi 郭涵姐",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "这是我们认识的第四个年头",  // 同上...
        "也是你与我们一起过的第三个生日",
        "愿岁月轻盈, 时光温柔",
        "星辰璀璨, 恰似你的岁月",
        "我始终都觉得",
        "最好的关系",
        "有幸遇见",
        "恰好合拍",
        "于是我渐渐相信",
        "青春不散场",
        "友情永相伴",
        "愿时光不老",
        "愿我们不散",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "有幸遇见": "https://sitkin-cdn.oss-cn-heyuan.aliyuncs.com/pice/ssg3.jpg",
        "恰好合拍": "https://sitkin-cdn.oss-cn-heyuan.aliyuncs.com/pice/sxg1.jpg",
        "青春不散场": "https://sitkin-cdn.oss-cn-heyuan.aliyuncs.com/pice/ssg1.jpg",
        "友情永相伴": "https://sitkin-cdn.oss-cn-heyuan.aliyuncs.com/pice/mhsg5.jpg",
        "愿我们不散": "https://sitkin-cdn.oss-cn-heyuan.aliyuncs.com/pice/sxsg1.jpg"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "为什么乌漆嘛黑？",
        play: "咋们先来点音乐?",
        bannar_coming: "为啥空荡荡的？",
        balloons_flying: "是不是少点东西？",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！！！！！",
        story: "是不是还有东西？",
    }
};
