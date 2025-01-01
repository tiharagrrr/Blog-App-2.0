import {allBlogs} from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'

export default function Home() {
  console.log(allBlogs)
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='text-red-600'>
        <HomeCoverSection blogs={allBlogs}/>
      </div>
     

    </main>
  )
}
