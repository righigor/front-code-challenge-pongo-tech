import { Share2 } from "lucide-react";
import { FormType } from "../types/form";

type SessionsPageProps = {
  sessions: FormType[];
};

function SessionsPage({ sessions }: SessionsPageProps) {
  const handleShare = (sessionId: string) => {
    const shareUrl = `${window.location.origin}/session/${sessionId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copiado para a área de transferência!");
    });
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
        All Game Sessions
      </h1>
      <div className="bg-gray-200 p-4 rounded-md shadow-md w-full">
        <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 font-semibold">
          <span>Hostname</span>
          <span>Players</span>
          <span>Map</span>
          <span>Mode</span>
          <span className="text-right">Share</span>
        </div>
        <div className="mt-2">
          {sessions.map((session) => (
            <div
              key={session.hostname}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 py-2 border-b border-gray-300 text-center md:text-left"
            >
              <span className="font-semibold md:hidden">Hostname:</span>
              <span>{session.hostname}</span>
              <span className="font-semibold md:hidden">Players:</span>
              <span>{session.players}</span>
              <span className="font-semibold md:hidden">Map:</span>
              <span>{session.map}</span>
              <span className="font-semibold md:hidden">Mode:</span>
              <span>{session.mode}</span>
              <div className="flex justify-end items-center">
                <button
                  onClick={() => handleShare(session.hostname)}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SessionsPage;
