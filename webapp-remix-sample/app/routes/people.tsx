import { Button, Input } from "@nextui-org/react";
import { json, ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { CodeBlock } from "~/components/app-parts";
import { getTokenAadAccessToken } from "~/utils/azure-easy-auth";

export const action = async ({ request }: ActionFunctionArgs) => {
  const token = getTokenAadAccessToken(request);
  if (!token) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }
  const formData = await request.formData();
  const search = String(formData.get("search"));
  const res = await fetch(`https://graph.microsoft.com/v1.0/me/people?$search=${search}`, { headers: { Authorization: `Bearer ${token}` } });
  return json(await res.json(), { status: res.status });
}

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Sample App" },
    { name: "description", content: "Remix Sample App" },
  ];
};

export default function Index() {
  const a = useActionData<typeof action>();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl py-4">Microsoft Graph: /me/people</h1>
      <div className="py-4">
        <Form method="post">
          <div className="flex w-full flex-wrap gap-4 items-center">
            <Input name="search" label="search" className="max-w-xs" />
            <Button type="submit" color="primary">Submit</Button>
          </div>
        </Form>
      </div>
      {a && <CodeBlock>{JSON.stringify(a, null, 2)}</CodeBlock>}
    </div>
  );
}