
# Kurukshetra - Hackathon & CTF Platform 🚀

An open-source terminal-style platform designed for conducting hackathons and CTFs (Capture The Flag) events in colleges. Built for GDG during the annual technical fest, this platform provides comprehensive authentication, team management, and event proctoring capabilities without the hassle of manual oversight.


## ✨ Features

### 🖥️ Terminal-Style Interface
- Immersive command-line experience in the browser
- Custom ASCII art and branding
- Interactive terminal commands and navigation
- Retro hacker aesthetic that appeals to developers

### 🔐 Robust Authentication System
- Secure user registration and login
- Team-based authentication
- Multi-factor verification support
- Session management and security

### 🏆 Event Management
- **Hackathon Support** - Complete team registration and project submission
- **CTF Challenges** - Built-in challenge management and scoring
- **Real-time Leaderboards** - Live scoring and ranking systems
- **Automated Proctoring** - Anti-cheating measures and monitoring

### 🎯 Club-Friendly Design
- Easy deployment for any college club
- Customizable branding and themes
- Multi-event support on single platform
- Admin dashboard for event organizers

### 🚀 Performance & Security
- Built with **TypeScript** and **Vite** for type safety and speed
- Dockerized deployment for easy scaling
- Secure API endpoints with proper validation
- Real-time updates and notifications

## 🏆 Success Stories

This platform has been successfully used for:
- **GDG IIIT Sricity** - Annual technical fest hackathons
- **Chakravyuh CTF** - Cybersecurity competitions
- Multiple college-level programming contests
- Inter-college hackathon events

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **TypeScript** | Type-safe frontend development |
| **Vite** | Fast build tool and dev server |
| **Node.js** | Backend runtime environment |
| **Docker** | Containerization and deployment |
| **Custom API** | Backend services and authentication |
| **js-yaml** | Configuration management |
| **Terminal UI** | Command-line interface simulation |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gdg-iiits/kurukshetra.git
   cd kurukshetra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   BASE_URL=http://localhost:7878
   NODE_ENV=production
   API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t kurukshetra .
   ```

2. **Run container**
   ```bash
   docker run -p 3000:3000 kurukshetra
   ```

## 📁 Project Structure

```
kurukshetra/
├── src/
│   ├── css/
│   │   ├── css-reset.css
│   │   └── style.css
│   ├── main.ts              # Main application logic
│   └── styles.ts            # Terminal styling
├── res/                     # Static resources
├── config.json              # Configuration and content
├── index.html               # Main HTML file
├── Dockerfile               # Docker configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md
```

## 🎨 Customization

### Terminal Configuration
Update the terminal settings in `config.json`:

```json
{
  "title": "Your Event Name",
  "hostname": "YourPlatform",
  "colors": {
    "background": "#000000",
    "foreground": "#D6D5D4",
    "prompt": {
      "default": "#01A0E4",
      "user": "#F7F7F7"
    }
  }
}
```

### Event Branding
- Replace ASCII art in `config.json`
- Update logos in the `res/` directory
- Modify color schemes in the configuration
- Customize terminal commands and responses

### Adding New Features
- **Commands**: Add new terminal commands in `main.ts`
- **Challenges**: Update challenge data in `config.json`
- **Authentication**: Modify auth flows in the TypeScript files
- **Styling**: Update CSS in `src/css/` directory

## 🏆 Event Management

### Hackathon Mode
The platform supports comprehensive hackathon management:
- **Team Registration**: Automated team formation and validation
- **Project Submission**: File uploads and version control
- **Judging System**: Scoring rubrics and evaluation workflows
- **Real-time Updates**: Live announcements and notifications

### CTF Mode
Perfect for cybersecurity competitions:
- **Challenge Categories**: Web, Crypto, Forensics, Reverse Engineering
- **Dynamic Scoring**: Points adjustment based on solve count
- **Hint System**: Progressive hints with point deductions
- **Flag Validation**: Automated answer checking

### Admin Features
- **Dashboard**: Complete event oversight and analytics
- **User Management**: Participant registration and team oversight
- **Challenge Upload**: Easy challenge creation and deployment
- **Live Monitoring**: Real-time event statistics and leaderboards

## 🔒 Security Features

- **Authentication**: Secure login with session management
- **Input Validation**: Comprehensive sanitization of user inputs
- **Rate Limiting**: Protection against brute force attacks
- **Anti-Cheating**: Multiple validation layers for submissions
- **Audit Logs**: Complete activity tracking for transparency

## 🚀 Deployment

### GitHub Pages (Static Files)
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

### Docker Deployment (Recommended)
```bash
# Build and run
docker build -t kurukshetra .
docker run -p 3000:3000 kurukshetra
```

### Cloud Deployment
The platform works seamlessly with:
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder
- **Heroku**: Use the included Dockerfile
- **AWS/GCP**: Deploy as containerized application

## 🎮 Terminal Commands

The platform includes various interactive commands:

```bash
# Basic navigation
help          # Show available commands
about         # About the platform
events        # List current events

# Authentication
login         # User login
register      # New user registration
logout        # Sign out

# Event participation
join <event>  # Join an event
submit        # Submit solution/project
leaderboard   # View current standings
challenges    # List available challenges

# Admin commands (requires privileges)
admin         # Access admin panel
stats         # View event statistics
export        # Export event data
```

## 📱 Mobile Optimization

The template is fully responsive and includes:
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on slow connections
- Progressive Web App capabilities

## 🔒 Security Features

- Secure payment processing
- Input validation and sanitization
- HTTPS enforcement
- Firebase security rules
- XSS protection

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- TEDx program for inspiration and guidelines
- React and Vite communities for excellent tools
- PhonePe for reliable payment infrastructure
- All contributors and users of this template

## 📞 Support

If you're using this template for your TEDx event and need help:

- 📧 Email: support@tedxtemplate.com
- 💬 Discord: [Join our community](https://discord.gg/tedx-template)
- 📚 Documentation: [Full docs](https://docs.tedxtemplate.com)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/tedx-website-template/issues)

## 🌟 Show Your Support

If this template helped you create an amazing TEDx event website, please:
- ⭐ Star this repository
- 🍴 Fork it for your own events
- 📱 Share it with other TEDx organizers
- 💝 Consider sponsoring the project

---

**Made with ❤️ for the TEDx community**

*Spreading ideas worth sharing, one website at a time.*
