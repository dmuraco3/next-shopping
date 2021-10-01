import styles from './SaleHeader.module.scss'

export default function SaleHeader() {
    return (
        <div className={styles.SaleHeader}>
            <span>Sale is on! 25% off sitewide using SUMMER25 at checkout</span>
        </div>
    )
}