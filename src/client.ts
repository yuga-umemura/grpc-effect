import { credentials } from "@grpc/grpc-js";
import { GreeterClient, HelloRequest } from "./gen/hello";

const client = new GreeterClient(
  "localhost:50051",
  credentials.createInsecure() // 認証方法
);

const req: HelloRequest = { name: "taro yamada" };

client.sayHello(req, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Greeting: ${res.message}`);
});
