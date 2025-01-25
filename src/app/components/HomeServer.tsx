// This is a server component
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HomeClient from "./HomeClient"; // The client component

export default async function HomeServer() {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.get("hasVisited");

  // If the user has not visited, redirect to "/welcome"
  if (!hasVisited) {
    redirect("/welcome");
  }

  // If the user has visited, render the client-side component
  return <HomeClient />;
}
