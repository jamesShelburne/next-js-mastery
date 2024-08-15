import Link from "next/link";
import { Button } from '@/components/ui/button';
import LocalSearchbar from "@/components/shared/navbar/search/LocalSearchbar";
import Filter from "@/components/shared/Filter"
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";


const questions = [

  {_id: 1, 
    title: "Cascading Delets in SQLAlechmy", 
    tags : [{_id: 1, name: "python"}, {_id: 2, name: "sql"}], 
    author: "John Doe",
    upvotes: 10,
    views: 100,
    answers : 5,
    createdAt: "2021-09-01T00:00:00.000Z"
},
{_id: 2, 
  title: "How to Center a div in CSS", 
  tags : [{_id: 1, name: "css"}, {_id: 2, name: "sql"}], 
  author: "John Doe",
  upvotes: 10,
  views: 100,
  answers : 5,
  createdAt: "2021-09-01T00:00:00.000Z"
},
]

export default function Home() {
  return (
    <>
      <div className = "flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
        <Link href = "/ask-question" className = "max-sm: flex w-full justify-end">
            <Button className = "primary-gradient !text-light-900 min-h-[46px] px-4 py-3">Ask a Question</Button>

        </Link>

      </div>
      <div className = "mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar 
        route = "/" 
        iconPosition = "left"
        imgSrc= "/assets/icons/search.svg"
        placeholder = "Search for questions..."
        otherClasses = "flex-1"

        />
          <Filter
          filters = {HomePageFilters}
          otherClasses = "min-h-[56px] sm:min-w-[170px]"
          containerClasses = "hidden max-md:flex"
          
          />

      </div>
      <HomeFilters />
      <div className = "mt-10 flex w-full flex-col gap-6">
          {questions.length > 0 ? 
          questions.map((question) => (
            "QuestionCard"

          ))  : <NoResult />}
      </div>
     
    </>
  );
}