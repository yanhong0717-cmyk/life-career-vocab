const vocabData = [
  {
    id: 1,
    word: "achievement",
    phonetic: "[əˈtʃivmənt]",
    meaning: "n. 成就",
    example: "Winning the championship is a great achievement.",
    translation: "贏得冠軍是一項了不起的成就。",
    wordAudio: "audio/words/1.mp3",
    sentenceAudio: "audio/sentences/1.mp3"
  },
  {
    id: 2,
    word: "adventure",
    phonetic: "[ədˈvɛntʃɚ]",
    meaning: "n. 冒險",
    example: "Going to the museum was a real adventure for the children.",
    translation: "去博物館對那些孩子們來說是一大冒險。",
    wordAudio: "audio/words/2.mp3",
    sentenceAudio: "audio/sentences/2.mp3"
  },
  {
    id: 3,
    word: "alternative",
    phonetic: "[ɔlˈtɝnətɪv]",
    meaning: "n. 可供選擇的事物 adj. 替代的；另類的",
    example: "We have no alternative but to take the bus since there are no train tickets left.",
    translation: "我們別無選擇，只好搭公車，因為沒有火車票了。",
    wordAudio: "audio/words/3.mp3",
    sentenceAudio: "audio/sentences/3.mp3"
  },
  {
    id: 4,
    word: "applause",
    phonetic: "[əˈplɔz]",
    meaning: "n. 鼓掌喝采",
    example: "Loud applause came from inside the theater.",
    translation: "戲院裡傳來巨大的掌聲。",
    wordAudio: "audio/words/4.mp3",
    sentenceAudio: "audio/sentences/4.mp3"
  },
  {
    id: 5,
    word: "approval",
    phonetic: "[əˈpruvl]",
    meaning: "n. 認可；核可",
    example: "You need your parent's approval before you can come on the trip.",
    translation: "你需要父母的同意才能參加這場旅行。",
    wordAudio: "audio/words/5.mp3",
    sentenceAudio: "audio/sentences/5.mp3"
  },
  {
    id: 6,
    word: "arrangement",
    phonetic: "[əˈrendʒmənt]",
    meaning: "n. 安排",
    example: "Tom forgot about the arrangement he had made with Sally.",
    translation: "Tom 忘了他和 Sally 所做的安排。",
    wordAudio: "audio/words/6.mp3",
    sentenceAudio: "audio/sentences/6.mp3"
  },
  {
    id: 7,
    word: "average",
    phonetic: "[ˈævərɪdʒ]",
    meaning: "n. 平均 v. 平均為 adj. 平均的；一般的",
    example: "The average age of the students here is 16 years old.",
    translation: "這裡的學生平均年齡是 16 歲。",
    wordAudio: "audio/words/7.mp3",
    sentenceAudio: "audio/sentences/7.mp3"
  },
  {
    id: 8,
    word: "battle",
    phonetic: "[ˈbætl]",
    meaning: "n. 戰鬥 v. 作戰",
    example: "A terrible battle took place on this field 100 years ago.",
    translation: "一百年前，在這塊土地上發生了一場很可怕的戰役。",
    wordAudio: "audio/words/8.mp3",
    sentenceAudio: "audio/sentences/8.mp3"
  },
  {
    id: 9,
    word: "birth",
    phonetic: "[bɝθ]",
    meaning: "n. 出生",
    example: "Did you hear the news? Sharon gave birth to twins!",
    translation: "你聽說消息了嗎？Sharon 產下雙胞胎了！",
    wordAudio: "audio/words/9.mp3",
    sentenceAudio: "audio/sentences/9.mp3"
  },
  {
    id: 10,
    word: "burden",
    phonetic: "[ˈbɝdn]",
    meaning: "n. 重負 v. 加負擔於",
    example: "Their mortgage was too much of a financial burden, so they sold the house.",
    translation: "他們的房貸負擔太重，於是把房子賣了。",
    wordAudio: "audio/words/10.mp3",
    sentenceAudio: "audio/sentences/10.mp3"
  },
  {
    id: 11,
    word: "capital",
    phonetic: "[ˈkæpɪtl]",
    meaning: "n. 首都；大寫字母；資金",
    example: "Tokyo is the capital of Japan.",
    translation: "東京是日本的首都。",
    wordAudio: "audio/words/11.mp3",
    sentenceAudio: "audio/sentences/11.mp3"
  },
  {
    id: 12,
    word: "chain",
    phonetic: "[tʃen]",
    meaning: "n. 一連串；鏈子 v. 拴住；束縛",
    example: "A chain was locked around the gates to keep them closed.",
    translation: "那道大門鎖上了鏈子，所以門一直是關上的。",
    wordAudio: "audio/words/12.mp3",
    sentenceAudio: "audio/sentences/12.mp3"
  },
  {
    id: 13,
    word: "challenge",
    phonetic: "[ˈtʃælɪndʒ]",
    meaning: "n. 挑戰 v. 提出異議",
    example: "Running a marathon is a challenge for anyone.",
    translation: "跑馬拉松對任何人來說，都是一項挑戰。",
    wordAudio: "audio/words/13.mp3",
    sentenceAudio: "audio/sentences/13.mp3"
  },
  {
    id: 14,
    word: "charity",
    phonetic: "[ˈtʃærəti]",
    meaning: "n. 慈悲；慈善機構",
    example: "Would you like to give a donation to our charity?",
    translation: "你想要捐款給我們的慈善機構嗎？",
    wordAudio: "audio/words/14.mp3",
    sentenceAudio: "audio/sentences/14.mp3"
  },
  {
    id: 15,
    word: "competition",
    phonetic: "[ˌkɑmpəˈtɪʃən]",
    meaning: "n. 競爭；比賽",
    example: "We will hold a village baking competition at the summer fair.",
    translation: "我們將會在夏季園遊會舉辦全村烘焙競賽。",
    wordAudio: "audio/words/15.mp3",
    sentenceAudio: "audio/sentences/15.mp3"
  },
  {
    id: 16,
    word: "concentration",
    phonetic: "[ˌkɑnsnˈtreʃən]",
    meaning: "n. 集中；專心",
    example: "You could see the concentration on the athlete's face.",
    translation: "你可以看到那位運動員臉上的專注神情。",
    wordAudio: "audio/words/16.mp3",
    sentenceAudio: "audio/sentences/16.mp3"
  },
  {
    id: 17,
    word: "conclusion",
    phonetic: "[kənˈkluʒən]",
    meaning: "n. 結論",
    example: "You must write your conclusion at the end of the report.",
    translation: "你必須在報告的結尾寫出你的結論。",
    wordAudio: "audio/words/17.mp3",
    sentenceAudio: "audio/sentences/17.mp3"
  },
  {
    id: 18,
    word: "concrete",
    phonetic: "[ˈkɑnkrit]",
    meaning: "n. 混凝土 adj. 具體的",
    example: "We will keep the concrete floors throughout the house.",
    translation: "我們會保留整間屋子的水泥地板。",
    wordAudio: "audio/words/18.mp3",
    sentenceAudio: "audio/sentences/18.mp3"
  },
  {
    id: 19,
    word: "conference",
    phonetic: "[ˈkɑnfərəns]",
    meaning: "n. 會議；研討會",
    example: "Are you attending the conference today?",
    translation: "你今天要參加會議嗎？",
    wordAudio: "audio/words/19.mp3",
    sentenceAudio: "audio/sentences/19.mp3"
  },
  {
    id: 20,
    word: "connection",
    phonetic: "[kəˈnɛkʃən]",
    meaning: "n. 連結；關聯",
    example: "Lightning affected the cable connection.",
    translation: "閃電影響了纜線的連結。",
    wordAudio: "audio/words/20.mp3",
    sentenceAudio: "audio/sentences/20.mp3"
  },
  {
    id: 21,
    word: "container",
    phonetic: "[kənˈtenɚ]",
    meaning: "n. 容器",
    example: "Putting food in airtight containers helps it last longer.",
    translation: "食物放在密封容器內，能保存更久。",
    wordAudio: "audio/words/21.mp3",
    sentenceAudio: "audio/sentences/21.mp3"
  },
  {
    id: 22,
    word: "content",
    phonetic: "[ˈkɑntɛnt] / [kənˈtɛnt]",
    meaning: "n. 內容；內容物 adj. 滿足的 v. 使滿足",
    example: "Guards checked the content of the boxes.",
    translation: "守衛檢查了箱子的內容物。",
    wordAudio: "audio/words/22.mp3",
    sentenceAudio: "audio/sentences/22.mp3"
  },
  {
    id: 23,
    word: "crash",
    phonetic: "[kræʃ]",
    meaning: "n. 撞車事故；碰撞聲 v. 撞；撞毀；電腦當機",
    example: "Pedestrians stopped at the sound of the car crash.",
    translation: "行人在聽到車子碰撞的聲音時停了下來。",
    wordAudio: "audio/words/23.mp3",
    sentenceAudio: "audio/sentences/23.mp3"
  },
  {
    id: 24,
    word: "creation",
    phonetic: "[krɪˈeʃən]",
    meaning: "n. 創造；作品",
    example: "This company is my own creation. I built it from nothing.",
    translation: "我自己創立這家公司，我白手起家。",
    wordAudio: "audio/words/24.mp3",
    sentenceAudio: "audio/sentences/24.mp3"
  },
  {
    id: 25,
    word: "cue",
    phonetic: "[kju]",
    meaning: "n. 提示；暗示 v. 提示；暗示",
    example: "The beginning of the song was the cue for the actors to come on stage.",
    translation: "這首歌的開頭是演員出場的提示。",
    wordAudio: "audio/words/25.mp3",
    sentenceAudio: "audio/sentences/25.mp3"
  },
  {
    id: 26,
    word: "defense",
    phonetic: "[dɪˈfɛns]",
    meaning: "n. 防禦；辯護",
    example: "The government increased spending on defense this year.",
    translation: "政府今年增加國防的花費。",
    wordAudio: "audio/words/26.mp3",
    sentenceAudio: "audio/sentences/26.mp3"
  },
  {
    id: 27,
    word: "despair",
    phonetic: "[dɪˈspɛr]",
    meaning: "n. 絕望 v. 絕望",
    example: "There was a feeling of despair in the room.",
    translation: "房內有一股絕望感。",
    wordAudio: "audio/words/27.mp3",
    sentenceAudio: "audio/sentences/27.mp3"
  },
  {
    id: 28,
    word: "destruction",
    phonetic: "[dɪˈstrʌkʃən]",
    meaning: "n. 毀滅",
    example: "The typhoon left a trail of destruction.",
    translation: "颱風留下毀滅的痕跡。",
    wordAudio: "audio/words/28.mp3",
    sentenceAudio: "audio/sentences/28.mp3"
  },
  {
    id: 29,
    word: "device",
    phonetic: "[dɪˈvaɪs]",
    meaning: "n. 裝置；手段",
    example: "That device she's holding is a drone. It has a camera and you can fly it.",
    translation: "她拿的裝置是一台無人機，它有相機，而且可以操控它的飛行。",
    wordAudio: "audio/words/29.mp3",
    sentenceAudio: "audio/sentences/29.mp3"
  },
  {
    id: 30,
    word: "devil",
    phonetic: "[ˈdɛvl]",
    meaning: "n. 魔鬼",
    example: "My mother said I was a little devil when I was young!",
    translation: "我媽媽說我小時候是一個小惡魔！",
    wordAudio: "audio/words/30.mp3",
    sentenceAudio: "audio/sentences/30.mp3"
  },
  {
    id: 31,
    word: "dialog",
    phonetic: "[ˈdaɪəˌlɔg]",
    meaning: "n. 對話",
    example: "More dialog between departments will make our company better.",
    translation: "部門間更多的對話會讓我們的公司越來越好。",
    wordAudio: "audio/words/31.mp3",
    sentenceAudio: "audio/sentences/31.mp3"
  },
  {
    id: 32,
    word: "discovery",
    phonetic: "[dɪˈskʌvəri]",
    meaning: "n. 發現的過程；被發現的事物",
    example: "The discovery of oil changed the country's economy.",
    translation: "石油的發現改變了這個國家的經濟。",
    wordAudio: "audio/words/32.mp3",
    sentenceAudio: "audio/sentences/32.mp3"
  },
  {
    id: 33,
    word: "display",
    phonetic: "[dɪˈsple]",
    meaning: "n. 陳列品；展覽；表演 v. 陳列",
    example: "Here's an interesting display of old vases.",
    translation: "這是一場有趣的舊花瓶展覽。",
    wordAudio: "audio/words/33.mp3",
    sentenceAudio: "audio/sentences/33.mp3"
  },
  {
    id: 34,
    word: "echo",
    phonetic: "[ˈɛko]",
    meaning: "n. 回聲 v. 發出回聲；附和",
    example: "If you shout in the canyon, there will be an echo.",
    translation: "如果你在峽谷裡吼叫會有回音。",
    wordAudio: "audio/words/34.mp3",
    sentenceAudio: "audio/sentences/34.mp3"
  },
  {
    id: 35,
    word: "empire",
    phonetic: "[ˈɛmpaɪr]",
    meaning: "n. 帝國；大企業",
    example: "The ruins are the only evidence of an ancient empire.",
    translation: "此遺跡是某個古老帝國僅存的證據。",
    wordAudio: "audio/words/35.mp3",
    sentenceAudio: "audio/sentences/35.mp3"
  },
  {
    id: 36,
    word: "escalator",
    phonetic: "[ˈeskəˌletɚ]",
    meaning: "n. 電扶梯",
    example: "Go up this escalator to the second floor and you will see the store.",
    translation: "搭乘此電扶梯到二樓，你就會看到那間店了。",
    wordAudio: "audio/words/36.mp3",
    sentenceAudio: "audio/sentences/36.mp3"
  },
  {
    id: 37,
    word: "evolution",
    phonetic: "[ˌɛvəˈluʃən]",
    meaning: "n. 發展；進化",
    example: "Through evolution, animals and plants have slowly changed to have a better chance at surviving.",
    translation: "動植物經由進化，慢慢地改變自己以獲得更高的生存機率。",
    wordAudio: "audio/words/37.mp3",
    sentenceAudio: "audio/sentences/37.mp3"
  },
  {
    id: 38,
    word: "excellence",
    phonetic: "[ˈɛksləns]",
    meaning: "n. 優秀；傑出",
    example: "Our hotel won an award for excellence this year.",
    translation: "我們旅館今年贏得卓越獎。",
    wordAudio: "audio/words/38.mp3",
    sentenceAudio: "audio/sentences/38.mp3"
  },
  {
    id: 39,
    word: "exhaust",
    phonetic: "[ɪgˈzɔst]",
    meaning: "n. 排氣管 v. 使筋疲力盡；耗盡",
    example: "We need to get the car exhaust fixed.",
    translation: "我們要修理汽車的排氣管。",
    wordAudio: "audio/words/39.mp3",
    sentenceAudio: "audio/sentences/39.mp3"
  },
  {
    id: 40,
    word: "experiment",
    phonetic: "[ɪkˈspɛrəmənt]",
    meaning: "n. 實驗 v. 進行實驗",
    example: "I heard they are doing an experiment on traffic along this road.",
    translation: "我聽說他們正在對這條路上的交通進行實驗。",
    wordAudio: "audio/words/40.mp3",
    sentenceAudio: "audio/sentences/40.mp3"
  },
  {
    id: 41,
    word: "explosion",
    phonetic: "[ɪkˈsploʒən]",
    meaning: "n. 爆發；爆增",
    example: "People ran when they heard the sound of an explosion.",
    translation: "人們聽到爆炸聲時紛紛逃跑。",
    wordAudio: "audio/words/41.mp3",
    sentenceAudio: "audio/sentences/41.mp3"
  },
  {
    id: 42,
    word: "expression",
    phonetic: "[ɪkˈsprɛʃən]",
    meaning: "n. 表情；表達；措詞",
    example: "No expression showed on the old man's face.",
    translation: "那位老人的臉上毫無表情。",
    wordAudio: "audio/words/42.mp3",
    sentenceAudio: "audio/sentences/42.mp3"
  },
  {
    id: 43,
    word: "fame",
    phonetic: "[fem]",
    meaning: "n. 聲譽；名氣",
    example: "Fame quickly led to the sports star's downfall.",
    translation: "名聲迅速導致這位運動明星的沒落。",
    wordAudio: "audio/words/43.mp3",
    sentenceAudio: "audio/sentences/43.mp3"
  },
  {
    id: 44,
    word: "fantasy",
    phonetic: "[ˈfæntəsi]",
    meaning: "n. 幻想",
    example: "This popular children's book is set in a fantasy world.",
    translation: "這本熱門童書場景設定於一個奇幻世界。",
    wordAudio: "audio/words/44.mp3",
    sentenceAudio: "audio/sentences/44.mp3"
  },
  {
    id: 45,
    word: "fate",
    phonetic: "[fet]",
    meaning: "n. 命運；天意",
    example: "You could say it's fate that brought us together.",
    translation: "你可以說，是命運使我們相聚。",
    wordAudio: "audio/words/45.mp3",
    sentenceAudio: "audio/sentences/45.mp3"
  },
  {
    id: 46,
    word: "fiction",
    phonetic: "[ˈfɪkʃən]",
    meaning: "n. 小說；虛構的事",
    example: "You are looking for a book in the fiction section. Is that correct?",
    translation: "你正在找一本小說區的書，對嗎？",
    wordAudio: "audio/words/46.mp3",
    sentenceAudio: "audio/sentences/46.mp3"
  },
  {
    id: 47,
    word: "finance",
    phonetic: "[faɪˈnæns]",
    meaning: "n. 財政；財務 v. 供給資金",
    example: "John had a meeting at the bank to talk about his finances.",
    translation: "John 要跟銀行開會討論資金的事。",
    wordAudio: "audio/words/47.mp3",
    sentenceAudio: "audio/sentences/47.mp3"
  },
  {
    id: 48,
    word: "firework",
    phonetic: "[ˈfaɪrˌwɝk]",
    meaning: "n. 煙火",
    example: "Stand well back after you light the firework for safety reasons.",
    translation: "為了安全起見，你點著煙火後，盡量往後站。",
    wordAudio: "audio/words/48.mp3",
    sentenceAudio: "audio/sentences/48.mp3"
  },
  {
    id: 49,
    word: "fountain",
    phonetic: "[ˈfaʊntn]",
    meaning: "n. 泉；噴水池",
    example: "I enjoy sitting next to the fountains in the hotel lobby.",
    translation: "我非常喜歡坐在飯店大廳的噴水池旁邊。",
    wordAudio: "audio/words/49.mp3",
    sentenceAudio: "audio/sentences/49.mp3"
  },
  {
    id: 50,
    word: "fragrance",
    phonetic: "[ˈfregrəns]",
    meaning: "n. 香味；香氣；香水",
    example: "There was a fragrance of flowers in the park.",
    translation: "公園裡有花的香味。",
    wordAudio: "audio/words/50.mp3",
    sentenceAudio: "audio/sentences/50.mp3"
  }
];
