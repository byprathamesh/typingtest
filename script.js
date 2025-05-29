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

// Enhanced game state with advanced tracking
let gameState = {
    isActive: false,
    isPaused: false,
    startTime: null,
    currentTime: 0,
    timeLimit: 60,
    currentWordIndex: 0,
    currentCharIndex: 0,
    words: [],
    typedWords: [],
    correctChars: 0,
    totalChars: 0,
    errors: 0,
    wpmHistory: [],
    rawWpmHistory: [],
    keystrokeHistory: [],
    difficulty: 'normal',
    burstWpm: 0,
    peakWpm: 0,
    averageWpm: 0,
    longestStreak: 0,
    currentStreak: 0,
    totalWords: 0,
    lastKeystrokeTime: 0,
    burstStartTime: 0,
    burstCharCount: 0,
    consecutiveCorrect: 0,
    mistakePositions: [],
    typingRhythm: [],
    focusTime: 0,
    pauseTime: 0
};

// DOM elements with error checking
const elements = {
    textDisplay: document.getElementById('textDisplay'),
    textInput: document.getElementById('textInput'),
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
    if (!elements[key]) {
        console.error(`Element not found: ${key}`);
    }
});

// Extract elements for backward compatibility
const {
    textDisplay, textInput, caret, wpm: wpmElement, rawWpm: rawWpmElement,
    accuracy: accuracyElement, timer: timerElement, errors: errorsElement,
    restartBtn, timeSelect, results: resultsDiv, statsBar, settingsToggle,
    settingsPanel, difficultySelect, soundToggle, smoothCaretToggle,
    liveWpmToggle, infoBtn, keyboardShortcuts, shareBtn, toast
} = elements;

// Add theme toggle element
const themeToggle = document.getElementById('themeToggle');

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
            themeToggle.textContent = '🌞';
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
            themeToggle.textContent = '🌙';
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
    
    if (difficulty === 'quotes') {
        // For quotes, intelligently combine sentences
        const sentences = wordPool.slice();
        let wordCount = 0;
        
        while (wordCount < count && sentences.length > 0) {
            const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
            const sentenceWords = randomSentence.split(' ');
            
            for (const word of sentenceWords) {
                if (wordCount >= count) break;
                words.push(word);
                wordCount++;
            }
        }
        
        // Fill remaining with random sentence words if needed
        while (words.length < count) {
            const randomSentence = wordPool[Math.floor(Math.random() * wordPool.length)];
            const sentenceWords = randomSentence.split(' ');
            const randomWord = sentenceWords[Math.floor(Math.random() * sentenceWords.length)];
            words.push(randomWord);
        }
    } else {
        // Advanced word selection to avoid repetition
        const recentWords = [];
        const maxRecent = Math.min(20, wordPool.length / 2);
        
        for (let i = 0; i < count; i++) {
            let attempts = 0;
            let word;
            
            do {
                word = wordPool[Math.floor(Math.random() * wordPool.length)];
                attempts++;
            } while (recentWords.includes(word) && attempts < 10);
            
            words.push(word);
            recentWords.push(word);
            
            if (recentWords.length > maxRecent) {
                recentWords.shift();
            }
        }
    }
    
    return words.slice(0, count);
}

// Enhanced text display with better visual feedback
function displayText() {
    textDisplay.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    // Show words around current position for better performance
    const startIndex = Math.max(0, gameState.currentWordIndex - 15);
    const endIndex = Math.min(gameState.words.length, gameState.currentWordIndex + 25);
    
    for (let wordIndex = startIndex; wordIndex < endIndex; wordIndex++) {
        const word = gameState.words[wordIndex];
        const wordElement = document.createElement('span');
        wordElement.className = 'word';
        wordElement.setAttribute('data-word-index', wordIndex);
        
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
                    const inputValue = textInput.value || '';
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
            const inputValue = textInput.value || '';
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
        
        fragment.appendChild(wordElement);
    }
    
    textDisplay.appendChild(fragment);
    textDisplay.appendChild(caret);
    
    // Update caret position after DOM changes
    requestAnimationFrame(() => {
        updateCaret();
    });
}

// Update smooth caret position
function updateCaret() {
    if (!settingsManager.get('smoothCaret')) {
        caret.style.display = 'none';
        return;
    }
    
    caret.style.display = 'block';
    caret.classList.toggle('smooth', settingsManager.get('smoothCaret'));
    
    // Find the current word element
    const currentWordElement = textDisplay.querySelector(`[data-word-index="${gameState.currentWordIndex}"]`);
    if (!currentWordElement) {
        // If we can't find the current word, hide the caret
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
    
    // Apply the position with smooth transition
    caret.style.left = caretLeft + 'px';
    caret.style.top = caretTop + 'px';
    
    // Ensure caret is visible by scrolling if needed
    const caretRect = {
        left: caretLeft,
        top: caretTop,
        right: caretLeft + 2,
        bottom: caretTop + 26
    };
    
    // Auto-scroll if caret goes out of view
    if (caretTop < 10) {
        textDisplay.scrollTop -= 50;
    } else if (caretTop > textDisplay.clientHeight - 40) {
        textDisplay.scrollTop += 50;
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

// Update live statistics with animations
function updateStats() {
    const newWpm = calculateWPM();
    const newRawWpm = calculateRawWPM();
    const newAccuracy = calculateAccuracy();
    
    // Update progress bar
    const progress = Math.min(100, (gameState.currentTime / gameState.timeLimit) * 100);
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    
    // Update floating WPM indicator
    const floatingWpm = document.getElementById('floatingWpm');
    const liveWpmValue = document.getElementById('liveWpmValue');
    if (floatingWpm && liveWpmValue && gameState.isActive) {
        floatingWpm.style.display = 'block';
        liveWpmValue.textContent = newWpm;
        
        // Add glow effect for high WPM
        if (newWpm >= 80) {
            liveWpmValue.style.color = '#00ff00';
            liveWpmValue.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
        } else if (newWpm >= 60) {
            liveWpmValue.style.color = '#ffff00';
            liveWpmValue.style.textShadow = '0 0 10px rgba(255, 255, 0, 0.3)';
        } else {
            liveWpmValue.style.color = 'var(--text-primary)';
            liveWpmValue.style.textShadow = 'none';
        }
    }
    
    // Animate milestone achievements
    const milestones = [25, 50, 75, 100, 125, 150];
    milestones.forEach(milestone => {
        if (Math.floor(newWpm) === milestone && wpmElement.textContent !== newWpm.toString()) {
            wpmElement.classList.add('milestone');
            showAchievement(`${milestone} WPM Milestone!`, '🏆');
            setTimeout(() => wpmElement.classList.remove('milestone'), 1000);
        }
    });
    
    // Show streak indicators
    if (gameState.currentStreak > 0 && gameState.currentStreak % 10 === 0) {
        showStreakIndicator(gameState.currentStreak);
        caret.classList.add('streak');
        setTimeout(() => caret.classList.remove('streak'), 2000);
    }
    
    // Show burst WPM indicator
    if (gameState.burstWpm > newWpm + 10) {
        showBurstIndicator(gameState.burstWpm);
    }
    
    // Perfect accuracy celebration
    if (newAccuracy === 100 && gameState.totalChars > 50) {
        showPerfectAccuracy();
    }
    
    // Animate value changes
    if (wpmElement.textContent !== newWpm.toString()) {
        wpmElement.textContent = newWpm;
        wpmElement.classList.add('updated');
        setTimeout(() => wpmElement.classList.remove('updated'), 200);
    }
    
    if (settingsManager.get('liveWpm')) {
        rawWpmElement.textContent = newRawWpm;
    }
    
    accuracyElement.textContent = newAccuracy + '%';
    timerElement.textContent = Math.max(0, gameState.timeLimit - Math.floor(gameState.currentTime));
    errorsElement.textContent = gameState.errors;
}

// Show streak indicator
function showStreakIndicator(streak) {
    const indicator = document.createElement('div');
    indicator.className = 'streak-indicator';
    indicator.textContent = `${streak} STREAK! 🔥`;
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        indicator.remove();
    }, 2000);
}

// Show burst WPM indicator
function showBurstIndicator(burstWpm) {
    const indicator = document.createElement('div');
    indicator.className = 'burst-indicator';
    indicator.textContent = `Burst: ${burstWpm} WPM!`;
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        indicator.remove();
    }, 2000);
}

// Show achievement notification
function showAchievement(message, icon = '🎉') {
    const achievement = document.createElement('div');
    achievement.className = 'achievement';
    achievement.innerHTML = `
        <div style="
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 255, 0, 0.9);
            color: #000000;
            padding: 1.5rem 2rem;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: bold;
            z-index: 1000;
            animation: achievementPop 3s ease-out forwards;
            text-align: center;
            border: 3px solid #00ff00;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
        ">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${icon}</div>
            ${message}
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes achievementPop {
            0% { opacity: 0; transform: translateX(-50%) scale(0.5); }
            20% { opacity: 1; transform: translateX(-50%) scale(1.1); }
            80% { opacity: 1; transform: translateX(-50%) scale(1); }
            100% { opacity: 0; transform: translateX(-50%) scale(0.9); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(achievement);
    
    setTimeout(() => {
        achievement.remove();
        style.remove();
    }, 3000);
}

// Show perfect accuracy celebration
function showPerfectAccuracy() {
    const celebration = document.createElement('div');
    celebration.className = 'perfect-accuracy';
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.remove();
    }, 2000);
    
    showAchievement('Perfect Accuracy!', '💎');
}

// Enhanced input handling with sound effects
function handleInput(event) {
    if (!gameState.isActive) {
        gameState.isActive = true;
        gameState.startTime = Date.now();
        gameState.burstStartTime = Date.now();
        startTimer();
        textDisplay.classList.add('focused');
    }
    
    const inputValue = event.target.value;
    const currentWord = gameState.words[gameState.currentWordIndex];
    const currentTime = Date.now();
    
    // Track typing rhythm
    if (gameState.lastKeystrokeTime > 0) {
        const timeBetweenKeys = currentTime - gameState.lastKeystrokeTime;
        gameState.typingRhythm.push(timeBetweenKeys);
        if (gameState.typingRhythm.length > 10) {
            gameState.typingRhythm.shift();
        }
    }
    gameState.lastKeystrokeTime = currentTime;
    
    // Update current character index based on input length
    gameState.currentCharIndex = inputValue.length;
    
    // Enhanced keystroke feedback
    if (inputValue.length > 0) {
        const lastChar = inputValue[inputValue.length - 1];
        const expectedChar = currentWord[inputValue.length - 1];
        
        if (lastChar === expectedChar) {
            soundManager.playSound('keypress', 1 + (gameState.consecutiveCorrect * 0.05));
            gameState.consecutiveCorrect++;
            gameState.currentStreak++;
            
            // Track burst typing
            gameState.burstCharCount++;
            const burstTime = (currentTime - gameState.burstStartTime) / 1000;
            if (burstTime > 0) {
                const burstWpm = (gameState.burstCharCount / 5) / (burstTime / 60);
                if (burstWpm > gameState.burstWpm) {
                    gameState.burstWpm = Math.round(burstWpm);
                }
            }
        } else {
            soundManager.playSound('error', 0.8);
            gameState.consecutiveCorrect = 0;
            gameState.mistakePositions.push({
                wordIndex: gameState.currentWordIndex,
                charIndex: inputValue.length - 1,
                expected: expectedChar,
                typed: lastChar
            });
            
            // Reset burst tracking on error
            gameState.burstStartTime = currentTime;
            gameState.burstCharCount = 0;
        }
        
        // Update longest streak
        if (gameState.currentStreak > gameState.longestStreak) {
            gameState.longestStreak = gameState.currentStreak;
        }
    }
    
    // Handle space (word completion)
    if (inputValue.endsWith(' ')) {
        const typedWord = inputValue.trim();
        gameState.typedWords[gameState.currentWordIndex] = typedWord;
        
        // Enhanced word completion feedback
        if (typedWord === gameState.words[gameState.currentWordIndex]) {
            soundManager.playSound('wordComplete', 1.2);
        } else {
            gameState.currentStreak = 0; // Reset streak on word error
        }
        
        // Count characters for this word
        const originalWord = gameState.words[gameState.currentWordIndex];
        for (let i = 0; i < Math.max(typedWord.length, originalWord.length); i++) {
            gameState.totalChars++;
            if (i < typedWord.length && i < originalWord.length && typedWord[i] === originalWord[i]) {
                gameState.correctChars++;
            } else {
                gameState.errors++;
            }
        }
        
        // Move to next word
        gameState.currentWordIndex++;
        gameState.currentCharIndex = 0;
        
        // Check if test is complete
        if (gameState.currentWordIndex >= gameState.words.length) {
            endTest();
            return;
        }
        
        // Clear input for next word
        event.target.value = '';
        
        // Update display and caret
        displayText();
        updateStats();
        return;
    }
    
    // Real-time character counting for live stats
    gameState.totalChars = 0;
    gameState.correctChars = 0;
    gameState.errors = 0;
    
    // Count previous complete words
    for (let i = 0; i < gameState.currentWordIndex; i++) {
        const typedWord = gameState.typedWords[i] || '';
        const originalWord = gameState.words[i];
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
    for (let i = 0; i < Math.max(inputValue.length, currentWord.length); i++) {
        if (i < inputValue.length) {
            gameState.totalChars++;
            if (i < currentWord.length && inputValue[i] === currentWord[i]) {
                gameState.correctChars++;
            } else {
                gameState.errors++;
            }
        }
    }
    
    // Update display and stats
    displayText();
    updateStats();
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

// Keyboard shortcuts handler
function handleKeyboardShortcuts(event) {
    // Tab - Restart test
    if (event.key === 'Tab' && !gameState.isActive) {
        event.preventDefault();
        restartTest();
        return;
    }
    
    // Escape - Focus input
    if (event.key === 'Escape') {
        event.preventDefault();
        textInput.focus();
        return;
    }
    
    // Ctrl+Shift+P - Toggle settings
    if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        toggleSettings();
        return;
    }
    
    // Ctrl+Shift+S - Toggle sound
    if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        event.preventDefault();
        soundToggle.checked = !soundToggle.checked;
        soundManager.enabled = soundToggle.checked;
        settingsManager.set('soundEnabled', soundToggle.checked);
        showToast(`Sound ${soundToggle.checked ? 'enabled' : 'disabled'}`);
        return;
    }
}

// Toggle settings panel
function toggleSettings() {
    settingsPanel.classList.toggle('active');
}

// Toggle keyboard shortcuts info
function toggleKeyboardShortcuts() {
    const isVisible = keyboardShortcuts.style.display !== 'none';
    keyboardShortcuts.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        keyboardShortcuts.classList.add('slide-up');
    }
}

// Event listeners
textInput.addEventListener('input', handleInput);
restartBtn.addEventListener('click', restartTest);
timeSelect.addEventListener('change', () => {
    settingsManager.set('timeLimit', parseInt(timeSelect.value));
});

// Settings event listeners
settingsToggle.addEventListener('click', toggleSettings);
difficultySelect.addEventListener('change', () => {
    settingsManager.set('difficulty', difficultySelect.value);
});
soundToggle.addEventListener('change', () => {
    soundManager.enabled = soundToggle.checked;
    settingsManager.set('soundEnabled', soundToggle.checked);
});
smoothCaretToggle.addEventListener('change', () => {
    settingsManager.set('smoothCaret', smoothCaretToggle.checked);
    updateCaret();
});
liveWpmToggle.addEventListener('change', () => {
    settingsManager.set('liveWpm', liveWpmToggle.checked);
    document.getElementById('rawWpmStat').style.display = 
        liveWpmToggle.checked ? 'block' : 'none';
});

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    themeManager.toggle();
});

// Other event listeners
infoBtn.addEventListener('click', toggleKeyboardShortcuts);
shareBtn.addEventListener('click', shareResults);

// Global keyboard shortcuts
document.addEventListener('keydown', handleKeyboardShortcuts);

// Prevent context menu on right click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Focus input when clicking on text display
textDisplay.addEventListener('click', () => {
    textInput.focus();
});

// Handle window resize for caret positioning
window.addEventListener('resize', () => {
    updateCaret();
});

// Initialize the test and set up the game state
function initializeTest() {
    // Reset game state
    gameState = {
        isActive: false,
        isPaused: false,
        startTime: null,
        currentTime: 0,
        timeLimit: parseInt(timeSelect.value),
        currentWordIndex: 0,
        currentCharIndex: 0,
        words: [],
        typedWords: [],
        correctChars: 0,
        totalChars: 0,
        errors: 0,
        wpmHistory: [],
        rawWpmHistory: [],
        keystrokeHistory: [],
        difficulty: difficultySelect.value,
        burstWpm: 0,
        peakWpm: 0,
        averageWpm: 0,
        longestStreak: 0,
        currentStreak: 0,
        totalWords: 0,
        lastKeystrokeTime: 0,
        burstStartTime: 0,
        burstCharCount: 0,
        consecutiveCorrect: 0,
        mistakePositions: [],
        typingRhythm: [],
        focusTime: 0,
        pauseTime: 0
    };
    
    // Load settings from settings manager
    gameState.timeLimit = settingsManager.get('timeLimit');
    gameState.difficulty = settingsManager.get('difficulty');
    
    // Update UI elements with current settings
    timeSelect.value = gameState.timeLimit;
    difficultySelect.value = gameState.difficulty;
    soundToggle.checked = settingsManager.get('soundEnabled');
    smoothCaretToggle.checked = settingsManager.get('smoothCaret');
    liveWpmToggle.checked = settingsManager.get('liveWpm');
    
    // Apply sound setting
    soundManager.enabled = settingsManager.get('soundEnabled');
    
    // Show/hide raw WPM based on setting
    document.getElementById('rawWpmStat').style.display = 
        settingsManager.get('liveWpm') ? 'block' : 'none';
    
    // Generate words based on difficulty
    const wordCount = Math.max(50, Math.ceil(gameState.timeLimit * 2.5));
    gameState.words = generateWords(wordCount);
    
    // Reset UI elements
    textInput.disabled = false;
    textInput.value = '';
    textInput.focus();
    
    // Reset display
    textDisplay.classList.remove('focused');
    
    // Hide results and show stats bar
    resultsDiv.style.display = 'none';
    resultsDiv.classList.remove('fade-in');
    statsBar.style.display = 'flex';
    
    // Reset statistics display
    wpmElement.textContent = '0';
    rawWpmElement.textContent = '0';
    accuracyElement.textContent = '100%';
    timerElement.textContent = gameState.timeLimit;
    errorsElement.textContent = '0';
    
    // Reset visual elements
    const progressBar = document.getElementById('progressBar');
    const floatingWpm = document.getElementById('floatingWpm');
    if (progressBar) progressBar.style.width = '0%';
    if (floatingWpm) floatingWpm.style.display = 'none';
    
    // Remove any existing indicators
    document.querySelectorAll('.streak-indicator, .burst-indicator, .achievement, .perfect-accuracy').forEach(el => el.remove());
    
    // Generate and display text
    displayText();
    
    // Start performance monitoring
    performanceMonitor.start();
    
    // Focus on input
    setTimeout(() => {
        textInput.focus();
    }, 100);
    
    console.log(`Test initialized: ${gameState.difficulty} difficulty, ${gameState.timeLimit}s, ${gameState.words.length} words`);
}

// Initialize the test when the page loads
window.addEventListener('load', () => {
    initializeTest();
    showToast('Welcome! Press Tab to restart, Esc to focus input');
});