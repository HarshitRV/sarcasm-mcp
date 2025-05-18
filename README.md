# Sarcasm MCP Server

A Model Context Protocol (MCP) server that provides sarcastic quotes. This MCP server integrates with AI agents to deliver witty and sarcastic responses.

## 🚀 Features

- **Get All Sarcastic Quotes**: Retrieve all available sarcastic quotes
- **Get Random Sarcastic Quote**: Fetch a random sarcastic quote for your enjoyment
- **MCP Integration**: Seamlessly integrates with any Model Context Protocol supporting environment

## 📋 Requirements

- Node.js 18.0 or higher
- npm or yarn package manager

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sarcasm-mcp.git

# Navigate to the project directory
cd sarcasm-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

## 🛠️ Usage

### Running as an MCP Server

```bash
# Using npx after installation
npx sarcasm

# Or directly from the build
node build/index.js
```

### Using with GitHub Copilot

This MCP server integrates with GitHub Copilot and other AI assistants that support the Model Context Protocol. When connected, you can use the following tools:

1. `get-all-sarcastic-quotes`: Retrieves all available sarcastic quotes
2. `get-random-sarcastic-quote`: Gets a random sarcastic quote

Example:

```md
Can you #get-random-sarcastic-quote for me?
```

## 📦 Package Structure

```md
sarcasm-mcp/
├── src/
│ ├── index.ts # Main server file
│ ├── constants/ # API constants
│ ├── service/ # Service for fetching quotes
│ └── types/ # TypeScript type definitions
├── build/ # Compiled JavaScript files
├── package.json # Project dependencies and scripts
└── README.md # This documentation
```

## 🔌 API Reference

This MCP server uses the following API endpoints:

- `GET /sarcasm/all` - Retrieves all sarcastic quotes
- `GET /sarcasm/random` - Gets a random sarcastic quote

Responses are returned in the following format:

```typescript
interface SarcasticQuote {
	id: string;
	sarcasm: string;
	createdAt: string;
	updatedAt: string;
}
```

## 🧰 Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server in development mode
node build/index.js
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
