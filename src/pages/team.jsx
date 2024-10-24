import bhuvnesh from "../assets/images/profile/bhuvnesh.jpg";
import abhinav from "../assets/images/profile/abhinav.jpg";
import aryan from "../assets/images/profile/aryan.jpg";
import mishra from "../assets/images/profile/mishra.jpg";
import anurag from "../assets/images/profile/anurag.jpg";

const bhuvnesh_info = {
  name: "Bhuvnesh Verma",
  role: "Team Leader & Full  Stack Dev",

  desc: "Success is not final, failure is not fatal; it’s the courage to continue that counts.",
  imagepath: bhuvnesh,
  imagealt: "Bhuvnesh Verma",
  githuburl: "https://github.com/MasterBhuvnesh",
  linkedinurl: "https://www.linkedin.com/in/bhuvneshverma/",
  instagramurl: "https://www.instagram.com/verma_bhuvnesh_2904/",
};
const aryan_info = {
  name: "Aryan Bokde",
  role: "Frontend Dev",
  desc: "Believe you can & you're halfway there. With determination anything is possible.",
  imagepath: aryan,
  imagealt: "Aryan Bokde",
  githuburl: "https://GitHub.com/AryanDemi",
  linkedinurl: "https://www.linkedin.com/in/aryan-bokde-269241331/",
  instagramurl: "https://www.instagram.com/aryan_bokde",
};
const mishra_info = {
  name: "Abhay Mishra",
  role: "MERN Stack Dev",
  desc: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  imagepath: mishra,
  imagealt: "Abhay Mishra",
  githuburl: "https://github.com/MasterAbhayMishra",
  linkedinurl: "https://www.linkedin.com/in/abhaymishra1371/",
  instagramurl: "https://www.instagram.com/_abhay_mishra206/",
};
const abhinav_info = {
  name: "Abhinav Anurag",
  role: "Frontend Dev",
  desc: "Creativity is intelligence having fun. In the world of code, every line is an opportunity to innovate.",
  imagepath: abhinav,
  imagealt: "Abhinav Anurag",
  githuburl: "https://github.com/bhinav-a",
  linkedinurl: "https://www.linkedin.com/in/abhinav-anurag-bb5116314/",
  instagramurl: "https://www.instagram.com/_bhinav_a_/",
};
const anurag_info = {
  name: "Anurag Pathak",
  role: "Graphic Dev",
  desc: "Design is not just what it looks like and feels like. Design is how it works.",
  imagepath: anurag,
  imagealt: "Anurag Pathak",
  githuburl: "https://github.com/Anuragpathak07/",
  linkedinurl: "https://www.linkedin.com/in/anurag-pathak-2b043b197/",
  instagramurl: "https://www.instagram.com/anuragpathak2005/",
};

export default function Team() {
  return (
    <div class="mb-16 font-poppins">
      <dh-component>
        <div class="container flex justify-center mx-auto pt-16">
          <div>
            <p class="text-gray-500 text-lg text-center font-normal pb-3">
              BUILDING TEAM
            </p>
            <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div class="w-full bg-white px-10 pt-10">
          <div class="container mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People "
              class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              {/* BHUVNESH VERMA */}
              <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded-3xl overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={bhuvnesh_info.imagepath}
                        alt={bhuvnesh_info.imagealt}
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      {bhuvnesh_info.name}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      {bhuvnesh_info.role}
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      {bhuvnesh_info.desc}
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      {/* GITHUB */}
                      <a
                        href={bhuvnesh_info.githuburl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Github"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      {/* lINKEDIN */}
                      <a
                        href={bhuvnesh_info.linkedinurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="LinkedIn"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect
                              x="2"
                              y="9"
                              width="4"
                              height="12"
                            ></rect>
                            <circle
                              cx="4"
                              cy="4"
                              r="2"
                            ></circle>
                          </svg>
                        </div>
                      </a>
                      {/* INSTAGRAM */}
                      <a
                        href={bhuvnesh_info.instagramurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Instagram"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line
                              x1="17.5"
                              y1="6.5"
                              x2="17.51"
                              y2="6.5"
                            ></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ANURAG PATHAK */}
              <div
                role="listitem"
                class="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded-3xl overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={anurag_info.imagepath}
                        alt={anurag_info.imagealt}
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      {anurag_info.name}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      {anurag_info.role}
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      {anurag_info.desc}
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      {/* GITHUB */}
                      <a
                        href={anurag_info.githuburl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Github"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      {/* lINKEDIN */}
                      <a
                        href={anurag_info.linkedinurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="LinkedIn"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect
                              x="2"
                              y="9"
                              width="4"
                              height="12"
                            ></rect>
                            <circle
                              cx="4"
                              cy="4"
                              r="2"
                            ></circle>
                          </svg>
                        </div>
                      </a>
                      {/* INSTAGRAM */}
                      <a
                        href={anurag_info.instagramurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Instagram"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line
                              x1="17.5"
                              y1="6.5"
                              x2="17.51"
                              y2="6.5"
                            ></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ABHINAV ANURAG */}
              <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded-3xl overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={abhinav_info.imagepath}
                        alt={abhinav_info.imagealt}
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      {abhinav_info.name}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      {abhinav_info.role}
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      {abhinav_info.desc}
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      {/* GITHUB */}
                      <a
                        href={abhinav_info.githuburl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Github"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      {/* lINKEDIN */}
                      <a
                        href={abhinav_info.linkedinurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="LinkedIn"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect
                              x="2"
                              y="9"
                              width="4"
                              height="12"
                            ></rect>
                            <circle
                              cx="4"
                              cy="4"
                              r="2"
                            ></circle>
                          </svg>
                        </div>
                      </a>
                      {/* INSTAGRAM */}
                      <a
                        href={abhinav_info.instagramurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Instagram"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line
                              x1="17.5"
                              y1="6.5"
                              x2="17.51"
                              y2="6.5"
                            ></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ARYAN BOKDE */}
              <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded-3xl overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={aryan_info.imagepath}
                        alt={aryan_info.imagealt}
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      {aryan_info.name}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      {aryan_info.role}
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      {aryan_info.desc}
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      {/* GITHUB */}
                      <a
                        href={aryan_info.githuburl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Github"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      {/* lINKEDIN */}
                      <a
                        href={aryan_info.linkedinurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="LinkedIn"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect
                              x="2"
                              y="9"
                              width="4"
                              height="12"
                            ></rect>
                            <circle
                              cx="4"
                              cy="4"
                              r="2"
                            ></circle>
                          </svg>
                        </div>
                      </a>
                      {/* INSTAGRAM */}
                      <a
                        href={aryan_info.instagramurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Instagram"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line
                              x1="17.5"
                              y1="6.5"
                              x2="17.51"
                              y2="6.5"
                            ></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ABHAY MISHRA */}
              <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded-3xl overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={mishra_info.imagepath}
                        alt={mishra_info.imagealt}
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      {mishra_info.name}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      {mishra_info.role}
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      {mishra_info.desc}
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      {/* GITHUB */}
                      <a
                        href={mishra_info.githuburl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Github"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      {/* lINKEDIN */}
                      <a
                        href={mishra_info.linkedinurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="LinkedIn"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect
                              x="2"
                              y="9"
                              width="4"
                              height="12"
                            ></rect>
                            <circle
                              cx="4"
                              cy="4"
                              r="2"
                            ></circle>
                          </svg>
                        </div>
                      </a>
                      {/* INSTAGRAM */}
                      <a
                        href={mishra_info.instagramurl}
                        class="mx-5"
                      >
                        <div
                          aria-label="Instagram"
                          role="img"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line
                              x1="17.5"
                              y1="6.5"
                              x2="17.51"
                              y2="6.5"
                            ></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
}
