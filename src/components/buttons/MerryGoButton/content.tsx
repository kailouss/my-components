const Content = () => {
  const contentList = [
    { id: "content1", title: "Title 1", description: "Description 1" },
    { id: "content2", title: "Title 2", description: "Description 2" },
    { id: "content3", title: "Title 3", description: "Description 3" },
    { id: "content4", title: "Title 4", description: "Description 4" },
    { id: "content5", title: "Title 5", description: "Description 5" },
    { id: "content6", title: "Title 6", description: "Description 6" },
    { id: "content7", title: "Title 7", description: "Description 7" },
    { id: "content8", title: "Title 8", description: "Description 8" },
  ];
  return (
    <div className="absolute w-full h-full text-black">
      {contentList.map((content) => (
        <div key={content.id} className="content-card">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
