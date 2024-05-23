const HomePage = () => {
  return (
    <div className="w-screen h-screen flex items-center" >
      <div className="w-11/12 mx-auto py-12">
        <div className="border border-[#4E5B52]">
          <div className="grid grid-cols-12 px-4 gap-4">
            <div className="col-span-3">
              <div className="bg-primary py-1 px-4 text-center  my-4 text-sm ">
                JOHN VEDASTUS CHUMA
              </div>
              <div className="my-4">
                <div className=" border border-primary mt-2  pt-4 ">
                  <img className="px-4" src="/profile.png" />
                  <div className="mt-4 mb-7 mx-4 text-white text-center text-sm">
                    <h1 className="">
                      TANZANIAN
                    </h1>
                    <h1 className="">
                      5 YEARS EXPERIENCE
                    </h1>
                    <h1 className="">
                      JOHNVCHUMA@GMAIL.COM
                    </h1>
                  </div>
                  <div className="bg-primary py-1 px-4 text-center  ">
                    FULL STACK DEVELOPER
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="bg-primary py-1 px-4 text-start  my-4 text-sm ">
                CURRICULUM VITAE
              </div>
              <div className="border border-[#808D84] p-4 text-white uppercase text-sm space-y-2">
                {[
                  { title: "Biography", content: <div></div> },
                  { title: "Work experience", content: <div></div> },
                  { title: "My Works", content: <div></div> },
                  { title: "Education background", content: <div></div> },
                  { title: "Referees", content: <div></div> },
                  
                ].map((item) => {
                  return (
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h1>{item.title}</h1>
                    </div>
                  );
                })}
              </div>
              <div className="border border-[#808D84] p-4 mt-4 text-white uppercase text-sm space-y-2">
                <div className="flex flex-wrap ">
                  {[
                    "React",
                    "Next JS",
                    "Angular",
                    "Javascript",
                    "Typscript",
                    "Tailwind CSS",
                    "Node JS",
                    "Express",
                    "Sequelize",
                  ].map((item) => {
                    return (
                      <div className="me-2 mb-2 border border-primary p-2 text-xs">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="border border-[#808D84] p-4 mt-4 text-white uppercase text-sm space-y-2">
              <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h1>LANGUAGES</h1>
                    </div>
                    <div className="flex items-center pl-5 space-x-2">
                        <h1>ENGLISH</h1>
                        <div className="py-1 w-full border-[#808D84] m-2 bg-[#275238]"/>
                    </div>
                    <div className="flex items-center pl-5 space-x-2">
                        <h1>swahili</h1>
                        <div className="py-1 w-full border-[#808D84] m-2 bg-[#275238]"/>  
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
