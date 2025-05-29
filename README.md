# ⚡ Typing Test

A beautiful, feature-rich typing test application with realistic keyboard sounds, stunning animations, and comprehensive statistics tracking. Built with pure HTML, CSS, and JavaScript for optimal performance.

## 🚀 Features

### 🎮 Core Functionality
- **Multiple Difficulty Levels**: Easy, Mixed, Hard, Quotes, and Numbers
- **Flexible Time Limits**: 15s, 30s, 1min, 2min, 5min
- **Real-time Statistics**: WPM, Accuracy, Errors, Progress tracking
- **Live WPM Indicator**: Floating real-time speed display
- **Comprehensive Results**: Detailed performance breakdown
- **Word Advancement**: Use Space bar to move to the next word.

### 🎨 Visual Excellence
- **Stunning Animations**: Smooth character-by-character feedback
- **Progress Bar**: Visual progress tracking with glowing effects
- **Theme Support**: Light and dark modes with smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Glassmorphism UI**: Modern blur effects and gradients

### 🔊 Audio Experience
- **Realistic Keyboard Sounds**: Cherry MX Blue inspired mechanical sounds
- **Context-Aware Audio**: Different sounds for correct/incorrect typing, space bar, word completion
- **Victory Fanfare**: Epic completion celebration
- **Volume Control**: Adjustable sound levels
- **Sound Toggle**: Instant mute/unmute capability

### ⌨️ Advanced Input
- **Smart Word Generation**: Avoids repetition, balanced difficulty
- **Enhanced Word Lists**: Thousands of carefully curated words
- **Quote Mode**: Full sentences from famous quotes
- **Error Visualization**: Clear highlighting of mistakes
- **Smooth Cursor**: Animated cursor with glow effects

### 🛠️ User Experience
- **Keyboard Shortcuts**: Full keyboard navigation support
- **Settings Persistence**: Automatically saves user preferences
- **Share Results**: Copy or share your achievements
- **Toast Notifications**: Elegant feedback system
- **Accessibility**: Screen reader friendly, keyboard navigation

### 📊 Statistics
- **Real-time WPM**: Live typing speed updates
- **Accuracy Tracking**: Percentage-based precision measurement
- **Error Counting**: Detailed mistake tracking
- **Character Statistics**: Total characters typed
- **Word Completion**: Successful words count
- **Time Tracking**: Precise timing with countdown

## 🎯 Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Restart Test | `Tab` |
| Focus Test Area | `Esc` |
| Toggle Settings | `Ctrl + ,` |
| Toggle Theme | `Ctrl + T` |
| Toggle Sound | `Ctrl + S` |

## 🔧 Technology Stack

- **Frontend**: Pure HTML5, CSS3, ES6+ JavaScript
- **Audio**: Web Audio API for realistic sound generation
- **Storage**: LocalStorage for settings persistence
- **Responsive**: CSS Grid & Flexbox for perfect layouts
- **Performance**: Optimized for 60fps animations

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Quick Start

### Option 1: Direct Download
1. Download the repository files
2. Open `index.html` in your browser
3. Click the text area to focus and start typing! Use the Space bar to advance words.

### Option 2: GitHub Pages
Visit the live demo: [Typing Test](https://byprathamesh.github.io/typingtest/)

### Option 3: Local Development
```bash
git clone https://github.com/byprathamesh/typingtest.git
cd typingtest
# Open index.html in your browser or use a local server
python -m http.server 8000  # Python 3
# OR
npx serve .  # Node.js
```

## ⚙️ Configuration

The app automatically saves your preferences including:
- Difficulty level
- Time limit
- Sound settings
- Theme preference
- Volume level

Settings are stored in browser localStorage and persist between sessions.

## 🎨 Customization

### Themes
- **Dark Mode**: Default sleek dark theme
- **Light Mode**: Clean light theme
- Toggle with `Ctrl + T` or the theme button

### Difficulty Levels

#### Easy
Common 3-4 letter words perfect for beginners.

#### Mixed (Recommended)
Balanced combination of short, medium, and everyday vocabulary words.

#### Hard
Complex words with challenging spelling and longer length.

#### Quotes
Complete sentences from famous quotes and sayings.

#### Numbers
Number sequences for numeric typing practice.

## 📈 Performance Tips

1. **Consistent Practice**: Regular 5-10 minute sessions
2. **Focus on Accuracy**: Speed follows accuracy naturally
3. **Proper Posture**: Maintain good ergonomic positioning
4. **Use All Fingers**: Practice proper touch typing technique
5. **Start Slow**: Begin with lower difficulty and gradually increase

## 🏆 Achievement Levels

| WPM Range | Level |
|-----------|-------|
| 0-20 | Beginner |
| 21-40 | Intermediate |
| 41-60 | Advanced |
| 61-80 | Expert |
| 81+ | Master |

## 🔊 Audio Features

### Sound Types
- **Keystroke**: Satisfying mechanical click for each character
- **Space Bar**: Deeper, longer sound for word completion
- **Word Complete**: Pleasant chord progression
- **Error**: Distinct but not harsh error indication
- **Victory**: Epic fanfare for test completion

### Audio Settings
- **Volume Control**: 0-100% adjustable volume
- **Instant Toggle**: Quick mute/unmute with checkbox
- **Keyboard Shortcut**: `Ctrl + S` for quick sound toggle

## 🎯 Accuracy Calculation

```
Accuracy = (Correct Characters / Total Characters Typed) × 100%
```

The system tracks every keystroke, including:
- Correct characters
- Incorrect characters
- Extra characters (typing beyond word length)
- Missing characters (not completing words)

## 📊 WPM Calculation

```
WPM = (Total Correct Characters / 5) / Minutes Elapsed
```

Uses the standard formula where 5 characters = 1 word.

## 🌟 Advanced Features

### Progress Tracking
- Visual progress bar showing completion percentage
- Real-time updates during typing
- Smooth animations and glow effects

### Error Visualization
- Incorrect characters highlighted in red
- Extra characters shown distinctly
- Missing characters counted in statistics

### Smart Word Selection
- Avoids immediate word repetition
- Balanced difficulty distribution
- Intelligent randomization algorithm

## 🛡️ Privacy

- **No Data Collection**: All data stays on your device
- **Local Storage Only**: Preferences saved in browser storage
- **No Tracking**: No analytics or external connections
- **Offline Capable**: Works without internet connection

## 🔧 Development

### File Structure
```
typingtest/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and animations
├── script.js           # Core functionality and logic
├── README.md           # Documentation
├── vercel.json        # Vercel deployment config
└── .gitignore         # Git ignore rules
```

### Key Components

#### KeyboardSoundManager
Handles realistic audio generation using Web Audio API.

#### SettingsManager
Manages user preferences with localStorage persistence.

#### Game State
Tracks all typing session data and statistics.

#### Display Engine
Renders text with character-by-character styling and animations.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Other Platforms
The app is static HTML/CSS/JS and works on any web hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern typing test applications
- Sound design influenced by mechanical keyboard communities
- Typography and design following modern web standards

## 📞 Support

For issues, suggestions, or contributions:
- Open an issue on GitHub
- Fork the repository and submit improvements
- Share feedback and suggestions

---

**Start typing and improve your speed today! ⚡** 