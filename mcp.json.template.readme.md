# MCP Configuration

## Local MCP Configuration

```json
    {
        "servers": {
            "sarcasm": {
                "type": "stdio",
                "command": "node",
                "args": [
                    "PATH_TO_YOUR_BUILD_DIRECTORY/index.js"
                ]
            }
        }
    }
```

## Via NPX

```json
{
    "servers": {
        "sarcasm-mcp": {
            "command": "npx",
            "args": ["sarcastic-quote-mcp"], 
            "env": {},
            "type": "stdio"
        }
    }
}
