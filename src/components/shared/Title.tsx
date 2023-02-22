function Title(props: { title: string }) {
  return (
    <>
      <h2 className="text-titleColor text-3xl font-bold text-center mb-3">
        {props.title}
      </h2>
    </>
  );
}

export default Title;
