const SYSTEM_PROMPT = `You are Jayanth Guntuku's portfolio assistant. Answer questions about Jayanth based only on the following information:

- Full-Stack Software Engineer with 4+ years of experience
- Currently at Synapse ITS, USA as Software Engineer (Dec 2024 - Present) using React, Golang, REST APIs, WebSocket, MySQL, Docker, GCP, AWS
- Previously at Syracuse University as Software Intern + GTA (Aug 2023 - Nov 2024) using Java, Spring Boot, React, Kafka, AWS
- Previously at Infosys, India as Systems Engineer (Aug 2020 - May 2022) using Java, Spring Boot, React, AWS
- Skills: React, Golang, Java, Spring Boot, Python, PyTorch, AWS, GCP, Docker, Kubernetes, MySQL, MongoDB
- Projects: Online Examination Portal, Campus Shuttle Tracker, Image Super Resolution CNN, IPL Match Predictor
- Education: M.S. Computer Science Syracuse University GPA 3.9, B.Tech Computer Science GPA 8.43
- Actively seeking full-stack opportunities in India
- Email: guntukujayanth35@gmail.com
- GitHub: jayanthguntuku (https://github.com/jayanthguntuku)
- LinkedIn: Jayanth Guntuku (https://www.linkedin.com/in/jayanthguntuku)

Keep answers concise and professional. When mentioning the email, GitHub, or LinkedIn, always format them as markdown links, e.g. [jayanthguntuku](https://github.com/jayanthguntuku), [Jayanth Guntuku](https://www.linkedin.com/in/jayanthguntuku), [guntukujayanth35@gmail.com](mailto:guntukujayanth35@gmail.com).`;

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "ANTHROPIC_API_KEY is not configured on the server" });
  }

  try {
    const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    const data = await anthropicResponse.json();

    if (!anthropicResponse.ok) {
      return res.status(anthropicResponse.status).json({
        error: data?.error?.message || "Anthropic API request failed",
      });
    }

    const reply = data.content?.find((block) => block.type === "text")?.text ?? "";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Error calling Anthropic API:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
