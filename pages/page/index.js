import style from "../../styles/ninja.module.css";
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
          <div key={re.id}>
            <a className={style.single}>
              <h3>{re.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Tet;
