import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Blogs', href: '/blogs' },
  { name: 'Portfolio', href: '/portfolios' },
]

const blogs = [
  {
    slug: "nft-marketplace-in-react-js-next-typescript-full-guide",
    title: "NFT Marketplace in React, Typescript & Solidity - Full Guide",
    description: "Learn how to use React / Next JS, Solidity, and Pinata(IPFS) to create NFT marketplace on Ethereum. All In Typescript.",
    date: "2022-12-12",
    coverImage: "https://thrangra.sirv.com/Ethereum_blue_light-small.jpg",
  },
  {
    slug: "web-development-and-coding-full-course",
    title: "Web Development & Code 101 - Full Guide [2022]",
    description: "Learn programming in JS language, HTML, and CSS. Create a Web Application made in React JS. The path to the final project includes many assignments, code exercises, and challenges.",
    date: "2022-08-12",
    coverImage: "https://thrangra.sirv.com/Course_logo%20copy.jpg",
  },
  {
    slug: "rust-webassembly-with-js-ts-the-practical-guide",
    title: "Rust & WebAssembly with JS (TS) - The Practical Guide",
    description: "Learn how to code in Rust! Compile the code to WebAssembly, prepare JS/TS frontend and finish the course by creating the practical Snake game that can run in any browser.",
    date: "2022-04-12",
    coverImage: "https://thrangra.sirv.com/Rust_small.jpg",
  },
  {
    slug: "unity-2d-with-c-complete-game-dev-course",
    title: "Unity 2D With C# - Complete Game Dev Course",
    description: "Create the complete 2D survival game in Unity with C#. Learn best practices and patterns.",
    date: "2022-02-12",
    coverImage: "https://thrangra.sirv.com/Final_Unity_2D_Small.jpg",
  },
  {
    slug: "markdown-full-example",
    title: "Markdown Extensive Example",
    description: "Learn how to write markdown",
    date: "2022-01-12",
    coverImage: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50",
  },
]

const portfolios = [
  {
    slug: "software-engineer-siemens",
    title: "Software Engineer Siemens",
    description: "Working as C++ and C# software engineer",
    employmentDate: "2022-01-12",
    coverImage: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=50",
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/eincodepro',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/c/Eincode',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 576 512" {...props}>
        <path
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/filip_jerga',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Jerga99',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }
]

function Copyright() {
  return (
    <>
      &copy;
      <Link color="inherit" href="/">
        XY
      </Link>{' '}
      {new Date().getFullYear()}
    </>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
        <Head>
          <title>Portfolio - Filip Jerga</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="relative">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            {/* Navbar Starts */}
            <>
              <svg
                className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              {/* NAVIGATION START */}
              <Popover>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                      <div className="flex w-full items-center justify-between md:w-auto">
                        <Link href="/">
                          <a>
                            <span className="sr-only">Your Company</span>
                            <Image
                              width={30}
                              height={30}
                              alt="Your Company"
                              className="h-8 w-auto sm:h-10"
                              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            />
                          </a>
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a className="font-medium text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                    <div className="hidden md:block">
                      {/* Search Input Component */}
                    </div>
                  </nav>
                </div>

                <Transition
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                  >
                    <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          <Image
                            height={20}
                            width={20}
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4">
                        {/* Search Input Component */}
                      </div>
                      <a
                        href="#"
                        className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              {/* NAVIGATION END */}
            </>
            {/* Navbar Ends */}

            {/* Header Starts */}
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to my</span>{' '}
                  <span className="block text-indigo-600 xl:inline">little space</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  My name is XY and I am a software developer. Feel free to check my working experience and blogs about tech topics.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      My Portfolio
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      CV
                    </a>
                  </div>
                </div>
              </div>
            </main>
            {/* Header Ends */}

          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              priority
              layout="fill"
              alt=""
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
            />
          </div>        
        </div>

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 
            className="text-2xl font-bold tracking-tight text-gray-900">
              Newest Blogs
              <Link href="/blogs">
                <a className='text-sm ml-1 text-indigo-600'>
                  (See All)
                </a>
              </Link>
          </h2>

          {/* Blog List Starts */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {blogs.map((blog) => (
              <div key={blog.slug} className="group">
                <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                  <Link href={`/blogs/${blog.slug}`}>
                    <a>
                      <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                        <Image
                          priority
                          layout="fill"
                          objectFit="cover"
                          src={blog.coverImage}
                          className="rounded-lg hover:cursor-pointer"
                          alt={""}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      <span aria-hidden="true" className="inset-0" />
                        { blog.title }
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      { blog.description }
                    </p>
                  </div>
                </div>
                <Link 
                  href={`/blogs/${blog.slug}`}>
                  <a className="text-sm font-bold text-gray-700">
                    Read More
                  </a>
                </Link>
              </div>
            ))}
          </div>
          {/* Blog List Ends */}

          <br></br>

          <h2 
            className="text-2xl font-bold tracking-tight text-gray-900">
              Portfolios
              <Link href="/portfolios">
                <a className='text-sm ml-1 text-indigo-600'>
                  (See All)
                </a>
              </Link>
          </h2>

          {/* Portfolio List Starts */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {portfolios.map((portfolio) => (
              <div key={portfolio.slug} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    layout="fill"
                    src={portfolio.coverImage}
                    alt={""}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={`/portfolios/${portfolio.slug}`}>
                    <a>
                      <span className="absolute inset-0" />
                      { portfolio.title }
                    </a>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{ portfolio.description }</p>
              </div>
            ))}
          </div>
          {/* Portfolio List Ends */}
        </div>
      </div>
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href}>
                  <a className="text-base text-gray-400 hover:text-gray-500">
                    {item.name}
                  </a>
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {socialLinks.map((item) => (
              <a rel='noreferrer' target="_blank" key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400"><Copyright />, All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home