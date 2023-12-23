import Space from "@/components/space";

export default function Home() {
  return (
    <main className="flex h-screen flex-col-reverse items-center justify-between">
      <div className="absolute z-10 h-screen w-screen">
        <Space></Space>
      </div>

      <div className="flex w-full items-end justify-between px-12 py-8">
        <div className="flex-col space-y-2">
          <p className="z-20 bg-transparent text-5xl font-bold">GUAN MING</p>
          <p className="z-20 bg-transparent text-5xl font-bold">CHIU</p>
        </div>

        <p className="z-20 bg-transparent text-2xl">Web Developer</p>
      </div>
    </main>
  );
}
