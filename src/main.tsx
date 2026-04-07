import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Demo pre-configuration — runs once per browser session.
// Seeds localStorage with a pre-built workspace so the demo always starts
// on the team workspace homepage with the correct members and billing data.
// Clear old session key so re-seeding picks up the updated price
sessionStorage.removeItem('session_initialized');

if (!sessionStorage.getItem('session_initialized_v3')) {
  sessionStorage.setItem('session_initialized_v3', 'true');

  const WS = 'Plaud Team';

  // Workspace registry (shows in sidebar switcher alongside Personal workspace)
  localStorage.setItem('teamWorkspaces', JSON.stringify([{ name: WS, createdAt: 'Jan 1, 2025' }]));
  localStorage.setItem('workspaceName', WS);

  // Billing / plan
  localStorage.setItem(`ws:${WS}:seats`, '10');
  localStorage.setItem(`ws:${WS}:plan`, 'team');
  localStorage.setItem(`ws:${WS}:billing`, 'annual');
  localStorage.setItem(`ws:${WS}:planName`, 'Team Plan');
  localStorage.setItem(`ws:${WS}:price`, '20');

  // Pre-existing active members (4 others + current user = 5 active total)
  // Names use English transliteration of Japanese names
  const activeMembers = [
    { email: 'yuki@plaud.ai',    name: 'Yuki Tanaka',     role: 'Admin'  },
    { email: 'kenji@plaud.ai',   name: 'Kenji Watanabe',  role: 'Member' },
    { email: 'hana@plaud.ai',    name: 'Hana Yamamoto',   role: 'Member' },
    { email: 'takeshi@plaud.ai', name: 'Takeshi Nakamura',role: 'Member' },
  ];
  localStorage.setItem(`ws:${WS}:activeMembers`, JSON.stringify(activeMembers));

  // No pending invites initially
  localStorage.setItem(`ws:${WS}:members`, JSON.stringify([]));
}

createRoot(document.getElementById("root")!).render(<App />);
