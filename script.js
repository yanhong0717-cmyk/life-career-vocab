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
  }
];

const vocabList = document.getElementById("vocabList");
const searchInput = document.getElementById("searchInput");

function playAudio(src) {
  const audio = new Audio(src);
  audio.play().catch(() => {
    alert("目前找不到音檔：" + src);
  });
}

function renderList(list) {
  if (list.length === 0) {
    vocabList.innerHTML = `<p class="empty-message">找不到符合的單字</p>`;
    return;
  }

  vocabList.innerHTML = list
    .map(
      (item) => `
      <article class="vocab-card">
        <div class="vocab-top">
          <span class="vocab-number">${item.id}</span>
        </div>

        <div class="vocab-word">${item.word}</div>
        <div class="vocab-phonetic">${item.phonetic}</div>
        <div class="vocab-meaning">${item.meaning}</div>
        <div class="vocab-example"><strong>例句：</strong>${item.example}</div>
        <div class="vocab-translation"><strong>中譯：</strong>${item.translation}</div>

        <div class="audio-buttons">
          <button onclick="playAudio('${item.wordAudio}')">播放單字</button>
          <button onclick="playAudio('${item.sentenceAudio}')">播放例句</button>
        </div>
      </article>
    `
    )
    .join("");
}

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.trim().toLowerCase();

  const filtered = vocabData.filter((item) => {
    return (
      item.word.toLowerCase().includes(keyword) ||
      item.meaning.toLowerCase().includes(keyword) ||
      item.translation.toLowerCase().includes(keyword) ||
      item.example.toLowerCase().includes(keyword)
    );
  });

  renderList(filtered);
});

renderList(vocabData);

window.playAudio = playAudio;
