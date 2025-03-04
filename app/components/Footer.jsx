export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

export default function Footer() {
  return (
    <footer className=" w-full h-830 bg-cover bg-no-repeat bg-bottom bg-[url('/images/assets/city-footer.webp')] bg-bck-grey flex || max-[1700px]:justify-center">
      <div
        className="flex gap-32 mt-48 ml-48 
      ---1536px---
      max-2xl:mx-24 max-2xl:mt-28
      max-[1700px]:mr-72
      ---768px---
      max-md:flex-col max-md:gap-12 max-md:mx-16 max-md:mt-20

      max-lg:gap-10
      ---520px---
      max-mobile:gap-6  max-mobile:mt-16"
      >
        {/* main body of text   */}
        <div className="flex flex-col gap-12">
          <h1
            className="font-neraphic text-h1 text-text-lightBody max-w-830
        ---1024px---
        max-lg:text-h2

        ---520px---
        max-mobile:text-h4 max-mobile:mb-16
        "
          >
            Let&apos;s build the future together, one reality at a time.
          </h1>
          <a
            href="https://discord.gg/vs9XdfuMJu"
            target="_blank"
            className="bg-bck-white  button-styling font-neraphic max-md:hidden group hover:scale-y-97 duration-300"
          >
            Join the team
            <img
              src="/images/icons/arrow-right.png"
              className="group-hover:rotate-[315deg] duration-300"
              alt=""
            />
          </a>

          <div className="max-md:hidden">
            <p className="text-text-copyright font-suse text-xl mt-16 max-2xl:mt-4">
              @ 2024 Waterloo Reality Labs.
            </p>
            <p className="text-text-copyright font-suse text-xl">
              Created by the Design & Branding Team
            </p>
          </div>
        </div>
        {/* footer navigation */}
        <nav className="flex gap-12 ">
          <div className="flex flex-col gap-2">
            <a
              href="/"
              className="font-suse text-text-lightBody text-xl
              hover:text-text-lightSub duration-300
              "
            >
              Home
            </a>
            <a
              href="/projects"
              className="font-suse text-text-lightBody text-xl              
              hover:text-text-lightSub duration-300
              "
            >
              Projects
            </a>
            <a
              href="/blogs"
              className="font-suse text-text-lightBody text-xl              
              hover:text-text-lightSub duration-300
              "
            >
              Blogs
            </a>
            <a
              href="/about"
              className="font-suse text-text-lightBody text-xl              
              hover:text-text-lightSub duration-300
              "
            >
              About
            </a>
            <a
              href="/contact"
              className="font-suse text-text-lightBody text-xl              
              hover:text-text-lightSub duration-300
              "
            >
              Contact
            </a>
          </div>

          {/* Social links  */}
          <div>
            <a
              href="https://discord.gg/vs9XdfuMJu"
              target="_blank"
              className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36 group

            "
            >
              Discord
              <img
                src="/images/icons/arrow-up-right-grey.png"
                alt=""
                className="h-6 group-hover:rotate-45 duration-200"
              />
            </a>

            <a
              href="https://github.com/uwrealitylabs"
              target="_blank"
              className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36 group"
            >
              GitHub
              <img
                src="/images/icons/arrow-up-right-grey.png"
                alt=""
                className="h-6 group-hover:rotate-45 duration-200"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/uwrealitylabs/"
              target="_blank"
              className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36 group"
            >
              LinkedIn
              <img
                src="/images/icons/arrow-up-right-grey.png"
                alt=""
                className="h-6 group-hover:rotate-45 duration-200"
              />
            </a>

            <a
              href="https://www.instagram.com/uwrealitylabs/"
              target="_blank"
              className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36 group"
            >
              Instagram
              <img
                src="/images/icons/arrow-up-right-grey.png"
                alt=""
                className="h-6 group-hover:rotate-45 duration-200"
              />
            </a>
            <a
              href="https://uwrl.notion.site/"
              target="_blank"
              className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36 group"
            >
              Notion
              <img
                src="/images/icons/arrow-up-right-grey.png"
                alt=""
                className="h-6 group-hover:rotate-45 duration-200"
              />
            </a>
          </div>
        </nav>
        <div className="md:hidden max-w-48">
          <p className="text-text-copyright font-suse text-body">
            @ 2024 UW Reality Labs.
          </p>
          <p className="text-text-copyright font-suse text-body">
            Created by the Design & Branding Team
          </p>
        </div>
      </div>
    </footer>
  );
}
