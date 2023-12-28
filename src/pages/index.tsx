import { LandingPage } from "../components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function IndexPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const route = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("token");

    if (storedUser) {
      setIsUserLoggedIn(true);
    }
  })
 
  const routeToHome = () => {
    route.push('/Dashboard')
  }
  return isUserLoggedIn ? routeToHome()  : <LandingPage />
}
