import style from "../../styles/ninja.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const re = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await re.json();
  return {
    props: { ninja: data },
  };
};
const Tet = ({ ninja }) => {
  return (
    <div>
      <h1>Ninja</h1>
      {ninja.map((re) => {
        return (
          <Link href={'/page/'+re.id} key={re.id}>
            <a className={style.single}>
              <h3>{re.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default Tet;
