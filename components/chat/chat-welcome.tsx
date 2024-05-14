import { Hash } from "lucide-react";

type ChatWelcomeProps = {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 mx-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-start justify-center">
          <Hash />
        </div>
      )}
    </div>
  );
};
