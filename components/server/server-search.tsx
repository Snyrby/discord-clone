"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command";

type ServerSearchProps = {
  data: {
    label: string;
    type: "channel" | "member";
    data:
      | {
          icon: React.ReactNode;
          name: string;
          id: string;
        }[]
      | undefined;
  }[];
};

export const ServerSearch = ({ data }: ServerSearchProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return "";
  }
  const isMac =
    typeof window !== "undefined"
      ? navigator.userAgent.toUpperCase().indexOf("MAC") >= 0
      : false;
  const isWindows =
    typeof window !== "undefined"
      ? navigator.userAgent.toUpperCase().indexOf("WIN") >= 0
      : false;
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full 
          hover:bg-z/10 dark:hover:bg-zinc-700/50 transition"
      >
        <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        <p
          className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 
            group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition"
        >
          Search
        </p>
        {!isWindows ||
          (!isMac && (
            <kbd
              className="pointer-events-none inline-flex h-5 select-none items-center 
            gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto"
            >
              <span className="text-xs">
                {isMac ? "⌘" : isWindows && "ctrl"}
              </span>
              K
            </kbd>
          ))}
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Seach all channels and members" />
          <CommandList>
            <CommandEmpty>
              No Results Found
            </CommandEmpty>
          </CommandList>
      </CommandDialog>
    </>
  );
};
