import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CodeBlock } from "~/components/app-parts";
import { getTokenAadAccessToken } from "~/utils/azure-easy-auth";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = getTokenAadAccessToken(request);
  if (!token) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }
  const res = await fetch('https://graph.microsoft.com/v1.0/me', { headers: { Authorization: `Bearer ${token}` } });
  return json(await res.json(), { status: res.status });
}

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Sample App" },
    { name: "description", content: "Remix Sample App" },
  ];
};

export default function Index() {
  const a = useLoaderData<typeof loader>()
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl py-4">Microsoft Graph: /me</h1>
      <CodeBlock>
        {JSON.stringify(a, null, 2)}
      </CodeBlock>
    </div>
  );
}