import DataCard from "@/components/data-card";

export default function AboutPage() {
  return (
    <main className="lg:px-50 xl:px-50 flex h-screen w-screen overflow-scroll px-16 pt-24 md:px-40 ">
      <div className="z-20 flex w-screen items-center justify-between p-4 px-10">
        <div>
          <span className="flex space-x-3">
            <h2 className="mb-6 scroll-m-20 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
              Hi I'm Wesley
            </h2>
            <div className="animate-wiggle text-5xl">👋</div>
          </span>

          <div className="flex flex-col space-y-3 text-2xl text-gray-700 dark:text-gray-200">
            <p>A Taiwanese 🇹🇼 developer based in Taipei.</p>
            <p>
              I am experienced in{" "}
              <span className="font-bold dark:text-white">
                Full Stack Development
              </span>
              .
            </p>
            <p>
              Recently, I've been working on{" "}
              <span className="font-bold dark:text-white"> TypeScript</span> and{" "}
              <span className="font-bold dark:text-white">Python</span>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-3 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
            Education
          </h2>
          <DataCard
            picUrl="ntu.png"
            title="National Taiwan University"
            subtitle={"B.S.E in Information Management"}
            period={"Sep. 2018 - Jan. 2022"}
          />
          <h2 className="my-3 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Experience
          </h2>
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
    </main>
  );
}
