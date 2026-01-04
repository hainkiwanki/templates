import { APP_VERSION } from './version.mjs';

export function getHtml(port: number, requestCount: number): string {
    return `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Binki API</title>
    <style>
        body {
            font-family: system-ui, sans-serif;
            background: #0f172a;
            color: #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .card {
            background: #020617;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,.5);
        }
        h1 { margin-top: 0; }
        span { color: #38bdf8; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Binki API</h1>
        <p>Version: <span>${APP_VERSION}</span></p>
        <p>Port: <span>${port}</span></p>
        <p>Requests: <span>${requestCount}</span></p>
    </div>
</body>
</html>
`;
}
