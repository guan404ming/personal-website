import DataCard from "@/components/data-card";

export default function AboutPage() {
  return (
    <main className="flex h-full w-screen overflow-scroll bg-white px-10 pt-24 md:px-20 lg:px-32 xl:px-40 dark:bg-black">
      <div className="z-20 flex w-screen items-center justify-between max-md:mx-auto max-md:block">
        <div>
          <span className="flex space-x-3 truncate text-3xl lg:text-5xl">
            <h2 className="mb-4 font-bold tracking-tight transition-colors lg:mb-6">
              Hi I'm Wesley
            </h2>
            <div className="animate-wiggle">👋</div>
          </span>

          <div className="text-md flex flex-col space-y-1 text-gray-700 md:text-lg lg:space-y-3 lg:text-xl xl:text-2xl dark:text-gray-200">
            <p>A Taiwanese 🇹🇼 developer.</p>
            <p>
              I'm experienced in{" "}
              <span className="font-semibold dark:text-white">
                full-stack dev
              </span>
              .
            </p>
            <p>
              Recently, I've been working on{" "}
              <span className="font-semibold dark:text-white">TypeScript</span>.
            </p>
          </div>
        </div>

        <div className="max-md:py-4">
          <h2 className="mb-3 scroll-m-20 text-xl font-bold tracking-tight transition-colors xl:text-3xl">
            Education
          </h2>
          <DataCard
            picUrl="ntu.png"
            title="National Taiwan University"
            subtitle={"B.S.E in Information Management"}
            period={"Sep. 2018 - Jan. 2022"}
          />
          <h2 className="my-3 scroll-m-20 text-xl font-bold tracking-tight transition-colors xl:text-3xl">
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
