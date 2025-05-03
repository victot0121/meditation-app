# Serenity 🌿

**Serenity** is a cross-platform meditation app designed to help users relax, focus, and improve mindfulness through guided meditation sessions and ambient sounds.

Built with **React Native**, powered by **Expo**, and styled using **Tailwind CSS** via NativeWind, Serenity provides a smooth and immersive experience on both Android and iOS platforms.

---

## 📱 Features

- 🧘‍♀️ Guided meditation sessions
- 🎶 Soothing ambient sounds
- 🎨 Beautiful gradients & visuals
- ⚡ Fast and responsive UI
- 🌙 Dark mode friendly
- 🔁 Seamless navigation with `expo-router`

---

## 🚀 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS (NativeWind)](https://www.nativewind.dev/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/)
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [expo-router](https://expo.github.io/router/)

---

## 📦 Installation

Make sure you have **Node.js**, **npm**, **Expo CLI**, and **EAS CLI** installed:

```bash
npm install -g expo-cli eas-cli
````

Then clone the project and install dependencies:

```bash
git clone https://github.com/yourusername/serenity-app.git
cd serenity-app
npm install
```

---

## 🧪 Running the App Locally

### Start in development mode:

```bash
npm start
```

Or run on Android/iOS simulator:

```bash
npm run android
npm run ios
```

---

## 🔨 EAS Build (APK or iOS)

First, log in to EAS:

```bash
eas login
```

Then configure the build setup (if not already done):

```bash
eas build:configure
```

To build for **Android (APK)** locally:

```bash
eas build --platform android --profile preview --local
```

Or to build on Expo’s cloud:

```bash
eas build --platform android
```

> 📄 See [EAS Build Documentation](https://docs.expo.dev/build-reference/eas-json/) for more.

---

## 📁 Project Structure

```
meditation-app/
├── app/                 # Expo Router app folder
├── assets/              # Images, fonts, audio files
├── components/          # Reusable UI components
├── scripts/             # Dev helper scripts
├── tailwind.config.js   # Tailwind setup
├── eas.json             # EAS Build config
├── app.json             # Expo config
└── ...
```

---

## 🧼 Useful Scripts

* `npm run lint` – Lint your code
* `npm run test` – Run tests
* `npm run reset-project` – Clean and reset cache (custom script)

---

## ✅ Dependencies

See the full list in `package.json`, including:

* `expo`: `~51.0.22`
* `react-native`: `0.74.3`
* `expo-av`, `expo-linear-gradient`, `expo-router`, `react-native-reanimated`, and more.

---

## 🧠 License

MIT License © 2025 \[Your Name]

---

## 🤝 Contributing

Pull requests and feedback are welcome! Let’s build a more mindful world together.

---

## 📸 Screenshots

> *(Add screenshots of the home page, meditation player, and other screens here if available.)*

---

## 🔗 Links

* [Expo Docs](https://docs.expo.dev/)
* [EAS Build Guide](https://docs.expo.dev/build/introduction/)
* [Tailwind for React Native (NativeWind)](https://www.nativewind.dev/)

```

---

Would you like a sample `eas.json` configuration to go with this as well?
```
