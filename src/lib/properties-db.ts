import {
  PutCommand,
  GetCommand,
  DeleteCommand,
  QueryCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "./dynamodb";
import { Property } from "@/data/properties";

export interface DBProperty extends Property {
  city: string;
  citySlug: string;
}

export async function getPropertiesByCity(city: string): Promise<Property[]> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "city = :city",
      ExpressionAttributeValues: { ":city": city },
    })
  );
  return (result.Items ?? []) as Property[];
}

export async function getPropertyBySlug(slug: string): Promise<DBProperty | null> {
  const result = await docClient.send(
    new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: "slug = :slug",
      ExpressionAttributeValues: { ":slug": slug },
    })
  );
  const item = result.Items?.[0];
  if (!item) return null;
  return item as DBProperty;
}

export async function getAllPropertiesFromDB(): Promise<DBProperty[]> {
  const cityMapping: Record<string, string> = {
    dubai: "Dubai",
    bali: "Bali",
    miami: "Miami",
    madrid: "Madrid",
    cdmx: "CDMX",
  };

  const result = await docClient.send(new ScanCommand({ TableName: TABLE_NAME }));
  return (result.Items ?? []).map((item) => ({
    ...item,
    city: cityMapping[item.city] ?? item.city,
    citySlug: item.city,
  })) as DBProperty[];
}

export async function createProperty(city: string, property: Property): Promise<void> {
  await docClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: { city, ...property },
    })
  );
}

export async function updateProperty(city: string, slug: string, property: Property): Promise<void> {
  // Delete old item (in case city or slug changed) then put new one
  await docClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: { city, ...property },
    })
  );
}

export async function deleteProperty(city: string, slug: string): Promise<void> {
  await docClient.send(
    new DeleteCommand({
      TableName: TABLE_NAME,
      Key: { city, slug },
    })
  );
}
