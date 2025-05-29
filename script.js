// Enhanced word lists with more variety and categories
const wordLists = {
    easy: [
        "the", "and", "for", "are", "but", "not", "you", "can", "had", "her", "was", "one", "our", "out", 
        "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "how", "two", "oil", 
        "sit", "set", "run", "eat", "far", "sea", "eye", "off", "old", "see", "him", "has", "his", "did", 
        "may", "own", "too", "any", "my", "no", "up", "by", "do", "if", "in", "it", "of", "on", "so", "to", 
        "we", "go", "be", "at", "me", "he", "is", "am", "or", "us", "an", "as", "be", "we", "me", "go", "so",
        "cat", "dog", "big", "red", "hot", "bad", "good", "nice", "kind", "help", "work", "play", "food", "home",
        "time", "year", "back", "give", "most", "very", "much", "call", "well", "also", "just", "find", "know",
        "take", "look", "come", "will", "make", "like", "into", "than", "them", "only", "many", "some", "what",
        "word", "long", "down", "side", "been", "does", "part", "even", "turn", "here", "want", "show", "went",
        "came", "every", "don't", "while", "great", "where", "right", "think", "little", "still", "might", "saw"
    ],
    
    mixed: [
        "the", "and", "for", "are", "but", "not", "you", "all", "can", "had", "her", "was", "one", "our", 
        "out", "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "how", "its", 
        "who", "oil", "sit", "set", "time", "very", "when", "come", "here", "just", "like", "long", "make", 
        "many", "over", "such", "take", "than", "them", "well", "were", "about", "other", "which", "their", 
        "would", "there", "could", "after", "first", "never", "these", "think", "where", "being", "every", 
        "great", "might", "shall", "still", "those", "under", "while", "sound", "again", "place", "right", 
        "small", "large", "spell", "house", "point", "letter", "mother", "answer", "found", "study", "learn", 
        "world", "school", "thought", "number", "water", "called", "people", "between", "state", "city", 
        "earth", "eyes", "light", "head", "open", "story", "example", "begin", "life", "always", "both", 
        "paper", "together", "group", "often", "important", "until", "children", "side", "feet", "mile", 
        "night", "walk", "white", "began", "grow", "took", "river", "carry", "once", "book", "hear", "stop", 
        "without", "second", "later", "miss", "idea", "enough", "face", "watch", "really", "almost", "above", 
        "girl", "sometimes", "mountain", "young", "talk", "soon", "list", "song", "leave", "family", "body", 
        "music", "color", "stand", "questions", "fish", "area", "mark", "horse", "birds", "problem", "complete",
        "during", "follow", "around", "close", "something", "seem", "next", "hard", "example", "begin", "life",
        "always", "those", "both", "paper", "together", "group", "often", "run", "important", "until", "children",
        "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four",
        "carry", "state", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough",
        "eat", "face", "watch", "far", "Indian", "really", "almost", "let", "above", "girl", "sometimes", "mountain",
        "cut", "young", "talk", "soon", "list", "song", "being", "leave", "family", "it's", "system", "program"
    ],
    
    hard: [
        "accommodate", "embarrass", "millennium", "restaurant", "bureaucracy", "pharmaceutical", "pronunciation", 
        "surveillance", "conscientious", "maintenance", "necessary", "occurrence", "personnel", "privilege", 
        "rhythm", "separate", "temperature", "vacuum", "weird", "acknowledgment", "acquaintance", "algorithm", 
        "analysis", "anesthesia", "anonymous", "appreciate", "architecture", "assessment", "asynchronous", 
        "authentication", "beginning", "belligerent", "beneficiary", "catastrophe", "cemetery", "chauffeur", 
        "colleague", "committed", "committee", "communication", "conceivable", "conscience", "consciousness", 
        "correspondence", "counselor", "curiosity", "definitely", "description", "development", "dilemma", 
        "disappoint", "discipline", "embarrassed", "environment", "exaggerate", "excellent", "existence", 
        "experience", "explanation", "extraordinary", "fluorescent", "government", "guarantee", "harassment", 
        "hierarchy", "immediately", "independent", "intelligence", "interesting", "interrupt", "knowledge", 
        "laboratory", "license", "lieutenant", "maintenance", "mathematics", "millennium", "miniature", 
        "mischievous", "necessary", "occasionally", "occurrence", "opportunity", "parallel", "particularly", 
        "permanent", "persistent", "personnel", "possession", "possible", "preceding", "preferred", "privilege", 
        "probably", "procedure", "proceed", "pronunciation", "psychology", "pursue", "questionnaire", "receipt", 
        "receive", "recommend", "referred", "relevant", "religious", "repetition", "restaurant", "rhythm", 
        "schedule", "scientific", "separate", "similar", "sophisticated", "succeed", "successful", "sufficient", 
        "surprise", "technique", "technology", "temperature", "thorough", "thought", "throughout", "transferred", 
        "truly", "unnecessary", "until", "unusual", "vacuum", "village", "whether", "writing", "written",
        "entrepreneurship", "infrastructure", "implementation", "characteristics", "responsibilities", 
        "comprehensiveness", "internationalization", "incomprehensible", "disproportionately", "recommendations",
        "accomplishments", "circumstances", "representative", "simultaneously", "unfortunately", "approximately",
        "automatically", "controversial", "demonstration", "fundamentally", "philosophical", "psychological",
        "revolutionary", "traditionally", "constitutional", "organizational", "environmental", "experimental"
    ],
    
    programming: [
        "function", "variable", "array", "object", "string", "number", "boolean", "undefined", "null", "class", 
        "method", "property", "constructor", "prototype", "callback", "promise", "async", "await", "import", 
        "export", "module", "component", "interface", "abstract", "extends", "implements", "override", "static", 
        "private", "public", "protected", "const", "let", "var", "return", "break", "continue", "switch", 
        "case", "default", "if", "else", "elif", "while", "for", "foreach", "do", "try", "catch", "finally", 
        "throw", "throws", "exception", "error", "debug", "console", "log", "print", "stdout", "stdin", 
        "stderr", "file", "directory", "path", "url", "http", "https", "api", "json", "xml", "html", "css", 
        "javascript", "typescript", "python", "java", "cpp", "rust", "golang", "kotlin", "swift", "dart", 
        "react", "angular", "vue", "svelte", "node", "express", "django", "flask", "spring", "laravel", 
        "database", "sql", "mongodb", "redis", "firebase", "postgresql", "mysql", "sqlite", "orm", "migration", 
        "schema", "table", "column", "row", "index", "foreign", "primary", "key", "join", "select", "insert", 
        "update", "delete", "where", "order", "group", "having", "limit", "offset", "union", "intersection", 
        "git", "commit", "push", "pull", "branch", "merge", "rebase", "clone", "fork", "repository", "remote", 
        "local", "staging", "production", "development", "testing", "deployment", "docker", "container", 
        "kubernetes", "cloud", "aws", "azure", "gcp", "serverless", "microservices", "monolith", "architecture", 
        "algorithm", "datastructure", "complexity", "optimization", "performance", "scalability", "security", 
        "authentication", "authorization", "encryption", "hashing", "token", "session", "cookie", "cors", 
        "csrf", "xss", "injection", "vulnerability", "patch", "update", "version", "semantic", "major", 
        "minor", "stable", "beta", "alpha", "release", "build", "compile", "transpile", "bundle", "minify", 
        "compress", "cache", "memory", "storage", "bandwidth", "latency", "throughput", "concurrent", "parallel", 
        "synchronous", "asynchronous", "blocking", "nonblocking", "thread", "process", "mutex", "semaphore", 
        "deadlock", "race", "condition", "atomic", "volatile", "immutable", "mutable", "functional", "imperative", 
        "declarative", "procedural", "oriented", "paradigm", "inheritance", "polymorphism", "encapsulation", 
        "abstraction", "composition", "aggregation", "association", "dependency", "injection", "inversion", 
        "singleton", "factory", "observer", "strategy", "decorator", "facade", "adapter", "proxy", "bridge", 
        "command", "state", "template", "visitor", "iterator", "mediator", "memento", "flyweight", "builder", 
        "prototype", "chain", "responsibility", "interpreter", "composite", "abstract", "factory",
        "framework", "library", "package", "dependency", "namespace", "scope", "closure", "recursion", "loop",
        "iteration", "condition", "operator", "expression", "statement", "declaration", "initialization", "assignment"
    ],
    
    quotes: [
        "The only way to do great work is to love what you do.",
        "Life is what happens while you're busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It is during our darkest moments that we must focus to see the light.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The way to get started is to quit talking and begin doing.",
        "Innovation distinguishes between a leader and a follower.",
        "Your time is limited, so don't waste it living someone else's life.",
        "Stay hungry, stay foolish.",
        "The only impossible journey is the one you never begin.",
        "In the middle of difficulty lies opportunity.",
        "Believe you can and you're halfway there.",
        "Code is like humor. When you have to explain it, it's bad.",
        "First, solve the problem. Then, write the code.",
        "Experience is the name everyone gives to their mistakes.",
        "The best error message is the one that never shows up.",
        "Programming isn't about what you know; it's about what you can figure out.",
        "The most important property of a program is whether it accomplishes the intention of its user.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Programs must be written for people to read, and only incidentally for machines to execute.",
        "Simplicity is the ultimate sophistication.",
        "Make it work, make it right, make it fast.",
        "The function of good software is to make the complex appear to be simple.",
        "Software is a great combination between artistry and engineering.",
        "Technology is best when it brings people together.",
        "The best time to plant a tree was twenty years ago. The second best time is now.",
        "Whether you think you can or you think you can't, you're right.",
        "The only person you are destined to become is the person you decide to be.",
        "Don't be afraid to give up the good to go for the great.",
        "Dreams don't work unless you do."
    ],
    
    numbers: [
        "123", "456", "789", "012", "345", "678", "901", "234", "567", "890", "1234", "5678", "9012", 
        "3456", "7890", "2468", "1357", "9753", "8642", "0987", "6543", "2109", "8765", "4321", "1111", 
        "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999", "0000", "1010", "2020", "3030", 
        "4040", "5050", "6060", "7070", "8080", "9090", "1100", "2200", "3300", "4400", "5500", "6600", 
        "7700", "8800", "9900", "1001", "2002", "3003", "4004", "5005", "6006", "7007", "8008", "9009",
        "192.168.1.1", "255.255.255.0", "127.0.0.1", "10.0.0.1", "172.16.0.1", "8.8.8.8", "1.1.1.1",
        "2023", "2024", "2025", "1990", "1985", "2000", "1776", "1969", "1991", "2001", "2008", "2010",
        "100%", "50%", "25%", "75%", "90%", "10%", "33%", "66%", "80%", "20%", "95%", "5%"
    ]
};

// DOM Elements Cache
const difficultySelect = document.getElementById('difficulty');
const timeSelect = document.getElementById('timeLimit');
const musicScaleSelect = document.getElementById('musicScale');
const soundToggle = document.getElementById('soundToggle');
const volumeSlider = document.getElementById('volumeSlider');
const volumeDisplay = document.getElementById('volumeDisplay');
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
const liveWpmDisplay = document.getElementById('liveWpm');
const liveWpmValue = document.getElementById('liveWpmValue');
const progressBar = document.getElementById('progressBar');

// Welcome Screen elements
const welcomeScreen = document.getElementById('welcomeScreen');
const mainContainer = document.querySelector('.container');

// Enhanced Professional KeyboardSoundManager with Rich Audio
class KeyboardSoundManager {
    constructor(enabled, volume) {
        this.audioContext = null;
        this.enabled = enabled;
        this.volume = volume / 100;
        this.masterGain = null;
        this.reverbGain = null;
        this.noteIndex = 0;
        this.currentScale = 'crystal'; // Changed default to crystal for best sound
        
        // Enhanced musical scales with better frequency ratios
        this.scales = {
            pentatonic: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25],
            major: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25],
            minor: [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16, 523.25],
            dorian: [261.63, 293.66, 311.13, 349.23, 392.00, 440.00, 466.16, 523.25],
            ambient: [130.81, 146.83, 164.81, 196.00, 220.00, 261.63, 293.66, 329.63],
            crystal: [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50], // Bright, clear tones
            warm: [174.61, 196.00, 220.00, 233.08, 261.63, 293.66, 329.63, 349.23]
        };
        
        this._initAudio();
    }

    _initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create master gain node
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = this.volume;
            
            // Create reverb effect
            this.reverbGain = this.audioContext.createGain();
            this.reverbGain.gain.value = 0.3; // Subtle reverb mix
            
            // Connect reverb to master and master to destination
            this.reverbGain.connect(this.masterGain);
            this.masterGain.connect(this.audioContext.destination);
            
            console.log('Enhanced audio system initialized successfully');
        } catch (e) { 
            console.warn('Web Audio API not supported:', e); 
            this.audioContext = null; 
        }
    }

    _createEnhancedTone(frequency, duration = 0.3, volume = 0.08, type = 'keystroke') {
        if (!this.enabled || !this.audioContext) return;

        const now = this.audioContext.currentTime;
        
        // Create multiple oscillators for richer sound
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        const compressor = this.audioContext.createDynamicsCompressor();

        // Primary oscillator - sine wave for fundamental
        oscillator1.type = 'sine';
        oscillator1.frequency.setValueAtTime(frequency, now);

        // Secondary oscillator - triangle wave for harmonics (quieter)
        oscillator2.type = 'triangle';
        oscillator2.frequency.setValueAtTime(frequency * 2.01, now); // Slightly detuned octave

        // Create gain nodes for each oscillator
        const gain1 = this.audioContext.createGain();
        const gain2 = this.audioContext.createGain();
        gain1.gain.value = 0.7; // Primary tone
        gain2.gain.value = 0.3; // Harmonic

        // Enhanced filtering
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(frequency * 4, now);
        filter.Q.setValueAtTime(2, now);

        // Compressor settings for professional sound
        compressor.threshold.setValueAtTime(-24, now);
        compressor.knee.setValueAtTime(30, now);
        compressor.ratio.setValueAtTime(12, now);
        compressor.attack.setValueAtTime(0.003, now);
        compressor.release.setValueAtTime(0.25, now);

        // Enhanced envelope based on sound type
        if (type === 'spacebar') {
            // Sparkly spacebar sound
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(volume * 1.2, now + 0.005);
            gainNode.gain.exponentialRampToValueAtTime(volume * 0.8, now + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
            
            // Add slight vibrato to spacebar
            const vibrato = this.audioContext.createOscillator();
            const vibratoGain = this.audioContext.createGain();
            vibrato.frequency.value = 4; // 4Hz vibrato
            vibratoGain.gain.value = 3; // Subtle pitch modulation
            vibrato.connect(vibratoGain);
            vibratoGain.connect(oscillator1.frequency);
            vibrato.start(now);
            vibrato.stop(now + duration);
        } else if (type === 'word_complete') {
            // Satisfying word completion sound
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(volume, now + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(volume * 0.6, now + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
        } else if (type === 'error') {
            // Dissonant error sound
            oscillator1.frequency.setValueAtTime(frequency * 0.9, now); // Slightly flat
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(volume * 0.8, now + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.7);
        } else {
            // Normal keystroke with smooth envelope
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(volume, now + 0.008);
            gainNode.gain.exponentialRampToValueAtTime(volume * 0.7, now + 0.04);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
        }

        // Connect audio chain: oscillators -> gains -> filter -> compressor -> gain -> reverb/master
        oscillator1.connect(gain1);
        oscillator2.connect(gain2);
        gain1.connect(filter);
        gain2.connect(filter);
        filter.connect(compressor);
        compressor.connect(gainNode);
        
        // Route to both dry and reverb paths
        gainNode.connect(this.masterGain); // Dry signal
        gainNode.connect(this.reverbGain); // Wet signal for subtle reverb

        oscillator1.start(now);
        oscillator2.start(now);
        oscillator1.stop(now + duration);
        oscillator2.stop(now + duration);
    }

    setScale(scaleName) {
        if (this.scales[scaleName]) {
            this.currentScale = scaleName;
            this.noteIndex = 0;
        }
    }

    playKeystroke(isCorrect = true, isSpace = false) {
        if (isSpace) {
            // Enhanced spacebar sound with sparkle effect
            const notes = this.scales[this.currentScale];
            const freq = notes[Math.floor(Math.random() * notes.length)] * 1.5;
            this._createEnhancedTone(freq, 0.4, 0.06, 'spacebar');
        } else if (isCorrect) {
            // Musical keystroke progression
            const notes = this.scales[this.currentScale];
            const freq = notes[this.noteIndex % notes.length];
            this.noteIndex++;
            this._createEnhancedTone(freq, 0.25, 0.08, 'keystroke');
        } else {
            // Enhanced error sound
            this._createEnhancedTone(180, 0.15, 0.05, 'error');
        }
    }

    playWordComplete() {
        // Rich chord progression for word completion
        if (this.enabled && this.audioContext) {
            const notes = this.scales[this.currentScale];
            const baseNote = notes[this.noteIndex % notes.length];
            
            // Play a pleasant triad
            [0, 0.3, 0.5].forEach((harmonic, index) => {
                setTimeout(() => {
                    const freq = baseNote * (1 + harmonic);
                    this._createEnhancedTone(freq, 0.5, 0.04, 'word_complete');
                }, index * 80);
            });
        }
    }

    playTestComplete() {
        // Celebration arpeggio with enhanced harmonics
        if (this.enabled && this.audioContext) {
            const notes = this.scales[this.currentScale];
            const celebrationNotes = [0, 2, 4, 5, 7, 9, 11, 12]; // Major scale arpeggio
            
            celebrationNotes.forEach((noteIndex, i) => {
                setTimeout(() => {
                    const freq = notes[noteIndex % notes.length] * (noteIndex >= 7 ? 2 : 1);
                    this._createEnhancedTone(freq, 0.8, 0.06, 'word_complete');
                }, i * 120);
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

// Enhanced SettingsManager Class with Musical Scale Support
class SettingsManager {
    constructor() {
        this.difficulty = 'mixed'; 
        this.timeLimit = 60; 
        this.soundEnabled = true; 
        this.volume = 30; 
        this.musicScale = 'crystal'; // Changed default to crystal for best sound
        this.liveWpmEnabled = true;
    }
    
    load() {
        try {
            const s = JSON.parse(localStorage.getItem('typingTestSettings'));
            if (s) { 
                this.difficulty = s.difficulty || this.difficulty; 
                this.timeLimit = s.timeLimit || this.timeLimit; 
                this.soundEnabled = s.soundEnabled !== undefined ? s.soundEnabled : this.soundEnabled; 
                this.volume = s.volume || this.volume; 
                this.musicScale = s.musicScale || this.musicScale;
                this.liveWpmEnabled = s.liveWpmEnabled !== undefined ? s.liveWpmEnabled : this.liveWpmEnabled;
            }
        } catch (e) {
            console.warn('Failed to load settings:', e);
            // Use defaults if loading fails
        }
    }
    
    save() {
        try {
            const settings = {
                difficulty: this.difficulty,
                timeLimit: this.timeLimit,
                soundEnabled: this.soundEnabled,
                volume: this.volume,
                musicScale: this.musicScale,
                liveWpmEnabled: this.liveWpmEnabled
            };
            localStorage.setItem('typingTestSettings', JSON.stringify(settings));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }
}

let keyboardSoundManager;
let settingsManager;

// Game State (reverted)
let gameState = {
    words: [], currentWordIndex: 0, typedWord: '', startTime: null, timeLimit: 60,
    errors: 0, totalCharsTyped: 0, isCompleted: false, timerInterval: null,
    wordElements: [], currentWordElement: null,
    lines: [], currentLine: 1, // Always stay on line 1 (second line, 0-indexed)
    wordPool: [], // Pre-generated word pool to maintain consistency
    poolIndex: 0, // Current position in the word pool
    maxCharsPerLine: 70, // More conservative character count to prevent overflow
};

// DOMContentLoaded: Handles Welcome Screen and App Initialization
document.addEventListener('DOMContentLoaded', () => {
    settingsManager = new SettingsManager();
    settingsManager.load();
    keyboardSoundManager = new KeyboardSoundManager(settingsManager.soundEnabled, settingsManager.volume);

    const welcomeTextElement = document.querySelector('#welcomeScreen .welcome-text');
    const welcomeString = "Welcome to Typing Test";
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
                    // Add typing sound for each character
                    if (keyboardSoundManager) {
                        keyboardSoundManager.playKeystroke(true, welcomeString.charAt(charIndex) === ' ');
                    }
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
    setupEventListeners();
    
    // Calculate max chars per line based on screen size
    updateMaxCharsPerLine();
    
    // Add window resize listener to recalculate on screen size changes
    window.addEventListener('resize', updateMaxCharsPerLine);
    
    startTest(); // Initial test start
    if (textDisplay && mainContainer && mainContainer.style.display === 'block') {
        setTimeout(() => textDisplay.focus(), 50); // Ensure focus after potential layout shifts
    }
    initializeCursor();
}

function updateUIFromSettings() {
    if (difficultySelect) difficultySelect.value = settingsManager.difficulty;
    if (timeSelect) timeSelect.value = settingsManager.timeLimit;
    if (musicScaleSelect) musicScaleSelect.value = settingsManager.musicScale;
    if (soundToggle) soundToggle.checked = settingsManager.soundEnabled;
    const liveWpmToggle = document.getElementById('liveWpmToggle');
    if (liveWpmToggle) liveWpmToggle.checked = settingsManager.liveWpmEnabled;
    if (volumeSlider) volumeSlider.value = settingsManager.volume;
    if (volumeDisplay) volumeDisplay.textContent = `${settingsManager.volume}%`;
    if (liveWpmDisplay) liveWpmDisplay.style.display = settingsManager.liveWpmEnabled ? 'block' : 'none';
    if (keyboardSoundManager) { 
        keyboardSoundManager.toggleSound(settingsManager.soundEnabled); 
        keyboardSoundManager.setVolume(settingsManager.volume);
        keyboardSoundManager.setScale(settingsManager.musicScale);
    }
    if (timerDisplay) timerDisplay.textContent = settingsManager.timeLimit;
}

function setupEventListeners() {
    if (difficultySelect) difficultySelect.addEventListener('change', (e) => { 
        settingsManager.difficulty = e.target.value; 
        settingsManager.save(); 
        startTest(true); 
    });
    
    if (timeSelect) timeSelect.addEventListener('change', (e) => { 
        settingsManager.timeLimit = parseInt(e.target.value); 
        settingsManager.save(); 
        startTest(true); 
    });
    
    if (musicScaleSelect) musicScaleSelect.addEventListener('change', (e) => {
        settingsManager.musicScale = e.target.value;
        settingsManager.save();
        if (keyboardSoundManager) keyboardSoundManager.setScale(settingsManager.musicScale);
        showToast(`Musical scale changed to ${e.target.options[e.target.selectedIndex].text}`);
    });
    
    if (soundToggle) soundToggle.addEventListener('change', (e) => { 
        settingsManager.soundEnabled = e.target.checked; 
        settingsManager.save(); 
        if (keyboardSoundManager) keyboardSoundManager.toggleSound(settingsManager.soundEnabled); 
    });
    
    if (volumeSlider) volumeSlider.addEventListener('input', (e) => { 
        settingsManager.volume = parseInt(e.target.value); 
        if (volumeDisplay) volumeDisplay.textContent = `${settingsManager.volume}%`;
        settingsManager.save(); 
        if (keyboardSoundManager) keyboardSoundManager.setVolume(settingsManager.volume); 
    });
    
    const liveWpmToggle = document.getElementById('liveWpmToggle');
    if (liveWpmToggle) liveWpmToggle.addEventListener('change', (e) => {
        settingsManager.liveWpmEnabled = e.target.checked;
        settingsManager.save();
        if (liveWpmDisplay) liveWpmDisplay.style.display = settingsManager.liveWpmEnabled ? 'block' : 'none';
    });
    
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
    // Create a large, varied pool of words for better typing practice
    let pool = wordLists[difficulty] || wordLists.mixed;
    
    // Create a more varied pool by combining different word sources
    let extendedPool = [];
    
    if (difficulty === 'mixed') {
        // For mixed mode, combine different difficulties for variety
        extendedPool.push(...wordLists.easy);
        extendedPool.push(...wordLists.mixed);
        extendedPool.push(...wordLists.hard.slice(0, 20)); // Add some hard words
        extendedPool.push(...wordLists.programming.slice(0, 15)); // Add some programming terms
    } else if (difficulty === 'easy') {
        // For easy mode, mostly easy words with some mixed
        extendedPool.push(...wordLists.easy);
        extendedPool.push(...wordLists.easy); // Double easy words
        extendedPool.push(...wordLists.mixed.slice(0, 30)); // Add some mixed words
    } else if (difficulty === 'hard') {
        // For hard mode, focus on difficult words with some variety
        extendedPool.push(...wordLists.hard);
        extendedPool.push(...wordLists.mixed.slice(0, 20)); // Add some mixed words for transition
        extendedPool.push(...wordLists.programming.slice(0, 25)); // Add programming terms
    } else if (difficulty === 'programming') {
        // For programming mode, focus on code terms with some mixed words
        extendedPool.push(...wordLists.programming);
        extendedPool.push(...wordLists.mixed.slice(0, 15)); // Add some common words
        extendedPool.push(...wordLists.hard.slice(0, 10)); // Add some complex words
    } else {
        // For quotes and numbers, use the specific pool with some mixed words
        extendedPool.push(...pool);
        if (pool.length < 50) {
            extendedPool.push(...wordLists.mixed.slice(0, 30)); // Add variety if pool is small
        }
    }
    
    // Remove duplicates while preserving some repetition for practice
    const uniqueWords = [...new Set(extendedPool)];
    
    // Create final pool with controlled repetition (max 3 times per word)
    let finalPool = [];
    for (let i = 0; i < 3; i++) {
        finalPool.push(...uniqueWords);
    }
    
    // Shuffle the final pool thoroughly
    for (let i = finalPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [finalPool[i], finalPool[j]] = [finalPool[j], finalPool[i]];
    }
    
    console.log(`Generated ${finalPool.length} words with ${uniqueWords.length} unique words for difficulty: ${difficulty}`);
    return finalPool;
}

function displayText(words) {
    if (!textDisplay) return;
    textDisplay.innerHTML = '';
    gameState.wordElements = [];
    gameState.lines = []; // Track lines of words
    gameState.currentLine = 1; // Always stay on line 1 (second line, 0-indexed)
    
    // Apply hard mode class for better word spacing
    if (settingsManager.difficulty === 'hard' || settingsManager.difficulty === 'programming') {
        textDisplay.classList.add('hard-mode');
    } else {
        textDisplay.classList.remove('hard-mode');
    }
    
    // Generate initial 3 lines 
    generateInitialLines(words);
    
    if (gameState.wordElements.length > 0) { 
        gameState.currentWordIndex = 0; 
        // Start on the second line (index 1) - middle line
        const secondLine = gameState.lines[1];
        if (secondLine && secondLine.children.length > 0) {
            gameState.currentWordElement = secondLine.children[0];
            // Update current word index to match the first word on second line
            const elementIndex = parseInt(gameState.currentWordElement.getAttribute('data-word-index'));
            if (!isNaN(elementIndex)) {
                gameState.currentWordIndex = elementIndex;
            }
        } else {
            // Fallback to first word
            gameState.currentWordElement = gameState.wordElements[0]; 
        }
        gameState.currentWordElement.classList.add('current'); 
    }
    updateCursor();
    textDisplay.scrollTop = 0;
}

function generateInitialLines(words) {
    const linesToShow = 3;
    
    // Initialize the pool index
    gameState.poolIndex = 0;
    console.log('Generating initial lines with blank first line. Starting pool index:', gameState.poolIndex);
    
    for (let line = 0; line < linesToShow; line++) {
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('text-line');
        
        if (line === 0) {
            // First line is intentionally blank for better visual flow
            console.log('Line 0: Blank line');
        } else {
            // Generate words for lines 1 and 2
            let currentLineLength = 0;
            const wordsInThisLine = [];
            
            while (currentLineLength < gameState.maxCharsPerLine && gameState.poolIndex < words.length) {
                const word = words[gameState.poolIndex];
                
                // Check if adding this word would exceed line length
                if (currentLineLength + word.length + 1 > gameState.maxCharsPerLine && lineDiv.children.length > 0) {
                    break; // Don't add this word, line is full
                }
                
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word');
                wordSpan.setAttribute('data-line', line);
                wordSpan.setAttribute('data-word-index', gameState.poolIndex);
                
                word.split('').forEach(char => { 
                    const cs = document.createElement('span'); 
                    cs.textContent = char; 
                    cs.classList.add('char');
                    wordSpan.appendChild(cs); 
                });
                
                lineDiv.appendChild(wordSpan);
                gameState.wordElements.push(wordSpan);
                wordsInThisLine.push({word, index: gameState.poolIndex});
                currentLineLength += word.length + 1; // +1 for space
                gameState.poolIndex++;
            }
            
            // Ensure we have at least one word per line (except blank first line)
            if (lineDiv.children.length === 0 && gameState.poolIndex < words.length) {
                const word = words[gameState.poolIndex];
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word');
                wordSpan.setAttribute('data-line', line);
                wordSpan.setAttribute('data-word-index', gameState.poolIndex);
                
                word.split('').forEach(char => { 
                    const cs = document.createElement('span'); 
                    cs.textContent = char; 
                    cs.classList.add('char');
                    wordSpan.appendChild(cs); 
                });
                
                lineDiv.appendChild(wordSpan);
                gameState.wordElements.push(wordSpan);
                wordsInThisLine.push({word, index: gameState.poolIndex});
                gameState.poolIndex++;
            }
            
            console.log(`Line ${line} has ${wordsInThisLine.length} words:`, wordsInThisLine.map(w => `${w.word}(${w.index})`).join(', '));
        }
        
        textDisplay.appendChild(lineDiv);
        gameState.lines[line] = lineDiv;
    }
    
    console.log('Initial generation complete. Final pool index:', gameState.poolIndex);
}

// New function to add a new line when needed
async function addNewLine() {
    console.log('Adding new line. Current word index:', gameState.currentWordIndex, 'Pool index:', gameState.poolIndex);
    
    // Use words from our existing word pool instead of generating new ones
    const newWords = [];
    let currentLineLength = 0;
    
    // Fill line based on character count, not fixed word count
    while (currentLineLength < gameState.maxCharsPerLine) {
        if (gameState.poolIndex < gameState.words.length) {
            const word = gameState.words[gameState.poolIndex];
            
            // Check if adding this word would exceed line length
            if (currentLineLength + word.length + 1 > gameState.maxCharsPerLine && newWords.length > 0) {
                break; // Don't add this word, line is full
            }
            
            newWords.push(word);
            currentLineLength += word.length + 1; // +1 for space
            gameState.poolIndex++;
        } else {
            // If we've exhausted our pool, generate more words and extend it
            const moreWords = await getWords(settingsManager.difficulty);
            gameState.words.push(...moreWords);
            
            if (gameState.poolIndex < gameState.words.length) {
                const word = gameState.words[gameState.poolIndex];
                
                // Check if adding this word would exceed line length
                if (currentLineLength + word.length + 1 > gameState.maxCharsPerLine && newWords.length > 0) {
                    break;
                }
                
                newWords.push(word);
                currentLineLength += word.length + 1;
                gameState.poolIndex++;
            } else {
                break; // No more words available
            }
        }
    }
    
    // Ensure we have at least one word per line
    if (newWords.length === 0 && gameState.poolIndex < gameState.words.length) {
        newWords.push(gameState.words[gameState.poolIndex]);
        gameState.poolIndex++;
    }
    
    console.log('New line will have', newWords.length, 'words:', newWords);
    
    // Create new line div
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('text-line');
    
    // Add words to the new line
    for (let i = 0; i < newWords.length; i++) {
        const word = newWords[i];
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word');
        
        // Use the absolute word index in the entire sequence
        const absoluteWordIndex = gameState.poolIndex - newWords.length + i;
        wordSpan.setAttribute('data-word-index', absoluteWordIndex);
        
        word.split('').forEach(char => { 
            const cs = document.createElement('span'); 
            cs.textContent = char; 
            cs.classList.add('char');
            wordSpan.appendChild(cs); 
        });
        
        lineDiv.appendChild(wordSpan);
        gameState.wordElements.push(wordSpan);
    }
    
    // Add the new line to the bottom
    textDisplay.appendChild(lineDiv);
    gameState.lines.push(lineDiv);
    
    // Remove the top line to maintain 3 lines
    if (gameState.lines.length > 3) {
        const topLine = gameState.lines.shift();
        const removedWords = topLine.children.length;
        console.log('Removing top line with', removedWords, 'words');
        
        if (topLine && topLine.parentNode) {
            topLine.parentNode.removeChild(topLine);
        }
        
        // Remove the corresponding word elements from our tracking array
        gameState.wordElements.splice(0, removedWords);
    }
    
    console.log('After adding line - Current word index:', gameState.currentWordIndex, 'Pool index:', gameState.poolIndex);
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
    if (isCorrect) { 
        gameState.currentWordElement.classList.add('correct'); 
        if (keyboardSoundManager) keyboardSoundManager.playWordComplete(); 
    }
    else { 
        gameState.currentWordElement.classList.add('incorrect'); 
        if (keyboardSoundManager) keyboardSoundManager.playKeystroke(false, false); 
    }
    gameState.currentWordElement.classList.remove('current');
    gameState.typedWord = ''; 
    gameState.currentWordIndex++;
    
    // Check if we need more words (when approaching end)
    if (gameState.currentWordIndex >= gameState.words.length - 30) {
        const moreWords = getWords(settingsManager.difficulty);
        moreWords.then(words => {
            gameState.words.push(...words);
        });
    }
    
    // Check if we completed the last word on the second line (where user always types)
    const currentLineElement = gameState.currentWordElement.parentElement;
    const currentLineIndex = gameState.lines.indexOf(currentLineElement);
    const isLastWordInLine = gameState.currentWordElement === currentLineElement.lastElementChild;
    const isSecondLine = currentLineIndex === 1; // Second line (middle line, 0-indexed)
    
    if (isLastWordInLine && isSecondLine) {
        // Completed last word on middle line - scroll up and add new line
        console.log('Completed middle line, scrolling up...');
        addNewLine();
        
        // After scrolling, user should stay on the second line (index 1)
        // Find the first word on the current second line
        const secondLine = gameState.lines[1];
        if (secondLine && secondLine.children.length > 0) {
            gameState.currentWordElement = secondLine.children[0];
            // Update current word index to match this element's index
            const elementIndex = parseInt(gameState.currentWordElement.getAttribute('data-word-index'));
            if (!isNaN(elementIndex)) {
                gameState.currentWordIndex = elementIndex;
            }
        } else {
            console.error('Second line has no words after scrolling!');
        }
    } else {
        // Normal progression within the same line
        // Find the next word element on the same line
        const nextSibling = gameState.currentWordElement.nextElementSibling;
        if (nextSibling) {
            gameState.currentWordElement = nextSibling;
            // Update current word index to match this element's index  
            const elementIndex = parseInt(gameState.currentWordElement.getAttribute('data-word-index'));
            if (!isNaN(elementIndex)) {
                gameState.currentWordIndex = elementIndex;
            }
        } else {
            // This shouldn't happen if we're properly detecting end of line above
            console.error('No next word found on current line');
        }
    }
    
    if (gameState.currentWordElement) {
        gameState.currentWordElement.classList.add('current');
    } else {
        console.error('Could not find current word element for index:', gameState.currentWordIndex);
    }
    
    updateWordDisplay(); 
    updateCursor();
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

function updateProgress() {
    if (!progressBar || !gameState.startTime) return;
    
    const elapsed = (Date.now() - gameState.startTime) / 1000;
    const progress = Math.min((elapsed / gameState.timeLimit) * 100, 100);
    
    progressBar.style.width = `${progress}%`;
}

function updateStats() {
    if (gameState.isCompleted) return;
    
    const wpm = calculateWPM(); 
    const acc = calculateAccuracy();
    
    if (wpmDisplay) wpmDisplay.textContent = wpm;
    if (accuracyDisplay) accuracyDisplay.textContent = `${acc}%`;
    if (errorsDisplay) errorsDisplay.textContent = gameState.errors;
    
    // Update live WPM if enabled
    if (settingsManager.liveWpmEnabled && liveWpmValue) {
        liveWpmValue.textContent = wpm;
    }
    
    // Update progress bar
    updateProgress();
}

function startTimer() {
    gameState.startTime = Date.now();
    if(timerDisplay) timerDisplay.textContent = gameState.timeLimit;
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    
    gameState.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        const remaining = gameState.timeLimit - elapsed;
        if(timerDisplay) timerDisplay.textContent = remaining;
        
        if (remaining <= 0) {
            endTest(); // Only end when timer reaches 0
        } else if (!gameState.isCompleted) {
            updateStats();
        }
    }, 100); // Update more frequently for smoother animations
}

async function startTest(forceNewWords = false) {
    if (welcomeScreen && welcomeScreen.style.display !== 'none' && welcomeScreen.style.opacity !== '0') {
         // If welcome screen is visible and animating (opacity not 0), defer startTest
        console.log("Welcome screen active, startTest deferred.");
        return;
    }
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    
    // Initialize the word pool properly
    gameState.words = await getWords(settingsManager.difficulty);
    gameState.poolIndex = 0; // Reset pool index
    
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
    
    const finalWpm = calculateWPM();
    const finalAcc = calculateAccuracy();
    
    // Count all completed words (both correct and incorrect)
    const wordsTypedCount = gameState.currentWordIndex; // Since we completed up to this index
    
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
    // Title is now set in HTML, no need to manipulate it here
    return;
}

// Calculate maximum characters per line based on screen size
function calculateMaxCharsPerLine() {
    if (!textDisplay) return 60; // More conservative default fallback
    
    const displayRect = textDisplay.getBoundingClientRect();
    const displayWidth = displayRect.width - 60; // Larger margin for safety
    
    // Create a temporary element to measure character width
    const tempSpan = document.createElement('span');
    tempSpan.style.position = 'absolute';
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.fontSize = window.getComputedStyle(textDisplay).fontSize;
    tempSpan.style.fontFamily = window.getComputedStyle(textDisplay).fontFamily;
    tempSpan.textContent = 'MMMMMMMMMM'; // Use multiple wide characters for better measurement
    document.body.appendChild(tempSpan);
    
    const tenCharWidth = tempSpan.getBoundingClientRect().width;
    const charWidth = tenCharWidth / 10; // Average width per character
    document.body.removeChild(tempSpan);
    
    // Calculate approximate characters that fit, with larger safety margin
    const maxChars = Math.floor(displayWidth / charWidth) - 10; // -10 for extra safety margin
    
    console.log('Display width:', displayWidth, 'Char width:', charWidth, 'Max chars:', maxChars);
    
    return Math.max(50, Math.min(100, maxChars)); // Keep between 50-100 characters
}

// Update max chars when window resizes
function updateMaxCharsPerLine() {
    gameState.maxCharsPerLine = calculateMaxCharsPerLine();
    console.log('Updated max chars per line to:', gameState.maxCharsPerLine);
}
// End of script. Ensure no duplicated/old functions below this line. 
