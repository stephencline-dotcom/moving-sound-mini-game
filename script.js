const homeScreen = document.getElementById('homeScreen');
const nameScreen = document.getElementById('nameScreen');
const studentNameInput = document.getElementById('studentNameInput');
const studentStartButton = document.getElementById('studentStartButton');
const studentBanner = document.getElementById('studentBanner');
const studentWelcomeText = document.getElementById('studentWelcomeText');
const changeNameButton = document.getElementById('changeNameButton');
const gameScreen = document.getElementById('gameScreen');
const carGameScreen = document.getElementById('carGameScreen');
const dragonGameScreen = document.getElementById('dragonGameScreen');
const fireGameScreen = document.getElementById('fireGameScreen');
const enterGameButton = document.getElementById('enterGameButton');
const enterCarGameButton = document.getElementById('enterCarGameButton');
const enterDragonGameButton = document.getElementById('enterDragonGameButton');
const enterFireGameButton = document.getElementById('enterFireGameButton');
const arena = document.getElementById('arena');
const streetArena = document.getElementById('streetArena');
const dragonArena = document.getElementById('dragonArena');
const fireArena = document.getElementById('fireArena');
const gileadElement = document.querySelector('.castle-gilead');
const gileadOuchElement = document.getElementById('gileadOuch');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const timeElement = document.getElementById('time');
const levelElement = document.getElementById('level');
const goalElement = document.getElementById('goal');
const statusElement = document.getElementById('status');
const startButton = document.getElementById('startButton');
const carScoreElement = document.getElementById('carScore');
const carTargetElement = document.getElementById('carTarget');
const carTimeElement = document.getElementById('carTime');
const carLevelElement = document.getElementById('carLevel');
const carGoalElement = document.getElementById('carGoal');
const carMissesElement = document.getElementById('carMisses');
const carStatusElement = document.getElementById('carStatus');
const carStartButton = document.getElementById('carStartButton');
const dragonScoreElement = document.getElementById('dragonScore');
const dragonTimeElement = document.getElementById('dragonTime');
const dragonMissesElement = document.getElementById('dragonMisses');
const dragonLevelElement = document.getElementById('dragonLevel');
const dragonGoalElement = document.getElementById('dragonGoal');
const dragonStatusElement = document.getElementById('dragonStatus');
const dragonStartButton = document.getElementById('dragonStartButton');
const dragonTargetElement = document.getElementById('dragonTarget');
const fireScoreElement = document.getElementById('fireScore');
const fireLevelElement = document.getElementById('fireLevel');
const fireGoalElement = document.getElementById('fireGoal');
const fireTimeElement = document.getElementById('fireTime');
const fireMissesElement = document.getElementById('fireMisses');
const fireStatusElement = document.getElementById('fireStatus');
const fireStartButton = document.getElementById('fireStartButton');
const firemanButton = document.getElementById('firemanButton');
const waterStreamElement = document.getElementById('waterStream');
const backToMenuButton = document.getElementById('backToMenuButton');
const backToMenuFromCarButton = document.getElementById('backToMenuFromCarButton');
const backToMenuFromDragonButton = document.getElementById('backToMenuFromDragonButton');
const backToMenuFromFireButton = document.getElementById('backToMenuFromFireButton');
const adminToggle = document.getElementById('adminToggle');
const adminDrawer = document.getElementById('adminDrawer');
const adminControls = document.getElementById('adminControls');
const adminUnlockForm = document.getElementById('adminUnlock');
const adminPasswordInput = document.getElementById('adminPassword');
const adminShowLightGameInput = document.getElementById('adminShowLightGame');
const adminShowCarGameInput = document.getElementById('adminShowCarGame');
const adminShowDragonGameInput = document.getElementById('adminShowDragonGame');
const adminShowFireGameInput = document.getElementById('adminShowFireGame');
const adminLivesL1Input = document.getElementById('adminLivesL1');
const adminTimeL1Input = document.getElementById('adminTimeL1');
const adminGoalL1Input = document.getElementById('adminGoalL1');
const adminLivesL2Input = document.getElementById('adminLivesL2');
const adminTimeL2Input = document.getElementById('adminTimeL2');
const adminGoalL2Input = document.getElementById('adminGoalL2');
const adminLivesL3Input = document.getElementById('adminLivesL3');
const adminTimeL3Input = document.getElementById('adminTimeL3');
const adminGoalL3Input = document.getElementById('adminGoalL3');
const adminCarSpawnIntervalL1Input = document.getElementById('adminCarSpawnIntervalL1');
const adminCarTargetColorL1Select = document.getElementById('adminCarTargetColorL1');
const adminCarTimeL1Input = document.getElementById('adminCarTimeL1');
const adminCarCountL1Input = document.getElementById('adminCarCountL1');
const adminCarMissesL1Input = document.getElementById('adminCarMissesL1');
const adminCarGoalL1Input = document.getElementById('adminCarGoalL1');
const adminCarSpeedMinL1Input = document.getElementById('adminCarSpeedMinL1');
const adminCarSpeedMaxL1Input = document.getElementById('adminCarSpeedMaxL1');
const adminCarSpawnIntervalL2Input = document.getElementById('adminCarSpawnIntervalL2');
const adminCarTargetColorL2Select = document.getElementById('adminCarTargetColorL2');
const adminCarTimeL2Input = document.getElementById('adminCarTimeL2');
const adminCarCountL2Input = document.getElementById('adminCarCountL2');
const adminCarMissesL2Input = document.getElementById('adminCarMissesL2');
const adminCarGoalL2Input = document.getElementById('adminCarGoalL2');
const adminCarSpeedMinL2Input = document.getElementById('adminCarSpeedMinL2');
const adminCarSpeedMaxL2Input = document.getElementById('adminCarSpeedMaxL2');
const adminCarSpawnIntervalL3Input = document.getElementById('adminCarSpawnIntervalL3');
const adminCarTargetColorL3Select = document.getElementById('adminCarTargetColorL3');
const adminCarTimeL3Input = document.getElementById('adminCarTimeL3');
const adminCarCountL3Input = document.getElementById('adminCarCountL3');
const adminCarMissesL3Input = document.getElementById('adminCarMissesL3');
const adminCarGoalL3Input = document.getElementById('adminCarGoalL3');
const adminCarSpeedMinL3Input = document.getElementById('adminCarSpeedMinL3');
const adminCarSpeedMaxL3Input = document.getElementById('adminCarSpeedMaxL3');
const adminDragonCountL1Input = document.getElementById('adminDragonCountL1');
const adminDragonTimeL1Input = document.getElementById('adminDragonTimeL1');
const adminDragonMissesL1Input = document.getElementById('adminDragonMissesL1');
const adminDragonGoalL1Input = document.getElementById('adminDragonGoalL1');
const adminDragonFireDurationL1Input = document.getElementById('adminDragonFireDurationL1');
const adminDragonCountL2Input = document.getElementById('adminDragonCountL2');
const adminDragonTimeL2Input = document.getElementById('adminDragonTimeL2');
const adminDragonMissesL2Input = document.getElementById('adminDragonMissesL2');
const adminDragonGoalL2Input = document.getElementById('adminDragonGoalL2');
const adminDragonFireDurationL2Input = document.getElementById('adminDragonFireDurationL2');
const adminDragonCountL3Input = document.getElementById('adminDragonCountL3');
const adminDragonTimeL3Input = document.getElementById('adminDragonTimeL3');
const adminDragonMissesL3Input = document.getElementById('adminDragonMissesL3');
const adminDragonGoalL3Input = document.getElementById('adminDragonGoalL3');
const adminDragonFireDurationL3Input = document.getElementById('adminDragonFireDurationL3');
const adminFireTimeL1Input = document.getElementById('adminFireTimeL1');
const adminFireMissesL1Input = document.getElementById('adminFireMissesL1');
const adminFireGoalL1Input = document.getElementById('adminFireGoalL1');
const adminFireSpawnIntervalL1Input = document.getElementById('adminFireSpawnIntervalL1');
const adminFireFlameDurationL1Input = document.getElementById('adminFireFlameDurationL1');
const adminFireTimeL2Input = document.getElementById('adminFireTimeL2');
const adminFireMissesL2Input = document.getElementById('adminFireMissesL2');
const adminFireGoalL2Input = document.getElementById('adminFireGoalL2');
const adminFireSpawnIntervalL2Input = document.getElementById('adminFireSpawnIntervalL2');
const adminFireFlameDurationL2Input = document.getElementById('adminFireFlameDurationL2');
const adminFireTimeL3Input = document.getElementById('adminFireTimeL3');
const adminFireMissesL3Input = document.getElementById('adminFireMissesL3');
const adminFireGoalL3Input = document.getElementById('adminFireGoalL3');
const adminFireSpawnIntervalL3Input = document.getElementById('adminFireSpawnIntervalL3');
const adminFireFlameDurationL3Input = document.getElementById('adminFireFlameDurationL3');
const adminApplyButton = document.getElementById('adminApply');
const adminMessage = document.getElementById('adminMessage');
const soundToggleButtons = Array.from(document.querySelectorAll('.sound-toggle-button'));

const ADMIN_PASSWORD = 'typing1';
const ADMIN_SETTINGS_STORAGE_KEY = 'moving-sound-admin-settings-v1';
const STUDENT_NAME_STORAGE_KEY = 'moving-sound-student-name-v1';
const SOUND_ENABLED_STORAGE_KEY = 'moving-sound-sound-enabled-v1';

let soundEnabled = true;

const homeMenuState = {
  showLightGame: true,
  showCarGame: true,
  showDragonGame: true,
  showFireGame: true,
};

const arenaState = {
  running: false,
  score: 0,
  correctClicks: 0,
  missedClicks: 0,
  totalAttempts: 0,
  sessionStartedAt: 0,
  lives: 3,
  timeLeft: 30,
  levelHits: 0,
  levelGoal: 10,
  currentLevelIndex: 0,
  levels: [
    { lives: 3, time: 30, goal: 10, speedMin: 45, speedMax: 90 },
    { lives: 3, time: 25, goal: 12, speedMin: 95, speedMax: 150 },
    { lives: 3, time: 20, goal: 15, speedMin: 160, speedMax: 240 },
  ],
  lastTime: 0,
  width: 0,
  height: 0,
  targets: [],
  animationId: 0,
  audioContext: null,
  masterGain: null,
  hitSound: null,
  hornSound: null,
  crashSound: null,
  missSound: null,
  oscillator: null,
  lfo: null,
  lfoGain: null,
  adminUnlocked: false,
};

const colors = ['#7ce0ff', '#a78bfa', '#7cf7b6', '#ffd36b'];
const carColors = ['#f97316', '#facc15', '#38bdf8', '#a78bfa', '#34d399', '#fb7185'];
const carColorLabels = {
  '#f97316': 'Orange',
  '#facc15': 'Yellow',
  '#38bdf8': 'Blue',
  '#a78bfa': 'Purple',
  '#34d399': 'Green',
  '#fb7185': 'Pink',
};

const carGameState = {
  running: false,
  score: 0,
  correctClicks: 0,
  missedClicks: 0,
  totalAttempts: 0,
  sessionStartedAt: 0,
  currentLevelIndex: 0,
  levelHits: 0,
  levelGoal: 8,
  timeLeft: 30,
  missesLeft: 3,
  lastTime: 0,
  width: 0,
  height: 0,
  cars: [],
  animationId: 0,
  levels: [
    { spawnInterval: 1.5, targetColor: '#38bdf8', timeLimit: 30, carCount: 4, missesAllowed: 3, goal: 8, speedMin: 70, speedMax: 125 },
    { spawnInterval: 1.2, targetColor: '#f97316', timeLimit: 26, carCount: 5, missesAllowed: 3, goal: 10, speedMin: 135, speedMax: 220 },
    { spawnInterval: 0.95, targetColor: '#34d399', timeLimit: 22, carCount: 6, missesAllowed: 3, goal: 12, speedMin: 240, speedMax: 360 },
  ],
  spawnInterval: 1.5,
  speedMin: 70,
  speedMax: 125,
  carCount: 4,
  targetColor: '#38bdf8',
  targetColorLabel: 'Blue',
  timeLimit: 30,
  missesAllowed: 3,
  spawnAccumulator: 0,
};

const dragonGameState = {
  running: false,
  score: 0,
  correctClicks: 0,
  missedClicks: 0,
  totalAttempts: 0,
  sessionStartedAt: 0,
  currentLevelIndex: 0,
  levelHits: 0,
  levelGoal: 6,
  timeLeft: 30,
  missesLeft: 3,
  timeLimit: 30,
  missesAllowed: 3,
  dragonCount: 1,
  speedMin: 100,
  speedMax: 170,
  fireDelayMin: 1.1,
  fireDelayMax: 1.8,
  fireDurationMin: 0.8,
  fireDurationMax: 1.2,
  lastTime: 0,
  width: 0,
  height: 0,
  dragons: [],
  lastGileadHitAt: 0,
  gileadYellSound: null,
  flapSound: null,
  animationId: 0,
  levels: [
    { timeLimit: 30, missesAllowed: 3, goal: 6, dragonCount: 1, speedMin: 100, speedMax: 170, fireDelayMin: 1.1, fireDelayMax: 1.8, fireDurationMin: 0.8, fireDurationMax: 1.2 },
    { timeLimit: 27, missesAllowed: 3, goal: 10, dragonCount: 2, speedMin: 125, speedMax: 195, fireDelayMin: 0.95, fireDelayMax: 1.55, fireDurationMin: 0.72, fireDurationMax: 1.05 },
    { timeLimit: 24, missesAllowed: 3, goal: 15, dragonCount: 3, speedMin: 150, speedMax: 225, fireDelayMin: 0.75, fireDelayMax: 1.3, fireDurationMin: 0.62, fireDurationMax: 0.92 },
  ],
};

const fireGameState = {
  running: false,
  score: 0,
  correctClicks: 0,
  missedClicks: 0,
  totalAttempts: 0,
  sessionStartedAt: 0,
  currentLevelIndex: 0,
  levelHits: 0,
  levelGoal: 8,
  timeLeft: 30,
  timeLimit: 30,
  missesLeft: 3,
  missesAllowed: 3,
  spawnDelayMin: 0.5,
  spawnDelayMax: 1.15,
  flameLifeMin: 1.15,
  flameLifeMax: 2,
  helpSpawnChance: 0.3,
  helpLifeMin: 1.4,
  helpLifeMax: 2.8,
  spawnIn: 0,
  lastTime: 0,
  windows: [],
  helpSound: null,
  burningLoopSound: null,
  sirenSound: null,
  sirenIntervalId: 0,
  animationId: 0,
  waterTimeoutId: 0,
  levels: [
    { timeLimit: 30, missesAllowed: 3, goal: 8, spawnInterval: 0.85, flameDuration: 1.58, helpSpawnChance: 0.3 },
    { timeLimit: 26, missesAllowed: 3, goal: 11, spawnInterval: 0.72, flameDuration: 1.35, helpSpawnChance: 0.33 },
    { timeLimit: 22, missesAllowed: 3, goal: 14, spawnInterval: 0.62, flameDuration: 1.15, helpSpawnChance: 0.36 },
  ],
};

function resizeArena() {
  const rect = arena.getBoundingClientRect();
  arenaState.width = rect.width;
  arenaState.height = rect.height;
}

function resizeStreetArena() {
  const rect = streetArena.getBoundingClientRect();
  carGameState.width = rect.width;
  carGameState.height = rect.height;
}

function resizeDragonArena() {
  const rect = dragonArena.getBoundingClientRect();
  dragonGameState.width = rect.width;
  dragonGameState.height = rect.height;
}

function resizeFireArena() {
  fireArena.getBoundingClientRect();
}

function setStatus(text) {
  statusElement.textContent = text;
}

function setCarStatus(text) {
  carStatusElement.textContent = text;
}

function setDragonStatus(text) {
  dragonStatusElement.textContent = text;
}

function setFireStatus(text) {
  fireStatusElement.textContent = text;
}

function updateSoundToggleButtons() {
  const label = soundEnabled ? 'Sound: On' : 'Sound: Off';

  for (const button of soundToggleButtons) {
    button.textContent = label;
    button.setAttribute('aria-pressed', String(!soundEnabled));
  }
}

function setSoundEnabled(isEnabled, persist = true) {
  soundEnabled = Boolean(isEnabled);
  updateSoundToggleButtons();

  if (!soundEnabled) {
    stopAudio();
  } else {
    if (arenaState.running) {
      startAudio();
    }

    if (dragonGameState.running) {
      startDragonFlapLoop();
    }

    if (fireGameState.running) {
      startFireBurningLoop();
      startFireSirenLoop();
    }
  }

  if (!persist) {
    return;
  }

  try {
    localStorage.setItem(SOUND_ENABLED_STORAGE_KEY, soundEnabled ? 'true' : 'false');
  } catch {
    // Ignore storage failures.
  }
}

function toggleSoundEnabled() {
  setSoundEnabled(!soundEnabled);
}

function loadSoundPreference() {
  try {
    const saved = localStorage.getItem(SOUND_ENABLED_STORAGE_KEY);

    if (saved === 'false') {
      setSoundEnabled(false, false);
      return;
    }
  } catch {
    // Ignore storage failures.
  }

  setSoundEnabled(true, false);
}

function updateScore(value) {
  arenaState.score = value;
  scoreElement.textContent = String(value);
}

function updateLives(value) {
  arenaState.lives = value;
  livesElement.textContent = String(value);
}

function updateTime(value) {
  arenaState.timeLeft = value;
  timeElement.textContent = String(Math.max(0, Math.ceil(value)));
}

function updateCarScore(value) {
  carGameState.score = value;
  carScoreElement.textContent = String(value);
}

function updateDragonScore(value) {
  dragonGameState.score = value;
  dragonScoreElement.textContent = String(value);
}

function updateFireScore(value) {
  fireGameState.score = value;
  fireScoreElement.textContent = String(value);
}

function updateCarTime(value) {
  carGameState.timeLeft = value;
  carTimeElement.textContent = String(Math.max(0, Math.ceil(value)));
}

function updateDragonTime(value) {
  dragonGameState.timeLeft = value;
  dragonTimeElement.textContent = String(Math.max(0, Math.ceil(value)));
}

function updateFireTime(value) {
  fireGameState.timeLeft = value;
  fireTimeElement.textContent = String(Math.max(0, Math.ceil(value)));
}

function updateCarLevel(index) {
  carLevelElement.textContent = String(index + 1);
}

function updateCarGoal(hits, goal) {
  carGoalElement.textContent = `${hits}/${goal}`;
}

function updateCarMisses(value) {
  carGameState.missesLeft = value;
  carMissesElement.textContent = String(value);
}

function updateDragonMisses(value) {
  dragonGameState.missesLeft = value;
  dragonMissesElement.textContent = String(value);
}

function updateFireMisses(value) {
  fireGameState.missesLeft = value;
  fireMissesElement.textContent = String(value);
}

function updateFireLevel(index) {
  fireLevelElement.textContent = String(index + 1);
}

function updateFireGoal(hits, goal) {
  fireGoalElement.textContent = `${hits}/${goal}`;
}

function updateDragonLevel(index) {
  dragonLevelElement.textContent = String(index + 1);
}

function updateDragonGoal(hits, goal) {
  dragonGoalElement.textContent = `${hits}/${goal}`;
}

function updateCarTarget(value) {
  carGameState.targetColor = value;
  carGameState.targetColorLabel = getCarColorLabel(value);
  carTargetElement.textContent = carGameState.targetColorLabel;
  carTargetElement.style.setProperty('--car-target-color', value);

  for (const car of carGameState.cars) {
    if (car.active) {
      setCarVisualState(car);
    }
  }
}

function updateLevel(index) {
  levelElement.textContent = String(index + 1);
}

function updateGoal(hits, goal) {
  goalElement.textContent = `${hits}/${goal}`;
}

function setStartButtonVisible(isVisible) {
  startButton.hidden = !isVisible;
  startButton.textContent = 'Play';
}

function setCarStartButtonVisible(isVisible) {
  carStartButton.hidden = !isVisible;
  carStartButton.textContent = 'Play';
}

function setDragonStartButtonVisible(isVisible) {
  dragonStartButton.hidden = !isVisible;
  dragonStartButton.textContent = 'Play';
}

function setFireStartButtonVisible(isVisible) {
  fireStartButton.hidden = !isVisible;
  fireStartButton.textContent = 'Play';
}

function positionDragon(dragon) {
  dragon.element.style.left = `${dragon.x}px`;
  dragon.element.style.top = `${dragon.y}px`;
  dragon.element.classList.toggle('facing-left', dragon.vx < 0);
  dragon.element.classList.toggle('is-firing', dragon.isFiring);
}

function clampNumber(value, min, max) {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return min;
  }

  return Math.min(max, Math.max(min, parsed));
}

function syncAdminInputsFromState() {
  adminShowLightGameInput.checked = homeMenuState.showLightGame;
  adminShowCarGameInput.checked = homeMenuState.showCarGame;
  adminShowDragonGameInput.checked = homeMenuState.showDragonGame;
  adminShowFireGameInput.checked = homeMenuState.showFireGame;

  adminLivesL1Input.value = String(arenaState.levels[0].lives);
  adminTimeL1Input.value = String(arenaState.levels[0].time);
  adminGoalL1Input.value = String(arenaState.levels[0].goal);
  adminLivesL2Input.value = String(arenaState.levels[1].lives);
  adminTimeL2Input.value = String(arenaState.levels[1].time);
  adminGoalL2Input.value = String(arenaState.levels[1].goal);
  adminLivesL3Input.value = String(arenaState.levels[2].lives);
  adminTimeL3Input.value = String(arenaState.levels[2].time);
  adminGoalL3Input.value = String(arenaState.levels[2].goal);

  const carInputGroups = [
    [adminCarSpawnIntervalL1Input, adminCarTargetColorL1Select, adminCarTimeL1Input, adminCarCountL1Input, adminCarMissesL1Input, adminCarGoalL1Input, adminCarSpeedMinL1Input, adminCarSpeedMaxL1Input],
    [adminCarSpawnIntervalL2Input, adminCarTargetColorL2Select, adminCarTimeL2Input, adminCarCountL2Input, adminCarMissesL2Input, adminCarGoalL2Input, adminCarSpeedMinL2Input, adminCarSpeedMaxL2Input],
    [adminCarSpawnIntervalL3Input, adminCarTargetColorL3Select, adminCarTimeL3Input, adminCarCountL3Input, adminCarMissesL3Input, adminCarGoalL3Input, adminCarSpeedMinL3Input, adminCarSpeedMaxL3Input],
  ];

  for (let index = 0; index < carInputGroups.length; index += 1) {
    const level = carGameState.levels[index];
    const [spawnInput, colorSelect, timeInput, countInput, missesInput, goalInput, speedMinInput, speedMaxInput] = carInputGroups[index];

    spawnInput.value = String(level.spawnInterval);
    colorSelect.value = level.targetColor;
    timeInput.value = String(level.timeLimit);
    countInput.value = String(level.carCount);
    missesInput.value = String(level.missesAllowed);
    goalInput.value = String(level.goal);
    speedMinInput.value = String(level.speedMin);
    speedMaxInput.value = String(level.speedMax);
  }

  adminDragonCountL1Input.value = String(dragonGameState.levels[0].dragonCount);
  adminDragonTimeL1Input.value = String(dragonGameState.levels[0].timeLimit);
  adminDragonMissesL1Input.value = String(dragonGameState.levels[0].missesAllowed);
  adminDragonGoalL1Input.value = String(dragonGameState.levels[0].goal);
  adminDragonFireDurationL1Input.value = String((dragonGameState.levels[0].fireDurationMin + dragonGameState.levels[0].fireDurationMax) / 2);
  adminDragonCountL2Input.value = String(dragonGameState.levels[1].dragonCount);
  adminDragonTimeL2Input.value = String(dragonGameState.levels[1].timeLimit);
  adminDragonMissesL2Input.value = String(dragonGameState.levels[1].missesAllowed);
  adminDragonGoalL2Input.value = String(dragonGameState.levels[1].goal);
  adminDragonFireDurationL2Input.value = String((dragonGameState.levels[1].fireDurationMin + dragonGameState.levels[1].fireDurationMax) / 2);
  adminDragonCountL3Input.value = String(dragonGameState.levels[2].dragonCount);
  adminDragonTimeL3Input.value = String(dragonGameState.levels[2].timeLimit);
  adminDragonMissesL3Input.value = String(dragonGameState.levels[2].missesAllowed);
  adminDragonGoalL3Input.value = String(dragonGameState.levels[2].goal);
  adminDragonFireDurationL3Input.value = String((dragonGameState.levels[2].fireDurationMin + dragonGameState.levels[2].fireDurationMax) / 2);

  const fireInputGroups = [
    [adminFireTimeL1Input, adminFireMissesL1Input, adminFireGoalL1Input, adminFireSpawnIntervalL1Input, adminFireFlameDurationL1Input],
    [adminFireTimeL2Input, adminFireMissesL2Input, adminFireGoalL2Input, adminFireSpawnIntervalL2Input, adminFireFlameDurationL2Input],
    [adminFireTimeL3Input, adminFireMissesL3Input, adminFireGoalL3Input, adminFireSpawnIntervalL3Input, adminFireFlameDurationL3Input],
  ];

  for (let index = 0; index < fireInputGroups.length; index += 1) {
    const level = fireGameState.levels[index];
    const [timeInput, missesInput, goalInput, spawnInput, flameInput] = fireInputGroups[index];

    timeInput.value = String(level.timeLimit);
    missesInput.value = String(level.missesAllowed);
    goalInput.value = String(level.goal);
    spawnInput.value = String(level.spawnInterval);
    flameInput.value = String(level.flameDuration);
  }
}

function applyHomeMenuVisibility() {
  enterGameButton.hidden = !homeMenuState.showLightGame;
  enterCarGameButton.hidden = !homeMenuState.showCarGame;
  enterDragonGameButton.hidden = !homeMenuState.showDragonGame;
  enterFireGameButton.hidden = !homeMenuState.showFireGame;
}

function applyHomeVisibilityAdminSettings() {
  homeMenuState.showLightGame = adminShowLightGameInput.checked;
  homeMenuState.showCarGame = adminShowCarGameInput.checked;
  homeMenuState.showDragonGame = adminShowDragonGameInput.checked;
  homeMenuState.showFireGame = adminShowFireGameInput.checked;
  applyHomeMenuVisibility();
}

function getCarColorLabel(color) {
  return carColorLabels[color] || 'Blue';
}

function applyCarLevelFromConfig(index) {
  const level = carGameState.levels[index] || carGameState.levels[0];

  carGameState.spawnInterval = level.spawnInterval;
  carGameState.speedMin = level.speedMin || 70;
  carGameState.speedMax = level.speedMax || 125;
  carGameState.carCount = level.carCount;
  carGameState.timeLimit = level.timeLimit;
  carGameState.missesAllowed = level.missesAllowed;
  carGameState.levelGoal = level.goal;

  updateCarTarget(level.targetColor);
  updateCarTime(level.timeLimit);
  updateCarMisses(level.missesAllowed);
  updateCarGoal(carGameState.levelHits, level.goal);
  updateCarLevel(index);
  ensureCarPool(level.carCount);
}

function applyCarAdminSettings() {
  const carInputGroups = [
    [adminCarSpawnIntervalL1Input, adminCarTargetColorL1Select, adminCarTimeL1Input, adminCarCountL1Input, adminCarMissesL1Input, adminCarGoalL1Input, adminCarSpeedMinL1Input, adminCarSpeedMaxL1Input],
    [adminCarSpawnIntervalL2Input, adminCarTargetColorL2Select, adminCarTimeL2Input, adminCarCountL2Input, adminCarMissesL2Input, adminCarGoalL2Input, adminCarSpeedMinL2Input, adminCarSpeedMaxL2Input],
    [adminCarSpawnIntervalL3Input, adminCarTargetColorL3Select, adminCarTimeL3Input, adminCarCountL3Input, adminCarMissesL3Input, adminCarGoalL3Input, adminCarSpeedMinL3Input, adminCarSpeedMaxL3Input],
  ];

  for (let index = 0; index < carInputGroups.length; index += 1) {
    const [spawnInput, colorSelect, timeInput, countInput, missesInput, goalInput, speedMinInput, speedMaxInput] = carInputGroups[index];
    const spawnInterval = Math.max(0.5, clampNumber(spawnInput.value, 0.5, 6));
    const targetColor = carColorLabels[colorSelect.value] ? colorSelect.value : '#38bdf8';
    const timeLimit = Math.round(clampNumber(timeInput.value, 10, 300));
    const carCount = Math.round(clampNumber(countInput.value, 1, 20));
    const missesAllowed = Math.round(clampNumber(missesInput.value, 1, 20));
    const goal = Math.round(clampNumber(goalInput.value, 1, 200));
    const speedMin = Math.round(clampNumber(speedMinInput.value, 40, 600));
    const unclampedSpeedMax = Math.round(clampNumber(speedMaxInput.value, 40, 600));
    const speedMax = Math.max(speedMin + 10, unclampedSpeedMax);

    spawnInput.value = String(spawnInterval);
    colorSelect.value = targetColor;
    timeInput.value = String(timeLimit);
    countInput.value = String(carCount);
    missesInput.value = String(missesAllowed);
    goalInput.value = String(goal);
    speedMinInput.value = String(speedMin);
    speedMaxInput.value = String(speedMax);

    carGameState.levels[index] = {
      spawnInterval,
      targetColor,
      timeLimit,
      carCount,
      missesAllowed,
      goal,
      speedMin,
      speedMax,
    };
  }

  if (!carGameState.running) {
    carGameState.currentLevelIndex = 0;
    carGameState.levelHits = 0;
    applyCarLevelFromConfig(0);
  }
}

function applyDragonLevelFromConfig(index) {
  const level = dragonGameState.levels[index] || dragonGameState.levels[0];

  dragonGameState.timeLimit = level.timeLimit;
  dragonGameState.missesAllowed = level.missesAllowed;
  dragonGameState.levelGoal = level.goal;
  dragonGameState.dragonCount = level.dragonCount;
  dragonGameState.speedMin = level.speedMin;
  dragonGameState.speedMax = level.speedMax;
  dragonGameState.fireDelayMin = level.fireDelayMin;
  dragonGameState.fireDelayMax = level.fireDelayMax;
  dragonGameState.fireDurationMin = level.fireDurationMin;
  dragonGameState.fireDurationMax = level.fireDurationMax;
  ensureDragonPool(level.dragonCount);

  updateDragonLevel(index);
  updateDragonGoal(dragonGameState.levelHits, dragonGameState.levelGoal);
  updateDragonTime(level.timeLimit);
  updateDragonMisses(level.missesAllowed);
}

function applyDragonAdminSettings() {
  const dragonInputGroups = [
    [adminDragonCountL1Input, adminDragonTimeL1Input, adminDragonMissesL1Input, adminDragonGoalL1Input, adminDragonFireDurationL1Input],
    [adminDragonCountL2Input, adminDragonTimeL2Input, adminDragonMissesL2Input, adminDragonGoalL2Input, adminDragonFireDurationL2Input],
    [adminDragonCountL3Input, adminDragonTimeL3Input, adminDragonMissesL3Input, adminDragonGoalL3Input, adminDragonFireDurationL3Input],
  ];

  for (let index = 0; index < dragonInputGroups.length; index += 1) {
    const [countInput, timeInput, missesInput, goalInput, fireDurationInput] = dragonInputGroups[index];
    const dragonCount = Math.round(clampNumber(countInput.value, 1, 12));
    const timeLimit = Math.round(clampNumber(timeInput.value, 10, 300));
    const missesAllowed = Math.round(clampNumber(missesInput.value, 1, 20));
    const goal = Math.round(clampNumber(goalInput.value, 1, 200));
    const fireDurationSeconds = clampNumber(fireDurationInput.value, 0.2, 5);

    countInput.value = String(dragonCount);
    timeInput.value = String(timeLimit);
    missesInput.value = String(missesAllowed);
    goalInput.value = String(goal);
    fireDurationInput.value = String(fireDurationSeconds);

    dragonGameState.levels[index].dragonCount = dragonCount;
    dragonGameState.levels[index].timeLimit = timeLimit;
    dragonGameState.levels[index].missesAllowed = missesAllowed;
    dragonGameState.levels[index].goal = goal;
    dragonGameState.levels[index].fireDurationMin = fireDurationSeconds;
    dragonGameState.levels[index].fireDurationMax = fireDurationSeconds;
  }

  if (!dragonGameState.running) {
    dragonGameState.currentLevelIndex = 0;
    dragonGameState.levelHits = 0;
    applyDragonLevelFromConfig(0);
  }
}

function applyFireLevelFromConfig(index) {
  const level = fireGameState.levels[index] || fireGameState.levels[0];

  fireGameState.timeLimit = level.timeLimit;
  fireGameState.missesAllowed = level.missesAllowed;
  fireGameState.levelGoal = level.goal;
  fireGameState.spawnDelayMin = level.spawnInterval;
  fireGameState.spawnDelayMax = level.spawnInterval;
  fireGameState.flameLifeMin = level.flameDuration;
  fireGameState.flameLifeMax = level.flameDuration;
  fireGameState.helpSpawnChance = level.helpSpawnChance;

  updateFireLevel(index);
  updateFireGoal(fireGameState.levelHits, fireGameState.levelGoal);
  updateFireTime(level.timeLimit);
  updateFireMisses(level.missesAllowed);
}

function applyFireAdminSettings() {
  const fireInputGroups = [
    [adminFireTimeL1Input, adminFireMissesL1Input, adminFireGoalL1Input, adminFireSpawnIntervalL1Input, adminFireFlameDurationL1Input],
    [adminFireTimeL2Input, adminFireMissesL2Input, adminFireGoalL2Input, adminFireSpawnIntervalL2Input, adminFireFlameDurationL2Input],
    [adminFireTimeL3Input, adminFireMissesL3Input, adminFireGoalL3Input, adminFireSpawnIntervalL3Input, adminFireFlameDurationL3Input],
  ];

  for (let index = 0; index < fireInputGroups.length; index += 1) {
    const [timeInput, missesInput, goalInput, spawnInput, flameInput] = fireInputGroups[index];
    const timeLimit = Math.round(clampNumber(timeInput.value, 10, 300));
    const missesAllowed = Math.round(clampNumber(missesInput.value, 1, 20));
    const goal = Math.round(clampNumber(goalInput.value, 1, 200));
    const spawnInterval = clampNumber(spawnInput.value, 0.2, 4);
    const flameDuration = clampNumber(flameInput.value, 0.3, 6);

    timeInput.value = String(timeLimit);
    missesInput.value = String(missesAllowed);
    goalInput.value = String(goal);
    spawnInput.value = String(spawnInterval);
    flameInput.value = String(flameDuration);

    fireGameState.levels[index].timeLimit = timeLimit;
    fireGameState.levels[index].missesAllowed = missesAllowed;
    fireGameState.levels[index].goal = goal;
    fireGameState.levels[index].spawnInterval = spawnInterval;
    fireGameState.levels[index].flameDuration = flameDuration;
  }

  if (!fireGameState.running) {
    fireGameState.currentLevelIndex = 0;
    fireGameState.levelHits = 0;
    applyFireLevelFromConfig(0);
  }
}

function buildAdminSettingsSnapshot() {
  return {
    homeMenuVisibility: {
      showLightGame: homeMenuState.showLightGame,
      showCarGame: homeMenuState.showCarGame,
      showDragonGame: homeMenuState.showDragonGame,
      showFireGame: homeMenuState.showFireGame,
    },
    arenaLevels: arenaState.levels.map((level) => ({
      lives: level.lives,
      time: level.time,
      goal: level.goal,
    })),
    carLevels: carGameState.levels.map((level) => ({
      spawnInterval: level.spawnInterval,
      targetColor: level.targetColor,
      timeLimit: level.timeLimit,
      carCount: level.carCount,
      missesAllowed: level.missesAllowed,
      goal: level.goal,
      speedMin: level.speedMin,
      speedMax: level.speedMax,
    })),
    dragonLevels: dragonGameState.levels.map((level) => ({
      dragonCount: level.dragonCount,
      timeLimit: level.timeLimit,
      missesAllowed: level.missesAllowed,
      goal: level.goal,
      fireDurationSeconds: (level.fireDurationMin + level.fireDurationMax) / 2,
    })),
    fireLevels: fireGameState.levels.map((level) => ({
      timeLimit: level.timeLimit,
      missesAllowed: level.missesAllowed,
      goal: level.goal,
      spawnIntervalSeconds: level.spawnInterval,
      flameDurationSeconds: level.flameDuration,
      helpSpawnChance: level.helpSpawnChance,
    })),
  };
}

function applyAdminSettingsSnapshot(snapshot) {
  if (!snapshot || !Array.isArray(snapshot.arenaLevels) || !Array.isArray(snapshot.carLevels) || !Array.isArray(snapshot.dragonLevels)) {
    return false;
  }

  if (snapshot.arenaLevels.length < 3 || snapshot.carLevels.length < 3 || snapshot.dragonLevels.length < 3) {
    return false;
  }

  const homeMenuVisibility = snapshot.homeMenuVisibility || {};
  homeMenuState.showLightGame = homeMenuVisibility.showLightGame !== false;
  homeMenuState.showCarGame = homeMenuVisibility.showCarGame !== false;
  homeMenuState.showDragonGame = homeMenuVisibility.showDragonGame !== false;
  homeMenuState.showFireGame = homeMenuVisibility.showFireGame !== false;

  const fireLevels = Array.isArray(snapshot.fireLevels) ? snapshot.fireLevels : [];
  const legacyFireSettings = snapshot.fireSettings || {};

  for (let index = 0; index < 3; index += 1) {
    const arenaLevel = snapshot.arenaLevels[index] || {};
    const carLevel = snapshot.carLevels[index] || {};
    const dragonLevel = snapshot.dragonLevels[index] || {};
    const fireLevel = fireLevels[index] || legacyFireSettings;

    arenaState.levels[index].lives = Math.round(clampNumber(arenaLevel.lives, 1, 20));
    arenaState.levels[index].time = Math.round(clampNumber(arenaLevel.time, 10, 300));
    arenaState.levels[index].goal = Math.round(clampNumber(arenaLevel.goal, 1, 200));

    const carSpeedMin = Math.round(clampNumber(carLevel.speedMin, 40, 600));
    const carSpeedMax = Math.max(carSpeedMin + 10, Math.round(clampNumber(carLevel.speedMax, 40, 600)));

    carGameState.levels[index].spawnInterval = Math.max(0.5, clampNumber(carLevel.spawnInterval, 0.5, 6));
    carGameState.levels[index].targetColor = carColorLabels[carLevel.targetColor] ? carLevel.targetColor : '#38bdf8';
    carGameState.levels[index].timeLimit = Math.round(clampNumber(carLevel.timeLimit, 10, 300));
    carGameState.levels[index].carCount = Math.round(clampNumber(carLevel.carCount, 1, 20));
    carGameState.levels[index].missesAllowed = Math.round(clampNumber(carLevel.missesAllowed, 1, 20));
    carGameState.levels[index].goal = Math.round(clampNumber(carLevel.goal, 1, 200));
    carGameState.levels[index].speedMin = carSpeedMin;
    carGameState.levels[index].speedMax = carSpeedMax;

    dragonGameState.levels[index].dragonCount = Math.round(clampNumber(dragonLevel.dragonCount, 1, 12));
    dragonGameState.levels[index].timeLimit = Math.round(clampNumber(dragonLevel.timeLimit, 10, 300));
    dragonGameState.levels[index].missesAllowed = Math.round(clampNumber(dragonLevel.missesAllowed, 1, 20));
    dragonGameState.levels[index].goal = Math.round(clampNumber(dragonLevel.goal, 1, 200));

    const storedFireDuration = Number(dragonLevel.fireDurationSeconds);
    const fireDurationSeconds = Number.isFinite(storedFireDuration)
      ? clampNumber(storedFireDuration, 0.2, 5)
      : clampNumber((dragonGameState.levels[index].fireDurationMin + dragonGameState.levels[index].fireDurationMax) / 2, 0.2, 5);
    dragonGameState.levels[index].fireDurationMin = fireDurationSeconds;
    dragonGameState.levels[index].fireDurationMax = fireDurationSeconds;

    const fireSpawn = clampNumber(
      fireLevel.spawnIntervalSeconds ?? fireLevel.spawnInterval ?? fireGameState.levels[index].spawnInterval,
      0.2,
      4,
    );
    const fireFlameDuration = clampNumber(
      fireLevel.flameDurationSeconds ?? fireLevel.flameDuration ?? fireGameState.levels[index].flameDuration,
      0.3,
      6,
    );
    fireGameState.levels[index].timeLimit = Math.round(clampNumber(fireLevel.timeLimit ?? fireGameState.levels[index].timeLimit, 10, 300));
    fireGameState.levels[index].missesAllowed = Math.round(clampNumber(fireLevel.missesAllowed ?? fireGameState.levels[index].missesAllowed, 1, 20));
    fireGameState.levels[index].goal = Math.round(clampNumber(fireLevel.goal ?? fireGameState.levels[index].goal, 1, 200));
    fireGameState.levels[index].spawnInterval = fireSpawn;
    fireGameState.levels[index].flameDuration = fireFlameDuration;
    fireGameState.levels[index].helpSpawnChance = clampNumber(fireLevel.helpSpawnChance ?? fireGameState.levels[index].helpSpawnChance, 0.05, 0.95);
  }

  syncAdminInputsFromState();
  applyHomeMenuVisibility();

  if (!arenaState.running) {
    const currentLevel = arenaState.levels[arenaState.currentLevelIndex] || arenaState.levels[0];
    updateLives(currentLevel.lives);
    updateTime(currentLevel.time);
    updateGoal(0, currentLevel.goal);
  }

  if (!carGameState.running) {
    carGameState.currentLevelIndex = 0;
    carGameState.levelHits = 0;
    applyCarLevelFromConfig(0);
  }

  if (!dragonGameState.running) {
    dragonGameState.currentLevelIndex = 0;
    dragonGameState.levelHits = 0;
    applyDragonLevelFromConfig(0);
  }

  if (!fireGameState.running) {
    fireGameState.currentLevelIndex = 0;
    fireGameState.levelHits = 0;
    applyFireLevelFromConfig(0);
  }

  return true;
}

function persistAdminSettingsToStorage() {
  try {
    const snapshot = buildAdminSettingsSnapshot();
    localStorage.setItem(ADMIN_SETTINGS_STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore storage failures (private mode or restricted storage).
  }
}

function loadAdminSettingsFromStorage() {
  try {
    const stored = localStorage.getItem(ADMIN_SETTINGS_STORAGE_KEY);

    if (!stored) {
      return;
    }

    const snapshot = JSON.parse(stored);
    applyAdminSettingsSnapshot(snapshot);
  } catch {
    // Ignore malformed or inaccessible storage.
  }
}

function handleAdminSettingsStorageSync(event) {
  if (event.key !== ADMIN_SETTINGS_STORAGE_KEY || !event.newValue) {
    return;
  }

  try {
    const snapshot = JSON.parse(event.newValue);

    if (!applyAdminSettingsSnapshot(snapshot)) {
      return;
    }

    adminMessage.textContent = 'Settings synced from another window.';
  } catch {
    // Ignore malformed storage updates.
  }
}

function applyAdminSettings() {
  if (!arenaState.adminUnlocked) {
    adminMessage.textContent = 'Unlock admin controls first.';
    return;
  }

  applyHomeVisibilityAdminSettings();

  const values = [
    [adminLivesL1Input, adminTimeL1Input, adminGoalL1Input],
    [adminLivesL2Input, adminTimeL2Input, adminGoalL2Input],
    [adminLivesL3Input, adminTimeL3Input, adminGoalL3Input],
  ];

  for (let index = 0; index < values.length; index += 1) {
    const [livesInput, timeInput, goalInput] = values[index];
    const lives = Math.round(clampNumber(livesInput.value, 1, 20));
    const seconds = Math.round(clampNumber(timeInput.value, 10, 300));
    const goal = Math.round(clampNumber(goalInput.value, 1, 200));

    livesInput.value = String(lives);
    timeInput.value = String(seconds);
    goalInput.value = String(goal);

    arenaState.levels[index].lives = lives;
    arenaState.levels[index].time = seconds;
    arenaState.levels[index].goal = goal;
  }

  const currentLevel = arenaState.levels[arenaState.currentLevelIndex];

  if (!arenaState.running) {
    updateLives(currentLevel.lives);
    updateTime(currentLevel.time);
    updateGoal(0, currentLevel.goal);
  }

  setStatus('Admin settings applied for levels 1 to 3');
  applyCarAdminSettings();
  applyDragonAdminSettings();
  applyFireAdminSettings();
  persistAdminSettingsToStorage();
  adminMessage.textContent = 'Settings applied.';
}

function lockAdmin(resetMessage = true) {
  arenaState.adminUnlocked = false;
  adminControls.hidden = true;
  adminUnlockForm.hidden = false;
  adminPasswordInput.value = '';

  if (resetMessage) {
    adminMessage.textContent = '';
  }
}

function sanitizeStudentName(value) {
  // Keep the student entry simple: nickname or class number only.
  return String(value || '').trim().slice(0, 30);
}

function getStudentNameForResults() {
  return getSavedStudentName() || 'Student';
}

function resetTrackedStats(state) {
  state.correctClicks = 0;
  state.missedClicks = 0;
  state.totalAttempts = 0;
  state.sessionStartedAt = performance.now();
}

function recordCorrectAttempt(state) {
  state.correctClicks += 1;
  state.totalAttempts += 1;
}

function recordMissedAttempt(state) {
  state.missedClicks += 1;
  state.totalAttempts += 1;
}

function buildSavedGameResult(gameName, state) {
  const timeSpentSeconds = state.sessionStartedAt > 0
    ? Math.max(1, Math.round((performance.now() - state.sessionStartedAt) / 1000))
    : 0;

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    gameName,
    studentName: getStudentNameForResults(),
    score: state.score,
    correctClicks: state.correctClicks,
    missedClicks: state.missedClicks,
    totalAttempts: state.totalAttempts,
    timeSpentSeconds,
    playedAt: new Date().toISOString(),
    playedAtMs: Date.now(),
  };
}

function saveCompletedGameResult(gameName, state) {
  if (!state.sessionStartedAt) {
    return;
  }

  // Save one shared result row that the teacher dashboard can read later.
  if (window.gameResultsStore) {
    void window.gameResultsStore.saveResult(buildSavedGameResult(gameName, state));
  }

  state.sessionStartedAt = 0;
}

function getSavedStudentName() {
  try {
    return sanitizeStudentName(localStorage.getItem(STUDENT_NAME_STORAGE_KEY) || '');
  } catch {
    return '';
  }
}

function saveStudentName(name) {
  try {
    localStorage.setItem(STUDENT_NAME_STORAGE_KEY, sanitizeStudentName(name));
  } catch {
    // Ignore storage failures and continue with in-memory flow.
  }
}

function clearStudentName() {
  try {
    localStorage.removeItem(STUDENT_NAME_STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}

function setWelcomeBanner(name, isReturningStudent) {
  const safeName = sanitizeStudentName(name) || 'Student';
  studentWelcomeText.textContent = isReturningStudent ? `Welcome back, ${safeName}!` : `Welcome, ${safeName}!`;
  studentBanner.hidden = false;
}

function showNameEntryScreen() {
  nameScreen.removeAttribute('hidden');
  homeScreen.setAttribute('hidden', '');
  gameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  adminDrawer.hidden = true;
  adminToggle.setAttribute('aria-expanded', 'false');
  studentBanner.hidden = true;
  studentNameInput.value = '';
  studentNameInput.focus();
}

function showMainMenuAfterName(name, isReturningStudent) {
  setWelcomeBanner(name, isReturningStudent);
  nameScreen.setAttribute('hidden', '');
  gameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  homeScreen.removeAttribute('hidden');
}

function startWithStudentName() {
  const enteredName = sanitizeStudentName(studentNameInput.value);

  if (!enteredName) {
    studentNameInput.focus();
    return;
  }

  // Save so returning students skip sign-in next time.
  saveStudentName(enteredName);
  showMainMenuAfterName(enteredName, false);
}

function handleChangeName() {
  clearStudentName();

  // Stop running games before returning to name entry.
  arenaState.running = false;
  carGameState.running = false;
  dragonGameState.running = false;
  fireGameState.running = false;
  window.cancelAnimationFrame(arenaState.animationId);
  window.cancelAnimationFrame(carGameState.animationId);
  window.cancelAnimationFrame(dragonGameState.animationId);
  window.cancelAnimationFrame(fireGameState.animationId);
  stopAudio();
  lockAdmin();

  showNameEntryScreen();
}

function initializeStudentNameFlow() {
  const savedName = getSavedStudentName();

  if (savedName) {
    // Returning student: skip sign-in and jump to main menu.
    showMainMenuAfterName(savedName, true);
    return;
  }

  showNameEntryScreen();
}

function toggleAdminControls() {
  const isOpen = !adminDrawer.hidden;
  adminDrawer.hidden = isOpen;
  adminToggle.setAttribute('aria-expanded', String(!isOpen));

  if (isOpen) {
    lockAdmin();
    return;
  }

  if (!arenaState.adminUnlocked) {
    adminPasswordInput.focus();
  }
}

function unlockAdmin(event) {
  event.preventDefault();

  if (adminPasswordInput.value !== ADMIN_PASSWORD) {
    lockAdmin(false);
    adminMessage.textContent = 'Incorrect password.';
    adminPasswordInput.focus();
    return;
  }

  arenaState.adminUnlocked = true;
  adminControls.hidden = false;
  adminUnlockForm.hidden = true;
  adminMessage.textContent = 'Admin unlocked.';
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getLevelSpeed() {
  const level = arenaState.levels[arenaState.currentLevelIndex] || arenaState.levels[0];
  return { min: level.speedMin, max: level.speedMax };
}

function randomVelocity(preserveDirection = false) {
  const speed = getLevelSpeed();
  const magnitudeX = randomBetween(speed.min, speed.max);
  const magnitudeY = randomBetween(speed.min, speed.max);

  if (!preserveDirection) {
    return {
      vx: (Math.random() < 0.5 ? -1 : 1) * magnitudeX,
      vy: (Math.random() < 0.5 ? -1 : 1) * magnitudeY,
    };
  }

  const direction = Math.random() < 0.5 ? -1 : 1;
  return {
    vx: direction * magnitudeX,
    vy: -direction * magnitudeY,
  };
}

function createTarget() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'target';
  button.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);

  const target = {
    element: button,
    x: randomBetween(60, Math.max(120, arenaState.width - 60)),
    y: randomBetween(60, Math.max(120, arenaState.height - 60)),
    vx: 0,
    vy: 0,
    respawning: false,
    size: 52,
  };

  button.addEventListener('pointerdown', (event) => {
    if (!arenaState.running) {
      return;
    }

    if (target.respawning) {
      return;
    }

    event.stopPropagation();

    recordCorrectAttempt(arenaState);
    updateScore(arenaState.score + 1);
    arenaState.levelHits += 1;
    updateGoal(arenaState.levelHits, arenaState.levelGoal);
    setStatus('Nice hit');
    startAudio();
    playHitSpark();

    if (arenaState.levelHits >= arenaState.levelGoal) {
      startLevel(arenaState.currentLevelIndex + 1);
      return;
    }

    target.respawning = true;
    button.classList.add('hit');

    window.setTimeout(() => {
      resetTarget(target, true);
      button.classList.remove('hit');
      target.respawning = false;
    }, 140);
  });

  arena.appendChild(button);
  target.element = button;
  positionTarget(target);
  return target;
}

function positionTarget(target) {
  target.element.style.left = `${target.x}px`;
  target.element.style.top = `${target.y}px`;
}

function resetTarget(target, preserveDirection = false) {
  target.x = randomBetween(60, Math.max(120, arenaState.width - 60));
  target.y = randomBetween(60, Math.max(120, arenaState.height - 60));

  const velocity = randomVelocity(preserveDirection);
  target.vx = velocity.vx;
  target.vy = velocity.vy;

  positionTarget(target);
}

function startLevel(index) {
  if (index >= arenaState.levels.length) {
    endGame(`All levels complete. Final score: ${arenaState.score}`);
    return;
  }

  arenaState.currentLevelIndex = index;
  const level = arenaState.levels[index];

  arenaState.levelHits = 0;
  arenaState.levelGoal = level.goal;

  updateLevel(index);
  updateLives(level.lives);
  updateTime(level.time);
  updateGoal(arenaState.levelHits, arenaState.levelGoal);
  setStatus(`Level ${index + 1} started`);

  for (const target of arenaState.targets) {
    resetTarget(target, false);
  }
}

function createAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  const audioContext = new AudioContextClass();
  const masterGain = audioContext.createGain();
  const oscillator = audioContext.createOscillator();
  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = 180;
  lfo.type = 'sine';
  lfo.frequency.value = 0.35;
  lfoGain.gain.value = 38;

  masterGain.gain.value = 0.028;

  lfo.connect(lfoGain);
  lfoGain.connect(oscillator.frequency);
  oscillator.connect(masterGain);
  masterGain.connect(audioContext.destination);

  oscillator.start();
  lfo.start();

  arenaState.audioContext = audioContext;
  arenaState.masterGain = masterGain;
  arenaState.oscillator = oscillator;
  arenaState.lfo = lfo;
  arenaState.lfoGain = lfoGain;
}

function ensureHitSound() {
  if (arenaState.hitSound) {
    return;
  }

  const sound = new Audio('sounds/shock.mp3');
  sound.preload = 'auto';
  sound.volume = 0.5;
  arenaState.hitSound = sound;
}

function ensureHornSound() {
  if (arenaState.hornSound) {
    return;
  }

  const sound = new Audio('sounds/horn.mp3');
  sound.preload = 'auto';
  sound.volume = 0.65;
  arenaState.hornSound = sound;
}

function ensureCrashSound() {
  if (arenaState.crashSound) {
    return;
  }

  const sound = new Audio('sounds/crash.mp3');
  sound.preload = 'auto';
  sound.volume = 0.65;
  arenaState.crashSound = sound;
}

function ensureMissSound() {
  if (arenaState.missSound) {
    return;
  }

  const sound = new Audio('sounds/miss.mp3');
  sound.preload = 'auto';
  sound.volume = 0.55;
  arenaState.missSound = sound;
}

function ensureDragonFlapSound() {
  if (dragonGameState.flapSound) {
    return;
  }

  const sound = new Audio('sounds/flap.mp3');
  sound.preload = 'auto';
  sound.loop = true;
  sound.volume = 0.3;
  dragonGameState.flapSound = sound;
}

function ensureGileadYellSound() {
  if (dragonGameState.gileadYellSound) {
    return;
  }

  const sound = new Audio('sounds/yell.mp3');
  sound.preload = 'auto';
  sound.volume = 0.72;
  dragonGameState.gileadYellSound = sound;
}

function ensureHelpMeSound() {
  if (fireGameState.helpSound) {
    return;
  }

  const sound = new Audio('sounds/help me.mp3');
  sound.preload = 'auto';
  sound.volume = 0.75;
  fireGameState.helpSound = sound;
}

function ensureFireBurningLoopSound() {
  if (fireGameState.burningLoopSound) {
    return;
  }

  const sound = new Audio('sounds/fire-burning.mp3');
  sound.preload = 'auto';
  sound.loop = true;
  sound.volume = 0.38;
  fireGameState.burningLoopSound = sound;
}

function ensureFireSirenSound() {
  if (fireGameState.sirenSound) {
    return;
  }

  const sound = new Audio('sounds/fire-siren.mp3');
  sound.preload = 'auto';
  sound.volume = 0.2;
  fireGameState.sirenSound = sound;
}

function playHelpMeSound() {
  if (!soundEnabled) {
    return;
  }

  ensureHelpMeSound();

  if (!fireGameState.helpSound) {
    return;
  }

  const shot = fireGameState.helpSound.cloneNode();
  shot.volume = fireGameState.helpSound.volume;
  shot.play().catch(() => {});
}

function playGileadYellSound() {
  if (!soundEnabled) {
    return;
  }

  ensureGileadYellSound();

  if (!dragonGameState.gileadYellSound) {
    return;
  }

  const shot = dragonGameState.gileadYellSound.cloneNode();
  shot.volume = dragonGameState.gileadYellSound.volume;
  shot.play().catch(() => {});
}

function startDragonFlapLoop() {
  if (!soundEnabled) {
    return;
  }

  ensureDragonFlapSound();

  if (!dragonGameState.flapSound) {
    return;
  }

  dragonGameState.flapSound.currentTime = 0;
  dragonGameState.flapSound.play().catch(() => {});
}

function startFireBurningLoop() {
  if (!soundEnabled) {
    return;
  }

  ensureFireBurningLoopSound();

  if (!fireGameState.burningLoopSound) {
    return;
  }

  fireGameState.burningLoopSound.currentTime = 0;
  fireGameState.burningLoopSound.play().catch(() => {});
}

function playFireSirenShot() {
  if (!soundEnabled) {
    return;
  }

  ensureFireSirenSound();

  if (!fireGameState.sirenSound) {
    return;
  }

  const shot = fireGameState.sirenSound.cloneNode();
  shot.volume = fireGameState.sirenSound.volume;
  shot.play().catch(() => {});
}

function startFireSirenLoop() {
  if (!soundEnabled) {
    return;
  }

  if (fireGameState.sirenIntervalId) {
    return;
  }

  fireGameState.sirenIntervalId = window.setInterval(() => {
    if (!fireGameState.running || !soundEnabled) {
      return;
    }

    playFireSirenShot();
  }, 10000);
}

function stopDragonFlapLoop() {
  if (!dragonGameState.flapSound) {
    return;
  }

  dragonGameState.flapSound.pause();
  dragonGameState.flapSound.currentTime = 0;
}

function stopFireBurningLoop() {
  if (!fireGameState.burningLoopSound) {
    return;
  }

  fireGameState.burningLoopSound.pause();
  fireGameState.burningLoopSound.currentTime = 0;
}

function stopFireSirenLoop() {
  if (!fireGameState.sirenIntervalId) {
    return;
  }

  window.clearInterval(fireGameState.sirenIntervalId);
  fireGameState.sirenIntervalId = 0;
}

function startAudio() {
  if (!soundEnabled) {
    return;
  }

  if (!arenaState.audioContext) {
    createAudio();
  }

  if (!arenaState.audioContext) {
    return;
  }

  if (arenaState.audioContext.state === 'suspended') {
    arenaState.audioContext.resume();
  }
}

function stopAudio() {
  if (arenaState.audioContext) {
    arenaState.audioContext.suspend();
  }

  stopDragonFlapLoop();
  stopFireBurningLoop();
  stopFireSirenLoop();
}

function playHitSpark() {
  if (!soundEnabled) {
    return;
  }

  ensureHitSound();

  if (!arenaState.hitSound) {
    return;
  }

  const shot = arenaState.hitSound.cloneNode();
  shot.volume = arenaState.hitSound.volume;
  shot.play().catch(() => {});
}

function playHornSound() {
  if (!soundEnabled) {
    return;
  }

  ensureHornSound();

  if (!arenaState.hornSound) {
    return;
  }

  const shot = arenaState.hornSound.cloneNode();
  shot.volume = arenaState.hornSound.volume;
  shot.play().catch(() => {});
}

function playCrashSound() {
  if (!soundEnabled) {
    return;
  }

  ensureCrashSound();

  if (!arenaState.crashSound) {
    return;
  }

  const shot = arenaState.crashSound.cloneNode();
  shot.volume = arenaState.crashSound.volume;
  shot.play().catch(() => {});
}

function playMissSound() {
  if (!soundEnabled) {
    return;
  }

  ensureMissSound();

  if (!arenaState.missSound) {
    return;
  }

  const shot = arenaState.missSound.cloneNode();
  shot.volume = arenaState.missSound.volume;
  shot.play().catch(() => {});
}

function applyCarMiss(message) {
  playCrashSound();
  updateCarMisses(carGameState.missesLeft - 1);

  if (carGameState.missesLeft <= 0) {
    endCarGame('Out of misses');
    return true;
  }

  setCarStatus(message);
  return false;
}

function step(timestamp) {
  if (!arenaState.running) {
    return;
  }

  const delta = Math.min(0.04, (timestamp - arenaState.lastTime) / 1000 || 0.016);
  arenaState.lastTime = timestamp;

  updateTime(arenaState.timeLeft - delta);

  if (arenaState.timeLeft <= 0) {
    if (arenaState.levelHits < arenaState.levelGoal) {
      endGame(`Level ${arenaState.currentLevelIndex + 1} failed: goal not reached`);
      return;
    }

    startLevel(arenaState.currentLevelIndex + 1);

    if (arenaState.running) {
      arenaState.lastTime = timestamp;
      arenaState.animationId = window.requestAnimationFrame(step);
    }

    return;
  }

  for (const target of arenaState.targets) {
    target.x += target.vx * delta;
    target.y += target.vy * delta;

    if (target.x < target.size / 2) {
      target.x = target.size / 2;
      target.vx *= -1;
    }

    if (target.x > arenaState.width - target.size / 2) {
      target.x = arenaState.width - target.size / 2;
      target.vx *= -1;
    }

    if (target.y < target.size / 2) {
      target.y = target.size / 2;
      target.vy *= -1;
    }

    if (target.y > arenaState.height - target.size / 2) {
      target.y = arenaState.height - target.size / 2;
      target.vy *= -1;
    }

    positionTarget(target);
  }

  arenaState.animationId = window.requestAnimationFrame(step);
}

function endGame(message) {
  const wasRunning = arenaState.running;
  arenaState.running = false;
  setStartButtonVisible(true);
  setStatus(message);
  stopAudio();
  window.cancelAnimationFrame(arenaState.animationId);

  if (wasRunning) {
    saveCompletedGameResult('Light Tap Game', arenaState);
  }
}

function laneCenterY(laneIndex) {
  const laneOffsets = [0.575, 0.765];
  return (laneOffsets[laneIndex] || laneOffsets[0]) * carGameState.height;
}

function positionCar(car) {
  car.element.style.left = `${car.x}px`;
  car.element.style.top = `${car.y}px`;
}

function setCarVisualState(car) {
  car.element.style.setProperty('--car-color', car.color);
  car.element.classList.toggle('rightward', car.direction === -1);
  car.element.classList.toggle('non-target', car.color !== carGameState.targetColor);
  car.element.classList.toggle('is-target', car.color === carGameState.targetColor);
}

function pickCarColor() {
  if (Math.random() < 0.65) {
    return carGameState.targetColor;
  }

  const decoys = carColors.filter((color) => color !== carGameState.targetColor);
  return decoys[Math.floor(Math.random() * decoys.length)];
}

function deactivateCar(car, now = performance.now()) {
  car.active = false;
  car.hit = false;
  car.respawnAt = now + carGameState.spawnInterval * 1000;
  car.element.hidden = true;
}

function activateCar(car, now = performance.now()) {
  const laneIndex = Math.random() < 0.5 ? 0 : 1;
  const direction = laneIndex === 0 ? -1 : 1;
  const speed = randomBetween(carGameState.speedMin, carGameState.speedMax);

  car.active = true;
  car.hit = false;
  car.laneIndex = laneIndex;
  car.direction = direction;
  car.speed = speed;
  car.color = pickCarColor();
  car.y = laneCenterY(laneIndex);
  car.x = direction === 1 ? -car.width : carGameState.width + car.width;
  car.respawnAt = 0;
  car.element.hidden = false;
  car.element.classList.remove('hit');
  setCarVisualState(car);
  positionCar(car);
}

function ensureCarPool(size) {
  while (carGameState.cars.length < size) {
    carGameState.cars.push(createCar());
  }

  while (carGameState.cars.length > size) {
    const car = carGameState.cars.pop();
    car.element.remove();
  }
}

function countActiveCars() {
  return carGameState.cars.filter((car) => car.active).length;
}

function enforceLaneSpacing(cars, direction) {
  if (cars.length < 2) {
    return;
  }

  const minGap = 120;

  if (direction === 1) {
    cars.sort((a, b) => b.x - a.x);

    for (let index = 1; index < cars.length; index += 1) {
      const leader = cars[index - 1];
      const follower = cars[index];
      const maxFollowerX = leader.x - minGap;

      if (follower.x > maxFollowerX) {
        follower.x = maxFollowerX;
      }
    }

    return;
  }

  cars.sort((a, b) => a.x - b.x);

  for (let index = 1; index < cars.length; index += 1) {
    const leader = cars[index - 1];
    const follower = cars[index];
    const minFollowerX = leader.x + minGap;

    if (follower.x < minFollowerX) {
      follower.x = minFollowerX;
    }
  }
}

function createCar() {
  const carElement = document.createElement('button');
  carElement.type = 'button';
  carElement.className = 'car-target';

  const roof = document.createElement('span');
  roof.className = 'car-roof';
  carElement.appendChild(roof);

  const windshield = document.createElement('span');
  windshield.className = 'car-windshield';
  carElement.appendChild(windshield);

  const front = document.createElement('span');
  front.className = 'car-front';
  carElement.appendChild(front);

  const headlightA = document.createElement('span');
  headlightA.className = 'car-headlight car-headlight-a';
  carElement.appendChild(headlightA);

  const headlightB = document.createElement('span');
  headlightB.className = 'car-headlight car-headlight-b';
  carElement.appendChild(headlightB);

  const car = {
    element: carElement,
    x: 0,
    y: 0,
    width: 150,
    height: 68,
    speed: 0,
    direction: 1,
    laneIndex: 0,
    hit: false,
    color: carGameState.targetColor,
    active: false,
    respawnAt: 0,
  };

  carElement.addEventListener('pointerdown', (event) => {
    if (!carGameState.running || car.hit || !car.active) {
      return;
    }

    event.stopPropagation();

    if (car.color !== carGameState.targetColor) {
      recordMissedAttempt(carGameState);
      deactivateCar(car);

      if (!applyCarMiss(`Wrong car. Click the ${carGameState.targetColorLabel.toLowerCase()} cars`)) {
        return;
      }

      return;
    }

    car.hit = true;
    recordCorrectAttempt(carGameState);
    playHornSound();
    updateCarScore(carGameState.score + 1);
    carGameState.levelHits += 1;
    updateCarGoal(carGameState.levelHits, carGameState.levelGoal);
    setCarStatus('Great click');
    carElement.classList.add('hit');

    if (carGameState.levelHits >= carGameState.levelGoal) {
      const nextLevelIndex = carGameState.currentLevelIndex + 1;
      setCarStatus(`Car level ${carGameState.currentLevelIndex + 1} complete`);

      startCarLevel(nextLevelIndex);

      return;
    }

    window.setTimeout(() => {
      deactivateCar(car);
    }, 140);
  });

  streetArena.appendChild(carElement);
  carElement.hidden = true;
  return car;
}

function endCarGame(message) {
  const wasRunning = carGameState.running;
  carGameState.running = false;
  setCarStartButtonVisible(true);
  setCarStatus(message);
  streetArena.classList.remove('is-active');
  window.cancelAnimationFrame(carGameState.animationId);

  if (wasRunning) {
    saveCompletedGameResult('Street Car Game', carGameState);
  }
}

function createDragonFromElement(element) {
  return {
    element,
    fireElement: element.querySelector('.dragon-fire'),
    x: 200,
    y: 130,
    vx: 140,
    vy: 110,
    isFiring: false,
    fireTimeLeft: 0,
    nextFireIn: 1.4,
  };
}

function createDragonTarget() {
  const element = dragonTargetElement.cloneNode(true);
  element.removeAttribute('id');
  dragonArena.appendChild(element);
  return createDragonFromElement(element);
}

function ensureDragonPool(size) {
  if (dragonGameState.dragons.length === 0) {
    dragonGameState.dragons.push(createDragonFromElement(dragonTargetElement));
  }

  while (dragonGameState.dragons.length < size) {
    dragonGameState.dragons.push(createDragonTarget());
  }

  while (dragonGameState.dragons.length > size) {
    const dragon = dragonGameState.dragons.pop();
    dragon.element.remove();
  }
}

function resetDragon(dragon) {
  dragon.x = randomBetween(120, Math.max(140, dragonGameState.width - 120));
  dragon.y = randomBetween(90, Math.max(140, dragonGameState.height * 0.5));
  dragon.vx = (Math.random() < 0.5 ? -1 : 1) * randomBetween(dragonGameState.speedMin, dragonGameState.speedMax);
  dragon.vy = (Math.random() < 0.5 ? -1 : 1) * randomBetween(dragonGameState.speedMin * 0.78, dragonGameState.speedMax * 0.82);
  dragon.isFiring = false;
  dragon.fireTimeLeft = 0;
  dragon.nextFireIn = randomBetween(dragonGameState.fireDelayMin, dragonGameState.fireDelayMax);
  positionDragon(dragon);
}

function rectsOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function showGileadOuch() {
  if (gileadOuchElement) {
    gileadOuchElement.classList.remove('is-visible');
    void gileadOuchElement.offsetWidth;
    gileadOuchElement.classList.add('is-visible');
  }

  playGileadYellSound();
}

function checkGileadFireHit(timestamp) {
  if (!gileadElement) {
    return;
  }

  if (timestamp - dragonGameState.lastGileadHitAt < 800) {
    return;
  }

  const gileadRect = gileadElement.getBoundingClientRect();

  for (const dragon of dragonGameState.dragons) {
    if (!dragon.isFiring || !dragon.fireElement) {
      continue;
    }

    const fireRect = dragon.fireElement.getBoundingClientRect();

    if (!rectsOverlap(fireRect, gileadRect)) {
      continue;
    }

    dragonGameState.lastGileadHitAt = timestamp;
    setDragonStatus('Ouch!');
    showGileadOuch();
    return;
  }
}

function calmDragonFire(dragon, success) {
  dragon.isFiring = false;
  dragon.fireTimeLeft = 0;
  dragon.nextFireIn = randomBetween(dragonGameState.fireDelayMin, dragonGameState.fireDelayMax);

  if (success) {
    recordCorrectAttempt(dragonGameState);
    updateDragonScore(dragonGameState.score + 1);
    dragonGameState.levelHits += 1;
    updateDragonGoal(dragonGameState.levelHits, dragonGameState.levelGoal);
    setDragonStatus('Nice save!');
  }
}

function triggerDragonFire(dragon) {
  dragon.isFiring = true;
  dragon.fireTimeLeft = randomBetween(dragonGameState.fireDurationMin, dragonGameState.fireDurationMax);
  dragon.nextFireIn = 0;
}

function applyDragonMiss() {
  recordMissedAttempt(dragonGameState);
  updateDragonMisses(dragonGameState.missesLeft - 1);

  if (dragonGameState.missesLeft <= 0) {
    endDragonGame('Too much fire!');
    return true;
  }

  setDragonStatus('Too slow!');
  return false;
}

function startDragonLevel(index) {
  if (index >= dragonGameState.levels.length) {
    endDragonGame(`All dragon levels complete. Final score: ${dragonGameState.score}`);
    return;
  }

  dragonGameState.currentLevelIndex = index;
  dragonGameState.levelHits = 0;
  applyDragonLevelFromConfig(index);
  ensureDragonPool(dragonGameState.dragonCount);

  for (const dragon of dragonGameState.dragons) {
    resetDragon(dragon);
  }

  setDragonStatus(`Dragon level ${index + 1} started`);
}

function endDragonGame(message) {
  const wasRunning = dragonGameState.running;
  dragonGameState.running = false;
  setDragonStartButtonVisible(true);
  setDragonStatus(message);
  dragonArena.classList.remove('is-active');

  for (const dragon of dragonGameState.dragons) {
    dragon.isFiring = false;
    positionDragon(dragon);
  }

  if (gileadOuchElement) {
    gileadOuchElement.classList.remove('is-visible');
  }

  stopDragonFlapLoop();

  window.cancelAnimationFrame(dragonGameState.animationId);

  if (wasRunning) {
    saveCompletedGameResult('Dragon Dodge', dragonGameState);
  }
}

function ensureFireWindows() {
  if (fireGameState.windows.length > 0) {
    return;
  }

  const windowElements = Array.from(fireArena.querySelectorAll('.fire-window'));
  fireGameState.windows = windowElements.map((element) => ({
    helpElement: element.querySelector('.window-help'),
    helpCalloutElement: element.querySelector('.window-help-callout'),
    element,
    flameElement: element.querySelector('.window-flame'),
    active: false,
    timeLeft: 0,
    helpActive: false,
    helpTimeLeft: 0,
  }));

  for (const windowState of fireGameState.windows) {
    if (!windowState.helpElement) {
      const helpImage = document.createElement('img');
      helpImage.className = 'window-help';
      helpImage.src = 'sounds/images/help.png';
      helpImage.alt = '';
      helpImage.setAttribute('aria-hidden', 'true');
      windowState.element.appendChild(helpImage);
      windowState.helpElement = helpImage;
    }

    if (!windowState.helpCalloutElement) {
      const helpCallout = document.createElement('span');
      helpCallout.className = 'window-help-callout';
      helpCallout.textContent = 'HELP!';
      helpCallout.setAttribute('aria-hidden', 'true');
      windowState.element.appendChild(helpCallout);
      windowState.helpCalloutElement = helpCallout;
    }
  }
}

function setFireWindowActive(windowState, isActive, lifeSeconds = 0) {
  windowState.active = isActive;
  windowState.timeLeft = lifeSeconds;
  windowState.element.classList.toggle('is-burning', isActive);
}

function setFireWindowHelp(windowState, isActive, lifeSeconds = 0) {
  const wasActive = windowState.helpActive;
  windowState.helpActive = isActive;
  windowState.helpTimeLeft = lifeSeconds;
  windowState.element.classList.toggle('has-help', isActive);

  if (isActive && !wasActive) {
    playHelpMeSound();
  }
}

function clearAllFlames() {
  for (const windowState of fireGameState.windows) {
    setFireWindowActive(windowState, false, 0);
    setFireWindowHelp(windowState, false, 0);
  }
}

function activateRandomFlame() {
  const available = fireGameState.windows.filter((windowState) => !windowState.active && !windowState.helpActive);

  if (available.length === 0) {
    return;
  }

  const target = available[Math.floor(Math.random() * available.length)];
  const lifeSeconds = randomBetween(fireGameState.flameLifeMin, fireGameState.flameLifeMax);
  setFireWindowActive(target, true, lifeSeconds);
}

function activateRandomHelpWindow() {
  const available = fireGameState.windows.filter((windowState) => !windowState.active && !windowState.helpActive);

  if (available.length === 0) {
    return false;
  }

  const target = available[Math.floor(Math.random() * available.length)];
  const lifeSeconds = randomBetween(fireGameState.helpLifeMin, fireGameState.helpLifeMax);
  setFireWindowHelp(target, true, lifeSeconds);
  return true;
}

function hideWaterStream() {
  waterStreamElement.classList.remove('is-visible');
}

function showWaterStream(targetWindowState) {
  if (!targetWindowState) {
    return;
  }

  const arenaRect = fireArena.getBoundingClientRect();
  const firemanRect = firemanButton.getBoundingClientRect();
  const windowRect = targetWindowState.element.getBoundingClientRect();
  const nozzleX = firemanRect.left + firemanRect.width * 0.825 - arenaRect.left;
  const nozzleY = firemanRect.top + firemanRect.height * 0.5 - arenaRect.top;
  const startX = nozzleX;
  const startY = nozzleY + 4;
  const endX = windowRect.left + windowRect.width * 0.5 - arenaRect.left;
  const endY = windowRect.top + windowRect.height * 0.54 - arenaRect.top;
  const dx = endX - startX;
  const dy = endY - startY;
  const distance = Math.max(40, Math.hypot(dx, dy));
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  waterStreamElement.style.left = `${startX}px`;
  waterStreamElement.style.top = `${startY}px`;
  waterStreamElement.style.width = `${distance}px`;
  waterStreamElement.style.transform = `translateY(-50%) rotate(${angle}deg)`;
  waterStreamElement.classList.add('is-visible');

  window.clearTimeout(fireGameState.waterTimeoutId);
  fireGameState.waterTimeoutId = window.setTimeout(() => {
    hideWaterStream();
  }, 240);
}

function applyFireMiss(message) {
  recordMissedAttempt(fireGameState);
  updateFireMisses(fireGameState.missesLeft - 1);

  if (fireGameState.missesLeft <= 0) {
    endFireGame('Too many fires!');
    return true;
  }

  setFireStatus(message);
  return false;
}

function startFireLevel(index) {
  if (index >= fireGameState.levels.length) {
    endFireGame(`All fire levels complete. Final score: ${fireGameState.score}`);
    return;
  }

  fireGameState.currentLevelIndex = index;
  fireGameState.levelHits = 0;
  applyFireLevelFromConfig(index);
  clearAllFlames();
  fireGameState.spawnIn = 0.45;
  setFireStatus(`Fire level ${index + 1} started`);
}

function endFireGame(message) {
  const wasRunning = fireGameState.running;
  fireGameState.running = false;
  setFireStartButtonVisible(true);
  setFireStatus(message);
  fireArena.classList.remove('is-active');
  window.cancelAnimationFrame(fireGameState.animationId);
  window.clearTimeout(fireGameState.waterTimeoutId);
  stopFireBurningLoop();
  stopFireSirenLoop();
  hideWaterStream();
  clearAllFlames();

  if (wasRunning) {
    saveCompletedGameResult('Firefighter Rescue', fireGameState);
  }
}

function stepFireGame(timestamp) {
  if (!fireGameState.running) {
    return;
  }

  const delta = Math.min(0.04, (timestamp - fireGameState.lastTime) / 1000 || 0.016);
  fireGameState.lastTime = timestamp;
  updateFireTime(fireGameState.timeLeft - delta);

  if (fireGameState.timeLeft <= 0) {
    endFireGame(`Fire level ${fireGameState.currentLevelIndex + 1} failed: goal not reached`);
    return;
  }

  fireGameState.spawnIn -= delta;

  if (fireGameState.spawnIn <= 0) {
    const spawnHelp = Math.random() < fireGameState.helpSpawnChance;

    if (!spawnHelp || !activateRandomHelpWindow()) {
      activateRandomFlame();
    }

    fireGameState.spawnIn = randomBetween(fireGameState.spawnDelayMin, fireGameState.spawnDelayMax);
  }

  for (const windowState of fireGameState.windows) {
    if (windowState.active) {
      windowState.timeLeft -= delta;

      if (windowState.timeLeft <= 0) {
        setFireWindowActive(windowState, false, 0);

        if (applyFireMiss('Too slow!')) {
          return;
        }
      }
    }

    if (!windowState.helpActive) {
      continue;
    }

    windowState.helpTimeLeft -= delta;

    if (windowState.helpTimeLeft <= 0) {
      setFireWindowHelp(windowState, false, 0);
    }
  }

  fireGameState.animationId = window.requestAnimationFrame(stepFireGame);
}

function handleFireArenaPointerDown(event) {
  if (!fireGameState.running) {
    return;
  }

  if (event.button !== 0 && event.pointerType !== 'touch') {
    return;
  }

  const clickedWindowElement = event.target.closest('.fire-window');

  if (!clickedWindowElement) {
    setFireStatus('Click a burning window');
    return;
  }

  const targetWindow = fireGameState.windows.find((windowState) => windowState.element === clickedWindowElement);

  if (!targetWindow) {
    return;
  }

  event.stopPropagation();
  showWaterStream(targetWindow);

  if (targetWindow.helpActive) {
    setFireWindowHelp(targetWindow, false, 0);

    if (applyFireMiss('Careful! You sprayed someone yelling help')) {
      return;
    }

    return;
  }

  if (!targetWindow.active) {
    if (applyFireMiss('That window is not burning')) {
      return;
    }

    return;
  }

  setFireWindowActive(targetWindow, false, 0);
  recordCorrectAttempt(fireGameState);
  updateFireScore(fireGameState.score + 1);
  fireGameState.levelHits += 1;
  updateFireGoal(fireGameState.levelHits, fireGameState.levelGoal);
  setFireStatus('Flame out!');

  if (fireGameState.levelHits >= fireGameState.levelGoal) {
    startFireLevel(fireGameState.currentLevelIndex + 1);
  }
}

function startFireGame() {
  resizeFireArena();
  ensureFireWindows();
  clearAllFlames();
  resetTrackedStats(fireGameState);
  updateFireScore(0);
  updateFireTime(fireGameState.timeLimit);
  updateFireMisses(fireGameState.missesAllowed);
  setFireStartButtonVisible(false);
  setFireStatus('Click burning windows. Avoid HELP windows');
  fireArena.classList.add('is-active');

  fireGameState.running = true;
  fireGameState.lastTime = 0;
  fireGameState.currentLevelIndex = 0;
  fireGameState.levelHits = 0;
  startFireLevel(0);
  if (!fireGameState.running) {
    return;
  }
  startFireBurningLoop();
  startFireSirenLoop();

  window.cancelAnimationFrame(fireGameState.animationId);
  fireGameState.animationId = window.requestAnimationFrame(stepFireGame);
}

function stepDragonGame(timestamp) {
  if (!dragonGameState.running) {
    return;
  }

  const delta = Math.min(0.04, (timestamp - dragonGameState.lastTime) / 1000 || 0.016);
  dragonGameState.lastTime = timestamp;
  updateDragonTime(dragonGameState.timeLeft - delta);

  if (dragonGameState.timeLeft <= 0) {
    endDragonGame(`Dragon level ${dragonGameState.currentLevelIndex + 1} failed: goal not reached`);
    return;
  }

  const marginX = 70;
  const minY = 70;
  const maxY = Math.max(120, dragonGameState.height * 0.55);
  let anyFiring = false;

  for (const dragon of dragonGameState.dragons) {
    dragon.x += dragon.vx * delta;
    dragon.y += dragon.vy * delta;

    if (dragon.x <= marginX || dragon.x >= dragonGameState.width - marginX) {
      dragon.vx *= -1;
      dragon.x = Math.min(dragonGameState.width - marginX, Math.max(marginX, dragon.x));
    }

    if (dragon.y <= minY || dragon.y >= maxY) {
      dragon.vy *= -1;
      dragon.y = Math.min(maxY, Math.max(minY, dragon.y));
    }

    if (dragon.isFiring) {
      anyFiring = true;
      dragon.fireTimeLeft -= delta;

      if (dragon.fireTimeLeft <= 0) {
        if (applyDragonMiss()) {
          return;
        }

        calmDragonFire(dragon, false);
      }
    } else {
      dragon.nextFireIn -= delta;

      if (dragon.nextFireIn <= 0) {
        triggerDragonFire(dragon);
        anyFiring = true;
      }
    }

    positionDragon(dragon);
  }

  checkGileadFireHit(timestamp);

  if (dragonGameState.levelHits >= dragonGameState.levelGoal) {
    startDragonLevel(dragonGameState.currentLevelIndex + 1);

    if (!dragonGameState.running) {
      return;
    }
  } else if (anyFiring) {
    setDragonStatus('Fire breath! Tap the dragons!');
  }

  dragonGameState.animationId = window.requestAnimationFrame(stepDragonGame);
}

function startDragonGame() {
  resizeDragonArena();

  updateDragonScore(0);
  resetTrackedStats(dragonGameState);
  dragonGameState.currentLevelIndex = 0;
  dragonGameState.levelHits = 0;
  applyDragonLevelFromConfig(0);
  ensureDragonPool(dragonGameState.dragonCount);
  setDragonStartButtonVisible(false);
  setDragonStatus('Watch the dragons');
  dragonArena.classList.add('is-active');

  dragonGameState.running = true;
  dragonGameState.lastTime = 0;
  dragonGameState.lastGileadHitAt = 0;
  startDragonFlapLoop();
  startDragonLevel(0);

  if (!dragonGameState.running) {
    return;
  }

  window.cancelAnimationFrame(dragonGameState.animationId);
  dragonGameState.animationId = window.requestAnimationFrame(stepDragonGame);
}

function handleDragonArenaPointerDown(event) {
  if (!dragonGameState.running) {
    return;
  }

  if (event.button !== 0 && event.pointerType !== 'touch') {
    return;
  }

  const targetElement = event.target.closest('.dragon-target');

  if (!targetElement) {
    if (dragonGameState.dragons.some((dragon) => dragon.isFiring)) {
      setDragonStatus('Tap the dragons!');
    }

    return;
  }

  event.stopPropagation();

  const dragon = dragonGameState.dragons.find((item) => item.element === targetElement);

  if (!dragon) {
    return;
  }

  if (dragon.isFiring) {
    calmDragonFire(dragon, true);

    if (dragonGameState.levelHits >= dragonGameState.levelGoal) {
      startDragonLevel(dragonGameState.currentLevelIndex + 1);
    }

    return;
  }

  if (applyDragonMiss()) {
    return;
  }

  setDragonStatus('Miss click. Wait for fire');
}

function startCarLevel(index) {
  if (index >= carGameState.levels.length) {
    endCarGame(`All car levels complete. Final score: ${carGameState.score}`);
    return;
  }

  carGameState.currentLevelIndex = index;
  carGameState.levelHits = 0;
  applyCarLevelFromConfig(index);
  setCarStatus(`Car level ${index + 1} started`);

  const now = performance.now();

  for (let carIndex = 0; carIndex < carGameState.cars.length; carIndex += 1) {
    const car = carGameState.cars[carIndex];
    car.respawnAt = now + carIndex * carGameState.spawnInterval * 1000;
    deactivateCar(car, now);
  }

  if (carGameState.cars.length > 0) {
    activateCar(carGameState.cars[0], now);
    carGameState.cars[0].respawnAt = now + carGameState.spawnInterval * 1000;
  }
}

function stepCarGame(timestamp) {
  if (!carGameState.running) {
    return;
  }

  const delta = Math.min(0.04, (timestamp - carGameState.lastTime) / 1000 || 0.016);
  carGameState.lastTime = timestamp;
  updateCarTime(carGameState.timeLeft - delta);

  if (carGameState.timeLeft <= 0) {
    endCarGame(`Car level ${carGameState.currentLevelIndex + 1} failed: goal not reached`);
    return;
  }

  for (const car of carGameState.cars) {
    if (!car.active && car.respawnAt > 0 && timestamp >= car.respawnAt && countActiveCars() < carGameState.carCount) {
      activateCar(car, timestamp);
    }
  }

  for (const car of carGameState.cars) {
    if (!car.active) {
      continue;
    }

    car.x += car.direction * car.speed * delta;

    const outRight = car.direction === 1 && car.x > carGameState.width + car.width;
    const outLeft = car.direction === -1 && car.x < -car.width;

    if (outRight || outLeft) {
      deactivateCar(car, timestamp);
      continue;
    }
  }

  const topLaneCars = [];
  const bottomLaneCars = [];

  for (const car of carGameState.cars) {
    if (!car.active) {
      continue;
    }

    if (car.laneIndex === 0) {
      topLaneCars.push(car);
    } else {
      bottomLaneCars.push(car);
    }
  }

  enforceLaneSpacing(topLaneCars, -1);
  enforceLaneSpacing(bottomLaneCars, 1);

  for (const car of carGameState.cars) {
    if (car.active) {
      positionCar(car);
    }
  }

  carGameState.animationId = window.requestAnimationFrame(stepCarGame);
}

function startCarGame() {
  resizeStreetArena();

  resetTrackedStats(carGameState);
  carGameState.currentLevelIndex = 0;
  carGameState.levelHits = 0;
  applyCarLevelFromConfig(0);
  ensureCarPool(carGameState.carCount);
  updateCarScore(0);
  setCarStartButtonVisible(false);
  setCarStatus('Click the matching cars');
  streetArena.classList.add('is-active');

  carGameState.running = true;
  carGameState.lastTime = 0;
  carGameState.spawnAccumulator = 0;
  startCarLevel(0);

  if (!carGameState.running) {
    return;
  }

  window.cancelAnimationFrame(carGameState.animationId);
  carGameState.animationId = window.requestAnimationFrame(stepCarGame);
}

function startGame() {
  resizeArena();
  updateScore(0);
  resetTrackedStats(arenaState);
  arenaState.currentLevelIndex = 0;
  updateLevel(arenaState.currentLevelIndex);
  setStatus('Catch them fast');

  if (arenaState.targets.length === 0) {
    for (let index = 0; index < 5; index += 1) {
      arenaState.targets.push(createTarget());
    }
  }

  arenaState.running = true;
  arenaState.lastTime = 0;
  arena.classList.add('is-active');
  setStartButtonVisible(false);
  startAudio();
  startLevel(0);
  window.cancelAnimationFrame(arenaState.animationId);
  arenaState.animationId = window.requestAnimationFrame(step);
}

function handleArenaMiss(event) {
  if (!arenaState.running) {
    return;
  }

  if (event.button !== 0 && event.pointerType !== 'touch') {
    return;
  }

  if (event.target.closest('.target')) {
    return;
  }

  recordMissedAttempt(arenaState);
  playMissSound();
  updateLives(arenaState.lives - 1);

  if (arenaState.lives <= 0) {
    endGame('Out of lives');
    return;
  }

  setStatus('Miss click');
}

function handleStreetArenaMiss(event) {
  if (!carGameState.running) {
    return;
  }

  if (event.button !== 0 && event.pointerType !== 'touch') {
    return;
  }

  if (event.target.closest('.car-target')) {
    return;
  }

  recordMissedAttempt(carGameState);
  updateCarMisses(carGameState.missesLeft - 1);

  if (carGameState.missesLeft <= 0) {
    endCarGame('Out of misses');
    return;
  }

  setCarStatus('Miss click');
}

function enterGame() {
  endCarGame('Ready');
  endDragonGame('Ready');
  endFireGame('Ready');
  carGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  homeScreen.setAttribute('hidden', '');
  gameScreen.removeAttribute('hidden');
  adminDrawer.hidden = true;
  adminToggle.setAttribute('aria-expanded', 'false');
  resizeArena();
  setStatus('Press start to play');
  setStartButtonVisible(true);
}

function enterCarGame() {
  arenaState.running = false;
  window.cancelAnimationFrame(arenaState.animationId);
  endDragonGame('Ready');
  endFireGame('Ready');
  stopAudio();
  gameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  adminDrawer.hidden = true;
  adminToggle.setAttribute('aria-expanded', 'false');

  homeScreen.setAttribute('hidden', '');
  carGameScreen.removeAttribute('hidden');
  resizeStreetArena();
  carGameState.currentLevelIndex = 0;
  carGameState.levelHits = 0;
  applyCarLevelFromConfig(0);
  setCarStartButtonVisible(true);
  setCarStatus('Press start to play');
}

function enterDragonGame() {
  arenaState.running = false;
  carGameState.running = false;
  window.cancelAnimationFrame(arenaState.animationId);
  window.cancelAnimationFrame(carGameState.animationId);
  endFireGame('Ready');
  stopAudio();

  gameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  homeScreen.setAttribute('hidden', '');
  dragonGameScreen.removeAttribute('hidden');

  adminDrawer.hidden = true;
  adminToggle.setAttribute('aria-expanded', 'false');

  resizeDragonArena();
  dragonGameState.currentLevelIndex = 0;
  dragonGameState.levelHits = 0;
  applyDragonLevelFromConfig(0);
  updateDragonScore(0);
  updateDragonGoal(0, dragonGameState.levelGoal);
  setDragonStartButtonVisible(true);
  setDragonStatus('Press start to play');
  dragonArena.classList.remove('is-active');

  for (const dragon of dragonGameState.dragons) {
    resetDragon(dragon);
  }
}

function enterFireGame() {
  arenaState.running = false;
  carGameState.running = false;
  dragonGameState.running = false;
  window.cancelAnimationFrame(arenaState.animationId);
  window.cancelAnimationFrame(carGameState.animationId);
  window.cancelAnimationFrame(dragonGameState.animationId);
  stopAudio();

  gameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  homeScreen.setAttribute('hidden', '');
  fireGameScreen.removeAttribute('hidden');

  adminDrawer.hidden = true;
  adminToggle.setAttribute('aria-expanded', 'false');

  resizeFireArena();
  ensureFireWindows();
  clearAllFlames();
  updateFireScore(0);
  fireGameState.currentLevelIndex = 0;
  fireGameState.levelHits = 0;
  applyFireLevelFromConfig(0);
  setFireStartButtonVisible(true);
  setFireStatus('Press start to play');
  fireArena.classList.remove('is-active');
}

function backToMenu() {
  endGame('Press start to play');
  endCarGame('Press start to play');
  endDragonGame('Press start to play');
  endFireGame('Press start to play');
  stopAudio();
  arena.classList.remove('is-active');
  streetArena.classList.remove('is-active');
  dragonArena.classList.remove('is-active');
  fireArena.classList.remove('is-active');

  adminDrawer.hidden = true;
  adminToggle.setAttribute('aria-expanded', 'false');
  lockAdmin();

  gameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  homeScreen.removeAttribute('hidden');

  const level = arenaState.levels[0];
  updateScore(0);
  updateLevel(0);
  updateLives(level.lives);
  updateTime(level.time);
  updateGoal(0, level.goal);
  setStatus('Press start to play');
  setStartButtonVisible(true);
  updateCarScore(0);
  carGameState.currentLevelIndex = 0;
  carGameState.levelHits = 0;
  applyCarLevelFromConfig(0);
  setCarStartButtonVisible(true);
  setCarStatus('Ready');
  dragonGameState.currentLevelIndex = 0;
  dragonGameState.levelHits = 0;
  applyDragonLevelFromConfig(0);
  updateDragonScore(0);
  updateDragonGoal(0, dragonGameState.levelGoal);
  setDragonStartButtonVisible(true);
  setDragonStatus('Ready');
  updateFireScore(0);
  fireGameState.currentLevelIndex = 0;
  fireGameState.levelHits = 0;
  applyFireLevelFromConfig(0);
  setFireStartButtonVisible(true);
  setFireStatus('Ready');

  for (const dragon of dragonGameState.dragons) {
    resetDragon(dragon);
  }
}

function backToMenuFromCar() {
  endCarGame('Press start to play');
  endFireGame('Press start to play');
  carGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  gameScreen.setAttribute('hidden', '');
  homeScreen.removeAttribute('hidden');
  updateCarScore(0);
  carGameState.currentLevelIndex = 0;
  carGameState.levelHits = 0;
  applyCarLevelFromConfig(0);
  setCarStartButtonVisible(true);
  setCarStatus('Ready');
}

function backToMenuFromDragon() {
  endDragonGame('Press start to play');
  endFireGame('Press start to play');
  dragonGameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  fireGameScreen.setAttribute('hidden', '');
  gameScreen.setAttribute('hidden', '');
  homeScreen.removeAttribute('hidden');
  dragonGameState.currentLevelIndex = 0;
  dragonGameState.levelHits = 0;
  applyDragonLevelFromConfig(0);
  updateDragonScore(0);
  updateDragonGoal(0, dragonGameState.levelGoal);
  setDragonStartButtonVisible(true);
  setDragonStatus('Ready');

  for (const dragon of dragonGameState.dragons) {
    resetDragon(dragon);
  }
}

function backToMenuFromFire() {
  endFireGame('Press start to play');
  fireGameScreen.setAttribute('hidden', '');
  dragonGameScreen.setAttribute('hidden', '');
  carGameScreen.setAttribute('hidden', '');
  gameScreen.setAttribute('hidden', '');
  homeScreen.removeAttribute('hidden');
  updateFireScore(0);
  fireGameState.currentLevelIndex = 0;
  fireGameState.levelHits = 0;
  applyFireLevelFromConfig(0);
  setFireStartButtonVisible(true);
  setFireStatus('Ready');
}

startButton.addEventListener('click', startGame);
enterGameButton.addEventListener('click', () => {
  enterGame();
});
enterCarGameButton.addEventListener('click', enterCarGame);
enterDragonGameButton.addEventListener('click', enterDragonGame);
enterFireGameButton.addEventListener('click', enterFireGame);
adminToggle.addEventListener('click', toggleAdminControls);
backToMenuButton.addEventListener('click', backToMenu);
backToMenuFromCarButton.addEventListener('click', backToMenuFromCar);
backToMenuFromDragonButton.addEventListener('click', backToMenuFromDragon);
backToMenuFromFireButton.addEventListener('click', backToMenuFromFire);
carStartButton.addEventListener('click', startCarGame);
dragonStartButton.addEventListener('click', startDragonGame);
fireStartButton.addEventListener('click', startFireGame);
fireArena.addEventListener('pointerdown', handleFireArenaPointerDown);
for (const button of soundToggleButtons) {
  button.addEventListener('click', toggleSoundEnabled);
}
studentStartButton.addEventListener('click', startWithStudentName);
studentNameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    startWithStudentName();
  }
});
changeNameButton.addEventListener('click', handleChangeName);
adminUnlockForm.addEventListener('submit', unlockAdmin);
adminApplyButton.addEventListener('click', applyAdminSettings);
arena.addEventListener('pointerdown', handleArenaMiss);
streetArena.addEventListener('pointerdown', handleStreetArenaMiss);
dragonArena.addEventListener('pointerdown', handleDragonArenaPointerDown);
window.addEventListener('storage', handleAdminSettingsStorageSync);
window.addEventListener('resize', () => {
  resizeArena();
  resizeStreetArena();
  resizeDragonArena();
  resizeFireArena();

  for (const dragon of dragonGameState.dragons) {
    positionDragon(dragon);
  }
});
window.addEventListener('blur', stopAudio);

lockAdmin();
loadSoundPreference();
syncAdminInputsFromState();
applyHomeMenuVisibility();
loadAdminSettingsFromStorage();
resizeArena();
resizeStreetArena();
resizeDragonArena();
resizeFireArena();
updateLevel(0);
updateLives(arenaState.levels[0].lives);
updateTime(arenaState.levels[0].time);
updateGoal(0, arenaState.levels[0].goal);
setStatus('Press play to start');
updateCarScore(0);
applyCarLevelFromConfig(0);
setCarStartButtonVisible(true);
setCarStatus('Ready');
dragonGameState.currentLevelIndex = 0;
dragonGameState.levelHits = 0;
applyDragonLevelFromConfig(0);
updateDragonScore(0);
updateDragonGoal(0, dragonGameState.levelGoal);
setDragonStartButtonVisible(true);
setDragonStatus('Ready');
ensureFireWindows();
updateFireScore(0);
fireGameState.currentLevelIndex = 0;
fireGameState.levelHits = 0;
applyFireLevelFromConfig(0);
setFireStartButtonVisible(true);
setFireStatus('Ready');

for (const dragon of dragonGameState.dragons) {
  resetDragon(dragon);
}

initializeStudentNameFlow();
