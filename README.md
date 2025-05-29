# ⚡ Minimal Typing Test

A professional-grade, minimalistic typing test inspired by Monkeytype with pure black and white design.

![Typing Test Preview](https://via.placeholder.com/800x400/000000/ffffff?text=Minimal+Typing+Test)

## ✨ Features

### 🎯 Core Functionality
- **Real-time WPM tracking** - Live Net WPM and Raw WPM calculation
- **Accuracy monitoring** - Character-level precision tracking
- **Speed graphs** - Dual-line charts showing progress over time
- **Multiple time limits** - 15s, 30s, 60s, 120s, 300s options
- **Smart word generation** - Anti-repetition algorithms

### 🔧 Advanced Features
- **6 Difficulty Levels**:
  - Easy: Simple 3-5 letter words
  - Normal: Common English words
  - Hard: Complex vocabulary and technical terms
  - Quotes: Famous quotes and literature
  - Numbers: Numeric sequences and patterns
  - Punctuation: Special characters and symbols

### 🎵 Audio & Visual
- **Web Audio API** - Professional sound effects
- **Smooth caret tracking** - Animated cursor with auto-scrolling
- **Pure monochrome design** - Strict black (#000000) and white (#ffffff) palette with red (#ff0000) for errors
- **Responsive layout** - Mobile and desktop optimized
- **Theme toggle** - Switch between dark and light monochrome themes

### ⚙️ Customization
- **Settings persistence** - LocalStorage saves preferences
- **Keyboard shortcuts** - Professional workflow keybindings
- **Performance monitoring** - Memory usage and render time tracking
- **Share functionality** - Copy results to clipboard

## 🚀 Quick Start

### Option 1: Direct Use
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start typing to begin the test!

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/minimal-typing-test.git

# Navigate to the directory
cd minimal-typing-test

# Open in your preferred development server
# Example with Python:
python -m http.server 8000

# Or with Node.js http-server:
npx http-server
```

## 🎮 Usage

### Getting Started
1. **Start typing** - Click the text area or press any key to begin
2. **Complete words** - Press spacebar to move to the next word
3. **View results** - Statistics update in real-time during the test
4. **Restart anytime** - Press Tab or click the restart button

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Tab` | Restart test (when not active) |
| `Esc` | Focus input area |
| `Ctrl + Shift + P` | Toggle settings panel |
| `Ctrl + Shift + S` | Toggle sound effects |

### Settings Options
- **Difficulty Level** - Choose from 6 different challenge levels
- **Sound Effects** - Toggle audio feedback with volume control
- **Smooth Caret** - Enable/disable animated cursor tracking
- **Live WPM** - Show raw WPM alongside net WPM

## 📊 Statistics Explained

### Core Metrics
- **Net WPM** - Words per minute after error penalties
- **Raw WPM** - Total characters typed per minute
- **Accuracy** - Percentage of correctly typed characters
- **Consistency** - Stability of typing speed (lower deviation = higher score)

### Advanced Analytics
- **Correct/Incorrect Words** - Word-level accuracy tracking
- **Character Count** - Total characters typed during test
- **Speed Graph** - Real-time WPM progression chart
- **Performance Metrics** - Render time and input latency monitoring

## 🛠️ Technical Details

### Architecture
- **Pure Vanilla JavaScript** - No frameworks, maximum performance
- **Web Audio API** - Professional audio synthesis
- **Canvas Charts** - Chart.js for speed visualization
- **CSS Grid/Flexbox** - Modern responsive layout
- **LocalStorage** - Client-side settings persistence

### Browser Support
- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance
- **Lightweight** - ~45KB total size
- **Fast startup** - <100ms initial load
- **Smooth animations** - 60fps caret tracking
- **Memory efficient** - <10MB RAM usage

## 🎨 Customization

### Color Scheme
The application strictly follows a monochrome palette:
- Background: `#000000` (Pure Black)
- Text: `#ffffff` (Pure White)
- No grays or intermediate colors

### Font Configuration
- Primary: `JetBrains Mono` (Monospace)
- Fallback: System monospace fonts
- Sizes: Responsive scaling for all devices

### Adding Custom Word Lists
```javascript
// In script.js, modify the wordLists object:
const wordLists = {
    // ... existing lists
    custom: [
        "your", "custom", "words", "here"
    ]
};
```

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly across browsers
5. Submit a pull request

### Code Style
- Use ES6+ features
- Follow existing naming conventions
- Add comments for complex algorithms
- Maintain the monochrome color scheme
- Ensure mobile responsiveness

### Feature Requests
- Open an issue with the `enhancement` label
- Describe the feature and use case
- Consider implementation complexity
- Respect the minimalist design philosophy

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Monkeytype](https://monkeytype.com/)
- Uses [Chart.js](https://www.chartjs.org/) for speed visualization
- [JetBrains Mono](https://www.jetbrains.com/mono/) font family
- Web Audio API for sound synthesis

## 📞 Support

- 🐛 **Bug Reports**: Open an issue with reproduction steps
- 💡 **Feature Requests**: Use the enhancement issue template
- 📖 **Documentation**: Check the wiki for detailed guides
- 💬 **Discussions**: Join the community discussions tab

---

**Made with ⚡ for fast typists who love clean, minimal design.** 