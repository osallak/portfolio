export default function AboutSection() {
  return (
    <div className="space-y-4 p-4 text-tron-text font-body ">
      <p className="text-tron-blue">
        Hello <strong className="text-strongText">User</strong>. Backend
        Developer.
      </p>

      <div className="space-y-2">
        <p>
          I am a backend developer with expertise in:
          <span className="text-tron-accent"> API Development</span>,
          <span className="text-tron-accent"> Database Design</span>, and
          <span className="text-tron-accent"> System Architecture</span>.
        </p>

        <p>
          Currently focusing on building robust and scalable backend solutions.
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        <a
          href="https://github.com/osallak"
          className="text-strong-text hover:text-tron-blue hover:animate-pulse-tron"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/osallak"
          className="text-strong-text hover:text-tron-blue hover:animate-pulse-tron"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  );
}
