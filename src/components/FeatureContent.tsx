import React from "react";

import MultimediaImg from "../assets/images/multimedia-notes.avif";
import TeamWorkImg from "../assets/images/teamwork.avif";
import SecurityImg from "../assets/images/security.avif";
import OfflineImg from "../assets/images/offline.avif";

const FeatureContent = (props: { item: string }) => {
  const renderCurrentSelection = () => {
    switch (props.item) {
      case "multimedia":
        return (
          <>
            <div className="text-left">
              <p className="text-3xl text-purple-700 font-semibold my-8">
                Don't limit yourself at textual notes
              </p>
              <p className="text-[#6b5a74 text-lg mb-10">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
              <a
                href="/signup"
                className=" xl:text-xl text-xl text-[#ea96e0] hover:text-purple-500 hover:font-haptikrotalic cursor-pointer underline"
              >
                Get started for free &#11106;
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={MultimediaImg}
                alt="multimedia notes"
                width="90%"
                loading="lazy"
                decoding="async"
              />
            </div>
          </>
        );
      case "workTogether":
        return (
          <>
            <div className="text-left">
              <p className="text-3xl text-purple-700 font-semibold my-8">
                Collaborate with Ease
              </p>
              <p className="text-[#6b5a74 text-lg mb-10">
                Whether it's a team project or a study group, collaboration has
                never been smoother. Share, edit, and brainstorm in real-time
                with Acme cloud.
                <br />
                You can also publish a note to the internet and share the URL
                with others.
              </p>
              <a
                href="/signup"
                className=" xl:text-xl text-xl text-[#ea96e0] hover:text-purple-500 hover:font-haptikrotalic cursor-pointer underline"
              >
                Try it for free &#11106;
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={TeamWorkImg}
                alt="work together"
                width="90%"
                loading="lazy"
                decoding="async"
              />
            </div>
          </>
        );
      case "security":
        return (
          <>
            <div className="text-left">
              <p className="text-3xl text-purple-700 font-semibold my-8">
                Fort Knox Security
              </p>
              <p className="text-[#6b5a74 text-lg mb-10">
                Your ideas are precious, and we treat them that way. Acme
                employs state-of-the-art security measures and End-To-End
                Encryption (E2EE) to ensure your data is safe and sound.
              </p>
              <a
                href="/signup"
                className=" xl:text-xl text-xl text-[#ea96e0] hover:text-purple-500 hover:font-haptikrotalic cursor-pointer underline"
              >
                More about E2EE &#11106;
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={SecurityImg}
                alt="secured notes"
                width="90%"
                loading="lazy"
                decoding="async"
              />
            </div>
          </>
        );
      case "sync":
        return (
          <>
            <div className="text-left">
              <p className="text-3xl text-purple-700 font-semibold my-8">
                Sync Across Devices
              </p>
              <p className="text-[#6b5a74 text-lg mb-10">
                Seamless transition from your laptop to your phone – Acme Note
                syncs your notes across all devices 24/7, keeping your ideas
                accessible anytime, anywhere.
              </p>
              <a
                href="/signup"
                className=" xl:text-xl text-xl text-[#ea96e0] hover:text-purple-500 hover:font-haptikrotalic cursor-pointer underline"
              >
                More about offline &#11106;
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={OfflineImg}
                alt="24/7 access to notes"
                width="90%"
                loading="lazy"
                decoding="async"
              />
            </div>
          </>
        );
    }
  };
  return (
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
      {renderCurrentSelection()}
    </div>
  );
};

export default FeatureContent;
