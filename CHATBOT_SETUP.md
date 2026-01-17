# AI Chatbot Setup Guide

## Overview
The portfolio includes an AI chatbot that can answer questions about contact details, skills, experience, and more. The chatbot uses either ChatGPT or Google Gemini API for intelligent responses.

## Configuration

### Option 1: ChatGPT (OpenAI)

1. Get your API key:
   - Visit: https://platform.openai.com/api-keys
   - Sign up or log in
   - Create a new API key

2. Configure in `script.js`:
   ```javascript
   const aiConfig = {
     provider: 'chatgpt',
     chatgpt: {
       apiKey: 'k-proj-Rj0Jq74xhv47UcoetRTtA53Gf22Isj4L5buXhGkzFiWdQMcwoSM0l7CXA6wBWSXt5LEu42M41vT3BlbkFJ-ktPD-C8PHJ0_sqr65R6JzDpDL7h-t-s4JNx0KJ3gjzqlOmsENlg2RgxylNAtKNVZMeCwi3FQA',  // Add your key here
       apiUrl: 'https://api.openai.com/v1/chat/completions',
       model: 'gpt-3.5-turbo'
     }
   };
   ```

### Option 2: Google Gemini

1. Get your API key:
   - Visit: https://makersuite.google.com/app/apikey
   - Sign in with Google account
   - Create a new API key

2. Configure in `script.js`:
   ```javascript
   const aiConfig = {
     provider: 'gemini',  // Change to 'gemini'
     gemini: {
       apiKey: 'AIzaSyBJkp-xhSuvBeUK0T4T0-iNQ39r-4-BFE8',  // Add your key here
       apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
     }
   };
   ```

## How It Works

1. **Local Responses First**: The chatbot first tries to answer using local knowledge:
   - Contact information (email, LinkedIn, GitHub)
   - Skills and technologies
   - Experience and education
   - Projects

2. **AI API Fallback**: If the question doesn't match local patterns, it uses ChatGPT or Gemini to provide intelligent answers.

## Security Note

⚠️ **Important**: For production, you should:
- Use a backend proxy to hide API keys
- Never expose API keys in client-side code
- Consider using environment variables or a server-side API

For development/testing, you can add keys directly, but be careful not to commit them to public repositories.

## Testing

1. Open your portfolio in a browser
2. Click the chatbot button (bottom-right)
3. Try asking:
   - "What's your email?" (local response)
   - "Tell me about your skills" (local response)
   - "What programming languages do you know?" (AI response)
   - "How can I contact you?" (local response)

## Troubleshooting

- **"API key not configured"**: Add your API key in the `aiConfig` object
- **"API error"**: Check your API key is valid and has credits/quota
- **CORS errors**: You may need a backend proxy for production use
