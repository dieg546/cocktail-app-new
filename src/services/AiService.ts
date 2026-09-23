// AiService.ts
import { streamText } from 'ai'
import { openRouter } from '../lib/ai'

export default {
  generateRecipe(prompt: string) {
    const result = streamText({
      model: openRouter('google/gemini-3.1-flash-lite'),
      prompt, 
      maxRetries: 10,
      maxOutputTokens: 2500,
      instructions:' Eres un bartender con mas de 50 años de experiencia '
      
    })

    // Retorna el stream directamente sin intentar hacerle console.log antes de tiempo
    return result.textStream
  }
}