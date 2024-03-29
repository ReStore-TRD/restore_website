import { cache } from "react";

// Expanding the PerformRequestParams type to include new parameters
type PerformRequestParams = {
  query: string;
  variables?: Record<string, any>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string;
  revalidate?: number;
};

const dedupedFetch = cache(async (serializedInit: string) => {
  const response = await fetch(
    "https://graphql.datocms.com/",
    JSON.parse(serializedInit)
  );

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  return responseBody;
});

export async function performRequest({
  query,
  excludeInvalid = false,
  revalidate,
}: PerformRequestParams) {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        ...(excludeInvalid ? { "X-Exclude-Invalid": "true" } : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { "X-Environment": process.env.NEXT_DATOCMS_ENVIRONMENT }
          : {}),
      },
      body: JSON.stringify({ query, revalidate }),
      next: { revalidate },
    })
  );

  return data;
}
