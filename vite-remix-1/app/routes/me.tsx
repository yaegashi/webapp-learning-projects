import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTokenAadAccessToken } from "~/utils/azure-easy-auth";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = getTokenAadAccessToken(request);
  if (!token) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const res = await fetch('https://graph.microsoft.com/v1.0/me', { headers: { Authorization: `Bearer ${token}` } });
  return json(await res.json(), { status: res.status });
}

export const meta: MetaFunction = () => {
  return [
    { title: "Debug App" },
    { name: "description", content: "Debug App" },
  ];
};

export default function Index() {
  const a = useLoaderData<typeof loader>()
  return (
    <pre>{JSON.stringify(a, null, 2)}</pre>
  );
}