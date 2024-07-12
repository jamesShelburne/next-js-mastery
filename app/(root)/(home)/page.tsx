import { UserButton } from "@clerk/nextjs";
import {useTheme} from '@/context/ThemeProvider'
import React from "react";

export default function Home() {
  const {mode} = useTheme();
  return (
    <div>
      <h1>Home</h1>
      {mode}
      <UserButton afterSignOutUrl= "/"/>
    </div>
  );
}
