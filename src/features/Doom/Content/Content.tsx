export function Content() {
  const content = () => {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        distinctio. Necessitatibus non vitae pariatur optio velit corrupti
        consectetur minima officiis. Voluptatibus obcaecati cupiditate
        recusandae quas commodi illo deleniti labore saepe?
      </div>
    );
  };

  return {
    title: "Doom",
    headerTitle: "Doom is running",
    icon: "doom",
    content,
  };
}
