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

// Relaxing KeyboardSoundManager Class with Beautiful, Soothing Sounds
class KeyboardSoundManager {
    constructor(enabled, volume) {
        this.audioContext = null;
        this.enabled = enabled;
        this.volume = volume / 100;
        this.masterGain = null;
        this.noteIndex = 0;
        this.pentatonicScale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C, D, E, G, A, C (pentatonic)
        this._initAudio();
    }

    _initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            this.masterGain.gain.value = this.volume;
        } catch (e) { 
            console.warn('Web Audio API not supported'); 
            this.audioContext = null; 
        }
    }

    _createSoothingTone(type = 'keypress') {
        if (!this.enabled || !this.audioContext) return;

        const now = this.audioContext.currentTime;
        const gainNode = this.audioContext.createGain();
        gainNode.connect(this.masterGain);

        let config;
        switch (type) {
            case 'keypress':
                // Soft bell-like tones in pentatonic scale
                const noteFreq = this.pentatonicScale[this.noteIndex % this.pentatonicScale.length];
                this.noteIndex++;
                config = {
                    frequency: noteFreq,
                    harmonics: [1, 0.3, 0.1, 0.05], // Soft harmonics
                    attackTime: 0.02,
                    decayTime: 0.1,
                    sustainLevel: 0.4,
                    releaseTime: 0.6,
                    volume: 0.08,
                    reverbWet: 0.3
                };
                break;
            case 'space':
                // Gentle wind chime sound
                config = {
                    frequency: 523.25 + Math.random() * 100, // High C with slight variation
                    harmonics: [1, 0.5, 0.2, 0.1, 0.05],
                    attackTime: 0.05,
                    decayTime: 0.2,
                    sustainLevel: 0.3,
                    releaseTime: 1.0,
                    volume: 0.06,
                    reverbWet: 0.5
                };
                break;
            case 'error':
                // Very gentle, lower tone - not harsh
                config = {
                    frequency: 220, // A3 - warm, not alarming
                    harmonics: [1, 0.4, 0.1],
                    attackTime: 0.03,
                    decayTime: 0.15,
                    sustainLevel: 0.5,
                    releaseTime: 0.4,
                    volume: 0.05,
                    reverbWet: 0.2
                };
                break;
            case 'complete':
                // Beautiful ascending arpeggio
                config = {
                    frequency: 523.25, // C5
                    harmonics: [1, 0.6, 0.3, 0.1],
                    attackTime: 0.05,
                    decayTime: 0.2,
                    sustainLevel: 0.7,
                    releaseTime: 1.5,
                    volume: 0.15,
                    reverbWet: 0.6
                };
                break;
        }

        // Create main oscillators with soft harmonics
        config.harmonics.forEach((amplitude, index) => {
            if (amplitude > 0.02) {
                const osc = this.audioContext.createOscillator();
                const oscGain = this.audioContext.createGain();
                const filter = this.audioContext.createBiquadFilter();

                // Use sine waves for pure, soft tones
                osc.type = 'sine';
                osc.frequency.setValueAtTime(config.frequency * (index + 1), now);

                // Gentle low-pass filter for warmth
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(2000 - (index * 200), now);
                filter.Q.setValueAtTime(0.5, now); // Gentle filtering

                // Soft envelope
                oscGain.gain.setValueAtTime(0, now);
                oscGain.gain.linearRampToValueAtTime(amplitude * config.volume, now + config.attackTime);
                oscGain.gain.linearRampToValueAtTime(amplitude * config.volume * config.sustainLevel, now + config.attackTime + config.decayTime);
                oscGain.gain.exponentialRampToValueAtTime(0.001, now + config.attackTime + config.decayTime + config.releaseTime);

                osc.connect(filter);
                filter.connect(oscGain);
                oscGain.connect(gainNode);

                osc.start(now);
                osc.stop(now + config.attackTime + config.decayTime + config.releaseTime);
            }
        });

        // Add subtle reverb effect with delay
        if (config.reverbWet > 0) {
            const delayNode = this.audioContext.createDelay(0.3);
            const delayGain = this.audioContext.createGain();
            const feedbackGain = this.audioContext.createGain();

            delayNode.delayTime.setValueAtTime(0.1 + Math.random() * 0.1, now);
            delayGain.gain.setValueAtTime(config.reverbWet * config.volume, now);
            feedbackGain.gain.setValueAtTime(0.2, now);

            // Create reverb chain
            gainNode.connect(delayNode);
            delayNode.connect(delayGain);
            delayGain.connect(this.masterGain);
            delayNode.connect(feedbackGain);
            feedbackGain.connect(delayNode);
        }

        // For spacebar, add a gentle shimmer effect
        if (type === 'space') {
            setTimeout(() => {
                if (this.enabled && this.audioContext) {
                    const shimmerOsc = this.audioContext.createOscillator();
                    const shimmerGain = this.audioContext.createGain();
                    const shimmerFilter = this.audioContext.createBiquadFilter();

                    shimmerOsc.type = 'triangle';
                    shimmerOsc.frequency.setValueAtTime(config.frequency * 2, this.audioContext.currentTime);

                    shimmerFilter.type = 'highpass';
                    shimmerFilter.frequency.setValueAtTime(800, this.audioContext.currentTime);

                    shimmerGain.gain.setValueAtTime(0, this.audioContext.currentTime);
                    shimmerGain.gain.linearRampToValueAtTime(config.volume * 0.3, this.audioContext.currentTime + 0.1);
                    shimmerGain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8);

                    shimmerOsc.connect(shimmerFilter);
                    shimmerFilter.connect(shimmerGain);
                    shimmerGain.connect(this.masterGain);

                    shimmerOsc.start(this.audioContext.currentTime);
                    shimmerOsc.stop(this.audioContext.currentTime + 0.9);
                }
            }, 50);
        }
    }

    playKeystroke(isCorrect = true, isSpace = false) { 
        if (isSpace) {
            this._createSoothingTone('space');
        } else if (isCorrect) {
            this._createSoothingTone('keypress');
        } else {
            this._createSoothingTone('error');
        }
    }

    playWordComplete() { 
        // Play a gentle ascending tone for word completion
        if (this.enabled && this.audioContext) {
            const frequencies = [392.00, 440.00, 523.25]; // G, A, C - pleasant progression
            frequencies.forEach((freq, index) => {
                setTimeout(() => {
                    const osc = this.audioContext.createOscillator();
                    const gain = this.audioContext.createGain();
                    const filter = this.audioContext.createBiquadFilter();

                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(1500, this.audioContext.currentTime);

                    gain.gain.setValueAtTime(0, this.audioContext.currentTime);
                    gain.gain.linearRampToValueAtTime(0.04, this.audioContext.currentTime + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);

                    osc.connect(filter);
                    filter.connect(gain);
                    gain.connect(this.masterGain);

                    osc.start(this.audioContext.currentTime);
                    osc.stop(this.audioContext.currentTime + 0.5);
                }, index * 100);
            });
        }
    }

    playTestComplete() { 
        // Beautiful completion melody
        this._createSoothingTone('complete');
        
        // Play a soothing chord progression
        if (this.enabled && this.audioContext) {
            const chordProgression = [
                [523.25, 659.25, 783.99], // C major
                [587.33, 739.99, 880.00], // D major  
                [659.25, 830.61, 987.77]  // E major
            ];

            chordProgression.forEach((chord, chordIndex) => {
                setTimeout(() => {
                    chord.forEach((freq, noteIndex) => {
                        const osc = this.audioContext.createOscillator();
                        const gain = this.audioContext.createGain();
                        const filter = this.audioContext.createBiquadFilter();

                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

                        filter.type = 'lowpass';
                        filter.frequency.setValueAtTime(2000, this.audioContext.currentTime);

                        const volume = 0.08 * (1 - noteIndex * 0.2); // Softer higher notes
                        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
                        gain.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.1);
                        gain.gain.linearRampToValueAtTime(volume * 0.7, this.audioContext.currentTime + 0.3);
                        gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1.2);

                        osc.connect(filter);
                        filter.connect(gain);
                        gain.connect(this.masterGain);

                        osc.start(this.audioContext.currentTime);
                        osc.stop(this.audioContext.currentTime + 1.3);
                    });
                }, chordIndex * 400);
            });
        }
    }

    toggleSound(enable) { 
        this.enabled = enable; 
    }

    setVolume(volume) { 
        this.volume = volume / 100; 
        if (this.masterGain) {
            this.masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
        }
    }
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

    const welcomeTextElement = document.querySelector('#welcomeScreen .welcome-text');
    const welcomeString = "Welcome to Typing Test!";
    const typingSpeed = 100; // Milliseconds per character
    const postTypingDelay = 500; // Milliseconds to wait after typing before fading
    const fadeOutDuration = 1000; // Milliseconds for the fade-out animation

    if (sessionStorage.getItem('welcomeScreenShown')) {
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        if (mainContainer) mainContainer.style.display = 'block';
        initializeApp();
    } else {
        if (welcomeScreen) welcomeScreen.style.display = 'flex';
        if (mainContainer) mainContainer.style.display = 'none';
        if (welcomeTextElement) welcomeTextElement.innerHTML = ''; // Clear static text

        let charIndex = 0;
        function typeCharacter() {
            if (charIndex < welcomeString.length) {
                if (welcomeTextElement) {
                    welcomeTextElement.textContent += welcomeString.charAt(charIndex);
                    // Add a blinking cursor effect (optional, handled by CSS for simplicity here)
                }
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                // Typing finished, start fade out sequence
                setTimeout(() => {
                    if (welcomeScreen) welcomeScreen.style.opacity = '0';
                    // Ensure the opacity transition has time to complete
                    setTimeout(() => {
                        if (welcomeScreen) welcomeScreen.style.display = 'none';
                        if (mainContainer) mainContainer.style.display = 'block';
                        initializeApp();
                        sessionStorage.setItem('welcomeScreenShown', 'true');
                    }, fadeOutDuration);
                }, postTypingDelay);
            }
        }
        typeCharacter(); // Start the typing animation
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
    else if (key === 'Backspace') { 
        event.preventDefault(); 
        if (gameState.typedWord.length > 0) {
            const originalWordLen = currentWord.length;
            const typedLenBeforeBackspace = gameState.typedWord.length;
            gameState.typedWord = gameState.typedWord.slice(0, -1);
            
            // If we backspaced an "extra" character, ensure its span is removed by updateWordDisplay
            // No direct DOM manipulation here, updateWordDisplay will handle it.
            // Error count should not change if backspacing a correctly typed char or an extra char that was already an error.
            // Error count should decrement if backspacing a mistyped char within original word length.
            // This part of error logic is complex if trying to be perfect with backspace vs error count.
            // For now, errors are primarily counted on input, not adjusted on backspace unless it fixes a prior mis-typed char.
            // The main goal is that updateWordDisplay correctly removes the visual span for extra chars.

            if (keyboardSoundManager) keyboardSoundManager.playKeystroke(true, false); 
        }
    }
    else if (key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
        event.preventDefault(); 
        const charIndexInTypedWord = gameState.typedWord.length;
        gameState.typedWord += key;
        gameState.totalCharsTyped++; // Always count a typed character

        if (charIndexInTypedWord < currentWord.length) {
            // Character is within the bounds of the original word
            if (key !== currentWord[charIndexInTypedWord]) {
                gameState.errors++;
                if (keyboardSoundManager) keyboardSoundManager.playKeystroke(false, false);
            } else {
                if (keyboardSoundManager) keyboardSoundManager.playKeystroke(true, false);
            }
        } else {
            // Character is an "extra" character beyond the original word's length
            gameState.errors++; // Extra characters are always errors
            if (keyboardSoundManager) keyboardSoundManager.playKeystroke(false, false); // Play error sound for extra chars
        }
    }
    updateWordDisplay(); 
    updateCursor(); 
    updateStats();
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
    updateWordDisplay(); 
    updateCursor();
    ensureCurrentWordIsVisible();
}

function updateWordDisplay() {
    if (!gameState.currentWordElement || !gameState.words[gameState.currentWordIndex]) return;

    const currentWordText = gameState.words[gameState.currentWordIndex];
    const typedWord = gameState.typedWord;
    const wordElement = gameState.currentWordElement;
    let charSpans = Array.from(wordElement.childNodes);

    // Ensure wordElement has enough char spans for typedWord, add/remove as necessary
    // First, remove any excess spans (e.g. after backspacing extra chars)
    while (charSpans.length > typedWord.length && charSpans.length > currentWordText.length) {
        const lastSpan = charSpans.pop();
        if (lastSpan) wordElement.removeChild(lastSpan);
    }
    // If typed word is longer than original word, and we don't have enough spans for it.
    for (let i = charSpans.length; i < typedWord.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char'); // Base class for all characters
        wordElement.appendChild(charSpan);
        charSpans.push(charSpan); // Add to our working array
    }

    // Now, style each character span based on typedWord
    for (let i = 0; i < charSpans.length; i++) {
        const span = charSpans[i];
        span.className = 'char'; // Reset classes except 'char'

        if (i < typedWord.length) {
            span.textContent = typedWord[i];
            if (i < currentWordText.length) {
                if (typedWord[i] === currentWordText[i]) {
                    span.classList.add('correct');
                } else {
                    span.classList.add('incorrect');
                }
            } else {
                // This is an extra character beyond the original word's length
                span.classList.add('incorrect'); // Or 'extra' if you have specific styling for only extra
                span.classList.add('extra'); 
            }
        } else if (i < currentWordText.length) {
            // This part of the original word hasn't been typed yet or was backspaced over
            span.textContent = currentWordText[i]; // Show original char
            // No 'correct' or 'incorrect' class yet
        } else {
            // This case should ideally not be reached if span logic above is correct
            // It means we have a span that corresponds neither to typedWord nor currentWordText
             if(span.parentNode) span.parentNode.removeChild(span); // defensive removal
        }
    }
    // Clear any remaining original spans if typed word is shorter than original AND we are not adding extra chars
    // This part is tricky because original spans are created by displayText
    // The logic above should handle displaying original text if not typed / backspaced over.
    // The crucial part is ensuring spans are added for 'extra' characters and styled.

    // Visual indication for entire word if errors occurred (especially for extra chars)
    wordElement.classList.remove('error-extra'); // remove previous state
    if (typedWord.length > currentWordText.length) {
        wordElement.classList.add('error-extra');
    }
}

function initializeCursor() {
    if (!cursor || !textDisplay) return;
    cursor.style.position = 'absolute'; cursor.style.width = '2px'; cursor.style.backgroundColor = 'var(--accent-glow)';
    cursor.style.borderRadius = '1px'; cursor.style.transition = 'left 0.05s linear, top 0.05s linear';
    cursor.style.zIndex = '1'; cursor.style.visibility = 'hidden';
}

function updateCursor() {
    if (!cursor || gameState.isCompleted || !gameState.currentWordElement || 
        (welcomeScreen && welcomeScreen.style.display !== 'none' && parseFloat(getComputedStyle(welcomeScreen).opacity) > 0)) {
        if (cursor) cursor.style.display = 'none';
        return;
    }
    if (cursor) cursor.style.display = 'block';
    
    const wordElement = gameState.currentWordElement;
    const typedWord = gameState.typedWord;
    const charSpans = Array.from(wordElement.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE); // Ensure we only get element nodes
    const textDisplayRect = textDisplay.getBoundingClientRect();

    let targetLeft = 0; // Relative to textDisplay
    let targetTop = 0;  // Relative to textDisplay
    let cursorHeight = wordElement.offsetHeight * 0.8; // Default height

    if (typedWord.length > 0 && charSpans.length > 0) {
        const lastTypedCharIndex = Math.min(typedWord.length - 1, charSpans.length - 1);
        const lastCharSpan = charSpans[lastTypedCharIndex];

        if (lastCharSpan) {
            const lastCharSpanRect = lastCharSpan.getBoundingClientRect();
            targetLeft = (lastCharSpanRect.right - textDisplayRect.left);
            targetTop = (lastCharSpanRect.top - textDisplayRect.top);
            cursorHeight = lastCharSpanRect.height * 0.8;
        } else { // Fallback if lastCharSpan isn't found (should be rare)
            const wordRect = wordElement.getBoundingClientRect();
            targetLeft = (wordRect.left - textDisplayRect.left);
            targetTop = (wordRect.top - textDisplayRect.top);
            cursorHeight = wordRect.height * 0.8;
        }
    } else {
        // No typed characters or no spans, position at the start of the current word element
        const wordRect = wordElement.getBoundingClientRect();
        targetLeft = (wordRect.left - textDisplayRect.left);
        targetTop = (wordRect.top - textDisplayRect.top);
        cursorHeight = wordRect.height * 0.8;
    }

    // Add scrollTop of the textDisplay to targetTop because targetTop is relative to the visible part of textDisplay
    cursor.style.left = `${targetLeft}px`;
    cursor.style.top = `${targetTop + textDisplay.scrollTop}px`;
    cursor.style.height = `${cursorHeight}px`;
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
    ensureCurrentWordIsVisible();
}

function ensureCurrentWordIsVisible() {
    if (!textDisplay || !gameState.currentWordElement) return;

    const displayRect = textDisplay.getBoundingClientRect();
    const wordRect = gameState.currentWordElement.getBoundingClientRect();

    // Calculate position of the word relative to the textDisplay container
    const wordTopRelativeToDisplay = wordRect.top - displayRect.top;
    const wordBottomRelativeToDisplay = wordRect.bottom - displayRect.top;

    const displayVisibleHeight = textDisplay.clientHeight;

    // Define a "comfort zone" (e.g., middle 50% of the display area)
    const comfortZoneTop = displayVisibleHeight * 0.25;
    const comfortZoneBottom = displayVisibleHeight * 0.75;

    let targetScrollTop = textDisplay.scrollTop;

    if (wordTopRelativeToDisplay < comfortZoneTop) {
        // Word is above the comfort zone, scroll up (decrease scrollTop)
        targetScrollTop = textDisplay.scrollTop - (comfortZoneTop - wordTopRelativeToDisplay) - (gameState.currentWordElement.offsetHeight * 0.5);
    } else if (wordBottomRelativeToDisplay > comfortZoneBottom) {
        // Word is below the comfort zone, scroll down (increase scrollTop)
        targetScrollTop = textDisplay.scrollTop + (wordBottomRelativeToDisplay - comfortZoneBottom) + (gameState.currentWordElement.offsetHeight * 0.5);
    }

    // Clamp the scroll top to valid range
    targetScrollTop = Math.max(0, targetScrollTop);
    targetScrollTop = Math.min(targetScrollTop, textDisplay.scrollHeight - displayVisibleHeight);

    if (Math.abs(textDisplay.scrollTop - targetScrollTop) > 5) { // Only scroll if significant change
        textDisplay.scrollTop = targetScrollTop; // Direct scroll for now, CSS handles smooth
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