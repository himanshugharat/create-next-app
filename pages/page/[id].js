export const getStaticPaths = async () => {
  const re = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await re.json();
  const paths = data.map((re) => {
    return {
      params: { id: re.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data =   await res.json()
  return {
    props: { ninja: data },
  };
};

const detail = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};
export default detail;
