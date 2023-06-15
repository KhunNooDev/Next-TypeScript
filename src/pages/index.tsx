Home.title = "Home";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-900 px-2 py-20 text-white">
        <div className="container mx-auto">
          <h1 className="mb-4 text-5xl font-bold">Welcome to My Website</h1>
          <p className="mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis ligula et finibus aliquet.
          </p>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-2 py-20">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col items-center md:flex-row">
            <div className="mb-6 w-full md:mb-0 md:w-1/2 md:pr-8">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Feature 1"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold">Feature 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis ligula et finibus aliquet.
              </p>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-center md:flex-row-reverse">
            <div className="mb-6 w-full md:mb-0 md:w-1/2 md:pl-8">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Feature 2"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold">Feature 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis ligula et finibus aliquet.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-6 w-full md:mb-0 md:w-1/2 md:pr-8">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Feature 3"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold">Feature 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis ligula et finibus aliquet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 px-2 py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to get started?</h2>
          <p className="mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis ligula et finibus aliquet.
          </p>
          <button className="rounded bg-white px-4 py-2 font-bold text-blue-500 hover:bg-gray-200">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 px-2 py-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            &copy; 2023 My Website. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
