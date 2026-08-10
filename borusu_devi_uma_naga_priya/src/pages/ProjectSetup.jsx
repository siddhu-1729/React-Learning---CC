function ProjectSetup() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-3xl font-bold">
          ⚙️ Project Setup
        </h1>

        {/* React Setup */}
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-semibold text-blue-600">
            ⚛️ React + Vite Setup
          </h2>

          <ol className="list-decimal space-y-4 pl-6">

            <li>
              <p className="mb-2 font-medium">
                Create a React + Vite project:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                npm create vite@latest my-app
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Go into the project:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                cd my-app
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Install dependencies:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                npm install
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Start the development server:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                npm run dev
              </pre>
            </li>

          </ol>
        </section>

        {/* Tailwind CSS */}
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-semibold text-cyan-600">
            🎨 Tailwind CSS Setup
          </h2>

          <ol className="list-decimal space-y-4 pl-6">

            <li>
              <p className="mb-2 font-medium">
                Install Tailwind CSS:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                npm install tailwindcss @tailwindcss/vite
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Add Tailwind to <b>vite.config.js</b>:
              </p>

              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
{`import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`}
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Add Tailwind to <b>index.css</b>:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                @import "tailwindcss";
              </pre>
            </li>

          </ol>
        </section>

        {/* Git Setup */}
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-semibold text-orange-600">
            🔧 Git Setup
          </h2>

          <ol className="list-decimal space-y-4 pl-6">

            <li>
              <p className="mb-2 font-medium">
                Initialize Git:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git init
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Check Git status:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git status
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Add all files:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git add .
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Commit the changes:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git commit -m "Initial commit"
              </pre>
            </li>

          </ol>
        </section>

        {/* Branch */}
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-semibold text-green-600">
            🌿 Git Branch
          </h2>

          <ol className="list-decimal space-y-4 pl-6">

            <li>
              <p className="mb-2 font-medium">
                View branches:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git branch
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Create and switch to a new branch:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git checkout -b your-branch-name
              </pre>
            </li>

            <li>
              <p className="mb-2 font-medium">
                Example:
              </p>

              <pre className="rounded-lg bg-gray-900 p-4 text-sm text-white">
                git checkout -b borusu-devi-uma-naga-priya
              </pre>
            </li>

          </ol>
        </section>

        {/* GitHub */}
        <section>
          <h2 className="mb-5 text-2xl font-semibold text-purple-600">
            🐙 GitHub Workflow
          </h2>

          <ol className="list-decimal space-y-4 pl-6">

            <li>
              Add your changes:
              <pre className="mt-2 rounded-lg bg-gray-900 p-4 text-sm text-white">
                git add .
              </pre>
            </li>

            <li>
              Commit your changes:
              <pre className="mt-2 rounded-lg bg-gray-900 p-4 text-sm text-white">
                git commit -m "Add project setup"
              </pre>
            </li>

            <li>
              Push your branch:
              <pre className="mt-2 rounded-lg bg-gray-900 p-4 text-sm text-white">
                git push -u origin your-branch-name
              </pre>
            </li>

            <li>
              Create a Pull Request:
              <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
                <li>Open your GitHub repository.</li>
                <li>Go to <b>Pull Requests</b>.</li>
                <li>Click <b>New Pull Request</b>.</li>
                <li>Select your branch.</li>
                <li>Add a title and description.</li>
                <li>Click <b>Create Pull Request</b>.</li>
              </ul>
            </li>

          </ol>
        </section>

      </div>
    </div>
  );
}

export default ProjectSetup;