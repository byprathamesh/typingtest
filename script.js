// Enhanced word lists with more variety
const wordLists = {
    easy: ["the", "and", "for", "are", "but", "not", "you", "can", "had", "her", "was", "one", "our", "out", "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "how", "two", "oil", "sit", "set", "run", "eat", "far", "sea", "eye", "off", "old", "see", "him", "has", "his", "did", "get", "may", "own", "say", "she", "too", "any", "my", "no", "up", "by", "do", "if", "in", "it", "of", "on", "so", "to", "we"],
    
    mixed: [
        "the", "and", "for", "are", "but", "not", "you", "all", "can", "had", "her", "was", "one", "our", "out", "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "how", "its", "who", "oil", "sit", "set", "time", "very", "when", "come", "here", "just", "like", "long", "make", "many", "over", "such", "take", "than", "them", "well", "were",
        
        "about", "other", "which", "their", "would", "there", "could", "after", "first", "never", "these", "think", "where", "being", "every", "great", "might", "shall", "still", "those", "under", "while", "sound", "again", "place", "right", "small", "large", "spell", "house", "point", "letter", "mother", "answer", "found", "study", "learn", "world", "school", "thought", "number", "water", "called", "people", "between", "state", "city", "earth", "eyes", "light", "head", "open", "story", "example", "begin", "life", "always", "both", "paper", "together", "group", "often", "important", "until", "children", "side", "feet", "mile", "night", "walk", "white", "began", "grow", "took", "river", "carry", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "face", "watch", "really", "almost", "above", "girl", "sometimes", "mountain", "young", "talk", "soon", "list", "song", "leave", "family"
    ],
    
    hard: ["accommodate", "embarrass", "millennium", "restaurant", "bureaucracy", "pharmaceutical", "pronunciation", "surveillance", "conscientious", "maintenance", "necessary", "occurrence", "personnel", "privilege", "rhythm", "separate", "temperature", "vacuum", "weird"],
    
    quotes: [
        "The only way to do great work is to love what you do.",
        "Life is what happens while you're busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams."
    ],
    
    numbers: ["123", "456", "789", "012", "345", "678", "901", "234", "567", "890"]
};

// DOM Elements Cache
const difficultySelect = document.getElementById('difficulty');
const timeSelect = document.getElementById('timeLimit');
const soundToggle = document.getElementById('soundToggle');
const volumeSlider = document.getElementById('volumeSlider');
const themeToggleBtn = document.getElementById('themeToggle');
const settingsBtn = document.getElementById('settingsBtn');
const shortcutsBtn = document.getElementById('shortcutsBtn');
const restartBtn = document.getElementById('restartBtn');
const newTestBtn = document.getElementById('newTestBtn');
const shareBtn = document.getElementById('shareBtn');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timerDisplay = document.getElementById('timer');
const errorsDisplay = document.getElementById('errors');
const textDisplay = document.getElementById('textDisplay');
const cursor = document.getElementById('cursor');
const resultsDisplay = document.getElementById('results');
const finalWpmDisplay = document.getElementById('finalWpm');
const finalAccuracyDisplay = document.getElementById('finalAccuracy');
const finalErrorsDisplay = document.getElementById('finalErrors');
const finalTimeDisplay = document.getElementById('finalTime');
const finalCharsDisplay = document.getElementById('finalChars');
const finalWordsDisplay = document.getElementById('finalWords');
const settingsPanel = document.getElementById('settings');
const shortcutsPanel = document.getElementById('shortcuts');

// Welcome Screen elements
const welcomeScreen = document.getElementById('welcomeScreen');
const mainContainer = document.querySelector('.container');

// KeyboardSoundManager Class (reverted to simpler version)
class KeyboardSoundManager {
    constructor(enabled, volume) {
        this.audioContext = null;
        this.enabled = enabled;
        this.volume = volume / 100;
        this.gainNode = null;
        this._initAudio();
    }
    _initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.gainNode = this.audioContext.createGain();
            this.gainNode.connect(this.audioContext.destination);
            this.gainNode.gain.value = this.volume;
        } catch (e) { console.warn('Web Audio API not supported'); this.audioContext = null; }
    }
    _playSound(type) {
        if (!this.enabled || !this.audioContext) return;
        const oscillator = this.audioContext.createOscillator();
        oscillator.connect(this.gainNode);
        let freq = 1000, duration = 0.05; oscillator.type = 'sine';
        switch (type) {
            case 'keypress': freq = 800 + Math.random() * 400; duration = 0.03; oscillator.type = 'triangle'; break;
            case 'space': freq = 400; duration = 0.05; oscillator.type = 'square'; break;
            case 'error': freq = 200; duration = 0.1; oscillator.type = 'sawtooth'; break;
            case 'complete': freq = 1200; duration = 0.15; break;
        }
        oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }
    playKeystroke(isCorrect = true, isSpace = false) { if (isSpace) this._playSound('space'); else if (isCorrect) this._playSound('keypress'); else this._playSound('error'); }
    playWordComplete() { this._playSound('keypress'); }
    playTestComplete() { this._playSound('complete'); }
    toggleSound(enable) { this.enabled = enable; }
    setVolume(volume) { this.volume = volume / 100; if (this.gainNode) this.gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime); }
}

// SettingsManager Class (reverted)
class SettingsManager {
    constructor() {
        this.difficulty = 'mixed'; this.timeLimit = 60; this.soundEnabled = true; this.volume = 30; this.currentTheme = 'dark';
    }
    load() {
        const s = JSON.parse(localStorage.getItem('typingTestSettings'));
        if (s) { this.difficulty = s.difficulty||this.difficulty; this.timeLimit = s.timeLimit||this.timeLimit; this.soundEnabled = s.soundEnabled!==undefined?s.soundEnabled:this.soundEnabled; this.volume = s.volume||this.volume; this.currentTheme = s.theme||this.currentTheme; }
    }
    save() {
        localStorage.setItem('typingTestSettings', JSON.stringify({ difficulty: this.difficulty, timeLimit: this.timeLimit, soundEnabled: this.soundEnabled, volume: this.volume, theme: this.currentTheme }));
    }
    applyCurrentTheme() { document.body.classList.toggle('light-theme', this.currentTheme === 'light'); if (themeToggleBtn) themeToggleBtn.textContent = this.currentTheme === 'light' ? '☀️' : '🌙'; }
}

let keyboardSoundManager;
let settingsManager;

// Game State (reverted)
let gameState = {
    words: [], currentWordIndex: 0, typedWord: '', startTime: null, timeLimit: 60,
    errors: 0, totalCharsTyped: 0, isCompleted: false, timerInterval: null,
    wordElements: [], currentWordElement: null,
};

// DOMContentLoaded: Handles Welcome Screen and App Initialization
document.addEventListener('DOMContentLoaded', () => {
    settingsManager = new SettingsManager();
    settingsManager.load();
    keyboardSoundManager = new KeyboardSoundManager(settingsManager.soundEnabled, settingsManager.volume);

    if (sessionStorage.getItem('welcomeScreenShown')) {
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        if (mainContainer) mainContainer.style.display = 'block';
        initializeApp();
    } else {
        if (welcomeScreen) welcomeScreen.style.display = 'flex';
        if (mainContainer) mainContainer.style.display = 'none';
        setTimeout(() => {
            if (welcomeScreen) welcomeScreen.style.opacity = '0';
            setTimeout(() => {
                if (welcomeScreen) welcomeScreen.style.display = 'none';
                if (mainContainer) mainContainer.style.display = 'block';
                initializeApp();
                sessionStorage.setItem('welcomeScreenShown', 'true');
            }, 1000); // CSS opacity transition
        }, 4000); // Animation time + pause
    }
});

// App Initialization Function
function initializeApp() {
    updateUIFromSettings();
    settingsManager.applyCurrentTheme();
    setupEventListeners();
    startTest(); // Initial test start
    if (textDisplay && mainContainer && mainContainer.style.display === 'block') {
        setTimeout(() => textDisplay.focus(), 50); // Ensure focus after potential layout shifts
    }
    updateTitleColors();
    initializeCursor();
}

function updateUIFromSettings() {
    if (difficultySelect) difficultySelect.value = settingsManager.difficulty;
    if (timeSelect) timeSelect.value = settingsManager.timeLimit;
    if (soundToggle) soundToggle.checked = settingsManager.soundEnabled;
    if (volumeSlider) volumeSlider.value = settingsManager.volume;
    if (keyboardSoundManager) { keyboardSoundManager.toggleSound(settingsManager.soundEnabled); keyboardSoundManager.setVolume(settingsManager.volume); }
    if (timerDisplay) timerDisplay.textContent = settingsManager.timeLimit;
}

function setupEventListeners() {
    if (difficultySelect) difficultySelect.addEventListener('change', (e)=>{ settingsManager.difficulty = e.target.value; settingsManager.save(); startTest(true); });
    if (timeSelect) timeSelect.addEventListener('change', (e)=>{ settingsManager.timeLimit = parseInt(e.target.value); settingsManager.save(); startTest(true); });
    if (soundToggle) soundToggle.addEventListener('change', (e)=>{ settingsManager.soundEnabled = e.target.checked; settingsManager.save(); if (keyboardSoundManager) keyboardSoundManager.toggleSound(settingsManager.soundEnabled); });
    if (volumeSlider) volumeSlider.addEventListener('input', (e)=>{ settingsManager.volume = parseInt(e.target.value); settingsManager.save(); if (keyboardSoundManager) keyboardSoundManager.setVolume(settingsManager.volume); });
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', ()=>{ settingsManager.currentTheme = settingsManager.currentTheme === 'light' ? 'dark' : 'light'; settingsManager.save(); settingsManager.applyCurrentTheme(); });
    if (settingsBtn) settingsBtn.addEventListener('click', toggleSettingsPanel);
    if (shortcutsBtn) shortcutsBtn.addEventListener('click', toggleShortcutsPanel);
    if (textDisplay) {
        textDisplay.addEventListener('keydown', handleInput);
        textDisplay.addEventListener('focus', () => { if (cursor) cursor.style.visibility = 'visible'; });
        textDisplay.addEventListener('blur', () => { if (cursor) cursor.style.visibility = 'hidden'; });
    }
    if (restartBtn) restartBtn.addEventListener('click', () => startTest(true));
    if (newTestBtn) newTestBtn.addEventListener('click', () => startTest(true));
    if (shareBtn) shareBtn.addEventListener('click', shareResults);
    document.addEventListener('keydown', handleGlobalKeyDown);
}

async function getWords(difficulty) {
    let pool = wordLists[difficulty] || wordLists.mixed;
    return [...pool].sort(() => 0.5 - Math.random()).slice(0, 100);
}

function displayText(words) {
    if (!textDisplay) return;
    textDisplay.innerHTML = '';
    gameState.wordElements = [];
    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word');
        word.split('').forEach(char => { const cs = document.createElement('span'); cs.textContent = char; wordSpan.appendChild(cs); });
        textDisplay.appendChild(wordSpan);
        gameState.wordElements.push(wordSpan);
        if (index < words.length - 1) { const s = document.createElement('span'); s.innerHTML = '&nbsp;'; textDisplay.appendChild(s); }
    });
    if (gameState.wordElements.length > 0) { gameState.currentWordIndex = 0; gameState.currentWordElement = gameState.wordElements[0]; gameState.currentWordElement.classList.add('current'); }
    updateCursor();
    textDisplay.scrollTop = 0;
}

function handleInput(event) {
    // If welcome screen is visible and not faded, or test is completed, do nothing
    if (gameState.isCompleted || (welcomeScreen && welcomeScreen.style.display !== 'none' && parseFloat(getComputedStyle(welcomeScreen).opacity) > 0)) {
        return;
    }

    if (!gameState.startTime) startTimer();
    const currentWord = gameState.words[gameState.currentWordIndex];
    const key = event.key;
    if (key === ' ' || key === 'Enter') { event.preventDefault(); if (gameState.typedWord.length > 0) handleWordCompletion(); }
    else if (key === 'Backspace') { event.preventDefault(); if (gameState.typedWord.length > 0) gameState.typedWord = gameState.typedWord.slice(0, -1); if (keyboardSoundManager) keyboardSoundManager.playKeystroke(true, false); }
    else if (key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
        event.preventDefault(); gameState.typedWord += key; gameState.totalCharsTyped++;
        if (key !== currentWord[gameState.typedWord.length - 1] && gameState.typedWord.length <= currentWord.length) { gameState.errors++; if (keyboardSoundManager) keyboardSoundManager.playKeystroke(false, false); }
        else { if (keyboardSoundManager) keyboardSoundManager.playKeystroke(true, false); }
    }
    updateWordDisplay(); updateCursor(); updateStats();
}

function handleWordCompletion() {
    const currentWordText = gameState.words[gameState.currentWordIndex];
    const isCorrect = gameState.typedWord === currentWordText;
    if (isCorrect) { gameState.currentWordElement.classList.add('correct'); if (keyboardSoundManager) keyboardSoundManager.playWordComplete(); }
    else { gameState.currentWordElement.classList.add('incorrect'); if (keyboardSoundManager) keyboardSoundManager.playKeystroke(false, false); }
    gameState.currentWordElement.classList.remove('current');
    gameState.typedWord = ''; gameState.currentWordIndex++;
    if (gameState.currentWordIndex >= gameState.words.length) { endTest(); return; }
    gameState.currentWordElement = gameState.wordElements[gameState.currentWordIndex];
    if (gameState.currentWordElement) gameState.currentWordElement.classList.add('current');
    updateWordDisplay(); updateCursor();
}

function updateWordDisplay() {
    if (!gameState.currentWordElement) return;
    const currentWordText = gameState.words[gameState.currentWordIndex];
    const charSpans = gameState.currentWordElement.childNodes;
    charSpans.forEach((cs, i) => { cs.className = ''; if (i < gameState.typedWord.length) cs.className = gameState.typedWord[i] === currentWordText[i] ? 'correct' : 'incorrect'; });
    gameState.currentWordElement.classList.toggle('error-extra', gameState.typedWord.length > currentWordText.length);
}

function initializeCursor() {
    if (!cursor || !textDisplay) return;
    cursor.style.position = 'absolute'; cursor.style.width = '2px'; cursor.style.backgroundColor = 'var(--accent-glow)';
    cursor.style.borderRadius = '1px'; cursor.style.transition = 'left 0.05s linear, top 0.05s linear';
    cursor.style.zIndex = '1'; cursor.style.visibility = 'hidden';
}

function updateCursor() {
    // If welcome screen is visible and not faded, or test completed, or no current word, hide cursor and return
    if (!cursor || gameState.isCompleted || !gameState.currentWordElement || 
        (welcomeScreen && welcomeScreen.style.display !== 'none' && parseFloat(getComputedStyle(welcomeScreen).opacity) > 0)) {
        if (cursor) cursor.style.display = 'none';
        return;
    }
    if (cursor) cursor.style.display = 'block';
    let charOffset = 0;
    const charElements = gameState.currentWordElement.childNodes;
    for (let i = 0; i < gameState.typedWord.length && i < charElements.length; i++) charOffset += charElements[i].offsetWidth;
    cursor.style.left = `${gameState.currentWordElement.offsetLeft + charOffset}px`;
    cursor.style.top = `${gameState.currentWordElement.offsetTop}px`;
    cursor.style.height = `${gameState.currentWordElement.offsetHeight * 0.8}px`;
}

function calculateWPM() {
    if (!gameState.startTime || gameState.totalCharsTyped === 0) return 0;
    const minutes = (Date.now() - gameState.startTime) / 60000;
    if (minutes === 0) return 0;
    return Math.round((gameState.totalCharsTyped / 5) / minutes);
}

function calculateAccuracy() {
    if (gameState.totalCharsTyped === 0) return 100;
    const correctChars = gameState.totalCharsTyped - gameState.errors;
    return Math.round((correctChars / gameState.totalCharsTyped) * 100);
}

function updateStats() {
    if (gameState.isCompleted) return;
    const wpm = calculateWPM(); const acc = calculateAccuracy();
    if (wpmDisplay) wpmDisplay.textContent = wpm;
    if (accuracyDisplay) accuracyDisplay.textContent = `${acc}%`;
    if (errorsDisplay) errorsDisplay.textContent = gameState.errors;
}

function startTimer() {
    gameState.startTime = Date.now();
    if(timerDisplay) timerDisplay.textContent = gameState.timeLimit;
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        const remaining = gameState.timeLimit - elapsed;
        if(timerDisplay) timerDisplay.textContent = remaining;
        if (remaining <= 0) endTest();
        if(!gameState.isCompleted) updateStats();
    }, 1000);
}

async function startTest(forceNewWords = false) {
    if (welcomeScreen && welcomeScreen.style.display !== 'none' && welcomeScreen.style.opacity !== '0') {
         // If welcome screen is visible and animating (opacity not 0), defer startTest
        console.log("Welcome screen active, startTest deferred.");
        return;
    }
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    gameState.words = await getWords(settingsManager.difficulty);
    gameState.currentWordIndex = 0; gameState.typedWord = ''; gameState.startTime = null;
    gameState.timeLimit = settingsManager.timeLimit; gameState.errors = 0; gameState.totalCharsTyped = 0; gameState.isCompleted = false;
    if(resultsDisplay) resultsDisplay.style.display = 'none';
    if(textDisplay) textDisplay.classList.remove('test-completed');
    if(timerDisplay) timerDisplay.textContent = gameState.timeLimit;
    if(wpmDisplay) wpmDisplay.textContent = '0'; if(accuracyDisplay) accuracyDisplay.textContent = '100%'; if(errorsDisplay) errorsDisplay.textContent = '0';
    displayText(gameState.words);
    updateCursor();
    // Ensure focus only if main container is visible (welcome screen is done)
    if (textDisplay && mainContainer && mainContainer.style.display === 'block') {
        textDisplay.focus();
    }
}

function endTest() {
    if (gameState.isCompleted) return;
    gameState.isCompleted = true;
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    if (keyboardSoundManager) keyboardSoundManager.playTestComplete();
    const finalWpm = calculateWPM(), finalAcc = calculateAccuracy();
    const wordsTypedCount = gameState.wordElements.filter(w => w.classList.contains('correct')).length;
    if(finalWpmDisplay) finalWpmDisplay.textContent = finalWpm;
    if(finalAccuracyDisplay) finalAccuracyDisplay.textContent = `${finalAcc}%`;
    if(finalErrorsDisplay) finalErrorsDisplay.textContent = gameState.errors;
    if(finalTimeDisplay) finalTimeDisplay.textContent = `${settingsManager.timeLimit}s`;
    if(finalCharsDisplay) finalCharsDisplay.textContent = gameState.totalCharsTyped;
    if(finalWordsDisplay) finalWordsDisplay.textContent = wordsTypedCount;
    if(resultsDisplay) resultsDisplay.style.display = 'flex';
    if(textDisplay) textDisplay.classList.add('test-completed');
}

function toggleSettingsPanel() { if (settingsPanel) { settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'flex' : 'none'; if (settingsPanel.style.display === 'flex' && shortcutsPanel) shortcutsPanel.style.display = 'none'; } }
function toggleShortcutsPanel() { if (shortcutsPanel) { shortcutsPanel.style.display = shortcutsPanel.style.display === 'none' ? 'block' : 'none'; if (shortcutsPanel.style.display === 'block' && settingsPanel) settingsPanel.style.display = 'none'; } }

function shareResults() {
    const finalWpm = calculateWPM(), finalAcc = calculateAccuracy();
    const text = `I got ${finalWpm} WPM with ${finalAcc}% accuracy on Typing Test! Try it: ${window.location.href}`;
    if (navigator.share) navigator.share({ title: 'My Typing Test Results!', text: text }).catch(console.error);
    else if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showToast('Results copied!'), () => showToast('Copy failed.'));
    else showToast('Sharing not supported.');
}

function showToast(message) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = message; document.body.appendChild(t);
    setTimeout(() => { t.classList.add('show'); setTimeout(() => { t.classList.remove('show'); setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 500); }, 3000); }, 100);
}

function handleGlobalKeyDown(e) {
    // Do not process shortcuts if welcome screen is visible and not yet faded
    if (welcomeScreen && welcomeScreen.style.display !== 'none' && welcomeScreen.style.opacity !== '0') return;

    const activeEl = document.activeElement, isInput = activeEl === textDisplay || activeEl.tagName === 'INPUT' || activeEl.tagName === 'SELECT' || activeEl.tagName === 'TEXTAREA';
    if (e.ctrlKey && e.key === ',') { e.preventDefault(); toggleSettingsPanel(); }
    else if (e.ctrlKey && e.key === 't') { e.preventDefault(); if (themeToggleBtn) themeToggleBtn.click(); }
    else if (e.ctrlKey && e.key === 's') { e.preventDefault(); if (soundToggle) soundToggle.click(); }
    else if (e.key === 'Escape') {
        if (settingsPanel && settingsPanel.style.display !== 'none') { e.preventDefault(); toggleSettingsPanel(); if(textDisplay) textDisplay.focus(); }
        else if (shortcutsPanel && shortcutsPanel.style.display !== 'none') { e.preventDefault(); toggleShortcutsPanel(); if(textDisplay) textDisplay.focus(); }
        else if (!isInput && textDisplay) { e.preventDefault(); textDisplay.focus(); }
        else if (gameState.isCompleted && textDisplay) { e.preventDefault(); startTest(true); }
    }
    else if (e.key === 'Tab' && (activeEl === textDisplay || !isInput) ) { e.preventDefault(); startTest(true); }
}

function updateTitleColors() {
    const h1 = document.querySelector('header h1');
    if (h1) { h1.innerHTML = `<span class="title-typing">Typing</span><span class="title-test"> Test</span>`; }
}
// End of script. Ensure no duplicated/old functions below this line. 