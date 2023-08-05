import { SearchBar, Foryou, Featured, Postsection } from "../componentsUserAcc";


const Body = () => {
  return (
    <div className=" w-full sm:w-4/5 md:w-4/5">
      <SearchBar />
      <div className="flex justify-center">
        <div className="w-11/12 border-2 rounded mt-4 h-fit flex justify-center items-center">
          <Postsection />
        </div>
      </div>
    </div>
  )
}

export default Body