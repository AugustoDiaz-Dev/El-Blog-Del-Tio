import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { motion } from 'framer-motion'
import { filterBtns } from './data'

export default function Home({ allPostsData }) {

  // const [filteredPosts, setFilteredPosts] = useState(null);
  // useEffect(() => {
  //   setFilteredPosts(allPostsData);
  // }, []);

  // function categoryMusic() {
  //     const musicPosts = allPostsData.filter(post => {
  //       return post.category === 'music';
  //     })
  //     console.log(musicPosts)
  //   }
  const [data, setData] = useState(allPostsData);

  function handleFilter(e) {
    const btnValue = e.target.value;

    const data = allPostsData.filter(post => {
      return post.category == btnValue;
    })
    console.log(data)
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>¡Bienvenidos a mi blog!</p>
        <p>
          Historias, anécdotas, experiencias, ideas, música y sueños.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>

        {/* Filter */}
        <div className={utilStyles.filter}>

          {filterBtns &&
            filterBtns.map((type, index) => (
              <>
                <button className={utilStyles.filterBtn}
                  key={index} value={type.value} onClick={handleFilter}>
                  {type.name}
                </button>
              </>
            ))}

        </div>

        <ul className={utilStyles.list}>
          {data && data.map(({ id, date, title }) => (

            <motion.li className={utilStyles.listItem} key={id} whileHover={{
              position: 'relative', zIndex: 1, background: 'white', scale: 1.05,
              transition: { duration: .2 }
            }}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </motion.li>

          ))}

          {/* Default */}
          {/* {allPostsData.map(({ id, date, title }) => (
            <motion.li className={utilStyles.listItem} key={id} whileHover={{
              position: 'relative', zIndex: 1, background: 'white', scale: 1.05,
              transition: { duration: .2 }
            }}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </motion.li>

          ))} */}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}