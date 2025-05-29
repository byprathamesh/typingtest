// Enhanced word lists with better algorithms
const wordLists = {
    easy: [
        "cat", "dog", "run", "jump", "play", "book", "car", "tree", "sun", "moon", "fish", "bird", "home", "door", "good", "bad", "big", "small", "hot", "cold", "yes", "no", "go", "stop", "fast", "slow", "up", "down", "in", "out", "red", "blue", "green", "white", "black", "one", "two", "three", "four", "five"
    ],
    normal: [
        // Short common words
        "the", "and", "for", "are", "but", "not", "you", "all", "can", "had", "her", "was", "one", "our", "out", "day", "get", "use", "man", "new", "now", "way", "may", "say",
        
        // Medium length words
        "about", "other", "which", "their", "would", "there", "could", "after", "first", "never", "these", "think", "where", "being", "every", "great", "might", "shall", "still", "those", "under", "while", "sound", "again", "place", "right", "small", "large", "spell", "move", "means", "before", "around", "another", "through", "change", "much", "very", "well", "back", "good", "take", "came", "help", "too", "line", "turn", "cause", "same", "tell", "differ", "follow", "want", "show", "also", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousands", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among"
    ],
    hard: [
        "accommodate", "embarrass", "millennium", "restaurant", "bureaucracy", "pharmaceutical", "Massachusetts", "pronunciation", "surveillance", "conscientious", "maintenance", "necessary", "occurrence", "personnel", "privilege", "rhythm", "separate", "temperature", "vacuum", "weird", "absence", "calendar", "foreign", "government", "knowledge", "library", "received", "appreciate", "definitely", "experience", "independent", "intelligence", "leisure", "possession", "thorough", "existence", "piece", "science", "achieve", "believe", "ceiling", "neighbor", "field", "neither", "height", "eight", "ancient", "conscience", "conscious", "curiosity", "beginning", "business", "address", "occasion", "occurred", "omitted", "referred", "committed", "preferred", "benefited", "equipped", "transferred", "permitted", "submitted", "controlled", "excelled", "compelled", "propelled", "excellent", "travelled", "cancelled", "counsellor", "jewellery", "marvellous", "fascinating", "extraordinary", "responsibility", "acknowledgment", "disappointing", "congratulations", "representative", "characteristics", "simultaneously", "transformation", "understanding", "opportunities", "consequences", "administration", "recommendation", "implementation", "sophisticated", "revolutionary", "environmental", "entertainment", "international", "communication", "technological", "philosophical", "psychological", "physiological", "archaeological", "geographical", "mathematical", "automatically", "unfortunately", "uncomfortable", "unbelievable", "extraordinary", "unprecedented", "corresponding", "overwhelming", "comprehensive", "distinguished", "controversial", "fundamental", "experimental", "professional", "traditional", "educational", "operational", "organizational", "inspirational", "motivational", "exceptional", "constitutional", "institutional", "instrumental", "circumstantial", "developmental", "entrepreneurial", "interdisciplinary", "multidisciplinary", "intergenerational", "internationally", "uncharacteristically", "disproportionately", "incomprehensible", "indistinguishable", "counterproductive", "hypersensitivity", "electroencephalogram", "immunoelectrophoresis", "spectrophotometry", "deoxyribonucleic"
    ],
    mixed: [
        // Super common short words (3-4 letters)
        "the", "and", "for", "are", "but", "not", "you", "all", "can", "had", "her", "was", "one", "our", "out", "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "do", "how", "if", "will", "up", "other", "about", "many", "then", "them", "these", "so", "some", "make", "like", "into", "time", "has", "look", "two", "more", "go", "no", "could", "my", "than", "first", "been", "call", "who", "its", "find", "long", "down", "did", "get", "come", "made", "part", "over", "here", "just", "also", "back", "well", "work", "life", "only", "year", "much", "good", "very", "when", "much", "know", "take", "see", "him", "two", "how", "its", "said", "each", "which", "do", "their", "time", "will", "about", "if", "up", "out", "many", "then", "them", "some", "her", "would", "make", "like", "into", "him", "has", "two", "more", "go", "no", "way", "could", "my", "than", "first", "water", "been", "call", "who", "oil", "sit", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part",
        
        // Common medium words (5-8 letters)
        "about", "other", "which", "their", "would", "there", "could", "after", "first", "never", "these", "think", "where", "being", "every", "great", "might", "shall", "still", "those", "under", "while", "sound", "again", "place", "right", "small", "large", "spell", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "world", "school", "thought", "number", "water", "called", "people", "between", "state", "started", "city", "earth", "eyes", "light", "head", "open", "story", "example", "begin", "life", "always", "both", "paper", "together", "group", "often", "important", "until", "children", "side", "feet", "mile", "night", "walk", "white", "began", "grow", "took", "river", "carry", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "face", "watch", "really", "almost", "above", "girl", "sometimes", "mountain", "young", "talk", "soon", "list", "song", "leave", "family", "during", "against", "nothing", "someone", "around", "today", "money", "music", "heard", "morning", "best", "change", "help", "line", "turn", "problem", "move", "trying", "told", "should", "asked", "going", "things", "looked", "need", "hand", "high", "keep", "last", "never", "start", "might", "story", "while", "here", "show", "why", "before", "turn", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "why", "turned", "here", "asked", "went", "men", "read", "need", "land", "different", "home", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don't", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "eat", "face", "watch", "far", "Indian", "really", "almost", "let", "above", "girl", "sometimes", "mountain", "cut", "young", "talk", "soon", "list", "song", "leave", "family",
        
        // Everyday useful words
        // Longer words (8+ letters)
        "important", "children", "different", "following", "thought", "example", "another", "came", "three", "states", "himself", "few", "house", "use", "during", "without", "again", "place", "around", "however", "home", "small", "found", "Mrs", "thought", "went", "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "why", "turned", "here", "why", "asked", "went", "men", "read", "need", "land", "different", "home", "us", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don't", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "eat", "face", "watch", "far", "Indian", "really", "almost", "let", "above", "girl", "sometimes", "mountain", "cut", "young", "talk", "soon", "list", "song", "leave", "family",
        
        // Challenging but common words
        "business", "problem", "complete", "brought", "during", "special", "working", "against", "standard", "building", "nothing", "reached", "difference", "number", "part", "turned", "wanted", "beautiful", "knowledge", "machine", "usually", "money", "system", "government", "development", "information", "social", "within", "national", "support", "available", "including", "whether", "education", "experience", "individual", "particular", "remember", "important", "community", "economic", "medical", "environmental", "international", "technology", "understand", "successful", "significant", "organization", "responsibility", "opportunity", "relationship", "management", "performance", "professional", "development", "especially", "including", "following", "different", "important", "between", "through", "should", "because", "without", "before", "around", "another", "however", "something", "important", "example", "children", "together", "possible", "information", "experience", "development", "including", "different", "following", "important", "between", "through", "without", "before", "around", "another", "however", "something", "possible"
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
            difficulty: 'mixed',
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
            this.settings.difficulty = 'mixed';
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
    difficulty: 'mixed'
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
    const wordPool = wordLists[difficulty] || wordLists.mixed;
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

// Typewriter-style text display with top-down flow
function displayText() {
    if (!textDisplay) {
        console.warn('textDisplay element not found');
        return;
    }
    
    textDisplay.innerHTML = '';
    
    // Calculate how many words per line and which line we're currently on
    const wordsPerLine = Math.floor((textDisplay.clientWidth - 80) / 60);
    const currentLineIndex = Math.floor(gameState.currentWordIndex / wordsPerLine);
    
    // Calculate which lines to show (show lines around current line)
    const startLine = Math.max(0, currentLineIndex - 1);
    const endLine = startLine + 7;
    
    // Create lines
    for (let lineIndex = startLine; lineIndex < endLine; lineIndex++) {
        const lineDiv = document.createElement('div');
        lineDiv.style.height = 'calc(1.4rem * 1.8)';
        lineDiv.style.display = 'flex';
        lineDiv.style.alignItems = 'center';
        lineDiv.style.flexWrap = 'wrap';
        lineDiv.style.marginBottom = '0';
        lineDiv.style.lineHeight = '1.8';
        
        // Calculate word range for this line
        const lineStartWord = lineIndex * wordsPerLine;
        const lineEndWord = Math.min(gameState.words.length, lineStartWord + wordsPerLine);
        
        // Add words to this line
        for (let wordIndex = lineStartWord; wordIndex < lineEndWord; wordIndex++) {
            if (wordIndex >= gameState.words.length) break;
            
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
                
                // Apply character states
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
            
            lineDiv.appendChild(wordElement);
        }
        
        textDisplay.appendChild(lineDiv);
    }
    
    if (caret) textDisplay.appendChild(caret);
    
    // Update caret position
    requestAnimationFrame(() => {
        updateCaret();
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
    // Only recalculate for current word being typed, not all previous words
    // (Previous words are already counted when completed)
    
    // Calculate time-based stats
    const timeElapsed = gameState.isActive && gameState.startTime ? 
        (Date.now() - gameState.startTime) / 1000 : gameState.currentTime;
    const minutes = timeElapsed / 60;

    // Calculate total characters typed so far
    let totalCharsTyped = 0;
    let correctCharsTyped = 0;
    let errorsCount = 0;
    
    // Count completed words
    for (let i = 0; i < gameState.currentWordIndex; i++) {
        const typedWord = gameState.typedWords[i] || '';
        const originalWord = gameState.words[i] || '';
        
        // Count all characters in both typed and original word
        const maxLength = Math.max(typedWord.length, originalWord.length);
        for (let j = 0; j < maxLength; j++) {
            totalCharsTyped++;
            if (j < typedWord.length && j < originalWord.length && typedWord[j] === originalWord[j]) {
                correctCharsTyped++;
            } else {
                errorsCount++;
            }
        }
    }
    
    // Add current word being typed
    const currentWord = gameState.words[gameState.currentWordIndex] || '';
    const currentTyped = gameState.currentTypedWord || '';
    for (let i = 0; i < currentTyped.length; i++) {
        totalCharsTyped++;
        if (i < currentWord.length && currentTyped[i] === currentWord[i]) {
            correctCharsTyped++;
        } else {
            errorsCount++;
        }
    }

    // Calculate WPM properly (net WPM = correct chars only)
    const netWpm = minutes > 0 ? Math.round((correctCharsTyped / 5) / minutes) : 0;
    
    // Calculate raw WPM (all characters typed)
    const rawWpm = minutes > 0 ? Math.round((totalCharsTyped / 5) / minutes) : 0;

    // Calculate accuracy
    const accuracy = totalCharsTyped > 0 ? 
        Math.round((correctCharsTyped / totalCharsTyped) * 100) : 100;

    // Update global state
    gameState.totalChars = totalCharsTyped;
    gameState.correctChars = correctCharsTyped;
    gameState.errors = errorsCount;

    // Update display elements
    if (wpmElement) wpmElement.textContent = netWpm;
    if (rawWpmElement) rawWpmElement.textContent = rawWpm;
    if (accuracyElement) accuracyElement.textContent = accuracy + '%';
    if (errorsElement) errorsElement.textContent = errorsCount;

    // Update live WPM indicator
    const floatingWpm = document.getElementById('floatingWpm');
    const liveWpmValue = document.getElementById('liveWpmValue');
    if (floatingWpm && liveWpmValue && gameState.isActive) {
        liveWpmValue.textContent = netWpm;
        floatingWpm.style.display = (liveWpmToggle && liveWpmToggle.checked) ? 'block' : 'none';
    }

    // Store WPM history for charts (but not every update, only every second)
    if (gameState.isActive && timeElapsed > 0) {
        const currentSecond = Math.floor(timeElapsed);
        if (gameState.wpmHistory.length < currentSecond) {
            gameState.wpmHistory.push({
                time: timeElapsed,
                wpm: netWpm
            });
            gameState.rawWpmHistory.push({
                time: timeElapsed,
                wpm: rawWpm
            });
        }
    }
}

// Enhanced test completion with detailed results
function endTest() {
    gameState.isActive = false;
    if (textDisplay) textDisplay.classList.remove('focused');
    
    soundManager.playSound('complete');
    
    // Calculate final statistics using the same methods as updateStats
    const timeElapsed = gameState.currentTime > 0 ? gameState.currentTime : 
        (Date.now() - gameState.startTime) / 1000;
    const minutes = timeElapsed / 60;
    
    // Final character count
    let totalCharsTyped = 0;
    let correctCharsTyped = 0;
    let errorsCount = 0;
    
    // Count all completed words
    for (let i = 0; i < gameState.currentWordIndex; i++) {
        const typedWord = gameState.typedWords[i] || '';
        const originalWord = gameState.words[i] || '';
        
        const maxLength = Math.max(typedWord.length, originalWord.length);
        for (let j = 0; j < maxLength; j++) {
            totalCharsTyped++;
            if (j < typedWord.length && j < originalWord.length && typedWord[j] === originalWord[j]) {
                correctCharsTyped++;
            } else {
                errorsCount++;
            }
        }
    }
    
    // Final calculations
    const finalNetWpm = minutes > 0 ? Math.round((correctCharsTyped / 5) / minutes) : 0;
    const finalRawWpm = minutes > 0 ? Math.round((totalCharsTyped / 5) / minutes) : 0;
    const finalAccuracy = totalCharsTyped > 0 ? 
        Math.round((correctCharsTyped / totalCharsTyped) * 100) : 100;
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
    document.getElementById('finalWpm').textContent = finalNetWpm;
    document.getElementById('finalRawWpm').textContent = finalRawWpm;
    document.getElementById('finalAccuracy').textContent = finalAccuracy + '%';
    document.getElementById('consistency').textContent = consistency + '%';
    document.getElementById('correctWords').textContent = correctWords;
    document.getElementById('wrongWords').textContent = wrongWords;
    document.getElementById('totalCharsTyped').textContent = totalCharsTyped;
    document.getElementById('testDuration').textContent = gameState.timeLimit + 's';
    
    // Create enhanced speed chart
    createSpeedChart();
    
    // Show results with animation
    if (statsBar) statsBar.style.display = 'none';
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
        resultsDiv.classList.add('fade-in');
    }
}

// Enhanced chart with dual WPM tracking
function createSpeedChart() {
    const ctx = document.getElementById('wpmChart');
    if (!ctx) return;
    
    // Clear any existing chart
    if (window.typingChart) {
        window.typingChart.destroy();
    }
    
    const chartCtx = ctx.getContext('2d');
    
    // Create labels and data arrays from history
    const labels = [];
    const netWpmData = [];
    const rawWpmData = [];
    
    for (let i = 0; i < gameState.wpmHistory.length; i++) {
        const historyPoint = gameState.wpmHistory[i];
        const rawHistoryPoint = gameState.rawWpmHistory[i];
        
        if (historyPoint && typeof historyPoint === 'object') {
            labels.push((i + 1) + 's');
            netWpmData.push(historyPoint.wpm || 0);
            rawWpmData.push(rawHistoryPoint ? (rawHistoryPoint.wpm || 0) : 0);
        } else {
            // Fallback for old format
            labels.push((i + 1) + 's');
            netWpmData.push(historyPoint || 0);
            rawWpmData.push(gameState.rawWpmHistory[i] || 0);
        }
    }
    
    window.typingChart = new Chart(chartCtx, {
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
        difficulty: (difficultySelect && difficultySelect.value) || 'mixed'
    });

    // Generate plenty of words to completely fill the larger display area
    gameState.words = generateWords(300);

    // Update UI
    if (resultsDiv) resultsDiv.style.display = 'none';
    if (statsBar) statsBar.style.display = 'flex';
    if (textDisplay) {
        textDisplay.classList.remove('focused');
        textDisplay.focus(); // Auto-focus the text display
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
            // Store the completed word
            gameState.typedWords[gameState.currentWordIndex] = gameState.currentTypedWord;
            
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