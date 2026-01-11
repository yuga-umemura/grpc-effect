import { Server, ServerCredentials } from "@grpc/grpc-js";
import { GreeterService } from "./gen/hello";
import { sayHello } from "./sayHello";

const port = process.env.PORT ?? 50051;

function getServer() {
  const server = new Server();

  server.addService(GreeterService, { sayHello });

  return server;
}

function startServer() {
  const server = getServer();

  server.bindAsync(
    `0.0.0.0:${port}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`Server started and listening on ${port}`);
    }
  );
}
startServer();
