import React from "react";
import Navsection from "./Navsection";
import { useUserAuthContext } from '@/context/userAuthContext';

const NavLayout: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  const { showNavsection,
    setShowNavsection } = useUserAuthContext();
  return (
  <>
      <Navsection
        setShowNavSection={setShowNavsection} showNavsection={showNavsection}
      />
      {children}
  </>
)
}

export default NavLayout;