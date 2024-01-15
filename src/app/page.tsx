export default function Home() {
  return (
    <main className="flex h-full flex-col-reverse items-center justify-between px-16 py-8 max-md:px-8 max-md:py-4">
      <div className="z-20 flex w-full items-end justify-between">
        <div className="flex-col space-y-2">
          <p className="z-20 bg-transparent text-5xl font-bold max-md:text-2xl">
            GUAN MING
          </p>
          <p className="z-20 bg-transparent text-5xl font-bold max-md:text-2xl">
            CHIU
          </p>
        </div>

        <p className="z-20 bg-transparent text-2xl max-md:text-sm">
          # Web Developer
        </p>
      </div>
    </main>
  );
}
