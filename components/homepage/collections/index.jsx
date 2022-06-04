import styles from "./collections.module.scss"
import CollectionBlock from './collectionBlock'

export default function Collections(collectionsData) {
    return (
        <div className={styles.collections}>
            {collectionsData.data.map(({ name, to, img }) => (
                <CollectionBlock to={to} name={name} img={img}></CollectionBlock>
            ))}
            <div>

            </div>
        </div>
    )
}