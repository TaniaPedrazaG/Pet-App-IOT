import { createContext } from 'react';

interface ContextProps {
    weight: string
    movement: string
    hopperWeight: string
    sendMessage: (topic: string, payload: string) => void
}

export const MqttContext = createContext({} as ContextProps)