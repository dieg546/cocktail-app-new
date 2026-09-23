import type {StateCreator} from 'zustand'
import AiService from '../services/AiService'

export type GenerativeAISliceType={

    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const GenerativeAI : StateCreator<

    GenerativeAISliceType, 
    [], 
    [], 
    GenerativeAISliceType

> = (set, get)=>({

    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt: string) => {

        set({

            recipe: '',
            isGenerating: true

        })

        try {
            const textStream = AiService.generateRecipe(prompt)

            for await (const chunk of textStream) {
                
                set({

                    recipe: get().recipe + chunk

                })

            }

            set({
                isGenerating: false
            })

        } catch (error: any) {
            // Si la llamada fue abortada por React DevTools o StrictMode, no hacemos nada
            if (
            error?.name === 'AbortError' || 
            error?.message?.includes('aborted') || 
            error?.cause?.name === 'AbortError'
            ) {
            console.warn('Conexión abortada por el ciclo de vida de React (StrictMode/DevTools).')
            return
            }

            console.error('Error real en la llamada:', error)
        }
    }

})