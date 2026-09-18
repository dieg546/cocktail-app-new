import type { StateCreator } from "zustand";

type Notification={

    text: string
    error: boolean
    show: boolean

}

export type NotificationStateType={
     
    notification: Notification
    showOnNotification: (notification: Notification)=> void
    displayNotificacion: (notification: Notification)=> void
    timeoutNotification: () => void

}

export const notificationSlice : StateCreator<NotificationStateType> = (set, get)=>({

    notification: {
        text:'Texto Notificacion',
        error: false,
        show: false
    },

    showOnNotification: (notification)=>{

        set({})

    },

    displayNotificacion: (notification)=>{

        set({
            notification: notification
        })

        get().timeoutNotification()

    },

    timeoutNotification:()=>{

        setInterval(()=>{

            set({
                notification:{
                    ...get().notification,
                    show: false
                }
            })

        },5000)

    }

})