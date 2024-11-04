import Link from 'next/link';
import Image from 'next/image';
import { UserSocials } from '@/data/socials';
import { BaseTemplate } from '../data/templates/base';
import React from 'react';
import { AppSetting } from '../data/appSetting';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 pb-8">
      <div className="px-4 md:px-32 lg:px-64">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center mb-16">
            <Link
              href="/"
              className="text-base hover:text-zinc-400 underline decoration-wavy decoration-1"
            >
              Home
            </Link>
            <Link
              href="/resume"
              className="text-base hover:text-zinc-400 flex items-center gap-1 group"
            >
              <span className="group-hover:underline decoration-wavy decoration-1">
                See resume
              </span>
              <span className="transition-transform duration-200 transform group-hover:rotate-90">
                ↗
              </span>
            </Link>
          </nav>

          <div className="flex justify-between items-start">
            <div>
              <div className="flex justify-between gap-4 mb-5">
                <div>
                  <h1 className="text-2xl font-medium mb-4">
                    {BaseTemplate.fullName}
                  </h1>
                  <div className="space-y-2 mb-6">
                    <p className="text-base text-zinc-300 flex items-center gap-2">
                      <span>📍</span> {BaseTemplate.location}
                    </p>
                    <p className="text-base text-zinc-300 flex items-center gap-2">
                      <span>💻</span> {BaseTemplate.tagline}
                    </p>
                  </div>
                </div>

                <Image
                  src={
                    BaseTemplate.heroImage.type === 'url'
                      ? BaseTemplate.heroImage.url
                      : `/images/${BaseTemplate.heroImage.url}`
                  }
                  width={100}
                  height={100}
                  alt="Profile picture"
                  className="w-28 h-28 rounded-sm object-cover transform -rotate-12 shadow-lg border-2 border-white hover:rotate-0 transition-transform duration-300 max-sm:hidden"
                />
              </div>

              <p className="text-base text-zinc-300 leading-relaxed mb-8 max-w-2xl break-words">
                {BaseTemplate.miniBio}
              </p>

              {/* social links start */}
              <div className="flex items-center gap-4 flex-wrap">
                {Object.entries(UserSocials).map(
                  ([name, { icon: Icon, url }]) => (
                    <Link
                      key={url}
                      href={url}
                      className="text-zinc-300 hover:text-zinc-100 flex items-center gap-1 group"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-base underline group-hover:decoration-wavy">
                        {name}
                      </span>
                      <span className="transition-transform duration-200 transform group-hover:rotate-90">
                        ↗
                      </span>
                    </Link>
                  )
                )}
              </div>

              {/* social links end */}
            </div>
          </div>
        </header>

        {/* Work Experience Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-8">work</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-1">procurate</h3>
              <p className="text-zinc-400 mb-4">
                full-stack developer (jul 2024)
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>
                  Implementing a caching system for the company database service
                  to improve performance
                </li>
                <li>
                  Implementing new features to query and download historical
                  documents
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">modular cloud</h3>
              <p className="text-zinc-400 mb-4">
                full-stack developer (sep 2023 to may 2024)
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>
                  Migrating the project from its old design to a new design
                  system
                </li>
                <li>
                  Implementing an Electron port for a local developer-friendly
                  version
                </li>
                <li>Improving the codebase and resolving performance issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-8">projects</h2>

          <div className="grid gap-12">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">ZensOps</h3>
                    <p className="text-zinc-400 mb-2">creator and maintainer</p>
                    <p className="text-zinc-300 mb-4">
                      ZensOps is an open-source, self-hosted Platform as a
                      Service (PaaS) for deploying and managing applications,
                      inspired by projects like Railway, Vercel, and Coolify.
                    </p>
                    <Link
                      href="https://github.com/your-project"
                      className="inline-flex items-center text-zinc-400 hover:text-zinc-100"
                    >
                      <span className="mr-1">https://github.com/zens-ops</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="ZensOps screenshot"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Gh-next</h3>
                    <p className="text-zinc-400 mb-2">creator and maintainer</p>
                    <p className="text-zinc-300 mb-4">
                      A GitHub clone built with Next.js, utilizing the new App
                      Router paradigm and server components. The goal is to
                      recreate GitHub's UI and core functionality from the
                      ground up.
                    </p>
                    <Link
                      href="https://github.com/your-project"
                      className="inline-flex items-center text-zinc-400 hover:text-zinc-100"
                    >
                      <span className="mr-1">https://github.com/gh-next</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Gh-next screenshot"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="container mx-auto px-4 mt-16 pt-8 border-t border-zinc-800">
          <div className="flex justify-between items-center text-zinc-400 text-sm">
            <p>
              Copyright © {AppSetting.copyrightDate} • {AppSetting.appName}
            </p>
            <div className="flex items-center gap-1">
              <span>Built with Next.js</span>
              <span>•</span>
              <span>
                Inspired by{' '}
                <Link
                  href={AppSetting.inspiredBy}
                  className="hover:underline decoration-wavy decoration-1"
                >
                  {AppSetting.inspiredBy}
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
