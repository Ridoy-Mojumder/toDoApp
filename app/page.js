import Head from 'next/head';
import TodoList from '../components/TodoList'; // Adjust the path as needed

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 text-gray-900 flex flex-col">
      <Head>
        <title>To-Do App</title>
        <meta name="description" content="A simple To-Do app using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-lg ">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-gray-800">To-Do App</h1>
          <nav>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto  mt-6 bg-white shadow-md rounded-lg p-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Welcome to the To-Do App</h2>
        <TodoList />
      </main>

      <footer className="bg-gray-800 text-gray-100 py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
