import Link from "next/link";
const notFound=()=>{
   return( <div className="not-found">
<h1>oops...</h1>
<h2>that page cannot be found</h2>
<p>go back to the <Link href="/">Homepage</Link></p>
    </div>)
}
export default notFound