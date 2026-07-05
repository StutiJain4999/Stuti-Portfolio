import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// In-memory cache variables
let cachedData: any = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

async function fetchStats() {
  const result: any = {
    github: null,
    leetcode: null,
    gfg: null,
    updatedAt: new Date().toISOString()
  };

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  };

  // 1. GitHub API Fetch
  try {
    const profileRes = await fetch("https://api.github.com/users/StutiJain4999", { headers });
    const profile = await profileRes.json();

    const reposRes = await fetch("https://api.github.com/users/StutiJain4999/repos?sort=updated&per_page=10", { headers });
    const repos = await reposRes.json();

    const eventsRes = await fetch("https://api.github.com/users/StutiJain4999/events?per_page=10", { headers });
    const events = await eventsRes.json();

    result.github = {
      followers: profile.followers || 0,
      following: profile.following || 0,
      publicRepos: profile.public_repos || 0,
      pinnedRepos: Array.isArray(repos) ? repos.map((r: any) => ({
        name: r.name,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        description: r.description,
        url: r.html_url
      })) : [],
      recentActivity: Array.isArray(events) ? events.slice(0, 5).map((e: any) => ({
        type: e.type,
        repo: e.repo.name,
        date: e.created_at
      })) : []
    };
  } catch (e: any) {
    console.error("GitHub API fetch error:", e.message);
  }

  // 2. LeetCode GraphQL Fetch
  try {
    const query = `
    query userProblemsSolved($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        badges {
          name
          icon
        }
        userCalendar {
          streak
        }
      }
      userContestRanking(username: $username) {
        rating
        globalRanking
      }
    }
    `;
    const leetRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ query, variables: { username: "12408204" } })
    });
    const parsed = await leetRes.json();

    if (parsed.data) {
      const matched = parsed.data.matchedUser;
      const ranking = parsed.data.userContestRanking;
      const stats = matched ? matched.submitStatsGlobal.acSubmissionNum : [];
      const getDifficultyCount = (diff: string) => {
        const item = stats.find((s: any) => s.difficulty === diff);
        return item ? item.count : 0;
      };

      result.leetcode = {
        solvedAll: getDifficultyCount("All"),
        solvedEasy: getDifficultyCount("Easy"),
        solvedMedium: getDifficultyCount("Medium"),
        solvedHard: getDifficultyCount("Hard"),
        streak: matched && matched.userCalendar ? matched.userCalendar.streak : 0,
        badges: matched ? matched.badges : [],
        contestRating: ranking ? Math.round(ranking.rating) : null
      };
    }
  } catch (e: any) {
    console.error("LeetCode GraphQL fetch error:", e.message);
  }

  // 3. GeeksforGeeks Scrape Fetch
  try {
    const gfgRes = await fetch("https://www.geeksforgeeks.org/profile/stutijanzm9", { headers });
    const html = await gfgRes.text();

    const regexScore = /\\?"score\\?":\s*(\d+)/i;
    const regexSolved = /\\?"total_problems_solved\\?":\s*(\d+)/i;
    const regexRank = /\\?"institute_rank\\?":\s*(\d+)/i;

    const scoreMatch = html.match(regexScore);
    const solvedMatch = html.match(regexSolved);
    const rankMatch = html.match(regexRank);

    result.gfg = {
      score: scoreMatch ? parseInt(scoreMatch[1], 10) : 0,
      solved: solvedMatch ? parseInt(solvedMatch[1], 10) : 0,
      rank: rankMatch ? parseInt(rankMatch[1], 10) : null
    };
  } catch (e: any) {
    console.error("GFG profile scrape error:", e.message);
  }

  return result;
}

export async function GET() {
  const now = Date.now();
  if (!cachedData || now - lastFetchTime > CACHE_DURATION) {
    try {
      cachedData = await fetchStats();
      lastFetchTime = now;
    } catch (e) {
      // If error occurs, return fallback or cached data if available
      if (!cachedData) {
        return NextResponse.json({ error: "Failed to fetch statistics" }, { status: 500 });
      }
    }
  }

  return NextResponse.json(cachedData);
}
