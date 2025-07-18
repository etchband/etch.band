import { LinkButton } from '@cluesurf/leaf/component/Button'
import { A, P } from '@cluesurf/leaf/component/Content'
import Grid from '@cluesurf/leaf/component/Grid'
import Text from '@cluesurf/leaf/component/Text'
import { CURRENT_URL } from '~/lib/shared/utilities/url'

export default function Footer() {
  return null
  // <footer className="relative b-0 print:hidden">
  //   <section className="pt-64 pb-96 border-0 border-t-8 border-zinc-50 dark:border-zinc-900 border-solid">
  //     <div>
  //       <P align="center">
  //         <span className="sm:hidden block">
  //           <Text className="block">
  //             <A href="/dream">Built</A> with 💗
  //           </Text>{' '}
  //           <Text className="block">by and for the</Text>{' '}
  //           <Text className="block">developer/startup community</Text>
  //         </span>
  //         <Text className="hidden sm:block">
  //           <A href="/dream">Built</A> with 💗 by and for the
  //           developer/startup community
  //         </Text>
  //       </P>
  //       {/* <div className="p-16">
  //         <Grid
  //           minWidth={172}
  //           maxWidth={192}
  //           gap={16}
  //           maxColumns={3}
  //           breakpoints={[1, 3]}
  //           align="center"
  //         >
  //           <LinkButton
  //             size="large"
  //             fill
  //             href="https://github.com"
  //           >
  //             Discuss 💡
  //           </LinkButton>
  //           <LinkButton
  //             size="large"
  //             fill
  //             href={
  //               CURRENT_URL
  //                 ? `https://www.linkedin.com/sharing/share-offsite/?url=${CURRENT_URL}`
  //                 : ''
  //             }
  //           >
  //             Share 🙌
  //           </LinkButton>
  //           <LinkButton
  //             size="large"
  //             fill
  //             href="https://github.com"
  //           >
  //             Contribute 💥
  //           </LinkButton>
  //         </Grid>
  //       </div> */}
  //     </div>
  //   </section>
  //   {/* <section className="border-0 border-t-8 border-zinc-50 dark:border-zinc-900 border-solid mt-16 p-16">
  //     <div className="opacity-40 flex gap-32 items-center justify-center">
  //       <A
  //         color="base"
  //         href="/privacy"
  //       >
  //         Privacy
  //       </A>
  //       <A
  //         color="base"
  //         href="/usage"
  //       >
  //         Usage
  //       </A>
  //     </div>
  //   </section> */}
  // </footer>
}
