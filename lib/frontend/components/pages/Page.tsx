'use client'

import React, { useState } from 'react'
import NextLink from 'next/link'
import { useViewportLayout3Section } from '@cluesurf/leaf/hook/useViewportLayout'
import { H1, H2, P } from '@cluesurf/leaf/component/Content'
import TikTokIcon from '@cluesurf/leaf/component/icon/TikTok'
import SubstackIcon from '@cluesurf/leaf/component/icon/Substack'
import GitHubIcon from '@cluesurf/leaf/component/icon/GitHub'
import YoutubeIcon from '@cluesurf/leaf/component/icon/YouTube'
import XTwitterIcon from '@cluesurf/leaf/component/icon/XTwitter'
import FacebookIcon from '@cluesurf/leaf/component/icon/Facebook'
import LinkedInIcon from '@cluesurf/leaf/component/icon/LinkedIn'
import SoundCloudIcon from '@cluesurf/leaf/component/icon/Soundcloud'
import Environment from '~/lib/frontend/components/Environment'
import Layout, { LayoutState } from '@cluesurf/leaf/component/Layout'
import useScripts from '@cluesurf/leaf/hook/useScripts'
import Grid from '@cluesurf/leaf/component/Grid'
import clsx from 'clsx'
import Text from '@cluesurf/leaf/component/Text'
import Image from '@cluesurf/leaf/component/Image'

export default function Page() {
  return (
    <Environment>
      <Content />
    </Environment>
  )
}

function IconLink({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: React.ReactNode
}) {
  return (
    <NextLink
      className="block w-20 h-20 opacity-70"
      href={href}
      title={title}
    >
      {children}
    </NextLink>
  )
}

function Content() {
  const layout = useViewportLayout3Section()
  const [shift, setShift] = useState<LayoutState>()

  useScripts(['code'])

  return (
    <Layout
      onShift={setShift}
      left={
        shift === 'left' ? undefined : (
          <div className="w-full h-full bg-white dark:bg-black" />
        )
      }
      right={
        shift === 'left' ? undefined : (
          <div className="w-full h-full bg-white dark:bg-black" />
        )
      }
    >
      <div className="min-h-screen relative pt-64 min-h-full flex flex-col">
        <div className="flex-grow pb-128 z-1">
          <div className="flex justify-center p-16">
            <Image
              className="w-64 h-64 select-none dark:filter-(--mostly-invert-filter)"
              src="/logo.png"
              height={64}
              width={64}
            />
          </div>
          <H1 className="text-center">züs</H1>
          <P
            type="secondary"
            className="text-center"
          >
            Meditations on the Universe
          </P>
          <div className="flex flex-wrap justify-center gap-16 p-16">
            <IconLink
              href="https://tiktok.com/@cluesurf"
              title="TikTok"
            >
              <TikTokIcon hoverable />
            </IconLink>
            <IconLink
              href="https://linkedin.com/company/cluesurf"
              title="LinkedIn"
            >
              <LinkedInIcon hoverable />
            </IconLink>
            <IconLink
              href="https://cluesurf.substack.com"
              title="Substack"
            >
              <SubstackIcon hoverable />
            </IconLink>
            <IconLink
              href="https://github.com/cluesurf"
              title="GitHub"
            >
              <GitHubIcon hoverable />
            </IconLink>
            <IconLink
              href="https://youtube.com/@cluesurf"
              title="YouTube"
            >
              <YoutubeIcon hoverable />
            </IconLink>
            <IconLink
              href="https://x.com/cluesurf"
              title="X (Twitter)"
            >
              <XTwitterIcon hoverable />
            </IconLink>
            <IconLink
              href="https://soundcloud.com/cluesurf"
              title="SoundCloud"
            >
              <SoundCloudIcon hoverable />
            </IconLink>
            <IconLink
              href="https://facebook.com/cluesurf"
              title="Facebook"
            >
              <FacebookIcon hoverable />
            </IconLink>
          </div>
          <div className="flex justify-center">
            <Image
              src="/land.png"
              className="small:min-h-256 select-none dark:filter-(--mostly-invert-filter)"
            />
          </div>
          <div className="flex justify-center pb-32">
            <Image
              src="/monkey.png"
              width={layout.width <= 512 ? 256 : 512}
              className="select-none dark:filter-(--mostly-invert-filter)"
            />
          </div>
          <P
            className="text-center"
            type="secondary"
          >
            <em>
              Way back in a simpler time
              <br />
              The great mother showed you rhyme
              <br />
            </em>
          </P>
          <P
            className="text-center"
            type="secondary"
          >
            <em>
              Way down in the feeling tree
              <br />
              The soul calms and urges lead
              <br />
            </em>
          </P>
          <P
            className="text-center"
            type="secondary"
          >
            <em>
              A hidden energy finds your need
              <br />
              And pings you through hide and seek
              <br />
            </em>
          </P>
          <P
            className="text-center"
            type="secondary"
          >
            <em>
              Use your mind to find the stone
              <br />
              Use your heart to find the tone
              <br />
            </em>
          </P>
          <P
            className="text-center"
            type="secondary"
          >
            <Image
              src="/bush.svg"
              className="select-none dark:filter-(--partial-invert-filter) max-h-312"
            />
          </P>
          <section className="pb-16">
            <H2 align="center">About</H2>
            <P>
              züs <strong>¤</strong> is a set of projects for digging
              deep into the universe. It's not necessarily an
              organization or team, just a place to put work under one
              name.
            </P>
            <P>
              The main goal is to explore how the universe works and
              share tools, works, and ideas on it. Building things to
              model reality and make knowledge easier to understand.
            </P>
          </section>
          <section className="pb-16">
            <H2 align="center">Focus</H2>
            <div className="p-16">
              <Grid
                maxColumns={2}
                minWidth={356}
                gap={16}
              >
                <Term
                  title="Flow"
                  text="Tune with the oneness."
                />
                <Term
                  title="Mind"
                  text="Distill experience into thoughts."
                />
                <Term
                  title="Text"
                  text="Organize thoughts into notes."
                />
                <Term
                  title="Code"
                  text="Formalize notes into models."
                />
              </Grid>
            </div>
          </section>
          <section className="pb-16">
            <H2 align="center">Projects</H2>
            <div className="p-16 flex flex-col gap-16 pb-32">
              <Grid
                maxColumns={2}
                minWidth={256}
                gap={16}
              >
                <DisplayItem
                  href="https://tone.surf"
                  name="Tone"
                  imageSrc="https://github.com/cluesurf/tone/blob/make/view/star.svg?raw=true"
                  title="A Speaking Alphabet"
                />
                <DisplayItem
                  href="https://tune.surf"
                  name="Tune"
                  imageSrc="https://github.com/cluesurf/tune/blob/make/view/moon.svg?raw=true"
                  title="A Thinking Language"
                />
                <DisplayItem
                  href="https://tree.surf"
                  name="Tree"
                  imageSrc="https://github.com/cluesurf/tree/blob/make/view/tree.svg?raw=true"
                  title="A Modeling Notation"
                />
                <DisplayItem
                  href="https://term.surf"
                  name="Term"
                  imageSrc="https://github.com/cluesurf/term.tree/blob/make/view/tree.svg?raw=true"
                  title="A Reactive Compiler"
                />
                <DisplayItem
                  href="https://github.com/cluesurf/talk"
                  name="Talk"
                  imageSrc="https://github.com/cluesurf/talk/blob/make/view/star.svg?raw=true"
                  title="A Phonetic Encoding"
                />
                <DisplayItem
                  href="https://github.com/cluesurf/task"
                  name="Task"
                  imageSrc="https://github.com/cluesurf/task/blob/make/view/flame.svg?raw=true"
                  title="A Function Registry"
                />
                {/* <DisplayItem
                  href="https://github.com/cluesurf/text.js"
                  name="Text"
                  title="A Spelling Narrator"
                /> */}
              </Grid>
            </div>
            <P>
              Some projects are mostly complete, but the rest are being
              mapped out and implemented. The underlying motivation is
              simplifying information and computation for everyone.
            </P>
          </section>
        </div>
      </div>
    </Layout>
  )
}

function DisplayItem({
  href,
  name,
  imageSrc,
  title,
}: {
  href: string
  name: string
  imageSrc?: string
  title: string
}) {
  return (
    <NextLink
      href={href}
      className="hover:shadow-xl hover:[&_img]:filter-(--purple-filter) dark:hover:[&_img]:filter-(--dark-purple-filter) dark:[&_img]:filter-(--invert-filter) hover:text-violet-600 dark:hover:text-violet-400 transition rounded-sm block p-32 flex flex-col items-center gap-8 dark:font-medium bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200"
    >
      {imageSrc && (
        <Image
          className="select-none w-96 h-96 mb-24 transition"
          width={96}
          height={96}
          src={imageSrc}
          alt={name}
        />
      )}
      <Text className={clsx('block font-bold')}>{name}</Text>
      <Text className={clsx('block')}>{title}</Text>
    </NextLink>
  )
}

function Term({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-sm block p-16 flex flex-col gap-8 dark:font-medium bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200">
      <Text className={clsx('block font-bold')}>{title}</Text>
      <Text className={clsx('block')}>{text}</Text>
    </div>
  )
}
