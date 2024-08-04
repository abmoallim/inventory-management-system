/* eslint-disable @next/next/no-img-element */
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="p-8">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gray-100">
          <h1 className="text-5xl font-bold mb-4">Welcome to Inventory MS</h1>
          <p className="text-xl mb-8">Manage your inventory efficiently with our cutting-edge system</p>

        </section>

        {/* About the App Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-6 text-center">About Inventory MS</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-center">
            Inventory MS is a state-of-the-art inventory management system designed to help you keep track of your products effortlessly.
            With a user-friendly interface and robust features, you can easily add, view, and manage your inventory items.
          </p>
          <p className="text-lg max-w-2xl mx-auto text-center">
            Built using the latest technologies, Inventory MS ensures smooth performance and scalability for businesses of all sizes.
          </p>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gray-100">
          <h2 className="text-4xl font-bold mb-6 text-center">Meet the Founder</h2>
          <div className="flex flex-col items-center">
            <img src="/profile-pic.png" alt="Founder" className="w-40 h-40 rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">Abdihamid Moallim</h3>
            <p className="text-lg text-center max-w-xl">
              Abdihamid is a passionate software engineer and entrepreneur with a vision to revolutionize inventory management.
              With years of experience in the tech industry, Abdihamid has built Inventory MS to address the real challenges faced by businesses in managing their inventory.
              <br />
              <br />
              😂😂 OFC chatGPT wrote this text 4 me😂😂.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
