# Vault

## @baseline-protocol/messaging

Baseline core messaging package.

​[NATS](https://nats.io) is currently the default point-to-point messaging provider and the recommended way for organizations to exchange secure protocol messages. NATS was chosen due to its high-performance capabilities, community/enterprise footprint, interoperability with other systems and protocols (i.e. [Kafka](https://github.com/nats-io/nats-kafka) and MQTT) and its decentralized architecture.‌

## Installation <a href="installation" id="installation"></a>

`npm install @baseline-protocol/vault`_(npm package soon to be published)_

## Building <a href="building" id="building"></a>

You can build the package locally with `npm run build`.‌

## Interfaces <a href="interfaces" id="interfaces"></a>

**IMessagingService**

```
connect(): Promise<any>;
disconnect(): Promise<void>;
getSubscribedSubjects(): string[];
isConnected(): boolean;
publish(subject: string, payload: any, reply?: string, recipientId?: string, senderId?: string): Promise<void>;
request(subject: string, timeout: number, data?: any): Promise<any | void>;
subscribe(subject: string, callback?: (msg: any, err?: any) => void, myId?: string): Promise<any>;
unsubscribe(subject: string);
flush(): Promise<void>;
```

## Supported Providers & Protocols <a href="supported-providers-and-protocols" id="supported-providers-and-protocols"></a>

The following messaging providers are available:‌

* NATS
* Whisper
