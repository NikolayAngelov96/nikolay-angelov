export default function Footer() {
  return (
    <footer className="p-32 flex flex-col gap-3 items-center bg-gray-200">
      &copy; {new Date().getFullYear()} Nikolay Angelov
      <small>
        🚀 Built with{" "}
        <a
          href="https://astro.build/"
          target="_blank"
          className="text-blue-400"
        >
          Astro
        </a>
      </small>
    </footer>
  );
}
