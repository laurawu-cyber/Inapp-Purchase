import { useEffect } from "react";
import { useNavigate } from "react-router";

const plaudLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91 15' width='91' height='15'%3E%3Ctext x='0' y='12' font-family='Arial,sans-serif' font-weight='700' font-size='13' letter-spacing='2' fill='%23000000'%3EPLAUD%3C/text%3E%3C/svg%3E";

type WorkspaceEntry = { name: string; createdAt: string; type?: 'team' | 'personal' };

function readTeamWorkspaces(): WorkspaceEntry[] {
  const raw = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
  return raw.map((item: any) =>
    typeof item === 'string' ? { name: item, createdAt: '', type: 'team' as const } : { ...item, type: 'team' as const }
  );
}

// Build the full account-level workspace list: personal always first, then team workspaces
function readAllWorkspaces(): WorkspaceEntry[] {
  const personal: WorkspaceEntry = { name: 'Personal workspace', createdAt: '', type: 'personal' };
  const team = readTeamWorkspaces();
  return [personal, ...team];
}

export default function ChooseWorkspacePage() {
  const navigate = useNavigate();
  const workspaces = readAllWorkspaces();

  useEffect(() => {
    if (workspaces.length === 1) {
      // Only personal workspace left — go there directly
      navigate('/');
    }
  }, []);

  const handleSelect = (ws: WorkspaceEntry) => {
    if (ws.type === 'personal') {
      navigate('/');
    } else {
      localStorage.setItem('workspaceName', ws.name);
      navigate(`/home-team?workspaceName=${encodeURIComponent(ws.name)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col font-['Inter',sans-serif]">

      {/* Logo */}
      <div className="px-[8px] py-[9px] flex items-center h-[48px]">
        <div className="h-[14px] relative" style={{ width: 83.473 }}>
          <img alt="Plaud" src={plaudLogo} className="absolute block max-w-none size-full object-contain object-left" />
        </div>
      </div>

      {/* Centered form */}
      <div className="flex-1 flex items-start justify-center pt-[32px]">
        <div className="flex flex-col gap-[48px] items-start w-[464px]">

          {/* Title */}
          <div className="w-full text-center">
            <p className="font-['Inter:Light',sans-serif] font-light text-[32px] leading-[44px] text-black">
              Choose a workspace
            </p>
          </div>

          {/* Workspace cards */}
          <div className="flex flex-col gap-[24px] w-full">
            {workspaces.map((ws) => (
              <div
                key={ws.type === 'personal' ? '__personal__' : ws.name}
                onClick={() => handleSelect(ws)}
                className="bg-white border border-[#ccc] rounded-[5px] h-[110px] p-[16px] flex flex-col justify-between cursor-pointer hover:border-black hover:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.08)] transition-all"
              >
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-[#3d3d3d]">
                  {ws.type === 'personal' ? 'Personal workspace' : ws.name}
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#757575]">
                  {ws.type === 'personal' ? 'Personal workspace' : ws.createdAt ? `Created on ${ws.createdAt}` : ''}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
