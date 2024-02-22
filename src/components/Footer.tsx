import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white text-center py-4">
      <div className="flex  items-center justify-center gap-6 mb-8">
        <a
          href="https://www.linkedin.com/company/acme/"
          rel="noreferrer"
          aria-label="Visit Acme's LinkedIn profile"
          className="w-8 h-8 rounded-full flex bg-purple-600 hover:bg-pink justify-center items-center "
          target="_blank"
        >
          <svg height="16" viewBox="0 0 47 47" fill="#FCE5D8">
            <path d="M43.5 0h-40A3.4 3.4 0 0 0 0 3.4v40.2A3.4 3.4 0 0 0 3.5 47h40a3.4 3.4 0 0 0 3.5-3.4V3.4A3.4 3.4 0 0 0 43.5 0zM13.9 40.1H7V17.6h7zm-3.4-25.5a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm29.6 25.5h-7v-11c0-2.6 0-5.9-3.6-5.9S25.3 26 25.3 29v11.1h-7V17.6H25v3.1h.1a7.3 7.3 0 0 1 6.6-3.6c7.1 0 8.4 4.7 8.4 10.7V40z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/acmenote"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Acme's Instagram profile"
          className="w-8 h-8 rounded-full flex bg-purple-600 hover:bg-pink justify-center items-center text-center"
        >
          <svg height="16" width="16" fill="#FCE5D8">
            <path d="M7.997.005c-2.172 0-2.444.01-3.297.048C3.85.092 3.268.227 2.76.425a3.92 3.92 0 00-1.417.922A3.92 3.92 0 00.42 2.764c-.198.509-.333 1.09-.372 1.941C.01 5.558 0 5.831 0 8.003s.01 2.444.048 3.297c.039.851.174 1.432.372 1.941.204.526.478.972.922 1.417.445.444.89.718 1.417.922.509.198 1.09.333 1.941.372.853.039 1.125.048 3.297.048s2.445-.01 3.298-.048c.851-.039 1.432-.174 1.941-.372a3.92 3.92 0 001.417-.922 3.92 3.92 0 00.922-1.417c.198-.509.333-1.09.372-1.941.039-.853.048-1.125.048-3.297s-.01-2.445-.048-3.298c-.039-.851-.174-1.432-.372-1.941a3.92 3.92 0 00-.922-1.417 3.92 3.92 0 00-1.417-.922c-.509-.198-1.09-.333-1.941-.372-.853-.039-1.126-.048-3.298-.048z"></path>
            <path
              d="M7.997 10.668a2.666 2.666 0 110-5.331 2.666 2.666 0 010 5.331zm0-6.772a4.107 4.107 0 100 8.213 4.107 4.107 0 000-8.213zM13.226 3.733a.96.96 0 11-1.92 0 .96.96 0 011.92 0"
              fill="#2C1338"
            ></path>
          </svg>
        </a>
        <a
          href="https://twitter.com/acmenote"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Acme's X (Twitter) profile"
          className="w-8 h-8 rounded-full flex bg-purple-600 hover:bg-pink justify-center items-center "
        >
          <svg height="16" viewBox="0 0 99 101" fill="#FCE5D8">
            <path d="M58.9185 42.7446L95.7734 0H87.04L55.0388 37.1146L29.4796 0H0L38.6506 56.1238L0 100.948H8.73395L42.528 61.7539L69.5204 100.948H99L58.9163 42.7446H58.9185ZM46.9561 56.6183L43.04 51.0296L11.8809 6.56001H25.2957L50.4415 42.4484L54.3576 48.0371L87.0441 94.6865H73.6293L46.9561 56.6204V56.6183Z"></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/acme"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Acme's YouTube profile"
          className="w-8 h-8 rounded-full flex bg-purple-600 hover:bg-pink justify-center items-center "
        >
          <svg height="12" viewBox="0 0 23 16">
            <path
              fill="#FCE5D8"
              d="M22.349 2.5A2.859 2.859 0 0020.338.489C18.552 0 11.409 0 11.409 0S4.267 0 2.481.47A2.917 2.917 0 00.47 2.5C0 4.286 0 7.989 0 7.989s0 3.721.47 5.488a2.86 2.86 0 002.011 2.011c1.805.489 8.928.489 8.928.489s7.143 0 8.929-.47a2.859 2.859 0 002.011-2.011c.47-1.786.47-5.489.47-5.489s.019-3.721-.47-5.507z"
            ></path>
            <path fill="#2C1338" d="M9.135 11.41l5.94-3.421-5.94-3.421z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/Acme/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Acme's Facebook profile"
          className="w-8 h-8 rounded-full flex bg-purple-600 hover:bg-pink justify-center items-center "
        >
          <svg height="16" viewBox="0 0 24 49" fill="#FCE5D8">
            <path d="M15 49V26.6h8.4l.6-8.2h-9v-6.1c0-2.7.7-4.1 3.5-4.1h5.2L24 .4h-.8A41.4 41.4 0 0 0 18 0c-4 0-7 1.1-9 3.2a11.2 11.2 0 0 0-3 8v7.2H0v8.2h6V49h9z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/acme"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Acme's GitHub profile"
          className="w-8 h-8 rounded-full flex bg-purple-600 hover:bg-pink justify-center items-center "
        >
          <svg height="16" width="16" version="1.1" fill="#FCE5D8">
            <path d="M8 .022c-4.42 0-8 3.663-8 8.18 0 3.616 2.292 6.682 5.47 7.762.4.077.547-.176.547-.393 0-.194-.007-.709-.01-1.39-2.226.492-2.695-1.098-2.695-1.098-.364-.945-.89-1.197-.89-1.197-.725-.507.056-.497.056-.497.803.057 1.225.843 1.225.843.714 1.25 1.873.89 2.33.68.072-.529.278-.889.507-1.094-1.777-.204-3.644-.908-3.644-4.042 0-.893.31-1.623.823-2.195-.09-.207-.36-1.039.07-2.165 0 0 .67-.22 2.2.838a7.524 7.524 0 012-.276c.68.004 1.36.095 2 .276 1.52-1.058 2.19-.838 2.19-.838.43 1.126.16 1.958.08 2.165.51.572.82 1.302.82 2.195 0 3.143-1.87 3.834-3.65 4.036.28.245.54.747.54 1.513 0 1.095-.01 1.975-.01 2.24 0 .215.14.47.55.389C13.71 14.88 16 11.812 16 8.203 16 3.685 12.418.022 8 .022z"></path>
          </svg>
        </a>
      </div>
      <p>&copy; 2024 Acme. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
