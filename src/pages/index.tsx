import type { NextPage } from 'next'
import { AiOutlineBehance, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
		<div className={styles.container}>
			<img src="logo.svg" alt="Dahora" />
			<img src="me.png" alt="Carlos Eduardo"/>
			
			<p>@Cadudahora :)</p>
			
			<main className={styles.tree} >
				<button>
					CONFIRA <strong>MEU SITE</strong>
				</button>

				<button>
					CONFIRA <strong>MEU BEHANCE</strong>
				</button>

				<button>
					MEU PORTFÓLIO
				</button>
				
				<button>
					MEU PORTFÓLIO
				</button>
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
