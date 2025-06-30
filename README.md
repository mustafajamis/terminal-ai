# 🧠 Terminal AI Assistant

A command-line AI assistant built using [Bun](https://bun.sh/), [React Ink](https://github.com/vadimdemedes/ink), and the **Google Gemini API**.
Interact with a powerful AI model directly from your terminal.

---

## 🚀 Features

* Chat with Gemini AI via CLI
* Clean React Ink terminal UI
* Supports `/new` and `/exit` commands
* Environment variables via `.env`
* Written in TypeScript

---

## 📁 Project Structure

```
terminal-ai/
├── src/
│   ├── index.tsx        # Terminal UI entry point (Ink)
│   ├── ai.ts            # Gemini API logic
│   └── commands.ts      # Command routing logic
├── .env                 # API key (not committed)
├── .gitignore
├── bunfig.toml
├── package.json
├── tsconfig.json
```

---

## ⚙️ Setup & Run

### 1. Clone the Repo

```bash
git clone https://github.com/mustafajamis/terminal-ai.git
cd terminal-ai
```

### 2. Install Bun (if not installed)

```bash
curl -fsSL https://bun.sh/install | bash
```

### 3. Install Dependencies

```bash
bun install
```

### 4. Create a `.env` File

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 5. Run the Assistant

```bash
bun run src/index.tsx
```

Type commands like:

```
> What is C++?
> /new
> /exit
```

---

## 🧠 Powered By

* 🐇 [Bun](https://bun.sh/)
* ⚛️ [React Ink](https://github.com/vadimdemedes/ink)
* 🌟 [Gemini API (Google AI)](https://ai.google.dev)

---

## 📜 License

MIT — feel free to fork and improve.

---

## 📌 Author

Made with ❤️ by [Mustafa Jamshidi](https://github.com/mustafajamis)
