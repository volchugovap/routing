import styles from './Basket.module.scss'

export function Basket() {
	return (
		<div className={styles.container}>
			<p>Корзина</p>
			<div>
				{/* TODO: компонент товара через ID возможно */}
				<div></div>
				<div className={styles.paying}>
					<div>
						<p>Итого</p>
						{/* TODO: компонент оплаты */}
						<div>238</div>
					</div>
					<button>Перейти к оформлению</button>
				</div>
			</div>
		</div>
	)
}
