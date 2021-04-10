import Link from "next/link";
import { useEffect } from "react";
import { useRouter} from "next/router";
const notFound = () => {
    const router=useRouter();
  useEffect(() => {
    setTimeout(() => {
        // router.go(-1)
        router.push("/")
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>oops...</h1>
      <h2>that page cannot be found</h2>
      <p>
        go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};
export default notFound;
