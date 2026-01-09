import "./styles.css";

interface GameState {
  player: string;
  affection: number;
  confidence: number;
  sceneId: string;
  dialogueIndex: number;
}

interface Choice {
  text: string;
  affection: number;
  confidence: number;
  nextSceneId: string;
}

interface Scene {
  id: string;
  title: string;
  image: string;
  dialogue: string[];
  choices?: Choice[];
  isEnding?: boolean;
}

const gameState: GameState = {
  player: "",
  affection: 0,
  confidence: 50,
  sceneId: "",
  dialogueIndex: 0
};

const scenes: Scene[] = [
  {
    id: "origin",
    title: "缘起",
    image: "/images/scene1.jpg",
    dialogue: [
      "今天是我入职林氏科技的第一天，希望一切顺利！",
      "电梯门“叮”地一声打开，我愣了一下 ——",
      "一位年轻漂亮的女性站在电梯里，她是公司总裁林清雪，穿着干练的职业套装，气场强大而冷静。",
      "我紧张地深吸一口气，小心走进电梯..."
    ],
    choices: [
      { text: "开始游戏", affection: 0, confidence: 0, nextSceneId: "first-encounter" }
    ]
  },
  {
    id: "first-encounter",
    title: "第一章：心动初遇",
    image: "/images/scene2.jpg",
    dialogue: [
      "天啊，这就是传说中的女总裁吗？比照片上还要漂亮...",
      "林清雪：你是新来的？",
      "{称呼}：是...是的，我是新来的前端开发工程师，今天第一天入职。",
      "林清雪：嗯，好好干，林氏科技需要有能力的人。",
      "{称呼}：谢谢林总，我一定会努力的！"
    ],
    choices: [
      { text: "主动自我介绍，展现自信", affection: 15, confidence: 5, nextSceneId: "lingering-gaze" },
      { text: "保持沉默，礼貌回应", affection: 5, confidence: 5, nextSceneId: "lingering-gaze" }
    ]
  },
  {
    id: "lingering-gaze",
    title: "第二章：目光停留",
    image: "/images/scene3.jpg",
    dialogue: [
      "会议室里，林清雪坐在主位，严肃地审视着每个人。",
      "林清雪：这个项目对林氏科技至关重要，客户要求下周五上线，时间非常紧迫！",
      "技术总监：林总，这个时间点太紧了...",
      "林清雪：客户的需求就是命令。{称呼}，你有什么想法？",
      "{称呼}：啊？我...我..."
    ],
    choices: [
      { text: "表示会尽力完成，态度谦虚", affection: 10, confidence: 5, nextSceneId: "night-overtime" },
      { text: "保持沉默，等待其他人发言", affection: -5, confidence: -10, nextSceneId: "night-overtime" },
      { text: "提出技术方案，展现专业能力", affection: 15, confidence: 5, nextSceneId: "night-overtime" }
    ]
  },
  {
    id: "night-overtime",
    title: "第三章：深夜相伴",
    image: "/images/scene4.jpg",
    dialogue: [
      "深夜 11 点，办公室只剩下{称呼}一人。",
      "{称呼}：这个项目确实比想象中复杂，但是林总的信任不能辜负。",
      "办公室门被轻轻推开...",
      "林清雪：还在加班？",
      "{称呼}：林总？这么晚了您还没走？",
      "林清雪：我来看看项目进度。给，这是咖啡。",
      "{称呼}：谢谢林总！"
    ],
    choices: [
      { text: "表达疲惫，希望早点下班", affection: -10, confidence: -5, nextSceneId: "solving-together" },
      { text: "主动分享项目进展，展现责任心", affection: 15, confidence: 10, nextSceneId: "solving-together" },
      { text: "简单回应，继续工作", affection: 10, confidence: 5, nextSceneId: "solving-together" }
    ]
  },
  {
    id: "solving-together",
    title: "第四章：并肩破局",
    image: "/images/scene5.jpg",
    dialogue: [
      "会议室气氛紧张，大屏幕上显示着红色的错误报告。",
      "技术总监：林总，系统出现了严重BUG，明天就要上线了，我们...",
      "林清雪：冷静！问题出在哪里？",
      "技术总监：前端兼容性问题，在旧版本浏览器上无法正常运行。",
      "林清雪：{称呼}，你能解决吗？",
      "{称呼}：让我看看..."
    ],
    choices: [
      { text: "立即分析问题，提出解决方案", affection: 20, confidence: 10, nextSceneId: "tipsy-heartbeat" },
      { text: "推卸责任，说这不是自己的问题", affection: -20, confidence: -15, nextSceneId: "tipsy-heartbeat" },
      { text: "表示需要时间研究", affection: 10, confidence: 5, nextSceneId: "tipsy-heartbeat" }
    ]
  },
  {
    id: "tipsy-heartbeat",
    title: "第五章：微醺心跳",
    image: "/images/scene6.jpg",
    dialogue: [
      "高档餐厅包间，灯光柔和，项目团队围坐在一起庆祝。",
      "林清雪穿着晚礼服，格外迷人。",
      "林清雪：这次项目成功上线，多亏了大家的努力。特别是{称呼}，在关键时刻挺身而出！",
      "{称呼}：这都是团队的功劳，我只是做了我应该做的。",
      "林清雪：你太谦虚了，来，我敬你一杯！",
      "{称呼}：谢谢林总..."
    ],
    choices: [
      { text: "开玩笑说林总太客气了", affection: 10, confidence: 5, nextSceneId: "confession" },
      { text: "保持沉默，紧张地喝酒", affection: -5, confidence: -10, nextSceneId: "confession" },
      { text: "真诚感谢，表达对公司的支持", affection: 15, confidence: 10, nextSceneId: "confession" }
    ]
  },
  {
    id: "confession",
    title: "第六章：倾心告白",
    image: "/images/scene7.jpg",
    dialogue: [
      "总裁办公室，落地窗俯瞰城市夜景。",
      "林清雪站在窗前，转身看向{称呼}。",
      "林清雪：{称呼}，我有话想对你说。",
      "{称呼}：林总，您说。",
      "林清雪：其实，从第一次在电梯见到你，我就注意到你了。你的认真、你的专业、你的责任心，都让我很欣赏！",
      "{称呼}：林总，我...",
      "林清雪：叫我清雪就好。"
    ],
    choices: [
      { text: "勇敢表白，表达自己的感情", affection: 20, confidence: 10, nextSceneId: "ending" },
      { text: "感动但保持克制，表示需要时间考虑", affection: 10, confidence: 5, nextSceneId: "ending" },
      { text: "惊慌失措，不知所措", affection: -10, confidence: -15, nextSceneId: "ending" }
    ]
  },
  {
    id: "ending",
    title: "结局",
    image: "",
    dialogue: [],
    isEnding: true
  }
];

const scenesMap = new Map(scenes.map((item) => [item.id, item]));

function initGameUI(): void {
  const app = document.getElementById("app")!;

  app.innerHTML = `
<div class="game-container">
  <div class="scene-container">
    <div class="scene-image">
      <img id="scene-img" src="" alt="" />
    </div>

    <h2 id="scene-title" class="scene-title"></h2>

    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-label">好感度</span>
        <div class="stat-bar">
          <div id="affection-bar" class="stat-fill affection" style="width: 0"></div>
        </div>
        <span id="affection-value" class="stat-value">0</span>
      </div>

      <div class="stat-item">
        <span class="stat-label">自信度</span>
        <div class="stat-bar">
          <div id="confidence-bar" class="stat-fill confidence" style="width: 0"></div>
        </div>
        <span id="confidence-value" class="stat-value">0</span>
      </div>
    </div>

    <div class="scene-content">
      <div class="dialogue-box">
        <p id="dialogue-text" class="dialogue-line dialogue-fade-in"></p>
      </div>

      <div id="choices-area"></div>
    </div>
  </div>
</div>
`;
}

function updateSceneInfo(title: string, image: string, titleClass: string = ""): void {
  const titleElement = document.getElementById("scene-title")!;
  const imageElement = document.getElementById("scene-img") as HTMLImageElement;

  titleElement.className = `scene-title ${titleClass}`;
  titleElement.textContent = title;

  imageElement.classList.add("fade-out");

  setTimeout(() => {
    imageElement.src = image;
    imageElement.alt = title;

    imageElement.onload = () => {
      imageElement.classList.remove("fade-out");
      imageElement.classList.add("fade-in");

      setTimeout(() => {
        imageElement.classList.remove("fade-in");
      }, 300);
    };
  }, 300);
}

function updateStats(): void {
  const affectionBar = document.getElementById("affection-bar")!;
  const affectionValue = document.getElementById("affection-value")!;
  const confidenceBar = document.getElementById("confidence-bar")!;
  const confidenceValue = document.getElementById("confidence-value")!;

  affectionBar.style.width = `${gameState.affection}%`;
  affectionValue.textContent = `${gameState.affection}`;

  confidenceBar.style.width = `${gameState.confidence}%`;
  confidenceValue.textContent = `${gameState.confidence}`;
}

function formatDialogue(text: string): string {
  return text.replace(/\{称呼\}/g, gameState.player || "你");
}

function updateDialogue(dialogue: string[]): void {
  const dialogueText = document.getElementById("dialogue-text")!;

  dialogueText.textContent = formatDialogue(dialogue[gameState.dialogueIndex]);
  dialogueText.classList.remove("dialogue-fade-in");

  void dialogueText.offsetWidth;

  dialogueText.classList.add("dialogue-fade-in");
}

function updateChoices(choicesHtml: string): void {
  document.getElementById("choices-area")!.innerHTML = choicesHtml;
}

function updateContinueButton(onContinue: () => void): void {
  document.getElementById("choices-area")!.innerHTML = `
<div class="continue-container">
  <button class="continue-button" id="continue-btn">继续 ▼</button>
</div>
`;

  document.getElementById("continue-btn")!.addEventListener("click", onContinue);
}

function renderScene(): void {
  const scene = scenesMap.get(gameState.sceneId);

  if (scene == null) {
    return;
  }

  if (scene.isEnding) {
    renderEndingScene();
    return;
  }

  const isLastDialogue = gameState.dialogueIndex >= scene.dialogue.length - 1;

  const choicesHtml = isLastDialogue && scene.choices
    ? `
    <div class="choices-container">
      ${scene.choices.map((choice, index) => `
        <button class="choice-button" data-index="${index}">
          ${choice.text}
        </button>
      `).join("")}
    </div>
  `
    : "";

  if (document.getElementById("scene-title") == null) {
    initGameUI();
    updateSceneInfo(scene.title, scene.image);
  }

  updateStats();
  updateDialogue(scene.dialogue);

  if (isLastDialogue && scene.choices) {
    updateChoices(choicesHtml);

    for (const item of document.querySelectorAll(".choice-button")) {
      item.addEventListener("click", (event) => {
        const index = Number.parseInt((event.target as HTMLElement).dataset.index || "0");
        handleChoice(index);
      });
    }
  } else {
    updateContinueButton(() => {
      gameState.dialogueIndex += 1;
      renderScene();
    });
  }
}

function handleChoice(choiceIndex: number): void {
  const scene = scenesMap.get(gameState.sceneId);

  if (scene == null || scene.choices == null) {
    return;
  }

  const choice = scene.choices[choiceIndex];

  gameState.affection = Math.max(0, Math.min(100, gameState.affection + choice.affection));
  gameState.confidence = Math.max(0, Math.min(100, gameState.confidence + choice.confidence));
  gameState.sceneId = choice.nextSceneId;
  gameState.dialogueIndex = 0;

  const nextScene = scenesMap.get(gameState.sceneId);

  if (nextScene != null && !nextScene.isEnding) {
    updateSceneInfo(nextScene.title, nextScene.image);
  }

  renderScene();
}

function renderEndingScene(): void {
  let endingType: "perfect" | "good" | "normal" | "bad";
  let endingTitle: string;
  let endingDialogue: string[];
  let endingImage: string;

  if (gameState.affection >= 90 && gameState.confidence >= 80) {
    endingType = "perfect";
    endingTitle = "情定终身";
    endingDialogue = [
      "公司天台，夕阳西下，两人相拥。",
      "林清雪：{称呼}，谢谢你来到我的世界里。",
      "{称呼}：清雪，我会永远守护你！",
      "...",
      "我叫{称呼}，这是我的故事，终结或许也是一个开始..."
    ];
    endingImage = "/images/ending_perfect.jpg";
  } else if (gameState.affection >= 70 && gameState.confidence >= 60) {
    endingType = "good";
    endingTitle = "携手同行";
    endingDialogue = [
      "咖啡厅，两人面对面坐着。",
      "林清雪：{称呼}，我们试着交往吧。",
      "{称呼}：我等这句话很久了，清雪。",
      "...",
      "我叫{称呼}，这是我的故事，是结束也是开始..."
    ];
    endingImage = "/images/ending_good.jpg";
  } else if (gameState.affection >= 50 && gameState.confidence >= 40) {
    endingType = "normal";
    endingTitle = "初识之缘";
    endingDialogue = [
      "公司走廊，两人偶遇。",
      "林清雪：{称呼}，工作辛苦了。",
      "{称呼}：谢谢林总。",
      "...",
      "虽然只是普通的工作关系，但彼此都留下了美好的印象..."
    ];
    endingImage = "/images/ending_normal.jpg";
  } else {
    endingType = "bad";
    endingTitle = "擦肩而过";
    endingDialogue = [
      "{称呼}独自离开公司。",
      "{称呼}：也许，我真的不适合这里。",
      "...",
      "有时候，错过也是一种成长..."
    ];
    endingImage = "/images/ending_bad.jpg";
  }

  const isLastDialogue = gameState.dialogueIndex >= endingDialogue.length - 1;

  const choicesHtml = isLastDialogue
    ? `
    <div class="choices-container">
      <button class="choice-button restart-button" onclick="location.reload()">
        重新开始
      </button>
    </div>
  `
    : "";

  if (document.getElementById("scene-title") == null) {
    initGameUI();
  }

  updateSceneInfo(endingTitle, endingImage, `ending-${endingType}`);
  updateStats();
  updateDialogue(endingDialogue);

  if (isLastDialogue) {
    updateChoices(choicesHtml);
  } else {
    updateContinueButton(() => {
      gameState.dialogueIndex += 1;
      renderEndingScene();
    });
  }
}

function renderStartScreen(): void {
  const app = document.getElementById("app")!;

  app.innerHTML = `
<div class="start-screen">
  <div class="start-content">
    <h1 class="game-title">霸道女总裁爱上前端开发的我</h1>
    <p class="game-subtitle">The CEO Loves Me: A Front-End Developer Story</p>

    <div class="input-group">
      <label for="player-name">请输入你的称呼</label>
      <input type="text" id="player-name" placeholder="例如：小何" maxlength="10">
    </div>

    <button class="start-button" id="start-game-btn">开始游戏</button>
  </div>
</div>
`;

  const startButton = document.getElementById("start-game-btn")!;
  const nameInput = document.getElementById("player-name") as HTMLInputElement;

  startButton.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name.length > 0) {
      gameState.player = name;
      gameState.sceneId = "origin";
      renderScene();
    } else {
      nameInput.classList.add("error");
      setTimeout(() => {
        nameInput.classList.remove("error");
      }, 1000);
    }
  });

  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      startButton.click();
    }
  });
}

function main(): void {
  renderStartScreen();
}

main();