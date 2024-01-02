import React from 'react';
import NavLayout from '@/componentsUserAcc/NavLayout';
import { useUserAuthContext } from '@/context/userAuthContext';

const index : React.FC = () => {
  const { touchEnd,
    touchStart,
    touchMove, showNavsection,
    setShowNavsection } = useUserAuthContext();
  return (
    <section
      onTouchEnd={touchEnd}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      className={`h-full flex section-container overflow-x-hidden`}>
      <NavLayout>
        <div className="w-screen sm:w-10/12 md:w-4/5 shrink-0 relative overflow-x-hidden h-auto">
          <p>Team Blogs</p>
        </div>
      </NavLayout>
    </section>

  )
}

export default index