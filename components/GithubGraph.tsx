"use client"

import GitHubCalendar from "react-github-calendar"

export default function GithubGraph(){

return(

<section className="py-20 text-center">

<h2 className="text-3xl font-bold mb-8">

GitHub Activity

</h2>

<GitHubCalendar username="YOUR_GITHUB_USERNAME" />

</section>

)

}