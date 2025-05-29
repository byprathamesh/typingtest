// Enhanced word lists with better algorithms
const wordLists = {
    easy: [
        "cat", "dog", "run", "jump", "play", "book", "car", "tree", "sun", "moon", "fish", "bird", "home", "door", "good", "bad", "big", "small", "hot", "cold", "yes", "no", "go", "stop", "fast", "slow", "up", "down", "in", "out", "red", "blue", "green", "white", "black", "one", "two", "three", "four", "five"
    ],
    normal: [
        "the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", "is", "was", "are", "been", "has", "had", "were", "said", "each", "which", "where", "much", "very", "what", "know", "just", "first", "get", "over", "think", "also", "back", "use", "her", "would", "make", "like", "into", "him", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "sit", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"
    ],
    hard: [
        "accommodate", "embarrass", "millennium", "restaurant", "bureaucracy", "pharmaceutical", "Massachusetts", "pronunciation", "surveillance", "conscientious", "maintenance", "necessary", "occurrence", "personnel", "privilege", "rhythm", "separate", "temperature", "vacuum", "weird", "absence", "calendar", "foreign", "government", "knowledge", "library", "received", "appreciate", "definitely", "experience", "independent", "intelligence", "leisure", "possession", "thorough", "existence", "piece", "science", "achieve", "believe", "ceiling", "neighbor", "field", "neither", "height", "eight", "ancient", "conscience", "conscious", "curiosity", "beginning", "business", "address", "occasion", "occurred", "omitted", "referred", "committed", "preferred", "benefited", "equipped", "transferred", "permitted", "submitted", "controlled", "excelled", "compelled", "propelled", "excellent", "travelled", "cancelled", "counsellor", "jewellery", "marvellous", "fascinating", "extraordinary", "responsibility", "acknowledgment", "disappointing", "congratulations", "representative", "characteristics", "simultaneously", "transformation", "understanding", "opportunities", "consequences", "administration", "recommendation", "implementation", "sophisticated", "revolutionary", "environmental", "entertainment", "international", "communication", "technological", "philosophical", "psychological", "physiological", "archaeological", "geographical", "mathematical", "automatically", "unfortunately", "uncomfortable", "unbelievable", "extraordinary", "unprecedented", "corresponding", "overwhelming", "comprehensive", "distinguished", "controversial", "fundamental", "experimental", "professional", "traditional", "educational", "operational", "organizational", "inspirational", "motivational", "exceptional", "constitutional", "institutional", "instrumental", "circumstantial", "developmental", "entrepreneurial", "interdisciplinary", "multidisciplinary", "intergenerational", "internationally", "uncharacteristically", "disproportionately", "incomprehensible", "indistinguishable", "counterproductive", "hypersensitivity", "electroencephalogram", "immunoelectrophoresis", "spectrophotometry", "deoxyribonucleic"
    ],
    quotes: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens to you while you're busy making other plans. - John Lennon", 
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It is during our darkest moments that we must focus to see the light. - Aristotle",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
        "Don't let yesterday take up too much of today. - Will Rogers",
        "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
        "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
        "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
    ],
    numbers: [
        "1234567890", "0987654321", "1357924680", "2468013579", "9876543210", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999", "0000000000", "1234", "5678", "9012", "3456", "7890", "1357", "2468", "9513", "7428", "6039", "147", "258", "369", "159", "753", "951", "357", "246", "802", "413", "576", "192", "384", "765", "938", "271", "650", "429", "816", "305", "12345", "67890", "24681", "13579", "97531", "86420", "75319", "64208", "53197", "42086", "31975", "20864", "19753", "08642", "97531", "86420"
    ],
    punctuation: [
        "Hello, world!", "What's up?", "I'm fine.", "How are you?", "That's great!", "Let's go.", "Don't worry.", "It's okay.", "You're right.", "I can't.", "Won't you?", "Isn't it?", "That'll work.", "We'll see.", "I'll try.", "You've got this!", "It's not easy.", "What's wrong?", "Everything's fine.", "Nothing's perfect.", "Someone's calling.", "Nobody's here.", "Everybody's gone.", "Something's missing.", "Anything's possible.", "Here's the thing:", "There's no way.", "Who's there?", "Where's my phone?", "Why's it broken?", "Let's eat, grandma!", "Let's eat grandma!", "Time flies, doesn't it?", "Yes, sir!", "No way, José!", "Well, hello there!", "Oh my goodness!", "What the heck?", "Are you kidding me?", "I don't think so...", "Maybe, just maybe.", "Here we go again!", "That's all, folks!", "To be, or not to be?", "Once upon a time...", "The end.", "P.S. Don't forget!", "etc.", "vs.", "e.g.", "i.e.", "Mrs. Smith", "Dr. Johnson", "Mr. & Mrs. Brown"
    ]
};

// Advanced sound effects with Web Audio API
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {
            keypress: { frequency: 800, duration: 0.05, volume: 0.08 },
            error: { frequency: 300, duration: 0.12, volume: 0.12 },
            complete: { frequency: 600, duration: 0.4, volume: 0.15 },
            wordComplete: { frequency: 1000, duration: 0.08, volume: 0.06 }
        };
        this.enabled = true;
        this.masterVolume = 0.3;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    playSound(type, pitch = 1) {
        if (!this.enabled || !this.audioContext) return;
        
        const sound = this.sounds[type];
        if (!sound) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filterNode = this.audioContext.createBiquadFilter();
        
        // Connect audio nodes
        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Configure oscillator
        oscillator.frequency.value = sound.frequency * pitch;
        oscillator.type = 'sine';
        
        // Configure filter for smoother sound
        filterNode.type = 'lowpass';
        filterNode.frequency.value = sound.frequency * 2;
        
        // Configure gain envelope
        const volume = sound.volume * this.masterVolume;
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + sound.duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + sound.duration);
    }

    setVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// Advanced settings manager with validation
class SettingsManager {
    constructor() {
        this.settings = {
            difficulty: 'normal',
            soundEnabled: true,
            smoothCaret: true,
            liveWpm: true,
            timeLimit: 60,
            soundVolume: 0.3,
            theme: 'dark',
            fontSize: 'medium',
            autoFocus: true
        };
        this.load();
        this.validate();
    }

    load() {
        try {
            const saved = localStorage.getItem('typingTestSettings');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.settings = { ...this.settings, ...parsed };
            }
        } catch (e) {
            console.warn('Failed to load settings:', e);
        }
    }

    save() {
        try {
            localStorage.setItem('typingTestSettings', JSON.stringify(this.settings));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }

    validate() {
        // Validate and fix any invalid settings
        if (!wordLists[this.settings.difficulty]) {
            this.settings.difficulty = 'normal';
        }
        if (typeof this.settings.soundEnabled !== 'boolean') {
            this.settings.soundEnabled = true;
        }
        if (![15, 30, 60, 120, 300].includes(this.settings.timeLimit)) {
            this.settings.timeLimit = 60;
        }
        this.save();
    }

    get(key) {
        return this.settings[key];
    }

    set(key, value) {
        this.settings[key] = value;
        this.validate();
        this.save();
    }
}

// Enhanced performance monitor
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            renderTime: [],
            inputLatency: [],
            memoryUsage: []
        };
        this.isMonitoring = false;
    }

    start() {
        this.isMonitoring = true;
        this.monitorMemory();
    }

    recordRenderTime(startTime) {
        if (!this.isMonitoring) return;
        const renderTime = performance.now() - startTime;
        this.metrics.renderTime.push(renderTime);
        if (this.metrics.renderTime.length > 100) {
            this.metrics.renderTime.shift();
        }
    }

    recordInputLatency(startTime) {
        if (!this.isMonitoring) return;
        const latency = performance.now() - startTime;
        this.metrics.inputLatency.push(latency);
        if (this.metrics.inputLatency.length > 100) {
            this.metrics.inputLatency.shift();
        }
    }

    monitorMemory() {
        if (!this.isMonitoring) return;
        
        if (performance.memory) {
            this.metrics.memoryUsage.push({
                used: performance.memory.usedJSHeapSize,
                total: performance.memory.totalJSHeapSize,
                timestamp: Date.now()
            });
            
            if (this.metrics.memoryUsage.length > 50) {
                this.metrics.memoryUsage.shift();
            }
        }
        
        setTimeout(() => this.monitorMemory(), 5000);
    }

    getAverageRenderTime() {
        if (this.metrics.renderTime.length === 0) return 0;
        return this.metrics.renderTime.reduce((a, b) => a + b, 0) / this.metrics.renderTime.length;
    }

    getAverageInputLatency() {
        if (this.metrics.inputLatency.length === 0) return 0;
        return this.metrics.inputLatency.reduce((a, b) => a + b, 0) / this.metrics.inputLatency.length;
    }
}

// Minimal game state with essential tracking only
let gameState = {
    isActive: false,
    isPaused: false,
    startTime: null,
    currentTime: 0,
    timeLimit: 60,
    currentWordIndex: 0,
    currentCharIndex: 0,
    currentTypedWord: '',
    words: [],
    typedWords: [],
    correctChars: 0,
    totalChars: 0,
    errors: 0,
    wpmHistory: [],
    rawWpmHistory: [],
    difficulty: 'normal'
};

// DOM elements with error checking
const elements = {
    textDisplay: document.getElementById('textDisplay'),
    textInput: null, // No longer using separate input
    caret: document.getElementById('caret'),
    wpm: document.getElementById('wpm'),
    rawWpm: document.getElementById('rawWpm'),
    accuracy: document.getElementById('accuracy'),
    timer: document.getElementById('timer'),
    errors: document.getElementById('errors'),
    restartBtn: document.getElementById('restartBtn'),
    timeSelect: document.getElementById('timeSelect'),
    results: document.getElementById('results'),
    statsBar: document.getElementById('statsBar'),
    settingsToggle: document.getElementById('settingsToggle'),
    settingsPanel: document.getElementById('settingsPanel'),
    difficultySelect: document.getElementById('difficultySelect'),
    soundToggle: document.getElementById('soundToggle'),
    smoothCaretToggle: document.getElementById('smoothCaretToggle'),
    liveWpmToggle: document.getElementById('liveWpmToggle'),
    infoBtn: document.getElementById('infoBtn'),
    keyboardShortcuts: document.getElementById('keyboardShortcuts'),
    shareBtn: document.getElementById('shareBtn'),
    toast: document.getElementById('toast')
};

// Validate DOM elements
Object.keys(elements).forEach(key => {
    if (!elements[key] && key !== 'textInput') {
        console.warn(`Element not found: ${key}`);
    }
});

// Extract elements for backward compatibility
const {
    textDisplay, caret, wpm: wpmElement, rawWpm: rawWpmElement,
    accuracy: accuracyElement, timer: timerElement, errors: errorsElement,
    restartBtn, timeSelect, results: resultsDiv, statsBar, settingsToggle,
    settingsPanel, difficultySelect, soundToggle, smoothCaretToggle,
    liveWpmToggle, infoBtn, keyboardShortcuts, shareBtn, toast
} = elements;

// Add theme toggle element with error checking
const themeToggle = document.getElementById('themeToggle');
if (!themeToggle) {
    console.warn('Theme toggle element not found');
}

// Initialize managers
const soundManager = new SoundManager();
const settingsManager = new SettingsManager();
const performanceMonitor = new PerformanceMonitor();

// Theme management
class ThemeManager {
    constructor() {
        this.currentTheme = settingsManager.get('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
    }

    toggle() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        settingsManager.set('theme', this.currentTheme);
        showToast(`Switched to ${this.currentTheme} theme`);
    }

    applyTheme(theme) {
        const root = document.documentElement;
        
        if (theme === 'light') {
            // Inverted monochrome theme
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#ffffff');
            root.style.setProperty('--bg-tertiary', '#ffffff');
            root.style.setProperty('--text-primary', '#000000');
            root.style.setProperty('--text-secondary', '#000000');
            root.style.setProperty('--text-muted', '#000000');
            root.style.setProperty('--accent-primary', '#000000');
            root.style.setProperty('--error-color', '#ff0000');
            root.style.setProperty('--success-color', '#000000');
            root.style.setProperty('--warning-color', '#000000');
            if (themeToggle) themeToggle.textContent = '🌞';
        } else {
            // Default dark monochrome theme
            root.style.setProperty('--bg-primary', '#000000');
            root.style.setProperty('--bg-secondary', '#000000');
            root.style.setProperty('--bg-tertiary', '#000000');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#ffffff');
            root.style.setProperty('--text-muted', '#ffffff');
            root.style.setProperty('--accent-primary', '#ffffff');
            root.style.setProperty('--error-color', '#ff0000');
            root.style.setProperty('--success-color', '#ffffff');
            root.style.setProperty('--warning-color', '#ffffff');
            if (themeToggle) themeToggle.textContent = '🌙';
        }
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Advanced word generation with improved algorithms
function generateWords(count) {
    const difficulty = gameState.difficulty;
    const wordPool = wordLists[difficulty] || wordLists.normal;
    const words = [];
    
    // Generate many more words to ensure the display is always full
    const targetWords = Math.max(count, 300); // Generate at least 300 words
    
    if (difficulty === 'quotes') {
        // For quotes, intelligently combine sentences
        const sentences = wordPool.slice();
        let wordCount = 0;
        
        while (wordCount < targetWords && sentences.length > 0) {
            const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
            const sentenceWords = randomSentence.split(' ');
            
            for (const word of sentenceWords) {
                if (wordCount >= targetWords) break;
                words.push(word);
                wordCount++;
            }
        }
        
        // Fill remaining with random sentence words if needed
        while (words.length < targetWords) {
            const randomSentence = wordPool[Math.floor(Math.random() * wordPool.length)];
            const sentenceWords = randomSentence.split(' ');
            const randomWord = sentenceWords[Math.floor(Math.random() * sentenceWords.length)];
            words.push(randomWord);
        }
    } else {
        // Enhanced randomization - completely shuffle the word pool multiple times
        const shuffledPool = [];
        
        // Create multiple copies of the word pool for better randomization
        for (let i = 0; i < Math.ceil(targetWords / wordPool.length) + 2; i++) {
            shuffledPool.push(...wordPool);
        }
        
        // Fisher-Yates shuffle for true randomization
        for (let i = shuffledPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
        }
        
        // Take words ensuring no immediate repetition
        const recentWords = [];
        const maxRecent = Math.min(10, wordPool.length / 3);
        
        for (let i = 0; i < targetWords; i++) {
            let word;
            let attempts = 0;
            
            do {
                word = shuffledPool[Math.floor(Math.random() * shuffledPool.length)];
                attempts++;
            } while (recentWords.includes(word) && attempts < 20);
            
            words.push(word);
            recentWords.push(word);
            
            if (recentWords.length > maxRecent) {
                recentWords.shift();
            }
        }
    }
    
    return words.slice(0, targetWords);
}

// Enhanced text display with flowing lines and auto-scroll
function displayText() {
    if (!textDisplay) {
        console.warn('textDisplay element not found');
        return;
    }
    
    textDisplay.innerHTML = '';
    
    // Calculate words to show around current position
    const wordsToShow = 80; // Total words to render
    const startIndex = Math.max(0, gameState.currentWordIndex - 10);
    const endIndex = Math.min(gameState.words.length, startIndex + wordsToShow);
    
    // Create a container for all words
    const wordsContainer = document.createElement('div');
    wordsContainer.style.position = 'relative';
    wordsContainer.style.width = '100%';
    wordsContainer.style.lineHeight = '1.8';
    wordsContainer.style.fontSize = '1.4rem';
    
    for (let wordIndex = startIndex; wordIndex < endIndex; wordIndex++) {
        const word = gameState.words[wordIndex];
        const wordElement = document.createElement('span');
        wordElement.className = 'word';
        wordElement.setAttribute('data-word-index', wordIndex);
        wordElement.style.marginRight = '0.4rem';
        wordElement.style.display = 'inline';
        
        // Set word state classes
        if (wordIndex === gameState.currentWordIndex) {
            wordElement.classList.add('current');
        } else if (wordIndex < gameState.currentWordIndex) {
            const typedWord = gameState.typedWords[wordIndex] || '';
            const isCorrect = typedWord === word;
            wordElement.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        
        // Create character elements
        word.split('').forEach((char, charIndex) => {
            const charElement = document.createElement('span');
            charElement.className = 'char';
            charElement.textContent = char;
            charElement.setAttribute('data-char-index', charIndex);
            
            // Apply character states for completed words or current word up to typed position
            if (wordIndex < gameState.currentWordIndex || 
                (wordIndex === gameState.currentWordIndex && charIndex < gameState.currentCharIndex)) {
                const typedWord = gameState.typedWords[wordIndex] || '';
                
                if (wordIndex === gameState.currentWordIndex) {
                    // Current word being typed
                    const inputValue = gameState.currentTypedWord || '';
                    if (charIndex < inputValue.length) {
                        if (inputValue[charIndex] === char) {
                            charElement.classList.add('correct');
                        } else {
                            charElement.classList.add('incorrect');
                        }
                    }
                } else {
                    // Completed word
                    if (charIndex < typedWord.length) {
                        if (typedWord[charIndex] === char) {
                            charElement.classList.add('correct');
                        } else {
                            charElement.classList.add('incorrect');
                        }
                    }
                }
            }
            
            wordElement.appendChild(charElement);
        });
        
        // Add extra characters if typed word is longer than original
        if (wordIndex === gameState.currentWordIndex) {
            const inputValue = gameState.currentTypedWord || '';
            if (inputValue.length > word.length) {
                for (let i = word.length; i < inputValue.length; i++) {
                    const extraChar = document.createElement('span');
                    extraChar.className = 'char extra';
                    extraChar.textContent = inputValue[i];
                    extraChar.setAttribute('data-char-index', i);
                    wordElement.appendChild(extraChar);
                }
            }
        } else if (wordIndex < gameState.currentWordIndex) {
            const typedWord = gameState.typedWords[wordIndex] || '';
            if (typedWord.length > word.length) {
                for (let i = word.length; i < typedWord.length; i++) {
                    const extraChar = document.createElement('span');
                    extraChar.className = 'char extra';
                    extraChar.textContent = typedWord[i];
                    extraChar.setAttribute('data-char-index', i);
                    wordElement.appendChild(extraChar);
                }
            }
        }
        
        wordsContainer.appendChild(wordElement);
    }
    
    textDisplay.appendChild(wordsContainer);
    if (caret) textDisplay.appendChild(caret);
    
    // Update caret position and auto-scroll
    requestAnimationFrame(() => {
        updateCaret();
        autoScrollToKeepCurrentWordVisible();
    });
}

// Update caret position to follow current typing position
function updateCaret() {
    if (!caret || !textDisplay) {
        return;
    }
    
    caret.style.display = 'block';
    
    // Find the current word element
    const currentWordElement = textDisplay.querySelector(`[data-word-index="${gameState.currentWordIndex}"]`);
    if (!currentWordElement) {
        caret.style.display = 'none';
        return;
    }
    
    const displayRect = textDisplay.getBoundingClientRect();
    let caretLeft = 0;
    let caretTop = 0;
    
    if (gameState.currentCharIndex === 0) {
        // Position at the very beginning of the current word
        const wordRect = currentWordElement.getBoundingClientRect();
        caretLeft = wordRect.left - displayRect.left;
        caretTop = wordRect.top - displayRect.top;
    } else {
        // Position after a specific character
        const chars = currentWordElement.querySelectorAll('.char');
        if (chars.length > 0 && gameState.currentCharIndex <= chars.length) {
            const targetCharIndex = Math.min(gameState.currentCharIndex - 1, chars.length - 1);
            const targetChar = chars[targetCharIndex];
            if (targetChar) {
                const charRect = targetChar.getBoundingClientRect();
                caretLeft = charRect.right - displayRect.left;
                caretTop = charRect.top - displayRect.top;
            }
        } else {
            // Position at the end of the word
            const wordRect = currentWordElement.getBoundingClientRect();
            caretLeft = wordRect.right - displayRect.left;
            caretTop = wordRect.top - displayRect.top;
        }
    }
    
    // Apply the position
    caret.style.left = caretLeft + 'px';
    caret.style.top = caretTop + 'px';
}

// Auto-scroll to keep current word visible in the 6-line display
function autoScrollToKeepCurrentWordVisible() {
    if (!textDisplay) return;
    
    const currentWordElement = textDisplay.querySelector(`[data-word-index="${gameState.currentWordIndex}"]`);
    if (!currentWordElement) return;
    
    const displayRect = textDisplay.getBoundingClientRect();
    const wordRect = currentWordElement.getBoundingClientRect();
    
    const lineHeight = 1.4 * 1.8; // font-size * line-height in rem
    const lineHeightPx = lineHeight * 16; // Convert to pixels (assuming 1rem = 16px)
    
    // Calculate which line the current word is on relative to the display
    const relativeTop = wordRect.top - displayRect.top;
    const currentLine = Math.floor(relativeTop / lineHeightPx);
    
    // If current word is on line 4 or beyond (0-indexed), scroll up to keep it visible
    if (currentLine >= 4) {
        const scrollAmount = (currentLine - 3) * lineHeightPx;
        textDisplay.scrollTop += scrollAmount;
    }
    // If current word is above the visible area, scroll up
    else if (currentLine < 0) {
        const scrollAmount = Math.abs(currentLine) * lineHeightPx;
        textDisplay.scrollTop -= scrollAmount;
    }
}

// Enhanced timer with better tracking
function startTimer() {
    const interval = setInterval(() => {
        gameState.currentTime = (Date.now() - gameState.startTime) / 1000;
        const remainingTime = Math.max(0, gameState.timeLimit - gameState.currentTime);
        
        timerElement.textContent = Math.ceil(remainingTime);
        
        // Record WPM history every second
        if (Math.floor(gameState.currentTime) > gameState.wpmHistory.length) {
            const currentWpm = calculateWPM();
            const currentRawWpm = calculateRawWPM();
            
            gameState.wpmHistory.push({
                time: gameState.currentTime,
                wpm: currentWpm
            });
            
            gameState.rawWpmHistory.push({
                time: gameState.currentTime,
                wpm: currentRawWpm
            });
        }
        
        updateStats();
        
        if (remainingTime <= 0) {
            clearInterval(interval);
            endTest();
        }
    }, 50); // More frequent updates for smoother experience
}

// Calculate net WPM (accounting for errors)
function calculateWPM() {
    if (gameState.currentTime === 0) return 0;
    const minutes = gameState.currentTime / 60;
    const netChars = Math.max(0, gameState.correctChars - gameState.errors);
    return Math.round((netChars / 5) / minutes);
}

// Calculate raw WPM (total characters typed)
function calculateRawWPM() {
    if (gameState.currentTime === 0) return 0;
    const minutes = gameState.currentTime / 60;
    return Math.round((gameState.totalChars / 5) / minutes);
}

// Calculate accuracy
function calculateAccuracy() {
    if (gameState.totalChars === 0) return 100;
    return Math.round((gameState.correctChars / gameState.totalChars) * 100);
}

// Calculate consistency (standard deviation of WPM)
function calculateConsistency() {
    if (gameState.wpmHistory.length < 2) return 100;
    
    const wpms = gameState.wpmHistory.map(h => h.wpm);
    const mean = wpms.reduce((a, b) => a + b, 0) / wpms.length;
    const variance = wpms.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / wpms.length;
    const stdDev = Math.sqrt(variance);
    
    // Convert to consistency percentage (lower std dev = higher consistency)
    const consistency = Math.max(0, 100 - (stdDev * 2));
    return Math.round(consistency);
}

// Optimized stats calculation with real-time tracking
function updateStats() {
    // Recalculate character counts
    gameState.totalChars = 0;
    gameState.correctChars = 0;
    gameState.errors = 0;
    
    // Count previous complete words
    for (let i = 0; i < gameState.currentWordIndex; i++) {
        const typedWord = gameState.typedWords[i] || '';
        const originalWord = gameState.words[i] || '';
        for (let j = 0; j < Math.max(typedWord.length, originalWord.length); j++) {
            gameState.totalChars++;
            if (j < typedWord.length && j < originalWord.length && typedWord[j] === originalWord[j]) {
                gameState.correctChars++;
            } else {
                gameState.errors++;
            }
        }
    }
    
    // Count current word being typed
    const currentWord = gameState.words[gameState.currentWordIndex] || '';
    const currentTyped = gameState.currentTypedWord || '';
    for (let i = 0; i < Math.max(currentTyped.length, currentWord.length); i++) {
        if (i < currentTyped.length) {
            gameState.totalChars++;
            if (i < currentWord.length && currentTyped[i] === currentWord[i]) {
                gameState.correctChars++;
            } else {
                gameState.errors++;
            }
        }
    }

    // Calculate time-based stats
    const timeElapsed = gameState.isActive && gameState.startTime ? 
        (Date.now() - gameState.startTime) / 1000 : gameState.currentTime;
    const minutes = timeElapsed / 60;

    // Calculate WPM (words per minute)
    const wordsTyped = gameState.correctChars / 5; // Standard: 5 chars = 1 word
    const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;

    // Calculate raw WPM (includes incorrect characters)
    const rawWordsTyped = gameState.totalChars / 5;
    const rawWpm = minutes > 0 ? Math.round(rawWordsTyped / minutes) : 0;

    // Calculate accuracy
    const accuracy = gameState.totalChars > 0 ? 
        Math.round((gameState.correctChars / gameState.totalChars) * 100) : 100;

    // Update display elements
    if (wpmElement) wpmElement.textContent = wpm;
    if (rawWpmElement) rawWpmElement.textContent = rawWpm;
    if (accuracyElement) accuracyElement.textContent = accuracy + '%';
    if (errorsElement) errorsElement.textContent = gameState.errors;

    // Update live WPM indicator
    const floatingWpm = document.getElementById('floatingWpm');
    const liveWpmValue = document.getElementById('liveWpmValue');
    if (floatingWpm && liveWpmValue && gameState.isActive) {
        liveWpmValue.textContent = wpm;
        floatingWpm.style.display = (liveWpmToggle && liveWpmToggle.checked) ? 'block' : 'none';
    }

    // Store WPM history for charts
    if (gameState.isActive && timeElapsed > 0) {
        gameState.wpmHistory.push(wpm);
        gameState.rawWpmHistory.push(rawWpm);
    }
}

// Enhanced test completion with detailed results
function endTest() {
    gameState.isActive = false;
    textInput.disabled = true;
    textDisplay.classList.remove('focused');
    
    soundManager.playSound('complete');
    
    // Calculate final statistics
    const finalWpm = calculateWPM();
    const finalRawWpm = calculateRawWPM();
    const finalAccuracy = calculateAccuracy();
    const consistency = calculateConsistency();
    
    let correctWords = 0;
    let wrongWords = 0;
    
    for (let i = 0; i < gameState.currentWordIndex; i++) {
        if (gameState.typedWords[i] === gameState.words[i]) {
            correctWords++;
        } else {
            wrongWords++;
        }
    }
    
    // Display results
    document.getElementById('finalWpm').textContent = finalWpm;
    document.getElementById('finalRawWpm').textContent = finalRawWpm;
    document.getElementById('finalAccuracy').textContent = finalAccuracy + '%';
    document.getElementById('consistency').textContent = consistency + '%';
    document.getElementById('correctWords').textContent = correctWords;
    document.getElementById('wrongWords').textContent = wrongWords;
    document.getElementById('totalCharsTyped').textContent = gameState.totalChars;
    document.getElementById('testDuration').textContent = gameState.timeLimit + 's';
    
    // Create enhanced speed chart
    createSpeedChart();
    
    // Show results with animation
    statsBar.style.display = 'none';
    resultsDiv.style.display = 'block';
    resultsDiv.classList.add('fade-in');
}

// Enhanced chart with dual WPM tracking
function createSpeedChart() {
    const ctx = document.getElementById('wpmChart').getContext('2d');
    
    // Clear any existing chart
    if (window.typingChart) {
        window.typingChart.destroy();
    }
    
    const labels = gameState.wpmHistory.map((_, index) => (index + 1) + 's');
    const netWpmData = gameState.wpmHistory.map(point => point.wpm);
    const rawWpmData = gameState.rawWpmHistory.map(point => point.wpm);
    
    window.typingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Net WPM',
                    data: netWpmData,
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#ffffff',
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Raw WPM',
                    data: rawWpmData,
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#ffffff',
                    pointRadius: 3,
                    pointHoverRadius: 5,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    ticks: {
                        color: '#ffffff',
                        font: {
                            family: 'JetBrains Mono, monospace'
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    ticks: {
                        color: '#ffffff',
                        font: {
                            family: 'JetBrains Mono, monospace'
                        }
                    },
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            family: 'JetBrains Mono, monospace'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#ffffff',
                    borderWidth: 1
                }
            }
        }
    });
}

// Share results functionality
function shareResults() {
    const finalWpm = calculateWPM();
    const finalAccuracy = calculateAccuracy();
    const consistency = calculateConsistency();
    
    const resultsText = `🎯 Typing Test Results 🎯
⚡ WPM: ${finalWpm}
🎯 Accuracy: ${finalAccuracy}%
📊 Consistency: ${consistency}%
⏱️ Time: ${gameState.timeLimit}s
📝 Difficulty: ${gameState.difficulty}

Try it yourself at: ${window.location.href}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(resultsText).then(() => {
            showToast('Results copied to clipboard!');
        }).catch(() => {
            showToast('Failed to copy results');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = resultsText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Results copied to clipboard!');
    }
}

// Show toast notification
function showToast(message) {
    if (!toast) {
        console.warn('Toast element not found');
        return;
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Restart the test
function restartTest() {
    // Save current settings
    settingsManager.set('timeLimit', parseInt(timeSelect.value));
    settingsManager.set('difficulty', difficultySelect.value);
    settingsManager.set('soundEnabled', soundToggle.checked);
    settingsManager.set('smoothCaret', smoothCaretToggle.checked);
    settingsManager.set('liveWpm', liveWpmToggle.checked);
    
    soundManager.enabled = soundToggle.checked;
    
    initializeTest();
}

// Enhanced event listeners with comprehensive keyboard shortcuts
function setupEventListeners() {
    // Direct keyboard input on text display
    if (textDisplay) {
        textDisplay.addEventListener('click', () => {
            textDisplay.focus();
        });
        
        textDisplay.addEventListener('focus', () => {
            textDisplay.classList.add('focused');
        });
        
        textDisplay.addEventListener('blur', () => {
            textDisplay.classList.remove('focused');
        });
    }

    // Global keyboard event listener
    document.addEventListener('keydown', (event) => {
        // Check if user is typing in an input field
        const isTypingInInput = event.target.tagName === 'INPUT' || 
                               event.target.tagName === 'TEXTAREA' || 
                               event.target.tagName === 'SELECT';
        
        // Handle keyboard shortcuts
        if (event.key === 'Tab') {
            event.preventDefault();
            restartTest();
            return;
        }
        
        if (event.key === 'Escape') {
            event.preventDefault();
            if (textDisplay) {
                textDisplay.focus();
            }
            return;
        }
        
        if (event.ctrlKey && event.shiftKey && event.key === 'P') {
            event.preventDefault();
            if (settingsPanel) {
                settingsPanel.classList.toggle('active');
            }
            return;
        }
        
        if (event.ctrlKey && event.shiftKey && event.key === 'S') {
            event.preventDefault();
            if (soundToggle) {
                soundToggle.checked = !soundToggle.checked;
                soundToggle.dispatchEvent(new Event('change'));
            }
            return;
        }
        
        // If not typing in an input field, handle typing
        if (!isTypingInInput) {
            handleKeyboard(event);
        }
    });

    // Restart button
    if (restartBtn) {
        restartBtn.addEventListener('click', restartTest);
    }
    
    // Time selection
    if (timeSelect) {
        timeSelect.addEventListener('change', (event) => {
            gameState.timeLimit = parseInt(event.target.value);
            initializeTest();
        });
    }
    
    // Settings toggle
    if (settingsToggle) {
        settingsToggle.addEventListener('click', () => {
            if (settingsPanel) {
                settingsPanel.classList.toggle('active');
            }
        });
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeManager.toggle();
        });
    }
    
    // Difficulty change
    if (difficultySelect) {
        difficultySelect.addEventListener('change', (event) => {
            gameState.difficulty = event.target.value;
            initializeTest();
        });
    }
    
    // Sound toggle
    if (soundToggle) {
        soundToggle.addEventListener('change', (event) => {
            soundManager.enabled = event.target.checked;
            localStorage.setItem('soundEnabled', event.target.checked);
        });
    }
    
    // Smooth caret toggle
    if (smoothCaretToggle) {
        smoothCaretToggle.addEventListener('change', (event) => {
            const smoothEnabled = event.target.checked;
            if (caret) {
                caret.classList.toggle('smooth', smoothEnabled);
            }
            localStorage.setItem('smoothCaret', smoothEnabled);
        });
    }
    
    // Live WPM toggle
    if (liveWpmToggle) {
        liveWpmToggle.addEventListener('change', (event) => {
            const liveWpmEnabled = event.target.checked;
            const floatingWpm = document.getElementById('floatingWpm');
            if (floatingWpm) {
                floatingWpm.style.display = liveWpmEnabled ? 'block' : 'none';
            }
            localStorage.setItem('liveWpmEnabled', liveWpmEnabled);
        });
    }
    
    // Info button for keyboard shortcuts
    if (infoBtn && keyboardShortcuts) {
        infoBtn.addEventListener('click', () => {
            keyboardShortcuts.style.display = keyboardShortcuts.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Share button
    if (shareBtn) {
        shareBtn.addEventListener('click', shareResults);
    }
}

// Initialize the test and set up the game state
function initializeTest() {
    // Reset game state
    Object.assign(gameState, {
        isActive: false,
        isPaused: false,
        startTime: null,
        currentTime: 0,
        timeLimit: parseInt((timeSelect && timeSelect.value) || '60'),
        currentWordIndex: 0,
        currentCharIndex: 0,
        currentTypedWord: '',
        words: [],
        typedWords: [],
        correctChars: 0,
        totalChars: 0,
        errors: 0,
        wpmHistory: [],
        rawWpmHistory: [],
        difficulty: (difficultySelect && difficultySelect.value) || 'normal'
    });

    // Generate plenty of words to completely fill the larger display area
    gameState.words = generateWords(300);

    // Update UI
    if (resultsDiv) resultsDiv.style.display = 'none';
    if (statsBar) statsBar.style.display = 'flex';
    if (textDisplay) {
        textDisplay.classList.remove('focused');
        textDisplay.focus(); // Auto-focus the text display
        textDisplay.scrollTop = 0; // Reset scroll position
    }
    
    // Update timer display
    if (timerElement) timerElement.textContent = gameState.timeLimit;
    
    displayText();
    updateStats();
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initializeTest();
});

// Enhanced keyboard input handler for direct text display interaction
function handleKeyboard(event) {
    // Prevent default browser behavior for typing keys
    if (event.key.length === 1 || event.key === 'Backspace' || event.key === ' ') {
        event.preventDefault();
    }

    if (!gameState.isActive && (event.key.length === 1 || event.key === ' ')) {
        gameState.isActive = true;
        gameState.startTime = Date.now();
        startTimer();
        if (textDisplay) textDisplay.classList.add('focused');
    }

    const currentWord = gameState.words[gameState.currentWordIndex];
    if (!currentWord) return;

    // Handle regular character input
    if (event.key.length === 1 && event.key !== ' ') {
        gameState.currentTypedWord += event.key;
        gameState.currentCharIndex = gameState.currentTypedWord.length;
        
        // Play sound for keystrokes
        const expectedChar = currentWord[gameState.currentTypedWord.length - 1];
        if (event.key === expectedChar) {
            soundManager.playSound('keypress');
        } else {
            soundManager.playSound('error');
        }
        
        displayText();
        updateStats();
    }
    
    // Handle backspace
    else if (event.key === 'Backspace') {
        if (gameState.currentTypedWord.length > 0) {
            gameState.currentTypedWord = gameState.currentTypedWord.slice(0, -1);
            gameState.currentCharIndex = gameState.currentTypedWord.length;
            displayText();
            updateStats();
        }
    }
    
    // Handle space (word completion)
    else if (event.key === ' ') {
        if (gameState.currentTypedWord.length > 0) {
            gameState.typedWords[gameState.currentWordIndex] = gameState.currentTypedWord;
            
            // Count characters for this word
            const originalWord = gameState.words[gameState.currentWordIndex];
            for (let i = 0; i < Math.max(gameState.currentTypedWord.length, originalWord.length); i++) {
                gameState.totalChars++;
                if (i < gameState.currentTypedWord.length && i < originalWord.length && gameState.currentTypedWord[i] === originalWord[i]) {
                    gameState.correctChars++;
                } else {
                    gameState.errors++;
                }
            }
            
            // Move to next word
            gameState.currentWordIndex++;
            gameState.currentCharIndex = 0;
            gameState.currentTypedWord = '';
            
            // Check if test is complete
            if (gameState.currentWordIndex >= gameState.words.length) {
                endTest();
                return;
            }
            
            displayText();
            updateStats();
        }
    }
}