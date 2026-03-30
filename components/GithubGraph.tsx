"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  return (
    <div>
      <h2>GitHub Contributions</h2>
      <GitHubCalendar username="0913Anand" />
    </div>
  );
}