import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = ()=>{
    return  <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className="max-w-xl">
        <BlogCard
            authorName={"aarkirat"}
            title={"title of the blog"}
            content={"content of the blog"}
            publishedDate={"2nd Feb 2024"}
            id={12}
        />
        <BlogCard
            authorName={"arkirat"}
            title={"title of the blog"}
            content={"content of the blog"}
            publishedDate={"2nd Feb 2024"}
            id={12}
        />
        
    </div>
    </div> 
    </div>  
}