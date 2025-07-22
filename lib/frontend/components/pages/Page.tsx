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
import useViewport from '@cluesurf/leaf/hook/useViewport'
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
  const [shift, setShift] = useState<LayoutState>()
  const { width } = useViewport()

  useScripts(['code'])

  const logoClassName = width < 400 ? 'w-full' : 'h-256'

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
      <div className="min-h-screen relative min-h-full flex justify-center items-center p-16">
        <Image
          className={clsx(
            '-top-16 select-none dark:filter-(--mostly-invert-filter)',
            logoClassName,
          )}
          src="/logo.png"
        />
      </div>
    </Layout>
  )
}
