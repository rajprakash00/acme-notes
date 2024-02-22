import React from "react";

import LogoPerception from "../assets/images/logo-perception.png";
import LogoNewLogic from "../assets/images/logo-newlogic.png";
import LogoSweatCo from "../assets/images/logo-sweatco.png";

const CaseStudies = () => {
  return (
    <div className="bg-purple-800 md:p-[60px_30px] xl:p-[80px_60px] p-[45px_30px]">
      <h3 className="text-white text-3xl text-center font-bold mb-4 max-w-3xl mx-auto">
        Companies That Use Acme Note See:
      </h3>
      <div className="md:flex gap-7 mt-10">
        <div className="bg-[#f7d8f3] rounded-lg flex flex-col md:gap-4 gap-1 flex-1 p-[20px_30px_30px] mb-7">
          <h3 className="text-purple-700 xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
            <span className="text-4xl">40+</span> hours saved monthly
          </h3>
          <p className="mb-5 text-purple-500">
            at Perception Engineering with seamless collaboration and one-click
            features.
          </p>
          <div className="flex justify-end m-[auto_0_5px] border-b-[1px] border-solid border-b-[#c0b8c3] pb-6">
            <img
              src={LogoPerception}
              alt="perception engineering"
              width="156px"
            />
          </div>
          <a
            href="/signup"
            className="text-purple-800 text flex items-center gap-3 hover:opacity-75 hover:font-haptikrotalic"
          >
            Read case study
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzg4MDkgMTIuOTM5NEM2LjIwMjMzIDEyLjkzOTQgNS43Mjc0OCAxMy40MTQyIDUuNzI3NDggMTRDNS43Mjc0OCAxNC41ODU4IDYuMjAyMzMgMTUuMDYwNiA2Ljc4ODA5IDE1LjA2MDZMNi43ODgwOSAxMi45Mzk0Wk0yMi4zODY1IDE0Ljc1QzIyLjgwMDcgMTQuMzM1OCAyMi44MDA3IDEzLjY2NDIgMjIuMzg2NSAxMy4yNUwxNS42MzY5IDYuNTAwMzhDMTUuMjIyNyA2LjA4NjE5IDE0LjU1MTEgNi4wODYxOSAxNC4xMzcgNi41MDAzOEMxMy43MjI4IDYuOTE0NTggMTMuNzIyOCA3LjU4NjExIDE0LjEzNyA4LjAwMDMxTDIwLjEzNjYgMTRMMTQuMTM3IDE5Ljk5OTdDMTMuNzIyOCAyMC40MTM5IDEzLjcyMjggMjEuMDg1NCAxNC4xMzcgMjEuNDk5NkMxNC41NTExIDIxLjkxMzggMTUuMjIyNyAyMS45MTM4IDE1LjYzNjkgMjEuNDk5NkwyMi4zODY1IDE0Ljc1Wk02Ljc4ODA5IDE1LjA2MDZMMjEuNjM2NiAxNS4wNjA2TDIxLjYzNjYgMTIuOTM5NEw2Ljc4ODA5IDEyLjkzOTRMNi43ODgwOSAxNS4wNjA2WiIgZmlsbD0iIzQxMkE0QyIvPgo8Y2lyY2xlIGN4PSIxNCIgY3k9IjE0IiByPSIxMy4xNTE1IiBzdHJva2U9IiM0MTJBNEMiIHN0cm9rZS13aWR0aD0iMS42OTY5NyIvPgo8L3N2Zz4K"
              alt="Right arrow icon"
              loading="lazy"
            ></img>
          </a>
        </div>
        <div className="bg-[#fae5f7] rounded-lg flex flex-col md:gap-4 gap-1 flex-1 p-[20px_30px_30px] mb-7">
          <h3 className="text-purple-700 xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
            <span className="text-4xl">80%</span> employees' adoption rate
          </h3>
          <p className="mb-5 text-purple-500">
            with easy, flexible ways at software consultancy Newlogic
          </p>
          <div className="flex justify-end m-[auto_0_5px] border-b-[1px] border-solid border-b-[#c0b8c3] pb-6">
            <img src={LogoNewLogic} alt="newlogic consultancy" width="39px" />
          </div>
          <a
            href="/signup"
            className="text-purple-800 text flex items-center gap-3 hover:opacity-75 hover:font-haptikrotalic"
          >
            Read case study
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzg4MDkgMTIuOTM5NEM2LjIwMjMzIDEyLjkzOTQgNS43Mjc0OCAxMy40MTQyIDUuNzI3NDggMTRDNS43Mjc0OCAxNC41ODU4IDYuMjAyMzMgMTUuMDYwNiA2Ljc4ODA5IDE1LjA2MDZMNi43ODgwOSAxMi45Mzk0Wk0yMi4zODY1IDE0Ljc1QzIyLjgwMDcgMTQuMzM1OCAyMi44MDA3IDEzLjY2NDIgMjIuMzg2NSAxMy4yNUwxNS42MzY5IDYuNTAwMzhDMTUuMjIyNyA2LjA4NjE5IDE0LjU1MTEgNi4wODYxOSAxNC4xMzcgNi41MDAzOEMxMy43MjI4IDYuOTE0NTggMTMuNzIyOCA3LjU4NjExIDE0LjEzNyA4LjAwMDMxTDIwLjEzNjYgMTRMMTQuMTM3IDE5Ljk5OTdDMTMuNzIyOCAyMC40MTM5IDEzLjcyMjggMjEuMDg1NCAxNC4xMzcgMjEuNDk5NkMxNC41NTExIDIxLjkxMzggMTUuMjIyNyAyMS45MTM4IDE1LjYzNjkgMjEuNDk5NkwyMi4zODY1IDE0Ljc1Wk02Ljc4ODA5IDE1LjA2MDZMMjEuNjM2NiAxNS4wNjA2TDIxLjYzNjYgMTIuOTM5NEw2Ljc4ODA5IDEyLjkzOTRMNi43ODgwOSAxNS4wNjA2WiIgZmlsbD0iIzQxMkE0QyIvPgo8Y2lyY2xlIGN4PSIxNCIgY3k9IjE0IiByPSIxMy4xNTE1IiBzdHJva2U9IiM0MTJBNEMiIHN0cm9rZS13aWR0aD0iMS42OTY5NyIvPgo8L3N2Zz4K"
              alt="Right arrow icon"
              loading="lazy"
            ></img>
          </a>
        </div>
        <div className="bg-[#fdf1ec] rounded-lg flex flex-col md:gap-4 gap-1 flex-1 p-[20px_30px_30px] mb-7">
          <h3 className="text-purple-700 xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
            <span className="text-4xl">20%</span> decrease in communication
            errors
          </h3>
          <p className="mb-5 text-purple-500">
            by fast search,easy-sharing methods at Sweat+Co PR agency
          </p>
          <div className="flex justify-end m-[auto_0_5px] border-b-[1px] border-solid border-b-[#c0b8c3] pb-6">
            <img src={LogoSweatCo} alt="sweat+co PR agency" width="147px" />
          </div>
          <a
            href="/signup"
            className="text-purple-800 text flex items-center gap-3 hover:opacity-75 hover:font-haptikrotalic"
          >
            Read case study
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzg4MDkgMTIuOTM5NEM2LjIwMjMzIDEyLjkzOTQgNS43Mjc0OCAxMy40MTQyIDUuNzI3NDggMTRDNS43Mjc0OCAxNC41ODU4IDYuMjAyMzMgMTUuMDYwNiA2Ljc4ODA5IDE1LjA2MDZMNi43ODgwOSAxMi45Mzk0Wk0yMi4zODY1IDE0Ljc1QzIyLjgwMDcgMTQuMzM1OCAyMi44MDA3IDEzLjY2NDIgMjIuMzg2NSAxMy4yNUwxNS42MzY5IDYuNTAwMzhDMTUuMjIyNyA2LjA4NjE5IDE0LjU1MTEgNi4wODYxOSAxNC4xMzcgNi41MDAzOEMxMy43MjI4IDYuOTE0NTggMTMuNzIyOCA3LjU4NjExIDE0LjEzNyA4LjAwMDMxTDIwLjEzNjYgMTRMMTQuMTM3IDE5Ljk5OTdDMTMuNzIyOCAyMC40MTM5IDEzLjcyMjggMjEuMDg1NCAxNC4xMzcgMjEuNDk5NkMxNC41NTExIDIxLjkxMzggMTUuMjIyNyAyMS45MTM4IDE1LjYzNjkgMjEuNDk5NkwyMi4zODY1IDE0Ljc1Wk02Ljc4ODA5IDE1LjA2MDZMMjEuNjM2NiAxNS4wNjA2TDIxLjYzNjYgMTIuOTM5NEw2Ljc4ODA5IDEyLjkzOTRMNi43ODgwOSAxNS4wNjA2WiIgZmlsbD0iIzQxMkE0QyIvPgo8Y2lyY2xlIGN4PSIxNCIgY3k9IjE0IiByPSIxMy4xNTE1IiBzdHJva2U9IiM0MTJBNEMiIHN0cm9rZS13aWR0aD0iMS42OTY5NyIvPgo8L3N2Zz4K"
              alt="Right arrow icon"
              loading="lazy"
            ></img>
          </a>
        </div>
      </div>
      <h3 className="text-white text-3xl text-center font-bold mb-4 max-w-3xl mx-auto mt-10">
        Want to capture , arrange and share your creative ideas with the team ?
      </h3>
      <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg items-center justify-center mt-10">
        <p className="flex gap-2 text-[#d5d0d7] ">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAuNTk1MiIgY3k9IjEwLjU5NTIiIHI9IjkuNjYwMzEiIHN0cm9rZT0iI0MwQjhDMyIgc3Ryb2tlLXdpZHRoPSIxLjg2OTc0Ii8+CjxwYXRoIGQ9Ik05LjA0Mjg1IDEyLjcxNDJMOS4yNzcxOCAxMi45NDA4TDkuNDkzMDIgMTIuNjk2NUwxNC42NDM5IDYuODY2MThMMTQuNjU3IDYuODUxMzhMMTQuNjY4MSA2LjgzNTA1QzE0Ljg3MTMgNi41MzYxIDE1LjI4ODEgNi40NTIwMiAxNS41OTc2IDYuNjU0MzdDMTUuODk5MSA2Ljg1MTQ5IDE1Ljk4MDMgNy4yNDMxMSAxNS43OTA2IDcuNTM2OTlMOS45ODkzOCAxNC4zMjc2TDkuOTc4MjUgMTQuMzQwNkw5Ljk2ODYgMTQuMzU0OEM5LjczNTkxIDE0LjY5NzEgOS4yMzY3NiAxNC43NDczIDguOTM3NTMgMTQuNDUzOEw4LjkzNjM2IDE0LjQ1MjdMNS40OTA4IDExLjEwODlDNS40OTA2MyAxMS4xMDg4IDUuNDkwNDYgMTEuMTA4NiA1LjQ5MDI5IDExLjEwODRDNS4yMzMwMiAxMC44NTU2IDUuMjMzMTkgMTAuNDQ4NiA1LjQ5MDggMTAuMTk2QzUuNzUxOTggOS45Mzk4NCA2LjE3Nzg5IDkuOTM5ODQgNi40MzkwNyAxMC4xOTZMNi40MzkwNiAxMC4xOTZMNi40NDA2MiAxMC4xOTc1TDkuMDQyODUgMTIuNzE0MloiIGZpbGw9IiNDMEI4QzMiIHN0cm9rZT0iI0MwQjhDMyIgc3Ryb2tlLXdpZHRoPSIwLjYyMzI0NiIvPgo8L3N2Zz4K"
            width="26"
            alt="Checkmark icon"
          />
          No credit card required
        </p>
        <p className="flex gap-2 text-[#d5d0d7] ">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAuNTk1MiIgY3k9IjEwLjU5NTIiIHI9IjkuNjYwMzEiIHN0cm9rZT0iI0MwQjhDMyIgc3Ryb2tlLXdpZHRoPSIxLjg2OTc0Ii8+CjxwYXRoIGQ9Ik05LjA0Mjg1IDEyLjcxNDJMOS4yNzcxOCAxMi45NDA4TDkuNDkzMDIgMTIuNjk2NUwxNC42NDM5IDYuODY2MThMMTQuNjU3IDYuODUxMzhMMTQuNjY4MSA2LjgzNTA1QzE0Ljg3MTMgNi41MzYxIDE1LjI4ODEgNi40NTIwMiAxNS41OTc2IDYuNjU0MzdDMTUuODk5MSA2Ljg1MTQ5IDE1Ljk4MDMgNy4yNDMxMSAxNS43OTA2IDcuNTM2OTlMOS45ODkzOCAxNC4zMjc2TDkuOTc4MjUgMTQuMzQwNkw5Ljk2ODYgMTQuMzU0OEM5LjczNTkxIDE0LjY5NzEgOS4yMzY3NiAxNC43NDczIDguOTM3NTMgMTQuNDUzOEw4LjkzNjM2IDE0LjQ1MjdMNS40OTA4IDExLjEwODlDNS40OTA2MyAxMS4xMDg4IDUuNDkwNDYgMTEuMTA4NiA1LjQ5MDI5IDExLjEwODRDNS4yMzMwMiAxMC44NTU2IDUuMjMzMTkgMTAuNDQ4NiA1LjQ5MDggMTAuMTk2QzUuNzUxOTggOS45Mzk4NCA2LjE3Nzg5IDkuOTM5ODQgNi40MzkwNyAxMC4xOTZMNi40MzkwNiAxMC4xOTZMNi40NDA2MiAxMC4xOTc1TDkuMDQyODUgMTIuNzE0MloiIGZpbGw9IiNDMEI4QzMiIHN0cm9rZT0iI0MwQjhDMyIgc3Ryb2tlLXdpZHRoPSIwLjYyMzI0NiIvPgo8L3N2Zz4K"
            width="26"
            alt="Checkmark icon"
          />
          Free 30-day trial for all features
        </p>
        <p className="flex gap-2 text-[#d5d0d7] ">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAuNTk1MiIgY3k9IjEwLjU5NTIiIHI9IjkuNjYwMzEiIHN0cm9rZT0iI0MwQjhDMyIgc3Ryb2tlLXdpZHRoPSIxLjg2OTc0Ii8+CjxwYXRoIGQ9Ik05LjA0Mjg1IDEyLjcxNDJMOS4yNzcxOCAxMi45NDA4TDkuNDkzMDIgMTIuNjk2NUwxNC42NDM5IDYuODY2MThMMTQuNjU3IDYuODUxMzhMMTQuNjY4MSA2LjgzNTA1QzE0Ljg3MTMgNi41MzYxIDE1LjI4ODEgNi40NTIwMiAxNS41OTc2IDYuNjU0MzdDMTUuODk5MSA2Ljg1MTQ5IDE1Ljk4MDMgNy4yNDMxMSAxNS43OTA2IDcuNTM2OTlMOS45ODkzOCAxNC4zMjc2TDkuOTc4MjUgMTQuMzQwNkw5Ljk2ODYgMTQuMzU0OEM5LjczNTkxIDE0LjY5NzEgOS4yMzY3NiAxNC43NDczIDguOTM3NTMgMTQuNDUzOEw4LjkzNjM2IDE0LjQ1MjdMNS40OTA4IDExLjEwODlDNS40OTA2MyAxMS4xMDg4IDUuNDkwNDYgMTEuMTA4NiA1LjQ5MDI5IDExLjEwODRDNS4yMzMwMiAxMC44NTU2IDUuMjMzMTkgMTAuNDQ4NiA1LjQ5MDggMTAuMTk2QzUuNzUxOTggOS45Mzk4NCA2LjE3Nzg5IDkuOTM5ODQgNi40MzkwNyAxMC4xOTZMNi40MzkwNiAxMC4xOTZMNi40NDA2MiAxMC4xOTc1TDkuMDQyODUgMTIuNzE0MloiIGZpbGw9IiNDMEI4QzMiIHN0cm9rZT0iI0MwQjhDMyIgc3Ryb2tlLXdpZHRoPSIwLjYyMzI0NiIvPgo8L3N2Zz4K"
            width="26"
            alt="Checkmark icon"
          />
          Cancel anytime
        </p>
      </div>
      <div className="mt-14 text-center">
        <a
          href="/signup"
          className="py-[14px] px-[45px] xl:text-xl text-xl text-white font-semibold bg-pink hover:bg-purple-600 rounded-3xl cursor-pointer text-center"
        >
          Try it for free
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
