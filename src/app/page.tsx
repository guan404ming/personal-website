import Space from "@/components/space";

export default function Home() {
  return (
    <main className="flex h-screen flex-col-reverse items-center justify-between">
      <div className="absolute z-10 h-full w-full">
        <Space></Space>
      </div>

      <div className="max-lg: z-20 flex w-full items-end justify-between px-16 py-8 max-sm:px-8 max-sm:py-4">
        <div className="flex-col space-y-2">
          <p className="z-20 bg-transparent text-5xl font-bold max-sm:text-lg">
            GUAN MING
          </p>
          <p className="z-20 bg-transparent text-5xl font-bold max-sm:text-lg">
            CHIU
          </p>
        </div>

        <p className="z-20 bg-transparent text-2xl max-sm:text-sm">
          # Web Developer
        </p>
      </div>
    </main>
  );
}
