import express from 'express';
import mcpServer from './mcp-server.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';

const app = express();

let transport: SSEServerTransport | null = null;

app.get('/sse', (req, res) => {
    transport = new SSEServerTransport("/messages", res);
    mcpServer.connect(transport);
})

app.post('/messages', (req, res) => {
    if (transport) {
        transport.handlePostMessage(req, res);
    }
})

export default app;