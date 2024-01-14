import DataCard from "@/components/data-card";

export default function AboutPage() {
  return (
    <main className="lg:px-50 flex h-screen w-screen overflow-scroll px-16 pt-24 md:px-40 xl:px-60 ">
      <div className="z-20 flex w-screen p-4 px-10">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            About
          </h1>

          <div className="flex flex-col space-y-2 text-2xl text-gray-700 dark:text-gray-200">
            <p className="mt-6 leading-7"> Hi I'm Wesley.</p>
            <p>
              A <span className="font-bold dark:text-white">Taiwanese 🇹🇼</span>{" "}
              developer based in Taipei.
            </p>
            <p>
              I am experienced in{" "}
              <span className="font-bold dark:text-white">
                Full Stack Development
              </span>{" "}
              .
            </p>
            <p>
              Recently, I've been working on{" "}
              <span className="font-bold dark:text-white"> TypeScript</span> and{" "}
              <span className="font-bold dark:text-white">Python</span>.
            </p>
          </div>

          <h2 className="mt-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Education
          </h2>
          <DataCard
            picUrl="ntu.png"
            title="National Taiwan University"
            subtitle={"B.S.E in Department of Information Management"}
            period={"Sep. 2018 - Jan. 2022"}
          />

          <h2 className="mt-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Experience
          </h2>
          <div className="grid grid-cols-1 gap-x-20 lg:grid-cols-2">
            <DataCard
              picUrl="shopback.png"
              title="Shopback CO., LTD."
              subtitle={"Software Engineer Intern"}
              period={"Oct. 2023 - Feb. 2023"}
            />
            <DataCard
              picUrl="ntu.png"
              title="National Taiwan University"
              subtitle={"Web Programming Teaching Assistant"}
              period={"Sep. 2023 - Jan. 2024"}
            />
            <DataCard
              title="Cloud Communication LTD."
              subtitle={"Freelance Frontend Developer"}
              period={"Jun. 2023 - Oct. 2023"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
