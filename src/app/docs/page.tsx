import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - LemanLabs",
  description:
    "API documentation for Leman.zero. OpenAI-compatible chat completions API.",
};

const BASE_URL =
  "https://carloshurtadocomin--lemanlabs-openai-api-fastapi-app.modal.run";

function CodeBlock({
  children,
  title,
  language = "bash",
}: {
  children: string;
  title?: string;
  language?: string;
}) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-800">
      {title && (
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-4 text-sm text-gray-400">{title}</span>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
        <code className="text-gray-300">{children}</code>
      </pre>
    </div>
  );
}

function ParamRow({
  name,
  type,
  required,
  defaultVal,
  description,
}: {
  name: string;
  type: string;
  required?: boolean;
  defaultVal?: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="col-span-3 md:col-span-2">
        <code className="text-sm font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
          {name}
        </code>
      </div>
      <div className="col-span-9 md:col-span-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-gray-400 font-mono">{type}</span>
          {required ? (
            <span className="text-xs text-red-500 font-medium">required</span>
          ) : (
            <span className="text-xs text-gray-400">optional</span>
          )}
          {defaultVal && (
            <span className="text-xs text-gray-400">
              default: <code className="font-mono">{defaultVal}</code>
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function SidenavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block text-sm text-gray-500 hover:text-gray-900 transition-colors py-1.5"
    >
      {children}
    </a>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 warm-gradient-bg">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium mb-4 uppercase tracking-wider text-sm">
            Documentation
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-gray-900 mb-6 leading-[1.1]">
            Leman.zero{" "}
            <span className="gradient-text-warm">API Reference</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            OpenAI-compatible chat completions API. No API key required — just
            point your existing OpenAI SDK at our endpoint and start building.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-12">
            {/* Sidebar navigation */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                  On this page
                </p>
                <SidenavLink href="#quickstart">Quickstart</SidenavLink>
                <SidenavLink href="#base-url">Base URL</SidenavLink>
                <SidenavLink href="#models">List Models</SidenavLink>
                <SidenavLink href="#chat-completions">
                  Chat Completions
                </SidenavLink>
                <SidenavLink href="#health">Health Check</SidenavLink>
                <SidenavLink href="#errors">Errors</SidenavLink>
              </nav>
            </aside>

            {/* Content */}
            <div className="space-y-20">
              {/* Quickstart */}
              <section id="quickstart">
                <h2 className="font-serif text-3xl font-normal text-gray-900 mb-6">
                  Quickstart
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Leman.zero is fully compatible with the OpenAI SDK. Install it,
                  point it at our base URL, and make your first request in under
                  a minute. No API key needed.
                </p>

                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-700">
                    1. Install the OpenAI SDK
                  </p>
                  <CodeBlock title="terminal">
                    {`npm install openai`}
                  </CodeBlock>

                  <p className="text-sm font-medium text-gray-700 mt-6">
                    2. Make your first request
                  </p>
                  <CodeBlock title="example.ts" language="typescript">
                    {`import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: '${BASE_URL}/v1',
});

const response = await client.chat.completions.create({
  model: 'leman0-1.7b',
  messages: [
    { role: 'user', content: 'Hello!' }
  ],
});

console.log(response.choices[0].message.content);`}
                  </CodeBlock>

                  <p className="text-sm font-medium text-gray-700 mt-6">
                    Or use curl directly
                  </p>
                  <CodeBlock title="terminal">
                    {`curl -X POST ${BASE_URL}/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "leman0-1.7b",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`}
                  </CodeBlock>
                </div>
              </section>

              {/* Base URL */}
              <section id="base-url">
                <h2 className="font-serif text-3xl font-normal text-gray-900 mb-6">
                  Base URL
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  All API requests should be made to the following base URL. The
                  API is open — no authentication required.
                </p>
                <div className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-4">
                  <code className="text-sm font-mono text-gray-900 break-all">
                    {BASE_URL}/v1
                  </code>
                </div>
              </section>

              {/* List Models */}
              <section id="models">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md">
                    GET
                  </span>
                  <h2 className="font-serif text-3xl font-normal text-gray-900">
                    List Models
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Returns a list of available models. Currently serves{" "}
                  <code className="text-sm font-mono text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                    leman0-1.7b
                  </code>
                  .
                </p>

                <div className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-3 mb-6">
                  <code className="text-sm font-mono text-gray-700">
                    GET /v1/models
                  </code>
                </div>

                <p className="text-sm font-medium text-gray-700 mb-3">
                  Example request
                </p>
                <CodeBlock title="terminal">
                  {`curl ${BASE_URL}/v1/models`}
                </CodeBlock>

                <p className="text-sm font-medium text-gray-700 mt-6 mb-3">
                  Response
                </p>
                <CodeBlock title="response.json" language="json">
                  {`{
  "object": "list",
  "data": [
    {
      "id": "leman0-1.7b",
      "object": "model",
      "created": 1738965600,
      "owned_by": "lemanlabs"
    }
  ]
}`}
                </CodeBlock>
              </section>

              {/* Chat Completions */}
              <section id="chat-completions">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
                    POST
                  </span>
                  <h2 className="font-serif text-3xl font-normal text-gray-900">
                    Chat Completions
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Creates a chat completion. Send a list of messages and receive
                  a model-generated response. Works as a drop-in replacement for
                  the OpenAI chat completions endpoint.
                </p>

                <div className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-3 mb-8">
                  <code className="text-sm font-mono text-gray-700">
                    POST /v1/chat/completions
                  </code>
                </div>

                {/* Request Body */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Request body
                </h3>
                <div className="bg-white rounded-xl border border-gray-200 px-6 py-2 mb-8">
                  <ParamRow
                    name="messages"
                    type="array"
                    required
                    description="A list of messages comprising the conversation. Each message is an object with 'role' (string) and 'content' (string) fields. Roles can be 'system', 'user', or 'assistant'."
                  />
                  <ParamRow
                    name="model"
                    type="string"
                    defaultVal='"leman0-1.7b"'
                    description="The model to use. Currently only 'leman0-1.7b' is available."
                  />
                  <ParamRow
                    name="max_tokens"
                    type="integer"
                    defaultVal="128"
                    description="Maximum number of tokens to generate. Capped at 1024."
                  />
                  <ParamRow
                    name="temperature"
                    type="float"
                    defaultVal="0.7"
                    description="Sampling temperature between 0 and 2. Higher values make output more random, lower values more deterministic."
                  />
                  <ParamRow
                    name="top_p"
                    type="float"
                    defaultVal="0.95"
                    description="Nucleus sampling parameter. The model considers tokens with top_p cumulative probability mass."
                  />
                  <ParamRow
                    name="stream"
                    type="boolean"
                    defaultVal="false"
                    description="Whether to stream partial responses. Not yet supported — will return an error if set to true."
                  />
                </div>

                {/* Example */}
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Example request
                </p>
                <CodeBlock title="terminal">
                  {`curl -X POST ${BASE_URL}/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "leman0-1.7b",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What is linear attention?"}
    ],
    "max_tokens": 256,
    "temperature": 0.7
  }'`}
                </CodeBlock>

                <p className="text-sm font-medium text-gray-700 mt-6 mb-3">
                  Response
                </p>
                <CodeBlock title="response.json" language="json">
                  {`{
  "id": "chatcmpl-1738965600000",
  "object": "chat.completion",
  "created": 1738965600,
  "model": "leman0-1.7b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Linear attention is a mechanism that..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 42,
    "total_tokens": 66
  }
}`}
                </CodeBlock>

                {/* Python example */}
                <p className="text-sm font-medium text-gray-700 mt-6 mb-3">
                  Python example
                </p>
                <CodeBlock title="example.py" language="python">
                  {`from openai import OpenAI

client = OpenAI(
    base_url="${BASE_URL}/v1",
    api_key="unused",  # no key needed, but SDK requires a value
)

response = client.chat.completions.create(
    model="leman0-1.7b",
    messages=[
        {"role": "user", "content": "Explain linear attention in one sentence."}
    ],
    max_tokens=128,
)

print(response.choices[0].message.content)`}
                </CodeBlock>
              </section>

              {/* Health Check */}
              <section id="health">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md">
                    GET
                  </span>
                  <h2 className="font-serif text-3xl font-normal text-gray-900">
                    Health Check
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Simple health check endpoint to verify the API is running.
                </p>

                <div className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-3 mb-6">
                  <code className="text-sm font-mono text-gray-700">
                    GET /health
                  </code>
                </div>

                <CodeBlock title="terminal">
                  {`curl ${BASE_URL}/health`}
                </CodeBlock>

                <p className="text-sm font-medium text-gray-700 mt-6 mb-3">
                  Response
                </p>
                <CodeBlock title="response.json" language="json">
                  {`{"ok": true}`}
                </CodeBlock>
              </section>

              {/* Errors */}
              <section id="errors">
                <h2 className="font-serif text-3xl font-normal text-gray-900 mb-6">
                  Errors
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The API uses standard HTTP status codes. Errors are returned as
                  JSON with a{" "}
                  <code className="text-sm font-mono text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                    detail
                  </code>{" "}
                  field describing the issue.
                </p>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="col-span-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </div>
                    <div className="col-span-9 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </div>
                  </div>
                  {[
                    {
                      code: "200",
                      desc: "Success",
                    },
                    {
                      code: "400",
                      desc: "Bad request — e.g., stream=true is not yet supported.",
                    },
                    {
                      code: "422",
                      desc: "Validation error — missing or malformed request parameters.",
                    },
                    {
                      code: "500",
                      desc: "Internal server error — something went wrong on our end.",
                    },
                  ].map((row, i) => (
                    <div
                      key={row.code}
                      className={`grid grid-cols-12 gap-4 px-6 py-4 ${
                        i !== 3 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <div className="col-span-3">
                        <code className="text-sm font-mono font-medium text-gray-900">
                          {row.code}
                        </code>
                      </div>
                      <div className="col-span-9">
                        <p className="text-sm text-gray-600">{row.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
