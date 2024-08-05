import { Link } from "react-router-dom"
import { Button } from "../Components/Button"
import { useEffect } from "react"

export const PageNotFound = () => {

  useEffect(()=> {
    document.title=`Page Not Found - IMovie`;
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-5xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <p className="text-6xl text-gray-700 font-bold my-10 dark:text-white">Page Not Found :(</p>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To IMovie</Button>
          </Link>
            
        </div>
      </section>
    </main>
  )
}
