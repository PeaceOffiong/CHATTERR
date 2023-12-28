import { NavbarVisibilityProps } from "@/types/shared";
import { SearchBar, Postsection } from "../componentsUserAcc";


const Body: React.FC<NavbarVisibilityProps> = ({
  showNavsection,
  setShowNavSection
}) => {
 
  return (
    <>   
      <div className="w-screen sm:w-10/12 md:w-4/5 shrink-0 relative overflow-x-hidden h-auto">
        <div className={`${showNavsection ? `hidden`: ``}  absolute bg-gray-700 h-screen inset-0 z-10 opacity-10 sm:hidden`}></div>
        <SearchBar setShowNavSection={setShowNavSection} showNavsection={ showNavsection} />
        <div className="flex justify-center">
          <div className="w-11/12 border-2 rounded mt-4 h-fit flex justify-center items-center">
            <Postsection />
          </div>
        </div>
      </div>
    </>

  )
}

export default Body
