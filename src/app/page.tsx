import HomeSlider from "./_components/MainSlider"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HomeSlider />
      </main>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>
          Lorem Ipsum is simply dummy text ...
        </p>
      </div>
    </>
  );
}