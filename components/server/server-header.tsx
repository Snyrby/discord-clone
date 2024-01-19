"use client"

import { ServerWithMembersWithProfiles } from "@/types"
import { MemberRole } from "@prisma/client"

type ServerHeaderProps = {
    server: ServerWithMembersWithProfiles
    role?: MemberRole;
}

export const ServerHeader = ({server, role}: ServerHeaderProps) => {
  return (
    <div>ServerHeader</div>
  )
}