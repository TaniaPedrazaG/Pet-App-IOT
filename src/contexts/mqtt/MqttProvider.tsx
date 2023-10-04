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
    const [reload, setReload] = useState(false)

    const onConnectionLost = (responseObject: { errorCode: number; errorMessage: string; }) => {
        if (responseObject.errorCode !== 0) {
            console.log("Connection Lost: " + responseObject.errorMessage);
            window.alert("Se ha perdido la conexión, refresque la página");
            setReload(true)
        }
    }

    const onReceiveMessage = (newMessage: { destinationName: string; payloadString: string; }) =>{
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

    useEffect(() => {
        try {
            client.onConnectionLost = onConnectionLost;
            client.onMessageArrived = onReceiveMessage;
        } catch (error) {
            console.error(error)
        }
    }, [])

    const onConnect = () => {
        client.subscribe('pesoBalanza');
        client.subscribe('movimiento');
        client.subscribe('estadoTolva');
        client.subscribe('abrirServo');
        client.subscribe('pesoPorcion');
        client.subscribe('proximaComida');
    }

    const onFail = () => {
        console.log("Failed to connect");
    }

    try {
        const options = {
            onSuccess: onConnect,
            onFailure: onFail,
            useSSL:true
        }
        client.connect(options)
    } catch (error) {
        console.error(error)
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