import React from 'react';
import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import { CodeBlock } from '~/components/app-parts';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const headers: { [key: string]: string } = {};
  request.headers.forEach((val, key) => {
    headers[key] = val;
  });
  return json(headers);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Sample App" },
    { name: "description", content: "Remix Sample App" },
  ];
};

export default function Debug() {
  const headers = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl py-4">HTTP Request Headers</h1>
      <CodeBlock>
        {Object.entries(headers).map(([key, val]) => (
          <React.Fragment key={key}>
            <strong>{key}:</strong> {val}{'\n'}
          </React.Fragment>
        ))}
      </CodeBlock>
    </div>
  );
}