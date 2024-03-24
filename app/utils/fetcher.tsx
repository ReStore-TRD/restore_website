type PerformRequestParams = {
  query: string;
  variables?: Record<string, any>;
  includeDrafts?: boolean;
};

export const performRequest = async ({
  query,
  variables = {},
  includeDrafts = false,
}: PerformRequestParams): Promise<any> => {
  if (!process.env.NEXT_DATOCMS_API_TOKEN) {
    throw new Error(
      "NEXT_DATOCMS_API_TOKEN is not defined in environment variables."
    );
  }

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  return responseBody;
};
