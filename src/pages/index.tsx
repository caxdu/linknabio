import type { GetStaticProps, NextPage } from 'next'
import { RichText } from 'prismic-dom'
import { AiOutlineBehance, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { PrismicDocument } from '@prismicio/types'

import { getPrismicClient } from '../services/prismic'

import styles from './home.module.scss'

type PrismicLinksResponse = PrismicDocument & {
	data: {
		content: any[]
		url: {
			url: string
			target: string
		}
	}
}

type Link = {
	id: string
	content: string
	url: { 
		target: string 
		path: string
	}
}

interface HomeProps {
	links: Link[]
}

const Home: NextPage<HomeProps> = ({ links }) => {
  return (
		<div className={styles.container}>
			<img src="logo.svg" alt="Dahora" />
			<img src="me.png" alt="Carlos Eduardo"/>
			
			<p>@Cadudahora :)</p>
			
			<main className={styles.tree} >
				{links.map(link => (
					<a key={link.id} href={link.url.path} dangerouslySetInnerHTML={{__html: link.content}} />
				))}
			</main>

			<footer className={styles.footer}>
				<a href="https://behance.net/dahora">
					<AiOutlineBehance color="#fff" />
				</a>
				<a href="https://instagram.com/caxdu">
					<AiFillInstagram />
				</a>
				<a href="https://linkedin.com/in/dahora">
					<FaLinkedinIn color="#fff" />
				</a>
			</footer>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient()
	
	const response = await prismic.getAllByType<PrismicLinksResponse>('link')

	const links = response.map(({ data, uid }) => ({
		id: uid,
		content: RichText.asHtml(data.content),
		url: {
			target: data.url.target,
			path: data.url.url
		}
	}))

	return {
		props: {
			links
		},
		revalidate: 60 * 60 // 1 hora
	}
}