# Notifications über GRPC nachrüsten
Mit dieser AtlasEngine-Extension werden Notifications über GRPC ausgeliefert. Das ist ein PoC.

## Motivation
Non-JS Clients können socket.io nicht benutzen und müssen auf die Long-Polling-Variante ausweichen. Durch die Lücke zwischen Event und neuem Abonnement werden Events verpasst - gerade bei hoher Frequenz. Es gab bereits Überlegungen hierzu: Rohe Websockets oder GRPC.

## Wie geht das?
Der Server startet eine Engine-Instanz mit der Extension.

```sh
npm install
npm run-script build
npm run-script start
```

Irgendwo in den Logs steht dann auch:
> gRPC listening on 50051

Der Client wird gestartet mit:
```sh
dotnet-client/dotnet run
```

Beispielhaft ist nur das Event `OnFlowNodeSuspended` implementiert: . Für einen Test muss das Diagramm `notificationtest.bpmn` deployed und mit laufendem Server und Client eine Instanz gestartet werden.

## Zukunftsmusik
GRPC nutzt einen Contract-First-Ansatz. Im Gegensatz zu OpenApi (Swagger) muss die Beschreibung zwar händisch geschehen, aber kann nicht zum Code divergieren, da dieser aus der Beschreibung generiert wird. Das ermöglicht es auch, Client-Code generieren zu lassen. Eine Ausweitung auf den Rest der API macht Sinn.