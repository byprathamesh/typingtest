// Enhanced word lists with more variety
const wordLists = {
    easy: ["the", "and", "for", "are", "but", "not", "you", "can", "had", "her", "was", "one", "our", "out", "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "how", "two", "oil", "sit", "set", "run", "eat", "far", "sea", "eye", "off", "old", "see", "him", "has", "his", "did", "get", "may", "own", "say", "she", "too", "any", "my", "no", "up", "by", "do", "if", "in", "it", "of", "on", "so", "to", "we"],
    
    mixed: [
        // Short common words (3-5 letters)
        "the", "and", "for", "are", "but", "not", "you", "all", "can", "had", "her", "was", "one", "our", "out", "day", "get", "use", "man", "new", "now", "way", "may", "say", "each", "she", "how", "its", "who", "oil", "sit", "set", "time", "very", "when", "come", "here", "just", "like", "long", "make", "many", "over", "such", "take", "than", "them", "well", "were",
        
        // Medium words (6-8 letters)
        "about", "other", "which", "their", "would", "there", "could", "after", "first", "never", "these", "think", "where", "being", "every", "great", "might", "shall", "still", "those", "under", "while", "sound", "again", "place", "right", "small", "large", "spell", "house", "point", "letter", "mother", "answer", "found", "study", "learn", "world", "school", "thought", "number", "water", "called", "people", "between", "state", "city", "earth", "eyes", "light", "head", "open", "story", "example", "begin", "life", "always", "both", "paper", "together", "group", "often", "important", "until", "children", "side", "feet", "mile", "night", "walk", "white", "began", "grow", "took", "river", "carry", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "face", "watch", "really", "almost", "above", "girl", "sometimes", "mountain", "young", "talk", "soon", "list", "song", "leave", "family", "during", "against", "nothing", "someone", "around", "today", "money", "music", "heard", "morning", "best", "change", "help", "line", "turn", "problem", "move", "trying", "told", "should", "asked", "going", "things", "looked", "need", "hand", "high", "keep", "last", "never", "start", "might", "story", "while", "here", "show", "why", "before", "turn", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "why", "turned", "here", "asked", "went", "men", "read", "need", "land", "different", "home", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don't", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "eat", "face", "watch", "far", "really", "almost", "let", "above", "girl", "sometimes", "mountain", "cut", "young", "talk", "soon", "list", "song", "leave", "family",
        
        // Everyday vocabulary
        "hello", "thanks", "please", "sorry", "welcome", "today", "tomorrow", "yesterday", "morning", "evening", "week", "month", "year", "minute", "hour", "early", "late", "quickly", "slowly", "happy", "sad", "tired", "hungry", "cold", "warm", "hot", "big", "small", "tall", "short", "long", "wide", "heavy", "light", "strong", "fast", "slow", "loud", "quiet", "bright", "dark", "clean", "dirty", "empty", "full", "open", "closed", "easy", "hard", "simple", "difficult", "cheap", "expensive", "free", "busy", "smart", "funny", "kind", "nice", "good", "best", "better", "same", "different", "true", "false", "right", "wrong", "sure", "maybe", "always", "never", "sometimes", "often", "usually", "here", "there", "where", "home", "work", "school", "office", "store", "bank", "hospital", "hotel", "restaurant", "park", "street", "road", "car", "bus", "train", "plane", "walk", "run", "drive", "travel", "trip", "vacation", "weekend", "birthday", "party", "meeting", "doctor", "teacher", "student", "worker", "manager", "friend", "family", "parent", "child", "brother", "sister", "mother", "father", "person", "people", "computer", "internet", "phone", "email", "music", "movie", "book", "photo", "video", "news", "information", "money", "food", "water", "coffee", "bread", "house", "room", "door", "window", "table", "chair", "bed"
    ],
    
    hard: ["accommodate", "embarrass", "millennium", "restaurant", "bureaucracy", "pharmaceutical", "pronunciation", "surveillance", "conscientious", "maintenance", "necessary", "occurrence", "personnel", "privilege", "rhythm", "separate", "temperature", "vacuum", "weird", "absence", "calendar", "foreign", "government", "knowledge", "library", "received", "appreciate", "definitely", "experience", "independent", "intelligence", "leisure", "possession", "thorough", "existence", "fascinating", "extraordinary", "responsibility", "acknowledgment", "disappointing", "congratulations", "representative", "characteristics", "simultaneously", "transformation", "understanding", "opportunities", "consequences", "administration", "recommendation", "implementation", "sophisticated", "revolutionary", "environmental", "entertainment", "international", "communication", "technological", "philosophical", "psychological", "automatically", "unfortunately", "uncomfortable", "unbelievable", "unprecedented", "overwhelming", "comprehensive", "distinguished", "controversial", "fundamental", "experimental", "professional", "traditional", "educational", "exceptional", "constitutional"],
    
    quotes: [
        "The only way to do great work is to love what you do.",
        "Life is what happens while you're busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It is during our darkest moments that we must focus to see the light.",
        "The way to get started is to quit talking and begin doing.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Innovation distinguishes between a leader and a follower.",
        "Your time is limited, so don't waste it living someone else's life.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "In the middle of difficulty lies opportunity.",
        "Believe you can and you're halfway there.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Everything you've ever wanted is on the other side of fear.",
        "Limit your always and your nevers.",
        "Nothing is impossible, the word itself says I'm possible!"
    ],
    
    numbers: ["123", "456", "789", "012", "345", "678", "901", "234", "567", "890", "1234", "5678", "9012", "3456", "7890", "12345", "67890", "13579", "24680", "97531", "147258", "369147", "258963", "741852", "963741", "159753", "753159", "951357", "357951", "123456789", "987654321", "1122334455", "5544332211", "1357913579", "2468024680", "987123654", "456789123", "789456123", "321654987", "654321987"]
};

// Advanced Keyboard Sound System with enhanced effects
class KeyboardSoundManager {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.volume = 0.3;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    // Create ultra-realistic mechanical keyboard sounds
    playKeystroke(isCorrect = true, isSpace = false) {
        if (!this.enabled || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filterNode = this.audioContext.createBiquadFilter();

        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        if (isSpace) {
            // Premium space bar sound - Cherry MX Blue style
            oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(90, this.audioContext.currentTime + 0.1);
            filterNode.frequency.value = 250;
            filterNode.Q.value = 2;
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.9, this.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.18);
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.18);
        } else if (isCorrect) {
            // Satisfying correct keystroke - Premium tactile feel
            oscillator.frequency.setValueAtTime(900 + Math.random() * 200, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(450, this.audioContext.currentTime + 0.06);
            filterNode.frequency.value = 1400;
            filterNode.Q.value = 1.5;
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.7, this.audioContext.currentTime + 0.005);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.09);
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.09);
        } else {
            // Error keystroke - Distinct but not harsh
            oscillator.frequency.setValueAtTime(350, this.audioContext.currentTime);
            oscillator.frequency.linearRampToValueAtTime(200, this.audioContext.currentTime + 0.12);
            filterNode.frequency.value = 800;
            filterNode.Q.value = 6;
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.8, this.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.15);
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.15);
        }
    }

    playWordComplete() {
        if (!this.enabled || !this.audioContext) return;

        // Beautiful word completion chord
        const frequencies = [523.25, 659.25, 783.99]; // C, E, G major chord
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.4, this.audioContext.currentTime + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.4);
            }, index * 60);
        });
    }

    playTestComplete() {
        if (!this.enabled || !this.audioContext) return;

        // Epic victory fanfare
        const melody = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C, E, G, C, E (higher octave)
        melody.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'triangle';
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.6, this.audioContext.currentTime + 0.08);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.5);
            }, index * 250);
        });
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }
}

// Settings Manager with Local Storage
class SettingsManager {
    constructor() {
        this.defaults = {
            difficulty: 'mixed',
            timeLimit: 60,
            soundEnabled: true,
            liveWpm: true,
            volume: 30,
            theme: 'dark'
        };
        this.settings = { ...this.defaults };
        this.load();
    }

    load() {
        try {
            const saved = localStorage.getItem('typingTestSettings');
            if (saved) {
                this.settings = { ...this.defaults, ...JSON.parse(saved) };
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

    get(key) {
        return this.settings[key];
    }

    set(key, value) {
        this.settings[key] = value;
        this.save();
    }
}

// Enhanced game state with more tracking
let gameState = {
    isActive: false,
    isCompleted: false,
    startTime: null,
    timeLimit: 60,
    currentWordIndex: 0,
    currentCharIndex: 0,
    words: [],
    userInput: '',
    typedWords: [],
    errors: 0,
    correctChars: 0,
    totalChars: 0,
    correctWords: 0,
    difficulty: 'mixed',
    timer: null,
    wpmHistory: []
};

// Initialize managers
const soundManager = new KeyboardSoundManager();
const settingsManager = new SettingsManager();

// Enhanced DOM elements
const elements = {
    textDisplay: document.getElementById('textDisplay'),
    cursor: document.getElementById('cursor'),
    wpm: document.getElementById('wpm'),
    accuracy: document.getElementById('accuracy'),
    timer: document.getElementById('timer'),
    errors: document.getElementById('errors'),
    restartBtn: document.getElementById('restartBtn'),
    newTestBtn: document.getElementById('newTestBtn'),
    shareBtn: document.getElementById('shareBtn'),
    themeToggle: document.getElementById('themeToggle'),
    settingsBtn: document.getElementById('settingsBtn'),
    shortcutsBtn: document.getElementById('shortcutsBtn'),
    settings: document.getElementById('settings'),
    shortcuts: document.getElementById('shortcuts'),
    difficulty: document.getElementById('difficulty'),
    timeLimit: document.getElementById('timeLimit'),
    soundToggle: document.getElementById('soundToggle'),
    liveWpmToggle: document.getElementById('liveWpmToggle'),
    volumeSlider: document.getElementById('volumeSlider'),
    progressBar: document.getElementById('progressBar'),
    liveWpm: document.getElementById('liveWpm'),
    liveWpmValue: document.getElementById('liveWpmValue'),
    results: document.getElementById('results'),
    finalWpm: document.getElementById('finalWpm'),
    finalAccuracy: document.getElementById('finalAccuracy'),
    finalErrors: document.getElementById('finalErrors'),
    finalTime: document.getElementById('finalTime'),
    finalChars: document.getElementById('finalChars'),
    finalWords: document.getElementById('finalWords')
};

// Generate enhanced word sets
function generateWords() {
    const wordPool = wordLists[gameState.difficulty] || wordLists.mixed;
    const words = [];
    
    if (gameState.difficulty === 'quotes') {
        // Intelligent quote selection with variety
        const selectedQuotes = [];
        const numQuotes = Math.min(3, wordPool.length);
        
        for (let i = 0; i < numQuotes; i++) {
            const randomQuote = wordPool[Math.floor(Math.random() * wordPool.length)];
            if (!selectedQuotes.includes(randomQuote)) {
                selectedQuotes.push(randomQuote);
                words.push(...randomQuote.split(' '));
            }
        }
        
        return words.slice(0, 300);
    }
    
    // Enhanced randomization with smart word distribution
    const shuffledPool = [];
    const copies = Math.ceil(400 / wordPool.length);
    
    for (let i = 0; i < copies; i++) {
        const shuffled = [...wordPool].sort(() => Math.random() - 0.5);
        shuffledPool.push(...shuffled);
    }
    
    // Avoid immediate repetition
    const recentWords = [];
    const maxRecent = Math.min(15, wordPool.length / 2);
    
    for (let i = 0; i < 400; i++) {
        let word;
        let attempts = 0;
        
        do {
            word = shuffledPool[Math.floor(Math.random() * shuffledPool.length)];
            attempts++;
        } while (recentWords.includes(word) && attempts < 30);
        
        words.push(word);
        recentWords.push(word);
        
        if (recentWords.length > maxRecent) {
            recentWords.shift();
        }
    }
    
    return words;
}

// Enhanced display with better performance
function displayText() {
    if (!elements.textDisplay) return;
    
    elements.textDisplay.innerHTML = '';
    
    const startIndex = Math.max(0, gameState.currentWordIndex - 3);
    const endIndex = Math.min(gameState.words.length, gameState.currentWordIndex + 35);
    
    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.flexWrap = 'wrap';
    textContainer.style.gap = '0.6rem';
    textContainer.style.lineHeight = '2.6';
    
    for (let i = startIndex; i < endIndex; i++) {
        const word = gameState.words[i];
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.style.display = 'inline-block';
        
        if (i === gameState.currentWordIndex) {
            wordSpan.classList.add('current');
        } else if (i < gameState.currentWordIndex) {
            const typedWord = gameState.typedWords[i];
            if (typedWord && typedWord === word) {
                wordSpan.classList.add('correct');
            } else {
                wordSpan.classList.add('incorrect');
            }
        }
        
        for (let j = 0; j < word.length; j++) {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = word[j];
            
            if (i === gameState.currentWordIndex) {
                if (j < gameState.userInput.length) {
                    if (gameState.userInput[j] === word[j]) {
                        charSpan.classList.add('correct');
                    } else {
                        charSpan.classList.add('incorrect');
                    }
                }
            } else if (i < gameState.currentWordIndex) {
                const typedWord = gameState.typedWords[i];
                if (typedWord && j < typedWord.length) {
                    if (typedWord[j] === word[j]) {
                        charSpan.classList.add('correct');
                    } else {
                        charSpan.classList.add('incorrect');
                    }
                }
            }
            
            wordSpan.appendChild(charSpan);
        }
        
        if (i === gameState.currentWordIndex && gameState.userInput.length > word.length) {
            for (let j = word.length; j < gameState.userInput.length; j++) {
                const extraChar = document.createElement('span');
                extraChar.className = 'char extra';
                extraChar.textContent = gameState.userInput[j];
                wordSpan.appendChild(extraChar);
            }
        } else if (i < gameState.currentWordIndex) {
            const typedWord = gameState.typedWords[i];
            if (typedWord && typedWord.length > word.length) {
                for (let j = word.length; j < typedWord.length; j++) {
                    const extraChar = document.createElement('span');
                    extraChar.className = 'char extra';
                    extraChar.textContent = typedWord[j];
                    wordSpan.appendChild(extraChar);
                }
            }
        }
        
        textContainer.appendChild(wordSpan);
    }
    
    elements.textDisplay.appendChild(textContainer);
    updateCursor();
    updateProgress();
}

// Smooth cursor positioning
function updateCursor() {
    if (!elements.cursor || !elements.textDisplay) return;
    
    const currentWordElement = elements.textDisplay.querySelector('.word.current');
    if (!currentWordElement) {
        elements.cursor.style.display = 'none';
        return;
    }
    
    elements.cursor.style.display = 'block';
    
    const rect = currentWordElement.getBoundingClientRect();
    const displayRect = elements.textDisplay.getBoundingClientRect();
    
    let left = rect.left - displayRect.left;
    const top = rect.top - displayRect.top;
    
    if (gameState.userInput.length > 0) {
        const chars = currentWordElement.querySelectorAll('.char');
        if (chars[gameState.userInput.length - 1]) {
            const charRect = chars[gameState.userInput.length - 1].getBoundingClientRect();
            left = charRect.right - displayRect.left;
        }
    }
    
    elements.cursor.style.left = left + 'px';
    elements.cursor.style.top = top + 'px';
}

// Progress tracking
function updateProgress() {
    if (!elements.progressBar) return;
    
    const progress = gameState.currentWordIndex / Math.min(gameState.words.length, 100);
    const percentage = Math.min(100, progress * 100);
    elements.progressBar.style.width = percentage + '%';
}

// Enhanced statistics
function calculateWPM() {
    if (!gameState.startTime || gameState.isCompleted) return 0;
    const minutes = (Date.now() - gameState.startTime) / 60000;
    return Math.round((gameState.correctChars / 5) / minutes) || 0;
}

function calculateAccuracy() {
    if (gameState.totalChars === 0) return 100;
    return Math.round((gameState.correctChars / gameState.totalChars) * 100);
}

// Live stats updates with animations
function updateStats() {
    const currentWpm = calculateWPM();
    const accuracy = calculateAccuracy();
    
    if (elements.wpm) {
        elements.wpm.textContent = currentWpm;
        if (currentWpm > 0 && gameState.isActive) {
            elements.wpm.style.animation = 'none';
            elements.wpm.offsetHeight;
            elements.wpm.style.animation = 'typingPop 0.3s ease-out';
        }
    }
    
    if (elements.accuracy) elements.accuracy.textContent = accuracy + '%';
    if (elements.errors) elements.errors.textContent = gameState.errors;
    
    // Live WPM indicator
    if (elements.liveWpmValue && gameState.isActive) {
        elements.liveWpmValue.textContent = currentWpm;
        if (elements.liveWpmToggle && elements.liveWpmToggle.checked) {
            elements.liveWpm.classList.add('active');
        } else {
            elements.liveWpm.classList.remove('active');
        }
    }
    
    if (elements.timer && gameState.startTime && !gameState.isCompleted) {
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        const remaining = Math.max(0, gameState.timeLimit - elapsed);
        elements.timer.textContent = remaining;
        
        if (remaining <= 10) {
            elements.timer.style.color = '#ff0000';
            elements.timer.style.animation = 'pulse 0.5s infinite';
        } else {
            elements.timer.style.color = '';
            elements.timer.style.animation = '';
        }
        
        if (remaining === 0) {
            endTest();
        }
    }
    
    // Store WPM history for potential charts
    if (gameState.isActive && gameState.startTime) {
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        if (elapsed > 0 && (gameState.wpmHistory.length === 0 || elapsed > gameState.wpmHistory[gameState.wpmHistory.length - 1].time)) {
            gameState.wpmHistory.push({ time: elapsed, wpm: currentWpm });
        }
    }
}

// Advanced keyboard input handling
function handleInput(event) {
    // Handle keyboard shortcuts
    if (event.ctrlKey) {
        switch(event.key) {
            case ',':
                event.preventDefault();
                toggleSettings();
                return;
            case 't':
                event.preventDefault();
                toggleTheme();
                return;
            case 's':
                event.preventDefault();
                toggleSound();
                return;
        }
    }
    
    if (event.key === 'Tab') {
        event.preventDefault();
        initTest();
        return;
    }
    
    if (event.key === 'Escape') {
        event.preventDefault();
        if (elements.textDisplay) elements.textDisplay.focus();
        return;
    }
    
    // Prevent default for typing keys
    if (event.key.length === 1 || event.key === 'Backspace' || event.key === ' ') {
        event.preventDefault();
    }

    if (gameState.isCompleted) return;

    if (!gameState.isActive && (event.key.length === 1 || event.key === ' ')) {
        startTest();
    }
    
    const currentWord = gameState.words[gameState.currentWordIndex];
    if (!currentWord) return;
    
    if (event.key === ' ') {
        handleWordCompletion();
    } else if (event.key === 'Backspace') {
        if (gameState.userInput.length > 0) {
            gameState.userInput = gameState.userInput.slice(0, -1);
            displayText();
            soundManager.playKeystroke(true, false);
        }
    } else if (event.key.length === 1) {
        gameState.userInput += event.key;
        
        const charIndex = gameState.userInput.length - 1;
        const isCorrect = charIndex < currentWord.length && event.key === currentWord[charIndex];
        
        gameState.totalChars++;
        if (isCorrect) {
            gameState.correctChars++;
        } else {
            gameState.errors++;
        }
        
        soundManager.playKeystroke(isCorrect, false);
        
        const currentWordElement = elements.textDisplay.querySelector('.word.current');
        if (currentWordElement) {
            currentWordElement.classList.add('typing-effect');
            setTimeout(() => {
                currentWordElement.classList.remove('typing-effect');
            }, 100);
        }
        
        displayText();
        updateStats();
    }
}

// Enhanced word completion
function handleWordCompletion() {
    const currentWord = gameState.words[gameState.currentWordIndex];
    
    gameState.typedWords[gameState.currentWordIndex] = gameState.userInput;
    
    if (gameState.userInput === currentWord) {
        gameState.correctWords++;
        soundManager.playWordComplete();
    } else {
        const remainingChars = currentWord.length - gameState.userInput.length;
        if (remainingChars > 0) {
            gameState.totalChars += remainingChars;
            gameState.errors += remainingChars;
        }
    }
    
    soundManager.playKeystroke(true, true);
    
    gameState.currentWordIndex++;
    gameState.userInput = '';
    
    if (gameState.currentWordIndex >= gameState.words.length) {
        endTest();
        return;
    }
    
    displayText();
    updateStats();
}

// Enhanced test management
function startTest() {
    if (gameState.isCompleted) return;
    
    gameState.isActive = true;
    gameState.startTime = Date.now();
    
    if (gameState.timer) clearInterval(gameState.timer);
    
    gameState.timer = setInterval(() => {
        if (gameState.isCompleted) {
            clearInterval(gameState.timer);
            return;
        }
        updateStats();
        
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        if (elapsed >= gameState.timeLimit) {
            endTest();
        }
    }, 50);
}

function endTest() {
    if (gameState.isCompleted) return;
    
    gameState.isActive = false;
    gameState.isCompleted = true;
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    elements.liveWpm.classList.remove('active');
    
    soundManager.playTestComplete();
    
    // Calculate final comprehensive stats
    const finalWpm = calculateWPM();
    const finalAccuracy = calculateAccuracy();
    const wordsTyped = gameState.currentWordIndex;
    
    if (elements.results) {
        elements.finalWpm.textContent = finalWpm;
        elements.finalAccuracy.textContent = finalAccuracy + '%';
        elements.finalErrors.textContent = gameState.errors;
        elements.finalTime.textContent = gameState.timeLimit + 's';
        elements.finalChars.textContent = gameState.totalChars;
        elements.finalWords.textContent = wordsTyped;
        
        const statsBar = document.querySelector('.stats');
        if (statsBar) statsBar.style.display = 'none';
        
        elements.results.style.display = 'block';
    }
}

// Settings functions
function toggleSettings() {
    if (elements.settings) {
        const isVisible = elements.settings.style.display !== 'none';
        elements.settings.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) elements.shortcuts.style.display = 'none';
    }
}

function toggleShortcuts() {
    if (elements.shortcuts) {
        const isVisible = elements.shortcuts.classList.contains('show');
        if (isVisible) {
            elements.shortcuts.classList.remove('show');
            setTimeout(() => elements.shortcuts.style.display = 'none', 300);
        } else {
            elements.shortcuts.style.display = 'block';
            setTimeout(() => elements.shortcuts.classList.add('show'), 10);
        }
        elements.settings.style.display = 'none';
    }
}

function toggleTheme() {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    if (elements.themeToggle) elements.themeToggle.textContent = isLight ? '☀️' : '🌙';
    settingsManager.set('theme', isLight ? 'light' : 'dark');
}

function toggleSound() {
    const enabled = soundManager.toggle();
    if (elements.soundToggle) elements.soundToggle.checked = enabled;
    settingsManager.set('soundEnabled', enabled);
}

// Share functionality
function shareResults() {
    const finalWpm = calculateWPM();
    const finalAccuracy = calculateAccuracy();
    
    const resultsText = `🚀 Just completed a typing test!
⚡ WPM: ${finalWpm}
🎯 Accuracy: ${finalAccuracy}%
❌ Errors: ${gameState.errors}
⏱️ Time: ${gameState.timeLimit}s
📝 Difficulty: ${gameState.difficulty}

Try it yourself! 🎮`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Typing Test Results',
            text: resultsText,
            url: window.location.href
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(resultsText).then(() => {
            showToast('Results copied to clipboard! 📋');
        });
    }
}

// Toast notification system
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 255, 0, 0.9);
        color: black;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Enhanced initialization
function initTest() {
    if (gameState.timer) clearInterval(gameState.timer);
    
    gameState = {
        isActive: false,
        isCompleted: false,
        startTime: null,
        timeLimit: parseInt(elements.timeLimit.value) || 60,
        currentWordIndex: 0,
        currentCharIndex: 0,
        words: generateWords(),
        userInput: '',
        typedWords: [],
        errors: 0,
        correctChars: 0,
        totalChars: 0,
        correctWords: 0,
        difficulty: elements.difficulty.value || 'mixed',
        timer: null,
        wpmHistory: []
    };
    
    // Apply saved settings
    gameState.timeLimit = settingsManager.get('timeLimit');
    gameState.difficulty = settingsManager.get('difficulty');
    
    if (elements.results) elements.results.style.display = 'none';
    const statsBar = document.querySelector('.stats');
    if (statsBar) statsBar.style.display = 'grid';
    
    if (elements.timer) {
        elements.timer.textContent = gameState.timeLimit;
        elements.timer.style.color = '';
        elements.timer.style.animation = '';
    }
    
    if (elements.progressBar) elements.progressBar.style.width = '0%';
    elements.liveWpm.classList.remove('active');
    
    displayText();
    updateStats();
    
    if (elements.textDisplay) elements.textDisplay.focus();
}

// Enhanced event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    if (elements.difficulty) elements.difficulty.value = settingsManager.get('difficulty');
    if (elements.timeLimit) elements.timeLimit.value = settingsManager.get('timeLimit');
    if (elements.soundToggle) elements.soundToggle.checked = settingsManager.get('soundEnabled');
    if (elements.liveWpmToggle) elements.liveWpmToggle.checked = settingsManager.get('liveWpm');
    if (elements.volumeSlider) elements.volumeSlider.value = settingsManager.get('volume');
    
    // Apply theme
    const savedTheme = settingsManager.get('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        if (elements.themeToggle) elements.themeToggle.textContent = '☀️';
    }
    
    // Apply sound settings
    soundManager.enabled = settingsManager.get('soundEnabled');
    soundManager.setVolume(settingsManager.get('volume') / 100);
    
    initTest();
    
    // Global keyboard events
    document.addEventListener('keydown', handleInput);
    
    // Text display events
    if (elements.textDisplay) {
        elements.textDisplay.addEventListener('click', () => elements.textDisplay.focus());
    }
    
    // Button events
    if (elements.restartBtn) elements.restartBtn.addEventListener('click', initTest);
    if (elements.newTestBtn) elements.newTestBtn.addEventListener('click', initTest);
    if (elements.shareBtn) elements.shareBtn.addEventListener('click', shareResults);
    if (elements.settingsBtn) elements.settingsBtn.addEventListener('click', toggleSettings);
    if (elements.shortcutsBtn) elements.shortcutsBtn.addEventListener('click', toggleShortcuts);
    if (elements.themeToggle) elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Settings events
    if (elements.difficulty) {
        elements.difficulty.addEventListener('change', (e) => {
            settingsManager.set('difficulty', e.target.value);
            initTest();
        });
    }
    
    if (elements.timeLimit) {
        elements.timeLimit.addEventListener('change', (e) => {
            settingsManager.set('timeLimit', parseInt(e.target.value));
            initTest();
        });
    }
    
    if (elements.soundToggle) {
        elements.soundToggle.addEventListener('change', (e) => {
            soundManager.enabled = e.target.checked;
            settingsManager.set('soundEnabled', e.target.checked);
        });
    }
    
    if (elements.liveWpmToggle) {
        elements.liveWpmToggle.addEventListener('change', (e) => {
            settingsManager.set('liveWpm', e.target.checked);
        });
    }
    
    if (elements.volumeSlider) {
        elements.volumeSlider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value);
            soundManager.setVolume(volume / 100);
            settingsManager.set('volume', volume);
        });
    }
    
    // Welcome message
    setTimeout(() => {
        showToast('Welcome to Premium Typing Test! 🎮');
    }, 1000);
}); 