import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { motion } from 'framer-motion'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div>
                    <motion.img src={postData.img}
                        whileHover={{
                            position: 'relative', zIndex: 1,
                            background: 'grey', scale: [1, 1.06, 1.05],
                            transition: { duration: .2 }
                        }}
                    />
                    {
                        postData.video ?
                            <div className={utilStyles.centerVideo}>
                                <iframe className={utilStyles.iframe}
                                    width="420" height="315"
                                    src={postData.video}
                                    title={postData.name}></iframe></div>
                            : <></>
                    }

                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}