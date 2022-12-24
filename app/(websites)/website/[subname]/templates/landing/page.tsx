

export default function Landing() {
  const template = {
    title: "Amazon for landing Pages",
    backgroundPicture: "https://laknabil.me/background.png",
    profilePicture: "https://laknabil.me/nabil.png",
    type: "landing",
    sections: [
      {
        title: "Section 1",
        description: "Section 1 description here ",
        id: "section1",
        backgroundPicture: "https://laknabil.me/background.png",
      },
      {
        title: "Section 2",
        description: "Section 2 description here ",
        id: "section2",
        backgroundPicture: "https://laknabil.me/background.png",
      },
    ],
  };

  return (
    <div className="w-full min-h-screen">
      <img src={template.backgroundPicture} className="w-full h-72" />
      <div className="-mt-20 w-full max-w-2xl mx-auto">
        <div>
          <img
            src={template.profilePicture}
            className="w-40 shadow-md aspect-square rounded-md"
          />
        </div>

        <h1 className="text-3xl my-2 leading-relaxed font-medium text-gray-900">
          {template.title}
        </h1>
      </div>
      {template.sections.map((section, i) => (
        <div
          className={`mt-8  ${
            i % 2 == 1 ? "flex-row-reverse" : ""
          } w-full  flex items-start  max-w-2xl mx-auto `}
        >
          <div className="flex-1">
            <img
              src={section.backgroundPicture}
              className="flex-1 aspect-video"
            />
          </div>
          <div className="flex-1 px-4">
            <h2 className="text-2xl  leading-relaxed font-medium text-gray-900">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.description}</p>
          </div>

        </div>
      ))}

      <div className="mt-8 w-full max-w-2xl mx-auto text-center py-4">
        <button className="text-lg text-white rounded-md bg-slate-700 px-8 py-1">
          By Our Porduct
        </button>
        </div>
    </div>
  );
}
