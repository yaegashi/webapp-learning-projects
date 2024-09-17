

import React from 'react';
import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const headers: { [key: string]: string } = {};
  request.headers.forEach((val, key) => {
    headers[key] = val;
  });
  return json(headers);
};

export default function Debug() {
  const headers = useLoaderData<typeof loader>();
  return (
    <pre style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}>
      {Object.entries(headers).map(([key, val]) => (
        <React.Fragment key={key}>
          <strong>{key}:</strong> {val}{'\n'}
        </React.Fragment>
      ))}
    </pre>
  );
}