---
id: uart
title: UART
sidebar_label: UART
---

*Escrito por Fábio Procaci*

## O que é o protocolo UART?

Universal asynchronous receiver-transmitter (UART) É um dispositivo de hardware para comunicação serial assíncrona em que o formato dos dados e as velocidades de transmissão são configuráveis. Ele envia os bits de dados um a um, do menos significativo ao mais significativo, definidos por bits de início e parada para que o tempo preciso seja controlado pelo canal de comunicação.


## Como funciona:

No protocolo UART (Universal Asynchronous Receiver/Transmitter) a comunicação é assíncrona, sem qualquer sinal de relógio. Os bits são enviados/recebidos a uma dada cadência acordada entre emissor e receptor a que se chama baudrate (medida em bits por segundo).

Os bits circulam por duas linhas (TX e RX, respetivamente de transmissão e recepção) o que permite uma comunicação simultânea nos dois sentidos

O UART geralmente não gera ou recebe diretamente os sinais externos usados entre diferentes itens de equipamento. Dispositivos de interface separados são usados para converter os sinais de nível lógico do UART de e para os níveis de sinalização externa, que podem ser níveis de tensão padronizados, níveis de corrente ou outros sinais.

A comunicação pode ser simplex (em uma direção apenas, sem provisão para o dispositivo receptor enviar informações de volta ao dispositivo transmissor), full duplex (ambos os dispositivos enviam e recebem ao mesmo tempo) ou half duplex (os dispositivos se revezam para transmitir e receber)

Na ausência de dados (Bus Idle) estas duas linhas apresentam o nível lógico 1. Os bits de dados são antecedidos por um Start Bit ao nível lógico 0, e terminados por um ou mais Stop Bits ao nível lógico 1. Os bits de dados (em geral 8) são enviados do menos para o mais significativo. Antes do envio dos Stop Bits (usualmente um) pode ainda ser enviado um bit de paridade: par (Even) ou ímpar (Odd), destinado à detecção de eventuais erros na comunicação.


## O que usa este protocolo?

É um protocolo utilizado por muitos microcontroladores, pois é responsável pela conversão da comunicação paralela em serial, que na maioria das vezes é convertida em outro protocolo como por exemplo o controlador da placa Blackboard ou Arduino Uno, que utiliza o protocolo UART mas tem o protocolo convertido para USB.
