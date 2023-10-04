import { FC, PropsWithChildren, useEffect, useMemo, useReducer, useState } from 'react'
import { MqttContext } from './'
import Paho from "paho-mqtt";

const clientId = Math.random()
    .toString(36)
    .substr(2);

const client = new Paho.Client(
    "test.mosquitto.org",
    Number(8081),
    `mqtt-async-${clientId}`
);

export const MqttProvider:FC<PropsWithChildren> = ({ children }) => {
    const [weight, setWeight] = useState('0')
    const [movement, setMovement] = useState('0')
    const [hopperWeight, setHopperWeight] = useState('0')

    const topic_1 = "pesoBalanza";
    const topic_2 = "movimiento";
    const topic_3 = "estadoTolva";
    const topic_4 = "abrirServo";
    const topic_5 = "pesoPorcion";
    const topic_6 = "proximaComida";

    useMemo(() => {
        try {
            client.connect( {
                onSuccess: () => { 
                    console.log("Conectado");
                    client.subscribe = onSubscribe;
                    client.onMessageArrived = receiveMessage;
                },
                onFailure: () => {
                    console.error("Fallo la conexión"); 
                }
            });
        } catch (error) {
            console.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubscribe = () => {
        client.subscribe(topic_1);
        client.subscribe(topic_2);
        client.subscribe(topic_3);
        client.subscribe(topic_4);
        client.subscribe(topic_5);
        client.subscribe(topic_6);
    }

    const receiveMessage = (newMessage: { destinationName: string; payloadString: string; }) =>{
        console.log(newMessage.payloadString);
        switch (newMessage.destinationName) {
            case 'pesoBalanza':
                setWeight(newMessage.payloadString)
                break;
            case 'estadoTolva':
                setHopperWeight(newMessage.payloadString)
                break;
            case 'movimiento':
                setMovement(newMessage.payloadString)
                break;
            default:
                break;
        }
    }

    const sendMessage = (topic: string, payload: string) => {
        const message = new Paho.Message(payload);
        message.destinationName = topic;
        message.retained = true
        try {
            client.send(message);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <MqttContext.Provider value={{
            weight,
            movement,
            hopperWeight,
            sendMessage,
        }}>
            {children}
        </MqttContext.Provider>
    )
}