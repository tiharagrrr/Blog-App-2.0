import {allBlogs} from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPosts from '../components/Home/FeaturedPosts'
import RecentPosts from '../components/Home/RecentPosts'

export default function Home() {
    return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen items-center p-24">
      <div className=''>
        <HomeCoverSection blogs={allBlogs}/>
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </div>
     

    </main>
  )
}
