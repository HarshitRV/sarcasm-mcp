#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { ServerNotification, ServerRequest } from "@modelcontextprotocol/sdk/types.js";
import { getRandomSarcasticQuote, getSarcasticQuotes } from "./service/sarcasm-service.js";

const mcpServer = new McpServer({
    name: 'sarcasm',
    version: '1.0.0',
    capabilities: {
        tools: {}
    }
});

mcpServer.tool('get-all-sarcastic-quotes', "Get all available sarcastic quotes", async (_extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => {
    const sarcasticQuotes = await getSarcasticQuotes();

    if (!sarcasticQuotes) {
        return {
            content: [
                {
                    type: 'text',
                    text: 'No sarcastic quotes found.'
                }
            ]
        };
    }

    return {
        content: [
            {
                type: 'text',
                text: 'Here are some sarcastic quotes for your enjoyment:'
            },
            {
                type: 'text',
                text: JSON.stringify(sarcasticQuotes, null, 2)
            }
        ]
    };
});

mcpServer.tool('get-random-sarcastic-quote', "Get a random sarcastic quote", async (_extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => {
    const sarcasticQuotes = await getRandomSarcasticQuote();

    if (!sarcasticQuotes) {
        return {
            content: [
                {
                    type: 'text',
                    text: 'No sarcastic quotes found.'
                }
            ]
        };
    }

    return {
        content: [
            {
                type: 'text',
                text: sarcasticQuotes.sarcasm
            }
        ]
    };
});

export default mcpServer;