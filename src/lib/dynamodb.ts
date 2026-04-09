import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.REGION!,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

export const docClient = DynamoDBDocumentClient.from(client);
export const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME!;
